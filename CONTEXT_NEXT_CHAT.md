# КОНТЕКСТ — Breus Media
### Обновлён: 27 марта 2026

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- GitHub: https://github.com/TonyBreus/breus-media-v2
- Ветка: main
- Последний кодовый коммит: 413c9d2

## ЧТО СДЕЛАНО И ЗАКРЫТО
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
- Для деплоя и отката добавлен регламент: `DEPLOYMENT.md`.
- Для истории сессий добавлен архив: `CHANGELOG_ARCHIVE.md`.

## ОТКРЫТЫЕ ЗАДАЧИ
1. Проверить и, при необходимости, обновить карточки туризма на `/gazeta/tourism` до стиля как на `/tourism-service`.
2. Прицельно проверить жалобу на "третью строку" именно на устройстве/разрешении пользователя (видео/скрин во время скролла), если повторится — зафиксировать координаты и viewport.

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
