# L2 final consistency report

Дата: 2026-05-16  
Объём: активные L2 без `/drone-service` и без `/promo-video-service`  
Проверенные страницы:

- `/real-estate-service`
- `/hotels-service`
- `/restaurants-service`
- `/tourism-service`
- `/clinics-service`
- `/auto-service`
- `/ai-visualization-service`
- `/reels-service`
- `/360-tours-service`

## Итог

Активные L2 приведены к единому порядку и UX-логике: route-level metadata/schema, общий L2 renderer, page-specific CTA, related links, contact form с правильным предвыбором услуги, sticky CTA и mobile bottom bar.

Дополнительно `/360-tours-service` получил единый schema-паттерн `Service.hasOfferCatalog`, при этом существующие pricing `offers` сохранены.

Pricing card CTA активных L2 унифицированы с `/drone-service`: во всех карточках пакетов используется `Обсудить этот пакет →`.

`/promo-video-service` остаётся исключением и в этом проходе не редактировался.

## Матрица соответствия

| Страница | Структура L2 | Related links | Contact preselect | CTA mobile/desktop | Статус |
|---|---|---:|---|---|---|
| `/real-estate-service` | OK | 7/7 valid | `Недвижимость` | `Подобрать формат` | соответствует |
| `/hotels-service` | OK | 8/8 valid | `Отели` | `Обсудить отель` | соответствует |
| `/restaurants-service` | OK | 9/9 valid | `Рестораны` | `Обсудить ресторан` | соответствует |
| `/tourism-service` | OK | 8/8 valid | `Туризм` | `Обсудить тур` | соответствует |
| `/clinics-service` | OK | 9/9 valid | `Клиники` | `Обсудить клинику` | соответствует |
| `/auto-service` | OK | 8/8 valid | `Автобизнес` | `Обсудить авто-проект` | соответствует |
| `/ai-visualization-service` | OK | 7/7 valid | `AI-визуализация` | `Обсудить AI-визуализацию` | соответствует |
| `/reels-service` | OK | 7/7 valid | `Reels` | `Обсудить съёмку` | соответствует |
| `/360-tours-service` | OK | 8/8 valid | `360° тур` | `Обсудить объект` | соответствует |

## Проверка AI CTA

`/ai-visualization-service` проверен в production на mobile widths `360`, `375`, `390`.

Результат:

- кнопка `Обсудить AI-визуализацию` помещается в viewport;
- horizontal overflow отсутствует;
- `Обсудить AI-формат` в карточках не выходит за пределы экрана;
- mobile bottom bar с длинным CTA не ломает ширину страницы.

## Related links

Проверка внутренних ссылок показала, что все related links активных L2 ведут на существующие routes.

Follow-up 2026-05-16:

- `/auto-service` усилен до 8 related links: вместо слабых переходов добавлены профильные service routes для дрона, Reels, 360° тура и AI-визуала авто.
- `/360-tours-service` усилен до 8 related links: добавлены `360° тур для автосалонов` и `360° тур для бизнеса`.
- Browser route check подтвердил `200` для всех добавленных и затронутых ссылок.

## Contact preselect

Исправлено:

- `DroneContactStitch` теперь умеет резолвить `preselectedServices` не только по системному id, но и по точному видимому названию chip.
- Для `/auto-service` добавлен предвыбор `Автобизнес`.
- Для `/360-tours-service` добавлен предвыбор `360° тур`.
- Для `/restaurants-service`, `/tourism-service`, `/clinics-service`, `/ai-visualization-service` добавлены явные category chips, чтобы предвыбор был видимым и понятным.

Проверка в браузере подтвердила активный chip на всех 9 L2.

## Schema follow-up

`/360-tours-service` теперь соответствует общему L2-паттерну: в `Service` JSON-LD есть `hasOfferCatalog` по 6 видимым направлениям из блока услуг, а 3 pricing offers остались в той же schema.

## Pricing CTA follow-up

2026-05-16:

- pricing card CTA активных L2 приведены к эталону `/drone-service`: `Обсудить этот пакет →`;
- hero/sticky/mobile CTA не менялись, потому что они остаются page-specific;
- `/drone-service` и `/promo-video-service` не редактировались;
- browser spot-check подтвердил новый CTA на `/auto-service`, `/hotels-service` и `/reels-service`.

## Оставшиеся необязательные улучшения

- Решить, нужно ли включать `/business-service` в активный L2-набор. Сейчас он не входит в проверенный набор из бегущей строки.
