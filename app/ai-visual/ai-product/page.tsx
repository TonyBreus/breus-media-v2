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

type ProcessStep = {
    step: string;
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type GlossaryItem = {
    term: string;
    description: string;
};

const CANONICAL_URL = 'https://breus.media/ai-visual/ai-product';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroSubtitle =
    'Создаём реалистичные изображения продуктов для каталогов, рекламы и соцсетей — с помощью AI, без аренды студии.';

const heroIntro =
    'Слабые карточки товара убивают продажи — даже хорошего продукта. Профессиональная студийная съёмка стоит времени и денег, которых часто нет при запуске. AI-продуктовый визуал — это создание высококачественных изображений продукта с помощью искусственного интеллекта: реалистичный фон, правильный свет, нужная атмосфера. Вы получаете изображения — не видео, не тур — готовые для карточек на маркетплейсе, рекламного баннера и Instagram. Breus Media делает это за 24–48 часов, без выезда и аренды студии.';

const serviceExplanation =
    'AI-продуктовый визуал — это когда вы присылаете нам фотографию вашего продукта с телефона, а мы с помощью AI создаём профессиональную карточку товара: красивый фон, правильный свет, нужная атмосфера. Мы не снимаем ваш продукт физически — мы берём существующее фото и трансформируем его в профессиональный маркетинговый визуал. Результат — готовые изображения для сайта, маркетплейса, рекламы и соцсетей.';

const audienceItems: string[] = [
    'Интернет-магазинам и маркетплейсам, которым нужны тысячи карточек товаров.',
    'Брендам, запускающим новый продукт без бюджета на студийную съёмку.',
    'Ресторанам и dark kitchens для карточек блюд на Wolt, Glovo и delivery-платформах.',
    'Производителям — от косметики до продуктов питания.',
    'Малому бизнесу: свечи, мыло, украшения, одежда, handmade.',
    'Стартапам с продуктом, которому нужен сильный первый визуал.',
];

const taskItems: string[] = [
    'Заменяет студийную фотосессию для стандартных маркетинговых нужд.',
    'Создаёт несколько вариантов подачи одного продукта под разные каналы: сайт, реклама, Instagram, маркетплейс.',
    'Позволяет масштабировать визуал на большой ассортимент без роста бюджета.',
    'Ускоряет запуск: от фото продукта до готовых карточек — менее 48 часов.',
];

const painCards: CardItem[] = [
    {
        title: '1. Студийная съёмка дорого и долго',
        text: 'Аренда студии, фотограф, реквизит, постпродакшн — минимум 300–800 ₾ и 3–5 дней. AI-продуктовый визуал выходит в 3–5 раз дешевле.',
    },
    {
        title: '2. Продукт меняется — перефотографировать нечем',
        text: 'Новая упаковка, новый цвет, сезонный вариант — каждый раз организовывать съёмку нереально. AI позволяет менять фон, атмосферу и стиль подачи без перефотографирования.',
    },
    {
        title: '3. Нужно несколько вариантов для A/B-тестов',
        text: 'Один продукт на белом фоне, второй — в lifestyle-сцене, третий — с сезонным декором. Для рекламных тестов нужна вариативность. AI создаёт её быстро.',
    },
    {
        title: '4. Карточки на маркетплейсах слабые — конкуренты выглядят лучше',
        text: 'Первый взгляд на карточку товара решает до 70% покупки: плохое фото ведёт к низкому CTR и меньшим продажам.',
    },
    {
        title: '5. Нет студии и реквизита',
        text: 'Маленький бизнес не может позволить себе постоянную студию. AI позволяет работать с профессиональным результатом без неё.',
    },
    {
        title: '6. Разные каналы требуют разных форматов',
        text: 'Instagram — квадрат, Wolt — прямоугольник, баннер — другой размер. AI делает ресайзы сразу.',
    },
];

const earnItems: string[] = [
    'Лучший визуал → выше CTR в рекламе → ниже стоимость клика.',
    'Профессиональные карточки → больше покупок на маркетплейсе.',
    'Быстрый запуск → раньше начинаются продажи.',
    'A/B-варианты → возможность тестировать и находить лучшую подачу.',
];

const saveItems: string[] = [
    'Экономия на студийной съёмке: до 70% по сравнению с классической фотосессией.',
    'Нет риска неудачной съёмки: фон и стиль легко менять.',
    'Нет зависимости от расписания студии и фотографа.',
    'Правки стоят не как новая съёмка, а как правки.',
];

const deliverables: string[] = [
    '3–8 изображений продукта в профессиональной постановке.',
    'Чистый фон (белый / нейтральный) и lifestyle-сцена (в 2–3 тематических фонах).',
    'Форматы: JPG, PNG, WebP.',
    'Разрешение: от 2K до 4K.',
    'Прозрачный фон (PNG) по запросу.',
    'Ресайзы под форматы: 1:1, 4:5, 16:9 и баннерные размеры.',
    'Передача через Google Drive.',
    'Срок: 24–48 часов.',
];

const outputText =
    'Папка с файлами изображений продукта, готовыми к размещению. Каждый файл — профессиональная карточка, которую можно поставить на сайт, в рекламный кабинет, на карточку Wolt или в Instagram-профиль. Никаких водяных знаков, никакой дополнительной обработки — всё готово к публикации.';

const useCases: CardItem[] = [
    {
        title: '1. Запуск нового продукта без студии',
        text: 'Небольшой бренд косметики запускает линейку. Вместо аренды студии — фото флаконов с телефона плюс AI. Карточки для Instagram и Wolt готовы через 24 часа.',
    },
    {
        title: '2. A/B-тест рекламных баннеров',
        text: 'E-commerce магазин хочет проверить три варианта подачи одного товара. AI создаёт три сцены за один рабочий день — без трёх отдельных съёмок.',
    },
    {
        title: '3. Масштабирование каталога',
        text: 'Производитель выводит 50 позиций. Студийная съёмка всех — дорого. AI позволяет сделать карточки единого стиля для всего ассортимента за разумный бюджет.',
    },
    {
        title: '4. Сезонный ребрендинг визуала',
        text: 'Кофейня хочет новогодний стиль для Instagram и Wolt. AI создаёт праздничные сцены с теми же продуктами без новой съёмки.',
    },
];

const localContextText =
    'В Грузии активно развиваются доставка (Wolt, Glovo, Bolt Food) и онлайн-торговля. Качество карточек напрямую влияет на продажи: рестораны с аппетитными фото блюд получают больше заказов, магазины с чистыми карточками — больше покупок. Большинство малых брендов в Тбилиси всё ещё публикует слабые телефонные фото. AI-продуктовый визуал даёт преимущество при минимальных вложениях.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1. Локальный бренд специй',
        text: 'Производитель грузинских специй хотел улучшить карточки для интернет-магазина. Фото упаковок с телефона + AI — получили 8 профессиональных карточек в едином стиле за 36 часов.',
    },
    {
        title: 'Кейс 2. Dark kitchen на Wolt',
        text: 'Карточки блюд были сделаны на телефон. AI-обработка добавила правильный свет, аппетитный фон и детализацию. Конверсия в заказы выросла.',
    },
    {
        title: 'Кейс 3. Стартап с новым продуктом',
        text: 'Небольшой косметический стартап запускал первую линейку. Бюджета на студию не было. AI создал lifestyle-сцены для Instagram и рекламных баннеров — продукт вышел с сильным визуалом.',
    },
];

const socialProofItems: string[] = [
    'Работаем с реальными фотографиями ваших продуктов, а не с шаблонными заготовками.',
    'Понимаем требования разных платформ: Wolt, Instagram, рекламные кабинеты.',
    'Каждое изображение проходит проверку: свет, пропорции, реалистичность.',
    'Без водяных знаков и ограничений на использование.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-продуктовый визуал?',
        answer: 'Это улучшение фото вашего продукта с помощью ИИ: убираем плохой фон, добавляем профессиональное освещение и красивую сцену. Результат — карточка товара, которая выглядит как студийная съёмка.',
    },
    {
        question: 'Что нужно прислать?',
        answer: 'Фото продукта с нормального смартфона (желательно на однотонном фоне или хотя бы без захламлённого). Плюс пожелания по стилю: чистый белый фон, lifestyle, сезонная сцена, тёмная студийная атмосфера.',
    },
    {
        question: 'Продукт сохранит свой реальный вид?',
        answer: 'Да. Мы работаем с вашим реальным продуктом, а не генерируем новый. AI меняет фон и атмосферу, но не сам товар.',
    },
    {
        question: 'Можно ли сделать прозрачный фон (PNG)?',
        answer: 'Да. Прозрачный фон доступен по запросу в любом пакете.',
    },
    {
        question: 'Могу ли я использовать файлы для платной рекламы?',
        answer: 'Да. Все файлы передаются с правом на коммерческое использование, включая рекламные кабинеты.',
    },
    {
        question: 'Сколько товаров можно включить в один заказ?',
        answer: 'Пакеты рассчитаны на 1–3 позиции. При большом ассортименте — обсуждаем индивидуальные условия.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-карточка товара?',
        answer: 'Basic — от 150 ₾ (3 изображения, 1 продукт). Standard — от 270 ₾ (6 изображений, 2–3 варианта подачи). Full — от 420 ₾ (8+ изображений, 3 сцены, все форматы).',
    },
    {
        question: 'Как быстро будет готово?',
        answer: '24–48 часов. Срочно — от 12 часов (доплата 30%).',
    },
    {
        question: 'Что если продукт выглядит на фото плохо?',
        answer: 'Мы улучшаем исходное фото как часть процесса. Но если оно совсем в плохом качестве — предупреждаем заранее.',
    },
    {
        question: 'Могу ли я заказать только один вариант?',
        answer: 'Да, базовый пакет — минимальный вход.',
    },
    {
        question: 'Как происходит оплата?',
        answer: '50% предоплата, остаток после согласования.',
    },
    {
        question: 'Можно ли вернуться позже и добавить ещё варианты?',
        answer: 'Да, при повторном заказе действует скидка постоянного клиента.',
    },
];

const whyUsItems: string[] = [
    'Работаем с реальными фото ваших продуктов, а не с заготовленными шаблонами.',
    'Понимаем требования Wolt, Instagram, рекламных кабинетов и маркетплейсов.',
    'Контроль качества: каждая карточка проверяется перед выдачей.',
    'Коммерческие лицензии на все инструменты.',
    'Быстро: от фото до готовых карточек за 24–48 часов.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Вы присылаете фото',
        text: 'Продукт, желательно на нейтральном фоне.',
    },
    {
        step: 'Шаг 2',
        title: 'Бриф',
        text: 'Фиксируем стиль, платформы и количество вариантов.',
    },
    {
        step: 'Шаг 3',
        title: 'Генерация и постобработка',
        text: 'AI создаёт сцены, мы проверяем качество и реалистичность.',
    },
    {
        step: 'Шаг 4',
        title: 'Выдача',
        text: 'Первые варианты отправляем в мессенджер.',
    },
    {
        step: 'Шаг 5',
        title: 'Правки и финал',
        text: 'Вносим корректировки и передаём финальные файлы.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        audience: 'Для одного продукта и базовой карточки.',
        timeline: 'Срок: 24–48 ч.',
        items: ['3 изображения одного продукта.', '1 вариант сцены/фона.', 'PNG/JPG, 2K.', 'Прозрачный фон по запросу.', '1 раунд правок.'],
    },
    {
        title: 'Standard',
        price: 'от 270 ₾',
        audience: 'Для рекламы и соцсетей с несколькими сценами.',
        timeline: 'Срок: 24–48 ч.',
        items: [
            '6 изображений (1–2 продукта).',
            '2–3 варианта сцены.',
            '4K, JPG/PNG/WebP.',
            'Ресайзы под Instagram и платформы.',
            'Прозрачный фон включён.',
            '1 раунд правок.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 420 ₾',
        audience: 'Для ассортимента и мультиканальной рекламы.',
        timeline: 'Срок: 48 ч.',
        items: [
            '8+ изображений (до 3 продуктов).',
            '3+ варианта сцены.',
            '4K, все форматы.',
            'Полный пакет ресайзов.',
            'Прозрачный фон включён.',
            '2 раунда правок.',
        ],
    },
];

const packageComparisonRows = [
    ['Параметр', 'Basic', 'Standard', 'Full'],
    ['Цена от', '150 ₾', '270 ₾', '420 ₾'],
    ['Изображений', '3', '6', '8+'],
    ['Продуктов', '1', '1–2', 'до 3'],
    ['Вариантов сцены', '1', '2–3', '3+'],
    ['Прозрачный фон', 'по запросу', '✓', '✓'],
    ['Ресайзы', '—', 'Instagram', 'все форматы'],
    ['Разрешение', '2K', '4K', '4K'],
    ['Раундов правок', '1', '1', '2'],
    ['Срок', '24–48 ч', '24–48 ч', '48 ч'],
    ['Подходит если', 'одна карточка', 'несколько сцен', 'ассортимент / реклама'],
];

const relatedServices = [
    {
        title: 'AI-карточки для меню и доставки',
        href: '/ai-visual/ai-menu-delivery',
        description: 'Карточки блюд и меню для Wolt, Glovo и delivery-платформ.',
    },
    {
        title: 'AI-визуал для брендов и маркетинга',
        href: '/ai-visual/ai-brand',
        description: 'Креативные сцены и рекламные визуалы для брендовых кампаний.',
    },
    {
        title: 'Reels и видео для продвижения бренда',
        href: '/reels-promo/reels-real-estate',
        description: 'Короткие видеоформаты, которые усиливают продуктовые карточки.',
    },
    {
        title: 'AI-визуализация недвижимости',
        href: '/ai-visual/ai-real-estate',
        description: 'Визуал для строительных и девелоперских проектов.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: '1. Присылают размытые фото продукта',
        text: 'AI улучшает контекст, но не восстанавливает нечёткий исходник. Снимайте продукт чётко, при хорошем свете.',
    },
    {
        title: '2. Нет понимания, для какой платформы',
        text: 'Wolt, Instagram, рекламный баннер, сайт — у каждого свои пропорции. Уточните заранее.',
    },
    {
        title: '3. Хотят «другой» продукт',
        text: 'AI улучшает визуал, но не меняет сам продукт. Если нужен другой цвет упаковки — нужно новое фото.',
    },
    {
        title: '4. Не думают о серии',
        text: 'Один продукт в разных сценах — это сила. Заказывайте серию, а не один кадр.',
    },
    {
        title: '5. Нет брендовых цветов и стиля',
        text: 'Скажите нам, если у вас есть brand book или хотя бы фирменный цвет. Это помогает выдержать единый стиль.',
    },
    {
        title: '6. Ожидают мгновенного результата',
        text: '24–48 часов — это стандарт. Если нужно срочно, предупреждайте при брифинге.',
    },
];

const quickImprovements: string[] = [
    'Сфотографируйте продукт на белом или однотонном фоне — это лучшая база.',
    'Убедитесь, что продукт в кадре чистый и без дефектов.',
    'Снимайте при дневном или нейтральном освещении.',
    'Найдите 3 карточки конкурентов, которые вам нравятся — они станут ориентиром.',
    'Определите, на каких платформах будете публиковать — это влияет на соотношение сторон.',
];

const readinessChecklist: string[] = [
    'Есть чёткое фото продукта при хорошем освещении.',
    'Определён стиль подачи (чистый, lifestyle, тёмный и т.д.).',
    'Известны платформы размещения.',
    'Определён бренд-стиль (цвета, референсы).',
    'Известно количество продуктов и вариантов.',
    'Определён бюджет и дедлайн.',
    'Есть мессенджер для связи.',
    'Понятно, что результат — изображения, не видео.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Может ли AI заменить профессионального продуктового фотографа?',
        answers: [
            'Частично — да. Для стандартных маркетинговых задач: карточки на маркетплейсе, Instagram, рекламные баннеры — AI-визуал даёт результат, сопоставимый со студийной съёмкой, при существенно меньших затратах.',
            'Для сложных задач, где важны тактильные детали и премиальная печатная подача, живой фотограф остаётся сильнее.',
            'AI и фотограф не противоречат друг другу: AI — для масштаба и скорости, фотограф — для высшего класса.',
        ],
    },
    {
        question: 'Как AI-карточки влияют на продажи на Wolt?',
        answers: [
            'Рестораны с профессиональными аппетитными фотографиями блюд обычно получают больше заказов, чем те, у кого слабые или отсутствующие изображения.',
            'AI-обработка телефонных фото — быстрый и доступный способ улучшить карточки без организации фуд-съёмки.',
            'Сильный визуал карточек помогает повысить CTR и конверсию в заказ.',
        ],
    },
    {
        question: 'Насколько сложно подготовить фото продукта для AI-обработки?',
        answers: [
            'Проще, чем кажется: достаточно смартфона, дневного света и белого или нейтрального фона.',
            'Главное, чтобы продукт в кадре был чётким, без смаза и сильных пересветов.',
            'Мы принимаем сырые телефонные фото и берём на себя весь продакшн.',
        ],
    },
    {
        question: 'Можно ли сделать AI-визуал для всего ассортимента интернет-магазина?',
        answers: [
            'Да. Для больших ассортиментов мы формируем единую библиотеку сцен и фонов, а затем применяем стиль ко всем позициям.',
            'Это даёт консистентность каталога и снижает стоимость за единицу при объёмном заказе.',
            'Для 50+ SKU сначала согласовываем пайплайн, сроки и модель ценообразования.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-карточка товара в Тбилиси?',
        answer: 'От 150 ₾ за базовый пакет (3 изображения). Standard — от 270 ₾, Full — от 420 ₾.',
    },
    {
        question: 'Можно ли сделать AI-фото продукта без студии?',
        answer: 'Да. Достаточно фото с телефона на нейтральном фоне. AI создаёт профессиональную сцену.',
    },
    {
        question: 'Как быстро делается AI-продуктовый визуал?',
        answer: 'За 24–48 часов с момента получения фото и брифа.',
    },
    {
        question: 'Можно ли использовать AI-карточки на Wolt и Glovo?',
        answer: 'Да. Мы делаем ресайзы под форматы delivery-платформ.',
    },
    {
        question: 'Сохраняет ли AI реальный вид продукта?',
        answer: 'Да. AI меняет фон и атмосферу, но не сам продукт — он остаётся реальным.',
    },
    {
        question: 'Можно ли получить прозрачный фон (PNG)?',
        answer: 'Да, в Standard и Full пакетах включён по умолчанию.',
    },
    {
        question: 'Подходит ли AI для карточек e-commerce?',
        answer: 'Да. AI-визуал используется для карточек маркетплейсов, интернет-магазинов и delivery-платформ.',
    },
    {
        question: 'Можно ли сделать несколько вариантов одного продукта для рекламных тестов?',
        answer: 'Да. Standard и Full пакеты включают 2–3+ варианта сцены.',
    },
];

const additionalMaterials = [
    {
        title: 'AI-карточки для меню и доставки',
        href: '/ai-visual/ai-menu-delivery',
    },
    {
        title: 'AI-визуал для брендов и маркетинга',
        href: '/ai-visual/ai-brand',
    },
    {
        title: 'AI-визуализация для автобизнеса',
        href: '/ai-visual/ai-auto',
    },
    {
        title: 'Reels для брендов',
        href: '/reels-promo/reels-real-estate',
    },
];

const internalTransitions = [
    {
        title: 'Нужны визуалы для меню на Wolt?',
        text: 'Смотрите AI-карточки и меню для доставки.',
        href: '/ai-visual/ai-menu-delivery',
    },
    {
        title: 'Нужны рекламные материалы для кампании?',
        text: 'Смотрите AI-визуал для брендов.',
        href: '/ai-visual/ai-brand',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1: AI меняет сам продукт',
        text: 'Реальность: AI меняет окружение: фон, свет, сцену. Сам продукт остаётся таким, каким вы его прислали.',
    },
    {
        title: 'Миф 2: Студийная съёмка всегда лучше',
        text: 'Реальность: Для большинства задач AI даёт сопоставимый результат быстрее и дешевле. Фотограф лучше для luxury и печатных каталогов.',
    },
    {
        title: 'Миф 3: Это слишком сложно для маленького бизнеса',
        text: 'Реальность: Именно малый бизнес выигрывает больше всего, потому что исчезает барьер «нет бюджета на студию».',
    },
    {
        title: 'Миф 4: Покупатели чувствуют, что фото ненастоящее',
        text: 'Реальность: При профессиональной обработке — нет. Покупатели оценивают качество карточки и читаемость продукта.',
    },
    {
        title: 'Миф 5: Нужно специальное оборудование для исходного фото',
        text: 'Реальность: Современный смартфон + дневной свет + нейтральный фон — достаточно для качественного результата.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Карточка товара',
        description: 'Изображение продукта для маркетплейса, каталога или соцсетей.',
    },
    {
        term: 'Lifestyle-сцена',
        description: 'Изображение продукта в контексте использования (например, крем на деревянном столике).',
    },
    {
        term: 'Прозрачный фон (PNG)',
        description: 'Формат изображения без фона, позволяющий размещать продукт на любом цвете.',
    },
    {
        term: 'A/B-тест',
        description: 'Сравнение двух или более вариантов визуала для определения наиболее эффективного.',
    },
    {
        term: 'Ресайз',
        description: 'Адаптация изображения под нужный формат и размер площадки.',
    },
    {
        term: 'AI-инпейнтинг',
        description: 'Замена фона продукта на новую сцену с учётом перспективы и освещения.',
    },
];

const notFitItems: string[] = [
    'Тем, кому нужны профессиональные фотографии для luxury-каталогов и печатной рекламы высшего уровня.',
    'Тем, кто хочет изменить внешний вид самого продукта (цвет, форму) — это не AI-обработка.',
    'Тем, кто ожидает 3D-модель продукта с возможностью поворота под любым углом.',
    'Тем, кому нужно более 50 SKU без предварительного обсуждения объёмного сотрудничества.',
];

const faqSchemaItems = [...beginnerFaqItems, ...commercialFaqItems, ...shortQaItems];

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
            name: 'AI-продуктовый визуал',
            item: CANONICAL_URL,
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems.map((item) => ({
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
    serviceType: 'AI-продуктовый визуал',
    name: 'AI-продуктовый визуал — карточки и рекламные сцены',
    description:
        'Создаём реалистичные карточки товаров, продуктовые сцены и рекламные изображения с помощью AI. Без студии и фотографа. От 150 ₾. Тбилиси.',
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
        price: '150',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'GEL',
            price: '150',
            unitText: 'за пакет',
        },
        url: CANONICAL_URL,
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: 'AI-продуктовый визуал — карточки и рекламные сцены без фотосессии | Breus Media',
    description:
        'Создаём реалистичные карточки товаров, продуктовые сцены и рекламные изображения с помощью AI. Без студии и фотографа. От 150 ₾. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-продуктовый визуал — карточки и рекламные сцены без фотосессии | Breus Media',
        description:
            'Создаём реалистичные карточки товаров, продуктовые сцены и рекламные изображения с помощью AI. Без студии и фотографа. От 150 ₾. Тбилиси.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function AiProductVisualPage() {
    return (
        <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#pricing' },
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
                            "url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.2),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                    AI Visual · Product Cards · E-commerce
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-продуктовый визуал — карточки, сцены и реклама без полной фотосессии
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
                                    Прислать фото продукта
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">От 150 ₾ · Ответим в тот же день · {CONTACT_PHONE_DISPLAY}</p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">На выходе</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Профессиональные карточки товаров без студии и фотографа.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24–48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–8+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Кадров</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>JPG / PNG / WebP</li>
                                    <li>Белый фон + lifestyle-сцены</li>
                                    <li>Ресайзы под маркетплейсы и рекламу</li>
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
                text="Покажите ваш продукт — посмотрим, как можно улучшить его визуал."
                buttonLabel="Прислать фото продукта"
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
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{localContextText}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры / мини-кейсы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof / доказательства</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection items={beginnerFaqItems} title="FAQ для новичка" variant="beginner" bgColor="#080808" />

            <FaqSection items={commercialFaqItems} title="FAQ по деньгам и процессу" variant="commercial" id="faq" bgColor="#0D0D0D" />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {whyUsItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Мы берём реальное фото вашего продукта и создаём вокруг него нужную сцену — через AI-инструменты и ручную постобработку. Это не случайная генерация: мы контролируем стиль, свет и читаемость продукта на каждом этапе." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты</h2>
                    <div className="mt-8 grid gap-5 xl:grid-cols-3">
                        {packages.map((pkg) => (
                            <article
                                key={pkg.title}
                                className={`rounded-[20px] border p-6 ${
                                    pkg.featured
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                                <p className="mt-4 text-3xl font-bold text-[#FFD23F]">{pkg.price}</p>
                                <p className="mt-4 text-sm text-white/75">{pkg.audience}</p>
                                <p className="mt-2 text-sm text-white/65">{pkg.timeline}</p>
                                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/72">
                                    {pkg.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Таблица сравнения пакетов</h2>
                    <div className="mt-8 overflow-x-auto rounded-[16px] border border-[#2a2a2a]">
                        <table className="w-full min-w-[720px] border-collapse bg-[#141414] text-left text-sm text-white/78">
                            <thead className="bg-[#1b1b1b] text-xs uppercase tracking-[0.12em] text-white/60">
                                <tr>
                                    {packageComparisonRows[0].map((item) => (
                                        <th key={item} className="border-b border-[#2a2a2a] px-4 py-3">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {packageComparisonRows.slice(1).map((row) => (
                                    <tr key={row[0]}>
                                        {row.map((cell, idx) => (
                                            <td key={`${row[0]}-${idx}`} className="border-b border-[#2a2a2a] px-4 py-3">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Помощник выбора пакета</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/74">
                            <li>• Нужна одна карточка для одного продукта → Basic.</li>
                            <li>• Нужны несколько вариантов подачи для рекламы и соцсетей → Standard.</li>
                            <li>• Несколько продуктов, много форматов, каталог → Full.</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">Напишите нам: {CONTACT_PHONE_DISPLAY}</p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center rounded-[10px] border border-[#FFD23F]/45 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black"
                        >
                            Написать в WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <MidCta
                text="Пришлите фото продукта — покажем, как он может выглядеть в профессиональной карточке."
                buttonLabel="Написать в WhatsApp"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/45"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="rounded-[20px] border border-[#FFD23F]/30 bg-[#121212] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Contact block</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-white/72">
                            Тбилиси, работаем дистанционно по всей Грузии. Пришлите фото продукта в WhatsApp — оценим и
                            ответим в тот же день.
                        </p>
                        <p className="mt-5 text-sm text-white/75">WhatsApp: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">Тбилиси, Грузия</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_RAW}`}
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Позвонить
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — медиапродакшн в Тбилиси. AI-визуализация, аэросъёмка, 360° туры, Reels. © 2026.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {commonMistakes.map((item) => (
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
                    <h2 className="text-3xl font-bold md:text-4xl">Что можно улучшить без покупки</h2>
                    <ol className="mt-8 space-y-3 text-sm leading-relaxed text-white/74">
                        {quickImprovements.map((item, index) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                {index + 1}. {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к заказу</h2>
                    <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {readinessChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                ☐ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    {expandedAnswers.map((item) => (
                        <article key={item.question} className="mt-5 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 first:mt-8">
                            <h3 className="text-xl font-bold text-white">{item.question}</h3>
                            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                                {item.answers.map((answer) => (
                                    <p key={answer}>{answer}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {shortQaItems.map((item) => (
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{item.question}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {additionalMaterials.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <p className="text-base font-bold text-white">{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {internalTransitions.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/45"
                            >
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
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

            <section className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы НЕ подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/74">
                        {notFitItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                    `,
                }}
            />
        </main>
    );
}
