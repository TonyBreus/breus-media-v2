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
    it: "/business-service",
    customBusiness: "/gazeta/custom-business",
    tours360: "/gazeta/360-tours",
    promoVideo: "/gazeta/promo-video",
    events: "/gazeta/events",
    aiContent: "/gazeta/ai-content",
    reels: "/gazeta/reels",
} as const;

export const gazetaNicheLandingRoutes: Record<string, string> = {
    "00": gazetaDetailRoutes.droneService,
    "01": "/real-estate-service",
    "02": "/hotels-service",
    "03": "/restaurants-service",
    "04": "/auto-service",
    "05": "/tourism-service",
    "06": "/clinics-service",
    "07": gazetaDetailRoutes.it,
    "08": "/business-service",
};

export const gazetaIndustryNavItems: GazetaNavItem[] = [
    { label: "Недвижимость", href: gazetaDetailRoutes.realEstate },
    { label: "Автобизнес", href: gazetaDetailRoutes.auto },
    { label: "Отели", href: gazetaDetailRoutes.hotels },
    { label: "Рестораны", href: gazetaDetailRoutes.restaurants },
    { label: "Туризм", href: gazetaDetailRoutes.tourism },
    { label: "Клиники", href: gazetaDetailRoutes.clinics },
    { label: "IT", href: gazetaDetailRoutes.it },
    { label: "Ваш бизнес", href: gazetaDetailRoutes.customBusiness },
];

export const gazetaServiceNavItems: GazetaNavItem[] = [
    { label: "Аэросъёмка", href: gazetaDetailRoutes.droneService },
    { label: "360° Туры", href: gazetaDetailRoutes.tours360 },
    { label: "Промо Видео", href: gazetaDetailRoutes.promoVideo },
    { label: "Мероприятия", href: gazetaDetailRoutes.events },
    { label: "AI Content", href: gazetaDetailRoutes.aiContent },
    { label: "Reels", href: gazetaDetailRoutes.reels },
];

export const gazetaTickerLine1 = [
    { text: "НЕДВИЖИМОСТЬ", link: "/real-estate-service" },
    { text: "АВТОБИЗНЕС", link: "/auto-service" },
    { text: "ОТЕЛИ", link: "/hotels-service" },
    { text: "РЕСТОРАНЫ", link: "/restaurants-service" },
    { text: "ТУРИЗМ", link: "/tourism-service" },
    { text: "КЛИНИКИ", link: "/clinics-service" },
    { text: "ВАШ БИЗНЕС", link: "/business-service" },
];

export const gazetaTickerLine2 = [
    { text: "Аэросъёмка", link: gazetaDetailRoutes.droneService },
    { text: "360° Туры", link: "/360-tours-service" },
    { text: "Промо Видео", link: "/promo-video-service" },
    { text: "AI Content", link: "/ai-visualization-service" },
    { text: "Reels", link: "/reels-service" },
];

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
            { title: "Промо-видео для недвижимости", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-real-estate" },
            { title: "Аэросъёмка объекта", price: "Drone · от 400 ₾", primaryHref: "/drone-real-estate" },
            { title: "360° тур для недвижимости", price: "360° · от 300 ₾", primaryHref: "/360-tour-real-estate" },
            { title: "AI-стейджинг и меблировка", price: "AI Staging · по задаче", primaryHref: "/ai-visual/ai-staging" },
            { title: "Reels для недвижимости", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-real-estate" },
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
            { title: "Видео дилерского центра", price: "Brand Video · от 300 ₾", primaryHref: "/promo-video/promo-car-dealer" },
            { title: "Аэросъёмка авто и автосалонов", price: "Drone · от 400 ₾", primaryHref: "/drone-services/drone-auto" },
            { title: "Reels для автобизнеса", price: "Reels · от 450 ₾", primaryHref: "/reels-promo/reels-auto" },
            { title: "Обзорный контент по моделям", price: "Model Showcase · от 500 ₾", primaryHref: "/promo-video/auto-model-review" },
            { title: "Контент для сервиса / детейлинга", price: "Service Content · от 550 ₾", primaryHref: "/promo-video/auto-service-detailing" },
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
            { title: "Видеотур по отелю", price: "Cinematic · от 350 ₾", primaryHref: "/promo-video/promo-hotel" },
            { title: "Аэросъёмка территории", price: "Drone · от 400 ₾", primaryHref: "/drone-hotels-tourism" },
            { title: "360° тур по номерам", price: "360° · от 500 ₾", primaryHref: "/360-tour-hotels" },
            { title: "Reels и Shorts для отеля", price: "Short-form · от 450 ₾", primaryHref: "/reels-promo/reels-hotel" },
            { title: "Сезонный контент-пакет", price: "Пакет · от 650 ₾", primaryHref: "/reels-promo/hotel-seasonal-content" },
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
            { title: "Имиджевое видео ресторана", price: "Brand Video · от 300 ₾", primaryHref: "/promo-video/promo-restaurant" },
            { title: "Reels для соцсетей", price: "Short-form · от 350 ₾", primaryHref: "/reels-promo/reels-restaurant" },
            { title: "Аэросъёмка локации", price: "Drone · от 400 ₾", primaryHref: "/drone-services/drone-restaurants" },
            { title: "Съёмка интерьера и подачи", price: "Photo + Video · от 450 ₾", primaryHref: "/promo-video/restaurant-interior-food" },
            { title: "Контент-пакет на месяц", price: "Пакет · от 550 ₾", primaryHref: "/reels-promo/restaurant-content-pack" },
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
            { title: "Видео тура или маршрута", price: "Cinematic · от 350 ₾", primaryHref: "/promo-video/promo-tourism-route" },
            { title: "Аэросъёмка локации", price: "Drone · от 400 ₾", primaryHref: "/drone-hotels-tourism" },
            { title: "Reels для турпроекта", price: "Short-form · от 450 ₾", primaryHref: "/reels-promo/reels-tourism" },
            { title: "Промо для экскурсии / активности", price: "Promo · от 550 ₾", primaryHref: "/promo-video/promo-excursion" },
            { title: "AI-упаковка предложений", price: "AI Content · от 300 ₾", primaryHref: "/ai-content/tourism-ai-packaging" },
        ],
    },
    clinics: {
        eyebrow: "Клиники",
        title: "Контент для клиник",
        subtitle: "Чистый, доверительный визуал для медцентров, процедур и сервисов, где важны ясность и репутация.",
        highlights: [
            "Имиджевые видео клиники и команды",
            "Контент о процедурах и сервисах",
            "Reels и короткие форматы для соцсетей",
            "Мультиязычная AI-упаковка контента",
        ],
        allServicesHref: "/clinics-service",
        services: [
            { title: "Имиджевое видео клиники", price: "Brand Video · от 350 ₾", primaryHref: "/promo-video/promo-clinic" },
            { title: "Видео для врача / направления", price: "Expert Video · от 400 ₾", primaryHref: "/promo-video/promo-doctor" },
            { title: "Съёмка интерьера и кабинетов", price: "Photo + Video · от 450 ₾", primaryHref: "/promo-video/clinic-interior" },
            { title: "Reels для клиники", price: "Reels · от 450 ₾", primaryHref: "/reels-promo/reels-clinic" },
            { title: "360° тур для клиник", price: "360° · от 500 ₾", primaryHref: "/360-tour-clinics" },
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
        allServicesHref: "/business-service",
        services: [
            { title: "Имиджевое видео бизнеса", price: "Brand Video · от 300 ₾" },
            { title: "Контент для сайта и рекламы", price: "Performance Pack · от 450 ₾" },
            { title: "Reels и Shorts", price: "Short-form · от 450 ₾" },
            { title: "360° туры", price: "360° · от 550 ₾", primaryHref: "/360-tour-business" },
            { title: "Съёмка пространства / объекта", price: "Space Content · от 500 ₾" },
        ],
    },
    "360-tours": {
        eyebrow: "360° Туры",
        title: "360° туры для бизнеса",
        subtitle: "Интерактивные туры, которые дают эффект присутствия и сокращают путь до запроса.",
        highlights: [
            "Съёмка и сборка 360° тура",
            "Интеграция в сайт и Google Maps",
            "POI и интерактивные точки",
            "Туры для недвижимости, hospitality и retail",
        ],
        allServicesHref: "/360-tours-service",
        services: [
            { title: "360° туры для недвижимости", price: "360° · от 300 ₾", primaryHref: "/360-tour-real-estate" },
            { title: "360° туры для отелей", price: "360° · от 300 ₾", primaryHref: "/360-tour-hotels" },
            { title: "360° туры для ресторанов", price: "360° · от 300 ₾", primaryHref: "/360-tour-restaurants" },
            { title: "360° туры для автобизнеса", price: "360° · от 300 ₾", primaryHref: "/360-tour-auto" },
            { title: "360° туры для туризма и локаций", price: "360° · от 300 ₾", primaryHref: "/360-tour-tourism" },
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
            { title: "Промо-видео для недвижимости", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-real-estate" },
            { title: "Промо-видео для отелей", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-hotel" },
            { title: "Промо-видео для ресторанов", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-restaurant" },
            { title: "Промо-видео для автобизнеса", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-car-dealer" },
            { title: "Промо-видео для туризма", price: "Promo Video · по задаче", primaryHref: "/promo-video/promo-excursion" },
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
            { title: "Промо-видео для мероприятий", price: "Promo Video · по задаче", primaryHref: "/promo-video-service" },
            { title: "Reels и Shorts с события", price: "Short-form · от 450 ₾", primaryHref: "/reels-service" },
            { title: "Аэросъёмка площадки", price: "Drone · от 400 ₾", primaryHref: "/drone-service" },
            { title: "AI-упаковка контента", price: "AI Content · от 300 ₾", primaryHref: "/ai-visualization-service" },
            { title: "Полный пакет для события", price: "Пакет · по задаче", primaryHref: "/business-service" },
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
            { title: "AI-визуализация недвижимости", price: "AI Visualization · по задаче", primaryHref: "/ai-visual/ai-real-estate" },
            { title: "AI staging и меблировка", price: "AI Staging · по задаче", primaryHref: "/ai-visual/ai-staging" },
            { title: "AI-визуализация пространств", price: "AI Space Visuals · по задаче", primaryHref: "/ai-visual/ai-interior" },
            { title: "AI-продуктовый визуал", price: "AI Product Visuals · по задаче", primaryHref: "/ai-visual/ai-product" },
            { title: "AI-визуал для автобизнеса", price: "AI Auto Visuals · по задаче", primaryHref: "/ai-visual/ai-auto" },
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
            { title: "Reels для отелей", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-hotel" },
            { title: "Reels для ресторанов", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-restaurant" },
            { title: "Reels для автобизнеса", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-auto" },
            { title: "Reels для туризма", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-tourism" },
            { title: "Reels для клиник", price: "Reels · по задаче", primaryHref: "/reels-promo/reels-clinic" },
        ],
    },
    "custom-business": {
        eyebrow: "Ваш бизнес",
        title: "Контент под вашу задачу",
        subtitle: "Собираем подходящий пакет для ниш, которые не укладываются в типовой список: от разовой съёмки до постоянного контент-потока.",
        highlights: [
            "Разбор задачи и подбор формата под бизнес",
            "Стартовый пакет: видео, фото и короткие форматы",
            "AI-упаковка для запуска или теста гипотез",
            "Ежемесячное производство контента под рост",
        ],
        allServicesHref: "/business-service",
        services: [
            { title: "Имиджевое видео бизнеса", price: "Brand Video · от 300 ₾" },
            { title: "Контент для сайта и рекламы", price: "Performance Pack · от 450 ₾" },
            { title: "Reels и Shorts", price: "Short-form · от 450 ₾" },
            { title: "360° туры", price: "360° · от 550 ₾", primaryHref: "/360-tour-business" },
            { title: "Съёмка пространства / объекта", price: "Space Content · от 500 ₾" },
        ],
    },
};
