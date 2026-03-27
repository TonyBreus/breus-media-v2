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

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-auto';
const PAGE_TITLE = 'Reels для автобизнеса в Тбилиси — ролики для соцсетей | Breus Media';
const PAGE_DESCRIPTION =
    'Профессиональные Reels для автосалонов, детейлинга и автосервисов в Тбилиси. 10-20 роликов за один день. Органический охват на MyAuto-аудиторию. От 350 ₾.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const SITE_URL = 'https://breus.media';

const VIDEO_EMBED_URL = 'https://cdn.pixabay.com/video/2021/08/04/83866-584724838_tiny.mp4';
const VIDEO_PAGE_URL = 'https://cdn.pixabay.com/video/2021/08/04/83866-584724838_tiny.mp4';
const VIDEO_THUMBNAIL_URL =
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80';

const heroSubtitle =
    'Машины в наличии, а заявок из Instagram нет? Превратим ваш сток и процессы в поток коротких роликов, которые приводят покупателей в директ и WhatsApp.';

const heroIntro =
    'Алгоритмы Instagram и TikTok продвигают видео бесплатно — если оно снято правильно. Для автобизнеса в Тбилиси это возможность получать горячие заявки без платной рекламы: покупатели сами находят площадку, листая ленту. Automotive Reels — это не просто красивые ролики, это регулярный контент-конвейер: обзоры машин, детейлинг до/после, жизнь площадки, советы по выбору. Каждый ролик работает как отдельная точка входа для нового клиента.';

const serviceIntro =
    'Automotive Reels — это пакет коротких вертикальных видео (15-60 секунд) специально для Instagram, TikTok и YouTube Shorts. Мы снимаем и монтируем ролики о ваших машинах, процессах и площадке — с правильными хуками, подписями и музыкой. Вы получаете готовый контент, который остается только опубликовать. Один съемочный день — 10-20 роликов, которых хватит на месяц регулярного постинга.';

const audienceItems = [
    'Автосалонам и дилерам с активным ассортиментом, которые хотят заявки из соцсетей.',
    'Детейлинг-студиям, продающим через визуальный формат до/после.',
    'Автосервисам, которые хотят показать процессы и привлечь новых клиентов.',
    'Частным продавцам и автоподборщикам, строящим личный бренд эксперта.',
    'Площадкам Руставского авторынка, работающим с покупателями из СНГ.',
    'Любому автобизнесу, у которого Instagram ведется как-нибудь — фото без системы.',
];

const taskCards: Card[] = [
    {
        title: 'Органический трафик без рекламного бюджета',
        text: 'Регулярные Reels с правильными хуками продвигаются алгоритмами бесплатно — ваши машины видят люди, которые раньше о вас не знали.',
    },
    {
        title: 'Узнаваемость бренда на рынке Тбилиси',
        text: 'Когда покупатель видит ваши ролики несколько раз, он идет к вам даже в условиях ценовой конкуренции.',
    },
    {
        title: 'Быстрые заявки прямо с ролика',
        text: 'Прямая воронка: увидел Reels -> написал в директ или WhatsApp -> пришел на площадку -> купил.',
    },
    {
        title: 'Доказательство качества детейлинга и сервиса',
        text: 'Лучше один ролик до/после, чем сто отзывов: визуальное подтверждение качества срабатывает сразу.',
    },
];

const painCards: Card[] = [
    {
        title: 'Instagram есть, а заявок нет',
        text: 'Профиль создан, иногда публикуются фото машин, но подписчики не растут и никто не пишет. Проблема обычно не в спросе, а в формате: алгоритмы продвигают видео сильнее фото.',
    },
    {
        title: 'Снимаем сами, но выглядит непрофессионально',
        text: 'Телефонные видео без монтажа, звука, музыки и хука чаще всего пролистывают. Первые 2 секунды решают все.',
    },
    {
        title: 'Нет времени на контент',
        text: 'Вы торгуете и обслуживаете авто, а не ведете блог. Один съемочный день в месяц закрывает 30 дней контента без ежедневной суеты.',
    },
    {
        title: 'Машины хорошие, но страница выглядит слабее конкурентов',
        text: 'При одинаковом стоке выигрывает тот, у кого визуальная упаковка сильнее. Контент продает ощущение качества и доверия.',
    },
    {
        title: 'Не знаем, что снимать кроме фото машин',
        text: 'Машины — только часть контента. Остальное: процессы, команда, история площадки, советы по выбору, жизнь авторынка, детейлинг, разборы моделей.',
    },
    {
        title: 'Сняли пару Reels, эффекта не было',
        text: '2-3 ролика не дают выводов. Алгоритм разогревается при регулярности: 10-15 роликов за 4-6 недель дают первую объективную динамику.',
    },
];

const earnPoints = [
    'Бесплатный органический трафик: сильный Reels показывается тысячам пользователей без рекламных расходов.',
    'Горячие заявки с контента: клиент, который сам нашел вас по видео, обычно быстрее принимает решение.',
    'Рост среднего чека в детейлинге: формат до/после легче продает дорогие пакеты и керамику.',
    'YouTube Shorts как долгосрочный актив: те же ролики дают стабильный поток просмотров и подписчиков.',
];

const avoidLossPoints = [
    'Меньше зависимости от платных объявлений: органика снижает нагрузку на рекламный бюджет.',
    'Репутация, которую сложно скопировать: архив видео формирует историю бренда и доверие.',
    'Защита от демпинга: узнаваемый бренд меньше живет в ценовой войне.',
    'Стабильный поток обращений вместо разовых всплесков после акций.',
];

const deliverables = [
    'Пакет Reels: 10-20 вертикальных роликов 15-60 секунд, готовых к публикации.',
    'Hook & Caption Bank: цепляющие первые строки и подписи к каждому ролику на RU (EN по запросу).',
    'Музыкальные рекомендации: подборка трендовых звуков и треков под каждый тип ролика.',
    'Контент-ритм: простой план, сколько роликов в неделю и в какие дни публиковать.',
    'Tagging Notes: рекомендации по хэштегам и геотегам (Тбилиси, Рустави, MyAuto, Georgia).',
    'Варианты обложек: превью-кадры, оптимизированные для ленты.',
    'Вертикальная адаптация: 9:16 для Reels, TikTok, Shorts и Stories.',
];

const outputItems = [
    'Форматы: MP4, 1080x1920 (9:16), готово к публикации без дополнительной обработки.',
    'Обложки: JPG.',
    'Caption bank: Google Docs или текстовый файл.',
    'Сроки: 5-10 рабочих дней с момента съемки.',
    'Передача: Google Drive или WeTransfer с папочной структурой по типу ролика.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Дилер хочет заявки из Instagram без платной рекламы',
        text: 'Снимаем обзоры 5-6 машин из наличия и атмосферные кадры площадки, монтируем 15 роликов, даем план публикаций. Через месяц регулярного постинга появляются первые органические заявки с пометкой нашел по видео.',
    },
    {
        title: 'Сценарий 2 — Детейлинг-студия продает дорогие пакеты',
        text: 'Делаем серию до/после: грязный кузов -> полировка -> керамика -> финал. Добавляем ASMR-процессы. Такой контент не объясняет, он продает результат.',
    },
    {
        title: 'Сценарий 3 — Экспортный дилер на Руставском авторынке',
        text: 'Снимаем лоты с акцентом на честность: подъемник, кузов, пробег. Подписи RU/EN. Контент помогает покупателям выбирать машину удаленно.',
    },
    {
        title: 'Сценарий 4 — Автоподборщик строит личный бренд эксперта',
        text: 'Снимаем серию экспертных роликов: на что смотреть при покупке, какие вопросы задавать продавцу, как проверить авто из Грузии. Это привлекает и подписчиков, и клиентов.',
    },
];

const localContextText =
    'Тбилиси — это десятки тысяч автомобилей в продаже одновременно: Дигоми, авторынок Рустави, частные площадки. Покупатель сегодня листает Instagram так же активно, как MyAuto. Automotive Reels работает как органический поиск в соцсетях: человек ищет авто в Тбилиси, видит ваш ролик, пишет в директ. Важная специфика региона: грузинский авторынок активно работает на экспорт (Казахстан, Россия, Азербайджан, Армения), и русскоязычные Reels с грузинской геолокацией попадают именно к этой аудитории.';

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Детейлинг-студия, Тбилиси',
        text: 'Запустили Reels до/после: ржавчина и грязь -> блестящий кузов после покрытия. Появились регулярные сообщения в стиле видел ваше видео, хочу такую же керамику.',
    },
    {
        title: 'Кейс 2 — Дилер BMW/Mercedes, Дигоми',
        text: 'Серия из 12 роликов: 8 по наличию + 4 образовательных. Первые заявки из Instagram пришли через 3 недели регулярного постинга.',
    },
    {
        title: 'Кейс 3 — Экспортная площадка, Рустави',
        text: 'Лоты недели с акцентом на прозрачность: кузов, подъемник, VIN-табличка. Ролики начали репостить в экспортных чатах СНГ.',
    },
];

const socialProofItems = [
    '90% пользователей отмечают, что видео помогает принять решение о покупке автомобиля.',
    'Автодилеры с активным Reels-контентом обычно получают в 2-4 раза больше входящих из соцсетей по сравнению с фото-публикациями.',
    'Детейлинг-центры с регулярным форматом до/после легче продают премиальные пакеты — клиент видит результат до оплаты.',
    'Органические Reels об авторынке Тбилиси попадают к аудитории из Казахстана, России и Азербайджана — ключевых рынков экспорта.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем Reels отличаются от обычных видео в Instagram?',
        answer:
            'Reels — это короткие вертикальные ролики, которые алгоритм показывает не только вашим подписчикам, но и новой аудитории. Поэтому именно Reels дает органический охват, а не только удержание текущей базы.',
    },
    {
        question: 'Нужно ли снимать каждый день?',
        answer: 'Нет. Рабочий ритм — 3-5 роликов в неделю. Один съемочный день обычно закрывает 3-4 недели регулярного постинга.',
    },
    {
        question: 'Мы маленькая площадка. Нам это подходит?',
        answer:
            'Да. Небольшие площадки с честным живым контентом часто обходят крупных конкурентов по вовлеченности. Аудитория ценит реальность и прозрачность.',
    },
    {
        question: 'Что делать с роликами после передачи?',
        answer:
            'Публиковать по расписанию, которое мы передаем вместе с контентом: использовать готовые подписи, геотег Тбилиси/Рустави и рекомендованные хэштеги. Отвечать на комментарии, чтобы усилить сигнал для алгоритма.',
    },
    {
        question: 'Можно ли адаптировать эти Reels для платной рекламы?',
        answer:
            'Да. Часть роликов можно сразу собирать под требования таргета. Сообщите заранее, и мы учтем это в сценариях и монтаже.',
    },
    {
        question: 'Подойдут ли Reels для TikTok и YouTube Shorts?',
        answer:
            'Да. Мы отдаем вертикальный MP4, подходящий для всех трех платформ. Обычно меняются только подписи и хэштеги.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит пакет Reels для автобизнеса?',
        answer:
            'Мини-пакет начинается от 200 ₾ (3-5 роликов). Базовый пакет Старт — от 350 ₾. Месячный стандартный пакет 12-15 роликов — от 650 ₾.',
    },
    {
        question: 'Что входит в базовую цену?',
        answer: 'Съемка, монтаж, базовая цветокоррекция, готовые файлы MP4. Подписи и музыкальные рекомендации включены.',
    },
    {
        question: 'Можно оформить регулярную съемку раз в месяц?',
        answer: 'Да. Для подписки на 3+ месяцев обычно даем специальную стоимость. Регулярность — ключ к прогнозируемому результату.',
    },
    {
        question: 'Сколько длится съемка на площадке?',
        answer: 'Обычно 3-5 часов. При желании совмещаем Reels со съемкой имиджевого или обзорного видео в тот же день.',
    },
    {
        question: 'Нужно ли что-то готовить заранее?',
        answer:
            'Минимально: вымытые машины, порядок на площадке и согласованный список авто/процессов. Детальный чек-лист отправляем накануне.',
    },
    {
        question: 'Когда ожидать первые заявки?',
        answer:
            'Обычно алгоритм разогревается 3-6 недель регулярного постинга. Реалистичный горизонт первых органических заявок — 1-2 месяца, а не 2-3 ролика.',
    },
];

const whyBreusItems = [
    'Знаем формулу автомобильных Reels: хук, ракурс, темп монтажа и логика подачи именно для авто-ниши.',
    'Локальная экспертиза: понимаем специфику MyAuto, Рустави, грузинского экспорта и русскоязычной аудитории.',
    'Пакетный подход: один съемочный день = месяц контента.',
    'Готовность к публикации: файлы, подписи, музыка и рекомендации — без доработок с вашей стороны.',
    'Фокус на результате: оцениваем заявки и продажи, а не только просмотры.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (1-2 дня)',
        text: 'Обсуждаем ассортимент, аудиторию, ключевые задачи и уже существующий контент.',
    },
    {
        step: 'Шаг 2',
        title: 'Кадровый план (2-3 дня)',
        text: 'Формируем список роликов: типы, форматы, хуки и приоритеты по машине/услуге.',
    },
    {
        step: 'Шаг 3',
        title: 'Съемочный день (3-5 часов)',
        text: 'Снимаем материал на площадке по готовому плану без хаотичных дублей.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж (5-8 дней)',
        text: 'Собираем ролики, добавляем музыку, субтитры и цветокоррекцию под платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и инструктаж (1 день)',
        text: 'Отдаем готовые файлы, план публикаций и caption bank с рекомендациями по запуску.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic — Старт',
        price: 'от 350 ₾',
        subtitle: 'Первый опыт с Reels и тест формата.',
        audience: 'Для кого: небольшая площадка или запуск короткого видео с нуля.',
        timeline: 'Срок: 5-7 рабочих дней.',
        features: ['5 вертикальных роликов 15-45 сек.', 'Базовый монтаж и музыка.', 'Подписи RU.', 'Готовые файлы MP4.'],
    },
    {
        title: 'Standard — Поток',
        price: 'от 650 ₾',
        subtitle: 'Регулярный контент на месяц с системой публикаций.',
        audience: 'Для кого: активный автобизнес, которому нужен стабильный поток роликов.',
        timeline: 'Срок: 5-8 рабочих дней.',
        features: [
            '12-15 роликов: машины, процессы, атмосфера.',
            'Профессиональный монтаж и хуки.',
            'Caption bank и план публикаций.',
            'Tagging notes: хэштеги и геотеги.',
            'Подписи RU/EN.',
        ],
        featured: true,
    },
    {
        title: 'Full — Экосистема',
        price: 'от 1 100 ₾',
        subtitle: 'Полный контент-микс для масштабируемого присутствия во всех платформах.',
        audience: 'Для кого: дилеры с YouTube-каналом, экспортные площадки, детейлинг с высоким чеком.',
        timeline: 'Срок: 7-10 рабочих дней.',
        features: [
            '20+ роликов: полный микс форматов.',
            'Адаптации для TikTok, Shorts и Stories.',
            'Music & trend guide.',
            'Posting rhythm + content calendar.',
            'Рекомендации для таргетированной рекламы.',
            'Подписи RU/EN.',
        ],
    },
];

const packageCompareRows = [
    ['Количество роликов', '5 шт', '12-15 шт', '20+ шт'],
    ['Хуки и динамичный монтаж', 'базовый', '✓', '✓'],
    ['Подписи RU', '✓', '✓', '✓'],
    ['Подписи EN', '—', '✓', '✓'],
    ['Caption bank', '—', '✓', '✓'],
    ['План публикаций', '—', '✓', '✓'],
    ['TikTok / Shorts адаптация', '—', '—', '✓'],
    ['Content calendar', '—', '—', '✓'],
    ['Рекомендации для таргета', '—', '—', '✓'],
    ['Цена', '350 ₾', '650 ₾', '1 100 ₾'],
];

const packagePickerItems = [
    'Хочу попробовать и понять, как работает -> Basic. 5 роликов дадут первый тест и цифры.',
    'Нужен контент на весь месяц -> Standard. 12-15 роликов с планом публикаций.',
    'Строю YouTube-канал, активную страницу и экспорт -> Full. Полный контент-микс с адаптациями.',
    'Хотите совместить Reels с имиджевым видео? Обычно это выгоднее — обсудим комбинированный съемочный день.',
];

const relatedServices = [
    {
        title: 'Имиджевое видео для авто-бизнеса',
        href: '/auto-service',
        text: 'Фирменный ролик о площадке, бренде и сервисе для сайта и соцсетей.',
    },
    {
        title: 'Обзорный видеоконтент по автомобилям',
        href: '/promo-video-service',
        text: 'Детальные обзоры моделей и лотов для YouTube и карточек продаж.',
    },
    {
        title: 'Видео для автосервиса и детейлинга',
        href: '/drone-services/drone-auto',
        text: 'Сценарии до/после, процессы в сервисе и экспертные форматы.',
    },
    {
        title: '360° тур для автосалона',
        href: '/360-tour-auto',
        text: 'Интерактивный виртуальный тур по шоуруму и зоне обслуживания.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Публикуют только фото машин',
        text: 'В 2024-2026 алгоритмы заметно сместили приоритет в сторону вертикального видео. Профиль только с фото растет значительно медленнее.',
    },
    {
        title: 'Начинают Reels и бросают через 2-3 ролика',
        text: 'Алгоритм начинает стабильно распознавать аккаунт после 10-15 роликов за 4-6 недель. До этого статистика часто шумная.',
    },
    {
        title: 'Снимают только машины и игнорируют процессы',
        text: 'Форматы до/после, подъемник, детейлинг и разгрузка нового стока часто дают выше вовлеченность, чем сухие карточки авто.',
    },
    {
        title: 'Нет хука в первые 2 секунды',
        text: 'Если ролик стартует с логотипа или длинной панорамы, его пролистывают. Вход нужен через интригу, вопрос, цифру или резкий визуальный акцент.',
    },
    {
        title: 'Один формат на все случаи',
        text: 'Нужен микс: продающий, образовательный, атмосферный и развлекательный контент. Один тип роликов быстро выгорает.',
    },
    {
        title: 'Не отвечают на комментарии',
        text: 'Ответы в комментариях повышают вовлеченность, а вместе с ней и вероятность дополнительного органического показа.',
    },
];

const freeImprovements = [
    'Переснимите 3-5 лучших машин из наличия прямо сейчас: вертикально, при нормальном свете, с понятным первым кадром.',
    'Добавляйте геотег Тбилиси/Рустави к каждому ролику — это усиливает локальный охват.',
    'Используйте трендовую музыку из Reels Audio, чтобы повысить шанс попадания в рекомендации.',
    'Покажите честный до/после детейлинга — это один из самых сильных форматов в авто-нише.',
    'Добавляйте четкий CTA в конце: напишите в директ, цена в WhatsApp, есть в наличии.',
];

const shootChecklist = [
    'Выбраны 5-8 ключевых машин для обзорных роликов.',
    'Машины вымыты, колеса чистые, в салоне порядок.',
    'Площадка убрана, лишние предметы убраны из кадра.',
    'Есть доступ к зоне детейлинга или сервиса, если снимаем процессы.',
    'Команда предупреждена о съемке, нет случайных людей в кадре.',
    'Согласовано время съемки: утром или во второй половине дня для мягкого света.',
    'Согласованы типы роликов: обзоры, детейлинг, жизнь площадки, советы.',
    'Подготовлены данные для подписей: цены, характеристики, спецусловия.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему алгоритм любит Reels больше, чем фото?',
        paragraphs: [
            'Instagram и TikTok заинтересованы удерживать внимание пользователя как можно дольше. Короткое видео делает это лучше статичного формата, поэтому получает более сильный органический пуш.',
            'Для автобизнеса это означает, что один рабочий ролик может принести тысячи просмотров без рекламного бюджета. Ключевая метрика — удержание: чем выше досмотр, тем шире охват.',
        ],
    },
    {
        question: 'Какие форматы Reels лучше конвертируют в авто-нише?',
        paragraphs: [
            'Лучше всего работают честные форматы: до/после детейлинга, что можно купить за определенный бюджет, сегодня на площадке, разбор конкретного лота.',
            'Слабее работают слайдшоу с характеристиками. В Reels люди покупают через эмоцию + доверие, а не через перечисление цифр.',
        ],
    },
    {
        question: 'Как измерять эффективность Reels для автобизнеса?',
        paragraphs: [
            'Смотрите не только лайки, а прямые бизнес-сигналы: входящие сообщения с фразой видел ваш ролик, переходы в профиль, сохранения, запросы в WhatsApp.',
            'Добавьте простой вопрос каждому новому клиенту: как вы нас нашли? Уже 2-3 органических обращения в месяц могут окупать регулярную съемку.',
        ],
    },
    {
        question: 'Делать контент только на русском или добавлять английский?',
        paragraphs: [
            'Для грузинского автобизнеса обычно оптимален основной контент на RU с дополнительными EN-подписями или субтитрами. Это расширяет охват без удвоения производства.',
            'Так вы покрываете русскоязычную аудиторию СНГ и часть англоязычных покупателей в Тбилиси и на экспорт.',
        ],
    },
];

const shortQa = [
    {
        question: 'Что такое Automotive Reels?',
        answer:
            'Короткие вертикальные видео 15-60 секунд для Instagram, TikTok и YouTube Shorts о машинах, детейлинге и жизни автоплощадки.',
    },
    {
        question: 'Зачем автосалону делать Reels?',
        answer:
            'Алгоритмы продвигают видео органически, поэтому вы получаете охват среди потенциальных покупателей даже без постоянного рекламного бюджета.',
    },
    {
        question: 'Сколько стоят Reels для автобизнеса в Тбилиси?',
        answer: 'Пакет Старт начинается от 350 ₾ за 5 роликов. Полноценный месячный пакет 12-15 роликов — от 650 ₾.',
    },
    {
        question: 'Как быстро Reels дают заявки?',
        answer: 'Обычно первые стабильные сигналы приходят за 1-2 месяца регулярного постинга (10-15 роликов).',
    },
    {
        question: 'Подходят ли Reels для продажи авто на экспорт?',
        answer: 'Да. RU/EN-подписи и геотег Грузии/Рустави помогают попадать в аудиторию экспортных рынков СНГ.',
    },
    {
        question: 'Можно ли тот же ролик публиковать в TikTok?',
        answer: 'Да. Мы отдаем вертикальный MP4, который подходит для Reels, TikTok и YouTube Shorts без перемонтажа.',
    },
    {
        question: 'Что снимать кроме самих машин?',
        answer:
            'Детейлинг до/после, работу сервиса, атмосферу площадки, советы по выбору, разбор нового поступления, экспертные объяснения.',
    },
    {
        question: 'Работаете ли вы с Руставским авторынком?',
        answer: 'Да. Работаем по всей Грузии: Тбилиси, Рустави, Дигоми и другие города по договоренности.',
    },
] as const;

const additionalMaterials = [
    {
        title: '10 идей для Reels автодилера',
        href: '/reels-promo/reels-auto',
        text: 'Практические форматы роликов для стока, обзоров и экспертизы.',
    },
    {
        title: 'Как работает алгоритм Instagram для бизнес-аккаунтов',
        href: '/reels-promo/reels-auto',
        text: 'Короткий разбор сигналов: удержание, сохранения, комментарии, досмотры.',
    },
    {
        title: 'Имиджевое видео автосалона: следующий шаг после Reels',
        href: '/auto-service',
        text: 'Как добавить длинный якорный ролик на сайт и в презентации.',
    },
    {
        title: 'Reels для ресторанов — похожая модель контент-потока',
        href: '/reels-promo/reels-restaurant',
        text: 'Пример, как система short-form работает в другой нише.',
    },
];

const internalTransitions = [
    {
        text: 'Нужен якорный ролик о площадке для сайта и MyAuto? Смотрите имиджевое видео для автобизнеса.',
        href: '/auto-service',
    },
    {
        text: 'Для длинных обзоров моделей и экспортных лотов можно добавить обзорный видеоформат.',
        href: '/promo-video-service',
    },
    {
        text: 'Хотите объединить Reels + имидж + обзоры в один съемочный день? Напишите нам за расчетом комбинированного пакета.',
        href: '#contact',
    },
];

const myths: MythItem[] = [
    {
        myth: 'Reels — это только для молодежи, наши клиенты так машины не ищут.',
        reality:
            'Активная аудитория Instagram в Грузии и СНГ — в том числе 25-45 лет, то есть ядро покупателей авто. Reels потребляют именно в моменты спонтанного выбора.',
    },
    {
        myth: 'Нужна большая аудитория, чтобы Reels работали.',
        reality:
            'Reels показываются незнакомой аудитории независимо от числа подписчиков. Аккаунт с 300 подписчиками может получить десятки тысяч просмотров на удачном ролике.',
    },
    {
        myth: 'Снимем 3 ролика и поймем все по результату.',
        reality:
            '3 ролика — слишком мало для вывода. Минимальный тест — 10-15 роликов за 4-6 недель с регулярной публикацией.',
    },
    {
        myth: 'Детейлинг-контент не привлекает новых клиентов.',
        reality:
            'До/после в детейлинге — один из самых вирусных форматов. Его сохраняют, пересылают и возвращаются, когда готовы записаться.',
    },
    {
        myth: 'Достаточно хэштегов, и алгоритм сам разгонит ролик.',
        reality:
            'Хэштеги важны, но это лишь часть сигналов. Гораздо сильнее влияют первые секунды, удержание, сохранения и активные комментарии.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Reels',
        definition: 'Короткий вертикальный формат в Instagram (до 90 секунд), который алгоритмы активно показывают широкой аудитории.',
    },
    {
        term: 'Хук (Hook)',
        definition: 'Первые 1-3 секунды ролика, которые должны остановить скролл: вопрос, сильный кадр, цифра или интрига.',
    },
    {
        term: 'Удержание (Retention)',
        definition: 'Процент зрителей, досмотревших видео до конца. Один из ключевых факторов органического продвижения.',
    },
    {
        term: 'Caption',
        definition: 'Подпись под роликом с CTA, ключевыми словами и хэштегами.',
    },
    {
        term: 'До/после (Before/After)',
        definition: 'Формат, который показывает результат услуги и хорошо работает для детейлинга и сервиса.',
    },
    {
        term: 'Органический охват',
        definition: 'Показы и просмотры, полученные бесплатно через алгоритмы, без платного продвижения.',
    },
];

const notFitItems = [
    'Тем, кто ожидает результат за 2 недели и 5 роликов — алгоритм требует регулярности.',
    'Командам, где некому публиковать контент после передачи материалов.',
    'Тем, кто хочет только красивую картинку без стратегии и цели в заявках.',
    'Если единственный критерий — самая низкая цена на рынке без погружения в нишу.',
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
            name: 'Reels и короткое видео',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для автобизнеса',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Automotive Reels пакета',
    description: 'Пример вертикального ролика для автосалона, детейлинга и автосервиса (Instagram Reels, TikTok, Shorts).',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
    uploadDate: '2026-03-22',
    publisher: {
        '@type': 'Organization',
        name: 'Breus Media',
        url: SITE_URL,
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
    name: 'Reels для автобизнеса в Тбилиси',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Georgia'],
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: SITE_URL,
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

export default function ReelsAutoPage() {
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
                    { label: 'Пакеты', href: '#packages' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="reels-auto-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=80')",
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
                                Reels для автобизнеса · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для автобизнеса — короткие видео для соцсетей и продвижения
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">{heroSubtitle}</p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Запустить Reels для моего автобизнеса
                                </a>
                                <a
                                    href="#packages"
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
                                    <p className="text-2xl font-bold text-white">от 350 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за пакет Старт.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">10-20</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">роликов / день</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5-10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до готовности</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Instagram Reels + TikTok + YouTube Shorts</li>
                                    <li>Hook & Caption Bank (RU/EN)</li>
                                    <li>Тбилиси, Рустави и вся Грузия</li>
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
                            <h2 className="text-3xl font-bold md:text-4xl">Объяснение услуги простым языком</h2>
                            <p className="mt-5 leading-relaxed text-white/72">{serviceIntro}</p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#D4A017]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Embed-пример пакета Reels</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    На странице встроен пример вертикального видео для соответствия блоку SCHEMA-video и демонстрации формата.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <video
                                    title="Пример Automotive Reels"
                                    src={VIDEO_EMBED_URL}
                                    poster={VIDEO_THUMBNAIL_URL}
                                    className="aspect-video w-full"
                                    controls
                                    muted
                                    playsInline
                                >
                                    Ваш браузер не поддерживает воспроизведение видео.
                                </video>
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
                            <h2 className="text-2xl font-bold text-white">Deliverables</h2>
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
                            Хватит ждать, пока вас найдут сами. Запустите поток Reels — и пусть алгоритм работает на вас.
                        </h3>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Запустить Reels для моего автобизнеса
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

            <ProcessNote text="Перед съемкой изучаем профиль, аудиторию и конкурентов. Каждый ролик получает конкретную цель: продажа, доверие или охват, чтобы контент не терялся в ленте." />

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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты</h2>
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
                                    <th className="px-4 py-3 font-bold">Что входит</th>
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
                    </div>
                </div>
            </section>

            <MidCta
                text="Пока конкуренты думают, стоит ли делать Reels, ваши ролики уже могут работать на органику. Один съемочный день = месяц контента."
                buttonLabel="Получить расчет для автобизнеса"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
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
                            Пишите в Telegram или WhatsApp: {CONTACT_PHONE}. Работаем с автобизнесом по всей Грузии —
                            Тбилиси, Рустави, Батуми. Обсудим вашу задачу за 15 минут и дадим реальный расчет.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">WhatsApp / Телефон</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Сайт</p>
                                <p className="mt-2 text-lg font-bold text-white">breus.media</p>
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
                            <a
                                href={SITE_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Открыть сайт
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — Reels и видеоконтент для автобизнеса в Тбилиси. Снимаем для дилеров,
                        детейлинг-студий, автосервисов и экспортных площадок. Грузия, от 350 ₾.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки автобизнеса в контенте</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съемке Reels</h2>
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
