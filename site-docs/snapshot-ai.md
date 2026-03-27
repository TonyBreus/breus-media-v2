# Breus Media — AI Visual и AI Content — 26 марта 2026
Страницы: /ai-visualization-service, /ai-visual/ai-auto, /ai-visual/ai-brand, /ai-visual/ai-interior, /ai-visual/ai-menu-delivery, /ai-visual/ai-product, /ai-visual/ai-real-estate, /ai-visual/ai-staging, /ai-content/hotel-ai-descriptions, /ai-content/tourism-ai-packaging

## /ai-visualization-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.aiVisualizationService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function AiVisualizationServicePage() {
    return <L2DirectionRenderer schemaKey="ai-visualization-service" config={config} />;
}

```
---
---

## /ai-visual/ai-auto
Lines: 1044
```tsx
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
const PAGE_TITLE = 'AI-визуал для автобизнеса — подача авто и шоурума для продаж';
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

```
---
---

## /ai-visual/ai-brand
Lines: 1089
```tsx
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

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-brand';
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
            item: 'https://breusmedia.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'AI-визуализация',
            item: 'https://breusmedia.com/ai-visualization-service',
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
    title: 'AI-визуал для брендов и маркетинга — кампании, реклама, лендинги',
    description:
        'Создаём AI-изображения для рекламных кампаний, SMM, лендингов и брендовых материалов. Без студийной съёмки. От 200 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-визуал для брендов и маркетинга — кампании, реклама, лендинги',
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

```
---
---

## /ai-visual/ai-interior
Lines: 1124
```tsx
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
    title: 'AI-визуализация интерьеров и пространств Тбилиси — атмосфера до открытия',
    description:
        'AI-изображения отеля, ресторана, клиники или офиса до завершения ремонта. Покажите атмосферу заранее. От 200 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-визуализация интерьеров и пространств Тбилиси — атмосфера до открытия',
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

```
---
---

## /ai-visual/ai-menu-delivery
Lines: 1308
```tsx
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

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-menu-delivery';
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
            item: 'https://breusmedia.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'AI-визуализация',
            item: 'https://breusmedia.com/ai-visualization-service',
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
    title: 'AI-карточки и меню для Wolt и Glovo — Тбилиси',
    description:
        'AI-фото блюд для Wolt, Glovo и digital-меню без фотографа. Аппетитные карточки за 24 часа. От 120 ₾. Тбилиси, Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-карточки и меню для Wolt и Glovo — Тбилиси',
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

```
---
---

## /ai-visual/ai-product
Lines: 1220
```tsx
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

const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-product';
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
            item: 'https://breusmedia.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'AI-визуализация',
            item: 'https://breusmedia.com/ai-visualization-service',
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
    title: 'AI-продуктовый визуал — карточки и рекламные сцены без фотосессии',
    description:
        'Создаём реалистичные карточки товаров, продуктовые сцены и рекламные изображения с помощью AI. Без студии и фотографа. От 150 ₾. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-продуктовый визуал — карточки и рекламные сцены без фотосессии',
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
                                    href="#packages"
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

```
---
---

## /ai-visual/ai-real-estate
Lines: 1055
```tsx
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

const SITE_URL = 'https://breusmedia.com';
const CANONICAL_URL = 'https://breusmedia.com/ai-visual/ai-real-estate';
const PAGE_TITLE = 'AI-визуализация недвижимости в Тбилиси — рендеры объектов';
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
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Частые ошибки при заказе</h2>
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
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Расширенные ответы (long-tail SEO)</h2>
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

```
---
---

## /ai-visual/ai-staging
Lines: 1047
```tsx
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
const PAGE_TITLE = 'AI staging и виртуальная меблировка квартир — Тбилиси';
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

```
---
---

## /ai-content/hotel-ai-descriptions
Lines: 1310
```tsx
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

const CANONICAL_URL = 'https://breus.media/ai-content/hotel-ai-descriptions';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroIntro =
    'На Booking тысячи отелей. Ваше описание — это первый текст, который видит потенциальный гость. Если оно написано наспех, переведено машиной или просто устарело — вы теряете бронирование. Мы создаём профессиональные описания объекта, номеров и услуг с помощью AI-инструментов и редактуры реального копирайтера — на русском, английском и грузинском языках. Точные, убедительные, адаптированные под алгоритмы OTA и под живого гостя.';

const serviceExplanation =
    'AI-описания для отеля — это профессиональные тексты для Booking, Airbnb, Expedia и собственного сайта: описание объекта, отдельных типов номеров, услуг, завтрака, правил и особенностей. Мы используем AI для скорости и структуры, редактор — для точности и тона. На выходе: тексты, которые читаются естественно, правдиво описывают ваш объект и работают в алгоритмах OTA. Доступны на RU, EN и GE.';

const audienceItems: string[] = [
    'Отелям, которые только выходят на Booking или Airbnb и хотят начать с правильных описаний.',
    'Объектам с устаревшими или некорректными переводами — особенно если оригинал на одном языке, а переводы сделаны автоматически.',
    'Управляющим компаниям, которые ведут несколько объектов и хотят унифицировать стандарт текстов.',
    'Апарт-отелям с большим количеством типов юнитов — каждый нуждается в отдельном, чётком описании.',
    'Отелям, которые обновили номера или изменили ценовую политику — нужны актуальные тексты.',
    'Небольшим гестхаусам, у которых вообще нет нормальных описаний, только стандартный шаблон OTA.',
];

const taskCards: CardItem[] = [
    {
        title: 'Устраняет «текстовый разрыв»',
        text: 'Гость не может прочитать ваш отель правильно — он видит машинный перевод или общие фразы, которые не говорят о конкретном объекте.',
    },
    {
        title: 'Повышает конверсию на OTA',
        text: 'Алгоритмы Booking.com и других площадок лучше ранжируют объекты с полными, структурированными и актуальными текстами.',
    },
    {
        title: 'Снижает нагрузку на ресепшн',
        text: 'Хорошо написанные FAQ и описания в OTA сокращают количество уточняющих вопросов перед заездом.',
    },
    {
        title: 'Создаёт единый стандарт',
        text: 'Если у вас несколько каналов (Booking, Airbnb, сайт, Expedia), тексты везде звучат одинаково точно и профессионально.',
    },
];

const painCards: CardItem[] = [
    {
        title: '«Описание на Booking написали 3 года назад — оно устарело»',
        text: 'Описание не обновляется годами: поменялся завтрак, добавился бассейн, изменилось расположение входа — а текст рассказывает о том, чего уже нет.',
    },
    {
        title: '«Мы переводим описания в Google Translate — гости жалуются, что непонятно»',
        text: 'Машинный перевод без редактуры создаёт неточности, странные фразы и теряет тон бренда. Это особенно заметно для профессиональных путешественников и корпоративных клиентов.',
    },
    {
        title: '«У нас 12 типов номеров — у каждого одинаковое описание»',
        text: 'Одинаковые тексты для разных номеров — это отказ от продажи апгрейда. Гость не видит разницы и выбирает только по цене.',
    },
    {
        title: '«Не знаем, как правильно описать отель для иностранных гостей»',
        text: 'Русскоязычное описание не работает для европейцев: другие ожидания, другой стиль, другие акценты. Без локализации международный трафик конвертируется хуже.',
    },
    {
        title: '«Алгоритм Booking нас почти не показывает»',
        text: 'Пустые поля, короткие описания или отсутствие текстов на важных языках приводят к видимым потерям позиций в поиске.',
    },
    {
        title: '«У нас нет времени писать тексты самостоятельно»',
        text: 'Управляющий занят операционкой. Написать хорошие описания на трёх языках — это часы работы, которые можно делегировать.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Выше в выдаче Booking = больше просмотров',
        text: 'Полное заполнение профиля даёт рост органического трафика без рекламы.',
    },
    {
        title: 'Апгрейд через описание',
        text: 'Если номер с лучшим видом описан убедительно, гость сам чаще выбирает более дорогой вариант.',
    },
    {
        title: 'Международные гости конвертируются лучше',
        text: 'Точный и привлекательный текст на английском и грузинском закрывает больше запросов от разных рынков.',
    },
    {
        title: 'Спецпредложения продаются, а не просто публикуются',
        text: 'Правильно написанный текст акции превращает «информацию» в действие и бронирование.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Меньше жалоб на несоответствие',
        text: 'Точное описание помогает гостю заранее понять, что его ждёт, и снижает риск негативного отзыва.',
    },
    {
        title: 'Меньше отмен',
        text: 'Гость, который точно понял, что бронирует, реже отменяет.',
    },
    {
        title: 'Стабильность при изменениях OTA',
        text: 'Актуальные тексты позволяют быстрее адаптироваться к изменениям алгоритмов и требований платформ.',
    },
    {
        title: 'Репутация бренда на первом экране',
        text: 'Грамотный текст на языке гостя формирует профессиональное впечатление ещё до общения с персоналом.',
    },
];

const deliverables: string[] = [
    'Описание объекта (отель / гестхаус / апарт-отель) — на RU, EN, GE: 300–500 слов на каждом языке.',
    'Описание каждого типа номеров — отдельный текст с уникальными характеристиками.',
    'Описание ключевых услуг: завтрак, парковка, SPA, трансфер, ресторан, конференц-зал (по наличию).',
    'Описание политик: заезд/выезд, домашние животные, дети, курение — в структуре OTA.',
    'Раздел «Расположение»: локация, ближайшие точки интереса, транспорт.',
    'Блок Q&A: 8–12 вопросов с ответами на RU/EN.',
    'Финальный документ с инструкцией по размещению в OTA.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'DOCX (структурированный документ) + TXT для быстрого копирования в OTA.',
    },
    {
        title: 'Объём',
        text: 'Зависит от количества типов номеров, услуг и каналов размещения.',
    },
    {
        title: 'Сроки',
        text: '3–5 рабочих дней для Basic, 7–10 рабочих дней для Full.',
    },
    {
        title: 'Передача и правки',
        text: 'Google Drive или email. 1 раунд правок на каждый языковой блок включён.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Новый отель выходит на Booking',
        text: 'Создаём полный пакет текстов с нуля: описание объекта, все типы номеров, услуги, правила и расположение на трёх языках.',
    },
    {
        title: 'Апарт-отель с 8 типами юнитов',
        text: 'Пишем уникальное описание для каждого типа с акцентом на отличия: вид, метраж, планировка, сценарий использования.',
    },
    {
        title: 'Обновление после ремонта',
        text: 'Обновляем описания под новую реальность: новые зоны, услуги, правила, позиционирование.',
    },
    {
        title: 'Управляющая компания с несколькими объектами',
        text: 'Приводим профили к единому тону бренда и стандарту качества по всем объектам.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Бутик-отель, Старый Тбилиси, 16 номеров',
        text: 'Переписали машинный EN-перевод на нативные тексты для европейской аудитории. Владелец отметил меньше уточняющих вопросов до заезда.',
    },
    {
        title: 'Апарт-отель, Сабуртало, 22 юнита',
        text: 'Разделили 6 типов апартаментов на уникальные описания. Гости чаще выбирают более дорогие варианты, потому что видят разницу.',
    },
    {
        title: 'Управляющая компания, 4 объекта в Тбилиси',
        text: 'Унифицировали стиль и структуру RU+EN для всех профилей. Команда сэкономила время на ежедневной операционке.',
    },
];

const socialProofItems: string[] = [
    'Booking.com рекомендует заполнять профиль максимально полно: объект, номера, политики и услуги.',
    'Гости чаще бронируют, когда описание заранее отвечает на ключевые вопросы: вид, завтрак, парковка, расположение.',
    'Локализованный текст обычно конвертирует лучше, чем дословный машинный перевод.',
    'Breus Media работает с объектами в Тбилиси и Батуми и учитывает ожидания аудиторий CIS, Европы и Израиля.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-описания для отеля?',
        answer: 'Это профессиональные тексты для Booking, Airbnb и сайта: создаются AI-инструментами и дорабатываются копирайтером, чтобы сохранить точность и естественный тон.',
    },
    {
        question: 'Чем AI-описания отличаются от машинного перевода?',
        answer: 'Машинный перевод переводит дословно и часто теряет контекст. Мы пишем текст нативно под язык и аудиторию, а не просто переводим.',
    },
    {
        question: 'Нужно ли что-то делать после получения текстов?',
        answer: 'Да, разместить тексты в профиле Booking / Airbnb / на сайте. Мы передаём документ с разбивкой по разделам OTA и инструкцией по вставке.',
    },
    {
        question: 'Как долго работают тексты — нужно ли их обновлять?',
        answer: 'Базовые описания обычно актуальны 1–2 года. Политики, акции и сезонные блоки обновляются по мере изменений.',
    },
    {
        question: 'Могут ли тексты реально повлиять на позицию в выдаче Booking?',
        answer: 'Да. Полнота и актуальность заполнения профиля влияют на видимость в поиске вместе с другими факторами.',
    },
    {
        question: 'Вы пишете на грузинском языке?',
        answer: 'Да. Грузинские тексты доступны в пакете Full и в отдельных заказах по запросу.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоят AI-описания для отеля?',
        answer: 'Basic (объект + 3 типа номеров, RU+EN) — от 150 ₾. Standard (до 8 типов + услуги + политики, RU+EN) — от 350 ₾. Full (RU+EN+GE + Q&A + без лимита номеров) — от 600 ₾.',
    },
    {
        question: 'Что нужно предоставить перед стартом?',
        answer: 'Любое описание объекта, список типов номеров с характеристиками, услуги и правила. Подходит даже исходник в мессенджере.',
    },
    {
        question: 'Как долго занимает работа?',
        answer: 'Basic — 3–5 рабочих дней. Full — 7–10 рабочих дней. Срочное выполнение возможно за доплату.',
    },
    {
        question: 'Входят ли правки в стоимость?',
        answer: 'Да, 1 раунд правок по каждому языковому блоку включён.',
    },
    {
        question: 'Можно ли заказать только один язык?',
        answer: 'Да, доступен любой язык отдельно или в комбинации RU / EN / GE.',
    },
    {
        question: 'Работаете ли вы с Airbnb и другими OTA?',
        answer: 'Да. Тексты адаптируем под формат Booking, Airbnb, Expedia, Hotels.com и собственного сайта.',
    },
];

const whyUsItems: string[] = [
    'AI + человек: не отдаём сырой AI-текст, каждое описание проходит редактуру.',
    'Знаем отельную специфику и вопросы гостей из разных рынков.',
    'Работаем с реальными объектами в Тбилиси и Батуми, а не по шаблону.',
    'Комплексный подход: можно объединить тексты, видео, Reels и 360° тур в одном проекте.',
    'Структурированный формат выдачи: материалы сразу готовы к размещению.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Анкета (15–30 минут)',
        text: 'Вы заполняете анкету или отвечаете в мессенджере: типы номеров, услуги, особенности, аудитория.',
    },
    {
        step: 'Шаг 2',
        title: 'Создание черновиков',
        text: 'AI генерирует структуру, редактор дорабатывает тексты и адаптирует их под аудиторию на нужных языках.',
    },
    {
        step: 'Шаг 3',
        title: 'Первая версия',
        text: 'Присылаем полный документ на согласование с разбивкой по разделам OTA.',
    },
    {
        step: 'Шаг 4',
        title: 'Правки',
        text: 'Вносим правки по комментариям. Один раунд включён в стоимость.',
    },
    {
        step: 'Шаг 5',
        title: 'Финальный документ',
        text: 'Передаём DOCX + TXT + инструкцию по размещению в Booking и других OTA.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        audience: 'Для небольшого объекта: нужно обновить основные тексты на 1–2 языках.',
        timeline: 'Срок: 3–5 рабочих дней.',
        items: ['Описание объекта на RU + EN (300–400 слов на каждом языке).', 'Описание до 3 типов номеров.', 'Финальный DOCX.'],
    },
    {
        title: 'Standard',
        price: 'от 350 ₾',
        audience: 'Для отеля с несколькими типами номеров, который хочет заполнить Booking профессионально.',
        timeline: 'Срок: 5–7 рабочих дней.',
        items: [
            'Описание объекта на RU + EN (400–600 слов).',
            'Описание до 8 типов номеров.',
            'Описание 3–5 ключевых услуг.',
            'Описание политик (заезд/выезд, дети, животные).',
            'Раздел «Расположение» на RU + EN.',
            'DOCX + инструкция по размещению.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 600 ₾',
        audience: 'Для отелей с международной аудиторией и управляющих компаний нескольких объектов.',
        timeline: 'Срок: 7–10 рабочих дней.',
        items: [
            'Всё из Standard.',
            'Все три языка: RU + EN + GE.',
            'Описание всех типов номеров без ограничения.',
            'Q&A блок: 8–12 вопросов с ответами на RU + EN.',
            'Специальное предложение / сезонная акция (1 текст).',
            'Адаптация под Airbnb или Expedia (дополнительно).',
        ],
    },
];

const packageComparisonRows = [
    ['Что входит', 'Basic', 'Standard', 'Full'],
    ['Языки', 'RU + EN', 'RU + EN', 'RU + EN + GE'],
    ['Описание объекта', '✓', '✓', '✓'],
    ['Типы номеров', 'до 3', 'до 8', 'без лимита'],
    ['Услуги', '—', '3–5', 'все'],
    ['Политики', '—', '✓', '✓'],
    ['Q&A блок', '—', '—', '✓'],
    ['Специальное предложение', '—', '—', '✓'],
    ['Цена', 'от 150 ₾', 'от 350 ₾', 'от 600 ₾'],
];

const relatedServices = [
    {
        title: 'Видеотур по отелю',
        href: '/promo-video/promo-hotel',
        description: 'Cinematic-ролик для сайта и Booking в дополнение к текстам.',
    },
    {
        title: '360° тур по отелю',
        href: '/360-tour/360-tour-hotels',
        description: 'Виртуальный тур, который усиливает эффект качественных описаний.',
    },
    {
        title: 'Reels для отеля',
        href: '/reels-promo/reels-hotel',
        description: 'Видеоконтент для Instagram, который работает параллельно с OTA.',
    },
    {
        title: 'Сезонный контент-пакет',
        href: '/reels-promo/hotel-seasonal-content',
        description: 'Обновление текстов и контента под сезон или акцию.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Описание объекта — одно предложение',
        text: '«Уютный отель в центре Тбилиси» не отвечает на вопросы гостя. Нужны факты: вид, завтрак, транспорт, парковка.',
    },
    {
        title: 'Все номера описаны одинаково',
        text: 'Если стандарт и делюкс написаны одинаково, гость не видит ценность апгрейда и выбирает дешевле.',
    },
    {
        title: 'Машинный перевод без проверки',
        text: 'Странный синтаксис и ошибки в переводе снижают доверие международного гостя.',
    },
    {
        title: 'Описание не обновляется годами',
        text: 'Изменились услуги или правила, а текст старый. Несоответствие реальности ведёт к жалобам и плохим отзывам.',
    },
    {
        title: 'Нет описания расположения',
        text: '«Удобное расположение» не работает. Нужна конкретика: ориентиры, расстояния, транспорт.',
    },
    {
        title: 'Нет ответов на частые вопросы',
        text: 'Если нет ответов про парковку, животных или заезд, гость уходит туда, где всё понятно сразу.',
    },
];

const quickImprovements: string[] = [
    'Добавьте конкретику в первые два предложения: расстояние до центра, типичный вид из окна, ключевая особенность объекта.',
    'Проверьте, заполнены ли политики в Booking Extranet: заезд/выезд, курение, домашние животные, дети.',
    'Добавьте хотя бы одно специальное предложение в разделе «Акции» на Booking.',
    'Попросите постоянных гостей ответить на 3 вопроса об объекте — это даст материал для живого обновления текста.',
    'Перечитайте описание как иностранец: есть ли ответы на ключевые вопросы перед бронированием?',
];

const readinessChecklist: string[] = [
    'Есть список всех типов номеров с характеристиками: площадь, вид, тип кровати, ванная, балкон.',
    'Описан завтрак: что входит, шведский стол или сервированный, время подачи.',
    'Указаны услуги: парковка, трансфер, SPA, ресторан, лифт.',
    'Определены правила: check-in/check-out, дети, животные, курение.',
    'Есть понимание ключевой аудитории: откуда приезжают гости и что им важно.',
    'Согласованы языки: RU, EN, GE.',
    'Подготовлено актуальное описание расположения и района.',
    'Понятно, где размещать материалы: Booking, Airbnb, Expedia, собственный сайт.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Как AI-инструменты работают при создании описаний для отелей?',
        answers: [
            'AI используется на этапе структуры и первичного текста: это ускоряет работу и помогает параллельно готовить несколько языков.',
            'Но AI не знает конкретику вашего объекта. Поэтому редактор вносит детали, проверяет факты и адаптирует текст под аудиторию.',
            'Результат — текст, который читается естественно и отражает реальные особенности вашего отеля.',
        ],
    },
    {
        question: 'Почему хорошие тексты на Booking важнее фотографий?',
        answers: [
            'Фото дают первое впечатление, но именно текст отвечает на вопросы перед бронированием и закрывает сомнения.',
            'Кроме того, тексты участвуют в поисковой релевантности на OTA: полнота и точность описаний повышает видимость карточки.',
        ],
    },
    {
        question: 'Как локализация под разные языки влияет на конверсию?',
        answers: [
            'Локализация — это адаптация под ожидания аудитории, а не дословный перевод.',
            'Нативный текст вызывает больше доверия и обычно лучше конвертирует в бронирование, чем машинный перевод.',
        ],
    },
    {
        question: 'Как часто нужно обновлять описания на OTA?',
        answers: [
            'Минимум раз в год, обязательно после ремонта, изменения услуг или политик.',
            'Также имеет смысл обновляться перед высоким сезоном и при изменениях требований платформ.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Что такое AI-описания для отеля?',
        answer: 'Это профессиональные тексты для Booking, Airbnb и сайта: описание объекта, номеров и услуг, созданные с помощью AI и отредактированные копирайтером.',
    },
    {
        question: 'Сколько стоят AI-описания для отеля в Тбилиси?',
        answer: 'Basic — от 150 ₾, Standard — от 350 ₾, Full — от 600 ₾. Итог зависит от числа номеров, языков и объёма задач.',
    },
    {
        question: 'Зачем отелю профессиональные описания на Booking?',
        answer: 'Они повышают видимость профиля, уменьшают количество вопросов до заезда и помогают гостю бронировать увереннее.',
    },
    {
        question: 'Как AI-описания отличаются от машинного перевода?',
        answer: 'Машинный перевод переводит дословно. AI-описания с редактурой пишутся нативно под аудиторию и звучат естественно.',
    },
    {
        question: 'Можно ли заказать описания только на английском языке?',
        answer: 'Да. Можно заказать EN, GE или RU отдельно, либо любую комбинацию языков.',
    },
    {
        question: 'Влияют ли тексты на позицию отеля в поиске Booking?',
        answer: 'Да. Полнота заполнения профиля, включая описание объекта, номеров, услуг и политик, связана с видимостью в поиске.',
    },
    {
        question: 'Нужно ли выезжать для создания описаний?',
        answer: 'Нет. Работа полностью удалённая: вы отправляете данные, мы создаём и согласовываем тексты онлайн.',
    },
    {
        question: 'Кто делает AI-описания для отелей в Тбилиси?',
        answer: `Breus Media, Тбилиси. Контакт: ${CONTACT_PHONE_DISPLAY}.`,
    },
];

const additionalMaterials = [
    {
        title: 'Гайд: как заполнить профиль отеля на Booking.com',
        href: '/guide/booking-profile-checklist',
    },
    {
        title: 'Статья: почему машинный перевод снижает бронирования',
        href: '/blog/translation-vs-localization-hotel',
    },
    {
        title: 'Шаблон описания типа номера для Booking.com',
        href: '/guide/room-description-template',
    },
    {
        title: 'Сравнение OTA: Booking vs Airbnb vs Expedia',
        href: '/blog/ota-descriptions-comparison',
    },
];

const internalTransitions = [
    {
        title: 'Дополнить тексты визуальным контентом',
        text: 'Посмотрите Видеотур по отелю — cinematic-ролик для сайта и OTA.',
        href: '/promo-video/promo-hotel',
    },
    {
        title: 'Нужны тексты под сезонные акции',
        text: 'Сезонный контент-пакет включает обновление описаний под конкретный период.',
        href: '/reels-promo/hotel-seasonal-content',
    },
    {
        title: 'Хотите интерактивную презентацию отеля',
        text: '360° тур усиливает эффект качественных текстов и помогает гостю принять решение.',
        href: '/360-tour/360-tour-hotels',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1: «AI напишет текст — не нужен редактор»',
        text: 'AI даёт черновую основу. Редактор добавляет факты, тон бренда и адаптацию под реальный объект.',
    },
    {
        title: 'Миф 2: «Гости не читают описания — только смотрят фото»',
        text: 'Фото привлекают внимание, а текст закрывает вопросы перед бронированием и влияет на решение.',
    },
    {
        title: 'Миф 3: «На Booking главное цена»',
        text: 'В одном ценовом диапазоне гость выбирает там, где выше доверие, а качественный текст — часть этого доверия.',
    },
    {
        title: 'Миф 4: «Мы сами переведём через Google»',
        text: 'Машинный перевод быстро выдаёт неестественные формулировки и снижает восприятие сервиса.',
    },
    {
        title: 'Миф 5: «Это долго и дорого»',
        text: 'Базовый пакет стартует от 150 ₾ и обычно готов за 3–5 рабочих дней.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'OTA (Online Travel Agency)',
        description: 'Онлайн-платформа бронирования: Booking.com, Airbnb, Expedia, Hotels.com.',
    },
    {
        term: 'Профиль объекта',
        description: 'Страница отеля на OTA: фото, тексты, типы номеров, услуги, политики, отзывы.',
    },
    {
        term: 'Локализация',
        description: 'Адаптация текста под язык и ожидания аудитории, а не дословный перевод.',
    },
    {
        term: 'Q&A блок',
        description: 'Раздел с часто задаваемыми вопросами, который снимает сомнения гостя до бронирования.',
    },
    {
        term: 'Ранжирование OTA',
        description: 'Алгоритм сортировки объектов в поиске с учётом рейтинга, цены, доступности и полноты профиля.',
    },
    {
        term: 'Пакетное предложение',
        description: 'Комплексная акция (например, «3 ночи + завтрак + трансфер») с отдельным описанием под платформу.',
    },
];

const notFitItems: string[] = [
    'Отелям, которым нужен финальный результат «через 1 час». Даже быстрый продакшн требует минимум 1–2 дня.',
    'Объектам, которые не готовы предоставить базовую информацию о номерах, услугах и правилах.',
    'Хостелам и объектам, которые полностью устраивает текущее качество текстов и не нужны улучшения.',
    'Отелям, которые не используют OTA и продают только по телефону — для них формат может быть неактуален.',
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
            name: 'AI-визуализация и контент',
            item: 'https://breus.media/ai-visualization-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'AI-описания для отеля',
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
    serviceType: 'AI-описания для отелей',
    name: 'AI-описания для отеля: Booking, Airbnb и OTA',
    description:
        'Профессиональные описания объекта, номеров, услуг и политик для OTA с редактурой на RU, EN и GE. Тбилиси, Грузия.',
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
    title: 'AI-описания для отеля — тексты для Booking и Airbnb на RU/EN/GE',
    description:
        'Профессиональные описания номеров и услуг отеля для Booking, Airbnb и OTA. AI + редактура. На русском, английском и грузинском. От 150 ₾, Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-описания для отеля — тексты для Booking и Airbnb на RU/EN/GE',
        description:
            'Профессиональные описания номеров и услуг отеля для Booking, Airbnb и OTA. AI + редактура. На русском, английском и грузинском. От 150 ₾, Тбилиси.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function HotelAiDescriptionsPage() {
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
                            "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80')",
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
                                    AI Content · Hospitality · OTA
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-описания для отеля — тексты для Booking, Airbnb и OTA
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Гость читает ваше описание — и либо бронирует, либо уходит. Давайте сделаем так, чтобы
                                он оставался.
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Проверить и обновить описания
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                На выходе
                            </p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет на RU + EN с готовым форматом для OTA.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Basic</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">7–10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Full</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>RU, EN, GE</li>
                                    <li>Описание объекта + номеров + услуг + политик</li>
                                    <li>1 раунд правок включён</li>
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
                            <p className="text-xl font-bold text-white">Ваши тексты на Booking работают на вас или против вас?</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Проверим текущие тексты и покажем, что обновить в первую очередь.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Проверить и обновить описания
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
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">
                        В Тбилиси сотни объектов размещения: от хостелов до дизайн-отелей. Международные гости из CIS,
                        Европы, Израиля и Ближнего Востока читают описания на своём языке. Если текст переведён машиной,
                        звучит шаблонно или не объясняет реальные особенности объекта, гость выбирает конкурента. В Батуми
                        и горных курортах ситуация похожая: турист часто принимает решение только по тому, что видит и
                        читает онлайн.
                    </p>
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

            <ProcessNote text="Работа полностью удалённая: вы присылаете информацию об объекте, мы создаём тексты без выездов и съёмочного дня." />

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
                            <li>• Нужно быстро обновить основные тексты, объект небольшой → Basic.</li>
                            <li>• Хотите заполнить Booking профессионально и полностью → Standard.</li>
                            <li>• Несколько объектов или нужна работа с тремя языками → Full.</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">Не уверены? Напишите — рассчитаем за 5 минут.</p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center rounded-[10px] border border-[#FFD23F]/45 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black"
                        >
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваши тексты на Booking должны продавать — а не просто информировать."
                buttonLabel="Написать нам"
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
                            Напишите нам в WhatsApp или Telegram — ответим в течение 2 часов. Работаем удалённо по всей
                            Грузии: вам не нужно приезжать в офис.
                        </p>
                        <p className="mt-5 text-sm text-white/75">WhatsApp / Telegram: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">Тбилиси, работаем по всей Грузии</p>
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
                        Breus Media — контент-продакшн в Тбилиси. AI-описания для отелей: Booking, Airbnb, Expedia. На
                        русском, английском и грузинском.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки отелей в текстах OTA</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к созданию AI-описаний</h2>
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
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
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

```
---
---

## /ai-content/tourism-ai-packaging
Lines: 1245
```tsx
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

const CANONICAL_URL = 'https://breus.media/ai-content/tourism-ai-packaging';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroSubtitle =
    'Превратите ваши маршруты из «есть в блокноте» в структурированный каталог туров на двух языках';

const heroIntro =
    'У большинства туроператоров и гидов в Грузии та же проблема: маршруты есть, опыт есть, клиенты довольны — но описания туров написаны наспех, нет единой структуры, а перевод на английский «сделан когда-то через Google Translate». AI-упаковка туристических предложений — это системная работа с вашим контентом: мы берём ваши идеи, маршруты и фишки, структурируем их с помощью AI-инструментов и создаём готовые тексты — карточки туров, описания для маркетплейсов, FAQ, продающие заголовки — на русском и английском. Один проект, и у вас есть каталог, готовый к размещению.';

const serviceExplanation =
    'Мы берём ваши туры — в любом виде, хоть в виде голосовых сообщений в WhatsApp — и превращаем их в структурированные карточки с описанием, программой, что входит/не входит, FAQ и продающим заголовком. Используем AI-инструменты для скорости и масштаба: то, что раньше занимало месяц копирайтинга, готово за 3–5 дней. Результат — тексты, которые понимают и русскоязычные, и иностранные клиенты.';

const audienceItems: string[] = [
    'Туроператорам с 5+ маршрутами, описания которых «написаны как попало».',
    'Гидам, переходящим от «всё в голове» к структурированному предложению.',
    'Глэмпингам и эко-проектам, которым нужны продающие описания для сайта.',
    'Агрегаторам и маркетплейсам грузинских туров — для унификации карточек.',
    'Инвестиционным проектам в туристическом секторе — нужна профессиональная упаковка.',
    'Тем, кто планирует запустить новые маршруты и хочет сразу правильную структуру.',
];

const taskCards: CardItem[] = [
    {
        title: 'Превращает «маршруты из головы» в продукт',
        text: 'Делает из устных объяснений чёткие карточки туров, которые можно сразу публиковать и продавать.',
    },
    {
        title: 'Создаёт единый стиль каталога',
        text: 'Все туры звучат консистентно и профессионально, без разнобоя между описаниями.',
    },
    {
        title: 'Готовит тексты под нужные платформы',
        text: 'Сайт, Viator, GetYourGuide, PDF для партнёров — контент адаптируется под конкретный канал.',
    },
    {
        title: 'Ускоряет двуязычную упаковку',
        text: 'Создаёт RU + EN контент без классического длинного цикла копирайтинга.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Маршруты «в голове» — продавать сложно',
        text: 'Пока всё держится на личных объяснениях, масштабироваться невозможно. Ни партнёры, ни сотрудники не могут продавать без вас.',
    },
    {
        title: 'Старые описания не продают',
        text: '«Незабываемый тур по живописным местам Грузии» не отличает вас ни от кого. Нужны конкретика и эмоция.',
    },
    {
        title: 'Нет английского текста — теряем иностранцев',
        text: 'Платёжеспособные туристы из Европы и ОАЭ не понимают предложение не из-за продукта, а из-за слабого перевода.',
    },
    {
        title: 'Каждое новое описание — часы работы',
        text: 'Один качественный текст под тур занимает день. При 10+ маршрутах это уже системная проблема.',
    },
    {
        title: 'Маркетплейсы требуют структуру, которой нет',
        text: 'Viator просит программу по часам, включения и FAQ, а данные разбросаны по чатам и заметкам.',
    },
    {
        title: 'Обновлять тексты при изменениях тяжело',
        text: 'Сезон изменился, добавилась новая точка — а переписывать всё снова некогда.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Карточки конвертируют лучше',
        text: 'Клиент сразу видит программу, выгоду и детали, которые нужны для решения о брони.',
    },
    {
        title: 'EN-описания открывают новый рынок',
        text: 'Доступ к иностранным туристам повышает средний чек и расширяет каналы продаж.',
    },
    {
        title: 'Упаковка помогает аргументировать цену',
        text: 'Хорошо структурированный тур воспринимается как более ценный и профессиональный продукт.',
    },
    {
        title: 'Партнёры продают без вашего участия',
        text: 'Агентства получают готовые материалы и могут работать с вашими турами автономно.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Меньше возвратов и недопониманий',
        text: 'FAQ и полное описание формируют правильные ожидания ещё до покупки.',
    },
    {
        title: 'Меньше нагрузки на менеджеров',
        text: 'Типовые вопросы уже закрыты в тексте, команда тратит меньше времени на повторяющиеся объяснения.',
    },
    {
        title: 'Бизнес меньше зависит от одного человека',
        text: 'Знания фиксируются в карточках, а не остаются только у гида или владельца.',
    },
    {
        title: 'Обновления делаются быстрее',
        text: 'AI-шаблоны позволяют вносить сезонные изменения без переписывания всего каталога.',
    },
];

const deliverables: string[] = [
    'Карточки туров: название, подзаголовок, описание, программа, включения/исключения.',
    'FAQ для каждого тура: 5–8 часто задаваемых вопросов с ответами.',
    'Продающие заголовки и лиды для сайта и маркетплейсов.',
    'Версии на русском и английском языках.',
    'Адаптация под форматы: полная карточка на сайт / краткое описание для Viator / PDF для партнёров.',
    'AI-шаблоны для самостоятельного обновления и добавления туров.',
    'Рекомендации по SEO-оптимизации описаний.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'Google Docs или Notion: структурированный каталог, готовый к размещению.',
    },
    {
        title: 'Сроки',
        text: '3–7 дней в зависимости от количества туров и глубины адаптации.',
    },
    {
        title: 'Передача',
        text: 'Финальный пакет с карточками, FAQ и материалами под разные каналы публикации.',
    },
    {
        title: 'Дополнительно',
        text: 'AI-шаблоны для дальнейшего самостоятельного обновления каталога.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Сценарий 1 — Запуск на маркетплейс',
        text: 'Туроператор с 8 маршрутами выходит на Viator. Структурируем 8 карточек под требования платформы за 5 дней на RU и EN.',
    },
    {
        title: 'Сценарий 2 — Обновление сайта',
        text: 'Гид с личным сайтом переписывает весь каталог: единый стиль, внятная структура и сильные заголовки.',
    },
    {
        title: 'Сценарий 3 — Подготовка к сезону',
        text: 'Глэмпинг запускает летние активности. Быстро создаём пакет описаний для новых предложений в едином стиле.',
    },
    {
        title: 'Сценарий 4 — Работа с партнёрами',
        text: 'Туроператор передаёт туры агентствам. Формируем двуязычные PDF-описания в унифицированном формате за 1–2 дня.',
    },
];

const localContextText =
    'Грузинский туристический рынок быстро растёт, и всё больше операторов выходят на международные маркетплейсы — Viator, GetYourGuide, Airbnb Experiences. Требования к качеству описаний там высокие: нужна структура, ключевые слова, FAQ и точные включения. Большинство локальных операторов теряют место на маркетплейсе именно из-за слабой текстовой упаковки, а не из-за плохого продукта. Мы помогаем Тбилисским и грузинским туроператорам конкурировать на международном уровне через правильный текст.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1 — Каталог туров',
        text: 'Туроператор с 10 авторскими маршрутами по Грузии получил структурированный каталог на RU/EN за 7 дней. Размещение на Viator заняло 2 дня вместо 2 недель.',
    },
    {
        title: 'Кейс 2 — Текстовое обновление сайта',
        text: 'Гид на конструкторе полностью обновил описания туров. Пользователи стали чаще дочитывать страницы до конца.',
    },
    {
        title: 'Кейс 3 — Запуск нового продукта',
        text: 'Глэмпинг запустил осенний пакет на 3 дня с вином и треккингом. RU+EN описание было готово за 1 день вместо недели.',
    },
];

const socialProofItems: string[] = [
    'Понимаем туристический рынок Грузии: как говорят локальные операторы и что важно иностранным туристам.',
    'Работаем с AI-инструментами профессионально: не отдаём сырой текст, а формируем готовый продукт.',
    'Создаём двуязычный контент с учётом разных моделей мышления RU и EN аудитории.',
    'Опыт в медиа и маркетинге туристических проектов: видим задачу шире, чем просто «написать текст».',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-упаковка туристических предложений?',
        answer: 'Это создание структурированных описаний туров с помощью AI-инструментов и экспертизы команды. На выходе вы получаете готовые тексты на двух языках, которые можно сразу размещать.',
    },
    {
        question: 'Нужно ли мне самому разбираться в AI-инструментах?',
        answer: 'Нет. Мы делаем всю работу и передаём финальные документы без технической нагрузки для вашей команды.',
    },
    {
        question: 'Что нужно подготовить, чтобы начать?',
        answer: 'Любые материалы: старые описания, заметки, Google Docs, голосовые сообщения, фото и видео. Мы собираем структуру из любого формата.',
    },
    {
        question: 'AI-текст не будет роботизированным?',
        answer: 'AI нужен для скорости и структуры, но каждый текст проходит живую редактуру. В результате текст читается естественно и продаёт.',
    },
    {
        question: 'Смогу ли я потом сам добавлять новые туры?',
        answer: 'Да. Мы передаём шаблоны и логику обновления, чтобы любой сотрудник мог добавлять карточки без отдельного копирайтера.',
    },
    {
        question: 'Подойдёт ли это для Viator и GetYourGuide?',
        answer: 'Да. Мы адаптируем структуру под требования конкретных маркетплейсов.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-упаковка туристических предложений?',
        answer: 'От 150 ₾ за 1–2 тура (базовый формат). Каталог из 5–10 туров — от 600 ₾. Итог зависит от объёма, числа языков и глубины адаптации.',
    },
    {
        question: 'Что входит в базовую цену?',
        answer: 'Структурирование тура, описание, программа, FAQ (5 вопросов), продающий заголовок. На одном языке.',
    },
    {
        question: 'Сколько стоит двуязычная версия (RU + EN)?',
        answer: 'Обычно добавляет 40–60% к стоимости. Точную оценку даём после анализа объёма.',
    },
    {
        question: 'Можно ли обновить уже готовые описания?',
        answer: 'Да, обновление обычно дешевле создания контента с нуля.',
    },
    {
        question: 'Есть ли скидка при большом объёме?',
        answer: 'Да. При заказе 8+ туров скидка начинается от 15%.',
    },
    {
        question: 'Какая схема оплаты?',
        answer: '50% предоплата и 50% после финальной передачи документов.',
    },
];

const whyUsItems: string[] = [
    'Понимаем туристический продукт изнутри: снимаем туры, делаем видео, знаем контекст рынка.',
    'Используем AI грамотно: получаете скорость без потери качества.',
    'Пишем живой русский и английский, а не дословный Google Translate.',
    'Готовим тексты под конкретные площадки: сайт, Viator, GetYourGuide, PDF.',
    'Работаем в Тбилиси и можем встречаться лично при необходимости.',
];

const processNoteText =
    'Начинаем с intake-сессии: вы рассказываете о турах в свободной форме — голосом, текстом, документами. Мы структурируем информацию, создаём первые версии текстов, согласуем с вами и вносим правки. Финальный документ — в Google Docs или Notion, готовый к немедленному использованию.';

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Intake',
        text: 'Вы делитесь информацией о турах в любом формате: голос, текст, документы, чаты.',
    },
    {
        step: 'Шаг 2',
        title: 'Анализ и структуризация',
        text: 'Разбираем материалы и строим единую архитектуру каталога туров.',
    },
    {
        step: 'Шаг 3',
        title: 'AI-генерация + редактура',
        text: 'Создаём черновики и доводим их до коммерческого уровня.',
    },
    {
        step: 'Шаг 4',
        title: 'Согласование',
        text: 'Вы проверяете тексты, мы вносим правки до 2 итераций.',
    },
    {
        step: 'Шаг 5',
        title: 'Финальная передача',
        text: 'Передаём Google Docs/Notion + AI-шаблоны для дальнейшего обновления.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        audience: '1–2 тура. Подходит, чтобы протестировать формат AI-упаковки.',
        timeline: 'Срок: 2–3 дня.',
        items: [
            'Полная карточка на одном языке.',
            'Название, описание, программа, включения/исключения.',
            'FAQ (5 вопросов) и продающий заголовок.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 600 ₾',
        audience: '5–8 туров на двух языках для сайта и маркетплейсов.',
        timeline: 'Срок: 5–7 дней.',
        items: [
            'RU + EN каталог с единой структурой.',
            'Карточки, FAQ и лиды под публикацию.',
            'Адаптация под сайт и маркетплейсы.',
            'AI-шаблон для добавления новых туров.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 1 200 ₾',
        audience: '10+ туров и полный цикл упаковки под несколько каналов.',
        timeline: 'Срок: 7–12 дней.',
        items: [
            'Всё из Standard.',
            'Адаптации под 2–3 платформы (сайт, Viator, PDF).',
            'SEO-оптимизация описаний.',
            'AI-шаблоны + консультация по размещению.',
        ],
    },
];

const packageComparisonRows = [
    ['Параметр', 'Basic', 'Standard', 'Full'],
    ['Количество туров', '1–2', '5–8', '10+'],
    ['Языки', '1 язык', 'RU + EN', 'RU + EN'],
    ['Карточка тура', '✓', '✓', '✓'],
    ['FAQ', '5 вопросов', '5–8 на тур', '5–8 на тур'],
    ['Маркетплейс-адаптация', '—', 'базовая', '2–3 платформы'],
    ['SEO-рекомендации', '—', 'базовые', 'расширенные'],
    ['AI-шаблоны', '—', '✓', '✓'],
    ['Консультация по размещению', '—', '—', '✓'],
    ['Цена', 'от 150 ₾', 'от 600 ₾', 'от 1 200 ₾'],
];

const packageHelper: string[] = [
    'Basic — если хотите попробовать формат на 1–2 ключевых турах.',
    'Standard — если нужен полноценный двуязычный каталог для сайта и маркетплейсов.',
    'Full — если у вас большой каталог и нужно закрыть задачу полностью: тексты, SEO, шаблоны, консультация.',
];

const relatedServices = [
    {
        title: 'Видеогид по маршруту',
        href: '/tourism-service',
        description: 'Видео-версия вашего тура для сайта и презентаций.',
    },
    {
        title: 'Reels для туристического проекта',
        href: '/reels-service',
        description: 'Короткие вертикальные форматы для соцсетей и прогрева аудитории.',
    },
    {
        title: 'Промо-ролик для экскурсии',
        href: '/promo-video-service',
        description: 'Видео под маркетплейс, рекламу и партнёрские каналы.',
    },
    {
        title: '360° тур',
        href: '/360-tour-tourism',
        description: 'Виртуальный показ локации для глэмпинга, отеля или тура.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Ошибка 1 — Описание «для всех»',
        text: '«Тур для всей семьи на любой бюджет» не конвертирует. Нужны чёткая аудитория и конкретная выгода.',
    },
    {
        title: 'Ошибка 2 — Нет структуры программы',
        text: 'Клиенту важно знать тайминг: во сколько старт, что будет в середине дня, когда обед и финал.',
    },
    {
        title: 'Ошибка 3 — Нет FAQ',
        text: 'Без блока вопросов часть клиентов уходит с неотработанными возражениями.',
    },
    {
        title: 'Ошибка 4 — Плохой перевод на EN',
        text: 'Дословный перевод выглядит неестественно и снижает доверие иностранной аудитории.',
    },
    {
        title: 'Ошибка 5 — Нет конкретики по включениям',
        text: '«Питание включено» без деталей создаёт сомнение и тормозит оплату.',
    },
    {
        title: 'Ошибка 6 — Описание не обновляется',
        text: 'Изменения в маршруте и цене не отражаются в тексте, из-за чего растут недопонимания и возвраты.',
    },
];

const quickImprovements: string[] = [
    'Добавьте программу по времени хотя бы в одно описание тура — это сразу повысит ясность.',
    'Напишите 3–5 FAQ для самого популярного тура, чтобы снять типовые вопросы.',
    'Уточните, что входит и не входит в стоимость — это снижает конфликтные ожидания.',
    'Переведите заголовки и короткие описания на английский через DeepL как быстрый старт.',
    'Создайте единый шаблон карточки и примените ко всем маршрутам.',
];

const readinessChecklist: string[] = [
    'Есть список всех маршрутов с названиями.',
    'Для каждого тура есть хотя бы базовое описание или программа.',
    'Определена целевая аудитория: RU / иностранцы / обе группы.',
    'Определены платформы: сайт / маркетплейс / PDF / всё вместе.',
    'Есть примерные цены или диапазоны.',
    'Известно, что входит и не входит в каждый тур.',
    'Есть фото или видео к каждому туру (или зафиксировано, что пока нет).',
    'Определён дедлайн, к которому нужен готовый каталог.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Чем AI-упаковка отличается от обычного копирайтинга?',
        answers: [
            'Классический копирайтинг обычно дольше, дороже и сильнее зависит от одного автора.',
            'AI-упаковка ускоряет процесс в 3–5 раз и масштабируется на большой каталог без потери единого стиля.',
            'AI отвечает за скорость и структуру, а финальная редактура выполняется человеком с пониманием рынка.',
        ],
    },
    {
        question: 'Какие форматы текстов нужны для разных платформ?',
        answers: [
            'Сайт: длинное SEO-описание, история тура, FAQ и контекст маршрута.',
            'Viator/GetYourGuide: структурированная карточка с блоками «Включено», «Не включено», «Нужно знать».',
            'PDF для партнёров: краткая версия + программа + контакты.',
            'Telegram/WhatsApp: короткий анонс с ключевой выгодой и CTA.',
        ],
    },
    {
        question: 'Нужна ли AI-упаковка, если тексты уже есть на сайте?',
        answers: [
            'Если конверсия низкая, много однотипных вопросов или нет качественного EN-блока, пересборка обычно оправдана.',
            'Обновление текстов без изменения продукта нередко заметно улучшает коммерческий результат.',
        ],
    },
    {
        question: 'Как AI-упаковка сочетается с видеопродакшном?',
        answers: [
            'Тексты отвечают на рациональные вопросы: программа, условия, включения и стоимость.',
            'Видео создаёт эмоциональное желание «поехать». В связке эти два слоя дают более сильную конверсию.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Что такое AI-упаковка туристических предложений?',
        answer: 'Это создание структурированных двуязычных карточек туров, FAQ и описаний для сайта и маркетплейсов с помощью AI и профессиональной редактуры.',
    },
    {
        question: 'Сколько стоит AI-упаковка туров в Грузии?',
        answer: 'От 150 ₾ за 1–2 тура. Каталог из 10+ туров на двух языках — от 1 200 ₾.',
    },
    {
        question: 'На каких языках делается упаковка?',
        answer: 'Базово — русский и английский. Дополнительные языки доступны по запросу.',
    },
    {
        question: 'Подходит ли для Viator и GetYourGuide?',
        answer: 'Да. Карточки адаптируются под требования конкретных маркетплейсов.',
    },
    {
        question: 'Как быстро готов каталог туров?',
        answer: '2–3 дня для 1–2 туров и 5–12 дней для большого каталога.',
    },
    {
        question: 'Нужно ли самому разбираться в AI-инструментах?',
        answer: 'Нет. Вы передаёте материалы, а мы возвращаем готовый результат.',
    },
    {
        question: 'Помогает ли это привлечь иностранных туристов?',
        answer: 'Да. Сильные EN-описания улучшают понятность оффера и повышают конверсию иностранной аудитории.',
    },
    {
        question: 'Что делать после получения готовых текстов?',
        answer: 'Разместить материалы на сайте, маркетплейсах и в партнёрских пакетах; мы даём рекомендации по каналам.',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1 — «Хороший продукт продаёт себя сам»',
        text: 'В онлайне никто не узнает о продукте без сильного описания. Текст — это первая продажа.',
    },
    {
        title: 'Миф 2 — «AI-тексты неестественные»',
        text: 'AI используется как ускоритель, а финальная версия проходит живую профессиональную редактуру.',
    },
    {
        title: 'Миф 3 — «Иностранцы найдут нас и так»',
        text: 'Иностранные туристы принимают решение по тексту на своём языке. Без EN-версии вы теряете рынок.',
    },
    {
        title: 'Миф 4 — «Текст пишется один раз навсегда»',
        text: 'Сезоны и требования платформ меняются, поэтому контент должен регулярно обновляться.',
    },
    {
        title: 'Миф 5 — «Нам нужно только видео»',
        text: 'Видео создаёт интерес, а текст закрывает продажу. Без сильного описания конверсия ниже.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'AI-упаковка',
        description: 'Создание структурированного контента с помощью AI-инструментов и редактуры. Быстрее ручного копирайтинга при высоком качестве.',
    },
    {
        term: 'Карточка тура',
        description: 'Стандартизированное описание тура: название, программа, включения/исключения, FAQ, цена.',
    },
    {
        term: 'Intake-сессия',
        description: 'Первая встреча/звонок, где вы передаёте информацию о турах в свободной форме.',
    },
    {
        term: 'Локализация',
        description: 'Адаптация текста под язык и культурные особенности аудитории, а не буквальный перевод.',
    },
    {
        term: 'Маркетплейс туров',
        description: 'Платформа продажи экскурсий и активностей: Viator, GetYourGuide, Airbnb Experiences, TripAdvisor.',
    },
    {
        term: 'SEO-оптимизация',
        description: 'Включение релевантных ключевых слов, чтобы карточки туров лучше находились в Google.',
    },
];

const notFitItems: string[] = [
    'Операторам с 1 туром, у которого уже есть сильное и конверсионное описание.',
    'Тем, кто хочет полностью исключить согласование и участие в правках.',
    'Проектам без реальных маршрутов или без понимания целевой аудитории.',
    'Тем, кто не планирует публиковать готовые материалы после передачи.',
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
            name: 'AI-упаковка туристических предложений',
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
    serviceType: 'AI-упаковка туристических предложений',
    name: 'AI-упаковка туристических предложений — тексты и сценарии для продаж',
    description:
        'Создаём карточки туров, FAQ и описания для сайта, Viator и GetYourGuide на RU/EN. AI + профессиональная редактура. Тбилиси, Грузия.',
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
    title: 'AI-упаковка туристических туров Грузия | Тексты и описания — Breus Media',
    description:
        'Создаём описания туров, карточки для Viator и GetYourGuide на RU/EN. AI-упаковка для туроператоров Грузии. От 150 ₾. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-упаковка туристических туров Грузия | Тексты и описания — Breus Media',
        description:
            'Создаём описания туров, карточки для Viator и GetYourGuide на RU/EN. AI-упаковка для туроператоров Грузии. От 150 ₾. Тбилиси.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function TourismAiPackagingPage() {
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
                            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')",
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
                                    AI Content · Tourism · Marketplace Ready
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-упаковка туристических предложений — тексты и сценарии для продаж
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                {heroSubtitle}
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить AI-упаковку туров
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть пакеты
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">На выходе</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет 1–2 тура. Доступны RU и EN версии.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Small</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–12 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Catalog</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>RU + EN карточки туров</li>
                                    <li>FAQ, включения/исключения, сценарии публикации</li>
                                    <li>AI-шаблоны для обновлений</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что такое AI-упаковка туристических предложений?</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{serviceExplanation}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому нужна AI-упаковка?</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Задачи AI-упаковки</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Боли туроператоров в текстовом контенте</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как AI-упаковка помогает зарабатывать?</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает избежать потерь?</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Что входит в AI-упаковку?</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Форматы и сроки</h2>
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
                                Ваши маршруты хороши. Осталось упаковать их так, чтобы клиент понял всё без звонка.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Расскажите о вашем каталоге туров и получите предложение по упаковке.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Обсудить AI-упаковку туров
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сценарии использования AI-упаковки</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Туристический контент в Грузии: проблема упаковки</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{localContextText}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Почему нам доверяют</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media?</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {whyUsItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text={processNoteText} />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">5 шагов</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Тарифы на AI-упаковку</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Сравнение пакетов</h2>
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
                        <h3 className="text-xl font-bold text-white">Какой пакет выбрать?</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/74">
                            {packageHelper.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">Не уверены? Напишите — подскажем оптимальный формат за 5 минут.</p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center rounded-[10px] border border-[#FFD23F]/45 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black"
                        >
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваши маршруты уже есть. Мы поможем упаковать их так, чтобы клиенты понимали, выбирали и бронировали без ваших объяснений."
                buttonLabel="Заказать AI-упаковку туров"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-white/72">Тбилиси, Грузия. Работаем онлайн и оффлайн.</p>
                        <p className="mt-5 text-sm text-white/75">WhatsApp / Телефон: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">Сайт: breus.media</p>
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
                        Breus Media — AI-упаковка туров, медиапродакшн, 360° туры в Грузии. Тбилиси. {CONTACT_PHONE_DISPLAY}
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">6 ошибок в описаниях туристических предложений</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">5 бесплатных шагов</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист перед AI-упаковкой</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы для поиска</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы о текстовой упаковке туров</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Словарь</h2>
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

```
---
---
