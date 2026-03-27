import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
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

type LongTailAnswer = {
    question: string;
    answer: string[];
};

type PackageCard = {
    title: string;
    price: string;
    subtitle: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-tourism-route';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceItems: string[] = [
    'Туроператорам с авторскими маршрутами по Грузии: Казбеги, Кахетия, Сванетия.',
    'Гидам, строящим личный бренд и продающим туры напрямую без агрегаторов.',
    'Организаторам джип-туров, треккинговых и рафтинг-маршрутов.',
    'Нишевым проектам: гастро-экспедиции, ретриты, эко-туры.',
    'Inbound-операторам, привлекающим гостей из Европы, США и ОАЭ.',
    'Туристическим агентствам, желающим отстроиться от массового рынка.',
];

const solutionPoints: string[] = [
    'Снижает страх туристической ловушки: гость видит реальный маршрут, а не рекламные обещания.',
    'Заменяет 20+ однотипных вопросов в мессенджерах: транспорт, еда, физическая нагрузка, погода.',
    'Создаёт визуальный аргумент для обоснования более высокой цены тура.',
    'Работает на сайте, маркетплейсах (Viator, GetYourGuide), в рекламе и у партнёров одновременно.',
];

const painCards: Card[] = [
    {
        title: 'Клиенты спрашивают, но не бронируют',
        text: 'Много запросов в WhatsApp, но конверсия низкая: люди не уверены в том, что получат. Визуал снимает этот барьер.',
    },
    {
        title: 'Невозможно объяснить уникальность текстом',
        text: 'У вас авторский маршрут, скрытые локации, особая атмосфера, но в описании это выглядит как у всех. Видео показывает разницу.',
    },
    {
        title: 'Давление агрегаторов с 20%+ комиссией',
        text: 'Зависимость от Viator и Expedia дорого обходится. Своё видео даёт инструмент для прямых продаж.',
    },
    {
        title: 'Сезонный провал в бронированиях',
        text: 'Межсезонье убивает загрузку. Видеогид под каждый сезон помогает продавать туры заранее.',
    },
    {
        title: 'Конкуренты снижают цену, и сложно обосновать свой чек',
        text: 'Качественный контент помогает аргументировать стоимость выше рынка без скидок.',
    },
    {
        title: 'Нет времени и навыков делать видео самому',
        text: 'Вы занимаетесь турами, не монтажом. Мы берём на себя весь продакшн: от сценария до готового файла.',
    },
];

const earnPoints: string[] = [
    'Повышает конверсию: посмотрел видео и забронировал, без лишних вопросов.',
    'Даёт аргумент для повышения цены тура на 30-50% за счёт образа премиум-маршрута.',
    'Открывает прямой канал продаж, снижая зависимость от агрегаторов.',
    'Привлекает платёжеспособную аудиторию из Европы и ОАЭ, которая делает выбор по визуалу.',
];

const avoidLossPoints: string[] = [
    'Снижает количество возвратов и негативных отзывов: гость заранее знает, на что идёт.',
    'Экономит время менеджера, потому что видео автоматически отвечает на типовые вопросы.',
    'Защищает от претензий в стиле нам не сказали: прозрачный маршрут снимает спорные ожидания.',
    'Контент живёт годами и продолжает работать без дополнительных вложений.',
];

const deliverables: string[] = [
    'Главный маршрутный фильм 5-15 минут (16:9) для сайта и YouTube.',
    'Версия 60-90 секунд для рекламы и маркетплейсов.',
    'Вертикальная версия 9:16 для Instagram и TikTok.',
    'B-roll: отдельные сцены локаций, транспорта, еды для соцсетей.',
    'Субтитры на русском и английском языках.',
    'Музыкальное оформление и цветокоррекция.',
    'Финальный монтаж в двух форматах: для онлайн-размещения и для загрузки партнёрам.',
    'Рекомендации по размещению и SEO-описание для YouTube/сайта.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1: Флагманский маршрут',
        text: 'Туроператор с маршрутом Казбеги за день размещает видеогид на сайте и в карточке Viator. Конверсия растёт, потому что гость видит реальный транспорт, виды и гида.',
    },
    {
        title: 'Сценарий 2: Отстройка от масс-рынка',
        text: 'Авторский гид с нишевым маршрутом по Кахетии добавляет видеогид в рассылку и Instagram Bio. Клиенты сами пишут уже посмотрел, хочу записаться.',
    },
    {
        title: 'Сценарий 3: Привлечение иностранцев',
        text: 'Inbound-оператор использует видео с английскими субтитрами для Google Ads и туристических блогов. Трафик из Европы и ОАЭ приходит уже тёплым.',
    },
    {
        title: 'Сценарий 4: Партнёрские продажи',
        text: 'Маршрутный фильм передаётся турагентствам и отелям как материал для рекомендаций. Партнёры охотнее продают тур, когда есть что показать.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1: Джип-тур по Казбеги',
        text: 'После добавления видеогида на страницу бронирования выросло среднее время на странице, а количество уточняющих вопросов снизилось примерно на 60%.',
    },
    {
        title: 'Кейс 2: Гастро-тур по Кахетии',
        text: 'Тур Вино и деревни Кахетии получил видеогид с акцентом на локальных виноделов и кухню, что принесло 12 прямых бронирований без рекламного бюджета.',
    },
    {
        title: 'Кейс 3: Культурный маршрут по Тбилиси',
        text: 'Гид-историк использует видеогид как визитную карточку в переписке с корпоративными клиентами и получает более высокую конверсию из первого контакта в договор.',
    },
];

const socialProofBullets: string[] = [
    'Работаем в Грузии и знаем локации, сезоны, логистику и визуальный язык каждого региона.',
    'DJI Air 3S + Insta360: профессиональный набор для маршрутных съёмок.',
    'Производим контент на русском и английском, учитывая обе аудитории.',
    'Есть опыт с туристическими проектами: от авторских гидов до inbound-операторов.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Зачем видеогид, если у меня уже есть фотографии маршрута?',
        answer:
            'Фото показывают точки, а видео показывает опыт. Гость видит движение, атмосферу, темп и людей, поэтому принимает решение быстрее и увереннее.',
    },
    {
        question: 'Нужно ли мне самому участвовать в съёмке?',
        answer:
            'Необязательно. Мы можем снимать маршрут с вашим гидом, с группой или самостоятельно. Ваше присутствие в кадре — опция.',
    },
    {
        question: 'Для каких платформ подойдёт видео?',
        answer:
            'Делаем несколько форматов: горизонтальный для сайта/YouTube, вертикальный для Reels и TikTok, короткие версии для рекламы и маркетплейсов.',
    },
    {
        question: 'Как долго занимает производство?',
        answer:
            'Обычно от 7 до 14 рабочих дней: съёмка, монтаж, согласование и передача финальных файлов.',
    },
    {
        question: 'Мой маршрут работает только летом. Стоит ли вкладываться в видео?',
        answer:
            'Да. Летний видеогид продаёт бронирования заранее, когда туристы планируют поездки в апреле-мае. Контент работает и в межсезонье.',
    },
    {
        question: 'Смогу ли я обновлять видео потом?',
        answer:
            'Да. Передаём финальный материал, а при изменениях маршрута можем сделать дополнительный выезд или точечное обновление монтажа.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеогид по маршруту?',
        answer:
            'От 800 ₾ за базовый формат одного маршрута. Цена зависит от длины маршрута, количества форматов и дополнительных опций.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer:
            'Съёмка в один день, монтаж главного фильма до 10 минут и короткой версии для рекламы, субтитры на одном языке и цветокоррекция.',
    },
    {
        question: 'Есть ли скрытые доплаты?',
        answer:
            'Нет. Стоимость фиксируем в брифе до старта. Доплаты возможны только за новые задачи, о которых не договаривались изначально.',
    },
    {
        question: 'Можно заказать сразу несколько маршрутов?',
        answer:
            'Да. Это выгоднее: снимаем несколько маршрутов в рамках одного проекта со скидкой на каждый следующий.',
    },
    {
        question: 'Кому принадлежат права на видео?',
        answer:
            'Права на использование передаются вам. Мы можем показывать кейс в портфолио только по согласованию.',
    },
    {
        question: 'Как проходит оплата?',
        answer: '50% предоплата до съёмки и 50% после финального согласования. Принимаем ₾, USD и EUR.',
    },
];

const whyUsPoints: string[] = [
    'Мы в Грузии и знаем локации изнутри: от Старого Тбилиси до горных дорог Сванетии.',
    'Полный цикл производства: сценарий, съёмка (включая дрон), монтаж, субтитры, форматирование.',
    'Работаем на двух языках: контент сразу готов для русскоязычной и международной аудитории.',
    'Понимаем задачи турбизнеса и фокусируемся на результате в бронированиях.',
    'Быстрые сроки: 5-10 рабочих дней от съёмки до финальных файлов.',
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Заявка и разбор маршрута',
        text: 'Бесплатный звонок/встреча: обсуждаем задачу, позиционирование и структуру видеогида.',
    },
    {
        title: 'Шаг 2. Бриф и сценарий',
        text: 'Фиксируем ключевые точки, тайминг, акценты и согласуем сценарный план до выезда.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Выезд по маршруту 1-2 дня: снимаем транспорт, локации, активности, еду, атмосферу и финал тура.',
    },
    {
        title: 'Шаг 4. Монтаж и согласование',
        text: 'Передаём черновой монтаж, собираем обратную связь и вносим до двух раундов правок.',
    },
    {
        title: 'Шаг 5. Финальная передача',
        text: 'Отдаём все форматы через облако и даём рекомендации по размещению на каналах продаж.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 800 ₾',
        subtitle: 'Один рабочий видеогид для сайта и WhatsApp',
        timeline: '5-10 рабочих дней после съёмки',
        items: [
            'Съёмка маршрута 1 день.',
            'Главный фильм до 10 минут (16:9).',
            'Короткая версия 60 секунд для рекламы.',
            'Субтитры RU.',
            'Монтаж и цветокоррекция.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 400 ₾',
        subtitle: 'Для охвата сайта, соцсетей и иностранной аудитории',
        timeline: '5-10 рабочих дней после съёмки',
        featured: true,
        items: [
            'Съёмка маршрута 1-2 дня.',
            'Аэросъёмка (DJI Air 3S).',
            'Главный фильм до 15 минут + короткая версия.',
            'Вертикальная версия 9:16.',
            'Субтитры RU/EN.',
            'Музыка, цветокоррекция, монтаж.',
        ],
    },
    {
        title: 'Full',
        price: 'от 2 200 ₾',
        subtitle: 'Полная упаковка флагманского маршрута под все каналы',
        timeline: 'Приоритетные сроки',
        items: [
            'Всё из Standard.',
            '3 коротких клипа для соцсетей.',
            'Reels-версия + b-roll пакет (20+ сцен).',
            'Субтитры RU/EN/GE.',
            'SEO-описание для YouTube и рекомендации по публикации.',
        ],
    },
];

const packageHelper: string[] = [
    'Basic: если нужен один рабочий видеогид для сайта и WhatsApp без лишних форматов.',
    'Standard: если важны сайт, соцсети и иностранные туристы (дрон + вертикаль + EN-субтитры).',
    'Full: если маршрут ваш флагман и нужен полный контент-пакет для всех каналов.',
];

const relatedServices = [
    {
        href: '/reels-service',
        label: 'Reels для туристического проекта',
        description: 'Короткий контент для соцсетей и алгоритмов продвижения.',
    },
    {
        href: '/promo-video-service',
        label: 'Промо-ролик для экскурсии',
        description: 'Сфокусированное видео под конкретную активность или программу.',
    },
    {
        href: '/tourism-service',
        label: 'AI-упаковка туристических предложений',
        description: 'Тексты и описания маршрутов для сайта, карточек и рекламы.',
    },
    {
        href: '/drone-hotels-tourism',
        label: 'Аэросъёмка для туристического бизнеса',
        description: 'Виды маршрута с воздуха для усиления визуальной ценности продукта.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Ошибка 1: Только текст и фото',
        text: 'По картинкам турист не чувствует маршрут. Видео создаёт эффект присутствия и снимает страх неизвестности.',
    },
    {
        title: 'Ошибка 2: Одно видео на все каналы',
        text: 'Один и тот же длинный ролик не работает везде одинаково. Нужны форматы под платформу и цель.',
    },
    {
        title: 'Ошибка 3: Нет субтитров',
        text: 'Большинство видео в соцсетях смотрят без звука. Без субтитров теряется значительная часть аудитории.',
    },
    {
        title: 'Ошибка 4: Снимают достопримечательности, а не опыт',
        text: 'Гостей интересует не только место, но и то, что они будут делать: люди, еда, эмоции, темп маршрута.',
    },
    {
        title: 'Ошибка 5: Нет чёткого призыва к действию',
        text: 'Видео заканчивается, и зритель не понимает, что делать дальше. Нужен конкретный следующий шаг.',
    },
    {
        title: 'Ошибка 6: Видео снимается один раз и забывается',
        text: 'Маршруты меняются и контент устаревает. Обновляйте видеогид минимум раз в год.',
    },
];

const improveWithoutPurchase: string[] = [
    'Добавьте на страницу бронирования хотя бы 30-секундное видео с телефона — это лучше, чем ничего.',
    'Укажите конкретные цифры в описании маршрута: 6 часов, 3 остановки, 1 дегустация — это снижает тревогу.',
    'Снимите вертикальное видео на ближайшем выезде и опубликуйте в Stories.',
    'Попросите гостей снять момент на маршруте и отметить вас: user-generated контент усиливает доверие.',
    'Добавьте в WhatsApp-переписку фото или видео с реального маршрута, чтобы быстрее закрывать запросы.',
];

const checklistItems: string[] = [
    'Определены ключевые точки маршрута: 3-7 обязательных остановок.',
    'Понятно, что показывать на каждой точке: пейзаж, активность, еда, эмоция.',
    'Определена целевая аудитория: русскоязычные, иностранцы, семьи, молодёжь.',
    'Определены форматы: сайт, Instagram, маркетплейсы, реклама.',
    'Понятен сезон съёмки: лето/осень/зима влияют на свет и атмосферу.',
    'Есть гид или сотрудник, который будет на съёмке (или мы снимаем самостоятельно).',
    'Согласован бюджет и примерные сроки.',
    'Запланирован хотя бы один реальный выезд группы для съёмки живого тура.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Чем видеогид отличается от обычного рекламного ролика?',
        answer: [
            'Видеогид по маршруту — это образовательно-продающий формат, а не просто промо.',
            'Его задача провести зрителя по маршруту шаг за шагом, чтобы он понял, что его ждёт в поездке.',
            'Рекламный ролик в первую очередь работает на эмоцию и охват, а видеогид — на доверие и конверсию.',
        ],
    },
    {
        question: 'Как правильно использовать видеогид для увеличения продаж?',
        answer: [
            'Разместите видео на странице бронирования рядом с кнопкой Забронировать.',
            'Отправляйте ссылку в WhatsApp всем, кто запрашивает детали, и добавьте ролик в карточки Viator/GetYourGuide.',
            'Используйте короткие версии в рекламе и делитесь ими с партнёрами: отелями, турагентствами и блогами.',
        ],
    },
    {
        question: 'Нужен ли видеогид, если уже есть красивый Instagram с фото?',
        answer: [
            'Фото в Instagram дают эстетику и узнаваемость, но не отвечают на вопрос как именно пройдёт день туриста.',
            'Видеогид показывает последовательность маршрута, детали логистики и атмосферу в динамике.',
            'Связка хорошего Instagram и маршрутного видеогида обычно даёт лучший результат, чем любой из форматов по отдельности.',
        ],
    },
    {
        question: 'Как видеогид помогает в межсезонье?',
        answer: [
            'В межсезонье туристы активно планируют поездки заранее, и именно тогда видео формирует выбор.',
            'Размещение видеогида в феврале-марте может приносить бронирования на май-июнь.',
            'Отдельные сезонные версии маршрута (например, зима в Казбеги) помогают продавать то, что конкуренты не упаковали визуально.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое видеогид по туристическому маршруту?',
        answer: 'Это профессиональный фильм 5-15 минут, который показывает весь маршрут: транспорт, локации, еду и активности до бронирования.',
    },
    {
        question: 'Сколько стоит видеогид по маршруту в Тбилиси?',
        answer: 'От 800 ₾ за базовый формат. Полный пакет с дроном, несколькими форматами и субтитрами RU/EN — от 2 200 ₾.',
    },
    {
        question: 'Для кого нужен видеогид по маршруту?',
        answer: 'Для туроператоров, авторских гидов и организаторов нишевых туров, которые хотят выше конверсию и больше прямых продаж.',
    },
    {
        question: 'Сколько времени занимает производство видеогида?',
        answer: 'Обычно 7-14 рабочих дней от съёмки до финальной передачи файлов.',
    },
    {
        question: 'Помогает ли видеогид привлекать иностранных туристов?',
        answer: 'Да. Версии с английскими субтитрами хорошо работают для аудитории из Европы, США, ОАЭ и других стран.',
    },
    {
        question: 'Можно ли использовать видеогид на маркетплейсах туров?',
        answer: 'Да, делаем короткие версии для Viator, GetYourGuide и других платформ.',
    },
    {
        question: 'Где снимает Breus Media?',
        answer: 'В Тбилиси и по всей Грузии: Казбеги, Кахетия, Боржоми, Батуми, Сванетия, Местиа и другие регионы.',
    },
    {
        question: 'Что входит в видеогид по маршруту?',
        answer: 'Главный фильм, короткая рекламная версия, вертикальный формат, субтитры, цветокоррекция и музыкальное оформление.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Видео нужно только крупным операторам.',
        reality:
            'Авторские гиды с небольшими группами часто выигрывают от видео даже больше, потому что их ценность сложнее объяснить текстом.',
    },
    {
        myth: 'Достаточно снять всё на телефон.',
        reality:
            'Телефон подходит для Stories, но редко формирует доверие к туру стоимостью 800-2000 ₾.',
    },
    {
        myth: 'Видео работает только на молодёжь.',
        reality:
            'Аудитория 40+ тоже активно использует YouTube и видео при выборе поездок. Важнее платформа и подача, а не возраст сам по себе.',
    },
    {
        myth: 'У нас нет красивых локаций для съёмки.',
        reality:
            'Для продаж важны не только виды: людей, еду, атмосферу и ощущения путешествия можно раскрыть почти на любом маршруте.',
    },
    {
        myth: 'Видео быстро устаревает.',
        reality:
            'Качественно снятый видеогид обычно служит 2-4 года, а обновления требуются только при заметных изменениях маршрута.',
    },
];

const glossary: Card[] = [
    {
        title: 'Видеогид (Route Video Guide)',
        text: 'Маршрутный фильм, который проводит зрителя по туру от начала до конца и снимает страх неизвестности.',
    },
    {
        title: 'B-roll',
        text: 'Дополнительные кадры локаций, деталей и атмосферы без основного действия для монтажа и коротких форматов.',
    },
    {
        title: 'Вертикальный формат (9:16)',
        text: 'Формат для мобильного просмотра: Instagram Reels, TikTok и YouTube Shorts.',
    },
    {
        title: 'Субтитры (SRT)',
        text: 'Текстовые подписи к видео, критически важные для просмотра без звука и для международной аудитории.',
    },
    {
        title: 'Inbound-туризм',
        text: 'Поток туристов, приезжающих в Грузию из-за рубежа; обычно это более платёжеспособный сегмент.',
    },
    {
        title: 'Конверсия',
        text: 'Доля людей, которые после просмотра видео или посещения страницы реально бронируют тур.',
    },
];

const notFitPoints: string[] = [
    'Операторам масс-маркета с ценами 30-50 ₾ на человека: формат может не окупиться.',
    'Тем, кто ищет максимально быстро и дёшево без понятной бизнес-задачи.',
    'Компаниям без реально работающего маршрута и реальных групп.',
    'Тем, кто не готов участвовать в согласовании материалов и давать обратную связь.',
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems, ...shortQa].map((item) => ({
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
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://breus.media',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Промо-видео',
            item: 'https://breus.media/promo-video-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Видеогид по туристическому маршруту',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Видеогид по туристическому маршруту в Грузии',
    description:
        'Маршрутный фильм для туроператоров: транспорт, локации, остановки, еда, активности. Форматы для сайта, маркетплейсов и соцсетей.',
    thumbnailUrl: [VIDEO_THUMBNAIL_URL],
    uploadDate: '2026-03-22',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    publisher: {
        '@type': 'Organization',
        name: 'Breus Media',
        url: 'https://breus.media',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Видеогид по туристическому маршруту в Грузии',
    description:
        'Профессиональный видеогид 5-15 минут для туроператоров: съёмка маршрута, монтаж, версии для рекламы и соцсетей, субтитры RU/EN.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        telephone: CONTACT_PHONE,
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
        price: '800',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Breus Media — медиапродакшн в Тбилиси: видеогиды по маршрутам, Reels, 360° туры и AI-контент для турбизнеса.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеогид по маршруту Грузия | Промо для туров — Breus Media',
    description:
        'Профессиональный видеогид по туристическому маршруту в Грузии. Казбеги, Кахетия, Батуми. От 800 ₾. Повышает конверсию в бронирования. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеогид по маршруту Грузия | Промо для туров — Breus Media',
        description:
            'Покажите маршрут до бронирования: транспорт, пейзажи, остановки и атмосферу. Видеогид для турбизнеса с фокусом на конверсию.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoTourismRoutePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Тарифы', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Tourism Routes · Georgia
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеогид по туристическому маршруту — промо для турбизнеса
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Покажите маршрут до бронирования, и гости придут уже подготовленными.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Туристы бронируют не маршрут, а уверенность в том, что день пройдёт именно так, как обещано. Видеогид
                        превращает абстрактное описание тура в конкретный визуальный опыт: транспорт, пейзажи, остановки, еда и
                        атмосфера становятся понятны до отъезда. Это инструмент продаж, который работает круглосуточно на сайте,
                        в WhatsApp, на маркетплейсах и в рекламных кампаниях. Breus Media производит видеогиды по маршрутам
                        Грузии: Казбеги, Кахетия, Боржоми, Местиа — с фокусом на доверие и конверсию в бронирование.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить видеогид для маршрута
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть тарифы
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что такое видеогид по маршруту?</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Видеогид — это профессиональный маршрутный фильм длиной 5-15 минут, который проводит зрителя по ключевым
                        точкам тура: старт, транспорт, пейзажи, остановки, еда, активности и возвращение. Он закрывает до 80%
                        вопросов клиента ещё до диалога в WhatsApp. Результат: больше уверенных бронирований, меньше переписки в
                        стиле а что там будет и более высокий средний чек за счёт видимого качества маршрута.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит видеогид по маршруту?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {audienceItems.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Задачи, которые решает видеогид</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {solutionPoints.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Боли туроператора, которые мы понимаем</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {painCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold mb-5">Как видеогид помогает зарабатывать больше</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {earnPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-7">
                        <h2 className="text-2xl font-bold mb-5">Как видеогид помогает не терять деньги</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {avoidLossPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article>
                        <h2 className="text-3xl font-bold mb-6">Что входит в видеогид по маршруту?</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {deliverables.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Сроки и форматы</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Готовый видеогид в течение 5-10 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Форматы</p>
                                <p>MP4 (H.264, 1080p/4K), соотношения 16:9 и 9:16, плюс SRT-субтитры.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Все файлы передаются через облако.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Права</p>
                                <p>Полные права на использование — без ограничений.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Ваш маршрут заслуживает видео, которое продаёт. Оставьте заявку: разберём ваш тур и предложим структуру видеогида бесплатно."
                buttonLabel="Обсудить видеогид для маршрута"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Как туроператоры используют видеогид</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Туризм в Грузии: контекст рынка</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Грузия принимает миллионы туристов в год, и конкуренция между туроператорами растёт с каждым сезоном.
                        Маршруты по Казбеги, Военно-Грузинской дороге, Кахетии и Батуми предлагают десятки компаний, но их
                        описания часто неотличимы. Видеогид становится фактором выбора: путешественник, который прошёл маршрут на
                        экране, бронирует с большей уверенностью. Мы снимаем в Тбилиси, Казбеги, Сигнахи, Боржоми, Батуми и других
                        точках Грузии с учётом местного света, сезонности и визуальных кодов международной аудитории.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры</h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Почему нам доверяют</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed max-w-5xl">
                        {socialProofBullets.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="examples" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Пример видеогида</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        На странице размещается embed готового видеогида по маршруту. Сейчас установлен технический демо-плейсхолдер
                        до публикации финального кейса.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеогида по маршруту"
                                className="w-full h-full"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection items={beginnerFaqItems} title="Частые вопросы (для тех, кто пока не делал видео)" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы про стоимость и процесс"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media?</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {whyUsPoints.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Начинаем с бесплатного разбора маршрута, фиксируем бриф и сценарий до выезда, снимаем за 1-2 дня, монтируем, согласуем и передаём финал без неожиданностей." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">5 шагов от заявки до готового видеогида</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {processSteps.map((step) => (
                            <article key={step.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Тарифы на видеогид по маршруту</h2>
                    <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
                        {packageCards.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[12px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#D4A017] bg-[#141414] shadow-[0_12px_32px_rgba(212,160,23,0.18)]'
                                        : 'border-[#2a2a2a] bg-[#111111]'
                                }`}
                            >
                                <h3 className="text-lg font-bold mb-1">Пакет {pack.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pack.subtitle}</p>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
                                <p className="text-sm text-white/70 mb-5">Срок: {pack.timeline}</p>
                                <ul className="space-y-2 text-sm text-white/75">
                                    {pack.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-[#D4A017]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold mb-4">Сравнение пакетов</h3>
                    <div className="overflow-x-auto rounded-[12px] border border-[#2a2a2a]">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Что входит</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Главный фильм 16:9</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 10 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 15 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 15 мин</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Короткая версия для рекламы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия 9:16</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN/GE</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Дополнительные клипы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 клипа + b-roll</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена</td>
                                    <td className="p-3">от 800 ₾</td>
                                    <td className="p-3">от 1 400 ₾</td>
                                    <td className="p-3">от 2 200 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Какой пакет выбрать?</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">Не уверены? Напишите нам — подберём решение под задачу и бюджет.</p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы показать ваш маршрут так, чтобы он продавал себя сам? Напишите нам: обсудим структуру видеогида и сделаем расчёт под ваш тур."
                buttonLabel="Получить расчёт стоимости"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Смежные услуги</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Кому мы не подходим</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {notFitPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">6 ошибок, которые мешают вашему туру продаваться</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {commonMistakes.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">5 вещей, которые вы можете сделать прямо сейчас</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист: готов ли ваш маршрут к видеосъёмке?</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☐</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Расширенные ответы на важные вопросы</h2>
                    <div className="space-y-6">
                        {longTailAnswers.map((item) => (
                            <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                                <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Короткие ответы для поиска</h2>
                    <div className="space-y-4">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="font-bold mb-2">{item.question}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Мифы о видеогидах для туров</h2>
                    <div className="space-y-5">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-bold mb-2">Миф: «{item.myth}»</p>
                                <p className="text-sm text-white/75 leading-relaxed">
                                    <span className="font-semibold text-[#D4A017]">Реальность:</span> {item.reality}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Словарь терминов</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {glossary.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Свяжитесь с нами, обсудим ваш маршрут и подберём формат видеогида. Работаем в Тбилиси и по всей
                            Грузии.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                            <a
                                href="https://breus.media"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                breus.media
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — медиапродакшн в Тбилиси, Грузия. Видеогиды по маршрутам, Reels, 360° туры и AI-контент для
                        туристического бизнеса. {CONTACT_PHONE}
                    </p>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
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
                    `,
                }}
            />
        </main>
    );
}
