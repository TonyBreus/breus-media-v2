import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type PackagePlan = {
    name: string;
    price: string;
    timeline: string;
    items: string[];
};

const CANONICAL_URL = 'https://breus.media/ai-visual/ai-brand';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroIntro =
    'Реклама выгорает. Контент нужен постоянно. Нанимать дизайнера для каждого баннера — дорого. Заказывать съёмку под каждую кампанию — долго. AI-визуал для брендов закрывает этот разрыв: мы создаём изображения для рекламы, соцсетей, лендингов и презентаций с помощью AI в нужном стиле и за 24–72 часа. Вы получаете не видео и не анимацию — вы получаете готовые изображения, которые можно запустить сразу.';

const serviceExplanation =
    'AI-визуал для брендов — это создание маркетинговых изображений с помощью искусственного интеллекта. Вы описываете концепцию кампании или присылаете бриф — мы создаём набор изображений: для рекламных баннеров, постов, лендинга, питч-колоды. Мы не снимаем и не рисуем вручную — мы генерируем и постобрабатываем. Результат — готовые файлы изображений для использования в коммерческих целях.';

const audienceItems: string[] = [
    'Маркетологам, которым нужны визуалы для кампаний быстрее, чем может сделать дизайнер.',
    'Брендам, которым нужна визуальная вариативность для A/B-тестов в рекламе.',
    'Стартапам, запускающим первые кампании без бюджета на студийную съёмку.',
    'Агентствам, которым нужен поток визуалов под разных клиентов.',
    'Продуктовым командам — для визуала лендинга, онбординга, презентации.',
    'Личным брендам в Instagram/LinkedIn — для профессионального визуального контента.',
];

const taskItems: string[] = [
    'Создаёт визуалы для рекламных кампаний без съёмки и долгого дизайна.',
    'Генерирует несколько вариантов под A/B-тест быстро и дёшево.',
    'Обеспечивает единый визуальный стиль для всей кампании или бренд-гайда.',
    'Даёт материалы для лендинга, соцсетей, email-рассылок и презентаций в едином пакете.',
];

const painCards: CardItem[] = [
    {
        title: 'Реклама выгорает — нужен постоянный поток новых визуалов',
        text: 'Одни и те же баннеры снижают CTR. AI позволяет генерировать новые варианты быстро и дёшево.',
    },
    {
        title: 'Дизайнер занят — визуалы нужны сейчас',
        text: 'У маркетолога очередь задач. Срочный баннер или пост нужен завтра, а не через неделю.',
    },
    {
        title: 'Студийная съёмка под каждую кампанию — нереально',
        text: 'Летняя кампания, осенняя, новогодняя — у каждой свой визуал. Организовывать съёмку каждый раз невозможно.',
    },
    {
        title: 'Нет вариативности для тестов',
        text: 'Хочется проверить три варианта подачи одного оффера. AI делает три варианта за один рабочий день.',
    },
    {
        title: 'Нет сильного визуала для лендинга или питча',
        text: 'Тестовый лендинг с слабым hero-изображением конвертирует хуже. AI даёт сильный визуал без дорогой съёмки.',
    },
    {
        title: 'Нужен уникальный, а не стоковый визуал',
        text: 'Сток выглядит как сток. AI-изображение — уникальное, создаётся под ваш конкретный бриф.',
    },
];

const earnItems: string[] = [
    'Больше вариантов рекламы → лучший A/B-тест → выше ROAS.',
    'Постоянный поток свежего контента → выше вовлечённость в соцсетях.',
    'Сильный лендинг-визуал → выше конверсия.',
    'Быстрый запуск кампании → раньше начинаются продажи.',
];

const saveItems: string[] = [
    'Экономия против студийной съёмки: до 80%.',
    'Экономия против заказа дизайнера на каждый визуал.',
    'Нет зависимости от расписания студии и команды.',
    'Правки варианта стоят часы, а не дни.',
];

const deliverables: string[] = [
    '5–15 изображений для рекламы, соцсетей или лендинга.',
    '2–3 концептуальных направления / стиля.',
    'Форматы: JPG, PNG, WebP.',
    'Разрешение: от 2K до 4K.',
    'Ресайзы под рекламные форматы: Meta, Google, TikTok, LinkedIn.',
    'Ресайзы под Instagram, Facebook, Stories.',
    'Передача через Google Drive.',
    'Срок: 48–72 часа.',
];

const useCases: CardItem[] = [
    {
        title: 'Запуск рекламной кампании в Meta',
        text: 'Стартап запускает первую рекламу. Нет студийных фото, нет дизайнера под рукой. AI создаёт 6 вариантов визуалов в брендовом стиле за 48 часов — кампания запускается в срок.',
    },
    {
        title: 'Контент-план для Instagram на месяц',
        text: 'Бренд хочет 20 постов в едином визуальном стиле. AI генерирует серию изображений — лента выглядит профессионально и консистентно.',
    },
    {
        title: 'Hero-изображение для лендинга',
        text: 'Тестовый лендинг нового продукта. Нужен сильный визуал в header. AI создаёт 3 варианта — маркетолог выбирает лучший и сразу запускает.',
    },
    {
        title: 'Питч-колода для инвесторов',
        text: 'Стартап готовит презентацию. Нужны сцены, иллюстрирующие продукт и рынок. AI создаёт визуал под каждый слайд — питч выглядит как у компании с дизайн-командой.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Digital-агентство, Тбилиси',
        text: 'Нужны были визуалы под три разные кампании клиентов за одну неделю. AI создал три визуальных направления в разных стилях — всё сдано в срок без привлечения дополнительного дизайнера.',
    },
    {
        title: 'Стартап в сфере wellness',
        text: 'Запускали первую рекламу в Meta. Бюджета на съёмку не было. AI создал 8 вариантов визуала для A/B-теста. Наилучший вариант нашли за первую неделю.',
    },
    {
        title: 'Личный бренд консультанта',
        text: 'Нужны были профессиональные изображения для LinkedIn и сайта-портфолио без фотосессии. AI создал серию атмосферных визуалов в нейтральном деловом стиле.',
    },
];

const proofItems: string[] = [
    'Работаем с брифом, а не с шаблонами: каждый пакет создаётся под конкретный бренд.',
    'Коммерческие лицензии: все файлы — для платной рекламы, без ограничений.',
    'Ручной контроль стиля и консистентности.',
    'Понимаем требования Meta, Google, TikTok, LinkedIn.',
];

const whyUsItems: string[] = [
    'Работаем по брифу — не по шаблонам.',
    'Понимаем маркетинговый контекст: CTR, A/B-тесты, платформенные требования.',
    'Все изображения — с коммерческой лицензией.',
    'Быстро: 48–72 часа на пакет.',
    'Постобработка: убираем артефакты, выдерживаем стиль.',
];

const processSteps: CardItem[] = [
    {
        title: 'Бриф',
        text: 'Аудитория, задача, стиль, платформы, референсы.',
    },
    {
        title: 'Согласование концепции',
        text: 'Предлагаем 2–3 направления, вы выбираете.',
    },
    {
        title: 'Генерация и постобработка',
        text: 'Создаём пакет изображений в выбранном стиле.',
    },
    {
        title: 'Выдача',
        text: 'Передаём первые варианты на согласование.',
    },
    {
        title: 'Правки и финал',
        text: 'Вносим корректировки и передаём через Google Drive в нужных форматах.',
    },
];

const packagePlans: PackagePlan[] = [
    {
        name: 'Basic',
        price: 'от 200 ₾',
        timeline: '48 ч',
        items: [
            '5–6 изображений',
            '1 концептуальное направление',
            'JPG/PNG, 4K',
            'Ресайзы под Instagram (1:1, 4:5) и FB',
            '1 раунд правок',
        ],
    },
    {
        name: 'Standard',
        price: 'от 380 ₾',
        timeline: '48–72 ч',
        items: [
            '10 изображений',
            '2 направления / стиля',
            '4K, JPG/PNG/WebP',
            'Ресайзы под Instagram, Stories, Meta-рекламу',
            '1 раунд правок',
        ],
    },
    {
        name: 'Full',
        price: 'от 600 ₾',
        timeline: '72 ч',
        items: [
            '15+ изображений',
            '3 направления',
            '4K, все форматы',
            'Полный пакет: сторис, баннеры, лендинг, LinkedIn',
            '2 раунда правок',
        ],
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-визуал для брендов?',
        answer:
            'Это создание маркетинговых изображений с помощью искусственного интеллекта по вашему брифу. Мы не снимаем и не рисуем вручную — генерируем и постобрабатываем. На выходе — готовые изображения для рекламы, соцсетей и лендинга.',
    },
    {
        question: 'Чем это отличается от Canva или Midjourney?',
        answer:
            'Canva — шаблоны, Midjourney — генерация без полного продакшн-процесса. Мы даём управляемый workflow: бриф, концепции, генерация, постобработка, ресайзы и контроль качества под коммерческие задачи.',
    },
    {
        question: 'Мой бренд узнаваем — AI сохранит стиль?',
        answer:
            'Да. Если у вас есть brand book, логотип или референсы, мы выдерживаем стиль. Можно передать цвета, шрифтовые пары и tone of voice.',
    },
    {
        question: 'Можно ли использовать для платной рекламы Meta/Google?',
        answer: 'Да. Все файлы передаются с коммерческой лицензией.',
    },
    {
        question: 'Нужен ли мне brand book?',
        answer: 'Нет. Достаточно референсов стиля и описания аудитории. Brand book повышает точность, но не обязателен.',
    },
    {
        question: 'Сколько вариантов входит в пакет?',
        answer: 'В зависимости от пакета: от 5 до 15+ изображений, 2–3 концептуальных направления.',
    },
];

const processFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуал для рекламной кампании?',
        answer:
            'Basic — от 200 ₾ (5–6 изображений, 1 концепт). Standard — от 380 ₾ (10 изображений, 2 направления, ресайзы). Full — от 600 ₾ (15+ изображений, 3 направления, все форматы).',
    },
    {
        question: 'Как быстро?',
        answer: '48–72 часа с момента брифа и предоплаты.',
    },
    {
        question: 'Что мне нужно предоставить?',
        answer: 'Бриф: аудитория, продукт/услуга, тон коммуникации, референсы стиля, платформы размещения.',
    },
    {
        question: 'Входит ли логотип на изображения?',
        answer: 'Нет. Передаём чистые изображения. Наложение логотипа — на стороне клиента или как дополнительная услуга.',
    },
    {
        question: 'Можно ли продолжить сотрудничество на регулярной основе?',
        answer: 'Да. Доступен абонемент: фиксированный объём изображений в месяц по фиксированной цене.',
    },
    {
        question: 'Входят ли форматы для Stories?',
        answer: 'Да, Stories 9:16 включены в Standard и Full.',
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуал для рекламной кампании в Тбилиси?',
        answer: 'От 200 ₾ за базовый пакет (5–6 изображений). Standard — от 380 ₾, Full — от 600 ₾.',
    },
    {
        question: 'Можно ли использовать AI-изображения в платной рекламе Meta и Google?',
        answer: 'Да. Все файлы передаются с коммерческой лицензией.',
    },
    {
        question: 'Как быстро создаётся AI-визуал для кампании?',
        answer: 'За 48–72 часа с момента получения брифа.',
    },
    {
        question: 'Чем AI-визуал лучше стоковых изображений?',
        answer: 'AI создаёт уникальное изображение под ваш бриф, а не готовую стоковую фотографию из каталога.',
    },
    {
        question: 'Нужен ли brand book для заказа?',
        answer: 'Нет. Достаточно референсов стиля и описания аудитории.',
    },
    {
        question: 'Можно ли сделать AI-визуал для лендинга?',
        answer: 'Да. Hero-изображения, фоны и иллюстрации для лендинга входят в услугу.',
    },
    {
        question: 'Сколько вариантов включено в пакет?',
        answer: 'Basic — 5–6 изображений, 1 концепт. Standard — 10 изображений, 2 концепта. Full — 15+, 3 концепта.',
    },
    {
        question: 'Есть ли абонемент для регулярного потока визуалов?',
        answer: 'Да. Можно согласовать ежемесячный объём и фиксированную цену за регулярный контент.',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф: AI-картинки слишком узнаваемы',
        text: 'Реальность: при правильном брифе, постобработке и выдерживании бренд-стиля визуал выглядит профессионально и естественно.',
    },
    {
        title: 'Миф: AI не может создать уникальное',
        text: 'Реальность: AI создаёт сцены, которые физически сложно или невозможно снять — метафорические и концептуальные.',
    },
    {
        title: 'Миф: нужен отдельный AI-дизайнер в штат',
        text: 'Реальность: мы берём весь процесс на себя. Вам нужен только бриф и референсы.',
    },
    {
        title: 'Миф: AI-визуал хуже студийной съёмки всегда',
        text: 'Реальность: для части задач AI даже сильнее студии, особенно в концептуальных рекламных сценариях.',
    },
    {
        title: 'Миф: это дорого',
        text: 'Реальность: базовый пакет стартует от 200 ₾, что значительно доступнее студийного продакшна.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Нет брифа — «сделайте красиво»',
        text: 'Без описания аудитории и задачи результат непредсказуем. 10 минут на бриф экономят дни правок.',
    },
    {
        title: 'Логотип низкого разрешения',
        text: 'Если нужны фирменные элементы, передавайте вектор или PNG высокого качества.',
    },
    {
        title: 'Ожидание «всё и сразу» за Basic',
        text: 'Пакеты различаются по объёму. Лучше заранее выбрать нужный объём под цель кампании.',
    },
    {
        title: 'Ожидание финала без правок',
        text: 'Первый вариант задаёт направление. Правки — нормальная часть процесса.',
    },
    {
        title: 'Форматы не определены заранее',
        text: 'Meta, Google, TikTok и LinkedIn используют разные размеры — лучше назвать платформы в начале.',
    },
    {
        title: 'Нет понимания аудитории',
        text: 'Чем точнее описана ЦА и оффер, тем точнее визуальная коммуникация.',
    },
];

const improveWithoutPurchase: string[] = [
    'Сформулируйте 1–2 предложения: кто ваша аудитория и что она должна сделать после просмотра рекламы.',
    'Соберите 5–7 референсов визуала, который вам нравится.',
    'Определите фирменные цвета (минимум два HEX-кода).',
    'Проверьте форматы под ваши платформы заранее.',
    'Соберите основной маркетинговый месседж в одном предложении.',
];

const checklistItems: string[] = [
    'Есть описание аудитории.',
    'Есть месседж кампании / оффер.',
    'Есть референсы стиля.',
    'Известны платформы размещения.',
    'Есть логотип в высоком разрешении (если нужен).',
    'Известны фирменные цвета.',
    'Определён бюджет.',
    'Есть дедлайн запуска.',
];

const longQaItems: { question: string; answers: string[] }[] = [
    {
        question: 'Как AI-визуал соотносится с брендовой идентичностью?',
        answers: [
            'AI создаёт изображения по брифу и референсам, а не случайно. Если есть brand book, мы придерживаемся цветов, тона и стилистики.',
            'Если brand book ещё в разработке, работаем по референсам и собираем консистентный визуальный ряд, который можно масштабировать в следующих пакетах.',
        ],
    },
    {
        question: 'Можно ли использовать AI для A/B-тестирования в рекламе?',
        answers: [
            'Да, это один из ключевых сценариев: несколько визуальных гипотез создаются параллельно в короткий срок.',
            'Вы запускаете варианты в Meta, оцениваете CTR/CR и быстро оставляете наиболее результативный креатив.',
        ],
    },
    {
        question: 'Чем AI-визуал отличается от стоковых изображений?',
        answers: [
            'Сток — массовый контент, который уже использовался множеством брендов.',
            'AI-визуал создаётся конкретно под ваш бриф и помогает выделиться уникальной визуальной подачей.',
        ],
    },
    {
        question: 'Как организовать регулярный поток AI-визуала для бренда?',
        answers: [
            'Оптимальный формат — абонемент с фиксированным объёмом изображений в месяц.',
            'Регулярный цикл брифов и выпусков обычно дешевле разовых заказов и лучше сохраняет консистентность бренда.',
        ],
    },
];

const glossary: { term: string; description: string }[] = [
    {
        term: 'AI-визуал',
        description: 'Изображение, созданное с помощью искусственного интеллекта по описанию или брифу.',
    },
    {
        term: 'Бриф',
        description: 'Техническое задание с описанием аудитории, задачи, стиля и форматов.',
    },
    {
        term: 'A/B-тест',
        description: 'Сравнение двух или более вариантов визуала для выбора лучшего.',
    },
    {
        term: 'ROAS',
        description: 'Return on Ad Spend — отдача от рекламных затрат.',
    },
    {
        term: 'CTR',
        description: 'Click-Through Rate — процент кликов по рекламному объявлению.',
    },
    {
        term: 'Коммерческая лицензия',
        description: 'Право использовать изображение в рекламе, публикациях и продажах.',
    },
];

const notFitItems: string[] = [
    'Тем, кому нужна живая съёмка с реальными людьми и сценами.',
    'Тем, кто ожидает анимацию, GIF или видео вместо статичных изображений.',
    'Тем, кто хочет полностью заменить дизайн-отдел: услуга даёт изображения, но не закрывает айдентику и UI.',
    'Тем, кому критичны фото конкретных реальных людей и кастинг.',
];

const relatedServices: { label: string; href: string }[] = [
    { label: 'AI-продуктовый визуал', href: '/ai-visual/ai-product' },
    { label: 'AI-карточки и меню', href: '/ai-visual/ai-menu-delivery' },
    { label: 'AI-визуализация интерьеров', href: '/ai-visual/ai-interior' },
    { label: 'Reels и промо-видео для брендов', href: '/reels-promo/reels-real-estate' },
];

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
            name: 'AI-визуализация',
            item: 'https://breus.media/ai-visualization-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'AI-визуал для брендов и маркетинга',
            item: CANONICAL_URL,
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...processFaqItems, ...shortQaItems].map((item) => ({
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
    serviceType: 'AI-визуал для брендов и маркетинга',
    name: 'AI-визуал для брендов и маркетинга',
    description:
        'AI-изображения для рекламных кампаний, SMM, лендингов и брендовых материалов с коммерческой лицензией. Тбилиси, Грузия.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        telephone: CONTACT_PHONE_RAW,
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
        price: '200',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'GEL',
            price: '200',
            unitText: 'за пакет',
        },
        url: CANONICAL_URL,
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: 'AI-визуал для брендов и маркетинга — кампании, реклама, лендинги | Breus Media',
    description:
        'Создаём AI-изображения для рекламных кампаний, SMM, лендингов и брендовых материалов. Без студийной съёмки. От 200 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-визуал для брендов и маркетинга — кампании, реклама, лендинги | Breus Media',
        description:
            'Создаём AI-изображения для рекламных кампаний, SMM, лендингов и брендовых материалов. Без студийной съёмки. От 200 ₾. Тбилиси, Грузия.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function AiBrandVisualPage() {
    return (
        <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#packages' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44">
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.38),rgba(8,8,8,0.93)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                    AI Visual · Brand Marketing · Tbilisi
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-визуал для брендов и маркетинга — материалы для кампаний, рекламы и лендингов
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Создаём изображения для рекламных кампаний, соцсетей и брендовых материалов с помощью AI
                                — быстро, в нужном стиле, без съёмочной группы.
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить кампанию
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Ответим в WhatsApp за 2 часа · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ключевые параметры</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 200 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет для запуска рекламы и A/B-тестов.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">48–72 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–15+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Изображений</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>2–3 концепта под кампанию</li>
                                    <li>Ресайзы под Meta / Google / TikTok / LinkedIn</li>
                                    <li>Коммерческая лицензия включена</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что это за услуга</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{serviceExplanation}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Какую задачу решает услуга</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {taskItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                ✓ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Боли клиента</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает заработать</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {earnItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает не потерять</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {saveItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Deliverables</h2>
                    <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {deliverables.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                ✓ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что получает клиент на выходе</h2>
                    <p className="mt-6 max-w-5xl leading-relaxed text-white/72">
                        Пакет изображений, готовых к загрузке в рекламный кабинет, к публикации в соцсетях или к
                        размещению на лендинге. Все файлы — в нужных форматах и размерах, без водяных знаков, с правом
                        коммерческого использования.
                    </p>
                </div>
            </section>

            <MidCta
                text="Расскажите нам о вашей кампании — покажем, как это может выглядеть визуально."
                buttonLabel="Обсудить кампанию"
                href={WHATSAPP_URL}
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сценарии использования</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст: Тбилиси</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">
                        В Тбилиси растёт количество стартапов, digital-агентств и брендов, работающих на международные
                        рынки. Конкуренция за внимание в Instagram, Meta-рекламе и LinkedIn усиливается. AI-визуал
                        позволяет небольшим командам создавать маркетинговые материалы уровня крупных брендов без больших
                        бюджетов на продакшн. Breus Media работает с брендами в Тбилиси и дистанционно.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20" id="examples">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры / мини-кейсы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {miniCases.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof и доказательства</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {proofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection items={beginnerFaqItems} title="FAQ для новичка" />
            <FaqSection items={processFaqItems} title="FAQ по деньгам и процессу" variant="commercial" />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {whyUsItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Маркетинговый визуал — это не просто красиво. Это визуал, который работает в рекламе, привлекает внимание в ленте и конвертирует на лендинге. Поэтому мы начинаем с маркетингового брифа, а не с генерации." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step, index) => (
                            <article key={step.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD23F]">{`Шаг ${index + 1}`}</p>
                                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20" id="packages">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты</h2>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {packagePlans.map((plan) => (
                            <article
                                key={plan.name}
                                className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#D4A017]/55"
                            >
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <p className="mt-2 text-lg font-bold text-[#FFD23F]">{plan.price}</p>
                                <p className="mt-1 text-sm text-white/60">Срок: {plan.timeline}</p>
                                <ul className="mt-5 space-y-2 text-sm text-white/74">
                                    {plan.items.map((item) => (
                                        <li key={`${plan.name}-${item}`}>• {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сравнение пакетов</h2>
                    <div className="mt-8 overflow-x-auto rounded-[16px] border border-[#2a2a2a]">
                        <table className="min-w-full border-collapse text-left text-sm">
                            <thead className="bg-[#151515] text-white/90">
                                <tr>
                                    <th className="px-4 py-3">Параметр</th>
                                    <th className="px-4 py-3">Basic</th>
                                    <th className="px-4 py-3">Standard</th>
                                    <th className="px-4 py-3">Full</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#101010] text-white/74">
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Цена</td><td className="px-4 py-3">от 200 ₾</td><td className="px-4 py-3">380 ₾</td><td className="px-4 py-3">600 ₾</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Изображений</td><td className="px-4 py-3">5–6</td><td className="px-4 py-3">10</td><td className="px-4 py-3">15+</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Концептов</td><td className="px-4 py-3">1</td><td className="px-4 py-3">2</td><td className="px-4 py-3">3</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Instagram</td><td className="px-4 py-3">✓</td><td className="px-4 py-3">✓</td><td className="px-4 py-3">✓</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Stories 9:16</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td><td className="px-4 py-3">✓</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Meta-реклама</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td><td className="px-4 py-3">✓</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Google баннеры</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">LinkedIn</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Раундов правок</td><td className="px-4 py-3">1</td><td className="px-4 py-3">1</td><td className="px-4 py-3">2</td></tr>
                                <tr className="border-t border-white/10"><td className="px-4 py-3">Срок</td><td className="px-4 py-3">48 ч</td><td className="px-4 py-3">48–72 ч</td><td className="px-4 py-3">72 ч</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-3">
                        <div className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                            Нужен один запуск или A/B-тест → <span className="font-bold text-white">Basic</span>
                        </div>
                        <div className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                            Нужна кампания с вариациями и stories → <span className="font-bold text-white">Standard</span>
                        </div>
                        <div className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                            Нужен полный брендовый визуал-пакет → <span className="font-bold text-white">Full</span>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-[#FFD23F]">Напишите нам: {CONTACT_PHONE_DISPLAY}</p>
                </div>
            </section>

            <MidCta
                text="Расскажите о вашей кампании или бренде — обсудим, что можно сделать."
                buttonLabel="Написать в WhatsApp"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                    <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/76 transition-colors hover:border-[#D4A017]/55 hover:text-white"
                            >
                                {service.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={`material-${service.href}`}
                                href={service.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/76 transition-colors hover:border-[#D4A017]/55 hover:text-white"
                            >
                                {service.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
                        <Link
                            href="/reels-promo/reels-real-estate"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/76 transition-colors hover:border-[#D4A017]/55 hover:text-white"
                        >
                            Нужны видео для кампании? Смотрите Reels и промо-видео для брендов.
                        </Link>
                        <Link
                            href="/ai-visual/ai-product"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/76 transition-colors hover:border-[#D4A017]/55 hover:text-white"
                        >
                            Нужна визуализация продукта? Смотрите AI-продуктовый визуал.
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16" id="contact">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-white/72">
                        Работаем в Тбилиси и дистанционно. Для старта нужен бриф в любом формате — даже несколько
                        предложений в WhatsApp.
                    </p>
                    <p className="mt-3 text-sm text-[#FFD23F]">{CONTACT_PHONE_DISPLAY}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что можно улучшить без покупки</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к заказу</h2>
                    <div className="mt-8 grid gap-4 text-sm md:grid-cols-2 xl:grid-cols-4">
                        {checklistItems.map((item) => (
                            <div key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/74">
                                ✓ {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    <div className="mt-8 space-y-5">
                        {longQaItems.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{item.question}</h3>
                                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/72">
                                    {item.answers.map((answer) => (
                                        <p key={answer}>{answer}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection
                id="faq"
                title="Short Q&A для AI-поиска"
                items={shortQaItems}
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {myths.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мини-словарь терминов</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.term}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы НЕ подходим</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {notFitItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-[#0A0A0A] py-8 text-center text-xs text-white/55">
                <div className="container mx-auto px-6">
                    Breus Media — медиапродакшн в Тбилиси. AI-визуализация, аэросъёмка, 360° туры, Reels. © 2026.
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        </main>
    );
}
