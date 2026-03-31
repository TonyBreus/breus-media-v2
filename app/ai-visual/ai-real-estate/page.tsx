import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type Card = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type PackageCard = {
    title: string;
    price: string;
    subtitle: string;
    timeline: string;
    items: string[];
};

type ComparisonRow = {
    label: string;
    basic: string;
    standard: string;
    full: string;
};

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const SITE_URL = 'https://breus.media';
const CANONICAL_URL = 'https://breus.media/ai-visual/ai-real-estate';
const PAGE_TITLE = 'AI-визуализация недвижимости в Тбилиси — рендеры объектов | Breus Media';
const PAGE_DESCRIPTION =
    'AI-изображения квартир, ЖК и объектов до завершения строительства. Быстро, без съёмки, готово для продаж. От 150 ₾. Тбилиси, Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const serviceExplanation =
    'AI-визуализация недвижимости — это создание изображений объекта с помощью искусственного интеллекта. Никакой съёмки, никаких фотографов и мебельных сцен: вы отправляете нам планировку, фото пространства или референсы стиля — мы генерируем готовые картинки, на которых объект выглядит заселённым, стильным и готовым к продаже. Результат — файлы изображений, а не видео: PNG, JPG, WebP — в разрешении для сайта, рекламы и печати.';

const audienceItems = [
    'Застройщикам, которые продают квартиры на этапе котлована или черновой отделки.',
    'Девелоперам, представляющим ЖК инвесторам до завершения строительства.',
    'Риелторам, которым нужно продавать пустые или «бабушкины» квартиры быстрее.',
    'Инвесторам, оценивающим потенциал объекта под аренду или флиппинг.',
    'Агентствам недвижимости, которым нужны десятки визуалов под разные объекты быстро.',
    'Частным собственникам, которые хотят продать квартиру дороже за счёт визуального впечатления.',
];

const solutionItems = [
    'Показывает объект в лучшем виде ещё до физической готовности — покупатель может представить себя там.',
    'Заменяет дорогостоящий стейджинг и фотосессию меблированного интерьера.',
    'Даёт материалы для рекламных кампаний, сайта и соцсетей сразу после получения заявки.',
    'Помогает продавать быстрее: визуально сильное объявление получает больше просмотров и заявок.',
];

const painCards: Card[] = [
    {
        title: 'Объект ещё не готов, а продавать нужно уже сейчас',
        text: 'Строительство идёт — а покупатели уже смотрят. Фото «чернового бетона» отпугивают. AI-рендер показывает финальный вид и помогает клиенту решиться на покупку.',
    },
    {
        title: 'Фотосессия пустой квартиры ничего не продаёт',
        text: 'Пустые стены и голые полы не вызывают эмоций. Покупатель не может представить, как здесь будет жить. Визуализированный интерьер решает это.',
    },
    {
        title: 'Реальный стейджинг — это дорого и долго',
        text: 'Аренда мебели, логистика, фотограф и постпродакшн стоят от 1 000 ₾ и занимают дни. AI-визуализация обычно в 3-7 раз дешевле при сопоставимом маркетинговом эффекте.',
    },
    {
        title: 'Рекламные материалы не успевают за темпом продаж',
        text: 'Пока фотосессия согласовывается, момент теряется. AI-рендер даёт готовые файлы за 24-72 часа.',
    },
    {
        title: 'Один объект нужно показать в разных стилях',
        text: 'Скандинавский, современный, грузинский колорит, нейтральный минимализм: разные сегменты аудитории хотят разную подачу. AI позволяет быстро собрать несколько версий.',
    },
    {
        title: 'Высокая конкуренция в объявлениях',
        text: 'На SS.ge, MyHome.ge и Airbnb нужно выделяться. Визуально сильный рендер повышает заметность и CTR.',
    },
];

const earnPoints = [
    'Визуально сильный объект продаётся быстрее: меньше дней в экспозиции и ниже риск скидок.',
    'Запуск рекламы возможен до завершения стройки: продажи стартуют раньше.',
    'Несколько вариантов интерьера расширяют аудиторию: каждая группа видит «свой» стиль.',
    'Агентства могут монетизировать услугу как дополнительный сервис для своих клиентов.',
];

const avoidLossPoints = [
    'Экономия до 80% на физической фотосессии и стейджинге.',
    'Снижение риска неудачной фотосессии: плохой свет, неудачный ракурс, не та мебель.',
    'Правки стиля и деталей обходятся дешевле, чем повторный выезд и пересъёмка.',
    'Экономия времени: от брифа до готовых файлов — 1-3 дня.',
];

const deliverables = [
    '3-8 изображений готового пространства (меблированный интерьер, разные ракурсы).',
    'До 3 вариантов стиля интерьера (светлый минимализм, тёплый скандинавский, современная классика).',
    'Адаптация под сайт, Instagram, MyAuto/SS.ge и рекламные баннеры.',
    'Форматы: PNG / JPG / WebP, разрешение от 2000×2000 px до 4K (3840×2160).',
    'Пакет ресайзов: 1:1, 4:5, 16:9.',
    'Промт-файл и источниковые референсы (по запросу в Full-пакете).',
    'Передача через Google Drive / WeTransfer.',
    'Срок: 24-72 часа с момента брифа и предоплаты.',
];

const useCases: Card[] = [
    {
        title: 'Продажа квартиры в новостройке на этапе отделки',
        text: 'Застройщик запускает предпродажи, но есть только чертежи. AI-рендеры показывают готовую квартиру с мебелью и светом, первые заявки приходят до окончания работ.',
    },
    {
        title: 'Вывод вторичного объекта на рынок',
        text: 'Риелтор получает пустую «бабушкину» квартиру. Вместо слабой фотосессии — визуализация в современном стиле и более сильная конверсия объявления.',
    },
    {
        title: 'Питч инвесторам под коммерческий объект',
        text: 'Девелоперу нужны материалы для апартаментов, офисов или торговых площадей. AI-рендеры за 2 дня закрывают задачу презентации, которая раньше требовала 3D-студию и недели работ.',
    },
    {
        title: 'Тест концепций дизайна до ремонта',
        text: 'Собственник выбирает между минимализмом и тёплым лофтом. AI даёт обе версии за сутки, решение принимается до затрат на ремонт.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1. Квартира на этапе черновой отделки, Тбилиси',
        text: 'Застройщик хотел запустить продажи до завершения внутренних работ. Подготовили 5 AI-изображений в двух стилях по плану и референсам. Объявления вышли на неделю раньше плана.',
    },
    {
        title: 'Кейс 2. Вторичный рынок: пустая квартира в Сабуртало',
        text: 'Фотографии были невыразительными. После AI-визуализации с современным интерьером запросов на просмотр стало вдвое больше в первую неделю.',
    },
    {
        title: 'Кейс 3. Питч-презентация для инвесторов',
        text: 'Для апарт-отеля требовались визуалы до начала стройки. За 48 часов сделали 8 рендеров в едином стиле для слайдов и PDF-презентации.',
    },
];

const socialProofItems = [
    'Используем профессиональные AI-инструменты с коммерческой лицензией, а не бесплатные генераторы.',
    'Каждый рендер проходит ручной контроль качества: артефакты, пропорции, читаемость пространства.',
    'Базируемся в Тбилиси и понимаем локальный рынок и форматы площадок.',
    'Быстрый цикл: брифинг → первые варианты → правки → финал за 1-3 дня.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-визуализация недвижимости?',
        answer:
            'Это создание реалистичных изображений объекта с помощью искусственного интеллекта. Вы присылаете план или фото пространства — мы создаём картинки готового интерьера без фотографа, мебели и съёмки.',
    },
    {
        question: 'Как это выглядит: как мультик или как фото?',
        answer:
            'Мы используем фотореалистичные модели и постобработку. Результат воспринимается как качественная интерьерная фотография, близкая к рендерам премиальных застройщиков.',
    },
    {
        question: 'Что нужно подготовить перед заказом?',
        answer:
            'Достаточно фото пространства (даже с телефона), плана помещения или чертежа, и референсов стиля — можно несколько картинок из интернета.',
    },
    {
        question: 'Можно ли попросить конкретную мебель или бренд?',
        answer:
            'Да, учитываем стиль, цвет и общую концепцию по референсам. Точное воспроизведение конкретных брендовых предметов требует дополнительной работы.',
    },
    {
        question: 'Законно ли использовать AI-рендер в объявлении?',
        answer:
            'Да. Важно обозначать, что это «визуализация» или «рендер», а не фото готового объекта. Это стандартная практика рынка.',
    },
    {
        question: 'Что если результат не понравится?',
        answer:
            'В каждый пакет включён один раунд правок (в Full — два). Чем точнее бриф на старте, тем быстрее получаем финал без лишних итераций.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуализация квартиры?',
        answer:
            'Basic — от 150 ₾ (3 изображения, 1 стиль). Standard — от 280 ₾ (6 изображений, 2 стиля). Full — от 450 ₾ (8+ изображений, 3 стиля, ресайзы и расширенный пакет).',
    },
    {
        question: 'Что влияет на цену?',
        answer:
            'Количество изображений, число стилевых вариантов, сложность пространства, срочность, объём детализации и дополнительные требования к материалам.',
    },
    {
        question: 'Как быстро получу результат?',
        answer: 'Стандартный срок — 24-72 часа. Срочный заказ — от 12 часов с доплатой 30%.',
    },
    {
        question: 'Как происходит оплата?',
        answer: 'Предоплата 50% — старт работ. Остаток после финального согласования. Возможна оплата переводом или картой.',
    },
    {
        question: 'Можно заказать визуализацию для нескольких квартир сразу?',
        answer: 'Да. Для заказов от 5 объектов действует скидка, формат хорошо подходит застройщикам и агентствам.',
    },
    {
        question: 'Можно использовать файлы в коммерческих целях?',
        answer:
            'Да. Передаём файлы с правом коммерческого использования: реклама, сайт, соцсети, печатные материалы и презентации.',
    },
];

const processSteps = [
    'Бриф: вы присылаете фото/план объекта, референсы и пожелания по объёму.',
    'Согласование: обсуждаем детали, выбираем пакет, подтверждаем предоплату.',
    'Генерация и постобработка: создаём изображения, проверяем артефакты, улучшаем детали.',
    'Первая выдача: отправляем превью в мессенджер или на почту.',
    'Правки и финал: при необходимости корректируем и передаём финальные файлы через Google Drive.',
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        subtitle: 'Для первого знакомства с услугой или быстрого запуска объявления.',
        timeline: 'Срок: 24-48 ч',
        items: ['3 изображения одного пространства', '1 стиль интерьера', '2K, JPG/PNG', '1 ресайз 1:1', '1 раунд правок'],
    },
    {
        title: 'Standard',
        price: 'от 280 ₾',
        subtitle: 'Для полноценного объявления и рекламной кампании.',
        timeline: 'Срок: 48-72 ч',
        items: ['6 изображений', '2 стиля интерьера', '4K, JPG/PNG/WebP', 'Ресайзы 1:1, 4:5, 16:9', '1 раунд правок'],
    },
    {
        title: 'Full',
        price: 'от 450 ₾',
        subtitle: 'Для девелоперов, агентств и питч-презентаций.',
        timeline: 'Срок: 48-96 ч',
        items: ['10+ изображений', '3 стиля интерьера', '4K, все форматы', 'Печать + промт-файл + референсы', '2 раунда правок'],
    },
];

const comparisonRows: ComparisonRow[] = [
    { label: 'Цена от', basic: '150 ₾', standard: '280 ₾', full: '450 ₾' },
    { label: 'Изображений', basic: '3', standard: '6', full: '10+' },
    { label: 'Вариантов стиля', basic: '1', standard: '2', full: '3' },
    { label: 'Разрешение', basic: '2K', standard: '4K', full: '4K' },
    { label: 'Ресайзы под соцсети', basic: '1 формат', standard: '3 формата', full: 'все форматы' },
    { label: 'Версия для печати', basic: '—', standard: '—', full: '✓' },
    { label: 'Промт-файл', basic: '—', standard: '—', full: '✓' },
    { label: 'Раундов правок', basic: '1', standard: '1', full: '2' },
    { label: 'Срок', basic: '24-48 ч', standard: '48-72 ч', full: '48-96 ч' },
    {
        label: 'Подходит если',
        basic: 'Нужно быстро запустить объявление',
        standard: 'Нужен рекламный пакет',
        full: 'Девелопер/агентство/инвестор',
    },
];

const relatedServices = [
    { title: 'AI staging и виртуальная меблировка', href: '/ai-visual/ai-staging' },
    { title: 'Аэросъёмка недвижимости с дрона', href: '/drone-real-estate' },
    { title: '360° виртуальный тур для объекта', href: '/360-tour-real-estate' },
    { title: 'AI-визуализация интерьеров и пространств', href: '/ai-visual/ai-interior' },
];

const mistakes: Card[] = [
    {
        title: 'Не дают референсы стиля',
        text: '«Сделайте красиво» — слишком широкое ТЗ. Две ссылки из Pinterest обычно экономят час переделок.',
    },
    {
        title: 'Ожидают точное воспроизведение реального плана',
        text: 'AI-рендер — это маркетинговый концепт, а не архитектурная документация. Небольшие отклонения пропорций допустимы.',
    },
    {
        title: 'Заказывают один ракурс',
        text: 'Объявление с 3-6 изображениями работает заметно сильнее, чем с одним кадром.',
    },
    {
        title: 'Просят нереалистичный результат',
        text: 'Нереалистичная «люксовость» для бюджетного объекта подрывает доверие. Честный рендер продаёт лучше в долгую.',
    },
    {
        title: 'Не уточняют целевую аудиторию',
        text: 'Для семьи с детьми и инвестора под аренду нужны разные стили. Уточнение аудитории повышает конверсию.',
    },
    {
        title: 'Ждут результат в тот же день без срочного тарифа',
        text: 'Стандартный срок 24-72 часа. Если нужно быстрее — это согласуется отдельно при брифинге.',
    },
];

const freeImprovements = [
    'Сфотографируйте пространство при дневном свете — это улучшает базу для AI.',
    'Уберите лишние предметы перед съёмкой: пустое пространство легче трансформировать.',
    'Подберите 5-7 референсов из Pinterest или Houzz.',
    'Проверьте форматы площадок: SS.ge, MyHome.ge, Instagram.',
    'Опишите целевого покупателя: молодая пара, семья, инвестор.',
];

const checklist = [
    'Есть фото пространства (2-3 кадра хотя бы с телефона).',
    'Есть план или понимание планировки.',
    'Определён стиль интерьера или собраны референсы.',
    'Понятна целевая аудитория объекта.',
    'Понятно, для каких платформ нужны изображения.',
    'Согласован бюджет (Basic / Standard / Full).',
    'Известен дедлайн.',
    'Есть контакт в мессенджере для оперативной связи.',
];

const longAnswers: Card[] = [
    {
        title: 'Чем AI-визуализация отличается от классической 3D-визуализации?',
        text: 'Классическая 3D строит геометрию помещения с нуля и занимает от 3 дней до 2 недель, обычно от 500 ₾ за изображение. AI-визуализация опирается на реальное фото/план, работает быстрее (1-3 дня) и дешевле. Для маркетинга этого обычно достаточно, для архитектурной документации нужна классическая 3D-модель.',
    },
    {
        title: 'Можно ли использовать AI-рендер в официальной рекламе и объявлениях?',
        text: 'Да, при честной маркировке как «рендер», «визуализация» или «концепт». Это стандарт рынка, включая крупные новостройки. Файлы передаются с правом коммерческого использования.',
    },
    {
        title: 'Сколько изображений достаточно для хорошего объявления?',
        text: 'Минимум 3-4 изображения, оптимально 6-8, чтобы показать основные зоны: гостиная, кухня, спальня, санузел, коридор. Практика показывает, что 5+ изображений обычно дают больше кликов, чем 1-2.',
    },
    {
        title: 'Как подготовить объект к AI-визуализации без выезда?',
        text: 'За 10-15 минут: снять каждую комнату при дневном свете с 2-3 ракурсов, убрать личные вещи из кадра, отправить план и 3-5 референсов стиля в WhatsApp.',
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуализация квартиры в Тбилиси?',
        answer: 'От 150 ₾ за Basic (3 изображения). Standard — от 280 ₾, Full — от 450 ₾.',
    },
    {
        question: 'Как быстро делается AI-рендер интерьера?',
        answer: 'Обычно за 24-72 часа после получения брифа и предоплаты.',
    },
    {
        question: 'Нужна ли фотосессия для AI-визуализации?',
        answer: 'Нет. Достаточно фото с телефона и плана помещения.',
    },
    {
        question: 'Можно ли использовать AI-рендер в рекламе?',
        answer: 'Да, при маркировке «визуализация» или «рендер».',
    },
    {
        question: 'Чем AI-рендер отличается от 3D-визуализации?',
        answer: 'AI быстрее и дешевле для маркетинга; 3D точнее и нужна для проектных задач.',
    },
    {
        question: 'Можно ли сделать визуализацию без выезда на объект?',
        answer: 'Да. Работа полностью дистанционная через мессенджер.',
    },
    {
        question: 'Сколько вариантов стиля можно заказать?',
        answer: 'Basic — 1 стиль, Standard — 2, Full — 3.',
    },
    {
        question: 'Подходит ли AI-визуализация для строящегося ЖК?',
        answer: 'Да. Это частый сценарий предпродаж на этапе котлована и отделки.',
    },
];

const myths: MythItem[] = [
    {
        myth: '«AI-рендер — это мультик, покупатель сразу видит разницу»',
        reality:
            'Современные фотореалистичные модели в сочетании с ручной доработкой дают результат, близкий к интерьерной съёмке. Отличие чаще в детализации, а не в «мультяшности».',
    },
    {
        myth: '«Это одна кнопка в бесплатном приложении»',
        reality:
            'Профессиональный процесс включает инпейнтинг, промптинг, апскейлинг, ретушь и QC. Это не случайная генерация, а управляемый продакшн.',
    },
    {
        myth: '«AI точно воспроизведёт план до миллиметра»',
        reality: 'AI работает как маркетинговая визуализация концепции. Для инженерной точности нужна классическая 3D-студия.',
    },
    {
        myth: '«Дёшево значит плохо»',
        reality: 'AI дешевле за счёт отсутствия физической логистики, мебели и съёмочной команды, а не из-за низкого качества.',
    },
    {
        myth: '«Покупатели не доверяют рендерам»',
        reality: 'Рендеры — стандарт продаж новостроек в Тбилиси, Батуми и на глобальном рынке.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Рендер',
        definition: 'Финальное изображение, созданное искусственно через AI или 3D, а не снятое камерой.',
    },
    {
        term: 'AI-визуализация',
        definition: 'Создание изображений с помощью AI на базе фото, плана или текстового описания.',
    },
    {
        term: 'Инпейнтинг',
        definition: 'Техника замены части изображения (например, пустая комната → меблированная).',
    },
    {
        term: 'Апскейлинг',
        definition: 'Увеличение разрешения AI-методом без заметной потери качества.',
    },
    {
        term: 'Референс',
        definition: 'Пример изображения, который задаёт стиль и визуальное направление.',
    },
    {
        term: 'Стейджинг',
        definition: 'Подготовка пространства к показу. Виртуальный стейджинг делает это через AI без физической мебели.',
    },
];

const notFitItems = [
    'Тем, кому нужна архитектурная документация и рабочие чертежи.',
    'Тем, кто ожидает стопроцентного совпадения с планом в миллиметрах.',
    'Тем, кто хочет генерировать полностью несуществующий объект с нуля.',
    'Тем, кто принципиально против публикации визуализаций в объявлениях.',
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...moneyFaqItems, ...shortQa].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: SITE_URL,
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'AI-визуализация',
            item: `${SITE_URL}/ai-visualization-service`,
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'AI-визуализация недвижимости',
            item: CANONICAL_URL,
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-визуализация недвижимости',
    description: PAGE_DESCRIPTION,
    serviceType: 'AI-визуализация недвижимости для маркетинга и продаж',
    areaServed: ['Tbilisi', 'Batumi', 'Kutaisi', 'Georgia'],
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: SITE_URL,
        telephone: CONTACT_PHONE,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tbilisi',
            addressCountry: 'GE',
        },
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '150',
        highPrice: '450',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function AiRealEstatePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#packages' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pt-44">
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.22),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                                AI-визуализация недвижимости · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                AI-визуализация недвижимости — превью объекта до завершения и меблировки
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Покажите покупателю готовый объект ещё до того, как он построен или отремонтирован. AI-рендеры за
                                24-72 часа, без съёмочной группы.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Продавать «бетон и планировку» сложнее, чем продавать готовый стильный интерьер. AI-визуализация
                                превращает чертежи, эскизы или пустое пространство в фотореалистичные изображения для сайта,
                                объявлений, Instagram и презентаций. Breus Media делает это в Тбилиси: от первого брифа до финальных
                                файлов за 1-3 дня.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Получить демо-визуализацию
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за пакет Basic.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24-72 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3-10+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">изображений</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Клиент: застройщик, девелопер, риелтор, инвестор</li>
                                    <li>Форматы JPG/PNG/WebP, до 4K</li>
                                    <li>Тбилиси и вся Грузия дистанционно</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <article>
                        <h2 className="text-3xl font-bold md:text-4xl">Объяснение услуги простым языком</h2>
                        <p className="mt-5 leading-relaxed text-white/72">{serviceExplanation}</p>
                    </article>

                    <article className="rounded-[16px] border border-[#2a2a2a] bg-[#121212] p-6">
                        <h3 className="text-xl font-bold">Что получает клиент на выходе</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">
                            Клиент получает папку с файлами изображений в высоком разрешении. Всё готово к публикации: сайт,
                            Meta/Google Ads, Instagram, SS.ge, MyHome.ge, Airbnb. Передача — ссылкой на Google Drive. Срок — 1-3
                            рабочих дня. Один раунд правок включён в любой пакет.
                        </p>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {audienceItems.map((item) => (
                            <li
                                key={item}
                                className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="mb-5 text-2xl font-bold">Какую задачу решает услуга</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                            {solutionItems.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-7">
                        <h2 className="mb-5 text-2xl font-bold">Локальный контекст</h2>
                        <p className="text-sm leading-relaxed text-white/75">
                            Рынок недвижимости Тбилиси и Батуми активно растёт, и конкуренция на SS.ge, MyHome.ge и Airbnb становится
                            выше. Большинство объектов выходит с телефонными фото пустых комнат. AI-визуализация — конкурентное
                            преимущество, которое пока используют единицы. Работаем с объектами в Тбилиси, Батуми, Кутаиси и по всей
                            Грузии дистанционно.
                        </p>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Боли клиента</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {painCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="mb-3 text-base font-bold">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="mb-5 text-2xl font-bold">Как помогает заработать</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                            {earnPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-7">
                        <h2 className="mb-5 text-2xl font-bold">Как помогает не потерять</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                            {avoidLossPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
                    <article>
                        <h2 className="mb-6 text-3xl font-bold">Deliverables</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                            {deliverables.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold">Почему Breus Media</h3>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                            <li>Мы медиапродакшн, а не SaaS: за проектом стоит живой специалист.</li>
                            <li>Работаем с коммерческими AI-лицензиями профессионального уровня.</li>
                            <li>Каждый рендер проходит ручной контроль качества.</li>
                            <li>Локальный опыт: Тбилиси и рынок Грузии, форматы местных платформ.</li>
                            <li>Быстрая коммуникация в WhatsApp/Telegram и понятный процесс.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:flex md:items-center md:justify-between">
                        <div>
                            <p className="text-xl font-bold text-white">Быстрый путь к офферу</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Если задача уже понятна, переходите сразу к пакетам и оставляйте бриф. Развёрнутые
                                образовательные блоки и long-tail ответы остаются ниже.
                            </p>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-3 md:mt-0 md:justify-end">
                            <a
                                href="#packages"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#D4A017]"
                            >
                                К пакетам
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Оставить бриф
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <MidCta
                text="Хотите посмотреть, как будет выглядеть ваш объект до того, как там появится мебель или завершится ремонт?"
                buttonLabel="Получить демо-визуализацию"
                href={WHATSAPP_URL}
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Сценарии использования</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="mb-3 text-lg font-bold text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Примеры и мини-кейсы</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="mb-3 text-base font-bold">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>

                    <h3 className="mt-12 text-xl font-bold">Social proof / доказательства</h3>
                    <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-4 text-sm text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Этапы работы</h2>
                    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((item, index) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">Шаг {index + 1}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">{item}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Пакеты</h2>
                    <div className="grid gap-5 lg:grid-cols-3">
                        {packageCards.map((pkg) => (
                            <article key={pkg.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">{pkg.title}</p>
                                <p className="mt-3 text-3xl font-bold">{pkg.price}</p>
                                <p className="mt-2 text-sm text-white/65">{pkg.subtitle}</p>
                                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">{pkg.timeline}</p>
                                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
                                    {pkg.items.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-[#D4A017]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-[14px] border border-[#2a2a2a] bg-[#111111]">
                        <table className="min-w-full text-left text-sm text-white/80">
                            <thead className="border-b border-[#2a2a2a] bg-[#151515] text-xs uppercase tracking-[0.16em] text-white/45">
                                <tr>
                                    <th className="px-4 py-3">Параметр</th>
                                    <th className="px-4 py-3">Basic</th>
                                    <th className="px-4 py-3">Standard</th>
                                    <th className="px-4 py-3">Full</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.label} className="border-b border-[#222] last:border-b-0">
                                        <td className="px-4 py-3 font-semibold text-white">{row.label}</td>
                                        <td className="px-4 py-3">{row.basic}</td>
                                        <td className="px-4 py-3">{row.standard}</td>
                                        <td className="px-4 py-3">{row.full}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#D4A017]/35 bg-[#131313] p-5 text-sm text-white/80">
                        <p className="font-bold text-white">Помощник выбора пакета</p>
                        <ul className="mt-3 space-y-2">
                            <li>Хочу попробовать или нужно одно объявление → Basic.</li>
                            <li>Нужны материалы для сайта, рекламы и соцсетей → Standard.</li>
                            <li>Несколько объектов или питч инвесторам → Full.</li>
                        </ul>
                        <p className="mt-4">
                            Не уверены? Поможем выбрать за 5 минут: <a href={`tel:${CONTACT_PHONE_PLAIN}`}>{CONTACT_PHONE}</a>
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Пришлите фото или план вашего объекта — покажем, как он может выглядеть."
                buttonLabel="Написать в WhatsApp"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} bgColor="#0D0D0D" />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" bgColor="#080808" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <details className="group rounded-[16px] border border-[#2a2a2a] bg-[#131313] p-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                            <span className="text-3xl font-bold md:text-4xl">Частые ошибки при заказе</span>
                            <span className="text-2xl font-bold text-[#D4A017] transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            {mistakes.map((item) => (
                                <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="mb-3 text-base font-bold">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </details>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="mb-5 text-2xl font-bold">Что можно улучшить без покупки</h2>
                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                            {freeImprovements.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="mb-5 text-2xl font-bold">Checklist готовности к заказу AI-визуала</h2>
                        <ul className="space-y-2 text-sm leading-relaxed text-white/75">
                            {checklist.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="text-[#D4A017]">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <details className="group rounded-[16px] border border-[#2a2a2a] bg-[#131313] p-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                            <span className="text-3xl font-bold md:text-4xl">Расширенные ответы (long-tail SEO)</span>
                            <span className="text-2xl font-bold text-[#D4A017] transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            {longAnswers.map((item) => (
                                <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="mb-3 text-base font-bold text-[#D4A017]">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/72">{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <h3 className="mt-12 text-xl font-bold">Short Q&A для AI-поиска</h3>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            {shortQa.map((item) => (
                                <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-5">
                                    <p className="text-sm font-bold">Q: {item.question}</p>
                                    <p className="mt-2 text-sm text-white/72">A: {item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </details>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <details className="group rounded-[16px] border border-[#2a2a2a] bg-[#131313] p-6">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                            <span className="text-3xl font-bold md:text-4xl">Мифы и реальность</span>
                            <span className="text-2xl font-bold text-[#D4A017] transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            {myths.map((item) => (
                                <article key={item.myth} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-base font-bold text-white">Миф: {item.myth}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-[#D4A017]">Реальность:</span> {item.reality}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <h3 className="mt-12 text-xl font-bold">Мини-словарь терминов</h3>
                        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {glossary.map((item) => (
                                <article key={item.term} className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-5">
                                    <h4 className="text-sm font-bold text-[#D4A017]">{item.term}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-white/72">{item.definition}</p>
                                </article>
                            ))}
                        </div>
                    </details>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Кому мы НЕ подходим</h2>
                    <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                        {notFitItems.map((item) => (
                            <li key={item} className="flex gap-3 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#D4A017]/60"
                            >
                                <p className="text-sm font-bold text-white group-hover:text-[#D4A017]">{item.title}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{item.href}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 space-y-3 rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-5 text-sm leading-relaxed text-white/75">
                        <p>
                            Хотите показать не только интерьер, но и внешний вид и территорию? Смотрите{' '}
                            <Link href="/drone-real-estate" className="text-[#D4A017] underline-offset-4 hover:underline">
                                аэросъёмку недвижимости
                            </Link>
                            .
                        </p>
                        <p>
                            Нужна виртуальная меблировка существующего пространства? Перейдите в{' '}
                            <Link href="/ai-visual/ai-staging" className="text-[#D4A017] underline-offset-4 hover:underline">
                                AI staging
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                        Мы находимся в Тбилиси и работаем дистанционно по всей Грузии. Чтобы начать, пришлите фото пространства или
                        план в WhatsApp — ответим в течение рабочего дня.
                    </p>
                    <p className="mt-4 text-xl font-bold text-[#D4A017]">{CONTACT_PHONE}</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={WHATSAPP_URL}
                            className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp
                        </a>
                        <a
                            href={`tel:${CONTACT_PHONE_PLAIN}`}
                            className="inline-flex items-center justify-center rounded-[12px] border border-white/25 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                        >
                            Позвонить
                        </a>
                    </div>
                </div>
            </section>

            <ProcessNote text="Мы не используем одну кнопку и не полагаемся на случайный результат. Процесс включает бриф, выбор стиля, генерацию, постобработку, контроль качества и финальную выдачу. Поэтому результат выглядит как профессиональный рендер, а не как случайная нейросетевая картинка." />

            <section className="bg-[#080808] pb-16 pt-8 text-center text-xs text-white/45">
                <p>Breus Media — медиапродакшн в Тбилиси. AI-визуализация, аэросъёмка, 360° туры, Reels. © 2026.</p>
            </section>

            <DroneFooterStitch />
        </main>
    );
}
