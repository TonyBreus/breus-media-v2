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
import { WarehousesContactForm } from './WarehousesContactForm';

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
    audience: string;
    items: string[];
    addons: string[];
    timeline: string;
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-warehouses';
const PAGE_TITLE = 'Аэросъёмка склада и индустриальных объектов — Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Аэросъёмка складов, логистических комплексов и промышленных зон в Тбилиси. Презентационный ролик, ортофото, инспекция кровли. От 490 ₾. Разрешения GCAA включены.';

const audienceCards: CardItem[] = [
    {
        title: 'Владелец склада или логистического комплекса',
        text: 'Хотите сдать площадь в аренду или привлечь якорного арендатора — покажите объект так, чтобы человек понял его потенциал ещё до визита.',
    },
    {
        title: 'Девелопер или управляющая компания',
        text: 'Строите новый комплекс или управляете несколькими объектами — аэросъёмка фиксирует прогресс, состояние кровли и территории без выезда каждого ответственного.',
    },
    {
        title: 'Инвестор или собственник актива',
        text: 'Нужно представить объект партнёру или банку — видео с воздуха передаёт масштаб и контекст лучше, чем любые цифры на бумаге.',
    },
    {
        title: 'Логистическая компания',
        text: 'Демонстрируете инфраструктуру клиентам, партнёрам, тендерной комиссии — аэросъёмка превращает операционные мощности в убедительный визуальный аргумент.',
    },
    {
        title: 'Производство и завод',
        text: 'Показываете производственный цикл инвесторам или на выставке — FPV-пролёт по цеху или съёмка с воздуха дают образ, который остаётся в памяти.',
    },
    {
        title: 'Брокер коммерческой недвижимости',
        text: 'Работаете с промышленными объектами — видео с дрона сокращает количество «холодных» показов и ускоряет принятие решения.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Объект есть, а показать нечего',
        text: 'Фото с телефона не передают масштаб. Схемы из кадастра не продают. Арендаторы спрашивают «а видео есть?» — и получают «нет».',
    },
    {
        title: 'Территория большая, а охватить её сложно',
        text: '5 гектаров нельзя нормально снять с земли. Подъездные пути, доки, стоянки для фур, КПП, дренаж — всё это видно только сверху.',
    },
    {
        title: 'Инвесторы не понимают масштаб',
        text: 'На питче объект «не читается»: трудно понять размеры, логистику и окружение.',
    },
    {
        title: 'Кровля и фасад проверяются редко',
        text: 'Осмотр кровли часто означает леса, время и деньги. Поэтому проблемы находят уже после протечек или жалоб арендаторов.',
    },
    {
        title: 'Банк или страховая просит визуальную документацию',
        text: 'Регулярные фото-отчёты по объекту нужны для банка, страховщика и акционеров, но собирать их вручную неудобно и дорого.',
    },
    {
        title: 'Конкуренты уже показывают объекты с воздуха',
        text: 'Крупные игроки используют аэросъёмку как стандарт маркетинга и выигрывают переговоры уже на этапе первичного отбора.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Быстрее закрывает сделку по аренде',
        text: 'Арендатор смотрит видео, понимает объект удалённо и приезжает уже с намерением, а не «просто посмотреть».',
    },
    {
        title: 'Повышает ставку',
        text: 'Объект с аэросъёмкой воспринимается как более управляемый и ухоженный, что влияет на готовность платить выше.',
    },
    {
        title: 'Привлекает международных арендаторов',
        text: 'Операторы, работающие по западным стандартам, чаще включают в шорт-лист объекты с полноценным видеоматериалом.',
    },
    {
        title: 'Усиливает инвестиционную презентацию',
        text: 'Видео с воздуха передаёт масштаб и контекст лучше статичных слайдов и делает презентацию более убедительной.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Находит проблемы на кровле до протечки',
        text: 'Повреждения покрытия, засоры водостоков и проблемные примыкания видны раньше, чем становятся дорогим ремонтом.',
    },
    {
        title: 'Фиксирует состояние перед сдачей в аренду',
        text: 'Визуальная документация «на входе» защищает в спорах о том, что было повреждено арендатором, а что существовало до.',
    },
    {
        title: 'Снижает расходы на инспекцию',
        text: 'Регулярный облет обычно дешевле наземного обхода с подъёмниками или лесами, при этом даёт сопоставимую картину.',
    },
    {
        title: 'Снижает риск провала на переговорах',
        text: 'Без визуала объект часто проигрывает конкурентам не по качеству, а по понятности и упаковке.',
    },
];

const deliverablesVideo: string[] = [
    'Презентационный ролик 2–4 минуты (монтаж, титры, музыка) — для сайта, питча и переговоров',
    'Короткая версия 30–60 секунд — для соцсетей и рассылок',
    'Облётный мастер-кат — полный материал без сокращений',
    'FPV-пролёт по внутренним пространствам (по запросу или в пакете Extended)',
];

const deliverablesDocs: string[] = [
    'Фото объекта с воздуха — 20–40 финальных кадров в высоком разрешении',
    'Ортофотоплан территории — для планирования, согласований и презентаций',
    'Детальные фото кровли и фасада — для технического контроля или страховой',
    'Аннотированная схема территории с обозначением зон (опционально)',
];

const formatItems: string[] = [
    'Видео: MP4, H.264/H.265, разрешение 4K (3840×2160), 24/30 fps',
    'Фото: JPG высокое качество, исходники RAW по запросу',
    'Ортофото: JPG или GeoTIFF (с геопривязкой — по запросу)',
    'Архив передаётся через Google Drive или WeTransfer',
];

const timingItems: string[] = [
    'Фото-пакет: 2–3 рабочих дня после съёмки',
    'Монтаж ролика: 4–7 рабочих дней',
    'Срочный монтаж: до 48 часов (допуслуга)',
];

const useCases: CardItem[] = [
    {
        title: 'Листинг для аренды промышленной площади',
        text: 'Собственник показывает развязку, доки, парковку и периметр в одном ролике. Звонки от арендаторов приходят уже с пониманием объекта.',
    },
    {
        title: 'Инвестиционный меморандум',
        text: 'Девелопер добавляет съёмку участка и контекста окружения, чтобы инвестор видел, где расположен актив и почему проект имеет смысл.',
    },
    {
        title: 'Ежемесячный отчёт управляющей компании',
        text: 'Регулярная аэросъёмка становится визуальным приложением к отчёту: видно динамику по территории, кровле и инфраструктуре.',
    },
    {
        title: 'Маркетинг логистической компании',
        text: 'FPV-пролёт по складскому залу показывает высоту стеллажей, организацию пространства и операционный порядок.',
    },
    {
        title: 'Инспекция перед продажей объекта',
        text: 'Аэросъёмка фиксирует состояние кровли, фасада и территории до сделки и снижает риск последующих споров.',
    },
    {
        title: 'Тендер или заявка',
        text: 'Видео объекта с воздуха усиливает тендерный пакет и работает убедительнее, чем таблицы характеристик.',
    },
];

const examples: CardItem[] = [
    {
        title: 'Логистический комплекс, 8 000 м², район Лило, Тбилиси',
        text: 'Съёмка перед сдачей первой очереди в аренду: четыре стороны, два облётных круга, проезд вдоль доков и въезд через КПП. Финал: ролик 2:40 + версия 45 секунд + ортофото. Готовность пакета — 5 рабочих дней.',
    },
    {
        title: 'Производственный цех, металлообработка, пригород Тбилиси',
        text: 'FPV-пролёт DJI Avata 2 по главному залу + внешние кадры. Итоговый ролик 3:10 использовался на стенде промышленной выставки и на корпоративном сайте.',
    },
    {
        title: 'Складской комплекс, кровельная инспекция после зимы',
        text: 'Детальная съёмка примыканий, водостоков и парапетов двух корпусов. Фото-отчёт: 38 кадров с аннотациями. Обнаружено 3 проблемных участка для точечного ремонта.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '50–70%',
        label: 'Снижение стоимости инспекции',
        text: 'При замене лесов и подъёмников на дрон-мониторинг на ряде промышленных объектов в Европе.',
    },
    {
        value: 'До 4 ч vs 15 мин',
        label: 'Обход периметра',
        text: 'Склад 5+ гектаров пешком против облёта дроном с полным видеопокрытием.',
    },
    {
        value: 'Класс A',
        label: 'Растущий спрос',
        text: 'Международные арендаторы чаще принимают решение по цифровым материалам ещё до выезда на объект.',
    },
    {
        value: '1 съёмочный день',
        label: 'Пакет на год работы',
        text: 'Один выезд закрывает ролик, фото и ортофото для сайта, листинга, презентаций и переговоров.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка склада и зачем это нужно?',
        answer:
            'Это видео и фото объекта с дрона, которые показывают масштаб территории, подъездные пути, доки, кровлю и контекст расположения. Такой материал помогает быстрее сдавать площадь, понятнее презентовать актив инвестору и вести технический контроль без сложной наземной инспекции.',
    },
    {
        question: 'Дрон снимает только снаружи или может работать внутри?',
        answer:
            'И так, и так. Для экстерьера используется DJI Air 3S. Для внутренних пространств — FPV-дрон DJI Avata 2 с защитными кожухами, который может работать в закрытых помещениях без GPS.',
    },
    {
        question: 'Нужно ли останавливать работу склада на время съёмки?',
        answer:
            'Нет. Съёмка обычно проводится без остановки процессов. Для внутреннего FPV заранее согласуется короткий тайм-слот в конкретных зонах.',
    },
    {
        question: 'Что такое ортофотоплан и зачем он нужен?',
        answer:
            'Ортофото — это точный вид строго сверху, собранный из серии снимков. Подходит для планирования территории, презентаций, согласований и документации перед банком или арендатором.',
    },
    {
        question: 'В каком формате выдаются материалы?',
        answer:
            'Видео передаётся в MP4 4K, фото — в JPG высокого качества, ортофото — в JPG или GeoTIFF по запросу. Передача через Google Drive или WeTransfer.',
    },
    {
        question: 'Сколько занимает съёмка и монтаж?',
        answer:
            'Выезд обычно занимает 2–4 часа. Фото-пакет готовится за 2–3 рабочих дня, монтаж ролика — за 4–7 рабочих дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка склада в Тбилиси?',
        answer:
            'Standard: 490 ₾. Business: 890 ₾. Extended: 1 390 ₾. Точная стоимость зависит от площади объекта, набора задач и сроков.',
    },
    {
        question: 'Нужны ли разрешения на полёт над промышленным объектом в Тбилиси?',
        answer:
            'Зависит от зоны. В районах, близких к аэропорту, требуется согласование. Мы проверяем зону заранее и при необходимости оформляем разрешение через GCAA.',
    },
    {
        question: 'Что такое GCAA и почему это важно?',
        answer:
            'GCAA — Агентство гражданской авиации Грузии, регулирующее полёты дронов. Работа в рамках правил снижает юридические и операционные риски для владельца объекта.',
    },
    {
        question: 'Можно ли организовать регулярную съёмку раз в месяц или квартал?',
        answer:
            'Да. Для мониторинга объектов можно запланировать регулярные выезды. При договоре от 3 выездов стоимость одного выезда ниже разовой.',
    },
    {
        question: 'Что если в день съёмки плохая погода?',
        answer:
            'При сильном ветре, дожде или тумане съёмка переносится на ближайший подходящий день без дополнительной оплаты.',
    },
    {
        question: 'Можно ли снять несколько объектов за один день?',
        answer:
            'Если объекты находятся в Тбилиси или рядом, это обычно возможно. Логистика и тайминг согласуются заранее.',
    },
    {
        question: 'Кому принадлежат права на материалы после съёмки?',
        answer:
            'После оплаты права на финальные материалы переходят заказчику. Возможность использования в портфолио согласуется отдельно.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Понимание B2B-задач',
        text: 'Снимаем не «красивые пролёты», а материал под конкретную цель: листинг, питч, отчёт или тендер.',
    },
    {
        title: 'Работа в рамках законодательства Грузии',
        text: 'Проверяем зоны, оформляем разрешения GCAA и координируем полёты в ограниченных районах.',
    },
    {
        title: 'Два типа дронов под разные задачи',
        text: 'DJI Air 3S для внешней съёмки и DJI Avata 2 для внутренних FPV-пролётов в защищённой конфигурации.',
    },
    {
        title: 'Готовый материал, а не только исходники',
        text: 'Вы получаете смонтированный ролик, короткие версии и обработанные фото, готовые к публикации.',
    },
    {
        title: 'Чёткие сроки и структура сдачи',
        text: 'Фото через 2–3 дня, ролик через 4–7 дней, одна итерация правок включена.',
    },
    {
        title: 'Локальная экспертиза по Тбилиси',
        text: 'Понимаем контекст промышленных районов города и быстрее согласуем съёмку без лишних задержек.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение задачи',
        text: 'Вы описываете объект и цель. Мы предлагаем оптимальный состав съёмки и ориентировочную стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Проверка зоны и разрешения',
        text: 'Проверяем ограничения. Если нужно разрешение GCAA — оформляем заранее (обычно 1–3 рабочих дня).',
    },
    {
        step: 'Шаг 3',
        title: 'Выезд и съёмка',
        text: 'Работаем на объекте в согласованное время. Обычно 2–4 часа без остановки операционной деятельности.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Отбираем лучший материал, собираем ролик и обрабатываем фото по согласованному составу.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём финальный пакет через ссылку. Включена одна итерация правок по ролику.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Standard',
        price: '490 ₾',
        audience: 'Объект нужно задокументировать или быстро показать потенциальному арендатору',
        items: [
            'Выезд на объект (Тбилиси и ближайшие районы)',
            'Аэросъёмка экстерьера — 4K, 2–3 маршрута облёта',
            '15–20 финальных фото в высоком разрешении',
            'Необработанный видеоматериал (нарезка без монтажа)',
            'Передача через Google Drive, срок 2–3 рабочих дня',
        ],
        addons: ['Смонтированный ролик: +150 ₾', 'Разрешение GCAA (если зона ограничена): +90 ₾'],
        timeline: '2–3 рабочих дня',
    },
    {
        title: 'Business',
        price: '890 ₾',
        audience: 'Нужен готовый материал для листинга, сайта и презентации инвестору',
        items: [
            'Выезд на объект (Тбилиси и ближайшие районы)',
            'Аэросъёмка экстерьера + детальная съёмка кровли и фасада',
            '30–40 финальных фото в высоком разрешении',
            'Презентационный ролик 2–3 мин (монтаж, музыка, титры)',
            'Короткая версия 30–45 сек для соцсетей и рассылок',
            'Ортофото территории (вид сверху)',
            'Разрешение GCAA — включено',
        ],
        addons: [
            'FPV-пролёт внутри: +350 ₾',
            'Аннотированная схема территории: +100 ₾',
            'Срочный монтаж (48 часов): +200 ₾',
        ],
        timeline: '5–7 рабочих дней',
        popular: true,
    },
    {
        title: 'Extended',
        price: '1 390 ₾',
        audience: 'Полный визуальный пакет: наружная съёмка + внутренний FPV + документация',
        items: [
            'Полный объём пакета Business',
            'FPV-пролёт по внутренним пространствам (склад, цех, производственный зал)',
            'Финальный ролик 3–5 мин с интеграцией внешней и внутренней съёмки',
            'Детальный фото-отчёт по кровле',
            'Разрешение GCAA — включено',
        ],
        addons: [
            'Ежемесячный мониторинг (договор от 3 выездов): от 390 ₾/выезд',
            'RAW-исходники: +150 ₾',
            'Вертикальные форматы для Reels (9:16): +120 ₾',
        ],
        timeline: '7–10 рабочих дней',
    },
];

const relatedServices: CardItem[] = [
    {
        title: 'Мониторинг строительства',
        text: 'Регулярные облёты, фото-отчёты для банка и инвесторов, контроль соответствия плану.',
    },
    {
        title: 'Инспекция объектов и фасадов',
        text: 'Детальная съёмка кровли, фасада и примыканий для страховой и планирования ремонта.',
    },
    {
        title: 'Аэросъёмка коммерческой недвижимости',
        text: 'Съёмка офисных центров, торговых комплексов и коммерческих площадей для листинга и презентаций.',
    },
    {
        title: '360° виртуальный тур',
        text: 'Интерактивный формат, позволяющий удалённо «пройтись» по объекту снаружи и изнутри.',
    },
];

const relatedServiceLinks = [
    '/drone-services/construction-monitoring',
    '/drone-services/building-inspection',
    '/drone-services/real-estate',
    '/360-tours/real-estate',
];

const mistakes: string[] = [
    'Снимать объект только с земли и считать это полноценной презентацией.',
    'Думать, что аэросъёмка нужна только «красивым» объектам.',
    'Публиковать сырой материал без монтажной логики.',
    'Летать без разрешения в зонах рядом с аэропортом.',
    'Не делать кровельную инспекцию перед сдачей в аренду.',
    'Снимать один раз и не обновлять материалы по мере изменений объекта.',
];

const freeTips: string[] = [
    'Если нет дрона, найдите хотя бы верхнюю точку и снимите объект сверху на смартфон как временное решение.',
    'Опишите объект через логистические параметры: площадь, доки, высоты, расстояние до развязки и аэропорта.',
    'Добавьте карту с маркером объекта или скриншот спутникового вида, чтобы дать пространственный контекст.',
    'Попросите подрядчиков фиксировать состояние кровли и фасада при ближайшем обслуживании.',
    'Проверьте заранее, попадает ли объект в ограниченную авиационную зону и потребуется ли разрешение GCAA.',
];

const checklist: string[] = [
    'Определена цель материала: аренда, инвестор, отчёт или маркетинг',
    'Проверена авиационная зона и понятна необходимость разрешения GCAA',
    'Согласован доступ на территорию (охрана, КПП, ограничения по зонам)',
    'Определены ключевые точки съёмки: доки, въезды, кровля, внутренние пространства',
    'Территория приведена в порядок перед съёмочным днём',
    'Определено, нужна ли FPV-съёмка внутри и согласован тайм-слот',
    'Согласован формат финальных материалов',
    'Определена дата, к которой нужен готовый пакет',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Чем аэросъёмка склада отличается от обычной фотосъёмки?',
        answer: [
            'Наземная съёмка показывает фасад и отдельные точки. Этого часто недостаточно, чтобы понять объект как актив.',
            'Аэросъёмка показывает территорию в контексте: подъезды, доки, открытое хранение, окружение и транспортную доступность.',
            'Дополнительно дрон фиксирует кровлю и верхние части фасада, которые критичны для технического контроля.',
        ],
    },
    {
        question: 'Как аэросъёмка помогает привлекать международных арендаторов?',
        answer: [
            'Международные операторы сначала оценивают материалы удалённо и формируют шорт-лист до выезда.',
            'Если у объекта нет качественного видео с воздуха, он часто выбывает на раннем этапе отбора.',
            'Короткий ролик закрывает ключевые вопросы: доступ, доки, масштаб, состояние территории и инфраструктура.',
        ],
    },
    {
        question: 'Можно ли использовать аэросъёмку для технического контроля объекта?',
        answer: [
            'Да. Это один из самых практичных сценариев использования.',
            'Съёмка помогает отслеживать состояние кровли, фасада, водостоков, примыканий и покрытия территории.',
            'Квартальные облёты формируют историю состояния актива и упрощают работу управляющей компании.',
        ],
    },
    {
        question: 'Как получить разрешение на съёмку рядом с аэропортом Тбилиси?',
        answer: [
            'В ряде промышленных районов рядом с аэропортом действуют ограничения.',
            'Для коммерческого полёта подаётся заявка с координатами, датой и параметрами миссии в GCAA.',
            'Обычно согласование занимает 1–3 рабочих дня. Мы берём эту процедуру на себя.',
        ],
    },
    {
        question: 'Что такое регулярный мониторинг объекта и когда он нужен?',
        answer: [
            'Это серия облётов по одному маршруту через фиксированный интервал (месяц, квартал, полгода).',
            'Полезно для стройки, управления несколькими объектами и долгосрочной документации состояния актива.',
            'При договоре на несколько выездов стоимость одного визита обычно ниже разовой.',
        ],
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
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
    name: 'Аэросъёмка складов и индустриальных объектов в Тбилиси',
    description:
        'Аэросъёмка складов, логистических комплексов и промышленных территорий в Тбилиси. Презентационный ролик, ортофото и визуальная документация для аренды, инвестиций и контроля.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: '+995574619393',
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
        lowPrice: '490',
        highPrice: '1390',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для бизнеса в Тбилиси.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
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

export default function DroneWarehousesPage() {
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
                id="drone-warehouses-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Warehouse Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка складов и индустриальных объектов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Визуализация, которую понимает арендатор, инвестор и партнёр — без лесов, без остановки
                                работы, за один день.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Склад площадью 5 000 м² сложно объяснить по телефону. Его нужно показать: подъезд,
                                количество доков, высоту, логику территории. Дрон делает это за несколько часов и
                                превращает объект в материал, который убеждает быстрее любого описания.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку объекта
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
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Склад, логистика, индустриальные объекты.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–4 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Ортофото, инспекция кровли, ролики</li>
                                    <li>Разрешения GCAA включены по пакету</li>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка склада — простыми словами</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это видео и фото объекта с воздуха: территория, фасад, кровля, подъездные пути и зоны
                            погрузки. Всё, что сложно полноценно снять с земли.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон поднимается на нужную высоту, облетает объект по маршруту и снимает в 4K. Материал
                            собирается в презентационный ролик или фото-пакет для сайта, инвестора, листинга и отчётов.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для внутренних пространств используется FPV-дрон с защитными кожухами: пролёт между
                            стеллажами и цехами показывает масштаб изнутри. Съёмка не останавливает работу объекта.
                        </p>
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
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что должна сделать эта съёмка</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Главная задача — сделать объект понятным удалённо. Крупные арендаторы и инвесторы принимают
                            решение ещё до выезда. Если у объекта нет видео, которое показывает масштаб, инфраструктуру и
                            транспортный контекст, он часто выпадает из раннего отбора.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дополнительная функция — регулярный контроль: кровля, периметр, парковочные зоны и
                            строительные работы видны быстрее и дешевле, чем при наземных обходах.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает нормально продвигать объект</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка помогает зарабатывать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {earningsCards.map((item) => (
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
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка помогает не терять деньги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {savingsCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Видеоматериалы</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesVideo.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Фото и документация</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDocs.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Формат результата и сроки</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 lg:col-span-2">
                            <h3 className="text-lg font-bold text-white">Форматы файлов</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                {formatItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Сроки</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                {timingItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                            <p className="mt-5 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/78">
                                Передача материалов: ссылка на папку с финальными файлами. Исходники — по запросу.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где это реально используется</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Почему это работает: цифры рынка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="FAQ для первого заказа" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по цене, разрешениям и процессу"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмка занимает 2–4 часа, согласование GCAA в ограниченных зонах обычно 1–3 рабочих дня." />

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
                        <h2 className="text-3xl font-bold md:text-4xl">Стоимость съёмки</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены указаны в грузинских лари (₾).</p>
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
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-sm text-white/78">
                                    <span className="font-semibold text-white">Срок:</span> {card.timeline}
                                </p>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
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
                            Нужен расчёт под конкретный объект и срок? Опишите площадь и цель, предложим оптимальный пакет.
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
                        {relatedServices.map((service, index) => (
                            <Link
                                key={service.title}
                                href={relatedServiceLinks[index]}
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
                        <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки при продвижении промышленных объектов</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно сделать прямо сейчас, без покупки</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к аэросъёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
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
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы</h2>
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
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если задача с презентацией или контролем склада стоит на ближайшие недели, лучше подготовить
                            визуальный пакет заранее и входить в переговоры с материалом, а не с описанием.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить съёмку объекта
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку объекта</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите площадь и задачу объекта. Предложим подходящий пакет, сроки и формат
                                    материалов под вашу цель.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
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
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <WarehousesContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-warehouses-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
