---
title: "What Size Propane Tank for a Generator? (2026)"
seoTitle: "What Size Propane Tank for a Generator?"
description: "What size propane tank do you need for a standby generator? Runtime math, the cold-weather vaporization trap, and why a 250-gallon tank can starve a 20 kW."
pubDate: 2026-10-13
updatedDate: 2026-10-13
category: guide
tag: "Fuel & runtime"
order: 46
heroKeywords: ["what size propane tank for generator", "propane tank size standby generator", "250 vs 500 gallon propane tank"]
picks:
  - id: generac-guardian-24kw
    label: "Most efficient on fuel"
  - id: cummins-rs20a
    label: "Thriftiest on propane"
takeaways:
  - "Sizing a propane tank is <strong>two questions</strong>: how many gallons (runtime) and whether the tank can <strong>vaporize fast enough</strong> in cold weather."
  - "For a 20 kW-class unit, a <strong>500-gallon tank</strong> is the default answer — roughly 6–8 days at half load, and enough vaporization headroom in winter."
  - "A 250-gallon tank can <strong>starve a 20 kW at full load in freezing weather</strong> — the tank still has propane, it just can't turn it to vapor fast enough."
  - "Propane tanks fill to <strong>80%</strong>, so subtract 20% before doing any math."
faq:
  - q: "What size propane tank do I need for a 20kW generator?"
    a: "A 500-gallon tank is the standard recommendation — about 400 usable gallons, roughly 6–8 days of runtime at half load, and enough vaporization capacity to feed a 20 kW in cold weather. A 250-gallon tank works in mild climates but can struggle to vaporize fast enough at freezing temperatures when the tank is low."
  - q: "How long will a 250-gallon propane tank run a generator?"
    a: "A 250-gallon tank holds about 200 usable gallons (filled to 80%). A 20 kW-class standby burning ~2–2.5 gal/hr at half load gets roughly 3–4 days from it — about half that at full load."
  - q: "Can a small propane tank fail to run a generator even when it's not empty?"
    a: "Yes — that's the vaporization limit. Propane must boil off into vapor before the engine can burn it, and vaporization slows as temperature and fuel level drop. In freezing weather, a low, small tank may not produce vapor fast enough for a large generator, even with fuel remaining."
  - q: "Should I buy or lease my propane tank?"
    a: "Owning the tank lets you shop for propane prices and switch suppliers — leased tanks usually lock you to one company. Leasing has lower upfront cost. If propane is your generator's primary fuel, ownership usually pays back through better per-gallon pricing."
---

Choosing the fuel for your standby generator is only half the question if you pick propane — the other half is the tank. And tank sizing is actually **two** questions: how many gallons you need (runtime), and whether the tank can deliver vapor **fast enough** in cold weather. Get the first wrong and you run dry mid-outage. Get the second wrong and the generator sputters even with a half-full tank. Here's the math for both.

(If you haven't picked a fuel yet, see [natural gas vs. propane](/posts/natural-gas-vs-propane-generator/). For the burn-rate numbers behind this article, see the [fuel consumption guide](/posts/standby-generator-fuel-consumption/).)

## The runtime math (question one)

Propane tanks are filled to **80%** for expansion safety — "500 gallons" means about 400 usable gallons. (In some cold-weather regions, fillers go to 90% in winter; assume 80% for planning.)

A 20 kW-class standby burns roughly 2–2.5 gallons per hour at half load and about 3.1–3.7 at full load, depending on the model — for reference, the [Kohler 20RESCL](/generators/kohler-20rescl/) is rated 2.2 gal/hr at half load and 3.7 at full, while the [Cummins RS20A](/generators/cummins-rs20a/) is 1.8 and 3.1:

| Tank size | Usable gallons | Runtime at half load | Runtime at full load |
|---|---|---|---|
| 100 gal | ~80 | ~1.5 days | Under a day |
| 250 gal | ~200 | ~3–4 days | ~2–3 days |
| 500 gal | ~400 | ~6–8 days | ~4–5 days |
| 1,000 gal | ~800 | ~12–16 days | ~8–10 days |

Two rules of thumb: **size the tank for the outage, not the average** — the fuel you have on day one is the fuel you have, because in a widespread outage delivery trucks may not reach you — and remember that bigger generators don't burn much more at the same load, so this table shifts only modestly with kW rating.

## The vaporization trap (question two)

Here's the part almost no one explains before buying: a standby generator doesn't burn liquid propane. It burns propane **vapor** — the gas that boils off the liquid surface inside the tank. The tank's ability to produce vapor fast enough is called its **vaporization capacity**, and it depends on two things: the outside temperature and how much liquid surface area is in contact with the tank walls.

That means vaporization capacity **drops as the tank empties and as it gets colder** — exactly when you need the generator most.

Published field references put a 250-gallon above-ground tank (at 80% fill) at roughly **482,000 BTU/hr** of vaporization capacity at 20°F, dropping to about **241,000 BTU/hr at 0°F**. Now compare: a 20 kW-class unit at half load needs roughly **213,000 BTU/hr**, and at full load — the Kohler 20RESCL's 3.7 gal/hr times ~91,500 BTU per gallon of propane — about **339,000 BTU/hr**.

Do the subtraction: at 0°F, the 250-gallon tank can vaporize 241,000 BTU/hr, and the generator at full load wants 339,000. The generator **starves** — it stumbles, throws low-fuel-pressure faults, or shuts down — while the tank still holds dozens of usable gallons. Let the tank level drop further and the wet surface area shrinks, making it worse.

This is why the 100-gallon tank — fine for a portable generator or a gas grill — is a non-starter for a whole-house standby. It's not the gallons; it's the surface area.

## What this means for your tank choice

**Adjusting for smaller or larger units.** The tables above assume a 20 kW-class unit, the most common whole-house size. A 14 kW unit burns roughly 25–30% less, so a 250-gallon tank stretches to about 4–5 days at half load — but the vaporization constraint doesn't relax nearly as much, because the tank's surface area is the same. Going bigger (24–26 kW) pushes full-load propane demand toward 4+ gal/hr, or roughly 370,000+ BTU/hr — which is why 26 kW buyers in cold climates should treat the 500-gallon tank as the minimum, not the default. The fuel guide's [burn-rate table](/posts/standby-generator-fuel-consumption/) has the model-by-model numbers if you want to run the exact math for your unit.

**250 gallons** — the budget option. Works in mild climates where deep freezes are rare and outages are short. If your winters regularly hit freezing, treat this as a fair-weather tank for a 20 kW-class unit: fine at half load, marginal at full load when it's cold and the tank is low. Keep it topped off before storm season.

**500 gallons** — the default answer for most buyers, and what most installers recommend. About 400 usable gallons gives you roughly a week at half load, and the tank has the surface area to keep vaporizing fast enough through freezing weather at realistic loads. If you're buying one tank and one generator, this is the pairing.

**1,000 gallons** — for rural properties at the end of the feeder, regions with multi-day ice-storm outages, or anyone running 26 kW-class units. Some buyers prefer two 500-gallon tanks over one 1,000 for delivery flexibility and redundancy. In a widespread outage, remember the warning from the fuel guide: **delivery trucks may not reach you**, so the tank is your only fuel.

**100-pound cylinders** — each holds a little under 24 gallons. Fine for portables, useless as the primary fuel for a whole-house standby: you'd be swapping cylinders in the dark.

## Lease vs. own the tank

Most propane companies will happily lease you a tank — low upfront cost, but you're typically locked to that supplier for fills, and lease customers often pay higher per-gallon rates. **Owning the tank** (buying it outright) lets you shop suppliers and negotiate price, and propane prices vary wildly (~$2.50–$4.00/gal depending on region, season, and tank ownership, per the fuel guide). If propane is your generator's primary fuel — and especially if you also heat with it — ownership usually pays back. Ask your supplier for both quotes before you commit.

## Above-ground vs. buried, and the rest of the install

- **Above-ground** tanks are cheaper to install and easy to monitor, but vaporization tracks the air temperature — the cold-weather numbers above apply directly.
- **Buried** tanks get steadier vaporization (soil temperature stays moderate), cost more to install, and need truck access for fills. Have your propane supplier run the vaporization numbers for your specific tank and climate — it's their standard calculation.
- The **regulator** matters: a two-stage regulator setup sized for the generator's BTU demand is part of the install, not an afterthought. Undersized regulators cause exactly the same starvation symptoms as a cold tank.
- **Placement and clearances** are code-driven (NFPA 37/58 and local amendments). Your installer and propane company handle this — don't trench the line yourself to save money. Placement also affects [installation cost](/posts/standby-generator-installation-cost/): a long gas run from a far-placed tank adds real money.
- In hurricane and ice-storm country, consider where the tank sits relative to falling trees and flood lines. A protected tank that survives the storm is the whole point.

## The bottom line

For a 20 kW-class whole-house standby, buy the 500-gallon tank unless you have a specific reason not to. It covers a week of half-load runtime, vaporizes fast enough in freezing weather, and costs only modestly more than a 250 to install. Size up to 1,000 (or twin 500s) if your outages run long or your winters run cold — and whatever you buy, keep it full going into storm season. The most expensive propane is the propane you don't have.
