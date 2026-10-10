/** Accessory tables rendered into markdown via `[[accessories:transfer-switches]]` / `[[accessories:maintenance-kits]]`. */
import { ACCESSORIES, type Accessory } from "../data/accessories";
import { MODELS } from "../data/models";
import { AFFILIATE_REL, amazonLink } from "./amazon";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const shortName = (id: string) => MODELS.find((m) => m.id === id)?.shortName ?? id;
const fitsText = (a: Accessory) => (a.fits.includes("universal") ? "Most standby generators" : a.fits.map(shortName).join(", "));
const buy = (a: Accessory) =>
  `<a class="btn buy btn-xs" href="${amazonLink(a.name, a.asin)}" rel="${AFFILIATE_REL}" target="_blank">Check price</a>`;

function table(caption: string, items: Accessory[], cols: { head: string; cell: (a: Accessory) => string }[]) {
  return `<div class="cmp-wrap acc-table"><table class="cmp">
  <caption>${esc(caption)}</caption>
  <thead><tr>${cols.map((c) => `<th scope="col">${c.head}</th>`).join("")}<th scope="col"><span class="sr-only">Buy</span></th></tr></thead>
  <tbody>${items
    .map((a) => `<tr>${cols.map((c, i) => (i === 0 ? `<th scope="row">${c.cell(a)}</th>` : `<td data-label="${c.head}">${c.cell(a)}</td>`)).join("")}<td class="c-buy">${buy(a)}</td></tr>`)
    .join("")}</tbody>
</table></div>`;
}

export function transferSwitchesTable(): string {
  const items = ACCESSORIES.filter((a) => a.kind === "ats").sort(
    (a, b) => Number(b.oem) - Number(a.oem) || a.brand.localeCompare(b.brand)
  );
  return table("Automatic transfer switches on Amazon (compatibility checked October 2026)", items, [
    { head: "Transfer switch", cell: (a) => esc(a.name) },
    { head: "Type", cell: (a) => (a.oem ? "Official" : "Universal") },
    { head: "Fits", cell: (a) => esc(fitsText(a)) },
  ]);
}

export function maintenanceKitsTable(): string {
  const items = ACCESSORIES.filter((a) => a.kind === "maintenance").sort(
    (a, b) => Number(b.oem) - Number(a.oem) || a.brand.localeCompare(b.brand)
  );
  return table("Annual maintenance kits on Amazon (compatibility checked October 2026)", items, [
    { head: "Kit", cell: (a) => esc(a.name) },
    { head: "Type", cell: (a) => (a.oem ? "Genuine" : "Universal") },
    { head: "Fits", cell: (a) => esc(fitsText(a)) + (a.fitNote ? ` <span class="fine">(${esc(a.fitNote)})</span>` : "") },
  ]);
}
