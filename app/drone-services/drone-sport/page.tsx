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
import { SportContactForm } from './SportContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type MistakeItem = {
    title: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type ExampleItem = {
    tag: string;
    title: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-sport';
const PAGE_TITLE = 'Аэросъёмка спорткомплекса в Тбилиси — дрон и FPV-видео | Breus Media';
const PAGE_DESCRIPTION =
    'Дрон и FPV-видео для фитнес-клубов, теннисных кортов и спортивных комплексов в Тбилиси. Съёмочный день от 490 ₾. Готовый ролик за 5–7 дней. Breus Media.';

const serviceTypes: CardItem[] = [
    {
        title: 'Аэросъёмка экстерьера',
        text: 'Облёт объекта с высоты: территория, парковка, фасад, окружение и вид на район. Подходит для сайта, объявлений и базового контент-пакета.',
    },
    {
        title: 'FPV-пролёт по залам',
        text: 'Динамичный непрерывный полёт внутри помещения: между тренажёрами, над бассейном, через корт. Создаёт ощущение движения и масштаба.',
    },
    {
        title: 'Промо-ролик объекта',
        text: 'Смонтированный ролик 60–90 секунд с музыкой и цветокоррекцией. Сочетает аэрокадры, внутренние пролёты и финал с логотипом.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Фитнес-клубы и тренажёрные залы',
        text: 'Для привлечения новых участников, запуска рекламы и обновления страниц в соцсетях. Особенно ценно при открытии нового клуба или после ремонта.',
    },
    {
        title: 'Теннисные корты и академии',
        text: 'Показать качество покрытия, освещение, количество кортов и инфраструктуру. Тбилисский рынок тенниса растёт, и клиенты сравнивают варианты онлайн.',
    },
    {
        title: 'Бассейны и велнес-центры',
        text: 'Передать чистоту воды, простор, атмосферу лаунж-зоны и уровень сервиса. Особенно эффективны съёмки открытых бассейнов с высоты.',
    },
    {
        title: 'Спортивные комплексы с несколькими зонами',
        text: 'Один ролик охватывает все зоны: зал, корты, бассейн, ресепшн. Клиент видит объём, а не отдельные комнаты.',
    },
    {
        title: 'Организаторы турниров и соревнований',
        text: 'Съёмка событий с воздуха: масштаб, участники, трибуны, ход игры. Готовый контент для спонсоров, партнёров и итогового репортажа.',
    },
    {
        title: 'Застройщики и инвесторы спортивной инфраструктуры',
        text: 'Аэросъёмка для презентации объекта на этапе строительства или сдачи: инвесторам, партнёрам и арендаторам.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фотографии «из угла зала» делают всё тесным',
        text: 'Даже большой современный зал на статичном фото выглядит маленьким и неопрятным. Потенциальный клиент уходит к конкуренту с более сильным визуалом.',
    },
    {
        title: 'Нет атмосферы — нет эмоции',
        text: 'Люди выбирают клуб не только по оборудованию, но и по ощущению. Если видео не передаёт энергию, человек не чувствует, хочет ли он здесь заниматься.',
    },
    {
        title: 'Одни и те же фото годами',
        text: 'Сайт обновили, ремонт сделали, новый зал открыли, а в соцсетях всё ещё фото с 2022 года. Это снижает доверие нового клиента.',
    },
    {
        title: 'Нечем отличиться в рекламе',
        text: 'Таргет фитнес-клубов в Тбилиси работает хуже со стандартным визуалом. Ролик с дрона останавливает скроллинг и удерживает внимание.',
    },
    {
        title: 'Сложно показать масштаб',
        text: 'Если у вас 5 кортов, 25-метровый бассейн и 800 кв.м тренажёрного зала, обычная камера не передаёт это в одном кадре. Дрон передаёт.',
    },
    {
        title: 'Контент делается редко и дорого',
        text: 'Когда визуал появляется раз в год, клуб не может регулярно обновлять страницы и запускать рекламные форматы.',
    },
];

const earnList: string[] = [
    'Видео увеличивает время просмотра страницы и профиля в соцсетях: потенциальный клиент дольше изучает объект и чаще оставляет заявку.',
    'Промо-ролик с FPV работает как постоянный менеджер по продажам: его смотрят и без участия вашего персонала.',
    'Аэрокадры поднимают воспринимаемый класс объекта в Instagram, Google и рекламе, что помогает обосновывать более высокий ценник.',
    'Один съёмочный день закрывает контент на 3–6 месяцев: ролик на сайт, серия Reels, фото для Google Business и вертикали для рекламы.',
];

const saveList: string[] = [
    'Вы не теряете клиентов из-за слабого онлайн-присутствия, когда конкурент визуально выглядит сильнее.',
    'Не сливаете бюджет на рекламу с плохим визуалом: качественное видео снижает стоимость привлечения клиента.',
    'Не тратите время на базовые объяснения: клиент после просмотра ролика приходит уже «прогретым».',
    'Не упускаете момент запуска или обновления: первые недели после открытия или ремонта можно использовать максимально.',
];

const shootDayItems: string[] = [
    'Брифинг и согласование маршрута съёмки до выезда',
    'Аэросъёмка экстерьера и территории (DJI Air 3S)',
    'FPV-пролёт внутри помещений, если включён в пакет (DJI Avata 2)',
    'Стабилизаторная или наземная досъёмка деталей (по необходимости)',
    'Резервные дубли ключевых кадров',
    'Проверка материала на месте — вы видите результат ещё на съёмке',
];

const finalResultItems: string[] = [
    'Смонтированный промо-ролик 60–90 секунд (для сайта и YouTube)',
    '2–3 вертикальные короткие версии 15–30 секунд (для Reels и Stories)',
    '10–15 аэрофото в формате 4K JPEG/WebP (для сайта, Google Business и соцсетей)',
    'Цветокоррекция и саунд-дизайн в финальных версиях',
    'Передача файлов через защищённую ссылку (Google Drive / WeTransfer)',
    'Исходники — по договорённости (включены в пакет Premier)',
];

const useCases: CardItem[] = [
    {
        title: 'Открытие нового клуба или зала',
        text: 'Видео запускается до открытия, создаёт ожидание и помогает заполнить запись в первые недели.',
    },
    {
        title: 'Обновление контента после ремонта',
        text: 'Сделали ремонт или расширили зону — новый ролик сразу показывает изменения без лишних объяснений.',
    },
    {
        title: 'Запуск таргетированной рекламы',
        text: 'Видео с дрона в Instagram/Facebook-кампаниях обычно даёт ниже стоимость просмотра и выше CTR, чем статичные фото.',
    },
    {
        title: 'Презентация инвесторам или арендаторам',
        text: 'Если вы ищете партнёров или привлекаете инвестиции, аэровидео становится стандартом деловой презентации.',
    },
    {
        title: 'Съёмка турнира или корпоративного события',
        text: 'Один съёмочный день закрывает контент для итогового отчёта, публикаций и архива.',
    },
    {
        title: 'Контент для Google Business и 2GIS',
        text: 'Видео и аэрофото в карточке объекта повышают количество кликов и доверие в локальном поиске.',
    },
];

const examples: ExampleItem[] = [
    {
        tag: 'Фитнес-клуб',
        title: 'Fullview — обзорный ролик зала',
        text: 'Комбинированный ролик: аэросъёмка здания в районе Сабуртало, FPV-пролёт через кардио-зону и зону свободных весов, финальный кадр с логотипом. Длительность 75 секунд. Смонтирован в горизонтальной и вертикальной версиях.',
    },
    {
        tag: 'Теннисный корт',
        title: 'Court Aerial — аэрообзор кортов',
        text: 'Серия из 4 аэрокадров комплекса с 6 кортами в районе Ваке: общий план с высоты, облёт по периметру, крупный план покрытия и освещения. Используется в Google Business Profile и как Hero-медиа на сайте академии.',
    },
    {
        tag: 'Бассейн и велнес',
        title: 'Drift — FPV-тур по велнес-зоне',
        text: 'FPV-пролёт: вход с улицы → ресепшн → бассейн 25 м → лаунж-зона → выход через панорамное окно. Непрерывный кадр без склеек. Публикуется как отдельный Reel.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '12x',
        label: 'Больше репостов',
        text: 'Видеоконтент генерирует больше репостов в соцсетях по сравнению со статичными фото (по данным HubSpot).',
    },
    {
        value: '40–60%',
        label: 'Рост времени просмотра',
        text: 'Если на странице объекта есть видео с дрона, среднее время просмотра обычно выше, а вероятность заявки растёт.',
    },
    {
        value: 'Большинство',
        label: 'Клубов в Тбилиси',
        text: 'До сих пор используют фото со смартфона или вообще не работают с видеоконтентом. Один ролик уже выделяет вас.',
    },
    {
        value: 'Air 3S + Avata 2',
        label: 'Оборудование Breus',
        text: 'Air 3S для аэросъёмки экстерьера, Avata 2 с защитными пропеллерами для безопасных FPV-пролётов внутри зон.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое FPV-съёмка и зачем она спортивному клубу?',
        answer:
            'FPV (First Person View) — это съёмка с дрона, который летает на высокой скорости и в узких пространствах. Для спортивного объекта это лучший способ показать залы, корты и бассейн изнутри в движении и передать ощущение масштаба.',
    },
    {
        question: 'Можно ли летать дроном внутри спортзала? Это безопасно?',
        answer:
            'Да. Для помещений мы используем DJI Avata 2 с защитными кожухами вокруг пропеллеров. Перед съёмкой согласуем маршрут, временно ограничиваем движение в секторе и фиксируем план выезда с администрацией.',
    },
    {
        question: 'Нужно ли закрывать клуб на время съёмки?',
        answer:
            'Необязательно. Наружную аэросъёмку проводим без ограничений для посетителей. Для FPV внутри обычно согласуется 1–2 часа в конкретной зоне утром или после закрытия.',
    },
    {
        question: 'Как погода влияет на съёмку в Тбилиси?',
        answer:
            'Для наружной аэросъёмки нужен ветер до 10–12 м/с и отсутствие осадков. Если погода неподходящая, мы переносим съёмку без доплаты. Внутренние FPV-сессии от погоды не зависят.',
    },
    {
        question: 'Что происходит со светом в тёмных залах?',
        answer:
            'DJI Air 3S имеет хорошую светочувствительность. Для тёмных зон мы планируем время съёмки на максимум естественного или доступного рабочего освещения. Дополнительный свет обычно не завозим.',
    },
    {
        question: 'Сколько занимает процесс от заявки до готового ролика?',
        answer:
            'Обычно 7–10 дней: 1–2 дня на бриф и согласование, 1 съёмочный день, 4–6 дней на монтаж и цветокоррекцию. Пакет Express — 5 рабочих дней от съёмки до финала.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка спортивного комплекса в Тбилиси?',
        answer:
            'Starter от 490 ₾, Standard от 890 ₾, Premier от 1 490 ₾. Итог зависит от площади объекта, количества зон и нужных форматов, поэтому финальную цену уточняем на брифе.',
    },
    {
        question: 'Что нужно для разрешения на полёты в Тбилиси?',
        answer:
            'Коммерческие полёты регулирует GCAA (Civil Aviation Agency of Georgia). Мы заранее проверяем статус зоны и, если объект в ограниченной зоне, оформляем всё до съёмочного дня.',
    },
    {
        question: 'В каких форматах передаются файлы?',
        answer:
            'Видео: MP4 (H.264/H.265), 4K или Full HD. Фото: JPEG и WebP в 4K. Передача через Google Drive или WeTransfer в течение 24 часов после финального согласования.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да, работаем по всей Грузии: Батуми, Кутаиси, Сигнахи, Боржоми и горные курорты. Выезд рассчитывается отдельно.',
    },
    {
        question: 'Можно ли снимать мероприятие: турнир или открытие клуба?',
        answer:
            'Да, это отдельный сценарий Event Coverage: съёмка в день события, аэрокадры, наземная съёмка (при наличии) и монтаж репортажного ролика.',
    },
    {
        question: 'Что если результат нам не понравится?',
        answer:
            'План и референсы согласовываем заранее. После монтажа включена одна бесплатная итерация правок по темпу, порядку сцен и текстовым вставкам.',
    },
    {
        question: 'Вы работаете по договору и с юрлицами?',
        answer:
            'Да. Работаем по договору, выставляем счёт, подходим для юридических лиц в Грузии. Предоплата 50% при бронировании, остаток после сдачи материала.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Два дрона для двух задач',
        text: 'DJI Air 3S для кинематографичной съёмки снаружи и DJI Avata 2 для безопасных FPV-пролётов внутри.',
    },
    {
        title: 'Понимание спортивной специфики',
        text: 'Спортобъекты снимают иначе, чем жилые комплексы: важны ракурсы, показывающие зоны, свет и чистоту пространства.',
    },
    {
        title: 'Контент, который можно сразу использовать',
        text: 'Готовые файлы под нужные форматы: горизонталь для YouTube, вертикаль для Reels, фото для сайта и Google Business.',
    },
    {
        title: 'Нет хаоса в процессе',
        text: 'Согласованный план, фиксированные даты и чёткое ТЗ. Все ключевые решения принимаются до выезда.',
    },
    {
        title: 'Локальный контекст',
        text: 'Работаем в Тбилиси, знаем районы, сезонность и погодные особенности, влияющие на съёмочный день.',
    },
    {
        title: 'Честные сроки',
        text: 'Называем реальные сроки сдачи и заранее предупреждаем, если что-то может повлиять на график.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы рассказываете об объекте, задачах и нужных форматах. Мы уточняем зоны съёмки, доступ и референсы.',
    },
    {
        step: 'Шаг 2',
        title: 'План и согласование',
        text: 'Составляем маршрут, список сцен и тайминг. Согласовываем с администрацией клуба доступ к зонам.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Приезжаем с оборудованием, снимаем по плану и проверяем ключевые кадры на месте. Для важных сцен делаем резервные дубли.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: 'Собираем ролик, добавляем цветокоррекцию, музыку и текстовые вставки при необходимости. Передаём черновой вариант.',
    },
    {
        step: 'Шаг 5',
        title: 'Финал и передача',
        text: 'После согласования правок отдаём финальные файлы в нужных форматах. Ссылка на скачивание — в течение 24 часов после финала.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Starter',
        price: 'от 490 ₾',
        duration: '2–3 часа',
        delivery: '5 рабочих дней',
        items: [
            'Аэросъёмка экстерьера объекта (DJI Air 3S)',
            '8–10 аэрофото в 4K (JPEG/WebP)',
            'Короткий монтаж: ролик 30–45 секунд',
            'Одна вертикальная версия 15 секунд для Reels',
            'Цветокоррекция',
            'Передача файлов через ссылку',
        ],
        addons: ['FPV-съёмка внутри +250 ₾', 'Дополнительная монтажная версия +150 ₾'],
    },
    {
        title: 'Standard',
        price: 'от 890 ₾',
        duration: 'Полдня (4–5 часов)',
        delivery: '7 рабочих дней',
        items: [
            'Аэросъёмка экстерьера и территории',
            'FPV-пролёт по 1–2 внутренним зонам',
            'Промо-ролик 60–90 секунд с музыкой (горизонтальный)',
            '2 вертикальные версии 15–30 секунд для Reels/Stories',
            '12–15 аэрофото',
            'Цветокоррекция и саунд-дизайн',
        ],
        addons: ['Съёмка мероприятия в тот же день +350 ₾', 'Дополнительные зоны внутри +200 ₾ за зону'],
        popular: true,
    },
    {
        title: 'Premier',
        price: 'от 1 490 ₾',
        duration: 'Полный день (6–8 часов)',
        delivery: '7–10 рабочих дней',
        items: [
            'Полная аэросъёмка объекта: снаружи и несколько внутренних зон',
            'FPV-пролёт по всем согласованным зонам',
            'Промо-ролик 90–120 секунд',
            '3–4 коротких Reels/Stories-версии разных зон',
            '20+ аэрофото высокого разрешения',
            'Исходники (RAW/LOG) — полный архив',
        ],
        addons: ['Интервью или синхрон с тренером +200 ₾', 'Субтитры для соцсетей +100 ₾'],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка мероприятий',
        href: '/drone-services/drone-events',
        text: 'Дроновое покрытие турниров, открытий клубов и корпоративных спортивных событий.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Скоростные пролёты для эффекта присутствия как отдельный продукт или часть промо-ролика.',
    },
    {
        title: 'Аэросъёмка отелей и курортов',
        href: '/drone-hotels-tourism',
        text: 'Комплексный визуальный пакет для объектов hospitality: территория и инфраструктура.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Для комплексов в составе жилых или коммерческих проектов: объект, окружение и инфраструктура.',
    },
];

const nicheMistakes: MistakeItem[] = [
    {
        title: 'Снимают «для галочки», а не под задачу',
        text: 'Заказывают видео без понимания каналов использования. В итоге ролик не подходит по темпу и формату ни для Reels, ни для рекламы, ни для сайта.',
    },
    {
        title: 'Выбирают неподходящее время суток',
        text: 'Съёмка в пик посещаемости и плоском свете ухудшает картинку. Фасады лучше снимать утром или в золотой час, внутренние зоны — в спокойные часы.',
    },
    {
        title: 'Не готовят пространство к съёмке',
        text: 'Разбросанный инвентарь, полотенца и мусор в кадре убивают впечатление. Перед съёмкой нужно хотя бы 30 минут на подготовку зон.',
    },
    {
        title: 'Заказывают только наружную съёмку',
        text: 'Красивый экстерьер важен, но клиент покупает атмосферу внутри. Без внутренних зон ролик не закрывает главный вопрос: «А что внутри?»',
    },
    {
        title: 'Ждут «идеального момента»',
        text: 'Контент откладывают на месяцы: ремонт, ещё оборудование, потом «как-нибудь». Снимать нужно, когда объект уже выглядит достойно.',
    },
    {
        title: 'Пытаются использовать одну версию везде',
        text: 'Горизонтальный ролик и вертикальный формат работают по-разному. Форматы нужно закладывать на этапе монтажа.',
    },
];

const freeTips: string[] = [
    'Обновите фото в Google Business Profile: 5–8 свежих кадров уже заметно улучшают карточку в локальном поиске.',
    'Снимите простой walk-through на стабилизатор смартфона и публикуйте как Reel с подписями зон.',
    'Добавьте короткое видео (30 секунд) в Hero-блок сайта и проверьте загрузку на мобильных.',
    'Проверьте, как клуб выглядит в Instagram по геотегу, и стимулируйте гостей отмечать вас в удачные дни.',
    'Опишите каждую зону на сайте текстом: площадь, оборудование, часы доступа — это помогает и SEO, и конверсии.',
];

const shootChecklist: string[] = [
    'Все зоны внесены в план: экстерьер, нужные залы, бассейн, ресепшн',
    'Время съёмки согласовано с администрацией: FPV-зоны свободны минимум 2 часа',
    'Пространства убраны: инвентарь на местах, полотенца убраны, мусор вынесен',
    'Освещение в залах включено на полную мощность',
    'Логотип и вывески чистые и хорошо видны',
    'Назначен ответственный человек со стороны клуба на день съёмки',
    'Есть доступ ко всем зонам: ключи, коды, договорённости с охраной',
    'Согласованы форматы выдачи: горизонталь, вертикаль, размер и способ передачи',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Какой дрон лучше для съёмки внутри спортивного зала — обычный или FPV?',
        answer: [
            'Стандартный дрон вроде DJI Air 3S снимает стабильные кинематографичные кадры, но внутри у него больше ограничений по размерам и манёвренности.',
            'FPV-дрон DJI Avata 2 компактнее, имеет защиту пропеллеров и создан для полётов в закрытых пространствах: коридорах, между тренажёрами и над бассейном.',
            'Оптимальная связка для спортобъекта — Air 3S снаружи и Avata 2 внутри. Именно так мы строим продакшн в Breus Media.',
        ],
    },
    {
        question: 'Стоит ли снимать дроном, если клуб небольшой?',
        answer: [
            'Да. Дрон не «увеличивает» помещение искусственно, а показывает его с выгодных ракурсов и подчёркивает атмосферу.',
            'Для небольших клубов это особенно важно: они часто конкурируют с сетями не бюджетом, а впечатлением, сервисом и характером пространства.',
            'Хорошо снятый компактный зал может выглядеть как осознанный premium-формат, а не как компромисс.',
        ],
    },
    {
        question: 'Как часто нужно обновлять видеоконтент спортивному клубу?',
        answer: [
            'Базовый цикл — раз в 1–2 года, если объект почти не меняется.',
            'Вне графика ролик нужен после ремонта, запуска новой зоны или смены маркетинговой стратегии.',
            'Рекламные ролики обычно лучше обновлять ежегодно, чтобы они не «замыливались» у аудитории в таргете.',
        ],
    },
    {
        question: 'Как дрон-съёмка помогает привлекать корпоративных клиентов на аренду зала?',
        answer: [
            'HR-менеджер или руководитель выбирает площадку дистанционно и быстро оценивает вместимость, зонирование и уровень сервиса по визуалу.',
            'Аэровидео закрывает эти вопросы за 60–90 секунд и сокращает число согласований до личного визита.',
            'В коммерческом предложении ролик часто ускоряет принятие решения, потому что снимает базовую неопределённость.',
        ],
    },
    {
        question: 'Какие требования GCAA учитывать при аэросъёмке в Тбилиси?',
        answer: [
            'GCAA регулирует коммерческие полёты дронов в Грузии, включая требования к регистрации и согласованиям для отдельных зон.',
            'В Тбилиси есть ограничения рядом с аэропортом и рядом с некоторыми гособъектами, поэтому проверка зоны обязательна до съёмочного дня.',
            'Мы заранее проверяем статус локации и при необходимости получаем согласования до старта проекта.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: 'FPV-съёмка', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Мониторинг строительства', href: '/drone-services/drone-construction' },
    { label: 'Инспекция объектов', href: '/drone-services/drone-inspection' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        ...beginnerFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
        ...commercialFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка и FPV-видео для спортивных комплексов в Тбилиси',
    description:
        'Аэросъёмка экстерьера, FPV-пролёты по залам и промо-ролики для фитнес-клубов, теннисных кортов и бассейнов в Тбилиси и по Грузии.',
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
        name: 'Тбилиси и Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '490',
        highPrice: '1490',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка и FPV-видео для спортивных объектов в Тбилиси и по всей Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
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

export default function DroneSportPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-sport-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for Sports Venues
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Дрон-видео для спортивных комплексов и фитнес-клубов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Показываем масштаб, атмосферу и уровень вашего объекта так, как это невозможно
                                передать обычной камерой.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Когда человек выбирает клуб, он листает соцсети и смотрит видео. Если вашего зала там
                                нет или там скучные фото с телефона, вы проигрываете конкуренту с атмосферным роликом.
                                Мы снимаем аэровидео и FPV-пролёты для спортивных комплексов, фитнес-клубов,
                                теннисных кортов, бассейнов и велнес-центров.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Итог — готовый контент для сайта, соцсетей и рекламы.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 490 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Съёмочный день для спортивных объектов.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–8 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Экстерьер + FPV внутри</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что такое дрон-видео для спортивного объекта — и зачем это бизнесу
                        </h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это не просто красивые кадры, а маркетинговый инструмент, который отвечает на главный вопрос
                            клиента: «Хочу ли я проводить здесь время?» Дрон показывает масштаб зала, расположение
                            оборудования, качество покрытия, вид с высоты и прилегающую территорию.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            FPV-дрон проносится сквозь пространство и создаёт эффект присутствия. Для фитнес-клубов и
                            спортивных комплексов это виртуальный тур без технических сложностей.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для Тбилиси это особенно актуально: конкуренция между клубами растёт, а многие всё ещё
                            используют любительские фото. Один сильный ролик даёт заметное преимущество в локальном
                            поиске и соцсетях.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта съёмка</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает клубам продвигаться с обычным визуалом</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что даёт клубу видео с дрона</h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h3 className="text-2xl font-bold md:text-3xl">Зарабатывает</h3>
                            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                                {earnList.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h3 className="text-2xl font-bold md:text-3xl">Не теряет</h3>
                            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                                {saveList.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Хотите знать, как будет выглядеть ваш объект? Расскажите о нём — подберём подходящий
                            формат и ответим на вопросы по цене и срокам.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить формат
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в работу и что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где и как это используется</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как выглядит результат — концептуальные примеры</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Факты о рынке и нашем подходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-3xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Ответы на базовые вопросы" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Деньги, сроки и детали работы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему обращаются в Breus Media</h2>
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

            <ProcessNote text="Мы не снимаем «как получится» — каждый выезд начинается с согласованного плана и заканчивается готовым контентом в нужных форматах." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
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

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в ₾ и уточняются после брифа.</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <div className="mt-2 text-sm text-white/70">
                                    <p>
                                        <span className="font-semibold text-white">Длительность съёмки:</span> {card.duration}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Срок доставки:</span> {card.delivery}
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-6 border-t border-white/10 pt-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Дополнительно</p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                                        {card.addons.map((addon) => (
                                            <li key={addon}>+ {addon}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой пакет подходит? Опишите объект и задачу — скажем, что нужно и что войдёт
                            в итоговую стоимость.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что чаще всего идёт не так при съёмке спортивных объектов</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheMistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пять вещей, которые можно улучшить прямо сейчас — без съёмки</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к съёмке</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на популярные вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смотрите также</h2>
                        <div className="mt-8 grid gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Готовы показать свой объект так, чтобы клиент принял решение ещё до первого звонка?
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить съёмку
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Опишите объект и задачи: какие зоны снимаем, нужны ли FPV-пролёты, какие форматы
                                    публикации важны. Подберём оптимальный пакет и сроки.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Альтернативные контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
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

                            <SportContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-sport-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
