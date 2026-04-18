import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { HeroSlideshow } from '@/components/drone-restaurants/HeroSlideshow';
import { FormatExamplesSlideshow } from '@/components/drone-restaurants/FormatExamplesSlideshow';
import formatExampleOne from '@/services-images/drone-restaurants/final/4.png';
import formatExampleTwo from '@/services-images/drone-restaurants/final/2.png';
import formatExampleThree from '@/services-images/drone-restaurants/final/3.png';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

const problemCards: CardItem[] = [
    {
        title: '«У нас красивое место, но на фотографиях это не видно»',
        text: 'Дрон показывает масштаб, планировку и атмосферу — то, что одна фотография не передаёт.',
    },
    {
        title: '«Instagram не даёт броней — гости смотрят и не приходят»',
        text: 'Видео с движением помогает понять место за первые секунды — где вход, какой зал, есть ли терраса.',
    },
    {
        title: '«Переехали / сделали ремонт / открылись, но нового контента нет»',
        text: 'За один визит мы снимаем основной ролик для сайта, короткие видео для Instagram и обработанные фотографии.',
    },
    {
        title: '«Конкурент рядом выглядит лучше в Google, хотя наше место сильнее»',
        text: 'Добавьте видео в карточку Google Maps — она станет заметнее среди соседних ресторанов.',
    },
    {
        title: '«Есть терраса и вид, но гости узнают об этом только когда приходят»',
        text: 'Дрон показывает то, что невозможно сфотографировать изнутри: вид сверху, террасу, район и подход к входу.',
    },
    {
        title: '«Организуем мероприятия, но нет материала, чтобы показать площадку»',
        text: 'Одно видео заменяет десять фотографий в переписке. Менеджер просто отправляет ссылку.',
    },
];

const deliverablesDefault: string[] = [
    'Разрешение на полёт (GCAA) — оформляем сами',
    'Видеофайлы в 4K',
    'Передача через Google Drive или WeTransfer',
    'Выезд по Тбилиси включён',
];

const shootingZones: string[] = [
    'Фасад и вывеска',
    'Вход и маршрут подхода',
    'Терраса, двор, courtyard',
    'Rooftop-зона',
    'Обзор квартала / городской контекст',
    'FPV полёт сквозь пространство: детали интерьера в движении',
];

const optionalAddons: string[] = [
    'Монтаж основного ролика и коротких видео',
    'Обработанные фотографии',
    'Файлы разложены по папкам: сайт, соцсети, Google Maps',
    'Формат под задачу: горизонтальный, вертикальный или оба',
];

const formatExampleCards = [
    { image: formatExampleOne, alt: 'Ресторан с террасой на крыше в Тбилиси — аэросъёмка дроном, вид на улицу и вход' },
    { image: formatExampleTwo, alt: 'FPV-пролёт по интерьеру ресторана — съёмка дроном внутри зала' },
    { image: formatExampleThree, alt: 'Аэросъёмка ресторана в Тбилиси — кадр с дрона для сайта и соцсетей' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const whyUsCards: CardItem[] = [
    {
        title: 'Снимаем так, чтобы гость дошёл до брони столика',
        text: 'Человек в ленте за 3 секунды решает: идём сюда вечером или листаем дальше. Мы снимаем не ради красивого пролёта, а ради того, чтобы будущий гость понял: где находится ресторан, какая там атмосфера, терраса или зал, кухня, район вокруг.',
    },
    {
        title: 'Показываем ресторан как маршрут гостя',
        text: 'Снимаем так, как гость приходит в первый раз: улица и район → вход → зал или терраса → кухня или открытый мангал, если это часть концепции. Одно видео — и человек понимает, куда он придёт.',
    },
    {
        title: 'Кадры работают в Instagram, Wolt, Glovo и Google Maps',
        text: 'Из одной съёмки получаете Reels для соцсетей, вертикаль для сторис, горизонтальный ролик для сайта и карточки в Google Maps, статичные кадры для Wolt и Glovo. Ничего не переснимаем отдельно под каждую площадку.',
    },
    {
        title: 'Небольшая команда и быстрый контакт',
        text: 'Без лишних слоёв коммуникации: договорённости и правки проходят быстрее. Связаться можно напрямую — отвечаем в тот же день.',
    },
    {
        title: 'Локальный опыт Тбилиси',
        text: 'Знаем дворы Сололаки и Ваке, rooftop-концепции, узкие улицы старого города и где нельзя летать без согласования. На локации приезжаем подготовленными — не тратим ваше время на разведку.',
    },
    {
        title: 'Снимаем в рабочие часы ресторана',
        text: 'Договариваемся на время между сервисами или на момент, когда зал уже оформлен, но гостей ещё нет. Не мешаем работе кухни и не вытаскиваем персонал из смены.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение задачи',
        text: 'Узнаём, что нужно показать, под какие площадки и в какие сроки.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем маршрут, время съёмки и особенности локации. Для горных или нестандартных зон — проверяем разрешения заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем в согласованное время: снимаем снаружи, нужные дубли, пролёт камерой по залу — если пространство позволяет.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Монтируем основной ролик, нарезаем короткие видео для соцсетей, обрабатываем фотографии.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём папку с готовыми файлами, разложенными по назначению.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
        subtitle: 'Аэросъёмка дроном с высоты',
        items: [
            'Видео в 4K + фото в высоком разрешении — готовы к использованию',
            '10+ фотографий с разных ракурсов',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Подходит, если вы сами работаете с визуалом — получаете и используете где нужно.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'FPV-дрон, пролёт камерой по залу',
        items: [
            'Видео в 4K — готово к использованию',
            'Несколько заходов — подбираем лучший маршрут',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'FPV — это съёмка в движении через пространство. Перед выездом согласуем маршрут и детали, чтобы результат попал точно в цель.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Съёмка с воздуха + пролёт внутри — зал, веранда, терраса — за один визит',
        items: [
            'Аэровидео и FPV-пролёт в 4K',
            '10+ фотографий в высоком разрешении с разных ракурсов',
            'Около 2,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Полная съёмка за один выезд — и фасад с воздуха, и пролёт по вашему пространству.',
        popular: true,
    },
    {
        title: 'Съёмка с готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Съёмка с воздуха + пролёт дроном внутри + монтаж и фото',
        items: [
            'Продуманный маршрут съёмки',
            'До 3 минут смонтированного видео — разбитого на несколько роликов под сайт, Reels, Stories и TikTok',
            '20+ обработанных фотографий',
            'Видео для карточки в Google Maps',
            'Передача материала — от 48 часов (монтаж включён)',
        ],
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для ресторана',
        href: '/360-tour-restaurants',
        text: 'Интерактивная прогулка по залу — гость крутит камеру сам. Хорошо дополняет видео с дрона.',
    },
    {
        title: 'Аэросъёмка отелей',
        href: '/drone-hotels-tourism',
        text: 'Если ресторан часть отеля или курортного комплекса, снимаем всё в одном визите.',
    },
    {
        title: 'Reels и короткие видео для ресторанов',
        href: '/reels-promo/reels-restaurant',
        text: 'Дрон показывает ресторан сверху, а Reels — живую энергию внутри.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Кинематографичный пролёт камерой через пространство — зритель «проходит» через зал своими глазами.',
    },
];

const statsCards: StatCard[] = [
    {
        stat: '74%',
        label: 'выбирают заведение',
        description: 'гостей используют соцсети, чтобы решить, куда пойти поесть. Видео и визуал в профиле — ключевой аргумент при выборе.',
        source: 'Cropink Restaurant Social Media Report 2025',
        sourceUrl: 'https://cropink.com/restaurant-social-media-statistics',
    },
    {
        stat: '57%',
        label: 'бронируют через соцсети',
        description: 'диниров хотя бы раз совершали бронь столика через Instagram или Facebook. Наличие визуала в профиле напрямую связано с этим сценарием.',
        source: 'Cropink Restaurant Social Media Report 2025',
        sourceUrl: 'https://cropink.com/restaurant-social-media-statistics',
    },
    {
        stat: '×2',
        label: 'выше охват Reels',
        description: 'по сравнению со статичными фото у ресторанов в Instagram. Короткие видео — главный драйвер новых гостей.',
        source: 'Ion Hospitality Instagram Benchmark 2026',
        sourceUrl: 'https://www.ionhospitality.com/2026/04/14/restaurant-instagram-marketing-ideas-real-results/',
    },
    {
        stat: '×2.7',
        label: 'больше доверия',
        description: 'заведениям с полным профилем в Google Maps. Видеоконтент в карточке повышает вероятность выбора на 50%.',
        source: 'Google Maps listing guidance',
        sourceUrl: 'https://support.google.com/business/answer/6124108',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Что именно вы снимаете для ресторанов?',
        answer:
            'Снимаем экстерьер и интерьер, кухню, подачу блюд, бар, атмосферу, terrace / rooftop-зоны и общие кадры для рекламы, соцсетей и сайта.',
    },
    {
        question: 'Можно ли снять дрон, интерьер и короткие вертикальные ролики в одном проекте?',
        answer:
            'Да. При необходимости объединяем аэросъёмку, интерьерные кадры и короткие вертикальные видео для Reels, Stories и рекламных размещений в один съёмочный пакет.',
    },
    {
        question: 'Подходят ли кадры для Instagram, Wolt, Glovo, Google Maps и рекламы?',
        answer:
            'Да. Из одной съёмки делаем вертикальные Reels и Stories для Instagram и TikTok, горизонтальные ролики для сайта, видео для карточки в Google Maps, статичные кадры для Wolt, Glovo и рекламных кампаний. Без дополнительных выездов.',
    },
    {
        question: 'Чем дрон-съёмка отличается от обычного видео на камеру?',
        answer:
            'Дрон снимает с точек, недоступных для ручной камеры: сверху, в движении, с плавным облётом здания. FPV добавляет ощущение живого прохода через пространство.',
    },
    {
        question: 'Можно ли снимать внутри ресторана?',
        answer:
            'Да, для интерьеров используем FPV-камеру DJI Avata 2. Перед съёмкой оцениваем пространство и согласуем маршрут, чтобы результат получился точным.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer:
            'Обычно нет. Подбираем окно, которое минимально мешает работе: до открытия, в тихие часы или в согласованный слот.',
    },
    {
        question: 'Сколько стоит аэросъёмка ресторана в Тбилиси?',
        answer:
            'Аэросъёмка с высоты — 250 ₾. Пролёт FPV-дроном внутри — 350 ₾. Полная съёмка за один визит — 500 ₾. В этих пакетах вы получаете фото и видео в 4K. Съёмка с монтажом и роликами под соцсети — от 900 ₾. К любому пакету можно добавить монтаж Reels (+150 ₾), ролик для сайта (+150 ₾) или 360° панораму (+80 ₾).',
    },
    {
        question: 'Что входит в финальную выдачу файлов?',
        answer:
            'Основной ролик, короткие видео в вертикальном и горизонтальном формате, фотографии с цветокоррекцией — всё разложено по папкам: для сайта, соцсетей и Google.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка занимает от 1 до 3 часов в зависимости от задачи. Видеофайлы без монтажа — от 24 часов. Готовый контент с монтажом и обработкой — от 3 до 7 рабочих дней.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Работаем в соответствии с правилами Грузинского агентства гражданской авиации (GCAA). Анализ зоны и разрешительная подготовка — на нас.',
    },
    {
        question: 'Что делать, если в день съёмки плохая погода?',
        answer:
            'Следим за прогнозом заранее. При сильном ветре или осадках переносим съёмку на ближайший подходящий день без доплат.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Работаем по всей Грузии по договорённости. Стоимость выезда зависит от расстояния и логистики — уточняем на этапе брифа.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да, для постоянной или разовой работы мы заключаем договор на оказание услуг. В нём фиксируются основные условия сотрудничества, формат работы и порядок взаиморасчётов.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Ресторан высокой кухни',
        pain: 'Место выглядит обычно на фото, хотя вживую впечатляет.',
        solution: 'Дрон показывает масштаб зала, детали интерьера и атмосферу — то, что фото не передаёт.',
        deliverables: 'Основной ролик + Reels + фотографии для сайта.',
    },
    {
        title: 'Rooftop-бар или терраса с видом',
        pain: 'Главное преимущество — панорама, но с земли её не снять.',
        solution: 'Дрон снимает вид сверху и показывает террасу в контексте города или природы.',
        deliverables: 'Ролик-обзор + вертикальные видео + аэрофото.',
    },
    {
        title: 'Кафе или бар с необычным входом',
        pain: 'Гости не могут найти вход — теряются, уходят.',
        solution: 'Видео-ориентир: от улицы до двери, понятный маршрут за 15 секунд.',
        deliverables: 'Короткий навигационный ролик + Stories-версия.',
    },
    {
        title: 'Винный бар или ресторан в Кахетии',
        pain: 'Туристы выбирают по картинкам — а виноградников и вида на долину на фото не видно.',
        solution: 'Аэросъёмка территории, виноградников, панорамы — продаём направление, а не только меню.',
        deliverables: 'Кинематографичный ролик + серия для соцсетей.',
    },
    {
        title: 'Ресторан при отеле или курорте',
        pain: 'Нужен контент и для ресторана, и для отеля — но бюджет один.',
        solution: 'Снимаем комплекс целиком за один визит: ресторан + территорию + ключевые зоны отеля.',
        deliverables: 'Пакет материалов для обоих — из одной съёмки.',
    },
    {
        title: 'Площадка для мероприятий (свадьбы, корпоративы)',
        pain: 'Клиенты просят «показать зал» — а фотографии не передают масштаб.',
        solution: 'Видео-обзор всех зон: зал, терраса, вход, парковка. Менеджер отправляет ссылку вместо 20 фото.',
        deliverables: 'Презентационный ролик + фотопакет для переписки.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка ресторанов и HoReCa в Тбилиси',
    description:
        'Дрон-съёмка и FPV-видео для ресторанов, кафе, баров и hospitality-объектов в Тбилиси. Показываем фасад, вход, террасу, rooftop и интерьер. Готовые материалы под сайт, Instagram, Google Maps и рекламу.',
    provider: {
        '@id': 'https://breus.media/#organization',
    },
    areaServed: ['Tbilisi', 'Kakheti', 'Telavi', 'Sighnaghi', 'Mtskheta', 'Kutaisi', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '1300',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    category: 'Aerial Videography for Hospitality',
    url: 'https://breus.media/drone-services/drone-restaurants',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры, Reels и AI-визуализация для бизнеса.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://breus.media',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Дрон-услуги',
            item: 'https://breus.media/drone-services',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Аэросъёмка ресторанов',
            item: 'https://breus.media/drone-services/drone-restaurants',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Аэросъёмка ресторана в Тбилиси — дрон + FPV | Breus Media',
    description:
        'Аэросъёмка и FPV-съёмка ресторанов, кафе и баров в Тбилиси от 250 ₾. Съёмка снаружи, пролёт внутри и готовый контент под ключ для сайта, Reels и Google Maps.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-restaurants',
        languages: {
            ru: 'https://breus.media/drone-services/drone-restaurants',
            en: 'https://breus.media/drone-services/drone-restaurants/en',
        },
    },
    openGraph: {
        title: 'Аэросъёмка ресторана в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-съёмка ресторанов, кафе и баров в Тбилиси от 250 ₾. Снаружи, внутри и под ключ: материалы для сайта, Reels и Google Maps.',
        url: 'https://breus.media/drone-services/drone-restaurants',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
        images: [
            {
                url: 'https://breus.media/og/drone-restaurants.jpg',
                width: 1200,
                height: 630,
                alt: 'Аэросъёмка ресторана в Тбилиси — Breus Media',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Аэросъёмка ресторана в Тбилиси | Breus Media',
        description: 'Аэросъёмка и FPV-съёмка ресторанов, кафе и баров в Тбилиси от 250 ₾. Съёмка, монтаж и готовый контент для сайта, соцсетей и Google Maps.',
        images: ['https://breus.media/og/drone-restaurants.jpg'],
    },
};

export default function DroneRestaurantsPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaHref="#contact"
                ctaLabel="Обсудить задачу"
                singleTickerMode={true}
                languageLinks={{
                    RU: '/drone-services/drone-restaurants',
                    EN: '/drone-services/drone-restaurants/en',
                }}
                sectionLinks={[
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <section
                id="drone-restaurants-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-14 pt-40 md:pb-16 md:pt-48"
            >
                <HeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                        <div>
                            <h1 className="max-w-none text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка ресторана в Тбилиси
                            </h1>

                            <p className="mt-4 max-w-none text-[17px] leading-[1.4] text-white/85 md:text-[21px]">
                                В Тбилиси рестораны всё чаще конкурируют не только кухней — дворы, rooftop-террасы,
                                виды на город и сам маршрут гостя внутри заведения стали частью продукта.
                            </p>

                            <div className="mt-4 max-w-none text-[15px] leading-[1.34] text-white/74 md:text-[17px] lg:columns-2 lg:gap-8">
                                <p className="mb-3 break-inside-avoid">
                                    Фотографии и видео уже есть у всех, но они ограничены пространством внутри. А дрон
                                    меняет правила.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    Аэрофото и аэровидео с высоты показывают масштаб: террасу на крыше, двор с зеленью,
                                    расположение в квартале — гость понимает, куда он едет, ещё до бронирования.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    FPV-дрон идёт дальше — он пролетает сквозь арку, скользит над столами,
                                    приближается к подаче блюда и поднимается к панораме города за одно непрерывное
                                    движение. Несколько секунд — и человек видит ваше место так, как почувствует его
                                    вживую: пространство, атмосферу, свет, детали.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    Из одной съёмки вы получаете кадры для Instagram, TikTok, Reels, сайта, карточки в Google Maps и доставки на Wolt и Glovo — без повторных выездов и переделок под каждую площадку.
                                </p>

                                <p className="mb-0 break-inside-avoid text-white/84">
                                    Один визит в заведение — и у вас есть материал под все каналы. Снимаем в тихие часы, не мешая сервису и не вытягивая команду из смены.
                                </p>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Ваш ресторан глазами гостя, ещё до визита</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">от 24 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Экстерьер, интерьер, атмосфера — всё в 4K</li>
                                    <li>Снимаем и монтируем — остаётся только выложить</li>
                                    <li>Один выезд — и видео работает на вас годами</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            {/* VIDEO_SLOT — заменить на реальный embed когда появится footage */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Примеры аэросъёмки ресторанов и кафе в Тбилиси — снаружи и внутри.
                        </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                        <FormatExamplesSlideshow slidesOverride={formatExampleSlides} />
                    </div>
                </div>
            </section>

            {/* ── ЧТО ГОВОРЯТ ЦИФРЫ ──────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что говорят цифры</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Гость выбирает ресторан ещё до того, как откроет меню. Исследования показывают, насколько визуальный контент в соцсетях и Google влияет на это решение.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {statsCards.map((item) => (
                            <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-5xl font-bold tracking-tight text-[#FFD23F]">{item.stat}</p>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>
                                <a
                                    href={item.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center text-xs font-semibold text-white/50 transition-colors hover:text-[#FFD23F]"
                                >
                                    Источник: {item.source} →
                                </a>
                            </article>
                        ))}
                    </div>
                    <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/45">
                        Цифры приведены из открытых отраслевых отчётов. Конкретный эффект для вашего ресторана зависит от концепции, аудитории и каналов публикации.
                    </p>
                </div>
            </section>

            {/* ── ЧТО ОБЫЧНО ГОВОРЯТ ПЕРЕД СЪЁМКОЙ ─────────────────────────────────── */}
            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что обычно говорят перед съёмкой?</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ЧТО СНИМАЕМ И ЧТО ЭТО РЕШАЕТ ──────────────────────────── */}
            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что снимаем — и какую задачу это решает</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка ресторана — это не просто кадр сверху. Мы показываем место в том порядке, в
                            котором его видит гость: квартал → улица → фасад → вход → интерьер → атмосфера.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон фиксирует внешний контекст: как выглядит заведение с высоты, какая у него терраса,
                            двор или rooftop, как оно вписано в городскую среду. FPV-камера добавляет движение внутри:
                            проход через зал, связь зон, глубину интерьера.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон-видео не заменяет рекламу, но оно отвечает на главный вопрос нового гостя — «а что
                            там вообще?». Чем быстрее человек это понимает, тем быстрее он решается прийти.
                        </p>
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Гость, который ни разу не был, заранее понимает куда идёт.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Терраса, двор или rooftop перестают быть «тайным преимуществом».
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Сезонный контент готов к публикации без долгих согласований.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Ваша карточка в Google Maps получает видео — гости видят ресторан ещё до того, как позвонят.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78 md:col-span-2">
                                Менеджер по мероприятиям может отправить ссылку вместо набора отдельных фотографий.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ ──────────────────────────── */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            После съёмки вы получаете не просто набор файлов, а готовый пакет — разложенный по папкам и адаптированный под каждую площадку.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/58">
                            Если вам нужна не только съёмка с воздуха, а полноценный набор контента для заведения — эту съёмку можно дополнить другими форматами.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Что входит в каждый пакет</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDefault.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Зоны съёмки</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootingZones.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Дополнительно в пакете «С готовым результатом»</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {optionalAddons.map((item) => (
                                    <li key={item}>+ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
                        <div>
                            <h3 className="text-xl font-bold text-white">Как устроены файлы</h3>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {[
                                    { name: 'Сайт', desc: 'Основной ролик и фотографии для страниц сайта' },
                                    { name: 'Соцсети', desc: 'Вертикальные видео для Reels, Stories, TikTok' },
                                    { name: 'Google Maps', desc: 'Короткий ролик и фото для карточки заведения' },
                                    { name: 'Архив', desc: 'Все исходники — для будущего использования' },
                                ].map((folder) => (
                                    <div key={folder.name} className="rounded-[14px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            {folder.name}
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>Съёмка в 4K</li>
                                <li>Два формата: воздушная съёмка снаружи + пролёт камерой внутри</li>
                                <li>Цветокоррекция и стабилизация включены (в пакете с монтажом)</li>
                                <li>Форматы: MP4, JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                            </ul>
                            <p className="mt-4 text-xs leading-relaxed text-white/45">
                                Оборудование: DJI Air 3S, DJI Avata 2 FPV, Insta360 X5
                            </p>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Сроки: от 24 часов (съёмка без монтажа) до 7 рабочих дней (пакет с готовым результатом).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── ПРИМЕРЫ ПО ФОРМАТАМ ────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры по форматам</h2>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {formatExampleCards.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                <div className="relative aspect-video">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── МИД-КТА ──────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой формат подходит именно вашему заведению? Расскажите про место — скажем,
                            что имеет смысл снимать.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить задачу
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Посмотреть цены
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── КАК ПРОХОДИТ РАБОТА ──────────────────────────────────────────────── */}
            <ProcessNote text="Съёмка среднего ресторана — 1,5–3 часа. Подбираем время так, чтобы не мешать гостям и сервису." />

            <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ПАКЕТЫ И ЦЕНЫ ────────────────────────────────────────────────────── */}
            <section
                id="pricing"
                className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-24 lg:scroll-mt-24"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Цены фиксированные, в грузинских лари (₾). Без скрытых доплат. Выбирайте пакет под свою
                            задачу — от базовой съёмки до полного цикла.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                            Все фото и видео вы получаете в 4K — готовыми к использованию. К любому пакету можно
                            добавить монтаж под соцсети, сайт и Google Maps, музыкальное сопровождение, субтитры на
                            нужных языках и панорамы 360°.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-4">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-5 md:p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-2 text-xs text-white/64 md:text-sm">{card.subtitle}</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 md:mt-6 md:gap-3">
                                    <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{card.price}</p>
                                    {card.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Выгодно
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-relaxed text-white/72 md:mt-6 md:space-y-3 md:text-sm">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.note && <p className="mt-4 text-xs leading-relaxed text-white/58 md:mt-5 md:text-sm">{card.note}</p>}
                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-6 md:py-2.5 md:text-xs"
                                >
                                    Обсудить этот пакет →
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <h3 className="text-xl font-bold text-white">Дополнительно по задаче</h3>
                        <p className="mt-3 leading-relaxed text-white/70">
                            Из одной съёмки можно собрать не только основной материал, но и дополнительные форматы под сайт, соцсети, Google Maps и продажи.
                        </p>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── СРАВНЕНИЕ ПАКЕТОВ — ТАБЛИЦА ────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Сравнение пакетов</h2>
                    </div>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[640px] text-sm text-white/80">
                            <thead>
                                <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                    <th className="py-4 pr-4">Параметр</th>
                                    <th className="py-4 px-4">Полёт снаружи</th>
                                    <th className="py-4 px-4">FPV внутри</th>
                                    <th className="py-4 px-4 text-[#FFD23F]">Полная съёмка</th>
                                    <th className="py-4 pl-4">Готовый результат</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2a2a2a]">
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Цена</td>
                                    <td className="py-3 px-4">250 ₾</td>
                                    <td className="py-3 px-4">350 ₾</td>
                                    <td className="py-3 px-4 font-semibold text-[#FFD23F]">500 ₾</td>
                                    <td className="py-3 pl-4">от 900 ₾</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Аэровидео 4K</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">FPV-пролёт внутри</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Фото</td>
                                    <td className="py-3 px-4">10+</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">10+</td>
                                    <td className="py-3 pl-4">20+</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Монтаж</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Ролики под соцсети</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Видео для Google Maps</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Время на объекте</td>
                                    <td className="py-3 px-4">~1,5 ч</td>
                                    <td className="py-3 px-4">~1,5 ч</td>
                                    <td className="py-3 px-4">~2,5 ч</td>
                                    <td className="py-3 pl-4">по задаче</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Передача файлов</td>
                                    <td className="py-3 px-4">от 24 ч</td>
                                    <td className="py-3 px-4">от 24 ч</td>
                                    <td className="py-3 px-4">от 24 ч</td>
                                    <td className="py-3 pl-4">от 48 ч</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── ПОМОЩНИК ВЫБОРА ПАКЕТА ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl">
                        <h3 className="text-xl font-bold md:text-2xl">Как выбрать пакет</h3>
                        <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/76">
                            <p>
                                → Нужна только съёмка фасада и подхода к ресторану —{' '}
                                <strong className="text-white">Полёт снаружи, 250 ₾</strong>
                            </p>
                            <p>
                                → Нужно показать зал, бар и движение внутри пространства —{' '}
                                <strong className="text-white">Пролёт внутри (FPV), 350 ₾</strong>
                            </p>
                            <p>
                                → Нужны внешний вид и движение внутри за один визит —{' '}
                                <strong className="text-white">Полная съёмка, 500 ₾</strong>
                            </p>
                            <p>
                                → Нужны готовые ролики, фото, видео для Instagram, Google Maps и сайта —{' '}
                                <strong className="text-white">Готовый результат, от 900 ₾</strong>
                            </p>
                            <p className="pt-2 text-white/55">
                                Не уверены? Опишите ресторан, и мы подберём вариант под задачу и бюджет.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <FaqSection id="faq" items={faqItems} title="Частые вопросы" />

            {/* ── КАК МЫ ПОДХОДИМ К СЪЁМКЕ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как мы подходим к съёмке</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ТИПЫ ЗАВЕДЕНИЙ И СЦЕНАРИИ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типы заведений и сценарии</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Под каждый тип ресторана собираем свой набор кадров с понятной задачей.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Задача:</span> {card.pain}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Решение:</span> {card.solution}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Что получите:</span> {card.deliverables}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── МИД-КТА 2 ────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нашли свой формат заведения в списке? Расскажите про ресторан — предложим пакет, маршрут съёмки и удобное время.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить задачу
                            </a>
                            <a
                                href="https://wa.me/995574619393"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Написать в WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ГРУЗИЯ + ПРАВИЛА ПОЛЁТОВ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                            <h2 className="text-2xl font-bold md:text-3xl">Почему в Тбилиси визуал работает особенно сильно</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Многие заведения Тбилиси спрятаны во дворах, на этажах, за неприметными дверями — это атмосферно, но гостю сложно понять, куда идти. Дрон закрывает этот пробел: показывает квартал, вход и пространство сверху.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Rooftop-концепции в центре, летние террасы на берегу Куры, внутренние дворы Сололаки и Ваке — все эти детали считываются только с воздуха.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для ресторанов со скрытым входом или нестандартной локацией аэросъёмка работает как навигация — гость заранее видит маршрут.
                            </p>
                        </div>

                        <div className="rounded-[20px] border border-[#2a2a2a] bg-[#111111] p-8">
                            <h2 className="text-2xl font-bold md:text-3xl">Как мы работаем с правилами полётов</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован. Максимальная высота — 120 м.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для съёмок в центре, рядом с посольствами или в чувствительных зонах проверяем ограничения заранее и предлагаем сценарий, который даёт нужный кадр без рисков.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Съёмка с гостями: работаем в тихие часы, фокусируемся на пространстве — без нарушения приватности.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── СМЕЖНЫЕ УСЛУГИ ───────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Если вам нужна не только съёмка с воздуха, а полноценный набор контента для заведения — эту съёмку можно дополнить другими форматами.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ГДЕ МЫ СНИМАЕМ — РАЙОНЫ ТБИЛИСИ ──────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где мы снимаем в Тбилиси</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Работаем по всему городу. Знаем особенности каждого района — свет, застройку, ограничения полётов и лучшие точки для съёмки.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {[
                            'Старый Тбилиси',
                            'Мтацминда',
                            'Вера',
                            'Сабуртало',
                            'Ваке',
                            'Диди Дигоми',
                            'Авлабари',
                            'Чугурети',
                            'Марджанишвили',
                            'Орбелиани',
                            'Лиси',
                            'Тбилиси за пределами центра',
                        ].map((district) => (
                            <div key={district} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm text-white/76">
                                {district}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если вы дочитали до этого места, значит вопрос с визуальным контентом для ресторана актуален. Следующий шаг — расскажите о заведении, и мы предложим конкретный формат.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить задачу
                        </a>
                    </div>
                </div>
            </section>

            {/* ── КОНТАКТ ──────────────────────────────────────────────────────────── */}
            <DroneContactStitch preselectedServices={['drone']} />

            <DroneStickyCta />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
