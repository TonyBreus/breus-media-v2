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

type MetricCard = {
    value: string;
    text: string;
    source: string;
};

type PainCard = {
    title: string;
    role: string;
    text: string;
};

type BenefitCard = {
    title: string;
    text: string;
    detail: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
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

const socialProofCards: MetricCard[] = [
    {
        value: '67%',
        text: 'Гости более склонны забронировать отель, если доступен видео-тур.',
        source: 'SiteMinder · Cloudbeds',
    },
    {
        value: 'x3',
        text: 'Видео почти в 3 раза сильнее влияет на решение о путешествии, чем статичные фото.',
        source: 'Expedia, 2026',
    },
    {
        value: '50%+',
        text: 'Страницы с видео конвертируют заметно лучше, чем страницы только с фото.',
        source: 'HospitalityNet',
    },
    {
        value: '93%',
        text: 'Путешественников смотрят видео-контент перед бронированием.',
        source: 'Отраслевые исследования travel-сегмента',
    },
];

const painCards: PainCard[] = [
    {
        title: 'Боль 1',
        role: 'Владелец бутик-отеля',
        text: '«На Booking мы выглядим как все. Фото хорошие, но сосед тоже сделал хорошие фото. Гость не чувствует разницы.»',
    },
    {
        title: 'Боль 2',
        role: 'Маркетолог курортного отеля',
        text: '«Нам нужен контент и для сайта, и для Instagram, и для рассылки. Одна съёмка не закрывает все форматы.»',
    },
    {
        title: 'Боль 3',
        role: 'Управляющий апарт-отелем / Airbnb',
        text: '«Хочу показать не только комнату, но и район, вид, инфраструктуру рядом. Обычное фото это не передаёт.»',
    },
    {
        title: 'Боль 4',
        role: 'Директор горного или эко-отеля',
        text: '«Наша главная ценность — природа вокруг. Но фото с земли это не показывает. Нужен вид сверху.»',
    },
    {
        title: 'Боль 5',
        role: 'Международная отельная сеть',
        text: '«Ищем локального оператора в Грузии с правильным workflow. Нужна предсказуемая смета, работа в рамках закона, нормальная коммуникация на английском.»',
    },
];

const benefitCards: BenefitCard[] = [
    {
        title: 'Гость видит отель до бронирования',
        text: 'Не только номер, но и территорию, вид, расположение в городе или природе.',
        detail: 'Исследования показывают рост вероятности бронирования на 60–70% при наличии видео-тура.',
    },
    {
        title: 'Один выезд — контент для всех платформ',
        text: 'Из одной съёмки получаете hero-ролик для сайта, вертикальные Reels для Instagram, фото для Booking и короткие клипы для email-рассылки.',
        detail: 'Больше не нужно организовывать отдельные съёмки под каждую площадку.',
    },
    {
        title: 'FPV-пролёт показывает пространство в движении',
        text: 'Лобби, коридор, номер, вид из окна — один непрерывный кадр, который создаёт эффект присутствия лучше любого фото.',
        detail: 'Для hospitality-сегмента это самый быстрый способ передать атмосферу.',
    },
    {
        title: 'Аэрокадры показывают то, что не видно с земли',
        text: 'Территория отеля, бассейн, горы или море вокруг, расположение в городе.',
        detail: 'Для горных и курортных отелей это часто главный аргумент в пользу бронирования.',
    },
    {
        title: 'Понятен для международных сетей',
        text: 'Работаем на RU и EN, даём line-item смету, знаем правила GCAA, понимаем контекст Film in Georgia.',
        detail: 'Проект прозрачен по коммуникации, срокам и формату выдачи материалов.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ',
        subtitle: 'Городской отель / апарт-отель',
        items: [
            '1 hero-ролик 45–60 сек (горизонтальный, для сайта)',
            '3–5 вертикальных Reels 15–30 сек',
            '15–20 аэрофото JPG (для OTA и сайта)',
            'Виды с воздуха: территория, локация, окружение',
            'Доставка за 48–72 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Курортный / SPA / горный отель',
        items: [
            'Hero-ролик 60–90 сек (сайт + YouTube)',
            'FPV-пролёт по ключевым зонам (лобби / бассейн / вид)',
            '5–8 вертикальных Reels разной длины',
            '25–35 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН',
        subtitle: 'Международные сети / рекламные кампании',
        items: [
            'Full-day по шот-листу',
            'Pre-production: бриф, план полётов, проверка GCAA',
            'Hero-ролик + серия роликов под платформы',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Контекст Film in Georgia (20–25% rebate)',
        ],
    },
];

const allPackagesItems: string[] = ['Без водяного знака', 'Право на коммерческое использование', '1 итерация правок'];

const nicheCards: NicheCard[] = [
    {
        title: 'Городской бутик-отель (Тбилиси)',
        pain: 'Теряемся среди похожих объектов на Booking.',
        solution: 'Аэрокадры района, вид из номера сверху, FPV-пролёт по лобби и общим зонам.',
        deliverables: 'Hero + Reels + фото для OTA.',
    },
    {
        title: 'Курортный отель (Батуми / Black Sea)',
        pain: 'Главная ценность — море и природа, но фото с земли это не передаёт.',
        solution: 'Аэровидео территории, бассейна, береговой линии.',
        deliverables: 'Cinematic hero + FPV + 30+ аэрофото.',
    },
    {
        title: 'Горный / эко-отель (Казбеги, Местиа, Кахетия)',
        pain: 'Ландшафт вокруг — главный продукт, его нельзя показать с земли.',
        solution: 'Съёмка с воздуха горного контекста + путь к отелю + виды из номеров.',
        deliverables: 'Кинематографичный hero + аэрофото для сайта и соцсетей.',
    },
    {
        title: 'Апарт-отель и Airbnb (10+ объектов)',
        pain: 'Нужен контент для каждого объекта, но бюджет ограничен.',
        solution: 'Пакет на несколько объектов за один выезд, быстрая доставка, готово к публикации.',
        deliverables: 'Аэрофото + короткий ролик на каждый объект.',
    },
    {
        title: 'Тревел-контент и туроператоры',
        pain: 'Нужен destination-ролик, который продаёт Грузию как направление, а не конкретный отель.',
        solution: 'Аэросъёмка локаций, пейзажей, культурных объектов — весь визуальный контекст страны.',
        deliverables: 'Hero-ролик + серия под соцсети.',
    },
    {
        title: 'Международная отельная сеть',
        pain: 'Нужен локальный оператор с правильным workflow, предсказуемой сметой и коммуникацией на EN.',
        solution: 'Продакшн-пакет, line-item смета, исходники, работа в рамках GCAA, контекст Film in Georgia.',
        deliverables: 'По шот-листу, форматы под глобальные стандарты сети.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Можно ли снимать отель, когда в нём есть гости?',
        answer:
            'Да, но с оговорками. Для съёмки снаружи и с воздуха гости не мешают. Для FPV-пролётов внутри рекомендуем тихие часы — до открытия, после завтрака или в технический перерыв. Снимаем пространство, а не лица — приватность гостей не нарушается.',
    },
    {
        question: 'Как аэросъёмка влияет на бронирования?',
        answer:
            'Исследования SiteMinder и Cloudbeds показывают, что гости на 67% более склонны забронировать отель, если доступен видео-тур. Expedia (2026): видео почти в 3 раза сильнее влияет на решение, чем статичные фото. Это данные индустрии.',
    },
    {
        question: 'Чем FPV-пролёт отличается от обычного аэровидео?',
        answer:
            'Обычный дрон (Air 3S) снимает плавные стабильные панорамы снаружи. FPV-дрон (Avata 2) залетает внутрь — лобби, коридор, номер, вид из окна — и создаёт непрерывный иммерсивный кадр. Для отелей это убедительный способ передать атмосферу.',
    },
    {
        question: 'Подходит ли контент для Booking, Airbnb и других OTA?',
        answer:
            'Да. Отдаём в форматах, которые принимают основные платформы: JPG для фото, MP4 для видео. Горизонтальные версии для сайта и YouTube, вертикальные для Reels и мобильных OTA. Адаптируем под ваши требования.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Кахетия, Местиа и другие регионы — по договорённости. Стоимость выезда зависит от расстояния и логистики — уточняем на этапе брифа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Горные регионы обсуждаем отдельно, там своя специфика погоды. Если условия не позволяют — переносим без доплат.',
    },
    {
        question: 'Что входит в базовый пакет?',
        answer:
            'Hero-ролик 45–60 сек + 3–5 вертикальных Reels + 15–20 аэрофото. Готово к публикации на сайте, в соцсетях и на OTA. Доставка за 48–72 часа.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Базовый пакет — от 450 ₾. Стандартный пакет для курортного отеля — от 800 ₾. Продакшн-пакет (full-day, международные сети) — от 2 000 ₾. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Городской отель — 2–3 часа на объекте. Курортный отель с большой территорией — 3–5 часов. Монтаж и доставка — 48–72 часа после съёмки.',
    },
    {
        question: 'Можно ли снять сразу несколько объектов?',
        answer:
            'Да. Если у вас несколько апарт-отелей или объектов в одном городе — обсудим пакет на несколько съёмок. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Вы работаете с иностранными отельными сетями?',
        answer:
            'Да. Коммуникация на RU и EN, line-item смета, исходники по запросу. Понимаем требования к форматам и стандартам крупных сетей. Знаем контекст Film in Georgia (20–25% rebate на квалифицированные расходы).',
    },
    {
        question: 'Как получить Film in Georgia rebate?',
        answer:
            'Программа даёт до 20–25% возврата расходов при съёмке коммерческого контента в Грузии. Минимальный порог — от 300 000 GEL локальных расходов. Это актуально для крупных рекламных кампаний отельных брендов.',
    },
    {
        question: 'Что если погода испортится в день съёмки?',
        answer: 'Переносим на ближайший подходящий день без доплат. Горные регионы бронируем с запасным днём.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для продакшн-пакетов и регулярного сотрудничества заключаем договор с графиком, форматами и условиями выдачи материала.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Единственная нишевая страница под отели в Грузии',
        text: 'Локальные операторы предлагают «дрон для всего». Мы сделали отдельный продукт под hospitality — с deliverables, сроками и пониманием OTA-логики.',
    },
    {
        title: 'Два дрона под разные задачи',
        text: 'Air 3S — плавные аэрокадры снаружи. Avata 2 — FPV-пролёты внутри. Не выбираете между динамикой и стабильностью.',
    },
    {
        title: 'Контент сразу под все платформы',
        text: 'Hero-ролик, Reels, фото для OTA — из одного выезда. Берёте и публикуете без дополнительной адаптации.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Дрон зарегистрирован. Ограничения знаем. Для сложных зон согласование берём на себя.',
    },
    {
        title: 'Понятны для международных сетей',
        text: 'RU/EN, line-item смета, исходники, Film in Georgia. Работаем как local drone unit международного уровня.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 450 ₾',
        subtitle: 'Городской отель / апарт-отель / Airbnb',
        items: [
            'Hero-ролик 45–60 сек (горизонтальный)',
            '3–5 Reels 15–30 сек (вертикальные)',
            '15–20 аэрофото для OTA и сайта',
            'Доставка за 48–72 часа',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 800 ₾',
        subtitle: 'Курортный / SPA / горный отель',
        items: [
            'Hero-ролик 60–90 сек',
            'FPV-пролёт по ключевым зонам',
            '5–8 вертикальных Reels',
            '25–35 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 2 000 ₾',
        subtitle: 'Международные сети / рекламные кампании',
        items: [
            'Full-day по шот-листу',
            'Pre-production + safety-план',
            'Hero + серия роликов под платформы',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Контекст Film in Georgia',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Описываете отель: локация, тип объекта, для каких платформ контент, есть ли гости в день съёмки. Расчёт — в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Согласуем маршрут, тайминг, ограничения локации. Для горных или специфических зон — проверяем GCAA заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Аэрокадры снаружи + FPV внутри по согласованному сценарию. 2–3 часа на объекте. Работы не останавливаются.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–7)',
        text: 'Hero-ролик, Reels, аэрофото — всё нарезано под платформы. Google Drive или Telegram. Готово к публикации.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Динамичные FPV-пролёты и cinematic aerials для рекламы, брендов и локаций.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивные туры для сайта и OTA-платформ, чтобы увеличить глубину вовлечения.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Съёмка жилых и коммерческих объектов для презентации, маркетинга и продаж.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
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
        'Кинематографичные аэрокадры и FPV-пролёты для отелей, курортов и туризма в Тбилиси и Грузии. Контент для сайта, Booking, OTA и соцсетей.',
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
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '450',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Дрон-съёмка отелей, курортов и тревел-контента в Тбилиси, Батуми и по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breus.media/drone-hotels-tourism',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка отелей и курортов в Тбилиси | Аэровидео для туризма | Breus Media',
    description:
        'Кинематографичные аэрокадры и FPV-пролёты для отелей, курортов и туризма в Тбилиси и Грузии. Контент для сайта, Booking и соцсетей. От 450 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-hotels-tourism',
    },
};

export default function DroneHotelsTourismPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

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
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Hotels & Tourism Drone Content
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-съёмка отелей и курортов в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    Hotel &amp; Resort Drone Filming in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Кинематографичные аэрокадры и FPV-пролёты, которые показывают отель так, как его
                                    видит гость — от подъезда до вида из номера. Продакшн-подход: бриф → план полётов →
                                    безопасная съёмка → готовые ролики под сайт, Booking/OTA и соцсети.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
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

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка среднего отеля — 2–3 часа. Монтаж — 48–72 часа.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по пакету</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Базовый пакет для отелей и апарт-формата.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48–72 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Монтаж</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">RU / EN</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Коммуникация</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Аэрокадры + FPV-пролёты в одном выезде</li>
                                        <li>Контент под OTA, сайт и Reels</li>
                                        <li>Работаем по правилам GCAA</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385120} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему отели инвестируют в аэросъёмку</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В hospitality видео влияет на выбор гостя до момента бронирования. Это уже стандарт
                                конкурентной упаковки объекта.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.source}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте себя?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже типовые запросы от владельцев отелей, маркетологов и международных hospitality-команд.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{card.title}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{card.role}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что даёт аэросъёмка вашему отелю</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Это не просто красивое видео, а инструмент для роста бронирований и усиления позиционирования.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    <p className="mt-3 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/78">
                                        {card.detail}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Есть отель или курорт в Тбилиси, Батуми или горных регионах Грузии?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны под тип объекта: городской отель, курорт или международная рекламная
                                кампания.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Во всех пакетах</p>
                            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-3">
                                {allPackagesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385220} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и типы объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Под каждый тип объекта собираем свой набор кадров и deliverables с понятной коммерческой
                                целью.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span> {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385240} label="Georgia Location Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Грузия — это особый визуальный продукт</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Тбилиси — контраст старой архитектуры, ущелья реки и современных кварталов в одном кадре.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Батуми — черноморское побережье, пальмы и ультрасовременные отели — всё в одном горизонте.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Казбеги и горные регионы — дикий пейзаж кавказских вершин как фон для boutique-отелей.
                                Нигде больше такого нет.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Кахетия — виноградники, монастыри и горы. Идеально для эко-отелей и тревел-контента.
                            </p>
                            <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                Georgia (country) offers 20–25% cash rebate on qualified production expenses through the
                                Film in Georgia programme. Ask us how this applies to your hotel campaign.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385260} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как мы работаем с правилами полётов в Грузии</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован.
                                Максимальная высота — 120 м.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для съёмок рядом с публичными событиями и в чувствительных зонах проверяем ограничения
                                заранее и предлагаем сценарий, который даёт нужный кадр без юридических рисков.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Съёмка с гостями: можно работать в тихие часы (до открытия, ранним утром),
                                фокусироваться на территории и архитектуре, а не на лицах — без нарушения приватности.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры съёмки hospitality-проектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. Под ваш тип объекта дадим релевантные
                                референсы и сценарий пилотной съёмки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Опишите формат отеля, целевые платформы и сезонность. Предложим съёмочный план и выдачу
                                материалов под ваш маркетинг.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого запуска съёмки" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={385320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={385340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы упаковали отдельный продукт под hospitality и туризм, а не универсальную услугу «дрон
                                для всего».
                            </p>
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

            <DebugWrapper id={385360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет от 450 ₾, стандартный от 800 ₾ и продакшн-пакет от 2 000 ₾ для
                                международных кампаний.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
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
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">Нужен точный расчёт под ваш отель или локацию?</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Получить расчёт
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385400} label="Process Note Section">
                <ProcessNote text="Съёмка среднего отеля — 2–3 часа. Монтаж — 48–72 часа." />
            </DebugWrapper>

            <DebugWrapper id={385420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Каждый этап заранее согласован: маршрут, сроки, формат выдачи и юридически безопасный
                                сценарий полётов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                При необходимости комбинируем aerial-видео, FPV и интерактивные форматы в единую
                                воронку контента.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385460} label="Contact Section">
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
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
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
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
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
                                            placeholder="Сайт, Booking/OTA, Reels, YouTube, рекламная кампания"
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

            <DebugWrapper id={385480} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .clean-debug-overlays [data-debug-badge] {
                            display: none !important;
                        }

                        .clean-debug-overlays [data-debug-content] {
                            --tw-ring-shadow: 0 0 #0000 !important;
                            box-shadow: none !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
                        }
                    `,
                }}
            />
        </main>
    );
}
