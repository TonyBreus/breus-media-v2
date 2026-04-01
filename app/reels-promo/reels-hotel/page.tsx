import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
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

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PackageCard = {
    title: string;
    price: string;
    subtitle: string;
    features: string[];
    featured?: boolean;
};

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-hotel';
const PAGE_TITLE = 'Reels для отеля в Тбилиси — съёмка для Instagram и TikTok | Breus Media';
const PAGE_DESCRIPTION =
    'Короткие вертикальные видео для отеля: Instagram Reels, TikTok, YouTube Shorts. Привлекайте новых гостей из соцсетей. От 200 ₾ за ролик, Тбилиси.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';

const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';
const REEL_EXAMPLE_THUMB =
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80';

const heroIntro =
    'Instagram Reels и TikTok — это сегодня главный канал, по которому путешественники открывают новые места. Молодая пара из Москвы, экспат из Берлина, семья из Дубая — они все scrollят ленту, и ваш отель либо в ней есть, либо нет. Мы снимаем короткие вертикальные ролики, которые показывают атмосферу, номера, вид и детали вашего объекта — в формате, который работает в соцсетях. Один Reels — это тысячи потенциальных гостей, которые вас ещё не знают.';

const whatIsText =
    'Reels для отеля — это 15–60-секундные вертикальные ролики, снятые для Instagram, TikTok и YouTube Shorts. Каждый ролик — отдельная история: утро в номере, вид с террасы, завтрак, бокал вина у камина, панорама Старого Тбилиси из окна. Мы снимаем пакетами — несколько роликов за один визит — и отдаём готовые видео с монтажом, музыкой и субтитрами. Вам остаётся только публиковать по расписанию.';

const audienceItems = [
    'Бутик-отелям и дизайн-отелям с сильной визуальной идентичностью, которые хотят выйти за пределы аудитории Booking.',
    'Апарт-отелям и гестхаусам, которым важно строить прямую аудиторию в Instagram для снижения зависимости от OTA.',
    'Курортным объектам (Гудаури, Батуми, Боржоми) с сезонным трафиком — чтобы напоминать о себе весь год.',
    'Отелям, которые уже ведут Instagram, но контент устаревший или неубедительный.',
    'Маркетинг-менеджерам отелей, которым нужен регулярный поток готового контента без самостоятельной съёмки.',
    'Глэмпингам и эко-отелям с нестандартной атмосферой, которую лучше всего передаёт движущееся видео.',
];

const taskCards: CardItem[] = [
    {
        title: 'Создаёт постоянный поток контента',
        text: 'Instagram требует регулярности — без свежих видео алгоритм перестаёт показывать аккаунт новым людям.',
    },
    {
        title: 'Привлекает гостей через discovery',
        text: 'Ваш отель попадает в ленту тех, кто ещё не искал вас специально, но уже сохраняет красивый кадр в избранное.',
    },
    {
        title: 'Конвертирует просмотры в переходы к бронированию',
        text: 'Reels ведёт пользователя в профиль, а ссылка в профиле закрывает путь к прямому бронированию.',
    },
    {
        title: 'Снижает зависимость от платной рекламы',
        text: 'Органический охват качественного short-form видео частично заменяет таргет и сокращает стоимость привлечения.',
    },
];

const painCards: CardItem[] = [
    {
        title: '«У нас нет контента для соцсетей — публикуем раз в две недели»',
        text: 'Редкие посты = узкая аудитория = мало новых гостей из соцсетей.',
    },
    {
        title: '«Мы пробовали снимать сами — выглядит непрофессионально»',
        text: 'Без стабилизации, света и монтажного ритма ролик теряет доверие в первые секунды.',
    },
    {
        title: '«Не знаем, что снимать — каждый раз придумываем с нуля»',
        text: 'Мы приезжаем с готовым планом роликов: сцены, подача, переходы и приоритеты уже понятны.',
    },
    {
        title: '«Снимаем что-то, но нет подписчиков и бронирований»',
        text: 'Видео без хука в начале, структуры и CTA обычно не получают стабильного распространения.',
    },
    {
        title: '«Маркетолог уволился — выкладывать некому»',
        text: 'Пакет готовых роликов снимает зависимость от штатного контент-менеджера.',
    },
    {
        title: '«У конкурентов тысячи просмотров, у нас ноль»',
        text: 'Ключевая разница обычно в качестве продакшна и понимании алгоритма, а не только в числе подписчиков.',
    },
];

const earnItems = [
    'Прямые бронирования через Instagram: Reels приводит гостя в профиль и к ссылке бронирования без OTA-комиссии.',
    'Рост узнаваемости: чем чаще отель видят в ленте, тем выше шанс, что его вспомнят при планировании поездки.',
    'Реклама дешевле: ролики с сильной органикой обычно дают более выгодный CPM в таргете.',
    'Подписчики становятся активом: акции и сезонные офферы можно доносить напрямую.',
];

const saveItems = [
    'Остаётесь видимыми в межсезонье: регулярный контент поддерживает интерес в низкий сезон.',
    'Снижаете зависимость от OTA: больше прямых заявок — меньше комиссии посредникам.',
    'Не теряете аудиторию по локации: геотеги и хэштеги приводят новых путешественников.',
    'Не упускаете гостя на этапе профиля: пустой аккаунт отталкивает, активный конвертирует.',
];

const deliverables = [
    '4–8 готовых Reels (9:16, 1080p) с монтажом, лицензионной музыкой и переходами.',
    'Субтитры и текстовые оверлеи на выбранных языках (RU / EN / GE).',
    'Тексты публикаций с хэштегами и CTA под каждый ролик.',
    'Адаптации для TikTok и YouTube Shorts.',
    'Рекомендации по расписанию публикаций.',
    'Передача файлов в MP4 через облачный диск.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'MP4 9:16 (1080×1920), опционально 1:1 для постов.',
    },
    {
        title: 'Хронометраж',
        text: '15–30 секунд (стандарт), до 60 секунд по запросу.',
    },
    {
        title: 'Сроки',
        text: 'Съёмка 2–4 часа, монтаж одного ролика 2–3 рабочих дня, пакета — 5–7 дней.',
    },
    {
        title: 'Правки',
        text: '1 раунд правок на каждый ролик включён.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Отель запускает Instagram с нуля',
        text: 'Базовый пакет из 8 роликов: номера, завтрак, лобби, вид, команда. Контент на первый месяц регулярных публикаций.',
    },
    {
        title: 'Охваты упали',
        text: 'Пакет свежих Reels с новым монтажным ритмом и хук-открытием в первые 2 секунды помогает перезапустить алгоритм.',
    },
    {
        title: 'Сезонная рекламная кампания',
        text: 'Снимаем тематический контент: «Лето на террасе», «Новогодняя ночь», «Романтический ужин».',
    },
    {
        title: 'Апарт-отель хочет показать разные юниты',
        text: 'Серия роликов по типам апартаментов: студия, семейный юнит, пентхаус.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Бутик-отель, Старый Тбилиси, 14 номеров',
        text: 'После 3 месяцев паузы сняли 6 Reels. Первый ролик дал охват в 8 раз выше среднего по аккаунту.',
    },
    {
        title: 'Апарт-отель, Сабуртало, 40 юнитов',
        text: 'Сделали серию «тур по апарту» с EN-субтитрами. Команда отметила рост обращений в директ.',
    },
    {
        title: 'Глэмпинг, Кахетия',
        text: 'Сюжеты про закат, костёр, утро в горах и виноградники дали стабильный органический reach в travel-аудитории.',
    },
];

const socialProofItems = [
    'Reels обычно получает заметно больший органический охват, чем статичные и обычные видео-посты.',
    'Путешественники всё чаще выбирают направление поездки после коротких видео в Instagram и TikTok.',
    'Регулярный ритм публикаций 3–4 раза в неделю поддерживает рост аккаунта лучше, чем разовые рывки.',
    'Breus Media работает с отелями по всей Грузии и учитывает локальную travel-специфику.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels и зачем они отелю?',
        answer:
            'Reels — короткие вертикальные видео в Instagram, которые платформа показывает не только подписчикам, но и новой аудитории. Для отеля это самый доступный инструмент органического роста.',
    },
    {
        question: 'Чем Reels отличается от обычного видео-поста?',
        answer:
            'Reels — формат 9:16 с отдельным алгоритмом и лентой. У него сильнее потенциал охвата новых пользователей.',
    },
    {
        question: 'Сколько Reels нужно в месяц?',
        answer:
            'Практичный ориентир для отеля — 6–12 роликов в месяц (1–3 публикации в неделю).',
    },
    {
        question: 'Нужно ли платить за продвижение Reels?',
        answer:
            'Нет. Базовый охват может быть полностью органическим. Таргет нужен для масштабирования, а не как обязательный старт.',
    },
    {
        question: 'Нужно ли самому придумывать темы для роликов?',
        answer: 'Нет. План съёмки, сцены и идеи мы готовим заранее под ваш объект и сезон.',
    },
    {
        question: 'Можно ли использовать эти ролики в рекламе?',
        answer:
            'Да. Финальные ролики подходят для Meta Ads, TikTok и YouTube Shorts.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит съёмка Reels для отеля?',
        answer:
            'Один ролик — от 200 ₾. Пакет из 4 роликов — от 650 ₾. Пакет из 8 роликов — от 1 100 ₾.',
    },
    {
        question: 'Нужно ли закрывать отель во время съёмки?',
        answer:
            'Нет. Снимаем в рабочем режиме, обычно утром или в окна между заездами.',
    },
    {
        question: 'Как быстро будут готовы ролики?',
        answer: 'Обычно 5–7 рабочих дней после съёмки.',
    },
    {
        question: 'Что если не понравится монтаж?',
        answer: '1 раунд правок на каждый ролик включён в стоимость.',
    },
    {
        question: 'Помогаете ли вы с текстами для публикаций?',
        answer:
            'Да. Для пакетов Standard и Full готовим подписи с CTA и хэштегами.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Выезжаем в Батуми, Гудаури, Сигнахи, Боржоми и другие регионы по согласованию.',
    },
];

const whyBreusItems = [
    'Снимаем Reels именно для отельной ниши и понимаем ожидания путешественника.',
    'Оборудование: стабилизатор, свет для интерьеров, DJI Air 3S для аэросцен.',
    'Пакетный формат: один визит закрывает контент на месяц.',
    'Мультиязычность RU / EN / GE.',
    'Быстрый цикл и чёткие сроки без затянутых пауз.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (онлайн, 30 минут)',
        text: 'Обсуждаем объект, аудиторию, сценарии, стиль и объём пакета.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Составляем shot-list и логику роликов до выезда.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный визит (2–4 часа)',
        text: 'Снимаем номера, общие зоны, детали и атмосферу.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж (5–7 рабочих дней)',
        text: 'Темп, музыка, цвет, субтитры, оверлеи и финальная сборка.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача',
        text: 'Отдаём ролики + тексты + хэштеги через облачный диск.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 650 ₾',
        subtitle: 'Старт или перезапуск контента',
        features: [
            '4 готовых Reels (9:16).',
            'Субтитры / оверлеи на 1 языке.',
            'Передача в MP4.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 100 ₾',
        subtitle: 'Стабильный monthly-поток',
        featured: true,
        features: [
            '8 готовых Reels.',
            'Субтитры на 2 языках (RU + EN).',
            'Описания с хэштегами.',
            'Рекомендации по расписанию.',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 800 ₾',
        subtitle: 'Instagram как канал бронирований',
        features: [
            '12 готовых Reels.',
            'Субтитры на 3 языках.',
            'Описания RU + EN.',
            'Версии для TikTok и Shorts.',
            '1 короткий горизонтальный ролик.',
            'Контент-план на месяц.',
        ],
    },
];

const packageCompareRows = [
    ['Количество Reels', '4', '8', '12'],
    ['Субтитры', '1 язык', '2 языка', '3 языка'],
    ['Описания с хэштегами', '—', '✓', '✓'],
    ['Версии для TikTok / Shorts', '—', '—', '✓'],
    ['Горизонтальный ролик', '—', '—', '✓'],
    ['Контент-план на месяц', '—', '—', '✓'],
    ['Цена', 'от 650 ₾', 'от 1 100 ₾', 'от 1 800 ₾'],
];

const relatedServices = [
    {
        title: 'Видеотур по отелю',
        href: '/promo-video/promo-hotel',
        text: 'Флагманский cinematic-ролик для сайта и Booking.',
    },
    {
        title: 'Сезонный контент-пакет',
        href: '/reels-promo/hotel-seasonal-content',
        text: 'Тематические ролики под лето, праздники и спецпредложения.',
    },
    {
        title: '360° тур по отелю',
        href: '/360-tour/360-tour-hotels',
        text: 'Интерактивный формат для сайта и удалённых гостей.',
    },
    {
        title: 'AI-описания для Booking',
        href: '/ai-content/hotel-ai-descriptions',
        text: 'Тексты по номерам и сервису на RU / EN / GE.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Публикуют только фото',
        text: 'Фото получают меньше органического охвата, чем short-form видео.',
    },
    {
        title: 'Снимают горизонтально',
        text: 'Reels — это вертикальный 9:16. Горизонталь в этом формате теряет эффективность.',
    },
    {
        title: 'Нет крючка в первые 2 секунды',
        text: 'Без сильного старта досмотры падают, и алгоритм урезает распространение.',
    },
    {
        title: 'Нет CTA',
        text: 'Зритель посмотрел ролик, но не понял следующий шаг. Призыв к действию обязателен.',
    },
    {
        title: 'Публикуют нерегулярно',
        text: 'Разовая активность не формирует устойчивый рост.',
    },
    {
        title: 'Игнорируют геотеги и хэштеги',
        text: 'Без локационных сигналов ролик теряет часть discovery-трафика.',
    },
];

const freeImprovements = [
    'Добавьте геотег Тбилиси (или вашего города) к каждому ролику.',
    'Снимите один вертикальный ролик на смартфон и опубликуйте в Reels уже сейчас.',
    'Перейдите на бизнес-аккаунт и добавьте ссылку бронирования в шапку профиля.',
    'Сделайте описание профиля на RU + EN.',
    'Соберите Highlights по темам: «Номера», «Виды», «Завтрак», «Тбилиси».',
];

const prepChecklist = [
    'Номера убраны и оформлены.',
    'Завтрак/сервировка готовы, если снимаем food-сцены.',
    'Персонал предупреждён о съёмке.',
    'Согласован список ключевых преимуществ объекта.',
    'Лобби и общие зоны готовы к кадру.',
    'Свет включён во всех ключевых зонах.',
    'Определены актуальные сезонные офферы.',
    'Ссылка на бронирование обновлена в Instagram.',
];

const longAnswers: CardItem[] = [
    {
        title: 'Как Reels работает для отельного маркетинга?',
        text: 'Reels показывается не только подписчикам, но и новой аудитории. Это позволяет даже небольшому аккаунту получать масштабный охват и постепенно превращать его в бронирования.',
    },
    {
        title: 'Что делает ролик эффективным?',
        text: 'Хук в начале, эмоция в середине и CTA в финале. Плюс качественная стабилизация, свет и правильный ритм монтажа.',
    },
    {
        title: 'Как часто публиковать?',
        text: 'Для стабильного роста ориентируйтесь на 3–4 публикации в неделю, где минимум 2 — Reels.',
    },
    {
        title: 'Как связать Reels с бронированием?',
        text: 'Через CTA в описании и ссылку в профиле. Сначала пользователь видит ролик, затем переходит в профиль и дальше в бронь.',
    },
];

const shortQa = [
    {
        question: 'Что такое Reels для отеля?',
        answer:
            'Это короткие вертикальные видео 15–60 секунд для Instagram, TikTok и Shorts, которые показывают атмосферу и номера отеля.',
    },
    {
        question: 'Сколько стоит Reels для отеля в Тбилиси?',
        answer: 'От 200 ₾ за ролик. Пакет 4 ролика — от 650 ₾. Пакет 8 роликов — от 1 100 ₾.',
    },
    {
        question: 'Как Reels помогает с прямыми бронированиями?',
        answer: 'Через переход в профиль и ссылку бронирования без OTA-комиссии.',
    },
    {
        question: 'Сколько Reels нужно в месяц?',
        answer: 'Обычно 6–12 роликов в месяц.',
    },
    {
        question: 'Нужна ли большая аудитория, чтобы Reels работал?',
        answer: 'Нет. Формат работает на discovery и может расти с нуля.',
    },
    {
        question: 'Можно ли использовать ролики в платной рекламе?',
        answer: 'Да. Ролики с хорошей органикой отлично усиливаются в Ads.',
    },
    {
        question: 'Кто снимает Reels для отелей в Тбилиси?',
        answer: 'Breus Media. Работаем в Тбилиси и по всей Грузии.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Гайд: 10 идей для Reels отеля',
        href: '/blog/hotel-reels-ideas',
    },
    {
        title: 'Как отелю набрать первые 1000 подписчиков',
        href: '/blog/hotel-instagram-tbilisi',
    },
    {
        title: 'Сравнение: Reels vs статичные посты',
        href: '/blog/reels-vs-posts',
    },
    {
        title: 'Пример Reels бутик-отеля',
        href: '/portfolio/hotel-reels-tbilisi',
    },
];

const internalTransitions = [
    {
        text: 'Хотите дать гостям полную картину об отеле до приезда?',
        href: '/promo-video/promo-hotel',
        label: 'Смотреть видеотур по отелю',
    },
    {
        text: 'Нужен контент под конкретный сезон или праздник?',
        href: '/reels-promo/hotel-seasonal-content',
        label: 'Смотреть сезонный контент-пакет',
    },
    {
        text: 'Хотите усилить OTA-тексты так же, как видео?',
        href: '/ai-content/hotel-ai-descriptions',
        label: 'Смотреть AI-описания для OTA',
    },
];

const myths: MythItem[] = [
    {
        myth: 'Reels работает только у больших аккаунтов.',
        reality: 'Алгоритм создан для discovery, поэтому охват может расти и у небольших аккаунтов.',
    },
    {
        myth: 'Достаточно снимать на смартфон.',
        reality: 'Профессиональный свет, стабилизация и монтаж заметно повышают результат.',
    },
    {
        myth: 'Наша аудитория не сидит в Instagram/TikTok.',
        reality: 'Путешественники 25–45 активно используют короткие видео при выборе направления.',
    },
    {
        myth: 'Без рекламы Reels не работает.',
        reality: 'У формата есть органический охват. Реклама — усилитель, а не обязательное условие.',
    },
    {
        myth: 'Мы уже выкладывали видео, но это не сработало.',
        reality: 'Видео и правильно спроектированный Reels — разные вещи. Важны формат, хук и CTA.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Reels',
        definition: 'Короткие вертикальные видео в Instagram с отдельной лентой и алгоритмом.',
    },
    {
        term: 'Discovery-охват',
        definition: 'Просмотры от пользователей, которые не подписаны на аккаунт.',
    },
    {
        term: 'Крючок (hook)',
        definition: 'Первые 1–3 секунды, которые удерживают внимание.',
    },
    {
        term: '9:16',
        definition: 'Вертикальное соотношение сторон для смартфонного просмотра.',
    },
    {
        term: 'CTA',
        definition: 'Призыв к действию в ролике или описании.',
    },
    {
        term: 'UGC',
        definition: 'Контент от гостей, который усиливает социальное доказательство.',
    },
];

const notFitItems = [
    'Отели, которым нужен один ролик «раз и навсегда» без регулярного контента.',
    'Проекты, которые ожидают устойчивый органический результат за 1–2 дня.',
    'Объекты с бюджетом ниже 400 ₾ на весь контент.',
    'Команды, не готовые публиковать материалы регулярно.',
];

const faqSchemaItems = [...beginnerFaqItems, ...moneyFaqItems, ...shortQa.map((item) => ({ ...item }))];

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
            name: 'Reels и промо',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для отеля',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Reels для отеля',
    description: 'Короткий вертикальный ролик для Instagram Reels / TikTok / Shorts.',
    embedUrl: REEL_EXAMPLE_EMBED,
    contentUrl: REEL_EXAMPLE_URL,
    thumbnailUrl: REEL_EXAMPLE_THUMB,
    uploadDate: '2026-03-22',
    publisher: {
        '@type': 'Organization',
        name: 'Breus Media',
        url: 'https://breus.media',
    },
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
    name: 'Reels для отеля в Тбилиси',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Batumi', 'Gudauri', 'Borjomi', 'Georgia'],
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
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
        lowPrice: '200',
        highPrice: '1800',
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

export default function ReelsHotelPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="reels-hotel-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.32),rgba(8,8,8,0.95)_72%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Reels для отеля · Тбилиси
                            </p>
                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для отеля — короткие видео для соцсетей и рекламы
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Ваш отель появляется в лентах новых гостей каждую неделю. Без рекламного бюджета.
                            </p>
                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить Reels-пакет
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-white/60">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE}
                            </p>
                        </div>
                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">Формат</p>
                                    <p className="mt-2 text-sm text-white/85">15–60 сек, вертикаль 9:16</p>
                                </div>
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">Срок</p>
                                    <p className="mt-2 text-sm text-white/85">2–4 часа съёмка, 5–7 дней пакет</p>
                                </div>
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">Цена</p>
                                    <p className="mt-2 text-sm text-white/85">От 200 ₾ за ролик</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Что это за услуга</h2>
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">{whatIsText}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Кому подходит</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Какую задачу решает услуга</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {taskCards.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Боли клиента</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {painCards.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Как помогает заработать</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {earnItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Как помогает не потерять</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {saveItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Deliverables</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {deliverables.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Что получает клиент на выходе</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {outputCards.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <MidCta
                text="Хотите, чтобы ваш отель появлялся в лентах новых гостей каждую неделю?"
                buttonLabel="Обсудить Reels-пакет"
                href="#contact"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Сценарии использования</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Локальный контекст</h2>
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                        Тбилиси, Батуми, Гудаури, Боржоми и Кахетия по-разному раскрываются в кадре. Мы подстраиваем
                        сюжет под локацию: старый город и балконы, море и террасы, горы и сезон, винные пейзажи и
                        атмосферу выходных.
                    </p>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Примеры и мини-кейсы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FFD23F]">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="video-example" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Пример Reels на странице</h2>
                    <div className="mt-8 overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-black">
                        <iframe
                            title="Пример Reels для отеля"
                            src={REEL_EXAMPLE_EMBED}
                            className="h-[620px] w-full"
                            loading="lazy"
                            allow="encrypted-media; fullscreen"
                        />
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Social proof и доказательства</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} variant="commercial" bgColor="#0D0D0D" />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" bgColor="#080808" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {whyBreusItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/80">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Съёмка пакета из 6–8 Reels занимает 2–4 часа. Работаем в рабочем режиме отеля, не мешаем гостям." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Этапы работы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-5">
                        {processSteps.map((item) => (
                            <article key={item.step} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#FFD23F]">{item.step}</p>
                                <h3 className="mt-2 text-sm font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Пакеты</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {packages.map((item) => (
                            <article
                                key={item.title}
                                className={`rounded-[16px] border p-6 ${
                                    item.featured
                                        ? 'border-[#FFD23F]/45 bg-[#18120A] shadow-[0_12px_30px_rgba(255,210,63,0.12)]'
                                        : 'border-[#2a2a2a] bg-[#121212]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-2xl font-bold text-[#FFD23F]">{item.price}</p>
                                <p className="mt-3 text-sm text-white/70">{item.subtitle}</p>
                                <ul className="mt-5 space-y-2">
                                    {item.features.map((feature) => (
                                        <li key={feature} className="text-sm leading-relaxed text-white/80">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Сравнение пакетов</h2>
                    <div className="mt-8 overflow-hidden rounded-[14px] border border-[#2a2a2a] bg-[#111111]">
                        <table className="w-full border-collapse text-left text-sm text-white/85">
                            <thead className="bg-[#171717] text-white">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">Что входит</th>
                                    <th className="px-4 py-3 font-semibold">Basic</th>
                                    <th className="px-4 py-3 font-semibold">Standard</th>
                                    <th className="px-4 py-3 font-semibold">Full</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageCompareRows.map((row) => (
                                    <tr key={row[0]} className="border-t border-[#2a2a2a]">
                                        <td className="px-4 py-3 text-white/75">{row[0]}</td>
                                        <td className="px-4 py-3">{row[1]}</td>
                                        <td className="px-4 py-3">{row[2]}</td>
                                        <td className="px-4 py-3">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Помощник выбора пакета</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
                        <li>Только начинаете или хотите обновить контент — выбирайте Basic.</li>
                        <li>Ведёте Instagram и нужен стабильный поток — выбирайте Standard.</li>
                        <li>Instagram — ключевой канал прямых бронирований — выбирайте Full.</li>
                    </ul>
                    <a
                        href="#contact"
                        className="mt-8 inline-flex rounded-[10px] border border-[#FFD23F]/45 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
                    >
                        Получить консультацию
                    </a>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Ваш отель может появляться в лентах тысяч потенциальных гостей каждую неделю
                    </h2>
                    <p className="mt-4 text-base text-white/75">Без рекламного бюджета. За счёт системного short-form контента.</p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Написать нам
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                        >
                            Выбрать пакет
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-white/60">{CONTACT_PHONE} · Тбилиси, работаем по всей Грузии</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Related services</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
                                <Link
                                    href={item.href}
                                    className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-[#FFD23F] hover:text-white"
                                >
                                    Перейти
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold md:text-5xl">Контакты</h2>
                    <p className="mt-6 text-base leading-relaxed text-white/78 md:text-lg">
                        Напишите в WhatsApp или Telegram — ответим в течение 2 часов. Работаем в Тбилиси, выезжаем в
                        Батуми, Гудаури, Кахетию и другие регионы.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                        >
                            WhatsApp
                        </a>
                        <a
                            href={TELEGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#229ED9] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                        >
                            Telegram
                        </a>
                        <a
                            href={`tel:${CONTACT_PHONE_RAW}`}
                            className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                        >
                            {CONTACT_PHONE}
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <p className="text-sm leading-relaxed text-white/70">
                        Breus Media — видеопродакшн в Тбилиси. Снимаем Reels, видеотуры, 360° туры и делаем AI-контент
                        для отелей по всей Грузии.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Частые ошибки отелей в соцсетях</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Что можно улучшить без покупки</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
                        {freeImprovements.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Чеклист готовности к съёмке Reels</h2>
                    <ul className="mt-8 grid gap-3 md:grid-cols-2">
                        {prepChecklist.map((item) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-4 text-sm text-white/80">
                                ☐ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Расширенные ответы</h2>
                    <div className="mt-8 space-y-4">
                        {longAnswers.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-6">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FFD23F]">
                                    {item.question}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {additionalMaterials.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <Link
                                    href={item.href}
                                    className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-[#FFD23F] hover:text-white"
                                >
                                    Открыть
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Внутренние переходы</h2>
                    <div className="mt-8 space-y-4">
                        {internalTransitions.map((item) => (
                            <p key={item.label} className="rounded-[14px] border border-[#2a2a2a] bg-[#111111] p-5 text-sm leading-relaxed text-white/80">
                                {item.text}{' '}
                                <Link href={item.href} className="font-semibold text-[#FFD23F] hover:text-white">
                                    {item.label}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Мифы и реальность</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FFD23F]">Миф</p>
                                <p className="mt-2 text-sm text-white/85">{item.myth}</p>
                                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/55">Реальность</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.reality}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Мини-словарь терминов</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[14px] border border-[#2a2a2a] bg-[#111111] p-6">
                                <h3 className="text-base font-semibold text-white">{item.term}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.definition}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Кому мы не подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/80 md:text-base">
                        {notFitItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneStickyCta heroId="reels-hotel-hero" />
            <DroneFooterStitch />
        </main>
    );
}
