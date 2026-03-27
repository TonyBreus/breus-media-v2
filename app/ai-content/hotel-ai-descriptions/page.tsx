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

const CANONICAL_URL = 'https://breus.media/ai-content/hotel-ai-descriptions';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const heroIntro =
    'На Booking тысячи отелей. Ваше описание — это первый текст, который видит потенциальный гость. Если оно написано наспех, переведено машиной или просто устарело — вы теряете бронирование. Мы создаём профессиональные описания объекта, номеров и услуг с помощью AI-инструментов и редактуры реального копирайтера — на русском, английском и грузинском языках. Точные, убедительные, адаптированные под алгоритмы OTA и под живого гостя.';

const serviceExplanation =
    'AI-описания для отеля — это профессиональные тексты для Booking, Airbnb, Expedia и собственного сайта: описание объекта, отдельных типов номеров, услуг, завтрака, правил и особенностей. Мы используем AI для скорости и структуры, редактор — для точности и тона. На выходе: тексты, которые читаются естественно, правдиво описывают ваш объект и работают в алгоритмах OTA. Доступны на RU, EN и GE.';

const audienceItems: string[] = [
    'Отелям, которые только выходят на Booking или Airbnb и хотят начать с правильных описаний.',
    'Объектам с устаревшими или некорректными переводами — особенно если оригинал на одном языке, а переводы сделаны автоматически.',
    'Управляющим компаниям, которые ведут несколько объектов и хотят унифицировать стандарт текстов.',
    'Апарт-отелям с большим количеством типов юнитов — каждый нуждается в отдельном, чётком описании.',
    'Отелям, которые обновили номера или изменили ценовую политику — нужны актуальные тексты.',
    'Небольшим гестхаусам, у которых вообще нет нормальных описаний, только стандартный шаблон OTA.',
];

const taskCards: CardItem[] = [
    {
        title: 'Устраняет «текстовый разрыв»',
        text: 'Гость не может прочитать ваш отель правильно — он видит машинный перевод или общие фразы, которые не говорят о конкретном объекте.',
    },
    {
        title: 'Повышает конверсию на OTA',
        text: 'Алгоритмы Booking.com и других площадок лучше ранжируют объекты с полными, структурированными и актуальными текстами.',
    },
    {
        title: 'Снижает нагрузку на ресепшн',
        text: 'Хорошо написанные FAQ и описания в OTA сокращают количество уточняющих вопросов перед заездом.',
    },
    {
        title: 'Создаёт единый стандарт',
        text: 'Если у вас несколько каналов (Booking, Airbnb, сайт, Expedia), тексты везде звучат одинаково точно и профессионально.',
    },
];

const painCards: CardItem[] = [
    {
        title: '«Описание на Booking написали 3 года назад — оно устарело»',
        text: 'Описание не обновляется годами: поменялся завтрак, добавился бассейн, изменилось расположение входа — а текст рассказывает о том, чего уже нет.',
    },
    {
        title: '«Мы переводим описания в Google Translate — гости жалуются, что непонятно»',
        text: 'Машинный перевод без редактуры создаёт неточности, странные фразы и теряет тон бренда. Это особенно заметно для профессиональных путешественников и корпоративных клиентов.',
    },
    {
        title: '«У нас 12 типов номеров — у каждого одинаковое описание»',
        text: 'Одинаковые тексты для разных номеров — это отказ от продажи апгрейда. Гость не видит разницы и выбирает только по цене.',
    },
    {
        title: '«Не знаем, как правильно описать отель для иностранных гостей»',
        text: 'Русскоязычное описание не работает для европейцев: другие ожидания, другой стиль, другие акценты. Без локализации международный трафик конвертируется хуже.',
    },
    {
        title: '«Алгоритм Booking нас почти не показывает»',
        text: 'Пустые поля, короткие описания или отсутствие текстов на важных языках приводят к видимым потерям позиций в поиске.',
    },
    {
        title: '«У нас нет времени писать тексты самостоятельно»',
        text: 'Управляющий занят операционкой. Написать хорошие описания на трёх языках — это часы работы, которые можно делегировать.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Выше в выдаче Booking = больше просмотров',
        text: 'Полное заполнение профиля даёт рост органического трафика без рекламы.',
    },
    {
        title: 'Апгрейд через описание',
        text: 'Если номер с лучшим видом описан убедительно, гость сам чаще выбирает более дорогой вариант.',
    },
    {
        title: 'Международные гости конвертируются лучше',
        text: 'Точный и привлекательный текст на английском и грузинском закрывает больше запросов от разных рынков.',
    },
    {
        title: 'Спецпредложения продаются, а не просто публикуются',
        text: 'Правильно написанный текст акции превращает «информацию» в действие и бронирование.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Меньше жалоб на несоответствие',
        text: 'Точное описание помогает гостю заранее понять, что его ждёт, и снижает риск негативного отзыва.',
    },
    {
        title: 'Меньше отмен',
        text: 'Гость, который точно понял, что бронирует, реже отменяет.',
    },
    {
        title: 'Стабильность при изменениях OTA',
        text: 'Актуальные тексты позволяют быстрее адаптироваться к изменениям алгоритмов и требований платформ.',
    },
    {
        title: 'Репутация бренда на первом экране',
        text: 'Грамотный текст на языке гостя формирует профессиональное впечатление ещё до общения с персоналом.',
    },
];

const deliverables: string[] = [
    'Описание объекта (отель / гестхаус / апарт-отель) — на RU, EN, GE: 300–500 слов на каждом языке.',
    'Описание каждого типа номеров — отдельный текст с уникальными характеристиками.',
    'Описание ключевых услуг: завтрак, парковка, SPA, трансфер, ресторан, конференц-зал (по наличию).',
    'Описание политик: заезд/выезд, домашние животные, дети, курение — в структуре OTA.',
    'Раздел «Расположение»: локация, ближайшие точки интереса, транспорт.',
    'Блок Q&A: 8–12 вопросов с ответами на RU/EN.',
    'Финальный документ с инструкцией по размещению в OTA.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'DOCX (структурированный документ) + TXT для быстрого копирования в OTA.',
    },
    {
        title: 'Объём',
        text: 'Зависит от количества типов номеров, услуг и каналов размещения.',
    },
    {
        title: 'Сроки',
        text: '3–5 рабочих дней для Basic, 7–10 рабочих дней для Full.',
    },
    {
        title: 'Передача и правки',
        text: 'Google Drive или email. 1 раунд правок на каждый языковой блок включён.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Новый отель выходит на Booking',
        text: 'Создаём полный пакет текстов с нуля: описание объекта, все типы номеров, услуги, правила и расположение на трёх языках.',
    },
    {
        title: 'Апарт-отель с 8 типами юнитов',
        text: 'Пишем уникальное описание для каждого типа с акцентом на отличия: вид, метраж, планировка, сценарий использования.',
    },
    {
        title: 'Обновление после ремонта',
        text: 'Обновляем описания под новую реальность: новые зоны, услуги, правила, позиционирование.',
    },
    {
        title: 'Управляющая компания с несколькими объектами',
        text: 'Приводим профили к единому тону бренда и стандарту качества по всем объектам.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Бутик-отель, Старый Тбилиси, 16 номеров',
        text: 'Переписали машинный EN-перевод на нативные тексты для европейской аудитории. Владелец отметил меньше уточняющих вопросов до заезда.',
    },
    {
        title: 'Апарт-отель, Сабуртало, 22 юнита',
        text: 'Разделили 6 типов апартаментов на уникальные описания. Гости чаще выбирают более дорогие варианты, потому что видят разницу.',
    },
    {
        title: 'Управляющая компания, 4 объекта в Тбилиси',
        text: 'Унифицировали стиль и структуру RU+EN для всех профилей. Команда сэкономила время на ежедневной операционке.',
    },
];

const socialProofItems: string[] = [
    'Booking.com рекомендует заполнять профиль максимально полно: объект, номера, политики и услуги.',
    'Гости чаще бронируют, когда описание заранее отвечает на ключевые вопросы: вид, завтрак, парковка, расположение.',
    'Локализованный текст обычно конвертирует лучше, чем дословный машинный перевод.',
    'Breus Media работает с объектами в Тбилиси и Батуми и учитывает ожидания аудиторий CIS, Европы и Израиля.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое AI-описания для отеля?',
        answer: 'Это профессиональные тексты для Booking, Airbnb и сайта: создаются AI-инструментами и дорабатываются копирайтером, чтобы сохранить точность и естественный тон.',
    },
    {
        question: 'Чем AI-описания отличаются от машинного перевода?',
        answer: 'Машинный перевод переводит дословно и часто теряет контекст. Мы пишем текст нативно под язык и аудиторию, а не просто переводим.',
    },
    {
        question: 'Нужно ли что-то делать после получения текстов?',
        answer: 'Да, разместить тексты в профиле Booking / Airbnb / на сайте. Мы передаём документ с разбивкой по разделам OTA и инструкцией по вставке.',
    },
    {
        question: 'Как долго работают тексты — нужно ли их обновлять?',
        answer: 'Базовые описания обычно актуальны 1–2 года. Политики, акции и сезонные блоки обновляются по мере изменений.',
    },
    {
        question: 'Могут ли тексты реально повлиять на позицию в выдаче Booking?',
        answer: 'Да. Полнота и актуальность заполнения профиля влияют на видимость в поиске вместе с другими факторами.',
    },
    {
        question: 'Вы пишете на грузинском языке?',
        answer: 'Да. Грузинские тексты доступны в пакете Full и в отдельных заказах по запросу.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоят AI-описания для отеля?',
        answer: 'Basic (объект + 3 типа номеров, RU+EN) — от 150 ₾. Standard (до 8 типов + услуги + политики, RU+EN) — от 350 ₾. Full (RU+EN+GE + Q&A + без лимита номеров) — от 600 ₾.',
    },
    {
        question: 'Что нужно предоставить перед стартом?',
        answer: 'Любое описание объекта, список типов номеров с характеристиками, услуги и правила. Подходит даже исходник в мессенджере.',
    },
    {
        question: 'Как долго занимает работа?',
        answer: 'Basic — 3–5 рабочих дней. Full — 7–10 рабочих дней. Срочное выполнение возможно за доплату.',
    },
    {
        question: 'Входят ли правки в стоимость?',
        answer: 'Да, 1 раунд правок по каждому языковому блоку включён.',
    },
    {
        question: 'Можно ли заказать только один язык?',
        answer: 'Да, доступен любой язык отдельно или в комбинации RU / EN / GE.',
    },
    {
        question: 'Работаете ли вы с Airbnb и другими OTA?',
        answer: 'Да. Тексты адаптируем под формат Booking, Airbnb, Expedia, Hotels.com и собственного сайта.',
    },
];

const whyUsItems: string[] = [
    'AI + человек: не отдаём сырой AI-текст, каждое описание проходит редактуру.',
    'Знаем отельную специфику и вопросы гостей из разных рынков.',
    'Работаем с реальными объектами в Тбилиси и Батуми, а не по шаблону.',
    'Комплексный подход: можно объединить тексты, видео, Reels и 360° тур в одном проекте.',
    'Структурированный формат выдачи: материалы сразу готовы к размещению.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Анкета (15–30 минут)',
        text: 'Вы заполняете анкету или отвечаете в мессенджере: типы номеров, услуги, особенности, аудитория.',
    },
    {
        step: 'Шаг 2',
        title: 'Создание черновиков',
        text: 'AI генерирует структуру, редактор дорабатывает тексты и адаптирует их под аудиторию на нужных языках.',
    },
    {
        step: 'Шаг 3',
        title: 'Первая версия',
        text: 'Присылаем полный документ на согласование с разбивкой по разделам OTA.',
    },
    {
        step: 'Шаг 4',
        title: 'Правки',
        text: 'Вносим правки по комментариям. Один раунд включён в стоимость.',
    },
    {
        step: 'Шаг 5',
        title: 'Финальный документ',
        text: 'Передаём DOCX + TXT + инструкцию по размещению в Booking и других OTA.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 200 ₾',
        audience: 'Для небольшого объекта: нужно обновить основные тексты на 1–2 языках.',
        timeline: 'Срок: 3–5 рабочих дней.',
        items: ['Описание объекта на RU + EN (300–400 слов на каждом языке).', 'Описание до 3 типов номеров.', 'Финальный DOCX.'],
    },
    {
        title: 'Standard',
        price: 'от 350 ₾',
        audience: 'Для отеля с несколькими типами номеров, который хочет заполнить Booking профессионально.',
        timeline: 'Срок: 5–7 рабочих дней.',
        items: [
            'Описание объекта на RU + EN (400–600 слов).',
            'Описание до 8 типов номеров.',
            'Описание 3–5 ключевых услуг.',
            'Описание политик (заезд/выезд, дети, животные).',
            'Раздел «Расположение» на RU + EN.',
            'DOCX + инструкция по размещению.',
        ],
        featured: true,
    },
    {
        title: 'Full',
        price: 'от 600 ₾',
        audience: 'Для отелей с международной аудиторией и управляющих компаний нескольких объектов.',
        timeline: 'Срок: 7–10 рабочих дней.',
        items: [
            'Всё из Standard.',
            'Все три языка: RU + EN + GE.',
            'Описание всех типов номеров без ограничения.',
            'Q&A блок: 8–12 вопросов с ответами на RU + EN.',
            'Специальное предложение / сезонная акция (1 текст).',
            'Адаптация под Airbnb или Expedia (дополнительно).',
        ],
    },
];

const packageComparisonRows = [
    ['Что входит', 'Basic', 'Standard', 'Full'],
    ['Языки', 'RU + EN', 'RU + EN', 'RU + EN + GE'],
    ['Описание объекта', '✓', '✓', '✓'],
    ['Типы номеров', 'до 3', 'до 8', 'без лимита'],
    ['Услуги', '—', '3–5', 'все'],
    ['Политики', '—', '✓', '✓'],
    ['Q&A блок', '—', '—', '✓'],
    ['Специальное предложение', '—', '—', '✓'],
    ['Цена', 'от 150 ₾', 'от 350 ₾', 'от 600 ₾'],
];

const relatedServices = [
    {
        title: 'Видеотур по отелю',
        href: '/promo-video/promo-hotel',
        description: 'Cinematic-ролик для сайта и Booking в дополнение к текстам.',
    },
    {
        title: '360° тур по отелю',
        href: '/360-tour/360-tour-hotels',
        description: 'Виртуальный тур, который усиливает эффект качественных описаний.',
    },
    {
        title: 'Reels для отеля',
        href: '/reels-promo/reels-hotel',
        description: 'Видеоконтент для Instagram, который работает параллельно с OTA.',
    },
    {
        title: 'Сезонный контент-пакет',
        href: '/reels-promo/hotel-seasonal-content',
        description: 'Обновление текстов и контента под сезон или акцию.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Описание объекта — одно предложение',
        text: '«Уютный отель в центре Тбилиси» не отвечает на вопросы гостя. Нужны факты: вид, завтрак, транспорт, парковка.',
    },
    {
        title: 'Все номера описаны одинаково',
        text: 'Если стандарт и делюкс написаны одинаково, гость не видит ценность апгрейда и выбирает дешевле.',
    },
    {
        title: 'Машинный перевод без проверки',
        text: 'Странный синтаксис и ошибки в переводе снижают доверие международного гостя.',
    },
    {
        title: 'Описание не обновляется годами',
        text: 'Изменились услуги или правила, а текст старый. Несоответствие реальности ведёт к жалобам и плохим отзывам.',
    },
    {
        title: 'Нет описания расположения',
        text: '«Удобное расположение» не работает. Нужна конкретика: ориентиры, расстояния, транспорт.',
    },
    {
        title: 'Нет ответов на частые вопросы',
        text: 'Если нет ответов про парковку, животных или заезд, гость уходит туда, где всё понятно сразу.',
    },
];

const quickImprovements: string[] = [
    'Добавьте конкретику в первые два предложения: расстояние до центра, типичный вид из окна, ключевая особенность объекта.',
    'Проверьте, заполнены ли политики в Booking Extranet: заезд/выезд, курение, домашние животные, дети.',
    'Добавьте хотя бы одно специальное предложение в разделе «Акции» на Booking.',
    'Попросите постоянных гостей ответить на 3 вопроса об объекте — это даст материал для живого обновления текста.',
    'Перечитайте описание как иностранец: есть ли ответы на ключевые вопросы перед бронированием?',
];

const readinessChecklist: string[] = [
    'Есть список всех типов номеров с характеристиками: площадь, вид, тип кровати, ванная, балкон.',
    'Описан завтрак: что входит, шведский стол или сервированный, время подачи.',
    'Указаны услуги: парковка, трансфер, SPA, ресторан, лифт.',
    'Определены правила: check-in/check-out, дети, животные, курение.',
    'Есть понимание ключевой аудитории: откуда приезжают гости и что им важно.',
    'Согласованы языки: RU, EN, GE.',
    'Подготовлено актуальное описание расположения и района.',
    'Понятно, где размещать материалы: Booking, Airbnb, Expedia, собственный сайт.',
];

const expandedAnswers: LongAnswerItem[] = [
    {
        question: 'Как AI-инструменты работают при создании описаний для отелей?',
        answers: [
            'AI используется на этапе структуры и первичного текста: это ускоряет работу и помогает параллельно готовить несколько языков.',
            'Но AI не знает конкретику вашего объекта. Поэтому редактор вносит детали, проверяет факты и адаптирует текст под аудиторию.',
            'Результат — текст, который читается естественно и отражает реальные особенности вашего отеля.',
        ],
    },
    {
        question: 'Почему хорошие тексты на Booking важнее фотографий?',
        answers: [
            'Фото дают первое впечатление, но именно текст отвечает на вопросы перед бронированием и закрывает сомнения.',
            'Кроме того, тексты участвуют в поисковой релевантности на OTA: полнота и точность описаний повышает видимость карточки.',
        ],
    },
    {
        question: 'Как локализация под разные языки влияет на конверсию?',
        answers: [
            'Локализация — это адаптация под ожидания аудитории, а не дословный перевод.',
            'Нативный текст вызывает больше доверия и обычно лучше конвертирует в бронирование, чем машинный перевод.',
        ],
    },
    {
        question: 'Как часто нужно обновлять описания на OTA?',
        answers: [
            'Минимум раз в год, обязательно после ремонта, изменения услуг или политик.',
            'Также имеет смысл обновляться перед высоким сезоном и при изменениях требований платформ.',
        ],
    },
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Что такое AI-описания для отеля?',
        answer: 'Это профессиональные тексты для Booking, Airbnb и сайта: описание объекта, номеров и услуг, созданные с помощью AI и отредактированные копирайтером.',
    },
    {
        question: 'Сколько стоят AI-описания для отеля в Тбилиси?',
        answer: 'Basic — от 150 ₾, Standard — от 350 ₾, Full — от 600 ₾. Итог зависит от числа номеров, языков и объёма задач.',
    },
    {
        question: 'Зачем отелю профессиональные описания на Booking?',
        answer: 'Они повышают видимость профиля, уменьшают количество вопросов до заезда и помогают гостю бронировать увереннее.',
    },
    {
        question: 'Как AI-описания отличаются от машинного перевода?',
        answer: 'Машинный перевод переводит дословно. AI-описания с редактурой пишутся нативно под аудиторию и звучат естественно.',
    },
    {
        question: 'Можно ли заказать описания только на английском языке?',
        answer: 'Да. Можно заказать EN, GE или RU отдельно, либо любую комбинацию языков.',
    },
    {
        question: 'Влияют ли тексты на позицию отеля в поиске Booking?',
        answer: 'Да. Полнота заполнения профиля, включая описание объекта, номеров, услуг и политик, связана с видимостью в поиске.',
    },
    {
        question: 'Нужно ли выезжать для создания описаний?',
        answer: 'Нет. Работа полностью удалённая: вы отправляете данные, мы создаём и согласовываем тексты онлайн.',
    },
    {
        question: 'Кто делает AI-описания для отелей в Тбилиси?',
        answer: `Breus Media, Тбилиси. Контакт: ${CONTACT_PHONE_DISPLAY}.`,
    },
];

const additionalMaterials = [
    {
        title: 'Гайд: как заполнить профиль отеля на Booking.com',
        href: '/guide/booking-profile-checklist',
    },
    {
        title: 'Статья: почему машинный перевод снижает бронирования',
        href: '/blog/translation-vs-localization-hotel',
    },
    {
        title: 'Шаблон описания типа номера для Booking.com',
        href: '/guide/room-description-template',
    },
    {
        title: 'Сравнение OTA: Booking vs Airbnb vs Expedia',
        href: '/blog/ota-descriptions-comparison',
    },
];

const internalTransitions = [
    {
        title: 'Дополнить тексты визуальным контентом',
        text: 'Посмотрите Видеотур по отелю — cinematic-ролик для сайта и OTA.',
        href: '/promo-video/promo-hotel',
    },
    {
        title: 'Нужны тексты под сезонные акции',
        text: 'Сезонный контент-пакет включает обновление описаний под конкретный период.',
        href: '/reels-promo/hotel-seasonal-content',
    },
    {
        title: 'Хотите интерактивную презентацию отеля',
        text: '360° тур усиливает эффект качественных текстов и помогает гостю принять решение.',
        href: '/360-tour/360-tour-hotels',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф 1: «AI напишет текст — не нужен редактор»',
        text: 'AI даёт черновую основу. Редактор добавляет факты, тон бренда и адаптацию под реальный объект.',
    },
    {
        title: 'Миф 2: «Гости не читают описания — только смотрят фото»',
        text: 'Фото привлекают внимание, а текст закрывает вопросы перед бронированием и влияет на решение.',
    },
    {
        title: 'Миф 3: «На Booking главное цена»',
        text: 'В одном ценовом диапазоне гость выбирает там, где выше доверие, а качественный текст — часть этого доверия.',
    },
    {
        title: 'Миф 4: «Мы сами переведём через Google»',
        text: 'Машинный перевод быстро выдаёт неестественные формулировки и снижает восприятие сервиса.',
    },
    {
        title: 'Миф 5: «Это долго и дорого»',
        text: 'Базовый пакет стартует от 150 ₾ и обычно готов за 3–5 рабочих дней.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'OTA (Online Travel Agency)',
        description: 'Онлайн-платформа бронирования: Booking.com, Airbnb, Expedia, Hotels.com.',
    },
    {
        term: 'Профиль объекта',
        description: 'Страница отеля на OTA: фото, тексты, типы номеров, услуги, политики, отзывы.',
    },
    {
        term: 'Локализация',
        description: 'Адаптация текста под язык и ожидания аудитории, а не дословный перевод.',
    },
    {
        term: 'Q&A блок',
        description: 'Раздел с часто задаваемыми вопросами, который снимает сомнения гостя до бронирования.',
    },
    {
        term: 'Ранжирование OTA',
        description: 'Алгоритм сортировки объектов в поиске с учётом рейтинга, цены, доступности и полноты профиля.',
    },
    {
        term: 'Пакетное предложение',
        description: 'Комплексная акция (например, «3 ночи + завтрак + трансфер») с отдельным описанием под платформу.',
    },
];

const notFitItems: string[] = [
    'Отелям, которым нужен финальный результат «через 1 час». Даже быстрый продакшн требует минимум 1–2 дня.',
    'Объектам, которые не готовы предоставить базовую информацию о номерах, услугах и правилах.',
    'Хостелам и объектам, которые полностью устраивает текущее качество текстов и не нужны улучшения.',
    'Отелям, которые не используют OTA и продают только по телефону — для них формат может быть неактуален.',
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
            name: 'AI-визуализация и контент',
            item: 'https://breus.media/ai-visualization-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'AI-описания для отеля',
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
    serviceType: 'AI-описания для отелей',
    name: 'AI-описания для отеля: Booking, Airbnb и OTA',
    description:
        'Профессиональные описания объекта, номеров, услуг и политик для OTA с редактурой на RU, EN и GE. Тбилиси, Грузия.',
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
    title: 'AI-описания для отеля — тексты для Booking и Airbnb на RU/EN/GE | Breus Media',
    description:
        'Профессиональные описания номеров и услуг отеля для Booking, Airbnb и OTA. AI + редактура. На русском, английском и грузинском. От 150 ₾, Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'AI-описания для отеля — тексты для Booking и Airbnb на RU/EN/GE | Breus Media',
        description:
            'Профессиональные описания номеров и услуг отеля для Booking, Airbnb и OTA. AI + редактура. На русском, английском и грузинском. От 150 ₾, Тбилиси.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function HotelAiDescriptionsPage() {
    return (
        <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#packages' },
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
                            "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80')",
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
                                    AI Content · Hospitality · OTA
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                AI-описания для отеля — тексты для Booking, Airbnb и OTA
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Гость читает ваше описание — и либо бронирует, либо уходит. Давайте сделаем так, чтобы
                                он оставался.
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Проверить и обновить описания
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/70">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}
                            </p>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                На выходе
                            </p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 150 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет на RU + EN с готовым форматом для OTA.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Basic</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">7–10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Full</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>RU, EN, GE</li>
                                    <li>Описание объекта + номеров + услуг + политик</li>
                                    <li>1 раунд правок включён</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что это за услуга</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">{serviceExplanation}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Какую задачу решает услуга</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Боли клиента</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает заработать</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как помогает не потерять</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Deliverables</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Что получает клиент на выходе</h2>
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
                            <p className="text-xl font-bold text-white">Ваши тексты на Booking работают на вас или против вас?</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Проверим текущие тексты и покажем, что обновить в первую очередь.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Проверить и обновить описания
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Сценарии использования</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">
                        В Тбилиси сотни объектов размещения: от хостелов до дизайн-отелей. Международные гости из CIS,
                        Европы, Израиля и Ближнего Востока читают описания на своём языке. Если текст переведён машиной,
                        звучит шаблонно или не объясняет реальные особенности объекта, гость выбирает конкурента. В Батуми
                        и горных курортах ситуация похожая: турист часто принимает решение только по тому, что видит и
                        читает онлайн.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры / мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof / доказательства</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {whyUsItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Работа полностью удалённая: вы присылаете информацию об объекте, мы создаём тексты без выездов и съёмочного дня." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы</h2>
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Таблица сравнения пакетов</h2>
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
                        <h3 className="text-xl font-bold text-white">Помощник выбора пакета</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/74">
                            <li>• Нужно быстро обновить основные тексты, объект небольшой → Basic.</li>
                            <li>• Хотите заполнить Booking профессионально и полностью → Standard.</li>
                            <li>• Несколько объектов или нужна работа с тремя языками → Full.</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">Не уверены? Напишите — рассчитаем за 5 минут.</p>
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
                text="Ваши тексты на Booking должны продавать — а не просто информировать."
                buttonLabel="Написать нам"
                href={WHATSAPP_URL}
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Contact block</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-white/72">
                            Напишите нам в WhatsApp или Telegram — ответим в течение 2 часов. Работаем удалённо по всей
                            Грузии: вам не нужно приезжать в офис.
                        </p>
                        <p className="mt-5 text-sm text-white/75">WhatsApp / Telegram: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">Тбилиси, работаем по всей Грузии</p>
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
                        Breus Media — контент-продакшн в Тбилиси. AI-описания для отелей: Booking, Airbnb, Expedia. На
                        русском, английском и грузинском.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки отелей в текстах OTA</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Что можно улучшить без покупки</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к созданию AI-описаний</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {additionalMaterials.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <p className="text-base font-bold text-white">{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {internalTransitions.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/45"
                            >
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Мини-словарь терминов</h2>
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
