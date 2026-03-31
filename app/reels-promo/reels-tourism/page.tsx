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
                    { label: 'Пакеты', href: '#pricing' },
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
                                    href="#pricing"
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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
