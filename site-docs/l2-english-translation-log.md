# L2 English translation log

Дата старта: 2026-05-16  
Эталон EN: `/drone-service/en`  
Первый пилот: `/hotels-service/en`

## Правило перевода

- Переводим не дословно, а как English marketing copy.
- Сохраняем L2-архитектуру, порядок секций, CTA-логику и pricing structure.
- Для каждой EN-страницы сразу добавляем metadata, canonical, hreflang и JSON-LD на английском.
- Не создаём битые внутренние ссылки на будущие `/en`-страницы, пока эти страницы не существуют.
- `/promo-video-service` остаётся исключением, пока пользователь отдельно не разрешит работу с ним.

## Очередь

1. `/hotels-service/en` - completed.
2. `/real-estate-service/en` - completed.
3. `/360-tours-service/en` - completed.
4. `/reels-service/en` - completed.
5. `/ai-visualization-service/en` - completed.
6. `/restaurants-service/en` - completed.
7. `/tourism-service/en` - next recommended.
8. `/clinics-service/en`.
9. `/auto-service/en`.

## 2026-05-16 - Pilot `/hotels-service/en`

Статус: completed

Сделано:

- Создан route `app/hotels-service/en/page.tsx`.
- Создан английский L2-конфиг `constants/l2DirectionConfigs.en.ts` для hotels.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - deliverables;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- В `L2DirectionRenderer` добавлена поддержка:
  - `initialLang`;
  - `languageLinks`;
  - английского footer;
  - английского contact через `DroneContactStitch`.
- В `L2DirectionMobileServicesList` добавлена EN-локализация mobile labels.
- В `DroneFooterStitchEn` временно убраны ссылки на будущие EN-routes, которых ещё нет, чтобы не создавать 404.
- На русской `/hotels-service` добавлен hreflang на `/hotels-service/en`.

Проверка:

- `npx tsc --noEmit` - passed.
- Focused ESLint по затронутым файлам - passed with existing `next/no-img-element` warnings only.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/hotels-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/hotels-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - pricing CTA count: 4 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/real-estate-service/en` по той же схеме.

## 2026-05-16 - `/real-estate-service/en`

Статус: completed

Сделано:

- Создан route `app/real-estate-service/en/page.tsx`.
- В `constants/l2DirectionConfigs.en.ts` добавлен `realEstateServiceEnConfig`.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - earn/lose;
  - deliverables;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- На русской `/real-estate-service` добавлен hreflang на `/real-estate-service/en`.
- EN related links оставлены только на существующие routes, чтобы не создавать 404 на будущие EN-страницы.

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/real-estate-service/en/page.tsx app/real-estate-service/page.tsx constants/l2DirectionConfigs.en.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/real-estate-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/real-estate-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - pricing CTA count: 4 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/360-tours-service/en` по той же схеме.

## 2026-05-16 - `/360-tours-service/en`

Статус: completed

Сделано:

- Создан route `app/360-tours-service/en/page.tsx`.
- В `constants/l2DirectionConfigs.en.ts` добавлен `tours360ServiceEnConfig`.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- На русской `/360-tours-service` добавлен hreflang на `/360-tours-service/en`.
- EN related links ведут только на существующие routes, чтобы не создавать 404 на будущие EN-страницы.
- EN Service JSON-LD сохраняет parity со страницей: 6 `hasOfferCatalog` items и 3 pricing `offers`.

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/360-tours-service/en/page.tsx app/360-tours-service/page.tsx constants/l2DirectionConfigs.en.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/360-tours-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/360-tours-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - Service schema: 6 catalog items, 3 pricing offers;
  - pricing CTA count: 3 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/reels-service/en` по той же схеме.

## 2026-05-16 - `/reels-service/en`

Статус: completed

Сделано:

- Создан route `app/reels-service/en/page.tsx`.
- В `constants/l2DirectionConfigs.en.ts` добавлен `reelsServiceEnConfig`.
- Сохранена механика `cards=soft/aggressive` из русской страницы.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - deliverables;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- На русской `/reels-service` добавлен hreflang на `/reels-service/en`.
- EN related links ведут только на существующие routes, чтобы не создавать 404 на будущие EN-страницы.
- EN Service JSON-LD сохраняет parity со страницей: 8 `hasOfferCatalog` items и 3 pricing `offers`.

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/reels-service/en/page.tsx app/reels-service/page.tsx constants/l2DirectionConfigs.en.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/reels-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/reels-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - Service schema: 8 catalog items, 3 pricing offers;
  - pricing CTA count: 3 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/ai-visualization-service/en` по той же схеме.

## 2026-05-16 - `/ai-visualization-service/en`

Статус: completed

Сделано:

- Создан route `app/ai-visualization-service/en/page.tsx`.
- В `constants/l2DirectionConfigs.en.ts` добавлен `aiVisualizationServiceEnConfig`.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - earn/lose;
  - deliverables;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- На русской `/ai-visualization-service` добавлен hreflang на `/ai-visualization-service/en`.
- EN related links ведут только на существующие routes, чтобы не создавать 404 на будущие EN-страницы.
- EN Service JSON-LD расширен до parity со страницей: 8 `hasOfferCatalog` items и 4 pricing `offers`.

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/ai-visualization-service/en/page.tsx app/ai-visualization-service/page.tsx constants/l2DirectionConfigs.en.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/ai-visualization-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/ai-visualization-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - Service schema: 8 catalog items, 4 pricing offers;
  - pricing CTA count: 4 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/restaurants-service/en` по той же схеме.

## 2026-05-16 - `/restaurants-service/en`

Статус: completed

Сделано:

- Создан route `app/restaurants-service/en/page.tsx`.
- В `constants/l2DirectionConfigs.en.ts` добавлен `restaurantsServiceEnConfig`.
- Переведены и адаптированы:
  - hero;
  - hero cards;
  - services;
  - stats;
  - mid CTA;
  - explanatory blocks;
  - pain/solution;
  - earn/lose;
  - deliverables;
  - why us;
  - pricing;
  - pricing add-ons;
  - process;
  - conditions note;
  - FAQ;
  - related links;
  - contact.
- На русской `/restaurants-service` добавлен hreflang на `/restaurants-service/en`.
- EN related links ведут только на существующие routes, чтобы не создавать 404 на будущие EN-страницы.
- EN Service JSON-LD расширен до parity со страницей: 8 `hasOfferCatalog` items и 4 pricing `offers`.

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/restaurants-service/en/page.tsx app/restaurants-service/page.tsx constants/l2DirectionConfigs.en.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser check `http://localhost:3200/restaurants-service/en`:
  - route loads;
  - title/H1 на английском;
  - canonical `https://breus.media/restaurants-service/en`;
  - alternate links `ru` и `en` присутствуют;
  - JSON-LD types: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - Service schema: 8 catalog items, 4 pricing offers;
  - pricing CTA count: 4 `Discuss this package →`;
  - на mobile `390px` нет horizontal overflow;
  - кириллица в видимом тексте отсутствует;
  - внутренние ссылки страницы возвращают `200`.

Следующий шаг:

- Перевести `/tourism-service/en` по той же схеме.
