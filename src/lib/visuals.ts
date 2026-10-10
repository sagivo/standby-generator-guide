/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:power]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 *
 * Palette (industrial deep-green/amber on warm neutrals):
 *   accent green = #1d7a3a, amber = #d97706. Text always uses ink tokens.
 */
import { MODELS, priceTier, PRICE_TIERS, type GeneratorModel } from "../data/models";
import { transferSwitchesTable, maintenanceKitsTable } from "./accessory-tables";

const GREEN = "#1d7a3a";
const AMBER = "#d97706";
const SLATE = "#475569";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${note}</p>` : ""}
</figure>`;
}

/** Horizontal bar chart of rated standby power, colored by price tier. */
export function powerChart(models: GeneratorModel[] = MODELS): string {
  const rows = [...models].sort((a, b) => b.powerKw - a.powerKw || a.shortName.localeCompare(b.shortName));
  const max = 28;
  const ticks = [0, 7, 14, 21, 28];
  const legend = `<div class="viz-legend" aria-hidden="true">
    <span><i style="background:${GREEN}"></i>Budget–mid ($–$$)</span>
    <span><i style="background:${AMBER}"></i>Premium–flagship ($$$–$$$$)</span>
  </div>`;
  const bars = rows
    .map((m) => {
      const hi = m.tier === "premium";
      return `<a class="hbar" href="/generators/${m.id}/" data-tip-value="${m.powerKw} kW standby" data-tip-label="${esc(m.shortName)} · ${esc(m.fuel)}">
      <span class="hbar-label">${esc(m.shortName)}</span>
      <span class="hbar-track"><span class="hbar-fill" style="width:${(m.powerKw / max) * 100}%;background:${hi ? AMBER : GREEN}"></span></span>
      <span class="hbar-val">${m.powerKw} kW</span>
    </a>`;
    })
    .join("");
  const axis = `<div class="hbar-axis" aria-hidden="true"><span></span><span class="hbar-ticks">${ticks
    .map((t) => `<i style="left:${(t / max) * 100}%">${t}</i>`)
    .join("")}</span><span></span></div>`;
  return figure(
    "Standby power by model",
    "kW rating (LP fuel; natural gas may derate some models). More kW = more of your home stays on.",
    `${legend}<div class="hbar-chart" role="list">${bars}</div>${axis}`,
    `Power is only half the sizing story — your actual loads decide. Run the <a href="/tools/kw-size-calculator/">kW size calculator</a> before choosing.`
  );
}

/** Horizontal bar chart of noise, quietest first. */
export function noiseChart(models: GeneratorModel[] = MODELS): string {
  const withNoise = models.filter((m) => m.noiseDb);
  const rows = [...withNoise].sort((a, b) => (a.noiseDb ?? 99) - (b.noiseDb ?? 99));
  const min = 60, max = 72;
  const bars = rows
    .map((m) => {
      const pct = ((m.noiseDb! - min) / (max - min)) * 100;
      return `<a class="hbar" href="/generators/${m.id}/" data-tip-value="${m.noiseDb} dB(A)" data-tip-label="${esc(m.shortName)}">
      <span class="hbar-label">${esc(m.shortName)}</span>
      <span class="hbar-track"><span class="hbar-fill" style="width:${pct}%;background:${SLATE}"></span></span>
      <span class="hbar-val">${m.noiseDb} dB(A)</span>
    </a>`;
    })
    .join("");
  return figure(
    "Noise by model",
    "dB(A) — manufacturer figures, usually measured during the weekly exercise cycle. Quieter is better.",
    `<div class="hbar-chart" role="list">${bars}</div>`,
    `For reference: 60 dB(A) is normal conversation, 70 dB(A) is a vacuum cleaner. Exercise-cycle noise matters most — the generator self-tests weekly.`
  );
}

/** Scatter: standby power (kW) vs starting price. */
export function valueChart(models: GeneratorModel[] = MODELS): string {
  const xMax = 28;
  const yMax = 10000;
  const labels: Record<string, "right" | "left" | "above" | "below"> = {
    "generac-guardian-26kw": "above",
    "champion-14kw-axis": "right",
    "cummins-rs20a": "above",
    "generac-guardian-14kw": "below",
    "kohler-20rescl": "right",
  };
  const dots = models
    .map((m) => {
      const x = (m.powerKw / xMax) * 100;
      const y = (m.priceLow / yMax) * 100;
      const label = labels[m.id] ? `<span class="sc-lbl ${labels[m.id]}">${esc(m.shortName)}</span>` : "";
      return `<a class="sc-dot" href="/generators/${m.id}/" style="left:${x}%;bottom:${y}%" data-tip-value="${priceTier(m).sym} ${priceTier(m).label} · ${m.powerKw} kW" data-tip-label="${esc(m.shortName)}" aria-label="${esc(m.shortName)}: ${priceTier(m).label} price tier, ${m.powerKw} kW"><i></i>${label}</a>`;
    })
    .join("");
  const yTicks = [0, 2500, 5000, 7500];
  const xTicks = [0, 7, 14, 21, 28];
  const grid =
    yTicks.map((t) => `<span class="sc-gy" style="bottom:${(t / yMax) * 100}%"></span>`).join("") +
    xTicks.map((t) => `<span class="sc-gx" style="left:${(t / xMax) * 100}%"><em>${t}</em></span>`).join("");
  return figure(
    "Price vs. standby power",
    "Each dot is one model (cheapest street-price estimate). Lower and further right is better value.",
    `<div class="sc-wrap"><div class="sc-plot">${grid}${dots}</div><div class="sc-xlab">Standby power (kW)</div></div>`,
    `Prices are street-price ranges, not live Amazon prices — and they exclude installation. Full numbers are in the <a href="/generators/">comparison chart</a>.`
  );
}

/** kW → home-size mapping diagram. */
export function sizingDiagram(): string {
  const rows: [string, string, string][] = [
    ["10–14 kW", "Essential circuits", "Fridge, lights, furnace fan, sump pump, internet — plus one small AC with load management."],
    ["18–20 kW", "Most of the house", "Central air (one zone) + all essentials. The sweet spot for 1,500–2,500 sq ft homes."],
    ["22–26 kW", "True whole-house", "Multiple AC zones, well pump, electric range, EV charger. 2,500+ sq ft without compromise."],
  ];
  const bands = rows
    .map(
      ([kw, label, text], i) => `<div class="dg-panel">
      <div class="kw-band" style="background:${i === 0 ? GREEN : i === 1 ? "#2f9e44" : AMBER}">${kw}</div>
      <h4>${label}</h4><p>${text}</p></div>`
    )
    .join("");
  return figure(
    "How much generator do you need?",
    "Rough bands — your actual loads (especially air conditioning) decide the final number.",
    `<div class="dg-grid three">${bands}</div>`,
    `Don't guess: the <a href="/tools/kw-size-calculator/">kW size calculator</a> adds up your essential circuits in two minutes.`
  );
}

/** How a standby generator + automatic transfer switch works. */
export function howItWorksDiagram(): string {
  const svg = `<svg viewBox="0 0 720 300" role="img" aria-label="When utility power fails, the automatic transfer switch senses it, starts the generator, and switches the home to generator power in seconds">
    <rect x="20" y="60" width="150" height="120" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="3"/>
    <text x="95" y="115" text-anchor="middle" font-size="20" fill="#1e293b" font-weight="800">Utility</text>
    <text x="95" y="142" text-anchor="middle" font-size="15" fill="#475569">power grid</text>
    <rect x="285" y="60" width="150" height="120" rx="12" fill="#fef3c7" stroke="${AMBER}" stroke-width="3"/>
    <text x="360" y="115" text-anchor="middle" font-size="20" fill="#1e293b" font-weight="800">ATS</text>
    <text x="360" y="142" text-anchor="middle" font-size="15" fill="#475569">transfer switch</text>
    <rect x="550" y="60" width="150" height="120" rx="12" fill="#dcfce7" stroke="${GREEN}" stroke-width="3"/>
    <text x="625" y="115" text-anchor="middle" font-size="20" fill="#1e293b" font-weight="800">Generator</text>
    <text x="625" y="142" text-anchor="middle" font-size="15" fill="#475569">standby unit</text>
    <g stroke="#1e293b" stroke-width="3" fill="none" marker-end="url(#ah)">
      <line x1="170" y1="120" x2="280" y2="120"/>
      <line x1="435" y1="120" x2="545" y2="120"/>
    </g>
    <rect x="285" y="210" width="150" height="70" rx="12" fill="#f1f5f9" stroke="#475569" stroke-width="2" stroke-dasharray="8 5"/>
    <text x="360" y="240" text-anchor="middle" font-size="18" fill="#1e293b" font-weight="700">Your home</text>
    <text x="360" y="262" text-anchor="middle" font-size="14" fill="#475569">stays powered</text>
    <line x1="360" y1="180" x2="360" y2="208" stroke="#1e293b" stroke-width="3"/>
    <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#1e293b"/></marker></defs>
    <text x="360" y="40" text-anchor="middle" font-size="16" fill="#1e293b" font-weight="600">Outage detected → generator starts → ATS switches in ~10 seconds</text>
  </svg>`;
  return figure(
    "How a home standby system works",
    "Three parts: the generator, the automatic transfer switch (ATS), and your fuel supply.",
    `<div class="dg-wide">${svg}</div>`,
    `The ATS is the unsung hero — it senses the outage, starts the generator, and isolates your home from the grid so lineworkers stay safe.`
  );
}

export const VISUALS: Record<string, () => string> = {
  "chart:power": () => powerChart(),
  "chart:value": () => valueChart(),
  "chart:noise": () => noiseChart(),
  "diagram:sizing": sizingDiagram,
  "diagram:how-it-works": howItWorksDiagram,
  "accessories:transfer-switches": transferSwitchesTable,
  "accessories:maintenance-kits": maintenanceKitsTable,
};
