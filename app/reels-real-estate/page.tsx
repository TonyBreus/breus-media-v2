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
        stat: '+403%',
        label: 'больше целевых запросов',
        description:
            'Объекты недвижимости с видео-туром получают в 4 раза больше целевых обращений по сравнению с листингами без видео.',
        source: 'Domain Group Data',
        sourceUrl: 'https://www.domain.com.au/group/',
    },
    {
        stat: '73%',
        label: 'продавцов выбирают агента с видео',
        description:
            '73% собственников предпочитают работать с риелтором, который использует видеоконтент для продвижения объектов, а не ограничивается фото.',
        source: 'National Association of Realtors',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics',
    },
    {
        stat: '×12',
        label: 'больше репостов у видео',
        description:
            'Короткие видео собирают в 12 раз больше репостов, чем текст и фото вместе взятые — бесплатный органический охват без рекламного бюджета.',
        source: 'WordStream Analytics',
        sourceUrl: 'https://www.wordstream.com/blog/',
    },
    {
        stat: '3–5 сек',
        label: 'окно внимания инвестора',
        description:
            'Первые 3–5 секунд вертикального ролика решают, досмотрит ли удалённый покупатель до конца или пролистнёт. Хук в начале важнее всей остальной съёмки.',
        source: 'TikTok for Business',
        sourceUrl: 'https://www.tiktok.com/business/',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«Публикуем фото объекта в Instagram — ноль реакций»',
        text: 'Алгоритмы соцсетей в 2026 году продвигают видео, а не фото. Карусель из 10 снимков квартиры покажут 200 подписчикам. Тот же объект в Reels — 5–15 тысячам.',
    },
    {
        title: '«Сам снимаю на iPhone, монтирую в CapCut — уходят вечера»',
        text: 'Риелтор, который тратит три часа на монтаж вместо звонков, теряет деньги. Один съёмочный день с нами — контент на месяц, без правок и подбора музыки под каждый ролик.',
    },
    {
        title: '«Инвестор из Тель-Авива или ОАЭ не находит нас в поиске»',
        text: 'Удалённые покупатели ищут объекты не на MyHome.ge — они листают Instagram и TikTok по геотегам. Без вертикального видео вы для них не существуете.',
    },
    {
        title: '«Запускаем новую очередь ЖК — охват строится неделями»',
        text: 'Серия Reels за месяц до открытия очереди собирает подписчиков, которые готовы бронировать в день старта продаж. Работает вместо или параллельно с платной рекламой.',
    },
    {
        title: '«Агент без личного бренда — просто один из ста»',
        text: 'На MyHome.ge тысячи риелторов, все предлагают одно и то же. Видео с лицом агента — единственный способ запомниться. «Я покупаю через Алекса» звучит иначе, чем «кто-то из агентства».',
    },
    {
        title: '«Делали промо-ролики для ЖК — дорого и быстро устаревают»',
        text: 'Длинный промо 2–3 минуты снимается раз в год за большой бюджет. Reels — регулярный поток 15–60 секунд: новая очередь, ход стройки, видовые квартиры. Всегда свежий контент под алгоритмы.',
    },
];

const deliverablesItems: string[] = [
    'Готовые вертикальные ролики 9:16 — для Instagram Reels, TikTok, YouTube Shorts, MyHome.ge',
    'Музыку и субтитры — ролики сразу готовы к публикации без доработки',
    'Хуки в первые 3 секунды — захват внимания до пролистывания',
    'Тизер 10–15 сек из основного ролика — отдельно для Stories',
    'Горизонтальную версию ключевого ролика — для сайта и YouTube',
    'Пакет превью-кадров для каждой соцсети — оформление поста готово',
    'Один раунд правок — замена музыки, субтитров или порядка кадров',
];

const formatCards: NicheCard[] = [
    {
        title: 'Рум-тур квартиры',
        pain: '«Фотогалерея получает ноль охвата»',
        solution:
            'Проходка по квартире от входной двери до балкона с ключевыми деталями: метраж, вид из окна, район. Работает для вторички и новостроек.',
        deliverables: '1 ролик 30–45 сек + тизер 10 сек для Stories',
    },
    {
        title: 'Рум-тур пентхауса или видового объекта',
        pain: '«Элитный объект теряется среди типовых листингов»',
        solution:
            'Акцент на видах, террасах, высоте потолков. Хук — кадр вида из окна в первые 2 секунды. Съёмка на закате, когда свет работает на объект.',
        deliverables: '1 ролик 30–60 сек + нарезка для Stories',
    },
    {
        title: 'Обзор инфраструктуры ЖК',
        pain: '«Покупатель выбирает образ жизни, а не только планировку»',
        solution:
            'Проход по двору, детским площадкам, видовым точкам. Соседние кафе, парк, транспорт. Семьи с детьми решают именно по этому контенту.',
        deliverables: '1 ролик 45–60 сек + горизонтальная версия для сайта',
    },
    {
        title: 'Личный бренд брокера - «3 факта об объекте»',
        pain: '«На MyHome.ge все агенты на одно лицо»',
        solution:
            'Агент в кадре называет 2–3 главных плюса и 1 реальный минус. Честность продаёт — подписчик чувствует эксперта, а не продавца.',
        deliverables: '1 ролик 30–45 сек с говорящей головой',
    },
    {
        title: 'Короткий тизер для Stories и рекламы',
        pain: '«Нужен контент под платный трафик в Meta Ads»',
        solution:
            'Нарезка 10–15 секунд с быстрыми переходами и сильным хуком — заточена под рекламный бюджет и холодную аудиторию.',
        deliverables: '1 ролик 10–15 сек + версия без музыки для озвучки',
    },
    {
        title: 'Анонс старта продаж ЖК или новой очереди',
        pain: '«Запуск идёт, а охват строится три недели»',
        solution:
            'Серия из 3–4 тизеров за 2–4 недели до открытия: архитектура, визуализация, локация, ход стройки. Подписчики приходят готовыми.',
        deliverables: '3–4 ролика с общей нарративной линией',
    },
    {
        title: 'Ход стройки с воздуха',
        pain: '«Инвесторы ЖК не видят прогресс — пишут в WhatsApp каждую неделю»',
        solution:
            'Ежемесячный ролик: аэросъёмка с DJI Air 3S + интерьер этажа + короткий комментарий. Снижает поток вопросов и удерживает уверенность покупателей.',
        deliverables: '1 ролик 30–45 сек в месяц + кадры для отчётов',
    },
    {
        title: 'Тестимониал - отзыв резидента или соседа',
        pain: '«Покупатель не верит агенту, но верит такому же, как он»',
        solution:
            'Короткое интервью с жильцом: 2–3 фразы о районе, управляющей компании, атмосфере. Снимаем естественно, без скрипта.',
        deliverables: '1 ролик 30–45 сек с субтитрами на RU и EN',
    },
    {
        title: 'До/После - ремонт или хоум-стейджинг',
        pain: '«Пустая квартира не продаётся, но бюджета на полный ремонт нет»',
        solution:
            'Формат до/после с лёгким стейджингом показывает потенциал объекта. Работает для инвест-квартир с минимальным вложением.',
        deliverables: '1 ролик 15–30 сек с визуальным контрастом',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'ЗАПРОС',
        title: 'Обсуждение задачи',
        text: 'Куда пойдут ролики: Instagram, TikTok, реклама, объявление на MyHome.ge. Кто аудитория: локальный покупатель, удалённый инвестор, семья с детьми. Предлагаем пакет и набор форматов — в тот же день.',
    },
    {
        step: 'ПЛАН',
        title: 'Сценарий и раскадровка',
        text: 'На каждый ролик — короткий сценарий: хук в первые 3 секунды, ключевые кадры, финал. Для агента с говорящей головой — подсказки по тексту. Никакой импровизации в кадре без подготовки.',
    },
    {
        step: 'СЪЁМКА',
        title: 'Один день — контент на месяц',
        text: 'Снимаем смартфоном со стабилизатором и беспроводным микрофоном, при необходимости — дроном DJI Air 3S для аэрокадров. Около 3–5 часов на объекте — материал на 4–5 роликов.',
    },
    {
        step: 'МОНТАЖ',
        title: 'Ролики с музыкой и субтитрами',
        text: 'Собираем каждый ролик: цветокор, музыка из бесплатной библиотеки Instagram, субтитры, хук в начале. Передача — от 72 часов. Один раунд правок включён.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Starter — один объект',
        price: 'от 250 ₾',
        subtitle: 'Для агента или собственника, который продаёт одну квартиру или дом',
        items: [
            '1 съёмочный выезд, около 1,5–2 часов',
            '1–2 вертикальных ролика (рум-тур и/или тизер для Stories)',
            'Музыка и субтитры, ролик готов к публикации',
            'Один раунд правок',
            'Передача — от 72 часов',
        ],
        note: 'Хороший старт — получить материал под конкретное объявление и проверить формат на своей аудитории.',
    },
    {
        title: 'Pro — личный бренд агента',
        price: 'от 650 ₾',
        subtitle: 'Для риелтора, который строит постоянный поток заявок через соцсети',
        items: [
            'Один съёмочный день на несколько объектов или локаций',
            '4–5 роликов на месяц: рум-туры + говорящая голова + тизеры',
            'Форматы: обзор объекта, личный бренд, тестимониал',
            'Горизонтальная версия одного ролика для сайта',
            'Пакет превью-кадров для постов',
            'Передача — от 5 рабочих дней',
        ],
        note: 'Для агентов, которые хотят органический трафик без постоянного платного подъёма на MyHome.ge.',
        popular: true,
    },
    {
        title: 'Developer — запуск ЖК',
        price: 'от 1500 ₾',
        subtitle: 'Для застройщика на старте продаж очереди или презентации проекта',
        items: [
            '2 съёмочных дня: локация, архитектура, ход стройки, инфраструктура района',
            'Серия из 6–8 роликов с общей нарративной линией',
            'Анонсные тизеры + обзор ЖК + ход стройки + район',
            'Аэросъёмка дроном DJI Air 3S включена в съёмочные дни',
            'Горизонтальные версии для сайта ЖК и инвест-презентации',
            'Передача — от 10 рабочих дней',
        ],
        note: 'Контент на запуск очереди, дни открытых дверей и первый месяц продаж — без отдельного промо-бюджета.',
    },
];

const addonPricing: string[] = [
    'Дополнительный ролик к любому пакету: +100 ₾',
    'Перевод субтитров на EN для удалённых инвесторов: +80 ₾',
    'Аэросъёмка дроном (для Starter и Pro): +150 ₾',
    'Выезд за пределы Тбилиси (Мцхета, Казбеги, Кахетия и др.): от 200 ₾',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Риелтор на вторичке — Ваке, Сабуртало, Мтацминда',
        pain: 'На MyHome.ge сотни похожих двушек в одном районе — нечем выделиться.',
        solution: 'Серия рум-туров + контент с лицом агента = узнаваемость и входящий поток заявок.',
        deliverables: 'Pro-пакет: 4–5 роликов в месяц',
    },
    {
        title: 'Застройщик — запуск очереди ЖК',
        pain: 'Нужен охват до старта продаж, платная реклама долго разогревается.',
        solution: 'Серия тизеров за 2–4 недели до открытия: архитектура, район, ход стройки.',
        deliverables: 'Developer-пакет: 6–8 роликов + аэросъёмка',
    },
    {
        title: 'Собственник видового или элитного объекта',
        pain: 'Объект дорогой, покупатель — удалённый инвестор, обычного фото не хватает.',
        solution: 'Рум-тур пентхауса с акцентом на виды и детали + тизер для Stories.',
        deliverables: 'Starter или Pro-пакет',
    },
    {
        title: 'Агентство с командой из 5+ брокеров',
        pain: 'Контент-план лежит на каждом агенте — никто не снимает регулярно.',
        solution: 'Один съёмочный день на всех брокеров — каждый получает 2–3 ролика на свой профиль.',
        deliverables: 'Кастомный пакет от 1200 ₾',
    },
    {
        title: 'Девелопер коммерческой недвижимости',
        pain: 'Бизнес-арендатор выбирает по видео, но у объекта нет контента кроме PDF.',
        solution: 'Серия роликов: обзор этажей, инфраструктура здания, виды из окон офисов.',
        deliverables: 'Developer или кастомный пакет',
    },
    {
        title: 'Инвестор под посуточную аренду — Airbnb, Booking',
        pain: 'Нужен контент не только для бронирований, но и для привлечения новых инвесторов.',
        solution: 'Рум-туры юнитов + контент про доходность района + показ управляющей модели.',
        deliverables: 'Pro-пакет + съёмка нескольких юнитов',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Reels с логикой воронки, а не ради красоты',
        text: 'Каждый ролик делается под конкретную задачу: охват, прогрев или конверсия в заявку. Мы не снимаем «красивое видео» — мы снимаем точку входа в вашу воронку продаж.',
    },
    {
        title: 'Рынок недвижимости Тбилиси — не ресторан и не отель',
        text: 'Работаем именно с недвижимостью: знаем, что показывать в рум-туре квартиры, какие кадры нужны застройщику и что снимает сопротивление у удалённого инвестора.',
    },
    {
        title: 'Компактное оборудование — минимум шума на объекте',
        text: 'Смартфон со стабилизатором и беспроводной микрофон. Никаких тяжёлых рабочих групп. Быстро и аккуратно — в квартире, где живут, или в офисе продаж, где идут показы.',
    },
    {
        title: 'Хуки по алгоритмам 2026 года',
        text: 'Следим за тем, как меняется поведение Instagram и TikTok. Пишем сценарии под актуальные паттерны удержания — не под то, что работало два года назад.',
    },
    {
        title: 'Один день — контент на месяц',
        text: 'Для Pro-пакета приезжаем один раз в месяц, снимаем материал на 4–5 роликов и нарезаем их по согласованному графику публикаций.',
    },
    {
        title: 'Горизонтальные версии там, где нужно',
        text: 'Ключевые ролики делаем сразу в двух форматах: вертикальный для Reels/TikTok и горизонтальный для сайта и YouTube. Один выезд — все каналы.',
    },
];

const shortQa: { q: string; a: string }[] = [
    {
        q: 'Сколько стоит пакет Reels для риелтора в Тбилиси?',
        a: 'От 250 ₾ за один объект (1–2 ролика) до 650 ₾ за месячный пакет для личного бренда (4–5 роликов). Для застройщиков ЖК — от 1500 ₾ за серию на запуск.',
    },
    {
        q: 'Сколько Reels нужно в месяц, чтобы был эффект?',
        a: 'Минимум 4–5 роликов в месяц для личного бренда агента. Для запуска ЖК — серия из 6–8 роликов за 2–4 недели до старта продаж.',
    },
    {
        q: 'Снимаете агента в кадре или только объект?',
        a: 'Оба формата. Для личного бренда обязательно ставим агента в кадр — это повышает доверие и конверсию в запрос. Для объектов — чистые рум-туры без человека.',
    },
    {
        q: 'Подходят ли Reels для привлечения инвесторов из других стран?',
        a: 'Да, это один из ключевых сценариев. Удалённые покупатели из ЕС, Израиля и ОАЭ листают Instagram и TikTok — для них вертикальное видео часто первая точка контакта с объектом.',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Как быстро готовы ролики после съёмки?',
        answer: 'Starter — от 72 часов, Pro — от 5 рабочих дней, Developer — от 10 рабочих дней. В сроки входит монтаж, субтитры и один раунд правок.',
    },
    {
        question: 'Что если у объекта нет ремонта или мебели?',
        answer: 'Снимаем оба варианта. Для пустой квартиры делаем формат «до/после» с лёгким хоум-стейджингом или акцент на метраж и вид из окна. Для строящегося ЖК — формат «ход стройки + визуализация».',
    },
    {
        question: 'Нужно ли агенту что-то учить перед съёмкой?',
        answer: 'Нет. До съёмки мы обсуждаем 3 ключевые фразы об объекте — остальное ведём в формате разговора и монтируем лучшие дубли. Актёрских навыков не нужно.',
    },
    {
        question: 'Кто пишет сценарии — я или вы?',
        answer: 'Мы. По брифу об объекте пишем сценарий каждого ролика: хук, структура, финал. Вы согласовываете перед съёмкой. Можете добавить свои идеи.',
    },
    {
        question: 'Можно ли заказать только один ролик?',
        answer: 'Да, это пакет Starter — 1–2 ролика под конкретный объект. Если нужен постоянный поток контента, Pro-пакет выгоднее в расчёте на один ролик.',
    },
    {
        question: 'Работаете ли с агентствами, у которых несколько брокеров?',
        answer: 'Да. В один съёмочный день снимаем нескольких агентов и объектов — каждый брокер получает ролики на свой профиль. Цена считается по количеству агентов и локаций.',
    },
    {
        question: 'Снимаете ли ход стройки с дрона?',
        answer: 'Да. Аэросъёмка с DJI Air 3S включена в Developer-пакет. Для Starter и Pro — доступна как отдельная опция от 150 ₾.',
    },
    {
        question: 'Можно ли использовать ролики в платной рекламе Meta и TikTok?',
        answer: 'Да. Все ролики передаются с правами на использование в рекламе и органике. Отдельно можем сделать версию без музыки — под озвучку или локализацию.',
    },
    {
        question: 'Работаете только в Тбилиси?',
        answer: 'Тбилиси — основная зона: Ваке, Сабуртало, Диди Дигоми, Мтацминда, Исани, Сололаки, Старый город. По Грузии — Мцхета, Кахетия, Казбеги, Гудаури и другие регионы — с доплатой за выезд от 200 ₾.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный тур по квартире — для инвесторов, которые уже заинтересовались и хотят разобраться в планировке.',
    },
    {
        title: 'Аэросъёмка недвижимости и ЖК',
        href: '/drone-services/drone-real-estate',
        text: 'Съёмка района и масштаба ЖК с воздуха — контекст, который Reels изнутри не покажет.',
    },
    {
        title: 'Видеотур по квартире или дому',
        href: '/promo-video/promo-real-estate',
        text: 'Горизонтальное видео 2–5 минут для WhatsApp, YouTube и отправки инвестору — более глубокий формат для тёплых лидов.',
    },
    {
        title: 'Мониторинг стройки ЖК',
        href: '/drone-services/drone-construction',
        text: 'Регулярные аэро-отчёты для инвесторов и банков — интегрируется с Reels про ход стройки.',
    },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reels и короткие видео для недвижимости в Тбилиси',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        telephone: '+995501103183',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tbilisi',
            addressCountry: 'GE',
        },
    },
    areaServed: ['Tbilisi', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        lowPrice: '250',
        highPrice: '1500',
        priceCurrency: 'GEL',
    },
};

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

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://breus.media/' },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Reels',
            item: 'https://breus.media/reels-real-estate',
        },
        { '@type': 'ListItem', position: 3, name: 'Недвижимость' },
    ],
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    telephone: '+995501103183',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tbilisi',
        addressCountry: 'GE',
    },
    url: 'https://breus.media',
};

export default function ReelsRealEstatePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaLabel="Обсудить контент"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'ЦЕНЫ', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{ RU: '/reels-real-estate', EN: '/reels-real-estate/en' }}
                sectionLinks={[
                    { label: 'Форматы', href: '#formats' },
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <DebugWrapper id={3910100} label="Hero Section">
                <section
                    id="reels-real-estate-hero"
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
                        <div className="max-w-5xl">
                            <h1 className="text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                Reels для риелторов и застройщиков — входящий поток заявок без бюджета на рекламу
                            </h1>
                            <p className="mt-5 max-w-4xl text-base italic leading-relaxed text-white/78 md:text-xl">
                                Съёмка и монтаж Reels, TikTok и Shorts для недвижимости в Тбилиси и по Грузии — рум-туры квартир, анонсы ЖК и личный бренд агента для Instagram, MyHome.ge и мессенджеров с удалёнными инвесторами
                            </p>

                            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Инвестор из Дубая листает Instagram ночью. На полсекунды задерживается на красивом ракурсе квартиры в Ваке. Сохраняет в закладки. Утром пишет в Direct. У вас появляется тёплый лид, на которого вы не потратили ни лари рекламного бюджета.
                            </p>
                            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Reels для недвижимости — это не «красивые ролики для соцсетей». Это система: каждый ролик — точка входа в вашу воронку. Рум-тур показывает квартиру, ролик с агентом строит доверие, тизер ЖК собирает подписчиков на открытие очереди. Один съёмочный день — контент на месяц.
                            </p>
                            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Формат универсальный: Instagram Reels, TikTok, YouTube Shorts, карточка на MyHome.ge. Вертикальный ролик 15–60 секунд работает на всех площадках одновременно — вы не снимаете четыре раза для четырёх каналов.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить контент
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

            <DebugWrapper id={3910110} label="Stats Section">
                <section id="stats" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему вертикальное видео продаёт недвижимость</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article
                                    key={item.stat}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
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

            <DebugWrapper id={3910120} label="Comparison Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Reels — для охвата. Фото — для листинга. Тур — для решения.</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                Фото нужны всегда: они попадают в карточку на MyHome.ge, в первые кадры объявления в WhatsApp, в превью поста. Без фото объект не существует. Но фото не даёт охвата — алгоритмы соцсетей продвигают видео в 10–15 раз активнее статичных постов.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                360° тур — это глубокое погружение. Его смотрит тот, кто уже кликнул на объект и хочет разобраться в планировке. Отличный инструмент на этапе принятия решения — но он не привлечёт нового покупателя, который ещё не знает о вашем объекте.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Reels закрывает первый шаг воронки: человек скроллит ленту и случайно видит ваш ролик. За 15 секунд понимает — район, метраж, атмосферу. Подписывается или сохраняет. Дальше включаются фото и тур. Три формата — три задачи, и они работают вместе, а не вместо друг друга.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3910130} label="Problems Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы решаете короткими видео</h2>
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

            <DebugWrapper id={3910140} label="Deliverables Section">
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

            <DebugWrapper id={3910150} label="Formats Section">
                <section id="formats" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Какие ролики снимаем</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {formatCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
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

            <DebugWrapper id={3910160} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
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

            <DebugWrapper id={3910170} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты Reels</h2>
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
                                    {card.note ? (
                                        <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p>
                                    ) : null}
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

            <DebugWrapper id={3910180} label="Niche Examples Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры под задачу</h2>
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

            <DebugWrapper id={3910190} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему снимают с нами</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
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

            <DebugWrapper id={3910200} label="Short QA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {shortQa.map((item) => (
                                <article
                                    key={item.q}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-lg font-bold text-white md:text-xl">{item.q}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.a}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3910210} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Частые вопросы" />
            </DebugWrapper>

            <DebugWrapper id={3910220} label="Related Services Section">
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

            <DebugWrapper id={3910230} label="Contact Section">
                <DroneContactStitch
                    preselectedServices={['reels', 'real-estate']}
                    heading="Есть объект или проект ЖК — обсудим контент"
                    description="Скажите, что за объект, кто аудитория и куда пойдут ролики. Предложим пакет — расчёт в тот же день."
                />
            </DebugWrapper>

            <DroneStickyCta heroId="reels-real-estate-hero" label="Обсудить контент" />
            <MobileBottomBar
                primaryLabel="Обсудить контент"
                heroId="reels-real-estate-hero"
                revealAfterHero={true}
                smoothVisibility={true}
            />

            <DebugWrapper id={3910240} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
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
