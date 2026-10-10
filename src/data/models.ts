export type Tier = "budget" | "mid" | "premium";

export interface GeneratorModel {
  /** URL slug: /generators/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons, e.g. "Guardian 26kW". */
  shortName: string;
  brand: string;
  tier: Tier;
  releaseYear: number;
  /** Standby power rating in kW (LP rating; natural gas may derate — see specNotes). */
  powerKw: number;
  /** Fuel options, e.g. "Natural gas + LP". */
  fuel: string;
  /** Transfer switch details, e.g. "200A service-entrance ATS included". */
  transferSwitch: string;
  engine: string;
  /** dB(A) during the weekly exercise cycle, when published. */
  noiseDb?: number;
  enclosure: string;
  /** Remote monitoring / connectivity. */
  connectivity: string;
  warranty: string;
  /** Typical home size this unit backs up, in square feet. */
  homeSqFt: number;
  dimensionsIn?: string;
  weightLb?: number;
  /** Typical US street price range (unit only, before installation). */
  priceLow: number;
  priceHigh: number;
  /** Caveats shown under the spec table (variant differences, unverified figures). */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** Editorial score out of 10 — research-based, see /how-we-research/ */
  score: number;
  scores: { power: number; reliability: number; quietness: number; value: number };
  /** One-paragraph verdict */
  verdict: string;
  sources: string[];
}

/**
 * Specs compiled October 2026 from manufacturer pages, Amazon product listings
 * and dated third-party roundups (see `sources`). Treat as guidance —
 * prices move with sales and freight, and listings change; verify before buying.
 */
export const MODELS: GeneratorModel[] = [
  {
    id: "generac-guardian-26kw",
    name: "Generac Guardian 26kW (7291)",
    shortName: "Guardian 26kW",
    brand: "Generac",
    tier: "premium",
    releaseYear: 2024,
    powerKw: 26,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included",
    engine: "Generac G-Force 1000 Series, 999cc V-twin",
    noiseDb: 67,
    enclosure: "Aluminum, corrosion-resistant (Bisque)",
    connectivity: "Wi-Fi — Mobile Link remote monitoring included",
    warranty: "5-year limited",
    homeSqFt: 2600,
    dimensionsIn: "48.5 x 25.1 x 28.6",
    weightLb: 518,
    priceLow: 6400,
    priceHigh: 7400,
    specNotes: [
      "Amazon listing shows 200A transfer switch and 5-year limited warranty included.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Generac Guardian 26kW 7291 standby generator",
    asin: "B0BL6GL861",
    bestFor: "Large homes (2,500+ sq ft) with multiple AC zones, electric appliances, or a home office that can't go dark.",
    pros: [
      "Most power in the Guardian air-cooled line — true whole-house coverage",
      "200A transfer switch and Wi-Fi monitoring included in the box",
      "5-year warranty and the largest dealer network in the US",
      "Purpose-built G-Force engine runs on natural gas or propane",
    ],
    cons: [
      "Heaviest unit here at 518 lb — freight delivery, plan placement carefully",
      "Professional installation adds several thousand dollars",
      "Overkill (and over-budget) for smaller homes",
    ],
    score: 9.3,
    scores: { power: 10, reliability: 9.5, quietness: 8, value: 8 },
    verdict:
      "The flagship of the best-selling home standby line in America. If your house is 2,500+ sq ft with central air and you want everything — AC, well pump, EV charger — running through an outage, the 26kW Guardian is the default answer. You pay flagship money and freight weight, but nothing in its class is easier to buy, install, and get serviced.",
    sources: [
      "https://www.amazon.com/dp/B0BL6GL861",
      "https://www.generac.com/home-standby/guardian-series",
      "https://strongmocha.com/vetted/best-whole-house-standby-generators/",
    ],
  },
  {
    id: "generac-guardian-24kw",
    name: "Generac Guardian 24kW (7209)",
    shortName: "Guardian 24kW",
    brand: "Generac",
    tier: "premium",
    releaseYear: 2021,
    powerKw: 24,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included",
    engine: "Generac G-Force 1000 Series, 999cc V-twin",
    noiseDb: 67,
    enclosure: "Aluminum, corrosion-resistant",
    connectivity: "Wi-Fi — Mobile Link remote monitoring included",
    warranty: "5-year limited",
    homeSqFt: 2600,
    dimensionsIn: "48 x 25 x 29",
    weightLb: 455,
    priceLow: 5900,
    priceHigh: 6900,
    specNotes: [
      "Amazon listing (ASIN B09NL9T5NZ) shows the 200A transfer switch included.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Generac Guardian 24kW 7209 standby generator",
    asin: "B09NL9T5NZ",
    bestFor: "Large homes that want whole-house backup without quite paying the 26kW flagship price.",
    pros: [
      "24kW covers 2,500+ sq ft homes with multiple AC zones",
      "200A transfer switch and Wi-Fi monitoring included",
      "Lighter and slightly cheaper than the 26kW with the same engine family",
      "5-year warranty, 6,000+ dealer network",
    ],
    cons: [
      "Only 2kW less than the 26kW for a modest saving — compare both prices",
      "Still needs professional installation ($3,000–$5,000+ typical)",
      "Freight delivery at 455 lb",
    ],
    score: 9.1,
    scores: { power: 9.5, reliability: 9.5, quietness: 8, value: 8.5 },
    verdict:
      "The sweet spot of the Guardian line for big homes: nearly flagship power with a friendlier price and 60 lb less freight weight. If the 26kW is overkill on paper but you don't want to drop to 22kW, this is the one. Cross-shop it against the 26kW — sale pricing sometimes makes the bigger unit the better buy.",
    sources: [
      "https://www.amazon.com/dp/B09NL9T5NZ",
      "https://www.generac.com/home-standby/guardian-series",
      "https://acfc.org/best-natural-gas-standby-generators/",
    ],
  },
  {
    id: "generac-guardian-22kw",
    name: "Generac Guardian 22kW (7210)",
    shortName: "Guardian 22kW",
    brand: "Generac",
    tier: "mid",
    releaseYear: 2021,
    powerKw: 22,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included",
    engine: "Generac G-Force 1000 Series V-twin",
    noiseDb: 67,
    enclosure: "Aluminum, corrosion-resistant",
    connectivity: "Wi-Fi — Mobile Link remote monitoring included",
    warranty: "5-year limited",
    homeSqFt: 2500,
    priceLow: 5400,
    priceHigh: 6400,
    specNotes: [
      "Generac's own sizing table places 22kW units at 2,500+ sq ft homes.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Generac Guardian 22kW 7210 standby generator",
    bestFor: "The most popular whole-house size in America — 2,500 sq ft homes with central air.",
    pros: [
      "The classic whole-house size: enough for AC + essentials in most homes",
      "200A transfer switch and Wi-Fi monitoring included",
      "Huge owner base means installers know it cold",
      "5-year warranty",
    ],
    cons: [
      "Tight for homes with two large AC units plus electric heat",
      "Installation cost rivals the unit price",
      "Consider 24kW if the price gap is small",
    ],
    score: 9.0,
    scores: { power: 9, reliability: 9.5, quietness: 8, value: 9 },
    verdict:
      "The 22kW Guardian is the best-selling whole-house generator size for a reason: it covers the median American home with air conditioning at a mid-range price. If your home is around 2,500 sq ft with one or two AC units, start here and size up only if your load calculation says so.",
    sources: [
      "https://www.generac.com/home-standby/guardian-series",
      "https://strongmocha.com/vetted/best-whole-house-standby-generators/",
    ],
  },
  {
    id: "kohler-26rcal",
    name: "Kohler 26RCAL 26kW",
    shortName: "Kohler 26RCAL",
    brand: "Kohler",
    tier: "premium",
    releaseYear: 2022,
    powerKw: 26,
    fuel: "Natural gas (24kW) + liquid propane (26kW)",
    transferSwitch: "200A RXT ATS with load shedding (bundled kits)",
    engine: "Kohler Command PRO V-twin, 999cc",
    noiseDb: 69,
    enclosure: "Corrosion-proof composite",
    connectivity: "OnCue Plus remote monitoring",
    warranty: "5-year / 2,000-hour limited",
    homeSqFt: 2600,
    dimensionsIn: "48 x 26 x 29",
    weightLb: 500,
    priceLow: 6300,
    priceHigh: 7300,
    specNotes: [
      "26kW on LP, 24kW on natural gas — the derate matters if you're on NG.",
      "Composite enclosure is corrosion-proof, a plus in coastal areas.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Kohler 26RCAL 26kW standby generator",
    bestFor: "Generac skeptics who want the other big American brand — especially on propane, where it makes a full 26kW.",
    pros: [
      "Full 26kW on propane with excellent motor-starting capacity",
      "Corrosion-proof composite enclosure — great for coastal homes",
      "PowerBoost technology starts big loads without brownouts",
      "5-year/2,000-hour warranty, premium dealer support",
    ],
    cons: [
      "Derates to 24kW on natural gas",
      "Usually priced above the equivalent Generac",
      "Smaller dealer network than Generac",
    ],
    score: 8.9,
    scores: { power: 10, reliability: 9, quietness: 7.5, value: 7.5 },
    verdict:
      "Kohler's answer to the Guardian 26kW, and in some ways the better-engineered machine — the corrosion-proof enclosure and PowerBoost starting are genuinely useful. On natural gas it gives up 2kW to the Generac, so propane households get the best version of this generator.",
    sources: [
      "https://www.kohlerpower.com/en/generators/home-generators",
      "https://norwall.com/products/kohler-20kw-3-phase-20rca",
    ],
  },
  {
    id: "kohler-20rescl",
    name: "Kohler 20RESCL 20kW",
    shortName: "Kohler 20RESCL",
    brand: "Kohler",
    tier: "mid",
    releaseYear: 2018,
    powerKw: 20,
    fuel: "Natural gas (18kW) + liquid propane (20kW)",
    transferSwitch: "200A RXT service-entrance ATS included (200SELS kit)",
    engine: "Kohler Command PRO CH1000, 999cc V-twin, 32 hp",
    noiseDb: 64,
    enclosure: "Corrosion-proof composite",
    connectivity: "OnCue Plus remote monitoring",
    warranty: "5-year / 2,000-hour limited",
    homeSqFt: 2200,
    dimensionsIn: "48 x 26 x 29",
    weightLb: 500,
    priceLow: 5200,
    priceHigh: 6200,
    specNotes: [
      "20kW on LP, 18kW on natural gas. Amazon listing: ASIN B0046AS0JS (20RESCL-200SELS kit).",
      "64 dB(A) is the exercise-cycle figure; 69 dB(A) at full speed.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Kohler 20RESCL 20kW standby generator",
    asin: "B0046AS0JS",
    bestFor: "Mid-size homes that want Kohler build quality at a mid-range price — and the quietest exercise cycle in this roundup.",
    pros: [
      "64 dB(A) exercise noise — the quietest weekly self-test here",
      "Corrosion-proof enclosure, impact-rated to -30°F",
      "200A service-entrance ATS included in the 200SELS kit",
      "5-year/2,000-hour warranty with premium support",
    ],
    cons: [
      "18kW on natural gas — size carefully if you're on NG",
      "Priced above 20kW-class Generac equivalents",
      "500 lb before freight",
    ],
    score: 8.8,
    scores: { power: 8.5, reliability: 9.5, quietness: 9, value: 8 },
    verdict:
      "The refined choice in the 20kW class. The 20RESCL's party trick is a 64 dB(A) exercise cycle — your neighbors will barely notice the weekly self-test — and the corrosion-proof enclosure shrugs off coastal air. Just remember the natural-gas derate to 18kW when you do your load calculation.",
    sources: [
      "https://www.amazon.com/dp/B0046AS0JS",
      "https://norwall.com/products/Kohler-20kW-Air-Cooled-Standby-Generator-with-200-Amp-SE-Rated-ATS-20RESCL-200SELS",
      "https://www.kohlerpower.com/en/generators/home-generators",
    ],
  },
  {
    id: "champion-14kw-axis",
    name: "Champion 14kW aXis (100837)",
    shortName: "Champion 14kW",
    brand: "Champion",
    tier: "budget",
    releaseYear: 2023,
    powerKw: 14,
    fuel: "Natural gas (12.5kW) + liquid propane (14kW)",
    transferSwitch: "aXis whole-house ATS with Wi-Fi (100A/150A/200A options)",
    engine: "Champion V-twin",
    noiseDb: 62,
    enclosure: "Steel, sound-dampened with gull-wing doors",
    connectivity: "Wi-Fi ATS setup + monitoring",
    warranty: "10-year limited (longest standard in the class)",
    homeSqFt: 1800,
    priceLow: 4400,
    priceHigh: 5400,
    specNotes: [
      "14kW on LP, 12.5kW on natural gas. 62 dB(A) is the quietest full-speed rating here.",
      "Starts at -22°F with no cold-weather kit required.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Champion 14kW home standby generator 100837",
    bestFor: "Budget-conscious buyers and cold climates — the best value standby generator with the best warranty.",
    pros: [
      "62 dB(A) — the quietest generator in this roundup",
      "10-year warranty, the longest standard warranty in home standby",
      "Starts at -22°F with no add-on cold-weather kit",
      "aXis load management handles big appliances on 14kW",
    ],
    cons: [
      "14kW won't run a large home's everything — it's an essentials + AC unit",
      "Derates to 12.5kW on natural gas",
      "Newer platform with a shorter track record than Generac/Kohler",
    ],
    score: 8.7,
    scores: { power: 7.5, reliability: 8.5, quietness: 10, value: 10 },
    verdict:
      "The value disruptor. Champion pairs the quietest operation in the class (62 dB(A)) with a 10-year warranty nobody else matches, at the lowest entry price here. 14kW means choosing your circuits rather than backing up everything — but with aXis load management, that's a smarter trade than it sounds.",
    sources: [
      "https://norwall.com/products/Champion-14kW-aXis-Home-Standby-Generator-with-200-Amp-Whole-House-Automatic-Transfer-Switch-100837",
      "https://www.championpowerequipment.com/product/100837-14-kw-axis-home-standby-system/",
      "https://strongmocha.com/vetted/best-standby-generator-for-home-backup/",
    ],
  },
  {
    id: "cummins-rs20a",
    name: "Cummins QuietConnect RS20A 20kW",
    shortName: "Cummins RS20A",
    brand: "Cummins",
    tier: "premium",
    releaseYear: 2020,
    powerKw: 20,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "Sold separately (Cummins ATS)",
    engine: "Cummins/Onan V-twin",
    noiseDb: 65,
    enclosure: "Aluminum exterior, galvanized steel interior",
    connectivity: "Cloud Connect smartphone app",
    warranty: "5-year limited",
    homeSqFt: 2200,
    dimensionsIn: "34.1 x 36 x 27.3",
    weightLb: 540,
    priceLow: 7800,
    priceHigh: 9000,
    specNotes: [
      "Cummins sells through dealers; the transfer switch is typically quoted separately.",
      "65 dB(A) or less at 23 ft under normal load.",
      "Rarely listed on Amazon — check dealer pricing as well as the live Amazon price.",
    ],
    query: "Cummins QuietConnect RS20A 20kW standby generator",
    bestFor: "Buyers who want commercial-grade Cummins engineering and the most compact 20kW footprint.",
    pros: [
      "Cummins commercial-engine heritage and support",
      "Compact footprint — installs as close as 18 inches from the home",
      "Quiet: 65 dB(A) or less",
      "Intelligent load management for heavy loads",
    ],
    cons: [
      "Transfer switch usually sold separately — compare total system cost",
      "Premium pricing, dealer-channel focused",
      "Harder to find online than Generac/Kohler",
    ],
    score: 8.5,
    scores: { power: 8.5, reliability: 10, quietness: 8.5, value: 6.5 },
    verdict:
      "The connoisseur's pick. Cummins builds engines for a living, and the QuietConnect line shows it — compact, quiet, and overbuilt. You'll pay for it and you'll likely buy through a dealer rather than one-click on Amazon, but for reliability-first buyers it's the strongest 20kW here.",
    sources: [
      "https://shordeegenerators.ca/product/cummins-quiet-connect-20kw-home-standby-generator-c20n6h/",
      "https://www.cummins.com/generators/home-standby",
    ],
  },
  {
    id: "generac-guardian-18kw",
    name: "Generac Guardian 18kW (7182)",
    shortName: "Guardian 18kW",
    brand: "Generac",
    tier: "mid",
    releaseYear: 2021,
    powerKw: 18,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included",
    engine: "Generac G-Force 1000 Series V-twin",
    noiseDb: 67,
    enclosure: "Aluminum, corrosion-resistant",
    connectivity: "Wi-Fi — Mobile Link remote monitoring included",
    warranty: "5-year limited",
    homeSqFt: 2200,
    priceLow: 4900,
    priceHigh: 5900,
    specNotes: [
      "Generac's sizing table places 18kW units at 1,500–2,500 sq ft homes.",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Generac Guardian 18kW 7182 standby generator",
    bestFor: "Mid-size homes (1,500–2,500 sq ft) that want whole-house Generac backup at a mid-range price.",
    pros: [
      "Right-sized for the median suburban home with central air",
      "200A transfer switch and Wi-Fi monitoring included",
      "Same G-Force engine family and 5-year warranty as bigger Guardians",
      "Strong value per kW",
    ],
    cons: [
      "Won't cover two large AC units plus electric range simultaneously",
      "Step up to 22kW if your load calc is close",
      "Installation still costs thousands",
    ],
    score: 8.8,
    scores: { power: 8, reliability: 9.5, quietness: 8, value: 9 },
    verdict:
      "The right-size Guardian for most suburbs. 18kW with a 200A transfer switch covers a 1,500–2,500 sq ft home's essentials plus central air, and it costs meaningfully less than the 22kW+. If your load calculation lands under 18kW with margin, stop here.",
    sources: [
      "https://www.generac.com/home-standby/guardian-series",
      "https://strongmocha.com/vetted/best-whole-house-standby-generators/",
    ],
  },
  {
    id: "briggs-stratton-20kw",
    name: "Briggs & Stratton 20kW PowerProtect (040657)",
    shortName: "B&S 20kW",
    brand: "Briggs & Stratton",
    tier: "mid",
    releaseYear: 2021,
    powerKw: 20,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included (PPX kits)",
    engine: "Commercial-grade Vanguard V-twin",
    noiseDb: 66,
    enclosure: "Galvanneal steel, automotive-grade paint",
    connectivity: "InfoHub wireless monitoring",
    warranty: "10-year limited parts (PowerProtect)",
    homeSqFt: 2200,
    priceLow: 5400,
    priceHigh: 6400,
    specNotes: [
      "PowerProtect line carries Briggs & Stratton's 10-year limited parts warranty.",
      "Verify the exact kit (ATS included vs. separate) on the live listing.",
    ],
    query: "Briggs Stratton 20kW PowerProtect standby generator 040657",
    bestFor: "Buyers who want a 10-year warranty and a commercial Vanguard engine without paying Cummins money.",
    pros: [
      "10-year limited parts warranty — double the industry standard",
      "Commercial-grade Vanguard V-twin engine",
      "InfoHub wireless monitoring with no subscription",
      "Competitive 20kW pricing",
    ],
    cons: [
      "Smaller dealer/installer network than Generac",
      "Enclosure is steel, not aluminum or composite",
      "Less owner-community knowledge base",
    ],
    score: 8.4,
    scores: { power: 8.5, reliability: 8.5, quietness: 8, value: 9 },
    verdict:
      "The warranty play. Briggs & Stratton's PowerProtect line backs a commercial Vanguard engine with a 10-year limited parts warranty — twice what Generac offers — at a mid-range price. The trade-off is a thinner installer network, so confirm local service before you buy.",
    sources: [
      "https://www.briggsandstratton.com/na/en_us/standby-generators.html",
      "https://strongmocha.com/vetted/best-standby-generator-for-home-backup/",
    ],
  },
  {
    id: "generac-guardian-14kw",
    name: "Generac Guardian 14kW (7228)",
    shortName: "Guardian 14kW",
    brand: "Generac",
    tier: "budget",
    releaseYear: 2021,
    powerKw: 14,
    fuel: "Natural gas + liquid propane",
    transferSwitch: "200A service-entrance ATS included",
    engine: "Generac G-Force V-twin",
    noiseDb: 67,
    enclosure: "Aluminum, corrosion-resistant",
    connectivity: "Wi-Fi — Mobile Link remote monitoring included",
    warranty: "5-year limited",
    homeSqFt: 1800,
    priceLow: 4300,
    priceHigh: 5300,
    specNotes: [
      "Generac's sizing table places 14kW units at 1,500–2,500 sq ft homes (managed loads).",
      "Street prices move with sales and freight; check the live Amazon price.",
    ],
    query: "Generac Guardian 14kW 7228 standby generator",
    bestFor: "The cheapest way into a genuine Generac whole-house system — smaller homes and essential-circuits backup.",
    pros: [
      "Lowest-cost entry to the Guardian line with a 200A ATS",
      "Same 5-year warranty and dealer network as bigger models",
      "Wi-Fi monitoring included",
      "Good for essential circuits + one AC unit with load management",
    ],
    cons: [
      "14kW requires load management — not true 'run everything' backup",
      "Champion's 14kW is quieter and has a longer warranty",
      "Small savings vs. the 18kW — compare before deciding",
    ],
    score: 8.3,
    scores: { power: 7, reliability: 9.5, quietness: 8, value: 9 },
    verdict:
      "The budget Guardian. You get the brand, the dealer network, the 5-year warranty and a 200A transfer switch for the lowest price in the line. But 14kW means managed loads, and the Champion 14kW beats it on noise and warranty — cross-shop both before you commit.",
    sources: [
      "https://www.generac.com/home-standby/guardian-series",
      "https://strongmocha.com/vetted/best-whole-house-standby-generators/",
    ],
  },
];

export function getModel(id: string): GeneratorModel {
  const m = MODELS.find((m) => m.id === id);
  if (!m) throw new Error(`Unknown model id: ${id}`);
  return m;
}

export function formatMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function formatPrice(m: GeneratorModel): string {
  return m.priceLow === m.priceHigh
    ? formatMoney(m.priceLow)
    : `${formatMoney(m.priceLow)}–${formatMoney(m.priceHigh)}`;
}

/**
 * Price bands shown instead of dollar figures. Amazon Associates rules only
 * allow exact prices pulled live from Amazon's API, so pages show a band and
 * send readers to Amazon for today's price. Bands use the cheapest version.
 */
export const PRICE_TIERS = [
  { level: 1, sym: "$", label: "Budget", range: "under $4,500" },
  { level: 2, sym: "$$", label: "Mid-range", range: "$4,500–$6,000" },
  { level: 3, sym: "$$$", label: "Premium", range: "$6,000–$7,500" },
  { level: 4, sym: "$$$$", label: "Flagship", range: "over $7,500" },
] as const;
export type PriceTier = (typeof PRICE_TIERS)[number];

export function priceTierOf(price: number): PriceTier {
  return PRICE_TIERS[price < 4500 ? 0 : price < 6000 ? 1 : price < 7500 ? 2 : 3];
}

export function priceTier(m: GeneratorModel): PriceTier {
  return priceTierOf(m.priceLow);
}

/** Template-compatibility alias: template components import `MowerModel`. */
export type MowerModel = GeneratorModel;
