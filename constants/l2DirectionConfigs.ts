import type { L2DirectionConfig, L2DirectionKey, L2MapConfig, L2ProcessStep, L2StatItem } from '@/components/l2-direction/types';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';
import { gazetaDetailRoutes } from '@/constants/gazetaRoutes';

const {
    droneService,
    hotels,
    restaurants,
    tourism,
    clinics,
    auto,
    customBusiness,
    tours360,
    promoVideo,
    reels,
    aiContent,
} = gazetaDetailRoutes;

const commonGoogleTrust: DroneDirectionPageConfig['googleTrust'] = {
    heading: 'Репутация в Google',
    rating: '4.9',
    reviewsText: '50+ отзывов от клиентов',
    profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
    mapTitle: 'Breus Media',
    mapAddress: 'Tbilisi, Georgia',
    mapHint: 'Рейтинг и отзывы подтягиваются из профиля Breus Media в Google.',
};

const makeCommonProcessSteps = (context: string): L2ProcessStep[] => [
    {
        number: '01',
        title: 'БРИФ',
        description: `Фиксируем цели ${context}, каналы размещения и формат выдачи материалов.`,
    },
    {
        number: '02',
        title: 'ПОДГОТОВКА',
        description: 'Планируем сцены, тайминг, маршрут съёмки и согласуем рабочие окна.',
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Снимаем по согласованному сценарию: видео, aerial, short-form и дополнительные форматы.',
    },
    {
        number: '04',
        title: 'ГОТОВЫЙ ПАКЕТ',
        description: 'Передаём материалы в форматах для сайта, рекламы и соцсетей.',
    },
];

const makeCommonMap = (title: string, description: string, badgeText: string): L2MapConfig => ({
    title,
    description,
    zones: [
        {
            color: 'bg-green-500',
            borderColor: 'border-green-500',
            title: 'Тбилиси',
            description: 'Основная зона съёмок и продакшна в пределах города.',
        },
        {
            color: 'bg-yellow-500',
            borderColor: 'border-yellow-500',
            title: 'Выезд по Грузии',
            description: 'Выезд по Грузии по согласованию под задачу проекта.',
        },
        {
            color: 'bg-red-500',
            borderColor: 'border-red-500',
            title: 'Регионы Грузии',
            description: 'Кутаиси и другие регионы по согласованному графику.',
        },
    ],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80',
    imageAlt: 'Georgia map with coverage areas',
    badgeText,
});

const makeCommonSocialProof = (variant: 'hospitality' | 'food' | 'tourism' | 'medical' | 'auto' | 'business'): L2StatItem[] => {
    if (variant === 'hospitality') {
        return [
            { value: '2x', label: 'Выше вовлеченность на карточках отеля' },
            { value: '4K', label: 'Качество для OTA, сайта и соцсетей' },
            { value: '360°', label: 'Формат для удаленного выбора номера' },
            { value: '24h', label: 'Черновой материал после съёмки' },
        ];
    }

    if (variant === 'food') {
        return [
            { value: '3x', label: 'Выше вовлеченность коротких видео' },
            { value: '4K', label: 'Четкая подача блюд и пространства' },
            { value: '15-60s', label: 'Форматы reels/shorts/ad cuts' },
            { value: '24h', label: 'Черновой монтаж после съёмки' },
        ];
    }

    if (variant === 'tourism') {
        return [
            { value: '2.5x', label: 'Выше CTR маршрутов с видео' },
            { value: '4K', label: 'Cinematic формат для турпродукта' },
            { value: 'Aerial', label: 'Масштаб и доступность в одном кадре' },
            { value: '48h', label: 'Черновые материалы для воронки' },
        ];
    }

    if (variant === 'medical') {
        return [
            { value: '2x', label: 'Выше доверие до первого контакта' },
            { value: '4K', label: 'Аккуратный визуал пространства' },
            { value: 'Shorts', label: 'Регулярный digital-контент' },
            { value: '24h', label: 'Черновые материалы после съёмки' },
        ];
    }

    if (variant === 'auto') {
        return [
            { value: '2x', label: 'Выше вовлеченность в авто-объявлениях' },
            { value: '4K', label: 'Обзорные и динамичные форматы' },
            { value: 'Aerial', label: 'Масштаб площадки в одном пролёте' },
            { value: '24h', label: 'Черновой пакет после съёмки' },
        ];
    }

    return [
        { value: '2x', label: 'Быстрее принятие решения клиентом' },
        { value: '4K', label: 'Качество для сайта, ads и соцсетей' },
        { value: '360°', label: 'Дополнительный уровень вовлечения' },
        { value: '24h', label: 'Черновые материалы после съёмки' },
    ];
};

const makePage = ({
    path,
    eyebrow,
    h1,
    intro,
    heroImage,
    panelServiceSlugs,
    trustHeading,
    trustBadges,
    trustLocation,
    relatedLinks,
    seoTitle,
    seoDescription,
    schemaServiceName,
    schemaServiceType,
}: {
    path: string;
    eyebrow: string;
    h1: string;
    intro: string;
    heroImage: string;
    panelServiceSlugs: string[];
    trustHeading: string;
    trustBadges: string[];
    trustLocation: string;
    relatedLinks: DroneDirectionPageConfig['relatedLinks'];
    seoTitle: string;
    seoDescription: string;
    schemaServiceName: string;
    schemaServiceType: string;
}): DroneDirectionPageConfig => ({
    path,
    hero: {
        eyebrow,
        h1,
        intro,
        heroImage,
        primaryCtaLabel: 'Смотреть услуги',
        primaryCtaHref: '#services',
        secondaryCtaLabel: 'Подобрать услугу',
        secondaryCtaHref: '#services',
        panelServiceSlugs,
    },
    trust: {
        heading: trustHeading,
        badges: trustBadges,
        location: trustLocation,
    },
    googleTrust: commonGoogleTrust,
    relatedLinks,
    seo: {
        title: seoTitle,
        description: seoDescription,
        schemaServiceName,
        schemaServiceType,
        areaServed: ['Tbilisi', 'Georgia'],
    },
});

export const l2DirectionConfigs: Record<L2DirectionKey, L2DirectionConfig> = {
    hotelsService: {
        page: makePage({
            path: '/hotels-service',
            eyebrow: 'HOSPITALITY CONTENT',
            h1: 'Контент для отелей и курортов',
            intro: 'Атмосферные видео, аэросъёмка, 360-туры и контент для гостиниц, апарт-отелей и курортных объектов: Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=80',
            panelServiceSlugs: ['videotur-otelya', 'aerosemka-territorii', 'tur-360-nomera'],
            trustHeading: 'Нам доверяют в hospitality',
            trustBadges: ['Отели', 'Курорты', 'Апарт-отели', 'Бутик-отели', 'Управляющие компании', 'Travel-бренды'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для гастропространств и заведений.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Маршруты, локации и travel-визуал.' },
                { href: '/business-service', title: 'Бизнес', description: 'Упаковка коммерческих объектов и брендов.' },
                { href: droneService, title: 'Аэросъёмка', description: 'Каталог aerial-форматов Breus Media.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Страница направления недвижимости.' },
            ],
            seoTitle: 'Контент для отелей и курортов в Тбилиси | Hotels Service — Breus Media',
            seoDescription: 'Видео, аэросъёмка, 360° туры и short-form контент для отелей и курортов в Грузии. Форматы для сайта, Booking, соцсетей и рекламы.',
            schemaServiceName: 'Hotels and Resorts Content Service',
            schemaServiceType: 'Hospitality media production service',
        }),
        data: {
            heroSubtitle:
                'Атмосферные видео, аэросъёмка, 360-туры и контент для гостиниц, апарт-отелей и курортных объектов: Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Гость бронирует там, где он уже почувствовал место заранее.',
            socialProofStats: makeCommonSocialProof('hospitality'),
            servicesHeading: 'Услуги для отелей и курортов',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'videotur-otelya',
                    title: 'Видеотур по отелю',
                    category: 'Сайт · Booking · Соцсети',
                    description: 'Короткий cinematic-ролик для сайта, Booking и соцсетей.',
                    price: 'Cinematic · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80',
                    primaryHref: '/promo-video/promo-hotel',
                    tag: 'HOT',
                    featured: true,
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'aerosemka-territorii',
                    title: 'Аэросъёмка территории',
                    category: 'Локация · Масштаб · Вид',
                    description: 'Показывает локацию, масштаб, бассейн, парковку, вид и окружение.',
                    price: 'Drone · от 400 ₾',
                    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
                    primaryHref: '/drone-hotels-tourism',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'tur-360-nomera',
                    title: '360° тур по номерам',
                    category: 'Интерактив · Сайт · Презентация',
                    description: 'Интерактивный формат для сайта и презентации объекта.',
                    price: '360° · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1566669437685-58f29f2a9f4f?w=1200&q=80',
                    primaryHref: '/360-tour-hotels',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'reels-shorts-otel',
                    title: 'Reels и Shorts для отеля',
                    category: 'Instagram · TikTok · Ads',
                    description: 'Короткие ролики для Instagram, TikTok и рекламы.',
                    price: 'Short-form · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-hotel',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'sezonnyy-kontent-paket',
                    title: 'Сезонный контент-пакет',
                    category: 'Лето · Зима · Праздники',
                    description: 'Съёмка под лето, зиму, праздники и спецпредложения.',
                    price: 'Пакет · от 650 ₾',
                    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1200&q=80',
                    primaryHref: '/reels-promo/hotel-seasonal-content',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-opisaniya-lokalizaciya',
                    title: 'AI-описания и локализация',
                    category: 'Тексты · Мультиязычность · OTA',
                    description: 'Тексты и адаптация материалов под разные языки и площадки.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80',
                    primaryHref: '/ai-content/hotel-ai-descriptions',
                },
            ],
            processSteps: makeCommonProcessSteps('для отеля или курортного объекта'),
            map: makeCommonMap(
                'География hospitality-проектов',
                'Тбилиси + выезд по Грузии по согласованию. Формируем съёмку под тип объекта: бутик-отель, апарт-отель, resort и загородные комплексы.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для отелей и курортных объектов',
            pricingPlans: [
                {
                    title: 'Старт для отеля',
                    price: 'от 350 ₾',
                    features: ['Базовая съёмка ключевых зон', 'Короткий ролик для сайта/соцсетей', 'Обработка и экспорт под digital'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Контент-пакет для гостиницы',
                    price: 'от 650 ₾',
                    features: ['Видео + aerial + short-form набор', 'Материалы для сайта, OTA и рекламы', 'Подготовка вертикальных и горизонтальных версий'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный визуальный пакет',
                    price: 'от 900 ₾',
                    features: ['Комплекс: видео, aerial, 360 и AI-упаковка', 'Сезонные сценарии и продакшн-план', 'Передача пакета под все ключевые каналы'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему гость не доходит до бронирования',
            painProofSupportingLine:
                'Гость сравнивает десятки вариантов за минуты. Если атмосфера не считывается сразу, объект теряет бронирование ещё до перехода в Booking.',
            painProofCards: [
                {
                    title: 'Не чувствуется атмосфера места',
                    text: 'Фото показывают номер, но не передают ощущение отдыха.',
                    resolution: 'Решение: видео, дрон и сценарный визуал создают эмоциональный вход в объект.',
                },
                {
                    title: 'Не видно территорию и окружение',
                    text: 'Гостю важно понимать, где он окажется, что рядом и как выглядит объект целиком.',
                    resolution: 'Решение: аэросъёмка даёт контекст, который не видно в обычной галерее.',
                },
                {
                    title: 'Контент быстро устаревает',
                    text: 'Сезон меняется, предложения обновляются, а визуал остаётся старым.',
                    resolution: 'Решение: пакетная съёмка и регулярное обновление материалов.',
                },
                {
                    title: 'Нет единой упаковки под площадки',
                    text: 'Сайт, Booking, Instagram и реклама требуют разного формата.',
                    resolution: 'Решение: один продакшн-пакет под все ключевые каналы.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снять только территорию и без номеров?',
                    answer: 'Да, мы собираем сценарий под задачу: можно сфокусироваться только на территории, инфраструктуре и локации.',
                },
                {
                    question: 'Делаете ли вы контент под Booking и соцсети одновременно?',
                    answer: 'Да, отдаём комплект сразу в нужных форматах: под сайт/OTA и вертикальные версии для соцсетей и рекламы.',
                },
                {
                    question: 'Можно ли собрать сезонный пакет съёмок?',
                    answer: 'Да, формируем план на сезон или квартал с фиксированными выездами и пакетной выдачей материалов.',
                },
                {
                    question: 'Сколько времени занимает съёмка отеля?',
                    answer: 'Обычно 2-6 часов в зависимости от масштаба объекта и количества зон в съёмочном плане.',
                },
                {
                    question: 'Можно ли сделать материалы на нескольких языках?',
                    answer: 'Да, добавляем локализацию описаний, титров и контента под нужные языки и площадки.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕГО ОТЕЛЯ',
                description:
                    'Оставьте контакты и краткий бриф. Подберём оптимальный формат контента под бронирования и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder:
                    'Например: видеотур + aerial территории и набор reels для Booking и Instagram.',
                serviceOptions: [
                    'Видеотур по отелю',
                    'Аэросъёмка территории',
                    '360° тур по номерам',
                    'Reels и Shorts',
                    'Сезонный пакет',
                    'AI-локализация',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    restaurantsService: {
        page: makePage({
            path: '/restaurants-service',
            eyebrow: 'GASTRO CONTENT',
            h1: 'Контент для ресторанов и гастропроектов',
            intro: 'Видео, reels, интерьерная съёмка и визуальный контент для ресторанов, кафе, веранд и гастропространств: Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80',
            panelServiceSlugs: ['imidzhevoe-video-restorana', 'reels-socseti', 'aerosemka-lokacii'],
            trustHeading: 'Нам доверяют в HoReCa',
            trustBadges: ['Рестораны', 'Кафе', 'Rooftop', 'Гастробары', 'Сети заведений', 'Гастропроекты'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/hotels-service', title: 'Отели', description: 'Hospitality-контент для размещения и бронирования.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Контент для маршрутов и travel-проектов.' },
                { href: '/business-service', title: 'Бизнес', description: 'Коммерческая digital-упаковка бренда.' },
                { href: droneService, title: 'Аэросъёмка', description: 'Съёмка локации, террасы и окружения.' },
                { href: restaurants, title: 'Рестораны в Gazeta', description: 'Gazeta-направление ресторанного контента.' },
            ],
            seoTitle: 'Контент для ресторанов в Тбилиси | Restaurants Service — Breus Media',
            seoDescription: 'Видео, reels, интерьерная съёмка и digital-упаковка для ресторанов, кафе и гастропроектов в Грузии.',
            schemaServiceName: 'Restaurant Content Service',
            schemaServiceType: 'Restaurant media production service',
        }),
        data: {
            heroSubtitle:
                'Видео, reels, интерьерная съёмка и визуальный контент для ресторанов, кафе, веранд и гастропространств: Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Гость выбирает глазами — ещё до того, как увидит меню.',
            socialProofStats: makeCommonSocialProof('food'),
            servicesHeading: 'Услуги для ресторанов и гастропроектов',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'imidzhevoe-video-restorana',
                    title: 'Имиджевое видео ресторана',
                    category: 'Атмосфера · Свет · Подача',
                    description: 'Атмосферный ролик про пространство, свет, подачу и вайб места.',
                    price: 'Brand Video · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
                    primaryHref: '/promo-video/promo-restaurant',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'reels-socseti',
                    title: 'Reels для соцсетей',
                    category: 'Instagram · TikTok · Promo',
                    description: 'Короткие ролики для Instagram, TikTok и промо.',
                    price: 'Short-form · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-restaurant',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'aerosemka-lokacii',
                    title: 'Аэросъёмка локации',
                    category: 'Rooftop · Веранда · Видовые точки',
                    description: 'Подходит для веранд, rooftop, курортных и видовых объектов.',
                    price: 'Drone · от 400 ₾',
                    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80',
                    primaryHref: '/drone-services/drone-restaurants',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'semka-interera-podachi',
                    title: 'Съёмка интерьера и подачи',
                    category: 'Сайт · Афиши · Delivery',
                    description: 'Кадры для сайта, афиш, delivery и рекламных макетов.',
                    price: 'Photo + Video · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
                    primaryHref: '/promo-video/restaurant-interior-food',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'kontent-paket-na-mesyac',
                    title: 'Контент-пакет на месяц',
                    category: 'Серии · Акции · Контент-план',
                    description: 'Съёмка сериями под акции, сезон и контент-план.',
                    price: 'Пакет · от 550 ₾',
                    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?w=1200&q=80',
                    primaryHref: '/reels-promo/restaurant-content-pack',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-menyu-opisaniy',
                    title: 'AI-упаковка меню и описаний',
                    category: 'Copy · Digital · Localize',
                    description: 'Тексты, подписи и оформление под digital-каналы.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tur-360-restoranov',
                    title: '360° тур для ресторанов',
                    category: 'Интерактив · Посадка · Атмосфера',
                    description: 'Интерактивный 360°-формат для сайта и онлайн-презентации пространства.',
                    price: '360° · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
                    primaryHref: '/360-tour-restaurants',
                },
            ],
            processSteps: makeCommonProcessSteps('для ресторана и гастропроекта'),
            map: makeCommonMap(
                'География ресторанных съёмок',
                'Тбилиси + выезд по Грузии по согласованию для ресторанов, кафе и гастропространств.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для ресторанов и гастропроектов',
            pricingPlans: [
                {
                    title: 'Старт для ресторана',
                    price: 'от 300 ₾',
                    features: ['Базовый продакшн на площадке', 'Материалы для соцсетей и сайта', 'Один готовый short-form ролик'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Reels + интерьер',
                    price: 'от 550 ₾',
                    features: ['Съёмка пространства и подачи', 'Серия reels под акции/сезон', 'Форматы для органики и промо'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный гастро-пакет',
                    price: 'от 850 ₾',
                    features: ['Видео + aerial + short-form + AI', 'Материалы под сайт, рекламу и меню', 'Единая визуальная система бренда'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему ресторан не цепляет ещё до визита',
            painProofSupportingLine:
                'Если визуал не передаёт атмосферу, подачу и настроение, гость пролистывает дальше, даже если кухня сильная.',
            painProofCards: [
                {
                    title: 'Нет атмосферы в кадре',
                    text: 'По случайным фото сложно понять настроение места.',
                    resolution: 'Решение: сценарный визуал показывает свет, посадку, подачу и энергию пространства.',
                },
                {
                    title: 'Контент не работает на соцсети',
                    text: 'Один красивый ролик не закрывает регулярный digital-поток.',
                    resolution: 'Решение: reels-пакет и контент-серии под разные каналы.',
                },
                {
                    title: 'Не видно сильные стороны локации',
                    text: 'Веранда, бар, open kitchen или rooftop остаются недопоказанными.',
                    resolution: 'Решение: визуально выделяем именно те детали, ради которых приходят.',
                },
                {
                    title: 'Маркетинг и съёмка живут отдельно',
                    text: 'Контент делается без понимания, куда и как он будет использоваться.',
                    resolution: 'Решение: сразу собираем материалы под сайт, соцсети, афиши и рекламу.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снимать без закрытия ресторана?',
                    answer: 'Да, планируем съёмку по таймингам зала и кухни, чтобы не мешать операционной работе.',
                },
                {
                    question: 'Делаете ли вы reels под акции и спецпредложения?',
                    answer: 'Да, делаем серию short-form роликов под конкретные акции, сезонные предложения и спецменю.',
                },
                {
                    question: 'Можно ли снять отдельно интерьер и отдельно еду?',
                    answer: 'Да, можно разделить продакшн на блоки и получить отдельные пакеты по интерьеру и food-контенту.',
                },
                {
                    question: 'Подходит ли съёмка для новых заведений перед запуском?',
                    answer: 'Да, это один из ключевых сценариев: запуск digital-присутствия до официального открытия.',
                },
                {
                    question: 'Можно ли сделать пакет на месяц?',
                    answer: 'Да, собираем регулярный месячный цикл с контент-планом и пакетной выдачей материалов.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕГО ЗАВЕДЕНИЯ',
                description:
                    'Оставьте контакты и краткий бриф. Подскажем оптимальный формат съёмки под задачи ресторана и вернемся с расчётом в течение рабочего часа.',
                taskPlaceholder: 'Например: серия reels и имиджевое видео для запуска сезонного меню.',
                serviceOptions: [
                    'Имиджевое видео',
                    'Reels для соцсетей',
                    'Аэросъёмка локации',
                    'Съёмка интерьера',
                    'Месячный пакет',
                    'AI-упаковка меню',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    tourismService: {
        page: makePage({
            path: '/tourism-service',
            eyebrow: 'TRAVEL CONTENT',
            h1: 'Контент для туризма и локаций',
            intro: 'Видео, дрон, reels и визуальная упаковка маршрутов, туров, глэмпингов и туристических объектов: Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=80',
            panelServiceSlugs: ['video-tura-marshruta', 'aerosemka-lokacii', 'kontent-glemping-baza'],
            trustHeading: 'Нам доверяют в travel-сегменте',
            trustBadges: ['Туроператоры', 'Гиды', 'Глэмпинги', 'Adventure-проекты', 'Wine туры', 'City experiences'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/hotels-service', title: 'Отели', description: 'Контент для размещения и проживания.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Визуал для гастро-точек маршрута.' },
                { href: '/business-service', title: 'Бизнес', description: 'Упаковка коммерческих объектов.' },
                { href: droneService, title: 'Аэросъёмка', description: 'Обзорные и cinematic aerial форматы.' },
                { href: tourism, title: 'Туризм в Gazeta', description: 'Gazeta-направление tourism-контента.' },
            ],
            seoTitle: 'Контент для туризма и локаций в Грузии | Tourism Service — Breus Media',
            seoDescription: 'Видео, дрон, reels и digital-упаковка для маршрутов, туров, глэмпингов и туристических объектов в Грузии.',
            schemaServiceName: 'Tourism Content Service',
            schemaServiceType: 'Travel media production service',
        }),
        data: {
            heroSubtitle:
                'Видео, дрон, reels и визуальная упаковка маршрутов, туров, глэмпингов и туристических объектов: Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Маршрут продаётся лучше, когда человек уже увидел себя внутри этого опыта.',
            socialProofStats: makeCommonSocialProof('tourism'),
            servicesHeading: 'Услуги для туризма и локаций',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'video-tura-marshruta',
                    title: 'Видео тура или маршрута',
                    category: 'Сайт · Реклама · Promo',
                    description: 'Эмоциональный ролик для сайта и рекламы.',
                    price: 'Cinematic · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
                    primaryHref: '/promo-video/promo-tourism-route',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'aerosemka-lokacii',
                    title: 'Аэросъёмка локации',
                    category: 'Природа · Вид · Доступность',
                    description: 'Показывает масштаб природы, подъезд, вид и окружение.',
                    price: 'Drone · от 400 ₾',
                    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80',
                    primaryHref: '/drone-hotels-tourism',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'kontent-glemping-baza',
                    title: 'Контент для глэмпинга / базы',
                    category: 'Проживание · Outdoor · Отдых',
                    description: 'Материалы для проживания, отдыха и outdoor-форматов.',
                    price: 'Package · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'reels-turproekta',
                    title: 'Reels для турпроекта',
                    category: 'Social · Ads · Short-form',
                    description: 'Короткие ролики для соцсетей и ads.',
                    price: 'Short-form · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-tourism',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'promo-ekskursii-aktivnosti',
                    title: 'Промо для экскурсии / активности',
                    category: 'Adventure · Wine tours · City',
                    description: 'Подходит для adventure, wine tours, city experiences.',
                    price: 'Promo · от 550 ₾',
                    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80',
                    primaryHref: '/promo-video/promo-excursion',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-predlozheniy',
                    title: 'AI-упаковка предложений',
                    category: 'Сценарии · Тексты · Funnel',
                    description: 'Описания, сценарии и тексты под digital-воронку.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
                    primaryHref: '/ai-content/tourism-ai-packaging',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tur-360-turizma',
                    title: '360° тур для туризма',
                    category: 'Локации · Маршруты · Интерактив',
                    description: 'Интерактивный формат для удалённой презентации локаций и маршрутов.',
                    price: '360° · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
                    primaryHref: '/360-tour-tourism',
                },
            ],
            processSteps: makeCommonProcessSteps('для турпродукта и маршрута'),
            map: makeCommonMap(
                'География туристических съёмок',
                'Тбилиси + выезд по Грузии по согласованию для турпроектов, включая горные и региональные локации. Подбираем продакшн под формат маршрута и логистику локаций.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для турпроектов и маршрутов',
            pricingPlans: [
                {
                    title: 'Старт для турпроекта',
                    price: 'от 350 ₾',
                    features: ['Базовая съёмка локации/маршрута', 'Короткий промо-ролик', 'Пакет для сайта и соцсетей'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Маршрут + reels',
                    price: 'от 650 ₾',
                    features: ['Видео маршрута + short-form серия', 'Материалы под ads и органику', 'Форматы под travel-воронку'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный туристический пакет',
                    price: 'от 950 ₾',
                    features: ['Видео + aerial + reels + AI-упаковка', 'Пакет под сайт, ads, соцсети', 'Поддержка мультиязычной коммуникации'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему маршрут не превращается в бронь',
            painProofSupportingLine:
                'Человек покупает не просто поездку, а представление о будущем опыте. Если визуал не создаёт это ощущение, предложение проигрывает.',
            painProofCards: [
                {
                    title: 'Не чувствуется опыт',
                    text: 'Локация может быть красивой, но без истории она не продаёт.',
                    resolution: 'Решение: видео и сценарный контент показывают не место, а переживание.',
                },
                {
                    title: 'Не видно масштаб и доступность',
                    text: 'Туристу важно понять, как выглядит путь, точка, окружение и формат.',
                    resolution: 'Решение: дрон и обзорный визуал снимают это сомнение.',
                },
                {
                    title: 'Контент не работает в рекламе',
                    text: 'Красивые кадры есть, а воронка бронирования не усиливается.',
                    resolution: 'Решение: материалы сразу делаем под сайт, соцсети и ads.',
                },
                {
                    title: 'Слишком общий образ проекта',
                    text: 'Если всё выглядит как у всех, человек не понимает, почему выбирать именно вас.',
                    resolution: 'Решение: выделяем уникальность маршрута, формата и эмоции.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снимать на удалённых локациях?',
                    answer: 'Да, выезды на удалённые точки возможны по заранее согласованной логистике и погодному окну.',
                },
                {
                    question: 'Делаете ли вы контент для глэмпингов и outdoor-проектов?',
                    answer: 'Да, это один из ключевых сценариев: проживание, природа и активности в едином пакете.',
                },
                {
                    question: 'Можно ли снять тур без полного продакшна?',
                    answer: 'Да, можем сделать компактный формат: один съёмочный день и базовый комплект материалов.',
                },
                {
                    question: 'Делаете ли вы reels для продажи туров?',
                    answer: 'Да, собираем серии short-form роликов под запуски, акции и performance-рекламу.',
                },
                {
                    question: 'Как планируется съёмка в горах и на маршрутах?',
                    answer: 'Формируем маршрутный план, тайминг, точки съёмки и резервные сценарии под погоду.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕГО ТУРПРОЕКТА',
                description:
                    'Оставьте контакты и краткий бриф. Подберём продакшн под формат маршрута и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder: 'Например: видео маршрута и серия reels для рекламы туров на сезон.',
                serviceOptions: [
                    'Видео маршрута',
                    'Аэросъёмка локаций',
                    'Контент для глэмпинга',
                    'Reels для туров',
                    'Промо активности',
                    'AI-упаковка',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    clinicsService: {
        page: makePage({
            path: '/clinics-service',
            eyebrow: 'MEDICAL CONTENT',
            h1: 'Контент для клиник и медицинских проектов',
            intro: 'Видео, интерьерная съёмка, reels и digital-упаковка для клиник, стоматологий, центров эстетики и медицинских проектов: Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1800&q=80',
            panelServiceSlugs: ['imidzhevoe-video-kliniki', 'video-vracha-napravleniya', 'semka-interera-kabinetov'],
            trustHeading: 'Нам доверяют в медицинском сегменте',
            trustBadges: ['Клиники', 'Стоматологии', 'Эстетика', 'Wellness центры', 'Частные практики', 'Медбренды'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/business-service', title: 'Бизнес', description: 'Digital-упаковка коммерческих проектов.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Контент для объектов с офлайн-точками.' },
                { href: '/hotels-service', title: 'Отели', description: 'Сервисная подача пространств и атмосферы.' },
                { href: droneService, title: 'Аэросъёмка', description: 'Aerial-форматы для объектов и локаций.' },
                { href: clinics, title: 'Клиники в Gazeta', description: 'Gazeta-направление для медицинской ниши.' },
            ],
            seoTitle: 'Контент для клиник в Тбилиси | Clinics Service — Breus Media',
            seoDescription: 'Видео, интерьерная съёмка, reels и digital-упаковка для клиник, стоматологий и эстетических центров в Грузии.',
            schemaServiceName: 'Medical Content Service',
            schemaServiceType: 'Medical media production service',
        }),
        data: {
            heroSubtitle:
                'Видео, интерьерная съёмка, reels и digital-упаковка для клиник, стоматологий, центров эстетики и медицинских проектов: Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Пациент выбирает не только услугу, но и уровень доверия ещё до первого визита.',
            socialProofStats: makeCommonSocialProof('medical'),
            servicesHeading: 'Услуги для клиник и медицинских проектов',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'imidzhevoe-video-kliniki',
                    title: 'Имиджевое видео клиники',
                    category: 'Пространство · Оборудование · Подход',
                    description: 'Показывает пространство, оборудование, подход и атмосферу.',
                    price: 'Brand Video · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
                    featured: true,
                    tag: 'HOT',
                    primaryHref: '/promo-video/promo-clinic',
                    primaryCtaLabel: 'Открыть услугу',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'video-vracha-napravleniya',
                    title: 'Видео для врача / направления',
                    category: 'Личный бренд · Услуги',
                    description: 'Подходит для презентации специалиста и услуг.',
                    price: 'Expert Video · от 400 ₾',
                    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80',
                    primaryHref: '/promo-video/promo-doctor',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'semka-interera-kabinetov',
                    title: 'Съёмка интерьера и кабинетов',
                    category: 'Сайт · Реклама · Соцсети',
                    description: 'Материалы для сайта, рекламы и соцсетей.',
                    price: 'Photo + Video · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80',
                    primaryHref: '/promo-video/clinic-interior',
                    primaryCtaLabel: 'Открыть услугу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'reels-kliniki',
                    title: 'Reels для клиники',
                    category: 'Digital presence · Short-form',
                    description: 'Короткий контент для digital-присутствия.',
                    price: 'Reels · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-clinic',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'kontent-esteticheskih-uslug',
                    title: 'Контент для эстетических услуг',
                    category: 'Beauty · Skin · Dental · Wellness',
                    description: 'Подходит для beauty/skin/dental/wellness направлений.',
                    price: 'Package · от 600 ₾',
                    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-kontenta',
                    title: 'AI-упаковка контента',
                    category: 'Тексты · Локализация · Digital',
                    description: 'Описания, тексты и адаптация под digital-каналы.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
                    primaryHref: '/ai-content/tourism-ai-packaging',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tur-360-klinik',
                    title: '360° тур для клиник',
                    category: 'Интерактив · Кабинеты · Среда',
                    description: 'Интерактивная презентация пространства клиники для снижения тревожности до визита.',
                    price: '360° · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&q=80',
                    primaryHref: '/360-tour-clinics',
                },
            ],
            processSteps: makeCommonProcessSteps('для клиники или медицинского проекта'),
            map: makeCommonMap(
                'География медицинских съёмок',
                'Тбилиси + выезд по Грузии по согласованию для клиник и медицинских проектов. Подстраиваем продакшн под режим работы объекта.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для клиник и медицинских проектов',
            pricingPlans: [
                {
                    title: 'Старт для клиники',
                    price: 'от 350 ₾',
                    features: ['Базовая съёмка пространства', 'Один ролик для сайта/соцсетей', 'Подготовка пакета под digital'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Видео + reels пакет',
                    price: 'от 650 ₾',
                    features: ['Имиджевое видео + short-form серия', 'Контент под рекламу и соцсети', 'Материалы для разных точек контакта'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный медицинский контент-пакет',
                    price: 'от 950 ₾',
                    features: ['Видео, интерьер, reels и AI-упаковка', 'Система материалов под digital-воронку', 'Поддержка адаптации под площадки'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему пациент уходит к другой клинике ещё до записи',
            painProofSupportingLine:
                'Если пространство, уровень сервиса и доверие не считываются сразу, человек выбирает того, кто выглядит понятнее и надёжнее.',
            painProofCards: [
                {
                    title: 'Нет ощущения доверия',
                    text: 'Сухие фото не показывают качество среды и уровень проекта.',
                    resolution: 'Решение: аккуратный визуал помогает пациенту почувствовать уверенность заранее.',
                },
                {
                    title: 'Не раскрыта атмосфера клиники',
                    text: 'Человеку важно видеть не только услугу, но и обстановку, чистоту, оборудование.',
                    resolution: 'Решение: имиджевое видео и интерьерная съёмка дают целостную картину.',
                },
                {
                    title: 'Маркетинг клиники выглядит шаблонно',
                    text: 'Если всё выглядит как типовой stock-контент, проект не запоминается.',
                    resolution: 'Решение: создаём материалы под реальную специфику вашей практики.',
                },
                {
                    title: 'Нет контента под digital-каналы',
                    text: 'Сайт, соцсети и реклама требуют разного формата.',
                    resolution: 'Решение: делаем единый контент-пакет под все ключевые точки контакта.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снимать клинику без остановки работы?',
                    answer: 'Да, снимаем по согласованным окнам и маршрутам, чтобы не мешать пациентскому потоку.',
                },
                {
                    question: 'Делаете ли вы контент для врачей и личных брендов?',
                    answer: 'Да, создаём отдельные видеоформаты для специалистов и направлений услуг.',
                },
                {
                    question: 'Можно ли адаптировать материалы под сайт и соцсети?',
                    answer: 'Да, подготавливаем комплект сразу в нужных форматах для digital-каналов.',
                },
                {
                    question: 'Подходит ли это для стоматологий и эстетических центров?',
                    answer: 'Да, формат адаптируется под dental, эстетические и wellness-направления.',
                },
                {
                    question: 'Можно ли собрать месячный контент-пакет?',
                    answer: 'Да, выстраиваем регулярный цикл съёмок и выпусков под ежемесячный план.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕЙ КЛИНИКИ',
                description:
                    'Оставьте контакты и краткий бриф. Подберём корректный формат продакшна под медицинскую специфику и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder: 'Например: имиджевое видео клиники и серия reels для digital-коммуникации.',
                serviceOptions: [
                    'Имиджевое видео',
                    'Видео врача',
                    'Съёмка кабинетов',
                    'Reels для клиники',
                    'Эстетический контент',
                    'AI-упаковка',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    autoService: {
        page: makePage({
            path: '/auto-service',
            eyebrow: 'AUTO CONTENT',
            h1: 'Контент для автобизнеса и автообъектов',
            intro: 'Видео, аэросъёмка, reels и контент для дилерских центров, парковок, автоплощадок и проектов в автобизнесе: Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80',
            panelServiceSlugs: ['video-dilerskogo-centra', 'aerosemka-avtoploshadki', 'reels-avtobiznesa'],
            trustHeading: 'Нам доверяют в автобизнесе',
            trustBadges: ['Дилеры', 'Автоплощадки', 'Премиум-сегмент', 'Сервисы', 'Детейлинг', 'Автобренды'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/business-service', title: 'Бизнес', description: 'Универсальная digital-упаковка объектов.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Сервисный контент с акцентом на доверие.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Кейс регулярного short-form потока.' },
                { href: droneService, title: 'Аэросъёмка', description: 'Aerial-пролёты для площадок и объектов.' },
                { href: auto, title: 'Автобизнес в Gazeta', description: 'Gazeta-направление автобизнеса.' },
            ],
            seoTitle: 'Контент для автобизнеса в Тбилиси | Auto Service — Breus Media',
            seoDescription: 'Видео, аэросъёмка, reels и digital-контент для дилерских центров, автоплощадок и сервисов в Грузии.',
            schemaServiceName: 'Auto Business Content Service',
            schemaServiceType: 'Automotive media production service',
        }),
        data: {
            heroSubtitle:
                'Видео, аэросъёмка, reels и контент для дилерских центров, парковок, автоплощадок и проектов в автобизнесе: Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Покупатель выбирает глазами — особенно когда сравнивает десятки машин и площадок.',
            socialProofStats: makeCommonSocialProof('auto'),
            servicesHeading: 'Услуги для автобизнеса и автообъектов',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'video-dilerskogo-centra',
                    title: 'Видео дилерского центра',
                    category: 'Сайт · Реклама · Имидж',
                    description: 'Имиджевый ролик для сайта и рекламы.',
                    price: 'Brand Video · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
                    primaryHref: '/promo-video/promo-car-dealer',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'aerosemka-avtoploshadki',
                    title: 'Аэросьемка для авто и автосалонов',
                    category: 'Масштаб · Ассортимент · Инфраструктура',
                    description: 'Показывает масштаб, ассортимент и инфраструктуру.',
                    price: 'Drone · от 400 ₾',
                    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&q=80',
                    primaryHref: '/drone-services/drone-auto',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-avtobiznesa',
                    title: 'Reels для автобизнеса',
                    category: 'Social · Ads · Short-form',
                    description: 'Короткие ролики для соцсетей и ads.',
                    price: 'Reels · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-auto',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'obzornyy-kontent-modelyam',
                    title: 'Обзорный контент по моделям',
                    category: 'Автоцентры · Премиум площадки',
                    description: 'Подходит для автоцентров и премиальных площадок.',
                    price: 'Model Showcase · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
                    primaryHref: '/promo-video/auto-model-review',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'kontent-servisa-deteylinga',
                    title: 'Контент для сервиса / детейлинга',
                    category: 'Процесс · Качество · Уровень',
                    description: 'Показывает процесс, аккуратность и уровень работы.',
                    price: 'Service Content · от 550 ₾',
                    image: 'https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=1200&q=80',
                    primaryHref: '/promo-video/auto-service-detailing',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-obyavleniy',
                    title: 'AI-упаковка объявлений',
                    category: 'Тексты · Digital · Listings',
                    description: 'Тексты, описания и digital-адаптация.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tur-360-avtobiznesa',
                    title: '360° тур для автобизнеса',
                    category: 'Шоурум · Салон · Интерактив',
                    description: 'Интерактивный формат для онлайн-презентации салона, площадки и шоурума.',
                    price: '360° · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    primaryHref: '/360-tour-auto',
                },
            ],
            processSteps: makeCommonProcessSteps('для автообъекта и автобизнеса'),
            map: makeCommonMap(
                'География авто-проектов',
                'Тбилиси + выезд по Грузии по согласованию для автообъектов и автобизнеса. Планируем съёмку под рабочий график площадки и потоки клиентов.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для автобизнеса и автообъектов',
            pricingPlans: [
                {
                    title: 'Старт для автобизнеса',
                    price: 'от 300 ₾',
                    features: ['Базовая съёмка площадки/шоурума', 'Короткий ролик для digital', 'Пакет материалов для сайта'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Видео + reels пакет',
                    price: 'от 600 ₾',
                    features: ['Имиджевое видео + short-form серия', 'Контент под соцсети и рекламу', 'Форматы под автоворонку продаж'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный визуальный пакет',
                    price: 'от 900 ₾',
                    features: ['Видео, aerial, reels, AI-упаковка', 'Материалы для продаж и бренда', 'Комплект под все digital-каналы'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему площадка не вызывает доверия с первого взгляда',
            painProofSupportingLine:
                'Когда визуал не показывает уровень объекта и ассортимент, покупатель уходит к тому, кто выглядит понятнее и сильнее.',
            painProofCards: [
                {
                    title: 'Не видно масштаб и качество площадки',
                    text: 'Случайные фото не передают уровень бизнеса.',
                    resolution:
                        'Решение: обзорный видео- и дрон-контент создаёт ощущение масштаба и порядка.',
                },
                {
                    title: 'Контент не помогает продажам',
                    text: 'Кадры есть, но они не работают как коммерческий инструмент.',
                    resolution:
                        'Решение: делаем материалы под сайт, рекламу и соцсети с понятной логикой использования.',
                },
                {
                    title: 'Нет системного digital-потока',
                    text: 'Один ролик не закрывает постоянную коммуникацию.',
                    resolution: 'Решение: reels и контент-серии помогают держать внимание аудитории.',
                },
                {
                    title: 'Слишком разрозненная подача',
                    text: 'Видео, фото и тексты живут отдельно друг от друга.',
                    resolution: 'Решение: собираем единый контент-пакет под бренд и продажи.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снимать дилерский центр в рабочее время?',
                    answer: 'Да, строим план съёмки по зонам, чтобы минимально влиять на работу салона.',
                },
                {
                    question: 'Делаете ли вы контент для автообъявлений и площадок?',
                    answer: 'Да, подготавливаем материалы под листинги, сайт, соцсети и рекламу.',
                },
                {
                    question: 'Подходит ли это для премиальных и массовых брендов?',
                    answer: 'Да, формат адаптируется под позиционирование бренда и сегмент аудитории.',
                },
                {
                    question: 'Можно ли сделать регулярный контент-план?',
                    answer: 'Да, формируем ежемесячный или квартальный цикл продакшна.',
                },
                {
                    question: 'Делаете ли вы обзорный контент по конкретным моделям?',
                    answer: 'Да, снимаем отдельные model-based пакеты для ключевых автомобилей и предложений.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕГО АВТООБЪЕКТА',
                description:
                    'Оставьте контакты и краткий бриф. Подберём эффективный формат контента под продажи и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder:
                    'Например: обзор дилерского центра и серия reels по ключевым моделям.',
                serviceOptions: [
                    'Видео центра',
                    'Аэросъёмка площадки',
                    'Reels для автобизнеса',
                    'Контент по моделям',
                    'Контент сервиса',
                    'AI-упаковка',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    businessService: {
        page: makePage({
            path: '/business-service',
            eyebrow: 'DIGITAL BUSINESS CONTENT',
            h1: 'Контент для бизнеса и коммерческих объектов',
            intro: 'Видео, aerial-контент, reels, 360 и digital-упаковка для бизнеса, который хочет сильнее выглядеть онлайн и продавать понятнее.',
            heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80',
            panelServiceSlugs: ['imidzhevoe-video-biznesa', 'kontent-sayta-reklamy', 'reels-shorts'],
            trustHeading: 'Нам доверяют в коммерческих проектах',
            trustBadges: ['B2B', 'Retail', 'Сервисы', 'Коммерческая недвижимость', 'Локальные бренды', 'Сети'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/auto-service', title: 'Автобизнес', description: 'Контент для площадок и объектов с продажами.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Сервисная визуальная подача и доверие.' },
                { href: '/hotels-service', title: 'Отели', description: 'Hospitality-кейс визуальной упаковки.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Регулярный short-form и промо-контент.' },
                { href: customBusiness, title: 'Ваш бизнес в Gazeta', description: 'Gazeta-направление custom business.' },
            ],
            seoTitle: 'Контент для бизнеса в Тбилиси | Business Service — Breus Media',
            seoDescription: 'Видео, aerial, reels, 360° и digital-упаковка для бизнеса и коммерческих объектов в Грузии.',
            schemaServiceName: 'Business Content Service',
            schemaServiceType: 'Commercial media production service',
        }),
        data: {
            heroSubtitle:
                'Видео, aerial-контент, reels, 360 и digital-упаковка для бизнеса, который хочет сильнее выглядеть онлайн и продавать понятнее.',
            heroSupportingLine:
                'Когда бизнес выглядит сильнее в digital, клиент быстрее понимает, за что он должен выбрать именно вас.',
            socialProofStats: makeCommonSocialProof('business'),
            servicesHeading: 'Услуги для бизнеса и коммерческих объектов',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'imidzhevoe-video-biznesa',
                    title: 'Имиджевое видео бизнеса',
                    category: 'Brand · Trust · Positioning',
                    description: 'Визуальная подача ценности бизнеса в сильном видеоформате.',
                    price: 'Brand Video · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'kontent-sayta-reklamy',
                    title: 'Контент для сайта и рекламы',
                    category: 'Landing · Ads · Performance',
                    description: 'Снимаем материалы под ключевые точки продаж в digital.',
                    price: 'Performance Pack · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-shorts',
                    title: 'Reels и Shorts',
                    category: 'Social · Reach · Engagement',
                    description: 'Серии коротких роликов для регулярного digital-присутствия.',
                    price: 'Short-form · от 450 ₾',
                    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'tury-360',
                    title: '360° туры',
                    category: 'Interactive · Site · Sales',
                    description: 'Интерактивные туры для презентации пространства и удалённых клиентов.',
                    price: '360° · от 550 ₾',
                    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80',
                    primaryHref: '/360-tour-business',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'semka-prostranstva-obekta',
                    title: 'Съёмка пространства / объекта',
                    category: 'Interior · Exterior · Aerial',
                    description: 'Комплексная съёмка точек, офиса, шоурума или коммерческого объекта.',
                    price: 'Space Content · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-kontenta',
                    title: 'AI-упаковка контента',
                    category: 'Texts · Scripts · Adaptation',
                    description: 'Тексты, сценарии и адаптация материалов под digital-каналы.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&q=80',
                },
            ],
            processSteps: makeCommonProcessSteps('для бизнеса и коммерческого объекта'),
            map: makeCommonMap(
                'География коммерческих проектов',
                'Тбилиси + выезд по Грузии по согласованию. Подбираем формат продакшна под офлайн-объект, digital-воронку и этап роста бизнеса.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для бизнеса и коммерческих объектов',
            pricingPlans: [
                {
                    title: 'Старт для бизнеса',
                    price: 'от 300 ₾',
                    features: ['Базовый продакшн-пакет', 'Материалы для сайта/соцсетей', 'Один финальный видеоролик'],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Контент-пакет',
                    price: 'от 650 ₾',
                    features: ['Видео + short-form + фото', 'Материалы под сайт и рекламу', 'Подготовка форматов под digital-каналы'],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полная digital-упаковка',
                    price: 'от 950 ₾',
                    features: ['Видео, aerial, 360, AI-упаковка', 'Система материалов под продажу', 'Единая визуальная логика бренда'],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему бизнес не выглядит убедительно онлайн',
            painProofSupportingLine:
                'Клиент принимает решение ещё до контакта. Если digital-образ слабый, бизнес проигрывает более собранным конкурентам.',
            painProofCards: [
                {
                    title: 'Нет ясной визуальной подачи',
                    text: 'Клиенту сложно понять ценность бизнеса по разрозненным материалам.',
                    resolution: 'Решение: показываем ценность бизнеса через сильный контент и понятную структуру.',
                },
                {
                    title: 'Контент не помогает продажам',
                    text: 'Материалы делаются ради оформления, но не под точки принятия решения.',
                    resolution: 'Решение: делаем материалы не ради красоты, а под конкретные точки контакта.',
                },
                {
                    title: 'Слишком много подрядчиков',
                    text: 'Процесс растягивается, а визуальная подача теряет цельность.',
                    resolution: 'Решение: объединяем видео, aerial, reels, 360 и AI-упаковку в один процесс.',
                },
                {
                    title: 'Нет единой упаковки под каналы',
                    text: 'Сайт, соцсети и реклама требуют разный формат и подачу.',
                    resolution: 'Решение: подготавливаем материалы сразу под сайт, соцсети и рекламу.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'С чего лучше начать?',
                    answer: 'Обычно начинаем с брифа и стартового пакета, чтобы быстро закрыть ключевые digital-точки.',
                },
                {
                    question: 'Можно ли собрать пакет под сайт и соцсети?',
                    answer: 'Да, это стандартный сценарий: делаем единый пакет под несколько каналов одновременно.',
                },
                {
                    question: 'Делаете ли вы 360 и видео одновременно?',
                    answer: 'Да, в рамках одного продакшн-цикла можно объединять видео, 360 и short-form форматы.',
                },
                {
                    question: 'Можно ли работать проектно?',
                    answer: 'Да, можно запускать разовые проекты или переходить на регулярный контент-план.',
                },
                {
                    question: 'Как быстро готовятся материалы?',
                    answer: 'Черновые материалы обычно доступны в течение 24-48 часов после съёмки.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ПОД ВАШУ БИЗНЕС-ЗАДАЧУ',
                description:
                    'Оставьте контакты и краткий бриф. Подберём формат под цели бизнеса и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder: 'Например: имиджевое видео и пакет reels для сайта, рекламы и соцсетей.',
                serviceOptions: [
                    'Имиджевое видео',
                    'Контент для сайта/ads',
                    'Reels и Shorts',
                    '360° туры',
                    'Съёмка объекта',
                    'AI-упаковка',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    promoVideoService: {
        page: makePage({
            path: '/promo-video-service',
            eyebrow: 'PROMO VIDEO SERVICE',
            h1: 'Промо-видео для бизнеса и брендов',
            intro: 'Имиджевые, продуктовые и рекламные видео для бизнеса, пространств и проектов в Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1800&q=80',
            panelServiceSlugs: ['promo-video-nedvizhimost', 'promo-video-oteli', 'promo-video-restorany'],
            trustHeading: 'Формат работает в разных сегментах бизнеса',
            trustBadges: ['Недвижимость', 'Отель', 'Ресторан', 'Автобизнес', 'Туризм', 'Клиника', 'Бизнес'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Промо-видео для объектов, ЖК и коммерческих пространств.' },
                { href: '/hotels-service', title: 'Отели', description: 'Промо-видео для бронирования и презентации сервиса.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Промо-подача атмосферы и концепции заведения.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Имиджевые и обзорные промо для автонаправления.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Промо для маршрутов, локаций и турпродуктов.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Промо-видео для усиления доверия к сервису.' },
                { href: '/business-service', title: 'Ваш бизнес', description: 'Промо-формат для коммерческих и бренд-задач.' },
            ],
            seoTitle: 'Промо-видео для бизнеса и брендов в Тбилиси | Promo Video Service — Breus Media',
            seoDescription:
                'Имиджевые, продуктовые и рекламные промо-видео для бизнеса, пространств и проектов: Тбилиси + выезд по Грузии по согласованию.',
            schemaServiceName: 'Promo Video Service',
            schemaServiceType: 'Promotional video production service',
        }),
        data: {
            heroSubtitle:
                'Имиджевые, продуктовые и рекламные видео для бизнеса, пространств и проектов в Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine:
                'Хорошее промо-видео не просто красиво выглядит — оно быстрее объясняет ценность бизнеса и усиливает доверие ещё до контакта.',
            socialProofStats: [
                { value: '2x', label: 'Быстрее понимание ценности оффера' },
                { value: '4K', label: 'Форматы под сайт, ads и соцсети' },
                { value: 'Short', label: 'Вертикальные и короткие cut-down версии' },
                { value: 'Hub', label: 'Один сервис для разных ниш бизнеса' },
            ],
            servicesHeading: 'Выберите, для какого направления нужен promo video',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'promo-video-nedvizhimost',
                    title: 'Промо-видео для недвижимости',
                    category: 'Объект · ЖК · Пространство',
                    description:
                        'Покажите объект, ЖК или пространство так, чтобы он выглядел сильнее в продаже и презентации.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    primaryHref: '/promo-video/promo-real-estate',
                    primaryCtaLabel: 'Открыть услугу',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'promo-video-oteli',
                    title: 'Промо-видео для отелей',
                    category: 'Гостеприимство · Бронирования · Атмосфера',
                    description:
                        'Создайте атмосферный ролик, который помогает гостю захотеть бронирование ещё до перехода на площадку.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
                    primaryHref: '/promo-video/promo-hotel',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'promo-video-restorany',
                    title: 'Промо-видео для ресторанов',
                    category: 'Вайб · Подача · Бренд',
                    description: 'Передайте вайб, подачу, свет и настроение заведения до первого визита.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    primaryHref: '/promo-video/promo-restaurant',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'promo-video-avtobiznes',
                    title: 'Промо-видео для автобизнеса',
                    category: 'Имидж · Обзор · Презентация',
                    description:
                        'Имиджевые и обзорные ролики для автосалонов, дилеров и премиальных площадок.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    primaryHref: '/promo-video/promo-car-dealer',
                    primaryCtaLabel: 'Открыть услугу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'promo-video-turizm',
                    title: 'Промо-видео для туризма',
                    category: 'Маршрут · Локация · Опыт',
                    description:
                        'Покажите маршрут, локацию или опыт так, чтобы человек захотел оказаться внутри этой истории.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
                    primaryHref: '/promo-video/promo-excursion',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'promo-video-kliniki',
                    title: 'Промо-видео для клиник',
                    category: 'Доверие · Среда · Сервис',
                    description:
                        'Сделайте видео, которое усиливает доверие к пространству, специалистам и сервису.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
                    primaryHref: '/promo-video/promo-clinic',
                    primaryCtaLabel: 'Открыть услугу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'promo-video-biznes',
                    title: 'Промо-видео для бизнеса',
                    category: 'Бренд · Коммерция · Digital',
                    description:
                        'Подходит для брендов, коммерческих объектов, сервисов, шоурумов и digital-презентации бизнеса.',
                    price: 'Promo Video · по задаче',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Короткий бриф',
                    description: 'Фиксируем задачу, формат ролика, каналы размещения и ожидаемый результат.',
                },
                {
                    number: '02',
                    title: 'Сценарий и структура',
                    description: 'Собираем логику подачи: что и в какой последовательности должно работать на ценность.',
                },
                {
                    number: '03',
                    title: 'Съёмка и продакшн',
                    description: 'Проводим съёмку по согласованному плану с акцентом на смысл и визуальную целостность.',
                },
                {
                    number: '04',
                    title: 'Монтаж и адаптация',
                    description: 'Собираем финальный ролик и версии под нужные форматы и digital-каналы.',
                },
            ],
            map: makeCommonMap(
                'География промо-видео проектов',
                'Снимаем промо-видео для бизнеса и брендов в Тбилиси + выезд по Грузии по согласованию.',
                'Карта покрытия'
            ),
            pricingHeading: 'Что вы получаете на выходе',
            pricingTagline: 'Пакеты promo-видео и формат выдачи материалов',
            pricingPlans: [
                {
                    title: 'Старт promo',
                    price: 'от 350 ₾',
                    features: [
                        'Готовое промо-видео — ролик под сайт, рекламу, презентацию или соцсети.',
                        'Видео для digital-каналов — подходит для сайта, Instagram, TikTok, YouTube и рекламных кампаний.',
                        'Сценарную и визуальную логику — не просто съёмка, а понятная подача ценности бизнеса.',
                    ],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Стандартный promo-пакет',
                    price: 'от 650 ₾',
                    features: [
                        'Готовое промо-видео — под сайт, рекламу и презентацию.',
                        'Версии под разные форматы — горизонтальный, вертикальный и короткий cut-down при необходимости.',
                        'Видео для digital-каналов — единый пакет под ключевые площадки.',
                        'Сценарную и визуальную логику — структура ролика под бизнес-задачу.',
                    ],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный promo-пакет',
                    price: 'от 950 ₾',
                    features: [
                        'Готовое промо-видео — основной ролик под коммуникацию бренда.',
                        'Версии под разные форматы — адаптация под кампании и платформы.',
                        'Материал, который можно использовать в продажах — промо помогает быстрее объяснить ценность предложения.',
                        'Видео для digital-каналов — подготовка под сайт, соцсети и рекламу.',
                    ],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему бизнесу уже недостаточно просто “красивого ролика”',
            painProofSupportingLine:
                'Если видео не объясняет ценность, не удерживает внимание и не вписывается в воронку, оно остаётся просто красивым файлом, а не рабочим инструментом.',
            painProofCards: [
                {
                    title: 'Видео выглядит красиво, но не продаёт',
                    text: 'Без ясной идеи ролик не усиливает интерес и не помогает принять решение.',
                    resolution: 'Решение: строим видео вокруг смысла, а не только картинки.',
                },
                {
                    title: 'Неясно, где использовать ролик',
                    text: 'Один формат редко подходит сразу под сайт, рекламу и соцсети.',
                    resolution: 'Решение: готовим видео с пониманием каналов и сценариев использования.',
                },
                {
                    title: 'Бренд не запоминается',
                    text: 'Если ролик типовой, он не создаёт ощущения отличия от конкурентов.',
                    resolution: 'Решение: выделяем атмосферу, логику подачи и сильные стороны бренда.',
                },
                {
                    title: 'Слишком много хаоса в продакшне',
                    text: 'Когда съёмка, сценарий и маркетинг живут отдельно, результат размывается.',
                    resolution: 'Решение: собираем промо-видео как единый коммерческий инструмент.',
                },
            ],
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Чем промо-видео отличается от обычной съёмки?',
                    answer: 'Промо-видео строится вокруг бизнес-цели и сценарной логики, а не только вокруг красивых кадров.',
                },
                {
                    question: 'Можно ли сделать видео сразу под сайт и соцсети?',
                    answer: 'Да, мы сразу планируем съёмку и монтаж так, чтобы получить версии под сайт и ключевые соцплатформы.',
                },
                {
                    question: 'Вы помогаете со сценарием?',
                    answer: 'Да, сценарий и структура входят в процесс: вместе определяем смысловые акценты и подачу.',
                },
                {
                    question: 'Сколько времени занимает подготовка и монтаж?',
                    answer: 'Сроки зависят от задачи, но обычно черновой этап доступен в ближайшие рабочие дни после съёмки.',
                },
                {
                    question: 'Можно ли снять промо без большого продакшна?',
                    answer: 'Да, можно собрать рабочее промо-видео в компактном формате без перегруженного продакшна.',
                },
                {
                    question: 'Подходит ли промо-видео для рекламы?',
                    answer: 'Да, промо-видео подходит для рекламных кампаний и может адаптироваться под разные цели и форматы.',
                },
                {
                    question: 'Можно ли сделать короткие версии из одного ролика?',
                    answer: 'Да, из одного основного ролика делаем короткие cut-down версии для отдельных каналов.',
                },
            ],
            contact: {
                title: 'Обсудим промо-видео для вашего проекта',
                description:
                    'Подскажем, какой формат подойдёт именно вашему бизнесу, где видео лучше использовать и как собрать его без лишнего хаоса.',
                taskPlaceholder:
                    'Например: промо-видео для бренда с версиями под сайт, соцсети и рекламу.',
                serviceOptions: [
                    'Недвижимость',
                    'Отель',
                    'Ресторан',
                    'Автобизнес',
                    'Туризм',
                    'Клиника',
                    'Бизнес',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    aiVisualizationService: {
        page: makePage({
            path: '/ai-visualization-service',
            eyebrow: 'AI VISUALIZATION SERVICE',
            h1: 'AI-визуализация для продаж и упаковки',
            intro: 'Создаём AI-визуалы для объектов, пространств, товаров и брендов в Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1800&q=80',
            panelServiceSlugs: ['ai-viz-nedvizhimost', 'ai-staging-meblirovka', 'ai-viz-prostranstv-intererov'],
            trustHeading: 'AI-визуализация для разных категорий бизнеса',
            trustBadges: ['Недвижимость', 'Интерьеры', 'Отель / ресторан', 'Автобизнес', 'Продукт', 'Delivery / меню', 'Бренд / маркетинг'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Визуализация объектов и пространства под продажу и презентацию.' },
                { href: '/hotels-service', title: 'Отели', description: 'Подача интерьеров и среды гостеприимства до фактической съёмки.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Визуалы для меню, delivery и digital-материалов заведений.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Подача автомобилей, шоурумов и площадок для запуска продаж.' },
                { href: '/business-service', title: 'Ваш бизнес', description: 'AI-визуал под коммерческую упаковку, рекламу и презентации.' },
                {
                    href: '/promo-video-service',
                    title: 'Промо-видео для туризма',
                    description: 'Видео-форматы для туризма и локаций: маршруты, экскурсии, курорты и сервисные пространства.',
                },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный показ пространства вместе с AI-подачей концепта.' },
            ],
            seoTitle: 'AI-визуализация для продаж и упаковки в Тбилиси | AI Visualization Service — Breus Media',
            seoDescription:
                'AI-визуализация объектов, пространств, товаров и брендов: Тбилиси + выезд по Грузии по согласованию. Форматы для рекламы, презентаций и digital-продаж.',
            schemaServiceName: 'AI Visualization Service',
            schemaServiceType: 'AI visualization and digital packaging service',
        }),
        data: {
            heroSubtitle:
                'Создаём AI-визуалы для объектов, пространств, товаров и брендов в Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine:
                'Показывайте то, что ещё не построено, не приехало, не снято или пока существует только как идея — так, чтобы это уже хотелось купить, забронировать или заказать.',
            socialProofStats: [
                { value: 'Fast', label: 'Быстрый запуск визуалов до съёмки' },
                { value: 'Multi', label: 'Сценарии под разные аудитории и каналы' },
                { value: 'AI', label: 'Концепты до физической реализации' },
                { value: 'Hub', label: 'Единая service-category подача' },
            ],
            servicesHeading: 'Выберите категорию AI-визуализации под вашу задачу',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'ai-viz-nedvizhimost',
                    title: 'AI-визуализация недвижимости',
                    category: 'Дом · Квартира · ЖК · Коммерция',
                    description:
                        'Покажите дом, квартиру, ЖК или коммерческий объект так, как он может выглядеть после завершения, меблировки и благоустройства.',
                    price: 'AI Visualization · по задаче',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    featured: true,
                    tag: 'HOT',
                    primaryHref: '/ai-visual/ai-real-estate',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'ai-staging-meblirovka',
                    title: 'AI staging и меблировка',
                    category: 'Сценарий · Интерьер · Презентация',
                    description:
                        'Превращаем пустые, черновые или незавершённые помещения в понятный и продающий интерьерный сценарий.',
                    price: 'AI Staging · по задаче',
                    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-staging',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'ai-viz-prostranstv-intererov',
                    title: 'AI-визуализация пространств и интерьеров',
                    category: 'Отели · Рестораны · Клиники · Офисы',
                    description:
                        'Подходит для отелей, ресторанов, клиник, офисов, салонов, шоурумов и коммерческих пространств, когда нужно заранее показать атмосферу и уровень среды.',
                    price: 'AI Space Visuals · по задаче',
                    image: 'https://images.unsplash.com/photo-1465800872432-2f9858056029?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-interior',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'ai-produktovyj-vizual',
                    title: 'AI-продуктовый визуал',
                    category: 'Карточки · Сцены · Реклама',
                    description:
                        'Создаём реалистичные продуктовые сцены, карточки и рекламные изображения без полной классической фотосессии.',
                    price: 'AI Product Visuals · по задаче',
                    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-product',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'ai-viz-avtobiznes',
                    title: 'AI-визуал для автобизнеса',
                    category: 'Авто · Шоурум · Запуск',
                    description:
                        'Помогаем показывать автомобили, шоурумы и автоплощадки так, как будто объект уже готов к продаже, презентации или запуску.',
                    price: 'AI Auto Visuals · по задаче',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-auto',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-kartochki-menyu-delivery',
                    title: 'AI-карточки, меню и delivery-упаковка',
                    category: 'Меню · Delivery · Каталоги',
                    description:
                        'Делаем сильные визуалы для меню, доставки, маркетплейсов, карточек услуг и digital-каталогов.',
                    price: 'AI Cards/Menu · по задаче',
                    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-menu-delivery',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'ai-viz-brendy-marketing',
                    title: 'AI-визуал для брендов и маркетинга',
                    category: 'Кампании · Ads · Лендинги',
                    description:
                        'Готовим визуалы для кампаний, рекламы, презентаций, лендингов и брендовых digital-материалов.',
                    price: 'AI Brand Visuals · по задаче',
                    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
                    primaryHref: '/ai-visual/ai-brand',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'ai-opisaniya-lokalizaciya-hotel',
                    title: 'AI-описания и локализация',
                    category: 'Тексты · Мультиязычность · OTA',
                    description: 'Тексты и адаптация материалов под разные языки и площадки.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80',
                    primaryHref: '/ai-content/hotel-ai-descriptions',
                },
                {
                    id: 9,
                    order: 9,
                    slug: 'ai-upakovka-predlozheniy-tourism',
                    title: 'AI-упаковка предложений',
                    category: 'Сценарии · Тексты · Funnel',
                    description: 'Описания, сценарии и тексты под digital-воронку.',
                    price: 'AI Content · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
                    primaryHref: '/ai-content/tourism-ai-packaging',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Короткий бриф',
                    description: 'Фиксируем задачу, тип визуализации, каналы размещения и ожидаемый коммерческий результат.',
                },
                {
                    number: '02',
                    title: 'Сбор материалов и референсов',
                    description: 'Собираем исходники, референсы, стили и ограничения, чтобы задать точный вектор визуала.',
                },
                {
                    number: '03',
                    title: 'Создание визуальных концептов',
                    description: 'Готовим несколько направлений и проверяем, какой вариант лучше работает под цель.',
                },
                {
                    number: '04',
                    title: 'Финальная упаковка',
                    description: 'Передаём финальные AI-визуалы в форматах для сайта, объявлений, рекламы и презентации.',
                },
            ],
            map: makeCommonMap(
                'География AI-визуализации',
                'Создаём AI-визуалы для проектов в Тбилиси + выезд по Грузии по согласованию.',
                'Карта покрытия'
            ),
            pricingHeading: 'Что вы получаете на выходе',
            pricingTagline: 'Пакеты AI-визуализации и digital-упаковки',
            pricingPlans: [
                {
                    title: 'Старт AI',
                    price: 'от 300 ₾',
                    features: [
                        'Готовые AI-визуалы — изображения и серии сцен для продаж, рекламы и digital-упаковки.',
                        'Концепт будущего результата — показывает, как может выглядеть объект, интерьер, товар или пространство до физической реализации.',
                        'Быструю визуальную упаковку без полной съёмки — когда физической съёмки ещё нет или она невыгодна.',
                    ],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Стандартный AI-пакет',
                    price: 'от 650 ₾',
                    features: [
                        'Готовые AI-визуалы — базовый пакет сцен под основные точки контакта.',
                        'Материалы для сайта и объявлений — лендинги, карточки объектов, каталоги, маркетплейсы и презентации.',
                        'Варианты под разные стили и сценарии — один объект в нескольких форматах и под разные аудитории.',
                    ],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный AI-пакет',
                    price: 'от 950 ₾',
                    features: [
                        'Полный набор готовых AI-визуалов для рекламы, продаж и digital-материалов.',
                        'Материалы для сайта и объявлений + дополнительные адаптации под кампании.',
                        'Варианты под разные стили и сценарии с финальной упаковкой под каналы.',
                        'Быструю визуальную упаковку без полной съёмки на старте проекта.',
                    ],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему обычной съёмки и рендера уже недостаточно',
            painProofSupportingLine:
                'Когда нужно продавать быстрее, тестировать идеи, показывать будущий результат или запускать материалы до полной готовности, AI-визуализация даёт бизнесу заметное преимущество.',
            painProofCards: [
                {
                    title: 'Объект или товар ещё не готов',
                    text: 'Если дом строится, машина едет, меню обновляется или интерьер ещё не оформлен, показывать пока нечего.',
                    resolution: 'Решение: AI-визуализация помогает продавать идею и будущий результат до полной готовности.',
                },
                {
                    title: 'Клиенту сложно представить итог',
                    text: 'Планы, чертежи и обычные фото часто не дают ощущения, как это будет выглядеть в реальности.',
                    resolution: 'Решение: создаём визуал, который помогает увидеть пространство, продукт или объект заранее.',
                },
                {
                    title: 'Классическая съёмка не всегда выгодна',
                    text: 'Не каждый проект разумно тащить в полноценный продакшн на старте.',
                    resolution: 'Решение: AI-визуалы помогают быстро собрать сильную упаковку без лишних затрат на первом этапе.',
                },
                {
                    title: 'Нужно много вариантов и гипотез',
                    text: 'Разные стили, сценарии, аудитории и идеи сложно тестировать через обычную съёмку.',
                    resolution: 'Решение: AI позволяет быстро создавать и сравнивать несколько визуальных направлений.',
                },
            ],
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Чем AI-визуализация отличается от обычного рендера?',
                    answer: 'AI-визуализация быстрее формирует рабочие коммерческие варианты и позволяет гибко тестировать разные сценарии подачи.',
                },
                {
                    question: 'Можно ли использовать AI-визуалы для продажи ещё неготового объекта?',
                    answer: 'Да, это один из ключевых сценариев: визуалы помогают показать будущий результат до фактической готовности.',
                },
                {
                    question: 'Можно ли сделать несколько стилей одного и того же пространства?',
                    answer: 'Да, мы можем подготовить несколько стилистических направлений и сравнить, какое лучше работает под вашу аудиторию.',
                },
                {
                    question: 'Подходит ли это для карточек товаров, меню и delivery?',
                    answer: 'Да, AI-визуалы подходят для карточек, меню, delivery-платформ и digital-каталогов.',
                },
                {
                    question: 'Можно ли сделать визуалы без полноценной фотосессии?',
                    answer: 'Да, это рабочий формат, когда физической съёмки нет, она невыгодна или её нужно усилить.',
                },
                {
                    question: 'Где потом можно использовать эти материалы?',
                    answer: 'Материалы используются на сайтах, в объявлениях, презентациях, соцсетях и рекламных кампаниях.',
                },
                {
                    question: 'Можно ли обновлять и дорабатывать визуалы позже?',
                    answer: 'Да, AI-визуалы можно дорабатывать и расширять по мере изменения задач, ассортимента или сценариев продаж.',
                },
            ],
            contact: {
                title: 'Обсудим AI-визуализацию для вашего проекта',
                description:
                    'Подскажем, что лучше подойдёт: staging, визуализация объекта, продуктовые сцены или коммерческая упаковка под сайт, рекламу и продажи.',
                taskPlaceholder:
                    'Например: AI staging квартиры + набор визуалов для карточек, сайта и рекламы.',
                serviceOptions: [
                    'Недвижимость',
                    'Интерьеры',
                    'Отель / ресторан',
                    'Автобизнес',
                    'Продукт',
                    'Delivery / меню',
                    'Бренд / маркетинг',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    reelsService: {
        page: makePage({
            path: '/reels-service',
            eyebrow: 'REELS & SHORTS SERVICE',
            h1: 'Reels и Shorts для бизнеса и брендов',
            intro: 'Короткие вертикальные видео для бизнеса, объектов, заведений и брендов в Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1800&q=80',
            panelServiceSlugs: ['reels-nedvizhimost', 'reels-oteli', 'reels-restorany'],
            trustHeading: 'Формат работает в разных нишах бизнеса',
            trustBadges: ['Недвижимость', 'Отель', 'Ресторан', 'Автобизнес', 'Туризм', 'Клиника', 'Бизнес'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Короткий контент для объектов, ЖК и объявлений.' },
                { href: '/hotels-service', title: 'Отели', description: 'Вертикальные ролики под соцсети, рекламу и бронирования.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Reels для блюд, атмосферы, акций и трафика.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Контент для обзоров, новинок и презентации площадки.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Reels для маршрутов, локаций и travel-продвижения.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Короткий формат для доверия и объяснения услуг.' },
                { href: '/business-service', title: 'Ваш бизнес', description: 'Регулярный контент-поток для брендов и сервисов.' },
            ],
            seoTitle: 'Reels и Shorts для бизнеса и брендов в Тбилиси | Reels Service — Breus Media',
            seoDescription:
                'Короткие вертикальные видео для бизнеса, объектов, заведений и брендов: Тбилиси + выезд по Грузии по согласованию. Форматы для соцсетей, рекламы и заявок.',
            schemaServiceName: 'Reels and Shorts Service',
            schemaServiceType: 'Short-form video production service',
        }),
        data: {
            heroSubtitle:
                'Короткие вертикальные видео для бизнеса, объектов, заведений и брендов в Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine:
                'Reels работают лучше всего, когда за 10–20 секунд быстро объясняют ценность, цепляют внимание и подталкивают к следующему шагу.',
            socialProofStats: [
                { value: '10-20s', label: 'Фокус на первые секунды внимания' },
                { value: 'Vertical', label: 'Формат под Reels, Shorts и TikTok' },
                { value: 'Series', label: 'Контент-поток вместо разовых роликов' },
                { value: 'Ads', label: 'Использование в органике и рекламе' },
            ],
            servicesHeading: 'Выберите, для какого направления нужен Reels-контент',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'reels-nedvizhimost',
                    title: 'Reels для недвижимости',
                    category: 'Объекты · ЖК · Районы · Листинги',
                    description:
                        'Короткие ролики для объектов, ЖК, районов и объявлений, которые помогают быстрее привлечь внимание к листингу.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    featured: true,
                    tag: 'HOT',
                    primaryHref: '/reels-promo/reels-real-estate',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'reels-oteli',
                    title: 'Reels для отелей',
                    category: 'Соцсети · Реклама · Бронирования',
                    description:
                        'Вертикальные видео для соцсетей, рекламы и бронирований, которые передают атмосферу и ощущение отдыха.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-hotel',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-restorany',
                    title: 'Reels для ресторанов',
                    category: 'Блюда · Интерьер · Акции · Трафик',
                    description:
                        'Короткий контент про блюда, интерьер, настроение, посадку, акции и поводы прийти.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-restaurant',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'reels-avtobiznes',
                    title: 'Reels для автобизнеса',
                    category: 'Салоны · Обзоры · Новинки',
                    description:
                        'Видео для автосалонов, площадок, обзоров, новинок и контента, который помогает удерживать внимание аудитории.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-auto',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'reels-turizm',
                    title: 'Reels для туризма',
                    category: 'Туры · Локации · Маршруты',
                    description:
                        'Контент для туров, локаций, маршрутов, outdoor-опыта и travel-продвижения.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-tourism',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'reels-kliniki',
                    title: 'Reels для клиник',
                    category: 'Доверие · Услуги · Пространство',
                    description:
                        'Короткие ролики для digital-присутствия, доверия, объяснения услуг и презентации пространства.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-clinic',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'reels-biznes',
                    title: 'Reels для бизнеса',
                    category: 'Бренд · Сервисы · Контент-поток',
                    description:
                        'Подходит для брендов, сервисов, коммерческих объектов, личного бренда и регулярного контент-потока.',
                    price: 'Reels · по задаче',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'reels-rieltor',
                    title: 'Reels для риелтора',
                    category: 'Instagram · TikTok · Shorts',
                    description: 'Серийный short-form контент для стабильного входящего потока и повышения узнаваемости агента.',
                    price: 'Пакет 6-12 роликов · от 650 ₾',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    primaryHref: '/reels-promo/reels-realtor',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Короткий бриф',
                    description: 'Фиксируем задачу, роль контента в воронке и ключевые каналы размещения.',
                },
                {
                    number: '02',
                    title: 'Идеи и сценарные заходы',
                    description: 'Собираем hooks, форматы подачи и логику коротких роликов под вашу нишу.',
                },
                {
                    number: '03',
                    title: 'Съёмка и сбор материала',
                    description: 'Проводим съёмку и собираем пул контента для серийного выхода.',
                },
                {
                    number: '04',
                    title: 'Монтаж и адаптация',
                    description: 'Готовим финальные вертикальные версии под соцсети и рекламные сценарии.',
                },
            ],
            map: makeCommonMap(
                'География съёмок Reels-контента',
                'Снимаем короткие вертикальные видео в Тбилиси + выезд по Грузии по согласованию.',
                'Карта покрытия'
            ),
            pricingHeading: 'Что вы получаете на выходе',
            pricingTagline: 'Пакеты Reels/Shorts для контент-потока и заявок',
            pricingPlans: [
                {
                    title: 'Старт Reels',
                    price: 'от 300 ₾',
                    features: [
                        'Готовые вертикальные ролики — под Instagram, TikTok, YouTube Shorts и рекламу.',
                        'Сильный первый захват внимания — ролики собираются так, чтобы быстро цеплять в первые секунды.',
                        'Материалы для соцсетей и ads — один и тот же контент можно использовать в органике и в рекламе.',
                    ],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Стандартный reels-пакет',
                    price: 'от 550 ₾',
                    features: [
                        'Контент под регулярный выход — материалы, которые можно публиковать сериями, а не разово.',
                        'Видео под разные цели — имидж, охваты, прогрев, презентация услуги, вовлечение и заявки.',
                        'Готовые вертикальные ролики под ключевые площадки и рекламные размещения.',
                    ],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный reels-пакет',
                    price: 'от 850 ₾',
                    features: [
                        'Контент под регулярный выход в формате системного контент-потока.',
                        'Видео под разные цели и этапы воронки: охват, доверие, прогрев и заявки.',
                        'Материалы для соцсетей и ads с адаптацией под разные сценарии публикации.',
                        'Сильный первый захват внимания во всех роликах серии.',
                    ],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему бизнесу уже недостаточно просто “быть в соцсетях”',
            painProofSupportingLine:
                'Если короткий контент не цепляет, не объясняет и не выходит регулярно, он не превращается ни в внимание, ни в доверие, ни в заявки.',
            painProofCards: [
                {
                    title: 'Контент есть, но его не смотрят',
                    text: 'Слабый хук и случайная подача не удерживают внимание даже несколько секунд.',
                    resolution: 'Решение: строим Reels вокруг сильного первого кадра, смысла и ритма.',
                },
                {
                    title: 'Нечего публиковать регулярно',
                    text: 'Без системы контент быстро заканчивается, а аккаунт выглядит мёртвым.',
                    resolution: 'Решение: собираем серию роликов и контент-пакеты под регулярный выход.',
                },
                {
                    title: 'Видео не помогают бизнесу',
                    text: 'Много просмотров не всегда означают интерес к услуге или продукту.',
                    resolution: 'Решение: делаем ролики под конкретные бизнес-задачи, а не просто “для красоты”.',
                },
                {
                    title: 'Слишком много хаоса в продакшне',
                    text: 'Сценарий, съёмка, монтаж и публикации не связаны в одну систему.',
                    resolution: 'Решение: собираем Reels как управляемый контент-поток под бренд и продажи.',
                },
            ],
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Чем Reels отличаются от обычного промо-видео?',
                    answer: 'Reels — это короткий вертикальный формат с упором на быстрый хук и регулярный выход, а промо-видео чаще решает имиджевую задачу одним роликом.',
                },
                {
                    question: 'Сколько роликов лучше делать за одну съёмку?',
                    answer: 'Обычно эффективнее собирать пакет из серии роликов, чтобы закрыть регулярный контент-поток на ближайший период.',
                },
                {
                    question: 'Можно ли делать Reels для рекламы и соцсетей одновременно?',
                    answer: 'Да, мы сразу готовим ролики так, чтобы их можно было использовать и в органике, и в рекламных размещениях.',
                },
                {
                    question: 'Вы помогаете с идеями и hooks?',
                    answer: 'Да, идеи, хук и сценарный заход входят в процесс подготовки контента.',
                },
                {
                    question: 'Подходит ли это для недвижимости, ресторанов и бизнеса?',
                    answer: 'Да, формат адаптируется под разные ниши и бизнес-задачи — от объектов и заведений до сервисов и брендов.',
                },
                {
                    question: 'Можно ли собрать пакет на месяц?',
                    answer: 'Да, можно собрать месячный контент-пакет с серийным выпуском роликов.',
                },
                {
                    question: 'Нужно ли снимать каждый раз с нуля?',
                    answer: 'Не всегда: часть материала можно снимать пакетно и переиспользовать в разных роликах и сценариях.',
                },
            ],
            contact: {
                title: 'Обсудим Reels для вашего проекта',
                description:
                    'Подскажем, какие ролики подойдут именно вашему бизнесу, как собрать контент-серию и что лучше работает под охваты, доверие и заявки.',
                taskPlaceholder:
                    'Например: пакет Reels на месяц под соцсети и рекламные кампании.',
                serviceOptions: [
                    'Недвижимость',
                    'Отель',
                    'Ресторан',
                    'Автобизнес',
                    'Туризм',
                    'Клиника',
                    'Бизнес',
                ],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },

    tours360Service: {
        page: makePage({
            path: '/360-tours-service',
            eyebrow: '360° TOURS SERVICE',
            h1: '360° туры для бизнеса и объектов',
            intro: 'Интерактивные 360° туры для пространств, объектов и локаций в Тбилиси + выезд по Грузии по согласованию.',
            heroImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1800&q=80',
            panelServiceSlugs: ['tury-360-nedvizhimost', 'tury-360-oteli', 'tury-360-restorany'],
            trustHeading: 'Формат подходит для разных типов объектов',
            trustBadges: ['Недвижимость', 'Отели', 'Рестораны', 'Автобизнес', 'Туризм', 'Клиники', 'Бизнес'],
            trustLocation: 'Тбилиси + выезд по Грузии по согласованию',
            relatedLinks: [
                { href: '/real-estate-service', title: 'Недвижимость', description: '360° туры для объектов и презентации пространства.' },
                { href: '/hotels-service', title: 'Отели', description: 'Интерактивный просмотр номеров, лобби и территории.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Показ интерьера, посадки и атмосферы заведения.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Визуал для автосалонов, площадок и шоурумов.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Подача туристических локаций и маршрутов.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Визуальная подача пространства и среды клиники.' },
                { href: '/business-service', title: 'Ваш бизнес', description: 'Подход для офисов, студий и коммерческих пространств.' },
            ],
            seoTitle: '360° туры для бизнеса и объектов в Тбилиси | 360 Tours Service — Breus Media',
            seoDescription:
                'Интерактивные 360° туры для пространств, объектов и локаций: Тбилиси + выезд по Грузии по согласованию. Формат для продаж, презентаций и удалённых клиентов.',
            schemaServiceName: '360 Tours Service',
            schemaServiceType: 'Interactive virtual tour production service',
        }),
        data: {
            heroSubtitle:
                'Интерактивные 360° туры для пространств, объектов и локаций в Тбилиси + выезд по Грузии по согласованию.',
            heroSupportingLine: 'Клиенту проще доверять объекту, когда он может пройтись по нему ещё до визита.',
            socialProofStats: [
                { value: '360°', label: 'Интерактивный формат показа пространства' },
                { value: 'Mobile', label: 'Просмотр с телефона и компьютера' },
                { value: 'Link', label: 'Быстрая отправка клиенту и команде' },
                { value: 'Embed', label: 'Встраивание на сайт и лендинги' },
            ],
            servicesHeading: 'Выберите, для какого объекта нужен 360° тур',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'tury-360-nedvizhimost',
                    title: '360° туры для недвижимости',
                    category: 'Квартиры · Дома · Коммерция · ЖК',
                    description:
                        'Покажите квартиру, дом, коммерческий объект или ЖК так, чтобы клиент понял пространство до просмотра.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    primaryHref: '/360-tour-real-estate',
                    featured: true,
                    tag: 'HOT',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'tury-360-oteli',
                    title: '360° туры для отелей',
                    category: 'Номера · Лобби · Территория',
                    description:
                        'Дайте гостю возможность пройтись по номеру, лобби и территории ещё до бронирования.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
                    primaryHref: '/360-tour-hotels',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'tury-360-restorany',
                    title: '360° туры для ресторанов',
                    category: 'Интерьер · Посадка · Атмосфера',
                    description:
                        'Покажите интерьер, посадку, атмосферу и пространство заведения до визита.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    primaryHref: '/360-tour-restaurants',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'tury-360-avtobiznes',
                    title: '360° туры для автобизнеса',
                    category: 'Автосалон · Шоурум · Площадка',
                    description:
                        'Покажите автосалон, шоурум, площадку или интерьер автомобиля в интерактивном формате.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&q=80',
                    primaryHref: '/360-tour-auto',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'tury-360-turizm',
                    title: '360° туры для туризма и локаций',
                    category: 'Маршруты · Локации · Точки',
                    description:
                        'Дайте клиенту почувствовать место, маршрут или туристическую точку ещё до поездки.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
                    primaryHref: '/360-tour-tourism',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'tury-360-kliniki',
                    title: '360° туры для клиник',
                    category: 'Кабинеты · Пространство · Среда',
                    description:
                        'Покажите пространство, кабинеты и уровень среды так, чтобы снизить тревогу до первого визита.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
                    primaryHref: '/360-tour-clinics',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tury-360-biznes',
                    title: '360° туры для бизнеса',
                    category: 'Офисы · Шоурумы · Салоны · Студии',
                    description:
                        'Подходит для офисов, шоурумов, салонов, студий, коммерческих пространств и сервисных объектов.',
                    price: '360° · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    primaryHref: '/360-tour-business',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Короткий бриф',
                    description: 'Уточняем задачу, объект, количество точек и формат передачи тура.',
                },
                {
                    number: '02',
                    title: 'Съёмка на локации',
                    description: 'Проводим съёмку пространства на объекте по согласованному маршруту.',
                },
                {
                    number: '03',
                    title: 'Сборка и настройка тура',
                    description: 'Собираем интерактивный тур и подготавливаем его к просмотру на разных устройствах.',
                },
                {
                    number: '04',
                    title: 'Передача ссылки и встраивание',
                    description: 'Передаём готовую ссылку и помогаем разместить тур на сайте или странице объекта.',
                },
            ],
            map: makeCommonMap(
                'География 360° проектов',
                'Тбилиси + выезд по Грузии по согласованию. Подбираем формат 360° тура под задачу объекта и каналов продаж.',
                'Карта покрытия'
            ),
            pricingHeading: 'Что вы получаете на выходе',
            pricingTagline: 'Пакеты 360° туров для объектов и пространств',
            pricingPlans: [
                {
                    title: 'Старт 360',
                    price: 'от 300 ₾',
                    features: [
                        'Интерактивный 360° тур: готовый формат для просмотра с телефона и компьютера.',
                        'Ссылка для отправки клиенту: можно быстро делиться туром в мессенджерах, презентациях и письмах.',
                        'Встраивание на сайт: тур можно разместить на вашем сайте, лендинге или странице объекта.',
                    ],
                    buttonText: 'Выбрать',
                },
                {
                    title: 'Стандартный тур',
                    price: 'от 550 ₾',
                    features: [
                        'Интерактивный 360° тур: готовый формат для просмотра с телефона и компьютера.',
                        'Ссылка для отправки клиенту: можно быстро делиться туром в мессенджерах, презентациях и письмах.',
                        'Материалы для продаж и презентаций: подходит для удалённой демонстрации объекта, помещения или пространства.',
                    ],
                    buttonText: 'Выбрать',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный 360 пакет',
                    price: 'от 850 ₾',
                    features: [
                        'Встраивание на сайт: тур можно разместить на вашем сайте, лендинге или странице объекта.',
                        'Материалы для продаж и презентаций: подходит для удалённой демонстрации объекта, помещения или пространства.',
                        'Удобный формат для рекламы и лидов: 360° тур помогает удержать внимание и повысить качество первичного интереса.',
                    ],
                    buttonText: 'Выбрать',
                },
            ],
            painProofTitle: 'Почему обычных фото уже недостаточно',
            painProofSupportingLine:
                'Когда клиент не чувствует пространство, он дольше сомневается, хуже понимает объект и чаще уходит к тому, кто показал его нагляднее.',
            painProofCards: [
                {
                    title: 'Не чувствуется пространство',
                    text: 'По фото сложно понять планировку, масштаб и связность помещения.',
                    resolution: 'Решение: 360° тур даёт человеку ощущение реального присутствия.',
                },
                {
                    title: 'Клиенту приходится всё долго объяснять',
                    text: 'Много времени уходит на ответы про вход, зону, посадку, комнаты и логику пространства.',
                    resolution: 'Решение: интерактивный тур снимает часть вопросов ещё до звонка.',
                },
                {
                    title: 'Удалённому клиенту сложно принять решение',
                    text: 'Если человек не может приехать сразу, обычный визуал часто не дотягивает до доверия.',
                    resolution: 'Решение: 360° тур помогает показать объект дистанционно понятнее и сильнее.',
                },
                {
                    title: 'Объект выглядит слабее конкурентов',
                    text: 'Если у других уже есть интерактивный просмотр, статичная подача проигрывает.',
                    resolution: 'Решение: 360° формат делает презентацию объекта более современной и убедительной.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Где можно использовать 360° тур?',
                    answer: 'На сайте, в лендингах, в мессенджерах, презентациях и в материалах отдела продаж.',
                },
                {
                    question: 'Можно ли открыть тур с телефона?',
                    answer: 'Да, тур корректно открывается на телефоне и компьютере без сложной настройки для клиента.',
                },
                {
                    question: 'Можно ли встроить 360° тур на сайт?',
                    answer: 'Да, предоставляем формат, который можно встроить на сайт или страницу конкретного объекта.',
                },
                {
                    question: 'Сколько времени занимает съёмка и сборка?',
                    answer: 'Срок зависит от размера объекта и количества точек, обычно обсуждается сразу после короткого брифа.',
                },
                {
                    question: 'Подходит ли 360 для коммерческих объектов и заведений?',
                    answer: 'Да, формат подходит для офисов, шоурумов, салонов, заведений и других коммерческих пространств.',
                },
                {
                    question: 'Можно ли обновлять тур позже?',
                    answer: 'Да, при изменениях пространства тур можно обновлять и поддерживать в актуальном состоянии.',
                },
                {
                    question: 'Чем 360° тур лучше обычной фотогалереи?',
                    answer: 'Он показывает связность пространства и даёт эффект присутствия, поэтому клиенту проще понять объект до визита.',
                },
            ],
            contact: {
                title: 'Обсудим 360° тур для вашего объекта',
                description:
                    'Подскажем, как лучше показать пространство, сколько точек нужно и в каком формате удобнее передать тур клиентам.',
                taskPlaceholder:
                    'Например: нужен 360° тур для объекта с акцентом на ключевые зоны и удобную отправку клиенту.',
                serviceOptions: ['Недвижимость', 'Отель', 'Ресторан', 'Автобизнес', 'Туризм', 'Клиника', 'Бизнес'],
                whatsappHref: 'https://wa.me/995574619393',
            },
        },
    },
};
