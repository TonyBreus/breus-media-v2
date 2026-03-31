# BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP

## 1. Executive Summary
Batch 4 sweep показал, что текущий сайт уже стал заметно чище после Batch 1-3, но визуально-текстовая консистентность still uneven между page families.

Главные источники фрикции:
- shared-конфиги содержат legacy wording (`Coverage v1`, `Шаблонный L2 блок`, `Google Presence`, `L2-страница...`);
- CTA-логика по семьям страниц частично стабилизирована, но в репрезентативных L3 всё ещё перемешаны old/new паттерны;
- anchor и section labels (`Пакеты`/`Цены`/`Тарифы`, `#packages`/`#pricing`) не унифицированы;
- есть видимые legacy remnants (`CTA №1`, `L3 Услуга`, visible placeholder copy);
- есть route-sanity долги в связанных блоках ряда drone L3 (старые/несуществующие href).

Общий вывод: нужен короткий технический cleanup-спринт без редизайна, с упором на shared слой + route hygiene + CTA naming matrix.

## 2. Shared Component Issues
| Area | Page/Component | Issue type | What is inconsistent | Recommendation |
| --- | --- | --- | --- | --- |
| L2 config copy | `constants/l2DirectionConfigs.ts` | Legacy wording | `mapHint: Шаблонный L2 блок...`, badges `Hotels Coverage v1` и аналогичные выглядят как внутренний staging-слой | Переименовать в production-neutral copy (`Карта покрытия`, без `v1`/`шаблон`) |
| L2 hero config | `constants/l2DirectionConfigs.ts` | CTA drift | `secondaryCtaLabel: Заказать` в config, но renderer уже перешёл на `Подобрать услугу` | Синхронизировать config с renderer, убрать риск регрессии при переиспользовании полей |
| Drone/RE config | `constants/droneDirectionPages.ts` | CTA drift | `secondaryCtaLabel: Заказать` и `#contact` устарели относительно текущей L2 service-first логики | Привести поля к текущему UX (`Подобрать услугу`, `#services`) |
| Shared naming | `constants/droneDirectionPages.ts`, `constants/l2DirectionConfigs.ts` | Internal/technical labels | `Google Presence`, `L2-страница...`, `категория` в user-facing description | Заменить на клиентский язык: `Репутация в Google`, `страница направления` |
| Gazeta stack CTA | `components/gazeta/NichesStack.tsx` | CTA inconsistency | В одном компоненте одновременно `Подробнее` / `Открыть решение` / `Смотреть формат` / `Заказать` | Ввести единый CTA-словарь для stack cards (primary route-first + optional secondary contact) |
| Shared hero label | `components/360-tour-commercial-real-estate/TourHero.tsx`, `components/360-tour-hotels/TourHero.tsx` | Visible legacy junk | Видимый текст `L3 Услуга` | Заменить на нормальный eyebrow по семейству (`360° тур`, `Коммерческая недвижимость`) |
| Shared id hygiene | `app/drone-services/drone-brand-video/DroneBrandVideoPageClient.tsx` | Legacy leftover | Hero id: `drone-restaurants-hero` на brand-video странице | Переименовать в `drone-brand-video-hero` |

## 3. CTA Consistency Issues
| Area | Page/Component | Issue type | What is inconsistent | Recommendation |
| --- | --- | --- | --- | --- |
| L2 hubs | `app/*-service/page.tsx` + `L2DirectionRenderer` | Partially fixed | L2 уже service-first, но shared configs всё ещё хранят старую contact-first терминологию | Зафиксировать единый source-of-truth в конфигах |
| Gazeta cards | `components/gazeta/NichesStack.tsx` | Mixed intent | Для похожих действий используются разнородные CTA глаголы | Нормализовать на 2 слоя: `Открыть услугу` (primary), `Обсудить задачу` (secondary) |
| Reels L3 | `app/reels-promo/reels-real-estate/page.tsx` | Debug-like CTA text | Видимые блоки `CTA №1`, `CTA №2` | Переименовать в клиентский формат: `Быстрый вход`, `Нужен пример пакета` |
| 360 L3 | `app/360-tour-real-estate/page.tsx` | CTA family mismatch | В hero `Смотреть демо` + `Обсудить проект`, но в других 360 L3 чуть другие паттерны | Утвердить единый 360 CTA pattern: `Смотреть примеры` + `Обсудить задачу` |
| Promo family | `app/promo-video/*` | Wording drift | `Пример видео` vs `Примеры`; `Смотреть пакеты и цены` vs `Посмотреть пакеты` | Свести к одному набору label на всю promo-family |

## 4. Anchor Consistency Issues
| Area | Page/Component | Issue type | What is inconsistent | Recommendation |
| --- | --- | --- | --- | --- |
| Pricing anchor naming | `reels/ai` vs `drone/360/promo` | Anchor vocabulary split | `#packages` у одних, `#pricing` у других при похожем смысле | Ввести map: UI label может отличаться, но anchor ключ унифицировать (например, `#pricing`) |
| Header labels | Множество L3 | Label inconsistency | `Цены`, `Пакеты`, `Тарифы` используются как взаимозаменяемые | Нормализовать на один primary label по семейству (например, `Пакеты`) |
| Contact access | L2 pages | Flow inconsistency | L2 header не содержит `#contact`, тогда как L3 чаще содержит | Зафиксировать правило: L2 без раннего contact (service-first), L3 с contact в header |
| Examples label | Promo vs 360/drone L3 | Label inconsistency | `Пример видео` (единственное) и `Примеры` (множественное) | Унифицировать на `Примеры` |

## 5. Legacy Wording / Visible Junk
| Area | Page/Component | Issue type | What is inconsistent | Recommendation |
| --- | --- | --- | --- | --- |
| Visible placeholder copy | `app/drone-construction-monitoring/page.tsx`, `app/drone-fpv-cinema/page.tsx`, `app/drone-hotels-tourism/page.tsx`, `app/drone-weddings-events/page.tsx` | Legacy trust-risk copy | Фраза `На странице оставлен прозрачный placeholder` остаётся видимой | Переформулировать в neutral proof-block (`Примеры по запросу до публикации публичного кейса`) |
| Internal wording | `constants/l2DirectionConfigs.ts` | Technical language leak | `L2-страница`, `Coverage v1`, `Шаблонный` | Убрать внутреннюю терминологию из user-facing текста |
| Legacy page style | `app/drone-service/monitoring-stroiki/page.tsx` | Old-generation page | Старый standalone layout и старые формулировки отдельно от нового `drone-construction-monitoring` | Сделать redirect на canonical route или пометить как legacy alias |
| Metadata tone | `app/gazeta/page.tsx` | Legacy naming | Title: `Site Gazeta - Breus Media` | Перейти к production title формата `Gazeta | Breus Media` |

## 6. Representative Pages With Remaining Cleanup Items
| Area | Page/Component | Issue type | What is inconsistent | Recommendation |
| --- | --- | --- | --- | --- |
| Gazeta | `/gazeta`, `components/gazeta/NichesStack.tsx` | CTA + wording variance | Разношёрстные CTA и mixed legacy copy в нишах | Внедрить единый CTA dictionary + быстрый pass по subheading формулировкам |
| L2 Hub layer | `/hotels-service`, `/restaurants-service`, `/tourism-service`, `/360-tours-service`, `/reels-service`, `/promo-video-service`, `/ai-visualization-service` | Shared copy leftovers | Наследуют `Coverage v1`, `Google Presence`, `Шаблонный` из shared конфигов | Почистить shared копирайтинг в `l2DirectionConfigs` и `droneDirectionPages` |
| Drone monitoring | `/drone-construction-monitoring` | Placeholder wording | Видимый `прозрачный placeholder` в блоке примеров | Заменить на neutral `кейсы по запросу / пилотные кейсы` |
| Drone inspection | `/drone-object-inspection` | Minor consistency | Core логика уже чистая, но CTA labels можно унифицировать с monitoring family | Синхронизировать CTA labels с monitoring page |
| 360 real estate | `/360-tour-real-estate` | CTA naming drift | Family-level consistency с остальными 360 страницами неполная | Стандартизировать hero CTA и секционные названия в 360-family |
| Reels real estate | `/reels-promo/reels-real-estate` | Visible debug-like text | `CTA №1/№2` в публичной копии | Переименовать в клиентские блоки без numbering-style |
| Promo real estate | `/promo-video/promo-real-estate` | Header label inconsistency | `Пример видео` в отличие от `Примеры` в смежных страницах | Унифицировать header label |
| AI real estate | `/ai-visual/ai-real-estate` | Anchor family divergence | Используется `#packages`, в других family часто `#pricing` | Привести к общей anchor policy (минимум документировать и стабилизировать) |
| Drone brand video | `/drone-services/drone-brand-video` | Leftovers + route hygiene | `drone-restaurants-hero` id, TODO в форме, mixed old href в related links | Привести id/комментарии/href к текущему семейству |

## 7. First Implementation Recommendations
1. Shared copy pass (самый быстрый высокий эффект):
- обновить `constants/l2DirectionConfigs.ts` и `constants/droneDirectionPages.ts`:
  - убрать `Coverage v1`, `Шаблонный L2 блок`, `Google Presence`, `L2-страница`.
  - синхронизировать CTA поля с текущей service-first моделью.

2. CTA/anchor normalization matrix:
- зафиксировать один документ-политику по семействам:
  - L2 hub: `#services`, `#pricing`, `#faq`;
  - L3 service: `#examples`, `#pricing` (или `#packages`, но единообразно), `#faq`, `#contact`.
- унифицировать labels: `Примеры`, `Пакеты`, `FAQ`, `Контакты` (или утверждённый эквивалент).

3. Legacy visible junk sweep (быстрые точечные правки):
- убрать `CTA №1/№2` на `/reels-promo/reels-real-estate`;
- убрать `L3 Услуга` в 360 hero shared-компонентах;
- заменить visible `placeholder` формулировки на neutral production copy.

4. Route sanity cleanup (высокий приоритет для доверия):
- пройти `related services` блоки в drone service pages;
- заменить старые/несуществующие href на реальные текущие маршруты;
- решить судьбу `/drone-service/monitoring-stroiki` (redirect на `/drone-construction-monitoring`).

5. Batch execution order (без редизайна):
- Batch 4A: shared constants + CTA dictionary + section label normalization;
- Batch 4B: route fixes + legacy route redirects;
- Batch 4C: representative page polish pass (reels/promo/360/drone) + финальный visual QA.
