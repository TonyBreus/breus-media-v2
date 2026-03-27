import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-weddings-events/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-weddings-events/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type MetricCard = {
    value: string;
    text: string;
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
        value: '01',
        text: 'Дрон показывает масштаб площадки, маршрут, ландшафт и атмосферу дня — то, что невозможно передать только с земли.',
    },
    {
        value: '02',
        text: 'Для destination wedding локация — часть продукта, а не просто фон.',
    },
    {
        value: '03',
        text: 'Один aerial session даёт материалы сразу для highlight-видео, Reels, stories и промо площадки.',
    },
    {
        value: '04',
        text: 'У event-контента с сильным establishing shot выше шанс удержать внимание в первые секунды ролика.',
    },
];

const painCards: PainCard[] = [
    {
        title: 'Боль 1',
        role: 'Пара / wedding couple',
        text: '«Мы хотим красивые кадры локации и дня целиком, но не хотим, чтобы дрон мешал церемонии или создавал суету.»',
    },
    {
        title: 'Боль 2',
        role: 'Wedding planner',
        text: '«Тайминг плотный. Любая техника, которая работает хаотично, начинает ломать процесс и раздражать площадку.»',
    },
    {
        title: 'Боль 3',
        role: 'Event venue / wedding venue',
        text: '«Площадка выглядит сильнее всего сверху, но клиенты редко видят её масштаб, подъезд, природу и окружение.»',
    },
    {
        title: 'Боль 4',
        role: 'Корпоративный организатор',
        text: '«Нужен яркий event recap для соцсетей и отчётности, но с понятным сценарием, без полётов наугад и без риска для гостей.»',
    },
    {
        title: 'Боль 5',
        role: 'Destination clients',
        text: '«Мы не находимся в Грузии постоянно. Нужен локальный оператор, который объяснит процесс, ограничения и заранее скажет, что реально можно снять.»',
    },
];

const benefitCards: BenefitCard[] = [
    {
        title: 'Показывает не только людей, но и контекст дня',
        text: 'Локация, маршрут, архитектура, природа, вид сверху, вход, церемониальная зона — всё, что создаёт ощущение масштаба.',
        detail: 'Кадры воздуха работают как визуальный каркас всей истории дня.',
    },
    {
        title: 'Делает wedding / event film визуально дороже',
        text: 'Один точный aerial layer сразу поднимает восприятие итогового ролика и помогает связать наземные кадры в цельную историю.',
        detail: 'Важно не количество полётов, а точные моменты и аккуратная интеграция.',
    },
    {
        title: 'Помогает площадке и организатору',
        text: 'Материал можно использовать не только для пары или заказчика, но и для venue-маркетинга, reels, stories и будущих продаж.',
        detail: 'Одна съёмка закрывает сразу несколько задач после события.',
    },
    {
        title: 'Работает как планируемый инструмент, а не как хаос в воздухе',
        text: 'Мы заранее определяем safe windows, точки взлёта и конкретные кадры, а не летаем всё время без задачи.',
        detail: 'Тайминг мероприятия остаётся под контролем planner-команды.',
    },
    {
        title: 'Можно снять и спокойно, и эффектно',
        text: 'Air 3S даёт плавные cinematic aerial shots, а Avata 2 используем точечно для динамики и FPV-сценариев там, где это уместно и безопасно.',
        detail: 'FPV — дополнительный инструмент, а не основной режим для свадебной площадки.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ',
        subtitle: 'Свадьба / камерный private event / venue content',
        items: [
            '1 highlight-ролик 30–60 сек',
            '3–5 вертикальных Reels 10–20 сек',
            '10–15 аэрофото JPG',
            'Establishing shots локации, подъезда, церемониальной зоны, природы вокруг',
            'Доставка за 48–72 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Свадьба с несколькими aerial-сценами / брендовый event / корпоратив',
        items: [
            'Highlight-ролик 45–90 сек',
            '5–8 вертикальных Reels разной длины',
            '15–25 аэрофото JPG',
            'Кадры площадки, гостей на безопасной дистанции, общей атмосферы и вечернего света',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН',
        subtitle: 'Destination wedding / luxury venue / крупный event по таймингу',
        items: [
            'Pre-production: бриф, сценарий полётов, проверка ограничений',
            'Full coverage воздушной части по согласованным окнам',
            'Highlight + набор коротких клипов под платформы',
            'RAW / исходники по запросу',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Сценарий с учётом локации, гостей и ограничений GCAA',
        ],
    },
];

const allPackagesItems: string[] = [
    'Без водяного знака',
    'Право на коммерческое использование для согласованных задач',
    '1 итерация правок',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Wedding couple / destination wedding',
        pain: 'Хочется красоты и масштаба, но без лишней техники над головой весь день.',
        solution: 'Заранее планируем 2–4 точных aerial windows и снимаем только то, что реально усиливает фильм.',
        deliverables: 'Highlight + reels + aerial photos.',
    },
    {
        title: 'Wedding planner',
        pain: 'Дрон часто воспринимается как фактор хаоса и риска для тайминга.',
        solution: 'Согласуем маршрут, окна съёмки и точки работы заранее, чтобы aerial layer был частью плана, а не помехой.',
        deliverables: 'Структурированный aerial coverage plan + финальные материалы.',
    },
    {
        title: 'Wedding venue / ресторан / загородная площадка',
        pain: 'Клиент не видит весь потенциал места с уровня земли.',
        solution: 'Aerial hero-кадры территории, подъезда, церемониальной зоны, террас, природы и окружающего ландшафта.',
        deliverables: 'Короткий promo hero + reels + фото площадки.',
    },
    {
        title: 'Corporate event / brand event',
        pain: 'Нужен event recap, который выглядит масштабно и современно, но без риска и «дрон ради эффекта».',
        solution: 'Establishing shots, crowd energy с безопасной дистанции, входные группы, venue reveal, outdoor-сцены по плану.',
        deliverables: 'Recap clips + vertical edits + venue/context shots.',
    },
    {
        title: 'Частный outdoor event',
        pain: 'Хочется запомнить место и атмосферу, а не только людей крупным планом.',
        solution: 'Показываем связку «люди + пространство + природа + свет».',
        deliverables: 'Highlight sequence + atmosphere reels + aerial stills.',
    },
    {
        title: 'Destination / international client',
        pain: 'Нужен локальный подрядчик, который понимает Грузию, говорит по-английски и не скрывает ограничения.',
        solution: 'Прозрачный workflow, коммуникация RU/EN, понятный бриф, проверка локации и реалистичный план съёмки.',
        deliverables: 'Scoped package + clear delivery timeline.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Можно ли использовать дрон на свадьбе в Тбилиси?',
        answer:
            'Да, но не в формате «летаем как угодно весь день». Сначала оцениваем локацию, количество людей, сценарий события и ограничения по зоне. Для камерных свадеб и частных мероприятий это часто реально, если съёмка заранее спланирована и не нарушает безопасность.',
    },
    {
        question: 'Будет ли дрон мешать церемонии и гостям?',
        answer:
            'Нет, если aerial-съёмка встроена в тайминг. Обычно работаем короткими planned windows: до начала, в спокойные интервалы или на открытых участках. Наша цель — снять материал без давления на площадку и без ощущения суеты.',
    },
    {
        question: 'Вы летаете над толпой во время мероприятия?',
        answer:
            'По умолчанию нет. Для сценариев рядом с большим количеством людей сначала оцениваем формат события, плотность гостей и допустимые траектории. Безопасность всегда важнее эффектного кадра.',
    },
    {
        question: 'Что лучше для свадьбы: обычный дрон или FPV?',
        answer:
            'Для свадеб чаще основа — плавные cinematic кадры на Air 3S. FPV на Avata 2 используем точечно, только где это уместно и безопасно. Такой баланс даёт и спокойную картинку, и динамику без перегруза.',
    },
    {
        question: 'Можно ли снимать venue-контент отдельно от дня свадьбы?',
        answer:
            'Да. Часто это даже удобнее: отдельно снимаем площадку в спокойном режиме для promo-материалов, а в день события берём только короткий aerial layer по заранее согласованным окнам.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Кахетия, Батуми, Казбеги и другие регионы — по договорённости. На брифе учитываем логистику, погодные условия и тайминг площадки.',
    },
    {
        question: 'В какую погоду возможна съёмка?',
        answer:
            'Обычно при ветре до 10–12 м/с и без осадков. Если погода мешает безопасной съёмке, переносим aerial-часть на ближайшее подходящее окно.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка свадьбы или event в Тбилиси?',
        answer:
            'Стартовый пакет — от 450 ₾. Стандартный пакет — от 800 ₾. Продакшн-пакет для destination wedding или крупного мероприятия — от 2 000 ₾. Точный расчёт делаем после короткого брифа.',
    },
    {
        question: 'Сколько времени занимает aerial-часть в день съёмки?',
        answer:
            'Обычно 1–3 часа в зависимости от размера локации и числа запланированных окон. Мы заранее фиксируем, когда работаем, чтобы не ломать общий тайминг мероприятия.',
    },
    {
        question: 'Что входит в результат и когда вы отдаёте материалы?',
        answer:
            'В зависимости от пакета: highlight-ролик, вертикальные reels и аэрофото. Базовая выдача обычно 48–72 часа, расширенные пакеты — 3–5 рабочих дней.',
    },
    {
        question: 'Можно ли включить aerial-кадры в фильм внешнего видеографа?',
        answer:
            'Да. Работаем как отдельный aerial layer и передаём материал в согласованном формате, чтобы ваш монтажёр или команда продакшна могли удобно встроить кадры в общий фильм.',
    },
    {
        question: 'Вы работаете с иностранными клиентами и planner-командами?',
        answer:
            'Да. Коммуникация на RU/EN, понятный бриф, прозрачный scope и реалистичный план съёмки с учётом локации и ограничений.',
    },
    {
        question: 'Есть ли договор для крупных мероприятий?',
        answer:
            'Да. Для продакшн-пакетов и сложных сценариев оформляем договор с описанием объёма работ, сроков выдачи и условий использования материалов.',
    },
    {
        question: 'Что если часть плана нельзя безопасно реализовать на площадке?',
        answer:
            'Сразу предлагаем альтернативный кадр или сценарий. Наша задача — сохранить стиль и результат, не нарушая безопасный формат работы мероприятия.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Спокойный и управляемый aerial workflow',
        text: 'Дрон встраивается в тайминг события как часть плана, а не как отдельное шоу в воздухе.',
    },
    {
        title: 'Два инструмента под разные задачи',
        text: 'Air 3S для плавных establishing кадров и Avata 2 для точечной динамики там, где это безопасно и уместно.',
    },
    {
        title: 'Контент сразу под разные форматы',
        text: 'Highlight, reels и aerial photos можно использовать для пары, организатора и площадки.',
    },
    {
        title: 'Работа в рамках GCAA без запугивания',
        text: 'Объясняем ограничения простым языком и заранее собираем реалистичный сценарий съёмки.',
    },
    {
        title: 'Понятная коммуникация для local и destination клиентов',
        text: 'RU/EN бриф, прозрачный scope, чёткие сроки и аккуратная работа с площадкой.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 450 ₾',
        subtitle: 'Свадьба / private event / venue content',
        items: [
            'Highlight 30–60 сек',
            '3–5 Reels 10–20 сек',
            '10–15 аэрофото JPG',
            'Доставка за 48–72 часа',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 800 ₾',
        subtitle: 'Свадьба с несколькими aerial-сценами / брендовый event',
        items: [
            'Highlight 45–90 сек',
            '5–8 вертикальных Reels',
            '15–25 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 2 000 ₾',
        subtitle: 'Destination wedding / luxury venue / крупный event',
        items: [
            'Pre-production и сценарий полётов',
            'Full coverage воздушной части',
            'Highlight + короткие клипы',
            'RAW по запросу',
            'Line-item смета',
            'RU/EN коммуникация',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Обсуждаем формат события, локацию, тайминг и желаемые кадры. Вы сразу понимаете, что реалистично и безопасно.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Фиксируем окна съёмки, точки взлёта и последовательность кадров. Для сложных зон заранее проверяем ограничения.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Работаем точечно по плану, без хаотичных полётов. Aerial-часть обычно занимает 1–3 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–7)',
        text: 'Собираем highlight, reels и фото в согласованных форматах. Передаём через Google Drive или Telegram.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Комбинированный aerial и FPV-подход для брендов, пространств и коммерческих задач.',
    },
    {
        title: 'Дрон-съёмка отелей и туризма',
        href: '/drone-hotels-tourism',
        text: 'Aerial-контент для hospitality и destination-направлений в Тбилиси и по Грузии.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивная презентация площадки для продаж и удалённого знакомства с локацией.',
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
    name: 'Дрон-съёмка свадеб и мероприятий в Тбилиси',
    description:
        'Кинематографичная дрон-съёмка свадеб, private events и selected corporate events в Тбилиси и по Грузии. Безопасный сценарий, aerial highlights, FPV по согласованию.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: 'Тбилиси, Кахетия, Батуми, Казбеги, Грузия',
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
    description: 'Дрон-съёмка свадеб, private events и площадок в Тбилиси и по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breus.media/drone-weddings-events',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка свадеб и мероприятий в Тбилиси | Wedding & Event Drone | Breus Media',
    description:
        'Кинематографичная дрон-съёмка свадеб, private events и selected corporate events в Тбилиси и по Грузии. Безопасный сценарий, aerial highlights, FPV по согласованию. От 450 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-weddings-events',
    },
};

export default function DroneWeddingsEventsPage() {
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

            <DebugWrapper id={386100} label="Hero Section">
                <section
                    id="drone-weddings-events-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Weddings & Events Drone Layer
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-съёмка свадеб и мероприятий в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    Wedding &amp; Event Drone Filming in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Добавляем воздух, масштаб и атмосферу в ваш день — без хаоса и без лишнего риска.
                                    Заранее планируем, когда и как летит дрон, что снимаем и что вы получаете на
                                    выходе: aerial highlights, reels, фото локации и кадры для свадебного или
                                    event-фильма.
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
                                    Съёмка свадьбы или event venue обычно занимает 1–3 часа для воздушной части. Монтаж —
                                    48–72 часа.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по пакету</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для свадеб и мероприятий.</p>
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
                                        <li>Aerial highlights + establishing shots</li>
                                        <li>Wedding / venue / event content</li>
                                        <li>Работаем по правилам GCAA</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386120} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему свадьбы и ивенты выигрывают от кадров с воздуха</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот блок про практическую пользу: масштаб локации, атмосфера дня и сильные первые
                                секунды финального ролика.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={card.value} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>

                        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/58">
                            Первые event-кейсы Breus Media будут усиливать этот блок. Сейчас делаем ставку на понятный
                            процесс, безопасность и аккуратную интеграцию в тайминг мероприятия.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте свою ситуацию?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Типовые сценарии, где aerial-съёмка нужна, но есть опасения по таймингу, безопасности и
                                уместности на площадке.
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

            <DebugWrapper id={386160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что даёт дрон-съёмка свадьбе или мероприятию</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ценность aerial-слоя не в «эффекте ради эффекта», а в том, как он усиливает историю дня.
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

            <DebugWrapper id={386180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Планируете свадьбу, private event или площадку в Тбилиси, Кахетии, Батуми или Казбеги?
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

            <DebugWrapper id={386200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны так, чтобы закрыть и задачу пары/заказчика, и маркетинг площадки, и
                                контент для соцсетей.
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

            <DebugWrapper id={386220} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и типы событий</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Для каждого формата события важны свои кадры, свои окна съёмки и своя логика выдачи.
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

            <DebugWrapper id={386240} label="Georgia Location Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Грузия — сильная локация для свадеб и events</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Тбилиси — старый город, холмы, видовые площадки, винтажная архитектура и современные
                                venues в одном городе.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Кахетия — винодельни, поля, горы и тёплый свет. Идеально для destination weddings и
                                частных мероприятий на открытом воздухе.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Казбеги и горные регионы — драматичный пейзаж, который сам становится частью истории дня.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Батуми и побережье — море, современная архитектура, пальмы и вечерний свет для яркого
                                event-контента.
                            </p>
                            <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                Georgia (country) is strong for destination weddings and visual events: scenic
                                locations, relatively easy logistics and a distinctive landscape in one small country.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386260} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как мы работаем с полётами на свадьбах и мероприятиях</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован.
                                Максимальная рабочая высота — до 120 м в рамках общих правил.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для площадок в чувствительных или ограниченных зонах заранее проверяем локацию. Для
                                public events и сценариев рядом с большим количеством людей не обещаем полёт «по
                                умолчанию» — сначала оцениваем формат события, локацию, плотность людей и допустимый
                                сценарий съёмки.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Наша задача — не просто снять кадр, а сделать это спокойно, безопасно и без лишнего
                                давления на площадку, пару, гостей или организаторов.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Свадебный или event-дрон не должен быть «шумной звездой» на площадке. Обычно мы снимаем
                                короткими planned windows: до начала, в спокойные интервалы, на открытых участках или в
                                заранее согласованных точках.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры wedding и event aerial-layer</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. По запросу отправим примеры под формат
                                вашего события и площадки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Расскажите о локации и тайминге мероприятия. Подготовим реалистичный aerial-план без
                                лишней сложности для вашей команды.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого планирования" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={386320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={386340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы продаём не «полёт ради эффекта», а аккуратный aerial-layer, который усиливает событие
                                и не мешает ему.
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

            <DebugWrapper id={386360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Подбираем пакет под формат события, размер площадки и необходимый объём финального
                                контента.
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

            <DebugWrapper id={386380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Нужен точный расчёт под ваш формат свадьбы или мероприятия?
                            </p>
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

            <DebugWrapper id={386400} label="Process Note Section">
                <ProcessNote text="Съёмка свадьбы или event venue обычно занимает 1–3 часа для воздушной части. Монтаж — 48–72 часа." />
            </DebugWrapper>

            <DebugWrapper id={386420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Всё строится вокруг предсказуемого процесса: без хаоса, с уважением к площадке и
                                таймингу события.
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

            <DebugWrapper id={386440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если нужно усилить результат, комбинируем aerial-layer с другими визуальными форматами.
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

            <DebugWrapper id={386460} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите формат события, локацию и ключевые моменты тайминга. Предложим
                                        реалистичный aerial-сценарий и расчёт под ваш день.
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
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип события</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Свадьба</option>
                                                <option>Private event</option>
                                                <option>Venue-контент</option>
                                                <option>Corporate / brand event</option>
                                                <option>Destination event</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Локация</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Тбилиси</option>
                                                <option>Кахетия</option>
                                                <option>Батуми</option>
                                                <option>Казбеги</option>
                                                <option>Другая локация в Грузии</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Дата и тайминг</label>
                                        <input
                                            type="text"
                                            placeholder="Дата события, ключевые интервалы, ограничения площадки"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Что важно снять, какие форматы нужны, есть ли внешний видеограф"
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

            <DebugWrapper id={386480} label="Footer Section">
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
