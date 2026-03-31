import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type Card = {
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
    audience: string;
    timeline: string;
    features: string[];
    featured?: boolean;
};

type LongTailAnswer = {
    question: string;
    paragraphs: string[];
};

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-restaurant';
const PAGE_TITLE = 'Reels для ресторана в Тбилиси — съёмка Instagram и TikTok | Breus Media';
const PAGE_DESCRIPTION =
    'Снимем серию Reels для вашего ресторана: блюда, бар, атмосфера, команда. Пакет из 6–10 роликов. От 200 ₾ за ролик. Тбилиси и вся Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80';

const serviceIntro =
    'Reels для ресторана — это серия коротких вертикальных видео (9:16, 10–60 секунд), снятых и смонтированных специально для Instagram Reels, TikTok и рекламных форматов. Мы снимаем блюда в движении, атмосферу зала, работу бара, команду — с хуками, ритмом и монтажом под актуальные тренды. Не разовое «красивое видео», а пакет контента, который работает как машина охвата: каждый ролик — новая точка входа для потенциального гостя.';

const audienceItems = [
    'Владелец ресторана, который хочет расти в Instagram/TikTok, но не знает с чего начать.',
    'SMM-менеджер заведения, которому нужен профессиональный production — съёмка и монтаж под тренды.',
    'Управляющий, который понимает: регулярный контент важен, но снимать самим — нет ресурсов.',
    'Ресторан с уже сформированным образом, которому нужно системное присутствие в коротком видео.',
    'Заведения, запускающие доставку или хотящие выйти на новую аудиторию через рекомендательные алгоритмы.',
    'Ресторанные группы, которым нужен повторяемый контент-стандарт для нескольких заведений.',
];

const taskCards: Card[] = [
    {
        title: 'Органический охват без постоянного рекламного давления',
        text: 'Серия Reels создаёт системный вход в рекомендации Instagram и TikTok: новые гости видят заведение даже без подписки и без ежедневных запусков таргета.',
    },
    {
        title: 'Библиотека контента на 4–8 недель',
        text: 'Один выезд закрывает сразу несколько форматов: публикации, Stories, рекламные креативы и контент для сезонных анонсов.',
    },
    {
        title: 'Превращение блюд и атмосферы в вирусный материал',
        text: 'Хуки, монтаж под ритм и правильная последовательность сцен увеличивают досмотры, сохранения и шансы попасть в рекомендации.',
    },
    {
        title: 'Выход на туристов и экспатов',
        text: 'Аудитория, которая ищет новые места через короткие видео, видит вас в ленте и добавляет ресторан в свой список визита.',
    },
];

const painCards: Card[] = [
    {
        title: '«Мы давно не выходим в рекомендации — нас видят только старые подписчики»',
        text: 'Алгоритмы Instagram и TikTok приоритизируют вертикальные видео. Если у ресторана нет регулярного short-form контента, для новой аудитории он почти невидим.',
    },
    {
        title: '«Снимаем сами, но выглядит неубедительно»',
        text: 'Камера телефона не заменяет сценарное мышление, свет, ритм и монтаж. Профессиональный Reel отличим в первые секунды — и именно это влияет на удержание.',
    },
    {
        title: '«Один ролик быстро умирает — снова нечего публиковать»',
        text: 'Один ролик — одна попытка. Пакет из 6–10 роликов — это регулярность и статистическая вероятность попадания в рекомендации.',
    },
    {
        title: '«Не понимаем, что снимать: блюда, зал или команду»',
        text: 'Мы строим форматы под вашу нишу: для грузинской кухни, бара и fine dining работают разные сценарии и разная динамика подачи.',
    },
    {
        title: '«Запускаем таргет, но нет креативов для рекламы»',
        text: 'Без сильного видео таргет сжигает бюджет. Reels-креативы дают лучший старт для тестов в Instagram и TikTok Ads.',
    },
    {
        title: '«SMM есть, но production закрыть некому»',
        text: 'Ведение аккаунта и производство видео — разные роли. Мы закрываем съёмку и монтаж, чтобы ваша команда фокусировалась на публикации и коммуникации.',
    },
];

const earnPoints = [
    'Рост органического охвата: больше новых гостей без обязательного рекламного бюджета.',
    'Продажи через «гастро-желание»: визуально сильный ролик вызывает желание попробовать и приводит к броням.',
    'Эффективная реклама: пакет роликов повышает качество креативов и снижает стоимость взаимодействий.',
    'Привлечение туристов и экспатов: TikTok и Reels работают как канал открытия новых мест в Тбилиси.',
];

const avoidLossPoints = [
    'Защита от «информационного вакуума»: активный профиль считывается как живой и востребованный.',
    'Независимость от пользовательского контента: не нужно ждать, пока гости снимут и выложат хорошее видео.',
    'Снижение зависимости от платной рекламы: сильная органика даёт стабильный поток внимания.',
    'Контент-резерв на форс-мажор: пакет роликов покрывает 4–8 недель публикаций.',
];

const deliverables = [
    '6–10 готовых вертикальных роликов (9:16, 10–60 сек), смонтированы и готовы к публикации.',
    'Hook & Caption Bank: RU/EN хуки под каждый ролик и шаблоны подписей с хэштегами для Тбилиси.',
    'Рекомендации по звуку и трендам: какие треки использовать, чтобы сохранить стиль заведения и усилить охват.',
    'Скелет постинг-календаря на 4 недели: что и когда публиковать (будни/выходные, обед/ужин).',
    'Обложки-кавер для каждого Reels: единый визуальный стиль сетки и Highlights.',
];

const outputItems = [
    'Форматы: MP4 (9:16, 1080p/4K), обложки PNG, текстовый файл с хуками и подписями.',
    'Количество: 6–10 роликов в зависимости от пакета.',
    'Сроки: съёмка 1 день (4–5 часов), монтаж и сдача пакета — 5–7 рабочих дней.',
    'Передача: Google Drive / WeTransfer, с пояснениями по каждому ролику.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Новое сезонное меню',
        text: 'Обновили летнее меню и нужно быстро показать новинки. Снимаем серию: hero-блюда в движении, бар с сезонными коктейлями, «новинка дня». Публикация в течение 2 недель даёт охват выше обычных постов.',
    },
    {
        title: 'Сценарий 2 — Привлечение туристов',
        text: 'Заведение в Старом Тбилиси хочет попасть в рекомендации по геолокации. Снимаем серию с видами города, подачей грузинских блюд и атмосферой вечера, добавляем хуки для туристической аудитории.',
    },
    {
        title: 'Сценарий 3 — Запуск рекламы',
        text: 'SMM запускает таргет, а фото не конвертируют. Делаем пакет из 8 роликов, из которых 3 идут в рекламу как тестовые варианты. Лучший масштабируется в основной креатив.',
    },
    {
        title: 'Сценарий 4 — Возврат «спящей» аудитории',
        text: 'Профиль был неактивен несколько месяцев. Серия Reels в течение 2 недель помогает оживить аккаунт и вернуть внимание подписчиков.',
    },
];

const localContextText =
    'TikTok и Instagram Reels в Тбилиси — реальный канал открытия новых заведений. Особенно для трёх аудиторий: туристы с заранее составленным watchlist из соцсетей, экспаты и удалёнщики, которые ищут новые места в городе, и молодёжь 20–35 лет, для которой ресторан без TikTok почти «не существует». Именно поэтому системный short-form контент сегодня становится не дополнением, а базовой частью маркетинга HoReCa в Грузии.';

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Бар с авторскими коктейлями, Сололаки',
        text: 'До работы вели только фото и теряли охват. После пакета из 8 Reels один ролик набрал 45 000 просмотров, за неделю профиль получил +380 подписчиков и брони на вечер.',
    },
    {
        title: 'Кейс 2 — Ресторан грузинской кухни для туристов',
        text: 'Задача — попасть в выдачу по геолокации Тбилиси. Серия Reels с традиционными блюдами и видами Старого города дала суммарно 90 000+ просмотров и рост рекомендаций.',
    },
    {
        title: 'Кейс 3 — Пиццерия с доставкой',
        text: 'Продвигали Wolt-профиль через ролики о процессе приготовления: печь, тесто, финальная подача. За первый месяц CTR переходов на Wolt вырос в 2,4 раза.',
    },
];

const socialProofItems = [
    '61% посетителей ресторанов отмечают, что короткие видео в TikTok и Instagram влияют на решение прийти.',
    'Заведения с регулярными Reels обычно получают в 2–3 раза больший охват, чем аккаунты только с фото.',
    'Reels чаще попадают в рекомендации по сравнению со статичными постами и каруселями.',
    'Stories и Reels остаются главным способом донести новинки меню, акции и события до аудитории.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels и зачем они нужны ресторану?',
        answer:
            'Reels — это короткие вертикальные видео в Instagram и TikTok. Алгоритмы показывают их не только подписчикам, но и новой аудитории, которая о вас не слышала. Для ресторана это основной инструмент органического роста без постоянного рекламного бюджета.',
    },
    {
        question: 'Как выглядит процесс съёмки и что нам нужно подготовить?',
        answer:
            'Перед съёмкой мы присылаем короткий бриф: какие блюда, какие сцены и какой вайб нужен. Вы готовите 3–5 блюд для постановочных кадров и приводите пространство в порядок. Съёмку, сценарий и монтаж закрываем мы.',
    },
    {
        question: 'Могут ли Reels навредить образу дорогого ресторана?',
        answer:
            'Нет, если формат подобран правильно. Для fine dining и fast casual работают разные стили: в первом случае — спокойный ритм и акцент на деталях, во втором — более динамичный монтаж и текстовые хуки.',
    },
    {
        question: 'Как часто нужно публиковать Reels?',
        answer:
            'Оптимально 2–3 раза в неделю для заметного роста охвата. Пакет из 6–10 роликов обычно закрывает 3–5 недель регулярного постинга.',
    },
    {
        question: 'Нужны ли трендовые звуки или можно использовать свою музыку?',
        answer:
            'Лучше работает комбинация: трендовые звуки помогают охвату, а фирменный звук поддерживает имидж. Мы подбираем треки, доступные в Instagram и TikTok, под атмосферу заведения.',
    },
    {
        question: 'Вы ведёте аккаунт ресторана или только снимаете контент?',
        answer:
            'Мы отвечаем за production: съёмка, монтаж, обложки, хуки и календарь. Публикацию и ведение аккаунта выполняет ваша команда или SMM-менеджер.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит пакет Reels для ресторана?',
        answer:
            'Basic: 6 роликов от 1 200 ₾. Standard: 8 роликов + Caption Bank + календарь от 1 600 ₾. Full: 10 роликов + рекламные версии и расширенные материалы от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Можно заказать только 1–2 ролика, а не пакет?',
        answer:
            'Да, можно. Но пакет выгоднее: один съёмочный день закрывает сразу 6–10 единиц контента, и стоимость ролика в пакете ниже.',
    },
    {
        question: 'Когда будут готовы ролики?',
        answer: 'Обычно пакет готов в течение 5–7 рабочих дней после съёмки. Срочные единичные ролики возможны от 3 дней.',
    },
    {
        question: 'Включены ли правки?',
        answer: 'Да, включены 2 раунда правок на монтаж. Полная пересъёмка согласовывается отдельно.',
    },
    {
        question: 'Можно ли отдать вам наш исходник только на монтаж?',
        answer: 'Да, если исходный материал по качеству подходит для монтажа. Формат и объём обсуждаем индивидуально.',
    },
    {
        question: 'Что делать после первого пакета Reels?',
        answer:
            'Обычно либо повторный пакет через 1,5–2 месяца, либо переход на ежемесячный контент-пакет с регулярной съёмкой и планированием.',
    },
];

const whyBreusItems = [
    'Мы снимаем не «просто красиво», а проектируем ролики под алгоритмы и удержание внимания.',
    'Понимаем локальную аудиторию Тбилиси: туристы, экспаты и грузинская молодёжь реагируют на разные форматы.',
    'Даём не только видео, но и стратегический слой: hooks, captions, постинг-план и рекомендации по запуску.',
    'Минимизируем стресс: один выезд, чёткий shot-list, понятная сдача.',
    'Легко интегрируемся в работу вашего SMM: передаём всё в структуре, удобной для публикаций и рекламы.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Фиксируем форматы роликов, аудиторию, блюда и стиль подачи под ваш ресторан.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка сцен',
        text: 'Вы готовите блюда и пространство, мы приезжаем с оборудованием и сценарным планом.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: '4–5 часов, снимаем 15–25 сцен под монтаж пакета из 6–10 роликов.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и черновики',
        text: 'Собираем ролики, согласовываем по одному или пакетом в зависимости от вашего процесса.',
    },
    {
        step: 'Шаг 5',
        title: 'Правки и финальная передача',
        text: '2 раунда правок, передача финалов + Hook & Caption Bank + постинг-календарь.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'BASIC — «Старт»',
        price: 'от 1 200 ₾',
        subtitle: 'Быстрый вход в формат Reels без большого бюджета.',
        audience: 'Для кого: рестораны, которые впервые системно запускают короткие видео.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '6 готовых Reels (9:16, до 60 сек).',
            'Базовые RU-хуки для каждого ролика.',
            '2 раунда правок.',
            'Финальные файлы для публикации и рекламы.',
        ],
    },
    {
        title: 'STANDARD — «Активный профиль»',
        price: 'от 1 600 ₾',
        subtitle: 'Системный контент + календарь публикаций.',
        audience: 'Для кого: рестораны с активным SMM и задачей регулярно расти в охватах.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '8 Reels + короткие версии для Stories.',
            'Hook & Caption Bank (RU/EN).',
            'Постинг-календарь на 4 недели.',
            'Рекомендации по звуку и трендам.',
            'Обложки-кавер для Highlights.',
            '2 раунда правок.',
        ],
        featured: true,
    },
    {
        title: 'FULL — «Контент-машина»',
        price: 'от 2 000 ₾',
        subtitle: 'Максимальный пакет для рекламы и масштабирования.',
        audience: 'Для кого: ресторанные группы, проекты с регулярным таргетом и большим трафиком.',
        timeline: 'Срок: 5 рабочих дней (приоритетный монтаж).',
        features: [
            '10 Reels, включая версии под рекламу.',
            'Полный Caption & Hashtag Bank (RU/EN).',
            'Постинг-календарь + контент-рубрики.',
            'Сценарные рекомендации на следующий месяц.',
            '3 раунда правок.',
        ],
    },
];

const packageCompareRows = [
    ['Количество роликов', '6', '8', '10'],
    ['Версии для Stories', '—', '✓', '✓'],
    ['Caption & Hook Bank', 'RU only', 'RU/EN', 'RU/EN'],
    ['Постинг-календарь', '—', '✓', '✓'],
    ['Рекомендации по звуку/трендам', '—', '✓', '✓'],
    ['Обложки-кавер (Highlights)', '—', '✓', '✓'],
    ['Версии под рекламу', '—', '—', '✓'],
    ['Контент-рубрики на след. месяц', '—', '—', '✓'],
    ['Раунды правок', '2', '2', '3'],
    ['Срок готовности', '7 дней', '7 дней', '5 дней'],
    ['Цена', '1 200 ₾', '1 600 ₾', '2 000 ₾'],
];

const packagePickerItems = [
    'Первый запуск Reels и хотите проверить формат → Basic.',
    'Ведёте соцсети регулярно и нужен контент + публикационный план → Standard.',
    'Запускаете рекламу или строите полноценную контент-машину → Full.',
];

const relatedServices = [
    {
        title: 'Имиджевое видео ресторана',
        href: '/promo-video/promo-restaurant',
        text: 'Флагманский ролик 60–90 секунд: атмосфера, интерьер, команда и подача.',
    },
    {
        title: 'Контент-пакет на месяц',
        href: '/reels-promo/restaurant-content-pack',
        text: 'Ежемесячная съёмка с контент-планом и регулярным потоком публикаций.',
    },
    {
        title: 'Съёмка интерьера и блюд',
        href: '/promo-video/restaurant-interior-food',
        text: 'Фото- и видео-библиотека для меню, Wolt, Google Maps, сайта и рекламы.',
    },
    {
        title: '360° тур по ресторану',
        href: '/360-tour-restaurants',
        text: 'Виртуальная прогулка по залу с интеграцией на сайт и в Google Maps.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимать Reels случайно и без плана',
        text: 'Один ролик раз в несколько недель не работает как стратегия. Алгоритмы поддерживают регулярные аккаунты, а не случайные всплески.',
    },
    {
        title: 'Ставить горизонтальное видео в вертикальный формат',
        text: 'Обрезка 16:9 под 9:16 почти всегда заметна и ухудшает восприятие. Reels нужно снимать вертикально изначально.',
    },
    {
        title: 'Начинать ролик с логотипа',
        text: 'Первые 1–2 секунды должны удержать внимание действием, движением или текстовым хуком, а не заставкой.',
    },
    {
        title: 'Показывать одни и те же блюда в каждом ролике',
        text: 'Повтор быстро утомляет аудиторию. Рабочая связка — блюда, бар, команда, закулисье и атмосфера.',
    },
    {
        title: 'Игнорировать трендовые звуки',
        text: 'Звук — важный сигнал алгоритма. Правильно выбранный трек может кратно увеличить охват.',
    },
    {
        title: 'Ждать «идеального момента» для старта',
        text: 'Пока вы ждёте идеальные условия, конкуренты публикуют каждую неделю и забирают внимание аудитории.',
    },
];

const freeImprovements = [
    'Снимите один ролик прямо сегодня: подача блюда или открытие бутылки вина, вертикально и крупным планом.',
    'Добавьте трендовый звук из библиотеки Instagram при монтаже.',
    'Поставьте хук текстом в первые 2 секунды, например: «Вы не пробовали наш чизкейк. Это ошибка.»',
    'Проверьте единый стиль обложек Reels, чтобы сетка профиля выглядела цельно.',
    'Публикуйте в пиковые часы: 12:00–14:00 или 19:00–21:00.',
];

const shootChecklist = [
    'Определены 4–6 блюд/напитков для съёмки в лучшей подаче.',
    'Зал и барная стойка чистые, лишние предметы убраны из кадра.',
    'Согласован вайб роликов: стиль, темп, аудитория.',
    'Команда предупреждена, кто будет в кадре (если нужно).',
    'Понятно, какие форматы снимаем: блюда, бар, закулисье, команда.',
    'Выбрано время съёмки: до открытия, тихий час или вечерняя смена.',
    'Instagram-профиль открыт для анализа текущего стиля.',
    'Подобрано 2–3 reference-Reels в нужном стиле.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Как работают алгоритмы Instagram Reels применительно к ресторанам?',
        paragraphs: [
            'Instagram показывает Reels и вашим подписчикам, и новой аудитории через рекомендации. Для ресторана ключевой сценарий — именно рекомендации, когда ролик видят люди, которые ещё не знают ваш бренд.',
            'Алгоритм учитывает досмотр, сохранения, репосты и реакцию в первые 30–60 минут после публикации. Поэтому старт ролика и его монтажная динамика критически важны.',
            'Практически это означает одно: красивой картинки недостаточно. Нужны хук в первые секунды, темп, структура и финал, который провоцирует сохранить или отправить ролик другу.',
        ],
    },
    {
        question: 'Чем Reels для ресторана отличаются от обычного видео?',
        paragraphs: [
            'Обычное видео чаще рассказывает историю, а Reels должны моментально захватить внимание в ленте. В short-form побеждает скорость считывания, а не длительность.',
            'Базовая структура рабочего Reels: 1–2 секунды хука, 10–15 секунд основной ценности, завершение с действием или эмоцией, которую хочется сохранить.',
            'Ресторанные форматы варьируются: «блюдо в движении», «за кулисами», POV гостя, барный процесс, сравнение до/после. Поэтому пакетная съёмка всегда эффективнее одиночного ролика.',
        ],
    },
    {
        question: 'Почему пакет эффективнее, чем один ролик?',
        paragraphs: [
            'Один ролик — это один эксперимент, а не система. Пакет из 6–10 роликов создаёт статистику: часть видео работает на охват, часть на переходы в профиль, часть на рекламу.',
            'Регулярность даёт алгоритму больше сигналов о вашем аккаунте, поэтому шансы попасть в рекомендации заметно растут.',
            'С операционной стороны это удобно: один съёмочный день закрывает контент на 4–6 недель и снимает с команды еженедельный стресс «что снимать сегодня».',
        ],
    },
    {
        question: 'Как измерить результат от пакета Reels?',
        paragraphs: [
            'Для ресторана базовые метрики: охват, сохранения и переходы в профиль. Сравнивайте их с данными до запуска пакета в разрезе 4 недель.',
            'Дополнительно смотрите косвенные сигналы: рост подписчиков, новые комментарии от незнакомых аккаунтов, увеличение сообщений о бронях.',
            'Эффект short-form контента часто отложенный: человек сохраняет ролик сегодня, а приходит в ресторан через 1–2 недели. Поэтому оценивать результат корректно на горизонте месяца.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоят Reels для ресторана в Тбилиси?',
        answer:
            'Пакет Breus Media начинается от 1 200 ₾ (6 роликов). Standard 8 роликов + Caption Bank — от 1 600 ₾. Full 10 роликов с рекламными версиями — от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Сколько роликов нужно ресторану в месяц?',
        answer: 'Для заметного роста обычно 8–12 роликов в месяц (2–3 публикации в неделю).',
    },
    {
        question: 'Как Reels помогают привлечь туристов в Тбилиси?',
        answer:
            'Туристы часто ищут места через TikTok и Reels ещё до приезда. Ролики с локальной атмосферой и геоконтекстом дают органический трафик в профиль.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer: 'Нет. Обычно снимаем в тихий час, до открытия или в контролируемое рабочее окно, 4–5 часов одного визита.',
    },
    {
        question: 'Что входит в пакет Reels для ресторана?',
        answer:
            'Готовые смонтированные ролики 9:16, hook/caption материалы, рекомендации по трендам, публикационный скелет и обложки (в Standard и Full).',
    },
    {
        question: 'Можно ли использовать эти ролики в рекламе?',
        answer: 'Да. Формат Reels отлично подходит для таргета в Instagram и TikTok, в Full делаем отдельные рекламные версии.',
    },
    {
        question: 'Как быстро будут готовы материалы?',
        answer: 'Стандартно 5–7 рабочих дней после съёмочного дня.',
    },
    {
        question: 'Зачем Reels, если Instagram уже ведётся?',
        answer:
            'Фото и текст в основном видят текущие подписчики. Reels — формат, который стабильно открывает доступ к новой аудитории через рекомендации.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Примеры Reels для ресторанов',
        href: 'https://breus.media/portfolio/reels-restaurants',
        text: 'Подборка коротких видео-форматов для HoReCa.',
    },
    {
        title: 'Гайд: 10 форматов Reels для кафе и ресторанов',
        href: 'https://breus.media/blog/reels-formats-restaurants',
        text: 'Практические сценарии, которые можно адаптировать под ваше меню и аудиторию.',
    },
    {
        title: 'Как Instagram решает, показывать ли ваш Reels',
        href: 'https://breus.media/blog/instagram-reels-algorithm',
        text: 'Разбор ключевых сигналов: досмотр, сохранения, репосты и early engagement.',
    },
];

const internalTransitions = [
    {
        text: 'Нужен не только пакет роликов, но и регулярный поток контента каждый месяц? → Контент-пакет для ресторана',
        href: '/reels-promo/restaurant-content-pack',
    },
    {
        text: 'Хотите начать с флагманского ролика, а затем перейти на Reels? → Имиджевое видео ресторана',
        href: '/promo-video/promo-restaurant',
    },
    {
        text: 'Нужны ещё и фото для Wolt, сайта и Google Maps? → Съёмка интерьера и блюд',
        href: '/promo-video/restaurant-interior-food',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Нам хватит фото — видео необязательно»',
        reality: 'Фото полезны, но short-form видео в 2025–2026 годах получает заметно более высокий приоритет в алгоритмах и чаще выходит на новую аудиторию.',
    },
    {
        myth: '«Reels — только для развлечений, не для серьёзных заведений»',
        reality: 'Короткие видео уже стали рабочим каналом продаж и для fine dining, и для casual форматов — вопрос в правильной подаче.',
    },
    {
        myth: '«Мы снимаем сами, поэтому production не нужен»',
        reality: 'Камера — это инструмент, но результат делает сценарий, хук, свет и монтаж. Именно это чаще всего и определяет, выйдет ролик в рекомендации или нет.',
    },
    {
        myth: '«Сначала нужно набрать подписчиков, потом запускать Reels»',
        reality: 'Reels работают именно потому, что показываются новой аудитории вне подписок.',
    },
    {
        myth: '«Один залетевший ролик решит всё»',
        reality: 'Вирусный всплеск полезен, но стабильный рост строится регулярной публикацией и пакетом контента.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Хук (Hook)',
        definition: 'Первые 1–2 секунды ролика, которые останавливают скролл и удерживают внимание.',
    },
    {
        term: 'Досмотр (Watch Rate)',
        definition: 'Доля пользователей, которые досмотрели ролик до конца. Один из ключевых сигналов алгоритма.',
    },
    {
        term: 'Caption',
        definition: 'Подпись под роликом, которая дополняет хук и стимулирует действие: комментарий, сохранение, переход в профиль.',
    },
    {
        term: 'Формат 9:16',
        definition: 'Вертикальный стандарт short-form видео для Instagram Reels и TikTok.',
    },
    {
        term: 'B-roll',
        definition: 'Дополнительные кадры деталей и атмосферы, которые усиливают монтаж и ритм.',
    },
    {
        term: 'Алгоритм рекомендаций',
        definition: 'Система платформы, которая решает, кому и как часто показывать ваш контент вне подписок.',
    },
];

const notFitItems = [
    'Тем, кому нужно полное ведение соцсетей «под ключ»: мы делаем production, а не полный SMM-аутсорс.',
    'Если общий бюджет на контент ниже 600 ₾: профессиональный пакет в таком бюджете обычно не окупается.',
    'Тем, кто хочет один ролик «на пробу» без намерения строить регулярность.',
    'Если заведение в фазе закрытия или радикальной перестройки, лучше сначала стабилизировать операционную часть.',
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
            name: 'Reels и контент',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для ресторана',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Reels для ресторана — пример формата',
    description: 'Пример короткого вертикального видео для продвижения ресторана в Instagram Reels и TikTok.',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
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
    name: 'Reels для ресторана в Тбилиси',
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

export default function ReelsRestaurantPage() {
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
                id="reels-restaurant-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                                Reels для ресторана · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для ресторана — контент для Instagram, TikTok и рекламы
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Серия коротких роликов, которая превращает скроллинг в бронирование.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Ваш ресторан не появляется в рекомендациях — не потому что он хуже конкурентов, а
                                потому что у него нет вертикального видеоконтента, который алгоритмы продвигают в
                                первую очередь. Breus Media снимает серии Reels для ресторанов: с хуками, трендовыми
                                форматами и монтажом, который держит зрителя до конца. Один выезд — пакет из 6–10
                                готовых роликов.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Запустить съёмку Reels
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
                                        <p className="text-lg font-bold text-white">6–10</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">роликов / пакет</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до готовности</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Форматы: Instagram Reels + TikTok + Ads</li>
                                    <li>Hook & Caption Bank (RU/EN)</li>
                                    <li>Тбилиси и вся Грузия</li>
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
                            <p className="mt-5 leading-relaxed text-white/72">{serviceIntro}</p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#D4A017]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Embed-пример short-form формата</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    На странице встроен пример формата, который используем как ориентир для вертикального
                                    видео под Reels и TikTok.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Пример Reels для ресторана"
                                    src={VIDEO_EMBED_URL}
                                    loading="lazy"
                                    className="aspect-video w-full"
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
                                {earnPoints.map((item) => (
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
                                {avoidLossPoints.map((item) => (
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
                            <h2 className="text-2xl font-bold text-white">Deliverables: что входит в услугу</h2>
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
                            <h2 className="text-2xl font-bold text-white">Что получает клиент на выходе</h2>
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
                        <h3 className="text-xl font-bold text-white">
                            Хотите, чтобы ваш ресторан начал появляться в рекомендациях и приводить новых гостей?
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Оставьте заявку, покажите текущий профиль и мы подскажем, какой формат пакета даст самый
                            быстрый результат под вашу аудиторию.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Запустить съёмку Reels
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
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
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст</h2>
                    <p className="mt-6 max-w-5xl text-sm leading-relaxed text-white/75 md:text-base">{localContextText}</p>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof / доказательства</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} bgColor="#0D0D0D" />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" bgColor="#080808" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <ProcessNote text="От первого контакта до готовых роликов обычно проходит 8–10 рабочих дней: 1–2 дня бриф, 1 день съёмка, 5–7 дней монтаж и финальная сдача." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Описание 3 пакетов</h2>
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
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{pack.audience}</p>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">{pack.timeline}</p>
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
                            {packagePickerItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Не уверены? Напишите нам — подберём пакет под профиль и цели за 5 минут.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы запустить Reels, которые приведут новых гостей? Оставьте заявку — согласуем формат и дату съёмки."
                buttonLabel="Запустить Reels для ресторана"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                            Снимаем в Тбилиси и по всей Грузии. Чтобы обсудить пакет Reels для вашего заведения,
                            напишите в WhatsApp и отправьте профиль — сразу подскажем рабочий формат.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">WhatsApp / Телефон</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Позвонить
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — медиапродакшн в Тбилиси. Reels, имиджевые видео, 360° туры и контент-пакеты для
                        ресторанов и HoReCa в Грузии. Один выезд — готовый контент на месяц.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки ресторанов в контенте</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.text}</p>
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
                        {shootChecklist.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4 text-sm leading-relaxed text-white/75"
                            >
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-[#D4A017]">
                                    ☐
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    <div className="mt-8 space-y-5">
                        {longTailAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/72">
                                    {item.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 space-y-4">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{item.question}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {additionalMaterials.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <a href={item.href} className="transition-colors hover:text-[#D4A017]">
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                        {internalTransitions.map((item) => (
                            <p key={item.href + item.text}>
                                <Link href={item.href} className="text-[#D4A017] underline decoration-dotted underline-offset-4">
                                    {item.text}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-4xl px-6">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto max-w-4xl px-6">
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
                        Запустить Reels
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
