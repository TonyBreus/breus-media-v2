# BREUS MEDIA — Analytics & Tracking Readiness Audit
### Date: 2026-04-01
### Scope: Pre-soft-launch instrumentation review

---

## 1. Current Tracking State

### Summary: Zero tracking code exists anywhere in the codebase.

**Root layout** (`app/layout.tsx`, 14 lines):
- No `<Script>` tags
- No `gtag`, `dataLayer`, `fbq`, or any analytics snippet
- No third-party `<link>` preconnects for analytics domains
- Clean, minimal: just Inter font + globals.css

**Search result across all source files** for: `gtag`, `GA4`, `google-analytics`, `analytics`, `pixel`, `fbq`, `metrika`, `yandex`, `dataLayer`, `GTM`, `plausible`, `posthog`, `mixpanel`, `segment`, `hotjar`, `clarity`:
> **0 occurrences in code.** Mentions appear only in documentation files (CONTEXT_NEXT_CHAT.md, CHANGELOG_ARCHIVE.md) as a known P2 gap.

### CTA Architecture (what exists but is untracked)

| Component | Count | Trigger | Destination | Has onClick tracking? |
|-----------|-------|---------|-------------|----------------------|
| `DroneStickyCta` | 7 variants | Scroll-triggered, fixed position | `#contact` anchor | No |
| `TourStickyCta` | 8 variants | Scroll-triggered, fixed position | `#contact` anchor | No |
| `MidCta` | Reusable, used across ~60 pages | Mid-page section | `#contact` (default) | No |
| Hero CTA buttons | Various, per-page | Above fold | `#contact` or WhatsApp | No |
| `FinalFormSection` submit | 1 global | Form submit | `e.preventDefault()` — **goes nowhere** | No |
| `FinalFormSection` WhatsApp | 1 global | Button click | `https://wa.me/995574619393` | No |

### Critical discovery: the form does not submit

`FinalFormSection.tsx:58` — `onSubmit={(e) => e.preventDefault()}`

The "Написать" submit button fires `e.preventDefault()` and stops. There is no API call, no email send, no webhook. **The only real conversion action on the site is the WhatsApp link** at line 150. This makes WhatsApp click the single most important event to track before launch.

---

## 2. Missing Launch-Critical Tracking

### P0 — No analytics provider at all
There is no way to know how many people visit the site, from where, or what they do. Every session is invisible.

### P0 — WhatsApp click is untracked
`<a href="https://wa.me/995574619393">` in FinalFormSection has no `onClick` handler. This is the only functional conversion on the site. Currently zero visibility into whether anyone converts.

### P1 — CTA click intent is untracked
Clicks on DroneStickyCta / TourStickyCta / MidCta / hero CTAs (which scroll to `#contact`) signal lead intent. None are instrumented. No way to measure funnel entry rate.

### P1 — Form submit attempt is untracked
Even though the form does nothing on submit, the submit button click is still a useful intent signal (user completed the form and tried to send).

### P2 — No page-level UTM / source attribution
There is no mechanism to capture which traffic source (social, direct, search) led to a conversion. WhatsApp opens in a new tab — any source context is lost.

---

## 3. Recommended Minimal Pre-Launch Setup

Principle: **smallest possible instrumentation footprint that makes soft launch legible.**

### Step 1: Pick one analytics provider (choose one)

**Option A — Google Analytics 4** (recommended if client needs Google Ads compatibility later)
- Free, industry standard
- Automatic page view tracking via `next/navigation`
- `gtag` for custom events
- Requires: GA4 Measurement ID (format: `G-XXXXXXXXXX`)

**Option B — Yandex Metrika** (already noted as option in P2 task; better for Russian-language audiences, has built-in heatmap and session replay on free tier)
- Free, includes heatmaps + Webvisor at no extra cost
- Simpler event API: `ym(id, 'reachGoal', 'goal_name')`
- Requires: Metrika counter ID

**Recommendation**: Go with GA4 (wider ecosystem, simpler future integrations). If the primary audience is Russia/CIS, add Metrika as secondary.

### Step 2: Add provider script to root layout
Single change, 4–5 lines, no page edits needed. Using Next.js `<Script>` with `strategy="afterInteractive"` to avoid blocking render.

### Step 3: Track WhatsApp click globally
Add `onClick` to the WhatsApp `<a>` in `FinalFormSection.tsx`. One line.

### Step 4: Track form submit attempt
Add `onClick` or `onSubmit` logging on the submit button in `FinalFormSection.tsx`. One line.

**That is the full pre-launch minimum: 1 layout change + 2 event hooks in 1 component.**

### Events to define pre-launch

| Event name | Trigger | Why |
|------------|---------|-----|
| `whatsapp_click` | Click on `wa.me` link in FinalFormSection | Primary conversion — the only real lead action |
| `form_submit_attempt` | Click on "Написать" submit button | Intent signal even though form has no backend |
| Page views | Automatic via GA4 | Traffic baseline |

---

## 4. Recommended Post-Launch Setup

These are real improvements but add complexity not justified before soft launch.

### 4.1 Sticky CTA click tracking (per service family)
Add `onClick` to DroneStickyCta and TourStickyCta with event parameters:
```
event: 'cta_click', { cta_type: 'sticky', service_family: 'drone-real-estate' }
```
Useful for understanding which service pages drive the most contact intent. Can wait 2–4 weeks post-launch when there is traffic to analyze.

### 4.2 MidCta click tracking
Pass an optional `eventLabel` prop to `MidCta` and fire an event on `<a>` click. Low effort, but requires touching ~60 page files to pass the label. Post-launch.

### 4.3 Form backend + confirmation event
The form currently does nothing. Wiring it to a real backend (email, Telegram bot, or Formspree/Resend) is the prerequisite for tracking actual form submissions. Until then, tracking the submit attempt is the best proxy.

### 4.4 Google Tag Manager (GTM)
Only useful if a non-developer (client) needs to manage tags. Adds iframe overhead. Skip for now — direct `gtag` is cleaner for a developer-maintained site.

### 4.5 Scroll depth tracking
Track 25/50/75/100% scroll depth per page family. Useful for content audit. Post-launch.

### 4.6 Heatmaps / Session Replay
Hotjar or Microsoft Clarity (free). Clarity is easiest (4-line script). Useful after soft launch to see actual user behavior patterns. Add 2–4 weeks post-launch when there are enough sessions to be meaningful.

### 4.7 UTM link builder for WhatsApp
When sharing the site link on social/ads, append UTM params so GA4 can attribute which source drove conversions. Not a code change — just operational practice.

---

## 5. First Tiny Implementation Batch

Scope: **2 files, ~10 lines total.** No page redesign, no copy changes.

### File 1: `app/layout.tsx` — add GA4

```tsx
// Add to imports:
import Script from "next/script";

// Add NEXT_PUBLIC_GA_ID to .env.local and Vercel env vars:
// NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

// Add inside <head> (before </head> in RootLayout):
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga4-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### File 2: `components/gazeta/FinalFormSection.tsx` — track 2 events

**WhatsApp click** (line 150, add `onClick`):
```tsx
onClick={() => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', { event_category: 'conversion' });
  }
}}
```

**Form submit attempt** (line 146, add `onClick` to submit button):
```tsx
onClick={() => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit_attempt', { event_category: 'conversion' });
  }
}}
```

### Environment variables needed

| Variable | Where to set | Example value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_GA_ID` | `.env.local` + Vercel project settings | `G-XXXXXXXXXX` |

### Verification checklist (post-implementation)
- [ ] GA4 Real-Time report shows page view when navigating site locally
- [ ] Clicking "Перейти в WhatsApp" fires `whatsapp_click` in GA4 Real-Time > Events
- [ ] Clicking "Написать" fires `form_submit_attempt` in GA4 Real-Time > Events
- [ ] Build passes: `npm run build` — no errors
- [ ] No analytics calls fire in development if `NEXT_PUBLIC_GA_ID` is not set (handle gracefully)

---

## Appendix: What Does NOT Need Tracking Pre-Launch

- Navigation link clicks (not conversion-relevant)
- Service card clicks within NichesStack (UX analytics, not conversion)
- FAQ accordion open/close
- Scroll position on individual pages
- Video play events (no video embeds currently in layout)
- Dark/light mode toggle (does not exist on this site)

---

*Audit produced: 2026-04-01 | Based on HEAD commit 65795f4*
