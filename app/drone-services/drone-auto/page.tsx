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
import { AutoContactForm } from './AutoContactForm';

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

const CANONICAL_URL = 'https://breus.media/drone-services/drone-auto';
const PAGE_TITLE = 'Аэросъёмка авто и автосалонов в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Дрон-съёмка для автосалонов, детейлинга и проката в Тбилиси. FPV-пролёты, трекинг авто в движении, обзор шоурума. Пакеты от 590 ₾. Работаем по всей Грузии.';

const serviceTypes: CardItem[] = [
    {
        title: 'Съёмка автосалона и площадки',
        text: 'Обзорные планы шоурума снаружи, стоянка с автопарком, фасад и территория. Акцент на масштаб, геометрию и бренд.',
    },
    {
        title: 'Трекинг-съёмка авто в движении',
        text: 'Дрон сопровождает автомобиль на дороге: параллельно, сзади, низко на взлёте. FPV-режим добавляет ощущение скорости.',
    },
    {
        title: 'Промо-контент для соцсетей и рекламы',
        text: 'Короткие ролики для Reels и Shorts, аэрофото и имиджевые видео для Instagram, TikTok, Facebook, YouTube и сайта.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Автосалоны',
        text: 'Новые и подержанные авто. Помогает показать масштаб площадки, качество инвентаря и атмосферу шоурума.',
    },
    {
        title: 'Детейлинг-студии',
        text: 'Результат работы виден в деталях. Дрон даёт эффектные кадры снаружи, а наземная камера закрывает детали.',
    },
    {
        title: 'Автопрокат',
        text: 'Покажите парк машин сверху, локацию и удобство. Это продаёт быстрее, чем прайс-лист на странице.',
    },
    {
        title: 'Частные продавцы премиальных авто',
        text: 'Видео с дрона делает объявление на MyAuto заметно дороже и сильнее конкурентов в ленте.',
    },
    {
        title: 'Дилерские центры и импортёры',
        text: 'Презентационные ролики для партнёров, стартов продаж новых моделей и корпоративных задач.',
    },
    {
        title: 'Авто-блогеры и тест-драйв каналы',
        text: 'Красивый обзор машины в городе или на природе, который выглядит киношно и удерживает просмотр.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Все выглядят одинаково',
        text: 'Фото у стены, одинаковые ракурсы и свет. Покупатель листает объявления и не видит разницы.',
    },
    {
        title: 'Видео есть, но оно не работает',
        text: 'Ролик снят на телефон, просмотры минимальные, заявок нет. Контент не запоминается и не удерживает внимание.',
    },
    {
        title: 'Площадка большая, но это не видно',
        text: 'Сотня машин и инфраструктура выглядят как обычный рынок, если показывать всё только с земли.',
    },
    {
        title: 'Нет времени этим заниматься',
        text: 'Снять, смонтировать, опубликовать — это отдельный проект, который откладывается «на потом».',
    },
    {
        title: 'Конкуренты из-за рубежа выглядят лучше',
        text: 'Продукт может быть таким же, но визуально проигрывает международным дилерам и крупным брендам.',
    },
];

const earnList: string[] = [
    'Видео с дрона увеличивает время просмотра страницы и объявления, повышая шанс заявки.',
    'Сильный визуал помогает удерживать цену: к красиво снятой машине торг обычно ниже.',
    'Контент для соцсетей может приводить трафик месяцами без постоянных доплат на продакшн.',
    'Имиджевый ролик повышает доверие иногородних клиентов, которые едут из других регионов Грузии.',
];

const saveList: string[] = [
    'Один съёмочный день закрывает сайт, соцсети, рекламу и презентации без пересъёмок под каждый канал.',
    'Контент работает без вашего участия: клиент смотрит ролик вечером, заявка приходит утром.',
    'Понятный договор и полные права на использование материалов в рекламе и digital-каналах.',
    'Съёмка не мешает работе салона: дрон работает над площадкой и снаружи шоурума.',
];

const shootDayItems: string[] = [
    'Разведка локации и выбор точек съёмки',
    'Аэросъёмка площадки, шоурума и/или авто в движении на DJI Air 3S (4K)',
    'FPV-пролёты на DJI Avata 2 (при включении в пакет)',
    'Наземная видео- и фотосъёмка для дополнения воздушного контента',
    'Работа с вашей командой по сценарию: какие машины, какие ракурсы, какая атмосфера',
    'Все исходные материалы хранятся на время проекта',
];

const finalResultItems: string[] = [
    'Основной ролик 1–3 минуты (4K, монтаж, цветокоррекция, музыка)',
    'Короткие версии для Reels/Shorts 15–60 секунд (по пакету или отдельно)',
    'Аэрофотографии: 15–40 обработанных JPG-кадров',
    'Форматы под публикацию: сжатые версии для соцсетей + оригиналы для сайта и печати',
    'Передача через облако в течение 3–7 рабочих дней',
    'Полные права на использование материалов без ограничений по времени и территории',
];

const useCases: CardItem[] = [
    {
        title: 'Запуск нового автосалона',
        text: 'Снимаем шоурум, парк машин и атмосферу открытия. Получается пакет контента сразу для нескольких каналов.',
    },
    {
        title: 'Обновление контента для MyAuto и сайта',
        text: 'Свежие аэрофото площадки и наземные кадры машин за один день меняют восприятие объявлений.',
    },
    {
        title: 'Промо конкретной модели',
        text: 'Трекинг-видео на дороге и кинематографичные кадры на фоне Тбилиси или природы для Instagram и YouTube.',
    },
    {
        title: 'Детейлинг «до/после»',
        text: 'Обзор с воздуха + наземные детали дают короткий ролик, который хорошо работает в Reels.',
    },
    {
        title: 'Видео для франшизы или инвестора',
        text: 'Имиджевый материал о площадке и масштабе бизнеса для партнёров и презентаций.',
    },
    {
        title: 'Прокат авто',
        text: 'Показываем парк и машины в движении на красивых локациях, делаем короткие ролики по моделям.',
    },
];

const examples: ExampleItem[] = [
    {
        tag: 'Имиджевый ролик · Автосалон, Тбилиси',
        title: 'Обзор площадки крупного дилера',
        text: 'Дрон поднимается над стоянкой с 80+ машинами, делает дугу над фасадом, затем опускается к главному входу. Монтаж дополнен кадрами интерьера шоурума. Итог: ролик 1:40 для сайта и YouTube.',
    },
    {
        tag: 'Трекинг в движении · Тбилиси — Мцхета',
        title: 'Погоня за автомобилем',
        text: 'DJI Air 3S сопровождает авто на скорости 80 км/ч сзади-сбоку, затем уходит вверх. FPV-добавка: низкий пролёт и резкий взлёт с раскрытием пейзажа. Итог: ролик 40 сек для Reels.',
    },
    {
        tag: 'Детейлинг · До/После, Сабуртало',
        title: 'Контент-пакет для студии',
        text: 'Аэрофото фасада + наземные кадры процесса + финальный облёт машины после обработки. Результат: 8 фото, Reels 30 сек и кадр для обложки.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '85%',
        label: 'Покупателей начинают онлайн',
        text: 'До визита в салон клиент сначала оценивает визуал. Контент становится первым фильтром доверия.',
    },
    {
        value: '3x',
        label: 'Больше просмотров',
        text: 'Видео с дрона в среднем получает кратно больше просмотров в соцсетях, чем обычные наземные ролики.',
    },
    {
        value: '7 дней',
        label: 'Средний цикл выдачи',
        text: 'От съёмки до готового материала в стандартном процессе. Экспресс-монтаж возможен за 1–2 дня.',
    },
    {
        value: '100%',
        label: 'Полёты по правилам GCAA',
        text: 'Работаем легально и заранее проверяем зоны полётов, чтобы у клиента не было юридических рисков.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка для автобизнеса и зачем она нужна?',
        answer:
            'Это съёмка с дрона, которая показывает машины, площадку и шоурум с ракурсов, недоступных с земли. Такой контент передаёт масштаб, движение и атмосферу бренда и помогает выделиться среди конкурентов.',
    },
    {
        question: 'Опасен ли дрон для автомобилей во время съёмки?',
        answer:
            'Нет. Полёты выполняются с безопасной дистанцией и контролируемой траекторией. В профессиональной коммерческой практике основой является безопасность техники и людей.',
    },
    {
        question: 'Можно ли снимать внутри автосалона дроном?',
        answer:
            'Да, если пространство позволяет: нужна разведка, контролируемая скорость и освобождённая зона манёвра. Для динамичных внутренних пролётов используется FPV-дрон DJI Avata 2.',
    },
    {
        question: 'Нужно ли готовить площадку перед съёмкой?',
        answer:
            'Да, это сильно влияет на результат. Нужно убрать лишние предметы, выстроить машины и заранее согласовать приоритетные ракурсы. Мы даём понятный чеклист подготовки.',
    },
    {
        question: 'Можно ли снимать авто в движении по городским улицам?',
        answer:
            'Да, при соблюдении условий безопасности и выборе подходящего маршрута. Лучшие результаты обычно получаются на более свободных дорогах и заранее согласованных локациях.',
    },
    {
        question: 'Как влияет погода на съёмку?',
        answer:
            'Дождь, сильный ветер и неподходящая облачность могут потребовать переноса. Самый выигрышный свет для автомобилей — утро и золотой час перед закатом.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка для автосалона в Тбилиси?',
        answer:
            'Стартовый пакет — от 590 ₾. Полный контент-пакет с трекингом, FPV и несколькими версиями монтажа — от 1 490 ₾. Точная стоимость зависит от локаций и объёма задач.',
    },
    {
        question: 'Что входит в стоимость?',
        answer:
            'Съёмочный день с оборудованием, выезд в Тбилиси, монтаж, цветокоррекция и передача финальных файлов. Дополнительно оплачиваются выезд за пределы Тбилиси, экспресс-монтаж и дополнительные локации.',
    },
    {
        question: 'Какие форматы материалов вы передаёте?',
        answer:
            'Основной ролик в MP4 (H.264/H.265), версии для соцсетей в 16:9, 9:16 и 1:1, фото в JPEG высокого разрешения. RAW-исходники — по запросу.',
    },
    {
        question: 'Нужно ли разрешение на полёты над автосалоном в Тбилиси?',
        answer:
            'В большинстве случаев отдельное разрешение на точку не требуется, если соблюдаются правила GCAA. Для зон ограничений, включая близость к аэропорту, разрешения оформляем мы.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer: 'Да. Работаем по всей Грузии: Батуми, Рустави, Гори, Мцхета и другие локации. Выезд рассчитывается отдельно.',
    },
    {
        question: 'Кто владеет правами на готовый материал?',
        answer:
            'После оплаты заказчик получает полные права на использование материалов в рекламе, на сайте, в соцсетях, презентациях и печати. Это фиксируется в договоре.',
    },
    {
        question: 'Сколько занимает весь процесс от брифа до результата?',
        answer:
            'Обычно 7–10 рабочих дней: подготовка, один съёмочный день и монтаж. Экспресс-выдача за 1–2 дня возможна за доплату.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Специализированное оборудование',
        text: 'DJI Air 3S для чистой аэросъёмки и DJI Avata 2 для FPV-динамики. Два инструмента под разные задачи.',
    },
    {
        title: 'Понимание автомобильной съёмки',
        text: 'Трекинг требует точной скорости, дистанции и логики движения кадра. Это отдельная практика, а не универсальная съёмка.',
    },
    {
        title: 'Полный пакет, а не набор исходников',
        text: 'Вы получаете готовые ролики, версии под соцсети и обработанные фото, а не «сырой» архив.',
    },
    {
        title: 'Работа по договору',
        text: 'Бриф, договор, сроки, акт и права использования фиксируются официально и прозрачно.',
    },
    {
        title: 'Полёты с соблюдением GCAA',
        text: 'Летаем только в рамках действующих правил, заранее проверяем зоны и ограничения.',
    },
    {
        title: 'Опыт в разных нишах автобизнеса',
        text: 'Автосалоны, детейлинг, прокат и частные продажи требуют разных сценариев и визуальной подачи.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы описываете задачу: площадка, модели, движение/статика, каналы публикации. Мы уточняем детали.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем дату, свет, погоду, список кадров и чеклист подготовки площадки.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем по плану: дрон на площадке и трекинге, наземная камера по деталям и шоуруму.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: 'Отбор материала, цветокоррекция, сборка ролика и черновая версия для одной итерации правок.',
    },
    {
        step: 'Шаг 5',
        title: 'Доставка',
        text: 'Передаём финальные файлы через облако в согласованных форматах и с полными правами.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Старт',
        price: 'от 590 ₾',
        duration: '2–3 часа',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка площадки или шоурума снаружи (DJI Air 3S)',
            'Основной ролик до 90 секунд: монтаж + цветокоррекция',
            '15 обработанных аэрофотографий',
            'Версия ролика для Instagram (9:16 или 1:1)',
        ],
        addons: ['Экспресс-монтаж 1–2 дня: +150 ₾', 'Дополнительные наземные кадры: +200 ₾'],
    },
    {
        title: 'Стандарт',
        price: 'от 1 090 ₾',
        duration: '3–5 часов',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка площадки + трекинг авто в движении',
            'Основной ролик 1.5–2.5 минуты',
            'Короткая версия Reels/Shorts 30–60 секунд',
            '25 обработанных аэрофото',
            'Форматы 16:9, 9:16, 1:1',
        ],
        addons: [
            'FPV-пролёт по шоуруму (DJI Avata 2): +300 ₾',
            'Дополнительная локация трекинга: +250 ₾',
            'Экспресс-монтаж: +200 ₾',
        ],
        popular: true,
    },
    {
        title: 'Полный контент-пакет',
        price: 'от 1 990 ₾',
        duration: '5–7 часов',
        delivery: '7–10 рабочих дней',
        items: [
            'Аэросъёмка площадки + несколько локаций трекинга',
            'FPV-пролёт по шоуруму (если позволяет пространство)',
            'Основной имиджевый ролик 2.5–4 минуты',
            '2 коротких Reels под разные форматы',
            '40 обработанных аэрофото',
            'Все версии и форматы + базовый сценарий монтажа',
        ],
        addons: [
            'Наземная интервью-съёмка (владелец/команда): +300 ₾',
            'Озвучка или диктор: по запросу',
            'Перевод и субтитры: по запросу',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° тур для автосалона',
        href: '/360-tour-services/360-tour-auto',
        text: 'Виртуальный проход по шоуруму для сайта и Google Maps.',
    },
    {
        title: 'Аэросъёмка мероприятий',
        href: '/drone-services/drone-events',
        text: 'Открытие салона, тест-драйв день и автоивенты с воздушными кадрами.',
    },
    {
        title: 'Аэросъёмка отелей и курортов',
        href: '/drone-hotels-tourism',
        text: 'Если ваш проект пересекается с hospitality, используем тот же production-подход.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Площадки, склады и коммерческие объекты в смежной нише.',
    },
];

const nicheMistakes: MistakeItem[] = [
    {
        title: 'Снимать всё подряд без цели',
        text: 'Ролик должен решать конкретную задачу: сайт, Reels, YouTube или презентация. У каждого канала свой формат.',
    },
    {
        title: 'Экономить на свете и времени суток',
        text: 'Автомобиль, снятый при правильном свете, выглядит дороже даже на простой камере. Время съёмки критично.',
    },
    {
        title: 'Не готовить площадку',
        text: 'Лишний мусор и случайные объекты в кадре моментально портят восприятие и снижают ценность контента.',
    },
    {
        title: 'Публиковать ролик один раз',
        text: 'Один ролик не равен кампании. Нужны версии под сайт, Reels, Stories и рекламные размещения.',
    },
    {
        title: 'Не обновлять контент',
        text: 'Старые видео с другим парком машин создают путаницу и ослабляют доверие к текущим предложениям.',
    },
    {
        title: 'Использовать сток вместо реального объекта',
        text: 'Стоковые кадры красивы, но продаёт именно ваша площадка, ваши машины и ваш контекст в Тбилиси.',
    },
];

const freeTips: string[] = [
    'Снимайте машины за час до заката: естественный свет делает металлик объёмнее и скрывает микродефекты.',
    'Убирайте фон: лишние машины, знаки и мусор в кадре заметно удешевляют восприятие автомобиля.',
    'Снимайте отдельно горизонтальные и вертикальные версии: это два разных контент-актива.',
    'Добавьте короткое видео 20–40 сек в карточку MyAuto: это увеличивает время просмотра объявления.',
    'Сделайте обложку Instagram из лучшего кадра машины: первое впечатление влияет на доверие к бизнесу.',
];

const shootChecklist: string[] = [
    'Машины для съёмки чистые снаружи',
    'Площадка убрана: без мусора, лишнего инвентаря и посторонних машин',
    'Сотрудники предупреждены по безопасной зоне во время полёта',
    'Определены 2–3 ключевых ракурса шоурума',
    'Для трекинга заранее согласованы маршрут и время',
    'Проверен прогноз: без сильного ветра и дождя',
    'На месте назначен ответственный контакт',
    'Понятна логистика остановок и точек перестановки авто',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Сколько стоит заказать дрон-видео для автосалона в Тбилиси?',
        answer: [
            'Базовый пакет с аэросъёмкой площадки и роликом до 90 секунд стартует от 590 ₾. В него входит съёмочный день, монтаж, цветокоррекция, 15 обработанных фото и версия для Instagram.',
            'Пакет с трекингом авто в движении и несколькими форматами обычно начинается от 1 090 ₾. Полный контент-пакет для большого шоурума или дилерского центра — от 1 990 ₾.',
            'Дополнительно считаются выезд за пределы Тбилиси, FPV внутри помещений и экспресс-монтаж. Финальную смету фиксируем после короткого брифа.',
        ],
    },
    {
        question: 'Чем дрон-съёмка отличается от обычного видео для автосалона?',
        answer: [
            'Наземная съёмка показывает детали машины на уровне глаз. Это полезно, но не передаёт масштаб площадки, логику расположения и динамику движения.',
            'Дрон добавляет три ключевых эффекта: ракурс сверху, кинематографичный трекинг на скорости и раскрывающий кадр с «отрывом» вверх.',
            'На практике такой формат чаще досматривают и пересылают, особенно в соцсетях, где важно удержать внимание в первые секунды.',
        ],
    },
    {
        question: 'Можно ли снимать дроном внутри автосалона в Тбилиси?',
        answer: [
            'Да, если помещение позволяет безопасный манёвр: нужна достаточная высота потолков и заранее проверенный маршрут.',
            'FPV-дрон DJI Avata 2 хорошо подходит для динамичных пролётов через шоурум с эффектом «присутствия» клиента в пространстве.',
            'Перед полётом согласовываем зоны, где не должно быть сотрудников и клиентов. Это обязательная часть подготовки.',
        ],
    },
    {
        question: 'Нужно ли разрешение GCAA для съёмки над автосалоном в Тбилиси?',
        answer: [
            'В большинстве стандартных кейсов отдельное разрешение для конкретной точки не требуется, если полёт идёт в рамках правил GCAA.',
            'Базовые требования: высота до 120 метров, отсутствие запретных зон и соблюдение ограничений по людям и объектам.',
            'Если объект попадает в зону ограничений, включая близость к аэропорту, подготовку разрешений берём на себя.',
        ],
    },
    {
        question: 'Какие локации в Тбилиси подходят для трекинг-съёмки автомобилей?',
        answer: [
            'Часто выбирают трассу Тбилиси — Мцхета, набережные и более свободные промышленные зоны с понятной траекторией движения.',
            'Для премиальных моделей лучше работают локации с характерным фоном: горная дорога, панорама города или минималистичная индустриальная сцена.',
            'Маршрут подбирается под конкретную машину и цель ролика: для продаж, имиджа или короткого соцформата.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка недвижимости в Тбилиси', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'FPV-съёмка в Грузии', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: '360° тур для автосалона', href: '/360-tour-services/360-tour-auto' },
    { label: 'Мониторинг стройки с дрона', href: '/drone-services/drone-construction' },
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
    name: 'Аэросъёмка автомобилей и автосалонов в Тбилиси',
    description:
        'Дрон-съёмка для автосалонов, детейлинга и автопроката: обзор площадки, трекинг авто в движении, FPV-пролёты и готовые ролики под сайт, соцсети и рекламу.',
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
        lowPrice: '590',
        highPrice: '1990',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео и контент-пакеты для автобизнеса в Грузии.',
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

export default function DroneAutoPage() {
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
                id="drone-auto-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for Auto Business
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка автомобилей и автосалонов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Покажите масштаб шоурума, динамику авто в движении и атмосферу вашего бренда — с
                                воздуха и с земли.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Большинство автосалонов в Тбилиси снимают машины так же, как пять лет назад: статичные
                                кадры, обычный телефон и стандартный свет. Сейчас покупатель видит видео раньше, чем
                                приезжает в салон. Дрон-съёмка даёт масштаб, скорость в кадре и ощущение, что за рулём
                                этой машины хочется оказаться.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Готовый контент для сайта, соцсетей и рекламных запусков.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 590 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для автобизнеса.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–5 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Трекинг авто и FPV-пролёты</li>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое дрон-съёмка для автобизнеса</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это производство видео и фото для автосалонов, детейлинг-студий, проката и частных продавцов,
                            где часть или весь контент снимается с дрона.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон может сопровождать автомобиль на скорости, облетать шоурум, заходить низко позади
                            машины и резко уходить вверх, раскрывая масштаб локации.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Такой контент используют для сайта, рекламы в соцсетях, YouTube, презентаций для партнёров
                            и инвесторов, а также для регулярного обновления объявлений.
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
                        <h2 className="text-3xl font-bold md:text-4xl">Кому подходит эта съёмка</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает вашему контенту продавать</h2>
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
                <div className="container mx-auto grid gap-6 px-6 lg:grid-cols-2">
                    <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold md:text-3xl">Как дрон-съёмка влияет на деньги: зарабатывает</h2>
                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                            {earnList.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold md:text-3xl">Как дрон-съёмка влияет на деньги: не теряет</h2>
                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                            {saveList.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Хотите понять, какой формат подойдёт вашему автобизнесу? Опишите задачу — предложим
                            конкретный вариант и примерную стоимость. Без обязательств.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день включает</h3>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Где это реально используется</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые стоит знать</h2>
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

            <FaqSection id="faq" items={beginnerFaqItems} title="Вы впервые думаете о дрон-съёмке?" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Практические вопросы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
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

            <ProcessNote text="Съёмочный день занимает 2–5 часов — шоурум остаётся в рабочем режиме." />

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
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в ₾ и зависят от сценария съёмки и локаций.</p>
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
                            Не знаете, какой пакет подходит? Напишите кратко: что за бизнес, что хотите показать и для
                            чего. Предложим оптимальный формат без лишних звонков.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что ещё работает для автобизнеса</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">6 ошибок, которые мешают автоконтенту работать</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что улучшить без покупки продакшна</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к дрон-съёмке</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы для SEO и AI-поиска</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы</h2>
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
                            Если автоконтент перестал выделять вас среди конкурентов, следующий шаг простой: описать
                            задачу и получить рабочий формат под ваш бизнес.
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

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить задачу</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Расскажите, что именно хотите показать: площадку, конкретные модели, трекинг,
                                    шоурум или пакет для соцсетей. Подберём формат и бюджет.
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

                            <AutoContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-auto-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
