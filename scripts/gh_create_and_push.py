#!/usr/bin/env python3
"""Create sagivo/standby-generator-guide and push the full tree via git-database REST API."""
import base64, http.client, json, os, socket, sys, time
import urllib.request, urllib.error

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request

REPO = "standby-generator-guide"
OWNER = "sagivo"
WORKDIR = os.path.expanduser("~/workspace/standby-generator-guide")
SKIP_DIRS = {"node_modules", "dist", ".git", ".astro"}
SKIP_FILES = {".gh_blob_cache.json"}

TRANSIENT = (urllib.error.URLError, http.client.RemoteDisconnected,
             http.client.BadStatusLine, TimeoutError, socket.timeout)

def api(method, path, data=None, retries=8):
    body = json.dumps(data).encode() if data is not None else None
    for attempt in range(retries):
        req = urllib.request.Request(
            f"https://api.github.com{path}", method=method, data=body,
            headers={"Content-Type": "application/json", "Accept": "application/vnd.github+json"})
        add_surrogate_to_request(req, "custom.github", allowed_hosts=("api.github.com",))
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r) if r.status != 204 else None
        except urllib.error.HTTPError as e:
            detail = e.read().decode()[:300]
            print(f"HTTP {e.code} {method} {path} (try {attempt+1}/{retries}): {detail}", flush=True)
            if e.code in (401, 403, 404, 422):
                raise RuntimeError(f"HTTP {e.code}: {detail}")
        except TRANSIENT as e:
            print(f"TRANSIENT {type(e).__name__} {method} {path} (try {attempt+1}/{retries})", flush=True)
        if attempt < retries - 1:
            time.sleep(min(3 * 2 ** attempt, 60))
    raise RuntimeError(f"API failed: {method} {path}")

def files():
    out = []
    for root, dirs, names in os.walk(WORKDIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for n in names:
            if n in SKIP_FILES or n.endswith(".pyc"):
                continue
            full = os.path.join(root, n)
            rel = os.path.relpath(full, WORKDIR)
            out.append((rel, full))
    return sorted(out)

def blob_for(full):
    with open(full, "rb") as fh:
        content = fh.read()
    try:
        payload = {"content": content.decode("utf-8"), "encoding": "utf-8"}
    except UnicodeDecodeError:
        payload = {"content": base64.b64encode(content).decode(), "encoding": "base64"}
    return api("POST", f"/repos/{OWNER}/{REPO}/git/blobs", payload)["sha"]

def main():
    # 1. create repo (idempotent-ish: 422 means it exists)
    try:
        r = api("POST", "/user/repos", {"name": REPO, "private": False,
            "description": "Standby Generator Guide — independent reviews, comparisons and calculators for home standby generators (Amazon Associates)."})
        print("repo created:", r["html_url"], flush=True)
    except RuntimeError as e:
        if "422" in str(e):
            print("repo already exists, continuing", flush=True)
        else:
            raise

    # Repo exists (seeded via Contents API). Build on top of current main.
    try:
        base = api("GET", f"/repos/{OWNER}/{REPO}/git/ref/heads/main")["object"]["sha"]
        base_tree = api("GET", f"/repos/{OWNER}/{REPO}/git/commits/{base}")["tree"]["sha"]
        parents = [base]
        print("base main:", base[:8], flush=True)
    except RuntimeError:
        base_tree, parents = None, []
        print("empty repo, no base", flush=True)

    flist = files()
    print(f"{len(flist)} files to push", flush=True)
    tree = []
    for i, (rel, full) in enumerate(flist):
        sha = blob_for(full)
        tree.append({"path": rel, "mode": "100644", "type": "blob", "sha": sha})
        if (i + 1) % 20 == 0:
            print(f"  blobs {i+1}/{len(flist)}", flush=True)

    tree_payload = {"tree": tree}
    if base_tree:
        tree_payload["base_tree"] = base_tree
    new_tree = api("POST", f"/repos/{OWNER}/{REPO}/git/trees", tree_payload)["sha"]
    print("tree:", new_tree[:8], flush=True)
    commit = api("POST", f"/repos/{OWNER}/{REPO}/git/commits",
                 {"message": "Launch Standby Generator Guide: 10 reviews, 7 guides, 3 calculators",
                  "tree": new_tree, "parents": parents})["sha"]
    print("commit:", commit[:8], flush=True)
    try:
        api("POST", f"/repos/{OWNER}/{REPO}/git/refs", {"ref": "refs/heads/main", "sha": commit})
        print("refs/heads/main created", flush=True)
    except RuntimeError as e:
        if "422" in str(e):
            api("PATCH", f"/repos/{OWNER}/{REPO}/git/refs/heads/main", {"sha": commit, "force": True})
            print("refs/heads/main updated", flush=True)
        else:
            raise
    # default branch = main
    api("PATCH", f"/repos/{OWNER}/{REPO}", {"default_branch": "main"})
    print("DONE https://github.com/sagivo/standby-generator-guide", flush=True)

main()
