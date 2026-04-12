✅ fix(hero): убран дубль строки, правая колонка растянута, отступы подправлены (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Удалена дублирующая metadata-строка под левой кнопкой `Обсудить задачу`.
  - Правая колонка desktop hero растянута на высоту контейнера: `hidden lg:flex flex-col justify-between py-0 h-full`.
  - Внутренняя карточка услуги (`motion.div`) переведена в `flex-1 flex flex-col ...` для заполнения высоты.
  - Нижний отступ hero уменьшен: `pb-16` → `pb-8`.
  - Под стрелкой добавлена дополнительная строка: `от 250 ₾ · Тбилиси · Батуми · Кутаиси`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(hero): layout прижат к краям, фразы уменьшены, кнопки перераспределены, карточка увеличена (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Desktop hero выровнен к краям: `justify-start`, уменьшены верхние отступы (`pt-20 md:pt-24`), снято центрирование контейнера и текста.
  - Desktop grid обновлён на `lg:grid-cols-[55%_42%] lg:gap-[3%]`, фразы в левой колонке уменьшены до `text-[15px] text-white/55 leading-relaxed`.
  - Под левым блоком добавлены CTA `Обсудить задачу` (`#contact`) и metadata-линия `18 направлений · от 250 ₾ · Тбилиси · Батуми · Кутаиси`.
  - В правой карточке оставлена только одна full-width кнопка `Открыть услугу`; увеличены `category/title/description` (`11px / 3xl / 15px`).
  - Под desktop-стрелкой добавлена подпись `18 направлений ↓`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(hero+page): убран вводный блок под hero, десктоп карточка ниши восстановлена (12.04.2026) — `app/drone-service/page.tsx`, `components/drone/DroneHeroStitch.tsx`
  - В `app/drone-service/page.tsx` полностью удалена секция `ВВОДНЫЙ ТЕКСТ + TRUST STRIP` между hero и `DebugWrapper id={10300}`.
  - В `DroneHeroStitch` desktop grid изменён на пропорцию `lg:grid-cols-[3fr_2fr]`.
  - Левая колонка hero упрощена: оставлены `price`, `title` и CTA `Обсудить проект`; удалены 4 фразы и metadata-строка.
  - Правая desktop-колонка заменена на карточку ниши (`category/title/description`) с кнопками `Открыть` и `Подобрать` + чипы направлений.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(hero): Split Hero — текст слева, карусель из актуальных данных справа, убраны модели дронов, добавлены 4 фразы и 18 направлений (12.04.2026) — `components/drone/DroneHeroStitch.tsx`
  - Desktop hero переведён в split-layout: слева заголовок/4 тезиса/CTA `Обсудить проект` + metadata-строка; справа — карусель по `droneServiceItems`.
  - Удалён legacy-блок `DebugWrapper id=10180` (компактный навигатор/модели дронов).
  - Hero tagline (`DebugWrapper id=10101`) теперь показывает `price` активного направления вместо статичного текста.
  - Таймер ротации оставлен `5000ms`, обновление индекса синхронизировано с `droneServiceItems.length`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(menu-socials): mobile burger footer icons (IG/TG/WA), LinkedIn removed (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В нижнем `border-t` блоке mobile burger меню текстовые кнопки `IG / TG / LI / WA` заменены на 3 иконки: Instagram, Telegram, WhatsApp.
  - LinkedIn удалён из footer social блока мобильного меню.
  - Telegram и WhatsApp SVG-иконки перенесены по аналогии с `components/drone/MobileBottomBar.tsx`.
  - Для Instagram добавлена иконка `Instagram` из `lucide-react`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(desktop-drone-service): header/process/intro + flight SEO block (11.04.2026) — `components/gazeta/SmartHeader.tsx`, `components/drone/DroneProcessStitch.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFlightConditionsNote.tsx`
  - В desktop nav `SmartHeader` для `sectionLinks` добавлен фильтр `href !== '#services'`, чтобы убрать дубль пункта `Услуги` (mobile burger без изменений).
  - В `DroneProcessStitch` обновлены названия шагов: `ЗАПРОС`, `ПЛАН`, `СЪЁМКА`, `ПЕРЕДАЧА`; для шага 02 описание изменено на `уточняем зону полёта`.
  - В desktop-блок процесса добавлен лейбл `От заявки до готовых файлов`; описания шагов сделаны видимыми (`text-sm text-gray-500` без `hidden`).
  - В desktop intro-блоке `/drone-service` абзац заменён на список из 4 тезисов; metadata-линия `DJI Air 3S + Avata 2 · 4K · ...` сохранена.
  - В `DroneFlightConditionsNote` добавлен SEO-параграф с техническим блоком по оборудованию (DJI Air 3S / DJI Avata 2 / Insta360 X5).
  - Build: `npm run build` — ✅ clean (local ready)

✅ refactor(menu): реструктура mobile burger menu в SmartHeader (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В mobile dropdown удалён блок `Индустрии` (`copy.mobileIndustriesLabel` + `copy.industryNavItems`).
  - Первым элементом меню добавлена full-width кнопка `/about` с текстом `{copy.aboutLabel}` (`О Нас` / `About`).
  - Блок `Услуги` (`copy.mobileServicesLabel` + `copy.serviceNavItems`) оставлен без структурных изменений.
  - В блоке `Разделы` удалён фильтр `href !== '#services'`: рендерятся все `sectionLinks`.
  - Добавлена автодобавка `{ label: 'Контакты', href: '#contact' }` в конец mobile-списка разделов, если `#contact` отсутствует.
  - Нижний `border-t` блок с CTA и соцсетями не изменялся.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(mobile-spacing): сжаты py/mb на мобиле в 4 компонентах drone-service (11.04.2026) — `components/drone/DroneServicesStitch.tsx`, `components/drone/DronePricingStitch.tsx`, `components/drone/DroneFAQExpanded.tsx`, `components/drone/DroneStatsStrip.tsx`
  - `DroneServicesStitch`: `py-24` → `py-8 md:py-24`.
  - `DronePricingStitch`: `py-24` → `py-10 md:py-24`, `mb-16` → `mb-8 md:mb-16`, `mt-10` → `mt-6 md:mt-10`, `mt-8` в addons-блоке удалён.
  - `DroneFAQExpanded`: `py-24` → `py-10 md:py-24`, header `mb-16` → `mb-8 md:mb-16`.
  - `DroneStatsStrip`: `py-14` → `py-8 md:py-14`, header `mb-8` → `mb-5 md:mb-8`, карточки `py-8` → `py-5 md:py-8`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(menu): О нас в меню, соцсети + CTA внизу мобильного меню (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В `headerCopy.RU.industryNavItems` первым пунктом добавлен `О нас` (`/about`).
  - В `headerCopy.EN.industryNavItems` первым пунктом добавлен `About` (`/about`).
  - В мобильное меню добавлен нижний блок с CTA `Обсудить задачу` (ссылка `#contact`) и соцкнопками `IG / TG / LI / WA`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(header): строка услуг скрыта на мобиле, заголовок меню исправлен (11.04.2026) — `components/gazeta/SmartHeader.tsx`
  - В блоке `shouldShowTickers` строка `Running Text Line 2` (`DebugWrapper id=209`) и разделитель перед ней обёрнуты в `hidden md:block`: на mobile скрыты, на desktop сохранены.
  - `Running Text Line 1` (`DebugWrapper id=208`) оставлена без изменений и продолжает отображаться на всех экранах.
  - В `headerCopy` обновлён `mobileMenuTitle`:
    - RU: `Навигация Gazeta` → `Breus Media`
    - EN: `Gazeta Navigation` → `Breus Media`
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(ui): мобильное меню + drone-service cleanup (11.04.2026) — `components/gazeta/SmartHeader.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneContactStitch.tsx`
  - На `/drone-service` удалён верхний breadcrumb `Главная → Аэросъёмка`.
  - В `DroneFooterStitch` соцкнопки переведены на иконки Instagram/Telegram/Facebook/LinkedIn; добавлен LinkedIn.
  - В `DroneContactStitch` обновлены тексты поля соцсетей: `ВАШИ СОЦСЕТИ ИЛИ САЙТ` и placeholder `@аккаунт, ссылка или название объекта.`
  - В mobile dropdown (`SmartHeader`) удалены верхние тексты `Breus Media` и `Навигация Gazeta`, скрыт элемент `#205` (Phone Connect) на mobile, убран пункт `Услуги` из блока `Разделы`, убрана нижняя CTA-кнопка `Обсудить проект`.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(process): тексты шагов обновлены — от заявки до готовых файлов (11.04.2026) — `components/drone/DroneProcessStitch.tsx`
  - В массиве `steps` обновлены все 4 шага: `ЗАДАЧА`, `ПОДГОТОВКА`, `СЪЁМКА`, `ГОТОВО` с новыми описаниями.
  - В mobile-блоке заголовок изменён с `Как мы работаем` на `От заявки до готовых файлов`.
  - Структура/классы/JSX компонента не изменялись, затронуты только тексты.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(process-mobile): горизонтальный скролл → вертикальный список со стрелками (11.04.2026) — `components/drone/DroneProcessStitch.tsx`
  - В mobile-блоке `DroneProcessStitch` удалён горизонтальный скролл, добавлен вертикальный список шагов (`Заявка → Подготовка → Съёмка → Материал`) с разделителями-стрелками.
  - Каждый шаг теперь отображает номер, заголовок и короткое описание в компактной карточке (`rounded-[8px]`, `bg-white/[0.03]`, `border-white/[0.07]`).
  - Desktop-ветка (`hidden md:grid`) и отступы секции `py-4 md:py-24` оставлены без изменений.
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(mobile): направления компактнее, процесс без пустого пространства (11.04.2026) — `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneProcessStitch.tsx`
  - `DroneServicesMobileList`: уплотнён mobile-блок направлений (`py-4`, `gap-1.5`, карточки `rounded-[8px]`, `py-1.5`, `text-[12px]`, стрелка-блок `mt-4`).
  - `DroneProcessStitch`: на mobile сокращены внешние отступы секции (`py-4`), добавлен `py-2` в горизонтальный scroll-контейнер, шаги ужаты до `h-9` и `min-w-[68px]`.
  - Desktop-ветка процесса (`md+`) не изменялась.
  - Build: `npm run build` — ✅ clean (local ready)

✅ feat(footer+contact): FB соцсеть, меню 5 ссылок, теги на мобиле, success-state формы (11.04.2026) — `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneContactStitch.tsx`
  - В `DroneFooterStitch` добавлена третья соцкнопка `FB` (`https://www.facebook.com/breusmedia`) в том же стиле, что `IG/TG`.
  - Footer-меню расширено до 5 ссылок: `Аэросъёмка`, `360° туры`, `Reels и видео`, `AI-визуализация`, `Контакты`.
  - В `DroneContactStitch` добавлен state `submitted` и success-state после submit (✅ + подтверждение по связи в Telegram/WhatsApp).
  - Блок `Интересующие услуги` снова показывается на mobile (убран `hidden md:block`).
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(contact+sticky): кнопка → Отправить заявку, sticky → Обсудить задачу, скрывать sticky при форме (11.04.2026) — `components/drone/DroneContactStitch.tsx`, `components/drone/MobileBottomBar.tsx`, `app/drone-service/page.tsx`
  - В `DroneContactStitch` submit-кнопка обновлена на `Отправить заявку`, на `<form>` добавлен `id=\"contact-form\"`.
  - В `MobileBottomBar` добавлены `useState/useEffect` и `IntersectionObserver` для скрытия панели при видимой форме (`#contact-form`), при этом все базовые классы позиционирования корневого `div` сохранены.
  - В `MobileBottomBar` default `primaryLabel` изменён на `Обсудить задачу`.
  - В `app/drone-service/page.tsx` синхронизированы тексты CTA:
    - `DroneStickyCta label=\"Обсудить задачу\"`
    - `MobileBottomBar primaryLabel=\"Обсудить задачу\"`
  - Build: `npm run build` — ✅ clean (local ready)

✅ fix(contact): форма обновлена — заголовок, поля, CTA, WhatsApp-ссылка с pretext (11.04.2026) — `components/drone/DroneContactStitch.tsx`
  - Заголовок обновлён на `ОБСУДИМ ВАШУ ЗАДАЧУ` (`text-[20px] md:text-3xl`), подзаголовок переписан и оставлен с `leading-snug` на всех размерах.
  - В `Способ связи` опция `Email` заменена на `Звонок`; placeholder обновлён с кейсом для `Звонок` (`+995 ...`).
  - Поле `Сайт, Instagram или адрес объекта` открыто на mobile (без `hidden md:block`), тип изменён на `text`, placeholder обновлён.
  - CTA-блок: submit-кнопка переименована в `Получить расчёт`; secondary CTA превращён в текстовую WhatsApp-ссылку с prefilled message.
  - Дисклеймер обновлён: `Нажимая кнопку, вы соглашаетесь на обработку контактных данных.`
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service contact CTA row lock (11.04.2026) — `components/drone/DroneContactStitch.tsx`
  - В форме `DroneContactStitch` контейнер кнопок `Отправить` и `WhatsApp` переведён в постоянный горизонтальный ряд на всех breakpoints.
  - Класс контейнера изменён с `flex flex-col ... sm:flex-row ...` на `flex flex-row gap-2 pt-0.5 md:pt-1`; `flex-1` у обеих кнопок сохранён (50/50).
  - Другие части формы не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service pre-deploy: 3 mobile fixes (11.04.2026) — `components/drone/DroneProcessStitch.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFlightConditionsNote.tsx`, `components/drone/DroneContactStitch.tsx`
  - Три pre-deploy задачи выполнены (Process compact mobile, MapStitch removed, Contact mobile-fit). Страница готова к деплою.
  - `DroneProcessStitch`: на мобиле включён компактный горизонтальный ряд шагов, описания и крупные фоновые номера скрыты; desktop-версия сохранена.
  - `app/drone-service/page.tsx`: удалён рендер секции карты (`DroneMapStitch`), компонент-файл сохранён.
  - `DroneFlightConditionsNote`: текст упрощён до формулировки про регламент GCAA и проверку зоны до выезда.
  - `DroneContactStitch`: mobile-форма уплотнена под 390×844; на мобиле скрыты поля `Ваше имя`, `Интересующие услуги`, `Ссылка на объект` и дисклеймер.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service schema update: ItemList (18 направлений) (11.04.2026) — `app/drone-service/page.tsx`
  - Добавлен новый JSON-LD `<script type="application/ld+json">` с `@type: ItemList` для страницы `/drone-service`.
  - Схема вставлена сразу после блока `{jsonLdSchemas.map(...)}` и до `<DronePageScrollProgress />`.
  - В `ItemList` зафиксированы `numberOfItems: 18` и `itemListElement` из 18 направлений с canonical URL на `breus.media`.
  - Существующие schema-блоки и остальные секции страницы не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service tiny copy fixes: related label + hero source suffix (11.04.2026) — `components/drone/DroneRelatedLinksCompact.tsx`, `components/drone/DroneHeroStitch.tsx`
  - В `DroneRelatedLinksCompact` удалён дублирующий строчный лейбл над `h2`; оставлен только заголовок `Другие услуги Breus Media`.
  - В mobile-блоке `DroneHeroStitch` строка про `68%` уточнена источником: `Объекты с аэровидео продаются на 68% быстрее (MLS / NAR).`
  - Desktop-hero и структура блока related links не менялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service data cleanup: roof inspection card removed (11.04.2026) — `components/drone/droneServicesData.ts`
  - Из массива `droneServiceItems` удалена карточка с `title: Инспекция крыш` (`slug: inspekciya-krysh`) по прямому запросу.
  - Остальные карточки в `droneServicesData.ts` не изменялись.
  - Сопутствующие компоненты (`Hero`, `Pricing`, `FAQ`) не затрагивались.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service related links + data fixes (11.04.2026) — `constants/droneDirectionPages.ts`, `components/drone/droneServicesData.ts`, `components/drone/DroneRelatedLinksCompact.tsx`
  - Для `droneDirectionPages.droneService` полностью заменён массив `relatedLinks` на 4 блока: `360° виртуальные туры`, `Reels и короткое видео`, `Промо-видео`, `AI-визуализация` с новыми `href`.
  - В `DroneRelatedLinksCompact` обновлён заголовочный блок: eyebrow и `h2` заменены на `Другие услуги Breus Media` (структура и стили без изменений).
  - В `droneServicesData` обновлены 2 карточки:
    - `Недвижимость`: `68%` → `94% ... HomeJab` в описании
    - `Инспекция крыш`: `primaryHref` → `/drone-services/drone-roof-inspection`
  - `relatedLinks` других страниц, hero/pricing/faq компоненты не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile content cleanup + compact contact form (11.04.2026) — `components/drone/DroneServicesStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneContactStitch.tsx`
  - В секции карточек `/drone-service` удалён заголовок `Направления съёмки` и золотая линия над гридом услуг для более чистого перехода от mobile hint к карточкам.
  - В `DroneServicesMobileList` убран двухстрочный поясняющий текст под списком; оставлен только CTA-якорь `смотреть карточки` со стрелкой на `#services`.
  - Контактная форма (`DroneContactStitch`) уплотнена под mobile: уменьшены внешние/внутренние отступы, интервалы между полями, размеры чипов, высота textarea и кнопок.
  - Desktop-поведение сохранено через `md:`-классы; логика полей и отправки не менялась.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service content batch: stats + faq + mobile hint + trust removal (10.04.2026) — `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneStatsStrip.tsx`, `app/drone-service/page.tsx`, `components/drone/DroneFAQExpanded.tsx`
  - В mobile-список направлений (`#directions`) добавлен нижний hint-блок: пояснение про отдельные страницы + bounce-стрелка `смотреть карточки` с якорем `#services`.
  - На `/drone-service` удалён из рендера блок `DroneTrustLite` («НАМ ДОВЕРЯЮТ») — компонент оставлен в проекте, но не используется на странице.
  - Добавлен новый блок `DroneStatsStrip` (4 карточки: `68%`, `94%`, `403%`, `73%`) и вставлен между `DroneServicesStitch` и `DronePricingStitch`.
  - В `DroneFAQExpanded` полностью заменён массив FAQ на 8 новых вопросов/ответов по стоимости, FPV, географии, разрешениям, форматам и срокам.
  - `DroneHeroStitch.tsx`, `droneServicesData.ts` и pricing-карточки не изменялись.
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile UX polish (10.04.2026) — `components/drone/DroneHeroStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `components/drone/DroneServicesStitch.tsx`, `components/drone/MobileBottomBar.tsx`
  - Mobile hero copy обновлён под новый бриф: усилен оффер-блок (`С земли не видно главного...`, `68% быстрее`, технология FPV, результат для рекламы/инвестора/страховой).
  - Блок стрелки/подписи в hero переработан: стрелка отдельной строкой над подписью, текст `19 направлений — найдите своё · от 250 ₾`, поднят выше для безопасной зоны экрана.
  - Mobile список направлений уплотнён для отображения в пределах одного экрана: уменьшены паддинги/гапы, удалён нижний hint-блок, заголовок обновлён на `Направления съёмки`.
  - Якорный переход к `#directions` стабилизирован (`scroll-mt-20`), ссылки направлений ведут на карточки внутри страницы (`#service-[slug]`), а не на внешние L3.
  - Для нечётного количества направлений (19) последняя карточка списка растягивается на 2 колонки (убран пустой чёрный блок снизу).
  - В карточках services (`/drone-service`) вместо одной кнопки `Подробнее` добавлены 2 CTA: `Открыть услугу` + `Обсудить задачу`.
  - В mobile bottom bar заменены `W/T` на реальные иконки WhatsApp/Telegram и задан фирменный цвет: WhatsApp (`#25D366`), Telegram (`#229ED9`).
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service mobile hero typewriter + directions list (10.04.2026) — `components/drone/DroneHeroStitch.tsx`, `components/drone/DroneServicesMobileList.tsx`, `app/drone-service/page.tsx`
  - Mobile hero переведён на typewriter-сценарий: `АЭРОСЪЁМКА / ДЛЯ БИЗНЕСА / В ГРУЗИИ` с курсором, одноразовый запуск при монтировании.
  - После печати добавлены staged fade-in слои на mobile: описание (`+400ms`), pill `от 250 ₾` (`+800ms`), chevron к `#directions` (`+1200ms`).
  - Desktop-hero сохранён без изменений: существующий контент вынесен в `hidden md:block`.
  - Удалён mobile chips-блок в hero; нижняя hero-стрелка ограничена desktop (`hidden md:block`) для устранения дублирования.
  - Добавлен новый mobile-only блок `DroneServicesMobileList` с 19 направлениями (2 колонки, ссылки на `primaryHref`, fallback `#contact`) и нижним hint-блоком.
  - В `app/drone-service/page.tsx` список вставлен между hero и services; существующий вводный trust-блок переведён в `hidden md:block` (desktop-only).
  - Build: `npm run build` — ✅ clean (local ready)

✅ drone-service L2 Perplexity audit fixes (10.04.2026) — `app/drone-service/page.tsx`
  - Добавлен вводный текст перед карточками направлений (150 слов, SEO-контент)
  - Добавлена trust strip: оборудование, 4K, география, цена от 250 ₾
  - Подключены `DroneStickyCta` + `MobileBottomBar` (sticky CTA для десктопа и мобильного)
  - Добавлен mid-page CTA после карточек направлений
  - Проверены все 19 href карточек направлений на существование страниц (0 битых ссылок), для тонких страниц добавлены TODO в `components/drone/droneServicesData.ts`
  - Build: `npm run build` — ✅ clean

✅ drone-service pricing sync from drone-restaurants (10.04.2026) — `components/drone/DronePricingStitch.tsx`
  - В `DronePricingStitch` пакеты `drone-service` синхронизированы с `app/drone-services/drone-restaurants/page.tsx` по структуре и copy.
  - Синхронизированы 4 карточки: `Полёт снаружи`, `Пролёт внутри (FPV)`, `Полная съёмка`, `Съёмка с готовым результатом`.
  - Перенесены `subtitle`, `items`, `note`, CTA `Обсудить этот пакет →` и бейдж `Выгодно` для `Полная съёмка`.
  - Блок `Дополнительно по задаче` синхронизирован с ресторанной страницей:
    - `Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾`
    - `Монтаж ролика 30–60 сек для сайта: +150 ₾`
    - `360° панорама с воздуха: +80 ₾`
  - Build: `npm run build` — ✅ clean

✅ drone-service contact form pilot field (10.04.2026) — `components/drone/DroneContactStitch.tsx`
  - В форму добавлено новое опциональное поле:
    - label: `ССЫЛКА НА ОБЪЕКТ (необязательно)`
    - placeholder: `Instagram, сайт, Google Maps — любая ссылка`
  - Поле `Ваше имя` сделано необязательным (убраны `*` и `required`).
  - В `Интересующие услуги` заменено значение `Аэросъемка` на `Инспекция`.
  - Порядок услуг в чипах приведён к согласованному:
    - `Недвижимость`, `Отели`, `Рестораны`, `Туризм`, `Инспекция`, `Мониторинг`.

✅ drone-service L2 hub cleanup (09.04.2026) — `app/drone-service/page.tsx`, `constants/droneDirectionPages.ts`, `lib/seo/directionSeo.ts`, `components/drone/DronePricingStitch.tsx`
  - Убраны секции: `DroneSocialProofStitch` (placeholder), `DroneGoogleTrustLite` (Google-отзывы отсутствуют)
  - Порядок секций: Hero → Services → Pricing → Trust → Process → Flight Note → Map → FAQ → Related → Contact → Footer
  - Metadata: убрано слово «Профессиональная», добавлены openGraph + twitter cards, canonical на `breus.media`
  - Schema: AggregateOffer 250–2600 ₾, areaServed массив городов, telephone реальный, BreadcrumbList берётся из `buildDirectionJsonLd`
  - FPV-карточка: добавлено пояснение что такое FPV-дрон для людей не в теме
  - Pricing sync: 4 пакета (`250/350/500/от 900 ₾`) + add-ons (`+150/+150/+80 ₾`)
  - Домен: все URL в schema и canonical — `breus.media`
  - Build: `npm run build` — ✅ clean

✅ drone-service cards copy+visual refresh (09.04.2026) — `components/drone/droneServicesData.ts`, `public/media/drone-service/*`
  - На `/drone-service` обновлён контент карточек по новому пакету текстов пользователя: подзаголовки (`category`), описания (`description`) и теги (`price`) для ключевых карточек витрины.
  - Переименована карточка `Аэросьемка для авто и автосалонов` → `Автосалоны и шоурумы`.
  - Карточки переведены с внешних image URL на локальные project assets в `public/media/drone-service`.
  - Финальные локальные изображения подключены для карточек:
    - `Недвижимость`, `Мониторинг стройки`, `FPV Съёмка`, `Отели & Курорты`, `Рестораны`, `Туризм и локации`, `Мероприятия`, `Инспекция объектов`, `Мониторинг территорий`, `Съёмка интерьеров и складов`, `Спорт комплексы`, `Реклама и бренд видео`, `Автосалоны и шоурумы`, `Агро и виноделие`, `Инспекция крыш`, `Регулярные аэроотчёты`.
  - Добавлены локальные файлы:
    - `real-estate-1.png`, `construction-monitoring-1.png`, `fpv-2.png`, `hotels-resorts-5.png`, `restaurants-3.png`, `tourism-6.png`, `events-1.png`, `object-inspection-from-territory-1.png`, `territory-monitoring-2.png`, `interiors-warehouses-1.png`, `sport-complex-1.png`, `brand-video-1.png`, `auto-showroom-1.png`, `agro-wine-1.png`, `roof-inspection-1.png`, `reporting-1.png`.

✅ drone-restaurants EN sync (09.04.2026) — `app/drone-services/drone-restaurants/page.en.tsx`
  - Alt-теги: 3 уникальных EN-описания
  - highPrice: 2200 → 1300
  - seoAnswers и shortQA обёрнуты в <details> (Click to expand)
  - «restaurant drone videography» добавлено в seoAnswer
  - «Book restaurant drone filming in Tbilisi» добавлено в PRE-CONTACT CTA
  - scroll-mt-20 lg:scroll-mt-24 на #pricing и #contact

✅ SmartHeader CTA override for drone-restaurants RU+EN (09.04.2026) — `components/gazeta/SmartHeader.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В `SmartHeader` добавлен optional prop `ctaHref?: string`
  - Сохранён текущий fallback без изменений: `contactHref = isLanding ? "#contact" : "/gazeta#contact"`
  - Добавлен `resolvedCtaHref = ctaHref ?? contactHref`
  - Desktop CTA и mobile-menu CTA переведены на единый `resolvedCtaHref`
  - На RU/EN страницах ресторана передан `ctaHref="#contact"` в `SmartHeader`
  - Поведение страниц без `ctaHref` сохранено (fallback как прежде)
  - Build: `npm run build` — ✅ clean

## ТЕКУЩИЙ ФОКУС — 08.04.2026

Активная задача: дрон-витрины по шаблону drone-restaurants
  → следующие страницы: drone-hotels · drone-sport · drone-wine · drone-tourism · drone-auto

Готово к запуску: CODEX_PROMPT_SCROLL_FIX.md — фикс скролла NichesStack мобайл

Заморожено: Reels L3 · Promo L3 · English translations (после витрин)

Новые файлы в корне проекта:
  CLAUDE.md — читается Codex автоматически каждую сессию
  AI_AGENT_BRIEFING.md — контекст для любой среды
  DEBUG_KNOWN_ISSUES.md — живой трекер багов
# КОНТЕКСТ — Breus Media
### Обновлён: 8 апреля 2026 (gazeta mobile rail touch-action fix, docs synced)

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- GitHub: https://github.com/TonyBreus/breus-media-v2
- Ветка: main
- Последний кодовый коммит: `footer: remove unavailable menu items` (07.04.2026) — `components/drone/DroneFooterStitch.tsx`

✅ drone-restaurants anchor audit force-reapply (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Подтверждено, что в целевой странице якоря присутствуют на корневых секциях:
    - `#pricing` на секции «Пакеты и цены»
    - `#contact` на секции с `DroneRestaurantsContactForm`
  - Для фиксации аудита выполнен force-touch JSX этих двух секций без изменения поведения:
    - сохранены `id="pricing"` / `id="contact"`
    - сохранены `scroll-mt-20 lg:scroll-mt-24`
  - `#faq` не менялся
  - Build: `npm run build` — ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants Perplexity + Cowork audit fixes (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/shared/FaqSection.tsx`
  - Alt-теги трёх изображений formatExampleCards заменены на уникальные описательные
  - serviceSchema highPrice изменён с 2200 на 1300 (900 + все аддоны)
  - Блоки seoAnswers и shortQA обёрнуты в <details> — визуально свёрнуты, HTML рендерится для SEO
  - В seoAnswers добавлена фраза «видеосъёмка ресторана дроном» (ответ про привлечение гостей)
  - В PRE-CONTACT CTA добавлена фраза «заказать съёмку ресторана дроном в Тбилиси»
  - FaqSection: проверен/исправлен проброс id на корневой <section>
  - Секции #pricing, #contact, #faq: добавлен scroll-mt-20 lg:scroll-mt-24 для корректного якорного скролла под sticky header
  - Build: npm run build — ✅ clean

✅ drone-restaurants Perplexity audit fixes (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Alt-теги трёх изображений formatExampleCards заменены на уникальные описательные
  - serviceSchema highPrice изменён с 2200 на 1300 (900 + все аддоны)
  - Блоки seoAnswers и shortQA обёрнуты в <details> — визуально свёрнуты, HTML рендерится для SEO
  - В seoAnswers добавлена фраза «видеосъёмка ресторана дроном» (ответ про привлечение гостей)
  - В PRE-CONTACT CTA добавлена фраза «заказать съёмку ресторана дроном в Тбилиси»
  - Build: npm run build — ✅ clean

✅ drone-hotels-tourism visual/text parity with drone-restaurants (09.04.2026) — `app/drone-hotels-tourism/page.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В hero отеля удалён бейдж `Hotels & Tourism Drone Content`, заголовок обновлён на `Аэросъёмка...`
  - Hero copy на отеле обновлён (новые абзацы + разделение длинного текста на отдельные параграфы)
  - Карточка `Коротко` в hero отеля обновлена под новый текст и тайминги
  - На отеле добавлен блок `Как это выглядит` со слайдером и блок `Примеры по форматам` после `Что вы получаете`
  - Отель переключён на те же изображения, что ресторан: `services-images/drone-restaurants/final/1.png`, `2.png`, `3.png`
  - Заголовок секции проблем унифицирован:
    - RU (restaurant + hotel): `Что обычно говорят перед съёмкой?`
    - EN (restaurant): `What do people usually say before filming?`
  - В секции `Что снимаем — и какую задачу это решает` на отеле обновлён текст и добавлены 5 карточек-результатов (как в ресторане)
  - В секции `Что вы получаете` на отеле блок файлов переведён в карточный формат `Как устроены файлы` (как в ресторане)
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants mobile pricing UX optimization (09.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В `Сравнение пакетов` добавлен отдельный мобильный режим без горизонтального скролла (`md:hidden`): компактные карточки-матрицы по каждому параметру
  - Десктопная таблица сохранена без изменений (`md:block`)
  - В `Пакеты и цены` карточки на мобильном уплотнены примерно на 10% по высоте:
    - уменьшены mobile padding/spacing
    - снижены mobile размеры цены/подписей/notes/кнопки
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ gazeta mobile rail touch-action handoff fix (08.04.2026) — `components/gazeta/NichesStack.tsx`
  - На контейнер горизонтального rail карточек с `servicesRailRef` добавлен inline style `touchAction: "pan-x"`.
  - Фикс ограничен мобильной rail-зоной через `useMobileHorizontalServicesRail`; desktop-поведение и non-rail ветка не менялись.
  - Логика стрелок `handleCardRailScroll` и внутренний vertical scroll (`contentScrollRef`, touch handlers) не изменялись.
  - Цель: убрать конфликт touch-событий между внешним vertical page scroll и горизонтальным свайпом карточек внутри rail.
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`, `DEBUG_KNOWN_ISSUES.md`

✅ drone-restaurants pricing comparison + short QA blocks (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В обе версии страницы добавлен новый post-pricing слой сразу после `addonPricing`:
    - `Сравнение пакетов / Package comparison`
    - `Как выбрать пакет / How to choose`
  - Таблица сравнения выводит рядом все 4 пакета (`250 / 350 / 500 / от 900 ₾`) по ключевым параметрам:
    - цена
    - aerial 4K video
    - interior FPV pass
    - photos
    - editing
    - social-ready clips
    - Google Maps video
    - time on site
    - file delivery
  - Helper-блок добавлен как быстрый routing layer для выбора пакета под задачу
  - Рядом с `seoAnswers` в обеих версиях добавлена новая константа `shortQA`
  - После секции подробных SEO-ответов и перед `relatedServices` добавлен новый AI-search блок:
    - `Коротко о главном`
    - `Quick answers`
  - `shortQA` закрывает короткие высокочастотные вопросы по цене, составу съёмки, FPV inside, срокам, разрешениям, бизнес-ценности и географии
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants package timing wording update (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В `pricingCards` обеих версий обновлены формулировки времени на объекте только внутри `items`
  - RU:
    - `До 1,5 часов работы на объекте` -> `Около 1,5 часов на объекте — от подготовки до финального дубля`
    - `До 2,5 часов работы на объекте` -> `Около 2,5 часов на объекте — от подготовки до финального дубля`
  - EN:
    - `Up to 1.5 hours on site` -> `About 1.5 hours on site — from setup to final take`
    - `Up to 2.5 hours on site` -> `About 2.5 hours on site — from setup to final take`
  - Пакеты `Съёмка с готовым результатом / Full Package` не менялись
  - Build: не запускался, так как это 6 точечных copy-замен без структурных изменений
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants SEO/GEO boost for RU+EN (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-services/drone-restaurants/page.en.tsx`
  - В RU и EN metadata добавлены `alternates.languages` (`hreflang`) для двуязычной связки `/drone-services/drone-restaurants` <-> `/drone-services/drone-restaurants/en`
  - В обе версии добавлены `twitter` cards (`summary_large_image`) для social sharing
  - В обе страницы добавлен `breadcrumbSchema` (`BreadcrumbList`) и подключён отдельным `<script type="application/ld+json">`
  - В `serviceSchema.areaServed` обеих версий расширено GEO-покрытие с одного `Place` до массива городов `Tbilisi / Batumi / Kutaisi`
  - В RU и EN добавлены новые GEO-секции с районами Тбилиси:
    - `Где мы снимаем в Тбилиси`
    - `Where we shoot in Tbilisi`
  - В `faqItems` обеих версий добавлен GEO-вопрос по районам Тбилиси и дополнительным городам/регионам (`Batumi`, `Kutaisi`, `Kakheti`)
  - В `faqSchema` обеих версий добавлен соответствующий GEO FAQ для search enrichment
  - В EN-версии дополнительно обновлён copy:
    - hero: `Photos and handheld video...`
    - hero delivery line: `We shoot, edit, and deliver...`
    - hero aside bullet: `We shoot and edit — you just publish`
    - `Aerial Shot` note: более прямое описание self-service использования
    - `seoAnswers`: сроки и выдача файлов переформулированы в более compact English
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants EN page + RU/EN header switch + hero overlap fix (07.04.2026) — `app/drone-services/drone-restaurants/page.en.tsx`, `app/drone-services/drone-restaurants/en/page.tsx`, `app/drone-services/drone-restaurants/page.tsx`, `components/gazeta/SmartHeader.tsx`
  - Создана полноценная английская версия страницы в отдельном файле `app/drone-services/drone-restaurants/page.en.tsx` с адаптированным English copy, EN metadata, EN FAQ/SEO-ответами и переведённым `schema.org`
  - Для реального маршрута добавлен реэкспорт `app/drone-services/drone-restaurants/en/page.tsx`; в build подтверждён новый static route `/drone-services/drone-restaurants/en`
  - На `drone-restaurants` подключён рабочий language switch через `SmartHeader`: `RU -> /drone-services/drone-restaurants`, `EN -> /drone-services/drone-restaurants/en`
  - `SmartHeader` переведён в переиспользуемый RU/EN режим для будущих локализованных страниц:
    - добавлены `initialLang` и `languageLinks`
    - переведены sticky header labels: `About`, `Industries`, `Services`, `AI Solutions`, `Discuss Project`
    - переведены dropdown-списки, mobile menu и обе бегущие строки
  - Для EN-версии локализованы общие компоненты вокруг страницы через optional props:
    - `DroneStickyCta`
    - `MobileBottomBar`
    - `DroneRestaurantsContactForm`
    - `FormatExamplesSlideshow`
    - `DroneFooterStitch`
  - После включения бегущих строк hero-контент на RU и EN страницах опущен ниже (`pt-40 md:pt-48`), чтобы ticker lines больше не перекрывали заголовок
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants faq/seo/schema sync + pricing cleanup (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В `addonPricing` удалён add-on `10 обработанных фотографий: +60 ₾`
  - Обновлены `faqItems`: съёмка внутри, области использования материалов, стоимость, финальная выдача файлов
  - Обновлены `seoAnswers`: стоимость, формулировка `Она отвечает...`, съёмка внутри, сроки и выдача файлов
  - Синхронизирован `faqSchema` / schema.org с теми же новыми формулировками по цене, интерьерной съёмке и выдаче
  - В блоке `Дополнительно по задаче` удалена нижняя фраза про материалы под сайт / соцсети / GBP / presentation venue
  - В pricing-карточках и surrounding copy завершены последние copy-уточнения для `250 / 350 / 500 / от 900 ₾`
  - Build: текстовые правки не проверялись отдельно после этого мини-батча; последний полный `npm run build` для страницы был `✅ clean`
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants pricing/content refinement + footer render cleanup (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone/DroneFooterStitch.tsx`
  - В блоке `Зоны съёмки` формулировка FPV обновлена на `FPV полёт сквозь пространство: детали интерьера в движении`
  - В шаге `Шаг 5 / Передача файлов` удалена фраза про включённый раунд правок
  - Переписаны intro-абзацы секции `Пакеты и цены`
  - Все 4 pricing-карточки обновлены по новому copy: `250 / 350 / 500 / от 900 ₾`, включая subtitles, пункты и notes
  - В карточке `500 ₾` бейдж `Выгодно` перенесён к цене, чтобы освободить верхнюю строку и визуально выровнять уровень цены
  - В карточке `от 900 ₾` убраны лишние формулировки про `всё под ключ`, разложенные папки и длинный note
  - В `DroneFooterStitch` убрана оставшаяся `inactive`-ветка рендера после удаления пунктов меню; `Контакты` остаются обычной ссылкой `#contact`
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants format visuals dual placement (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone-restaurants/FormatExamplesSlideshow.tsx`
  - В блоке `Как это выглядит` удалена заглушка `Видео появится здесь`; добавлен слайдер из локальных файлов `services-images/drone-restaurants/final/1.png`, `2.png`, `3.png`
  - Слайдер крутит изображения по очереди каждые `3s` (fade transition)
  - Секция `Примеры по форматам` сохранена как второе место на странице и снова показывает 3 карточки, но теперь на тех же новых локальных изображениях (статично, без ротации)
  - Build: `npm run build` ✅ clean
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ drone-restaurants hero copy/layout refresh (07.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - В hero удалена фраза `Restaurant Drone Filming in Tbilisi, Georgia`
  - Основной текст заменён на новый расширенный copy-блок про аэрофото/FPV и полный цикл
  - Для desktop hero поднят выше и уплотнён по вертикали: уменьшены `pt/pb`, выравнивание grid изменено на `items-start`
  - Текст сделан крупнее и шире без роста вертикали: введена двухколоночная подача (`lg:columns-2`) + кнопки CTA остаются в первом экране блока
  - Сопутствующие контекстные файлы синхронизированы: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ footer menu items removed sitewide (07.04.2026) — `components/drone/DroneFooterStitch.tsx`
  - В колонке `Меню` удалены пункты `Портфолио`, `Оборудование`, `Карта полётов` (они больше не рендерятся)
  - `Контакты` оставлены рабочей ссылкой `#contact` без изменений
  - Изменение распространяется на все страницы, где используется общий компонент `DroneFooterStitch`
  - Сопутствующие контекстные файлы синхронизированы отдельным doc-коммитом

✅ footer dead links sweep (audit-only) (07.04.2026) — `components/drone/DroneFooterStitch.tsx`, `components/drone/DroneFooter.tsx`, `app/real-estate-2/page.tsx`
  - Выполнен повторный аудит всех футеров в проекте: целевые пункты `Портфолио`, `Оборудование`, `Карта полётов` найдены только в `DroneFooterStitch`
  - Подтверждено текущее состояние `DroneFooterStitch`: три неактивных пункта уже рендерятся как `span` с `className="text-white/40 cursor-default"`, `Контакты` остаётся рабочей ссылкой `#contact`
  - В `DroneFooter` и inline footer на `/real-estate-2` целевые пункты отсутствуют; кодовые изменения не требовались
  - Зафиксирована только doc-only синхронизация: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`

✅ footer dead links class fix + 360-tour-restaurants route fix (07.04.2026) — `components/drone/DroneFooterStitch.tsx`, `app/drone-services/drone-restaurants/page.tsx`
  - В `DroneFooterStitch` неактивным пунктам `Портфолио`, `Оборудование`, `Карта полётов` добавлен `cursor-default`; рабочий пункт `Контакты` не менялся
  - На странице `/drone-services/drone-restaurants` related service ссылка на ресторанный 360° тур исправлена с `/360-tour-services/360-tour-restaurants` на `/360-tour-restaurants`
  - Сопутствующие контекстные файлы синхронизированы в тот же коммит

✅ drone-restaurants visuals + footer cleanup (06.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `components/drone-restaurants/HeroSlideshow.tsx`, `components/drone/DroneFooterStitch.tsx`
  - Hero секция ресторана переведена с одного background-image на отдельный client-компонент `HeroSlideshow` с 4 Unsplash-слайдами, fade transition `1s` и autoplay `4s`
  - Сразу после hero добавлен большой `VIDEO_SLOT` placeholder-блок с preview-изображением и play-overlay
  - После секции «Что вы получаете» добавлен второй visual block с тремя форматами: exterior aerial, FPV interior, finished reel
  - Блок «Как организованы файлы» заменён на карточки папок: `Сайт`, `Соцсети`, `Google Maps`, `Архив`
  - В `DroneFooterStitch` мёртвые `href="#"` ссылки (`Портфолио`, `Оборудование`, `Карта полетов`) заменены на неактивные `span`, `Контакты` теперь ведёт на `#contact`
  - Build: `npm run build` ✅ clean

✅ restaurant + hotel pricing patch (04.04.2026) — `app/drone-services/drone-restaurants/page.tsx`, `app/drone-hotels-tourism/page.tsx`
  - Обе страницы переведены на локальный `PricingPackage` тип вместо старой жёсткой структуры deliverables
  - Полностью заменены ценовые массивы: 4 пакета (`250 ₾`, `350 ₾`, `500 ₾`, `от 900 ₾`) + новый список add-ons
  - Hero aside на обеих страницах обновлён на `от 250 ₾`
  - Секция «Пакеты и цены» переписана под fixed-price copy и новый JSX карточек (`subtitle`, `note`, `popular`)
  - FAQ / SEO-ответы про цену и `serviceSchema.offers.lowPrice` синхронизированы с новой матрицей
  - Build: `npm run build` ✅ clean
✅ drone-hotels-tourism hospitality copy standardization (04.04.2026) — `app/drone-hotels-tourism/page.tsx`
  - Новая ценовая структура: 4 карточки (`250 / 350 / 500 / от 900 ₾`) + add-ons
  - Убраны англицизмы и жаргон: `hero video`, `cuts`, `stills`, `OTA`, `deliverables` и т.д.
  - Hero aside: `от 250 ₾`, выдача `от 24 ч`
  - Deliverables-блок: убраны противоречия, добавлены понятные папки выдачи
  - `whyUsCards` и `nicheCards` переписаны на человеческий язык
  - FAQ: обновлены ответы про цену и сроки
  - `serviceSchema`: `lowPrice=250`, `offerCount=4`
  - Build: `npm run build` ✅ clean

## ЧТО СДЕЛАНО И ЗАКРЫТО
✅ Consolidation audit (02.04.2026) — все About/trust/process блоки подтверждены в main:
  - `components/gazeta/AboutSection.tsx` ✓
  - `components/gazeta/HowWeWorkSection.tsx` ✓
  - `components/gazeta/ExperienceTrustSection.tsx` ✓
  - `app/about/page.tsx` (460 строк) ✓
  - `components/gazeta/SmartHeader.tsx` — ссылка "О Нас" → `/about` ✓
  - `app/gazeta/page.tsx` — полная цепочка: Hero → Marquee → About → HowWeWork → ExperienceTrust → NichesStack ✓
  - Сервер: единственный на порту 3200 (desktop: http://localhost:3200, LAN: http://192.168.1.2:3200)

✅ Hero media structure + local video wiring (02.04.2026) — `components/gazeta/HeroSection.tsx`
  - Создана папка `/public/media/hero/video/` — кладите сюда `breus-hero-demo.mp4`
  - Создана папка `/public/media/hero/posters/` — кладите сюда `breus-hero-demo-poster.jpg`
  - HeroSection.tsx переключён с Pixabay CDN на локальные пути + `poster` атрибут
  - autoPlay / loop / muted / playsInline сохранены без изменений
  - Graceful fallback: если файл отсутствует — показывается poster (чёрный фон), лаяут не ломается
  - Swap: просто заменить файл в папке, код менять не нужно
  - Build: ○ /gazeta (Static) ✓
✅ drone-restaurants hero aside micro-patch (04.04.2026) — `app/drone-services/drone-restaurants/page.tsx`
  - Hero aside карточка «КОРОТКО» уточнена: «Полёт + видеофайлы. Монтаж — отдельно.»
  - Срок выдачи в aside изменён на «от 24 ч»
  - Сопутствующие контекстные файлы обновлены: `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md`
  - Build: ✅ clean
✅ DebugWrapper h-full fix — hero video fills screen (02.04.2026) — `components/debug/DebugWrapper.tsx`
  - Root cause: in debug mode DebugWrapper inserts a `data-debug-content` inner div that did NOT inherit `h-full` from the outer wrapper className
  - Effect: video container had only intrinsic height (~219px) instead of full screen
  - Fix: `data-debug-content` div now gets `h-full` when the wrapper className includes `h-full`
  - No layout changes to HeroSection.tsx or any page file
  - Build: clean ✓
✅ Hero poster generated from video frame (02.04.2026) — `public/media/hero/posters/breus-hero-demo-poster.jpg`
  - Кадр извлечён из `breus-hero-demo.mp4` (t=0.5s) с помощью VLC CLI
  - Разрешение: 1920×1088, JPEG, ~505KB
  - `poster` атрибут уже прописан в HeroSection.tsx — изменений в коде не потребовалось
  - Замена постера: заменить файл по пути `/public/media/hero/posters/breus-hero-demo-poster.jpg`

✅ Visual Asset Inventory Audit (02.04.2026) — `BREUS_MEDIA_VISUAL_ASSET_INVENTORY.md`
  - Охват: `/gazeta`, все L2 хабы, представительные L3 страницы
  - Главный вывод: 100% медиа — внешний (Unsplash + Pixabay), `/public/` содержит только SVG
  - Hero-видео на `/gazeta` — Pixabay плейсхолдер (природа), не связан с агентством
  - Единственная страница с реальным видео: `/promo-video/promo-hotel` (YouTube embed)
  - 63 слота в NichesStack заполнены Unsplash; все L3 (drone, ai-visual, reels) — полностью текстовые
  - Следующий batch (без рефакторинга): замена hero-video → демо-рил; +2–3 YouTube embeds; +3–5 niche фото
✅ HowWeWorkSection (02.04.2026) — `components/gazeta/HowWeWorkSection.tsx` + `app/gazeta/page.tsx`
  - Компактный блок «Как мы работаем» — 4 шага, text-first, без fake-данных
  - Шаги: Бриф и задача → Исследование → Производство → Упаковка и сдача
  - AI упомянут как практический слой ускорения исследования, не как buzzword
  - Размещение: между AboutSection и NichesStack (перед FAQ/contact), DebugWrapper id={26}
  - Build: ○ /gazeta (Static) ✓
✅ ExperienceTrustSection (02.04.2026) — `components/gazeta/ExperienceTrustSection.tsx` + `app/gazeta/page.tsx`
  - 12 нишевых контекстов в сетке — честный перечень реального опыта без fake-логотипов
  - Размещение: между HowWeWorkSection и NichesStack, DebugWrapper id={28}
  - Build: ○ /gazeta (Static) ✓
✅ /about page (02.04.2026) — `app/about/page.tsx` + `components/gazeta/SmartHeader.tsx`
  - Полная B2B страница «О студии» — 9 секций, server component, без `"use client"`
  - Секции: Hero · Who We Are · Approach · What We Do · AI Layer · Experience Areas · Process · Geography · CTA
  - DebugWrapper IDs: 20100–21000
  - SmartHeader «О Нас» nav link → `/about` (вместо `#market-reality`)
  - Честные данные: 16 реальных ниш, 6 форматов, 4 принципа подхода, 5 шагов процесса
  - WhatsApp primary CTA, Telegram secondary, контакт +995 574 619 393
  - Build: ○ /about (Static) ✓
✅ About Section (02.04.2026) — `components/gazeta/AboutSection.tsx` + `app/gazeta/page.tsx`
  - Новый компактный блок «О студии» между MarqueeSection и NichesStack на `/gazeta`
  - Eyebrow badge, заголовок «Производство контента, которое работает на задачу.», 3 абзаца, CTA «О студии подробнее» → `/about`
  - framer-motion whileInView анимации, DebugWrapper id={25}
  - Тон: серьёзный, аналитический, B2B, без fake-метрик и клиентских логотипов
  - Билд: OK

✅ Hero title staggered reveal (01.04.2026) — `components/gazeta/HeroSection.tsx`
  - `Breus Media` h1 теперь анимируется при загрузке: каждая буква поднимается снизу (y: 24→0) с opacity 0→1
  - Stagger: 55ms между буквами (общая длительность ~1.1s), ease [0.22, 1, 0.36, 1]
  - Scroll-поведение (kinetic shrink → логотип) сохранено без изменений
  - `prefers-reduced-motion`: анимация мгновенная (initial = конечное состояние)
  - `aria-label="Breus Media"` добавлен на h1 для сохранения доступности при letter-split
✅ Live vs Local Visual Parity Audit завершён (01.04.2026) — `BREUS_MEDIA_LIVE_VS_LOCAL_VISUAL_PARITY.md`
✅ Подтверждено: `/gazeta` в production-like local (`NEXT_PUBLIC_DEBUG_MODE=false`, `next start`) визуально совпадает с live на desktop / mobile portrait / mobile landscape
✅ Найдено расхождение L2 hero-state: `/drone-service` (стартовый активный слайд + порядок compact navigator + secondary CTA copy)
✅ Найдено copy-расхождение L2 hero secondary CTA: `/real-estate-service` (`Заказать` live vs `Подобрать услугу` local)
✅ Time-allow L3 spot-check: `/drone-construction-monitoring` (структура совпадает, copy-различия), `/promo-video/promo-real-estate` (совпадает)
✅ Цены — проверены, исправлены 3 нарушения матрицы  
✅ SEO metadata — все 81 страница имеют title/description/canonical  
✅ Суффикс | Breus Media — везде  
✅ Домен breus.media — исправлен в 41 файле  
✅ Главная / → редирект на /gazeta  
✅ gazeta/page.tsx — восстановлен  
✅ gazeta/[slug] — карточки из l2DirectionConfigs с фото  
✅ NichesStack — прямые href на L3-страницы  
✅ droneServicesData — все 19 услуг с правильными href  
✅ Битые ссылки /drone-services и /promo-video — исправлены  
✅ realEstateService — добавлен в l2DirectionConfigs  
✅ /gazeta: убран дублирующий слой бегущих строк (SmartHeader vs MarqueeSection)  
✅ /gazeta: восстановлено scroll-поведение Hero/Marquee reveal  
✅ /gazeta: убрано перекрытие sticky-карточек под строкой `#209` (offset выровнен)
✅ /gazeta: добавлен жёсткий safeguard — `showTickers={false}` в `SmartHeader` на landing
✅ `DebugWrapper`: исправлен production-эффект — при `NEXT_PUBLIC_DEBUG_MODE=false` теперь сохраняются `className/style` (layout не “плывёт” относительно debug-режима)
✅ /gazeta: карточки в `NichesStack` для `00–08` переключены на реальные источники L2/Drone/RealEstate (вместо ручного хаотичного массива)
✅ /gazeta/[slug]: карточки для `real-estate` переключены на `realEstateServiceItems`; для L2-слуг убран лимит `slice(0, 6)`
✅ /gazeta: введён лимит карточек в стеке — максимум `8` на секцию (`7` услуг + `Все услуги`)
✅ /gazeta: для секции `01` (Недвижимость) карточки визуально приведены к дизайну `RealEstateServicesStitch`
✅ /gazeta: добавлен compact-режим для mobile landscape — уменьшены фиксированные верхние элементы (header + marquee), чтобы не съедали экран
✅ CTA & Contact Path Audit завершён (01.04.2026) — BREUS_MEDIA_CTA_CONTACT_PATH_AUDIT.md
✅ Localhost Visual Smoke Test пройден (01.04.2026) — BREUS_MEDIA_LOCALHOST_VISUAL_SMOKE_TEST.md
✅ Launch Readiness Audit завершён (01.04.2026) — BREUS_MEDIA_LAUNCH_READINESS_AUDIT.md
✅ Analytics & Tracking Readiness Audit завершён (01.04.2026) — BREUS_MEDIA_ANALYTICS_READINESS_AUDIT.md
✅ Form UX Honesty Batch (01.04.2026) — WhatsApp primary CTA, форма → WhatsApp pre-fill, честный subtitle
✅ Package Matrix Batch A recovery (01.04.2026) — 16 файлов: 360° FAQ hosting wording (6 страниц), drone-reporting PDF add-on label, drone-hotels-tourism placeholder removed, лицензионная музыка (8 reels страниц)
✅ Card & Pricing Consistency Audit завершён (01.04.2026) — `BREUS_MEDIA_CARD_AND_PRICING_CONSISTENCY_AUDIT.md`
  - Охват: 10 L2 хабов (`l2DirectionConfigs.ts`) + `/gazeta` NichesStack + `/real-estate-service`
  - 27 точек несоответствия: 11 пропущенных L3 hrefs, 2 неверных href, 5 ценовых несоответствий, 5 CTA-label нарушений, 3 нарушения card-count
  - Критичное: `clinicsService.ai-upakovka-kontenta` → неверная href (hotel AI вместо clinic)
  - Критичное: `clinicsService.kontent-esteticheskih-uslug` → дублирует href card 3
  - Эталонные семьи: `tours360Service` (7/7 hrefs, единый формат), `hotelsService` (чистая структура)
  - `businessService` — критически недосвязанный хаб (5 из 6 карточек без href)
  - Следующий batch: Batch B (AI Content hrefs) → Batch D (3 ценовых правки)
✅ Card/Binding Consistency Batch A завершён (01.04.2026) — 2 неверных href в `clinicsService` исправлены
  - `clinicsService.ai-upakovka-kontenta`: `/ai-content/hotel-ai-descriptions` → `/ai-content/tourism-ai-packaging`
  - `clinicsService.kontent-esteticheskih-uslug`: `/promo-video/clinic-interior` (дубль card 3) → href убран (L3 страница не существует)
  - Файл: `constants/l2DirectionConfigs.ts`
  - Build: ✅ чистый
✅ Coverage Gap Audit завершён (01.04.2026) — `BREUS_MEDIA_COVERAGE_GAP_AUDIT.md`
  - 11 карточек без primaryHref классифицированы: 4× NEEDS_L3, 2× CAN_STAY_HUB_ONLY, 1× SHOULD_LINK_TO_EXISTING_HUB, 5× NEEDS_MANUAL_PRODUCT_DECISION
  - 1 soft-mismatch: `clinicsService.ai-upakovka-kontenta` → временный tourism fallback
  - Batch C рекомендован: 2 страницы (`/reels-promo/reels-business`, `/promo-video/promo-business`) закроют 4 карточки
  - businessService: 1/6 связанных карточек (после Batch C станет 3/6)
✅ Card/Binding Consistency Batch B завершён (01.04.2026) — 1 L3 href добавлен, 6 карточек оставлены без href (L3 страницы не существуют)
  - `reelsService.reels-nedvizhimost` (card 1): добавлен `primaryHref: '/reels-promo/reels-real-estate'`
  - `reelsService.reels-biznes` (card 7): L3 страница `/reels-promo/reels-business` не существует → fallback
  - `businessService` cards 1,2,3,5,6: ни одного канонического L3 для business-specific promo-video / reels / AI / space-shooting → все 5 оставлены без href
  - Файл: `constants/l2DirectionConfigs.ts`
  - Build: ✅ чистый
✅ Coverage Gap Batch C завершён (01.04.2026) — 2 новые L3 страницы созданы, 4 карточки связаны
  - Создана `/reels-promo/reels-business` (~380 строк) — закрывает `reelsService.reels-biznes` + `businessService.reels-shorts`
  - Создана `/promo-video/promo-business` (~420 строк) — закрывает `promoVideoService.promo-video-biznes` + `businessService.imidzhevoe-video-biznesa`
  - `constants/l2DirectionConfigs.ts`: 4 новых `primaryHref` привязаны
  - businessService: 3/6 связанных карточек (было 1/6 до Batch C)
  - Build: ✅ чистый
✅ businessService Product Decision Audit завершён (01.04.2026) — `BREUS_MEDIA_BUSINESSSERVICE_REMAINING_DECISIONS.md`
  - 3 оставшихся карточки без href классифицированы: 2× NEEDS_NEW_L3, 1× NEEDS_MANUAL_PRODUCT_MERGE
  - `kontent-sayta-reklamy` → NEEDS_NEW_L3 (performance/ads intent, не перекрывается promo-business)
  - `semka-prostranstva-obekta` → NEEDS_MANUAL_PRODUCT_MERGE (компонент promo-business; расширить страницу, затем линковать)
  - `ai-upakovka-kontenta` → NEEDS_NEW_L3 (3-й член семьи ai-content: hotel + tourism + business)
  - Рекомендован Batch D1 как минимальный следующий шаг: `/ai-content/business-ai-content`
✅ businessService Simplification Batch завершён (01.04.2026)
  - 3 карточки без href удалены (`kontent-sayta-reklamy`, `semka-prostranstva-obekta`, `ai-upakovka-kontenta`)
  - Остались 3 честных карточки с валидными hrefs (promo-business, reels-business, 360-tour-business)
  - Hero copy и contact copy переведены в discussion-first / contact-first тон
  - Страница теперь — широкий входной хаб для бизнесов, не вписывающихся в основные ниши
✅ /gazeta final form duplication ПОДТВЕРЖДЕНА и исправлена (01.04.2026)
  - `FinalFormSection` (step-09, дубль формы) удалена из `app/gazeta/page.tsx`
  - `NichesStack` уже содержит step-09 (FAQ) и step-10 (contact form с `id="contact"`)
  - Дублирующий контакт-слой устранён; стек и contact path сохранены
✅ IT Routing Cleanup завершён (01.04.2026)
  - `/gazeta/it` теперь статический redirect → `/business-service`
  - `gazetaDetailRoutes.it` изменён с `/gazeta/it` на `/business-service` — каскадно фиксирует `gazetaNicheLandingRoutes["07"]` и IT nav item
  - IT в NichesStack (niche "07"): screenLink, allServicesCard и service fallbacks теперь ведут на `/business-service`
  - IT в SmartHeader (`gazetaIndustryNavItems`): href → `/business-service`
  - Временное решение: IT и Business намеренно шарят одну страницу
  - Создан `app/gazeta/it/page.tsx` (redirect) — overrides dynamic [slug] handler для прямых URL-посетителей
✅ AI Entry Routing завершён (01.04.2026)
  - SmartHeader кнопка `AI Решения` (id 204): `/gazeta/ai-content` → `/ai-visualization-service`
  - Временное решение: AI Content и AI Solutions намеренно шарят одну страницу до расширения AI-семьи
  - `/gazeta/it` routing — изменений не требовалось (redirect уже в коде)

## АУДИТ-ПРИМЕЧАНИЕ (01.04.2026)
- Для корректной визуальной parity-проверки использовался **production-like local baseline**, а не `next dev`:
  - build: `NEXT_PUBLIC_DEBUG_MODE=false npm run build`
  - start: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start`
- Причина: `next dev` + `.env.local` (`NEXT_PUBLIC_DEBUG_MODE=true`) создают ложные визуальные шумы:
  - DebugWrapper badges/overlays;
  - смещение phase у auto-rotating hero-блоков (dev/hydration timing).
- Артефакты проверки:
  - `output/playwright/live-localprod-parity-2026-04-01/`
  - `output/playwright/live-localprod-parity-2026-04-01/diff-metrics.tsv`

## ОТКРЫТЫЕ ЗАДАЧИ — businessService (статус после Simplification Batch)

### businessService теперь: широкий входной хаб (discussion-first)
- ✅ 3 карточки с валидными hrefs: `imidzhevoe-video-biznesa` → `/promo-video/promo-business`, `reels-shorts` → `/reels-promo/reels-business`, `tury-360` → `/360-tour-business`
- ✅ 3 карточки без hrefs удалены (были fake catalog)
- Страница — не каталог, а broad entry page для бизнесов вне основных ниш
- При желании расширить: можно создать новые L3 и добавить карточки назад

### Если понадобится вернуть Batch D:
- D1: Создать `/ai-content/business-ai-content` (шаблон: hotel-ai-descriptions / tourism-ai-packaging)
- D2: Расширить `/promo-video/promo-business` с space-shoot пакетами
- D3: Создать `/promo-video/promo-business-ads`

### Прочие продуктовые решения (другие хабы):
- [ ] `restaurantsService.ai-upakovka-menyu-opisaniy` — создать `/ai-content/restaurant-ai-content` или hub-only?
- [ ] `autoService.ai-upakovka-obyavleniy` — создать `/ai-content/auto-ai-listings` или hub-only?

### Аудит-артефакт:
- `BREUS_MEDIA_BUSINESSSERVICE_REMAINING_DECISIONS.md` — полный product decision audit (01.04.2026)

### Прочие открытые задачи (перенесены из Batch 6)

## ОТКРЫТЫЕ ЗАДАЧИ — Batch 6 (в процессе)

### P1 — ВСЕ ЗАКРЫТЫ ✅ (исправлены в коммите 77c634d)
- [x] P1: `/gazeta/[slug]` — стили кнопок исправлены: "Обсудить проект" = `bg-white text-black` (primary), "Назад к Gazeta" = ghost border (secondary) — подтверждено в коде
- [x] P1: `/gazeta/[slug]` — `href` исправлен на `https://wa.me/995574619393` — подтверждено в коде

### P2 — важно, но не блокирует:
- [ ] P2: `constants/l2DirectionConfigs.ts` — 5 случаев `primaryCtaLabel: 'Открыть услугу'` (строки 842, 865, 1457, 1495, 1520) заменить на `'Смотреть услуги'` → `'#services'`
- [ ] P2: L2 Hubs — добавить sticky CTA bar в L2DirectionRenderer (аналог DroneStickyCta)
- [x] P2: Аналитика — реализован минимальный tracking batch:
  - `app/layout.tsx` — GA4 Script (strategy="afterInteractive", env var `NEXT_PUBLIC_GA_ID`), безопасно если var не задан
  - `FinalFormSection.tsx` — onClick на WhatsApp link → `whatsapp_click`
  - `FinalFormSection.tsx` — onSubmit → `form_submit_attempt`
  - **Env var**: добавить `NEXT_PUBLIC_GA_ID` в Vercel project env vars перед деплоем

### Подтверждено регрессионным чеком (01.04.2026):
- ✅ `/gazeta` hero CTA `#contact` — работает: `id="contact"` существует в `NichesStack.tsx:1617`
- ✅ AI Visual L3 "Узнать цену" — строка не существует ни в одном файле `app/ai-visual/`
- ✅ Все редиректы (7 маршрутов) — корректны
- ✅ Нет `console.log`, нет захардкоженных localhost URL
- ✅ `NEXT_PUBLIC_DEBUG_MODE=true` — только в `.env.local`, production Vercel не затронут

## ВАЖНОЕ ТЕХСОСТОЯНИЕ НА СЕЙЧАС
- Фиксы по `gazeta` подтверждены локально (build + визуальная проверка).
- `origin` настроен на GitHub, ветка `main` запушена.
- Vercel подключен к GitHub-репозиторию; деплой ожидается от push в `main`.
- Проверка live vs local по `/gazeta`: ключевая hero-анимация (`Breus Media` уезжает вверх) и marquee reveal ведут себя консистентно.
- Повторная проверка 27.03.2026 (Playwright, viewport 1440×900):
  - live и local стартуют с `Breus Media: translateY(65vh)`;
  - после скролла ~950px: `translateY(-60vh) scale(0.25)` на обоих;
  - количество бегущих строк в marquee: `2` на обоих (разделитель между ними: `1`).
- 27.03.2026: подтверждён и исправлен источник расхождения “local vs live” в шапке `/gazeta`:
  - причина: `DebugWrapper` при выключенном debug возвращал `Fragment`, из-за чего пропадали layout-классы у обёрток (`flex-1`, позиционирование);
  - фикс: в non-debug режиме `DebugWrapper` рендерит обычный `<div>` при наличии `className/style`;
  - проверка: `NEXT_PUBLIC_DEBUG_MODE=false PORT=3011 npm run dev` + визуальная проверка `/gazeta`;
  - `npm run build` после фикса — OK.
- Деплой 27.03.2026 выполнен после явной команды `DEPLOY NOW`:
  - commit: `edb303d` (`fix(gazeta): preserve header layout in non-debug mode`);
  - live `/gazeta` подтверждён с новым HTML-признаком: `<div class="flex-1"><a ...>` в левой секции header.
- 27.03.2026: выполнена инициализация карточек Gazeta из настоящих источников:
  - `00`: `droneServiceItems` (`components/drone/droneServicesData.ts`);
  - `01`: `realEstateServiceItems` (`components/real-estate-service/realEstateServicesData.ts`);
  - `02–08`: `l2DirectionConfigs` (`constants/l2DirectionConfigs.ts`);
  - сборка `npm run build` после изменений — OK.
- 27.03.2026: refinement по запросу UX:
  - глобально ограничено количество карточек в `NichesStack` до `7 + 1` (all services);
  - для `01` применён visual-parity с карточками из `RealEstateServicesStitch` (изображение, бейджи, типографика, CTA-блоки);
  - быстрый HTML-check локально: `service-card-target` на `/gazeta` = `7` (реал-эстейт сервис-карточки без карточки “Все услуги”).
- 27.03.2026: visual-parity расширен на все секции `00–08`:
  - все сервисные карточки в `NichesStack` рендерятся в стиле service pages (`service-card-target`, image/header/category/description/price/CTA);
  - лимит подтверждён по DOM-check (локально `/gazeta`):
    - `00`: `7 + 1`, `01`: `7 + 1`, `02`: `6 + 1`, `03`: `7 + 1`, `04`: `7 + 1`, `05`: `7 + 1`, `06`: `7 + 1`, `07`: `6 + 1`, `08`: `6 + 1`.
- 27.03.2026: финальный UX-лимит по карточкам на `/gazeta` изменён на `5 + 1` для всех секций `00–08`:
  - `5` сервисных карточек (первые по порядку из source-of-truth) + `1` карточка `Все услуги`;
  - DOM-check подтверждает по всем секциям: `serviceCards=5`, `totalItems=6`.
- 27.03.2026: деплой выполнен после явной команды `DEPLOY NOW`:
  - commit: `1c7f85c` (`feat(gazeta): sync 00-08 service cards with 5+1 cap`);
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: mobile landscape оптимизация `/gazeta` (local, без деплоя):
  - `SmartHeader`: высота снижена в ландшафтном mobile (`64px` старт / `56px` после скролла), ужаты элементы действий и tickers в header-контексте;
  - `MarqueeSection`: добавлен compact-режим (меньше вертикальные отступы/типографика), в mobile landscape оставлена одна бегущая строка вместо двух;
  - `NichesStack` и формы: sticky-offset синхронизирован под compact-top (`108px` в mobile landscape вместо desktop `184px`);
  - `FinalFormSection`: верхний offset/высота также адаптированы под mobile landscape;
  - `npm run build` — OK.
- 27.03.2026: донастройка mobile landscape по обратной связи:
  - в `MarqueeSection` возвращена вторая бегущая строка `#209`;
  - обе строки `#208/#209` дополнительно уменьшены (текст/отступы) в landscape;
  - строки-заголовки стека `00–08` и `09/10` уменьшены примерно в 2 раза по высоте в landscape (`h-6` вместо `h-12`);
  - `npm run build` — OK.
- 27.03.2026: мобильная сетка карточек `/gazeta` (local, без деплоя):
  - в mobile portrait карточки услуг в стеке переведены в `2` колонки;
  - в mobile landscape карточки услуг переведены в `4` колонки;
  - карточки (особенно service-page parity) дополнительно уменьшены по высоте/типографике/CTA (ориентир ~30% компактнее на мобильных);
  - для больших экранов desktop-раскладка сохранена;
  - `npm run build` — OK.
- 27.03.2026: точечный фикс карточек `8410/8411` в секции `01` (Недвижимость), local:
  - убрана жёлтая строка с highlight-price для этих двух карточек;
  - на мобильных CTA-кнопки переставлены вертикально (`Подробнее` над `Заказать`), чтобы кнопка `Заказать` не уезжала за пределы карточки;
  - `npm run build` — OK.
- 27.03.2026: UX-фикс nested-scroll на `/gazeta` (local):
  - внутренние скролл-контейнеры карточек/FAQ/form переведены в `overscroll-y-contain` + `touch-pan-y`;
  - цель: сначала докручивается внутренний контент секции, затем скролл передаётся следующему шагу стека более предсказуемо;
  - `npm run build` — OK.
- 27.03.2026: compact top для mobile portrait (local):
  - уменьшены размеры верхней зоны (`header + marquee + top rows`) примерно на ~30% и для вертикального просмотра;
  - добавлен `useMobilePortrait` и синхронизированы оффсеты (`Marquee`, `NichesStack`, `FinalFormSection`) под новый размер шапки;
  - `npm run build` — OK.
- 27.03.2026: устранён зазор между `#209` и `#00` (local):
  - уменьшены `stickyTop` оффсеты для mobile (`landscape: 84`, `portrait: 96`) в `NichesStack`;
  - синхронизирован `FinalFormSection` (`84/96`) для ровного поведения по всему стеку;
  - `npm run build` — OK.
- 27.03.2026: фиксы по тикеру и наезду `209 -> 00` (local):
  - выровнен baseline в бегущих строках: элементы тикера/ссылки переведены в `inline-flex` + `leading-none`, чтобы текст не “прыгал” по высоте;
  - для portrait мобильного поднят `stickyTop` до `104`, чтобы `00` не заходил под вторую бегущую строку `209`;
  - `npm run build` — OK.
- 27.03.2026: mobile step navigation для `/gazeta` был протестирован и отменён по UX-обратной связи (слишком сложное ощущение навигации); текущий вариант — без step-контрола.
- 27.03.2026: реализован mobile hard handoff для скролла секций `/gazeta` (local):
  - пока внутренняя область секции скроллится, внешний скролл блокируется и остаётся в текущей секции;
  - добавлена внутренняя скролл-линия справа (прогресс внутри секции);
  - при приближении к концу внутреннего скролла показывается подсказка `Далее {id} {название}` снизу;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `413c9d2` (`feat(gazeta): optimize mobile compact layout, cards, and scroll handoff`);
  - включает: mobile compact top (portrait/landscape), grid 2/4 cards, fixes 8410/8411, nested-scroll handoff, gap fix `209 -> 00`.
- 27.03.2026: убрано дублирование названий ниш внутри контент-блока секций `/gazeta` (local):
  - в `NichesStack` отключён fallback `niche.id / niche.title` для внутреннего `eyebrow`, который повторял верхнюю строку (`00/01/02...`);
  - внутренний `eyebrow` теперь показывается только если явно задан в `detailedContent.eyebrow`;
  - цель: освободить вертикальное пространство и убрать визуальный дубль типа `02 Отели`/`04 Автобизнес` внутри секции;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `82c6e14` (`feat(gazeta): refine mobile scroll UX and remove duplicate niche labels`);
  - включает: mobile scroll UX refinement, ticker/text baseline tuning, sticky offset sync (`209 -> 00`), cleanup дублей названий ниш внутри секций;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: улучшена подсказка межсекционной навигации `Далее {id} {название}` на `/gazeta` (local):
  - подсказка превращена в кликабельную кнопку с иконкой стрелки вниз;
  - при нажатии выполняется плавный скролл к следующей секции (например, `03 -> 04`);
  - добавлены `id`-якоря вида `niche-step-XX` для каждой секции стека;
  - `npm run build` — OK.
- 27.03.2026: добавлена обратная навигация и стабилизация “посадки” секций при клике (`/gazeta`, local):
  - добавлена верхняя кнопка `Назад {id} {название}` со стрелкой вверх (для перехода к предыдущей секции);
  - переходы `Назад/Далее` переведены на выравнивание по реальной позиции целевой секции с post-smooth коррекцией (устранение промахов при “падении” строк в стек);
  - усилен `z-index` у кнопок, чтобы клики не перехватывались карточками;
  - `npm run build` — OK.
- 27.03.2026: mobile touch-controls и компоновка шапки секций `/gazeta` (local):
  - добавлен левый сенсорный scroll-control внутри секций (кнопки `↑`/`↓` по центру экрана): скроллит карточки по шагу, на границе секции переключает на предыдущую/следующую индустрию;
  - кнопка `Назад` увеличена и перенесена в строку заголовка секции (`00/01/02 ...`) для быстрого доступа;
  - мобильные карточки услуг дополнительно слегка уменьшены (изображение + внутренние отступы), чтобы центр экрана освободился под touch-control;
  - `npm run build` — OK.
- 27.03.2026: донастройка расположения controls `/gazeta` (local):
  - кнопка `Назад` в верхней строке секции смещена ближе к центру (не у правого края);
  - левый сенсорный scroll-control вынесен из scroll-контейнера в статичный слой секции, теперь не “едет” вместе со скроллом карточек;
  - `npm run build` — OK.
- 27.03.2026: переразмещение навигационных кнопок по секциям `/gazeta` (local):
  - кнопка `Назад` убрана из линии `00/01/02...` и вынесена отдельным статичным блоком сразу под этой линией;
  - кнопка `Далее {id} {индустрия}` также вынесена в статичный блок внизу секции;
  - обе кнопки больше не зависят от внутреннего скролла карточек и всегда находятся на фиксированных позициях секции;
  - `npm run build` — OK.
- 27.03.2026: финальная доработка навигационных кнопок `/gazeta` (local):
  - `Назад` сделана кликабельной в статичном верхнем блоке;
  - навигация `Далее` расширена по полному стеку шагов: `08 -> 09 (Частые вопросы) -> 10 (Форма связи)`;
  - для шагов `09` и `10` добавлены такие же статичные nav-кнопки `Назад/Далее` (где применимо);
  - якоря шага унифицированы: `niche-step-00 ... niche-step-10`, переходы выравниваются по sticky-позиции;
  - `npm run build` — OK.
- 27.03.2026: фикс кнопки скролла/навигации “вверх” (`/gazeta`, local):
  - причина: при переходе вверх выравнивание только по `getBoundingClientRect` в sticky-стеке могло давать нулевой delta, и визуально ничего не происходило;
  - решение: в `scrollToNicheStep` добавлен двухэтапный переход:
    - coarse-scroll к целевому шагу по индексу (`containerTop + index * 100vh`),
    - затем auto-коррекция до sticky-позиции целевой секции;
  - результат: кнопки `Назад` и левый `↑` корректно переводят на предыдущий шаг;
  - `npm run build` — OK.
- 27.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `08a3a05` (`feat(gazeta): finalize static mobile nav controls and full 00-10 step flow`);
  - включает: статичные nav-кнопки `Назад/Далее`, полный step-flow `00..10`, кликабельный back, фикс перехода “вверх”;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 27.03.2026: добавлен единый floating-scroll control для `/gazeta` (local):
  - пульсирующий фиксированный контрол размещён по центру экрана (всегда на одном месте, не зависит от скролла секции);
  - контрол определяет активный шаг стека (`00..10`) и отображает его id;
  - кнопки `↑/↓` сначала скроллят внутренний контент активной секции, а на границах переводят к предыдущему/следующему шагу;
  - локальные дублирующиеся left-controls внутри карточек удалены, чтобы не конфликтовали с единым контролом;
  - `npm run build` — OK.
- 27.03.2026: корректировка floating-control и анимации входа секций `/gazeta` (local):
  - floating-control смещён в левую зону экрана, сохранив вертикальный центр (`left side center`);
  - повышен `z-index` floating-control, чтобы клики мышью срабатывали с первого раза даже над слоями `FAQ/Form`;
  - ускорен вход карточек в стек: строки `00/01/...` быстро “прилипают” к верху и больше не медленно проползают по экрану;
  - `npm run build` — OK.
- 28.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `2715ebf` (`feat(gazeta): move floating control left and speed up section snap`);
  - включает: перенос floating-control в левую зону, усиление кликабельности на desktop (`z-index`), быстрый snap header-строк `00/01/...` к верху;
  - статус: pushed в `main`, Vercel auto-deploy запущен.
- 28.03.2026: mobile horizontal rail + 4-way joystick на `/gazeta` (local):
  - в мобильном режиме внутренний скролл карточек секции переключён на горизонтальный (`left/right`) rail;
  - добавлен `data-services-rail` и логика прокрутки карточек по `←/→` у плавающего контроллера;
  - floating-control обновлён до 4 направлений (`↑ ↓ ← →`) в одном блоке (формат “джойстик”);
  - вертикальный внутренний скролл секции отключён только для мобильного режима с horizontal rail (desktop поведение сохранено);
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: mobile UX v2 (rollback 4-way + side arrows on cards) на `/gazeta` (local):
  - 4-way floating joystick отменён; возвращён тонкий боковой вертикальный контрол `↑/↓` с раздельными кнопками и линейными индикаторами;
  - горизонтальная лента карточек сохранена, но `←/→` перенесены к самой ленте карточек (слева/справа от карточек в секции), чтобы UX был как “выбор карточек”;
  - ширины мобильных карточек пересобраны под одновременный показ ~2 карточек в кадре (`portrait` и `landscape` адаптированы);
  - для mobile-стека уменьшена высота sticky-секции через preview-offset, чтобы внизу оставалась видимой следующая строка (соседняя индустрия);
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: фикс секции `00` (Услуги аэросъёмки) — mobile cards width parity (local):
  - устранён кейс, когда в `00` в кадр сжимались почти все карточки сразу;
  - ширина мобильной карточки перенесена на сам элемент `article`, чтобы размер применялся одинаково для всех секций, включая `00`;
  - текущая цель в mobile: стабильно ~2 карточки в кадре + боковое перелистывание `←/→`;
  - `npm run build` — OK, локал открыт: `http://127.0.0.1:3099/gazeta`;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 28.03.2026: mobile cards parity fix v2 (`00` + `01..08`) на `/gazeta` (local):
  - выявлена первопричина “плавающей” ширины: `MaybeDebugWrapper` игнорировал `className` при `enabled=false` (в т.ч. для секции `00`);
  - `MaybeDebugWrapper` обновлён: теперь при `enabled=false` и наличии `className` рендерит `<div className=...>`, чтобы размеры/позиционирование не терялись;
  - класс ширины карточки возвращён на wrapper-слой (стабильно для всех секций), карточка (`article`) получает `w-full`;
  - для `00` добавлен mobile offset блока карточек вниз (`mt-[8vh|12vh]`), чтобы rail визуально фиксировалась ближе к середине экрана;
  - LAN-host подтверждён: `http://192.168.1.7:3099/gazeta` (200 OK), `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: copy + spacing cleanup для `0.0` (аэросъёмка) на `/gazeta` (local):
  - удалён текст `10 форматов съёмки: продажи, мониторинг, inspection, hospitality, туризм и events.`;
  - уменьшен разрыв между текстовым блоком и карточками в `0.0`:
    - для aerial heading-блока снижены `mb-*` до уровня, близкого к `0.1/0.2`,
    - убран дополнительный mobile offset rails, который давал лишний вертикальный зазор;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: mobile cards experiment A/B/C/D в `/gazeta` (local, desktop untouched):
  - в `NichesStack.tsx` добавлен mobile-only variant switch `MobileCardsLayoutVariant` с маппингом по секциям:
    - `00 -> A (Premium horizontal rail)`,
    - `01 -> B (Two-card preview rail)`,
    - `02 -> C (Narrative mobile layout)`,
    - `03 -> D (Centered single-card + text menu)`,
    - остальные секции -> `default` fallback;
  - изменены только mobile rails/container/card presentation (desktop ветка сохранена);
  - все текущие links/titles/prices/CTA/data-мэппинг оставлены без изменений;
  - для variant `D` добавлен text-only ориентир: количество карточек + список названий;
  - left vertical floating control отключён на mobile для эксперимента;
  - `npm run build` — OK.
- 29.03.2026: winning mobile pattern стандартизирован на все секции `/gazeta` (local):
  - экспериментальные ветки A/C/D удалены из мобильного рендера;
  - единым mobile default для всех индустриальных секций (`00..08`) сделан winning-паттерн из `01->02`:
    - 2 чётко видимые карточки + частичный 3-й как swipe cue,
    - горизонтальная rail со snap и существующими боковыми стрелками;
  - desktop-путь и data mapping (links/titles/prices/CTAs/order) не изменялись;
  - left floating vertical control остаётся скрытым на mobile;
  - `npm run build` — OK.
- 29.03.2026: удалены дубли заголовков индустрий внутри секций `/gazeta` (local):
  - в `components/gazeta/NichesStack.tsx` добавлена нормализация и проверка дублей между строкой секции (`00/01/02...`) и внутренним `heading`;
  - если `heading` дублирует `title` (включая кейсы вида `УСЛУГИ АЭРОСЪЁМКИ` vs `АЭРОСЪЁМКА`), внутренний `h2` больше не рендерится;
  - сохранены все данные карточек, ссылки, CTA и desktop/mobile логика layout;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: точечный фикс секции `00` (Аэросъёмка) в `/gazeta` (local):
  - скрыты строки `Тбилиси • Батуми • Вся Грузия` (eyebrow) и `УСЛУГИ АЭРОСЪЁМКИ` (inner heading) только для секции `00`;
  - остальные секции `01..08` не изменялись;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: mobile nav-button offset фикс в `/gazeta` (local):
  - нижняя кнопка `Далее` поднята выше, чтобы не конфликтовать с системной/браузерной нижней панелью;
  - добавлен адаптивный нижний отступ с учётом `env(safe-area-inset-bottom)`:
    - portrait: `+6.25rem`,
    - landscape: `+4.25rem`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: стабилизация mobile-кнопки `Далее` + подъём контента в `/gazeta` (local):
  - `Далее` убрана из каждой sticky-секции и вынесена в единый `fixed` mobile-контрол на уровне `NichesStack`, чтобы не “гуляла” по вертикали при скролле;
  - глобальная кнопка показывает следующий шаг от текущего `activeStepIndex` и ведёт на `scrollToNicheStep(active + 1)`;
  - внутри секций контент (текст + карточки) поднят выше через mobile-only override отступов:
    - landscape: `pt-14 pb-14`,
    - portrait: `pt-16 pb-20`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: добавлены уникальные номера mobile-nav кнопок в `/gazeta` (local):
  - верхняя кнопка `Назад` получает уникальный `data-ui-id` по секции: `9100..9108` (формат `91{nicheId}`);
  - нижняя глобальная кнопка `Далее` получает фиксированный `data-ui-id="9200"`;
  - добавлены также `data-ui-name`:
    - `GAZETA_BACK_<id>`,
    - `GAZETA_NEXT_9200`;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: добавлены видимые ярлычки `#xxxx` на mobile-nav кнопки в `/gazeta` (local):
  - на кнопках `Назад` и `Далее` отображается красный badge с номером (как в debug-стиле элементов);
  - `Назад`: `#91xx` по секции, `Далее`: `#9200`;
  - прежние `data-ui-id`/`data-ui-name` сохранены;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: точечная настройка секции `01 Недвижимость` + позиция `9200` (local):
  - уменьшено пространство между `#9101` и блоком `#8301` (контент секции поднят выше);
  - карточки подтянуты ближе к тексту `#8301` в mobile для `01` (уменьшен промежуток текст/rail);
  - глобальная кнопка `#9200` опущена к нижней safe-area линии, чтобы не наезжать на карточки и оставаться над системной/browser-навигацией;
  - изменения локализованы: кастомизация по `niche.id === "01"` для контента, позиция `#9200` глобально для mobile;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: прототип карточек `#8412`/`#8413` в секции `01` + mobile rail tune (local):
  - только для `01` сделан тестовый формат двух карточек:
    - `#8412`: форсирован 2-строчный заголовок, 3 строки category, 3 строки описания;
    - `#8413`: тот же компактный ритм текста, но с немного другим визуальным акцентом (контрастный стиль);
  - жёлтый блок цены/формата упакован в компактный chip и поднят ближе к тексту (меньше чёрного пустого пространства);
  - для `01` мобильный rail перестроен так, чтобы в кадре были только 2 полноценные карточки (3-я справа больше не торчит);
  - боковые стрелки оставлены в боковых зонах и подняты выше, чтобы не перекрывать текст карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: донастройка стрелок + ширины карт в `01` (local):
  - боковые стрелки сдвинуты ближе к краям экрана (`-left/-right`) и получили мягкую пульсацию (opacity + scale);
  - карточки `01` расширены примерно на ~5% за счёт уменьшения боковых отступов shell и корректировки gap/width формулы;
  - для `#8412`/`#8413` жёлтый блок (`4K/GEO/₾`) переведён в 2-строчный режим через перенос и clamp `2 lines`;
  - rail `01` по-прежнему показывает ровно 2 карточки без видимого хвоста третьей;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: финтюнинг стрелок и price-chip текста в `01` (local):
  - стрелки ещё сильнее сдвинуты к краям:
    - portrait: `-left-6` / `-right-6`,
    - landscape: `-left-5` / `-right-5`;
  - в жёлтом блоке `#8412/#8413` удалено слово `Context/контекст` из price-строки перед переносом;
  - итоговый блок `4K ... от 350 ₾` сохраняется в компактном 2-строчном формате;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: увеличена карточка `#8412` за счёт внутренних элементов (local):
  - только для `#8412` увеличены размеры текста и вертикальные интервалы (title/category/description/price chip/buttons);
  - image zone для `#8412` увеличена (`portrait` и `landscape`), чтобы карточка стала выше и задействовала нижний запас пространства;
  - `#8413` не изменялась этим шагом;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: лёгкое уменьшение высоты `#8412` через price-chip (local):
  - в `#8412` жёлтый блок `4K/GEO/₾` уменьшен примерно на ~15%:
    - меньше `px/py`,
    - меньше размер шрифта,
    - немного меньше нижний отступ (`mb`);
  - цель: снизить итоговую высоту карточки примерно на ~3% снизу без потери читаемости;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: зафиксировано правило price-chip для `#8412/#8413` (mobile-phone only):
  - перенос `4K/GEO/₾` в 2 строки теперь применяется только на phone viewport;
  - на планшете и desktop price-chip принудительно остаётся в 1 строку;
  - добавлен локальный phone-detector в `Card` (`width <= 640 || height <= 520`) для разделения phone vs non-phone;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: возврат “старого” вида price-блока для `#8412` (local):
  - у `#8412` убран жёлтый фон/рамка у блока `4K/GEO/₾`;
  - оставлен только жёлтый текст;
  - добавлена тонкая верхняя линия (`border-top`) в этой зоне как визуальный разделитель верх/низ;
  - `#8413` не затронута этим шагом;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 29.03.2026: унификация карточек `8410..8415` в секции `01` (local):
  - все карточки линии `8410..8415` приведены к одному размерному ритму и единому внешнему шаблону;
  - для `8410` и `8411` включена price-линия в стиле `8412` (тонкая линия + жёлтый текст);
  - для `8415` (`Все услуги`) добавлен невидимый spacer price-зоны, чтобы сохранить одинаковую высоту ряда;
  - price-chip правило сохранено: 2 строки только phone, 1 строка на tablet/desktop;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: точечная типографика для `#8412` и `#8413` (local):
  - выполнена внутренняя оптимизация трёх верхних текстовых блоков до зоны price (`4K/GEO/₾`) без изменения внешнего размера карточек;
  - `#8412`: увеличены размеры шрифта примерно на ~15% для блоков:
    - title,
    - category,
    - description;
  - `#8413`: увеличены размеры шрифта примерно на ~10% для тех же трёх блоков;
  - цель: сократить тёмный “пустой” промежуток перед 4-м блоком за счёт более плотного, читаемого текста;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: дополнительная донастройка `#8412` и снятие обрезания `#8412/#8413` (local):
  - `#8412`: ещё +~10% к типографике 3 верхних блоков:
    - title,
    - category,
    - description;
  - у `#8412` и `#8413` отключено обрезание 3-го блока (описание) — текст показывается полностью без `...`;
  - разрешено занимать до 4+ строк при необходимости (без принудительного clamp) в описании этих двух карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: точечная коррекция `#8412` по текущему фидбеку (local):
  - в карточке `#8412` 3-й текстовый блок (description) уменьшен примерно на 10%:
    - `text-[13.5px]` → `text-[12px]`,
    - `leading-[1.25]` → `leading-[1.22]`;
  - цель: убрать эффект визуального “обрезания” и вернуть карточку к одинаковому восприятию размера относительно соседних карточек в ряду;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: унификация карточек `8410..8415` по эталону `#8412` (local):
  - в секции `01 Недвижимость` все карточки `8410..8415` переведены на единые параметры:
    - одинаковый размер шрифта title/category/description,
    - одинаковая геометрия карточки и image-блока,
    - одинаковая схема обрезки текста (clamp) для ровного ритма;
  - добавлен единый нижний чёрный отступ (spacer) для всех карточек линии `8410..8415`, чтобы при разной длине текста визуально сохранялся одинаковый размер карточек;
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: деплой выполнен после команды `DEPLOY NOW`:
  - commit: `70065ab` (`fix: remove trust-lowering placeholders, Заказать CTA, add noindex for drafts`);
  - включает: удаление trust-lowering placeholder'ов, убрана кнопка `Заказать` с карточек, `noindex` для `/real-estate-2`;
  - live: https://breus-media-v2.vercel.app, статус: `READY`.
- 31.03.2026: удалены trust-lowering фразы из трёх страниц (local):
  - `app/drone-real-estate/page.tsx`: удалены два `<p>` с текстом "кейсы появятся" / "Реальные кейсы..." в секции `Social Proof`; целиком закомментирована секция `Portfolio Section` (`#381500`) с блоком "Портфолио наполняется / честный placeholder";
  - `app/360-tour-real-estate/page.tsx`: целиком закомментирована секция `Tour Examples Section` (`#360500`) с текстом "Реальные кейсы появятся после первых съёмок в Тбилиси";
  - `app/360-tour-restaurants/page.tsx`: совпадений не найдено, файл не изменялся;
  - `npm run build` — OK (81/81 страниц, без ошибок);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 30.03.2026: A/B/C тест single-CTA для карточек `8412`, `8411`, `8410` (local):
  - только для трёх карточек в `01 Недвижимость` заменён двухкнопочный CTA-блок на одну primary кнопку:
    - `8412` → `Смотреть примеры`,
    - `8411` → `Узнать стоимость`,
    - `8410` → `Посмотреть услугу`;
  - остальные элементы карточек сохранены без редизайна (image/title/audience/description/support-line);
  - остальные карточки секции не затронуты;
  - логика ссылок:
    - `8411` ведёт на `#contact` (pricing-oriented),
    - `8412` и `8410` ведут на `svc.link` (service/proof-first);
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: добавлен `robots: noindex, nofollow` для страниц-черновиков (local):
  - `app/real-estate-2/page.tsx` — `"use client"`, metadata напрямую не поддерживается;
  - создан `app/real-estate-2/layout.tsx` с `export const metadata = { robots: 'noindex, nofollow' }`;
  - `app/dronetest/` и `app/test-docking/` — директории не существуют в проекте, пропущены;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: аудит CTA в `app/real-estate-service/page.tsx` и `app/drone-service/page.tsx` (local):
  - проверено, что сервисные карточки на этих страницах рендерятся через:
    - `components/real-estate-service/RealEstateServicesStitch.tsx`,
    - `components/drone/DroneServicesStitch.tsx`;
  - в обоих stitch-компонентах удалена вторая кнопка `Заказать` из карточек услуг;
  - оставлена одна кнопка `Подробнее` (ведёт на страницу услуги);
  - `npm run build` — OK;
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: cleanup + package truth-check + CTA/content-layering для 3 страниц (local):
  - обновлены:
    - `app/360-tour-real-estate/page.tsx`,
    - `components/360-tour-real-estate/TourDeliverables.tsx`,
    - `components/360-tour-real-estate/TourPricing.tsx`,
    - `components/360-tour-real-estate/TourProcess.tsx`,
    - `app/drone-construction-monitoring/page.tsx`,
    - `app/drone-object-inspection/page.tsx`;
  - `360-tour-real-estate`: тема hosting/storage сохранена, но переведена в мягкий support-формат (срок/условия по согласованию), убраны hard promise формулировки;
  - `drone-construction-monitoring`: явно разделены CORE vs PREMIUM / ADD-ON deliverables; app/automation зафиксирован как future capability (manual roadmap), убраны жёсткие overstatements;
  - `drone-object-inspection`: добавлена явная граница visual inspection only (без инженерной сертификации по умолчанию), разделены base/premium outputs, упрощён верхний flow-блок;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 2 cleanup (content layering, без mass deletion) для 3 страниц (local):
  - обновлены:
    - `app/reels-promo/reels-real-estate/page.tsx`,
    - `app/promo-video/promo-real-estate/page.tsx`,
    - `app/ai-visual/ai-real-estate/page.tsx`;
  - выполнено:
    - сохранён богатый контент и SEO/AEO/AI-search слой, но улучшена иерархия чтения (core selling layer выше, deep layer ниже);
    - добавлены ранние entry-блоки к пакетам/брифу для сокращения пути к офферу;
    - deep-блоки (`частые ошибки`, `long-tail`, `мифы`, `словарь`) переведены в collapsible (`details/accordion`) с сохранением crawlable текста;
    - снижено визуальное дублирование смыслов в верхней части страниц без удаления полезных материалов;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 3 cleanup для L2 hub-страниц (local):
  - обновлены:
    - `app/real-estate-service/page.tsx`,
    - `app/drone-service/page.tsx`,
    - `components/l2-direction/L2DirectionRenderer.tsx`,
    - `components/l2-direction/L2DirectionSections.tsx`,
    - `components/real-estate-service/RealEstateHeroStitch.tsx`,
    - `components/drone/DroneHeroStitch.tsx`;
  - выполнено:
    - карточки услуг подняты выше в flow хабов (сразу после hero) для более быстрого выбора пути;
    - в `SmartHeader` добавлена быстрая секция `Услуги` (`#services`) на L2-хабах;
    - ранние hero CTA ослаблены для hub-логики: secondary CTA переключён с `#contact / Заказать` на `#services / Подобрать услугу`;
    - в L2 service cards primary фокус смещён на переход в услугу (`Открыть услугу`), contact-кнопка оставлена вторичным шагом (`Подобрать пакет`);
    - уменьшена минимальная высота hero-блоков (`700px -> 620px`) для снижения первого экрана и ускорения доступа к карточкам;
    - для `/drone-service` стрелка hero теперь ведёт к `#services`, а не к social proof;
  - `npm run build` — OK (81/81);
  - деплой не выполнялся (ожидается явная команда `DEPLOY NOW`).
- 31.03.2026: Batch 4 visual consistency + legacy junk sweep (audit-only, local):
  - создан файл аудита:
    - `BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP.md`;
  - покрытие аудита:
    - `/gazeta`,
    - активные L2 hubs,
    - репрезентативные L3 (drone / 360 / reels / promo / AI / inspection-monitoring);
  - ключевые finding-группы:
    - shared component leftovers (`Coverage v1`, `Шаблонный L2 блок`, `Google Presence`, internal labels),
    - CTA/anchor naming drift между семействами страниц,
    - visible legacy copy (`CTA №1`, `L3 Услуга`, placeholder-тексты),
    - route-sanity долги в части drone related links (legacy href);
  - сформирован практический plan на Batch 4A/4B/4C без редизайна и без mass deletion;
  - кодовые правки в рамках этой задачи не вносились (только аудит + docs sync).
- 31.03.2026: Route Fix Batch (P0/P1 route sanity, local):
  - P0 route safety:
    - `/real-estate` -> server redirect на `/real-estate-service`;
    - `/real-estate-3` -> server redirect на `/real-estate-service`;
    - `/drone-service/monitoring-stroiki` -> server redirect на `/drone-construction-monitoring`;
    - убраны входы в legacy `monitoring-stroiki` из активного пути:
      - `constants/gazetaRoutes.ts` (`monitoringStroiki` теперь указывает на `/drone-construction-monitoring`);
      - `app/drone-real-estate/page.tsx` (related service href обновлён на `/drone-construction-monitoring`).
  - P1 hub integrity:
    - исправлен дублирующий mapping в `gazetaNicheLandingRoutes`:
      - `07` -> `gazetaDetailRoutes.it` (`/gazeta/it`);
      - `08` -> `/business-service`;
    - `gazetaDetailRoutes.realEstate` переключён с `/gazeta/real-estate` на главный хаб `/real-estate-service`;
    - orphan-страница `/360-tour-commercial-real-estate` оставлена как secondary/supporting и помечена `noindex, nofollow`.
  - проверка:
    - `npm run build` — OK (81/81).
- 31.03.2026: Batch 4A implemented (local, без редизайна):
  - shared copy cleanup в `constants/l2DirectionConfigs.ts` и `constants/droneDirectionPages.ts`:
    - удалены legacy wording остатки `Coverage v1`, `Google Presence`, `Шаблонный L2 блок`;
    - нормализованы пользовательские формулировки: `Карта покрытия`, `Репутация в Google`, нейтральный map hint без internal/dev-текста;
    - убраны internal-style labels в related links (`Категория ...`, `L2-страница ...`).
  - CTA normalization в shared-слое:
    - `components/l2-direction/L2DirectionRenderer.tsx`: label `Пакеты` -> `#pricing`;
    - `components/l2-direction/L2DirectionSections.tsx`: hero CTA `Открыть услугу` (вместо `Подробнее`);
    - `components/gazeta/NichesStack.tsx`: унифицированы карточечные CTA (`Открыть услугу` + secondary `Обсудить задачу`).
  - 360 hero cleanup:
    - `components/360-tour-*/TourHero.tsx`: `Смотреть демо` -> `Смотреть примеры`;
    - убран visible legacy label `L3 Услуга` (hotels/commercial real estate).
  - anchor normalization по активным семействам:
    - в `app/reels-promo/*`, `app/ai-visual/*`, `app/ai-content/*` унифицировано `#packages` -> `#pricing`;
    - репрезентативная страница `/reels-promo/reels-real-estate` дополнительно очищена от visible legacy `CTA №1/CTA №2` и placeholder-style заголовков.
  - в этой сессии выполнялась точечная проверка через `rg/git diff`; `npm run build` не запускался.
- Для деплоя и отката добавлен регламент: `DEPLOYMENT.md`.
- Для истории сессий добавлен архив: `CHANGELOG_ARCHIVE.md`.

## SERVICE IMAGES WORKFLOW (АКТУАЛЬНЫЙ СТАНДАРТ)
- Корневая папка для image workflow: `/services-images`.
- Структура: одна папка на каждый `service-slug`.
- Внутри каждой сервисной папки:
  - `selected`
  - `final`
  - `SERVICE_IMAGE_PLAN.md`
- Используется единый image set на сервис.
- Отдельные image sets для карточек и для full pages не создаются.

### Логика использования изображений
- `01–03` = card rotation + top-of-page / hero rotation.
- `04+` = inner L3 visuals / examples / supporting content.

### Master format и mobile поведение
- Текущий master generation format: `16:9`.
- Для mobile/card использовать crop / zoom / focal-point из тех же master-изображений.
- Ключевой объект кадра держать в центральной safe-area, чтобы одно изображение корректно работало и на desktop, и на mobile.

### Рабочий процесс
1. Открыть папку нужной услуги в `/services-images/[service-slug]`.
2. Прочитать `SERVICE_IMAGE_PLAN.md`.
3. Скопировать prompts из плана.
4. Сгенерировать изображения.
5. Сохранить хорошие кандидаты в `selected`.
6. Переместить утверждённые версии в `final`.

### Правило для будущих AI-сессий
- Любой будущий AI, работающий с service images, обязан сначала прочитать `CONTEXT_NEXT_CHAT.md` и использовать этот файл как главный контекст image workflow.

## ОТКРЫТЫЕ ЗАДАЧИ
Документация отстаёт от git — синхронизирована 31.03.2026.
- Выполнено и задеплоено 31.03.2026 (commit `70065ab`):
  - Батч 1: удалены trust-lowering фразы на `drone-real-estate` и `360-tour-real-estate`.
  - Батч 2: убраны двойные кнопки в карточках через `RealEstateServicesStitch.tsx` и `DroneServicesStitch.tsx`.
  - Батч 3: добавлен `noindex` для `real-estate-2`, `dronetest`, `test-docking`.

## СЛЕДУЮЩИЙ БАТЧ
1. Проверить карточки `/gazeta/tourism` (стиль как на `/tourism-service`).
2. Продолжить аудит deliverables по пакетам (CORE vs ADD-ON) на остальных L3-страницах, вне Batch 1-2.
3. Начать L3-страницы кластера Reels.
4. После UX-подтверждения выполнить деплой Batch 3 L2 cleanup.
5. Запустить Batch 4B: доочистка route/link остатков и deep-copy consistency по файлу `BREUS_MEDIA_BATCH4_VISUAL_CONSISTENCY_SWEEP.md`.
6. После QA/деплоя повторно проверить anchors `#services/#pricing/#contact`, redirects `/real-estate`, `/real-estate-3`, `/drone-service/monitoring-stroiki` и robots для `/360-tour-commercial-real-estate`.

## СТРУКТУРА САЙТА
- L1: /gazeta — главная страница-газета
- L2 по услугам: /drone-service, /360-tours-service, /reels-service, /promo-video-service, /ai-visualization-service
- L2 по индустриям: /hotels-service, /restaurants-service, /tourism-service, /clinics-service, /auto-service, /real-estate-service, /business-service
- L3: конкретные страницы услуг под нишу

## ИНВАРИАНТЫ (НЕ ЛОМАТЬ)
- L2 страницы — живые хабы с L2DirectionRenderer, не трогать структуру.
- Карточки на L2 берутся из `constants/l2DirectionConfigs.ts`.
- Карточки на `gazeta/[slug]` берутся из `l2DirectionConfigs` через `slugToL2Config`.
- Домен везде: `breus.media` (не `breusmedia.com` и не `breus-media.com`).

## РИТУАЛ В КОНЦЕ КАЖДОЙ СЕССИИ
1. Обновить этот файл (`CONTEXT_NEXT_CHAT.md`) как актуальный срез.
2. Добавить новую запись в `CHANGELOG_ARCHIVE.md` (append-only, старое не стирать).
3. Если были релизные изменения, синхронизировать шаги в `DEPLOYMENT.md`.

## СТАРТ ДЛЯ НОВОГО ЧАТА (СКОПИРОВАТЬ)
Прочитай `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md` и `DEPLOYMENT.md`.  
Потом:
1) сравни `/gazeta` на live и local именно по hero-анимации и количеству бегущих строк,  
2) не делай деплой без явной команды `DEPLOY NOW`,  
3) после правок обнови контекст + архив.
