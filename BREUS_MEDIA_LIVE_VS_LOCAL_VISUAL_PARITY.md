# BREUS MEDIA — LIVE VS LOCAL VISUAL PARITY AUDIT
Date: 2026-04-01
Primary focus: `/gazeta`
Live reference: https://breus-media-v2.vercel.app/gazeta
Local baseline used for final parity: production build + start (`NEXT_PUBLIC_DEBUG_MODE=false`, `PORT=3200`)

## 1. Executive summary
- `/gazeta` is in near-full visual parity with live on desktop, mobile portrait, and mobile landscape.
- Main parity issues are on L2 hero systems (`/drone-service`, partially `/real-estate-service`), not on `/gazeta`.
- One critical mismatch found: `/drone-service` initial hero state differs from live (default active slide and hero panel ordering).
- Important audit caveat: local `next dev` + `.env.local` (`NEXT_PUBLIC_DEBUG_MODE=true`) introduces debug overlays and motion-timing noise; final conclusions below are based on production-like local render.

## 2. Critical regressions

| Page/Area | Live reference | Local current | Difference | Severity | Likely cause |
|---|---|---|---|---|---|
| `/drone-service` hero initial state (desktop top) | Hero opens on `Мониторинг стройки`; compact left list starts with `Недвижимость`; secondary CTA `Заказать` | Hero opens on `Недвижимость`; compact left list starts with `Регулярные аэроотчёты`; secondary CTA `Подобрать услугу` | First-screen message and CTA context changed vs live | Critical | Drift in hero stitch defaults/content contract (`components/drone/DroneHeroStitch.tsx`, service sequencing + CTA copy) |

## 3. Medium regressions

| Page/Area | Live reference | Local current | Difference | Severity | Likely cause |
|---|---|---|---|---|---|
| `/real-estate-service` hero secondary CTA | `Заказать` | `Подобрать услугу` | Secondary CTA wording no longer matches live | Medium | Hero CTA copy changed in `components/real-estate-service/RealEstateHeroStitch.tsx` |
| `/drone-service` + `/real-estate-service` full-page captures | Hero slide seen in live often differs from local in same breakpoint capture | Hero slide phase differs per run | Rotating hero appears out of phase in parity screenshots | Medium | Auto-rotation cadence + load-time/hydration timing mismatch (5s rotation loops) |
| `/drone-construction-monitoring` top block copy | Intro/right-panel body copy variant A | Intro/right-panel body copy variant B | Same structure/layout, but visible text changed | Medium | Content-text updates after last live deploy |

## 4. Cosmetic differences

| Page/Area | Live reference | Local current | Difference | Severity | Likely cause |
|---|---|---|---|---|---|
| `/gazeta` clock widget | Real-time clock value | Real-time clock value | Seconds differ between captures | Cosmetic | Expected runtime time drift (`TimeWidget`) |
| `/gazeta` marquee rows | Continuous movement | Continuous movement | Minor ticker offset/frame differences | Cosmetic | Capture moment variance during animation |
| Cross-page text rendering | Anti-aliased text | Anti-aliased text | Tiny rasterization differences in still capture | Cosmetic | Browser capture timing/subpixel rendering |

## 5. `/gazeta` detailed comparison

### Summary
`/gazeta` is visually aligned with live across all requested breakpoints.

### Requested checks
| Area | Live reference | Local current | Difference | Severity | Likely cause |
|---|---|---|---|---|---|
| Hero video/background | Same dark cinematic hero/video treatment | Same | No structural difference observed | None | — |
| Two marquee/ticker rows | 2 rows visible and animated | 2 rows visible and animated | No structural difference; only timing offset | Cosmetic | Animation phase at capture moment |
| Landing header content | Agency block + center clock + CTA behavior intact | Same | No structural regression | None | — |
| Logo/brand reveal on scroll | `BREUS MEDIA` compact header state visible in scrolled capture | Same | No regression observed in scrolled-state captures | None | — |
| Clock widget | Tbilisi clock shown | Tbilisi clock shown | Second-level value differs | Cosmetic | Runtime seconds |
| Section stack `00–09` | Sections present, same ordering and card system | Same | No missing sections observed | None | — |
| Final contact/form section | Present and reachable in stack flow | Present and reachable | No visibility/structure regression | None | — |
| CTA hierarchy | Primary/secondary visual hierarchy preserved | Same hierarchy | No hierarchy regression found on `/gazeta` | None | — |
| Card appearance / card CTA | Cards and CTA blocks match live composition | Same | No visual card regression found | None | — |

### Quantified screenshot parity (`/gazeta`)
- Desktop full: `Changed>=16` = `0.83%`
- Mobile portrait full: `Changed>=16` = `0.98%`
- Mobile landscape full: `Changed>=16` = `0.07%`
- Diff concentration is limited to clock/ticker animation frames.

## 6. L2 comparison notes

### `/real-estate-service`
- Layout parity is strong across desktop/portrait/landscape.
- Main mismatch: hero secondary CTA text (`Заказать` live vs `Подобрать услугу` local).
- Hero card system, section order, pricing/trust/contact blocks remain visually aligned.

### `/drone-service`
- Structural layout is mostly aligned below hero.
- Main mismatch is above-the-fold initial hero state:
  - Live starts on `Мониторинг стройки` with a different compact service navigator ordering.
  - Local starts on `Недвижимость` with `Регулярные аэроотчёты` entering visible compact list.
- CTA text mismatch also present (`Заказать` live vs `Подобрать услугу` local).

### Representative L3 spot checks (time-allow pass)
- `/drone-construction-monitoring` (desktop top): visual structure is aligned; copy text differs in intro/right panel.
- `/promo-video/promo-real-estate` (desktop top): visually matched.

## 7. Safe first visual restore batch only
1. Restore `/drone-service` hero initial state to live parity (default active slide + compact panel ordering) without redesign.
2. Align hero secondary CTA copy to live on `/drone-service` and `/real-estate-service` (`Заказать`).
3. Keep parity checks on production-like local baseline (`NEXT_PUBLIC_DEBUG_MODE=false`) to avoid false regressions from debug overlays/dev timing.
4. Re-run targeted parity captures only for:
   - `/drone-service` desktop top + mobile portrait top
   - `/real-estate-service` desktop top
   - `/gazeta` (sanity recheck)

## Visual confirmation artifacts
- Main evidence folder: `output/playwright/live-localprod-parity-2026-04-01`
- Key files used:
  - `live-gazeta-*.png` vs `local-gazeta-*.png`
  - `live-gazeta-contact-*.png` vs `local-gazeta-contact-*.png`
  - `live-real-estate-service-*.png` vs `local-real-estate-service-*.png`
  - `live-drone-service-*.png` vs `local-drone-service-*.png`
  - `live-*-desktop-hero-top.png` vs `local-*-desktop-hero-top.png`
  - `diff-metrics.tsv` and `diffs/`
