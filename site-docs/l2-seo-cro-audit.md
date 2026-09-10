# L2 SEO/schema + CTA/CRO audit

Дата: 2026-05-15  
Эталон: `/drone-service`  
Исключение: `/promo-video-service` не редактировался.

## Что проверялось

- Наличие route-level metadata: `title`, `description`, `canonical`, OpenGraph, Twitter.
- Наличие JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`; для `/drone-service` также `ItemList`.
- Отсутствие дублирования generic schema из `L2DirectionRenderer` там, где страница задаёт собственную schema.
- Связка FAQ schema с видимым FAQ.
- Внутренняя перелинковка от эталона к рабочим L2.
- CTA-цепочка: hero CTA, pricing CTA, sticky CTA, mobile bottom bar, contact CTA.

## Итог по страницам

| Страница | SEO/schema статус | CTA/CRO статус | Что сделано |
|---|---|---|---|
| `/drone-service` | Усилен | Усилен | Добавлен `FAQPage` schema из видимого FAQ; related links расширены на рабочие L2; promo link убран из related links. |
| `/real-estate-service` | Соответствует | Усилен | Twitter metadata дополнены `title`/`description`; sticky/mobile CTA теперь использует `Подобрать формат`. |
| `/hotels-service` | Соответствует | Усилен | Twitter metadata дополнены; sticky/mobile CTA теперь использует `Обсудить отель`. |
| `/restaurants-service` | Соответствует | Усилен | Twitter metadata дополнены; sticky/mobile CTA теперь использует `Обсудить ресторан`. |
| `/tourism-service` | Соответствует | Усилен | Twitter metadata дополнены; sticky/mobile CTA теперь использует `Обсудить тур`. |
| `/clinics-service` | Соответствует | Усилен | Twitter metadata дополнены; sticky/mobile CTA теперь использует `Обсудить клинику`. |
| `/auto-service` | Соответствует | Усилен | Sticky/mobile CTA теперь использует `Обсудить авто-проект`. |
| `/ai-visualization-service` | Соответствует | Усилен | Twitter metadata дополнены; schema description переведён на явный `pageDescription`; hero/sticky/mobile CTA заменён на `Обсудить AI-визуализацию`, внутренние CTA — на `Обсудить AI-формат` / `Подобрать AI-формат`. |
| `/reels-service` | Усилен | Усилен | Metadata переведены на общие constants; Service schema получила `hasOfferCatalog` и pricing `offers`; sticky/mobile CTA теперь использует `Обсудить съёмку`. |
| `/360-tours-service` | Усилен | Усилен | Sticky/mobile CTA теперь использует `Обсудить объект`; `Service` schema получила `hasOfferCatalog` по 6 направлениям, pricing offers сохранены. |
| `/promo-video-service` | Только контроль | Без правок | Остаётся исключением текущего цикла. |

Follow-up 2026-05-16: pricing card CTA активных L2 приведены к единому эталону `/drone-service` - `Обсудить этот пакет →`. Hero/sticky/mobile CTA остаются предметными для каждой страницы.

## Принятые решения

- FAQ schema должна строиться только из видимого FAQ, а не из скрытого или отдельного маркетингового списка.
- L2 route pages продолжают отключать generic renderer schema через `includeBaseJsonLd={false}`, чтобы не плодить дубли `Service` / `BreadcrumbList`.
- Sticky CTA и mobile bottom bar должны брать текст из `heroPrimaryCtaLabel`. Это делает CTA ближе к намерению страницы и не требует ручной правки каждого floating-компонента.
- `/promo-video-service` не включается в parity layer и не используется как рабочая L2 в этом цикле.

## Проверки

- `npx tsc --noEmit` — passed.
- Focused ESLint по затронутым L2/SEO/CTA файлам — passed with warnings only: старые unused constants в `constants/l2DirectionConfigs.ts`.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` — passed.
- Production check на `http://127.0.0.1:3210` через Playwright:
  - `/drone-service`: `Organization`, `Service`, `BreadcrumbList`, `FAQPage`, `ItemList`;
  - активные L2: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - `/reels-service`: `Service.hasOfferCatalog = true`, pricing `offers = 3`;
  - active L2 sticky/mobile CTA показывают page-specific labels;
  - `/promo-video-service` не редактировался.
- 2026-05-16 follow-up:
  - `/ai-visualization-service` проверен на `360 / 375 / 390`: CTA `Обсудить AI-визуализацию` без horizontal overflow;
  - все related links активных L2 ведут на существующие routes;
  - contact preselect проверен на 9 активных L2, все ожидаемые chips активны.
- 2026-05-16 schema follow-up:
  - `/360-tours-service`: `Service.hasOfferCatalog = true`, catalog items `6`, pricing `offers = 3`;
  - `npx tsc --noEmit` — passed;
  - `npx eslint app/360-tours-service/page.tsx` — passed;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` — passed.
- 2026-05-16 pricing CTA follow-up:
  - активные L2 pricing cards используют `Обсудить этот пакет →`, как `/drone-service`;
  - `npx tsc --noEmit` — passed;
  - `npx eslint constants/l2DirectionConfigs.ts` — passed;
  - `NEXT_PUBLIC_DEBUG_MODE=false npm run build` — passed;
  - browser spot-check: `/auto-service`, `/hotels-service`, `/reels-service`.

## Что можно сделать дальше

- Для `/drone-service` можно расширить видимый FAQ до 10-12 вопросов, но это уже отдельный copywriting-проход.
- Отдельно решить, нужно ли включать `/business-service` в активный L2-набор.
