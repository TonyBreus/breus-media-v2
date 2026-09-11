import { DrawerServiceData, SubFormatItem } from "./MultiStepServiceDrawer";

export type GazetaLang = "ru" | "en";

export interface FaqItem {
    q: string;
    a: string;
}

export const gazetaFaqItems: Record<GazetaLang, FaqItem[]> = {
    ru: [
        {
            q: "В каких городах Грузии вы работаете?",
            a: "Базис продакшена находится в Тбилиси, также регулярно выезжаем в Батуми, Кахетию, Мцхету, Гудаури, Казбеги и по всей Грузии.",
        },
        {
            q: "Сколько стоят ваши услуги?",
            a: "Аэросъёмка от 200 GEL, 360° туры от 200 GEL, Reels и вертикальные видео от 150 GEL, AI визуализация от 100 GEL. Скоростные сайты от 450 GEL. Комплексные контент-пакеты от 500 GEL. Точную стоимость рассчитываем под вашу задачу.",
        },
        {
            q: "Как быстро будет готов материал?",
            a: "Выдача исходников (фото/видео) — от 24 часов. Смонтированные ролики — 24-48 часов (для сложных проектов 3-5 дней). 360° виртуальные туры — от 48 часов.",
        },
        {
            q: "Что если в день съёмки плохая погода?",
            a: "Мы регулярно проверяем метеосводки. Если ожидается дождь, сильный ветер или условия, не подходящие для съёмки, мы бесплатно переносим дату на ближайший благоприятный день.",
        },
        {
            q: "Заключаете ли официальный B2B-договор?",
            a: "Да, работаем официально по договору с выставлением инвойсов через банки TBC и Bank of Georgia для юридических лиц.",
        },
        {
            q: "Какое качество картинки вы выдаете?",
            a: "Снимаем в 4K 60fps HDR, создаем панорамы 8K и используем беспроводные радиосистемы DJI Mic 2 для кристального чистого звука.",
        },
        {
            q: "Можно ли заказать AI-визуализацию удалённо?",
            a: "Да. Виртуальный стейджинг интерьеров, AI-меню для сервисов доставки и генерация креативов выполняются полностью удаленно.",
        },
    ],
    en: [
        {
            q: "Which cities in Georgia do you operate in?",
            a: "Our production base is in Tbilisi, with regular shoots across Batumi, Kakheti, Mtskheta, Gudauri, Kazbegi, and throughout Georgia.",
        },
        {
            q: "How much do your services cost?",
            a: "Aerial filming from 200 GEL, 360° tours from 200 GEL, Reels and shorts from 150 GEL, AI visualization from 100 GEL. High-speed websites from 450 GEL. Complex content packages from 500 GEL. We provide custom quotes based on your exact task.",
        },
        {
            q: "How fast are the deliverables completed?",
            a: "Raw footage delivery starts from 24 hours. Edited videos take 24-48 hours (3-5 days for complex edits). Interactive 360° tours are ready from 48 hours.",
        },
        {
            q: "What happens if the weather is bad on shoot day?",
            a: "We actively monitor weather forecasts. If rain, high winds, or unsuitable conditions are expected, we reschedule the shoot to the nearest favorable date at no extra cost.",
        },
        {
            q: "Do you provide official B2B contracts and corporate invoices?",
            a: "Yes, we work under official B2B contracts with corporate invoicing via TBC Bank and Bank of Georgia, providing all closing legal acts.",
        },
        {
            q: "What camera equipment do you use for filming?",
            a: "We fly top-tier DJI Air 3S and DJI Avata 2 drones recording 4K 60fps HDR, 8K panoramic camera systems, and DJI Mic 2 wireless mics for studio-grade voice clarity.",
        },
        {
            q: "Can we order AI visualization or content remotely?",
            a: "Yes. Virtual staging of vacant properties, AI food menus for delivery apps, and ad visuals are delivered 100% remotely without on-site visits.",
        },
    ],
};

export const multiStepDrawerDataByLang: Record<GazetaLang, Record<string, DrawerServiceData>> = {
    ru: {
        aerial: {
            key: "aerial",
            title: "Аэросъёмка дроном и FPV",
            category: "4K · FPV · АЭРОПРОДАКШН",
            description: "Лицензированная аэросъёмка недвижимости, стройплощадок, отелей и видовых локаций Грузии на дроны DJI в 4K HDR.",
            bullets: [
                "4K 60fps кинематографичные ракурсы с высоты",
                "FPV One-Take пролёты сквозь интерьеры и фасады",
                "Передача оригинальных 4K материалов за 24–48 часов",
                "Официальный B2B договор и безналичный расчёт"
            ],
            price: "от 200 ₾",
            l2Href: "/drone-service",
            l2Label: "Все форматы и прайс аэросъёмки →",
            formats: [
                { title: "Аэросъёмка недвижимости и ЖК", desc: "Видовые кадры, панорамы и инфраструктура", price: "от 200 ₾", href: "/drone-services/drone-real-estate", isL3: true },
                { title: "Аэросъёмка отелей и курортов", desc: "Атмосфера отдыха, территория и виды", price: "от 200 ₾", href: "/drone-hotels-tourism", isL3: true },
                { title: "Аэросъёмка ресторанов", desc: "Террасы, веранды и локация заведения", price: "от 200 ₾", href: "/drone-services/drone-restaurants", isL3: true },
                { title: "Мониторинг стройки", desc: "GPS-привязка точек и сравнительные PDF-отчёты", price: "от 200 ₾", href: "/drone-construction-monitoring", isL3: true },
                { title: "FPV-съёмка One-Take", desc: "Бесшовный пролёт сквозь интерьеры", price: "от 200 ₾", href: "/drone-fpv-cinema", isL3: true },
            ],
        },
        tour360: {
            key: "tour360",
            title: "360° Виртуальные туры",
            category: "8K · VR · GOOGLE STREET VIEW",
            description: "Интерактивные 8K 3D-туры для сайтов, Google Maps и метавселенных. Гости и покупатели изучают объект с эффектом живого присутствия.",
            bullets: [
                "Съёмка в сверхвысоком разрешении 8K HDR",
                "Интеграция в карточки Google Maps и Яндекс Карты",
                "Интерактивные точки с фото, видео и ценами",
                "Работает на смартфонах и VR-гарнитурах без приложений"
            ],
            price: "от 200 ₾",
            l2Href: "/360-tours-service",
            l2Label: "Все форматы 360° туров и Street View →",
            formats: [
                { title: "360° тур для недвижимости", desc: "Виртуальные показы апартаментов и вилл", price: "от 200 ₾", href: "/360-tour-real-estate", isL3: true },
                { title: "360° тур для отелей и глэмпингов", desc: "Оцифровка номеров для Booking и сайта", price: "от 200 ₾", href: "/360-tour-hotels", isL3: true },
                { title: "360° тур для ресторанов", desc: "Интерактивный выбор столиков и залов", price: "от 200 ₾", href: "/360-tour-restaurants", isL3: true },
                { title: "360° виртуальный автосалон", desc: "Круговой обзор экстерьера и салона авто", price: "от 200 ₾", href: "/360-tour-auto", isL3: true },
                { title: "360° тур для клиник и медцентров", desc: "Показ стерильности и оборудования", price: "от 200 ₾", href: "/360-tour-clinics", isL3: true },
            ],
        },
        reels: {
            key: "reels",
            title: "Reels, Shorts & Промо-видео",
            category: "9:16 · ТРЕНДЫ · ОХВАТЫ",
            description: "Вертикальный и горизонтальный видеоконтент для соцсетей, рекламных кампаний и сайтов с динамичным монтажом и саунд-дизайном.",
            bullets: [
                "Студийный звук на микрофоны DJI Mic 2",
                "Динамичный монтаж с кинематографичной цветокоррекцией",
                "Анимированные субтитры и цепляющие хуки",
                "Пакеты от 3 до 10 роликов за одну съёмку"
            ],
            price: "от 150 ₾",
            l2Href: "/reels-service",
            l2Label: "Все форматы Reels & промо-видео →",
            formats: [
                { title: "Reels для риелторов и ЖК", desc: "Презентации планировок и видовых квартир", price: "от 150 ₾", href: "/reels-promo/reels-realtor", isL3: true },
                { title: "Reels для отелей и курортов", desc: "Атмосфера отдыха, спа, рум-туры", price: "от 150 ₾", href: "/reels-promo/reels-hotel", isL3: true },
                { title: "Reels для ресторанов и баров", desc: "Макро фуд-видео, подача блюд и бар", price: "от 150 ₾", href: "/reels-promo/reels-restaurant", isL3: true },
                { title: "Reels для автобизнеса", desc: "Детейлинг, обзоры и звук выхлопа", price: "от 150 ₾", href: "/reels-promo/reels-auto", isL3: true },
                { title: "Reels для клиник и экспертов", desc: "Интервью врачей и ответы на вопросы", price: "от 150 ₾", href: "/reels-promo/reels-clinic", isL3: true },
            ],
        },
        aiContent: {
            key: "aiContent",
            title: "AI-Визуализация & Стейджинг",
            category: "AI · 3D STAGING · РЕНДЕРЫ",
            description: "Интерьерная и предметная визуализация с помощью генеративного AI. Меблировка пустых помещений и создание премиального фотоконтента без затрат на физический стейджинг.",
            bullets: [
                "Виртуальная меблировка объектов недвижимости в 4K",
                "Генерация фуд-карточек для ресторанов и сервисов доставки",
                "3D-каталоги продуктов и авто без аренды фотостудий",
                "Срок сдачи первых концептов — от 12 часов"
            ],
            price: "от 180 ₾",
            l2Href: "/ai-visualization-service",
            l2Label: "Все форматы AI-визуализации →",
            formats: [
                { title: "AI Virtual Staging", desc: "Меблировка белого каркаса и новостроек", price: "от 180 ₾", href: "/ai-visual/ai-staging", isL3: true },
                { title: "AI Описания и тексты для отелей", desc: "Многоязычная упаковка для OTA и сайтов", price: "от 180 ₾", href: "/ai-content/hotel-ai-descriptions", isL3: true },
                { title: "AI Упаковка туризма", desc: "Генерация маршрутов и продающих карточек", price: "от 180 ₾", href: "/ai-content/tourism-ai-packaging", isL3: true },
                { title: "AI Меню и фуд-карточки", desc: "Превью блюд для Wolt и Glovo", price: "от 180 ₾", href: "/ai-visual/ai-menu-delivery", isL3: true },
                { title: "AI Студийный фон для авто", desc: "Замена уличных фонов на салонные", price: "от 180 ₾", href: "/ai-visual/ai-auto", isL3: true },
            ],
        },
        websites: {
            key: "websites",
            title: "Разработка AEO & SEO-сайтов",
            category: "NEXT.JS · TURBOPACK · AEO",
            description: "Скоростные B2B лендинги и корпоративные сайты на Next.js с мгновенной загрузкой, оптимизацией под нейросети (AEO) и Google Search.",
            bullets: [
                "100/100 баллов Google PageSpeed Insights",
                "Структурированная микроразметка Schema.org для AI (AEO)",
                "Интерактивные калькуляторы окупаемости и квизы",
                "Прямая интеграция с WhatsApp и CRM"
            ],
            price: "от 450 ₾",
            l2Href: "#contact",
            l2Label: "Обсудить разработку B2B-сайта →",
            formats: [
                { title: "Сайт-визитка (Экспресс)", desc: "Компактный сайт под ключ", price: "от 450 ₾", href: "#contact", isL3: false },
                { title: "B2B промо-лендинг под ключ", desc: "Скоростной сайт на Next.js 16", price: "от 1 200 ₾", href: "#contact", isL3: false },
                { title: "Корпоративный многостраничник", desc: "Витрина, блог и инфраструктура", price: "от 2 600 ₾", href: "#contact", isL3: false },
            ],
        },
        googleMaps: {
            key: "googleMaps",
            title: "Google Maps & Local SEO Оптимизация",
            category: "GEO · GOOGLE MAPS · ТОП-3",
            description: "Комплексная упаковка и вывод карточки компании в ТОП-3 локальной выдачи Google Maps в Тбилиси, Батуми и по всей Грузии.",
            bullets: [
                "Аудит и подтверждение профиля Google Business",
                "Загрузка 360° панорам и профессиональных фото",
                "Настройка ключевых гео-запросов и категорий",
                "Стратегия сбора реальных отзывов клиентов"
            ],
            price: "от 200 ₾",
            l2Href: "#contact",
            l2Label: "Заказать вывод в ТОП-3 Google Maps →",
            formats: [
                { title: "Базовая упаковка Google Business", desc: "Заполнение, теги, категории, фото", price: "от 200 ₾", href: "#contact", isL3: false },
                { title: "Оцифровка 360° для Street View", desc: "Панорамы внутри заведения на карте", price: "от 200 ₾", href: "/360-tours-service", isL3: true },
                { title: "Вывод в ТОП-3 гео-выдачи", desc: "SEO-оптимизация локального ранжирования", price: "от 500 ₾", href: "#contact", isL3: false },
            ],
        },
        realEstate: {
            key: "realEstate",
            title: "Недвижимость и девелопмент",
            category: "ИНДУСТРИЯ · ДЕВЕЛОПМЕНТ · АГЕНТСТВА",
            description: "Комплексная визуальная упаковка жилых комплексов, апартаментов, вилл и коммерческих объектов для застройщиков, риелторов и инвесторов.",
            bullets: [
                "4K Аэросъёмка видов, фасадов и окружающей инфраструктуры",
                "Интерактивные 360° виртуальные туры по интерьерам",
                "Динамичные Reels-обзоры планировок для соцсетей",
                "Виртуальный AI-стейджинг помещений в белом каркасе"
            ],
            price: "от 200 ₾",
            l2Href: "/real-estate-service",
            l2Label: "Все решения для недвижимости →",
            formats: [
                { title: "Аэросъёмка недвижимости", desc: "4K съёмка объектов и окружения", price: "от 200 ₾", href: "/drone-services/drone-real-estate", isL3: true },
                { title: "360° виртуальный тур квартиры", desc: "Интерактивный показ интерьеров", price: "от 200 ₾", href: "/360-tour-real-estate", isL3: true },
                { title: "Reels для риелторов", desc: "Динамичные видеообзоры планировок", price: "от 150 ₾", href: "/reels-promo/reels-realtor", isL3: true },
                { title: "AI Virtual Staging", desc: "Меблировка пустого пространства", price: "от 180 ₾", href: "/ai-visual/ai-staging", isL3: true },
            ],
        },
        hotels: {
            key: "hotels",
            title: "Отели и курорты",
            category: "ИНДУСТРИЯ · HOSPITALITY · BOOKING",
            description: "Создание продающего визуального контента для отелей, глэмпингов, курортов и шато Грузии для увеличения прямых бронирований.",
            bullets: [
                "FPV-пролёты One-Take сквозь холлы, спа и террасы",
                "360° туры номеров для Booking.com и Google Street View",
                "Атмосферные Reels сервиса, кухни и вечерних локаций",
                "Сезонные фотопаки для наружной рекламы и сайтов"
            ],
            price: "от 200 ₾",
            l2Href: "/hotels-service",
            l2Label: "Все решения для отелей и курортов →",
            formats: [
                { title: "Аэросъёмка отелей и курортов", desc: "Масштаб территории и панорамы", price: "от 200 ₾", href: "/drone-hotels-tourism", isL3: true },
                { title: "360° туры для отелей", desc: "Интерактивные 8K туры по номерам", price: "от 200 ₾", href: "/360-tour-hotels", isL3: true },
                { title: "Reels для отелей и спа", desc: "Атмосфера отдыха и сервис", price: "от 150 ₾", href: "/reels-promo/reels-hotel", isL3: true },
                { title: "AI описания номеров", desc: "Многоязычные тексты для Booking", price: "от 180 ₾", href: "/ai-content/hotel-ai-descriptions", isL3: true },
            ],
        },
        restaurants: {
            key: "restaurants",
            title: "Рестораны и бары",
            category: "ИНДУСТРИЯ · GASTRONOMY · REELS",
            description: "Аппетитная фуд-видеография, динамичный контент атмосферы заведения и 360° оцифровка залов для привлечения новых гостей.",
            bullets: [
                "Макросъёмка подачи фирменных блюд и коктейлей",
                "Вирусные Reels кухни, шеф-поваров и атмосферы",
                "360° виртуальный выбор столиков и банкетных зон",
                "AI-оптимизация меню для Wolt и Glovo"
            ],
            price: "от 200 ₾",
            l2Href: "/restaurants-service",
            l2Label: "Все решения для ресторанов и баров →",
            formats: [
                { title: "Аэросъёмка ресторанов и террас", desc: "Вид на город и веранды", price: "от 200 ₾", href: "/drone-services/drone-restaurants", isL3: true },
                { title: "360° тур залов ресторана", desc: "Виртуальный выбор столиков", price: "от 200 ₾", href: "/360-tour-restaurants", isL3: true },
                { title: "Reels фуд-подачи и атмосферы", desc: "Динамичный видеомонтаж", price: "от 150 ₾", href: "/reels-promo/reels-restaurant", isL3: true },
                { title: "AI карточки меню для доставки", desc: "Превью для Wolt и Glovo", price: "от 180 ₾", href: "/ai-visual/ai-menu-delivery", isL3: true },
            ],
        },
        tourism: {
            key: "tourism",
            title: "Туризм и гиды",
            category: "ИНДУСТРИЯ · TRAVEL · ЭКСКУРСИИ",
            description: "Эпичные горные съёмки, упаковка авторских туров, гидов и активного отдыха в Казбеги, Сванетии, Кахетии и Батуми.",
            bullets: [
                "Высотные 4K панорамы горных перевалов и каньонов",
                "Эмоциональные видеоролики впечатлений туристов",
                "Контент для продажи премиальных индивидуальных туров",
                "Быстрая адаптация роликов под TikTok и Instagram"
            ],
            price: "от 200 ₾",
            l2Href: "/tourism-service",
            l2Label: "Все решения для туризма и гидов →",
            formats: [
                { title: "Аэросъёмка горных локаций", desc: "4K видео перевалов и каньонов", price: "от 200 ₾", href: "/tourism-service", isL3: true },
                { title: "360° панорамы достопримечательностей", desc: "Оцифровка для Street View", price: "от 200 ₾", href: "/360-tour-tourism", isL3: true },
                { title: "Reels тревел-впечатлений", desc: "Эмоции туристов и маршруты", price: "от 150 ₾", href: "/reels-promo/reels-tourism", isL3: true },
                { title: "AI Упаковка турпакетов", desc: "Презентации и описания туров", price: "от 180 ₾", href: "/ai-content/tourism-ai-packaging", isL3: true },
            ],
        },
        auto: {
            key: "auto",
            title: "Автобизнес и дилеры",
            category: "ИНДУСТРИЯ · AUTOMOTIVE · SHOWROOM",
            description: "Динамичные FPV-погони, студийные видеообзоры премиальных автомобилей, контент до/после детейлинга и виртуальные автосалоны.",
            bullets: [
                "FPV-слежение за авто на горных дорогах и треках",
                "360° интерьерная съёмка салонов суперкаров",
                "ASMR и макросъёмка полировки и оклейки авто",
                "AI-замена уличных фонов на студийные для MyAuto.ge"
            ],
            price: "от 200 ₾",
            l2Href: "/auto-service",
            l2Label: "Все решения для автобизнеса →",
            formats: [
                { title: "Аэросъёмка авто в движении", desc: "FPV трекинг на дорогах Грузии", price: "от 200 ₾", href: "/auto-service", isL3: true },
                { title: "360° виртуальный автосалон", desc: "Круговой осмотр салона и кузова", price: "от 200 ₾", href: "/360-tour-auto", isL3: true },
                { title: "Reels для детейлинга и продаж", desc: "Динамичные видео до/после", price: "от 150 ₾", href: "/reels-promo/reels-auto", isL3: true },
                { title: "AI Студийный фон для каталогов", desc: "Замена фонов для автоплощадок", price: "от 180 ₾", href: "/ai-visual/ai-auto", isL3: true },
            ],
        },
        clinics: {
            key: "clinics",
            title: "Клиники и бьюти",
            category: "ИНДУСТРИЯ · MEDICAL & BEAUTY · TRUST",
            description: "Формирование высокого доверия пациентов через показ стерильности, премиального оборудования и экспертности врачей.",
            bullets: [
                "360° виртуальные туры по кабинетам и операционным",
                "Экспертные интервью врачей и ответы на частые вопросы",
                "Презентационные видео клиник для сайтов и карт",
                "Тактичный видеомонтаж эстетической медицины и косметологии"
            ],
            price: "от 200 ₾",
            l2Href: "/clinics-service",
            l2Label: "Все решения для клиник и медицины →",
            formats: [
                { title: "360° виртуальный тур по клинике", desc: "Показ стерильности и технологий", price: "от 200 ₾", href: "/360-tour-clinics", isL3: true },
                { title: "Reels интервью врачей", desc: "Экспертные ответы на вопросы", price: "от 150 ₾", href: "/reels-promo/reels-clinic", isL3: true },
                { title: "Презентационное видео медцентра", desc: "Упаковка для сайта и карт", price: "от 200 ₾", href: "/clinics-service", isL3: true },
            ],
        },
    },
    en: {
        aerial: {
            key: "aerial",
            title: "Aerial Drone & FPV Filming",
            category: "4K · FPV · AERIAL PRODUCTION",
            description: "Licensed aerial cinematography of real estate, construction, hotels and scenic Georgian locations on DJI drones in 4K HDR.",
            bullets: [
                "4K 60fps cinematic high-altitude angles",
                "FPV One-Take flythroughs of interiors and architecture",
                "Delivery of original 4K assets in 24–48h",
                "Official B2B contract & corporate invoices"
            ],
            price: "from 200 ₾",
            l2Href: "/drone-service/en",
            l2Label: "All Drone Formats & Price Guide (L2 Hub) →",
            formats: [
                { title: "Real Estate Aerial Filming", desc: "Views, facades and neighborhood context", price: "from 200 ₾", href: "/drone-services/drone-real-estate/en", isL3: true },
                { title: "Hotels & Resort Drone Shoot", desc: "Hospitality atmosphere and scenery", price: "from 200 ₾", href: "/drone-hotels-tourism/en", isL3: true },
                { title: "Restaurant Aerial Overview", desc: "Rooftop terraces and dining courtyards", price: "from 200 ₾", href: "/drone-services/drone-restaurants/en", isL3: true },
                { title: "Construction Progress Audit", desc: "GPS waypoint flights and PDF reports", price: "from 200 ₾", href: "/drone-construction-monitoring", isL3: true },
                { title: "FPV One-Take Flythrough", desc: "Continuous indoor/outdoor flight", price: "from 200 ₾", href: "/drone-fpv-cinema", isL3: true },
            ],
        },
        tour360: {
            key: "tour360",
            title: "360° Virtual Tours",
            category: "8K · VR · GOOGLE STREET VIEW",
            description: "Interactive 8K 3D tours for websites, Google Maps and VR. Guests and investors explore properties with real-life presence.",
            bullets: [
                "Ultra-high resolution 8K HDR capture",
                "Google Maps & Street View verified publishing",
                "Interactive hotspots with video, specs and prices",
                "Works seamlessly on mobile and VR headsets"
            ],
            price: "from 200 ₾",
            l2Href: "/360-tours-service/en",
            l2Label: "All 360° Tours & Street View Services (L2 Hub) →",
            formats: [
                { title: "360° Real Estate Tour", desc: "Virtual apartment and villa walkthroughs", price: "from 200 ₾", href: "/360-tour-real-estate/en", isL3: true },
                { title: "360° Hotel & Resort Tour", desc: "Room and suite digitization for Booking", price: "from 200 ₾", href: "/360-tour-hotels/en", isL3: true },
                { title: "360° Restaurant Walkthrough", desc: "Interactive dining area & table selection", price: "from 200 ₾", href: "/360-tour-restaurants", isL3: true },
                { title: "360° Virtual Auto Showroom", desc: "Cabin and exterior interactive scans", price: "from 200 ₾", href: "/360-tour-auto", isL3: true },
                { title: "360° Clinical Tour", desc: "Sterile spaces and modern medical tech", price: "from 200 ₾", href: "/360-tour-clinics/en", isL3: true },
            ],
        },
        reels: {
            key: "reels",
            title: "Reels, Shorts & Promo Video",
            category: "9:16 · TRENDS · REACH",
            description: "Vertical and horizontal video content for ad campaigns, social channels and websites with rhythmic sound design.",
            bullets: [
                "Studio audio recording with DJI Mic 2 wireless",
                "Fast-paced editing with cinematic color grading",
                "Animated captions and visual viral hooks",
                "Packages from 3 to 10 clips per shoot session"
            ],
            price: "from 150 ₾",
            l2Href: "/reels-service/en",
            l2Label: "All Reels & Video Production Formats (L2 Hub) →",
            formats: [
                { title: "Realtor & Property Reels", desc: "Floorplan and view apartment highlights", price: "from 150 ₾", href: "/reels-promo/reels-realtor/en", isL3: true },
                { title: "Hotel & Resort Reels", desc: "Spa, suites, dining and guest vibes", price: "from 150 ₾", href: "/reels-promo/reels-hotel", isL3: true },
                { title: "Restaurant & Food Reels", desc: "Macro dish plating and barcraft", price: "from 150 ₾", href: "/reels-promo/reels-restaurant", isL3: true },
                { title: "Auto & Detailing Reels", desc: "Before/after and exhaust notes", price: "from 150 ₾", href: "/reels-promo/reels-auto", isL3: true },
                { title: "Doctor & Clinic Reels", desc: "Expert Q&A and procedure explainers", price: "from 150 ₾", href: "/reels-promo/reels-clinic", isL3: true },
            ],
        },
        aiContent: {
            key: "aiContent",
            title: "AI Visualization & Staging",
            category: "AI · 3D STAGING · RENDERS",
            description: "Interior and commercial visualization with generative AI. Furnish vacant units and create luxury marketing imagery without physical staging costs.",
            bullets: [
                "Virtual 4K staging of vacant developments",
                "High-conversion food menu cards for delivery apps",
                "3D catalogs for auto & products without studio rent",
                "First creative concepts delivered in 12h"
            ],
            price: "from 180 ₾",
            l2Href: "/ai-visualization-service/en",
            l2Label: "All AI Visualization Formats (L2 Hub) →",
            formats: [
                { title: "AI Virtual Staging", desc: "Furnishing shell & core properties", price: "from 180 ₾", href: "/ai-visual/ai-staging", isL3: true },
                { title: "Hotel AI Content & Descriptions", desc: "Multilingual OTA & web packaging", price: "from 180 ₾", href: "/ai-content/hotel-ai-descriptions", isL3: true },
                { title: "Tourism AI Packaging", desc: "Tour itinerary visuals and landing assets", price: "from 180 ₾", href: "/ai-content/tourism-ai-packaging", isL3: true },
                { title: "AI Food Menu & Delivery Cards", desc: "High-CTR previews for delivery apps", price: "from 180 ₾", href: "/ai-visual/ai-menu-delivery", isL3: true },
                { title: "AI Automotive Studio Swap", desc: "Replacing street backgrounds for dealer inventory", price: "from 180 ₾", href: "/ai-visual/ai-auto", isL3: true },
            ],
        },
        websites: {
            key: "websites",
            title: "AEO & SEO Website Development",
            category: "NEXT.JS · TURBOPACK · AEO",
            description: "High-speed B2B websites and landing pages built on Next.js with instant page loads, optimized for AI Search (AEO) and Google.",
            bullets: [
                "100/100 score on Google PageSpeed Insights",
                "Structured Schema.org microdata for AI Engines (AEO)",
                "Interactive ROI calculators and custom lead forms",
                "Direct WhatsApp & CRM synchronization"
            ],
            price: "from 1,200 ₾",
            l2Href: "#contact",
            l2Label: "Discuss B2B Web Development →",
            formats: [
                { title: "Full B2B Next.js Landing", desc: "High-speed modern agency website", price: "from 1,200 ₾", href: "#contact", isL3: false },
                { title: "Interactive Bento ROI Calculator", desc: "Lead generation interactive tool", price: "from 200 ₾", href: "#contact", isL3: false },
                { title: "AEO / AI Search Audit", desc: "Optimization for ChatGPT & Perplexity", price: "from 400 ₾", href: "#contact", isL3: false },
            ],
        },
        googleMaps: {
            key: "googleMaps",
            title: "Google Maps & Local SEO Optimization",
            category: "GEO · GOOGLE MAPS · TOP-3",
            description: "End-to-end optimization to rank your business in the TOP-3 of Google Maps local search across Georgia.",
            bullets: [
                "Google Business profile audit & verification",
                "High-res 360° panoramas & professional media upload",
                "Geo-keyword targeting & category calibration",
                "Reputation management and review strategy"
            ],
            price: "from 200 ₾",
            l2Href: "#contact",
            l2Label: "Order TOP-3 Google Maps Ranking →",
            formats: [
                { title: "Google Business Optimization", desc: "Tags, categories, verified listing", price: "from 200 ₾", href: "#contact", isL3: false },
                { title: "360° Street View Publishing", desc: "Indoor spherical panoramas", price: "from 200 ₾", href: "/360-tours-service/en", isL3: true },
                { title: "TOP-3 Local Geo Ranking", desc: "Local SEO growth strategy", price: "from 500 ₾", href: "#contact", isL3: false },
            ],
        },
        realEstate: {
            key: "realEstate",
            title: "Real Estate & Development",
            category: "INDUSTRY · DEVELOPMENT · BROKERS",
            description: "End-to-end visual packaging of residential developments, apartments and commercial properties for developers and agencies.",
            bullets: [
                "4K Aerial filming of views, facades and surroundings",
                "Interactive 360° interior walkthroughs",
                "Dynamic Reels walkthroughs for social media",
                "AI virtual staging of unfinished properties"
            ],
            price: "from 200 ₾",
            l2Href: "/real-estate-service/en",
            l2Label: "All Real Estate Solutions (L2 Hub) →",
            formats: [
                { title: "Real Estate Drone Filming", desc: "4K views, architecture and surroundings", price: "from 200 ₾", href: "/drone-services/drone-real-estate/en", isL3: true },
                { title: "360° Virtual Property Tour", desc: "Interior interactive walkthrough", price: "from 200 ₾", href: "/360-tour-real-estate/en", isL3: true },
                { title: "Reels for Real Estate", desc: "Dynamic walkthroughs for social media", price: "from 150 ₾", href: "/reels-promo/reels-realtor/en", isL3: true },
                { title: "AI Virtual Staging", desc: "Furnishing shell & core properties", price: "from 180 ₾", href: "/ai-visual/ai-staging", isL3: true },
            ],
        },
        hotels: {
            key: "hotels",
            title: "Hotels & Resorts",
            category: "INDUSTRY · HOSPITALITY · BOOKING",
            description: "High-converting visual production for hotels, glampings and Georgian chateaus to drive direct bookings.",
            bullets: [
                "FPV One-Take flights through lobbies and suites",
                "360° room walkthroughs for Booking.com & Google",
                "Atmospheric Reels of dining, spa and guest vibes",
                "Seasonal high-res photo packages for billboard & web"
            ],
            price: "from 200 ₾",
            l2Href: "/hotels-service/en",
            l2Label: "All Hospitality & Hotel Solutions (L2 Hub) →",
            formats: [
                { title: "Hotel Aerial Cinematography", desc: "Grounds, views and setting", price: "from 200 ₾", href: "/drone-hotels-tourism/en", isL3: true },
                { title: "360° Hotel Room Walkthrough", desc: "8K interactive tours for Booking", price: "from 200 ₾", href: "/360-tour-hotels/en", isL3: true },
                { title: "Hotel & Spa Reels", desc: "Atmosphere, service & suites", price: "from 150 ₾", href: "/reels-promo/reels-hotel", isL3: true },
                { title: "AI Room Descriptions", desc: "Multilingual OTA texts", price: "from 180 ₾", href: "/ai-content/hotel-ai-descriptions", isL3: true },
            ],
        },
        restaurants: {
            key: "restaurants",
            title: "Restaurants & Bars",
            category: "INDUSTRY · GASTRONOMY · REELS",
            description: "Mouth-watering food cinematography, vibrant nightlife coverage and 360° digitized dining spaces.",
            bullets: [
                "Macro texture cinematography of signature dishes",
                "Viral Reels of barcraft, chef prep and dining vibe",
                "360° virtual table & banquet area selection",
                "AI menu optimization for Wolt and Glovo"
            ],
            price: "from 200 ₾",
            l2Href: "/restaurants-service/en",
            l2Label: "All Restaurant & Dining Solutions (L2 Hub) →",
            formats: [
                { title: "Restaurant Aerial & Terrace", desc: "Rooftop views & outdoor seating", price: "from 200 ₾", href: "/drone-services/drone-restaurants/en", isL3: true },
                { title: "360° Dining Hall Tour", desc: "Virtual table & venue selection", price: "from 200 ₾", href: "/360-tour-restaurants", isL3: true },
                { title: "Food & Barcraft Reels", desc: "High-impact video editing", price: "from 150 ₾", href: "/reels-promo/reels-restaurant", isL3: true },
                { title: "AI Menu Previews for Wolt/Glovo", desc: "Delivery app imagery", price: "from 180 ₾", href: "/ai-visual/ai-menu-delivery", isL3: true },
            ],
        },
        tourism: {
            key: "tourism",
            title: "Tourism & Guides",
            category: "INDUSTRY · TRAVEL · EXPEDITIONS",
            description: "Epic mountain filming, bespoke packaging of tour itineraries in Kazbegi, Svaneti, Kakheti and Batumi.",
            bullets: [
                "High-altitude 4K panoramas of mountain passes",
                "Emotional traveler storytelling & adventure clips",
                "Visual packaging for luxury private tours",
                "Fast turnaround optimized for TikTok & Instagram"
            ],
            price: "from 200 ₾",
            l2Href: "/tourism-service/en",
            l2Label: "All Tourism & Travel Solutions (L2 Hub) →",
            formats: [
                { title: "Scenic Mountain Drone Shots", desc: "4K passes and canyons", price: "from 200 ₾", href: "/tourism-service/en", isL3: true },
                { title: "360° Landmark Panoramas", desc: "Street View mapping", price: "from 200 ₾", href: "/360-tour-tourism", isL3: true },
                { title: "Travel Experience Reels", desc: "Authentic emotions & routes", price: "from 150 ₾", href: "/reels-promo/reels-tourism", isL3: true },
                { title: "AI Tour Itinerary Packaging", desc: "Custom pitch decks & visuals", price: "from 180 ₾", href: "/ai-content/tourism-ai-packaging", isL3: true },
            ],
        },
        auto: {
            key: "auto",
            title: "Automotive & Dealers",
            category: "INDUSTRY · AUTOMOTIVE · SHOWROOM",
            description: "Dynamic FPV chase shots, studio vehicle reviews, detailing before/after showcases and virtual showrooms.",
            bullets: [
                "High-speed FPV tracking on scenic mountain passes",
                "360° interior scans of supercar cabins",
                "ASMR & macro sound design for detailing shops",
                "AI virtual studio background swaps for MyAuto.ge"
            ],
            price: "from 200 ₾",
            l2Href: "/auto-service/en",
            l2Label: "All Automotive Solutions (L2 Hub) →",
            formats: [
                { title: "FPV Car Chase Tracking", desc: "High-speed filming on passes", price: "from 200 ₾", href: "/auto-service/en", isL3: true },
                { title: "360° Virtual Car Cabin", desc: "Interactive interior inspection", price: "from 200 ₾", href: "/360-tour-auto", isL3: true },
                { title: "Detailing & Sales Reels", desc: "Before/after video showcases", price: "from 150 ₾", href: "/reels-promo/reels-auto", isL3: true },
                { title: "AI Virtual Showroom Backgrounds", desc: "Studio look for car listings", price: "from 180 ₾", href: "/ai-visual/ai-auto", isL3: true },
            ],
        },
        clinics: {
            key: "clinics",
            title: "Clinics & Beauty",
            category: "INDUSTRY · MEDICAL & BEAUTY · TRUST",
            description: "Building patient confidence through pristine clinical cleanliness, modern equipment and doctor authority.",
            bullets: [
                "360° virtual walkthroughs of diagnostic rooms",
                "Doctor Q&A formats & expert authority clips",
                "Flagship presentation videos for website & maps",
                "Discrete cinematography for aesthetic medicine"
            ],
            price: "from 200 ₾",
            l2Href: "/clinics-service/en",
            l2Label: "All Medical & Clinic Solutions (L2 Hub) →",
            formats: [
                { title: "360° Virtual Clinic Walkthrough", desc: "Showcasing sterility and tech", price: "from 200 ₾", href: "/360-tour-clinics/en", isL3: true },
                { title: "Doctor Q&A Reels", desc: "Expert answers to patient questions", price: "from 150 ₾", href: "/reels-promo/reels-clinic", isL3: true },
                { title: "Clinic Presentation Video", desc: "Branded media for web and maps", price: "from 200 ₾", href: "/clinics-service/en", isL3: true },
            ],
        },
    },
};
