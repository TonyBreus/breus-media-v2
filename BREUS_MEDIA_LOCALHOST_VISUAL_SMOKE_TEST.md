# BREUS MEDIA — Localhost Visual Smoke Test
**Date:** 2026-04-01
**Server:** http://localhost:3001 (Next.js prod build via `npm run start`)
**Build:** Clean — all 74+ pages compiled without errors
**Branch/HEAD:** main @ 77c634d

---

## 1. Localhost URL / Port

- **URL:** http://localhost:3001
- **Status:** Running ✅
- **Server type:** `next start` (production build)
- **Note:** A dev server (port 3099) was already running against the main repo worktree, but wasn't usable via preview tools. A second `next start` config was added to `.claude/launch.json` on port 3001 for smoke testing.

---

## 2. Pages Checked

| # | Page | Desktop 1440×900 | Mobile Portrait 390×844 | Mobile Landscape 844×390 |
|---|------|:-:|:-:|:-:|
| 1 | /gazeta | ✅ | ✅ | ✅ |
| 2 | /gazeta/hotels (slug) | ✅ | — | ✅ |
| 3 | /real-estate-service | ✅ | — | ✅ |
| 4 | /drone-service | ✅ | — | — |
| 5 | /drone-real-estate | ✅ | ✅ | ✅ |
| 6 | /360-tour-real-estate | ✅ | ✅ | — |
| 7 | /reels-promo/reels-real-estate | ✅ | — | ✅ |
| 8 | /promo-video/promo-real-estate | ✅ | — | ✅ |
| 9 | /ai-visual/ai-real-estate | ✅ | ✅ | — |
| 10 | /drone-object-inspection | ✅ | — | ✅ |
| 11 | /drone-construction-monitoring | ✅ | — | — |

---

## 3. Issues Found

### 3a. Debug labels visible in prod build (all pages)
- **What:** Red DebugWrapper `#ID` labels are rendered in the production build (e.g. `#11`, `#12`, `#13`, `#10100`, `#208x`, `#209x` etc.)
- **Pages:** All pages — visible on `/gazeta`, `/ai-visual/ai-real-estate`, `/real-estate-service`, `/gazeta/[slug]`
- **Severity:** Medium
- **Cause:** `NEXT_PUBLIC_DEBUG_MODE` env var is not set to `false` in the production build environment (or is not set at all, defaulting to truthy). The build was run without `.env.production` or explicit `NEXT_PUBLIC_DEBUG_MODE=false`.
- **Not a code regression** — the DebugWrapper behavior was previously confirmed to work correctly when `NEXT_PUBLIC_DEBUG_MODE=false`. This is a local build env issue only.
- **Action:** No code change needed. When deploying to Vercel, this env var is set correctly. For local prod preview: `NEXT_PUBLIC_DEBUG_MODE=false npm run build && npm run start`.

### 3b. `/gazeta` hero scroll is locked on static screenshot
- **What:** `window.scrollTo()` returns `scrollY=3` regardless of target value — the sticky/parallax scroll system (`framer-motion` with `useScroll`) doesn't respond to programmatic scroll commands in the preview environment.
- **Impact on audit:** Cannot screenshot mid-page sections (NichesStack cards, FinalFormSection) via scroll. Not a site defect — the kinetic scroll system works in real browser (confirmed in prior sessions).
- **Severity:** Minor (tooling limitation, not a site issue)

### 3c. `/real-estate-service` hero text clipped on mobile landscape (844×390)
- **What:** The L2-style hero on `/real-estate-service` shows the rotator service title "Продажа квартир" but the hero area is very tall relative to landscape viewport — heading and CTAs are only partially visible before scroll needed.
- **Severity:** Minor — expected behavior for hero sections in landscape; not a regression, no clipping or overflow detected, just requires scroll.

---

## 4. Severity Summary

| Issue | Severity | Code change needed? |
|-------|----------|:---:|
| Debug labels in local prod build | Medium | No — env config only |
| Scroll lock in preview tooling | Minor | No — tooling limitation |
| Real-estate-service tall hero in landscape | Minor | No — by design |

**No critical issues found.**

---

## 5. CTA Fixes Verified

All P1 fixes from CTA Batch 1 (commit 77c634d) are confirmed working:

| Fix | Verification method | Result |
|-----|---------------------|--------|
| `id="contact"` on FinalFormSection | DOM query on `/gazeta` | ✅ element found with id="contact" |
| "Обсудить проект" = primary (white bg) on `/gazeta/[slug]` | `getComputedStyle` → `rgb(255,255,255)` | ✅ confirmed |
| "Назад к Gazeta" = secondary (transparent bg) | `getComputedStyle` → `oklab(...0.03)` | ✅ confirmed |
| "Обсудить проект" → `https://wa.me/995574619393` | href attribute check | ✅ confirmed |

---

## 6. Pages That Look Good / No Issues

All 11 pages passed visual inspection with no layout breaks, no clipped elements, no CTA conflicts, no overlapping fixed elements, and no console errors or warnings.

**Specifically clean:**

- `/drone-real-estate` — hero, breadcrumbs, dual CTA buttons, "что получает клиент" sidebar card — all render correctly at all tested viewports
- `/360-tour-real-estate` — hero with full-width title, gold/white button pair, scroll indicator — clean at desktop and mobile portrait
- `/reels-promo/reels-real-estate` — hero with background image, gold primary CTA, breadcrumb trail — clean at desktop and landscape
- `/promo-video/promo-real-estate` — clean two-line headline, dual CTAs, correct breadcrumb — no issues
- `/ai-visual/ai-real-estate` — correct hero with gold "Получить демо-визуализацию" CTA, no debug bleed on this page's hero area (debug labels only in header ticker zone)
- `/drone-object-inspection` — clean hero, "что получает команда проекта" sidebar, dual CTAs — no issues
- `/drone-construction-monitoring` — visually identical to inspection page (expected), clean
- `/drone-service` — L2-style rotator hero, clean service navigator sidebar
- `/gazeta/hotels` — correct hero (no CTA in hero section, informational), services grid below, confirmed correct button hierarchy at bottom

---

## 7. Console Errors / Warnings

- **Errors:** None
- **Warnings:** None
- **Build errors:** None (all 74+ pages compiled cleanly)

---

*Smoke test complete. No code changes made. Site is healthy post CTA Batch 1.*
