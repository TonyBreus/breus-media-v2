'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';

// ─── FAQ DATA (page-level, for schema) ────────────────────────────────────────

type FaqItem = { question: string; answer: string };

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое бренд-видео с дрона и зачем это нужно бизнесу?',
        answer:
            'Бренд-видео с дрона — это кинематографический ролик, в котором сочетаются воздушные и наземные кадры. Дрон даёт масштаб и контекст: видно, где расположен объект, как выглядит территория, какой масштаб у проекта. Это убирает обезличенность контента и помогает клиенту понять ценность до того, как он задаст первый вопрос.',
    },
    {
        question: 'Чем дрон-кадры отличаются от обычной видеосъёмки?',
        answer:
            'Наземная съёмка показывает интерьер и детали. Дрон показывает локацию, территорию, масштаб и окружение. Когда они объединены в один ролик — зритель получает полное визуальное представление об объекте, а не набор разрозненных фрагментов.',
    },
    {
        question: 'Можно ли летать с дроном в черте Тбилиси?',
        answer:
            'Да. Для коммерческих полётов мы работаем в соответствии с требованиями Агентства гражданской авиации Грузии (GCAA). Максимальная высота — 120 м. Специальные зоны рядом с аэропортами и государственными объектами требуют дополнительного согласования.',
    },
    {
        question: 'Для каких ниш бренд-видео с дрона работает лучше всего?',
        answer:
            'Отели, шато и резорты — показывают территорию и атмосферу. Девелоперы — продают образ жизни до завершения строительства. Рестораны и бары с открытыми пространствами — передают локацию и настроение. Виноделы — Кахетия и горные локации выглядят в воздухе иначе. Автосалоны — динамичный облёт и движение. IT-компании — офис и масштаб команды.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'Дрон летает при ветре до 10–12 м/с, без осадков. Если условия не позволяют — переносим съёмку без доплат. Обычно это 1 рабочий день.',
    },
    {
        question: 'Сколько длится съёмочный день?',
        answer:
            'В зависимости от пакета — от 2 до полного дня. На дрон уходит 1–2 часа, остальное время — наземная съёмка локации, команды и деталей. Монтаж — 3–5 рабочих дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит бренд-видео с дроном в Тбилиси?',
        answer:
            'Базовый пакет — от 650 ₾ (1–2 часа съёмки, дрон + наземная, финальный ролик до 60 сек). Стандартный пакет — от 1 200 ₾ (полдня, ролик 60–90 сек, две вертикальные версии для Reels/Stories). Премиум — от 2 200 ₾ (полный день, сценарий, несколько роликов, FPV по запросу, цветокоррекция DaVinci). Все цены в грузинских лари (₾).',
    },
    {
        question: 'В каком формате я получу материалы?',
        answer:
            'Финальные ролики — MP4 (H.264 и H.265), оптимизированные под YouTube, Instagram, сайт. Вертикальные версии 9:16 для Stories/Reels входят в Стандарт и Премиум. Цветокоррекция и мастер-исходники — в Премиуме. Всё передаётся через Google Drive или Telegram.',
    },
    {
        question: 'Сколько времени от съёмки до готового ролика?',
        answer:
            'Стандартный срок монтажа — 3–5 рабочих дней после съёмочного дня. Срочный монтаж — за дополнительную оплату.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Кахетия, Батуми, Казбеги, другие регионы — по договорённости. Выезд и логистика рассчитываются отдельно при согласовании.',
    },
    {
        question: 'Что если у нас уже есть наземные съёмщики — вы можете снять только дрон?',
        answer:
            'Да. Можно заказать только аэросъёмку без монтажа — передаём RAW-материал или обработанный footage под вашу монтажную бригаду.',
    },
    {
        question: 'Включён ли сценарий в пакет?',
        answer:
            'В базовом пакете сценарий не предусмотрен. В Стандарте — краткий план съёмки (shot list). В Премиуме — полная pre-production: концепция ролика, раскадровка, музыкальный референс.',
    },
    {
        question: 'Нужны ли разрешения на полёт?',
        answer:
            'Да. Для коммерческих полётов в Грузии требуется регистрация дрона в GCAA. Мы работаем в полном соответствии с регуляторными требованиями. Если объект находится рядом со спецзоной — запрашиваем дополнительное согласование заранее.',
    },
];

// ─── PRICING DATA ─────────────────────────────────────────────────────────────

const pricingPackages = [
    {
        name: 'Базовый',
        price: 'от 650 ₾',
        duration: '1–2 часа съёмки',
        deliveryDays: '3–4 рабочих дня',
        popular: false,
        items: [
            'Аэросъёмка дроном (DJI Air 3S)',
            'Наземная съёмка на смартфон/стабилизатор',
            'Финальный ролик до 60 сек',
            'Цветокоррекция',
            'Передача через Google Drive',
        ],
        addons: ['Вертикальная версия 9:16 +150 ₾', 'Срочный монтаж +200 ₾'],
    },
    {
        name: 'Стандарт',
        price: 'от 1 200 ₾',
        duration: 'полдня (4–5 часов)',
        deliveryDays: '4–5 рабочих дней',
        popular: true,
        items: [
            'Аэросъёмка дроном (DJI Air 3S)',
            'Наземная съёмка + детали',
            'Ролик 60–90 сек',
            '2 вертикальные версии для Reels/Stories',
            'Shot list / краткий план съёмки',
            'Цветокоррекция и саунд-дизайн',
        ],
        addons: ['FPV-съёмка (DJI Avata 2) +400 ₾', '360° тур объекта +от 900 ₾'],
    },
    {
        name: 'Премиум',
        price: 'от 2 200 ₾',
        duration: 'полный день + pre-production',
        deliveryDays: '5–7 рабочих дней',
        popular: false,
        items: [
            'Pre-production: концепция + раскадровка',
            'Полный съёмочный день',
            'Аэросъёмка Air 3S + FPV Avata 2 по запросу',
            'Наземная съёмка + команда/интерьер/детали',
            'Основной ролик + Reels-версии',
            'Цветокоррекция DaVinci Resolve',
            'Мастер-исходники',
        ],
        addons: [
            'Insta360 X5 / 360° тур +от 900 ₾',
            'Озвучка / диктор +по запросу',
            'Выезд за пределы Тбилиси +по договорённости',
        ],
    },
];

const addonPricing = [
    { label: 'Вертикальная версия 9:16 (Reels)', price: '150 ₾' },
    { label: 'Срочный монтаж (1–2 дня)', price: '200 ₾' },
    { label: 'FPV-съёмка (DJI Avata 2)', price: 'от 400 ₾' },
    { label: '360° виртуальный тур объекта', price: 'от 900 ₾' },
    { label: 'Выезд в регионы Грузии', price: 'по договорённости' },
    { label: 'RAW footage без монтажа', price: 'по запросу' },
];

// ─── RELATED SERVICES DATA ────────────────────────────────────────────────────

const relatedServices = [
    {
        title: 'Аэросъёмка отелей',
        text: 'Воздушная съёмка территории, фасадов и видов для продвижения отеля и Booking-листинга.',
        href: '/drone-services/drone-hotels-tourism',
        ready: true,
    },
    {
        title: 'Аэросъёмка недвижимости',
        text: 'Дрон-туры для ЖК, квартир и земельных участков — для застройщиков и агентств.',
        href: '/drone-services/drone-real-estate',
        ready: true,
    },
    {
        title: 'FPV-съёмка',
        text: 'Динамичные пролёты через пространство для кино, рекламы и имиджевых роликов.',
        href: '/drone-services/drone-fpv-cinema',
        ready: true,
    },
    {
        title: '360° тур для бизнеса',
        text: 'Интерактивный виртуальный тур офиса, шоурума или объекта.',
        href: '#contact',
        ready: false,
        soon: true,
    },
];

// ─── FAQ SCHEMA (JSON-LD) ─────────────────────────────────────────────────────

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
    name: 'Бренд-видео и рекламная аэросъёмка с дрона для бизнеса',
    description:
        'Создание бренд-видео и рекламных роликов с дрон-съёмкой для бизнеса в Тбилиси и Грузии. Кинематографичная аэросъёмка DJI Air 3S и FPV Avata 2 в сочетании с наземной съёмкой.',
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
        '@type': 'City',
        name: 'Тбилиси',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '650',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, 360° туры, промо-видео для бизнеса в Тбилиси.',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com',
    priceRange: '₾₾',
};

export function DroneBrandVideoPageClient() {
    const [openBeginner, setOpenBeginner] = useState<number | null>(null);
    const [openCommercial, setOpenCommercial] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
    const [formSent, setFormSent] = useState(false);
    const contactRef = useRef<HTMLElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire to actual form handler (same pattern as existing L3 pages)
        setFormSent(true);
    };

    return (
        <>
            {/* JSON-LD schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Style block — scroll progress + clean debug */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            .clean-debug-overlays [data-debug-badge] { display: none !important; }
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
            @keyframes bounce-arrow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(8px); }
            }
            .bounce-arrow { animation: bounce-arrow 1.6s ease-in-out infinite; }
          `,
                }}
            />

            <DronePageProgress />
            <SmartHeader
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
                {/* ── B-01 HERO ────────────────────────────────────────────────────── */}
                <section
                    id="drone-restaurants-hero"
                    className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111]" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                'radial-gradient(ellipse 60% 40% at 70% 30%, #D4A01730 0%, transparent 70%)',
                        }}
                    />

                    <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
                        <div className="max-w-3xl">
                            {/* Breadcrumb */}
                            <nav className="mb-6 flex items-center gap-2 text-xs text-white/40">
                                <Link href="/" className="transition-colors hover:text-white/60">
                                    Главная
                                </Link>
                                <span>/</span>
                                <Link href="/drone-services" className="transition-colors hover:text-white/60">
                                    Аэросъёмка
                                </Link>
                                <span>/</span>
                                <span className="text-white/60">Бренд-видео и реклама</span>
                            </nav>

                            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A017]">
                                Аэросъёмка · Бренд-видео · Тбилиси
                            </p>

                            <h1 className="mb-6 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
                                Бренд-видео и рекламная <span className="text-[#D4A017]">аэросъёмка</span> для бизнеса в
                                Тбилиси
                            </h1>

                            <p className="mb-4 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                                Снимаем кинематографичные ролики, где дрон-кадры дают масштаб, а наземная съёмка — детали
                                и атмосферу. Один ролик, который объясняет ваш бизнес без слов.
                            </p>

                            <p className="mb-10 text-sm text-white/40">
                                DJI Air 3S · DJI Avata 2 (FPV) · Тбилиси и вся Грузия · от 650 ₾
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FFD23F]"
                                >
                                    Обсудить проект
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-8 py-4 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Arrow — обязательный вызов в JSX */}
                    <ScrollArrow />
                </section>

                {/* ── B-02 ЧТО ЭТО ─────────────────────────────────────────────────── */}
                <section id="what-is" className="border-t border-[#1a1a1a] bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Что это и зачем это вашему бизнесу</h2>
                            <p className="mb-6 text-lg leading-relaxed text-white/70">
                                Бренд-видео с дрона — это не просто «красивые кадры с воздуха». Это ролик, в котором дрон
                                показывает, <em>где вы находитесь и каков масштаб</em>, а наземная съёмка —{' '}
                                <em>атмосферу, людей и детали</em>. Вместе они дают зрителю полное представление о бизнесе
                                за 30–90 секунд.
                            </p>
                            <p className="mb-6 leading-relaxed text-white/60">
                                Такой контент работает на сайте, в Instagram, на YouTube-канале, в презентациях для
                                партнёров и инвесторов. Один ролик снимает большинство первичных вопросов потенциального
                                клиента: «А где это? А как там выглядит? А они серьёзная компания?»
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                                {[
                                    {
                                        label: 'Бренд-фильм',
                                        text: 'История компании, ценности, масштаб. Работает годами.',
                                    },
                                    {
                                        label: 'Рекламный ролик',
                                        text: '15–60 сек. Конкретное предложение, конкретное действие.',
                                    },
                                    {
                                        label: 'Промо-ролик',
                                        text: 'Открытие, сезон, событие. Энергия + локация.',
                                    },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-[12px] border border-[#2a2a2a] bg-[#111] p-5">
                                        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#D4A017]">
                                            {item.label}
                                        </p>
                                        <p className="text-sm leading-relaxed text-white/60">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── B-03 КОМУ ПОДХОДИТ ────────────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Кому подходит эта услуга</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Бренд-видео с дроном наиболее ценно там, где локация, масштаб или атмосфера — часть продукта.
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: 'Отели и резорты',
                                    text: 'Территория, вид, атмосфера — всё то, за что платят гости, нужно показать до бронирования.',
                                },
                                {
                                    title: 'Девелоперы и ЖК',
                                    text: 'Продать образ жизни вокруг объекта, который ещё строится — без рендеров, с реальными кадрами.',
                                },
                                {
                                    title: 'Рестораны и бары',
                                    text: 'Открытые террасы, вид, концепция — именно это выбирают гости, а не меню.',
                                },
                                {
                                    title: 'Виноделы и шато',
                                    text: 'Кахетия с воздуха — это отдельный продукт. История места, которую не передать фото.',
                                },
                                {
                                    title: 'Автосалоны и автобизнес',
                                    text: 'Динамичная съёмка авто на площадке и в движении. Клиент хочет видеть, как машина выглядит в жизни.',
                                },
                                {
                                    title: 'IT-компании и стартапы',
                                    text: 'Офис, команда, масштаб проекта — для привлечения партнёров, клиентов и сотрудников.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-[12px] border border-[#222] bg-[#0f0f0f] p-5 transition-colors hover:border-[#D4A017]/30"
                                >
                                    <p className="mb-2 font-semibold text-white">{item.title}</p>
                                    <p className="text-sm leading-relaxed text-white/55">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-05 БОЛИ ────────────────────────────────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Как это выглядит без видео</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Это не абстрактные проблемы — это то, что теряет бизнес каждую неделю.
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    pain: 'Сайт есть, но объект не «читается»',
                                    desc: 'Потенциальный клиент открывает страницу и не понимает масштаба. Пять разных фото не складываются в картину.',
                                },
                                {
                                    pain: 'Контент снят, но не продаёт',
                                    desc: 'Несколько статичных фото или телефонное видео передают хаос, а не ценность. Цена выглядит завышенной.',
                                },
                                {
                                    pain: 'Конкурент запустил ролик — вас не замечают',
                                    desc: 'В Instagram или на Booking есть компании с похожим предложением, но их видео показывает больше — клиент идёт туда.',
                                },
                                {
                                    pain: 'Нечего показать партнёру или инвестору',
                                    desc: 'При переговорах нужно что-то визуальное. «Приедьте и посмотрите» не работает на международном рынке.',
                                },
                            ].map((item) => (
                                <div key={item.pain} className="rounded-[12px] border border-[#2a2a2a] bg-[#111] p-6">
                                    <p className="mb-2 font-semibold text-white">— {item.pain}</p>
                                    <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-06/07 КАК ПОМОГАЕТ ─────────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            <div>
                                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#D4A017]">
                                    Зарабатываете больше
                                </p>
                                <h2 className="mb-6 text-2xl font-bold">Как бренд-видео увеличивает выручку</h2>
                                <ul className="space-y-4 text-sm leading-relaxed text-white/65">
                                    {[
                                        'Клиент видит объект до контакта — меньше вопросов, выше конверсия',
                                        'Визуальный статус позволяет держать ценник: клиент не торгуется, он хочет "вот это"',
                                        'Ролик работает одновременно на сайте, Booking, Instagram, YouTube — один раз снятый',
                                        'Международная аудитория принимает решение дистанционно — без визита',
                                    ].map((t) => (
                                        <li key={t} className="flex gap-3">
                                            <span className="mt-0.5 text-[#D4A017]">✓</span>
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#D4A017]">Не теряете</p>
                                <h2 className="mb-6 text-2xl font-bold">Что уходит вместе с визуальным хаосом</h2>
                                <ul className="space-y-4 text-sm leading-relaxed text-white/65">
                                    {[
                                        'Клиенты, которые ушли к конкуренту с красивым роликом',
                                        'Недоверие: «раз видео плохое — может, и бизнес такой же»',
                                        'Время команды на объяснения того, что должно быть видно',
                                        'Переговоры без визуальной поддержки — сложнее и дольше',
                                    ].map((t) => (
                                        <li key={t} className="flex gap-3">
                                            <span className="mt-0.5 text-[#D4A017]">→</span>
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MID CTA #1 ────────────────────────────────────────────────────── */}
                <section className="border-y border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Есть объект в Тбилиси или регионе? Расскажите — покажем, какой формат ролика подойдёт под
                                вашу задачу.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить проект
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── B-08 DELIVERABLES ─────────────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Что входит в съёмку</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Чёткий список того, что вы получите — без туманных обещаний.
                        </p>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="rounded-[14px] border border-[#2a2a2a] bg-[#0f0f0f] p-6">
                                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#D4A017]">
                                    Съёмочный день
                                </p>
                                <ul className="space-y-3 text-sm text-white/65">
                                    {[
                                        'Аэросъёмка DJI Air 3S — облёты, ракурсы, движение',
                                        'FPV-пролёты DJI Avata 2 (по запросу или в Премиуме)',
                                        'Наземная съёмка — интерьер, команда, детали, атмосфера',
                                        'Работа со стабилизатором — плавные движущиеся кадры',
                                        'Shot list / план кадров согласован заранее',
                                    ].map((t) => (
                                        <li key={t} className="flex gap-3">
                                            <span className="text-[#D4A017]">✓</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-[14px] border border-[#2a2a2a] bg-[#0f0f0f] p-6">
                                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#D4A017]">
                                    Финальный результат
                                </p>
                                <ul className="space-y-3 text-sm text-white/65">
                                    {[
                                        'Смонтированный ролик MP4 (H.264/H.265)',
                                        'Цветокоррекция и саунд-дизайн',
                                        'Вертикальные версии 9:16 для Reels/Stories (Стандарт+)',
                                        'Мастер-исходники (Премиум)',
                                        'Доставка — Google Drive или Telegram',
                                        'Срок: 3–5 рабочих дней после съёмочного дня',
                                    ].map((t) => (
                                        <li key={t} className="flex gap-3">
                                            <span className="text-[#D4A017]">✓</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── B-11/12 USE CASES + LOCAL CONTEXT ───────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Примеры задач в Тбилиси и Грузии</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">Сценарии, с которыми к нам приходят чаще всего.</p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    scenario: 'Отель на старом городе',
                                    task: 'Ролик для Instagram и Booking. Дрон показывает Нарикалу и Куру рядом. Гость понимает, почему за этот вид стоит платить.',
                                },
                                {
                                    scenario: 'Шато в Кахетии',
                                    task: 'Виноградники, закат, подвал, команда. Ролик для экспорта и туристического трафика из ЕС и США.',
                                },
                                {
                                    scenario: 'Новый ЖК в Ваке',
                                    task: 'Дрон над строящимся объектом + рендер-наложение. Инвестор из Москвы покупает, не приезжая в Тбилиси.',
                                },
                                {
                                    scenario: 'Ресторан с террасой',
                                    task: 'FPV-пролёт через зал + дрон над Мтацминдой. Контент для открытия и сезонных кампаний.',
                                },
                                {
                                    scenario: 'Автосалон в Исани',
                                    task: 'Динамичный облёт автомобиля на площадке + съёмка в движении. Видео для площадки и платной рекламы.',
                                },
                                {
                                    scenario: 'IT-компания в Сабуртало',
                                    task: 'Офис, команда, атмосфера. Для сайта, LinkedIn и HR-кампаний по релокации сотрудников.',
                                },
                            ].map((item) => (
                                <div key={item.scenario} className="rounded-[12px] border border-[#222] bg-[#111] p-5">
                                    <p className="mb-2 text-sm font-semibold text-white">{item.scenario}</p>
                                    <p className="text-sm leading-relaxed text-white/55">{item.task}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-13 EXAMPLES / PORTFOLIO ────────────────────────────────────── */}
                <section id="examples" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Примеры работ</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Портфолио обновляется. Ниже — концептуальные примеры типичных форматов для ниш.
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {[
                                {
                                    label: 'Отель · 60 сек',
                                    desc: 'Дрон над территорией → FPV через лобби → терраса с видом на город → вечерний shot.',
                                    tag: 'Hospitality',
                                },
                                {
                                    label: 'Жилой комплекс · 90 сек',
                                    desc: 'Дрон над строящимся объектом → общий ракурс района → инфраструктура → CTA.',
                                    tag: 'Real Estate',
                                },
                                {
                                    label: 'Шато · 90 сек',
                                    desc: 'Виноградники с воздуха → подвал → дегустационный зал → команда → закатный shot.',
                                    tag: 'Wine & Tourism',
                                },
                            ].map((item) => (
                                <div key={item.label} className="overflow-hidden rounded-[14px] border border-[#2a2a2a] bg-[#0f0f0f]">
                                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#222]">
                                        <div className="text-center">
                                            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A017]/40">
                                                <svg className="h-5 w-5 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                </svg>
                                            </div>
                                            <p className="text-xs text-white/30">скоро</p>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="mb-1 text-xs uppercase tracking-widest text-[#D4A017]">{item.tag}</p>
                                        <p className="mb-2 font-semibold text-white">{item.label}</p>
                                        <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-14 SOCIAL PROOF / MARKET VALIDATION ────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-10 text-2xl font-bold md:text-3xl">Почему видео работает — цифры</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    stat: '78%',
                                    label: 'маркетологов считают дрон-видео лучшим способом повысить узнаваемость бренда',
                                },
                                {
                                    stat: '×2–3',
                                    label: 'рост времени на странице сайта при наличии видео по сравнению со статичным контентом',
                                },
                                {
                                    stat: '+42%',
                                    label: 'вовлечённость аудитории в постах с дрон-кадрами по сравнению с обычными фото',
                                },
                                {
                                    stat: '30%',
                                    label: 'дольше удерживает зрителя видео с воздушными кадрами по сравнению с только наземной съёмкой',
                                },
                            ].map((item) => (
                                <div key={item.stat} className="rounded-[14px] border border-[#2a2a2a] bg-[#111] p-6 text-center">
                                    <p className="mb-2 text-3xl font-bold text-[#D4A017]">{item.stat}</p>
                                    <p className="text-sm leading-relaxed text-white/55">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-15 FAQ ДЛЯ НОВИЧКА ─────────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Вопросы тех, кто заказывает впервые</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Если вы ещё не работали с дрон-съёмкой — здесь ответы на главные вопросы.
                        </p>
                        <div className="max-w-2xl space-y-3">
                            {beginnerFaqItems.map((item, i) => (
                                <div key={i} className="overflow-hidden rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f]">
                                    <button
                                        onClick={() => setOpenBeginner(openBeginner === i ? null : i)}
                                        className="flex w-full items-center justify-between p-5 text-left"
                                    >
                                        <span className="pr-4 text-sm font-medium text-white/85">{item.question}</span>
                                        <span className="flex-shrink-0 text-lg text-[#D4A017]">
                                            {openBeginner === i ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openBeginner === i && (
                                        <div className="px-5 pb-5">
                                            <p className="text-sm leading-relaxed text-white/55">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-16 FAQ ПО ДЕНЬГАМ И СРОКАМ ─────────────────────────────────── */}
                <section id="faq" className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Вопросы про деньги, сроки и процесс</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">Конкретные ответы без туманных «зависит от задачи».</p>
                        <div className="max-w-2xl space-y-3">
                            {commercialFaqItems.map((item, i) => (
                                <div key={i} className="overflow-hidden rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f]">
                                    <button
                                        onClick={() => setOpenCommercial(openCommercial === i ? null : i)}
                                        className="flex w-full items-center justify-between p-5 text-left"
                                    >
                                        <span className="pr-4 text-sm font-medium text-white/85">{item.question}</span>
                                        <span className="flex-shrink-0 text-lg text-[#D4A017]">
                                            {openCommercial === i ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openCommercial === i && (
                                        <div className="px-5 pb-5">
                                            <p className="text-sm leading-relaxed text-white/55">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-17 ПОЧЕМУ BREUS MEDIA ───────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Почему Breus Media</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Не абстрактные преимущества — конкретные факты, которые влияют на результат.
                        </p>
                        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
                            {[
                                {
                                    title: 'Нишевая специализация, не «снимаем всё»',
                                    text: 'Каждый тип съёмки — отдельный подход, а не одна шоурил-обёртка на всех.',
                                },
                                {
                                    title: 'Работаем в рамках GCAA',
                                    text: 'Все полёты законны. Никаких рисков для заказчика и объекта.',
                                },
                                {
                                    title: 'DJI Air 3S + Avata 2 (FPV)',
                                    text: '4K/120fps дрон и FPV под одной крышей. Не нужно искать двух подрядчиков.',
                                },
                                {
                                    title: 'Фиксированные сроки',
                                    text: '3–5 рабочих дней — не «скоро». Дедлайн входит в договорённость.',
                                },
                                {
                                    title: 'Прозрачные цены в ₾',
                                    text: 'Никаких «от» без конкретики. Вы знаете, что входит и что стоит отдельно.',
                                },
                                {
                                    title: 'Локальный контекст',
                                    text: 'Мы знаем Тбилиси, Кахетию, Батуми. Не нужно объяснять, где находится Нарикала.',
                                },
                            ].map((item) => (
                                <div key={item.title} className="rounded-[12px] border border-[#222] bg-[#0f0f0f] p-5">
                                    <p className="mb-2 text-sm font-semibold text-white">✓ {item.title}</p>
                                    <p className="text-sm leading-relaxed text-white/55">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-18/19 ПРОЦЕСС ───────────────────────────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <p className="mb-2 text-sm text-white/40">
                            Съёмочный день — 2–8 часов в зависимости от пакета. Монтаж — 3–5 рабочих дней.
                        </p>
                        <h2 className="mb-10 text-2xl font-bold md:text-3xl">Как это происходит</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {[
                                {
                                    step: '01',
                                    title: 'Заявка',
                                    text: 'Рассказываете о задаче. Мы предлагаем формат и пакет.',
                                },
                                {
                                    step: '02',
                                    title: 'Shot list',
                                    text: 'Составляем план кадров. Вы знаете, что будет снято.',
                                },
                                {
                                    step: '03',
                                    title: 'Съёмочный день',
                                    text: 'Дрон + наземная съёмка на объекте. Всё по плану.',
                                },
                                {
                                    step: '04',
                                    title: 'Монтаж',
                                    text: 'Цветокоррекция, саунд-дизайн, версии под форматы.',
                                },
                                {
                                    step: '05',
                                    title: 'Передача',
                                    text: 'Ролик и версии в Google Drive или Telegram. Готово.',
                                },
                            ].map((item) => (
                                <div key={item.step} className="rounded-[12px] border border-[#2a2a2a] bg-[#111] p-5">
                                    <p className="mb-3 text-2xl font-bold text-[#D4A017]">{item.step}</p>
                                    <p className="mb-1 text-sm font-semibold text-white">{item.title}</p>
                                    <p className="text-xs leading-relaxed text-white/50">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-20 PRICING ──────────────────────────────────────────────────── */}
                <section id="pricing" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Пакеты и цены</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Три пакета для разных задач. Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {pricingPackages.map((pkg) => (
                                <div
                                    key={pkg.name}
                                    className={`flex flex-col rounded-[16px] border p-6 ${
                                        pkg.popular ? 'border-[#D4A017] bg-[#111]' : 'border-[#2a2a2a] bg-[#0f0f0f]'
                                    }`}
                                >
                                    {pkg.popular && (
                                        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                                            ★ Популярный выбор
                                        </p>
                                    )}
                                    <p className="mb-1 text-lg font-bold text-white">{pkg.name}</p>
                                    <p className="mb-1 text-3xl font-bold text-[#D4A017]">{pkg.price}</p>
                                    <p className="mb-1 text-xs text-white/40">{pkg.duration}</p>
                                    <p className="mb-5 text-xs text-white/40">Доставка: {pkg.deliveryDays}</p>
                                    <ul className="mb-6 flex-1 space-y-2">
                                        {pkg.items.map((item) => (
                                            <li key={item} className="flex gap-2 text-sm text-white/65">
                                                <span className="flex-shrink-0 text-[#D4A017]">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {pkg.addons.length > 0 && (
                                        <div className="border-t border-[#2a2a2a] pt-4">
                                            <p className="mb-2 text-xs uppercase tracking-widest text-white/30">Допы:</p>
                                            {pkg.addons.map((addon) => (
                                                <p key={addon} className="mb-1 text-xs text-white/40">
                                                    {addon}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                    <a
                                        href="#contact"
                                        className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-5 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FFD23F]"
                                    >
                                        Выбрать пакет
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Addon pricing table */}
                        <div className="max-w-2xl rounded-[14px] border border-[#2a2a2a] bg-[#0f0f0f] p-6">
                            <p className="mb-4 text-xs uppercase tracking-widest text-white/50">Дополнительные опции</p>
                            <div className="space-y-3">
                                {addonPricing.map((addon) => (
                                    <div key={addon.label} className="flex items-center justify-between">
                                        <p className="text-sm text-white/65">{addon.label}</p>
                                        <p className="text-sm font-semibold text-[#D4A017]">{addon.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MID CTA #2 ────────────────────────────────────────────────────── */}
                <section className="border-y border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾). Без скрытых платежей.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Получить расчёт
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── B-22 RELATED SERVICES ─────────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Смежные услуги</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Часто бренд-видео хорошо сочетается с другими форматами.
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedServices.map((service) => (
                                <a
                                    key={service.title}
                                    href={service.href}
                                    className="block rounded-[12px] border border-[#222] bg-[#0f0f0f] p-5 transition-colors hover:border-[#D4A017]/30"
                                >
                                    <p className="mb-2 text-sm font-semibold text-white">
                                        {service.title}
                                        {service.soon && (
                                            <span className="ml-2 text-[10px] uppercase tracking-widest text-white/30">
                                                скоро
                                            </span>
                                        )}
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/55">{service.text}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── EDUCATIONAL ZONE ── B-25 ──────────────────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#D4A017]">Образовательная зона</p>
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Частые ошибки при заказе бренд-видео</h2>
                        <p className="mb-10 max-w-xl text-sm text-white/50">
                            Это то, что превращает хорошую съёмку в плохой результат.
                        </p>
                        <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    mistake: 'Снять всё подряд без shot list',
                                    fix: 'Без плана оператор снимает «для себя». Потом 4 часа footage, из которого невозможно собрать связный ролик.',
                                },
                                {
                                    mistake: 'Дрон без наземной съёмки',
                                    fix: 'Только воздух — красиво, но холодно. Зритель не видит деталей, не чувствует атмосферы.',
                                },
                                {
                                    mistake: 'Стоковая музыка из YouTube',
                                    fix: 'Бесплатная "корпоративная" музыка убивает визуальный статус. Даже 10 $ за трек радикально меняет восприятие.',
                                },
                                {
                                    mistake: 'Снять один длинный ролик без версий',
                                    fix: 'Сайту нужен 90-секундный ролик. Instagram — 30 сек. Reels — вертикаль 15–60 сек. Один формат не закрывает все каналы.',
                                },
                                {
                                    mistake: 'Снимать в плохую погоду «пока есть окно»',
                                    fix: 'Серое небо и мутный воздух делают дорогую съёмку дешёвой. Лучше перенести на день.',
                                },
                                {
                                    mistake: 'Не готовить объект к съёмке',
                                    fix: 'Строительный мусор, случайные люди, незакрытые двери — всё это видно с воздуха. Подготовка объекта — ответственность заказчика.',
                                },
                            ].map((item) => (
                                <div key={item.mistake} className="rounded-[12px] border border-[#222] bg-[#111] p-5">
                                    <p className="mb-2 text-sm font-semibold text-white/85">✗ {item.mistake}</p>
                                    <p className="text-sm leading-relaxed text-white/50">{item.fix}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── B-26 ЧТО УЛУЧШИТЬ БЕЗ ПОКУПКИ ───────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            Что можно улучшить прямо сейчас — без съёмки
                        </h2>
                        <p className="mb-8 max-w-xl text-sm text-white/50">
                            Несколько вещей, которые повысят эффективность контента до и после съёмки.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Проверьте, как выглядит ваш объект на Google Maps — это первое, что видит клиент. Если фото старые или плохие — замените.',
                                'Уберите из социальных сетей размытые телефонные видео рядом с хорошим контентом — это создаёт визуальный диссонанс.',
                                'Составьте список 5–7 ключевых кадров, которых не хватает в вашем контенте сейчас. Это и будет основой shot list для будущей съёмки.',
                                'Если у вас уже есть хорошие видеоматериалы — попробуйте собрать из них 30-секундный Reels. Иногда это работает лучше, чем кажется.',
                                'Посмотрите на ролики конкурентов в вашей нише. Отметьте 1–2 конкретных приёма, которых не хватает у вас. Это уточнит задачу для съёмки.',
                            ].map((tip, i) => (
                                <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/65">
                                    <span className="flex-shrink-0 font-bold text-[#D4A017]">{i + 1}.</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ── B-27 ЧЕКЛИСТ / SELF-AUDIT ─────────────────────────────────────── */}
                <section className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Чеклист: готов ли ваш бизнес к съёмке</h2>
                        <p className="mb-8 text-sm text-white/50">
                            Пройдите перед тем, как отправить заявку — это сократит время согласования.
                        </p>
                        <div className="rounded-[14px] border border-[#2a2a2a] bg-[#0f0f0f] p-6">
                            <div className="space-y-3">
                                {[
                                    'Объект чистый, убранный и визуально готов к съёмке',
                                    'Есть понимание цели ролика (сайт / соцсети / презентация)',
                                    'Есть понимание длины ролика и форматов (горизонталь / вертикаль)',
                                    'Есть понимание, кто целевой зритель этого ролика',
                                    'Есть 1–3 примера роликов конкурентов или референсов',
                                    'Согласована дата и время съёмки',
                                    'Уточнена погода на ближайшие 3 дня',
                                    'Определён бюджет или выбран пакет',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-[#D4A017]/40" />
                                        <p className="text-sm text-white/65">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── B-28 LONG-TAIL / AI-SEARCH ────────────────────────────────────── */}
                <section className="bg-[#080808] py-20">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Развёрнутые ответы</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    Чем бренд-видео с дрона отличается от обычного промо-ролика?
                                </h3>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Промо-ролик может быть снят полностью с земли — это нормальный формат для анонса
                                    события или продукта. Бренд-видео с дрона добавляет масштабную перспективу: видно,
                                    где расположен объект, как выглядит окружение, что вокруг. Это особенно важно для
                                    локаций, где сама территория или вид — часть ценностного предложения (отели,
                                    рестораны с террасами, ЖК у парков). Дрон не замена наземной съёмке — он её
                                    дополнение.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    Какой дрон используется для бренд-видео в Тбилиси?
                                </h3>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Для бренд-видео используется DJI Air 3S — дрон с матрицей 1/1.3&quot; и возможностью
                                    съёмки в 4K/120fps. Он даёт кинематографичную картинку при цветокоррекции. Для
                                    динамичных FPV-пролётов используется DJI Avata 2 — иммерсивная съёмка сквозь
                                    пространство. Оба дрона зарегистрированы в GCAA Грузии.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    Сколько стоит бренд-видео с дроном для малого бизнеса в Тбилиси?
                                </h3>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Базовый пакет — от 650 ₾: 1–2 часа съёмки, дрон + наземная съёмка, готовый ролик до
                                    60 секунд. Это оптимальный вход для ресторана, небольшого отеля или шоурума, которому
                                    нужен один видео-материал для сайта или Instagram. Стандартный пакет для более
                                    широкого использования — от 1 200 ₾.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    Можно ли снимать бренд-видео с дроном в горах или за пределами Тбилиси?
                                </h3>
                                <p className="text-sm leading-relaxed text-white/60">
                                    Да. Мы снимаем в Кахетии, Казбеги, Батуми и других регионах Грузии. Выезд и логистика
                                    рассчитываются отдельно и согласовываются на этапе обсуждения. Именно горные и
                                    виноградные локации дают наиболее выигрышный воздушный материал.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-white">
                                    Что такое FPV-съёмка и нужна ли она для бренд-видео?
                                </h3>
                                <p className="text-sm leading-relaxed text-white/60">
                                    FPV (First Person View) — это пилотирование дрона в режиме от первого лица. Камера
                                    движется динамично, пролетает сквозь проёмы, двери, арки, делает резкие манёвры. В
                                    бренд-видео FPV-кадры создают эффект присутствия и используются как акцентные
                                    переходы. Это не обязательный элемент — добавляется как опция для динамичных
                                    концепций.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── B-23 CONTACT FORM ─────────────────────────────────────────────── */}
                <section id="contact" ref={contactRef} className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-xl">
                            <h2 className="mb-3 text-center text-2xl font-bold md:text-3xl">Обсудить проект</h2>
                            <p className="mb-10 text-center text-sm text-white/50">
                                Расскажите о задаче — ответим в течение рабочего дня.
                            </p>

                            {formSent ? (
                                <div className="rounded-[14px] border border-[#D4A017]/40 bg-[#111] p-8 text-center">
                                    <p className="mb-2 text-lg font-semibold text-[#D4A017]">Заявка отправлена</p>
                                    <p className="text-sm text-white/55">Свяжемся с вами в течение рабочего дня.</p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5 rounded-[14px] border border-[#2a2a2a] bg-[#111] p-6 md:p-8"
                                >
                                    <div>
                                        <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">Имя</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Как вас зовут"
                                            className="w-full rounded-[8px] border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#D4A017]/50 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                                            Telegram или WhatsApp
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.contact}
                                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                            placeholder="@username или +995..."
                                            className="w-full rounded-[8px] border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#D4A017]/50 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                                            О задаче
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Что снимаем, где, для чего — пару строк"
                                            className="w-full resize-none rounded-[8px] border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#D4A017]/50 focus:outline-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-[10px] bg-[#D4A017] py-4 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#FFD23F]"
                                    >
                                        Отправить заявку
                                    </button>
                                    <p className="text-center text-xs text-white/25">
                                        Или напишите напрямую: Telegram / WhatsApp +995 574 619 393
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── B-30 INTERNAL NAVIGATION ─────────────────────────────────────── */}
                <section className="border-t border-[#1a1a1a] bg-[#080808] py-12">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/30">
                            Другие услуги Breus Media
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
                                { label: 'Аэросъёмка отелей', href: '/drone-services/drone-hotels-tourism' },
                                { label: 'FPV-съёмка', href: '/drone-services/drone-fpv-cinema' },
                                { label: 'Мониторинг стройки', href: '/drone-services/drone-construction-monitoring' },
                                { label: '360° туры', href: '/360-tour-services' },
                                { label: 'Все услуги дрона', href: '/drone-services' },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-full border border-[#2a2a2a] px-4 py-2 text-xs text-white/45 transition-colors hover:border-[#D4A017]/40 hover:text-white/65"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <DroneStickyCta />

            {/* Mobile Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#2a2a2a] bg-[#0f0f0f] md:hidden">
                <div className="flex items-center gap-3 px-4 py-3" style={{ minHeight: '64px' }}>
                    <a
                        href="#contact"
                        className="flex flex-1 items-center justify-center rounded-[8px] bg-[#D4A017] py-3 text-xs font-bold uppercase tracking-wider text-black"
                    >
                        Обсудить проект
                    </a>
                    <a
                        href="https://t.me/breusmedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#2a2a2a] text-white/60"
                        aria-label="Telegram"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
