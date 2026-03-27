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

type LongAnswerItem = {
    question: string;
    answers: string[];
};

type PackagePlan = {
    name: string;
    price: string;
    timeline: string;
    items: string[];
};

type ComparisonRow = {
    label: string;
    basic: string;
    standard: string;
    full: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-interior';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';
const SITE_URL = 'https://breusmedia.com';

const heroSubtitle = 'Покажите, каким будет ваш отель, ресторан или офис — ещё до завершения ремонта.';

const heroIntro =
    'Когда пространство ещё строится или ремонтируется — у вас уже есть концепция. Но показать её гостям, инвесторам или команде нечем. AI-визуализация превращает описание, эскизы или референсы в фотореалистичные изображения вашего будущего интерьера. Это не видеосъёмка и не 3D-тур — это набор изображений, которые можно поставить в Instagram, на сайт, в презентацию или в рекламный кабинет. Breus Media делает AI-визуализацию для отелей, ресторанов, клиник и офисов в Грузии.';

const serviceExplanation =
    'Мы создаём изображения вашего пространства с помощью искусственного интеллекта — до того, как ремонт завершён. Вы присылаете нам фото текущего состояния, описание концепции или дизайн-референсы — мы генерируем картинки готового интерьера: с правильным светом, атмосферой и декором. Никакой фотосессии, никакой съёмочной группы. Только готовые файлы изображений — PNG, JPG, WebP.';

const audienceItems: string[] = [
    'Отелям и гостевым домам на стадии ремонта, которым нужны визуалы для бронирований.',
    'Ресторанам, которые хотят анонсировать открытие заранее.',
    'Клиникам, выстраивающим доверие через визуальный образ пространства.',
    'Офисам и коворкингам — для презентаций и сайта.',
    'Коммерческим арендодателям, показывающим потенциал помещения.',
    'Архитекторам и дизайнерам, которым нужны быстрые концепты для согласования с клиентом.',
];

const taskItems: string[] = [
    'Позволяет показать концепцию пространства до реализации — инвесторам, клиентам, СМИ.',
    'Помогает анонсировать открытие и строить ожидание ещё во время ремонта.',
    'Даёт материалы для Instagram, сайта и рекламы с первого дня без ожидания готового объекта.',
    'Позволяет протестировать несколько дизайн-решений до начала дорогостоящих работ.',
];

const painCards: CardItem[] = [
    {
        title: '1. Ремонт ещё идёт, а открытие нужно анонсировать уже сейчас',
        text: 'Маркетинг нельзя запускать с фото строительного мусора. AI-визуализация даёт готовый визуал для анонса.',
    },
    {
        title: '2. Инвесторам и партнёрам не хватает картинки',
        text: 'Концепция в голове — это не питч. AI-рендеры превращают идею в убедительный визуал для деловых переговоров.',
    },
    {
        title: '3. Нанять 3D-студию — слишком дорого и долго',
        text: '3D-визуализация от профессиональной студии стоит от 800–2000 ₾ за сцену и занимает 1–2 недели. AI-подход в 3–5 раз быстрее и дешевле.',
    },
    {
        title: '4. Дизайн-концепция меняется — переделывать 3D каждый раз невозможно',
        text: 'При смене дизайн-решения 3D-модель переделывается с нуля. AI-вариация стоит в разы дешевле и делается за часы.',
    },
    {
        title: '5. Сайт и соцсети нужно наполнять уже сейчас',
        text: 'Запустить пустой Instagram или сайт без визуального контента — значит потерять первых подписчиков и посетителей.',
    },
    {
        title: '6. Сложно объяснить команде или дизайнеру «что именно нужно»',
        text: 'Показать AI-рендер — лучший способ согласовать концепцию быстро и без длинных переписок.',
    },
];

const earnItems: string[] = [
    'Ранний анонс открытия через визуалы → первые бронирования / заявки ещё до открытия.',
    'Сильный визуал в Instagram → рост подписчиков до момента запуска.',
    'Убедительный питч → быстрее получить финансирование или партнёрство.',
    'Визуально сильный сайт → доверие с первого посещения → выше конверсия.',
];

const saveItems: string[] = [
    'Тест дизайна через AI до начала ремонта → экономия на переделках.',
    'Быстрый результат без 3D-студии → экономия 500–1500 ₾.',
    'Визуалы без съёмочной группы → нет привязки к срокам ремонта.',
    'Можно менять концепцию дешёво → снижение риска «не то».',
];

const deliverables: string[] = [
    '4–10 изображений интерьера (зал, лобби, отдельные зоны, детали атмосферы).',
    '1–3 варианта дизайн-концепции (Base: 1, Standard: 2, Full: 3).',
    'Дневная и вечерняя подача пространства (при наличии в пакете).',
    'Форматы: JPG, PNG, WebP — от 2K до 4K.',
    'Ресайзы под Instagram, сайт, Google Maps.',
    'Передача через Google Drive.',
    'Срок: 48–96 часов.',
];

const outputText =
    'Набор изображений готового интерьера в высоком разрешении — для Instagram, сайта, рекламы, презентаций. Каждое изображение — это фотореалистичная картина вашего пространства такими, какими они будут после завершения дизайна. Нет строительного мусора, нет незаконченных деталей — только конечный образ.';

const useCases: CardItem[] = [
    {
        title: '1. Отель строит Instagram до открытия',
        text: 'Новый бутик-отель в Тбилиси ещё ремонтируется. AI-визуализация номеров и лобби даёт визуал для первых 30 постов. Подписчики растут ещё до открытия — и первые бронирования поступают с первой недели работы.',
    },
    {
        title: '2. Ресторан анонсирует открытие',
        text: 'Концепция грузинского ресторана с современным интерьером. AI-рендеры зала, барной зоны и входа — для анонса в Instagram и Google Maps. Первые брони на открытие сформированы заранее.',
    },
    {
        title: '3. Клиника тестирует дизайн до начала отделки',
        text: 'Частная стоматология хочет современный интерьер, который создаёт доверие. AI-визуализация трёх концептов ресепшена и кабинета — до начала закупки материалов.',
    },
    {
        title: '4. Архитектор согласовывает концепцию с клиентом',
        text: 'Вместо долгого обсуждения «что вы имеете в виду» — AI-рендер за сутки показывает вариант, который клиент либо одобряет, либо корректирует. Экономия времени на переговорах.',
    },
];

const localContextText =
    'В Тбилиси открывается всё больше бутик-отелей, новых кафе и медицинских клиник, ориентированных на туристов и relocated-аудиторию. Визуальный образ пространства — ключевой фактор при выборе через Google, Instagram и Booking. AI-визуализация позволяет начать строить этот образ ещё до открытия. Breus Media работает с командами в Тбилиси и удалённо по всей Грузии.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1. Бутик-отель в Старом Тбилиси',
        text: 'Владелец хотел запустить Instagram до открытия. AI-визуализация 6 зон отеля (лобби, номер, терраса) дала контент для первых постов. Профиль набрал первых подписчиков за неделю до открытия.',
    },
    {
        title: 'Кейс 2. Ресторан грузинской кухни, Руставели',
        text: 'Концепция была чёткой, но ремонт ещё шёл. AI-рендеры зала и барной зоны помогли сделать анонсный пост с 500+ реакциями за два дня.',
    },
    {
        title: 'Кейс 3. Стоматологическая клиника, Ваке',
        text: 'Нужно было показать «чистый и дорогой» образ клиники для нового сайта. AI-визуализация ресепшена и кабинета дала нужный визуал без съёмки незаконченного ремонта.',
    },
];

const socialProofItems: string[] = [
    'Работаем на профессиональных инструментах с опытом в HoReCa, медицине и недвижимости.',
    'Понимаем различия в подаче: отель — это атмосфера, клиника — это чистота и доверие, ресторан — это аппетит.',
    'Все рендеры проверяются вручную: никаких кривых линий, странных теней и артефактов.',
    'Быстрая коммуникация, понятные этапы, честные сроки.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что значит «AI-визуализация интерьера»?',
        answer:
            'Это создание изображений вашего пространства с помощью искусственного интеллекта. Вы присылаете нам фото текущего состояния и описание желаемого результата — мы создаём картинки готового интерьера. Не видео, не тур — только изображения.',
    },
    {
        question: 'Нужно ли иметь готовый дизайн-проект?',
        answer:
            'Нет. Достаточно референсов стиля, концепции и фото пространства. Мы работаем даже на этапе «есть только план помещения и несколько картинок из интернета».',
    },
    {
        question: 'Получится ли фотореалистично?',
        answer:
            'Да. Мы используем инструменты, дающие фотореалистичный результат, и дополнительно проверяем каждый рендер вручную.',
    },
    {
        question: 'Можно ли показывать рендеры гостям как «фото» заведения?',
        answer:
            'Лучше сопровождать подписью «визуализация» или «концепт». Это честно и стандартно для открывающихся заведений.',
    },
    {
        question: 'Можно сделать несколько концепций и выбрать?',
        answer: 'Да. Standard и Full пакеты включают 2 и 3 варианта стиля соответственно.',
    },
    {
        question: 'Вы работаете с архитекторами и дизайнерами?',
        answer:
            'Да. Мы часто сотрудничаем с дизайн-студиями для быстрых концептов, которые упрощают согласование с заказчиком.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуализация интерьера коммерческого пространства?',
        answer:
            'Basic — от 200 ₾ (4 изображения, 1 концепция). Standard — от 380 ₾ (8 изображений, 2 концепции). Full — от 600 ₾ (10+ изображений, 3 концепции, дневная/вечерняя подача).',
    },
    {
        question: 'Как быстро?',
        answer: '48–96 часов. Срочно — от 24 часов с доплатой.',
    },
    {
        question: 'Насколько точно воспроизводится план помещения?',
        answer:
            'Общая структура соблюдается. Точные размеры и архитектурные детали — это задача 3D-студии. Для маркетинга и согласования концепции AI-рендер работает отлично.',
    },
    {
        question: 'Можно ли заказать визуализацию для нескольких зон?',
        answer: 'Да. Full-пакет включает несколько зон. При крупном заказе — обсуждаем индивидуальную цену.',
    },
    {
        question: 'Я могу использовать файлы коммерчески?',
        answer: 'Да. Все файлы передаются с правом коммерческого использования.',
    },
    {
        question: 'Включены ли правки?',
        answer: 'Да. В каждый пакет включён один раунд правок, в Full — два.',
    },
];

const whyUsItems: string[] = [
    'Мы понимаем разные ниши: отели — это атмосфера, клиники — это доверие, рестораны — это аппетит.',
    'Профессиональные инструменты с коммерческими лицензиями.',
    'Ручной контроль качества каждого рендера.',
    'Быстрый процесс: от брифа до первых вариантов за 24–48 часов.',
    'Работаем в Тбилиси, понимаем местный контекст и форматы платформ.',
];

const processSteps: CardItem[] = [
    {
        title: 'Бриф',
        text: 'Фото пространства, описание концепции, референсы стиля.',
    },
    {
        title: 'Согласование',
        text: 'Обсуждаем детали, выбираем пакет, предоплата.',
    },
    {
        title: 'Генерация',
        text: 'AI создаёт изображения, мы контролируем стиль и качество.',
    },
    {
        title: 'Постобработка',
        text: 'Проверяем, улучшаем, убираем артефакты.',
    },
    {
        title: 'Выдача и правки',
        text: 'Пересылаем через Google Drive, вносим правки при необходимости.',
    },
];

const packagePlans: PackagePlan[] = [
    {
        name: 'Basic',
        price: 'от 200 ₾',
        timeline: '48–72 ч',
        items: [
            '4 изображения интерьера',
            '1 концепция / стиль',
            'Формат JPG/PNG, 2K',
            'Ресайзы под Instagram',
            '1 раунд правок',
        ],
    },
    {
        name: 'Standard',
        price: 'от 380 ₾',
        timeline: '48–72 ч',
        items: [
            '8 изображений (несколько зон)',
            '2 концепции / стиля',
            'Формат 4K, JPG/PNG/WebP',
            'Ресайзы для сайта, Instagram, Google Maps',
            '1 раунд правок',
        ],
    },
    {
        name: 'Full',
        price: 'от 600 ₾',
        timeline: '72–96 ч',
        items: [
            '10+ изображений (весь объект)',
            '3 концепции, дневная + вечерняя подача',
            '4K, все форматы',
            'Полный пакет ресайзов',
            '2 раунда правок',
        ],
    },
];

const comparisonRows: ComparisonRow[] = [
    { label: 'Цена от', basic: '200 ₾', standard: '380 ₾', full: '600 ₾' },
    { label: 'Изображений', basic: '4', standard: '8', full: '10+' },
    { label: 'Зон / помещений', basic: '1–2', standard: '2–4', full: 'весь объект' },
    { label: 'Концепций', basic: '1', standard: '2', full: '3' },
    { label: 'Вечерняя подача', basic: '—', standard: '—', full: '✓' },
    { label: 'Разрешение', basic: '2K', standard: '4K', full: '4K' },
    { label: 'Форматы', basic: 'JPG/PNG', standard: 'JPG/PNG/WebP', full: 'все' },
    { label: 'Ресайзы', basic: 'Instagram', standard: 'Instagram + сайт', full: 'все платформы' },
    { label: 'Раундов правок', basic: '1', standard: '1', full: '2' },
    { label: 'Срок', basic: '48–72 ч', standard: '48–72 ч', full: '72–96 ч' },
    { label: 'Подходит если', basic: 'анонс / концепт', standard: 'сайт + соцсети', full: 'полный маркетинг-пакет' },
];

const packageAssistant: string[] = [
    'Нужно анонсировать открытие или показать одну-две зоны → Basic.',
    'Нужны материалы для сайта, Instagram и переговоров → Standard.',
    'Полный объект, несколько концептов, все форматы → Full.',
];

const relatedServices: { title: string; href: string }[] = [
    { title: 'AI staging для жилой недвижимости', href: '/ai-visual/ai-staging' },
    { title: '360° виртуальный тур для отеля или ресторана', href: '/360-tour/hotel' },
    { title: 'Reels и видео для ресторанов', href: '/reels/restaurant' },
    { title: 'AI-визуализация недвижимости', href: '/ai-visual/ai-real-estate' },
];

const internalTransitions: { title: string; href: string }[] = [
    {
        title: 'Объект открылся — закажите реальную фотосессию или 360° тур.',
        href: '/360-tour/hotel',
    },
    {
        title: 'Нужен визуал для меню и доставки? Смотрите AI-карточки и меню.',
        href: '/ai-visual/ai-menu-delivery',
    },
];

const mistakes: CardItem[] = [
    {
        title: '1. Описание без референсов',
        text: '«Сделайте красиво и современно» — слишком широко. Дайте 5 картинок — и результат будет точнее.',
    },
    {
        title: '2. Фото при плохом освещении',
        text: 'Тёмные или желтоватые фото снижают качество AI-генерации. Снимайте днём.',
    },
    {
        title: '3. Ожидают точного воспроизведения дизайн-проекта',
        text: 'AI работает со стилем и атмосферой. Для точного плана — нужна 3D-студия.',
    },
    {
        title: '4. Не думают о зонах',
        text: 'Заказывают один общий вид. А нужен зал, вход, бар, деталь — это разные ракурсы, которые работают вместе.',
    },
    {
        title: '5. Хотят 10 изображений за базовую цену',
        text: 'Базовый пакет — это 4 изображения. Больше изображений = выше пакет или доплата.',
    },
    {
        title: '6. Забывают про вечернее освещение',
        text: 'Для отелей и ресторанов вечерняя атмосфера часто важнее дневной. Уточните это при брифинге.',
    },
];

const improveWithoutPurchase: string[] = [
    'Соберите 10 референсов стиля в Pinterest или Houzz.',
    'Снимите фото каждой зоны при дневном свете.',
    'Определите главную эмоцию пространства: уют, чистота, энергия, роскошь.',
    'Изучите, как ваши конкуренты подают интерьеры в Instagram.',
    'Запишите коротко: кто ваш гость и что он должен почувствовать, войдя в пространство.',
];

const checklistItems: string[] = [
    'Есть фото каждой основной зоны.',
    'Собраны референсы стиля.',
    'Определена эмоция / атмосфера.',
    'Известна целевая аудитория.',
    'Понятно, для каких платформ нужны изображения.',
    'Определены сроки и бюджет.',
    'Есть возможность оперативной связи.',
    'Понятно, что результат будет отмечен как «концепт» или «визуализация».',
];

const longQaItems: LongAnswerItem[] = [
    {
        question: 'Можно ли AI-визуализацию интерьера использовать в Booking.com или Google Maps?',
        answers: [
            'Да, при правильной подаче. На Booking.com рекомендуется подписывать изображения как «Artist\'s impression» или «Визуализация» — это стандарт для открывающихся объектов.',
            'В Google Бизнес-профиле тоже можно добавлять изображения до открытия — главное, что они соответствуют реальности после запуска. Несколько крупных бутик-отелей Тбилиси используют именно такой подход при старте продаж.',
        ],
    },
    {
        question: 'Чем AI-визуализация отличается от фотосессии интерьера?',
        answers: [
            'Фотосессия снимает то, что есть в реальности. AI-визуализация создаёт то, чего ещё нет. Это принципиальная разница.',
            'Фотосессия нужна, когда объект готов. AI-визуализация — когда нужно показать будущее пространство, протестировать концепции или создать маркетинговые материалы до завершения ремонта. После открытия имеет смысл сделать настоящую фотосессию — и Breus Media тоже может её организовать.',
        ],
    },
    {
        question: 'Как AI-визуализация помогает при согласовании дизайн-проекта с заказчиком?',
        answers: [
            'Архитекторы и дизайнеры тратят часы на объяснение концепции через чертежи и техническую документацию. AI-рендер за 24–48 часов показывает клиенту финальный вид помещения — понятно, без интерпретации.',
            'Клиент либо говорит «да», либо сразу указывает, что нужно изменить. Это сокращает итерации и снижает риск дорогостоящих переделок после начала работ.',
        ],
    },
    {
        question: 'Нужна ли AI-визуализация, если у меня уже есть 3D-дизайн-проект?',
        answers: [
            'AI-визуализация и 3D-проект — разные инструменты. 3D-проект точен архитектурно. AI-визуализация быстро создаёт маркетинговый образ, адаптирует стиль под разные концепции и стоит существенно дешевле.',
            'Если у вас есть 3D-проект, мы можем использовать его как референс для создания маркетинговых изображений — атмосферных, живых и подходящих для соцсетей.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-визуализация интерьера ресторана или отеля в Тбилиси?',
        answer: 'От 200 ₾ за базовый пакет (4 изображения, 1 концепция). Full-пакет — от 600 ₾. Breus Media, Тбилиси.',
    },
    {
        question: 'Можно ли показать интерьер кафе до открытия?',
        answer: 'Да. AI-визуализация создаёт изображения будущего интерьера по фото текущего состояния и референсам.',
    },
    {
        question: 'Как быстро делается AI-рендер интерьера коммерческого пространства?',
        answer: 'За 48–72 часа с момента получения брифа.',
    },
    {
        question: 'Нужен ли готовый дизайн-проект для AI-визуализации?',
        answer: 'Нет. Достаточно фото пространства и нескольких референсов стиля.',
    },
    {
        question: 'Можно ли использовать AI-рендер интерьера в Booking.com?',
        answer: 'Да, при пометке «Artist\'s impression» или «Визуализация». Это стандартная практика.',
    },
    {
        question: 'Подходит ли AI-визуализация для клиник?',
        answer: 'Да. Особенно для показа образа пространства на сайте и в соцсетях до завершения ремонта.',
    },
    {
        question: 'Чем AI-рендер отличается от обычной фотосессии интерьера?',
        answer: 'Фотосессия снимает реальность. AI создаёт изображение будущего пространства — до завершения ремонта.',
    },
    {
        question: 'Можно ли получить несколько вариантов дизайна одного помещения?',
        answer: 'Да. Standard (2 концепции) и Full (3 концепции) включают варианты.',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1: «AI не передаёт атмосферу»',
        text: 'Реальность: именно атмосфера — сильная сторона AI. Свет, текстуры, тепло или прохлада пространства — это то, что AI генерирует убедительно. Технические детали — хуже. Атмосфера — отлично.',
    },
    {
        title: 'Миф 2: «Это только для жилья, не для коммерции»',
        text: 'Реальность: AI-визуализация активно используется в HoReCa, медицине, офисах и ритейле по всему миру.',
    },
    {
        title: 'Миф 3: «Нужен готовый дизайн-проект»',
        text: 'Реальность: достаточно концепции и референсов. Проект помогает точности, но не обязателен.',
    },
    {
        title: 'Миф 4: «Это очень дорого»',
        text: 'Реальность: AI-визуализация в 3–5 раз дешевле классической 3D. Базовый пакет для ресторана — от 200 ₾.',
    },
    {
        title: 'Миф 5: «После открытия AI-рендеры уже не нужны»',
        text: 'Реальность: после открытия нужна реальная фотосессия. AI-рендеры — инструмент до открытия и для тестирования идей.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'AI-рендер',
        definition: 'Изображение, созданное искусственным интеллектом на основе фото и референсов.',
    },
    {
        term: 'Концепт',
        definition: 'Визуальный вариант дизайна, показывающий общий образ без архитектурной точности.',
    },
    {
        term: 'Атмосфера',
        definition: 'Совокупность света, цвета, материалов и деталей, создающих настроение пространства.',
    },
    {
        term: 'Инпейнтинг',
        definition: 'Замена части изображения сгенерированным контентом с учётом перспективы.',
    },
    {
        term: 'Референс',
        definition: 'Пример изображения, которое показывает желаемый стиль или настроение.',
    },
    {
        term: 'Постобработка',
        definition: 'Ручная доработка AI-изображения для улучшения качества и устранения артефактов.',
    },
];

const notFitItems: string[] = [
    'Тем, кому нужна архитектурная документация с точными размерами.',
    'Тем, кто хочет получить фотографии реального завершённого интерьера (для этого — фотосессия).',
    'Тем, кто ожидает точного 3D-прохода по всем помещениям.',
    'Тем, кто публикует изображения без пометки «визуализация» с целью ввести в заблуждение.',
];

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
            name: 'AI-визуализация пространств и интерьеров',
            item: CANONICAL_URL,
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...moneyFaqItems, ...shortQaItems].map((item) => ({
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
    serviceType: 'AI-визуализация пространств и интерьеров',
    name: 'AI-визуализация пространств и интерьеров',
    description:
        'AI-изображения отеля, ресторана, клиники или офиса до завершения ремонта. Покажите атмосферу заранее. От 200 ₾. Тбилиси, Грузия.',
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
    title: 'AI-визуализация интерьеров и пространств Тбилиси — атмосфера до открытия | Breus Media',
    description:
        'AI-изображения отеля, ресторана, клиники или офиса до завершения ремонта. Покажите атмосферу заранее. От 200 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-визуализация интерьеров и пространств Тбилиси — атмосфера до открытия | Breus Media',
        description:
            'AI-изображения отеля, ресторана, клиники или офиса до завершения ремонта. Покажите атмосферу заранее. От 200 ₾. Тбилиси, Грузия.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function AiInteriorPage() {
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
                            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80')",
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
                                    AI Visual · Interiors · Tbilisi
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-визуализация пространств и интерьеров — показ атмосферы до реализации
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">{heroSubtitle}</p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Запросить демо-визуализацию
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">Ответим в WhatsApp в тот же день · {CONTACT_PHONE_DISPLAY}</p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ключевые параметры</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 200 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет: 4 изображения и 1 концепция.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">48–96 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–10+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Изображений</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>1–3 концепции интерьера</li>
                                    <li>Ресайзы под Instagram, сайт, Google Maps</li>
                                    <li>Коммерческое использование включено</li>
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
                    <p className="mt-6 max-w-5xl leading-relaxed text-white/72">{outputText}</p>
                </div>
            </section>

            <MidCta
                text="Покажите будущим гостям, как будет выглядеть ваш отель, ресторан или клиника — ещё до открытия."
                buttonLabel="Запросить демо-визуализацию"
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
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{localContextText}</p>
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
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="FAQ для новичка" />
            <FaqSection items={moneyFaqItems} title="FAQ по деньгам и процессу" variant="commercial" />

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

            <ProcessNote text="Мы начинаем с погружения в концепцию: что это за пространство, кто ваша аудитория, какое ощущение должен передавать интерьер. Это занимает 10–15 минут. После этого процесс идёт самостоятельно — и вы получаете первые варианты уже через 24–48 часов." />

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
                                {comparisonRows.map((row) => (
                                    <tr key={row.label} className="border-t border-white/10">
                                        <td className="px-4 py-3">{row.label}</td>
                                        <td className="px-4 py-3">{row.basic}</td>
                                        <td className="px-4 py-3">{row.standard}</td>
                                        <td className="px-4 py-3">{row.full}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-3">
                        {packageAssistant.map((item) => (
                            <div key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-[#FFD23F]">Напишите нам: {CONTACT_PHONE_DISPLAY}</p>
                </div>
            </section>

            <MidCta
                text="Пришлите фото и описание — покажем, как будет выглядеть ваш интерьер после реализации."
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
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16" id="contact">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-white/72">
                        Работаем в Тбилиси, принимаем заказы дистанционно по всей Грузии. Покажите нам фото пространства и
                        концепцию в WhatsApp — ответим с оценкой в тот же день.
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
                title="Short Q&A для AI-поиска"
                items={shortQaItems}
                variant="commercial"
                bgColor="#0D0D0D"
            />

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
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
                        {internalTransitions.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-white/76 transition-colors hover:border-[#D4A017]/55 hover:text-white"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {myths.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
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
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.definition}</p>
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
