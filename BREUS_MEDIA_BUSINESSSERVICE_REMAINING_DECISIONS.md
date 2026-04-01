# businessService — Remaining Card Product Decision Audit
**Date:** 01.04.2026
**Scope:** 3 remaining unlinked cards in `businessService` hub (`/business-service`)
**Rule:** No pages created in this session — audit and classify only

---

## 1. Executive Summary

After Coverage Gap Batch C, `businessService` is at 3/6 linked cards:
- ✅ `imidzhevoe-video-biznesa` → `/promo-video/promo-business`
- ✅ `reels-shorts` → `/reels-promo/reels-business`
- ✅ `tury-360` → `/360-tour-business`

The 3 remaining cards represent **genuinely distinct products** that don't fit cleanly into any existing L3 page:

| Card slug | Title | Decision |
|-----------|-------|----------|
| `kontent-sayta-reklamy` | Контент для сайта и рекламы | **NEEDS_NEW_L3** |
| `semka-prostranstva-obekta` | Съёмка пространства / объекта | **NEEDS_MANUAL_PRODUCT_MERGE** |
| `ai-upakovka-kontenta` | AI-упаковка контента | **NEEDS_NEW_L3** |

No card in this batch qualifies for `CAN_STAY_HUB_ONLY` or `SHOULD_LINK_TO_EXISTING_HUB`. All three represent real services Breus Media sells; one of them can be absorbed into an existing page without losing integrity.

---

## 2. Card-by-Card Decision

---

### Card 2 — `kontent-sayta-reklamy`
**Title:** Контент для сайта и рекламы
**Subtitle tags:** Landing · Ads · Performance
**Price:** от 450 ₾
**Current href:** none

**Decision: NEEDS_NEW_L3**

**Proposed route:** `/promo-video/promo-business-ads` or `/promo-video/promo-site-content`

**Why this decision is correct:**

The "Landing · Ads · Performance" framing marks this as **performance marketing content** — a product intent fundamentally different from brand video. The difference:

- `/promo-video/promo-business` = Имиджевое видео: storytelling, team, values, long-form → **brand trust**
- `kontent-sayta-reklamy` = Content for landing pages + ad campaigns → **conversion and acquisition**

The existing promo-business page serves a brand/trust buyer. A business looking for website hero videos, product shots, or ad creatives for paid traffic has a different brief, different output format, and a different budget context (450₾ vs 600₾+ brand video).

**Why existing pages don't cover it:**
- `/promo-video/promo-business` — brand positioning, not performance
- `/reels-promo/reels-business` — social organic reach, not landing page or paid ads
- No existing "performance content" or "landing page content" page exists in any niche

**Merge is wrong because:** The buyer intent and product deliverable are different. Stuffing "ads + landing page content" into the brand video page would confuse pricing and messaging.

**Next step:** Create `/promo-video/promo-business-ads` (or equivalent) in a dedicated batch. Template: `promo-business` page family, rephrased for conversion intent.

---

### Card 5 — `semka-prostranstva-obekta`
**Title:** Съёмка пространства / объекта
**Subtitle tags:** Interior · Exterior · Aerial
**Price:** от 500 ₾
**Current href:** none

**Decision: NEEDS_MANUAL_PRODUCT_MERGE**

**Target for merge:** `/promo-video/promo-business`

**Why this decision is correct:**

"Съёмка пространства / объекта" describes a **commercial space documentation shoot** — photographing/filming an office, retail space, or business location for use on the website and in brand materials. This is:

- Not a standalone product with its own distinct conversion journey
- Typically **sold as part of** an imidzhevoe video package (shoot the space → cut brand video → extract stills)
- At 500₾, it's priced in the same tier as the brand video entry level

The product is real and valuable, but it's a **component** of what the promo-business page already offers. When a client orders a brand video, the space shoot is included or added as an add-on — it's not a separate buying decision with a separate page.

**Why existing pages partially cover it:**
- `/promo-video/promo-business` — includes space footage as part of brand video production
- `/drone-service` — aerial component only; ignores interior/exterior photography
- Real estate pages — for properties being sold, not for business space documentation

**Why it can't be a clean SHOULD_LINK_TO_EXISTING_HUB:**
No existing hub exactly represents "space documentation" — routing to `/drone-service` would mislead (drone ≠ interior photography). Routing to `/promo-video/promo-business` without clarification is closer, but still an incomplete answer.

**What NEEDS_MANUAL_PRODUCT_MERGE means here:**
The `/promo-video/promo-business` page should be **expanded** to explicitly mention space/object shoots as a deliverable within its packages (e.g., add a feature bullet: "Съёмка пространства для сайта"). Then this card can link to that page with full accuracy. This is a content edit to an existing page, not a new page.

**Next step (after page update):** Add `primaryHref: '/promo-video/promo-business'` once that page explicitly covers space shoots. Until then, leave href empty.

---

### Card 6 — `ai-upakovka-kontenta`
**Title:** AI-упаковка контента
**Subtitle tags:** Texts · Scripts · Adaptation
**Price:** от 300 ₾
**Current href:** none

**Decision: NEEDS_NEW_L3**

**Proposed route:** `/ai-content/business-ai-content`

**Why this decision is correct:**

The existing `ai-content` family has a clear pattern — niche-specific AI text/description pages:
- `/ai-content/hotel-ai-descriptions` — AI descriptions for hotel rooms (1310 строк)
- `/ai-content/tourism-ai-packaging` — AI texts for tourism packages (1245 строк)

Both pages follow the same structure: use case intro → AI methodology → deliverable packages → FAQ → CTA.

The business niche is the **natural next member** of this family:
- "Texts · Scripts · Adaptation" = AI-generated marketing copy, video scripts, content repurposing for business clients (retail, services, local brands, commercial real estate)
- At 300₾ entry level — matches the ai-content tier exactly
- businessService trust badges include: B2B, Retail, Сервисы, Коммерческая недвижимость — all are strong buyers of AI content packaging

**Why existing ai-content pages don't cover it:**
- `hotel-ai-descriptions` → hotel-specific (room descriptions, amenities)
- `tourism-ai-packaging` → tourism-specific (excursion packages, route descriptions)
- Neither covers business marketing copy, scripts, or general brand content adaptation

**Why hub-only is wrong:**
Unlike card 5, this is not a component of another product — AI content packaging for business is a **standalone product** with its own delivery workflow (brief → AI draft → human edit → output pack). At 300₾ it's priced as a standalone entry offer. The hotel and tourism versions prove this product type converts.

**Next step:** Create `/ai-content/business-ai-content` using `hotel-ai-descriptions` and `tourism-ai-packaging` as direct templates. This is the cleanest and lowest-risk batch.

---

## 3. Decision Summary Table

| Card | Title | Decision | Rationale | Proposed action |
|------|-------|----------|-----------|-----------------|
| `kontent-sayta-reklamy` | Контент для сайта и рекламы | NEEDS_NEW_L3 | Performance/ads intent is distinct from brand video | Create `/promo-video/promo-business-ads` |
| `semka-prostranstva-obekta` | Съёмка пространства / объекта | NEEDS_MANUAL_PRODUCT_MERGE | Space shoot is a component of promo-business, not standalone | Expand promo-business page, then link |
| `ai-upakovka-kontenta` | AI-упаковка контента | NEEDS_NEW_L3 | Natural 3rd member of ai-content family (hotel + tourism + business) | Create `/ai-content/business-ai-content` |

---

## 4. Recommended Next Tiny Batch

**Batch D1 — Single page, clean pattern:**

**Create `/ai-content/business-ai-content`** → link `businessService.ai-upakovka-kontenta`

Why this first:
- Clearest existing template (copy hotel-ai-descriptions or tourism-ai-packaging structure exactly)
- Lowest content risk — no new product framing needed, just business niche adaptation
- Closes 1 card with 1 new page; no existing page needs editing
- businessService goes from 3/6 → 4/6

**Batch D2 — After D1 (requires content edit first):**

Expand `/promo-video/promo-business` to explicitly include space/object shoot as a package deliverable → add `primaryHref: '/promo-video/promo-business'` to `semka-prostranstva-obekta` → 4/6 → 5/6

**Batch D3 — Most work, lowest urgency:**

Create `/promo-video/promo-business-ads` for `kontent-sayta-reklamy` → 5/6 → 6/6 (businessService fully linked)

---

## Appendix — Why CAN_STAY_HUB_ONLY Was Rejected for All Three

`CAN_STAY_HUB_ONLY` is appropriate when:
- The card describes a generic service variation covered by the hub's general pitch
- The product doesn't convert on its own or doesn't have distinct pricing logic
- A dedicated page would add no conversion value

None of the three cards qualify:
- Card 2 (`kontent-sayta-reklamy`) has a specific buyer intent (performance, not brand) and distinct pricing
- Card 5 (`semka-prostranstva-obekta`) is a real service but better as a merge target than an orphan
- Card 6 (`ai-upakovka-kontenta`) has direct template precedents in two other niches — staying hub-only would be inconsistent with the established ai-content product line

`SHOULD_LINK_TO_EXISTING_HUB` was also rejected: no existing page covers these products cleanly enough to serve as a primary destination without misleading the buyer.
