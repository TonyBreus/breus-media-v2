export type Tours360ServiceItem = {
    id: number;
    order: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    specs?: string;
    image: string;
    primaryHref: string;
    primaryCtaLabel?: string;
    secondaryHref?: string;
    secondaryCtaLabel?: string;
    tag?: string;
    featured?: boolean;
};

export const TOURS360_OPEN_SERVICE_SLUGS = ['nedvizhimost', 'oteli', 'restorany'] as const;

export const tours360ServiceItems: Tours360ServiceItem[] = [
    {
        id: 1,
        order: 1,
        slug: 'nedvizhimost',
        title: 'Недвижимость',
        category: 'РИЕЛТОРЫ · ЗАСТРОЙЩИКИ · ПРОДАЖИ',
        description: '360° виртуальные туры для квартир и домов. Покупатель может "походить" по объекту удаленно.',
        price: 'от 200 ₾',
        specs: 'MYHOME.GE · SS.GE · GOOGLE MAPS',
        image: '/media/drone-service/real-estate-1.png',
        primaryHref: '/360-tour-real-estate',
        secondaryHref: '#service-nedvizhimost',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 2,
        order: 2,
        slug: 'oteli',
        title: 'Отели и курорты',
        category: 'ОТЕЛИ · ХОСТЕЛЫ · ГЛЭМПИНГИ',
        description: 'Панорамы номеров, лобби и территории. Гости понимают уровень комфорта до бронирования.',
        price: 'от 300 ₾',
        specs: 'BOOKING · AIRBNB · GOOGLE STREET VIEW',
        image: '/media/drone-service/hotels-resorts-5.png',
        primaryHref: '/360-tour-hotels',
        secondaryHref: '#service-oteli',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 3,
        order: 3,
        slug: 'restorany',
        title: 'Рестораны и бары',
        category: 'РЕСТОРАНЫ · КАФЕ · БАРЫ',
        description: 'Виртуальный тур по залам и террасам. Клиент выбирает любимый столик дистанционно.',
        price: 'от 250 ₾',
        specs: 'GOOGLE MAPS · TRIPADVISOR',
        image: '/media/drone-service/restaurants-3.png',
        primaryHref: '/360-tour-restaurants',
        secondaryHref: '#service-restorany',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 4,
        order: 4,
        slug: 'kliniki',
        title: 'Клиники',
        category: 'МЕДЦЕНТРЫ · СТОМАТОЛОГИИ · САЛОНЫ',
        description: 'Демонстрация чистоты, оборудования и кабинетов для повышения доверия пациентов.',
        price: 'от 300 ₾',
        specs: 'GOOGLE STREET VIEW · WEB',
        image: '/media/gazeta/360-tour-2.png',
        primaryHref: '/360-tour-clinics',
        secondaryHref: '#service-kliniki',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 5,
        order: 5,
        slug: 'avtosalony',
        title: 'Автосалоны',
        category: 'ШОУРУМЫ · ДЕТЕЙЛИНГ · СЕРВИС',
        description: '360° интерьеры автомобилей и панорамы выставочных залов.',
        price: 'от 250 ₾',
        specs: 'GOOGLE MAPS · MYAUTO.GE',
        image: '/media/drone-service/auto-showroom-1.png',
        primaryHref: '/360-tour-auto',
        secondaryHref: '#service-avtosalony',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 6,
        order: 6,
        slug: 'turizm',
        title: 'Туризм',
        category: 'ЛОКАЦИИ · МАРШРУТЫ · МУЗЕИ',
        description: 'Панорамы туристических локаций, музеев и достопримечательностей.',
        price: 'от 400 ₾',
        specs: 'GOOGLE MAPS · WEB',
        image: '/media/drone-service/tourism-6.png',
        primaryHref: '/360-tour-tourism',
        secondaryHref: '#service-turizm',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 7,
        order: 7,
        slug: 'kommercia',
        title: 'Коммерческая недвижимость',
        category: 'ОФИСЫ · СКЛАДЫ · ЦЕХА',
        description: 'Детальные виртуальные туры для инвесторов и арендаторов.',
        price: 'от 300 ₾',
        specs: 'SS.GE · WEB',
        image: '/media/drone-service/fpv-2.png',
        primaryHref: '/360-tour-commercial-real-estate',
        secondaryHref: '#service-kommercia',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 8,
        order: 8,
        slug: 'biznes',
        title: 'Бизнес и магазины',
        category: 'МАГАЗИНЫ · СПОРТЗАЛЫ · КОВОРКИНГИ',
        description: 'Презентация пространства для привлечения новых посетителей с Google Карт.',
        price: 'от 200 ₾',
        specs: 'GOOGLE MAPS · WEB',
        image: '/media/gazeta/360-tour-1.png',
        primaryHref: '/360-tour-business',
        secondaryHref: '#service-biznes',
        secondaryCtaLabel: 'На странице',
    }
];
