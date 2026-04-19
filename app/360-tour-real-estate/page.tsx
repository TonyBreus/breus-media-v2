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
        stat: '+87%',
        label: 'больше просмотров объявления',
        description:
            'Карточки объектов недвижимости собирают на 87% больше просмотров, если в них встроен интерактивный виртуальный тур.',
        source: 'Realtor Market Insights',
        sourceUrl: 'https://www.realtor.com/research/',
    },
    {
        stat: '+70%',
        label: 'чаще сохраняют в избранное',
        description:
            'Пользователи добавляют в закладки листинги с 3D-турами на 70% чаще, чем стандартные объявления только с фото.',
        source: 'Zillow Research',
        sourceUrl: 'https://www.zillow.com/research/',
    },
    {
        stat: '73%',
        label: 'покупателей хотят тур до визита',
        description:
            '73% клиентов предпочитают виртуально изучить планировку и пространство до согласования физического просмотра — это отсекает нецелевые выезды.',
        source: 'National Association of Realtors (NAR)',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics',
    },
    {
        stat: '×5',
        label: 'конверсия в заявку',
        description:
            'Интерактивные 360-туры повышают конверсию из просмотра страницы в обращение брокеру с 2,1% (обычные фото) до 12,4%.',
        source: 'CloudPano Enterprise Data',
        sourceUrl: 'https://www.cloudpano.com/',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«На MyHome.ge и SS.ge все объявления выглядят одинаково»',
        text: '360° тур — формат, который не копируется кнопкой «сохранить фото». Покупатель не листает, а ходит по квартире — и именно это объявление запоминает первым.',
    },
    {
        title: '«Инвестор из Дубая или Тель-Авива не летит смотреть "втёмную"»',
        text: 'Тур закрывает первичный просмотр удалённо. Покупатель сам обходит квартиру, видит планировку и вид из окна — дальше либо онлайн-показ, либо сразу бронь.',
    },
    {
        title: '«Половина показов — пустые: люди приезжают и разворачиваются»',
        text: 'Тур отсеивает нецелевых до звонка. На физический показ едут только те, кто уже оценил планировку и знает, за чем именно приехал.',
    },
    {
        title: '«Квартира висит третий месяц — цена рыночная, а отклика нет»',
        text: '«Замороженный» листинг часто — проблема не цены, а упаковки. Тур даёт новый повод показать объект повторно и вернуть его в верхние позиции выдачи.',
    },
    {
        title: '«У нас ЖК на 12 очередей — снять каждую отдельно нет бюджета»',
        text: 'Снимаем типовые планировки и МОП один раз. Один тур работает на десятки квартир этой же категории — и на следующую очередь ЖК.',
    },
    {
        title: '«Пробовали видео-обход — дорого и быстро устаревает»',
        text: 'Видео смотрят один раз и забывают. Тур встроен в карточку объекта — работает на каждый новый просмотр, месяц за месяцем, без пересъёмки.',
    },
];

const deliverablesItems: string[] = [
    'Ссылку на тур — отправляете в WhatsApp инвестору, ставите в письмо, добавляете в объявление на MyHome.ge',
    'iframe-код — вставляется на сайт агентства или карточку ЖК одной строкой',
    'Панораму для карточки в Google Maps — покупатель видит объект прямо на карте при поиске района',
    'QR-код — для распечатки на баннере возле ЖК, в офисе продаж, на визитке агента',
    'Preview-ролик 10–15 секунд — для рекламы в Instagram, Facebook, Reels',
    'Точки перехода (hotspot) — по желанию: подписи комнат, метраж, кнопка «забронировать показ»',
];

const zoneCards: NicheCard[] = [
    {
        title: 'Жилые комнаты — гостиная, спальни',
        pain: '«На фото непонятно, как комнаты связаны между собой»',
        solution:
            'Покупатель проходит реальный маршрут: от входной двери до каждой комнаты. Видит настоящий метраж и логику планировки.',
        deliverables: '3–5 точек на двухкомнатную квартиру, 5–8 на просторную',
    },
    {
        title: 'Кухня и ванная',
        pain: '«Именно здесь чаще всего расходится картинка и реальность»',
        solution:
            'Покупатель заранее видит состояние сантехники, расстановку техники, освещение. Пропадает главное разочарование вторички — «на фото было иначе».',
        deliverables: '1–2 точки на зону',
    },
    {
        title: 'Вид из окон',
        pain: '«Окна на трассу или во двор — фото этого не покажет»',
        solution:
            'Отдельная панорама из окон ключевых комнат. Особенно важно в Тбилиси — разница между видом на Мтацминду и двором-колодцем на фото неразличима.',
        deliverables: 'Вид из 1–3 главных окон',
    },
    {
        title: 'Подъезд, лифт, двор ЖК',
        pain: '«Квартира хорошая, но подъезд отпугивает на показе»',
        solution:
            'Покупатель видит вход в дом, состояние МОП, двор — и принимает решение заранее. Не тратите время на показы, где человек разворачивается в подъезде.',
        deliverables: '2–4 точки: подъезд, лифт, вход во двор',
    },
    {
        title: 'Коммерция и офисы — опенспейс, переговорные, санузлы',
        pain: '«Арендатор запрашивает фото планировки, а мы присылаем схему»',
        solution:
            'Для коммерческих помещений и офисов тур работает как интерактивная планировка: арендатор оценивает расстановку столов, трафик, освещение.',
        deliverables: '5–10 точек по площади и сложности',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'ЗАПРОС',
        title: 'Обсуждение объекта',
        text: 'Рассказываете: что за объект, куда пойдёт тур (MyHome.ge, сайт агентства, WhatsApp инвестору), какие зоны приоритетные. Предлагаем маршрут и пакет — в тот же день.',
    },
    {
        step: 'ПЛАН',
        title: 'Согласование маршрута',
        text: 'Утверждаем список зон, дату и время. Если в квартире живут — подбираем удобный час. Если это новостройка — согласуем с офисом продаж.',
    },
    {
        step: 'СЪЁМКА',
        title: 'Выезд на объект',
        text: 'Один визит — весь тур. Работу агента или жильцов не останавливаем. Снимаем аккуратно: без реквизита, без лишних людей в кадре, по согласованному плану.',
    },
    {
        step: 'ПЕРЕДАЧА',
        title: 'Ссылка и iframe',
        text: 'Получаете ссылку, iframe-код и инструкцию по встройке. Тур работает сразу: сайт агентства, объявления на MyHome.ge и SS.ge, карточка в Google Maps.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Старт',
        price: 'от 200 ₾',
        subtitle: 'Для одной квартиры, студии, апартамента под посуточную аренду',
        items: [
            'До 6 точек съёмки (2–3 комнаты + кухня + ванная + прихожая)',
            'Ссылка на тур + iframe-код',
            'Панорама для карточки в Google Maps',
            'Передача — от 48 часов',
        ],
        note: 'Хороший старт, чтобы увидеть формат и проверить, как тур работает на одном объекте.',
    },
    {
        title: 'Стандарт',
        price: 'от 450 ₾',
        subtitle: 'Для просторной квартиры, дома, коммерческого помещения, типовой планировки ЖК',
        items: [
            'До 15 точек съёмки (все комнаты + вид из окон + подъезд + двор)',
            'Ссылка + iframe-код',
            'Точки перехода (hotspot) с названиями комнат и метражом',
            'Панорама для Google Maps',
            'Передача — от 72 часов',
        ],
        note: 'Самый частый выбор — для агентств, инвест-продаж и застройщиков ЖК.',
        popular: true,
    },
    {
        title: 'Полный объект',
        price: 'от 900 ₾',
        subtitle: 'Для многоуровневого дома, особняка, ЖК с несколькими типовыми планировками, офисного комплекса',
        items: [
            'От 20 точек — все этажи, все планировки, МОП, двор, прилегающая территория',
            'Ссылка + iframe + несколько маршрутов (по этажам или по квартирам)',
            'Точки перехода с описаниями и кнопкой «забронировать показ»',
            'Панорама для Google Maps',
            'Передача — от 5 рабочих дней',
        ],
        note: 'Подходит для застройщиков ЖК, продажи элитных домов, коммерческих объектов и B2B-презентаций.',
    },
];

const addonPricing: string[] = [
    'Обновление тура (ремонт, смена мебели, новая очередь ЖК): от 150 ₾',
    'Точка перехода с кнопкой «забронировать показ»: +80 ₾',
    'Текстовые описания комнат на RU / EN / GE: +100 ₾',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Квартира на вторичке — Ваке, Сабуртало, Диди Дигоми',
        pain: 'Десятки одинаковых объявлений в районе — сложно выделиться и обосновать цену.',
        solution: 'Тур показывает реальный метраж и планировку — без искажений широкого угла.',
        deliverables: 'Все комнаты + кухня + ванная + вид из окна',
    },
    {
        title: 'Новостройка и ЖК — офис продаж и типовая планировка',
        pain: 'Покупатель видит только рендер и генплан — реальное пространство неясно.',
        solution: 'Один тур типовой планировки продаёт десятки квартир этой же категории.',
        deliverables: '1–3 планировки + МОП + двор + вид из окон',
    },
    {
        title: 'Коммерческое помещение и офис',
        pain: 'Арендатор требует выезда — на каждое согласование теряется неделя.',
        solution: 'Тур работает как интерактивная планировка: арендатор оценивает расстановку до приезда.',
        deliverables: 'Опенспейс + переговорные + санузлы + вход',
    },
    {
        title: 'Апарт-отель и посуточная аренда — несколько юнитов',
        pain: 'Нужен контент для каждого объекта, но бюджет и время ограничены.',
        solution: 'Один выезд — тур на несколько юнитов сразу. Каждый получает свою ссылку для Airbnb, Booking и сайта.',
        deliverables: 'Гостиная, спальня, кухня, санузел — по каждому юниту',
    },
    {
        title: 'Дистанционная сделка с иностранным инвестором',
        pain: 'Инвестор из ЕС, Израиля или ОАЭ не приедет на первый просмотр.',
        solution: 'Тур заменяет ознакомительный визит. Решение о следующем шаге принимается по ссылке.',
        deliverables: 'Полный обход + вид из окон + подъезд + QR для документов',
    },
    {
        title: 'Элитный дом, вилла, многоуровневый объект',
        pain: 'Фото не передают масштаб и связь этажей — покупатель не чувствует объект.',
        solution: 'Тур даёт пространственное понимание многоуровневого объекта. Несколько маршрутов по этажам.',
        deliverables: '20+ точек по всему объекту + прилегающая территория',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Формат под решение о показе',
        text: 'Снимаем так, чтобы по туру покупатель либо записался на показ, либо отсеял сам себя — не тратя ваше время на «пустые» визиты.',
    },
    {
        title: 'Тур под дистанционные сделки',
        text: 'Акцент на то, что важно удалённому инвестору: реальный метраж, вид из окна, подъезд, двор, привязка к району.',
    },
    {
        title: 'Работает на MyHome.ge, SS.ge и в WhatsApp',
        text: 'Одна ссылка встраивается в объявление, отправляется инвестору, идёт в карточку ЖК на сайте и в Google Maps. Без приложений и установки.',
    },
    {
        title: 'Съёмка без остановки жизни объекта',
        text: 'В квартире живут? — снимем в удобный час. В офисе продаж поток? — синхронизируемся. Стройка идёт? — работаем между заходами бригад.',
    },
    {
        title: 'Тур обновляется, а не пересъёмывается',
        text: 'Сделали ремонт, поменяли мебель, запустили новую очередь ЖК — добавляем точки в существующий тур, не собираем его с нуля.',
    },
    {
        title: 'Материал работает годами',
        text: 'Тур не устаревает как сезонная реклама. Один раз сняли типовую планировку — продаёт десятки квартир в течение всего цикла стройки.',
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур квартиры в Тбилиси?',
        answer: 'От 200 ₾ за квартиру до 100 м² (до 6 точек съёмки) и от 450 ₾ за стандартный пакет до 15 точек для просторной квартиры или дома.',
    },
    {
        question: 'Подходит ли 360° тур для продажи инвестору из другой страны?',
        answer: 'Да, это один из ключевых сценариев. Тур заменяет первый физический визит — инвестор из ЕС, Израиля или ОАЭ изучает квартиру дистанционно и решает о следующем шаге по ссылке.',
    },
    {
        question: 'Как быстро готов тур после съёмки?',
        answer: 'От 48 часов для пакета Старт, от 72 часов для Стандарта, от 5 рабочих дней для полного объекта.',
    },
    {
        question: 'Можно ли встроить тур в объявление на MyHome.ge или SS.ge?',
        answer: 'Да. Обе площадки принимают ссылки на виртуальные туры в поле описания объявления.',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Где хранится тур? Нужно что-то устанавливать?',
        answer: 'Нет. Тур хранится на серверах — вы получаете ссылку и iframe-код. Ничего не нужно устанавливать или поддерживать на своей стороне.',
    },
    {
        question: 'Как добавить тур на MyHome.ge и SS.ge?',
        answer: 'Обе площадки принимают ссылки на виртуальные туры в описании объявления. Вставляете ссылку — тур доступен всем, кто открыл карточку. Даём инструкцию.',
    },
    {
        question: 'Работает ли тур на мобильных устройствах?',
        answer: 'Да. Тур открывается в браузере на телефоне, планшете и компьютере — без приложений. Для объектов, ориентированных на инвесторов, это особенно важно: большинство переписок идёт в WhatsApp и Telegram.',
    },
    {
        question: 'Можно ли снимать пустую квартиру или только с мебелью?',
        answer: 'Снимаем оба варианта. Пустая квартира — видно реальный метраж и планировку. С мебелью — легче представить жизнь в пространстве. Часто делают пустой тур + отдельный тур с хоум-стейджингом.',
    },
    {
        question: 'Как долго длится съёмка?',
        answer: 'Одна квартира до 100 м² — около 1–2 часов. Дом или просторная квартира до 200 м² — 2–4 часа. Коммерция и ЖК считаются отдельно по площади и количеству точек.',
    },
    {
        question: 'Что если после съёмки сделают ремонт или поменяют мебель?',
        answer: 'Туры обновляются. Делаем дополнительный выезд и заменяем точки в существующем туре — не пересобираем его с нуля. От 150 ₾.',
    },
    {
        question: 'Тур появится в Google Maps сам или нужно что-то делать?',
        answer: 'После публикации 360° панорамы в карточке объекта или агентства в Google Maps тур появляется автоматически. Помогаем с публикацией.',
    },
    {
        question: 'Чем 360° тур отличается от видеотура квартиры?',
        answer: 'Видео идёт по маршруту, который выбрал оператор — зритель видит то, что ему показали. 360° тур даёт управление покупателю: он сам решает, куда смотреть, и сам заглядывает в ванную или смотрит из окна. Это разные инструменты для разных этапов решения.',
    },
    {
        question: 'Работаете только в Тбилиси?',
        answer: 'Тбилиси — основная зона: Сабуртало, Ваке, Диди Дигоми, Мтацминда, Исани, Сололаки, Старый город. По Грузии — Мцхета, Казбеги, Гудаури и другие регионы — по договорённости, логистика считается отдельно.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости и ЖК',
        href: '/drone-services/drone-real-estate',
        text: 'Съёмка района и масштаба ЖК с воздуха — контекст, который 360° тур изнутри не покажет.',
    },
    {
        title: 'Видеотур по квартире или дому',
        href: '/promo-video/promo-real-estate',
        text: 'Горизонтальное видео 2–5 минут для WhatsApp, YouTube и отправки инвестору.',
    },
    {
        title: 'Reels для риелтора и застройщика',
        href: '/reels-real-estate',
        text: 'Короткие вертикальные ролики для Instagram, TikTok и регулярного охвата.',
    },
    {
        title: 'Мониторинг стройки ЖК',
        href: '/drone-services/drone-construction',
        text: 'Регулярный аэро-отчёт для инвесторов и банков на каждом этапе очереди ЖК.',
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

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: '+995 574 619 393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Georgia',
    priceRange: '200 GEL – 900 GEL',
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '360° виртуальный тур для недвижимости',
    description:
        '360° виртуальные туры для квартир, домов и ЖК в Тбилиси. Для объявлений MyHome.ge, SS.ge, сайтов агентств и дистанционных сделок с инвесторами. От 200 ₾.',
    provider: { '@id': 'https://breus.media/#organization' },
    areaServed: ['Tbilisi', 'Georgia'],
    priceRange: '200 GEL – 900 GEL',
    serviceType: '360 Degree Virtual Tour Production',
    url: 'https://breus.media/360-tour-real-estate',
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
            name: '360° туры',
            item: 'https://breus.media/360-tours-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Недвижимость',
            item: 'https://breus.media/360-tour-real-estate',
        },
    ],
};

export default function TourRealEstatePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaLabel="Обсудить объект"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'ЦЕНЫ', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{ RU: '/360-tour-real-estate', EN: '/360-tour-real-estate/en' }}
                sectionLinks={[
                    { label: 'Зоны', href: '#zones' },
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <DebugWrapper id={3604100} label="Hero Section">
                <section
                    id="tour-real-estate-hero"
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
                                360° тур для недвижимости — покупатель изучает квартиру до визита
                            </h1>
                            <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-white/78 md:text-xl">
                                Создание 360° виртуальных туров для квартир, домов и ЖК в Тбилиси и по Грузии — интерактивный показ объекта для объявлений MyHome.ge, SS.ge, сайтов агентств и дистанционных сделок с инвесторами
                            </p>

                            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Покупатель открывает три-четыре похожих объявления в одном районе. Фотографии у всех — широкоугольник с яркой мебелью. Решение, кого позвать на показ, принимается за минуту — в пользу того объекта, по которому можно пройтись самому.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                360° тур — это не видео и не слайдер. Это интерактивная точка зрения: покупатель сам крутит обзор, заглядывает в ванную, смотрит из окна на двор, понимает планировку до приезда. Именно это формирует доверие — и превращает «может быть» в запрос на показ.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Один тур живёт на сайте агентства, в карточке на MyHome.ge и в WhatsApp-переписке с инвестором одновременно. Вы получаете ссылку и iframe-код — без приложений и установки.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить объект
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>
                    </div>

                    <ScrollArrow />
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604110} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему 360° тур меняет поведение покупателя</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-5xl font-bold tracking-tight text-[#FFD23F]">{item.stat}</p>
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                                        {item.label}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>
                                    <a
                                        href={item.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex text-xs font-semibold text-white/60 transition-colors hover:text-[#FFD23F]"
                                    >
                                        Источник: {item.source}
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604120} label="Photo Vs Tour Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Фото — ракурс. Тур — планировка.</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                Фотография — это один выбранный кадр. Широкоугольный объектив растягивает пространство, мебель расставлена под съёмку, свет поставлен. Покупатель видит то, что ему показали.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                360° тур устроен иначе: покупатель сам выбирает, куда смотреть. Крутит вид, приближает детали, переходит из гостиной в спальню, заглядывает в ванную, смотрит из окна на двор. Пропадает главный страх вторичного рынка и новостроек Тбилиси — «приедешь, а там совсем не то, что на фото».
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Это и есть разница: фото продаёт впечатление, тур продаёт планировку. На современном рынке — где инвестор из Дубая или Тель-Авива выбирает объект без перелёта — планировка побеждает.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604130} label="Problems Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы решаете 360° туром</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604140} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
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
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604150} label="Zones Section">
                <section id="zones" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что именно снимаем внутри объекта</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {zoneCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
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

            <DebugWrapper id={3604160} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604170} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты туров</h2>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note ? <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p> : null}
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
                                    <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4">
                                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604180} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры под задачу</h2>
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

            <DebugWrapper id={3604190} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему снимают с нами</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604200} label="Short Answers Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {shortQa.map((item) => (
                                <article key={item.question} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white md:text-xl">{item.question}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604210} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            <DebugWrapper id={3604220} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Другие форматы под недвижимость</h2>
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
            </DebugWrapper>

            <DebugWrapper id={3604230} label="Contact Section">
                <DroneContactStitch
                    preselectedServices={['360', 'real-estate']}
                    heading="Есть объект — обсудим тур"
                    description="Скажите, что за объект, какие зоны важны и куда пойдёт тур. Предложим маршрут и пакет — расчёт в тот же день."
                />
            </DebugWrapper>

            <DroneStickyCta heroId="tour-real-estate-hero" label="Обсудить объект" />
            <MobileBottomBar
                primaryLabel="Обсудить объект"
                heroId="tour-real-estate-hero"
                revealAfterHero={true}
                smoothVisibility={true}
            />

            <DebugWrapper id={3604240} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </main>
    );
}
