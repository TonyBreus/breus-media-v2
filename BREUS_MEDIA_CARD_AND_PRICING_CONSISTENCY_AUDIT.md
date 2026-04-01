# BREUS MEDIA — Card & Pricing Consistency Audit
#### Дата: 1 апреля 2026
#### Источник: localhost:3200 (production-like local, `next start`)
#### Scope: /gazeta · 10 активных L2 хабов · l2DirectionConfigs.ts

---

## 1. Executive Summary

Аудит охватил 10 конфигураций L2 хабов (`l2DirectionConfigs.ts`, 2 497 строк), страницу `/gazeta` (компонент `NichesStack`), и страницу `/real-estate-service` (кастомная реализация).

**Итог: 4 класса нарушений, 27 конкретных точек несоответствия.**

| Класс нарушения | Найдено случаев | Критичность |
|---|---|---|
| Пропущенные L3 hrefs (незакреплённые карточки) | 11 | Высокая — визитёр не может перейти к услуге |
| Неправильные / дублирующиеся L3 hrefs | 2 | Высокая — пользователь попадает не туда |
| Ценовая несогласованность в карточках | 5 | Средняя — разные цены на один тип услуги |
| Несогласованный primaryCtaLabel | 5 | Средняя — разные кнопки на одинаковых по структуре карточках |
| Неравномерное кол-во карточек в семье | 3 | Низкая — структурная нечёткость |
| Смешанный ценовой формат внутри семьи | 2 | Средняя — "от XXX ₾" vs "по задаче" в одном списке |

Код карточек корректно рендерится через `L2DirectionServices` — сами компоненты стабильны. Проблемы — исключительно в **данных** в `l2DirectionConfigs.ts`.

---

## 2. Strongest Current Card References

Лучшие карточки по структурной целостности для будущей нормализации:

### 🥇 `tours360Service` — эталонная семья
- **Все 7 карточек** имеют `primaryHref`
- **Единый ценовой формат**: `360° · от 300 ₾` на всех 7 карточках
- **Нет отклонений** в category поле, нет "по задаче"
- Pricing plans: 300 / 550 / 850 — чёткая лесенка ×1.8 / ×1.5

### 🥈 `hotelsService` — чистая 6-карточная семья
- 5 из 6 карточек имеют `primaryHref` (только AI-карточка ссылается, всё подключено)
- Внятная ценовая лестница: 300–650 ₾ по карточкам
- Pricing plans: 350 / 650 / 900 — логично

### 🥉 `tourismService` — хорошая cross-linking структура
- 5 из 7 карточек имеют `primaryHref` (2 пропуска — глэмпинг и AI)
- Ценовая лестница 300–550 ₾ логична
- Является образцом для drone/promo/360/reels cross-family связей

---

## 3. Card Layout Inconsistency Findings

### 3.1 Количество карточек в семье

| Семья | Кол-во карточек | Отклонение |
|---|---|---|
| `hotelsService` | 6 | -1 от нормы |
| `restaurantsService` | 7 | норма |
| `tourismService` | 7 | норма |
| `clinicsService` | 7 | норма |
| `autoService` | 7 | норма |
| `businessService` | 6 | -1 от нормы |
| `promoVideoService` | 7 | норма |
| `aiVisualizationService` | 9 | +2 от нормы |
| `reelsService` | 8 | +1 от нормы |
| `tours360Service` | 7 | норма |

**Проблема:** `businessService` — 6 карточек без очевидного объяснения (hotels тоже 6, но hotels — маленькая ниша). Business — общий хаб, должен быть полным.

**Проблема:** `aiVisualizationService` — 9 карточек. Карточки 8 и 9 (`ai-opisaniya-lokalizaciya-hotel`, `ai-upakovka-predlozheniy-tourism`) — это AI Content-карточки с ценой `от 300 ₾`, тогда как остальные 7 AI карточек — `по задаче`. Структурно разнородны.

### 3.2 Ценовой формат в поле `price` (category · price)

Стандарт: `[Category Label] · от XXX ₾`

| Отклонение | Семья | Карточка | Текущий формат | Проблема |
|---|---|---|---|---|
| Нестандартный label | `reelsService` | card 8 (reels-rieltor) | `Пакет 6-12 роликов · от 650 ₾` | Category label перегружен — выбивается из ряда простых `Reels · по задаче` |
| Смешанный формат | `aiVisualizationService` | cards 8–9 | `AI Content · от 300 ₾` | Остальные 7 карточек в семье — `по задаче`; 8–9 с фиксированной ценой создают несоответствие |
| Смешанный формат | `reelsService` | cards 1–7 | `Reels · по задаче` | Card 8 той же семьи — `от 650 ₾`; разный ценовой режим в одной колонке |

---

## 4. CTA Inconsistency Findings

### 4.1 primaryCtaLabel — избирательное присвоение

Поле `primaryCtaLabel` переопределяет дефолтный текст кнопки на карточке. Проставлено только в двух семьях:

| Семья | Карточки с primaryCtaLabel | Значение |
|---|---|---|
| `clinicsService` | card 1 (imidzhevoe-video-kliniki), card 3 (semka-interera-kabinetov) | `'Открыть услугу'` |
| `promoVideoService` | card 1 (promo-real-estate), card 4 (promo-avtobiznes), card 6 (promo-kliniki) | `'Открыть услугу'` |

**Проблема:** В остальных 8 семьях ни у одной карточки нет `primaryCtaLabel` — используется дефолт рендерера. Это означает, что в `clinicsService` и `promoVideoService` часть карточек с `primaryHref` говорит `'Открыть услугу'`, а часть без метки — говорит что-то другое (дефолт из `L2DirectionServices`).

**Это порождает неоднородный CTA в пределах одной семьи** — часть карточек имеет явную метку, часть — нет, хотя все имеют `primaryHref`.

### 4.2 Карточки с href, но без CTA-метки

Следующие карточки имеют `primaryHref`, но не имеют `primaryCtaLabel` — их CTA-текст зависит от дефолта рендерера:

- `clinicsService`: card 2, 4, 5, 6, 7 (5 из 7 карточек)
- `promoVideoService`: card 2, 3, 5 (3 из 7 карточек)
- Все остальные 8 семей полностью

**Рекомендация (не сейчас):** выбрать единую метку (`'Подробнее'` или `'Открыть услугу'`) и проставить её единообразно, либо убедиться, что дефолт рендерера выдаёт нужный текст для всех.

---

## 5. Price Inconsistency Findings

### 5.1 Одинаковый тип услуги — разные цены в разных семьях

#### 360° туры в семьях-нишах (vs tours360Service)

| Семья | Цена 360° тура | Ссылка |
|---|---|---|
| `hotelsService` | `360° · от 500 ₾` | /360-tour-hotels |
| `restaurantsService` | `360° · от 500 ₾` | /360-tour-restaurants |
| `tourismService` | `360° · от 500 ₾` | /360-tour-tourism |
| `clinicsService` | `360° · от 500 ₾` | /360-tour-clinics |
| `autoService` | `360° · от 500 ₾` | /360-tour-auto |
| **`businessService`** | **`360° · от 550 ₾`** | /360-tour-business |
| `tours360Service` (сам хаб) | `360° · от 300 ₾` | /360-tour-* |

**⚠️ Проблема 1:** `businessService` показывает 360° тур за `550 ₾`, все остальные — `500 ₾`. +50 ₾ без объяснения.

**⚠️ Проблема 2:** `tours360Service` сам указывает `от 300 ₾` на все свои карточки — это или стартовая цена за минимальный объект, или расхождение с нишевыми хабами (которые ставят 500 ₾). Пользователь, пришедший через `/360-tours-service`, увидит `от 300 ₾`, а через `/hotels-service` — `от 500 ₾`. Нужно единое объяснение или градация.

#### Short-form / Reels в семьях-нишах

| Семья | Цена Reels/Short-form |
|---|---|
| `hotelsService` | `Short-form · от 450 ₾` |
| **`restaurantsService`** | **`Short-form · от 350 ₾`** |
| `tourismService` | `Short-form · от 450 ₾` |
| `clinicsService` | `Reels · от 450 ₾` |
| `autoService` | `Reels · от 450 ₾` |

**⚠️ Проблема:** Рестораны — `350 ₾`, все остальные — `450 ₾`. Разница 100 ₾ без объяснения.

#### Brand Video / Cinematic (main promo-видео карточка)

| Семья | Цена | Category Label |
|---|---|---|
| `hotelsService` | `Cinematic · от 350 ₾` | Cinematic |
| **`restaurantsService`** | **`Brand Video · от 300 ₾`** | Brand Video |
| `clinicsService` | `Brand Video · от 350 ₾` | Brand Video |
| **`autoService`** | **`Brand Video · от 300 ₾`** | Brand Video |
| **`businessService`** | **`Brand Video · от 300 ₾`** | Brand Video |

**⚠️ Проблема:** Hotels и Clinics стартуют с `350 ₾`, Restaurants / Auto / Business — с `300 ₾`. Это может быть обоснованным (отели и клиники сложнее снимать), но разница должна быть объяснена или унифицирована.

### 5.2 Pricing Plans — несоответствие middle-tier

| Семья | Старт (план 1) | Средний (план 2, featured) | Премиум (план 3) |
|---|---|---|---|
| `hotelsService` | от 350 ₾ | от 650 ₾ | от 900 ₾ |
| `restaurantsService` | от 300 ₾ | от 550 ₾ | от 850 ₾ |
| `tourismService` | от 350 ₾ | от 650 ₾ | от 950 ₾ |
| `clinicsService` | от 350 ₾ | от 650 ₾ | от 950 ₾ |
| **`autoService`** | **от 300 ₾** | **от 600 ₾** | **от 900 ₾** |
| `businessService` | от 300 ₾ | от 650 ₾ | от 950 ₾ |
| `promoVideoService` | от 350 ₾ | от 650 ₾ | от 950 ₾ |
| `aiVisualizationService` | от 300 ₾ | от 650 ₾ | от 950 ₾ |
| `reelsService` | от 300 ₾ | от 550 ₾ | от 850 ₾ |
| `tours360Service` | от 300 ₾ | от 550 ₾ | от 850 ₾ |

**⚠️ Проблема:** `autoService` middle plan = `600 ₾` — нечётное значение. Все остальные — 550 или 650. Auto — единственный, кто стоит на этой "середине". Выглядит как случайная цифра.

### 5.3 Единый ценовой режим — резюме

Два режима существуют параллельно:
- **Фиксированная цена**: `от XXX ₾` — ниши (hotels, restaurants, etc.)
- **"По задаче"**: `по задаче` — формат (promoVideo, aiVisualization, reels 1–7)

Это **архитектурно правильно** — форматные хабы продают гибко, нишевые — конкретно. **Однако** нарушения возникают там, где формат смешивается внутри одной семьи (reels card 8, aiViz cards 8–9).

---

## 6. L3 Binding Inconsistency Findings

### 6.1 Карточки без primaryHref (незакреплённые)

| Семья | Card slug | Название | Тип услуги | Статус аналогов в других семьях |
|---|---|---|---|---|
| `restaurantsService` | ai-upakovka-menyu-opisaniy | AI-упаковка меню и описаний | AI Content | Hotels, Tourism, Clinics — все имеют AI href ✅ |
| `tourismService` | kontent-glemping-baza | Контент для глэмпинга / базы | Package | Уникальная карточка, L3 страницы нет ⚠️ |
| `autoService` | ai-upakovka-obyavleniy | AI-упаковка объявлений | AI Content | Hotels, Tourism, Clinics — все имеют AI href ✅ |
| `businessService` | imidzhevoe-video-biznesa | Имиджевое видео бизнеса | Brand Video | Все аналоги в нишах имеют promo-video href ✅ |
| `businessService` | kontent-sayta-reklamy | Контент для сайта и рекламы | Performance Pack | Нет прямого аналога с L3 |
| `businessService` | reels-shorts | Reels и Shorts | Short-form | Все аналоги в нишах имеют reels-promo href ✅ |
| `businessService` | semka-prostranstva-obekta | Съёмка пространства / объекта | Space Content | Нет прямого аналога с L3 |
| `businessService` | ai-upakovka-kontenta | AI-упаковка контента | AI Content | Hotels, Tourism, Clinics — все имеют AI href ✅ |
| `promoVideoService` | promo-video-biznes | Промо-видео для бизнеса | Promo Video | Все другие 6 promo карточек имеют href ✅ |
| `reelsService` | reels-nedvizhimost | Reels для недвижимости | Reels | Все другие 6 reels-ниш имеют href ✅ |
| `reelsService` | reels-biznes | Reels для бизнеса | Reels | Все другие reels-нишевые имеют href ✅ |

**Итого: 11 карточек без primaryHref, из них:**
- **5 — бизнес-семья целиком бесссылочная** (кроме 360-tour-business)
- **3 — AI Content карточки в нишах, где аналоги в других нишах ссылаются**
- **2 — reels-карточки для недвижимости и бизнеса**
- **1 — promo-video для бизнеса**

### 6.2 Неправильные/дублирующиеся hrefs

| Семья | Card slug | Текущий href | Проблема |
|---|---|---|---|
| `clinicsService` | kontent-esteticheskih-uslug (card 5) | `/promo-video/clinic-interior` | Дублирует href card 3 (semka-interera-kabinetov) — обе ссылают на ту же страницу |
| `clinicsService` | ai-upakovka-kontenta (card 6) | `/ai-content/hotel-ai-descriptions` | **Неверная семья** — ссылает на hotel AI страницу вместо клинической. Нет `/ai-content/clinic-ai-descriptions` |

### 6.3 Кросс-семейная согласованность drone-ссылок

Аэросъёмка присутствует в нескольких нишевых семьях:

| Семья | Drone card href | L3 страница |
|---|---|---|
| `hotelsService` | `/drone-hotels-tourism` | Совместная для отелей+туризма |
| `tourismService` | `/drone-hotels-tourism` | Та же страница ✅ |
| `restaurantsService` | `/drone-services/drone-restaurants` | Отдельная L3 |
| `autoService` | `/drone-services/drone-auto` | Отдельная L3 |

**Наблюдение (не ошибка):** Hotels и Tourism делят одну L3 страницу — это архитектурное решение. Restaurants и Auto имеют собственные L3. Нарушений нет, но стоит задокументировать, что `/drone-hotels-tourism` — намеренный shared L3.

### 6.4 businessService — критически недосвязанная семья

`businessService` — единственный хаб с **5 из 6 карточек без primaryHref**. При этом аналогичные услуги в нишевых хабах полностью подключены:

| Услуга | Статус в businessService | Аналог в нише |
|---|---|---|
| Имиджевое видео | ❌ нет href | hotelsService → `/promo-video/promo-hotel` |
| Reels и Shorts | ❌ нет href | hotelsService → `/reels-promo/reels-hotel` |
| AI-упаковка | ❌ нет href | hotelsService → `/ai-content/hotel-ai-descriptions` |
| 360° туры | ✅ `/360-tour-business` | tours360Service → `/360-tour-business` |
| Контент для сайта | ❌ нет href | нет прямого L3 |
| Съёмка пространства | ❌ нет href | нет прямого L3 |

---

## 7. Recommended Next Tiny Batch Only

Приоритет: **данные в `l2DirectionConfigs.ts` только**, без изменений компонентов.

### Batch A — Исправить неправильные hrefs (2 правки, критично)

| # | Семья | Card | Текущий href | Исправить на |
|---|---|---|---|---|
| A1 | `clinicsService` | ai-upakovka-kontenta | `/ai-content/hotel-ai-descriptions` | `/ai-content/tourism-ai-packaging` (ближайший существующий) или создать clinic-specific |
| A2 | `clinicsService` | kontent-esteticheskih-uslug | `/promo-video/clinic-interior` (дублирует card 3) | Найти уникальный L3 или убрать href до появления страницы |

### Batch B — Подключить AI Content карточки (3 правки, высокий приоритет)

| # | Семья | Card | Добавить href |
|---|---|---|---|
| B1 | `restaurantsService` | ai-upakovka-menyu-opisaniy | `/ai-content/tourism-ai-packaging` (ближайший) или задокументировать отсутствие L3 |
| B2 | `autoService` | ai-upakovka-obyavleniy | аналогично — нет прямой L3, зафиксировать |
| B3 | `businessService` | ai-upakovka-kontenta | `/ai-content/hotel-ai-descriptions` или `/ai-content/tourism-ai-packaging` |

### Batch C — businessService mass-linkage (5 правок, средний приоритет)

Карточки brand video, reels, контент для сайта, съёмка пространства — подключить к ближайшим существующим L3 или явно оставить без href с документированием до создания `/promo-video/promo-business`, `/reels-promo/reels-biznes`.

| # | Card | Кандидат href |
|---|---|---|
| C1 | imidzhevoe-video-biznesa | `/promo-video/promo-clinic` (структурно близко) — НЕТ, лучше без href до создания бизнес-L3 |
| C2 | reels-shorts | `/reels-promo/reels-realtor` (единственный доступный reels без ниши) — сомнительно |
| C3 | kontent-sayta-reklamy | нет подходящей L3 |
| C4 | semka-prostranstva-obekta | нет подходящей L3 |
| C5 | ai-upakovka-kontenta | → Batch B3 |

**Вывод по Batch C:** Лучше не добавлять неточные hrefs. Задокументировать: businessService требует создания 2–3 новых L3 страниц (`/promo-video/promo-business`, `/reels-promo/reels-business`).

### Batch D — Исправить ценовое несоответствие (3 правки, низкий приоритет сейчас)

| # | Проблема | Правка |
|---|---|---|
| D1 | `businessService` 360° карточка: `550 ₾` vs `500 ₾` везде | Изменить на `360° · от 500 ₾` |
| D2 | `restaurantsService` reels карточка: `350 ₾` vs `450 ₾` везде | Согласовать (поднять до 450 или задокументировать discount) |
| D3 | `autoService` pricing middle plan: `600 ₾` vs `550`/`650` у всех | Изменить на `550 ₾` или `650 ₾` |

---

## Полная таблица находок

| Area | Page/Family | Card/Service | Issue type | Current state | Recommendation |
|---|---|---|---|---|---|
| Card count | aiVisualizationService | cards 8–9 | Структура | 9 карточек, из них 2 — AI Content с фиксированной ценой, остальные 7 — "по задаче" | Вынести AI Content карточки в отдельный блок или унифицировать |
| Card count | reelsService | card 8 (reels-rieltor) | Структура | 8 карточек; card 8 с label "Пакет 6-12 роликов" — нестандартный category field | Унифицировать label до `Reels · от 650 ₾` |
| Card count | businessService | — | Структура | 6 карточек, ниша-хаб должна быть 7 | Добавить карточку или задокументировать сокращение |
| CTA | clinicsService | cards 2, 4, 5, 6, 7 | primaryCtaLabel | Нет явного label, хотя у cards 1, 3 — `Открыть услугу` | Проставить единый label на все карточки с href |
| CTA | promoVideoService | cards 2, 3, 5 | primaryCtaLabel | Нет явного label, хотя у cards 1, 4, 6 — `Открыть услугу` | Проставить единый label на все карточки с href |
| Price | businessService | 360° туры | Ценовое несоответствие | `360° · от 550 ₾` — на 50 ₾ дороже всех аналогов | Изменить на `360° · от 500 ₾` |
| Price | restaurantsService | Reels для соцсетей | Ценовое несоответствие | `Short-form · от 350 ₾` — на 100 ₾ дешевле аналогов | Согласовать с другими нишами (450 ₾) |
| Price | hotelsService | Видеотур | Потенциальное несоответствие | `Cinematic · от 350 ₾` vs рестораны/авто/бизнес `300 ₾` | Задокументировать как обоснованное или унифицировать |
| Price | autoService | Pricing plan 2 | Ценовое несоответствие | `от 600 ₾` — нечётное значение среди 550/650 у других | Изменить на `от 600 ₾` → `от 650 ₾` |
| Price | tours360Service vs ниши | Все 360 карточки | Расхождение хабов | 360 хаб: `от 300 ₾`; ниши (hotels/etc): `от 500 ₾` | Добавить объяснение разницы или унифицировать стартовую цену |
| L3 binding | clinicsService | ai-upakovka-kontenta | Неверный href | `/ai-content/hotel-ai-descriptions` (hotel!) | Исправить на clinic-specific или tourism AI |
| L3 binding | clinicsService | kontent-esteticheskih-uslug | Дублирующийся href | Дублирует href card 3 (`/promo-video/clinic-interior`) | Найти уникальный L3 или убрать href |
| L3 binding | restaurantsService | ai-upakovka-menyu-opisaniy | Пропущенный href | Нет primaryHref, аналоги в других семьях ссылаются | Подключить к существующему AI L3 |
| L3 binding | autoService | ai-upakovka-obyavleniy | Пропущенный href | Нет primaryHref, аналоги в других семьях ссылаются | Подключить к существующему AI L3 |
| L3 binding | tourismService | kontent-glemping-baza | Пропущенный href | Нет primaryHref, нет L3 страницы | Создать L3 или убрать карточку |
| L3 binding | businessService | 5 из 6 карточек | Пропущенные hrefs | Бизнес-хаб практически не связан с L3 | Создать бизнес-специфичные L3 страницы |
| L3 binding | promoVideoService | promo-video-biznes | Пропущенный href | Нет primaryHref, все другие 6 карточек связаны | Создать `/promo-video/promo-business` |
| L3 binding | reelsService | reels-nedvizhimost | Пропущенный href | Нет primaryHref, но `/reels-promo/promo-zhk-launch` существует | Подключить к `/reels-promo/promo-zhk-launch` |
| L3 binding | reelsService | reels-biznes | Пропущенный href | Нет primaryHref, нет reels-biznes L3 | Создать L3 или задокументировать |

---

## Appendix: Pricing Plan Matrix

| Семья | Старт | Featured | Премиум |
|---|---|---|---|
| hotelsService | от 350 ₾ | от 650 ₾ ★ | от 900 ₾ |
| restaurantsService | от 300 ₾ | от 550 ₾ ★ | от 850 ₾ |
| tourismService | от 350 ₾ | от 650 ₾ ★ | от 950 ₾ |
| clinicsService | от 350 ₾ | от 650 ₾ ★ | от 950 ₾ |
| autoService | от 300 ₾ | **от 600 ₾ ★** | от 900 ₾ |
| businessService | от 300 ₾ | от 650 ₾ ★ | от 950 ₾ |
| promoVideoService | от 350 ₾ | от 650 ₾ ★ | от 950 ₾ |
| aiVisualizationService | от 300 ₾ | от 650 ₾ ★ | от 950 ₾ |
| reelsService | от 300 ₾ | от 550 ₾ ★ | от 850 ₾ |
| tours360Service | от 300 ₾ | от 550 ₾ ★ | от 850 ₾ |

★ = featured plan (Популярно tag)
**Жирный** = выбивается из паттерна
