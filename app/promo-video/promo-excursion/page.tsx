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

const CANONICAL_URL = 'https://breus.media/promo-video/promo-excursion';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Гидам с авторскими экскурсиями по Тбилиси, Кахетии и Батуми',
        text: 'Когда маршрут уникальный, его важно показать так, чтобы гость захотел записаться сразу после просмотра.',
    },
    {
        title: 'Организаторам adventure-активностей',
        text: 'Рафтинг, параглайдинг, джип-туры и трекинг лучше всего продаются через эмоцию и динамику в кадре.',
    },
    {
        title: 'Организаторам wine tour и гастро-экскурсий',
        text: 'Видео помогает передать атмосферу дегустации, людей и локаций, а не просто список остановок.',
    },
    {
        title: 'Escape-room, квест и experience-проектам',
        text: 'Короткий ролик показывает механику опыта и снимает барьер «я не понимаю, что меня ждёт».',
    },
    {
        title: 'Малым туристическим бизнесам с уникальными предложениями',
        text: 'Если ваш продукт нестандартный, промо-видео делает его понятным за 30-60 секунд.',
    },
    {
        title: 'Проектам на Viator, GetYourGuide и других маркетплейсах',
        text: 'Карточка с видео выделяется среди конкурентов и быстрее объясняет ценность активности.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Показывает активность в действии',
        text: 'Не «у нас есть рафтинг», а вот как это реально выглядит: старт, динамика, эмоции, финал.',
    },
    {
        title: 'Снимает страх «скучно / страшно / не для меня»',
        text: 'Визуал работает лучше описаний и сразу отвечает на главные сомнения клиента.',
    },
    {
        title: 'Усиливает карточку на маркетплейсах',
        text: 'Карточки с видео обычно конвертируют на 40-80% лучше, чем карточки только с фото.',
    },
    {
        title: 'Даёт готовый креатив для рекламы',
        text: 'Из одного ролика получаете материалы для Instagram, Facebook, TikTok и мессенджеров.',
    },
];

const painCards: Card[] = [
    {
        title: 'Карточка теряется среди конкурентов',
        text: 'На Viator и GetYourGuide сотни похожих предложений. Видео — самый быстрый способ выделиться.',
    },
    {
        title: 'Сложно объяснить нагрузку и эмоцию текстом',
        text: '«Умеренная сложность» для каждого разная. Видео показывает реальный темп и уровень активности.',
    },
    {
        title: 'Много просмотров, мало броней',
        text: 'Люди заинтересованы, но не решаются. Эмоции реальных участников в ролике закрывают это сомнение.',
    },
    {
        title: 'Реклама работает слабо без сильного креатива',
        text: 'Таргет без качественного видео в 2025-2026 годах теряет эффективность и бюджет.',
    },
    {
        title: 'Сезонный продукт трудно продать заранее',
        text: 'Летние и зимние активности нужно продавать заранее, и промо-ролик работает на это лучше текста.',
    },
    {
        title: 'Нет времени заниматься контентом',
        text: 'Вы работаете с туристами, мы берём съёмку и монтаж на себя и отдаём готовые файлы.',
    },
];

const earnPoints: string[] = [
    'Повышает конверсию карточки на маркетплейсе: меньше просмотров впустую и больше бронирований.',
    'Даёт готовый рекламный материал для таргета без отдельного производства креатива.',
    'Позволяет продавать активность заранее через соцсети, рассылки и мессенджеры.',
    'Обосновывает цену выше среднего через визуальное качество и прозрачность опыта.',
];

const avoidLossPoints: string[] = [
    'Снижает процент возвратов: гость заранее понимает формат активности и уровень сложности.',
    'Сокращает время переписки: на типовые вопросы отвечает само видео.',
    'Защищает от отзывов «не то, чего я ожидал», потому что ожидания формируются честно.',
    'Служит 2-3 года без обновления, если сама активность и маршрут остаются прежними.',
];

const deliverables: string[] = [
    'Основной промо-ролик 30-90 сек (горизонтальный 16:9).',
    'Вертикальная версия 9:16 для Instagram Reels, TikTok и Stories.',
    'Квадратная версия 1:1 для рекламных креативов (опционально).',
    'Субтитры RU и/или EN.',
    'Цветокоррекция, монтаж, музыкальное оформление.',
    'Финальная версия и рабочие исходники (опционально).',
    'Рекомендации по размещению: маркетплейс, сайт, реклама.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Маркетплейс',
        text: 'Организатор wine tour добавляет 60-секундный ролик в карточку GetYourGuide. Бронирований становится больше, потому что гости видят реальную дегустацию и реальных людей.',
    },
    {
        title: 'Сценарий 2 — Реклама в Instagram',
        text: 'Adventure-компания запускает ролик рафтинга в таргете. Видео с живыми эмоциями конвертирует заметно лучше статичного баннера.',
    },
    {
        title: 'Сценарий 3 — WhatsApp-продажа',
        text: 'Гид отправляет ролик тем, кто спрашивает про экскурсию. Сообщение «вот как это выглядит» переводит диалог в конкретные брони.',
    },
    {
        title: 'Сценарий 4 — B2B-партнёрство',
        text: 'Отель показывает ролик экскурсии своим гостям на ресепшн и в мессенджере. Партнёр охотнее продаёт вашу активность как доп.услугу.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Wine tour в Сигнахи',
        text: 'После добавления ролика в Highlights Instagram и на сайт клиенты чаще пишут сразу про запись, а не задают уточняющие вопросы.',
    },
    {
        title: 'Кейс 2 — Рафтинг на Арагви',
        text: 'Adventure-компания использует 30-секундный ролик в рекламе. Стоимость привлечения клиента снижается по сравнению с баннерами.',
    },
    {
        title: 'Кейс 3 — Экскурсия по старому Тбилиси',
        text: 'Авторский гид получил нишевую иностранную аудиторию: ролик разошёлся в expat-сообществах и привёл новые брони.',
    },
];

const socialProofBullets: string[] = [
    'Снимаем с пониманием туристической психологии: что именно подталкивает к бронированию.',
    'DJI Air 3S + Avata 2 (FPV): профессиональная аэро- и наземная съёмка под динамичные активности.',
    'Из одной съёмки делаем несколько форматов: маркетплейс, соцсети, реклама.',
    'Живём и работаем в Грузии, знаем ключевые локации и специфику маршрутов по сезонам.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем промо-ролик для экскурсии отличается от Reels?',
        answer:
            'Промо-ролик сфокусирован на одной конкретной активности и заканчивается чётким CTA: забронировать, написать, перейти по ссылке. Reels чаще работает на охват и узнаваемость. Оба формата полезны, но решают разные задачи.',
    },
    {
        question: 'Какой длины должен быть промо-ролик?',
        answer:
            'Обычно 30-60 секунд для маркетплейсов и рекламы. До 90 секунд — если активность многоэтапная и её нужно объяснить подробнее. Длиннее 2 минут обычно оставляют только для сайта.',
    },
    {
        question: 'Нужно ли организовывать отдельную группу для съёмки?',
        answer:
            'Лучший вариант — снимать во время реального тура: настоящие эмоции всегда сильнее постановки. Если ближайшей группы нет, можем обсудить альтернативный формат.',
    },
    {
        question: 'Можно ли использовать ролик в рекламе?',
        answer:
            'Да. Мы сразу готовим адаптации под рекламные размещения в Instagram, Facebook и TikTok.',
    },
    {
        question: 'Нужно ли согласие туристов на съёмку?',
        answer:
            'Да, согласие обязательно. Обычно это устная договорённость или короткая форма согласия — подскажем удобный вариант под вашу ситуацию.',
    },
    {
        question: 'Сколько времени занимает производство?',
        answer: '5-8 рабочих дней от съёмки до финального файла.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит промо-ролик для экскурсии?',
        answer: 'Базовый формат — от 500 ₾. С несколькими форматами и аэросъёмкой — от 900 ₾.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer:
            'Съёмка до 4 часов, монтаж ролика до 90 секунд, вертикальная версия, субтитры на одном языке, цветокоррекция и передача файлов.',
    },
    {
        question: 'Можно ли снять сразу несколько активностей?',
        answer: 'Да, это обычно выгоднее: можно закрыть несколько продуктов за один-два выезда.',
    },
    {
        question: 'Нужно ли отдельно оплачивать права на музыку?',
        answer: 'Нет. Используем лицензионные треки, включённые в стоимость.',
    },
    {
        question: 'Как передаются готовые файлы?',
        answer: 'Через Google Drive или WeTransfer. Все форматы передаются в одной структурированной папке.',
    },
    {
        question: 'Какая схема оплаты?',
        answer: '50% до съёмки и 50% после согласования финальной версии.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Туристический контент в Грузии — наша профильная специализация',
        text: 'Мы не снимаем «всё подряд»: основной опыт именно в туристическом и экскурсионном сегменте.',
    },
    {
        title: 'Полный цикл под ключ',
        text: 'Бриф, shot list, съёмка, монтаж и адаптация форматов под все нужные платформы.',
    },
    {
        title: 'Быстрые сроки производства',
        text: 'Стандартно отдаём финальные материалы через 5-8 рабочих дней после съёмки.',
    },
    {
        title: 'Одна съёмка — несколько форматов',
        text: 'Экономим ваше время и бюджет, сразу закрывая сайт, маркетплейс, рекламу и соцсети.',
    },
    {
        title: 'Фокус на конверсию, а не только на «красиво»',
        text: 'Строим ролик так, чтобы он подталкивал к действию: заявке, звонку, бронированию.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф',
        text: 'Обсуждаем активность, аудиторию, платформы и tone of voice будущего ролика.',
    },
    {
        title: 'Шаг 2. Shot list',
        text: 'Формируем список ключевых сцен: начало, действие, эмоция, финальный CTA.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Выезд на экскурсию или активность, обычно в течение 1 дня.',
    },
    {
        title: 'Шаг 4. Монтаж',
        text: 'Черновик, согласование правок, финальная версия с цветом, музыкой и субтитрами.',
    },
    {
        title: 'Шаг 5. Передача',
        text: 'Отдаём все форматы и короткие рекомендации по размещению на площадках.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 500 ₾',
        audience: 'Первый промо-ролик для сайта и WhatsApp без лишнего',
        timeline: '5-8 дней',
        items: [
            'Съёмка 1 день',
            'Промо-ролик до 60 сек (16:9)',
            'Вертикальная версия 9:16',
            'Субтитры RU',
            'Монтаж и цветокоррекция',
        ],
    },
    {
        title: 'Standard',
        price: 'от 900 ₾',
        audience: 'Маркетплейс + соцсети + работа с иностранной аудиторией',
        timeline: '5-8 дней',
        featured: true,
        items: [
            'Съёмка 1 день + аэросъёмка (DJI Air 3S)',
            'Промо-ролик до 90 сек',
            'Вертикальная и квадратная версии',
            'Субтитры RU/EN',
            'Монтаж, цвет, лицензионная музыка',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 500 ₾',
        audience: 'Несколько активностей и закрытие всех каналов продаж разом',
        timeline: '5-8 дней',
        items: [
            '2 выезда или несколько активностей',
            'FPV + аэро + наземная съёмка',
            '3 отдельных промо-ролика под разные соотношения сторон',
            'Субтитры RU/EN',
            'Адаптация под маркетплейс и рекламный кабинет',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Ошибка 1 — Одно фото на маркетплейсе',
        text: 'Карточки с видео обычно получают в 2-3 раза больше кликов. Фото не заменяет видео.',
    },
    {
        title: 'Ошибка 2 — Постановка без реальных людей',
        text: 'Пустые красивые кадры не продают активность. Нужны реальные участники и реальные эмоции.',
    },
    {
        title: 'Ошибка 3 — Слишком длинный ролик',
        text: '3-5 минут для экскурсии — слишком много. Для рекламы и маркетплейса лучше 30-60 секунд.',
    },
    {
        title: 'Ошибка 4 — Нет CTA в конце',
        text: 'Если непонятно, что делать дальше, часть трафика просто теряется после просмотра.',
    },
    {
        title: 'Ошибка 5 — Только один формат видео',
        text: 'Маркетплейсу нужен горизонталь, Instagram и TikTok — вертикаль. Из одной съёмки стоит делать оба.',
    },
    {
        title: 'Ошибка 6 — Съёмка в плохую погоду «пока есть время»',
        text: 'Свет формирует восприятие. Лучше дождаться хороших условий, чем выпускать слабый ролик.',
    },
];

const improveWithoutPurchase: string[] = [
    'Попросите следующую группу туристов разрешить съёмку и запишите хотя бы 3-4 ключевые сцены на телефон.',
    'Обновите обложку карточки на маркетплейсе: выберите самое эмоциональное фото.',
    'Добавьте в описание чёткий тайминг маршрута: старт, активность, финал.',
    'Вставьте в WhatsApp-шаблон ответа фото или GIF вашей активности.',
    'Соберите 2-3 коротких видеоотзыва от довольных туристов.',
];

const checklistItems: string[] = [
    'Определён ключевой момент активности, который надо снять в первую очередь.',
    'Есть реальная группа туристов или подготовлен соло-формат с гидом.',
    'Получено устное согласие участников на видеосъёмку.',
    'Выбран день с подходящей погодой и светом.',
    'Составлен список сцен: начало, кульминация, эмоция, финал.',
    'Определены каналы размещения: маркетплейс, соцсети, реклама, сайт.',
    'Согласованы форматы: горизонт, вертикаль, квадрат.',
    'Подобран референс ролика, который вам нравится по стилю.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видео важнее фото для продажи экскурсии?',
        answer: [
            'Фото фиксирует один момент, а видео передаёт движение, темп и эмоцию всей активности. Для рафтинга, параглайдинга, дегустации или трекинга это критично: человек должен почувствовать опыт до покупки.',
            'Потенциальный гость сравнивает десятки похожих карточек. Видео быстро объясняет, что именно он получит, и снижает страх неопределённости.',
            'Для активностей с физическим и эмоциональным компонентом карточки с видео обычно конвертируют заметно лучше, чем карточки только с фото.',
        ],
    },
    {
        question: 'Как промо-ролик работает в таргетированной рекламе?',
        answer: [
            'Видеоролик передаёт больше информации за меньшее время и удерживает внимание дольше статичного креатива.',
            'Эмоциональная реакция на динамику, лица и звук повышает вероятность клика и заявки, особенно в Instagram и TikTok.',
            'Один промо-ролик можно разрезать на несколько рекламных версий, чтобы тестировать разные аудитории без дополнительной съёмки.',
        ],
    },
    {
        question: 'Как часто нужно обновлять промо-ролик?',
        answer: [
            'Обычно хороший ролик служит 2-3 года, если сама активность, маршрут и позиционирование не меняются.',
            'Обновление нужно, когда меняются ключевые локации, добавляются новые этапы программы или меняется целевая аудитория.',
            'Также стоит обновить ролик, если текущая версия визуально устарела относительно конкурентной среды.',
        ],
    },
    {
        question: 'Чем отличается промо для adventure-активности и культурной экскурсии?',
        answer: [
            'Adventure-ролик строится на темпе, адреналине, скорости и реакциях участников: монтаж быстрее, музыка энергичнее.',
            'Культурная экскурсия опирается на атмосферу, детали, историю и спокойный ритм восприятия.',
            'Обе версии решают одну задачу: зритель должен чётко понять формат и захотеть забронировать.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое промо-ролик для экскурсии?',
        answer:
            'Короткое видео 30-90 секунд, которое показывает конкретную экскурсию или активность в действии для маркетплейса, сайта, соцсетей и рекламы.',
    },
    {
        question: 'Сколько стоит промо-ролик для экскурсии в Тбилиси?',
        answer: 'От 500 ₾ за базовый формат. Полный пакет с аэросъёмкой и несколькими версиями — от 1 500 ₾.',
    },
    {
        question: 'Чем ролик помогает на маркетплейсах вроде Viator?',
        answer: 'Карточки с видео обычно получают больше кликов и бронирований, чем карточки только с фото.',
    },
    {
        question: 'Какой формат лучше для рекламы экскурсии?',
        answer: 'Вертикальный 9:16 для Instagram и TikTok, плюс горизонтальный 16:9 для сайта и YouTube.',
    },
    {
        question: 'Нужно ли собирать отдельную группу для съёмки?',
        answer: 'Нет, лучше снимать во время реального тура: так ролик выглядит честно и убедительно.',
    },
    {
        question: 'Где можно использовать готовый ролик?',
        answer: 'На сайте, в карточке маркетплейса, в WhatsApp, в рекламных кампаниях, Instagram и TikTok.',
    },
    {
        question: 'Кому принадлежат права на видео?',
        answer: 'Права на использование передаются заказчику без ограничений.',
    },
    {
        question: 'Как быстро готов финальный файл?',
        answer: 'Обычно через 5-8 рабочих дней после съёмки.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Достаточно красиво снять, и продажи придут сами.',
        reality:
            'Красота без структуры не продаёт. Нужны логичный сценарий, ключевая эмоция и чёткий призыв к бронированию.',
    },
    {
        myth: 'Промо нужно только для дорогих туров.',
        reality:
            'Даже недорогая экскурсия продаётся лучше, когда человек видит понятный формат и реальные эмоции участников.',
    },
    {
        myth: 'Туристы читают только отзывы, видео не важно.',
        reality: 'Отзывы подтверждают выбор, а видео создаёт желание и помогает принять решение быстрее.',
    },
    {
        myth: 'Смартфона достаточно для всего.',
        reality:
            'Смартфон годится для Stories, но для маркетплейса и платной рекламы обычно нужен более стабильный продакшн-уровень.',
    },
    {
        myth: 'Нужно переснимать ролик каждый сезон.',
        reality:
            'Если ролик сделан без жёсткой привязки к датам, он спокойно работает несколько лет.',
    },
];

const glossary: Card[] = [
    {
        title: 'Промо-ролик',
        text: 'Короткое рекламное видео, цель которого — подтолкнуть к конкретному действию: бронь, звонок, заявка.',
    },
    {
        title: 'CTA (Call to Action)',
        text: 'Призыв к действию в конце видео: «Забронируйте», «Напишите нам», «Узнайте подробности».',
    },
    {
        title: 'Маркетплейс',
        text: 'Платформа для продажи экскурсий: Viator, GetYourGuide, TripAdvisor Experiences.',
    },
    {
        title: 'Shot list',
        text: 'Список конкретных сцен, которые нужно снять. Готовится до съёмочного дня.',
    },
    {
        title: 'Таргетинг',
        text: 'Показ рекламного ролика выбранной аудитории по интересам, географии и другим параметрам.',
    },
];

const notFitPoints: string[] = [
    'Экскурсиям со стоимостью до 20 ₾: ROI от продакшна обычно не окупается.',
    'Разовым активностям, которые не планируется повторять.',
    'Тем, у кого нет реальных туристов или доступной локации для съёмки.',
    'Клиентам, не готовым участвовать в согласовании shot list и финального результата.',
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
            name: 'Промо-ролик для экскурсии',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Промо-ролик для экскурсии — пример формата',
    description:
        'Короткий промо-ролик 30-90 секунд для экскурсии: подготовка, действие, эмоция и финальный призыв к бронированию.',
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
    name: 'Промо-ролик для экскурсии в Грузии',
    description:
        'Съёмка промо-роликов для экскурсий и активностей в Грузии: 30-90 секунд, версии для маркетплейсов, соцсетей и рекламы.',
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
        price: '500',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Промо-ролики, Reels, дрон-съёмка и туристический видеоконтент в Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Промо-ролик для экскурсии Грузия | Видео под бронирование — Breus Media',
    description:
        'Создаём промо-ролики для экскурсий и активностей в Грузии. Рафтинг, wine tour, гиды Тбилиси. От 500 ₾. Быстро, конверсионно, под маркетплейсы.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Промо-ролик для экскурсии — видео под бронирование и рекламу',
        description:
            'Промо-видео 30-90 секунд для экскурсий и активностей: маркетплейсы, соцсети, таргет. Тбилиси и вся Грузия.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoExcursionPage() {
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
                        Promo Video · Excursion · Грузия
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Промо-ролик для экскурсии — видео под бронирование и рекламу
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        30-60 секунд, которые объясняют вашу активность лучше, чем страница текста.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        У вас есть рафтинг, дегустация, конный тур или adventure-маршрут, и вы знаете, что это стоит
                        того. Но потенциальный клиент видит лишь пару фото и описание, которое не отличается от десятков
                        конкурентов. Промо-ролик для экскурсии показывает путь от подготовки до финала и делает продукт
                        понятным с первого просмотра. Это видео для страницы бронирования, мессенджеров и таргетированной
                        рекламы. Breus Media делает такие ролики для активностей в Грузии — от wine tour до джип-приключений.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать промо-ролик для экскурсии
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
                    <h2 className="text-3xl font-bold mb-6">Что такое промо-ролик для экскурсии?</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Это короткое видео (30-90 секунд), сфокусированное на одной конкретной активности. Не общий
                        «красивый Тбилиси», а именно ваш продукт: как начинается маршрут, что происходит в процессе,
                        какие эмоции получают люди и чем всё заканчивается. В финале — чёткий CTA: ссылка, кнопка
                        бронирования или контакт для записи.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Кому нужен промо-ролик для экскурсии?</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Задачи промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Боли организаторов экскурсий и активностей</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как промо-ролик помогает зарабатывать?</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как помогает избежать потерь?</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в промо-ролик для экскурсии?</h2>
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
                        <h3 className="text-xl font-bold mb-4">Форматы и сроки</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Форматы файлов</p>
                                <p>MP4 1080p, три соотношения сторон (16:9, 9:16, 1:1 — при необходимости).</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Готовые файлы через облако в течение 5-8 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Права</p>
                                <p>Полные права на использование передаются заказчику без ограничений.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Ваша активность заслуживает ролика, который заставляет сказать «хочу это». Расскажите о ней — обсудим формат и структуру."
                buttonLabel="Заказать промо-ролик для экскурсии"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Сценарии использования промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Экскурсионный рынок Грузии</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Грузия предлагает уникальный набор активностей: рафтинг на Арагви, параглайдинг над Тбилиси,
                        конные прогулки в Казбеги, wine tour в Телави и трекинг в Сванетии. Каждая из этих активностей
                        требует своей визуальной подачи. Мы снимали в ключевых туристических регионах страны и понимаем,
                        как передать адреналин, спокойствие дегустации и масштаб горных маршрутов в одном коротком ролике.
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
                    <h2 className="text-3xl font-bold mb-4">Пример промо-ролика</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён embed примера. На финальной версии можно подставить актуальный ролик из вашего
                        портфолио по экскурсиям.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример промо-ролика для экскурсии"
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
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media?</h2>
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

            <ProcessNote text="Начинаем с обсуждения активности и опасений клиентов, затем собираем shot list, снимаем за 1 день, монтируем, согласуем и передаём финал без лишних встреч и затянутых согласований." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">5 шагов</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Тарифы на промо-ролик для экскурсии</h2>
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

                    <h3 className="text-2xl font-bold mt-12 mb-5">Сравнение пакетов</h3>

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
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмочные выезды</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик (16:9)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 60 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 90 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия (9:16)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Квадратная версия (1:1)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">DJI Air 3S</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">DJI Air 3S + FPV</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Число активностей</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена от</td>
                                    <td className="p-3">500 ₾</td>
                                    <td className="p-3">900 ₾</td>
                                    <td className="p-3">1 500 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Какой пакет выбрать?</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Basic — если нужен первый промо-ролик для сайта и WhatsApp без лишнего.</li>
                            <li>Standard — если важны маркетплейс, соцсети и иностранные туристы.</li>
                            <li>Full — если нужно сразу закрыть маркетплейс, рекламу и соцсети.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Покажите нам вашу активность — мы покажем её клиентам так, чтобы они захотели записаться прямо сейчас."
                buttonLabel="Заказать промо для экскурсии"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Смежные услуги</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для туристического проекта
                                </Link>{' '}
                                — серия роликов под соцсети.
                            </li>
                            <li>
                                <Link
                                    href="/promo-video/promo-tourism-route"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    Видеогид по маршруту
                                </Link>{' '}
                                — длинный формат для маршрутного тура.
                            </li>
                            <li>
                                <Link
                                    href="/ai-content/tourism-ai-packaging"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    AI-упаковка туристических предложений
                                </Link>{' '}
                                — тексты и описание под маркетплейсы.
                            </li>
                            <li>
                                <Link href="/drone-hotels-tourism" className="text-[#D4A017] hover:text-white transition-colors">
                                    Аэросъёмка для туристического бизнеса
                                </Link>{' '}
                                — виды локаций с воздуха.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Если вам нужен стабильный поток вертикального контента, посмотрите услугу{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для бизнеса
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Для презентации локаций сверху и усиления wow-эффекта можно добавить{' '}
                            <Link href="/drone-hotels-tourism" className="text-[#D4A017] hover:text-white transition-colors">
                                аэро- и FPV-съёмку
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Нужен комбинированный пакет под маркетплейс и рекламу? Напишите в{' '}
                            <a href={WHATSAPP_HREF} className="text-[#D4A017] hover:text-white transition-colors">
                                WhatsApp
                            </a>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">6 ошибок при продвижении экскурсий</h2>
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
                    <h2 className="text-3xl font-bold mb-8">5 шагов без вложений</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист перед съёмкой промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Мифы о промо-роликах для экскурсий</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Словарь</h2>
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Тбилиси, Грузия. Снимаем по всей стране. Напишите в WhatsApp или позвоните: {CONTACT_PHONE}.
                            На сайте подробнее: <a href="https://breus.media" className="text-[#D4A017] hover:text-white">breus.media</a>.
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
                        Breus Media — промо-ролики для экскурсий и активностей в Грузии. Тбилиси. +995 574 619 393
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
