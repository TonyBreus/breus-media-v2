# Breus Media — breus-media-v2

## Project
Next.js App Router · TypeScript · Tailwind CSS · framer-motion · Vercel
Live: https://breus.media | Preview: https://breus-media-v2.vercel.app
Repo: https://github.com/TonyBreus/breus-media-v2 · branch: main

## Local dev commands
```bash
# Always use production build for visual checks — never next dev
NEXT_PUBLIC_DEBUG_MODE=false npm run build
NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start
# Open: http://localhost:3200/gazeta
```

## Architecture
```
/ → redirect → /gazeta (landing L1)
/gazeta/[slug]              → L2 industry hubs
/drone-services/[slug]      → L3 drone pages
/360-tour-[niche]           → L3 360° tour pages
/promo-video/[niche]        → L3 promo pages
/reels-[niche]              → L3 reels pages
/ai-visualization-service   → AI page
```

Key landing components:
- `components/gazeta/HeroSection.tsx` — kinetic typography + framer-motion stagger
- `components/gazeta/NichesStack.tsx` — sticky industry stack 00–08 + FAQ + form
- `components/gazeta/SmartHeader.tsx` — sticky header with RU/EN language switch
- `components/gazeta/MarqueeSection.tsx` — ticker lines
- `components/gazeta/AboutSection.tsx` — about block

## Hard rules — never break

### Pricing floors (minimum prices, never go below)
- Any service: from 200 ₾
- Drone flyover exterior: from 250 ₾
- Drone + video: from 350 ₾
- Promo video: from 800 ₾
- AI services: from 200 ₾

### April 2026 drone showcase pricing (restaurants, hotels, sport, wine, tourism, auto)
4 cards: 250 ₾ / 350 ₾ / 500 ₾ / from 900 ₾
Add-ons: Reels +100 ₾ · video 30–60s +150 ₾ · 360° +80 ₾

### Forbidden words in all copy (Russian)
профессиональный · качественный · лучший · уникальный

### Equipment — only mention these, nothing else
DJI Air 3S · DJI Avata 2 (FPV) · Insta360 X5 · smartphone stabilizer · wireless mics
Never mention: RTK · orthophotos · NDVI · LiDAR · thermal cameras · Cinelifter · cinema rigs

### Deploy rule
Never deploy without explicit "DEPLOY NOW" command.
Always run `npm run build` (0 errors) before any deploy.
Always update CONTEXT_NEXT_CHAT.md + CHANGELOG_ARCHIVE.md in the same commit as code changes.

## Technical constraints
- `'use client'` and `export const metadata` cannot coexist in the same file
  → Put metadata in `layout.tsx` in the same route folder
- DebugWrapper: when `NEXT_PUBLIC_DEBUG_MODE=false` preserves className/style (fixed)
- framer-motion used in: HeroSection (stagger + kinetic scroll), AboutSection (whileInView), NichesStack (AnimatePresence FAQ)

## Reference files
- `CONTEXT_NEXT_CHAT.md` — full chronological context of all decisions
- `CHANGELOG_ARCHIVE.md` — commit history and changes
- `DEBUG_KNOWN_ISSUES.md` — active bugs with status
- `BREUS_MEDIA_L3_PAGE_METHOD_STANDARD_v5.md` — content standard for L3 pages
- `DRONE_L3_TEXT_SKELETON_v1.md` — template for drone showcase pages

## Reference pages (templates)
Drone showcase (RU): `app/drone-services/drone-restaurants/page.tsx`
Drone showcase (EN): `app/drone-services/drone-restaurants/en/page.tsx`
Use these as the template for: drone-hotels · drone-sport · drone-wine · drone-tourism · drone-auto

## Current build status
81 pages · 0 errors · Last commit: 07.04.2026
