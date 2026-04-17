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
        title: 'Презентационное видео ЖК',
        category: 'Продажи · Застройщики · Доверие',
        description: 'Покажите масштаб, локацию и философию проекта. Видео помогает отделу продаж, девелоперам и инвесторам быстро понять, что строится, где находится объект и почему он заслуживает внимания.',
        price: 'Масштаб · Локация · Инфраструктура',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80',
        primaryHref: '/promo-video/promo-residential-complex',
        secondaryHref: '#service-prezentaciya-zhk',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 3,
        order: 3,
        slug: 'aero-rayon',
        title: 'Аэросъёмка недвижимости',
        category: 'РИЕЛТОРЫ · ЗАСТРОЙЩИКИ · ПРОДАЖИ',
        description: 'Аэрофото и видео для карточек объектов и инвесторов. 94% больше просмотров получают объявления с аэрофото — по данным HomeJab.',
        price: '4K · MYHOME.GE · SS.GE',
        image: '/media/drone-service/real-estate-1.png',
        primaryHref: '/drone-real-estate',
        secondaryHref: '#service-aero-rayon',
        secondaryCtaLabel: 'На странице',
    },
    {
        id: 4,
        order: 4,
        slug: 'videotur-obekta',
        title: 'Видеотур объекта',
        category: 'Квартира · Дом · Показ',
        description: 'Покупатель хочет понять объект до поездки, а не после личного осмотра. Формат показывает метраж, свет и вид из окна в структурированном проходе, который удобно использовать на сайте, в листинге и в соцсетях.',
        price: 'Метраж · Планировка · Вид',
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
        category: 'Риэлтор · Застройщик · Агент',
        description: 'Покажите объект инвестору до выезда. Виртуальный тур заменяет первичный осмотр и приводит на встречу уже заинтересованного покупателя.',
        price: 'Показ · Планировка · Конверсия',
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
        title: 'Рекламный ролик для ЖК',
        category: 'Сайт · Соцсети · Бронирование',
        description: 'Короткий ролик создан для digital-рекламы, чтобы зацепить внимание и привести человека в отдел продаж. Формат работает для Reels, Stories, YouTube и рекламных кампаний.',
        price: 'Лиды · Трафик · Запуск',
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
