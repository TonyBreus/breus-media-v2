# BREUS MEDIA — CURRENT HEAD REGRESSION SANITY CHECK
**Date:** 2026-04-01
**HEAD at check time:** `e7c428f` — docs: launch readiness audit against HEAD 70065ab
**Last code-change commit:** `77c634d` — fix(cta-batch1): fix gazeta hero anchor, slug CTA hierarchy and contact path
**Checked against:** actual source code, not prior audit conclusions

---

## 1. EXECUTIVE SUMMARY

**Build: ✅ Passes. Deploy: ✅ Live. No P1 blockers remain.**

All P1 items previously listed as blockers have been resolved in the codebase. The two audit documents produced earlier today (`BREUS_MEDIA_CTA_CONTACT_PATH_AUDIT.md`, `BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md`) were generated against `70065ab` — before commit `77c634d` applied the P1 fixes. The docs were not updated after that fix commit, leaving `CONTEXT_NEXT_CHAT.md` with stale `[ ]` checkboxes. This check corrects that.

**Remaining open items are all P2 (non-blocking for soft launch).**

---

## 2. STILL-ACTIVE ISSUES

All three are P2 — do not block a soft launch.

### 2a. `constants/l2DirectionConfigs.ts` — 5× `'Открыть услугу'` label (P2)

Lines **842, 865, 1457, 1495, 1520** contain:
```ts
primaryCtaLabel: 'Открыть услугу',
```
These drive hero primary CTAs on certain L2 service hub pages to a specific L3 page instead of anchoring to `#services` on the current page. The hub-level config at line 171 already uses the correct pattern (`'Смотреть услуги'` → `#services`). The 5 outliers are inconsistent with that pattern.

**Impact:** Visitor clicking the primary hero CTA lands on a sub-service L3 page before seeing the full services grid. Reduces discovery, not conversion-critical.
**Fix:** 5-line change in one file. Low risk.

---

### 2b. No Sticky CTA in `L2DirectionRenderer` (P2)

`components/l2-direction/L2DirectionRenderer.tsx` has no sticky/persistent CTA. L2 hub pages render 11 sections with no persistent conversion surface while scrolling. Drone L3 pages already have `DroneStickyCta`. L2 hubs are the longest pages on the site.

**Impact:** Missed conversion surface on high-intent pages. Not a regression — was never present.
**Fix:** Add a thin sticky bar analogous to `DroneStickyCta`. More scope than the other P2s.

---

### 2c. No Analytics / Tracking in `app/layout.tsx` (P2)

Root layout is clean — no GA4, GTM, Yandex Metrika, or any other tracking. Zero visibility into traffic sources or conversions from day one.

**Impact:** Can't measure launch performance. Easily added post-launch.
**Note:** May be intentional (privacy preference). Flagged for awareness.

---

## 3. FALSE POSITIVES FROM OLDER AUDITS — NOW RESOLVED

These were flagged as P1 blockers in `BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md` (which was generated against `70065ab`), but were **fixed in commit `77c634d`** before that audit document was committed. They are resolved in current HEAD.

| Issue | Audit Said | Code Reality (HEAD e7c428f) |
|-------|-----------|---------------------------|
| `/gazeta/[slug]` button hierarchy inverted | P1 blocker | ✅ FIXED: "Обсудить проект" = `bg-white text-black` (primary); "Назад к Gazeta" = border ghost (secondary) — `page.tsx:158–171` |
| `/gazeta/[slug]` contact href = `/gazeta#contact` | P1 blocker | ✅ FIXED: now `href="https://wa.me/995574619393"` with `target="_blank"` — `page.tsx:159` |
| `/gazeta` hero `#contact` anchor missing | P1 (noted as resolved) | ✅ CONFIRMED: `id="contact"` at `NichesStack.tsx:1617` |
| AI Visual L3 "Узнать цену" label mismatch | P1 (noted as resolved) | ✅ CONFIRMED: string does not exist anywhere in `app/ai-visual/` |

---

## 4. DOCS / CODE MISMATCHES (CORRECTED IN THIS CHECK)

### 4a. `CONTEXT_NEXT_CHAT.md` — stale last-commit reference
- **Was:** `Последний кодовый коммит: 70065ab`
- **Should be:** `e7c428f` (current HEAD)
- **Fixed:** ✅ Updated in this commit

### 4b. `CONTEXT_NEXT_CHAT.md` — P1 tasks shown as `[ ]` open
Lines 40–43 listed `/gazeta/[slug]` button hierarchy and contact href as uncompleted `[ ]` tasks. Both were fixed in `77c634d` and are confirmed in code. The `[ ]` is misleading for the next session.
- **Fixed:** ✅ Marked as `[x]` with commit reference in this commit

### 4c. `CHANGELOG_ARCHIVE.md` — CTA Fix Batch 1 commit hash `(pending)`
The "2026-04-01 (CTA Fix Batch 1)" entry recorded `(pending)` as the commit hash. The actual commit is `77c634d`.
- **Fixed:** ✅ Updated to `77c634d` in this commit

### 4d. `CONTEXT_NEXT_CHAT.md` — last-commit field not updated after `77c634d`
The context still read `70065ab` even though three subsequent code commits had landed.
- **Fixed:** ✅ Updated to `e7c428f` (current HEAD after this doc commit) in this commit

---

## 5. RECOMMENDED NEXT TINY BATCH (Batch 5)

**Scope: 1 file, 5-line change, ~5 min**

**Target:** `constants/l2DirectionConfigs.ts`

Change all 5 instances of:
```ts
primaryCtaLabel: 'Открыть услугу',
primaryCtaHref: '<some-l3-url>',
```
to:
```ts
primaryCtaLabel: 'Смотреть услуги',
primaryCtaHref: '#services',
```

**Lines:** 842, 865, 1457, 1495, 1520

This is the only remaining inconsistency that touches user-facing conversion paths. Everything else is either already correct or a post-launch addition (analytics, sticky CTA).

---

## ROUTE / IMPORT SPOT-CHECKS (ALL PASSED)

| Check | Result |
|-------|--------|
| `app/page.tsx` redirect | ✅ → `/gazeta` |
| `app/drone-warehouses/page.tsx` redirect | ✅ → `/drone-services/drone-warehouses` |
| `app/drone-service/monitoring-stroiki/page.tsx` | ✅ redirect → `/drone-construction-monitoring` |
| `app/real-estate-2/layout.tsx` noindex | ✅ `robots: 'noindex, nofollow'` |
| All 7 redirect targets | ✅ Sensible and consistent |
| `console.log` in app/ or components/ | ✅ None found |
| Hardcoded `localhost` / `127.0.0.1` | ✅ None found |
| `NEXT_PUBLIC_*` env vars in source | ✅ Only `NEXT_PUBLIC_DEBUG_MODE` in DebugWrapper |
| Analytics in `app/layout.tsx` | ⚠️ None (P2 — noted) |
| `id="contact"` anchor in NichesStack | ✅ Line 1617 |
| AI Visual "Узнать цену" string | ✅ Not present in any `app/ai-visual/` file |

---

*Regression check produced 2026-04-01. No code modified. Docs corrected to match actual code state.*
