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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-clinic';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Частные клиники и медцентры Тбилиси, Батуми и других городов Грузии',
        text: 'Для клиник, которым важно показать пространство, оборудование и людей до первого визита пациента.',
    },
    {
        title: 'Стоматологии с высокой конкуренцией',
        text: 'Видео помогает выделиться на фоне десятков похожих карточек и сайтов.',
    },
    {
        title: 'Эстетические клиники и центры косметологии',
        text: 'Визуальный образ здесь напрямую влияет на доверие и готовность записаться.',
    },
    {
        title: 'Диагностические и реабилитационные центры',
        text: 'Если в клинике есть дорогое оборудование, его нужно показать профессионально.',
    },
    {
        title: 'Клиники, работающие с медтуризмом',
        text: 'Для иностранного пациента ролик часто является ключевым доказательством уровня.',
    },
    {
        title: 'Новые клиники и проекты после ребрендинга',
        text: 'Помогает быстро синхронизировать новый уровень сервиса с образом онлайн.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Снижает тревогу перед первым визитом',
        text: 'Видео убирает неизвестность: пациент уже «побывал» в клинике до записи.',
    },
    {
        title: 'Отстраивает от конкурентов',
        text: 'Пока у многих стоки и шаблонные тексты, живое видео пространства и команды выделяет сразу.',
    },
    {
        title: 'Обосновывает ценовую категорию',
        text: 'Качественная картинка поддерживает ощущение высокого медицинского уровня.',
    },
    {
        title: 'Работает на медтуризм',
        text: 'Пациент из другой страны принимает решение дистанционно, и видео здесь критично.',
    },
];

const painCards: Card[] = [
    {
        title: '«У нас хорошая клиника, но пациенты этого не видят»',
        text: 'Сайт есть, соцсети есть, но без живого видео люди чаще уходят без заявки.',
    },
    {
        title: '«Конкуренты с видео забирают клики в поиске и картах»',
        text: 'Видео-обложки в Google Maps визуально выигрывают и чаще получают переходы.',
    },
    {
        title: '«Не хотим ломать рабочий процесс ради съёмки»',
        text: 'Съёмка обычно занимает 4-6 часов и спокойно встраивается в график клиники.',
    },
    {
        title: '«Снимали на телефон — получилось непрезентабельно»',
        text: 'В медицине слабый визуал может снижать доверие к качеству услуг.',
    },
    {
        title: '«Не понимаем, что снимать и как строить ролик»',
        text: 'Мы закрываем это через бриф, концепцию и сценарный план до съёмочного дня.',
    },
    {
        title: '«Иностранные пациенты не понимают, чего ожидать»',
        text: 'RU/EN видео с субтитрами решает барьер ожиданий до поездки в Грузию.',
    },
];

const earnPoints: string[] = [
    'Видео на лендинге помогает увеличивать долю заявок от нового трафика.',
    'Профессиональный визуал поддерживает позиционирование в более высоком ценовом сегменте.',
    'Медтуристы быстрее принимают решение, когда видят клинику «изнутри» до поездки.',
    'Один ролик масштабируется на сайт, Google Maps, соцсети и рекламные кабинеты.',
];

const avoidLossPoints: string[] = [
    'Фильтрует нецелевые лиды: ожидания формируются заранее и честно.',
    'Снижает стоимость лида в рекламе благодаря более сильным креативам.',
    'Снижает репутационные риски за счёт прозрачной демонстрации клиники.',
    'Экономит время врачей: меньше базовых вопросов о среде на первой консультации.',
];

const deliverables: string[] = [
    'Бриф, концепция и сценарный план до съёмки.',
    'Выезд команды (оператор + свет + звук при необходимости).',
    'Съёмка интерьера: ресепшн, зона ожидания, кабинеты, оборудование, стерилизация.',
    'Съёмка команды в работе без лишней постановки.',
    'Монтаж, музыка и цветокоррекция в тёплой медицинской гамме.',
    'Субтитры RU/EN (опционально).',
    'Версии под сайт, Instagram, YouTube.',
    '4K мастер + web-версия.',
];

const useCases: Card[] = [
    {
        title: 'Запуск новой клиники',
        text: 'Ролик на главной и в Google Maps сразу создаёт образ «серьёзного игрока» на рынке Тбилиси.',
    },
    {
        title: 'Привлечение пациентов из России и СНГ',
        text: 'RU/EN субтитры и запуск в рекламе помогают конвертировать иностранный спрос.',
    },
    {
        title: 'Ребрендинг и переход в премиальный сегмент',
        text: 'Новое видео синхронизирует реальный уровень клиники с её цифровым образом.',
    },
    {
        title: 'Запуск Meta-рекламы',
        text: 'Из одного имиджевого ролика нарезаются форматы, которые работают лучше статики.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Стоматология в Ваке',
        text: 'После запуска RU/EN видео выросли запросы в WhatsApp по конкретным процедурам.',
    },
    {
        title: 'Эстетический центр после ремонта',
        text: 'Один ролик закрыл контент для сайта, Instagram и рекламы на старте обновлённого позиционирования.',
    },
    {
        title: 'Многопрофильный центр диагностики',
        text: 'После добавления видео в Google Maps выросли просмотры карточки и переходы на сайт.',
    },
];

const socialProofBullets: string[] = [
    'Профессиональные камеры и мягкий свет для чистого, но «живого» медицинского визуала.',
    'Опыт в медицинской нише: понимаем этику, приватность и рабочий процесс клиник.',
    'Локальная команда в Тбилиси без «международных» логистических наценок.',
    'Полная передача прав на использование без ограничений.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Зачем клинике видео, если есть фотографии?',
        answer:
            'Фото показывает, как выглядит пространство, а видео показывает, как там ощущается. Для медицины это ключевая разница в доверии.',
    },
    {
        question: 'Нужно ли останавливать работу клиники во время съёмки?',
        answer:
            'Нет. Снимаем в рабочем ритме: интерьер и зоны в окнах между приёмами, команду — в короткие согласованные слоты.',
    },
    {
        question: 'Нужно ли заранее писать сценарий?',
        answer: 'Нет, мы готовим концепцию и сценарный план после короткого брифа.',
    },
    {
        question: 'Какая длительность ролика и где его использовать?',
        answer:
            'Обычно 60-120 секунд + короткая версия 30-45 секунд. Размещение: сайт, карты, соцсети, реклама.',
    },
    {
        question: 'Можно ли снимать с реальными пациентами?',
        answer:
            'Да, только при письменном согласии. При этом сильный ролик можно сделать и без съёмки пациентов в кадре.',
    },
    {
        question: 'Через сколько дней готов результат?',
        answer: 'Базовый срок от 5 рабочих дней, стандартно 5-7, Full-пакет — до 10 дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео клиники?',
        answer: 'Стартовая цена от 600 ₾. Финальная смета зависит от масштаба и состава материалов.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer: 'Выезд, съёмка, монтаж, цветокоррекция, музыка, передача файлов. Дополнительно — озвучка, субтитры на других языках, анимация, срочность.',
    },
    {
        question: 'Как происходит оплата?',
        answer: '50% предоплата до съёмки и 50% после финального согласования.',
    },
    {
        question: 'Сколько раундов правок включено?',
        answer: 'В Basic и Standard — 2 раунда, в Full — 3 раунда.',
    },
    {
        question: 'Можно ли сделать видео и фото за один выезд?',
        answer: 'Да, и это обычно выгоднее, чем два отдельных выезда.',
    },
    {
        question: 'Подойдёт ли это небольшой клинике по бюджету?',
        answer: 'Да, пакет от 600 ₾ как раз рассчитан на небольшие клиники и кабинеты.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Понимаем медицинский контекст',
        text: 'Снимаем так, чтобы визуально передать стерильность, безопасность и заботу без «холодной» подачи.',
    },
    {
        title: 'Тбилисская команда без наценки',
        text: 'Быстро выезжаем по городу и не завышаем бюджет логистикой.',
    },
    {
        title: 'Фокус на результате',
        text: 'Собираем ролик вокруг одного вопроса: почему пациент должен выбрать вашу клинику.',
    },
    {
        title: 'Полный цикл в одних руках',
        text: 'Съёмка, монтаж, цвет, субтитры и адаптации форматов делаем внутри одной команды.',
    },
    {
        title: 'Реалистичные сроки',
        text: 'Ориентир 5-7 рабочих дней для стандартного пакета, без маркетинговых обещаний.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и концепция',
        text: '20 минут созвона или короткий бриф: фиксируем задачу, смысл ролика и ориентир по смете.',
    },
    {
        title: 'Шаг 2. Подготовка',
        text: 'Согласовываем дату и отправляем чеклист по подготовке клиники к съёмочному дню.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Обычно 4-6 часов: пространство, оборудование, команда и ключевые сцены сервиса.',
    },
    {
        title: 'Шаг 4. Монтаж и правки',
        text: 'Передаём черновой монтаж, собираем комментарии и выпускаем финал.',
    },
    {
        title: 'Шаг 5. Передача файлов',
        text: 'Отдаём мастер и web-версии в облако, храним исходный проект для будущих адаптаций.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 600 ₾',
        audience: 'Для небольшой клиники или одного кабинета',
        timeline: '5 рабочих дней',
        items: [
            'Съёмка 4 часа',
            'Ролик 60-90 сек',
            'Монтаж + цвет + музыка',
            '1080p версия для сайта/соцсетей',
            '2 раунда правок',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 000 ₾',
        audience: 'Для клиники с несколькими кабинетами и врачами',
        timeline: '7 рабочих дней',
        featured: true,
        items: [
            'Съёмка до 6 часов',
            'Ролик 90-120 сек + короткая версия',
            '4K + 1080p версии',
            'RU/EN субтитры',
            '2 раунда правок',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 800 ₾',
        audience: 'Для крупного медцентра и задач медтуризма',
        timeline: '10 рабочих дней',
        items: [
            'Съёмка до 8 часов (или 2 дня)',
            'Главный ролик + короткий + вертикаль',
            'Озвучка + музыка',
            'Субтитры RU/EN/GEO',
            'Анимационные элементы',
            '3 раунда правок',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают «красоту» вместо «доверия»',
        text: 'Кадры интерьера без людей и процессов редко конвертируют в запись.',
    },
    {
        title: 'Используют стоковые фото',
        text: 'Стоки считываются мгновенно и подрывают доверие к медицинскому бренду.',
    },
    {
        title: 'Не показывают стерилизацию и оборудование',
        text: 'Именно эти 3-5 секунд часто снимают главный страх пациента.',
    },
    {
        title: 'Снимают один раз и забывают',
        text: 'Имиджевый ролик нужно обновлять раз в 1-2 года и поддерживать Reels-контентом.',
    },
    {
        title: 'Не используют видео в Google Maps',
        text: 'Карточка с видео чаще получает клик и переход на сайт.',
    },
    {
        title: 'Игнорируют субтитры и языки',
        text: 'Для иностранной аудитории видео без субтитров теряет эффективность.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимите короткое «добро пожаловать» видео от главврача на главный экран сайта.',
    'Обновите Google Maps реальными фото команды вместо стоков.',
    'Попросите лояльных пациентов записать короткий видео-отзыв.',
    'Показывайте оборудование в еженедельных Stories.',
    'Сделайте видео-ответ врача на самый частый вопрос пациентов.',
];

const checklistItems: string[] = [
    'Кабинеты убраны, лишние предметы убраны из кадра.',
    'Оборудование чистое и готово к демонстрации.',
    'Команда предупреждена о съёмке.',
    'Форма и халаты подготовлены.',
    'Ресепшн и зона ожидания приведены в порядок.',
    'Освещение проверено, перегоревшие лампы заменены.',
    'Логотип клиники виден в ключевых точках.',
    'Письменные согласия пациентов подготовлены (если пациенты могут попасть в кадр).',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видео для клиники — это базовый инструмент, а не роскошь?',
        answer: [
            'Пациент принимает решение в первые секунды знакомства со страницей: нужно быстро снять тревогу и показать среду.',
            'Видео одновременно передаёт пространство, людей и процессы, чего не делает один только текст или фото.',
            'Даже небольшой рост конверсии в медицине быстро монетизируется за счёт высокого среднего чека.',
        ],
    },
    {
        question: 'Что делает медицинское видео «доверительным»?',
        answer: [
            'Честные кадры: реальные врачи, реальные кабинеты, реальные процессы без переглянца.',
            'Детали безопасности: стерилизация, оборудование, порядок, спокойная коммуникация врача.',
            'Свет и цвет: тёплая медицинская гамма создаёт ощущение комфорта и профессионализма.',
        ],
    },
    {
        question: 'Как видео помогает в медицинском туризме?',
        answer: [
            'Иностранный пациент не может приехать «просто посмотреть», поэтому решение принимается по онлайн-контенту.',
            'RU/EN субтитры и понятная структура ролика снижают языковой и психологический барьер.',
            'Видео превращает клинику из «неизвестного бренда» в понятное и безопасное место ещё до поездки.',
        ],
    },
    {
        question: 'Как часто обновлять имиджевое видео клиники?',
        answer: [
            'Обычно раз в 1.5-3 года, если не было больших изменений в интерьере, команде и позиционировании.',
            'Если был ремонт, смена врачей, обновление оборудования — ролик лучше переснять раньше.',
            'Оптимальная модель: большое видео раз в 2 года и регулярные короткие форматы между обновлениями.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео для клиники в Тбилиси?',
        answer: 'От 600 ₾ (Basic), от 1 000 ₾ (Standard), от 1 800 ₾ (Full).',
    },
    {
        question: 'Как долго снимают видео в клинике?',
        answer: 'Один съёмочный день: обычно 4-6 часов.',
    },
    {
        question: 'Нужно ли закрывать клинику на время съёмки?',
        answer: 'Нет, съёмка идёт в рабочем ритме без остановки процессов.',
    },
    {
        question: 'За сколько дней будет готово видео?',
        answer: 'Базово от 5 дней, стандартно 5-7, Full — до 10 рабочих дней.',
    },
    {
        question: 'Помогает ли видео привлекать иностранных пациентов?',
        answer: 'Да, особенно при наличии RU/EN субтитров и грамотной дистрибуции.',
    },
    {
        question: 'Где размещать имиджевое видео клиники?',
        answer: 'На сайте, в Google Maps, Instagram, Facebook, YouTube и в рекламе.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Это слишком дорого для небольшой клиники.',
        reality: 'Пакет от 600 ₾ — это рабочий старт и актив на 2-3 года.',
    },
    {
        myth: 'Телефона достаточно, результат будет тот же.',
        reality: 'В медицине качество изображения и звука напрямую влияет на доверие.',
    },
    {
        myth: 'Пациентам важны только отзывы.',
        reality: 'Отзывы убеждают, а видео снимает страх и ускоряет решение о записи.',
    },
    {
        myth: 'Сначала дождёмся идеального ремонта.',
        reality: 'Идеального момента часто не бывает; важнее показать людей, подход и порядок уже сейчас.',
    },
    {
        myth: 'Видео нужно только сетевым клиникам.',
        reality: 'Небольшие клиники часто выигрывают от видео даже сильнее.',
    },
];

const glossary: Card[] = [
    {
        title: 'Имиджевое видео',
        text: 'Короткий ролик, который представляет клинику через пространство, команду и подход.',
    },
    {
        title: 'Hero video',
        text: 'Главный ролик на первом экране сайта, формирующий первое впечатление.',
    },
    {
        title: 'Цветокоррекция',
        text: 'Постобработка цвета для нужной атмосферы, чистоты и визуального комфорта.',
    },
    {
        title: 'Мастер-файл',
        text: 'Финальный файл в максимальном качестве (обычно 4K), из которого делаются все версии.',
    },
    {
        title: 'Субтитры',
        text: 'Текстовое сопровождение, важное для просмотра без звука и международной аудитории.',
    },
    {
        title: 'CTR',
        text: 'Click-Through Rate: доля пользователей, кликнувших по карточке/объявлению.',
    },
];

const notFitPoints: string[] = [
    'Клиникам, которым нужен только самый дешёвый формат без требований к качеству.',
    'Проектам, где хотят актёров вместо реальной команды клиники.',
    'Запросам «сегодня на сегодня»: минимальный реалистичный срок — от 5 дней.',
    'Съёмкам хирургических операций без отдельного этического и юридического протокола.',
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
            name: 'Имиджевое видео клиники',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Имиджевое видео клиники — пример формата',
    description: 'Демо-ролик формата: пространство, оборудование, команда и атмосфера клиники.',
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
    name: 'Имиджевое видео клиники в Тбилиси',
    description:
        'Имиджевый ролик для клиники: пространство, оборудование, команда и версии под сайт, карты, соцсети и рекламу.',
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
        name: 'Грузия',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '600',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: имиджевые видео, Reels, 360° туры и визуальный контент для бизнеса.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Имиджевое видео клиники в Тбилиси — от 600 ₾ | Breus Media',
    description:
        'Профессиональное имиджевое видео для клиники в Тбилиси. Показываем пространство, оборудование и подход — снижаем тревогу пациента до первого визита. Сроки от 5 дней.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Имиджевое видео клиники в Тбилиси — от 600 ₾ | Breus Media',
        description:
            'Видео-знакомство с клиникой: пространство, оборудование, команда и подход. Форматы для сайта, Google Maps, соцсетей и рекламы.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoClinicPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Clinic · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Имиджевое видео клиники — пространство, оборудование, подход
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Пациент принимает решение о первом визите в течение 30 секунд. Видео делает эти 30 секунд
                        убедительными.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Большинство пациентов ищут клинику онлайн и в первую очередь хотят увидеть, как там внутри и
                        кто там работает. Имиджевый ролик показывает клинику честно и профессионально: интерьер,
                        оборудование, команду и атмосферу. Снимаем в Тбилиси и по всей Грузии.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Получить смету имиджевого видео
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Имиджевое видео — это короткий ролик 60-120 секунд о вашей клинике. Он показывает пространство,
                        технологии и людей так, чтобы потенциальный пациент почувствовал: здесь безопасно и
                        профессионально.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {audienceCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Какую задачу решает услуга</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {solutionCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Боли клиента</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как помогает заработать</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как помогает не потерять</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Deliverables</h2>
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
                        <h3 className="text-xl font-bold mb-4">Что получает клиент на выходе</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Форматы</p>
                                <p>MP4 (4K мастер), MP4 (1080p web), вертикальная версия 9:16.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Длина</p>
                                <p>Основной ролик 60-120 сек, короткая версия 30-45 сек.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Срок</p>
                                <p>От 5 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача и права</p>
                                <p>Google Drive / WeTransfer + полная передача прав на использование.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Расскажите нам о своей клинике — предложим концепцию и стоимость в течение рабочего дня."
                buttonLabel="Получить смету имиджевого видео"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Сценарии использования</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Медицинский рынок Тбилиси быстро растёт, а конкуренция за внимание пациента смещается в
                        цифровую среду. Для локальной аудитории и медтуристов видео становится самым быстрым способом
                        оценить клинику до первого контакта.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Social proof / доказательства</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример имиджевого видео</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён embed демо-ролика. На финальной версии можно подставить релевантный кейс из
                        вашего портфолио.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример имиджевого видео клиники"
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

            <FaqSection items={beginnerFaqItems} title="FAQ для новичка" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по деньгам и процессу"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyUsCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмка клиники занимает один рабочий день и не требует закрытия кабинетов — мы встраиваемся в ваш рабочий ритм." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Этапы работы</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Пакеты</h2>
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
                                <h3 className="text-lg font-bold mb-2">{pack.title}</h3>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
                                <p className="text-sm text-white/70 mb-2">Для кого: {pack.audience}</p>
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

                    <div className="overflow-x-auto rounded-[12px] border border-[#2a2a2a]">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Цена от</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">600 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 000 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 800 ₾</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Длина съёмки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">4 часа</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">6 часов</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">8 часов</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">90-120 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">120 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Короткая версия</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальный формат</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ + GEO</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Озвучка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">4K мастер</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Анимация/заставки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Правки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок</td>
                                    <td className="p-3">5 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">10 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Небольшая клиника и нужны материалы для сайта/соцсетей — Basic.</li>
                            <li>Несколько врачей и форматы под рекламу — Standard.</li>
                            <li>Фокус на медтуризм и полный форматный пакет — Full.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Расскажите о своём медцентре в двух словах — предложим формат именно под вашу задачу."
                buttonLabel="Обсудить видео для вашей клиники"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                    Видео для врача
                                </Link>{' '}
                                — личный бренд специалиста в дополнение к имиджевому ролику клиники.
                            </li>
                            <li>
                                <Link href="/promo-video/clinic-interior" className="text-[#D4A017] hover:text-white transition-colors">
                                    Съёмка интерьера клиники
                                </Link>{' '}
                                — фотоматериалы для сайта и Google Maps.
                            </li>
                            <li>
                                <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для клиники
                                </Link>{' '}
                                — регулярный контент после запуска имиджевого ролика.
                            </li>
                            <li>
                                <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур для клиники
                                </Link>{' '}
                                — интерактивная прогулка для сайта и Google Maps.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Хотите показать не только клинику, но и конкретных врачей? Переходите к{' '}
                            <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                «Видео для врача»
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Уже есть имиджевое видео и нужно поддерживать присутствие в соцсетях еженедельно? Смотрите{' '}
                            <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                «Reels для клиники»
                            </Link>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки клиник в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Что можно улучшить без покупки</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист готовности клиники к съёмке</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☑</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Расширенные ответы</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Short Q&A для AI-поиска</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                Видео для врача (/promo-video/promo-doctor)
                            </Link>
                        </li>
                        <li>
                            <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для клиники (/reels-promo/reels-clinic)
                            </Link>
                        </li>
                        <li>
                            <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                360° тур для клиники (/360-tour-clinics)
                            </Link>
                        </li>
                        <li>
                            <Link href="/promo-video/clinic-interior" className="text-[#D4A017] hover:text-white transition-colors">
                                Съёмка интерьера клиники (/promo-video/clinic-interior)
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Мифы и реальность</h2>
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Мини-словарь терминов</h2>
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Кому мы не подходим</h2>
                    <ul className="space-y-4 text-sm text-white/75 leading-relaxed">
                        {notFitPoints.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем с клиниками в Тбилиси, Батуми и других городах Грузии. Напишите в WhatsApp или
                            заполните форму — расскажем о формате, сроках и стоимости без шаблонных ответов.
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
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Imago-видео для клиники в Тбилиси — Breus Media. Снимаем доверие.
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
