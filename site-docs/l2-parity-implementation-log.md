# L2 parity implementation log

Дата старта: 2026-05-12  
Эталон: `/drone-service`  
Аудит-основание: `site-docs/l2-drone-service-parity-audit.md`

## Правило работы

Все L2-правки делаются поэтапно. После каждого этапа этот документ обновляется:

- что было сделано;
- какие страницы затронуты;
- какие файлы изменены;
- что проверено;
- что осталось;
- какие решения приняты по структуре.

## Жёсткое исключение

`/promo-video-service` пока не трогаем.

Причина: страницу пока не будем использовать. Любые общие компоненты должны быть внедрены так, чтобы не менять поведение `/promo-video-service`, либо для этой страницы должен быть явный opt-out.

## Целевая L2-цепочка

Целевая архитектура после приведения к `/drone-service`:

1. SEO + schema.
2. `SmartHeader`.
3. Hero.
4. Mobile services list.
5. Services/catalog.
6. Evidence/statistics.
7. Mid CTA.
8. Tasks / pains / use cases.
9. Why us.
10. Pricing.
11. Pricing add-ons, если применимо.
12. Process.
13. Conditions note.
14. FAQ.
15. Related links.
16. Contact.
17. Sticky CTA.
18. Mobile bottom bar.
19. Footer.

## Очередь внедрения

### Phase 1 - общий L2 parity layer

Статус: completed

Цель: добавить общие элементы, которые нужны почти всем L2.

План:

- [x] Добавить универсальный mobile services list для L2.
- [x] Добавить поддержку sticky CTA в `L2DirectionRenderer`.
- [x] Добавить поддержку mobile bottom bar в `L2DirectionRenderer`.
- [x] Добавить `conditionsNote` в типы и рендерер.
- [x] Обеспечить opt-out для `/promo-video-service`.
- [x] Проверить, что `/promo-video-service` визуально и структурно не меняется.

### Phase 2 - пилот `/auto-service`

Статус: completed

Цель: привести самую слабую используемую L2 к новой архитектуре.

План:

- [x] Добавить hero cards.
- [x] Добавить lead-параграфы.
- [x] Задать богатый `sectionOrder`.
- [x] Добавить `painSolutions`.
- [x] Добавить `deliverables`.
- [x] Добавить `whyUs`.
- [x] Расширить FAQ.
- [x] Добавить pricing add-ons.
- [x] Добавить conditions note.
- [x] Проверить desktop/mobile на `http://localhost:3200/auto-service`.

### Phase 3 - выравнивание сильных L2

Статус: completed

Страницы:

- [x] `/real-estate-service`
- [x] `/hotels-service`
- [x] `/restaurants-service`
- [x] `/tourism-service`
- [x] `/clinics-service`
- [x] `/ai-visualization-service`
- [x] `/reels-service`
- [x] `/360-tours-service`

План:

- [x] Добавить conditions note на каждую страницу.
- [x] Добавить trust badges там, где их нет.
- [x] Добавить pricing add-ons там, где логично.
- [x] Выравнивать порядок секций только там, где это улучшает сходство с `/drone-service`.
- [x] Проверить desktop/mobile каждую страницу.

### Phase 4 - улучшение самого эталона

Статус: completed for SEO/CRO baseline

План:

- [x] Добавить FAQ schema на `/drone-service`.
- [x] Расширить related links на `/drone-service`.
- [ ] Рассмотреть расширение FAQ до 10-12.

Решение:

- FAQ до 10-12 вопросов пока не расширялся: для этого нужен отдельный copywriting-проход, чтобы не добавлять вопросы ради количества.

### Phase 5 - SEO/schema + CTA/CRO audit

Статус: completed

План:

- [x] Проверить metadata и schema на активных L2.
- [x] Проверить, что route-level schema не дублируется generic renderer schema.
- [x] Проверить CTA-цепочку: hero, pricing, sticky CTA, mobile bottom bar, contact.
- [x] Усилить слабые места без изменения `/promo-video-service`.
- [x] Создать отдельный аудит `site-docs/l2-seo-cro-audit.md`.

### Phase 6 - AI CTA polish

Статус: completed

План:

- [x] Заменить общий CTA `/ai-visualization-service` с `Обсудить задачу` на предметную формулировку.
- [x] Сохранить структуру страницы без изменений.
- [x] Обновить audit/log/history.

### Phase 7 - L2 related links, visual CTA, contact preselect, final report

Статус: completed

План:

- [x] Проверить AI CTA на mobile `360 / 375 / 390`.
- [x] Проверить related links активных L2.
- [x] Проверить и поправить contact-form preselected services.
- [x] Создать финальный consistency report.

### Phase 8 - `/360-tours-service` schema unification

Статус: completed

План:

- [x] Добавить `hasOfferCatalog` в `Service` JSON-LD `/360-tours-service`.
- [x] Сохранить существующие pricing `offers`.
- [x] Не менять визуальную структуру страницы.
- [x] Не трогать `/drone-service` и `/promo-video-service`.
- [x] Обновить audit/log/history.

### Phase 9 - ticker hover preview stuck overlay fix

Статус: completed

План:

- [x] Воспроизвести зависание cinematic preview после клика по `AI Content`.
- [x] Сбросить hover-preview при клике по ticker-ссылке и смене route.
- [x] Добавить закрытие preview кликом по затемнению.
- [x] Проверить `/drone-service` -> `AI Content` -> `/ai-visualization-service`.

### Phase 10 - related links enrichment for `/auto-service` and `/360-tours-service`

Статус: completed

План:

- [x] Усилить `/auto-service` до 8 профильных related links.
- [x] Усилить `/360-tours-service` до 8 related links.
- [x] Проверить, что добавленные routes существуют и отдают `200`.
- [x] Обновить final consistency report и историю работ.

### Phase 11 - pricing CTA standardization

Статус: completed

План:

- [x] Оставить pricing card CTA как на `/drone-service`: `Обсудить этот пакет →`.
- [x] Применить единый CTA на активных L2 из бегущей строки.
- [x] Не менять `/drone-service` и `/promo-video-service`.
- [x] Не менять hero/sticky/mobile CTA, потому что они остаются page-specific.
- [x] Обновить final consistency report и историю работ.

## Журнал изменений

### 2026-05-12 - старт процесса

Статус: completed

Сделано:

- Создан этот implementation log.
- Зафиксировано правило: `/promo-video-service` не трогаем.
- Зафиксирована очередность: сначала общий слой, затем пилот `/auto-service`, затем остальные L2.

Изменённые файлы:

- `site-docs/l2-parity-implementation-log.md`

Проверка:

- Код приложения не менялся.
- Dev-сервер уже поднят на `http://localhost:3200`.

Следующий шаг:

- Начать Phase 1: общий L2 parity layer с opt-out для `/promo-video-service`.

### 2026-05-15 - Phase 5 SEO/schema + CTA/CRO audit

Статус: completed

Сделано:

- Создан отдельный аудит `site-docs/l2-seo-cro-audit.md`.
- Для `/drone-service` добавлен `FAQPage` JSON-LD из видимого FAQ.
- FAQ-данные `/drone-service` вынесены в `components/drone/droneFaqData.ts`, чтобы страница и компонент FAQ использовали один источник.
- Related links `/drone-service` расширены на рабочие L2:
  - `/real-estate-service`;
  - `/hotels-service`;
  - `/restaurants-service`;
  - `/tourism-service`;
  - `/clinics-service`;
  - `/auto-service`.
- `/reels-service` Service schema усилена через `hasOfferCatalog` и pricing `offers`.
- На `/real-estate-service`, `/hotels-service`, `/restaurants-service`, `/tourism-service`, `/clinics-service`, `/ai-visualization-service` добавлены явные `twitter.title` и `twitter.description`.
- В `components/l2-direction/L2DirectionRenderer.tsx` sticky CTA и mobile bottom bar теперь берут label из `heroPrimaryCtaLabel`, а не используют везде одинаковое `Обсудить задачу`.
- `/promo-video-service` не редактировался.

Изменённые файлы:

- `site-docs/l2-seo-cro-audit.md`
- `site-docs/l2-parity-implementation-log.md`
- `components/drone/droneFaqData.ts`
- `components/drone/DroneFAQExpanded.tsx`
- `app/drone-service/page.tsx`
- `constants/droneDirectionPages.ts`
- `components/l2-direction/L2DirectionRenderer.tsx`
- `app/real-estate-service/page.tsx`
- `app/hotels-service/page.tsx`
- `app/restaurants-service/page.tsx`
- `app/tourism-service/page.tsx`
- `app/clinics-service/page.tsx`
- `app/ai-visualization-service/page.tsx`
- `app/reels-service/page.tsx`

Проверка:

- `npx tsc --noEmit` - passed.
- Focused eslint по затронутым L2/SEO/CTA файлам - passed with warnings only: старые unused constants в `constants/l2DirectionConfigs.ts`.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Production check на `http://127.0.0.1:3210` через Playwright:
  - `/drone-service` отдаёт `Organization`, `Service`, `BreadcrumbList`, `FAQPage`, `ItemList`;
  - активные L2 отдают `Organization`, `Service`, `FAQPage`, `BreadcrumbList`;
  - `/reels-service` имеет `Service.hasOfferCatalog = true` и 3 pricing offers;
  - sticky/mobile CTA на активных L2 используют page-specific labels.

Следующий шаг:

- Решить, делать ли точечный copywriting-проход: заменить CTA `/ai-visualization-service` с `Обсудить задачу` на более предметный и расширить FAQ `/drone-service` до 10-12 вопросов.

### 2026-05-16 - Phase 6 AI CTA polish

Статус: completed

Сделано:

- В `/ai-visualization-service` основной hero/sticky/mobile CTA заменён с `Обсудить задачу` на `Обсудить AI-визуализацию`.
- CTA в hero cards и service cards AI-блока заменены на `Обсудить AI-формат`.
- Mid CTA button заменён на `Подобрать AI-формат`.
- Структура секций, schema и `/promo-video-service` не менялись.
- `site-docs/l2-seo-cro-audit.md` обновлён: `/ai-visualization-service` теперь имеет CTA/CRO статус `Усилен`.

Изменённые файлы:

- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-seo-cro-audit.md`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint constants/l2DirectionConfigs.ts` - passed with warnings only: старые unused constants.

Следующий шаг:

- Пункт 2 из списка: расширить видимый FAQ `/drone-service` до 10-12 вопросов.

### 2026-05-16 - Phase 7 L2 consistency pass без `/drone-service`

Статус: completed

Сделано:

- Создан `site-docs/l2-final-consistency-report.md`.
- Проверен длинный CTA `/ai-visualization-service` на production mobile widths `360`, `375`, `390`.
- Подтверждено отсутствие horizontal overflow для `Обсудить AI-визуализацию` и `Обсудить AI-формат`.
- Проверены related links активных L2: все ссылки ведут на существующие routes.
- В `components/drone/DroneContactStitch.tsx` улучшен resolver `preselectedServices`: теперь он работает не только по системному id, но и по видимому названию chip.
- В `constants/l2DirectionConfigs.ts` добавлены/уточнены contact chips и предвыборы:
  - `/restaurants-service` -> `Рестораны`;
  - `/tourism-service` -> `Туризм`;
  - `/clinics-service` -> `Клиники`;
  - `/auto-service` -> `Автобизнес`;
  - `/ai-visualization-service` -> `AI-визуализация`;
  - `/360-tours-service` -> `360° тур`.
- Browser check подтвердил активный preselected chip на всех 9 активных L2.
- `/promo-video-service` не редактировался.

Изменённые файлы:

- `components/drone/DroneContactStitch.tsx`
- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-final-consistency-report.md`
- `site-docs/l2-seo-cro-audit.md`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint components/drone/DroneContactStitch.tsx constants/l2DirectionConfigs.ts` - passed with warnings only: старые unused constants.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser production check на `http://127.0.0.1:3210` - passed.

Следующий шаг без `/drone-service`:

- Унифицировать schema style `/360-tours-service` через `hasOfferCatalog`, либо расширить related links `/auto-service` и `/360-tours-service` до 7-8 ссылок.

### 2026-05-16 - Phase 8 `/360-tours-service` schema unification

Статус: completed

Сделано:

- В `app/360-tours-service/page.tsx` в ручную `Service` JSON-LD добавлен `hasOfferCatalog`.
- `hasOfferCatalog.itemListElement` строится из `config.data.services`, то есть из тех же 6 направлений, которые видны на странице.
- Существующие 3 pricing `offers` сохранены внутри той же `Service` schema.
- Визуальная структура, текстовые блоки и CTA страницы не менялись.
- `/drone-service` и `/promo-video-service` не редактировались.

Изменённые файлы:

- `app/360-tours-service/page.tsx`
- `site-docs/l2-seo-cro-audit.md`
- `site-docs/l2-final-consistency-report.md`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/360-tours-service/page.tsx` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Runtime schema check: `/360-tours-service` имеет `Service.hasOfferCatalog = true`, 6 catalog items и 3 pricing offers.

Следующий шаг без `/drone-service`:

- Расширить related links `/auto-service` и `/360-tours-service` до 7-8 ссылок либо пройти copywriting-полировку микро-CTA в pricing cards.

### 2026-05-16 - Phase 9 ticker hover preview stuck overlay fix

Статус: completed

Сделано:

- Исправлено зависание cinematic preview из бегущей строки, когда после клика по `AI Content` на новой странице оставался overlay `AI CONTENT`.
- В `store/useHeroStore.ts` добавлен `dismissHoverPreview` с коротким suppression-window.
- В `components/gazeta/SmartHeader.tsx` hover-preview сбрасывается при смене pathname и при `pointerdown`/`click` по ticker link.
- В `components/gazeta/MarqueeSection.tsx` overlay получил закрытие кликом по затемнению.
- Контент, секционная структура и schema L2-страниц не менялись.

Изменённые файлы:

- `store/useHeroStore.ts`
- `components/gazeta/SmartHeader.tsx`
- `components/gazeta/MarqueeSection.tsx`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- Browser: `/drone-service` -> click `AI Content` в ticker -> `/ai-visualization-service`, зависший overlay отсутствует.
- Browser: открытый preview закрывается кликом по затемнению.
- `npx tsc --noEmit` - passed.
- `npx eslint store/useHeroStore.ts components/gazeta/SmartHeader.tsx components/gazeta/MarqueeSection.tsx` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.

Следующий шаг без `/drone-service`:

- Расширить related links `/auto-service` и `/360-tours-service` до 7-8 ссылок либо пройти copywriting-полировку микро-CTA в pricing cards.

### 2026-05-16 - Phase 10 related links enrichment

Статус: completed

Сделано:

- В `constants/l2DirectionConfigs.ts` related links `/auto-service` пересобраны в более профильный набор из 8 ссылок:
  - `/drone-service`;
  - `/drone-services/drone-auto`;
  - `/reels-service`;
  - `/reels-promo/reels-auto`;
  - `/360-tours-service`;
  - `/360-tour-auto`;
  - `/ai-visualization-service`;
  - `/ai-visual/ai-auto`.
- Из `/auto-service` убраны слабые related transitions на `#contact` и Gazeta-направление.
- В `/360-tours-service` добавлены 2 профильные ссылки:
  - `/360-tour-auto`;
  - `/360-tour-business`.
- Для `constants/l2DirectionConfigs.ts` убран лишний destructuring `gazetaDetailRoutes`, оставлен только используемый `droneService`.
- `site-docs/l2-final-consistency-report.md` обновлён: `/auto-service` и `/360-tours-service` теперь `8/8 valid`.

Изменённые файлы:

- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-final-consistency-report.md`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint constants/l2DirectionConfigs.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser route check на `localhost:3200` подтвердил `200` для всех добавленных и затронутых related links.

Следующий шаг без `/drone-service`:

- Пройти copywriting-полировку микро-CTA в pricing cards, если нужно сделать язык всех карточек ещё более единым.

### 2026-05-16 - Phase 11 pricing CTA standardization

Статус: completed

Сделано:

- В `constants/l2DirectionConfigs.ts` pricing card CTA активных L2 приведены к эталону `/drone-service`: `Обсудить этот пакет →`.
- Затронуты активные L2:
  - `/real-estate-service`;
  - `/hotels-service`;
  - `/restaurants-service`;
  - `/tourism-service`;
  - `/clinics-service`;
  - `/auto-service`;
  - `/ai-visualization-service`;
  - `/reels-service`;
  - `/360-tours-service`.
- Верхние hero CTA, sticky CTA и mobile bottom bar не менялись: они остаются предметными для каждой страницы.
- `/drone-service` и `/promo-video-service` не редактировались.
- `/business-service` не менялся, потому что он не входит в текущий активный L2-набор из бегущей строки.

Изменённые файлы:

- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-final-consistency-report.md`
- `site-docs/l2-seo-cro-audit.md`
- `site-docs/l2-parity-implementation-log.md`
- `CHANGELOG_ARCHIVE.md`
- `CONTEXT_NEXT_CHAT.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint constants/l2DirectionConfigs.ts` - passed.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Browser DOM spot-check:
  - `/hotels-service` - 4 кнопки `Обсудить этот пакет →`, старых pricing CTA нет;
  - `/reels-service` - 3 кнопки `Обсудить этот пакет →`, старых pricing CTA нет;
  - `/auto-service` - 4 кнопки `Обсудить этот пакет →`, старых pricing CTA нет.

Следующий шаг без `/drone-service`:

- Проверить, нужно ли включать `/business-service` в активный L2-набор. Если да, пройти его отдельным этапом; `/promo-video-service` остаётся исключением.

### 2026-05-12 - Phase 1 общий L2 parity layer

Статус: completed

Сделано:

- В `components/l2-direction/types.ts` добавлен тип `L2ConditionsNoteConfig`.
- В `L2SectionKey` добавлен ключ `conditionsNote`.
- В `L2DirectionDataConfig` добавлено поле `conditionsNote`.
- В `components/l2-direction/L2DirectionSections.tsx` добавлен универсальный `L2DirectionMobileServicesList`.
- В `components/l2-direction/L2DirectionSections.tsx` добавлен `L2DirectionConditionsNote`.
- В обычную L2 contact-форму добавлен `id="contact-form"`, чтобы mobile bottom bar мог скрываться у формы.
- В `components/l2-direction/L2DirectionRenderer.tsx` подключены:
  - `L2DirectionMobileServicesList`;
  - `DroneStickyCta`;
  - `MobileBottomBar`;
  - `conditionsNote` case в renderer.
- Добавлен `L2_PARITY_LAYER_SCHEMA_KEYS`, куда входят используемые L2:
  - `/360-tours-service`;
  - `/ai-visualization-service`;
  - `/auto-service`;
  - `/clinics-service`;
  - `/hotels-service`;
  - `/real-estate-service`;
  - `/reels-service`;
  - `/restaurants-service`;
  - `/tourism-service`.
- `/promo-video-service` не включён в parity layer и визуально не получает mobile list / sticky CTA / mobile bottom bar.

Изменённые файлы:

- `components/l2-direction/types.ts`
- `components/l2-direction/L2DirectionSections.tsx`
- `components/l2-direction/L2DirectionRenderer.tsx`
- `site-docs/l2-parity-implementation-log.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint components/l2-direction/L2DirectionRenderer.tsx components/l2-direction/L2DirectionSections.tsx components/l2-direction/types.ts` - passed with 3 existing `next/no-img-element` warnings in `L2DirectionSections.tsx`.
- `npm run lint` for the whole repo - failed on existing unrelated generated `.claude/worktrees/.next` files and older component issues; this is not caused by Phase 1.
- `curl -I http://localhost:3200/auto-service` - 200 OK.
- Browser check `http://localhost:3200/auto-service` - no console warnings/errors from the page.
- Browser snapshot confirmed mobile services list on `/auto-service`.
- Browser snapshot confirmed `/promo-video-service` has no new parity mobile list / sticky CTA / mobile bottom bar.

Следующий шаг:

- Начать Phase 2: пилотная переработка `/auto-service`.

### 2026-05-12 - Phase 2 пилот `/auto-service`

Статус: completed

Сделано:

- `/auto-service` переведён из короткого L2-шаблона в полноценную L2-структуру.
- Добавлено 6 hero cards:
  - видео дилерского центра;
  - аэросъёмка площадки;
  - Reels для авто;
  - обзор модели;
  - сервис / детейлинг;
  - AI-упаковка.
- Добавлено 3 hero lead-параграфа.
- Добавлен явный `sectionOrder`:
  - `marquee`;
  - `services`;
  - `socialProof`;
  - `midCta`;
  - `whatIsTour`;
  - `painSolutions`;
  - `earnLose`;
  - `deliverables`;
  - `whyUs`;
  - `pricing`;
  - `pricingAddOns`;
  - `process`;
  - `conditionsNote`;
  - `faq`;
  - `relatedLinks`;
  - `contact`.
- Добавлены `marqueeItems`.
- Усилен services-блок: обновлены описания аэросъёмки, Reels и AI-упаковки.
- Добавлен `midCta`.
- Добавлен блок `whatIsTour` с объяснением, что получает автобизнес.
- Добавлено 6 `painSolutions`.
- Добавлен `earnLose`.
- Добавлено 10 deliverables.
- Добавлено 6 why-us карточек.
- Pricing расширен с 3 до 4 пакетов.
- Добавлено 6 pricing add-ons.
- Добавлен `conditionsNote` по подготовке автообъекта к съёмке.
- FAQ расширен с 5 до 12 вопросов.
- Related links расширены с 5 до 8.
- Включён `useDroneContact: true`.
- В `app/auto-service/page.tsx` добавлены ручные JSON-LD schema:
  - `Service`;
  - `FAQPage`;
  - `BreadcrumbList`;
  - `OfferCatalog` через `hasOfferCatalog`.
- `L2DirectionRenderer` для `/auto-service` теперь вызывается с `includeBaseJsonLd={false}`, чтобы не дублировать schema.

Метрики после правки:

- services: 7;
- heroCards: 6;
- lead paragraphs: 3;
- sectionOrder: 16 секций;
- painSolutions: 6;
- deliverables: 10;
- whyUs: 6;
- pricing plans: 4;
- pricing add-ons: 6;
- conditionsNote: yes;
- FAQ: 12;
- related links: 8;
- useDroneContact: yes.

Изменённые файлы:

- `constants/l2DirectionConfigs.ts`
- `app/auto-service/page.tsx`
- `site-docs/l2-parity-implementation-log.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint app/auto-service/page.tsx constants/l2DirectionConfigs.ts components/l2-direction/L2DirectionRenderer.tsx components/l2-direction/L2DirectionSections.tsx components/l2-direction/types.ts` - passed with warnings only:
  - existing `next/no-img-element` warnings in `L2DirectionSections.tsx`;
  - existing unused destructured route constants in `constants/l2DirectionConfigs.ts`.
- `curl -I http://localhost:3200/auto-service` - 200 OK.
- Browser check `http://localhost:3200/auto-service` - no console warnings/errors from the page.
- Browser snapshot confirmed expanded page length and new section chain.

Promo status:

- `/promo-video-service` не редактировался как страница.
- `promoVideoService` config не менялся.
- Общий parity layer по-прежнему исключает `promo-video-service`.

Следующий шаг:

- Начать Phase 3 с сильных L2: добавить `conditionsNote`, trust/add-ons где нужно и точечно выровнять порядок секций.

### 2026-05-15 - Phase 3 выравнивание сильных L2

Статус: completed

Сделано:

- Во всех сильных L2 добавлены `conditionsNote`:
  - `/real-estate-service`;
  - `/hotels-service`;
  - `/restaurants-service`;
  - `/tourism-service`;
  - `/clinics-service`;
  - `/ai-visualization-service`;
  - `/reels-service`;
  - `/360-tours-service`.
- Заполнены пустые `trustBadges` там, где они отсутствовали:
  - hotels;
  - tourism;
  - clinics;
  - real estate;
  - AI visualization;
  - Reels;
  - 360 tours.
- Добавлены `pricingAddOns` там, где они были нужны для структурного сходства с `/drone-service`:
  - hotels;
  - restaurants;
  - tourism;
  - real estate.
- Включены существующие `pricingAddOns` в `sectionOrder` там, где данные уже были, но секция не попадала в порядок страницы:
  - clinics;
  - AI visualization.
- Выровнен порядок секций для `/reels-service` и `/360-tours-service` ближе к эталонной цепочке:
  - content blocks перед pricing;
  - `whyUs` перед pricing;
  - `pricingAddOns` после pricing;
  - `conditionsNote` после process и перед FAQ.
- `/promo-video-service` не редактировался и остаётся исключением.

Изменённые файлы:

- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-parity-implementation-log.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint constants/l2DirectionConfigs.ts components/l2-direction/L2DirectionRenderer.tsx components/l2-direction/L2DirectionSections.tsx components/l2-direction/types.ts` - passed with warnings only:
  - existing `next/no-img-element` warnings in `L2DirectionSections.tsx`;
  - existing unused route constants in `constants/l2DirectionConfigs.ts`.
- Dev-server поднят на `http://localhost:3200`.
- HTTP HEAD checks:
  - `/real-estate-service` - 200;
  - `/hotels-service` - 200;
  - `/restaurants-service` - 200;
  - `/tourism-service` - 200;
  - `/clinics-service` - 200;
  - `/ai-visualization-service` - 200;
  - `/reels-service` - 200;
  - `/360-tours-service` - 200;
  - `/promo-video-service` - 200.
- Playwright desktop DOM sweep:
  - все 8 сильных L2 открылись на desktop viewport;
  - новый `conditionsNote` найден на каждой странице;
  - console errors - 0.
- Playwright mobile DOM sweep:
  - viewport `390x844`;
  - новый `conditionsNote` найден на каждой странице;
  - console errors - 0.

Что осталось:

- Обновить `CHANGELOG_ARCHIVE.md` и `CONTEXT_NEXT_CHAT.md`.
- Следующий этап: Phase 4, улучшение самого эталона `/drone-service`.

### 2026-05-15 - Вариант 1 визуальная полировка L2

Статус: completed

Цель:

- Проверить активные L2 после структурных правок на mobile `360 / 375 / 390` и desktop.
- Найти длинные заголовки, плотные hero, странные переносы и перегруз от новых секций.

Проверенные страницы:

- `/real-estate-service`;
- `/hotels-service`;
- `/restaurants-service`;
- `/tourism-service`;
- `/clinics-service`;
- `/auto-service`;
- `/ai-visualization-service`;
- `/reels-service`;
- `/360-tours-service`.

Сделано:

- Production build запущен с `NEXT_PUBLIC_DEBUG_MODE=false`, чтобы проверка была без debug-лейблов.
- На mobile `360px` визуально просмотрены hero-экраны активных L2.
- Найдена проблема на длинных L2 hero: на mobile показывались все 3 lead-параграфа, из-за чего CTA у `/real-estate-service` почти уходил под fixed mobile bottom bar.
- В `components/l2-direction/L2DirectionSections.tsx` изменена логика hero lead:
  - на mobile в карточном L2 hero показывается только первый lead-параграф;
  - дополнительные lead-параграфы возвращаются с `md` и выше;
  - desktop остаётся информативным, mobile становится легче.
- В `constants/l2DirectionConfigs.ts` поправлен Reels pricing-note:
  - было: `Что бизнес выигрывает`;
  - стало: `Что влияет на формат и стоимость Reels`;
  - список приведён к смыслу блока add-ons/pricing note.
- После правки повторно проверен `/real-estate-service` на `360px`: CTA в hero стал полностью виден над mobile bottom bar.
- На `375px` и `390px` сделан production smoke-check по самым чувствительным страницам с длинным hero.

Изменённые файлы:

- `components/l2-direction/L2DirectionSections.tsx`
- `constants/l2DirectionConfigs.ts`
- `site-docs/l2-parity-implementation-log.md`

Проверка:

- `npx tsc --noEmit` - passed.
- `npx eslint constants/l2DirectionConfigs.ts components/l2-direction/L2DirectionSections.tsx components/l2-direction/L2DirectionRenderer.tsx components/l2-direction/types.ts` - passed with warnings only:
  - existing `next/no-img-element` warnings in `L2DirectionSections.tsx`;
  - existing unused route constants in `constants/l2DirectionConfigs.ts`.
- `NEXT_PUBLIC_DEBUG_MODE=false npm run build` - passed.
- Production server: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3210 npm run start`.
- Playwright visual checks:
  - mobile `360px`: active L2 hero screens reviewed;
  - mobile `375px` and `390px`: smoke-check on sensitive pages;
  - console errors - 0.
- Временные screenshot-файлы удалены после проверки.

Результат:

- Mobile hero стал легче.
- CTA на длинных L2 больше не прижимается под bottom bar на `360px`.
- Reels add-ons теперь соответствует месту в структуре.
