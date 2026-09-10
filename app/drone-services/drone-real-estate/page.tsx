import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-real-estate/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { RealEstateHeroSlideshow } from '@/components/drone-real-estate/RealEstateHeroSlideshow';
import { RealEstateFormatSlideshow } from '@/components/drone-real-estate/RealEstateFormatSlideshow';
import { RealEstateRoiCalculator } from '@/components/real-estate-service/RealEstateRoiCalculator';
import formatExampleOne from '@/services-images/drone-real-estate/final/1.png';
import formatExampleTwo from '@/services-images/drone-facade/final/2.png';
import formatExampleThree from '@/services-images/drone-facade/final/1.png';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

type AudienceCard = {
    title: string;
    text: string;
};

type DeliverableGroup = {
    title: string;
    items: string[];
};

const audienceCards: AudienceCard[] = [
    {
        title: 'Риелторам и агентствам',
        text: 'Объявление с аэровидео отсеивает нецелевых ещё до звонка: человек видит реальное окружение, подходы к дому, вид из окна — и не тратит ваше время на пустые показы.',
    },
    {
        title: 'Застройщикам и девелоперам ЖК',
        text: 'Съёмка масштаба: генплан с воздуха, территория комплекса, окружение, очерёдность строительства. Материал работает в инвест-презентациях, на сайте ЖК и в рекламных кампаниях запуска очередей.',
    },
    {
        title: 'Собственникам, инвесторам, владельцам участков',
        text: 'Документация объекта или земли под продажу: границы, рельеф, подъезды, коммерческое окружение — всё, на что смотрит инвестор до решения.',
    },
];

const statsCards: StatCard[] = [
    {
        stat: '+68%',
        label: 'К скорости продажи объекта',
        description: 'Объекты с профессиональным видеоконтентом продаются на 68% быстрее, чем листинги только со статическими фотографиями.',
        source: 'MLS / National Association of Realtors',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics',
    },
    {
        stat: '+94%',
        label: 'Просмотров карточки объекта',
        description: 'Карточки с аэросъёмкой и видео района привлекают почти вдвое больше просмотров, чем стандартные фото объявления.',
        source: 'MLS Statistics Report',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics/research-reports',
    },
    {
        stat: '83%',
        label: 'Продавцов выбирают агентов с дроном',
        description: '83% продавцов недвижимости предпочитают агентов, использующих съёмку с дрона — аэровизуал стал стандартом рынка.',
        source: 'National Association of Realtors (NAR)',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics/research-reports/real-estate-in-a-digital-age',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«Листинг висит на MyHome.ge — просмотры есть, сделок нет»',
        text: 'Видео с воздуха отсеивает нецелевых ещё до звонка. Покупатель видит реальное окружение, дороги, вид из окна — и приходит на показ уже тёплым, а не любопытствующим.',
    },
    {
        title: '«Покупатель из Москвы, Тель-Авива или Дубая не летит без уверенности»',
        text: 'Аэросъёмка закрывает первичный просмотр удалённо: инвестор видит район, расположение ЖК и подходы так, как если бы приехал сам. Дальше он уже готов к сделке или онлайн-показу.',
    },
    {
        title: '«На площадке все объявления выглядят одинаково»',
        text: 'План сверху показывает то, что нельзя передать стандартными фото: близость к парку, плотность застройки, подход, двор. У 95% объявлений этого нет — вы сразу выделяетесь.',
    },
    {
        title: '«У ЖК несколько очередей — а материала для каждой отдельно нет бюджета снимать»',
        text: 'Один выезд закрывает комплект: аэро с разных ракурсов, FPV по типовому этажу, фото территории, нарезка для соцсетей. Хватает под запуск нескольких очередей и рекламных кампаний.',
    },
];

const deliverableGroups: DeliverableGroup[] = [
    {
        title: 'Аэрослой (съёмка снаружи)',
        items: [
            'Видео в 4K — фасад, территория, подъезды, ближайшее окружение',
            '10+ фотографий с воздуха в высоком разрешении — для объявлений и презентаций',
            'Панорама района с привязкой к локации (по запросу)',
        ],
    },
    {
        title: 'FPV-пролёт (съёмка внутри)',
        items: [
            'Пролёт компактным дроном через типовой этаж, лобби или общие зоны',
            'Зритель видит пространство в движении — как будто идёт по объекту',
            'Видео в 4K, готовое к использованию',
        ],
    },
    {
        title: 'Полный комплект материала',
        items: [
            'Монтаж основного ролика до 3 минут',
            'Нарезка коротких видео под Reels, Stories, TikTok',
            '20+ обработанных фотографий',
            'Горизонтальные и вертикальные форматы: сайт, MyHome.ge, Instagram, карточка в Google Maps',
        ],
    },
];

const formatExampleCards = [
    { image: formatExampleOne, alt: 'Аэросъёмка жилого комплекса и благоустройства с высоты в Тбилиси' },
    { image: formatExampleTwo, alt: 'Аэросъёмка архитектуры и фасадных решений современного здания' },
    { image: formatExampleThree, alt: 'Панорамный ракурс территории ЖК и подъездных дорог с дрона' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение объекта',
        text: 'Рассказываете про объект, задачу и куда пойдёт материал: MyHome.ge, сайт ЖК, соцсети, дистанционная сделка. Предлагаем формат и пакет. Расчёт — в течение дня.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем маршрут, дату и время съёмки. Если объект в центре Тбилиси (Мтацминда, Сололаки, Старый город) — заранее проверяем зону полёта и согласования.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Снимаем с воздуха + пролёт внутри дроном Avata 2 по согласованному маршруту. Около 2–4 часов на объекте. Работу жильцов, офиса продаж или стройплощадки не останавливаем.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Монтируем основной ролик, нарезаем короткие видео под Reels и соцсети, обрабатываем фотографии под каждую площадку.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Папка с готовыми файлами разложена по сценариям использования: объявления, сайт, Reels, Google Maps. Один раунд правок включён.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
        subtitle: 'Аэросъёмка дроном с высоты',
        items: [
            'Все оригинальные 4K видеофайлы (20–30 мин материала со всех ракурсов)',
            '10+ фотографий высокого разрешения',
            'Около 1,5 часов на объекте',
            'Передача файлов — от 24 часов',
        ],
        note: 'Подходит, если вы сами работаете с визуалом и монтажом — получаете материал и используете где нужно.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'Компактный дрон, пролёт камерой по объекту',
        items: [
            'Полный комплект FPV-видеоматериалов в 4K (интерьеры в движении)',
            'Несколько заходов — оптимальный маршрут',
            'Около 1,5 часов на объекте',
            'Передача файлов — от 24 часов',
        ],
        note: 'FPV — это съёмка в движении через пространство: компактный дрон пролетает через помещение, зритель видит интерьер изнутри, в движении. Маршрут согласуем до выезда.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Съёмка с воздуха + пролёт внутри — территория, лобби, квартира — за один визит',
        items: [
            'Полный массив 4K видеоматериалов с обоих дронов (снаружи + внутри)',
            '15+ фотографий высокого разрешения',
            'Около 2,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Полная съёмка за один выезд: и фасад с воздуха, и пролёт внутри объекта.',
        popular: true,
    },
    {
        title: 'Съёмка с готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Съёмка с воздуха + пролёт внутри + монтаж и обработка фото',
        items: [
            'Полный комплект оригиналов 4K',
            'До 3 минут смонтированного видео (основной ролик + вертикальные Reels)',
            '20+ обработанных фото',
            '360° панорама с воздуха включена',
            'Видео для Google Maps',
        ],
    },
];

const addonPricing: string[] = [
    'Вертикальный Reels / Shorts до 60 сек (музыка + субтитры): +150 ₾',
    'Горизонтальный видео-обзор для сайта и объявлений (16:9, до 60 сек): +150 ₾',
    '360° панорама с воздуха: +80 ₾',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный тур по квартире или ЖК — покупатель ходит по объекту сам, на сайте или в объявлении.',
    },
    {
        title: 'Reels для риелтора и застройщика',
        href: '/reels-promo/reels-realtor',
        text: 'Короткие вертикальные ролики для Instagram, TikTok и WhatsApp — для постоянного входящего потока заявок.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Агентство или частный риелтор — продажа квартиры',
        pain: 'Десятки одинаковых объявлений на MyHome.ge — сложно выделиться и обосновать цену.',
        solution: 'Аэросъёмка района, вид из окон, подход к дому + короткая нарезка для соцсетей и мессенджеров.',
        deliverables: 'Видео 30–60 сек + 10+ фото + Reels для Instagram/WhatsApp.',
    },
    {
        title: 'Застройщик — запуск продаж нового ЖК',
        pain: 'Генплан и рендеры не показывают реальный масштаб и окружение — инвестор не чувствует проект.',
        solution: 'Облёт территории с нескольких высот, аэрокадры подъездов, школ, транспорта + FPV-пролёт по типовой планировке.',
        deliverables: 'Имиджевый ролик для сайта и инвест-презентации + пакет фото + вертикальные форматы.',
    },
    {
        title: 'Земельный участок или коммерческая земля',
        pain: 'Без визуализации границ и рельефа удалённый инвестор не понимает, что именно покупает.',
        solution: 'Облёт участка с привязкой к окружению — дороги, соседние объекты, рельеф, коммуникации.',
        deliverables: 'Видео + аэропанорама + фото в высоком разрешении под юридические и рекламные документы.',
    },
    {
        title: 'Апарт-отель и посуточная аренда',
        pain: 'Airbnb и Booking берут объект в выдачу, если в карточке есть сильный визуальный контент.',
        solution: 'Пакет на несколько юнитов за один выезд: аэро снаружи, FPV по интерьерам, вертикальные форматы.',
        deliverables: 'Фото с воздуха + вертикальное видео + монтажная нарезка для площадок бронирования.',
    },
    {
        title: 'Дистанционная сделка с иностранным инвестором',
        pain: 'Покупатель из ЕС или ОАЭ не приедет на первый просмотр, а принимает решение по материалам.',
        solution: 'Плотный съёмочный день: аэровид, пролёт по квартире, вид из окна в разное время, окружение.',
        deliverables: 'Горизонтальное видео 2–5 мин для WhatsApp/Telegram + 20+ фото + 360° по желанию.',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Сколько длится съёмка объекта?',
        answer: 'Базовый пакет — около 1,5 часов на объекте (подготовка, облёт, финальные дубли). Полная съёмка снаружи + внутри — 2–4 часа. Мы не тормозим работу жильцов, офиса продаж или стройплощадки.',
    },
    {
        question: 'Можно ли снимать в центре Тбилиси — Мтацминда, Сололаки, Ваке, Авлабари?',
        answer: 'В большинстве зон — да. Историческая застройка и зоны возле правительственных объектов и аэропорта требуют согласования. Мы проверяем лимиты полётов до выезда, чтобы не было сюрпризов в день съёмки.',
    },
    {
        question: 'Что именно я получаю после съёмки?',
        answer: 'В базовых пакетах — исходные видео 4K и обработанные фото в высоком разрешении. В пакете с готовым результатом — смонтированный ролик до 3 минут, нарезка для соцсетей (Reels, Stories, TikTok), 20+ обработанных фото, видео под карточку в Google Maps. Файлы разложены по папкам под каждый канал.',
    },
    {
        question: 'Подходит ли съёмка для дистанционной продажи иностранному инвестору?',
        answer: 'Да, это один из ключевых сценариев. Аэровидео показывает район и подходы к объекту, FPV-пролёт — интерьер в движении. Инвестор из ЕС, Израиля или ОАЭ принимает решение по материалам без первого приезда — дальше либо онлайн-показ, либо сразу сделка.',
    },
    {
        question: 'Включён ли монтаж в базовый пакет?',
        answer: 'В пакеты «Полёт снаружи», «Пролёт внутри» и «Полная съёмка» монтаж не входит — вы получаете исходники в 4K и обработанные фото. Монтаж доступен как отдельная услуга (+150 ₾ за ролик) или входит в пакет «Съёмка с готовым результатом».',
    },
    {
        question: 'Снимаете ли строящиеся ЖК и очереди на разных этапах?',
        answer: 'Да. Для застройщиков делаем отдельную услугу — регулярный мониторинг стройки с повторяющимися точками съёмки. На разовой съёмке покажем текущий статус и масштаб проекта, для систематических отчётов — отдельный пакет.',
    },
    {
        question: 'Работаете ли за пределами Тбилиси?',
        answer: 'Да — Кахетия, Мцхета, Казбеги, Гудаури, Бакуриани, другие регионы Грузии. Для удалённых локаций расчёт индивидуальный, зависит от логистики.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
    name: 'Аэросъёмка недвижимости и ЖК в Тбилиси',
    description:
        'Аэровидео и фото дроном для риелторов, застройщиков и девелоперов в Тбилиси и Грузии — локация, масштаб ЖК и окружение одним планом для объявлений, презентаций инвесторам и рекламы на MyHome.ge.',
    provider: {
        '@id': 'https://breus.media/#organization',
    },
    areaServed: ['Tbilisi', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        priceRange: '250 ₾ – 900 ₾',
        lowPrice: '250',
        highPrice: '900',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    category: 'Aerial Videography for Real Estate',
    url: 'https://breus.media/drone-services/drone-real-estate',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры, Reels и AI-визуализация для бизнеса.',
    url: 'https://breus.media',
    telephone: '+995501103183',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

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
            name: 'Недвижимость',
            item: 'https://breus.media/real-estate-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Аэросъёмка недвижимости',
            item: 'https://breus.media/drone-services/drone-real-estate',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости и ЖК в Тбилиси | Дрон + FPV | Breus Media',
    description:
        'Аэросъёмка и FPV-пролёты для риелторов, застройщиков и девелоперов в Тбилиси и Грузии от 250 ₾. 4K-видео, фото высокого разрешения и сдача материалов от 24–48 часов.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-real-estate',
        languages: {
            ru: 'https://breus.media/drone-services/drone-real-estate',
            en: 'https://breus.media/drone-services/drone-real-estate/en',
        },
    },
    openGraph: {
        title: 'Аэросъёмка недвижимости и ЖК в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-пролёты для риелторов, застройщиков и девелоперов в Тбилиси и Грузии от 250 ₾. 4K-видео, фото и готовый монтаж за 48 часов.',
        url: 'https://breus.media/drone-services/drone-real-estate',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Аэросъёмка недвижимости и ЖК в Тбилиси | Breus Media',
        description: 'Аэросъёмка дроном и FPV-пролёты для недвижимости в Тбилиси от 250 ₾.',
    },
};

export default function DroneRealEstatePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaHref="#contact"
                ctaLabel="Обсудить съёмку"
                singleTickerMode={true}
                languageLinks={{
                    ru: '/drone-services/drone-real-estate',
                    en: '/drone-services/drone-real-estate/en',
                }}
                sectionLinks={[
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <section
                id="drone-real-estate-hero"
                className="relative isolate min-h-[100vh] min-h-[100dvh] overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-12 pt-28 sm:pt-32 md:pb-16 md:pt-48 pb-[env(safe-area-inset-bottom,20px)]"
            >
                <RealEstateHeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.45),rgba(8,8,8,0.92)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                        <div>
                            <h1 className="max-w-none text-3xl font-bold leading-[0.96] sm:text-4xl md:text-6xl lg:text-7xl">
                                Аэросъёмка недвижимости и ЖК в Тбилиси
                            </h1>

                            <p className="mt-4 max-w-2xl text-[16px] leading-[1.45] text-white/90 sm:text-[18px] md:text-[21px]">
                                Показываем локацию, масштаб ЖК и окружение одним кадром с воздуха и в движении. Контент для MyHome.ge, инвест-презентаций и запуска продаж.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                                <a
                                    href="https://wa.me/995501103183?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!+%D0%A5%D0%BE%D1%87%D1%83+%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C+%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D1%83+%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8+%D0%B2+%D0%A2%D0%B1%D0%B8%D0%BB%D0%B8%D1%81%D0%B8."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] sm:px-7 sm:py-3"
                                >
                                    <MessageCircle className="h-4 w-4 fill-black" />
                                    Написать в WhatsApp
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white sm:px-7 sm:py-3"
                                >
                                    Тарифы от 250 ₾ →
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F] sm:px-7 sm:py-3"
                                >
                                    Обсудить съёмку
                                </a>
                            </div>

                            {/* ── Mobile compact strip: 3 key facts ── */}
                            <div className="mt-5 flex items-center gap-2 md:hidden">
                                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-center">
                                    <p className="text-[13px] font-bold text-white">⏱ 2–4 ч</p>
                                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/50">Съёмка</p>
                                </div>
                                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-center">
                                    <p className="text-[13px] font-bold text-white">⚡ 24 ч</p>
                                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/50">Сдача</p>
                                </div>
                                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-center">
                                    <p className="text-[13px] font-bold text-white">🏷 250 ₾</p>
                                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-white/50">от</p>
                                </div>
                            </div>
                        </div>

                        {/* ── Desktop sidebar widget (hidden on mobile) ── */}
                        <div className="hidden flex-col items-center md:flex">
                            <aside className="w-full rounded-[20px] border border-white/10 bg-[#101010]/90 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                                <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
                                        <p className="text-xl font-bold text-white sm:text-2xl">от 250 ₾</p>
                                        <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">Объект глазами покупателя — до первого визита</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                            <p className="text-base font-bold text-white sm:text-lg">2–4 ч</p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">Съёмка</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                            <p className="text-base font-bold text-white sm:text-lg">от 24 ч</p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">Выдача</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-1.5 text-xs leading-relaxed text-white/72 sm:space-y-2 sm:text-sm">
                                        <li>Аэро снаружи + FPV внутри — всё в 4K</li>
                                        <li>Форматы под MyHome.ge, сайт ЖК, Reels и презентации</li>
                                        <li>Материал работает минимум год — и на следующих очередях</li>
                                    </ul>
                                </div>
                            </aside>
                            <a
                                href="#target-audience"
                                aria-label="Прокрутить к разделу «Для кого эта съёмка»"
                                className="mt-4 inline-flex items-center justify-center p-2 text-[#FFD23F] transition-opacity hover:opacity-75 cursor-pointer"
                            >
                                <ChevronDown className="h-6 w-6 animate-bounce text-[#FFD23F]" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ДЛЯ КОГО ЭТА СЪЁМКА ──────────────────────────────────────────────── */}
            <section id="target-audience" className="scroll-mt-16 border-b border-[#2a2a2a] bg-[#0D0D0D] py-8 md:py-16 md:scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Для кого эта съёмка</h2>
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4.5 sm:p-5">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ПОЧЕМУ ВИДЕО ПРОДАЁТ НЕДВИЖИМОСТЬ ─────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Почему видео продаёт недвижимость</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            Покупатель смотрит объявление секунды и решает: дальше по листингу или на показ. Исследования показывают, насколько визуальный контент влияет на это решение.
                        </p>
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
                        {statsCards.map((item) => (
                            <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4.5 sm:p-5">
                                <p className="text-3xl font-bold tracking-tight text-[#FFD23F] sm:text-4xl md:text-5xl">{item.stat}</p>
                                <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                                <a
                                    href={item.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-white/50 transition-colors hover:text-[#FFD23F] sm:mt-5"
                                >
                                    Источник: {item.source} →
                                </a>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 max-w-4xl text-xs leading-relaxed text-white/45 sm:mt-8">
                        Цифры приведены из открытых отраслевых отчётов. Конкретный эффект для вашего объекта зависит от цены, локации и каналов публикации.
                    </p>
                </div>
            </section>

            {/* ── ЧТО ВЫ РЕШАЕТЕ АЭРОСЪЁМКОЙ ───────────────────────────────────── */}
            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Что вы решаете аэросъёмкой</h2>
                    </div>

                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/72 sm:mt-3">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ ──────────────────────────── */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            Готовый пакет, разложенный по слоям съёмки и под каждую площадку публикации.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-3">
                        {deliverableGroups.map((group) => (
                            <article key={group.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                                <h3 className="text-base font-bold text-white sm:text-lg">{group.title}</h3>
                                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/72 sm:mt-5 sm:space-y-3">
                                    {group.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                            <h3 className="text-base font-bold text-white sm:text-lg">Технические параметры</h3>
                            <ul className="mt-3.5 grid gap-2 text-sm leading-relaxed text-white/72 sm:mt-4 md:grid-cols-2">
                                <li>Съёмка в 4K</li>
                                <li>Аэро + FPV-пролёт внутри объекта</li>
                                <li>Цветокоррекция и стабилизация (в пакете с монтажом)</li>
                                <li>Форматы: MP4, JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                                <li>Горизонтальные и вертикальные форматы</li>
                            </ul>
                            <p className="mt-3.5 text-xs leading-relaxed text-white/45 sm:mt-4">
                                Оборудование: DJI Air 3S, DJI Avata 2 (FPV), Insta360 X5
                            </p>
                            <p className="mt-3.5 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80 sm:mt-4">
                                Сроки: от 24 часов (съёмка без монтажа) до 48 часов и более (пакет с готовым результатом).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── ПРИМЕРЫ ПО ФОРМАТАМ ────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Как это выглядит</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            Примеры аэросъёмки недвижимости и ЖК в Тбилиси — снаружи и внутри.
                        </p>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414] sm:mt-8">
                        <RealEstateFormatSlideshow slides={formatExampleSlides} altTexts={formatExampleCards.map((c) => c.alt)} />
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
                        {formatExampleCards.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                <div className="relative aspect-video">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── МИД-КТА ──────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой формат подходит под ваш объект? Расскажите, что продаёте — предложим пакет и маршрут съёмки.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                ПОСМОТРЕТЬ ТАРИФЫ →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── КАК ПРОХОДИТ РАБОТА ──────────────────────────────────────────────── */}
            <ProcessNote text="Съёмка объекта — 2–4 часа. Работу жильцов, офиса продаж или стройплощадки не останавливаем." />

            <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── КАЛЬКУЛЯТОР ОКУПАЕМОСТИ ROI ───────────────────────────────────────── */}
            <RealEstateRoiCalculator lang="ru" />

            {/* ── ПАКЕТЫ СЪЁМКИ ────────────────────────────────────────────────────── */}
            <section
                id="pricing"
                className="scroll-mt-16 border-b border-[#2a2a2a] bg-[#080808] pt-5 pb-20 md:scroll-mt-20 md:pt-6"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">Пакеты съёмки</h2>
                        <p className="mt-2 text-xs leading-relaxed text-white/75 md:text-sm">
                            Цены фиксированные, в лари (₾). Все фото и видео в 4K — готовы к публикации. К любому пакету можно добавить монтаж Reels, горизонтальный ролик 16:9, панорамы 360° и видео для карт.
                        </p>
                    </div>

                    <div className="mt-5 grid gap-4 xl:grid-cols-4 xl:gap-5">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-4.5 md:p-5 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-1.5 text-xs text-white/64">{card.subtitle}</p>
                                </div>
                                <div className="mt-3.5 flex items-center gap-2 md:mt-4 md:gap-3">
                                    <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{card.price}</p>
                                    {card.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Выгодно
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-4 flex-1 space-y-1.5 text-xs leading-relaxed text-white/72 md:mt-4.5 md:space-y-2 md:text-[13px]">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.note && <p className="mt-3 text-xs leading-relaxed text-white/58 md:mt-3.5">{card.note}</p>}
                                <PackageCta
                                    label="Обсудить этот пакет →"
                                    packageName={card.title}
                                    packagePrice={card.price}
                                    lang="ru"
                                    className="mt-4 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-5 md:py-2.5"
                                />
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-5 md:p-6">
                        <h3 className="text-lg font-bold text-white md:text-xl">Дополнительно по задаче</h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/70 md:text-sm">
                            Из одной съёмки можно собрать дополнительные форматы под сайт, соцсети, Google Maps и объявления.
                        </p>
                        <ul className="mt-4 grid gap-3 md:grid-cols-3">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-3.5 text-xs leading-relaxed text-white/72 md:text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <FaqSection id="faq" items={faqItems} title="Частые вопросы" />

            {/* ── ПРИМЕРЫ ПОД ЗАДАЧУ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры работы под задачу</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Под каждый тип объекта собираем свой набор кадров с понятной задачей.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Задача:</span> {card.pain}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Решение:</span> {card.solution}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Что получите:</span> {card.deliverables}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── МИД-КТА 2 ────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нашли свой сценарий в списке? Расскажите про объект — предложим пакет, маршрут съёмки и удобное время.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                            <a
                                href="https://wa.me/995501103183"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Написать в WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ДРУГИЕ ФОРМАТЫ ПОД НЕДВИЖИМОСТЬ ────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Другие форматы под недвижимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Аэросъёмку можно дополнить другими форматами — для сайта, соцсетей и дистанционных продаж.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold md:text-3xl">Есть объект — обсудим съёмку</h2>
                        <p className="mt-5 text-lg leading-relaxed text-white/78">
                            Скажите, что за объект и куда пойдёт материал. Предложим формат и пакет — расчёт в течение дня.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить съёмку
                        </a>
                    </div>
                </div>
            </section>

            {/* ── КОНТАКТ ──────────────────────────────────────────────────────────── */}
            <DroneContactStitch preselectedServices={['drone']} />

            
            <DroneFooterStitch />
            <DroneStickyCta />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
