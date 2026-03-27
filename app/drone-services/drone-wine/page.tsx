import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { WineContactForm } from './WineContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    subtitle: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type MistakeItem = {
    title: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
    note?: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-wine';
const PAGE_TITLE = 'Аэросъёмка виноградников в Грузии | Breus Media';
const PAGE_DESCRIPTION =
    'Аэросъёмка виноградников, виноделен и агротуров в Грузии. Имиджевое видео, мониторинг лоз, контент для экспорта. От 390 ₾. Тбилиси, Кахетия, вся Грузия.';

const serviceTypes: CardItem[] = [
    {
        title: 'Имиджевая видеосъёмка',
        text: 'Главный ролик 1,5–3 минуты для сайта, YouTube, презентации инвестору или дистрибьютору: панорамы, детали, Ртвели, пролёты над лозами, цветокоррекция и музыка.',
    },
    {
        title: 'Контент для туризма и соцсетей',
        text: 'Серия коротких вертикальных и горизонтальных роликов для Instagram, Facebook, TikTok и Google Maps. Форматы под Reels и Shorts для агротуризма и дегустаций.',
    },
    {
        title: 'Мониторинг и агросъёмка',
        text: 'Плановая съёмка и фотограмметрия для оценки состояния лоз, картирования территории и подготовки материалов для инвесторов или страховых отчётов. Мультиспектральная аналитика — по запросу.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Семейные винодельни',
        text: 'Производите вино с историей и характером, но визуал пока не отражает уровень продукта. Аэросъёмка создаёт образ, соответствующий качеству вина.',
    },
    {
        title: 'Агротуризм и wine-отели',
        text: 'Гостю нужно почувствовать место до приезда. Видео с дрона — самый быстрый способ передать атмосферу и увеличить бронирования.',
    },
    {
        title: 'Экспортёры и дистрибьюторы',
        text: 'Для международных переговоров нужна убедительная визуализация масштаба, инфраструктуры и терруара. Видео с воздуха решает это лучше текста.',
    },
    {
        title: 'Девелоперы и инвесторы в АПК',
        text: 'Планируете покупку или расширение? Аэросъёмка показывает границы, рельеф, инфраструктуру и окружение для принятия решений.',
    },
    {
        title: 'Туристические маршруты и wine-туры',
        text: 'Туроператоры получают готовый контент для каталогов, рекламы и соцсетей: Кахетия, Имерети, Рача-Лечхуми и другие регионы.',
    },
    {
        title: 'Крупные агрохолдинги',
        text: 'Регулярная сезонная съёмка для мониторинга больших территорий, архивирования динамики и картирования.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фотографии с телефона',
        text: 'Хорошее вино и честный продукт теряют ценность в глазах клиента, если сайт и соцсети выглядят как домашний архив.',
    },
    {
        title: 'Невозможно передать масштаб',
        text: 'Гектары лоз на фоне Кавказа нельзя показать с земли. Без аэровидео турист и покупатель не понимают, что выбирают.',
    },
    {
        title: 'Слабая онлайн-видимость',
        text: 'Поисковая выдача и карты чаще показывают винодельни с видеоконтентом. Без него вы уступаете конкурентам по вниманию.',
    },
    {
        title: 'Трудности с экспортными переговорами',
        text: 'Дистрибьюторы хотят видеть производство и инфраструктуру. Без профессионального видео переговоры затягиваются или не стартуют.',
    },
    {
        title: 'Сезонность без отдачи',
        text: 'Ртвели проходит, но без съёмки не превращается в актив. Один день съёмки даёт контент на весь следующий год.',
    },
    {
        title: 'Нет отличия от соседей',
        text: 'В одном районе сотни виноделен. Сильный визуал делает ваше место узнаваемым и формирует отдельный образ бренда.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Больше бронирований агротуров',
        text: 'Туристы выбирают глазами. Качественное видео поднимает конверсию из просмотра в бронь.',
    },
    {
        title: 'Выход на международный рынок',
        text: 'Имиджевый ролик открывает двери к зарубежным дистрибьюторам, блогерам и туристическим агентствам.',
    },
    {
        title: 'Рост среднего чека',
        text: 'Винодельня, которая выглядит премиально, воспринимается как продукт более высокого класса.',
    },
    {
        title: 'Вирусный охват',
        text: 'Кадры над виноградниками Кахетии органически распространяются: репосты, сохранения, отметки друзей.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Не теряет туристов к конкурентам',
        text: 'Пока другие винодельни усиливают видеоприсутствие, вы сохраняете видимость в поиске и на картах.',
    },
    {
        title: 'Не теряет переговоры',
        text: 'Инвестор и дистрибьютор, увидевшие хозяйство с воздуха, приходят на встречу подготовленными.',
    },
    {
        title: 'Не теряет время на повторные объяснения',
        text: 'Готовый ролик работает вместо длинных описаний: его смотрят, пересылают и публикуют.',
    },
    {
        title: 'Не теряет деньги на переделку',
        text: 'Снимаем по шот-листу и задаче, а не по принципу «снимем и посмотрим потом».',
    },
];

const shootDayItems: string[] = [
    'Выезд оператора-пилота на объект',
    'Брифинг на месте и согласование приоритетных точек',
    'Плановая аэросъёмка на DJI Air 3S (4K, stabilized)',
    'FPV-пролёты на DJI Avata 2 (в пакетах, где включено)',
    'Съёмка деталей: грозди, бочки, квеври, процесс Ртвели',
    'Резервное время на дубли и корректировку маршрута',
];

const finalResultItems: string[] = [
    'Смонтированный имиджевый ролик 1,5–3 минуты (цветокоррекция, музыка, титры)',
    'Короткие версии для соцсетей 15–60 секунд (количество зависит от пакета)',
    'Фотоподборка с воздуха 20–60 фото (JPEG/RAW)',
    'Вертикальные версии 9:16 для Stories, Reels и TikTok',
    'Горизонтальные версии 16:9 для YouTube и сайта',
    'Передача через облако в течение 3–7 рабочих дней',
];

const useCases: CardItem[] = [
    {
        title: 'Имиджевый ролик для сайта и YouTube',
        text: 'Панорама виноградника, вид на винодельню, детали производства и атмосфера хозяйства в одном основном материале.',
    },
    {
        title: 'Контент для Instagram и TikTok',
        text: 'Серия коротких историй: закаты над лозами, сбор урожая, наполнение квеври, дегустации.',
    },
    {
        title: 'Презентация для дистрибьютора',
        text: 'Видео-визитка для экспортных переговоров, которая показывает масштаб, оснащение и терруар до личного визита.',
    },
    {
        title: 'Продвижение агротура или wine-тура',
        text: 'Контент для турплатформ, агентств и рекламных кампаний: что увидит гость и какая атмосфера его ждёт.',
    },
    {
        title: 'Событийная съёмка Ртвели',
        text: 'Съёмка сбора урожая с воздуха: люди, ряды лоз, традиционный процесс. Один из самых сильных вирусных форматов.',
    },
    {
        title: 'Инвестиционная документация',
        text: 'Фиксация границ участка, дорог, инфраструктуры и смежных земель для сделки, расширения или привлечения инвестора.',
    },
];

const examples: CardItem[] = [
    {
        title: 'Имиджевый ролик: семейная винодельня в Кахетии',
        text: 'Рассвет над рядами Саперави, подъём над маранью, пролёт вдоль лоз, кадры квеври и закат над долиной. Финал — 2-минутный ролик с кинематографической цветокоррекцией.',
    },
    {
        title: 'Ртвели: сбор урожая в горной Рача',
        text: 'FPV-пролёт над рабочими рядами, динамика процесса и вертикальные ролики по 20–30 секунд. За день — серия из 8 готовых публикаций.',
    },
    {
        title: 'Агротуризм: промо для турагентства Кахети',
        text: 'Три локации за один день: усадьба, смотровая площадка, дегустационный зал. Итог — ролик 90 секунд + 4 короткие версии под платформы.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '8 000 лет',
        label: 'История виноделия Грузии',
        text: 'Грузия считается исторической родиной вина, а метод квеври внесён в список ЮНЕСКО. Историю хозяйства важно показать визуально.',
    },
    {
        value: '70 км/декаду',
        label: 'Смещение ареалов из-за климата',
        text: 'Климат меняется, и окно уникальности локаций ограничено. Контент фиксирует терруар в конкретный момент времени.',
    },
    {
        value: 'В 3–5 раз',
        label: 'Больше вовлечённость видео',
        text: 'Публикации с видео чаще получают реакцию, чем текст и фото; для wine-контента этот разрыв обычно ещё выше.',
    },
    {
        value: '1 день',
        label: 'Контентный запас на 3 месяца+',
        text: 'При правильном плане один съёмочный день закрывает 10–15 публикаций, основной ролик и фотоподборку.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка виноградников и для чего она нужна?',
        answer:
            'Это съёмка винодельни, виноградника или агроусадьбы с помощью дрона. Она показывает масштаб территории, рельеф и расположение объектов. Для виноделен особенно важно передать дух места: терруар, архитектуру и атмосферу, которые помогают продавать туры, вино и экспортную историю бренда.',
    },
    {
        question: 'Можно ли летать на дроне в Кахетии и других регионах Грузии?',
        answer:
            'Да, в открытой сельской местности и на частных угодьях за пределами ограниченных зон коммерческая съёмка возможна. Мы работаем по правилам GCAA, проверяем зону заранее и при необходимости оформляем разрешения.',
    },
    {
        question: 'Влияет ли погода на съёмку?',
        answer:
            'Да, это ключевой фактор. Лучший свет обычно утром после рассвета и за час до заката. При сильном ветре, дожде или тумане съёмку переносим. Для Кахетии сильные визуальные сезоны: май–июль и сентябрь–октябрь (Ртвели).',
    },
    {
        question: 'Как долго снимается один объект?',
        answer:
            'Стандартно 4–6 часов на объекте. Этого хватает, чтобы снять территорию, здания, виноградник и детали процесса. Для больших хозяйств или нескольких локаций планируется расширенный формат.',
    },
    {
        question: 'Нужно ли готовить объект к съёмке?',
        answer:
            'Специальной подготовки не требуется. Достаточно убрать лишние временные предметы из ключевых точек кадра. Ракурсы, маршруты и время съёмки мы берём на себя.',
    },
    {
        question: 'В каком формате клиент получает материалы?',
        answer:
            'Вы получаете готовый ролик в MP4 (4K/Full HD), фото в JPEG и RAW по запросу, плюс версии 16:9 для сайта/YouTube и 9:16 для Stories/TikTok. Передача через облако.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка виноградника в Грузии?',
        answer:
            'Базовый пакет — от 390 ₾. Стандартный съёмочный день с монтажом — от 890 ₾. Расширенный пакет с FPV и дополнительным контентом — от 1 490 ₾. Точная цена зависит от расстояния, задач и объёма постпродакшна.',
    },
    {
        question: 'Какие форматы итогового контента вы отдаёте?',
        answer:
            'Основной ролик 16:9 (1,5–3 мин), короткие ролики 9:16 (15–60 сек), фото JPEG/RAW. По запросу доступны raw footage, версии с субтитрами, замедленные фрагменты или вариант без музыки.',
    },
    {
        question: 'Как быстро будет готов материал?',
        answer:
            'Фотоподборка обычно готова за 2–3 рабочих дня, смонтированный ролик — за 5–7 рабочих дней. Срочный монтаж за 2–3 дня доступен как доп. опция.',
    },
    {
        question: 'Нужны ли разрешения GCAA для съёмки в Кахетии?',
        answer:
            'Для большинства объектов в открытой сельской зоне отдельное разрешение не требуется. Если объект в буферной или ограниченной зоне, оформляем согласование заранее (обычно 1–3 рабочих дня).',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Нет, работаем по всей Грузии: Тбилиси, Кахетия, Картли, Имерети, Рача, Аджария и другие регионы. Выезды свыше 80 км считаются отдельно.',
    },
    {
        question: 'Можно ли снять Ртвели, если это сезонная услуга?',
        answer:
            'Да, Ртвели — один из самых востребованных форматов. Обычно сезон активен с конца августа по октябрь в зависимости от региона и сорта. Оптимально бронировать дату за 2–3 недели.',
    },
    {
        question: 'Можно ли заказать регулярную съёмку раз в месяц?',
        answer:
            'Да, для мониторинга лоз и регулярного контент-плана доступен абонементный формат с индивидуальным расчётом частоты, логистики и объёма материалов.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Работаем в Грузии и знаем контекст',
        text: 'Базируемся в Тбилиси, регулярно снимаем в регионах и понимаем локальную логистику, свет и сезонность.',
    },
    {
        title: 'Оборудование под задачу',
        text: 'DJI Air 3S для стабильной панорамы и детализации, DJI Avata 2 для FPV-пролётов сквозь ряды лоз и арки марани.',
    },
    {
        title: 'Съёмка с планированием',
        text: 'Перед выездом формируем шот-лист и тайминг света, чтобы финальный монтаж был цельным, а не случайным.',
    },
    {
        title: 'Готовый контент, а не просто исходники',
        text: 'Вы получаете смонтированные и обработанные материалы, готовые к публикации. Raw — по запросу.',
    },
    {
        title: 'Работа по задаче клиента',
        text: 'Контент для экспорта, соцсетей, туризма и сайта отличается. Подбираем под цель, а не по шаблону.',
    },
    {
        title: 'Соответствие правилам GCAA',
        text: 'Дроны зарегистрированы, пилоты сертифицированы, а для сложных зон заранее оформляются необходимые согласования.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Созвон и бриф',
        text: 'Формулируем цель, нужные форматы, дату и локацию. Согласовываем стоимость и пакет.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка и планирование',
        text: 'Проверяем карту ограничений GCAA, собираем шот-лист и маршруты, смотрим прогноз погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Работаем по плану на локации, гибко реагируя на свет, погоду и новые сцены.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Отбираем лучшие кадры, делаем цветокоррекцию, музыку, титры и адаптации под платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и правки',
        text: 'Отдаём материалы через облако и вносим согласованные небольшие правки в финальную версию.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Стартовый',
        subtitle: 'Быстрый старт для небольших хозяйств',
        price: 'от 390 ₾',
        duration: '2–3 часа на объекте',
        delivery: '3 рабочих дня',
        items: [
            'Выезд в пределах 80 км от Тбилиси',
            'Аэросъёмка территории и виноградника',
            '20 обработанных фото (JPEG)',
            '1 короткий ролик 16:9 до 60 секунд',
            'Цветокоррекция без нарративного монтажа',
        ],
        addons: ['Вертикальная версия 9:16 — +50 ₾', 'RAW-файлы — +80 ₾', 'Срочно (1–2 дня) — +150 ₾'],
    },
    {
        title: 'Стандартный',
        subtitle: 'Основной пакет под сайт, соцсети и презентации',
        price: 'от 890 ₾',
        duration: 'Полный день (5–6 часов)',
        delivery: '5–7 рабочих дней',
        items: [
            'Выезд в пределах 80 км от Тбилиси',
            'Полная аэросъёмка объекта на DJI Air 3S',
            '40 обработанных фото (JPEG + опционально RAW)',
            'Имиджевый ролик 16:9 на 1,5–2 минуты с музыкой',
            '2 коротких ролика 9:16 до 45 секунд',
            'Передача через облако',
        ],
        addons: [
            'FPV-пролёты DJI Avata 2 — +200 ₾',
            'Дополнительные Reels (3 шт.) — +150 ₾',
            'Дополнительная локация — +200 ₾',
            'Срочно (2–3 дня) — +200 ₾',
        ],
        popular: true,
    },
    {
        title: 'Премиум',
        subtitle: 'Максимальный пакет для экспорта и кампаний',
        price: 'от 1 490 ₾',
        duration: 'Полный день + второй день по договорённости',
        delivery: '7 рабочих дней',
        items: [
            'Выезд в пределах 120 км от Тбилиси',
            'DJI Air 3S + FPV DJI Avata 2',
            '60 обработанных фото (JPEG + RAW)',
            'Имиджевый ролик 16:9 на 2–3 минуты',
            '5 вертикальных роликов 9:16 для Reels/TikTok',
            'Дополнительная горизонтальная версия 16:9 (60–90 сек)',
            'До 2 локаций в одном проекте',
            'Передача через облако + резервный диск по запросу',
        ],
        addons: [
            'Третья и следующие локации — +200 ₾',
            'Интервью с виноделом (наземная съёмка) — +150 ₾',
            'Дополнительный день в Ртвели — индивидуально',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка для туризма',
        text: 'Съёмка маршрутов, природных локаций и культурных объектов для туристических кампаний.',
        href: '#contact',
        note: 'Скоро',
    },
    {
        title: 'FPV-съёмка',
        text: 'Кинематографические пролёты сквозь ряды виноградника, арки и пространства марани.',
        href: '/drone-fpv-cinema',
    },
    {
        title: 'Аэросъёмка мероприятий',
        text: 'Ртвели, дегустации, фестивали и корпоративные события с воздуха.',
        href: '/drone-services/drone-events',
    },
    {
        title: '360° тур для туризма',
        text: 'Иммерсивный виртуальный тур по винодельне для сайта, карт и туристических платформ.',
        href: '/360-tour-service/360-tour-tourism',
    },
];

const mistakes: MistakeItem[] = [
    {
        title: 'Снимают только один раз и «на всё»',
        text: 'Виноградник выглядит по-разному по сезонам. Один неудачный выезд может дать контент, который не передаёт реальную красоту места.',
    },
    {
        title: 'Снимают в середине дня',
        text: 'Жёсткий зенитный свет делает картинку плоской. Лучшее время — первый час после рассвета и последний час перед закатом.',
    },
    {
        title: 'Заказывают только видео и забывают про фото',
        text: 'Фото нужны сайту, прессе и каталогам, а видео — соцсетям и презентациям. Оптимально снимать оба формата за один выезд.',
    },
    {
        title: 'Работают без шот-листа',
        text: 'Без плана получается много похожих кадров и мало важных ракурсов: вид на горы, марани, ряды лоз, центральные точки хозяйства.',
    },
    {
        title: 'Ожидают «быстрый монтаж за ночь»',
        text: 'Качественный имиджевый монтаж требует времени. Обещание «завтра утром» часто означает формальную сборку без глубины.',
    },
    {
        title: 'Не думают о дистрибуции',
        text: 'Контент должен сразу иметь план публикации: каналы, форматы, подписи. Иначе даже хорошее видео остаётся в папке.',
    },
];

const freeTips: string[] = [
    'Снимите короткий ролик на смартфон в золотой час: 5–7 утра или за час до заката.',
    'Добавьте хотя бы одно фото с воздуха на главную страницу сайта для более сильного первого впечатления.',
    'Опишите ваш терруар в 2–3 предложениях: высота, регион, горы на горизонте — это помогает и SEO, и доверию.',
    'Составьте список ключевых ракурсов заранее: аллея, вид на горы, старая стена, сцены Ртвели.',
    'Проверьте карточку Google Maps и добавьте минимум 5–10 актуальных фото через Google Business Profile.',
];

const checklist: string[] = [
    'Дата подтверждена за 5–7 дней и прогноз погоды проверен',
    'Зона съёмки проверена на ограничения GCAA',
    'Шот-лист согласован: ракурсы, приоритеты, порядок',
    'Из ключевых точек кадра убраны лишние временные элементы',
    'Определён золотой час: выезд до рассвета или за 2 часа до заката',
    'Согласовано, нужны ли люди в кадре (команда, гости, работники)',
    'Уточнены форматы финального материала и необходимость RAW',
    'Подтверждён способ передачи файлов и сроки выдачи',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Как аэросъёмка помогает грузинским винодельням продавать вино на экспорт?',
        answer: [
            'Иностранные дистрибьюторы часто принимают первичное решение дистанционно, не приезжая на объект.',
            'Видео с дрона показывает масштаб хозяйства, инфраструктуру и терруар в формате, который нельзя передать текстом или отдельными фото.',
            'Ролик 2–3 минуты работает как предварительный визит и используется в рассылках, на выставках и в переговорах с импортёрами.',
        ],
    },
    {
        question: 'Какое лучшее время года для съёмки виноградников в Грузии?',
        answer: [
            'Май–июнь: молодые зелёные лозы и яркий контраст с рельефом.',
            'Июль–август: зрелые грозди, насыщенные цвета и детали продукта.',
            'Сентябрь–октябрь: Ртвели, золотая листва и максимальная кинематографичность. Оптимально планировать минимум два выезда в год.',
        ],
    },
    {
        question: 'Что такое FPV-съёмка и зачем она нужна винодельням?',
        answer: [
            'FPV — это управляемый вручную динамичный пролёт от первого лица через узкие пространства.',
            'Для виноделен это возможность пролететь между рядами лоз, под арками марани и через погреб, создавая эффект присутствия.',
            'Такой формат особенно хорошо работает в коротких соцсетевых роликах, где важно захватить внимание в первые секунды.',
        ],
    },
    {
        question: 'Подходит ли аэросъёмка для небольшой семейной винодельни?',
        answer: [
            'Да, и часто именно небольшие хозяйства получают самый заметный эффект от первого профессионального визуала.',
            'Для сильного ролика не нужны сотни гектаров: достаточно выразительного рельефа, архитектуры и атмосферы.',
            'Базовый пакет с фото и коротким роликом закрывает стартовую задачу и помогает быстро обновить сайт и соцсети.',
        ],
    },
    {
        question: 'Как Breus Media работает с удалёнными регионами Грузии?',
        answer: [
            'Для объектов в пределах 80 км от Тбилиси действует базовая логистика, дальше расчёт строится по расстоянию.',
            'В удалённых регионах возможен формат с ночёвкой, чтобы снять лучший утренний и вечерний свет.',
            'Логистику и тайминг планируем заранее, чтобы съёмочный день был максимально результативным.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка для недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'FPV-съёмка', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: '360° тур для туризма', href: '/360-tour-service/360-tour-tourism' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
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
    name: 'Аэросъёмка виноградников и виноделен в Грузии',
    description:
        'Аэросъёмка виноградников, виноделен и агротуров в Грузии. Имиджевые ролики, контент для соцсетей, мониторинг территорий и материалы для экспортных переговоров.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: [
        { '@type': 'Place', name: 'Тбилиси' },
        { '@type': 'Place', name: 'Кахетия' },
        { '@type': 'Place', name: 'Картли' },
        { '@type': 'Place', name: 'Имерети' },
        { '@type': 'Place', name: 'Рача' },
        { '@type': 'Place', name: 'Аджария' },
        { '@type': 'Place', name: 'Грузия' },
    ],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '390',
        highPrice: '1490',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео и 360° туры для бизнеса в Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
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

export default function DroneWinePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-wine-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Wine Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка виноградников и виноделен в Грузии
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Имиджевое видео с дрона для вашей винодельни: передаём масштаб, атмосферу и терруар так,
                                чтобы клиент, турист или дистрибьютор захотел приехать ещё до первой дегустации.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Грузия — одна из древнейших винодельческих стран мира. Алазанская долина, Кахетия, Рача и
                                Имерети уникальны по-своему, но многие хозяйства до сих пор показывают себя плоско. Аэровидео
                                меняет это: масштаб лоз, пролёты над маранью во время Ртвели, архитектура и рельеф в одном
                                визуальном языке. Работаем по всей стране: Тбилиси, Телави, Сигнаги, Цинандали, Гори, Кутаиси.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры работ
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 390 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Винодельни, виноградники, агротуризм.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–6 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Кахетия, Картли, Имерети, Рача, Аджария</li>
                                    <li>Имидж, Reels, экспорт, мониторинг</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка для виноделен</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка для виноделен и агробизнеса — это создание видео и фото с дрона, которое показывает
                            масштаб, характер и атмосферу хозяйства. Это не просто «красивые кадры сверху», а рабочий
                            инструмент маркетинга, туризма и доверия покупателей.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Основной съёмочный инструмент — DJI Air 3S: 48 МП, 4K/60fps и стабильный контролируемый пролёт.
                            Для узких траекторий между рядами лоз и внутри пространства марани используем FPV-дрон DJI Avata 2,
                            чтобы получить эффект кинематографического полёта от первого лица.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Под каждую задачу формируем отдельный план: имиджевый ролик, материалы для соцсетей, экспортную
                            презентацию или мониторинг территории. На выходе вы получаете готовый смонтированный контент для
                            немедленного использования.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому подходит аэросъёмка виноградников</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что тормозит продажи вашего вина</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h2 className="text-2xl font-bold md:text-3xl">Что это даёт: зарабатывает</h2>
                            <div className="mt-6 space-y-4">
                                {earnCards.map((item, index) => (
                                    <div key={item.title} className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Пункт {index + 1}</p>
                                        <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/72">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h2 className="text-2xl font-bold md:text-3xl">Что это даёт: не теряет</h2>
                            <div className="mt-6 space-y-4">
                                {saveCards.map((item, index) => (
                                    <div key={item.title} className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Пункт {index + 1}</p>
                                        <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/72">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Работаем по всей Грузии: Кахетия, Картли, Имерети, Рача, Аджария. Один съёмочный день — и у
                            вас контентный запас на 12 месяцев вперёд.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в съёмку</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Для каких задач используют аэросъёмку</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры работ (концептуальные)</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые имеют значение</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="FAQ для первого заказа" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по цене, логистике и разрешениям"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Стандартный выезд занимает 4–6 часов; готовый контент — в течение 5–7 рабочих дней после съёмки." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/72">{card.subtitle}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/55">{card.duration}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Срок: {card.delivery}</p>

                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>

                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Дополнительно</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, какой пакет подойдёт именно вашему хозяйству? Расскажем, что реально нужно под вашу
                            задачу, и предложим вариант без переплаты.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => {
                            const card = (
                                <>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                        {service.note ? (
                                            <span className="rounded-full border border-[#FFD23F]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFD23F]">
                                                {service.note}
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                    <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                                </>
                            );

                            if (service.href.startsWith('#')) {
                                return (
                                    <a
                                        key={service.title}
                                        href={service.href}
                                        className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                    >
                                        {card}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    {card}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типичные ошибки при заказе аэросъёмки виноградников</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно сделать прямо сейчас</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к съёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Другие страницы, которые могут быть полезны</h2>
                    </div>

                    <div className="mt-8 grid gap-4">
                        {navigationLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                {index + 1}. {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Один хорошо спланированный выезд в сезон может стать основой всего вашего контент-плана на
                            месяцы вперёд. Если задача актуальна, давайте соберём оптимальный формат под вашу винодельню.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку винодельни</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите локацию, цель и желаемые даты. Подберём пакет, рассчитаем логистику и предложим
                                    понятный план съёмки под вашу задачу.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <WineContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-wine-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
