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
    title: string;
    description: string;
    schemaServiceName: string;
    schemaServiceType: string;
    areaServed: string[];
};

export type DroneDirectionPageConfig = {
    path: string;
    hero: DroneDirectionHeroConfig;
    trust: DroneDirectionTrustConfig;
    googleTrust: DroneDirectionGoogleTrustConfig;
    relatedLinks: DroneDirectionRelatedLink[];
    seo: DroneDirectionSeoConfig;
};

const { droneService, monitoringStroiki, realEstate, hotels, restaurants, tourism, tours360, promoVideo } =
    gazetaDetailRoutes;

export const droneDirectionPages: Record<'droneService' | 'realEstateService', DroneDirectionPageConfig> = {
    droneService: {
        path: '/drone-service',
        hero: {
            eyebrow: 'С ВОЗДУХА — ЧЕСТНО',
            h1: 'УСЛУГИ АЭРОСЪЁМКИ',
            intro: 'Комплексная аэросъёмка для девелоперов, риелторов, отелей и брендов. Работаем по всей Грузии: Тбилиси, Батуми и регионы.',
            heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1800&q=80',
            primaryCtaLabel: 'Смотреть направления',
            primaryCtaHref: '#services',
            secondaryCtaLabel: 'Заказать',
            secondaryCtaHref: '#contact',
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
            heading: 'Google Presence',
            rating: '4.9',
            reviewsText: '50+ отзывов',
            profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
            mapTitle: 'Breus Media',
            mapAddress: 'Tbilisi, Georgia',
            mapHint: 'Статический блок. Живые отзывы и карта будут подключены после клонирования первых страниц.',
        },
        relatedLinks: [
            {
                href: monitoringStroiki,
                title: 'Мониторинг стройки',
                description: 'Регулярные облёты и отчётность по этапам.',
            },
            {
                href: realEstate,
                title: 'Недвижимость',
                description: 'Контент для продаж и презентации объектов.',
            },
            {
                href: hotels,
                title: 'Отели и курорты',
                description: 'Визуал для Booking, сайта и соцсетей.',
            },
            {
                href: restaurants,
                title: 'Рестораны',
                description: 'Атмосферный контент и внешняя локация.',
            },
            {
                href: tourism,
                title: 'Туризм',
                description: 'Cinematic-съёмка маршрутов и локаций.',
            },
        ],
        seo: {
            title: 'Аэросъёмка в Тбилиси и Батуми | Дрон-услуги — Breus Media',
            description: 'Профессиональная аэросъёмка в Грузии: недвижимость, стройка, отели, рестораны, туризм и события. 4K, быстрые сроки, выезды по всей стране.',
            schemaServiceName: 'Аэросъёмка в Грузии',
            schemaServiceType: 'Drone video and photography service',
            areaServed: ['Tbilisi', 'Batumi', 'Georgia'],
        },
    },
    realEstateService: {
        path: '/real-estate-service',
        hero: {
            eyebrow: 'НЕДВИЖИМОСТЬ — ЧЕТКО И УБЕДИТЕЛЬНО',
            h1: 'ВИЗУАЛ ДЛЯ НЕДВИЖИМОСТИ',
            intro: 'Видео, аэросъёмка и 360-форматы для риелторов и девелоперов. Помогаем быстрее выводить объекты на показы в Тбилиси, Батуми и регионах.',
            heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80',
            primaryCtaLabel: 'Смотреть направления',
            primaryCtaHref: '#services',
            secondaryCtaLabel: 'Заказать',
            secondaryCtaHref: '#contact',
            panelServiceSlugs: ['prodazha-kvartir', 'prezentaciya-zhk', 'monitoring-stroyki'],
        },
        trust: {
            heading: 'Нам доверяют в недвижимости',
            badges: ['Риелторы', 'Агентства', 'Застройщики', 'Отделы продаж ЖК', 'Инвесторы', 'Управляющие компании'],
            location: 'Тбилиси · Батуми · Регионы Грузии',
        },
        googleTrust: {
            heading: 'Google Presence',
            rating: '4.9',
            reviewsText: '50+ отзывов от клиентов',
            profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
            mapTitle: 'Breus Media · Real Estate',
            mapAddress: 'Tbilisi & Batumi, Georgia',
            mapHint: 'Блок сохранен в шаблонной структуре L2. Подключение live-карты и отзывов выполняется отдельным этапом.',
        },
        relatedLinks: [
            {
                href: monitoringStroiki,
                title: 'Мониторинг стройки',
                description: 'Регулярные облёты и контроль этапов строительства.',
            },
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
                href: promoVideo,
                title: 'Промо видео',
                description: 'Ролики для рекламы и запуска продаж.',
            },
            {
                href: realEstate,
                title: 'Недвижимость (категория)',
                description: 'Категорийная страница направления в Gazeta.',
            },
        ],
        seo: {
            title: 'Контент для недвижимости в Тбилиси и Батуми | Real Estate Service — Breus Media',
            description: 'Профессиональный контент для недвижимости: видео, аэросъёмка, 360° туры и мониторинг стройки. Форматы для риелторов, застройщиков и отделов продаж.',
            schemaServiceName: 'Real Estate Content Service',
            schemaServiceType: 'Real estate media production service',
            areaServed: ['Tbilisi', 'Batumi', 'Georgia'],
        },
    },
};
