# BREUS MEDIA — Visual Asset Inventory Audit
**Date:** 2026-04-02
**Scope:** `/gazeta` landing + key L2 hubs + representative L3 pages
**Mode:** Read-only audit — no code changes

---

## 1. Executive Summary

The site has a well-structured visual architecture with consistent image sizing, proper fallback patterns, and a coherent gradient overlay system. However, **100% of non-SVG media is sourced externally** — all images from Unsplash CDN, hero videos from Pixabay. No proprietary Breus Media portfolio content is embedded anywhere on the site.

**Key findings at a glance:**
- `/public/` contains only 6 SVG icons — zero photos, zero videos, zero client-work files
- 80+ Unsplash stock image URLs are hardcoded across data/config files
- 2 hero video elements both point to the same Pixabay placeholder (generic nature footage)
- Every section designed to hold visuals already has proper markup — this is a content gap, not a structural gap
- Several major sections (AboutSection, HowWeWorkSection, ExperienceTrustSection, ProcessStitch, contact blocks) are fully text-based with no visual support at all
- The NichesStack is the richest visual component (63 Unsplash images across 9 niches) but all are stock photos

**Bottom line:** Infrastructure is media-ready. The site needs real assets dropped in, not redesign.

---

## 2. Pages with Strong Existing Media Structure

These pages have visual slots correctly wired up — they just need real content replacing stock.

### 2.1 `/gazeta` — NichesStack
**File:** `components/gazeta/NichesStack.tsx`

| Niche | Hero image | Service card images | Status |
|-------|-----------|---------------------|--------|
| 00 АЭРОСЪЁМКА | Unsplash drone photo | 9 cards × Unsplash | Stock only |
| 01 Недвижимость | Unsplash RE | 6 cards × Unsplash | Stock only |
| 02 Отели | Unsplash hotel | 6 cards × Unsplash | Stock only |
| 03 Рестораны | Unsplash dining | 6 cards × Unsplash | Stock only |
| 04 Авто бизнес | Unsplash auto | 6 cards × Unsplash | Stock only |
| 05 Туризм | Unsplash travel | 6 cards × Unsplash | Stock only |
| 06 Клиники | Unsplash medical | 6 cards × Unsplash | Stock only |
| 07 IT | Unsplash tech | 6 cards × Unsplash | Stock only |
| 08 Ваш бизнес | Unsplash office | 6 cards × Unsplash | Stock only |

**Total:** 9 hero + 54 service card images = 63 visual slots, all wired and rendering. All replaceable by swapping URLs in `NichesStack.tsx`.

---

### 2.2 `/drone-service` — DroneHeroStitch + DroneServices
**Files:** `components/drone/DroneHeroStitch.tsx`, `components/drone/droneServicesData.ts`

- Hero: rotating full-screen image carousel across 10+ drone services — prop wired, data-driven
- Service grid: 10 cards, each with `<motion.img>` — all rendering
- Map: 1 Unsplash Georgia landscape image
- All images: Unsplash stock

---

### 2.3 `/real-estate-service` — RealEstateHeroStitch + Services
**Files:** `components/real-estate-service/RealEstateHeroStitch.tsx`, `realEstateServicesData.ts`

- Same rotating hero pattern as drone
- 6+ service card images
- Map image present
- All Unsplash

---

### 2.4 L2 Hubs via L2DirectionRenderer
**File:** `constants/l2DirectionConfigs.ts`

Pages: `/360-tours-service`, `/ai-visualization-service`, `/promo-video-service`, `/hotels-service`, `/restaurants-service`, `/auto-service`, `/clinics-service`, `/business-service`, `/tourism-service`

Each direction config contains:
- `hero.heroImage` — 1 Unsplash URL per service direction
- `services[n].image` — 4–6 Unsplash URLs per direction
- `map.image` — 1 Unsplash URL

All wired. All Unsplash. All replaceable by editing `l2DirectionConfigs.ts`.

---

### 2.5 `/promo-video/promo-hotel` — YouTube Embed
**File:** `app/promo-video/promo-hotel/page.tsx`

- YouTube `<iframe>` embed: `https://www.youtube.com/embed/M7lc1UVf-VE`
- Thumbnail URL: `https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg`
- This is the **only page with actual video content** beyond the hero placeholder

---

## 3. Pages with Empty or Weak Visual Zones

### 3.1 `/gazeta` — HeroSection
**File:** `components/gazeta/HeroSection.tsx`

- `<video>` element at line 69: `https://cdn.pixabay.com/video/2021/08/04/83866-584724838_tiny.mp4`
- Comment on line 61: `/* Placeholder highly optimized video for now */`
- Generic nature/water footage — unrelated to media production work
- Video renders at `opacity-50`, full-screen, behind 3-layer gradient overlay

**Weakness:** The most prominent visual on the entire site is a placeholder. First impression is stock.

---

### 3.2 `/gazeta` — AboutSection
**File:** `components/gazeta/AboutSection.tsx`

- 3 paragraphs of text + CTA button
- **Zero images**
- Section designed with whitespace that could hold a supporting visual
- No alt-text containers, no `<img>` tags, no background media

---

### 3.3 `/gazeta` — HowWeWorkSection
**File:** `components/gazeta/HowWeWorkSection.tsx`

- 4 numbered steps (text only: 01–04)
- No icons beyond step numbers
- No supporting imagery or screenshots
- Entirely text-based, reads as a list

---

### 3.4 `/gazeta` — ExperienceTrustSection
**File:** `components/gazeta/ExperienceTrustSection.tsx`

- 12 industry cards in 3-column grid
- Each card: emoji icon + title + description text
- Emojis: 🎀✂️ 🧭 🔑 🚗 🏝️ 🏨 📦 💪 🎾 ✈️ 🎣 🏍️
- No photographs, no portfolio thumbnails, no industry screenshots
- Feels visually light for a section meant to prove real-world experience

---

### 3.5 All L3 Drone Pages (`/drone-real-estate`, `/drone-fpv-cinema`, etc.)
**Files:** `app/drone-real-estate/page.tsx` and similar

These are ~1100–1391 line monolith pages. Common pattern:
- FAQ sections: text only
- Pricing cards: text only
- Process steps: text only
- Audience/pain blocks: text only
- No portfolio galleries, no before/after, no project screenshots
- Text-heavy because no visual support for any claims

---

### 3.6 All L3 AI Visual Pages (`/ai-visual/ai-auto`, etc.)
**Files:** `app/ai-visual/*/page.tsx`

- Identical pattern to drone pages
- No AI output examples shown (before/after visualization)
- No sample renders embedded
- Maximum claim credibility deficit — AI visualization page has no AI visualization examples

---

### 3.7 All L3 Promo Video Pages (except promo-hotel)
**Files:** `app/promo-video/*/page.tsx`

- Most pages lack any video embed
- `promo-hotel` is the exception with YouTube embed
- All others: text cards for audience, solutions, pricing, FAQ
- No demo reels, no video thumbnails, no production stills

---

### 3.8 All L3 Reels Pages (`/reels-promo/`)
**Files:** `app/reels-promo/*/page.tsx`

- Reels content pages with zero reels shown
- No embedded social feeds, no preview thumbnails
- No Instagram/TikTok embed patterns

---

## 4. Safe Future Media Insertion Points

These are structural slots that already accept a `src` prop or `image` property — replacing a URL is the only change needed.

| Location | Component | Property to update | Asset type |
|----------|-----------|---------------------|-----------|
| `/gazeta` Hero video | `HeroSection.tsx` line 69 | `<video src>` | MP4 demo reel |
| `/drone-service` Hero | `droneServicesData.ts` each `.image` | image URL per service | Photo/render |
| `/real-estate-service` Hero | `realEstateServicesData.ts` each `.image` | image URL per service | Photo/render |
| All L2 hero + services | `l2DirectionConfigs.ts` | `hero.heroImage`, `services[n].image` | Photo/render |
| NichesStack niche heroes | `NichesStack.tsx` each niche `.img` | image URL per niche | Project photo |
| NichesStack service cards | `NichesStack.tsx` each service `.img` | image URL per card | Project screenshot |
| `promo-hotel` YouTube embed | `promo-video/promo-hotel/page.tsx` | `<iframe src>` | Swap video ID |

**Rules for safe replacement:**
- Unsplash URLs follow `?w=XXX&q=80` — match width to container (hero: 1600, card: 800–1200)
- Video: host externally (YouTube unlisted or Vercel Blob), update `<video src>` or `<iframe src>`
- No code restructuring needed for any of these swaps

---

## 5. Placeholder / Problem Areas

| Page | Problem | Severity |
|------|---------|---------|
| `/gazeta` Hero | Pixabay generic nature video — unrelated to media agency | **Critical** |
| All AI Visual L3 | AI visualization pages show no AI visualizations | **High** |
| All Reels L3 | Reels pages show no reels | **High** |
| All Promo Video L3 (except promo-hotel) | Video pages show no videos | **High** |
| ExperienceTrustSection | 12 industry cards proven only with emoji | **Medium** |
| AboutSection | Zero visual support for studio intro | **Medium** |
| HowWeWorkSection | 4-step process is text-only list | **Low** |
| All ProcessStitch sections | Process steps across L2/L3 pages are text-only | **Low** |
| Map sections | All use same Unsplash Georgia landscape — not a real map | **Low** |
| Contact sections | All L2/L3 contact blocks are form-only, no human element | **Low** |

---

## 6. Full Page × Visual Slot Matrix

| Page | Current visual state | Empty/weak slot | Type of future asset | Priority | Notes |
|------|---------------------|-----------------|---------------------|---------|-------|
| `/gazeta` | Pixabay video hero + 63 Unsplash NichesStack | Hero video, AboutSection, HowWeWork, ExperienceTrust | Demo reel MP4, studio photo, process diagram, industry thumbnails | **1** | Hero is first impression — most urgent swap |
| `/drone-service` | Rotating Unsplash hero + 10 service card images | Service cards (stock) | Real drone footage stills, project shots | **2** | Data in `droneServicesData.ts` |
| `/real-estate-service` | Rotating Unsplash hero + 6 service cards | Service cards (stock) | RE project renders, aerial shots | **2** | Data in `realEstateServicesData.ts` |
| `/360-tours-service` | Unsplash hero + 4–6 service cards | Service cards (stock) | 360° tour screenshots | **3** | In `l2DirectionConfigs.ts` |
| `/ai-visualization-service` | Unsplash hero + 4–6 service cards | All cards + no example renders | AI render before/afters | **1** | Credibility gap — no samples shown |
| `/promo-video-service` | Unsplash hero + 4–6 cards | Cards + no video demos | Video thumbnails or embeds | **2** | In `l2DirectionConfigs.ts` |
| `/drone-real-estate` | Text-only L3 monolith | Entire page — no images | Project gallery, before/after aerial | **3** | Would require new section component |
| `/ai-visual/ai-staging` | Text-only L3 monolith | Entire page — no images | Before/after AI staging renders | **1** | Category demands visual proof |
| `/ai-visual/ai-real-estate` | Text-only L3 monolith | Entire page — no images | AI render examples | **1** | Category demands visual proof |
| `/promo-video/promo-hotel` | YouTube embed + text | YouTube embed exists (good) | Add more clips or a thumbnail grid | **4** | Best example — replicate this pattern |
| `/promo-video/promo-real-estate` | Text-only | No video embed | YouTube embed or reel thumbnail | **2** | Easy win: add 1 embed |
| `/reels-promo/reels-hotel` | Text-only | No reel preview | Instagram embed or video thumbnail | **2** | Reels page with no reels |
| `/reels-promo/reels-restaurant` | Text-only | No reel preview | Short video embed | **2** | Same pattern |
| `/about` | Text-only B2B page | No team photo, no BTS visual | Team photo, studio BTS | **3** | Human element missing |

---

## 7. Recommended Next Tiny Batch

**Principle:** No redesign, no new components. URL swaps and one pattern replication only.

### Batch A — Critical swaps (no code restructuring)

1. **Replace hero video** in `HeroSection.tsx` line 69
   Swap Pixabay URL → Breus Media demo reel (upload to YouTube unlisted or Vercel Blob, update `<video src>`)

2. **Add YouTube embed to 2–3 promo-video L3 pages** following the `promo-hotel` pattern
   `/promo-video/promo-real-estate`, `/promo-video/promo-restaurant` — copy the `<iframe>` block, swap video ID

3. **Replace 3–5 NichesStack niche hero images** with real project screenshots
   Edit `.img` URLs in `NichesStack.tsx` for niches 00 (Аэросъёмка), 01 (Недвижимость), 02 (Отели)
   Use Vercel Blob or any CDN; match `?w=1600&q=80` sizing

### Batch B — Medium impact (after batch A is complete)

4. **Replace ExperienceTrustSection emoji with small SVG icons or industry thumbnails**
   One icon per card — no layout changes needed

5. **Add 1 portfolio thumbnail or BTS photo to AboutSection**
   Requires adding one `<img>` to existing section — minimal code touch

6. **Add AI render examples to 1 ai-visual L3 page** (e.g. `/ai-visual/ai-staging`)
   Before/after is highest-trust format for this category

---

## Appendix: Asset Reference Map

### All current video sources
| File | Line | Source | Type |
|------|------|--------|------|
| `components/gazeta/HeroSection.tsx` | 69 | `cdn.pixabay.com/.../83866-584724838_tiny.mp4` | Placeholder MP4 |
| `components/gazeta/HeroSection2.tsx` | 35 | Same Pixabay URL | Placeholder MP4 |
| `app/promo-video/promo-hotel/page.tsx` | ~37 | `youtube.com/embed/M7lc1UVf-VE` | YouTube embed |

### `/public/` contents (complete)
```
file.svg      globe.svg     grid.svg
next.svg      vercel.svg    window.svg
```
Zero photos. Zero videos. Zero portfolio files.

### Image URL patterns in use
| Pattern | Where used | Width / Quality |
|---------|-----------|-----------------|
| `images.unsplash.com/photo-XXXX?w=1600&q=80` | Hero images | 1600px / q80 |
| `images.unsplash.com/photo-XXXX?w=1200&q=80` | Service card (large) | 1200px / q80 |
| `images.unsplash.com/photo-XXXX?w=800&q=80` | Service card (small) | 800px / q80 |
| `images.unsplash.com/photo-XXXX?w=1400&q=80` | Map images | 1400px / q80 |
