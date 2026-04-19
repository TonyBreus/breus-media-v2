import Image from 'next/image';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { HeroSlideshow } from '@/components/drone-restaurants/HeroSlideshow';
import { FormatExamplesSlideshow } from '@/components/drone-restaurants/FormatExamplesSlideshow';
import formatExampleOne from '@/services-images/drone-restaurants/final/4.png';
import formatExampleTwo from '@/services-images/drone-restaurants/final/2.png';
import formatExampleThree from '@/services-images/drone-restaurants/final/3.png';

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

type ShortQa = {
    question: string;
    answer: string;
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
        stat: 'На 31% быстрее',
        label: 'закрываются сделки с виртуальными турами',
        description: 'Листинги с интерактивным 3D-контентом уходят на треть быстрее обычных — и в среднем на 9% дороже.',
        source: 'Redfin / Matterport',
        sourceUrl: 'https://matterport.com/real-estate',
    },
    {
        stat: 'В 2 раза',
        label: 'больше целевого интереса на картах',
        description: 'Карточки объектов и компаний в Google с интегрированным визуальным туром получают вдвое больше звонков и маршрутов.',
        source: 'Google Business / Street View',
        sourceUrl: 'https://www.google.com/streetview/business/',
    },
    {
        stat: '+300%',
        label: 'времени на странице объекта',
        description: 'Пользователи проводят в 3–10 раз больше времени на странице ЖК или квартиры, где есть интерактивный визуальный контент.',
        source: 'Matterport Industry Report',
        sourceUrl: 'https://matterport.com/blog/what-is-a-3d-virtual-tour',
    },
    {
        stat: '−40%',
        label: 'снижение показателя отказов',
        description: '360°- и видеоконтент резко снижает bounce rate на сайтах застройщиков — пользователь сразу вовлекается в интерфейс.',
        source: 'ScienceDirect (Elsevier)',
        sourceUrl: 'https://www.sciencedirect.com/search?qs=virtual%20tour%20real%20estate',
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
    { image: formatExampleOne, alt: 'Аэросъёмка ЖК в Тбилиси — дрон показывает фасад и территорию комплекса' },
    { image: formatExampleTwo, alt: 'FPV-пролёт по типовому этажу квартиры — съёмка дроном внутри' },
    { image: formatExampleThree, alt: 'Аэросъёмка недвижимости в Тбилиси — кадр с дрона для объявления и презентации' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const whyUsCards: CardItem[] = [
    {
        title: 'Снимаем под решение о покупке',
        text: 'Решение смотреть объект или пролистывать дальше принимается за несколько секунд. Мы снимаем не ради красивого пролёта, а чтобы покупатель понял: где объект, какой вид, что рядом — и записался на показ.',
    },
    {
        title: 'Аэро + FPV за один визит',
        text: 'Плавные кадры снаружи с воздуха + пролёт компактным дроном Avata 2 внутри по лобби, типовому этажу или квартире. Один выезд закрывает оба слоя — не нужно согласовывать две съёмки.',
    },
    {
        title: 'Форматы под все площадки сразу',
        text: 'Из одной съёмки — вертикальные Reels, горизонтальные ролики для сайта и MyHome.ge, статичные фото для карточки в Google Maps и инвест-презентации. Один съёмочный день — все каналы.',
    },
    {
        title: 'Понимаем разрешения в Тбилиси',
        text: 'Историческая застройка (Мтацминда, Сололаки, Авлабари), зоны возле аэропорта и правительственных объектов — знаем, где можно летать и какие согласования нужны заранее. Не теряем время на сюрпризы.',
    },
    {
        title: 'Контент под удалённого покупателя',
        text: 'Снимаем так, чтобы инвестор из ЕС, Израиля или Дубая мог принять решение по видео. Акцент на район, подходы, вид из окон — на то, что человек хочет увидеть до прилёта.',
    },
    {
        title: 'Материал работает больше одного сезона',
        text: 'Снимаем без привязки к конкретной рекламной кампании или сезонному оформлению — кадры актуальны минимум год и продолжают работать на следующих очередях ЖК или перепродаже.',
    },
];

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
            'Видео в 4K + фото в высоком разрешении — готовы к использованию',
            '10+ фотографий с разных ракурсов',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Подходит, если вы сами работаете с визуалом и монтажом — получаете материал и используете где нужно.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'Компактный дрон, пролёт камерой по объекту',
        items: [
            'Видео в 4K — готово к использованию',
            'Несколько заходов — подбираем оптимальный маршрут по квартире, этажу или лобби',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'FPV — это съёмка в движении через пространство: компактный дрон пролетает через помещение, зритель видит интерьер изнутри, в движении. Маршрут согласуем до выезда.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Съёмка с воздуха + пролёт внутри — территория, лобби, квартира — за один визит',
        items: [
            'Аэровидео и FPV-пролёт в 4K',
            '10+ фотографий в высоком разрешении с разных ракурсов',
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
            'Продуманный маршрут съёмки',
            'До 3 минут смонтированного видео — разбитого на несколько роликов под объявления, сайт, Reels, Stories и TikTok',
            '20+ обработанных фотографий',
            'Видео под карточку в Google Maps',
            'Передача материала — от 48 часов (монтаж включён)',
        ],
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾',
    'Монтаж ролика 30–60 сек для сайта или объявления: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
];

const shortQa: ShortQa[] = [
    {
        question: 'Сколько стоит аэросъёмка квартиры или ЖК в Тбилиси?',
        answer: 'От 250 ₾ за съёмку дроном снаружи до 900 ₾ за полный пакет с монтажом, нарезкой для соцсетей и обработкой фотографий.',
    },
    {
        question: 'Можно ли летать дроном в центре Тбилиси?',
        answer: 'В ряде зон — да, в ряде — только после согласования. Мы проверяем допустимость полёта до выезда: исторический центр, зоны возле аэропорта и правительственных объектов требуют отдельной подготовки.',
    },
    {
        question: 'Как быстро приходят файлы после съёмки?',
        answer: 'Исходные файлы — от 24 часов. Пакет с монтажом — от 48 часов.',
    },
    {
        question: 'Подходит ли съёмка для продажи инвестору из другой страны?',
        answer: 'Да, это один из основных сценариев. Аэровидео и FPV-пролёт закрывают первичный просмотр удалённо, инвестор принимает решение по материалам без перелёта.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный тур по квартире или ЖК — покупатель ходит по объекту сам, на сайте или в объявлении.',
    },
    {
        title: 'Мониторинг стройки и аэроотчёты',
        href: '/drone-services/drone-construction',
        text: 'Регулярный облёт ЖК с одинаковых точек — отчёты для инвесторов, банков и собственников на каждом этапе.',
    },
    {
        title: 'Reels для риелтора и застройщика',
        href: '/reels-real-estate',
        text: 'Короткие вертикальные ролики для Instagram, TikTok и WhatsApp — для постоянного входящего потока заявок.',
    },
    {
        title: 'Аэросъёмка земельных участков',
        href: '/drone-services/drone-land',
        text: 'Облёт участка с привязкой к рельефу, границам и окружению — для продажи земли и коммерческих объектов.',
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
    telephone: '+995574619393',
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
            name: 'Аэросъёмка',
            item: 'https://breus.media/drone-services',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Недвижимость',
            item: 'https://breus.media/drone-services/drone-real-estate',
        },
    ],
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
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-14 pt-40 md:pb-16 md:pt-48"
            >
                <HeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                        <div>
                            <h1 className="max-w-none text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка недвижимости и ЖК в Тбилиси
                            </h1>

                            <p className="mt-4 max-w-none text-[17px] italic leading-[1.4] text-white/85 md:text-[21px]">
                                Аэровидео и фото дроном для риелторов, застройщиков и девелоперов в Тбилиси и Грузии — локация, масштаб ЖК и окружение одним планом для объявлений, презентаций инвесторам и рекламы на MyHome.ge
                            </p>

                            <div className="mt-4 max-w-none text-[15px] leading-[1.34] text-white/74 md:text-[17px] lg:columns-2 lg:gap-8">
                                <p className="mb-3 break-inside-avoid">
                                    Дрон показывает то, что не помещается в обычное фото: район вокруг объекта, подъездные дороги, парки и школы рядом, масштаб жилого комплекса и вид с верхних этажей.
                                </p>
                                <p className="mb-0 break-inside-avoid text-white/84">
                                    Это основа продаж — особенно когда покупатель принимает решение дистанционно, из другого города или страны.
                                </p>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
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

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Объект глазами покупателя — до первого визита</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–4 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">от 24 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Аэро снаружи + FPV внутри — всё в 4K</li>
                                    <li>Форматы под MyHome.ge, сайт ЖК, Reels и презентации</li>
                                    <li>Материал работает минимум год — и на следующих очередях</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            {/* ── ДЛЯ КОГО ЭТА СЪЁМКА ──────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Для кого эта съёмка</h2>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ПОЧЕМУ ВИДЕО ПРОДАЁТ НЕДВИЖИМОСТЬ ─────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему видео продаёт недвижимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Покупатель смотрит объявление секунды и решает: дальше по листингу или на показ. Исследования показывают, насколько визуальный контент влияет на это решение.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {statsCards.map((item) => (
                            <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-4xl font-bold tracking-tight text-[#FFD23F] md:text-5xl">{item.stat}</p>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>
                                <a
                                    href={item.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center text-xs font-semibold text-white/50 transition-colors hover:text-[#FFD23F]"
                                >
                                    Источник: {item.source} →
                                </a>
                            </article>
                        ))}
                    </div>
                    <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/45">
                        Цифры приведены из открытых отраслевых отчётов. Конкретный эффект для вашего объекта зависит от цены, локации и каналов публикации.
                    </p>
                </div>
            </section>

            {/* ── ЧТО ВЫ РЕШАЕТЕ АЭРОСЪЁМКОЙ ───────────────────────────────────── */}
            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы решаете аэросъёмкой</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ ──────────────────────────── */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Готовый пакет, разложенный по слоям съёмки и под каждую площадку публикации.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {deliverableGroups.map((group) => (
                            <article key={group.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{group.title}</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                    {group.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                            <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-white/72 md:grid-cols-2">
                                <li>Съёмка в 4K</li>
                                <li>Аэро + FPV-пролёт внутри объекта</li>
                                <li>Цветокоррекция и стабилизация (в пакете с монтажом)</li>
                                <li>Форматы: MP4, JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                                <li>Горизонтальные и вертикальные форматы</li>
                            </ul>
                            <p className="mt-4 text-xs leading-relaxed text-white/45">
                                Оборудование: DJI Air 3S, DJI Avata 2 (FPV), Insta360 X5
                            </p>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Сроки: от 24 часов (съёмка без монтажа) до 48 часов и более (пакет с готовым результатом).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── ПРИМЕРЫ ПО ФОРМАТАМ ────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Примеры аэросъёмки недвижимости и ЖК в Тбилиси — снаружи и внутри.
                        </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                        <FormatExamplesSlideshow slidesOverride={formatExampleSlides} />
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
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
                                Посмотреть пакеты
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

            {/* ── ПАКЕТЫ СЪЁМКИ ────────────────────────────────────────────────────── */}
            <section
                id="pricing"
                className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-24 lg:scroll-mt-24"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты съёмки</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Цены фиксированные, в грузинских лари (₾). Без скрытых доплат. Выбирайте пакет под свою
                            задачу — от базовой съёмки до полного цикла.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                            Все фото и видео вы получаете в 4K — готовыми к использованию. К любому пакету можно
                            добавить монтаж под соцсети, сайт и объявления, музыкальное сопровождение, субтитры и панорамы 360°.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-4">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-5 md:p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-2 text-xs text-white/64 md:text-sm">{card.subtitle}</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 md:mt-6 md:gap-3">
                                    <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{card.price}</p>
                                    {card.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Выгодно
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-relaxed text-white/72 md:mt-6 md:space-y-3 md:text-sm">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.note && <p className="mt-4 text-xs leading-relaxed text-white/58 md:mt-5 md:text-sm">{card.note}</p>}
                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-6 md:py-2.5 md:text-xs"
                                >
                                    Обсудить этот пакет →
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <h3 className="text-xl font-bold text-white">Дополнительно по задаче</h3>
                        <p className="mt-3 leading-relaxed text-white/70">
                            Из одной съёмки можно собрать дополнительные форматы под сайт, соцсети, Google Maps и объявления.
                        </p>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── КОРОТКИЕ ОТВЕТЫ ──────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы</h2>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{item.question}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <FaqSection id="faq" items={faqItems} title="Частые вопросы" />

            {/* ── ПОЧЕМУ СНИМАЮТ С НАМИ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему снимают с нами</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

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
                                href="https://wa.me/995574619393"
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

            <DroneStickyCta />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
