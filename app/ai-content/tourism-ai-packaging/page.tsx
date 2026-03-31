import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type CardItem = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongAnswerItem = {
    question: string;
    answers: string[];
};

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type GlossaryItem = {
    term: string;
    description: string;
};

const CANONICAL_URL = 'https://breus.media/ai-content/tourism-ai-packaging';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroSubtitle =
    'Превратите ваши маршруты из «есть в блокноте» в структурированный каталог туров на двух языках';

const heroIntro =
    'У большинства туроператоров и гидов в Грузии та же проблема: маршруты есть, опыт есть, клиенты довольны — но описания туров написаны наспех, нет единой структуры, а перевод на английский «сделан когда-то через Google Translate». AI-упаковка туристических предложений — это системная работа с вашим контентом: мы берём ваши идеи, маршруты и фишки, структурируем их с помощью AI-инструментов и создаём готовые тексты — карточки туров, описания для маркетплейсов, FAQ, продающие заголовки — на русском и английском. Один проект, и у вас есть каталог, готовый к размещению.';

const serviceExplanation =
    'Мы берём ваши туры — в любом виде, хоть в виде голосовых сообщений в WhatsApp — и превращаем их в структурированные карточки с описанием, программой, что входит/не входит, FAQ и продающим заголовком. Используем AI-инструменты для скорости и масштаба: то, что раньше занимало месяц копирайтинга, готово за 3–5 дней. Результат — тексты, которые понимают и русскоязычные, и иностранные клиенты.';

const audienceItems: string[] = [
    'Туроператорам с 5+ маршрутами, описания которых «написаны как попало».',
    'Гидам, переходящим от «всё в голове» к структурированному предложению.',
    'Глэмпингам и эко-проектам, которым нужны продающие описания для сайта.',
    'Агрегаторам и маркетплейсам грузинских туров — для унификации карточек.',
    'Инвестиционным проектам в туристическом секторе — нужна профессиональная упаковка.',
    'Тем, кто планирует запустить новые маршруты и хочет сразу правильную структуру.',
];

const taskCards: CardItem[] = [
    {
        title: 'Превращает «маршруты из головы» в продукт',
        text: 'Делает из устных объяснений чёткие карточки туров, которые можно сразу публиковать и продавать.',
    },
    {
        title: 'Создаёт единый стиль каталога',
        text: 'Все туры звучат консистентно и профессионально, без разнобоя между описаниями.',
    },
    {
        title: 'Готовит тексты под нужные платформы',
        text: 'Сайт, Viator, GetYourGuide, PDF для партнёров — контент адаптируется под конкретный канал.',
    },
    {
        title: 'Ускоряет двуязычную упаковку',
        text: 'Создаёт RU + EN контент без классического длинного цикла копирайтинга.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Маршруты «в голове» — продавать сложно',
        text: 'Пока всё держится на личных объяснениях, масштабироваться невозможно. Ни партнёры, ни сотрудники не могут продавать без вас.',
    },
    {
        title: 'Старые описания не продают',
        text: '«Незабываемый тур по живописным местам Грузии» не отличает вас ни от кого. Нужны конкретика и эмоция.',
    },
    {
        title: 'Нет английского текста — теряем иностранцев',
        text: 'Платёжеспособные туристы из Европы и ОАЭ не понимают предложение не из-за продукта, а из-за слабого перевода.',
    },
    {
        title: 'Каждое новое описание — часы работы',
        text: 'Один качественный текст под тур занимает день. При 10+ маршрутах это уже системная проблема.',
    },
    {
        title: 'Маркетплейсы требуют структуру, которой нет',
        text: 'Viator просит программу по часам, включения и FAQ, а данные разбросаны по чатам и заметкам.',
    },
    {
        title: 'Обновлять тексты при изменениях тяжело',
        text: 'Сезон изменился, добавилась новая точка — а переписывать всё снова некогда.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Карточки конвертируют лучше',
        text: 'Клиент сразу видит программу, выгоду и детали, которые нужны для решения о брони.',
    },
    {
        title: 'EN-описания открывают новый рынок',
        text: 'Доступ к иностранным туристам повышает средний чек и расширяет каналы продаж.',
    },
    {
        title: 'Упаковка помогает аргументировать цену',
        text: 'Хорошо структурированный тур воспринимается как более ценный и профессиональный продукт.',
    },
    {
        title: 'Партнёры продают без вашего участия',
        text: 'Агентства получают готовые материалы и могут работать с вашими турами автономно.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Меньше возвратов и недопониманий',
        text: 'FAQ и полное описание формируют правильные ожидания ещё до покупки.',
    },
    {
        title: 'Меньше нагрузки на менеджеров',
        text: 'Типовые вопросы уже закрыты в тексте, команда тратит меньше времени на повторяющиеся объяснения.',
    },
    {
        title: 'Бизнес меньше зависит от одного человека',
        text: 'Знания фиксируются в карточках, а не остаются только у гида или владельца.',
    },
    {
        title: 'Обновления делаются быстрее',
        text: 'AI-шаблоны позволяют вносить сезонные изменения без переписывания всего каталога.',
    },
];

const deliverables: string[] = [
    'Карточки туров: название, подзаголовок, описание, программа, включения/исключения.',
    'FAQ для каждого тура: 5–8 часто задаваемых вопросов с ответами.',
    'Продающие заголовки и лиды для сайта и маркетплейсов.',
    'Версии на русском и английском языках.',
    'Адаптация под форматы: полная карточка на сайт / краткое описание для Viator / PDF для партнёров.',
    'AI-шаблоны для самостоятельного обновления и добавления туров.',
    'Рекомендации по SEO-оптимизации описаний.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'Google Docs или Notion: структурированный каталог, готовый к размещению.',
    },
    {
        title: 'Сроки',
        text: '3–7 дней в зависимости от количества туров и глубины адаптации.',
    },
    {
        title: 'Передача',
        text: 'Финальный пакет с карточками, FAQ и материалами под разные каналы публикации.',
    },
    {
        title: 'Дополнительно',
        text: 'AI-шаблоны для дальнейшего самостоятельного обновления каталога.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Сценарий 1 — Запуск на маркетплейс',
        text: 'Туроператор с 8 маршрутами выходит на Viator. Структурируем 8 карточек под требования платформы за 5 дней на RU и EN.',
    },
    {
        title: 'Сценарий 2 — Обновление сайта',
        text: 'Гид с личным сайтом переписывает весь каталог: единый стиль, внятная структура и сильные заголовки.',
    },
    {
        title: 'Сценарий 3 — Подготовка к сезону',
        text: 'Глэмпинг запускает летние активности. Быстро создаём пакет описаний для новых предложений в едином стиле.',
    },
    {
        title: 'Сценарий 4 — Работа с партнёрами',
        text: 'Туроператор передаёт туры агентствам. Формируем двуязычные PDF-описания в унифицированном формате за 1–2 дня.',
    },
];

const localContextText =
    'Грузинский туристический рынок быстро растёт, и всё больше операторов выходят на международные маркетплейсы — Viator, GetYourGuide, Airbnb Experiences. Требования к качеству описаний там высокие: нужна структура, ключевые слова, FAQ и точные включения. Большинство локальных операторов теряют место на маркетплейсе именно из-за слабой текстовой упаковки, а не из-за плохого продукта. Мы помогаем Тбилисским и грузинским туроператорам конкурировать на международном уровне через правильный текст.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1 — Каталог туров',
        text: 'Туроператор с 10 авторскими маршрутами по Грузии получил структурированный каталог на RU/EN за 7 дней. Размещение на Viator заняло 2 дня вместо 2 недель.',
    },
    {
        title: 'Кейс 2 — Текстовое обновление сайта',
        text: 'Гид на конструкторе полностью обновил описания туров. Пользователи стали чаще дочитывать страницы до конца.',
    },
    {
        title: 'Кейс 3 — Запуск нового продукта',
        text: 'Глэмпинг запустил осенний пакет на 3 дня с вином и треккингом. RU+EN описание было готово за 1 день вместо недели.',
    },
];

const socialProofItems: string[] = [
    'Понимаем туристический рынок Грузии: как говорят локальные операторы и что важно иностранным туристам.',
    'Работаем с AI-инструментами профессионально: не отдаём сырой текст, а формируем готовый продукт.',
    'Создаём двуязычный контент с учётом разных моделей мышления RU и EN аудитории.',
    'Опыт в медиа и маркетинге туристических проектов: видим задачу шире, чем просто «написать текст».',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-упаковка туристических предложений?',
        answer: 'Это создание структурированных описаний туров с помощью AI-инструментов и экспертизы команды. На выходе вы получаете готовые тексты на двух языках, которые можно сразу размещать.',
    },
    {
        question: 'Нужно ли мне самому разбираться в AI-инструментах?',
        answer: 'Нет. Мы делаем всю работу и передаём финальные документы без технической нагрузки для вашей команды.',
    },
    {
        question: 'Что нужно подготовить, чтобы начать?',
        answer: 'Любые материалы: старые описания, заметки, Google Docs, голосовые сообщения, фото и видео. Мы собираем структуру из любого формата.',
    },
    {
        question: 'AI-текст не будет роботизированным?',
        answer: 'AI нужен для скорости и структуры, но каждый текст проходит живую редактуру. В результате текст читается естественно и продаёт.',
    },
    {
        question: 'Смогу ли я потом сам добавлять новые туры?',
        answer: 'Да. Мы передаём шаблоны и логику обновления, чтобы любой сотрудник мог добавлять карточки без отдельного копирайтера.',
    },
    {
        question: 'Подойдёт ли это для Viator и GetYourGuide?',
        answer: 'Да. Мы адаптируем структуру под требования конкретных маркетплейсов.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит AI-упаковка туристических предложений?',
        answer: 'От 150 ₾ за 1–2 тура (базовый формат). Каталог из 5–10 туров — от 600 ₾. Итог зависит от объёма, числа языков и глубины адаптации.',
    },
    {
        question: 'Что входит в базовую цену?',
        answer: 'Структурирование тура, описание, программа, FAQ (5 вопросов), продающий заголовок. На одном языке.',
    },
    {
        question: 'Сколько стоит двуязычная версия (RU + EN)?',
        answer: 'Обычно добавляет 40–60% к стоимости. Точную оценку даём после анализа объёма.',
    },
    {
        question: 'Можно ли обновить уже готовые описания?',
        answer: 'Да, обновление обычно дешевле создания контента с нуля.',
    },
    {
        question: 'Есть ли скидка при большом объёме?',
        answer: 'Да. При заказе 8+ туров скидка начинается от 15%.',
    },
    {
        question: 'Какая схема оплаты?',
        answer: '50% предоплата и 50% после финальной передачи документов.',
    },
];

const whyUsItems: string[] = [
    'Понимаем туристический продукт изнутри: снимаем туры, делаем видео, знаем контекст рынка.',
    'Используем AI грамотно: получаете скорость без потери качества.',
    'Пишем живой русский и английский, а не дословный Google Translate.',
    'Готовим тексты под конкретные площадки: сайт, Viator, GetYourGuide, PDF.',
    'Работаем в Тбилиси и можем встречаться лично при необходимости.',
];

const processNoteText =
    'Начинаем с intake-сессии: вы рассказываете о турах в свободной форме — голосом, текстом, документами. Мы структурируем информацию, создаём первые версии текстов, согласуем с вами и вносим правки. Финальный документ — в Google Docs или Notion, готовый к немедленному использованию.';

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Intake',
        text: 'Вы делитесь информацией о турах в любом формате: голос, текст, документы, чаты.',
    },
    {
        step: 'Шаг 2',
        title: 'Анализ и структуризация',
        text: 'Разбираем материалы и строим единую архитектуру каталога туров.',
    },
    {
        step: 'Шаг 3',
        title: 'AI-генерация + редактура',
        text: 'Создаём черновики и доводим их до коммерческого уровня.',
    },
    {
        step: 'Шаг 4',
        title: 'Согласование',
        text: 'Вы проверяете тексты, мы вносим правки до 2 итераций.',
    },
    {
        step: 'Шаг 5',
        title: 'Финальная передача',
        text: 'Передаём Google Docs/Notion + AI-шаблоны для дальнейшего обновления.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 150 ₾',
        audience: '1–2 тура. Подходит, чтобы протестировать формат AI-упаковки.',
        timeline: 'Срок: 2–3 дня.',
        items: [
            'Полная карточка на одном языке.',
            'Название, описание, программа, включения/исключения.',
            'FAQ (5 вопросов) и продающий заголовок.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 600 ₾',
        audience: '5–8 туров на двух языках для сайта и маркетплейсов.',
        timeline: 'Срок: 5–7 дней.',
        items: [
            'RU + EN каталог с единой структурой.',
            'Карточки, FAQ и лиды под публикацию.',
            'Адаптация под сайт и маркетплейсы.',
            'AI-шаблон для добавления новых туров.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 1 200 ₾',
        audience: '10+ туров и полный цикл упаковки под несколько каналов.',
        timeline: 'Срок: 7–12 дней.',
        items: [
            'Всё из Standard.',
            'Адаптации под 2–3 платформы (сайт, Viator, PDF).',
            'SEO-оптимизация описаний.',
            'AI-шаблоны + консультация по размещению.',
        ],
    },
];

const packageComparisonRows = [
    ['Параметр', 'Basic', 'Standard', 'Full'],
    ['Количество туров', '1–2', '5–8', '10+'],
    ['Языки', '1 язык', 'RU + EN', 'RU + EN'],
    ['Карточка тура', '✓', '✓', '✓'],
    ['FAQ', '5 вопросов', '5–8 на тур', '5–8 на тур'],
    ['Маркетплейс-адаптация', '—', 'базовая', '2–3 платформы'],
    ['SEO-рекомендации', '—', 'базовые', 'расширенные'],
    ['AI-шаблоны', '—', '✓', '✓'],
    ['Консультация по размещению', '—', '—', '✓'],
    ['Цена', 'от 150 ₾', 'от 600 ₾', 'от 1 200 ₾'],
];

const packageHelper: string[] = [
    'Basic — если хотите попробовать формат на 1–2 ключевых турах.',
    'Standard — если нужен полноценный двуязычный каталог для сайта и маркетплейсов.',
    'Full — если у вас большой каталог и нужно закрыть задачу полностью: тексты, SEO, шаблоны, консультация.',
];

const relatedServices = [
    {
        title: 'Видеогид по маршруту',
        href: '/tourism-service',
        description: 'Видео-версия вашего тура для сайта и презентаций.',
    },
    {
        title: 'Reels для туристического проекта',
        href: '/reels-service',
        description: 'Короткие вертикальные форматы для соцсетей и прогрева аудитории.',
    },
    {
        title: 'Промо-ролик для экскурсии',
        href: '/promo-video-service',
        description: 'Видео под маркетплейс, рекламу и партнёрские каналы.',
    },
    {
        title: '360° тур',
        href: '/360-tour-tourism',
        description: 'Виртуальный показ локации для глэмпинга, отеля или тура.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Ошибка 1 — Описание «для всех»',
        text: '«Тур для всей семьи на любой бюджет» не конвертирует. Нужны чёткая аудитория и конкретная выгода.',
    },
    {
        title: 'Ошибка 2 — Нет структуры программы',
        text: 'Клиенту важно знать тайминг: во сколько старт, что будет в середине дня, когда обед и финал.',
    },
    {
        title: 'Ошибка 3 — Нет FAQ',
        text: 'Без блока вопросов часть клиентов уходит с неотработанными возражениями.',
    },
    {
        title: 'Ошибка 4 — Плохой перевод на EN',
        text: 'Дословный перевод выглядит неестественно и снижает доверие иностранной аудитории.',
    },
    {
        title: 'Ошибка 5 — Нет конкретики по включениям',
        text: '«Питание включено» без деталей создаёт сомнение и тормозит оплату.',
    },
    {
        title: 'Ошибка 6 — Описание не обновляется',
        text: 'Изменения в маршруте и цене не отражаются в тексте, из-за чего растут недопонимания и возвраты.',
    },
];

const quickImprovements: string[] = [
    'Добавьте программу по времени хотя бы в одно описание тура — это сразу повысит ясность.',
    'Напишите 3–5 FAQ для самого популярного тура, чтобы снять типовые вопросы.',
    'Уточните, что входит и не входит в стоимость — это снижает конфликтные ожидания.',
    'Переведите заголовки и короткие описания на английский через DeepL как быстрый старт.',
    'Создайте единый шаблон карточки и примените ко всем маршрутам.',
];

const readinessChecklist: string[] = [
    'Есть список всех маршрутов с названиями.',
    'Для каждого тура есть хотя бы базовое описание или программа.',
    'Определена целевая аудитория: RU / иностранцы / обе группы.',
    'Определены платформы: сайт / маркетплейс / PDF / всё вместе.',
    'Есть примерные цены или диапазоны.',
    'Известно, что входит и не входит в каждый тур.',
    'Есть фото или видео к каждому туру (или зафиксировано, что пока нет).',
    'Определён дедлайн, к которому нужен готовый каталог.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Чем AI-упаковка отличается от обычного копирайтинга?',
        answers: [
            'Классический копирайтинг обычно дольше, дороже и сильнее зависит от одного автора.',
            'AI-упаковка ускоряет процесс в 3–5 раз и масштабируется на большой каталог без потери единого стиля.',
            'AI отвечает за скорость и структуру, а финальная редактура выполняется человеком с пониманием рынка.',
        ],
    },
    {
        question: 'Какие форматы текстов нужны для разных платформ?',
        answers: [
            'Сайт: длинное SEO-описание, история тура, FAQ и контекст маршрута.',
            'Viator/GetYourGuide: структурированная карточка с блоками «Включено», «Не включено», «Нужно знать».',
            'PDF для партнёров: краткая версия + программа + контакты.',
            'Telegram/WhatsApp: короткий анонс с ключевой выгодой и CTA.',
        ],
    },
    {
        question: 'Нужна ли AI-упаковка, если тексты уже есть на сайте?',
        answers: [
            'Если конверсия низкая, много однотипных вопросов или нет качественного EN-блока, пересборка обычно оправдана.',
            'Обновление текстов без изменения продукта нередко заметно улучшает коммерческий результат.',
        ],
    },
    {
        question: 'Как AI-упаковка сочетается с видеопродакшном?',
        answers: [
            'Тексты отвечают на рациональные вопросы: программа, условия, включения и стоимость.',
            'Видео создаёт эмоциональное желание «поехать». В связке эти два слоя дают более сильную конверсию.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Что такое AI-упаковка туристических предложений?',
        answer: 'Это создание структурированных двуязычных карточек туров, FAQ и описаний для сайта и маркетплейсов с помощью AI и профессиональной редактуры.',
    },
    {
        question: 'Сколько стоит AI-упаковка туров в Грузии?',
        answer: 'От 150 ₾ за 1–2 тура. Каталог из 10+ туров на двух языках — от 1 200 ₾.',
    },
    {
        question: 'На каких языках делается упаковка?',
        answer: 'Базово — русский и английский. Дополнительные языки доступны по запросу.',
    },
    {
        question: 'Подходит ли для Viator и GetYourGuide?',
        answer: 'Да. Карточки адаптируются под требования конкретных маркетплейсов.',
    },
    {
        question: 'Как быстро готов каталог туров?',
        answer: '2–3 дня для 1–2 туров и 5–12 дней для большого каталога.',
    },
    {
        question: 'Нужно ли самому разбираться в AI-инструментах?',
        answer: 'Нет. Вы передаёте материалы, а мы возвращаем готовый результат.',
    },
    {
        question: 'Помогает ли это привлечь иностранных туристов?',
        answer: 'Да. Сильные EN-описания улучшают понятность оффера и повышают конверсию иностранной аудитории.',
    },
    {
        question: 'Что делать после получения готовых текстов?',
        answer: 'Разместить материалы на сайте, маркетплейсах и в партнёрских пакетах; мы даём рекомендации по каналам.',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1 — «Хороший продукт продаёт себя сам»',
        text: 'В онлайне никто не узнает о продукте без сильного описания. Текст — это первая продажа.',
    },
    {
        title: 'Миф 2 — «AI-тексты неестественные»',
        text: 'AI используется как ускоритель, а финальная версия проходит живую профессиональную редактуру.',
    },
    {
        title: 'Миф 3 — «Иностранцы найдут нас и так»',
        text: 'Иностранные туристы принимают решение по тексту на своём языке. Без EN-версии вы теряете рынок.',
    },
    {
        title: 'Миф 4 — «Текст пишется один раз навсегда»',
        text: 'Сезоны и требования платформ меняются, поэтому контент должен регулярно обновляться.',
    },
    {
        title: 'Миф 5 — «Нам нужно только видео»',
        text: 'Видео создаёт интерес, а текст закрывает продажу. Без сильного описания конверсия ниже.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'AI-упаковка',
        description: 'Создание структурированного контента с помощью AI-инструментов и редактуры. Быстрее ручного копирайтинга при высоком качестве.',
    },
    {
        term: 'Карточка тура',
        description: 'Стандартизированное описание тура: название, программа, включения/исключения, FAQ, цена.',
    },
    {
        term: 'Intake-сессия',
        description: 'Первая встреча/звонок, где вы передаёте информацию о турах в свободной форме.',
    },
    {
        term: 'Локализация',
        description: 'Адаптация текста под язык и культурные особенности аудитории, а не буквальный перевод.',
    },
    {
        term: 'Маркетплейс туров',
        description: 'Платформа продажи экскурсий и активностей: Viator, GetYourGuide, Airbnb Experiences, TripAdvisor.',
    },
    {
        term: 'SEO-оптимизация',
        description: 'Включение релевантных ключевых слов, чтобы карточки туров лучше находились в Google.',
    },
];

const notFitItems: string[] = [
    'Операторам с 1 туром, у которого уже есть сильное и конверсионное описание.',
    'Тем, кто хочет полностью исключить согласование и участие в правках.',
    'Проектам без реальных маршрутов или без понимания целевой аудитории.',
    'Тем, кто не планирует публиковать готовые материалы после передачи.',
];

const faqSchemaItems = [...beginnerFaqItems, ...commercialFaqItems, ...shortQaItems];

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
            name: 'AI-визуализация',
            item: 'https://breus.media/ai-visualization-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'AI-упаковка туристических предложений',
            item: CANONICAL_URL,
        },
    ],
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
    serviceType: 'AI-упаковка туристических предложений',
    name: 'AI-упаковка туристических предложений — тексты и сценарии для продаж',
    description:
        'Создаём карточки туров, FAQ и описания для сайта, Viator и GetYourGuide на RU/EN. AI + профессиональная редактура. Тбилиси, Грузия.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        telephone: CONTACT_PHONE_RAW,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Country',
        name: 'Georgia',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '150',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'GEL',
            price: '150',
            unitText: 'за пакет',
        },
        url: CANONICAL_URL,
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: 'AI-упаковка туристических туров Грузия | Тексты и описания — Breus Media',
    description:
        'Создаём описания туров, карточки для Viator и GetYourGuide на RU/EN. AI-упаковка для туроператоров Грузии. От 150 ₾. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-упаковка туристических туров Грузия | Тексты и описания — Breus Media',
        description:
            'Создаём описания туров, карточки для Viator и GetYourGuide на RU/EN. AI-упаковка для туроператоров Грузии. От 150 ₾. Тбилиси.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function TourismAiPackagingPage() {
    return (
        <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44">
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.2),transparent_40%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_68%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                    AI Content · Tourism · Marketplace Ready
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-упаковка туристических предложений — тексты и сценарии для продаж
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                {heroSubtitle}
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить AI-упаковку туров
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть пакеты
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">На выходе</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет 1–2 тура. Доступны RU и EN версии.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Small</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–12 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Catalog</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>RU + EN карточки туров</li>
                                    <li>FAQ, включения/исключения, сценарии публикации</li>
                                    <li>AI-шаблоны для обновлений</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что такое AI-упаковка туристических предложений?</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{serviceExplanation}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому нужна AI-упаковка?</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Задачи AI-упаковки</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {taskCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Боли туроператоров в текстовом контенте</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Как AI-упаковка помогает зарабатывать?</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {earnCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает избежать потерь?</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {saveCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что входит в AI-упаковку?</h2>
                    <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {deliverables.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                ✓ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Форматы и сроки</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {outputCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex md:items-center md:justify-between">
                        <div>
                            <p className="text-xl font-bold text-white">
                                Ваши маршруты хороши. Осталось упаковать их так, чтобы клиент понял всё без звонка.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Расскажите о вашем каталоге туров и получите предложение по упаковке.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Обсудить AI-упаковку туров
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сценарии использования AI-упаковки</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Туристический контент в Грузии: проблема упаковки</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{localContextText}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему нам доверяют</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection items={beginnerFaqItems} title="FAQ для новичка" variant="beginner" bgColor="#080808" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по деньгам и процессу"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media?</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {whyUsItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text={processNoteText} />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">5 шагов</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Тарифы на AI-упаковку</h2>
                    <div className="mt-8 grid gap-5 xl:grid-cols-3">
                        {packages.map((pkg) => (
                            <article
                                key={pkg.title}
                                className={`rounded-[20px] border p-6 ${
                                    pkg.featured
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                                <p className="mt-4 text-3xl font-bold text-[#FFD23F]">{pkg.price}</p>
                                <p className="mt-4 text-sm text-white/75">{pkg.audience}</p>
                                <p className="mt-2 text-sm text-white/65">{pkg.timeline}</p>
                                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/72">
                                    {pkg.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сравнение пакетов</h2>
                    <div className="mt-8 overflow-x-auto rounded-[16px] border border-[#2a2a2a]">
                        <table className="w-full min-w-[720px] border-collapse bg-[#141414] text-left text-sm text-white/78">
                            <thead className="bg-[#1b1b1b] text-xs uppercase tracking-[0.12em] text-white/60">
                                <tr>
                                    {packageComparisonRows[0].map((item) => (
                                        <th key={item} className="border-b border-[#2a2a2a] px-4 py-3">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {packageComparisonRows.slice(1).map((row) => (
                                    <tr key={row[0]}>
                                        {row.map((cell, idx) => (
                                            <td key={`${row[0]}-${idx}`} className="border-b border-[#2a2a2a] px-4 py-3">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Какой пакет выбрать?</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/74">
                            {packageHelper.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">Не уверены? Напишите — подскажем оптимальный формат за 5 минут.</p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center rounded-[10px] border border-[#FFD23F]/45 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black"
                        >
                            Получить консультацию
                        </a>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваши маршруты уже есть. Мы поможем упаковать их так, чтобы клиенты понимали, выбирали и бронировали без ваших объяснений."
                buttonLabel="Заказать AI-упаковку туров"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/45"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="rounded-[20px] border border-[#FFD23F]/30 bg-[#121212] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-white/72">Тбилиси, Грузия. Работаем онлайн и оффлайн.</p>
                        <p className="mt-5 text-sm text-white/75">WhatsApp / Телефон: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">Сайт: breus.media</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_RAW}`}
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
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
                        Breus Media — AI-упаковка туров, медиапродакшн, 360° туры в Грузии. Тбилиси. {CONTACT_PHONE_DISPLAY}
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">6 ошибок в описаниях туристических предложений</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {commonMistakes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">5 бесплатных шагов</h2>
                    <ol className="mt-8 space-y-3 text-sm leading-relaxed text-white/74">
                        {quickImprovements.map((item, index) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                {index + 1}. {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист перед AI-упаковкой</h2>
                    <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {readinessChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                ☐ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    {expandedAnswers.map((item) => (
                        <article key={item.question} className="mt-5 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 first:mt-8">
                            <h3 className="text-xl font-bold text-white">{item.question}</h3>
                            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                                {item.answers.map((answer) => (
                                    <p key={answer}>{answer}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы для поиска</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {shortQaItems.map((item) => (
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{item.question}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы о текстовой упаковке туров</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {myths.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Словарь</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.term}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы не подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/74">
                        {notFitItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                    `,
                }}
            />
        </main>
    );
}
