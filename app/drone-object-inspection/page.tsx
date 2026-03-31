import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-object-inspection/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-object-inspection/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ListCard = {
    title: string;
    text: string;
};

type MetricCard = {
    value: string;
    text: string;
    source?: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type AudienceCard = {
    title: string;
    text: string;
};

type UseCaseCard = {
    title: string;
    text: string;
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

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое дрон-инспекция объектов?',
        answer:
            'Это визуальная инспекция и документация объекта с фиксированных точек и высот. Каждый визит даёт датированные фото и видео для сравнения динамики между выездами.',
    },
    {
        question: 'Чем это отличается от обычной дрон-съёмки?',
        answer:
            'Обычная съёмка чаще нужна для маркетинга. Инспекция — это документация для управления. Мы снимаем одни и те же точки в одном порядке каждый визит, чтобы можно было сравнивать прогресс по неделям и месяцам.',
    },
    {
        question: 'Можно ли летать дроном над объектом в Тбилиси?',
        answer:
            'Да. Мы работаем в соответствии с правилами GCAA Грузии. Максимальная высота — 120 м. Дрон зарегистрирован. Для большинства объектов недвижимости и инфраструктуры дополнительных согласований не требуется, а спецзоны мы берём на себя.',
    },
    {
        question: 'Нужно ли останавливать работы на объекте во время съёмки?',
        answer:
            'Нет. Дрон снимает объект с воздуха, пока бригады работают в обычном режиме. Один выезд обычно занимает 1,5–2 часа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Если погода не позволяет выполнять полёт безопасно, переносим выезд на следующий подходящий день без доплат.',
    },
    {
        question: 'Что такое PDF-отчёт и кому он нужен?',
        answer:
            'Это структурированная визуальная сводка с датированными фото, GPS-точками и краткими комментариями. Документ помогает команде, инвестору или партнёру быстрее читать текущее состояние объекта.',
    },
    {
        question: 'Это инженерное обследование или сертифицированное техническое заключение?',
        answer:
            'Нет. По умолчанию это визуальная дрон-инспекция и документационная поддержка. Услуга не заменяет инженерную экспертизу, технический диагноз или официальное сертифицированное заключение.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-инспекция объектов в Тбилиси?',
        answer:
            'Разовый выезд — от 250 ₾. CORE-пакет с 4 визитами — от 900 ₾/мес. Расширенная investor-ready отчётность (брендированный PDF, архив, executive summary) подключается как PREMIUM / ADD-ON, обычно от 1 800 ₾/мес.',
    },
    {
        question: 'Что входит в PDF-отчёт?',
        answer:
            'В базовой версии — датированные фото, ключевые зоны и краткая визуальная сводка. В расширенной версии добавляем брендирование, executive summary, расширенную структуру и материалы для инвестора/банка.',
    },
    {
        question: 'Как инвестор или банк получает доступ к материалам?',
        answer:
            'Через структурированную ссылку на облачную папку по объекту и датам выездов. Формат доступа (кто и что видит) настраиваем под вашу команду и контур коммуникации.',
    },
    {
        question: 'Как часто нужно снимать?',
        answer:
            'Зависит от темпа объекта. Для активного этапа чаще всего еженедельно. Для более спокойного цикла — раз в 2 недели или раз в месяц. Частоту согласуем на старте.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Основной рынок — Тбилиси и область. Батуми и другие регионы — по договорённости. Стоимость выезда считается отдельно под локацию.',
    },
    {
        question: 'Можно ли начать с разового выезда, а потом перейти на пакет?',
        answer:
            'Да. Многие команды начинают с одного выезда, оценивают формат отчётности и после этого переходят на регулярную инспекцию.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для регулярных пакетов заключаем договор с графиком выездов, форматом отчётов и условиями хранения архива.',
    },
    {
        question: 'Можно ли использовать ваш отчёт как официальное техническое заключение?',
        answer:
            'По умолчанию нет: это визуальная фиксация и структурированный handoff. Если проекту нужны официальные инженерные выводы, их делает профильный технический специалист в отдельном контуре.',
    },
];

const experienceCards: ListCard[] = [
    {
        title: 'Сценарий 1 — Девелопер',
        text:
            'Руководитель проекта открывает папку за текущую неделю и сразу видит, как изменились ключевые зоны относительно прошлого визита, без поездки на площадку.',
    },
    {
        title: 'Сценарий 2 — Инвестор',
        text:
            'Инвестор из России, ОАЭ или ЕС получает ссылку и PDF-отчёт, где прогресс объекта показан по датам и этапам, без длинных объяснений в чате.',
    },
    {
        title: 'Сценарий 3 — Банк',
        text:
            'Финансирующая сторона получает документ с датой, визуальными подтверждениями и milestone-комментарием, что ускоряет коммуникацию по траншу.',
    },
];

const socialProofCards: MetricCard[] = [
    {
        value: '24 ч',
        text: 'доставка съёмки и отчёта после выезда на объект.',
    },
    {
        value: '1,5–2 ч',
        text: 'средняя длительность одного выезда без остановки высотных работ.',
    },
    {
        value: '4 визита',
        text: 'базовый ежемесячный ритм для активного объекта в Тбилиси.',
    },
    {
        value: 'от 250 ₾',
        text: 'стоимость разового выезда для старта и пилотного контроля.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Нет прозрачного прогресса без выезда',
        text: 'Мы не видим реальный прогресс без выезда на площадку.',
    },
    {
        title: 'Разрозненные фото в мессенджерах',
        text: 'Инвестор просит апдейт, а у нас только разрозненные фото из WhatsApp.',
    },
    {
        title: 'Банку нечем подтвердить milestone',
        text: 'Банк требует подтверждение этапа, а готового отчёта нет.',
    },
    {
        title: 'Нет быстрой проверки слов подрядчика',
        text: 'Подрядчики говорят «всё готово», но это нечем быстро проверить.',
    },
    {
        title: 'Хаотичная съёмка вместо сравнения',
        text: 'Нужно одинаково фиксировать объект каждую неделю, а не снимать хаотично.',
    },
    {
        title: 'Конфликт задач технадзора и маркетинга',
        text: 'Маркетингу тоже нужен контент, но технадзору важнее доказательная документация.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Структурированная визуальная история объекта',
        text: 'Каждая съёмка датирована и передаётся по единой логике, чтобы динамика читалась без хаоса.',
    },
    {
        title: 'Проверка прогресса без выезда',
        text: 'Собственник или инвестор открывает отчёт и видит актуальное состояние объекта.',
    },
    {
        title: 'Визуальная фиксация этапов для коммуникации',
        text: 'Сводка с фото и датами помогает обсуждать этапы с партнёрами и финансирующей стороной.',
    },
    {
        title: 'Ранняя визуальная фиксация отклонений',
        text: 'Одинаковые ракурсы помогают быстрее заметить изменения и вынести их на проверку профильной команде.',
    },
    {
        title: 'Premium reporting layer по запросу',
        text: 'Расширенную investor-ready упаковку подключаем отдельно, когда она действительно нужна проекту.',
    },
    {
        title: 'Контент для продаж из тех же выездов',
        text: 'Часть материала из тех же выездов можно использовать в соцсетях и отделе продаж.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'CORE: Базовый выезд',
        subtitle: 'Разовый формат',
        items: [
            '20–30 фото с фиксированных точек (JPG)',
            'Видео-облёт 1–2 мин (MP4, 4K)',
            'Top-down обзор объекта сверху',
            'Доставка за 24 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'CORE: Визуальная инспекция',
        subtitle: 'Регулярная документация и handoff',
        items: [
            'Фиксированные ракурсы каждый визит для сравнения',
            'Облёт периметра с 4 сторон',
            'Крупный план ключевых зон: кран, перекрытия, фасад',
            'Базовая визуальная сводка по визиту (дата, зоны, комментарий)',
            'Аннотированные материалы для внутренней команды',
            'Именование файлов по дате и номеру визита',
        ],
    },
    {
        title: 'PREMIUM / ADD-ON: Investor Reporting',
        subtitle: 'Расширенная отчётность и архив',
        items: [
            'Всё из CORE-визуальной инспекции',
            'Брендированный PDF-отчёт с титульной страницей и executive summary',
            'Расширенное структурированное сравнение этапов',
            'Архив по ссылке с иерархией по датам/этапам',
            'Таймлапс-ролик по итогам месяца',
            'Двуязычные подписи RU/EN по запросу',
            'ZIP-архив для банка, инвестора и партнёра',
        ],
    },
];

const audienceCards: AudienceCard[] = [
    {
        title: 'Застройщики и девелоперы ЖК',
        text: 'Контроль подрядчиков и отчёты для акционеров по этапам в едином формате.',
    },
    {
        title: 'Генподрядчики',
        text: 'Документация этапов и защита от спорных ситуаций с субподрядчиками.',
    },
    {
        title: 'Инвест-агентства',
        text: 'Прозрачность для иностранных инвесторов из РФ, ОАЭ и ЕС без визита в Тбилиси.',
    },
    {
        title: 'Банки и финансирующие структуры',
        text: 'Подтверждение milestone перед траншом через понятный PDF-формат.',
    },
    {
        title: 'Собственники коммерческой недвижимости',
        text: 'Удалённый контроль реконструкции и накапливаемый архив по объекту.',
    },
];

const useCaseCards: UseCaseCard[] = [
    {
        title: 'ЖК в Ваке или Сабуртало',
        text:
            'Застройщик ставит объект на еженедельную инспекцию. Инвесторы из России и ОАЭ получают отчёт по ссылке без выезда в Тбилиси.',
    },
    {
        title: 'Коммерческий объект в Дидубе или Глдани',
        text:
            'Банк финансирует строительство, а PDF с фото и датой подтверждает этап для следующего транша.',
    },
    {
        title: 'Реконструкция в Старом городе',
        text:
            'Собственник контролирует ход работ удалённо, а каждый визит сравнивается с предыдущим для прозрачной динамики.',
    },
    {
        title: 'Склад или логистический центр на выезде из Тбилиси',
        text:
            'Генподрядчик фиксирует этапы и формирует доказательную базу для защиты от претензий субподрядчиков.',
    },
];

const evidenceCards: MetricCard[] = [
    {
        value: 'Фиксированные точки',
        text: 'Одинаковые ракурсы в каждом визите дают сопоставимость, которую нельзя получить хаотичной съёмкой.',
    },
    {
        value: 'Визуал + PDF',
        text: 'Фото и 4K-видео закрывают оперативный контроль, а PDF закрывает коммуникацию с инвестором и банком.',
    },
    {
        value: 'Поэтапный архив',
        text: 'История объекта ведётся по согласованной структуре: дата, визит, зона, сравнение с прошлой съёмкой.',
    },
    {
        value: '24 часа на отчёт',
        text: 'Критичные вопросы по прогрессу решаются в течение суток, а не в конце месяца.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Нишевая специализация под инспекцию объектов',
        text: 'Фокус на документации и инвест-отчётах, а не на универсальной съёмке «для всего».',
    },
    {
        title: 'Два дрона под разные задачи',
        text: 'DJI Air 3S для стабильных панорам и обзоров 4K, DJI Avata 2 для FPV при необходимости.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Дрон зарегистрирован. Ограничения по зонам проверяем заранее и берём юридические риски на себя.',
    },
    {
        title: 'Фиксированные точки каждый визит',
        text: 'Сравнение прогресса по неделям становится объективным и удобным для команды проекта.',
    },
    {
        title: 'PDF-отчёт за 24 часа',
        text: 'Материалы готовы для инвестора или банка без дополнительной ручной сборки внутри вашей команды.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка (день 1)',
        text: 'Вы описываете адрес, стадию объекта и получателей отчётов. Расчёт и рекомендацию по частоте выездов отправляем за 2 часа.',
    },
    {
        step: 'Шаг 2',
        title: 'Согласование (день 1–2)',
        text: 'Фиксируем график выездов, постоянные точки съёмки, формат отчёта и список участников с доступом.',
    },
    {
        step: 'Шаг 3',
        title: 'Первый выезд (день 2–3)',
        text: 'Приезжаем на объект, задаём базовые ракурсы для сравнения. Первый отчёт передаём через 24 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Регулярная инспекция',
        text: 'Работаем по графику. Каждый новый отчёт сравнивается с предыдущим, а архив по объекту ведётся по согласованной структуре.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'Разовый выезд',
        price: 'от 250 ₾',
        subtitle: 'Для первого знакомства с форматом',
        items: [
            '20–30 фото JPG с фиксированных точек',
            'Видео-облёт 1–2 мин (4K)',
            'Доставка за 24 часа (Google Drive)',
        ],
    },
    {
        title: 'CORE Инспекция',
        price: 'от 900 ₾/мес',
        subtitle: '4 визита в месяц (еженедельно)',
        items: [
            'Всё из разового выезда × 4',
            'Базовая визуальная сводка после каждого визита',
            'Сравнение с предыдущим визитом',
            'Структурированная передача материалов по датам',
        ],
        popular: true,
    },
    {
        title: 'PREMIUM / ADD-ON',
        price: 'от 1 800 ₾/мес',
        subtitle: '4 визита + расширенная отчётность',
        items: [
            'Брендированный PDF (RU/EN)',
            'Executive summary страница',
            'Таймлапс-ролик по итогам месяца',
            'ZIP-архив для банка и инвестора',
            'Договор с графиком выездов',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Обзор локации и презентационный контент для продаж квартир, домов и ЖК.',
    },
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для удалённого показа помещений и объектов.',
    },
    {
        title: 'FPV-съёмка для рекламы',
        href: '/drone-fpv-cinema',
        text: 'Динамичные пролёты для промо-роликов, запуска кампаний и performance-креативов.',
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
    name: 'Дрон-инспекция объектов в Тбилиси',
    description:
        'Регулярная аэрофотосъёмка объектов недвижимости и инфраструктуры. Фото, видео и PDF-отчёты для застройщиков, инвесторов и банков в Тбилиси.',
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
        price: '250',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, инспекция объектов, 360° туры и промо-видео для бизнеса в Тбилиси.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-инспекция объектов в Тбилиси | Отчёты для инвесторов | Breus Media',
    description:
        'Инспекция фасадов, крыш и промобъектов в Тбилиси: фото, 4K-видео и PDF-отчёты за 24 часа. Разовый выезд от 250 ₾, пакеты от 900 ₾/мес.',
    alternates: {
        canonical: 'https://breus.media/drone-object-inspection',
    },
};

export default function DroneObjectInspectionPage() {
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
                ]}
            />

            <DebugWrapper id={382100} label="Hero Section">
                <section
                    id="drone-object-inspection-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Инспекция объектов · Тбилиси
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-инспекция объектов в Тбилиси для застройщиков, инвесторов и генподрядчиков
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Еженедельные выезды на объект. Фото, видео и базовая визуальная сводка готовы за 24
                                    часа. По умолчанию это visual inspection и documentation support, без инженерного
                                    заключения.
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
                                    Один выезд занимает 1,5–2 часа — без остановки работ на объекте.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Что получает команда проекта</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                                            Разовый выезд для проверки формата инспекции.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">24 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Отчёт</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">4 визита</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">В месяц</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Фото, видео и базовая визуальная сводка после каждого выезда</li>
                                        <li>Сравнение с предыдущим визитом по фиксированным точкам</li>
                                        <li>Расширенный архив/инвест-упаковка — как premium add-on</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382120} label="What Is Section">
                <section id="object-inspection-what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Задача: что закрывает визуальная дрон-инспекция</h2>
                                <p className="mt-5 max-w-3xl leading-relaxed text-white/74">
                                    Это регулярная аэрофотосъёмка объекта с повторяемых точек и высот. Каждый визит
                                    фиксирует состояние объекта в одном формате: фото, 4K-видео и отчёт. В результате
                                    застройщик, инвестор и генподрядчик видят прогресс без выезда и без разрозненных
                                    файлов в мессенджерах.
                                </p>
                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/58">
                                    Важно: по умолчанию это визуальная фиксация и documentation support. Услуга не
                                    заменяет инженерную экспертизу, технический диагноз или сертифицированное заключение.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-[#2a2a2a] bg-[#131313] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Формат нужен для</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                    <li>Еженедельных апдейтов для инвесторов</li>
                                    <li>Подтверждения этапов для банков и траншей</li>
                                    <li>Контроля подрядчиков без выезда на площадку</li>
                                    <li>Сбора архивной документации по объекту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382125} label="Upper Flow Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold md:text-3xl">Короткий путь по странице: задача → процесс → результат → CTA</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если нужен быстрый обзор: сначала фиксируем задачу и зону съёмки, затем работаем по
                                повторяемому сценарию, передаём структурированные материалы и сразу выходим в следующий
                                шаг по проекту.
                            </p>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-4">
                            {['Задача объекта', 'Как работаем', 'Что получаете', 'Обсудить запуск'].map((item, index) => (
                                <div key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Шаг {index + 1}</p>
                                    <p className="mt-2 text-sm text-white/80">{item}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                        >
                            Перейти к брифу
                        </a>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382140} label="Experience Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это работает для вашей команды</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы не просто снимаем красивый облёт, а строим регулярный процесс, где каждый участник
                                проекта получает свои данные в одном понятном пакете.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {experienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382200} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Операционные ориентиры</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Инспекция работает, когда у команды есть стабильный ритм съёмок и предсказуемый формат
                                доставки отчётов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382250} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте эти проблемы на объекте?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже типовые точки напряжения, из-за которых контроль затягивается, а коммуникация между
                                подрядчиком, инвестором и банком становится медленной.
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

            <DebugWrapper id={382300} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что меняется после запуска инспекции</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Регулярный формат превращает «покажите, что происходит на площадке» в прозрачный процесс
                                с понятными сроками и фиксируемыми данными.
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

            <DebugWrapper id={382305} label="Mid CTA Section 1">
                <MidCta
                    text="Есть объект в Тбилиси, который нужно поставить на регулярную инспекцию?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={382350} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                База остаётся простой и понятной: выезд, визуальная фиксация, структурированный handoff.
                                Расширенная investor-ready отчётность подключается отдельно как premium/add-on.
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
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382360} label="Audience Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Кому подходит инспекция объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Формат полезен всем, кто принимает решения по объекту и должен видеть подтверждённый прогресс,
                                а не только текстовые апдейты.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {audienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382380} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это применяется в Тбилиси</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже четыре рабочих сценария, где регулярная съёмка даёт практическую ценность и для
                                операционного контроля, и для финансирования.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {useCaseCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={382500} label="Portfolio Section">
                    <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold md:text-4xl">Примеры инспекции объектов</h2>
                                <p className="mt-4 leading-relaxed text-white/70">
                                    Публичная витрина кейсов обновляется по мере публикации согласованных проектов.
                                    Для релевантных задач можем показать примеры формата материалов на этапе брифа.
                                </p>
                            </div>

                            <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                                <p className="text-lg font-semibold text-white">Кейсы в работе</p>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                    Если нужен пилотный запуск инспекции на вашем объекте, можем начать с разового выезда
                                    и зафиксировать базовый формат отчётности под вашу команду.
                                </p>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={382520} label="Evidence Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему формат работает в реальных проектах</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сила инспекции в системности: одинаковая логика съёмки, короткий цикл отчётности и
                                архив, который остаётся полезным на каждом этапе объекта.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {evidenceCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-2xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого знакомства с инспекцией" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={382700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={382560} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media для инспекции объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Наша цель не просто снять объект с воздуха, а сделать отчётность пригодной для принятия
                                решений в девелопменте и финансировании.
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

            <DebugWrapper id={382399} label="Process Note Section">
                <ProcessNote text="Один выезд занимает 1,5–2 часа — без остановки работ на объекте" />
            </DebugWrapper>

            <DebugWrapper id={382400} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сначала фиксируем процесс и точки съёмки, затем работаем по графику так, чтобы отчёты были
                                сопоставимыми и предсказуемыми по срокам.
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

            <DebugWrapper id={382600} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Разовый выезд от 250 ₾, CORE-пакет от 900 ₾/мес и PREMIUM/ADD-ON отчётность от
                                1 800 ₾/мес для объектов, где нужна investor/bank-ready упаковка.
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

            <DebugWrapper id={382605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш тип объекта и приоритетные зоны осмотра?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={382620} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Для сильной упаковки объекта обычно комбинируют регулярную инспекцию, презентационный
                                контент и формат удалённого показа.
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

            <DebugWrapper id={382800} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Опишите объект и желаемую частоту выездов — подготовим расчёт и предложим формат
                                        инспекции в течение 2 часов.
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
                                                <option>ЖК</option>
                                                <option>Коммерческий объект</option>
                                                <option>Склад или логистический центр</option>
                                                <option>Реконструкция здания</option>
                                                <option>Другое</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Частота выездов</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Разовый выезд</option>
                                                <option>Еженедельно</option>
                                                <option>Раз в 2 недели</option>
                                                <option>Ежемесячно</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Кому нужны отчёты</label>
                                        <input
                                            type="text"
                                            placeholder="Инвестор, банк, технадзор, собственник, отдел продаж"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Адрес, стадия объекта, дедлайн и особенности площадки"
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

            <DebugWrapper id={382900} label="Footer Section">
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
