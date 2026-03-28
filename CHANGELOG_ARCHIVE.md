# CHANGELOG ARCHIVE — Breus Media
Append-only архив изменений. Старые записи не удаляются.

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
