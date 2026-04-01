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

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-business';
const PAGE_TITLE = 'Reels для бизнеса в Тбилиси — съёмка Instagram и TikTok | Breus Media';
const PAGE_DESCRIPTION =
    'Снимем серию Reels для вашего бизнеса: бренд, сервис, команда, продукт. Пакет 6–10 роликов под контент-поток и рекламу. От 200 ₾ за ролик. Тбилиси и вся Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80';

const serviceIntro =
    'Reels для бизнеса — это серия коротких вертикальных видео (9:16, 15–60 секунд) для Instagram Reels, TikTok и YouTube Shorts. Мы снимаем офис, команду, продукт в действии, сервисный процесс и ценностное предложение — с хуками, ритмом и монтажом под актуальные форматы. Один выезд даёт пакет из 6–10 роликов, которые закрывают контент-план на месяц и создают материал для рекламных запусков.';

const audienceItems = [
    'Владелец малого и среднего бизнеса, который хочет регулярно появляться в лентах клиентов без большой съёмочной команды.',
    'Маркетолог компании, которому нужен профессиональный short-form контент — съёмка и монтаж готовы к публикации.',
    'Бренд или сервис, выходящий на новую аудиторию через органические рекомендации Instagram и TikTok.',
    'Шоурум, студия, клиника, агентство или любой бизнес с офлайн-точкой, которую нужно показать в digital.',
    'Бизнес, запускающий таргетированную рекламу и ищущий качественные видеокреативы.',
    'Личный бренд специалиста или предпринимателя, который хочет системное присутствие в коротком видео.',
];

const taskCards: Card[] = [
    {
        title: 'Органический охват без постоянной рекламы',
        text: 'Серия Reels создаёт системный вход в рекомендации Instagram и TikTok: новые клиенты видят бизнес даже без подписки и без ежедневных запусков таргета.',
    },
    {
        title: 'Библиотека контента на 4–8 недель',
        text: 'Один съёмочный день закрывает сразу несколько форматов: публикации, Stories, рекламные креативы и материал для сезонных анонсов.',
    },
    {
        title: 'Превращение продукта и команды в узнаваемый контент',
        text: 'Хуки, монтаж под ритм и правильная последовательность сцен увеличивают досмотры, сохранения и шансы попасть в рекомендации.',
    },
    {
        title: 'Выход на новую B2C и B2B аудиторию',
        text: 'Аудитория, которая ищет услуги и продукты через короткие видео, видит ваш бизнес в ленте и принимает решение о первом контакте.',
    },
];

const painCards: Card[] = [
    {
        title: '«Нас почти не видят в соцсетях — только старые подписчики»',
        text: 'Алгоритмы Instagram и TikTok приоритизируют вертикальные видео. Без short-form контента бизнес практически невидим для новой аудитории.',
    },
    {
        title: '«Снимаем сами, но результат не соответствует уровню бизнеса»',
        text: 'Камера телефона не заменяет сценарное мышление, свет, ритм и монтаж. Профессиональный Reels отличим в первые секунды — и именно это влияет на удержание.',
    },
    {
        title: '«Один ролик быстро умирает — снова нечего публиковать»',
        text: 'Один ролик — одна попытка. Пакет из 6–10 роликов — это регулярность и статистическая вероятность попадания в рекомендации.',
    },
    {
        title: '«Не понимаем, что снимать: продукт, процесс или команду»',
        text: 'Мы строим форматы под ваш бизнес: для сервиса, шоурума и личного бренда работают разные сценарии и разная динамика подачи.',
    },
    {
        title: '«Запускаем таргет, но нет сильных видеокреативов»',
        text: 'Без качественного видео таргет сжигает бюджет. Reels-пакет даёт готовые креативы для тестов в Instagram и TikTok Ads.',
    },
    {
        title: '«SMM есть, но production закрыть некому»',
        text: 'Ведение аккаунта и производство видео — разные роли. Мы закрываем съёмку и монтаж, чтобы ваша команда фокусировалась на публикации и коммуникации.',
    },
];

const earnPoints = [
    'Рост органического охвата: больше новых клиентов без обязательного рекламного бюджета.',
    'Продажи через доверие: визуально сильный контент о процессе и команде сокращает цикл принятия решения.',
    'Эффективная реклама: пакет роликов повышает качество креативов и снижает стоимость взаимодействий.',
    'Привлечение локальной аудитории Тбилиси и экспатов через TikTok и Reels.',
];

const avoidLossPoints = [
    'Защита от «информационного вакуума»: активный профиль считывается как живой и востребованный.',
    'Независимость от случайного пользовательского контента: у вас есть собственный стабильный поток.',
    'Снижение зависимости от платной рекламы: сильная органика даёт стабильный поток внимания.',
    'Контент-резерв на форс-мажор: пакет роликов покрывает 4–8 недель публикаций.',
];

const deliverables = [
    '6–10 готовых вертикальных роликов (9:16, 15–60 сек), смонтированы и готовы к публикации.',
    'Hook & Caption Bank: RU/EN хуки под каждый ролик и шаблоны подписей с хэштегами для вашей ниши.',
    'Рекомендации по звуку и трендам: какие форматы подачи работают в вашей нише прямо сейчас.',
    'Скелет постинг-календаря на 4 недели: что и когда публиковать под ритм бизнеса.',
    'Обложки-кавер для каждого Reels: единый визуальный стиль сетки и Highlights.',
];

const outputItems = [
    'Форматы: MP4 (9:16, 1080p/4K), обложки PNG, текстовый файл с хуками и подписями.',
    'Количество: 6–10 роликов в зависимости от пакета.',
    'Сроки: съёмка 1 день (4–5 часов), монтаж и сдача — 5–7 рабочих дней.',
    'Передача: Google Drive / WeTransfer с пояснениями по каждому ролику.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Запуск нового продукта или услуги',
        text: 'Бизнес выводит на рынок новую позицию и хочет быстро показать её ценность. Снимаем серию: демонстрация продукта, процесс, результат и первые отзывы. Пакет закрывает 2–3 недели контент-потока на старте.',
    },
    {
        title: 'Сценарий 2 — Построение доверия через команду и процесс',
        text: 'Клиенты не понимают, что происходит «за кулисами» сервиса. Серия Reels о команде, рабочем дне и внутренних стандартах снимает барьер недоверия и ускоряет решение о покупке.',
    },
    {
        title: 'Сценарий 3 — Запуск таргетированной рекламы',
        text: 'Маркетолог запускает Instagram/TikTok Ads, но нет видеокреативов. Делаем пакет из 8 роликов, 3–4 из которых идут в рекламу как тестовые варианты. Лучший масштабируется.',
    },
    {
        title: 'Сценарий 4 — Регулярный контент-поток без съёмочного стресса',
        text: 'Команда публикует от случая к случаю: нет времени снимать. Один выезд в 4–5 часов закрывает 6–10 недель публикаций и снимает операционный стресс.',
    },
];

const localContextText =
    'Тбилиси — быстро растущий рынок для малого и среднего бизнеса с активной аудиторией в Instagram и TikTok. Экспаты, релоканты и локальные предприниматели часто принимают решение о покупке услуги или продукта на основании short-form видео: они оценивают атмосферу, команду и подход ещё до первого контакта. Бизнес без регулярного видеоконтента теряет часть этой аудитории уже на этапе первого касания в соцсетях.';

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Дизайн-студия интерьеров, Тбилиси',
        text: 'Снимали процесс работы дизайнеров и готовые объекты. Один ролик с таймлапсом трансформации пространства набрал 38 000 просмотров, +290 подписчиков за неделю и 6 входящих запросов на консультацию.',
    },
    {
        title: 'Кейс 2 — Коворкинг с сервисом для удалёнщиков',
        text: 'Серия Reels о рабочей атмосфере, командных зонах и дополнительных сервисах. За первый месяц число заявок на тур по пространству выросло в 2 раза по сравнению с периодом без видеоконтента.',
    },
    {
        title: 'Кейс 3 — Персональный тренер, фитнес-студия',
        text: 'Снимали упражнения, разборы ошибок и трансформации клиентов в вертикальном формате. Суммарный охват пакета из 8 роликов — более 70 000 просмотров, конверсия в запись на пробную тренировку +65%.',
    },
];

const socialProofItems = [
    '62% пользователей TikTok и Instagram ищут информацию о бизнесе и услугах через короткие видео перед обращением.',
    'Бизнес-аккаунты с регулярными Reels получают в среднем в 2–4 раза больший органический охват, чем аккаунты только с фото.',
    'Видеоконтент удерживает внимание в 1,5–3 раза дольше, чем статичные публикации в той же нише.',
    'В Тбилиси аудитория экспатов и релокантов активно потребляет short-form видео и принимает решения на его основе.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels для бизнеса и зачем они нужны?',
        answer:
            'Reels — это короткие вертикальные видео для Instagram и TikTok. Алгоритмы показывают их не только подписчикам, но и новой аудитории. Для бизнеса это основной инструмент органического роста и формирования доверия без постоянного рекламного бюджета.',
    },
    {
        question: 'Как выглядит процесс работы?',
        answer:
            'Перед съёмкой мы присылаем бриф: какие форматы, процессы и акценты снимаем. Вы готовите пространство и решаете, кто будет в кадре. Съёмку, сценарий и монтаж закрываем мы.',
    },
    {
        question: 'Подходит ли формат для B2B бизнеса?',
        answer:
            'Да. Reels работают для B2B в нишах, где конечный клиент — человек, принимающий решение. Форматы: экспертные разборы, процессы, результаты для клиентов, закулисье производства.',
    },
    {
        question: 'Как часто нужно публиковать Reels?',
        answer:
            'Оптимально 2–3 раза в неделю для заметного роста охвата. Пакет из 6–10 роликов обычно закрывает 3–5 недель регулярного постинга.',
    },
    {
        question: 'Нужны ли трендовые звуки для бизнес-контента?',
        answer:
            'Лучше работает комбинация: трендовые звуки помогают охвату, а профессиональный монтаж поддерживает имидж. Мы подбираем лицензионные треки под атмосферу бизнеса.',
    },
    {
        question: 'Вы ведёте аккаунт или только снимаете контент?',
        answer:
            'Мы отвечаем за production: съёмка, монтаж, обложки, хуки и календарь. Публикацию и ведение аккаунта выполняет ваша команда или SMM-менеджер.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит пакет Reels для бизнеса?',
        answer:
            'Basic: 6 роликов от 1 200 ₾. Standard: 8 роликов + Caption Bank + календарь от 1 600 ₾. Full: 10 роликов + рекламные версии от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Можно заказать только 1–2 ролика?',
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
        question: 'Можно ли отдать только на монтаж имеющийся материал?',
        answer: 'Да, если исходный материал по качеству подходит для монтажа. Формат и объём обсуждаем индивидуально.',
    },
    {
        question: 'Что делать после первого пакета Reels?',
        answer:
            'Либо повторный пакет через 1,5–2 месяца, либо переход на ежемесячный контент-пакет с регулярной съёмкой и планированием.',
    },
];

const whyBreusItems = [
    'Мы снимаем не «просто красиво», а проектируем ролики под алгоритмы и удержание внимания.',
    'Понимаем деловую аудиторию Тбилиси: экспаты, релоканты и локальные предприниматели реагируют на разные форматы.',
    'Даём не только видео, но и стратегический слой: hooks, captions, постинг-план и рекомендации по запуску.',
    'Минимизируем нагрузку на команду: один выезд, чёткий shot-list, понятная сдача.',
    'Легко интегрируемся в работу вашего SMM: передаём всё в структуре, удобной для публикаций и рекламы.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Фиксируем форматы роликов, целевую аудиторию, ключевые смыслы и стиль подачи под ваш бизнес.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Вы готовите пространство и согласовываете участников кадра, мы приезжаем с оборудованием и сценарным планом.',
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
        title: 'Правки и передача',
        text: '2 раунда правок, передача финалов + Hook & Caption Bank + постинг-календарь.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'BASIC — «Старт»',
        price: 'от 1 200 ₾',
        subtitle: 'Быстрый вход в формат Reels без большого бюджета.',
        audience: 'Для кого: бизнес, который впервые системно запускает короткие видео.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '6 готовых Reels (9:16, до 60 сек).',
            'Базовые RU-хуки для каждого ролика.',
            '2 раунда правок.',
            'Финальные файлы для публикации и рекламы.',
        ],
    },
    {
        title: 'STANDARD — «Активный контент»',
        price: 'от 1 600 ₾',
        subtitle: 'Системный контент + календарь публикаций.',
        audience: 'Для кого: бизнес с активным SMM и задачей регулярно расти в охватах.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '8 Reels + короткие версии для Stories.',
            'Hook & Caption Bank (RU/EN).',
            'Постинг-календарь на 4 недели.',
            'Рекомендации по форматам и трендам.',
            'Обложки-кавер для Highlights.',
            '2 раунда правок.',
        ],
        featured: true,
    },
    {
        title: 'FULL — «Контент-машина»',
        price: 'от 2 000 ₾',
        subtitle: 'Максимальный пакет для рекламы и масштабирования.',
        audience: 'Для кого: компании с регулярным таргетом, крупные сервисы и бренды.',
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
    ['Рекомендации по форматам', '—', '✓', '✓'],
    ['Обложки-кавер (Highlights)', '—', '✓', '✓'],
    ['Версии под рекламу', '—', '—', '✓'],
    ['Контент-рубрики на след. месяц', '—', '—', '✓'],
    ['Раунды правок', '2', '2', '3'],
    ['Срок готовности', '7 дней', '7 дней', '5 дней'],
    ['Цена', '1 200 ₾', '1 600 ₾', '2 000 ₾'],
];

const relatedServices = [
    {
        title: 'Имиджевое видео бизнеса',
        href: '/promo-video/promo-business',
        text: 'Флагманский ролик 60–90 секунд: пространство, команда, ценностное предложение и атмосфера.',
    },
    {
        title: 'Промо-видео для бизнеса',
        href: '/business-service',
        text: 'Полный спектр видеоконтента для бизнеса: от имиджа до рекламных форматов.',
    },
    {
        title: 'Reels для клиник',
        href: '/reels-promo/reels-clinic',
        text: 'Серийный short-form контент для медицинских клиник и эстетических сервисов.',
    },
    {
        title: 'Reels для отеля',
        href: '/reels-promo/reels-hotel',
        text: 'Вертикальные видео для гостиниц, бутик-отелей и апартаментов.',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Нам хватит фото — видео необязательно»',
        reality: 'Фото полезны, но short-form видео в 2025–2026 годах получает заметно более высокий приоритет в алгоритмах и чаще открывает доступ к новой аудитории.',
    },
    {
        myth: '«Reels — только для B2C, не для серьёзного бизнеса»',
        reality: 'Короткие видео уже стали рабочим каналом для B2B, профессиональных сервисов и брендов. Вопрос — в правильной подаче и формате.',
    },
    {
        myth: '«Мы снимаем сами на телефон»',
        reality: 'Камера — инструмент, но результат делают сценарий, хук, свет и монтаж. Именно это решает, выйдет ролик в рекомендации или нет.',
    },
    {
        myth: '«Сначала нужно набрать подписчиков, потом Reels»',
        reality: 'Reels работают именно потому, что показываются новой аудитории вне подписок. Начинать нужно сразу.',
    },
    {
        myth: '«Один вирусный ролик решит всё»',
        reality: 'Вирусный всплеск полезен, но стабильный рост строится регулярной публикацией и пакетом контента, а не единственным экспериментом.',
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
        definition: 'Дополнительные кадры деталей и процессов, которые усиливают монтаж и ритм.',
    },
    {
        term: 'Алгоритм рекомендаций',
        definition: 'Система платформы, которая решает, кому и как часто показывать ваш контент вне подписок.',
    },
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Как Reels помогают бизнесу привлекать клиентов без рекламного бюджета?',
        paragraphs: [
            'Instagram и TikTok показывают Reels не только подписчикам, но и новой аудитории через рекомендации. Для бизнеса это означает органический охват без обязательного таргета.',
            'Алгоритм учитывает досмотр, сохранения и репосты в первые 30–60 минут после публикации. Поэтому старт ролика и его монтажная динамика критически важны для дальнейшего распространения.',
            'Регулярный пакетный подход создаёт статистику: часть роликов работает на охват, часть — на переходы и запросы. Один ролик — это одна попытка, пакет — система.',
        ],
    },
    {
        question: 'Какой формат Reels лучше всего работает для разных типов бизнеса?',
        paragraphs: [
            'Для сервисных бизнесов (студии, клиники, агентства): форматы «до/после», процесс работы, разборы ошибок клиентов, закулисье команды.',
            'Для продуктового бизнеса и шоурумов: демонстрация продукта в действии, ключевые характеристики через визуал, упаковка и детали.',
            'Для личного бренда и экспертов: экспертные советы в сжатом формате, ответы на частые вопросы, позиция и точка зрения по актуальным темам ниши.',
        ],
    },
    {
        question: 'Почему пакет роликов эффективнее, чем один ролик?',
        paragraphs: [
            'Один ролик — один эксперимент. Пакет из 6–10 роликов создаёт систему: разные форматы, разные аудитории, разные точки входа.',
            'Регулярность публикаций даёт алгоритму больше сигналов об аккаунте, поэтому шансы попасть в рекомендации растут с каждой новой публикацией.',
            'С операционной стороны: один съёмочный день закрывает контент на 4–6 недель и снимает с команды еженедельный стресс вокруг производства.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоят Reels для бизнеса в Тбилиси?',
        answer: 'Пакет Breus Media начинается от 1 200 ₾ (6 роликов). Standard 8 роликов + Caption Bank — от 1 600 ₾. Full 10 роликов с рекламными версиями — от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Сколько роликов нужно бизнесу в месяц?',
        answer: 'Для заметного роста обычно 8–12 роликов в месяц (2–3 публикации в неделю).',
    },
    {
        question: 'Работают ли Reels для B2B бизнеса?',
        answer: 'Да, при правильном формате. Экспертные разборы, процессы, результаты клиентов и позиция бренда хорошо работают для B2B в социальных сетях.',
    },
    {
        question: 'Нужно ли закрывать офис на время съёмки?',
        answer: 'Нет. Обычно снимаем в тихое время или в рабочем окне без клиентов, 4–5 часов одного визита.',
    },
    {
        question: 'Что входит в пакет Reels для бизнеса?',
        answer: 'Готовые смонтированные ролики 9:16, hook/caption материалы, рекомендации по форматам, публикационный скелет и обложки (в Standard и Full).',
    },
    {
        question: 'Можно ли использовать ролики в рекламе?',
        answer: 'Да. Формат Reels отлично подходит для таргета в Instagram и TikTok. В пакете Full делаем отдельные рекламные версии.',
    },
    {
        question: 'Как быстро будут готовы материалы?',
        answer: 'Стандартно 5–7 рабочих дней после съёмочного дня.',
    },
    {
        question: 'Зачем Reels, если мы уже ведём Instagram?',
        answer: 'Фото и тексты в основном видят текущие подписчики. Reels — формат, который стабильно открывает доступ к новой аудитории через рекомендации.',
    },
] as const;

const notFitItems = [
    'Тем, кому нужно полное ведение соцсетей «под ключ»: мы делаем production, а не полный SMM-аутсорс.',
    'Если общий бюджет на контент ниже 600 ₾: профессиональный пакет в таком бюджете не окупается.',
    'Бизнесу в фазе закрытия или радикальной перестройки: лучше сначала стабилизировать операционную часть.',
    'Тем, кто хочет один ролик «на пробу» без намерения строить регулярность.',
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
            name: 'Reels для бизнеса',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Reels для бизнеса — пример формата',
    description: 'Пример короткого вертикального видео для продвижения бизнеса в Instagram Reels и TikTok.',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
    uploadDate: '2026-04-01',
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
    name: 'Reels для бизнеса в Тбилиси',
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

export default function ReelsBusinessPage() {
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
                id="reels-business-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=80')",
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
                                Reels для бизнеса · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для бизнеса — контент-поток для Instagram, TikTok и рекламы
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Серия коротких роликов, которая превращает скроллинг в обращения.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Ваш бизнес не появляется в рекомендациях — не потому что он хуже конкурентов, а потому что
                                у него нет регулярного вертикального видеоконтента. Breus Media снимает серии Reels для
                                компаний, брендов и личных проектов: с хуками, форматами под вашу нишу и монтажом, который
                                держит внимание до конца. Один выезд — пакет из 6–10 готовых роликов.
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
                                    <li>Форматы: Instagram Reels + TikTok + Shorts + Ads</li>
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
                                    title="Пример Reels для бизнеса"
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
                            Хотите, чтобы ваш бизнес начал появляться в рекомендациях и приводить новых клиентов?
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Оставьте заявку, расскажите о бизнесе и мы подскажем, какой формат пакета даст самый
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
                        {packages.map((pkg) => (
                            <article
                                key={pkg.title}
                                className={`rounded-[16px] border p-6 ${
                                    pkg.featured
                                        ? 'border-[#D4A017] bg-[#141414] shadow-[0_12px_32px_rgba(212,160,23,0.18)]'
                                        : 'border-[#2a2a2a] bg-[#111111]'
                                }`}
                            >
                                <h3 className="text-lg font-bold text-white">{pkg.title}</h3>
                                <p className="mt-2 text-3xl font-bold text-[#D4A017]">{pkg.price}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/65">{pkg.subtitle}</p>
                                <p className="mt-2 text-xs text-white/50">{pkg.audience}</p>
                                <p className="mt-1 text-xs text-white/50">{pkg.timeline}</p>
                                <ul className="mt-5 space-y-2 text-sm text-white/75">
                                    {pkg.features.map((f) => (
                                        <li key={f} className="flex gap-2">
                                            <span className="text-[#D4A017]">•</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-[16px] border border-[#2a2a2a]">
                        <table className="w-full min-w-[640px] text-sm">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="border-b border-[#2a2a2a] p-3 text-left text-white/80">Параметр</th>
                                    <th className="border-b border-[#2a2a2a] p-3 text-left text-white/80">Basic</th>
                                    <th className="border-b border-[#2a2a2a] p-3 text-left text-white/80">Standard</th>
                                    <th className="border-b border-[#2a2a2a] p-3 text-left text-white/80">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/70">
                                {packageCompareRows.map(([param, basic, standard, full]) => (
                                    <tr key={param} className="border-b border-[#1e1e1e] last:border-0">
                                        <td className="p-3 text-white/80">{param}</td>
                                        <td className="p-3">{basic}</td>
                                        <td className="p-3">{standard}</td>
                                        <td className="p-3">{full}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы запустить контент-поток для бизнеса? Оставьте заявку — обсудим формат, нишу и пакет за 10 минут."
                buttonLabel="Запустить съёмку Reels"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

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
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Похожие услуги</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <Link href={item.href} className="text-lg font-bold text-[#D4A017] transition-colors hover:text-white">
                                    {item.title}
                                </Link>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">Запустить Reels для бизнеса</h2>
                        <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                            Напишите нам — обсудим нишу, формат пакета и дату съёмки. Обычно согласование занимает
                            10–15 минут.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                {CONTACT_PHONE}
                            </a>
                        </div>
                        <p className="mt-5 text-xs text-white/45">Тбилиси · Батуми · Вся Грузия</p>
                    </div>
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
