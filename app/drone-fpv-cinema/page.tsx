import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-fpv-cinema/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-fpv-cinema/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ProductCard = {
    title: string;
    subtitle: string;
    text: string;
    specs: string;
};

type ListCard = {
    title: string;
    text: string;
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

type ProcessStep = {
    step: string;
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

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const productCards: ProductCard[] = [
    {
        title: 'FPV flythrough (DJI Avata 2)',
        subtitle: 'Продукт 1',
        text:
            'Динамичные пролёты сквозь пространство: рестораны, отели, шоурумы, ивент-площадки, жилые объекты. Скорость, манёвренность и «невозможные» траектории.',
        specs: 'Сенсор 1/1.3", 4K/100fps, D-Log M — подходит для профессионального грейда.',
    },
    {
        title: 'Cinematic aerials (DJI Air 3S)',
        subtitle: 'Продукт 2',
        text:
            'Плавные установочные и проходные кадры с воздуха. Двойная камера: 1" wide + 70mm medium tele. Формат для рекламы, недвижимости и продакшна.',
        specs: '4K120, 4K60 HDR, 10-bit D-Log M — материал для профессионального монтажа и цветокоррекции.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Ограниченное окно света',
        text: 'Нужен вау-кадр, но боюсь что не попадём с первого дубля — окно света и локация ограничены.',
    },
    {
        title: 'Нужна съёмка внутри пространства',
        text: 'Обычный дрон снимает только снаружи. Мне нужно показать пространство изнутри — за одним непрерывным кадром.',
    },
    {
        title: 'Контент не адаптирован под соцсети',
        text: 'Хочу контент под Reels и TikTok, а не просто красивое видео которое некуда поставить.',
    },
    {
        title: 'Риски по разрешениям',
        text: 'Не знаю можно ли летать в моей локации — боюсь проблем с разрешениями.',
    },
    {
        title: 'Нужен локальный FPV-оператор',
        text:
            'Иностранный продакшн ищет локального FPV-оператора в Грузии с правильным workflow — без неприятных сюрпризов на площадке.',
    },
    {
        title: 'Съёмка без остановки работы',
        text:
            'Хочу показать ресторан/отель атмосферно, но не понимаю как это организовать без остановки работы заведения.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Один непрерывный кадр от входа до финала',
        text: 'FPV-пролёт заменяет длинный монтаж — пространство читается за 30 секунд.',
    },
    {
        title: 'Планируем траекторию до съёмки',
        text: 'Shot-list и pre-flight walkthrough. Ключевой пролёт — минимум 2–3 дубля. Вы знаете результат до монтажа.',
    },
    {
        title: 'Контент готов под все платформы',
        text: 'Вертикальные Reels, горизонтальный hero и короткие hook-клипы — всё нарезаем сразу.',
    },
    {
        title: 'Работаем в рамках правил GCAA',
        text:
            'Для сложных зон и съёмок рядом с событиями берём согласование на себя. Если локация запрещена — предлагаем альтернативный кадр.',
    },
    {
        title: 'Понятен для международного продакшна',
        text:
            'Работаем по шот-листу режиссёра, отдаём исходники, общаемся на RU и EN. Понимаем контекст Film in Georgia.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ ПАКЕТ',
        subtitle: 'Social / Small Business',
        items: [
            'До 1 часа на локации',
            '1 hero-ролик 30–45 сек (вертикальный)',
            '5–8 коротких клипов 6–10 сек для Reels/TikTok',
            'Базовая стабилизация, цвет, музыка',
            'Доставка: 48 часов (Google Drive / Telegram)',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Real Estate / Hotels',
        items: [
            'До 2 часов на объекте',
            'FPV-пролёт внутри + 1–2 кадра с Air 3S снаружи',
            'Hero-ролик 60–90 сек (horizontal или mixed)',
            '10–15 вертикальных клипов под соцсети',
            '5–10 аэрофото по запросу',
            'Доставка: 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН-ПАКЕТ',
        subtitle: 'Agencies / Film',
        items: [
            'Half-day или full-day по шот-листу режиссёра',
            'Pre-production: бриф, рекогносцировка, safety-план',
            'Несколько дублей ключевых пролётов',
            'Исходники (RAW) — включены',
            'Line-item смета под проект',
            'Коммуникация RU/EN',
        ],
    },
];

const allPackagesItems: string[] = [
    'Оригиналы без водяного знака',
    'Право на коммерческое использование',
    '1 итерация правок по монтажу',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Рестораны и бары',
        pain: 'Показать атмосферу и зонирование быстро, не мешая гостям.',
        solution: 'Съёмка в тихие часы, маршрут «вход → бар → зал → подача».',
        deliverables: '30–45 сек вертикальный ролик + 5–8 клипов по зонам.',
    },
    {
        title: 'Отели и апарт-отели',
        pain: 'Показать номер, лобби и территорию за 30 секунд для Booking.',
        solution: 'FPV «лобби → коридор → номер → вид» + 2–3 внешних кадра.',
        deliverables: '45–60 сек hero + 3 версии 15 сек под OTA/соцсети.',
    },
    {
        title: 'Недвижимость и девелоперы',
        pain: 'Покупатель хочет «почувствовать» квартиру, а не смотреть слайды.',
        solution: 'FPV walkthrough + установочные кадры фасада и локации.',
        deliverables: '60–90 сек тур + 10–15 вертикальных клипов.',
    },
    {
        title: 'Ивент-площадки и клубы',
        pain: 'Нужно зрелищно показать площадку до мероприятия.',
        solution: 'Staged-пролёт до открытия, без публики — без ограничений GCAA.',
        deliverables: 'Aftermovie 45–90 сек + 10–20 клипов «под ночь».',
    },
    {
        title: 'Рекламные агентства и продакшн',
        pain: 'Нужен конкретный кадр по шот-листу, предсказуемо и без задержек.',
        solution: 'Продакшн-workflow, 2–3 дубля ключевого пролёта, исходники.',
        deliverables: 'Исходники + смонтированный hero по ТЗ.',
    },
    {
        title: 'Иностранные продакшны в Грузии',
        pain: 'Нужен локальный FPV-оператор который понимает permits и workflow.',
        solution:
            'Знаем правила GCAA, работаем как local drone unit, RU/EN коммуникация, понимаем контекст Film in Georgia (20–25% rebate).',
        deliverables: 'По шот-листу, line-item смета, исходники.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое FPV-съёмка и чем она отличается от обычного дрона?',
        answer:
            'FPV (First Person View) — это съёмка на манёвренном маленьком дроне, который летает быстро и точно: пролетает сквозь дверные проёмы, вдоль стен, по сложным траекториям внутри помещений. Обычный дрон (как DJI Air 3S) летает плавно и снимает стабильные панорамы снаружи. Мы используем оба — FPV для динамики и атмосферы, кино-дрон для установочных кадров.',
    },
    {
        question: 'Можно ли снимать FPV внутри помещения?',
        answer:
            'Да. FPV-дрон DJI Avata 2 специально рассчитан на съёмку в закрытых пространствах — рестораны, лобби отелей, шоурумы, офисы. Перед съёмкой делаем walkthrough и согласуем маршрут.',
    },
    {
        question: 'Законно ли летать FPV-дроном в Тбилиси?',
        answer:
            'Да, при соблюдении правил GCAA. Наш дрон зарегистрирован. Для съёмок внутри и на закрытых локациях специальных разрешений обычно не требуется. Для съёмок рядом с публичными событиями и в зонах ограничений — решаем это на этапе брифа.',
    },
    {
        question: 'Можно ли снимать при работающих гостях или посетителях?',
        answer:
            'Рекомендуем снимать в тихие часы — до открытия или между сменами. Это даёт чистый кадр и не мешает работе заведения. Для постановочных пролётов на ивентах — снимаем до прихода гостей или в технические перерывы.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer: 'Для наружной съёмки — ветер до 10–12 м/с, без осадков. Внутренняя FPV-съёмка — не зависит от погоды совсем.',
    },
    {
        question: 'Что значит «продакшн-подход»?',
        answer:
            'Это значит что мы не приезжаем и просто «летаем». Мы сначала изучаем задачу: нужный кадр, маршрут, условия локации, ограничения. Снимаем по плану с дублями ключевых пролётов. Отдаём смонтированный результат под ваши платформы в оговорённые сроки.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит FPV-съёмка в Тбилиси?',
        answer:
            'Базовый пакет для ресторана или отеля — от 400 ₾. Стандартный пакет для недвижимости — от 700 ₾. Продакшн-пакет (half-day, по шот-листу) — от 1 500 ₾. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Что входит в базовый результат?',
        answer:
            '1 hero-ролик 30–45 сек (вертикальный) + 5–8 коротких клипов 6–10 сек для Reels. Базовая стабилизация, цвет, музыка. Доставка через Google Drive или Telegram за 48 часов.',
    },
    {
        question: 'Можно получить исходники (RAW)?',
        answer:
            'Да, в продакшн-пакете исходники включены по умолчанию. В базовом и стандартном пакете — по запросу, уточняем на этапе брифа.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Базовый пакет — 1–2 часа на локации. Стандарт — до 3 часов. Продакшн (half-day) — 4–5 часов по шот-листу. Монтаж и доставка — 48–72 часа после съёмки.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Сигнахи, Кутаиси и другие локации — по договорённости. Стоимость выезда рассчитывается индивидуально.',
    },
    {
        question: 'Как вы работаете с иностранными продакшнами?',
        answer:
            'Коммуникация на RU и EN. Работаем по шот-листу режиссёра, даём line-item смету, отдаём исходники. Знаем правила GCAA и локальные особенности съёмок в Тбилиси. Понимаем контекст Film in Georgia (20–25% rebate на расходы в Грузии).',
    },
    {
        question: 'Можно ли снять FPV на свадьбе или мероприятии с людьми?',
        answer:
            'По правилам GCAA полёты БПЛА рядом с публичными событиями требуют специального согласования. Поэтому для ивентов рекомендуем staged-формат: пролёт площадки до прихода гостей или в технический перерыв. Это даёт чистый кадр и полную безопасность без бюрократических рисков.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Два дрона — два типа съёмки под одну задачу',
        text:
            'DJI Avata 2 для FPV-пролётов внутри и снаружи. DJI Air 3S для кинематографичных установочных кадров. Не выбираете между динамикой и стабильностью — берёте оба.',
    },
    {
        title: 'Продакшн-подход, не «просто полёт»',
        text: 'Бриф → план траектории → дубли → монтаж под платформы. Вы знаете что получите ещё до съёмки.',
    },
    {
        title: 'Единственные в Грузии с нишевой FPV-страницей',
        text: 'Локальные операторы предлагают «дрон для всего». Мы специализируемся — и это видно в структуре предложения.',
    },
    {
        title: 'Работаем в рамках GCAA',
        text: 'Знаем ограничения по зонам. Для сложных локаций берём согласование на себя.',
    },
    {
        title: 'Понятны для международного продакшна',
        text: 'RU/EN коммуникация, line-item смета, исходники, знание Film in Georgia. Работаем как local drone unit.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 400 ₾',
        subtitle: 'Для ресторанов, отелей, малого бизнеса',
        items: [
            'До 1 часа на локации (FPV Avata 2)',
            'Hero-ролик 30–45 сек (вертикальный)',
            '5–8 клипов 6–10 сек для Reels/TikTok',
            'Стабилизация, цвет, музыка',
            'Доставка за 48 часов',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 700 ₾',
        subtitle: 'Для недвижимости, отелей, девелоперов',
        items: [
            'До 2–3 часов (FPV внутри + Air 3S снаружи)',
            'Hero-ролик 60–90 сек (horizontal + vertical)',
            '10–15 клипов под соцсети',
            '5–10 аэрофото по запросу',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 1 500 ₾',
        subtitle: 'Для агентств, продакшнов, иностранных команд',
        items: [
            'Half-day по шот-листу режиссёра',
            'Pre-production: бриф, рекогносцировка, safety-план',
            'Несколько дублей ключевых пролётов',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Описываете задачу: локация, формат, для каких платформ контент. Расчёт и предложение — в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Согласуем маршрут, тайминг, ограничения локации. Для сложных зон — проверяем разрешения заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Работаем по согласованному сценарию. Ключевой пролёт — 2–3 дубля. 1–3 часа на локации.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–6)',
        text: 'Стабилизация, цвет, нарезка под платформы. Google Drive или Telegram. Готово к публикации.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Кинематографичные aerial-кадры для продажи квартир, домов, апартаментов и ЖК.',
    },
    {
        title: 'Дрон-мониторинг строительства',
        href: '/drone-construction-monitoring',
        text: 'Регулярные выезды и отчётность по объектам девелоперов, инвесторов и генподрядчиков.',
    },
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для удалённых показов объектов и презентации пространств.',
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
    name: 'FPV-съёмка и кинематографические дроны в Тбилиси',
    description:
        'FPV-пролёты и кинодрон-съёмка для ресторанов, отелей, недвижимости и продакшна в Тбилиси и Грузии. DJI Avata 2 + DJI Air 3S.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Country',
        name: 'Georgia',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '400',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'FPV-съёмка, кинодрон-съёмка, 360° туры и коммерческий видеопродакшн в Тбилиси и по Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breus.media/drone-fpv-cinema',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'FPV-съёмка и кинематографические дроны в Тбилиси | Breus Media',
    description:
        'FPV-пролёты и кинодроны для рекламы, ресторанов, отелей и продакшна в Тбилиси. DJI Avata 2 + Air 3S. От 400 ₾. Результат за 48 часов.',
    alternates: {
        canonical: 'https://breus.media/drone-fpv-cinema',
    },
};

export default function DroneFpvCinemaPage() {
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

            <DebugWrapper id={384100} label="Hero Section">
                <section
                    id="drone-fpv-cinema-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        FPV + Cinematic Aerials
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Avata 2 + DJI Air 3S
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    FPV-съёмка и кинематографичные аэрокадры в Тбилиси и по Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    FPV Drone Filming &amp; Cinematic Aerials in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Динамичные FPV-пролёты для пространств и событий — и чистые кинематографичные кадры для
                                    рекламы и продакшна. Продакшн-подход: бриф → план траектории → безопасная съёмка →
                                    готовые версии под ваши платформы.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка на одной локации — 1–3 часа. Монтаж — 48 часов.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по результату</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 400 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                                            Базовый пакет для социальных сетей и локального бизнеса.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Монтаж</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">2–3 дубля</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Ключевой пролёт</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>FPV внутри и снаружи пространства</li>
                                        <li>Кинематографичные aerial-кадры на Air 3S</li>
                                        <li>Готовые версии под Reels, TikTok и hero-размещение</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384120} label="What Is It Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What Is It: два продукта в одной съёмке</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В зависимости от задачи комбинируем динамичный FPV flythrough и кинематографичные
                                установочные кадры. Получаете и вау-эффект, и чистую коммерческую подачу локации.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-2">
                            {productCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{card.subtitle}</p>
                                    <h3 className="mt-3 text-2xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/74">{card.text}</p>
                                    <p className="mt-4 rounded-[12px] border border-[#FFD23F]/30 bg-[#121212] px-4 py-3 text-sm leading-relaxed text-white/84">
                                        {card.specs}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">С какими проблемами к нам приходят</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Это частые запросы от локального бизнеса, агентств и продакшн-команд перед FPV-съёмкой в
                                Тбилиси и по Грузии.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что решает наш формат</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Структурируем работу так, чтобы вы получили прогнозируемый результат в сжатые сроки без
                                лишних рисков на площадке.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Есть локация или проект в Тбилиси? Обсудим сценарий и пришлём расчёт за 2 часа.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить проект
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Deliverables и пакеты</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От social-задач до полноценного production day: выбираем пакет по глубине задач и формату
                                финальной выдачи.
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

            <DebugWrapper id={384220} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и use cases</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже шесть сценариев, где FPV и cinematic aerials закрывают конкретные коммерческие задачи.
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

            <DebugWrapper id={384240} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/30 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Полёты в Грузии — как мы работаем с правилами</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Максимальная высота —
                                120 м. Дрон зарегистрирован.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для съёмок рядом с публичными мероприятиями и в чувствительных зонах (аэропорт,
                                госучреждения) заранее обсуждаем формат и берём на себя подготовку документации — risk
                                assessment, маршруты, споттер при необходимости.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Принцип: если локация ограничена — предлагаем безопасный альтернативный кадр. Ваш проект не
                                срывается из-за правил.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384260} label="International Production Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Снимаете в Грузии? Мы — ваш local drone unit.</h2>
                            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-white/78 md:text-base">
                                <li>Двуязычная команда: RU и EN.</li>
                                <li>Знаем ограничения по зонам и форматам съёмки в Тбилиси.</li>
                                <li>
                                    Понимаем контекст Film in Georgia: официальная программа даёт 20–25% cash rebate на
                                    квалифицированные расходы в Грузии.
                                </li>
                                <li>Работаем по шот-листу режиссёра, отдаём исходники, даём line-item смету.</li>
                                <li>
                                    Грузия = горы, старый город, современная архитектура, чёрное море — всё в одной
                                    стране, за 1 съёмочный день.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры FPV и cinematic кадров</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. При необходимости пришлём подборку релевантных
                                кейсов под вашу нишу и формат площадки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Опишите задачу: ниша, длительность ролика, платформа публикации. Подберём примеры и
                                предложим съёмочный сценарий.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого знакомства с FPV-съёмкой" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={384320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={384340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Наша задача — дать вам рабочий результат для бизнеса и продакшна, а не просто красивый
                                облёт в вакууме.
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

            <DebugWrapper id={384360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет от 400 ₾, стандарт от 700 ₾ и продакшн-пакет от 1 500 ₾ — под разные
                                объёмы задач и типы проектов.
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

            <DebugWrapper id={384380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Нужен расчёт под вашу локацию или проект?
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

            <DebugWrapper id={384400} label="Process Note Section">
                <ProcessNote text="Съёмка на одной локации — 1–3 часа. Монтаж — 48 часов." />
            </DebugWrapper>

            <DebugWrapper id={384420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Работаем по чёткой последовательности: от брифа до готовых монтажных версий под ваши
                                платформы.
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

            <DebugWrapper id={384440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если нужно усилить результат, комбинируем FPV с другими форматами визуального продакшна.
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

            <DebugWrapper id={384460} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите нишу и задачу, а мы предложим траекторию съёмки и расчёт в течение 2
                                        часов.
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
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип проекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Ресторан / Бар</option>
                                                <option>Отель / Апарт-отель</option>
                                                <option>Недвижимость / Девелопмент</option>
                                                <option>Ивент-площадка / Клуб</option>
                                                <option>Агентство / Продакшн</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Формат съёмки</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>FPV flythrough</option>
                                                <option>Cinematic aerials</option>
                                                <option>Комбинированный (FPV + Air 3S)</option>
                                                <option>Нужна консультация</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Локация и сроки</label>
                                        <input
                                            type="text"
                                            placeholder="Тбилиси / регион, желаемая дата и срок публикации"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Задача, платформа публикации, референсы, ограничения площадки"
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

            <DebugWrapper id={384480} label="Footer Section">
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
