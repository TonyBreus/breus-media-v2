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

const CANONICAL_URL = 'https://breus.media/ai-visual/ai-menu-delivery';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroSubtitle =
    'Аппетитные фото блюд и позиций меню за 24 часа — без фотографа, без студии, без постановочной съёмки.';

const heroIntro =
    'На Wolt и Glovo покупают глазами. Блюдо без фото или с плохой карточкой — это потерянный заказ. Профессиональная фуд-съёмка в Тбилиси стоит 400–1500 ₾ за день и не всегда доступна малому ресторанному бизнесу. AI-карточки для меню — это создание аппетитных изображений блюд с помощью искусственного интеллекта: правильный свет, красивый фон, привлекательная подача. Вы получаете изображения, а не видео. Breus Media делает это за 24 часа от 120 ₾.';

const serviceExplanation =
    'Вы фотографируете блюдо с телефона — мы с помощью AI превращаем это в профессиональную карточку для меню или доставки. Правильное освещение, аппетитный фон, чистая подача — без постановочной съёмки и фотографа. Результат — готовые изображения в нужных форматах для Wolt, Glovo, Instagram и вашего digital-меню.';

const audienceItems: string[] = [
    'Ресторанам и кафе, которым нужны карточки блюд для Wolt, Glovo и Bolt Food.',
    'Dark kitchens и доставочным кухням с большим меню без фотографий.',
    'Кофейням — для карточек напитков и десертов.',
    'Ресторанам, запускающим новое меню или сезонные позиции.',
    'Грузинским ресторанам и хинкальным для иностранных агрегаторов и туристических гидов.',
    'Брендам на маркетплейсах, продающим продукты питания.',
];

const taskCards: CardItem[] = [
    {
        title: 'Создаёт карточки для всего меню без фуд-съёмки',
        text: 'Вы закрываете визуал для позиций быстро и без долгой организации студии, стилиста и команды.',
    },
    {
        title: 'Улучшает уже существующие плохие фото',
        text: 'Исправляем тёмный свет, перегрев цвета и неудачный ракурс, сохраняя узнаваемость блюда.',
    },
    {
        title: 'Помогает обновлять меню без задержек',
        text: 'Новые и сезонные позиции получают карточки в течение 24–48 часов, без потери продаж на старте.',
    },
    {
        title: 'Даёт единый визуальный стандарт',
        text: 'Сайт, агрегаторы и Instagram выглядят цельно и профессионально, а не как набор случайных фото.',
    },
];

const painCards: CardItem[] = [
    {
        title: '1. Нет фотографий блюд — теряем заказы',
        text: 'На платформах доставки позиции без фото заказывают заметно реже. Отсутствие карточки — прямые потери выручки.',
    },
    {
        title: '2. Фуд-съёмка дорого и сложно организовать',
        text: 'Фотограф, стилист, студия и постпродакшн часто выходят за рамки бюджета небольшого ресторана.',
    },
    {
        title: '3. Меню меняется — карточки устаревают',
        text: 'Новые блюда появляются быстрее, чем организуется классическая съёмка. AI закрывает этот разрыв.',
    },
    {
        title: '4. Телефонные фото не аппетитны',
        text: 'Случайный свет и неудачный фон превращают хорошее блюдо в слабую карточку. AI исправляет подачу, свет и цвет.',
    },
    {
        title: '5. Конкурент выглядит лучше в агрегаторе',
        text: 'Когда рядом два похожих блюда, побеждает визуал. Более сильная карточка чаще забирает заказ.',
    },
    {
        title: '6. Нет единого стиля меню',
        text: 'Разнородные фото снижают доверие и делают меню хаотичным. Единый стиль повышает ощущение качества бренда.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Аппетитные карточки → выше конверсия',
        text: 'Качественный визуал в Wolt/Glovo помогает пользователю быстрее нажать «добавить в корзину».',
    },
    {
        title: 'Полное меню с фото → выше средний чек',
        text: 'Когда у всех позиций есть карточки, клиент чаще добирает напитки, десерты и дополнительные блюда.',
    },
    {
        title: 'Единый стиль → выше доверие',
        text: 'Профессиональный и консистентный вид карточек укрепляет бренд и повышает вероятность повторных заказов.',
    },
    {
        title: 'Быстрое обновление → новые блюда продают сразу',
        text: 'Вы не теряете первые недели продаж из-за отсутствия визуала на новых позициях.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Экономия до 80% vs классическая съёмка',
        text: 'Получаете коммерческий результат без затрат на полноценный съёмочный день.',
    },
    {
        title: 'Нет потерь из-за неудачной съёмки',
        text: 'Не зависите от света, студии и случайных технических проблем во время фотосессии.',
    },
    {
        title: 'Не зависите от расписания фотографа',
        text: 'Новые позиции можно запускать без ожидания свободного окна у подрядчика.',
    },
    {
        title: 'Правки точечно и быстро',
        text: 'Обновление одной карточки занимает часы, а не организацию нового продакшна.',
    },
];

const deliverables: string[] = [
    '5–20 карточек блюд и позиций меню (в зависимости от пакета).',
    'Аппетитный фон, правильный свет, чистая подача.',
    'Форматы: JPG, PNG, WebP.',
    'Размеры под Wolt и Glovo (стандартные требования платформ).',
    'Размеры под Instagram (1:1, 4:5) и digital-меню.',
    'Единый стиль для всего меню при пакетном заказе.',
    'Передача файлов через Google Drive.',
    'Срок выполнения: 24–48 часов для стандартных объёмов.',
];

const outputCards: CardItem[] = [
    {
        title: 'Что вы получаете',
        text: 'Готовые файлы изображений блюд для Wolt, Glovo, Instagram и сайта — без водяных знаков.',
    },
    {
        title: 'Форматы и размеры',
        text: 'Каждая карточка в нужном формате и размере под площадку, чтобы можно было загружать сразу.',
    },
    {
        title: 'Стиль',
        text: 'Единый визуальный стиль на весь заказанный пакет для более профессионального восприятия меню.',
    },
    {
        title: 'Сроки',
        text: 'Первая партия обычно готова в течение 24 часов, полный пакет — 24–72 часа по объёму.',
    },
];

const useCases: CardItem[] = [
    {
        title: '1. Ресторан выходит на Wolt — нет ни одного фото',
        text: '25 позиций без карточек. На основе телефонных фото создаём 25 AI-карточек за 48 часов и помогаем запуститься в срок.',
    },
    {
        title: '2. Кофейня обновляет сезонное меню',
        text: 'Новые напитки и выпечка нужны к запуску. Делаем серию карточек за 24 часа под агрегаторы и Instagram.',
    },
    {
        title: '3. Dark kitchen с 60 позициями',
        text: 'Вместо дорогой полной фотосессии обрабатываем блюда партиями, сохраняя единый стиль и управляемый бюджет.',
    },
    {
        title: '4. Грузинский ресторан для туристов',
        text: 'Хинкали, хачапури, мцвади подаём в едином колорите для delivery-платформ и туристических сервисов.',
    },
];

const localContextText =
    'Wolt и Glovo активно работают в Тбилиси и Батуми. Рестораны, которые выходят на эти платформы без фотографий, теряют от 40 до 70% потенциальных заказов. AI-карточки — быстрый и доступный способ заполнить меню качественными изображениями. Breus Media работает с грузинской и международной кухней и понимает, как должны выглядеть хинкали, чашушули и хачапури, чтобы вызывать аппетит у местных гостей и у туристов.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1. Хинкальная в Дидубе — запуск на Wolt',
        text: '20 позиций, исходники в тёмном освещении. За 36 часов подготовили чистые аппетитные карточки и запустили полное меню.',
    },
    {
        title: 'Кейс 2. Кофейня на Руставели — сезонное меню',
        text: 'Зимние позиции появились за неделю до старта. AI сделал 8 карточек за сутки, запуск прошёл вовремя.',
    },
    {
        title: 'Кейс 3. Dark kitchen — онлайн-доставка',
        text: '55 позиций в разных категориях. Меню обработали партиями за 5 рабочих дней в едином стиле.',
    },
];

const socialProofItems: string[] = [
    'Понимаем требования Wolt и Glovo: размеры, форматы и визуальные стандарты карточек.',
    'Работаем с реальными фото ваших блюд, а не с шаблонными стоковыми картинками.',
    'Опыт в HoReCa и грузинской кухне: знаем, как подать блюдо аппетитно и узнаваемо.',
    'Скорость: 24–48 часов на стандартный пакет карточек.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-карточка для меню?',
        answer: 'Это профессиональное изображение блюда на основе вашего телефонного фото. Мы улучшаем свет, фон и подачу для агрегаторов и digital-меню.',
    },
    {
        question: 'Как нужно сфотографировать блюдо?',
        answer: 'Лучше при дневном свете или под нейтральной лампой, сверху или под углом 45°. Фон — по возможности нейтральный, блюдо аккуратно выложено.',
    },
    {
        question: 'AI полностью изменит внешний вид блюда?',
        answer: 'Нет. Мы улучшаем свет, цвет и фон, но не подменяем блюдо другим и не меняем состав.',
    },
    {
        question: 'Можно ли заказать карточки для всего меню сразу?',
        answer: 'Да. Для больших меню доступны пакетные форматы с единым стилем и более выгодной ценой.',
    },
    {
        question: 'В каких форматах выдаёте?',
        answer: 'JPG, PNG, WebP. Дополнительно делаем нужные ресайзы под Wolt, Glovo, Instagram и digital-меню.',
    },
    {
        question: 'Нужно ли специально готовить блюдо для фото?',
        answer: 'Достаточно, чтобы блюдо выглядело свежо и аккуратно, как при обычной подаче. Сложный фуд-стайлинг не обязателен.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-карточка для Wolt?',
        answer: 'Basic — от 120 ₾ (до 5 позиций). Standard — от 250 ₾ (до 15 позиций, единый стиль). Full — от 450 ₾ (до 30+ позиций, все форматы).',
    },
    {
        question: 'Как быстро будет готово меню?',
        answer: 'До 10 позиций — 24 часа. 10–30 позиций — 48–72 часа. Больше 30 позиций рассчитываем индивидуально.',
    },
    {
        question: 'Что делать, если новые блюда появляются регулярно?',
        answer: 'Можно подключить абонентский формат: фиксированное количество карточек в месяц по согласованной цене.',
    },
    {
        question: 'Форматы Wolt и Glovo нужно знать самому?',
        answer: 'Нет. Мы сами подготавливаем нужные размеры и форматы под требования площадок.',
    },
    {
        question: 'Можно ли доработать уже существующие плохие карточки?',
        answer: 'Да. Улучшение тёмных, шумных и визуально слабых карточек входит в услугу.',
    },
    {
        question: 'Есть ли скидка при большом меню?',
        answer: 'Да. При заказе 20+ позиций действует скидка 20%.',
    },
];

const whyUsItems: string[] = [
    'Понимаем Wolt и Glovo: знаем форматы и визуальные требования платформ.',
    'Работаем с грузинской кухней: хинкали, хачапури, мцвади — подаём аппетитно и узнаваемо.',
    'Скорость продакшна: 24–48 часов на пакет карточек.',
    'Единый визуальный стиль для всего меню.',
    'Коммерческие лицензии и свободное использование материалов в вашем бизнесе.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Вы присылаете фото блюд',
        text: 'Подойдут телефонные фото каждого блюда при нормальном освещении.',
    },
    {
        step: 'Шаг 2',
        title: 'Короткий бриф',
        text: 'Фиксируем стиль меню, платформы, количество позиций и приоритеты.',
    },
    {
        step: 'Шаг 3',
        title: 'AI-обработка',
        text: 'Улучшаем каждую карточку и сохраняем единый визуальный стандарт.',
    },
    {
        step: 'Шаг 4',
        title: 'Первая выдача',
        text: 'Показываем первую партию в мессенджере для быстрого согласования.',
    },
    {
        step: 'Шаг 5',
        title: 'Правки и финал',
        text: 'Вносим правки и передаём финальные файлы через Google Drive.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 120 ₾',
        audience: 'Для нескольких новых позиций или теста формата.',
        timeline: 'Срок: 24 часа.',
        items: [
            'До 5 позиций меню.',
            'Улучшение фото: свет, фон, подача.',
            'Форматы Wolt + Instagram 1:1.',
            '1 раунд правок.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 250 ₾',
        audience: 'Для запуска или обновления меню до 15 блюд.',
        timeline: 'Срок: 48 часов.',
        items: [
            'До 15 позиций в едином стиле.',
            'Форматы Wolt, Glovo, Instagram.',
            'JPG / PNG / WebP, оптимальные размеры.',
            '1 раунд правок.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 450 ₾',
        audience: 'Для большого меню и мультиканальной выдачи.',
        timeline: 'Срок: 48–72 часа.',
        items: [
            'До 30+ позиций.',
            'Единый стиль для всего меню.',
            'Все форматы: delivery, digital-меню и print.',
            '2 раунда правок.',
            'Скидка 20% при 30+ позициях.',
        ],
    },
];

const packageComparisonRows = [
    ['Параметр', 'Basic', 'Standard', 'Full'],
    ['Цена', 'от 120 ₾', 'от 250 ₾', 'от 450 ₾'],
    ['Позиций', 'до 5', 'до 15', 'до 30+'],
    ['Единый стиль', '—', '✓', '✓'],
    ['Форматы Wolt', '✓', '✓', '✓'],
    ['Форматы Glovo', '—', '✓', '✓'],
    ['Форматы print', '—', '—', '✓'],
    ['Раундов правок', '1', '1', '2'],
    ['Срок', '24 ч', '48 ч', '48–72 ч'],
    ['Подходит если', 'несколько позиций', 'полный запуск', 'большое меню / абонемент'],
];

const relatedServices = [
    {
        title: 'AI-продуктовый визуал для товаров',
        href: '/ai-visual/ai-product',
        description: 'Карточки и визуалы для food-товаров и маркетплейсов.',
    },
    {
        title: 'AI-визуализация интерьера ресторана',
        href: '/ai-visual/ai-interior',
        description: 'Покажите атмосферу заведения в едином визуальном стиле.',
    },
    {
        title: '360° тур для ресторана',
        href: '/360-tour/restaurant',
        description: 'Добавьте эффект присутствия и доверие к заведению.',
    },
    {
        title: 'Reels для ресторана',
        href: '/reels/restaurant',
        description: 'Видео для Instagram, которые усиливают карточки меню.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: '1. Блюдо сфотографировано небрежно или холодным',
        text: 'Горячее блюдо сразу после подачи выглядит лучше. Снимайте быстро, пока подача свежая.',
    },
    {
        title: '2. Тёмный фон и жёлтый свет',
        text: 'Тёплое ресторанное освещение часто ухудшает вид еды. Лучше дневной или нейтральный белый свет.',
    },
    {
        title: '3. Неаккуратная подача',
        text: 'AI улучшает вид, но исходная аккуратность всё равно важна: края тарелки и выкладка должны быть чистыми.',
    },
    {
        title: '4. Один угол для всех блюд',
        text: 'Супы, салаты и мясо требуют разных ракурсов. 45° часто лучше для объёмных блюд.',
    },
    {
        title: '5. Ожидание 30 карточек по базовой цене',
        text: 'Большой объём всегда требует пакетного или индивидуального расчёта.',
    },
    {
        title: '6. Отсутствие единого стиля',
        text: 'Разный цвет и фон делают меню хаотичным. Консистентность выглядит профессиональнее.',
    },
];

const quickImprovements: string[] = [
    'Фотографируйте каждое блюдо при дневном свете.',
    'Используйте нейтральный фон: белая тарелка, светлая скатерть или деревянный стол.',
    'Пробуйте угол 45° для объёмных блюд, а не только съёмку строго сверху.',
    'Сравните карточки топ-ресторанов Тбилиси на Wolt и возьмите их как ориентир.',
    'Для позиций без фото поставьте честную заглушку вместо слабого изображения.',
];

const readinessChecklist: string[] = [
    'Есть список всех позиций меню.',
    'Есть фото каждого блюда (хотя бы телефонные).',
    'Определён стиль подачи.',
    'Определены платформы: Wolt, Glovo, Instagram, сайт.',
    'Определён приоритет: какие блюда нужны первыми.',
    'Известны сроки запуска.',
    'Определён бюджет.',
    'Есть мессенджер для оперативной связи.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Как карточки блюд влияют на заказы на Wolt?',
        answers: [
            'Позиции с качественными фотографиями обычно заказывают чаще, чем позиции без визуала или с некачественным фото.',
            'Полное меню с аппетитными карточками уменьшает трение при выборе и увеличивает вероятность добавления в корзину.',
            'В условиях растущей конкуренции в Тбилиси качественный визуал меню — практическая необходимость, а не опция.',
        ],
    },
    {
        question: 'Нужен ли профессиональный фуд-стилист для AI-обработки?',
        answers: [
            'Для карточек Wolt и Instagram обычно не нужен. Достаточно аккуратно приготовленного блюда и внятного телефонного фото.',
            'Фуд-стилист актуален для крупных рекламных кампаний, где нужна постановочная съёмка уровня national brand.',
            'Для ежедневных задач delivery-меню AI-обработка быстрее и экономичнее.',
        ],
    },
    {
        question: 'Можно ли делать карточки для грузинской кухни?',
        answers: [
            'Да. Хинкали, хачапури, мцвади и другие блюда грузинской кухни отлично подходят для данного формата.',
            'Текстуры теста, румяная корочка и сочность мяса хорошо передаются при правильной обработке.',
            'Наша задача — показать блюдо аппетитно, но реалистично, чтобы ожидание клиента совпадало с фактической подачей.',
        ],
    },
    {
        question: 'Как организовать абонентское обновление меню?',
        answers: [
            'Фиксируем количество карточек в месяц (например, 5–10 позиций) и согласуем единый стиль.',
            'Вы регулярно отправляете новые блюда, мы выдаём готовые карточки в согласованные сроки.',
            'Формат удобен для сезонных запусков и заведений, где позиции обновляются часто.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-карточка для Wolt в Тбилиси?',
        answer: 'От 120 ₾ за до 5 позиций. До 15 позиций — от 250 ₾. Breus Media, Тбилиси.',
    },
    {
        question: 'Можно ли сделать фото блюд для Wolt без фотографа?',
        answer: 'Да. AI-обработка телефонных фото позволяет получить профессиональные карточки без фотосессии.',
    },
    {
        question: 'Как быстро делаются карточки меню?',
        answer: 'До 5 позиций — за 24 часа. Полное меню обычно готово за 48–72 часа.',
    },
    {
        question: 'Какие форматы подходят для Wolt и Glovo?',
        answer: 'Мы делаем нужные размеры и форматы под стандарты Wolt, Glovo и Instagram.',
    },
    {
        question: 'Можно ли улучшить уже существующие плохие карточки?',
        answer: 'Да. Улучшение тёмных или некачественных фото входит в услугу.',
    },
    {
        question: 'Нужна ли студийная съёмка для карточек Wolt?',
        answer: 'Нет. В большинстве случаев достаточно телефонного фото при дневном свете.',
    },
    {
        question: 'Можно ли сделать карточки для всего меню сразу?',
        answer: 'Да. Full-пакет покрывает до 30+ позиций с единым стилем и скидкой 20%.',
    },
    {
        question: 'Подходит ли для хинкали и грузинской кухни?',
        answer: 'Да. Работаем с грузинскими блюдами и знаем, как сохранить реалистичную аппетитную подачу.',
    },
];

const additionalMaterials = [
    {
        title: 'AI-визуализация интерьера ресторана',
        href: '/ai-visual/ai-interior',
    },
    {
        title: '360° тур для ресторана',
        href: '/360-tour/restaurant',
    },
    {
        title: 'Reels для ресторана',
        href: '/reels/restaurant',
    },
    {
        title: 'AI-продуктовый визуал',
        href: '/ai-visual/ai-product',
    },
];

const internalTransitions = [
    {
        title: 'Хотите показать атмосферу заведения?',
        text: 'Смотрите AI-визуализацию интерьера для ресторана и кафе.',
        href: '/ai-visual/ai-interior',
    },
    {
        title: 'Нужны видеоролики для Instagram?',
        text: 'Смотрите услугу Reels для ресторана.',
        href: '/reels/restaurant',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1: «AI сделает еду пластиковой и ненастоящей»',
        text: 'Мы работаем с реальным фото вашего блюда. Улучшаем свет и фон, а не подменяем блюдо «рисунком».',
    },
    {
        title: 'Миф 2: «Нужна дорогая съёмка для хорошего результата»',
        text: 'Для delivery-карточек чаще всего достаточно телефона. AI закрывает то, чего не хватает исходному снимку.',
    },
    {
        title: 'Миф 3: «Покупатели замечают обработку»',
        text: 'Покупатель оценивает итог: насколько фото выглядит вкусно и понятно перед заказом.',
    },
    {
        title: 'Миф 4: «Это только для крупных сетей»',
        text: 'Малые заведения часто выигрывают больше, потому что быстро подтягивают визуал до уровня рынка.',
    },
    {
        title: 'Миф 5: «Лучше один раз сделать фотосессию и забыть»',
        text: 'Меню меняется постоянно. AI-карточки масштабируются: добавили блюдо — получили новую карточку за 24 часа.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Карточка блюда',
        description: 'Изображение позиции меню для delivery-платформы или digital-меню.',
    },
    {
        term: 'AI-обработка фото еды',
        description: 'Улучшение телефонного фото блюда: свет, фон, цвет и подача.',
    },
    {
        term: 'Dark kitchen',
        description: 'Кухня, работающая только на доставку, без зала для гостей.',
    },
    {
        term: 'Delivery-агрегатор',
        description: 'Платформа доставки еды: Wolt, Glovo, Bolt Food.',
    },
    {
        term: 'Ресайз',
        description: 'Адаптация изображения под нужный размер и формат площадки.',
    },
    {
        term: 'Единый стиль меню',
        description: 'Визуальная консистентность всех карточек: фон, цветовая гамма и подача.',
    },
];

const notFitItems: string[] = [
    'Тем, кому нужна полноценная постановочная фуд-съёмка с фуд-стилистом для кампании уровня крупного бренда.',
    'Тем, кто ожидает, что AI полностью изменит вид блюда, ингредиенты или состав.',
    'Тем, кто хочет нереалистичные изображения, не соответствующие фактической подаче.',
    'Тем, кто не готов сделать даже базовые телефонные фото блюд.',
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
            name: 'AI-карточки и меню для доставки',
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
    serviceType: 'AI-карточки меню и delivery-упаковка',
    name: 'AI-карточки и меню для Wolt и Glovo',
    description:
        'AI-фото блюд для Wolt, Glovo и digital-меню без фотографа. Аппетитные карточки за 24 часа. От 120 ₾. Тбилиси, Грузия.',
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
        price: '120',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'GEL',
            price: '120',
            unitText: 'за пакет',
        },
        url: CANONICAL_URL,
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: 'AI-карточки и меню для Wolt и Glovo — Тбилиси | Breus Media',
    description:
        'AI-фото блюд для Wolt, Glovo и digital-меню без фотографа. Аппетитные карточки за 24 часа. От 120 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-карточки и меню для Wolt и Glovo — Тбилиси | Breus Media',
        description:
            'AI-фото блюд для Wolt, Glovo и digital-меню без фотографа. Аппетитные карточки за 24 часа. От 120 ₾. Тбилиси, Грузия.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function AiMenuDeliveryPage() {
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
                            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.2),transparent_40%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_68%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                    AI Visual · Food Delivery · Wolt/Glovo
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-карточки, меню и delivery-упаковка — визуалы для Wolt, Glovo и digital-каталогов
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
                                    Прислать фото блюда
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Бесплатная демо-карточка · Ответим в тот же день · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">На выходе</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 120 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        AI-карточки для меню и доставки без студии и фотографа.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24 часа</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до 10</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">48–72 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">10–30+</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>JPG / PNG / WebP</li>
                                    <li>Ресайзы под Wolt, Glovo, Instagram</li>
                                    <li>Единый стиль и коммерческое использование</li>
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
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {taskCards.map((card) => (
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
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {earnCards.map((card) => (
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает не потерять</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {saveCards.map((card) => (
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
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {outputCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex md:items-center md:justify-between">
                        <div>
                            <p className="text-xl font-bold text-white">
                                Пришлите фото любого блюда — покажем, как оно может выглядеть в профессиональной карточке.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Сделаем демо и предложим формат, который лучше подойдёт под ваш объём меню.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">Бесплатное демо · Ответ в тот же день · {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Прислать фото блюда
                        </a>
                    </div>
                </div>
            </section>

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

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по деньгам и процессу"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

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

            <ProcessNote text="Хорошая карточка блюда — это баланс между реальным видом и лучшей подачей. Мы не искажаем блюдо, а показываем его так, как оно должно выглядеть: свежо, горячо и аппетитно." />

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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
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
                            <li>• Несколько новых позиций → Basic.</li>
                            <li>• Запускаете ресторан или обновляете меню до 15 блюд → Standard.</li>
                            <li>• Большое меню, все форматы и единый стиль → Full.</li>
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
                text="Пришлите фото любого блюда в WhatsApp — сделаем демо-карточку бесплатно."
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
                            Работаем в Тбилиси, принимаем заказы по всей Грузии дистанционно. Пришлите фото блюд в
                            WhatsApp — ответим в тот же день.
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
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы не подходим</h2>
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
