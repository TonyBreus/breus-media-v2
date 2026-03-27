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

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-staging';
const PAGE_TITLE = 'AI staging и виртуальная меблировка квартир — Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Превращаем пустое пространство в продающий интерьер с помощью AI. Виртуальная меблировка без фотосессии. От 120 ₾. Тбилиси, Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const SITE_URL = 'https://breusmedia.com';

const heroIntro =
    'Пустая квартира продаётся дольше и дешевле — это факт рынка. Покупатель смотрит на голые стены и не видит потенциала. AI staging — это создание изображений пространства с расставленной мебелью и декором, полностью через искусственный интеллект. Вы получаете не видеосъёмку и не фотосессию с настоящей мебелью — вы получаете готовые изображения, на которых квартира выглядит заселённой и привлекательной. Breus Media делает это за 24–48 часов, от 120 ₾.';

const serviceExplanation =
    'AI staging — это когда вы присылаете нам фото пустой комнаты, а мы с помощью искусственного интеллекта добавляем в неё мебель, свет и атмосферу. Никакой реальной мебели, никакого переезда и никакой съёмочной группы. Результат — изображение (JPG, PNG, WebP), на котором комната выглядит стильно обставленной. Это не видео и не 3D-тур: это одна или несколько готовых картинок для объявлений, сайта и рекламы.';

const audienceItems = [
    'Риелторам, которые продают несколько пустых квартир одновременно и хотят ускорить продажи.',
    'Агентствам недвижимости, которым нужен поток визуалов без организации фотосессий.',
    'Собственникам, которые сдают или продают квартиру без мебели.',
    'Застройщикам на этапе сдачи — для показа планировочных решений.',
    'Инвесторам, которые хотят показать потенциал объекта под аренду.',
    'Управляющим апартаментами и Airbnb-хостам, создающим листинги для нового объекта.',
];

const solutionItems = [
    'Делает пустую квартиру визуально привлекательной без реальной мебели и логистики.',
    'Ускоряет продажу и аренду: обставленное пространство вызывает эмоцию и желание купить.',
    'Экономит на физическом стейджинге — аренде мебели, доставке, фотографе, постпродакшне.',
    'Позволяет протестировать несколько стилей интерьера и выбрать тот, что нравится больше.',
];

const painCards: Card[] = [
    {
        title: 'Пустая квартира не вызывает желания купить',
        text: 'Человек видит бетон или голые стены и не может представить себя там. Стейджинг, даже виртуальный, включает воображение покупателя.',
    },
    {
        title: 'Физический стейджинг — дорого и неудобно',
        text: 'Аренда мебели в Тбилиси для одной фотосессии обходится в 500–1500 ₾ плюс доставка, монтаж, демонтаж, фотограф. AI staging — в 3–10 раз дешевле.',
    },
    {
        title: 'Квартир несколько — и каждую нужно готовить к съёмке отдельно',
        text: 'У риелтора в работе 5–10 объектов. Организовывать фотосессию каждого — нереально. AI staging масштабируется: один процесс на любое количество объектов.',
    },
    {
        title: '«Бабушкин» ремонт отпугивает покупателей',
        text: 'Старые обои, советская плитка, тёмные шторы — покупатель видит затраты, а не возможности. AI позволяет показать пространство после условного косметического ремонта.',
    },
    {
        title: 'Аренда квартиры: нет мебели — нет заявок',
        text: 'На Airbnb и в долгосрочную аренду пустые квартиры бронируют хуже. Виртуальный стейджинг помогает показать, как будет выглядеть пространство после меблировки.',
    },
    {
        title: 'Долгая экспозиция снижает цену',
        text: 'Чем дольше объект висит в объявлении, тем ниже ожидания покупателя. AI staging помогает усилить первое впечатление и сократить время продажи.',
    },
];

const earnPoints = [
    'Меблированные изображения дают больше просмотров объявления — выше конкуренция среди покупателей.',
    'Объект воспринимается как более дорогой — растёт финальная цена сделки.',
    'Меньше времени в экспозиции = меньше издержек и нервов.',
    'Агентства могут предлагать AI staging как дополнительную услугу и зарабатывать на марже.',
];

const avoidLossPoints = [
    'Экономия до 90% против физического стейджинга.',
    'Нет риска повреждения арендованной мебели.',
    'Нет зависимости от наличия мебельного подрядчика и фотографа.',
    'Нет задержек: 24–48 часов против нескольких дней на организацию съёмки.',
];

const deliverables = [
    '3–6 изображений меблированных комнат (гостиная, спальня, кухня и т.д.).',
    'AI добавляет мебель, текстиль, декор, освещение в соответствии со стилем.',
    '1–2 варианта стиля меблировки по выбору (Base: 1, Standard: 2, Full: 3).',
    'Форматы: JPG, PNG, WebP.',
    'Разрешение: от 2K до 4K.',
    'Ресайзы под Instagram (1:1, 4:5) и платформы объявлений.',
    'Передача через Google Drive / WeTransfer.',
    'Срок: 24–48 часов.',
];

const whyUsItems = [
    'Профессиональные AI-инструменты с коммерческой лицензией, не free-tier генераторы.',
    'Человеческий контроль каждого изображения: мебель стоит правильно, свет совпадает с оригиналом.',
    'Мы в Тбилиси, знаем форматы местных платформ и предпочтения покупателей.',
    'Быстрая коммуникация в WhatsApp/Telegram.',
    'Понятный процесс: бриф → первые варианты → правки → финал.',
];

const useCases: Card[] = [
    {
        title: 'Риелтор выводит вторичный объект на рынок',
        text: 'Пустая квартира после выезда предыдущих жильцов. Вместо ожидания физической съёмки — AI staging за ночь. На следующий день объявление уже работает с меблированными изображениями.',
    },
    {
        title: 'Застройщик сдаёт квартиру с чистовой отделкой',
        text: 'Квартира готова конструктивно, но пустая. AI staging показывает несколько вариантов меблировки под разные целевые группы: молодая пара, семья с ребёнком, инвестор под аренду.',
    },
    {
        title: 'Хост Airbnb запускает новый объект',
        text: 'Апартаменты без мебели и декора не привлекают броней. AI staging создаёт жилой образ объекта для листинга — можно запустить бронирование заранее.',
    },
    {
        title: 'Инвестор продаёт объект под ремонт',
        text: 'Квартира под ремонт обычно продаётся как бетон. AI staging показывает 2–3 варианта, как пространство может выглядеть после отделки, и повышает привлекательность объекта.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1. Пустая квартира в Глдани — ускорение аренды',
        text: 'Риелтор прислал 4 фото пустой двухкомнатной квартиры. Мы добавили AI-меблировку: диван, журнальный столик, шторы, кровать с постельным. Объявление с новыми фото вышло на следующий день — интерес вырос сразу.',
    },
    {
        title: 'Кейс 2. Апартаменты под Airbnb в Батуми',
        text: 'Новые апартаменты без мебели. Хост хотел запустить листинг до доставки мебели. AI staging дал изображения для Airbnb — объект начал получать запросы бронирования на будущие даты.',
    },
    {
        title: 'Кейс 3. Вторичный объект в Сабуртало — устаревший интерьер',
        text: 'Квартира с бабушкиным ремонтом. AI убрал визуально советский контекст и показал то же пространство в современном нейтральном стиле. Запросов на просмотр стало больше.',
    },
];

const socialProofItems = [
    'Работаем с реальными фото ваших объектов, а не с шаблонными заготовками.',
    'Каждое изображение проверяется на артефакты и естественность: мебель не висит в воздухе.',
    'Понимаем местный рынок: форматы SS.ge, MyHome.ge, Airbnb, Instagram.',
    'Быстрый отклик: написали — ответим в течение рабочего дня.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI staging?',
        answer:
            'AI staging — это добавление виртуальной мебели и декора в фото пустой комнаты с помощью искусственного интеллекта. Вы получаете изображение с жилым интерьером без физической мебели и фотосессии.',
    },
    {
        question: 'Как мебель встаёт в комнату — это выглядит естественно?',
        answer:
            'Да, при профессиональной обработке выглядит естественно. Мы используем инструменты, которые учитывают перспективу и освещение реальной комнаты, а затем делаем ручную доработку артефактов.',
    },
    {
        question: 'Какое качество фото нужно прислать?',
        answer:
            'Достаточно фото с хорошего смартфона при дневном свете. Уберите лишние предметы из кадра и снимайте в горизонтальной ориентации.',
    },
    {
        question: 'Могу я выбрать стиль мебели?',
        answer:
            'Да. Можно выбрать современный минимализм, скандинавский, классический, тёплый лофт, нейтральный стиль или прислать 3–5 референсных изображений.',
    },
    {
        question: 'Покупатели не обманутся, увидев обставленную квартиру на деле пустой?',
        answer:
            'Нет, если изображение помечено как визуализация или виртуальный стейджинг. Это стандартная практика рынка: покупатель понимает концепцию и может представить потенциал объекта.',
    },
    {
        question: 'Можно ли сделать стейджинг для нескольких комнат сразу?',
        answer:
            'Да. Standard-пакет покрывает 2–3 комнаты, Full — 4 и более. При заказе нескольких объектов действует скидка.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI staging одной квартиры?',
        answer:
            'Basic — от 120 ₾ (3 комнаты/помещения, 1 стиль). Standard — от 240 ₾ (5 комнат, 2 стиля). Full — от 400 ₾ (весь объект, 3 стиля, правки, ресайзы).',
    },
    {
        question: 'Насколько это дешевле физического стейджинга?',
        answer:
            'Физический стейджинг в Тбилиси обычно стоит 600–2000 ₾ с учётом аренды мебели, логистики и фотографа. AI staging в среднем в 3–15 раз дешевле.',
    },
    {
        question: 'Как быстро сделаете?',
        answer: 'Стандартный срок — 24–48 часов. При срочном заказе возможно от 12 часов с доплатой 30%.',
    },
    {
        question: 'Сколько правок включено?',
        answer: 'Один раунд правок включён в любом пакете. Во Full — два раунда.',
    },
    {
        question: 'Как оплатить?',
        answer: 'Предоплата 50%, остаток после согласования финальных файлов.',
    },
    {
        question: 'Можно ли повторно использовать изображения для другого объявления?',
        answer: 'Изображения привязаны к конкретному пространству. Для другого объекта нужен новый заказ.',
    },
];

const processSteps = [
    'Вы присылаете фото — пустые комнаты при дневном свете, с любого угла.',
    'Бриф — уточняем стиль, целевую аудиторию, количество изображений.',
    'Генерация — AI добавляет мебель и декор в каждую комнату.',
    'Постобработка — проверяем и улучшаем вручную.',
    'Выдача — пересылаем в мессенджере и через Google Drive, вносим правки при необходимости.',
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 120 ₾',
        subtitle: 'Быстрый запуск для 1–2 комнат',
        timeline: 'Срок: 24–48 ч',
        items: ['3 изображения (до 3 комнат)', '1 вариант стиля', 'JPG/PNG, 2K', '1 ресайз (Instagram 1:1)', '1 раунд правок'],
    },
    {
        title: 'Standard',
        price: 'от 240 ₾',
        subtitle: 'Для полного объявления и нескольких стилей',
        timeline: 'Срок: 24–48 ч',
        items: ['5 изображений (до 4 комнат)', '2 варианта стиля', 'JPG/PNG/WebP, 4K', 'Ресайзы: 1:1, 4:5, 16:9', '1 раунд правок'],
    },
    {
        title: 'Full',
        price: 'от 400 ₾',
        subtitle: 'Для агентств и полной упаковки объекта',
        timeline: 'Срок: 48 ч',
        items: ['8+ изображений (вся квартира)', '3 варианта стиля', '4K, все форматы + версия для печати', 'Полный пакет ресайзов', '2 раунда правок'],
    },
];

const comparisonRows: ComparisonRow[] = [
    { label: 'Цена от', basic: '120 ₾', standard: '240 ₾', full: '400 ₾' },
    { label: 'Изображений', basic: '3', standard: '5', full: '8+' },
    { label: 'Комнат', basic: 'до 3', standard: 'до 4', full: 'вся квартира' },
    { label: 'Вариантов стиля', basic: '1', standard: '2', full: '3' },
    { label: 'Разрешение', basic: '2K', standard: '4K', full: '4K' },
    { label: 'Ресайзы', basic: '1 формат', standard: '3 формата', full: 'все форматы' },
    { label: 'Версия для печати', basic: '—', standard: '—', full: '✓' },
    { label: 'Раундов правок', basic: '1', standard: '1', full: '2' },
    { label: 'Срок', basic: '24–48 ч', standard: '24–48 ч', full: '48 ч' },
    { label: 'Подходит если', basic: 'одна-две комнаты / быстро', standard: 'полный объект', full: 'агентство / несколько объектов' },
];

const relatedServices = [
    { title: 'AI-визуализация недвижимости для застройщиков', href: '/ai-visual/ai-real-estate' },
    { title: '360° тур для готового объекта', href: '/360-tour-real-estate' },
    { title: 'Аэросъёмка недвижимости', href: '/drone-real-estate' },
    { title: 'AI-визуализация интерьеров и пространств', href: '/ai-visual/ai-interior' },
];

const mistakes: Card[] = [
    {
        title: 'Присылают тёмные фото при искусственном свете',
        text: 'AI работает лучше с фотографиями при дневном освещении. Тёмные или жёлтые фото дают более слабый результат.',
    },
    {
        title: 'На фото много личных вещей и мусора',
        text: 'Лишние предметы в кадре мешают AI видеть структуру пространства. 5 минут на уборку дают заметно лучший результат.',
    },
    {
        title: 'Нет чёткого запроса по стилю',
        text: 'Фраза сделайте красиво — не стиль. Лучше прислать 3 картинки-референса, которые вам нравятся.',
    },
    {
        title: 'Ожидают точного размещения конкретной мебели',
        text: 'AI staging работает со стилем и общей концепцией, а не с конкретными артикулами IKEA. Для точной расстановки отдельных предметов нужна другая услуга.',
    },
    {
        title: 'Заказывают только одну комнату',
        text: 'Покупатели смотрят на всю квартиру. Стейджинг одной гостиной при пустых спальне и кухне выглядит странно.',
    },
    {
        title: 'Публикуют без пометки визуализация',
        text: 'Это честный и законный инструмент только при прозрачном использовании. Всегда помечайте результат как визуализацию.',
    },
];

const freeImprovements = [
    'Уберите личные вещи перед съёмкой — это улучшит любые фото.',
    'Снимайте при дневном свете с открытыми шторами.',
    'Найдите 5 референсов стиля — это поможет любому подрядчику.',
    'Изучите требования к фото на SS.ge и MyHome.ge: размер, формат, количество.',
    'Добавьте в описание объявления пометку визуализация — это снимает вопросы покупателей.',
];

const checklist = [
    'Есть фото каждой комнаты при дневном свете.',
    'Лишние вещи убраны из кадра.',
    'Есть пример стиля интерьера (3–5 картинок).',
    'Известна целевая аудитория (семья, молодые, аренда).',
    'Понятно, на каких платформах будут размещаться изображения.',
    'Определён бюджет и сроки.',
    'Есть мессенджер для оперативной связи.',
    'Понимание, что результат будет отмечен как визуализация.',
];

const longAnswers: Card[] = [
    {
        title: 'В чём разница между AI staging и физическим стейджингом?',
        text: 'Физический стейджинг — реальная расстановка мебели и декора для фотосессии: аренда, доставка, монтаж, демонтаж, фотограф и постпродакшн. В Тбилиси это обычно 600–2000 ₾ за объект. AI staging — виртуальная меблировка прямо в фото: без мебели и логистики, с ценой от 120 ₾. Для живых показов сильнее физический вариант, для онлайн-объявлений AI часто даёт лучший ROI.',
    },
    {
        title: 'Как AI staging влияет на скорость продажи?',
        text: 'Объявления с меблированными изображениями обычно получают больше просмотров, чем пустые интерьеры. Больше просмотров даёт больше запросов на просмотр, а это сокращает время в экспозиции и снижает давление по цене.',
    },
    {
        title: 'Можно ли использовать AI staging для аренды и Airbnb?',
        text: 'Да. Особенно полезно для нового объекта: можно запустить листинг заранее, до доставки мебели. Важно честно указать в описании, что изображения являются визуализацией.',
    },
    {
        title: 'Нужно ли менять все фото или можно смешать реальные и AI?',
        text: 'Можно комбинировать: реальные фото фасада, подъезда и вида из окна оставить как есть, а AI staging использовать для внутренних помещений. Такой подход даёт реальный контекст и одновременно помогает показать потенциал интерьера.',
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит виртуальный стейджинг квартиры в Тбилиси?',
        answer: 'От 120 ₾ за базовый пакет (3 комнаты). Полный объект — от 240–400 ₾. Breus Media, Тбилиси.',
    },
    {
        question: 'Что такое AI staging?',
        answer: 'Это добавление виртуальной мебели в фото пустой комнаты с помощью ИИ без физической мебели и фотосессии.',
    },
    {
        question: 'Насколько быстро делается AI staging?',
        answer: 'Обычно за 24–48 часов после получения фото и предоплаты.',
    },
    {
        question: 'Нужно ли платить за физическую мебель при AI staging?',
        answer: 'Нет. Услуга полностью виртуальная — без аренды мебели и логистики.',
    },
    {
        question: 'Можно ли AI staging использовать для Airbnb?',
        answer: 'Да, это помогает запустить листинг до фактической меблировки.',
    },
    {
        question: 'Видно ли, что мебель виртуальная?',
        answer: 'При профессиональной обработке результат выглядит как интерьерная фотография.',
    },
    {
        question: 'Можно ли выбрать стиль мебели?',
        answer: 'Да. Минимализм, скандинавский, классический, лофт и другие стили на выбор.',
    },
    {
        question: 'Законно ли публиковать AI staging в объявлениях?',
        answer: 'Да, при условии пометки визуализация или виртуальный стейджинг.',
    },
];

const myths: MythItem[] = [
    {
        myth: 'AI staging — это обман покупателей',
        reality: 'Обманом это становится только без пометки визуализация. При честной подаче это стандартная практика рынка.',
    },
    {
        myth: 'Это выглядит неестественно, мебель висит в воздухе',
        reality: 'Так бывает у дешёвых инструментов без постобработки. Профессиональный AI staging выглядит естественно.',
    },
    {
        myth: 'Это нужно только дорогим объектам',
        reality: 'AI staging работает в любой ценовой категории. Скромная меблированная квартира часто продаётся быстрее пустой.',
    },
    {
        myth: 'Физический стейджинг всё равно лучше',
        reality: 'Для живых показов — да. Для онлайн-объявлений AI staging часто даёт сопоставимый визуальный эффект в 5–10 раз дешевле.',
    },
    {
        myth: 'Я сам сделаю это в бесплатном сервисе',
        reality: 'Бесплатные инструменты дают нестабильный результат. Коммерческий продакшн отличается точностью, правками и готовностью к публикации.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'AI staging / виртуальный стейджинг',
        definition: 'Добавление виртуальной мебели и декора в фото пустого пространства с помощью ИИ.',
    },
    {
        term: 'Инпейнтинг',
        definition: 'AI-техника, которая заменяет выделенную область изображения на сгенерированный контент.',
    },
    {
        term: 'Референс',
        definition: 'Пример изображения, который используется как ориентир желаемого стиля.',
    },
    {
        term: 'Постобработка',
        definition: 'Ручная доработка AI-результата для удаления артефактов и повышения реалистичности.',
    },
    {
        term: 'Листинг',
        definition: 'Объявление о продаже или аренде объекта на платформе (Airbnb, SS.ge, MyHome.ge и др.).',
    },
    {
        term: 'Апскейлинг',
        definition: 'Увеличение разрешения изображения с помощью AI без заметной потери качества.',
    },
];

const notFitItems = [
    'Тем, кому нужна реальная фотосессия меблированной квартиры — мы делаем AI-изображения, не классическую съёмку.',
    'Тем, кто хочет точно воспроизвести конкретные предметы мебели (например, конкретную модель дивана IKEA).',
    'Тем, кто принципиально против публикации визуализаций в объявлениях.',
    'Тем, кому нужны изображения для судебных или нотариальных документов: юридически значимые материалы требуют реальных фото.',
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
            name: 'AI staging и виртуальная меблировка',
            item: CANONICAL_URL,
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI staging и виртуальная меблировка квартир',
    description: PAGE_DESCRIPTION,
    serviceType: 'AI staging и виртуальная меблировка недвижимости',
    areaServed: ['Tbilisi', 'Batumi', 'Georgia'],
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
        lowPrice: '120',
        highPrice: '400',
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

export default function AiStagingPage() {
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
                            "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.23),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                                AI staging · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                AI staging и виртуальная меблировка — из пустого пространства в продающий интерьер
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Превращаем пустую квартиру в стильный жилой интерьер за 24 часа. AI-изображения — без мебельного
                                грузовика, без фотографа, без аренды декора.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Прислать фото на оценку
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
                                    <p className="text-2xl font-bold text-white">от 120 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за пакет Basic.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24–48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–8+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">изображений</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>SS.ge, MyHome.ge, Airbnb, Instagram</li>
                                    <li>Форматы JPG/PNG/WebP</li>
                                    <li>Тбилиси, Батуми и вся Грузия дистанционно</li>
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
                            Папка с изображениями, готовыми к публикации на SS.ge, MyHome.ge, Airbnb, Instagram. Каждое изображение
                            — это то же фото комнаты, только с добавленной AI-мебелью и декором. Результат выглядит как интерьерная
                            фотография: никаких плавающих предметов и грубых артефактов.
                        </p>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
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
                            На рынке недвижимости Тбилиси и Батуми большинство объявлений публикуется с телефонными фотографиями
                            пустых комнат. На платформах SS.ge, MyHome.ge и Airbnb конкуренция высокая, и первое впечатление решает
                            всё. AI staging помогает местным риелторам и собственникам конкурировать с застройщиками, которые
                            публикуют профессиональные рендеры.
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
                            {whyUsItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <MidCta
                text="Пустая квартира может выглядеть как готовый дом — покажем на примере вашего объекта."
                buttonLabel="Прислать фото на оценку"
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
                            <li>Нужно быстро обставить 1–2 комнаты → Basic.</li>
                            <li>Нужен полный объект с несколькими вариантами → Standard.</li>
                            <li>Агентство, несколько объектов, или нужно 3 стиля и правки → Full.</li>
                        </ul>
                        <p className="mt-4">
                            Напишите нам: <a href={`tel:${CONTACT_PHONE_PLAIN}`}>{CONTACT_PHONE}</a> — подберём за 5 минут.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Пришлите фото комнат в WhatsApp — скажем цену и срок сразу."
                buttonLabel="Написать в WhatsApp"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} bgColor="#0D0D0D" />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" bgColor="#080808" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Частые ошибки</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {mistakes.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="mb-3 text-base font-bold">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>
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
                        <h2 className="mb-5 text-2xl font-bold">Checklist готовности к заказу</h2>
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
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    <div className="grid gap-5 md:grid-cols-2">
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
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
                    <div className="grid gap-5 md:grid-cols-2">
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
                            Нужна визуализация ещё до начала ремонта? Смотрите{' '}
                            <Link href="/ai-visual/ai-real-estate" className="text-[#D4A017] underline-offset-4 hover:underline">
                                AI-визуализацию недвижимости
                            </Link>
                            .
                        </p>
                        <p>
                            Хотите показать весь объект в формате тура? Смотрите{' '}
                            <Link href="/360-tour-real-estate" className="text-[#D4A017] underline-offset-4 hover:underline">
                                360° виртуальный тур
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
                        Работаем в Тбилиси, принимаем заказы по всей Грузии дистанционно. Для оценки стоимости достаточно прислать
                        несколько фото объекта.
                    </p>
                    <p className="mt-4 text-xl font-bold text-[#D4A017]">WhatsApp: {CONTACT_PHONE}</p>
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

            <ProcessNote text="AI staging — не случайная генерация, а управляемый процесс. Мы анализируем исходное фото, выбираем стиль, контролируем пропорции и освещение, убираем артефакты. Поэтому результат выглядит как нормальная интерьерная фотография, а не как компьютерная игра 2005 года." />

            <section className="bg-[#080808] pb-16 pt-8 text-center text-xs text-white/45">
                <p>Breus Media — медиапродакшн в Тбилиси. AI-визуализация, аэросъёмка, 360° туры, Reels. © 2026.</p>
            </section>

            <DroneFooterStitch />
        </main>
    );
}
