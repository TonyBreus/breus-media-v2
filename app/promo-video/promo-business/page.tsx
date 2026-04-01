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

const CANONICAL_URL = 'https://breus.media/promo-video/promo-business';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Владелец бизнеса на запуске или ребрендинге',
        text: 'Нужно заявить о компании правильно с первых месяцев и задать нужный тон визуальной коммуникации.',
    },
    {
        title: 'Маркетолог, который строит контент-стратегию',
        text: 'Стратегия есть, но нет флагманского ролика, вокруг которого строится весь визуал.',
    },
    {
        title: 'Сервисный бизнес со сложной услугой',
        text: 'Видео помогает объяснить ценность за 60 секунд и убрать барьер недопонимания до первого обращения.',
    },
    {
        title: 'Шоурум, студия или офис с сильным пространством',
        text: 'Офлайн-пространство работает лучше, чем показывает текущий контент в соцсетях и на сайте.',
    },
    {
        title: 'Личный бренд эксперта или предпринимателя',
        text: 'Нужен сильный имиджевый ролик для переговоров, медиа, партнёрств и digital-присутствия.',
    },
    {
        title: 'Компании, которые ведут переговоры с B2B-клиентами',
        text: 'Качественное имиджевое видео закрывает часть возражений ещё до первой встречи.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Формирует flagship-контент для бренда',
        text: 'Одно главное видео становится ядром всей коммуникации: сайт, соцсети, презентации, реклама и партнёрские питчи.',
    },
    {
        title: 'Закрывает разрыв между офлайном и онлайном',
        text: 'Клиент видит в сети тот же уровень, который потом получает вживую — без разочарований и нестыковок.',
    },
    {
        title: 'Даёт универсальный материал из одной съёмки',
        text: 'Контент сразу готов для Instagram, сайта, YouTube, рекламных кабинетов и деловых презентаций.',
    },
    {
        title: 'Работает на нужный образ до первого контакта',
        text: 'Видео формирует правильное впечатление у потенциального клиента ещё до звонка или встречи.',
    },
];

const painCards: Card[] = [
    {
        title: '«У нас нет нормального видео — только фото на телефон»',
        text: 'Случайные материалы неуправляемы: плохой свет, неудачные ракурсы и чужая логика. Имиджевое видео даёт контролируемую историю о бизнесе.',
    },
    {
        title: '«Instagram и сайт не отражают реальный уровень компании»',
        text: 'Когда онлайн-образ слабее реальности, часть клиентов просто не доходит до обращения или приходит с неверными ожиданиями.',
    },
    {
        title: '«Нечего показать партнёрам и инвесторам»',
        text: 'Без флагманского ролика презентация выглядит сырой, даже если у вас сильный продукт, команда и клиентская база.',
    },
    {
        title: '«Реклама не работает — нет сильного визуального креатива»',
        text: 'Таргет требует качественного видео. Имиджевый ролик становится базовым активом для всех рекламных запусков.',
    },
    {
        title: '«Открываемся и хотим стартовать с нужным образом»',
        text: 'Первые 2–3 месяца задают цифровую репутацию. Профессиональный ролик на старте помогает избежать хаотичного контента.',
    },
    {
        title: '«Обновились, но старое видео уже устарело»',
        text: 'После ребрендинга или смены концепции старый ролик работает против вас и создаёт ложное восприятие компании.',
    },
];

const earnPoints: string[] = [
    'Больше первых обращений: сильный ролик сокращает цикл принятия решения у потенциального клиента.',
    'Рост доверия: видео с командой, процессом и результатами повышает конверсию в заявку.',
    'Быстрее закрываются переговоры по крупным проектам: ролик продаёт компетенцию за минуты.',
    'Легче договариваться о партнёрствах и медиа: компании с качественным контентом воспринимаются как более зрелые.',
];

const avoidLossPoints: string[] = [
    'Меньше «неправильных» клиентов: видео задаёт честные ожидания и снижает нецелевые обращения.',
    'Независимость от случайного контента: у компании есть собственная стабильная видеовизитка.',
    'Контент остаётся в бизнесе при смене маркетолога или SMM-менеджера.',
    'Одинаково сильный образ на всех платформах: Instagram, сайт, YouTube и деловые презентации.',
];

const deliverables: string[] = [
    'Мастер-ролик 60–90 сек (горизонтальный, 4K, 16:9) для сайта, YouTube, Facebook и презентаций.',
    'Короткая версия 30–45 сек для Instagram и рекламы (4:5 или 9:16).',
    '3–5 обложек-скриншотов для YouTube, шапки сайта и Facebook Cover.',
    'Мини-сценарий ключевых сцен: вход, команда, процесс работы, результаты, атмосфера.',
    'Краткий гайд по использованию контента в рекламе, питчах и на площадках.',
    'Финальные файлы в разных разрешениях под каждую платформу.',
];

const useCases: Card[] = [
    {
        title: 'Запуск нового бизнеса или продукта',
        text: 'Компания выходит на рынок и снимает имиджевое видео за день до запуска. Публикует в день открытия и получает органический охват с первых часов.',
    },
    {
        title: 'Ребрендинг или смена позиционирования',
        text: 'Бизнес обновил пространство, команду или оффер. Новая съёмка за один день синхронизирует Instagram, сайт и карты с актуальным образом.',
    },
    {
        title: 'Питч для крупного клиента или партнёра',
        text: 'Компания добавляет ролик с командой и процессом в деловую презентацию и быстрее закрывает переговоры без длинных объяснений.',
    },
    {
        title: 'Запуск таргетированной рекламы',
        text: 'Маркетолог использует имиджевый ролик как основной creative для Instagram и Facebook, повышая конверсию в обращение.',
    },
];

const miniCases: Card[] = [
    {
        title: 'IT-агентство, Ваке',
        text: 'После съёмки ролика с офисом и командой конверсия в обращение с сайта выросла на 28%. Видео стало embed на главной странице и в деловых предложениях.',
    },
    {
        title: 'Юридическая компания, Старый Тбилиси',
        text: 'Ролик использовали в LinkedIn и на сайте. За первый месяц количество запросов от B2B-клиентов выросло на 45%, а среднее качество лидов — заметно улучшилось.',
    },
    {
        title: 'Фитнес-студия, Батуми',
        text: 'После добавления имиджевого ролика в коммерческие предложения по корпоративным абонементам конверсия переговоров выросла с 25% до 58%.',
    },
];

const socialProofBullets: string[] = [
    '79% покупателей предпочитают смотреть видео, а не читать текст о продукте или услуге (Wyzowl, 2025).',
    'Страницы с профессиональным имиджевым видео конвертируют на 20–35% лучше, чем страницы только с текстом и фото.',
    'Видеоконтент удерживает внимание в 1,5–3 раза дольше, чем статичные публикации в той же нише.',
    'В Тбилиси 2 000+ малых и средних бизнесов конкурируют в digital, и имиджевый ролик становится базовым стандартом для среднего сегмента.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое имиджевое видео бизнеса и чем оно отличается от рекламного ролика?',
        answer:
            'Имиджевое видео — это кинематографичный ролик 60–90 секунд, который передаёт атмосферу, команду и ценность бизнеса. В отличие от рекламного, оно не продаёт напрямую — оно формирует доверие и желание обратиться.',
    },
    {
        question: 'Нужно ли специально готовиться к съёмке?',
        answer:
            'Да, но минимально. Достаточно привести пространство в порядок, определить ключевые сцены и предупредить команду. Перед съёмкой мы отправляем короткий чеклист на 15–20 минут подготовки.',
    },
    {
        question: 'Сколько времени занимает сама съёмка?',
        answer:
            'Обычно один визит на 4–6 часов в зависимости от масштаба бизнеса. Снимаем в удобное время, чтобы минимально мешать рабочему процессу.',
    },
    {
        question: 'Вы снимаете только в Тбилиси?',
        answer:
            'Тбилиси — наша база, но работаем по всей Грузии: Батуми, Кутаиси, Боржоми и другие локации. Выезды за пределы Тбилиси согласовываются отдельно.',
    },
    {
        question: 'Можно ли совместить имиджевое видео с другими форматами?',
        answer:
            'Да. Часто совмещаем с Reels-пакетом или фотосъёмкой для сайта и рекламы в рамках одного выезда. Это экономит время команды.',
    },
    {
        question: 'Сколько ревизий включено?',
        answer:
            'В базовой логике проекта включены два раунда правок. Для расширенного пакета возможно больше итераций по согласованию до старта работ.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео для бизнеса?',
        answer:
            'Basic — от 600 ₾, Standard — от 1 000 ₾, Full — от 1 500 ₾. Точная цена зависит от масштаба объекта, числа форматов и сложности постпродакшна.',
    },
    {
        question: 'Есть ли предоплата?',
        answer: 'Да, 50% при подтверждении даты съёмки и 50% после передачи финальных материалов.',
    },
    {
        question: 'Как быстро будет готово видео?',
        answer:
            'Стандартный срок — 5–7 рабочих дней с момента съёмки. Срочный монтаж за 3 дня возможен за дополнительную оплату.',
    },
    {
        question: 'Мы получаем исходники?',
        answer:
            'В стандартный пакет исходники не входят. Передача RAW-файлов доступна как отдельная опция, если согласована до старта проекта.',
    },
    {
        question: 'Если нам не понравится результат — что тогда?',
        answer:
            'Перед съёмкой мы согласовываем бриф и reference-видео, чтобы попасть в нужный стиль. Далее в работу включены раунды правок, которых в большинстве случаев достаточно для финального согласования.',
    },
    {
        question: 'Можно ли использовать видео в платной рекламе?',
        answer: 'Да, клиент получает права на использование контента в рекламных кампаниях.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Понимаем бизнес-логику',
        text: 'Снимаем не просто красивые кадры, а историю, которая объясняет ценность вашего бизнеса за 60–90 секунд.',
    },
    {
        title: 'Минимальная нагрузка на команду',
        text: 'Один выезд, чёткий план и спокойный процесс без длительных согласований и лишнего стресса.',
    },
    {
        title: 'Контент под все платформы',
        text: 'Горизонтальные и вертикальные версии, обложки и адаптированные файлы передаются единым пакетом.',
    },
    {
        title: 'Медиапродакшн, а не SMM-агентство',
        text: 'Глубоко специализируемся на визуальном контенте для бизнеса и производственном качестве материалов.',
    },
    {
        title: 'Локальная экспертиза',
        text: 'Понимаем деловую среду Тбилиси: особенности аудитории, местный контекст и ожидания клиентов в разных нишах.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и подготовка',
        text: 'Согласовываем концепцию, стиль, ключевые сцены и reference. Вы получаете чеклист подготовки пространства.',
    },
    {
        title: 'Шаг 2. Дата и логистика',
        text: 'Выбираем оптимальный слот с учётом рабочего расписания и задач съёмки.',
    },
    {
        title: 'Шаг 3. Съёмочный день',
        text: '4–6 часов: пространство, команда, процесс и детали атмосферы с минимальным вмешательством в работу.',
    },
    {
        title: 'Шаг 4. Монтаж и цветокоррекция',
        text: '3–5 рабочих дней на черновой монтаж, ритм, цвет и финальную сборку под утверждённый стиль.',
    },
    {
        title: 'Шаг 5. Финальные правки и передача',
        text: 'Доводим финал по комментариям и передаём полный пакет файлов с гайдом по размещению.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic — Первый шаг',
        price: 'от 600 ₾',
        audience: 'Для запуска, обновления профиля или разовой имиджевой задачи',
        timeline: '7 дней',
        items: [
            '1 мастер-ролик 60–90 сек (4K, горизонталь)',
            '1 короткая версия 30–45 сек для Instagram',
            '3 обложки-скриншота',
            '1 раунд правок',
            'Передача файлов через облако',
        ],
    },
    {
        title: 'Standard — Уверенный образ',
        price: 'от 1 000 ₾',
        audience: 'Для активных компаний с соцсетями и рекламными запусками',
        timeline: '7 дней',
        featured: true,
        items: [
            'Всё из Basic',
            'Дополнительные версии под 9:16 и 4:5',
            '5 обложек-скриншотов',
            'Гайд по размещению на платформах',
            '2 раунда правок',
        ],
    },
    {
        title: 'Full — Флагманский контент',
        price: 'от 1 500 ₾',
        audience: 'Для ребрендинга, крупных компаний и агентств',
        timeline: '5–7 дней',
        items: [
            'Всё из Standard',
            'Съёмка в два света (день + вечер / разные зоны)',
            'Titling и субтитры RU/EN',
            'Расширенный пакет файлов и исходники по запросу',
            'Приоритетный монтаж и 3 раунда правок',
        ],
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Хорошее видео можно снять на iPhone.',
        reality:
            'Смартфон даёт приемлемую картинку, но без постановочного света, грамотного движения камеры и продуманного монтажа результат выглядит как «любительский».',
    },
    {
        myth: 'Нам не нужно видео — у нас есть сайт с описаниями.',
        reality: 'Текст объясняет, видео убеждает. Новый клиент принимает первичное решение по визуалу, а не по тексту.',
    },
    {
        myth: 'Съёмка мешает рабочему процессу.',
        reality: 'Съёмка занимает один визит 4–6 часов и планируется в тихие слоты, чтобы команда работала в обычном режиме.',
    },
    {
        myth: 'Видео быстро устаревает, придётся переснимать каждый год.',
        reality: 'Качественный имиджевый ролик обычно служит 1,5–3 года, пока не изменится команда, пространство или позиционирование.',
    },
    {
        myth: 'Сначала нужно набрать аудиторию, а потом снимать.',
        reality: 'Сильный видеоконтент ускоряет рост аудитории, поэтому откладывание замедляет развитие.',
    },
];

const glossary: Card[] = [
    {
        title: 'Мастер-ролик',
        text: 'Главная финальная версия видео (обычно 60–90 сек, 16:9), из которой делаются остальные адаптации.',
    },
    {
        title: 'Cutdown',
        text: 'Сокращённая версия ролика под конкретную площадку, например 15–30 секунд для рекламы.',
    },
    {
        title: 'Titling',
        text: 'Текстовые вставки поверх видео: название компании, ключевые сообщения, акценты.',
    },
    {
        title: 'Reference',
        text: 'Пример видео по стилю, темпу или атмосфере, на который ориентируемся при подготовке проекта.',
    },
    {
        title: 'Color grading',
        text: 'Финальная цветокоррекция ролика под нужное настроение: тёплый/холодный тон, контраст, насыщенность.',
    },
    {
        title: 'B-roll',
        text: 'Дополнительные кадры деталей и процессов, которые усиливают монтаж и создают ощущение живой работы.',
    },
];

const notFitPoints: string[] = [
    'Компаниям, которым нужна репортажная съёмка «просто зафиксировать процесс» без имиджевой постановки.',
    'Тем, кому требуется полноценное ежемесячное SMM-ведение аккаунтов «под ключ».',
    'Проектам с бюджетом ниже 400 ₾: ниже этого порога невозможно обеспечить качественный продакшн-уровень.',
    'Клиентам, которым нужен длинный корпоративный фильм 5–10 минут: это отдельный формат и смета.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему имиджевое видео важнее текста для бизнеса в 2025–2026 году?',
        answer: [
            'Текст объясняет, видео убеждает. В ленте Instagram и TikTok именно первые 5–15 секунд ролика решают, откроет ли человек профиль дальше.',
            'Платформы системно отдают приоритет видеоформату, поэтому бизнес без сильного видеоконтента реже попадает в рекомендации даже при регулярных публикациях.',
            'Для Тбилиси это особенно важно: клиенты и партнёры часто изучают компанию онлайн до первого контакта. Видео создаёт кредит доверия заранее.',
        ],
    },
    {
        question: 'Из чего складывается хорошее имиджевое видео для бизнеса?',
        answer: [
            'Первый элемент — история: что делает компания, для кого и чем отличается. Второй — визуал пространства и команды, который передаёт атмосферу и уровень.',
            'Третий элемент — движение камеры: статичные планы не дают динамики. Четвёртый — монтажный ритм, который держит внимание без потери смысла.',
            'Пятый элемент — структура: вход, вовлечение, кульминация и завершение с чётким сигналом к действию. Без этого ролик превращается в набор красивых кадров.',
        ],
    },
    {
        question: 'Как использовать имиджевое видео максимально эффективно после съёмки?',
        answer: [
            'Закрепите мастер-ролик в Instagram, разместите на главной странице сайта и добавьте в Google Business Profile. Это три ключевые точки первого касания клиента.',
            'Короткие версии используйте как базовый creative для таргетированной рекламы: одна съёмка может закрыть 3–5 рекламных форматов без новых затрат.',
            'Ролик также работает в B2B продажах: при переговорах с партнёрами и корпоративными клиентами он заменяет длинные объяснения и ускоряет принятие решения.',
        ],
    },
    {
        question: 'Что влияет на цену имиджевого видео для бизнеса?',
        answer: [
            'Цена зависит от масштаба съёмки: небольшой офис и большой шоурум с командой в 20+ человек требуют разного продакшн-времени.',
            'Второй фактор — объём версий под платформы. Третий — сложность постпродакшна: базовый монтаж или расширенный пакет с titling, субтитрами и дополнительной графикой.',
            'Четвёртый фактор — логистика выезда. В пределах Тбилиси базовые условия обычно включены, за пределами города расчёт индивидуальный.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео для бизнеса в Тбилиси?',
        answer: 'В Breus Media — от 600 ₾ за базовый пакет. Standard с версиями для Reels и рекламы — от 1 000 ₾. Full со съёмкой в два света — от 1 500 ₾.',
    },
    {
        question: 'Как долго снимают имиджевое видео?',
        answer: 'Съёмка занимает 1 день (4–6 часов). Монтаж и передача — обычно 5–7 рабочих дней.',
    },
    {
        question: 'Зачем бизнесу профессиональное имиджевое видео?',
        answer: 'Оно передаёт ценность и атмосферу, которую фото не передают, и помогает клиенту быстрее принять решение о первом обращении.',
    },
    {
        question: 'Можно ли использовать ролик в рекламе Facebook и Instagram?',
        answer: 'Да. Права на рекламное использование передаются клиенту, плюс делаем адаптации под форматы Reels и ленты.',
    },
    {
        question: 'Где ещё размещать имиджевое видео?',
        answer: 'На сайте компании, в Google Business Profile, на YouTube, в презентациях, LinkedIn и партнёрских питчах.',
    },
    {
        question: 'Нужно ли мешать рабочему процессу во время съёмки?',
        answer: 'Нет. Снимаем в тихие часы или в согласованное рабочее окно, с минимальной нагрузкой на команду.',
    },
    {
        question: 'Что входит в услугу?',
        answer: 'Мастер-ролик 60–90 сек, короткая версия, обложки-скриншоты и гайд по размещению. В старших пакетах добавляются субтитры, titling и расширенные форматы.',
    },
    {
        question: 'Какой бизнес чаще всего заказывает имиджевое видео?',
        answer: 'Сервисные компании, агентства, студии, шоурумы, клиники, коворкинги, личные бренды и компании на этапе ребрендинга.',
    },
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
            name: 'Имиджевое видео бизнеса',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Имиджевое видео бизнеса — пример формата',
    description:
        'Кинематографичный ролик 60–90 секунд: пространство компании, команда, рабочий процесс и ценностное предложение.',
    thumbnailUrl: [VIDEO_THUMBNAIL_URL],
    uploadDate: '2026-04-01',
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
    name: 'Имиджевое видео бизнеса в Тбилиси',
    description:
        'Имиджевый ролик 60–90 секунд для бизнеса: команда, пространство, процесс и ценностное предложение. Версии под сайт, Instagram и рекламу.',
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
    title: 'Имиджевое видео бизнеса в Тбилиси — съёмка команды и пространства | Breus Media',
    description:
        'Снимем имиджевый ролик вашего бизнеса: команда, пространство, процесс и ценностное предложение. Готово за 5–7 дней. От 600 ₾. Тбилиси и вся Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Имиджевое видео бизнеса — команда, пространство, ценность',
        description:
            'Флагманский ролик 60–90 сек для сайта, Instagram и переговоров. Один съёмочный день, готовый пакет файлов за 5–7 дней.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoBusinessPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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
                        Promo Video · Business · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Имиджевое видео бизнеса — команда, пространство, ценность
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Один ролик, который наконец покажет вашу компанию такой, какой её видят изнутри.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Ваш бизнес выглядит сильно вживую, но онлайн это часто незаметно. Сайт, Instagram и деловые
                        презентации нередко транслируют устаревший контент или телефонные фото, которые не передают
                        реальный уровень компании. Имиджевое видео 60–90 секунд меняет это: команда, пространство,
                        процесс и ценностное предложение складываются в цельный образ, который убеждает до первого
                        контакта. Breus Media снимает такие ролики в Тбилиси и по всей Грузии.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку ролика
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
                        Имиджевое видео бизнеса — это короткий кинематографичный ролик 60–90 секунд, который передаёт
                        атмосферу компании, показывает команду и объясняет ценностное предложение на уровне ощущения.
                        Это не рекламный ролик с ценами и не корпоративный фильм на 10 минут, а ваша визуальная
                        визитная карточка для сайта, Instagram, деловых переговоров и рекламы. Съёмка занимает один
                        визит, финальные материалы готовы за 5–7 дней.
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
                                <p>MP4 (4K master), сжатые версии для Instagram/TikTok, PNG-обложки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Съёмка 1 день, монтаж и цветокоррекция 3–5 рабочих дней, итог 5–7 дней.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive или WeTransfer + краткий гайд по размещению.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Хотите, чтобы клиенты наконец увидели реальный уровень вашего бизнеса в digital?"
                buttonLabel="Обсудить съёмку ролика"
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
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст Тбилиси</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Тбилиси — один из самых динамичных рынков для малого и среднего бизнеса в регионе. Местные
                        предприниматели, экспаты и релоканты создают новые компании в сервисных нишах, и конкуренция за
                        клиента смещается в digital. В этой среде онлайн-образ решает не меньше портфолио: Instagram
                        и сайт изучают до первого обращения, партнёры проверяют LinkedIn до встречи. Бизнес без
                        флагманского видео теряет часть потенциальных клиентов и партнёров уже на этапе первого
                        касания.
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
                    <h2 className="text-3xl font-bold mb-6">Social Proof / доказательства</h2>
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
                        Здесь размещён embed-блок примера формата. На финальной версии можно подставить актуальный
                        кейс из вашего портфолио.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример имиджевого видео для бизнеса"
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

            <ProcessNote text="Весь процесс от первого контакта до готового ролика занимает 7–10 рабочих дней: 1–2 дня на бриф и подготовку, 1 день съёмки, 5–7 дней монтажа и согласования." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 600₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 1 000₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1 500₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Мастер-ролик 60–90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Версия для Reels (9:16)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Версия для ленты (4:5)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Обложки-скриншоты</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 шт.</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 шт.</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5+ шт.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмка в два света</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Titling / субтитры RU+EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Гайд по размещению</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Раунды правок</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок готовности</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">5–7 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Запускаетесь или нужно одно видео под конкретную задачу — выбирайте Basic.</li>
                            <li>Ведёте соцсети и рекламу, нужны версии под разные форматы — Standard.</li>
                            <li>Ребрендинг, крупная компания или агентство с B2B-клиентами — Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не уверены? Напишите нам, подберём пакет за 10 минут разговора: {CONTACT_PHONE}.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы снять видео, которое наконец передаст реальный уровень вашего бизнеса? Оставьте заявку."
                buttonLabel="Оставить заявку на съёмку"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-promo/reels-business" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для бизнеса
                                </Link>{' '}
                                — серия вертикальных роликов для Instagram и TikTok.
                            </li>
                            <li>
                                <Link href="/business-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Контент для бизнеса
                                </Link>{' '}
                                — полный спектр видеоконтента для компаний и брендов.
                            </li>
                            <li>
                                <Link href="/360-tour-business" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур по офису или шоуруму
                                </Link>{' '}
                                — виртуальная прогулка по пространству с интеграцией на сайт.
                            </li>
                            <li>
                                <Link href="/promo-video/promo-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                    Имиджевое видео клиники
                                </Link>{' '}
                                — флагманский ролик для медицинских и эстетических центров.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Нужен не только имиджевый ролик, но и регулярный контент-поток? Перейдите в{' '}
                            <Link href="/reels-promo/reels-business" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для бизнеса
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Хотите показать пространство в интерактивном формате? Посмотрите{' '}
                            <Link href="/360-tour-business" className="text-[#D4A017] hover:text-white transition-colors">
                                360° тур по офису или шоуруму
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Нужен комплексный выезд (видео + Reels + 360)? Напишите в{' '}
                            <a href={WHATSAPP_HREF} className="text-[#D4A017] hover:text-white transition-colors">
                                WhatsApp
                            </a>{' '}
                            и соберём пакет под ваш формат.
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки бизнеса в контенте</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017] mb-2">Миф</p>
                                <p className="text-sm leading-relaxed text-white mb-4">{item.myth}</p>
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017] mb-2">Реальность</p>
                                <p className="text-sm text-white/70 leading-relaxed">{item.reality}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Что можно улучшить без покупки</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        <li>Закрепите лучшее доступное видео в Instagram, чтобы профиль не начинался со слабого фото.</li>
                        <li>Обновите Google Business Profile: добавьте хотя бы 3–5 актуальных фото офиса или шоурума.</li>
                        <li>Снимите короткое вертикальное видео команды при дневном свете — это уже лучше устаревших материалов.</li>
                        <li>Добавьте видео-embed на главную страницу сайта: даже старый ролик работает лучше, чем только текст.</li>
                        <li>Попросите лояльных клиентов отмечать компанию в Stories и репостите лучшие кадры.</li>
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Мини-словарь терминов</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {glossary.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
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
                    <h2 className="text-3xl font-bold mb-8">Кому мы не подходим</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {notFitPoints.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">Снять имиджевое видео бизнеса</h2>
                        <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                            Напишите нам — обсудим концепцию, формат пакета и дату съёмки. Обычно согласование
                            занимает 10–15 минут.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                href={WHATSAPP_HREF}
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
                        Заказать съёмку
                    </a>
                    <a
                        href={WHATSAPP_HREF}
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
