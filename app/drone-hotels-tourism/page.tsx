import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';

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

const problemCards: CardItem[] = [
    {
        title: '«На Booking выглядим как все — хорошие фото, но конкуренты тоже»',
        text: 'Видео с дрона показывает территорию, расположение и атмосферу — то, что стандартными фото не передать.',
    },
    {
        title: '«Главная ценность отеля — природа вокруг, но с земли это не снять»',
        text: 'Дрон показывает горы, море, виноградники — весь контекст локации, который продаёт направление.',
    },
    {
        title: '«Нужен контент для сайта, Booking и Instagram — одна съёмка не закрывает всё»',
        text: 'Один выезд — основной ролик, короткие видео для соцсетей и обработанные фотографии под каждую площадку.',
    },
    {
        title: '«Хочу показать бассейн, террасу, вид — но с земли ракурс не тот»',
        text: 'Дрон снимает сверху и в движении: зоны отдыха, ландшафт, территорию — то, что гость хочет увидеть до бронирования.',
    },
    {
        title: '«Ищем оператора с понятной сметой и общением на английском»',
        text: 'Фиксированные пакеты с ценами в ₾, подробная смета по пунктам, общение на русском и английском.',
    },
    {
        title: '«Не понимаю, что заказать и сколько стоит»',
        text: 'На странице — три пакета с ценами, составом и сроками. Расчёт под ваш объект — бесплатно.',
    },
];

const deliverablesDefault: string[] = [
    'Разрешение на полёт (GCAA) — оформляем сами',
    'Видеофайлы в 4K',
    'Передача через Google Drive или WeTransfer',
    'Выезд по Тбилиси включён',
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
        subtitle: '4K-дрон, съёмка с воздуха',
        items: [
            'Съёмка с воздуха в 4K',
            'Фасад, территория, бассейн, окружение',
            'Видеофайлы без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Просто съёмка — без обработки. Обычно 1–1,5 часа на объекте.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'Пролёт камерой по лобби и залам',
        items: [
            'Пролёт камерой по лобби, коридору, зоне бассейна или террасе',
            'Подбираем лучший ракурс на месте',
            'Видеофайлы без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Не каждый интерьер подходит — уточняем до выезда. Обычно до 1 часа.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Снаружи с воздуха + пролёт по лобби — за один визит',
        items: [
            'Съёмка с воздуха + пролёт камерой внутри',
            'Оба формата за один визит',
            'Видеофайлы в 4K без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Полная съёмка за один приезд — и территорию сверху, и движение внутри.',
        popular: true,
    },
    {
        title: 'Съёмка с готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Съёмка снаружи и внутри + монтаж + фото — всё под ключ',
        items: [
            'Съёмка с воздуха + пролёт камерой внутри',
            'Продуманный маршрут съёмки',
            'Основной ролик для сайта (45–90 сек)',
            '3+ коротких видео для соцсетей',
            '20+ обработанных фотографий для сайта и площадок бронирования',
            'Видео для карточки в Google Maps',
            'Файлы в папке по назначению',
        ],
        note: 'Готовый контент под ключ. Для курортов и международных сетей — от 1 500 ₾, обсудим.',
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +100 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
    '10 обработанных фотографий: +60 ₾',
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
        title: 'Курортный отель (Батуми / Чёрное море)',
        pain: 'Главная ценность — море и побережье, но фото с земли это не передаёт.',
        solution: 'Аэровидео береговой линии, бассейна, территории с высоты.',
        deliverables: 'Кинематографичный ролик + 3–5 видео для соцсетей + 30+ фотографий.',
    },
    {
        title: 'Горный / эко-отель (Казбеги, Местиа, Кахетия)',
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
        title: 'Тревел-контент и туроператоры',
        pain: 'Нужен destination-ролик, который продаёт Грузию как направление.',
        solution: 'Аэросъёмка локаций, пейзажей, культурных объектов и природных зон.',
        deliverables: 'Основной ролик + серия видео для соцсетей.',
    },
    {
        title: 'Международная отельная сеть',
        pain: 'Нужен локальный оператор с правильным workflow и коммуникацией на EN.',
        solution: 'Продакшн-пакет, подробная смета по пунктам, исходники, работа в рамках GCAA.',
        deliverables: 'По списку кадров, форматы под стандарты сети.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Снимаем так, чтобы гость захотел забронировать',
        text: 'Мы думаем не о красивом пролёте, а о том, чтобы будущий гость понял: где находится отель, какая там территория и что его ждёт внутри.',
    },
    {
        title: 'Два формата съёмки из одного визита',
        text: 'Плавные кадры снаружи с воздуха + пролёт камерой внутри по залам и лобби — там, где это уместно. Не нужно два выезда.',
    },
    {
        title: 'Контент сразу под все площадки',
        text: 'Основной ролик, короткие видео для соцсетей, фотографии для Booking — всё из одной съёмки, без дополнительной адаптации.',
    },
    {
        title: 'Быстрый контакт, без лишних слоёв',
        text: 'Бриф, правки и вопросы решаются напрямую. Небольшая команда — значит быстрее и проще в общении.',
    },
    {
        title: 'Разрешения на полёт — на нас',
        text: 'Дрон зарегистрирован, знаем ограничения по зонам. Для сложных локаций берём на себя проверку воздушного пространства через Авиационную администрацию Грузии (GCAA).',
    },
    {
        title: 'Понятны для международных сетей',
        text: 'Общение на русском и английском, подробная смета по пунктам, исходные файлы по запросу. Работаем как локальная съёмочная группа с понятным международным подходом.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Reels для отелей',
        href: '/reels-promo/reels-hotel',
        text: 'Короткие вертикальные ролики для регулярного контента, сезонных обновлений и анонсов спецпредложений.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивные туры для сайта и площадок бронирования (Booking, Airbnb), чтобы гость мог детально изучить пространство до бронирования.',
    },
    {
        title: 'Промо-видео для отеля',
        href: '/promo-video/promo-hotel',
        text: 'Когда нужен не только аэрослой, а полноценная история про атмосферу, сервис и характер объекта.',
    },
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Динамичные FPV-пролёты и cinematic aerials для рекламных кампаний, брендового контента и фестивалей.',
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
            'Обычный дрон (Air 3S) снимает плавные стабильные панорамы снаружи — фасад, территория, вид с высоты. FPV-дрон (Avata 2) может работать внутри: лобби, коридор, pool area — и создаёт непрерывный иммерсивный кадр. Это опция, а не обязательная часть каждого пакета.',
    },
    {
        question: 'Подходит ли контент для Booking, Airbnb и других площадок бронирования?',
        answer:
            'Да. Отдаём в форматах, которые принимают основные площадки: JPG / WebP для фото, MP4 для видео. Горизонтальные версии для сайта и YouTube, вертикальные для Reels и мобильных площадок бронирования. Адаптируем под ваши требования.',
    },
    {
        question: 'Нужно ли закрывать отель на время съёмки?',
        answer:
            'Нет. Подбираем съёмочное окно, которое минимально пересекается с активным потоком гостей: раннее утро, время между заездами или согласованный технический слот.',
    },
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Полёт дроном снаружи — 250 ₾. Пролёт камерой внутри (FPV) — 350 ₾. Полная съёмка (снаружи + внутри) — 500 ₾. Это съёмка без монтажа, видеофайлы в 4K. Готовый контент под ключ (монтаж, ролик, фото, видео для соцсетей) — от 900 ₾. К любому пакету можно добавить монтаж Reels (+100 ₾), ролик для сайта (+150 ₾), 360° панораму (+80 ₾) или обработку фотографий (+60 ₾).',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка занимает от 1 до 3 часов в зависимости от задачи. Видеофайлы без монтажа — от 24 часов. Готовый контент с монтажом и обработкой — от 3 до 7 рабочих дней.',
    },
    {
        question: 'Можно ли снять сразу несколько объектов?',
        answer:
            'Да. Если у вас несколько апарт-отелей или объектов в одном городе — обсудим пакет на несколько съёмок. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Кахетия, Местиа и другие регионы — по договорённости. Стоимость выезда зависит от расстояния и логистики — уточняем на этапе брифа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Горные регионы обсуждаем отдельно — там своя специфика погоды и высотные ограничения. Если условия не позволяют — переносим без доплат.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Полёты дронов регулируются Авиационной администрацией Грузии (GCAA). Проверка воздушного пространства и все необходимые согласования — на нас. Вам не нужно ничего оформлять.',
    },
    {
        question: 'Вы работаете с иностранными отельными сетями?',
        answer:
            'Да. Коммуникация на RU и EN, подробная смета по пунктам, исходники по запросу. Понимаем требования к форматам и стандартам крупных международных сетей. Знаем контекст Film in Georgia (20–25% rebate на квалифицированные расходы).',
    },
    {
        question: 'Как получить Film in Georgia rebate?',
        answer:
            'Программа предоставляет до 20–25% возврата расходов при съёмке коммерческого контента в Грузии. Применима к крупным рекламным кампаниям отельных брендов. Минимальный порог — от 300 000 GEL локальных расходов. Уточните детали в рамках брифа.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для premium-пакетов и регулярного сотрудничества заключаем договор с чётким описанием форматов, сроков и условий выдачи материала.',
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
        'Аэросъёмка и FPV-видео для отелей, курортов и hospitality-объектов в Тбилиси и Грузии. Контент для сайта, Booking и площадок бронирования, соцсетей.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: 'Тбилиси, Батуми, Казбеги, Кахетия, Грузия',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '2600',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-hotels-tourism',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры и контент для hospitality и туризма.',
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
    openingHours: 'Mo-Su 09:00-20:00',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка отелей и курортов в Тбилиси | Аэровидео для hospitality | Breus Media',
    description:
        'Аэросъёмка и FPV-видео для отелей, курортов и hospitality-объектов в Тбилиси и Грузии. Контент для сайта, Booking и соцсетей. От 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-hotels-tourism',
    },
    openGraph: {
        title: 'Дрон-съёмка отелей в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-видео для отелей и курортов в Тбилиси от 250 ₾. Контент для Booking, сайта и Reels. Снаружи, внутри и под ключ.',
        url: 'https://breus.media/drone-hotels-tourism',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneHotelsTourismPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
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
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                    Hotels & Tourism Drone Content
                                </p>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-съёмка отелей и курортов в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Аэровидео и FPV — чтобы гость увидел ваш отель таким, каким он выглядит на самом деле.
                                </p>

                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    Отели всё чаще выбирают по видео: территория, вид, атмосфера зон — то, что фотография
                                    передаёт хуже. Дрон снимает внешний контекст с высоты, FPV добавляет ощущение
                                    пространства внутри — там, где это уместно. Один выезд — готовый набор под сайт,
                                    Booking и соцсети.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                    Тбилиси, Батуми, Казбеги, Кахетия — работаем по всей Грузии.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить съёмку
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
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Полёт + видеофайлы. Монтаж — отдельно.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">1–4 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">от 24 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Видео в 4K — чёткая картинка на любом экране</li>
                                        <li>Один визит — контент для сайта, Booking и соцсетей</li>
                                        <li>Разрешения на полёт включены</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── С КАКИМИ ЗАДАЧАМИ ПРИХОДЯТ ───────────────────────────────────────── */}
            <DebugWrapper id={385120} label="Problems Section">
                <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">С какими задачами приходят к нам</h2>
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
            </DebugWrapper>

            {/* ── ЧТО СНИМАЕМ И ЧТО ЭТО РЕШАЕТ ───────────────────────────────────── */}
            <DebugWrapper id={385140} label="What We Shoot Section">
                <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что снимаем — и какую задачу это решает</h2>
                            <p className="mt-5 leading-relaxed text-white/72">
                                Аэросъёмка отеля — это не просто красивый кадр сверху. Мы показываем объект в том
                                порядке, в котором его воспринимает будущий гость: расположение в городе или природе →
                                фасад → территория → ключевые зоны → атмосфера.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Дрон фиксирует внешний контекст: как выглядит отель с высоты, какие у него виды, как он
                                вписан в ландшафт или городскую среду. Для горного отеля — горный хребет за номерами.
                                Для курорта — береговая линия и бассейн. Для городского объекта — расположение в
                                квартале, соседство с достопримечательностями.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                FPV-камера добавляет движение внутри: проход через лобби, связь зон, глубину
                                пространства. Это опция, а не обязательная часть каждого пакета — и подходит не каждому
                                объекту. Обсуждаем на брифе.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                В итоге потенциальный гость заранее понимает, куда едет. Страница на Booking получает
                                видео, которое выделяет карточку. Менеджер по продажам может отправить ссылку вместо
                                папки с фотографиями.
                            </p>
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
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
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
                                <h3 className="text-lg font-bold text-white">Как организованы файлы</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">
                                    Папка «Сайт» — основной ролик и фотографии для страниц сайта
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    Папка «Соцсети» — вертикальные видео для Reels, Stories, TikTok
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    Папка «Google Maps» — короткий ролик и фотографии для карточки
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    Папка «Архив» — все материалы для будущего использования
                                </p>
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
                                    className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                                >
                                    Обсудить проект
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
            </DebugWrapper>

            {/* ── PROCESS NOTE ─────────────────────────────────────────────────────── */}
            <DebugWrapper id={385200} label="Process Note Section">
                <ProcessNote text="Съёмка среднего отеля — 2–3 часа на объекте. Работы в отеле не останавливаются." />
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
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ПАКЕТЫ И ЦЕНЫ ────────────────────────────────────────────────────── */}
            <DebugWrapper id={385240} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">Цены фиксированные, в грузинских лари (₾). Без скрытых доплат.</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/55">
                                Первые три пакета — съёмка без монтажа: приезжаем, снимаем, отдаём файлы. Четвёртый —
                                готовый результат под ключ. К любому пакету можно добавить монтаж, фото или 360°.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-4">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`flex flex-col rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Выгодно
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note && <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p>}
                                    <a
                                        href="#contact"
                                        className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                    >
                                        Обсудить этот пакет →
                                    </a>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Можно добавить к любому пакету</h3>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {addonPricing.map((item) => (
                                    <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4">
                                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── POST-PRICING CTA ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385260} label="Post-Pricing CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Не уверены, какой пакет подойдёт? Напишите про отель — скажем, что имеет смысл снимать и что войдёт в бюджет.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Написать о задаче
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385280} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            {/* ── КАК МЫ ПОДХОДИМ К СЪЁМКЕ ─────────────────────────────────────────── */}
            <DebugWrapper id={385300} label="Why Us Section">
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
                                    Батуми — черноморское побережье, пальмы и ультрасовременные resort-комплексы.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Казбеги и горные регионы — кавказские вершины как фон для boutique-отелей. Ничего подобного нет поблизости.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Кахетия — виноградники, монастыри и горы. Идеально для эко-отелей и тревел-контента.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Georgia (country) offers 20–25% cash rebate on qualified production expenses through the Film in Georgia programme. Ask us how this applies to your hotel campaign.
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
                                Дрон-съёмка — один из слоёв visual-продукта отеля. При необходимости комбинируем с другими форматами.
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
                            Обсудить съёмку
                        </a>
                    </div>
                </div>
            </section>

            {/* ── КОНТАКТ ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385380} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите тип объекта и регион — вернёмся с расчётом, маршрутом полётов и
                                        рекомендованным пакетом в течение 2 часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Написать напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="https://t.me/breusmedia"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                Telegram
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Городской отель</option>
                                                <option>Курортный / SPA отель</option>
                                                <option>Горный / эко-отель</option>
                                                <option>Апарт-отель / Airbnb</option>
                                                <option>Отельная сеть / бренд</option>
                                                <option>Туроператор / destination</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Регион</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Тбилиси</option>
                                                <option>Батуми / Black Sea</option>
                                                <option>Казбеги / горные регионы</option>
                                                <option>Кахетия</option>
                                                <option>Другой регион</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Задача и платформы</label>
                                        <input
                                            type="text"
                                            placeholder="Сайт, Booking и площадки бронирования, Reels, YouTube, рекламная кампания"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Даты, наличие гостей, ограничения площадки, референсы"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={385400} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
