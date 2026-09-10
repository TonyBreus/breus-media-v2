# L2 parity audit: приведение страниц второго уровня к структуре `/drone-service`

Дата: 2026-05-12  
Эталон: `/drone-service`  
Цель: привести все L2-страницы из бегущей строки к единой архитектуре L2-хаба.

## 1. Как читать этот отчёт

Этот документ сравнивает L2-страницы не по одинаковости текста, а по архитектуре. Текст у разных услуг должен отличаться: недвижимость, отели, клиники, Reels и AI решают разные задачи. Но путь пользователя должен быть сопоставимым:

1. быстро понять направление;
2. увидеть список услуг/форматов;
3. получить доказательства и сценарии применения;
4. понять подход Breus Media;
5. увидеть цены;
6. понять процесс;
7. снять страхи через условия, FAQ и связанные услуги;
8. легко оставить заявку с любого устройства.

Источник списка L2 - бегущая строка в `constants/gazetaRoutes.ts`:

- `/real-estate-service`
- `/auto-service`
- `/hotels-service`
- `/restaurants-service`
- `/tourism-service`
- `/clinics-service`
- `/drone-service`
- `/360-tours-service`
- `/promo-video-service`
- `/ai-visualization-service`
- `/reels-service`

`/drone-service` в этом отчёте не оценивается как проблемная страница. Она принята как структурный ориентир.

## 2. Эталонная архитектура `/drone-service`

Фактический порядок блоков на `/drone-service`:

1. Metadata: title, description, canonical, Open Graph, Twitter.
2. JSON-LD: базовые schema из `buildDirectionJsonLd` + отдельный `ItemList` на 18 направлений аэросъёмки.
3. `DronePageScrollProgress`.
4. `SmartHeader`:
   - single ticker;
   - CTA на `#contact`;
   - быстрые ссылки: `Услуги`, `Цены`, `FAQ`;
   - language links RU/EN.
5. Hero: `DroneHeroStitch`.
6. Мобильный список направлений: `DroneServicesMobileList`.
7. Каталог услуг: `DroneServicesStitch`.
8. Доказательства/статистика: `DroneStatsStrip`.
9. Mid-page CTA: короткий блок "Не нашли свою нишу?".
10. Сценарии и задачи: `DroneTasksSection`.
11. Почему снимают с нами: `DroneWhyUsSection`.
12. Пакеты и цены: `DronePricingStitch`.
13. Процесс: `DroneProcessStitch`.
14. Условия/ограничения: `DroneFlightConditionsNote`.
15. FAQ: `DroneFAQExpanded`.
16. Related links: `DroneRelatedLinksCompact`.
17. Contact: `DroneContactStitch`.
18. Sticky CTA: `DroneStickyCta`.
19. Mobile bottom bar: `MobileBottomBar`.
20. Footer: `DroneFooterStitch`.

Ключевые свойства эталона:

- это каталог направления, а не просто лендинг одной услуги;
- 18 карточек направлений;
- отдельная мобильная навигация сразу после hero;
- сильная связка `услуги -> доказательства -> CTA -> задачи -> почему мы`;
- цены до процесса;
- отдельный блок условий, специфичный для услуги;
- постоянные конверсионные элементы: sticky CTA и mobile bottom bar;
- понятная нижняя часть: FAQ, related links, contact.

## 3. Целевая структура для всех L2

Чтобы остальные L2 были похожи на `/drone-service`, целевая архитектура должна быть такой:

1. SEO + schema
   - Metadata.
   - Canonical.
   - Open Graph/Twitter.
   - Service schema.
   - Breadcrumb schema.
   - FAQPage schema.
   - OfferCatalog или ItemList по услугам/форматам.

2. Header
   - `SmartHeader`.
   - Single ticker для L2.
   - CTA на `#contact`.
   - Навигация минимум: `Услуги`, `Цены`, `FAQ`.
   - При наличии длинной страницы можно добавить `Процесс`.

3. Hero
   - H1 по направлению.
   - Короткое позиционирование.
   - Primary CTA.
   - Secondary CTA.
   - Hero cards или service panel с ключевыми форматами.
   - 2-3 lead-параграфа для сложных направлений.

4. Mobile direction list
   - Компактный список услуг/форматов после hero.
   - На мобильном должен быстро вести к карточкам внутри страницы.

5. Services/catalog
   - Карточки услуг или форматов.
   - У каждой карточки: title, category, description, price/format marker, image, CTA.
   - Для L2-хаба нормальный минимум - 7-8 карточек. Для узких направлений допустимо 6.

6. Evidence/statistics
   - 4 карточки статистики или доказательств.
   - Желательно не generic, а по направлению.

7. Mid CTA
   - Короткая конверсионная вставка после услуг и доказательств.
   - Должна ловить пользователя, который уже понял направление, но ещё не дошёл до цен.

8. Tasks / pains / use cases
   - Аналог `DroneTasksSection`.
   - 6 карточек "какую задачу закрывает услуга".
   - В текущем L2-рендерере роль часто выполняет `painSolutions`.

9. Why us
   - 6 причин, почему делать с Breus Media.
   - Не общие фразы, а подход: подготовка, сценарий, каналы использования, выдача материалов, локальный контекст.

10. Pricing
   - 3-4 пакета.
   - Желательно 4, если направление широкое.
   - Add-ons после пакетов, если услуга может расширяться.

11. Process
   - 4-5 шагов.
   - Порядок: запрос/бриф -> подготовка -> производство -> выдача.

12. Conditions note
   - Аналог `DroneFlightConditionsNote`, но для каждой услуги свой:
     - drone: GCAA, зона полёта, оборудование;
     - 360: оборудование, хостинг, точки, срок хранения;
     - AI: права, исходники, ограничения генерации, human review;
     - Reels: форматы, платформы, субтитры, права на музыку;
     - promo video: съёмочный день, монтаж, правки, лицензии;
     - clinics: согласия, аккуратность медицинских claims, приватность;
     - hotels/restaurants/tourism/auto/real estate: доступ к объекту, подготовка локации, сезонность, права на публикацию.

13. FAQ
   - Минимум 8 вопросов, лучше 12-14 для сложных L2.
   - FAQPage schema обязательна.

14. Related links
   - 6-9 ссылок на соседние L2/L3.
   - Для широких хабов меньше 6 выглядит слабее.

15. Contact
   - Единый contact-блок.
   - Предвыбранные услуги или service options.
   - WhatsApp/Telegram/форма.

16. Sticky/mobile conversion
   - Desktop sticky CTA.
   - Mobile bottom bar.
   - Это один из главных элементов, который есть в эталоне и отсутствует у остальных L2.

## 4. Сводная таблица соответствия

| Страница | Соответствие эталону | Главный статус |
|---|---:|---|
| `/real-estate-service` | 82% | Богатая L2, но без эталонных sticky/mobile CTA и conditions note |
| `/hotels-service` | 82% | Богатая L2, хорошая глубина, не хватает конверсионного слоя и условий |
| `/restaurants-service` | 84% | Почти эталонная по наполнению, есть trust, но нет sticky/mobile CTA и conditions note |
| `/tourism-service` | 80% | Хорошая L2, слабее по trust/add-ons/conversion layer |
| `/clinics-service` | 85% | Самая полная из новых L2, но не хватает trust и эталонных CTA |
| `/auto-service` | 52% | Короткая старая L2, требует переработки структуры |
| `/360-tours-service` | 75% | Сильная узкая L2, но отличается порядком и не хватает deliverables |
| `/promo-video-service` | 58% | Короткая старая L2, требует расширения до полноценного L2-хаба |
| `/ai-visualization-service` | 83% | Сильная L2, не хватает trust и конверсионного слоя |
| `/reels-service` | 76% | Сильная, но порядок отличается от эталона и меньше pricing-пакетов |

## 5. Метрики по текущим L2

| Страница | Услуг | Hero cards | Lead | Stats | Pricing | Add-ons | FAQ | Related | Trust | Contact options |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/drone-service` | 18 | service panel | есть | 4 | 4 | 3 | 8 | 3 | 6 | есть |
| `/real-estate-service` | 8 | 6 | 3 | 4 | 4 | 0 | 14 | 7 | 0 | 8 |
| `/auto-service` | 7 | 0 | 0 | 4 | 3 | 0 | 5 | 5 | 6 | 6 |
| `/hotels-service` | 8 | 6 | 3 | 4 | 4 | 0 | 14 | 9 | 0 | 8 |
| `/restaurants-service` | 8 | 6 | 3 | 4 | 4 | 0 | 14 | 9 | 6 | 8 |
| `/tourism-service` | 8 | 6 | 3 | 4 | 4 | 0 | 14 | 8 | 0 | 8 |
| `/clinics-service` | 8 | 6 | 3 | 4 | 4 | 3 | 14 | 9 | 0 | 8 |
| `/360-tours-service` | 6 | 6 | 2 | 4 | 3 | 3 | 14 | 6 | 0 | 7 |
| `/promo-video-service` | 7 | 0 | 0 | 4 | 3 | 0 | 7 | 7 | 7 | 7 |
| `/ai-visualization-service` | 8 | 6 | 3 | 4 | 4 | 4 | 14 | 7 | 0 | 9 |
| `/reels-service` | 8 | 6 | 3 | 4 | 3 | 6 | 14 | 7 | 0 | 8 |

## 6. Общие системные разрывы

### 6.1 Sticky CTA и mobile bottom bar отсутствуют у всех L2 кроме `/drone-service`

Это самый заметный конверсионный разрыв. На эталоне пользователь не теряет действие при скролле. На остальных L2 действие есть только внутри секций и в header/contact.

Правка:

- добавить поддержку `DroneStickyCta` и `MobileBottomBar` в `L2DirectionRenderer`;
- передавать `heroId`, `label`, `primaryLabel` через config или ставить дефолт "Обсудить задачу";
- для всех L2 включить CTA после проверки мобильного перекрытия.

Приоритет: P0.

### 6.2 Нет мобильного списка направлений после hero

У `/drone-service` есть `DroneServicesMobileList`, который сразу показывает направления на мобильном. У остальных L2 его аналога нет. Это особенно важно для страниц с 8 hero cards и длинным hero.

Правка:

- создать универсальный `L2ServicesMobileList`;
- строить список из `config.data.services`;
- ставить после `L2DirectionHero`, до основной секции `services`.

Приоритет: P0.

### 6.3 Нет единого блока условий/ограничений

У `/drone-service` есть `DroneFlightConditionsNote`. Остальные L2 не имеют универсального блока "что важно знать перед заказом". Это не просто текстовый блок, а блок снижения риска.

Правка:

- добавить тип `conditionsNote` в `L2DirectionDataConfig`;
- добавить секцию `conditionsNote` после `process` и перед `faq`;
- написать уникальные условия для каждой L2.

Приоритет: P1.

### 6.4 Смешаны два поколения L2

Есть богатые L2 с `heroCards`, `leadParagraphs`, `deliverables`, `whyUs`, 14 FAQ. Есть короткие L2, которые идут через дефолтный порядок и имеют 5-7 FAQ.

Короткие страницы:

- `/auto-service`
- `/promo-video-service`

Их нужно привести к новому L2-формату в первую очередь.

Приоритет: P0.

### 6.5 Schema неоднородна

Часть страниц имеет ручной `FAQPage` и `BreadcrumbList`, часть полагается на `buildDirectionJsonLd`, который даёт только `Service` + `BreadcrumbList`. У `/drone-service` есть дополнительный `ItemList`, но нет FAQ schema.

Правка:

- унифицировать schema для всех L2:
  - `Service`;
  - `BreadcrumbList`;
  - `FAQPage`;
  - `OfferCatalog` или `ItemList`;
- добавить FAQ schema также на `/drone-service`.

Приоритет: P1.

### 6.6 Related links у эталона слабее, чем у новых L2

Парадокс: `/drone-service` является эталоном архитектуры, но по related links слабее. У него 3 ссылки, у многих новых L2 7-9.

Правка:

- это не мешает приводить остальные L2 к эталону;
- но отдельно стоит усилить `/drone-service` related links до 6-9 ссылок.

Приоритет: P2.

## 7. Page-by-page аудит

## `/real-estate-service`

Статус: близко к эталону, но без эталонного конверсионного слоя.

Что уже соответствует:

- есть полноценный L2-хаб на 8 услуг;
- есть 6 hero cards;
- есть 3 lead-параграфа;
- есть stats/social proof;
- есть mid CTA;
- есть `painSolutions`, которые выполняют роль блока задач;
- есть `earnLose`;
- есть `deliverables`;
- есть `whyUs`;
- есть 4 pricing-пакета;
- есть 5 process-steps;
- FAQ сильнее эталона: 14 вопросов против 8;
- related links сильнее эталона: 7 против 3;
- есть ручные Service, FAQPage и Breadcrumb schema.

Что не соответствует `/drone-service`:

- нет мобильного списка услуг сразу после hero;
- нет sticky CTA;
- нет mobile bottom bar;
- нет отдельного блока условий после process;
- нет trust badges;
- порядок отличается: в эталоне после services сразу stats, CTA, tasks, whyUs; здесь есть более длинная редакционная цепочка, но она логически допустима;
- нет pricing add-ons.

Что править поэтапно:

P0:

1. Добавить универсальный mobile services list после hero.
2. Включить sticky CTA и mobile bottom bar.
3. Проверить, чтобы CTA в header и sticky CTA вели на `#contact`.

P1:

1. Добавить `conditionsNote` для недвижимости:
   - подготовка объекта;
   - доступ к локации;
   - права на публикацию;
   - подготовка квартиры/ЖК к съёмке;
   - что нужно от риелтора/застройщика до съёмки.
2. Добавить trust badges: риелторы, агентства, застройщики, инвесторы, управляющие компании.
3. Добавить pricing add-ons:
   - дополнительные вертикальные версии;
   - субтитры;
   - срочный монтаж;
   - дополнительные фото/обложки;
   - англоязычная версия.

P2:

1. Сократить или переставить часть narrative-блоков, если страница кажется длиннее drone-service.
2. Сохранить 14 FAQ, это преимущество.

Итог: страница почти готова к единому стандарту. Основная работа - не переписывание, а добавление конверсионных и сервисных слоёв.

## `/hotels-service`

Статус: близко к эталону, сильная hospitality L2.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- earnLose;
- deliverables;
- whyUs;
- 4 pricing-пакета;
- 5 process-steps;
- FAQ 14;
- related links 9, сильнее эталона;
- contact options 8;
- ручная schema: Service, FAQPage, BreadcrumbList.

Что не соответствует:

- нет мобильного списка услуг;
- нет sticky CTA и mobile bottom bar;
- нет trust badges;
- нет conditions note;
- нет pricing add-ons;
- секция `whatIsTour` по названию может быть технически унаследованной и не всегда семантически подходит отелям, если внутри не переименована на hospitality logic.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для отелей:
   - подготовка номеров;
   - согласование съёмки гостей/персонала;
   - съёмка завтраков/общих зон;
   - сезонность и погодные окна;
   - доступ к крыше/территории/бассейну;
   - права на публикацию на Booking, Airbnb, сайте и соцсетях.
2. Добавить trust badges: отели, апартаменты, гостевые дома, resorts, управляющие компании.
3. Добавить pricing add-ons:
   - дополнительный номер;
   - сезонный пакет;
   - short-form нарезка;
   - EN/KA descriptions;
   - срочная выдача.

P2:

1. Сохранить 9 related links.
2. Проверить, чтобы linked services в related links не уводили только в L2, а включали ключевые L3 для отелей.

Итог: страница структурно сильная. Для parity с drone-service нужны конверсионные элементы и блок условий.

## `/restaurants-service`

Статус: одна из самых близких к эталону.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- earnLose;
- deliverables;
- whyUs;
- 4 pricing-пакета;
- 5 process-steps;
- FAQ 14;
- related links 9;
- trust badges 6;
- contact options 8;
- ручная schema: Service, FAQPage, BreadcrumbList.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA;
- нет mobile bottom bar;
- нет conditions note;
- нет pricing add-ons;
- в текущем порядке нет отдельного `pricingAddOns`, хотя для ресторанов допродажи естественны.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для ресторанов:
   - подготовка блюд;
   - тайминг кухни;
   - съёмка гостей только с разрешения;
   - свет/окна;
   - терраса/фасад/дрон при погоде;
   - права на музыку и публикацию.
2. Добавить pricing add-ons:
   - дополнительные блюда;
   - delivery карточки;
   - Reels pack;
   - меню/обложки;
   - срочный монтаж;
   - адаптация под Wolt/Glovo/Google Maps.

P2:

1. Сохранить trust badges, они дают странице преимущество над другими L2.
2. Можно добавить короткий mobile-first переход к "блюда / интерьер / Reels / дрон / AI меню".

Итог: после добавления mobile/sticky CTA и conditions note страница будет почти полностью соответствовать эталону.

## `/tourism-service`

Статус: хорошая L2, но слабее по trust и commercial closure.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- earnLose;
- deliverables;
- whyUs;
- 4 pricing-пакета;
- 5 process-steps;
- FAQ 14;
- related links 8;
- contact options 8;
- ручная schema: Service, FAQPage, BreadcrumbList.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA и mobile bottom bar;
- нет trust badges;
- нет conditions note;
- нет pricing add-ons.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для туризма:
   - погодные окна;
   - выезд по регионам;
   - сезонность;
   - разрешения на локациях;
   - съёмка людей и групп;
   - безопасность на маршруте;
   - сроки выдачи для сезонных кампаний.
2. Добавить trust badges: туроператоры, гиды, glamping, hotels, маршруты, локации.
3. Добавить pricing add-ons:
   - дополнительная локация;
   - вертикальные ролики;
   - multilingual captions;
   - drone add-on;
   - AI route descriptions.

P2:

1. Related links оставить широкими: hotels, restaurants, drone, reels, promo, 360.
2. Проверить, чтобы страница не выглядела только как travel-контент, а как L2 для бизнеса.

Итог: структура хорошая. Основной недостающий слой - trust, условия и постоянные CTA.

## `/clinics-service`

Статус: самая полная из новых L2 по набору блоков.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- earnLose;
- deliverables;
- whyUs;
- 4 pricing-пакета;
- pricing add-ons 3;
- 5 process-steps;
- FAQ 14;
- related links 9;
- contact options 8;
- ручная schema: Service, FAQPage, BreadcrumbList.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA;
- нет mobile bottom bar;
- нет trust badges;
- нет conditions note;
- для медицинского направления особенно нужен блок ограничений/этики, его отсутствие заметнее, чем на других страницах.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для клиник:
   - согласие врачей/пациентов на съёмку;
   - приватность;
   - аккуратность медицинских утверждений;
   - без обещаний результата лечения;
   - подготовка кабинетов;
   - форма одежды/брендирование;
   - языковые версии RU/EN/KA.
2. Добавить trust badges: клиники, стоматологии, aesthetic, wellness, врачи, медицинские центры.

P2:

1. Сохранить pricing add-ons.
2. Добавить в related links больше связок с promo doctor, clinic interior, reels clinic, 360 clinic, AI descriptions, если не все есть.

Итог: страница ближе всех к целевому L2-стандарту. Её можно использовать как второй ориентир для "богатого L2", но добавить конверсионные элементы и conditions note.

## `/auto-service`

Статус: не соответствует эталону. Требует структурной переработки.

Что уже соответствует:

- есть 7 услуг;
- есть social proof stats;
- есть trust badges 6;
- есть map;
- есть painProof 4;
- есть pricing 3;
- есть process 4;
- есть related links 5;
- есть contact options 6.

Что не соответствует:

- нет hero cards;
- нет lead-параграфов;
- используется дефолтный порядок секций, а не богатый L2 flow;
- нет mobile services list;
- нет sticky CTA;
- нет mobile bottom bar;
- нет deliverables;
- нет whyUs;
- нет earnLose;
- нет pricing add-ons;
- FAQ всего 5;
- нет ручной расширенной schema с FAQPage в `page.tsx`, если полагаться только на `buildDirectionJsonLd`;
- страница ощущается как старый короткий шаблон, а не как хаб уровня `/drone-service`.

Что править поэтапно:

P0:

1. Добавить `heroCards` минимум 5-6:
   - видео автосалона;
   - аэросъёмка площадки;
   - Reels для авто;
   - обзор модели;
   - детейлинг/сервис;
   - AI descriptions/listings.
2. Добавить `heroLeadParagraphs` 2-3 абзаца.
3. Задать явный `sectionOrder`, похожий на богатые L2:
   - `marquee`;
   - `services`;
   - `socialProof`;
   - `midCta`;
   - `whatIsTour` или auto-specific intro;
   - `painSolutions`;
   - `earnLose`;
   - `deliverables`;
   - `whyUs`;
   - `pricing`;
   - `pricingAddOns`;
   - `process`;
   - `faq`;
   - `relatedLinks`;
   - `contact`.
4. Добавить mobile services list.
5. Включить sticky CTA и mobile bottom bar.

P1:

1. Заменить или дополнить `painProof` на `painSolutions` из 6 карточек.
2. Добавить `deliverables` 8-10 пунктов:
   - видео салона;
   - фото площадки;
   - вертикальные ролики;
   - модельные обзоры;
   - обложки;
   - файлы под MyAuto/соцсети;
   - short-form cuts;
   - AI-тексты.
3. Добавить `whyUs` 6 карточек.
4. Расширить FAQ до 10-14.
5. Добавить pricing add-ons.
6. Добавить `conditionsNote` для авто:
   - подготовка автомобилей;
   - чистота и расстановка;
   - номерные знаки;
   - разрешение на съёмку площадки;
   - погодные условия;
   - съёмка в движении;
   - права на музыку/публикацию.
7. Добавить FAQPage schema и OfferCatalog.

P2:

1. Related links расширить до 7-9.
2. Проверить, чтобы `/auto-service` не дублировал L3, а был именно хабом: авто-салон, модель, сервис, дрон, Reels, promo, AI.

Итог: это одна из двух главных страниц на переработку. Начинать стоит с неё или с `/promo-video-service`.

## `/360-tours-service`

Статус: сильная узкая L2, но архитектурно отличается от эталона.

Что уже соответствует:

- 6 услуг/сценариев;
- 6 hero cards;
- 2 lead-параграфа;
- stats/social proof;
- painSolutions;
- mid CTA;
- pricing 3;
- pricing add-ons 3;
- process 5;
- whyUs 6;
- FAQ 14;
- related links 6;
- contact options 7;
- ручная schema: Service, FAQPage, BreadcrumbList, offers.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA;
- нет mobile bottom bar;
- нет trust badges;
- нет deliverables;
- порядок отличается от эталона: `whatIsTour` стоит очень рано, pricing раньше whyUs;
- нет отдельного conditions note;
- только 6 services, но для 360 это допустимо, если направление уже.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `deliverables`:
   - 360-панорамы;
   - интерактивные точки;
   - web-link;
   - embed для сайта;
   - Google Maps/GBP при необходимости;
   - preview photos;
   - hosting/export notes.
2. Добавить `conditionsNote` для 360:
   - подготовка пространства;
   - уборка/свет;
   - количество точек;
   - хостинг и срок хранения;
   - что можно обновлять;
   - приватные зоны;
   - интеграция на сайт.
3. Добавить trust badges: отели, рестораны, клиники, шоурумы, офисы, недвижимость.
4. Рассмотреть перестановку:
   - services;
   - socialProof;
   - midCta;
   - whatIsTour;
   - painSolutions;
   - deliverables;
   - whyUs;
   - pricing;
   - pricingAddOns;
   - process;
   - conditionsNote;
   - FAQ;
   - relatedLinks;
   - contact.

P2:

1. Оставить 3 pricing-пакета, если экономика услуги действительно проще.
2. Related links можно расширить до 7-8 за счёт L3 360 pages.

Итог: страница не слабая, но её flow стоит приблизить к drone-service: сначала показать каталог и доказательства, потом объяснение, потом цены и процесс.

## `/promo-video-service`

Статус: не соответствует эталону. Вторая главная страница на переработку после `/auto-service`.

Что уже соответствует:

- есть 7 услуг;
- есть stats/social proof;
- есть trust badges 7;
- есть map;
- есть painProof 4;
- есть pricing 3;
- есть process 4;
- FAQ 7;
- related links 7;
- contact options 7.

Что не соответствует:

- нет hero cards;
- нет lead-параграфов;
- используется дефолтный L2 порядок;
- нет mobile services list;
- нет sticky CTA и mobile bottom bar;
- нет deliverables;
- нет whyUs;
- нет earnLose;
- нет pricing add-ons;
- FAQ меньше эталонного нового стандарта;
- нет ручной расширенной schema с FAQPage, если страница использует только base renderer;
- страница не выглядит как главный хаб промо-видео, хотя в бегущей строке это L2.

Что править поэтапно:

P0:

1. Добавить `heroCards` 6:
   - promo для бизнеса;
   - promo для отелей;
   - promo для клиник;
   - promo для ресторанов;
   - авто/дилеры;
   - недвижимость/ЖК.
2. Добавить `heroLeadParagraphs` 2-3.
3. Задать явный богатый `sectionOrder`.
4. Добавить mobile services list.
5. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `deliverables`:
   - сценарий;
   - съёмка;
   - монтаж;
   - цвет;
   - титры;
   - версии под сайт/ads/Reels;
   - обложки;
   - исходные/финальные файлы;
   - правки.
2. Добавить `whyUs` 6 карточек:
   - сценарий до съёмки;
   - монтаж под канал;
   - сочетание видео/дрон/AI/Reels;
   - локальная команда;
   - понятные сроки;
   - готовые форматы.
3. Добавить `painSolutions` 6 карточек вместо только painProof.
4. Расширить FAQ до 12-14.
5. Добавить pricing add-ons:
   - дополнительный съёмочный час;
   - вторая версия ролика;
   - субтитры;
   - voiceover;
   - срочный монтаж;
   - вертикальные cuts.
6. Добавить `conditionsNote` для promo:
   - подготовка сценария;
   - правки;
   - музыка/лицензии;
   - съёмочные разрешения;
   - участники в кадре;
   - сроки монтажа.
7. Добавить FAQPage schema и OfferCatalog.

P2:

1. Related links оставить 7 или расширить до 9.
2. Проверить, чтобы L2 не конкурировала с L3 `/promo-video/...`, а вела к ним.

Итог: сейчас это короткий L2. Для parity нужно превратить в полноценный каталог промо-видео направлений.

## `/ai-visualization-service`

Статус: сильная новая L2, близко к эталону.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- earnLose;
- deliverables;
- whyUs;
- 4 pricing-пакета;
- pricing add-ons 4;
- process 5;
- FAQ 14;
- related links 7;
- contact options 9;
- ручная schema: Service, FAQPage, BreadcrumbList, offers.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA и mobile bottom bar;
- нет trust badges;
- нет conditions note;
- H1 длиннее остальных L2 и может быть тяжёлым для сканирования.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для AI:
   - human review;
   - права на итоговые материалы;
   - ограничения генерации;
   - качество исходников;
   - что нельзя обещать AI;
   - количество правок;
   - формат выдачи.
2. Добавить trust badges: недвижимость, рестораны, отели, авто, e-commerce, бренды.
3. Проверить H1. Возможная цель: короче и яснее, а детали вынести в subtitle.

P2:

1. Сохранить pricing add-ons, это преимущество.
2. Добавить больше related links на конкретные AI L3, если они стратегически важны.

Итог: страница уже сильная. Нужны слой доверия, условия и CTA-поведение как у эталона.

## `/reels-service`

Статус: сильная L2, но порядок заметно отличается от эталона.

Что уже соответствует:

- 8 услуг;
- 6 hero cards;
- 3 lead-параграфа;
- stats/social proof;
- mid CTA;
- painSolutions;
- deliverables 6;
- whyUs 6;
- pricing add-ons 6;
- process 5;
- FAQ 14;
- related links 7;
- contact options 8;
- ручная schema: Service, FAQPage, BreadcrumbList.

Что не соответствует:

- нет mobile services list;
- нет sticky CTA;
- нет mobile bottom bar;
- нет trust badges;
- нет conditions note;
- нет marquee/earnLose;
- pricing всего 3 пакета;
- порядок отличается: `pricingAddOns` стоит до `deliverables`, а pricing после whyUs.

Что править поэтапно:

P0:

1. Добавить mobile services list.
2. Включить sticky CTA и mobile bottom bar.

P1:

1. Добавить `conditionsNote` для Reels:
   - платформы и форматы;
   - субтитры;
   - музыка и права;
   - участники в кадре;
   - график публикаций;
   - raw/final files;
   - правки.
2. Добавить trust badges: рестораны, отели, клиники, авто, недвижимость, бренды.
3. Рассмотреть 4-й pricing-пакет для monthly/retainer или launch pack.
4. Переставить `pricingAddOns` после `pricing`, чтобы совпадало с логикой эталона.
5. Добавить `earnLose` или аналог, если хотим parity с сильными L2.

P2:

1. `deliverables` можно расширить с 6 до 8-10.
2. Related links оставить 7, достаточно.

Итог: страница сильная, но нужно привести порядок секций к общей системе и добавить конверсионные элементы.

## 8. Рекомендуемый порядок внедрения

### Этап 1 - общие компоненты parity

Сделать один раз в коде:

1. `L2ServicesMobileList`.
2. Поддержка `DroneStickyCta` и `MobileBottomBar` в `L2DirectionRenderer`.
3. Новый `conditionsNote` в типах и рендерере.
4. Единая schema-логика: FAQPage + OfferCatalog/ItemList для всех L2.

Ожидаемый эффект: все сильные L2 сразу становятся похожими на `/drone-service` без переписывания страниц.

### Этап 2 - переработать короткие L2

В первую очередь:

1. `/auto-service`
2. `/promo-video-service`

Почему они первые:

- нет hero cards;
- нет lead-параграфов;
- нет deliverables;
- нет whyUs;
- мало FAQ;
- нет явного богатого `sectionOrder`;
- они визуально и структурно отстают от остальных L2.

### Этап 3 - довести сильные L2

Страницы:

- `/real-estate-service`
- `/hotels-service`
- `/restaurants-service`
- `/tourism-service`
- `/clinics-service`
- `/ai-visualization-service`
- `/reels-service`
- `/360-tours-service`

Для них в основном нужны:

- mobile services list;
- sticky/mobile CTA;
- conditions note;
- trust badges там, где нет;
- add-ons там, где логично;
- небольшая корректировка порядка.

### Этап 4 - улучшить сам эталон

Хотя `/drone-service` является ориентиром, у него есть зоны, где новые L2 сильнее:

1. FAQ schema отсутствует в отдельном виде.
2. FAQ всего 8, можно расширить до 10-12.
3. Related links всего 3, можно расширить до 6-9.
4. Можно добавить более явный `conditionsNote` schema/text reuse, чтобы этот паттерн стал системным.

## 9. Приоритетный чеклист правок

P0:

- [ ] Добавить universal mobile services list в `L2DirectionRenderer`.
- [ ] Добавить sticky CTA в `L2DirectionRenderer`.
- [ ] Добавить mobile bottom bar в `L2DirectionRenderer`.
- [ ] Переработать `/auto-service` до богатой L2-структуры.
- [ ] Переработать `/promo-video-service` до богатой L2-структуры.

P1:

- [ ] Добавить `conditionsNote` в типы и рендерер.
- [ ] Написать conditions note для каждой L2.
- [ ] Унифицировать FAQPage schema.
- [ ] Унифицировать OfferCatalog/ItemList schema.
- [ ] Добавить trust badges на L2, где их нет.
- [ ] Добавить pricing add-ons там, где они логичны.

P2:

- [ ] Расширить related links на `/drone-service`.
- [ ] Расширить FAQ на `/drone-service`.
- [ ] Проверить H1 на `/ai-visualization-service`.
- [ ] Довести `/360-tours-service` по deliverables и порядку секций.
- [ ] Причесать sectionOrder у `/reels-service`.

## 10. Итог

Сейчас L2-система состоит из трёх типов страниц:

1. `/drone-service` - эталонный кастомный каталог направления.
2. Новые богатые L2 - почти соответствуют эталону по глубине, но не имеют sticky/mobile CTA, mobile list и conditions note.
3. Старые короткие L2 - `/auto-service` и `/promo-video-service`; они требуют полноценной структурной доработки.

Главная задача не в том, чтобы сделать одинаковый текст. Главная задача - сделать одинаковую логику:

`Hero -> mobile list -> services -> proof -> CTA -> tasks/pains -> why us -> pricing -> process -> conditions -> FAQ -> related -> contact -> sticky/mobile CTA`.

Если внедрить общий L2 parity layer в `L2DirectionRenderer`, большая часть страниц быстро приблизится к `/drone-service`. После этого точечно останутся две крупные переработки: автобизнес и промо-видео.
