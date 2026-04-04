# CHANGELOG ARCHIVE — Breus Media
Append-only архив изменений. Старые записи не удаляются.

## 2026-04-04 (restaurant + hotel pricing patch)
### Session Summary
- Синхронизирована ценовая матрица на двух страницах: ресторан и отель.
- Старый deliverables-формат карточек заменён на упрощённую pricing-структуру с `subtitle`, `note`, `popular`.
- Документация обновлена в тот же коммит, что и код.

### Изменения
- `app/drone-services/drone-restaurants/page.tsx`
  - Обновлён тип пакетов и полностью заменён `pricingCards`.
  - Обновлён `addonPricing`.
  - Переписан JSX карточек пакетов под новую структуру данных.
  - Hero aside обновлён на `от 250 ₾`.
  - FAQ / SEO / schema синхронизированы с новой ценовой матрицей.
- `app/drone-hotels-tourism/page.tsx`
  - Обновлён тип пакетов и полностью заменён `pricingCards`.
  - `addonItems` упрощён до строкового `addonPricing`.
  - Переписан JSX карточек и add-ons под новую структуру.
  - Hero aside обновлён на `от 250 ₾`.
  - FAQ / schema синхронизированы с новой ценовой матрицей.
- `CONTEXT_NEXT_CHAT.md`
  - Контекст обновлён под новый pricing-patch.
- `CHANGELOG_ARCHIVE.md`
  - Добавлена эта запись.

### Build
- `npm run build` — ✅ clean

---

## 2026-04-04 (drone-restaurants hero aside micro-patch + docs refresh)
### Session Summary
- В `app/drone-services/drone-restaurants/page.tsx` точечно обновлён hero aside блок «КОРОТКО».
- Формулировка про выдачу файлов переведена на «Полёт + видеофайлы. Монтаж — отдельно.».
- Время выдачи в aside изменено на «от 24 ч».
- Обновлены сопровождающие контекстные файлы: `CONTEXT_NEXT_CHAT.md` и этот архив.

### Build
- `npm run build` — ✅ clean

---

## 2026-04-02 — Consolidation Audit: About/Trust/Process blocks
#### Session Summary
- Проведён полный аудит наличия About/trust/process блоков в текущей ветке `main`.
- Все требуемые компоненты подтверждены в `main` — интеграция из других веток не потребовалась.
- Подтверждены:
  - `components/gazeta/AboutSection.tsx` ✓
  - `components/gazeta/HowWeWorkSection.tsx` ✓
  - `components/gazeta/ExperienceTrustSection.tsx` ✓
  - `app/about/page.tsx` (460 строк) ✓
  - SmartHeader: ссылка "О Нас" → `/about` (строка 196) ✓
  - `/gazeta` структура: Hero → Marquee → AboutSection → HowWeWorkSection → ExperienceTrustSection → NichesStack ✓
- Остановлены все стейл-серверы; запущен единственный dev-сервер на порту `3200`.
- Local: http://localhost:3200 | LAN/mobile: http://192.168.1.2:3200

#### Commits
- (doc-only сессия, код уже был в main — новых кодовых коммитов не потребовалось)

#### Technical Notes
- Ветки `backup-31mar-2026`, `claude/cool-cannon`, `claude/ecstatic-morse`, `claude/musing-swartz` существуют, но весь нужный код уже влит в `main`.
- Ветка `main` = единственный канонический источник истины.

#### Release Notes
- Статус: local only, no deploy.
- Сервер: http://localhost:3200 (desktop), http://192.168.1.2:3200 (LAN/mobile).

---

## 2026-04-02 (DebugWrapper h-full fix — hero video fills screen)
### Session Summary
- Fixed dark empty band above hero video on /gazeta
- Root cause: DebugWrapper's inner debug-content div was not inheriting h-full from wrapper

### Изменения
- `components/debug/DebugWrapper.tsx` — `data-debug-content` div now conditionally adds `h-full` when wrapper className contains `h-full`
  - This fixes any DebugWrapper-wrapped full-height containers in debug mode
  - Production mode (no debug): unaffected (DebugWrapper renders Fragment or plain div)

### Build
- ○ /gazeta (Static) ✓, full clean build

## 2026-04-02 (Hero poster generated from video frame)
### Session Summary
- Extracted a JPEG poster from the first strong frame of the hero video
- No code changes — HeroSection.tsx already had the correct poster path wired

### Изменения
- `public/media/hero/posters/breus-hero-demo-poster.jpg` — создан (1920×1088 JPEG, ~505KB)
  - Кадр: t=0.5s из `breus-hero-demo.mp4`, извлечён через VLC CLI
  - Путь уже прописан в `HeroSection.tsx` (`poster="/media/hero/posters/breus-hero-demo-poster.jpg"`)
  - Замена: заменить файл по тому же пути, код не трогать

### Build
- No code changes; existing build is clean

## 2026-04-02 (Hero media structure + local video wiring)
### Session Summary
- Created public folder structure for hero media assets
- Wired local video path into HeroSection.tsx, replacing Pixabay CDN placeholder

### Изменения
- `public/media/hero/video/` — создана (пустая, ожидает `breus-hero-demo.mp4`)
- `public/media/hero/posters/` — создана (пустая, ожидает `breus-hero-demo-poster.jpg`)
- `components/gazeta/HeroSection.tsx` — `<video>` переключён на `/media/hero/video/breus-hero-demo.mp4`
  - `poster="/media/hero/posters/breus-hero-demo-poster.jpg"` добавлен
  - autoPlay / loop / muted / playsInline сохранены
  - Fallback: отсутствие файла → poster/чёрный фон, лаяут не ломается
  - Swap: заменить файл, код не трогать

### Build
- ○ /gazeta (Static) ✓

## 2026-04-02 (Visual Asset Inventory Audit)
### Session Summary
- Read-only audit of visual assets across `/gazeta`, key L2 hubs, representative L3 pages
- No code changes made

### Что выявлено
- `/public/` содержит только 6 SVG-иконок — ноль фото, ноль видео, ноль портфолио
- 80+ Unsplash URL захардкожены в data-файлах и конфигах — весь визуал стоковый
- 2 hero-video элемента указывают на один Pixabay-плейсхолдер (природа, не связано с агентством)
- Единственная страница с реальным видео: `/promo-video/promo-hotel` (YouTube embed)
- Структурно сайт готов принять реальные ассеты — замена URL, не рефакторинг

### Что задокументировано
- `BREUS_MEDIA_VISUAL_ASSET_INVENTORY.md` — создан
  - 7 разделов: executive summary, сильные/слабые зоны, безопасные точки вставки, плейсхолдеры, матрица страниц, рекомендованный batch
  - Матрица: 14 страниц × 5 полей (visual state, empty slot, asset type, priority, notes)
  - Appendix: полный список video src, содержимое /public/, паттерны URL размеров

### Приоритет следующего batch
1. Заменить hero-video в HeroSection.tsx (Pixabay → демо-рил Breus Media)
2. Добавить YouTube embed на 2–3 promo-video L3 (по образцу promo-hotel)
3. Заменить 3–5 niche hero img в NichesStack реальными проектными фото

## 2026-04-02 (/gazeta — блок «Как мы работаем» + нишевой опыт)
### Session Summary
- Добавлен компактный блок «Как мы работаем» на `/gazeta` перед FAQ/contact
- Добавлен блок нишевого опыта «ExperienceTrustSection» (12 ниш, сетка 3-col)

### Что изменено
- `components/gazeta/HowWeWorkSection.tsx` — создан (4 шага процесса)
  - 01: Бриф и задача — «Начинаем с вопросов: что продаётся, кому, где и в какие сроки»
  - 02: Исследование — ниша, конкуренты, форматы; AI как слой ускорения
  - 03: Производство — съёмка / обработка / монтаж по ТЗ
  - 04: Упаковка и сдача — горизонталь, вертикаль, обложки, адаптации
  - framer-motion whileInView, DebugWrapper id={26}
- `components/gazeta/ExperienceTrustSection.tsx` — создан (12 нишевых контекстов)
  - Сетка 3-col, каждая карточка: icon + название + описание
  - DebugWrapper id={28}
- `app/gazeta/page.tsx` — добавлены HowWeWorkSection + ExperienceTrustSection между AboutSection и NichesStack

### Build
- ○ /gazeta (Static) ✓ — чистая сборка без ошибок

## 2026-04-02 (/about — полная страница «О студии»)
### Session Summary
- Создана полная B2B-страница `/about` как самостоятельный роут
- 9 секций: Hero, Who We Are, Approach, What We Do, AI Layer, Experience Areas, Process, Geography, CTA
- SmartHeader «О Нас» теперь ведёт на `/about` (ранее: `#market-reality`)
- Страница — server component (нет `"use client"`), статически пре-рендерится

### Что изменено
- `app/about/page.tsx` — создан с нуля (301 строка)
  - Metadata: title + description + canonical
  - Hero: заголовок «Визуальное производство для бизнеса», подзаголовок, WA/TG CTA
  - Who We Are: 2-колонки — текст + 4 карточки (Форматы, Ниши, География, Языки)
  - Approach: 4 карточки с номерами (01–04)
  - What We Do: 6 формат-карточек + ссылки на L2-страницы
  - AI Layer: 2-колонки — тезис + 6 bullet-пунктов применения AI
  - Experience Areas: 16 тегов реального опыта (без fake-кейсов)
  - Process: 5 последовательных шагов
  - Geography: 3 карточки (Тбилиси, Удалённые, Языки)
  - CTA: финальный блок с gold border, WA primary, TG secondary
  - DebugWrapper IDs: 20100–21000
- `components/gazeta/SmartHeader.tsx`:
  - `aboutHref` теперь всегда `/about` (убрана логика isLanding ? "#market-reality" : "/gazeta#market-reality")

### Структура секций
| ID | Секция |
|----|--------|
| 20100 | Hero |
| 20200 | Who We Are |
| 20300 | Approach |
| 20400 | What We Do |
| 20500 | AI Layer |
| 20600 | Experience Areas |
| 20700 | Process |
| 20800 | Geography |
| 20900 | CTA |
| 21000 | Footer |

### Параметры
- Фон: `#080808` / `#0D0D0D` (чередование)
- Акцент: `#D4AF37` (золото)
- Borders: `#2a2a2a`
- Нет видео, нет анимаций framer-motion, нет `"use client"`
- Страница: ○ /about (Static) в build

### Build
- `○ /about` — Static, без ошибок

## 2026-04-02 (About Section — /gazeta)
### Session Summary
- Добавлен компактный блок «О студии» на главную страницу `/gazeta`
- Позиция: после MarqueeSection, перед NichesStack
- Тон: серьёзный, B2B, аналитический — без fake-метрик, логотипов и раздутых формулировок

### Что изменено
- `components/gazeta/AboutSection.tsx` — новый компонент:
  - Eyebrow badge «О студии»
  - Заголовок: «Производство контента, которое работает на задачу.»
  - 3 коротких абзаца: позиционирование, арсенал + подход, открытость к нестандартным нишам
  - CTA «О студии подробнее» → `/about` (ArrowUpRight icon)
  - framer-motion `whileInView` анимации, `DebugWrapper id={25}`
  - Акцент `#D4AF37`, фон `bg-black`, тонкие горизонтальные бордеры
- `app/gazeta/page.tsx` — импорт и вставка `<AboutSection />` между MarqueeSection и NichesStack

### Параметры блока
| Параметр | Значение |
|----------|---------|
| DebugWrapper ID | 25 |
| Heading | «Производство контента, которое работает на задачу.» |
| CTA label | «О студии подробнее» |
| CTA href | `/about` |
| Анимации | whileInView, once: true, stagger 80ms |
| Фон | bg-black |
| Акцент | #D4AF37 |

### Файлы изменены
- `components/gazeta/AboutSection.tsx` (новый)
- `app/gazeta/page.tsx`
- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

## 2026-04-01 (Hero Title Staggered Reveal)
### Session Summary
- Добавлена cinematic staggered letter-reveal анимация для заголовка `Breus Media` на главной странице `/gazeta`
- Эффект: каждая буква поднимается снизу (y 24px → 0) + fade in, с задержкой 55ms между буквами слева направо
- Scroll-кинетика (shrink + translate вверх → логотип) не затронута

### Что изменено
- `components/gazeta/HeroSection.tsx`:
  - Добавлен импорт `useReducedMotion` из framer-motion
  - `TITLE_CHARS` константа — `"Breus Media".split("")` вне компонента
  - `motion.h1` children заменены на `TITLE_CHARS.map()` → `motion.span` с stagger
  - `aria-label="Breus Media"` добавлен на h1 для accessibility при letter-split
  - Пробел между словами — `"\u00A0"` внутри `inline-block` span

### Параметры анимации
| Параметр | Значение |
|----------|---------|
| Entrance | `opacity: 0→1`, `y: 24→0` |
| Duration | 0.6s |
| Stagger delay | 55ms per letter |
| Ease | `[0.22, 1, 0.36, 1]` (custom ease-out quint) |
| Reduced motion | `initial` = конечное состояние, `delay: 0` |

### Файлы изменены
- `components/gazeta/HeroSection.tsx`
- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

### Build: ✅ чистый (tsc --noEmit, 0 новых ошибок)

---

## 2026-04-01 (AI Entry Routing — кнопка 204)
### Session Summary
- SmartHeader кнопка `AI Решения` (id 204) перенаправлена на `/ai-visualization-service`
- Временное решение: AI Content и AI Solutions шарят одну страницу до расширения AI-семьи

### Что изменено
- `components/gazeta/SmartHeader.tsx`: `Link href` кнопки 204 — `gazetaDetailRoutes.aiContent` → `/ai-visualization-service` (hardcoded)

### AI entry points затронуты
| Entry point | Было | Стало |
|-------------|------|-------|
| SmartHeader кнопка 204 `AI Решения` | `/gazeta/ai-content` | `/ai-visualization-service` |

### /gazeta/it проверка
- Код: `app/gazeta/it/page.tsx` уже содержит `redirect("/business-service")` — изменений не требовалось
- Статус: только restart/deploy нужен если сервер не запущен с последним билдом

### Файлы изменены
- `components/gazeta/SmartHeader.tsx`
- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

### Build: ✅ чистый

---

## 2026-04-01 (IT Routing Cleanup)
### Session Summary
- `/gazeta/it` удалён из активного user journey — вместо него IT трафик идёт на `/business-service`
- Временное решение: IT и Business намеренно шарят одну страницу (обсуждение-first L2 hub)

### Что изменено
- `constants/gazetaRoutes.ts`: `gazetaDetailRoutes.it` `/gazeta/it` → `/business-service`
  - Автоматически фиксирует: `gazetaNicheLandingRoutes["07"]`, IT nav item в `gazetaIndustryNavItems`
- `app/gazeta/it/page.tsx`: создан новый файл — статический `redirect("/business-service")` — overrides dynamic [slug] handler для прямых URL-посетителей

### IT entry points затронуты
| Entry point | Было | Стало |
|-------------|------|-------|
| `gazetaDetailRoutes.it` | `/gazeta/it` | `/business-service` |
| `gazetaNicheLandingRoutes["07"]` (NichesStack screenLink + allServicesCard) | `/gazeta/it` | `/business-service` |
| SmartHeader `gazetaIndustryNavItems` IT item | `/gazeta/it` | `/business-service` |
| Прямой URL `/gazeta/it` | gazeta slug page (IT config) | redirect → `/business-service` |

### Файлы изменены
- `constants/gazetaRoutes.ts`
- `app/gazeta/it/page.tsx` (создан)
- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

### Build: ✅ чистый (84/84 страниц)

---

## 2026-04-01 (businessService Simplification + Gazeta Final Form Fix)
### Session Summary
- `businessService` переведён из fake catalog (6 карточек, 3 без href) в discussion-first broad entry page (3 честных карточки).
- Дублирование финальной формы на `/gazeta` подтверждено и исправлено.

### businessService — что изменено (`constants/l2DirectionConfigs.ts`)
- `h1`: «…объектов» → «…проектов»
- `intro`: добавлена фраза «Если ваша ниша не в списке — расскажите о задаче, подберём формат вместе»
- `heroSubtitle`: заменён на discussion-first copy про структурное сходство бизнес-задач
- `heroSupportingLine`: «Даже если ваша ниша не вписывается…» — invitation to discuss
- `servicesHeading`: «Услуги для бизнеса…» → «Форматы, которые работают для бизнеса»
- Карточки 2, 5, 6 удалены (`kontent-sayta-reklamy`, `semka-prostranstva-obekta`, `ai-upakovka-kontenta`) — у них не было valID L3 href, они создавали видимость fake catalog
- Остались 3 честных карточки: `imidzhevoe-video-biznesa` → `/promo-video/promo-business`, `reels-shorts` → `/reels-promo/reels-business`, `tury-360` → `/360-tour-business`
- `contact.title`: «ОБСУДИМ КОНТЕНТ…» → «РАССКАЖИТЕ О СВОЁМ ПРОЕКТЕ»
- `contact.description`: discussion-first, «даже если ниша не в списке — обсудим и найдём формат»
- `contact.serviceOptions`: упрощён до 5 широких вариантов

### Gazeta final form duplication — что исправлено (`app/gazeta/page.tsx`)
- **Подтверждено**: `FinalFormSection` (labeled «09 — Форма связи») рендерилась поверх `NichesStack`, который уже содержал step-09 (FAQ) и step-10 (contact form, `id="contact"`, `zIndex: 100`)
- **Исправление**: `<FinalFormSection />` и его import удалены из `app/gazeta/page.tsx`
- Стек NichesStack сохранён полностью; contact path через step-10 не затронут
- Импорт `FinalFormSection` убран из файла

### Файлы изменены
- `constants/l2DirectionConfigs.ts`
- `app/gazeta/page.tsx`
- `CONTEXT_NEXT_CHAT.md`
- `CHANGELOG_ARCHIVE.md`

---

## 2026-04-01 (businessService Product Decision Audit)
### Session Summary
- Проведён ручной product decision audit для 3 оставшихся карточек `businessService` без `primaryHref`.
- Код не изменялся — только документирование решений.
- Артефакт: `BREUS_MEDIA_BUSINESSSERVICE_REMAINING_DECISIONS.md`

### Решения по карточкам

| Card slug | Title | Decision | Обоснование |
|-----------|-------|----------|-------------|
| `kontent-sayta-reklamy` | Контент для сайта и рекламы | NEEDS_NEW_L3 | Landing/Ads/Performance intent отличен от brand video; нет существующей страницы покрывающей performance-контент |
| `semka-prostranstva-obekta` | Съёмка пространства / объекта | NEEDS_MANUAL_PRODUCT_MERGE | Компонент brand video пакета, не отдельный продукт; нужно расширить `/promo-video/promo-business`, затем линковать |
| `ai-upakovka-kontenta` | AI-упаковка контента | NEEDS_NEW_L3 | Естественный 3-й член семьи ai-content (hotel + tourism + business); чистый паттерн для создания |

### Статус businessService
- Связано: 3/6 (`imidzhevoe-video-biznesa`, `reels-shorts`, `tury-360`)
- Без href (решения приняты): 3/6 (`kontent-sayta-reklamy`, `semka-prostranstva-obekta`, `ai-upakovka-kontenta`)

### Рекомендованная последовательность следующих batches
- **D1** (минимальный): создать `/ai-content/business-ai-content` → businessService 3/6 → 4/6
- **D2**: расширить `/promo-video/promo-business` + линковать `semka-prostranstva-obekta` → 4/6 → 5/6
- **D3**: создать `/promo-video/promo-business-ads` → 5/6 → 6/6 (полная связность)

---

## 2026-04-01 (Coverage Gap Batch C)
### Session Summary
- Закрыты 4 карточки NEEDS_L3 из Coverage Gap Audit: создано 2 новые L3 страницы для бизнес-ниши.
- Все 4 `primaryHref` привязаны в `constants/l2DirectionConfigs.ts`.
- Build чистый.

### Что создано

#### Новые страницы

**C1 — `/reels-promo/reels-business`** (~380 строк)
- Reels для бизнеса: бренды, сервисы, личный бренд, коммерческие объекты.
- Паттерн: семья `reels-promo` (reels-restaurant как эталон).
- Пакеты: Basic 1 200 ₾ (6 роликов), Standard 1 600 ₾ (8 + Caption Bank), Full 2 000 ₾ (10 + реклама).
- FAQ: beginner + money, long-tail answers, short Q&A, myths, glossary.

**C2 — `/promo-video/promo-business`** (~420 строк)
- Имиджевое видео бизнеса: команда, пространство, ценностное предложение.
- Паттерн: семья `promo-video` (promo-restaurant как эталон).
- Пакеты: Basic 600 ₾, Standard 1 000 ₾, Full 1 500 ₾.
- FAQ: beginner + commercial, long-tail answers, short Q&A, myths, glossary.

### Что изменено

#### `constants/l2DirectionConfigs.ts` — 4 новых primaryHref

| Хаб | Card slug | primaryHref |
|---|---|---|
| reelsService | `reels-biznes` (card 7) | `/reels-promo/reels-business` |
| promoVideoService | `promo-video-biznes` (card 7) | `/promo-video/promo-business` |
| businessService | `imidzhevoe-video-biznesa` (card 1) | `/promo-video/promo-business` |
| businessService | `reels-shorts` (card 3) | `/reels-promo/reels-business` |

### Статус businessService после Batch C
- Связано: 3/6 карточек (`imidzhevoe-video-biznesa`, `reels-shorts`, `tury-360`)
- Без href: 3/6 (`kontent-sayta-reklamy`, `semka-prostranstva-obekta`, `ai-upakovka-kontenta`) — NEEDS_MANUAL_PRODUCT_DECISION

---

## 2026-04-01 (Coverage Gap Audit)
### Session Summary
- Проведён полный аудит пробелов покрытия L3-страниц по всем 10 L2-хабам.
- Найдено и классифицировано 11 карточек без `primaryHref` + 1 soft-mismatch.
- Сформированы рекомендации по следующему Batch C и продуктовым решениям.
- Изменения в код не вносились — только документирование.

### Классификация пробелов

| Хаб | Card slug | Заголовок | Статус |
|---|---|---|---|
| reelsService | `reels-biznes` | Reels для бизнеса | NEEDS_L3 → `/reels-promo/reels-business` |
| promoVideoService | `promo-video-biznes` | Промо-видео для бизнеса | NEEDS_L3 → `/promo-video/promo-business` |
| businessService | `imidzhevoe-video-biznesa` | Имиджевое видео бизнеса | NEEDS_L3 → `/promo-video/promo-business` |
| businessService | `reels-shorts` | Reels и Shorts | NEEDS_L3 → `/reels-promo/reels-business` |
| tourismService | `kontent-glemping-baza` | Контент для глэмпинга / базы | CAN_STAY_HUB_ONLY |
| clinicsService | `kontent-esteticheskih-uslug` | Контент для эстетических услуг | CAN_STAY_HUB_ONLY |
| clinicsService | `ai-upakovka-kontenta` | AI-упаковка контента | SHOULD_LINK_TO_EXISTING_HUB (soft-mismatch, tourism fallback) |
| restaurantsService | `ai-upakovka-menyu-opisaniy` | AI-упаковка меню и описаний | NEEDS_MANUAL_PRODUCT_DECISION |
| autoService | `ai-upakovka-obyavleniy` | AI-упаковка объявлений | NEEDS_MANUAL_PRODUCT_DECISION |
| businessService | `kontent-sayta-reklamy` | Контент для сайта и рекламы | NEEDS_MANUAL_PRODUCT_DECISION |
| businessService | `semka-prostranstva-obekta` | Съёмка пространства / объекта | NEEDS_MANUAL_PRODUCT_DECISION |
| businessService | `ai-upakovka-kontenta` | AI-упаковка контента | NEEDS_MANUAL_PRODUCT_DECISION |

### Рекомендованный следующий batch (Batch C)
- C1: `/reels-promo/reels-business` — закрывает `reelsService.reels-biznes` + `businessService.reels-shorts`
- C2: `/promo-video/promo-business` — закрывает `promoVideoService.promo-video-biznes` + `businessService.imidzhevoe-video-biznesa`

### Файл-артефакт
- `BREUS_MEDIA_COVERAGE_GAP_AUDIT.md`

---

## 2026-04-01 (Card/Binding Consistency Batch B)
### Session Summary
- Проверены 7 карточек без `primaryHref` в `businessService` (5 штук) и `reelsService` (2 штуки).
- Исправлена 1 карточка: `reelsService.reels-nedvizhimost` → `/reels-promo/reels-real-estate`.
- 6 карточек оставлены без `primaryHref` — канонические L3 страницы не существуют.
- Изменения данные-only: нет редизайна, нет правки цен, нет нормализации CTA.
- Build чистый.

### Что изменено

#### `constants/l2DirectionConfigs.ts` — reelsService

**B1 — reels-nedvizhimost (card 1):**
- Было: нет `primaryHref`
- Стало: `primaryHref: '/reels-promo/reels-real-estate'` (страница существует)

### Оставлено без href (L3 страница не существует)

| Хаб | Card slug | Причина |
|---|---|---|
| reelsService | reels-biznes (card 7) | `/reels-promo/reels-business` не существует |
| businessService | imidzhevoe-video-biznesa (card 1) | `/promo-video/promo-business` не существует |
| businessService | kontent-sayta-reklamy (card 2) | нет generic content-for-ads L3 |
| businessService | reels-shorts (card 3) | `/reels-promo/reels-business` не существует |
| businessService | semka-prostranstva-obekta (card 5) | нет space-shooting L3 |
| businessService | ai-upakovka-kontenta (card 6) | нет business-specific AI content L3 |

### Не тронуто
- Все существующие `primaryHref` в `businessService` (card 4: `/360-tour-business`) — без изменений
- Все существующие `primaryHref` в `reelsService` (cards 2,3,4,5,6,8) — без изменений
- Ценообразование — без изменений

---

## 2026-04-01 (Card/Binding Consistency Batch A)
### Session Summary
- Исправлены 2 подтверждённых неверных L3 href в `clinicsService` (`l2DirectionConfigs.ts`).
- Изменения данные-only: нет редизайна, нет правки цен, нет широкой нормализации карточек.
- Build чистый.

### Что изменено

#### `constants/l2DirectionConfigs.ts` — clinicsService

**A1 — ai-upakovka-kontenta (card 6):**
- Было: `primaryHref: '/ai-content/hotel-ai-descriptions'` (неверная hotel-family страница)
- Стало: `primaryHref: '/ai-content/tourism-ai-packaging'` (ближайший существующий AI Content вариант)

**A2 — kontent-esteticheskih-uslug (card 5):**
- Было: `primaryHref: '/promo-video/clinic-interior'` (дублировало href card 3 `semka-interera-kabinetov`)
- Стало: поле `primaryHref` удалено (нет уникальной L3 страницы для beauty/skin/dental/wellness)

### Не тронуто
- Cards 1–4, 7 в clinicsService — hrefs без изменений
- Ценообразование — без изменений
- Все другие L2 хабы — без изменений

---

## 2026-04-01 (Package Matrix Batch A recovery)
### Session Summary
- Обнаружено: коммит `cd591f2` (Package Matrix Batch A) отсутствовал на `main` после последующих коммитов.
- Восстановлены изменения вручную — без rollback, без потери более новых фиксов (form UX, analytics, routes/CTA).
- 16 кодовых файлов изменены (все контентные, нет архитектурных изменений).

### Что изменено

#### 360° tour pages (6 файлов) — FAQ hosting/storage wording
- `app/360-tour-auto/page.tsx`
- `app/360-tour-business/page.tsx`
- `app/360-tour-clinics/page.tsx`
- `app/360-tour-hotels/page.tsx`
- `app/360-tour-restaurants/page.tsx`
- `app/360-tour-tourism/page.tsx`

Вопрос "Где хранится тур?" и "Нужно ли платить ежемесячно за хостинг?" — смягчены. Было: жёсткое обещание бесплатного хостинга в пакете. Стало: передаём материалы, размещение согласуем; длительное хранение = support-опция.

#### drone-hotels-tourism — удалён trust-lowering placeholder
- `app/drone-hotels-tourism/page.tsx`: удалён абзац «Реальные кейсы Breus Media появятся после первых проектов. Свяжитесь — обсудим пилотный проект на выгодных условиях.»

#### drone-reporting — PDF add-on label
- `app/drone-services/drone-reporting/page.tsx`: «При заказе сводки: PDF-отчёт...» → «PDF-отчёт ... доступен как add-on к любому выезду (+100 ₾).»

#### reels pages (8 файлов) — лицензионная музыка
- `app/reels-promo/hotel-seasonal-content/page.tsx`
- `app/reels-promo/promo-zhk-launch/page.tsx`
- `app/reels-promo/reels-auto/page.tsx`
- `app/reels-promo/reels-clinic/page.tsx`
- `app/reels-promo/reels-hotel/page.tsx`
- `app/reels-promo/reels-real-estate/page.tsx`
- `app/reels-promo/reels-realtor/page.tsx`
- `app/reels-promo/reels-restaurant/page.tsx`

«музыка» → «лицензионная музыка» / «треки» → «лицензионные треки» в deliverables и glossary.

### Commits
- `5479476` — fix(content): recover package matrix batch A — hosting FAQ, PDF label, placeholder, licensed music

## 2026-04-01 (Live vs Local Visual Parity Audit)
### Session Summary
- Выполнен live-vs-local visual parity audit с приоритетом `/gazeta`, затем `/real-estate-service` и `/drone-service`.
- Сравнение проведено на desktop, mobile portrait, mobile landscape.
- Добавлен отдельный отчёт: `BREUS_MEDIA_LIVE_VS_LOCAL_VISUAL_PARITY.md`.
- Код страниц не менялся, обновлена документация и контекст.

### Baseline / Method
- Live reference: `https://breus-media-v2.vercel.app/gazeta`
- Local parity baseline: production-like (`NEXT_PUBLIC_DEBUG_MODE=false`, `npm run build`, `npm run start` на `PORT=3200`)
- Дополнительно зафиксировано, что `next dev` + `.env.local` (`NEXT_PUBLIC_DEBUG_MODE=true`) дают шум parity (debug badges + timing drift).

### Key Findings
- `/gazeta`: near-full parity на всех 3 breakpoint (структура, hero/marquee/header, section stack, FAQ/contact).
- Critical mismatch: `/drone-service` initial hero state (стартовый активный слайд и compact navigator порядок) не совпадает с live.
- Medium mismatch: hero secondary CTA copy на L2:
  - `/real-estate-service`: live `Заказать` vs local `Подобрать услугу`
  - `/drone-service`: live `Заказать` vs local `Подобрать услугу`
- L3 spot-check:
  - `/drone-construction-monitoring`: структура совпадает, copy-различия;
  - `/promo-video/promo-real-estate`: визуально совпадает.

### Added Docs
- `BREUS_MEDIA_LIVE_VS_LOCAL_VISUAL_PARITY.md`

### Artifacts
- `output/playwright/live-localprod-parity-2026-04-01/`
- `output/playwright/live-localprod-parity-2026-04-01/diff-metrics.tsv`

### Commits
- `(pending)` — docs: live-vs-local visual parity audit + context/changelog update

## 2026-04-01 (Form UX Honesty Batch)
### Session Summary
- Устранён UX-разрыв: форма выглядела как рабочая submission-форма, но никуда не отправляла данные.
- WhatsApp стал primary CTA. Форма — secondary, честно работает через WhatsApp pre-fill.
- Код изменён в 1 файле: `components/gazeta/FinalFormSection.tsx`.

### Что изменено

#### FinalFormSection.tsx
- Удалён импорт `Send` (иконка неактуальна), оставлен `MessageCircle`.
- Добавлены controlled state для `name`, `contact`, `niche`, `task` (для сборки WhatsApp-сообщения).
- `buildWhatsAppUrl()` — собирает pre-filled wa.me URL из данных формы.
- `handleSubmit()` — вместо fake submit открывает WhatsApp с заполненным сообщением + gtag event.
- Добавлен subtitle под h2: _"Напишите напрямую — или заполните форму, и мы откроем чат с вашим запросом."_
- `<select>` option values переключены на читаемые строки (раньше были `realestate`, `hotels`, etc.).

#### Кнопки (DebugWrapper #47)
| До | После |
|---|---|
| PRIMARY: `bg-white` "Написать" → ничего не делает | PRIMARY: `bg-white` → `hover:bg-[#D4AF37]` "Написать в WhatsApp" → прямой WhatsApp |
| SECONDARY: border "Перейти в WhatsApp" | SECONDARY: border "Отправить запрос" → WhatsApp pre-fill с данными формы |
| Нет пояснения | Footnote: "Данные формы откроются в WhatsApp" |

### Commits
- `c40f327` — ux(form): WhatsApp as primary CTA, honest submit via pre-fill

---

## 2026-04-01 (Analytics Batch — minimal pre-launch tracking)
### Session Summary
- Реализован минимальный аналитический слой перед soft launch.
- Код изменён в 2 файлах: `app/layout.tsx` и `components/gazeta/FinalFormSection.tsx`.

### Что сделано
- `app/layout.tsx`: добавлен GA4 через `next/script` `strategy="afterInteractive"`, управляется через `NEXT_PUBLIC_GA_ID`. Если переменная не задана — скрипт не вставляется, сайт работает без ошибок.
- `FinalFormSection.tsx`: WhatsApp-кнопка — `whatsapp_click` event; onSubmit формы — `form_submit_attempt` event. Оба через `window.gtag` с защитой `typeof gtag === "function"`.

### Events
| Событие | Где | Когда |
|---|---|---|
| `whatsapp_click` | FinalFormSection → WhatsApp ссылка | При клике на "Перейти в WhatsApp" |
| `form_submit_attempt` | FinalFormSection → onSubmit | При попытке отправить форму |

### Env var
- `NEXT_PUBLIC_GA_ID` — добавить в Vercel project env vars перед production деплоем

### Commits
- `c82bc61` — feat(analytics): add GA4 script and whatsapp_click/form_submit_attempt events

---

## 2026-04-01 (Regression Sanity Check — автоматический scheduled task)
### Session Summary
- Выполнен регрессионный чек против HEAD `e7c428f` (все 25 пунктов).
- Код не изменялся — только документация.

### Key Findings
- Все P1 blockers из `BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md` подтверждены как RESOLVED в `77c634d`.
- CONTEXT_NEXT_CHAT.md исправлен: `[ ]` P1-задачи переведены в `[x]`, last commit обновлён до `77c634d`.
- CHANGELOG_ARCHIVE.md: `(pending)` для CTA Fix Batch 1 заменён на `77c634d`.
- 3 активных P2 подтверждены: `primaryCtaLabel 'Открыть услугу'` × 5, no sticky CTA на L2, no analytics.
- False positives от предыдущих аудитов задокументированы.

### False Positives Closed
- `/gazeta/[slug]` CTA hierarchy — resolved in `77c634d`
- `/gazeta/[slug]` contact href cross-page — resolved in `77c634d`
- `/gazeta` `#contact` anchor — existed in NichesStack.tsx:1617 all along
- AI Visual "Узнать цену" — never existed in production code

### Commits
- `(pending)` — docs: regression sanity check, fix stale P1 task markers

### Added Docs
- `BREUS_MEDIA_CURRENT_HEAD_REGRESSION_CHECK.md`

---

## 2026-04-01 (Localhost Visual Smoke Test)
### Session Summary
- Запущен prod-сервер на порту 3001 (`next start` после чистой сборки).
- Проверены 11 страниц на 3 viewport: desktop 1440×900, mobile portrait 390×844, landscape 844×390.
- Код не менялся — только аудит.

### Result
- **Критических проблем: 0**
- Все P1 CTA-фиксы (batch 1, commit 77c634d) подтверждены DOM-запросами.
- Единственная находка: DebugWrapper labels видны в локальной prod-сборке — это ожидаемо (env var не задан локально). На Vercel env выставлен корректно.
- Console errors/warnings: 0. Build errors: 0.

### Added Docs
- `BREUS_MEDIA_LOCALHOST_VISUAL_SMOKE_TEST.md`

---

## 2026-04-01 (Launch Readiness Audit — автоматический scheduled task)
### Session Summary
- Выполнен полный Launch Readiness Audit против HEAD `70065ab`.
- Все предыдущие blockers перепроверены против реального кода (не полагаясь на stale записи).
- Код не изменялся — только анализ и документация.

### Что проверено
- Все 102+ маршрутов: build passes (static), imports valid, TypeScript strict.
- Vercel: последний deploy READY, commit `70065ab`, production live.
- CTA labels на всех AI Visual L3 страницах: "Узнать цену" в коде НЕ существует — лейблы корректны.
- `id="contact"` anchor: EXISTS в `NichesStack.tsx:1617` — `/gazeta` hero CTA работает.
- `.env.local` `NEXT_PUBLIC_DEBUG_MODE=true` — только локальный dev, Vercel production не затронут.

### Активные issues, подтверждённые кодом
1. `/gazeta/[slug]` — инвертированная иерархия кнопок (P1): "Назад к Gazeta" = primary, "Обсудить проект" = secondary. Файл: `app/gazeta/[slug]/page.tsx:158–170`.
2. `/gazeta/[slug]` — cross-page anchor (P1): `href="/gazeta#contact"`. Файл: `app/gazeta/[slug]/page.tsx:165`.
3. `l2DirectionConfigs.ts` — 5 случаев `primaryCtaLabel: 'Открыть услугу'` ведут на L3 (P2).
4. L2 Hubs — нет sticky CTA (P2).
5. Нет analytics/tracking в root layout (P2).

### Исправлены stale записи в CONTEXT_NEXT_CHAT
- Предыдущие записи [x] для P1-задач помечены как выполненные, но код не изменён. Контекст скорректирован на актуальное состояние.

### Commits
- `(pending)` — docs: launch readiness audit (scheduled task 2026-04-01)

### Added Docs
- `BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md` — полный аудит с executive summary, blockers, non-blocking, post-launch, stable areas, next batch.

---

## 2026-04-01 (CTA Fix Batch 1)
### Session Summary
- Реализованы P1 CTA-фиксы по итогам аудита.

### Changes
1. `components/gazeta/FinalFormSection.tsx` — добавлен `id="contact"` на внешний div-контейнер. Исправляет broken anchor `#contact` в hero CTA на `/gazeta`.
2. `app/gazeta/[slug]/page.tsx` — исправлена иерархия кнопок: "Обсудить проект" теперь white filled (primary), "Назад к Gazeta" — border (secondary). Контактный href изменён с `/gazeta#contact` на `https://wa.me/995574619393` (direct WhatsApp, надёжный путь).
3. AI Visual P1 — аудит-агент ошибся: лейбл "Узнать цену" не существует ни в одной из 7 страниц. Реальные лейблы ("Получить демо-визуализацию", "Прислать фото авто" и др.) корректны. Изменений не требуется.

### Commits
- `77c634d` — fix(cta-batch1): fix gazeta hero anchor, slug CTA hierarchy and contact path

### Technical Notes
- FinalFormSection — sticky slide-up компонент с h-[150vh]; добавление id="contact" на внешний div позволяет браузеру скроллить к нему, после чего анимация формы срабатывает штатно.
- gazeta/[slug] — WhatsApp выбран вместо on-page формы, т.к. страница категории не имеет своей формы, а cross-page anchor `/gazeta#contact` требует перехода и ненадёжен.

---

## 2026-04-01
### Session Summary
- Выполнен автоматический cross-family CTA & Contact Path Audit (scheduled task).
- Покрытие: /gazeta, все 10 L2 хабов, репрезентативные L3 страницы по 7 семействам (drone, 360, reels, promo, AI, monitoring/inspection).
- Код не изменялся — только анализ и документация.

### Commits
- `(pending)` — docs: cross-family CTA & contact path audit

### Findings
- **Сильные паттерны:** Drone L3 (двойной hero CTA + MidCta ×2-3 + sticky + 4-канальный контакт); L2 SmartHeader nav-якоря; Reels L3 hero pair.
- **Критические дефекты (P1):**
  1. `/gazeta` hero CTA `#contact` — broken anchor (нет id="contact" на FinalFormSection)
  2. `/gazeta/[slug]` — инвертированная иерархия кнопок (backward nav = primary)
  3. `/gazeta/[slug]` — contact href ведёт на `/gazeta#contact` (cross-page anchor, ненадёжно)
  4. AI Visual L3 — "Узнать цену" ведёт в WhatsApp (несоответствие ожидания)
- **Системный пробел (P2):** На L2 хабах нет sticky CTA, несмотря на 11 секций страниц.
- **Несогласованность:** Hero primary CTA использует 3 разные стратегии маршрутизации между семействами (anchor / direct WA / L3 href).

### Added Docs
- `BREUS_MEDIA_CTA_CONTACT_PATH_AUDIT.md` — полный аудит с таблицами и рекомендациями

### Release Notes
- Статус: только документация, деплой не требуется.

---

## 2026-03-27
### Session Summary
- Обновлён handover-контекст проекта и структура передачи знаний между чатами.
- Добавлен runbook деплоя/отката.
- Исправлены критичные визуальные проблемы на `/gazeta` локально.

### Commits
- `5824f02` — docs: обновлён CONTEXT_NEXT_CHAT с итогами сессии 27 марта
- `d58b014` — fix(gazeta): remove duplicate ticker layer and restore scroll reveal
- `976ee51` — fix(gazeta): align sticky stack under marquee height

### Technical Notes
- Дублирование ticker-слоёв было вызвано одновременным рендером в `SmartHeader` и `MarqueeSection`.
- Для `NichesStack` выровнен sticky offset относительно фактической высоты header+marquee.
- Сборка `npm run build` после фиксов проходит.

### Release Notes
- Статус: изменения подтверждены локально.
- Ограничение: в локальном репозитории не настроен `git remote`, поэтому автоматический push/deploy недоступен.

### Added Operational Docs
- `DEPLOYMENT.md` — регламент деплоя и rollback.
- `CONTEXT_NEXT_CHAT.md` — обновлён и приведён к формату “актуальный срез”.

### Session Update (GitHub + Vercel Sync)
- GitHub remote настроен: `origin -> https://github.com/TonyBreus/breus-media-v2.git`
- `main` успешно запушен в GitHub.
- Vercel проект подключен к GitHub репозиторию.
- Выполнен дополнительный safeguard для `/gazeta`, чтобы исключить повтор дублирования marquee из header.

#### Commits
- `03e19bc` — fix(gazeta): force-disable header ticker on landing to prevent duplicate marquee

#### Verification
- `npm run build` — OK.
- Live/local сравнение `/gazeta` (hero + marquee reveal) — консистентное поведение.

---

## 2026-03-27 (Live vs Local Recheck)
### Session Summary
- Прочитаны `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`, `DEPLOYMENT.md`.
- Выполнено прицельное сравнение `/gazeta` на live и local по hero-анимации и количеству бегущих строк.

### Commits
- `N/A` — код не менялся, обновлена только документация handover/changelog.

### Technical Notes
- Замер выполнен через Playwright (viewport `1440x900`) с метриками до/после скролла.
- Hero-анимация совпадает:
  - до скролла: `transform: translateY(65vh)`;
  - после скролла ~`950px`: `transform: translateY(-60vh) scale(0.25)`.
- В marquee-блоке на live и local одинаково:
  - бегущих строк: `2`;
  - разделитель между строками: `1`.

### Release Notes
- Статус: `local verification only`.
- Деплой: не выполнялся (команда `DEPLOY NOW` не поступала).

---

## 2026-03-27 (Header/DebugWrapper Production Parity Fix)
### Session Summary
- Подтверждена причина визуального расхождения `/gazeta` между localhost и live в верхней части страницы.
- Внесён точечный фикс, чтобы production-режим повторял корректный layout из debug-режима.

### Commits
- `edb303d` — fix(gazeta): preserve header layout in non-debug mode

### Technical Notes
- Корень проблемы: `DebugWrapper` в non-debug режиме возвращал `Fragment`, из-за чего терялись `className/style` у обёрток.
- Это ломало layout в местах, где `DebugWrapper` использовался как структурный контейнер (например, `flex-1` в `SmartHeader`).
- Фикс в `components/debug/DebugWrapper.tsx`:
  - если debug выключен и есть `className/style`, рендерится обычный `<div className style>`;
  - иначе остаётся `Fragment`.
- Проверка:
  - `NEXT_PUBLIC_DEBUG_MODE=false PORT=3011 npm run dev` — `/gazeta` визуально соответствует ожидаемой “локальной” верхушке;
  - `npm run build` — успешно.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).
- Post-deploy check: live `/gazeta` отдаёт обновлённый header markup с `flex-1` контейнером в левой секции.

---

## 2026-03-27 (Gazeta Cards -> L2 Source Of Truth)
### Session Summary
- Выполнена инициализация карточек Gazeta из реальных L2-источников вместо ручного/хаотичного массива.
- Обновлены оба контекста: основной `/gazeta` (stack cards `00–08`) и внутренние `/gazeta/[slug]`.

### Commits
- `1c7f85c` — feat(gazeta): sync 00-08 service cards with 5+1 cap

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлены адаптеры данных из:
    - `droneServiceItems` для ниши `00`,
    - `realEstateServiceItems` для ниши `01`,
    - `l2DirectionConfigs` для ниш `02–08`;
  - карточки в `Card` теперь берутся из `canonicalServicesByNicheId` (source of truth), а не из вручную вшитого массива.
- `app/gazeta/[slug]/page.tsx`:
  - для slug `real-estate` добавлен источник `realEstateServiceItems`,
  - для L2-источников убран искусственный лимит `slice(0, 6)` — теперь рендерится полный набор доступных услуг.
- `npm run build` — успешно.

### Release Notes
- Статус: `local fix ready`.
- Деплой: не выполнялся в этой сессии (ожидается отдельная явная команда, если нужно выкатить).

---

## 2026-03-27 (Gazeta 01 Visual Parity + 7+1 Card Cap)
### Session Summary
- По запросу UX донастроен `NichesStack`: максимум 8 карточек на секцию (`7` услуг + `Все услуги`).
- Для секции `01` (Недвижимость) перенесён визуальный паттерн карточек из `RealEstateServicesStitch`.

### Commits
- `N/A` — изменения подготовлены локально (без нового деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - `sourceServices.slice(0, 7)` перед добавлением карточки `Все услуги`;
  - добавлен специализированный рендер карточки для `niche.id === "01"` с layout/className, повторяющими `RealEstateServicesStitch`:
    - image block,
    - badge/tag,
    - title/category/description/price,
    - CTA (`Подробнее` + `Заказать`).
  - `ServiceItem` расширен полем `featured`; в адаптерах прокинуты `tag/featured`.
- Проверки:
  - `npm run build` — успешно;
  - локальный HTML-check `/gazeta`: `service-card-target` = `7` (Real Estate сервисные карточки; 8-я карточка “Все услуги” отдельно).

### Release Notes
- Статус: `local refinement ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`, если нужно выкатывать).

---

## 2026-03-27 (Gazeta 00-08 Full Service-Card Parity)
### Session Summary
- Visual-parity карточек распространён с `01` на все секции `00–08` в `NichesStack`.
- Сервисные карточки на Gazeta теперь повторяют структуру/визуал карточек service pages по всем нишам.

### Commits
- `N/A` — изменения подготовлены локально (без нового деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - `ServiceItem` расширен полями `slug`, `featured`;
  - адаптеры источников (`Drone`, `RealEstate`, `L2`) теперь прокидывают `slug/tag/featured`;
  - для всех non-`all-services` карточек включён единый service-page parity рендер:
    - `service-card-target` wrapper,
    - image area + optional tag,
    - title/category/description/price,
    - CTA блок (`Подробнее` + `Заказать`),
    - поддержка internal/external href.
- DOM-check (`/gazeta`, local):
  - `00`: service cards `7`, total `8`;
  - `01`: service cards `7`, total `8`;
  - `02`: service cards `6`, total `7`;
  - `03`: service cards `7`, total `8`;
  - `04`: service cards `7`, total `8`;
  - `05`: service cards `7`, total `8`;
  - `06`: service cards `7`, total `8`;
  - `07`: service cards `6`, total `7`;
  - `08`: service cards `6`, total `7`.
- `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Final Card Cap 5+1)
### Session Summary
- По финальному UX-решению ограничение карточек на `/gazeta` обновлено с `7+1` до `5+1` для всех секций `00–08`.

### Commits
- `1c7f85c` — feat(gazeta): sync 00-08 service cards with 5+1 cap

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - лимит сервисных карточек изменён на `sourceServices.slice(0, 5)`;
  - карточка `Все услуги` остаётся шестой.
- Проверки:
  - `npm run build` — успешно;
  - Playwright DOM-check (`/gazeta`, local):
    - `00`: `5 + 1`,
    - `01`: `5 + 1`,
    - `02`: `5 + 1`,
    - `03`: `5 + 1`,
    - `04`: `5 + 1`,
    - `05`: `5 + 1`,
    - `06`: `5 + 1`,
    - `07`: `5 + 1`,
    - `08`: `5 + 1`.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после явной команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).

---

## 2026-03-27 (Gazeta Mobile Landscape Top-Space Optimization)
### Session Summary
- Оптимизирована мобильная горизонтальная версия `/gazeta`: фиксированный верхний слой (header + marquee) стал компактнее и перестал занимать критично много экрана.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- Добавлен хук `hooks/useMobileLandscape.ts` для детекции mobile landscape (ориентация + короткий viewport).
- `components/gazeta/SmartHeader.tsx`:
  - высота header в mobile landscape уменьшена до `64px` (initial) / `56px` (scrolled);
  - компактированы мобильные контролы (language/CTA/menu), а также ticker-типографика в режиме compact.
- `components/gazeta/MarqueeSection.tsx`:
  - верхний fixed-offset стал адаптивным (`56px` в mobile landscape);
  - в mobile landscape показывается одна бегущая строка (вместо двух);
  - уменьшены вертикальные отступы и размеры элементов бегущей строки.
- `components/gazeta/NichesStack.tsx`:
  - sticky-top/height переведены на динамический расчёт;
  - для mobile landscape установлен top offset `108px` (вместо `184px`).
- `components/gazeta/FinalFormSection.tsx`:
  - offset/height синхронизированы с compact-top (`108px` в mobile landscape).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Landscape Fine-Tune: Return #209 + Smaller Rows)
### Session Summary
- По обратной связи в mobile landscape возвращена вторая бегущая строка `#209` и ещё сильнее ужаты фиксированные верхние элементы.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/MarqueeSection.tsx`:
  - строка `#209` возвращена в landscape-режим;
  - обе строки `#208/#209` уменьшены: типографика/горизонтальные и вертикальные отступы в compact-режиме.
- `components/gazeta/NichesStack.tsx`:
  - заголовочные строки секций `00–08` уменьшены в landscape примерно в 2 раза (`h-6` вместо `h-12`);
  - аналогично уменьшены строки `09` (FAQ) и `10` (Form);
  - отступ тела карточки синхронизирован с уменьшенной высотой строки (`pt-6`).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Card Grid 2/4 + Compact Cards)
### Session Summary
- По UX-запросу мобильные карточки в стеке `/gazeta` сделаны компактнее и перестроены в более плотную сетку.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - мобильная сетка карточек услуг:
    - portrait mobile: `2` колонки,
    - landscape mobile: `4` колонки;
  - высота сервисных карточек уменьшена (включая image блок и внутренние отступы);
  - уменьшены размеры текста, бейджей и CTA-кнопок на мобильных;
  - высота карточек приведена к более компактному виду (ориентир ~30% меньше), без изменения desktop-layout.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Real Estate 8410/8411 CTA + Price-Line Fix)
### Session Summary
- Точечно доработаны карточки `8410` и `8411` (секция `01` Недвижимость) и мобильный CTA layout.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - для карточек `8410`/`8411` отключён вывод жёлтой price-строки;
  - в мобильных режимах CTA-блок перестроен в вертикальную последовательность:
    - сначала `Подробнее`,
    - затем `Заказать`;
  - ширина кнопок переведена в `w-full`, чтобы исключить обрезание/уход `Заказать` за границы карточки.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Nested Scroll Handoff UX)
### Session Summary
- Снижен конфликт между внутренним и внешним скроллом на `/gazeta` для более интуитивного поведения.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - для внутренних scroll-областей секций, FAQ и Form добавлены `overscroll-y-contain` + `touch-pan-y`.
- `components/gazeta/FinalFormSection.tsx`:
  - для внутренней scroll-области также добавлены `overscroll-y-contain` + `touch-pan-y`.
- Эффект:
  - уменьшается “двойной” скролл-сдвиг (внутри карточки + сразу к следующей секции),
  - поведение передачи скролла между уровнями становится более последовательным.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Portrait Top Compact ~30%)
### Session Summary
- Верхняя фиксированная зона (`header + marquee + top rows`) уменьшена и для мобильного вертикального режима.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- Добавлен хук `hooks/useMobilePortrait.ts`.
- `components/gazeta/SmartHeader.tsx`:
  - portrait mobile теперь использует compact-высоты хедера (`~64/52`) и уменьшенные размеры контролов.
- `components/gazeta/MarqueeSection.tsx`:
  - для portrait mobile уменьшен верхний offset и включён compact-рендер строк.
- `components/gazeta/NichesStack.tsx`:
  - sticky top для portrait mobile снижен (`128px` вместо `184px`);
  - табы `00–08`/`09`/`10` в portrait стали ниже (`h-8`).
- `components/gazeta/FinalFormSection.tsx`:
  - portrait sticky top синхронизирован (`112px`) и header-строка уменьшена (`h-8`).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Gap Fix: #209 to #00)
### Session Summary
- Устранено заметное тёмное пространство между второй бегущей строкой (`#209`) и первой строкой стека (`#00 Аэросъёмка`).

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - скорректированы мобильные `stickyTop` offsets:
    - landscape: `84px` (было `108px`),
    - portrait: `96px` (было `128px`).
- `components/gazeta/FinalFormSection.tsx`:
  - синхронизирован `stickyTop`:
    - landscape: `84px`,
    - portrait: `96px`.
- Результат:
  - исчез зазор между `#209` и `#00`,
  - верхняя часть выглядит цельно без “тёмной полосы”.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Ticker Baseline + 209/00 Overlap Tuning)
### Session Summary
- Исправлены артефакты мобильного тикера: разная вертикаль текста в строке `#209` и наезд `00` под вторую бегущую строку.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/MarqueeSection.tsx`:
  - элементы тикера и ссылки переведены в `inline-flex items-center`,
  - добавлен `leading-none`, `shrink-0`, `items-center` для стабильной базовой линии текста.
- `components/gazeta/SmartHeader.tsx`:
  - аналогично выровнены ticker-элементы в шапке для консистентности.
- `components/gazeta/NichesStack.tsx`:
  - `PORTRAIT_STICKY_TOP_PX` увеличен до `104` для исключения наезда `00` под `209`.
- `components/gazeta/FinalFormSection.tsx`:
  - portrait offset синхронизирован до `104`.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Step Navigation)
### Session Summary
- Для мобильной версии добавлена явная пошаговая навигация по стеку секций, чтобы упростить скролл UX.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен mobile-only навигационный контрол:
    - `Назад`,
    - индикатор текущего шага (`00/10 ...`),
    - `Далее ↓`;
  - реализован `scrollToStep(...)` с плавным переходом к следующему/предыдущему шагу;
  - текущий шаг синхронизируется через `useMotionValueEvent(scrollYProgress, ...)`.
- Цель:
  - уменьшить фрустрацию от nested-scroll на телефонах,
  - сохранить визуальный эффект стековых карточек, но добавить понятный способ перехода.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Step Navigation Rollback)
### Session Summary
- По UX-обратной связи step navigation (`Назад / Далее`) отменён: ощущался сложнее и перегружал мобильный сценарий.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - удалены `useMotionValueEvent`-трекер шага, `scrollToStep(...)` и fixed mobile step-контрол.
- Текущий подход:
  - возвращён базовый “каскадный” стековый скролл без пошаговой панели.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Hard Handoff + Inner Scroll Rail)
### Session Summary
- Внедрён более интуитивный mobile-скролл: сначала прокрутка контента внутри текущей секции, затем переход к следующей.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен hard handoff для mobile:
    - `wheel/touch` внутри секции сначала прокручивают внутренний контейнер,
    - внешний scroll пропускается только когда внутренняя секция дошла до границы;
  - добавлена внутренняя “скролл-лента” справа (визуал прогресса секции);
  - добавлен нижний маркер `Далее {id} {title}` при достижении конца внутреннего контента.
- Цель:
  - снизить конфликт nested-scroll,
  - сделать явным, где пользователь сейчас скроллит (внутри секции или между секциями).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile UX Pack Deployed)
### Session Summary
- Выполнен продакшн-деплой пакета мобильных UX-улучшений для `/gazeta`.

### Commits
- `413c9d2` — feat(gazeta): optimize mobile compact layout, cards, and scroll handoff

### Technical Notes
- В релиз вошли локальные доработки этой сессии:
  - compact top для mobile landscape и portrait (header + marquee + top rows),
  - мобильная сетка карточек (`2` колонки portrait, `4` колонки landscape),
  - точечный фикс карточек `8410/8411` (убран highlight-price, CTA вертикально на mobile),
  - nested-scroll handoff (`overscroll-y-contain` + `touch-pan-y`),
  - устранение зазора между `#209` и `#00` через корректировку sticky offsets.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после явной команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).

---

## 2026-03-27 (Gazeta Duplicate In-Section Label Cleanup)
### Session Summary
- Убрано дублирование названий ниш внутри контент-блоков секций `/gazeta` (пример: повтор `02 Отели` и `04 Автобизнес` внутри той же секции).

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - удалён fallback-показ внутреннего `eyebrow` вида `${niche.id} / ${niche.title}`;
  - внутренний `eyebrow` теперь рендерится только при наличии `niche.detailedContent.eyebrow`.
- Результат:
  - убран визуальный дубль заголовков ниш внутри секции,
  - освобождено вертикальное пространство для карточек и контента.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Scroll + Label Cleanup Deployed)
### Session Summary
- После явной команды `DEPLOY NOW` изменения по мобильному UX `/gazeta` и очистке дублей заголовков внутри секций выведены в прод.

### Commits
- `82c6e14` — feat(gazeta): refine mobile scroll UX and remove duplicate niche labels

### Technical Notes
- В релиз вошли:
  - уточнение mobile-scroll поведения в стеке секций,
  - выравнивание визуала бегущих строк/оффсетов (`209 -> 00`),
  - удаление дублирующих подписей ниш внутри контент-блока секций (`02/04` и аналогичные fallback-лейблы).
- Проверка перед деплоем:
  - `npm run build` — успешно.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после явной команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).

---

## 2026-03-27 (Gazeta Clickable Next-Section Hint)
### Session Summary
- Подсказка `Далее` внутри секций `/gazeta` сделана интерактивной для более понятной межстраничной навигации.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - `Далее {id} {название}` заменён с пассивного `div` на кликабельную кнопку;
  - добавлена иконка `ArrowDown` (визуальная подсказка направления);
  - реализован обработчик `handleNextIndustryClick()` с плавным скроллом к следующей секции;
  - каждой секции назначен якорь `id="niche-step-{id}"` для точного перехода.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Prev/Next Navigation + Snap Alignment Fix)
### Session Summary
- Добавлена двусторонняя навигация между секциями (`Назад/Далее`) и исправлена неточная “посадка” секций в стек при клике.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлена верхняя кнопка `Назад {id} {название}` (стрелка вверх) для перехода к предыдущей секции;
  - логика перехода между секциями изменена:
    - вместо фиксированного расчёта по `index * 100vh` используется выравнивание по фактической позиции целевой секции (`getBoundingClientRect`);
    - добавлена post-smooth корректировка (дополнительные авто-выравнивания), чтобы заголовок целевой секции стабильно становился в sticky-позицию;
  - усилены `z-index` и интерактивный слой кнопок, чтобы клики не перехватывались контентом карточек.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Left Touch Scroll Control + Header Back Button)
### Session Summary
- Для мобильного UX добавлен левый сенсорный scroll-control и переработано размещение кнопки возврата в строке секции.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен левый touch-control (`↑`/`↓`) в центре экрана для внутренних секций:
    - скролл внутри текущей секции на фиксированный шаг;
    - при достижении границы — переход к предыдущей/следующей секции;
  - кнопка `Назад` перенесена в верхнюю строку секции (`00/01/02 ...`) и увеличена для удобного тапа;
  - мобильные карточки услуг в стеке слегка уменьшены (высота превью + внутренние отступы), чтобы освободить центральную область под control.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Controls Position Refinement)
### Session Summary
- Донастроено позиционирование controls по обратной связи: кнопка `Назад` смещена к центру, левый control зафиксирован статично.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - header-строка секции переразложена:
    - `Назад` теперь визуально ближе к центру строки (`00/01/02...`), а не на крайнем правом крае;
    - использован балансирующий правый spacer для стабильной центровки кнопки;
  - левый touch scroll-control (`↑`/`↓`) перенесён из внутреннего скролл-контейнера в внешний статичный слой карточки-секции;
  - эффект: control остаётся фиксированным по центру секции и не смещается при прокрутке внутреннего контента.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Static Top/Bottom Section Navigation)
### Session Summary
- По UX-обратной связи `Назад` убран из линии секции и вынесен отдельным статичным блоком под линией; `Далее` вынесен в отдельный статичный блок внизу секции.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - удалена кнопка `Назад` из header-линии `00/01/02...`;
  - добавлен верхний статичный блок навигации под линией с кнопкой `Назад {id} {название}`;
  - добавлен нижний статичный блок навигации с кнопкой `Далее {id} {название}`;
  - кнопки размещены вне внутреннего scroll-контейнера, поэтому не “едут” вместе с внутренним скроллом карточек.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Full Step Navigation to 09/10 + Back Clickability)
### Session Summary
- Сделана финальная доработка мобильной навигации: `Назад` стабильно кликается, а `Далее` расширено до шагов `09` и `10`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен единый список шагов стека: `00..08`, `09 (Частые вопросы)`, `10 (Форма связи)`;
  - `Card` теперь использует предыдущий/следующий шаг из полного списка, поэтому `08` корректно ведёт на `09`;
  - переходы обобщены на диапазон `0..totalSteps-1`, якоря шагов унифицированы (`niche-step-XX`);
  - `FAQCard` (`09`) получил статичные nav-кнопки:
    - `Назад` к `08`,
    - `Далее` к `10`;
  - `FormCard` (`10`) получил статичную `Назад` к `09`;
  - сохранён anchor `#contact` (добавлен внутренний якорь при основном `id="niche-step-10"`).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Up Navigation No-Op Fix)
### Session Summary
- Исправлен кейс, когда при клике `Назад`/`↑` визуально “ничего не происходило”.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - доработан `scrollToNicheStep(...)`:
    - добавлен coarse-scroll к шагу по индексу (`containerTop + index * viewportHeight`),
    - сохранена последующая auto-коррекция к sticky-позиции целевого шага;
  - причина фикса:
    - в sticky-стеке `getBoundingClientRect` для шага выше иногда уже был близок к sticky-offset, что давало `delta ≈ 0` и отсутствие фактического перехода вверх.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Mobile Nav Controls Pack Deployed)
### Session Summary
- После команды `DEPLOY NOW` выкачен пакет мобильной навигации `/gazeta`: статичные `Назад/Далее`, расширение до шагов `09/10`, фиксы перехода вверх.

### Commits
- `08a3a05` — feat(gazeta): finalize static mobile nav controls and full 00-10 step flow

### Technical Notes
- В релиз вошли:
  - перенос `Назад` из линии секции в отдельный статичный верхний блок;
  - статичный нижний блок `Далее {id} {индустрия}`;
  - расширение step-навигации до `09 (FAQ)` и `10 (Форма связи)`;
  - унификация якорей `niche-step-00...10`;
  - фикс no-op кейса на переходе вверх (`coarse-scroll + sticky auto-correction`).
- Проверка перед релизом:
  - `npm run build` — успешно.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после явной команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).

---

## 2026-03-27 (Gazeta Center Floating Scroll Control)
### Session Summary
- Добавлен единый фиксированный пульсирующий scroll-control по центру экрана для более предсказуемого скролла внутри `/gazeta`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен глобальный floating-control (`↑/↓`) в `NichesStack`:
    - `position: fixed` по центру viewport,
    - индикатор текущего шага (`00..10`),
    - `animate-pulse` для визуального акцента;
  - реализована логика управления:
    - вычисление активного шага по scroll-позиции контейнера,
    - `↑/↓` сначала скроллят внутренний `.custom-scrollbar` активной секции,
    - на границах секции выполняется переход между шагами стека через `scrollToNicheStep`;
  - удалены локальные left-controls внутри каждого `Card`, чтобы исключить дубли и рассинхрон.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-27 (Gazeta Left-Center Control + Header Snap-In)
### Session Summary
- По UX-обратной связи плавающий контрол смещён в левую зону, а вход секций ускорен, чтобы заголовки `00/01/...` сразу фиксировались наверху.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - floating-control:
    - позиция изменена с центра экрана на левую зону при сохранении вертикального центра;
    - `z-index` повышен (`z-[200]`) для стабильной кликабельности поверх слоёв контента;
  - анимация входа секций:
    - окно transition сокращено (`entryStart/entryEnd`), чтобы строки `00/01/...` быстро вставали в верхнюю sticky-позицию и не “ползли” по экрану.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-28 (Gazeta Left-Center Control + Snap-In Deployed)
### Session Summary
- После команды `DEPLOY NOW` выкачен пакет UX-правок: перенос floating-control в левую зону и ускоренный snap строк секций.

### Commits
- `2715ebf` — feat(gazeta): move floating control left and speed up section snap

### Technical Notes
- В релиз вошли:
  - fixed floating-control перенесён в левую часть экрана (по вертикальному центру),
  - повышен `z-index` для надежного single-click поведения мышью,
  - сокращено окно входа карточек, чтобы строки `00/01/...` быстро вставали в верхнюю sticky-позицию без длительного “проползания”.
- Проверка перед релизом:
  - `npm run build` — успешно.

### Release Notes
- Статус: `deployed`.
- Деплой: выполнен после явной команды `DEPLOY NOW` (push `main` -> Vercel auto deploy).

---

## 2026-03-28 (Gazeta Mobile Horizontal Rail + 4-Way Joystick)
### Session Summary
- Для мобильной версии `/gazeta` карточки внутри секций переведены на горизонтальную прокрутку, а floating-control расширен до 4 направлений.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - в мобильном режиме включён horizontal rail карточек (`overflow-x-auto`, `snap-x`) вместо вертикального внутреннего скролла;
  - карточкам добавлены мобильные rail-ширины (`w-[76vw]` portrait, `w-[44vw]` landscape) для свайпа слева-направо;
  - добавлен атрибут `data-services-rail="true"` для точечного управления текущей лентой;
  - floating-control обновлён с `↑/↓` до джойстика `↑ ↓ ← →`;
  - `←/→` прокручивают rail активной секции, `↑/↓` сохраняют переходы по шагам вверх/вниз (и inner-scroll там, где применимо);
  - вертикальный inner-scroll отключается только в мобильном режиме horizontal rail, desktop логика не изменена.
- Проверка:
  - `npm run build` — успешно.
  - локал доступен по `http://127.0.0.1:3099/gazeta`.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-28 (Gazeta Mobile UX v2: Slim Vertical Control + Side Card Arrows)
### Session Summary
- По обратной связи убран 4-way floating joystick; мобильный UX переработан под тонкий вертикальный control и боковые стрелки прямо у карточек.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - floating-control:
    - удалён формат `↑ ↓ ← →`,
    - добавлен тонкий левый вертикальный control с отдельными `↑/↓` и линейными разделителями;
  - карточки в mobile:
    - сохранена горизонтальная rail-логика (`overflow-x`, `snap-x`),
    - добавлены локальные кнопки `←/→` по бокам rails в каждой секции (эффект “выбора карточек”);
    - пересобраны размеры карточек под видимость ~2 карточек в кадре;
  - стек секций:
    - добавлен mobile preview-offset к `stickyHeight`, чтобы внизу кадра оставалась видимой следующая строка секции (`00/01/02...`).
- Проверка:
  - `npm run build` — успешно.
  - локал доступен по `http://127.0.0.1:3099/gazeta`.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-28 (Gazeta Section 00 Mobile Card Width Fix)
### Session Summary
- Исправлен mobile-баг секции `00` (аэросъёмка), где карточки сжимались и отображались почти все сразу вместо двух.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - ширина мобильной карточки закреплена на уровне `article` (`servicePageParityCardClassName`), а не через debug-wrapper;
  - это выровняло поведение секции `00` с остальными секциями независимо от debug-обёртки;
  - карточки в mobile теперь следуют целевому формату: ~2 карточки в кадре + горизонтальное перелистывание.
- Проверка:
  - `npm run build` — успешно.
  - локал доступен по `http://127.0.0.1:3099/gazeta`.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-28 (Gazeta Mobile Width Parity v2 + Aerial Mid-Zone Rail)
### Session Summary
- После дополнительной проверки исправлена системная причина разной ширины карточек между `00` и `01..08`; для `00` добавлено смещение rail к средней зоне экрана.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - `MaybeDebugWrapper`:
    - при `enabled=false` и `className` теперь возвращает `<div className={className}>...</div>` вместо `fragment`, чтобы не терять layout-классы;
  - карточки mobile rails:
    - ширина карточки снова задаётся на wrapper (`cardGridClassName`), а `article` получает `w-full`;
    - это выравнивает поведение всех секций, включая `00`, в формат ~2 карточки в кадре;
  - секция `00`:
    - добавлен mobile offset (`mt-[8vh]` landscape / `mt-[12vh]` portrait) для расположения rails ближе к середине экрана.
- Проверка:
  - `npm run build` — успешно.
  - `curl -I http://192.168.1.7:3099/gazeta` — `200 OK`.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 00: Remove Intro Copy + Tighten Text/Card Spacing)
### Session Summary
- По запросу удалён лишний текст в секции `0.0` и уменьшен вертикальный разрыв между текстом и карточками для выравнивания с `0.1/0.2`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - в `niches[00].detailedContent` удалено поле `introNote` с фразой про “10 форматов съёмки”;
  - в `Card` для aerial секции уменьшен отступ `headingBlockClassName` (`mb-*`) до более компактного значения;
  - удалён дополнительный `mobileAerialRailOffsetClassName` из контейнера rail, который создавал лишний зазор.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile Experiment A/B/C/D by Section)
### Session Summary
- Добавлен мобильный эксперимент из 4 разных layout-вариантов карточек по секциям `00..03` в одном файле, без изменения desktop поведения.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен тип и маппинг вариантов:
    - `MobileCardsLayoutVariant`
    - `mobileCardsVariantByNicheId = {00:A, 01:B, 02:C, 03:D}`;
  - mobile-only switch в `Card`:
    - variant booleans (`isVariantA/B/C/D`),
    - variant-specific rail container classes,
    - variant-specific card width presets, image heights, description density;
  - variant `D`:
    - добавлен text-only orientation block (карточек N + список названий + swipe cue);
  - left vertical floating control:
    - отключён в mobile для эксперимента (desktop untouched).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile Winner Standardized Globally)
### Session Summary
- Победивший mobile layout (ранее на секции `01->02`) применён как единый стандарт для всех индустриальных секций `/gazeta`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - удалены variant-specific A/C/D ветки из mobile rails/card presentation;
  - mobile rails/card sizing/spacing унифицированы по паттерну `01->02`:
    - 2 видимые карточки + partial third cue,
    - horizontal rail + snap, боковые стрелки сохранены;
  - desktop ветка не менялась;
  - links/titles/prices/CTAs/service mapping/order не менялись;
  - left mobile floating vertical control остаётся скрытым.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta: Remove Duplicate Industry Headings Inside Sections)
### Session Summary
- Убраны дубли названий индустрий внутри блоков секций `/gazeta`, которые повторяли строку `00/01/02...`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлена нормализация заголовков (`normalizeIndustryHeading`) и проверка дубля (`isDuplicateIndustryHeading`);
  - внутренний `h2` (`niche.detailedContent.heading`) рендерится только если не дублирует `niche.title`;
  - покрыт кейс с префиксом `УСЛУГИ` и различием регистра/`ё` (`УСЛУГИ АЭРОСЪЁМКИ` == `АЭРОСЪЁМКА`).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 00: Hide Eyebrow + Inner Heading)
### Session Summary
- По запросу скрыты две текстовые строки внутри секции `00` (`Аэросъёмка`), которые занимали лишнее место.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен флаг `shouldRenderDetailedEyebrow` и условие на `shouldRenderDetailedHeading` для секции `00`;
  - в `00` не рендерятся:
    - `Тбилиси • Батуми • Вся Грузия` (`eyebrow`),
    - `УСЛУГИ АЭРОСЪЁМКИ` (`detailedContent.heading`);
  - секции `01..08` не затронуты.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile: Raise Bottom Next Button Above Browser UI)
### Session Summary
- Нижняя кнопка `Далее` на мобильной версии поднята выше, чтобы не перекрываться нижней навигацией браузера.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен `bottomStaticNavOffsetClassName` для mobile `portrait/landscape`;
  - нижний отступ теперь учитывает `safe area`:
    - portrait: `bottom-[calc(env(safe-area-inset-bottom,0px)+6.25rem)]`,
    - landscape: `bottom-[calc(env(safe-area-inset-bottom,0px)+4.25rem)]`;
  - блок кнопки `Далее` переведён на новый offset-класс.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile: Static Global Next Button + Lifted Inner Content)
### Session Summary
- Кнопка `Далее` стабилизирована в одной позиции (fixed), а контент внутри mobile-подстраниц поднят выше, чтобы карточки не конфликтовали с нижней навигацией.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - в `Card` удалена локальная нижняя `Далее` (absolute внутри каждой секции);
  - на уровне `NichesStack` добавлена единая `fixed` mobile-кнопка:
    - берёт `activeStepIndex`,
    - показывает `activeStepIndex + 1`,
    - вызывает `scrollToNicheStep(activeStepIndex + 1)`;
  - для мобильного контента добавлен подъём отступов в подстраницах:
    - landscape: `pt-14 pb-14`,
    - portrait: `pt-16 pb-20`;
  - это поднимает текст и rails карточек выше и уменьшает пересечение с зоной кнопки.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile Nav: Unique Button IDs)
### Session Summary
- Для удобной коммуникации и точечной отладки добавлены уникальные номера для кнопок `Назад/Далее`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен helper `getBackButtonUiId(nicheId)`:
    - back-кнопки получают `data-ui-id` в формате `91{nicheId}` (`9100..9108`);
  - добавлена константа `GLOBAL_NEXT_BUTTON_UI_ID = "9200"`:
    - глобальная fixed-кнопка `Далее` получает `data-ui-id="9200"`;
  - для обеих кнопок добавлены `data-ui-name`:
    - `GAZETA_BACK_<id>`,
    - `GAZETA_NEXT_9200`.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta Mobile Nav: Visible #ID Badges on Back/Next Buttons)
### Session Summary
- Технические номера кнопок сделаны видимыми на UI: добавлены ярлычки `#xxxx` прямо на кнопки `Назад` и `Далее`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен компонент `UiIdBadge`;
  - для верхней кнопки `Назад` в секциях добавлен видимый бейдж `#91xx`;
  - для глобальной фиксированной кнопки `Далее` добавлен видимый бейдж `#9200`;
  - `data-ui-id` и `data-ui-name` сохранены для стабильной адресации.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01 Mobile Spacing Tune + 9200 Bottom Reposition)
### Session Summary
- На примере `01 Недвижимость` подтянуты вертикальные отступы (верхний блок и карточки), а кнопка `#9200` опущена ближе к нижней safe-area линии.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен флаг `isRealEstateScreen` (`niche.id === "01"`);
  - для `01` уменьшены верхние/межблочные отступы:
    - `headingBlockClassName` для `01`: более компактные `mt/mb`,
    - `mobileContentPaddingOverrideClassName` для `01`: `pt-10/pt-12` (landscape/portrait),
    - `mobileRailShellClassName` для `01`: лёгкий отрицательный `margin-top` для приближения карточек к тексту;
  - позиция глобальной fixed-кнопки `#9200`:
    - landscape: `bottom-[calc(env(safe-area-inset-bottom,0px)+0.9rem)]`,
    - portrait: `bottom-[calc(env(safe-area-inset-bottom,0px)+1.15rem)]`.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Card Prototype for 8412/8413 + 2-Card Rail)
### Session Summary
- В секции `01` реализован тестовый компактный шаблон карточек на `#8412` и `#8413` с целью унификации высоты, плюс rail настроен на показ ровно двух карточек без видимого хвоста третьей.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен helper `clampLinesStyle` для строгого line-clamp по месту;
  - только для `niche.id === "01"`:
    - rail container/shell перестроены под 2 карточки в viewport (без partial 3rd);
    - боковые стрелки сдвинуты в боковые зоны и выше по вертикали, чтобы не перекрывать текст;
  - только для карточек `serviceId === 8412 || 8413`:
    - уменьшены image/body/button размеры;
    - заголовок/категория/описание ограничены по строкам (2/3/3);
    - для `#8412` добавлен принудительный split title на 2 строки;
    - price-line упакована в компактный жёлтый chip вместо длинного пустого блока;
    - для `#8413` добавлен отдельный контрастный визуальный акцент (box-shadow).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Edge Arrows + Wider Cards + 2-Line Yellow Chips)
### Session Summary
- Для теста в секции `01` стрелки вынесены ближе к краям, карточки слегка расширены, а жёлтые блоки у `#8412/#8413` ужаты до 2 строк.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - mobile rail для `01`:
    - уменьшены боковые отступы shell (`px-3/px-4`) и gap (`gap-1.5`) для расширения карточек;
    - формула ширины карточки для `01` обновлена: `calc((100% - 0.375rem) / 2)`;
    - стрелки сдвинуты к краям (`-left-3`, `-right-3`);
  - стрелки `01`:
    - заменены на `motion.button` с цикличной анимацией `opacity/scale`;
  - карточки `#8412/#8413`:
    - price-chip теперь поддерживает перенос в 2 строки (`replace(" · ", "\n") + clampLinesStyle(2)`).
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Extra Edge Shift for Arrows + Remove “Context” in Chip)
### Session Summary
- По дополнительному запросу стрелки раздвинуты ещё дальше к краям, а в жёлтом chip удалено слово `Context`, чтобы формат был аккуратнее в 2 строки.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - для `01`:
    - arrow offsets обновлены:
      - portrait: `-left-6`, `-right-6`,
      - landscape: `-left-5`, `-right-5`;
  - для prototype-карточек `#8412/#8413`:
    - в price-string удаляется `GEO Context` -> `GEO`,
    - удаляется `контекст` (если встречается),
    - затем применяется перенос в 2-строчный chip.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Increase 8412 Inner Scale to Use Bottom Space)
### Session Summary
- Для карточки `#8412` увеличен внутренний scale (текст и блоки), чтобы карточка стала чуть выше и использовала нижний запас пространства.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - только для `serviceId === 8412`:
    - увеличены image-height значения;
    - увеличены text-size и spacing для title/category/description;
    - увеличен размер price-chip и CTA-кнопок (`Подробнее` / `Заказать`).
  - `#8413` этим изменением не затронута.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Reduce 8412 Yellow Chip by ~15%)
### Session Summary
- По запросу слегка уменьшен жёлтый блок в `#8412`, чтобы чуть сократить высоту карточки снизу при сохранении читаемости.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - только для `serviceId === 8412` в `servicePagePriceClassName`:
    - уменьшены paddings (`px/py`),
    - уменьшен font-size (`portrait` и `landscape`),
    - уменьшен `mb`;
  - визуальная цель: примерно `-15%` размера chip и около `-3%` общей высоты карточки снизу.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Price Chip Rule Locked to Phone-Only for 8412/8413)
### Session Summary
- Зафиксировано правило: двухстрочный price-chip для `#8412/#8413` действует только на телефонах; планшет/desktop — всегда однострочно.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен локальный viewport-detector в `Card`:
    - `isPhoneViewport = (innerWidth <= 640) || (innerHeight <= 520)`;
  - для prototype-карточек `#8412/#8413`:
    - перенос ` · ` в `\n` и `clampLinesStyle(2)` включаются только при `isPhoneViewport`;
    - на non-phone принудительно `whitespace-nowrap` и однострочный chip.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: 8412 Price Block Back to Thin-Line Style)
### Session Summary
- Для карточки `#8412` price-блок возвращён к стилю “тонкая линия + жёлтый текст” без жёлтой плашки.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - только для `serviceId === 8412` обновлён `servicePagePriceClassName`:
    - удалены фон и рамка chip-стиля,
    - добавлен `border-t border-[#2a2a2a]`,
    - оставлен жёлтый текст (`#F2C94C`) в price-зоне;
  - `#8413` не изменялась этим шагом.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-29 (Gazeta 01: Unified 8410..8415 Card System)
### Session Summary
- По запросу карточки `8410..8415` в `01 Недвижимость` унифицированы по внешнему виду и высоте; в `8410/8411` добавлена нижняя price-линия как у `8412`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - введён единый флаг `isRealEstateReferenceCard` для диапазона `8410..8415`;
  - все карточки в диапазоне получили общие размеры (включая фиксированную высоту на mobile, единые text/cta размеры);
  - `isRealEstatePriceEnabledCard` применяется для `8410..8414`:
    - тонкая разделительная линия сверху + жёлтый price-текст без chip-фона;
  - для `8415` (`Все услуги`) добавлен невидимый spacer в зоне price-линии для равной высоты;
  - сохранено правило переноса price-текста:
    - phone: 2 строки,
    - tablet/desktop: 1 строка.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-30 (Gazeta 01: Typography Fill Test for 8412/8413)
### Session Summary
- Для снижения тёмного пустого промежутка перед price-блоком усилена типографика верхних 3 блоков отдельно в `#8412` и `#8413`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлены точечные условия:
    - `isRealEstateCard8412` (`serviceId === 8412`),
    - `isRealEstateCard8413` (`serviceId === 8413`);
  - для `#8412`:
    - title/category/description увеличены примерно на ~15%;
  - для `#8413`:
    - title/category/description увеличены примерно на ~10%;
  - внешний размер карточек не менялся; изменена только внутренняя плотность текста.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-30 (Gazeta 01: +10% More for 8412 and No Description Truncation for 8412/8413)
### Session Summary
- По уточнению увеличена типографика в `#8412` ещё на ~10%, а обрезание 3-го блока в `#8412/#8413` отключено.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен флаг `shouldUnclampDescription` для `8412/8413`;
  - `#8412`: дополнительно увеличены размеры:
    - title (`text-[16.5px] sm:text-[18.5px]`),
    - category (`text-[11.5px]`),
    - description (`text-[13.5px]`);
  - `#8412/#8413`: снят `clampLinesStyle(3)` с description, поэтому текст не обрезается `...`.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-30 (Gazeta 01: 8412 Description -10% to Fix Cropped Feel)
### Session Summary
- По новому фидбеку уменьшен 3-й текстовый блок в карточке `#8412`, чтобы убрать эффект “обрезания” и выровнять визуальный размер с соседними карточками.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - для `isRealEstateCard8412` обновлён класс описания:
    - `text-[13.5px]` → `text-[12px]` (примерно -10%),
    - `leading-[1.25]` → `leading-[1.22]`.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-30 (Gazeta 01: Unified 8410..8415 to 8412 Typography + Common Bottom Spacer)
### Session Summary
- По запросу все карточки в подстранице `01 Недвижимость` (`8410..8415`) приведены к единому виду по образцу `#8412`: одинаковая типографика, одинаковая карточка и единый нижний отступ.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - удалены отдельные исключения по `#8412/#8413` для title/category/description;
  - для всех `isRealEstateReferenceCard` (`8410..8415`) установлены единые размеры:
    - title: `text-[16.5px] sm:text-[18.5px]`,
    - category: `text-[11.5px]`,
    - description: `text-[12px] leading-[1.22]`;
  - для описания у `8410..8415` применён единый clamp (`3` строки), чтобы карточки держали одинаковый ритм;
  - добавлен общий `servicePageBottomSpacerClassName` (чёрный нижний отступ) для всех `8410..8415`, чтобы нивелировать разницу длины текста и сохранить одинаковый визуальный размер карточек.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-30 (Gazeta 01: Single-CTA Test on 8412/8411/8410)
### Session Summary
- Для теста визуальной и стратегической читаемости заменён двухкнопочный CTA-блок на single-CTA в трёх карточках секции `01 Недвижимость`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `components/gazeta/NichesStack.tsx`:
  - добавлен точечный single-CTA switch по `serviceId`:
    - `8412` → `Смотреть примеры`,
    - `8411` → `Узнать стоимость`,
    - `8410` → `Посмотреть услугу`;
  - для этих карточек:
    - убран двухкнопочный блок (`Подробнее` + `Заказать`),
    - рендерится одна primary-кнопка в текущем карточном стиле;
  - link-логика в тесте:
    - `8411` → `#contact`,
    - `8412`/`8410` → `svc.link` (с поддержкой internal/external перехода);
  - остальные карточки и структура карточки не затронуты.
- Проверка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-31 (Trust-Lowering Phrases Removal)
### Session Summary
- Удалены фразы "кейсы появятся / портфолио наполняется / честный placeholder" из трёх страниц сервиса недвижимости и 360-туров.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `app/drone-real-estate/page.tsx`:
  - удалён `<p>` "Реальные кейсы Breus Media для этой страницы появятся..." (секция `#381200 Social Proof`, подзаголовок);
  - удалён `<p>` "Реальные кейсы Breus Media появятся после первых проектов..." (хвост секции `#381200`);
  - закомментирован целиком блок `<div id="examples">` / `DebugWrapper #381500 Portfolio Section` ("Портфолио наполняется", "честный placeholder").
- `app/360-tour-real-estate/page.tsx`:
  - закомментирован целиком блок `<div id="examples">` / `DebugWrapper #360500 Tour Examples Section` ("Реальные кейсы появятся после первых съёмок в Тбилиси").
- `app/360-tour-restaurants/page.tsx`:
  - совпадений не найдено, файл не изменялся.
- Проверка:
  - `npm run build` — успешно (81/81 страниц, без ошибок).

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-31 (CTA Audit: Real Estate + Drone Service Pages)
### Session Summary
- По запросу выполнена проверка карточек услуг на страницах `real-estate-service` и `drone-service` на предмет двух кнопок `Подробнее` + `Заказать`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- Проверены:
  - `app/real-estate-service/page.tsx`
  - `app/drone-service/page.tsx`
- Установлено, что сервисные карточки этих страниц рендерятся через:
  - `components/real-estate-service/RealEstateServicesStitch.tsx`
  - `components/drone/DroneServicesStitch.tsx`
- В обоих stitch-компонентах удалена кнопка `Заказать` из карточек услуг:
  - `RealEstateServicesStitch`: удалён `<a href="#contact">Заказать</a>`;
  - `DroneServicesStitch`: удалён `<a href="#contact">Заказать</a>`;
- В карточках оставлена одна кнопка `Подробнее` (ссылка на страницу услуги).
- Дополнительно выполнена сборка:
  - `npm run build` — успешно.

### Release Notes
- Статус: `verified local`.
- Деплой: не выполнялся (по явному требованию не деплоить).

---

## 2026-03-31 (Service Images Workflow Added)
### Session Summary
- Введён новый workflow для service images с корневой структурой `/services-images`.
- Добавлены сервисные папки и `SERVICE_IMAGE_PLAN.md` как стандарт процесса подготовки image sets.
- Полные правила и usage-логика зафиксированы в `CONTEXT_NEXT_CHAT.md`.

### Commits
- `N/A` — обновлены project memory файлы (`CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`).

### Release Notes
- Статус: `documentation updated`.

---

## 2026-03-31 (Noindex for Draft Pages + Remove Заказать CTA)
### Session Summary
- Добавлен `robots: noindex, nofollow` для страницы `/real-estate-2` через `layout.tsx`.
- Убрана кнопка `Заказать` с карточек услуг на `/real-estate-service` и `/drone-service`.

### Commits
- `N/A` — изменения подготовлены локально (без деплоя).

### Technical Notes
- `app/real-estate-2/layout.tsx` — создан новый файл:
  - `export const metadata: Metadata = { robots: 'noindex, nofollow' }`;
  - `page.tsx` в этой директории — `"use client"`, metadata в нём не может быть, поэтому используется `layout.tsx`.
- `app/dronetest/` и `app/test-docking/` — директории не существуют, пропущены.
- `components/real-estate-service/RealEstateServicesStitch.tsx`:
  - удалена `<a href="#contact">Заказать</a>` из CTA-блока карточек.
- `components/drone/DroneServicesStitch.tsx`:
  - то же самое.
- Проверка:
  - `npm run build` — успешно (81/81 страниц, без ошибок).

### Release Notes
- Статус: `local ready`.
- Деплой: не выполнялся (ожидается явная команда `DEPLOY NOW`).

---

## 2026-03-31 (Deploy: trust-lowering cleanup + CTA + noindex)
### Session Summary
- Задеплоены все изменения сессии 31.03.2026: удалены placeholder-блоки, кнопка Заказать, добавлен noindex.

### Commits
- `70065ab` — `fix: remove trust-lowering placeholders, Заказать CTA, add noindex for drafts`

### Technical Notes
- Деплой: `npx vercel --prod` → Vercel production.
- Deployment ID: `dpl_9QGsQx1hpE3D5Uvx1rScHuSgeZxS`
- Статус: `READY`

### Release Notes
- Статус: `deployed`.
- Live: https://breus-media-v2.vercel.app

---

## 2026-03-31 (Deploy Sync: 29–31 March Commits)
### Session Summary
- Синхронизирована документация с фактическим состоянием `main`: ключевые правки 29–31 марта отмечены как реально задеплоенные.

### Commits
- `add7f74` — `fix(gazeta): unify real estate mobile cards to 8412 baseline`
- `70065ab` — `fix: remove trust-lowering placeholders, Заказать CTA, add noindex for drafts`

### Release Notes
- `add7f74` — status: `deployed`.
- `70065ab` — status: `deployed`.

---

## 2026-03-31 (Doc Sync + Batch 1-3 Deployed)
- Синхронизированы CONTEXT и CHANGELOG с реальным git-состоянием.
- Батч 1: trust-фразы убраны (`drone-real-estate`, `360-tour-real-estate`).
- Батч 2: двойные кнопки убраны (`RealEstateServicesStitch`, `DroneServicesStitch`).
- Батч 3: noindex на черновых страницах.
- Все три батча в коммите `70065ab`, задеплоены.

---

## 2026-03-31 (Page Cleanup: 360 Tour + Construction Monitoring + Object Inspection)
### Session Summary
- Выполнен page-family cleanup в режиме package truth-check + CTA stabilization + content layering для:
  - `/360-tour-real-estate`
  - `/drone-construction-monitoring`
  - `/drone-object-inspection`
- Подход: не редизайн, а rephrase / move-lower / boundary clarification / CORE vs PREMIUM разделение.

### Technical Notes
- `360-tour-real-estate`:
  - hosting/storage сохранены как тема, но переведены в support-формат по согласованию срока и условий;
  - жёсткие формулировки (“без доплат/скрытых подписок/на наших серверах”) заменены на мягкие и операционно реалистичные.
- `drone-construction-monitoring`:
  - deliverables и pricing разделены на `CORE` и `PREMIUM / ADD-ON`;
  - investor/bank-ready слой (брендированный PDF, архив по ссылке, monthly timelapse, ZIP, executive summary) перенесён в расширенный пакет;
  - app-based и advanced automation зафиксированы как `future capability` (manual roadmap), не как default promise.
- `drone-object-inspection`:
  - добавлена явная граница: visual inspection/documentation support, без инженерной сертификации по умолчанию;
  - outputs разделены на `CORE` и `PREMIUM / ADD-ON`;
  - верх страницы упрощён через отдельный flow-блок: задача → как это работает → что получает клиент → CTA.
- Проверка:
  - `npm run build` — успешно (81/81 страниц).

### Release Notes
- Статус: `local ready` (без деплоя в этой сессии).

---

## 2026-03-31 (Batch 2 Cleanup: Reels Real Estate + Promo Real Estate + AI Real Estate)
### Session Summary
- Выполнен Batch 2 cleanup для:
  - `/reels-promo/reels-real-estate`
  - `/promo-video/promo-real-estate`
  - `/ai-visual/ai-real-estate`
- Подход: content layering без редизайна с нуля и без массового удаления deep-контента.

### Technical Notes
- На всех трёх страницах:
  - сохранён rich слой (SEO/GEO/AEO/AI-search-supporting), но переразложен по приоритету чтения;
  - добавлены ранние entry-блоки для быстрого перехода к пакетам/контакту;
  - deep-секции переведены в collapsible (`details/accordion`) для снижения визуального шума:
    - частые ошибки,
    - расширенные long-tail ответы,
    - мифы и реальность,
    - мини-словарь терминов;
  - снижено дублирование смыслов в верхнем слое без потери полезного текста.
- Проверка:
  - `npm run build` — успешно (81/81 страниц).

### Release Notes
- Статус: `local ready` (без деплоя в этой сессии).

---

## 2026-03-31 (Batch 3 Cleanup: L2 Hub Clarity + Route Sanity)
### Session Summary
- Выполнен Batch 3 cleanup для L2-хабов:
  - `/real-estate-service`
  - `/drone-service`
  - `/tourism-service`
  - `/hotels-service`
  - `/restaurants-service`
- Фокус: ускорить путь выбора услуги, снизить верхний шум и стабилизировать CTA/route flow без редизайна.

### Technical Notes
- Обновлены:
  - `app/real-estate-service/page.tsx`
  - `app/drone-service/page.tsx`
  - `components/l2-direction/L2DirectionRenderer.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
  - `components/real-estate-service/RealEstateHeroStitch.tsx`
  - `components/drone/DroneHeroStitch.tsx`
- Что сделано:
  - блок `services` поднят сразу после hero на L2 hub flow;
  - в `SmartHeader` добавлен быстрый якорь `Услуги` (`#services`);
  - secondary CTA в hero переведён из раннего `Заказать` в `Подобрать услугу` с переходом к `#services`;
  - CTA в L2 service cards смещён в пользу перехода на страницу услуги (`Открыть услугу`) с более мягким вторичным contact-шага (`Подобрать пакет`);
  - минимальная высота hero уменьшена (`700px -> 620px`) для более раннего появления сервисных карточек;
  - на `/drone-service` hero-стрелка ведёт к `#services`, а не к social proof.
- Проверка:
  - `npm run build` — успешно (81/81 страниц).

### Release Notes
- Статус: `local ready` (без деплоя в этой сессии).

---

## 2026-03-31 (Batch 4 Audit: Visual Consistency + Legacy Junk Sweep)
### Session Summary
- Выполнен cross-page consistency sweep по активному слою сайта:
  - `/gazeta`,
  - активные L2 hubs,
  - репрезентативные L3 (drone / 360 / reels / promo / AI / inspection-monitoring).
- Подход: cleanup-oriented аудит без редизайна и без mass deletion.

### Technical Notes
- Создан итоговый аудит-файл:
  - `BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP.md`
- В отчёте зафиксированы группы проблем:
  - shared component leftovers (`Coverage v1`, `Шаблонный L2 блок`, `Google Presence`, internal labels),
  - CTA consistency drift,
  - anchor consistency drift,
  - visible legacy wording/junk (`CTA №1`, `L3 Услуга`, placeholder copy),
  - route-sanity хвосты в части drone related links.
- Сформирован первый implementation plan (Batch 4A/4B/4C) для точечной стабилизации без полной переработки страниц.

### Release Notes
- Статус: `audit complete / local docs update`.
- Деплой: не выполнялся.

---

## 2026-03-31 (Route Fix Batch: P0/P1 Route Sanity)
### Session Summary
- Выполнен Route Fix Batch по приоритету P0 -> P1 для route safety и hub integrity.
- Без редизайна страниц: только route-логика, redirects, mapping и crawl hygiene.

### Technical Notes
- P0 (route safety):
  - `/real-estate` переведён на server redirect -> `/real-estate-service`.
  - `/real-estate-3` переведён на server redirect -> `/real-estate-service`.
  - `/drone-service/monitoring-stroiki` переведён на server redirect -> `/drone-construction-monitoring`.
  - удалены активные входы в legacy `monitoring-stroiki`:
    - `constants/gazetaRoutes.ts` (`monitoringStroiki` теперь `/drone-construction-monitoring`);
    - `app/drone-real-estate/page.tsx` (related service href обновлён).
- P1 (route logic / hub integrity):
  - исправлен дублирующий mapping ниш в `gazetaNicheLandingRoutes`:
    - `07` -> `/gazeta/it`,
    - `08` -> `/business-service`.
  - `gazetaDetailRoutes.realEstate` переключён с `/gazeta/real-estate` на `/real-estate-service`.
  - `/360-tour-commercial-real-estate` оставлен как secondary/supporting и помечен `robots: noindex, nofollow`.
- Проверка:
  - `npm run build` — успешно (81/81 страниц).

### Release Notes
- Статус: `local ready` (без деплоя в этой сессии).

---

## 2026-03-31 (Batch 4A: Shared Wording + CTA + Anchor Normalization)
### Session Summary
- Реализован Batch 4A без редизайна: точечная очистка shared-visible слоя и унификация CTA/anchors на активных семействах страниц.

### Technical Notes
- Shared legacy wording cleanup:
  - `constants/l2DirectionConfigs.ts`
  - `constants/droneDirectionPages.ts`
  - удалены/заменены: `Coverage v1`, `Google Presence`, `Шаблонный L2 блок`, internal labels вида `Категория ...`/`L2-страница ...`.
- CTA normalization:
  - `components/l2-direction/L2DirectionRenderer.tsx` (`Пакеты` -> `#pricing`);
  - `components/l2-direction/L2DirectionSections.tsx` (hero CTA `Открыть услугу`);
  - `components/gazeta/NichesStack.tsx` (унификация CTA `Открыть услугу`, secondary `Обсудить задачу`).
- Visible legacy remnants cleanup:
  - `components/360-tour-*/TourHero.tsx` (`Смотреть демо` -> `Смотреть примеры`, удалён `L3 Услуга`);
  - `app/reels-promo/reels-real-estate/page.tsx` (убраны `CTA №1/CTA №2`, очищены placeholder-style заголовки).
- Anchor normalization across active families:
  - `app/reels-promo/*`, `app/ai-visual/*`, `app/ai-content/*`:
    - `#packages` -> `#pricing` (header links, inline links, section id).
- Verification:
  - выполнена проверка через `rg` и `git diff`;
  - `npm run build` в этой сессии не запускался.

### Release Notes
- Статус: `local ready` (без деплоя в этой сессии).

---

---

## 2026-04-01 — Analytics & Tracking Readiness Audit
#### Session Summary
- Проведён полный аудит состояния аналитики перед soft launch.
- Ключевые находки:
  - В codebase **ноль** tracking-кода (0 вхождений gtag/GTM/Metrika/pixel/etc. по всем tsx/ts файлам).
  - `app/layout.tsx` (14 строк) — чистый, без каких-либо Script-тегов аналитики.
  - `FinalFormSection.tsx:58` — форма делает `e.preventDefault()` и ничего более: **нет бэкенда, нет API-вызова**. Единственная реальная конверсия на сайте — WhatsApp-ссылка `wa.me/995574619393` (строка 150).
  - 13+ CTA-компонентов (DroneStickyCta ×7, TourStickyCta ×8, MidCta, FinalFormSection) — все без onClick-трекинга.
- Составлен план минимального pre-launch трекинга: 2 файла, ~10 строк.
- Документ: `BREUS_MEDIA_ANALYTICS_READINESS_AUDIT.md`

#### Commits
- (doc-only сессия, без изменений кода)

#### Technical Notes
- Приоритеты трекинга (порядок):
  1. GA4 Script в `app/layout.tsx` (env: `NEXT_PUBLIC_GA_ID`)
  2. `whatsapp_click` event — onClick на `wa.me` link в FinalFormSection
  3. `form_submit_attempt` event — onClick на submit button в FinalFormSection
- Post-launch (можно подождать): sticky CTA clicks, MidCta clicks, Metrika/Clarity, форма с реальным бэкендом.

#### Release Notes
- Статус: docs only, no code changes, no deploy.

---

---

## 2026-04-01 — Card & Pricing Consistency Audit
#### Session Summary
- Проведён полный аудит карточек и ценообразования по 10 активным L2 хабам (`l2DirectionConfigs.ts`), `/gazeta` NichesStack и `/real-estate-service`.
- Ключевые находки:
  - **11 карточек без primaryHref** — пользователь не может перейти к L3 услуге; 5 из них в `businessService` (хаб практически полностью отвязан от L3).
  - **2 неверных href**: `clinicsService.ai-upakovka-kontenta` → `/ai-content/hotel-ai-descriptions` (неверная семья); `clinicsService.kontent-esteticheskih-uslug` → дублирует href card 3.
  - **Ценовые несоответствия**: `businessService` 360° карточка = 550 ₾ vs 500 ₾ везде; рестораны reels = 350 ₾ vs 450 ₾ везде; `autoService` featured plan = 600 ₾ (нечётное между 550/650).
  - **CTA label**: только `clinicsService` и `promoVideoService` имеют `primaryCtaLabel: 'Открыть услугу'` — неравномерно проставлено внутри этих же семей.
  - **Смешанный ценовой формат**: `reelsService` card 8 vs cards 1–7; `aiVisualizationService` cards 8–9 vs остальных 7.
  - **Эталонные семьи**: `tours360Service` (7/7 с href, единый формат), `hotelsService` (чистая структура).
- Документ: `BREUS_MEDIA_CARD_AND_PRICING_CONSISTENCY_AUDIT.md`

#### Commits
- (doc-only сессия, без изменений кода)

#### Technical Notes
- Все нарушения — только в данных `constants/l2DirectionConfigs.ts`, компоненты стабильны.
- Исправления разбиты на батчи: Batch A (2 неверных href) → Batch B (AI Content hrefs) → Batch C (businessService, требует новых L3) → Batch D (3 ценовых правки).
- Новые L3 для полной связности: `/promo-video/promo-business`, `/reels-promo/reels-business`.

#### Release Notes
- Статус: docs only, no code changes, no deploy.

---

## Шаблон новой записи (копировать в конец файла)
### YYYY-MM-DD
#### Session Summary
- ...

#### Commits
- `<sha>` — <message>

#### Technical Notes
- ...

#### Release Notes
- Статус: local only / deployed
- Проверка: ...
