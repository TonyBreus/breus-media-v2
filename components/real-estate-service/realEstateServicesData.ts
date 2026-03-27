export type RealEstateServiceItem = {
    id: number;
    order: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
    primaryHref?: string;
    primaryCtaLabel?: string;
    secondaryHref?: string;
    secondaryCtaLabel?: string;
    tag?: string;
    featured?: boolean;
};

export const realEstateServiceItems: RealEstateServiceItem[] = [
    {
        id: 1,
        order: 1,
        slug: 'prodazha-kvartir',
        title: 'Продажа квартир',
        category: 'Риелторы · Агентства · Собственники',
        description: 'Аэрофото и видео для объявлений, чтобы объект выделялся в листингах и быстрее выходил на показы.',
        price: '4K · Фото + Видео · от 300 ₾',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        primaryHref: '/reels-promo/reels-real-estate',
        secondaryHref: '#service-prodazha-kvartir',
        secondaryCtaLabel: 'На странице',
        tag: 'SALE',
    },
    {
        id: 2,
        order: 2,
        slug: 'prezentaciya-zhk',
        title: 'Презентация ЖК',
        category: 'Застройщики · Девелоперы · Инвесторы',
        description: 'Имиджевые ролики и обзорные пролеты для презентации комплекса, окружения и инфраструктуры.',
        price: 'Hero Video · Drone · от 550 ₾',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80',
        primaryHref: '/promo-video/promo-residential-complex',
        secondaryHref: '#service-prezentaciya-zhk',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 3,
        order: 3,
        slug: 'aero-rayon',
        title: 'Аэровид района',
        category: 'Локация · Инфраструктура · Транспорт',
        description: 'Показываем не только квартиру, но и контекст: парк, школы, дороги и доступность района.',
        price: '4K · GEO Context · от 350 ₾',
        image: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2?w=1200&q=80',
        primaryHref: '/drone-real-estate',
        secondaryHref: '#service-aero-rayon',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 4,
        order: 4,
        slug: 'videotur-obekta',
        title: 'Видеотур объекта',
        category: 'Квартиры · Дома · Коммерция',
        description: 'Маршрутная съемка интерьера и экстерьера в формате, который удобно использовать в рекламе и продаже.',
        price: 'Walkthrough · Монтаж · от 450 ₾',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
        primaryHref: '/promo-video/promo-real-estate',
        secondaryHref: '#service-videotur-obekta',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 5,
        order: 5,
        slug: 'virtual-360',
        title: 'Виртуальный 360° тур',
        category: 'Онлайн-показы · Сайт · Маркетплейсы',
        description: 'Интерактивный тур по объекту для удаленных покупателей и зарубежных инвесторов.',
        price: '360° · Embed · от 500 ₾',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        primaryHref: '/360-tour-real-estate',
        secondaryHref: '#service-virtual-360',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 6,
        order: 6,
        slug: 'monitoring-stroyki',
        title: 'Мониторинг стройки',
        category: 'Отчеты · Этапы · Контроль работ',
        description: 'Регулярные облеты с повторяемыми точками и отчетом по прогрессу для команды и инвесторов.',
        price: 'Еженедельно · GPS · от 700 ₾/мес',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
        primaryHref: '/drone-construction-monitoring',
        secondaryHref: '#service-monitoring-stroyki',
        secondaryCtaLabel: 'На странице',
        tag: 'HOT',
        featured: true,
    },
    {
        id: 7,
        order: 7,
        slug: 'reklama-zhk',
        title: 'Реклама ЖК',
        category: 'Launch · Performance · Sales',
        description: 'Короткие промо-ролики для запуска продаж, digital-кампаний и презентаций отдела продаж.',
        price: 'Ad Cut · 15-60 sec · от 600 ₾',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        primaryHref: '/reels-promo/promo-zhk-launch',
        secondaryHref: '#service-reklama-zhk',
        secondaryCtaLabel: 'На странице',
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
        secondaryHref: '#service-reels-rieltor',
        secondaryCtaLabel: 'На странице',
    },
];
