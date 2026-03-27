import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-real-estate/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ListCard = {
    title: string;
    text: string;
};

type MetricCard = {
    value: string;
    text: string;
    source?: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type AudienceCard = {
    title: string;
    text: string;
};

type UseCaseCard = {
    title: string;
    text: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка недвижимости и зачем она нужна?',
        answer:
            'Аэросъёмка — это фото и видео объекта с высоты от 30 до 120 метров с помощью дрона. Для недвижимости это значит: покупатель видит не только интерьер, но и расположение дома, вид из окна, двор и ближайшее окружение. Это особенно важно для иностранных покупателей, которые не могут приехать на осмотр.',
    },
    {
        question: 'Чем аэросъёмка лучше обычных фото с земли?',
        answer:
            'Обычное фото показывает стены и комнаты. Аэрофото показывает масштаб объекта, расположение в квартале, вид на горы или центр города, расстояние до парка или школы. Для квартиры на 15-м этаже — это единственный способ показать реальный вид из окна.',
    },
    {
        question: 'Можно ли летать дроном в Тбилиси?',
        answer:
            'Да. Мы работаем в соответствии с правилами Агентства гражданской авиации Грузии (GCAA). Максимальная высота полёта — 120 м. В черте города съёмка разрешена в большинстве районов при соблюдении ограничений. Отдельные зоны вблизи аэропорта и госучреждений требуют дополнительного согласования — мы берём это на себя.',
    },
    {
        question: 'Нужны ли специальные разрешения?',
        answer:
            'Для коммерческой съёмки дрон должен быть зарегистрирован в GCAA. Наш дрон зарегистрирован. Для съёмки в стандартных жилых районах дополнительных разрешений обычно не требуется. Если объект находится в зоне ограничений — уточним заранее и организуем согласование.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'Дрон летает при ветре до 10–12 м/с и без осадков. Если погода в день съёмки не позволяет подняться — переносим на ближайший подходящий день без доплат. Обычно ожидание не превышает 1–2 рабочих дня.',
    },
    {
        question: 'Как долго длится съёмка на объекте?',
        answer:
            'Съёмка квартиры или дома занимает 1–2 часа на месте. ЖК или крупный объект — 2–3 часа. После этого ещё 1–2 рабочих дня на монтаж и обработку. Итого: от заявки до готовых файлов — обычно 2–4 рабочих дня.',
    },
    {
        question: 'Что такое FPV-съёмка и чем она отличается от обычного дрона?',
        answer:
            'FPV (First Person View) — это динамичная съёмка на DJI Avata 2. Он летает быстро и маневренно: пролетает вдоль фасадов, через открытые пространства и снимает динамичные облёты. Обычный дрон DJI Air 3S летает плавно и делает стабильные панорамные кадры — для видео-туров, объявлений и презентаций.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка недвижимости в Тбилиси?',
        answer:
            'Базовый пакет фото + видео-тур — от 350 ₾ за объект. Стандартный пакет с Reels — от 600 ₾. Инвест-пакет с FPV — от 1 200 ₾. Точный расчёт — бесплатно, в течение 2 часов после заявки.',
    },
    {
        question: 'В каком формате я получу материалы?',
        answer:
            'Фото — JPG, высокое разрешение. Видео — MP4, качество 4K. Вертикальные Reels — 9:16, MP4. Всё передаётся через Google Drive или Telegram. Оригиналы без водяного знака, права на коммерческое использование включены.',
    },
    {
        question: 'Сколько времени от заявки до готовых файлов?',
        answer:
            'Съёмка проходит в согласованный день. Обработка и монтаж — 48 часов после съёмки. Итого: обычно 2–4 рабочих дня от первого контакта до готового контента.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Основной рынок — Тбилиси и ближайшая область. Батуми, Кутаиси и другие регионы — по договорённости. Стоимость выезда рассчитывается индивидуально.',
    },
    {
        question: 'Можно ли заказать регулярную съёмку для нескольких объектов?',
        answer:
            'Да. Если вы агентство недвижимости или застройщик с потоком объектов — обсудим ежемесячный пакет. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Снимаете ли вы строящиеся объекты?',
        answer:
            'Да. Для строящихся ЖК снимаем прогресс стройки, вид с высоты будущих этажей и локацию. Это сильный контент для старта продаж — покупатель видит реальную картину, а не только рендер.',
    },
    {
        question: 'Можно ли снять вид из конкретного окна или этажа?',
        answer:
            'Да, это одна из самых востребованных услуг. Поднимаем дрон на высоту вашего этажа и снимаем в направлении, в котором будет выходить окно. Покупатель видит свой будущий вид заранее.',
    },
    {
        question: 'Что если результат меня не устроит?',
        answer:
            'В каждый пакет включена 1 итерация правок — если что-то нужно перемонтировать. Обсудим пожелания до съёмки, чтобы результат совпал с ожиданиями.',
    },
];

const experienceCards: ListCard[] = [
    {
        title: 'Сценарий 1 — Риелтор',
        text:
            'Покупатель открывает объявление и видит аэрофото: дом сверху, двор, парк рядом и вид из будущего окна. Он понимает, подходит ли ему это место, ещё до звонка агенту.',
    },
    {
        title: 'Сценарий 2 — Застройщик',
        text:
            'Иностранный инвестор смотрит короткое видео: ЖК, окружение, расстояние до центра и ключевых точек. Он задаёт предметные вопросы вместо просьбы сначала показать район.',
    },
    {
        title: 'Сценарий 3 — Владелец дома',
        text:
            'Хозяин виллы или коттеджа публикует 30-секундный FPV-облёт. Масштаб участка и виды читаются сразу, поэтому запрос приходит раньше, чем клиент успевает дойти до галереи обычных фото.',
    },
];

const socialProofCards: MetricCard[] = [
    {
        value: '85%',
        text: 'покупателей недвижимости ожидают видео об объекте до просмотра.',
        source: 'NAR, 2024',
    },
    {
        value: '68%',
        text: 'быстрее продаются объекты с аэрофото по сравнению с объектами без него.',
        source: 'Redfin, 2024',
    },
    {
        value: '60%',
        text: 'времени на листинге покупатель проводит в фото и видео, а не в описании.',
    },
    {
        value: 'Редкость',
        text: 'На рынке Тбилиси большинство объявлений всё ещё ограничиваются фото с телефона. Аэросъёмка остаётся заметным преимуществом.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Риелтор',
        text:
            'Объект сильный, но фото с телефона. Покупатель смотрит визуал и уходит к соседнему объявлению, где подача понятнее уже с первой секунды.',
    },
    {
        title: 'Застройщик',
        text:
            'Иностранные инвесторы не летят смотреть стройку. Им нужно короткое видео с районом, видом и локацией на карте, а не длинная переписка.',
    },
    {
        title: 'Девелопер ЖК',
        text:
            'Показываете рендеры, а клиент хочет видеть текущую реальность: что сейчас на площадке, как выглядит окружение и какой будет вид из будущего окна.',
    },
    {
        title: 'Владелец дома или виллы',
        text:
            'Красивый участок и масштаб территории не раскрываются обычными фото. Чтобы почувствовать пространство, нужно подняться выше уровня земли.',
    },
    {
        title: 'Агентство недвижимости',
        text:
            'Конкуренты уже добавляют аэрофото и короткие пролёты. Если этого нет у вас, разница заметна и в объявлениях, и в переговорах с собственниками.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Покупатель видит объект до звонка',
        text: 'Он уже принял предварительное решение. Ваш разговор начинается не с объяснений района, а с подтверждения интереса.',
    },
    {
        title: 'Иностранный инвестор смотрит дистанционно',
        text: 'Не нужно организовывать отдельный выезд. Видео и фото закрывают большую часть вопросов по локации ещё до перелёта в Тбилиси.',
    },
    {
        title: 'Вид из окна заранее',
        text: 'Для строящегося ЖК снимаем с высоты будущего этажа. Клиент видит не обещание, а понятный визуальный ориентир.',
    },
    {
        title: 'Листинг выделяется среди похожих',
        text: 'На SS.ge и MyHome.ge аэрофото всё ещё редкость. Это помогает объекту выглядеть собраннее уже в первой выдаче.',
    },
    {
        title: 'Один выезд закрывает несколько задач',
        text: 'Из одной съёмки вы получаете фото, видео-тур, Reels и материал для сайта, презентации или соцсетей отдела продаж.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'Базовый пакет',
        subtitle: 'Фото + Видео',
        items: [
            '20–25 аэрофото JPG: фасад, двор, локация, разные ракурсы',
            'Видео-облёт 2–3 минуты с музыкой',
            'Top-down кадры для понимания участка и окружения',
            'Вид из окна с высоты вашего этажа',
            'Доставка через Google Drive или Telegram',
            'Срок: 48 часов после съёмки',
        ],
    },
    {
        title: 'Расширенный пакет',
        subtitle: '+ Reels',
        items: [
            'Всё из базового пакета',
            '2–3 вертикальных клипа по 30–60 секунд для Instagram, Stories и Reels',
            'Горизонтальная версия для YouTube и сайта',
            'Адаптация под 9:16 и 16:9',
        ],
    },
    {
        title: 'FPV-пакет',
        subtitle: 'Динамика на DJI Avata 2',
        items: [
            'FPV-облёт через объект и вокруг него',
            'Монтаж 30–60 секунд под соцсети или рекламу',
            'Кинематографичный темп и более быстрые пролёты',
            'Доставка за 48–72 часа',
        ],
    },
];

const includedItems = [
    'Оригинальные файлы без водяного знака',
    'Право на коммерческое использование',
    '1 итерация правок',
];

const audienceCards: AudienceCard[] = [
    {
        title: 'Риелторы и агентства',
        text: 'Для объявлений на SS.ge, MyHome.ge и в соцсетях. Выделяетесь среди конкурентов и получаете более тёплые запросы.',
    },
    {
        title: 'Застройщики и девелоперы ЖК',
        text: 'Для сайта проекта, инвест-презентаций и Instagram. Показываете реальность, а не только рендеры.',
    },
    {
        title: 'Инвестиционные агентства',
        text: 'Для удалённых клиентов из России, ОАЭ и Европы. Видео закрывает вопросы по локации без выезда.',
    },
    {
        title: 'Владельцы домов, вилл и апарт-отелей',
        text: 'Для продажи или аренды объектов, где масштаб и вид невозможно передать только интерьерной съёмкой.',
    },
    {
        title: 'Апарт-отели и Airbnb',
        text: 'Аэровидео для карточек размещения и соцсетей. Гость видит территорию и окружение до бронирования.',
    },
];

const useCaseCards: UseCaseCard[] = [
    {
        title: 'ЖК в Сабуртало или Ваке',
        text:
            'Снимаем фасад, двор, вид на город и расстояние до центра. Итог: видео для сайта и Instagram, которое помогает иностранным покупателям понять локацию дистанционно.',
    },
    {
        title: 'Вилла или дом в пригороде Тбилиси',
        text:
            'Показываем размер участка, рельеф, зелень и вид на горы. Покупатель сразу видит масштаб, а не достраивает картину по описанию.',
    },
    {
        title: 'Инвест-квартира для иностранного покупателя',
        text:
            'Снимаем вид с высоты будущего этажа, район и инфраструктуру. Видео удобно отправить в мессенджер, чтобы решение принималось без перелёта.',
    },
    {
        title: 'Апарт-отель или Airbnb в Старом городе',
        text:
            'FPV-пролёт через балкон, двор и крыши даёт короткий ролик для Instagram, который помогает объекту запомниться среди типовых карточек.',
    },
];

const evidenceCards: MetricCard[] = [
    {
        value: '403%',
        text: 'больше запросов получают объявления с аэрофото по сравнению с объявлениями без него.',
        source: 'Realtor.com, 2023',
    },
    {
        value: '73%',
        text: 'покупателей говорят, что видео повлияло на решение посетить объект.',
        source: 'NAR Survey, 2024',
    },
    {
        value: 'Тбилиси',
        text: 'На локальном рынке большинство объявлений всё ещё обходятся только фото с телефона. Аэросъёмка остаётся вашим конкурентным окном.',
    },
    {
        value: 'Remote first',
        text: 'Для покупателей из России, ОАЭ, Израиля и Германии удалённый просмотр — часто обязательный первый этап, а не дополнительная опция.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Нишевый подход под недвижимость',
        text: 'У риелтора, девелопера и инвест-агентства разные задачи. Поэтому страница, пакеты и подача собраны именно под рынок недвижимости.',
    },
    {
        title: 'Два дрона под две разные задачи',
        text: 'DJI Air 3S закрывает плавные панорамы и обзорные кадры. DJI Avata 2 отвечает за быстрые FPV-пролёты для Reels и рекламы.',
    },
    {
        title: 'Работаем в рамках GCAA',
        text: 'Дрон зарегистрирован, ограничения по зонам в Тбилиси проверяем заранее. Если нужно согласование, организуем его до дня съёмки.',
    },
    {
        title: 'Пакеты с понятным входом',
        text: 'На странице сразу видны форматы и цены: от 350 ₾, от 600 ₾ и от 1 200 ₾. Точный расчёт отправляем в течение 2 часов.',
    },
    {
        title: 'Материалы готовы к публикации',
        text: 'Фото, смонтированное видео, вертикальные Reels и файлы без водяного знака можно сразу ставить в листинг, сайт или презентацию.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка',
        text: 'Вы отправляете адрес, тип объекта и задачу. Мы уточняем формат и присылаем расчёт в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Согласование',
        text: 'Подбираем дату, время и сценарий съёмки. Проверяем ограничения по полётам в районе объекта.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Приезжаем на объект с DJI Air 3S и при необходимости DJI Avata 2. На месте обычно нужно 1–2 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка',
        text: 'Обрабатываем фото, собираем видео, подготавливаем вертикальные версии и передаём готовые файлы через Google Drive или Telegram.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'Пакет 1: Базовый',
        price: 'от 350 ₾',
        subtitle: 'Для риелторов и частных объявлений',
        items: [
            '20–25 аэрофото JPG',
            'Видео-тур 2–3 минуты',
            'Вид из окна с воздуха',
            'Доставка за 48 часов',
            'Право на коммерческое использование',
        ],
    },
    {
        title: 'Пакет 2: Стандарт',
        price: 'от 600 ₾',
        subtitle: 'Для застройщиков и агентств',
        items: [
            '30–40 аэрофото JPG',
            'Видео-тур 3–4 минуты',
            '2 вертикальных Reels по 30–60 сек',
            'Горизонтальная и вертикальная версии',
            'Вид из окна + обзор локации сверху',
            'Доставка за 48 часов',
        ],
        popular: true,
    },
    {
        title: 'Пакет 3: Инвест',
        price: 'от 1 200 ₾',
        subtitle: 'Для инвест-агентств и девелоперов',
        items: [
            '40–60 аэрофото',
            'Видео-тур 4–6 минут',
            'FPV-пролёт DJI Avata 2 на 30–60 сек',
            '3 вертикальных Reels',
            'Локационный обзор района',
            'Доставка за 72 часа',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Добавьте интерактивный просмотр внутри объекта, чтобы клиент мог пройти квартиру или дом прямо в браузере.',
    },
    {
        title: 'Дрон-мониторинг строительства',
        href: '/drone-service/monitoring-stroiki',
        text: 'Регулярные выезды и отчёты для девелоперов, инвесторов и банков по ходу стройки.',
    },
    {
        title: 'AI virtual staging',
        href: '/ai-visualization-service',
        text: 'Пустая квартира превращается в обставленную визуализацию без мебели и отдельной интерьерной съёмки.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
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
    name: 'Аэросъёмка недвижимости в Тбилиси',
    description:
        'Дрон-съёмка квартир, ЖК, домов и земельных участков. Аэрофото, видео-туры и FPV-пролёты для риелторов, застройщиков и инвесторов в Тбилиси.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'City',
        name: 'Тбилиси',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '350',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, 360° туры, промо-видео для бизнеса в Тбилиси.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости в Тбилиси | Дрон для ЖК и риелторов | Breus Media',
    description:
        'Аэрофото и видео объектов недвижимости в Тбилиси. Инвесторы видят квартиру и район дистанционно. От 350 ₾. Доставка за 48 часов.',
    alternates: {
        canonical: 'https://breus.media/drone-real-estate',
    },
};

export default function DroneRealEstatePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={381100} label="Hero Section">
                <section
                    id="drone-real-estate-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Аэросъёмка недвижимости · Тбилиси
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Аэросъёмка недвижимости для риелторов и застройщиков в Тбилиси
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Показываем объект с воздуха: квартиру, дом, ЖК или участок. Покупатель видит район,
                                    виды и окружение ещё до первого звонка и быстрее понимает, подходит ли ему этот объект
                                    в Тбилиси.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка объекта — 1–2 часа, монтаж — 1–2 рабочих дня.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Что получает клиент</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 350 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для квартиры, дома или участка в Тбилиси.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Доставка</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">1 итерация</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Правок</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Аэрофото фасада, двора и локации</li>
                                        <li>Видео-тур для сайта, листинга и мессенджера</li>
                                        <li>FPV-пролёты для Reels и рекламы при необходимости</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381120} label="What Is Section">
                <section id="tour-what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка для недвижимости</h2>
                                <p className="mt-5 max-w-3xl leading-relaxed text-white/74">
                                    Аэросъёмка недвижимости — это фото и видео объекта с высоты 30–120 метров. Дрон снимает
                                    квартиру, дом, участок или ЖК с разных сторон и высот, показывает вид из окна, район,
                                    подъезды и инфраструктуру вокруг. В результате покупатель или инвестор получает не только
                                    интерьер, но и контекст: где стоит объект, что рядом и какой вид открывается.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-[#2a2a2a] bg-[#131313] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Это работает для</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                    <li>Объявлений на SS.ge и MyHome.ge</li>
                                    <li>Инвест-презентаций для иностранных покупателей</li>
                                    <li>Сайтов застройщиков и Instagram девелоперов</li>
                                    <li>Видео для удалённого просмотра без выезда на объект</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381140} label="Experience Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит для вашего клиента</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Один и тот же выезд по-разному работает для риелтора, застройщика и владельца объекта, но
                                во всех сценариях убирает лишние вопросы ещё до показа.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {experienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381200} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Цифры рынка</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Реальные кейсы Breus Media для этой страницы появятся после первых проектов. Пока опираемся на
                                рыночные сигналы и на то, как покупатели выбирают объект онлайн.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>

                        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/58">
                            Реальные кейсы Breus Media появятся после первых проектов. Свяжитесь с нами, если хотите обсудить
                            пилотный проект на выгодных условиях.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381250} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте себя?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Обычно потребность в аэросъёмке появляется не из-за тренда, а из-за конкретных узких мест в
                                продаже объекта или презентации ЖК.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381300} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что меняется, когда есть аэросъёмка</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот формат помогает не просто показать объект, а сократить путь от первого просмотра до
                                предметного разговора о покупке или показе.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381305} label="Mid CTA Section 1">
                <MidCta
                    text="Есть объект или ЖК в Тбилиси, который нужно снять? Обсудим формат и пришлём примеры в течение 30 минут."
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={381350} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны под разные задачи: быстрый листинг, контент для отдела продаж и динамичный
                                формат для соцсетей или рекламы.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[18px] border border-[#FFD23F]/20 bg-[#111111] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Все пакеты включают</p>
                            <div className="mt-4 grid gap-3 md:grid-cols-3">
                                {includedItems.map((item) => (
                                    <div key={item} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/74">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381360} label="Audience Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Кому подходит аэросъёмка недвижимости</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В Тбилиси один и тот же формат помогает и частным продажам, и девелоперским задачам, и
                                удалённой квалификации инвесторов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {audienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381380} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это применяется в Тбилиси</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже — четыре типовых сценария, в которых аэрофото, обзорное видео и FPV действительно
                                помогают объекту продаваться понятнее.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {useCaseCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={381500} label="Portfolio Section">
                    <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold md:text-4xl">Примеры работ</h2>
                                <p className="mt-4 leading-relaxed text-white/70">
                                    Реальные кейсы на этой странице появятся после первых проектов. Сейчас блок отмечен как
                                    честный placeholder, чтобы не имитировать портфолио до съёмок в Тбилиси.
                                </p>
                            </div>

                            <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                                <p className="text-lg font-semibold text-white">Портфолио наполняется</p>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                    Мы только начинаем накапливать портфолио в Тбилиси. Свяжитесь с нами, чтобы обсудить
                                    пилотный проект на специальных условиях. Первые 5 клиентов получают съёмку по
                                    себестоимости.
                                </p>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={381520} label="Evidence Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему аэросъёмка работает — не мнение, а данные</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот блок собран для тех, кто хочет аргументировать запуск услуги цифрами, а не только визуальным впечатлением.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {evidenceCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-2xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для тех, кто впервые сталкивается с аэросъёмкой" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={381700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={381560} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media, а не просто дрон-оператор</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Здесь важен не только полёт, но и то, как собран маршрут, что увидит клиент и под какой канал вы публикуете контент.
                            </p>
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

            <DebugWrapper id={381399} label="Process Note Section">
                <ProcessNote text="Съёмка объекта занимает 1–2 часа — без остановки продаж и показов" />
            </DebugWrapper>

            <DebugWrapper id={381400} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От первого сообщения до готовых файлов обычно проходит 2–4 рабочих дня, если погода позволяет летать по плану.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
            </DebugWrapper>

            <DebugWrapper id={381600} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет стартует от 350 ₾, стандартный — от 600 ₾, инвест-формат с FPV — от 1 200 ₾. Если нужно, соберём свой состав под конкретный объект.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
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
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш объект или задачу?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={381620} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если объекту нужна более широкая упаковка, эти услуги чаще всего заказывают вместе с аэрофото и обзорным видео.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381800} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Опишите объект — мы ответим в течение 2 часов и пришлём расчёт. Работаем с квартирами, домами, ЖК и участками по Тбилиси и ближайшей области.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
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
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram просто укажите ваш юзернейм в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                        <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                            <option>Квартира</option>
                                            <option>Дом</option>
                                            <option>ЖК</option>
                                            <option>Участок</option>
                                            <option>Другое</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Что нужно снять</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Адрес, что важно показать, нужен ли FPV, есть ли дедлайн и куда пойдут материалы"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={381900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
                        }
                    `,
                }}
            />
        </main>
    );
}
