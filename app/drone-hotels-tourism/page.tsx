import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { FormatExamplesSlideshow } from '@/components/drone-hotels-tourism/FormatExamplesSlideshow';
import formatExampleOne from '@/services-images/drone-hotels-tourism/final/1.png';
import formatExampleTwo from '@/services-images/drone-hotels-tourism/final/2.png';
import formatExampleThree from '@/services-images/drone-hotels-tourism/final/3.png';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';
import HeroBackgroundMountains from '@/components/drone-hotels-tourism/HeroBackgroundMountains';

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

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
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

type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

const problemCards: CardItem[] = [
    {
        title: '«На Booking выглядим как все — хорошие фото, но у конкурентов тоже»',
        text: 'Видео с дрона показывает территорию, расположение и атмосферу — то, что стандартными фото не передать.',
    },
    {
        title: '«Главная ценность отеля — природа вокруг, но с земли это не снять»',
        text: 'Дрон показывает горы, море, виноградники — весь контекст локации, который продаёт направление.',
    },
    {
        title: '«Нужен контент для сайта, Booking и Instagram — одна съёмка закрывает всё»',
        text: 'Один выезд — основной ролик, короткие видео для соцсетей и обработанные фотографии под каждую площадку.',
    },
    {
        title: '«Хочу показать бассейн, террасу, вид — но с земли ракурс не тот»',
        text: 'Дрон снимает сверху и в движении: зоны отдыха, ландшафт, территорию — то, что гость хочет увидеть до бронирования.',
    },
    {
        title: '«Не понимаю, что заказать и сколько стоит»',
        text: 'На странице — три пакета с ценами, составом и сроками. Расчёт под ваш объект — бесплатно.',
    },
    {
        title: '«Думаю об этом уже полгода, но всё никак не соберусь»',
        text: 'Стартуем с короткого брифа — за 15 минут. Подскажем, с какого формата начать, чтобы получить первый результат за один съёмочный день и без долгих согласований.',
    },
];

const deliverablesDefault: string[] = [
    'Видеофайлы в 4K — готовы к использованию',
    'Передача через Google Drive или WeTransfer',
    'Выезд по Тбилиси включён',
    'Один раунд правок по видео в пакетах с монтажом',
];

const deliverablesPremium: string[] = [
    'Монтаж основного ролика и коротких видео',
    'Обработанные фотографии',
    'Файлы разложены по папкам: сайт, соцсети, Google Maps',
    'Формат под задачу: горизонтальный, вертикальный или оба',
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
        subtitle: 'FPV-дрон, пролёт камерой по отелю',
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
        subtitle: 'Съёмка с воздуха + пролёт внутри — территория, ресепшен, номер — за один визит',
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
        note: '',
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение задачи',
        text: 'Рассказываете о типе объекта, целях и зонах съёмки. Предлагаем формат и пакет под задачу. Расчёт — в течение дня.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем маршрут, время съёмки и особенности локации. Для горных или нестандартных зон — проверяем разрешения заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Снимаем снаружи с воздуха + пролёт камерой внутри по согласованному плану, если это уместно. 2–4 часа на объекте. Работа отеля не останавливается.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Монтируем основной ролик, нарезаем короткие видео для соцсетей, обрабатываем фотографии.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Папка с готовыми файлами: для сайта, площадок бронирования, Reels, Google Maps. Один раунд правок включён.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Городской бутик-отель (Тбилиси)',
        pain: 'Теряемся среди похожих объектов на Booking.',
        solution: 'Аэрокадры района, расположение в городе, вид на исторические кварталы.',
        deliverables: 'Основной ролик + видео для соцсетей + фотографии для Booking.',
    },
    {
        title: 'Винный отель в Кахетии',
        pain: 'Главная ценность — виноградники, погреб и панорама долины, но с земли это не снять.',
        solution: 'Аэровидео виноградников, терминалов виноделия, подхода к отелю и видов на Алазанскую долину.',
        deliverables: 'Кинематографичный ролик + 3–5 видео для соцсетей + 30+ фотографий.',
    },
    {
        title: 'Горный отель (Казбеги, Гудаури, Бакуриани)',
        pain: 'Пейзаж вокруг — главный продукт, его нельзя показать с земли.',
        solution: 'Съёмка горного контекста, путь к отелю, виды из номеров сверху.',
        deliverables: 'Кинематографичный ролик + фотографии.',
    },
    {
        title: 'Апарт-отель и Airbnb (несколько объектов)',
        pain: 'Нужен контент для каждого объекта, но бюджет ограничен.',
        solution: 'Пакет на несколько объектов за один выезд, быстрая доставка.',
        deliverables: 'Фотографии с воздуха + короткий ролик.',
    },
    {
        title: 'Тревел-проекты и туроператоры',
        pain: 'Нужен destination-ролик, который продаёт Грузию как направление путешествия.',
        solution: 'Аэросъёмка локаций, пейзажей, культурных объектов и природных зон.',
        deliverables: 'Основной ролик + серия видео для соцсетей.',
    },
    {
        title: 'Международная отельная сеть',
        pain: 'Нужен локальный оператор с правильным workflow и коммуникацией на EN.',
        solution: 'Продакшн-пакет, подробная смета по пунктам, оригинальные 4K видеоматериалы, работа в рамках GCAA.',
        deliverables: 'По списку кадров, форматы под стандарты сети.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для отеля',
        href: '/360-tour-hotels',
        text: 'Интерактивные 8K туры для сайта и площадок бронирования (Booking, Airbnb), чтобы гость мог детально изучить пространство до бронирования.',
    },
    {
        title: 'Reels для отеля и курорта',
        href: '/reels-promo/reels-hotel',
        text: 'Динамичные вертикальные ролики номеров, спа, террас и сервиса для охватов в Instagram и прямых бронирований.',
    },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const statsCards: StatCard[] = [
    {
        stat: '+60%',
        label: 'больше бронирований',
        description: 'получают отели с качественными профессиональными фотографиями по сравнению с теми, кто обходится типовыми кадрами. Исследование Expedia по hospitality-листингам.',
        source: 'Expedia study, via Paul Reiffer (hospitality photography)',
        sourceUrl: 'https://www.paulreiffer.com/2025/05/does-great-photography-really-drive-luxury-hotel-bookings/',
    },
    {
        stat: '×2',
        label: 'выше вовлечённость',
        description: 'у отельных листингов с 20+ профессиональными изображениями — по сравнению с листингами, где мало фото или они низкого качества. На Airbnb-объектах с профессиональной съёмкой рост бронирований доходит до +33%.',
        source: 'Expedia study, via Paul Reiffer (hospitality photography)',
        sourceUrl: 'https://www.paulreiffer.com/2025/05/does-great-photography-really-drive-luxury-hotel-bookings/',
    },
    {
        stat: '×2.7',
        label: 'больше доверия',
        description: 'бизнесам с полностью заполненной карточкой в Google Maps. Google официально сообщает: пользователи в среднем в 2.7 раза чаще считают такие бизнесы достойными доверия, и на 70% чаще собираются их посетить.',
        source: 'Google, official Google Business statistics',
        sourceUrl: 'https://searchendurance.com/google-business-profile-statistics/',
    },
    {
        stat: '1.5–2.5%',
        label: 'средняя конверсия сайта',
        description: 'отельных сайтов, по данным Hotel Tech Report. Это значит: из 100 человек, попавших на страницу бронирования, в среднем 1-2 завершают резерв. Качественный визуал — один из главных факторов, двигающих эту цифру вверх.',
        source: 'Hotel Tech Report, via RMS Cloud',
        sourceUrl: 'https://www.rmscloud.com/blog/improve-your-hotel-booking-conversion-rate',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Что именно даёт аэросъёмка отелю?',
        answer:
            'Она показывает то, что стандартные фотографии объясняют хуже: территорию, расположение в городе или природе, вид из окна сверху, ключевые зоны — бассейн, rooftop, сад. Гость заранее понимает, куда едет.',
    },
    {
        question: 'Можно ли снимать отель, когда в нём есть гости?',
        answer:
            'Да, с оговорками. Для съёмки снаружи и с воздуха гости не мешают. Для FPV-пролётов внутри рекомендуем тихие часы — до заезда гостей, после завтрака или в технический перерыв. Снимаем пространство, а не лица.',
    },
    {
        question: 'Чем FPV-пролёт отличается от обычного аэровидео?',
        answer:
            'Обычный дрон снимает плавные стабильные панорамы снаружи — фасад, территория, вид с высоты. FPV-дрон может работать внутри: лобби, коридор, pool area — и создаёт непрерывный кадр от первого лица. Это опция, а не обязательная часть каждого пакета.',
    },
    {
        question: 'Подходит ли контент для Booking, Airbnb и других площадок бронирования?',
        answer:
            'Да. Отдаём в форматах, которые принимают основные площадки: JPG / WebP для фото, MP4 для видео. Горизонтальные версии для сайта и YouTube, вертикальные для Reels и мобильных площадок бронирования. Адаптируем под ваши требования.',
    },
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Аэросъёмка с высоты — 250 ₾. Пролёт FPV-дроном внутри — 350 ₾. Полная съёмка за один визит — 500 ₾. В этих пакетах вы получаете фото и видео в 4K. Съёмка с монтажом и роликами под соцсети — от 900 ₾. К любому пакету можно добавить монтаж Reels (+150 ₾), ролик для сайта (+150 ₾) или 360° панораму (+80 ₾).',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка занимает от 1 до 3 часов в зависимости от задачи. Видеофайлы без монтажа — от 24 часов. Готовый контент с монтажом и обработкой — от 3 до 7 рабочих дней.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Полёты дронов регулируются Авиационной администрацией Грузии (GCAA). Проверка воздушного пространства и все необходимые согласования — на нас. Вам не нужно ничего оформлять.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да, для постоянной или разовой работы мы заключаем договор на оказание услуг. В нём фиксируются основные условия сотрудничества, формат работы и порядок взаиморасчётов.',
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
    name: 'Дрон-съёмка отелей и туризма в Тбилиси',
    description:
        'Аэросъёмка и FPV-видео для отелей, курортов и туристических объектов в Тбилиси и Грузии. Материалы для сайта, Booking и площадок бронирования, соцсетей.',
    provider: {
        '@id': 'https://breus.media/#organization',
    },
    areaServed: ['Tbilisi', 'Kakheti', 'Kazbegi', 'Gudauri', 'Bakuriani', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '900',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-hotels-tourism',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры и съёмки для отелей и туризма.',
    url: 'https://breus.media',
    telephone: '+995501103183',
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
    openingHours: 'Mo-Su 09:00-20:00',
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
            name: 'Туризм и отели',
            item: 'https://breus.media/tourism-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Аэросъёмка отелей и курортов',
            item: 'https://breus.media/drone-hotels-tourism',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка отелей и курортов в Тбилиси и Грузии | Breus Media',
    description:
        'Аэросъёмка и FPV-видео для отелей, курортов и туристических объектов в Тбилиси и по Грузии. Материалы для сайта, Booking и соцсетей. От 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-hotels-tourism',
        languages: {
            'ru-RU': 'https://breus.media/drone-hotels-tourism',
            'en-US': 'https://breus.media/drone-hotels-tourism/en',
            'x-default': 'https://breus.media/drone-hotels-tourism',
        },
    },
    openGraph: {
        title: 'Аэросъёмка отелей в Грузии | Breus Media',
        description:
            'Аэросъёмка и FPV-видео для отелей и курортов в Тбилиси от 250 ₾. Материалы для Booking, сайта и Reels. Снаружи, внутри и под ключ.',
        url: 'https://breus.media/drone-hotels-tourism',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Аэросъёмка отелей в Грузии | Breus Media',
        description: 'Дрон + FPV для Booking, сайта и соцсетей. От 250 ₾.',
    },
};

export default function DroneHotelsTourismPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaLabel="Обсудить задачу"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={true}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'ЦЕНЫ', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{
                    RU: '/drone-hotels-tourism',
                    EN: '/drone-hotels-tourism/en',
                }}
                sectionLinks={[
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385100} label="Hero Section">
                <section
                    id="drone-hotels-tourism-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-36 md:pb-20 md:pt-44"
                >
                    <div aria-hidden className="absolute inset-0">
                        <HeroBackgroundMountains />
                    </div>
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.55)_75%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <h1 className="max-w-4xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Аэросъёмка отелей и курортов в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
                                    Покажите отель так, чтобы гость забронировал до визита. 4K-видео с воздуха + пролёт камерой внутри. Материал под Booking, сайт и соцсети — за один выезд.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить съёмку
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Ваш отель глазами гостя, ещё до визита</p>
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
            </DebugWrapper>

            {/* ── КАК ЭТО ВЫГЛЯДИТ ──────────────────────────────────────────────── */}
            <DebugWrapper id={385110} label="How It Looks Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Примеры аэросъёмки отелей в Тбилиси — снаружи и внутри.
                            </p>
                        </div>
                        <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                            <FormatExamplesSlideshow
                                slidesOverride={formatExampleSlides}
                                altTexts={[
                                    'Панорамная аэросъёмка террасы и побережья отеля',
                                    'Интерьер отеля с панорамным видом на вечерний город',
                                    'Спальня люкс-номера отеля с ночной городской панорамой',
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ЧТО ГОВОРЯТ ЦИФРЫ ──────────────────────────────────────────────── */}
            <DebugWrapper id={385115} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что говорят цифры</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Визуальный контент — это не украшение, а прямой инструмент бронирования. Исследования Expedia, Google и Hotel Tech Report показывают, как сильно качество съёмки влияет на решение будущего гостя.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="tracking-tight text-5xl font-bold text-[#FFD23F]">{item.stat}</p>
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>
                                    <a
                                        href={item.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center text-xs font-semibold text-white/60 transition-colors hover:text-[#FFD23F]"
                                    >
                                        Источник: {item.source} →
                                    </a>
                                </article>
                            ))}
                        </div>
                        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/55">
                            Цифры приведены из открытых исследований Expedia, Google и Hotel Tech Report. Конкретный эффект для вашего отеля зависит от качества исходного пространства, типа кадров, канала публикации и контекста кампании.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ЧТО ОБЫЧНО ГОВОРЯТ ПЕРЕД СЪЁМКОЙ ─────────────────────────────────── */}
            <DebugWrapper id={385120} label="Problems Section">
                <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что обычно говорят перед съёмкой?</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>


            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385160} label="Deliverables Section">
                <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                После съёмки вы получаете не просто набор файлов, а готовый пакет — разложенный по папкам и адаптированный под каждую площадку.
                            </p>
                            <p className="mt-3 leading-relaxed text-white/50">
                                Если вам нужна не только съёмка с воздуха, а полноценный набор контента для отеля — эту съёмку можно дополнить другими форматами.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Что входит в каждый пакет</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesDefault.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm font-semibold text-white/80">Дополнительно в пакете «С готовым результатом»:</p>
                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesPremium.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Как устроены файлы</h3>
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    {[
                                        { name: 'Сайт', desc: 'Основной ролик и фотографии для страниц сайта' },
                                        { name: 'Соцсети', desc: 'Вертикальные видео для Reels, Stories, TikTok' },
                                        { name: 'Google Maps', desc: 'Короткий ролик и фото для карточки отеля' },
                                        { name: 'Архив', desc: 'Все исходники — для будущего использования' },
                                    ].map((folder) => (
                                        <div key={folder.name} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                {folder.name}
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>

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
            </DebugWrapper>

            {/* ── МИД-КТА ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385180} label="Mid CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Не уверены, какой формат подходит именно вашему объекту? Расскажите про отель — скажем, что имеет смысл снимать.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── КАК ПРОХОДИТ РАБОТА ──────────────────────────────────────────────── */}
            <DebugWrapper id={385220} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ПАКЕТЫ И ЦЕНЫ ────────────────────────────────────────────────────── */}
            <DebugWrapper id={385240} label="Pricing Section">
                <section id="pricing" className="scroll-mt-16 md:scroll-mt-20 pt-5 pb-20 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">Пакеты и цены</h2>
                            <p className="mt-2 text-xs leading-relaxed text-white/75 md:text-sm">
                                Цены фиксированные, в лари (₾). Все фото и видео в 4K. Доступен монтаж Reels для соцсетей, горизонтальный промо-ролик 16:9, панорамы 360° и видео для карточек на Booking и Google Maps.
                            </p>
                        </div>

                        <div className="mt-5 grid gap-4 xl:grid-cols-4 xl:gap-5">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`flex flex-col rounded-[20px] border p-4.5 md:p-5 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div>
                                        <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                        <p className="mt-1.5 text-xs text-white/64">{card.subtitle}</p>
                                    </div>
                                    <div className="mt-3.5 flex items-center gap-2 md:mt-4 md:gap-3">
                                        <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{card.price}</p>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Чаще всего выбирают
                                            </span>
                                        ) : null}
                                    </div>
                                    <ul className="mt-4 flex-1 space-y-1.5 text-xs leading-relaxed text-white/72 md:mt-4.5 md:space-y-2 md:text-[13px]">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note && <p className="mt-3 text-xs leading-relaxed text-white/58 md:mt-3.5">{card.note}</p>}
                                    <PackageCta
                                        label="Обсудить этот пакет →"
                                        packageName={card.title}
                                        packagePrice={card.price}
                                        lang="ru"
                                        className="mt-4 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-5 md:py-2.5"
                                    />
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-5 md:p-6">
                            <h3 className="text-lg font-bold text-white md:text-xl">Дополнительно по задаче</h3>
                            <p className="mt-2 text-xs leading-relaxed text-white/70 md:text-sm">
                                Из одной съёмки можно собрать не только основной материал, но и дополнительные форматы под сайт, соцсети, карточку в Google Maps и продажи.
                            </p>
                            <div className="mt-4 grid gap-3 md:grid-cols-3">
                                {addonPricing.map((item) => (
                                    <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-3.5 text-xs leading-relaxed text-white/78 md:text-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── СРАВНЕНИЕ ПАКЕТОВ — ТАБЛИЦА ────────────────────────────────────── */}
            <DebugWrapper id={385250} label="Package Comparison Section">
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
                        <div className="flex items-center gap-1.5 text-xs text-white/45 md:hidden mt-4">
                            <span>⟷</span> <span>Свайпайте таблицу влево-вправо для сравнения</span>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385280} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            {/* ── ТИПЫ ОБЪЕКТОВ И СЦЕНАРИИ ─────────────────────────────────────────── */}
            <DebugWrapper id={385320} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Типы объектов и сценарии</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Под каждый тип отеля собираем свой набор кадров с понятной задачей.
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
                                        <span className="font-semibold text-white/75">Что получите:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── МИД-КТА 2 ────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нашли свой тип объекта в списке? Расскажите детали — предложим пакет и маршрут съёмки под
                            вашу ситуацию.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить задачу
                            </a>
                            <a
                                href="https://wa.me/995501103183?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D0%B0%20%D0%BE%D1%82%D0%B5%D0%BB%D1%8F."
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
            <DebugWrapper id={385340} label="Georgia & Safety Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">Почему Грузия — особый визуальный продукт</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    Тбилиси — исторические кварталы, ущелье реки и современные отели в одном кадре.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Гудаури и Бакуриани — горнолыжные склоны зимой, альпийские луга летом. Resort-отели в естественной декорации.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Казбеги и горные регионы — кавказские вершины как фон для boutique-отелей. Ничего подобного нет поблизости.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Кахетия — виноградники, монастыри и горы. Идеально для эко-отелей и тревел-контента.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Грузия предлагает возврат 20–25% от расходов на съёмку через программу Film in Georgia. Спросите нас, как это применить к вашему отельному проекту.
                                </p>
                            </div>

                            <div className="rounded-[20px] border border-[#2a2a2a] bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">Как мы работаем с правилами полётов</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    Работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован. Максимальная высота — 120 м.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Для съёмок рядом с публичными объектами или в чувствительных зонах проверяем ограничения заранее и предлагаем сценарий, который даёт нужный кадр без юридических рисков.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Съёмка с гостями: работаем в тихие часы, фокусируемся на территории и архитектуре — без нарушения приватности.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Горные регионы — договариваемся о резервном дне на случай непогоды. Перенос без доплат.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── СМЕЖНЫЕ УСЛУГИ ───────────────────────────────────────────────────── */}
            <DebugWrapper id={385360} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Дрон-съёмка — одно из направлений визуальной работы отеля. При необходимости комбинируем с другими форматами съёмки.
                            </p>
                        </div>

                        <p className="mt-8 text-sm leading-relaxed text-white/58">
                            Часто к съёмке с воздуха добавляют 360° тур по отелю и серию Reels для соцсетей. Если интересно — обсудим, сколько стоит в комплекте.
                        </p>

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
            </DebugWrapper>

            {/* ── ГДЕ МЫ СНИМАЕМ В ГРУЗИИ ──────────────────────────────────────── */}
            <DebugWrapper id={385365} label="Geography Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Где мы снимаем в Грузии</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Работаем в регионах, где расположены большинство отелей и курортов. Знаем особенности каждой локации — свет, погодные окна, ограничения полётов.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { region: 'Тбилиси', note: 'Городские и бутик-отели, исторические кварталы, Мтацминда.' },
                                { region: 'Кахетия', note: 'Винные отели, виноградники, Алазанская долина, монастыри.' },
                                { region: 'Казбеги и Степанцминда', note: 'Высокогорные отели на фоне кавказских вершин.' },
                                { region: 'Гудаури', note: 'Горнолыжные resort-отели, трассы, панорамы Крестового перевала.' },
                                { region: 'Бакуриани', note: 'Семейные курорты, альпийские луга летом, склоны зимой.' },
                                { region: 'Апарт-отели и Airbnb по всей Грузии', note: 'Несколько объектов за один выезд — пакетный график съёмки.' },
                            ].map((item) => (
                                <article key={item.region} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.region}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.note}</p>
                                </article>
                            ))}
                        </div>
                        <p className="mt-8 text-sm leading-relaxed text-white/55">
                            Логистика и условия выезда обсуждаются на этапе брифа. Для регулярного сотрудничества с сетями — отдельные условия.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если вы дочитали до этого места, значит вопрос с визуальным контентом для отеля актуален.
                            Следующий шаг — расскажите об объекте, и мы предложим конкретный формат.
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
            <DebugWrapper id={385380} label="Contact Section">
                <DroneContactStitch preselectedServices={['drone']} />
            </DebugWrapper>

            <DebugWrapper id={385400} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <DroneStickyCta heroId="drone-hotels-tourism-hero" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
