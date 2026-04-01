# BREUS MEDIA — LAUNCH READINESS AUDIT
**Generated:** 2026-04-01 (automated scheduled task)
**HEAD at audit time:** `70065ab` — fix: remove trust-lowering placeholders, Заказать CTA, add noindex for drafts
**Live URL:** https://breus-media-v2.vercel.app
**Domain target:** breus.media

---

## 1. EXECUTIVE SUMMARY

The site is in **near-launch condition**. The build passes cleanly (102+ routes, all static), Vercel auto-deploy is connected to `main`, all 81 pages have SEO metadata, and all major structural issues from earlier sessions have been resolved.

Two **small UX defects** remain in `/gazeta/[slug]` that are worth fixing before soft launch — they affect how potential clients contact the studio from the editorial hub. Everything else either is already resolved or can safely wait until post-launch.

**Soft-launch verdict: GREEN with 1 small batch of fixes.**

---

## 2. ACTIVE BLOCKERS BEFORE SOFT LAUNCH

### 2a. `/gazeta/[slug]` — Inverted Button Hierarchy (P1)

**File:** `app/gazeta/[slug]/page.tsx:158–170`

The bottom CTA pair has reversed visual weight:
- **"Назад к Gazeta"** → `bg-white text-black` (primary gold/white fill — dominant)
- **"Обсудить проект"** → `border border-white/15 bg-white/[0.03]` (ghost border — recessive)

A visitor landing on a `/gazeta/[slug]` article is presented with navigation-back as the most visually prominent action. The conversion action ("Обсудить проект") is visually secondary. This is backwards for a lead-generation studio site.

**Fix required:** Swap styles — make "Обсудить проект" the filled primary button and "Назад к Gazeta" the border secondary.

---

### 2b. `/gazeta/[slug]` — Cross-Page Anchor in Contact CTA (P1)

**File:** `app/gazeta/[slug]/page.tsx:165`

```tsx
href="/gazeta#contact"
```

The "Обсудить проект" button navigates the user away from the current article page to `/gazeta`, then attempts to scroll to `#contact`. This:
1. Loses the current page context (the user leaves the article)
2. Depends on the `#contact` anchor being above the fold after navigation (unreliable scroll behavior in SSR/hydration)
3. Is a two-hop path when a direct WhatsApp link would work in one

**Fix required:** Change `href="/gazeta#contact"` → `href="https://wa.me/995574619393"` (direct WhatsApp). Alternatively, add an inline contact block on `/gazeta/[slug]` itself, but that is more scope.

---

## 3. IMPORTANT BUT NON-BLOCKING ITEMS

### 3a. L2 Hub Hero CTA — "Открыть услугу" Routes to L3 (P2)

**File:** `constants/l2DirectionConfigs.ts:842, 865, 1457, 1495, 1520`

Five L2 service configs use `primaryCtaLabel: 'Открыть услугу'` with `primaryCtaHref` pointing to individual L3 pages. The main hub config at line 171 correctly uses `'Смотреть услуги'` → `#services`.

Users clicking the hero primary CTA on these L2 hubs are sent to a specific sub-service L3 page rather than being shown the full services grid on the current page. This shortcircuits the conversion funnel for users who haven't decided which sub-service they want yet.

**Suggested fix:** Change `primaryCtaLabel: 'Открыть услугу'` → `'Смотреть услуги'` and `primaryCtaHref` → `'#services'` on the 5 affected configs. Low-risk, single-file change.

---

### 3b. L2 Hubs — No Sticky CTA Bar (P2)

**Component:** `components/l2-direction/L2DirectionRenderer.tsx`

L2 hub pages render 11 sections (Hero → Services → Pricing → SocialProof → Process → TrustLite → Map → PainProof → FAQ → Contact) with no sticky call-to-action visible while scrolling. Drone L3 pages already have `DroneStickyCta`. L2 pages — which are the longest in the site — have no persistent conversion surface.

**Suggested fix:** Add a thin sticky bottom bar to `L2DirectionRenderer`, analogous to `DroneStickyCta`. Can reuse the existing component pattern.

---

### 3c. No Analytics / Tracking Pixel (P2)

**File:** `app/layout.tsx`

The root layout contains no Google Analytics, Google Tag Manager, Yandex Metrika, Meta Pixel, or any other tracking. For a service business, this means zero visibility into traffic sources, conversion paths, or form completions from day one.

**Note:** This may be intentional (GDPR/privacy preference, or tracking to be added post-launch). Flagging for awareness only.

---

### 3d. `/drone-service/monitoring-stroiki` — Stub Page (P2)

**File:** `app/drone-service/monitoring-stroiki/page.tsx`

This page is a basic hero stub (53 lines, `'use client'`), not a full-content service page. It appears to be an in-progress placeholder. If this URL is reachable from any nav link or sitemap, users will land on an incomplete page.

**Check required:** Confirm whether this page is linked from anywhere. If not linked yet, no action needed. If linked, either complete the page or redirect to `/drone-construction-monitoring`.

---

## 4. POST-LAUNCH SAFE ITEMS

These are improvements that carry no risk to soft-launch quality and can be done in parallel with or after going live:

1. **Add `id="contact"` fallback to `FinalFormSection`** — Currently `id="contact"` lives in `NichesStack.tsx:1617` as an absolute-positioned div, which works. Adding it to `FinalFormSection` directly would be cleaner but is not a functional gap.

2. **L2 Hero secondary CTA** — Some L2 configs have no `secondaryCtaLabel`. Adding `'Смотреть цены'` → `#pricing` would strengthen the hero. Post-launch polish.

3. **Form submission backend** — The `FinalFormSection` on `/gazeta` has a multi-channel form UI (Telegram/WhatsApp/Email selection + service checkboxes) but there is no `action` endpoint or API route visible. If the form is not wired to an actual submission handler, it does not work. **Verify this is working or is WhatsApp/Telegram deeplink only before launch.**

4. **`/real-estate-2`** — Has `noindex/nofollow` via layout (correctly applied in commit `70065ab`). Can be kept as a design experiment, removed, or promoted once content is finalized.

5. **Versioned component directories** (`/v12`–`/v23`) — Archive directories in `components/`. Not imported anywhere in production pages. Safe to leave as-is or clean up post-launch.

---

## 5. AREAS ALREADY STABLE / FROZEN

No action needed in these areas — verified against HEAD `70065ab`:

| Area | Status | Evidence |
|------|--------|----------|
| **Build** | ✅ Passes | 102+ static routes, `npm run build` OK |
| **SEO metadata** | ✅ Complete | All 81 pages: title, description, canonical |
| **Domain normalization** | ✅ Done | breus.media in all 41 affected files |
| **Route integrity** | ✅ Clean | All hrefs in droneServicesData, l2DirectionConfigs, NichesStack verified |
| **`DebugWrapper` production parity** | ✅ Fixed | Non-debug mode preserves className/style on wrapper div |
| **AI Visual L3 CTA labels** | ✅ Fixed | All pages use "Написать в WhatsApp" / contextual labels; "Узнать цену" removed |
| **`/gazeta` hero CTA `#contact` anchor** | ✅ Fixed | `id="contact"` present in `NichesStack.tsx:1617` |
| **`/gazeta` ticker deduplication** | ✅ Fixed | `showTickers={false}` on SmartHeader in landing |
| **Pricing matrix** | ✅ Verified | 3 violations corrected in prior session |
| **`DroneServicesStitch` / `RealEstateServicesStitch`** | ✅ Clean | "Заказать" button removed, "Подробнее" only |
| **Trust-lowering placeholders** | ✅ Removed | Portfolio/examples stub sections removed or commented out |
| **`/drone-real-estate` portfolio section** | ✅ Removed | Placeholder paragraphs and section removed in `70065ab` |
| **`real-estate-2`** | ✅ Noindexed | `noindex/nofollow` layout applied |
| **Vercel deploy pipeline** | ✅ Connected | GitHub `main` → Vercel auto-deploy, last deploy: READY |
| **All component imports** | ✅ Valid | SmartHeader, DroneFooterStitch, L2DirectionRenderer, l2DirectionConfigs all exist and resolve |
| **TypeScript / ESLint** | ✅ Clean | Strict TS5, ESLint v9 flat config, no errors in source |
| **`NEXT_PUBLIC_DEBUG_MODE`** | ✅ Production-safe | `=true` only in `.env.local` (local dev); Vercel production does not inherit this |

---

## 6. RECOMMENDED NEXT BATCH (Batch 5 — Small)

**Scope: 1 file, 2 changes, ~10 min**

**Target file:** `app/gazeta/[slug]/page.tsx`

**Change 1 — Fix button hierarchy (lines 158–170):**
- "Обсудить проект" → `bg-white text-black` (primary fill)
- "Назад к Gazeta" → `border border-white/15 bg-white/[0.03]` (secondary ghost)

**Change 2 — Fix contact CTA destination (line 165):**
- `href="/gazeta#contact"` → `href="https://wa.me/995574619393"`

**Optional same-batch (if low risk is confirmed):**
- In `constants/l2DirectionConfigs.ts`: change the 5 `primaryCtaLabel: 'Открыть услугу'` → `'Смотреть услуги'` with `primaryCtaHref: '#services'`

**Not in this batch:** Sticky CTA on L2 (more scope), analytics (separate decision), monitoring-stroiki completion.

---

*Audit produced by automated scheduled task. All findings verified against HEAD `70065ab`. No code was modified.*
