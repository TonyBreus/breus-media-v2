import type { L2DirectionConfig, L2DirectionKey, L2MapConfig, L2ProcessStep, L2StatItem } from '@/components/l2-direction/types';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';
import { gazetaDetailRoutes } from '@/constants/gazetaRoutes';
import reelsRealEstateImageTwo from '@/services-images/reels-real-estate/final/2.png';
import reelsRestaurantImageOne from '@/services-images/reels-restaurant/final/1.png';
import reelsClinicImageOne from '@/services-images/reels-clinic/final/1.png';
import reelsClinicImageTwo from '@/services-images/reels-clinic/final/2.png';
import reelsClinicImageThree from '@/services-images/reels-clinic/final/3.png';
import reelsClinicImageFour from '@/services-images/reels-clinic/final/4.png';
import reelsClinicImageFive from '@/services-images/reels-clinic/final/5.png';
import reelsAutoImageOne from '@/services-images/reels-auto/final/1.png';
import autoImageOne from '@/services-images/auto/final/1.png';
import autoImageTwo from '@/services-images/auto/final/2.png';
import autoImageThree from '@/services-images/auto/final/3.png';
import aiRealEstateImageOne from '@/services-images/ai-real-estate/final/1.png';
import aiStagingImageOne from '@/services-images/ai-staging/final/1.png';
import aiProductImageOne from '@/services-images/ai-product/final/1.png';
import aiInteriorImageOne from '@/services-images/ai-interior/final/1.png';
import aiAutoImageOne from '@/services-images/ai-auto/final/1.png';
import aiMenuDeliveryImageOne from '@/services-images/ai-menu-delivery/final/1.png';
import aiBrandImageOne from '@/services-images/ai-brand/final/1.png';
import hotelAiDescriptionsImageOne from '@/services-images/hotel-ai-descriptions/final/1.png';
import hotelsContentImageOne from '@/services-images/hotels-content/final/1.png';
import promoRestaurantImageOne from '@/services-images/promo-restaurant/final/1.png';
import tourismImageThree from '@/services-images/tourism /final/3.png';
import tourismImageFour from '@/services-images/tourism /final/4.png';

const { droneService } = gazetaDetailRoutes;

const commonGoogleTrust: DroneDirectionPageConfig['googleTrust'] = {
    heading: 'Репутация в Google',
    rating: '4.9',
    reviewsText: '50+ отзывов от клиентов',
    profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
    mapTitle: 'Breus Media',
    mapAddress: 'Tbilisi, Georgia',
    mapHint: 'Рейтинг и отзывы подтягиваются из профиля Breus Media в Google.',
};

const makeCommonProcessSteps = (context: string): L2ProcessStep[] => [
    {
        number: '01',
        title: 'БРИФ',
        description: `Фиксируем цели ${context}, каналы размещения и формат выдачи материалов.`,
    },
    {
        number: '02',
        title: 'ПОДГОТОВКА',
        description: 'Планируем сцены, тайминг, маршрут съёмки и согласуем рабочие окна.',
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Снимаем по согласованному сценарию: видео, aerial, short-form и дополнительные форматы.',
    },
    {
        number: '04',
        title: 'ГОТОВЫЙ ПАКЕТ',
        description: 'Передаём материалы в форматах для сайта, рекламы и соцсетей.',
    },
];

const makeCommonMap = (title: string, description: string, badgeText: string): L2MapConfig => ({
    title,
    description,
    zones: [
        {
            color: 'bg-green-500',
            borderColor: 'border-green-500',
            title: 'Тбилиси',
            description: 'Основная зона съёмок и продакшна в пределах города.',
        },
        {
            color: 'bg-yellow-500',
            borderColor: 'border-yellow-500',
            title: 'Выезд по Грузии',
            description: 'Выезд по Грузии по согласованию под задачу проекта.',
        },
        {
            color: 'bg-red-500',
            borderColor: 'border-red-500',
            title: 'Регионы Грузии',
            description: 'Кутаиси и другие регионы по согласованному графику.',
        },
    ],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80',
    imageAlt: 'Georgia map with coverage areas',
    badgeText,
});

const makeCommonSocialProof = (variant: 'hospitality' | 'food' | 'tourism' | 'medical' | 'auto' | 'business'): L2StatItem[] => {
    if (variant === 'hospitality') {
        return [
            { value: '2x', label: 'Выше вовлеченность на карточках отеля' },
            { value: '4K', label: 'Качество для OTA, сайта и соцсетей' },
            { value: '360°', label: 'Формат для удаленного выбора номера' },
            { value: '24h', label: 'Черновой материал после съёмки' },
        ];
    }

    if (variant === 'food') {
        return [
            { value: '3x', label: 'Выше вовлеченность коротких видео' },
            { value: '4K', label: 'Четкая подача блюд и пространства' },
            { value: '15-60s', label: 'Форматы reels/shorts/ad cuts' },
            { value: '24h', label: 'Черновой монтаж после съёмки' },
        ];
    }

    if (variant === 'tourism') {
        return [
            { value: '2.5x', label: 'Выше CTR маршрутов с видео' },
            { value: '4K', label: 'Cinematic формат для турпродукта' },
            { value: 'Aerial', label: 'Масштаб и доступность в одном кадре' },
            { value: '48h', label: 'Черновые материалы для воронки' },
        ];
    }

    if (variant === 'medical') {
        return [
            { value: '2x', label: 'Выше доверие до первого контакта' },
            { value: '4K', label: 'Аккуратный визуал пространства' },
            { value: 'Shorts', label: 'Регулярный digital-контент' },
            { value: '24h', label: 'Черновые материалы после съёмки' },
        ];
    }

    if (variant === 'auto') {
        return [
            { value: '2x', label: 'Выше вовлеченность в авто-объявлениях' },
            { value: '4K', label: 'Обзорные и динамичные форматы' },
            { value: 'Aerial', label: 'Масштаб площадки в одном пролёте' },
            { value: '24h', label: 'Черновой пакет после съёмки' },
        ];
    }

    return [
        { value: '2x', label: 'Быстрее принятие решения клиентом' },
        { value: '4K', label: 'Качество для сайта, ads и соцсетей' },
        { value: '360°', label: 'Дополнительный уровень вовлечения' },
        { value: '24h', label: 'Черновые материалы после съёмки' },
    ];
};

const makePage = ({
    path,
    eyebrow,
    h1,
    intro,
    heroImage,
    panelServiceSlugs,
    trustHeading,
    trustBadges,
    trustLocation,
    relatedLinks,
    seoTitle,
    seoDescription,
    schemaServiceName,
    schemaServiceType,
}: {
    path: string;
    eyebrow: string;
    h1: string;
    intro: string;
    heroImage: string;
    panelServiceSlugs: string[];
    trustHeading: string;
    trustBadges: string[];
    trustLocation: string;
    relatedLinks: DroneDirectionPageConfig['relatedLinks'];
    seoTitle: string;
    seoDescription: string;
    schemaServiceName: string;
    schemaServiceType: string;
}): DroneDirectionPageConfig => ({
    path,
    hero: {
        eyebrow,
        h1,
        intro,
        heroImage,
        primaryCtaLabel: 'Обсудить съёмку',
        primaryCtaHref: '#contact',
        secondaryCtaLabel: 'Смотреть услуги',
        secondaryCtaHref: '#services',
        panelServiceSlugs,
    },
    trust: {
        heading: trustHeading,
        badges: trustBadges,
        location: trustLocation,
    },
    googleTrust: commonGoogleTrust,
    relatedLinks,
    seo: {
        title: seoTitle,
        description: seoDescription,
        schemaServiceName,
        schemaServiceType,
        areaServed: ['Tbilisi', 'Georgia'],
    },
});

export const l2DirectionConfigs: Record<L2DirectionKey, L2DirectionConfig> = {
    hotelsService: {
        page: makePage({
            path: '/hotels-service',
            eyebrow: 'HOSPITALITY CONTENT',
            h1: 'Контент для отелей в Тбилиси и Грузии',
            intro:
                'Видео, аэросъёмка, 360° туры, Reels и AI-описания для отелей, апартаментов, гостевых домов и hospitality-бизнеса.',
            heroImage: '/media/drone-service/hotels-resorts-5.png',
            panelServiceSlugs: ['videotur-otelya', 'aerosemka-otelya', '360-tour-hotel'],
            trustHeading: 'Форматы для hospitality',
            trustBadges: ['Отели', 'Апартаменты', 'Гостевые дома', 'Booking', 'Airbnb', 'Hospitality'],
            trustLocation: 'Тбилиси и Грузия',
            relatedLinks: [
                { href: droneService, title: 'Аэросъёмка', description: 'Дрон для фасада, территории, вида, локации и окружения.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный просмотр объекта до бронирования или визита.' },
                { href: '/reels-service', title: 'Reels', description: 'Короткие вертикальные видео для соцсетей и рекламных креативов.' },
                { href: '/ai-visualization-service', title: 'AI-визуализация и AI-тексты', description: 'AI-материалы, описания и визуальная подготовка объектов.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для ресторана, завтраков, бара и террасы при отеле.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Материалы для туристических локаций, маршрутов и впечатлений.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Визуальная упаковка объектов под продажу, аренду и презентации.' },
            ],
            seoTitle: 'Контент для отелей в Тбилиси и Грузии | Breus Media',
            seoDescription:
                'Видео, аэросъёмка, 360° туры, Reels и AI-описания для отелей, апартаментов и hospitality-бизнеса в Тбилиси и Грузии.',
            schemaServiceName: 'Контент для отелей в Тбилиси и Грузии',
            schemaServiceType: 'Hospitality content production and AI localization',
        }),
        data: {
            heroDisplayTitle: 'Контент для отелей в Тбилиси и Грузии',
            heroMobileCompact: true,
            heroSubtitle:
                'Видео, аэросъёмка, 360° туры, Reels и AI-описания для отелей, апартаментов, гостевых домов и hospitality-бизнеса.',
            heroSupportingLine: '',
            heroLeadParagraphs: [
                'Гость выбирает глазами ещё до сообщения, звонка или бронирования. Ему важно увидеть номер, вид, завтрак, общие зоны, территорию, атмосферу и понять, подходит ли место под его поездку.',
                'Мы помогаем собрать визуальную упаковку отеля под сайт, Booking, Airbnb, соцсети, рекламу и мессенджеры: от коротких Reels до 360° тура и полного content pack.',
                'Формат подбирается под задачу: показать номер, повысить доверие, объяснить локацию, обновить карточки, подготовить сезонную кампанию или собрать материалы для отдела продаж.',
            ],
            heroCards: [
                {
                    slug: 'videotur-otelya',
                    title: 'Видеотур отеля',
                    image: '/media/drone-service/hotels-resorts-5.png',
                    tags: 'номер · лобби · территория',
                    shortText: 'Показывает номер, общие зоны, маршрут гостя, вид и атмосферу объекта.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'aerosemka-otelya',
                    title: 'Аэросъёмка отеля',
                    image: '/media/drone-service/tourism-6.png',
                    tags: 'дрон · вид · локация',
                    shortText: 'Дрон показывает расположение, фасад, территорию, вид, бассейн, двор и окружение.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: '360-tour-hotel',
                    title: '360° тур',
                    image: '/media/gazeta/360-tour-1.png',
                    tags: 'тур · номер · до визита',
                    shortText: 'Гость может пройти по номеру и зонам отеля с телефона до бронирования.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-dlya-otelya',
                    title: 'Reels для отеля',
                    image: tourismImageFour.src,
                    tags: 'Reels · атмосфера · бронирование',
                    shortText: 'Короткие вертикальные видео для Instagram, TikTok, Shorts и рекламных креативов.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-opisaniya',
                    title: 'AI-описания',
                    image: hotelAiDescriptionsImageOne.src,
                    tags: 'RU · EN · KA',
                    shortText: 'Описания номеров, услуг, территории и предложений на RU / EN / KA с редакторской доводкой.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'sezonnyy-kontent',
                    title: 'Сезонный контент',
                    image: hotelsContentImageOne.src,
                    tags: 'сезон · акция · запуск',
                    shortText: 'Материалы под сезон, акцию, запуск, обновление номеров или кампанию.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'Отели',
                'апартаменты',
                'гостевые дома',
                'видеотуры',
                'аэросъёмка',
                '360° туры',
                'Reels',
                'AI-описания',
                'Booking',
                'Airbnb',
                'сайт отеля',
                'завтраки',
                'номера',
                'виды',
                'территория',
                'Тбилиси',
                'Грузия',
            ],
            tickerItems: [
                'Отели',
                'апартаменты',
                'гостевые дома',
                'видеотуры',
                'аэросъёмка',
                '360° туры',
                'Reels',
                'AI-описания',
                'Booking',
                'Airbnb',
                'сайт отеля',
                'завтраки',
                'номера',
                'виды',
                'территория',
                'Тбилиси',
                'Грузия',
            ],
            servicesHeading: 'Форматы контента для отелей',
            servicesSubtitle:
                'Разные задачи требуют разных материалов: для сайта, Booking, соцсетей, рекламы, мессенджеров, сезонных кампаний и доверия гостя до бронирования.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'videotur-otelya',
                    title: 'Видеотур по отелю',
                    category: 'Сайт · Booking · мессенджеры',
                    description:
                        'Полноценный презентационный фильм о номерах, сервисе, спа-зонах и ресторанах. Погружает гостя в атмосферу беззаботного отдыха и увеличивает средний чек.',
                    price: 'ПРЕЗЕНТАЦИЯ · НОМЕРА · СЕРВИС',
                    image: '/media/drone-service/hotels-resorts-5.png',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                    featured: true,
                },
                {
                    id: 3,
                    order: 2,
                    slug: '360-tour-dlya-otelya',
                    title: '360° тур для отеля',
                    category: 'Тур · номер · до визита',
                    description:
                        'Виртуальная прогулка по люксам, ресторанам и территории с интерактивными точками бронирования. Сокращает путь гостя от первого клика до оплаты номера.',
                    price: 'ИНТЕРАКТИВ · ЛЮКСЫ · СЕРВИС',
                    image: '/media/gazeta/360-tour-2.png',
                    primaryHref: '/360-tour-hotels',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить тур',
                },
                {
                    id: 2,
                    order: 3,
                    slug: 'aerosemka-otelya-territorii',
                    title: 'Аэросъёмка отеля',
                    category: 'Дрон · вид · локация',
                    description:
                        'Захватывающие кадры отеля в окружении природы, гор или морского побережья. Демонстрирует масштаб локации, парковку, бассейны и транспортную доступность.',
                    price: 'МАСШТАБ · БАССЕЙНЫ · ЛОКАЦИЯ',
                    image: '/media/drone-service/tourism-6.png',
                    primaryHref: '/drone-hotels-tourism',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить съёмку',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'reels-shorts-dlya-otelya',
                    title: 'Reels для отеля',
                    category: 'Instagram · TikTok · Shorts',
                    description:
                        'Серия эстетичных вертикальных роликов об утренних завтраках, видовых террасах и вечерних огнях. Формирует устойчивый поток бронирований через Instagram.',
                    price: 'ЗАВТРАКИ · ТЕРРАСЫ · РЕГУЛЯРНОСТЬ',
                    image: tourismImageFour.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 5,
                    slug: 'sezonnyy-content-pack',
                    title: 'Сезонный content pack',
                    category: 'Сезон · акция · запуск',
                    description:
                        'Комплексный пакет фото и видео для обновления социальных сетей, сайта и систем бронирования к новому туристическому сезону за одну организованную съёмку.',
                    price: 'ОБНОВЛЕНИЕ · OTA · ВСЕ ФОРМАТЫ',
                    image: tourismImageThree.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 6,
                    slug: 'photo-listing-pack',
                    title: 'Фото и listing pack',
                    category: 'Booking · Airbnb · сайт',
                    description:
                        'Базовый набор для карточек номера, сайта, Booking, Airbnb, соцсетей и отправки гостю в мессенджере.',
                    price: 'фото · обложки · листинг',
                    image: hotelsContentImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'kontent-restorana-pri-otele',
                    title: 'Контент для ресторана при отеле',
                    category: 'Завтрак · бар · room service',
                    description:
                        'Блюда, завтрак, бар, терраса, room service и атмосфера ресторана внутри отельного предложения.',
                    price: 'ресторан · завтрак · сервис',
                    image: promoRestaurantImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            statsHeading: 'Отели в цифрах',
            statsTagline:
                'Цифры и сигналы показывают рыночный контекст, а не гарантию бронирований для конкретного объекта.',
            statsCards: [
                {
                    value: '+225%',
                    label: 'больше запросов на бронирование у отелей с большим количеством фото',
                    description:
                        'Контекст для обновления галереи номеров, общих зон, территории и карточек на площадках.',
                    sourceLabel: 'TripAdvisor research',
                    sourceUrl:
                        'https://ir.tripadvisor.com/news-releases/news-release-details/responding-reviews-online-drives-booking-inquiries-tripadvisor',
                },
                {
                    value: '84%',
                    label: 'потребителей хотят видеть больше видео от брендов',
                    description:
                        'Видео, Reels и короткие обзоры помогают показать атмосферу, детали и сценарий проживания.',
                    sourceLabel: 'Wyzowl Video Marketing Statistics 2026',
                    sourceUrl: 'https://wyzowl.com/video-marketing-statistics/',
                },
                {
                    value: '73%',
                    label: 'путешественников учитывают рекомендации инфлюенсеров при бронировании',
                    description:
                        'Социальный контент и вертикальные видео становятся частью раннего выбора поездки и объекта.',
                    sourceLabel: 'Expedia Group Traveler Value Index 2025',
                    sourceUrl:
                        'https://www.expediagroup.com/media/media-details/2025/Travel-Priorities-Reinvented-Expedia-Groups-2025-Traveler-Value-Index-Signals-a-Shift-in-Consumer-Priorities-3a085e3d6/default.aspx',
                },
                {
                    value: '76%',
                    label: 'покупателей предпочитают информацию на родном языке',
                    description:
                        'RU / EN / KA описания помогают говорить с локальной, релокантской и международной аудиторией.',
                    sourceLabel: "CSA Research / Can't Read, Won't Buy",
                    sourceUrl:
                        'https://www.newswire.com/news/survey-of-8-709-consumers-in-29-countries-finds-that-76-prefer-21174283',
                },
            ],
            midCta: {
                heading: 'Не уверены, что нужно вашему отелю?',
                text:
                    'Расскажите, какой у вас объект: отель, апартаменты, гостевой дом, ресторан при отеле или новый запуск. Подскажем, с чего начать: видео, дрон, 360°, Reels, AI-описания или полный content pack.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Не просто съёмка номеров, а упаковка гостевого опыта',
                paragraphs: [
                    'Отель продаёт не только комнату. Гость выбирает ощущение: вид из окна, завтрак, чистоту, локацию, дорогу, тишину, интерьер, сервис и понятность условий.',
                    'Поэтому контент для отеля должен показывать не только красивые кадры, но и помогать ответить на вопросы до бронирования: где находится объект, как выглядит номер, какие есть зоны, что входит, кому подходит место.',
                    'Мы собираем материалы под реальные каналы: сайт, Booking, Airbnb, Instagram, TikTok, YouTube Shorts, рекламу, мессенджеры и коммерческие предложения.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает контент для отеля',
                subtitle:
                    'Хороший контент помогает гостю быстрее понять объект, снизить сомнения и выбрать номер без лишней переписки.',
                items: [
                    {
                        pain: 'Гость не понимает, какой номер выбрать',
                        solution:
                            'Видео, фото и 360° тур показывают планировку, вид, свет, размер и детали номера до бронирования.',
                    },
                    {
                        pain: 'Фотографии не передают атмосферу',
                        solution:
                            'Reels и видеотур показывают движение, свет, завтрак, людей, детали и ощущение проживания.',
                    },
                    {
                        pain: 'Локация кажется непонятной',
                        solution:
                            'Аэросъёмка показывает район, подъезд, вид, окружение и связь объекта с городом или природой.',
                    },
                    {
                        pain: 'Гость задаёт одни и те же вопросы',
                        solution:
                            'Структурированные описания, FAQ и короткие видео заранее отвечают на частые вопросы о номере, правилах и услугах.',
                    },
                    {
                        pain: 'Карточки на площадках выглядят разрозненно',
                        solution:
                            'Listing pack помогает привести фото, обложки, описания и визуальный стиль к единой системе.',
                    },
                    {
                        pain: 'Нужен контент под сезон или запуск',
                        solution:
                            'Сезонный пакет даёт материалы для акции, нового номера, праздников, рекламы или перезапуска страницы.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что выигрывает отель',
                earnTitle: 'Больше ясности для гостя',
                earnItems: [
                    'Быстрее объясняет ценность номера, вида, территории и сервиса.',
                    'Получает материалы для сайта, Booking, соцсетей, рекламы и мессенджеров.',
                    'Может показывать объект гостям до приезда, без длинных переписок.',
                ],
                loseTitle: 'Меньше лишних сомнений',
                loseItems: [
                    'Меньше нецелевых ожиданий: гость заранее видит реальное пространство и условия.',
                    'Меньше повторяющихся вопросов о номере, виде, территории и услугах.',
                    'Меньше хаотичного контента, снятого в разные дни и в разном стиле.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                intro: 'Состав зависит от выбранного формата, объекта и каналов публикации.',
                items: [
                    'фото номеров, общих зон, фасада и территории',
                    'видеотур отеля',
                    'аэрофото и видео с дрона',
                    '360° тур или ссылка на интерактивный просмотр',
                    'Reels / Shorts / TikTok-ролики',
                    'описания номеров, услуг и территории RU / EN / KA',
                    'обложки и материалы для Booking / Airbnb / сайта',
                    'файлы в облачной папке',
                    'рекомендации, где какой формат использовать',
                ],
            },
            whyUs: {
                heading: 'Почему отели работают с нами',
                subtitle:
                    'Мы думаем не только о красивом кадре, а о том, как гость выбирает объект: по фото, видео, описанию, локации, атмосфере и понятности условий.',
                items: [
                    {
                        title: 'Подбираем формат под объект',
                        text: 'Небольшим апартаментам, бутик-отелю и большому комплексу нужны разные материалы. Мы не продаём всем один набор.',
                    },
                    {
                        title: 'Понимаем каналы hospitality',
                        text: 'Сайт, Booking, Airbnb, Instagram, TikTok, Shorts и мессенджеры требуют разных форматов, обложек и текстов.',
                    },
                    {
                        title: 'Показываем опыт гостя',
                        text: 'Снимаем не только стены и кровать, а маршрут: вход, номер, вид, завтрак, общие зоны, детали и атмосферу.',
                    },
                    {
                        title: 'Соединяем видео, дрон, 360° и тексты',
                        text: 'Можно собрать один пакет, где каждый формат закрывает свою задачу: доверие, локацию, атмосферу, объяснение и продажу.',
                    },
                    {
                        title: 'Учитываем языки и локальный контекст',
                        text: 'Для части гостей важны RU / EN / KA описания, понятные правила, локация и детали, которые влияют на выбор.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text: 'Снимаем городские отели, апартаменты, гостевые дома, загородные объекты, рестораны при отелях и туристические локации.',
                    },
                ],
            },
            pricingHeading: 'Пакеты для отелей',
            pricingTagline:
                'Стоимость зависит от объекта, количества номеров и зон, выбранных форматов, языков, сезона и необходимости выезда. Финальная цена зависит от количества номеров, зон, форматов, языков, локаций и объёма подготовки.',
            pricingPlans: [
                {
                    title: 'Hotel Listing Pack',
                    price: 'от 350 ₾',
                    subtitle: 'Базовая упаковка номера, апартамента или небольшого объекта',
                    features: [
                        'фото номера и ключевых зон',
                        'короткое видео или обложки',
                        'описания для сайта или площадок',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Hotel Video Pack',
                    price: 'от 500 ₾',
                    subtitle: 'Для сайта, соцсетей, мессенджеров и рекламы',
                    features: [
                        'видеотур объекта',
                        'Reels / Shorts при необходимости',
                        'субтитры или короткие подписи',
                        'материалы под разные каналы',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Hotel 360 & Drone Pack',
                    price: 'от 650 ₾',
                    subtitle: 'Для отелей, где важно показать пространство, вид, территорию и локацию',
                    features: [
                        '360° тур при необходимости',
                        'аэросъёмка фасада, территории и окружения',
                        'материалы для сайта и отправки гостю',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Hospitality Content Pack',
                    price: 'от 1200 ₾',
                    subtitle: 'Комплексный пакет для запуска, сезона или обновления отеля',
                    features: [
                        'видео, фото, Reels, дрон или 360° по задаче',
                        'описания RU / EN / KA',
                        'материалы для сайта, Booking, соцсетей и рекламы',
                        'структурированная передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
            ],
            pricingAddOns: {
                heading: 'Что может добавляться к пакету',
                items: [
                    'дополнительные номера, зоны, ресторан, терраса или территория',
                    'аэросъёмка, 360° тур, Reels или сезонные версии материалов',
                    'локализация описаний и субтитров на RU / EN / KA',
                    'отдельные обложки и версии для Booking, Airbnb, сайта и рекламы',
                ],
                note:
                    'Финальная смета зависит от количества зон, форматов, языков, сезона, логистики и подготовки объекта.',
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Уточняем тип объекта, аудиторию, каналы публикации, сезон, задачи и форматы: сайт, Booking, соцсети, реклама или мессенджеры.',
                },
                {
                    number: '02',
                    title: 'Выбор формата',
                    description:
                        'Решаем, что нужно именно сейчас: фото, видео, дрон, 360° тур, Reels, AI-описания или полный content pack.',
                },
                {
                    number: '03',
                    title: 'Подготовка объекта',
                    description:
                        'Согласуем номера, зоны, время, свет, людей в кадре, завтрак, фасад, территорию и детали, которые важно показать.',
                },
                {
                    number: '04',
                    title: 'Съёмка / производство',
                    description:
                        'Снимаем объект и собираем материалы под выбранные форматы. При необходимости добавляем дрон, 360° или AI-тексты.',
                },
                {
                    number: '05',
                    title: 'Упаковка и передача',
                    description:
                        'Готовим файлы, описания, субтитры и форматы под каналы. Передаём материалы в понятной структуре.',
                },
            ],
            conditionsNote: {
                title: 'Что важно подготовить до съёмки',
                text:
                    'Перед съёмкой фиксируем зоны, каналы публикации и рабочий график объекта, чтобы материалы получились цельными и не мешали гостям.',
                items: [
                    'согласовать номера, общие зоны, завтрак, ресторан, фасад и территорию, которые обязательно должны попасть в материалы',
                    'подготовить пространство: убрать лишнее, проверить свет, текстиль, детали сервиса и доступ к ключевым зонам',
                    'заранее определить каналы публикации: сайт, Booking, Airbnb, соцсети, реклама или мессенджеры',
                ],
                details:
                    'Если отель работает с гостями во время съёмки, маршрут и время согласуем так, чтобы не мешать сервису и не показывать людей без согласия.',
            },
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Какие услуги подходят для отеля?',
                    answer:
                        'Для отеля чаще всего смотрим на сочетание форматов: фото и listing pack для карточек, видеотур для маршрута гостя, дрон для территории и локации, 360° тур для удалённого просмотра, Reels для соцсетей и AI-описания для сайта, Booking и Airbnb.',
                },
                {
                    question: 'Что лучше выбрать: видео, фото, дрон или 360° тур?',
                    answer:
                        'Фото закрывают базовую галерею, видео показывает атмосферу и маршрут, дрон объясняет локацию и масштаб, а 360° тур помогает гостю самому изучить номер и зоны. Выбор зависит от объекта, каналов публикации и задачи.',
                },
                {
                    question: 'Подходит ли 360° тур для отеля?',
                    answer:
                        'Да. 360° тур особенно полезен для номеров, лобби, ресторана, конференц-зон и территории, когда гостю важно заранее понять пространство с телефона или ноутбука.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой?',
                    answer:
                        'Нужно согласовать зоны, привести номера и общие пространства в порядок, убрать лишние предметы, подготовить свет, завтрак или детали сервиса, а также определить, какие номера и виды важнее показать.',
                },
                {
                    question: 'Можно ли снять номера, завтрак и общие зоны за один выезд?',
                    answer:
                        'Да, если объект и график позволяют. На брифе заранее составляем список зон, чтобы съёмка шла по понятному маршруту и не мешала гостям.',
                },
                {
                    question: 'Делаете ли вы Reels для отелей?',
                    answer:
                        'Да. Снимаем вертикальные ролики про номера, завтрак, вид, детали, команду, сезонное предложение, ресторан при отеле и атмосферу проживания.',
                },
                {
                    question: 'Делаете ли вы описания номеров на английском и грузинском?',
                    answer:
                        'Да. Готовим описания номеров, услуг, правил, маршрута и преимуществ на RU / EN / KA с редакторской доводкой под аудиторию и канал публикации.',
                },
                {
                    question: 'Можно ли использовать материалы на Booking и Airbnb?',
                    answer:
                        'Да. Материалы можно подготовить для сайта, Booking, Airbnb, соцсетей, рекламы, мессенджеров и коммерческих предложений. Форматы согласуем до производства.',
                },
                {
                    question: 'Подходит ли это для апартаментов и гостевых домов?',
                    answer:
                        'Да. Для апартаментов и гостевых домов обычно достаточно компактного пакета: фото, короткий видеотур, описания и несколько вертикальных роликов. При необходимости добавляем 360° или дрон.',
                },
                {
                    question: 'Можно ли снять ресторан при отеле?',
                    answer:
                        'Да. Можно снять завтрак, блюда, бар, террасу, room service, интерьер и атмосферу ресторана как часть общего отельного предложения или как отдельный формат.',
                },
                {
                    question: 'Делаете ли вы сезонные content packs?',
                    answer:
                        'Да. Собираем материалы под сезон, акцию, запуск нового номера, праздничное предложение, обновление карточек или рекламную кампанию.',
                },
                {
                    question: 'Сколько стоит контент для отеля?',
                    answer:
                        'Финальная стоимость зависит от типа объекта, количества номеров и зон, выбранных форматов, языков, локаций, сезона и объёма подготовки. Поэтому пакеты на странице указаны как “по задаче”.',
                },
                {
                    question: 'Передаёте ли вы файлы для самостоятельной публикации?',
                    answer:
                        'Да. Передаём файлы в понятной структуре: фото, видео, вертикальные версии, тексты, субтитры, обложки и ссылки на интерактивные материалы, если они входят в пакет.',
                },
                {
                    question: 'Работаете ли вы по всей Грузии?',
                    answer:
                        'Да. Основная зона — Тбилиси, также выезжаем по Грузии под задачу объекта, график и объём работ.',
                },
            ],
            contact: {
                title: 'Нужен контент для отеля?',
                description:
                    'Расскажите, какой у вас объект: отель, апартаменты, гостевой дом, ресторан при отеле или туристическая локация. Подскажем, с чего начать.',
                taskPlaceholder:
                    'Например: нужен видеотур номеров, дрон территории, 360° тур или content pack для Booking и соцсетей.',
                serviceOptions: [
                    'Отели',
                    'Видеотур',
                    'Аэросъёмка',
                    '360° тур',
                    'Reels',
                    'AI-описания',
                    'Listing pack',
                    'Сезонный контент',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['hotels'],
            },
            useDroneContact: true,
        },
    },

    restaurantsService: {
        page: makePage({
            path: '/restaurants-service',
            eyebrow: 'GASTRO CONTENT',
            h1: 'Контент для ресторанов и кафе в Тбилиси',
            intro: 'Фото, видео, Reels, аэросъёмка, 360° туры и AI-упаковка меню для ресторанов, кафе, баров, delivery и гастропроектов в Тбилиси и Грузии.',
            heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80',
            panelServiceSlugs: ['semka-blyud-menyu', 'reels-shorts-restorana', '360-tour-restorana'],
            trustHeading: 'Форматы для ресторанов',
            trustBadges: ['Рестораны', 'Кафе', 'Бары', 'Delivery', 'Террасы', 'Гастропроекты'],
            trustLocation: 'Тбилиси и Грузия',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка', description: 'Дрон для террасы, фасада, вида, двора и локации.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный просмотр пространства до визита.' },
                { href: '/reels-service', title: 'Reels', description: 'Короткие вертикальные видео для соцсетей и рекламы.' },
                { href: '/ai-visualization-service', title: 'AI-визуализация', description: 'AI-карточки, меню, delivery и рекламные креативы.' },
                { href: '/hotels-service', title: 'Отели', description: 'Контент для отелей и ресторанов при отелях.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Контент для гастро-маршрутов и travel-проектов.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Контент для объектов, пространств и коммерческих локаций.' },
            ],
            seoTitle: 'Контент для ресторанов в Тбилиси | Breus Media',
            seoDescription:
                'Фото, видео, Reels, аэросъёмка, 360° туры и AI-меню для ресторанов, кафе и гастропроектов в Тбилиси и Грузии.',
            schemaServiceName: 'Контент для ресторанов в Тбилиси',
            schemaServiceType: 'Restaurant content production service',
        }),
        data: {
            heroSubtitle:
                'Фото, видео, Reels, аэросъёмка, 360° туры и AI-упаковка меню для ресторанов, кафе, баров, delivery и гастропроектов в Тбилиси и Грузии.',
            heroSupportingLine: '',
            heroMobileCompact: true,
            heroLeadParagraphs: [
                'Гость выбирает ресторан глазами: по блюдам, атмосфере, залу, террасе, подаче, отзывам и первому впечатлению в Google Maps, Instagram, Wolt или на сайте.',
                'Мы помогаем собрать визуальную упаковку ресторана под реальные каналы: Reels, меню, delivery, Google Maps, сайт, рекламные креативы, мессенджеры и презентации.',
                'Формат подбирается под задачу: показать кухню, обновить меню, запустить новое блюдо, упаковать ресторан при отеле, снять интерьер или собрать контент на месяц.',
            ],
            heroCards: [
                {
                    slug: 'semka-blyud-menyu',
                    title: 'Съёмка блюд и меню',
                    image: promoRestaurantImageOne.src,
                    tags: 'меню · delivery · блюда',
                    shortText: 'Фото и видео блюд, напитков, сетов, сезонного меню и delivery-позиций.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-restorana',
                    title: 'Reels для ресторана',
                    image: reelsRestaurantImageOne.src,
                    tags: 'Reels · Instagram · TikTok',
                    shortText: 'Короткие вертикальные видео: подача, кухня, команда, атмосфера, терраса и вечерняя посадка.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'interer-atmosfera',
                    title: 'Интерьер и атмосфера',
                    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
                    tags: 'зал · бар · терраса',
                    shortText: 'Зал, бар, терраса, свет, детали, посадка и ощущение места до визита.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: '360-tour-restorana',
                    title: '360° тур',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
                    tags: 'тур · зал · банкет',
                    shortText: 'Гость может заранее пройти по залу, террасе или банкетной зоне с телефона.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'aerosemka-lokacii',
                    title: 'Аэросъёмка локации',
                    image: '/media/drone-service/restaurants-3.png',
                    tags: 'дрон · вид · локация',
                    shortText: 'Дрон показывает террасу, крышу, двор, вид, фасад и расположение ресторана.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-kartochki-delivery',
                    title: 'AI-карточки и delivery',
                    image: aiMenuDeliveryImageOne.src,
                    tags: 'AI · меню · Wolt',
                    shortText: 'AI-визуалы, карточки меню, баннеры и упаковка позиций для сайта, Wolt и соцсетей.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'Рестораны',
                'кафе',
                'бары',
                'гастропроекты',
                'съёмка блюд',
                'меню',
                'Reels',
                '360° туры',
                'аэросъёмка',
                'AI-карточки',
                'Wolt',
                'delivery',
                'Google Maps',
                'Instagram',
                'терраса',
                'завтраки',
                'ужины',
                'Тбилиси',
                'Грузия',
            ],
            tickerItems: [
                'Рестораны',
                'кафе',
                'бары',
                'гастропроекты',
                'съёмка блюд',
                'меню',
                'Reels',
                '360° туры',
                'аэросъёмка',
                'AI-карточки',
                'Wolt',
                'delivery',
                'Google Maps',
                'Instagram',
                'терраса',
                'завтраки',
                'ужины',
                'Тбилиси',
                'Грузия',
            ],
            servicesHeading: 'Форматы контента для ресторанов',
            servicesSubtitle:
                'Разные задачи требуют разных материалов: для меню, delivery, Google Maps, Instagram, сайта, рекламы, банкетов и доверия гостя до визита.',
            services: [
                {
                    id: 5,
                    order: 1,
                    slug: 'aerosemka-restorana',
                    title: 'Аэросъёмка ресторана',
                    category: 'дрон · вид · локация',
                    description:
                        'Эффектные пролеты над летними верандами, видовыми террасами на крышах и загородными локациями. Показывает масштаб заведения и живописность окружения.',
                    price: 'ВЕРАНДЫ · ВИД С ВОЗДУХА · 4K',
                    image: '/media/drone-service/restaurants-3.png',
                    primaryHref: '/drone-services/drone-restaurants',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить съёмку',
                },
                {
                    id: 1,
                    order: 2,
                    slug: 'semka-blyud-menyu',
                    title: 'Фуд-видео и блюда',
                    category: 'меню · delivery · блюда',
                    description:
                        'Макросъемка текстур, сочности и подачи фирменных блюд с профессиональной работой со светом. Вызывает непреодолимое желание попробовать меню лично.',
                    price: 'МАКРОСЪЕМКА · ТЕКСТУРЫ · СВЕТ',
                    image: promoRestaurantImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 2,
                    order: 3,
                    slug: 'reels-shorts-restorana',
                    title: 'Reels для заведения',
                    category: 'Reels · Instagram · TikTok',
                    description:
                        'Динамичные вертикальные ролики о барной культуре, работе шеф-повара и вечерней энергетике зала. Приводят гостей из социальных сетей на регулярной основе.',
                    price: 'КУХНЯ · БАР · ПОТОК ГОСТЕЙ',
                    image: reelsRestaurantImageOne.src,
                    imagePosition: 'center 38%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: '360-tour-restorana',
                    title: '360° тур по залам',
                    category: 'тур · зал · банкет',
                    description:
                        'Интерактивная навигация по основному залу, закрытым кабинетам и банкетным зонам. Упрощает согласование и бронирование локации под крупные мероприятия.',
                    price: 'БАНКЕТЫ · ЗОНИРОВАНИЕ · VR',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 5,
                    slug: 'ai-kartochki-menyu-delivery',
                    title: 'AI-карточки и доставка',
                    category: 'AI · меню · Wolt',
                    description:
                        'Генерация привлекательных визуалов и оптимизация описаний блюд для сервисов доставки и онлайн-меню. Повышает средний чек и конверсию в заказы.',
                    price: 'DELIVERY · WOLT · СРЕДНИЙ ЧЕК',
                    image: aiMenuDeliveryImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 6,
                    slug: 'interer-atmosfera',
                    title: 'Интерьер и атмосфера',
                    category: 'зал · бар · терраса',
                    description:
                        'Зал, бар, терраса, свет, детали, посадка, гости и ощущение места до первого визита.',
                    price: 'зал · бар · терраса',
                    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'kontent-google-maps',
                    title: 'Контент для Google Maps',
                    category: 'Google Maps · фасад · карточка',
                    description:
                        'Обложки, фото пространства, блюда, фасад и короткие материалы, чтобы карточка ресторана выглядела понятнее.',
                    price: 'Google Maps · фасад · карточка',
                    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'kontent-paket-na-mesyac',
                    title: 'Контент-пакет на месяц',
                    category: 'месяц · публикации · гипотезы',
                    description:
                        'Серия фото, Reels, коротких видео, текстов и обложек под регулярную публикацию и рекламные гипотезы.',
                    price: 'месяц · публикации · гипотезы',
                    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            statsHeading: 'Рестораны в цифрах',
            statsTagline:
                'Цифры и сигналы показывают рыночный контекст, а не гарантию бронирований, заявок или продаж для конкретного ресторана.',
            statsCards: [
                {
                    value: 'До 44%',
                    label: 'в данных DoorDash для меню с фото',
                    description:
                        'Контекст для съёмки блюд и карточек меню: фото помогает блюду быть понятным до заказа.',
                    sourceLabel: 'DoorDash menu photography',
                    sourceUrl: 'https://merchants.doordash.com/en-us/blog/menu-photography',
                },
                {
                    value: '64%',
                    label: 'гуглят ресторан перед визитом',
                    description:
                        'TouchBistro также отмечает, что гости заранее смотрят меню и сайт. Это контекст для Google Maps, сайта и актуального визуала.',
                    sourceLabel: 'TouchBistro 2024 Diner Trends',
                    sourceUrl:
                        'https://www.touchbistro.com/press-releases/touchbistros-2024-diner-trends-report-shows-us-diners-are-looking-for-savings-convenience-and-connection/',
                },
                {
                    value: '76%',
                    label: 'предпочитают информацию на родном языке',
                    description:
                        'Мультиязычные описания RU / EN / KA помогают локальной, релокантской и туристической аудитории.',
                    sourceLabel: "CSA Research / Can't Read, Won't Buy",
                    sourceUrl:
                        'https://www.newswire.com/news/survey-of-8-709-consumers-in-29-countries-finds-that-76-prefer-21174283',
                },
                {
                    value: '84%',
                    label: 'хотят видеть больше видео от брендов',
                    description:
                        'Видео, Reels и короткие обзоры помогают показать блюда, атмосферу, команду и пространство.',
                    sourceLabel: 'Wyzowl Video Marketing Statistics 2026',
                    sourceUrl: 'https://wyzowl.com/video-marketing-statistics/',
                },
            ],
            midCta: {
                heading: 'Не уверены, что нужно ресторану первым?',
                text:
                    'Расскажите, какой у вас формат: ресторан, кафе, бар, терраса, delivery, ресторан при отеле или новый запуск. Подскажем, с чего начать: блюда, Reels, интерьер, 360°, дрон, AI-меню или content pack.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Не просто съёмка еды, а визуальная упаковка ресторана',
                paragraphs: [
                    'Ресторан выбирают не только по меню. Гость смотрит на блюда, зал, свет, подачу, террасу, бар, атмосферу, отзывы и то, как место выглядит в Instagram, Google Maps, Wolt или на сайте.',
                    'Поэтому контент для ресторана должен не просто показывать “красивое блюдо”, а помогать понять опыт: куда человек придёт, что закажет, как выглядит место, кому оно подходит и почему стоит выбрать именно его.',
                    'Мы собираем материалы под реальные каналы: меню, delivery, Google Maps, Instagram, TikTok, YouTube Shorts, сайт, рекламу, мессенджеры и коммерческие предложения.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает контент для ресторана',
                subtitle:
                    'Хороший контент помогает гостю быстрее понять кухню, атмосферу, формат заведения и повод прийти.',
                items: [
                    {
                        pain: 'Блюда выглядят слабее, чем в реальности',
                        solution:
                            'Фото, видео и Reels показывают текстуру, подачу, пар, соус, напитки и детали, которые невозможно передать сухим текстом меню.',
                    },
                    {
                        pain: 'Гость не понимает атмосферу места',
                        solution:
                            'Интерьер, свет, музыка, терраса, бар и движение в зале помогают почувствовать ресторан до визита.',
                    },
                    {
                        pain: 'Delivery-позиции выглядят разрозненно',
                        solution:
                            'Единый стиль карточек, AI-визуалы и аккуратные описания помогают привести меню и доставку к одной системе.',
                    },
                    {
                        pain: 'Соцсети ведутся хаотично',
                        solution:
                            'Контент-пакет даёт запас Reels, фото, обложек и тем, чтобы публиковаться регулярно, а не снимать всё в последний момент.',
                    },
                    {
                        pain: 'Карточка в Google Maps не продаёт место',
                        solution:
                            'Актуальные фото фасада, зала, блюд, меню и атмосферы помогают гостю быстрее понять, куда он идёт.',
                    },
                    {
                        pain: 'Нужно продвинуть сезонное меню или запуск',
                        solution:
                            'Съёмка блюд, Reels, баннеры и тексты собираются под конкретную кампанию: новое меню, завтраки, терраса, ужины или спецпредложение.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что выигрывает ресторан',
                earnTitle: 'Больше ясности для гостя',
                earnItems: [
                    'Быстрее объясняет кухню, атмосферу и повод прийти.',
                    'Получает материалы для Instagram, Wolt, Google Maps, сайта и рекламы.',
                    'Может регулярно показывать блюда, команду, зал, террасу и сезонные предложения.',
                ],
                loseTitle: 'Меньше хаоса в контенте',
                loseItems: [
                    'Меньше хаотичных фото в разном стиле.',
                    'Меньше повторяющихся вопросов о меню, формате, посадке и атмосфере.',
                    'Меньше зависимости от случайных телефонных съёмок в плохом свете.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                intro: 'Состав пакета зависит от задачи, каналов и объёма меню.',
                items: [
                    'фото блюд, напитков, интерьера, фасада и деталей',
                    'короткие видео и Reels / Shorts / TikTok-ролики',
                    'видеотур по ресторану',
                    'аэрофото и видео с дрона, если нужно показать локацию',
                    '360° тур или ссылка на интерактивный просмотр',
                    'AI-карточки меню и delivery-упаковка',
                    'описания блюд, меню, акций RU / EN / KA',
                    'обложки и материалы для Google Maps / Wolt / сайта',
                    'файлы в облачной папке',
                    'рекомендации, где какой формат использовать',
                ],
            },
            whyUs: {
                heading: 'Почему рестораны работают с нами',
                subtitle:
                    'Мы думаем не только о красивом кадре, а о том, как гость выбирает место: по блюдам, атмосфере, меню, локации, отзывам и первому впечатлению.',
                items: [
                    {
                        title: 'Подбираем формат под задачу',
                        text: 'Новому меню, террасе, завтракам, delivery и ресторану при отеле нужны разные материалы. Мы не продаём всем один набор.',
                    },
                    {
                        title: 'Понимаем каналы ресторанов',
                        text: 'Instagram, Wolt, Google Maps, сайт, TikTok, Shorts и мессенджеры требуют разных форматов, обложек и текстов.',
                    },
                    {
                        title: 'Показываем опыт гостя',
                        text: 'Снимаем не только блюда, но и путь: фасад, вход, зал, посадку, подачу, команду, бар, детали и атмосферу.',
                    },
                    {
                        title: 'Соединяем видео, фото, Reels, 360° и AI',
                        text: 'Можно собрать один пакет, где каждый формат закрывает свою задачу: меню, доверие, локацию, атмосферу и регулярный контент.',
                    },
                    {
                        title: 'Учитываем языки и локальный контекст',
                        text: 'Для части гостей важны RU / EN / KA описания, понятные названия блюд, локация и детали, которые влияют на выбор.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text: 'Снимаем рестораны, кафе, бары, террасы, гастропроекты, рестораны при отелях и туристические локации.',
                    },
                ],
            },
            pricingHeading: 'Пакеты для ресторанов',
            pricingTagline:
                'Стоимость зависит от количества блюд, зон, форматов, языков, локации, участия команды и объёма подготовки. Финальная цена зависит от количества блюд, зон, форматов, языков, локаций, необходимости дрона, 360° тура или AI-упаковки.',
            pricingPlans: [
                {
                    title: 'Menu Pack',
                    price: 'от 350 ₾',
                    subtitle: 'Базовая упаковка блюд, напитков или сезонного меню',
                    features: [
                        'фото блюд и напитков',
                        'короткие видео или обложки',
                        'описания для меню или delivery',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Reels & Social Pack',
                    price: 'от 450 ₾',
                    subtitle: 'Для Instagram, TikTok, Shorts и регулярной публикации',
                    features: [
                        'Reels / Shorts',
                        'съёмка подачи, команды и атмосферы',
                        'субтитры или короткие подписи',
                        'материалы под разные каналы',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    featured: true,
                },
                {
                    title: 'Restaurant Space Pack',
                    price: 'от 550 ₾',
                    subtitle: 'Для зала, террасы, банкетной зоны, фасада и локации',
                    features: [
                        'фото и видео интерьера',
                        '360° тур при необходимости',
                        'аэросъёмка локации при необходимости',
                        'материалы для сайта и мессенджеров',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Monthly Content Pack',
                    price: 'от 950 ₾',
                    subtitle: 'Комплексный пакет для месяца публикаций, запуска или сезонной кампании',
                    features: [
                        'фото, Reels, видео, AI-карточки или тексты под выбранный формат',
                        'материалы для Instagram, Wolt, Google Maps, сайта и рекламы',
                        'структурированная передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            pricingAddOns: {
                heading: 'Что влияет на финальную смету',
                items: [
                    'количество блюд, напитков, зон, посадок и форматов',
                    'Reels, 360° тур, аэросъёмка, AI-карточки или delivery-версии',
                    'съёмка команды, кухни, террасы, вечерней атмосферы или событий',
                    'описания меню, локализация RU / EN / KA и адаптация под Wolt, сайт или Google Maps',
                ],
                note:
                    'Финальная цена зависит от меню, количества зон, нужных форматов, языков, локации и подготовки ресторана к съёмке.',
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Уточняем формат заведения, аудиторию, каналы публикации, меню, сезон, задачи и нужные материалы.',
                },
                {
                    number: '02',
                    title: 'Выбор формата',
                    description:
                        'Решаем, что нужно именно сейчас: блюда, Reels, интерьер, дрон, 360° тур, AI-карточки или полный content pack.',
                },
                {
                    number: '03',
                    title: 'Подготовка съёмки',
                    description:
                        'Согласуем блюда, подачу, зал, свет, террасу, команду, гостей в кадре и детали, которые важно показать.',
                },
                {
                    number: '04',
                    title: 'Съёмка / производство',
                    description:
                        'Снимаем блюда, пространство, процесс, команду и атмосферу. При необходимости добавляем дрон, 360° или AI-визуалы.',
                },
                {
                    number: '05',
                    title: 'Упаковка и передача',
                    description:
                        'Готовим файлы, описания, субтитры и форматы под каналы. Передаём материалы в понятной структуре.',
                },
            ],
            conditionsNote: {
                title: 'Что важно подготовить до съёмки',
                text:
                    'Перед ресторанной съёмкой важно собрать блюда, зоны и каналы публикации в один понятный план, чтобы не терять время на площадке.',
                items: [
                    'согласовать блюда, напитки, зал, террасу, фасад, команду и форматы, которые должны войти в пакет',
                    'подготовить посуду, сервировку, свет, чистые поверхности и понятный порядок подачи блюд',
                    'заранее определить, куда пойдут материалы: меню, Wolt, Google Maps, Instagram, сайт, реклама или мессенджеры',
                ],
                details:
                    'Для съёмки блюд важно подтвердить состав, названия и ограничения меню на стороне ресторана до финальной передачи материалов.',
            },
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Какие услуги подходят ресторану?',
                    answer:
                        'Чаще всего ресторану подходят съёмка блюд, Reels, интерьер, 360° тур, аэросъёмка локации, AI-карточки меню, delivery-упаковка и контент-пакет на месяц. Точный набор зависит от задачи и каналов.',
                },
                {
                    question: 'Что лучше начать снимать: блюда, интерьер или Reels?',
                    answer:
                        'Если меню или delivery выглядят слабо, начинаем с блюд. Если гость не понимает атмосферу, снимаем интерьер и зал. Если нужны регулярные касания в соцсетях, собираем Reels или monthly content pack.',
                },
                {
                    question: 'Делаете ли вы съёмку блюд для меню и delivery?',
                    answer:
                        'Да. Снимаем блюда, напитки, сеты, сезонные позиции и delivery-меню с учётом единого визуального стиля, нужных обрезок и каналов публикации.',
                },
                {
                    question: 'Можно ли снять Reels для ресторана?',
                    answer:
                        'Да. Снимаем вертикальные ролики про подачу, кухню, команду, террасу, вечернюю посадку, новые блюда и сезонные предложения.',
                },
                {
                    question: 'Подходит ли 360° тур для ресторана?',
                    answer:
                        'Да, если важно показать зал, террасу, банкетную зону или ресторан при отеле. Тур открывается по ссылке и помогает гостю заранее понять пространство.',
                },
                {
                    question: 'Нужна ли аэросъёмка ресторану?',
                    answer:
                        'Аэросъёмка нужна не каждому ресторану. Она полезна, если важны терраса, крыша, двор, вид, фасад, расположение или окружение места.',
                },
                {
                    question: 'Делаете ли вы AI-карточки меню?',
                    answer:
                        'Да. Можем подготовить AI-визуалы, карточки блюд, баннеры, delivery-обложки и тексты для позиций. Финальный состав и названия блюд проверяются с клиентом.',
                },
                {
                    question: 'Можно ли подготовить материалы для Wolt и Google Maps?',
                    answer:
                        'Да. Готовим фото блюд, обложки, фасад, зал, меню, короткие материалы и файлы, которые можно адаптировать под Wolt, Google Maps, сайт и соцсети.',
                },
                {
                    question: 'Делаете ли вы описания блюд на русском, английском и грузинском?',
                    answer:
                        'Да, можем подготовить описания RU / EN / KA для меню, сайта, delivery и рекламных материалов. Состав, аллергены и фактуру блюд важно подтвердить со стороны ресторана.',
                },
                {
                    question: 'Можно ли снять ресторан при отеле?',
                    answer:
                        'Да. Для ресторанов при отелях обычно соединяем блюда, интерьер, завтрак, бар, террасу, room service и материалы, которые дополняют страницу отеля.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой?',
                    answer:
                        'Нужны список блюд и зон, приоритетные каналы, примерный сценарий подачи, чистая посуда, доступ к залу или террасе, согласование команды и понимание, какие материалы нужны на выходе.',
                },
                {
                    question: 'Сколько стоит контент для ресторана?',
                    answer:
                        'Цена считается по задаче. Она зависит от количества блюд, зон, форматов, языков, локаций, необходимости дрона, 360° тура, AI-упаковки и объёма подготовки.',
                },
                {
                    question: 'Передаёте ли вы файлы для самостоятельной публикации?',
                    answer:
                        'Да. Передаём готовые материалы в облачной папке и можем подсказать, где какой формат использовать: Instagram, Wolt, Google Maps, сайт, реклама или мессенджеры.',
                },
                {
                    question: 'Работаете ли вы по всей Грузии?',
                    answer:
                        'Да, работаем в Тбилиси и по Грузии. Логистика и формат выезда обсуждаются отдельно под задачу ресторана.',
                },
            ],
            contact: {
                title: 'Нужен контент для ресторана?',
                description:
                    'Расскажите, какой у вас формат: ресторан, кафе, бар, терраса, delivery, ресторан при отеле или новый запуск. Подскажем, с чего начать.',
                taskPlaceholder:
                    'Например: нужно обновить меню, снять Reels, показать террасу и подготовить материалы для Wolt и Google Maps.',
                serviceOptions: [
                    'Рестораны',
                    'Съёмка блюд',
                    'Reels',
                    'Интерьер',
                    '360° тур',
                    'Аэросъёмка',
                    'AI-карточки',
                    'Delivery pack',
                    'Monthly content pack',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['restaurants'],
            },
            useDroneContact: true,
        },
    },

    tourismService: {
        page: makePage({
            path: '/tourism-service',
            eyebrow: 'TRAVEL CONTENT',
            h1: 'Контент для туризма и маршрутов в Грузии',
            intro:
                'Видео, аэросъёмка, Reels, 360° туры и AI-упаковка предложений для туров, локаций, глэмпингов, активностей и travel-проектов в Грузии.',
            heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=80',
            panelServiceSlugs: ['video-tura-marshruta', 'aerosemka-lokacii', 'kontent-glemping-baza'],
            trustHeading: 'Форматы для туризма',
            trustBadges: ['Туры', 'Маршруты', 'Глэмпинги', 'Локации', 'Reels', 'AI-упаковка'],
            trustLocation: 'Грузия',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка', description: 'Дрон для маршрутов, локаций, гор, баз и туристических объектов.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный просмотр локаций, глэмпингов, залов и объектов до визита.' },
                { href: '/reels-service', title: 'Reels', description: 'Короткие вертикальные видео для Instagram, TikTok и Shorts.' },
                { href: '/ai-visualization-service', title: 'AI-визуализация', description: 'AI-упаковка, описания, карточки и материалы для предложений.' },
                { href: '/hotels-service', title: 'Отели', description: 'Контент для размещения, номеров, территории и гостевого опыта.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для гастро-точек, дегустаций и маршрутов с едой.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Визуальная упаковка объектов, пространств и локаций.' },
            ],
            seoTitle: 'Контент для туризма в Грузии | Breus Media',
            seoDescription:
                'Видео, аэросъёмка, Reels, 360° туры и AI-упаковка для туров, маршрутов, локаций, глэмпингов и туристических проектов в Грузии.',
            schemaServiceName: 'Контент для туризма в Грузии',
            schemaServiceType: 'Tourism content production and visual packaging',
        }),
        data: {
            heroDisplayTitle: 'Контент для\nтуризма и\nмаршрутов\nв Грузии',
            heroDesktopDisplayTitle: 'Контент для туризма\nи маршрутов в Грузии',
            heroMobileCompact: true,
            heroLongHubLayout: true,
            heroSubtitle:
                'Видео, аэросъёмка, Reels, 360° туры и AI-упаковка предложений для туров, локаций, глэмпингов, активностей и travel-проектов в Грузии.',
            heroSupportingLine: '',
            heroLeadParagraphs: [
                'Тур продаётся до поездки. Человек хочет заранее почувствовать маршрут: виды, дорогу, настроение, уровень комфорта, гида, транспорт, еду, точки остановки и финальное впечатление.',
                'Мы помогаем собрать визуальную упаковку туристического продукта под сайт, Viator, GetYourGuide, Instagram, TikTok, YouTube Shorts, рекламу и мессенджеры.',
                'Формат подбирается под задачу: показать маршрут, объяснить программу, упаковать глэмпинг, снять локацию с воздуха, сделать Reels или подготовить многоязычные описания.',
            ],
            heroCards: [
                {
                    slug: 'video-tura-marshruta',
                    title: 'Видео тура или маршрута',
                    image: tourismImageThree.src,
                    tags: 'маршрут · гид · впечатление',
                    shortText:
                        'Короткий фильм о маршруте: дорога, виды, гид, остановки, эмоции и финальное впечатление.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'aerosemka-lokacii',
                    title: 'Аэросъёмка локации',
                    image: '/media/drone-service/tourism-6.png',
                    tags: 'дрон · виды · локация',
                    shortText:
                        'Дрон показывает масштаб, дорогу, горы, долины, видовые точки, базу или туристический объект.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-dlya-turproekta',
                    title: 'Reels для турпроекта',
                    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
                    tags: 'Reels · Instagram · TikTok',
                    shortText:
                        'Вертикальные ролики для Instagram, TikTok и Shorts: маршрут, эмоции, точки, гид и атмосфера.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'kontent-dlya-glempinga',
                    title: 'Контент для глэмпинга',
                    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
                    tags: 'глэмпинг · база · отдых',
                    shortText:
                        'Домики, виды, территория, дорога, вечерняя атмосфера, детали и ощущение проживания.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-upakovka-predlozheniy',
                    title: 'AI-упаковка предложений',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
                    tags: 'AI · тексты · RU/EN/KA',
                    shortText: 'Структура тура, карточки, тексты, FAQ и описания на RU / EN / KA.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: '360-tury-lokaciy',
                    title: '360° туры локаций',
                    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
                    tags: '360° · локация · до визита',
                    shortText:
                        'Интерактивный просмотр базы, глэмпинга, объекта, зала, маршрута или точки интереса.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'Туризм',
                'маршруты',
                'экскурсии',
                'локации',
                'глэмпинги',
                'туры',
                'аэросъёмка',
                'Reels',
                '360° туры',
                'AI-упаковка',
                'Viator',
                'GetYourGuide',
                'Instagram',
                'сайт',
                'гиды',
                'горы',
                'винные туры',
                'активный отдых',
                'Грузия',
            ],
            tickerItems: [
                'Туризм',
                'маршруты',
                'экскурсии',
                'локации',
                'глэмпинги',
                'туры',
                'аэросъёмка',
                'Reels',
                '360° туры',
                'AI-упаковка',
                'Viator',
                'GetYourGuide',
                'Instagram',
                'сайт',
                'гиды',
                'горы',
                'винные туры',
                'активный отдых',
                'Грузия',
            ],
            servicesHeading: 'Форматы контента для туризма',
            servicesSubtitle:
                'Разные туристические продукты требуют разных материалов: для сайта, Viator, GetYourGuide, Instagram, рекламы, мессенджеров, партнёров и доверия гостя до бронирования.',
            services: [
                {
                    id: 2,
                    order: 1,
                    slug: 'aerosemka-lokacii',
                    title: 'Аэросъёмка локаций',
                    category: 'дрон · виды · локация',
                    description:
                        'Завораживающие панорамы горных перевалов, винодельческих регионов и каньонов. Создает эффект полного погружения в первозданную природу Грузии.',
                    price: 'ГОРЫ · КАНЬОНЫ · 4K AERIAL',
                    image: '/media/drone-service/tourism-6.png',
                    primaryHref: '/drone-hotels-tourism',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить съёмку',
                },
                {
                    id: 1,
                    order: 2,
                    slug: 'video-tura-marshruta',
                    title: 'Видеогид по маршруту',
                    category: 'маршрут · гид · впечатление',
                    description:
                        'Пошаговый кинематографичный ролик о ключевых точках туристического маршрута. Убеждает путешественников выбрать авторскую экскурсию и снимает страх дороги.',
                    price: 'МАРШРУТЫ · ГИДЫ · ЭКСПЕДИЦИИ',
                    image: tourismImageThree.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-shorts-turizma',
                    title: 'Reels для туроператоров',
                    category: 'Reels · Instagram · TikTok',
                    description:
                        'Эмоциональные вертикальные клипы о традиционном застолье, дегустациях и аутентичных традициях. Вирусный контент для привлечения зарубежных туристов.',
                    price: 'ЭМОЦИИ · ТРАДИЦИИ · ОХВАТ',
                    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 4,
                    slug: 'tur-360-turizma',
                    title: '360° панорамы локаций',
                    category: '360° · локация · до визита',
                    description:
                        'Сферические интерактивные панорамы видовых площадок, древних крепостей и национальных парков. Дает возможность оценить масштаб достопримечательности до поездки.',
                    price: 'СМАРТФОН · VR · ПАНОРАМА 360°',
                    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 5,
                    slug: 'kontent-glemping-baza',
                    title: 'Контент для глэмпингов',
                    category: 'глэмпинг · база · отдых',
                    description:
                        'Эстетичная фото- и видеосъемка сафари-тентов, купелей под открытым небом и рассветов в горах. Обеспечивает полную бронь на весь сезон вперед.',
                    price: 'ГЛЭМПИНГ · КУПЕЛИ · РАССВЕТЫ',
                    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 6,
                    slug: 'promo-dlya-ekskursii',
                    title: 'Промо для экскурсии',
                    category: 'программа · точки · впечатления',
                    description:
                        'Короткая упаковка программы: кому подходит тур, что входит, какие точки, сколько впечатлений и как выглядит маршрут.',
                    price: 'программа · точки · впечатления',
                    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'content-pack-sezona',
                    title: 'Content pack для сезона',
                    category: 'сезон · запуск · кампания',
                    description:
                        'Пакет фото, Reels, видео, текстов и обложек под сезон, запуск маршрута или рекламную кампанию.',
                    price: 'сезон · запуск · кампания',
                    image: tourismImageFour.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            statsHeading: 'Туризм в цифрах',
            statsTagline:
                'Цифры и сигналы показывают рыночный контекст, а не гарантию бронирований, заявок или продаж для конкретного маршрута.',
            statsCards: [
                {
                    value: 'До брони',
                    label: 'гость изучает маршрут заранее',
                    description:
                        'Видео, Reels, фото, программа и описания помогают понять ожидания до оплаты или сообщения.',
                    sourceLabel: 'market context',
                },
                {
                    value: '1 маршрут',
                    label: 'можно разложить на сайт, Reels и рекламу',
                    description:
                        'Из одного тура можно собрать длинное видео, короткие ролики, фото, обложки и тексты.',
                    sourceLabel: 'content reuse',
                },
                {
                    value: 'RU / EN / KA',
                    label: 'описания для разных гостей',
                    description:
                        'Мультиязычные тексты помогают локальной, релокантской и международной аудитории.',
                    sourceLabel: 'localization context',
                },
                {
                    value: '4 канала',
                    label: 'сайт, Viator, GetYourGuide, Instagram',
                    description:
                        'Один content pack можно адаптировать под разные точки контакта туриста.',
                    sourceLabel: 'content reuse',
                },
            ],
            midCta: {
                heading: 'Не уверены, что нужно вашему туру первым?',
                text:
                    'Расскажите, что вы продаёте: маршрут, экскурсию, глэмпинг, винный тур, активность, базу отдыха или туристическую локацию. Подскажем, с чего начать: видео, дрон, Reels, 360°, AI-описания или content pack.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Не просто съёмка красивых видов, а упаковка маршрута',
                paragraphs: [
                    'Турист покупает не точку на карте, а ожидание поездки: дорогу, виды, комфорт, безопасность, гида, еду, темп маршрута и эмоции.',
                    'Поэтому контент для туризма должен не просто показывать “красиво в Грузии”, а объяснять программу: куда человек едет, что увидит, кому подходит маршрут, сколько в нём активности и какой опыт он получит.',
                    'Мы собираем материалы под реальные каналы: сайт, Viator, GetYourGuide, Instagram, TikTok, YouTube Shorts, рекламу, мессенджеры и партнёрские предложения.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает контент для туризма',
                subtitle:
                    'Хороший контент помогает туристу быстрее понять маршрут, уровень комфорта, атмосферу и причину выбрать именно это предложение.',
                items: [
                    {
                        pain: 'Маршрут сложно представить по тексту',
                        solution:
                            'Видео и Reels показывают дорогу, остановки, виды, гида, еду, людей и финальное впечатление от поездки.',
                    },
                    {
                        pain: 'Красивые фото не объясняют программу',
                        solution:
                            'Content pack раскладывает тур на понятные блоки: что входит, кому подходит, какие точки, какой темп и что человек получит.',
                    },
                    {
                        pain: 'Локация выглядит как “ещё одно красивое место”',
                        solution:
                            'Дрон, видео и описание показывают масштаб, путь, окружение, детали и сценарий посещения.',
                    },
                    {
                        pain: 'Турист задаёт одни и те же вопросы',
                        solution:
                            'FAQ, карточки маршрута, описания и короткие видео заранее отвечают на вопросы о дороге, времени, уровне сложности и подготовке.',
                    },
                    {
                        pain: 'Соцсети ведутся хаотично',
                        solution:
                            'Пакет Reels, фото, обложек и текстов даёт запас материалов для регулярной публикации и рекламных гипотез.',
                    },
                    {
                        pain: 'Нужен контент под сезон или запуск',
                        solution:
                            'Съёмка маршрута, Reels, дрон, тексты и обложки собираются под конкретный сезон, новый тур или рекламную кампанию.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что выигрывает туристический проект',
                earnTitle: 'Больше ясности для гостя',
                earnItems: [
                    'Быстрее объясняет маршрут, формат поездки и впечатление.',
                    'Получает материалы для сайта, Viator, GetYourGuide, Instagram и рекламы.',
                    'Может показывать тур до бронирования, а не только описывать его текстом.',
                ],
                loseTitle: 'Меньше лишнего шума',
                loseItems: [
                    'Меньше одинаковых вопросов о маршруте, сложности, дороге и подготовке.',
                    'Меньше хаотичных фото без структуры и сценария.',
                    'Меньше риска, что турист ожидал одно, а получил другое.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                items: [
                    'видео тура или маршрута',
                    'аэрофото и видео с дрона',
                    'Reels / Shorts / TikTok-ролики',
                    'фото маршрута, локаций, деталей и команды',
                    '360° тур или ссылка на интерактивный просмотр',
                    'описания маршрута, карточки тура и FAQ RU / EN / KA',
                    'обложки и материалы для Viator / GetYourGuide / сайта',
                    'файлы в облачной папке',
                    'рекомендации, где какой формат использовать',
                ],
            },
            whyUs: {
                heading: 'Почему туристические проекты работают с нами',
                subtitle:
                    'Мы думаем не только о красивом виде, а о том, как человек выбирает поездку: по маршруту, ожиданиям, доверию, визуалу, описанию и понятности условий.',
                items: [
                    {
                        title: 'Показываем маршрут как опыт',
                        text:
                            'Снимаем не только красивые точки, а путь: дорогу, гида, виды, остановки, еду, людей, темп и финальное впечатление.',
                    },
                    {
                        title: 'Подбираем формат под продукт',
                        text:
                            'Экскурсии, глэмпингу, винному туру, базе отдыха и активному маршруту нужны разные материалы.',
                    },
                    {
                        title: 'Понимаем каналы туризма',
                        text:
                            'Сайт, Viator, GetYourGuide, Instagram, TikTok, Shorts и мессенджеры требуют разных форматов, обложек и текстов.',
                    },
                    {
                        title: 'Соединяем видео, дрон, Reels, 360° и AI',
                        text:
                            'Можно собрать один пакет, где каждый формат закрывает свою задачу: доверие, маршрут, локацию, атмосферу и регулярный контент.',
                    },
                    {
                        title: 'Учитываем языки и локальный контекст',
                        text:
                            'Для туристов важны RU / EN / KA описания, понятные условия, маршрут, подготовка и детали поездки.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text:
                            'Снимаем городские маршруты, природные локации, винные туры, глэмпинги, базы отдыха, экскурсии и travel-проекты.',
                    },
                ],
            },
            pricingHeading: 'Пакеты для туризма',
            pricingTagline:
                'Стоимость зависит от маршрута, локаций, длительности выезда, выбранных форматов, языков, сезона и объёма подготовки. Финальная цена зависит от количества локаций, маршрута, форматов, языков, сезона, логистики и объёма подготовки.',
            pricingPlans: [
                {
                    title: 'Tour Promo Pack',
                    price: 'от 300 ₾',
                    subtitle: 'Базовая упаковка тура, экскурсии или активности',
                    features: [
                        'короткое видео или Reels',
                        'фото маршрута или ключевых точек',
                        'описание предложения',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Route Content Pack',
                    price: 'от 450 ₾',
                    subtitle: 'Для маршрута, поездки, винного тура, гида или travel-продукта',
                    features: [
                        'видео маршрута',
                        'Reels / Shorts',
                        'фото и обложки',
                        'описания и FAQ',
                        'материалы под сайт и соцсети',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Location & Drone Pack',
                    price: 'от 400 ₾',
                    subtitle: 'Для локаций, глэмпингов, баз, видовых точек и объектов',
                    features: [
                        'аэросъёмка локации',
                        'фото и видео территории',
                        '360° тур при необходимости',
                        'материалы для сайта и мессенджеров',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Season Content Pack',
                    price: 'от 850 ₾',
                    subtitle: 'Комплексный пакет для сезона, запуска маршрута или рекламной кампании',
                    features: [
                        'видео, Reels, фото, дрон или 360° по задаче',
                        'описания RU / EN / KA',
                        'материалы для сайта, Viator, GetYourGuide, соцсетей и рекламы',
                        'структурированная передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            pricingAddOns: {
                heading: 'Что может добавляться к туристическому пакету',
                items: [
                    'дополнительные точки маршрута, локации, гид, транспорт или люди в кадре',
                    'аэросъёмка, 360° тур, Reels-серия или сезонные версии материалов',
                    'описания тура, FAQ, карточки маршрута и локализация RU / EN / KA',
                    'версии под сайт, Viator, GetYourGuide, Instagram, Shorts и рекламу',
                ],
                note:
                    'Финальная цена зависит от маршрута, количества локаций, логистики, форматов, языков и сезонной подготовки.',
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Уточняем тип туристического продукта, аудиторию, маршрут, каналы публикации, сезон и нужные материалы.',
                },
                {
                    number: '02',
                    title: 'Выбор формата',
                    description:
                        'Решаем, что нужно именно сейчас: видео маршрута, Reels, дрон, 360° тур, AI-описания или полный content pack.',
                },
                {
                    number: '03',
                    title: 'План маршрута',
                    description:
                        'Согласуем точки, время, дорогу, гида, транспорт, людей в кадре, важные виды и детали, которые нужно показать.',
                },
                {
                    number: '04',
                    title: 'Съёмка / производство',
                    description:
                        'Снимаем маршрут, локации, людей, движение, детали и атмосферу. При необходимости добавляем дрон, 360° или AI-тексты.',
                },
                {
                    number: '05',
                    title: 'Упаковка и передача',
                    description:
                        'Готовим файлы, описания, субтитры, обложки и форматы под каналы. Передаём материалы в понятной структуре.',
                },
            ],
            conditionsNote: {
                title: 'Что важно подготовить до съёмки',
                text:
                    'Для туристического проекта заранее собираем маршрут, доступы и факты, чтобы визуал не расходился с реальной программой тура.',
                items: [
                    'согласовать маршрут, точки остановок, транспорт, гида, доступ к локациям и ограничения по съёмке',
                    'определить, какие эмоции, виды, детали сервиса и практические условия нужно показать гостю до брони',
                    'подготовить факты для текстов: программа, длительность, включённые услуги, языки, сезонность и правила участия',
                ],
                details:
                    'Для сложных маршрутов лучше заранее собрать тайминг и запасные точки: погода, дорога и доступ к локациям могут влиять на план съёмки.',
            },
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Какие услуги подходят для туристического проекта?',
                    answer:
                        'Чаще всего подходят видео тура, аэросъёмка, Reels, 360° тур, фото, AI-описания, карточки маршрута, FAQ и сезонный content pack. Формат зависит от продукта, канала публикации и того, что нужно объяснить гостю до контакта.',
                },
                {
                    question: 'Что лучше выбрать: видео тура, дрон или Reels?',
                    answer:
                        'Видео тура лучше раскрывает программу и впечатление, дрон показывает масштаб и локацию, Reels подходят для коротких касаний в соцсетях. Часто форматы соединяются, но начинать стоит с главной задачи: объяснить маршрут, показать место или регулярно публиковать короткий контент.',
                },
                {
                    question: 'Делаете ли вы контент для Viator и GetYourGuide?',
                    answer:
                        'Да. Можем подготовить фото, видео, обложки, описания, FAQ и структуру предложения, которые затем адаптируются под сайт, Viator, GetYourGuide, Instagram, рекламу и мессенджеры.',
                },
                {
                    question: 'Можно ли снять маршрут за один выезд?',
                    answer:
                        'Иногда да, если маршрут компактный, точки заранее согласованы, понятна логистика и не нужно снимать несколько удалённых локаций. Для сложных маршрутов объём обсуждается отдельно.',
                },
                {
                    question: 'Подходит ли дрон для туризма?',
                    answer:
                        'Да, если важно показать масштаб, дорогу, горы, долины, территорию, видовую точку, базу или туристический объект. Дрон не заменяет наземную съёмку, а дополняет её обзором и ощущением места.',
                },
                {
                    question: 'Делаете ли вы Reels для туров?',
                    answer:
                        'Да. Reels можно собрать вокруг маршрута, гида, дороги, эмоций, точек остановки, еды, видов, деталей поездки и коротких ответов на вопросы туристов.',
                },
                {
                    question: 'Подходит ли 360° тур для глэмпинга или локации?',
                    answer:
                        'Да, если гостю важно заранее понять пространство: домики, территорию, зал, видовые зоны, объект, базу отдыха или точку интереса. 360° тур открывается по ссылке и помогает изучить локацию до визита.',
                },
                {
                    question: 'Делаете ли вы описания маршрутов на русском, английском и грузинском?',
                    answer:
                        'Да. Можем подготовить структуру тура, описания, FAQ и карточки на RU / EN / KA с редакторской проверкой смысла, условий и фактов.',
                },
                {
                    question: 'Можно ли снять гида и людей в кадре?',
                    answer:
                        'Да. Гид, команда и люди в кадре помогают показать атмосферу, темп и доверие к маршруту. Перед съёмкой согласуем, кто участвует, какие сцены нужны и где важно получить согласие.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой маршрута?',
                    answer:
                        'Нужны программа, список точек, понимание аудитории, приоритетные каналы, транспорт, контакт гида, доступ к локациям, важные детали и ограничения, которые нельзя показать неверно.',
                },
                {
                    question: 'Можно ли заказать сезонный content pack?',
                    answer:
                        'Да. Content pack можно собрать под сезон, запуск маршрута, новую активность, рекламную кампанию или обновление материалов для сайта и соцсетей.',
                },
                {
                    question: 'Сколько стоит контент для туризма?',
                    answer:
                        'Цена считается по задаче. Она зависит от маршрута, количества локаций, длительности выезда, форматов, языков, сезона, логистики и объёма подготовки.',
                },
                {
                    question: 'Передаёте ли вы файлы для самостоятельной публикации?',
                    answer:
                        'Да. Передаём материалы в облачной папке и можем подсказать, где какой формат использовать: сайт, Viator, GetYourGuide, Instagram, Shorts, реклама или мессенджеры.',
                },
                {
                    question: 'Работаете ли вы по всей Грузии?',
                    answer:
                        'Да, работаем в Тбилиси и по Грузии. Формат выезда, логистика, точки маршрута и состав материалов обсуждаются под конкретный туристический проект.',
                },
            ],
            contact: {
                title: 'Нужен контент для туристического проекта?',
                description:
                    'Расскажите, что вы продвигаете: маршрут, экскурсию, глэмпинг, базу, винный тур, активность или локацию. Подскажем, с чего начать.',
                taskPlaceholder:
                    'Например: нужен контент для винного тура, Reels маршрута, аэросъёмка локации и описания на RU / EN / KA.',
                serviceOptions: [
                    'Туризм',
                    'Видео тура',
                    'Аэросъёмка',
                    'Reels',
                    '360° тур',
                    'AI-упаковка',
                    'Глэмпинг',
                    'Promo pack',
                    'Full content pack',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['tourism'],
            },
            useDroneContact: true,
        },
    },

    clinicsService: {
        page: makePage({
            path: '/clinics-service',
            eyebrow: 'MEDICAL CONTENT',
            h1: 'Контент для клиник и медицинских центров в Тбилиси',
            intro:
                'Видео, Reels, фото, 360° туры и AI-описания для клиник, стоматологий, эстетических центров, beauty и wellness-направлений: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroImage: reelsClinicImageTwo.src,
            panelServiceSlugs: ['video-kliniki', 'reels-dlya-vracha-i-kliniki', 'tur-360-kliniki'],
            trustHeading: 'Форматы для medical и beauty',
            trustBadges: ['Клиники', 'Стоматологии', 'Beauty', 'Wellness', 'Google Maps', 'Reels'],
            trustLocation: 'Базирование в Тбилиси, выезды по Батуми и всей Грузии',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка', description: 'Дрон-форматы для объектов, локаций и внешней навигации.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивные туры для сайтов, карт и мессенджеров.' },
                { href: '/reels-service', title: 'Reels для бизнеса', description: 'Вертикальные видео для Instagram, TikTok и Shorts.' },
                { href: '/ai-visualization-service', title: 'AI-описания', description: 'Структура, FAQ и аккуратная локализация контента.' },
                { href: '/hotels-service', title: 'Отели', description: 'Визуальная упаковка пространств и сервиса.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для пространства, кухни, команды и соцсетей.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Контент для маршрутов, локаций и впечатлений.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Фото, видео, 360° и AI-визуализация объектов.' },
            ],
            seoTitle: 'Контент для клиник в Тбилиси | Breus Media',
            seoDescription:
                'Видео, Reels, фото, 360° туры и AI-описания для клиник, стоматологий, beauty и wellness-направлений: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            schemaServiceName: 'Контент для клиник в Тбилиси',
            schemaServiceType: 'Clinic content production and AI descriptions',
        }),
        data: {
            heroSubtitle:
                'Видео, Reels, фото, 360° туры и AI-описания для клиник, стоматологий, эстетических центров, beauty и wellness-направлений: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroSupportingLine: '',
            heroDisplayTitle: 'Контент для клиник\nи медицинских центров\nв Тбилиси',
            heroDesktopDisplayTitle: 'Контент для клиник\nи медицинских центров\nв Тбилиси',
            heroMobileCompact: true,
            heroLongHubLayout: true,
            heroLeadParagraphs: [
                'Пациент выбирает клинику не только по списку услуг. Ему важно заранее понять пространство, команду, навигацию, тон общения и то, как будет проходить первый визит.',
                'Мы помогаем собрать визуальную упаковку клиники под сайт, Google Maps, Instagram, TikTok, YouTube Shorts, рекламу, мессенджеры и внутренние материалы.',
                'Формат подбирается под задачу: показать ресепшен и кабинеты, объяснить услугу, снять врача, подготовить Reels, сделать 360° тур или обновить контент для сайта.',
            ],
            heroCards: [
                {
                    slug: 'video-kliniki',
                    title: 'Видео клиники',
                    image: reelsClinicImageTwo.src,
                    tags: 'клиника · пространство · команда',
                    shortText: 'Показывает пространство, ресепшен, кабинеты, команду, маршрут пациента и атмосферу первого визита.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-dlya-vracha',
                    title: 'Reels для врача',
                    image: reelsClinicImageOne.src,
                    tags: 'Reels · врач · эксперт',
                    shortText: 'Короткие вертикальные видео: ответы на вопросы, объяснение услуги, знакомство с врачом и клиникой.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'tur-360-kliniki',
                    title: '360° тур клиники',
                    image: reelsClinicImageFive.src,
                    tags: '360° · кабинет · до визита',
                    shortText: 'Пациент может заранее увидеть ресепшен, коридоры, кабинеты и навигацию внутри клиники.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'foto-prostranstva',
                    title: 'Фото пространства',
                    image: reelsClinicImageFour.src,
                    tags: 'фото · Google Maps · сайт',
                    shortText: 'Ресепшен, кабинеты, зона ожидания, оборудование, детали и команда для сайта и Google Maps.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'kontent-dlya-uslug',
                    title: 'Контент для услуг',
                    image: reelsClinicImageThree.src,
                    tags: 'услуги · объяснение · FAQ',
                    shortText: 'Аккуратные видео и тексты, которые объясняют услугу без медицинских обещаний и давления.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-opisaniya-faq',
                    title: 'AI-описания и FAQ',
                    image: aiInteriorImageOne.src,
                    tags: 'AI · RU/EN/KA · тексты',
                    shortText: 'Структура услуг, FAQ и тексты на RU / EN / KA с редакторской доводкой и осторожными формулировками.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            marqueeItems: [
                'Клиники',
                'стоматологии',
                'медицинские центры',
                'beauty',
                'wellness',
                'косметология',
                'Reels',
                '360° туры',
                'фото кабинетов',
                'видео врача',
                'Google Maps',
                'сайт клиники',
                'Instagram',
                'TikTok',
                'FAQ',
                'AI-описания',
                'RU',
                'EN',
                'KA',
                'Тбилиси',
                'Грузия',
            ],
            statsHeading: 'Клиники в цифрах',
            statsTagline:
                'Цифры и сигналы показывают рыночный контекст, а не гарантию записей, заявок или результата для конкретной клиники.',
            statsCards: [
                {
                    value: 'До визита',
                    label: 'пациент изучает клинику заранее',
                    description:
                        'Сайт, Google Maps, фото, видео и соцсети формируют первое понимание клиники до записи или сообщения.',
                    sourceLabel: 'market context',
                },
                {
                    value: '1 ссылка',
                    label: 'для сайта, мессенджера и консультации',
                    description:
                        'Видео, 360° тур или страница услуги помогают отправить пациенту понятный материал без длинного объяснения.',
                    sourceLabel: 'content reuse',
                },
                {
                    value: 'RU / EN / KA',
                    label: 'тексты для разных пациентов',
                    description:
                        'Мультиязычные описания помогают клинике говорить с локальной, релокантской и международной аудиторией.',
                    sourceLabel: 'localization context',
                },
                {
                    value: '4 канала',
                    label: 'сайт, Google Maps, соцсети, реклама',
                    description: 'Один content pack можно адаптировать под разные точки контакта пациента.',
                    sourceLabel: 'content reuse',
                },
            ],
            servicesHeading: 'Форматы контента для клиник',
            servicesSubtitle:
                'Разные задачи требуют разных материалов: для сайта, Google Maps, соцсетей, рекламы, мессенджеров, навигации и доверия пациента до первого визита.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'video-kliniki',
                    title: 'Имиджевое видео клиники',
                    category: 'клиника · маршрут · первый визит',
                    description:
                        'Презентация стандартов безопасности, высокоточного оборудования и комфорта зон ожидания. Формирует статус авторитетного медицинского центра.',
                    price: 'ПРЕЗЕНТАЦИЯ · ОБОРУДОВАНИЕ · СТАТУС',
                    image: reelsClinicImageTwo.src,
                    featured: true,
                    tag: 'L2',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 2,
                    slug: 'tur-360-kliniki',
                    title: '360° тур по отделению',
                    category: '360° · навигация · до визита',
                    description:
                        'Виртуальный маршрут от входа через зону ресепшен до операционных и стационара. Снижает психологический барьер и страх перед первой консультацией.',
                    price: 'МАРШРУТ · СТАЦИОНАР · ДОВЕРИЕ',
                    image: reelsClinicImageFive.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 2,
                    order: 3,
                    slug: 'reels-dlya-vracha-i-kliniki',
                    title: 'Reels для врачей',
                    category: 'Reels · врач · объяснение',
                    description:
                        'Экспертные ответы докторов на частые вопросы пациентов, разбор клинических случаев и мифов. Создает личный бренд ведущих специалистов клиники.',
                    price: 'ЭКСПЕРТЫ · ВРАЧИ · ЛИЧНЫЙ БРЕНД',
                    image: reelsClinicImageOne.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'foto-prostranstva-i-komandy',
                    title: 'Фото пространств и команды',
                    category: 'фото · кабинеты · команда',
                    description:
                        'Профессиональные портреты врачебного состава и интерьерная съемка кабинетов для сайта и Google Maps. Усиливает доверие при онлайн-записи.',
                    price: 'ПОРТРЕТЫ ВРАЧЕЙ · КАБИНЕТЫ · HQ',
                    image: reelsClinicImageFour.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'kontent-dlya-uslug-i-protsedur',
                    title: 'Контент для процедур',
                    category: 'услуги · консультация · FAQ',
                    description:
                        'Пошаговая визуализация этапов косметологических и лечебных манипуляций. Наглядно демонстрирует безопасность и безболезненность методик.',
                    price: 'ПРОЦЕДУРЫ · БЕЗОПАСНОСТЬ · ДО/ПОСЛЕ',
                    image: reelsClinicImageThree.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-opisaniya-i-faq-dlya-sayta',
                    title: 'AI-описания и FAQ для сайта',
                    category: 'AI · RU / EN / KA · сайт',
                    description:
                        'Структура услуг, FAQ, описания направлений и локализация RU / EN / KA с редакторской доводкой.',
                    price: 'структура · тексты · локализация',
                    image: aiInteriorImageOne.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'kontent-dlya-google-maps',
                    title: 'Контент для Google Maps',
                    category: 'Google Maps · вход · карточка',
                    description:
                        'Фото фасада, входа, ресепшена, кабинетов, команды и актуальные материалы, чтобы карточка клиники выглядела понятнее.',
                    price: 'карты · фото · навигация',
                    image: reelsClinicImageFour.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'monthly-clinic-content-pack',
                    title: 'Monthly Clinic Content Pack',
                    category: 'месяц · Reels · FAQ · фото',
                    description:
                        'Серия Reels, фото, коротких видео, FAQ и описаний под регулярную публикацию клиники или врача.',
                    price: 'регулярный контент · разные каналы',
                    image: hotelsContentImageOne.src,
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            midCta: {
                heading: 'Не уверены, что нужно клинике первым?',
                text:
                    'Расскажите, какой у вас формат: клиника, стоматология, beauty, wellness, врач, диагностический центр или новое направление. Подскажем, с чего начать: видео, Reels, фото, 360°, Google Maps pack или описания услуг.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Не просто съёмка кабинетов, а понятная упаковка первого визита',
                paragraphs: [
                    'Пациент часто приходит с тревогой и вопросами. Ему важно заранее понять, кто его встретит, как выглядит пространство, куда идти, как проходит консультация и насколько понятно клиника объясняет свои услуги.',
                    'Поэтому контент для клиники должен быть спокойным и аккуратным: показывать пространство, команду, путь пациента, ответы на частые вопросы и структуру услуги без медицинских обещаний.',
                    'Мы собираем материалы под реальные каналы: сайт, Google Maps, Instagram, TikTok, YouTube Shorts, рекламу, мессенджеры и внутренние презентации клиники.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает контент для клиники',
                subtitle:
                    'Хороший контент помогает пациенту заранее понять пространство, команду и услугу — без давления, обещаний и лишней тревоги.',
                items: [
                    {
                        pain: 'Пациент не понимает, куда он идёт',
                        solution:
                            'Видео, фото и 360° тур показывают вход, ресепшен, коридоры, кабинеты и путь пациента до первого визита.',
                    },
                    {
                        pain: 'Есть тревога перед процедурой или консультацией',
                        solution:
                            'Reels, FAQ и короткие объясняющие видео помогают спокойно рассказать, что происходит на консультации и как подготовиться.',
                    },
                    {
                        pain: 'Врач или клиника выглядят безлично',
                        solution:
                            'Контент с врачом, командой и пространством помогает показать человеческий тон общения и подход клиники.',
                    },
                    {
                        pain: 'Соцсети ведутся хаотично',
                        solution:
                            'Контент-пакет даёт запас Reels, фото, коротких видео и тем для регулярной публикации.',
                    },
                    {
                        pain: 'Google Maps и сайт не объясняют клинику',
                        solution:
                            'Актуальные фото, видео, описания услуг и FAQ делают карточку клиники и сайт понятнее для первого контакта.',
                    },
                    {
                        pain: 'Сложно объяснить услугу без медицинских обещаний',
                        solution:
                            'Структурированные тексты, FAQ и аккуратные видео помогают объяснить процесс, подготовку и формат консультации без гарантий результата.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что выигрывает клиника',
                earnTitle: 'Выигрывает',
                earnItems: [
                    'Быстрее объясняет пространство, команду и формат первого визита.',
                    'Получает материалы для сайта, Google Maps, Instagram, TikTok, Shorts, рекламы и мессенджеров.',
                    'Может спокойно объяснять услуги через видео, FAQ и понятные описания.',
                ],
                loseTitle: 'Теряет меньше',
                loseItems: [
                    'Меньше хаотичных фото и устаревших материалов в разных стилях.',
                    'Меньше повторяющихся вопросов о входе, кабинете, подготовке и формате консультации.',
                    'Меньше риска звучать агрессивно или обещать медицинский результат там, где нужна осторожная подача.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                items: [
                    'фото ресепшена, кабинетов, команды, входа и деталей',
                    'видео клиники или направления',
                    'Reels / Shorts / TikTok-ролики',
                    '360° тур или ссылка на интерактивный просмотр',
                    'материалы для Google Maps',
                    'описания услуг и FAQ',
                    'титры и субтитры',
                    'тексты RU / EN / KA при необходимости',
                    'файлы в облачной папке',
                    'рекомендации, где какой формат использовать',
                ],
            },
            whyUs: {
                heading: 'Почему клиники работают с нами',
                subtitle:
                    'Мы думаем не только о красивом кадре, а о том, как пациент выбирает клинику: по понятности, спокойному тону, пространству, врачу, команде и первому впечатлению.',
                items: [
                    {
                        title: 'Бережный тон без медицинских обещаний',
                        text:
                            'Мы не обещаем результат лечения или процедур. Контент объясняет пространство, услугу и процесс аккуратно и понятно.',
                    },
                    {
                        title: 'Подбираем формат под клинику',
                        text:
                            'Стоматологии, beauty, wellness, диагностике и частному врачу нужны разные материалы и разная подача.',
                    },
                    {
                        title: 'Понимаем каналы клиник',
                        text:
                            'Сайт, Google Maps, Instagram, TikTok, Shorts, реклама и мессенджеры требуют разных форматов, обложек и текстов.',
                    },
                    {
                        title: 'Показываем путь пациента',
                        text:
                            'Снимаем не только кабинет, а вход, ресепшен, ожидание, навигацию, врача, детали и спокойную атмосферу первого визита.',
                    },
                    {
                        title: 'Соединяем видео, фото, Reels, 360° и тексты',
                        text:
                            'Можно собрать один пакет, где каждый формат закрывает свою задачу: пространство, доверие, объяснение, навигацию и регулярный контент.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text:
                            'Снимаем клиники, стоматологии, эстетические центры, wellness, кабинеты специалистов и медицинские пространства.',
                    },
                ],
            },
            pricingHeading: 'Пакеты для клиник',
            pricingTagline:
                'Стоимость зависит от количества кабинетов, врачей, услуг, форматов, языков, локации и объёма подготовки.',
            pricingPlans: [
                {
                    title: 'Clinic Starter Pack',
                    price: 'от 350 ₾',
                    subtitle: 'Базовая упаковка клиники, кабинета или одного направления',
                    features: [
                        'фото пространства и ключевых зон',
                        'короткое видео или обложки',
                        'описание услуги или направления',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Doctor & Reels Pack',
                    price: 'от 550 ₾',
                    subtitle: 'Для врача, эксперта, направления или регулярных коротких видео',
                    features: [
                        'Reels / Shorts',
                        'съёмка врача, пространства и объясняющих кадров',
                        'субтитры или короткие подписи',
                        'материалы под соцсети',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    featured: true,
                },
                {
                    title: 'Clinic Space Pack',
                    price: 'от 450 ₾',
                    subtitle: 'Для клиник, где важно показать пространство, навигацию и первый визит',
                    features: [
                        'фото и видео ресепшена, кабинетов и зон ожидания',
                        '360° тур при необходимости',
                        'материалы для сайта и Google Maps',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Monthly Clinic Content Pack',
                    price: 'от 950 ₾',
                    subtitle: 'Комплексный пакет для регулярной публикации клиники или врача',
                    features: [
                        'фото, Reels, видео, FAQ или тексты по задаче',
                        'материалы для Instagram, Google Maps, сайта и рекламы',
                        'структурированная передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            pricingAddOns: {
                heading: 'От чего зависит финальная цена',
                items: [
                    'количество кабинетов, врачей, услуг и форматов',
                    'языки: RU / EN / KA и объём редакторской доводки',
                    'локации, необходимость 360° тура и объём подготовки',
                ],
                note:
                    'Финальная цена зависит от количества кабинетов, врачей, услуг, форматов, языков, локаций, необходимости 360° тура и объёма подготовки.',
            },
            conditionsNote: {
                title: 'Что важно подготовить до съёмки',
                text:
                    'Перед съёмкой клиники отдельно согласуем приватность, допустимые зоны и осторожный тон формулировок.',
                items: [
                    'согласовать кабинеты, ресепшен, вход, врачей, команду, оборудование и зоны, которые можно показывать публично',
                    'обеспечить приватность пациентов: свободные окна, согласованные маршруты и отсутствие людей в кадре без разрешения',
                    'подготовить список услуг, частых вопросов, языков и ограничений по формулировкам до записи текстов или Reels',
                ],
                details:
                    'В медицинских и beauty-проектах мы избегаем обещаний результата: контент объясняет пространство, процесс и доверие, но не гарантирует записи или эффект процедур.',
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Уточняем тип клиники, услуги, аудиторию, каналы публикации, ограничения, приватность и нужные материалы.',
                },
                {
                    number: '02',
                    title: 'Выбор формата',
                    description:
                        'Решаем, что нужно именно сейчас: видео клиники, Reels, фото, 360° тур, Google Maps pack, описания услуг или полный content pack.',
                },
                {
                    number: '03',
                    title: 'Подготовка клиники',
                    description:
                        'Согласуем кабинеты, зоны, врачей, время, приватность пациентов, внешний вид пространства и детали, которые важно показать.',
                },
                {
                    number: '04',
                    title: 'Съёмка / производство',
                    description:
                        'Снимаем пространство, врача, команду, навигацию и объясняющие материалы. При необходимости добавляем 360° или AI-описания.',
                },
                {
                    number: '05',
                    title: 'Упаковка и передача',
                    description:
                        'Готовим файлы, описания, субтитры и форматы под каналы. Передаём материалы в понятной структуре.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Какие услуги подходят клинике?',
                    answer:
                        'Чаще всего клинике нужны фото пространства, видео клиники, Reels для врача, 360° тур, материалы для Google Maps, описания услуг и FAQ для сайта. Набор зависит от задачи и каналов публикации.',
                },
                {
                    question: 'Что лучше начать снимать: врача, кабинет или услугу?',
                    answer:
                        'Если клиника ещё не объясняет пространство, стоит начать с кабинетов, ресепшена, входа и зоны ожидания. Если нужно показать экспертизу и тон общения, добавляем врача и короткие объясняющие видео.',
                },
                {
                    question: 'Делаете ли вы Reels для врачей?',
                    answer:
                        'Да. Мы снимаем вертикальные ролики, где врач отвечает на частые вопросы, объясняет формат консультации, показывает пространство или рассказывает о направлении без медицинских обещаний.',
                },
                {
                    question: 'Подходит ли 360° тур для клиники?',
                    answer:
                        'Да, если пациенту важно заранее увидеть вход, ресепшен, коридоры, кабинеты и навигацию. Такой тур можно использовать на сайте, в мессенджерах и как ссылку перед визитом.',
                },
                {
                    question: 'Можно ли снять кабинеты, ресепшен и зону ожидания?',
                    answer:
                        'Да. Это базовые зоны для визуальной упаковки клиники: они помогают пациенту понять пространство, маршрут и общий тон первого визита.',
                },
                {
                    question: 'Можно ли снимать процедуры?',
                    answer:
                        'Можно, если это согласовано с клиникой и не нарушает приватность. Мы выбираем аккуратные планы: подготовку кабинета, оборудование, общие действия врача и объяснение процесса без физиологических подробностей и обещаний результата.',
                },
                {
                    question: 'Как не нарушить приватность пациентов?',
                    answer:
                        'Съёмку планируем так, чтобы пациенты не попадали в кадр без согласия. Можно снимать в свободные окна, использовать сотрудников или моделей, заранее согласовать зоны, маршруты и ограничения.',
                },
                {
                    question: 'Делаете ли вы описания услуг и FAQ для сайта?',
                    answer:
                        'Да. Мы помогаем структурировать услуги, подготовить FAQ и описания направлений с осторожными формулировками, чтобы объяснять процесс и подготовку без медицинских гарантий.',
                },
                {
                    question: 'Можно ли подготовить материалы на русском, английском и грузинском?',
                    answer:
                        'Да. Можно подготовить тексты, подписи, FAQ или субтитры на RU / EN / KA с редакторской проверкой под аудиторию клиники.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой?',
                    answer:
                        'Нужно согласовать зоны, врачей, кабинеты, приватность, чистоту рабочих поверхностей, внешний вид пространства, доступ к свету и список услуг или вопросов, которые важно объяснить.',
                },
                {
                    question: 'Подходит ли это для стоматологии, beauty и wellness?',
                    answer:
                        'Да. Форматы подходят для стоматологий, медицинских центров, beauty-клиник, wellness-направлений, косметологии, диагностических центров и частных специалистов.',
                },
                {
                    question: 'Сколько стоит контент для клиники?',
                    answer:
                        'Стоимость считается по задаче. Она зависит от количества кабинетов, врачей, услуг, форматов, языков, локаций, необходимости 360° тура и объёма подготовки.',
                },
                {
                    question: 'Передаёте ли вы файлы для самостоятельной публикации?',
                    answer:
                        'Да. Готовые материалы передаются в понятной структуре, чтобы команда клиники могла использовать их на сайте, в соцсетях, Google Maps, рекламе или мессенджерах.',
                },
                {
                    question: 'Работаете ли вы по всей Грузии?',
                    answer:
                        'Мы базируемся в Тбилиси и обсуждаем выезды по Грузии под конкретную задачу, локацию и объём съёмки.',
                },
            ],
            contact: {
                title: 'Нужен контент для клиники?',
                description:
                    'Расскажите, какой у вас формат: клиника, стоматология, beauty, wellness, врач, диагностический центр или новое направление. Подскажем, с чего начать.',
                taskPlaceholder:
                    'Например: стоматология в Тбилиси, нужен контент для сайта, Google Maps и Reels врача.',
                serviceOptions: [
                    'Клиники',
                    'Видео клиники',
                    'Reels для врача',
                    '360° тур',
                    'Фото кабинетов',
                    'Google Maps pack',
                    'AI-описания',
                    'FAQ для сайта',
                    'Monthly pack',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['clinics'],
            },
            useDroneContact: true,
        },
    },

    autoService: {
        page: makePage({
            path: '/auto-service',
            eyebrow: 'АВТОКОНТЕНТ',
            h1: 'Контент для автобизнеса и автообъектов',
            intro: 'Видео, аэросъёмка, reels и контент для дилерских центров, парковок, автоплощадок и проектов в автобизнесе: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80',
            panelServiceSlugs: ['video-dilerskogo-centra', 'aerosemka-avtoploshadki', 'reels-avtobiznesa'],
            trustHeading: 'Нам доверяют в автобизнесе',
            trustBadges: ['Дилеры', 'Автоплощадки', 'Премиум-сегмент', 'Сервисы', 'Детейлинг', 'Автобренды'],
            trustLocation: 'Базирование в Тбилиси, выезды по Батуми и всей Грузии',
            relatedLinks: [
                { href: droneService, title: 'Аэросъёмка', description: 'Aerial-пролёты для автоплощадок, шоурумов и дилерских центров.' },
                { href: '/reels-service', title: 'Reels', description: 'Короткие ролики для соцсетей, ads и прогрева аудитории.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный просмотр шоурума, сервиса или площадки.' },
                { href: '/ai-visualization-service', title: 'AI Content', description: 'AI-описания, карточки и визуальная упаковка объявлений.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Визуальная упаковка объектов под продажу, аренду и презентации.' },
                { href: '/hotels-service', title: 'Отели', description: 'Контент для отелей, апартаментов и hospitality.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для ресторанов, кафе и гастропроектов.' },
            ],
            seoTitle: 'Контент для автобизнеса в Тбилиси | Auto Service — Breus Media',
            seoDescription: 'Видео, аэросъёмка, reels и digital-контент для дилерских центров, автоплощадок и сервисов в Грузии.',
            schemaServiceName: 'Auto Business Content Service',
            schemaServiceType: 'Automotive media production service',
        }),
        data: {
            heroMobileCompact: true,
            heroSubtitle:
                'Видео, аэросъёмка, reels и контент для дилерских центров, парковок, автоплощадок и проектов в автобизнесе: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroSupportingLine: 'Покупатель выбирает глазами — особенно когда сравнивает десятки машин и площадок.',
            heroLeadParagraphs: [
                'Автобизнесу мало просто показать машины. Клиент должен увидеть уровень салона, состояние площадки, порядок в сервисной зоне, ассортимент, детали конкретной модели и понять, почему вам можно доверять.',
                'Мы собираем визуальную упаковку под сайт, MyAuto, соцсети, рекламу, презентации и менеджеров по продажам: от аэросъёмки площадки до коротких Reels и обзоров моделей.',
                'Формат подбирается под задачу: усилить доверие к дилерскому центру, показать премиальный сервис, продвинуть модель, обновить объявления или запустить регулярный контент-поток.',
            ],
            heroCards: [
                {
                    slug: 'video-dilerskogo-centra',
                    title: 'Видео дилерского центра',
                    image: autoImageTwo.src,
                    tags: 'бренд · доверие · шоурум',
                    shortText: 'Показывает уровень компании, клиентскую зону, сервис, команду и масштаб дилерского центра.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'aerosemka-avtoploshadki',
                    title: 'Аэросъёмка площадки',
                    image: '/media/drone-service/auto-showroom-1.png',
                    tags: 'дрон · масштаб · ассортимент',
                    shortText: 'С высоты видно площадку, ряды автомобилей, подъезды, фасад, парковку и инфраструктуру.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-avtobiznesa',
                    title: 'Reels для авто',
                    image: reelsAutoImageOne.src,
                    tags: 'short-form · ads · соцсети',
                    shortText: 'Короткие вертикальные ролики для моделей, акций, сервиса, выдач авто и регулярного прогрева.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'obzornyy-kontent-modelyam',
                    title: 'Обзор модели',
                    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
                    tags: 'модель · интерьер · детали',
                    shortText: 'Отдельный контент по конкретной модели: экстерьер, интерьер, детали, динамика и преимущества.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'kontent-servisa-deteylinga',
                    title: 'Сервис / детейлинг',
                    image: autoImageOne.src,
                    tags: 'ремзона · доверие · процесс',
                    shortText: 'Показывает чистоту, оборудование, команду, этапы работы и качество обращения с автомобилем.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-upakovka-obyavleniy',
                    title: 'AI-упаковка',
                    image: aiAutoImageOne.src,
                    tags: 'AI · объявления · тексты',
                    shortText: 'AI-описания, карточки, быстрые варианты визуала и упаковка объявлений под digital-каналы.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            singleTickerMode: true,
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            marqueeItems: [
                'Автосалоны',
                'дилерские центры',
                'автоплощадки',
                'детейлинг',
                'сервис',
                'обзоры моделей',
                'аэросъёмка',
                'Reels',
                'AI-описания',
                'MyAuto',
                'сайт',
                'реклама',
                'Тбилиси',
                'Грузия',
            ],
            socialProofStats: makeCommonSocialProof('auto'),
            servicesHeading: 'Услуги для автобизнеса и автообъектов',
            servicesSubtitle:
                'Собираем форматы под реальные точки продаж: сайт, MyAuto, соцсети, рекламу, презентации менеджеров и доверие к объекту.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'video-dilerskogo-centra',
                    title: 'Видео дилерского центра',
                    category: 'БРЕНД · ДОВЕРИЕ · ПРЕЗЕНТАЦИЯ',
                    description:
                        'Презентационный фильм об архитектуре автосалона, комфорте лаундж-зон и стандартах обслуживания. Закрепляет уверенность покупателя премиального авто еще до первого визита.',
                    price: 'РЕПУТАЦИЯ · ПРОДАКШЕН · МАСШТАБ',
                    image: autoImageTwo.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                    featured: true,
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'aerosemka-avtoploshadki',
                    title: 'Аэросъёмка автоплощадки',
                    category: 'МАСШТАБ · АССОРТИМЕНТ · ИНФРАСТРУКТУРА',
                    description:
                        'Масштабный обзор открытых парковок, ассортимента сотен автомобилей и удобства подъездных путей. Демонстрирует размах бизнеса, который невозможно оценить с земли.',
                    price: 'ПЛОЩАДКА · СКЛАД · ОБЗОР С ВОЗДУХА',
                    image: '/media/drone-service/auto-showroom-1.png',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить съёмку',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-avtobiznesa',
                    title: 'Reels для автобизнеса',
                    category: 'СОЦСЕТИ · РЕКЛАМА · REELS',
                    description:
                        'Энергичные короткие клипы о новых поступлениях, передаче ключей и специальных предложениях. Формируют постоянный поток входящих звонков и сообщений в мессенджеры.',
                    price: 'ПОСТУПЛЕНИЯ · ДИНАМИКА · ЛИДЫ',
                    image: reelsAutoImageOne.src,
                    imagePosition: 'center 35%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'obzornyy-kontent-modelyam',
                    title: 'Обзорный контент моделей',
                    category: 'КАТАЛОГ · СОЦСЕТИ · ТРАФИК',
                    description:
                        'Детальный фокус на линиях кузова, материалах интерьера, оптике и техническом оснащении. Качественная картинка прогревает покупателя и мотивирует записаться на тест-драйв.',
                    price: 'ТЕСТ-ДРАЙВ · ДЕТАЛИ · ЭКСТЕРЬЕР',
                    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'kontent-servisa-deteylinga',
                    title: 'Контент для детейлинга',
                    category: 'ЭКСПЕРТНОСТЬ · ТРАНСФОРМАЦИЯ · СТАНДАРТЫ',
                    description:
                        'Эффектные кадры идеальной чистоты ремзоны, полировки и нанесения керамических покрытий. Доказывает экспертность мастеров и снимает сомнения требовательных автовладельцев.',
                    price: 'ПРЕОБРАЖЕНИЕ · РЕМЗОНА · НАДЕЖНОСТЬ',
                    image: autoImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ai-upakovka-obyavleniy',
                    title: 'AI-упаковка объявлений',
                    category: 'КЛАССИФАЙДЫ · КОНВЕРСИЯ · ГЕНЕРАЦИЯ',
                    description:
                        'Умная обработка исходников и создание продающих сценариев под поисковые алгоритмы. Нейросети ускоряют публикацию и делают каждую позицию в выдаче максимально кликабельной.',
                    price: 'АЛГОРИТМЫ · НЕЙРОСЕТИ · АВТОМАТИЗАЦИЯ',
                    image: aiAutoImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'tur-360-avtobiznesa',
                    title: '360° туры для автобизнеса',
                    category: 'Шоурум · Салон · Интерактив',
                    description: 'Интерактивный формат для онлайн-презентации салона, площадки и шоурума.',
                    price: '360° · от 500 ₾',
                    image: autoImageThree.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить тур',
                },
            ],
            midCta: {
                text:
                    'Не уверены, что важнее сейчас: видео салона, Reels по моделям, дрон площадки или контент для сервиса? Опишите объект и канал продаж — подберём формат без лишних съёмок.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Что получает автобизнес',
                paragraphs: [
                    'Авто-контент должен не просто красиво показывать машины, а помогать продавать: усиливать доверие к площадке, объяснять комплектацию, показывать состояние, создавать ощущение порядка и снижать сомнения до первого звонка.',
                    'Для дилерского центра важна цельная подача: фасад, шоурум, сервис, команда, процесс покупки, выдача авто, отдельные модели и регулярные короткие форматы для соцсетей.',
                    'Мы соединяем видео, дрон, Reels, 360° и AI-упаковку так, чтобы материалы работали в разных каналах, а не жили отдельными файлами без общей логики.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает контент для автобизнеса',
                subtitle:
                    'Автосалону, сервису или площадке важно выглядеть убедительно до визита клиента. Контент закрывает именно этот первый этап выбора.',
                items: [
                    {
                        pain: 'Не видно масштаба площадки',
                        solution:
                            'Дрон и обзорное видео показывают ассортимент, въезд, парковку, фасад и порядок на территории.',
                    },
                    {
                        pain: 'Модели выглядят одинаково в объявлениях',
                        solution:
                            'Отдельный model showcase раскрывает детали кузова, салона, света, комплектации и сценарии использования.',
                    },
                    {
                        pain: 'Сервису сложно объяснить качество работы',
                        solution:
                            'Видео процесса, clean-зоны, оборудование и этапы детейлинга показывают стандарты без длинных объяснений.',
                    },
                    {
                        pain: 'Соцсети публикуются нерегулярно',
                        solution:
                            'Reels-пакеты дают запас коротких роликов по моделям, акциям, выдачам и backstage.',
                    },
                    {
                        pain: 'Объявления долго готовятся',
                        solution:
                            'AI-описания и структурированные материалы ускоряют публикацию и делают карточки понятнее.',
                    },
                    {
                        pain: 'Клиент не понимает пространство до визита',
                        solution:
                            '360° тур помогает пройти по шоуруму, сервисной зоне или площадке онлайн.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что даёт системная визуальная упаковка',
                earnTitle: 'Что получает автобизнес',
                earnItems: [
                    'Более сильный первый контакт до звонка или визита.',
                    'Материалы под сайт, MyAuto, рекламу, соцсети и менеджеров.',
                    'Регулярный контент-поток вместо разовых случайных публикаций.',
                ],
                loseTitle: 'Что теряется без системы',
                loseItems: [
                    'Площадка выглядит слабее, чем есть на самом деле.',
                    'Покупатель сравнивает только цену, а не доверие и сервис.',
                    'Команда каждый раз заново придумывает, что публиковать.',
                ],
            },
            deliverables: {
                heading: 'Что можно получить в рамках проекта',
                intro:
                    'Финальный набор зависит от задачи, но каждый проект собирается под конкретные каналы использования.',
                items: [
                    'Имиджевое видео дилерского центра или автосалона.',
                    'Аэросъёмка площадки, фасада, парковки и инфраструктуры.',
                    'Reels / Shorts / TikTok-ролики по моделям, акциям и сервису.',
                    'Обзорный контент по конкретным автомобилям.',
                    'Фото и видео деталей экстерьера, интерьера и комплектации.',
                    'Контент для сервиса, детейлинга или ремзоны.',
                    '360° тур по шоуруму, сервису или площадке.',
                    'AI-описания и тексты для объявлений.',
                    'Версии под сайт, соцсети, рекламу и отправку клиенту.',
                    'Обложки, короткие нарезки и материалы для менеджеров.',
                ],
            },
            whyUs: {
                heading: 'Почему авто-проекты снимают с Breus Media',
                subtitle:
                    'Мы смотрим на автоконтент как на инструмент продаж, доверия и регулярного digital-присутствия.',
                items: [
                    {
                        title: 'Сначала канал продаж',
                        text: 'Перед съёмкой уточняем, где материал будет работать: сайт, MyAuto, Instagram, ads, презентации или переписка менеджера.',
                    },
                    {
                        title: 'Показываем объект целиком',
                        text: 'Снимаем не только машины, но и площадку, фасад, сервисную зону, команду, процесс и атмосферу.',
                    },
                    {
                        title: 'Комбинируем форматы',
                        text: 'Видео, дрон, Reels, 360° и AI-упаковка могут собираться в один логичный контент-пакет.',
                    },
                    {
                        title: 'Работаем без остановки бизнеса',
                        text: 'Планируем зоны и тайминг так, чтобы съёмка не мешала продажам, клиентам и работе сервиса.',
                    },
                    {
                        title: 'Готовим материалы под использование',
                        text: 'Отдаём файлы в форматах, которые можно сразу ставить на сайт, в соцсети, рекламу и объявления.',
                    },
                    {
                        title: 'Учитываем визуальный стандарт бренда',
                        text: 'Подача может быть премиальной, динамичной, сервисной или массовой — под сегмент и аудиторию.',
                    },
                ],
            },
            processSteps: makeCommonProcessSteps('для автообъекта и автобизнеса'),
            map: makeCommonMap(
                'География авто-проектов',
                'Базирование в Тбилиси, выезды по Батуми и всей Грузии для автообъектов и автобизнеса. Планируем съёмку под рабочий график площадки и потоки клиентов.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для автобизнеса и автообъектов',
            pricingPlans: [
                {
                    title: 'Старт',
                    price: 'от 300 ₾',
                    subtitle: 'Базовый пакет для обновления визуала',
                    audience: 'Для автосалона, сервиса или площадки, которым нужно быстро обновить сайт и соцсети.',
                    features: [
                        'Базовая съёмка площадки, шоурума или сервиса',
                        'Короткий ролик для digital-каналов',
                        'Фото и видео-фрагменты для сайта и соцсетей',
                        'Передача материалов в удобном облаке',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Видео + Reels',
                    price: 'от 600 ₾',
                    subtitle: 'Для регулярной коммуникации и рекламы',
                    audience: 'Для дилеров и автоплощадок, которым нужен не один ролик, а серия материалов.',
                    features: [
                        'Имиджевое видео или обзор объекта',
                        'Серия short-form роликов',
                        'Версии под Instagram, TikTok, Shorts и ads',
                        'Обложки и базовая адаптация под публикации',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Обзор модели',
                    price: 'от 700 ₾',
                    subtitle: 'Контент по конкретным автомобилям',
                    audience: 'Для продвижения новых поступлений, премиальных моделей или специальных предложений.',
                    features: [
                        'Съёмка экстерьера и интерьера модели',
                        'Детали комплектации и преимуществ',
                        'Короткие версии для соцсетей',
                        'Материалы для объявления и менеджера',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Полная упаковка',
                    price: 'от 900 ₾',
                    subtitle: 'Видео, дрон, Reels, 360° и AI по задаче',
                    audience: 'Для запуска, обновления бренда, кампании или комплексной упаковки автообъекта.',
                    features: [
                        'Видео, aerial, Reels и AI-упаковка',
                        'Материалы для продаж, сайта и рекламы',
                        'Контент для площадки, моделей и сервиса',
                        'Единая визуальная логика под бренд',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
            ],
            pricingAddOns: {
                heading: 'Дополнительно по задаче',
                items: [
                    'Дополнительная модель автомобиля в съёмочный день.',
                    'Вертикальные версии 9:16 для Reels, Stories, TikTok и Shorts.',
                    'Субтитры и титры для рекламных креативов.',
                    'Срочная выдача материалов.',
                    'AI-описания для объявлений и карточек.',
                    'Дополнительные обложки и короткие cut-down версии.',
                ],
                note: 'Финальный набор add-ons зависит от площадки, количества моделей и каналов размещения.',
            },
            conditionsNote: {
                title: 'Подготовка автообъекта к съёмке',
                text:
                    'Перед съёмкой согласуем зоны, модели, порядок машин и рабочий график, чтобы контент выглядел собранно и не мешал продажам или работе сервиса.',
                items: [
                    'Автомобили лучше подготовить заранее: чистота кузова, салона, дисков и стекла заметна в кадре.',
                    'Номерные знаки, лица клиентов и брендовые ограничения обсуждаем до съёмки.',
                    'Для дрона заранее проверяем площадку, погоду и безопасные траектории.',
                    'Для съёмки в движении отдельно согласуем маршрут, тайминг и безопасность.',
                ],
                details:
                    'Если объект работает с клиентами во время съёмки, планируем зоны по очереди: шоурум, площадка, сервис, выдача авто, детали моделей.',
            },
            painProofTitle: 'Почему площадка не вызывает доверия с первого взгляда',
            painProofSupportingLine:
                'Когда визуал не показывает уровень объекта и ассортимент, покупатель уходит к тому, кто выглядит понятнее и сильнее.',
            painProofCards: [
                {
                    title: 'Не видно масштаб и качество площадки',
                    text: 'Случайные фото не передают уровень бизнеса.',
                    resolution:
                        'Решение: обзорный видео- и дрон-контент создаёт ощущение масштаба и порядка.',
                },
                {
                    title: 'Контент не помогает продажам',
                    text: 'Кадры есть, но они не работают как коммерческий инструмент.',
                    resolution:
                        'Решение: делаем материалы под сайт, рекламу и соцсети с понятной логикой использования.',
                },
                {
                    title: 'Нет системного digital-потока',
                    text: 'Один ролик не закрывает постоянную коммуникацию.',
                    resolution: 'Решение: reels и контент-серии помогают держать внимание аудитории.',
                },
                {
                    title: 'Слишком разрозненная подача',
                    text: 'Видео, фото и тексты живут отдельно друг от друга.',
                    resolution: 'Решение: собираем единый контент-пакет под бренд и продажи.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Можно ли снимать дилерский центр в рабочее время?',
                    answer: 'Да, строим план съёмки по зонам, чтобы минимально влиять на работу салона.',
                },
                {
                    question: 'Делаете ли вы контент для автообъявлений и площадок?',
                    answer: 'Да, подготавливаем материалы под листинги, сайт, соцсети и рекламу.',
                },
                {
                    question: 'Подходит ли это для премиальных и массовых брендов?',
                    answer: 'Да, формат адаптируется под позиционирование бренда и сегмент аудитории.',
                },
                {
                    question: 'Можно ли сделать регулярный контент-план?',
                    answer: 'Да, формируем ежемесячный или квартальный цикл продакшна.',
                },
                {
                    question: 'Делаете ли вы обзорный контент по конкретным моделям?',
                    answer: 'Да, снимаем отдельные model-based пакеты для ключевых автомобилей и предложений.',
                },
                {
                    question: 'Можно ли совместить видео салона, Reels и дрон в один день?',
                    answer:
                        'Да. Если объект подготовлен заранее, один съёмочный день может закрыть фасад, шоурум, площадку, несколько моделей, Reels и часть aerial-кадров.',
                },
                {
                    question: 'Нужно ли закрывать салон на время съёмки?',
                    answer:
                        'Не обязательно. Обычно делим съёмку по зонам и выбираем рабочие окна, чтобы не мешать клиентам, менеджерам и сервисной команде.',
                },
                {
                    question: 'Можно ли скрыть номера автомобилей?',
                    answer:
                        'Да. Номера можно закрыть до съёмки, подобрать ракурсы без акцента на них или обсудить постобработку для отдельных кадров.',
                },
                {
                    question: 'Делаете ли вы контент для MyAuto и объявлений?',
                    answer:
                        'Да. Можем подготовить фото, короткие видео, тексты и AI-описания так, чтобы материалы было удобно использовать в объявлениях и digital-каналах.',
                },
                {
                    question: 'Можно ли снять сервисную зону или детейлинг?',
                    answer:
                        'Да. Для сервиса и детейлинга отдельно показываем чистоту зоны, оборудование, процесс, детали работы и доверие к команде.',
                },
                {
                    question: 'Можно ли сделать только Reels без большого видео?',
                    answer:
                        'Да. Если задача в регулярных соцсетях или рекламе, можно начать с short-form пакета и позже расширить его до имиджевого видео.',
                },
                {
                    question: 'Сколько времени занимает подготовка материалов?',
                    answer:
                        'Черновые материалы обычно доступны в течение 24-48 часов. Монтаж роликов и контент-пакета зависит от объёма и согласуется перед стартом.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ КОНТЕНТ ДЛЯ ВАШЕГО АВТООБЪЕКТА',
                description:
                    'Оставьте контакты и краткий бриф. Подберём эффективный формат контента под продажи и вернемся с расчетом в течение рабочего часа.',
                taskPlaceholder:
                    'Например: обзор дилерского центра и серия reels по ключевым моделям.',
                serviceOptions: [
                    'Автобизнес',
                    'Видео центра',
                    'Аэросъёмка площадки',
                    'Reels для автобизнеса',
                    'Контент по моделям',
                    'Контент сервиса',
                    'AI-упаковка',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['auto'],
            },
            useDroneContact: true,
        },
    },

    businessService: {
        page: makePage({
            path: '/business-service',
            eyebrow: 'DIGITAL BUSINESS CONTENT',
            h1: 'Контент для бизнеса и коммерческих проектов',
            intro: 'Видео, aerial-съёмка, Reels и 360° туры для бизнеса, который хочет сильнее выглядеть в digital. Если ваша ниша не в списке — расскажите о задаче, подберём формат вместе.',
            heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80',
            panelServiceSlugs: ['imidzhevoe-video-biznesa', 'kontent-sayta-reklamy', 'reels-shorts'],
            trustHeading: 'Нам доверяют в коммерческих проектах',
            trustBadges: ['B2B', 'Retail', 'Сервисы', 'Коммерческая недвижимость', 'Локальные бренды', 'Сети'],
            trustLocation: 'Базирование в Тбилиси, выезды по Батуми и всей Грузии',
            relatedLinks: [
                { href: '/auto-service', title: 'Автобизнес', description: 'Контент для площадок и объектов с продажами.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Сервисная визуальная подача и доверие.' },
                { href: '/hotels-service', title: 'Отели', description: 'Hospitality-кейс визуальной упаковки.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Регулярный short-form и промо-контент.' },
            ],
            seoTitle: 'Контент для бизнеса в Тбилиси | Business Service — Breus Media',
            seoDescription: 'Видео, aerial, reels, 360° и digital-упаковка для бизнеса и коммерческих объектов в Грузии.',
            schemaServiceName: 'Business Content Service',
            schemaServiceType: 'Commercial media production service',
        }),
        data: {
            heroSubtitle:
                'Многие бизнес-задачи структурно похожи — презентация ценности, выстраивание доверия, усиление продаж и упаковка под digital-каналы. Мы понимаем этот контекст и умеем его решать.',
            heroSupportingLine:
                'Даже если ваша ниша не вписывается в стандартный список — расскажите о задаче, и мы найдём подходящий формат производства вместе.',
            socialProofStats: makeCommonSocialProof('business'),
            servicesHeading: 'Форматы, которые работают для бизнеса',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'imidzhevoe-video-kompanii',
                    title: 'Имиджевое видео компании',
                    category: 'ИНВЕСТИЦИИ · РЕПУТАЦИЯ · НАЙМ',
                    description:
                        'Упаковка сложных технологических решений в понятный визуальный язык. Транслируем миссию проекта для успешного питчинга перед инвесторами и привлечения топовых специалистов.',
                    price: 'ИННОВАЦИИ · СМЫСЛЫ · МАСШТАБ',
                    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
                    featured: true,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'demonstraciya-it-produkta',
                    title: 'Демонстрация IT-продукта',
                    category: 'ПРОДУКТ · UI/UX · АНИМАЦИЯ',
                    description:
                        'Динамичные скринкасты и 3D-моушн ролики интерфейсов мобильных и веб-приложений. Наглядно показывают ключевую ценность и функционал цифрового продукта.',
                    price: 'ИНТЕРФЕЙСЫ · МОУШН · ФУНКЦИОНАЛ',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'korporativnyy-kontent',
                    title: 'Корпоративный контент',
                    category: 'КОМАНДА · ОФИС · КУЛЬТУРА',
                    description:
                        'Съемка рабочих процессов в офисе, интервью с фаундерами и тимлидами команд разработки. Усиливает HR-бренд технологической компании и доверие клиентов.',
                    price: 'HR-БРЕНД · ИНТЕРВЬЮ · КОМАНДА',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'keys-stadi-video',
                    title: 'Кейс-стади в видео',
                    category: 'КЕЙСЫ · B2B · ЭКСПЕРТИЗА',
                    description:
                        'Наглядные видеоистории внедрения софта и успешных решений реальных проблем клиентов. Мощный инструмент для B2B-продаж и закрытия крупных контрактов.',
                    price: 'B2B · ВНЕДРЕНИЕ · РЕЗУЛЬТАТ',
                    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'reels-dlya-brenda',
                    title: 'Reels для бренда',
                    category: 'SOCIAL · ТРЕНДЫ · ОХВАТ',
                    description:
                        'Короткие технологичные инсайты, тренды индустрии и закулисье создания инноваций. Привлекают профильное внимание в профессиональном комьюнити.',
                    price: 'ИНСАЙТЫ · ТРЕНДЫ · ЭКСПЕРТИЗА',
                    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            processSteps: makeCommonProcessSteps('для бизнеса и коммерческого объекта'),
            map: makeCommonMap(
                'География коммерческих проектов',
                'Базирование в Тбилиси, выезды по Батуми и всей Грузии. Подбираем формат продакшна под офлайн-объект, digital-воронку и этап роста бизнеса.',
                'Карта покрытия'
            ),
            pricingHeading: 'Пакеты',
            pricingTagline: 'Пакеты для бизнеса и коммерческих объектов',
            pricingPlans: [
                {
                    title: 'Старт для бизнеса',
                    price: 'от 300 ₾',
                    features: ['Базовый продакшн-пакет', 'Материалы для сайта/соцсетей', 'Один финальный видеоролик'],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Контент-пакет',
                    price: 'от 650 ₾',
                    features: ['Видео + short-form + фото', 'Материалы под сайт и рекламу', 'Подготовка форматов под digital-каналы'],
                    buttonText: 'Обсудить этот формат →',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полная digital-упаковка',
                    price: 'от 950 ₾',
                    features: ['Видео, aerial, 360, AI-упаковка', 'Система материалов под продажу', 'Единая визуальная логика бренда'],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            painProofTitle: 'Почему бизнес не выглядит убедительно онлайн',
            painProofSupportingLine:
                'Клиент принимает решение ещё до контакта. Если digital-образ слабый, бизнес проигрывает более собранным конкурентам.',
            painProofCards: [
                {
                    title: 'Нет ясной визуальной подачи',
                    text: 'Клиенту сложно понять ценность бизнеса по разрозненным материалам.',
                    resolution: 'Решение: показываем ценность бизнеса через сильный контент и понятную структуру.',
                },
                {
                    title: 'Контент не помогает продажам',
                    text: 'Материалы делаются ради оформления, но не под точки принятия решения.',
                    resolution: 'Решение: делаем материалы не ради красоты, а под конкретные точки контакта.',
                },
                {
                    title: 'Слишком много подрядчиков',
                    text: 'Процесс растягивается, а визуальная подача теряет цельность.',
                    resolution: 'Решение: объединяем видео, aerial, reels, 360 и AI-упаковку в один процесс.',
                },
                {
                    title: 'Нет единой упаковки под каналы',
                    text: 'Сайт, соцсети и реклама требуют разный формат и подачу.',
                    resolution: 'Решение: подготавливаем материалы сразу под сайт, соцсети и рекламу.',
                },
            ],
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'С чего лучше начать?',
                    answer: 'Обычно начинаем с брифа и стартового пакета, чтобы быстро закрыть ключевые digital-точки.',
                },
                {
                    question: 'Можно ли собрать пакет под сайт и соцсети?',
                    answer: 'Да, это стандартный сценарий: делаем единый пакет под несколько каналов одновременно.',
                },
                {
                    question: 'Делаете ли вы 360 и видео одновременно?',
                    answer: 'Да, в рамках одного продакшн-цикла можно объединять видео, 360 и short-form форматы.',
                },
                {
                    question: 'Можно ли работать проектно?',
                    answer: 'Да, можно запускать разовые проекты или переходить на регулярный контент-план.',
                },
                {
                    question: 'Как быстро готовятся материалы?',
                    answer: 'Черновые материалы обычно доступны в течение 24-48 часов после съёмки.',
                },
            ],
            contact: {
                title: 'РАССКАЖИТЕ О СВОЁМ ПРОЕКТЕ',
                description:
                    'Многие задачи не вписываются в стандартный список — это нормально. Расскажите о бизнесе и задаче, и мы предложим подходящий формат производства. Отвечаем в течение рабочего часа.',
                taskPlaceholder: 'Например: нужно снять имиджевое видео и упаковать офис под продажи онлайн.',
                serviceOptions: [
                    'Имиджевое видео',
                    'Reels и Shorts',
                    '360° тур',
                    'Аэросъёмка',
                    'Другой формат',
                ],
                whatsappHref: 'https://wa.me/995501103183',
            },
        },
    },

    promoVideoService: {
        page: makePage({
            path: '/promo-video-service',
            eyebrow: 'PROMO VIDEO SERVICE',
            h1: 'Промо-видео для бизнеса и брендов',
            intro: 'Имиджевые, продуктовые и рекламные видео для бизнеса, пространств и проектов: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1800&q=80',
            panelServiceSlugs: ['promo-video-nedvizhimost', 'promo-video-oteli', 'promo-video-restorany'],
            trustHeading: 'Формат работает в разных сегментах бизнеса',
            trustBadges: ['Недвижимость', 'Отель', 'Ресторан', 'Автобизнес', 'Туризм', 'Клиника', 'Бизнес'],
            trustLocation: 'Базирование в Тбилиси, выезды по Батуми и всей Грузии',
            relatedLinks: [
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Промо-видео для объектов, ЖК и коммерческих пространств.' },
                { href: '/hotels-service', title: 'Отели', description: 'Промо-видео для бронирования и презентации сервиса.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Промо-подача атмосферы и концепции заведения.' },
                { href: '/auto-service', title: 'Автобизнес', description: 'Имиджевые и обзорные промо для автонаправления.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Промо для маршрутов, локаций и турпродуктов.' },
                { href: '/clinics-service', title: 'Клиники', description: 'Промо-видео для усиления доверия к сервису.' },
                { href: '#contact', title: 'Ваш бизнес', description: 'Промо-формат для коммерческих и бренд-задач.' },
            ],
            seoTitle: 'Промо-видео для бизнеса и брендов в Тбилиси | Promo Video Service — Breus Media',
            seoDescription:
                'Имиджевые, продуктовые и рекламные промо-видео для бизнеса, пространств и проектов: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            schemaServiceName: 'Promo Video Service',
            schemaServiceType: 'Promotional video production service',
        }),
        data: {
            heroSubtitle:
                'Имиджевые, продуктовые и рекламные видео для бизнеса, пространств и проектов: Базирование в Тбилиси, выезды по Батуми и всей Грузии.',
            heroSupportingLine:
                'Хорошее промо-видео не просто красиво выглядит — оно быстрее объясняет ценность бизнеса и усиливает доверие ещё до контакта.',
            socialProofStats: [
                { value: '2x', label: 'Быстрее понимание ценности оффера' },
                { value: '4K', label: 'Форматы под сайт, ads и соцсети' },
                { value: 'Short', label: 'Вертикальные и короткие cut-down версии' },
                { value: 'Hub', label: 'Один сервис для разных ниш бизнеса' },
            ],
            servicesHeading: 'Выберите, для какого направления нужен promo video',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'promo-video-nedvizhimost',
                    title: 'Промо-видео для недвижимости',
                    category: 'Объект · ЖК · Пространство',
                    description:
                        'Покажите объект, ЖК или пространство так, чтобы он выглядел сильнее в продаже и презентации.',
                    price: 'Promo Video · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    featured: true,
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'promo-video-oteli',
                    title: 'Промо-видео для отелей',
                    category: 'Гостеприимство · Бронирования · Атмосфера',
                    description:
                        'Создайте атмосферный ролик, который помогает гостю захотеть бронирование ещё до перехода на площадку.',
                    price: 'Promo Video · от 500 ₾',
                    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'promo-video-restorany',
                    title: 'Промо-видео для ресторанов',
                    category: 'Вайб · Подача · Бренд',
                    description: 'Передайте вайб, подачу, свет и настроение заведения до первого визита.',
                    price: 'Promo Video · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'promo-video-avtobiznes',
                    title: 'Промо-видео для автобизнеса',
                    category: 'Имидж · Обзор · Презентация',
                    description:
                        'Имиджевые и обзорные ролики для автосалонов, дилеров и премиальных площадок.',
                    price: 'Promo Video · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'promo-video-turizm',
                    title: 'Промо-видео для туризма',
                    category: 'Маршрут · Локация · Опыт',
                    description:
                        'Покажите маршрут, локацию или опыт так, чтобы человек захотел оказаться внутри этой истории.',
                    price: 'Promo Video · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'promo-video-kliniki',
                    title: 'Промо-видео для клиник',
                    category: 'Доверие · Среда · Сервис',
                    description:
                        'Сделайте видео, которое усиливает доверие к пространству, специалистам и сервису.',
                    price: 'Promo Video · от 350 ₾',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'promo-video-biznes',
                    title: 'Промо-видео для бизнеса',
                    category: 'Бренд · Коммерция · Digital',
                    description:
                        'Подходит для брендов, коммерческих объектов, сервисов, шоурумов и digital-презентации бизнеса.',
                    price: 'Promo Video · от 300 ₾',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Короткий бриф',
                    description: 'Фиксируем задачу, формат ролика, каналы размещения и ожидаемый результат.',
                },
                {
                    number: '02',
                    title: 'Сценарий и структура',
                    description: 'Собираем логику подачи: что и в какой последовательности должно работать на ценность.',
                },
                {
                    number: '03',
                    title: 'Съёмка и продакшн',
                    description: 'Проводим съёмку по согласованному плану с акцентом на смысл и визуальную целостность.',
                },
                {
                    number: '04',
                    title: 'Монтаж и адаптация',
                    description: 'Собираем финальный ролик и версии под нужные форматы и digital-каналы.',
                },
            ],
            map: makeCommonMap(
                'География промо-видео проектов',
                'Базирование в Тбилиси, выезды по Батуми и всей Грузии для бизнеса и брендов.',
                'Карта покрытия'
            ),
            pricingHeading: 'Что вы получаете на выходе',
            pricingTagline: 'Пакеты promo-видео и формат выдачи материалов',
            pricingPlans: [
                {
                    title: 'Старт promo',
                    price: 'от 350 ₾',
                    features: [
                        'Готовое промо-видео — ролик под сайт, рекламу, презентацию или соцсети.',
                        'Видео для digital-каналов — подходит для сайта, Instagram, TikTok, YouTube и рекламных кампаний.',
                        'Сценарную и визуальную логику — не просто съёмка, а понятная подача ценности бизнеса.',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'Стандартный promo-пакет',
                    price: 'от 650 ₾',
                    features: [
                        'Готовое промо-видео — под сайт, рекламу и презентацию.',
                        'Версии под разные форматы — горизонтальный, вертикальный и короткий cut-down при необходимости.',
                        'Видео для digital-каналов — единый пакет под ключевые площадки.',
                        'Сценарную и визуальную логику — структура ролика под бизнес-задачу.',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    featured: true,
                    tag: 'Популярно',
                },
                {
                    title: 'Полный promo-пакет',
                    price: 'от 950 ₾',
                    features: [
                        'Готовое промо-видео — основной ролик под коммуникацию бренда.',
                        'Версии под разные форматы — адаптация под кампании и платформы.',
                        'Материал, который можно использовать в продажах — промо помогает быстрее объяснить ценность предложения.',
                        'Видео для digital-каналов — подготовка под сайт, соцсети и рекламу.',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            painProofTitle: 'Почему бизнесу уже недостаточно просто “красивого ролика”',
            painProofSupportingLine:
                'Если видео не объясняет ценность, не удерживает внимание и не вписывается в воронку, оно остаётся просто красивым файлом, а не рабочим инструментом.',
            painProofCards: [
                {
                    title: 'Видео выглядит красиво, но не продаёт',
                    text: 'Без ясной идеи ролик не усиливает интерес и не помогает принять решение.',
                    resolution: 'Решение: строим видео вокруг смысла, а не только картинки.',
                },
                {
                    title: 'Неясно, где использовать ролик',
                    text: 'Один формат редко подходит сразу под сайт, рекламу и соцсети.',
                    resolution: 'Решение: готовим видео с пониманием каналов и сценариев использования.',
                },
                {
                    title: 'Бренд не запоминается',
                    text: 'Если ролик типовой, он не создаёт ощущения отличия от конкурентов.',
                    resolution: 'Решение: выделяем атмосферу, логику подачи и сильные стороны бренда.',
                },
                {
                    title: 'Слишком много хаоса в продакшне',
                    text: 'Когда съёмка, сценарий и маркетинг живут отдельно, результат размывается.',
                    resolution: 'Решение: собираем промо-видео как единый коммерческий инструмент.',
                },
            ],
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Чем промо-видео отличается от обычной съёмки?',
                    answer: 'Промо-видео строится вокруг бизнес-цели и сценарной логики, а не только вокруг красивых кадров.',
                },
                {
                    question: 'Можно ли сделать видео сразу под сайт и соцсети?',
                    answer: 'Да, мы сразу планируем съёмку и монтаж так, чтобы получить версии под сайт и ключевые соцплатформы.',
                },
                {
                    question: 'Вы помогаете со сценарием?',
                    answer: 'Да, сценарий и структура входят в процесс: вместе определяем смысловые акценты и подачу.',
                },
                {
                    question: 'Сколько времени занимает подготовка и монтаж?',
                    answer: 'Сроки зависят от задачи, но обычно черновой этап доступен в ближайшие рабочие дни после съёмки.',
                },
                {
                    question: 'Можно ли снять промо без большого продакшна?',
                    answer: 'Да, можно собрать рабочее промо-видео в компактном формате без перегруженного продакшна.',
                },
                {
                    question: 'Подходит ли промо-видео для рекламы?',
                    answer: 'Да, промо-видео подходит для рекламных кампаний и может адаптироваться под разные цели и форматы.',
                },
                {
                    question: 'Можно ли сделать короткие версии из одного ролика?',
                    answer: 'Да, из одного основного ролика делаем короткие cut-down версии для отдельных каналов.',
                },
            ],
            contact: {
                title: 'Обсудим промо-видео для вашего проекта',
                description:
                    'Подскажем, какой формат подойдёт именно вашему бизнесу, где видео лучше использовать и как собрать его без лишнего хаоса.',
                taskPlaceholder:
                    'Например: промо-видео для бренда с версиями под сайт, соцсети и рекламу.',
                serviceOptions: [
                    'Недвижимость',
                    'Отель',
                    'Ресторан',
                    'Автобизнес',
                    'Туризм',
                    'Клиника',
                    'Бизнес',
                ],
                whatsappHref: 'https://wa.me/995501103183',
            },
        },
    },

    realEstateService: {
        page: makePage({
            path: '/real-estate-service',
            eyebrow: 'REAL ESTATE CONTENT HUB',
            h1: 'Визуальный контент для недвижимости в Тбилиси и Грузии',
            intro:
                'Фото, видео, дрон, 360° туры, Reels и AI-визуализация для объектов недвижимости — под продажу, аренду, пресейл, удалённого покупателя и презентацию инвестору.',
            heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80',
            panelServiceSlugs: [
                'aerosemka-nedvizhimosti',
                '360-tour-nedvizhimosti',
                'reels-dlya-rieltorov',
            ],
            trustHeading: 'Форматы для недвижимости',
            trustBadges: ['Риелторы', 'Агентства', 'Девелоперы', 'Инвесторы', 'MyHome.ge', 'SS.ge'],
            trustLocation: 'Тбилиси и Грузия',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка', description: 'Дрон-фото и видео для объектов, районов, участков, ЖК и стройки.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивные туры для удалённого показа пространства до визита.' },
                { href: '/reels-service', title: 'Reels', description: 'Короткие вертикальные видео для объектов, агентств и личного бренда.' },
                { href: '/ai-visualization-service', title: 'AI-визуализация', description: 'AI staging, виртуальная меблировка и визуализация будущих объектов.' },
                { href: '/hotels-service', title: 'Отели', description: 'Визуальная упаковка номеров, апартаментов и hospitality-объектов.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для пространства, меню, атмосферы и локального маркетинга.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Видео, дрон и короткие форматы для маршрутов и travel-предложений.' },
            ],
            seoTitle: 'Визуальный контент для недвижимости в Тбилиси | Breus Media',
            seoDescription:
                'Фото, видео, дрон, 360° туры, Reels и AI-визуализация для недвижимости в Тбилиси и Грузии. Упаковка объектов под продажу, аренду и пресейл.',
            schemaServiceName: 'Визуальный контент для недвижимости',
            schemaServiceType: 'Real estate visual content and marketing',
        }),
        data: {
            heroDisplayTitle: 'Визуальный\nконтент для\nнедвижимости\nв Тбилиси\nи Грузии',
            heroDesktopDisplayTitle: 'Визуальный контент\nдля недвижимости\nв Тбилиси и Грузии',
            heroMobileCompact: true,
            heroLongHubLayout: true,
            heroSubtitle:
                'Фото, видео, дрон, 360° туры, Reels и AI-визуализация для объектов недвижимости — под продажу, аренду, пресейл, удалённого покупателя и презентацию инвестору.',
            heroSupportingLine: '',
            heroLeadParagraphs: [
                'Недвижимость продаётся не только ценой. Покупатель должен быстро понять планировку, район, масштаб, состояние объекта и сценарий жизни — ещё до первого звонка или показа.',
                'Мы помогаем выбрать формат под задачу: иногда достаточно сильного listing pack, иногда нужен 360° тур, аэросъёмка, Reels, AI staging или полноценное промо ЖК.',
                'Работаем с риелторами, агентствами, девелоперами и собственниками по Тбилиси и Грузии. Гео, язык и канал публикации учитываем до съёмки.',
            ],
            heroCards: [
                {
                    slug: 'aerosemka-nedvizhimosti',
                    title: 'Аэросъёмка недвижимости',
                    image: '/media/drone-service/real-estate-1.png',
                    tags: 'дрон · район · масштаб',
                    shortText: 'Показывает объект, район, двор, подъезды, виды и масштаб с воздуха.',
                    primaryCta: { label: 'Открыть услугу', href: '/drone-services/drone-real-estate' },
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: '360-tour-nedvizhimosti',
                    title: '360° тур',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    tags: 'тур · планировка · удалённый показ',
                    shortText: 'Покупатель проходит по объекту с телефона до визита и лучше понимает планировку.',
                    primaryCta: { label: 'Открыть услугу', href: '/360-tour-real-estate' },
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'reels-dlya-rieltorov',
                    title: 'Reels для риелторов',
                    image: reelsRealEstateImageTwo.src,
                    tags: 'Reels · агент · лиды',
                    shortText: 'Короткие вертикальные видео для объектов, агентств и личного бренда эксперта.',
                    primaryCta: { label: 'Открыть услугу', href: '/reels-promo/reels-realtor' },
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ai-staging',
                    title: 'AI staging',
                    image: aiStagingImageOne.src,
                    tags: 'AI · staging · интерьер',
                    shortText: 'Виртуальная меблировка и визуализация потенциала пустой квартиры или будущего объекта.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'promo-zhk',
                    title: 'Промо ЖК',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
                    tags: 'ЖК · пресейл · презентация',
                    shortText: 'Видео и визуальная упаковка комплекса для сайта, отдела продаж и инвесторов.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'monitoring-stroiki',
                    title: 'Мониторинг стройки',
                    image: '/media/drone-service/construction-monitoring-1.png',
                    tags: 'стройка · отчёт · инвестор',
                    shortText: 'Регулярные облёты стройки для отчётов, инвесторов и маркетинга проекта.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#services',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'Недвижимость',
                'аэросъёмка',
                '360° туры',
                'Reels',
                'AI staging',
                'Listing Pack',
                'промо ЖК',
                'видеотур',
                'мониторинг стройки',
                'MyHome.ge',
                'SS.ge',
                'инвесторы',
                'аренда',
                'пресейл',
                'Тбилиси',
                'Грузия',
            ],
            tickerItems: [
                'Недвижимость',
                'аэросъёмка',
                '360° туры',
                'Reels',
                'AI staging',
                'Listing Pack',
                'промо ЖК',
                'видеотур',
                'мониторинг стройки',
                'MyHome.ge',
                'SS.ge',
                'инвесторы',
                'аренда',
                'пресейл',
                'Тбилиси',
                'Грузия',
            ],
            servicesHeading: 'Восемь форматов для объектов недвижимости',
            servicesSubtitle:
                'Не один универсальный продукт, а набор форматов под разные задачи: листинг, пресейл, удалённый показ, личный бренд, реклама и отчётность.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'aerosemka-nedvizhimosti',
                    title: 'Аэросъёмка недвижимости',
                    category: 'Дрон · район · масштаб',
                    description:
                        'Дрон-фото и видео объекта, фасада, двора, района, подъездов и видов. Подходит домам, участкам, ЖК и объектам, где важен масштаб.',
                    price: 'дрон · район · масштаб',
                    image: '/media/drone-service/real-estate-1.png',
                    primaryHref: '/drone-services/drone-real-estate',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                    featured: true,
                },
                {
                    id: 2,
                    order: 2,
                    slug: '360-tour-nedvizhimosti',
                    title: '360° тур для недвижимости',
                    category: 'Тур · планировка · удалённый показ',
                    description:
                        'Интерактивный обход квартиры, дома или коммерческого помещения. Удалённый покупатель сам изучает планировку до визита.',
                    price: 'тур · планировка · удалённый показ',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    primaryHref: '/360-tour-real-estate',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'reels-dlya-rieltorov',
                    title: 'Reels для риелторов и агентств',
                    category: 'Instagram · TikTok · Shorts',
                    description:
                        'Вертикальные ролики для Instagram, TikTok и Shorts: объекты, советы, район, личный бренд и входящие обращения.',
                    price: 'Reels · агент · соцсети',
                    image: reelsRealEstateImageTwo.src,
                    imagePosition: 'center 42%',
                    primaryHref: '/reels-promo/reels-realtor',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'ai-visualizaciya-staging',
                    title: 'AI-визуализация и AI staging',
                    category: 'AI · staging · интерьер',
                    description:
                        'Виртуальная меблировка, визуализация будущего интерьера, экстерьера и потенциала пустого пространства.',
                    price: 'AI · staging · интерьер',
                    image: aiStagingImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'listing-pack',
                    title: 'Listing Pack',
                    category: 'Объявление · обложка · текст',
                    description:
                        'Базовая упаковка объявления: фото, короткое видео, обложка, текст и материалы под агрегаторы.',
                    price: 'листинг · агрегатор · первый контакт',
                    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'promo-zhk',
                    title: 'Промо ЖК',
                    category: 'ЖК · пресейл · презентация',
                    description:
                        'Презентационное видео комплекса: архитектура, двор, инфраструктура, виды, район и атмосфера проекта.',
                    price: 'ЖК · пресейл · инвесторы',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'videotur-obekta',
                    title: 'Видеотур объекта',
                    category: 'Walkthrough · маршрут · показ',
                    description:
                        'Маршрутный walkthrough по квартире, дому или коммерческому помещению с понятной логикой показа.',
                    price: 'видеотур · планировка · мессенджер',
                    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'monitoring-stroiki',
                    title: 'Мониторинг стройки',
                    category: 'Стройка · отчёт · инвестор',
                    description:
                        'Регулярные облёты стройки с фиксированных точек для визуального отчёта, маркетинга и инвесторов.',
                    price: 'стройка · динамика · отчёт',
                    image: '/media/drone-service/construction-monitoring-1.png',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            statsHeading: 'Недвижимость в цифрах',
            statsTagline:
                'Цифры показывают рыночный контекст, а не гарантию результата для конкретного объекта.',
            statsCards: [
                {
                    value: '52%',
                    label: 'риелторов используют дрон-фото и видео',
                    description:
                        'Аэросъёмка стала одним из заметных инструментов визуального маркетинга недвижимости.',
                    sourceLabel: 'NAR REALTOR Technology Survey 2025',
                    sourceUrl: 'https://www.nar.realtor/research-and-statistics/research-reports/realtor-technology-survey',
                },
                {
                    value: '68%',
                    label: 'чаще продавались дома с аэроснимками',
                    description:
                        'Данные MLS, цитируемые NAR, используются как аргумент в пользу дрон-контента в листингах.',
                    sourceLabel: 'NAR — Drones and Real Estate',
                    sourceUrl: 'https://www.nar.realtor/drones',
                },
                {
                    value: '49%',
                    label: 'агентов отмечают, что staging сокращает срок продажи',
                    description:
                        'Контекст для AI staging и визуальной подготовки пустых объектов.',
                    sourceLabel: 'NAR 2025 Profile of Home Staging',
                    sourceUrl: 'https://www.nar.realtor/newsroom/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market',
                },
                {
                    value: '76%',
                    label: 'покупателей выбирают товар с описанием на родном языке',
                    description:
                        'Контекст для RU / EN / KA описаний листингов и материалов для иностранной аудитории.',
                    sourceLabel: "CSA Research / Can't Read, Won't Buy",
                    sourceUrl: 'https://www.newswire.com/news/survey-of-8-709-consumers-in-29-countries-finds-that-76-prefer-21174283',
                },
            ],
            midCta: {
                heading: 'Не уверены, какой формат нужен объекту?',
                text:
                    'Расскажите, что продаёте или сдаёте: квартиру, дом, участок, ЖК, коммерческое помещение или стройку. Подберём формат под канал, аудиторию и бюджет.',
                buttonText: 'Подобрать формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Не “съёмка квартир”, а упаковка объекта под канал и аудиторию',
                paragraphs: [
                    'Один и тот же объект нужно показывать по-разному: для MyHome.ge важна сильная обложка и понятная карточка, для иностранного покупателя — видеотур и 360°, для нового ЖК — дрон, AI-визуализация и презентационный ролик.',
                    'Мы не продаём всем один и тот же формат. Иногда достаточно Listing Pack, иногда нужен пакет из аэросъёмки, Reels и 360° тура, а иногда выгоднее начать с AI staging и текста.',
                    'Задача страницы — помочь выбрать формат под объект, канал и аудиторию: собственник, риелтор, агентство, застройщик, инвестор или арендатор.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает визуальный контент в недвижимости',
                subtitle:
                    'Хорошая упаковка не продаёт объект сама по себе, но помогает быстрее объяснить ценность, отсеять нецелевых людей и показать объект без лишних слов.',
                items: [
                    {
                        pain: 'Объект теряется среди похожих объявлений',
                        solution:
                            'Listing Pack, сильная обложка, фото, видео и текст помогают карточке выглядеть понятнее в выдаче агрегатора.',
                    },
                    {
                        pain: 'Покупатель не понимает планировку по фото',
                        solution:
                            '360° тур или видеотур показывает связь комнат, маршрут и ощущение пространства до физического показа.',
                    },
                    {
                        pain: 'Удалённый покупатель не может приехать',
                        solution:
                            'Видеотур, 360° и материалы на понятном языке помогают принять первое решение из другой страны или города.',
                    },
                    {
                        pain: 'Объект ещё строится, а продавать уже нужно',
                        solution:
                            'Дрон, AI-визуализация и презентационное видео помогают показать будущий объект, район и потенциал проекта.',
                    },
                    {
                        pain: 'Пустая квартира выглядит холодно',
                        solution:
                            'AI staging показывает, как пространство может выглядеть с мебелью, светом и понятным сценарием жизни.',
                    },
                    {
                        pain: 'Риелтор зависит только от агрегаторов',
                        solution:
                            'Reels и личный бренд дают собственный поток внимания, а не только платное размещение на площадках.',
                    },
                    {
                        pain: 'Застройщику нужны материалы для отдела продаж',
                        solution:
                            'Промо ЖК, дрон, AI-визуализация и нарезки дают sales toolkit для встреч, презентаций, сайта и рекламы.',
                    },
                    {
                        pain: 'Агент тратит время на одинаковые объяснения',
                        solution:
                            'Один линк на видеотур, 360° или презентацию закрывает базовые вопросы до звонка и показа.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что выигрывает объект',
                earnTitle: 'Больше возможностей',
                earnItems: [
                    'Раньше показывает потенциал объекта, даже если он ещё строится или требует ремонта.',
                    'Открывает доступ к удалённым покупателям и инвесторам.',
                    'Даёт материалы для рекламы, презентаций, соцсетей и агрегаторов.',
                ],
                loseTitle: 'Меньше потерь',
                loseItems: [
                    'Меньше нецелевых показов: часть людей отсеивается до визита.',
                    'Меньше времени на объяснение планировки, района и состояния объекта.',
                    'Меньше риска демпинговать из-за слабой упаковки.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                intro: 'Состав зависит от выбранного формата и задачи объекта.',
                items: [
                    'фото интерьера, фасада и окружения',
                    'аэрофото и видео с дрона',
                    'горизонтальное видео для сайта и презентации',
                    'вертикальные ролики для Reels / Shorts / TikTok',
                    '360° тур или ссылка на интерактивный просмотр',
                    'AI staging / Before-After',
                    'тексты листинга RU / EN / KA',
                    'субтитры и титры',
                    'файлы в облачной папке',
                    'рекомендации, где какой формат использовать',
                ],
            },
            whyUs: {
                heading: 'Почему недвижимость снимают с нами',
                subtitle:
                    'Мы думаем не только о красивом кадре, а о том, где материал будет работать: в агрегаторе, рекламе, презентации, мессенджере или отделе продаж.',
                items: [
                    {
                        title: 'Подбираем формат под объект',
                        text: 'Не каждому объекту нужен полный пакет. Иногда достаточно фото и текста, иногда нужен дрон, 360° и Reels.',
                    },
                    {
                        title: 'Понимаем локальные каналы',
                        text: 'Учитываем MyHome.ge, SS.ge, соцсети, мессенджеры, презентации и разные типы покупателей в Грузии.',
                    },
                    {
                        title: 'Соединяем несколько форматов',
                        text: 'Можем собрать фото, дрон, 360°, Reels, AI staging и текст в один понятный пакет.',
                    },
                    {
                        title: 'Работаем с удалённым покупателем',
                        text: 'Материалы готовятся так, чтобы объект можно было показать человеку до визита и без долгих объяснений.',
                    },
                    {
                        title: 'Делаем материалы для продаж, а не просто архив',
                        text: 'Файлы, тексты и форматы структурируются под реальные каналы: агрегатор, сайт, реклама, презентация, WhatsApp, Telegram.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text: 'Снимаем городские объекты, загородные дома, участки, ЖК, коммерческие помещения и стройки под задачу.',
                    },
                ],
            },
            pricingHeading: 'Пакеты для недвижимости',
            pricingTagline:
                'Стоимость зависит от объекта, площади, локации, количества форматов и задачи: листинг, реклама, пресейл, отчёт или личный бренд. Финальная цена зависит от количества объектов, локаций, форматов, языков, необходимости дрона, 360°, Reels, AI-визуализации и частоты съёмок.',
            pricingPlans: [
                {
                    title: 'Listing Pack',
                    price: 'от 250 ₾',
                    subtitle: 'Базовая упаковка объекта для объявления и первого контакта',
                    features: [
                        'фото объекта',
                        'короткое видео или обложка',
                        'текст листинга',
                        'подготовка материалов под агрегатор',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Remote Buyer Pack',
                    price: 'от 450 ₾',
                    subtitle: 'Для удалённого покупателя, арендатора или инвестора',
                    features: [
                        'видеотур',
                        '360° тур при необходимости',
                        'субтитры или текстовое сопровождение',
                        'материалы для отправки в мессенджере',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                    featured: true,
                },
                {
                    title: 'Developer Pack',
                    price: 'от 850 ₾',
                    subtitle: 'Для ЖК, пресейла, инвесторов и отдела продаж',
                    features: [
                        'аэросъёмка объекта и района',
                        'промо-видео',
                        'AI-визуализация при необходимости',
                        'нарезки под соцсети',
                        'презентационные материалы',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Monitoring Pack',
                    price: 'от 350 ₾',
                    subtitle: 'Для визуального контроля стройки и регулярных отчётов',
                    features: [
                        'регулярные облёты',
                        'фото и видео с фиксированных точек',
                        'материалы для отчёта',
                        'визуальная динамика проекта',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
            ],
            pricingAddOns: {
                heading: 'Что может добавляться к пакету',
                items: [
                    'дополнительные объекты, комнаты, фасад, двор, район или коммерческие зоны',
                    'аэросъёмка, 360° тур, Reels-серия, AI staging или регулярный мониторинг',
                    'описания, субтитры и версии материалов на RU / EN / KA',
                    'адаптации под MyHome.ge, SS.ge, сайт, презентацию, рекламу и мессенджеры',
                ],
                note:
                    'Финальная смета зависит от типа объекта, площади, доступа, форматов, языков, частоты съёмки и необходимости визуализации.',
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Уточняем объект, задачу, канал публикации, аудиторию и формат: продажа, аренда, пресейл, отчёт или личный бренд.',
                },
                {
                    number: '02',
                    title: 'Выбор формата',
                    description:
                        'Подбираем, что нужно именно сейчас: фото, видео, дрон, 360° тур, Reels, AI staging, промо ЖК или мониторинг.',
                },
                {
                    number: '03',
                    title: 'Подготовка объекта',
                    description:
                        'Согласуем доступ, локацию, время, чек-лист подготовки, людей в кадре, нужные зоны и сценарий показа.',
                },
                {
                    number: '04',
                    title: 'Съёмка / производство',
                    description:
                        'Снимаем объект, собираем визуалы, делаем AI-визуализацию или 360°-тур в зависимости от выбранного пакета.',
                },
                {
                    number: '05',
                    title: 'Упаковка и передача',
                    description:
                        'Готовим файлы, тексты, субтитры, форматы под каналы и передаём материалы в понятной структуре.',
                },
            ],
            conditionsNote: {
                title: 'Что важно подготовить до съёмки',
                text:
                    'Для недвижимости заранее разделяем реальные материалы, визуализацию и каналы публикации, чтобы упаковка объекта была понятной и честной.',
                items: [
                    'подготовить объект: порядок, свет, открытые шторы, доступ к ключевым зонам, фасаду, двору или виду',
                    'согласовать факты для листинга: площадь, район, условия, особенности, ограничения и язык публикации',
                    'заранее решить, какие материалы нужны: объявление, сайт, презентация инвестору, Reels, 360° тур или мониторинг стройки',
                ],
                details:
                    'Если используется AI staging или визуализация, важно отделять реальное состояние объекта от концепта и не вводить покупателя в заблуждение.',
            },
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Какие услуги подходят для продажи квартиры?',
                    answer:
                        'Чаще всего начинают с Listing Pack: фото, обложка, короткое видео и текст объявления. Если квартира рассчитана на удалённого покупателя, добавляем видеотур или 360° тур. Если объект пустой, можно обсудить AI staging.',
                },
                {
                    question: 'Что лучше выбрать: фото, видео, дрон или 360° тур?',
                    answer:
                        'Это зависит от объекта и канала. Фото и текст закрывают базовый листинг, видеотур показывает маршрут, 360° тур помогает удалённому просмотру, а дрон нужен там, где важны район, двор, виды, участок или масштаб ЖК.',
                },
                {
                    question: 'Подходит ли это для удалённого покупателя?',
                    answer:
                        'Да. Для удалённого покупателя лучше работают видеотур, 360° тур, понятные фото, субтитры и описание на нужном языке. Такой пакет помогает принять первое решение до визита.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой объекта?',
                    answer:
                        'Нужен доступ к объекту, порядок в кадре, открытые шторы, включённый свет, согласованные зоны и базовая информация для текста: площадь, район, особенности, условия продажи или аренды.',
                },
                {
                    question: 'Делаете ли вы тексты для объявления?',
                    answer:
                        'Да. Можем подготовить текст листинга под агрегатор, сайт, презентацию или сообщение в мессенджере. Технические параметры объекта согласовываем перед публикацией.',
                },
                {
                    question: 'Можно ли сделать материалы на русском, английском и грузинском?',
                    answer:
                        'Да. Готовим описания, субтитры и короткие подписи RU / EN / KA. Это особенно полезно для иностранной аудитории, инвесторов и объектов, которые показывают удалённо.',
                },
                {
                    question: 'Подходит ли AI staging для пустой квартиры?',
                    answer:
                        'Да. AI staging помогает показать возможный сценарий жизни в пустом пространстве: мебель, свет, зонирование и настроение. При публикации важно не выдавать визуализацию за реальную меблировку.',
                },
                {
                    question: 'Можно ли снять строящийся ЖК?',
                    answer:
                        'Да. Для строящегося ЖК обычно используют дрон, промо-видео, AI-визуализацию, нарезки для соцсетей и материалы для отдела продаж или инвесторов.',
                },
                {
                    question: 'Делаете ли вы регулярный мониторинг стройки?',
                    answer:
                        'Да. Мониторинг стройки — это регулярные фото и видео с фиксированных точек для визуальной динамики проекта, отчётов, инвесторов и маркетинга. Это визуальный отчёт, не инженерное заключение.',
                },
                {
                    question: 'Можно ли заказать только Reels для риелтора?',
                    answer:
                        'Да. Можно заказать только вертикальные ролики для объекта, агентства или личного бренда риелтора. Если нужен отдельный формат, используем `/reels-real-estate` как подробную страницу услуги.',
                },
                {
                    question: 'Работаете ли вы с агентствами и застройщиками?',
                    answer:
                        'Да. Работаем с риелторами, агентствами, девелоперами, отделами продаж, инвесторами и собственниками. Формат подбираем под задачу, объект и канал публикации.',
                },
                {
                    question: 'Сколько стоит упаковка объекта?',
                    answer:
                        'Финальная стоимость зависит от типа объекта, площади, локации, количества форматов, языков, дрона, 360° тура, Reels, AI-визуализации и частоты съёмок. Поэтому на странице указано “по задаче”, а смету считаем после короткого брифа.',
                },
                {
                    question: 'Передаёте ли вы файлы для самостоятельной публикации?',
                    answer:
                        'Да. Передаём готовые файлы в понятной структуре: фото, видео, вертикальные версии, тексты, субтитры и ссылки на интерактивные материалы, если они входят в пакет.',
                },
                {
                    question: 'Работаете ли вы по всей Грузии?',
                    answer:
                        'Да. Основная зона — Тбилиси, также выезжаем по Грузии под задачу объекта, график и объём работ.',
                },
            ],
            contact: {
                title: 'Нужна упаковка объекта недвижимости?',
                description:
                    'Расскажите, что у вас: квартира, дом, участок, ЖК, коммерческое помещение или стройка. Подскажем, какой формат лучше начать первым.',
                taskPlaceholder:
                    'Например: квартира для продажи, нужен листинг и видеотур; или ЖК на пресейле, нужен дрон, AI staging и ролик.',
                serviceOptions: [
                    'Недвижимость',
                    'Дрон',
                    '360°',
                    'Reels',
                    'AI',
                    'Listing',
                    'Промо ЖК',
                    'Стройка',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['real-estate'],
            },
            useDroneContact: true,
        },
    },

    aiVisualizationService: {
        page: makePage({
            path: '/ai-visualization-service',
            eyebrow: 'AI VISUALIZATION SERVICE',
            h1: 'AI-визуализация для бизнеса в Тбилиси — визуал и тексты, которые можно публиковать',
            intro:
                'Гибридный AI-продакшн: нейросети ускоряют, дизайнер и редактор контролируют кадр, текст и финальную упаковку.',
            heroImage: aiInteriorImageOne.src,
            panelServiceSlugs: ['ai-viz-nedvizhimost', 'ai-staging-meblirovka', 'ai-produktovyj-vizual'],
            trustHeading: 'AI-форматы для бизнеса',
            trustBadges: ['AI staging', 'Меню', 'Товары', 'Авто', 'Отели', 'RU / EN / KA'],
            trustLocation: '',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка дроном', description: 'Реальные кадры объекта, территории и окружения для сайта, рекламы и презентации.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный показ существующего пространства до визита.' },
                { href: '/reels-service', title: 'Reels для бизнеса', description: 'Короткие вертикальные видео для соцсетей и рекламы.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Контент для объектов, ЖК, агентств и застройщиков.' },
                { href: '/hotels-service', title: 'Отели', description: 'Визуальная и текстовая упаковка для отелей и апартаментов.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Контент для блюд, меню, зала и сезонных предложений.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Контент для маршрутов, локаций и travel-предложений по Грузии.' },
            ],
            seoTitle: 'AI-визуализация для бизнеса в Тбилиси | Breus Media',
            seoDescription:
                'AI-визуализация, AI staging, продуктовые визуалы и тексты для бизнеса в Тбилиси и Грузии. Нейросети ускоряют, человек контролирует результат.',
            schemaServiceName: 'AI-визуализация для бизнеса',
            schemaServiceType: 'AI visualization and content service',
        }),
        data: {
            heroDisplayTitle: 'AI-визуализация\nдля бизнеса\nв Тбилиси',
            heroDesktopDisplayTitle: 'AI-визуализация\nдля бизнеса в Тбилиси',
            heroMobileCompact: true,
            heroSubtitle:
                'Гибридный AI-продакшн: нейросети ускоряют, дизайнер и редактор контролируют кадр, текст и финальную упаковку. Работаем для недвижимости, отелей, ресторанов, e-commerce, авто, туризма и локальных брендов в Тбилиси и по Грузии.',
            heroSupportingLine: '',
            heroLeadParagraphs: [
                'AI-визуализация — это не “нажать кнопку и получить картинку”. Мы используем AI как быстрый черновой инструмент, а финальный результат доводим руками: композиция, пропорции, цвета, текст, логотипы и общий смысл.',
                'На выходе клиент получает не просто генерации, а материалы для сайта, листинга, меню, рекламы, презентации или соцсетей.',
                'Если задачу честнее решить реальной съёмкой, дроном или 360°-туром, мы так и скажем. Наша задача — подобрать формат, а не продавать AI ради AI.',
            ],
            heroCards: [
                {
                    slug: 'nedvizhimost',
                    title: 'Недвижимость',
                    image: aiRealEstateImageOne.src,
                    tags: 'объекты · staging · пресейл',
                    shortText: 'AI staging, визуализация интерьера, экстерьера и будущего объекта до завершения ремонта или стройки.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
                {
                    slug: 'interery-prostranstva',
                    title: 'Интерьеры и пространства',
                    image: aiInteriorImageOne.src,
                    tags: 'интерьер · концепт · ремонт',
                    shortText: 'Концепты ремонта, редизайн зон, отели, рестораны, офисы и коммерческие помещения.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
                {
                    slug: 'produkty-ecommerce',
                    title: 'Продукты и e-commerce',
                    image: aiProductImageOne.src,
                    tags: 'товары · маркетплейс · реклама',
                    shortText: 'Товарные изображения, lifestyle-сцены, рекламные варианты и визуал под карточки товара.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
                {
                    slug: 'restorany-menu',
                    title: 'Рестораны и меню',
                    image: aiMenuDeliveryImageOne.src,
                    tags: 'меню · доставка · карточки',
                    shortText: 'Единый визуальный стиль блюд, карточки меню, delivery-упаковка и промо-баннеры.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
                {
                    slug: 'avtobiznes',
                    title: 'Автобизнес',
                    image: aiAutoImageOne.src,
                    tags: 'авто · фон · каталог',
                    shortText: 'Замена фона, визуальная упаковка авто, карточки для MyAuto, сайта дилера и соцсетей.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
                {
                    slug: 'oteli-turizm',
                    title: 'Отели и туризм',
                    image: hotelAiDescriptionsImageOne.src,
                    tags: 'отели · туризм · тексты',
                    shortText: 'Описание номеров, маршрутов, предложений и визуальная упаковка для гостей на RU / EN / KA.',
                    secondaryCta: { label: 'Обсудить AI-формат', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#pricing',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'earnLose',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'AI-визуализация',
                'AI staging',
                'интерьеры',
                'недвижимость',
                'продуктовый визуал',
                'меню',
                'авто',
                'отели',
                'туризм',
                'рекламные креативы',
                'RU',
                'EN',
                'KA',
                'Тбилиси',
                'Грузия',
                'человек контролирует результат',
            ],
            tickerItems: [
                'AI-визуализация',
                'AI staging',
                'интерьеры',
                'недвижимость',
                'продуктовый визуал',
                'меню',
                'авто',
                'отели',
                'туризм',
                'рекламные креативы',
                'RU',
                'EN',
                'KA',
                'Тбилиси',
                'Грузия',
                'человек контролирует результат',
            ],
            servicesHeading: 'Для каких задач подходит AI-визуализация',
            servicesSubtitle:
                'AI помогает быстрее показать то, что ещё не построено, не снято, не оформлено или существует только в идее.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'ai-viz-nedvizhimost',
                    title: 'Визуализация девелопмента',
                    category: 'Недвижимость',
                    description:
                        'Создание фотореалистичных экстерьеров и благоустройства территорий на основе архитектурных чертежей. Позволяет начать продажи объектов задолго до сдачи.',
                    price: 'ПРЕСЕЙЛ · АРХИТЕКТУРА · 3D',
                    image: aiRealEstateImageOne.src,
                    featured: true,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'ai-staging-meblirovka',
                    title: 'AI Staging интерьеров',
                    category: 'Листинги',
                    description:
                        'Виртуальная меблировка пустых помещений и стилизация белого каркаса под ключ в разных стилях. Помогает покупателям увидеть финальный потенциал жилья.',
                    price: 'МЕБЛИРОВКА · ДИЗАЙН · BEFORE/AFTER',
                    image: aiStagingImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 6,
                    order: 3,
                    slug: 'ai-kartochki-menyu-delivery',
                    title: 'AI-меню для delivery',
                    category: 'Рестораны',
                    description:
                        'Генерация аппетитных карточек блюд и рекламных баннеров для сервисов доставки. Обеспечивает единый премиальный стиль подачи и рост конверсии в заказ.',
                    price: 'ДОСТАВКА · СТИЛЬ · КОНВЕРСИЯ',
                    image: aiMenuDeliveryImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'ai-produktovyj-vizual',
                    title: 'Продуктовый визуал',
                    category: 'E-commerce',
                    description:
                        'Размещение товаров в стильных интерьерных и природных сценах без организации дорогих фотосессий. Идеально для e-commerce, каталогов и маркетплейсов.',
                    price: 'E-COMMERCE · КАТАЛОГ · СЦЕНЫ',
                    image: aiProductImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 3,
                    order: 5,
                    slug: 'ai-viz-prostranstv-intererov',
                    title: 'Концепты пространств',
                    category: 'Пространства',
                    description:
                        'Быстрая генерация дизайн-концепций для отелей, ресторанов и коммерческих помещений. Наглядный инструмент для согласования идей с инвесторами и партнерами.',
                    price: 'КОНЦЕПТ · ИНВЕСТОРЫ · СОГЛАСОВАНИЕ',
                    image: aiInteriorImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 5,
                    order: 6,
                    slug: 'ai-viz-avtobiznes',
                    title: 'AI-визуал для автобизнеса',
                    category: 'Авто',
                    description:
                        'Фото авто можно привести к аккуратному фону и единому стилю для сайта, MyAuto и рекламы.',
                    price: 'авто · фон · каталог',
                    image: aiAutoImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'ai-viz-brendy-marketing',
                    title: 'AI-визуал для брендов и рекламы',
                    category: 'Маркетинг',
                    description:
                        'Сеты креативов под кампании, A/B-тесты, соцсети, лендинги и рекламные форматы.',
                    price: 'креативы · тесты · ads',
                    image: aiBrandImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'ai-opisaniya-lokalizaciya-hotel',
                    title: 'AI-описания для отелей и туризма',
                    category: 'RU / EN / KA',
                    description:
                        'Описания номеров, маршрутов, услуг и предложений на RU / EN / KA с редакторской доводкой.',
                    price: 'отели · туризм · тексты',
                    image: hotelAiDescriptionsImageOne.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить AI-формат',
                },
            ],
            statsHeading: 'AI-визуализация в цифрах',
            statsTagline:
                'Цифры показывают рыночный контекст, а не гарантию результата для конкретного бизнеса.',
            statsCards: [
                {
                    value: '49%',
                    label: 'агентов отмечают, что staging сокращает срок продажи',
                    description: 'Контекст для AI staging и виртуальной меблировки пустых объектов.',
                    sourceLabel: 'NAR 2025 Profile of Home Staging',
                    sourceUrl: 'https://www.nar.realtor/newsroom/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market',
                },
                {
                    value: '83%',
                    label: 'агентов покупателей говорят, что staging помогает представить себя в объекте',
                    description: 'Аргумент в пользу визуального показа потенциала пустых квартир и домов.',
                    sourceLabel: 'NAR 2025 Profile of Home Staging',
                    sourceUrl: 'https://www.nar.realtor/newsroom/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market',
                },
                {
                    value: '76%',
                    label: 'покупателей выбирают товар с описанием на родном языке',
                    description: 'Контекст для мультиязычных описаний RU / EN / KA.',
                    sourceLabel: "CSA Research / Can't Read, Won't Buy",
                    sourceUrl: 'https://www.newswire.com/news/survey-of-8-709-consumers-in-29-countries-finds-that-76-prefer-21174283',
                },
                {
                    value: '40%',
                    label: 'не покупают на сайте без своего языка',
                    description: 'Почему локализация важна для отелей, туризма, недвижимости и e-commerce.',
                    sourceLabel: "CSA Research / Can't Read, Won't Buy",
                    sourceUrl: 'https://www.newswire.com/news/survey-of-8-709-consumers-in-29-countries-finds-that-76-prefer-21174283',
                },
            ],
            midCta: {
                heading: 'Расскажите задачу — мы скажем, где AI поможет, а где лучше снять',
                text:
                    'Иногда дешевле и честнее снять реальный кадр дроном или камерой, а потом доработать его AI. Мы подберём формат под задачу, канал и бюджет.',
                buttonText: 'Подобрать AI-формат',
                buttonHref: '#contact',
            },
            whatIsTour: {
                heading: 'Что такое AI-визуализация в нашем понимании',
                paragraphs: [
                    'AI-визуализация — это не автогенерат без контроля. Нейросеть помогает быстро собрать черновой визуал: интерьер, фон, товарную сцену, текст или рекламный вариант.',
                    'После этого включается человек: дизайнер проверяет пропорции, цвет, стиль, детали и артефакты, редактор доводит текст и смысл. Поэтому результат можно использовать в маркетинге, а не просто показать как эксперимент.',
                    'Мы называем это гибридным продакшном: AI ускоряет, команда контролирует качество и коммерческую применимость.',
                ],
            },
            painSolutions: {
                heading: 'Какие задачи закрывает AI-визуализация',
                subtitle:
                    'AI помогает быстрее упаковать визуал и тексты, когда объекта, студии, готового интерьера или большого бюджета на съёмку ещё нет.',
                items: [
                    {
                        pain: 'Объект ещё не построен, а продавать уже нужно',
                        solution:
                            'AI-визуализация помогает показать экстерьер, входную группу, двор или базовый интерьер по чертежу и референсам.',
                    },
                    {
                        pain: 'Пустая квартира не показывает потенциал',
                        solution:
                            'AI staging добавляет мебель, свет и декор, чтобы покупатель понял масштаб и возможный сценарий жизни в пространстве.',
                    },
                    {
                        pain: 'Меню и карточки блюд выглядят разрозненно',
                        solution:
                            'AI помогает привести фото к единому стилю, аккуратно оформить фон, свет и подачу для сайта или delivery-платформ.',
                    },
                    {
                        pain: 'Авто снято на парковке и теряется в выдаче',
                        solution:
                            'AI-визуал может заменить фон, выровнять подачу и подготовить изображения для MyAuto, сайта дилера или соцсетей.',
                    },
                    {
                        pain: 'Отелю или туру нужны тексты на нескольких языках',
                        solution:
                            'AI ускоряет черновики RU / EN / KA, а редактор доводит смысл, тон и локальный контекст.',
                    },
                    {
                        pain: 'Маркетингу нужно много креативов для тестов',
                        solution:
                            'Из одной идеи можно собрать несколько визуальных направлений под рекламу, лендинг, соцсети и презентацию.',
                    },
                ],
            },
            earnLose: {
                heading: 'Что бизнес выигрывает',
                earnTitle: 'Больше возможностей',
                earnItems: [
                    'Раньше показывает потенциал объекта, пока он ещё строится или ремонтируется.',
                    'Даёт больше вариантов для A/B-тестов рекламы.',
                    'Помогает говорить с клиентом на его языке: RU / EN / KA.',
                ],
                loseTitle: 'Меньше лишних затрат',
                loseItems: [
                    'Меньше зависимости от студии, реквизита и долгой логистики.',
                    'Меньше времени до запуска листинга, меню или рекламной кампании.',
                    'Меньше риска вложиться в ремонт, упаковку или концепт, не проверив визуально идею.',
                ],
            },
            deliverables: {
                heading: 'Что входит в работу',
                items: [
                    'изображения в высоком разрешении',
                    'варианты сцен, фонов, стилей и освещения',
                    'версии Before / After, если применимо',
                    'ресайзы под 1:1, 4:5, 9:16, 16:9',
                    'карточки товаров / меню / баннеры',
                    'тексты и описания RU / EN / KA, если входит в задачу',
                    'финальные файлы в облачной папке',
                    'краткая инструкция, где какой формат использовать',
                    'коммерческая лицензия на результат услуги',
                ],
            },
            whyUs: {
                heading: 'Почему делают AI-визуализацию с нами',
                subtitle:
                    'Мы не продаём “генерации”. Мы собираем материал, который можно использовать в продажах, рекламе, листингах и презентациях.',
                items: [
                    {
                        title: 'Человек контролирует результат',
                        text: 'AI ускоряет черновик, но финальные пропорции, цвета, детали и текст проверяются вручную.',
                    },
                    {
                        title: 'Подбираем формат под задачу',
                        text: 'Иногда нужен AI staging, иногда реальная съёмка, иногда дрон или 360°. Мы не тянем всё в AI, если это не самый точный путь.',
                    },
                    {
                        title: 'Думаем каналами',
                        text: 'Сайт, агрегатор, меню, реклама, презентация и соцсети требуют разных форматов и разных размеров файлов.',
                    },
                    {
                        title: 'Работаем с локальным контекстом',
                        text: 'Учитываем Тбилиси, Грузию, MyAuto, Wolt, Bolt, Booking, недвижимость и мультиязычные аудитории.',
                    },
                    {
                        title: 'Соединяем визуал и текст',
                        text: 'Можем сделать не только картинку, но и описание, подписи, FAQ, оффер и локализацию RU / EN / KA.',
                    },
                    {
                        title: 'Отдаём готовую структуру',
                        text: 'Файлы передаются в понятной папке: финалы, форматы, варианты, тексты и рекомендации по использованию.',
                    },
                ],
            },
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description: 'Уточняем задачу, аудиторию, канал публикации, формат, стиль, язык и ограничения.',
                },
                {
                    number: '02',
                    title: 'Исходники',
                    description: 'Собираем фото, чертежи, планы, референсы, брендбук, тексты и примеры результата, который нужен.',
                },
                {
                    number: '03',
                    title: 'AI-генерация',
                    description:
                        'Готовим несколько вариантов сцен, стилей, ракурсов или текстовых черновиков. Отсекаем то, что выглядит синтетично или не подходит задаче.',
                },
                {
                    number: '04',
                    title: 'Ручная доработка',
                    description: 'Проверяем пропорции, цвет, отражения, логотипы, текст, орфографию и соответствие брифу.',
                },
                {
                    number: '05',
                    title: 'Передача',
                    description: 'Отдаём финальные файлы, адаптации под форматы и коммерческую лицензию на результат услуги.',
                },
            ],
            processHeading: 'Как проходит работа',
            pricingHeading: 'Пакеты AI-визуализации',
            pricingTagline:
                'Стоимость зависит от количества исходников, сложности сцены, уровня ручной доработки, языков и форматов.',
            pricingPlans: [
                {
                    title: 'AI Старт',
                    price: 'от 300 ₾',
                    subtitle: 'Для одного объекта, блюда, товара или небольшой серии изображений',
                    features: [
                        'AI staging или базовая обработка 5–10 изображений',
                        '2–3 варианта стиля',
                        'ресайзы под листинг и соцсети',
                        'ручная проверка результата',
                        'передача финальных файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'AI Стандарт',
                    price: 'от 600 ₾',
                    subtitle: 'Для меню, мини-каталога, объекта недвижимости или серии товаров',
                    features: [
                        'пакетная обработка до 20 единиц',
                        'замена фонов и базовая стилизация',
                        'подготовка под агрегаторы, сайт или рекламу',
                        'один раунд правок по согласованию',
                        'финальная папка с файлами',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    featured: true,
                },
                {
                    title: 'AI Кампейн',
                    price: 'от 1500 ₾',
                    subtitle: 'Для рекламной кампании, пресейла, бренда или перезапуска объекта',
                    features: [
                        'расширенная генерация креативов',
                        'концепт-рендеры пространств или экстерьеров',
                        'адаптации под несколько форматов',
                        'несколько раундов правок по согласованию',
                        'финальная структура файлов для публикации',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
                {
                    title: 'AI Localization & Copy',
                    price: 'от 200 ₾',
                    subtitle: 'Тексты, описания, FAQ и локализация RU / EN / KA',
                    features: [
                        'AI-ассистированный копирайтинг',
                        'редакторская доводка',
                        'локализация на 2–3 языка',
                        'описания номеров, маршрутов, товаров и объектов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                },
            ],
            pricingAddOns: {
                heading: 'Как считать финальную стоимость',
                items: [
                    'количество исходников и финальных форматов',
                    'сложность сцены, фона, света и ручной доработки',
                    'наличие брендбука, референсов и текстов',
                    'число языков и объём редакторской работы',
                ],
                note:
                    'Финальная цена зависит от количества исходников, сложности сцены, наличия брендбука, числа языков и объёма ручной доработки.',
            },
            conditionsNote: {
                title: 'Что важно подготовить до AI-работы',
                text:
                    'Перед AI-производством важно отделить факты от визуальных гипотез и передать исходники, по которым можно проверить финал.',
                items: [
                    'передать исходники, референсы, брендовые ограничения, нужные размеры и каналы публикации',
                    'отдельно отметить, где нужен реалистичный результат, а где допустима концептуальная визуализация',
                    'согласовать факты, названия, составы, параметры объекта или продукта до финальной редакторской проверки',
                ],
                details:
                    'AI может ошибаться в деталях, тексте, геометрии и фактуре, поэтому финальные материалы проходят ручную проверку и не должны подменять реальные характеристики объекта.',
            },
            faqHeading: 'FAQ',
            faqItems: [
                {
                    question: 'Что такое AI-визуализация?',
                    answer:
                        'Это гибридный процесс, где AI помогает быстро собрать черновой визуал или текст, а человек проверяет композицию, пропорции, детали, смысл и готовность материала к публикации.',
                },
                {
                    question: 'Чем AI staging отличается от обычной визуализации интерьера?',
                    answer:
                        'AI staging работает с фото существующего помещения и добавляет мебель, свет и декор. Визуализация интерьера чаще строится по плану, референсам или идее будущего пространства.',
                },
                {
                    question: 'Можно ли использовать AI-визуалы в рекламе?',
                    answer:
                        'Да, если материал соответствует задаче, политике площадки и не вводит пользователя в заблуждение. Мы проверяем финальные файлы и при необходимости рекомендуем пометку “визуализация”.',
                },
                {
                    question: 'Что нужно от клиента для старта?',
                    answer:
                        'Нужны исходные фото, планы, чертежи, референсы, описание задачи, канал публикации, языки и ограничения бренда. Если исходников мало, мы скажем, что можно сделать честно.',
                },
                {
                    question: 'Можно ли сделать визуал по чертежу или плану?',
                    answer:
                        'Да, для презентаций, пресейла и концептов можно использовать чертёж, план, референсы и описание. Для точных инженерных решений лучше подключать профильную 3D-визуализацию.',
                },
                {
                    question: 'Можно ли обработать обычные фото с телефона?',
                    answer:
                        'Часто да: можно улучшить фон, свет, стиль и подготовить версии для сайта, меню, листинга или соцсетей. Если фото слишком тёмное или искажает объект, лучше переснять.',
                },
                {
                    question: 'Делаете ли вы тексты на русском, английском и грузинском?',
                    answer:
                        'Да. AI ускоряет черновик, но редактор доводит смысл, тон и локальный контекст, чтобы текст не выглядел машинным переводом.',
                },
                {
                    question: 'Можно ли использовать материалы в меню, листинге или на сайте?',
                    answer:
                        'Да. Мы готовим форматы под сайт, агрегатор, меню, карточку товара, презентацию, рекламу и соцсети, если это входит в задачу.',
                },
                {
                    question: 'AI заменяет фотографа?',
                    answer:
                        'Не всегда. Для реального пространства, людей, репортажа и фактур часто лучше съёмка. AI полезен для staging, вариантов, фонов, концептов, постобработки и текстов.',
                },
                {
                    question: 'Сколько стоит AI-визуализация?',
                    answer:
                        'Пакеты начинаются от 300 ₾. Финальная смета зависит от количества исходников, сложности сцены, форматов, языков и объёма ручной доработки.',
                },
                {
                    question: 'Передаёте ли вы исходники?',
                    answer:
                        'Мы передаём финальные файлы, адаптации и структуру для публикации. Передача рабочих исходников обсуждается отдельно до старта.',
                },
                {
                    question: 'Можно ли внести правки?',
                    answer:
                        'Да. Количество раундов правок фиксируется в выбранном пакете или смете. Правки согласовываются по задаче, чтобы не менять направление бесконечно.',
                },
                {
                    question: 'Подходит ли это для недвижимости, ресторанов, авто и отелей?',
                    answer:
                        'Да. Это основные сценарии: AI staging, визуализация интерьера, карточки меню, товарные сцены, автофото, описания номеров и туристических предложений.',
                },
                {
                    question: 'Какие ограничения есть у AI-визуализации?',
                    answer:
                        'AI может ошибаться в мелком тексте, отражениях, геометрии и деталях реального объекта. Поэтому финал проверяется человеком, а часть задач мы рекомендуем решать съёмкой.',
                },
            ],
            contact: {
                title: 'Нужна AI-визуализация для бизнеса?',
                description:
                    'Расскажите, что нужно показать: объект, интерьер, товар, меню, авто, отель, тур или рекламную идею. Подскажем, где AI поможет, а где лучше снять реальный материал.',
                taskPlaceholder:
                    'Например: AI staging квартиры, карточки меню, авто для MyAuto или описания отеля на RU / EN / KA.',
                serviceOptions: [
                    'AI-визуализация',
                    'AI staging',
                    'Недвижимость',
                    'Интерьеры',
                    'Продукты',
                    'Меню и delivery',
                    'Авто',
                    'Отели и туризм',
                    'Реклама',
                    'Тексты RU / EN / KA',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['AI-визуализация'],
            },
            useDroneContact: true,
        },
    },

    reelsService: {
        page: makePage({
            path: '/reels-service',
            eyebrow: 'REELS & SHORTS SERVICE',
            h1: 'Reels для бизнеса в Тбилиси — короткие видео для Instagram, TikTok и YouTube Shorts',
            intro: 'Снимаем вертикальные ролики для отелей, ресторанов, клиник, недвижимости, шоурумов, туризма и локального бизнеса в Тбилиси и по Грузии.',
            heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1800&q=80',
            panelServiceSlugs: ['nedvizhimost', 'oteli-apartamenty', 'restorany-kafe'],
            trustHeading: 'Reels-форматы для бизнеса',
            trustBadges: ['Instagram', 'TikTok', 'Shorts', 'Отели', 'Рестораны', 'Недвижимость'],
            trustLocation: 'Тбилиси и Грузия',
            relatedLinks: [
                { href: '/drone-service', title: 'Аэросъёмка дроном', description: 'Воздушные кадры объекта и территории для Reels, сайта и промо.' },
                { href: '/360-tours-service', title: '360° туры', description: 'Интерактивный просмотр объекта до визита.' },
                { href: '/ai-visualization-service', title: 'AI-визуализация', description: 'Визуальные материалы для объектов, продуктов и рекламы.' },
                { href: '/real-estate-service', title: 'Недвижимость', description: 'Контент для объектов, ЖК, агентств и застройщиков.' },
                { href: '/hotels-service', title: 'Отели', description: 'Контент для номеров, атмосферы и прямых бронирований.' },
                { href: '/restaurants-service', title: 'Рестораны', description: 'Видео и визуал для блюд, зала и сезонных предложений.' },
                { href: '/tourism-service', title: 'Туризм', description: 'Контент для маршрутов, локаций и активностей по Грузии.' },
            ],
            seoTitle: 'Reels для бизнеса в Тбилиси | Breus Media',
            seoDescription:
                'Reels для бизнеса в Тбилиси и по Грузии: один съёмочный день — пакет вертикальных видео для Instagram, TikTok и YouTube Shorts.',
            schemaServiceName: 'Reels для бизнеса',
            schemaServiceType: 'Short-form vertical video production',
        }),
        data: {
            heroDisplayTitle: 'Reels для бизнеса\nв Тбилиси\nкороткие видео\nдля соцсетей',
            heroMobileCompact: true,
            heroSubtitle:
                'Снимаем вертикальные ролики для отелей, ресторанов, клиник, недвижимости, шоурумов, туризма и локального бизнеса в Тбилиси и по Грузии.',
            heroSupportingLine: '',
            heroLeadParagraphs: [
                'Reels — это не случайное видео “между делом”. У ролика есть первые секунды, сценарий, ритм, субтитры и задача: удержать внимание и привести человека к следующему действию.',
                'Мы берём на себя съёмку, подготовку идеи, монтаж, субтитры, описание, передачу файлов и, в пакете ведения, публикацию в нужное время.',
                'Формат подходит, когда бизнесу нужен регулярный контент без ежедневной суеты: не думать каждый день “что выложить завтра”, а иметь понятный запас роликов.',
            ],
            heroCards: [
                {
                    slug: 'nedvizhimost',
                    title: 'Недвижимость',
                    image: reelsRealEstateImageTwo.src,
                    tags: 'объекты · ЖК · риелторы',
                    shortText: 'Короткий обход квартиры, дома или ЖК для Instagram, TikTok и YouTube Shorts.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'oteli-apartamenty',
                    title: 'Отели и апартаменты',
                    image: tourismImageFour.src,
                    tags: 'номера · завтраки · бронирования',
                    shortText: 'Номера, вид, завтрак, терраса и атмосфера объекта в коротком вертикальном формате.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'restorany-kafe',
                    title: 'Рестораны и кафе',
                    image: reelsRestaurantImageOne.src,
                    tags: 'еда · атмосфера · меню',
                    shortText: 'Подача блюд, атмосфера зала, терраса, команда и сезонные предложения.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'kliniki-beauty',
                    title: 'Клиники и beauty',
                    image: reelsClinicImageOne.src,
                    tags: 'доверие · эксперт · запись',
                    shortText: 'Ответы на вопросы, процесс, пространство клиники и доверие до первого визита.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'avtobiznes',
                    title: 'Автобизнес',
                    image: reelsAutoImageOne.src,
                    tags: 'авто · шоурум · товар',
                    shortText: 'Обзоры машин, поступления, детейлинг, до/после и шоурум.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'turizm-lokacii',
                    title: 'Туризм и локации',
                    image: tourismImageThree.src,
                    tags: 'туры · маршруты · Грузия',
                    shortText: 'Маршрут, виды, моменты тура и впечатление от поездки в коротком формате.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#pricing',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'deliverables',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            marqueeItems: [
                'Reels',
                'Shorts',
                'TikTok',
                'Instagram',
                'вертикальное видео',
                'рестораны',
                'отели',
                'недвижимость',
                'клиники',
                'авто',
                'туризм',
                'локальный бизнес',
                'субтитры',
                'описания',
                'Тбилиси',
                'Грузия',
            ],
            whatIsTour: {
                heading: 'Что такое Reels — простыми словами',
                paragraphs: [
                    'Reels — это короткие вертикальные видео для мобильной ленты. Такой формат используют Instagram Reels, TikTok и YouTube Shorts: 9:16, быстрый первый кадр, субтитры и понятный ритм.',
                    'Главная разница с промо-роликом — регулярность. Промо-видео снимают как имиджевый материал, а Reels работают как поток коротких касаний: продукт, процесс, эксперт, атмосфера, ответы на вопросы.',
                    'Для бизнеса Reels удобны тем, что один съёмочный день может дать несколько роликов под разные темы. Это помогает вести соцсети системно, а не снимать что-то в последний момент.',
                    'Готовые ролики можно использовать в Instagram, TikTok, YouTube Shorts, на сайте, в рекламе и в мессенджерах.',
                ],
            },
            statsHeading: 'Reels в цифрах',
            statsTagline:
                'Цифры показывают рыночный контекст формата, а не гарантию результата для конкретного бизнеса.',
            statsCards: [
                {
                    value: '200+ млрд',
                    label: 'воспроизведений Reels в день',
                    description: 'Instagram и Facebook вместе дают огромный объём потребления коротких видео.',
                    sourceLabel: 'Meta / отчетность',
                    sourceUrl: 'https://investor.atmeta.com/investor-events/event-details/2023/Q2-2023-Earnings/default.aspx',
                },
                {
                    value: '50%',
                    label: 'времени в Instagram уходит на Reels',
                    description: 'Короткие видео стали главным форматом внимания внутри Instagram.',
                    sourceLabel: 'Meta Q1 2024 / Statusphere',
                },
                {
                    value: '+36%',
                    label: 'охвата у Reels против каруселей',
                    description: 'По анализу аккаунтов брендов Reels дают больший reach, чем часть классических форматов.',
                    sourceLabel: 'Buffer Instagram Reach Analysis 2024',
                    sourceUrl: 'https://buffer.com/resources/instagram-reach-engagement-analysis/',
                },
                {
                    value: '55%',
                    label: 'просмотров от неподписчиков',
                    description: 'Reels помогают выходить за пределы текущей аудитории.',
                    sourceLabel: 'Meta / ShortsIntel',
                },
            ],
            servicesHeading: 'Для кого подходят Reels',
            servicesSubtitle:
                'Короткие вертикальные видео работают там, где важно быстро показать объект, атмосферу, продукт, человека или процесс.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'nedvizhimost',
                    title: 'Объекты и риелторы',
                    category: 'Недвижимость',
                    description:
                        'Динамичные вертикальные видео квартир, домов и коммерческих помещений. Захватывают внимание в первые секунды и переводят просмотры в заявки на показ.',
                    price: 'ПЕРВЫЕ СЕКУНДЫ · ПЛАНИРОВКА · CTA',
                    image: reelsRealEstateImageTwo.src,
                    imagePosition: 'center 42%',
                    primaryHref: '/reels-promo/reels-realtor',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'oteli-apartamenty',
                    title: 'Отели и апартаменты',
                    category: 'Отели и апартаменты',
                    description:
                        'Атмосферные ролики номеров, спа-комплексов, завтраков и панорамных видов. Формируют эмоциональное желание отдохнуть и стимулируют прямые бронирования.',
                    price: 'АТМОСФЕРА · НОМЕРА · ПРЯМАЯ БРОНЬ',
                    image: tourismImageFour.src,
                    imagePosition: 'center 36%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'restorany-kafe',
                    title: 'Рестораны и гастрономия',
                    category: 'Рестораны и кафе',
                    description:
                        'Эстетичная подача блюд крупным планом, процесс приготовления, авторские коктейли и вечерний свет. Вызывают мгновенный аппетит и желание забронировать стол.',
                    price: 'ФУД-КАДРЫ · СВЕТ · АППЕТИТ',
                    image: reelsRestaurantImageOne.src,
                    imagePosition: 'center 38%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'kliniki-beauty',
                    title: 'Медицина и beauty',
                    category: 'Клиники и beauty',
                    description:
                        'Экспертные разборы, знакомство с докторами, демонстрация премиального оборудования и процедур. Снимают возражения и укрепляют доверие к клинике.',
                    price: 'ЭКСПЕРТИЗА · ВРАЧИ · ДОВЕРИЕ',
                    image: reelsClinicImageOne.src,
                    imagePosition: 'center 34%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'avto-showrooms',
                    title: 'Автобизнес',
                    category: 'Автосалоны и шоурумы',
                    description:
                        'Эффектные обзоры автомобилей в движении, детали салона и сочный звук выхлопа. Создают статусную картинку для автосалонов, проката и детейлинга.',
                    price: 'ДИНАМИКА · ДЕТАЛИ · СТАТУС',
                    image: reelsAutoImageOne.src,
                    imagePosition: 'center 35%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'turizm-lokacii',
                    title: 'Reels для туров и активностей',
                    category: 'Туризм и локации',
                    description:
                        'Маршрут, виды, впечатление, гид, транспорт, еда и моменты поездки.',
                    price: 'туры · маршруты · Грузия',
                    image: tourismImageThree.src,
                    imagePosition: 'center 32%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 7,
                    order: 7,
                    slug: 'lichnyj-brend',
                    title: 'Reels для экспертов',
                    category: 'Личный бренд эксперта',
                    description:
                        'Говорящая голова + B-roll: эксперт объясняет, показывает процесс и отвечает на частые вопросы.',
                    price: 'эксперт · доверие · вопросы',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    imagePosition: 'center 30%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 8,
                    order: 8,
                    slug: 'lokalnyj-biznes',
                    title: 'Reels для локального бизнеса',
                    category: 'Локальный бизнес',
                    description:
                        'Коворкинги, фитнес, магазины, салоны, студии и пространства, которым нужна живая подача.',
                    price: 'место · команда · атмосфера',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    imagePosition: 'center 30%',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            midCta: {
                heading: 'Не знаете, сколько роликов нужно?',
                text: 'Расскажите нишу, площадки и задачу — предложим формат: один ролик, пакет из трёх или ведение с регулярной публикацией.',
                buttonText: 'Обсудить задачу',
                buttonHref: '#contact',
            },
            painSolutions: {
                heading: 'Какие задачи закрывают Reels',
                items: [
                    {
                        pain: 'Соцсети выглядят мёртвыми',
                        solution:
                            'Один съёмочный день даёт запас роликов. Бизнесу не нужно каждый день решать, что срочно снять и выложить.',
                    },
                    {
                        pain: 'Фото не передают атмосферу',
                        solution:
                            'Короткое видео показывает движение, звук, людей, пространство и детали — то, что сложно почувствовать по одной фотографии.',
                    },
                    {
                        pain: 'Рекламные креативы быстро выгорают',
                        solution:
                            'Reels можно использовать как основу для новых гипотез в рекламе: разные хуки, первые кадры, объекты и сценарии.',
                    },
                    {
                        pain: 'Владелец сам снимает всё на телефон',
                        solution:
                            'Мы забираем продакшн под ключ: идея, съёмка, монтаж, субтитры, описания и передача файлов.',
                    },
                    {
                        pain: 'Клиент не понимает продукт до визита',
                        solution:
                            'Ролик показывает, как выглядит услуга, пространство, блюдо, машина, номер или объект в реальном сценарии.',
                    },
                    {
                        pain: 'Бизнес выглядит безликим',
                        solution:
                            'Reels с лицом владельца, команды или эксперта помогают строить доверие, а не только показывать товар.',
                    },
                ],
            },
            pricingAddOns: {
                heading: 'Что влияет на формат и стоимость Reels',
                items: [
                    'количество роликов, сюжетов, локаций и съёмочных дней',
                    'участие владельца, команды, эксперта, гостей или моделей в кадре',
                    'субтитры, описания, обложки, рекламные версии и адаптации под разные площадки',
                    'нужна ли только передача файлов или регулярная публикация с сопровождением',
                    'нужны ли дополнительные форматы: дрон, 360° тур, AI-визуалы или фото',
                ],
                note: 'Reels не гарантируют рост просмотров, продаж или заявок: результат зависит от ниши, предложения, публикаций и дальнейшей работы с аудиторией.',
            },
            deliverables: {
                heading: 'Что входит в работу',
                intro: 'Компактный набор работ зависит от выбранного пакета и задачи.',
                items: [
                    'Подготовка идеи или сюжета под нишу и площадки.',
                    'Приезд на локацию и съёмка под вертикальный формат.',
                    'Монтаж роликов, субтитры и финальная упаковка под соцсети.',
                    'Описание или подпись к публикации.',
                    'Передача готовых файлов в понятной структуре.',
                    'В пакете ведения — публикация в согласованное время и сопровождение контента.',
                ],
            },
            whyUs: {
                heading: 'Почему снимают Reels с нами',
                items: [
                    {
                        title: 'Думаем сериями',
                        text: 'Планируем не один ролик, а набор тем: продукт, процесс, атмосфера, эксперт, ответы на вопросы.',
                    },
                    {
                        title: 'Снимаем под мобильную ленту',
                        text: 'Кадр, движение, текст и первые секунды собираются под вертикальный формат, а не просто обрезаются из горизонтального видео.',
                    },
                    {
                        title: 'Берём на себя подготовку',
                        text: 'Помогаем с идеей, сюжетом, кадрами, субтитрами и описаниями, чтобы бизнес не оставался один на один с контентом.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text: 'Выезжаем на объекты, в рестораны, отели, клиники, шоурумы и локации по задаче.',
                    },
                    {
                        title: 'Связываем Reels с другими услугами',
                        text: 'При необходимости добавляем аэросъёмку, 360° тур или AI-визуалы, чтобы контент работал в общей системе.',
                    },
                    {
                        title: 'Отдаём готовый материал',
                        text: 'Ролики, субтитры, описания и файлы передаются в понятной структуре, а в пакете ведения ещё и публикуются.',
                    },
                ],
            },
            pricingHeading: 'Пакеты Reels',
            pricingTagline:
                'Можно начать с одного ролика, собрать мини-пакет или передать нам регулярную публикацию.',
            pricingPlans: [
                {
                    title: 'Один ролик',
                    price: 'от 200 ₾',
                    subtitle: 'Когда нужно быстро проверить формат или снять одну конкретную тему',
                    features: [
                        'приезд на локацию',
                        'подготовка идеи / сюжета',
                        'съёмка',
                        'монтаж вертикального ролика',
                        'субтитры',
                        'описание / подпись к публикации',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Пакет 3 ролика',
                    price: 'от 450 ₾',
                    subtitle: 'Мини-серия для одной услуги, объекта, места или рекламной гипотезы. По 150 ₾ за ролик.',
                    features: [
                        '3 готовых ролика',
                        'подготовка идей / сюжетов',
                        'съёмка',
                        'возможны до 2 выездов по задаче',
                        'монтаж',
                        'субтитры',
                        'описания / подписи',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                    featured: true,
                    popular: true,
                    tag: 'Мини-пакет',
                },
                {
                    title: 'Ведение Reels',
                    price: 'от 1000 ₾',
                    subtitle: 'Регулярный контент и публикации без ежедневной нагрузки на команду',
                    features: [
                        'от 6 готовых роликов',
                        'до 3 выездов',
                        'подготовка идей и сюжетов',
                        'съёмка',
                        'монтаж',
                        'субтитры',
                        'описания / подписи',
                        'публикация в согласованное время',
                        'сопровождение контента',
                        'передача файлов',
                    ],
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
            ],
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Обсуждаем нишу, цель роликов, площадки, аудиторию и темы. Решаем, нужен один ролик, пакет или ведение.',
                },
                {
                    number: '02',
                    title: 'Идеи и сюжет',
                    description:
                        'Готовим сценарии: что показываем в первые секунды, какие кадры нужны, где будет текст, какой будет призыв к действию.',
                },
                {
                    number: '03',
                    title: 'Съёмка',
                    description:
                        'Приезжаем на локацию и снимаем сразу под вертикальный формат. Если нужен пакет, собираем несколько сюжетов за один или несколько выездов.',
                },
                {
                    number: '04',
                    title: 'Монтаж и субтитры',
                    description:
                        'Собираем ролики под мобильную ленту: ритм, первый кадр, субтитры, описание и финальная упаковка.',
                },
                {
                    number: '05',
                    title: 'Передача или публикация',
                    description:
                        'Передаём файлы в облаке. В пакете ведения публикуем ролики в согласованное время и сопровождаем контент.',
                },
            ],
            processHeading: 'Как проходит работа',
            conditionsNote: {
                title: 'Что важно подготовить до съёмки Reels',
                text:
                    'Для коротких роликов заранее выбираем темы, первые секунды и формат публикации, чтобы съёмочный день дал не хаос, а серию готовых сюжетов.',
                items: [
                    'согласовать темы, офферы, площадки публикации, участников в кадре и ограничения бренда',
                    'подготовить локацию, продукт, блюда, объект, форму команды или детали, которые должны попасть в первые секунды',
                    'заранее решить, нужны ли субтитры, описания, публикация, рекламные версии или только передача файлов',
                ],
                details:
                    'Reels не гарантируют просмотры, продажи или заявки: результат зависит от публикации, предложения, частоты, аудитории и дальнейшей работы с контентом.',
            },
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Что входит в один Reels?',
                    answer:
                        'В один ролик входит подготовка идеи или сюжета, съёмка на локации, монтаж вертикального видео, субтитры, описание или подпись и передача готового файла.',
                },
                {
                    question: 'Сколько стоит один ролик?',
                    answer:
                        'Один ролик стоит от 200 ₾. Финальная стоимость зависит от локации, количества сцен, участия людей в кадре и сложности съёмки.',
                },
                {
                    question: 'Почему пакет из трёх роликов дешевле за ролик?',
                    answer:
                        'Пакет дешевле за ролик, потому что часть подготовки, выезда и съёмки объединяется. За один или несколько выездов можно собрать материалы сразу для мини-серии.',
                },
                {
                    question: 'Что входит в ведение Reels?',
                    answer:
                        'Ведение включает от 6 готовых роликов, подготовку идей, съёмку, монтаж, субтитры, описания, публикацию в согласованное время, сопровождение контента и передачу файлов.',
                },
                {
                    question: 'Вы сами публикуете ролики?',
                    answer:
                        'Да, но только в пакете ведения. В обычных пакетах мы передаём готовые ролики, субтитры, описания и файлы, а публикацией занимается клиент или его команда.',
                },
                {
                    question: 'Можно ли заказать только съёмку без ведения?',
                    answer:
                        'Да. Можно заказать один ролик или пакет из трёх роликов без регулярной публикации. В этом случае мы отдаём готовые материалы для ваших соцсетей.',
                },
                {
                    question: 'Нужно ли нам готовить сценарии?',
                    answer:
                        'Нет. Мы помогаем с идеями, структурой ролика, первыми секундами, кадрами и текстом. Если у вас уже есть темы, используем их как основу.',
                },
                {
                    question: 'Можно ли снимать сотрудников или владельца?',
                    answer:
                        'Да. Reels с владельцем, командой или экспертом часто помогают объяснить услугу и построить доверие. Мы заранее обсуждаем, кто будет в кадре и какую роль он выполняет.',
                },
                {
                    question: 'Подходит ли Reels для ресторана, отеля, недвижимости или клиники?',
                    answer:
                        'Да. Формат особенно полезен там, где важно показать объект, атмосферу, процесс, продукт или человека: рестораны и кафе, отели, недвижимость, клиники, beauty, авто и туризм.',
                },
                {
                    question: 'Делаете ли вы субтитры?',
                    answer:
                        'Да. Субтитры входят в пакеты, потому что многие смотрят короткие видео без звука. Текст помогает удержать внимание и быстрее объяснить смысл ролика.',
                },
                {
                    question: 'Можно ли использовать ролики в рекламе?',
                    answer:
                        'Да. Готовые ролики можно использовать в Instagram, TikTok, YouTube Shorts, на сайте, в мессенджерах и как основу для рекламных гипотез.',
                },
                {
                    question: 'Передаёте ли вы исходники?',
                    answer:
                        'Готовые файлы передаются всегда. Передача исходников обсуждается отдельно под задачу, объём материалов и дальнейшее использование.',
                },
                {
                    question: 'Можно ли снять несколько локаций?',
                    answer:
                        'Да. Несколько локаций можно заложить в пакет или отдельную смету. Стоимость зависит от расстояния, количества сцен и нужного числа выездов.',
                },
                {
                    question: 'Работаете ли вы по Грузии?',
                    answer:
                        'Да. Основная зона работы — Тбилиси, также выезжаем по Грузии под задачу проекта.',
                },
            ],
            contact: {
                title: 'Нужны Reels для бизнеса?',
                description:
                    'Расскажите нишу, локацию и задачу — подскажем, нужен один ролик, пакет из трёх или ведение.',
                taskPlaceholder:
                    'Например: нужны Reels для ресторана, отеля, объекта недвижимости, клиники или локального бизнеса.',
                serviceOptions: [
                    'Reels',
                    'Недвижимость',
                    'Отели и апартаменты',
                    'Рестораны и кафе',
                    'Клиники и beauty',
                    'Автобизнес',
                    'Туризм',
                    'Локальный бизнес',
                ],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['reels'],
            },
            useDroneContact: true,
        },
    },

    tours360Service: {
        page: makePage({
            path: '/360-tours-service',
            eyebrow: '360° TOURS SERVICE',
            h1: '360° туры для бизнеса в Тбилиси — объект можно осмотреть до визита',
            intro: 'Снимаем интерактивные 360° туры в Тбилиси и по Грузии для отелей, ресторанов, клиник, автосалонов, офисов и объектов недвижимости.',
            heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=80',
            panelServiceSlugs: ['nedvizhimost', 'oteli-apartamenty', 'restorany-kafe'],
            trustHeading: '360° туры для объектов',
            trustBadges: ['Недвижимость', 'Отели', 'Рестораны', 'Клиники', 'Шоурумы', 'Офисы'],
            trustLocation: 'Тбилиси и Грузия',
            relatedLinks: [
                {
                    href: '/360-tour-real-estate',
                    title: '360° тур для недвижимости',
                    description: 'Квартиры, дома и ЖК — тур заменяет первый просмотр для удалённых покупателей.',
                },
                {
                    href: '/real-estate-service',
                    title: 'Недвижимость',
                    description: 'Визуальный контент для недвижимости: фото, видео, дрон, 360° и Reels.',
                },
                {
                    href: '/drone-service',
                    title: 'Аэросъёмка дроном',
                    description: 'Воздушные кадры объекта и территории — работают в связке с 360° туром.',
                },
                {
                    href: '/reels-service',
                    title: 'Reels и короткие видео',
                    description: 'Короткие вертикальные ролики дополняют тур и помогают довести клиента до заявки.',
                },
                {
                    href: '/hotels-service',
                    title: 'Отели',
                    description: 'Визуальная упаковка номеров, апартаментов и территории.',
                },
                {
                    href: '/restaurants-service',
                    title: 'Рестораны',
                    description: 'Контент для пространства, атмосферы и меню.',
                },
                {
                    href: '/ai-visualization-service',
                    title: 'AI-визуализация',
                    description: 'AI staging и визуализация пространства.',
                },
            ],
            seoTitle: '360° туры для бизнеса в Тбилиси | Breus Media',
            seoDescription:
                '360° виртуальные туры в Тбилиси и по Грузии: отели, рестораны, клиники, шоурумы, офисы и недвижимость. Объект можно осмотреть до визита. От 200 ₾.',
            schemaServiceName: '360° виртуальные туры',
            schemaServiceType: '360-degree virtual tours',
        }),
        data: {
            heroDisplayTitle: '360° ТУРЫ\nДЛЯ БИЗНЕСА\nВ ГРУЗИИ',
            heroDisplayAccentLine: 'В ГРУЗИИ',
            heroSubtitle:
                '360° тур — это интерактивный просмотр объекта по ссылке. Клиент сам проходит по комнатам, зонам или маршруту до визита.',
            heroSupportingLine: '',
            heroCards: [
                {
                    slug: 'nedvizhimost',
                    title: 'Недвижимость',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    tags: 'квартиры · дома · коммерческие помещения',
                    shortText:
                        'Квартиры, дома, апартаменты и коммерческие помещения. Покупатель или арендатор оценивает планировку, метраж и состояние объекта до визита.',
                    primaryCta: { label: 'Открыть услугу', href: '/360-tour-real-estate' },
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'oteli-apartamenty',
                    title: 'Отели и апартаменты',
                    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
                    tags: 'номера · общие зоны · инфраструктура',
                    shortText:
                        'Гость заранее видит номер, общие зоны и инфраструктуру. Тур работает на сайте, в карточках бронирования и в ответах на запросы в мессенджерах.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'restorany-kafe',
                    title: 'Рестораны и кафе',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    tags: 'зал · посадка · веранда',
                    shortText:
                        'Гость видит зал, посадку и веранду до брони. Удобно при выборе зоны под банкет, день рождения или закрытое мероприятие.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'kliniki-medicina',
                    title: 'Клиники и медицинские центры',
                    image: reelsClinicImageFive.src,
                    tags: 'ресепшен · кабинеты · общие зоны',
                    shortText:
                        'Пациент знакомится с клиникой до приёма: ресепшн, кабинеты, общие зоны. Снижает тревожность первого визита и помогает выбрать клинику.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'showrooms-auto',
                    title: 'Автосалоны и шоурумы',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    tags: 'выкладка · пространство · шоурум',
                    shortText:
                        'Клиент осматривает шоурум и выкладку до приезда. Подходит для дилеров, мебельных салонов, шоурумов одежды и техники.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
                {
                    slug: 'ofisy-kovorkingi',
                    title: 'Офисы и коворкинги',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    tags: 'переговорные · рабочие зоны · планировка',
                    shortText:
                        'Арендатор оценивает планировку, рабочие места и переговорные удалённо. Тур работает как интерактивная планировка к коммерческому предложению.',
                    secondaryCta: { label: 'Обсудить задачу', href: '#contact' },
                },
            ],
            heroLeadParagraphs: [
                'Формат подходит для недвижимости, отелей, ресторанов, клиник, шоурумов и офисов.',
                'Тур открывается в браузере, работает по ссылке и помогает показать пространство до звонка, показа или бронирования.',
            ],
            heroPrimaryCtaLabel: 'Обсудить съёмку',
            heroPrimaryCtaHref: '#contact',
            heroSecondaryCtaLabel: 'Посмотреть тарифы →',
            heroSecondaryCtaHref: '#pricing',
            sectionOrder: [
                'services',
                'socialProof',
                'midCta',
                'whatIsTour',
                'painSolutions',
                'whyUs',
                'pricing',
                'pricingAddOns',
                'process',
                'conditionsNote',
                'faq',
                'relatedLinks',
                'contact',
            ],
            sectionLinks: [
                { label: 'Услуги', href: '#services' },
                { label: 'Цены', href: '#pricing' },
                { label: 'Процесс', href: '#process' },
                { label: 'FAQ', href: '#faq' },
            ],
            singleTickerMode: true,
            tickerExcludeTexts: ['Промо видео', 'Promo Video'],
            whatIsTour: {
                heading: 'Что такое 360° тур',
                paragraphs: [
                    '360° тур — это онлайн-просмотр объекта, где человек сам выбирает маршрут: заходит в комнаты, зоны или точки съёмки.',
                    'В отличие от видео, тур не ведёт зрителя по готовому сценарию. Пользователь сам останавливается, осматривается и возвращается к деталям.',
                    'Тур открывается по ссылке, работает в браузере и может быть встроен на сайт или отправлен в мессенджере.',
                ],
            },
            statsHeading: '360° туры в цифрах',
            statsCards: [
                {
                    value: 'До визита',
                    label: 'Объект можно изучить до звонка, показа или бронирования.',
                    description: 'Объект можно изучить до звонка, показа или бронирования.',
                    sourceLabel: 'Путь клиента',
                },
                {
                    value: '1 ссылка',
                    label: 'Тур удобно отправить в мессенджере, письме или коммерческом предложении.',
                    description: 'Тур удобно отправить в мессенджере, письме или коммерческом предложении.',
                    sourceLabel: 'Формат передачи',
                },
                {
                    value: 'На сайте',
                    label: 'Интерактивный просмотр встраивается в страницу объекта или услуги.',
                    description: 'Интерактивный просмотр встраивается в страницу объекта или услуги.',
                    sourceLabel: 'Встроенный просмотр',
                },
                {
                    value: 'С телефона',
                    label: 'Тур открывается в браузере без установки приложения.',
                    description: 'Тур открывается в браузере без установки приложения.',
                    sourceLabel: 'Мобильный доступ',
                },
            ],
            servicesHeading: 'Для кого подходит 360° тур',
            servicesSubtitle: 'Шесть направлений, где 360° тур закрывает понятную задачу бизнеса.',
            services: [
                {
                    id: 1,
                    order: 1,
                    slug: 'nedvizhimost',
                    title: 'Недвижимость',
                    category: 'Квартиры · Дома · Коммерческие помещения',
                    description:
                        'Интерактивный тур по квартире, дому или коммерческому объекту. Покупатель или арендатор свободно перемещается между комнатами и оценивает планировку до очного визита.',
                    price: 'ПЛАНИРОВКА · МЕТРАЖ · СОСТОЯНИЕ',
                    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
                    primaryHref: '/360-tour-real-estate',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 2,
                    order: 2,
                    slug: 'oteli-apartamenty',
                    title: 'Отели и курорты',
                    category: 'Номера · Общие зоны · Инфраструктура',
                    description:
                        'Полный цифровой обзор номеров, лобби, спа и прилегающей территории. Гость детально изучает условия проживания и быстрее принимает решение о бронировании.',
                    price: 'НОМЕРА · ТЕРРИТОРИЯ · СПА-ЗОНЫ',
                    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
                    primaryHref: '/360-tour-hotels',
                    primaryCtaLabel: 'Открыть услугу',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 3,
                    order: 3,
                    slug: 'restorany-kafe',
                    title: 'Рестораны и веранды',
                    category: 'Зал · Посадка · Веранда',
                    description:
                        'Демонстрация интерьера, зонирования столов, банкетных залов и видовых террас. Упрощает выбор локации для свадеб, корпоративов и закрытых вечеров.',
                    price: 'ОСНОВНОЙ ЗАЛ · ВЕРАНДА · VIP',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 4,
                    order: 4,
                    slug: 'kliniki-medicina',
                    title: 'Клиники и медицина',
                    category: 'Ресепшн · Кабинеты · Общие зоны',
                    description:
                        'Виртуальная экскурсия по зонам приема, диагностическим кабинетам и стационару. Снижает тревожность пациентов и формирует доверие к стандартам стерильности.',
                    price: 'ЗОНА ПРИЕМА · КАБИНЕТЫ · СТЕРИЛЬНОСТЬ',
                    image: reelsClinicImageFive.src,
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 5,
                    order: 5,
                    slug: 'showrooms-auto',
                    title: 'Автосалоны и шоурумы',
                    category: 'Выкладка · Шоурум · Демонстрация',
                    description:
                        'Интерактивная прогулка по дилерскому центру и выставочным зонам с возможностью заглянуть в салон автомобиля. Повышает интерес к актуальному модельному ряду.',
                    price: 'ШОУРУМ · САЛОН АВТО · СКЛАД',
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
                {
                    id: 6,
                    order: 6,
                    slug: 'ofisy-kovorkingi',
                    title: 'Офисы, коворкинги, бизнес-пространства',
                    category: 'Планировка · Рабочие места · Переговорные',
                    description:
                        'Арендатор оценивает планировку, рабочие места и переговорные удалённо. Тур работает как интерактивная планировка к коммерческому предложению.',
                    price: 'Коммерческое предложение · Удалённый просмотр',
                    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
                    secondaryHref: '#contact',
                    secondaryCtaLabel: 'Обсудить задачу',
                },
            ],
            painSolutions: {
                heading: 'Какие задачи закрывает 360° тур',
                items: [
                    {
                        pain: 'Клиент не понимает пространство по фото',
                        solution:
                            'Тур показывает планировку и связь зон между собой. Человек проходит маршрут сам — путаницы с метражом и расположением комнат не остаётся.',
                    },
                    {
                        pain: 'Слишком много нецелевых показов и выездов',
                        solution:
                            'Часть клиентов отсеивается до звонка — те, кому объект не подходит, понимают это в туре. На физический показ приезжают уже подготовленные.',
                    },
                    {
                        pain: 'Удалённый клиент просит ещё фото, ещё видео, ещё ракурс',
                        solution:
                            'Отвечаете одной ссылкой на тур. Дальше разговор уже про условия, а не про «а с другой стороны можно?».',
                    },
                    {
                        pain: 'Сайт не передаёт ощущения масштаба и атмосферы',
                        solution:
                            'Тур встраивается в карточку объекта через код вставки и работает прямо на странице. Посетитель сразу видит реальное пространство, а не только обложки.',
                    },
                    {
                        pain: 'Сложно объяснить маршрут, зоны и детали в переписке',
                        solution:
                            'В мессенджере вместо длинного описания и пачки фото — одна ссылка. Клиент сам открывает нужные точки.',
                    },
                    {
                        pain: 'Объект сложный — несколько этажей, зон или планировок',
                        solution:
                            'Тур связывает зоны переходами и подписями. Многоэтажный или крупный объект становится понятным за один обход.',
                    },
                ],
            },
            midCta: {
                text: 'Не нашли свой формат? Расскажите задачу — подберём пакет под объект и рассчитаем смету.',
                buttonText: 'Обсудить проект',
                buttonHref: '#contact',
            },
            pricingHeading: 'Пакеты туров',
            pricingTagline: '',
            pricingPlans: [
                {
                    title: 'Старт',
                    price: 'от 200 ₾',
                    subtitle: 'Для одной квартиры, студии, апартамента под посуточную аренду',
                    features: [
                        'До 6 точек съёмки (2–3 комнаты + кухня + ванная + прихожая)',
                        'Ссылка на тур + iframe-код',
                        'Панорама для карточки в Google Maps',
                        'Передача — от 48 часов',
                    ],
                    note: 'Хороший старт, чтобы увидеть формат и проверить, как тур работает на одном объекте.',
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
                {
                    title: 'Стандарт',
                    price: 'от 450 ₾',
                    subtitle: 'Для просторной квартиры, дома, коммерческого помещения, типовой планировки ЖК',
                    features: [
                        'До 15 точек съёмки (все комнаты + вид из окон + подъезд + двор)',
                        'Ссылка + iframe-код',
                        'Точки перехода (hotspot) с названиями комнат и метражом',
                        'Панорама для Google Maps',
                        'Передача — от 72 часов',
                    ],
                    note: 'Самый частый выбор — для агентств, инвест-продаж и застройщиков ЖК.',
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                    featured: true,
                    popular: true,
                    tag: 'Popular',
                },
                {
                    title: 'Полный объект',
                    price: 'от 900 ₾',
                    subtitle: 'Для многоуровневого дома, особняка, ЖК с несколькими типовыми планировками, офисного комплекса',
                    features: [
                        'От 20 точек — все этажи, все планировки, МОП, двор, прилегающая территория',
                        'Ссылка + iframe + несколько маршрутов (по этажам или по квартирам)',
                        'Точки перехода с описаниями и кнопкой «забронировать показ»',
                        'Панорама для Google Maps',
                        'Передача — от 5 рабочих дней',
                    ],
                    note: 'Подходит для застройщиков ЖК, продажи элитных домов, коммерческих объектов и B2B-презентаций.',
                    buttonText: 'Обсудить этот формат →',
                    buttonHref: '#contact',
                },
            ],
            pricingAddOns: {
                heading: 'Дополнительно по задаче',
                items: [
                    'Обновление тура (ремонт, смена мебели, новая очередь ЖК): от 150 ₾',
                    'Точка перехода с кнопкой «забронировать показ»: +80 ₾',
                    'Текстовые описания комнат на RU / EN / GE: +100 ₾',
                ],
            },
            processHeading: 'Как проходит работа',
            processSteps: [
                {
                    number: '01',
                    title: 'Бриф',
                    description:
                        'Обсуждаем объект, задачу и куда пойдёт тур: сайт, карточка объекта, мессенджер, презентация. Фиксируем зоны, которые важно показать.',
                },
                {
                    number: '02',
                    title: 'План точек и маршрут',
                    description:
                        'Согласуем список зон и логику переходов. Если на объекте идёт работа или живут люди — подбираем удобное окно для съёмки.',
                },
                {
                    number: '03',
                    title: 'Съёмка на объекте',
                    description:
                        'Снимаем за один визит. Работаем аккуратно, без постановочной мебели и реквизита. Жизнь объекта не останавливаем.',
                },
                {
                    number: '04',
                    title: 'Сборка тура',
                    description:
                        'Собираем панорамы в единый маршрут с переходами и подписями. Адаптируем под мобильный просмотр.',
                },
                {
                    number: '05',
                    title: 'Передача и публикация',
                    description:
                        'Отдаём ссылку и код для встраивания на сайт. Помогаем с публикацией там, где это нужно.',
                },
            ],
            conditionsNote: {
                title: 'Что важно подготовить до съёмки 360° тура',
                text:
                    '360° тур показывает объект детальнее обычного фото, поэтому до съёмки нужно продумать маршрут, порядок и ограничения показа.',
                items: [
                    'согласовать зоны, точки съёмки, маршрут переходов, подписи и места, которые нельзя показывать',
                    'подготовить пространство: порядок, свет, открытые проходы, отсутствие лишних вещей и людей без согласия',
                    'заранее решить, где тур будет использоваться: сайт, карточка объекта, презентация, мессенджер или коммерческое предложение',
                ],
                details:
                    '360° тур показывает пространство детально, поэтому подготовка объекта особенно важна: всё, что остаётся в зоне обзора, будет видно пользователю.',
            },
            whyUs: {
                heading: 'Почему снимают с нами',
                items: [
                    {
                        title: 'Собираем тур под задачу, а не просто панорамы',
                        text: 'До съёмки разбираемся, где тур будет жить и зачем нужен. От этого меняется и маршрут, и плотность точек — тур для сайта отеля и тур для презентации офиса собираются по-разному.',
                    },
                    {
                        title: 'Думаем о месте, где тур будет работать',
                        text: 'Карточка объекта на сайте, объявление, презентация, переписка в мессенджере — у каждого канала свои требования к туру.',
                    },
                    {
                        title: 'Структура точек понятна пользователю',
                        text: 'Маршрут собран так, чтобы человек не путался: понятные переходы, логика обхода и подписи там, где они нужны.',
                    },
                    {
                        title: 'Учитываем мобильный просмотр',
                        text: 'Большинство клиентов открывают тур с телефона. Проверяем, что переходы и подписи работают на маленьком экране.',
                    },
                    {
                        title: 'Связываем 360° с другим контентом',
                        text: 'Тур может работать в одной связке с аэросъёмкой, Reels и AI-визуализацией — это полезно для отелей, ЖК, шоурумов и туристических локаций.',
                    },
                    {
                        title: 'Работаем по Тбилиси и Грузии',
                        text: 'Снимаем в Тбилиси и выезжаем по Грузии под объект. Команда говорит на русском, английском и грузинском.',
                    },
                ],
            },
            faqHeading: 'Частые вопросы',
            faqItems: [
                {
                    question: 'Что такое 360° тур?',
                    answer:
                        '360° тур — это интерактивный онлайн-просмотр объекта. Человек сам переходит между точками съёмки, выбирает, куда смотреть, и изучает пространство в своём темпе.',
                },
                {
                    question: 'Чем 360° тур отличается от обычного видео?',
                    answer:
                        'В видео маршрут задаёт оператор. В 360° туре маршрут выбирает сам пользователь: он может остановиться, осмотреться и вернуться к нужной зоне. Это особенно полезно, когда нужно показать планировку и связь помещений.',
                },
                {
                    question: 'Сколько стоит 360° тур?',
                    answer:
                        'Базовые пакеты: Старт от 200 ₾, Стандарт от 450 ₾, Полный объект от 900 ₾. Финальная стоимость зависит от площади, количества точек и сложности сборки. Точную смету называем после короткого брифа по объекту.',
                },
                {
                    question: 'Где можно разместить 360° тур?',
                    answer:
                        'Тур можно отправить по ссылке в мессенджере, письме или коммерческом предложении. При необходимости его встраивают на сайт через типовой код вставки.',
                },
                {
                    question: 'Можно ли смотреть тур с телефона?',
                    answer:
                        'Да. Тур открывается в браузере на телефоне, планшете и компьютере без установки приложения.',
                },
                {
                    question: 'Что нужно подготовить перед съёмкой?',
                    answer:
                        'Нужно определить, какие зоны важно показать, и выбрать время, когда объект выглядит аккуратно и удобно для съёмки. Остальное согласуем во время короткого брифа.',
                },
                {
                    question: 'Сколько точек нужно для объекта?',
                    answer:
                        'Количество точек зависит от площади, логики маршрута и того, насколько подробно нужно показать объект. Это согласуем после короткого обсуждения задачи.',
                },
                {
                    question: 'Можно ли встроить тур на сайт?',
                    answer:
                        'Да. Мы передаём ссылку и код для встраивания, чтобы тур можно было разместить на странице объекта, услуги или отдельном лендинге.',
                },
                {
                    question: 'Можно ли обновить тур после ремонта или изменения интерьера?',
                    answer:
                        'Да. Если объект изменился, можно переснять нужные зоны и обновить маршрут без полной пересборки с нуля. Условия обновления обсуждаются под задачу.',
                },
                {
                    question: 'Можно ли добавить подписи, кнопки или переходы?',
                    answer:
                        'Да. Подписи зон, кнопки действия и дополнительные переходы можно добавить по задаче или в расширенных пакетах.',
                },
                {
                    question: 'Как выбрать пакет?',
                    answer:
                        'Ориентируемся на размер объекта, количество зон и то, где тур будет использоваться: на сайте, в переписке, в коммерческом предложении или в карточке объекта.',
                },
                {
                    question: 'Подходит ли 360° тур для отеля, ресторана, клиники или шоурума?',
                    answer:
                        'Да. Тур особенно полезен там, где само пространство влияет на выбор клиента: отели и апартаменты, рестораны, клиники, шоурумы, офисы и объекты недвижимости.',
                },
                {
                    question: 'Как передаётся готовый тур?',
                    answer:
                        'После сборки передаём ссылку на тур и код для встраивания. Дальше его можно использовать в тех каналах, которые подходят под вашу задачу.',
                },
                {
                    question: 'Входит ли хранение и публикация тура?',
                    answer:
                        'Условия хранения и публикации обсуждаются под задачу. Мы заранее уточняем, где тур будет размещаться и какой формат передачи нужен.',
                },
            ],
            contact: {
                title: 'ОБСУДИМ 360° ТУР ДЛЯ ВАШЕГО ОБЪЕКТА',
                description:
                    'Подскажем, какие зоны важно показать, сколько точек съёмки нужно и как удобнее использовать тур: на сайте, в мессенджерах, в карточке объекта или в презентации.',
                taskPlaceholder:
                    'Например: нужен тур для квартиры, отеля или ресторана, чтобы клиент мог осмотреть пространство до визита.',
                serviceOptions: ['360° тур', 'Недвижимость', 'Отели и апартаменты', 'Ресторан', 'Клиника', 'Автосалон', 'Офис', 'Другое пространство'],
                whatsappHref: 'https://wa.me/995501103183',
                preselectedServices: ['360° тур'],
            },
            useDroneContact: true,
        },
    },
};
