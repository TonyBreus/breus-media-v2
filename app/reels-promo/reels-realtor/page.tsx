import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-realtor';
const PAGE_TITLE = 'Reels для риелтора в Тбилиси — контент для Instagram и TikTok | Breus Media';
const PAGE_DESCRIPTION =
    'Регулярные Reels для риелтора в Тбилиси. Личный бренд, входящие заявки, экспертный контент. Съёмка и монтаж под ключ. От 200 ₾ за ролик.';
const CONTACT_PHONE = '+995 574 619 393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';
const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';

const audienceItems = [
    'Риелтор с 1–3 годами опыта — уже есть что сказать, но нет системы и времени создавать контент регулярно.',
    'Опытный агент, который работает только по рекомендациям — хочет расширить воронку и получать входящие заявки из соцсетей.',
    'Агент, специализирующийся на иностранных покупателях — нужен англоязычный контент про рынок Тбилиси для аудитории из-за рубежа.',
    'Сотрудник агентства с личным аккаунтом — компания не делает личный контент за него, а сам не успевает.',
    'Небольшое агентство — хочет регулярное присутствие в соцсетях как у крупных игроков, но без штатного маркетолога.',
    'Агент, который переходит в Instagram из рекомендационного канала — понимает, что рынок меняется, и хочет выстроить систему заранее.',
];

const taskCards = [
    {
        title: 'Строит входящий поток, а не только разовые сделки',
        text: 'Порталы дают лиды под конкретный объект, а Reels строят бренд: вас запоминают и обращаются именно к вам, когда приходит время купить или продать.',
    },
    {
        title: 'Переводит из «ещё одного агента» в эксперта',
        text: 'Контент про районы Тбилиси, цены, процесс покупки и типичные ошибки демонстрирует компетентность и сокращает цикл переговоров.',
    },
    {
        title: 'Работает круглосуточно',
        text: 'Ролики продолжают собирать просмотры и заявки, пока вы на показах или в выходной. Это актив, который работает 24/7.',
    },
    {
        title: 'Даёт преимущество при выборе агента продавцом',
        text: 'Когда собственник выбирает между несколькими агентами, живой Instagram с полезным контентом даёт доверие ещё до первого звонка.',
    },
];

const painCards = [
    {
        title: '«Понимаю, что надо снимать, но постоянно откладываю»',
        text: 'Между показами и документами контент всегда уходит на потом. Мы забираем продакшн на себя: от вас нужна только съёмочная сессия раз в 2–4 недели.',
    },
    {
        title: '«Снимал сам — получилось стыдно выкладывать»',
        text: 'Плохой звук, дрожащая камера, неловкие паузы. Профессиональная съёмка и монтаж убирают технические ошибки и добавляют уверенности в кадре.',
    },
    {
        title: '«Не знаю, о чём снимать — тем нет»',
        text: 'Темы уже есть: это вопросы ваших клиентов. Мы собираем их в контент-план и превращаем в серию роликов на месяц вперёд.',
    },
    {
        title: '«Веду аккаунт, но подписчиков мало и заявок нет»',
        text: 'Проблема обычно в формате и регулярности. Стабильный ритм 1–2 ролика в неделю даёт лучший результат, чем редкие рывки.',
    },
    {
        title: '«Конкуренты уже ведут — я опаздываю»',
        text: 'В Тбилиси многие агенты всё ещё публикуют только объявления. Экспертный личный контент остаётся нишей, где можно быстро выделиться.',
    },
    {
        title: '«Меня находят по листингу, но не запоминают»',
        text: 'Reels создают личное знакомство: клиент видит лицо, слышит голос, понимает ваш подход. Это повышает шанс повторной сделки и рекомендаций.',
    },
];

const earningsItems = [
    'Входящие заявки без рекламного бюджета: органический охват Reels в Instagram и TikTok приводит новую аудиторию.',
    'Преимущество в выборе агента: активный профиль работает как дополнительный аргумент до первого звонка.',
    'Более сильное позиционирование: эксперт с аудиторией может работать с более дорогими объектами и выше комиссией.',
    'Реферальный эффект: подписчики делятся полезными роликами с теми, кто уже ищет агента.',
];

const saveItems = [
    'Не теряете клиентов, которые «ещё думают» 3–6 месяцев до сделки.',
    'Не зависите только от рекомендаций: появляется параллельный и управляемый канал заявок.',
    'Не выгораете от постоянной рекламы: контент продолжает работать после публикации.',
    'Не теряете базу при смене агентства: личный бренд и аудитория остаются с вами.',
];

const deliverables = [
    'Съёмка 4–8 Reels за одну сессию (30–90 секунд, формат 9:16).',
    'Монтаж с субтитрами, лицензионной музыкой и текстовыми вставками.',
    'Адаптация под Instagram Reels и TikTok с хук-открытием в первые 3 секунды.',
    'Горизонтальная версия для YouTube Shorts или Facebook — по запросу.',
    'Контент-план на месяц с темами и сценарным скелетом каждого ролика.',
    'Готовые тексты к постам (caption) на русском.',
    'Английские субтитры для роликов про рынок Тбилиси — при необходимости.',
    'Передача материалов через Google Drive раз в неделю или раз в 2 недели.',
];

const outputItems = [
    'MP4, 1080p, вертикальный 9:16 (основной формат).',
    'Горизонтальный 16:9 — по запросу.',
    'Субтитры: вшитые в видео или отдельный SRT-файл.',
    'Ритм: обычно 1–2 ролика в неделю.',
    'Папка с понятными именами файлов + готовые тексты к каждому ролику.',
];

const useCases = [
    {
        title: 'Агент работает с иностранными покупателями',
        text: 'Reels на русском и английском: обзоры районов, процесс покупки в Грузии, сравнение ЖК. Аудитория — релоканты и инвесторы из-за рубежа.',
    },
    {
        title: 'Молодой риелтор строит базу с нуля',
        text: 'Когда нет сильного сарафана, регулярный контент даёт первое знакомство заранее: клиент приходит уже «из контента».',
    },
    {
        title: 'Опытный агент усиливает рекомендации',
        text: 'При рекомендации новый контакт первым делом проверяет Instagram. Живой экспертный профиль ускоряет решение в вашу пользу.',
    },
    {
        title: 'Небольшое агентство без SMM-менеджера',
        text: 'Одна сессия раз в 3 недели на 6–8 роликов закрывает контент-план месяца без найма штатного маркетолога.',
    },
];

const miniCases = [
    {
        title: 'Агент в Ваке — 3 заявки за первый месяц',
        text: 'Запустили серию Reels с разбором районов Тбилиси. За первый месяц регулярного контента получили 3 органические заявки из Instagram.',
    },
    {
        title: 'Агентство из 5 человек — единый голос в соцсетях',
        text: 'Одна съёмочная сессия в месяц с одним из агентов дала 8 роликов на месяц. Аккаунт стал активным и начал привлекать подписчиков-клиентов.',
    },
    {
        title: 'Агент для иностранных покупателей — аудитория из Израиля',
        text: 'Серия на английском про налоги, районы и процесс покупки в Грузии. Видео про налоги набрало более 5 000 просмотров за первую неделю.',
    },
];

const socialProofItems = [
    'Понимаем специфику контента для риелторов: район, цена, процесс, советы работают лучше «сухих объявлений».',
    'Строим хук в первые 3 секунды — это напрямую влияет на досмотры и охваты.',
    'Субтитры включены по умолчанию: большинство смотрит Reels без звука.',
    'Снимаем изначально в вертикальном формате 9:16 на профессиональную камеру со стабилизацией.',
];

const beginnerFaqItems = [
    {
        question: 'Мне нужно много подписчиков, чтобы Reels работали?',
        answer:
            'Нет. Instagram продвигает Reels даже у небольших аккаунтов, если контент досматривают. Полезный ролик про рынок Тбилиси может набрать тысячи просмотров даже с нулевой базой.',
    },
    {
        question: 'Я боюсь камеры и не умею говорить на видео.',
        answer:
            'Это нормально. На первых сессиях мы даём структуру ответа и снимаем несколько дублей. После 2–3 съёмок большинство агентов чувствуют себя уверенно.',
    },
    {
        question: 'Что снимать: квартиры или рынок?',
        answer:
            'Для личного бренда лучше работает экспертный контент: районы, цены, ошибки покупателей и продавцов, процесс сделки. Ролики про отдельные объекты обычно имеют более узкий интерес.',
    },
    {
        question: 'Как часто публиковать?',
        answer:
            'Оптимальный ритм — 1–2 раза в неделю. Это достаточно для стабильного роста без перегруза по производству.',
    },
    {
        question: 'Нужно ли параллельно вести Stories?',
        answer:
            'Reels приводят новую аудиторию, Stories удерживают текущую. Мы фокусируемся на Reels и даём практичные рекомендации по Stories как поддерживающему формату.',
    },
    {
        question: 'Если я сменю агентство, что будет с контентом?',
        answer: 'Контент остаётся у вас в личном аккаунте. Личный бренд не обнуляется при переходе.',
    },
];

const moneyFaqItems = [
    {
        question: 'Сколько стоит Reel для риелтора?',
        answer: 'Один ролик — от 200 ₾. Пакет 4 ролика — от 650 ₾. Ежемесячный пакет 8 роликов — от 1 200 ₾.',
    },
    {
        question: 'Как часто нужны съёмочные сессии?',
        answer:
            'Обычно раз в 2–4 недели. За одну сессию снимаем 4–8 роликов, что закрывает 1–2 месяца публикаций в спокойном ритме.',
    },
    {
        question: 'Что входит в ежемесячный пакет?',
        answer:
            'Съёмка, монтаж 8 роликов с субтитрами, контент-план, тексты к постам и рекомендации по расписанию публикаций.',
    },
    {
        question: 'Можно заказать только монтаж, если снимаю сам?',
        answer:
            'Да. Вы присылаете сырой материал, мы делаем монтаж с субтитрами, музыкой и оверлеями. Стоимость монтажа — от 80 ₾ за ролик.',
    },
    {
        question: 'Нужно ли самому придумывать темы?',
        answer:
            'Нет. Проводим короткий бриф, собираем вопросы вашей аудитории и формируем контент-план. Вы только утверждаете темы.',
    },
    {
        question: 'Как быстро получу готовые ролики?',
        answer: 'Обычно 3–5 рабочих дней после съёмки. Передача идёт с запасом к дате публикации.',
    },
];

const whyBreusItems = [
    'Понимаем, что продаёт в недвижимости: строим темы на реальных вопросах покупателей и продавцов.',
    'Хук и структура каждого ролика проектируются под удержание внимания, а не «для красоты».',
    'Субтитры входят в стандарт: это не допопция.',
    'Одна сессия раз в 2–4 недели закрывает контент-систему на месяц и больше.',
    'Работаем в Тбилиси и учитываем локальный контекст районов и аудитории.',
];

const processSteps = [
    {
        step: 'Шаг 1',
        title: 'Бриф (15 минут)',
        text: 'Определяем аудиторию, районы, частые вопросы клиентов и желаемый стиль коммуникации.',
    },
    {
        step: 'Шаг 2',
        title: 'Контент-план',
        text: 'Собираем 8–12 тем и сценарный скелет: с какого хука начать и какие тезисы раскрыть.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочная сессия',
        text: 'За 1,5–2 часа снимаем 4–8 роликов. Вы говорите своими словами, мы направляем по структуре.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: '3–5 дней: лучшие дубли, ритм, субтитры, музыка, текстовые вставки и цветокоррекция.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и расписание',
        text: 'Получаете папку с роликами, caption-текстами и рекомендациями по датам публикаций.',
    },
];

const packages = [
    {
        title: 'Basic — Старт',
        price: 'от 650 ₾',
        subtitle: 'Для теста формата и первых результатов',
        features: [
            '1 съёмочная сессия',
            '4 готовых ролика с субтитрами и музыкой',
            'Контент-план на месяц (8 тем)',
            'Тексты к постам',
            'Срок: 4–5 дней после съёмки',
        ],
    },
    {
        title: 'Standard — Ежемесячный контент',
        price: 'от 1 200 ₾/мес',
        subtitle: 'Стабильное присутствие 1–2 ролика в неделю',
        features: [
            '1 съёмочная сессия в месяц',
            '8 роликов в месяц (субтитры, музыка, оверлеи)',
            'Контент-план на следующий месяц',
            'Тексты к постам и рекомендации по расписанию',
            'Передача за 3–4 дня до публикации',
        ],
        featured: true,
    },
    {
        title: 'Full — Личный бренд под ключ',
        price: 'от 2 000 ₾/мес',
        subtitle: 'Для серьёзного роста и двуязычного контента',
        features: [
            '2 съёмочные сессии в месяц',
            '14–16 роликов (Reels + горизонтальные версии)',
            'Английские субтитры для ключевых роликов',
            'Контент-план RU + EN и тексты RU + EN',
            'Ежемесячный разбор статистики и корректировка тем',
        ],
    },
];

const packageCompareRows = [
    ['Съёмочных сессий', '1', '1/мес', '2/мес'],
    ['Роликов', '4', '8/мес', '14–16/мес'],
    ['Субтитры', 'RU', 'RU', 'RU + EN'],
    ['Тексты к постам', 'Да', 'Да', 'RU + EN'],
    ['Контент-план', 'Да', 'Да + след. месяц', 'RU + EN + аналитика'],
    ['YouTube (горизонт.)', '—', '—', 'Да'],
    ['Разбор статистики', '—', '—', 'Да, ежемесячно'],
    ['Цена', '650 ₾ разово', '1 200 ₾/мес', '2 000 ₾/мес'],
];

const relatedServices = [
    {
        title: 'Видеосъёмка квартир для продажи',
        href: '/reels-promo/reels-real-estate',
        text: 'Контент под конкретный объект, а не под личный бренд агента.',
    },
    {
        title: 'Видеотур по квартире',
        href: '/promo-video/promo-real-estate',
        text: 'Подробный walk-through для листинга, сайта и удалённых покупателей.',
    },
    {
        title: 'Промо-видео для агентства',
        href: '/promo-video',
        text: 'Имиджевый ролик о компании и команде в целом.',
    },
    {
        title: 'AI-визуализация',
        href: '/ai-vizual',
        text: 'Интерьерная визуализация и обработка фото объектов.',
    },
];

const commonMistakes = [
    'Публиковать только объявления о продаже квартир без экспертной пользы.',
    'Снимать нерегулярно: всплеск контента и пауза на месяцы.',
    'Говорить только профессиональными терминами без языка покупателя.',
    'Игнорировать первые 3 секунды и начинать с «Привет, сегодня расскажу...».',
    'Выпускать ролики без субтитров, хотя большинство смотрит без звука.',
    'Ждать «идеального видео» и не публиковать готовый материал вовремя.',
];

const freeImprovements = [
    'Составьте список из 20 частых вопросов клиентов: это готовые темы для Reels.',
    'Добавьте автосубтитры ко всем уже снятым роликам.',
    'Начинайте ролик с вопроса, цифры или сильного тезиса.',
    'Снимайте строго вертикально и держите лицо в верхней трети кадра.',
    'Публикуйте стабильно, даже если ролик не кажется идеальным.',
];

const prepChecklist = [
    'Список из 8–10 тем согласован заранее.',
    'Фон нейтральный, без визуального шума.',
    'Одежда сдержанная, деловая-casual, без кричащих принтов.',
    'Свет направлен на лицо, не из-за спины.',
    'Микрофон подготовлен или выбрано тихое помещение.',
    'Телефон заряжен и есть свободная память, либо снимаем на нашу камеру.',
    'Готовность сделать 2–3 дубля на тему.',
    'Подготовлена первая фраза каждого ролика.',
];

const longTailQa = [
    {
        question: 'Как риелтору начать вести Instagram с нуля в 2026 году?',
        answer:
            'Старт проще, чем кажется: берёте 5 самых частых вопросов клиентов, снимаете 5 роликов и публикуете раз в неделю в течение месяца. Смотрите, какие темы набирают больше досмотров, и масштабируете их. Базово достаточно телефона, света и субтитров. Если хотите быстрый профессиональный старт, одна сессия с продакшном закрывает первый месяц контента.',
    },
    {
        question: 'Какие темы Reels лучше всего работают для риелтора в Тбилиси?',
        answer:
            'Лидируют темы, которые решают конкретные вопросы аудитории: сравнение районов, налоги и процесс покупки для иностранцев, ошибки при выборе квартиры, динамика цен, практические советы по торгу. Контент про конкретный листинг полезен, но обычно имеет более узкий охват.',
    },
    {
        question: 'Сколько времени занимает ведение Instagram для риелтора?',
        answer:
            'При самостоятельной работе это обычно 2–4 часа в неделю. С подрядчиком — 1,5–2 часа раз в 2–3 недели на съёмку, остальное делается командой продакшна. На дистанции регулярность выигрывает у перфекционизма: 1 ролик в неделю 3 месяца лучше, чем 10 роликов за один уикенд.',
    },
    {
        question: 'Помогает ли Instagram риелтору реально получать клиентов в Тбилиси?',
        answer:
            'Да, но это накопительный канал. Обычно 3–6 месяцев стабильной публикации формируют первые предсказуемые органические заявки. В Тбилиси большинство аккаунтов в недвижимости всё ещё ведутся как витрина объявлений, поэтому экспертный контент даёт заметное конкурентное преимущество.',
    },
];

const shortQa = [
    ['Сколько стоит Reel для риелтора в Тбилиси?', 'Один ролик — от 200 ₾, пакет 4 ролика — от 650 ₾, 8 роликов в месяц — от 1 200 ₾.'],
    ['Как часто нужно публиковать Reels?', 'Оптимально 1–2 раза в неделю. Это поддерживает рост и не перегружает процесс.'],
    ['Нужны ли субтитры?', 'Да, обязательно. Значительная часть аудитории смотрит Reels без звука.'],
    ['Какие темы работают лучше всего?', 'Сравнение районов, советы покупателям, процесс сделки, ошибки и рыночная аналитика.'],
    ['За сколько приходят первые клиенты?', 'Чаще всего при стабильной работе — через 3–6 месяцев.'],
    ['Нужны ли большие подписчики на старте?', 'Нет. Полезные Reels могут набирать охват и у новых аккаунтов.'],
    ['Можно заказать только монтаж?', 'Да, монтаж из ваших исходников доступен от 80 ₾ за ролик.'],
    ['Работаете с агентствами на несколько агентов?', 'Да, выстраиваем единый стиль и регулярный план для нескольких специалистов.'],
] as const;

const myths = [
    {
        myth: 'Нужно сначала набрать подписчиков, потом будут клиенты.',
        reality: 'Reels показываются новой аудитории независимо от текущего числа подписчиков.',
    },
    {
        myth: 'Людям неинтересно смотреть риелтора в Instagram.',
        reality: 'Аудитории нужны ответы на вопросы о рынке. Если вы их даёте, контент работает.',
    },
    {
        myth: 'Без дорогой камеры невозможно снимать Reels.',
        reality: 'Хороший свет и понятная структура важнее. Профессиональный монтаж усиливает результат.',
    },
    {
        myth: 'Нужен один вирусный ролик — и достаточно.',
        reality: 'Система и регулярность 1–2 ролика в неделю дают стабильный эффект лучше случайного «вирала».',
    },
    {
        myth: 'Instagram не для моей аудитории 30–50 лет.',
        reality: 'В этой возрастной группе в Грузии активная аудитория, особенно среди покупателей и инвесторов.',
    },
];

const glossary = [
    {
        term: 'Reels',
        definition: 'Короткие вертикальные видео (15–90 сек), которые алгоритм показывает не только подписчикам.',
    },
    {
        term: 'Хук',
        definition: 'Первые 2–3 секунды ролика, которые удерживают внимание и влияют на досмотр.',
    },
    {
        term: 'Субтитры',
        definition: 'Текст в видео, позволяющий смотреть и понимать ролик без звука.',
    },
    {
        term: 'Контент-план',
        definition: 'Список тем и дат публикаций на месяц вперёд.',
    },
    {
        term: 'Органический охват',
        definition: 'Просмотры без рекламного бюджета, полученные через алгоритм.',
    },
    {
        term: 'Caption',
        definition: 'Текст под роликом, который помогает вовлечению и поисковой видимости в Instagram.',
    },
];

const notFitItems = [
    'Если нужен результат за 2 недели: контент даёт накопительный эффект, обычно 3–6 месяцев.',
    'Если вы категорически не готовы появляться в кадре: личный бренд без лица почти не работает.',
    'Если нужно полное ведение аккаунта с публикациями и DM: это отдельная услуга SMM.',
    'Если стартовый бюджет ниже 650 ₾: качественный базовый пакет в меньший бюджет не помещается.',
];

const faqSchemaItems = [
    ...beginnerFaqItems,
    ...moneyFaqItems,
    ...shortQa.map(([question, answer]) => ({ question, answer })),
];

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
            name: 'Reels и промо-видео',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для риелтора',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Reels для риелтора',
    description: 'Пример короткого вертикального ролика для аккаунта риелтора в Instagram/TikTok.',
    embedUrl: REEL_EXAMPLE_EMBED,
    contentUrl: REEL_EXAMPLE_URL,
    thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    uploadDate: '2026-03-21',
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
    name: 'Reels для риелторов в Тбилиси',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Georgia'],
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
        highPrice: '2000',
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

export default function ReelsRealtorPage() {
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
                id="reels-realtor-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                                Reels для риелтора · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для риелтора — регулярный контент для Instagram и TikTok
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Личный бренд, который работает без рекламных бюджетов. Еженедельные ролики о рынке
                                недвижимости Тбилиси — от вашего лица.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                71% покупателей недвижимости доверяют агентам, которые активно ведут соцсети. Мы берём
                                продакшн на себя: съёмка, монтаж, контент-план и передача по расписанию.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить контент-план
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 200 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за ролик под ключ.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–8</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">роликов / сессия</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до готовности</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Форматы: Instagram Reels + TikTok</li>
                                    <li>RU и EN сценарии и субтитры</li>
                                    <li>Тбилиси и вся Грузия по запросу</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <h2 className="text-3xl font-bold md:text-4xl">Что это за услуга простым языком</h2>
                            <p className="mt-5 leading-relaxed text-white/72">
                                Reels для риелтора — это не видео про квартиры, а видео про вас как эксперта: ваши
                                знания о рынке, советы покупателям и продавцам, обзоры районов, ответы на частые
                                вопросы.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Когда человек ищет агента в Тбилиси, он идёт к тому, кого уже «знает» по контенту. Мы
                                помогаем стать этим знакомым лицом без еженедельной рутины продакшна.
                            </p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#D4A017]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Пример формата Reels</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    Ниже встроен пример вертикального short-form формата, который используем для
                                    Instagram Reels и TikTok.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[380px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Пример Reels"
                                    src={REEL_EXAMPLE_EMBED}
                                    loading="lazy"
                                    className="h-[640px] w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceItems.map((item) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm leading-relaxed text-white/75">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Какую задачу решает услуга</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {taskCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Боли клиента</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Как помогает заработать</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {earningsItems.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Как помогает не потерять</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {saveItems.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Что входит в услугу</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {deliverables.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Что получаете на выходе</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {outputItems.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-10 rounded-[16px] border border-[#D4A017]/40 bg-[#111111] p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white">Обсудить контент-план для моего аккаунта</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Расскажите про ваш аккаунт и аудиторию. За 15 минут соберём план из 8 тем для первого
                            месяца. Бесплатно и без обязательств.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Telegram
                            </a>
                            <a
                                href="tel:+995574619393"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                {CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сценарии использования</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст Тбилиси</h2>
                    <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
                        <p>
                            Рынок недвижимости Тбилиси активен в Instagram, но большинство аккаунтов публикуют только
                            объявления. Экспертного контента от местных агентов всё ещё мало, и это даёт пространство
                            для быстрого роста.
                        </p>
                        <p>
                            Особенно сильный спрос на такой контент у аудитории 25–45 лет и у иностранцев, которые
                            ищут агента ещё до прилёта в Грузию по запросам вроде «realtor Tbilisi Instagram».
                        </p>
                        <p>
                            В Тбилиси одновременно активны русскоязычная и англоязычная аудитории, поэтому
                            двуязычная стратегия (RU + EN) позволяет охватывать оба сегмента без дублирования
                            продакшна.
                        </p>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры и мини-кейсы</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Доказательства подхода</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {whyBreusItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Начинаем с 15-минутного брифа, затем съёмка 1,5–2 часа на 4–8 роликов, монтаж 3–5 дней и передача по расписанию." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step) => (
                            <article key={step.step + step.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">{step.step}</p>
                                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты услуг</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {packages.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[16px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#D4A017]/60 bg-[#14110a] shadow-[0_0_0_1px_rgba(212,160,23,0.25)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pack.title}</h3>
                                <p className="mt-2 text-2xl font-bold text-[#D4A017]">{pack.price}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">{pack.subtitle}</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                    {pack.features.map((feature) => (
                                        <li key={feature} className="flex gap-3">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-[16px] border border-[#2a2a2a] bg-[#111111]">
                        <table className="min-w-full text-left text-sm text-white/80">
                            <thead className="border-b border-[#2a2a2a] bg-[#161616] text-xs uppercase tracking-[0.14em] text-[#D4A017]">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Параметр</th>
                                    <th className="px-4 py-3 font-bold">Basic</th>
                                    <th className="px-4 py-3 font-bold">Standard</th>
                                    <th className="px-4 py-3 font-bold">Full</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageCompareRows.map((row) => (
                                    <tr key={row[0]} className="border-b border-[#2a2a2a]/70 last:border-0">
                                        <td className="px-4 py-3 font-semibold text-white">{row[0]}</td>
                                        <td className="px-4 py-3">{row[1]}</td>
                                        <td className="px-4 py-3">{row[2]}</td>
                                        <td className="px-4 py-3">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Помощник выбора пакета</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
                            <li>Если хотите попробовать формат и проверить отклик — выбирайте Basic.</li>
                            <li>Если нужен стабильный ритм без лишней головной боли — Standard.</li>
                            <li>Если строите серьёзный личный бренд и двуязычный контент — Full.</li>
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Не знаете, какой пакет подойдёт? Напишите нам и за 10 минут определим оптимальный старт.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/40 bg-[#111111] p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">Получить контент-план на первый месяц</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Напишите в WhatsApp: коротко про аудиторию и задачу. Мы соберём список из 8 тем для первых
                            роликов бесплатно и без обязательств.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Получить план
                            </a>
                            <a
                                href="tel:+995574619393"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                {CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Связанные услуги</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <Link href={item.href} className="transition-colors hover:text-[#D4A017]">
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                            Работаем с риелторами по всему Тбилиси. Снимаем утром, вечером и в выходные. Первая сессия
                            обычно через 3–7 дней после брифа.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">WhatsApp / Telegram</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия</p>
                            </div>
                        </div>
                        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/45">
                            Breus Media — видеопродакшн в Тбилиси для риелторов и агентств недвижимости.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки в нише</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что можно улучшить без покупки</h2>
                    <ol className="mt-8 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
                        {freeImprovements.map((item, index) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <span className="mr-2 font-bold text-[#D4A017]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съёмке</h2>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {prepChecklist.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4 text-sm leading-relaxed text-white/75"
                            >
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-[#D4A017]">
                                    □
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы для long-tail SEO</h2>
                    <div className="mt-8 space-y-5">
                        {longTailQa.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 space-y-4">
                        {shortQa.map(([question, answer]) => (
                            <article key={question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{question}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы и переходы</h2>
                    <div className="mt-8 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                        <p>
                            Если вам нужен контент под конкретный объект, а не под личный бренд, перейдите в{' '}
                            <Link href="/reels-promo/reels-real-estate" className="text-[#D4A017] hover:text-white">
                                «Видеосъёмка квартир для продажи»
                            </Link>
                            .
                        </p>
                        <p>
                            Если важно детально показать конкретную квартиру удалённым покупателям, подойдёт{' '}
                            <Link href="/promo-video/promo-real-estate" className="text-[#D4A017] hover:text-white">
                                «Видеотур по квартире»
                            </Link>
                            .
                        </p>
                        <p>
                            Для бренда агентства в целом лучше выбрать{' '}
                            <Link href="/promo-video" className="text-[#D4A017] hover:text-white">
                                «Промо-видео для агентства»
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017]">Миф</p>
                                <p className="mt-2 text-sm leading-relaxed text-white">{item.myth}</p>
                                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017]">Реальность</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.reality}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Мини-словарь терминов</h2>
                    <div className="mt-8 space-y-4">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{item.term}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.definition}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы не подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                        {notFitItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneFooterStitch />

            <div className="fixed inset-x-0 bottom-0 z-[1070] border-t border-[#D4A017]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden">
                <div className="mx-auto flex max-w-[760px] items-center gap-2">
                    <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#D4A017] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Обсудить Reels
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#D4A017]/45 text-lg text-[#D4A017]"
                    >
                        W
                    </a>
                </div>
            </div>
        </main>
    );
}
