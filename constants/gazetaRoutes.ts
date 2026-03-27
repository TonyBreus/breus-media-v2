export type GazetaNavItem = {
    label: string;
    href: string;
};

export type GazetaCategoryPage = {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: string[];
};

export const gazetaDetailRoutes = {
    droneService: "/drone-service",
    monitoringStroiki: "/drone-service/monitoring-stroiki",
    objectInspection: "/drone-object-inspection",
    realEstate: "/gazeta/real-estate",
    hotels: "/gazeta/hotels",
    restaurants: "/gazeta/restaurants",
    auto: "/gazeta/auto",
    tourism: "/gazeta/tourism",
    clinics: "/gazeta/clinics",
    it: "/gazeta/it",
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
    "07": "/business-service",
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
    },
};
