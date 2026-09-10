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
        id: 3,
        order: 1,
        slug: 'aero-rayon',
        title: 'Аэросъёмка недвижимости',
        category: 'РИЕЛТОРЫ · ЗАСТРОЙЩИКИ · ПРОДАЖИ',
        description: 'Высотная съемка жилых комплексов, вилл и участков с фиксацией инфраструктуры и видов. Незаменимый инструмент для презентации инвесторам и зарубежным покупателям.',
        price: 'МАСШТАБ · ИНФРАСТРУКТУРА · 4K',
        image: '/media/drone-service/real-estate-1.png',
        primaryHref: '/drone-services/drone-real-estate',
        primaryCtaLabel: 'Открыть услугу',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 5,
        order: 2,
        slug: 'virtual-360',
        title: 'Виртуальный 360° тур',
        category: 'Риэлтор · Застройщик · Агент',
        description: 'Интерактивный тур с эффектом личного присутствия для удаленного показа объектов. Позволяет иностранным покупателям оценить планировку и отделку без перелета.',
        price: 'УДАЛЕННЫЙ ПОКАЗ · ПЛАНИРОВКА · VR',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        primaryHref: '/360-tour-real-estate',
        primaryCtaLabel: 'Открыть услугу',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 2,
        order: 3,
        slug: 'prezentaciya-zhk',
        title: 'Презентационное видео ЖК',
        category: 'Продажи · Застройщики · Доверие',
        description: 'Кинематографичный ролик о философии проекта, архитектурных решениях и благоустройстве. Усиливает бренд девелопера и стимулирует продажи на этапе котлована.',
        price: 'БРЕНД ДЕВЕЛОПЕРА · ДЕТАЛИ · ПРОДАЖИ',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 8,
        order: 4,
        slug: 'reels-rieltor',
        title: 'Reels для риелтора',
        category: 'Instagram · TikTok · Shorts',
        description: 'Короткие вертикальные обзоры объектов с акцентом на планировку, свет и ключевые преимущества. Приводят целевые заявки из социальных сетей уже в первые сутки.',
        price: 'ОБЗОР ЗА 60 СЕК · ЗАЯВКИ · ОХВАТ',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        primaryHref: '/reels-promo/reels-realtor',
        primaryCtaLabel: 'Открыть услугу',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 6,
        order: 5,
        slug: 'monitoring-stroyki',
        title: 'Мониторинг стройки',
        category: 'Отчеты · Этапы · Контроль работ',
        description: 'Регулярная фиксация этапов строительства с постоянных ракурсов и высот. Формирует открытую отчетность для инвесторов, дольщиков и банковского контроля.',
        price: 'GPS-ПРИВЯЗКА · ОТЧЕТЫ · ДИНАМИКА',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 1,
        order: 6,
        slug: 'prodazha-kvartir',
        title: 'Продажа квартир',
        category: 'Риелторы · Агентства · Собственники',
        description: 'Аэрофото и видео для объявлений, чтобы объект выделялся в листингах и быстрее выходил на показы.',
        price: '4K · Фото + Видео · от 300 ₾',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 4,
        order: 7,
        slug: 'videotur-obekta',
        title: 'Видеотур объекта',
        category: 'Квартира · Дом · Показ',
        description: 'Покупатель хочет понять объект до поездки, а не после личного осмотра. Формат показывает метраж, свет и вид из окна в структурированном проходе, который удобно использовать на сайте, в листинге и в соцсетях.',
        price: 'Метраж · Планировка · Вид',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
    {
        id: 7,
        order: 8,
        slug: 'reklama-zhk',
        title: 'Рекламный ролик для ЖК',
        category: 'Сайт · Соцсети · Бронирование',
        description: 'Короткий ролик создан для digital-рекламы, чтобы зацепить внимание и привести человека в отдел продаж. Формат работает для Reels, Stories, YouTube и рекламных кампаний.',
        price: 'Лиды · Трафик · Запуск',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        secondaryHref: '#contact',
        secondaryCtaLabel: 'Обсудить задачу',
    },
];
