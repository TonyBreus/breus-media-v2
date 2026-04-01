# BREUS MEDIA — CTA & Contact Path Audit
**Date:** 2026-04-01
**Scope:** Cross-family CTA logic, contact path clarity, route-to-action analysis
**Auditor:** Automated scheduled task (Claude)
**Coverage:** /gazeta, L2 hubs (all 10), representative L3 pages per family

---

## 1. Executive Summary

The site has a well-structured CTA skeleton, but consistency breaks down between page families. The strongest pattern lives in **drone L3 pages** (double hero CTAs, 2–3 MidCtAs, sticky CTA, full contact section). The weakest pattern is on **Gazeta slug pages** and **L2 hero sections**, where CTAs drive users in the wrong direction or create dead ends.

**Three critical issues found:**
1. `/gazeta/[slug]` — contact CTA links to `/gazeta#contact` (cross-page anchor; unreliable navigation) and the visual hierarchy favors "go back" over "contact us"
2. **L2 hero primary CTA** — drives user to an L3 page rather than to pricing or contact within the current L2 page
3. **AI Visual L3** — hero CTA labeled "Узнать цену" routes to WhatsApp, not pricing — mismatched expectation

**One systemic gap:** No sticky CTA on any L2 hub page, despite those pages being the longest in the funnel.

---

## 2. Strong CTA Patterns Already Working

### 2a. Drone L3 Pages (`/drone-real-estate`, `/drone-fpv-cinema`, etc.)

**Pattern:**
```
Hero: "Обсудить проект" (#contact) + "Посмотреть пакеты" (#pricing)
  → MidCta: "Обсудить проект"            [after benefits section]
    → Pricing: 3 cards × "Заказать" (#contact)
      → MidCta: "Получить расчёт"        [near pricing]
        → Contact: form + WhatsApp + Telegram + Email + Phone
          + DroneStickyCta (persistent, fixed)
```

**Why it works:**
- Primary CTA is commitment-neutral ("обсудить" = discuss, not "buy")
- Secondary CTA immediately anchors to pricing — serves informed visitors
- Sticky CTA maintains constant conversion touchpoint while user reads content
- MidCtAs appear at moments of maximum trust (after pain/proof sections)
- Contact section offers 4 parallel channels (form, WA, TG, email) — reduces friction for any user type

### 2b. L2 Hub Pages (SmartHeader nav)

**Pattern:**
```
SmartHeader sectionLinks: [Услуги → #services] [Пакеты → #pricing] [FAQ → #faq]
```
**Why it works:** User can jump directly to pricing from any scroll position via the sticky header. This is a passive CTA that is always available without being aggressive.

### 2c. Reels L3 Pages (`/reels-promo/reels-hotel`, etc.)

**Pattern:** Hero = "Обсудить Reels-пакет" (#contact) + "Выбрать пакет" (#pricing)
**Why it works:** Button pair maps directly to the two user states — "ready to talk" vs "still comparing". The distinction is clear and the labels are specific to the service.

### 2d. Gazeta FinalFormSection

**Pattern:** Slide-up animated form with multi-channel submission (form + WhatsApp) and service/niche selectors
**Why it works:** The form provides useful lead qualification (service interest, niche) while WhatsApp button gives an immediate escape hatch. The animation draws attention as the user reaches bottom of page.

---

## 3. Weak CTA / Contact Patterns Still Remaining

### 3a. `/gazeta/[slug]` — Reversed Button Hierarchy + Broken Contact Anchor

**Problem:** Bottom buttons are:
```jsx
// White filled = visually PRIMARY
<Link href="/gazeta">Назад к Gazeta</Link>   // ← backward navigation

// Bordered = visually SECONDARY
<Link href="/gazeta#contact">Обсудить проект</Link>   // ← conversion
```
Visual weight says "go back" is more important than "contact us". The conversion CTA is styled as secondary. Additionally, `href="/gazeta#contact"` navigates to a different page first — the `#contact` anchor will only work if the browser scrolls after the page loads, which is inconsistent behavior.

**Risk:** Users who want to contact after browsing a niche (e.g., /gazeta/hotels) are sent to Gazeta root and may lose context or not reach the form.

### 3b. L2 Hero Primary CTA Drives Users Away

**Problem:** The L2DirectionHero primary CTA dynamically resolves to the active service's `primaryHref` — which is a link to an **L3 page**, not to pricing or contact within the current L2 page.

```jsx
// Hero CTA on /reels-service → links to /reels-promo/reels-hotel
<Link href={activeService.primaryHref}>
    {activeService.primaryCtaLabel ?? 'Открыть услугу'}
</Link>
```
A user who arrives at the L2 hub and clicks the first gold button leaves the L2 page entirely without ever seeing pricing or the contact form.

**Risk:** Users who are not yet committed enough to explore a specific L3 page get sent there immediately, bypassing the L2's own pricing and contact sections. Bounce from L3 without conversion.

### 3c. AI Visual L3 — "Узнать цену" → WhatsApp (Label Mismatch)

**Problem:** Hero CTA says "Узнать цену" (Find out the price) but the href is a direct WhatsApp link.

```jsx
// /ai-visual/ai-real-estate
<Button href={WHATSAPP_URL}>Узнать цену</Button>
```
User expects to see a pricing section or inline price. Instead they are immediately pushed into a WhatsApp chat. This is friction-creating: the user hasn't been warmed up enough to commit to a conversation.

**Risk:** High-intent users who want to see a price before contacting may click, feel misled, and close the chat.

### 3d. No Sticky CTA on L2 Hubs

**Problem:** L3 pages all have a sticky CTA component (DroneStickyCta, TourStickyCta, etc.). L2 pages have none.

L2 pages are the **longest** pages in the funnel (Hero → Services → Pricing → Social Proof → Process → Trust → Map → PainProof → FAQ → Related → Contact = 11 sections). A user who reads through 8 sections with no persistent reminder loses momentum.

**Risk:** Drop-off before reaching the L2 contact section.

### 3e. Promo Video vs Drone: Inconsistent Hero CTA Target

**Problem:** CTA routing is inconsistent across L3 families for equivalent user intent:

| Family | Hero Primary CTA Target |
|--------|------------------------|
| Drone L3 | `#contact` (page anchor) |
| 360-Tour L3 | `#examples` (demo/gallery) |
| Reels L3 | `#contact` (page anchor) |
| Promo Video L3 | Direct WhatsApp URL |
| AI Visual L3 | Direct WhatsApp URL |

Three different routing strategies for the same hero position across equivalent page types. Users who visit multiple service pages may find this inconsistent.

### 3f. /gazeta Main — CTA Too Early, No Pricing

**Problem:** HeroSection CTA "Обсудить проект" (#contact) appears before any service content is shown. The user sees a fullscreen video background and immediately gets a conversion CTA without context. No pricing information exists anywhere on /gazeta.

The `FinalFormSection` at the bottom is comprehensive but `#contact` in the hero does not anchor to it — `FinalFormSection` has no id set.

**Risk:** Hero CTA is a dead link in effect — `href="#contact"` will not scroll to FinalFormSection unless the id is set on that section. Users clicking the hero CTA go nowhere (no-op in browser).

---

## 4. Page-Family Observations

| Family | First CTA | Pricing Visible | Contact Path | Missing |
|--------|-----------|-----------------|-------------|---------|
| /gazeta | "Обсудить проект" → #contact (broken) | No | FinalFormSection (slide-up) | id="contact" on form; pricing info |
| /gazeta/[slug] | None in hero (informational only) | No | /gazeta#contact (cross-page) | In-page contact; button hierarchy fix |
| L2 Hubs | "Открыть услугу" → L3 page | Yes (#pricing section) | L2DirectionContact form | Sticky CTA; hero CTA to #pricing instead |
| Drone L3 | "Обсудить проект" → #contact | Yes | Form + 4 channels | None found |
| 360-Tour L3 | "Смотреть демо" → #examples | Yes | Form + channels | Primary CTA doesn't go to conversion |
| Reels L3 | "Обсудить пакет" → #contact | Yes | Direct links (WA/TG/Phone) | None found |
| Promo Video L3 | "Обсудить видеотур" → WhatsApp | Yes | Direct WhatsApp only | Inconsistent pattern; no contact form |
| AI Visual L3 | "Узнать цену" → WhatsApp | Yes | Direct WhatsApp only | Label mismatch; misleading CTA |
| Drone Monitoring/Inspection | Standard MidCta + StickyCta | Yes | Form + channels | None found |

---

## 5. Representative Page Findings

### 5a. `/gazeta` (Main Landing)

- **First CTA:** "Обсудить проект" in hero area — `href="#contact"`. No element with `id="contact"` exists on the page (FinalFormSection has no id attribute).
- **Path to pricing:** None. /gazeta is an agency landing with no pricing.
- **Contact:** FinalFormSection at the bottom — comprehensive but unreachable via hero CTA anchor.
- **Aggression level:** Appropriate. CTA is subdued (fades with scroll indicator).
- **Finding:** Hero CTA is technically a no-op anchor. Should be `href="#form"` or the form section needs `id="contact"`.

---

### 5b. `/gazeta/hotels` (Gazeta Slug — Category Page)

- **First CTA:** None. Hero is purely informational (eyebrow + title + subtitle + highlights grid).
- **Path to pricing:** No pricing shown. Service cards link to L3 pages.
- **Contact:** Bottom area has "Обсудить проект" → `/gazeta#contact` (cross-page navigation).
- **Finding:** Conversion CTA is styled as secondary (bordered) while "Назад к Gazeta" (backward) is styled as primary (white filled). Inverted hierarchy.

---

### 5c. `/reels-service` (L2 Hub)

- **First CTA (hero):** "Открыть услугу" → active L3 page (e.g., /reels-promo/reels-hotel). Routes user away from L2.
- **Second hero CTA:** "Подобрать услугу" → `#services`. Good.
- **Pricing:** Present at `#pricing` — 3 plans with card CTAs to `#contact`.
- **Contact:** L2DirectionContact form with multi-channel support.
- **No sticky CTA.**
- **Finding:** Hero primary CTA intent is unclear — "open the service" on a service hub page sends you to a sub-page rather than helping you choose or contact.

---

### 5d. `/drone-real-estate` (Drone L3)

- **First CTA:** "Обсудить проект" → `#contact` (gold). Immediately followed by "Посмотреть пакеты" → `#pricing` (bordered).
- **Path to pricing:** 1 click from hero.
- **Contact:** 4 channels, full form. Clear section at `#contact`.
- **Sticky:** DroneStickyCta present throughout scroll.
- **Finding:** Strongest CTA implementation on the site. Reference pattern for other families.

---

### 5e. `/360-tour-real-estate` (360-Tour L3)

- **First CTA:** "Смотреть демо" → `#examples` (gold). "Обсудить проект" → `#contact` (bordered).
- **Rationale:** 360 is a visual product — showing examples first is justified.
- **Finding:** Primary CTA correctly prioritizes proof for this product type. Acceptable pattern.

---

### 5f. `/ai-visual/ai-real-estate` (AI Visual L3)

- **First CTA:** "Узнать цену" → `https://wa.me/995574619393` (gold).
- **Problem:** Label says "price", destination is WhatsApp chat. No inline price shown. User is unprepared for a conversation.
- **Mid CTAs:** Also go to WhatsApp directly. Consistent within the page but pattern is aggressive.
- **Finding:** Relabeling CTA to "Написать в WhatsApp" or adding a teaser price range before the CTA would fix the expectation gap.

---

### 5g. `/promo-video/promo-hotel` (Promo Video L3)

- **First CTA:** "Обсудить видеотур" → direct WhatsApp href (gold).
- **Mid CTAs:** Both go to WhatsApp.
- **Contact section:** WhatsApp + Phone only (no form, no Telegram on this page).
- **Finding:** Promo video pages fully commit to WhatsApp as the only contact channel. Different from Drone/Reels which offer multi-channel. Fine if intentional, but undocumented pattern divergence.

---

## 6. Recommended Next CTA Refinement Batch (Small Only)

Priority order — **P1** = fix first, **P2** = next batch, **P3** = polish.

| # | Page/Family | Current Problem | Recommendation | Priority |
|---|-------------|-----------------|----------------|----------|
| 1 | `/gazeta` | Hero `href="#contact"` is broken anchor | Add `id="contact"` to FinalFormSection wrapper div | P1 |
| 2 | `/gazeta/[slug]` | "Назад к Gazeta" styled as primary (white filled) | Swap button styles: make "Обсудить проект" the white filled primary | P1 |
| 3 | `/gazeta/[slug]` | "Обсудить проект" → `/gazeta#contact` (cross-page anchor) | Change to `https://wa.me/995574619393` or an inline modal | P1 |
| 4 | AI Visual L3 | "Узнать цену" → WhatsApp (label mismatch) | Rename CTA to "Написать в WhatsApp" or add a price teaser before the button | P1 |
| 5 | L2 Hubs | No sticky CTA on the longest pages | Add a simple sticky bottom bar (similar to DroneStickyCta) to L2DirectionRenderer | P2 |
| 6 | L2 Hero | Primary CTA = "Открыть услугу" → L3 page (routes away) | Change to "Посмотреть пакеты" → `#pricing` or "Узнать стоимость" → `#pricing` | P2 |
| 7 | Promo Video L3 | No contact form, only WhatsApp | Consider adding Telegram as fallback channel in contact section | P3 |

### Do NOT touch:
- Drone L3 CTA pattern — strongest on site, reference standard
- L2 SmartHeader nav anchors (#services / #pricing / #faq) — working correctly
- Reels L3 hero CTA pattern — clear and contextually correct
- 360-Tour L3 primary CTA to #examples — intentional, visual product logic is sound

---

## Appendix: CTA Inventory by Page Type

```
/gazeta
  Hero:     "Обсудить проект" → #contact [BROKEN ANCHOR]
  Bottom:   FinalFormSection — "Написать" (form) + "Перейти в WhatsApp" (WA link)

/gazeta/[slug]
  Hero:     None
  Bottom:   "Назад к Gazeta" (WHITE/PRIMARY) + "Обсудить проект" (BORDER/SECONDARY → /gazeta#contact)
  [HIERARCHY INVERTED; CONTACT ANCHOR UNRELIABLE]

L2 Hubs (all 10)
  Hero:     "Открыть услугу" → L3 page [ROUTES AWAY] + "Подобрать услугу" → #services
  Header:   Услуги / Пакеты / FAQ anchors
  Pricing:  3 cards → #contact
  Contact:  L2DirectionContact form + WhatsApp button
  Sticky:   NONE [GAP]

Drone L3
  Hero:     "Обсудить проект" → #contact + "Посмотреть пакеты" → #pricing
  Mid:      MidCta × 2-3
  Pricing:  Cards → #contact
  Contact:  Form + WA + TG + Email + Phone
  Sticky:   DroneStickyCta [STRONG]

360-Tour L3
  Hero:     "Смотреть демо" → #examples + "Обсудить проект" → #contact
  Mid:      MidCta × 2
  Contact:  TourContact form + channels
  Sticky:   TourStickyCta

Reels L3
  Hero:     "Обсудить Reels-пакет" → #contact + "Выбрать пакет" → #pricing [STRONG]
  Mid:      MidCta × 1
  Contact:  WA + TG + Phone direct links

Promo Video L3
  Hero:     "Обсудить видеотур" → WhatsApp (direct) [INCONSISTENT vs other families]
  Mid:      MidCta × 2 → WhatsApp
  Contact:  WA + Phone only

AI Visual L3
  Hero:     "Узнать цену" → WhatsApp (direct) [LABEL MISMATCH]
  Mid:      MidCta × 2-3 → WhatsApp
  Contact:  WA + Phone only

Drone Monitoring/Inspection
  Hero:     Standard hero buttons
  Mid:      MidCta + DroneStickyCta
  Contact:  Form + channels
```

---

*Audit complete. No code was modified. Findings are recommendations only.*
