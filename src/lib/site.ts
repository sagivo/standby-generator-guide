// Central site config. Domain: standby-generator-guide.pages.dev
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "Standby Generator Guide";
export const SITE_URL = "https://standby-generator-guide.pages.dev";
export const SITE_TAGLINE = "Home standby generator guides, comparisons, and calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to home standby generators: model comparisons, kW sizing calculators, installation cost estimators, and Generac vs Kohler breakdowns so you buy the right generator the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/best-standby-generators-2026/", label: "Best Generators" },
  { href: "/generators/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
