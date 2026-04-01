# КОНТЕКСТ — Breus Media
### Обновлён: 1 апреля 2026 (Card/Binding Consistency Batch B)

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- GitHub: https://github.com/TonyBreus/breus-media-v2
- Ветка: main
- Последний кодовый коммит: 5479476 (fix(content): recover package matrix batch A)

## ЧТО СДЕЛАНО И ЗАКРЫТО
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
✅ Card/Binding Consistency Batch B завершён (01.04.2026) — 1 L3 href добавлен, 6 карточек оставлены без href (L3 страницы не существуют)
  - `reelsService.reels-nedvizhimost` (card 1): добавлен `primaryHref: '/reels-promo/reels-real-estate'`
  - `reelsService.reels-biznes` (card 7): L3 страница `/reels-promo/reels-business` не существует → fallback
  - `businessService` cards 1,2,3,5,6: ни одного канонического L3 для business-specific promo-video / reels / AI / space-shooting → все 5 оставлены без href
  - Файл: `constants/l2DirectionConfigs.ts`
  - Build: ✅ чистый

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

## ОТКРЫТЫЕ ЗАДАЧИ — Batch 6 (следующий, маленький)

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
