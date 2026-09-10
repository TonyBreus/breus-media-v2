import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';

type FaqItem = { question: string; answer: string };
type CardItem = { title: string; text: string };
type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};
type NicheCard = { title: string; pain: string; solution: string; deliverables: string };
type ProcessStep = { step: string; title: string; text: string };
type RelatedService = { title: string; href: string; text: string };
type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

const statsCards: StatCard[] = [
    {
        stat: 'до +67%',
        label: 'больше прямых бронирований',
        description:
            'получают отели с 360° VR-туром по сравнению с теми, кто обходится только фото.',
        source: 'Omni Hotels / COVID-period hospitality research',
        sourceUrl: '#',
    },
    {
        stat: 'в 5–10 раз',
        label: 'дольше время на сайте',
        description:
            'проводят посетители на сайтах с интерактивным 360° туром. Прямое влияние на SEO и bounce rate.',
        source: 'Pew Internet Life Study',
        sourceUrl: '#',
    },
    {
        stat: '52%',
        label: 'возвращаются к туру повторно',
        description:
            'пользователей просматривают тур несколько раз перед финальным решением о бронировании. Тур работает как аналитический инструмент.',
        source: 'Hospitality platform analytics',
        sourceUrl: '#',
    },
    {
        stat: '×2',
        label: 'интерес к карточке Google Maps',
        description:
            'вызывает бизнес-карточка отеля с 360° панорамой по сравнению с обычной. Перехват трафика до перехода на OTA.',
        source: 'Google My Business analytics',
        sourceUrl: '#',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«На Booking мы выглядим как все — хорошие фото, но у соседей тоже»',
        text: '360° тур — единственный формат, который не копируется кнопкой «сохранить фото». Гость не листает, а ходит — и это запоминается.',
    },
    {
        title: '«Боюсь, что тур покажет то, что лучше бы не показывать»',
        text: 'Если пространство в порядке — тур работает в вашу пользу. Снимаем только те зоны, которые вы сами согласовали заранее.',
    },
    {
        title: '«Не понимаю, как это работает технически — ссылка, iframe, Google»',
        text: 'Вы получаете ссылку и iframe-код. Вставить на сайт — одна строка. Добавить в Booking — по инструкции. Всё объясняем.',
    },
    {
        title: '«У нас блокировки — часть номеров на ремонте, переговорная под запретом»',
        text: 'Маршрут тура согласовываем заранее. Снимаем только то, что готово. Остальное можно добавить позже — отдельным выездом.',
    },
    {
        title: '«Непонятно, зачем это отдельно — у нас уже есть видео»',
        text: 'Видео и тур решают разные задачи. Видео создаёт атмосферу. Тур отвечает на вопрос «а как там на самом деле».',
    },
    {
        title: '«Думаю об этом, но не могу понять, с чего начать»',
        text: 'Начинаем с брифа: 15 минут, несколько вопросов. Предложим, какие зоны снять первыми, чтобы получить результат за один день.',
    },
];

const deliverablesItems: string[] = [
    'Ссылку на тур — отправляете в мессенджере, ставите в письмо, добавляете в прайс',
    'iframe-код — вставляется на сайт одной строкой',
    'Код для Booking — по инструкции, без техника',
    'Панораму для карточки в Google Maps — гость видит ваш объект прямо на карте',
    'Точки перехода (hotspot) — по желанию: названия зон, описания, ссылки на бронирование',
];

const zoneCards: NicheCard[] = [
    {
        title: 'Стандартный и Superior номер',
        pain: '«На Booking мы смотримся одинаково со всеми»',
        solution:
            'Гость видит реальный размер номера, расположение кровати относительно окна и угол обзора. Без искажений, которые часто дают широкоугольные фото.',
        deliverables: '4–5 точек съёмки на категорию номера',
    },
    {
        title: 'Люкс и номер с видом',
        pain: '«Людям сложно понять, за что доплачивать»',
        solution:
            'Тур оправдывает разницу в цене — гость сам видит, чем люкс отличается от стандарта. Снижает сопротивление к апгрейду на этапе бронирования.',
        deliverables: '4–7 точки с акцентом на вид и планировку',
    },
    {
        title: 'Лобби и ресепшен',
        pain: '«Первое впечатление формируется ещё до приезда»',
        solution:
            'Гость оценивает общую атмосферу объекта за 10 секунд. Показ общей зоны повышает переход к бронированию.',
        deliverables: '3–5 точки',
    },
    {
        title: 'СПА, бассейн, фитнес',
        pain: '«Эти зоны продают отдых, но их сложно передать через фото»',
        solution:
            'Гость понимает масштаб и атмосферу ещё до заезда. Особенно важно для wellness-ориентированного трафика.',
        deliverables: '4–10 точек по зонам',
    },
    {
        title: 'Переговорные и конференц-залы',
        pain: '«MICE-клиенты требуют долгих согласований и осмотров вживую»',
        solution:
            'Организаторы мероприятий используют тур для планировки рассадки и оценки трафика гостей. Экономит время на подготовку мероприятия.',
        deliverables: '3–6 точки на каждый зал + варианты рассадки',
    },
    {
        title: 'Ресторан и бар',
        pain: '«Ресторан — отдельный продукт, но про него редко рассказывают»',
        solution:
            'Гость выбирает столик заранее. Добавляет ценность заезду и увеличивает внутренние продажи F&B.',
        deliverables: '4–6 точки на зал + вид с террасы',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'ЗАПРОС',
        title: 'Обсуждение задачи',
        text: 'Рассказываете про объект: сколько зон, какие приоритеты, что хотите показать. Предлагаем маршрут и стоимость — в тот же день.',
    },
    {
        step: 'ПЛАН',
        title: 'Согласование маршрута',
        text: 'Утверждаем маршрут, время и зоны. Отмечаем, что снимаем, а что выключаем из тура. Ничего лишнего без вашего ведома.',
    },
    {
        step: 'СЪЁМКА',
        title: 'Выезд на объект',
        text: 'Один день — несколько зон. Работа отеля не останавливается. Снимаем аккуратно: без реквизита, без лишних людей в кадре, по согласованному плану.',
    },
    {
        step: 'ПЕРЕДАЧА',
        title: 'Ссылка и iframe',
        text: 'Получаете ссылку на тур, iframe-код и инструкцию по встройке. Всё работает сразу: сайт, Booking, Google Maps.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Старт',
        price: 'от 200 ₾',
        subtitle: 'Для небольшой гостиницы, апарт-отеля, Airbnb с 1–3 категориями номеров',
        items: [
            'До 6 точек съёмки (лобби + 2 типа номеров + ванная)',
            'Ссылка на тур + iframe-код',
            'Панорама для карточки Google Maps',
            'Передача — от 48 часов',
        ],
        note: 'Хороший первый шаг — чтобы увидеть формат и понять, как это работает для вашего объекта.',
    },
    {
        title: 'Стандарт',
        price: 'от 450 ₾',
        subtitle: 'Для бутик-отеля, городского отеля 3–4 звезды',
        items: [
            'До 15 точек съёмки (лобби, ресепшен, категории номеров, ресторан или бар)',
            'Ссылка + iframe-код',
            'Точки перехода (hotspot) с названиями зон',
            'Панорама для Google Maps',
            'Передача — от 72 часов',
        ],
        note: 'Покрывает все ключевые зоны одним туром. Самый частый выбор.',
        popular: true,
    },
    {
        title: 'Полный объект',
        price: 'от 900 ₾',
        subtitle: 'Для отелей 4–5 звёзд, курортных комплексов, объектов с несколькими корпусами',
        items: [
            'От 20 точек — все зоны объекта, включая СПА, фитнес, конференц-залы',
            'Ссылка + iframe + несколько маршрутов по зонам',
            'Точки перехода с описаниями и ссылками на бронирование',
            'Панорама для Google Maps',
            'Передача — от 5 рабочих дней',
        ],
        note: 'Подходит для MICE-маркетинга и международных площадок бронирования.',
    },
];

const addonPricing: string[] = [
    'Обновление тура (новые зоны после реновации): от 150 ₾',
    'Точка перехода с кнопкой бронирования: +80 ₾',
    'Текстовые описания зон на RU / EN / GE: +100 ₾',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Городской бутик-отель (Тбилиси)',
        pain: 'Конкурируем с похожими объектами в том же районе.',
        solution: 'Тур показывает реальное пространство — то, что фото скрывает широкоугольником.',
        deliverables: 'Лобби, категории номеров, вид из окна на город',
    },
    {
        title: 'Горный отель (Казбеги, Гудаури, Бакуриани, Рача)',
        pain: 'Гости не понимают масштаб объекта — покупают «кота в мешке».',
        solution: 'Тур даёт пространственное понимание, особенно по люксам с видом.',
        deliverables: 'Номера с панорамными окнами, зоны отдыха, общие пространства',
    },
    {
        title: 'Апарт-отель и Airbnb (несколько объектов)',
        pain: 'Нужен контент для каждого объекта, но ресурсов мало.',
        solution: 'Один выезд — несколько объектов. Каждый получает свою ссылку.',
        deliverables: 'Гостиная, спальня, кухня, балкон — по согласованному списку',
    },
    {
        title: 'Курорт и wellness-отель',
        pain: 'Клиенты выбирают по СПА и инфраструктуре, но передать это сложно.',
        solution: 'Тур по СПА, бассейну и зонам отдыха работает как виртуальный осмотр.',
        deliverables: 'Бассейн, хамам, массажные кабинеты, фитнес, террасы',
    },
    {
        title: 'Конгресс-отель (MICE)',
        pain: 'Организаторы мероприятий требуют осмотра вживую — это дорого и долго.',
        solution: 'Тур по конференц-залам позволяет оценить рассадку, трафик, акустику.',
        deliverables: 'Банкетные залы, переговорные, фойе, зоны регистрации',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Где хранится тур? Нужно что-то скачивать или устанавливать?',
        answer:
            'Нет. Тур хранится на серверах — вы получаете ссылку и iframe-код. Ничего не нужно устанавливать или поддерживать на своей стороне.',
    },
    {
        question: 'Как добавить тур на Booking.com?',
        answer:
            'Booking принимает ссылки на виртуальные туры в разделе описания объекта. Даём инструкцию — добавление занимает несколько минут.',
    },
    {
        question: 'Работает ли тур на мобильных устройствах?',
        answer: 'Да. Тур открывается в браузере на любом устройстве — без приложений.',
    },
    {
        question: 'Можно ли снимать только часть отеля — например, только номера?',
        answer: 'Да. Маршрут согласовываем заранее. Снимаем только те зоны, которые готовы.',
    },
    {
        question: 'Что если после съёмки откроются новые зоны или сделают ремонт?',
        answer:
            'Туры обновляются. Делаем дополнительный выезд и добавляем новые точки в существующий тур.',
    },
    {
        question: 'Как долго длится съёмка?',
        answer:
            'Зависит от количества зон. 6–8 точек —  около 1–2 часов. Отель до 15 точек —     2–4 часа. Работа отеля не останавливается.',
    },
    {
        question: 'Тур появится в Google Maps сам или нужно что-то делать?',
        answer:
            'После публикации панорамы в карточке Google Maps тур появляется автоматически. Помогаем с этим процессом.',
    },
    {
        question: 'Чем 360° тур отличается от съёмки дроном?',
        answer:
            'Дрон снимает снаружи и сверху — расположение, территорию, ландшафт. 360° тур работает изнутри: номера, лобби, общие зоны. Это разные инструменты для разных точек в принятии решения гостем.',
    },
    {
        question: 'Сколько стоит обновить тур?',
        answer: 'Добавление новых зон к существующему туру — от 150 ₾. Расчёт по задаче — бесплатно.',
    },
    {
        question: 'Можно ли добавить кнопку «Забронировать» прямо в тур?',
        answer:
            'Да — через точку перехода (hotspot). Гость нажимает на метку в туре и попадает на страницу бронирования.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка отеля',
        href: '/drone-hotels-tourism',
        text: 'Дрон показывает территорию, расположение и окружение — то, что тур не охватывает. Один выезд закрывает и внешний контекст, и Booking-фотографии.',
    },
    {
        title: 'Reels для отеля',
        href: '/reels-promo/reels-hotel',
        text: 'Короткие вертикальные ролики для Instagram и TikTok — атмосфера, спецпредложения, сезонный контент.',
    },
    {
        title: 'Промо-видео для отеля',
        href: '/promo-video/promo-hotel',
        text: 'Когда нужна история про атмосферу, сервис и характер объекта — не просто обзор, а видео, которое продаёт направление.',
    },
    {
        title: '360° туры для ресторанов',
        href: '/360-tour-restaurants',
        text: 'Гость выбирает столик до звонка. Тур для ресторана при отеле — отдельный инструмент увеличения F&B-выручки.',
    },
];

const comparisonRows = [
    { label: 'Гость управляет просмотром', photo: '—', video: '—', tour: '✓' },
    { label: 'Можно изучить детали', photo: '—', video: 'частично', tour: '✓' },
    { label: 'Работает на сайте и Booking', photo: '✓', video: 'частично', tour: '✓' },
    { label: 'Встраивается в карточку Google Maps', photo: '✓', video: '—', tour: '✓' },
    { label: 'Ощущение «я уже там был»', photo: '—', video: '—', tour: '✓' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '360° виртуальный тур для отеля в Тбилиси',
    description:
        'Создание 360° интерактивных туров для отелей и гостиниц в Тбилиси и Грузии. Интерактивная демонстрация номеров, лобби и территории для сайта, Booking и карточки в Google Maps.',
    provider: { '@id': 'https://breus.media/#organization' },
    areaServed: ['Tbilisi', 'Kakheti', 'Kazbegi', 'Gudauri', 'Bakuriani', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '200',
        highPrice: '900',
        offerCount: '3',
    },
    serviceType: '360 Degree Virtual Tour Production',
    url: 'https://breus.media/360-tour-hotels',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description:
        'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры и съёмки для отелей и туризма.',
    url: 'https://breus.media',
    telephone: '+995501103183',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '41.6938', longitude: '44.8015' },
    priceRange: '₾₾',
    openingHours: 'Mo-Su 09:00-20:00',
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://breus.media' },
        {
            '@type': 'ListItem',
            position: 2,
            name: '360° туры',
            item: 'https://breus.media/360-tours-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: '360° туры для отелей',
            item: 'https://breus.media/360-tour-hotels',
        },
    ],
};

export const metadata: Metadata = {
    title: '360° виртуальный тур для отеля в Тбилиси | Breus Media',
    description:
        'Создаём 360° интерактивные туры для отелей и гостиниц в Тбилиси и Грузии. Гость изучает номер, лобби и территорию до бронирования — прямо с сайта или Booking. От 200 ₾.',
    alternates: {
        canonical: 'https://breus.media/360-tour-hotels',
        languages: {
            'ru-RU': 'https://breus.media/360-tour-hotels',
            'en-US': 'https://breus.media/360-tour-hotels/en',
            'x-default': 'https://breus.media/360-tour-hotels',
        },
    },
    openGraph: {
        title: '360° тур для отеля | Breus Media',
        description:
            'Интерактивные 360° туры для отелей в Тбилиси и Грузии. Встраивается на сайт, Booking, Google Maps. От 200 ₾.',
        url: 'https://breus.media/360-tour-hotels',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '360° тур для отеля | Breus Media',
        description: '360° туры для Booking, сайта и Google Maps. От 200 ₾.',
    },
};

export default function TourHotelsPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaLabel="Обсудить задачу"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'ЦЕНЫ', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{ RU: '/360-tour-hotels', EN: '/360-tour-hotels/en' }}
                sectionLinks={[
                    { label: 'Зоны', href: '#zones' },
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386100} label="Hero Section">
                <section
                    id="tour-hotels-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-36 md:pb-20 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.55)_75%,#080808)]"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent"
                    />

                    <div className="container relative mx-auto px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                360° тур для отеля — гость изучает номер до бронирования
                            </h1>
                            <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-white/78 md:text-xl">
                                Создание 360° виртуальных туров для отелей и гостиниц в Тбилиси, Грузии —
                                интерактивная демонстрация номеров, лобби и территории для сайта, Booking и
                                карточки в Google Maps
                            </p>

                            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Гость открывает три-четыре вкладки с похожими отелями. Фотографии у всех
                                хорошие. Решение принимается за несколько секунд — в пользу того объекта,
                                который дал возможность самому пройтись по номеру, заглянуть в ванную,
                                оценить вид из окна.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                360° тур — это не видео и не слайдер. Это интерактивная точка зрения: гость
                                управляет обзором сам, без монтажного решения. Именно это формирует доверие,
                                которое конвертирует в бронирование.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Один тур живёт на сайте, на Booking и в карточке Google Maps одновременно.
                                Вы получаете ссылку и iframe-код для встройки — без приложений, без
                                установки, без поддержки.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть пакеты
                                </a>
                            </div>
                        </div>
                    </div>

                    <ScrollArrow />
                </section>
            </DebugWrapper>

            {/* ── STATS ────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386110} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Почему 360° тур меняет поведение гостя
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article
                                    key={item.stat}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <p className="tracking-tight text-5xl font-bold text-[#FFD23F]">
                                        {item.stat}
                                    </p>
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                                        {item.label}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        {item.description}
                                    </p>
                                    <p className="mt-5 text-xs font-semibold text-white/60">
                                        Источник: {item.source}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ФОТО vs ТУР ──────────────────────────────────────────────────────── */}
            <DebugWrapper id={386120} label="Comparison Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Фото красивое. Тур — честное.
                            </h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                Фотография — это один выбранный кадр. Оператор выбирает ракурс, свет, момент.
                                Гость видит то, что ему показали.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                360° тур устроен иначе: гость сам выбирает, куда смотреть. Крутит вид,
                                приближает детали, переходит из лобби в коридор, заглядывает в ванную. Он не
                                зритель — он исследователь. И именно в этот момент формируется доверие, на
                                которое не влияет никакой маркетинг.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Отели с хорошим реальным пространством выигрывают от этого формата. Те, кто
                                скрывает недостатки через постобработку, рискуют получить гостя с завышенными
                                ожиданиями и негативный отзыв.
                            </p>
                        </div>

                        <div className="mt-10 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm text-white/80">
                                <thead>
                                    <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                        <th className="py-4 pr-4">Параметр</th>
                                        <th className="py-4 px-4">Фото</th>
                                        <th className="py-4 px-4">Видео</th>
                                        <th className="py-4 pl-4 text-[#FFD23F]">360° тур</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2a2a2a]">
                                    {comparisonRows.map((row) => (
                                        <tr key={row.label}>
                                            <td className="py-3 pr-4 font-medium text-white">{row.label}</td>
                                            <td className="py-3 px-4">{row.photo}</td>
                                            <td className="py-3 px-4">{row.video}</td>
                                            <td className="py-3 pl-4 font-semibold text-[#FFD23F]">
                                                {row.tour}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROBLEMS ─────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386130} label="Problems Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что говорят отельеры</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── DELIVERABLES ─────────────────────────────────────────────────────── */}
            <DebugWrapper id={386140} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                Тур хранится на серверах — вам не нужно ничего скачивать или хранить. После
                                съёмки вы получаете:
                            </p>
                        </div>
                        <ul className="mt-10 grid gap-4 md:grid-cols-2">
                            {deliverablesItems.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78"
                                >
                                    ✓ {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
                            Один тур работает везде. Обновить или добавить новые точки можно позже —
                            отдельным выездом.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ДВА ВЗГЛЯДА ──────────────────────────────────────────────────────── */}
            <DebugWrapper id={386150} label="Two Views Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Два взгляда на один объект</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                360° тур показывает пространство изнутри — как гость воспринимает его, уже
                                войдя. Номер, лобби, вид из окна, коридор. Это рациональное доверие: «я
                                понимаю, куда еду».
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Ровно так же, но снаружи, работает аэросъёмка. Дрон показывает расположение
                                отеля в ландшафте — горы, виноградники, набережную, городской квартал. Гость
                                понимает, что окружает объект, ещё до бронирования.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Эти два формата не конкурируют — они отвечают на разные вопросы. Один — «как
                                там внутри». Другой — «что вокруг». Вместе они закрывают все точки сомнения
                                на пути к бронированию.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ZONES ────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386160} label="Zones Section">
                <section id="zones" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Какие зоны отеля снимают чаще всего
                            </h2>
                            <p className="mt-4 italic leading-relaxed text-white/70">
                                Приоритеты съёмки для городских бутик-отелей, горных курортов и
                                апарт-комплексов в Тбилиси и Грузии
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {zoneCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span>{' '}
                                        {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white/75">Что получите:</span>{' '}
                                        {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386170} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит съёмка</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article
                                    key={step.step}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        {step.step}
                                    </p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PRICING ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386180} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Стоимость 360° тура для отеля
                            </h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Цена зависит от количества точек съёмки. Один номер, лобби и ресторан — разные
                                точки. Расчёт под ваш объект — бесплатно и в тот же день.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`flex flex-col rounded-[20px] border p-6 ${
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
                                                Выгодно
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note && (
                                        <p className="mt-5 text-sm leading-relaxed text-white/58">
                                            {card.note}
                                        </p>
                                    )}
                                    <PackageCta
                                        label="Обсудить этот пакет →"
                                        packageName={card.title}
                                        packagePrice={card.price}
                                    />
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Дополнительно по задаче</h3>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {addonPricing.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4"
                                    >
                                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── NICHES ───────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386190} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Для каких отелей это работает
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Задача:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span>{' '}
                                        {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white/75">Что получите:</span>{' '}
                                        {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386200} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            {/* ── RELATED ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386210} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Что ещё делаем для отелей
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        {service.text}
                                    </p>
                                    <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386220} label="Contact Section">
                <DroneContactStitch preselectedServices={['360']} />
            </DebugWrapper>

            <DroneStickyCta heroId="tour-hotels-hero" />
            <MobileBottomBar
                primaryLabel="Обсудить задачу"
                heroId="tour-hotels-hero"
                revealAfterHero={true}
                smoothVisibility={true}
            />

            <DebugWrapper id={386230} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </main>
    );
}
