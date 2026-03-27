# Breus Media — Reels и промо-видео — 26 марта 2026
Страницы: /reels-service, /reels-promo/reels-auto, /reels-promo/reels-clinic, /reels-promo/reels-hotel, /reels-promo/reels-real-estate, /reels-promo/reels-realtor, /reels-promo/reels-restaurant, /reels-promo/reels-tourism, /reels-promo/restaurant-content-pack, /reels-promo/promo-zhk-launch, /reels-promo/hotel-seasonal-content

## /reels-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.reelsService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function ReelsServicePage() {
    return <L2DirectionRenderer schemaKey="reels-service" config={config} />;
}

```
---
---

## /reels-promo/reels-auto
Lines: 1362
```tsx
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
const PAGE_TITLE = 'Reels для автобизнеса в Тбилиси — ролики для соцсетей';
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

```
---
---

## /reels-promo/reels-clinic
Lines: 1301
```tsx
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
                    { label: 'Пакеты', href: '#packages' },
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
                                    href="#packages"
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

```
---
---

## /reels-promo/reels-hotel
Lines: 1269
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
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

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-hotel';
const PAGE_TITLE = 'Reels для отеля в Тбилиси — съёмка для Instagram и TikTok';
const PAGE_DESCRIPTION =
    'Короткие вертикальные видео для отеля: Instagram Reels, TikTok, YouTube Shorts. Привлекайте новых гостей из соцсетей. От 200 ₾ за ролик, Тбилиси.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';

const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';
const REEL_EXAMPLE_THUMB =
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80';

const heroIntro =
    'Instagram Reels и TikTok — это сегодня главный канал, по которому путешественники открывают новые места. Молодая пара из Москвы, экспат из Берлина, семья из Дубая — они все scrollят ленту, и ваш отель либо в ней есть, либо нет. Мы снимаем короткие вертикальные ролики, которые показывают атмосферу, номера, вид и детали вашего объекта — в формате, который работает в соцсетях. Один Reels — это тысячи потенциальных гостей, которые вас ещё не знают.';

const whatIsText =
    'Reels для отеля — это 15–60-секундные вертикальные ролики, снятые для Instagram, TikTok и YouTube Shorts. Каждый ролик — отдельная история: утро в номере, вид с террасы, завтрак, бокал вина у камина, панорама Старого Тбилиси из окна. Мы снимаем пакетами — несколько роликов за один визит — и отдаём готовые видео с монтажом, музыкой и субтитрами. Вам остаётся только публиковать по расписанию.';

const audienceItems = [
    'Бутик-отелям и дизайн-отелям с сильной визуальной идентичностью, которые хотят выйти за пределы аудитории Booking.',
    'Апарт-отелям и гестхаусам, которым важно строить прямую аудиторию в Instagram для снижения зависимости от OTA.',
    'Курортным объектам (Гудаури, Батуми, Боржоми) с сезонным трафиком — чтобы напоминать о себе весь год.',
    'Отелям, которые уже ведут Instagram, но контент устаревший или неубедительный.',
    'Маркетинг-менеджерам отелей, которым нужен регулярный поток готового контента без самостоятельной съёмки.',
    'Глэмпингам и эко-отелям с нестандартной атмосферой, которую лучше всего передаёт движущееся видео.',
];

const taskCards: CardItem[] = [
    {
        title: 'Создаёт постоянный поток контента',
        text: 'Instagram требует регулярности — без свежих видео алгоритм перестаёт показывать аккаунт новым людям.',
    },
    {
        title: 'Привлекает гостей через discovery',
        text: 'Ваш отель попадает в ленту тех, кто ещё не искал вас специально, но уже сохраняет красивый кадр в избранное.',
    },
    {
        title: 'Конвертирует просмотры в переходы к бронированию',
        text: 'Reels ведёт пользователя в профиль, а ссылка в профиле закрывает путь к прямому бронированию.',
    },
    {
        title: 'Снижает зависимость от платной рекламы',
        text: 'Органический охват качественного short-form видео частично заменяет таргет и сокращает стоимость привлечения.',
    },
];

const painCards: CardItem[] = [
    {
        title: '«У нас нет контента для соцсетей — публикуем раз в две недели»',
        text: 'Редкие посты = узкая аудитория = мало новых гостей из соцсетей.',
    },
    {
        title: '«Мы пробовали снимать сами — выглядит непрофессионально»',
        text: 'Без стабилизации, света и монтажного ритма ролик теряет доверие в первые секунды.',
    },
    {
        title: '«Не знаем, что снимать — каждый раз придумываем с нуля»',
        text: 'Мы приезжаем с готовым планом роликов: сцены, подача, переходы и приоритеты уже понятны.',
    },
    {
        title: '«Снимаем что-то, но нет подписчиков и бронирований»',
        text: 'Видео без хука в начале, структуры и CTA обычно не получают стабильного распространения.',
    },
    {
        title: '«Маркетолог уволился — выкладывать некому»',
        text: 'Пакет готовых роликов снимает зависимость от штатного контент-менеджера.',
    },
    {
        title: '«У конкурентов тысячи просмотров, у нас ноль»',
        text: 'Ключевая разница обычно в качестве продакшна и понимании алгоритма, а не только в числе подписчиков.',
    },
];

const earnItems = [
    'Прямые бронирования через Instagram: Reels приводит гостя в профиль и к ссылке бронирования без OTA-комиссии.',
    'Рост узнаваемости: чем чаще отель видят в ленте, тем выше шанс, что его вспомнят при планировании поездки.',
    'Реклама дешевле: ролики с сильной органикой обычно дают более выгодный CPM в таргете.',
    'Подписчики становятся активом: акции и сезонные офферы можно доносить напрямую.',
];

const saveItems = [
    'Остаётесь видимыми в межсезонье: регулярный контент поддерживает интерес в низкий сезон.',
    'Снижаете зависимость от OTA: больше прямых заявок — меньше комиссии посредникам.',
    'Не теряете аудиторию по локации: геотеги и хэштеги приводят новых путешественников.',
    'Не упускаете гостя на этапе профиля: пустой аккаунт отталкивает, активный конвертирует.',
];

const deliverables = [
    '4–8 готовых Reels (9:16, 1080p) с монтажом, музыкой и переходами.',
    'Субтитры и текстовые оверлеи на выбранных языках (RU / EN / GE).',
    'Тексты публикаций с хэштегами и CTA под каждый ролик.',
    'Адаптации для TikTok и YouTube Shorts.',
    'Рекомендации по расписанию публикаций.',
    'Передача файлов в MP4 через облачный диск.',
];

const outputCards: CardItem[] = [
    {
        title: 'Форматы',
        text: 'MP4 9:16 (1080×1920), опционально 1:1 для постов.',
    },
    {
        title: 'Хронометраж',
        text: '15–30 секунд (стандарт), до 60 секунд по запросу.',
    },
    {
        title: 'Сроки',
        text: 'Съёмка 2–4 часа, монтаж одного ролика 2–3 рабочих дня, пакета — 5–7 дней.',
    },
    {
        title: 'Правки',
        text: '1 раунд правок на каждый ролик включён.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Отель запускает Instagram с нуля',
        text: 'Базовый пакет из 8 роликов: номера, завтрак, лобби, вид, команда. Контент на первый месяц регулярных публикаций.',
    },
    {
        title: 'Охваты упали',
        text: 'Пакет свежих Reels с новым монтажным ритмом и хук-открытием в первые 2 секунды помогает перезапустить алгоритм.',
    },
    {
        title: 'Сезонная рекламная кампания',
        text: 'Снимаем тематический контент: «Лето на террасе», «Новогодняя ночь», «Романтический ужин».',
    },
    {
        title: 'Апарт-отель хочет показать разные юниты',
        text: 'Серия роликов по типам апартаментов: студия, семейный юнит, пентхаус.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Бутик-отель, Старый Тбилиси, 14 номеров',
        text: 'После 3 месяцев паузы сняли 6 Reels. Первый ролик дал охват в 8 раз выше среднего по аккаунту.',
    },
    {
        title: 'Апарт-отель, Сабуртало, 40 юнитов',
        text: 'Сделали серию «тур по апарту» с EN-субтитрами. Команда отметила рост обращений в директ.',
    },
    {
        title: 'Глэмпинг, Кахетия',
        text: 'Сюжеты про закат, костёр, утро в горах и виноградники дали стабильный органический reach в travel-аудитории.',
    },
];

const socialProofItems = [
    'Reels обычно получает заметно больший органический охват, чем статичные и обычные видео-посты.',
    'Путешественники всё чаще выбирают направление поездки после коротких видео в Instagram и TikTok.',
    'Регулярный ритм публикаций 3–4 раза в неделю поддерживает рост аккаунта лучше, чем разовые рывки.',
    'Breus Media работает с отелями по всей Грузии и учитывает локальную travel-специфику.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels и зачем они отелю?',
        answer:
            'Reels — короткие вертикальные видео в Instagram, которые платформа показывает не только подписчикам, но и новой аудитории. Для отеля это самый доступный инструмент органического роста.',
    },
    {
        question: 'Чем Reels отличается от обычного видео-поста?',
        answer:
            'Reels — формат 9:16 с отдельным алгоритмом и лентой. У него сильнее потенциал охвата новых пользователей.',
    },
    {
        question: 'Сколько Reels нужно в месяц?',
        answer:
            'Практичный ориентир для отеля — 6–12 роликов в месяц (1–3 публикации в неделю).',
    },
    {
        question: 'Нужно ли платить за продвижение Reels?',
        answer:
            'Нет. Базовый охват может быть полностью органическим. Таргет нужен для масштабирования, а не как обязательный старт.',
    },
    {
        question: 'Нужно ли самому придумывать темы для роликов?',
        answer: 'Нет. План съёмки, сцены и идеи мы готовим заранее под ваш объект и сезон.',
    },
    {
        question: 'Можно ли использовать эти ролики в рекламе?',
        answer:
            'Да. Финальные ролики подходят для Meta Ads, TikTok и YouTube Shorts.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит съёмка Reels для отеля?',
        answer:
            'Один ролик — от 200 ₾. Пакет из 4 роликов — от 650 ₾. Пакет из 8 роликов — от 1 100 ₾.',
    },
    {
        question: 'Нужно ли закрывать отель во время съёмки?',
        answer:
            'Нет. Снимаем в рабочем режиме, обычно утром или в окна между заездами.',
    },
    {
        question: 'Как быстро будут готовы ролики?',
        answer: 'Обычно 5–7 рабочих дней после съёмки.',
    },
    {
        question: 'Что если не понравится монтаж?',
        answer: '1 раунд правок на каждый ролик включён в стоимость.',
    },
    {
        question: 'Помогаете ли вы с текстами для публикаций?',
        answer:
            'Да. Для пакетов Standard и Full готовим подписи с CTA и хэштегами.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Выезжаем в Батуми, Гудаури, Сигнахи, Боржоми и другие регионы по согласованию.',
    },
];

const whyBreusItems = [
    'Снимаем Reels именно для отельной ниши и понимаем ожидания путешественника.',
    'Оборудование: стабилизатор, свет для интерьеров, DJI Air 3S для аэросцен.',
    'Пакетный формат: один визит закрывает контент на месяц.',
    'Мультиязычность RU / EN / GE.',
    'Быстрый цикл и чёткие сроки без затянутых пауз.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (онлайн, 30 минут)',
        text: 'Обсуждаем объект, аудиторию, сценарии, стиль и объём пакета.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Составляем shot-list и логику роликов до выезда.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный визит (2–4 часа)',
        text: 'Снимаем номера, общие зоны, детали и атмосферу.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж (5–7 рабочих дней)',
        text: 'Темп, музыка, цвет, субтитры, оверлеи и финальная сборка.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача',
        text: 'Отдаём ролики + тексты + хэштеги через облачный диск.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 650 ₾',
        subtitle: 'Старт или перезапуск контента',
        features: [
            '4 готовых Reels (9:16).',
            'Субтитры / оверлеи на 1 языке.',
            'Передача в MP4.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 100 ₾',
        subtitle: 'Стабильный monthly-поток',
        featured: true,
        features: [
            '8 готовых Reels.',
            'Субтитры на 2 языках (RU + EN).',
            'Описания с хэштегами.',
            'Рекомендации по расписанию.',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 800 ₾',
        subtitle: 'Instagram как канал бронирований',
        features: [
            '12 готовых Reels.',
            'Субтитры на 3 языках.',
            'Описания RU + EN.',
            'Версии для TikTok и Shorts.',
            '1 короткий горизонтальный ролик.',
            'Контент-план на месяц.',
        ],
    },
];

const packageCompareRows = [
    ['Количество Reels', '4', '8', '12'],
    ['Субтитры', '1 язык', '2 языка', '3 языка'],
    ['Описания с хэштегами', '—', '✓', '✓'],
    ['Версии для TikTok / Shorts', '—', '—', '✓'],
    ['Горизонтальный ролик', '—', '—', '✓'],
    ['Контент-план на месяц', '—', '—', '✓'],
    ['Цена', 'от 650 ₾', 'от 1 100 ₾', 'от 1 800 ₾'],
];

const relatedServices = [
    {
        title: 'Видеотур по отелю',
        href: '/promo-video/promo-hotel',
        text: 'Флагманский cinematic-ролик для сайта и Booking.',
    },
    {
        title: 'Сезонный контент-пакет',
        href: '/reels-promo/hotel-seasonal-content',
        text: 'Тематические ролики под лето, праздники и спецпредложения.',
    },
    {
        title: '360° тур по отелю',
        href: '/360-tour/360-tour-hotels',
        text: 'Интерактивный формат для сайта и удалённых гостей.',
    },
    {
        title: 'AI-описания для Booking',
        href: '/ai-content/hotel-ai-descriptions',
        text: 'Тексты по номерам и сервису на RU / EN / GE.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Публикуют только фото',
        text: 'Фото получают меньше органического охвата, чем short-form видео.',
    },
    {
        title: 'Снимают горизонтально',
        text: 'Reels — это вертикальный 9:16. Горизонталь в этом формате теряет эффективность.',
    },
    {
        title: 'Нет крючка в первые 2 секунды',
        text: 'Без сильного старта досмотры падают, и алгоритм урезает распространение.',
    },
    {
        title: 'Нет CTA',
        text: 'Зритель посмотрел ролик, но не понял следующий шаг. Призыв к действию обязателен.',
    },
    {
        title: 'Публикуют нерегулярно',
        text: 'Разовая активность не формирует устойчивый рост.',
    },
    {
        title: 'Игнорируют геотеги и хэштеги',
        text: 'Без локационных сигналов ролик теряет часть discovery-трафика.',
    },
];

const freeImprovements = [
    'Добавьте геотег Тбилиси (или вашего города) к каждому ролику.',
    'Снимите один вертикальный ролик на смартфон и опубликуйте в Reels уже сейчас.',
    'Перейдите на бизнес-аккаунт и добавьте ссылку бронирования в шапку профиля.',
    'Сделайте описание профиля на RU + EN.',
    'Соберите Highlights по темам: «Номера», «Виды», «Завтрак», «Тбилиси».',
];

const prepChecklist = [
    'Номера убраны и оформлены.',
    'Завтрак/сервировка готовы, если снимаем food-сцены.',
    'Персонал предупреждён о съёмке.',
    'Согласован список ключевых преимуществ объекта.',
    'Лобби и общие зоны готовы к кадру.',
    'Свет включён во всех ключевых зонах.',
    'Определены актуальные сезонные офферы.',
    'Ссылка на бронирование обновлена в Instagram.',
];

const longAnswers: CardItem[] = [
    {
        title: 'Как Reels работает для отельного маркетинга?',
        text: 'Reels показывается не только подписчикам, но и новой аудитории. Это позволяет даже небольшому аккаунту получать масштабный охват и постепенно превращать его в бронирования.',
    },
    {
        title: 'Что делает ролик эффективным?',
        text: 'Хук в начале, эмоция в середине и CTA в финале. Плюс качественная стабилизация, свет и правильный ритм монтажа.',
    },
    {
        title: 'Как часто публиковать?',
        text: 'Для стабильного роста ориентируйтесь на 3–4 публикации в неделю, где минимум 2 — Reels.',
    },
    {
        title: 'Как связать Reels с бронированием?',
        text: 'Через CTA в описании и ссылку в профиле. Сначала пользователь видит ролик, затем переходит в профиль и дальше в бронь.',
    },
];

const shortQa = [
    {
        question: 'Что такое Reels для отеля?',
        answer:
            'Это короткие вертикальные видео 15–60 секунд для Instagram, TikTok и Shorts, которые показывают атмосферу и номера отеля.',
    },
    {
        question: 'Сколько стоит Reels для отеля в Тбилиси?',
        answer: 'От 200 ₾ за ролик. Пакет 4 ролика — от 650 ₾. Пакет 8 роликов — от 1 100 ₾.',
    },
    {
        question: 'Как Reels помогает с прямыми бронированиями?',
        answer: 'Через переход в профиль и ссылку бронирования без OTA-комиссии.',
    },
    {
        question: 'Сколько Reels нужно в месяц?',
        answer: 'Обычно 6–12 роликов в месяц.',
    },
    {
        question: 'Нужна ли большая аудитория, чтобы Reels работал?',
        answer: 'Нет. Формат работает на discovery и может расти с нуля.',
    },
    {
        question: 'Можно ли использовать ролики в платной рекламе?',
        answer: 'Да. Ролики с хорошей органикой отлично усиливаются в Ads.',
    },
    {
        question: 'Кто снимает Reels для отелей в Тбилиси?',
        answer: 'Breus Media. Работаем в Тбилиси и по всей Грузии.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Гайд: 10 идей для Reels отеля',
        href: '/blog/hotel-reels-ideas',
    },
    {
        title: 'Как отелю набрать первые 1000 подписчиков',
        href: '/blog/hotel-instagram-tbilisi',
    },
    {
        title: 'Сравнение: Reels vs статичные посты',
        href: '/blog/reels-vs-posts',
    },
    {
        title: 'Пример Reels бутик-отеля',
        href: '/portfolio/hotel-reels-tbilisi',
    },
];

const internalTransitions = [
    {
        text: 'Хотите дать гостям полную картину об отеле до приезда?',
        href: '/promo-video/promo-hotel',
        label: 'Смотреть видеотур по отелю',
    },
    {
        text: 'Нужен контент под конкретный сезон или праздник?',
        href: '/reels-promo/hotel-seasonal-content',
        label: 'Смотреть сезонный контент-пакет',
    },
    {
        text: 'Хотите усилить OTA-тексты так же, как видео?',
        href: '/ai-content/hotel-ai-descriptions',
        label: 'Смотреть AI-описания для OTA',
    },
];

const myths: MythItem[] = [
    {
        myth: 'Reels работает только у больших аккаунтов.',
        reality: 'Алгоритм создан для discovery, поэтому охват может расти и у небольших аккаунтов.',
    },
    {
        myth: 'Достаточно снимать на смартфон.',
        reality: 'Профессиональный свет, стабилизация и монтаж заметно повышают результат.',
    },
    {
        myth: 'Наша аудитория не сидит в Instagram/TikTok.',
        reality: 'Путешественники 25–45 активно используют короткие видео при выборе направления.',
    },
    {
        myth: 'Без рекламы Reels не работает.',
        reality: 'У формата есть органический охват. Реклама — усилитель, а не обязательное условие.',
    },
    {
        myth: 'Мы уже выкладывали видео, но это не сработало.',
        reality: 'Видео и правильно спроектированный Reels — разные вещи. Важны формат, хук и CTA.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Reels',
        definition: 'Короткие вертикальные видео в Instagram с отдельной лентой и алгоритмом.',
    },
    {
        term: 'Discovery-охват',
        definition: 'Просмотры от пользователей, которые не подписаны на аккаунт.',
    },
    {
        term: 'Крючок (hook)',
        definition: 'Первые 1–3 секунды, которые удерживают внимание.',
    },
    {
        term: '9:16',
        definition: 'Вертикальное соотношение сторон для смартфонного просмотра.',
    },
    {
        term: 'CTA',
        definition: 'Призыв к действию в ролике или описании.',
    },
    {
        term: 'UGC',
        definition: 'Контент от гостей, который усиливает социальное доказательство.',
    },
];

const notFitItems = [
    'Отели, которым нужен один ролик «раз и навсегда» без регулярного контента.',
    'Проекты, которые ожидают устойчивый органический результат за 1–2 дня.',
    'Объекты с бюджетом ниже 400 ₾ на весь контент.',
    'Команды, не готовые публиковать материалы регулярно.',
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
            name: 'Reels и промо',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для отеля',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Reels для отеля',
    description: 'Короткий вертикальный ролик для Instagram Reels / TikTok / Shorts.',
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
    name: 'Reels для отеля в Тбилиси',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Batumi', 'Gudauri', 'Borjomi', 'Georgia'],
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
        highPrice: '1800',
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

export default function ReelsHotelPage() {
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
                id="reels-hotel-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.32),rgba(8,8,8,0.95)_72%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Reels для отеля · Тбилиси
                            </p>
                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для отеля — короткие видео для соцсетей и рекламы
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Ваш отель появляется в лентах новых гостей каждую неделю. Без рекламного бюджета.
                            </p>
                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить Reels-пакет
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Выбрать пакет
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-white/60">
                                Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE}
                            </p>
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
                                    <p className="mt-2 text-sm text-white/85">2–4 часа съёмка, 5–7 дней пакет</p>
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
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">{whatIsText}</p>
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
                    <h2 className="text-3xl font-bold md:text-5xl">Deliverables</h2>
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
                text="Хотите, чтобы ваш отель появлялся в лентах новых гостей каждую неделю?"
                buttonLabel="Обсудить Reels-пакет"
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
                    <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                        Тбилиси, Батуми, Гудаури, Боржоми и Кахетия по-разному раскрываются в кадре. Мы подстраиваем
                        сюжет под локацию: старый город и балконы, море и террасы, горы и сезон, винные пейзажи и
                        атмосферу выходных.
                    </p>
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
                            title="Пример Reels для отеля"
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

            <ProcessNote text="Съёмка пакета из 6–8 Reels занимает 2–4 часа. Работаем в рабочем режиме отеля, не мешаем гостям." />

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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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
                                {packageCompareRows.map((row) => (
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
                        <li>Только начинаете или хотите обновить контент — выбирайте Basic.</li>
                        <li>Ведёте Instagram и нужен стабильный поток — выбирайте Standard.</li>
                        <li>Instagram — ключевой канал прямых бронирований — выбирайте Full.</li>
                    </ul>
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
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Ваш отель может появляться в лентах тысяч потенциальных гостей каждую неделю
                    </h2>
                    <p className="mt-4 text-base text-white/75">Без рекламного бюджета. За счёт системного short-form контента.</p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Написать нам
                        </a>
                        <a
                            href="#packages"
                            className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                        >
                            Выбрать пакет
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-white/60">{CONTACT_PHONE} · Тбилиси, работаем по всей Грузии</p>
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
                        Напишите в WhatsApp или Telegram — ответим в течение 2 часов. Работаем в Тбилиси, выезжаем в
                        Батуми, Гудаури, Кахетию и другие регионы.
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
                            href={TELEGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#229ED9] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
                        >
                            Telegram
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
                        Breus Media — видеопродакшн в Тбилиси. Снимаем Reels, видеотуры, 360° туры и делаем AI-контент
                        для отелей по всей Грузии.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold md:text-5xl">Частые ошибки отелей в соцсетях</h2>
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
                    <h2 className="text-3xl font-bold md:text-5xl">Чеклист готовности к съёмке Reels</h2>
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
                            <article key={item.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
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

            <DroneStickyCta heroId="reels-hotel-hero" />
            <DroneFooterStitch />
        </main>
    );
}

```
---
---

## /reels-promo/reels-real-estate
Lines: 1385
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-real-estate/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
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
    audience: string;
    timeline: string;
    items: string[];
};

type GlossaryItem = {
    term: string;
    description: string;
};

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-real-estate';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const CONTACT_PHONE_DISPLAY = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';

const EXAMPLE_VIDEO_URL = 'https://cdn.pixabay.com/video/2021/08/04/83866-584724838_tiny.mp4';
const EXAMPLE_VIDEO_POSTER =
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80';

const serviceIntro =
    'Мы снимаем ваш объект и готовим полный комплект материалов для размещения: видеоролик, фотографии и описание — всё сразу. Вы получаете готовые файлы, которые без доработки загружаются на любой портал или отправляются покупателю в мессенджере. Больше не нужно собирать материалы у нескольких подрядчиков — одна съёмка закрывает всё.';

const audienceCards: CardItem[] = [
    {
        title: 'Риелтор с активными объектами',
        text: 'Нужен качественный контент на каждый листинг без потери времени.',
    },
    {
        title: 'Агентство недвижимости',
        text: 'Хочет единый визуальный стандарт по всем объектам и командам.',
    },
    {
        title: 'Собственник квартиры',
        text: 'Продаёт сам, без агента, и хочет выделиться среди типовых объявлений на ss.ge.',
    },
    {
        title: 'Инвестор',
        text: 'Выставляет несколько объектов одновременно и нужен системный подход.',
    },
    {
        title: 'Управляющий ЖК или апарт-отелем',
        text: 'Размещает юниты в аренду или продажу и нужен повторяемый формат.',
    },
    {
        title: 'Небольшой девелопер',
        text: 'Продаёт 3–10 квартир и хочет выглядеть профессионально без раздутого бюджета.',
    },
];

const taskCards: CardItem[] = [
    {
        title: 'Слабый листинг -> больше просмотров и заявок',
        text: 'Тёмные фото со смартфона и три строчки описания — стандарт большинства объявлений в Тбилиси. Профессиональный видео-комплект делает ваш объект заметным в ленте и повышает кликабельность объявления.',
    },
    {
        title: 'Удалённый покупатель получает полную картину',
        text: 'Более 40% покупателей недвижимости в Тбилиси — иностранцы или люди из других городов. Видео заменяет первичный осмотр: покупатель видит планировку, свет, состояние подъезда и вид из окна не приезжая.',
    },
    {
        title: 'Меньше пустых показов',
        text: 'Покупатель, который посмотрел видео и всё равно приехал — это уже тёплый контакт. Туристов и «просто посмотреть» становится значительно меньше.',
    },
    {
        title: 'Единый комплект для всех площадок',
        text: 'Снято один раз — размещается везде: ss.ge, myhome.ge, Facebook Marketplace, WhatsApp, Instagram. Без лишней конвертации и пересъёмки.',
    },
];

const painCards: CardItem[] = [
    {
        title: '«Квартира хорошая, но объявление не смотрится»',
        text: 'Рынок перегрет контентом: сотни похожих объявлений. Если фото тёмные, нет видео и описание сухое — объект теряется. Хороший объект с плохой упаковкой уступает слабому объекту с правильной подачей.',
    },
    {
        title: '«Сам снял на телефон — получилось плохо»',
        text: 'Интерьерная съёмка требует света, ракурсов и монтажа. Широкий угол телефона искажает пространство, а без стабилизации видео выглядит непрофессионально. Покупатель это чувствует.',
    },
    {
        title: '«Нет времени заниматься контентом»',
        text: 'Риелтор тратит время на переговоры, показы и документы. Организовывать съёмку, монтировать, писать описания — это отдельная работа. Мы берём её на себя полностью.',
    },
    {
        title: '«Объект висит месяцами без звонков»',
        text: 'Со временем объявление «выгорает» — опускается в выдаче, теряет охват. Обновлённый контент с видео — повод заново поднять листинг и получить новую волну просмотров.',
    },
    {
        title: '«Покупатели из-за рубежа не могут приехать посмотреть»',
        text: 'Иностранные инвесторы и релоканты принимают решения удалённо. Без видео они не доходят до переговоров — просто проходят мимо.',
    },
    {
        title: '«Каждый объект снимаю по-разному, нет системы»',
        text: 'Если каждый раз разные фотографы, разный монтаж и разные форматы — агентство теряет узнаваемость. Системный контент создаёт профессиональный образ.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Больше заявок на объект',
        text: 'Видео-листинги получают в 4 раза больше обращений по сравнению с фото. Больше заявок -> выше шанс найти покупателя по нужной цене.',
    },
    {
        title: 'Скорость продажи',
        text: 'Объекты с профессиональным видеоконтентом продаются на 20–30% быстрее. Меньше месяцев ожидания -> меньше потерь на корректировках цены.',
    },
    {
        title: 'Привлечение иностранных покупателей',
        text: 'Клиенты из России, Израиля, стран Персидского залива и Европы выбирают объекты по видео удалённо. Без видео вы для них невидимы.',
    },
    {
        title: 'Защита цены',
        text: 'Качественная упаковка даёт аргументы не снижать цену. Покупатель видит ценность до торга.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Не терять время на пустые показы',
        text: 'Видео отсекает незаинтересованных ещё до звонка. Вы встречаетесь только с реальными покупателями.',
    },
    {
        title: 'Не «сжигать» объект',
        text: 'Объявление без видео быстро теряет позиции. Обновлённый контент продлевает жизнь листинга без перепубликации с нуля.',
    },
    {
        title: 'Не зависеть от разных подрядчиков',
        text: 'Один пакет закрывает все нужды: видео, фото, текст. Нет хаоса с разными фрилансерами и несогласованными форматами.',
    },
    {
        title: 'Не упустить покупателя из другого города или страны',
        text: 'Без видео иностранный покупатель просто не дойдёт до переговоров. Видео — это удалённый первый показ.',
    },
];

const deliverables: string[] = [
    'Видеоролик объекта 1–2 мин: планировка, ключевые зоны, вид из окна, состояние отделки.',
    'Короткая версия 30–60 сек для Instagram/TikTok (вертикальный формат).',
    'Фотосет 15–25 кадров: интерьер, экстерьер, вход в здание, вид — в правильных пропорциях для порталов.',
    'Текстовое описание объекта на русском и английском для размещения на порталах.',
    'Краткая spec-карточка (площадь, этаж, состояние, инфраструктура) — готова для WhatsApp и мессенджеров.',
    'Черновой вариант плана квартиры с разметкой зон (если нет готового от застройщика).',
    'Субтитры или текст-оверлей на ролик (по запросу).',
    'Передача всех файлов через Google Drive / WeTransfer в течение 3 рабочих дней.',
];

const outputFormats: CardItem[] = [
    {
        title: 'Видео',
        text: 'MP4, 1080p — горизонтальный (16:9) и вертикальный (9:16).',
    },
    {
        title: 'Фото',
        text: 'JPG, оптимизированы под порталы и соцсети.',
    },
    {
        title: 'Текст',
        text: 'Google Doc / PDF на русском и английском.',
    },
    {
        title: 'Spec-карточка',
        text: 'PDF + текстовый вариант для WhatsApp.',
    },
];

const useCases: CardItem[] = [
    {
        title: 'Риелтор выставляет квартиру бизнес-класса в Ваке',
        text: 'Объект стоит от $150 000. Покупатели — состоятельные семьи и инвесторы, часть из них — из-за рубежа. Стандартные фото не передают ощущение пространства и качества отделки. Видео-комплект позволяет отправить полноценный «показ» покупателю в Москве или Тель-Авиве до того, как он прилетит в Тбилиси.',
    },
    {
        title: 'Собственник продаёт квартиру в Сабуртало без агента',
        text: 'Конкуренция в районе высокая: сотни похожих объявлений. Собственник разместил видео на ss.ge и в Instagram — объект стал заметным, звонков стало в 3 раза больше за первую неделю.',
    },
    {
        title: 'Агентство обновляет зависший листинг',
        text: 'Квартира висит 3 месяца без результата. Пересъёмка с профессиональным видео + новое описание — и объявление получает второй шанс. Алгоритмы порталов воспринимают обновлённый контент как новый листинг.',
    },
    {
        title: 'Инвестор выставляет 5 апартаментов в новостройке',
        text: 'Нужно быстро и системно упаковать весь пул объектов. Пакетный договор позволяет снять все 5 квартир за 2 дня и получить единый стандарт контента — для агентства, портала и прямых покупателей.',
    },
];

const miniCases: CardItem[] = [
    {
        title: 'Апартаменты в Дидубе — от 3 месяцев ожидания к продаже за 3 недели',
        text: 'Собственник разместил квартиру на ss.ge с телефонными фото и сухим описанием. После профессиональной пересъёмки с видеоэкскурсией и новым текстом объявление вышло в топ раздела — и объект нашёл покупателя через 3 недели.',
    },
    {
        title: 'Агентство в Глдани — единый стандарт для 12 объектов',
        text: 'Мелкое агентство без внутреннего маркетолога. Договорились на пакетный формат: каждый новый объект снимается по единому шаблону. Результат — узнаваемый стиль в Instagram и на myhome.ge, рост входящих запросов без рекламных бюджетов.',
    },
    {
        title: 'Квартира с видом на Мтацминду — покупатель из Израиля',
        text: 'Владелец хотел продать квартиру с ремонтом и видом на гору. Основные покупатели — иностранцы, которые не могут приехать заранее. После съёмки с аэродроном и полноценным видеотуром объект получил запрос от израильского инвестора, который принял решение на основе видео и купил без личного осмотра.',
    },
];

const socialProofCards: CardItem[] = [
    {
        title: 'Оборудование',
        text: 'Снимаем на DJI Air 3S (аэросъёмка), стабилизатор + профессиональная камера для интерьеров. Результат — кинематографичная картинка, а не тряска смартфона.',
    },
    {
        title: 'Форматы под все площадки',
        text: 'Горизонтальный и вертикальный монтаж, оптимизированные размеры для ss.ge, myhome.ge и Instagram — без лишних переделок с вашей стороны.',
    },
    {
        title: 'Локальная экспертиза',
        text: 'Работаем в Тбилиси, знаем районы, понимаем, какие ракурсы работают для покупателей недвижимости в Грузии.',
    },
    {
        title: 'Фиксированные сроки',
        text: '2–3 рабочих дня после съёмки — не «скоро», а конкретно. Файлы приходят в одной папке, готовы к загрузке.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Зачем вообще нужно видео, если есть фото?',
        answer: 'Фото показывает статичный кадр, видео — пространство в движении. Покупатель понимает планировку, чувствует масштаб комнат и видит детали, которые на фото не передать. По данным исследований, объявления с видео получают в 4 раза больше запросов. Особенно это важно для покупателей, которые выбирают объект удалённо.',
    },
    {
        question: 'Что если в квартире старый ремонт или беспорядок?',
        answer: 'Мы снимаем то, что есть — но подсказываем, как минимально подготовить объект к съёмке: что убрать из кадра, как расставить мебель, какой свет включить. Чек-лист подготовки присылаем заранее. Плохой ремонт скрыть нельзя и не нужно — задача показать честно, но выгодно.',
    },
    {
        question: 'Можно ли снять только видео без фото?',
        answer: 'Да, мы предлагаем отдельные варианты. Но практика показывает, что порталы требуют фото в первую очередь, а видео — дополнение. Пакет «фото + видео» закрывает все нужды одной съёмкой и обходится дешевле, чем две отдельные услуги.',
    },
    {
        question: 'Как долго идёт сама съёмка?',
        answer: 'Стандартная квартира 40–80 м² — 1,5–2 часа на съёмку. Большие апартаменты, пентхаусы или объекты с панорамным видом — до 3 часов с аэросъёмкой. Монтаж и готовые файлы — через 2–3 дня после съёмки.',
    },
    {
        question: 'Вы работаете по всему Тбилиси? А в Батуми?',
        answer: 'Работаем по всему Тбилиси без доплаты за выезд в черте города. Батуми и другие города Грузии — по запросу, стоимость выезда обговаривается отдельно.',
    },
    {
        question: 'Нужно ли мне присутствовать на съёмке?',
        answer: 'Желательно — особенно если вы знаете детали объекта (что показать, какие плюсы подчеркнуть). Но если вы не можете присутствовать, оставьте ключи с управляющим или соседом — мы справимся самостоятельно.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит съёмка квартиры?',
        answer: 'Базовый пакет — от 350 ₾ (фото + короткий ролик для соцсетей). Стандартный пакет с полноценным видеотуром и описанием — от 650 ₾. Полный комплект с аэросъёмкой, двуязычным текстом и spec-карточкой — от 1 100 ₾. Точная цена зависит от метража объекта и состава пакета.',
    },
    {
        question: 'Как происходит оплата?',
        answer: '50% предоплата перед съёмкой, 50% — после передачи готовых материалов. Принимаем банковский перевод и наличные в GEL.',
    },
    {
        question: 'Можно ли снять несколько квартир сразу?',
        answer: 'Да, при съёмке от 3 объектов действует пакетная скидка. Если у вас агентство с постоянным потоком объектов — обсудим условия постоянного сотрудничества.',
    },
    {
        question: 'Что если результат не устроит?',
        answer: 'Мы делаем одну бесплатную итерацию монтажа — если что-то нужно изменить в нарезке или цветокоррекции. Полную пересъёмку берём в расчёт только если были нарушены договорённости о составе съёмки.',
    },
    {
        question: 'Можете сами разместить материалы на порталах?',
        answer: 'Размещение на порталах не входит в стандартный пакет: это занимает несколько минут и лучше делать самому, чтобы контролировать цену, описание и контактные данные. Но мы готовим все материалы так, чтобы загрузка была максимально простой.',
    },
    {
        question: 'Как быстро можно назначить съёмку?',
        answer: 'Обычно ближайший свободный слот — в течение 2–4 дней. Если нужно срочно — напишите, постараемся найти окно быстрее.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Снимаем под результат, не под портфолио',
        text: 'Наша задача — не «красиво», а «работает». Угол, свет, монтаж — всё выбирается под то, чтобы покупатель понял объект и захотел приехать или написать.',
    },
    {
        title: 'Один подрядчик — полный комплект',
        text: 'Фото, видео, текст, spec-карточка — из одной съёмки. Не нужно координировать фотографа, оператора и копирайтера отдельно.',
    },
    {
        title: 'Знаем рынок недвижимости Тбилиси',
        text: 'Понимаем, какие районы продаются иностранцам, что важно показать в объявлении для покупателя из России или Израиля, как подать вид на Мтацминду или близость к метро.',
    },
    {
        title: 'Профессиональное оборудование без доплаты',
        text: 'DJI Air 3S для аэросъёмки, стабилизатор и профессиональная камера для интерьеров — это стандарт нашей работы, не опция за доплату.',
    },
    {
        title: 'Фиксированный срок и формат',
        text: 'Никаких «пришлём когда будет готово». 2–3 дня, один архив с файлами, всё готово к загрузке.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка и бриф (15 минут)',
        text: 'Вы пишете нам в WhatsApp или Telegram. Рассказываете про объект: адрес, метраж, что важно показать, когда удобно снять. Мы задаём 2–3 уточняющих вопроса и предлагаем дату.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка объекта',
        text: 'Присылаем простой чек-лист: что убрать из кадра, как проветрить и освободить пространство. Занимает 20–30 минут вашего времени.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Приезжаем в назначенное время. 1,5–3 часа на месте: фото, видео, при необходимости аэросъёмка. Вы можете присутствовать или оставить ключи — как удобнее.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и постпродакшн',
        text: '2–3 рабочих дня. Монтируем ролик, обрабатываем фото, пишем текст на основе брифа.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача материалов',
        text: 'Отправляем ссылку на Google Drive с полным комплектом файлов. Все форматы готовы к загрузке без доработки. Если нужна правка — делаем один итерационный цикл.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic — «Быстрый старт»',
        price: 'от 350 ₾',
        audience: 'Для кого: собственник, который продаёт сам или риелтор с бюджетным объектом.',
        timeline: 'Срок: 2 рабочих дня.',
        items: ['Фотосет 12–15 кадров (интерьер + вход + фасад).', 'Короткий ролик 30–60 сек для Instagram/TikTok (вертикальный).', 'Базовая цветокоррекция и монтаж.'],
    },
    {
        title: 'Standard — «Полная упаковка»',
        price: 'от 650 ₾',
        audience: 'Для кого: риелтор или агентство, которое хочет полноценный листинг на порталах и в соцсетях.',
        timeline: 'Срок: 3 рабочих дня.',
        items: [
            'Фотосет 20–25 кадров.',
            'Видеотур 1–2 мин (горизонтальный) + короткая версия для соцсетей.',
            'Текстовое описание на русском и английском.',
            'Spec-карточка для WhatsApp и мессенджеров.',
        ],
    },
    {
        title: 'Full — «Премиум-объект»',
        price: 'от 1 100 ₾',
        audience: 'Для кого: объекты от $100 000, пентхаусы, продажа иностранным покупателям.',
        timeline: 'Срок: 3–4 рабочих дня.',
        items: [
            'Полный фотосет 25–35 кадров.',
            'Видеотур 1,5–2 мин + аэросъёмка объекта и района.',
            'Текст на русском и английском с позиционированием.',
            'Spec-карточка RU/EN.',
            'Черновой план квартиры с разметкой зон.',
        ],
    },
];

const packageComparisonRows = [
    ['Фотосет', '12–15 кадров', '20–25 кадров', '25–35 кадров'],
    ['Видеоролик', '30–60 сек (верт.)', '1–2 мин + верт. версия', '1,5–2 мин + верт. версия'],
    ['Аэросъёмка', '—', '—', '✅'],
    ['Текст для порталов', '—', 'RU + EN', 'RU + EN (расширенный)'],
    ['Spec-карточка для WhatsApp', '—', '✅', '✅'],
    ['Черновой план квартиры', '—', '—', '✅'],
    ['Срок', '2 дня', '3 дня', '3–4 дня'],
    ['Цена от', '350 ₾', '650 ₾', '1 100 ₾'],
];

const relatedServices: CardItem[] = [
    {
        title: 'Видеотур по квартире',
        text: 'Более подробный формат для дорогих объектов и иностранных покупателей: структурированный walk-through с нарративом.',
    },
    {
        title: 'Reels для риелтора',
        text: 'Регулярный контент для личного бренда в Instagram: не объект, а вы как эксперт.',
    },
    {
        title: 'Аэросъёмка объекта',
        text: 'Дрон-съёмка здания, района, прилегающей территории — для ЖК и загородной недвижимости.',
    },
    {
        title: '360° виртуальный тур',
        text: 'Интерактивный тур по объекту, который встраивается на сайт и в объявление.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Снимать на широкий угол смартфона без стабилизации',
        text: 'Ультраширокоугольный объектив делает комнаты «большими», но искажённо — покупатель на показе чувствует себя обманутым. Тряска без стабилизатора создаёт ощущение непрофессионализма.',
    },
    {
        title: 'Публиковать видео без монтажа',
        text: 'Сырая съёмка без цветокоррекции, монтажа и музыки смотрится хуже любительского ролика. Покупатель делает вывод об объекте через качество подачи.',
    },
    {
        title: 'Не показывать вход, подъезд и вид из окна',
        text: 'Именно эти детали часто решают «приеду / не приеду». В Тбилиси состояние подъезда и вид из окна — важные факторы для иностранных покупателей.',
    },
    {
        title: 'Писать описание без локального контекста',
        text: '«3-комнатная, Сабуртало, 5 этаж» — не продаёт. Упоминание близости к метро Делиси, паркам, школам и расстояния до центра — конкретика, которую ищут покупатели.',
    },
    {
        title: 'Не делать вертикальную версию для соцсетей',
        text: 'Горизонтальное видео для портала — это одно. Instagram Reels требует вертикального формата 9:16. Снять один раз и смонтировать оба варианта — правильный подход.',
    },
    {
        title: 'Не обновлять контент на зависших объявлениях',
        text: 'Если объявление висит больше месяца без обновлений — алгоритмы порталов понижают его в выдаче. Пересъёмка или обновление контента даёт второй шанс без повторной публикации.',
    },
];

const quickImprovements: string[] = [
    'Уберите лишнее из кадра перед съёмкой: тапочки, магниты на холодильнике, провода, личные вещи. Нейтральное пространство смотрится дороже.',
    'Снимайте при дневном свете: откройте все шторы и жалюзи. Естественный свет делает комнаты светлее и просторнее.',
    'Снимите вид из окна отдельно: даже если вид не впечатляющий, кадр из окна даёт ощущение пространства и помогает понять расположение.',
    'Добавьте в описание ориентиры: «5 минут пешком до метро», «рядом парк Ваке», «вид на Нарикала» — это конкретика, которую ищут покупатели.',
    'Снимайте планировку целиком: сфотографируйте чертёж плана квартиры от застройщика или нарисуйте от руки.',
];

const shootChecklist: string[] = [
    'Квартира убрана: нет лишних вещей на виду, поверхности чистые.',
    'Все шторы и жалюзи открыты: максимум естественного света.',
    'Включены все светильники (если съёмка вечером или в пасмурный день).',
    'Унесена личная бытовая мелочь: тапочки, зубные щётки, средства из ванной.',
    'Холодильник без магнитов, плита чистая.',
    'Провода убраны или замотаны за мебель.',
    'Балкон убран, цветы на месте, ничего лишнего.',
    'Есть план квартиры или хотя бы схема от застройщика.',
];

const shortQaItems: FaqItem[] = [
    {
        question: 'Сколько стоит профессиональная съёмка квартиры в Тбилиси?',
        answer: 'От 350 ₾ за базовый пакет (фото + короткое видео). Стандартный пакет с видеотуром и текстом — от 650 ₾. Полный комплект с аэросъёмкой — от 1 100 ₾.',
    },
    {
        question: 'Помогает ли видео продать квартиру быстрее?',
        answer: 'Да. Объявления с видео получают в 4 раза больше обращений. Объекты с профессиональным контентом продаются на 20–30% быстрее.',
    },
    {
        question: 'Какие форматы нужны для размещения на ss.ge и myhome.ge?',
        answer: 'Фото в JPG (горизонтальный формат), видео MP4. Для Instagram — вертикальное видео 9:16. Мы делаем оба варианта из одной съёмки.',
    },
    {
        question: 'За сколько дней готовы материалы после съёмки?',
        answer: '2–3 рабочих дня. После съёмки делаем монтаж, ретушь и текст — и присылаем все файлы ссылкой на Google Drive.',
    },
    {
        question: 'Нужно ли присутствовать на съёмке квартиры?',
        answer: 'Желательно, но не обязательно. Если нет времени — оставьте ключи, мы снимем самостоятельно.',
    },
    {
        question: 'Работаете ли вы только в Тбилиси?',
        answer: 'Базово работаем в Тбилиси. Батуми и другие города — по запросу, стоимость выезда обсуждается отдельно.',
    },
    {
        question: 'Можно ли снять несколько квартир сразу по сниженной цене?',
        answer: 'Да. При заказе от 3 объектов действует пакетная скидка. Для агентств с постоянным потоком объектов возможны условия регулярного сотрудничества.',
    },
    {
        question: 'Нужна ли аэросъёмка для городской квартиры?',
        answer: 'Для большинства квартир — нет. Опция оправдана для панорамных видов, элитной недвижимости, загородных домов и новостроек с сильным окружением.',
    },
];

const myths: CardItem[] = [
    {
        title: 'Миф: «Хватит фото, видео — лишние расходы»',
        text: 'Реальность: объявления с видео получают в 4 раза больше обращений. Расходы на видеосъёмку окупаются ускорением продажи даже на одном-двух объектах.',
    },
    {
        title: 'Миф: «Профессиональная съёмка нужна только для дорогой недвижимости»',
        text: 'Реальность: в перегретом рынке Тбилиси качественная подача выделяет любой объект — даже бюджетную квартиру.',
    },
    {
        title: 'Миф: «Покупатель всё равно приедет смотреть — видео ни на что не влияет»',
        text: 'Реальность: видео не заменяет осмотр, но фильтрует аудиторию. До звонка доходят те, кто уже заинтересован.',
    },
    {
        title: 'Миф: «Снял на iPhone — и так пойдёт»',
        text: 'Реальность: без света, стабилизации и монтажа результат обычно уступает профессиональному. Для полного комплекта (видео + фото + текст) один телефон не закрывает задачу.',
    },
    {
        title: 'Миф: «Иностранцы всё равно приедут смотреть перед покупкой»',
        text: 'Реальность: часть покупателей из Израиля, России или стран Персидского залива принимает решение на основе видео удалённо.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Листинг',
        description: 'Объявление о продаже/аренде объекта на портале (ss.ge, myhome.ge). Включает фото, описание, цену и контакт.',
    },
    {
        term: 'Walk-through',
        description: 'Видеопрогулка по объекту в хронологическом порядке: вход -> прихожая -> комнаты -> кухня -> балкон.',
    },
    {
        term: 'Reels',
        description: 'Короткий вертикальный ролик для Instagram и TikTok длиной 15–90 секунд.',
    },
    {
        term: 'Аэросъёмка',
        description: 'Съёмка с дрона. Показывает здание снаружи, окружение и инфраструктуру района.',
    },
    {
        term: 'Spec-карточка',
        description: 'Лаконичный документ с ключевыми характеристиками объекта (площадь, этаж, планировка, ремонт, цена).',
    },
    {
        term: 'Постпродакшн',
        description: 'Обработка материалов после съёмки: монтаж видео, цветокоррекция фото, наложение музыки и субтитров.',
    },
];

const notFitItems: string[] = [
    'Если нужен результат «прямо сейчас, через 2 часа» — мы работаем с нормальными сроками: съёмка + 2–3 дня монтажа.',
    'Если объект в аварийном состоянии и нужно «спрятать» проблемы — мы снимаем честно.',
    'Если бюджет ниже 350 ₾ на всё — качественная съёмка с монтажом ниже этой суммы невозможна.',
    'Если нужен полный SMM и стратегия продвижения — мы делаем контент, а не ведём аккаунты.',
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
            name: 'Reels и промо-видео',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Видеосъёмка квартир для продажи',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример видеосъёмки квартиры для продажи в Тбилиси',
    description: 'Демо-формат готового видео-комплекта для листинга недвижимости в Тбилиси.',
    thumbnailUrl: EXAMPLE_VIDEO_POSTER,
    contentUrl: EXAMPLE_VIDEO_URL,
    embedUrl: `${CANONICAL_URL}#video-example`,
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
    serviceType: 'Видеосъёмка недвижимости',
    name: 'Видеосъёмка квартир и объектов для продажи в Тбилиси',
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
        '@type': 'City',
        name: 'Тбилиси',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '350',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'GEL',
            price: '350',
            unitText: 'за пакет',
        },
    },
    url: CANONICAL_URL,
};

export const metadata: Metadata = {
    title: 'Видеосъёмка квартир для продажи в Тбилиси — Breus Media',
    description:
        'Профессиональная видеосъёмка квартир и объектов в Тбилиси. Готовый комплект для ss.ge, myhome.ge и соцсетей. Заявки — быстрее. Цены от 350 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеосъёмка квартир для продажи в Тбилиси — Breus Media',
        description:
            'Профессиональная видеосъёмка квартир и объектов в Тбилиси. Готовый комплект для ss.ge, myhome.ge и соцсетей.',
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        type: 'website',
    },
};

export default function ReelsRealEstatePage() {
    return (
        <main className="clean-debug-overlays min-h-screen bg-[#080808] text-white">
            <DronePageProgress />

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
                id="drone-real-estate-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1800&q=80')",
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
                                    Reels Promo · Недвижимость · Тбилиси
                                </span>
                            </div>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                Видеосъёмка квартир и объектов для продажи в Тбилиси
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Продающий контент для ss.ge, myhome.ge и Instagram — готовый комплект за 3 дня.
                            </p>

                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/72">
                                Объявление с профессиональным видео получает в 4 раза больше запросов, чем листинг только с
                                фото. Мы снимаем квартиры, апартаменты и коммерческие объекты в Тбилиси так, чтобы каждая
                                съёмка превращалась в рабочий инструмент продажи: для порталов, WhatsApp-переписок с
                                покупателями и соцсетей.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Заказать съёмку объекта
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                Что получает клиент
                            </p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 350 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Базовый пакет для старта + прозрачные сроки 2–3 рабочих дня.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–3 дня</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Срок</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1 пакет</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Всё сразу</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Видео + фото + текст + spec</li>
                                    <li>Форматы для порталов и соцсетей</li>
                                    <li>Подготовка под удалённых покупателей</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Что это за услуга простыми словами</h2>
                    <p className="mt-5 max-w-4xl leading-relaxed text-white/74">{serviceIntro}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
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
                    <h2 className="text-3xl font-bold md:text-4xl">Deliverables: что входит в услугу</h2>
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
                        {outputFormats.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-white/60">
                        Сроки: 2–3 рабочих дня после съёмки. Передача: ссылка на Google Drive / WeTransfer. Всё в одной
                        папке, готово к загрузке без доработки.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex md:items-center md:justify-between">
                        <div>
                            <p className="text-xl font-bold text-white">CTA №1: Заказать съёмку объекта</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                                Есть объект на продажу? Напишите нам в WhatsApp или Telegram — расскажем, что входит в
                                пакет, и назначим дату съёмки.
                            </p>
                            <p className="mt-3 text-sm text-[#FFD23F]">📲 {CONTACT_PHONE_DISPLAY}</p>
                        </div>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white md:mt-0"
                        >
                            Написать в WhatsApp
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

            <section id="video-example" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пример готового видео</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
                        На странице встроен пример формата итогового ролика, который можно использовать в листинге,
                        мессенджере и соцсетях.
                    </p>
                    <div className="mt-8 overflow-hidden rounded-[18px] border border-[#2a2a2a] bg-black">
                        <video
                            controls
                            preload="metadata"
                            className="aspect-video h-auto w-full"
                            poster={EXAMPLE_VIDEO_POSTER}
                        >
                            <source src={EXAMPLE_VIDEO_URL} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст</h2>
                    <p className="mt-5 max-w-5xl leading-relaxed text-white/74">
                        Рынок недвижимости Тбилиси перегрет предложением: в 2024 году выдано рекордное количество
                        строительных разрешений, только в Сабуртало сосредоточено 23% новых объектов. При этом средняя
                        цена квадратного метра достигла $1 320, а ипотечная нагрузка на покупателей выросла с 26% до 34%
                        дохода. Покупатели стали осторожнее и тщательнее отбирают объекты онлайн, прежде чем ехать на
                        показ. Иностранные покупатели — из Израиля, стран Персидского залива, Европы — принимают решения
                        полностью удалённо. Объект без видео для них просто не существует. В такой среде профессиональный
                        контент — не опция, а конкурентное преимущество.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof / доказательства</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {socialProofCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection
                items={beginnerFaqItems}
                title="FAQ для новичка"
                variant="beginner"
                bgColor="#0D0D0D"
            />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по деньгам и процессу"
                variant="commercial"
                id="faq"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Мы работаем без сложного оформления: написали в WhatsApp — согласовали дату — приехали и сняли — через 2–3 дня получили файлы." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Описание 3 пакетов</h2>
                    <div className="mt-8 grid gap-5 xl:grid-cols-3">
                        {packages.map((pkg, index) => (
                            <article
                                key={pkg.title}
                                className={`rounded-[20px] border p-6 ${
                                    index === 1
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Таблица сравнения пакетов</h2>
                    <div className="mt-8 overflow-x-auto rounded-[16px] border border-[#2a2a2a]">
                        <table className="w-full min-w-[720px] border-collapse bg-[#141414] text-left text-sm text-white/78">
                            <thead className="bg-[#1b1b1b] text-xs uppercase tracking-[0.12em] text-white/60">
                                <tr>
                                    <th className="border-b border-[#2a2a2a] px-4 py-3">Параметр</th>
                                    <th className="border-b border-[#2a2a2a] px-4 py-3">Basic</th>
                                    <th className="border-b border-[#2a2a2a] px-4 py-3">Standard</th>
                                    <th className="border-b border-[#2a2a2a] px-4 py-3">Full</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageComparisonRows.map((row) => (
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
                            <li>
                                • Если продаёте квартиру эконом-класса до $60 000 и нужно просто выделиться среди
                                соседних объявлений → <span className="font-semibold text-white">Basic</span>.
                            </li>
                            <li>
                                • Если объект стоит $60 000–$150 000 или нужен полноценный листинг для портала и соцсетей
                                → <span className="font-semibold text-white">Standard</span>.
                            </li>
                            <li>
                                • Если продаёте дорогой объект, пентхаус или целитесь на иностранных покупателей →{' '}
                                <span className="font-semibold text-white">Full</span>.
                            </li>
                        </ul>
                        <p className="mt-4 text-sm text-[#FFD23F]">
                            Не уверены? Напишите нам — за 5 минут подберём пакет под ваш объект. {CONTACT_PHONE_DISPLAY}
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="CTA №2: Получить пример готового комплекта. Напишите в WhatsApp — пришлём пример видео, фото и текста по похожему объекту."
                buttonLabel="Получить пример"
                href={WHATSAPP_URL}
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <article key={service.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="rounded-[20px] border border-[#FFD23F]/30 bg-[#121212] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Contact block</h2>
                        <p className="mt-4 max-w-3xl leading-relaxed text-white/72">
                            Работаем по всему Тбилиси. Снимаем в будни и выходные. Ближайший слот обычно через 2–4 дня —
                            напишите сейчас, чтобы забронировать удобную дату.
                        </p>
                        <p className="mt-5 text-sm text-white/75">📲 WhatsApp / Telegram: {CONTACT_PHONE_DISPLAY}</p>
                        <p className="mt-1 text-sm text-white/75">📍 Тбилиси, Грузия</p>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — видеопродакшн в Тбилиси. Снимаем квартиры, объекты и бизнес для продажи.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки в нише</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съёмке</h2>
                    <ul className="mt-8 grid gap-3 text-sm leading-relaxed text-white/74 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                ☐ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы для long-tail SEO</h2>

                    <article className="mt-8 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Как правильно снять квартиру для продажи на ss.ge?</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">
                            Большинство объявлений на ss.ge и myhome.ge содержат фото с телефона в плохом свете и
                            стандартное описание «3 комнаты, хороший ремонт». Чтобы выделиться, нужно сделать три вещи:
                            правильная съёмка, видео и нормальный текст. Для съёмки — дневной свет, открытые шторы,
                            стабилизатор или штатив. Главные ракурсы: широкий план каждой комнаты с угла, вид из окна,
                            кухня, санузел, вход в квартиру.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/72">
                            Текст должен отвечать на реальные вопросы покупателя: метраж комнат, парковка, транспортная
                            доступность, ориентиры в районе и расстояние до центра.
                        </p>
                    </article>

                    <article className="mt-5 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Влияет ли видео на скорость продажи квартиры?</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">
                            Да: объявления с видео получают до 4 раз больше обращений, а объекты с профессиональным
                            контентом продаются на 20–30% быстрее. Видео даёт покупателю ответы на ключевые вопросы до
                            звонка: планировка, состояние ремонта, вид из окна и ощущение пространства.
                        </p>
                    </article>

                    <article className="mt-5 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Чем отличается видео для портала от Reels для Instagram?</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">
                            Видео для портала — горизонтальный формат 16:9 длиной 1–2 минуты, спокойный темп и структурная
                            подача. Reels — вертикальный формат 9:16 длиной 15–60 секунд, быстрый хук в первые секунды и
                            акцент на самые сильные кадры.
                        </p>
                    </article>

                    <article className="mt-5 rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold text-white">Нужна ли аэросъёмка при продаже городской квартиры?</h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">
                            Для большинства квартир — это опция, а не обязательный элемент. Но для панорамных видов,
                            верхних этажей, элитных объектов, новостроек и загородной недвижимости дрон значительно усиливает
                            восприятие объекта и повышает доверие к объявлению.
                        </p>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <Link
                            href="/promo-video/promo-real-estate"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                        >
                            <p className="text-base font-bold text-white">Видеотур по квартире</p>
                            <p className="mt-2 text-sm text-white/72">Подробный walk-through для дорогих объектов и иностранных покупателей.</p>
                        </Link>
                        <Link
                            href="/reels-promo/reels-realtor"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                        >
                            <p className="text-base font-bold text-white">Reels для риелтора</p>
                            <p className="mt-2 text-sm text-white/72">Личный бренд агента в Instagram и TikTok.</p>
                        </Link>
                        <Link
                            href="/drone-real-estate"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                        >
                            <p className="text-base font-bold text-white">Аэросъёмка недвижимости</p>
                            <p className="mt-2 text-sm text-white/72">Дроновая съёмка объектов, ЖК и участков.</p>
                        </Link>
                        <Link
                            href="/360-tour-real-estate"
                            className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#FFD23F]/50"
                        >
                            <p className="text-base font-bold text-white">360° тур по объекту</p>
                            <p className="mt-2 text-sm text-white/72">Интерактивный виртуальный тур для встраивания на сайт.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/74">
                        Если вы хотите более детальный формат для дорогого объекта — посмотрите страницу{' '}
                        <Link href="/promo-video/promo-real-estate" className="text-[#FFD23F] underline decoration-dotted underline-offset-4">
                            Видеотур по квартире
                        </Link>
                        . Если нужен личный бренд в соцсетях, а не только контент под объекты — изучите{' '}
                        <Link href="/reels-promo/reels-realtor" className="text-[#FFD23F] underline decoration-dotted underline-offset-4">
                            Reels для риелтора
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
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

            <section className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы НЕ подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/74">
                        {notFitItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4">
                                • {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneStickyCta />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #ffd23f !important;
                            opacity: 1 !important;
                        }
                    `,
                }}
            />
        </main>
    );
}

```
---
---

## /reels-promo/reels-realtor
Lines: 1220
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-realtor';
const PAGE_TITLE = 'Reels для риелтора в Тбилиси — контент для Instagram и TikTok';
const PAGE_DESCRIPTION =
    'Регулярные Reels для риелтора в Тбилиси. Личный бренд, входящие заявки, экспертный контент. Съёмка и монтаж под ключ. От 200 ₾ за ролик.';
const CONTACT_PHONE = '+995 574 619 393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';
const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';

const audienceItems = [
    'Риелтор с 1–3 годами опыта — уже есть что сказать, но нет системы и времени создавать контент регулярно.',
    'Опытный агент, который работает только по рекомендациям — хочет расширить воронку и получать входящие заявки из соцсетей.',
    'Агент, специализирующийся на иностранных покупателях — нужен англоязычный контент про рынок Тбилиси для аудитории из-за рубежа.',
    'Сотрудник агентства с личным аккаунтом — компания не делает личный контент за него, а сам не успевает.',
    'Небольшое агентство — хочет регулярное присутствие в соцсетях как у крупных игроков, но без штатного маркетолога.',
    'Агент, который переходит в Instagram из рекомендационного канала — понимает, что рынок меняется, и хочет выстроить систему заранее.',
];

const taskCards = [
    {
        title: 'Строит входящий поток, а не только разовые сделки',
        text: 'Порталы дают лиды под конкретный объект, а Reels строят бренд: вас запоминают и обращаются именно к вам, когда приходит время купить или продать.',
    },
    {
        title: 'Переводит из «ещё одного агента» в эксперта',
        text: 'Контент про районы Тбилиси, цены, процесс покупки и типичные ошибки демонстрирует компетентность и сокращает цикл переговоров.',
    },
    {
        title: 'Работает круглосуточно',
        text: 'Ролики продолжают собирать просмотры и заявки, пока вы на показах или в выходной. Это актив, который работает 24/7.',
    },
    {
        title: 'Даёт преимущество при выборе агента продавцом',
        text: 'Когда собственник выбирает между несколькими агентами, живой Instagram с полезным контентом даёт доверие ещё до первого звонка.',
    },
];

const painCards = [
    {
        title: '«Понимаю, что надо снимать, но постоянно откладываю»',
        text: 'Между показами и документами контент всегда уходит на потом. Мы забираем продакшн на себя: от вас нужна только съёмочная сессия раз в 2–4 недели.',
    },
    {
        title: '«Снимал сам — получилось стыдно выкладывать»',
        text: 'Плохой звук, дрожащая камера, неловкие паузы. Профессиональная съёмка и монтаж убирают технические ошибки и добавляют уверенности в кадре.',
    },
    {
        title: '«Не знаю, о чём снимать — тем нет»',
        text: 'Темы уже есть: это вопросы ваших клиентов. Мы собираем их в контент-план и превращаем в серию роликов на месяц вперёд.',
    },
    {
        title: '«Веду аккаунт, но подписчиков мало и заявок нет»',
        text: 'Проблема обычно в формате и регулярности. Стабильный ритм 1–2 ролика в неделю даёт лучший результат, чем редкие рывки.',
    },
    {
        title: '«Конкуренты уже ведут — я опаздываю»',
        text: 'В Тбилиси многие агенты всё ещё публикуют только объявления. Экспертный личный контент остаётся нишей, где можно быстро выделиться.',
    },
    {
        title: '«Меня находят по листингу, но не запоминают»',
        text: 'Reels создают личное знакомство: клиент видит лицо, слышит голос, понимает ваш подход. Это повышает шанс повторной сделки и рекомендаций.',
    },
];

const earningsItems = [
    'Входящие заявки без рекламного бюджета: органический охват Reels в Instagram и TikTok приводит новую аудиторию.',
    'Преимущество в выборе агента: активный профиль работает как дополнительный аргумент до первого звонка.',
    'Более сильное позиционирование: эксперт с аудиторией может работать с более дорогими объектами и выше комиссией.',
    'Реферальный эффект: подписчики делятся полезными роликами с теми, кто уже ищет агента.',
];

const saveItems = [
    'Не теряете клиентов, которые «ещё думают» 3–6 месяцев до сделки.',
    'Не зависите только от рекомендаций: появляется параллельный и управляемый канал заявок.',
    'Не выгораете от постоянной рекламы: контент продолжает работать после публикации.',
    'Не теряете базу при смене агентства: личный бренд и аудитория остаются с вами.',
];

const deliverables = [
    'Съёмка 4–8 Reels за одну сессию (30–90 секунд, формат 9:16).',
    'Монтаж с субтитрами, музыкой и текстовыми вставками.',
    'Адаптация под Instagram Reels и TikTok с хук-открытием в первые 3 секунды.',
    'Горизонтальная версия для YouTube Shorts или Facebook — по запросу.',
    'Контент-план на месяц с темами и сценарным скелетом каждого ролика.',
    'Готовые тексты к постам (caption) на русском.',
    'Английские субтитры для роликов про рынок Тбилиси — при необходимости.',
    'Передача материалов через Google Drive раз в неделю или раз в 2 недели.',
];

const outputItems = [
    'MP4, 1080p, вертикальный 9:16 (основной формат).',
    'Горизонтальный 16:9 — по запросу.',
    'Субтитры: вшитые в видео или отдельный SRT-файл.',
    'Ритм: обычно 1–2 ролика в неделю.',
    'Папка с понятными именами файлов + готовые тексты к каждому ролику.',
];

const useCases = [
    {
        title: 'Агент работает с иностранными покупателями',
        text: 'Reels на русском и английском: обзоры районов, процесс покупки в Грузии, сравнение ЖК. Аудитория — релоканты и инвесторы из-за рубежа.',
    },
    {
        title: 'Молодой риелтор строит базу с нуля',
        text: 'Когда нет сильного сарафана, регулярный контент даёт первое знакомство заранее: клиент приходит уже «из контента».',
    },
    {
        title: 'Опытный агент усиливает рекомендации',
        text: 'При рекомендации новый контакт первым делом проверяет Instagram. Живой экспертный профиль ускоряет решение в вашу пользу.',
    },
    {
        title: 'Небольшое агентство без SMM-менеджера',
        text: 'Одна сессия раз в 3 недели на 6–8 роликов закрывает контент-план месяца без найма штатного маркетолога.',
    },
];

const miniCases = [
    {
        title: 'Агент в Ваке — 3 заявки за первый месяц',
        text: 'Запустили серию Reels с разбором районов Тбилиси. За первый месяц регулярного контента получили 3 органические заявки из Instagram.',
    },
    {
        title: 'Агентство из 5 человек — единый голос в соцсетях',
        text: 'Одна съёмочная сессия в месяц с одним из агентов дала 8 роликов на месяц. Аккаунт стал активным и начал привлекать подписчиков-клиентов.',
    },
    {
        title: 'Агент для иностранных покупателей — аудитория из Израиля',
        text: 'Серия на английском про налоги, районы и процесс покупки в Грузии. Видео про налоги набрало более 5 000 просмотров за первую неделю.',
    },
];

const socialProofItems = [
    'Понимаем специфику контента для риелторов: район, цена, процесс, советы работают лучше «сухих объявлений».',
    'Строим хук в первые 3 секунды — это напрямую влияет на досмотры и охваты.',
    'Субтитры включены по умолчанию: большинство смотрит Reels без звука.',
    'Снимаем изначально в вертикальном формате 9:16 на профессиональную камеру со стабилизацией.',
];

const beginnerFaqItems = [
    {
        question: 'Мне нужно много подписчиков, чтобы Reels работали?',
        answer:
            'Нет. Instagram продвигает Reels даже у небольших аккаунтов, если контент досматривают. Полезный ролик про рынок Тбилиси может набрать тысячи просмотров даже с нулевой базой.',
    },
    {
        question: 'Я боюсь камеры и не умею говорить на видео.',
        answer:
            'Это нормально. На первых сессиях мы даём структуру ответа и снимаем несколько дублей. После 2–3 съёмок большинство агентов чувствуют себя уверенно.',
    },
    {
        question: 'Что снимать: квартиры или рынок?',
        answer:
            'Для личного бренда лучше работает экспертный контент: районы, цены, ошибки покупателей и продавцов, процесс сделки. Ролики про отдельные объекты обычно имеют более узкий интерес.',
    },
    {
        question: 'Как часто публиковать?',
        answer:
            'Оптимальный ритм — 1–2 раза в неделю. Это достаточно для стабильного роста без перегруза по производству.',
    },
    {
        question: 'Нужно ли параллельно вести Stories?',
        answer:
            'Reels приводят новую аудиторию, Stories удерживают текущую. Мы фокусируемся на Reels и даём практичные рекомендации по Stories как поддерживающему формату.',
    },
    {
        question: 'Если я сменю агентство, что будет с контентом?',
        answer: 'Контент остаётся у вас в личном аккаунте. Личный бренд не обнуляется при переходе.',
    },
];

const moneyFaqItems = [
    {
        question: 'Сколько стоит Reel для риелтора?',
        answer: 'Один ролик — от 200 ₾. Пакет 4 ролика — от 650 ₾. Ежемесячный пакет 8 роликов — от 1 200 ₾.',
    },
    {
        question: 'Как часто нужны съёмочные сессии?',
        answer:
            'Обычно раз в 2–4 недели. За одну сессию снимаем 4–8 роликов, что закрывает 1–2 месяца публикаций в спокойном ритме.',
    },
    {
        question: 'Что входит в ежемесячный пакет?',
        answer:
            'Съёмка, монтаж 8 роликов с субтитрами, контент-план, тексты к постам и рекомендации по расписанию публикаций.',
    },
    {
        question: 'Можно заказать только монтаж, если снимаю сам?',
        answer:
            'Да. Вы присылаете сырой материал, мы делаем монтаж с субтитрами, музыкой и оверлеями. Стоимость монтажа — от 80 ₾ за ролик.',
    },
    {
        question: 'Нужно ли самому придумывать темы?',
        answer:
            'Нет. Проводим короткий бриф, собираем вопросы вашей аудитории и формируем контент-план. Вы только утверждаете темы.',
    },
    {
        question: 'Как быстро получу готовые ролики?',
        answer: 'Обычно 3–5 рабочих дней после съёмки. Передача идёт с запасом к дате публикации.',
    },
];

const whyBreusItems = [
    'Понимаем, что продаёт в недвижимости: строим темы на реальных вопросах покупателей и продавцов.',
    'Хук и структура каждого ролика проектируются под удержание внимания, а не «для красоты».',
    'Субтитры входят в стандарт: это не допопция.',
    'Одна сессия раз в 2–4 недели закрывает контент-систему на месяц и больше.',
    'Работаем в Тбилиси и учитываем локальный контекст районов и аудитории.',
];

const processSteps = [
    {
        step: 'Шаг 1',
        title: 'Бриф (15 минут)',
        text: 'Определяем аудиторию, районы, частые вопросы клиентов и желаемый стиль коммуникации.',
    },
    {
        step: 'Шаг 2',
        title: 'Контент-план',
        text: 'Собираем 8–12 тем и сценарный скелет: с какого хука начать и какие тезисы раскрыть.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочная сессия',
        text: 'За 1,5–2 часа снимаем 4–8 роликов. Вы говорите своими словами, мы направляем по структуре.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: '3–5 дней: лучшие дубли, ритм, субтитры, музыка, текстовые вставки и цветокоррекция.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и расписание',
        text: 'Получаете папку с роликами, caption-текстами и рекомендациями по датам публикаций.',
    },
];

const packages = [
    {
        title: 'Basic — Старт',
        price: 'от 650 ₾',
        subtitle: 'Для теста формата и первых результатов',
        features: [
            '1 съёмочная сессия',
            '4 готовых ролика с субтитрами и музыкой',
            'Контент-план на месяц (8 тем)',
            'Тексты к постам',
            'Срок: 4–5 дней после съёмки',
        ],
    },
    {
        title: 'Standard — Ежемесячный контент',
        price: 'от 1 200 ₾/мес',
        subtitle: 'Стабильное присутствие 1–2 ролика в неделю',
        features: [
            '1 съёмочная сессия в месяц',
            '8 роликов в месяц (субтитры, музыка, оверлеи)',
            'Контент-план на следующий месяц',
            'Тексты к постам и рекомендации по расписанию',
            'Передача за 3–4 дня до публикации',
        ],
        featured: true,
    },
    {
        title: 'Full — Личный бренд под ключ',
        price: 'от 2 000 ₾/мес',
        subtitle: 'Для серьёзного роста и двуязычного контента',
        features: [
            '2 съёмочные сессии в месяц',
            '14–16 роликов (Reels + горизонтальные версии)',
            'Английские субтитры для ключевых роликов',
            'Контент-план RU + EN и тексты RU + EN',
            'Ежемесячный разбор статистики и корректировка тем',
        ],
    },
];

const packageCompareRows = [
    ['Съёмочных сессий', '1', '1/мес', '2/мес'],
    ['Роликов', '4', '8/мес', '14–16/мес'],
    ['Субтитры', 'RU', 'RU', 'RU + EN'],
    ['Тексты к постам', 'Да', 'Да', 'RU + EN'],
    ['Контент-план', 'Да', 'Да + след. месяц', 'RU + EN + аналитика'],
    ['YouTube (горизонт.)', '—', '—', 'Да'],
    ['Разбор статистики', '—', '—', 'Да, ежемесячно'],
    ['Цена', '650 ₾ разово', '1 200 ₾/мес', '2 000 ₾/мес'],
];

const relatedServices = [
    {
        title: 'Видеосъёмка квартир для продажи',
        href: '/reels-promo/reels-real-estate',
        text: 'Контент под конкретный объект, а не под личный бренд агента.',
    },
    {
        title: 'Видеотур по квартире',
        href: '/promo-video/promo-real-estate',
        text: 'Подробный walk-through для листинга, сайта и удалённых покупателей.',
    },
    {
        title: 'Промо-видео для агентства',
        href: '/promo-video',
        text: 'Имиджевый ролик о компании и команде в целом.',
    },
    {
        title: 'AI-визуализация',
        href: '/ai-vizual',
        text: 'Интерьерная визуализация и обработка фото объектов.',
    },
];

const commonMistakes = [
    'Публиковать только объявления о продаже квартир без экспертной пользы.',
    'Снимать нерегулярно: всплеск контента и пауза на месяцы.',
    'Говорить только профессиональными терминами без языка покупателя.',
    'Игнорировать первые 3 секунды и начинать с «Привет, сегодня расскажу...».',
    'Выпускать ролики без субтитров, хотя большинство смотрит без звука.',
    'Ждать «идеального видео» и не публиковать готовый материал вовремя.',
];

const freeImprovements = [
    'Составьте список из 20 частых вопросов клиентов: это готовые темы для Reels.',
    'Добавьте автосубтитры ко всем уже снятым роликам.',
    'Начинайте ролик с вопроса, цифры или сильного тезиса.',
    'Снимайте строго вертикально и держите лицо в верхней трети кадра.',
    'Публикуйте стабильно, даже если ролик не кажется идеальным.',
];

const prepChecklist = [
    'Список из 8–10 тем согласован заранее.',
    'Фон нейтральный, без визуального шума.',
    'Одежда сдержанная, деловая-casual, без кричащих принтов.',
    'Свет направлен на лицо, не из-за спины.',
    'Микрофон подготовлен или выбрано тихое помещение.',
    'Телефон заряжен и есть свободная память, либо снимаем на нашу камеру.',
    'Готовность сделать 2–3 дубля на тему.',
    'Подготовлена первая фраза каждого ролика.',
];

const longTailQa = [
    {
        question: 'Как риелтору начать вести Instagram с нуля в 2026 году?',
        answer:
            'Старт проще, чем кажется: берёте 5 самых частых вопросов клиентов, снимаете 5 роликов и публикуете раз в неделю в течение месяца. Смотрите, какие темы набирают больше досмотров, и масштабируете их. Базово достаточно телефона, света и субтитров. Если хотите быстрый профессиональный старт, одна сессия с продакшном закрывает первый месяц контента.',
    },
    {
        question: 'Какие темы Reels лучше всего работают для риелтора в Тбилиси?',
        answer:
            'Лидируют темы, которые решают конкретные вопросы аудитории: сравнение районов, налоги и процесс покупки для иностранцев, ошибки при выборе квартиры, динамика цен, практические советы по торгу. Контент про конкретный листинг полезен, но обычно имеет более узкий охват.',
    },
    {
        question: 'Сколько времени занимает ведение Instagram для риелтора?',
        answer:
            'При самостоятельной работе это обычно 2–4 часа в неделю. С подрядчиком — 1,5–2 часа раз в 2–3 недели на съёмку, остальное делается командой продакшна. На дистанции регулярность выигрывает у перфекционизма: 1 ролик в неделю 3 месяца лучше, чем 10 роликов за один уикенд.',
    },
    {
        question: 'Помогает ли Instagram риелтору реально получать клиентов в Тбилиси?',
        answer:
            'Да, но это накопительный канал. Обычно 3–6 месяцев стабильной публикации формируют первые предсказуемые органические заявки. В Тбилиси большинство аккаунтов в недвижимости всё ещё ведутся как витрина объявлений, поэтому экспертный контент даёт заметное конкурентное преимущество.',
    },
];

const shortQa = [
    ['Сколько стоит Reel для риелтора в Тбилиси?', 'Один ролик — от 200 ₾, пакет 4 ролика — от 650 ₾, 8 роликов в месяц — от 1 200 ₾.'],
    ['Как часто нужно публиковать Reels?', 'Оптимально 1–2 раза в неделю. Это поддерживает рост и не перегружает процесс.'],
    ['Нужны ли субтитры?', 'Да, обязательно. Значительная часть аудитории смотрит Reels без звука.'],
    ['Какие темы работают лучше всего?', 'Сравнение районов, советы покупателям, процесс сделки, ошибки и рыночная аналитика.'],
    ['За сколько приходят первые клиенты?', 'Чаще всего при стабильной работе — через 3–6 месяцев.'],
    ['Нужны ли большие подписчики на старте?', 'Нет. Полезные Reels могут набирать охват и у новых аккаунтов.'],
    ['Можно заказать только монтаж?', 'Да, монтаж из ваших исходников доступен от 80 ₾ за ролик.'],
    ['Работаете с агентствами на несколько агентов?', 'Да, выстраиваем единый стиль и регулярный план для нескольких специалистов.'],
] as const;

const myths = [
    {
        myth: 'Нужно сначала набрать подписчиков, потом будут клиенты.',
        reality: 'Reels показываются новой аудитории независимо от текущего числа подписчиков.',
    },
    {
        myth: 'Людям неинтересно смотреть риелтора в Instagram.',
        reality: 'Аудитории нужны ответы на вопросы о рынке. Если вы их даёте, контент работает.',
    },
    {
        myth: 'Без дорогой камеры невозможно снимать Reels.',
        reality: 'Хороший свет и понятная структура важнее. Профессиональный монтаж усиливает результат.',
    },
    {
        myth: 'Нужен один вирусный ролик — и достаточно.',
        reality: 'Система и регулярность 1–2 ролика в неделю дают стабильный эффект лучше случайного «вирала».',
    },
    {
        myth: 'Instagram не для моей аудитории 30–50 лет.',
        reality: 'В этой возрастной группе в Грузии активная аудитория, особенно среди покупателей и инвесторов.',
    },
];

const glossary = [
    {
        term: 'Reels',
        definition: 'Короткие вертикальные видео (15–90 сек), которые алгоритм показывает не только подписчикам.',
    },
    {
        term: 'Хук',
        definition: 'Первые 2–3 секунды ролика, которые удерживают внимание и влияют на досмотр.',
    },
    {
        term: 'Субтитры',
        definition: 'Текст в видео, позволяющий смотреть и понимать ролик без звука.',
    },
    {
        term: 'Контент-план',
        definition: 'Список тем и дат публикаций на месяц вперёд.',
    },
    {
        term: 'Органический охват',
        definition: 'Просмотры без рекламного бюджета, полученные через алгоритм.',
    },
    {
        term: 'Caption',
        definition: 'Текст под роликом, который помогает вовлечению и поисковой видимости в Instagram.',
    },
];

const notFitItems = [
    'Если нужен результат за 2 недели: контент даёт накопительный эффект, обычно 3–6 месяцев.',
    'Если вы категорически не готовы появляться в кадре: личный бренд без лица почти не работает.',
    'Если нужно полное ведение аккаунта с публикациями и DM: это отдельная услуга SMM.',
    'Если стартовый бюджет ниже 650 ₾: качественный базовый пакет в меньший бюджет не помещается.',
];

const faqSchemaItems = [
    ...beginnerFaqItems,
    ...moneyFaqItems,
    ...shortQa.map(([question, answer]) => ({ question, answer })),
];

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
            name: 'Reels и промо-видео',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Reels для риелтора',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример Reels для риелтора',
    description: 'Пример короткого вертикального ролика для аккаунта риелтора в Instagram/TikTok.',
    embedUrl: REEL_EXAMPLE_EMBED,
    contentUrl: REEL_EXAMPLE_URL,
    thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    uploadDate: '2026-03-21',
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
    name: 'Reels для риелторов в Тбилиси',
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

export default function ReelsRealtorPage() {
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
                id="reels-realtor-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                                Reels для риелтора · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для риелтора — регулярный контент для Instagram и TikTok
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Личный бренд, который работает без рекламных бюджетов. Еженедельные ролики о рынке
                                недвижимости Тбилиси — от вашего лица.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                71% покупателей недвижимости доверяют агентам, которые активно ведут соцсети. Мы берём
                                продакшн на себя: съёмка, монтаж, контент-план и передача по расписанию.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить контент-план
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
                                    <p className="text-2xl font-bold text-white">от 200 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за ролик под ключ.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–8</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">роликов / сессия</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до готовности</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Форматы: Instagram Reels + TikTok</li>
                                    <li>RU и EN сценарии и субтитры</li>
                                    <li>Тбилиси и вся Грузия по запросу</li>
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
                            <p className="mt-5 leading-relaxed text-white/72">
                                Reels для риелтора — это не видео про квартиры, а видео про вас как эксперта: ваши
                                знания о рынке, советы покупателям и продавцам, обзоры районов, ответы на частые
                                вопросы.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Когда человек ищет агента в Тбилиси, он идёт к тому, кого уже «знает» по контенту. Мы
                                помогаем стать этим знакомым лицом без еженедельной рутины продакшна.
                            </p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#D4A017]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Пример формата Reels</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    Ниже встроен пример вертикального short-form формата, который используем для
                                    Instagram Reels и TikTok.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[380px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Пример Reels"
                                    src={REEL_EXAMPLE_EMBED}
                                    loading="lazy"
                                    className="h-[640px] w-full"
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
                                {earningsItems.map((item) => (
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
                                {saveItems.map((item) => (
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
                            <h2 className="text-2xl font-bold text-white">Что входит в услугу</h2>
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
                            <h2 className="text-2xl font-bold text-white">Что получаете на выходе</h2>
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
                        <h3 className="text-xl font-bold text-white">Обсудить контент-план для моего аккаунта</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Расскажите про ваш аккаунт и аудиторию. За 15 минут соберём план из 8 тем для первого
                            месяца. Бесплатно и без обязательств.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Telegram
                            </a>
                            <a
                                href="tel:+995574619393"
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
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст Тбилиси</h2>
                    <div className="mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
                        <p>
                            Рынок недвижимости Тбилиси активен в Instagram, но большинство аккаунтов публикуют только
                            объявления. Экспертного контента от местных агентов всё ещё мало, и это даёт пространство
                            для быстрого роста.
                        </p>
                        <p>
                            Особенно сильный спрос на такой контент у аудитории 25–45 лет и у иностранцев, которые
                            ищут агента ещё до прилёта в Грузию по запросам вроде «realtor Tbilisi Instagram».
                        </p>
                        <p>
                            В Тбилиси одновременно активны русскоязычная и англоязычная аудитории, поэтому
                            двуязычная стратегия (RU + EN) позволяет охватывать оба сегмента без дублирования
                            продакшна.
                        </p>
                    </div>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Доказательства подхода</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <ProcessNote text="Начинаем с 15-минутного брифа, затем съёмка 1,5–2 часа на 4–8 роликов, монтаж 3–5 дней и передача по расписанию." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты услуг</h2>
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
                                    <th className="px-4 py-3 font-bold">Параметр</th>
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
                            <li>Если хотите попробовать формат и проверить отклик — выбирайте Basic.</li>
                            <li>Если нужен стабильный ритм без лишней головной боли — Standard.</li>
                            <li>Если строите серьёзный личный бренд и двуязычный контент — Full.</li>
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Не знаете, какой пакет подойдёт? Напишите нам и за 10 минут определим оптимальный старт.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/40 bg-[#111111] p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">Получить контент-план на первый месяц</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Напишите в WhatsApp: коротко про аудиторию и задачу. Мы соберём список из 8 тем для первых
                            роликов бесплатно и без обязательств.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Получить план
                            </a>
                            <a
                                href="tel:+995574619393"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                {CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Связанные услуги</h2>
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

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                            Работаем с риелторами по всему Тбилиси. Снимаем утром, вечером и в выходные. Первая сессия
                            обычно через 3–7 дней после брифа.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">WhatsApp / Telegram</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия</p>
                            </div>
                        </div>
                        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/45">
                            Breus Media — видеопродакшн в Тбилиси для риелторов и агентств недвижимости.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки в нише</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
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
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съёмке</h2>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {prepChecklist.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4 text-sm leading-relaxed text-white/75"
                            >
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-[#D4A017]">
                                    □
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы для long-tail SEO</h2>
                    <div className="mt-8 space-y-5">
                        {longTailQa.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 space-y-4">
                        {shortQa.map(([question, answer]) => (
                            <article key={question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-white">{question}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/72">{answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы и переходы</h2>
                    <div className="mt-8 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                        <p>
                            Если вам нужен контент под конкретный объект, а не под личный бренд, перейдите в{' '}
                            <Link href="/reels-promo/reels-real-estate" className="text-[#D4A017] hover:text-white">
                                «Видеосъёмка квартир для продажи»
                            </Link>
                            .
                        </p>
                        <p>
                            Если важно детально показать конкретную квартиру удалённым покупателям, подойдёт{' '}
                            <Link href="/promo-video/promo-real-estate" className="text-[#D4A017] hover:text-white">
                                «Видеотур по квартире»
                            </Link>
                            .
                        </p>
                        <p>
                            Для бренда агентства в целом лучше выбрать{' '}
                            <Link href="/promo-video" className="text-[#D4A017] hover:text-white">
                                «Промо-видео для агентства»
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-4xl">
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
                        Обсудить Reels
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

```
---
---

## /reels-promo/reels-restaurant
Lines: 1353
```tsx
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

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-restaurant';
const PAGE_TITLE = 'Reels для ресторана в Тбилиси — съёмка Instagram и TikTok';
const PAGE_DESCRIPTION =
    'Снимем серию Reels для вашего ресторана: блюда, бар, атмосфера, команда. Пакет из 6–10 роликов. От 200 ₾ за ролик. Тбилиси и вся Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80';

const serviceIntro =
    'Reels для ресторана — это серия коротких вертикальных видео (9:16, 10–60 секунд), снятых и смонтированных специально для Instagram Reels, TikTok и рекламных форматов. Мы снимаем блюда в движении, атмосферу зала, работу бара, команду — с хуками, ритмом и монтажом под актуальные тренды. Не разовое «красивое видео», а пакет контента, который работает как машина охвата: каждый ролик — новая точка входа для потенциального гостя.';

const audienceItems = [
    'Владелец ресторана, который хочет расти в Instagram/TikTok, но не знает с чего начать.',
    'SMM-менеджер заведения, которому нужен профессиональный production — съёмка и монтаж под тренды.',
    'Управляющий, который понимает: регулярный контент важен, но снимать самим — нет ресурсов.',
    'Ресторан с уже сформированным образом, которому нужно системное присутствие в коротком видео.',
    'Заведения, запускающие доставку или хотящие выйти на новую аудиторию через рекомендательные алгоритмы.',
    'Ресторанные группы, которым нужен повторяемый контент-стандарт для нескольких заведений.',
];

const taskCards: Card[] = [
    {
        title: 'Органический охват без постоянного рекламного давления',
        text: 'Серия Reels создаёт системный вход в рекомендации Instagram и TikTok: новые гости видят заведение даже без подписки и без ежедневных запусков таргета.',
    },
    {
        title: 'Библиотека контента на 4–8 недель',
        text: 'Один выезд закрывает сразу несколько форматов: публикации, Stories, рекламные креативы и контент для сезонных анонсов.',
    },
    {
        title: 'Превращение блюд и атмосферы в вирусный материал',
        text: 'Хуки, монтаж под ритм и правильная последовательность сцен увеличивают досмотры, сохранения и шансы попасть в рекомендации.',
    },
    {
        title: 'Выход на туристов и экспатов',
        text: 'Аудитория, которая ищет новые места через короткие видео, видит вас в ленте и добавляет ресторан в свой список визита.',
    },
];

const painCards: Card[] = [
    {
        title: '«Мы давно не выходим в рекомендации — нас видят только старые подписчики»',
        text: 'Алгоритмы Instagram и TikTok приоритизируют вертикальные видео. Если у ресторана нет регулярного short-form контента, для новой аудитории он почти невидим.',
    },
    {
        title: '«Снимаем сами, но выглядит неубедительно»',
        text: 'Камера телефона не заменяет сценарное мышление, свет, ритм и монтаж. Профессиональный Reel отличим в первые секунды — и именно это влияет на удержание.',
    },
    {
        title: '«Один ролик быстро умирает — снова нечего публиковать»',
        text: 'Один ролик — одна попытка. Пакет из 6–10 роликов — это регулярность и статистическая вероятность попадания в рекомендации.',
    },
    {
        title: '«Не понимаем, что снимать: блюда, зал или команду»',
        text: 'Мы строим форматы под вашу нишу: для грузинской кухни, бара и fine dining работают разные сценарии и разная динамика подачи.',
    },
    {
        title: '«Запускаем таргет, но нет креативов для рекламы»',
        text: 'Без сильного видео таргет сжигает бюджет. Reels-креативы дают лучший старт для тестов в Instagram и TikTok Ads.',
    },
    {
        title: '«SMM есть, но production закрыть некому»',
        text: 'Ведение аккаунта и производство видео — разные роли. Мы закрываем съёмку и монтаж, чтобы ваша команда фокусировалась на публикации и коммуникации.',
    },
];

const earnPoints = [
    'Рост органического охвата: больше новых гостей без обязательного рекламного бюджета.',
    'Продажи через «гастро-желание»: визуально сильный ролик вызывает желание попробовать и приводит к броням.',
    'Эффективная реклама: пакет роликов повышает качество креативов и снижает стоимость взаимодействий.',
    'Привлечение туристов и экспатов: TikTok и Reels работают как канал открытия новых мест в Тбилиси.',
];

const avoidLossPoints = [
    'Защита от «информационного вакуума»: активный профиль считывается как живой и востребованный.',
    'Независимость от пользовательского контента: не нужно ждать, пока гости снимут и выложат хорошее видео.',
    'Снижение зависимости от платной рекламы: сильная органика даёт стабильный поток внимания.',
    'Контент-резерв на форс-мажор: пакет роликов покрывает 4–8 недель публикаций.',
];

const deliverables = [
    '6–10 готовых вертикальных роликов (9:16, 10–60 сек), смонтированы и готовы к публикации.',
    'Hook & Caption Bank: RU/EN хуки под каждый ролик и шаблоны подписей с хэштегами для Тбилиси.',
    'Рекомендации по звуку и трендам: какие треки использовать, чтобы сохранить стиль заведения и усилить охват.',
    'Скелет постинг-календаря на 4 недели: что и когда публиковать (будни/выходные, обед/ужин).',
    'Обложки-кавер для каждого Reels: единый визуальный стиль сетки и Highlights.',
];

const outputItems = [
    'Форматы: MP4 (9:16, 1080p/4K), обложки PNG, текстовый файл с хуками и подписями.',
    'Количество: 6–10 роликов в зависимости от пакета.',
    'Сроки: съёмка 1 день (4–5 часов), монтаж и сдача пакета — 5–7 рабочих дней.',
    'Передача: Google Drive / WeTransfer, с пояснениями по каждому ролику.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Новое сезонное меню',
        text: 'Обновили летнее меню и нужно быстро показать новинки. Снимаем серию: hero-блюда в движении, бар с сезонными коктейлями, «новинка дня». Публикация в течение 2 недель даёт охват выше обычных постов.',
    },
    {
        title: 'Сценарий 2 — Привлечение туристов',
        text: 'Заведение в Старом Тбилиси хочет попасть в рекомендации по геолокации. Снимаем серию с видами города, подачей грузинских блюд и атмосферой вечера, добавляем хуки для туристической аудитории.',
    },
    {
        title: 'Сценарий 3 — Запуск рекламы',
        text: 'SMM запускает таргет, а фото не конвертируют. Делаем пакет из 8 роликов, из которых 3 идут в рекламу как тестовые варианты. Лучший масштабируется в основной креатив.',
    },
    {
        title: 'Сценарий 4 — Возврат «спящей» аудитории',
        text: 'Профиль был неактивен несколько месяцев. Серия Reels в течение 2 недель помогает оживить аккаунт и вернуть внимание подписчиков.',
    },
];

const localContextText =
    'TikTok и Instagram Reels в Тбилиси — реальный канал открытия новых заведений. Особенно для трёх аудиторий: туристы с заранее составленным watchlist из соцсетей, экспаты и удалёнщики, которые ищут новые места в городе, и молодёжь 20–35 лет, для которой ресторан без TikTok почти «не существует». Именно поэтому системный short-form контент сегодня становится не дополнением, а базовой частью маркетинга HoReCa в Грузии.';

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Бар с авторскими коктейлями, Сололаки',
        text: 'До работы вели только фото и теряли охват. После пакета из 8 Reels один ролик набрал 45 000 просмотров, за неделю профиль получил +380 подписчиков и брони на вечер.',
    },
    {
        title: 'Кейс 2 — Ресторан грузинской кухни для туристов',
        text: 'Задача — попасть в выдачу по геолокации Тбилиси. Серия Reels с традиционными блюдами и видами Старого города дала суммарно 90 000+ просмотров и рост рекомендаций.',
    },
    {
        title: 'Кейс 3 — Пиццерия с доставкой',
        text: 'Продвигали Wolt-профиль через ролики о процессе приготовления: печь, тесто, финальная подача. За первый месяц CTR переходов на Wolt вырос в 2,4 раза.',
    },
];

const socialProofItems = [
    '61% посетителей ресторанов отмечают, что короткие видео в TikTok и Instagram влияют на решение прийти.',
    'Заведения с регулярными Reels обычно получают в 2–3 раза больший охват, чем аккаунты только с фото.',
    'Reels чаще попадают в рекомендации по сравнению со статичными постами и каруселями.',
    'Stories и Reels остаются главным способом донести новинки меню, акции и события до аудитории.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое Reels и зачем они нужны ресторану?',
        answer:
            'Reels — это короткие вертикальные видео в Instagram и TikTok. Алгоритмы показывают их не только подписчикам, но и новой аудитории, которая о вас не слышала. Для ресторана это основной инструмент органического роста без постоянного рекламного бюджета.',
    },
    {
        question: 'Как выглядит процесс съёмки и что нам нужно подготовить?',
        answer:
            'Перед съёмкой мы присылаем короткий бриф: какие блюда, какие сцены и какой вайб нужен. Вы готовите 3–5 блюд для постановочных кадров и приводите пространство в порядок. Съёмку, сценарий и монтаж закрываем мы.',
    },
    {
        question: 'Могут ли Reels навредить образу дорогого ресторана?',
        answer:
            'Нет, если формат подобран правильно. Для fine dining и fast casual работают разные стили: в первом случае — спокойный ритм и акцент на деталях, во втором — более динамичный монтаж и текстовые хуки.',
    },
    {
        question: 'Как часто нужно публиковать Reels?',
        answer:
            'Оптимально 2–3 раза в неделю для заметного роста охвата. Пакет из 6–10 роликов обычно закрывает 3–5 недель регулярного постинга.',
    },
    {
        question: 'Нужны ли трендовые звуки или можно использовать свою музыку?',
        answer:
            'Лучше работает комбинация: трендовые звуки помогают охвату, а фирменный звук поддерживает имидж. Мы подбираем треки, доступные в Instagram и TikTok, под атмосферу заведения.',
    },
    {
        question: 'Вы ведёте аккаунт ресторана или только снимаете контент?',
        answer:
            'Мы отвечаем за production: съёмка, монтаж, обложки, хуки и календарь. Публикацию и ведение аккаунта выполняет ваша команда или SMM-менеджер.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит пакет Reels для ресторана?',
        answer:
            'Basic: 6 роликов от 1 200 ₾. Standard: 8 роликов + Caption Bank + календарь от 1 600 ₾. Full: 10 роликов + рекламные версии и расширенные материалы от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Можно заказать только 1–2 ролика, а не пакет?',
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
        question: 'Можно ли отдать вам наш исходник только на монтаж?',
        answer: 'Да, если исходный материал по качеству подходит для монтажа. Формат и объём обсуждаем индивидуально.',
    },
    {
        question: 'Что делать после первого пакета Reels?',
        answer:
            'Обычно либо повторный пакет через 1,5–2 месяца, либо переход на ежемесячный контент-пакет с регулярной съёмкой и планированием.',
    },
];

const whyBreusItems = [
    'Мы снимаем не «просто красиво», а проектируем ролики под алгоритмы и удержание внимания.',
    'Понимаем локальную аудиторию Тбилиси: туристы, экспаты и грузинская молодёжь реагируют на разные форматы.',
    'Даём не только видео, но и стратегический слой: hooks, captions, постинг-план и рекомендации по запуску.',
    'Минимизируем стресс: один выезд, чёткий shot-list, понятная сдача.',
    'Легко интегрируемся в работу вашего SMM: передаём всё в структуре, удобной для публикаций и рекламы.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Фиксируем форматы роликов, аудиторию, блюда и стиль подачи под ваш ресторан.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка сцен',
        text: 'Вы готовите блюда и пространство, мы приезжаем с оборудованием и сценарным планом.',
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
        title: 'Правки и финальная передача',
        text: '2 раунда правок, передача финалов + Hook & Caption Bank + постинг-календарь.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'BASIC — «Старт»',
        price: 'от 1 200 ₾',
        subtitle: 'Быстрый вход в формат Reels без большого бюджета.',
        audience: 'Для кого: рестораны, которые впервые системно запускают короткие видео.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '6 готовых Reels (9:16, до 60 сек).',
            'Базовые RU-хуки для каждого ролика.',
            '2 раунда правок.',
            'Финальные файлы для публикации и рекламы.',
        ],
    },
    {
        title: 'STANDARD — «Активный профиль»',
        price: 'от 1 600 ₾',
        subtitle: 'Системный контент + календарь публикаций.',
        audience: 'Для кого: рестораны с активным SMM и задачей регулярно расти в охватах.',
        timeline: 'Срок: до 7 рабочих дней.',
        features: [
            '8 Reels + короткие версии для Stories.',
            'Hook & Caption Bank (RU/EN).',
            'Постинг-календарь на 4 недели.',
            'Рекомендации по звуку и трендам.',
            'Обложки-кавер для Highlights.',
            '2 раунда правок.',
        ],
        featured: true,
    },
    {
        title: 'FULL — «Контент-машина»',
        price: 'от 2 000 ₾',
        subtitle: 'Максимальный пакет для рекламы и масштабирования.',
        audience: 'Для кого: ресторанные группы, проекты с регулярным таргетом и большим трафиком.',
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
    ['Рекомендации по звуку/трендам', '—', '✓', '✓'],
    ['Обложки-кавер (Highlights)', '—', '✓', '✓'],
    ['Версии под рекламу', '—', '—', '✓'],
    ['Контент-рубрики на след. месяц', '—', '—', '✓'],
    ['Раунды правок', '2', '2', '3'],
    ['Срок готовности', '7 дней', '7 дней', '5 дней'],
    ['Цена', '1 200 ₾', '1 600 ₾', '2 000 ₾'],
];

const packagePickerItems = [
    'Первый запуск Reels и хотите проверить формат → Basic.',
    'Ведёте соцсети регулярно и нужен контент + публикационный план → Standard.',
    'Запускаете рекламу или строите полноценную контент-машину → Full.',
];

const relatedServices = [
    {
        title: 'Имиджевое видео ресторана',
        href: '/promo-video/promo-restaurant',
        text: 'Флагманский ролик 60–90 секунд: атмосфера, интерьер, команда и подача.',
    },
    {
        title: 'Контент-пакет на месяц',
        href: '/reels-promo/restaurant-content-pack',
        text: 'Ежемесячная съёмка с контент-планом и регулярным потоком публикаций.',
    },
    {
        title: 'Съёмка интерьера и блюд',
        href: '/promo-video/restaurant-interior-food',
        text: 'Фото- и видео-библиотека для меню, Wolt, Google Maps, сайта и рекламы.',
    },
    {
        title: '360° тур по ресторану',
        href: '/360-tour-restaurants',
        text: 'Виртуальная прогулка по залу с интеграцией на сайт и в Google Maps.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимать Reels случайно и без плана',
        text: 'Один ролик раз в несколько недель не работает как стратегия. Алгоритмы поддерживают регулярные аккаунты, а не случайные всплески.',
    },
    {
        title: 'Ставить горизонтальное видео в вертикальный формат',
        text: 'Обрезка 16:9 под 9:16 почти всегда заметна и ухудшает восприятие. Reels нужно снимать вертикально изначально.',
    },
    {
        title: 'Начинать ролик с логотипа',
        text: 'Первые 1–2 секунды должны удержать внимание действием, движением или текстовым хуком, а не заставкой.',
    },
    {
        title: 'Показывать одни и те же блюда в каждом ролике',
        text: 'Повтор быстро утомляет аудиторию. Рабочая связка — блюда, бар, команда, закулисье и атмосфера.',
    },
    {
        title: 'Игнорировать трендовые звуки',
        text: 'Звук — важный сигнал алгоритма. Правильно выбранный трек может кратно увеличить охват.',
    },
    {
        title: 'Ждать «идеального момента» для старта',
        text: 'Пока вы ждёте идеальные условия, конкуренты публикуют каждую неделю и забирают внимание аудитории.',
    },
];

const freeImprovements = [
    'Снимите один ролик прямо сегодня: подача блюда или открытие бутылки вина, вертикально и крупным планом.',
    'Добавьте трендовый звук из библиотеки Instagram при монтаже.',
    'Поставьте хук текстом в первые 2 секунды, например: «Вы не пробовали наш чизкейк. Это ошибка.»',
    'Проверьте единый стиль обложек Reels, чтобы сетка профиля выглядела цельно.',
    'Публикуйте в пиковые часы: 12:00–14:00 или 19:00–21:00.',
];

const shootChecklist = [
    'Определены 4–6 блюд/напитков для съёмки в лучшей подаче.',
    'Зал и барная стойка чистые, лишние предметы убраны из кадра.',
    'Согласован вайб роликов: стиль, темп, аудитория.',
    'Команда предупреждена, кто будет в кадре (если нужно).',
    'Понятно, какие форматы снимаем: блюда, бар, закулисье, команда.',
    'Выбрано время съёмки: до открытия, тихий час или вечерняя смена.',
    'Instagram-профиль открыт для анализа текущего стиля.',
    'Подобрано 2–3 reference-Reels в нужном стиле.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Как работают алгоритмы Instagram Reels применительно к ресторанам?',
        paragraphs: [
            'Instagram показывает Reels и вашим подписчикам, и новой аудитории через рекомендации. Для ресторана ключевой сценарий — именно рекомендации, когда ролик видят люди, которые ещё не знают ваш бренд.',
            'Алгоритм учитывает досмотр, сохранения, репосты и реакцию в первые 30–60 минут после публикации. Поэтому старт ролика и его монтажная динамика критически важны.',
            'Практически это означает одно: красивой картинки недостаточно. Нужны хук в первые секунды, темп, структура и финал, который провоцирует сохранить или отправить ролик другу.',
        ],
    },
    {
        question: 'Чем Reels для ресторана отличаются от обычного видео?',
        paragraphs: [
            'Обычное видео чаще рассказывает историю, а Reels должны моментально захватить внимание в ленте. В short-form побеждает скорость считывания, а не длительность.',
            'Базовая структура рабочего Reels: 1–2 секунды хука, 10–15 секунд основной ценности, завершение с действием или эмоцией, которую хочется сохранить.',
            'Ресторанные форматы варьируются: «блюдо в движении», «за кулисами», POV гостя, барный процесс, сравнение до/после. Поэтому пакетная съёмка всегда эффективнее одиночного ролика.',
        ],
    },
    {
        question: 'Почему пакет эффективнее, чем один ролик?',
        paragraphs: [
            'Один ролик — это один эксперимент, а не система. Пакет из 6–10 роликов создаёт статистику: часть видео работает на охват, часть на переходы в профиль, часть на рекламу.',
            'Регулярность даёт алгоритму больше сигналов о вашем аккаунте, поэтому шансы попасть в рекомендации заметно растут.',
            'С операционной стороны это удобно: один съёмочный день закрывает контент на 4–6 недель и снимает с команды еженедельный стресс «что снимать сегодня».',
        ],
    },
    {
        question: 'Как измерить результат от пакета Reels?',
        paragraphs: [
            'Для ресторана базовые метрики: охват, сохранения и переходы в профиль. Сравнивайте их с данными до запуска пакета в разрезе 4 недель.',
            'Дополнительно смотрите косвенные сигналы: рост подписчиков, новые комментарии от незнакомых аккаунтов, увеличение сообщений о бронях.',
            'Эффект short-form контента часто отложенный: человек сохраняет ролик сегодня, а приходит в ресторан через 1–2 недели. Поэтому оценивать результат корректно на горизонте месяца.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоят Reels для ресторана в Тбилиси?',
        answer:
            'Пакет Breus Media начинается от 1 200 ₾ (6 роликов). Standard 8 роликов + Caption Bank — от 1 600 ₾. Full 10 роликов с рекламными версиями — от 2 000 ₾. Один ролик — от 200 ₾.',
    },
    {
        question: 'Сколько роликов нужно ресторану в месяц?',
        answer: 'Для заметного роста обычно 8–12 роликов в месяц (2–3 публикации в неделю).',
    },
    {
        question: 'Как Reels помогают привлечь туристов в Тбилиси?',
        answer:
            'Туристы часто ищут места через TikTok и Reels ещё до приезда. Ролики с локальной атмосферой и геоконтекстом дают органический трафик в профиль.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer: 'Нет. Обычно снимаем в тихий час, до открытия или в контролируемое рабочее окно, 4–5 часов одного визита.',
    },
    {
        question: 'Что входит в пакет Reels для ресторана?',
        answer:
            'Готовые смонтированные ролики 9:16, hook/caption материалы, рекомендации по трендам, публикационный скелет и обложки (в Standard и Full).',
    },
    {
        question: 'Можно ли использовать эти ролики в рекламе?',
        answer: 'Да. Формат Reels отлично подходит для таргета в Instagram и TikTok, в Full делаем отдельные рекламные версии.',
    },
    {
        question: 'Как быстро будут готовы материалы?',
        answer: 'Стандартно 5–7 рабочих дней после съёмочного дня.',
    },
    {
        question: 'Зачем Reels, если Instagram уже ведётся?',
        answer:
            'Фото и текст в основном видят текущие подписчики. Reels — формат, который стабильно открывает доступ к новой аудитории через рекомендации.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Примеры Reels для ресторанов',
        href: 'https://breus.media/portfolio/reels-restaurants',
        text: 'Подборка коротких видео-форматов для HoReCa.',
    },
    {
        title: 'Гайд: 10 форматов Reels для кафе и ресторанов',
        href: 'https://breus.media/blog/reels-formats-restaurants',
        text: 'Практические сценарии, которые можно адаптировать под ваше меню и аудиторию.',
    },
    {
        title: 'Как Instagram решает, показывать ли ваш Reels',
        href: 'https://breus.media/blog/instagram-reels-algorithm',
        text: 'Разбор ключевых сигналов: досмотр, сохранения, репосты и early engagement.',
    },
];

const internalTransitions = [
    {
        text: 'Нужен не только пакет роликов, но и регулярный поток контента каждый месяц? → Контент-пакет для ресторана',
        href: '/reels-promo/restaurant-content-pack',
    },
    {
        text: 'Хотите начать с флагманского ролика, а затем перейти на Reels? → Имиджевое видео ресторана',
        href: '/promo-video/promo-restaurant',
    },
    {
        text: 'Нужны ещё и фото для Wolt, сайта и Google Maps? → Съёмка интерьера и блюд',
        href: '/promo-video/restaurant-interior-food',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Нам хватит фото — видео необязательно»',
        reality: 'Фото полезны, но short-form видео в 2025–2026 годах получает заметно более высокий приоритет в алгоритмах и чаще выходит на новую аудиторию.',
    },
    {
        myth: '«Reels — только для развлечений, не для серьёзных заведений»',
        reality: 'Короткие видео уже стали рабочим каналом продаж и для fine dining, и для casual форматов — вопрос в правильной подаче.',
    },
    {
        myth: '«Мы снимаем сами, поэтому production не нужен»',
        reality: 'Камера — это инструмент, но результат делает сценарий, хук, свет и монтаж. Именно это чаще всего и определяет, выйдет ролик в рекомендации или нет.',
    },
    {
        myth: '«Сначала нужно набрать подписчиков, потом запускать Reels»',
        reality: 'Reels работают именно потому, что показываются новой аудитории вне подписок.',
    },
    {
        myth: '«Один залетевший ролик решит всё»',
        reality: 'Вирусный всплеск полезен, но стабильный рост строится регулярной публикацией и пакетом контента.',
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
        definition: 'Дополнительные кадры деталей и атмосферы, которые усиливают монтаж и ритм.',
    },
    {
        term: 'Алгоритм рекомендаций',
        definition: 'Система платформы, которая решает, кому и как часто показывать ваш контент вне подписок.',
    },
];

const notFitItems = [
    'Тем, кому нужно полное ведение соцсетей «под ключ»: мы делаем production, а не полный SMM-аутсорс.',
    'Если общий бюджет на контент ниже 600 ₾: профессиональный пакет в таком бюджете обычно не окупается.',
    'Тем, кто хочет один ролик «на пробу» без намерения строить регулярность.',
    'Если заведение в фазе закрытия или радикальной перестройки, лучше сначала стабилизировать операционную часть.',
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
            name: 'Reels для ресторана',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Reels для ресторана — пример формата',
    description: 'Пример короткого вертикального видео для продвижения ресторана в Instagram Reels и TikTok.',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
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
    name: 'Reels для ресторана в Тбилиси',
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

export default function ReelsRestaurantPage() {
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
                id="reels-restaurant-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80')",
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
                                Reels для ресторана · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для ресторана — контент для Instagram, TikTok и рекламы
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Серия коротких роликов, которая превращает скроллинг в бронирование.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Ваш ресторан не появляется в рекомендациях — не потому что он хуже конкурентов, а
                                потому что у него нет вертикального видеоконтента, который алгоритмы продвигают в
                                первую очередь. Breus Media снимает серии Reels для ресторанов: с хуками, трендовыми
                                форматами и монтажом, который держит зрителя до конца. Один выезд — пакет из 6–10
                                готовых роликов.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Запустить съёмку Reels
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
                                    <li>Форматы: Instagram Reels + TikTok + Ads</li>
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
                                    title="Пример Reels для ресторана"
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
                            Хотите, чтобы ваш ресторан начал появляться в рекомендациях и приводить новых гостей?
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Оставьте заявку, покажите текущий профиль и мы подскажем, какой формат пакета даст самый
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Описание 3 пакетов</h2>
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
                                    <th className="px-4 py-3 font-bold">Параметр</th>
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
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Не уверены? Напишите нам — подберём пакет под профиль и цели за 5 минут.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы запустить Reels, которые приведут новых гостей? Оставьте заявку — согласуем формат и дату съёмки."
                buttonLabel="Запустить Reels для ресторана"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Связанные услуги</h2>
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
                            Снимаем в Тбилиси и по всей Грузии. Чтобы обсудить пакет Reels для вашего заведения,
                            напишите в WhatsApp и отправьте профиль — сразу подскажем рабочий формат.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">WhatsApp / Телефон</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#D4A017]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия</p>
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — медиапродакшн в Тбилиси. Reels, имиджевые видео, 360° туры и контент-пакеты для
                        ресторанов и HoReCa в Грузии. Один выезд — готовый контент на месяц.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки ресторанов в контенте</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съёмке</h2>
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
                                    <a href={item.href} className="transition-colors hover:text-[#D4A017]">
                                        {item.title}
                                    </a>
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

```
---
---

## /reels-promo/reels-tourism
Lines: 1244
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
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

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    definition: string;
};

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-tourism';
const PAGE_TITLE = 'Reels для туристического проекта Грузия | Breus Media Тбилиси';
const PAGE_DESCRIPTION =
    'Производим Reels для туроператоров, гидов и глэмпингов в Грузии. От 400 ₾. Казбеги, Кахетия, Тбилиси. Быстро и с результатом в бронированиях.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_RAW = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const SITE_URL = 'https://breus.media';

const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';
const REEL_EXAMPLE_THUMB =
    'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80';

const heroSubtitle = 'Превратите каждый выезд в поток коротких видео, которые приводят новых туристов';
const heroIntro =
    'Алгоритмы Instagram и TikTok показывают Reels людям, которые еще не знают о вас - это бесплатный охват для тех, кто умеет его использовать. Но большинство туроператоров и гидов либо не снимают вовсе, либо публикуют раз в месяц что-то случайное. Мы производим серии Reels специально для туристических проектов: маршруты, активности, локации, атмосфера Грузии - в формате, который сохраняют, пересылают и по которому бронируют. Один выезд превращается в 8-12 готовых роликов под разные платформы и цели.';

const whatIsText =
    'Мы снимаем туристические Reels на ваших маршрутах и в ваших локациях - вертикальное видео 9:16, до 60 секунд, под алгоритмы Instagram, TikTok и YouTube Shorts. Это не длинные видеогиды, а легкий вдохновляющий контент: «вот где мы были», «вот что едим», «вот что вас ждет». Задача - чтобы незнакомый человек в ленте остановился, сохранил и написал «как попасть?».';

const audienceItems = [
    'Туроператорам, которые хотят расти в соцсетях без огромного бюджета на рекламу.',
    'Авторским гидам, строящим личный бренд через контент.',
    'Глэмпинг-проектам и эко-ретритам, продающим атмосферу и стиль жизни.',
    'Организаторам активностей: рафтинг, параглайдинг, конные прогулки, вино-туры.',
    'Небольшим travel-проектам без SMM-команды - мы полностью берем на себя продакшн.',
    'Блогерам и инфлюенсерам, монетизирующим тему путешествий по Грузии.',
];

const taskCards: CardItem[] = [
    {
        title: 'Постоянный поток контента без хаоса',
        text: 'Создаем регулярную систему публикаций вместо ручного режима «надо что-то запостить».',
    },
    {
        title: 'Выход в рекомендации новой аудитории',
        text: 'Ваш аккаунт попадает к людям, которые еще не знают о вас, но уже интересуются travel-контентом.',
    },
    {
        title: 'Рост органического трафика',
        text: 'Сохранения и шеры превращаются в переходы в профиль, на сайт и в Direct.',
    },
    {
        title: 'Живая витрина тура 24/7',
        text: 'Reels постоянно показывают ваш продукт в соцсетях и работают на принятие решения.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Нет контента - нет роста',
        text: 'Вы знаете, что нужно постить, но нет ни времени, ни понимания как. Клиенты приходят и уходят, а аккаунт стоит.',
    },
    {
        title: 'Снимаю сам - получается плохо',
        text: 'Телефон трясется, свет неудачный, монтаж занимает вечер - и все равно смотрится непрофессионально.',
    },
    {
        title: 'Посты собирают лайки, но не брони',
        text: 'Красивые фото получают реакции, но люди не пишут «хочу к вам». Контент не конвертирует.',
    },
    {
        title: 'Конкуренты ведут аккаунт лучше',
        text: 'Кто-то снимает Reels каждую неделю, набирает подписчиков и загрузку. Сложно не замечать.',
    },
    {
        title: 'Алгоритмы непонятны и постоянно меняются',
        text: 'Что работает в Instagram сегодня - непонятно. Продакшн-студия с опытом разбирается в этом за вас.',
    },
    {
        title: 'Сезонный контент устаревает',
        text: 'Летом снял, а зимой непонятно что публиковать. Нужна стратегия на год, а не хаотичный постинг.',
    },
];

const earnItems = [
    'Генерируют входящий поток без платной рекламы за счет органического охвата новой аудитории.',
    'Прогревают потенциальных клиентов: посмотрел 5 роликов - написал сам.',
    'Увеличивают средний чек через визуализацию premium-опыта.',
    'Дают контент для рекламных кампаний: Reels работают и как органика, и как рекламные материалы.',
];

const saveItems = [
    'Экономят ваше время - мы производим контент, вы занимаетесь туристами.',
    'Защищают от «мертвого аккаунта» - регулярный контент держит аудиторию.',
    'Снижают зависимость от агрегаторов и рекламного бюджета.',
    'Создают контент-архив, который можно переиспользовать в любое время.',
];

const deliverables = [
    '8-12 вертикальных роликов (9:16, до 60 секунд каждый).',
    'Планирование контента: темы, форматы, локации.',
    'Съемка на вашем маршруте или в вашей локации (1-2 выезда).',
    'Монтаж, цветокоррекция, музыкальное оформление.',
    'Субтитры на русском и/или английском.',
    'Готовые файлы для публикации (MP4, 1080p) + рекомендации по постингу.',
    'Шаблон подписей для каждого Reel (хэштеги и текст).',
    'Версии для Stories (при необходимости).',
];

const outputItems = [
    'Передача: Google Drive или WeTransfer.',
    'Сроки: 5-10 рабочих дней после съемки.',
    'Форматы: MP4, вертикальный 9:16, 1080p.',
    'Дополнительно: тексты для каждого ролика + рекомендации по времени публикации.',
];

const useCases: CardItem[] = [
    {
        title: 'Сценарий 1 - Старт контент-машины',
        text: 'Глэмпинг без соцсетей заказывает первую серию из 10 Reels. За первый месяц публикаций аккаунт набирает подписчиков и получает первые обращения через Direct - без единого рубля рекламы.',
    },
    {
        title: 'Сценарий 2 - Контент под сезон',
        text: 'Туроператор снимает осенние Reels по Кахетии: виноделие, пейзажи, местная еда. Публикует в August-September и получает бронирования на ретро-сезон.',
    },
    {
        title: 'Сценарий 3 - Личный бренд гида',
        text: 'Авторский гид снимает серию «один день в Казбеги»: свое лицо, свой голос, живые реакции туристов. Подписчики видят живого человека и хотят именно к нему.',
    },
    {
        title: 'Сценарий 4 - Reels как реклама',
        text: 'Туристический проект использует снятые Reels не только органически, но и запускает их в таргет в Instagram. Один и тот же материал работает и как контент, и как рекламный креатив.',
    },
];

const localContextText =
    'Грузия - одна из самых фотогеничных стран в мире, и это факт, который работает в вашу пользу. Казбеги зимой, Кахетия в сезон сбора урожая, Батуми в закат, Тбилиси с крыш - каждая локация генерирует виральный потенциал. Мы знаем, где снимать, в какое время и как показать «инстаграмность 10/10», которая заставляет людей отправлять видео друзьям. Производим Reels на всех ключевых локациях страны - от Старого Тбилиси до горных троп Сванетии.';

const miniCases: CardItem[] = [
    {
        title: 'Кейс 1 - Wine tour в Кахетии',
        text: 'Винодельня заказала серию Reels про wine-тур: сбор урожая, давка, дегустация, вид с холма. Ролики набрали тысячи просмотров в Instagram и принесли 8 бронирований на следующий сезон из Direct.',
    },
    {
        title: 'Кейс 2 - Приключенческий тур',
        text: 'Организатор джип-туров по горной Грузии получил серию коротких Reels с дроновыми кадрами и живыми эмоциями туристов. Один ролик был репостнут крупным travel-аккаунтом и дал волну подписчиков.',
    },
    {
        title: 'Кейс 3 - Городской гид',
        text: 'Гид по Тбилиси с личным брендом снял серию «скрытые места Тбилиси» - 10 роликов в стиле быстрых советов. Аккаунт вырос, появились запросы на корпоративные экскурсии.',
    },
];

const socialProofItems = [
    'Снимаем вертикальный контент под реальные алгоритмы, а не просто «что красиво выглядит».',
    'Производим Reels с пониманием туристического рынка Грузии - знаем, что цепляет аудиторию.',
    'DJI Avata 2 (FPV) и Insta360 X5 в арсенале - динамика и эффект присутствия.',
    'Передаем весь контент с правами на использование: публикуйте, запускайте в рекламу и переиспользуйте.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем Reels отличаются от обычных видео в соцсетях?',
        answer:
            'Reels - вертикальный формат (9:16) длиной до 60-90 секунд, оптимизированный под алгоритмы Instagram и TikTok. Именно этот формат алгоритмы показывают новой аудитории: подписчикам ваших конкурентов и туристам, ищущим идеи для поездок по Грузии.',
    },
    {
        question: 'Сколько Reels нужно, чтобы начать получать эффект?',
        answer:
            'Минимум 8-12 роликов для первого этапа. Это покрывает основные форматы и дает алгоритмам материал для обучения вашей аудитории.',
    },
    {
        question: 'Вы снимаете прямо на маршруте или нужно отдельно организовывать съемку?',
        answer:
            'Снимаем прямо во время реального тура - так получается живой и достоверный контент. При необходимости можно снять и без группы.',
    },
    {
        question: 'Будут ли ролики похожи на других туроператоров?',
        answer:
            'Нет. Каждая серия строится под ваш продукт, вашу аудиторию и ваш стиль. Мы не используем шаблонные шаблоны.',
    },
    {
        question: 'Как часто нужно снимать, чтобы поддерживать контент?',
        answer:
            'Рекомендуем 1-2 выезда в месяц. Одна съемка обычно дает 4-6 Reels - этого хватает для 2-3 недель постинга.',
    },
    {
        question: 'Мне нужен монтажер или SMM, чтобы потом публиковать?',
        answer:
            'Нет. Мы передаем готовые к публикации файлы с рекомендациями по тексту и хэштегам. Публикуйте сами или через ассистента.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит серия Reels для туристического проекта?',
        answer: 'От 400 ₾ за 4-5 роликов. Полная серия из 10-12 Reels - от 800 ₾.',
    },
    {
        question: 'Что входит в цену?',
        answer: 'Съемка (1 выезд), монтаж всех роликов, цветокоррекция, музыка, субтитры, передача файлов.',
    },
    {
        question: 'Можно ли заказать Reels как разовую услугу?',
        answer: 'Да, можно заказать одну серию. Многие клиенты потом переходят на регулярное производство.',
    },
    {
        question: 'Есть ли пакеты с ежемесячным производством?',
        answer: 'Да, обсуждаем индивидуально: 1-2 выезда в месяц и фиксированная цена на серию.',
    },
    {
        question: 'Нужно ли мне предоставлять локацию или вы сами?',
        answer: 'Снимаем на ваших маршрутах или в ваших локациях. Если нужна помощь с выбором точек - поможем.',
    },
    {
        question: 'Как оплатить?',
        answer: '50% предоплата, 50% после согласования финальных файлов. Принимаем ₾, USD и EUR.',
    },
];

const whyBreusItems = [
    'Производим именно туристический контент - понимаем язык путешественника и туроператора.',
    'Снимаем в Тбилиси и по всей Грузии - логистика не проблема.',
    'DJI Avata 2 (FPV) дает уникальные динамичные кадры, которых нет у конкурентов.',
    'Производим контент сразу под несколько платформ: Instagram, TikTok, YouTube Shorts.',
    'Понимаем алгоритмы - снимаем не «красиво», а «работающе».',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Разбор проекта',
        text: 'Звонок или встреча: обсуждаем цели, аудиторию и нужные форматы.',
    },
    {
        step: 'Шаг 2',
        title: 'Контент-план',
        text: 'Формируем список тем, сцен и форматов для серии Reels.',
    },
    {
        step: 'Шаг 3',
        title: 'Съемка',
        text: 'Выезд на маршрут или локацию (обычно 1-2 дня).',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: 'Показываем черновой вариант, собираем комментарии и выпускаем финал.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача',
        text: 'Отдаем готовые файлы + тексты и хэштеги для каждого ролика.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 400 ₾',
        subtitle: 'Первая проба формата',
        features: [
            '4-5 Reels.',
            '1 выезд до 4 часов.',
            'Монтаж, музыка, субтитры RU.',
            'Подходит, чтобы протестировать формат.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 800 ₾',
        subtitle: 'Серия на месяц с охватом',
        featured: true,
        features: [
            '8-10 Reels.',
            '1-2 выезда.',
            'Монтаж + FPV/дрон-кадры.',
            'Субтитры RU/EN + рекомендации по хэштегам.',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 400 ₾',
        subtitle: 'Полный контент-поток на месяц',
        features: [
            '12+ Reels на месяц контента.',
            '2 выезда.',
            'FPV + наземная съемка.',
            'Субтитры RU/EN, Stories-версии и контент-план на 4 недели.',
        ],
    },
];

const packageCompareRows = [
    ['Количество Reels', '4-5', '8-10', '12+'],
    ['Выезды', '1', '1-2', '2'],
    ['FPV/дрон-кадры', '-', '✓', '✓'],
    ['Субтитры', 'RU', 'RU/EN', 'RU/EN'],
    ['Stories-версии', '-', 'опц.', '✓'],
    ['Контент-план', '-', 'базовый', 'на 4 недели'],
    ['Цена', 'от 400 ₾', 'от 800 ₾', 'от 1 400 ₾'],
];

const packagePickerItems = [
    'Basic - если хотите попробовать формат и понять, как он работает для вашего проекта.',
    'Standard - если нужна серия на месяц с хорошим охватом и форматами для иностранцев.',
    'Full - если нужен полноценный контент-поток на месяц с планом, FPV-кадрами и готовыми текстами.',
];

const relatedServices = [
    {
        title: 'Видеогид по маршруту',
        href: '/tourism-service',
        text: 'Длинный формат для сайта и маркетплейсов.',
    },
    {
        title: 'Промо-ролик для экскурсии',
        href: '/promo-video-service',
        text: 'Сфокусированное видео под конкретную активность.',
    },
    {
        title: 'AI-упаковка туристических предложений',
        href: '/ai-content/tourism-ai-packaging',
        text: 'Тексты и упаковка описаний туров.',
    },
    {
        title: 'Аэросъемка для турбизнеса',
        href: '/drone-hotels-tourism',
        text: 'Виды маршрутов с воздуха и динамичные планы локаций.',
    },
];

const commonMistakes: CardItem[] = [
    {
        title: 'Ошибка 1 - Горизонтальный формат в вертикальный мир',
        text: 'Горизонтальные видео в Instagram Reels работают хуже, выглядят неестественно на телефоне и почти не продвигаются.',
    },
    {
        title: 'Ошибка 2 - Только красивые пейзажи',
        text: 'Горы без людей - это обои, а не контент. Эмоции, еда и момент «ах» сохраняют и пересылают чаще.',
    },
    {
        title: 'Ошибка 3 - Редкие публикации',
        text: 'Один пост в 2 недели убивает охват. Алгоритм поощряет активные аккаунты и регулярность.',
    },
    {
        title: 'Ошибка 4 - Нет призыва к действию',
        text: 'Ролик закончился, а что делать дальше - неясно. В финале нужен конкретный следующий шаг.',
    },
    {
        title: 'Ошибка 5 - Один и тот же контент во всех каналах',
        text: 'Instagram Reels, TikTok и YouTube Shorts работают по-разному. Нужна хотя бы базовая адаптация.',
    },
    {
        title: 'Ошибка 6 - Музыка без лицензии',
        text: 'Популярные треки могут быть заглушены или блокировать ролик. Мы используем лицензионную музыку.',
    },
];

const freeImprovements = [
    'Переснимите обложку профиля - качественная шапка аккаунта сразу повышает доверие.',
    'Снимите один Reel на следующем выезде - даже телефонный ролик лучше, чем отсутствие контента.',
    'Добавьте субтитры через автоматический сервис - это бесплатно и часто повышает досмотр.',
    'Опубликуйте Highlights с реальными отзывами гостей.',
    'Начните регулярно отвечать на комментарии - активность под постами усиливает охват.',
];

const shootChecklist = [
    'Определены 3-5 ключевых сцен для каждого ролика.',
    'Известна целевая аудитория и ее язык (RU/EN).',
    'Есть план на 8-12 роликов с темами.',
    'Выезд запланирован на реальный тур или локацию.',
    'Согласовано, кто будет в кадре (гид, туристы, продукт).',
    'Определены платформы для публикации.',
    'Подготовлены референсы роликов, которые нравятся.',
    'Согласованы время публикации и частота постинга.',
];

const longAnswers: CardItem[] = [
    {
        title: 'Как туристические Reels работают на привлечение новой аудитории?',
        text: 'Алгоритм Instagram показывает Reels не только подписчикам, но и людям, которые смотрели похожий контент. Если человек искал «что посмотреть в Грузии» или подписан на travel-аккаунты, ваш ролик может попасть в его ленту. Это органический охват без бюджета, но он работает только при регулярности и правильном форматировании.',
    },
    {
        title: 'Какие форматы Reels работают лучше всего для туризма?',
        text: 'Лучше всего работают форматы «один день на маршруте», «скрытые места», «до/после» и «момент». Общая логика проста: показывайте то, что заставляет человека сказать «хочу туда».',
    },
    {
        title: 'Нужно ли снимать Reels каждую неделю?',
        text: 'Идеально публиковать 2-4 Reels в неделю. Но лучше один качественный ролик, чем четыре случайных. Серия из одного выезда позволяет закрыть 3-4 недели контента и сохранять регулярность без ежедневной съемки.',
    },
    {
        title: 'Как измерить эффективность туристических Reels?',
        text: 'Ключевые метрики: охват новой аудитории, сохранения, переходы в профиль/сайт и сообщения в Direct с вопросом о туре. Прямая связь с продажами обычно видна через 4-8 недель регулярного постинга.',
    },
];

const shortQa = [
    {
        question: 'Что такое туристические Reels?',
        answer:
            'Короткие вертикальные видео до 60 секунд для Instagram Reels, TikTok и YouTube Shorts, созданные для продвижения туров, маршрутов и активностей.',
    },
    {
        question: 'Сколько стоит серия Reels для туристического проекта в Тбилиси?',
        answer: 'От 400 ₾ за 4-5 роликов. Полная серия на месяц (12+ роликов) - от 1 400 ₾.',
    },
    {
        question: 'Можно ли снимать Reels прямо во время реального тура?',
        answer: 'Да. Так получается самый живой и достоверный контент с настоящими эмоциями.',
    },
    {
        question: 'Подходят ли Reels для привлечения иностранных туристов?',
        answer: 'Да. С субтитрами на английском и сильным визуалом Reels работают на международную аудиторию.',
    },
    {
        question: 'Сколько Reels нужно, чтобы вырасти в соцсетях?',
        answer: 'Минимум 8-12 роликов для первого этапа, чтобы алгоритмы начали расширять охват.',
    },
    {
        question: 'Какой формат лучше - горизонтальный или вертикальный?',
        answer: 'Для Reels и TikTok нужен вертикальный формат 9:16. Горизонтальный формат продвигается хуже.',
    },
    {
        question: 'Работают ли Reels зимой для туристических проектов в Грузии?',
        answer: 'Да. Зимний контент по Казбеги, Тбилиси и винным регионам стабильно набирает охваты.',
    },
    {
        question: 'Как Reels помогают продавать туры без рекламного бюджета?',
        answer:
            'Алгоритмы бесплатно показывают ролики новой аудитории. Это и есть главное преимущество формата для органического роста.',
    },
] as const;

const myths: MythItem[] = [
    {
        myth: '«Reels - это только для молодежи».',
        reality:
            'Туристы 30-50 лет активно смотрят Instagram Reels при планировании поездок. Формат не ограничен возрастом.',
    },
    {
        myth: '«Нужен большой бюджет».',
        reality: 'Органические Reels - один из самых доступных способов расти в соцсетях. Реклама нужна для ускорения, а не для старта.',
    },
    {
        myth: '«Можно снять один раз и хватит».',
        reality: 'Алгоритмы поощряют регулярность. Один сильный ролик полезен, но система публикаций эффективнее.',
    },
    {
        myth: '«Красивый пейзаж = вирусный ролик».',
        reality:
            'Визуал важен, но нарратив важнее. Скрытые места, необычные факты и личные истории обычно работают лучше идеального заката.',
    },
    {
        myth: '«Конкуренты уже заняли все форматы».',
        reality:
            'В туристическом контенте по Грузии все еще много свободных ниш: нестандартные маршруты, личный стиль и узкие темы.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Reels',
        definition:
            'Вертикальный короткий формат (9:16, до 90 сек) в Instagram. Алгоритм активно показывает его новой аудитории.',
    },
    {
        term: 'Органический охват',
        definition: 'Просмотры и взаимодействия без платной рекламы - за счет алгоритмов и вирусности.',
    },
    {
        term: 'FPV-дрон',
        definition: 'Дрон с эффектом полета от первого лица (DJI Avata 2), который дает динамичные кадры присутствия.',
    },
    {
        term: 'Сохранение (Save)',
        definition: 'Метрика Instagram, когда пользователь сохраняет ролик. Важный сигнал качества для алгоритма.',
    },
    {
        term: 'Контент-план',
        definition: 'Расписание публикаций с темами и форматами, которое дает регулярность без хаоса.',
    },
];

const notFitItems = [
    'Туроператорам, которые не планируют вести соцсети: без постинга контент не работает.',
    'Проектам с бюджетом ниже 300 ₾: результат не окупит вложения.',
    'Тем, кто ищет «сделайте вирусный ролик» без продуктовой базы: вирусность не планируется по кнопке.',
    'Компаниям без реальных туров или локаций для съемки.',
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
            name: 'Reels для туристического проекта',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример туристического Reel',
    description: 'Пример вертикального ролика для продвижения туров и маршрутов в Instagram Reels / TikTok / Shorts.',
    embedUrl: REEL_EXAMPLE_EMBED,
    contentUrl: REEL_EXAMPLE_URL,
    thumbnailUrl: REEL_EXAMPLE_THUMB,
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
    name: 'Reels для туристического проекта в Грузии',
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
        lowPrice: '400',
        highPrice: '1400',
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

export default function ReelsTourismPage() {
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
                id="reels-tourism-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2200&q=80')",
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
                                Reels для туризма - Грузия
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Reels для туристического проекта - контент для соцсетей и продвижения
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">{heroSubtitle}</p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">{heroIntro}</p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Заказать Reels для туристического проекта
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
                                    <p className="text-2xl font-bold text-white">от 400 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за стартовый пакет.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">8-12</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">роликов / серия</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5-10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до сдачи</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Instagram Reels + TikTok + Shorts</li>
                                    <li>Съемка в Тбилиси и по всей Грузии</li>
                                    <li>Подписи, субтитры и рекомендации по постингу</li>
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
                            <h2 className="text-3xl font-bold md:text-4xl">Что это такое?</h2>
                            <p className="mt-5 leading-relaxed text-white/72">{whatIsText}</p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#D4A017]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Embed-пример Reel</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    На странице встроен пример вертикального short-form формата для соответствия блоку SCHEMA-video.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Пример Reel для туристического проекта"
                                    src={REEL_EXAMPLE_EMBED}
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
                    <h2 className="text-3xl font-bold md:text-4xl">Кому подходит этот формат?</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Какую задачу решают туристические Reels?</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {taskCards.map((item) => (
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
                    <h2 className="text-3xl font-bold md:text-4xl">Боли туристических проектов в соцсетях</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Как Reels помогают зарабатывать?</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {earnItems.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold text-white">Как Reels помогают не терять?</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                {saveItems.map((item) => (
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
                            <h2 className="text-2xl font-bold text-white">Что входит в пакет туристических Reels?</h2>
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
                            <h2 className="text-2xl font-bold text-white">Формат передачи</h2>
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
                            Одна съемка - и у вас контент на месяц. Расскажите о своем проекте, обсудим серию Reels.
                        </h3>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Заказать Reels для туристического проекта
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_RAW}`}
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
                    <h2 className="text-3xl font-bold md:text-4xl">Как работают туристические Reels</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Туристический контент в Грузии</h2>
                    <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/75 md:text-base">{localContextText}</p>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {miniCases.map((item) => (
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
                    <h2 className="text-3xl font-bold md:text-4xl">Почему нам доверяют</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {socialProofItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="Частые вопросы" items={beginnerFaqItems} variant="commercial" bgColor="#0D0D0D" />
            <FaqSection title="Вопросы про стоимость" items={moneyFaqItems} variant="commercial" bgColor="#080808" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media?</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {whyBreusItems.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Начинаем с разбора проекта, затем выезжаем на съемку, монтируем, согласуем до 2 раундов правок и передаем готовый пакет для публикации." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">5 шагов</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Тарифы</h2>
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
                                    <th className="px-4 py-3 font-bold">Параметр</th>
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
                        <h3 className="text-xl font-bold text-white">Какой пакет выбрать?</h3>
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
                            {packagePickerItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Расскажите о своем туристическом проекте - обсудим серию Reels, которая начнет приводить новых клиентов."
                buttonLabel="Обсудить Reels для моего проекта"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
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
                            Тбилиси, Грузия. Работаем по всей стране. Напишите в WhatsApp, чтобы обсудить съемку под ваш
                            маршрут, сезон и аудиторию.
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
                                href={`tel:${CONTACT_PHONE_RAW}`}
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
                        Breus Media - туристический контент в Грузии. Reels, видеогиды, 360° туры. {CONTACT_PHONE}
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">6 ошибок в соцсетях туроператоров</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">5 бесплатных шагов для туристического аккаунта</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист перед съемкой Reels</h2>
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
                        {longAnswers.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Короткие ответы для поиска</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы о Reels для туристических проектов</h2>
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
                    <h2 className="text-3xl font-bold md:text-4xl">Словарь</h2>
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

            <section className="bg-[#0D0D0D] py-24">
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

            <DroneStickyCta heroId="reels-tourism-hero" />
            <DroneFooterStitch />

            <div className="fixed inset-x-0 bottom-0 z-[1070] border-t border-[#D4A017]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden">
                <div className="mx-auto flex max-w-[760px] items-center gap-2">
                    <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#D4A017] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Обсудить Reels
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

```
---
---

## /reels-promo/restaurant-content-pack
Lines: 1377
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    subtitle: string;
    audience: string;
    timeline: string;
    features: string[];
    featured?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
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

const CANONICAL_URL = 'https://breus.media/reels-promo/restaurant-content-pack';
const PAGE_TITLE = 'Контент-пакет для ресторана в Тбилиси — ежемесячная съёмка';
const PAGE_DESCRIPTION =
    'Ежемесячный контент для ресторана: Reels, фото, Stories — один выезд в месяц. Профиль всегда активен. От 1 200 ₾/мес. Тбилиси и Грузия.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const serviceIntro =
    'Контент-пакет — это ежемесячная подписка на производство контента для ресторана. Один-два визита в месяц, согласованный план, фиксированный объём — и вы получаете готовые Reels, фото и шаблоны Stories для публикаций на весь месяц. Мы берём на себя съёмку, монтаж и контент-план — вы или ваш SMM публикует по расписанию. Не разовый рывок, а стабильный ритм, который алгоритмы Instagram и TikTok вознаграждают ростом охвата.';

const audienceItems = [
    'Владелец ресторана, который устал от «рывков»: один сильный месяц, потом тишина на два.',
    'Управляющий, у которого нет ни времени, ни ресурса выстраивать контент самостоятельно.',
    'Заведение со стабильным форматом и регулярными событиями: бизнес-ланчи, дегустации, сезонные меню, live-музыка.',
    'Ресторан, у которого есть SMM-менеджер для публикаций, но нет production — съёмки и монтажа.',
    'Ресторанная группа, которой нужен единый визуальный стандарт для нескольких заведений.',
    'Отельный ресторан или F&B-аутлет с регулярными обновлениями программы.',
];

const taskCards: Card[] = [
    {
        title: 'Устраняет хаотичность',
        text: 'Контент выходит ритмично и по плану — не «когда получилось снять».',
    },
    {
        title: 'Снимает операционную нагрузку',
        text: 'Владельцу и команде не нужно каждый месяц организовывать съёмку с нуля.',
    },
    {
        title: 'Обеспечивает визуальное единство',
        text: 'Все материалы в одном стиле и с единым образом на всех платформах.',
    },
    {
        title: 'Закрывает сразу несколько задач',
        text: 'Reels для охвата, фото для меню и Wolt, Stories-шаблоны для акций и событий.',
    },
];

const painCards: Card[] = [
    {
        title: 'После разовой съёмки всё быстро заканчивается — а что дальше?',
        text: 'Пакет из 10 роликов кончается за 3 недели, потом — пустота. Ресторан снова «пропадает» из ленты. Единственный выход — регулярная система, а не разовые рывки.',
    },
    {
        title: 'У нас есть SMM, но он не умеет снимать профессионально',
        text: 'SMM-менеджер занимается публикациями и стратегией. Production контента — отдельная компетенция, требующая оборудования, монтажа и визуального подхода.',
    },
    {
        title: 'Слишком много операционных задач — контент всегда в конце приоритетов',
        text: 'Ресторанный бизнес живёт в высокой нагрузке. На съёмку не остаётся ни времени, ни ресурса внимания. Подписка снимает эту задачу с команды.',
    },
    {
        title: 'Платим таргетологу, но нет нового контента — запускаем одно и то же',
        text: 'Рекламный бюджет сгорает на устаревших креативах. Свежий контент каждый месяц даёт постоянный материал для рекламных кампаний.',
    },
    {
        title: 'Не знаем, что публиковать в несезон или когда нет событий',
        text: 'Поэтому в пакет входит контент-план: темы на «тихие» периоды тоже закладываются заранее — команда, закулисье, история блюда, атмосфера буднего дня.',
    },
    {
        title: 'Пробовали снимать сами — выгорели через два месяца',
        text: 'Последовательный контент требует системы, а не вдохновения. Делегирование производства помогает держать качество без выгорания.',
    },
];

const earnPoints = [
    'Алгоритмы награждают регулярность: заведение с еженедельными Reels и постами появляется в рекомендациях в 3–5 раз чаще, чем «молчащее».',
    'События и спецменю продаются через визуал: live-музыка, дегустации, коллаборации и сезонные запуски получают качественную упаковку.',
    'Регулярный контент удерживает «тёплую» аудиторию и повышает возвратность постоянных гостей.',
    'Ежемесячный production = готовые creatives для рекламы без дополнительных затрат на отдельные съёмки.',
];

const avoidLossPoints = [
    'Защищает от «смерти профиля»: 2–3 недели без публикаций снижают приоритет аккаунта в алгоритмах.',
    'Снижает зависимость от одного человека: даже при смене SMM контент-система продолжает работать.',
    'Профиль остаётся живым даже в несезон, что важно для новых гостей перед первым визитом.',
    'Убирает срочность и хаос: контент-план на месяц вперёд снижает количество панических задач.',
];

const deliverables = [
    'Контент-план на месяц: RU/EN сетка постов, Reels и Stories-тем (события, блюда, команда, live-музыка, праздники, коллаборации).',
    'Смешанный production: 2–4 Reels + 10–20 фото + мини-видео или Stories-пакет за один-два визита.',
    'Брендовые шаблоны: 2–3 Stories/Post-шаблона (анонсы, события, обзоры) в Figma/Canva.',
    'Performance check-in: короткий ежемесячный обзор (Loom или звонок) — что сработало и что изменить в следующем месяце.',
    'Событийный слот: резерв в контент-плане под ключевое мероприятие месяца.',
];

const outputItems = [
    'Форматы: MP4 (9:16 Reels/Stories), JPEG 4K (фото), PNG-шаблоны, текстовый контент-план.',
    'Объём: 2–4 Reels + 10–20 фото + шаблоны (зависит от пакета).',
    'Ритм: один-два выезда в месяц + ежемесячный check-in.',
    'Сроки: контент текущего месяца готов за 7–10 дней после съёмки.',
];

const useCases: Card[] = [
    {
        title: 'Ресторан с бизнес-ланчем и вечерней программой',
        text: 'Заведение в центре Тбилиси работает на дневную и вечернюю аудиторию. Контент-план делит месяц по блокам: ланчи, вечерняя атмосфера, пятничные анонсы, закулисье кухни.',
    },
    {
        title: 'Винный бар с регулярными дегустациями',
        text: 'Снимаем подготовку до события, атмосферу в день дегустации, а затем итоги и анонс следующей даты. Профиль начинает жить событийным ритмом.',
    },
    {
        title: 'Ресторан с сезонным меню',
        text: 'Каждый Reels посвящён отдельной новинке. К концу месяца аудитория уже видит весь сезонный релиз и понимает, зачем приходить.',
    },
    {
        title: 'Ресторан без SMM-менеджера',
        text: 'Мы делаем production и контент-план с подписями. Владельцу или сотруднику остаётся публиковать по расписанию.',
    },
];

const localContextText =
    'Тбилисский ресторанный рынок требует постоянного присутствия. Туристы приезжают на 3–7 дней и выбирают места заранее. Экспаты и удалёнщики регулярно обновляют свои списки заведений и доверяют тем, кто стабильно появляется в ленте. Конкуренты, публикующие 3–4 раза в неделю, получают кратно больший органический охват, чем аккаунты с редкими выходами. В Тбилиси уже есть рестораны, которые собирают очередь бронирований исключительно за счёт системного контента. Регулярность здесь — не «опция», а конкурентное преимущество.';

const miniCases: Card[] = [
    {
        title: 'Грузинский ресторан, Ваке',
        text: 'До пакета: 1–2 публикации в месяц, охват ~500–800 просмотров. После 3 месяцев регулярного контента (3 Reels + 15 фото/мес.): средний охват Reels — 4 500 просмотров, +220 подписчиков в месяц, брони по Instagram выросли на 35%.',
    },
    {
        title: 'Итальянский ресторан с доставкой',
        text: 'SMM-менеджер был перегружен. После передачи production-компонента получили 4 Reels и 18 фото за месяц, 2 ролика вышли в рекомендации, трафик из Instagram на Wolt вырос на 40%.',
    },
    {
        title: 'Ресторан-бар с live-музыкой',
        text: 'Снимали атмосферу вечера раз в две недели. Через 2 месяца пятничные брони выросли на 60%: гости приходили целенаправленно после просмотров контента.',
    },
];

const socialProofItems = [
    'Ежедневные Stories увеличивают вовлечённость аудитории в среднем на 27% по сравнению с нерегулярным постингом.',
    'Рестораны с системным контентом (3+ публикаций в неделю) получают в 3–5 раз больший органический охват, чем аккаунты с редкими выходами.',
    'До 80% дохода ресторанов создают постоянные гости — регулярный контент удерживает эту аудиторию «тёплой».',
    '79% гостей чаще выбирают заведения с ярким визуальным характером в соцсетях.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем контент-пакет отличается от разовой съёмки Reels?',
        answer:
            'Разовый пакет — это один выезд и одна партия роликов. Контент-пакет — это система: ежемесячное производство, check-in с анализом, корректировка и новый план. Не рывок, а ритм.',
    },
    {
        question: 'Кто публикует контент?',
        answer:
            'Публикует ваш SMM-менеджер или вы сами — по контент-плану, который мы передаём. Мы производим контент, но не ведём аккаунты.',
    },
    {
        question: 'Сколько раз в месяц вы приезжаете?',
        answer:
            'Зависит от пакета: базово 1 выезд в месяц, в Extended — 2 выезда. Один визит обычно занимает 3–5 часов.',
    },
    {
        question: 'Нужно ли готовиться к съёмке каждый месяц?',
        answer:
            'Да, но минимально. За несколько дней согласуем план: блюда, сцены и события. Вы подготавливаете пространство и кухню, остальное — наша зона ответственности.',
    },
    {
        question: 'Как вы выбираете темы на следующий месяц?',
        answer:
            'На ежемесячном check-in обсуждаем события периода, анализируем результат предыдущих публикаций и на этой основе строим новый план.',
    },
    {
        question: 'Можно ли менять объём пакета в процессе?',
        answer:
            'Да. Объём можно корректировать в большую или меньшую сторону. Минимальный договорный период — 2 месяца.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит контент-пакет для ресторана в месяц?',
        answer:
            'Basic — от 1 200 ₾/мес. (1 выезд, 2 Reels, 10 фото). Standard — от 1 800 ₾/мес. (1 выезд, 3–4 Reels, 15 фото, шаблоны). Extended — от 2 500 ₾/мес. (2 выезда, 4–6 Reels, 20 фото, событийный слот, check-in).',
    },
    {
        question: 'Оплата помесячная или сразу за несколько месяцев?',
        answer:
            'Оплата помесячная. Минимальный период сотрудничества — 2 месяца, чтобы увидеть эффект системного контента.',
    },
    {
        question: 'Есть ли скидки при долгосрочном сотрудничестве?',
        answer:
            'Да. При контракте от 3 месяцев — скидка 10%. При 6 месяцах — 15%. Финальные условия согласуются индивидуально.',
    },
    {
        question: 'Что если месяц «тихий» и кажется, что нечего снимать?',
        answer:
            'Тихих месяцев нет: команда, кухня, детали, постоянные гости и сезонные поводы дают достаточно тем. Именно для этого и нужен check-in с заранее собранным планом.',
    },
    {
        question: 'Можно прерваться на месяц и потом продолжить?',
        answer:
            'Да, возможно. Нужен предварительный сигнал за 2 недели — и мы ставим производство на паузу.',
    },
    {
        question: 'Входит ли запуск рекламы в пакет?',
        answer:
            'Нет. Мы производим контент. Запуском и ведением рекламы занимается ваш SMM или таргетолог, получая готовые креативы каждый месяц.',
    },
];

const whyBreusItems = [
    'Понимаем ритм ресторанов: меню, события, сезонность и форс-мажоры; встраиваемся в процесс без лишнего стресса.',
    'Системный подход: не только съёмка, но и ежемесячный анализ результатов с корректировками.',
    'Преемственность визуала: профиль выглядит как единый бренд, а не набор случайных постов.',
    'Работаем как внешняя часть команды: берём ответственность за production-поток, а не за разовый ролик.',
    'Тбилиси — домашний рынок: понимаем локальную аудиторию, туристический поток и особенности ниши.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Онбординг',
        text: 'Изучаем профиль, историю заведения, аудиторию, прошлые результаты и текущий вайб бренда.',
    },
    {
        step: 'Шаг 2',
        title: 'Контент-план первого месяца',
        text: 'Собираем сетку публикаций и согласуем темы с учётом событий, новинок и сезонности.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Проводим 1–2 выезда по плану и снимаем материал сразу под несколько форматов.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и передача пакета',
        text: 'Отдаём Reels, фото, Stories-шаблоны, подписи и календарь публикаций.',
    },
    {
        step: 'Шаг 5',
        title: 'Check-in по итогам месяца',
        text: 'Разбираем результаты и утверждаем, что повторяем и что меняем в следующем цикле.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic — Стабильный ритм',
        price: 'от 1 200 ₾/мес',
        subtitle: 'Минимально достаточный объём, чтобы профиль не «умирал».',
        audience: 'Для кого: небольшие заведения, кафе и рестораны с минимальным SMM-ресурсом.',
        timeline: 'Формат: 1 выезд в месяц, выдача в течение 7–10 дней после съёмки.',
        features: [
            '1 выезд в месяц (3–4 часа).',
            '2 готовых Reels.',
            '10 фото (блюда + интерьер).',
            'Контент-план на месяц.',
            'Ежемесячный check-in (15 мин).',
        ],
    },
    {
        title: 'Standard — Активный профиль',
        price: 'от 1 800 ₾/мес',
        subtitle: 'Регулярный production-поток для активного аккаунта.',
        audience: 'Для кого: рестораны с SMM-менеджером и активной аудиторией.',
        timeline: 'Формат: 1 выезд в месяц, расширенный пакет публикаций.',
        features: [
            '1 выезд в месяц (5–6 часов).',
            '3–4 Reels + Stories-версии.',
            '15 фото (блюда + интерьер + детали).',
            '2 брендовых шаблона Stories.',
            'Caption Bank (RU/EN).',
            'Контент-план + рубрикатор.',
            'Ежемесячный check-in (30 мин).',
        ],
        featured: true,
    },
    {
        title: 'Extended — Контент-партнёр',
        price: 'от 2 500 ₾/мес',
        subtitle: 'Плотная контент-система для событийных и многозонных форматов.',
        audience: 'Для кого: рестораны с регулярными событиями, ресторанные группы и отельный F&B.',
        timeline: 'Формат: 2 выезда в месяц + аналитический check-in.',
        features: [
            '2 выезда в месяц.',
            '4–6 Reels, включая событийный.',
            '20 фото + b-roll обновление.',
            'Полный пакет шаблонов Stories/Posts.',
            'Событийный слот (живая музыка, дегустация, открытие сезона).',
            'Check-in с аналитикой (45 мин).',
            'Сценарные рекомендации на следующий месяц.',
        ],
    },
];

const packageCompareRows = [
    ['Выездов в месяц', '1', '1', '2'],
    ['Reels в месяц', '2', '3–4', '4–6'],
    ['Фото в месяц', '10', '15', '20'],
    ['Stories-версии', '—', '✓', '✓'],
    ['Брендовые шаблоны', '—', '2 шт.', 'Полный пакет'],
    ['Caption Bank (RU/EN)', '—', '✓', '✓'],
    ['Событийный слот', '—', '—', '✓'],
    ['Check-in / аналитика', '15 мин', '30 мин', '45 мин + аналитика'],
    ['Сценарные рекомендации', '—', '—', '✓'],
    ['Минимальный период', '2 мес.', '2 мес.', '2 мес.'],
    ['Цена от', '1 200 ₾/мес', '1 800 ₾/мес', '2 500 ₾/мес'],
];

const relatedServices = [
    {
        title: 'Reels для ресторана',
        href: '/restaurants-service',
        text: 'Разовый пакет Reels, если хотите стартовать без подписки на несколько месяцев.',
    },
    {
        title: 'Имиджевое видео ресторана',
        href: '/promo-video/promo-restaurant',
        text: 'Флагманский ролик, который часто становится основой первого контент-месяца.',
    },
    {
        title: 'Съёмка интерьера и блюд',
        href: '/promo-video/restaurant-interior-food',
        text: 'Обновление визуальной базы, которое можно взять как стартовый выезд.',
    },
    {
        title: '360° тур по ресторану',
        href: '/360-tour-restaurants',
        text: 'Виртуальная прогулка по залу как долгосрочный инструмент, работающий параллельно с контент-пакетом.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Считать, что одной хорошей съёмки «хватит надолго»',
        text: 'У контента есть срок жизни: Reels часто актуальны 2–4 недели. Через месяц аудитория ждёт новый материал.',
    },
    {
        title: 'Делегировать съёмку официантам или барменам',
        text: 'Это не их профильная задача. Обычно результат получается случайным и непоследовательным.',
    },
    {
        title: 'Снимать по вдохновению, а не по плану',
        text: 'Спонтанность полезна, но без системы не даёт стабильного ритма. Контент-план снимает зависимость от настроения.',
    },
    {
        title: 'Не анализировать прошлый месяц',
        text: 'Без check-in повторяются одни и те же ошибки. Анализ — основа роста и экономии бюджета.',
    },
    {
        title: 'Ждать, что контент сработает без плана публикаций',
        text: 'Время публикации влияет на охват: для ресторанной аудитории важны обеденные и вечерние окна, а не случайные часы.',
    },
    {
        title: 'Останавливать контент в несезон',
        text: 'Именно в несезон формируется отложенный спрос: люди заранее сохраняют места для будущих визитов.',
    },
];

const freeImprovements = [
    'Составьте простой план на 4 недели: 3–4 темы в неделю (блюдо, команда, событие, атмосфера) и следуйте ему.',
    'Выберите один фиксированный день в неделю для короткой съёмки Stories, хотя бы на 30 минут.',
    'Поставьте напоминания на публикацию в 12:00 и 19:00 — ритм важнее идеальности.',
    'Ведите таблицу контента: дата, тема, формат, статус — это резко снижает хаос.',
    'Назначьте конкретного ответственного за контент вместо модели «кто успеет».',
];

const readinessChecklist = [
    'Понимаем ключевые события месяца: акции, новинки меню, даты, живая программа.',
    'Есть понимание аудитории: туристы, локальные гости, экспаты или смешанный поток.',
    'Instagram/TikTok профили открыты и публичны.',
    'Есть человек, который будет публиковать контент по плану.',
    'Зал и кухня в стандартном рабочем состоянии в день съёмки.',
    'Есть 1–2 опорные темы/события для первого месяца.',
    'Готовы выделить 30–60 минут на онбординг и согласование плана.',
    'Согласован минимальный период 2 месяца для оценки результата.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему регулярность в контенте важнее разовых «залётов»?',
        paragraphs: [
            'Алгоритмы Instagram и TikTok усиливают аккаунты, которые публикуют стабильно и получают регулярные реакции аудитории. Когда профиль молчит, платформа снижает его приоритет, и даже сильный следующий ролик стартует слабее.',
            'Для ресторана разовый вирусный ролик даёт пик, но не систему. Система — это еженедельный приток просмотров, сохранений и новых подписчиков, из которых формируются реальные брони.',
            'Практически это означает: лучше предсказуемый контент-поток каждый месяц, чем эпизодические всплески раз в квартал.',
        ],
    },
    {
        question: 'Как строить контент-план ресторана, если кажется, что «нечего снимать»?',
        paragraphs: [
            'Ресторан генерирует темы каждый день: подготовка кухни, новые продукты, подача блюда, работа бармена, атмосфера смены, история команды и постоянные гости.',
            'На практике хорошо работают повторяемые рубрики: закулисье, блюдо в движении, команда, история ингредиента, анонсы событий и «момент дня».',
            'Эти форматы можно регулярно обновлять новыми героями, блюдами и сезонами, не выдумывая контент с нуля.',
        ],
    },
    {
        question: 'Как контент-пакет помогает запускать платную рекламу?',
        paragraphs: [
            'Частая проблема таргета — нет свежих креативов: бюджет есть, а запуск идёт на старом визуале. Из-за этого растёт CPM и падает конверсия.',
            'Контент-пакет закрывает это системно: каждый месяц вы получаете новую серию роликов и фото, которые таргетолог использует в тестах и ротации кампаний.',
            'В результате рекламный бюджет работает эффективнее без отдельных затрат на дополнительный production.',
        ],
    },
    {
        question: 'Как понять, что контент-пакет реально работает?',
        paragraphs: [
            'Базовые метрики: средний охват Reels за месяц, количество сохранений/репостов и динамика прироста подписчиков.',
            'Косвенные бизнес-сигналы: больше входящих сообщений о брони, рост переходов на сайт или Wolt, комментарии от новой аудитории.',
            'На ежемесячном check-in эти данные сравниваются с предыдущим периодом, после чего корректируется план следующего месяца.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоит ежемесячный контент для ресторана в Тбилиси?',
        answer:
            'В Breus Media — от 1 200 ₾/мес (Basic: 2 Reels + 10 фото). Standard — от 1 800 ₾/мес. Extended с двумя выездами — от 2 500 ₾/мес.',
    },
    {
        question: 'Что входит в контент-пакет для ресторана?',
        answer:
            'Reels (2–6 в месяц), фото (10–20), Stories-шаблоны, контент-план, ежемесячный check-in с анализом; в Extended — событийный слот.',
    },
    {
        question: 'Как часто нужно обновлять ресторанный контент в Instagram?',
        answer:
            'Для стабильного роста обычно ориентируются минимум на 2–3 Reels в неделю и регулярные Stories (ежедневно или через день).',
    },
    {
        question: 'Кто публикует контент после съёмки?',
        answer:
            'Ваш SMM-менеджер или сотрудник ресторана. Breus Media отвечает за производство и передачу готового пакета.',
    },
    {
        question: 'Нужно ли закрывать ресторан в день съёмки?',
        answer:
            'Нет. Обычно снимаем параллельно с работой заведения: в тихие часы или утром до открытия.',
    },
    {
        question: 'Какой минимальный срок контент-пакета?',
        answer: 'Минимальный период — 2 месяца, чтобы увидеть накопительный эффект от системного ритма.',
    },
    {
        question: 'Чем контент-пакет отличается от разовой съёмки Reels?',
        answer:
            'Разовая съёмка — одна партия роликов. Контент-пакет — ежемесячный цикл: production + план + анализ + корректировка.',
    },
    {
        question: 'Можно ли подключиться без собственного SMM-менеджера?',
        answer:
            'Да. Мы передаём подробный контент-план с подписями и рекомендациями по времени публикаций, а публиковать может владелец или сотрудник.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Примеры контента для ресторанов',
        href: 'https://breus.media/portfolio/restaurant-content',
        text: 'Портфолио форматов, которые используем для регулярных monthly-пакетов.',
    },
    {
        title: 'Статья: как выстроить систему контента без выгорания',
        href: 'https://breus.media/blog/restaurant-content-system',
        text: 'Практический разбор ритма, ролей и планирования для ресторанных команд.',
    },
    {
        title: 'Гайд: контент-план ресторана на месяц',
        href: 'https://breus.media/guides/restaurant-content-plan',
        text: 'Пример структуры месячного контент-плана с рубриками и публикационным календарём.',
    },
];

const internalTransitions = [
    {
        text: 'Хотите начать с разового пакета без подписки? Перейдите на страницу Reels для ресторана.',
        href: '/restaurants-service',
    },
    {
        text: 'Нет базы фото? Можно начать с отдельной съёмки интерьера и блюд за один день.',
        href: '/promo-video/restaurant-interior-food',
    },
    {
        text: 'Нужен флагманский ролик как старт? Подойдёт имиджевое видео ресторана.',
        href: '/promo-video/promo-restaurant',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Контент слишком дорогой — лучше вложить всё в рекламу»',
        reality:
            'Реклама без свежих креативов сжигает бюджет. Регулярный контент одновременно работает как материал для таргета, органики и удержания аудитории.',
    },
    {
        myth: '«Мы сами справимся, когда будет время»',
        reality:
            'Большинство ресторанов прекращают системный контент через 2–3 месяца из-за операционной нагрузки. Делегирование в этой задаче — рациональное решение.',
    },
    {
        myth: '«Сначала наберём аудиторию, потом займёмся контентом»',
        reality: 'Именно регулярный контент и набирает аудиторию. Здесь контент идёт первым, а не наоборот.',
    },
    {
        myth: '«У нас нет поводов для съёмки»',
        reality:
            'Ресторан ежедневно генерирует темы: кухня, люди, атмосфера, блюда, события и детали сервиса. Нужна система, а не поиск редких инфоповодов.',
    },
    {
        myth: '«SMM сам разберётся и с production»',
        reality:
            'SMM и production — разные роли. SMM отвечает за стратегию и публикации, production — за качество съёмки и монтажа. Разделение повышает результат.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Контент-план',
        definition:
            'Заранее согласованная сетка публикаций: формат, тема и дата выхода каждого материала.',
    },
    {
        term: 'Рубрикатор',
        definition:
            'Система постоянных рубрик (например, «блюдо недели», «команда», «закулисье»), которая делает контент регулярным и разнообразным.',
    },
    {
        term: 'Check-in',
        definition:
            'Короткий ежемесячный разбор результатов: что сработало, что нужно повторить или изменить.',
    },
    {
        term: 'Performance-метрики',
        definition:
            'Показатели эффективности контента: охваты, сохранения, досмотры, рост подписчиков и поведенческие сигналы.',
    },
    {
        term: 'Событийный слот',
        definition:
            'Зарезервированное место в месячном плане под конкретное событие: дегустацию, live-музыку, запуск меню.',
    },
    {
        term: 'Caption Bank',
        definition:
            'Банк готовых подписей и hook-фраз к роликам и постам на русском и английском.',
    },
];

const notFitItems = [
    'Заведениям, которым нужно полноценное ведение SMM под ключ с модерацией комментариев и direct — мы делаем production, а не аккаунт-менеджмент.',
    'Ресторанам, которые планируют закрытие или кардинальную смену формата в ближайшие 2–3 месяца.',
    'Проектам с бюджетом ниже 1 000 ₾/мес — стабильное производство качественного контента требует минимального порога.',
    'Заведениям в стадии глубокой реконструкции — эффективнее стартовать после завершения обновлений.',
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
            name: 'Контент-пакет для ресторана',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Контент-пакет для ресторана — пример формата',
    description: 'Пример формата Reels/Stories-видео для ежемесячного контент-пакета ресторана.',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
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
    name: 'Контент-пакет для ресторана в Тбилиси',
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
        lowPrice: '1200',
        highPrice: '2500',
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

export default function RestaurantContentPackPage() {
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
                id="restaurant-content-pack-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.2),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.28),rgba(8,8,8,0.95)_72%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Reels Promo · Restaurants · Tbilisi
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Контент-пакет для ресторана — серийная съёмка на месяц
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Один выезд в месяц — и профиль вашего ресторана живёт, обновляется и приводит новых
                                гостей без вашего участия.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Вы знаете, что контент важен. Разовые съёмки дают короткий эффект, а потом аккаунт
                                снова «замолкает». Контент-пакет Breus Media — это система: каждый месяц снимаем,
                                монтируем и передаём готовый пакет Reels, фото, Stories-шаблонов и контент-план.
                                Вашей команде остаётся публиковать по графику.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить контент-пакет
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 1 200 ₾/мес</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за базовый monthly-пакет.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–2</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">выезда в месяц</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">7–10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">до выдачи</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>2–6 Reels + 10–20 фото ежемесячно</li>
                                    <li>Контент-план + check-in + шаблоны</li>
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
                            <h2 className="text-3xl font-bold md:text-4xl">Объяснение услуги</h2>
                            <p className="mt-5 leading-relaxed text-white/72">{serviceIntro}</p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#FFD23F]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Пример формата контента</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    В блоке встроено видео как пример формата коротких вертикальных материалов для
                                    ресторанного monthly-пакета.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Контент-пакет для ресторана — пример видео"
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-10 rounded-[16px] border border-[#FFD23F]/40 bg-[#111111] p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white">
                            Хотите, чтобы профиль ресторана работал каждый месяц — без хаоса и разрывов?
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Напишите нам, и предложим формат под ваш ритм, бюджет и событийный календарь. Тбилиси,
                            выезды по всей Грузии.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Обсудить контент-пакет
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
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
                    <h2 className="text-3xl font-bold md:text-4xl">Примеры / мини-кейсы</h2>
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
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
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
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Ежемесячный цикл: согласование плана (2–3 дня) → съёмочный день (3–5 часов) → монтаж (5–7 дней) → передача пакета → публикация по плану → check-in (30 мин) → план следующего месяца." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы (первый месяц)</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step) => (
                            <article key={step.step + step.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Описание 3 пакетов</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {packages.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[16px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#FFD23F]/60 bg-[#14110a] shadow-[0_0_0_1px_rgba(255,210,63,0.22)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pack.title}</h3>
                                <p className="mt-2 text-2xl font-bold text-[#FFD23F]">{pack.price}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">{pack.subtitle}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{pack.audience}</p>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">{pack.timeline}</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                    {pack.features.map((feature) => (
                                        <li key={feature} className="flex gap-3">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-[16px] border border-[#2a2a2a] bg-[#111111]">
                        <table className="min-w-full text-left text-sm text-white/80">
                            <thead className="border-b border-[#2a2a2a] bg-[#161616] text-xs uppercase tracking-[0.14em] text-[#FFD23F]">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Параметр</th>
                                    <th className="px-4 py-3 font-bold">Basic</th>
                                    <th className="px-4 py-3 font-bold">Standard</th>
                                    <th className="px-4 py-3 font-bold">Extended</th>
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
                            <li>Небольшое кафе или ресторан без SMM и нужен базовый ритм → Basic.</li>
                            <li>Активный ресторан с SMM и задачей регулярного контента → Standard.</li>
                            <li>Событийный формат, ресторанная группа или отельный F&B → Extended.</li>
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Если не уверены в объёме, опишите заведение — подберём пакет без переплаты.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы перейти от разовых рывков к системному контенту? Запустим первый месяц и соберём ритм публикаций под ваш ресторан."
                buttonLabel="Начать первый месяц"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Связанные услуги</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <Link href={item.href} className="transition-colors hover:text-[#FFD23F]">
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
                            Работаем в Тбилиси и по всей Грузии. Чтобы обсудить контент-пакет для вашего ресторана,
                            напишите в WhatsApp: {CONTACT_PHONE}. Покажем, как выглядит система на практике, и поможем
                            выбрать объём под ваш бюджет и ритм заведения.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#FFD23F]">WhatsApp / Звонок</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#FFD23F]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия — работаем по всей стране</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
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
                        Breus Media — медиапродакшн в Тбилиси. Контент-пакеты для ресторанов: Reels, фото, Stories и
                        контент-план каждый месяц. Производство — на нас, публикации — на вас.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки ресторанов в контенте</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-2">{item.text}</p>
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
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к контент-пакету</h2>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {readinessChecklist.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4 text-sm leading-relaxed text-white/75"
                            >
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-[#FFD23F]">
                                    □
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
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {additionalMaterials.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <a href={item.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#FFD23F]">
                                        {item.title}
                                    </a>
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
                                <Link href={item.href} className="text-[#FFD23F] underline decoration-dotted underline-offset-4">
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
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#FFD23F]">Миф</p>
                                <p className="mt-2 text-sm leading-relaxed text-white">{item.myth}</p>
                                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#FFD23F]">Реальность</p>
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

            <div className="fixed inset-x-0 bottom-0 z-[1070] border-t border-[#FFD23F]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden">
                <div className="mx-auto flex max-w-[760px] items-center gap-2">
                    <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#FFD23F] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Начать первый месяц
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#FFD23F]/45 text-lg text-[#FFD23F]"
                    >
                        W
                    </a>
                </div>
            </div>
        </main>
    );
}

```
---
---

## /reels-promo/promo-zhk-launch
Lines: 1377
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    subtitle: string;
    audience: string;
    timeline: string;
    features: string[];
    featured?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
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

const CANONICAL_URL = 'https://breus.media/reels-promo/promo-zhk-launch';
const PAGE_TITLE = 'Рекламный ролик для ЖК в Тбилиси — промо для запуска продаж | Breus Media';
const PAGE_DESCRIPTION =
    'Рекламный ролик для жилого комплекса: 15–60 сек под Instagram, Facebook, YouTube. Быстрый запуск продаж. Тбилиси и Грузия. От 800 ₾.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';

const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const serviceIntro =
    'Рекламный ролик для ЖК — это короткое видео 15–60 секунд, созданное специально для digital-рекламы: Instagram Reels, Facebook Ads, YouTube Pre-Roll и TikTok. Мы снимаем яркие кадры комплекса: дрон, интерьеры, район — и монтируем ролик так, чтобы он захватывал внимание с первого кадра и приводил человека в отдел продаж.';

const audienceItems = [
    'Застройщикам, которые запускают продажи новой очереди или нового проекта — нужен контент для рекламных кампаний.',
    'Маркетологам девелоперских компаний — нужны креативы, которые реально работают в Facebook и Instagram.',
    'Отделам продаж — короткие видео для рассылки в WhatsApp и мессенджерах «прогревают» лида до звонка.',
    'Рекламным агентствам, ведущим кампании для застройщиков — нужен свежий видеоконтент для ротации.',
    'Проектам, чьи текущие рекламные креативы «устали» — CTR упал, стоимость лида растёт.',
];

const taskCards: Card[] = [
    {
        title: 'Привлечь внимание в ленте за 3 секунды',
        text: 'Статичные рендеры проигрывают видео в алгоритмах: промо-ролик получает больше охвата и выше CTR при том же бюджете.',
    },
    {
        title: 'Дать отделу продаж контент для WhatsApp и мессенджеров',
        text: 'Менеджер скидывает 30-секундный ролик вместо PDF, а покупатель смотрит его тут же без скачивания и долгих объяснений.',
    },
    {
        title: 'Обновить креативы без повторной большой съёмки',
        text: 'Из одного съёмочного дня делаем 4–6 разных нарезок под аудитории и форматы — этого хватает на 2–3 месяца ротации.',
    },
    {
        title: 'Запустить рекламу вовремя вместе со стартом продаж',
        text: 'Видео готовится за 3–5 дней, поэтому вы выходите в digital в нужный момент, а не ждёте «когда будет контент».',
    },
];

const painCards: Card[] = [
    {
        title: '«Запустили рекламу на рендерах — CTR упал, стоимость лида растёт»',
        text: 'Статичные картинки и CGI быстро устают в алгоритмах соцсетей. Аудитория пролистывает однотипные визуалы, стоимость лида растёт, а поток заявок падает.',
    },
    {
        title: '«Нет контента для запуска — продажи стартуют, а реклама не готова»',
        text: 'Маркетинг уже планирует кампанию, но креативы задерживаются. Каждая неделя сдвига старта — это упущенные лиды и потерянный импульс спроса.',
    },
    {
        title: '«Видео есть, но оно не подходит под формат соцсетей»',
        text: 'Презентационный ролик нельзя просто обрезать до 15 секунд. Нужны отдельные вертикальные версии с хуком, ритмом и чётким CTA.',
    },
    {
        title: '«Тратим бюджет на таргет, но креативы слабые»',
        text: 'Показы закупаются, но конверсия низкая, потому что ролик не цепляет в первые секунды. Алгоритм получает меньше кликов и урезает охват.',
    },
    {
        title: '«Менеджеры скидывают PDF — его никто не открывает»',
        text: 'В WhatsApp и Telegram люди не хотят скачивать тяжёлые файлы. Короткий ролик просматривается сразу в чате и быстрее приводит к звонку.',
    },
    {
        title: '«У конкурентов живой видеоконтент, а у нас только рендеры»',
        text: 'Покупатель сравнивает проекты за секунды. При прочих равных внимание получает тот ЖК, который показывает динамичное видео, а не статичные кадры.',
    },
];

const earnPoints = [
    'Снижает стоимость лида в digital-рекламе: видеокреативы часто получают в 2–3 раза больше кликов, чем статика.',
    'Ускоряет запуск продаж: ролик готов за 3–5 дней, вы не теряете стартовый спрос.',
    'Даёт контент для мессенджер-продаж: короткий ролик из переписки быстрее переводит в звонок и просмотр.',
    'Увеличивает ротацию креативов: 4–6 нарезок из одной съёмки закрывают 2–3 месяца активной рекламы.',
];

const avoidLossPoints = [
    'Не сливать рекламный бюджет на слабые креативы: каждый ₾ в таргете работает эффективнее.',
    'Не терять темп продаж: быстрая съёмка и монтаж сохраняют импульс запуска.',
    'Не отставать визуально от конкурентов в ленте и рекламных аукционах.',
    'Не оставлять отдел продаж без инструмента для переписок и догрева лида.',
];

const deliverables = [
    'Основной рекламный ролик 30–60 секунд: монтаж, цветокоррекция, музыка, текстовые плашки.',
    '3–4 короткие нарезки 10–15 секунд под Stories, Reels и TikTok.',
    'Вертикальная версия 9:16 и горизонтальная 16:9.',
    'Квадратная версия 1:1 для Facebook Feed.',
    'Файлы MP4 (H.264), оптимизированные под рекламные кабинеты.',
    'Текстовые рекомендации по запуску: какой формат под какую платформу.',
];

const outputItems = [
    'Форматы: MP4 (H.264), три соотношения сторон: 16:9, 9:16 и 1:1. Файлы оптимизированы для Meta Ads Manager, YouTube Studio и TikTok Ads.',
    'Сроки: съёмка 3–4 часа, монтаж 3–5 рабочих дней. Срочный монтаж 48 часов доступен в пакете Full.',
    'Доставка: облачная ссылка. Файлы хранятся 30 дней.',
];

const useCases: Card[] = [
    {
        title: 'Старт продаж нового ЖК',
        text: 'Застройщик открывает бронирование в новом проекте в Лиси. Нужны 4 ролика с разными акцентами: виды, инфраструктура, планировки, цена входа. Снимаем за полдня, монтируем за 3 дня, реклама стартует вовремя.',
    },
    {
        title: 'Ротация «уставших» креативов',
        text: 'CTR кампании упал на 40% за месяц. Используем уже отснятый материал или делаем короткий досъём и выдаём 5 новых нарезок с другим ритмом и акцентами.',
    },
    {
        title: 'Промо под сезонную акцию',
        text: 'Девелопер запускает оффер до конца месяца. Собираем ролик за 48 часов из существующего футажа и добавляем плашки с условиями, ценой и CTA.',
    },
    {
        title: 'Контент для отдела продаж в мессенджерах',
        text: 'Менеджер отправляет 30-секундный ролик вместо PDF: ключевые кадры, цифры и финальный слайд «запишитесь на просмотр». Конверсия из переписки в визит растёт.',
    },
];

const localContextText =
    'Digital-реклама — один из основных каналов лидогенерации для застройщиков в Тбилиси. Facebook и Instagram охватывают локальную аудиторию, русскоязычных релокантов и иностранных инвесторов. При росте конкуренции в аукционах — Дигоми, Ваке, Сабуртало, Лиси, Глдани — динамичный видеоконтент помогает получать более низкую цену клика и более высокую конверсию в заявку. В Батуми для курортной недвижимости ситуация аналогична: проекты с живым видео выигрывают внимание и скорость отклика.';

const miniCases: Card[] = [
    {
        title: 'Запуск продаж ЖК в Дигоми',
        text: 'Съёмка 4 часа: дрон, район, модельная квартира. Выдали 5 нарезок за 4 дня. Видеокреативы дали стоимость лида на 45% ниже, чем рендеры в предыдущей кампании.',
    },
    {
        title: 'Обновление креативов для ЖК комфорт-класса',
        text: 'После 3 недель показов CTR начал падать. Из имеющегося футажа собрали 4 новых нарезки с фокусом на район, вид и цену. CTR вернулся к стартовым значениям.',
    },
    {
        title: 'Промо для курортного ЖК в Батуми',
        text: 'Ролик 30 секунд с англоязычными плашками (цена, площадь, ROI) использовали в Instagram Ads с геотаргетом на Тель-Авив и Дубай.',
    },
];

const socialProofItems = [
    'Формат под платформу: не обрезаем длинный ролик, а монтируем отдельные версии под Reels, Stories, Feed и Pre-Roll с хуком в первом кадре.',
    'Быстрый цикл производства: съёмка за полдня, монтаж за 3–5 дней, срочный вариант 48 часов.',
    'Оборудование для динамики: DJI Air 3S (4K), FPV DJI Avata 2, стабилизатор для интерьеров.',
    'Практический подход: учитываем механику Meta и YouTube, чтобы ролик собирал клики и досмотры, а не только выглядел красиво.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем рекламный ролик отличается от презентационного видео?',
        answer:
            'Рекламный ролик — это 15–60 секунд для захвата внимания и генерации лида. Презентационное видео длится 2–3 минуты и работает на более глубокое знакомство с проектом.',
    },
    {
        question: 'Можно ли снять ролик, если стройка только началась?',
        answer:
            'Да. Снимаем район, окружение, виды с высоты и инфраструктуру. Добавляем плашки с параметрами проекта — этого достаточно для рекламного формата.',
    },
    {
        question: 'Какая длина лучше для Instagram?',
        answer:
            'Для Reels и Stories обычно лучше 15–30 секунд. Для Feed можно делать версии до 60 секунд. Мы сразу готовим несколько длин под разные плейсменты.',
    },
    {
        question: 'Сколько роликов нужно для одной кампании?',
        answer:
            'Минимум 3–4 ролика с разными акцентами: район, вид, цена, планировки. Это помогает тестировать аудитории и не допускать усталости креатива.',
    },
    {
        question: 'Можно сделать ролик из уже отснятого материала?',
        answer:
            'Да. Если футаж качественный — монтируем из него. Если материала не хватает, добавляем короткий доснимочный день.',
    },
    {
        question: 'Видео реально работает лучше фото?',
        answer:
            'В большинстве рекламных кабинетов видеокреативы получают больше взаимодействий, чем статика. Для недвижимости это особенно заметно, потому что покупателю важно увидеть объект в динамике.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит рекламный ролик для ЖК?',
        answer:
            'Basic — от 800 ₾, Standard — от 1 500 ₾, Full — от 2 500 ₾. Точная цена зависит от состава пакета и количества версий.',
    },
    {
        question: 'Можно заказать только монтаж без съёмки?',
        answer:
            'Да, если у вас есть качественный исходник. Оцениваем футаж и делаем монтаж с цветокоррекцией, музыкой и плашками.',
    },
    {
        question: 'Что выгоднее: одна большая съёмка или несколько маленьких?',
        answer:
            'Обычно одна съёмка с последующей серией нарезок дешевле. Это даёт контент на 2–3 месяца ротации без повторных выездов.',
    },
    {
        question: 'Включены ли правки в стоимость?',
        answer:
            'Да, один раунд правок входит в пакет. Дополнительные правки — по фиксированной ставке.',
    },
    {
        question: 'Как быстро можно получить ролики?',
        answer:
            'Стандартно 3–5 рабочих дней. В пакете Full доступен срочный монтаж за 48 часов.',
    },
    {
        question: 'Вы ведёте рекламу или только снимаете?',
        answer:
            'Мы снимаем и монтируем креативы. Запуск и ведение рекламы делаете вы или ваше агентство. Мы даём рекомендации по форматам и размещению.',
    },
];

const whyBreusItems = [
    'Монтаж под рекламный формат, а не «обрезка» длинного видео. Каждая нарезка собирается как самостоятельный ролик с хуком и CTA.',
    'Быстрый цикл: съёмка полдня, монтаж 3–5 дней, срочный режим 48 часов.',
    'Набор форматов из одной съёмки: 16:9, 9:16 и 1:1 без дополнительного выезда.',
    'Понимание рекламных алгоритмов Meta и YouTube: проектируем ролик под удержание и клик.',
    'Оборудование для динамичного видео: дрон, FPV и стабилизатор вместо «слайд-шоу из рендеров».',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Фиксируем цель рекламы, ЦА, ключевые преимущества, нужные форматы и количество нарезок.',
    },
    {
        step: 'Шаг 2',
        title: 'Сценарий и shot-list (день 2)',
        text: 'Готовим монтажный план: какие кадры снимаем, в каком порядке и с какими акцентами для оффера.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 3)',
        text: 'Выезд на площадку 3–4 часа: дрон, интерьеры, район, детали. Всё за один съёмочный слот.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж (дни 4–7)',
        text: 'Собираем основной ролик и нарезки: ритм, цвет, музыка, плашки и адаптация под платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Правки и выдача (день 8)',
        text: 'Вносим согласованные корректировки и передаём финальные файлы по облачной ссылке.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic — Быстрый промо-старт',
        price: 'от 800 ₾',
        subtitle: 'Один сильный ролик для быстрого запуска рекламы.',
        audience: 'Для кого: старт продаж и быстрый тест гипотез в digital.',
        timeline: 'Срок: 3–5 рабочих дней.',
        features: [
            'Съёмка дроном и ручной камерой (3–4 часа).',
            '1 рекламный ролик 30–60 секунд.',
            '2 короткие нарезки 10–15 секунд под Stories/Reels.',
            'Цветокоррекция, музыка, текстовые плашки.',
            'Горизонтальный и вертикальный форматы.',
        ],
    },
    {
        title: 'Standard — Рекламный набор',
        price: 'от 1 500 ₾',
        subtitle: 'Ротация нескольких креативов для стабильной кампании.',
        audience: 'Для кого: запуск и поддержка рекламы в Facebook и Instagram.',
        timeline: 'Срок: 5 рабочих дней.',
        features: [
            'Всё из Basic.',
            '4 короткие нарезки с разными акцентами.',
            'Формат 1:1 для Facebook Feed.',
            'Текстовые рекомендации для рекламных кампаний.',
            'Титры на русском и английском.',
        ],
        featured: true,
    },
    {
        title: 'Full — Полный рекламный арсенал',
        price: 'от 2 500 ₾',
        subtitle: 'Масштабный multi-platform запуск с ускоренной выдачей.',
        audience: 'Для кого: крупные кампании, несколько аудиторий и языков.',
        timeline: 'Срок: 5 рабочих дней / 48 часов срочно.',
        features: [
            'Всё из Standard.',
            'FPV-съёмка динамичных пролётов (DJI Avata 2).',
            '6 нарезок под разные аудитории и платформы.',
            'Срочный монтаж за 48 часов.',
            'Версии RU + EN и передача исходного футажа.',
        ],
    },
];

const packageCompareRows = [
    ['Цена от', '800 ₾', '1 500 ₾', '2 500 ₾'],
    ['Для кого', 'Быстрый старт рекламы', 'Кампания с ротацией', 'Масштабный multi-platform запуск'],
    ['Дрон-съёмка 4K', '✓', '✓', '✓'],
    ['FPV-съёмка', '—', '—', '✓'],
    ['Основной ролик', '30–60 сек', '30–60 сек', '30–60 сек'],
    ['Короткие нарезки', '2 шт.', '4 шт.', '6 шт.'],
    ['Форматы', '16:9 + 9:16', '16:9 + 9:16 + 1:1', '16:9 + 9:16 + 1:1'],
    ['Титры RU + EN', '—', '✓', '✓'],
    ['Рекомендации для рекламы', '—', '✓', '✓'],
    ['Срочный монтаж 48ч', '—', '—', '✓'],
    ['Исходники', '—', '—', '✓'],
    ['Срок выдачи', '3–5 дней', '5 дней', '5 дней / 48ч срочный'],
];

const relatedServices = [
    {
        title: 'Презентационное видео ЖК',
        href: '/promo-video/promo-residential-complex',
        text: 'Развёрнутый рассказ о проекте для сайта, инвесторов и отдела продаж.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Дрон-кадры для каталогов, площадок и рекламных материалов.',
    },
    {
        title: 'Reels для ресторанов и отелей',
        href: '/restaurants-service',
        text: 'Подходит, если вы продвигаете коммерческую инфраструктуру рядом с ЖК.',
    },
    {
        title: '360° виртуальный тур по недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный осмотр для удалённых покупателей и инвесторов.',
    },
];

const commonMistakes = [
    {
        title: 'Запускать рекламу на рендерах вместо видео',
        text: 'Статика проигрывает видео по CTR и охвату в Meta-алгоритмах. Вы платите за показы, но получаете меньше кликов.',
    },
    {
        title: 'Использовать один и тот же креатив дольше 3 недель',
        text: 'Контент устаёт, охват падает. Нужна ротация 3–4 роликов для тестирования и регулярного обновления.',
    },
    {
        title: 'Обрезать презентационное видео для рекламы',
        text: 'Для рекламы нужен отдельный монтаж: хук в начале, быстрый ритм, чёткий CTA. Простая обрезка редко работает.',
    },
    {
        title: 'Не адаптировать под вертикальный формат',
        text: 'Большая часть просмотров в Instagram и TikTok идёт с телефона вертикально. Горизонталь теряет экран и внимание.',
    },
    {
        title: 'Не показывать конкретный оффер',
        text: 'Красивые кадры без цены, площади или срока акции дают имидж, но не лидогенерацию. В рекламе нужны цифры и призыв к действию.',
    },
    {
        title: 'Не делать разные нарезки под разные аудитории',
        text: 'Один ролик «для всех» обычно не цепляет никого. Инвесторы, семьи и релоканты смотрят на разные аргументы.',
    },
];

const freeImprovements = [
    'Снимите 10-секундный вертикальный ролик ЖК на телефон и протестируйте его в Instagram Stories против статичного рендера.',
    'Добавьте текстовые плашки к текущей статике: цена от X ₾, площадь от Y м², CTA «запишитесь на просмотр».',
    'Сделайте 3 отдельных поста с акцентами: район, вид, цена. Сравните реакцию и сохраните лучший угол подачи.',
    'Используйте Instagram Reels для дополнительного органического охвата без роста рекламного бюджета.',
    'Попросите менеджеров записать 30-секундный обзор для WhatsApp: живой голос + камера телефона лучше, чем тяжёлый PDF.',
];

const shootChecklist = [
    'Определена цель ролика: лидогенерация / имидж / запуск акции.',
    'Определена целевая аудитория: семьи / инвесторы / иностранцы.',
    'Выбраны преимущества для акцента: цена / вид / район / планировки.',
    'Площадка подготовлена: чисто, включён свет, нет визуального шума.',
    'Подготовлены цифры для плашек: цена от, площадь от, этаж, старт заселения.',
    'Согласовано время съёмки с учётом света для дрона (утро или золотой час).',
    'Подготовлен CTA: телефон, сайт или «запишитесь на просмотр».',
    'Назначен ответственный от девелопера для координации на площадке.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видеореклама эффективнее статичных рендеров для продажи квартир?',
        paragraphs: [
            'Рендер — это компьютерная картинка, и покупатель это чувствует. Реальное видео с дроном, районом и площадкой воспринимается как подтверждение, а не только обещание.',
            'Алгоритмы Facebook и Instagram отдают приоритет видео, потому что оно дольше удерживает внимание. При том же бюджете это часто даёт больше показов, кликов и заявок.',
            'Видео показывает движение и масштаб: пролёт над районом, проход по квартире, панораму с балкона. Покупатель не просто видит картинку, а лучше представляет будущий опыт проживания.',
        ],
    },
    {
        question: 'Сколько роликов нужно для эффективной рекламной кампании ЖК?',
        paragraphs: [
            'Базовый минимум — 3–4 ролика с разными акцентами. Один креатив обычно устает за 2–3 недели, затем CTR падает и цена лида растёт.',
            'Оптимально иметь 5–6 нарезок из одной съёмки: отдельно про район, вид, инфраструктуру, планировки и цену входа. Так проще тестировать аудитории и плейсменты.',
            'Для длинных кампаний разумно обновлять пакет раз в 2–3 месяца: доснимать прогресс стройки и перемонтировать ролики без полной пересъёмки.',
        ],
    },
    {
        question: 'Как отличить сильный рекламный ролик от слабого?',
        paragraphs: [
            'Сильный ролик начинается с хука: кадр, который останавливает скролл в первые секунды. Если первый кадр не цепляет, дальнейшая красота не спасает результат.',
            'Второй критерий — ритм. Для digital-рекламы нужна динамика: смена кадров, музыка, точные моменты появления текста и оффера.',
            'Третий критерий — конкретика. Без цены, сроков и CTA ролик остаётся имиджевым. Для лидогенерации нужны понятные цифры и чёткий следующий шаг.',
        ],
    },
    {
        question: 'Можно ли запускать рекламу, если ЖК ещё на стадии котлована?',
        paragraphs: [
            'Да, и это распространённая практика. На ранней стадии продаётся не готовая квартира, а возможность: цена входа, выбор планировок и инвестиционный потенциал.',
            'Для такого формата снимаем район, инфраструктуру, вид с высоты, общие планы площадки и логистику. Поверх добавляем плашки с ключевыми параметрами проекта.',
            'Для ролика 15–30 секунд этого достаточно: покупатель видит реальное место и конкретные цифры, после чего проще принимает решение записаться на консультацию.',
        ],
    },
];

const shortQa = [
    {
        question: 'Сколько стоит рекламный ролик для жилого комплекса в Тбилиси?',
        answer:
            'Стоимость начинается от 800 ₾ (1 ролик + 2 нарезки) и до 2 500 ₾ за Full-пакет с FPV, 6 нарезками и срочным монтажом.',
    },
    {
        question: 'За сколько дней делается рекламный ролик для ЖК?',
        answer: 'Стандартный срок — 3–5 рабочих дней. Срочный монтаж — 48 часов.',
    },
    {
        question: 'Какой формат лучше для рекламы недвижимости в Instagram?',
        answer: 'Для Reels и Stories — 9:16 и 15–30 секунд. Для Feed — 1:1 или 16:9, до 60 секунд.',
    },
    {
        question: 'Чем рекламный ролик отличается от презентационного видео?',
        answer: 'Рекламный ролик — 15–60 секунд для лидов из соцсетей. Презентация — 2–3 минуты для углублённого знакомства.',
    },
    {
        question: 'Можно ли снять ролик, если ЖК на стадии строительства?',
        answer: 'Да. Снимаем район, окружение и вид с высоты, добавляем параметры проекта на текстовых плашках.',
    },
    {
        question: 'Сколько роликов нужно для рекламной кампании ЖК?',
        answer: 'Минимум 3–4 нарезки для ротации. Оптимально 5–6 роликов из одного съёмочного дня.',
    },
    {
        question: 'Вы ведёте рекламу или только производите контент?',
        answer: 'Мы снимаем и монтируем. Рекламу запускаете вы или агентство. Мы даём рекомендации по форматам.',
    },
    {
        question: 'Какое оборудование вы используете?',
        answer: 'DJI Air 3S (4K), FPV DJI Avata 2 для динамичных пролётов и стабилизированная камера для интерьеров.',
    },
] as const;

const additionalMaterials = [
    {
        title: 'Презентационное видео ЖК',
        href: '/promo-video/promo-residential-complex',
        text: 'Развёрнутый формат для сайта, инвесторов и переговоров отдела продаж.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Отдельные дрон-кадры для каталогов, площадок и рекламы.',
    },
    {
        title: '360° тур по недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный осмотр для удалённых покупателей.',
    },
    {
        title: 'Мониторинг строительства с дрона',
        href: '/drone-construction-monitoring',
        text: 'Регулярная съёмка прогресса для дольщиков и маркетинга.',
    },
];

const internalTransitions = [
    {
        text: 'Если вам нужен не 30-секундный ролик, а развёрнутая презентация проекта — смотрите презентационное видео ЖК.',
        href: '/promo-video/promo-residential-complex',
    },
    {
        text: 'Для удалённых покупателей и инвесторов лучше добавить 360° виртуальный тур.',
        href: '/360-tour-real-estate',
    },
    {
        text: 'Если нужна регулярная съёмка стройки для дольщиков — подключите мониторинг строительства.',
        href: '/drone-construction-monitoring',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Достаточно обрезать длинное видео — и получится реклама»',
        reality:
            'Рекламный ролик — отдельный продукт: хук в первом кадре, ритм, структура и CTA. Простая обрезка чаще даёт слабый результат.',
    },
    {
        myth: '«Одного ролика хватит на всю кампанию»',
        reality:
            'Один креатив обычно теряет эффективность через 2–3 недели. Нужна ротация минимум 3–4 нарезок с разными акцентами.',
    },
    {
        myth: '«Видеореклама слишком дорогая, лучше баннеры»',
        reality:
            'Один съёмочный день за 800–2 500 ₾ даёт контент на 2–3 месяца. При более высоком CTR стоимость лида часто становится ниже.',
    },
    {
        myth: '«Для Instagram достаточно фото с текстом»',
        reality:
            'Алгоритмы Instagram приоритизируют видео. Reels получают больше органического охвата, чем статичные посты.',
    },
    {
        myth: '«Видео нужно только дорогим ЖК»',
        reality:
            'Для комфорт-класса видео особенно важно: конкуренция выше, решений больше, покупатель сравнивает быстрее.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Рекламный креатив',
        definition: 'Изображение или видео, которое показывается в рекламе и которое видит пользователь в ленте или Stories.',
    },
    {
        term: 'CTR (Click-Through Rate)',
        definition: 'Процент пользователей, которые кликнули по объявлению после просмотра. Чем выше CTR, тем эффективнее бюджет.',
    },
    {
        term: 'Ротация креативов',
        definition: 'Использование нескольких роликов в одной кампании для тестов и предотвращения усталости контента.',
    },
    {
        term: 'Хук (hook)',
        definition: 'Первые 1–2 секунды ролика, которые останавливают скролл и удерживают внимание.',
    },
    {
        term: 'FPV-съёмка',
        definition: 'Съёмка с маневренного дрона, создающая эффект динамичного полёта через пространство.',
    },
    {
        term: 'CTA (Call to Action)',
        definition: 'Призыв к действию в ролике: «Запишитесь на просмотр», «Узнайте цену», «Свяжитесь с отделом продаж».',
    },
];

const notFitItems = [
    'Если вам нужен ТВ-ролик с актёрами и полноценным кинопродакшном с кастингом и павильонами.',
    'Если бюджет на весь маркетинг 200–300 ₾. Наш минимальный рабочий пакет начинается от 800 ₾.',
    'Если нужна только настройка и ведение рекламы без производства контента.',
    'Если проект полностью виртуальный и требует CGI-анимацию с нуля без реальной локации.',
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
            name: 'Reels и промо-видео',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Рекламный ролик для ЖК',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Рекламный ролик для жилого комплекса — пример формата',
    description: 'Пример короткого ролика 15–60 секунд для рекламы ЖК в Instagram, Facebook и YouTube.',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    thumbnailUrl: VIDEO_THUMBNAIL_URL,
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
    name: 'Рекламный ролик для ЖК в Тбилиси',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Batumi', 'Georgia'],
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
        lowPrice: '800',
        highPrice: '2500',
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

export default function PromoZhkLaunchPage() {
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
                id="promo-zhk-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.2),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.28),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Reels Promo · ЖК · Тбилиси
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Рекламный ролик для ЖК — промо под запуск продаж и digital-рекламу
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                15–60 секунд, которые приводят заявки из Instagram, Facebook и YouTube — вместо
                                «уставших» рендеров и статичных баннеров.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Рекламный ролик — это отдельный инструмент с одной целью: зацепить за 3 секунды и
                                привести человека в отдел продаж. Мы снимаем динамичные промо-ролики для ЖК в
                                Тбилиси и Батуми: дрон, живые кадры, монтаж под платформу. Результат — заявки, а не
                                просто просмотры.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Заказать рекламный ролик для ЖК
                                </a>
                                <a
                                    href="#packages"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 800 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">за рекламный комплект.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">монтаж</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–6</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">версий из съёмки</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Instagram, Facebook, YouTube, TikTok</li>
                                    <li>Форматы: 16:9, 9:16, 1:1</li>
                                    <li>Тбилиси, Батуми и вся Грузия</li>
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
                            <p className="mt-4 leading-relaxed text-white/72">
                                Каждый ролик затачиваем под конкретную аудиторию и рекламную цель: запуск продаж,
                                обновление уставших креативов, сезонный оффер, рассылки менеджеров.
                            </p>

                            <div className="mt-8 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-[#FFD23F]">SCHEMA Video</p>
                                <h3 className="mt-2 text-lg font-bold text-white">Пример рекламного ролика</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    Ниже встроен пример embed-видео с форматом, который используем как ориентир для
                                    короткой digital-рекламы ЖК.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#111111] p-3">
                            <div className="mx-auto max-w-[420px] overflow-hidden rounded-[14px] border border-white/10 bg-black">
                                <iframe
                                    title="Пример рекламного ролика для ЖК"
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
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
                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-10 rounded-[16px] border border-[#FFD23F]/40 bg-[#111111] p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white">Запускаете продажи квартир и нужны креативы для соцсетей?</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72">
                            Подберём формат под ваш проект и кампанию: какие версии запускать в Meta, какие — в YouTube,
                            а какие давать отделу продаж в мессенджеры.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Заказать рекламный ролик для ЖК
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Telegram
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
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
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
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
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Мы делаем контент именно для рекламы: бриф за день, съёмка за полдня, монтаж за 3–5 дней. Вы получаете готовые файлы под платформы и один раунд правок." />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Этапы работы</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {processSteps.map((step) => (
                            <article key={step.step + step.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Описание 3 пакетов</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {packages.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[16px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#FFD23F]/60 bg-[#14110a] shadow-[0_0_0_1px_rgba(255,210,63,0.22)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pack.title}</h3>
                                <p className="mt-2 text-2xl font-bold text-[#FFD23F]">{pack.price}</p>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">{pack.subtitle}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{pack.audience}</p>
                                <p className="mt-1 text-sm leading-relaxed text-white/60">{pack.timeline}</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                    {pack.features.map((feature) => (
                                        <li key={feature} className="flex gap-3">
                                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD23F]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-[16px] border border-[#2a2a2a] bg-[#111111]">
                        <table className="min-w-full text-left text-sm text-white/80">
                            <thead className="border-b border-[#2a2a2a] bg-[#161616] text-xs uppercase tracking-[0.14em] text-[#FFD23F]">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Параметр</th>
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
                            <li>Нужен один ролик для быстрого запуска рекламы → Basic.</li>
                            <li>Нужна ротация креативов для Facebook и Instagram → Standard.</li>
                            <li>Нужен масштабный запуск с FPV, двумя языками и срочным монтажом → Full.</li>
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Напишите нам, и подберём пакет под вашу рекламную стратегию и текущий этап продаж.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Запускаете продажи? Получите рекламные ролики, которые приводят заявки, а не просто набирают просмотры."
                buttonLabel="Обсудить рекламный ролик для ЖК"
                href="#contact"
                bgColor="#080808"
            />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Связанные услуги</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <Link href={item.href} className="transition-colors hover:text-[#FFD23F]">
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
                            Нужны рекламные ролики для запуска продаж ЖК? Напишите или позвоните — обсудим задачу и
                            пришлём предложение в течение дня.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#FFD23F]">WhatsApp / Telegram</p>
                                <p className="mt-2 text-lg font-bold text-white">{CONTACT_PHONE}</p>
                            </div>
                            <div className="rounded-[14px] border border-white/10 bg-[#111111] p-5">
                                <p className="text-xs uppercase tracking-[0.16em] text-[#FFD23F]">Локация</p>
                                <p className="mt-2 text-lg font-bold text-white">Тбилиси, Грузия — работаем по всей стране</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#FFD23F]"
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
                        Breus Media — медиапродакшн в Тбилиси. Рекламные ролики, аэросъёмка, 360° туры и AI-визуализация
                        для бизнеса в Грузии.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки девелоперов в контенте</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-2">{item.text}</p>
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
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Checklist готовности к съёмке рекламного ролика</h2>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-4 text-sm leading-relaxed text-white/75"
                            >
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-white/30 text-[11px] text-[#FFD23F]">
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
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы для long-tail SEO</h2>
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
                                    <Link href={item.href} className="transition-colors hover:text-[#FFD23F]">
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
                                <Link href={item.href} className="text-[#FFD23F] underline decoration-dotted underline-offset-4">
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
                                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#FFD23F]">Миф</p>
                                <p className="mt-2 text-sm leading-relaxed text-white">{item.myth}</p>
                                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#FFD23F]">Реальность</p>
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

            <div className="fixed inset-x-0 bottom-0 z-[1070] border-t border-[#FFD23F]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden">
                <div className="mx-auto flex max-w-[760px] items-center gap-2">
                    <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#FFD23F] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Обсудить ролик
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#FFD23F]/45 text-lg text-[#FFD23F]"
                    >
                        W
                    </a>
                </div>
            </div>
        </main>
    );
}

```
---
---

## /reels-promo/hotel-seasonal-content
Lines: 1294
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
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
    audience: string;
    items: string[];
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

const CANONICAL_URL = 'https://breus.media/reels-promo/hotel-seasonal-content';
const PAGE_TITLE = 'Сезонный контент для отеля в Тбилиси — съёмка под сезон и акции';
const PAGE_DESCRIPTION =
    'Контент-пакет для отеля под сезон: Новый год, лето, праздники. Готовые видео, Reels и фото для Booking, Instagram и рассылок. От 900 ₾, Тбилиси.';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_URL = 'https://wa.me/995574619393';
const TELEGRAM_URL = 'https://t.me/breusmedia';

const serviceIntro =
    'Сезонный контент-пакет — это разовый проект, который снимает одну конкретную задачу: подготовить отель к сезонному пику или тематическому периоду (праздник, мероприятие, фестиваль, начало/конец сезона). В пакет входят видео, Reels и фотоматериалы, адаптированные под нужный контекст: зимний декор, летняя терраса, праздничный завтрак, специальное предложение. Всё готово к публикации: форматы, субтитры, описания.';

const audienceItems = [
    'Отелям с явно выраженной сезонностью: курорты Гудаури (зимний сезон), Батуми (летний сезон), горные глэмпинги.',
    'Отелям в Тбилиси, которые хотят конвертировать туристический поток на Новый год, Рождество, Тбилисобу или майские праздники.',
    'Апарт-отелям и гестхаусам, которые не могут позволить постоянный контракт, но хотят обновлять контент перед каждым сезоном.',
    'Отелям, у которых есть базовые фото и видео, но нет сезонной «обёртки» под конкретное предложение.',
    'Управляющим компаниям нескольких объектов — для одновременного обновления контента на всех точках перед сезоном.',
    'Курортным объектам (глэмпинг, эко-отель, загородная усадьба), которые работают только в определённые месяцы.',
];

const taskCards: Card[] = [
    {
        title: 'Закрывает контентный разрыв перед сезоном',
        text: 'Ваши OTA, Instagram и сайт обновляются синхронно под конкретный период. Гость видит актуальную картину, а не прошлогодние фото.',
    },
    {
        title: 'Продвигает конкретное предложение',
        text: '«Новогодний ужин», «Летний пакет» или «Раннее бронирование» получают отдельный визуальный материал, а не только текст.',
    },
    {
        title: 'Запускает сезонную рекламу с правильным контентом',
        text: 'В таргете и Booking работают конкретные сезонные образы, а не универсальные фото лобби без акцента на период.',
    },
    {
        title: 'Создаёт повод для коммуникации с аудиторией',
        text: 'Новый сезонный контент — это причина опубликовать посты, отправить рассылку и обновить профиль во всех каналах.',
    },
];

const painCards: Card[] = [
    {
        title: '«Перед Новым годом нам нечего показать — одни старые фото»',
        text: 'Праздничная аудитория ищет атмосферу: огни, декор, ужин. Если на сайте и в Instagram нет зимнего визуала, гость уходит к конкуренту.',
    },
    {
        title: '«Мы делаем акцию, но нет видео и фото под неё»',
        text: 'Акция без визуального оформления остаётся просто текстом. Люди реагируют на образ: «Рождественский ужин с видом на ночной Тбилиси».',
    },
    {
        title: '«Лето прошло, а мы так и не обновили контент»',
        text: 'Сезонный контент нужно снимать заранее, а не в разгар загрузки. Мы работаем по графику и готовим материалы до пика спроса.',
    },
    {
        title: '«Для разных сезонов нужен разный стиль, а мы не знаем как»',
        text: 'Зиме нужен тёплый свет и уют, лету — яркость, терраса и воздух. Мы переключаем визуальный стиль под каждый период.',
    },
    {
        title: '«Гости из России хотят видеть новогоднюю Грузию — у нас нет такого контента»',
        text: 'Аудитория из России и СНГ на праздники ориентируется на атмосферу: горы, снег, ёлка, локальная кухня. Без этого визуала объект не попадает в выбор.',
    },
    {
        title: '«Мы упускаем корпоративных клиентов перед праздниками»',
        text: 'Компании бронируют корпоративы за 4–6 недель. Если нет контента про мероприятия и праздничные ужины, вас не рассматривают.',
    },
];

const earnPoints = [
    'Ранние бронирования: сезонный контент, опубликованный за 6–8 недель до пика, помогает собрать спрос до того, как конкуренты проснулись.',
    'Продажа сезонных пакетов с более высоким чеком: «Новогодний пакет на 3 ночи с ужином» продаётся визуальным образом, а не прайс-листом.',
    'Корпоративные заявки: компании ищут площадки через Instagram и Google — правильный сезонный контент повышает видимость в нужный момент.',
    'Таргетированная реклама с высоким откликом: сезонные видео конвертируются лучше общих промо, потому что аудитория видит релевантное предложение.',
];

const savePoints = [
    'Не теряете аудиторию в межсезонье: сезонный контент поддерживает интерес даже у тех, кто не планирует поездку прямо сейчас.',
    'Снижаете ценовое давление: атмосфера и продуманное предложение делают цену не единственным аргументом выбора.',
    'Не упускаете праздничный трафик: новогодний и рождественский пик в Тбилиси проходит мимо тех, кто не обновил сезонный визуал.',
    'Сохраняете актуальность на OTA: обновлённые фото и видео в Booking перед сезоном помогают позиции в выдаче.',
];

const deliverables = [
    '3–5 тематических Reels (9:16) под конкретный сезон или акцию с монтажом и музыкой.',
    '1 основной промо-ролик (60–90 сек, 16:9) для сайта и OTA с акцентом на сезонное предложение.',
    '8–15 фотографий (JPG) в сезонном оформлении для OTA, сайта и email-рассылки.',
    'Описание акции в формате текста: RU + EN (для Booking, сайта и email).',
    'Субтитры на Reels (RU / EN по выбору).',
    'Готовые описания для Instagram-публикаций с хэштегами под сезон.',
    'Рекомендации по расписанию публикаций: когда и что выкладывать.',
];

const outputItems = [
    'Форматы: MP4 (9:16 и 16:9), JPG, текстовые файлы (docx/txt).',
    'Сроки: съёмка — 1 рабочий день, производство — 7–10 рабочих дней.',
    'Рекомендуемый старт: за 4–6 недель до начала сезона или события.',
    'Передача: облачный диск + текстовый документ с описаниями и расписанием.',
    'Правки: 1 раунд на каждый ролик и 1 раунд на тексты.',
];

const useCases: Card[] = [
    {
        title: 'Новогодний пакет (ноябрь–декабрь)',
        text: 'Отель хочет заполнить даты на праздники и продать ужин. Снимаем ёлку, огни, праздничный стол, ночной Тбилиси. Пакет: 3 Reels + промо-ролик + фото для Booking. Контент выходит за 3 недели до Нового года, когда ещё есть окно бронирования.',
    },
    {
        title: 'Летний старт (апрель–май)',
        text: 'Курорт в Батуми или Гудаури готовится к лету. Снимаем весенний вид, открытую террасу, море или горы. Контент публикуется в апреле–мае, когда семьи из Тбилиси, России и Украины планируют отпуск.',
    },
    {
        title: 'Тбилисоба и осенние фестивали (октябрь)',
        text: 'Снимаем отель в осеннем оформлении, добавляем локальные акценты Тбилиси. Reels с релевантными хэштегами попадают в discovery нужной аудитории.',
    },
    {
        title: 'Бизнес-сезон и корпоративы (сентябрь–октябрь)',
        text: 'Показываем конференц-зал, деловой завтрак и переговорные. Контент публикуется в сентябре, когда компании планируют мероприятия и рабочие поездки.',
    },
];

const localContextText =
    'Грузия — страна с выраженной сезонностью: Тбилиси принимает международных гостей круглый год, но Новый год, Рождество (православное и католическое) и Тбилисоба — отдельные пики. Батуми живёт летом. Гудаури — зимой. Кахетия — в сентябре–октябре во время сбора винограда и Ртвели. Каждый из этих периодов требует своего контента: образа, атмосферы, предложения. Туристы из России, Европы и Израиля реагируют на разные акценты — мы понимаем эту разницу и закладываем её в производство.';

const miniCases: Card[] = [
    {
        title: 'Бутик-отель, Тбилиси — новогодний пакет',
        text: 'Сняли праздничный декор лобби, ужин с видом на Метехи и зимний Тбилиси. Добавили описание «Новогодний пакет 3 ночи + ужин» на RU/EN для Booking и email. Контент вышел 20 ноября, праздничные даты заполнились к 1 декабря.',
    },
    {
        title: 'Курорт Гудаури — летний запуск',
        text: 'Задача — привлечь треккеров и eco-туристов. Сняли июньские горы, маршруты и панораму с террасы. Reels с travel-hashtag получили органический охват в adventure-аудитории.',
    },
    {
        title: 'Глэмпинг, Кахетия — Ртвели',
        text: 'Виноградники в осенних красках, сбор урожая и вино у костра. Продвигали «Пакет Ртвели»: проживание + экскурсия на виноградник. Контент работал в Instagram и email-рассылке.',
    },
];

const socialProofItems = [
    'Ранние бронирования на праздничные даты в Тбилиси начинаются за 6–10 недель. Отели, которые публикуют сезонный контент в это окно, получают плановых туристов раньше остальных.',
    'Гости из России и СНГ при планировании праздников ориентируются на атмосферный визуал. Если в Booking и Instagram нет сезонной подачи, объект часто даже не рассматривается.',
    'Booking.com рекомендует регулярно обновлять медиасекцию, а сезонный пакет помогает делать это системно и в ритме рынка.',
    'Breus Media работает с отелями Тбилиси, Батуми и регионов и учитывает сезонный ритм грузинского туризма в каждом проекте.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое сезонный контент-пакет для отеля?',
        answer:
            'Это набор видео, Reels и фото, снятых и адаптированных под конкретный сезон или праздник. Например, новогодний пакет включает ролики в праздничном декоре, описание акции и материалы для рекламы. Всё готово к публикации — вам не нужно ничего придумывать или снимать самостоятельно.',
    },
    {
        question: 'Чем сезонный пакет отличается от обычной Reels-съёмки?',
        answer:
            'Обычные Reels — это постоянный поток контента для поддержания аккаунта. Сезонный пакет — это точечный проект под один период: единый визуальный и смысловой код, акцент на акцию и призыв к бронированию.',
    },
    {
        question: 'За сколько времени нужно заказывать пакет?',
        answer:
            'Оптимально за 4–6 недель до начала сезона или события. Съёмка и производство занимают 10–14 дней, а затем нужно время на публикацию и прогрев аудитории.',
    },
    {
        question: 'Что если у меня уже есть базовые фото?',
        answer:
            'Можно использовать существующие материалы и доснять только то, чего не хватает под конкретный период: декор, акцию, сезонный свет. Это снижает объём работы и стоимость.',
    },
    {
        question: 'Можно ли сделать пакет для нескольких сезонов сразу?',
        answer:
            'Да, обычно это выгодно. Например, осенний + новогодний пакет можно спланировать заранее и распределить бюджет на два съёмочных визита с шагом 6–8 недель.',
    },
    {
        question: 'Входит ли контент для рассылки в пакет?',
        answer:
            'Да. В пакетах Standard и Full входят тексты описания акции для email и мессенджеров на RU + EN.',
    },
];

const moneyFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит сезонный контент-пакет?',
        answer:
            'Basic — от 900 ₾ (3 Reels + фото + описание). Standard — от 1 500 ₾ (5 Reels + промо-ролик + фото + тексты). Full — от 2 400 ₾ (полный пакет с аэросъёмкой и двуязычными материалами). Точная стоимость — после брифинга.',
    },
    {
        question: 'Нужна ли предоплата?',
        answer: 'Да, 50% перед съёмкой, остаток — после одобрения финального контента.',
    },
    {
        question: 'Сколько длится весь процесс?',
        answer: 'Обычно 10–14 дней от съёмки до передачи. Рекомендуем стартовать за 4–6 недель до события.',
    },
    {
        question: 'Вы снимаете только в Тбилиси?',
        answer: 'Нет. Работаем в Батуми, Гудаури, Кахетии, Боржоми и других направлениях Грузии. Выезд согласуется отдельно.',
    },
    {
        question: 'Что если сезонные декорации ещё не установлены?',
        answer:
            'Часть кадров можно снять концептуально: свет, текстиль, напитки, сервировка. Декоративные элементы обычно можно установить заранее по чеклисту, который согласуем до съёмки.',
    },
    {
        question: 'Работаете ли вы по контракту?',
        answer:
            'Да. По запросу возможно ежеквартальное партнёрство: 4 сезонных пакета в год с фиксированной ставкой и приоритетными слотами.',
    },
];

const whyBreusItems = [
    'Знаем грузинский туристический ритм: когда снимать под Ртвели, когда под Новый год, когда под летний поток из Европы.',
    'Один съёмочный день закрывает полный пакет: видео, Reels, фото и тексты без координации нескольких подрядчиков.',
    'Снимаем под задачу бронирования: каждый кадр работает на заявку, а не только на красивую картинку.',
    'Мультиязычные материалы: описания акций RU + EN входят в пакет, при необходимости добавляем GE.',
    'Работаем под дедлайн и окно публикаций: сезонный контент должен выйти вовремя, и мы держим этот график.',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф и планирование (1–2 дня)',
        text: 'Обсуждаем сезон, акции, аудиторию и каналы публикации. Утверждаем сцены и дату съёмки.',
    },
    {
        step: 'Шаг 2',
        title: 'Чеклист подготовки',
        text: 'Вы получаете список подготовки: декор, сервировка, оформление и организационные детали перед визитом.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: '1 день на месте: все сцены, форматы, фото и видео по заранее согласованному плану.',
    },
    {
        step: 'Шаг 4',
        title: 'Производство (7–10 дней)',
        text: 'Монтаж Reels и промо-ролика, обработка фото, подготовка текстов. Передаём материалы на согласование.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача пакета',
        text: 'Отдаём файлы, тексты и расписание публикаций через облачный диск. Контент готов к выходу.',
    },
];

const packages: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 900 ₾',
        audience: 'Для кого: гестхаус или небольшой апарт-отель, нужен минимальный сезонный комплект.',
        items: ['3 Reels (9:16) в сезонной стилистике', '8 фотографий для OTA и Instagram', 'Описание акции (RU, 1 вариант)'],
    },
    {
        title: 'Standard',
        price: 'от 1 500 ₾',
        audience: 'Для кого: бутик-отель с активными соцсетями и Booking, нужна полная сезонная подача.',
        featured: true,
        items: [
            '5 Reels (9:16)',
            'Промо-ролик 60–90 сек (16:9)',
            '12 фотографий',
            'Описание акции RU + EN для Booking, сайта и email',
            'Расписание публикаций',
        ],
    },
    {
        title: 'Full',
        price: 'от 2 400 ₾',
        audience: 'Для кого: отель с полноценным маркетингом и задачей захватить пиковый сезон.',
        items: [
            '8 Reels (9:16)',
            'Промо-ролик 60–120 сек (16:9)',
            'Аэросъёмка (снег, море, горы)',
            '20 фотографий',
            'Описания акций RU + EN + GE',
            'Варианты для рассылки',
            'Расписание на весь сезонный период',
        ],
    },
];

const packageCompareRows = [
    ['Reels (9:16)', '3', '5', '8'],
    ['Промо-ролик 16:9', '—', '✓', '✓'],
    ['Фотографии', '8', '12', '20'],
    ['Аэросъёмка', '—', '—', '✓'],
    ['Описание акции', 'RU', 'RU + EN', 'RU + EN + GE'],
    ['Вариант для email', '—', '✓', '✓'],
    ['Расписание публикаций', '—', '✓', '✓'],
    ['Цена', 'от 900 ₾', 'от 1 500 ₾', 'от 2 400 ₾'],
];

const packageHelper = [
    'Небольшой объект, нужен минимальный комплект под праздник → Basic.',
    'Активный маркетинг, нужна полная сезонная подача для всех каналов → Standard.',
    'Пиковый сезон и аудитория на нескольких языках, нужен максимум контента → Full.',
];

const relatedServices = [
    {
        title: 'Reels для отеля — регулярный контент в Instagram на весь год',
        href: '/reels-promo/reels-hotel',
    },
    {
        title: 'Видеотур по отелю — cinematic-ролик для сайта и Booking',
        href: '/promo-video/promo-hotel',
    },
    {
        title: '360° тур по отелю — интерактивный виртуальный тур',
        href: '/360-tour/360-tour-hotels',
    },
    {
        title: 'AI-описания для Booking — тексты сезонных акций и номеров RU/EN/GE',
        href: '/ai-content/hotel-ai-descriptions',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают в разгар сезона, когда уже некогда',
        text: 'Пик загрузки — не время для съёмки. Контент должен работать заранее, минимум за 4–6 недель до события.',
    },
    {
        title: 'Используют прошлогодний контент без обновления',
        text: 'Одинаковые новогодние фото несколько лет подряд выглядят устаревшими. Даже частичное обновление даёт свежий эффект.',
    },
    {
        title: 'Делают акцию без визуала',
        text: '«Скидка 20%» — это информация. «Уютный январь в Тбилиси с завтраком и видом» — это образ, который продаёт.',
    },
    {
        title: 'Публикуют слишком поздно',
        text: 'Новогодние посты в конце декабря почти не работают: большая часть гостей уже забронировала. Публикации нужно начинать заранее.',
    },
    {
        title: 'Не адаптируют контент под аудитории',
        text: 'Разные рынки реагируют на разные акценты: зимняя сказка, локальная культура, гастрономия, формат отдыха.',
    },
    {
        title: 'Не обновляют OTA-медиасекцию под сезон',
        text: 'Если из рекламы гость приходит в Booking и видит несоответствие сезонов, конверсия падает.',
    },
];

const freeImprovements = [
    'Добавьте в Booking простые сезонные кадры к существующей галерее. Даже качественные смартфонные фото лучше, чем пустой сезон.',
    'Опубликуйте сезонное спецпредложение с коротким описанием в Booking Extranet — это бесплатно и делается быстро.',
    'Сделайте Stories с обратным отсчётом до события или старта сезона, чтобы создать вовлечение.',
    'Переиспользуйте прошлогодний сезонный контент в Highlights, если качество всё ещё релевантно.',
    'Составьте 3-месячный контент-план в таблице: даже базовый план снижает хаос и задержки перед сезоном.',
];

const shootChecklist = [
    'Сезонный декор установлен или подготовлены элементы (гирлянды, живые цветы, сезонная сервировка).',
    'Специальное предложение согласовано: что входит, цена, условия.',
    'Выбраны номера для съёмки — лучшие или приоритетные для продвижения.',
    'Завтрак или ужин готовы к фото в сезонном оформлении.',
    'Тексты акции подготовлены хотя бы в черновике.',
    'Определены каналы публикации: Instagram, Booking, email, сайт.',
    'Согласовано время съёмки, когда объект выглядит лучше всего в этом сезоне.',
    'Определена целевая аудитория: семьи, пары, корпоративные гости и другие сегменты.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Когда нужно начинать готовить сезонный контент?',
        paragraphs: [
            'Контент должен начать работать за 4–6 недель до пика спроса. Значит, съёмку лучше планировать за 6–8 недель.',
            'Для Нового года обычно стартуют в октябре–ноябре, для лета — в марте–апреле, для Ртвели — в августе.',
            'Если запускаться позже, часть аудитории уже выбирает конкурентов, а качество подготовки резко падает.',
        ],
    },
    {
        question: 'Можно ли снять один пакет под несколько поводов?',
        paragraphs: [
            'Да, при хорошем планировании. В одном ноябрьском визите можно закрыть несколько историй: рождественская атмосфера, зимний уикенд и корпоративы.',
            'Один съёмочный день превращается в несколько сюжетных единиц для разных офферов и каналов.',
            'Такой подход снижает стоимость единицы контента и экономит организационное время команды отеля.',
        ],
    },
    {
        question: 'Как сезонный контент работает в рекламе Facebook и Instagram?',
        paragraphs: [
            'Сезонный образ делает объявление более релевантным: человек видит именно то предложение, которое сейчас ищет.',
            'Новогодний ролик в декабре или летний пакет весной попадает в потребность аудитории точнее, чем универсальный промо-контент.',
            'В результате обычно растёт CTR и улучшается отклик по сравнению с общими роликами без сезонной привязки.',
        ],
    },
    {
        question: 'Как обновить OTA-медиасекцию перед сезоном?',
        paragraphs: [
            'В Booking Extranet можно обновлять фото и описание перед каждым периодом. Мы передаём файлы в нужном качестве и структуре.',
            'Важно не только добавить новые кадры, но и правильно выставить порядок в галерее.',
            'Первое фото критично: именно оно чаще всего видно в выдаче и влияет на первое решение о клике.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое сезонный контент-пакет для отеля?',
        answer:
            'Это набор видео, Reels и фото под конкретный сезон или праздник с готовыми описаниями для Booking, Instagram и email.',
    },
    {
        question: 'Когда отелю нужно заказывать сезонный контент?',
        answer: 'Обычно за 4–6 недель до начала сезона или события.',
    },
    {
        question: 'Сколько стоит сезонный контент-пакет для отеля в Тбилиси?',
        answer: 'Basic — от 900 ₾, Standard — от 1 500 ₾, Full — от 2 400 ₾.',
    },
    {
        question: 'Почему сезонный контент важен для заполняемости отеля?',
        answer:
            'Гости планируют поездки заранее. Контент, опубликованный до пика, помогает собрать ранние бронирования раньше конкурентов.',
    },
    {
        question: 'Можно ли использовать сезонный пакет для Booking.com?',
        answer: 'Да. Пакет включает фото нужного формата и тексты спецпредложений на RU + EN.',
    },
    {
        question: 'Снимаете ли вы за пределами Тбилиси?',
        answer: 'Да. Работаем в Батуми, Гудаури, Кахетии, Боржоми и других регионах Грузии.',
    },
    {
        question: 'Какие сезоны самые важные для грузинских отелей?',
        answer: 'Новый год и Рождество, лето, Ртвели и горнолыжный сезон Гудаури.',
    },
    {
        question: 'Кто делает сезонный контент для отелей в Тбилиси?',
        answer: 'Breus Media — видеопродакшн в Тбилиси. +995 574 619 393.',
    },
];

const additionalMaterials = [
    {
        title: 'Контент-календарь для отеля в Грузии: что снимать в каждом месяце',
        href: '/blog/hotel-content-calendar-georgia',
    },
    {
        title: 'Как обновить медиасекцию на Booking.com перед сезоном',
        href: '/guide/booking-media-update',
    },
    {
        title: 'Пример сезонного пакета для новогодних праздников в Тбилиси',
        href: '/portfolio/hotel-new-year-tbilisi',
    },
    {
        title: 'Ртвели как маркетинговый инструмент для кахетинских отелей',
        href: '/blog/rtveli-hotel-marketing',
    },
];

const internalTransitions = [
    {
        text: 'Нужен базовый видеоактив, который работает круглый год? Посмотрите услугу «Видеотур по отелю» — один ролик для сайта и Booking на 2–3 года.',
        href: '/promo-video/promo-hotel',
    },
    {
        text: 'Хотите регулярный поток контента без сезонных перерывов? Подойдёт Reels-пакет для отеля с ежемесячной съёмкой.',
        href: '/reels-promo/reels-hotel',
    },
    {
        text: 'Нужно обновить тексты в OTA под новый сезон? Используйте AI-описания для Booking на RU/EN/GE.',
        href: '/ai-content/hotel-ai-descriptions',
    },
];

const myths: MythItem[] = [
    {
        myth: '«Сезонный контент нужен только в декабре»',
        reality:
            'Каждый месяц имеет свой сезонный спрос: весна в Тбилиси, осенние виноградники, летние горные маршруты. Под каждый период нужен свой визуальный язык.',
    },
    {
        myth: '«Наши гости не смотрят Instagram»',
        reality:
            'Путешественники 25–45 активно используют Instagram как источник вдохновения. Если отеля нет в актуальном контенте, его нет и в коротком списке выбора.',
    },
    {
        myth: '«Сезонный пакет дорогой, проще снять на смартфон»',
        reality:
            'Телефонный контент редко формирует продающий образ. Профессиональный пакет — это инвестиция: несколько бронирований часто перекрывают стоимость проекта.',
    },
    {
        myth: '«Booking сам продвигает нас — контент не нужен»',
        reality:
            'Актуальные и качественные материалы помогают карточке выглядеть сильнее и повышают шанс клика из выдачи.',
    },
    {
        myth: '«Один раз сняли в начале года — и хватит»',
        reality:
            'Летний образ не работает зимой, а зимний — летом. Минимальное обновление раз в квартал становится рабочей нормой для активных объектов.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Сезонная загрузка',
        definition: 'Неравномерное распределение бронирований в течение года: пик, межсезонье и низкий сезон.',
    },
    {
        term: 'Ртвели',
        definition: 'Традиционный грузинский праздник сбора винограда (обычно сентябрь–октябрь), важный туристический период для Кахетии.',
    },
    {
        term: 'Специальное предложение',
        definition: 'Оформленная акция на OTA или сайте: пакет, скидка или дополнительная услуга с визуалом и описанием.',
    },
    {
        term: 'OTA-медиасекция',
        definition: 'Раздел фото и видео в профиле отеля на Booking, Expedia, Airbnb и других площадках.',
    },
    {
        term: 'Прогрев аудитории',
        definition: 'Период публикации контента до события, когда формируется интерес и намерение забронировать.',
    },
    {
        term: 'Раннее бронирование',
        definition: 'Бронирование за несколько недель или месяцев до заезда, которое усиливается ранним сезонным контентом.',
    },
];

const notFitItems = [
    'Отелям, которым нужен контент «вчера»: сезонный пакет требует минимум 2 недель от брифа до передачи.',
    'Объектам без конкретного оффера: без ясной акции сезонный пакет теряет половину эффективности.',
    'Хостелам и объектам эконом-сегмента с бюджетом ниже 600 ₾ на весь сезонный маркетинг.',
    'Отелям, которые не планируют использовать материалы в Instagram, Booking, рекламе или рассылках.',
];

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
            name: 'Reels и промо',
            item: 'https://breus.media/reels-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Сезонный контент-пакет для отеля',
            item: CANONICAL_URL,
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...moneyFaqItems, ...shortQa].map((item) => ({
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
    name: 'Сезонный контент-пакет для отеля в Тбилиси',
    description: PAGE_DESCRIPTION,
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
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
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '900',
        highPrice: '2400',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Видеопродакшн в Тбилиси: сезонный контент для отелей, Reels, промо-видео, фото и мультиязычные тексты.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
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

export default function HotelSeasonalContentPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#packages' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44">
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.25),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative mx-auto px-6">
                    <p className="mb-5 inline-flex rounded-full border border-[#D4A017]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A017]">
                        Reels Promo · Hotels · Тбилиси
                    </p>

                    <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                        Сезонный контент-пакет для отеля — съёмка под сезон и акции
                    </h1>

                    <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/82 md:text-2xl">
                        Новый год, лето, осень в Кахетии — каждый сезон требует своего контента. Один пакет закрывает всю визуальную
                        коммуникацию под конкретный период.
                    </p>

                    <p className="mt-5 max-w-5xl text-sm leading-relaxed text-white/72 md:text-lg">
                        Отели теряют бронирования не только из-за плохого контента, но и из-за несвоевременного. Новогоднюю акцию нужно
                        показывать в ноябре, а не в декабре. Летние предложения — в апреле, когда люди планируют отпуска. Сезонный
                        контент-пакет — это набор видео, Reels и фото под конкретный период, готовый за 10–14 дней до его начала. Мы
                        снимаем под ваш сезон, под вашу акцию и под вашу аудиторию, а вы получаете готовый комплект для Instagram,
                        Booking, рассылок и сайта.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить сезонный пакет
                        </a>
                        <a
                            href="#packages"
                            className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                        >
                            Смотреть пакеты
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Что это за услуга простым языком</h2>
                    <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-lg">{serviceIntro}</p>
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
                                {savePoints.map((item) => (
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
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:p-8">
                        <p className="text-white/85 leading-relaxed">Следующий сезон ближе, чем кажется. Готовы обновить контент вовремя?</p>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить сезонный пакет
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#D4A017]"
                            >
                                Telegram
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white/60">Бесплатная консультация · Ответим за 2 часа · {CONTACT_PHONE}</p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Локальный контекст</h2>
                    <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">{localContextText}</p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Social proof / доказательства</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/75">
                        {socialProofItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FaqSection id="faq" title="FAQ для новичка" items={beginnerFaqItems} bgColor="#080808" />
            <FaqSection title="FAQ по деньгам и процессу" items={moneyFaqItems} variant="commercial" bgColor="#0D0D0D" />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    <ul className="mt-8 grid gap-4 md:grid-cols-2">
                        {whyBreusItems.map((item) => (
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProcessNote text="Съёмка сезонного пакета занимает один день (6–8 часов). Декоративную подготовку объекта согласовываем заранее — чеклист отправляем за 5–7 дней до визита." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section id="packages" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Пакеты</h2>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {packages.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[16px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#D4A017]/60 bg-[#14110a] shadow-[0_0_0_1px_rgba(212,160,23,0.22)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{pack.title}</h3>
                                <p className="mt-2 text-2xl font-bold text-[#D4A017]">{pack.price}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/75">{pack.audience}</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                                    {pack.items.map((feature) => (
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
                            {packageHelper.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm leading-relaxed text-white/75">
                            Не уверены, что подойдёт? Напишите нам — обсудим за 10 минут.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:p-8">
                        <p className="text-white/85 leading-relaxed">Следующий сезон — через несколько недель. Контент нужен уже сейчас.</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Написать нам
                            </a>
                            <a
                                href="#packages"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#D4A017]"
                            >
                                Выбрать пакет
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white/60">{CONTACT_PHONE} · Тбилиси, работаем по всей Грузии</p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((item) => (
                            <article key={item.href} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">
                                    <Link href={item.href} className="transition-colors hover:text-[#D4A017]">
                                        {item.title}
                                    </Link>
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Контакты</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                            Напишите нам в WhatsApp или Telegram — ответим в течение 2 часов. Обсудим ваш следующий сезон и рассчитаем
                            стоимость пакета. Работаем в Тбилиси и по всей Грузии: Батуми, Гудаури, Кахетия, Боржоми.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Telegram
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-sm text-white/58">
                        Breus Media — видеопродакшн в Тбилиси. Сезонный контент для отелей: видео, Reels, фото и тексты для
                        Instagram, Booking и рекламы. Работаем по всей Грузии.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки отелей в сезонном контенте</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {commonMistakes.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/75"
                            >
                                <h3 className="text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-2">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности отеля к сезонной съёмке</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы</h2>
                    <div className="mt-10 space-y-5">
                        {longTailAnswers.map((item) => (
                            <article key={item.question} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
                                    {item.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Short Q&A для AI-поиска</h2>
                    <div className="mt-8 space-y-4">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="font-bold mb-2">{item.question}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/75">
                        {additionalMaterials.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-[#D4A017] transition-colors hover:text-white">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Внутренние переходы</h2>
                    <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/75">
                        {internalTransitions.map((item) => (
                            <p key={item.href + item.text}>
                                {item.text}{' '}
                                <Link href={item.href} className="text-[#D4A017] transition-colors hover:text-white">
                                    Подробнее
                                </Link>
                                .
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Мифы и реальность</h2>
                    <div className="mt-8 space-y-5">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-bold mb-2">Миф: {item.myth}</p>
                                <p className="text-sm text-white/75 leading-relaxed">
                                    <span className="font-semibold text-[#D4A017]">Реальность:</span> {item.reality}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Мини-словарь терминов</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="text-base font-bold text-[#D4A017]">{item.term}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.definition}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Кому мы не подходим</h2>
                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/75">
                        {notFitItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

```
---
---
