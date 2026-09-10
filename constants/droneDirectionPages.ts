import { gazetaDetailRoutes } from '@/constants/gazetaRoutes';

export type DroneDirectionHeroConfig = {
    eyebrow: string;
    h1: string;
    intro: string;
    heroImage: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    panelServiceSlugs: string[];
};

export type DroneDirectionTrustConfig = {
    heading: string;
    badges: string[];
    location: string;
};

export type DroneDirectionGoogleTrustConfig = {
    heading: string;
    rating: string;
    reviewsText: string;
    profileUrl: string;
    mapTitle: string;
    mapAddress: string;
    mapHint: string;
};

export type DroneDirectionRelatedLink = {
    href: string;
    title: string;
    description: string;
};

export type DroneDirectionSeoConfig = {
    offers?: {
        '@type': 'AggregateOffer';
        priceCurrency: string;
        lowPrice: string;
        highPrice: string;
        offerCount: string;
    };
    providerTelephone?: string;
    title: string;
    description: string;
    schemaServiceName: string;
    schemaServiceType: string;
    areaServed: Array<string | { '@type': string; name: string }>;
};

export type DroneDirectionPageConfig = {
    path: string;
    hero: DroneDirectionHeroConfig;
    trust: DroneDirectionTrustConfig;
    googleTrust: DroneDirectionGoogleTrustConfig;
    relatedLinks: DroneDirectionRelatedLink[];
    seo: DroneDirectionSeoConfig;
};

const { droneService, tours360 } = gazetaDetailRoutes;

export const droneDirectionPages: Record<'droneService' | 'realEstateService', DroneDirectionPageConfig> = {
    droneService: {
        path: '/drone-service',
        hero: {
            eyebrow: 'С ВОЗДУХА — ЧЕСТНО',
            h1: 'УСЛУГИ АЭРОСЪЁМКИ',
            intro: 'Комплексная аэросъёмка для девелоперов, риелторов, отелей и брендов. Работаем по всей Грузии: Тбилиси, Батуми и регионы.',
            heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1800&q=80',
            primaryCtaLabel: 'Обсудить съёмку',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'Смотреть услуги',
            secondaryCtaHref: '#services',
            panelServiceSlugs: [
                'nedvizhimost',
                'monitoring-stroiki',
                'fpv-semka',
                'oteli-kurorty',
                'restorany',
                'turizm',
                'meropriyatiya',
                'inspekciya-obektov',
                'kontrol-territorii',
                'interiery-sklady',
                'sport-kompleksy',
                'reklama-brand-video',
                'aerosyemka-dlya-avto-i-avtosalonov',
                'agro-i-vinodelie',
                'zemelnye-uchastki',
                'inspekciya-krysh',
                'inspekciya-fasadov',
                'inspekciya-solnechnyh-paneley',
                'regulyarnye-aerootchety',
            ],
        },
        trust: {
            heading: 'Нам доверяют',
            badges: ['Застройщики', 'Риелторы', 'Отели', 'Девелоперы', 'Инвесторы', 'Бренды'],
            location: 'Тбилиси · Батуми · Грузия',
        },
        googleTrust: {
            heading: 'Репутация в Google',
            rating: '4.9',
            reviewsText: '50+ отзывов',
            profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
            mapTitle: 'Breus Media',
            mapAddress: 'Tbilisi, Georgia',
            mapHint: 'Рейтинг и отзывы подтягиваются из профиля Breus Media в Google.',
        },
        relatedLinks: [
            {
                title: '360° виртуальные туры',
                href: '/360-tours-service',
                description: 'Интерактивные панорамы для сайта, Booking и удалённых показов.',
            },
            {
                title: 'Reels и короткое видео',
                href: '/reels-service',
                description: 'Короткие ролики для Instagram, TikTok и Shorts — под алгоритмы платформ.',
            },
            {
                title: 'AI-визуализация',
                href: '/ai-visualization-service',
                description: 'Рендеры, визуализации и AI-контент для маркетинга и продаж.',
            },
            {
                title: 'Контент для недвижимости',
                href: '/real-estate-service',
                description: 'Видео, дрон, 360°, Reels и AI staging для продажи и аренды объектов.',
            },
            {
                title: 'Контент для отелей',
                href: '/hotels-service',
                description: 'Видеотуры, aerial, 360° туры и Reels для отелей и апартаментов.',
            },
            {
                title: 'Контент для ресторанов',
                href: '/restaurants-service',
                description: 'Съёмка блюд, интерьера, Reels, 360° и визуальная упаковка меню.',
            },
            {
                title: 'Контент для туризма',
                href: '/tourism-service',
                description: 'Маршруты, экскурсии, локации и travel-проекты для сайта и соцсетей.',
            },
            {
                title: 'Контент для клиник',
                href: '/clinics-service',
                description: 'Аккуратная визуальная упаковка клиник, кабинетов, врачей и услуг.',
            },
            {
                title: 'Контент для автобизнеса',
                href: '/auto-service',
                description: 'Видео, дрон и Reels для автосалонов, детейлинга и автообъявлений.',
            },
        ],
        seo: {
            title: 'Аэросъёмка в Тбилиси и Батуми | Дрон-услуги — Breus Media',
            description: 'Аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм и события. 4K, FPV, выезды по всей стране. От 250 ₾.',
            schemaServiceName: 'Аэросъёмка в Грузии',
            schemaServiceType: 'Drone video and photography service',
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'GEL',
                lowPrice: '250',
                highPrice: '2600',
                offerCount: '4',
            },
            providerTelephone: '+995501103183',
            areaServed: [
                { '@type': 'City', name: 'Тбилиси' },
                { '@type': 'City', name: 'Батуми' },
                { '@type': 'City', name: 'Кутаиси' },
            ],
        },
    },
    realEstateService: {
        path: '/real-estate-service',
        hero: {
            eyebrow: 'НЕДВИЖИМОСТЬ · L2 HUB',
            h1: 'Визуальный контент для недвижимости в Тбилиси и Грузии',
            intro: 'Фото, видео, дрон, 360° туры, Reels и AI-визуализация для объектов недвижимости — под продажу, аренду, пресейл, удалённого покупателя и презентацию инвестору.',
            heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80',
            primaryCtaLabel: 'Подобрать формат',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'Посмотреть направления',
            secondaryCtaHref: '#services',
            panelServiceSlugs: ['aerosemka-nedvizhimosti', '360-tour-nedvizhimosti', 'reels-dlya-rieltorov'],
        },
        trust: {
            heading: 'Нам доверяют в недвижимости',
            badges: ['Риелторы', 'Агентства', 'Застройщики', 'Отделы продаж ЖК', 'Инвесторы', 'Управляющие компании'],
            location: 'Тбилиси · Грузия',
        },
        googleTrust: {
            heading: 'Репутация в Google',
            rating: '4.9',
            reviewsText: '50+ отзывов от клиентов',
            profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
            mapTitle: 'Breus Media · Real Estate',
            mapAddress: 'Tbilisi, Georgia',
            mapHint: 'Рейтинг и отзывы подтягиваются из профиля Breus Media в Google.',
        },
        relatedLinks: [
            {
                href: droneService,
                title: 'Аэросъёмка',
                description: 'Общий каталог форматов аэросъёмки для объектов.',
            },
            {
                href: tours360,
                title: '360° туры',
                description: 'Интерактивные туры для удалённых покупателей.',
            },
            {
                href: '/reels-service',
                title: 'Reels',
                description: 'Короткие вертикальные видео для объектов, агентств и личного бренда.',
            },
            {
                href: '/ai-visualization-service',
                title: 'AI-визуализация',
                description: 'AI staging, виртуальная меблировка и визуализация потенциала объекта.',
            },
            {
                href: '/hotels-service',
                title: 'Отели',
                description: 'Визуальная упаковка номеров, апартаментов и hospitality-объектов.',
            },
            {
                href: '/restaurants-service',
                title: 'Рестораны',
                description: 'Контент для пространства, меню, атмосферы и локального маркетинга.',
            },
            {
                href: '/tourism-service',
                title: 'Туризм',
                description: 'Видео, дрон и короткие форматы для маршрутов и travel-предложений.',
            },
        ],
        seo: {
            title: 'Визуальный контент для недвижимости в Тбилиси | Breus Media',
            description: 'Фото, видео, дрон, 360° туры, Reels и AI-визуализация для недвижимости в Тбилиси и Грузии. Упаковка объектов под продажу, аренду и пресейл.',
            schemaServiceName: 'Визуальный контент для недвижимости',
            schemaServiceType: 'Real estate media production service',
            areaServed: [
                { '@type': 'City', name: 'Tbilisi' },
                { '@type': 'Country', name: 'Georgia' },
            ],
        },
    },
};
