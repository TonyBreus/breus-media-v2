✅ Deployed Headless Operations Hub: Supabase PostgreSQL + Realtime Kanban (`/kanban`) + Telegram Voice Bot (`@morningtalkgemini_bot`) powered by Groq Whisper-large-v3-turbo STT and Qwen 27B Assistant. Resolved ephemeral serverless storage constraint by migrating from local JSON to Supabase `kanban_events` table. Added interactive 4-column kanban board with instant 5-takeaway caching and Google Docs deep links. Telegram webhook receives voice notes, transcribes in <300ms, and parses natural language task queries ("какие задачи сегодня") or conversational status requests. All credentials provisioned on Vercel production across Production, Preview, and Development environments (2026-09-11)
✅ Executed master "Прожарка 3.0" audit & v3.0 upgrade for `/gazeta` L1 landing: (1) Restored missing FAQ in mobile DOM via new shared `GazetaFaqSection.tsx` (6 core B2B Q&As in RU/EN) and synchronized with JSON-LD FAQPage Schema in `app/gazeta/page.tsx` & `/en/page.tsx`; (2) Fixed broken L1 ➔ L2 navigation inside `MultiStepServiceDrawer.tsx` adding prominent L2 Hub buttons (e.g., `/drone-service`, `/360-tours-service`, etc.) to both Slide 1 and Slide 2; (3) Added starting price badges (`от 250 ₾`, etc.) directly on mobile 6×6 photos in `GazetaMobileStepChooser.tsx` solving the 50yo business owner price transparency objection; (4) Added 100% server-rendered semantic SSR catalog container (`<section className="sr-only">`) in `GazetaLandingPage.tsx` with all 12 services/industries, sub-formats, prices, and L2/L3 links for SearchGPT/Googlebot crawler readiness; (5) Fixed `#faq` target detection in `SmartHeader.tsx` to smoothly scroll to visible mobile/desktop elements; (6) Verified full Next.js 16 build passing 111/111 pages prerendered with 0 errors (2026-09-05)
✅ Released [DRONE-V3.0] synthesis: added interactive niche category filter chips (Все 17 / Недвижимость 5 / HoReCa 3 / Инспекции 5 / Промо 4) eliminating 18-card scroll fatigue while preserving 100% SSR in DOM, mobile segmented plan switcher with one-tap plan focus, dense entity-rich B2B Answer Capsule in Hero, and documented in master PAGE_VERSION_REGISTRY.md (2026-09-05)
✅ Completed `/drone-service` Standard v3.0 upgrade: Hero H1 visible + WhatsApp CTA + 10s rotation, cleaned pricing & specs in GEL (from 250 ₾), purged duplicate mobile 18-service listing, streamlined contact form (removed socials friction field, promoted WhatsApp to prominent button), added GEO Answer Capsules under H2 headings (Pricing, Process, FAQ), and validated full SSR in DOM with successful Vercel Preview deployment (2026-09-05)
✅ Upgraded Audit & Roaster Skills v3.0 with Cluster 3 SSR Drawer/Accordion validation (strict ban on client-only {isOpen && <Content />}, SearchGPT/Googlebot DOM readiness verified via curl) and instituted Vercel Preview testing protocol (replacing localhost; 2 live links: Было vs Стало v3.0 for mobile Safari/Chrome testing) documented in PROJECT_RULES.md (2026-09-05)
✅ Synchronized Audit & Roaster Skills v3.0 into repository (`site-docs/skills/PAGE_AUDITOR_30_FACTOR.md`, `site-docs/skills/WEBSITE_CONVERSION_ROASTER.md`) and instituted mandatory "Lexical Clarity Filter" + "Human-in-the-Loop Gateway" table review before any copywriting/pricing/FAQ commit and deploy (2026-09-05)
✅ Executed master Card 3.0 overhaul across NichesStack desktop sections 02-12: embedded titles inside photos, purged legacy tags (HOT, ХОД, СТАРТ, SALE, eyebrow), expanded clamp to 3 lines with zero ellipses, and mapped direct L3 links (2026-09-04)
✅ Lifted Hero H1 block an additional 10% closer to clock capsule (-top-2.5 sm:-top-3.5) with zero layout shift on lower elements (2026-09-04)
✅ Isolated Hero H1 block and lifted closer to clock capsule (mb-3 sm:mb-4) while strictly preserving exact position of description card, WhatsApp CTA, and BREUS MEDIA (2026-09-04)
✅ Aligned Hero H1 and location badge with proportional optical vertical centering between top clock capsule and lower description window (2026-09-04)
✅ Lifted Hero layout towards clock capsule, increased H1 size by 10%, compacted vertical spacing, and re-anchored BREUS MEDIA kinetic start to 68vh to guarantee 100% visibility in iOS Chrome & Safari (2026-09-04)
✅ Fixed whitespace typography in HeroSection sublead: inserted explicit space between 'Google' and 'и внедряем' on mobile viewports (2026-09-04)
✅ Finalized mobile Hero architecture: removed redundant outer glass card around WhatsApp CTA, anchored button 1-2cm directly beneath copy, and docked BREUS MEDIA at 78vh bottom safe-zone with balanced horizontal padding (2026-09-04)
✅ Fixed mobile SmartHeader 'ОБСУДИТЬ' click handler (smooth scrollIntoView to #contact), eliminated ambiguous 'площадки' wording in AboutSection (replaced with ready-to-post on web/maps/socials from 24h), and aligned audit capsule copy (2026-09-04)
✅ Calibrated Hero to 100svh for iOS Chrome toolbar resilience, hid floating WhatsApp on Hero screen (reveals on scroll), lifted CTA dock to bottom-[calc(85px+safe-area)], and centered BREUS MEDIA at 60vh on mobile (2026-09-04)
✅ Cleaned contact action sheet (symmetric WA/TG/Call buttons), elevated AboutSection manifesto to digital-presence positioning (24-48h turnaround), and upgraded audit wedge to Free 24h Business Audit (2026-09-04)
✅ Stabilized mobile chooser vertical flow (replaced justify-between with justify-center to fix iOS Chrome dynamic bar jump), embedded sleek audit capsule under AboutSection, updated Scanner hook to loss-prevention B2B copy, and freed contact form screen (2026-09-03)
✅ Rebuilt mobile burger menu to full-screen 100dvh solid overlay (fixed background bleed-through bug, synced 6 services matrix, and hid floating WhatsApp while menu is active) (2026-09-03)
✅ Upgraded mobile typography to 2026 accessibility standard: boosted Hero body text to 14-15px text-sm, increased card subtext to 12px text-xs, and calibrated photo height to 92px so all 3 rows fit viewport without bottom clipping (2026-09-03)
✅ Polished 'Ваш бизнес' card copy with conversion-oriented 2-line descriptions (eliminated mid-word ellipses) and decoupled duplicate hotel/tourism images (2026-09-03)
✅ Integrated 140vh scroll runway with Sticky Hold for calm mobile reading, and transformed Scanner into a sleek 1-line prompt above the contact form to eliminate CTA conflict (2026-09-03)
✅ Expanded AboutSection with 3-paragraph B2B manifesto (removed scanner), and restored autonomous ScannerBanner directly above contact form (2026-09-03)
✅ Scaled up chooser photos to 120px, combined About manifesto with Scanner on mobile Screen 3 (removed camera hardware specs), and freed Screen 4 for frictionless contact form submission (2026-09-03)
✅ Stripped legacy badges ('ХОД', 'HOT', 'СТАРТ', 'SALE') across desktop niche cards, boosted description typography to 14px, and eliminated spacing voids (2026-09-03)
✅ Fit mobile card descriptions to 50 chars (no ellipsis), condensed AboutSection into 1 single iPhone screen, removed scroll lock before contact form, and upgraded WhatsApp button to calm breathing animation with Telegram/Call options (2026-09-03)
✅ Fixed desktop header-to-nav gap by pinning steps bar to top-64px and cards to top-104px, upgraded desktop cards to Card 3.0 standard (title inside image, removed upper hashtags, tight button spacing), and locked mobile sheets to freeze-and-stack flow (2026-09-03)
✅ Implemented mobile freeze-and-stack sheet scroll mechanics, slimmed down ScannerBanner (removed english badge), and embedded titles inside image cards for desktop 360 Tours (2026-09-03)
✅ Restored desktop NichesStack sticky navigation 01-10 (md:overflow-visible), implemented mobile 4-sheet stacking layout (Hero -> Chooser -> About -> Contact) with sticky top-60px and rounded-t-26px borders (2026-09-03)
✅ Re-architected desktop Hero to vertical pyramid layout: lifted H1, lowered BREUS MEDIA kinetic start to 70vh below copy, and anchored WhatsApp CTA to bottom to eliminate text overlaps (2026-09-03)
✅ Added Hero text contrast backdrop with staggered blur-reveal animation, updated chooser tab to 'Ваш бизнес (6)', expanded cards with 2-line complete descriptions, and enabled soft snap-proximity navigation (2026-09-03)
✅ Updated HeroSection positioning copy: Visual Production & Digital Solutions (RU/EN), balanced B2B messaging across drone, 360, web, maps, and AI solutions (2026-09-03)
✅ Fixed Hero down-arrow scroll-mt landing, added 1-line human micro-copy to 6x6 cards, calibrated drawer height to 75vh with top backdrop reveal, and hid floating WhatsApp button when drawer is open (2026-09-03)
✅ Fixed MultiStepServiceDrawer height to stable 82vh, enabled touch swipe gestures left/right between slides, and redesigned ScannerBanner to premium dark-gold palette moved above contact form (2026-09-02)
✅ Mobile Hero Chrome bottom toolbar safe-area lift, 6x6 chooser header cleanup to fit 1 iPhone screen, isolated md:hidden, and eliminated empty black space in desktop Aerial & 360 cards (2026-09-02)
✅ Strategic Master Onboarding & Dental Clinic Sprint (2026-09-01)
- Контекст:
  - Изучены мастер-стратегии Spark и Breus Media (87 пунктов: Choice-First, The One-Tool Offer, B2B-перехват звонков).
  - Создан манифест `site-docs/ANTIGRAVITY_SYSTEM_ROADMAP.md` с разделением ролей Spark ⟷ AntiGravity.
  - Исследованы практики стоматологий (страхи, GEL прайсинг), задокументировано в `site-docs/research/dental-clinic-best-practices.md`.
  - Реализованы React-компоненты для стоматологии: `FearRemoval.tsx` (FAQ по страхам) и `PricingGEL.tsx` (прозрачные цены).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> в процессе.

✅ Real-Time B2B Scanner Wedge Product (API + Data Scraper) implementation (2026-09-01)
- Контекст:
  - Обновлён интерактивный квиз `InteractiveScanner.tsx` до полноценного анализатора сайта.
  - Разработан серверный API-эндпоинт `/api/analyze/route.ts` (Next.js App Router).
  - Эндпоинт делает fetch сайта клиента, парсит `<title>`, `<meta description>`, считает теги `<img>` и `<video>`/`<iframe>`, а также оценивает примерную скорость загрузки на базе размера HTML.
  - В квиз на фронтенде добавлена опция «Другое» со свободным текстовым вводом ниши.
  - На втором шаге пользователю теперь показываются реальные данные с его сайта (название, скорость, найденное медиа), и расчет баллов теперь динамически учитывает реальные показатели сайта.
- Проверки:
  - `tsc --noEmit` -> ✅ (0 ошибок типов).
  - Vercel Production деплой -> ✅ `READY` (https://breus-media-v2.vercel.app и https://breus-media-v2.vercel.app/audit).

✅ Interactive B2B Scanner Wedge Product implementation (/audit & /gazeta banner) (2026-09-01)
- Контекст:
  - Реализован «Продукт-клин» (Interactive Scanner) для самостоятельного аудита цифрового присутствия B2B-клиентов (Недвижимость, Отели, Рестораны, Клиники).
  - Создана новая целевая страница `/audit` с интерактивным 3-шаговым квизом `InteractiveScanner.tsx`.
  - В квизе: ввод URL и ниши ➔ 3 быстрых чекбокса (скорость сайта, 360° на картах, 4K Reels) ➔ генерация индивидуального Scorecard с баллами и призывом в WhatsApp для получения Loom-разбора.
  - Добавлен `ScannerBanner.tsx` на главную страницу `/gazeta` (над формой контактов `DroneContactStitch` в мобильной и десктопной `NichesStack.tsx` версиях).
  - Использованы `Tailwind CSS`, `lucide-react`.
- Проверки:
  - `tsc --noEmit` -> ✅ (0 ошибок типов).
  - Vercel Production деплой -> ✅ `READY` (https://breus-media-v2.vercel.app и https://breus-media-v2.vercel.app/audit).

✅ Created interactive B2B widgets demo page (/interactive-demo) for Real Estate, Hotels & Restaurants (2026-09-01)
- Контекст:
  - Страница-витрина `/interactive-demo` для демонстрации интерактивных виджетов клиентам (Real Estate, Hotels, Restaurants).
  - Разработаны 4 виджета:
    * `RoiCalculator.tsx` (Расчет окупаемости инвестиций, ползунки стоимости и аренды).
    * `EventBudgetCalculator.tsx` (Бюджет банкета, доп. опции фото/видео и дрон).
    * `RestaurantStatus.tsx` (Live-статус посадки и кухни, раскрывающееся меню).
    * `LeadQuiz.tsx` (Интерактивный опрос из 3 шагов с финальной формой сбора контактов).
  - Использованы `framer-motion` для плавных анимаций и Tailwind CSS.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 109/109 страниц).
  - Vercel Production деплой -> ✅ `READY` (https://breus-media-v2.vercel.app).

✅ Restored clean photo-dominant 6x6 grid, added horizontal tab swipe and connected 2-step MultiStepServiceDrawer (2026-09-01)
- Контекст:
  - Дизайн карточек:
    * Восстановлен чистый кинематографичный вид (крупное фото на 100% площади карточки, мягкий тёмный градиент снизу `bg-gradient-to-t from-black/95 via-black/35 to-transparent`, контрастное белое название в левом нижнем углу `font-bold text-sm sm:text-base md:text-lg`).
    * Убраны рамки, ценники и кнопки с тела карточек для максимального визуального фокуса на контенте.
  - Боковой свайп табов:
    * Добавлен горизонтальный свайп пальцем по экрану влево-вправо (`onTouchStart`/`onTouchEnd` с расчётом дельты) для мгновенного плавного переключения между табами «Услуги» и «Индустрии» с анимацией `framer-motion`.
  - 2-шаговая интерактивная шторка `MultiStepServiceDrawer.tsx`:
    * Слайд 1 (Экспресс-обзор): подробное B2B-описание, блок «Что даёт формат:» с чеклистом, стартовая цена в ₾, индикатор «🟢 Ответ за 5 минут», кнопка WhatsApp и кнопка «Все форматы ➔».
    * Слайд 2 (Каталог готовых форматов): переход к списку целевых L3-страниц с кнопками прямого перехода («Открыть ↗») и расчётом сметы («Смета»).
    * Навигационные индикаторы-точки (Dots) внизу шторки.
  - B2B редполитика: зафиксирована формулировка «Недвижимость и девелопмент» / «Real Estate & Development».
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 108/108 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-2694eyu9m-tony-breus-projects.vercel.app).

✅ Integrated 6x6 symmetric matrix (added AEO Websites & Google Maps SEO), eliminated gesture conflict, and connected QuickServiceDrawer for two-step exploration (2026-09-01)
- Контекст:
  - Идеальная геометрия 6 Услуг × 6 Индустрий (адаптивная сетка 2×3 на мобильных, 3×2 на десктопе):
    * 6 Услуг: Аэросъёмка (от 250 ₾), 360° туры (от 300 ₾), Reels & Видео (от 250 ₾), AI-визуализация (от 180 ₾), AEO/SEO-Сайты (от 1 200 ₾), Google Maps & SEO (от 350 ₾).
    * 6 Индустрий: Недвижимость (от 250 ₾), Отели и курорты (от 350 ₾), Рестораны и еда (от 250 ₾), Туризм и гиды (от 300 ₾), Автобизнес (от 250 ₾), Клиники и бьюти (от 250 ₾).
  - Ликвидация бага конфликта жестов:
    * Табы переведены на центрированный Glass Pill переключатель с чистым `onClick={() => setActiveTab(...)}` без горизонтального перехвата свайпа.
  - Двухэтапное изучение с `QuickServiceDrawer.tsx`:
    * Клик по любой карточке плавно открывает стильный Bottom Sheet с категорией, описанием, составом услуги, стартовой ценой, бейджем «Ответ за 5 минут» и двумя кнопками (WhatsApp + «Открыть услугу» / «Рассчитать смету»).
  - B2B редполитика: зачищены двусмысленные фразы («продажа квартир» заменена на «Медиа-упаковка жилых комплексов, апартаментов, вилл и коммерческих объектов»).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 108/108 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-cc7gfxb0s-tony-breus-projects.vercel.app).

✅ Consolidated Hotels & Tourism drone cards, eliminated duplicate slug, calibrated #pricing height and removed DroneStickyCta collision on /drone-hotels-tourism (2026-09-01)
- Контекст:
  - `components/drone/droneServicesData.ts`:
    * Объединена карточка `oteli-kurorty` (Title: «Отели, курорты и туризм», Category: «ОТЕЛИ · ТУРОПЕРАТОРЫ · ГИДЫ · ЛОКАЦИИ», Description: «Гость выбирает глазами. Снимаем отели, глэмпинги, видовые маршруты и природные локации Грузии для туроператоров, гидов и Booking — контент, который продаёт атмосферу отдыха.», Price: «4K · АТМОСФЕРА · ПРОМО»).
    * Полностью удалена дублирующая карточка `turizm`.
  - `app/drone-hotels-tourism/page.tsx` & `app/drone-hotels-tourism/en/page.tsx`:
    * Устранён наезд плавающих кнопок: удалены `DroneStickyCta` и `MobileBottomBar`, оставлен чистый глобальный `FloatingWhatsAppButton`.
    * Откалибрована секция `#pricing`: класс `scroll-mt-16 md:scroll-mt-20 pt-5 pb-20 border-b border-[#2a2a2a] bg-[#080808]`, плотное описание, паддинги `p-4.5 md:p-5`, компактный чеклист `text-xs md:text-[13px]`, сетка помещается на 1 экран ноутбука.
    * Изолированы смежные услуги `relatedServices`: ровно 2 целевые карточки (`360-tour-hotels` и `reels-hotel`).
    * Футер: подключен обновленный `DroneFooterStitch` / `DroneFooterStitchEn`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 108/108 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-2gt2f6xyp-tony-breus-projects.vercel.app).

✅ Integrated QuickServiceDrawer (Pattern 1 Bottom Sheet) for uncompleted L3 services with speed-to-lead WhatsApp CTA (2026-09-01)
- Контекст:
  - Компонент `QuickServiceDrawer.tsx`:
    * Мобильная стеклянная шторка (Bottom Sheet) на `framer-motion` со свайпом вниз для закрытия, блокировкой скролла `body`, индикатором перетаскивания (drag handle), бейджем категории и кнопкой закрытия.
    * Информационный блок: питч-описание, состав услуги (чеклист с золотыми галочками), стартовая цена и статус ответа «🟢 Ответ за 5 минут» / «5-min response».
    * Две конверсионные кнопки: прямой переход в WhatsApp с предзаполненным сообщением и кнопка «Оставить заявку» со скроллом к форме `#contact`.
  - База экспресс-данных `constants/quickServicesData.ts`:
    * Выверенные описания и цены для всех услуг без страниц 3-го уровня (`monitoring-stroiki`, `zemelnye-uchastki`, `inspekciya-fasadov`, `regulyarnye-aerootchety`, `fpv-semka`, `tour-restaurants`, `tour-clinics`, `reels-restaurant`, `reels-business`, `ai-brand`, `ai-auto` и др.).
  - Сквозная интеграция:
    * `GazetaMobileStepChooser.tsx`, `ChooserLayoutCinema.tsx`, `ChooserLayoutBento.tsx`, `ChooserLayoutDrawer.tsx`.
    * При наличии L3 происходит прямой мгновенный переход (`<Link href="...">`), при отсутствии — снизу плавно выезжает `QuickServiceDrawer`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 108/108 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-bztrhzeu6-tony-breus-projects.vercel.app).

✅ Created 3 standalone UX preview routes for Chooser layout comparison: /gazeta-preview-1 (Cinema), /gazeta-preview-2 (Bento), /gazeta-preview-3 (Drawer) (2026-08-30)
- Контекст:
  - Макет №1 (/gazeta-preview-1): `ChooserLayoutCinema.tsx` — кинематографичный слайдер (Snap Carousel `w-[270px]/[320px]` со свайпом, золотой активной каймой, `scale-[1.03]` и подложной витриной sub-услуг 2×2).
  - Макет №2 (/gazeta-preview-2): `ChooserLayoutBento.tsx` — интерактивный терминал (чипсы с зелёными пульсирующими онлайн-индикаторами готовности, асимметричный Bento-блок с флагманом и сопутствующими карточками).
  - Макет №3 (/gazeta-preview-3): `ChooserLayoutDrawer.tsx` — шторка-каталог (App Store / Airbnb свайп-рейл компактных квадратных карточек со звездами L3 + детализированный вертикальный список).
  - Приоритет L3: на всех макетах первыми выводятся готовые страницы 3-го уровня с кнопкой «Открыть услугу ↗» / «Открыть ↗» (Аэросъёмка: Недвижимость, Отели, Рестораны, Стройка; 360°: Недвижимость, Отели; Reels: Риелторы, Отели; AI: Staging, Описания отелей, Туризм).
  - Быстрый переключатель между превью в шапке каждой страницы.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 108/108 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-6attbdssi-tony-breus-projects.vercel.app).

✅ Compact Bento Layout Optimization for Real Estate ROI Calculator (2026-08-30)
- Контекст:
  - Оптимизация габаритов `RealEstateRoiCalculator.tsx`:
    * Снижена вертикальная высота секции: отступы уменьшены с `py-10 md:py-16` до компактных `py-6 md:py-10`.
    * Уменьшена максимальная ширина контейнера до `max-w-4xl`, шапка переведена в компактный flex-ряд (`text-xl md:text-3xl`).
    * Компактные ползунки: уменьшены паддинги (`px-3.5 py-2.5`), высота трека (`h-1.5`) и моноширинные бейджи (`text-xs sm:text-sm`).
    * Плитки результатов: метрики сэкономленных выездов и времени скомпонованы в аккуратную 2-колоночную сетку, плашка чистого эффекта выделена компактной золотой полосой, кнопка WhatsApp и нижний микро-баннер переведены в аккуратный slim-формат.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-emwz9t4se-tony-breus-projects.vercel.app).

✅ Interactive Real Estate ROI Calculator & B2B Legal Trust Strip (2026-08-29)
- Контекст:
  - Компонент `RealEstateRoiCalculator.tsx` (RU & EN):
    * Разработан интерактивный Bento-калькулятор окупаемости аэросъёмки недвижимости и ЖК в тёмной теме `#0A0A0B` с золотыми акцентами `#FFD23F`.
    * Ползунки: «Объектов в продаже» (1–30, default 5), «Средняя цена» ($50k–$250k, default $85k), «Показов на сделку» (4–15, default 8).
    * Формулы: сэкономленные выезды `units * tours * 0.35`, сэкономленное время `savedTours * 2.5 ч`, прямой экономический эффект `units * 450 GEL`.
    * Вывод 3 Bento-плашек со счетчиками и быстрая WhatsApp-кнопка с динамическим текстом расчёта.
    * Нижний баннер допродажи: «Нужен интерактивный калькулятор для сайта вашего ЖК? Создаем под ключ от 350 ₾».
  - Интеграция:
    * Встроен перед секцией `#pricing` на страницах `app/drone-services/drone-real-estate/page.tsx` и `en/page.tsx`.
  - B2B Юридический триггер доверия в футере (`DroneFooterStitch` & `DroneFooterStitchEn`):
    * RU: «Официальный договор • Закрывающие акты • Безналичный расчёт для юрлиц (Invoice TBC / BoG)»
    * EN: «Official B2B Contract • Invoices & Acts • Bank Transfer for Companies (TBC / BoG)»
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-58e9c0ckk-tony-breus-projects.vercel.app).

✅ Footer Standard, Global Floating WhatsApp & CTA Buttons Standardization (2026-08-29)
- Контекст:
  - Единый стандарт футера (`DroneFooterStitch` / `DroneFooterStitchEn`):
    * `DroneFooterStitchEn` унифицирован с `DroneFooterStitch` (поддержка `lang="en"`, единая 2-строчная вёрстка с золотыми разделителями, капсулой контактов с пульсирующим зелёным индикатором, стеклянными соцсетями и актуальным номером `+995 501 103 183`).
    * Проверено и обеспечено подключение футера во всех L1, L2, L3 страницах (включая `gazeta/[slug]`, `drone-brand-video` и L2/L3 направления).
  - Глобальный плавающий WhatsApp (`FloatingWhatsAppButton`):
    * Добавлен в `app/layout.tsx` как глобальный синглтон с автоматическим определением языка (RU / EN) через `usePathname()`.
    * Устранены все дублирующие локальные вызовы и старые нижние плашки (`fixed bottom-0`).
  - Стандартизация контактных CTA-кнопок:
    * Hero: основная кнопка — «Обсудить съёмку» / «Discuss Project», вторичная — «Посмотреть тарифы →» / «View Pricing & Tiers →».
    * Тарифные карточки: кнопка выбора — «Обсудить этот формат →» / «Discuss This Tier →» (со скроллом на `#contact` и автоподстановкой выбранного пакета).
    * Форма `DroneContactStitch` / `RealEstateContactStitch`: кнопка отправки — «Отправить задачу на расчёт» / «Submit Project for Estimate».
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-ilb8zqwlf-tony-breus-projects.vercel.app).

✅ B2B Redpolicy: Prices, Offers & Zero Fluff Terminology Polish (2026-08-29)
- Контекст:
  - Искоренение «сырые файлы / RAW» в пользу деловых терминов:
    * Заменены все вхождения терминов «сырые исходники / RAW-файлы / исходники (RAW)» на «оригинальные 4K видеоматериалы», «оригинальный массив съёмки (4K D-Log M)», «оригинальные DNG-исходники» в конфигурациях и страницах (`l2DirectionConfigs.ts`, `l2DirectionConfigs.en.ts`, `drone-sport`, `drone-facade`, `drone-warehouses`, `drone-solar`, `drone-wine`, `drone-brand-video`, `drone-auto`, `drone-land-sale`, `drone-fpv-cinema`, `promo-business`, `promo-restaurant`).
  - Фиксация стартовых цен в GEL (₾):
    * Проверены и зафиксированы точные стартовые цены в GEL без абстрактных формулировок «по задаче» во всех тарифах (включая рестораны в `l2DirectionConfigs.ts`: Menu Pack от 350 ₾, Reels & Social Pack от 450 ₾, Space Pack от 550 ₾, Monthly Content Pack от 950 ₾; в тарифах `reels-realtor`: от 200 ₾ за ролик, монтаж от 80 ₾).
  - Зачистка субъективных стоп-слов (Zero Fluff):
    * Убраны слова-паразиты («уникальный», «профессиональный подход») в пользу конкретных доказательств и характеристик: съёмка 4K HDR (3840×2160), оборудование DJI Air 3S / Avata 2 / Insta360 X5, микрофоны DJI Mic 2, передача материалов за 24–48 часов.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-fl8agder3-tony-breus-projects.vercel.app).

✅ Mobile Hero Polish, Scroll Chevron & Typography Hierarchy (2026-08-29)
- Контекст:
  - Кнопки первого экрана (Hero):
    * Текст второй кнопки обновлен на «ПОСМОТРЕТЬ ТАРИФЫ →» (RU) / «VIEW PRICING & TIERS →» (EN) в `app/drone-services/drone-real-estate/page.tsx` и `en/page.tsx` (включая мид-CTA).
    * Подтвержден плавный скролл к блоку `#pricing` (`html { scroll-behavior: smooth }` + `scroll-mt-16 md:scroll-mt-20`).
  - Бегущая строка (Ticker):
    * Размер шрифта бегущей строки увеличен на 40-50%: применен `text-sm font-medium tracking-wider` (вместо мелкого `text-xs`) в `SmartHeader.tsx` (`TickerItem` и `InteractiveTicker`).
  - Стрелка скролла в блоке «КОРОТКО»:
    * Устранено абсолютное наложение стрелки на текст внутри карточки на мобильных устройствах.
    * Интерактивная стрелка-шеврон `ChevronDown` размещена под карточкой «Коротко» (RU & EN).
    * Клик плавно скроллит к секции `#target-audience` («Для кого эта съёмка» / «Who We Shoot For»).
    * Анимация: деликатный плавный bounce без темного перекрывающего круга.
  - Шрифтовая иерархия и компактность карточек:
    * В блоке доказательств (Proof/Stats): сохранены желтые цифры (`#FFD23F`), подзаголовки переведены из CAPS в нормальный регистр `text-base font-semibold text-white`, текст приведен к `text-zinc-400 text-sm leading-relaxed`, карточки уплотнены (`p-4.5 sm:p-5`).
    * В блоке «Для кого эта съёмка» («Who We Shoot For»): добавлен `id="target-audience"`, усилен контраст между заголовком (`text-white font-bold text-lg`) и описанием (`text-zinc-400 text-sm leading-relaxed`), карточки уплотнены (`p-4.5 sm:p-5`).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Mobile UX, WhatsApp 995501103183, Safe Area / 100dvh & Catalog Swipe/Interactivity (2026-08-29)
- Контекст:
  - WhatsApp: номер обновлен на актуальный `995501103183` (`+995 501 103 183` / `https://wa.me/995501103183`) по всему проекту во всех 110 файлах (`FloatingWhatsAppButton.tsx`, `Hero`, `SmartHeader`, футеры, JSON-LD, конфиги, L2/L3 страницы), старый номер с `8599` полностью искоренен.
  - Мобильный Hero (Safe Area & dvh): в `HeroSection.tsx` и `app/drone-services/drone-real-estate/page.tsx` (RU & EN) высота экранов адаптирована под `min-h-[100dvh]` / `h-[100dvh]` с отступами `pb-[env(safe-area-inset-bottom,24px)]` / `pb-12 md:pb-16 pt-28 sm:pt-32 md:pt-48`, благодаря чему кнопки гарантированно помещаются на экране iPhone 14 Pro над панелью браузеров Safari/Chrome.
  - Zero Waste Space: на странице `drone-services/drone-real-estate` (RU & EN) уменьшены мобильные отступы секций с 20-24 до `py-8 md:py-16`, карточки оптимизированы по плотности (`p-4 md:p-6`).
  - Интерактивность 6 подкарточек каталога аэросъемки: в `GazetaMobileStepChooser.tsx` все 6 карточек (FPV-съёмка, Земельные участки, Инспекция фасадов, Мониторинг стройки, Регулярные аэроотчёты, Мероприятия) кликабельны, для готовых L3 ведут на страницу, для остальных клик плавно скроллит к форме `#contact` с автоподстановкой выбранной услуги в `DroneContactStitch` через событие `breus-select-service`.
  - Поддержка свайпов на мобильных: в `GazetaMobileStepChooser.tsx` добавлен touch swipe обработчик (влево/вправо) для мгновенного переключения вкладок «Услуги» ↔ «Индустрии».
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-eflqlbs22-tony-breus-projects.vercel.app).

✅ UI/UX Final Polish: Fixed Bottom Bar Removal, SmartHeader Clock Badge & Breadcrumb Hubs Sync (2026-08-29)
- Контекст:
  - Удаление старой нижней фиксированной планки (`MobileBottomBar` / `DroneStickyCta`): отключена на всех L2 и L3 страницах. Единственным плавающим контактным элементом в правом нижнем углу остался `FloatingWhatsAppButton`.
  - Корректировка бейджа часов в `SmartHeader`: убрана текстовая надпись «ТБИЛИСИ •», оставлен только зеленый пульсирующий индикатор и тикающее время Asia/Tbilisi (`● 01:54:00`).
  - Синхронизация хлебных крошек (Schema.org `BreadcrumbList`) на всех 6 ключевых L3 страницах (RU & EN):
    * `/drone-services/drone-real-estate` (RU & EN) -> Хаб `/real-estate-service` (RU) / `/real-estate-service/en` (EN)
    * `/drone-hotels-tourism` (RU & EN) -> Хаб `/tourism-service` (RU) / `/tourism-service/en` (EN)
    * `/drone-services/drone-restaurants` (RU & EN) -> Хаб `/restaurants-service` (RU) / `/restaurants-service/en` (EN)
    * `/360-tour-real-estate` (RU & EN) -> Хаб `/real-estate-service` (RU) / `/real-estate-service/en` (EN)
    * `/360-tour-hotels` (RU & EN) -> Хаб `/tourism-service` (RU) / `/tourism-service/en` (EN)
    * `/reels-promo/reels-realtor` (RU & EN) -> Хаб `/real-estate-service` (RU) / `/real-estate-service/en` (EN)
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-dlegils5q-tony-breus-projects.vercel.app).

✅ Batch 2: Full Isolation of Unfinished L3 Pages & Transition Audit (2026-08-29)
- Контекст:
  - В продакшене активны только полностью завершенные флагманские L3-страницы:
    * 360° Виртуальные туры: `/360-tour-real-estate` (RU) ↔ `/360-tour-real-estate/en` (EN)
    * Reels для риелторов: `/reels-promo/reels-realtor` (RU) ↔ `/reels-promo/reels-realtor/en` (EN)
    * Аэросъемка недвижимости: `/drone-services/drone-real-estate` (RU) ↔ `/drone-services/drone-real-estate/en` (EN)
  - Изоляция черновиков и старой верстки:
    * Все блоки «Смежные форматы / Related Services / relatedLinks» на L2 (`hotels-service`, `clinics-service`, `auto-service`, `tourism-service`, `restaurants-service`) и L3 очищены от ссылок на незавершенные черновики со старой версткой.
    * В L2 каталогах (`constants/l2DirectionConfigs.ts`, `constants/l2DirectionConfigs.en.ts`) кнопка «Открыть услугу» (`primaryHref`) оставлена строго для готовых L3-продуктов.
    * Для всех остальных услуг кнопка «Обсудить задачу» (RU) / «Discuss Project» (EN) ведет по плавному якорному скроллу на `#contact` с автоподстановкой названия услуги в форму `DroneContactStitch` (`selectAndScrollToContact`) без перезагрузки или 404.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batches 3 & 4: Zero Fluff Editorial, Fixed GEL Pricing, Unified Footer & WhatsApp (2026-08-28)
- Контекст:
  - Батч №3 (Смысловая редполитика и ценовая сетка Zero Fluff):
    * Исключение размытых формулировок и стоп-слов («уникальный», «лучший», «профессиональный», «эксклюзивный», «индивидуальный подход», «venue»). Замена на измеримые факты, оборудование (DJI Air 3S, DJI Avata 2, Insta360 X5) и сроки (от 24 до 48 часов).
    * Зачистка формулировок исходников: «оригинальные 4K видеоматериалы», «исходный массив съёмки», «полный архив фотоматериалов» (RU) / «Original 4K Master Footage», «High-Resolution Source Archive» (EN).
    * Фиксация стартовых порогов входа в GEL (₾): Дроны от 250 ₾, 360° туры от 350 ₾ (квартиры от 200 ₾), Reels от 350 ₾, AI от 500 ₾ (описания от 250 ₾).
  - Батч №4 (Единый стандарт интерфейса):
    * Сквозное подключение `DroneFooterStitch` (RU) / `DroneFooterStitchEn` (EN) на всех L2 и L3 страницах.
    * Размещение `FloatingWhatsAppButton` на всех страницах с локализованным приветствием.
    * Унификация CTA: Hero («Обсудить съёмку» / «Book a Shoot», «Посмотреть пакеты» / «View Packages»), Тарифы («Обсудить этот пакет →» / «Select Package →»).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 1 (L3 EN Mirrors) & Batch 2 (Raw L3 Isolation & Link Audit) Complete & Deployed (2026-08-28)
- Контекст:
  - Проверка и фиксация L3 зеркальных маршрутов:
    * `/360-tour-real-estate` ↔ `/360-tour-real-estate/en` (`languageLinks={{ ru: '/360-tour-real-estate', en: '/360-tour-real-estate/en' }}`)
    * `/reels-promo/reels-realtor` ↔ `/reels-promo/reels-realtor/en` (`languageLinks={{ ru: '/reels-promo/reels-realtor', en: '/reels-promo/reels-realtor/en' }}`)
  - Сквозная верификация логики переключателя языков в `SmartHeader`: строгая маршрутизация по переданным `languageLinks` без сброса на корневые пути.
  - Изоляция незавершенных L3:
    * В L2 каталогах кнопка «Открыть услугу» (`primaryHref`) активна строго для 6 готовых L3 страниц:
      1) `/drone-services/drone-real-estate` (RU & EN)
      2) `/drone-hotels-tourism` (RU & EN)
      3) `/drone-services/drone-restaurants` (RU & EN)
      4) `/360-tour-real-estate` (RU & EN)
      5) `/360-tour-hotels` (RU & EN)
      6) `/reels-promo/reels-realtor` (RU & EN)
    * Для всех остальных услуг в каталогах L2 кнопка ведет на `#contact` с автоподстановкой услуги в форму `DroneContactStitch`.
    * Блоки «Другие форматы / Related Services» ссылаются исключительно на проверенные L2-хабы.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ L2 EN Mirrors Batch: Tourism, Clinics, Auto Business Synchronized & Deployed (2026-08-28)
- Контекст:
  - Комплексная синхронизация трех англоязычных хабов:
    1) Tourism & Glamping: `/tourism-service` (RU) ↔ `/tourism-service/en` (EN)
    2) Clinics & Dentistry: `/clinics-service` (RU) ↔ `/clinics-service/en` (EN)
    3) Auto Business & Detailing: `/auto-service` (RU) ↔ `/auto-service/en` (EN)
  - Полная двусторонняя связка `languageLinks` в `SmartHeader`.
  - Zero Fluff: исключение клише и просторечий («original 4K master footage», «color-graded video assets»), фиксация цен в GEL (₾), CTA («Book a Shoot» / «View Packages», «Select package →» к `#contact`).
  - География: «Based in Tbilisi, with regular shoots in Batumi and across Georgia».
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Steps 1.4 & 1.5: L3 360° Real Estate & Reels for Realtors RU↔EN Language Mirrors (2026-08-28)
- Контекст:
  - Проверка и верификация английских зеркальных L3-страниц:
    1) 360° Virtual Tour for Real Estate: `/360-tour-real-estate` (RU) ↔ `/360-tour-real-estate/en` (EN)
    2) Reels for Realtors: `/reels-promo/reels-realtor` (RU) ↔ `/reels-promo/reels-realtor/en` (EN)
  - Настройка двусторонних связок `languageLinks` в `SmartHeader`.
  - Проверка Zero Fluff редполитики: исключение просторечий о сырых файлах, фиксация цен в GEL (₾), CTA стандарты (Hero: «Обсудить съёмку» / «Book a Shoot», «Посмотреть пакеты» / «View Packages»; Тарифы: `PackageCta` «Обсудить этот пакет →» / «Select package →»).
- Сделано:
  - `app/360-tour-real-estate/en/page.tsx`: верифицированы `languageLinks`, CTA кнопки Hero («Book a Shoot» / «View Packages»), `ctaLabel="Book a Shoot"`, тарифы `PackageCta`, микроразметка Schema.org (`Service`, `FAQPage`, `BreadcrumbList`);
  - `app/360-tour-real-estate/page.tsx`: верифицированы `languageLinks`, CTA кнопки Hero («Обсудить съёмку» / «Посмотреть пакеты»), `ctaLabel="Обсудить съёмку"`, `MobileBottomBar` и `DroneStickyCta`;
  - `app/reels-promo/reels-realtor/en/page.tsx`: верифицированы `languageLinks`, CTA кнопки Hero («Book a Shoot» / «View Packages»), `PackageCta` («Select package →» с предзаполнением в `#contact`);
  - `app/reels-promo/reels-realtor/page.tsx`: верифицированы `languageLinks`, CTA кнопки Hero («Обсудить съёмку» / «Посмотреть пакеты»), `PackageCta` («Обсудить этот пакет →»).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Step 1.3: L2 Auto Business (/auto-service/en) Synchronization & Two-Way RU↔EN Switcher (2026-08-28)
- Контекст:
  - Создание и синхронизация зеркальной англоязычной страницы для автобизнеса, автосалонов и детейлинга `/auto-service/en` на базе `L2DirectionRenderer` и `autoServiceEnConfig`.
  - Настройка двусторонней связки `languageLinks: { ru: '/auto-service', en: '/auto-service/en' }` в `SmartHeader`.
  - Проверка цен в GEL (от 400–450 ₾ за стартовые пакеты) и соответствия CTA-кнопок стандарту Zero Fluff («Book a Shoot» / «View Packages», «Select package →»).
- Сделано:
  - `app/auto-service/en/page.tsx`: заданы точные метаданные (Title: "Auto Business, Dealerships & Detailing Visual Production in Georgia | Breus Media", Description: "Dynamic FPV drone video, 4K walkthroughs and short-form video production for car dealerships, auto services and detailing centers in Tbilisi and Batumi. Transparent GEL pricing.", OpenGraph, Twitter, canonical, alternates);
  - `constants/l2DirectionConfigs.en.ts`: проверены и обновлены CTA кнопки в `autoServiceEnConfig` (`heroPrimaryCtaLabel: 'Book a Shoot'`, `heroSecondaryCtaLabel: 'View Packages'`, тарифы `Select package →`, прозрачные цены в GEL: Single Car Review 450 ₾, Detailing Promo 400 ₾, Dealership Pack 800 ₾, Monthly 1000 ₾);
  - `app/auto-service/page.tsx` & `en/page.tsx`: верифицирована двусторонняя связка `languageLinks` с активным языком `initialLang="ru"` / `initialLang="en"`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Step 1.2: L2 Clinics (/clinics-service/en) Synchronization & Two-Way RU↔EN Switcher (2026-08-28)
- Контекст:
  - Создание и синхронизация зеркальной англоязычной страницы для медицинских центров и стоматологий `/clinics-service/en` на базе `L2DirectionRenderer` и `clinicsServiceEnConfig`.
  - Настройка двусторонней связки `languageLinks: { ru: '/clinics-service', en: '/clinics-service/en' }` в `SmartHeader`.
  - Проверка цен в GEL (от 350 ₾ за стартовый пакет) и соответствия CTA-кнопок стандарту Zero Fluff («Book a Shoot» / «View Packages», «Select package →»).
- Сделано:
  - `app/clinics-service/en/page.tsx`: заданы точные метаданные (Title: "Medical Clinics & Dentistry Visual Production in Georgia | Breus Media", Description: "FPV drone video, 360° virtual tours and doctor expert reels for medical centers and dental clinics in Tbilisi and Batumi. Transparent pricing in GEL.", OpenGraph, Twitter, canonical, alternates);
  - `constants/l2DirectionConfigs.en.ts`: обновлены CTA кнопки в `clinicsServiceEnConfig` (`heroPrimaryCtaLabel: 'Book a Shoot'`, `heroSecondaryCtaLabel: 'View Packages'`, тарифы `Select package →`, прозрачные цены в GEL: Starter 350 ₾, Doctor & Reels 450 ₾, Space 400 ₾, Monthly 800 ₾);
  - `app/clinics-service/page.tsx` & `en/page.tsx`: верифицирована двусторонняя связка `languageLinks` с активным языком `initialLang="ru"` / `initialLang="en"`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Step 1.1: L2 Tourism (/tourism-service/en) Synchronization & Two-Way RU↔EN Switcher (2026-08-28)
- Контекст:
  - Создание и синхронизация англоязычной страницы туристического направления `/tourism-service/en` на базе `L2DirectionRenderer` и `tourismServiceEnConfig`.
  - Настройка двусторонней связки `languageLinks: { ru: '/tourism-service', en: '/tourism-service/en' }` в `SmartHeader`.
  - Проверка цен в GEL и соответствия CTA-кнопок утвержденному стандарту Zero Fluff.
- Сделано:
  - `app/tourism-service/en/page.tsx`: установлены точные метаданные (Title: "Tourism & Glamping Visual Production in Georgia | Breus Media", Description: "FPV drone video, 360° virtual tours and promotional reels for hotels, glampings and tours across Georgia. Transparent pricing in GEL.", OpenGraph, Twitter, canonical, alternates);
  - `constants/l2DirectionConfigs.en.ts`: обновлены CTA кнопки в `tourismServiceEnConfig` (`heroPrimaryCtaLabel: 'Book a Shoot'`, `heroSecondaryCtaLabel: 'View Packages'`, тарифы `Select package →`, прозрачные цены в GEL от 300 ₾);
  - `app/tourism-service/page.tsx` & `en/page.tsx`: верифицирована двусторонняя связка `languageLinks` с активным языком `initialLang="ru"` / `initialLang="en"`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 4: Unified Footer Standard, Floating WhatsApp & CTA Button Standardization (2026-08-28)
- Контекст:
  - Сквозная унификация футеров: подключение единого контрастного `DroneFooterStitch` (RU) и `DroneFooterStitchEn` (EN) на всех L2/L3 страницах. Замена разрозненных/устаревших инлайн-футеров (`app/real-estate-2/page.tsx`).
  - Плавающая капсула WhatsApp: проверка `FloatingWhatsAppButton` (номер `+995 599 068 599`, автотекст RU/EN, анимация framer-motion, отсутствие дублирующих баннеров).
  - Унификация CTA кнопок на всех страницах каталогов L2 и ключевых L3:
    * Первый экран (Hero): «Обсудить съёмку» (RU первичная) / «Посмотреть пакеты» (RU вторичная); «Book a Shoot» (EN первичная) / «View Packages» (EN вторичная).
    * Карточки тарифов: «Обсудить этот пакет →» (RU) / «Select Package →» (EN).
    * Контактные блоки и плавающие бары: «Обсудить съёмку» / «Book a Shoot».
- Сделано:
  - `components/drone/DroneFooterStitchEn.tsx`: обновлены зеркальные ссылки меню на `/en`, сделаны кликабельными телефон `tel:+995599068599` и почта `mailto:hello@breus.media`, копирайт 2026;
  - `app/real-estate-2/page.tsx`: заменён минимальный инлайн-футер на `DroneFooterStitch` + `FloatingWhatsAppButton`;
  - `constants/l2DirectionConfigs.ts`: обновлены `heroPrimaryCtaLabel` («Обсудить съёмку» / «Обсудить задачу») и `heroSecondaryCtaLabel` («Посмотреть пакеты») во всех 9 L2-хабах;
  - `constants/l2DirectionConfigs.en.ts`: обновлены `heroPrimaryCtaLabel` («Book a Shoot» / «Discuss Project») и `heroSecondaryCtaLabel` («View Packages») во всех 9 EN L2-хабах;
  - `app/360-tour-real-estate/page.tsx` & `en/page.tsx`: стандартизированы кнопки Hero («Обсудить съёмку» / «Посмотреть пакеты», «Book a Shoot» / «View Packages»), `ctaLabel` и `MobileBottomBar`;
  - `app/360-tour-hotels/page.tsx`, `360-tour-hotels.tsx` & `en/page.tsx`: стандартизированы Hero кнопки и `MobileBottomBar`;
  - `app/reels-promo/reels-realtor/page.tsx` & `en/page.tsx`: стандартизированы Hero кнопки;
  - `app/drone-hotels-tourism/page.tsx`, `drone-hotels-tourism.tsx` & `en/page.tsx`, `drone-hotel-page-en.tsx`: стандартизированы Hero кнопки;
  - `app/drone-services/drone-real-estate/en/page.tsx`: стандартизированы Hero кнопки («Book a Shoot» / «View Packages»);
  - `app/drone-services/drone-restaurants/page.tsx` & `page.en.tsx`: стандартизированы Hero кнопки («Обсудить съёмку» / «Посмотреть пакеты», «Book a Shoot» / «View Packages»).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 3: Zero Fluff Editorial Policy, Deliverables Terminology, Fixed GEL Pricing & Anglicism Cleanup (2026-08-28)
- Контекст:
  - Сквозной аудит и зачистка текстов по стандарту Zero Fluff в конфигурационных файлах и компонентах.
  - Терминология исходников (Deliverables):
    * Полное исключение просторечий («сырые файлы / сырой материал / raw files / raw footage»).
    * Замена на профессиональные стандарты: «Оригинальные 4K видеоматериалы», «Исходный массив съёмки», «Full Source Files / Original 4K Footage».
  - Фиксация цен в GEL (₾):
    * Дрон: базовые вылеты от 250 ₾, комплексные от 500 ₾.
    * 360° туры: от 200 ₾ (Start) / от 350–450 ₾ (Standard).
    * Reels: от 200–250 ₾ за ролик / от 650 ₾ за пакет.
    * Устранены размытые заглушки «по задаче / custom quote» в каталогах промо-видео, AI-копирайтинга и Reels — прописаны прозрачные базовые тарифы в GEL («от 100 ₾», «от 120 ₾», «от 150 ₾», «от 200 ₾», «от 300 ₾», «от 350 ₾», «от 450 ₾», «от 500 ₾»).
  - Устранение стоп-слов и англицизмов:
    * Замена субъективных абстракций на точные технические характеристики (камеры 4K HDR, трёхосевая стабилизация, радиосистемы DJI Mic 2, дроны DJI Air 3S / Avata 2, Insta360 X5).
    * В русскоязычных текстах устранён англицизм `venue / веню` с заменой на `площадка`, `локация`, `заведение` или `пространство`.
- Сделано:
  - `constants/gazetaRoutes.ts`: заменены цены «по задаче» на конкретные «от X ₾» для AI-услуг и Reels;
  - `constants/l2DirectionConfigs.ts`: обновлены цены в промо-видео каталоге (`от 300 ₾` – `от 500 ₾`) и AI Localization (`от 200 ₾`);
  - `constants/l2DirectionConfigs.en.ts`: обновлен пакет AI Localization & Copy (`from 200 GEL`);
  - `app/reels-promo/reels-realtor/page.tsx`: заменены общие описания на точные спецификации (4K HDR, трёхосевая стабилизация, DJI Mic 2);
  - `app/drone-hotels-tourism/page.tsx` & `drone-hotels-tourism.tsx`: стандартизирована терминология («оригинальные 4K видеоматериалы»);
  - `app/drone-hotels-tourism/en/page.tsx` & `drone-hotel-page-en.tsx`: обновлено на «Full Source Files»;
  - `app/drone-services/drone-brand-video/DroneBrandVideoPageClient.tsx`: обновлено на «Оригинальные 4K видеоматериалы (от 250 ₾)»;
  - `app/drone-services/drone-wine/page.tsx`, `drone-facade/page.tsx`, `drone-warehouses/page.tsx`, `drone-reporting/page.tsx`, `drone-solar/page.tsx`, `real-estate-2/page.tsx`: обновлена терминология исходников;
  - `app/drone-weddings-events/page.tsx`: зачищены англицизмы `venue` в заголовках, текстах и форме.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 2: L3 Draft Isolation, Canonical Routing Whitelist & Cross-Link Cleanup (2026-08-28)
- Контекст:
  - Сквозная фильтрация и изоляция незавершенных L3-страниц по всем 10 L2-хабам (`tourism`, `clinics`, `auto`, `hotels`, `real-estate`, `restaurants`, `360-tours`, `reels`, `ai-visualization`, `drone`) и сопутствующим блокам.
  - Кнопка прямого перехода «Открыть услугу» / «Explore Service» сохранена строго для 6 канонических L3-страниц:
    1. `/drone-services/drone-real-estate` (и `/drone-services/drone-real-estate/en`)
    2. `/drone-hotels-tourism` (и `/drone-hotels-tourism/en`)
    3. `/drone-services/drone-restaurants` (и `/drone-services/drone-restaurants/en`)
    4. `/360-tour-real-estate` (и `/360-tour-real-estate/en`)
    5. `/360-tour-hotels` (и `/360-tour-hotels/en`)
    6. `/reels-promo/reels-realtor` (и `/reels-promo/reels-realtor/en`)
  - Для всех остальных услуг в каталогах L2:
    * Кнопка действия переведена на «Обсудить задачу» (RU) / «Discuss Project» (EN).
    * Ссылка направлена на якорный скролл `#contact` с автоподстановкой названия услуги через событие `breus-select-service` и `sessionStorage`.
  - Очистка блоков «Сопутствующие услуги / Related Services»:
    * Удалены любые ссылки на черновые маршруты и старые страницы.
    * В `app/drone-hotels-tourism/en/page.tsx` и `drone-hotel-page-en.tsx` ссылка на 360° туры обновлена на `/360-tour-hotels/en`.
    * В `components/drone/DroneServicesStitch.tsx` удален фоллбэк на черновой `/drone-object-inspection`.
- Сделано:
  - `constants/l2DirectionConfigs.ts`: обновлены `hotelsService`, `restaurantsService`, `tourismService`, `tours360Service`, `reelsService` с каноническими `primaryHref` для 6 ключевых услуг и `#contact` для остальных;
  - `constants/l2DirectionConfigs.en.ts`: обновлены `hotelsServiceEnConfig`, `restaurantsServiceEnConfig`, `tourismServiceEnConfig`, `tours360ServiceEnConfig`, `reelsServiceEnConfig` с зеркальными `primaryHref` `/en` и CTA «Discuss project»;
  - `components/drone/DroneServicesStitch.tsx`: очищен `detailsHref` от прямого пути к черновому `/drone-object-inspection`;
  - `app/drone-hotels-tourism/en/page.tsx` & `drone-hotel-page-en.tsx`: обновлена ссылка в `relatedServices` на `/360-tour-hotels/en`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 1: Full RU ↔ EN Language Mirrors, SmartHeader 1-Click Seamless Switching & Canonical LanguageLinks (2026-08-28)
- Контекст:
  - 100% зеркалирование всех L2-хабов и всех 6 канонических L3-страниц (RU ↔ EN) без сброса на главную страницу при переключении языка.
  - Создание недостающего зеркала `app/360-tour-hotels/en/page.tsx` с полной английской версией, тарифами в GEL, Schema JSON-LD (Service, Offer, LocalBusiness, FAQPage, BreadcrumbList), `PackageCta`, `DroneFooterStitchEn` и `FloatingWhatsAppButton lang="en"`.
  - Модернизация `components/gazeta/SmartHeader.tsx`:
    * Добавлено автоматическое вычисление резервных зеркал `computedRuHref` и `computedEnHref` из текущего `pathname` (если `languageLinks` не передан, шапка сама связывает `/[route]` ↔ `/[route]/en`).
    * В десктопном выпадающем меню активный язык подсвечивается (`✓` и золотой акцент), а альтернативный ведёт строго на канонический URL зеркала.
    * В мобильном дровере (`drawer`) отображаются аккуратные круглые пиллы `RU` и `EN` с подсветкой активного языка и прямым переходом без сброса контекста.
  - Проверка всех L2 и L3 зеркал на корректные `languageLinks`, `rel="canonical"` и `hreflang` (`ru`, `en`, `'x-default'`).
- Сделано:
  - `components/gazeta/SmartHeader.tsx`: переработана логика `alternateLanguageHref`, `computedRuHref`, `computedEnHref`, десктопный и мобильный переключатели языков;
  - `app/360-tour-hotels/en/page.tsx`: создано англоязычное зеркало для 360° VR-туров по отелям с `PackageCta`, прайсингом Start (200 ₾), Standard (450 ₾), Full Property (900 ₾), `DroneFooterStitchEn` и `SmartHeader` `languageLinks={{ RU: '/360-tour-hotels', EN: '/360-tour-hotels/en' }}`;
  - `app/360-tour-hotels/page.tsx`: верифицированы `languageLinks={{ RU: '/360-tour-hotels', EN: '/360-tour-hotels/en' }}` и hreflang;
  - `app/tourism-service/en/page.tsx` ↔ `app/tourism-service/page.tsx`: верифицированы `languageLinks={{ ru: '/tourism-service', en: '/tourism-service/en' }}`;
  - `app/clinics-service/en/page.tsx` ↔ `app/clinics-service/page.tsx`: верифицированы `languageLinks={{ ru: '/clinics-service', en: '/clinics-service/en' }}`;
  - `app/auto-service/en/page.tsx` ↔ `app/auto-service/page.tsx`: верифицированы `languageLinks={{ ru: '/auto-service', en: '/auto-service/en' }}`;
  - `app/hotels-service/en/page.tsx` ↔ `app/hotels-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/real-estate-service/en/page.tsx` ↔ `app/real-estate-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/restaurants-service/en/page.tsx` ↔ `app/restaurants-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/360-tours-service/en/page.tsx` ↔ `app/360-tours-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/reels-service/en/page.tsx` ↔ `app/reels-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/ai-visualization-service/en/page.tsx` ↔ `app/ai-visualization-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/drone-service/en/page.tsx` ↔ `app/drone-service/page.tsx`: верифицированы двусторонние ссылки;
  - `app/drone-services/drone-real-estate/en/page.tsx` ↔ `app/drone-services/drone-real-estate/page.tsx`: верифицированы двусторонние ссылки;
  - `app/drone-hotels-tourism/en/page.tsx` ↔ `app/drone-hotels-tourism/page.tsx`: верифицированы двусторонние ссылки;
  - `app/drone-services/drone-restaurants/en/page.tsx` ↔ `app/drone-services/drone-restaurants/page.tsx`: верифицированы двусторонние ссылки;
  - `app/360-tour-real-estate/en/page.tsx` ↔ `app/360-tour-real-estate/page.tsx`: верифицированы двусторонние ссылки;
  - `app/reels-promo/reels-realtor/en/page.tsx` ↔ `app/reels-promo/reels-realtor/page.tsx`: верифицированы двусторонние ссылки.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 105/105 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Schema JSON-LD (GEO / AEO 2026), Global SEO Metadata, Unified Phone & #Contact Funnel Verification (2026-08-28)
- Контекст:
  - Внедрение передового стандарта микроразметки Schema.org (JSON-LD) по спецификации GEO / AEO 2026 для поисковых систем и AI-агентов (ChatGPT, Perplexity, Google AI Overviews).
  - Создание генератора и рендерера микроразметки `components/seo/JsonLd.tsx` (поддержка `LocalBusiness` / `ProfessionalService`, `Service`, `Offer` / `AggregateOffer` в GEL, `FAQPage`, `BreadcrumbList`).
  - Подключение `LocalBusiness` (Тбилиси/Батуми, координаты 41.7151/44.8271, тел: `+995 599 068 599`, бренд Breus Media, соцсети, время работы) на `/gazeta`, `/gazeta/en`, L2-хабах и L3-страницах.
  - Добавление `Service` + `Offer` (прозрачные цены в GEL) и `FAQPage` на всех ключевых L2-хабах и 6 канонических L3-страницах.
  - Верификация и стандартизация метаданных (`rel="canonical"`, `hreflang` ru/en/'x-default', OpenGraph 1200x630, Twitter Cards).
  - Полная очистка и сквозная унификация телефонного номера и WhatsApp по всему репозиторию (`+995 599 068 599` / `wa.me/995599068599`).
  - Проверка воронки `#contact`: валидация полей, автопрефилл из `sessionStorage` (`breus_contact_prefill_service`) и события `breus-select-service`, отображение статуса успешной отправки во всех формах (`DroneContactStitch.tsx`, `FinalFormSection.tsx`, `Contact.tsx`).
- Сделано:
  - `components/seo/JsonLd.tsx`: создан универсальный компонент `<JsonLd />` и фабрики схем `buildLocalBusinessSchema`, `buildServiceSchema`, `buildFaqSchema`, `buildBreadcrumbSchema`;
  - `lib/seo/directionSeo.ts`: подключен `buildDirectionMetadata` (canonical, hreflang ru/en/x-default, OpenGraph, Twitter Cards) и `buildDirectionJsonLd` (LocalBusiness, Service с Offer в GEL, Breadcrumbs, FAQPage);
  - `components/l2-direction/L2DirectionRenderer.tsx`: расширена передача `config.data.faq` в генератор JSON-LD для автоматического формирования `FAQPage` на всех L2-хабах;
  - `app/gazeta/page.tsx` & `app/gazeta/en/page.tsx`: внедрены `LocalBusiness`, `Service` с каталогом `Offer` в GEL, `FAQPage`, полные hreflang и метаданные;
  - `app/drone-services/drone-real-estate/page.tsx` & `en/page.tsx`: актуализированы схемы LocalBusiness/Service, телефон `+995599068599`, hreflang x-default;
  - `app/drone-hotels-tourism/page.tsx` & `en/page.tsx`: обновлен телефон, LocalBusiness/Service, hreflang ru/en/x-default;
  - `app/drone-services/drone-restaurants/page.tsx` & `page.en.tsx`: обновлен телефон, LocalBusiness/Service, hreflang;
  - `app/360-tour-real-estate/page.tsx` & `en/page.tsx`: обновлен телефон `+995 599 068 599`, LocalBusiness, Service, FAQPage, hreflang;
  - `app/360-tour-hotels/page.tsx`: обновлен телефон, LocalBusiness, Service, FAQPage, hreflang;
  - `app/reels-promo/reels-realtor/page.tsx` & `en/page.tsx`: обновлен телефон, LocalBusiness, Service, FAQPage, hreflang;
  - `components/gazeta/FinalFormSection.tsx`: добавлен `useEffect` для прослушивания `breus-select-service` и `sessionStorage`, автопрефилл текста задачи, валидация и статусная плашка отправки;
  - `components/drone/DroneContactStitch.tsx`: проверен `sessionStorage` prefill, статус заявки, обновлен WhatsApp по умолчанию на `+995 599 068 599`;
  - `components/Contact.tsx`: добавлен prefill выбранной услуги и корректный WhatsApp номер;
  - Проведен пакетный скрипт очистки устаревших номеров по всем 178 файлам проекта.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 104/104 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 3 & 4: Zero Fluff Editorial Policy, GEL Transparent Pricing, DroneFooterStitch & WhatsApp/CTA Standardization (2026-08-28)
- Контекст:
  - Комплексная доработка редполитики, цен, футеров и конверсионных кнопок по всему проекту `breus-media-v2`.
  - Зачистка жаргонизма «сырые файлы / сырой материал / raw footage / raw files» с заменой на профессиональные термины («Оригинальные 4K видеоматериалы», «Исходный массив съёмки», «Master video files», «Original 4K video files / uncompressed capture assets»).
  - Фиксация прозрачных стартовых цен в GEL (₾) во всех конфигурациях каталогов и страницах: аэросъёмка от 250 ₾, 360° туры от 350 ₾, Reels от 250 ₾/350 ₾, комплексные пакеты от 500 ₾/850 ₾.
  - Удаление субъективных клише Zero Fluff («уникальный», «лучший», «venue») и замена на измеримые факты (DJI Air 3S, Avata 2, Insta360 X5, 4K HDR, сроки 24–48 часов, Тбилиси, Батуми, Грузия).
  - Подключение и стандартизация контрастного футера `DroneFooterStitch` (с правильными EN-ссылками на зеркала) и плавающей круглой кнопки `FloatingWhatsAppButton` (строгие размеры 52x52px `w-[52px] h-[52px] rounded-full`, z-index 999, номер `+995 599 068 599`, автоподстановка канонического текста RU/EN, `href={resolvedHref}`) на всех L1/L2/L3 страницах.
  - Унификация Hero CTA («Обсудить съёмку» / «Посмотреть пакеты», EN: «Discuss project» / «View packages») и тарифных кнопок («Обсудить этот пакет →», EN: «Select package →») с автоматическим предзаполнением пакета в контактную форму через `breus-select-service` и `sessionStorage`.
- Сделано:
  - `components/gazeta/FloatingWhatsAppButton.tsx`: круглая кнопка 52x52px, номер `+995 599 068 599`, автоподстановка канонических текстов сообщений, `href={resolvedHref}`;
  - `components/gazeta/HeroSection.tsx`: обновлены ссылки WhatsApp для RU и EN версий;
  - `components/drone/DroneFooterStitch.tsx`: в EN-режиме ссылки меню переведены на `/drone-service/en`, `/360-tours-service/en`, `/reels-service/en`, `/ai-visualization-service/en`;
  - `components/drone/DronePricingStitch.tsx` & `DronePricingStitchEn.tsx`: добавлены обработчики `onClick` для префилла пакета в форму и стандартизированы кнопки «Обсудить этот пакет →» / «Select package →»;
  - `components/l2-direction/L2DirectionSections.tsx`: в `L2DirectionPricing` добавлена поддержка `lang`, автопрефилл при клике на пакет и стандартные лейблы кнопок («Обсудить этот пакет →» / «Select package →»);
  - `components/l2-direction/L2DirectionRenderer.tsx`: передан `lang={initialLang}` в `L2DirectionPricing`;
  - `constants/gazetaRoutes.ts`: заменены все вхождения «по задаче» на конкретные стартовые цены в GEL (₾);
  - `constants/l2DirectionConfigs.ts` & `constants/l2DirectionConfigs.en.ts`: заменены цены «по задаче» / «custom quote» на точные цены в GEL для отелей, туризма, клиник и недвижимости; стандартизированы `buttonText: 'Select package →'`;
  - `app/reels-promo/reels-realtor/page.tsx` & `en/page.tsx`: добавлены кнопки выбора пакета с автопрефиллом, зачищены «сырой материал» / buzzwords;
  - `app/drone-services/drone-real-estate/page.tsx` & `en/page.tsx`: добавлены обработчики автопрефилла пакетов, `Select package →` для EN, очищены тексты от «raw files»;
  - `app/drone-services/drone-restaurants/page.tsx` & `page.en.tsx`: добавлены обработчики автопрефилла, стандартизированы кнопки, зачищены «сырые файлы» и «venue»;
  - `app/360-tour-real-estate/en/page.tsx`: установлена кнопка «Select package →» с автопрефиллом;
  - `app/drone-hotels-tourism/en/page.tsx` & `drone-hotel-page-en.tsx`: обновлен PackageCta на «Select package →»;
  - `components/drone/DroneFAQExpandedEn.tsx`, `app/drone-services/drone-territory/page.tsx`, `drone-facade/page.tsx`, `drone-warehouses/page.tsx`, `hotel-ai-descriptions/page.tsx`, `tourism-ai-packaging/page.tsx`, `ai-product/page.tsx`, `promo-hotel/page.tsx`, `promo-excursion/page.tsx`, `drone-wine/page.tsx`: очищены тексты от стоп-слов и субъективных клише.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 104/104 страниц скомпилированы успешно).
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 2: L3 Isolation, Transition Cleanup & Canonical Navigation Audit (2026-08-28)
- Контекст:
  - Строгая фиксация прямого перехода («Открыть услугу» / «Explore Service») ТОЛЬКО для 6 готовых эталонных L3 страниц:
    1) `/drone-services/drone-real-estate` (RU & EN: `/drone-services/drone-real-estate/en`)
    2) `/drone-hotels-tourism` (RU & EN: `/drone-hotels-tourism/en`)
    3) `/drone-services/drone-restaurants` (RU & EN: `/drone-services/drone-restaurants/en`)
    4) `/360-tour-real-estate` (RU & EN: `/360-tour-real-estate/en`)
    5) `/360-tour-hotels` (RU)
    6) `/reels-promo/reels-realtor` (RU & EN: `/reels-promo/reels-realtor/en`)
  - Для всех остальных услуг в каталогах L2 и интерактивных карточках: кнопка «Обсудить задачу» (RU) / «Discuss Project» (EN) с плавным скроллом на `#contact` и автоподстановкой названия услуги через событие `breus-select-service` и `sessionStorage`;
  - Полная очистка блоков «Сопутствующие услуги / Related Services» во всех L2 и L3 шаблонах от ссылок на старые черновые маршруты;
  - Корректировка роутинга в мобильном степ-чузере `GazetaMobileStepChooser.tsx` и `NichesStack.tsx` для англоязычных хабов (`/auto-service/en`, `/clinics-service/en`, `/tourism-service/en`).
- Сделано:
  - `constants/l2DirectionConfigs.ts`: изолирован `monitoring-stroiki` (удален `primaryHref`/`primaryCtaLabel` и `primaryCta`), проверен статус всех L2 каталогов;
  - `constants/l2DirectionConfigs.en.ts`: изолирован `construction-monitoring` (удален `primaryHref`/`primaryCtaLabel` и `primaryCta`), проверены все англоязычные хабы;
  - `constants/gazetaRoutes.ts`: обновлены категории `gazetaCategoryPagesBySlug` (добавлены canonical L3 для отелей, ресторанов, туризма и 360-туров);
  - `components/drone/droneServicesData.ts`: `DRONE_OPEN_SERVICE_SLUGS` обновлен до `['nedvizhimost', 'oteli-kurorty', 'restorany', 'turizm']`, `monitoring-stroiki` переведен на `#contact`, добавлены правильные `primaryHref` для отелей, ресторанов и туризма;
  - `components/drone/DroneServicesStitch.tsx`: добавлено событие `breus-select-service` и запись в `sessionStorage` при клике на «Обсудить задачу»;
  - `components/real-estate-service/realEstateServicesData.ts`: убраны черновые URL, оставлены только 3 готовых L3 (`/drone-services/drone-real-estate`, `/360-tour-real-estate`, `/reels-promo/reels-realtor`), все остальные карточки переведены на `#contact` («Обсудить задачу»);
  - `components/real-estate-service/RealEstateServicesStitch.tsx`: настроен вывод двойных кнопок («Открыть услугу» при наличии `primaryHref` + «Обсудить задачу» к `#contact` с prefill);
  - `components/gazeta/NichesStack.tsx`: очищены fallback-ссылки в нишах 02, 06, 07, 08, 09, 10, 11, обновлен `enRoute` (добавлены `/auto-service/en`, `/clinics-service/en`, `/tourism-service/en` и L3 `/en`), `isOpenServiceCard` переведен на строгую проверку `DESKTOP_OPEN_SERVICE_ALLOWLIST`;
  - `components/gazeta/GazetaMobileStepChooser.tsx`: подключены EN-конфиги (`autoServiceEnConfig`, `clinicsServiceEnConfig`, `tourismServiceEnConfig`), обновлен `routeByLang`, `industryCardsByLang.en` и `industryPreviewConfigEn` со ссылками на `/auto-service/en`, `/clinics-service/en`, `/tourism-service/en`;
  - `app/drone-hotels-tourism/page.tsx` & `en/page.tsx` & `drone-hotel-page-en.tsx` & `drone-hotels-tourism.tsx`: в `relatedServices` оставлены исключительно канонические L3 (`/360-tour-hotels`, `/drone-services/drone-restaurants`, `/360-tour-real-estate`);
  - `app/drone-services/drone-restaurants/page.tsx` & `page.en.tsx`: в `relatedServices` оставлены исключительно канонические L3 (`/drone-hotels-tourism`, `/360-tour-real-estate`, `/reels-promo/reels-realtor`);
  - `app/360-tour-hotels/page.tsx`: в `relatedServices` оставлены исключительно канонические L3 (`/drone-hotels-tourism`, `/drone-services/drone-restaurants`, `/360-tour-real-estate`);
  - `app/drone-service/page.en.tsx`: убран черновой URL `construction-monitoring`, подключены canonical L3 для отелей, ресторанов и туризма.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 104/104 страниц скомпилированы успешно);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 1: RU ↔ EN Language Mirrors & SmartHeader Seamless Switching (2026-08-28)
- Контекст:
  - Создание и верификация недостающих EN-зеркал для L2-хабов (Туризм `/tourism-service/en`, Клиники `/clinics-service/en`, Автобизнес `/auto-service/en`) и ключевых L3-страниц (360° Недвижимость `/360-tour-real-estate/en`, Reels Риелтор `/reels-promo/reels-realtor/en`);
  - Настройка бесшовного 1-клик переключения языков в `SmartHeader` без сброса на главную страницу;
  - Обеспечение чистоты блоков «Related Services» и изоляции черновых страниц.
- Сделано:
  - `components/gazeta/SmartHeader.tsx`: переработана логика `visibleLanguageLabel` — при наличии `alternateLanguageHref` переключатель отображает целевой язык (`alternateLanguage`) и мгновенно перенаправляет на зеркало; добавлен переключатель RU/EN в мобильное меню-шторку;
  - `constants/l2DirectionConfigs.en.ts`: добавлены и экспортированы полноценные англоязычные конфигурации `tourismServiceEnConfig`, `clinicsServiceEnConfig`, `autoServiceEnConfig` и обновлен реестр `l2DirectionConfigsEn`;
  - `app/tourism-service/en/page.tsx` & `app/tourism-service/page.tsx`: создано EN-зеркало и настроены двусторонние `languageLinks` и `Metadata` alternates;
  - `app/clinics-service/en/page.tsx` & `app/clinics-service/page.tsx`: создано EN-зеркало и настроены двусторонние `languageLinks` и `Metadata` alternates;
  - `app/auto-service/en/page.tsx` & `app/auto-service/page.tsx`: создано EN-зеркало и настроены двусторонние `languageLinks` и `Metadata` alternates;
  - `app/360-tour-real-estate/en/page.tsx` & `app/360-tour-real-estate/page.tsx`: создано EN-зеркало с английскими тарифами в лари, чистыми related links (`/drone-services/drone-real-estate/en`, `/reels-promo/reels-realtor/en`), `DroneFooterStitchEn` и `FloatingWhatsAppButton lang="en"`, настроены двусторонние `languageLinks` и `Metadata` alternates;
  - `app/reels-promo/reels-realtor/en/page.tsx` & `app/reels-promo/reels-realtor/page.tsx`: создано EN-зеркало с английскими тарифами, рубриками, глоссарием, FAQ, чистыми related links, `DroneFooterStitchEn` и `FloatingWhatsAppButton lang="en"`, настроены двусторонние `languageLinks` и `Metadata` alternates.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 104/104 страниц скомпилированы успешно);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Complete L3 isolation, CTA audit, and unified conversion layer (FloatingWhatsApp + DroneFooterStitch) (2026-08-28)
- Контекст:
  - Изоляция всех недоработанных L3-страниц: прямые ссылки и кнопки «Открыть услугу» оставлены ТОЛЬКО у 4 полностью готовых маршрутов (`/360-tour-real-estate`, `/reels-promo/reels-realtor`, `/drone-construction-monitoring`, `/drone-services/drone-real-estate`);
  - Для всех остальных суб-услуг действие переведено на скролл к форме `#contact` с передачей контекста услуги;
  - Очистка блоков «Сопутствующие услуги / Related Services» от ссылок на старые черновые маршруты и старую верстку;
  - Внедрение сквозного конверсионного слоя (`FloatingWhatsAppButton` + `DroneFooterStitch` / `DroneFooterStitchEn`) на всех L2 и L3 страницах;
  - Унификация Hero CTA по всему сайту: Primary — «Обсудить проект» / «Обсудить съёмку» (`#contact`), Secondary — «Смотреть услуги» (`#services`) / «Тарифы» (`#pricing`).
- Сделано:
  - `components/gazeta/FloatingWhatsAppButton.tsx`: добавлена поддержка кастомного текста и ссылки с сохранением локализации по умолчанию (`lang`);
  - `components/l2-direction/L2DirectionRenderer.tsx`: подключен `<FloatingWhatsAppButton lang={initialLang} />`, обеспечивающий покрытие всех L2-хабов;
  - `components/drone/droneServicesData.ts`: `DRONE_OPEN_SERVICE_SLUGS` ограничен `['nedvizhimost', 'monitoring-stroiki']`, убраны прямые ссылки на черновики;
  - `constants/droneDirectionPages.ts`: Hero CTA приведены к стандарту «Обсудить съёмку» (`#contact`) и «Смотреть услуги» (`#services`);
  - `constants/l2DirectionConfigs.ts`: очищены `relatedLinks`, `heroCards`, `services` во всех хабах (`hotelsService`, `restaurantsService`, `tourismService`, `clinicsService`, `autoService`, `businessService`, `promoVideoService`, `realEstateService`, `tours360Service`, `reelsService`, `aiVisualizationService`);
  - `constants/l2DirectionConfigs.en.ts`: синхронизированы все англоязычные хабы, удалены ссылки на черновики, Hero CTA унифицированы;
  - `app/drone-service/page.tsx` & `page.en.tsx`: подключен `FloatingWhatsAppButton`, изолированы кнопки черновиков;
  - `app/360-tour-real-estate/page.tsx`: подключен `FloatingWhatsAppButton`, очищены перелинковки;
  - `app/reels-promo/reels-realtor/page.tsx`: подключен `FloatingWhatsAppButton`, очищены перелинковки;
  - `app/drone-construction-monitoring/page.tsx`: подключен `FloatingWhatsAppButton`, обновлен блок смежных услуг.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 99/99 страниц скомпилированы успешно);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Real estate pricing section compact vertical calibration, languageLinks wiring, and DroneFooterStitch high-contrast gold typography polish (2026-08-28)
- Контекст:
  - Калибровка высоты карточек прайсинга в аэросъемке недвижимости, 2-строчное описание, подключение `md:grid-cols-3` для 3 аддонов;
  - Подключение двуязычных ссылок `languageLinks` в `SmartHeader`;
  - Полировка `DroneFooterStitch` с фоном `bg-[#050505] py-4 md:py-5`, золотым бейджем `МЕНЮ` (`#FFD23F`), активными ссылками с разделителями `•`, стеклянной капсулой контактов с зеленой точкой онлайна, фирменной золотой точкой у логотипа `BREUS MEDIA •` и читаемым текстом миссии.
- Сделано:
  - `app/drone-services/drone-real-estate/page.tsx`: проверены `languageLinks`, обновлен заголовок `<h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">`, 2-строчное описание и сетка аддонов `md:grid-cols-3`;
  - `app/drone-services/drone-real-estate/en/page.tsx`: синхронизирована сетка аддонов `md:grid-cols-3` и структура;
  - `components/drone/DroneFooterStitch.tsx`: фон `bg-[#050505] py-4 md:py-5`, меню `text-[#FFD23F] font-bold text-xs uppercase tracking-[0.2em]`, разделители `•`, темная стеклянная капсула контактов с телефоном, логотип `BREUS MEDIA •`, миссия `text-white/70 text-xs md:text-[13px]`, кнопки соцсетей 32×32px с подсветкой `#FFD23F`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 99/99 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Real estate drone page RU/EN full structural parity, At a Glance aside restored, stats section re-integrated, pricing vertical calibration and high-contrast DroneFooterStitch (2026-08-27)
- Контекст:
  - Достижение 100% структурного соответствия между RU (`app/drone-services/drone-real-estate/page.tsx`) и EN (`app/drone-services/drone-real-estate/en/page.tsx`);
  - Возврат блока `At a Glance` в Hero aside англоязычной версии;
  - Реинтеграция секции статистики `Why Video Sells Real Estate` перед разделом проблем;
  - Размещение секции `audienceCards` отдельным 3-колоночным блоком сразу под Hero;
  - Компактная верстка прайсинга (`scroll-mt-16 pt-5 pb-20 md:scroll-mt-20 md:pt-6`) и 2 смежные карточки услуг в обоих языках.
- Сделано:
  - `app/drone-services/drone-real-estate/page.tsx`: переданы `languageLinks`, компактные отступы прайсинга и кнопки карточек;
  - `app/drone-services/drone-real-estate/en/page.tsx`: выстроен идентичный 18-секционный порядок с `At a Glance` aside, `audienceCards` сразу после Hero, `statsCards`, международным контекстом `problemCards`, `deliverableGroups` с техпараметрами, `FormatExamplesSlideshow`, 2 карточками `relatedServices` (`/360-tour-real-estate` и `/reels-promo/reels-realtor`), `DroneContactStitch` (`lang="en"`) и `DroneFooterStitch` (`lang="en"`);
  - `components/drone/DroneFooterStitch.tsx`: золотой бейдж `МЕНЮ`/`MENU`, логотип `BREUS MEDIA •` с золотой точкой, активные ссылки с разделителями `•` и стеклянный контакты-бейдж.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 99/99 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Batch 1: Real estate pricing section compact calibration, DroneFooterStitch gold contrast typography, and /drone-services/drone-real-estate/en route rollout (2026-08-28)
- Контекст:
  - Компактная калибровка секции цен в аэросъёмке недвижимости для комфортного размещения всех 4 карточек на экране при переходе к прайсингу;
  - Добавление двуязычного переключателя (`languageLinks`) в русской версии;
  - Создание полноценного англоязычного роута `/drone-services/drone-real-estate/en`;
  - Полный редизайн `DroneFooterStitch` с премиум-типографикой, золотыми акцентами `МЕНЮ`/`MENU`, всеми 4 активными ссылками и темной стеклянной капсулой контактов.
- Сделано:
  - `app/drone-services/drone-real-estate/page.tsx`: добавлен `languageLinks`, секция `#pricing` переведена на компактный лейаут (`scroll-mt-16 pt-5 pb-20 md:scroll-mt-20 md:pt-6`, `h2` `text-2xl md:text-3xl lg:text-4xl`, описание в 2 строки, карточки `p-4.5 md:p-5`, отступы `space-y-1.5 md:space-y-2`), добавлены полные метаданные `Metadata`;
  - `app/drone-services/drone-real-estate/en/page.tsx`: создан полноценный английский роут с H1 "Drone Videography for Real Estate & Residential Complexes in Tbilisi", английскими пакетами ("Exterior Flight" 250 ₾, "Interior FPV Pass" 350 ₾, "Full Combined Shoot" 500 ₾, "Full Package with Edited Video" from 900 ₾), add-ons, structured data schemas и `SmartHeader` / `FloatingWhatsAppButton` / `DroneFooterStitch` с `lang="en"`;
  - `components/drone/DroneFooterStitch.tsx`: верхняя строка с золотым бейджем `МЕНЮ`/`MENU` (`text-[#FFD23F] font-bold text-xs uppercase tracking-[0.2em]`), всеми 4 активными кликабельными ссылками с золотыми точками `•`, темная стеклянная капсула контактов (`rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1`) с зеленой пульсирующей точкой и телефоном, логотип `BREUS MEDIA.` и круглые стеклянные кнопки соцсетей (32×32px) с эффектом свечения;
  - `constants/l2DirectionConfigs.en.ts`: обновлена ссылка "Real estate drone filming" на `/drone-services/drone-real-estate/en`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 99/99 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Hero yTranslate 46vh adjustment, isolated real-estate related services, aligned +150 GEL horizontal add-on, footer RU localization, and FloatingWhatsApp standard (2026-08-26)
- Контекст:
  - Коррекция начального положения кинетической типографики BREUS MEDIA (`yTranslate` на `46vh`) в Hero-экране для размещения точно между верхним описанием и нижней кнопкой WhatsApp;
  - Очистка блока смежных услуг в аэросъемке недвижимости до 2 целевых карточек (360° тур и Reels для риелтора);
  - Корректировка верхнего отступа секции цен (`scroll-mt-28 md:scroll-mt-32 pt-12 md:pt-16 pb-24`) и цены горизонтального видео-обзора (+150 ₾);
  - Замена `DroneStickyCta` на стандартную плавающую кнопку `FloatingWhatsAppButton`;
  - Локализация города в футере в RU-версии: «Тбилиси, Грузия».
- Сделано:
  - `components/gazeta/HeroSection.tsx`: `yTranslate` обновлен до `["46vh", "-60vh", "-60vh"]`;
  - `app/drone-services/drone-real-estate/page.tsx`: в `relatedServices` оставлены только 2 карточки (`/360-tour-real-estate` и `/reels-promo/reels-realtor`), в `addonPricing` цена горизонтального видео заменена на +150 ₾ (до 60 сек), скорректированы паддинги секции `#pricing`, подключен `FloatingWhatsAppButton` вместо `DroneStickyCta`;
  - `components/drone/DroneFooterStitch.tsx`: строка контактов локализована на «{resolvedContactTitle}: Тбилиси, Грузия · +995 501 103 183» (RU) и «{resolvedContactTitle}: Tbilisi, Georgia · +995 501 103 183» (EN).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Refined hero layout, localized clock widget, updated drone real estate deliverables without raw wording (2026-08-26)
- Контекст:
  - Локализация названия города ("ТБИЛИСИ" в RU / "TBILISI" в EN) и стилизация часов в темную стеклянную капсулу (Glass Pill);
  - Вертикальная калибровка Hero-секции (`pt-20 md:pt-24`) и улучшение взаимодействия со скроллом к секции ниш по клику на текст/стрелку;
  - Замена формулировок о «сырых» файлах на профессиональные описания пакетов и доп. опций аэросъёмки недвижимости.
- Сделано:
  - `components/gazeta/TimeWidget.tsx` & `components/gazeta/SmartHeader.tsx`: часы оформлены в темную стеклянную капсулу (`border border-white/10 bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-md shadow-sm`), добавлен золотистый акцент (`text-[#D4AF37]`) с локализованным названием города (ТБИЛИСИ / TBILISI), пульсирующая зеленая точка и аккуратный моноширинный шрифт времени;
  - `components/gazeta/HeroSection.tsx`: центральный блок подтянут к шапке (`pt-20 md:pt-24`), стрелка `↓` и кнопка «ВЫБЕРИТЕ НАПРАВЛЕНИЕ» плавно скроллят к секции ниш (`#niches`, `#niches-nav`, `#mobile-chooser-anchor`);
  - `app/drone-services/drone-real-estate/page.tsx`: формулировки обновлены на профессиональные («Все оригинальные 4K видеофайлы...», «Полный комплект FPV-видеоматериалов...», «Полный массив 4K видеоматериалов...», «Полный комплект оригиналов 4K...», обновлены аддоны Reels 60 сек, видео-обзор 16:9 до 2 мин, 360° панорама).
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Master site optimization: Hero kinetic typography fix, 6 active L3 buttons synchronization, legacy links cleanup and service pre-fill in contact form (2026-08-26)
- Контекст:
  - Коррекция высоты кинетической типографики «Breus Media» в Hero-экране для исключения вертикального обрезания на нестандартных вьюпортах;
  - Строгая синхронизация кнопок «Открыть услугу» vs «Обсудить задачу» (только 6 активных L3 страниц);
  - Удаление устаревших/неактивных ссылок со страницы 360° туров для недвижимости;
  - Автоподстановка названия выбранной услуги в форму связи `#contact`;
  - Унификация географии «Базирование в Тбилиси, выезды по Батуми и всей Грузии» и очистка остаточных английских бейджей в русской версии автобизнеса.
- Сделано:
  - `components/gazeta/HeroSection.tsx`: `yTranslate` обновлен с `["78vh", "-60vh", "-60vh"]` на `["60vh", "-60vh", "-60vh"]`;
  - `components/gazeta/NichesStack.tsx`, `constants/l2DirectionConfigs.ts`, `constants/l2DirectionConfigs.en.ts`: строго закреплены 6 готовых L3 страниц (`/drone-services/drone-real-estate`, `/drone-hotels-tourism`, `/drone-services/drone-restaurants`, `/360-tour-real-estate`, `/360-tour-hotels`, `/reels-promo/reels-realtor`), для всех остальных суб-услуг активирована кнопка «Обсудить задачу» со скроллом на `#contact`;
  - `app/360-tour-real-estate/page.tsx`: удалены блоки «Видеотур по квартире» и «Мониторинг стройки», оставлены целевые перелинковки;
  - `components/drone/DroneContactStitch.tsx` & `components/gazeta/NichesStack.tsx`: реализована шина событий `breus-select-service` и `sessionStorage` для автоподстановки выбранной услуги в поле сообщения и автовыбора чипсов в форме `#contact`;
  - `constants/l2DirectionConfigs.ts`: в `/auto-service` заменены бейджи на русские (`Дрон · от 400 ₾`, `Обзор модели`, `СОЦСЕТИ · РЕКЛАМА · REELS`), утверждена единая география «Базирование в Тбилиси, выезды по Батуми и всей Грузии» для страниц автобизнеса, клиник, промо-видео и B2B.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-ojz1mbbnr-tony-breus-projects.vercel.app/gazeta).

✅ Gazeta SmartHeader Flexbox Layout & Hero Kinetic Typography Watermark (2026-08-25)
- Контекст:
  - При ширине экрана от 1024px до 1920px ссылка «AI Решения» могла наезжать на правый блок кнопок и язык из-за абсолютного центрирования `<nav className="absolute left-1/2 -translate-x-1/2">`;
  - Гигантский кинетический текст "Breus Media" в первом экране был слишком ярким (100% opacity) и его нижняя граница пересекала элементы нижнего CTA-блока.
- Сделано:
  - `components/gazeta/SmartHeader.tsx`: удалено абсолютное центрирование `absolute left-1/2 -translate-x-1/2`, десктопный бар превращён в полноценный flex-ряд (`w-full px-4 md:px-8 xl:px-12 flex justify-between items-center gap-4`), `<nav>` центрирован через `flex-1 min-w-0 justify-center gap-3 lg:gap-4 xl:gap-7`, шрифт ссылок приведен к `text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap`, правый блок изолирован как `flex-shrink-0 gap-2 xl:gap-4`;
  - `components/gazeta/HeroSection.tsx`: для кинетического текста "Breus Media" задана стартовая прозрачность водяного знака `opacity: 0.25` с плавным переходом в `1` при скролле, начальный оффсет смещен на `78vh`, нижний блок (WhatsApp CTA + "ВЫБЕРИТЕ НАПРАВЛЕНИЕ" + стрелка) обернут в полупрозрачную контрастную капсулу `bg-black/40 px-5 py-3 backdrop-blur-md border border-white/10 shadow-lg`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-crgbasctk-tony-breus-projects.vercel.app/gazeta).

✅ Gazeta Hero & NichesStack Responsiveness & Padding Optimization (2026-08-25)
- Контекст:
  - В первом экране Hero при невысоких экранах (<800px) тексты наезжали на нижние кнопки из-за абсолютного позиционирования (`top-[12%]` и `bottom-[130px]`);
  - В карточках `NichesStack` внутренние вертикальные паддинги были избыточными, из-за чего кнопки действий прижимались или скрывались за пределы экрана.
- Сделано:
  - `components/gazeta/HeroSection.tsx`: заменено абсолютное позиционирование на единый адаптивный Flexbox-контейнер (`relative z-10 mx-auto flex h-full w-full max-w-[880px] flex-col justify-between items-center px-4 pt-24 pb-8 md:pb-10 text-center`), адаптивные шрифты через `clamp()`, исключающие пересечение контента на любых разрешениях;
  - `components/gazeta/NichesStack.tsx`: оптимизированы внутренние паддинги (`p-4 pt-16 md:p-6 lg:p-7`, `p-5 md:p-7`), уменьшены вертикальные отступы списка сервисов (`space-y-2 md:space-y-3`, компактные `p-2.5 sm:p-3.5` в телах карточек), добавлен безопасный отступ снизу `pb-1` для кнопок «Обсудить задачу» и ссылок на услуги.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY` (https://breus-media-v2-n5nib3yn2-tony-breus-projects.vercel.app/gazeta).

✅ Gazeta RU & EN Hero CTA, About GEO Answer Capsule & Floating WhatsApp Button (2026-08-25)
- Контекст:
  - Добавление прямого конверсионного CTA в Hero-экран;
  - GEO-оптимизация секции «Об агентстве» для Google AI Overviews;
  - Добавление плавающей кнопки WhatsApp (FAB) и Schema JSON-LD микроразметки;
  - Глобальный запрет индексации Preview/Staging (`robots: { index: false, follow: false }`).
- Сделано:
  - `app/layout.tsx`: добавлен метатег `robots: { index: false, follow: false }`;
  - `components/gazeta/HeroSection.tsx`: добавлена кнопка WhatsApp в Hero (RU/EN, стилизация `border-[#D4AF37]/60 bg-[#D4AF37]/15`);
  - `components/gazeta/AboutSection.tsx` & `components/gazeta/NichesStack.tsx`: синхронизированы GEO-абзацы с ключевыми сущностями (Тбилиси, Грузия, 4K дрон, 360, Reels, AI) на русском и английском языках;
  - `components/gazeta/FloatingWhatsAppButton.tsx`: создан компонент плавающей кнопки (52×52px, `#25D366`, пульсация) и интегрирован в `GazetaLandingPage.tsx`;
  - `app/gazeta/page.tsx` & `app/gazeta/en/page.tsx`: внедрены схемы `LocalBusiness` и `Service` с каталогом предложений и валютой `GEL`.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅ (0 ошибок, 98/98 страниц);
  - Vercel Preview деплой -> ✅ `READY`.

✅ Gazeta EN services translation & target offset & terminal screen spacing (2026-06-08)
- Контекст:
  - пользователь заметил, что заголовки и сервисы на английской странице остались на русском (особенно в "Agency");
  - при клике на бегущей строке открывались соседние карточки из-за нехватки offset в скролле;
  - финальный экран с контактной формой и футером имел слишком большой промежуток.
- Сделано:
  - `components/gazeta/NichesStack.tsx`: добавлен английский перевод для "Agency" (heading, subheading, introNote, services) в `nicheEnCopy`;
  - `components/gazeta/NichesStack.tsx`: `nichesEn` теперь использует `canonicalServicesByNicheIdEn` для отображения переведённых сервисов в слайдере карточек;
  - `components/gazeta/NichesStack.tsx`: `targetProgress` в `scrollToNicheStep` изменён с `+ 0.1` на `+ 0.5`, чтобы безопасно попадать в середину зоны 100%-ной видимости целевой карточки;
  - `components/drone/DroneContactStitch.tsx`: добавлен проп `className` для секции;
  - `components/gazeta/NichesStack.tsx`: в `FormCard` `DroneContactStitch` получает `!pb-0`, убрана высота `h-full` и `mt-auto`, вместо этого задан фиксированный отступ `mt-10` (40px) перед `GazetaMinimalFooter` для достижения идеального vertical spacing.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser: EN сервисы теперь переведены, "Agency" имеет английские тексты.
  - Browser: бегущая строка точно позиционирует нужную карточку.
  - Browser: терминальный экран имеет аккуратный зазор в 40px между формой и футером.

✅ Gazeta EN localization, language switcher & ticker sync (2026-06-08)
- Контекст:
  - пользователь заметил, что переключатель языка инвертирован (при активном EN показывается RU и наоборот);
  - в `NichesStack` на `/gazeta/en` карточки рендерятся на русском;
  - бегущая строка сбивалась на один шаг (при клике на "Автобизнес" открывались "Рестораны") из-за того, что скролл останавливался точно на старте анимации, где целевая карточка еще внизу (y: 100%), а предыдущая видна.
- Сделано:
  - `components/gazeta/SmartHeader.tsx`: переключатель теперь отображает текущую `routeLanguage` (показывает активный язык корректно).
  - `components/gazeta/NichesStack.tsx`: карточки рендерятся через `localizedNiches = lang === "en" ? nichesEn : niches`.
  - `components/gazeta/NichesStack.tsx`: в `scrollToNicheStep` добавлен оффсет `+ 0.1` (`(clampedIndex + 0.1) / totalSteps`), чтобы скролл останавливался на 10% шага внутрь анимации. Это гарантирует, что целевая карточка полностью видима, и активный пункт в хедере обновляется корректно.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser: клик по бегущей строке корректно позиционирует карточки;
  - Browser: `/gazeta/en` переведён на английский (карточки используют nichesEn);
  - Browser: переключатель языка корректно отображает текущую локаль.

✅ Auto L2 cleanup: удалена внутренняя hero-marquee строка (2026-05-27)
- Контекст:
  - пользователь выделил на `/auto-service` внутреннюю бегущую строку `Автосалоны / дилерские центры / автоплощадки / детейлинг` и попросил удалить её.
- Сделано:
  - в `constants/l2DirectionConfigs.ts` для `autoService.data.sectionOrder` удалён пункт `marquee`;
  - верхняя общая navigation/header ticker строка не тронута;
  - после контрольной проверки сохранены предыдущие состояния соседних L2: `/restaurants-service` без внутренней marquee, `/tourism-service` с прежней marquee.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts app/auto-service/page.tsx components/l2-direction/L2DirectionRenderer.tsx` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/auto-service`:
    - выделенная hero-marquee строка отсутствует;
    - после hero остаётся список направлений и далее блок `Услуги для автобизнеса и автообъектов`.

✅ Restaurants L2 pricing cards: убрана фраза «по задаче» (2026-05-27)
- Контекст:
  - пользователь выделил область карточек на `/restaurants-service` и попросил убрать фразу `ПО ЗАДАЧЕ`.
- Сделано:
  - в `constants/l2DirectionConfigs.ts` у четырёх restaurant pricing plans поле `price` очищено;
  - в `components/l2-direction/L2DirectionSections.tsx` пустой `plan.price` теперь не рендерит ценовую строку;
  - в `Monthly Content Pack` пункт `тексты по задаче` заменён на `тексты под выбранный формат`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts components/l2-direction/L2DirectionSections.tsx app/restaurants-service/page.tsx` -> ✅, только существующие `<img>` warnings;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/restaurants-service#pricing`: в pricing-секции фразы `по задаче` больше нет.

✅ Restaurants L2 language switcher: EN ведёт на английскую страницу (2026-05-27)
- Контекст:
  - пользователь отметил кнопку `EN` на `/restaurants-service` и попросил, чтобы клик вёл на `http://localhost:3200/restaurants-service/en`.
- Сделано:
  - в `app/restaurants-service/page.tsx` переданы `languageLinks={{ ru: '/restaurants-service', en: '/restaurants-service/en' }}`;
  - в `components/gazeta/SmartHeader.tsx` верхний language pill при наличии `languageLinks` показывает другой доступный язык и становится прямой ссылкой;
  - для страниц без `languageLinks` сохранено старое поведение кнопки/выпадающего меню.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/restaurants-service/page.tsx app/restaurants-service/en/page.tsx components/gazeta/SmartHeader.tsx components/l2-direction/L2DirectionRenderer.tsx` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser/DOM:
    - на `/restaurants-service` верхний переключатель рендерится как ссылка `EN` с `href="/restaurants-service/en"`;
    - прямой route `/restaurants-service/en` открывается и показывает EN metadata/page.

✅ L2 restaurants cleanup: удалена внутренняя hero-marquee строка (2026-05-27)
- Контекст:
  - пользователь выделил в браузере на `/restaurants-service` вторую бегущую строку внутри hero-зоны и попросил: «убери эту строку».
- Сделано:
  - в `constants/l2DirectionConfigs.ts` для `restaurantsService.data.sectionOrder` удалён пункт `marquee`;
  - верхняя общая навигационная бегущая строка не тронута;
  - аналогичная секция у `/hotels-service` сохранена после контрольной проверки.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts app/restaurants-service/page.tsx app/restaurants-service/en/page.tsx` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/restaurants-service`:
    - выделенная hero-marquee строка отсутствует;
    - после hero остаётся список направлений и далее блок `Форматы контента для ресторанов`;
    - верхняя навигация/header ticker сохранены.

✅ L2 English translation: /restaurants-service/en (2026-05-16)
- Контекст:
  - пользователь попросил делать следующую L2-страницу после `/ai-visualization-service/en`;
  - следующей по `site-docs/l2-english-translation-log.md` выбрана `/restaurants-service/en`.
- Сделано:
  - создан route `app/restaurants-service/en/page.tsx`;
  - в `constants/l2DirectionConfigs.en.ts` добавлен `restaurantsServiceEnConfig`;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, earn/lose, deliverables, why us, pricing, pricing add-ons, process, conditions note, FAQ, related links и contact;
  - русская `/restaurants-service` получила alternate link на `/restaurants-service/en`;
  - EN related links оставлены только на существующие routes, чтобы не создавать 404;
  - EN `Service` JSON-LD содержит 8 catalog items и 4 pricing offers.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/restaurants-service/en/page.tsx app/restaurants-service/page.tsx constants/l2DirectionConfigs.en.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/restaurants-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/restaurants-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - Service schema: 8 catalog items, 4 pricing offers;
    - 4 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/tourism-service/en`.

✅ L2 English translation: /ai-visualization-service/en (2026-05-16)
- Контекст:
  - пользователь попросил делать следующую L2-страницу после `/reels-service/en`;
  - следующей по `site-docs/l2-english-translation-log.md` выбрана `/ai-visualization-service/en`.
- Сделано:
  - создан route `app/ai-visualization-service/en/page.tsx`;
  - в `constants/l2DirectionConfigs.en.ts` добавлен `aiVisualizationServiceEnConfig`;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, earn/lose, deliverables, why us, pricing, pricing add-ons, process, conditions note, FAQ, related links и contact;
  - русская `/ai-visualization-service` получила alternate link на `/ai-visualization-service/en`;
  - EN related links оставлены только на существующие routes, чтобы не создавать 404;
  - EN `Service` JSON-LD содержит 8 catalog items и 4 pricing offers.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/ai-visualization-service/en/page.tsx app/ai-visualization-service/page.tsx constants/l2DirectionConfigs.en.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/ai-visualization-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/ai-visualization-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - Service schema: 8 catalog items, 4 pricing offers;
    - 4 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/restaurants-service/en`.

✅ L2 English translation: /reels-service/en (2026-05-16)
- Контекст:
  - пользователь попросил делать следующую L2-страницу после `/360-tours-service/en`;
  - следующей по `site-docs/l2-english-translation-log.md` выбрана `/reels-service/en`.
- Сделано:
  - создан route `app/reels-service/en/page.tsx`;
  - в `constants/l2DirectionConfigs.en.ts` добавлен `reelsServiceEnConfig`;
  - сохранена механика `cards=soft/aggressive` из русской `/reels-service`;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, deliverables, why us, pricing, pricing add-ons, process, conditions note, FAQ, related links и contact;
  - русская `/reels-service` получила alternate link на `/reels-service/en`;
  - EN related links оставлены только на существующие routes, чтобы не создавать 404;
  - EN `Service` JSON-LD содержит 8 catalog items и 3 pricing offers.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/reels-service/en/page.tsx app/reels-service/page.tsx constants/l2DirectionConfigs.en.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/reels-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/reels-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - Service schema: 8 catalog items, 3 pricing offers;
    - 3 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/ai-visualization-service/en`.

✅ L2 English translation: /360-tours-service/en (2026-05-16)
- Контекст:
  - пользователь попросил переводить следующую L2-страницу после `/real-estate-service/en`;
  - следующей по `site-docs/l2-english-translation-log.md` выбрана `/360-tours-service/en`.
- Сделано:
  - создан route `app/360-tours-service/en/page.tsx`;
  - в `constants/l2DirectionConfigs.en.ts` добавлен `tours360ServiceEnConfig`;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, why us, pricing, pricing add-ons, process, conditions note, FAQ, related links и contact;
  - русская `/360-tours-service` получила alternate link на `/360-tours-service/en`;
  - EN related links оставлены только на существующие routes, чтобы не создавать 404;
  - EN `Service` JSON-LD содержит 6 catalog items и 3 pricing offers.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/360-tours-service/en/page.tsx app/360-tours-service/page.tsx constants/l2DirectionConfigs.en.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/360-tours-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/360-tours-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - Service schema: 6 catalog items, 3 pricing offers;
    - 3 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/reels-service/en`.

✅ L2 English translation: /real-estate-service/en (2026-05-16)
- Контекст:
  - пользователь попросил приступить к переводу `/real-estate-service/en`.
- Сделано:
  - создан route `app/real-estate-service/en/page.tsx`;
  - в `constants/l2DirectionConfigs.en.ts` добавлен `realEstateServiceEnConfig`;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, earn/lose, deliverables, why us, pricing, process, FAQ, related links и contact;
  - русская `/real-estate-service` получила alternate link на `/real-estate-service/en`;
  - EN related links оставлены только на существующие routes, чтобы не создавать 404;
  - обновлён `site-docs/l2-english-translation-log.md`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/real-estate-service/en/page.tsx app/real-estate-service/page.tsx constants/l2DirectionConfigs.en.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/real-estate-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/real-estate-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - 4 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/360-tours-service/en`.

✅ L2 English translation pilot: /hotels-service/en (2026-05-16)
- Контекст:
  - пользователь попросил приступить к переводу первой L2-страницы на английский;
  - первым пилотом выбран `/hotels-service/en`.
- Сделано:
  - создан route `app/hotels-service/en/page.tsx`;
  - создан `constants/l2DirectionConfigs.en.ts`;
  - добавлен `hotelsServiceEnConfig` с адаптированной English marketing copy;
  - переведены hero, hero cards, services, stats, mid CTA, explanatory blocks, pain/solution, deliverables, why us, pricing, process, FAQ, related links и contact;
  - `L2DirectionRenderer` получил поддержку:
    - `initialLang`;
    - `languageLinks`;
    - английского footer;
    - передачи `lang="en"` в contact;
  - mobile services list получил EN labels вместо `Направления` / `смотреть карточки`;
  - `DroneFooterStitchEn` временно ведёт на существующие routes вместо будущих `/en` pages, чтобы не создавать 404;
  - русская `/hotels-service` получила alternate link на `/hotels-service/en`;
  - создан `site-docs/l2-english-translation-log.md`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - focused ESLint по затронутым файлам -> ✅ with existing `next/no-img-element` warnings only;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser `http://localhost:3200/hotels-service/en`:
    - title/H1 на английском;
    - canonical `https://breus.media/hotels-service/en`;
    - hreflang `ru` и `en`;
    - JSON-LD: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - 4 pricing CTA `Discuss this package →`;
    - mobile 390 без horizontal overflow;
    - кириллицы в видимом тексте нет;
    - внутренние ссылки -> `200`.
- Следующий рекомендуемый перевод:
  - `/real-estate-service/en`.

✅ /drone-service/en single ticker parity (2026-05-16)
- Контекст:
  - пользователь открыл `http://localhost:3200/drone-service/en` и увидел две бегущие строки;
  - русская `/drone-service` является эталоном и использует одну бегущую строку.
- Причина:
  - в `app/drone-service/page.en.tsx` `SmartHeader` не получал `singleTickerMode={true}`;
  - поэтому EN-страница рендерила стандартный двухстрочный ticker.
- Сделано:
  - в `app/drone-service/page.en.tsx` импортирован `gazetaDroneServiceTickerExcludeTexts`;
  - в `SmartHeader` EN-страницы добавлены:
    - `singleTickerMode={true}`;
    - `tickerExcludeTexts={gazetaDroneServiceTickerExcludeTexts}`;
  - `Promo Video` исключён из EN ticker так же, как в RU-эталоне.
- Не менялось:
  - контент страницы;
  - структура секций;
  - pricing;
  - schema.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/drone-service/page.en.tsx` -> ✅ with existing warnings only;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser: `http://localhost:3200/drone-service/en` открыт, ticker приведён к одной строке.

✅ L2 pricing CTA standardization (2026-05-16)
- Контекст:
  - пользователь решил оставить кнопки в pricing cards везде как на `/drone-service`;
  - эталонный CTA: `Обсудить этот пакет →`.
- Сделано:
  - в `constants/l2DirectionConfigs.ts` pricing card CTA активных L2 приведены к единому тексту:
    - `/real-estate-service`;
    - `/hotels-service`;
    - `/restaurants-service`;
    - `/tourism-service`;
    - `/clinics-service`;
    - `/auto-service`;
    - `/ai-visualization-service`;
    - `/reels-service`;
    - `/360-tours-service`.
  - hero/sticky/mobile CTA не менялись и остаются page-specific;
  - `/drone-service`, `/promo-video-service` и `/business-service` не редактировались.
- Документы:
  - обновлены `site-docs/l2-final-consistency-report.md`;
  - обновлены `site-docs/l2-seo-cro-audit.md`;
  - обновлены `site-docs/l2-parity-implementation-log.md`;
  - обновлён `CHANGELOG_ARCHIVE.md`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - Browser DOM spot-check:
    - `/auto-service`: 4 CTA `Обсудить этот пакет →`;
    - `/hotels-service`: 4 CTA `Обсудить этот пакет →`;
    - `/reels-service`: 3 CTA `Обсудить этот пакет →`.
- Следующий возможный шаг без `/drone-service`:
  - решить, включаем ли `/business-service` в активный L2-набор. `/promo-video-service` остаётся исключением.

✅ L2 related links enrichment: auto + 360 tours (2026-05-16)
- Контекст:
  - пользователь попросил приступить к пункту 1: расширить related links у `/auto-service` и `/360-tours-service`.
- Сделано:
  - `/auto-service` related links пересобраны в 8 профильных service routes:
    - `/drone-service`;
    - `/drone-services/drone-auto`;
    - `/reels-service`;
    - `/reels-promo/reels-auto`;
    - `/360-tours-service`;
    - `/360-tour-auto`;
    - `/ai-visualization-service`;
    - `/ai-visual/ai-auto`.
  - из `/auto-service` убраны слабые related links на `#contact` и Gazeta-направление;
  - `/360-tours-service` расширен до 8 related links:
    - добавлены `/360-tour-auto`;
    - добавлены `/360-tour-business`;
  - `constants/l2DirectionConfigs.ts` очищен от неиспользуемого destructuring `gazetaDetailRoutes`, оставлен `droneService`.
- Документы:
  - обновлены `site-docs/l2-final-consistency-report.md`;
  - обновлены `site-docs/l2-parity-implementation-log.md`;
  - обновлён `CHANGELOG_ARCHIVE.md`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - browser route check на `localhost:3200`: все добавленные и затронутые routes -> `200`.
- Следующий возможный шаг без `/drone-service`:
  - copywriting-полировка микро-CTA в pricing cards.

✅ Ticker hover preview stuck overlay fix (2026-05-16)
- Контекст:
  - пользователь показал баг на `http://localhost:3200/ai-visualization-service`;
  - после клика по `AI Content` в бегущей строке открывалась cinematic-заставка `AI CONTENT`, которая зависала поверх страницы и закрывалась только refresh.
- Причина:
  - бегущая строка ставила `hoveredService` в общий `useHeroStore`;
  - при клике по ссылке `onMouseLeave` мог не успеть сбросить hover перед route transition;
  - новая L2-страница монтировалась уже с сохранённым `hoveredService`, поэтому overlay оставался поверх интерфейса.
- Изменено:
  - `store/useHeroStore.ts`:
    - добавлен `dismissHoverPreview`;
    - добавлено короткое suppression-window, чтобы preview не открывался заново сразу после закрытия/клика.
  - `components/gazeta/SmartHeader.tsx`:
    - hover-preview сбрасывается при смене pathname;
    - ticker links сбрасывают preview на `pointerdown`/`click`.
  - `components/gazeta/MarqueeSection.tsx`:
    - preview закрывается кликом по затемнению;
    - добавлен безопасный close-handler для cinematic overlay.
- Проверки:
  - Browser: `/drone-service` -> click `AI Content` в ticker -> `/ai-visualization-service`, overlay не залипает;
  - Browser: открытый preview закрывается кликом по затемнению;
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint store/useHeroStore.ts components/gazeta/SmartHeader.tsx components/gazeta/MarqueeSection.tsx` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅.
- Не менялось:
  - L2-контент;
  - структура секций;
  - schema.

✅ /360-tours-service schema unification (2026-05-16)
- Контекст:
  - пользователь попросил приступить к унификации schema;
  - цель: привести `/360-tours-service` к общему L2-паттерну `Service.hasOfferCatalog`, не меняя визуальную страницу.
- Изменено:
  - `app/360-tours-service/page.tsx`:
    - в `Service` JSON-LD добавлен `hasOfferCatalog`;
    - catalog строится из `config.data.services`, 6 видимых направлений;
    - существующие 3 pricing `offers` сохранены.
  - обновлены документы:
    - `site-docs/l2-seo-cro-audit.md`;
    - `site-docs/l2-final-consistency-report.md`;
    - `site-docs/l2-parity-implementation-log.md`;
    - `CHANGELOG_ARCHIVE.md`.
- Не менялось:
  - визуальная структура страницы;
  - `/drone-service`;
  - `/promo-video-service`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint app/360-tours-service/page.tsx` -> ✅;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - runtime schema check: `hasOfferCatalog = true`, catalog items `6`, pricing offers `3`.
- Следующие возможные шаги без `/drone-service`:
  - расширить related links `/auto-service` и `/360-tours-service` до 7-8 ссылок;
  - пройти copywriting-полировку микро-CTA в pricing cards.

✅ /ai-visualization-service CTA polish (2026-05-16)
- Контекст:
  - пользователь выбрал пункт `1` из предложенных следующих правок;
  - цель: заменить общий CTA `/ai-visualization-service` с `Обсудить задачу` на более предметную AI-формулировку.
- Изменено:
  - `constants/l2DirectionConfigs.ts`:
    - `heroPrimaryCtaLabel`: `Обсудить AI-визуализацию`;
    - hero cards secondary CTA: `Обсудить AI-формат`;
    - services secondary CTA: `Обсудить AI-формат`;
    - mid CTA button: `Подобрать AI-формат`;
  - `site-docs/l2-seo-cro-audit.md`: `/ai-visualization-service` теперь CTA/CRO `Усилен`;
  - `site-docs/l2-parity-implementation-log.md`: добавлена Phase 6 AI CTA polish;
  - `CHANGELOG_ARCHIVE.md`: добавлена запись за 2026-05-16.
- Не менялось:
  - структура секций;
  - schema;
  - `/promo-video-service`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint constants/l2DirectionConfigs.ts` -> ✅ with warnings only.
- Следующий возможный пункт:
  - пункт 2: расширить видимый FAQ `/drone-service` до 10-12 вопросов.

✅ L2 consistency pass: related links, AI CTA, contact preselect (2026-05-16)
- Контекст:
  - пользователь выбрал пункты `2,3,4,5` из предложенного списка без изменения `/drone-service`;
  - `/promo-video-service` остаётся исключением.
- Документ:
  - создан `site-docs/l2-final-consistency-report.md`.
- Сделано:
  - проверен AI CTA `Обсудить AI-визуализацию` на production mobile widths `360 / 375 / 390`;
  - horizontal overflow отсутствует;
  - related links всех активных L2 проверены, missing routes `0`;
  - `DroneContactStitch` теперь резолвит `preselectedServices` по id и по точному видимому chip label;
  - добавлены/уточнены category chips и preselect:
    - restaurants -> `Рестораны`;
    - tourism -> `Туризм`;
    - clinics -> `Клиники`;
    - auto -> `Автобизнес`;
    - AI -> `AI-визуализация`;
    - 360 tours -> `360° тур`.
- Browser production check:
  - все 9 активных L2 имеют ожидаемый активный preselected chip;
  - `/ai-visualization-service` CTA и `Обсудить AI-формат` не выходят за viewport.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - `npx eslint components/drone/DroneContactStitch.tsx constants/l2DirectionConfigs.ts` -> ✅ with warnings only;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅.
- Следующие шаги без `/drone-service`:
  - унифицировать schema style `/360-tours-service` через `hasOfferCatalog`;
  - расширить related links `/auto-service` и `/360-tours-service` до 7-8 ссылок.

✅ L2 SEO/schema + CTA/CRO audit (2026-05-15)
- Контекст:
  - пользователь попросил приступить к пунктам `1` и `2`: SEO/schema-аудит всех L2 и CTA/CRO-аудит L2;
  - `/drone-service` остаётся эталоном;
  - `/promo-video-service` остаётся исключением и не редактировался.
- Документ:
  - создан `site-docs/l2-seo-cro-audit.md`;
  - обновлён `site-docs/l2-parity-implementation-log.md`;
  - обновлён `CHANGELOG_ARCHIVE.md`.
- Что сделано:
  - `/drone-service` получил `FAQPage` JSON-LD из видимого FAQ;
  - FAQ-данные вынесены в `components/drone/droneFaqData.ts`;
  - `DroneFAQExpanded` теперь использует этот общий источник;
  - related links `/drone-service` расширены на активные L2: real estate, hotels, restaurants, tourism, clinics, auto;
  - `/reels-service` Service schema получила `hasOfferCatalog` и pricing `offers`;
  - real estate, hotels, restaurants, tourism, clinics и AI visualization получили явные `twitter.title` / `twitter.description`;
  - `L2DirectionRenderer` теперь берёт sticky/mobile CTA label из `heroPrimaryCtaLabel`.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - focused eslint по затронутым L2/SEO/CTA файлам -> ✅ with warnings only;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - production check на `http://127.0.0.1:3210` через Playwright:
    - `/drone-service` schema types: `Organization`, `Service`, `BreadcrumbList`, `FAQPage`, `ItemList`;
    - активные L2 schema types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - `/reels-service` `Service.hasOfferCatalog = true`, pricing `offers = 3`;
    - sticky/mobile CTA на активных L2 используют page-specific labels.
- Следующие возможные правки:
  - заменить CTA `/ai-visualization-service` с `Обсудить задачу` на более точный вариант;
  - расширить видимый FAQ `/drone-service` до 10-12 вопросов отдельным copywriting-проходом;
  - унифицировать schema style `/360-tours-service` с остальными L2, если нужен единый `hasOfferCatalog`.

✅ L2 visual polish: mobile hero density + CTA visibility (2026-05-15)
- Контекст:
  - пользователь выбрал `Вариант 1 — визуальная полировка всех L2`;
  - задача: проверить L2 после структурных правок на mobile `360 / 375 / 390` и desktop, найти длинные заголовки, плотные блоки, странные переносы и перегруз.
- Проверенные активные L2:
  - `/real-estate-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/tourism-service`
  - `/clinics-service`
  - `/auto-service`
  - `/ai-visualization-service`
  - `/reels-service`
  - `/360-tours-service`
- `/promo-video-service` не редактировался.
- Найдено:
  - в dev-mode видны красные `DebugWrapper` лейблы, поэтому финальная визуальная проверка должна идти через production build с `NEXT_PUBLIC_DEBUG_MODE=false`;
  - на `360px` длинные L2 hero с тремя lead-параграфами были слишком плотными;
  - на `/real-estate-service` CTA почти уходил под fixed mobile bottom bar.
- Исправлено:
  - `components/l2-direction/L2DirectionSections.tsx`: в карточном L2 hero на mobile показывается только первый `heroLeadParagraph`, остальные появляются с `md` и выше;
  - desktop сохраняет полный объём lead-текста;
  - mobile hero стал легче, CTA лучше помещается над bottom bar;
  - `constants/l2DirectionConfigs.ts`: `/reels-service` `pricingAddOns` переименован с `Что бизнес выигрывает` на `Что влияет на формат и стоимость Reels`, пункты переписаны под факторы формата/стоимости.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - focused eslint по L2 config/sections/renderer/types -> ✅ with warnings only;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅;
  - production server: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3210 npm run start`;
  - mobile `360px`: hero-экраны активных L2 просмотрены визуально;
  - mobile `375px` и `390px`: smoke-check на чувствительных длинных hero;
  - console errors `0`;
  - временные screenshot-файлы удалены.
- Итог:
  - длинные mobile hero стали легче;
  - CTA на real estate теперь полностью виден на `360px`;
  - Reels add-ons теперь соответствует месту в структуре.

✅ Phase 3 L2 parity: сильные L2 выровнены под `/drone-service` (2026-05-15)
- Контекст:
  - это продолжение L2 parity audit;
  - `/drone-service` остаётся эталоном структуры;
  - `/promo-video-service` остаётся исключением и не редактировался.
- Затронутый основной файл:
  - `constants/l2DirectionConfigs.ts`
- Документация:
  - `site-docs/l2-parity-implementation-log.md` обновлён;
  - Phase 3 переведена в `completed`.
- Страницы Phase 3:
  - `/real-estate-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/tourism-service`
  - `/clinics-service`
  - `/ai-visualization-service`
  - `/reels-service`
  - `/360-tours-service`
- Что сделано:
  - на все 8 сильных L2 добавлен `conditionsNote`;
  - заполнены пустые `trustBadges` для hotels, tourism, clinics, real estate, AI visualization, Reels и 360 tours;
  - добавлены `pricingAddOns` для hotels, restaurants, tourism и real estate;
  - существующие `pricingAddOns` включены в `sectionOrder` для clinics и AI visualization;
  - порядок секций `/reels-service` и `/360-tours-service` выровнен ближе к эталонной цепочке: content blocks → whyUs → pricing → add-ons → process → conditionsNote → FAQ.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - focused eslint по `constants/l2DirectionConfigs.ts`, L2 renderer/sections/types -> ✅ with warnings only;
  - `http://localhost:3200` поднят через `npm run dev`;
  - HEAD checks вернули `200` для всех 8 Phase 3 L2 и `/promo-video-service`;
  - Playwright desktop DOM sweep: новый `conditionsNote` найден на всех 8 страницах, console errors `0`;
  - Playwright mobile DOM sweep на `390x844`: новый `conditionsNote` найден на всех 8 страницах, console errors `0`.
- Важно:
  - `/promo-video-service` не редактировался;
  - полный `npm run lint` ранее падал на unrelated/generated `.claude/worktrees/.next` и старые issues, поэтому использовался focused eslint;
  - следующий этап — Phase 4: улучшение эталона `/drone-service` (FAQ schema, related links, возможное расширение FAQ).

✅ Codex L2 parity audit + общий L2 parity layer + пилот `/auto-service` (запись добавлена 2026-05-15)
- Контекст задачи:
  - пользователь попросил сравнить все L2-страницы из бегущей строки с эталоном `/drone-service`;
  - цель — не делать одинаковый текст, а привести структуру, порядок, архитектуру секций и UX к единому стандарту;
  - `/promo-video-service` пользователь попросил пока не трогать и не использовать в текущем цикле.
- Документы:
  - создан аудит `site-docs/l2-drone-service-parity-audit.md`;
  - создан живой журнал внедрения `site-docs/l2-parity-implementation-log.md`;
  - в журнале фиксируются этапы, затронутые страницы, изменённые файлы, проверки и следующие шаги.
- Phase 1 / общий L2 parity layer:
  - `components/l2-direction/types.ts` расширен типом `L2ConditionsNoteConfig`;
  - в `L2SectionKey` добавлен ключ `conditionsNote`;
  - `L2DirectionDataConfig` получил optional `conditionsNote`;
  - в `components/l2-direction/L2DirectionSections.tsx` добавлены `L2DirectionMobileServicesList` и `L2DirectionConditionsNote`;
  - обычная L2 contact-форма получила `id="contact-form"` для корректного поведения mobile bottom bar;
  - в `components/l2-direction/L2DirectionRenderer.tsx` подключены `DroneStickyCta`, `MobileBottomBar`, mobile services list и `conditionsNote`;
  - parity layer включён только для разрешённых L2 schema keys;
  - `promo-video-service` намеренно не включён в parity layer.
- Phase 2 / пилот `/auto-service`:
  - `/auto-service` приведён ближе к структуре `/drone-service`;
  - добавлены 3 hero lead-параграфа и 6 hero cards;
  - задан полный `sectionOrder`: `marquee -> services -> socialProof -> midCta -> whatIsTour -> painSolutions -> earnLose -> deliverables -> whyUs -> pricing -> pricingAddOns -> process -> conditionsNote -> faq -> relatedLinks -> contact`;
  - добавлены custom marquee, `midCta`, `whatIsTour`, 6 `painSolutions`, `earnLose`, 10 deliverables, 6 why-us карточек;
  - pricing расширен до 4 пакетов: `Старт`, `Видео + Reels`, `Model showcase`, `Полная упаковка`;
  - добавлены 6 pricing add-ons и `conditionsNote` по подготовке автообъекта;
  - FAQ расширен до 12 вопросов;
  - related links расширены до 8;
  - включён `useDroneContact: true`.
- Schema / route-level:
  - `app/auto-service/page.tsx` получил route-level metadata;
  - добавлены JSON-LD `Service`, `FAQPage`, `BreadcrumbList`;
  - `L2DirectionRenderer` для `/auto-service` вызывается с `includeBaseJsonLd={false}`, чтобы не дублировать schema.
- Проверки:
  - `npx tsc --noEmit` -> ✅;
  - focused eslint по изменённым файлам -> ✅, только warnings (`next/no-img-element` и старые unused constants);
  - `curl -I http://localhost:3200/auto-service` -> `200 OK`;
  - browser check `/auto-service` -> без console warnings/errors;
  - snapshot подтвердил расширенную секционную цепочку и mobile bottom bar;
  - `/promo-video-service` проверен как исключение: не получил mobile services list / sticky CTA / mobile bottom bar.
- Важно:
  - полный `npm run lint` падает на unrelated/generated `.claude/worktrees/.next` и старые issues;
  - worktree был dirty до этой задачи, unrelated изменения не откатывались;
  - dev server был поднят на `http://localhost:3200`;
  - следующий этап — Phase 3: пройти сильные L2 и добрать `conditionsNote`, trust/add-ons и точечное выравнивание порядка секций.

✅ Gazeta + L2 service pages: кнопки, единая бегущая строка, hero-spacing и typewriter для заголовков (2026-05-06)
- Контекст задачи:
  - пользователь сравнивал `/drone-service` с остальными L2-страницами и попросил повторить удачные паттерны;
  - эталон для визуала: hero `/drone-service`, где крупный H1 не конфликтует с верхней бегущей строкой;
  - эталон для верхнего ticker: строка на `/drone-service` с одинаковым набором направлений;
  - эталон для анимации H1: запуск заголовка `/drone-service` через печатающую анимацию.
- Основные файлы:
  - `components/gazeta/NichesStack.tsx`
  - `constants/gazetaRoutes.ts`
  - `app/drone-service/page.tsx`
  - `components/l2-direction/L2DirectionRenderer.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
  - `constants/l2DirectionConfigs.ts`
  - `app/gazeta/[slug]/page.tsx`
- `/gazeta` / секции `05-12`:
  - добавлена такая же кнопка `Все услуги ...`, как в секции `02 Аэросъёмка`;
  - кнопка теперь показывается для секций `02-12`, если для ниши есть route второго уровня;
  - секция `12 IT` больше не исключается из генерации all-services card;
  - кнопки ведут на соответствующие страницы второго уровня из `gazetaNicheLandingRoutes`.
- Единая бегущая строка на L2:
  - в `constants/gazetaRoutes.ts` вынесен общий список исключений `gazetaDroneServiceTickerExcludeTexts`;
  - `/drone-service` использует этот список, чтобы убрать `Промо видео` / `Promo Video`;
  - `L2DirectionRenderer` включает `singleTickerMode` и тот же ticker-паттерн для:
    - `/ai-visualization-service`
    - `/real-estate-service`
    - `/hotels-service`
    - `/restaurants-service`
    - `/auto-service`
    - `/tourism-service`
    - `/clinics-service`
  - `/gazeta/it` получил такой же header ticker через dynamic route `app/gazeta/[slug]/page.tsx`.
- Hero / конфликт заголовка с ticker:
  - в `L2DirectionSections.tsx` исправлен общий layout hero для L2-страниц с карточным hero;
  - увеличены верхние отступы под sticky header/ticker;
  - карточный hero теперь стартует сверху (`items-start`) и становится двухколоночным только на `xl`;
  - длинные H1 получили более спокойные desktop font-size;
  - длинный заголовок `/ai-visualization-service` разбит через `heroDisplayTitle` / `heroDesktopDisplayTitle`, чтобы не упираться в ticker.
- Typewriter для L2-заголовков:
  - в `L2DirectionHero` добавлены `TYPEWRITER_INTERVAL_MS` и `TYPEWRITER_NEWLINE_PAUSE_MS`;
  - H1 теперь печатается по символам для mobile и desktop display-title;
  - добавлен пульсирующий gold cursor `|` на последней набираемой строке;
  - анимация учитывает разные mobile/desktop версии заголовка и паузу на переносах строк;
  - поведение сделано в общем L2-компоненте, чтобы повторять эффект `/drone-service` на страницах второго уровня.
- Проверки, выполненные по ходу:
  - `npm run build` после code changes -> ✅;
  - browser/DOM check для ticker подтвердил одинаковую строку на `/drone-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service`, `/restaurants-service`, `/auto-service`, `/tourism-service`, `/clinics-service`, `/gazeta/it`;
  - browser screenshots проходили по L2-страницам и подтвердили, что H1 больше не перекрывается бегущей строкой.
- Важно:
  - worktree уже был dirty до этих правок; не откатывать чужие изменения;
  - после typewriter-правки `next start` на `localhost:3200` нужно перезапустить, если открыт старый production server;
  - eslint по `components/gazeta/NichesStack.tsx` может падать на старые pre-existing `react-hooks/set-state-in-effect`, не связанные с кнопками `Все услуги`;
  - debug overlays в IAB могут быть видны из-за активного `DebugWrapper`, это не часть клиентского UI в обычном режиме.

✅ /clinics-service: L2 industry hub для клиник и medical / beauty / wellness направлений собран через общий L2 renderer (2026-05-05)
- Основные файлы:
  - `app/clinics-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба Breus Media;
  - `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service`, `/restaurants-service`, `/tourism-service` использованы как технический ориентир config-first через `L2DirectionRenderer`;
  - источник контента: `/Users/lika/Downloads/_clinics-service.md`;
  - пользовательский бриф имел приоритет над source export;
  - цель: `/clinics-service` — L2 industry hub для клиник, стоматологий, медицинских центров, beauty, wellness, косметологии и частных специалистов, а не single-service page и не только “видеопродакшн для клиник”.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - canonical: `https://breus.media/clinics-service`;
  - locale: `ru_GE`;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - `Service.provider` ссылается на `https://breus.media/#organization`;
  - stats/evidence не добавлялись в schema.
- Фактический порядок секций `/clinics-service`:
  - hero
  - marquee
  - services
  - socialProof / `Клиники в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - pricingAddOns
  - process
  - faq
  - relatedLinks
  - contact
- Hero и навигация:
  - H1: `Контент для клиник и медицинских центров в Тбилиси`;
  - subtitle: видео, Reels, фото, 360° туры и AI-описания для клиник, стоматологий, эстетических центров, beauty и wellness-направлений в Тбилиси и Грузии;
  - CTA: `Обсудить клинику` -> `#contact`, `Посмотреть форматы` -> `#services`;
  - SmartHeader links: `Услуги`, `Цены`, `Процесс`, `FAQ`;
  - добавлены 6 rotating hero cards: видео клиники, Reels для врача, 360° тур клиники, фото пространства, контент для услуг, AI-описания и FAQ.
- Ticker / marquee:
  - custom ticker: `Клиники`, `стоматологии`, `медицинские центры`, `beauty`, `wellness`, `косметология`, `Reels`, `360° туры`, `фото кабинетов`, `видео врача`, `Google Maps`, `сайт клиники`, `Instagram`, `TikTok`, `FAQ`, `AI-описания`, `RU`, `EN`, `KA`, `Тбилиси`, `Грузия`.
- Services grid:
  - 8 форматов:
    - `Видео клиники`;
    - `Reels для врача и клиники` -> `/reels-service`;
    - `360° тур клиники` -> `/360-tours-service`;
    - `Фото пространства и команды`;
    - `Контент для услуг и процедур`;
    - `AI-описания и FAQ для сайта` -> `/ai-visualization-service`;
    - `Контент для Google Maps`;
    - `Monthly Clinic Content Pack`.
- Stats/evidence:
  - блок `Клиники в цифрах` сделан через `StatsEvidenceStrip` в dark/gold паттерне `DroneStatsStrip`;
  - stats не добавлены в schema;
  - verified `sourceUrl` для clinics stats не найден;
  - использован safe fallback без ссылок:
    - `До визита` / patient researches clinic before visit;
    - `1 ссылка` / content reuse for site, messenger and consultation;
    - `RU / EN / KA` / localization context;
    - `4 канала` / site, Google Maps, social media, ads;
  - добавлен видимый disclaimer: цифры и сигналы показывают рыночный контекст, а не гарантию записей, заявок или результата для конкретной клиники.
- Content sections:
  - `Не уверены, что нужно клинике первым?` mid CTA;
  - `Не просто съёмка кабинетов, а понятная упаковка первого визита`;
  - 6 painSolutions без technical labels `Pain` / `Solution`;
  - `Что выигрывает клиника` через `earnLose`;
  - compact deliverables на 10 пунктов;
  - 6 why-us карточек.
- Pricing:
  - все пакеты без жёстких цен, только `по задаче`;
  - `Clinic Starter Pack`;
  - `Doctor & Reels Pack`;
  - `Clinic Space Pack`;
  - `Monthly Clinic Content Pack`;
  - сроки не указаны;
  - добавлен `pricingAddOns` / pricing note: финальная цена зависит от количества кабинетов, врачей, услуг, форматов, языков, локаций, необходимости 360° тура и объёма подготовки.
- Process:
  - 5 шагов: `Бриф`, `Выбор формата`, `Подготовка клиники`, `Съёмка / производство`, `Упаковка и передача`.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - Short Q&A не добавлялся;
  - ответы без гарантий роста, записей, продаж, медицинского результата и без фиксированных сроков.
- Related links валидированы по реальным routes:
  - `/drone-service`
  - `/360-tours-service`
  - `/reels-service`
  - `/ai-visualization-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/tourism-service`
  - `/real-estate-service`
  - `/360-tour-clinics`
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужен контент для клиники?`;
  - `preselectedServices: ['clinics']`;
  - service chips: видео клиники, Reels для врача, 360° тур, фото кабинетов, Google Maps pack, AI-описания, FAQ для сайта, Monthly pack.
- Контентные ограничения:
  - не используется город Батуми;
  - не используется `breusmedia.com`;
  - нет fake `sourceUrl`;
  - нет жёстких цен, сроков, медицинских обещаний, “до/после” как обещания результата, гарантий записей, заявок, продаж или результата процедур;
  - old clinic L3 links `/promo-video/promo-clinic` и `/reels-promo/reels-clinic` не используются в `/clinics-service`.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - Playwright visual check:
    - desktop;
    - mobile widths `360 / 375 / 390`;
    - временные screenshots после проверки удалены;
  - визуально проверены hero, ticker, services cards, `Клиники в цифрах`, pricing, FAQ, contact;
  - runtime/DOM check подтвердил `h1 = 1`, JSON-LD types `Organization / Service / FAQPage / BreadcrumbList`, `FAQPage = 14`, `Service.provider = https://breus.media/#organization`, ключевые anchors присутствуют, requested related routes присутствуют, fake source links отсутствуют.
- Важно:
  - перед задачей worktree уже был dirty;
  - в этом проходе целевые code edits были только в `app/clinics-service/page.tsx` и clinics-блоке `constants/l2DirectionConfigs.ts`;
  - общие L2-компоненты и `/drone-service` не редактировались;
  - TODO по stats: заменить safe fallback на verified stats только если появятся проверенные источники;
  - TODO по routes: новых clinic L3 не добавляли; `/360-tour-clinics` существует и включён как related L3.

✅ /hotels-service: L2 industry hub для отелей и hospitality собран через общий L2 renderer (2026-05-05)
- Основные файлы:
  - `app/hotels-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба Breus Media;
  - `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service` использованы как технический ориентир config-first через `L2DirectionRenderer`;
  - источник `hotels-service.html` локально не найден; использован доступный файл `/Users/lika/Downloads/hotels-service.md` вместе с пользовательским брифом;
  - цель: `/hotels-service` — L2 industry hub для отелей, апартаментов, курортных объектов, глэмпингов, гостевых домов и hospitality-бизнеса, а не страница одной услуги и не только “дрон для отелей”.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - canonical: `https://breus.media/hotels-service`;
  - locale: `ru_GE`;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - `Service.provider` ссылается на `https://breus.media/#organization`;
  - stats/evidence не добавлялись в schema.
- Фактический порядок секций `/hotels-service`:
  - hero
  - marquee
  - services
  - socialProof / `Отели в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - process
  - faq
  - relatedLinks
  - contact
- Hero и навигация:
  - H1: `Контент для отелей в Тбилиси и Грузии`;
  - subtitle: видео, аэросъёмка, 360° туры, Reels и AI-описания для отелей, апартаментов, гостевых домов и hospitality-бизнеса;
  - CTA: `Обсудить отель` -> `#contact`, `Посмотреть форматы` -> `#services`;
  - SmartHeader links: `Услуги`, `Цены`, `Процесс`, `FAQ`;
  - добавлены 6 rotating hero cards: видеотур отеля, аэросъёмка отеля, 360° тур, Reels для отеля, AI-описания, сезонный контент.
- Ticker / marquee:
  - включён `singleTickerMode`;
  - custom ticker: `Отели`, `апартаменты`, `гостевые дома`, `видеотуры`, `аэросъёмка`, `360° туры`, `Reels`, `AI-описания`, `Booking`, `Airbnb`, `сайт отеля`, `завтраки`, `номера`, `виды`, `территория`, `Тбилиси`, `Грузия`.
- Services grid:
  - 8 форматов:
    - `Видеотур отеля`;
    - `Аэросъёмка отеля и территории` -> `/drone-hotels-tourism`;
    - `360° тур для отеля` -> `/360-tour-hotels`;
    - `Reels и Shorts для отеля` -> `/reels-service`;
    - `Фото и listing pack`;
    - `AI-описания и локализация` -> `/ai-visualization-service`;
    - `Сезонный content pack`;
    - `Контент для ресторана при отеле` -> `/restaurants-service`.
- Stats/evidence:
  - блок `Отели в цифрах` сделан через `StatsEvidenceStrip` в dark/gold паттерне `DroneStatsStrip`;
  - stats не добавлены в schema;
  - использованы source-backed contextual stats:
    - TripAdvisor: больше фото в карточке связано с ростом booking inquiries;
    - Wyzowl Video Marketing Statistics 2026: 84% людей покупали или скачивали после просмотра видео;
    - Expedia Group Traveler Value Index 2025: 73% путешественников хотят бронировать проживание по лучшей цене;
    - CSA Research / Can't Read, Won't Buy: 76% потребителей предпочитают покупать товары с информацией на родном языке;
  - добавлен видимый disclaimer: цифры и сигналы показывают рыночный контекст, а не гарантию бронирований для конкретного объекта.
- Content sections:
  - `Не уверены, что нужно вашему отелю?` mid CTA;
  - `Не просто съёмка номеров, а упаковка гостевого опыта`;
  - 6 painSolutions без technical labels `Pain` / `Solution`;
  - `Что выигрывает отель` через `earnLose`;
  - compact deliverables на 9 пунктов;
  - 6 why-us карточек.
- Pricing:
  - все пакеты без жёстких цен, только `по задаче`;
  - `Hotel Listing Pack`;
  - `Hotel Video Pack`;
  - `Hotel 360 & Drone Pack`;
  - `Hospitality Content Pack`;
  - сроки не указаны;
  - финальная цена зависит от количества номеров, зон, форматов, языков, локаций и объёма подготовки.
- Process:
  - 5 шагов: `Бриф`, `Выбор формата`, `Подготовка объекта`, `Съёмка / производство`, `Упаковка и передача`.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - Short Q&A не добавлялся;
  - ответы без гарантий роста, без фиксированных сроков и без конкретных обещаний бронирований / продаж.
- Related links валидированы по реальным routes:
  - `/drone-service`
  - `/360-tours-service`
  - `/reels-service`
  - `/ai-visualization-service`
  - `/restaurants-service`
  - `/tourism-service`
  - `/real-estate-service`
  - `/drone-hotels-tourism`
  - `/360-tour-hotels`
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужен контент для отеля?`;
  - `preselectedServices: ['hotels']`;
  - service chips: отели, видеотур, аэросъёмка, 360° тур, Reels, AI-описания, listing pack, сезонный контент.
- Контентные ограничения:
  - не используется город Батуми в активной странице;
  - не используется `breusmedia.com`;
  - нет fake `sourceUrl`;
  - нет жёстких цен, сроков, гарантий бронирований, роста заявок, продаж, цены или скорости бронирования.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - Playwright screenshots сохранены:
    - `output/playwright/hotels-service/desktop.png`;
    - `output/playwright/hotels-service/mobile-360.png`;
    - `output/playwright/hotels-service/mobile-375.png`;
    - `output/playwright/hotels-service/mobile-390.png`;
  - визуально проверены hero, ticker, services cards, `Отели в цифрах`, pricing, FAQ, contact на desktop и mobile widths `360 / 375 / 390`;
  - runtime/DOM check подтвердил `h1 = 1`, JSON-LD types `Organization / Service / FAQPage / BreadcrumbList`, ключевые секции присутствуют, запрещённые фразы в rendered HTML не найдены.
- Важно:
  - перед задачей worktree уже был dirty;
  - в этом проходе целевые code edits были только в `app/hotels-service/page.tsx` и hotels-блоке `constants/l2DirectionConfigs.ts`;
  - `/drone-service`, `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service` не редактировались как page files в рамках hotels-задачи;
  - TODO по stats: TripAdvisor source живой, но старый; при наличии более свежего первичного источника по hotel-photo / booking behavior можно заменить;
  - TODO по routes: нет, все requested related routes существуют.

✅ /tourism-service: L2 industry hub для туризма собран через общий L2 renderer (2026-05-05)
- Основные файлы:
  - `app/tourism-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба;
  - `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service`, `/restaurants-service` использованы как технический ориентир config-first;
  - источник контента: доступный локальный файл `/Users/lika/Downloads/tourism-service.md`; пользовательский бриф считался каноничным при конфликтах;
  - цель: `/tourism-service` — industry hub для туров, маршрутов, экскурсий, локаций, глэмпингов, туристических баз, активностей и travel-проектов в Грузии, а не страница одной услуги и не только “дрон для туризма”.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - `Service.provider` ссылается на `https://breus.media/#organization`;
  - stats/evidence не добавлялись в schema.
- Фактический порядок секций `/tourism-service`:
  - hero
  - marquee
  - services
  - socialProof / `Туризм в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - process
  - faq
  - relatedLinks
  - contact
- Hero и навигация:
  - H1: `Контент для туризма и маршрутов в Грузии`;
  - subtitle: видео, аэросъёмка, Reels, 360° туры и AI-упаковка предложений для туров, локаций, глэмпингов, активностей и travel-проектов в Грузии;
  - CTA: `Обсудить тур` -> `#contact`, `Посмотреть форматы` -> `#services`;
  - SmartHeader links: `Услуги`, `Цены`, `Процесс`, `FAQ`;
  - добавлены 6 rotating hero cards: видео тура или маршрута, аэросъёмка локации, Reels для турпроекта, контент для глэмпинга, AI-упаковка предложений, 360° туры локаций.
- Ticker / marquee:
  - включён `singleTickerMode`;
  - custom ticker: `Туризм`, `маршруты`, `экскурсии`, `локации`, `глэмпинги`, `туры`, `аэросъёмка`, `Reels`, `360° туры`, `AI-упаковка`, `Viator`, `GetYourGuide`, `Instagram`, `сайт`, `гиды`, `горы`, `винные туры`, `активный отдых`, `Грузия`.
- Services grid:
  - 8 форматов:
    - `Видео тура или маршрута`;
    - `Аэросъёмка локации` -> `/drone-hotels-tourism`;
    - `Reels и Shorts для туризма` -> `/reels-service`;
    - `Контент для глэмпинга или базы`;
    - `Промо для экскурсии`;
    - `AI-упаковка туристических предложений` -> `/ai-visualization-service`;
    - `360° туры для локаций` -> `/360-tours-service`;
    - `Content pack для сезона`.
- Stats/evidence:
  - блок сделан через `StatsEvidenceStrip` в dark/gold паттерне `DroneStatsStrip`;
  - source-backed stats из source file намеренно не перенесены, чтобы не вставлять слишком общие или спорные числа;
  - использован safe non-linked evidence из брифа:
    - `До брони`;
    - `1 маршрут`;
    - `RU / EN / KA`;
    - `4 канала`;
  - `sourceUrl` не ставился;
  - добавлен видимый disclaimer: цифры и сигналы показывают рыночный контекст, а не гарантию бронирований, заявок или продаж для конкретного маршрута.
- Content sections:
  - `Не уверены, что нужно вашему туру первым?` mid CTA;
  - `Не просто съёмка красивых видов, а упаковка маршрута`;
  - 6 painSolutions без technical labels `Pain` / `Solution`;
  - `Что выигрывает туристический проект` через `earnLose`;
  - compact deliverables на 9 пунктов;
  - 6 why-us карточек.
- Pricing:
  - все пакеты без жёстких цен, только `по задаче`;
  - `Tour Promo Pack`;
  - `Route Content Pack`;
  - `Location & Drone Pack`;
  - `Season Content Pack`;
  - сроки не указаны;
  - финальная цена зависит от маршрута, локаций, форматов, языков, сезона, логистики и объёма подготовки.
- Process:
  - 5 шагов: `Бриф`, `Выбор формата`, `План маршрута`, `Съёмка / производство`, `Упаковка и передача`.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - Short Q&A не добавлялся;
  - ответы без гарантий роста, без фиксированных сроков и без конкретных обещаний бронирований / заявок / продаж.
- Related links валидированы по реальным routes и возвращают `200` на local production server:
  - `/drone-service`
  - `/360-tours-service`
  - `/reels-service`
  - `/ai-visualization-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/real-estate-service`
  - `/drone-hotels-tourism`
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужен контент для туристического проекта?`;
  - `preselectedServices: ['tourism']`;
  - service chips: видео тура, аэросъёмка, Reels, 360° тур, AI-упаковка, глэмпинг, promo pack, full content pack.
- Контентные ограничения:
  - не используется `Батуми`;
  - не используется `breusmedia.com`;
  - не используются old tourism L3 links `/reels-promo/reels-tourism`, `/360-tour-tourism`, `/ai-content/tourism-ai-packaging`, `/promo-video/promo-tourism-route`;
  - нет fake `sourceUrl`;
  - нет жёстких цен, сроков, гарантий бронирований / заявок / продаж, неподтверждённых процентов как обещаний результата.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - local production server: `PORT=3011 npm run start`;
  - Playwright screenshots сохранены:
    - `output/playwright/tourism-service-desktop-full.png`;
    - `output/playwright/tourism-service-mobile-360-full.png`;
    - `output/playwright/tourism-service-mobile-375-full.png`;
    - `output/playwright/tourism-service-mobile-390-full.png`;
  - визуально проверены hero, ticker, services cards, `Туризм в цифрах`, pricing, FAQ, contact на desktop и mobile widths `360 / 375 / 390`.
- Важно:
  - перед задачей worktree уже был dirty, включая protected pages;
  - в этом проходе целевые code edits были только в `app/tourism-service/page.tsx` и tourism-блоке `constants/l2DirectionConfigs.ts`;
  - `/drone-service`, `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service`, `/restaurants-service` не редактировались как page files в рамках tourism-задачи.

✅ /real-estate-service: L2 industry hub для недвижимости собран через общий L2 renderer (2026-05-05)
- Основные файлы:
  - `app/real-estate-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
  - `constants/droneDirectionPages.ts`
  - `components/l2-direction/types.ts`
  - `components/l2-direction/L2DirectionRenderer.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба;
  - `/360-tours-service`, `/reels-service`, `/ai-visualization-service` использованы как технический ориентир config-first;
  - `/real-estate-service` собран как industry hub для недвижимости, а не страница одной услуги;
  - страница должна распределять пользователя по форматам: аэросъёмка, 360° тур, Reels, AI staging, listing pack, промо ЖК, видеотур, мониторинг стройки;
  - гео: Тбилиси и Грузия; Батуми не добавлялся в real-estate copy.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - `Service.provider` ссылается на `https://breus.media/#organization`;
  - stats/evidence не добавлялись в schema.
- Фактический порядок секций `/real-estate-service`:
  - hero
  - marquee
  - services
  - socialProof / `Недвижимость в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - process
  - faq
  - relatedLinks
  - contact
- Hero и навигация:
  - H1: `Визуальный контент для недвижимости в Тбилиси и Грузии`;
  - mobile/desktop line-breaks разделены через optional `heroDesktopDisplayTitle`, чтобы сохранить один H1 и убрать overflow;
  - добавлен optional флаг `heroLongHubLayout`, включён только для `realEstateService`, чтобы не менять compact-геометрию соседних L2;
  - CTA: `Подобрать формат` -> `#contact`, `Посмотреть направления` -> `#services`;
  - SmartHeader links: `Услуги`, `Цены`, `Процесс`, `FAQ`;
  - добавлены rotating hero cards: аэросъёмка недвижимости, 360° тур, Reels для риелторов, AI staging, промо ЖК, мониторинг стройки.
- Ticker / marquee:
  - custom ticker: `Недвижимость`, `аэросъёмка`, `360° туры`, `Reels`, `AI staging`, `Listing Pack`, `промо ЖК`, `видеотур`, `мониторинг стройки`, `MyHome.ge`, `SS.ge`, `инвесторы`, `аренда`, `пресейл`, `Тбилиси`, `Грузия`.
- Services grid:
  - 8 форматов:
    - `Аэросъёмка недвижимости` -> `/drone-services/drone-real-estate`;
    - `360° тур для недвижимости` -> `/360-tour-real-estate`;
    - `Reels для риелторов и агентств` -> `/reels-real-estate`;
    - `AI-визуализация и AI staging` -> `/ai-visualization-service`;
    - `Listing Pack` -> `#contact`;
    - `Промо ЖК` -> `/promo-video/promo-real-estate`;
    - `Видеотур объекта` -> `#contact`;
    - `Мониторинг стройки` -> `/drone-construction-monitoring`;
  - `/drone-services/drone-construction-monitoring` не использован, потому что такого route нет в build output.
- Stats/evidence:
  - блок `Недвижимость в цифрах` сделан через dark/gold evidence-strip в паттерне `DroneStatsStrip`;
  - stats:
    - `52%` / NAR REALTOR Technology Survey 2025;
    - `68%` / NAR — Drones and Real Estate;
    - `49%` / NAR 2025 Profile of Home Staging;
    - `76%` / CSA Research / Can't Read, Won't Buy;
  - добавлен видимый disclaimer: цифры показывают рыночный контекст, а не гарантию результата для конкретного объекта.
- Content sections:
  - mid CTA `Не уверены, какой формат нужен объекту?`;
  - `Не “съёмка квартир”, а упаковка объекта под канал и аудиторию`;
  - 8 painSolutions без labels `Pain` / `Solution`;
  - `Что выигрывает объект` через `earnLose`;
  - compact deliverables;
  - 6 why-us карточек.
- Pricing:
  - все цены только `по задаче`;
  - `Listing Pack`;
  - `Remote Buyer Pack`;
  - `Developer Pack`;
  - `Monitoring Pack`;
  - draft GEL ranges из source package не опубликованы;
  - `L2DirectionPricing` расширен условно: `plans.length >= 4` получает `xl:grid-cols-4`, страницы с 3 пакетами остаются на прежней `md:grid-cols-3`.
- Process:
  - 5 шагов: `Бриф`, `Выбор формата`, `Подготовка объекта`, `Съёмка / производство`, `Упаковка и передача`.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - ответы без гарантий продажи, роста просмотров, заявок, цены, скорости сделки и без обещания топа агрегаторов.
- Related links:
  - L2 routes: `/drone-service`, `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/hotels-service`, `/restaurants-service`, `/tourism-service`;
  - L3/related routes используются только если существуют: `/360-tour-real-estate`, `/reels-real-estate`, `/drone-services/drone-real-estate`, `/promo-video/promo-real-estate`, `/drone-construction-monitoring`.
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужна упаковка объекта недвижимости?`;
  - `preselectedServices: ['real-estate']`.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - build output содержит route `/real-estate-service`;
  - local production screenshots проверялись через headless Chrome:
    - `/real-estate-service` desktop;
    - mobile `360 / 375 / 390`;
    - контрольный screenshot `/reels-service` после изоляции shared layout-фикса;
  - найден и исправлен mobile horizontal overflow hero;
  - найден и исправлен desktop overlap H1/ticker через `heroLongHubLayout`;
  - после проверки local server на `3210` остановлен.
- Важно:
  - перед задачей worktree уже был dirty, включая protected pages и shared L2-файлы;
  - правки shared L2 сделаны optional/условными;
  - `/drone-service`, `/360-tours-service`, `/reels-service`, `/ai-visualization-service` page files не менялись в рамках этой задачи;
  - grep по целевым файлам показывает `Батуми` только в существующем `/drone-service` config, не в real-estate block.

✅ /restaurants-service: L2 industry hub для ресторанов собран через общий L2 renderer (2026-05-05)
- Основные файлы:
  - `app/restaurants-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба;
  - `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service` использованы как технический ориентир config-first;
  - источник контента: доступный локальный экспорт `/Users/lika/Downloads/restaurants-service.md`; пользовательский бриф считался каноничным при конфликтах;
  - цель: `/restaurants-service` должен быть industry hub для ресторанов, кафе, баров, гастропроектов, delivery и ресторанов при отелях, а не страницей одной услуги и не только “дрон для ресторанов”.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - `Service.provider` ссылается на `https://breus.media/#organization`;
  - stats/evidence не добавлялись в schema.
- Фактический порядок секций `/restaurants-service`:
  - hero
  - marquee
  - services
  - socialProof / `Рестораны в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - process
  - faq
  - relatedLinks
  - contact
- Hero и навигация:
  - H1: `Контент для ресторанов и кафе в Тбилиси`;
  - subtitle: фото, видео, Reels, аэросъёмка, 360° туры и AI-упаковка меню для ресторанов, кафе, баров, delivery и гастропроектов в Тбилиси и Грузии;
  - CTA: `Обсудить ресторан` -> `#contact`, `Посмотреть форматы` -> `#services`;
  - SmartHeader links: `Услуги`, `Цены`, `Процесс`, `FAQ`;
  - добавлены 6 rotating hero cards: съёмка блюд и меню, Reels, интерьер и атмосфера, 360° тур, аэросъёмка локации, AI-карточки и delivery.
- Ticker / marquee:
  - включён `singleTickerMode`;
  - custom ticker: `Рестораны`, `кафе`, `бары`, `гастропроекты`, `съёмка блюд`, `меню`, `Reels`, `360° туры`, `аэросъёмка`, `AI-карточки`, `Wolt`, `delivery`, `Google Maps`, `Instagram`, `терраса`, `завтраки`, `ужины`, `Тбилиси`, `Грузия`.
- Services grid:
  - 8 форматов:
    - `Съёмка блюд и меню`;
    - `Reels и Shorts для ресторана` -> `/reels-service`;
    - `Интерьер и атмосфера`;
    - `360° тур для ресторана` -> `/360-tour-restaurants`;
    - `Аэросъёмка ресторана` -> `/drone-services/drone-restaurants`;
    - `AI-карточки меню и delivery` -> `/ai-visualization-service`;
    - `Контент для Google Maps`;
    - `Контент-пакет на месяц`;
  - несуществующий route `/drone-restaurants` не используется.
- Stats/evidence:
  - блок сделан через `StatsEvidenceStrip` в dark/gold паттерне `DroneStatsStrip`;
  - использованы source-backed contextual stats:
    - `До 44%` / DoorDash menu photography;
    - `64%` / TouchBistro 2024 Diner Trends;
    - `76%` / CSA Research / Can't Read, Won't Buy;
    - `84%` / Wyzowl Video Marketing Statistics 2026;
  - добавлен видимый disclaimer: цифры и сигналы показывают рыночный контекст, а не гарантию бронирований, заявок или продаж для конкретного ресторана.
- Content sections:
  - `Не уверены, что нужно ресторану первым?` mid CTA;
  - `Не просто съёмка еды, а визуальная упаковка ресторана`;
  - 6 painSolutions без технических labels `Pain` / `Solution`;
  - `Что выигрывает ресторан` через `earnLose`;
  - compact deliverables на 10 пунктов;
  - 6 why-us карточек.
- Pricing:
  - все пакеты без жёстких цен, `по задаче`;
  - `Menu Pack`;
  - `Reels & Social Pack`;
  - `Restaurant Space Pack`;
  - `Monthly Content Pack`;
  - сроки не указаны;
  - финальная цена зависит от количества блюд, зон, форматов, языков, локаций, необходимости дрона, 360° тура или AI-упаковки.
- Process:
  - 5 шагов: `Бриф`, `Выбор формата`, `Подготовка съёмки`, `Съёмка / производство`, `Упаковка и передача`.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - Short Q&A не добавлялся;
  - ответы без гарантий роста, без фиксированных сроков и без конкретных обещаний продаж / заказов.
- Related links валидированы по реальным routes и возвращают `200` на local production server:
  - `/drone-service`
  - `/360-tours-service`
  - `/reels-service`
  - `/ai-visualization-service`
  - `/hotels-service`
  - `/tourism-service`
  - `/real-estate-service`
  - `/360-tour-restaurants`
  - `/drone-services/drone-restaurants`
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужен контент для ресторана?`;
  - `preselectedServices: ['restaurants']`;
  - service chips: съёмка блюд, Reels, интерьер, 360° тур, аэросъёмка, AI-карточки, delivery pack, monthly content pack.
- Контентные ограничения:
  - не используется `breusmedia.com`;
  - не используется несуществующий `/drone-restaurants`;
  - запрещённое гео из source-export не перенесено;
  - нет жёстких цен, сроков, гарантий бронирований / заявок / продаж, неподтверждённых процентов как обещаний результата.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - local production server:
    - сначала `PORT=3210` был занят;
    - проверка выполнена на `NEXT_PUBLIC_DEBUG_MODE=false PORT=3222 npm run start`;
  - Playwright screenshots сохранены:
    - `output/playwright/restaurants-service-desktop-full.png`;
    - `output/playwright/restaurants-service-mobile-360-full.png`;
    - `output/playwright/restaurants-service-mobile-375-full.png`;
    - `output/playwright/restaurants-service-mobile-390-full.png`;
  - runtime check подтвердил:
    - `h1 = 1`;
    - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - FAQ schema questions: `14`;
    - Service schema не содержит stats/evidence;
    - forbidden exact href `/drone-restaurants` отсутствует;
    - forbidden strings `Батуми`, `breusmedia.com`, `увеличивает заказы`, `средний чек` отсутствуют в rendered HTML;
    - все related routes вернули `200`.
- Важно:
  - перед задачей worktree уже был dirty, включая protected pages (`/drone-service`, `/360-tours-service`, `/reels-service`, `/ai-visualization-service`, `/real-estate-service`, `/hotels-service`);
  - в этом проходе целевые code edits были только в `app/restaurants-service/page.tsx` и `constants/l2DirectionConfigs.ts`;
  - protected pages не редактировались в рамках ресторанной задачи.

✅ /ai-visualization-service: L2-хаб AI-визуализации собран через общий L2 renderer (2026-05-04)
- Основные файлы:
  - `app/ai-visualization-service/page.tsx`
  - `constants/l2DirectionConfigs.ts`
  - `components/l2-direction/types.ts`
  - `components/l2-direction/L2DirectionRenderer.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
  - `components/gazeta/MarqueeSection.tsx`
  - `components/shared/StatsEvidenceStrip.tsx`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба;
  - `/360-tours-service` и `/reels-service` использованы как технический ориентир config-first;
  - источник контента: `ai-visualization-service.md` из `Downloads` / Google Drive L2 package;
  - задача: собрать `/ai-visualization-service` как L2 service hub, а не L3 под одну нишу.
- Реализовано через `L2DirectionRenderer` без page-specific монолита:
  - route-level metadata: title / description / canonical / openGraph / twitter;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` строится только из видимого FAQ;
  - generic JSON-LD из renderer отключён через `includeBaseJsonLd={false}`;
  - `Service.provider` ссылается на глобальный `https://breus.media/#organization`.
- В L2-систему добавлены optional extensions:
  - `marquee` section key + `marqueeItems`;
  - `earnLose` compact block;
  - `whyUs.subtitle`;
  - `painSolutions.subtitle`;
  - richer `statsCards` mapping с label + description;
  - `MarqueeSection` получил optional `items`, default-поведение сохранено для старых вызовов.
- Фактический порядок секций `/ai-visualization-service`:
  - hero
  - marquee
  - services
  - socialProof / `AI-визуализация в цифрах`
  - midCta
  - whatIsTour
  - painSolutions
  - earnLose
  - deliverables
  - whyUs
  - pricing
  - process
  - faq
  - relatedLinks
  - contact
- Hero и контент:
  - H1: `AI-визуализация для бизнеса в Тбилиси — визуал и тексты, которые можно публиковать`;
  - добавлены 6 rotating hero cards: недвижимость, интерьеры, продукты/e-commerce, рестораны/меню, авто, отели/туризм;
  - custom ticker: `AI-визуализация`, `AI staging`, `интерьеры`, `недвижимость`, `продуктовый визуал`, `меню`, `авто`, `отели`, `туризм`, `рекламные креативы`, `RU`, `EN`, `KA`, `Тбилиси`, `Грузия`, `человек контролирует результат`.
- Services grid:
  - 8 L2-направлений;
  - cards ведут на `#contact`, чтобы страница оставалась hub-level, а не L3-каталогом;
  - использованы существующие AI service images из `services-images/*`.
- Stats/evidence:
  - блок сделан в dark/gold стиле `DroneStatsStrip` через `StatsEvidenceStrip`;
  - использованы только claims с source URLs из content package:
    - `49%` / NAR 2025 Profile of Home Staging;
    - `83%` / NAR 2025 Profile of Home Staging;
    - `76%` / CSA Research / Can't Read, Won't Buy;
    - `40%` / CSA Research / Can't Read, Won't Buy;
  - stats не добавлялись в schema.
- Pricing:
  - `AI Старт` — `от 300 ₾`;
  - `AI Стандарт` — `от 600 ₾`;
  - `AI Кампейн` — `от 1500 ₾`;
  - `AI Localization & Copy` — `по задаче`;
  - сроки не указаны;
  - добавлена cautious note, что финальная цена зависит от исходников, сложности, брендбука, языков и ручной доработки.
- FAQ:
  - один основной FAQ на 14 вопросов;
  - Short Q&A не добавлялся;
  - answers без гарантий роста, без конкретных нейросетей и без фиксированных сроков.
- Related links валидированы по реальным routes и оставлены:
  - `/drone-service`
  - `/360-tours-service`
  - `/reels-service`
  - `/real-estate-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/tourism-service`
- Contact:
  - используется `DroneContactStitch`;
  - heading: `Нужна AI-визуализация для бизнеса?`;
  - `preselectedServices: ['ai-content']`.
- Контентные ограничения:
  - не используется `Батуми`;
  - не используется `breusmedia.com`;
  - не используются конкретные нейросети / стек / prompt-термины;
  - не используются публичные запрещённые слова из `CODEX.md` в AI-page body (`профессиональный`, `качественный`, `лучший`, `уникальный`);
  - нет гарантий роста, неподтверждённых процентов и фиксированных сроков.
- Проверки:
  - `npx tsc --noEmit` -> ✅
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` -> ✅
  - production local server поднят по `CODEX.md`:
    - `NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start`
    - `http://localhost:3200/ai-visualization-service` -> `200 OK`
  - Playwright visual/smoke:
    - desktop full-page screenshot;
    - mobile widths `360 / 375 / 390`;
    - runtime check: `h1 = 1`;
    - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
    - FAQ schema questions: `14`;
    - stats source links present;
    - forbidden body text matches: `0`.
- Важно:
  - `/drone-service`, `/360-tours-service`, `/reels-service` не редактировались в этом проходе, но shared L2-файлы уже были dirty до начала задачи;
  - `components/shared/StatsEvidenceStrip.tsx` числится untracked в git status, но используется текущей L2 evidence-логикой.

✅ /360-tours-service: блок `360° туры в цифрах` приведён к единому L2 evidence-strip паттерну `DroneStatsStrip` (2026-05-03)
- Основные файлы:
  - `components/shared/StatsEvidenceStrip.tsx`
  - `components/drone/DroneStatsStrip.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
  - `constants/l2DirectionConfigs.ts`
- Контекст задачи:
  - `/drone-service` принят как визуальный эталон L2-хаба;
  - требовалось подтянуть только stats/evidence-блок `/360-tours-service` к тому же dark/gold strip-паттерну;
  - `/drone-service` и остальная структура `/360-tours-service` не должны были меняться визуально.
- Выполненное решение:
  - вынесен общий shared-компонент `StatsEvidenceStrip`;
  - `DroneStatsStrip` переведён на shared-реализацию без смены паттерна;
  - `L2DirectionSocialProof` в режиме `statsCards` теперь рендерит тот же evidence-strip вместо старых карточек;
  - fallback-режим `socialProofStats` для остальных L2 не тронут.
- Контент `360° туры в цифрах` зафиксирован в safe-формате без неподтверждённых процентов:
  - `До визита`
  - `1 ссылка`
  - `На сайте`
  - `С телефона`
- Для каждого элемента используется структура:
  - крупное жёлтое значение;
  - короткое описание;
  - мелкий нижний `sourceLabel`;
  - при наличии `sourceUrl` shared-компонент умеет рендерить источник как ссылку.
- Проверки:
  - `./node_modules/.bin/tsc --noEmit` -> ✅
  - `npm run build` -> ✅
  - визуальная проверка `/360-tours-service` выполнена на:
    - desktop `1440`
    - mobile `360 / 375 / 390`
- В браузере подтверждено:
  - блок стал 4-колоночным strip на desktop;
  - на mobile сохраняется компактный `2x2` layout без возврата к карточечному виду;
  - client-side ошибок нет, только обычные dev/HMR-сообщения в консоли.

✅ /360-tours-service: L2-страница 360° туров внедрена через общий L2 renderer без поломки других L2 (2026-04-30)
- Основные файлы:
  - `app/360-tours-service/page.tsx`
  - `components/l2-direction/types.ts`
  - `components/l2-direction/L2DirectionRenderer.tsx`
  - `components/l2-direction/L2DirectionSections.tsx`
  - `constants/l2DirectionConfigs.ts`
  - `tsconfig.json`
- Прочитан и учтён `CODEX.md`:
  - не трогались чужие правки `imagePosition`, `L2CardsLayoutPreset`, `servicesLayoutPreset`, layout modes `soft/aggressive`, global `Organization` schema;
  - блок `tours360Service` переписан точечно, без правок других service-configs;
  - новые поля в L2-системе добавлены только как optional и рендерятся только при наличии данных.
- `app/360-tours-service/page.tsx` обновлён по ТЗ:
  - metadata: title / description / canonical / openGraph / twitter;
  - route-level JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`;
  - `FAQPage` собирается только из видимого основного FAQ;
  - generic JSON-LD из `L2DirectionRenderer` отключён для этой страницы через `includeBaseJsonLd={false}`, чтобы не дублировать schema.
- В общий L2-движок добавлены универсальные optional-секции:
  - `whatIsTour`
  - `signalStrip`
  - `painSolutions`
  - `midCta`
  - `deliverables`
  - `pricingAddOns`
  - `whyUs`
  - `shortQa`
- Hero в L2-системе расширен обратносовместимо:
  - optional lead paragraphs;
  - optional custom CTA labels/hrefs;
  - optional `sectionLinks` для `SmartHeader`.
- Services / Pricing / Process расширены обратносовместимо:
  - services: optional subtitle;
  - pricing: optional subtitle, audience, CTA href, `popular`;
  - process: optional heading + `id="process"`.
- Блок `tours360Service` теперь соответствует broad L2 intent:
  - hero;
  - `Что такое 360° тур`;
  - 4-плашечный signal strip;
  - `Для кого` на 6 карточек;
  - `Какие задачи закрывает` на 6 pain/solution;
  - mid-page CTA;
  - `Что вы получаете`;
  - pricing `от 200 ₾ / от 450 ₾ / от 900 ₾`;
  - `Дополнительно к любому пакету`;
  - process на 5 шагов;
  - `Почему снимают с нами`;
  - `Короткие ответы`;
  - FAQ на 11 вопросов;
  - related links;
  - contact.
- Related links проверены против реальных routes в `app/` и оставлены только на существующие страницы:
  - `/360-tour-real-estate`
  - `/360-tour-hotels`
  - `/360-tour-restaurants`
  - `/360-tour-clinics`
  - `/drone-service`
  - `/reels-service`
- Sticky CTA сознательно не добавлялся:
  - по правилу из ТЗ не создавался новый sticky-компонент;
  - страница осталась на обычных CTA `#contact` / `#pricing`.
- Контентные ограничения соблюдены в новой странице:
  - цены строго `от 200 ₾`, `от 450 ₾`, `от 900 ₾`;
  - не используются `Батуми`, `breusmedia.com`, `Matterport`, `Kuula`, `Pano2VR`, `CloudPano`, `Street View`, `Google Maps panorama`;
  - не используются проценты и конкретные сроки.
- Типизация и сборка:
  - `./node_modules/.bin/tsc --noEmit` -> ✅;
  - `npm run build` -> ✅.
- Для `tsc --noEmit` понадобилась узкая техправка `tsconfig.json`:
  - `output/` исключён из TypeScript compilation;
  - причина: generated файл `output/playwright/gazeta_capture.spec.ts` тянул `playwright/test` и ломал типизацию, не относясь к runtime-коду приложения.
- Визуальная проверка `/360-tours-service` выполнена на production build (`next build` + `next start`) через локальный сервер:
  - desktop: full-page screenshot сохранён;
  - mobile widths проверены: `390`, `375`, `360`;
  - console errors: `0`;
  - warnings: только preload warnings браузера по css/fonts, не runtime issues.
- Потенциально затронутые shared-маршруты из-за расширения `L2DirectionRenderer` / `L2DirectionSections`:
  - `/reels-service`
  - `/promo-video-service`
  - `/ai-visualization-service`
  - `/real-estate-service`
  - `/hotels-service`
  - `/restaurants-service`
  - `/tourism-service`
  - `/clinics-service`
  - `/auto-service`
  - `/business-service`
- По этим маршрутам подтверждена как минимум build-совместимость; отдельный визуальный review по каждому не проводился в рамках этого прохода.

✅ /gazeta: финальный стандарт desktop-карточек и стрелок карусели (2026-04-21)
- Основной файл: `components/gazeta/NichesStack.tsx`.
- Контекст задачи: в IAB на `/gazeta`, особенно в секции `04 Reels`, desktop-карточки резали изображения по вертикали/горизонтали, а ручные попытки через `object-position`, `object-contain`, разные ширины и `reelsLab`-варианты давали нестабильный результат.
- Принятое решение: отказаться от ручных per-card экспериментов и сделать нормальную геометрию карточки через верхний image-блок `aspect-video`.
- Для всех desktop-карточек в horizontal rail теперь используется единый режим:
  - верхняя зона изображения: `aspect-video h-auto`;
  - изображение: `w-full h-full object-cover`;
  - hover-scale отключён для desktop aspect-карточек, чтобы картинка не начинала снова обрезаться при наведении;
  - текст/цена/CTA остаются отдельным нижним блоком карточки.
- Это решило исходную проблему для 16:9 ассетов: картинка занимает всю ширину карточки, без пустых боковых рамок, и не режется, если исходник действительно 16:9.
- Desktop-карточки `04 Reels` возвращены к компактной ширине ряда:
  - `w-[calc(25%-15px)] md:w-[calc(25%-16px)]`;
  - снова видно больше карточек за один экран, а не 2-3 слишком широкие.
- Для всех desktop-каруселей на `/gazeta` боковые стрелки вынесены наружу от карточек:
  - left: `-left-11 md:-left-12 xl:-left-14`;
  - right: `-right-11 md:-right-12 xl:-right-14`.
- Важно: мобильную логику карточек/рейлов не трогали; изменения применяются через `useDesktopHorizontalServicesRail`.
- Удалены временные эксперименты:
  - `useSearchParams`;
  - `reelsLab=a/b/c`;
  - `reelsDesktopImagePositionBySlug`;
  - `reelsDesktopImagePositionVariants`;
  - `reelsDesktopNoCropSlugs`;
  - точечная узкая `object-contain`-логика для `reels-nedvizhimost`/`reels-rieltor`.
- Проверка: `npx eslint components/gazeta/NichesStack.tsx --quiet` всё ещё падает на старые предсуществующие `react-hooks/set-state-in-effect` в этом же компоненте (`setInnerScrollProgress`, `setIsStackVisible`), не на новую карточную геометрию.
- В IAB после правок нужно делать hard refresh `Cmd+Shift+R` на `http://localhost:3200/gazeta`.

✅ /gazeta: серия правок карточек по IAB-комментариям + визуальная оптимизация карточек (2026-04-21)
- Основные файлы:
  - `constants/l2DirectionConfigs.ts` — массовая замена `image` у карточек на локальные ассеты из `services-images/*/final`.
  - `components/gazeta/NichesStack.tsx` — визуальная оптимизация карточек (более насыщенные изображения), и карусель 2-х изображений для menu/delivery карточек.
- Выполненные замены изображений в `l2DirectionConfigs.ts`:
  - `reels-nedvizhimost` -> `services-images/reels-real-estate/final/2.png`.
  - `reels-restorany` -> `services-images/reels-restaurant/final/1.png`.
  - `reels-socseti` -> тот же источник, что `reels-restorany`.
  - `reels-oteli` -> `services-images/tourism /final/4.png`.
  - `reels-shorts-otel` -> тот же источник, что `reels-oteli`.
  - `reels-turizm` -> `services-images/tourism /final/3.png`.
  - `reels-kliniki` -> `services-images/reels-clinic/final/1.png`.
  - `reels-avtobiznes` -> `services-images/reels-auto/final/1.png`.
  - `reels-avtobiznesa` -> синхронизирован с изображением карточки `#8434` (`tourismImageThree`).
  - `ai-viz-nedvizhimost` -> `services-images/ai-real-estate/final/1.png`.
  - `ai-staging-meblirovka` -> `services-images/ai-staging/final/1.png`.
  - `ai-viz-prostranstv-intererov` -> `services-images/ai-interior/final/1.png`.
  - `ai-produktovyj-vizual` -> `services-images/ai-product/final/1.png`.
  - `ai-viz-avtobiznes` -> `services-images/ai-auto/final/1.png`.
  - `ai-kartochki-menyu-delivery` -> `services-images/ai-menu-delivery/final/1.png`.
  - `ai-upakovka-menyu-opisaniy` -> синхронизирован с `ai-kartochki-menyu-delivery`.
  - `ai-viz-brendy-marketing` -> `services-images/ai-brand/final/1.png`.
  - `ai-opisaniya-lokalizaciya-hotel` -> `services-images/hotel-ai-descriptions/final/1.png`.
  - `ai-opisaniya-lokalizaciya` -> синхронизирован с `ai-opisaniya-lokalizaciya-hotel`.
- В `NichesStack.tsx`:
  - Для всех секций 01–12 ослаблено затемнение карточечных изображений (повышены `opacity/saturate/contrast`) для лучшей читаемости полезных деталей на изображениях.
  - Для `ai-kartochki-menyu-delivery` добавлено авто-переключение 2 изображений каждые 5 секунд:
    - текущая картинка + `services-images/ai-menu-delivery/final/2.png`.
  - То же переключение расширено на `ai-upakovka-menyu-opisaniy` (карточка `#8472`).
- Запуск/доступ:
  - Dev-сервер поднят на `http://localhost:3200`.
  - Для телефона в локальной сети использовался URL `http://192.168.1.6:3200/gazeta`.

✅ /gazeta: серия точечных правок контента и визуала по комментариям в IAB (2026-04-21)
- Основной файл правок: `components/gazeta/NichesStack.tsx` (точечные slug-based overrides без смены архитектуры секции).
- Hero на первом экране `/gazeta` собран в вариант 5: трёхстрочный H1 + отдельная строка гео + подзаголовок + supporting line в одном центрированном стеке.
- Для geo-label `В ТБИЛИСИ` убрана тёмная pill-подложка; оставлен компактный прямоугольный secondary accent c тонкой жёлтой рамкой и жёлтым текстом.
- После серии микро-итераций увеличен размер geo-label (`В ТБИЛИСИ`) по запросам: +30% и затем ещё +20%.
- Подзаголовок и supporting line в hero усилены по читаемости (+10% к размеру обоих блоков), при этом сохранена иерархия относительно H1.
- Выравнивание текстового стека и карточных рядов приведено к более симметричным боковым отступам на desktop.
- Для секции `02 АЭРОСЪЁМКА` введён стабильный трёхуровневый текстовый стек: H1 / subheadline / supporting; фраза про географию оставлена в жёлтом акценте.
- Размеры заголовков и верхнего текстового блока в `02 АЭРОСЪЁМКА` дополнительно откалиброваны по итерациям: сначала уменьшение H1 на 25%, затем уменьшение верхнего текстового блока ещё на 15%.
- Заголовки/подзаголовки в других нишах приведены к той же типографической системе (3 строки и сопоставимая иерархия): `360° туры`, `Reels`, `AI-контент`, `Недвижимость`, `Отели`, `Рестораны`, `Авто`, `Туризм`, `Клиники`, `IT`.
- Для `components/gazeta/NichesStack.tsx` зафиксированы перестановки карточек:
  - в нише `10` карточка `tur-360-turizma` принудительно ставится второй;
  - в нише `11` карточка `tur-360-klinik` принудительно ставится первой.
- Для карточных изображений добавлены/уточнены явные `slug -> image` соответствия в `toStackServiceFromL2` / `toStackServiceFromRealEstate`, чтобы правки не зависели от порядка источников.
- Финальные ключевые соответствия изображений, закреплённые в коде:
  - `reels-rieltor` -> `/media/gazeta/reels-realtor-1.png` (как карточка `8457`);
  - `promo-ekskursii-aktivnosti` -> `/media/gazeta/tourism-1.png` (картинка №1 из `services-images/tourism /final`);
  - `videotur-otelya` -> `/media/gazeta/360-real-estate-2.png` (картинка №2 из `services-images/360-real-estate+/final`);
  - `ai-upakovka-predlozheniy-tourism` и `ai-upakovka-predlozheniy` -> `/media/gazeta/tourism-2.png`;
  - `tury-360-turizm` и `tur-360-turizma` -> `/media/gazeta/360-tour-2.png`;
  - `aerosemka-lokacii` -> `/media/gazeta/360-tour-1.png`;
  - `prodazha-kvartir` -> `/media/gazeta/360-real-estate-1.png`.
- Добавлены новые локальные ассеты в `public/media/gazeta/`:
  - `360-real-estate-1.png`, `360-real-estate-2.png`, `360-tour-1.png`, `360-tour-2.png`, `tourism-1.png`, `tourism-2.png`, `reels-realtor-1.png`.
- Все правки выполнены без добавления новых UI-компонентов и без изменения общей структуры стеков/карточек.
- Smoke-check: `http://localhost:3200/gazeta` возвращает `200 OK` после внесённых изменений.

✅ /reels-real-estate: новая L3-страница RU, первая страница ветки Reels (2026-04-19)
- Созданы `app/reels-real-estate/page.tsx` и `app/reels-real-estate/layout.tsx`.
- Паттерн страницы повторяет эталон `app/360-tour-hotels/page.tsx`: монолитная `page.tsx`, route-level metadata, переиспользование только заданных компонентов.
- Переиспользованы: `SmartHeader`, `DebugWrapper`, `DroneContactStitch`, `DroneFooterStitch`, `FaqSection`, `DronePageProgress`, `DroneStickyCta`, `PackageCta`, `MobileBottomBar`, `ScrollArrow`.
- Структура страницы: Hero (`id=reels-real-estate-hero`) -> Stats (`#stats`) -> Reels vs Фото vs Тур -> Problem Cards -> Deliverables -> Форматы (`#formats`) -> Process (`#process`) -> Pricing (`#pricing`) -> Niche Cards -> Why Us -> Short Q&A -> FAQ (`#faq`) -> Related Services -> Contact (`#contact`).
- `layout.tsx` задаёт metadata строго по ТЗ: title, description, canonical, openGraph, twitter.
- Hero: H1 `Reels для риелторов и застройщиков — входящий поток заявок без бюджета на рекламу`, italic SEO-подзаголовок, 3 лид-абзаца и CTA `#contact` / `#pricing`.
- Stats: 4 карточки с внешними ссылками на Domain Group / NAR / WordStream / TikTok for Business; все ссылки `target="_blank"` + `rel="noopener noreferrer"`.
- `shortQa` вынесен в отдельную открытую секцию на карточках с семантикой `h3` + `p`, без аккордеона.
- Schema.org: `Service`, `FAQPage`, `BreadcrumbList`, `LocalBusiness` через `script[type="application/ld+json"]`; телефон в schema `+995574619393`.
- Contact: `DroneContactStitch` с кастомным heading `Есть объект или проект ЖК — обсудим контент` и описанием про объект / аудиторию / каналы.
- Pricing зафиксирован строго: `от 250 ₾`, `от 650 ₾`, `от 1500 ₾`; add-ons: `+100 / +80 / +150 / от 200 ₾`.
- Ограничения: новых компонентов не создавалось; Батуми не упоминается; из конфликтного массива заголовок `Динамичный тизер...` нейтрализован до `Короткий тизер...`, чтобы пройти STOP-LIST при неизменном смысле.
- После создания страницы требуется: `NEXT_PUBLIC_DEBUG_MODE=false npm run build`, grep по STOP-LIST / Батуми, затем коммит `feat(reels-real-estate): L3-страница Reels для недвижимости RU, первая страница ветки Reels`; push не делать до команды `DEPLOY NOW`.

✅ /360-tour-real-estate: полная перезапись L3-страницы RU по эталону /360-tour-hotels (2026-04-19)
- `app/360-tour-real-estate/page.tsx` полностью перезаписан как монолитная page.tsx без зависимости от `components/360-tour-real-estate/*`.
- Создан `app/360-tour-real-estate/layout.tsx` с route-level metadata: title, description, canonical, openGraph, twitter по ТЗ.
- Переиспользованы только заданные компоненты: `SmartHeader`, `DebugWrapper`, `DroneContactStitch`, `DroneFooterStitch`, `FaqSection`, `DronePageProgress`, `DroneStickyCta`, `PackageCta`, `MobileBottomBar`, `ScrollArrow`.
- Структура страницы: Hero (`id=tour-real-estate-hero`) -> Stats -> Фото vs тур -> Problem Cards -> Deliverables -> Zones (`#zones`) -> Process (`#process`) -> Pricing (`#pricing`) -> Niche Cards -> Why Us -> Short Q&A -> FAQ (`#faq`) -> Related Services -> Contact (`#contact`).
- Hero: H1 + italic SEO-подзаголовок + 3 лид-абзаца + CTA `#contact` / `#pricing`.
- Stats: 4 карточки с верифицированными внешними ссылками на Realtor / Zillow / NAR / CloudPano (`target=_blank`, `rel=noopener noreferrer`).
- Pricing: пакеты строго `200 / 450 / 900 ₾`, addons `150 / +80 / +100 ₾`; в карточках используется `PackageCta`.
- Schema.org: 4 route-specific объекта — `FAQPage`, `Service`, `BreadcrumbList`, `LocalBusiness`; дополнительно на странице остаётся root `Organization` из `app/layout.tsx`.
- `components/drone/DroneContactStitch.tsx` расширен обратносовместимо: добавлены optional props `heading?: string` и `description?: string`; дефолтное поведение старых страниц сохранено.
- Contact-блок настроен под ТЗ: heading `Есть объект — обсудим тур`, description про объект/зоны/маршрут/пакет, `preselectedServices={['360', 'real-estate']}`.
- Hard checks: STOP-LIST grep -> 0 совпадений; `Батуми|Batumi` -> 0 совпадений в новых файлах; H1 -> 1; build -> ✅ `NEXT_PUBLIC_DEBUG_MODE=false npm run build`.
- Copywriting review:
  - Hero и CTA держат один оффер: дистанционный осмотр до визита.
  - Pricing note и short answers без воды и без стоп-слов.
  - Самая сильная формулировка above-the-fold: «покупатель изучает квартиру до визита» — оставлена как основной promise.
- GEO review:
  - В первом экране есть прямое определение сценария использования и AI-citeable факты.
  - Виден Q&A слой (`shortQa` + `faqItems`) и `FAQPage` schema.
  - Есть внешние источники Realtor / Zillow / NAR / CloudPano, пригодные для цитирования AI-поиском.
- On-page SEO review:
  - `layout.tsx` задаёт canonical, OG, twitter.
  - Заголовочная иерархия выровнена: 1 x `h1`, секционные `h2`, карточки `h3`.
  - Есть внутренняя перелинковка в related services; пустых `sourceUrl` нет.
- Не задеплоено. После коммита ждём только явную команду `DEPLOY NOW`.

✅ /drone-services/drone-real-estate: новая L3-страница RU (2026-04-19)
  - `app/drone-services/drone-real-estate/page.tsx` (989 строк) + `layout.tsx` (22 строки) созданы по эталону `drone-restaurants`.
  - Блоки: Hero (H1 + italic подзаголовок + 2-лид) → «Для кого» (3) → statsCards (4, с внешними ссылками target=_blank rel=noopener на Redfin/Matterport, Google Street View, Matterport Industry Report, ScienceDirect) → problemCards (4) → Deliverables (3 группы: Аэрослой / FPV / Полный комплект) → nicheCards (5) → processSteps (5) → whyUsCards (6) → pricingCards (4: 250/350/500/от 900 ₾) + addons (+150/+150/+80) → shortQa (4) → faqItems (7) → relatedServices (4) → DroneContactStitch.
  - Schema.org (4): Service (priceRange "250 ₾ – 900 ₾", GEL, areaServed Tbilisi/Georgia) + FAQPage (все 7 вопросов) + BreadcrumbList (Главная → Аэросъёмка → Недвижимость) + LocalBusiness (+995 574 619 393).
  - Metadata в layout.tsx: title / description / canonical (`https://breus.media/drone-services/drone-real-estate`) / openGraph ru_RU.
  - Переиспользованы готовые компоненты: SmartHeader, DronePageProgress, DroneStickyCta, MobileBottomBar, ScrollArrow, HeroSlideshow, FormatExamplesSlideshow, FaqSection, ProcessNote, DroneContactStitch, DroneFooterStitch. Новых компонентов не создавалось.
  - Hard constraints: STOP-LIST grep — 0 совпадений (профессиональный, качественный, лучший, уникальный, cinematic, premium, venue, HoReCa, Батуми, RTK, ортофото, NDVI, LiDAR, тепловизор, Cinelifter); оборудование — только DJI Air 3S / Avata 2; цены ≥ floors.
  - Изображения: временно из `services-images/drone-restaurants/final/` (1–4.png) — в папке `drone-real-estate/final/` пока только `1.png`. Заменить когда Антон подложит финальные кадры.
  - Build: `NEXT_PUBLIC_DEBUG_MODE=false npm run build` → ✅ 89 страниц (+2 от предыдущих 87), 0 ошибок.
  - Не задеплоено. Ждём команду «DEPLOY NOW» для `git push origin main`.

✅ /360-tour-hotels: полная перезапись страницы — эталон кластера 360° туров (2026-04-19)
  - `app/360-tour-hotels/page.tsx` (919 строк) перезаписан с нуля.
  - Архитектура: монолитная page.tsx в стиле `drone-hotels-tourism`, все данные — массивы в начале файла.
  - Все старые `Tour*`-компоненты (TourHero, TourWhatIs и др.) удалены из импортов.
  - Переиспользованы без форка: `SmartHeader`, `DroneContactStitch`, `DroneFooterStitch`, `DronePageProgress`, `DroneStickyCta`, `MobileBottomBar`, `FaqSection`, `DebugWrapper`, `PackageCta`, `ScrollArrow`.
  - Блоки страницы: Hero → Stats (4 карточки) → Сравнение фото/видео/тур → Problem Cards (6) → Deliverables → Связь с аэросъёмкой → Zone Cards (6, id=zones) → Process (4 шага, id=process) → Pricing (3 пакета + addons, id=pricing) → Niche Cards (5) → FAQ (10 вопросов, id=faq) → Related Services → DroneContactStitch (id=contact).
  - Metadata: title/description/og/twitter/alternates полные. canonical = https://breus.media/360-tour-hotels.
  - Schema.org: Service (360 Degree Virtual Tour, GEL 200–900), LocalBusiness (из drone-hotels-tourism), BreadcrumbList (Главная → 360° туры → /360-tours-service → текущая), FaqSchema из faqItems.
  - SmartHeader: languageLinks RU/EN, sectionLinks: Зоны/Процесс/Цены/FAQ/Контакты.
  - Prices: 200 / 450 / 900 ₾ (все ≥ 200 ₾ — плейсхолдеры, Антон уточнит позже).
  - stat sourceUrl: '#' — Антон принесёт реальные URL исследований.
  - Build: `npm run build` → ✅ 88 страниц, 0 ошибок.
  - Страница — эталон для последующих 360° страниц: рестораны, клиники, недвижимость, туризм.
  - Старый файл `360-tour-hotels.tsx` и компоненты `components/360-tour-hotels/Tour*` не удалялись.

✅ /drone-services/drone-restaurants: parity sync RU с эталоном drone-hotels (2026-04-18)
  - `app/drone-services/drone-restaurants/page.tsx`:
    - «Примеры по форматам»: h2 → `text-3xl md:text-4xl`; `<img>` → `<Image fill sizes="(max-width: 768px) 100vw, 33vw">` (импорт `next/image` добавлен).
    - Добавлена секция «Как выбрать пакет» (между таблицей «Сравнение пакетов» и FAQ): 4 строки-подсказки с целевыми пакетами 250 / 350 / 500 / от 900 ₾ и фоллбэк.
    - «Сравнение пакетов»: h2 выровнен до `text-3xl md:text-4xl`.
    - Schema: `localBusinessSchema['@id'] = https://breus.media/#organization`; `serviceSchema.provider = { '@id': ... }`; `areaServed` → плоский массив `['Tbilisi','Kakheti','Telavi','Sighnaghi','Mtskheta','Kutaisi','Georgia']`; + `category: 'Aerial Videography for Hospitality'`.
  - Тексты Hero / Problems / Process / Pricing / FAQ / Niches не тронуты (финальные).
  - `page.en.tsx` не изменялся — отдельным заходом.
  - Build: `npm run build` — ✅ clean (88 pages); GET /drone-services/drone-restaurants → 200 и все три блока подтверждены в HTML.

✅ /drone-hotels-tourism/en: English version of the drone hotels page (2026-04-18)
  - Создан `app/drone-hotels-tourism/en/page.tsx` — полный EN-перевод источника.
  - Мирроринг структуры: те же импорты, классы, DebugWrapper id, компоненты (SmartHeader с languageLinks RU/EN, DroneStickyCta, PackageCta, HeroBackgroundMountains, MobileBottomBar, FormatExamplesSlideshow, ScrollArrow, DronePageProgress, ProcessNote, FaqSection, DroneContactStitch, DroneFooterStitch).
  - Добавлен `<LangSetter lang="en" />` в начало JSX; импорт из `@/components/common/LangSetter`.
  - Stats/schemas: цифры, URL и source names сохранены; описания и labels переведены; faqSchema / serviceSchema / localBusinessSchema / breadcrumbSchema — EN-версии с canonical на `/drone-hotels-tourism/en`, `inLanguage: 'en'`, `locale: 'en_US'`.
  - Тон: B2B, концизно; исключены forbidden words (professional, unique, best, premium, high-quality), stop-concepts (raw footage, venue, aerial layer, content-as-deliverable).
  - Google Maps: "Google Maps listing / profile" (не "Google Business Profile").
  - География: Tbilisi, Kakheti, Kazbegi, Gudauri, Bakuriani — без Batumi.
  - Цены: GEL (₾) как primary, опциональный USD-эквивалент в скобках в pricing-карточках (250 ₾ (~$90), 350 ₾ (~$130), 500 ₾ (~$185), from 900 ₾ (~$335)).
  - Metadata: "Drone Videography for Hotels in Georgia | FPV Hotel Tours Tbilisi | Breus Media"; alternates.languages ru-RU/en-US/x-default настроены.
  - PackageCta: label → "Discuss this package →", packageName — английское имя пакета (Exterior Flight / Interior FPV Flight / Full Shoot / Shoot with Finished Result), sessionStorage-логика без изменений.

✅ /drone-hotels-tourism: header/ticker/flag/status bar final polish + CTA visibility (2026-04-18)
  - `components/gazeta/SmartHeader.tsx`:
    - Добавлены page-level opt-in пропсы:
      - `showMobilePrimaryCta?: boolean`
      - `showDesktopPrimaryCta?: boolean`
      - `mobileQuickLink?: { label: string; href: string }`
      - `mobileMinimalCenterTime?: boolean`
      - `showDesktopNavTime?: boolean`
      - `stickyTickerUnderHeader?: boolean`
    - На странице отелей включена конфигурация:
      - mobile CTA скрыта (`showMobilePrimaryCta={false}`)
      - desktop CTA в шапке скрыта (`showDesktopPrimaryCta={false}`)
      - mobile quick button `ЦЕНЫ` (anchor `#pricing`, smooth scroll)
      - time-status в mobile center и desktop nav
      - ticker immediate + sticky under header
    - В статус-связке оставлены только `[flag] [green pulse dot] [time]` (без `Tbilisi/Тбилиси` в minimal mode).
    - Удалена вертикальная линия между флагом и временем; зелёная точка выровнена по центру с симметричными отступами (`mx-3`) от флага и часов.
    - Ticker обновлён:
      - hero state: `bg-transparent` + `backdrop-blur(12px)` + тонкие `border-y`
      - sticky/scrolled state: `bg-black/80` + плавный transition
      - удалены debug-wrapper плашки из контента тикера (нет `#208x` внутри самой строки)
      - добавлены разделители `•`
      - hover: замедление движения строки + лёгкое усиление яркости текста
      - итоговая типографика: все слова в одном жёлтом цвете (outline-черeдование убрано, цвет зафиксирован инлайном).
  - `components/drone-restaurants/MobileBottomBar.tsx`:
    - Добавлены опции:
      - `heroId?: string`
      - `revealAfterHero?: boolean`
      - `smoothVisibility?: boolean`
    - Логика для отелей: hidden на старте, reveal после полного выхода hero, hide при возврате в hero, и hide при видимой форме контакта.
  - `components/common/AnimatedFlag.tsx`:
    - Компонент переведён на PNG-эмблему `services-images/gazeta/flag-badge.png`.
    - Очистка контейнера от лишних «рамочных» эффектов, `mix-blend-screen`, `object-contain`.
    - Текущий размер: width `64px` (доминирующий X2-скейл относительно раннего состояния), высота auto.
    - Добавлена анимация «на ветру» (`flag-wave`, 3.8s, infinite).
  - `app/drone-hotels-tourism/page.tsx`:
    - Подключены новые пропсы `SmartHeader` и `MobileBottomBar` только для этой страницы.
  - Проверка:
    - Многократно прогнан `npm run build` — ✅ успешно.
    - Локальный сервер перезапускался после ключевых блоков правок на `http://localhost:3200`.

✅ /drone-hotels-tourism: package CTA prefill in contact form (2026-04-18)
  - Добавлен `components/drone-hotels-tourism/PackageCta.tsx` (`'use client'`) для кнопок в pricing-карточках.
  - `PackageCta` пишет шаблон в `sessionStorage` (`drone-hotels-tourism-prefill-message`) и плавно скроллит к `#contact`.
  - В `app/drone-hotels-tourism/page.tsx` заменена только кнопка `Обсудить этот пакет →` внутри `pricingCards.map()` на `<PackageCta ... />`.
  - В `components/drone/DroneContactStitch.tsx` добавлен optional проп `initialMessage?: string`.
  - `textarea` в поле «Коротко о задаче» сделан controlled: `message` + `setMessage`, `id="contact-message"`.
  - Начальное значение: `useState(initialMessage ?? '')`; при mount на `/drone-hotels-tourism` читается sessionStorage-префилл и очищается.
  - Поведение остальных CTA (например, «Обсудить задачу») сохранено: поле остаётся пустым, если пакет не выбран.
  - Build: `npm run build` — ✅ успешно.

✅ Visual polish pass 2: drone-hotels-tourism remaining audit fixes (2026-04-18)
  - «Что снимаем»: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3, убран col-span-2, text-center, mx-auto max-w-4xl
  - Hero: h1 max-w-5xl → max-w-4xl
  - Process h3: text-lg → text-xl
  - Локации h3: уже text-lg (без изменений)
  - Hero overlay: значений ≥0.85 нет — не меняем (overlay page-level 0.15/0.55)
  - FAQ мобильный шрифт: компонент внешний, не трогаем
  - Sticky bar pb-20: уже на main (без изменений)
  - Build: npm run build — ✅ clean

✅ Visual polish: drone-hotels-tourism typography & spacing audit fixes (2026-04-18)
  - H2 унифицированы до text-3xl md:text-4xl (строки 828, 972)
  - H3 в "Что говорят" подняты до text-lg md:text-xl
  - Deliverables: радиусы 16/12px, H3 text-lg унифицированы
  - Лид-абзац "Что снимаем" выделен text-lg text-white/85
  - Hero pb-24 → pb-16, секция после Hero py-16 → py-12
  - Stats source opacity 50→60, disclaimer 45→55
  - Pricing md:grid-cols-2 fallback добавлен
  - CTA кнопки py-3.5 для тач-таргета
  - Geography section py-24 → py-16 (средняя из трёх тяжёлых секций в конце)
  - Build: npm run build — ✅ clean

✅ Root layout SEO: metadataBase, Organization JSON-LD, OG defaults (18.04.2026) — `app/layout.tsx`, `components/common/LangSetter.tsx`, EN pages
  - Добавлен `metadataBase: https://breus.media` в корневом layout.
  - Добавлен минимальный Organization JSON-LD с @id=https://breus.media/#organization (мерджится с L3 schema по одинаковому @id).
  - Обновлены OG defaults (siteName, locale ru_GE, url) и twitter defaults (`summary_large_image`, `@breusmedia`).
  - Обновлён root fallback description на нейтральный брендовый.
  - Создан `components/common/LangSetter.tsx` для установки `document.documentElement.lang` на EN-страницах (клиентский, после гидратации).
  - Подключён LangSetter на существующие EN-страницы-источники: `/drone-service/page.en.tsx`, `/drone-services/drone-restaurants/page.en.tsx`.
  - `app/drone-hotels-tourism/en/page.tsx` в репозитории отсутствует — пропущен без создания файла.
  - ⚠️ Долгосрочно: стоит мигрировать на `app/[lang]/` структуру для правильного серверного `<html lang>` — отложено отдельным коммитом.
  - Build: `npm run build` — ✅ успешно (есть предсуществующий warning: `Using edge runtime on a page currently disables static generation for that page`).

✅ /drone-services/drone-restaurants: выравнивание по эталону /drone-hotels-tourism (17.04.2026)
- **Файл:** `app/drone-services/drone-restaurants/page.tsx`
- **Сделано:**
  - `/drone-services/drone-restaurants` приведена к эталонной структуре `/drone-hotels-tourism`.
  - Удалены: `audienceCards`, `roleScenarios`, `nicheMistakes`, `freeImprovements`, `shootChecklist`, `seoAnswers`, `shortQA`.
  - Добавлены: блок статистики `Что говорят цифры`, `Mid-CTA 2`, секция `Грузия + правила полётов`.
  - Геоблок `Где мы снимаем в Тбилиси` перемещён вниз: после `Смежные услуги`, перед `Pre-contact CTA`.
  - `faqItems` сокращён до 13 вопросов; удалены дублирующие вопросы, обновлён вопрос про Instagram/Wolt/Glovo/Google Maps.
  - В Hero переписаны 2 абзаца (без зеркального текста с отелями).
  - В `#contact` подключён `DroneContactStitch` с `preselectedServices={['drone']}`.
  - В `page.tsx` удалены все вхождения `Google Business Profile`, `Батуми`, `Batumi`.
- **Результат:** обе ключевые L3-дрон-страницы теперь соответствуют единой структуре — шаблон готов для масштабирования на винные отели, спорт, авто, туризм.

✅ /drone-hotels-tourism: verified stats + удаление Batumi из schema (17.04.2026)
- **Файл:** `app/drone-hotels-tourism/page.tsx`
- **Что обновлено:**
  - `serviceSchema.areaServed` переведён в массив и очищен от Batumi:
    - `["Tbilisi", "Kakheti", "Kazbegi", "Gudauri", "Bakuriani", "Georgia"]`
  - `statsCards` полностью заменён на подтверждённые цифры и источники:
    - `65%` — Google/Ipsos Traveler's Road to Decision
    - `×2.7` — Google Business Profile official data
    - `2 из 3` — Think with Google / YouTube research
    - `1.5–5%` — RMS Cloud Hotel Benchmark
- **Проверка:**
  - `npm run build` — успешно, 0 ошибок
  - `rg "Batumi|Батуми" app/drone-hotels-tourism/page.tsx` — 0 вхождений
  - В JSON-LD страницы Batumi удалён.

✅ /drone-hotels-tourism: stats + geography + preselect в форме (17.04.2026)
- **Файлы:** `app/drone-hotels-tourism/page.tsx`, `components/drone/DroneContactStitch.tsx`
- **Контент и структура:**
  - В `problemCards` добавлена 6-я карточка про procrastination («Думаю об этом уже полгода…»).
  - После секции `Как это выглядит` добавлена новая секция `Что говорят цифры` (`DebugWrapper id={385115}`) с 4 карточками статистики и кликабельными источниками.
  - После `Смежные услуги` добавлена новая секция `Где мы снимаем в Грузии` (`DebugWrapper id={385365}`) с 6 регионами.
  - Обновлены `nicheCards`:
    - «Курортный отель (Батуми / Чёрное море)» → «Винный отель в Кахетии»
    - «Горный / эко-отель (Казбеги, Местиа, Кахетия)» → «Горный отель (Казбеги, Гудаури, Бакуриани)»
  - В секции `Почему Грузия — особый визуальный продукт` абзац про Батуми заменён на Гудаури/Бакуриани.
  - В `faqItems` обновлён ответ `Работаете ли вы за пределами Тбилиси?` без упоминания Батуми.
  - В `whyUsCards` обновлён текст карточки `Вид из окна — главный кадр` (без Батуми).
- **Форма контакта:**
  - `DroneContactStitch` расширен опциональным пропом `preselectedServices?: string[]`.
  - Добавлена внутренняя модель `id/label` для услуг (включая `id: 'drone'` для «Аэросъёмка»).
  - На странице отелей передано: `<DroneContactStitch preselectedServices={['drone']} />`.
  - Для страниц, где проп не передаётся, поведение формы осталось прежним.
- **Ограничения:**
  - Вхождение `Батуми` сохранено только в `serviceSchema.areaServed`, т.к. по задаче schema-объекты менять нельзя.
- **Сборка:** `npm run build` — успешно, 0 ошибок.

✅ /drone-hotels-tourism: финальная полировка эталонной L3-структуры (17.04.2026)
- **Файл:** `app/drone-hotels-tourism/page.tsx`
- `/drone-hotels-tourism` приведена к эталонной структуре: удалены дубли FAQ, убраны стоп-слова, добавлен mid-CTA после niches, прокинуты `languageLinks` и `heroId`.
- **Что сделано:**
  - Hero: переписаны 2 финальных абзаца; из Hero убрано упоминание `Google Business Profile`.
  - `problemCards`: удалена карточка про EN-коммуникацию (осталось 5 карточек).
  - `deliverablesDefault`: удалён пункт про GCAA; добавлены финальные формулировки 4 пунктов.
  - `whyUsCards`: убран суффикс `(универсальный)` в карточке «Быстрый контакт, без лишних слоёв».
  - `faqItems`: удалён дубль про иностранные отели/сети; добавлены 3 новых вопроса (Booking edge, pre-opening, split winter/summer shoots).
  - Удалены дубль-секции: `Extended FAQ Section` (`seoAnswers`) и `Short Answers Section` (`shortQA`).
  - Добавлен новый `mid-CTA` сразу после `Niches Section`.
  - `SmartHeader`: добавлены `languageLinks` (`RU`, `EN`) перед `sectionLinks`.
  - `DroneStickyCta`: передан `heroId` из страницы (`drone-hotels-tourism-hero`) без изменений компонентов.
- **Сборка:** `npm run build` — успешно, 0 ошибок.
- **Следующий шаг:** привести `/drone-services/drone-restaurants` к той же структуре.

✅ drone-restaurants + drone-hotels-tourism: контентная унификация (17.04.2026)
- **Файлы:** `app/drone-services/drone-restaurants/page.tsx`, `app/drone-hotels-tourism/page.tsx`
- **Сравнение пакетов:**
  - На `/drone-services/drone-restaurants` убран отдельный мобильный карточный рендер таблицы; оставлена единая таблица с `overflow-x-auto` (как на `/drone-hotels-tourism`).
  - На `/drone-hotels-tourism` обновлены строки таблицы: `Фото` (`10+ / — / 10+ / 20+`), `Видео для Google Maps`, `Время на объекте` (`~1,5 / ~1,5 / ~2,5`), передача файлов (`от 24 ч / ... / от 48 ч`).
- **Блок "Как выбрать пакет":**
  - Обновлены формулировки в обоих страницах под единый стиль и сценарии использования.
- **FAQ / Q&A:**
  - `/drone-services/drone-restaurants`: добавлены 3 новых верхних FAQ (что снимаете, комбинированный пакет, пригодность форматов), добавлен FAQ `Есть ли договор?`, удалены устаревшие FAQ про «что даёт дрон-съёмка» и «где ещё использовать материалы», обновлены ответы по срокам и географии.
  - `/drone-hotels-tourism`: удалён FAQ-блок `Как получить Film in Georgia rebate?`; обновлён FAQ про работу с иностранными отелями/сетями; обновлён FAQ `Есть ли договор?`.
- **Блок "Как мы подходим к съёмке":**
  - `/drone-services/drone-restaurants`: полностью переписаны карточки `whyUsCards` под новую ресторанную версию, добавлен отдельный пункт `Снимаем в рабочие часы ресторана`.
  - `/drone-hotels-tourism`: полностью переписаны карточки `whyUsCards` под новую отельную версию (Booking/Google Maps/вид из окна/долгоживущий контент).
- **Дополнительные текстовые правки (`/drone-hotels-tourism`):**
  - Убраны конкретные названия дронов из описания форматов (`Air 3S`, `Avata 2`) в FAQ-ответе.
  - Обновлён ценовой FAQ-абзац на новую версию (4K, аддоны и цены).

✅ SmartHeader + drone-restaurants + drone-hotels-tourism: UX-унификация (17.04.2026)
- **SmartHeader** (`components/gazeta/SmartHeader.tsx`):
  - Новый проп `ctaLabel?: string` — переопределяет текст CTA в хедере и мобильном меню
  - `singleTickerMode`: тикер теперь виден на мобиле (`block` вместо `hidden md:block`)
  - Бургер-меню: «Промо Видео» и «Мероприятия» убраны из мобильного списка услуг
- **MobileBottomBar** (`components/drone-restaurants/MobileBottomBar.tsx`):
  - `'use client'` + IntersectionObserver (скрытие у контактной формы)
  - SVG-иконки WhatsApp (зелёный) и Telegram (синий) — эталон как на `/drone-service`
  - Стандарт применяется на `/drone-services/drone-restaurants` и `/drone-hotels-tourism`
- **drone-restaurants** (`app/drone-services/drone-restaurants/page.tsx`):
  - `singleTickerMode={true}`, `ctaLabel="Обсудить задачу"` в SmartHeader
  - Все «Обсудить проект» → «Обсудить задачу»
  - Шаг 2: «Осмотр места» → «Подготовка»
- **drone-hotels-tourism** (`app/drone-hotels-tourism/page.tsx`):
  - `singleTickerMode={true}`, `ctaLabel="Обсудить задачу"` в SmartHeader
  - Все «Обсудить съёмку» / «Обсудить проект» → «Обсудить задачу»
  - Секция цен: новые тексты всех 4 пакетов, аддоны (Reels +150 ₾, убрано «10 фото»)
  - Заголовок аддонов: «Дополнительно по задаче» + вводный абзац
- **Сборка:** `npm run build` — 0 ошибок, 87 страниц

✅ Drone Hotels Tourism: правки текста в разделе проблем (17.04.2026) — `app/drone-hotels-tourism/page.tsx`
- **Изменения в массиве problemCards:**
  - Строка 63: "но конкуренты тоже" → "но у конкурентов тоже" (грамматическое уточнение)
  - Строка 71: "одна съёмка не закрывает всё" → "одна съёмка закрывает всё" (изменение смысла)
  - Строка 80: "общение на русском и английском" → "общение на грузинском, русском и английском" (добавление языка)
- **Сборка:** `npm run build` — 0 ошибок, 87 страниц
- **Проверка:** локально на `localhost:3200/drone-hotels-tourism`

✅ Gazeta: синхронизация карточек и фиксы скролла 12/13/14 (16.04.2026) — `components/gazeta/NichesStack.tsx`, `constants/l2DirectionConfigs.ts`, `components/real-estate-service/realEstateServicesData.ts`, `components/drone/DroneFooterStitch.tsx`
- **Синхронизация карточек (эталон Gazeta):**
  - По секциям `03/04/05/06` синхронизированы названия/подзаголовки/описания/теги с L2-страницами по кнопке `Все услуги`.
  - Для устойчивости добавлена каноникализация аэросъёмки по `href` (в дополнение к title), чтобы дубли не расходились при вариативных названиях.
- **Массовые текстовые правки карточек:**
  - Недвижимость: обновлены карточки `Аэросъёмка недвижимости`, `Видеотур объекта`, `Презентационное видео ЖК`, `Рекламный ролик для ЖК`.
  - 360°: унифицированы формулировки:
    - `360° туры для отелей`
    - `360° туры для автобизнеса`
    - `360° туры для ресторанов`
    - `360° туры для туризма и локаций`
    - `360° туры для клиник`
  - AI/клиники:
    - удалена карточка `AI-упаковка контента` из клиник (и в Gazeta, и в L2-конфиге клиник);
    - подзаголовок клиник обновлён на: `Видео для медицинских центров — пациент выбирает клинику до первого звонка`.
  - Туризм (секция): обновлён subheading на версию без «по Грузии».
  - Ресторанная AI-карточка: `AI-упаковка меню и описаний` → `AI-карточки, меню и delivery-упаковка`.
- **UI/scroll фиксы:**
  - Устранён конфликт перехода по навигации секций `12/13/14`:
    - возвращена корректная высота стека `totalSteps * 100vh`;
    - переход по шагам переведён на расчёт от фактической позиции целевого блока (без грубого `index * vh`).
  - Оптимизирован зазор между формой и футером:
    - уменьшены нижние паддинги формы;
    - подкорректирован верхний отступ футера `DroneFooterStitch`.
- **Проверка:**
  - Все изменения валидировались на `localhost:3200`.
  - После ключевых правок выполнялся `npm run build` (успешно).

✅ Gazeta: эталонизация карточек 02/03/04 + масштабирование дублей + обновление AI секции 05 (16.04.2026) — `constants/l2DirectionConfigs.ts`, `components/gazeta/NichesStack.tsx`
- **Эталон секции 03 (360° туры)**:
  - Карточки `360° туры для недвижимости/отелей/ресторанов/автобизнеса/туризма и локаций/клиник/бизнеса` обновлены по финальным текстам пользователя.
  - Для секции 03 выровнены карточки по высоте и скорректирована логика desktop scroll, чтобы в окне стабильно читались 4 карточки без обрезки.
- **Синхронизация дублей 360°**:
  - В `NichesStack` добавлена каноникализация карточек из секции `03` на остальные секции (06–12): одинаковый title → одинаковые eyebrow/desc/meta.
- **Эталон секции 04 (Reels)**:
  - Обновлены карточки `Reels для недвижимости/отелей/ресторанов/автобизнеса/туризма/клиник/бизнеса/риелтора`.
  - Добавлена каноникализация Reels-карточек из секции `04` для дублей в других секциях:
    - по совпадению title;
    - по `href` (`/reels-promo/...`) для случаев вариативных заголовков.
- **Эталон секции 02 (Аэросъёмка)**:
  - Применено то же правило: карточки секции `02` используются как источник истины для одноимённых дублей в других секциях.
- **Секция 05 (AI-контент) — массовое обновление карточек**:
  - Обновлены тексты и, где нужно, названия карточек:
    - `AI-визуализация недвижимости`
    - `AI staging и виртуальная меблировка`
    - `AI-визуализация пространств и интерьеров`
    - `AI-продуктовый визуал`
    - `AI-визуал для автобизнеса`
    - `AI-карточки, меню и delivery-упаковка`
    - `AI-визуал для брендов и маркетинга`
    - `AI-описания для отеля`
    - `AI-упаковка туристических предложений`
- **Проверка**:
  - Основная валидация выполнялась на `http://localhost:3200/gazeta` (рабочий порт пользователя).
  - Тексты и вхождения дополнительно сверялись через `curl`/`rg` по dev-выдаче.

✅ NichesStack: Обновление карточки "360° виртуальные туры" в недвижимости (16.04.2026) — `components/gazeta/NichesStack.tsx`
- **Карточка 360° туров для недвижимости (секция 06)**:
  - Подзаголовок (eyebrow): "Риэлтор · Застройщик · Агент"
  - Описание (desc): "Покажите объект инвестору до выезда. 360° тур заменяет первичный осмотр и приводит на встречу уже заинтересованного покупателя."
  - Теги (meta): "Показ, Планировка, Конверсия"

✅ NichesStack: Форматирование субзаголовков + изменение размера шрифта (16.04.2026) — `components/gazeta/NichesStack.tsx`
- **Удаление геолокаций из субзаголовков**: Убраны упоминания "Тбилиси, Батуми и вся Грузия" из трёх секций для универсализации контента:
  - Секция `02` (АЭРОСЪЁМКА): "Комплексные решения аэросъёмки для бизнеса и частных лиц."
  - Секция `03` (360° туры): "Интерактивные 360° туры для пространств, объектов и локаций"
  - Секция `12` (IT): "Продакшн видео, кейс-стади и AI-визуал для IT-компаний и стартапов"
- **Увеличение размера шрифта для АЭРОСЪЁМКА**: Добавлено встроенное CSS-свойство `font-size: clamp(1.352rem, 5vw, 2.028rem)` (мобиль 21.63px, макс 32.45px) исключительно для секции `02` через условие `isAerialCompactScreen`.

✅ Bugfix: DebugWrapper layout + NichesStack TypeScript (16.04.2026) — `components/debug/DebugWrapper.tsx`, `components/gazeta/NichesStack.tsx`
- **DebugWrapper**: В debug-режиме `relative group` переопределял `fixed`/`absolute`/`sticky` из className (Tailwind CSS-порядок: `relative` побеждал). Добавлена проверка — `relative` не добавляется если className уже содержит позиционирование.
- **NichesStack TypeScript 5.9**: Исправлены 3 ошибки: (1) `niche.detailedContent` narrowed to `undefined`/`never` в else-ветке — решено через `as unknown as DetailedContent`; (2) мёртвая ветка `method === 'Звонок'` при типе `'Telegram' | 'WhatsApp' | 'Mail'` — удалена; (3) `activeStepIndex` не передавался в FormCard — добавлен.
- **Rebuild**: `NEXT_PUBLIC_DEBUG_MODE=false npm run build` — ✅ 0 ошибок. Тёмная полоса вверху hero и красные debug-рамки устранены.

✅ NichesStack: Оптимизация терминального экрана и футера (16.04.2026) — `components/gazeta/NichesStack.tsx`, `app/gazeta/page.tsx`, `components/drone/DroneFooterStitch.tsx`
- **Уменьшение верхнего отступа**: Убран `justify-end` в контейнере формы, что позволило поднять её выше. Верхний отступ сокращен ~в 3 раза (`pt-4 md:pt-6`), убирая лишнее пустое пространство между навигацией и формой.
- **Интеграция с футером**: Футер теперь визуально следует сразу за формой. Установлено фиксированное расстояние в **40px** между нижней границей формы и текстом футера (Меню/Контакты).
- **Правка верстки**: Добавлен недостающий закрывающий `</div>` в `NichesStack.tsx`, исправляющий ошибку парсинга после рефакторинга.
- **Spacing Strategy**: Использовано сочетание `pb-10` в контейнере формы и `pt-4` в футере для чистого и предсказуемого зазора без использования перекрывающих отрицательных отступов.


- **Восстановление 13/14**: Секции "Частые вопросы" и "Форма связи" возвращены в основной стек и приведены к общему стилю.
- **Shared Header**: Введен компонент `StackSectionHeader` для унификации заголовков всех 14 карточек.
- **Carousel Logic**: Реализована авто-прокрутка заголовка. Активный таб теперь всегда плавно выезжает в центр экрана при скролле.
- **Highlighting Fix**: Исправлен баг, из-за которого на Desktop не подсвечивались активные пункты меню. Теперь индекс отслеживается на всех устройствах.
- **Унификация UI**: Стили FAQ и Forms (отступы, шрифты, трекинг) теперь идентичны основным карточкам ниш.

✅ NichesStack: расширение до 12 ниш + новые секции 03/04/05 (15.04.2026) — `components/gazeta/NichesStack.tsx`, `constants/gazetaRoutes.ts`

  **Новая нумерация секций (01–12):**
  - `00` — Аэросъёмка (повторная нумерация пользователем)
  - `01` — Агентство (intro, isIntro: true)
  - `02` — Аэросъёмка (было `00`)
  - `03` — 360° Туры (НОВАЯ секция, маршрут: `/360-tours-service`, конфиг: `tours360Service`)
  - `04` — Reels (НОВАЯ секция, маршрут: `/reels-service`, конфиг: `reelsService`)
  - `05` — AI Контент (НОВАЯ секция, маршрут: `/ai-visualization-service`, конфиг: `aiVisualizationService`)
  - `06` — Недвижимость (было `02`/`06`)
  - `07` — Отели (было `03`, конфиг: `hotelsService`)
  - `08` — Рестораны (было `04`, конфиг: `restaurantsService`)
  - `09` — Авто (было `05`, конфиг: `autoService`)
  - `10` — Туризм (было `07`, конфиг: `tourismService`)
  - `11` — Клиники (было `08`, конфиг: `clinicsService`)
  - `12` — IT (было `09`, конфиг: `businessService`)

  **Навигация (`stackStepNavItems`):**
  - Частые вопросы → ID `13` (было `10`)
  - Форма связи → ID `14` (было `11`)

  **Кнопки "Все услуги" (`buildAllServicesCard`):**
  - `02` → «Все услуги аэросъёмки»
  - `03` → «Все услуги — 360° Туры»
  - `04` → «Все услуги — Reels»
  - `05` → «Все услуги — AI Контент»
  - `06` → «Все услуги недвижимости»
  - `07`–`12` → соответствующие ниши

  **Маршруты (`gazetaNicheLandingRoutes`):**
  - Все 10 ниш (`02`–`12`) прописаны с корректными путями

  **Секция 04 (Reels) — UI-правки:**
  - Удалена строка `eyebrow: "Short-form видео"` из `detailedContent`
  - Heading «REELS & SHORTS» и subheading по центру (`text-center mx-auto`) через новый флаг `isReelsScreen`

  **Условия Card-компонента:**
  - `isAerialScreen` / `isAerialCompactScreen` / `shouldRenderDetailedHeading/Eyebrow` обновлены на `niche.id !== "00"` (вместо `"02"`) в соответствии с пользовательским рефактором ID
  - Добавлена константа `isReelsScreen = niche.id === "04"` для центрирования heading-блока
  - `buildAllServicesCard` возвращает `null` для ID `"12"` (IT) вместо `"09"`

  - Build: проверка не запускалась (Hot Reload в dev-режиме)

✅ Gazeta rebranding: Studio → Agency & NichesStack Intro integration (15.04.2026) — `components/gazeta/NichesStack.tsx`, `app/gazeta/page.tsx`

  - **Rebranding**: Все упоминания «Студия» заменены на «Агентство» (Agency) в интро-блоке и навигации Gazeta.
  - **NichesStack integration**: Блок «Студия» (теперь «Агентство») официально интегрирован в `NichesStack` как Шаг 0.
  - **Animation Fix**: Унифицирована анимация скролла — интро-блок теперь является статичным «фундаментом» стека, на который накладываются последующие ниши (Adoratorio-style), убран независимый параллакс и «прыжки» при скролле.
  - **UI/UX Cleanup**: Удалён заголовок «Нишевой опыт» для чистоты интерфейса. Выровнены высоты колонок в интро-блоке (описание агентства vs грид тематического опыта).
  - **Code Cleanup**: Удалён неиспользуемый компонент `components/gazeta/StudioSectionZero.tsx`.
  - **Environment**: Локальный сервер переведён на `npm run dev` (порт 3200) для работы Fast Refresh.
  - Build: ✅ clean.

✅ gazeta UI polish batch (14.04.2026) — `components/gazeta/StudioSectionZero.tsx`, `components/gazeta/HeroSection.tsx`, `components/gazeta/NichesStack.tsx`
  - **StudioSectionZero**: хедер «0 СТУДИЯ» приведён к `h-12 text-xs tracking-widest px-6` на десктопе — совпадает с хедерами ниш 00–10. Убраны блоки процесса «01 Бриф → 04 Упаковка» (массив `processSteps` и рендер-грид). В карточках ниш удалены эмодзи и описания — оставлены только названия.
  - **HeroSection**: трекинг кинетического «BREUS MEDIA» снижен с `md:tracking-[0.4em] lg:tracking-[0.5em]` до `md:tracking-[0.18em] lg:tracking-[0.22em]` — текст больше не обрезается краями вьюпорта на 1280px. Статичная жёлтая стрелка `↓` внутри CTA-блока удалена; остался только круглый scroll-индикатор внизу экрана.
  - **NichesStack шаг 10**: паддинги формы сжаты (`md:px-12 md:py-20` → `md:px-8 md:py-4`, карточка `md:p-8` → `md:p-5`, `md:space-y-5` → `md:space-y-2.5`) — форма теперь не требует скролла на типичном ноутбуке (780px+ viewport).
  - Build: ✅ clean; 87 страниц, 0 ошибок.

✅ build verify (14.04.2026): `npm run build` — ✅ clean; 87 страниц, 0 ошибок.
  - Уточнение: предыдущие записи указывали "81 страницу" — фактически в проекте 87 роутов (включая `/drone-service/en`, `/drone-services/drone-restaurants/en`, `/drone-services/`, `/promo-video/`, `/promo-video/promo-business`, `/reels-promo/reels-business`). Все эти страницы были в коде ранее, просто не учтены в счётчике.
  - Незакоммиченных изменений кода: 20 файлов (ModifiedM) + 11 новых компонентов/файлов (Untracked). Все изменения задокументированы в CONTEXT_NEXT_CHAT.md и CHANGELOG_ARCHIVE.md.

✅ gazeta section 0 (Студия): переведена из «внутреннего окна» в full-width экран как 00 (14.04.2026) — `components/gazeta/StudioSectionZero.tsx`
  - Убран контейнер-«окно»: `max-w`, скругление внешней рамки и боковые внешние отступы.
  - Секция теперь заполняет ширину страницы слева направо: `w-full` + `border-y` как цельный экранный блок.
  - Header-полоса `0 СТУДИЯ` и основная двухколоночная композиция растянуты на всю ширину, сохраняя desktop-only режим (`hidden md:block`).
  - CTA `Как мы работаем` переведён на `#niches` (desktop-якорь), чтобы ссылка не вела в mobile-only цель.
  - Build: ✅ clean; 0 ошибок.

✅ gazeta niches 00–07: единый стиль карточек, 5 карточек + кнопка «Все услуги» (14.04.2026) — `components/gazeta/NichesStack.tsx`
  - `servicesGridClassName` упрощён до единого: `"md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-2.5"` для всех ниш
  - Десктоп рендер: `limitedServices.map(...)` для всех ниш (5 карточек без allServicesCard)
  - Кнопка «Все услуги» показывается под гридом для всех ниш с нишевым текстом: 00→аэросъёмки, 01→недвижимости, 02–07→«Все услуги — {название}»
  - `isRealEstateReferenceCard = false`, `singleCtaLabel = null`, `isSingleCtaExperimentCard = false` — убраны все спецпути нише 01
  - Build: ✅ clean; 0 ошибок.

✅ gazeta niche 01: унифицированы карточки под стиль нише 00 (14.04.2026) — `components/gazeta/NichesStack.tsx`
  - `isRealEstateReferenceCard = false` — убраны все спецстили (нестандартные размеры шрифтов, многострочная категория, цена-чип, single-CTA эксперимент)
  - `singleCtaLabel = null`, `isSingleCtaExperimentCard = false` — все карточки получили двойные кнопки "ОТКРЫТЬ УСЛУГУ + ОБСУДИТЬ ЗАДАЧУ"
  - Grid нише 01: `xl:grid-cols-5` (было `xl:grid-cols-4 xl:grid-rows-2`)
  - Десктоп рендер: `limitedServices` (5 карточек) + кнопка "Все услуги недвижимости →" → `/real-estate-service`
  - Мобиль (horizontal rail) — без изменений
  - Build: ✅ clean; 0 ошибок.

✅ gazeta niche 00: «Все услуги» → кнопка под 5 карточками, убран xl:grid-rows-2 (14.04.2026) — `components/gazeta/NichesStack.tsx`
  - Десктоп: grid ниши 00 рендерит только 5 карточек (limitedServices), после грида — одна wide кнопка `Все услуги аэросъёмки →` → `/drone-service`.
  - Убран `xl:grid-rows-2` — он резервировал пустую вторую строку (393px), из-за чего контент переполнял панель и кнопка была скрыта за скроллом.
  - Мобиль (horizontal rail) — без изменений.
  - Build: ✅ clean; 0 ошибок.

✅ gazeta redesign: MarqueeSection, HeroSection, SmartHeader, NichesStack, MobileChooser, /drone-service ticker (14.04.2026) — `components/gazeta/MarqueeSection.tsx`, `components/gazeta/HeroSection.tsx`, `components/gazeta/SmartHeader.tsx`, `components/gazeta/NichesStack.tsx`, `components/gazeta/GazetaMobileStepChooser.tsx`, `app/gazeta/page.tsx`, `app/drone-service/page.tsx`
  - **MarqueeSection**: переделан в универсальную одну строку для всех устройств (было две отдельные). Добавлены кликабельные ссылки для ниш и форматов: `НЕДВИЖИМОСТЬ→/real-estate-service`, `ОТЕЛИ→/hotels-service`, `Аэросъёмка→/drone-service`, `360° Туры→/360-tours-service`, `Reels→/reels-service`, `AI Content→/ai-visualization-service`. Высота и размер текста удвоены.
  - **HeroSection**: восстановлена кинетическая типографика "BREUS MEDIA" на мобиле (убрано `hidden md:flex` → `flex`); `yTranslate` скорректирован (`["70vh", "-60vh", "-60vh"]`) чтобы текст не перекрывал контент. Обновлён hero copy на трёхстрочную структуру: заголовок `АГЕНТСТВО ВИЗУАЛЬНОГО ПРОДАКШЕНА И AI-КОНТЕНТА В ТБИЛИСИ`, подзаголовок, описание. Применена типографика из `breus_media_typography_guide.md`: цвета `#F5F4F0`, `#C9A84C` gold, `#C8C7C2`, `#7A7977`; `clamp()` для font-size. CTA `ВЫБЕРИТЕ СВОЁ НАПРАВЛЕНИЕ ↓` стала анимированной (pulsing opacity + bouncing arrow) и кликабельной — плавный скролл к `#niches-nav`. Убран устаревший блок "Видео, аэросъёмка...".
  - **SmartHeader**: из левого угла в начальном состоянии убраны все тексты (агентство, продакшен, AI); оставлен только `<div className="flex-1" />`. Фон хедера при `isLanding` полностью прозрачный (убрана полоса). Порог появления логотипа снижен с 80% до 20% viewport height — логотип появляется, когда кинетический "BREUS MEDIA" проходит уровень часов. Анимация входа логотипа: `opacity 0→1, x -10→0`. В скроллированном состоянии в брендинге только ссылка `Breus Media`, без eyebrow и subtitle.
  - **GazetaMobileStepChooser**: полностью переписан как двухколоночный навигатор. `id="niches-nav"` (цель CTA), `bg-zinc-950`. Левая колонка `ПО НИШЕ` — 7 ниш с ссылками; правая колонка `ПО ФОРМАТУ` — 6 форматов с ссылками, хедер "Ваш формат →" в gold. Футер: "Другая отрасль или формат — напишите, найдём решение."
  - **NichesStack**: шаг 10 (форма) полностью перерисован в стиле DroneContactStitch: градиентная карточка `from-[#141414] via-[#111111] to-[#0d0d0d]`, рамка `border-[#D4A017]/30`, радиальное свечение, heading "ОБСУДИМ ВАШУ ЗАДАЧУ", золотая кнопка отправки. Добавлен state `submitted`. Кнопки "НАЗАД" полностью скрыты на мобиле (`{isMobileCompactTop && prevStep && ...}` заменён на комментарий `replace_all: true`). Кнопка topBack обёрнута в `hidden md:flex`.
  - **app/gazeta/page.tsx**: NichesStack скрыт на мобиле (`hidden md:block`), Chooser виден везде. Добавлена мобильная форма DroneContactStitch (`md:hidden`, order 4). MarqueeSection сначала убрана, затем возвращена только для десктопа (`hidden md:block`, order 2). Удалена дублирующая desktop-секция с DroneContactStitch (form в NichesStack шаге 10 достаточна). Мобильный флоу: Hero → Chooser → Форма → About → Footer.
  - **app/drone-service/page.tsx**: добавлен `import { MarqueeSection }` и `<MarqueeSection />` между DroneHeroStitch и DroneServicesMobileList. MarqueeSection появляется при скролле (через scroll-trigger механизм компонента).
  - Build: `npm run build` — ✅ clean; 87 страниц, 0 ошибок.

✅ drone-service EN hero parity: inline hero replaced with `DroneHeroStitchEn` (13.04.2026) — `components/drone/DroneHeroStitchEn.tsx`, `app/drone-service/page.en.tsx`
  - Создан новый EN-компонент `DroneHeroStitchEn` как структурная/поведенческая копия RU `DroneHeroStitch` (mobile fullscreen hero + typewriter, desktop split с интерактивной правой панелью и мини-каруселью).
  - В `DroneHeroStitchEn` переведены все hardcoded hero-строки: typewriter фразы, desktop/mobile буллеты, CTA, sr-only `h1`, alt/aria, подписи `18 directions` и `from 250 ₾ · Tbilisi · Batumi · Kutaisi`.
  - Правая desktop-панель в EN использует тот же источник `droneServiceItems`, но с локальным slug→EN map (title/category/description/price; для `restorany` добавлен EN `primaryHref`).
  - В `app/drone-service/page.en.tsx` удалён весь inline hero `<section id="drone-service-hero">...</section>` и заменён на компонентный вызов:
    - `<div id="drone-service-hero"><DroneHeroStitchEn hero={pageConfig.hero} /></div>`
  - Остальные EN-секции страницы не изменялись.
  - Build: `npm run build` — ✅ clean; `/drone-service/en` присутствует в build output.

✅ Gazeta cleanup: niche 08 removed, IT cards fixed, business routes retired, ticker line 1 hidden on mobile (13.04.2026) — `components/gazeta/NichesStack.tsx`, `components/gazeta/SmartHeader.tsx`, `constants/gazetaRoutes.ts`, `constants/l2DirectionConfigs.ts`, `app/business-service/page.tsx`, `app/gazeta/custom-business/page.tsx`, `app/gazeta/[slug]/page.tsx`
  - В `NichesStack` удалена ниша `08` (`Ваш бизнес`); после cleanup массив ниш содержит `8` элементов (`00–07`), а стек шагов — `10` элементов вместе с FAQ и формой.
  - Для ниши `07` оставлены только IT-специфичные карточки; ссылки с `/business-service` внутри IT-карточек заменены на `#contact`, а override через `businessService` для `07/08` убран, чтобы рендерились локальные IT-карточки.
  - В `SmartHeader` ticker line 1 (`DebugWrapper id=208`) скрыт на mobile через `hidden md:block`; desktop ticker-поведение сохранено.
  - `gazetaDetailRoutes.it` переведён на `/gazeta/it`; `Ваш бизнес` / `customBusiness` убраны из Gazeta nav/ticker/category-map, а глобальные CTA/related links на `/business-service` заменены на `#contact` или `/gazeta#contact` по контексту страницы.
  - `/business-service` и `/gazeta/custom-business` теперь редиректят на `/gazeta#contact`; статический redirect-файл `app/gazeta/it/page.tsx` удалён, чтобы `/gazeta/it` снова открывался через dynamic Gazeta route.
  - Карточка `Мероприятия` в niche `00` оставлена с ссылкой `/drone-weddings-events`, потому что route существует.
  - Build: `npm run build` — ✅ clean; проверены redirect headers для `/business-service` и `/gazeta/custom-business`.

✅ drone-service EN refactor: page.en switched from inline sections to EN components (13.04.2026) — `app/drone-service/page.en.tsx`, `components/drone/DroneStatsStripEn.tsx`, `components/drone/DronePricingStitchEn.tsx`, `components/drone/DroneProcessStitchEn.tsx`, `components/drone/DroneFlightConditionsNoteEn.tsx`, `components/drone/DroneFAQExpandedEn.tsx`, `components/drone/DroneFooterStitchEn.tsx`, `components/drone/DroneRelatedLinksCompact.tsx`
  - Созданы новые EN-компоненты рядом с RU: stats, pricing, process, flight note, FAQ и footer.
  - `app/drone-service/page.en.tsx` больше не держит inline секции stats/pricing/process/flight note/faq/related/footer и собирается из EN-компонентов по той же схеме, что RU страница.
  - `components/drone/DroneRelatedLinksCompact.tsx` расширен новым `title?: string` с RU default для совместимости со всеми RU страницами.
  - EN related-links теперь рендерятся через `DroneRelatedLinksCompact` с `title="Other Breus Media services"`.
  - Build: `npm run build` — ✅ clean; `/drone-service/en` присутствует в build output.

✅ drone-service EN page created: /drone-service/en (12.04.2026) — `app/drone-service/page.en.tsx`, `app/drone-service/en/page.tsx`, `app/drone-service/DroneServiceContactSectionEn.tsx`, `app/drone-service/page.tsx`, `components/gazeta/SmartHeader.tsx`
  - Создан новый публичный EN роут `/drone-service/en` через `app/drone-service/en/page.tsx` с реэкспортом EN страницы и metadata.
  - Добавлен self-contained EN файл `app/drone-service/page.en.tsx`: EN metadata, EN JSON-LD, inline hero/services/stats/pricing/process/flight-zones/FAQ/related-links/footer и локализованный contact flow.
  - Добавлен локальный client-компонент `app/drone-service/DroneServiceContactSectionEn.tsx` для EN формы с method switch, service chips и success-state.
  - В `components/gazeta/SmartHeader.tsx` добавлена поддержка lower-case `ru/en/ge` для `initialLang` и `languageLinks`, локализован mobile `Contact` label и CTA в burger-меню.
  - В RU странице `app/drone-service/page.tsx` добавлен language switch: `ru` ↔ `en`.
  - Build: `npm run build` — ✅ clean; новый роут `/drone-service/en` присутствует в build output.

✅ drone-service SEO fixes: locale ru_GE, id=pricing, aria-hidden marquee, Тбилиси районы в FAQ (12.04.2026) — `app/drone-service/page.tsx`, `components/gazeta/SmartHeader.tsx`, `components/drone/DroneFAQExpanded.tsx`, `components/drone/DroneHeroStitch.tsx`
  - В `app/drone-service/page.tsx` `openGraph.locale` обновлён с `ru_RU` на `ru_GE`.
  - В `app/drone-service/page.tsx` pricing-блок обёрнут в `<div id="pricing">`, чтобы якорь `#pricing` в header вёл прямо к секции цен.
  - В `app/drone-service/page.tsx` исправлен `ItemList` schema URL для пункта `Туризм и локации` на `https://breus.media/drone-services/drone-territory`.
  - В `components/gazeta/SmartHeader.tsx` дублирующиеся копии ticker-элементов внутри `InteractiveTicker` помечены как декоративные: `aria-hidden="true"` и `tabIndex={-1}` для duplicate-link копий.
  - В `components/drone/DroneFAQExpanded.tsx` обновлён ответ про выезды: добавлены районы Тбилиси и уточнение, что отдельно обсуждается только выезд за пределы Тбилиси.
  - В `components/drone/DroneHeroStitch.tsx` добавлен скрытый семантический `h1` для SEO: `Аэросъёмка дроном для бизнеса в Тбилиси — Breus Media`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ docs-sync(cards): локальная картинка фасадов + финальный порядок 18 карточек (12.04.2026) — `components/drone/droneServicesData.ts`, `public/media/drone-service/drone-facade-2.png`
  - Для карточки `Инспекция фасадов` внешний Unsplash URL заменён на локальное изображение `public/media/drone-service/drone-facade-2.png`, взятое из `services-images/drone-facade/final/2.png`.
  - Через поля `order` зафиксирован финальный порядок всех 18 карточек на странице: `Недвижимость`, `Мониторинг стройки`, `Отели & Курорты`, `Рестораны`, `Регулярные аэроотчёты`, `Земельные участки`, `Реклама и бренд видео`, `Автосалоны и шоурумы`, `Инспекция фасадов`, `Туризм и локации`, `Мероприятия`, `Инспекция объектов`, `FPV Съёмка`, `Съёмка интерьеров и складов`, `Инспекция солнечных панелей`, `Спорт комплексы`, `Мониторинг территорий`, `Агро и виноделие`.
  - Эксперимент с нижним hero-списком на 18 направлений был откатан; текущим состоянием остаётся компактный блок на 4 пункта.
  - Build: `npm run build` — ✅ clean (local ready)

✅ docs-sync(hero+services): зафиксированы незадокументированные правки Hero + карточек направлений (12.04.2026) — `components/drone/DroneHeroStitch.tsx`, `components/drone/DroneServicesStitch.tsx`, `components/drone/droneServicesData.ts`
  - `DroneHeroStitch`: подключён `Manrope` и применён к 4 desktop-фразам слева и описанию в правой hero-карточке (`16px/1.65`, мягкий белый), кнопка `Открыть услугу` переведена в outlined-стиль.
  - `DroneHeroStitch`: мини-карусель справа обновлена (убраны точки; активный пункт — жёлтый текст + жёлтая подложка), подпись под стрелкой уплотнена и приведена к виду `18 направлений` + `от 250 ₾ · Тбилиси · Батуми · Кутаиси`.
  - `DroneServicesStitch`: расширен контейнер карточек до `max-w-[1400px]` (карточки шире при прежних `gap`), убран визуальный верхний заголовок секции.
  - `DroneServicesStitch`: единая типографика всех карточек приведена к стилю первых тестовых (`Manrope` для title/audience/description/tags), кнопки `Открыть услугу`/`Обсудить задачу` возвращены в стандартный вариант.
  - `droneServicesData`: массово обновлены подзаголовки и жёлтые теги по карточкам (`Недвижимость`, `FPV`, `Отели`, `Рестораны`, `Туризм`, `Мероприятия`, `Инспекция объектов`, `Мониторинг территорий`, `Интерьеры и склады`, `Спорт`, `Бренд-видео`, `Автосалоны`, `Агро`, `Земельные участки`, `Инспекция фасадов`, `Инспекция солнечных панелей`, `Регулярные аэроотчёты`); для `Недвижимость` также обновлено описание с референсом HomeJab.
  - `droneServicesData`: в текущем diff отсутствует карточка `Инспекция крыш` (`id: 16`) — зафиксировано как актуальное состояние массива.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(hero): убран дубль строки, правая колонка растянута, отступы подправлены (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Удалена дублирующая metadata-строка под левой кнопкой `Обсудить задачу`.
  - Правая колонка desktop hero растянута на высоту контейнера: `hidden lg:flex flex-col justify-between py-0 h-full`.
  - Внутренняя карточка услуги (`motion.div`) переведена в `flex-1 flex flex-col ...` для заполнения высоты.
  - Нижний отступ hero уменьшен: `pb-16` → `pb-8`.
  - Под стрелкой добавлена дополнительная строка: `от 250 ₾ · Тбилиси · Батуми · Кутаиси`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(hero): layout прижат к краям, фразы уменьшены, кнопки перераспределены, карточка увеличена (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Desktop hero выровнен к краям: `justify-start`, уменьшены верхние отступы (`pt-20 md:pt-24`), снято центрирование контейнера и текста.
  - Desktop grid обновлён на `lg:grid-cols-[55%_42%] lg:gap-[3%]`, фразы в левой колонке уменьшены до `text-[15px] text-white/55 leading-relaxed`.
  - Под левым блоком добавлены CTA `Обсудить задачу` (`#contact`) и metadata-линия `18 направлений · от 250 ₾ · Тбилиси · Батуми · Кутаиси`.
  - В правой карточке оставлена только одна full-width кнопка `Открыть услугу`; увеличены `category/title/description` (`11px / 3xl / 15px`).
  - Под desktop-стрелкой добавлена подпись `18 направлений ↓`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(hero+page): убран вводный блок под hero, десктоп карточка ниши восстановлена (12.04.2026) — `app/drone-service/page.tsx`, `components/drone/DroneHeroStitch.tsx`
  - В `app/drone-service/page.tsx` полностью удалена секция `ВВОДНЫЙ ТЕКСТ + TRUST STRIP` между hero и `DebugWrapper id={10300}`.
  - В `DroneHeroStitch` desktop grid изменён на пропорцию `lg:grid-cols-[3fr_2fr]`.
  - Левая колонка hero упрощена: оставлены `price`, `title` и CTA `Обсудить проект`; удалены 4 фразы и metadata-строка.
  - Правая desktop-колонка заменена на карточку ниши (`category/title/description`) с кнопками `Открыть` и `Подобрать` + чипы направлений.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(hero): Split Hero — текст слева, карусель из актуальных данных справа, убраны модели дронов, добавлены 4 фразы и 18 направлений (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Desktop hero переведён в split-layout: слева заголовок/4 тезиса/CTA `Обсудить проект` + metadata-строка; справа — карусель по `droneServiceItems`.
  - Удалён legacy-блок `DebugWrapper id=10180` (компактный навигатор/модели дронов).
  - Hero tagline (`DebugWrapper id=10101`) теперь показывает `price` активного направления вместо статичного текста.
  - Таймер ротации оставлен `5000ms`, обновление индекса синхронизировано с `droneServiceItems.length`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(menu-socials): mobile burger footer icons (IG/TG/WA), LinkedIn removed (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В нижнем `border-t` блоке mobile burger меню текстовые кнопки `IG / TG / LI / WA` заменены на 3 иконки: Instagram, Telegram, WhatsApp.
  - LinkedIn удалён из footer social блока мобильного меню.
  - Telegram и WhatsApp SVG-иконки перенесены по аналогии с `components/drone/MobileBottomBar.tsx`.
  - Для Instagram добавлена иконка `Instagram` из `lucide-react`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(desktop-drone-service): header/process/intro + flight SEO block (11.04.2026) — `components/gazeta/SmartHeader.tsx`, `components/drone/DroneProcessStitch.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFlightConditionsNote.tsx`
  - В desktop nav `SmartHeader` для `sectionLinks` добавлен фильтр `href !== '#services'`, чтобы убрать дубль пункта `Услуги` (mobile burger без изменений).
  - В `DroneProcessStitch` обновлены названия шагов: `ЗАПРОС`, `ПЛАН`, `СЪЁМКА`, `ПЕРЕДАЧА`; для шага 02 описание изменено на `уточняем зону полёта`.
  - В desktop-блок процесса добавлен лейбл `От заявки до готовых файлов`; описания шагов сделаны видимыми (`text-sm text-gray-500` без `hidden`).
  - В desktop intro-блоке `/drone-service` абзац заменён на список из 4 тезисов; metadata-линия `DJI Air 3S + Avata 2 · 4K · ...` сохранена.
  - В `DroneFlightConditionsNote` добавлен SEO-параграф с техническим блоком по оборудованию (DJI Air 3S / DJI Avata 2 / Insta360 X5).
  - Build: `npm run build` — ✅ clean (local ready)

✅ refactor(menu): реструктура mobile burger menu в SmartHeader (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В mobile dropdown удалён блок `Индустрии` (`copy.mobileIndustriesLabel` + `copy.industryNavItems`).
  - Первым элементом меню добавлена full-width кнопка `/about` с текстом `{copy.aboutLabel}` (`О Нас` / `About`).
  - Блок `Услуги` (`copy.mobileServicesLabel` + `copy.serviceNavItems`) оставлен без структурных изменений.
  - В блоке `Разделы` удалён фильтр `href !== '#services'`: рендерятся все `sectionLinks`.
  - Добавлена автодобавка `{ label: 'Контакты', href: '#contact' }` в конец mobile-списка разделов, если `#contact` отсутствует.
  - Нижний `border-t` блок с CTA и соцсетями не изменялся.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(mobile-spacing): сжаты py/mb на мобиле в 4 компонентах drone-service (11.04.2026) — `components/drone/DroneServicesStitch.tsx`, `components/drone/DronePricingStitch.tsx`, `components/drone/DroneFAQExpanded.tsx`, `components/drone/DroneStatsStrip.tsx`
  - `DroneServicesStitch`: `py-24` → `py-8 md:py-24`.
  - `DronePricingStitch`: `py-24` → `py-10 md:py-24`, `mb-16` → `mb-8 md:mb-16`, `mt-10` → `mt-6 md:mt-10`, `mt-8` в addons-блоке удалён.
  - `DroneFAQExpanded`: `py-24` → `py-10 md:py-24`, header `mb-16` → `mb-8 md:mb-16`.
  - `DroneStatsStrip`: `py-14` → `py-8 md:py-14`, header `mb-8` → `mb-5 md:mb-8`, карточки `py-8` → `py-5 md:py-8`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(menu): О нас в меню, соцсети + CTA внизу мобильного меню (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В `headerCopy.RU.industryNavItems` первым пунктом добавлен `О нас` (`/about`).
  - В `headerCopy.EN.industryNavItems` первым пунктом добавлен `About` (`/about`).
  - В мобильное меню добавлен нижний блок с CTA `Обсудить задачу` (ссылка `#contact`) и соцкнопками `IG / TG / LI / WA`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(header): строка услуг скрыта на мобиле, заголовок меню исправлен (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В блоке `shouldShowTickers` строка `Running Text Line 2` (`DebugWrapper id=209`) и разделитель перед ней обёрнуты в `hidden md:block`: на mobile скрыты, на desktop сохранены.
  - `Running Text Line 1` (`DebugWrapper id=208`) оставлена без изменений и продолжает отображаться на всех экранах.
  - В `headerCopy` обновлён `mobileMenuTitle`:
    - RU: `Навигация Gazeta` → `Breus Media`
    - EN: `Gazeta Navigation` → `Breus Media`
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(ui): мобильное меню + drone-service cleanup (11.04.2026) — `components/gazeta/SmartHeader.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneContactStitch.tsx`
  - На `/drone-service` удалён верхний breadcrumb `Главная → Аэросъёмка`.
  - В `DroneFooterStitch` соцкнопки переведены на иконки Instagram/Telegram/Facebook/LinkedIn; добавлен LinkedIn.
  - В `DroneContactStitch` обновлены тексты поля соцсетей: `ВАШИ СОЦСЕТИ ИЛИ САЙТ` и placeholder `@аккаунт, ссылка или название объекта.`
  - В mobile dropdown (`SmartHeader`) удалены верхние тексты `Breus Media` и `Навигация Gazeta`, скрыт элемент `#205` (Phone Connect) на mobile, убран пункт `Услуги` из блока `Разделы`, убрана нижняя CTA-кнопка `Обсудить проект`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(process): тексты шагов обновлены — от заявки до готовых файлов (11.04.2026) — `components/drone/DroneProcessStitch.tsx`
  - В массиве `steps` обновлены все 4 шага: `ЗАДАЧА`, `ПОДГОТОВКА`, `СЪЁМКА`, `ГОТОВО` с новыми описаниями.
  - В mobile-блоке заголовок изменён с `Как мы работаем` на `От заявки до готовых файлов`.
  - Структура/классы/JSX компонента не изменялись, затронуты только тексты.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(process-mobile): горизонтальный скролл → вертикальный список со стрелками (11.04.2026) — `components/drone/DroneProcessStitch.tsx`
  - В mobile-блоке `DroneProcessStitch` удалён горизонтальный скролл, добавлен вертикальный список шагов (`Заявка → Подготовка → Съёмка → Материал`) с разделителями-стрелками.
  - Каждый шаг теперь отображает номер, заголовок и короткое описание в компактной карточке (`rounded-[8px]`, `bg-white/[0.03]`, `border-white/[0.07]`).
  - Desktop-ветка (`hidden md:grid`) и отступы секции `py-4 md:py-24` оставлены без изменений.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(mobile): направления компактнее, процесс без пустого пространства (11.04.2026) — `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneProcessStitch.tsx`
  - `DroneServicesMobileList`: уплотнён mobile-блок направлений (`py-4`, `gap-1.5`, карточки `rounded-[8px]`, `py-1.5`, `text-[12px]`, стрелка-блок `mt-4`).
  - `DroneProcessStitch`: на mobile сокращены внешние отступы секции (`py-4`), добавлен `py-2` в горизонтальный scroll-контейнер, шаги ужаты до `h-9` и `min-w-[68px]`.
  - Desktop-ветка процесса (`md+`) не изменялась.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(footer+contact): FB соцсеть, меню 5 ссылок, теги на мобиле, success-state формы (11.04.2026) — `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneContactStitch.tsx`
  - В `DroneFooterStitch` добавлена третья соцкнопка `FB` (`https://www.facebook.com/breusmedia`) в том же стиле, что `IG/TG`.
  - Footer-меню расширено до 5 ссылок: `Аэросъёмка`, `360° туры`, `Reels и видео`, `AI-визуализация`, `Контакты`.
  - В `DroneContactStitch` добавлен state `submitted` и success-state после submit (✅ + подтверждение по связи в Telegram/WhatsApp).
  - Блок `Интересующие услуги` снова показывается на mobile (убран `hidden md:block`).
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(contact+sticky): кнопка → Отправить заявку, sticky → Обсудить задачу, скрывать sticky при форме (11.04.2026) — `components/drone/DroneContactStitch.tsx`, `components/drone/MobileBottomBar.tsx`, `app/drone-service/page.tsx`
  - В `DroneContactStitch` submit-кнопка обновлена на `Отправить заявку`, на `<form>` добавлен `id=\"contact-form\"`.
  - В `MobileBottomBar` добавлены `useState/useEffect` и `IntersectionObserver` для скрытия панели при видимой форме (`#contact-form`), при этом все базовые классы позиционирования корневого `div` сохранены.
  - В `MobileBottomBar` default `primaryLabel` изменён на `Обсудить задачу`.
  - В `app/drone-service/page.tsx` синхронизированы тексты CTA:
    - `DroneStickyCta label=\"Обсудить задачу\"`
    - `MobileBottomBar primaryLabel=\"Обсудить задачу\"`
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(contact): форма обновлена — заголовок, поля, CTA, WhatsApp-ссылка с pretext (11.04.2026) — `components/drone/DroneContactStitch.tsx`
  - Заголовок обновлён на `ОБСУДИМ ВАШУ ЗАДАЧУ` (`text-[20px] md:text-3xl`), подзаголовок переписан и оставлен с `leading-snug` на всех размерах.
  - В `Способ связи` опция `Email` заменена на `Звонок`; placeholder обновлён с кейсом для `Звонок` (`+995 ...`).
  - Поле `Сайт, Instagram или адрес объекта` открыто на mobile (без `hidden md:block`), тип изменён на `text`, placeholder обновлён.
  - CTA-блок: submit-кнопка переименована в `Получить расчёт`; secondary CTA превращён в текстовую WhatsApp-ссылку с prefilled message.
  - Дисклеймер обновлён: `Нажимая кнопку, вы соглашаетесь на обработку контактных данных.`
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service contact CTA row lock (11.04.2026) — `components/drone/DroneContactStitch.tsx`
  - В форме `DroneContactStitch` контейнер кнопок `Отправить` и `WhatsApp` переведён в постоянный горизонтальный ряд на всех breakpoints.
  - Класс контейнера изменён с `flex flex-col ... sm:flex-row ...` на `flex flex-row gap-2 pt-0.5 md:pt-1`; `flex-1` у обеих кнопок сохранён (50/50).
  - Другие части формы не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service pre-deploy: 3 mobile fixes (11.04.2026) — `components/drone/DroneProcessStitch.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFlightConditionsNote.tsx`, `components/drone/DroneContactStitch.tsx`
  - Три pre-deploy задачи выполнены (Process compact mobile, MapStitch removed, Contact mobile-fit). Страница готова к деплою.
  - `DroneProcessStitch`: на мобиле включён компактный горизонтальный ряд шагов, описания и крупные фоновые номера скрыты; desktop-версия сохранена.
  - `app/drone-service/page.tsx`: удалён рендер секции карты (`DroneMapStitch`), компонент-файл сохранён.
  - `DroneFlightConditionsNote`: текст упрощён до формулировки про регламент GCAA и проверку зоны до выезда.
  - `DroneContactStitch`: mobile-форма уплотнена под 390×844; на мобиле скрыты поля `Ваше имя`, `Интересующие услуги`, `Ссылка на объект` и дисклеймер.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service schema update: ItemList (18 направлений) (11.04.2026) — `app/drone-service/page.tsx`
  - Добавлен новый JSON-LD `<script type="application/ld+json">` с `@type: ItemList` для страницы `/drone-service`.
  - Схема вставлена сразу после блока `{jsonLdSchemas.map(...)}` и до `<DronePageScrollProgress />`.
  - В `ItemList` зафиксированы `numberOfItems: 18` и `itemListElement` из 18 направлений с canonical URL на `breus.media`.
  - Существующие schema-блоки и остальные секции страницы не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service tiny copy fixes: related label + hero source suffix (11.04.2026) — `components/drone/DroneRelatedLinksCompact.tsx`, `components/drone/DroneHeroStitch.tsx`
  - В `DroneRelatedLinksCompact` удалён дублирующий строчный лейбл над `h2`; оставлен только заголовок `Другие услуги Breus Media`.
  - В mobile-блоке `DroneHeroStitch` строка про `68%` уточнена источником: `Объекты с аэровидео продаются на 68% быстрее (MLS / NAR).`
  - Desktop-hero и структура блока related links не менялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service data cleanup: roof inspection card removed (11.04.2026) — `components/drone/droneServicesData.ts`
  - Из массива `droneServiceItems` удалена карточка с `title: Инспекция крыш` (`slug: inspekciya-krysh`) по прямому запросу.
  - Остальные карточки в `droneServicesData.ts` не изменялись.
  - Сопутствующие компоненты (`Hero`, `Pricing`, `FAQ`) не затрагивались.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service related links + data fixes (11.04.2026) — `constants/droneDirectionPages.ts`, `components/drone/droneServicesData.ts`, `components/drone/DroneRelatedLinksCompact.tsx`
  - Для `droneDirectionPages.droneService` полностью заменён массив `relatedLinks` на 4 блока: `360° виртуальные туры`, `Reels и короткое видео`, `Промо-видео`, `AI-визуализация` с новыми `href`.
  - В `DroneRelatedLinksCompact` обновлён заголовочный блок: eyebrow и `h2` заменены на `Другие услуги Breus Media` (структура и стили без изменений).
  - В `droneServicesData` обновлены 2 карточки:
    - `Недвижимость`: `68%` → `94% ... HomeJab` в описании
    - `Инспекция крыш`: `primaryHref` → `/drone-services/drone-roof-inspection`
  - `relatedLinks` других страниц, hero/pricing/faq компоненты не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile content cleanup + compact contact form (11.04.2026) — `components/drone/DroneServicesStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneContactStitch.tsx`
  - В секции карточек `/drone-service` удалён заголовок `Направления съёмки` и золотая линия над гридом услуг для более чистого перехода от mobile hint к карточкам.
  - В `DroneServicesMobileList` убран двухстрочный поясняющий текст под списком; оставлен только CTA-якорь `смотреть карточки` со стрелкой на `#services`.
  - Контактная форма (`DroneContactStitch`) уплотнена под mobile: уменьшены внешние/внутренние отступы, интервалы между полями, размеры чипов, высота textarea и кнопок.
  - Desktop-поведение сохранено через `md:`-классы; логика полей и отправки не менялась.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service content batch: stats + faq + mobile hint + trust removal (10.04.2026) — `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneStatsStrip.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFAQExpanded.tsx`
  - В mobile-список направлений (`#directions`) добавлен нижний hint-блок: пояснение про отдельные страницы + bounce-стрелка `смотреть карточки` с якорем `#services`.
  - На `/drone-service` удалён из рендера блок `DroneTrustLite` («НАМ ДОВЕРЯЮТ») — компонент оставлен в проекте, но не используется на странице.
  - Добавлен новый блок `DroneStatsStrip` (4 карточки: `68%`, `94%`, `403%`, `73%`) и вставлен между `DroneServicesStitch` и `DronePricingStitch`.
  - В `DroneFAQExpanded` полностью заменён массив FAQ на 8 новых вопросов/ответов по стоимости, FPV, географии, разрешениям, форматам и срокам.
  - `DroneHeroStitch.tsx`, `droneServicesData.ts` и pricing-карточки не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile UX polish (10.04.2026) — `components/drone/DroneHeroStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneServicesStitch.tsx`, `components/drone/MobileBottomBar.tsx`
  - Mobile hero copy обновлён под новый бриф: усилен оффер-блок (`С земли не видно главного...`, `68% быстрее`, технология FPV, результат для рекламы/инвестора/страховой).
  - Блок стрелки/подписи в hero переработан: стрелка отдельной строкой над подписью, текст `19 направлений — найдите своё · от 250 ₾`, поднят выше для безопасной зоны экрана.
  - Mobile список направлений уплотнён для отображения в пределах одного экрана: уменьшены паддинги/гапы, удалён нижний hint-блок, заголовок обновлён на `Направления съёмки`.
  - Якорный переход к `#directions` стабилизирован (`scroll-mt-20`), ссылки направлений ведут на карточки внутри страницы (`#service-[slug]`), а не на внешние L3.
  - Для нечётного количества направлений (19) последняя карточка списка растягивается на 2 колонки (убран пустой чёрный блок снизу).
  - В карточках services (`/drone-service`) вместо одной кнопки `Подробнее` добавлены 2 CTA: `Открыть услугу` + `Обсудить задачу`.
  - В mobile bottom bar заменены `W/T` на реальные иконки WhatsApp/Telegram и задан фирменный цвет: WhatsApp (`#25D366`), Telegram (`#229ED9`).
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile hero typewriter + directions list (10.04.2026) — `components/drone/DroneHeroStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `app/drone-service/page.tsx`
  - Mobile hero переведён на typewriter-сценарий: `АЭРОСЪЁМКА / ДЛЯ БИЗНЕСА / В ГРУЗИИ` с курсором, одноразовый запуск при монтировании.
  - После печати добавлены staged fade-in слои на mobile: описание (`+400ms`), pill `от 250 ₾` (`+800ms`), chevron к `#directions` (`+1200ms`).
  - Desktop-hero сохранён без изменений: существующий контент вынесен в `hidden md:block`.
  - Удалён mobile chips-блок в hero; нижняя hero-стрелка ограничена desktop (`hidden md:block`) для устранения дублирования.
  - Добавлен новый mobile-only блок `DroneServicesMobileList` с 19 направлениями (2 колонки, ссылки на `primaryHref`, fallback `#contact`) и нижним hint-блоком.
  - В `app/drone-service/page.tsx` список вставлен между hero и services; существующий вводный trust-блок переведён в `hidden md:block` (desktop-only).
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service L2 Perplexity audit fixes (10.04.2026) — `app/drone-service/page.tsx`
  - Добавлен вводный текст перед карточками направлений (150 слов, SEO-контент)
  - Добавлена trust strip: оборудование, 4K, география, цена от 250 ₾
  - Подключены `DroneStickyCta` + `MobileBottomBar` (sticky CTA для десктопа и мобильного)
  - Добавлен mid-page CTA после карточек направлений
  - Проверены все 19 href карточек направлений на существование страниц (0 битых ссылок), для тонких страниц добавлены TODO в `components/drone/droneServicesData.ts`
  - Build: `npm run build` — ✅ clean

✅ drone-service pricing sync from drone-restaurants (10.04.2026) — `components/drone/DronePricingStitch.tsx`
  - В `DronePricingStitch` пакеты `drone-service` синхронизированы с `app/drone-services/drone-restaurants/page.tsx` по структуре и copy.
  - Синхронизированы 4 карточки: `Полёт снаружи`, `Пролёт внутри (FPV)`, `Полная съёмка`, `Съёмка с готовым результатом`.
  - Перенесены `subtitle`, `items`, `note`, CTA `Обсудить этот пакет →` и бейдж `Выгодно` для `Полная съёмка`.
  - Блок `Дополнительно по задаче` синхронизирован с ресторанной страницей:
    - `Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾`
    - `Монтаж ролика 30–60 сек для сайта: +150 ₾`
    - `360° панорама с воздуха: +80 ₾`
  - Build: `npm run build` — ✅ clean

✅ drone-service contact form pilot field (10.04.2026) — `components/drone/DroneContactStitch.tsx`
  - В форму добавлено новое опциональное поле:
    - label: `ССЫЛКА НА ОБЪЕКТ (необязательно)`
    - placeholder: `Instagram, сайт, Google Maps — любая ссылка`
  - Поле `Ваше имя` сделано необязательным (убраны `*` и `required`).
  - В `Интересующие услуги` заменено значение `Аэросъемка` на `Инспекция`.
  - Порядок услуг в чипах приведён к согласованному:
    - `Недвижимость`, `Отели`, `Рестораны`, `Туризм`, `Инспекция`, `Мониторинг`.

✅ drone-service L2 hub cleanup (09.04.2026) — `app/drone-service/page.tsx`, `constants/droneDirectionPages.ts`, `lib/seo/directionSeo.ts`, `components/drone/DronePricingStitch.tsx`
  - Убраны секции: `DroneSocialProofStitch` (placeholder), `DroneGoogleTrustLite` (Google-отзывы отсутствуют)
  - Порядок секций: Hero → Services → Pricing → Trust → Process → Flight Note → Map → FAQ → Related → Contact → Footer
  - Metadata: убрано слово «Профессиональная», добавлены openGraph + twitter cards, canonical на `breus.media`
  - Schema: AggregateOffer 250–2600 ₾, areaServed массив городов, telephone реальный, BreadcrumbList берётся из `buildDirectionJsonLd`
  - FPV-карточка: добавлено пояснение что такое FPV-дрон для людей не в теме
  - Pricing sync: 4 пакета (`250/350/500/от 900 ₾`) + add-ons (`+150/+150/+80 ₾`)
  - Домен: все URL в schema и canonical — `breus.media`
  - Build: `npm run build` — ✅ clean

✅ drone-service cards copy+visual refresh (09.04.2026) — `components/drone/droneServicesData.ts`, `public/media/drone-service/*`
  - На `/drone-service` обновлён контент карточек по новому пакету текстов пользователя: подзаголовки (`category`), описания (`description`) и теги (`price`) для ключевых карточек витрины.
  - Переименована карточка `Аэросьемка для авто и автосалонов` → `Автосалоны и шоурумы`.
  - Карточки переведены с внешних image URL на локальные project assets в `public/media/drone-service`.
  - Финальные локальные изображения подключены для карточек:
    - `Недвижимость`, `Мониторинг стройки`, `FPV Съёмка`, `Отели & Курорты`, `Рестораны`, `Туризм и локации`, `Мероприятия`, `Инспекция объектов`, `Мониторинг территорий`, `Съёмка интерьеров и складов`, `Спорт комплексы`, `Реклама и бренд видео`, `Автосалоны и шоурумы`, `Агро и виноделие`, `Инспекция крыш`, `Регулярные аэроотчёты`.
  - Добавлены локальные файлы:
    - `real-estate-1.png`, `construction-monitoring-1.png`, `fpv-2.png`, `hotels-resorts-5.png`, `restaurants-3.png`, `tourism-6.png`, `events-1.png`, `object-inspection-from-territory-1.png`, `territory-monitoring-2.png`, `interiors-warehouses-1.png`, `sport-complex-1.png`, `brand-video-1.png`, `auto-showroom-1.png`, `agro-wine-1.png`, `roof-inspection-1.png`, `reporting-1.png`.

✅ drone-restaurants EN sync (09.04.2026) — `app/drone-services/drone-restaurants/page.en.tsx`
  - Alt-теги: 3 уникальных EN-описания
  - highPrice: 2200 → 1300
  - seoAnswers и shortQA обёрнуты в <details> (Click to expand)
  - «restaurant drone videography» добавлено в seoAnswer
  - «Book restaurant drone filming in Tbilisi» добавлено в PRE-CONTACT CTA
  - scroll-mt-20 lg:scroll-mt-24 на #pricing и #contact

✅ SmartHeader CTA override for drone-restaurants RU+EN (09.04.2026) — `components/gazeta/SmartHeader.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В `SmartHeader` добавлен optional prop `ctaHref?: string`
  - Сохранён текущий fallback без изменений: `contactHref = isLanding ? "#contact" : "/gazeta#contact"`
  - Добавлен `resolvedCtaHref = ctaHref ?? contactHref`
  - Desktop CTA и mobile-menu CTA переведены на единый `resolvedCtaHref`
  - На RU/EN страницах ресторана передан `ctaHref="#contact"` в `SmartHeader`
  - Поведение страниц без `ctaHref` сохранено (fallback как прежде)
  - Build: `npm run build` — ✅ clean

## ТЕКУЩИЙ ФОКУС — 08.04.2026

Активная задача: дрон-витрины по шаблону drone-restaurants
  → следующие страницы: drone-hotels · drone-sport · drone-wine · drone-tourism · drone-auto

Готово к запуску: CODEX_PROMPT_SCROLL_FIX.md — фикс скролла NichesStack мобайл

Заморожено: Reels L3 · Promo L3 · English translations (после витрин)

Новые файлы в корне проекта:
  CLAUDE.md — читается Codex автоматически каждую сессию
  AI_AGENT_BRIEFING.md — контекст для любой среды
  DEBUG_KNOWN_ISSUES.md — живой трекер багов
# КОНТЕКСТ — Breus Media
### Обновлён: 8 апреля 2026 (gazeta mobile rail touch-action fix, docs synced)

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- GitHub: https://github.com/TonyBreus/breus-media-v2
- Ветка: main
- Последний кодовый коммит: `footer: remove unavailable menu items` (07.04.2026) — `components/drone/DroneFooterStitch.tsx`

✅ drone-restaurants anchor audit force-reapply (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Подтверждено, что в целевой странице якоря присутствуют на корневых секциях:
    - `#pricing` на секции «Пакеты и цены»
    - `#contact` на секции с `DroneRestaurantsContactForm`
  - Для фиксации аудита выполнен force-touch JSX этих двух секций без изменения поведения:
    - сохранены `id="pricing"` / `id="contact"`
    - сохранены `scroll-mt-20 lg:scroll-mt-24`
  - `#faq` не менялся
  - Build: `npm run build` — ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants Perplexity + Cowork audit fixes (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/shared/FaqSection.tsx`
  - Alt-теги трёх изображений formatExampleCards заменены на уникальные описательные
  - serviceSchema highPrice изменён с 2200 на 1300 (900 + все аддоны)
  - Блоки seoAnswers и shortQA обёрнуты в <details> — визуально свёрнуты, HTML рендерится для SEO
  - В seoAnswers добавлена фраза «видеосъёмка ресторана дроном» (ответ про привлечение гостей)
  - В PRE-CONTACT CTA добавлена фраза «заказать съёмку ресторана дроном в Тбилиси»
  - FaqSection: проверен/исправлен проброс id на корневой <section>
  - Секции #pricing, #contact, #faq: добавлен scroll-mt-20 lg:scroll-mt-24 для корректного якорного скролла под sticky header
  - Build: npm run build — ✅ clean

✅ drone-restaurants Perplexity audit fixes (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Alt-теги трёх изображений formatExampleCards заменены на уникальные описательные
  - serviceSchema highPrice изменён с 2200 на 1300 (900 + все аддоны)
  - Блоки seoAnswers и shortQA обёрнуты в <details> — визуально свёрнуты, HTML рендерится для SEO
  - В seoAnswers добавлена фраза «видеосъёмка ресторана дроном» (ответ про привлечение гостей)
  - В PRE-CONTACT CTA добавлена фраза «заказать съёмку ресторана дроном в Тбилиси»
  - Build: npm run build — ✅ clean

✅ drone-hotels-tourism visual/text parity with drone-restaurants (09.04.2026) — `app/drone-hotels-tourism/page.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В hero отеля удалён бейдж `Hotels & Tourism Drone Content`, заголовок обновлён на `Аэросъёмка...`
  - Hero copy на отеле обновлён (новые абзацы + разделение длинного текста на отдельные параграфы)
  - Карточка `Коротко` в hero отеля обновлена под новый текст и тайминги
  - На отеле добавлен блок `Как это выглядит` со слайдером и блок `Примеры по форматам` после `Что вы получаете`
  - Отель переключён на те же изображения, что ресторан: `services-images/drone-restaurants/final/1.png`, `2.png`, `3.png`
  - Заголовок секции проблем унифицирован:
    - RU (restaurant + hotel): `Что обычно говорят перед съёмкой?`
    - EN (restaurant): `What do people usually say before filming?`
  - В секции `Что снимаем — и какую задачу это решает` на отеле обновлён текст и добавлены 5 карточек-результатов (как в ресторане)
  - В секции `Что вы получаете` на отеле блок файлов переведён в карточный формат `Как устроены файлы` (как в ресторане)
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants mobile pricing UX optimization (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В `Сравнение пакетов` добавлен отдельный мобильный режим без горизонтального скролла (`md:hidden`): компактные карточки-матрицы по каждому параметру
  - Десктопная таблица сохранена без изменений (`md:block`)
  - В `Пакеты и цены` карточки на мобильном уплотнены примерно на 10% по высоте:
    - уменьшены mobile padding/spacing
    - снижены mobile размеры цены/подписей/notes/кнопки
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ gazeta mobile rail touch-action handoff fix (08.04.2026) — `components/gazeta/NichesStack.tsx`
  - На контейнер горизонтального rail карточек с `servicesRailRef` добавлен inline style `touchAction: "pan-x"`.
  - Фикс ограничен мобильной rail-зоной через `useMobileHorizontalServicesRail`; desktop-поведение и non-rail ветка не менялись.
  - Логика стрелок `handleCardRailScroll` и внутренний vertical scroll (`contentScrollRef`, touch handlers) не изменялись.
  - Цель: убрать конфликт touch-событий между внешним vertical page scroll и горизонтальным свайпом карточек внутри rail.
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`, `DEBUG_KNOWN_ISSUES.md`

✅ drone-restaurants pricing comparison + short QA blocks (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В обе версии страницы добавлен новый post-pricing слой сразу после `addonPricing`:
    - `Сравнение пакетов / Package comparison`
    - `Как выбрать пакет / How to choose`
  - Таблица сравнения выводит рядом все 4 пакета (`250 / 350 / 500 / от 900 ₾`) по ключевым параметрам:
    - цена
    - aerial 4K video
    - interior FPV pass
    - photos
    - editing
    - social-ready clips
    - Google Maps video
    - time on site
    - file delivery
  - Helper-блок добавлен как быстрый routing layer для выбора пакета под задачу
  - Рядом с `seoAnswers` в обеих версиях добавлена новая константа `shortQA`
  - После секции подробных SEO-ответов и перед `relatedServices` добавлен новый AI-search блок:
    - `Коротко о главном`
    - `Quick answers`
  - `shortQA` закрывает короткие высокочастотные вопросы по цене, составу съёмки, FPV inside, срокам, разрешениям, бизнес-ценности и географии
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants package timing wording update (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В `pricingCards` обеих версий обновлены формулировки времени на объекте только внутри `items`
  - RU:
    - `До 1,5 часов работы на объекте` -> `Около 1,5 часов на объекте — от подготовки до финального дубля`
    - `До 2,5 часов работы на объекте` -> `Около 2,5 часов на объекте — от подготовки до финального дубля`
  - EN:
    - `Up to 1.5 hours on site` -> `About 1.5 hours on site — from setup to final take`
    - `Up to 2.5 hours on site` -> `About 2.5 hours on site — from setup to final take`
  - Пакеты `Съёмка с готовым результатом / Full Package` не менялись
  - Build: не запускался, так как это 6 точечных copy-замен без структурных изменений
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants SEO/GEO boost for RU+EN (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В RU и EN metadata добавлены `alternates.languages` (`hreflang`) для двуязычной связки `/drone-services/drone-restaurants` <-> `/drone-services/drone-restaurants/en`
  - В обе версии добавлены `twitter` cards (`summary_large_image`) для social sharing
  - В обе страницы добавлен `breadcrumbSchema` (`BreadcrumbList`) и подключён отдельным `<script type="application/ld+json">`
  - В `serviceSchema.areaServed` обеих версий расширено GEO-покрытие с одного `Place` до массива городов `Tbilisi / Batumi / Kutaisi`
  - В RU и EN добавлены новые GEO-секции с районами Тбилиси:
    - `Где мы снимаем в Тбилиси`
    - `Where we shoot in Tbilisi`
  - В `faqItems` обеих версий добавлен GEO-вопрос по районам Тбилиси и дополнительным городам/регионам (`Batumi`, `Kutaisi`, `Kakheti`)
  - В `faqSchema` обеих версий добавлен соответствующий GEO FAQ для search enrichment
  - В EN-версии дополнительно обновлён copy:
    - hero: `Photos and handheld video...`
    - hero delivery line: `We shoot, edit, and deliver...`
    - hero aside bullet: `We shoot and edit — you just publish`
    - `Aerial Shot` note: более прямое описание self-service использования
    - `seoAnswers`: сроки и выдача файлов переформулированы в более compact English
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants EN page + RU/EN header switch + hero overlap fix (07.04.2026) — `app/drone-services/drone-restaurants/page.en.tsx`, `app/drone-services/drone-restaurants/en/page.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `components/gazeta/SmartHeader.tsx`
  - Создана полноценная английская версия страницы в отдельном файле `app/drone-services/drone-restaurants/page.en.tsx` с адаптированным English copy, EN metadata, EN FAQ/SEO-ответами и переведённым `schema.org`
  - Для реального маршрута добавлен реэкспорт `app/drone-services/drone-restaurants/en/page.tsx`; в build подтверждён новый static route `/drone-services/drone-restaurants/en`
  - На `drone-restaurants` подключён рабочий language switch через `SmartHeader`: `RU -> /drone-services/drone-restaurants`, `EN -> /drone-services/drone-restaurants/en`
  - `SmartHeader` переведён в переиспользуемый RU/EN режим для будущих локализованных страниц:
    - добавлены `initialLang` и `languageLinks`
    - переведены sticky header labels: `About`, `Industries`, `Services`, `AI Solutions`, `Discuss Project`
    - переведены dropdown-списки, mobile menu и обе бегущие строки
  - Для EN-версии локализованы общие компоненты вокруг страницы через optional props:
    - `DroneStickyCta`
    - `MobileBottomBar`
    - `DroneRestaurantsContactForm`
    - `FormatExamplesSlideshow`
    - `DroneFooterStitch`
  - После включения бегущих строк hero-контент на RU и EN страницах опущен ниже (`pt-40 md:pt-48`), чтобы ticker lines больше не перекрывали заголовок
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants faq/seo/schema sync + pricing cleanup (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В `addonPricing` удалён add-on `10 обработанных фотографий: +60 ₾`
  - Обновлены `faqItems`: съёмка внутри, области использования материалов, стоимость, финальная выдача файлов
  - Обновлены `seoAnswers`: стоимость, формулировка `Она отвечает...`, съёмка внутри, сроки и выдача файлов
  - Синхронизирован `faqSchema` / schema.org с теми же новыми формулировками по цене, интерьерной съёмке и выдаче
  - В блоке `Дополнительно по задаче` удалена нижняя фраза про материалы под сайт / соцсети / GBP / presentation venue
  - В pricing-карточках и surrounding copy завершены последние copy-уточнения для `250 / 350 / 500 / от 900 ₾`
  - Build: текстовые правки не проверялись отдельно после этого мини-батча; последний полный `npm run build` для страницы был `✅ clean`
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants pricing/content refinement + footer render cleanup (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone/DroneFooterStitch.tsx`
  - В блоке `Зоны съёмки` формулировка FPV обновлена на `FPV полёт сквозь пространство: детали интерьера в движении`
  - В шаге `Шаг 5 / Передача файлов` удалена фраза про включённый раунд правок
  - Переписаны intro-абзацы секции `Пакеты и цены`
  - Все 4 pricing-карточки обновлены по новому copy: `250 / 350 / 500 / от 900 ₾`, включая subtitles, пункты и notes
  - В карточке `500 ₾` бейдж `Выгодно` перенесён к цене, чтобы освободить верхнюю строку и визуально выровнять уровень цены
  - В карточке `от 900 ₾` убраны лишние формулировки про `всё под ключ`, разложенные папки и длинный note
  - В `DroneFooterStitch` убрана оставшаяся `inactive`-ветка рендера после удаления пунктов меню; `Контакты` остаются обычной ссылкой `#contact`
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants format visuals dual placement (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone-restaurants/FormatExamplesSlideshow.tsx`
  - В блоке `Как это выглядит` удалена заглушка `Видео появится здесь`; добавлен слайдер из локальных файлов `services-images/drone-restaurants/final/1.png`, `2.png`, `3.png`
  - Слайдер крутит изображения по очереди каждые `3s` (fade transition)
  - Секция `Примеры по форматам` сохранена как второе место на странице и снова показывает 3 карточки, но теперь на тех же новых локальных изображениях (статично, без ротации)
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants hero copy/layout refresh (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В hero удалена фраза `Restaurant Drone Filming in Tbilisi, Georgia`
  - Основной текст заменён на новый расширенный copy-блок про аэрофото/FPV и полный цикл
  - Для desktop hero поднят выше и уплотнён по вертикали: уменьшены `pt/pb`, выравнивание grid изменено на `items-start`
  - Текст сделан крупнее и шире без роста вертикали: введена двухколоночная подача (`lg:columns-2`) + кнопки CTA остаются в первом экране блока
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ footer menu items removed sitewide (07.04.2026) — `components/drone/DroneFooterStitch.tsx`
  - В колонке `Меню` удалены пункты `Портфолио`, `Оборудование`, `Карта полётов` (они больше не рендерятся)
  - `Контакты` оставлены рабочей ссылкой `#contact` без изменений
  - Изменение распространяется на все страницы, где используется общий компонент `DroneFooterStitch`
  - Сопутствующие контекстные файлы синхронизированы отдельным doc-коммитом

✅ footer dead links sweep (audit-only) (07.04.2026) — `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneFooter.tsx`, `app/real-estate-2/page.tsx`
  - Выполнен повторный аудит всех футеров в проекте: целевые пункты `Портфолио`, `Оборудование`, `Карта полётов` найдены только в `DroneFooterStitch`
  - Подтверждено текущее состояние `DroneFooterStitch`: три неактивных пункта уже рендерятся как `span` с `className="text-white/40 cursor-default"`, `Контакты` остаётся рабочей ссылкой `#contact`
  - В `DroneFooter` и inline footer на `/real-estate-2` целевые пункты отсутствуют; кодовые изменения не требовались
  - Зафиксирована только doc-only синхронизация: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ footer dead links class fix + 360-tour-restaurants route fix (07.04.2026) — `components/drone/DroneFooterStitch.tsx`, `app/drone-services/drone-restaurants/page.tsx`
  - В `DroneFooterStitch` неактивным пунктам `Портфолио`, `Оборудование`, `Карта полётов` добавлен `cursor-default`; рабочий пункт `Контакты` не менялся
  - На странице `/drone-services/drone-restaurants` related service ссылка на ресторанный 360° тур исправлена с `/360-tour-services/360-tour-restaurants` на `/360-tour-restaurants`
  - Сопутствующие контекстные файлы синхронизированы в тот же коммит

✅ drone-restaurants visuals + footer cleanup (06.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone-restaurants/HeroSlideshow.tsx`, `components/drone/DroneFooterStitch.tsx`
  - Hero секция ресторана переведена с одного background-image на отдельный client-компонент `HeroSlideshow` с 4 Unsplash-слайдами, fade transition `1s` и autoplay `4s`
  - Сразу после hero добавлен большой `VIDEO_SLOT` placeholder-блок с preview-изображением и play-overlay
  - После секции «Что вы получаете» добавлен второй visual block с тремя форматами: exterior aerial, FPV interior, finished reel
  - Блок «Как организованы файлы» заменён на карточки папок: `Сайт`, `Соцсети`, `Google Maps`, `Архив`
  - В `DroneFooterStitch` мёртвые `href="#"` ссылки (`Портфолио`, `Оборудование`, `Карта полетов`) заменены на неактивные `span`, `Контакты` теперь ведёт на `#contact`
  - Build: `npm run build` ✅ clean

✅ restaurant + hotel pricing patch (04.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-hotels-tourism/page.tsx`
  - Обе страницы переведены на локальный `PricingPackage` тип вместо старой жёсткой структуры deliverables
  - Полностью заменены ценовые массивы: 4 пакета (`250 ₾`, `350 ₾`, `500 ₾`, `от 900 ₾`) + новый список add-ons
  - Hero aside на обеих страницах обновлён на `от 250 ₾`
  - Секция «Пакеты и цены» переписана под fixed-price copy и новый JSX карточек (`subtitle`, `note`, `popular`)
  - FAQ / SEO-ответы про цену и `serviceSchema.offers.lowPrice` синхронизированы с новой матрицей
  - Build: `npm run build` ✅ clean
✅ drone-hotels-tourism hospitality copy standardization (04.04.2026) — `app/drone-hotels-tourism/page.tsx`
  - Новая ценовая структура: 4 карточки (`250 / 350 / 500 / от 900 ₾`) + add-ons
  - Убраны англицизмы и жаргон: `hero video`, `cuts`, `stills`, `OTA`, `deliverables` и т.д.
  - Hero aside: `от 250 ₾`, выдача `от 24 ч`
  - Deliverables-блок: убраны противоречия, добавлены понятные папки выдачи
  - `whyUsCards` и `nicheCards` переписаны на человеческий язык
  - FAQ: обновлены ответы про цену и сроки
  - `serviceSchema`: `lowPrice=250`, `offerCount=4`
  - Build: `npm run build` ✅ clean

## ЧТО СДЕЛАНО И ЗАКРЫТО
✅ Consolidation audit (02.04.2026) — все About/trust/process блоки подтверждены в main:
  - `components/gazeta/AboutSection.tsx` ✓
  - `components/gazeta/HowWeWorkSection.tsx` ✓
  - `components/gazeta/ExperienceTrustSection.tsx` ✓
  - `app/about/page.tsx` (460 строк) ✓
  - `components/gazeta/SmartHeader.tsx` — ссылка "О Нас" → `/about` ✓
  - `app/gazeta/page.tsx` — полная цепочка: Hero → Marquee → About → HowWeWork → ExperienceTrust → NichesStack ✓
  - Сервер: единственный на порту 3200 (desktop: http://localhost:3200, LAN: http://192.168.1.2:3200)

✅ Hero media structure + local video wiring (02.04.2026) — `components/gazeta/HeroSection.tsx`
  - Создана папка `/public/media/hero/video/` — кладите сюда `breus-hero-demo.mp4`
  - Создана папка `/public/media/hero/posters/` — кладите сюда `breus-hero-demo-poster.jpg`
  - HeroSection.tsx переключён с Pixabay CDN на локальные пути + `poster` атрибут
  - autoPlay / loop / muted / playsInline сохранены без изменений
  - Graceful fallback: если файл отсутствует — показывается poster (чёрный фон), лаяут не ломается
  - Swap: просто заменить файл в папке, код менять не нужно
  - Build: ○ /gazeta (Static) ✓
✅ drone-restaurants hero aside micro-patch (04.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Hero aside карточка «КОРОТКО» уточнена: «Полёт + видеофайлы. Монтаж — отдельно.»
  - Срок выдачи в aside изменён на «от 24 ч»
  - Сопутствующие контекстные файлы обновлены: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`
  - Build: ✅ clean
✅ DebugWrapper h-full fix — hero video fills screen (02.04.2026) — `components/debug/DebugWrapper.tsx`
  - Root cause: in debug mode DebugWrapper inserts a `data-debug-content` inner div that did NOT inherit `h-full` from the outer wrapper className
  - Effect: video container had only intrinsic height (~219px) instead of full screen
  - Fix: `data-debug-content` div now gets `h-full` when the wrapper className includes `h-full`
  - No layout changes to HeroSection.tsx or any page file
  - Build: clean ✓
✅ Hero poster generated from video frame (02.04.2026) — `public/media/hero/posters/breus-hero-demo-poster.jpg`
  - Кадр извлечён из `breus-hero-demo.mp4` (t=0.5s) с помощью VLC CLI
  - Разрешение: 1920×1088, JPEG, ~505KB
  - `poster` атрибут уже прописан в HeroSection.tsx — изменений в коде не потребовалось
  - Замена постера: заменить файл по пути `/public/media/hero/posters/breus-hero-demo-poster.jpg`

✅ Visual Asset Inventory Audit (02.04.2026) — `BREUS_MEDIA_VISUAL_ASSET_INVENTORY.md`
  - Охват: `/gazeta`, все L2 хабы, представительные L3 страницы
  - Главный вывод: 100% медиа — внешний (Unsplash + Pixabay), `/public/` содержит только SVG
  - Hero-видео на `/gazeta` — Pixabay плейсхолдер (природа), не связан с агентством
  - Единственная страница с реальным видео: `/promo-video/promo-hotel` (YouTube embed)
  - 63 слота в NichesStack заполнены Unsplash; все L3 (drone, ai-visual, reels) — полностью текстовые
  - Следующий batch (без рефакторинга): замена hero-video → демо-рил; +2–3 YouTube embeds; +3–5 niche фото
✅ HowWeWorkSection (02.04.2026) — `components/gazeta/HowWeWorkSection.tsx` + `app/gazeta/page.tsx`
  - Компактный блок «Как мы работаем» — 4 шага, text-first, без fake-данных
  - Шаги: Бриф и задача → Исследование → Производство → Упаковка и сдача
  - AI упомянут как практический слой ускорения исследования, не как buzzword
  - Размещение: между AboutSection и NichesStack (перед FAQ/contact), DebugWrapper id={26}
  - Build: ○ /gazeta (Static) ✓
✅ ExperienceTrustSection (02.04.2026) — `components/gazeta/ExperienceTrustSection.tsx` + `app/gazeta/page.tsx`
  - 12 нишевых контекстов в сетке — честный перечень реального опыта без fake-логотипов
  - Размещение: между HowWeWorkSection и NichesStack, DebugWrapper id={28}
  - Build: ○ /gazeta (Static) ✓
✅ /about page (02.04.2026) — `app/about/page.tsx` + `components/gazeta/SmartHeader.tsx`
  - Полная B2B страница «О студии» — 9 секций, server component, без `"use client"`
  - Секции: Hero · Who We Are · Approach · What We Do · AI Layer · Experience Areas · Process · Geography · CTA
  - DebugWrapper IDs: 20100–21000
  - SmartHeader «О Нас» nav link → `/about` (вместо `#market-reality`)
  - Честные данные: 16 реальных ниш, 6 форматов, 4 принципа подхода, 5 шагов процесса
  - WhatsApp primary CTA, Telegram secondary, контакт +995 574 619 393
  - Build: ○ /about (Static) ✓
✅ About Section (02.04.2026) — `components/gazeta/AboutSection.tsx` + `app/gazeta/page.tsx`
  - Новый компактный блок «О студии» между MarqueeSection и NichesStack на `/gazeta`
  - Eyebrow badge, заголовок «Производство контента, которое работает на задачу.», 3 абзаца, CTA «О студии подробнее» → `/about`
  - framer-motion whileInView анимации, DebugWrapper id={25}
  - Тон: серьёзный, аналитический, B2B, без fake-метрик и клиентских логотипов
  - Билд: OK

✅ Hero title staggered reveal (01.04.2026) — `components/gazeta/HeroSection.tsx`
  - `Breus Media` h1 теперь анимируется при загрузке: каждая буква поднимается снизу (y: 24→0) с opacity 0→1
  - Stagger: 55ms между буквами (общая длительность ~1.1s), ease [0.22, 1, 0.36, 1]
  - Scroll-поведение (kinetic shrink → логотип) сохранено без изменений
  - `prefers-reduced-motion`: анимация мгновенная (initial = конечное состояние)
  - `aria-label="Breus Media"` добавлен на h1 для сохранения доступности при letter-split
✅ Live vs Local Visual Parity Audit завершён (01.04.2026) — `BREUS_MEDIA_LIVE_VS_LOCAL_VISUAL_PARITY.md`
✅ Подтверждено: `/gazeta` в production-like local (`NEXT_PUBLIC_DEBUG_MODE=false`, `next start`) визуально совпадает с live на desktop / mobile portrait / mobile landscape
✅ Найдено расхождение L2 hero-state: `/drone-service` (стартовый активный слайд + порядок compact navigator + secondary CTA copy)
✅ Найдено copy-расхождение L2 hero secondary CTA: `/real-estate-service` (`Заказать` live vs `Подобрать услугу` local)
✅ Time-allow L3 spot-check: `/drone-construction-monitoring` (структура совпадает, copy-различия), `/promo-video/promo-real-estate` (совпадает)
✅ Цены — проверены, исправлены 3 нарушения матрицы  
✅ SEO metadata — все 81 страница имеют title/description/canonical  
✅ Суффикс | Breus Media — везде  
✅ Домен breus.media — исправлен в 41 файле  
✅ Главная / → редирект на /gazeta  
✅ gazeta/page.tsx — восстановлен  
✅ gazeta/[slug] — карточки из l2DirectionConfigs с фото  
✅ NichesStack — прямые href на L3-страницы  
✅ droneServicesData — все 19 услуг с правильными href  
✅ Битые ссылки /drone-services и /promo-video — исправлены  
✅ realEstateService — добавлен в l2DirectionConfigs  
✅ /gazeta: убран дублирующий слой бегущих строк (SmartHeader vs MarqueeSection)  
✅ /gazeta: восстановлено scroll-поведение Hero/Marquee reveal  
✅ /gazeta: убрано перекрытие sticky-карточек под строкой `#209` (offset выровнен)
✅ /gazeta: добавлен жёсткий safeguard — `showTickers={false}` в `SmartHeader` на landing
✅ `DebugWrapper`: исправлен production-эффект — при `NEXT_PUBLIC_DEBUG_MODE=false` теперь сохраняются `className/style` (layout не “плывёт” относительно debug-режима)
✅ /gazeta: карточки в `NichesStack` для `00–08` переключены на реальные источники L2/Drone/RealEstate (вместо ручного хаотичного массива)
✅ /gazeta/[slug]: карточки для `real-estate` переключены на `realEstateServiceItems`; для L2-слуг убран лимит `slice(0, 6)`
✅ /gazeta: введён лимит карточек в стеке — максимум `8` на секцию (`7` услуг + `Все услуги`)
✅ /gazeta: для секции `01` (Недвижимость) карточки визуально приведены к дизайну `RealEstateServicesStitch`
✅ /gazeta: добавлен compact-режим для mobile landscape — уменьшены фиксированные верхние элементы (header + marquee), чтобы не съедали экран
✅ CTA & Contact Path Audit завершён (01.04.2026) — BREUS_MEDIA_CTA_CONTACT_PATH_AUDIT.md
✅ Localhost Visual Smoke Test пройден (01.04.2026) — BREUS_MEDIA_LOCALHOST_VISUAL_SMOKE_TEST.md
✅ Launch Readiness Audit завершён (01.04.2026) — BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md
✅ Analytics & Tracking Readiness Audit завершён (01.04.2026) — BREUS_MEDIA_ANALYTICS_READINESS_AUDIT.md
✅ Form UX Honesty Batch (01.04.2026) — WhatsApp primary CTA, форма → WhatsApp pre-fill, честный subtitle
✅ Package Matrix Batch A recovery (01.04.2026) — 16 файлов: 360° FAQ hosting wording (6 страниц), drone-reporting PDF add-on label, drone-hotels-tourism placeholder removed, лицензионная музыка (8 reels страниц)
✅ Card & Pricing Consistency Audit завершён (01.04.2026) — `BREUS_MEDIA_CARD_AND_PRICING_CONSISTENCY_AUDIT.md`
  - Охват: 10 L2 хабов (`l2DirectionConfigs.ts`) + `/gazeta` NichesStack + `/real-estate-service`
  - 27 точек несоответствия: 11 пропущенных L3 hrefs, 2 неверных href, 5 ценовых несоответствий, 5 CTA-label нарушений, 3 нарушения card-count
  - Критичное: `clinicsService.ai-upakovka-kontenta` → неверная href (hotel AI вместо clinic)
  - Критичное: `clinicsService.kontent-esteticheskih-uslug` → дублирует href card 3
  - Эталонные семьи: `tours360Service` (7/7 hrefs, единый формат), `hotelsService` (чистая структура)
  - `businessService` — критически недосвязанный хаб (5 из 6 карточек без href)
  - Следующий batch: Batch B (AI Content hrefs) → Batch D (3 ценовых правки)
✅ Card/Binding Consistency Batch A завершён (01.04.2026) — 2 неверных href в `clinicsService` исправлены
  - `clinicsService.ai-upakovka-kontenta`: `/ai-content/hotel-ai-descriptions` → `/ai-content/tourism-ai-packaging`
  - `clinicsService.kontent-esteticheskih-uslug`: `/promo-video/clinic-interior` (дубль card 3) → href убран (L3 страница не существует)
  - Файл: `constants/l2DirectionConfigs.ts`
  - Build: ✅ чистый
✅ Coverage Gap Audit завершён (01.04.2026) — `BREUS_MEDIA_COVERAGE_GAP_AUDIT.md`
  - 11 карточек без primaryHref классифицированы: 4× NEEDS_L3, 2× CAN_STAY_HUB_ONLY, 1× SHOULD_LINK_TO_EXISTING_HUB, 5× NEEDS_MANUAL_PRODUCT_DECISION
  - 1 soft-mismatch: `clinicsService.ai-upakovka-kontenta` → временный tourism fallback
  - Batch C рекомендован: 2 страницы (`/reels-promo/reels-business`, `/promo-video/promo-business`) закроют 4 карточки
  - businessService: 1/6 связанных карточек (после Batch C станет 3/6)
✅ Card/Binding Consistency Batch B завершён (01.04.2026) — 1 L3 href добавлен, 6 карточек оставлены без href (L3 страницы не существуют)
  - `reelsService.reels-nedvizhimost` (card 1): добавлен `primaryHref: '/reels-promo/reels-real-estate'`
  - `reelsService.reels-biznes` (card 7): L3 страница `/reels-promo/reels-business` не существует → fallback
  - `businessService` cards 1,2,3,5,6: ни одного канонического L3 для business-specific promo-video / reels / AI / space-shooting → все 5 оставлены без href
  - Файл: `constants/l2DirectionConfigs.ts`
  - Build: ✅ чистый
✅ Coverage Gap Batch C завершён (01.04.2026) — 2 новые L3 страницы созданы, 4 карточки связаны
  - Создана `/reels-promo/reels-business` (~380 строк) — закрывает `reelsService.reels-biznes` + `businessService.reels-shorts`
  - Создана `/promo-video/promo-business` (~420 строк) — закрывает `promoVideoService.promo-video-biznes` + `businessService.imidzhevoe-video-biznesa`
  - `constants/l2DirectionConfigs.ts`: 4 новых `primaryHref` привязаны
  - businessService: 3/6 связанных карточек (было 1/6 до Batch C)
  - Build: ✅ чистый
✅ businessService Product Decision Audit завершён (01.04.2026) — `BREUS_MEDIA_BUSINESSSERVICE_REMAINING_DECISIONS.md`
  - 3 оставшихся карточки без href классифицированы: 2× NEEDS_NEW_L3, 1× NEEDS_MANUAL_PRODUCT_MERGE
  - `kontent-sayta-reklamy` → NEEDS_NEW_L3 (performance/ads intent, не перекрывается promo-business)
  - `semka-prostranstva-obekta` → NEEDS_MANUAL_PRODUCT_MERGE (компонент promo-business; расширить страницу, затем линковать)
  - `ai-upakovka-kontenta` → NEEDS_NEW_L3 (3-й член семьи ai-content: hotel + tourism + business)
  - Рекомендован Batch D1 как минимальный следующий шаг: `/ai-content/business-ai-content`
✅ businessService Simplification Batch завершён (01.04.2026)
  - 3 карточки без href удалены (`kontent-sayta-reklamy`, `semka-prostranstva-obekta`, `ai-upakovka-kontenta`)
  - Остались 3 честных карточки с валидными hrefs (promo-business, reels-business, 360-tour-business)
  - Hero copy и contact copy переведены в discussion-first / contact-first тон
  - Страница теперь — широкий входной хаб для бизнесов, не вписывающихся в основные ниши
✅ /gazeta final form duplication ПОДТВЕРЖДЕНА и исправлена (01.04.2026)
  - `FinalFormSection` (step-09, дубль формы) удалена из `app/gazeta/page.tsx`
  - `NichesStack` уже содержит step-09 (FAQ) и step-10 (contact form с `id="contact"`)
  - Дублирующий контакт-слой устранён; стек и contact path сохранены
✅ IT Routing Cleanup завершён (01.04.2026)
  - `/gazeta/it` теперь статический redirect → `/business-service`
  - `gazetaDetailRoutes.it` изменён с `/gazeta/it` на `/business-service` — каскадно фиксирует `gazetaNicheLandingRoutes["07"]` и IT nav item
  - IT в NichesStack (niche "07"): screenLink, allServicesCard и service fallbacks теперь ведут на `/business-service`
  - IT в SmartHeader (`gazetaIndustryNavItems`): href → `/business-service`
  - Временное решение: IT и Business намеренно шарят одну страницу
  - Создан `app/gazeta/it/page.tsx` (redirect) — overrides dynamic [slug] handler для прямых URL-посетителей
✅ AI Entry Routing завершён (01.04.2026)
  - SmartHeader кнопка `AI Решения` (id 204): `/gazeta/ai-content` → `/ai-visualization-service`
  - Временное решение: AI Content и AI Solutions намеренно шарят одну страницу до расширения AI-семьи
  - `/gazeta/it` routing — изменений не требовалось (redirect уже в коде)

## АУДИТ-ПРИМЕЧАНИЕ (01.04.2026)
- Для корректной визуальной parity-проверки использовался **production-like local baseline**, а не `next dev`:
  - build: `NEXT_PUBLIC_DEBUG_MODE=false npm run build`
  - start: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start`
- Причина: `next dev` + `.env.local` (`NEXT_PUBLIC_DEBUG_MODE=true`) создают ложные визуальные шумы:
  - DebugWrapper badges/overlays;
  - смещение phase у auto-rotating hero-блоков (dev/hydration timing).
- Артефакты проверки:
  - `output/playwright/live-localprod-parity-2026-04-01/`
  - `output/playwright/live-localprod-parity-2026-04-01/diff-metrics.tsv`

## ОТКРЫТЫЕ ЗАДАЧИ — businessService (статус после Simplification Batch)

### businessService теперь: широкий входной хаб (discussion-first)
- ✅ 3 карточки с валидными hrefs: `imidzhevoe-video-biznesa` → `/promo-video/promo-business`, `reels-shorts` → `/reels-promo/reels-business`, `tury-360` → `/360-tour-business`
- ✅ 3 карточки без hrefs удалены (были fake catalog)
- Страница — не каталог, а broad entry page для бизнесов вне основных ниш
- При желании расширить: можно создать новые L3 и добавить карточки назад

### Если понадобится вернуть Batch D:
- D1: Создать `/ai-content/business-ai-content` (шаблон: hotel-ai-descriptions / tourism-ai-packaging)
- D2: Расширить `/promo-video/promo-business` с space-shoot пакетами
- D3: Создать `/promo-video/promo-business-ads`

### Прочие продуктовые решения (другие хабы):
- [ ] `restaurantsService.ai-upakovka-menyu-opisaniy` — создать `/ai-content/restaurant-ai-content` или hub-only?
- [ ] `autoService.ai-upakovka-obyavleniy` — создать `/ai-content/auto-ai-listings` или hub-only?

### Аудит-артефакт:
- `BREUS_MEDIA_BUSINESSSERVICE_REMAINING_DECISIONS.md` — полный product decision audit (01.04.2026)

### Прочие открытые задачи (перенесены из Batch 6)

## ОТКРЫТЫЕ ЗАДАЧИ — Batch 6 (в процессе)

### P1 — ВСЕ ЗАКРЫТЫ ✅ (исправлены в коммите 77c634d)
- [x] P1: `/gazeta/[slug]` — стили кнопок исправлены: "Обсудить проект" = `bg-white text-black` (primary), "Назад к Gazeta" = ghost border (secondary) — подтверждено в коде
- [x] P1: `/gazeta/[slug]` — `href` исправлен на `https://wa.me/995574619393` — подтверждено в коде

### P2 — важно, но не блокирует:
- [ ] P2: `constants/l2DirectionConfigs.ts` — 5 случаев `primaryCtaLabel: 'Открыть услугу'` (строки 842, 865, 1457, 1495, 1520) заменить на `'Смотреть услуги'` → `'#services'`
- [ ] P2: L2 Hubs — добавить sticky CTA bar в L2DirectionRenderer (аналог DroneStickyCta)
- [x] P2: Аналитика — реализован минимальный tracking batch:
  - `app/layout.tsx` — GA4 Script (strategy="afterInteractive", env var `NEXT_PUBLIC_GA_ID`), безопасно если var не задан
  - `FinalFormSection.tsx` — onClick на WhatsApp link → `whatsapp_click`
  - `FinalFormSection.tsx` — onSubmit → `form_submit_attempt`
  - **Env var**: добавить `NEXT_PUBLIC_GA_ID` в Vercel project env vars перед деплоем

### Подтверждено регрессионным чеком (01.04.2026):
- ✅ `/gazeta` hero CTA `#contact` — работает: `id="contact"` существует в `NichesStack.tsx:1617`
- ✅ AI Visual L3 "Узнать цену" — строка не существует ни в одном файле `app/ai-visual/`
- ✅ Все редиректы (7 маршрутов) — корректны
- ✅ Нет `console.log`, нет захардкоженных localhost URL
- ✅ `NEXT_PUBLIC_DEBUG_MODE=true` — только в `.env.local`, production Vercel не затронут

## ВАЖНОЕ ТЕХСОСТОЯНИЕ НА СЕЙЧАС
- Фиксы по `gazeta` подтверждены локально (build + визуальная проверка).
- `origin` настроен на GitHub, ветка `main` запушена.
- Vercel подключен к GitHub-репозиторию; деплой ожидается от push в `main`.
- Проверка live vs local по `/gazeta`: ключевая hero-анимация (`Breus Media` уезжает вверх) и marquee reveal ведут себя консистентно.
- Повторная проверка 27.03.2026 (Playwright, viewport 1440×900):
  - live и local стартуют с `Breus Media: translateY(65vh)`;
  - после скролла ~950px: `translateY(-60vh) scale(0.25)` на обоих;
  - количество бегущих строк в marquee: `2` на обоих (разделитель между ними: `1`).
- 27.03.2026: подтверждён и исправлен источник расхождения “local vs live” в шапке `/gazeta`:
  - причина: `DebugWrapper` при выключенном debug возвращал `Fragment`, из-за чего пропадали layout-классы у обёрток (`flex-1`, позиционирование);
  - фикс: в non-debug режиме `DebugWrapper` рендерит обычный `<div>` при наличии `className/style`;
  - проверка: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3011 npm run dev` + визуальная проверка `/gazeta`;
  - `npm run build` после фикса — OK.
- Деплой 27.03.2026 выполнен после явной команды `DEPLOY NOW`:
  - commit: `edb303d` (`fix(gazeta): preserve header layout in non-debug mode`);
  - live `/gazeta` подтверждён с новым HTML-признаком: `<div class="flex-1"><a ...>` в левой секции header.
- 27.03.2026: выполнена инициализация карточек Gazeta из настоящих источников:
  - `00`: `droneServiceItems` (`components/drone/droneServicesData.ts`);
  - `01`: `realEstateServiceItems` (`components/real-estate-service/realEstateServicesData.ts`);
  - `02–08`: `l2DirectionConfigs` (`constants/l2DirectionConfigs.ts`);
  - сборка `npm run build` после изменений — OK.
- 27.03.2026: refinement по запросу UX:
  - глобально ограничено количество карточек в `NichesStack` до `7 + 1` (all services);
  - для `01` применён visual-parity с карточками из `RealEstateServicesStitch` (изображение, бейджи, типографика, CTA-блоки);
  - быстрый HTML-check локально: `service-card-target` на `/gazeta` = `7` (реал-эстейт сервис-карточки без карточки “Все услуги”).
- 27.03.2026: visual-parity расширен на все секции `00–08`:
  - все сервисные карточки в `NichesStack` рендерятся в стиле service pages (`service-card-target`, image/header/category/description/price/CTA);
  - лимит подтверждён по DOM-check (локально `/gazeta`):
    - `00`: `7 + 1`, `01`: `7 + 1`, `02`: `6 + 1`, `03`: `7 + 1`, `04`: `7 + 1`, `05`: `7 + 1`, `06`: `7 + 1`, `07`: `6 + 1`, `08`: `6 + 1`.
- 27.03.2026: финальный UX-лимит по карточкам на `/gazeta` изменён на `5 + 1` для всех секций `00–08`:
  - `5` сервисных карточек (первые по порядку из source-of-truth) + `1` карточка `Все услуги`;
  - DOM-check подтверждает по всем секциям: `serviceCards=5`, `totalItems=6`.
- 27.03.2026: деплой выполнен после явной команды `DEPLOY NOW`:
  - commit: `1c7f85c` (`feat(gazeta): sync 00-08 service cards with 5+1 cap`);
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: mobile landscape оптимизация `/gazeta` (local, без деплоя):
  - `SmartHeader`: высота снижена в ландшафтном mobile (`64px` старт / `56px` после скролла), ужаты элементы действий и tickers в header-контексте;
  - `MarqueeSection`: добавлен compact-режим (меньше вертикальные отступы/типографика), в mobile landscape оставлена одна бегущая строка вместо двух;
  - `NichesStack` и формы: sticky-offset синхронизирован под compact-top (`108px` в mobile landscape вместо desktop `184px`);
  - `FinalFormSection`: верхний offset/высота также адаптированы под mobile landscape;
  - `npm run build` — OK.
- 27.03.2026: донастройка mobile landscape по обратной связи:
  - в `MarqueeSection` возвращена вторая бегущая строка `#209`;
  - обе строки `#208/#209` дополнительно уменьшены (текст/отступы) в landscape;
  - строки-заголовки стека `00–08` и `09/10` уменьшены примерно в 2 раза по высоте в landscape (`h-6` вместо `h-12`);
  - `npm run build` — OK.
- 27.03.2026: мобильная сетка карточек `/gazeta` (local, без деплоя):
  - в mobile portrait карточки услуг в стеке переведены в `2` колонки;
  - в mobile landscape карточки услуг переведены в `4` колонки;
  - карточки (особенно service-page parity) дополнительно уменьшены по высоте/типографике/CTA (ориентир ~30% компактнее на мобильных);
  - для больших экранов desktop-раскладка сохранена;
  - `npm run build` — OK.
- 27.03.2026: точечный фикс карточек `8410/8411` в секции `01` (Недвижимость), local:
  - убрана жёлтая строка с highlight-price для этих двух карточек;
  - на мобильных CTA-кнопки переставлены вертикально (`Подробнее` над `Заказать`), чтобы кнопка `Заказать` не уезжала за пределы карточки;
  - `npm run build` — OK.
- 27.03.2026: UX-фикс nested-scroll на `/gazeta` (local):
  - внутренние скролл-контейнеры карточек/FAQ/form переведены в `overscroll-y-contain` + `touch-pan-y`;
  - цель: сначала докручивается внутренний контент секции, затем скролл передаётся следующему шагу стека более предсказуемо;
  - `npm run build` — OK.
- 27.03.2026: compact top для mobile portrait (local):
  - уменьшены размеры верхней зоны (`header + marquee + top rows`) примерно на ~30% и для вертикального просмотра;
  - добавлен `useMobilePortrait` и синхронизированы оффсеты (`Marquee`, `NichesStack`, `FinalFormSection`) под новый размер шапки;
  - `npm run build` — OK.
- 27.03.2026: устранён зазор между `#209` и `#00` (local):
  - уменьшены `stickyTop` оффсеты для mobile (`landscape: 84`, `portrait: 96`) в `NichesStack`;
  - синхронизирован `FinalFormSection` (`84/96`) для ровного поведения по всему стеку;
  - `npm run build` — OK.
- 27.03.2026: фиксы по тикеру и наезду `209 -> 00` (local):
  - выровнен baseline в бегущих строках: элементы тикера/ссылки переведены в `inline-flex` + `leading-none`, чтобы текст не “прыгал” по высоте;
  - для portrait мобильного поднят `stickyTop` до `104`, чтобы `00` не заходил под вторую бегущую строку `209`;
  - `npm run build` — OK.
- 27.03.2026: mobile step navigation для `/gazeta` был протестирован и отменён по UX-обратной связи (слишком сложное ощущение навигации); текущий вариант — без step-контрола.
- 27.03.2026: реализован mobile hard handoff для скролла секций `/gazeta` (local):
  - пока внутренняя область секции скроллится, внешний скролл блокируется и остаётся в текущей секции;
  - добавлена внутренняя скролл-линия справа (прогресс внутри секции);
  - при приближении к концу внутреннего скролла показывается подсказка `Далее {id} {название}` снизу;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `413c9d2` (`feat(gazeta): optimize mobile compact layout, cards, and scroll handoff`);
  - включает: mobile compact top (portrait/landscape), grid 2/4 cards, fixes 8410/8411, nested-scroll handoff, gap fix `209 -> 00`.
- 27.03.2026: убрано дублирование названий ниш внутри контент-блока секций `/gazeta` (local):
  - в `NichesStack` отключён fallback `niche.id / niche.title` для внутреннего `eyebrow`, который повторял верхнюю строку (`00/01/02...`);
  - внутренний `eyebrow` теперь показывается только если явно задан в `detailedContent.eyebrow`;
  - цель: освободить вертикальное пространство и убрать визуальный дубль типа `02 Отели`/`04 Автобизнес` внутри секции;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `82c6e14` (`feat(gazeta): refine mobile scroll UX and remove duplicate niche labels`);
  - включает: mobile scroll UX refinement, ticker/text baseline tuning, sticky offset sync (`209 -> 00`), cleanup дублей названий ниш внутри секций;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: улучшена подсказка межсекционной навигации `Далее {id} {название}` на `/gazeta` (local):
  - подсказка превращена в кликабельную кнопку с иконкой стрелки вниз;
  - при нажатии выполняется плавный скролл к следующей секции (например, `03 -> 04`);
  - добавлены `id`-якоря вида `niche-step-XX` для каждой секции стека;
  - `npm run build` — OK.
- 27.03.2026: добавлена обратная навигация и стабилизация “посадки” секций при клике (`/gazeta`, local):
  - добавлена верхняя кнопка `Назад {id} {название}` со стрелкой вверх (для перехода к предыдущей секции);
  - переходы `Назад/Далее` переведены на выравнивание по реальной позиции целевой секции с post-smooth коррекцией (устранение промахов при “падении” строк в стек);
  - усилен `z-index` у кнопок, чтобы клики не перехватывались карточками;
  - `npm run build` — OK.
- 27.03.2026: mobile touch-controls и компоновка шапки секций `/gazeta` (local):
  - добавлен левый сенсорный scroll-control внутри секций (кнопки `↑`/`↓` по центру экрана): скроллит карточки по шагу, на границе секции переключает на предыдущую/следующую индустрию;
  - кнопка `Назад` увеличена и перенесена в строку заголовка секции (`00/01/02 ...`) для быстрого доступа;
  - мобильные карточки услуг дополнительно слегка уменьшены (изображение + внутренние отступы), чтобы центр экрана освободился под touch-control;
  - `npm run build` — OK.
- 27.03.2026: донастройка расположения controls `/gazeta` (local):
  - кнопка `Назад` в верхней строке секции смещена ближе к центру (не у правого края);
  - левый сенсорный scroll-control вынесен из scroll-контейнера в статичный слой секции, теперь не “едет” вместе со скроллом карточек;
  - `npm run build` — OK.
- 27.03.2026: переразмещение навигационных кнопок по секциям `/gazeta` (local):
  - кнопка `Назад` убрана из линии `00/01/02...` и вынесена отдельным статичным блоком сразу под этой линией;
  - кнопка `Далее {id} {индустрия}` также вынесена в статичный блок внизу секции;
  - обе кнопки больше не зависят от внутреннего скролла карточек и всегда находятся на фиксированных позициях секции;
  - `npm run build` — OK.
- 27.03.2026: финальная доработка навигационных кнопок `/gazeta` (local):
  - `Назад` сделана кликабельной в статичном верхнем блоке;
  - навигация `Далее` расширена по полному стеку шагов: `08 -> 09 (Частые вопросы) -> 10 (Форма связи)`;
  - для шагов `09` и `10` добавлены такие же статичные nav-кнопки `Назад/Далее` (где применимо);
  - якоря шага унифицированы: `niche-step-00 ... niche-step-10`, переходы выравниваются по sticky-позиции;
  - `npm run build` — OK.
- 27.03.2026: фикс кнопки скролла/навигации “вверх” (`/gazeta`, local):
  - причина: при переходе вверх выравнивание только по `getBoundingClientRect` в sticky-стеке могло давать нулевой delta, и визуально ничего не происходило;
  - решение: в `scrollToNicheStep` добавлен двухэтапный переход:
    - coarse-scroll к целевому шагу по индексу (`containerTop + index * 100vh`),
    - затем auto-коррекция до sticky-позиции целевой секции;
  - результат: кнопки `Назад` и левый `↑` корректно переводят на предыдущий шаг;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `08a3a05` (`feat(gazeta): finalize static mobile nav controls and full 00-10 step flow`);
  - включает: статичные nav-кнопки `Назад/Далее`, полный step-flow `00..10`, кликабельный back, фикс перехода “вверх”;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: добавлен единый floating-scroll control для `/gazeta` (local):
  - пульсирующий фиксированный контрол размещён по центру экрана (всегда на одном месте, не зависит от скролла секции);
  - контрол определяет активный шаг стека (`00..10`) и отображает его id;
  - кнопки `↑/↓` сначала скроллят внутренний контент активной секции, а на границах переводят к предыдущему/следующему шагу;
  - локальные дублирующиеся left-controls внутри карточек удалены, чтобы не конфликтовали с единым контролом;
  - `npm run build` — OK.
- 27.03.2026: корректировка floating-control и анимации входа секций `/gazeta` (local):
  - floating-control смещён в левую зону экрана, сохранив вертикальный центр (`left side center`);
  - повышен `z-index` floating-control, чтобы клики мышью срабатывали с первого раза даже над слоями `FAQ/Form`;
  - ускорен вход карточек в стек: строки `00/01/...` быстро “прилипают” к верху и больше не медленно проползают по экрану;
  - `npm run build` — OK.
- 28.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `2715ebf` (`feat(gazeta): move floating control left and speed up section snap`);
  - включает: перенос floating-control в левую зону, усиление кликабельности на desktop (`z-index`), быстрый snap header-строк `00/01/...` к верху;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 28.03.2026: mobile horizontal rail + 4-way joystick на `/gazeta` (local):
  - в мобильном режиме внутренний скролл карточек секции переключён на горизонтальный (`left/right`) rail;
  - добавлен `data-services-rail` и логика прокрутки карточек по `←/→` у плавающего контроллера;
  - floating-control обновлён до 4 направлений (`↑ ↓ ← →`) в одном блоке (формат “джойстик”);
  - вертикальный внутренний скролл секции отключён только для мобильного режима с horizontal rail (desktop поведение сохранено);
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: mobile UX v2 (rollback 4-way + side arrows on cards) на `/gazeta` (local):
  - 4-way floating joystick отменён; возвращён тонкий боковой вертикальный контрол `↑/↓` с раздельными кнопками и линейными индикаторами;
  - горизонтальная лента карточек сохранена, но `←/→` перенесены к самой ленте карточек (слева/справа от карточек в секции), чтобы UX был как “выбор карточек”;
  - ширины мобильных карточек пересобраны под одновременный показ ~2 карточек в кадре (`portrait` и `landscape` адаптированы);
  - для mobile-стека уменьшена высота sticky-секции через preview-offset, чтобы внизу оставалась видимой следующая строка (соседняя индустрия);
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: фикс секции `00` (Услуги аэросъёмки) — mobile cards width parity (local):
  - устранён кейс, когда в `00` в кадр сжимались почти все карточки сразу;
  - ширина мобильной карточки перенесена на сам элемент `article`, чтобы размер применялся одинаково для всех секций, включая `00`;
  - текущая цель в mobile: стабильно ~2 карточки в кадре + боковое перелистывание `←/→`;
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: mobile cards parity fix v2 (`00` + `01..08`) на `/gazeta` (local):
  - выявлена первопричина “плавающей” ширины: `MaybeDebugWrapper` игнорировал `className` при `enabled=false` (в т.ч. для секции `00`);
  - `MaybeDebugWrapper` обновлён: теперь при `enabled=false` и наличии `className` рендерит `<div className=...>`, чтобы размеры/позиционирование не терялись;
  - класс ширины карточки возвращён на wrapper-слой (стабильно для всех секций), карточка (`article`) получает `w-full`;
  - для `00` добавлен mobile offset блока карточек вниз (`mt-[8vh|12vh]`), чтобы rail визуально фиксировалась ближе к середине экрана;
  - LAN-host подтверждён: `http://192.168.1.7:3099/gazeta` (200 OK), `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: copy + spacing cleanup для `0.0` (аэросъёмка) на `/gazeta` (local):
  - удалён текст `10 форматов съёмки: продажи, мониторинг, inspection, hospitality, туризм и events.`;
  - уменьшен разрыв между текстовым блоком и карточками в `0.0`:
    - для aerial heading-блока снижены `mb-*` до уровня, близкого к `0.1/0.2`,
    - убран дополнительный mobile offset rails, который давал лишний вертикальный зазор;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: mobile cards experiment A/B/C/D в `/gazeta` (local, desktop untouched):
  - в `NichesStack.tsx` добавлен mobile-only variant switch `MobileCardsLayoutVariant` с маппингом по секциям:
    - `00 -> A (Premium horizontal rail)`,
    - `01 -> B (Two-card preview rail)`,
    - `02 -> C (Narrative mobile layout)`,
    - `03 -> D (Centered single-card + text menu)`,
    - остальные секции -> `default` fallback;
  - изменены только mobile rails/container/card presentation (desktop ветка сохранена);
  - все текущие links/titles/prices/CTA/data-мэппинг оставлены без изменений;
  - для variant `D` добавлен text-only ориентир: количество карточек + список названий;
  - left vertical floating control отключён на mobile для эксперимента;
  - `npm run build` — OK.
- 29.03.2026: winning mobile pattern стандартизирован на все секции `/gazeta` (local):
  - экспериментальные ветки A/C/D удалены из мобильного рендера;
  - единым mobile default для всех индустриальных секций (`00..08`) сделан winning-паттерн из `01->02`:
    - 2 чётко видимые карточки + частичный 3-й как swipe cue,
    - горизонтальная rail со snap и существующими боковыми стрелками;
  - desktop-путь и data mapping (links/titles/prices/CTAs/order) не изменялись;
  - left floating vertical control остаётся скрытым на mobile;
  - `npm run build` — OK.
- 29.03.2026: удалены дубли заголовков индустрий внутри секций `/gazeta` (local):
  - в `components/gazeta/NichesStack.tsx` добавлена нормализация и проверка дублей между строкой секции (`00/01/02...`) и внутренним `heading`;
  - если `heading` дублирует `title` (включая кейсы вида `УСЛУГИ АЭРОСЪЁМКИ` vs `АЭРОСЪЁМКА`), внутренний `h2` больше не рендерится;
  - сохранены все данные карточек, ссылки, CTA и desktop/mobile логика layout;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: точечный фикс секции `00` (Аэросъёмка) в `/gazeta` (local):
  - скрыты строки `Тбилиси • Батуми • Вся Грузия` (eyebrow) и `УСЛУГИ АЭРОСЪЁМКИ` (inner heading) только для секции `00`;
  - остальные секции `01..08` не изменялись;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: mobile nav-button offset фикс в `/gazeta` (local):
  - нижняя кнопка `Далее` поднята выше, чтобы не конфликтовать с системной/браузерной нижней панелью;
  - добавлен адаптивный нижний отступ с учётом `env(safe-area-inset-bottom)`:
    - portrait: `+6.25rem`,
    - landscape: `+4.25rem`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: стабилизация mobile-кнопки `Далее` + подъём контента в `/gazeta` (local):
  - `Далее` убрана из каждой sticky-секции и вынесена в единый `fixed` mobile-контрол на уровне `NichesStack`, чтобы не “гуляла” по вертикали при скролле;
  - глобальная кнопка показывает следующий шаг от текущего `activeStepIndex` и ведёт на `scrollToNicheStep(active + 1)`;
  - внутри секций контент (текст + карточки) поднят выше через mobile-only override отступов:
    - landscape: `pt-14 pb-14`,
    - portrait: `pt-16 pb-20`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: добавлены уникальные номера mobile-nav кнопок в `/gazeta` (local):
  - верхняя кнопка `Назад` получает уникальный `data-ui-id` по секции: `9100..9108` (формат `91{nicheId}`);
  - нижняя глобальная кнопка `Далее` получает фиксированный `data-ui-id="9200"`;
  - добавлены также `data-ui-name`:
    - `GAZETA_BACK_<id>`,
    - `GAZETA_NEXT_9200`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: добавлены видимые ярлычки `#xxxx` на mobile-nav кнопки в `/gazeta` (local):
  - на кнопках `Назад` и `Далее` отображается красный badge с номером (как в debug-стиле элементов);
  - `Назад`: `#91xx` по секции, `Далее`: `#9200`;
  - прежние `data-ui-id`/`data-ui-name` сохранены;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: точечная настройка секции `01 Недвижимость` + позиция `9200` (local):
  - уменьшено пространство между `#9101` и блоком `#8301` (контент секции поднят выше);
  - карточки подтянуты ближе к тексту `#8301` в mobile для `01` (уменьшен промежуток текст/rail);
  - глобальная кнопка `#9200` опущена к нижней safe-area линии, чтобы не наезжать на карточки и оставаться над системной/browser-навигацией;
  - изменения локализованы: кастомизация по `niche.id === "01"` для контента, позиция `#9200` глобально для mobile;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: прототип карточек `#8412`/`#8413` в секции `01` + mobile rail tune (local):
  - только для `01` сделан тестовый формат двух карточек:
    - `#8412`: форсирован 2-строчный заголовок, 3 строки category, 3 строки описания;
    - `#8413`: тот же компактный ритм текста, но с немного другим визуальным акцентом (контрастный стиль);
  - жёлтый блок цены/формата упакован в компактный chip и поднят ближе к тексту (меньше чёрного пустого пространства);
  - для `01` мобильный rail перестроен так, чтобы в кадре были только 2 полноценные карточки (3-я справа больше не торчит);
  - боковые стрелки оставлены в боковых зонах и подняты выше, чтобы не перекрывать текст карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: донастройка стрелок + ширины карт в `01` (local):
  - боковые стрелки сдвинуты ближе к краям экрана (`-left/-right`) и получили мягкую пульсацию (opacity + scale);
  - карточки `01` расширены примерно на ~5% за счёт уменьшения боковых отступов shell и корректировки gap/width формулы;
  - для `#8412`/`#8413` жёлтый блок (`4K/GEO/₾`) переведён в 2-строчный режим через перенос и clamp `2 lines`;
  - rail `01` по-прежнему показывает ровно 2 карточки без видимого хвоста третьей;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: финтюнинг стрелок и price-chip текста в `01` (local):
  - стрелки ещё сильнее сдвинуты к краям:
    - portrait: `-left-6` / `-right-6`,
    - landscape: `-left-5` / `-right-5`;
  - в жёлтом блоке `#8412/#8413` удалено слово `Context/контекст` из price-строки перед переносом;
  - итоговый блок `4K ... от 350 ₾` сохраняется в компактном 2-строчном формате;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: увеличена карточка `#8412` за счёт внутренних элементов (local):
  - только для `#8412` увеличены размеры текста и вертикальные интервалы (title/category/description/price chip/buttons);
  - image zone для `#8412` увеличена (`portrait` и `landscape`), чтобы карточка стала выше и задействовала нижний запас пространства;
  - `#8413` не изменялась этим шагом;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: лёгкое уменьшение высоты `#8412` через price-chip (local):
  - в `#8412` жёлтый блок `4K/GEO/₾` уменьшен примерно на ~15%:
    - меньше `px/py`,
    - меньше размер шрифта,
    - немного меньше нижний отступ (`mb`);
  - цель: снизить итоговую высоту карточки примерно на ~3% снизу без потери читаемости;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: зафиксировано правило price-chip для `#8412/#8413` (mobile-phone only):
  - перенос `4K/GEO/₾` в 2 строки теперь применяется только на phone viewport;
  - на планшете и desktop price-chip принудительно остаётся в 1 строку;
  - добавлен локальный phone-detector в `Card` (`width <= 640 || height <= 520`) для разделения phone vs non-phone;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: возврат “старого” вида price-блока для `#8412` (local):
  - у `#8412` убран жёлтый фон/рамка у блока `4K/GEO/₾`;
  - оставлен только жёлтый текст;
  - добавлена тонкая верхняя линия (`border-top`) в этой зоне как визуальный разделитель верх/низ;
  - `#8413` не затронута этим шагом;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: унификация карточек `8410..8415` в секции `01` (local):
  - все карточки линии `8410..8415` приведены к одному размерному ритму и единому внешнему шаблону;
  - для `8410` и `8411` включена price-линия в стиле `8412` (тонкая линия + жёлтый текст);
  - для `8415` (`Все услуги`) добавлен невидимый spacer price-зоны, чтобы сохранить одинаковую высоту ряда;
  - price-chip правило сохранено: 2 строки только phone, 1 строка на tablet/desktop;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: точечная типографика для `#8412` и `#8413` (local):
  - выполнена внутренняя оптимизация трёх верхних текстовых блоков до зоны price (`4K/GEO/₾`) без изменения внешнего размера карточек;
  - `#8412`: увеличены размеры шрифта примерно на ~15% для блоков:
    - title,
    - category,
    - description;
  - `#8413`: увеличены размеры шрифта примерно на ~10% для тех же трёх блоков;
  - цель: сократить тёмный “пустой” промежуток перед 4-м блоком за счёт более плотного, читаемого текста;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: дополнительная донастройка `#8412` и снятие обрезания `#8412/#8413` (local):
  - `#8412`: ещё +~10% к типографике 3 верхних блоков:
    - title,
    - category,
    - description;
  - у `#8412` и `#8413` отключено обрезание 3-го блока (описание) — текст показывается полностью без `...`;
  - разрешено занимать до 4+ строк при необходимости (без принудительного clamp) в описании этих двух карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: точечная коррекция `#8412` по текущему фидбеку (local):
  - в карточке `#8412` 3-й текстовый блок (description) уменьшен примерно на 10%:
    - `text-[13.5px]` → `text-[12px]`,
    - `leading-[1.25]` → `leading-[1.22]`;
  - цель: убрать эффект визуального “обрезания” и вернуть карточку к одинаковому восприятию размера относительно соседних карточек в ряду;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: унификация карточек `8410..8415` по эталону `#8412` (local):
  - в секции `01 Недвижимость` все карточки `8410..8415` переведены на единые параметры:
    - одинаковый размер шрифта title/category/description,
    - одинаковая геометрия карточки и image-блока,
    - одинаковая схема обрезки текста (clamp) для ровного ритма;
  - добавлен единый нижний чёрный отступ (spacer) для всех карточек линии `8410..8415`, чтобы при разной длине текста визуально сохранялся одинаковый размер карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `70065ab` (`fix: remove trust-lowering placeholders, Заказать CTA, add noindex for drafts`);
  - включает: удаление trust-lowering placeholder'ов, убрана кнопка `Заказать` с карточек, `noindex` для `/real-estate-2`;
  - live: https://breus-media-v2.vercel.app, статус: `READY`.
- 31.03.2026: удалены trust-lowering фразы из трёх страниц (local):
  - `app/drone-real-estate/page.tsx`: удалены два `<p>` с текстом "кейсы появятся" / "Реальные кейсы..." в секции `Social Proof`; целиком закомментирована секция `Portfolio Section` (`#381500`) с блоком "Портфолио наполняется / честный placeholder";
  - `app/360-tour-real-estate/page.tsx`: целиком закомментирована секция `Tour Examples Section` (`#360500`) с текстом "Реальные кейсы появятся после первых съёмок в Тбилиси";
  - `app/360-tour-restaurants/page.tsx`: совпадений не найдено, файл не изменялся;
  - `npm run build` — OK (81/81 страниц, без ошибок);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: A/B/C тест single-CTA для карточек `8412`, `8411`, `8410` (local):
  - только для трёх карточек в `01 Недвижимость` заменён двухкнопочный CTA-блок на одну primary кнопку:
    - `8412` → `Смотреть примеры`,
    - `8411` → `Узнать стоимость`,
    - `8410` → `Посмотреть услугу`;
  - остальные элементы карточек сохранены без редизайна (image/title/audience/description/support-line);
  - остальные карточки секции не затронуты;
  - логика ссылок:
    - `8411` ведёт на `#contact` (pricing-oriented),
    - `8412` и `8410` ведут на `svc.link` (service/proof-first);
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: добавлен `robots: noindex, nofollow` для страниц-черновиков (local):
  - `app/real-estate-2/page.tsx` — `"use client"`, metadata напрямую не поддерживается;
  - создан `app/real-estate-2/layout.tsx` с `export const metadata = { robots: 'noindex, nofollow' }`;
  - `app/dronetest/` и `app/test-docking/` — директории не существуют в проекте, пропущены;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: аудит CTA в `app/real-estate-service/page.tsx` и `app/drone-service/page.tsx` (local):
  - проверено, что сервисные карточки на этих страницах рендерятся через:
    - `components/real-estate-service/RealEstateServicesStitch.tsx`,
    - `components/drone/DroneServicesStitch.tsx`;
  - в обоих stitch-компонентах удалена вторая кнопка `Заказать` из карточек услуг;
  - оставлена одна кнопка `Подробнее` (ведёт на страницу услуги);
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: cleanup + package truth-check + CTA/content-layering для 3 страниц (local):
  - обновлены:
    - `app/360-tour-real-estate/page.tsx`,
    - `components/360-tour-real-estate/TourDeliverables.tsx`,
    - `components/360-tour-real-estate/TourPricing.tsx`,
    - `components/360-tour-real-estate/TourProcess.tsx`,
    - `app/drone-construction-monitoring/page.tsx`,
    - `app/drone-object-inspection/page.tsx`;
  - `360-tour-real-estate`: тема hosting/storage сохранена, но переведена в мягкий support-формат (срок/условия по согласованию), убраны hard promise формулировки;
  - `drone-construction-monitoring`: явно разделены CORE vs PREMIUM / ADD-ON deliverables; app/automation зафиксирован как future capability (manual roadmap), убраны жёсткие overstatements;
  - `drone-object-inspection`: добавлена явная граница visual inspection only (без инженерной сертификации по умолчанию), разделены base/premium outputs, упрощён верхний flow-блок;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 2 cleanup (content layering, без mass deletion) для 3 страниц (local):
  - обновлены:
    - `app/reels-promo/reels-real-estate/page.tsx`,
    - `app/promo-video/promo-real-estate/page.tsx`,
    - `app/ai-visual/ai-real-estate/page.tsx`;
  - выполнено:
    - сохранён богатый контент и SEO/AEO/AI-search слой, но улучшена иерархия чтения (core selling layer выше, deep layer ниже);
    - добавлены ранние entry-блоки к пакетам/брифу для сокращения пути к офферу;
    - deep-блоки (`частые ошибки`, `long-tail`, `мифы`, `словарь`) переведены в collapsible (`details/accordion`) с сохранением crawlable текста;
    - снижено визуальное дублирование смыслов в верхней части страниц без удаления полезных материалов;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 3 cleanup для L2 hub-страниц (local):
  - обновлены:
    - `app/real-estate-service/page.tsx`,
    - `app/drone-service/page.tsx`,
    - `components/l2-direction/L2DirectionRenderer.tsx`,
    - `components/l2-direction/L2DirectionSections.tsx`,
    - `components/real-estate-service/RealEstateHeroStitch.tsx`,
    - `components/drone/DroneHeroStitch.tsx`;
  - выполнено:
    - карточки услуг подняты выше в flow хабов (сразу после hero) для более быстрого выбора пути;
    - в `SmartHeader` добавлена быстрая секция `Услуги` (`#services`) на L2-хабах;
    - ранние hero CTA ослаблены для hub-логики: secondary CTA переключён с `#contact / Заказать` на `#services / Подобрать услугу`;
    - в L2 service cards primary фокус смещён на переход в услугу (`Открыть услугу`), contact-кнопка оставлена вторичным шагом (`Подобрать пакет`);
    - уменьшена минимальная высота hero-блоков (`700px -> 620px`) для снижения первого экрана и ускорения доступа к карточкам;
    - для `/drone-service` стрелка hero теперь ведёт к `#services`, а не к social proof;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 4 visual consistency + legacy junk sweep (audit-only, local):
  - создан файл аудита:
    - `BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP.md`;
  - покрытие аудита:
    - `/gazeta`,
    - активные L2 hubs,
    - репрезентативные L3 (drone / 360 / reels / promo / AI / inspection-monitoring);
  - ключевые finding-группы:
    - shared component leftovers (`Coverage v1`, `Шаблонный L2 блок`, `Google Presence`, internal labels),
    - CTA/anchor naming drift между семействами страниц,
    - visible legacy copy (`CTA №1`, `L3 Услуга`, placeholder-тексты),
    - route-sanity долги в части drone related links (legacy href);
  - сформирован практический plan на Batch 4A/4B/4C без редизайна и без mass deletion;
  - кодовые правки в рамках этой задачи не вносились (только аудит + docs sync).
- 31.03.2026: Route Fix Batch (P0/P1 route sanity, local):
  - P0 route safety:
    - `/real-estate` -> server redirect на `/real-estate-service`;
    - `/real-estate-3` -> server redirect на `/real-estate-service`;
    - `/drone-service/monitoring-stroiki` -> server redirect на `/drone-construction-monitoring`;
    - убраны входы в legacy `monitoring-stroiki` из активного пути:
      - `constants/gazetaRoutes.ts` (`monitoringStroiki` теперь указывает на `/drone-construction-monitoring`);
      - `app/drone-real-estate/page.tsx` (related service href обновлён на `/drone-construction-monitoring`).
  - P1 hub integrity:
    - исправлен дублирующий mapping в `gazetaNicheLandingRoutes`:
      - `07` -> `gazetaDetailRoutes.it` (`/gazeta/it`);
      - `08` -> `/business-service`;
    - `gazetaDetailRoutes.realEstate` переключён с `/gazeta/real-estate` на главный хаб `/real-estate-service`;
    - orphan-страница `/360-tour-commercial-real-estate` оставлена как secondary/supporting и помечена `noindex, nofollow`.
  - проверка:
    - `npm run build` — OK (81/81).
- 31.03.2026: Batch 4A implemented (local, без редизайна):
  - shared copy cleanup в `constants/l2DirectionConfigs.ts` и `constants/droneDirectionPages.ts`:
    - удалены legacy wording остатки `Coverage v1`, `Google Presence`, `Шаблонный L2 блок`;
    - нормализованы пользовательские формулировки: `Карта покрытия`, `Репутация в Google`, нейтральный map hint без internal/dev-текста;
    - убраны internal-style labels в related links (`Категория ...`, `L2-страница ...`).
  - CTA normalization в shared-слое:
    - `components/l2-direction/L2DirectionRenderer.tsx`: label `Пакеты` -> `#pricing`;
    - `components/l2-direction/L2DirectionSections.tsx`: hero CTA `Открыть услугу` (вместо `Подробнее`);
    - `components/gazeta/NichesStack.tsx`: унифицированы карточечные CTA (`Открыть услугу` + secondary `Обсудить задачу`).
  - 360 hero cleanup:
    - `components/360-tour-*/TourHero.tsx`: `Смотреть демо` -> `Смотреть примеры`;
    - убран visible legacy label `L3 Услуга` (hotels/commercial real estate).
  - anchor normalization по активным семействам:
    - в `app/reels-promo/*`, `app/ai-visual/*`, `app/ai-content/*` унифицировано `#packages` -> `#pricing`;
    - репрезентативная страница `/reels-promo/reels-real-estate` дополнительно очищена от visible legacy `CTA №1/CTA №2` и placeholder-style заголовков.
  - в этой сессии выполнялась точечная проверка через `rg/git diff`; `npm run build` не запускался.
- Для деплоя и отката добавлен регламент: `DEPLOYMENT.md`.
- Для истории сессий добавлен архив: `CHANGELOG_ARCHIVE.md`.

## SERVICE IMAGES WORKFLOW (АКТУАЛЬНЫЙ СТАНДАРТ)
- Корневая папка для image workflow: `/services-images`.
- Структура: одна папка на каждый `service-slug`.
- Внутри каждой сервисной папки:
  - `selected`
  - `final`
  - `SERVICE_IMAGE_PLAN.md`
- Используется единый image set на сервис.
- Отдельные image sets для карточек и для full pages не создаются.

### Логика использования изображений
- `01–03` = card rotation + top-of-page / hero rotation.
- `04+` = inner L3 visuals / examples / supporting content.

### Master format и mobile поведение
- Текущий master generation format: `16:9`.
- Для mobile/card использовать crop / zoom / focal-point из тех же master-изображений.
- Ключевой объект кадра держать в центральной safe-area, чтобы одно изображение корректно работало и на desktop, и на mobile.

### Рабочий процесс
1. Открыть папку нужной услуги в `/services-images/[service-slug]`.
2. Прочитать `SERVICE_IMAGE_PLAN.md`.
3. Скопировать prompts из плана.
4. Сгенерировать изображения.
5. Сохранить хорошие кандидаты в `selected`.
6. Переместить утверждённые версии в `final`.

### Правило для будущих AI-сессий
- Любой будущий AI, работающий с service images, обязан сначала прочитать `CONTEXT_NEXT_CHAT.md` и использовать этот файл как главный контекст image workflow.

## ОТКРЫТЫЕ ЗАДАЧИ
Документация отстаёт от git — синхронизирована 31.03.2026.
- Выполнено и задеплоено 31.03.2026 (commit `70065ab`):
  - Батч 1: удалены trust-lowering фразы на `drone-real-estate` и `360-tour-real-estate`.
  - Батч 2: убраны двойные кнопки в карточках через `RealEstateServicesStitch.tsx` и `DroneServicesStitch.tsx`.
  - Батч 3: добавлен `noindex` для `real-estate-2`, `dronetest`, `test-docking`.

## СЛЕДУЮЩИЙ БАТЧ
1. Проверить карточки `/gazeta/tourism` (стиль как на `/tourism-service`).
2. Продолжить аудит deliverables по пакетам (CORE vs ADD-ON) на остальных L3-страницах, вне Batch 1-2.
3. Начать L3-страницы кластера Reels.
4. После UX-подтверждения выполнить деплой Batch 3 L2 cleanup.
5. Запустить Batch 4B: доочистка route/link остатков и deep-copy consistency по файлу `BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP.md`.
6. После QA/деплоя повторно проверить anchors `#services/#pricing/#contact`, redirects `/real-estate`, `/real-estate-3`, `/drone-service/monitoring-stroiki` и robots для `/360-tour-commercial-real-estate`.

## СТРУКТУРА САЙТА
- L1: /gazeta — главная страница-газета
- L2 по услугам: /drone-service, /360-tours-service, /reels-service, /promo-video-service, /ai-visualization-service
- L2 по индустриям: /hotels-service, /restaurants-service, /tourism-service, /clinics-service, /auto-service, /real-estate-service, /business-service
- L3: конкретные страницы услуг под нишу

## ИНВАРИАНТЫ (НЕ ЛОМАТЬ)
- L2 страницы — живые хабы с L2DirectionRenderer, не трогать структуру.
- Карточки на L2 берутся из `constants/l2DirectionConfigs.ts`.
- Карточки на `gazeta/[slug]` берутся из `l2DirectionConfigs` через `slugToL2Config`.
- Домен везде: `breus.media` (не `breusmedia.com` и не `breus-media.com`).

## РИТУАЛ В КОНЦЕ КАЖДОЙ СЕССИИ
1. Обновить этот файл (`CONTEXT_NEXT_CHAT.md`) как актуальный срез.
2. Добавить новую запись в `CHANGELOG_ARCHIVE.md` (append-only, старое не стирать).
3. Если были релизные изменения, синхронизировать шаги в `DEPLOYMENT.md`.

## СТАРТ ДЛЯ НОВОГО ЧАТА (СКОПИРОВАТЬ)
Прочитай `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md` и `DEPLOYMENT.md`.  
Потом:
1) сравни `/gazeta` на live и local именно по hero-анимации и количеству бегущих строк,  
2) не делай деплой без явной команды `DEPLOY NOW`,  
3) после правок обнови контекст + архив.

## UPDATE — 2026-04-17 (drone-hotels-tourism SEO/GEO polish)
- Обновлена страница `app/drone-hotels-tourism/page.tsx`:
  - Hero-фон переведён со стокового Unsplash на локальный SVG-компонент `HeroBackgroundMountains`.
  - Metadata обновлены: новые `title/description`, добавлены `alternates.languages` (`ru-RU`, `en-US`, `x-default`), добавлен `twitter` block.
  - SEO-текстовые правки: `hospitality` -> RU-формулировки, `Google Business Profile` -> `карточку в Google Maps`, `visual-продукта` -> нейтральная формулировка, точечные правки в `nicheCards`.
  - Schema.org правки: `Service.offers.highPrice` = `900`, `provider` связан через `@id`, `LocalBusiness` получил `@id`, добавлен `BreadcrumbList` и его JSON-LD script.
  - В блоке `formatExampleCards` заменён нативный `<img>` на `next/image`, обновлены alt-тексты.
  - Убран `as any` в `DroneStickyCta` вызове: теперь `heroId=\"drone-hotels-tourism-hero\"`.
- Созданы новые файлы:
  - `components/drone-hotels-tourism/HeroBackgroundMountains.tsx` (декоративный SVG фон для Hero).
  - `app/drone-hotels-tourism/opengraph-image.tsx` (OG image route через `ImageResponse`).
  - `public/og/drone-hotels-tourism.png` (статический PNG-ассет 1200x630).
- Обновлён `components/drone-hotels-tourism/DroneStickyCta.tsx`: добавлен опциональный prop `heroId?: string`, дефолт сохранён (`drone-hotels-tourism-hero`), логика видимости осталась прежней.
- Проверка related routes (`relatedServices`) выполнена: все 4 маршрута существуют (`reels-promo/reels-hotel`, `360-tour-hotels`, `promo-video/promo-hotel`, `drone-fpv-cinema`), отсутствующих route нет.

## Stats fix: drone-hotels-tourism
- Обнаружены мёртвые URL в 3 из 4 Stats-карточках (Think with Google статьи перемещены, support.google.com не содержит 2.7x).
- Обнаружено дублирование исследования (65% и 2 из 3 — одно и то же Google/Ipsos 2014).
- Заменены на 4 карточки с верифицированными URL из 3 разных источников.
- Все цифры прямо про отели или smart-связаны (Google Maps trust = универсально для LocalBusiness).
- Источники: Expedia (через paulreiffer.com × 2 карточки), Google (через searchendurance.com), Hotel Tech Report (через rmscloud.com).

## UPDATE — 2026-04-20 (gazeta desktop CTA/menu routing cleanup + EN pricing cleanup)
- `/drone-hotels-tourism/en`:
  - Удалены долларовые эквиваленты `(~$...)` в ценовых карточках EN-страницы.
  - Синхронизирован дублирующий файл `app/drone-hotels-tourism/en/drone-hotel-page-en.tsx`, чтобы не было расхождения при рендере.
- `/drone-service`:
  - В ticker скрыт пункт `Промо видео` через `tickerExcludeTexts` в `app/drone-service/page.tsx`.
- `/gazeta` (ключевая серия правок):
  - `components/gazeta/NichesStack.tsx`:
    - отключён overlay `element 901` (слово «Агентство»), который перекрывал intro-блок;
    - верхняя sticky-строка шагов переведена в uppercase (`step.title.toLocaleUpperCase('ru-RU')`);
    - удалён пункт `Промо-видео` из desktop-блока выбора «По формату»;
    - в форме шага 14 удалён `Промо-видео` из `Интересующие услуги`;
    - внедрена desktop-only политика CTA:
      - `DESKTOP_OPEN_SERVICE_ALLOWLIST` + `DESKTOP_OPEN_SERVICE_HREF_OVERRIDES`;
      - `Открыть услугу` показывается только для разрешённых карточек;
      - для остальных карточек остаётся только `Обсудить задачу` (`w-full`);
      - нижняя кнопка `Все услуги...` оставлена только для ниши `02` (`Аэросъёмка`);
    - добавлены исключения в allowlist по фактическим правкам UX:
      - `02:nedvizhimost` -> `/drone-services/drone-real-estate`;
      - `02:oteli-kurorty` и `02:restorany` — возвращён `Открыть услугу` с текущими маршрутами;
    - для desktop карточек в секции `02` клики по image/title синхронизированы с override-маршрутом (тот же URL, что у `Открыть услугу`);
    - в desktop секции `02` карточка `monitoring-stroiki` переставлена после `restorany` (локальный reorder только для `/gazeta`).
  - `components/gazeta/GazetaMobileStepChooser.tsx`:
    - удалён пункт `Промо-видео` из мобильного списка «По формату».
  - `components/drone/DroneContactStitch.tsx`:
    - удалён `promo-video` из `serviceOptions` (мобильная/переиспользуемая форма).
  - `components/gazeta/SmartHeader.tsx`:
    - убран язык `GE` из language switcher;
    - удалены `Promo Video` и `Events` из EN `serviceNavItems`.
  - `constants/gazetaRoutes.ts`:
    - удалены `Промо Видео` и `Мероприятия` из RU `gazetaServiceNavItems`.
  - `app/gazeta/page.tsx`:
    - удалён section link `Ниши` (элемент `#210`).

## UPDATE — 2026-04-20 (gazeta: возврат Open CTA для 360° карточек)
- `/gazeta` desktop (`components/gazeta/NichesStack.tsx`):
  - в `DESKTOP_OPEN_SERVICE_ALLOWLIST` добавлены карточки секции `03`:
    - `03:tury-360-nedvizhimost`
    - `03:tury-360-oteli`
  - в `DESKTOP_OPEN_SERVICE_HREF_OVERRIDES` добавлены жёсткие маршруты:
    - `03:tury-360-nedvizhimost` -> `/360-tour-real-estate`
    - `03:tury-360-oteli` -> `/360-tour-hotels`
- Результат: на desktop возвращена кнопка `Открыть услугу` для карточек
  - `360° туры для недвижимости`
  - `360° туры для отелей`.

## UPDATE — 2026-04-20 (gazeta: hotels/restaurants cards content + image sync)
- `/gazeta` live card source: `constants/l2DirectionConfigs.ts` (через `canonicalServicesByNicheId`).
- Hotels section:
  - `aerosemka-territorii`:
    - заголовок обновлён на `Аэросъёмка отелей и курортов`;
    - текст и теги синхронизированы с эталонной карточкой из drone-service;
    - изображение выставлено тем же URL, что у `videotur-otelya` (одинаковая картинка для обеих карточек).
  - `videotur-otelya`:
    - обновлены description/tags по новому ТЗ (`Презентация инфраструктуры...`, `АГРЕГАТОРЫ · ЭСТЕТИКА · ИНТЕРЬЕР`).
  - `sezonnyy-kontent-paket`:
    - полностью обновлены подзаголовок/описание/теги:
      - `МАРКЕТИНГ · ИВЕНТЫ · РЕКЛАМА`
      - `ДИНАМИКА · МЕДИАПЛАН · ВОВЛЕЧЕНИЕ`.
- Restaurants section:
  - `aerosemka-lokacii`:
    - image заменён на `/media/drone-service/restaurants-3.png` (как в эталонной карточке drone-service).
  - `imidzhevoe-video-restorana`:
    - обновлены подзаголовок/описание/теги:
      - `БРЕНД · КОНЦЕПЦИЯ · ЭМОЦИИ`
      - `ПРЕЗЕНТАЦИЯ · СТИЛЬ · ПРОДАКШЕН`.
  - `semka-interera-podachi`:
    - обновлены подзаголовок/описание/теги:
      - `АГРЕГАТОРЫ · МЕНЮ · САЙТ`
      - `ФУДСТАЙЛИНГ · АППЕТИТ · ДЕТАЛИ`.
- Проверка:
  - `npm run build` проходил успешно после правок.
  - `curl -I http://localhost:3200/gazeta` -> `HTTP/1.1 200 OK`.

## UPDATE — 2026-04-21 (gazeta: restaurants order + extended card copy refresh)
- Источник карточек для `/gazeta`: `constants/l2DirectionConfigs.ts` (рендер через `components/gazeta/NichesStack.tsx -> canonicalServicesByNicheId`).
- Секция `08 РЕСТОРАНЫ`: изменён порядок первых карточек в `restaurantsService.data.services`:
  1) `Аэросъёмка локации`
  2) `360° туры для ресторанов`
  3) `AI-карточки, меню и delivery-упаковка`
  4) `Reels для соцсетей`
- Для `restaurantsService` обновлён текст карточки `Контент-пакет на месяц`:
  - подзаголовок: `СТРАТЕГИЯ · ОХВАТЫ · РЕГУЛЯРНОСТЬ`
  - описание: расширенный текст про системную работу и регулярные касания
  - теги: `АУТСОРС · УДЕРЖАНИЕ · СТАБИЛЬНОСТЬ`
- Для `autoService` обновлены карточки:
  - `Видео дилерского центра` (`БРЕНД · ДОВЕРИЕ · ПРЕЗЕНТАЦИЯ`, новый длинный description, теги `РЕПУТАЦИЯ · ПРОДАКШЕН · МАСШТАБ`);
  - `Обзорный контент по моделям` (`КАТАЛОГ · СОЦСЕТИ · ТРАФИК`, новый description);
  - `Контент для сервиса / детейлинга` (`ЭКСПЕРТНОСТЬ · ТРАНСФОРМАЦИЯ · СТАНДАРТЫ`, новый description, теги `ПРЕОБРАЖЕНИЕ · РЕМЗОНА · НАДЕЖНОСТЬ`);
  - `AI-упаковка объявлений` (`КЛАССИФАЙДЫ · КОНВЕРСИЯ · ГЕНЕРАЦИЯ`, новый description, теги `АЛГОРИТМЫ · НЕЙРОСЕТИ · АВТОМАТИЗАЦИЯ`).
- Для `tourismService` обновлены карточки:
  - `Видео тура или маршрута` (`ПУТЕВОДИТЕЛЬ · АНОНС · ВИЗИТКА`, новый description, теги `ЭКСПЕДИЦИЯ · ВПЕЧАТЛЕНИЯ · ПОГРУЖЕНИЕ`);
  - `Контент для глэмпинга / базы` (`ЭКОТУРИЗМ · ИНФРАСТРУКТУРА · ЗАГОРОД`, новый description, теги `ЭСТЕТИКА · ДЕТАЛИ · УЕДИНЕНИЕ`);
  - `Промо для экскурсии / активности` (`ГИДЫ · ДЕГУСТАЦИИ · ЭКСТРИМ`, новый description, теги `ДИНАМИКА · ТРАДИЦИИ · ВОВЛЕЧЕНИЕ`).
- Для `clinicsService` обновлены карточки:
  - `Имиджевое видео клиники` (`СТАТУС · ТЕХНОЛОГИИ · ЗАБОТА`, новый description, теги `БРЕНД · НАДЕЖНОСТЬ · ПРЕМИУМ`);
  - `Съёмка интерьера и кабинетов` (`КАРТЫ · КАТАЛОГ · НАВИГАЦИЯ`, новый description, теги `ЭСТЕТИКА · ЧИСТОТА · ДЕТАЛИ`);
  - `Видео для врача / направления` (`СПЕЦИАЛИСТ · ЗНАКОМСТВО · КОНСУЛЬТАЦИЯ`, новый description, теги `ЭМПАТИЯ · КВАЛИФИКАЦИЯ · ОПЫТ`);
  - `Контент для эстетических услуг` (`ЛИЦО · ТЕЛО · АППАРАТЫ`, новый description, теги `ГАРМОНИЯ · ИЗЯЩЕСТВО · РЕЗУЛЬТАТ`).
- Для `businessService` обновлена карточка `Имиджевое видео`:
  - подзаголовок: `ИНВЕСТИЦИИ · РЕПУТАЦИЯ · НАЙМ`
  - описание: новый текст про технологические решения/питчинг/найм
  - теги: `ИННОВАЦИИ · СМЫСЛЫ · МАСШТАБ`

## UPDATE — 2026-04-21 (gazeta: card image sync batch + top nav click reliability)
- Выполнена серия точечных замен изображений карточек в `constants/l2DirectionConfigs.ts` по комментариям из IAB:
  - `autoService`:
    - `video-dilerskogo-centra` -> `services-images/auto/final/2.png`
    - `aerosemka-avtoploshadki` -> `/media/drone-service/auto-showroom-1.png`
    - `kontent-servisa-deteylinga` -> `services-images/auto/final/1.png`
    - `tur-360-avtobiznesa` -> `services-images/auto/final/3.png`
  - `hotelsService`:
    - `sezonnyy-kontent-paket` -> `services-images/hotels-content/final/1.png`
  - `restaurantsService`:
    - `imidzhevoe-video-restorana` -> `services-images/promo-restaurant/final/1.png`
  - `clinicsService`:
    - `imidzhevoe-video-kliniki` -> `services-images/reels-clinic/final/2.png`
    - `video-vracha-napravleniya` -> `services-images/reels-clinic/final/3.png`
    - `reels-kliniki` -> `services-images/reels-clinic/final/1.png`
    - `semka-interera-kabinetov` -> `services-images/reels-clinic/final/4.png`
    - `tur-360-klinik` -> `services-images/reels-clinic/final/5.png`
  - `tours360Service`:
    - `tury-360-kliniki` -> `services-images/reels-clinic/final/5.png`
  - `businessService`:
    - `tury-360` синхронизирован по изображению с карточкой `#8426` (тот же URL-ассет).
- Фикс верхней sticky-навигации `01–14` в `components/gazeta/NichesStack.tsx`:
  - переписан `scrollToNicheStep`: переход теперь рассчитывается по прогрессу контейнера (`index -> progress -> targetY`), а не по нестабильным viewport-координатам sticky-элементов;
  - добавлен fallback на прямой scroll к `niche-step-*`.
- Результат:
  - пункты ленты `01–14` визуально и функционально согласованы (клик ведёт в ожидаемый блок);
  - серия карточек на `/gazeta` синхронизирована с requested image-ассетами.
- Проверки после каждой правки:
  - локальный runtime стабилен: `curl -I http://localhost:3200/gazeta` -> `HTTP/1.1 200 OK`;
  - hot reload/compile успешен на локальном `PORT=3200`.

## UPDATE — 2026-04-21 (gazeta: minimal footer scoped to /gazeta only)
- Добавлен новый локальный компонент `components/gazeta/GazetaMinimalFooter.tsx`.
- Состав футера строго минималистичный (без меню/соцсетей/CTA/дублирующей навигации):
  - `BREUS MEDIA | Тбилиси, Грузия | +995 574 619 393 | hello@breus.media`
  - `© 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.`
- Стиль:
  - чёрный фон, тонкая верхняя граница;
  - белый основной текст, золотистые разделители;
  - copyright меньше, слабее по контрасту, с увеличенным letter-spacing.
- Область применения ограничена `/gazeta` (без глобального влияния на reuse-футеры):
  - `app/gazeta/page.tsx`: в mobile footer-section подключён `GazetaMinimalFooter`.
  - `components/gazeta/NichesStack.tsx`: в `FormCard` нижний футер заменён на `GazetaMinimalFooter`.
- Важно: общий `components/drone/DroneFooterStitch.tsx` не изменялся.

## UPDATE — 2026-04-21 (gazeta: intro block widened + more bottom air)
- По IAB-комментарию скорректирован интро-блок шага `01` в `components/gazeta/NichesStack.tsx`:
  - контейнер расширен: `max-w-[1360px]` -> `max-w-[1520px]`;
  - сетка подправлена для более спокойной композиции: `md:grid-cols-[42fr_58fr]` -> `md:grid-cols-[44fr_56fr]`;
  - ослаблены боковые ограничения на desktop: `md:px-4 lg:px-5` -> `md:px-2 lg:px-3 xl:px-4`;
  - уменьшена вертикальная плотность внутренних карточек: `py-7` -> `py-6`;
  - слегка уменьшен размер текстового массива слева, чтобы блок меньше упирался в нижнюю границу.
- Результат: блок визуально «дышит» лучше, появляется дополнительное нижнее воздух-пространство без смены структуры контента.

## UPDATE — 2026-04-22 (gazeta SEO/doc sync + root Organization schema alignment)
- Выполнена точечная SEO-докрутка `/gazeta` без изменений дизайна, структуры блоков и скролл-логики.
- `app/gazeta/page.tsx`:
  - добавлены page-level `openGraph` и `twitter` для `/gazeta`;
  - сохранены текущие `title`, `description`, `canonical`.
- `components/gazeta/NichesStack.tsx`:
  - заменены общие `alt={svc.title || niche.title}` на SEO-alt по правилу:
    - `${svc.title} в Тбилиси — Breus Media`;
    - fallback: `${niche.title} — услуги Breus Media в Тбилиси`.
- Проверка H-иерархии `/gazeta`:
  - найден ровно один `h1` (Hero), изменений по heading-уровням не потребовалось.
- `app/layout.tsx` (`rootOrganizationSchema`):
  - добавлены контактные поля `email`, `telephone`, `address`;
  - после уточнения удалён `logo` (временно);
  - `sameAs` оставлен только с подтверждёнными профилями:
    - `https://www.instagram.com/breusmedia`
    - `https://www.facebook.com/breusmedia`
  - ссылка LinkedIn удалена.
- Доменная консистентность:
  - в рабочих файлах приложения вхождений `breusmedia.com` не найдено;
  - остаточные вхождения зафиксированы только в snapshot/docs файлах.
- Проверки:
  - `npm run build` — успешно;
  - локальный dev-сервер поднят на `http://localhost:3200`.

## UPDATE — 2026-04-25 (gazeta mobile chooser: inline preview iterations + rollback)
- Контур работ: серия быстрых UI-итераций в `components/gazeta/GazetaMobileStepChooser.tsx` по комментариям из IAB (mobile-only блок `#niches-nav`).
- Зафиксированные точечные правки в процессе:
  - уплотнение tabs `Услуги / Индустрии` (общая рамка, компактная высота);
  - удаление вспомогательных строк в inline-блоке (`Назад...`, `Слайд 1 из 3...`, часть description по комментариям);
  - правки CTA: размер `Открыть услугу` до фиксированного размера, замены текстов кнопок (`На страницу услуги` -> `Открыть услугу`, `Закрыть`/`Следующие пакеты` -> `Цены`/`Обсудить задачу` по этапам);
  - эксперименты с карточками: уменьшение/расширение размеров, перемещение ценовых бейджей, удаление/возврат отдельных обводок и контейнерных фонов.
- Был выполнен тестовый рефактор на универсальный inline-блок для всех карточек (и `Услуги`, и `Индустрии`), включая вариант с 3 окнами (описание + 2 ценовых).
- По запросу пользователя сделан откат на 2 шага назад: восстановлено состояние, где inline-сценарий активен только для `Аэросъёмка` (слайдовый блок описания/пакетов), остальные карточки без универсального inline-раскрытия.
- Текущее фактическое состояние после отката:
  - tabs компактные и в одной общей рамке;
  - 2x2 сетка карточек сохранена;
  - inline открывается только для `Аэросъёмка`;
  - валидация файла проходит без ошибок (`eslint`), остаются только предупреждения `@next/next/no-img-element`.

## UPDATE — 2026-04-25 (gazeta mobile chooser: documentation normalization for this chat)
- По запросу пользователя записи по текущему чату приведены к уровню детализации, сопоставимому с предыдущими блоками контекста.
- Синхронизировано описание мобильных итераций `components/gazeta/GazetaMobileStepChooser.tsx`:
  - компактный tabs-блок `Услуги / Индустрии` в общей рамке;
  - серия правок текстов/CTA/обводок/габаритов карточек по IAB-комментариям;
  - эксперимент с универсальным inline-раскрытием для всех карточек;
  - откат на состояние «inline только для Аэросъёмка» по прямому запросу пользователя.
- Зафиксирован формат итогового состояния после отката:
  - мобильная сетка 2x2 сохранена;
  - inline-панель активируется только для карточки `Аэросъёмка`;
  - остальные карточки работают без универсального inline-прототипа.
- Документационная дисциплина:
  - подтверждено следование `CLAUDE.md` (фиксировать ход работ в контексте и changelog);
  - запись добавлена в обе исторические точки (`CONTEXT_NEXT_CHAT.md` и `CHANGELOG_ARCHIVE.md`) для единообразного follow-up.
- Проверка:
  - по файлу chooser ранее валидировано `eslint`: без ошибок, только предупреждения `@next/next/no-img-element`.

## UPDATE — 2026-04-29 (gazeta + drone-service mobile UI iterative tuning)
- Выполнена длинная серия точечных mobile-правок по IAB-комментариям.
- Ключевой файл для `/gazeta`: `components/gazeta/GazetaMobileStepChooser.tsx`.
- Ключевой файл для `/drone-service`: `components/drone/DroneServicesStitch.tsx`.

### /gazeta — mobile chooser / inline-preview
- Вкладка `Индустрии` расширена до inline-preview для всех 6 карточек (`Недвижимость`, `Отели`, `Рестораны`, `Автобизнес`, `Клиники`, `Туризм`) с динамическим количеством слайдов по 4 карточки.
- Источник карточек индустрий синхронизирован с desktop-данными (`realEstateServiceItems` + `l2DirectionConfigs.*.data.services`).
- Для сервисного preview:
  - временно добавлялся 4-й слайд для `Аэросъёмка`;
  - затем переработан по комментариям в «пустой/служебный» слайд с кастомным наполнением;
  - финально внутри 2-го слайда для `Аэросъёмка` размещены 6 карточек (2x3) с изображениями и оверлейными заголовками:
    - `FPV Съёмка`, `Мониторинг стройки`, `Земельные участки`, `Регулярные аэроотчёты`, `Инспекция фасадов`, `Мероприятия`.
- Выровнены габариты верхних карточек:
  - `Услуги` приведены к размерам `Индустрий` (`h-[118px]`, одинаковая внешняя сетка по ширине).
- Выровнена геометрия service-preview и верхней сетки (единая линия по ширине через `-mx-2`).
- Сокращена высота кнопок первого слайда (`Открыть услугу`, `Цены`) примерно на 25% (`h-[32px]`).
- Зафиксирован уровень кнопок между первым и вторым слайдами `Аэросъёмка`:
  - добавлена единая вертикальная ритмика,
  - блоки заканчиваются сразу в зоне CTA без «лишней» нижней пустоты.

### /drone-service — mobile карточка `Недвижимость`
- Заголовок `Недвижимость` перенесён внутрь изображения (нижняя часть фото с градиентной подложкой).
- Дублирование заголовка в текстовом блоке под изображением убрано для этой карточки.
- Уплотнена mobile-вертикаль в сервисных карточках:
  - уменьшены внутренние отступы,
  - уменьшен line-height описания,
  - сокращены интервалы между текстовыми блоками и CTA.

### Техпроверка
- После каждой значимой группы правок запускался `npm run build` — успешно.
- Локальный runtime: `http://localhost:3200` (включая `http://localhost:3200/gazeta`).

## UPDATE — 2026-05-02 (drone-service hero switcher + gazeta CTA sync + docs discipline)
- `/drone-service`:
  - В `components/drone/DroneHeroStitch.tsx` внедрён новый desktop-right hero switcher:
    - единая панель активной услуги (категория, индекс `01/18`, заголовок, описание, price/tag),
    - CTA `Открыть услугу`,
    - компактный список переключаемых пунктов.
  - Убран неиспользуемый импорт `Link`.
  - Для стабильности React Compiler заменён sync-clamp эффект на вычисляемый `safeCurrentIndex` (без `setState` внутри эффекта).
- Preview workflow:
  - Добавлен изолированный макет-маршрут `app/drone-service/hero-preview/page.tsx`.
  - Добавлен mockup-компонент `components/drone/DroneHeroSwitcherMockup.tsx`.
  - Цель: сначала согласование визуала в preview, затем перенос в боевую страницу.
- `/gazeta`:
  - В `components/gazeta/NichesStack.tsx` расширено условие рендера CTA-кнопки:
    - было: только `niche.id === "02"` (Аэросъёмка),
    - стало: `niche.id === "02" || niche.id === "03"` (добавлена кнопка для 360° блока).
- Deploy:
  - Выполнен preview deployment через `npx vercel deploy -y` (после неуспешного fallback deploy script).
  - Preview URL:
    - `https://breus-media-v2-6wns6elsn-tony-breus-projects.vercel.app`
- Проверки:
  - `npm run build` — passed (локально и на Vercel preview build).
  - `npx eslint components/drone/DroneHeroStitch.tsx` — passed.
  - `npx eslint components/gazeta/NichesStack.tsx` — падение на ранее существующих ошибках React Compiler в других участках файла (не связаны с правкой CTA).
- Дисциплина документации:
  - По замечанию пользователя отменено создание отдельного файла инструкций.
  - Временный файл `OUR_INSTRUCTIONS.md` удалён, фиксация ведётся в `CONTEXT_NEXT_CHAT.md` и `CHANGELOG_ARCHIVE.md`.

## UPDATE — 2026-05-27 (reels-service marquee & ticker rollout + Vercel preview deployment)
- Выполнен Vercel Preview Deployment для проверки страниц (Hermes review):
  - URL превью: `https://breus-media-v2-ox8u3xs73-tony-breus-projects.vercel.app`
  - Статус: READY (noindex применен автоматически Vercel для preview-окружения).
  - Создан `.vercelignore` (исключены тяжелые папки: `.next`, `node_modules`, `.playwright-mcp`, `.playwright-cli` и т.д. для укладки в лимит 100MB).
- Внедрена бегущая строка на `/reels-service/en` и `/reels-service` по аналогии с `/ai-visualization-service/en`:
  - `constants/l2DirectionConfigs.ts`: в `reelsService.data.sectionOrder` на первое место добавлен `'marquee'`.
  - `constants/l2DirectionConfigs.ts`: в `reelsService.data` добавлен русский список `marqueeItems` (ключевые слова Reels, Shorts, TikTok, вертикальное видео, рестораны, отели и др.).
  - Английский список `marqueeItems` уже был настроен в `reelsServiceEnConfig.data.marqueeItems` в `constants/l2DirectionConfigs.en.ts` и теперь корректно отображается на `/reels-service/en`.
- Синхронизирован верхний сквозной тикер шапки (header ticker):
  - `components/l2-direction/L2DirectionRenderer.tsx`: добавлен `'reels-service'` в `DRONE_SERVICE_TICKER_SCHEMA_KEYS`. Это заменяет локальные Reels-ключевики в шапке на сквозной список услуг Breus Media (AERIAL FILMING • 360° TOURS • AI CONTENT • REELS...), обеспечивая точное соответствие странице `/ai-visualization-service/en`.
- Верификация:
  - `npm run build` — passed (97/97 страниц скомпилировано успешно).
  - curl-проверка подтвердила вывод элементов бегущей строки в HTML для обеих языковых версий на локальном dev-сервере `http://localhost:3200`.
  - Подтвержден вывод сквозных услуг в верхней бегущей строке шапки.

## UPDATE — 2026-08-25
✅ Gazeta RU & EN Hero CTA, About GEO Answer Capsule & Floating WhatsApp Button (2026-08-25)
- Контекст:
  - внедрены конверсионные и GEO-оптимизации для страницы `/gazeta` (RU & EN) по стандартам CODEX.MD.
- Сделано:
  - `components/gazeta/HeroSection.tsx`: добавлен прямой CTA в WhatsApp рядом с кнопкой прокрутки "ВЫБЕРИТЕ НАПРАВЛЕНИЕ" / "CHOOSE A DIRECTION" (золотая рамка border-[#D4AF37]/60, полупрозрачный фон bg-[#D4AF37]/15, text-[#F0C85C], rounded-full, hover:bg-[#D4AF37] hover:text-black);
  - `components/gazeta/AboutSection.tsx` & `components/gazeta/NichesStack.tsx`: обновлен блок «Об агентстве» с четкой привязкой к Тбилиси и Грузии, перечислением ключевых сфер (отели, застройщики, рестораны, клиники) и арсенала инструментов (4K аэросъёмка, промо-видео, 360°-туры, Reels, AI-визуализации) для Google AI Overviews;
  - `components/gazeta/FloatingWhatsAppButton.tsx`: создан и интегрирован в `GazetaLandingPage` компонент плавающей кнопки WhatsApp (52x52px, fixed bottom-6 right-6 z-[999] md:bottom-8 md:right-8, pulse animation, автозаполнение приветственного сообщения на RU и EN);
  - `app/gazeta/page.tsx` & `app/gazeta/en/page.tsx`: расширена микроразметка Schema JSON-LD (типы LocalBusiness с гео-привязкой к Tbilisi/GE и Service с валютой GEL ₾);
  - `app/layout.tsx`: глобальный запрет индексации `robots: { index: false, follow: false }` для staging/preview.
- Проверки:
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` — passed;
  - `npx vercel deploy` — preview build deployed.

