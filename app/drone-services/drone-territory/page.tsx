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
import { TerritoryContactForm } from './TerritoryContactForm';

type CardItem = {
    title: string;
    text: string;
};

type TaggedCardItem = {
    tag: string;
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
    subtitle: string;
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

type ExpandedAnswer = {
    question: string;
    answer: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breusmedia.com/drone-services/drone-territory';
const PAGE_TITLE = 'Мониторинг территорий дроном в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Регулярные аэрофото и отчёты о состоянии вашего объекта. Стройки, участки, склады — в Тбилиси и по всей Грузии. Разовый вылет от 450 ₾. Передача за 24–48 ч.';

const serviceTypes: CardItem[] = [
    {
        title: 'Разовый базовый облёт (Baseline Survey)',
        text: 'Одноразовый полёт для фиксации текущего состояния территории. Подходит для старта мониторинга, документирования объекта перед сделкой и первичного обзора участка.',
    },
    {
        title: 'Периодический мониторинг (Recurring Monitoring)',
        text: 'Регулярные облёты по графику: еженедельно, раз в две недели или раз в месяц. Каждый вылет датируется, материалы накапливаются в архив и становятся сопоставимыми.',
    },
    {
        title: 'Отчётный мониторинг (Reporting Package)',
        text: 'Облёт плюс структурированный отчёт: датированные снимки, сравнение «было / стало», PDF-сводка для внутреннего использования или для инвесторов и партнёров.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Девелоперы и застройщики',
        text: 'Нужно показывать прогресс инвесторам и банку, фиксировать выполнение этапов подрядчиком и иметь доказательную базу на случай споров.',
    },
    {
        title: 'Владельцы земельных участков',
        text: 'Вы не живёте рядом с объектом или приезжаете редко. Регулярный облёт показывает, что происходит на территории и как меняется периметр.',
    },
    {
        title: 'Управляющие логистическими и складскими дворами',
        text: 'На открытых площадках сложно держать визуальный контроль. Дрон за 15–20 минут даёт полную картину использования территории.',
    },
    {
        title: 'Иностранные инвесторы и удалённые владельцы',
        text: 'Вы ведёте проект в Грузии, находясь в другой стране. Периодические облёты и PDF-отчёты становятся вашими «глазами» на объекте.',
    },
    {
        title: 'Промышленные и производственные объекты',
        text: 'Заводы, карьеры, насыпные площадки и зоны хранения: быстрый мониторинг больших территорий без остановки работ и долгого обхода.',
    },
    {
        title: 'Архитекторы, проектировщики и геодезисты',
        text: 'Регулярные аэрофотоматериалы помогают сверять фактическое состояние объекта с проектной документацией и дополняют наземные замеры.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Не знаю, что реально происходит на площадке',
        text: 'Подрядчик отчитывается словами или отправляет пару фото с телефона. Принимать решения по таким данным рискованно.',
    },
    {
        title: 'Нет зафиксированной истории объекта',
        text: 'Когда возникает спор, доказать «было так» нечем. Без датированного архива всё держится на памяти и устных договорённостях.',
    },
    {
        title: 'Инвестор или партнёр требует отчёт',
        text: 'Разрозненные снимки из мессенджера не работают как документ. Нужен стандартизированный визуальный отчёт с датами.',
    },
    {
        title: 'Объект большой, обходить вручную долго и дорого',
        text: 'Территория в несколько гектаров требует часов обхода. Дрон закрывает задачу за один вылет и даёт обзор сверху.',
    },
    {
        title: 'Удалённый контроль невозможен без присутствия',
        text: 'Вы не можете постоянно приезжать на объект и вынуждены доверять чужим интерпретациям вместо фактов.',
    },
    {
        title: 'Нет единого визуального стандарта документации',
        text: 'Снимки с разных точек и высот несравнимы. Для нормального контроля нужен фиксированный маршрут и повторяемые позиции.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Доверие инвестора и партнёров растёт',
        text: 'Прозрачный визуальный прогресс упрощает финансирование и снижает число вопросов по ходу проекта.',
    },
    {
        title: 'Сделки проходят быстрее',
        text: 'Документированное состояние объекта перед продажей или арендой сокращает время на согласования.',
    },
    {
        title: 'Подрядчики точнее соблюдают этапы',
        text: 'Когда прогресс фиксируется регулярно, дисциплина выполнения работ и соблюдение сроков становятся выше.',
    },
    {
        title: 'Удалённое управление становится реальным',
        text: 'Вы принимаете решения на основе фактов и сопоставимых материалов, а не на основе устных отчётов.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Архив защищает в спорах',
        text: 'Датированные материалы с метаданными помогают отстаивать позицию в разборе с подрядчиками и контрагентами.',
    },
    {
        title: 'Нарушения выявляются раньше',
        text: 'Вы видите отклонения до того, как они превращаются в дорогостоящую проблему.',
    },
    {
        title: 'Снижается риск несанкционированного использования',
        text: 'Регулярный визуальный контроль периметра помогает быстрее замечать нежелательные изменения.',
    },
    {
        title: 'Меньше недоразумений с банком и инвестором',
        text: 'Стандартизированная отчётность снимает вопросы и снижает конфликтность в коммуникации.',
    },
];

const shootDayItems: string[] = [
    'Вылет дрона по согласованному маршруту над объектом',
    'Аэрофотосъёмка с фиксированных точек для сравнения между вылетами',
    'Обзорное аэровидео территории (панорамы и пролёты)',
    'Документирование ключевых зон: периметр, хранение, активные участки, спорные точки',
    'Исходные файлы с датой в метаданных и геотегом',
];

const finalResultItems: string[] = [
    'Датированные аэрофото в высоком разрешении (JPG/PNG)',
    'Обзорное видео территории (MP4, без обработки или с базовым монтажом)',
    'Организованная по датам папка с исходными файлами',
    'Сравнительный визуальный ряд «было / стало» при повторных вылетах',
    'PDF-отчёт с датированными снимками и комментариями (в пакете Reporting)',
    'Передача материалов в течение 24–48 часов после вылета',
];

const useCases: CardItem[] = [
    {
        title: 'Еженедельный прогресс стройки для инвестора',
        text: 'Девелопер отправляет датированные фото и сравнительное видео каждые две недели. Инвестор контролирует объект удалённо и быстрее принимает решения.',
    },
    {
        title: 'Контроль участка за городом без личных визитов',
        text: 'Ежемесячный облёт фиксирует границы, состояние территории и признаки посторонней активности. Владелец видит картину без поездок.',
    },
    {
        title: 'Документирование участка перед сделкой',
        text: 'Разовый baseline-облёт формирует архив состояния объекта на конкретную дату и снимает часть вопросов у покупателя.',
    },
    {
        title: 'Визуальный контроль логистического двора',
        text: 'Управляющий видит занятость зон хранения, порядок на площадке и состояние периметра без обхода гектарной территории.',
    },
    {
        title: 'Отчёт для банка по ходу строительства',
        text: 'Стандартизированные аэрофотоотчёты с датами и этапами заменяют хаотичные фото и упрощают подтверждение прогресса.',
    },
    {
        title: 'Мониторинг горной или труднодоступной локации',
        text: 'Дрон добирается до сложной зоны за минуты и фиксирует состояние объекта там, где наземная проверка занимает много времени.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Девелоперский проект / ЖК',
        title: 'Начальный этап и повтор через 4 недели',
        text: 'Базовый облёт фиксирует периметр участка, состояние грунта, подъезды и старт котлована. Повторный вылет с тех же точек показывает «было / стало». Материалы отправлены инвестору как PDF + архив фото.',
    },
    {
        tag: 'Логистический двор / Открытая складская площадка',
        title: 'Еженедельный мониторинг территории 2 га',
        text: 'Менеджер видит загрузку зон, нарушения разметки и состояние периметра. За месяц накапливается 4 датированные серии снимков для внутреннего контроля.',
    },
    {
        tag: 'Земельный участок удалённого владельца',
        title: 'Ежеквартальный маршрут с одними и теми же точками',
        text: 'Архив за год наглядно показывает динамику изменений территории. Базовое понимание состояния объекта больше не требует регулярных поездок.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '70%',
        label: 'Материалы для контроля, не рекламы',
        text: 'Такую долю клиентов интересует документирование и отчётность, а не маркетинговый ролик.',
    },
    {
        value: '15–20 минут',
        label: 'Покрытие 1–2 гектаров',
        text: 'За это время дрон закрывает площадь, на обход которой пешком обычно уходит несколько часов.',
    },
    {
        value: '×4 в месяц',
        label: 'Частота активной стройки',
        text: 'Еженедельный цикл мониторинга помогает не пропускать критические этапы работ.',
    },
    {
        value: '24–48 часов',
        label: 'Передача материалов',
        text: 'Обычно файлы и отчёты передаются в течение двух суток после вылета.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое мониторинг территорий дроном?',
        answer:
            'Это регулярные или разовые аэрофотосъёмки объекта с одних и тех же точек по фиксированному маршруту. Цель — создать датированный визуальный архив и видеть изменения во времени.',
    },
    {
        question: 'Это то же самое, что охрана объекта?',
        answer:
            'Нет. Мониторинг — это документирование, а не защита в реальном времени. Он не заменяет охрану и видеонаблюдение, а закрывает задачу контроля и отчётности.',
    },
    {
        question: 'Можно ли летать на дроне в Тбилиси?',
        answer:
            'Да, при соблюдении правил GCAA. В некоторых зонах рядом с аэропортом и в отдельных городских кварталах требуется предварительное согласование. Мы проверяем зону и берём этот процесс на себя.',
    },
    {
        question: 'Как часто нужно делать облёты?',
        answer:
            'Для активной стройки обычно раз в неделю или раз в две недели. Для спокойных участков — раз в месяц или раз в квартал. Частота подбирается под задачу.',
    },
    {
        question: 'Влияет ли погода на возможность вылета?',
        answer:
            'Да. Сильный ветер (примерно от 10–12 м/с), дождь и туман ограничивают вылет. При неблагоприятной погоде переносим съёмку на ближайшую доступную дату.',
    },
    {
        question: 'За сколько готовы материалы?',
        answer:
            'Обычно 24–48 часов после вылета. Если нужен PDF-отчёт, добавляется ещё около одного рабочего дня.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит мониторинг территорий дроном в Тбилиси?',
        answer:
            'Разовый baseline-облёт стоит от 450 ₾. Регулярный мониторинг — от 850 ₾/месяц. Отчётный формат с расширенным PDF — от 1 400 ₾/месяц. Точная цена зависит от площади, частоты и формата отчётности.',
    },
    {
        question: 'Что входит в стандартный пакет?',
        answer:
            'Вылет дрона, аэрофотоматериалы с фиксированных точек маршрута и датированная передача файлов в течение 24–48 часов. PDF-отчёты и серии «было / стало» входят в расширенные пакеты.',
    },
    {
        question: 'В каком формате передаются материалы?',
        answer:
            'Фото передаются в JPG высокого разрешения, видео — в MP4. Доступ выдаётся через защищённую облачную папку с датированной структурой файлов.',
    },
    {
        question: 'Нужны ли специальные разрешения GCAA для коммерческих полётов?',
        answer:
            'Коммерческие полёты регулируются GCAA. Мы работаем по действующим правилам: регистрация, ограничения по зонам и высоте, дополнительные согласования при необходимости.',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Нет, работаем по всей Грузии: Тбилиси, Батуми, Кахетия, Квемо Картли и другие регионы. Для выездов за пределы Тбилиси действует фиксированная транспортная надбавка.',
    },
    {
        question: 'Можно ли подписать договор на регулярный мониторинг?',
        answer:
            'Да. Для регулярных облётов оформляется договор с фиксированным маршрутом, периодичностью, форматом отчётности и сроками передачи материалов.',
    },
    {
        question: 'Можно ли заказать мониторинг один раз, без абонемента?',
        answer:
            'Да. Разовый baseline-облёт предоставляется как отдельная услуга без обязательства переходить на регулярный формат.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Мы строим систему контроля, а не «красивую съёмку»',
        text: 'Повторяемость маршрута, датированные серии и сопоставимость материалов — основа нашей методики мониторинга.',
    },
    {
        title: 'DJI Air 3S подходит для документации',
        text: 'Разрешение и стабильность съёмки позволяют видеть детали поверхности, периметра и изменений на объекте.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Проверяем зоны, учитываем ограничения и при необходимости берём согласования на себя.',
    },
    {
        title: 'Передаём материалы в рабочем формате',
        text: 'Датированная структура, понятные имена файлов и облачный доступ для вас, инвестора, банка и партнёров.',
    },
    {
        title: 'Комфортно работаем с удалёнными владельцами',
        text: 'Бриф, согласование маршрута и передача результата могут проходить полностью дистанционно.',
    },
    {
        title: 'Честно обозначаем границы услуги',
        text: 'Мониторинг — это документирование и контроль, но не замена охраны или инженерного надзора.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф и согласование',
        text: 'Вы описываете объект, задачу и периодичность. Мы согласуем маршрут, точки съёмки, формат результата и стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Разрешения и подготовка',
        text: 'Проверяем ограничения GCAA, при необходимости оформляем согласование и согласуем дату с учётом погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Вылет и съёмка',
        text: 'Работаем по фиксированному маршруту, с одинаковыми точками, углами и высотой для сопоставимости между вылетами.',
    },
    {
        step: 'Шаг 4',
        title: 'Обработка и передача',
        text: 'Отбираем материалы, организуем в датированную структуру и передаём через облако в течение 24–48 часов.',
    },
    {
        step: 'Шаг 5',
        title: 'Отчёт и архив',
        text: 'В расширенных пакетах добавляем PDF-сводку и сравнение с предыдущим вылетом. Архив остаётся доступным в любое время.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Baseline',
        subtitle: 'Разовый стартовый облёт',
        price: 'от 450 ₾',
        duration: '1 вылет (до 2 часов на объекте)',
        delivery: '24–48 часов',
        items: [
            'Один вылет по согласованному маршруту',
            'До 40 датированных аэрофото в высоком разрешении',
            'Обзорное видео территории (сырой монтаж)',
            'Передача через облачную папку',
            'Краткий бриф-лист точек съёмки для повторных вылетов',
        ],
        addons: [
            'Выезд за пределы Тбилиси: от 80 ₾',
            'Ортофото (плановая сшивка): +150 ₾',
            'Срочная передача до 12 часов: +100 ₾',
        ],
    },
    {
        title: 'Monitoring',
        subtitle: 'Регулярный контроль по графику',
        price: 'от 850 ₾/месяц',
        duration: '2 вылета в месяц',
        delivery: '24–48 часов после каждого вылета',
        items: [
            '2 вылета в месяц по фиксированному маршруту',
            'До 60 датированных аэрофото с каждого вылета',
            'Видео каждого вылета (базовый монтаж)',
            'Сравнительный визуальный ряд «вылет 1 / вылет 2»',
            'Облачный датированный архив',
            'Договор на обслуживание с фиксированными условиями',
        ],
        addons: [
            'Третий вылет в месяц: +300 ₾',
            'Выезд за пределы Тбилиси: от 80 ₾/вылет',
            'PDF-отчёт к каждому вылету: +150 ₾/вылет',
        ],
        popular: true,
    },
    {
        title: 'Reporting',
        subtitle: 'Еженедельный мониторинг с отчётами',
        price: 'от 1 400 ₾/месяц',
        duration: '4 вылета в месяц (еженедельно)',
        delivery: '24–48 часов после каждого вылета',
        items: [
            '4 вылета в месяц по стандартному маршруту',
            'До 80 датированных аэрофото с каждого вылета',
            'Видео с базовой цветокоррекцией',
            'PDF-отчёт после каждого вылета с зонами изменений',
            'Ежемесячная сводная PDF-хроника объекта',
            'Приоритетное согласование дат и погодных переносов',
        ],
        addons: [
            'Ортофото (плановая сшивка): +150 ₾/вылет',
            'Выезд за пределы Тбилиси: от 80 ₾/вылет',
            'Аннотированная карта объекта: +200 ₾',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Мониторинг строительства дроном',
        href: '/drone-services/drone-construction-monitoring',
        text: 'Регулярные облёты активной стройки с отчётами для инвестора и банка, фиксация этапов и сравнение по неделям.',
    },
    {
        title: 'Инспекция объектов дроном',
        href: '/drone-services/drone-inspection',
        text: 'Детальная аэросъёмка кровель, фасадов и конструкций для документации дефектов без лесов и подъёмников.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Видео и фото объектов недвижимости с воздуха для продажи, аренды и презентации инвесторам.',
    },
    {
        title: '360° виртуальный тур',
        href: '/360-tours/360-real-estate',
        text: 'Интерактивная панорама объекта для удалённого просмотра, которая хорошо работает в связке с аэрофото.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Снимают «когда вспомнили», а не по графику',
        text: 'Случайные вылеты без регулярности и повторяемости не дают базы для сравнения и управленческих решений.',
    },
    {
        title: 'Путают мониторинг с охраной',
        text: 'Мониторинг не реагирует на события в реальном времени и не заменяет службу безопасности.',
    },
    {
        title: 'Летают с разных точек каждый раз',
        text: 'Если маршрут и высота не фиксируются, материалы теряют сопоставимость и практическую ценность.',
    },
    {
        title: 'Не организуют архив',
        text: 'Файлы из мессенджеров без структуры и датировки невозможно использовать как рабочую историю объекта.',
    },
    {
        title: 'Заказывают мониторинг без цели',
        text: 'Без понятной задачи сложно выбрать частоту, маршрут и формат отчётности. Результат получается размытым.',
    },
    {
        title: 'Игнорируют требования GCAA',
        text: 'Работа без регистрации и проверки зон несёт риск штрафов и срыва съёмки, особенно рядом с ограниченными локациями.',
    },
];

const freeTips: string[] = [
    'Сделайте серию фото с одинаковых точек по периметру прямо сейчас: это уже база для будущих сравнений.',
    'Составьте список критичных зон: въезд, ворота, спорный периметр, активные участки, зоны хранения.',
    'Организуйте облачную папку для документации по датам, чтобы история объекта не терялась.',
    'Проверьте ограничения GCAA по адресу объекта до заказа вылета.',
    'Запросите у подрядчика датированные фото после каждого этапа как стандарт отчётности.',
];

const checklist: string[] = [
    'Вы чётко сформулировали цель мониторинга: для кого и для чего нужны материалы.',
    'Размер и форма территории известны: объект можно показать на карте или передать координаты.',
    'Определена желаемая периодичность вылетов: еженедельно, раз в 2 недели, раз в месяц.',
    'Понятно, кто получает материалы: только вы или также инвестор, банк, партнёры.',
    'Решён вопрос доступа на территорию в день вылета.',
    'Подготовлено облачное хранилище для получения и хранения материалов.',
    'Проверено, находится ли объект в ограниченной зоне GCAA.',
    'Есть понимание, что дрон-мониторинг — это документирование, а не охрана в реальном времени.',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Чем дрон-мониторинг территории отличается от обычной аэросъёмки?',
        answer:
            'Обычная аэросъёмка чаще решает маркетинговую задачу: красивые кадры для сайта и рекламы. Мониторинг территории работает как инструмент управления: здесь важны повторяемость маршрута, одинаковые точки и сопоставимость материалов. Вы смотрите не просто на картинку, а на изменения объекта между датами.',
    },
    {
        question: 'Какие объекты в Грузии особенно нуждаются в регулярном мониторинге?',
        answer:
            'В первую очередь активные стройплощадки, земельные участки под девелопмент, логистические дворы, объекты удалённых владельцев и труднодоступные локации. Во всех этих сценариях мониторинг компенсирует отсутствие постоянного присутствия на месте.',
    },
    {
        question: 'Как часто делать облёты при активном строительстве?',
        answer:
            'Для активной стройки обычно выбирают еженедельный или двухнедельный цикл. Такой ритм помогает не пропускать критичные этапы и вовремя замечать отклонения. При низкой активности достаточно одного вылета в месяц.',
    },
    {
        question: 'Что такое baseline-облёт и зачем он нужен?',
        answer:
            'Baseline-облёт фиксирует исходное состояние объекта и создаёт точку отсчёта для всех следующих сравнений. На этом этапе также согласуются точки съёмки и маршрут, которые затем повторяются в мониторинге.',
    },
    {
        question: 'Можно ли использовать материалы в спорах с подрядчиком?',
        answer:
            'Датированные материалы с метаданными не заменяют юридические документы, но существенно усиливают позицию в деловых спорах вместе с договором, актами и перепиской. Они помогают объективно показать состояние объекта на конкретную дату.',
    },
];

const navLinks: NavLink[] = [
    { label: 'Мониторинг строительства дроном', href: '/drone-services/drone-construction-monitoring' },
    { label: 'Инспекция объектов и фасадов дроном', href: '/drone-services/drone-inspection' },
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: '360° тур для недвижимости', href: '/360-tours/360-real-estate' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
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
    name: 'Мониторинг территорий дроном в Тбилиси и по Грузии',
    description:
        'Регулярные облёты по фиксированному маршруту, датированные аэрофото и видео, сравнительные серии и PDF-отчёты для контроля территорий.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.com',
        telephone: '+995574619393',
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
        lowPrice: '450',
        highPrice: '1400',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для бизнеса в Грузии.',
    url: 'https://breusmedia.com',
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

export default function DroneTerritoryPage() {
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
                id="drone-territory-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Territory Monitoring
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Мониторинг территорий дроном для бизнеса в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Датированные аэрофотоматериалы и визуальные отчёты — чтобы вы видели, что происходит
                                на объекте, даже когда вас там нет.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Дрон облетает территорию по фиксированному маршруту и фиксирует состояние объекта:
                                строительный прогресс, изменения на участке, наполнение площадок и граничные зоны.
                                Каждый вылет — это визуальная запись с датой, которую можно сравнить с предыдущей.
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
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Разовый baseline-облёт территории.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">15–20 мин</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">1–2 га</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24–48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Передача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Фиксированный маршрут и повторяемые точки</li>
                                    <li>Датированные серии «было / стало»</li>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Визуальный контроль территории — не охрана и не кино</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Мониторинг территорий — это периодические облёты объекта дроном по заданному маршруту с
                            сохранением датированных фото- и видеоматериалов. Это не живая охрана и не рекламная
                            съёмка, а инструмент документации изменений.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Один снимок редко что-то доказывает. Серии снимков с одних и тех же точек раз в неделю или
                            раз в месяц создают историю объекта, полезную в отчётности, переговорах и спорных
                            ситуациях.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Когда вы не можете постоянно присутствовать на площадке, мониторинг даёт регулярные
                            «снимки реальности» в удобном формате для принятия решений удалённо.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
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
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужен мониторинг территорий дроном</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает владельцам объектов спать спокойно</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мониторинг даёт вашему бизнесу</h2>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD23F]">Зарабатывает</p>
                        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {earningsCards.map((item) => (
                                <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD23F]">Не теряет</p>
                        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {savingsCards.map((item) => (
                                <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Есть территория, которую нужно держать под контролем, но вы не можете быть там постоянно?
                            Расскажите нам об объекте — обсудим формат мониторинга.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить объект
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что именно вы получаете</h2>
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

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Реальные сценарии использования</h2>
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
                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{item.tag}</p>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Несколько цифр, которые объясняют логику</h2>
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

            <FaqSection id="faq" items={beginnerFaqItems} title="Вы впервые слышите про мониторинг территорий — разберём базу" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы по деньгам, формату и процессу"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему владельцы объектов выбирают нас</h2>
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

            <ProcessNote text="Стандартный вылет на объект занимает 1–2 часа. Материалы готовы в течение 24–48 часов." />

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
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены в ₾, без скрытых платежей.</p>
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
                                <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/72">Длительность: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
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
                            Не знаете, какой пакет подходит? Опишите объект и задачу — предложим формат без лишних
                            опций и скрытых доплат.
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
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги для вашего объекта</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что чаще всего идёт не так при мониторинге территорий</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что улучшить уже сейчас, даже без покупки</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">8 пунктов готовности к мониторингу территории</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на типичные вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы сайта</h2>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/80 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <span className="mr-2 text-[#FFD23F]">{index + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить мониторинг территории</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Опишите объект, частоту и формат отчёта. Предложим маршрут, график и точный
                                    расчёт под вашу задачу.
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

                            <TerritoryContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-territory-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
