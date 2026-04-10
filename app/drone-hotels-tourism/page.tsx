import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { DroneRestaurantsContactForm } from '@/components/drone-restaurants/DroneRestaurantsContactForm';
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

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
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

type SeoAnswer = {
    question: string;
    answer: string;
};

const problemCards: CardItem[] = [
    {
        title: '«На Booking выглядим как все — хорошие фото, но конкуренты тоже»',
        text: 'Видео с дрона показывает территорию, расположение и атмосферу — то, что стандартными фото не передать.',
    },
    {
        title: '«Главная ценность отеля — природа вокруг, но с земли это не снять»',
        text: 'Дрон показывает горы, море, виноградники — весь контекст локации, который продаёт направление.',
    },
    {
        title: '«Нужен контент для сайта, Booking и Instagram — одна съёмка не закрывает всё»',
        text: 'Один выезд — основной ролик, короткие видео для соцсетей и обработанные фотографии под каждую площадку.',
    },
    {
        title: '«Хочу показать бассейн, террасу, вид — но с земли ракурс не тот»',
        text: 'Дрон снимает сверху и в движении: зоны отдыха, ландшафт, территорию — то, что гость хочет увидеть до бронирования.',
    },
    {
        title: '«Ищем оператора с понятной сметой и общением на английском»',
        text: 'Фиксированные пакеты с ценами в ₾, подробная смета по пунктам, общение на русском и английском.',
    },
    {
        title: '«Не понимаю, что заказать и сколько стоит»',
        text: 'На странице — три пакета с ценами, составом и сроками. Расчёт под ваш объект — бесплатно.',
    },
];

const deliverablesDefault: string[] = [
    'Разрешение на полёт (GCAA) — оформляем сами',
    'Видеофайлы в 4K',
    'Передача через Google Drive или WeTransfer',
    'Выезд по Тбилиси включён',
];

const deliverablesPremium: string[] = [
    'Монтаж основного ролика и коротких видео',
    'Обработанные фотографии',
    'Файлы разложены по папкам: сайт, соцсети, Google Maps',
    'Формат под задачу: горизонтальный, вертикальный или оба',
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
        subtitle: '4K-дрон, съёмка с воздуха',
        items: [
            'Съёмка с воздуха в 4K',
            'Фасад, территория, бассейн, окружение',
            'Видеофайлы без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Просто съёмка — без обработки. Обычно 1–1,5 часа на объекте.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'Пролёт камерой по лобби и залам',
        items: [
            'Пролёт камерой по лобби, коридору, зоне бассейна или террасе',
            'Подбираем лучший ракурс на месте',
            'Видеофайлы без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Не каждый интерьер подходит — уточняем до выезда. Обычно до 1 часа.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Снаружи с воздуха + пролёт по лобби — за один визит',
        items: [
            'Съёмка с воздуха + пролёт камерой внутри',
            'Оба формата за один визит',
            'Видеофайлы в 4K без монтажа',
            'Выезд по Тбилиси включён',
        ],
        note: 'Полная съёмка за один приезд — и территорию сверху, и движение внутри.',
        popular: true,
    },
    {
        title: 'Съёмка с готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Съёмка снаружи и внутри + монтаж + фото — всё под ключ',
        items: [
            'Съёмка с воздуха + пролёт камерой внутри',
            'Продуманный маршрут съёмки',
            'Основной ролик для сайта (45–90 сек)',
            '3+ коротких видео для соцсетей',
            '20+ обработанных фотографий для сайта и площадок бронирования',
            'Видео для карточки в Google Maps',
            'Файлы в папке по назначению',
        ],
        note: 'Готовый контент под ключ. Для курортов и международных сетей — от 1 500 ₾, обсудим.',
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +100 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
    '10 обработанных фотографий: +60 ₾',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение задачи',
        text: 'Рассказываете о типе объекта, целях и зонах съёмки. Предлагаем формат и пакет под задачу. Расчёт — в течение дня.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем маршрут, время съёмки и особенности локации. Для горных или нестандартных зон — проверяем разрешения заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Снимаем снаружи с воздуха + пролёт камерой внутри по согласованному плану, если это уместно. 2–4 часа на объекте. Работа отеля не останавливается.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Монтируем основной ролик, нарезаем короткие видео для соцсетей, обрабатываем фотографии.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Папка с готовыми файлами: для сайта, площадок бронирования, Reels, Google Maps. Один раунд правок включён.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Городской бутик-отель (Тбилиси)',
        pain: 'Теряемся среди похожих объектов на Booking.',
        solution: 'Аэрокадры района, расположение в городе, вид на исторические кварталы.',
        deliverables: 'Основной ролик + видео для соцсетей + фотографии для Booking.',
    },
    {
        title: 'Курортный отель (Батуми / Чёрное море)',
        pain: 'Главная ценность — море и побережье, но фото с земли это не передаёт.',
        solution: 'Аэровидео береговой линии, бассейна, территории с высоты.',
        deliverables: 'Кинематографичный ролик + 3–5 видео для соцсетей + 30+ фотографий.',
    },
    {
        title: 'Горный / эко-отель (Казбеги, Местиа, Кахетия)',
        pain: 'Пейзаж вокруг — главный продукт, его нельзя показать с земли.',
        solution: 'Съёмка горного контекста, путь к отелю, виды из номеров сверху.',
        deliverables: 'Кинематографичный ролик + фотографии.',
    },
    {
        title: 'Апарт-отель и Airbnb (несколько объектов)',
        pain: 'Нужен контент для каждого объекта, но бюджет ограничен.',
        solution: 'Пакет на несколько объектов за один выезд, быстрая доставка.',
        deliverables: 'Фотографии с воздуха + короткий ролик.',
    },
    {
        title: 'Тревел-контент и туроператоры',
        pain: 'Нужен destination-ролик, который продаёт Грузию как направление.',
        solution: 'Аэросъёмка локаций, пейзажей, культурных объектов и природных зон.',
        deliverables: 'Основной ролик + серия видео для соцсетей.',
    },
    {
        title: 'Международная отельная сеть',
        pain: 'Нужен локальный оператор с правильным workflow и коммуникацией на EN.',
        solution: 'Продакшн-пакет, подробная смета по пунктам, исходники, работа в рамках GCAA.',
        deliverables: 'По списку кадров, форматы под стандарты сети.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Снимаем так, чтобы гость захотел забронировать',
        text: 'Мы думаем не о красивом пролёте, а о том, чтобы будущий гость понял: где находится отель, какая там территория и что его ждёт внутри.',
    },
    {
        title: 'Два формата съёмки из одного визита',
        text: 'Плавные кадры снаружи с воздуха + пролёт камерой внутри по залам и лобби — там, где это уместно. Не нужно два выезда.',
    },
    {
        title: 'Контент сразу под все площадки',
        text: 'Основной ролик, короткие видео для соцсетей, фотографии для Booking — всё из одной съёмки, без дополнительной адаптации.',
    },
    {
        title: 'Быстрый контакт, без лишних слоёв',
        text: 'Бриф, правки и вопросы решаются напрямую. Небольшая команда — значит быстрее и проще в общении.',
    },
    {
        title: 'Разрешения на полёт — на нас',
        text: 'Дрон зарегистрирован, знаем ограничения по зонам. Для сложных локаций берём на себя проверку воздушного пространства через Авиационную администрацию Грузии (GCAA).',
    },
    {
        title: 'Понятны для международных сетей',
        text: 'Общение на русском и английском, подробная смета по пунктам, исходные файлы по запросу. Работаем как локальная съёмочная группа с понятным международным подходом.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Reels для отелей',
        href: '/reels-promo/reels-hotel',
        text: 'Короткие вертикальные ролики для регулярного контента, сезонных обновлений и анонсов спецпредложений.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивные туры для сайта и площадок бронирования (Booking, Airbnb), чтобы гость мог детально изучить пространство до бронирования.',
    },
    {
        title: 'Промо-видео для отеля',
        href: '/promo-video/promo-hotel',
        text: 'Когда нужен не только аэрослой, а полноценная история про атмосферу, сервис и характер объекта.',
    },
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Динамичные FPV-пролёты и cinematic aerials для рекламных кампаний, брендового контента и фестивалей.',
    },
];

const formatExampleCards = [
    { image: formatExampleOne, alt: 'Пример аэросъёмки отеля в Тбилиси — формат 1' },
    { image: formatExampleTwo, alt: 'Пример аэросъёмки отеля в Тбилиси — формат 2' },
    { image: formatExampleThree, alt: 'Пример аэросъёмки отеля в Тбилиси — формат 3' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const faqItems: FaqItem[] = [
    {
        question: 'Что именно даёт аэросъёмка отелю?',
        answer:
            'Она показывает то, что стандартные фотографии объясняют хуже: территорию, расположение в городе или природе, вид из окна сверху, ключевые зоны — бассейн, rooftop, сад. Гость заранее понимает, куда едет.',
    },
    {
        question: 'Можно ли снимать отель, когда в нём есть гости?',
        answer:
            'Да, с оговорками. Для съёмки снаружи и с воздуха гости не мешают. Для FPV-пролётов внутри рекомендуем тихие часы — до заезда гостей, после завтрака или в технический перерыв. Снимаем пространство, а не лица.',
    },
    {
        question: 'Чем FPV-пролёт отличается от обычного аэровидео?',
        answer:
            'Обычный дрон (Air 3S) снимает плавные стабильные панорамы снаружи — фасад, территория, вид с высоты. FPV-дрон (Avata 2) может работать внутри: лобби, коридор, pool area — и создаёт непрерывный иммерсивный кадр. Это опция, а не обязательная часть каждого пакета.',
    },
    {
        question: 'Подходит ли контент для Booking, Airbnb и других площадок бронирования?',
        answer:
            'Да. Отдаём в форматах, которые принимают основные площадки: JPG / WebP для фото, MP4 для видео. Горизонтальные версии для сайта и YouTube, вертикальные для Reels и мобильных площадок бронирования. Адаптируем под ваши требования.',
    },
    {
        question: 'Нужно ли закрывать отель на время съёмки?',
        answer:
            'Нет. Подбираем съёмочное окно, которое минимально пересекается с активным потоком гостей: раннее утро, время между заездами или согласованный технический слот.',
    },
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Полёт дроном снаружи — 250 ₾. Пролёт камерой внутри (FPV) — 350 ₾. Полная съёмка (снаружи + внутри) — 500 ₾. Это съёмка без монтажа, видеофайлы в 4K. Готовый контент под ключ (монтаж, ролик, фото, видео для соцсетей) — от 900 ₾. К любому пакету можно добавить монтаж Reels (+100 ₾), ролик для сайта (+150 ₾), 360° панораму (+80 ₾) или обработку фотографий (+60 ₾).',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка занимает от 1 до 3 часов в зависимости от задачи. Видеофайлы без монтажа — от 24 часов. Готовый контент с монтажом и обработкой — от 3 до 7 рабочих дней.',
    },
    {
        question: 'Можно ли снять сразу несколько объектов?',
        answer:
            'Да. Если у вас несколько апарт-отелей или объектов в одном городе — обсудим пакет на несколько съёмок. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Кахетия, Местиа и другие регионы — по договорённости. Стоимость выезда зависит от расстояния и логистики — уточняем на этапе брифа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Горные регионы обсуждаем отдельно — там своя специфика погоды и высотные ограничения. Если условия не позволяют — переносим без доплат.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Полёты дронов регулируются Авиационной администрацией Грузии (GCAA). Проверка воздушного пространства и все необходимые согласования — на нас. Вам не нужно ничего оформлять.',
    },
    {
        question: 'Вы работаете с иностранными отельными сетями?',
        answer:
            'Да. Коммуникация на RU и EN, подробная смета по пунктам, исходники по запросу. Понимаем требования к форматам и стандартам крупных международных сетей. Знаем контекст Film in Georgia (20–25% rebate на квалифицированные расходы).',
    },
    {
        question: 'Как получить Film in Georgia rebate?',
        answer:
            'Программа предоставляет до 20–25% возврата расходов при съёмке коммерческого контента в Грузии. Применима к крупным рекламным кампаниям отельных брендов. Минимальный порог — от 300 000 GEL локальных расходов. Уточните детали в рамках брифа.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для premium-пакетов и регулярного сотрудничества заключаем договор с чётким описанием форматов, сроков и условий выдачи материала.',
    },
];

const seoAnswers: SeoAnswer[] = [
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Полёт снаружи — 250 ₾, FPV внутри — 350 ₾, полная съёмка — 500 ₾. Пакет с готовым результатом (монтаж, фото, ролики под площадки) начинается от 900 ₾.',
    },
    {
        question: 'Нужны ли разрешения для полётов над отелем?',
        answer:
            'Да, полёты регулируются GCAA. Мы проверяем зону и берём на себя согласования до съёмочного дня, чтобы избежать рисков на площадке.',
    },
    {
        question: 'Что именно получает отель после съёмки?',
        answer:
            'Видеофайлы в 4K, фото и при необходимости готовые ролики под сайт, Booking, соцсети и Google Maps. Материалы передаём в структурированной папке по каналам использования.',
    },
    {
        question: 'Можно ли снимать объект, если в отеле есть гости?',
        answer:
            'Да. Обычно работаем в тихие окна и строим маршрут так, чтобы не мешать гостям и команде отеля. Фокус на пространстве и архитектуре.',
    },
    {
        question: 'Сколько времени занимает съёмка и когда готов результат?',
        answer:
            'Съёмка на объекте обычно занимает 1–4 часа. Исходники без монтажа передаём от 24 часов, пакет с монтажом и обработкой — в среднем за 3–7 рабочих дней.',
    },
    {
        question: 'Работаете только в Тбилиси или по всей Грузии?',
        answer:
            'Работаем по всей Грузии: Тбилиси, Батуми, Кахетия, Казбеги и другие регионы. Логистику и условия выезда согласовываем заранее.',
    },
];

const shortQA: { q: string; a: string }[] = [
    {
        q: 'Сколько стоит аэросъёмка отеля?',
        a: 'От 250 ₾ за съёмку с воздуха. Полный пакет снаружи + внутри — 500 ₾. Под ключ с монтажом — от 900 ₾.',
    },
    {
        q: 'Что входит в базовую съёмку?',
        a: 'Съёмка в 4K, ключевые зоны объекта и передача файлов без монтажа. По задаче добавляем FPV, фото и постпродакшн.',
    },
    {
        q: 'Подойдёт ли этот контент для Booking и соцсетей?',
        a: 'Да. Готовим форматы для карточек размещения, сайта и вертикальных платформ вроде Reels.',
    },
    {
        q: 'Нужно ли отелю отдельно оформлять разрешения?',
        a: 'Нет, проверку зоны полёта и согласования мы берём на себя.',
    },
    {
        q: 'Можно снять несколько объектов одной сетью?',
        a: 'Да. Для сетей и групп объектов делаем пакетный график съёмок и единый workflow.',
    },
    {
        q: 'Снимаете только в Тбилиси?',
        a: 'Нет, работаем и в других регионах Грузии по согласованию логистики.',
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
    name: 'Дрон-съёмка отелей и туризма в Тбилиси',
    description:
        'Аэросъёмка и FPV-видео для отелей, курортов и hospitality-объектов в Тбилиси и Грузии. Контент для сайта, Booking и площадок бронирования, соцсетей.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: 'Тбилиси, Батуми, Казбеги, Кахетия, Грузия',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '2600',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-hotels-tourism',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры и контент для hospitality и туризма.',
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
    openingHours: 'Mo-Su 09:00-20:00',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка отелей и курортов в Тбилиси | Аэровидео для hospitality | Breus Media',
    description:
        'Аэросъёмка и FPV-видео для отелей, курортов и hospitality-объектов в Тбилиси и Грузии. Контент для сайта, Booking и соцсетей. От 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-hotels-tourism',
    },
    openGraph: {
        title: 'Дрон-съёмка отелей в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-видео для отелей и курортов в Тбилиси от 250 ₾. Контент для Booking, сайта и Reels. Снаружи, внутри и под ключ.',
        url: 'https://breus.media/drone-hotels-tourism',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneHotelsTourismPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385100} label="Hero Section">
                <section
                    id="drone-hotels-tourism-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Аэросъёмка отелей и курортов в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Отели всё чаще выбирают по видео — ещё до того, как человек нажал «забронировать».
                                </p>

                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    Фотографии есть у всех, но они не передают масштаб территории, вид с крыши, путь от
                                    ворот до лобби. Дрон снимает это с высоты и в движении — гость понимает, куда едет,
                                    ещё на этапе выбора.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    FPV-камера идёт дальше — она пролетает через арку, скользит над бассейном, проходит
                                    сквозь лобби за одно непрерывное движение. Несколько секунд — и человек чувствует
                                    пространство так, как почувствует его вживую.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    Мы снимаем, монтируем и запускаем рекламу — полный цикл. А также передаём готовое,
                                    что подходит для Instagram, TikTok, Facebook, Google Maps, Google Business Profile
                                    и вашего сайта.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                    Один съёмочный день — и у вас есть визуальная база, которая работает на вас год и
                                    дольше.
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
                                        Посмотреть цены
                                    </a>
                                </div>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Ваш отель глазами гостя, ещё до визита</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">1–3 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">от 24 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Экстерьер, интерьер, атмосфера — всё в 4K</li>
                                        <li>Снимаем и монтируем — остаётся только выложить</li>
                                        <li>Один выезд — и видео работает на вас годами</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <ScrollArrow />
                </section>
            </DebugWrapper>

            {/* ── КАК ЭТО ВЫГЛЯДИТ ──────────────────────────────────────────────── */}
            <DebugWrapper id={385110} label="How It Looks Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Примеры аэросъёмки отелей в Тбилиси — снаружи и внутри.
                            </p>
                        </div>
                        <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                            <FormatExamplesSlideshow
                                slidesOverride={formatExampleSlides}
                                altTexts={[
                                    'Панорамная аэросъёмка террасы и побережья отеля',
                                    'Интерьер отеля с панорамным видом на вечерний город',
                                    'Спальня люкс-номера отеля с ночной городской панорамой',
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ЧТО ОБЫЧНО ГОВОРЯТ ПЕРЕД СЪЁМКОЙ ─────────────────────────────────── */}
            <DebugWrapper id={385120} label="Problems Section">
                <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что обычно говорят перед съёмкой?</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-base font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ЧТО СНИМАЕМ И ЧТО ЭТО РЕШАЕТ ───────────────────────────────────── */}
            <DebugWrapper id={385140} label="What We Shoot Section">
                <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что снимаем — и какую задачу это решает</h2>
                            <p className="mt-5 leading-relaxed text-white/72">
                                Аэросъёмка отеля — это не просто кадр сверху. Мы показываем объект в том порядке, в
                                котором его воспринимает будущий гость: расположение в городе или природе → фасад →
                                территория → ключевые зоны → атмосфера.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Дрон фиксирует внешний контекст: как выглядит отель с высоты, какие у него виды, как он
                                вписан в ландшафт или городскую среду. Для горного отеля — горный хребет за номерами.
                                Для курорта — береговая линия и бассейн. Для городского объекта — расположение в
                                квартале, соседство с достопримечательностями.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                FPV-камера добавляет движение внутри: проход через лобби, связь зон, глубину
                                пространства.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Дрон-видео не заменяет рекламу, но отвечает на главный вопрос гостя при выборе отеля —
                                «а как там вообще?». Чем быстрее человек это понимает, тем быстрее он бронирует.
                            </p>
                            <ul className="mt-6 grid gap-3 md:grid-cols-2">
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                    Гость, который ни разу не был, заранее понимает куда едет.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                    Природное окружение или панорама перестают быть «тайным преимуществом».
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                    Карточка на Booking получает видео — выделяется среди похожих объектов.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                    Сезонный контент готов к публикации без долгих согласований.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78 md:col-span-2">
                                    Менеджер по продажам отправляет ссылку вместо папки с фотографиями.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385160} label="Deliverables Section">
                <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                После съёмки вы получаете не просто набор файлов, а готовый пакет — разложенный по папкам и адаптированный под каждую площадку.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Что входит в каждый пакет</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesDefault.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm font-semibold text-white/80">Дополнительно в пакете «С готовым результатом»:</p>
                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesPremium.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">Как устроены файлы</h3>
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    {[
                                        { name: 'Сайт', desc: 'Основной ролик и фотографии для страниц сайта' },
                                        { name: 'Соцсети', desc: 'Вертикальные видео для Reels, Stories, TikTok' },
                                        { name: 'Google Maps', desc: 'Короткий ролик и фото для карточки отеля' },
                                        { name: 'Архив', desc: 'Все исходники — для будущего использования' },
                                    ].map((folder) => (
                                        <div key={folder.name} className="rounded-[14px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                {folder.name}
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Съёмка в 4K</li>
                                    <li>Два формата: воздушная съёмка снаружи + пролёт камерой внутри</li>
                                    <li>Цветокоррекция и стабилизация включены (в пакете с монтажом)</li>
                                    <li>Форматы: MP4, JPG / WebP по запросу</li>
                                    <li>Передача через Google Drive или WeTransfer</li>
                                </ul>
                                <p className="mt-4 text-xs leading-relaxed text-white/45">
                                    Оборудование: DJI Air 3S, DJI Avata 2 FPV, Insta360 X5
                                </p>
                                <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                    Сроки: от 24 часов (съёмка без монтажа) до 7 рабочих дней (пакет с готовым результатом).
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ПРИМЕРЫ ПО ФОРМАТАМ ────────────────────────────────────────────── */}
            <DebugWrapper id={385170} label="Format Examples Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold md:text-3xl">Примеры по форматам</h2>
                        </div>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            {formatExampleCards.map((item, index) => (
                                <div key={index} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                    <div className="relative aspect-video">
                                        <img src={item.image.src} alt={item.alt} className="h-full w-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── МИД-КТА ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385180} label="Mid CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Не уверены, какой формат подходит именно вашему объекту? Расскажите про отель — скажем, что имеет смысл снимать.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                                >
                                    Обсудить проект
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROCESS NOTE ─────────────────────────────────────────────────────── */}
            <DebugWrapper id={385200} label="Process Note Section">
                <ProcessNote text="Съёмка среднего отеля — 2–3 часа на объекте. Работы в отеле не останавливаются." />
            </DebugWrapper>

            {/* ── КАК ПРОХОДИТ РАБОТА ──────────────────────────────────────────────── */}
            <DebugWrapper id={385220} label="Process Section">
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
            </DebugWrapper>

            {/* ── ПАКЕТЫ И ЦЕНЫ ────────────────────────────────────────────────────── */}
            <DebugWrapper id={385240} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">Цены фиксированные, в грузинских лари (₾). Без скрытых доплат.</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/55">
                                Первые три пакета — съёмка без монтажа: приезжаем, снимаем, отдаём файлы. Четвёртый —
                                готовый результат под ключ. К любому пакету можно добавить монтаж, фото или 360°.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-4">
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
                                    {card.note && <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p>}
                                    <a
                                        href="#contact"
                                        className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                    >
                                        Обсудить этот пакет →
                                    </a>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Можно добавить к любому пакету</h3>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {addonPricing.map((item) => (
                                    <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4">
                                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── СРАВНЕНИЕ ПАКЕТОВ — ТАБЛИЦА ────────────────────────────────────── */}
            <DebugWrapper id={385250} label="Package Comparison Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold md:text-3xl">Сравнение пакетов</h2>
                        </div>
                        <div className="mt-8 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm text-white/80">
                                <thead>
                                    <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                        <th className="py-4 pr-4">Параметр</th>
                                        <th className="py-4 px-4">Полёт снаружи</th>
                                        <th className="py-4 px-4">FPV внутри</th>
                                        <th className="py-4 px-4 text-[#FFD23F]">Полная съёмка</th>
                                        <th className="py-4 pl-4">Готовый результат</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2a2a2a]">
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Цена</td>
                                        <td className="py-3 px-4">250 ₾</td>
                                        <td className="py-3 px-4">350 ₾</td>
                                        <td className="py-3 px-4 font-semibold text-[#FFD23F]">500 ₾</td>
                                        <td className="py-3 pl-4">от 900 ₾</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Аэровидео 4K</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">FPV-пролёт внутри</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Фото</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">20+</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Монтаж</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Ролики под соцсети</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Видео для Booking / сайта</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Время на объекте</td>
                                        <td className="py-3 px-4">~1-1,5 ч</td>
                                        <td className="py-3 px-4">~1 ч</td>
                                        <td className="py-3 px-4">~2-4 ч</td>
                                        <td className="py-3 pl-4">по задаче</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Передача файлов</td>
                                        <td className="py-3 px-4">от 24 ч</td>
                                        <td className="py-3 px-4">от 24 ч</td>
                                        <td className="py-3 px-4">от 24 ч</td>
                                        <td className="py-3 pl-4">от 48 ч</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ПОМОЩНИК ВЫБОРА ПАКЕТА ─────────────────────────────────────────── */}
            <DebugWrapper id={385255} label="Package Picker Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-3xl">
                            <h3 className="text-xl font-bold md:text-2xl">Как выбрать пакет</h3>
                            <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/76">
                                <p>
                                    → Нужна только съёмка территории и фасада —{' '}
                                    <strong className="text-white">Полёт снаружи, 250 ₾</strong>
                                </p>
                                <p>
                                    → Нужно показать лобби и связку внутренних зон —{' '}
                                    <strong className="text-white">FPV внутри, 350 ₾</strong>
                                </p>
                                <p>
                                    → Нужны внешний вид объекта и движение внутри за один визит —{' '}
                                    <strong className="text-white">Полная съёмка, 500 ₾</strong>
                                </p>
                                <p>
                                    → Нужны готовые ролики и фото для площадок размещения —{' '}
                                    <strong className="text-white">Готовый результат, от 900 ₾</strong>
                                </p>
                                <p className="pt-2 text-white/55">Не уверены? Опишете объект, и мы подберём вариант под задачу и бюджет.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── POST-PRICING CTA ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385260} label="Post-Pricing CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Не уверены, какой пакет подойдёт? Напишите про отель — скажем, что имеет смысл снимать и что войдёт в бюджет.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Написать о задаче
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385280} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            {/* ── КАК МЫ ПОДХОДИМ К СЪЁМКЕ ─────────────────────────────────────────── */}
            <DebugWrapper id={385300} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как мы подходим к съёмке</h2>
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
            </DebugWrapper>

            {/* ── ТИПЫ ОБЪЕКТОВ И СЦЕНАРИИ ─────────────────────────────────────────── */}
            <DebugWrapper id={385320} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Типы объектов и сценарии</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Под каждый тип отеля собираем свой набор кадров с понятной задачей.
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
                                        <span className="font-semibold text-white/75">Что получите:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ГРУЗИЯ + ПРАВИЛА ПОЛЁТОВ ─────────────────────────────────────────── */}
            <DebugWrapper id={385340} label="Georgia & Safety Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">Почему Грузия — особый визуальный продукт</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    Тбилиси — исторические кварталы, ущелье реки и современные отели в одном кадре.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Батуми — черноморское побережье, пальмы и ультрасовременные resort-комплексы.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Казбеги и горные регионы — кавказские вершины как фон для boutique-отелей. Ничего подобного нет поблизости.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Кахетия — виноградники, монастыри и горы. Идеально для эко-отелей и тревел-контента.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Georgia (country) offers 20–25% cash rebate on qualified production expenses through the Film in Georgia programme. Ask us how this applies to your hotel campaign.
                                </p>
                            </div>

                            <div className="rounded-[20px] border border-[#2a2a2a] bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">Как мы работаем с правилами полётов</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    Работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован. Максимальная высота — 120 м.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Для съёмок рядом с публичными объектами или в чувствительных зонах проверяем ограничения заранее и предлагаем сценарий, который даёт нужный кадр без юридических рисков.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Съёмка с гостями: работаем в тихие часы, фокусируемся на территории и архитектуре — без нарушения приватности.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Горные регионы — договариваемся о резервном дне на случай непогоды. Перенос без доплат.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ПОДРОБНЫЕ ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ──────────────────────────────── */}
            <DebugWrapper id={385350} label="Extended FAQ Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на частые вопросы</h2>
                        </div>

                        <div className="mt-10 space-y-5">
                            {seoAnswers.map((item) => (
                                <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── КОРОТКИЕ ОТВЕТЫ ДЛЯ AI-ПОИСКА ─────────────────────────────────── */}
            <DebugWrapper id={385355} label="Short Answers Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold md:text-3xl">Коротко о главном</h2>
                        </div>
                        <div className="mt-8 max-w-3xl space-y-5">
                            {shortQA.map((item) => (
                                <div key={item.q}>
                                    <p className="font-bold text-white">{item.q}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/72">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── СМЕЖНЫЕ УСЛУГИ ───────────────────────────────────────────────────── */}
            <DebugWrapper id={385360} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Дрон-съёмка — один из слоёв visual-продукта отеля. При необходимости комбинируем с другими форматами.
                            </p>
                        </div>

                        <p className="mt-8 text-sm leading-relaxed text-white/58">
                            Часто к съёмке с воздуха добавляют 360° тур по отелю и серию Reels для соцсетей. Если интересно — обсудим, сколько стоит в комплекте.
                        </p>

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
            </DebugWrapper>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если вы дочитали до этого места, значит вопрос с визуальным контентом для отеля актуален.
                            Следующий шаг — расскажите об объекте, и мы предложим конкретный формат.
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
            <DebugWrapper id={385380} label="Contact Section">
                <section id="contact" className="bg-[#0D0D0D] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите тип объекта и регион — вернёмся с расчётом, маршрутом полётов и
                                        рекомендованным пакетом в течение 2 часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Написать напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="https://t.me/breusmedia"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                Telegram
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <DroneRestaurantsContactForm
                                    contactLabel="Телефон / WhatsApp / Telegram"
                                    businessLabel="Тип объекта и регион"
                                    businessPlaceholder="Например: бутик-отель в Тбилиси / курорт в Батуми / сеть апарт-отелей"
                                    deadlineLabel="Задача и платформы"
                                    deadlinePlaceholder="Сайт, Booking, Reels, YouTube, рекламная кампания"
                                    submitLabel="Отправить заявку"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />
            <MobileBottomBar primaryLabel="Обсудить съёмку" />

            <DebugWrapper id={385400} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
