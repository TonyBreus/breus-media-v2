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

const CANONICAL_URL = 'https://breus.media/promo-video/auto-service-detailing';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Детейлинг-студии, которые хотят продавать дорогие пакеты',
        text: 'Керамика, PPF и комплексный детейлинг лучше продаются, когда клиент видит процесс, а не только результат.',
    },
    {
        title: 'Автосервисы, уставшие от торга «у соседа дешевле»',
        text: 'Видео оборудования, стандартов и аккуратности помогает объяснить цену без долгих споров.',
    },
    {
        title: 'Кузовные мастерские с высоким уровнем работы',
        text: 'Сильный ремонт нужно показывать наглядно: путь от повреждения до финального результата.',
    },
    {
        title: 'СТО с современным диагностическим оборудованием',
        text: 'Когда клиент видит процесс диагностики и отчётность, ценность услуги становится понятной.',
    },
    {
        title: 'Дилеры с собственной сервисной базой',
        text: 'Видео усиливает доверие к бренду дилера и помогает продавать сервис вместе с автомобилем.',
    },
    {
        title: 'Любой автосервис, который хочет поток из Instagram, TikTok и сайта',
        text: 'Регулярные короткие ролики создают стабильный входящий спрос без постоянных скидок.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Переводит доверие в цифры',
        text: 'Клиент, который видел процесс работы на видео, чаще выбирает более дорогой пакет и реже торгуется.',
    },
    {
        title: 'Отстраивает от конкурентов по цене',
        text: 'Когда видно разницу в оборудовании, материалах и технологии, аргумент «у соседа дешевле» перестаёт быть главным.',
    },
    {
        title: 'Привлекает клиентов из Instagram без постоянных рекламных расходов',
        text: '«До/после» ролики в авто-нише дают органический охват и приводят людей, которые ещё не знали о сервисе.',
    },
    {
        title: 'Документирует качество и процесс',
        text: 'Видео приёмки и выдачи защищает от споров и упрощает коммуникацию в конфликтных ситуациях.',
    },
];

const painCards: Card[] = [
    {
        title: '«Клиенты выбирают по цене, а не по качеству»',
        text: 'Пока разница между сервисами не видна, клиент уходит к более дешёвому варианту. Видео делает качество визуально очевидным.',
    },
    {
        title: '«Объясняем словами — не убеждает»',
        text: 'Фразы про профессиональное оборудование и материалы звучат как реклама. Кадры реальной работы воспринимаются как доказательство.',
    },
    {
        title: '«Клиенты боятся оставлять дорогие машины»',
        text: 'Ролик о том, как вы работаете с премиальными авто, снимает тревогу ещё до первого визита.',
    },
    {
        title: '«Нет стабильного потока — то пусто, то очередь»',
        text: 'Нерегулярный контент даёт нерегулярные заявки. Контент-система даёт предсказуемый входящий спрос.',
    },
    {
        title: '«Отзывы есть, но новые клиенты их не находят»',
        text: 'Отзывы помогают тем, кто уже ищет вас. Reels находит аудиторию, которая ещё не знакома с сервисом.',
    },
    {
        title: '«Конкурент хуже, но раскручен лучше»',
        text: 'Качество без видимости проигрывает. Видео делает ваш реальный уровень заметным и запоминаемым.',
    },
];

const earnPoints: string[] = [
    'Продаёт дорогие пакеты: клиент видит этапы нанесения керамики и понимает, почему услуга стоит дороже.',
    'Снижает стоимость привлечения: запрос «нашёл вас по ролику» обычно самый дешёвый по цене лида.',
    'Увеличивает средний чек через видео-апселл: клипы про PPF и допуслуги продают расширенные пакеты мягко и без давления.',
    'Возвращает клиента на следующий сезон: когда сервис регулярно в ленте, повторное обращение происходит легче.',
];

const avoidLossPoints: string[] = [
    'Фиксирует состояние авто при приёмке и защищает от спорных претензий.',
    'Снижает количество рекламаций: честный показ процесса формирует реалистичные ожидания.',
    'Уменьшает зависимость от «сарафана»: контент масштабируется быстрее личных рекомендаций.',
    'Защищает ценовую позицию: клиент видит аргументацию цены в кадре, а не в переписке.',
];

const deliverables: string[] = [
    'Service Process Video (60-120 сек): приёмка авто, этапы работ, выдача клиенту.',
    'Detailing Before/After Showreel (30-60 сек): контрастные трансформации кузова, салона, полировки и керамики.',
    'Short Clips Library (10-20 фрагментов по 10-20 сек): Reels/TikTok/Stories из рабочих моментов.',
    'Trust Elements Overlays: вставки с материалами, брендами оборудования, гарантией, сертификатами.',
    'Usage & Offer Notes: рекомендации, как привязывать ролики к офферам и сезонным предложениям.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — детейлинг-студия запускает Instagram',
        text: 'Снимаем серию «до/после» по 5 кейсам, добавляем ASMR-процессы (полировка, пена, блеск). Результат: органический охват и входящие записи от людей, которые хотят такой же эффект.',
    },
    {
        title: 'Сценарий 2 — автосервис продаёт комплексное ТО',
        text: 'Показываем приёмку, диагностику, работу механика и финальную проверку. Клиент видит ценность комплексной услуги и меньше сравнивает только по цене.',
    },
    {
        title: 'Сценарий 3 — кузовная мастерская после сложного ремонта',
        text: 'Фиксируем путь «до/после»: повреждение, этапы восстановления, финальный результат и реакцию владельца. Такой контент становится лучшей витриной качества.',
    },
    {
        title: 'Сценарий 4 — пакет видео для сайта',
        text: 'Делаем один ролик «как мы работаем» и три отдельных по услугам (ТО, диагностика, детейлинг), чтобы каждая страница сайта сразу показывала процесс.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — детейлинг-студия, Сабуртало',
        text: 'Серия «до/после» со старым Porsche после полировки разошлась по локальным авто-сообществам и дала прямые записи из Instagram.',
    },
    {
        title: 'Кейс 2 — автосервис, Дигоми',
        text: 'Ролик по диагностике (подъёмник, сканер, механик, отчёт) снизил торг за цену диагностики и упростил объяснение ценности услуги.',
    },
    {
        title: 'Кейс 3 — PPF-студия, Тбилиси',
        text: 'Видео с полным процессом поклейки PPF на BMW стало самопродающим форматом: заявки приходили уже с пониманием пакета.',
    },
];

const socialProofBullets: string[] = [
    '«До/после» в авто-нише — один из самых сохраняемых форматов в Instagram.',
    'Сервисы, которые показывают процесс, обычно отмечают рост доверия и меньше конфликтных ситуаций.',
    'Кадры оборудования и материалов помогают удерживать цену выше рынка, потому что клиент видит, за что платит.',
    'ASMR-форматы детейлинга часто дают в 3-5 раз больше органики, чем обычные рекламные ролики.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что снимать в детейлинг-студии кроме «до/после»?',
        answer:
            '«До/после» — база, но хорошо работают и другие форматы: нанесение керамики, обзор оборудования, комментарий мастера, ASMR-процессы и мини-обзоры материалов.',
    },
    {
        question: 'Нужно ли показывать лица мастеров?',
        answer:
            'Желательно, потому что люди доверяют людям. Если команда не хочет лица в кадре, можно снимать руки, детали процесса и результат — это тоже эффективно.',
    },
    {
        question: 'Автосервис выглядит «обычно». Можно ли сделать сильный ролик?',
        answer:
            'Да. Даже в стандартном СТО можно красиво показать диагностику, инструмент, аккуратность работы и логику процесса. Подача и режиссура решают.',
    },
    {
        question: 'Как часто нужно снимать?',
        answer:
            'Базовый пакет обычно обновляют раз в квартал или при запуске новой услуги. Короткие Reels-клипы лучше снимать регулярно, примерно раз в месяц.',
    },
    {
        question: 'Можно ли использовать контент не только в Instagram?',
        answer:
            'Да. Process Video подходит для сайта и YouTube, короткие клипы — для Reels/TikTok/Shorts, а before/after-материалы — для Google Business и агрегаторов.',
    },
    {
        question: 'Снимаете ли вы кузовные мастерские?',
        answer:
            'Да. Кузовной ремонт — один из самых убедительных форматов, потому что трансформация «до/после» визуально очевидна и хорошо конвертирует.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеосъёмка детейлинга или автосервиса?',
        answer:
            'Basic-пакет — от 450 ₾ (Process Video + 5-7 Reels-клипов). Полный пакет с showreel, библиотекой клипов и overlay-графикой — от 1 000 ₾.',
    },
    {
        question: 'Достаточно одного съёмочного дня?',
        answer:
            'В большинстве случаев да: 5-7 часов хватает. Если много рабочих зон или сложные процессы, оптимально закладывать 2 съёмочных дня.',
    },
    {
        question: 'Нужно ли останавливать работу сервиса на время съёмки?',
        answer:
            'Нет. Обычно снимаем прямо в рабочем процессе, это делает ролик более убедительным и живым.',
    },
    {
        question: 'Что делать, если нет готового кейса для «до/после»?',
        answer:
            'Подбираем момент из текущей загрузки или заранее планируем автомобиль клиента на дату съёмки.',
    },
    {
        question: 'Входит ли графика (Trust Overlays) в стоимость?',
        answer:
            'Да, в Standard и Full. В Basic — как дополнительная опция по запросу.',
    },
    {
        question: 'Можно ли работать регулярно, раз в месяц?',
        answer:
            'Да. Есть формат абонемента: ежемесячная съёмка Reels и ежеквартальное обновление основного контента.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Снимаем процессы, а не «рекламную постановку»',
        text: 'Клиент автосервиса доверяет реальности. Мы показываем живую работу и честный результат.',
    },
    {
        title: 'Понимаем, что продаёт в авто-нише',
        text: 'В кадре не только красота, но и доказательства: оборудование, материалы, этапы и финальный эффект.',
    },
    {
        title: 'Полный пакет в одной съёмке',
        text: 'Process Video, showreel, короткие клипы и overlay-графика собираются в одном продакшн-цикле.',
    },
    {
        title: 'Быстро и без операционного хаоса',
        text: 'Один съёмочный день может закрыть контент-задачи на квартал вперёд.',
    },
    {
        title: 'Работаем на рост, а не только на «файлы»',
        text: 'Передаём не просто ролики, а рекомендации по офферам, публикациям и конверсионным сценариям.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф (1-2 дня)',
        text: 'Определяем услуги, целевую аудиторию и ключевые доказательства, которые должны быть в кадре.',
    },
    {
        title: 'Шаг 2. Подготовка (1-2 дня)',
        text: 'Составляем список кадров и согласовываем слот, когда у вас идут нужные процессы.',
    },
    {
        title: 'Шаг 3. Съёмочный день (5-7 часов)',
        text: 'Фиксируем приёмку, процесс, выдачу, рабочие зоны и детали сервиса в живом режиме.',
    },
    {
        title: 'Шаг 4. Монтаж (7-12 дней)',
        text: 'Собираем Process Video, before/after showreel, short-клипы и графические вставки.',
    },
    {
        title: 'Шаг 5. Передача + Usage Notes',
        text: 'Передаём структурированный пакет файлов и рекомендации по офферам и графику публикаций.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic - Процесс',
        price: 'от 800 ₾',
        audience: 'Первый видеоконтент о студии или сервисе, один ключевой формат',
        timeline: '7-12 рабочих дней',
        items: [
            'Process Video 60-90 сек (горизонтальный)',
            '5-7 Reels-клипов 15-20 сек',
            'Базовый монтаж',
            'Передача в MP4',
        ],
    },
    {
        title: 'Standard - Доказательство',
        price: 'от 900 ₾',
        audience: 'Полноценный контент-комплект для Instagram, сайта и офферов',
        timeline: '7-12 рабочих дней',
        featured: true,
        items: [
            'Process Video 90-120 сек',
            'Before/After Showreel 30-60 сек (горизонтальный + вертикальный)',
            '10-15 Reels-клипов',
            'Trust Elements Overlays (2-3 графики)',
            '10 фотографий + Usage Notes',
        ],
    },
    {
        title: 'Full - Библиотека',
        price: 'от 1 500 ₾',
        audience: 'Сервис с несколькими услугами и задачей закрыть контент на квартал',
        timeline: '7-12 рабочих дней',
        items: [
            'Process Videos x3 (полировка / керамика / ТО)',
            'Before/After Showreel (полный)',
            '20+ Reels-клипов',
            'Trust Overlays x5 + 20+ фото',
            'Posting schedule + Usage & Offer Notes + адаптации для TikTok/Shorts/Stories',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Публикуют только финальный результат без процесса',
        text: 'Красивое «после» привлекает взгляд, но не объясняет цену. Продаёт именно демонстрация этапов.',
    },
    {
        title: 'Снимают постановочно, а не в рабочем процессе',
        text: 'Постановка выглядит как реклама. Живой процесс воспринимается как честное доказательство.',
    },
    {
        title: 'Не используют графические вставки',
        text: 'Кадры процесса сильнее работают вместе с короткими пояснениями про материалы, бренды и гарантии.',
    },
    {
        title: 'Публикуют контент без оффера',
        text: 'Каждый ролик должен вести к действию: запись, пакет, сезонное предложение, диагностика перед покупкой.',
    },
    {
        title: 'Снимают один раз в год',
        text: 'Контент быстро «выгорает». Нужен регулярный поток коротких клипов и периодическое обновление ключевого ролика.',
    },
    {
        title: 'Показывают только «после», без исходного состояния',
        text: 'Трансформация продаёт лучше всего, поэтому «до» обязательно фиксируем в начале работ.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимайте «до» каждой машины на телефон при приёмке — это 2 минуты и готовый материал для контента.',
    'Публикуйте before/after в Stories с опросом «угадаете, что сделали?» для бесплатного интерактива.',
    'Добавьте в профиль Instagram информацию об оборудовании и материалах для более сильного позиционирования.',
    'Снимайте короткие 5-10 секундные клипы прямо в процессе: пена, полировка, свет, детали.',
    'Просите довольных клиентов записать 15-секундный отзыв у выдачи автомобиля.',
];

const checklistItems: string[] = [
    'Рабочее пространство чистое и аккуратное: лишние предметы убраны, визуальный шум минимален.',
    'Подготовлен реальный клиентский автомобиль для сильного «до/после».',
    'Оборудование готово к съёмке: полировальные машины, пеногенератор, подъёмник, диагностика.',
    'Согласована логика съёмки по этапам: приёмка -> процесс -> выдача.',
    'Команда предупреждена о съёмке и знает, как будет проходить день.',
    'Есть доступ к подъёмнику или смотровой зоне, если снимаем низ кузова.',
    'Свет в рабочих зонах достаточный или согласовано дополнительное освещение.',
    'Подготовлены материалы/бренды, которые хотите показать в кадре (керамика, PPF, масла).',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему «до/после» видео работает лучше любой рекламы в детейлинге?',
        answer: [
            'Трансформация — один из самых сильных визуальных триггеров: грязное становится чистым, тусклое становится блестящим, повреждённое становится восстановленным.',
            'Клиент проецирует увиденный «до»-кадр на свою машину, а «после»-кадр воспринимает как обещанный результат. Такой контент понятен без длинных объяснений.',
            'Плюс формат хорошо сохраняют «на потом», поэтому ролик продолжает приводить заявки и спустя недели после публикации.',
        ],
    },
    {
        question: 'Как правильно снимать ASMR-контент для детейлинг-студии?',
        answer: [
            'Нужны крупные планы, чистый направленный звук и аккуратное движение камеры. Важны звуки полировальной машины, пены и работы материалов.',
            'Сильный ASMR держится на синхроне картинки и звука: зритель должен почти физически ощущать процесс.',
            'Оптимальная связка — профессиональный беспроводной микрофон + стабилизатор + монтаж без перегруженной музыки.',
        ],
    },
    {
        question: 'Как привязывать видео к конкретным услугам, а не просто «для красоты»?',
        answer: [
            'Каждый ролик должен иметь чёткий оффер: например, «керамика от X ₾» или «диагностика перед покупкой за X ₾».',
            'Сценарий публикации: показываем процесс, фиксируем результат, добавляем призыв к записи и понятный срок действия предложения.',
            'Хорошо работают пакетные офферы: ТО + детейлинг, диагностика + миниполировка. Один ролик может продавать комбинацию услуг.',
        ],
    },
    {
        question: 'Как видео помогает сервису в конфликтных ситуациях с клиентами?',
        answer: [
            'Съёмка при приёмке фиксирует состояние автомобиля до начала работ и защищает от претензий «это вы поцарапали».',
            'Видео выдачи показывает, что именно было сделано и в каком состоянии машина передана клиенту.',
            'Таким образом, контент работает не только как маркетинг, но и как операционная защита сервиса.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое видеоконтент для детейлинга?',
        answer:
            'Это профессиональные ролики о процессах детейлинг-студии: до/после, нанесение керамики, полировка, выдача авто. Используются для Instagram, TikTok и сайта.',
    },
    {
        question: 'Зачем автосервису видео о своей работе?',
        answer:
            'Видео процессов формирует доверие, объясняет ценность услуги и помогает удерживать цену без постоянных скидок.',
    },
    {
        question: 'Сколько стоит съёмка детейлинг-студии в Тбилиси?',
        answer:
            'Базовый пакет начинается от 450 ₾. Полная контент-библиотека с несколькими форматами — от 1 500 ₾.',
    },
    {
        question: 'Что такое before/after showreel для детейлинга?',
        answer:
            'Это нарезка 30-60 секунд с несколькими трансформациями автомобиля до и после работ. Один из самых конверсионных форматов в соцсетях.',
    },
    {
        question: 'Помогает ли видео продавать дорогие пакеты детейлинга?',
        answer:
            'Да. Когда клиент видит этапы нанесения керамики и стандарты работ, он лучше понимает цену и реже торгуется.',
    },
    {
        question: 'Нужно ли снимать лица мастеров?',
        answer:
            'Желательно, но не обязательно. Если сотрудники не хотят лица в кадре, можно строить ролик на руках, инструментах и результате.',
    },
    {
        question: 'Как использовать детейлинг-видео в соцсетях?',
        answer:
            'Process Video размещают на сайте и YouTube, а short clips и before/after — в Instagram Reels, TikTok и Stories с привязкой к офферу.',
    },
    {
        question: 'Снимаете ли вы ASMR-контент для детейлинга?',
        answer:
            'Да. Это формат с акцентом на звук и крупные планы процесса: полировка, пена, блеск, защита покрытия.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Наш сервис выглядит обычно, из него не сделать красивый ролик.',
        reality:
            'Сильная подача строится на свете, ракурсе, динамике и деталях процесса. Дизайнерский интерьер не обязателен.',
    },
    {
        myth: 'Клиенты смотрят только цену, видео не важно.',
        reality:
            'Клиенты уходят в цену, когда не видят разницы. Видео как раз создаёт видимую разницу между сервисами.',
    },
    {
        myth: 'Мы загружены, контент нам не нужен.',
        reality:
            'Загрузка сегодня не гарантирует загрузку завтра. Контент формирует очередь и репутацию на будущее.',
    },
    {
        myth: 'Фото «до/после» достаточно, видео необязательно.',
        reality:
            'Видео удерживает внимание дольше и передаёт то, что фото не может: звук, движение, реакцию клиента.',
    },
    {
        myth: 'Нужно снять один хороший ролик и забыть.',
        reality:
            'Один ролик даёт точечный эффект. Регулярный поток клипов создаёт системное привлечение.',
    },
];

const glossary: Card[] = [
    {
        title: 'Детейлинг',
        text: 'Профессиональная обработка автомобиля: полировка, керамика, PPF, химчистка и уход за материалами салона.',
    },
    {
        title: 'PPF (Paint Protection Film)',
        text: 'Прозрачная защитная плёнка для кузова, которая снижает риск сколов и мелких царапин.',
    },
    {
        title: 'ASMR-контент',
        text: 'Видео с акцентом на звук и крупные планы процесса, создающее эффект присутствия.',
    },
    {
        title: 'Process Video',
        text: 'Ролик с этапами работ от приёмки автомобиля до выдачи результата клиенту.',
    },
    {
        title: 'Trust Overlays',
        text: 'Графические вставки с материалами, брендами оборудования, гарантиями и сертификатами.',
    },
    {
        title: 'Before/After Showreel',
        text: 'Смонтированная нарезка трансформаций «до/после», которая быстро показывает ценность услуги.',
    },
];

const notFitPoints: string[] = [
    'Сервисам с низким качеством работы, которые хотят «перекрыть» это красивой картинкой.',
    'Командам, которые не готовы дать реальный рабочий процесс для съёмки.',
    'Проектам с ожиданием мгновенного потока заказов через неделю после публикации.',
    'Сервисам, которые не готовы к регулярности и хотят снять один раз «на годы».',
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
            name: 'Видеоконтент для автосервиса и детейлинга',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Before/After Showreel для автосервиса и детейлинга — пример формата',
    description:
        'Пример формата видеоконтента для автосервиса и детейлинга: процесс работ, before/after трансформация и trust-элементы.',
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
    name: 'Видеоконтент для автосервиса и детейлинга в Тбилиси',
    description:
        'Process video, before/after showreel и Reels-клипы для детейлинг-студий, автосервисов и кузовных мастерских.',
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
        price: '450',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Видеоконтент для автобизнеса в Тбилиси: process video, before/after, Reels и контент-стратегия.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеосъёмка детейлинга и автосервиса в Тбилиси | Breus Media',
    description:
        'Видеоконтент для детейлинг-студий и автосервисов в Тбилиси. Process video, before/after, Reels-клипы. Показываем процессы и качество. От 450 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеоконтент для автосервиса и детейлинга — process video и before/after',
        description:
            'Показываем процесс изнутри: оборудование, материалы, команду и результат. Контент для Instagram, TikTok, сайта и YouTube.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function AutoServiceDetailingPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Auto Service & Detailing · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеоконтент для автосервиса и детейлинга — показ процесса и качества
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Клиент не верит на слово — он верит тому, что видит.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Детейлинг-студия или автосервис в Тбилиси — это бизнес на доверии. Клиент оставляет дорогую
                        машину незнакомым людям и надеется на аккуратную работу. Большинство конкурентов объясняют
                        качество словами. Те, кто показывает процесс, оборудование и результат, выигрывают. Один
                        правильный ролик с «до/после» и живой работой команды делает больше, чем десятки текстовых
                        отзывов.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку детейлинга / сервиса
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
                        Мы снимаем весь рабочий процесс: от приёмки автомобиля до выдачи результата. Полировка,
                        керамика, химчистка, кузовной ремонт, диагностика — превращаем ваши реальные процессы в
                        убедительный видеоконтент. Клиент видит не «мы делаем качественно», а «вот как именно это
                        делается». На выходе вы получаете основной ролик, before/after-шоурил и библиотеку коротких
                        клипов для Reels, Stories и TikTok.
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
                                <p>Process Video: MP4 1080p (16:9), Showreel: горизонтальный + вертикальный, Short Clips: 9:16, Overlays: PNG.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>7-12 рабочих дней с момента съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive, структурировано по типам роликов и материалам.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Клиенты, которые видели ваш процесс на видео, платят больше и торгуются меньше. Покажите им свою работу."
                buttonLabel="Обсудить съёмку детейлинга / сервиса"
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
                        Детейлинг и автосервис в Тбилиси — высококонкурентный рынок: десятки студий в Дигоми, Вере,
                        Сабуртало и других районах, сотни аккаунтов в Instagram. Большинство показывают только
                        финальные фото и акции. Те, кто показывает живой процесс, выделяются сразу. Для локального
                        клиента прозрачность особенно важна, когда речь идёт о дорогом автомобиле.
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
                    <h2 className="text-3xl font-bold mb-4">Пример before/after showreel</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь можно разместить текущий кейс из портфолио по детейлингу или автосервису.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеоконтента для автосервиса и детейлинга"
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

            <ProcessNote text="Детейлинг и сервис — бизнес на доверии, поэтому мы начинаем с вопроса: что именно нужно доказать клиенту в кадре. Снимаем не всё подряд, а только то, что реально убеждает вашу аудиторию." />

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
                        <table className="w-full text-sm min-w-[820px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Что входит</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 450₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 900₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1500₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Process Video</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Before/After Showreel</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ (полный)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Reels-клипы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-7 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10-15 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">20+ шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Trust Overlays</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2-3 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фотографии</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">20+ шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">TikTok / Shorts адаптация</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Usage & Offer Notes</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Posting schedule</td>
                                    <td className="p-3">—</td>
                                    <td className="p-3">—</td>
                                    <td className="p-3">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Нужен первый ролик о студии для сайта или соцсетей — выбирайте Basic.</li>
                            <li>Нужен полноценный набор: Instagram + сайт + before/after — выбирайте Standard.</li>
                            <li>Несколько услуг и цель закрыть квартал контентом — выбирайте Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не знаете, с чего начать? Напишите в WhatsApp/Telegram: {CONTACT_PHONE}. Разберём задачу
                            за 15 минут.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваша работа стоит того, чтобы её увидели до звонка. Покажем процесс так, чтобы он продавал."
                buttonLabel="Получить расчёт для детейлинга / сервиса"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для автобизнеса
                                </Link>{' '}
                                — короткие ролики для постоянного присутствия в соцсетях.
                            </li>
                            <li>
                                <Link href="/auto-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Имиджевое видео автосалона
                                </Link>{' '}
                                — брендовый ролик для дилеров и сервисной базы.
                            </li>
                            <li>
                                <Link href="/360-tour-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур для автобизнеса
                                </Link>{' '}
                                — виртуальный осмотр студии или сервиса до визита клиента.
                            </li>
                            <li>
                                <Link href="/drone-services/drone-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    Обзорный видеоконтент по автомобилям
                                </Link>{' '}
                                — если параллельно развиваете и направление продаж авто.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Если вам нужен регулярный охват и частые касания с аудиторией, добавьте{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels-съёмку на абонементе
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Если хотите, чтобы клиент мог «зайти» в сервис онлайн ещё до звонка, посмотрите{' '}
                            <Link href="/360-tour-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                360° тур для автобизнеса
                            </Link>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки автобизнеса в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке сервиса/детейлинга</h2>
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
                        <li>Контент-план для детейлинг-студии на 30 дней.</li>
                        <li>Гайд: как снять ASMR-детейлинг самостоятельно.</li>
                        <li>
                            Регулярный short-form контент: {' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для автобизнеса
                            </Link>
                            .
                        </li>
                        <li>Практика: как видео повышает средний чек в сервисном бизнесе.</li>
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
                            Находимся в Тбилиси, работаем по всей Грузии. Напишите в Telegram/WhatsApp или позвоните:
                            {` ${CONTACT_PHONE}`}. Подскажем, что именно стоит снять в вашей студии или сервисе.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp / Telegram: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия · breus.media</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — видеоконтент для детейлинга и автосервисов в Тбилиси. Process video,
                        before/after, Reels-клипы. Показываем работу изнутри. От 450 ₾.
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
