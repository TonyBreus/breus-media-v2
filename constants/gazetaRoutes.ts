export type GazetaNavItem = {
    label: string;
    href: string;
};

export type GazetaService = {
    title: string;
    price: string;
    primaryHref?: string;
    image?: string;
};

export type GazetaCategoryPage = {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: string[];
    allServicesHref?: string;
    services?: GazetaService[];
};

export const gazetaDetailRoutes = {
    droneService: "/drone-service",
    monitoringStroiki: "/drone-construction-monitoring",
    objectInspection: "/drone-object-inspection",
    realEstate: "/real-estate-service",
    hotels: "/gazeta/hotels",
    restaurants: "/gazeta/restaurants",
    auto: "/gazeta/auto",
    tourism: "/gazeta/tourism",
    clinics: "/gazeta/clinics",
    it: "/gazeta/it",
    tours360: "/gazeta/360-tours",
    promoVideo: "/gazeta/promo-video",
    events: "/drone-weddings-events",
    aiContent: "/gazeta/ai-content",
    reels: "/gazeta/reels",
} as const;

export const gazetaNicheLandingRoutes: Record<string, string> = {
    "02": gazetaDetailRoutes.droneService,
    "03": "/360-tours-service",
    "04": "/reels-service",
    "05": "/ai-visualization-service",
    "06": "/real-estate-service",
    "07": "/hotels-service",
    "08": "/restaurants-service",
    "09": "/auto-service",
    "10": "/tourism-service",
    "11": "/clinics-service",
    "12": gazetaDetailRoutes.it,
};

export const gazetaIndustryNavItems: GazetaNavItem[] = [
    { label: "Недвижимость", href: gazetaDetailRoutes.realEstate },
    { label: "Автобизнес", href: gazetaDetailRoutes.auto },
    { label: "Отели", href: gazetaDetailRoutes.hotels },
    { label: "Рестораны", href: gazetaDetailRoutes.restaurants },
    { label: "Туризм", href: gazetaDetailRoutes.tourism },
    { label: "Клиники", href: gazetaDetailRoutes.clinics },
    { label: "IT", href: gazetaDetailRoutes.it },
];

export const gazetaServiceNavItems: GazetaNavItem[] = [
    { label: "Аэросъёмка", href: gazetaDetailRoutes.droneService },
    { label: "360° Туры", href: gazetaDetailRoutes.tours360 },
    { label: "AI-Визуализация", href: gazetaDetailRoutes.aiContent },
    { label: "Reels & Shorts", href: gazetaDetailRoutes.reels },
];

export const gazetaTickerLine1 = [
    { text: "НЕДВИЖИМОСТЬ", link: "/real-estate-service" },
    { text: "АВТОБИЗНЕС", link: "/auto-service" },
    { text: "ОТЕЛИ", link: "/hotels-service" },
    { text: "РЕСТОРАНЫ", link: "/restaurants-service" },
    { text: "ТУРИЗМ", link: "/tourism-service" },
    { text: "КЛИНИКИ", link: "/clinics-service" },
];

export const gazetaTickerLine2 = [
    { text: "Аэросъёмка", link: gazetaDetailRoutes.droneService },
    { text: "360° Туры", link: "/360-tours-service" },
    { text: "Промо Видео", link: "/promo-video-service" },
    { text: "AI-Визуализация", link: "/ai-visualization-service" },
    { text: "Reels & Shorts", link: "/reels-service" },
];

export const gazetaDroneServiceTickerExcludeTexts = ["Промо видео", "Promo Video"];

export const gazetaCategoryPagesBySlug: Record<string, GazetaCategoryPage> = {
    "real-estate": {
        eyebrow: "Недвижимость",
        title: "Визуал для недвижимости",
        subtitle: "Аэросъёмка, 360° туры и промо-видео для продажи и аренды объектов.",
        highlights: [
            "Аэросъёмка объектов",
            "360° виртуальные туры",
            "Промо-видео для ЖК",
            "AI-стейджинг",
        ],
        allServicesHref: "/real-estate-service",
        services: [
            { title: "Промо-видео для недвижимости", price: "Promo Video · от 350 ₾" },
            { title: "Аэросъёмка объекта", price: "Drone · от 250 ₾", primaryHref: "/drone-services/drone-real-estate" },
            { title: "360° тур для недвижимости", price: "360° · от 350 ₾", primaryHref: "/360-tour-real-estate" },
            { title: "AI-стейджинг и меблировка", price: "AI Staging · от 120 ₾" },
            { title: "Reels для недвижимости", price: "Reels · от 650 ₾", primaryHref: "/reels-promo/reels-realtor" },
        ],
    },
    auto: {
        eyebrow: "Авто бизнес",
        title: "Контент для авто бизнеса",
        subtitle: "Видео, aerial-визуал и AI-упаковка для салонов, проката и автомобильных брендов.",
        highlights: [
            "Обзорные видео автомобилей и салона",
            "Aerial-визуал стоянок и дилерских центров",
            "Reels и promo-креативы для продаж",
            "AI-описания и контент для листингов",
        ],
        allServicesHref: "/auto-service",
        services: [
            { title: "Видео дилерского центра", price: "Brand Video · от 300 ₾" },
            { title: "Аэросъёмка авто и автосалонов", price: "Drone · от 400 ₾" },
            { title: "Reels для автобизнеса", price: "Reels · от 450 ₾" },
            { title: "Обзорный контент по моделям", price: "Model Showcase · от 500 ₾" },
            { title: "Контент для сервиса / детейлинга", price: "Service Content · от 550 ₾" },
        ],
    },
    hotels: {
        eyebrow: "Отели",
        title: "Визуал для отелей и курортов",
        subtitle: "Показываем территорию, номера и атмосферу так, чтобы гость понимал ценность до бронирования.",
        highlights: [
            "Hero-видео и reels для сайта и OTA",
            "Aerial-визуал территории и локации",
            "360° туры по номерам и зонам",
            "Сезонные контент-пакеты для соцсетей",
        ],
        allServicesHref: "/hotels-service",
        services: [
            { title: "Видеотур по отелю", price: "Cinematic · от 350 ₾" },
            { title: "Аэросъёмка территории", price: "Drone · от 400 ₾", primaryHref: "/drone-hotels-tourism" },
            { title: "360° тур по номерам", price: "360° · от 500 ₾", primaryHref: "/360-tour-hotels" },
            { title: "Reels и Shorts для отеля", price: "Short-form · от 450 ₾" },
            { title: "Сезонный контент-пакет", price: "Пакет · от 650 ₾" },
        ],
    },
    restaurants: {
        eyebrow: "Рестораны",
        title: "Контент для ресторанов",
        subtitle: "Фуд-видео, atmosphere-ролики и короткий вертикальный контент для заведений и rooftop-локаций.",
        highlights: [
            "Фуд-видео и брендовые ролики",
            "Aerial-визуал террас и roof-top пространств",
            "Reels-пакеты и seasonal content",
            "Визуал для Google Maps и меню",
        ],
        allServicesHref: "/restaurants-service",
        services: [
            { title: "Имиджевое видео ресторана", price: "Brand Video · от 300 ₾" },
            { title: "Reels для соцсетей", price: "Short-form · от 350 ₾" },
            { title: "Аэросъёмка локации", price: "Drone · от 400 ₾", primaryHref: "/drone-services/drone-restaurants" },
            { title: "Съёмка интерьера и подачи", price: "Photo + Video · от 450 ₾" },
            { title: "Контент-пакет на месяц", price: "Пакет · от 550 ₾" },
        ],
    },
    tourism: {
        eyebrow: "Туризм",
        title: "Контент для туризма и локаций",
        subtitle: "Aerial, promo и guide-видео для маршрутов, курортов и travel-брендов в Грузии.",
        highlights: [
            "Aerial-съёмка локаций и маршрутов",
            "Промо-ролики для направлений",
            "Guide-видео и reels для туроператоров",
            "Контент-пакеты под иностранную аудиторию",
        ],
        allServicesHref: "/tourism-service",
        services: [
            { title: "Видео тура или маршрута", price: "Cinematic · от 350 ₾" },
            { title: "Аэросъёмка локации", price: "Drone · от 400 ₾", primaryHref: "/drone-hotels-tourism" },
            { title: "Аэросъёмка локаций", price: "Drone · от 250 ₾", primaryHref: "/drone-hotels-tourism" },
            { title: "Маршрутные видео", price: "Video · от 350 ₾" },
            { title: "Reels для туров", price: "Reels · от 300 ₾" },
            { title: "360° панорамы", price: "360° · от 350 ₾" },
        ],
    },
    clinics: {
        eyebrow: "Клиники и медицина",
        title: "Медицинский контент и упаковка",
        subtitle: "Создаем доверительный визуал для клиник, врачей и медицинских центров.",
        highlights: [
            "Видеоэкскурсии по клинике и кабинетам",
            "Экспертные Reels с врачами",
            "360° туры для Google Maps",
            "Интерьерная и предметная фотосъёмка",
        ],
        allServicesHref: "/clinics-service",
        services: [
            { title: "Видео о клинике и врачах", price: "Video · от 350 ₾" },
            { title: "Экспертные Reels", price: "Reels · от 350 ₾" },
            { title: "360° тур клиники", price: "360° · от 350 ₾" },
            { title: "AI-упаковка услуг", price: "AI Content · от 200 ₾" },
        ],
    },
    it: {
        eyebrow: "IT",
        title: "Контент для IT и tech",
        subtitle: "Продуктовые видео, case-study и AI-визуал для компаний, стартапов и B2B-команд.",
        highlights: [
            "Product demo и investor video",
            "Case-study и client story форматы",
            "Employer-branding и team content",
            "AI-контент для LinkedIn и launch-кампаний",
        ],
        services: [
            { title: "Имиджевое видео бизнеса", price: "Brand Video · от 300 ₾" },
            { title: "Контент для сайта и рекламы", price: "Performance Pack · от 450 ₾" },
            { title: "Reels и Shorts", price: "Short-form · от 450 ₾" },
            { title: "360° туры", price: "360° · от 550 ₾" },
            { title: "Съёмка пространства / объекта", price: "Space Content · от 500 ₾" },
        ],
    },
    "virtual-tours": {
        eyebrow: "360° Туры",
        title: "Виртуальные туры и панорамы",
        subtitle: "Интерактивные 3D-туры для сайтов, Google Maps и удалённых продаж 24/7.",
        highlights: [
            "360° туры для недвижимости",
            "Виртуальные туры для отелей",
            "Панорамы для ресторанов и клиник",
            "Интеграция в Google Business Profile",
        ],
        allServicesHref: "/360-tours-service",
        services: [
            { title: "360° тур для недвижимости", price: "360° · от 350 ₾", primaryHref: "/360-tour-real-estate" },
            { title: "360° тур для отелей", price: "360° · от 350 ₾", primaryHref: "/360-tour-hotels" },
            { title: "360° тур для ресторанов", price: "360° · от 350 ₾" },
            { title: "360° тур для клиник", price: "360° · от 350 ₾" },
        ],
    },
    "promo-video": {
        eyebrow: "Промо видео",
        title: "Промо и брендовые ролики",
        subtitle: "Собираем сильный визуальный пакет для рекламы, бренд-коммуникации и digital-кампаний.",
        highlights: [
            "Имиджевые и performance-ролики",
            "Short-form версии для соцсетей",
            "Съёмка, монтаж и цвет",
            "Aerial и motion-акценты в одном продакшне",
        ],
        allServicesHref: "/promo-video-service",
        services: [
            { title: "Промо-видео для недвижимости", price: "Promo Video · от 350 ₾" },
            { title: "Промо-видео для отелей", price: "Promo Video · от 500 ₾" },
            { title: "Промо-видео для ресторанов", price: "Promo Video · от 350 ₾" },
            { title: "Промо-видео для автобизнеса", price: "Promo Video · от 350 ₾" },
            { title: "Промо-видео для туризма", price: "Promo Video · от 300 ₾" },
        ],
    },
    events: {
        eyebrow: "Мероприятия",
        title: "Видео для мероприятий",
        subtitle: "Отчётные ролики, короткие social cuts и aerial-покрытие для событий, запусков и фестивалей.",
        highlights: [
            "Aftermovie и highlights",
            "Vertical cuts в день события",
            "Aerial-покрытие площадки и crowd shots",
            "Контент для PR и соцсетей",
        ],
        allServicesHref: "/promo-video-service",
        services: [
            { title: "Промо-видео для мероприятий", price: "Promo Video · от 450 ₾", primaryHref: "/promo-video-service" },
            { title: "Reels и Shorts с события", price: "Short-form · от 450 ₾", primaryHref: "/reels-service" },
            { title: "Аэросъёмка площадки", price: "Drone · от 250 ₾", primaryHref: "/drone-service" },
            { title: "AI-упаковка контента", price: "AI Content · от 200 ₾", primaryHref: "/ai-visualization-service" },
            { title: "Полный пакет для события", price: "Пакет · от 850 ₾", primaryHref: "/gazeta#contact" },
        ],
    },
    "ai-content": {
        eyebrow: "AI Content",
        title: "AI content и visual packaging",
        subtitle: "Используем AI там, где он ускоряет продакшн, локализацию и масштабирование визуала.",
        highlights: [
            "AI-адаптация контента под рынки",
            "Генеративный visual support",
            "AI-copy и content packaging",
            "Мультиязычные версии роликов и постов",
        ],
        allServicesHref: "/ai-visualization-service",
        services: [
            { title: "AI-визуализация недвижимости", price: "AI Visualization · от 150 ₾" },
            { title: "AI staging и меблировка", price: "AI Staging · от 120 ₾" },
            { title: "AI-визуализация пространств", price: "AI Space Visuals · от 150 ₾" },
            { title: "AI-продуктовый визуал", price: "AI Product Visuals · от 100 ₾" },
            { title: "AI-визуал для автобизнеса", price: "AI Auto Visuals · от 120 ₾" },
        ],
    },
    reels: {
        eyebrow: "Reels",
        title: "Reels и short-form контент",
        subtitle: "Пакеты вертикальных видео для охвата, узнаваемости и регулярного digital-присутствия.",
        highlights: [
            "Пакеты reels под нишу и сезон",
            "Сценарии, съёмка и монтаж",
            "Контент для Instagram, TikTok и Shorts",
            "Регулярные форматы под рост присутствия",
        ],
        allServicesHref: "/reels-service",
        services: [
            { title: "Reels для риелторов и недвижимости", price: "Reels · от 650 ₾", primaryHref: "/reels-promo/reels-realtor" },
            { title: "Reels для отелей", price: "Reels · от 450 ₾" },
            { title: "Reels для ресторанов", price: "Reels · от 350 ₾" },
            { title: "Reels для автобизнеса", price: "Reels · от 450 ₾" },
            { title: "Reels для туризма", price: "Reels · от 300 ₾" },
            { title: "Reels для клиник", price: "Reels · от 350 ₾" },
        ],
    },
};
