/**
 * Standby generator accessories on amazon.com. `fits` uses model ids from
 * models.ts ("universal" for generic items). `fitNote` flags fitment the
 * listing doesn't fully confirm. Links fall back to Amazon search results
 * unless a verified ASIN is set.
 */
export type AccessoryKind = "ats" | "maintenance" | "battery" | "cold" | "surge" | "cover" | "other";

export interface Accessory {
  asin?: string;
  name: string;
  kind: AccessoryKind;
  brand: string;
  /** made by the generator's manufacturer */
  oem: boolean;
  fits: string[];
  /** typical street price (displayed as guidance only, not a live price) */
  price: number;
  why: string;
  fitNote?: string;
}

export const ACCESSORIES: Accessory[] = [
  // ---- Transfer switches
  { name: "Generac 200A service-entrance automatic transfer switch", kind: "ats", brand: "Generac", oem: true, fits: ["generac-guardian-26kw", "generac-guardian-24kw", "generac-guardian-22kw", "generac-guardian-18kw", "generac-guardian-14kw"], price: 900, why: "The official 200A ATS Generac bundles with Guardian kits — buy it separately if your kit arrives without one or you're replacing a failed switch." },
  { name: "Kohler RXT 200A automatic transfer switch", kind: "ats", brand: "Kohler", oem: true, fits: ["kohler-26rcal", "kohler-20rescl"], price: 1100, why: "Kohler's RXT switch with built-in load shedding, the match for RESCL/RCAL generators bought as bare units." },
  { name: "Champion aXis automatic transfer switch", kind: "ats", brand: "Champion", oem: true, fits: ["champion-14kw-axis"], price: 800, why: "The Wi-Fi-enabled aXis ATS with priority load management — the brain that lets a 14kW unit run a bigger home.", fitNote: "Confirm the amperage (100A/150A/200A) matches your panel." },
  // ---- Maintenance kits
  { name: "Generac scheduled maintenance kit (oil, filter, plugs, air filter)", kind: "maintenance", brand: "Generac", oem: true, fits: ["generac-guardian-26kw", "generac-guardian-24kw", "generac-guardian-22kw", "generac-guardian-18kw", "generac-guardian-14kw"], price: 90, why: "Everything for the annual oil-and-filter service in one box, matched to the G-Force engine." },
  { name: "Kohler home generator maintenance kit", kind: "maintenance", brand: "Kohler", oem: true, fits: ["kohler-26rcal", "kohler-20rescl"], price: 95, why: "Oil, filter, spark plugs and air filter sized for the Command PRO V-twin." },
  { name: "Champion standby generator maintenance kit", kind: "maintenance", brand: "Champion", oem: true, fits: ["champion-14kw-axis"], price: 70, why: "The annual service kit for the aXis line — cheap insurance for the 10-year warranty." },
  { name: "Full-synthetic 5W-30 small-engine oil (2-pack)", kind: "maintenance", brand: "Universal", oem: false, fits: ["universal"], price: 35, why: "What most air-cooled standby engines drink. Keep a spare quart next to the generator." },
  // ---- Batteries & cold weather
  { name: "Automatic battery trickle charger / maintainer", kind: "battery", brand: "Universal", oem: false, fits: ["universal"], price: 45, why: "Dead batteries are the #1 reason standby generators fail to start. A maintainer keeps the crank battery topped up year-round." },
  { name: "Group 51R / U1R generator starting battery", kind: "battery", brand: "Universal", oem: false, fits: ["universal"], price: 120, why: "The crank battery most standby units need (not included with the generator). Check your manual for the exact group size.", fitNote: "Group size varies by model — confirm before ordering." },
  { name: "Standby generator cold-weather kit (battery warmer + oil heater)", kind: "cold", brand: "Universal", oem: false, fits: ["universal"], price: 150, why: "Keeps oil and battery warm so the unit cranks on the coldest nights. Champion's aXis doesn't need one; most others benefit below freezing." },
  // ---- Protection
  { name: "Whole-house surge protector (Type 1, panel-mount)", kind: "surge", brand: "Universal", oem: false, fits: ["universal"], price: 130, why: "Generators switch power abruptly — a panel surge protector guards your electronics from the transition. Cheap peace of mind." },
  { name: "Standby generator weather cover", kind: "cover", brand: "Universal", oem: false, fits: ["universal"], price: 60, why: "A breathable cover for units that sit unused for months. Remove it before the weekly exercise cycle.", fitNote: "Measure your enclosure — air-cooled units vary in size." },
  { name: "Propane tank float gauge", kind: "other", brand: "Universal", oem: false, fits: ["universal"], price: 40, why: "Know your LP level at a glance. Running dry mid-outage is the most avoidable generator failure there is." },
];

export const KIND_LABEL: Record<AccessoryKind, string> = {
  ats: "Transfer switch",
  maintenance: "Maintenance",
  battery: "Battery",
  cold: "Cold weather",
  surge: "Surge protection",
  cover: "Cover",
  other: "Other",
};

const KIND_ORDER: AccessoryKind[] = ["ats", "maintenance", "battery", "cold", "surge", "cover", "other"];

/** Accessories for one model: OEM first, then third-party, ordered by usefulness. */
export function accessoriesFor(modelId: string): Accessory[] {
  return ACCESSORIES.filter((a) => a.fits.includes(modelId) || a.fits.includes("universal")).sort(
    (a, b) => Number(b.oem) - Number(a.oem) || KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind)
  );
}

export function universalAccessories(): Accessory[] {
  return ACCESSORIES.filter((a) => a.fits.includes("universal"));
}
