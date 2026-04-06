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
import { HeroSlideshow } from '@/components/drone-restaurants/HeroSlideshow';

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

type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
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

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
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
        text: 'Ищете контент для сайта и карточки в Google Maps, который покажет место убедительнее.',
    },
    {
        title: 'Маркетолог ресторана',
        text: 'Нужны видео для Instagram и Stories, а также фото и ролики для рекламы.',
    },
    {
        title: 'Владелец rooftop-бара или площадки для мероприятий',
        text: 'Есть эффектное пространство, которое сложно передать обычными фотографиями.',
    },
    {
        title: 'Ресторан со скрытым входом',
        text: 'Хотите помочь гостям визуально понять, как вас найти — где вход, куда идти, что ждёт внутри.',
    },
    {
        title: 'Ресторан перед сезоном или запуском',
        text: 'Нужен готовый набор фото и видео быстро и с понятным результатом.',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«У нас красивое место, но на фотографиях это не видно»',
        text: 'Дрон показывает масштаб, планировку и атмосферу — то, что одна фотография не передаёт.',
    },
    {
        title: '«Instagram не даёт броней — гости смотрят и не приходят»',
        text: 'Видео с движением помогает понять место за первые секунды — где вход, какой зал, есть ли терраса.',
    },
    {
        title: '«Переехали / сделали ремонт / открылись, но нового контента нет»',
        text: 'За один визит мы снимаем основной ролик для сайта, короткие видео для Instagram и обработанные фотографии.',
    },
    {
        title: '«Конкурент рядом выглядит лучше в Google, хотя наше место сильнее»',
        text: 'Добавьте видео в карточку Google Maps — она станет заметнее среди соседних ресторанов.',
    },
    {
        title: '«Есть терраса и вид, но гости узнают об этом только когда приходят»',
        text: 'Дрон показывает то, что невозможно сфотографировать изнутри: вид сверху, террасу, район и подход к входу.',
    },
    {
        title: '«Организуем мероприятия, но нет материала, чтобы показать площадку»',
        text: 'Одно видео заменяет десять фотографий в переписке. Менеджер просто отправляет ссылку.',
    },
];

const deliverablesDefault: string[] = [
    'Разрешение на полёт (GCAA) — оформляем сами',
    'Видеофайлы в 4K',
    'Передача через Google Drive или WeTransfer',
    'Выезд по Тбилиси включён',
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
    'Монтаж основного ролика и коротких видео',
    'Обработанные фотографии',
    'Файлы разложены по папкам: сайт, соцсети, Google Maps',
    'Формат под задачу: горизонтальный, вертикальный или оба',
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
        title: 'Снимаем так, чтобы гость захотел прийти',
        text: 'Мы думаем не о красивом пролёте, а о том, чтобы будущий гость понял: где находится место, какая там атмосфера и что его ждёт внутри.',
    },
    {
        title: 'Показываем место как маршрут гостя',
        text: 'Снимаем так, как гость приходит в первый раз: район и улица → вход → зал → терраса или крыша. Одно видео — и человек понимает всё.',
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
        title: 'Обсуждение задачи',
        text: 'Узнаём, что нужно показать, под какие площадки и в какие сроки.',
    },
    {
        step: 'Шаг 2',
        title: 'Осмотр места',
        text: 'Приезжаем на место, смотрим откуда лучше снимать, проверяем свет и безопасность полёта.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем в согласованное время: снимаем снаружи, нужные дубли, пролёт камерой по залу — если пространство позволяет.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Монтируем основной ролик, нарезаем короткие видео для соцсетей, обрабатываем фотографии.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём папку с готовыми файлами, разложенными по назначению. Один раунд правок включён.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
        subtitle: 'Обычный дрон, сырые файлы',
        items: [
            'Съёмка с воздуха обычным дроном',
            'До 1,5 часов на объекте',
            'Сырые видеофайлы в 4K без монтажа',
            'Разрешение на полёт включено',
            'Передача файлов — от 24 часов',
        ],
        note: 'Подходит, если нужна только съёмка — без обработки и монтажа.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '350 ₾',
        subtitle: 'FPV-дрон, пролёт камерой по залу',
        items: [
            'Съёмка компактным FPV-дроном внутри помещения',
            'До 1 часа на объекте',
            'Несколько заходов — подбираем лучший маршрут',
            'Сырые видеофайлы без монтажа',
            'Разрешение на полёт включено',
            'Передача файлов — от 24 часов',
        ],
        note: 'FPV — это съёмка в движении через пространство. Не каждый интерьер подходит — уточняем до выезда.',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Снаружи с воздуха + пролёт по залу — за один визит',
        items: [
            'Съёмка с воздуха снаружи + пролёт камерой внутри',
            'До 2 часов на объекте',
            'Видеофайлы в 4K без монтажа',
            'Разрешение на полёт включено',
            'Передача файлов — от 24 часов',
        ],
        note: 'Полная съёмка за один выезд — и фасад с воздуха, и пролёт по залу.',
        popular: true,
    },
    {
        title: 'Съёмка с готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Съёмка снаружи и внутри + монтаж + фото — всё под ключ',
        items: [
            'Съёмка с воздуха + пролёт камерой по залу',
            'Продуманный маршрут съёмки',
            'Основной ролик для сайта (30–60 сек)',
            '3+ коротких видео для Reels / Stories / TikTok',
            '15+ обработанных фотографий',
            'Видео для карточки в Google Maps',
            'Все файлы в папке, разложены по назначению',
        ],
        note: 'Для тех, кому нужен готовый контент. Для крупных объектов и расширенных задач — полный пакет от 1 500 ₾, обсудим на брифе.',
    },
];

const addonPricing: string[] = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +100 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
    '10 обработанных фотографий: +60 ₾',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для ресторана',
        href: '/360-tour-services/360-tour-restaurants',
        text: 'Интерактивная прогулка по залу — гость крутит камеру сам. Хорошо дополняет видео с дрона.',
    },
    {
        title: 'Аэросъёмка отелей',
        href: '/drone-hotels-tourism',
        text: 'Если ресторан часть отеля или курортного комплекса, снимаем всё в одном визите.',
    },
    {
        title: 'Reels и короткие видео для ресторанов',
        href: '/reels',
        text: 'Дрон показывает ресторан сверху, а Reels — живую энергию внутри.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Кинематографичный пролёт камерой через пространство — зритель «проходит» через зал своими глазами.',
    },
];

const nicheMistakes: string[] = [
    'Снимать только еду и не показывать пространство.',
    'Публиковать видео, у которого скучное начало — зритель проматывает за первую секунду.',
    'Снимать в пиковые часы с шумом и случайными людьми в кадре.',
    'Использовать один и тот же монтаж для сайта и для Instagram вместо адаптации под формат.',
    'Не обновлять контент при смене сезона, ремонте или новом меню.',
];

const freeImprovements: string[] = [
    'Проверьте, есть ли у вас видео в карточке Google Maps.',
    'Поставьте в первые фото Instagram вход, зал и террасу, а не только блюда.',
    'Добавьте короткий Stories-тизер: улица → вход → зал.',
    'Если вход сложный, выложите видео-ориентир «как нас найти».',
    'Стимулируйте гостей публиковать Reels с тегом вашего заведения.',
];

const shootChecklist: string[] = [
    'Определили, что показываем: фасад / терраса / rooftop / интерьер',
    'Выбрали время с минимальным числом гостей',
    'Подготовили вывеску и входную зону',
    'Проверили, что терраса или летняя зона в рабочем состоянии',
    'Определили, куда пойдут материалы: сайт, Instagram, Google Maps, реклама',
    'Решили, нужна ли съёмка пролётом по залу',
    'Согласовали время с командой заведения',
    'Назначили человека, который встречает съёмочную команду',
    'Подготовили удобный способ передачи файлов (Google Drive / WeTransfer)',
    'Понимаете, какой пакет вам подходит',
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
            'Полёт обычным дроном снаружи — 250 ₾. Пролёт FPV-дроном внутри — 350 ₾. Полная съёмка за один визит — 500 ₾. Это съёмка без монтажа, сырые файлы. Готовый контент под ключ (монтаж, фото, видео для соцсетей) — от 900 ₾. К любому пакету можно добавить монтаж Reels (+100 ₾), ролик для сайта (+150 ₾), 360° панораму (+80 ₾) или обработку фотографий (+60 ₾).',
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
        question: 'Сколько стоит съёмка ресторана дроном в Тбилиси?',
        answer:
            'Полёт обычным дроном снаружи — 250 ₾. Пролёт FPV-дроном внутри — 350 ₾. Полная съёмка за один визит — 500 ₾. Это съёмка без монтажа, сырые файлы. Готовый контент под ключ (монтаж, фото, видео для соцсетей) — от 900 ₾. К любому пакету можно добавить монтаж Reels (+100 ₾), ролик для сайта (+150 ₾), 360° панораму (+80 ₾) или обработку фотографий (+60 ₾).',
    },
    {
        question: 'Нужны ли разрешения для съёмки дроном над рестораном в Тбилиси?',
        answer:
            'Да. В Грузии полёты дронов регулируются Авиационной администрацией Грузии (GCAA). В городских зонах есть ограничения воздушного пространства. Мы берём на себя проверку зоны и все необходимые согласования — вам не нужно ничего оформлять.',
    },
    {
        question: 'Как дрон-съёмка помогает ресторану привлекать гостей?',
        answer:
            'Оно отвечает на вопрос «а что там вообще?» ещё до визита: показывает фасад, вход, террасу и зал в движении. Для ресторанов со скрытыми входами или необычной локацией в Тбилиси это особенно важно — гость понимает, что его ждёт, и решается прийти.',
    },
    {
        question: 'Можно ли снимать дроном внутри ресторана?',
        answer:
            'Если пространство позволяет, мы делаем пролёт компактной камерой по залу. Не каждый интерьер подходит — это зависит от высоты потолков, планировки и безопасности. На осмотре мы оцениваем, возможен ли такой формат.',
    },
    {
        question: 'Что получает ресторан после съёмки?',
        answer:
            'Основной ролик для сайта, короткие видео для Instagram / TikTok / Stories, обработанные фотографии и видео для карточки в Google Maps. Всё в папке, разложенной по назначению. Формат и количество зависят от выбранного пакета.',
    },
    {
        question: 'Сколько времени занимает съёмка и когда будут готовы материалы?',
        answer:
            'Съёмка занимает от 1 до 3 часов в зависимости от задачи. Видеофайлы без монтажа — от 24 часов. Готовый контент с монтажом и обработкой — от 3 до 7 рабочих дней.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Ресторан высокой кухни',
        pain: 'Место выглядит обычно на фото, хотя вживую впечатляет.',
        solution: 'Дрон показывает масштаб зала, детали интерьера и атмосферу — то, что фото не передаёт.',
        deliverables: 'Основной ролик + Reels + фотографии для сайта.',
    },
    {
        title: 'Rooftop-бар или терраса с видом',
        pain: 'Главное преимущество — панорама, но с земли её не снять.',
        solution: 'Дрон снимает вид сверху и показывает террасу в контексте города или природы.',
        deliverables: 'Ролик-обзор + вертикальные видео + аэрофото.',
    },
    {
        title: 'Кафе или бар с необычным входом',
        pain: 'Гости не могут найти вход — теряются, уходят.',
        solution: 'Видео-ориентир: от улицы до двери, понятный маршрут за 15 секунд.',
        deliverables: 'Короткий навигационный ролик + Stories-версия.',
    },
    {
        title: 'Винный бар или ресторан в Кахетии',
        pain: 'Туристы выбирают по картинкам — а виноградников и вида на долину на фото не видно.',
        solution: 'Аэросъёмка территории, виноградников, панорамы — продаём направление, а не только меню.',
        deliverables: 'Кинематографичный ролик + серия для соцсетей.',
    },
    {
        title: 'Ресторан при отеле или курорте',
        pain: 'Нужен контент и для ресторана, и для отеля — но бюджет один.',
        solution: 'Снимаем комплекс целиком за один визит: ресторан + территорию + ключевые зоны отеля.',
        deliverables: 'Пакет материалов для обоих — из одной съёмки.',
    },
    {
        title: 'Площадка для мероприятий (свадьбы, корпоративы)',
        pain: 'Клиенты просят «показать зал» — а фотографии не передают масштаб.',
        solution: 'Видео-обзор всех зон: зал, терраса, вход, парковка. Менеджер отправляет ссылку вместо 20 фото.',
        deliverables: 'Презентационный ролик + фотопакет для переписки.',
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
                text: 'Полёт обычным дроном снаружи — 250 ₾. Пролёт FPV-дроном внутри — 350 ₾. Полная съёмка за один визит — 500 ₾. Это съёмка без монтажа, сырые файлы. Готовый контент под ключ (монтаж, фото, видео для соцсетей) — от 900 ₾. К любому пакету можно добавить монтаж Reels (+100 ₾), ролик для сайта (+150 ₾), 360° панораму (+80 ₾) или обработку фотографий (+60 ₾).',
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
        lowPrice: '250',
        highPrice: '2200',
        offerCount: '4',
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
        'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 250 ₾. Съёмка снаружи, пролёт внутри и готовый контент под ключ для сайта, Reels и Google Maps.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-restaurants',
    },
    openGraph: {
        title: 'Аэросъёмка ресторана в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 250 ₾. Снаружи, внутри и под ключ: материалы для сайта, Reels и Google Maps.',
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
                <HeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Restaurant Drone Filming in Tbilisi, Georgia
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
                                    <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Полёт + видеофайлы. Монтаж — отдельно.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">от 24 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Видео в 4K — чёткая картинка на любом экране</li>
                                    <li>Один визит — весь контент для сайта и соцсетей</li>
                                    <li>Разрешения на полёт включены</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            {/* VIDEO_SLOT — заменить на реальный embed когда появится footage */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Примеры аэросъёмки ресторанов и кафе в Тбилиси — снаружи и внутри.
                        </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                        <div className="relative aspect-video w-full">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
                                alt="Аэросъёмка ресторана в Тбилиси — пример работы Breus Media"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-black/50">
                                    <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70">
                                Видео появится здесь
                            </div>
                        </div>
                    </div>
                </div>
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
                            Дрон-видео не заменяет рекламу, но оно отвечает на главный вопрос нового гостя — «а что
                            там вообще?». Чем быстрее человек это понимает, тем быстрее он решается прийти.
                        </p>
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Гость, который ни разу не был, заранее понимает куда идёт.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Терраса, двор или rooftop перестают быть «тайным преимуществом».
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Сезонный контент готов к публикации без долгих согласований.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Ваша карточка в Google Maps получает видео — гости видят ресторан ещё до того, как позвонят.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78 md:col-span-2">
                                Менеджер по мероприятиям может отправить ссылку вместо набора отдельных фотографий.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── ЧТО ВЫ ПОЛУЧАЕТЕ (MERGED deliverables) ──────────────────────────── */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            После съёмки вы получаете не просто набор файлов, а готовый пакет — разложенный по папкам и адаптированный под каждую площадку.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/58">
                            Если вам нужна не только съёмка с воздуха, а полноценный набор контента для заведения — эту съёмку можно дополнить другими форматами.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Что входит в каждый пакет</h3>
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
                            <h3 className="text-lg font-bold text-white">Дополнительно в пакете «С готовым результатом»</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {optionalAddons.map((item) => (
                                    <li key={item}>+ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
                        <div>
                            <h3 className="text-xl font-bold text-white">Как устроены файлы</h3>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {[
                                    { name: 'Сайт', desc: 'Основной ролик и фотографии для страниц сайта' },
                                    { name: 'Соцсети', desc: 'Вертикальные видео для Reels, Stories, TikTok' },
                                    { name: 'Google Maps', desc: 'Короткий ролик и фото для карточки заведения' },
                                    { name: 'Архив', desc: 'Все исходники — для будущего использования' },
                                ].map((folder) => (
                                    <div key={folder.name} className="rounded-[14px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            {folder.name}
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>Съёмка в 4K</li>
                                <li>Два формата: воздушная съёмка снаружи + пролёт камерой внутри</li>
                                <li>Цветокоррекция и стабилизация включены (в пакете с монтажом)</li>
                                <li>Форматы: MP4, JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                            </ul>
                            <p className="mt-4 text-xs leading-relaxed text-white/45">
                                Оборудование: DJI Air 3S, DJI Avata 2 FPV, Insta360 X5
                            </p>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Сроки: от 24 часов (съёмка без монтажа) до 7 рабочих дней (пакет с готовым результатом).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* VIDEO_SLOT — три формата съёмки */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-3xl">Примеры по форматам</h2>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                label: 'Снаружи с воздуха',
                                img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
                                alt: 'Аэросъёмка ресторана снаружи с воздуха',
                            },
                            {
                                label: 'Пролёт внутри (FPV)',
                                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
                                alt: 'FPV-съёмка внутри ресторана',
                            },
                            {
                                label: 'Готовый ролик',
                                img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
                                alt: 'Готовый видеоролик для ресторана',
                            },
                        ].map((item) => (
                            <div key={item.label} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                <div className="relative aspect-video">
                                    <img src={item.img} alt={item.alt} className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm font-bold text-white">{item.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            <ProcessNote text="Съёмка среднего ресторана — 1,5–3 часа. Подбираем время так, чтобы не мешать гостям и сервису." />

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
                        <p className="mt-4 leading-relaxed text-white/70">Цены фиксированные, в грузинских лари (₾). Без скрытых доплат.</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                            Первые три пакета — это съёмка без монтажа: приезжаем, снимаем, отдаём файлы. Четвёртый —
                            готовый результат под ключ. К любому пакету можно добавить монтаж, фото или 360°.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-4">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                        <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                    </div>
                                    {card.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Выгодно
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.note && <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p>}
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
                        <h3 className="text-xl font-bold text-white">Дополнительно по задаче</h3>
                        <p className="mt-3 leading-relaxed text-white/70">
                            Из одной съёмки можно собрать не только основной материал, но и дополнительные форматы под сайт, соцсети, Google Business Profile и продажи.
                        </p>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm leading-relaxed text-white/45">
                            Из одной съёмки можем собрать материалы под сайт, соцсети, Google Business Profile и презентацию venue.
                        </p>
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типы заведений и сценарии</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Под каждый тип ресторана собираем свой набор кадров с понятной задачей.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Задача:</span> {card.pain}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Решение:</span> {card.solution}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Что получите:</span> {card.deliverables}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

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
                        <p className="mt-4 leading-relaxed text-white/70">
                            Если вам нужна не только съёмка с воздуха, а полноценный набор контента для заведения — эту съёмку можно дополнить другими форматами.
                        </p>
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
