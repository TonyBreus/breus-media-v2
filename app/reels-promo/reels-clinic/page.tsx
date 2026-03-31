import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
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

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-clinic';
const PAGE_TITLE = 'Reels для клиники Тбилиси — контент для Instagram от 200 ₾ | Breus Media';
const PAGE_DESCRIPTION =
    'Профессиональные Reels для клиник и врачей в Тбилиси. Контент для Instagram и Facebook, который работает на запись пациентов. Пакеты от 200 ₾, пакет на месяц от 800 ₾.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';
const REEL_EXAMPLE_THUMB =
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80';

const heroSubtitle =
    'Клиника, которой нет в Instagram и Facebook, не существует для половины аудитории. Reels — самый доступный способ присутствовать регулярно.';

const heroIntro =
    'Социальные сети в Грузии — не дополнение к медицинскому маркетингу, а один из главных каналов. Facebook и Instagram остаются основными площадками, через которые тбилисские пациенты узнают о клиниках, следят за врачами и принимают решения о записи. Reels — короткие вертикальные видео — работают на органический охват без рекламного бюджета: алгоритм продвигает их новой аудитории. Мы снимаем Reels для клиник, врачей и wellness-проектов в Тбилиси: пишем концепции, снимаем, монтируем и отдаём готовый контент — без головной боли для команды клиники.';

const serviceIntro =
    'Reels для клиники — это серия коротких (15–60 секунд) вертикальных видео, специально созданных для Instagram и Facebook. Каждый ролик отвечает на один вопрос пациента, показывает один момент работы клиники или рассказывает об одной процедуре — понятно, честно и без медицинского жаргона. Мы берём на себя сценарий, съёмку и монтаж — клинике остаётся только публиковать готовый контент.';

const audienceItems = [
    'Клиники, у которых есть Instagram или Facebook, но публикации выходят редко и несистемно.',
    'Врачи, которые хотят развивать личный профиль и привлекать пациентов через соцсети.',
    'Стоматологии, косметологические и эстетические клиники — ниши с высоким визуальным потенциалом.',
    'Wellness-центры, SPA и медицинские центры превентивной медицины с продаваемой атмосферой.',
    'Клиники, работающие с иностранными пациентами, которым нужен контент на русском и английском.',
    'Медицинские проекты, которые только начинают присутствие в соцсетях и хотят начать правильно.',
];

const taskCards: CardItem[] = [
    {
        title: 'Создаёт регулярное присутствие в соцсетях',
        text: 'Один Reels в неделю — и алгоритм видит клинику как активный профиль и продвигает её новой аудитории. Нерегулярные публикации не работают: регулярность важнее идеального контента.',
    },
    {
        title: 'Снижает тревогу пациента до записи',
        text: 'Reels в формате как всё происходит, что будет на процедуре и как это не больно снимает страх ещё до первого визита.',
    },
    {
        title: 'Привлекает новую аудиторию без рекламного бюджета',
        text: 'В отличие от обычных постов, Reels показывается людям, которые ещё не подписаны на клинику. Это органический канал привлечения.',
    },
    {
        title: 'Формирует экспертность врача или клиники',
        text: 'Ответы на вопросы, развенчание мифов и объяснение процедур строят репутацию и закрепляют доверие к специалисту.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Мы понимаем, что нужно вести соцсети, но не знаем, что снимать',
        text: 'Медицинский контент специфичен: нельзя шок-контент, нельзя медицинские обещания, нельзя снимать пациентов без согласия. Мы знаем, какие форматы безопасны и работают.',
    },
    {
        title: 'Снимаем на телефон — получается непрезентабельно и неудобно для команды',
        text: 'Персонал тратит время на съёмку вместо основной работы, процесс не систематизирован, а публикации выходят нерегулярно.',
    },
    {
        title: 'Врачи не хотят сниматься — боятся камеры',
        text: 'Это решаемо. Мы используем форматы, где доктор присутствует минимально или остаётся за кадром, а контент всё равно получается живым.',
    },
    {
        title: 'У нас уже были попытки, но просмотры низкие — непонятно, что работает',
        text: 'Охват зависит от хука в первые 2 секунды, темы, монтажа и частоты публикаций. Делаем Reels по рабочим принципам алгоритма Instagram/Facebook.',
    },
    {
        title: 'Не хватает времени — клиника и так занята',
        text: 'Один съёмочный день в месяц даёт контент на 4–6 недель. Команде клиники не нужно заниматься производством ежедневно.',
    },
    {
        title: 'Не понимаем, как Reels помогают записи — кажется, это просто хайп',
        text: 'В медицине Reels работают как прогрев: пациент видит клинику регулярно, знакомится с врачами и приходит, когда возникает потребность.',
    },
];

const earnItems = [
    'Органический охват = бесплатный трафик. Хорошие Reels продвигаются алгоритмом без рекламного бюджета.',
    'Прогрев холодной аудитории. Пациент, следящий за профилем 2–4 недели, приходит с более высоким доверием.',
    'Продажа дорогих процедур через объяснение. Видео снимает барьер непонимания и сомнений.',
    'Повторные визиты через регулярный контакт. Подписанные пациенты чаще возвращаются и рекомендуют клинику.',
];

const saveItems = [
    'Удерживает аудиторию, которая думает неделями. Регулярные Reels оставляют клинику в поле зрения до решения.',
    'Борется с мифами и страхами мягко, без давления, через объяснение на понятном языке.',
    'Снижает стоимость рекламы: тёплая аудитория из органики конвертируется дешевле.',
    'Создаёт архив контента. Ролики живут дольше Stories и продолжают приводить новых пациентов.',
];

const deliverables = [
    'Контент-план: темы Reels на месяц, согласованные с клиникой.',
    'Сценарный разбор каждого ролика: что показываем, что говорим, какой хук в начале.',
    'Выезд съёмочной команды (оператор со стабилизатором, свет, петличный микрофон).',
    'Съёмка материала для 4–8 Reels за один день.',
    'Профессиональный монтаж каждого ролика: склейка, музыка, субтитры, динамика.',
    'Обложки для ленты Instagram (cover frames).',
    'Готовые файлы в вертикальном формате 9:16, оптимизированные для Instagram/Facebook.',
    'Опционально: текстовые подписи и хэштеги к каждому ролику.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'MP4 9:16 (вертикальный) для Instagram Reels и Facebook Reels.',
    },
    {
        title: 'Длина',
        text: '15–60 секунд каждый ролик.',
    },
    {
        title: 'Количество',
        text: 'В зависимости от пакета — от 4 до 8 Reels за съёмочный день.',
    },
    {
        title: 'Срок и передача',
        text: '5–7 рабочих дней после съёмки. Передача через Google Drive с пометками по порядку публикаций.',
    },
    {
        title: 'Права',
        text: 'Полная передача прав без ограничений.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Стоматология начинает системное присутствие в соцсетях',
        text: 'Один съёмочный день даёт 6 Reels: как проходит первый приём, страшно ли лечить зубы, как работает автоклав, один день стоматолога, можно ли в беременность, что такое 3D-сканирование зуба. Контента хватает на 6 недель.',
    },
    {
        title: 'Косметолог строит личный бренд в Instagram',
        text: 'Пакет из 8 Reels закрывает до 2 месяцев: процедуры изнутри, ответы на вопросы, мифы и реальность, до/после без шок-кадров, домашний уход.',
    },
    {
        title: 'Wellness-центр привлекает релокантов',
        text: 'Reels с русскими субтитрами показывают атмосферу и сервис. Алгоритм продвигает контент нужной аудитории через геотеги и языковые сигналы.',
    },
    {
        title: 'Клиника готовит контент для рекламных кампаний',
        text: 'Профессиональные Reels используются как рекламные креативы в Facebook Ads и обычно работают эффективнее статических баннеров.',
    },
];

const localContextText =
    'В Грузии Facebook и Instagram сохраняют доминирующее положение как медиаплатформы, особенно для аудитории 25–55 лет, которая является ключевой для медицинских услуг. В Тбилиси также заметна русскоязычная аудитория: релоканты из России, сотрудники международных компаний, медицинские туристы. Для них контент на русском языке становится главным каналом выбора услуг. В медицинской нише Reels в Тбилиси всё ещё относительно свободная категория: многие клиники публикуют только статичные посты или ведут аккаунт нерегулярно. Это окно возможностей для быстрого роста видимости с умеренным бюджетом.';

const miniCases: CardItem[] = [
    {
        title: 'Стоматология — страх зубного кресла',
        text: 'Серия Reels а у вас не страшно снимала тревогу по шагам: анестезия, звук бормашины, ощущения после удаления. Охват вырос, появились прямые сообщения с вопросом о записи.',
    },
    {
        title: 'Косметолог — честная косметология',
        text: 'Серия разоблачений мифов про ботокс, курс процедур и разницу между методиками дала рост сохранений и стабильное продвижение роликов новой аудитории.',
    },
    {
        title: 'Wellness-центр — атмосферный контент',
        text: 'Серия минутки покоя: пар в бане, стакан воды с лимоном, плавная работа массажиста. Без слов, только музыка. Профиль получил рост подписчиков и узнаваемости.',
    },
];

const socialProofItems = [
    'Стабилизатор для плавного вертикального видео: медицинский Reels должен выглядеть профессионально, а не любительски.',
    'Понимание алгоритмов: строим хук в первые 2 секунды и динамику монтажа, которую платформы продвигают.',
    'Знание медицинских ограничений: понимаем, что можно и нельзя публиковать без рисков для клиники.',
    'Полный цикл: от концепции до готовых файлов и рекомендаций по публикации.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels и почему это важно для клиники?',
        answer:
            'Reels — это короткие вертикальные видео 15–60 секунд в Instagram и Facebook. Алгоритм показывает их людям, которые ещё не подписаны на профиль, поэтому это органический способ познакомить с клиникой новую аудиторию без рекламного бюджета.',
    },
    {
        question: 'Нужно ли врачам быть в кадре?',
        answer:
            'Нет, это не обязательно. Работают и форматы без лица: атмосфера клиники, руки в работе, оборудование, закулисье. Но ролики с врачом в кадре обычно дают более высокий уровень доверия и охвата.',
    },
    {
        question: 'Как часто нужно публиковать Reels?',
        answer:
            'Минимально рабочая частота — 1 Reels в неделю. Оптимально для роста профиля — 2–3 Reels в неделю.',
    },
    {
        question: 'Что снимают за один съёмочный день?',
        answer:
            'За 4–6 часов снимаем материалы для 4–8 Reels: интерьер, фрагменты работы, закулисье, короткие ответы врача на вопросы пациентов.',
    },
    {
        question: 'Можно ли показывать реальные процедуры?',
        answer:
            'Да, но с ограничениями. Без крови и шок-контента можно. Темы с травматичными деталями снимаются в образовательном формате без пугающих кадров.',
    },
    {
        question: 'Как Reels превращаются в запись к врачу?',
        answer:
            'Через цикл доверия: пациент видит ролик, подписывается, следит за клиникой несколько недель и записывается, когда возникает потребность. Важно добавлять CTA и ссылку на запись в bio.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоят Reels для клиники?',
        answer:
            'От 200 ₾ за один Reels. Пакет 4 Reels — от 650 ₾. Пакет 8 Reels — от 1 100 ₾. Контент на месяц под ключ — от 800 ₾ при регулярном сотрудничестве.',
    },
    {
        question: 'Что входит в стоимость?',
        answer:
            'Контент-план, сценарий, съёмка, монтаж, субтитры, обложки. Дополнительно оплачиваются озвучка, субтитры на иностранном языке и срочность.',
    },
    {
        question: 'Можно ли работать регулярно раз в месяц?',
        answer:
            'Да, это самый эффективный формат. При ежемесячной съёмке стоимость одного ролика снижается, а темы планируются на месяцы вперёд.',
    },
    {
        question: 'Как оплатить?',
        answer: '50% предоплата до съёмки и 50% после согласования роликов. Работаем официально.',
    },
    {
        question: 'Сколько длится съёмочный день?',
        answer:
            '4–6 часов в клинике. Встраиваемся в рабочий график: снимаем между приёмами или в выделенное окно.',
    },
    {
        question: 'Мы маленькая клиника — нам хватит одного Reels в месяц?',
        answer:
            'Один ролик поддерживает присутствие, но для роста нужна регулярность. Рекомендуем начать с 4 Reels в месяц — это базовый рабочий ритм.',
    },
];

const whyBreusItems = [
    'Понимаем специфику медицинского контента и ограничения платформ.',
    'Пишем концепции и сценарии: команде клиники не нужно каждый раз придумывать темы с нуля.',
    'Монтируем под алгоритм: сильный старт, динамика, субтитры и логичный призыв к действию.',
    'Один выезд = контент на месяц без еженедельной организационной нагрузки.',
    'Тбилиси — наш рынок: понимаем русскоязычную, грузинскую и международную аудиторию.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф и контент-план',
        text: 'Вы рассказываете о клинике и задачах. Мы предлагаем темы первых Reels и согласовываем план.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Пишем сценарный разбор каждого ролика, присылаем список подготовки, согласовываем дату.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Снимаем 4–8 Reels в клинике за 4–6 часов, спокойно и без хаоса.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и согласование',
        text: 'Отправляем черновики, собираем обратную связь и вносим правки.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и план публикаций',
        text: 'Отдаём готовые файлы и рекомендации по порядку и датам публикации.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 650 ₾',
        subtitle: 'Для клиники, которая начинает или тестирует формат',
        features: [
            'Контент-план: 4 темы.',
            'Съёмка 4 часа.',
            '4 смонтированных Reels с субтитрами.',
            'Обложки для ленты.',
            'Срок: 5 рабочих дней.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 100 ₾',
        subtitle: 'Для активного Instagram-присутствия',
        featured: true,
        features: [
            'Контент-план: 8 тем.',
            'Съёмка 6 часов.',
            '8 Reels с субтитрами, музыкой и динамичным монтажом.',
            'Обложки + текстовые подписи.',
            'Срок: 7 рабочих дней.',
        ],
    },
    {
        title: 'Full',
        price: 'от 800 ₾/мес',
        subtitle: 'Для клиник, которые хотят системный результат',
        features: [
            'Ежемесячный контент-план.',
            '1 съёмочный день в месяц.',
            '6–8 Reels в месяц.',
            'Управление публикациями по запросу.',
            'Скидка на дополнительные форматы.',
            'Приоритет в расписании съёмок.',
        ],
    },
];

const packageCompareRows = [
    ['Параметр', 'Basic (4 ролика)', 'Standard (8 роликов)', 'Full (абонемент)'],
    ['Цена', 'от 650 ₾', 'от 1 100 ₾', 'от 800 ₾/мес'],
    ['Количество Reels', '4', '8', '6–8/мес'],
    ['Контент-план', '✓', '✓', '✓ ежемесячно'],
    ['Субтитры', '✓', '✓', '✓'],
    ['Обложки для ленты', '✓', '✓', '✓'],
    ['Текстовые подписи', '—', '✓', '✓'],
    ['Управление публикациями', '—', '—', 'по запросу'],
    ['Срок', '5 дней', '7 дней', 'постоянно'],
];

const relatedServices = [
    {
        title: 'Имиджевое видео клиники',
        href: '/promo-video/promo-clinic',
        text: 'Базовый ролик о клинике как якорный контент для сайта и соцсетей.',
    },
    {
        title: 'Видео для врача',
        href: '/promo-video/promo-doctor',
        text: 'Личная видеовизитка специалиста, которую можно нарезать в Reels.',
    },
    {
        title: 'Съёмка интерьера клиники',
        href: '/promo-video/clinic-interior',
        text: 'Фото и видео интерьера для регулярных атмосферных публикаций.',
    },
    {
        title: '360° тур для клиники',
        href: '/360-tour/clinic',
        text: 'Виртуальный тур, дополняющий Reels-присутствие на сайте и в GMB.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Снимают эпизодически, когда есть настроение',
        text: 'Алгоритм поощряет регулярность. Четыре хороших ролика в месяц лучше одного идеального.',
    },
    {
        title: 'Используют только рекламный формат',
        text: 'Контент в стиле скидка 30% утомляет аудиторию. Рабочая схема: 80% пользы и 20% продающих сообщений.',
    },
    {
        title: 'Игнорируют первые 2 секунды',
        text: 'Если старт слабый, зритель уходит до основного сообщения. Хук обязателен.',
    },
    {
        title: 'Не используют субтитры',
        text: 'Большая часть просмотров идёт без звука. Без субтитров теряется значительная доля аудитории.',
    },
    {
        title: 'Делают слишком длинные ролики',
        text: 'Для медицинских тем чаще лучше серия коротких Reels, чем один длинный ролик.',
    },
    {
        title: 'Не отвечают на комментарии',
        text: 'Ответы на комментарии усиливают вовлечённость и помогают алгоритму продолжать показ ролика.',
    },
];

const freeImprovements = [
    'Запишите 30-секундный ответ врача на самый частый вопрос пациентов.',
    'Снимите один день в клинике за 30 секунд: подготовка, первый пациент, рабочий ритм.',
    'Добавьте авто-субтитры к уже существующим видео при публикации.',
    'Публикуйте в пиковое время для Тбилиси: 8–10, 12–14 и 19–22.',
    'Собирайте вопросы из директа и комментариев — это лучший контент-план.',
];

const prepChecklist = [
    'Согласованы 4–8 тем роликов с командой Breus Media.',
    'Кабинеты и зоны съёмки подготовлены, лишние предметы убраны.',
    'Врачи предупреждены о своём участии в кадре (если участвуют).',
    'Подобрана одежда без ярких принтов и чужих логотипов.',
    'Выделен блок 4–6 часов или согласованы рабочие окна между приёмами.',
    'Есть письменные согласия, если в кадре появляются реальные пациенты.',
    'Instagram-аккаунт переведён в профессиональный режим.',
    'Согласован план публикаций по порядку и датам.',
];

const longAnswers: LongTailAnswer[] = [
    {
        question: 'Почему медицинские Reels работают лучше статических постов?',
        paragraphs: [
            'Алгоритмы Instagram и Facebook в 2024–2025 годах приоритизируют короткое вертикальное видео. Статические посты чаще показываются подписанной аудитории, тогда как Reels получают выдачу в рекомендациях и поиске.',
            'В медицине видео дополнительно снижает тревогу лучше текста: пациент видит спокойный процесс и легче принимает решение о первом визите.',
        ],
    },
    {
        question: 'Какие форматы Reels работают лучше всего в медицинской нише?',
        paragraphs: [
            'Лучше всего работают форматы ответа на вопрос пациента, развенчания мифа, закулисья рабочего дня, безопасного до/после и ролики про конкретный страх пациента.',
            'Главный принцип: один ролик = одна тема и одно понятное сообщение без перегруза терминологией.',
        ],
    },
    {
        question: 'Как измерять результаты медицинских Reels?',
        paragraphs: [
            'Ключевые метрики: охват, досматриваемость, сохранения, переходы в профиль и клики по ссылке записи. Для бизнес-результата фиксируйте обращения из Instagram вопросом откуда вы о нас узнали или через UTM.',
            'Сохранения — самый сильный сигнал полезности в медицинской нише. Высокие сохранения обычно приводят к более широкому органическому распространению.',
        ],
    },
    {
        question: 'Можно ли делать Reels про сложные процедуры?',
        paragraphs: [
            'Да, но в образовательной подаче и без шокирующих деталей. Пугающие визуальные элементы обычно ограничивают продвижение и снижают охват.',
            'Лучше работает объяснение через схему, анимацию и спокойный комментарий врача: понятно, безопасно и эффективно для алгоритма.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоят Reels для клиники в Тбилиси?',
        answer: 'От 200 ₾ за один Reels. Пакет 4 роликов — от 650 ₾. Пакет 8 роликов — от 1 100 ₾. Ежемесячное сотрудничество — от 800 ₾/мес.',
    },
    {
        question: 'Сколько Reels нужно публиковать клинике в месяц?',
        answer: 'Минимум 4 (один в неделю) для стабильного роста. Оптимально 8 (два в неделю) для более активного расширения аудитории.',
    },
    {
        question: 'Как долго снимают Reels для клиники?',
        answer: 'Один съёмочный день 4–6 часов обычно даёт материал для 4–8 роликов.',
    },
    {
        question: 'За сколько дней готовы смонтированные Reels?',
        answer: 'Обычно 5–7 рабочих дней после съёмки.',
    },
    {
        question: 'Нужно ли врачу быть в кадре в Reels?',
        answer: 'Не обязательно. Работают и форматы без врача в кадре, но ролики с врачом часто дают больший охват и доверие.',
    },
    {
        question: 'Помогают ли Reels привлекать иностранных пациентов в Грузию?',
        answer: 'Да. Русские субтитры, геотеги и языковые сигналы помогают попадать в нужную аудиторию релокантов и медтуристов.',
    },
    {
        question: 'Можно ли использовать Reels как рекламный материал в Facebook Ads?',
        answer: 'Да. Профессионально снятые вертикальные ролики обычно работают заметно лучше статических баннеров.',
    },
    {
        question: 'Что снимают за один съёмочный день для клиники?',
        answer: 'Интерьер, рабочие процессы, ответы врача на вопросы, объяснения процедур и закулисье. Список тем согласуется заранее.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Видео для врача',
        href: '/promo-video/promo-doctor',
        text: 'Видеовизитка специалиста как якорный контент для профиля, из которого нарезаются Reels.',
    },
    {
        title: 'Имиджевое видео клиники',
        href: '/promo-video/promo-clinic',
        text: 'Базовый имиджевый ролик, создающий основу для всего контента клиники.',
    },
    {
        title: 'Съёмка интерьера клиники',
        href: '/promo-video/clinic-interior',
        text: 'Фото и видеоматериалы интерьера как база для интерьерных Reels.',
    },
    {
        title: '360° тур для клиники',
        href: '/360-tour/clinic',
        text: 'Виртуальный тур, который дополняет Reels-присутствие в Google Maps.',
    },
];

const internalTransitions = [
    {
        text: 'Хотите не только Reels, но и полноформатное имиджевое видео клиники?',
        href: '/promo-video/promo-clinic',
        label: 'Перейти в раздел Имиджевое видео',
    },
    {
        text: 'Нужна видеовизитка для конкретного врача, которую можно нарезать в серию Reels?',
        href: '/promo-video/promo-doctor',
        label: 'Смотреть страницу Видео для врача',
    },
];

const myths: MythItem[] = [
    {
        myth: 'Reels — это только для молодёжи, наша аудитория не смотрит.',
        reality:
            'Аудитория 25–55 лет активно смотрит короткие видео. В Тбилиси видеоконтент в Facebook и Instagram потребляют все возрастные группы, включая 40–55.',
    },
    {
        myth: 'Нам нечего снимать — у нас обычная клиника.',
        reality:
            'У любой специализации десятки тем: страхи пациентов, мифы, как проходит визит, что нужно знать до процедуры, ответы на частые вопросы.',
    },
    {
        myth: 'Один хороший ролик важнее регулярности.',
        reality:
            'Алгоритм работает на постоянство. Четыре средних ролика в месяц обычно дают лучший результат, чем один выдающийся раз в квартал.',
    },
    {
        myth: 'Запустим Reels и сразу будет поток пациентов.',
        reality:
            'Reels — инструмент прогрева и долгосрочного присутствия. Первые измеримые результаты чаще появляются через 1–2 месяца системной публикации.',
    },
    {
        myth: 'Нужно снимать только идеальный контент.',
        reality:
            'Аутентичность часто работает лучше постановки. Реальный врач в реальном кабинете вызывает больше доверия, чем стерильная студийность.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Reels',
        definition: 'Короткое вертикальное видео 15–90 секунд в Instagram и Facebook, продвигаемое новой аудитории.',
    },
    {
        term: 'Хук',
        definition: 'Первые 1–2 секунды видео, которые удерживают внимание зрителя.',
    },
    {
        term: 'Органический охват',
        definition: 'Количество людей, увидевших контент без платного продвижения.',
    },
    {
        term: 'Сохранения',
        definition: 'Действие сохранить ролик. Один из самых сильных сигналов качества для алгоритма Instagram.',
    },
    {
        term: 'Контент-план',
        definition: 'Заранее согласованный список тем и форматов публикаций на месяц или квартал.',
    },
    {
        term: 'Субтитры',
        definition: 'Текст в видео. Критичны, потому что значительная часть просмотров идёт без звука.',
    },
];

const notFitItems = [
    'Клиники, которые принципиально не хотят присутствовать в соцсетях.',
    'Тем, кто ожидает немедленного потока записей с первого ролика.',
    'Командам, которые не готовы выделить хотя бы один полноценный съёмочный день в месяц.',
    'Проектам, которые хотят шокирующий медицинский контент ради виральности.',
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
            name: 'Reels',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для клиники',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Reels для клиники',
    description: 'Короткий вертикальный ролик для Instagram Reels и Facebook Reels.',
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
    name: 'Reels для клиники в Тбилиси',
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
        highPrice: '1100',
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

export default function ReelsClinicPage() {
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
                id="reels-clinic-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.28),rgba(8,8,8,0.95)_72%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Reels для клиники · Тбилиси
                            </p>
                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для клиники — контент для соцсетей и digital-присутствия
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">{heroSubtitle}</p>
                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Получить контент-план для клиники
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-white/60">Ответим в течение рабочего дня · {CONTACT_PHONE}</p>
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
                                    <p className="mt-2 text-sm text-white/85">Съёмка 4–6 часов, монтаж 5–7 дней</p>
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
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">{serviceIntro}</p>
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
                    <h2 className="text-3xl font-bold md:text-5xl">Deliverables — что входит в услугу</h2>
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
                text="Расскажите о вашей клинике — предложим темы для первых Reels и стоимость пакета"
                buttonLabel="Получить контент-план для клиники"
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
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">{localContextText}</p>
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
                            title="Пример Reels для клиники"
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

            <ProcessNote text="Один съёмочный день в клинике — и у вас есть контент на месяц. Никаких еженедельных согласований и съёмок." />

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
                                {packageCompareRows.slice(1).map((row) => (
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
                        <li>Хотите протестировать формат или закрыть контент на 1 месяц — начните с Basic (4 Reels).</li>
                        <li>Нужен активный рост и запас контента сразу — Standard (8 роликов) даст больше гибкости.</li>
                        <li>Хотите системный результат и постоянное партнёрство — выбирайте Full-абонемент.</li>
                    </ul>
                    <p className="mt-6 text-sm text-white/70">Нужна консультация? Подскажем, какой формат подойдёт именно вашей клинике.</p>
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
                    <h2 className="text-3xl font-bold md:text-5xl">Обсудить контент-план для клиники</h2>
                    <p className="mt-4 text-base text-white/75">
                        Позвоните или напишите — расскажем, какие темы работают в вашей нише и что можно снять за один день.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить контент-план для клиники
                        </a>
                        <a
                            href={`tel:${CONTACT_PHONE_RAW}`}
                            className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                        >
                            {CONTACT_PHONE}
                        </a>
                    </div>
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
                        Снимаем Reels для клиник и врачей по всему Тбилиси и Грузии. Напишите нам — обсудим темы,
                        дату съёмки и стоимость без обязательств. Первый разговор займёт 15 минут.
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
                        Reels для клиники в Тбилиси — Breus Media. Регулярное присутствие без головной боли.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Частые ошибки клиник в Reels</h2>
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
                    <h2 className="text-3xl font-bold md:text-5xl">Чеклист готовности клиники к съёмке Reels</h2>
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
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-semibold text-white">{item.question}</h3>
                                <div className="mt-3 space-y-3">
                                    {item.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="text-sm leading-relaxed text-white/75">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
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
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
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

            <DroneStickyCta heroId="reels-clinic-hero" />
            <DroneFooterStitch />
        </main>
    );
}
