import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { DroneRestaurantsContactForm } from '@/components/drone-restaurants/DroneRestaurantsContactForm';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type RoleCard = {
    title: string;
    text: string;
};

type DeliverablePackage = {
    title: string;
    price: string;
    audience: string;
    items: string[];
    timeline: string;
    exclusions: string;
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type SeoAnswer = {
    question: string;
    answer: string;
};

const audienceCards: RoleCard[] = [
    {
        title: 'Владелец ресторана или кафе',
        text: 'Нужен свежий визуальный материал после открытия, ремонта или смены концепции.',
    },
    {
        title: 'Управляющий заведения',
        text: 'Ищете контент для сайта и Google Business Profile, который покажет место убедительнее.',
    },
    {
        title: 'Маркетолог HoReCa',
        text: 'Нужны вертикальные форматы для Reels и Stories, а также материалы под таргетинг.',
    },
    {
        title: 'Владелец rooftop или venue',
        text: 'Есть эффектное пространство, которое трудно передать обычной съёмкой.',
    },
    {
        title: 'Ресторан со скрытым входом',
        text: 'Хотите помочь гостям визуально понять, как найти заведение.',
    },
    {
        title: 'Ресторан перед сезоном или запуском',
        text: 'Нужен базовый visual kit быстро и с понятным итогом.',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«У нас красивое место, но на фотографиях это не видно»',
        text: 'Дрон показывает масштаб, планировку и атмосферу — то, что один кадр не захватывает.',
    },
    {
        title: '«Instagram не даёт броней — гости смотрят и не приходят»',
        text: 'Видео с движением делает место считываемым за первые секунды.',
    },
    {
        title: '«Переехали / сделали ремонт / открылись, но нового контента нет»',
        text: 'Один визит закрывает hero video, вертикальные нарезки и обработанные кадры.',
    },
    {
        title: '«Хотим показать rooftop или двор, но не хватает ракурса»',
        text: 'Дрон даёт обзор, который недоступен ручной камере.',
    },
    {
        title: '«Конкуренты уже с видео, мы проигрываем в сравнении»',
        text: 'Если у соседей есть видео на Google Maps, а у вас нет, гость чаще уходит к ним.',
    },
    {
        title: '«Не понимаю, что заказать и сколько это стоит»',
        text: 'На странице — пакеты с ценами в ₾ и понятным составом.',
    },
];

const deliverablesDefault: string[] = [
    'Смонтированное hero video (длина зависит от пакета)',
    'Минимум 1 вертикальный cut для Reels / Stories',
    'Набор обработанных стоп-кадров / фотографий',
    'Организованная выдача файлов по назначению (сайт, соцсети, Google)',
    'Форматы под сайт и Instagram (горизонталь + вертикаль)',
];

const shootingZones: string[] = [
    'Фасад и вывеска',
    'Вход и маршрут подхода',
    'Терраса, двор, courtyard',
    'Rooftop-зона',
    'Обзор квартала / городской контекст',
    'FPV-проход по интерьеру (если пространство позволяет)',
];

const optionalAddons: string[] = [
    'Дополнительные вертикальные нарезки',
    'Версия для Google Business Profile',
    'Текстовые оверлеи / CTA end card',
    'Вечерняя / golden hour съёмка',
    'Сопроводительные фото блюд / food close-ups',
    'Двуязычные титры (RU + EN)',
    'Дополнительный тур от 360°-камеры',
];

const roleScenarios: CardItem[] = [
    {
        title: 'Ресторан открылся или обновился',
        text: 'Первый визуальный комплект о новом пространстве: один визит, базовый kit.',
    },
    {
        title: 'Rooftop или терраса перед сезоном',
        text: 'Актуальный контент на апрель–май, когда гости ищут места «с видом».',
    },
    {
        title: 'Venue для мероприятий',
        text: 'Видео зала и outdoor-зон для переписки с организаторами частных событий.',
    },
    {
        title: 'Нестандартная локация',
        text: 'Скрытый двор, верхний этаж, сложный вход — дрон объясняет путь визуально.',
    },
    {
        title: 'Обновление Google Business Profile',
        text: 'Видео в карточке повышает видимость и выделяет заведение среди соседей.',
    },
    {
        title: 'Контент для рекламы и таргетинга',
        text: 'Вертикальные clips с сильным первым кадром — база для Instagram и TikTok.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Съёмка под hospitality-задачу',
        text: 'Фокус не на полёте, а на том, чтобы гость понял атмосферу и маршрут.',
    },
    {
        title: 'Связка exterior, location и interior',
        text: 'Собираем визуальный путь: квартал → вход → зал → terrace / rooftop.',
    },
    {
        title: 'Материалы под площадки',
        text: 'Выдаём набор сразу под сайт, Reels, Google Business Profile и рекламу.',
    },
    {
        title: 'Небольшая команда и быстрый контакт',
        text: 'Без лишних слоёв коммуникации: договорённости и правки проходят быстрее.',
    },
    {
        title: 'Локальный опыт Тбилиси',
        text: 'Понимаем дворы, скрытые входы, rooftop-концепции и узкие улицы старого города.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы рассказываете о заведении, целях и зонах съёмки. Мы предлагаем формат под задачу.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка и анализ',
        text: 'Изучаем локацию, проверяем полётную зону и согласовываем окно съёмки.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем в согласованное время: экстерьер, нужные дубли, FPV-элементы, если уместно.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и цвет',
        text: 'Собираем hero video, вертикальные clips и обрабатываем кадры под целевые платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Выдача',
        text: 'Передаём структурированную папку с готовыми файлами и одним раундом правок при необходимости.',
    },
];

const pricingCards: DeliverablePackage[] = [
    {
        title: 'STARTER VENUE SHOOT',
        price: '450–650 ₾',
        audience: 'Небольшой ресторан, кафе, бар, новая точка или сезонное обновление',
        items: [
            '1 съёмочный визит до 1,5 часов',
            'Exterior drone shots: фасад, вход, терраса, двор',
            '1 highlight video 15–30 сек',
            '1 вертикальный cut для Reels / Stories',
            '8–12 обработанных фото / стоп-кадров',
            'Выдача файлов по папкам (сайт, соцсети)',
        ],
        timeline: '3–5 рабочих дней',
        exclusions: 'FPV с несколькими дублями, ночная съёмка, продакшн с моделью / food styling',
    },
    {
        title: 'SIGNATURE RESTAURANT STORY',
        price: '850–1 250 ₾',
        audience: 'Ресторан, rooftop, wine bar, гастро-проект, venue с атмосферой',
        items: [
            '1 съёмочный визит до 3 часов',
            'Exterior + interior capture (если пространство позволяет)',
            'Planned drone route + базовый FPV walkthrough',
            '1 hero video 30–60 сек',
            '3 вертикальных social cut',
            '15–25 обработанных стоп-кадров',
            'Cover / thumbnail selection + версия для Google Business Profile',
        ],
        timeline: '4–7 рабочих дней',
        exclusions: 'Полный день продакшна, кастинг, сложная аудиопродукция, несколько съёмочных дней',
        popular: true,
    },
    {
        title: 'PREMIUM HOSPITALITY CONTENT PACK',
        price: '1 450–2 200 ₾',
        audience: 'Флагманский ресторан, hotel restaurant, event-driven venue, multi-zone concept',
        items: [
            'Расширенный бриф: созвон + согласование полётного маршрута до съёмки',
            'Съёмка до 4–5 часов',
            'Exterior + interior + advanced route planning',
            'FPV walkthrough (где уместно)',
            '1 hero film 45–90 сек',
            '5–7 вертикальных cuts',
            '20–35 обработанных stills + website hero-friendly assets',
            'Google Business Profile clip + акцент на event-зоны',
        ],
        timeline: '5–8 рабочих дней',
        exclusions: 'Реклама под ключ, актёры / модели / стайлинг, тяжёлые VFX, мультидневный продакшн',
    },
];

const addonPricing: string[] = [
    'Дополнительный вертикальный cut: 80–120 ₾',
    'Вечерняя / golden hour съёмка: 100–180 ₾',
    'Food close-up companion footage: 120–250 ₾',
    'Двуязычные титры (RU + EN): 80–150 ₾',
    'Дополнительный тур от 360°-камеры: по запросу',
    'Сезонный refresh-пакет: по договорённости',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для ресторана',
        href: '/360-tour-services/360-tour-restaurants',
        text: 'Интерактивный walkthrough по залу как дополнение к aerial-контенту.',
    },
    {
        title: 'Аэросъёмка отелей и hospitality',
        href: '/drone-hotels-tourism',
        text: 'Если ресторан часть отеля или resort-объекта, снимаем комплекс в одном визите.',
    },
    {
        title: 'Reels и промо-видео для ресторанов',
        href: '/reels',
        text: 'Дрон показывает панораму, reels добавляет темп внутри заведения.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Кинематографичный проход через пространство с эффектом присутствия.',
    },
];

const nicheMistakes: string[] = [
    'Снимать только еду и не показывать пространство.',
    'Публиковать видео без сильного первого кадра-крюка.',
    'Снимать в пиковые часы с шумом и случайными людьми в кадре.',
    'Использовать один монтаж для всех форматов вместо адаптации.',
    'Не обновлять контент сезонно.',
];

const freeImprovements: string[] = [
    'Проверьте, есть ли у вас видео в Google Business Profile.',
    'Поставьте в первые фото Instagram и карточки вход, зал и террасу, а не только блюда.',
    'Добавьте короткий stories-тизер маршрута: улица → вход → зал.',
    'Если вход сложный, выложите видео-ориентир «как нас найти».',
    'Стимулируйте гостей публиковать Reels с тегом заведения.',
];

const shootChecklist: string[] = [
    'Определили, что показываем: фасад / терраса / rooftop / интерьер',
    'Выбрали окно с минимальным трафиком гостей',
    'Подготовили вывеску и входную зону',
    'Проверили, что терраса / летняя зона в рабочем состоянии',
    'Согласовали каналы использования: сайт / Instagram / Google / реклама',
    'Решили, нужен ли FPV внутри',
    'Согласовали время с командой заведения',
    'Назначили человека, который встречает съёмочную команду',
    'Подготовили удобный способ передачи файлов (Drive / WeTransfer)',
    'Понимаете, в какой пакет укладывается задача',
];

const faqItems: FaqItem[] = [
    {
        question: 'Что именно даёт дрон-съёмка ресторану?',
        answer:
            'Она показывает атмосферу, вход, планировку, террасу, rooftop и окружение заведения — то, что обычные фотографии часто объясняют хуже. Гость заранее понимает, куда он идёт.',
    },
    {
        question: 'Это только для больших или дорогих ресторанов?',
        answer:
            'Нет. Небольшое кафе с хорошей атмосферой или интересным двором может выглядеть убедительно в видео так же, как крупное заведение.',
    },
    {
        question: 'Чем дрон-съёмка отличается от обычного видео на камеру?',
        answer:
            'Дрон снимает с точек, недоступных для ручной камеры: сверху, в движении, с плавным облётом здания. FPV добавляет ощущение живого прохода через пространство.',
    },
    {
        question: 'Можно ли снимать внутри ресторана?',
        answer:
            'В ряде случаев — да. Для интерьеров используем FPV-камеру DJI Avata 2. Не каждое пространство подходит для полноценного fly-through, но формат обсуждаем заранее.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer:
            'Обычно нет. Подбираем окно, которое минимально мешает работе: до открытия, в тихие часы или в согласованный слот.',
    },
    {
        question: 'Для чего использовать этот материал, кроме Instagram?',
        answer:
            'Для сайта, Google Business Profile, рекламных объявлений, переписки с клиентами и организаторами мероприятий, а также презентаций venue.',
    },
    {
        question: 'Сколько стоит аэросъёмка ресторана в Тбилиси?',
        answer:
            'Стартовый пакет — от 450 ₾. Полная съёмка с несколькими deliverables и FPV-элементами — от 850 ₾. Премиум hospitality pack — от 1 450 ₾ до 2 200 ₾.',
    },
    {
        question: 'Что входит в финальную выдачу файлов?',
        answer:
            'Hero video, минимум один вертикальный cut, обработанные стоп-кадры и структурированные папки под сайт, Reels и Google.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка ресторана занимает 1–3 часа на месте, монтаж и выдача — 3–7 рабочих дней.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Работаем в соответствии с правилами Грузинского агентства гражданской авиации (GCAA). Анализ зоны и разрешительная подготовка — на нас.',
    },
    {
        question: 'Что делать, если в день съёмки плохая погода?',
        answer:
            'Следим за прогнозом заранее. При сильном ветре или осадках переносим съёмку на ближайший подходящий день без доплат.',
    },
    {
        question: 'Можно ли заказать только фото или только видео?',
        answer:
            'Да. Базовый состав можно адаптировать под вашу задачу и площадки публикации.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Снимаем в Батуми, Кутаиси и других локациях Грузии по договорённости с учётом выезда.',
    },
];

const seoAnswers: SeoAnswer[] = [
    {
        question: 'Сколько стоит аэросъёмка ресторана в Тбилиси в 2025–2026 году?',
        answer:
            'Стоимость обычно в диапазоне 450–2 200 ₾. Стартовый пакет с коротким clip и фото — 450–650 ₾. Пакет с несколькими deliverables и FPV-элементами — 850–1 250 ₾. Расширенный hospitality pack — 1 450–2 200 ₾. Дополнительные опции считаются отдельно.',
    },
    {
        question: 'Нужны ли разрешения для съёмки дроном над рестораном в Тбилиси?',
        answer:
            'Да. В Грузии полёты БПЛА регулируются GCAA. В городских зонах важно соблюдать ограничения воздушного пространства, особенно рядом с аэропортами и охраняемыми объектами. Мы берём на себя анализ зоны и необходимую подготовку.',
    },
    {
        question: 'Как дрон-съёмка помогает ресторану привлекать гостей?',
        answer:
            'Она отвечает на вопрос «как там вообще?» ещё до визита: показывает фасад, вход, террасу, rooftop и маршрут внутри. Для скрытых локаций Тбилиси это особенно важно, потому что снижает неопределённость у нового гостя.',
    },
    {
        question: 'Можно ли снимать FPV-дроном внутри ресторана?',
        answer:
            'В ряде случаев — да. DJI Avata 2 может работать в закрытых помещениях при заранее согласованном маршруте и достаточном пространстве. Не каждый интерьер подходит для полного fly-through, но аккуратный проход часто реализуем.',
    },
    {
        question: 'Какое оборудование используется для съёмки ресторанов?',
        answer:
            'Для внешней аэросъёмки используем DJI Air 3S (4K, стабилизация, широкий динамический диапазон), для FPV-элементов внутри — DJI Avata 2. Все материалы проходят цветокоррекцию перед выдачей.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Сколько стоит аэросъёмка ресторана в Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Стартовый пакет — от 450 ₾ (до 1,5 часов съёмки, один clip и фотографии). Средний пакет с несколькими deliverables — от 850 ₾. Расширенный hospitality pack — от 1 450 до 2 200 ₾.',
            },
        },
        {
            '@type': 'Question',
            name: 'Нужны ли разрешения для съёмки дроном над рестораном в Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Breus Media работает в соответствии с правилами Агентства гражданской авиации Грузии (GCAA). Разрешительную подготовку берём на себя — клиенту ничего дополнительно оформлять не нужно.',
            },
        },
        {
            '@type': 'Question',
            name: 'Можно ли снимать внутри ресторана?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'В ряде случаев — да. Для интерьеров используется FPV-дрон DJI Avata 2, способный работать в закрытых помещениях. Маршрут согласовывается заранее.',
            },
        },
        {
            '@type': 'Question',
            name: 'Нужно ли закрывать ресторан во время съёмки?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Обычно нет. Мы подбираем окно съёмки до открытия или в тихие часы, чтобы минимально мешать работе заведения.',
            },
        },
        {
            '@type': 'Question',
            name: 'Сколько времени занимает съёмка и монтаж?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Съёмка на месте занимает 1–3 часа. Монтаж и выдача готовых материалов — 3–7 рабочих дней в зависимости от пакета.',
            },
        },
        {
            '@type': 'Question',
            name: 'Что если в день съёмки будет плохая погода?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Мы следим за прогнозом заранее. При неподходящих условиях переносим съёмку на ближайший подходящий день без доплат.',
            },
        },
        {
            '@type': 'Question',
            name: 'Работаете ли вы в других городах Грузии помимо Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Снимаем в Батуми, Кутаиси и других локациях по договорённости, с учётом выезда.',
            },
        },
        {
            '@type': 'Question',
            name: 'Что именно получаю после съёмки?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hero video, вертикальные cuts для Reels и Stories, обработанные фотографии, организованную папку файлов по назначению (сайт, Instagram, Google Business Profile). Всё готово к публикации.',
            },
        },
        {
            '@type': 'Question',
            name: 'Можно ли заказать только фото или только видео?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Стандартный пакет включает оба формата, но состав можно обсудить под конкретную задачу.',
            },
        },
        {
            '@type': 'Question',
            name: 'Как дрон помогает ресторану привлекать гостей?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Видео с дрона отвечает на вопрос гостя «как там вообще?» — до визита. Это ускоряет принятие решения, особенно для ресторанов со скрытым расположением, rooftop-зонами или необычными дворами.',
            },
        },
        {
            '@type': 'Question',
            name: 'Какое оборудование используется?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'DJI Air 3S для внешней аэросъёмки (4K) и DJI Avata 2 для FPV-элементов в интерьере. Все материалы проходят цветокоррекцию перед выдачей.',
            },
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка ресторанов и HoReCa в Тбилиси',
    description:
        'Дрон-съёмка и FPV-видео для ресторанов, кафе, баров и hospitality-объектов в Тбилиси. Показываем фасад, вход, террасу, rooftop и интерьер. Готовые материалы под сайт, Instagram, Google Business Profile и рекламу.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси, Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '450',
        highPrice: '2200',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-services/drone-restaurants',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры, Reels и AI-визуализация для бизнеса.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

export const metadata: Metadata = {
    title: 'Аэросъёмка ресторана в Тбилиси — дрон + FPV | Breus Media',
    description:
        'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 450 ₾. Покажите атмосферу, вход, террасу и зал так, чтобы гость захотел прийти. Результат за 3–7 дней.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-restaurants',
    },
    openGraph: {
        title: 'Аэросъёмка ресторана в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 450 ₾. Покажите атмосферу, вход, террасу и зал так, чтобы гость захотел прийти.',
        url: 'https://breus.media/drone-services/drone-restaurants',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
        images: [
            {
                url: 'https://breus.media/og/drone-restaurants.jpg',
                width: 1200,
                height: 630,
                alt: 'Аэросъёмка ресторана в Тбилиси — Breus Media',
            },
        ],
    },
};

export default function DroneRestaurantsPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Процесс', href: '#process' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <section
                id="drone-restaurants-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for HoReCa
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка ресторана в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон и FPV — чтобы гость увидел вашу атмосферу раньше, чем переступит порог.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Тбилисские рестораны всё чаще конкурируют визуальным образом: дворами, rooftop-зонами,
                                видами и маршрутом внутри. Когда это сложно передать словами и одной фотографией, дрон и
                                FPV-камера показывают всё за несколько секунд видео. Мы снимаем экстерьер, подачу места
                                и атмосферу так, как гость воспринимает это в реальности.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Готовые материалы подходят для сайта, Instagram, Google Business Profile и переписки с
                                клиентами.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить проект
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть цены
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для ресторанов и кафе.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Форматы под сайт, Reels и Google</li>
                                    <li>Тбилиси и другие города Грузии</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            {/* ── С КАКИМИ ПРОБЛЕМАМИ ПРИХОДЯТ ─────────────────────────────────────── */}
            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">С какими проблемами приходят к нам</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ЧТО СНИМАЕМ И ЧТО ЭТО РЕШАЕТ (MERGED) ──────────────────────────── */}
            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что снимаем — и какую задачу это решает</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка ресторана — это не просто кадр сверху. Мы показываем место в том порядке, в
                            котором его видит гость: квартал → улица → фасад → вход → интерьер → атмосфера.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон фиксирует внешний контекст: как выглядит заведение с высоты, какая у него терраса,
                            двор или rooftop, как оно вписано в городскую среду. FPV-камера добавляет движение внутри:
                            проход через зал, связь зон, глубину интерьера.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            В итоге гость, который ни разу не был, заранее понимает, куда идёт. Терраса, двор или
                            rooftop перестают быть «тайным преимуществом». Google Business Profile получает видео,
                            которое усиливает карточку. Менеджер по мероприятиям может отправить ссылку вместо папки
                            с фотографиями.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ (MERGED deliverables) ──────────────────────────── */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            После съёмки — не raw-папка, а организованный пакет файлов, готовых к публикации.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">По умолчанию в любом пакете</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDefault.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Зоны съёмки</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootingZones.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Опциональные добавки</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {optionalAddons.map((item) => (
                                    <li key={item}>+ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Структура выдачи</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>`/website/` — hero video и кадры для секций сайта</li>
                                <li>`/instagram-reels/` — вертикальные clips с динамичным стартом</li>
                                <li>`/google-business/` — короткий clip и exterior stills</li>
                                <li>`/archive/` — обработанные материалы для дальнейшего цикла</li>
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>Съёмка в 4K (DJI Air 3S)</li>
                                <li>Цветокоррекция и стабилизация включены</li>
                                <li>Форматы: MP4 (H.264/H.265), JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                            </ul>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Сроки: 3–7 рабочих дней после съёмки (зависит от пакета).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── МИД-КТА ──────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой формат подходит именно вашему заведению? Расскажите про место — скажем,
                            что имеет смысл снимать.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить проект
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Посмотреть цены
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── КАК ПРОХОДИТ РАБОТА ──────────────────────────────────────────────── */}
            <ProcessNote text="Съёмка ресторана занимает 1–3 часа — обычно до открытия или в тихие часы" />

            <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ПАКЕТЫ И ЦЕНЫ ────────────────────────────────────────────────────── */}
            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены в грузинских лари (₾), без скрытых доплат.</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                            Диапазон итоговой цены зависит от трёх факторов: локация (Тбилиси или выезд в другой город),
                            количество зон съёмки и объём монтажа (число cuts и версий).
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-sm text-white/78">
                                    <span className="font-semibold text-white">Срок выдачи:</span> {card.timeline}
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-white/58">
                                    <span className="font-semibold text-white/75">Не входит:</span> {card.exclusions}
                                </p>
                                <a
                                    href="#contact"
                                    className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                >
                                    Обсудить этот пакет →
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Опциональные добавки</p>
                        <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── POST-PRICING CTA ─────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой пакет подойдёт? Напишите о заведении — скажем, что имеет смысл снимать
                            и что войдёт в бюджет.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать о задаче
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <FaqSection id="faq" items={faqItems} title="Частые вопросы" />

            {/* ── КАК МЫ ПОДХОДИМ К СЪЁМКЕ ─────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как мы подходим к съёмке</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
                НИЖНИЙ ИНФОРМАЦИОННЫЙ СЛОЙ
            ════════════════════════════════════════════════════════════════════════ */}

            {/* ── КОМУ ЭТО НУЖНО ───────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому это нужно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ПОЧЕМУ В ТБИЛИСИ ЭТО ОСОБЕННО ВАЖНО ─────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему в Тбилиси это особенно важно</h2>
                        <p className="mt-5 leading-relaxed text-white/74">
                            В Тбилиси многие рестораны спрятаны: во дворах, на этажах, в переулках старого города, за
                            неприметными дверями. Это атмосферно, но гостю бывает сложно понять, куда идти и что его
                            ждёт.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/74">
                            Дрон закрывает этот пробел: показывает квартал, вход и пространство сверху, делая заведение
                            понятным для нового человека.
                        </p>
                        <ul className="mt-6 space-y-2 text-sm leading-relaxed text-white/82">
                            <li>• Вид на Мтацминда, Нарикалу или реку — панорама считывается сразу.</li>
                            <li>• Внутренние дворы и балконы старых кварталов становятся видимыми для гостя.</li>
                            <li>• Rooftop-концепции в центре и на Авлабари показывают масштаб локации.</li>
                            <li>• Летние террасы на берегу Куры легче продвигать до начала сезона.</li>
                            <li>• Ресторан в подвале или на верхнем этаже получает ясный визуальный маршрут.</li>
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-white/74">
                            Работаем в Тбилиси, Батуми и других локациях Грузии по согласованию.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ТИПИЧНЫЕ ОШИБКИ ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типичные ошибки в визуальном продвижении ресторана</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {nicheMistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ЧТО СДЕЛАТЬ ПРЯМО СЕЙЧАС — БЕСПЛАТНО ────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что сделать прямо сейчас — бесплатно</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeImprovements.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── ЧЕКЛИСТ ПЕРЕД СЪЁМКОЙ ────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист перед съёмкой</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── ПОДРОБНЫЕ ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ ──────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на частые вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {seoAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── СМЕЖНЫЕ УСЛУГИ ───────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если вы дочитали до этого места, значит вопрос с визуальным контентом для ресторана
                            актуален. Следующий шаг — расскажите о заведении, и мы предложим конкретный формат.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            {/* ── КОНТАКТ ──────────────────────────────────────────────────────────── */}
            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Расскажите о заведении — скажем, какой формат подойдёт и в какой бюджет это
                                    укладывается.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Написать напрямую</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp
                                        </a>
                                        <a
                                            href="https://t.me/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            Telegram
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            @breusmedia
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <DroneRestaurantsContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
