---
title: "Automatic Transfer Switch Explained: Sizing, Types & Costs (2026)"
seoTitle: "Automatic Transfer Switch: Sizing Guide (2026)"
description: "What an automatic transfer switch does, how to size one (100A vs 200A), service-entrance vs sub-panel types, and what it adds to your install."
pubDate: 2026-10-13
category: explainer
tag: "Explainer"
heroKeywords: ["automatic transfer switch", "what size automatic transfer switch", "automatic transfer switch vs manual", "ats sizing standby generator"]
picks:
  - id: "generac-guardian-22kw"
    label: "Often bundled with 200A Smart Switch"
  - id: "kohler-20rescl"
    label: "200SELS bundle includes 200A SE-rated ATS"
  - id: "cummins-rs20a"
    label: "RS20AC bundle pairs it with 200A ATS"
takeaways:
  - "A transfer switch is what makes a standby generator <strong>automatic</strong> — it senses the outage, starts the generator, and swaps your home to backup power in ~10–30 seconds."
  - "An ATS installed at the <strong>service entrance must match your service amperage</strong>: 200-amp service needs a 200-amp switch, even if the generator is smaller."
  - "Sub-panel (non-service-entrance) switches only need to cover the circuits they feed — this is how smaller generators back up essential loads."
  - "Load-shedding transfer switches can drop non-essential loads automatically, letting a 20 kW generator do the work of a 24 kW one."
faq:
  - q: "What size automatic transfer switch do I need?"
    a: "If the switch sits at the service entrance (between the meter and your main panel), it must be rated for your full service amperage — 200-amp service needs a 200-amp ATS. If it feeds only a sub-panel of essential circuits, it only needs to handle the maximum current that feeder can deliver."
  - q: "Can I use a 200-amp transfer switch with a 14 kW generator?"
    a: "Yes — the ATS amperage rating describes what it can safely carry, not what the generator must supply. The switch must handle the full utility service current; the generator side is protected by the generator's own breaker. A 14 kW unit with a 200A service-entrance ATS is a common pairing when the home's essentials are load-managed."
  - q: "What's the difference between a service-entrance-rated and a regular transfer switch?"
    a: "A service-entrance (SE) rated ATS contains the main service disconnect and mounts between the meter and your main panel, backing up the whole house. A non-SE switch installs like a sub-panel off a breaker in your main panel and backs up only the circuits wired through it. SE-rated switches cost more but simplify whole-house installs."
  - q: "Does a standby generator come with a transfer switch?"
    a: "Usually yes, as a bundle. Most 14–26 kW standby generators are sold in packages that include a matched ATS (for example, Kohler's 200SELS bundles or Generac's 22 kW + 200A Smart Switch combos). Check the package suffix — unit-only versions are also sold and require buying the switch separately."
  - q: "Automatic vs manual transfer switch: which do I need?"
    a: "Automatic switches sense outages and transfer power with nobody home — the whole point of a standby generator. Manual switches are cheaper but require someone to start the generator and throw the switch, and they're typically paired with portable generators rather than automatic standby units."
  - q: "How long does an automatic transfer switch last?"
    a: "Decades, typically — the contactor mechanism has no engine, no oil, and no fuel to degrade. Exercise cycles keep it exercised weekly. Most failures traced to 'the generator' turn out to be maintenance issues at the engine, covered in the standby generator maintenance guide."
---

The generator gets all the attention, but the **automatic transfer switch (ATS)** is what actually makes your backup power *automatic*. It's the device that notices the utility power died, tells the generator to start, disconnects your house from the dead grid, and connects it to the generator — all in about 10 to 30 seconds, with nobody home and nobody touching anything. Then, when utility power returns and stabilizes, it switches you back and shuts the generator down.

Understanding the ATS matters because it drives a surprising share of your install cost and complexity, and because picking the wrong *type* of switch is one of the most common quoting mistakes.

## What an ATS actually does, second by second

1. **Sensing.** The switch continuously monitors utility voltage. When it drops below a threshold (or disappears entirely) for a programmed delay — typically a few seconds, to ride through momentary blinks — the outage is declared real.
2. **Start signal.** The ATS tells the generator's controller to crank. The engine starts, warms up briefly, and reaches stable voltage and frequency.
3. **Transfer.** A contactor physically disconnects your home from the utility feed and connects it to the generator. This is a "break-before-make" action: you are never connected to both sources at once, which is what keeps utility lineworkers safe.
4. **Re-transfer.** When utility power returns and stays stable for a cooldown period (usually ~5 minutes), the switch transfers the load back, then lets the generator run unloaded briefly to cool down before shutting off.

The whole sequence is why a standby system restores power in ~10 seconds on a Kohler or Cummins, and a bit longer on some Generac configurations — the generator's published "response time" is really the ATS-plus-engine choreography.

## The two types: service-entrance rated vs sub-panel

This is the single most important distinction, and it's where quotes go sideways.

**Service-entrance (SE) rated ATS.** Mounts between your electric meter and your main breaker panel. It becomes your home's main service disconnect, which means it must be rated to carry your *entire service amperage* — a 200-amp service needs a 200-amp switch, full stop, even if the generator feeding it can only produce 60 amps. The upside: the entire panel is backed up, and installation is straightforward (no re-wiring individual circuits). Most whole-house standby installs use this type. Kohler's RXT 200SELS, Generac's 200-amp Smart Switch, and the ATS in Cummins' RS20AC bundle are all SE-rated 200-amp switches.

**Non-service-entrance (sub-panel) ATS.** Installs like a sub-panel, fed from a breaker in your existing main panel. It only backs up the circuits wired through it — typically 8 to 16 essential circuits (fridge, furnace, sump, some lighting, a few outlets). Because it never sees the full service current, its rating only needs to cover the maximum the feeder can deliver. A 50-amp breaker in the main panel feeding a 50-amp ATS is perfectly code-compliant, as long as the generator's breaker is also 50 amps or less.

**The rule of thumb:** SE-rated = whole house, bigger switch, simpler install. Sub-panel = essentials only, smaller switch, cheaper — but someone has to choose which circuits make the cut, and during an outage the rest of the house stays dark.

If you're still deciding between whole-house and essentials-only coverage, the [standby vs portable generator](/posts/standby-vs-portable-generator/) comparison and the [sizing guide](/posts/standby-generator-sizing-guide/) will help you frame the decision before you talk to an installer.

## Sizing: 100 vs 200 vs 400 amps

For **service-entrance installs**, there's no real decision to make: match the switch to the service. A 200-amp service gets a 200-amp ATS. A 400-amp service (large or all-electric homes) needs either a 400-amp switch or a pair of 200-amp switches, and this is worth flagging early — not every brand offers a 400-amp ATS in its residential line, which can force a brand decision on its own.

For **sub-panel installs**, size to the feeder: the ATS rating must be at least the breaker feeding it in the main panel, and the generator's output breaker must be at or below the ATS rating. A 100-amp sub-panel ATS on a 60-amp feeder breaker with a 14 kW generator (about 58 amps on propane) is a textbook-correct pairing.

One subtlety electricians care about: a service-entrance ATS makes your old main panel a *sub-panel* electrically, which means grounds and neutrals must be separated there. It's routine work, but it's part of why SE-rated installs cost more in labor — details like this are covered in the [installation cost](/posts/standby-generator-installation-cost/) breakdown.

## Load-shedding switches: the 20 kW secret weapon

The smartest ATS options do more than switch — they **shed load**. When the generator approaches its limit, a load-shedding switch drops non-essential high-draw loads (second AC, electric water heater, pool pump) in a programmed priority order, then brings them back when capacity frees up.

This is how a 20 kW generator legitimately backs up a house whose "everything on at once" math says 24 kW. Examples from the current market:

- **Kohler RXT 200SELS** — manages 2 HVAC systems plus 4 non-essential loads, built into the SE-rated 200-amp switch bundled with the [Kohler 20RESCL](/generators/kohler-20rescl/).
- **Generac Smart Switch** — load-shed modules for up to 8 large loads, commonly bundled with the [Generac Guardian 22 kW](/generators/generac-guardian-22kw/).
- **Cummins intelligent load management** — lives partly in the generator controller rather than the switch, cycling up to 4 loads on the [Cummins RS20A](/generators/cummins-rs20a/).

If your load calculation lands one size above your budget, ask your installer specifically about the load-shedding option *before* upsizing the generator — the switch upgrade is almost always cheaper than 4 more kilowatts of engine.

## What an ATS adds to the project cost

Bought separately, residential automatic transfer switches typically list around **~$700–$1,500** depending on amperage and SE rating, with 200-amp service-entrance models at the top of that range. In practice, most buyers never see that line item: generator-plus-ATS bundles price the switch into the package, and the visible cost shows up in the electrician's labor instead.

What the ATS *does* change is the shape of the install quote. An SE-rated whole-house switch means heavier conductors, a service-disconnect reconfiguration, and sometimes a meter-can relocation — typically a few hundred dollars more in labor than a sub-panel install covering essential circuits. When comparing installer quotes, make sure every bidder is quoting the *same switch type*; a quote that looks $1,500 cheaper may just be a sub-panel ATS against everyone else's service-entrance switch. The [installation cost estimator](/tools/install-cost-estimator/) can help you sanity-check the totals.

## Placement, code, and what your installer handles

A few practical notes so you can follow the conversation at quoting time:

- **Outdoor rating.** Residential ATS units are almost always NEMA 3R enclosures — rain-tight, mountable outdoors next to the meter. Aluminum enclosures (Kohler, Cummins) resist corrosion better in coastal air than painted steel.
- **Code.** Residential standby falls under NEC Article 702 (Optional Standby Systems). The headline requirement for automatic systems: the generator must be sized to carry the load the ATS can connect — which is exactly why load shedding exists, and why inspectors look kindly on documented load-management setups.
- **Exercise.** The ATS gets exercised along with the generator during the weekly self-test — the contactor cycles without transferring load, which keeps the mechanism free. Like the engine, it benefits from the [maintenance schedule](/posts/standby-generator-maintenance/) your installer sets up.
- **Brand matching.** Manufacturers design their switches to talk to their generators' controllers (two-wire start protocols, load-shed signaling). Third-party ATS units exist, but a matched bundle — generator and switch from the same brand — eliminates the most common commissioning headaches.

The transfer switch is the least glamorous part of a standby system and the part most likely to be wrong on a bad quote. Now you know enough to ask the two questions that matter: *service-entrance or sub-panel?* and *does it shed load?* The answers tell you whether the quote in front of you matches the house you actually live in.
