# BREUS MEDIA — Coverage Gap Audit
### Дата: 1 апреля 2026
### Цель: идентификация карточек без канонических L3-страниц и классификация каждого пробела

---

## 1. Executive Summary

После завершения Card/Binding Consistency Batch A и Batch B (01.04.2026) в проекте остаётся **11 карточек без `primaryHref`** и **1 карточка с soft-mismatch href** (указывает на смежную, но не точную страницу).

**Общая картина:**

| Метрика | Значение |
|---|---|
| Всего L2-хабов с сервисными карточками | 10 |
| Всего карточек в конфигах | ~62 |
| Карточек с корректным primaryHref | ~50 |
| Карточек без primaryHref (hard gap) | 11 |
| Карточек с soft-mismatch href | 1 |
| Страниц L3, которые нужно создать (чёткие кандидаты) | 4 |
| Решений, требующих продуктового суждения | 5 |
| Карточек, которые можно оставить hub-only | 2 |

**Ключевой вывод:**
- `businessService` — критически недосвязанный хаб: 5 из 6 карточек без href
- `reelsService` и `promoVideoService` — каждый недостаёт 1 business-семейной страницы
- AI Content семья (2 страницы) — не покрывает restaurants / auto / clinics / business; нужно продуктовое решение об объёме
- Все остальные хабы (hotels, restaurants, tourism, clinics, auto) — каждый недостаёт ровно 1 карточки

---

## 2. Все карточки без primaryHref (11 штук)

| # | Хаб | Card slug | Заголовок карточки | Категория | Цена |
|---|---|---|---|---|---|
| 1 | restaurantsService | `ai-upakovka-menyu-opisaniy` | AI-упаковка меню и описаний | Copy · Digital · Localize | AI Content · от 300 ₾ |
| 2 | tourismService | `kontent-glemping-baza` | Контент для глэмпинга / базы | Проживание · Outdoor · Отдых | Package · от 500 ₾ |
| 3 | clinicsService | `kontent-esteticheskih-uslug` | Контент для эстетических услуг | Beauty · Skin · Dental · Wellness | Package · от 600 ₾ |
| 4 | autoService | `ai-upakovka-obyavleniy` | AI-упаковка объявлений | Тексты · Digital · Listings | AI Content · от 300 ₾ |
| 5 | businessService | `imidzhevoe-video-biznesa` | Имиджевое видео бизнеса | Бренд · Имидж · Коммерция | Promo · от 600 ₾ |
| 6 | businessService | `kontent-sayta-reklamy` | Контент для сайта и рекламы | Digital · Ads · Packaging | Package · от 400 ₾ |
| 7 | businessService | `reels-shorts` | Reels и Shorts | Reels · Shorts · Digital | Reels · от 400 ₾ |
| 8 | businessService | `semka-prostranstva-obekta` | Съёмка пространства / объекта | Interior · Commercial · Space | Shoot · от 500 ₾ |
| 9 | businessService | `ai-upakovka-kontenta` | AI-упаковка контента | Тексты · Digital · Listings | AI Content · от 300 ₾ |
| 10 | reelsService | `reels-biznes` | Reels для бизнеса | Бренд · Коммерция · Digital | Reels · от 400 ₾ |
| 11 | promoVideoService | `promo-video-biznes` | Промо-видео для бизнеса | Бренд · Коммерция · Digital | Promo · от 600 ₾ |

**Soft-mismatch (href присутствует, но указывает на смежную страницу):**

| # | Хаб | Card slug | Заголовок | Текущий href | Проблема |
|---|---|---|---|---|---|
| S1 | clinicsService | `ai-upakovka-kontenta` | AI-упаковка контента | `/ai-content/tourism-ai-packaging` | Tourism AI страница; нет clinic-specific AI L3 |

> `S1` зафиксирован в Batch A как «ближайший существующий вариант» до создания clinic-specific AI страницы.

---

## 3. Карточки, которые явно нуждаются в новых L3-страницах (`NEEDS_L3`)

Критерии: чёткий паттерн семьи, аналогичные страницы уже существуют, контент хорошо определён.

| Хаб | Card slug | Заголовок | Рекомендованный путь L3 | Обоснование |
|---|---|---|---|---|
| reelsService | `reels-biznes` | Reels для бизнеса | `/reels-promo/reels-business` | Семья Reels полная по всем нишам (`reels-clinic`, `reels-hotel`, `reels-auto`, `reels-tourism`, `reels-restaurant`, `reels-realtor`). Business — единственный пробел. |
| promoVideoService | `promo-video-biznes` | Промо-видео для бизнеса | `/promo-video/promo-business` | Семья Promo Video полная по всем нишам (`promo-clinic`, `promo-hotel`, `promo-car-dealer`, `promo-excursion`, `promo-restaurant`). Business — единственный пробел. |
| businessService | `imidzhevoe-video-biznesa` | Имиджевое видео бизнеса | `/promo-video/promo-business` | Когда `/promo-video/promo-business` будет создана, это поле получит href бесплатно. Это та же самая услуга. |
| businessService | `reels-shorts` | Reels и Shorts | `/reels-promo/reels-business` | Когда `/reels-promo/reels-business` будет создана, это поле получит href бесплатно. Та же услуга. |

> **Создание 2 страниц закрывает 4 карточки одновременно.** Это высокоэффективный следующий batch.

---

## 4. Карточки, которые можно оставить hub-only (`CAN_STAY_HUB_ONLY`)

Критерии: узкая ниша или вспомогательная услуга внутри хаба; отдельная L3-страница добавит мало ценности или дублирует существующий контент.

| Хаб | Card slug | Заголовок | Обоснование |
|---|---|---|---|
| tourismService | `kontent-glemping-baza` | Контент для глэмпинга / базы | Глэмпинг — суб-ниша туризма. Хаб `/tourism-service` уже охватывает travel-контент широко. Нишевая страница глэмпинга не имеет явного SEO-потенциала без доп. бизнес-решения. |
| clinicsService | `kontent-esteticheskih-uslug` | Контент для эстетических услуг | Beauty/wellness уже косвенно покрыты через `promo-clinic`, `promo-doctor`, `clinic-interior`. Отдельная L3 «эстетика» требует продуктового позиционирования, которого пока нет. |

---

## 5. Карточки, которые должны роутиться на существующий хаб (`SHOULD_LINK_TO_EXISTING_HUB`)

Критерии: услуга реальная, но нет и не планируется уникальная L3 страница; логичный альтернативный маршрут уже существует.

| Хаб | Card slug | Заголовок | Рекомендованный redirect | Обоснование |
|---|---|---|---|---|
| clinicsService | `ai-upakovka-kontenta` (soft-mismatch S1) | AI-упаковка контента | `/ai-content/tourism-ai-packaging` (временно) → `/ai-content/clinics-ai-content` (будущая) | До создания clinic-specific AI страницы — оставить текущий tourism fallback. После создания — переключить. |

---

## 6. Карточки, требующие продуктового решения (`NEEDS_MANUAL_PRODUCT_DECISION`)

Критерии: неясно, нужна ли самостоятельная L3 страница или это составная часть другой услуги; требует решения от продукта/клиента.

| Хаб | Card slug | Заголовок | Вопрос для продукта | Варианты |
|---|---|---|---|---|
| restaurantsService | `ai-upakovka-menyu-opisaniy` | AI-упаковка меню и описаний | Это отдельная AI Content услуга (семья `ai-content/`) или часть `/restaurants-service` hub? | A) Создать `/ai-content/restaurant-ai-content` (расширяет AI семью) B) Оставить hub-only C) Временно роутить на `/ai-content/hotel-ai-descriptions` как fallback |
| autoService | `ai-upakovka-obyavleniy` | AI-упаковка объявлений | Auto listings AI — нишевая услуга с потенциалом (auto → listing copy). Стоит ли отдельная страница? | A) Создать `/ai-content/auto-ai-listings` B) Оставить hub-only C) Роутить на `/auto-service` |
| businessService | `kontent-sayta-reklamy` | Контент для сайта и рекламы | «Content for website and ads» очень широко. Это стоит отдельной L3 или включается в `promo-business`? | A) Включить в `/promo-video/promo-business` описание B) Создать `/digital-content-business` (новый формат) C) Hub-only |
| businessService | `semka-prostranstva-obekta` | Съёмка пространства / объекта | Interior/commercial shooting — близко к реал-эстейт или к промо-видео? | A) Роутить на `/real-estate-service` B) Включить в promo-business C) Hub-only |
| businessService | `ai-upakovka-kontenta` | AI-упаковка контента | Business AI content — отдельная страница семьи `ai-content/` или hub-only? | A) Создать `/ai-content/business-ai-content` B) Hub-only до решения |

---

## 7. Рекомендованный следующий tiny batch

**Batch C — Business Family L3 (2 новые страницы, 4 карточки закрываются)**

Создать только эти два файла:

| Приоритет | Новая страница | Закрывает карточки |
|---|---|---|
| C1 | `/reels-promo/reels-business/page.tsx` | `reelsService.reels-biznes` + `businessService.reels-shorts` |
| C2 | `/promo-video/promo-business/page.tsx` | `promoVideoService.promo-video-biznes` + `businessService.imidzhevoe-video-biznesa` |

**После создания страниц:**
- Добавить `primaryHref: '/reels-promo/reels-business'` в `reelsService.reels-biznes` и `businessService.reels-shorts`
- Добавить `primaryHref: '/promo-video/promo-business'` в `promoVideoService.promo-video-biznes` и `businessService.imidzhevoe-video-biznesa`

**Что НЕ трогать в Batch C:**
- AI Content gaps (restaurantsService, autoService, businessService) — ждут продуктового решения
- `kontent-sayta-reklamy` и `semka-prostranstva-obekta` — ждут продуктового решения
- Soft-mismatch `clinicsService.ai-upakovka-kontenta` — оставить как есть до clinic AI L3

**Эффект Batch C:**
- 4 карточки из 11 получат href (36% gap reduction)
- `businessService` улучшается с 1/6 → 3/6 линкованных карточек
- `reelsService` и `promoVideoService` становятся 100% линкованными

---

## Appendix A — Полная карта линковки по хабам (post-Batch B)

### hotelsService (6/6 ✅)
Все 6 карточек имеют корректный `primaryHref`. Эталонная структура.

### restaurantsService (6/7)
| Card | Href | Статус |
|---|---|---|
| imidzhevoe-video-restorana | `/promo-video/promo-restaurant` | ✅ |
| reels-socseti | `/reels-promo/reels-restaurant` | ✅ |
| aerosemka-lokacii | `/drone-services/drone-restaurants` | ✅ |
| semka-interera-podachi | `/promo-video/restaurant-interior-food` | ✅ |
| kontent-paket-na-mesyac | `/reels-promo/restaurant-content-pack` | ✅ |
| ai-upakovka-menyu-opisaniy | — | ❌ NEEDS_MANUAL_PRODUCT_DECISION |
| tur-360-restoranov | `/360-tour-restaurants` | ✅ |

### tourismService (6/7)
| Card | Href | Статус |
|---|---|---|
| video-tura-marshruta | `/promo-video/promo-tourism-route` | ✅ |
| aerosemka-lokacii | `/drone-hotels-tourism` | ✅ |
| kontent-glemping-baza | — | ❌ CAN_STAY_HUB_ONLY |
| reels-turproekta | `/reels-promo/reels-tourism` | ✅ |
| promo-ekskursii-aktivnosti | `/promo-video/promo-excursion` | ✅ |
| ai-upakovka-predlozheniy | `/ai-content/tourism-ai-packaging` | ✅ |
| tur-360-turizma | `/360-tour-tourism` | ✅ |

### clinicsService (5/7)
| Card | Href | Статус |
|---|---|---|
| imidzhevoe-video-kliniki | `/promo-video/promo-clinic` | ✅ |
| video-vracha-napravleniya | `/promo-video/promo-doctor` | ✅ |
| semka-interera-kabinetov | `/promo-video/clinic-interior` | ✅ |
| reels-kliniki | `/reels-promo/reels-clinic` | ✅ |
| kontent-esteticheskih-uslug | — | ❌ CAN_STAY_HUB_ONLY |
| ai-upakovka-kontenta | `/ai-content/tourism-ai-packaging` | ⚠️ SHOULD_LINK_TO_EXISTING_HUB (soft-mismatch) |
| tur-360-klinik | `/360-tour-clinics` | ✅ |

### autoService (6/7)
| Card | Href | Статус |
|---|---|---|
| video-dilerskogo-centra | `/promo-video/promo-car-dealer` | ✅ |
| aerosemka-avtoploshadki | `/drone-services/drone-auto` | ✅ |
| reels-avtobiznesa | `/reels-promo/reels-auto` | ✅ |
| obzornyy-kontent-modelyam | `/promo-video/auto-model-review` | ✅ |
| kontent-servisa-deteylinga | `/promo-video/auto-service-detailing` | ✅ |
| ai-upakovka-obyavleniy | — | ❌ NEEDS_MANUAL_PRODUCT_DECISION |
| tur-360-avtobiznesa | `/360-tour-auto` | ✅ |

### businessService (1/6)
| Card | Href | Статус |
|---|---|---|
| imidzhevoe-video-biznesa | — | ❌ NEEDS_L3 → `/promo-video/promo-business` |
| kontent-sayta-reklamy | — | ❌ NEEDS_MANUAL_PRODUCT_DECISION |
| reels-shorts | — | ❌ NEEDS_L3 → `/reels-promo/reels-business` |
| tury-360 | `/360-tour-business` | ✅ |
| semka-prostranstva-obekta | — | ❌ NEEDS_MANUAL_PRODUCT_DECISION |
| ai-upakovka-kontenta | — | ❌ NEEDS_MANUAL_PRODUCT_DECISION |

### reelsService (7/8)
| Card | Href | Статус |
|---|---|---|
| reels-nedvizhimost | `/reels-promo/reels-real-estate` | ✅ |
| reels-oteli | `/reels-promo/reels-hotel` | ✅ |
| reels-restorany | `/reels-promo/reels-restaurant` | ✅ |
| reels-avtobiznes | `/reels-promo/reels-auto` | ✅ |
| reels-turizm | `/reels-promo/reels-tourism` | ✅ |
| reels-kliniki | `/reels-promo/reels-clinic` | ✅ |
| reels-biznes | — | ❌ NEEDS_L3 → `/reels-promo/reels-business` |
| reels-rieltor | `/reels-promo/reels-realtor` | ✅ |

### promoVideoService (6/7)
| Card | Href | Статус |
|---|---|---|
| promo-video-nedvizhimost | `/promo-video/promo-real-estate` | ✅ |
| promo-video-oteli | `/promo-video/promo-hotel` | ✅ |
| promo-video-restorany | `/promo-video/promo-restaurant` | ✅ |
| promo-video-avtobiznes | `/promo-video/promo-car-dealer` | ✅ |
| promo-video-turizm | `/promo-video/promo-excursion` | ✅ |
| promo-video-kliniki | `/promo-video/promo-clinic` | ✅ |
| promo-video-biznes | — | ❌ NEEDS_L3 → `/promo-video/promo-business` |

### tours360Service (7/7 ✅)
Все 7 карточек имеют корректный `primaryHref`. Эталонная структура.

### aiVisualizationService (проверяется отдельно)
> Карточки `aiVisualizationService` ведут на `/ai-visual/ai-*` страницы — семья из 7 страниц, все существуют. Пробелов не обнаружено.

---

## Appendix B — Существующий L3 landscape (для справки)

### Семьи, закрытые на 100%:
- `360-tour-*`: 8 страниц (auto, business, clinics, commercial-real-estate, hotels, real-estate, restaurants, tourism)
- `ai-visual/ai-*`: 7 страниц (ai-auto, ai-brand, ai-interior, ai-menu-delivery, ai-product, ai-real-estate, ai-staging)
- `drone-services/drone-*`: 12 страниц

### Семьи с пробелами:
- `reels-promo/reels-*`: 9 страниц — **нет `reels-business`**
- `promo-video/promo-*`: 13 страниц — **нет `promo-business`**
- `ai-content/`: 2 страницы (hotel, tourism) — **нет restaurant, auto, clinic, business**

---

*Документ сформирован: 01.04.2026*
*Предыдущие аудиты: `BREUS_MEDIA_CARD_AND_PRICING_CONSISTENCY_AUDIT.md`*
