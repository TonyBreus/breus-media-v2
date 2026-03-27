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
