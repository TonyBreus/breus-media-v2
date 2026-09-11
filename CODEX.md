# CODEX.md — Breus Media Agent Instructions

## Project

Breus Media — visual production and AI-content website.

Stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- framer-motion
- Vercel

Production:
- Live: `https://breus.media`
- Preview: `https://breus-media-v2.vercel.app`
- Repository: `https://github.com/TonyBreus/breus-media-v2`
- Main branch: `main`

Canonical domain:
- Always use `https://breus.media`
- Never use `https://breusmedia.com` in active app files.
- If old domain references appear in active app files, flag them and ask before replacing.
- Snapshot/docs/archive files may contain old references; do not mass-edit docs unless explicitly asked.

---

## Local development commands

Always use production build for visual checks. Do not rely on `next dev` for final visual verification.

```bash
NEXT_PUBLIC_DEBUG_MODE=false npm run build
NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start
```

Open locally:

```text
http://localhost:3200/gazeta
```

When changing TypeScript-heavy files, run if available:

```bash
tsc --noEmit
```

When changing a single component, run project lint or file-level lint if available.

---

## Agent workflow

For any non-trivial change:

1. Inspect relevant files first.
2. If the working tree is already modified, stop and summarize current changes before editing.
3. Propose a short implementation plan.
4. Wait for explicit approval before editing.
5. Make the smallest safe changes.
6. Run checks.
7. Report changed files, commands run, build status and any risks.

Do not overwrite user/agent changes without showing what is already modified.

---

## Dirty working tree rule

If `git status` shows modified files relevant to the task:

- Do not continue blindly.
- Summarize modified files.
- Explain whether the changes look related to the current task.
- Ask whether to continue on top, inspect diffs, or stop.

Never run destructive commands unless explicitly instructed:

```bash
git reset --hard
git checkout -- <file>
git clean -fd
```

Never discard, reset, overwrite, or revert existing changes unless the user explicitly asks.

---

## Deploy rule & Production Freeze

Основной production-домен `breus.media` **СТРОГО ЗАМОРОЖЕН** и не обновляется, пока Антон не примет весь готовый сайт.
Все итерации, тесты и доработки проводятся исключительно через Vercel Preview Deployments (`npx vercel deploy -y`).

Never deploy to production.
Never push to production `main`.
Never run `vercel --prod`.

Only deploy or push to production after the explicit command:

```text
DEPLOY NOW
```

Before any deploy, always run:

```bash
NEXT_PUBLIC_DEBUG_MODE=false npm run build
```

Build must complete with 0 errors.

When committing code changes, also update:

- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

Only do this when the user explicitly asks to commit/update project history or when deploy/commit work is requested.

---

## Lexical Clarity Filter (Фильтр «Лексическая однозначность»)

Перед любым изменением текста, заголовков или описаний обязательно проверять термины на отсутствие двойного дна, размытых абстракций и ложных ожиданий:
- Запрещены слова вроде «площадки» без конкретного контекста.
- Запрещены фразы вроде «хостинг включен» без точного указания срока и условий.
- Запрещены формулировки вроде «любые форматы» без исчерпывающего перечня деливерейблов.
- Полное соблюдение редполитики Zero Fluff: запрет пустых слов («уникальный», «профессиональный», «под ключ», «сырые файлы»).

---

## Human-in-the-Loop Text Gateway (Шлюз согласования текста перед коммитом)

СТРОГО ЗАПРЕЩЕНО делать `git commit` и `vercel deploy` любых правок в копирайтинге, офферах, тарифах, ценах в GEL и FAQ без предварительного согласования в диалоге!

Обязательный регламент:
1. Вывести Антону сравнительную таблицу:
   | Файл / Блок | Было | Предлагаемый текст (Стало) | Обоснование однозначности |
2. Дождаться прямого подтверждения («ОК / Согласовано») от Антона.
3. Только после одобрения вносить правки в git и деплоить.

---

## Валидация контента в шторках (SSR vs Client Mount)

- Поисковые роботы (SearchGPT, Googlebot, Perplexity) обязаны видеть весь текст услуг, цен и офферов в первичном HTML-ответе.
- СТРОГИЙ ЗАПРЕТ: не использовать динамический клиентский рендер вида `{isOpen && <Content />}`, если контент не дублируется в исходном HTML.
- Контент шторок/аккордеонов должен быть в начальном DOM (скрыт через CSS/Tailwind или семантические теги), чтобы поисковые системы индексировали его без клика.
- Тест верификации: `curl -s [URL_СТРАНИЦЫ] | grep "[Ключевая фраза из шторки]"`.

---

## Vercel Preview Testing Protocol (Вместо Localhost)

- Все сравнительные тесты («Было» vs «Стало») проводятся через Vercel Preview Deployments для тестирования на реальных мобильных устройствах (iOS Safari/Chrome, Android).
- При подготовке доработок агент собирает Preview-ветку и выдает Антону 2 живые ссылки:
  * 🔗 **Ссылка №1 (Было)**: текущий прод/превью исходной страницы.
  * 🔗 **Ссылка №2 (Стало)**: превью-деплой с внедренными правками v3.0.

---

## Page hierarchy

### L1

- `/gazeta` — main landing / navigation hub.

### L2 service hubs

- `/drone-service`
- `/360-tours-service`
- `/reels-service`
- `/promo-video-service`
- `/ai-visualization-service`

### L2 industry hubs

- `/real-estate-service`
- `/hotels-service`
- `/restaurants-service`
- `/tourism-service`
- `/clinics-service`
- `/auto-service`

### L3 pages

- `/drone-services/[slug]`
- `/360-tour-[niche]`
- `/reels-promo/[slug]` or explicitly approved reels routes
- `/promo-video/[slug]`
- `/ai-visual/[slug]`
- `/ai-content/[slug]`

Rule:

- L1 = main entry/navigation.
- L2 = hub / overview / navigation / pricing overview / category page.
- L3 = deep niche page with detailed SEO, FAQ, pricing, schema and related services.

Do not mix L2 and L3 intent.

---

## Route architecture

Current route logic:

```text
/                         → redirect /gazeta
/gazeta                   → L1 landing
/gazeta/[slug]            → legacy/industry route pattern if present
/drone-service            → L2 drone service hub
/360-tours-service        → L2 360° tours service hub
/reels-service            → L2 reels service hub
/promo-video-service      → L2 promo video service hub
/ai-visualization-service → AI service hub
/real-estate-service      → L2 real estate industry hub
/hotels-service           → L2 hotels industry hub
/restaurants-service      → L2 restaurants industry hub
/tourism-service          → L2 tourism industry hub
/clinics-service          → L2 clinics industry hub
/auto-service             → L2 auto industry hub
/drone-services/[slug]    → L3 drone pages
/360-tour-[niche]         → L3 360° tour pages
/promo-video/[niche]      → L3 promo video pages
/reels-promo/[slug]       → L3 reels pages
/ai-visual/[slug]         → L3 AI visual pages
/ai-content/[slug]        → L3 AI content pages
```

Before adding any link, validate that the route exists in `app/` or mark it as `suggested` and ask before inserting.

---

## Key landing components

Main `/gazeta` components:

- `components/gazeta/HeroSection.tsx` — kinetic typography + framer-motion stagger; mobile should keep `BREUS MEDIA` visible; main CTA scrolls to `#niches-nav`.
- `components/gazeta/NichesStack.tsx` — sticky industry stack 00–08 + FAQ + form; desktop only; hidden on mobile.
- `components/gazeta/SmartHeader.tsx` — sticky header with RU/EN language switch; logo appears after scroll.
- `components/gazeta/MarqueeSection.tsx` — ticker with clickable links.
- `components/gazeta/GazetaMobileStepChooser.tsx` — mobile UX entry point, `id="niches-nav"`.
- `components/gazeta/AboutSection.tsx` — about block.

When changing `/gazeta` mobile UX, check mobile widths:

```text
360px
375px
390px
```

---

## L2 renderer rule

When modifying L2 pages:

- Prefer `L2DirectionRenderer` + `l2DirectionConfigs`.
- Do not create page-specific components unless explicitly approved.
- New config fields must be optional.
- New sections must render conditionally only when config data exists.
- Do not break existing L2 pages when adding fields for one page.
- Preserve existing L2 behavior unless the task explicitly asks to change it.
- Validate related links against real routes before adding them.

If a change to `L2DirectionRenderer`, `L2DirectionSections`, `types.ts`, or `l2DirectionConfigs.ts` affects multiple L2 pages, call it out before editing.

---

## L3 page rule

For L3 pages:

- Follow the current approved L3 page pattern.
- Reuse existing shared components where possible.
- Do not create new components if an existing project component can handle the block.
- Keep one H1.
- Use clear H2/H3 hierarchy.
- Use visible Short Q&A and FAQ where applicable.
- FAQPage schema must be generated only from visible FAQ items, not from hidden notes or unrelated short Q&A unless explicitly approved.
- Use related services for internal linking.

Reference standards/files if present:

- `BREUS_MEDIA_L3_PAGE_METHOD_STANDARD_v5.md`
- `DRONE_L3_TEXT_SKELETON_v1.md`
- `MASTER_TEMPLATE_DEEP_RESEARCH_L3_BREUS_MEDIA_v2.md`
- `CHECKLIST_SEO_FOR_READY_PAGES_BREUS_MEDIA.md`

Reference templates:

- Drone showcase RU: `app/drone-services/drone-restaurants/page.tsx`
- Drone showcase EN: `app/drone-services/drone-restaurants/en/page.tsx`
- 360° tour reference pages: `app/360-tour-*/page.tsx`
- Reels reference pages: `app/reels-promo/*/page.tsx` or approved new reels routes
- Promo reference pages: `app/promo-video/*/page.tsx`
- AI reference pages: `app/ai-visual/*/page.tsx` and `app/ai-content/*/page.tsx`

---

## Metadata and Next.js rules

Important Next.js constraint:

- `'use client'` and `export const metadata` cannot coexist in the same file.
- If a route page must be a client component, put metadata in `layout.tsx` in the same route folder.

For SEO pages, include where appropriate:

- `title`
- `description`
- `alternates.canonical`
- `openGraph`
- `twitter`
- `locale: ru_GE` where applicable

Use canonical domain:

```text
https://breus.media
```

---

## JSON-LD / Schema rules

Use JSON-LD only when it reflects visible page content.

Common schemas:

- `Organization` — global root schema in `app/layout.tsx` if present.
- `LocalBusiness` — only when needed and not duplicated unnecessarily.
- `Service` — for service pages.
- `FAQPage` — only from visible FAQ items.
- `BreadcrumbList` — use real page hierarchy; do not add fake crumbs that point to the same URL.
- `ItemList` — only when there is a real visible list of services/items and it is useful.

If global Organization exists with:

```text
@id: https://breus.media/#organization
```

then page-level `Service.provider` may reference it:

```json
{ "@id": "https://breus.media/#organization" }
```

Do not duplicate Organization unnecessarily.

---

## SEO / AEO / GEO copy rules

For service and industry pages:

- One H1 per page.
- Use clear H2/H3 hierarchy.
- Add FAQPage schema only from visible FAQ.
- Include direct answer blocks / Short Q&A where useful for AI search.
- Do not invent statistics, ROI numbers, conversion percentages, or research claims.
- External claims require source URLs.
- If a claim is unverified, move it to notes, not page copy.
- Keep important mobile content in the DOM.
- Do not hide critical SEO text behind client-only API loading.
- Prefer concrete human language over generic marketing claims.

Good copy style:

- clear;
- practical;
- specific;
- short paragraphs;
- direct explanation of who the service is for and what the client receives.

Avoid:

- inflated claims;
- generic agency language;
- unsupported ROI promises;
- fake statistics;
- unnecessary technical jargon.

---

## Content restrictions

### Forbidden Russian words in all active copy

Do not use these words unless the user explicitly approves:

```text
профессиональный
качественный
лучший
уникальный
```

When replacing:

- Instead of `профессиональный` use concrete wording: `для сайта`, `для продажи`, `для презентации`, `с понятной структурой`, `готовый к публикации`.
- Instead of `качественный` explain the actual output: `4K MP4`, `JPG`, `iframe`, `ссылка`, `короткий ролик`, `монтаж`, `субтитры`.
- Instead of `лучший` use `подходящий`, `оптимальный`, `рабочий`.
- Instead of `уникальный` describe what is actually different.

### Equipment — only mention confirmed equipment

Allowed:

```text
DJI Air 3S
DJI Avata 2
Insta360 X5
smartphone stabilizer
wireless mics
```

Never mention unless explicitly approved:

```text
RTK
orthophotos
NDVI
LiDAR
thermal cameras
Cinelifter
cinema rigs
```

### Platform naming rule for 360° tours

Do not mention specific platforms/tools unless explicitly confirmed:

```text
Matterport
Kuula
Pano2VR
CloudPano
Google Street View
Google Maps panorama
```

Use generic wording instead:

```text
360° tour link
embed code / iframe
interactive tour
mobile-friendly viewing
tour hosting conditions
```

### Geography rule

Use:

```text
Тбилиси
Грузия
```

Do not add extra cities unless the task explicitly asks.

Do not mention `Батуми` in active copy unless explicitly approved for that page.
Do not write service phrases like `не Батуми`; simply omit the city.

---

## Pricing rules

Pricing floors — never go below:

- Any service: from `200 ₾`
- Drone flyover exterior: from `250 ₾`
- Drone + video: from `350 ₾`
- Promo video: from `800 ₾`
- AI services: from `200 ₾`

April 2026 drone showcase pricing for restaurants, hotels, sport, wine, tourism, auto:

```text
250 ₾ / 350 ₾ / 500 ₾ / from 900 ₾
```

Add-ons:

```text
Reels +100 ₾
video 30–60s +150 ₾
360° +80 ₾
```

360° tours current working prices:

```text
Старт — от 200 ₾
Стандарт — от 450 ₾
Полный объект — от 900 ₾
```

If pricing is not confirmed, write:

```text
по запросу
```

or flag as:

```text
needs confirmation
```

Never invent package details, точное количество точек, хостинг, сроки, source claims, or inclusions unless provided by project materials or explicitly approved.

---

## Mobile UX rules

For mobile `/gazeta` and chooser work:

- Keep the interaction stable; avoid unwanted vertical jumps.
- Service cards can work as tabs/switchers when inline preview exists.
- If horizontal swipe is used, include visible segment indicators.
- Keep CTA clear and thumb-friendly.
- Remember mobile browser bottom bars may cover the lower part of the viewport.
- Check widths: `360`, `375`, `390`.

Important mobile entry:

```text
#niches-nav
```

If a CTA scrolls to the mobile chooser, use correct scroll offset so the target composition is visible and not hidden under sticky header.

---

## Image and video rules

- Do not add heavy media without confirming file size and loading behavior.
- Use lazy loading where appropriate.
- Avoid layout shift.
- Use existing project image patterns where possible.
- Do not replace visual assets globally unless explicitly asked.
- If a page uses placeholder images from another service folder, note it in the summary.

---

## Reference files

Important project context files:

- `CONTEXT_NEXT_CHAT.md` — chronological context and decisions.
- `CHANGELOG_ARCHIVE.md` — archive of changes.
- `DEBUG_KNOWN_ISSUES.md` — active bugs/status if present.
- `BREUS_MEDIA_L3_PAGE_METHOD_STANDARD_v5.md` — L3 content/page standard if present.
- `DRONE_L3_TEXT_SKELETON_v1.md` — drone showcase template if present.
- `MASTER_TEMPLATE_DEEP_RESEARCH_L3_BREUS_MEDIA_v2.md` — deep research framework.
- `CHECKLIST_SEO_FOR_READY_PAGES_BREUS_MEDIA.md` — SEO/query checklist.
- `All CArd Service sait Breus Media.md` — service card inventory if present.
- `README_SITE_SNAPSHOT_SPLIT.md` — snapshot navigation if present.

Use these as references when the task touches content architecture, routes, SEO, or page standards.

---

## Current known project behavior

- `DebugWrapper` with `NEXT_PUBLIC_DEBUG_MODE=false` should preserve `className` and `style`.
- `framer-motion` is used in HeroSection, AboutSection and NichesStack.
- `SmartHeader` behavior differs between landing and internal pages.
- `GazetaMobileStepChooser` is the main mobile decision block for `/gazeta`.
- L2 pages may share renderer/config infrastructure. Treat shared files with care.

---

## Required checks before reporting completion

Before saying the task is complete:

1. Run relevant checks.
2. Report exact commands and results.
3. Report changed files.
4. Report any skipped checks and why.
5. Report any risks or follow-up tasks.

Preferred checks:

```bash
tsc --noEmit
npm run build
```

For mobile UI work, visually check:

```text
360px
375px
390px
```

For content/SEO work, check:

- canonical domain is `breus.media`;
- no `breusmedia.com` in active app files;
- one H1 per page;
- JSON-LD reflects visible content;
- FAQPage uses only visible FAQ;
- related links point to existing routes;
- forbidden words are absent unless explicitly approved;
- pricing does not go below floors.

---

## Completion summary format

At the end of a task, report:

```md
## Summary
- What changed.
- Why it changed.

## Changed files
- `path/to/file.tsx` — short description.

## Checks
- `command` → result.

## Notes / risks
- Anything that needs manual review.
- Any assumptions.
- Any routes or content that need confirmation.
```

Do not claim success if build/checks failed.

---

## If uncertain

If a task could affect shared architecture, routes, pricing, SEO, schema, or existing content:

- stop;
- summarize the uncertainty;
- propose 1–2 safe options;
- wait for approval.

Do not guess critical business rules.
Do not invent facts.
Do not silently change architecture.

---

## Change Log & Architecture Chronology

- **2026-09-11 (Pathname-Based i18n Routing, Header Links Parity, Cross-Page English Retention & Footer Auto-Detection)**:
  - **Top-Left Logo Language Reset Bug Resolved**: Fixed `SmartHeader.tsx` logo routing where clicking the top-left logo while on an English page previously navigated to `/gazeta` (RU). Introduced pathname-based language resolution (`const isPathEn = Boolean(pathname && (pathname === "/gazeta/en" || pathname.endsWith("/en") || pathname.includes("/en/"))); const routeLanguage = (normalizedInitialLang === "EN" || isPathEn) ? "EN" : ...`), ensuring the logo always resolves to `/gazeta/en` across all English routes regardless of whether `initialLang` was explicitly passed.
  - **Header English Links Parity**: Audited and fixed `headerCopy.EN` in `SmartHeader.tsx` where dropdown navigation items (Industries, Services, Ticker) were pointing to Russian URLs (`/drone-service`, `/real-estate-service`, `/auto-service`, etc.). Updated all links to canonical `/en` targets (`/drone-service/en`, `/360-tours-service/en`, `/ai-visualization-service/en`, `/reels-service/en`, etc.). Desktop "AI Solutions" link now also honors active route language.
  - **Cross-Platform Language Preference Persistence**: Both desktop and mobile drawer language toggle clicks now immediately write to `localStorage.setItem('breus_lang', ...)` and `document.cookie = NEXT_LOCALE=...; max-age=31536000; path=/; SameSite=Lax`.
  - **Footer English Auto-Detection**: Added `usePathname()` and `isPathEn` automatic fallback detection to `GazetaMinimalFooter.tsx` and `DroneFooterStitch.tsx`. Footers automatically render English menus, copy, and logo links (`/gazeta/en`) whenever mounted on any `/en` route.
  - **Added `initialLang="en"`**: Explicitly added `initialLang="en"` to `SmartHeader` in `app/360-tour-hotels/en/page.tsx`.


- **2026-09-11 (Tablet Navigation Breakpoint, Master Footer Unification, iPad Hero Kinetic Fit, Step 04/05 Titles & Cookie Locale Preservation)**:
  - **Tablet Nav Disappearance Bug (768px-1024px)**: Fixed breakpoint discrepancy in `SmartHeader.tsx` where desktop nav was hidden below `lg` (`1024px`), while mobile burger was hidden at `md` (`768px`). Updated burger menu button and mobile full-screen overlay to `lg:hidden`, restoring smooth touch navigation on iPad in portrait/landscape and resized browser windows.
  - **Unified Master Footer Standard**: Upgraded `GazetaMinimalFooter.tsx` from plain copyright text to full master footer standard and unified with `DroneFooterStitch.tsx` / `DroneFooterStitchEn.tsx`. Removed bureaucratic legal strip (`Официальный договор...`), retained clean 2-row layout: top menu row + dark glass contact capsule with pulsing green indicator (`🟢 Контакты: Тбилиси, Грузия · +995 501 103 183`), bottom branding + mission statement + glass social buttons with safe right padding (`pr-0 sm:pr-16 md:pr-20`) to eliminate overlap with the floating WhatsApp button.
  - **NichesStack Steps 04 & 05 Titles**: Synchronized steps 04 and 05 in `NichesStack.tsx` (RU & EN) from legacy `04 REELS` / `05 AI КОНТЕНТ` to `04 REELS & SHORTS` and `05 AI-ВИЗУАЛИЗАЦИЯ` (RU) / `05 AI VISUALIZATION` (EN), matching marquee and header standards.
  - **iPad Pro 11 / Tablet Kinetic Fit & Scroll Smoothing**:
    - In `HeroSection.tsx`, adjusted kinetic text start `yStart` to `64vh` for tablets/iPads (`w < 1024 || h <= 850`), with tightened tracking (`md:tracking-[0.10em]`), eliminating bottom clipping caused by iOS Chrome & Safari dynamic toolbars.
    - In `NichesStack.tsx` `FormCard` (Step 14), added `overscroll-y-contain` to stop rubber-band scroll bounce when scrolling back up from the contact form, removed unnatural `snap-start`, and added bottom safe padding (`pb-16 md:pb-24`) so footer branding is never obscured by browser chrome.
  - **Language Persistence on Navigation**:
    - In `NichesStack.tsx`, wrapped service open links in `enRoute()` when `lang === 'en'`, ensuring users clicking direction cards stay on English mirrors.
    - In `app/page.tsx`, integrated `cookies()` check for `NEXT_LOCALE=en`, redirecting users who chose English to `/gazeta/en` instead of hardcoded `/gazeta`.

- **2026-09-11 (Language Persistence & Russian Hero H1 Layout)**:
  - Fixed language persistence bug in `SmartHeader.tsx`: desktop logo link now dynamically checks `routeLanguage === 'EN' ? '/gazeta/en' : '/gazeta'` instead of hardcoded `/gazeta`.
  - Added persistence in `LangSetter.tsx`: saves active language to `localStorage` (`breus_lang`) and sets `document.cookie` (`NEXT_LOCALE`) for cross-session and cross-page retention.
  - Re-architected Russian H1 headline layout in `HeroSection.tsx`: balanced line distribution (`["АГЕНТСТВО ВИЗУАЛЬНОГО", "ПРОДАКШЕНА", "И DIGITAL-РЕШЕНИЙ"]`), expanded container width to `max-w-[28ch] md:max-w-[34ch]`, removed negative vertical offset (`-top-2.5`), and set fluid typography `text-[clamp(1.3rem,4.5vw,3.3rem)] leading-[1.06]`. Completely eliminated awkward line-wrapping pyramid, word breaks, and overlap with the lower description vignette on window resizing.
  - Aligned mobile/desktop navigation links to keep the `/en` suffix when browsing in English mode.

- **2026-09-11 (Drone 17-Card Overlay, Intermediate Breakpoint, GEO/AEO & Ticker)**:
  - Standardized all 17 service cards across RU and EN (`DroneServicesStitch.tsx`, `DroneServicesStitchEn.tsx`): moved card titles inside the photo overlay with bottom gradient (`bg-gradient-to-t from-black/95 via-black/40 to-transparent`), eliminating detached upper headers and empty spaces.
  - Eliminated buggy intermediate tablet view (`hidden md:block lg:hidden`) in Drone Hero (`DroneHeroStitch.tsx`, `DroneHeroStitchEn.tsx`), rendering a clean responsive 2-column desktop layout down to 768px (`md`).
  - Added comprehensive Tbilisi districts (Vake, Saburtalo, Didi Dighomi, Old Tbilisi, Ortachala, etc.) and Georgia regions (Batumi, Kakheti, Kutaisi, etc.) into Drone FAQ Q3, flight conditions notes, and Schema.org `areaServed`.
  - Standardized header marquee items across RU and EN to `AI-Визуализация` / `AI Visualization` and `Reels & Shorts` (`gazetaRoutes.ts`, `SmartHeader.tsx`, `tickerData.ts`).

