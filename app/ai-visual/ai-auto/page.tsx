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

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-auto';
const PAGE_TITLE = 'AI-визуал для автобизнеса — подача авто и шоурума для продаж | Breus Media';
const PAGE_DESCRIPTION =
    'AI-изображения автомобилей, шоурумов и детейлинга для MyAuto, объявлений и рекламы. Без студийной съёмки. От 150 ₾. Тбилиси, Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const SITE_URL = 'https://breusmedia.com';

const serviceExplanation =
    'Вы присылаете нам фото автомобиля — с телефона или любой камеры. Мы с помощью AI меняем фон: убираем парковку, забор или улицу и ставим машину на нейтральный студийный фон, в красивую ночную сцену или в нужную рекламную атмосферу. Авто остаётся тем же — меняется подача. Результат — готовые изображения (JPG, PNG) для объявлений, сайта, Instagram и рекламы.';

const audienceItems = [
    'Автосалонам, которым нужны профессиональные фото каждой машины без вызова фотографа.',
    'Частным дилерам, продающим 2-5 машин в месяц и хотящим выглядеть как профессионал.',
    'Площадкам продажи авто — для единого визуального стандарта всего инвентаря.',
    'Детейлинг-студиям — для демонстрации «до/после».',
    'Шоурумам — для рекламы новых поступлений в Instagram и Telegram.',
    'Импортёрам и брендам — для рекламных материалов под конкретные модели.',
];

const solutionItems = [
    'Заменяет неудачный фон (парковка, улица) на нейтральный или премиальный.',
    'Даёт единый визуальный стандарт для всего автопарка.',
    'Ускоряет публикацию объявлений: от фото до готовых карточек за 24 часа.',
    'Создаёт рекламные изображения без дорогостоящей автосъёмки в студии.',
];

const painCards: Card[] = [
    {
        title: 'Фото машины выглядит как телефонный снимок на улице',
        text: 'Покупатель видит парковочный фон, дворы и провода — и воспринимает это как «непрофессиональный продавец». AI убирает контекст и выводит машину на первый план.',
    },
    {
        title: 'Автосъёмка в студии стоит дорого',
        text: 'Профессиональная автосъёмка в Тбилиси часто стоит 300-800 ₾ за машину и несколько дней. AI-обработка обычно в 3-5 раз дешевле.',
    },
    {
        title: 'Нужно публиковать много машин быстро',
        text: 'При обороте 10-20 машин в месяц организовывать фотосессию каждой нереально. AI позволяет масштабировать визуал.',
    },
    {
        title: 'Разный фон для каждого объявления создаёт хаос',
        text: 'Когда все машины в разном окружении, лента выглядит непрофессионально. AI создаёт единый стандарт для всего автопарка.',
    },
    {
        title: 'Конкуренты выглядят лучше на MyAuto',
        text: 'Покупатель сравнивает визуально. Машина с чистым профессиональным фото чаще выигрывает внимание в выдаче.',
    },
    {
        title: 'Детейлинг плохо виден на обычном фото',
        text: 'После полировки и химчистки машине нужен правильный фон. AI подчёркивает результат так, как он должен выглядеть.',
    },
];

const earnPoints = [
    'Лучший визуал -> выше CTR объявления на MyAuto -> больше звонков.',
    'Профессиональный вид -> продавца воспринимают серьёзнее -> меньше торга.',
    'Быстрая публикация -> машина выходит на рынок раньше конкурентов.',
    'Единый стандарт -> выше узнаваемость автосалона и доверие к бренду.',
];

const avoidLossPoints = [
    'Экономия на автосъёмке: до 70% от стоимости классической фотосессии.',
    'Нет зависимости от расписания фотографа.',
    'Нет потерь из-за погоды или неудачного света.',
    'Правки стиля не требуют повторного выезда.',
];

const deliverables = [
    '3-6 изображений автомобиля с заменённым фоном.',
    'Нейтральный студийный фон и 1-2 атмосферных варианта (ночь, студия, открытое пространство).',
    'Форматы: JPG, PNG, WebP.',
    'Разрешение: от 2K до 4K.',
    'Ресайзы под MyAuto, Instagram (1:1, 4:5), рекламные баннеры.',
    'Передача через Google Drive.',
    'Срок: 24-48 часов.',
];

const useCases: Card[] = [
    {
        title: 'Частный дилер выставляет машину на MyAuto',
        text: 'Авто сфотографировано во дворе. AI убирает фон и ставит машину в нейтральную студийную среду. Объявление выглядит как от дилерского центра.',
    },
    {
        title: 'Автосалон стандартизирует весь инвентарь',
        text: '10 машин с разным фоном превращаются в единую визуальную систему. Сайт и Instagram выглядят целостно и профессионально.',
    },
    {
        title: 'Детейлинг-студия показывает «до/после»',
        text: 'После финишной полировки AI добавляет студийную атмосферу для «после»-кадров. Получается сильный контент для соцсетей.',
    },
    {
        title: 'Импортёр анонсирует новое поступление',
        text: 'Есть только исходные фото поставщика. AI адаптирует их под локальные рекламные форматы и визуальный стиль кампании.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1. Частная продажа BMW, Тбилиси',
        text: 'Машину сфотографировали во дворе. После замены фона на нейтральный студийный объявление получило больше звонков в первые дни.',
    },
    {
        title: 'Кейс 2. Автосалон подержанных авто, Рустави',
        text: '12 машин с разным фоном стандартизировали за 48 часов. Визуально площадка стала выглядеть как единый бренд.',
    },
    {
        title: 'Кейс 3. Детейлинг-студия в Дидубе',
        text: 'Для контента после полировки сделали ночную студийную сцену. Публикация в Instagram собрала сильный органический отклик.',
    },
];

const socialProofItems = [
    'Понимаем специфику автобизнеса: MyAuto, карточки объявлений и рабочие ракурсы.',
    'Контролируем реализм: следим за тенями, отражениями и контурами без артефактов.',
    'В одном заказе готовим форматы под MyAuto, Instagram и рекламные баннеры.',
    'Скорость продакшна: 24-48 часов на пакет материалов.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Как AI меняет фон машины?',
        answer:
            'Используем AI-инструменты, которые точно отделяют автомобиль от фона и размещают его в новой сцене с учётом перспективы, теней и отражений.',
    },
    {
        question: 'Машина будет выглядеть естественно на новом фоне?',
        answer:
            'Да. Мы вручную корректируем тени и отражения после AI-этапа, чтобы авто выглядело естественно, а не как вставка.',
    },
    {
        question: 'Что нужно прислать?',
        answer:
            'Несколько фото машины при дневном свете: спереди, сбоку, сзади, 3/4. Подойдёт смартфон, главное — высокое качество исходника.',
    },
    {
        question: 'Можно ли изменить цвет машины?',
        answer:
            'Нет. В рамках этой услуги мы меняем фон и атмосферу, но не сам автомобиль. Изменение цвета — отдельная услуга.',
    },
    {
        question: 'Подходит ли для мотоциклов и спецтехники?',
        answer: 'Да. Обрабатываем не только легковые авто, но и мотоциклы, грузовики и специализированную технику.',
    },
    {
        question: 'Нужно ли убирать грязь и дефекты перед съёмкой?',
        answer:
            'Лучше присылать чистую машину. Мелкие дефекты можно убрать как дополнительную опцию, но базовая услуга про замену фона.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-обработка фото автомобиля?',
        answer:
            'Basic — от 150 ₾ (3 ракурса, 1-2 фона). Standard — от 270 ₾ (5 ракурсов, 3 варианта фона). Full — от 400 ₾ (8 изображений, несколько сцен, полный пакет форматов).',
    },
    {
        question: 'Сколько машин можно обработать за раз?',
        answer: 'В базовом пакете — 1 машина. При объёмных заказах (5+ машин) даём скидку и единый визуальный стандарт.',
    },
    {
        question: 'Как быстро делаете?',
        answer: 'Обычно 24-48 часов на машину. При потоке согласовываем график заранее.',
    },
    {
        question: 'Включены ли форматы для MyAuto?',
        answer: 'Да. Форматы для MyAuto доступны в пакетах, а также можем добавить размеры под Instagram и баннеры.',
    },
    {
        question: 'Как проходит оплата?',
        answer: '50% предоплата, 50% после согласования результата.',
    },
    {
        question: 'Есть скидка на несколько машин?',
        answer: 'Да, при заказе от 5 машин действует скидка 15%.',
    },
];

const processSteps = [
    'Вы присылаете фото — несколько ракурсов машины при дневном свете.',
    'Бриф — стиль фона, платформы размещения и количество вариантов.',
    'AI-генерация + постобработка — замена фона, ручная работа с тенями и отражениями.',
    'Первая выдача — отправляем превью в мессенджере на согласование.',
    'Правки и финал — передаём материалы через Google Drive в нужных форматах.',
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        subtitle: 'Для одной машины и быстрого объявления',
        timeline: 'Срок: 24-48 ч',
        items: ['3 ракурса, 1 машина', '1-2 варианта фона', 'JPG/PNG, 2K', 'Ресайзы под MyAuto', '1 раунд правок'],
    },
    {
        title: 'Standard',
        price: 'от 270 ₾',
        subtitle: 'Для соцсетей и нескольких площадок',
        timeline: 'Срок: 24-48 ч',
        items: ['5 ракурсов, 1 машина', '3 варианта фона', '4K, JPG/PNG/WebP', 'MyAuto + Instagram ресайзы', '1 раунд правок'],
    },
    {
        title: 'Full',
        price: 'от 400 ₾',
        subtitle: 'Для автосалона, рекламы и мультиканала',
        timeline: 'Срок: 48 ч',
        items: ['8 изображений, 1-2 машины', '3+ фона + ночная версия', '4K, все форматы', 'Полный пакет ресайзов', '2 раунда правок'],
    },
];

const comparisonRows: ComparisonRow[] = [
    { label: 'Цена от', basic: '150 ₾', standard: '270 ₾', full: '400 ₾' },
    { label: 'Ракурсов', basic: '3', standard: '5', full: '8' },
    { label: 'Вариантов фона', basic: '1-2', standard: '3', full: '3+' },
    { label: 'Ночная версия', basic: '—', standard: '—', full: '✓' },
    { label: 'Ресайзы MyAuto', basic: '✓', standard: '✓', full: '✓' },
    { label: 'Ресайзы Instagram', basic: '—', standard: '✓', full: '✓' },
    { label: 'Разрешение', basic: '2K', standard: '4K', full: '4K' },
    { label: 'Раундов правок', basic: '1', standard: '1', full: '2' },
    { label: 'Срок', basic: '24-48 ч', standard: '24-48 ч', full: '48 ч' },
    {
        label: 'Подходит если',
        basic: 'Одно объявление',
        standard: 'Профиль в соцсетях',
        full: 'Сайт + реклама + соцсети',
    },
];

const relatedServices = [
    { title: 'AI-продуктовый визуал для товаров', href: '/ai-visual/ai-product' },
    { title: 'Аэросъёмка для автобизнеса', href: '/drone-services/drone-auto' },
    { title: 'AI-визуал для брендов и маркетинга', href: '/ai-visual/ai-brand' },
    { title: 'Reels для автобизнеса', href: '/reels-promo/reels-auto' },
];

const mistakes: Card[] = [
    {
        title: 'Присылают тёмные фото вечером или в гараже',
        text: 'AI нужен читаемый контур машины. При плохом свете контур теряется, и качество падает.',
    },
    {
        title: 'Загрязнённая машина на фото',
        text: 'Грязь останется на финальном изображении. Лучше помыть машину до съёмки.',
    },
    {
        title: 'Один ракурс вместо нескольких',
        text: 'Покупатель хочет видеть машину со всех сторон. Минимум 3 ракурса — рабочая база.',
    },
    {
        title: 'Ожидают, что AI уберёт царапины и дефекты',
        text: 'Замена фона и ретушь кузова — разные задачи. Нужную ретушь согласовываем отдельно.',
    },
    {
        title: 'Не указывают платформу размещения',
        text: 'MyAuto, Instagram и баннеры требуют разных форматов. Лучше сразу указать каналы публикации.',
    },
    {
        title: 'Ожидают студийный результат на слабом исходнике',
        text: 'AI усиливает подачу, но не заменяет качество исходного кадра. Чем лучше исходник, тем сильнее финал.',
    },
];

const freeImprovements = [
    'Помойте машину и уберите лишние предметы из кадра.',
    'Снимайте при дневном свете: утро или пасмурный день дают ровный свет.',
    'Выбирайте нейтральный фон: пустая парковка или серая стена.',
    'Сделайте несколько ракурсов: спереди, сзади, 3/4, салон.',
    'Снимайте горизонтально — это базовый формат для авто.',
];

const checklist = [
    'Машина чистая.',
    'Есть фото при дневном свете.',
    'Есть несколько ракурсов (минимум 3).',
    'Понятны платформы размещения.',
    'Определён стиль фона.',
    'Понятен бюджет.',
    'Есть мессенджер для связи.',
    'Понимание формата: результатом будут изображения, не видео.',
];

const longAnswers: Card[] = [
    {
        title: 'Почему AI-обработка фона авто технически сложнее, чем для других продуктов?',
        text: 'Автомобиль — сложный объект: форма кузова, хром, стёкла, блики лака и отражения. При автоматическом вырезании на простых инструментах часто появляются артефакты. Поэтому после AI-этапа мы делаем ручную доработку теней, контуров и отражений.',
    },
    {
        title: 'Как AI-обработка влияет на продажи на MyAuto?',
        text: 'Объявления с чистыми профессиональными фото обычно получают выше вовлечение: больше переходов и звонков. Покупатель подсознательно связывает аккуратную визуальную подачу с ответственным продавцом.',
    },
    {
        title: 'Подходит ли AI-визуал для детейлинга в Instagram?',
        text: 'Да. После химчистки, полировки или керамики важно показать результат в сильной визуальной среде. AI-фон делает «после»-кадр выразительным и улучшает восприятие кейсов.',
    },
    {
        title: 'Можно ли использовать AI-визуал для рекламы официального дилерского центра?',
        text: 'Да, если подача честная и не вводит покупателя в заблуждение. Фон и атмосфера могут меняться, но реальное состояние автомобиля должно оставаться достоверным.',
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит AI-обработка фото автомобиля в Тбилиси?',
        answer: 'От 150 ₾ за 3 ракурса. Standard — от 270 ₾, Full — от 400 ₾.',
    },
    {
        question: 'Можно ли заменить фон машины на профессиональный студийный?',
        answer: 'Да. Убираем исходный фон и ставим автомобиль на нейтральную или атмосферную сцену.',
    },
    {
        question: 'Как быстро делается AI-обработка авто?',
        answer: 'Обычно 24-48 часов после получения фото и брифа.',
    },
    {
        question: 'Можно ли сделать AI-фото авто для MyAuto.ge?',
        answer: 'Да. Подготавливаем ресайзы под формат MyAuto.',
    },
    {
        question: 'Изменяет ли AI внешний вид самого автомобиля?',
        answer: 'Нет. В рамках услуги меняется только фон и атмосфера, а не состояние машины.',
    },
    {
        question: 'Подходит ли услуга для детейлинга?',
        answer: 'Да. Особенно хорошо работает для «после» и контента в Instagram.',
    },
    {
        question: 'Нужна ли профессиональная камера?',
        answer: 'Нет. Достаточно хорошего смартфона и дневного света.',
    },
    {
        question: 'Можно ли обработать сразу несколько машин?',
        answer: 'Да. При заказе от 5 машин действует скидка 15%.',
    },
];

const myths: MythItem[] = [
    {
        myth: '«AI-фон всегда выглядит ненатурально»',
        reality: 'Ненатурально выглядит только автоматическая обработка без ручной постобработки. Мы корректируем тени и отражения вручную.',
    },
    {
        myth: '«Нужно специальное профессиональное фото»',
        reality: 'Достаточно смартфона при дневном свете, если машина чистая и ракурсы сняты аккуратно.',
    },
    {
        myth: '«AI сделает машину лучше, чем она есть»',
        reality: 'AI меняет фон, но не реальное состояние автомобиля. Дефекты и особенности машины должны оставаться честными.',
    },
    {
        myth: '«Это только для премиальных авто»',
        reality: 'Подача важна в любом ценовом сегменте. Бюджетные машины тоже выигрывают от профессионального фона.',
    },
    {
        myth: '«Сначала всё равно нужно ехать в студию»',
        reality: 'Нет. Вы отправляете фото в WhatsApp, и обработка делается дистанционно.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Замена фона',
        definition: 'Удаление исходного фона и добавление нового с учётом перспективы, теней и отражений.',
    },
    {
        term: 'Студийный фон',
        definition: 'Нейтральная светлая или тёмная сцена, имитирующая профессиональную автостудию.',
    },
    {
        term: 'Ракурс',
        definition: 'Угол, под которым снят автомобиль: 3/4, спереди, сбоку, сзади и т.д.',
    },
    {
        term: 'Ретушь',
        definition: 'Ручное удаление дефектов и загрязнений на кузове. Это отдельная услуга от замены фона.',
    },
    {
        term: 'Ночная сцена',
        definition: 'Атмосферный фон с ночным светом и бликами для рекламной подачи.',
    },
    {
        term: 'Постобработка',
        definition: 'Ручная доработка AI-результата для естественного вида контуров, теней и отражений.',
    },
];

const notFitItems = [
    'Тем, кто ожидает изменения цвета, комплектации или деталей самого автомобиля.',
    'Тем, кто хочет создать полностью несуществующую машину или концепт-кар.',
    'Тем, кто хочет скрыть реальные повреждения и вводить покупателя в заблуждение.',
    'Тем, кому нужна полноценная люксовая автосъёмка с макродеталями и большим продакшном на площадке.',
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
            name: 'AI-визуал для автобизнеса',
            item: CANONICAL_URL,
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-визуал для автобизнеса',
    description: PAGE_DESCRIPTION,
    serviceType: 'AI-визуализация автомобилей и шоурумов',
    areaServed: ['Tbilisi', 'Georgia'],
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

export default function AiAutoPage() {
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
                            "url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=80')",
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
                                AI-визуал для автобизнеса · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                AI-визуал для автобизнеса — подача авто и шоурума под продажи и рекламу
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Профессиональные изображения автомобилей и шоурума без выезда автофотографа. AI заменяет парковочный
                                фон на премиальную студию — за 24 часа.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Покупатель принимает первое решение по фото. Авто на парковке перед гаражом — это не продажа, это
                                объявление. AI-визуал для автобизнеса превращает обычные фото машины в профессиональные изображения: с
                                нейтральным студийным фоном, с правильным светом и в нужной атмосфере. Вы получаете готовые файлы для
                                MyAuto, Instagram, рекламных баннеров и сайта.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Прислать фото авто
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
                                        <p className="text-lg font-bold text-white">24-48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3-8</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">изображений</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>MyAuto + Instagram + баннеры</li>
                                    <li>Форматы JPG/PNG/WebP</li>
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
                            Готовые изображения машины с профессиональным фоном для публикации на MyAuto.ge, в Instagram, Telegram и
                            рекламном кабинете. Каждый файл — чистый, без лишних элементов и без водяных знаков.
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
                <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-2">
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
                            MyAuto.ge — главная платформа авторынка Грузии. Тысячи объявлений конкурируют за внимание покупателя,
                            и большинство фото сделаны на телефон прямо на улице. AI-обработка фона — быстрый способ выделиться без
                            дорогой студийной съёмки.
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
                            <li>Специализированная обработка авто: тени, отражения, перспектива.</li>
                            <li>Понимаем форматы MyAuto, Instagram и рекламных кабинетов.</li>
                            <li>Быстрый срок: 24-48 часов независимо от класса авто.</li>
                            <li>Коммерческие лицензии без ограничений на публикацию.</li>
                            <li>Работаем с автобизнесом в Тбилиси и по всей Грузии дистанционно.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <MidCta
                text="Пришлите фото авто — покажем, как оно может выглядеть с профессиональным фоном."
                buttonLabel="Прислать фото авто"
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
                            <li>Одна машина на MyAuto → Basic.</li>
                            <li>Профиль в Instagram и несколько форматов → Standard.</li>
                            <li>Автосалон, несколько машин, реклама → Full или индивидуальный расчёт.</li>
                        </ul>
                        <p className="mt-4">
                            Напишите нам: <a href={`tel:${CONTACT_PHONE_PLAIN}`}>{CONTACT_PHONE}</a>
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Пришлите фото авто в WhatsApp — посмотрим вместе, как лучше подать машину."
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
                            Нужна аэросъёмка площадки или шоурума? Смотрите раздел{' '}
                            <Link href="/drone-services/drone-auto" className="text-[#D4A017] underline-offset-4 hover:underline">
                                аэросъёмки для автобизнеса
                            </Link>
                            .
                        </p>
                        <p>
                            Нужны видеоролики для Instagram? Смотрите{' '}
                            <Link href="/reels-promo/reels-auto" className="text-[#D4A017] underline-offset-4 hover:underline">
                                Reels для авто
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
                        Работаем в Тбилиси. Принимаем фото в WhatsApp и дистанционно по всей Грузии.
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

            <ProcessNote text="Замена фона автомобиля — технически сложный AI-процесс из-за формы кузова, теней и отражений. После генерации мы вручную дорабатываем контуры, чтобы финал выглядел естественно, а не как коллаж." />

            <section className="bg-[#080808] pb-16 pt-8 text-center text-xs text-white/45">
                <p>
                    Breus Media — медиапродакшн в Тбилиси. AI-визуализация, аэросъёмка, 360° туры, Reels. © 2026.
                </p>
            </section>

            <DroneFooterStitch />
        </main>
    );
}
