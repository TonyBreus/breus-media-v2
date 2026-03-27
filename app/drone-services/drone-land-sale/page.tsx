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
import { LandSaleContactForm } from './LandSaleContactForm';

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

const CANONICAL_URL = 'https://breus.media/drone-services/drone-land-sale';
const PAGE_TITLE = 'Аэросъёмка земельных участков в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Дрон-видео и фото участков для продажи, инвесторов и девелоперов в Грузии. Пакеты от 390 ₾. Тбилиси, Кахетия, Батуми. Готовый материал за 3–5 дней.';

const serviceTypes: CardItem[] = [
    {
        title: 'Съёмка участка для продажи',
        text: 'Видеообзор с воздуха для объявления на OLX, Domex, личной презентации или сайта. Акцент на визуальную подачу и масштаб.',
    },
    {
        title: 'Съёмка для инвесторов и девелоперов',
        text: 'Расширенный материал с облётом по периметру, акцентом на рельеф, доступность и контекст. При необходимости добавляем графическое наложение границ участка.',
    },
    {
        title: 'Аэросъёмка виноградников и сельхозземель',
        text: 'Документация угодий, площади и состояния насаждений. Применяется при продаже агробизнеса и для отчётности перед партнёрами.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Частный продавец участка',
        text: 'Вы продаёте землю через объявление или агента и хотите выделить объект на фоне конкурентов, особенно для покупателей из других городов и стран.',
    },
    {
        title: 'Риелтор или агентство',
        text: 'Нужен материал, который снимает основные вопросы ещё до выезда на просмотр и сокращает число «туристических» визитов.',
    },
    {
        title: 'Девелопер',
        text: 'Запускаете посёлок, делите массив на участки или выводите на рынок новый объект. Нужен контент для сайта, соцсетей и презентаций.',
    },
    {
        title: 'Инвестор или его представитель',
        text: 'Требуется дистанционная первичная оценка участка без личного визита. Видео с дрона позволяет быстро провести предварительный due diligence.',
    },
    {
        title: 'Владелец виноградника или фермерских угодий',
        text: 'Показываете площадь и состояние земель потенциальному покупателю или партнёру в понятном визуальном формате.',
    },
    {
        title: 'Маркетолог девелопера или застройщика',
        text: 'Нужен регулярный контент для старта продаж, этапов подготовки и готовности инфраструктуры.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фото с земли не передают масштаб',
        text: 'Покупатель видит траву и деревья, но не понимает форму, размер и контекст участка. Возникают лишние визиты и несоответствие ожиданий.',
    },
    {
        title: 'Удалённые покупатели требуют личного визита',
        text: 'Нерезиденты и инвесторы не готовы ехать без первичной уверенности в объекте. Без качественного видео сделка откладывается или срывается.',
    },
    {
        title: 'Участок теряется среди похожих объявлений',
        text: 'В одной ценовой категории выигрывает тот, у кого сильнее визуал. Дрон-видео заметно повышает внимание к листингу в ленте.',
    },
    {
        title: 'Сложно объяснить расположение и окружение',
        text: 'Фразы вроде «рядом с лесом» не работают как доказательство. Видео за минуту показывает трассу, соседей, подъезды и окружение.',
    },
    {
        title: 'Девелоперу нечем иллюстрировать проект на старте',
        text: 'Когда домов ещё нет, продажам мешает слабая визуализация. Дрон-видео превращает землю в понятный продукт до строительства.',
    },
    {
        title: 'Граница участка невидима на обычном фото',
        text: 'Покупателю сложно понять периметр. Графическое наложение границ на видео убирает эту неопределённость.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Больше откликов на объявление',
        text: 'Листинг с дрон-видео обычно получает на 40–60% больше просмотров, что даёт больше звонков и быстрее ведёт к сделке.',
    },
    {
        title: 'Удалённый покупатель быстрее доходит до решения',
        text: 'Инвестор может принять предварительное решение по видео и приехать уже на финальный этап, а не на первичные смотрины.',
    },
    {
        title: 'Более высокая воспринимаемая цена',
        text: 'Профессиональная презентация снижает давление на торг и усиливает позицию продавца как серьёзного контрагента.',
    },
    {
        title: 'Для девелопера это инструмент старта продаж',
        text: 'Можно запускать рекламу и показывать проект на сайте и в соцсетях до начала стройки.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Меньше пустых показов',
        text: 'После просмотра видео приезжают более целевые покупатели, у которых уже сформированы реалистичные ожидания.',
    },
    {
        title: 'Меньше споров об окружении',
        text: 'Видео фиксирует фактическое состояние участка и окружающей среды на момент съёмки.',
    },
    {
        title: 'Документация этапов для девелопера',
        text: 'Хронология облётов даёт доказательную базу для подрядчиков, инвесторов и внутренних отчётов.',
    },
    {
        title: 'Не теряете клиента из-за слабой презентации',
        text: 'Если у конкурента есть дрон-видео, а у вас нет, вы проигрываете первое впечатление до первого контакта.',
    },
];

const shootDayItems: string[] = [
    'Выезд оператора с дроном DJI Air 3S на объект',
    'Облёт по периметру участка на нескольких высотах',
    'Горизонтальные и наклонные кадры для понимания рельефа и окружения',
    'Статичные фото с воздуха в высоком разрешении',
    'Дополнительные точки: подъезд к участку, соседние объекты, ориентиры',
    'Запись в 4K и LOG-профиль для постпродакшна',
];

const finalResultItems: string[] = [
    'Смонтированное видео: 60–90 секунд для объявлений или 2–3 минуты для девелоперских презентаций',
    'Версия для вертикального монтажа (Reels / Stories) — по запросу',
    '10–20 финальных аэрофотографий в JPG с цветокоррекцией',
    'Передача материалов через WeTransfer или Google Drive в течение 3–5 рабочих дней',
    'Исходники RAW/LOG — по запросу и фиксации в договоре',
];

const useCases: CardItem[] = [
    {
        title: 'Листинг на Domex или OLX',
        text: 'Продавец добавляет дрон-видео к объявлению и получает больше просмотров и звонков, особенно от удалённых покупателей.',
    },
    {
        title: 'Инвестиционная презентация',
        text: 'Девелопер показывает весь массив с воздуха с наложением схемы нарезки и инфраструктуры вокруг.',
    },
    {
        title: 'Удалённый инвестор из-за рубежа',
        text: 'Брокер снимает несколько объектов, инвестор выбирает один финальный для личного визита и переговоров.',
    },
    {
        title: 'Продажа виноградника в Кахетии',
        text: 'Видео показывает площадь, рельеф, дорогу к хозяйству и состояние угодий, ускоряя решение покупателя.',
    },
    {
        title: 'Хронология строительства посёлка',
        text: 'Съёмка раз в 1–2 месяца формирует визуальную историю проекта для сайта, отдела продаж и инвесторов.',
    },
    {
        title: 'Участок под застройку в черте Тбилиси',
        text: 'Аэросъёмка раскрывает городскую инфраструктуру, соседство и виды, помогая понять локацию без выезда.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Продажа / Частный участок',
        title: 'Участок 20 соток в пригороде Тбилиси',
        text: 'Съёмка с высоты 80 м показывает периметр, подъезд, соседей и лесной массив. Затем низкий плавный облёт и финальный кадр с предполагаемой высоты второго этажа. Видео 90 секунд.',
    },
    {
        tag: 'Девелопмент / Нарезка участков',
        title: 'Коттеджный посёлок, 12 участков, Мцхета',
        text: 'Облёт массива с высоты 100 м, графическое наложение границ и номеров участков, кадры подъезда и коммуникаций. Видео 2 минуты для сайта и рекламы.',
    },
    {
        tag: 'Сельхозземля / Виноградник',
        title: 'Виноградник 4 га, Кахетия',
        text: 'Съёмка в период созревания: ряды лоз, рельеф, дорога, хозяйственные постройки и границы участка. Итог: видео 90 секунд и 15 аэрофото.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '40–60%',
        label: 'Больше просмотров',
        text: 'Такой прирост получают листинги с дрон-видео по сравнению с объявлениями без видео на крупных зарубежных платформах.',
    },
    {
        value: 'от 70%',
        label: 'Дистанционный этап сделки',
        text: 'Значительная доля сделок с иностранными покупателями в Грузии проходит после удалённого знакомства с объектом.',
    },
    {
        value: '1 день',
        label: 'Съёмочный выезд',
        text: 'За один выезд можно собрать полный набор материалов для объявления, презентации и рекламного запуска.',
    },
    {
        value: '3–5 дней',
        label: 'Готовность финала',
        text: 'Типовой срок от съёмки до получения смонтированного видео и фото.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка участка и зачем это нужно?',
        answer:
            'Это видео и фото с дрона на высоте 30–120 метров. Они показывают форму участка, рельеф, дороги, соседей и окружение, чтобы покупатель или инвестор мог оценить объект дистанционно.',
    },
    {
        question: 'Можно ли летать дроном в Тбилиси и других городах Грузии?',
        answer:
            'Да, при соблюдении правил GCAA. В разрешённых зонах коммерческая съёмка проводится по установленному порядку. Если есть ограничения, мы предупреждаем заранее и согласовываем решение.',
    },
    {
        question: 'Что если погода плохая в день съёмки?',
        answer:
            'Съёмку переносим. При сильном ветре, дожде или тумане дрон не летает из соображений безопасности и качества.',
    },
    {
        question: 'Сколько времени занимает съёмка на месте?',
        answer:
            'Для стандартного участка до 1 га обычно 1–2 часа. Для больших массивов и сложного рельефа может потребоваться полный день.',
    },
    {
        question: 'Нужно ли мне присутствовать на съёмке?',
        answer:
            'Желательно, но не обязательно. При отсутствии владельца работаем по заранее согласованному брифу и документам участка.',
    },
    {
        question: 'В каком формате я получу материалы?',
        answer:
            'Смонтированное видео передаём в MP4 (4K), аэрофото — в JPG высокого разрешения. Передача через WeTransfer или Google Drive. Исходники — по договорённости.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка участка в Грузии?',
        answer:
            'Базовый пакет начинается от 390 ₾, пакет с монтажом и расширенным фото — от 590 ₾, полный девелоперский продакшн — от 990 ₾. Финальная цена зависит от локации, площади и задачи.',
    },
    {
        question: 'Вы работаете только в Тбилиси или выезжаете в регионы?',
        answer:
            'Работаем по всей Грузии: Тбилиси, Батуми, Мцхета, Кахетия, Аджария, Квемо-Картли. Условия выезда согласовываются отдельно.',
    },
    {
        question: 'Какие форматы видео доступны: горизонталь, вертикаль, оба?',
        answer:
            'Стандартный формат — горизонтальный 16:9. Вертикальный 9:16 для Reels и Stories добавляется по запросу или входит в расширенные пакеты.',
    },
    {
        question: 'Можно ли наложить границы участка на видео?',
        answer:
            'Да, это отдельная опция. Для наложения нужен кадастровый номер или план участка. Стоимость зависит от сложности графики.',
    },
    {
        question: 'Нужны ли разрешения GCAA для съёмки на моём участке?',
        answer:
            'Для большинства открытых участков вне зон ограничений работаем в рамках стандартных правил. Для локаций рядом с аэропортами и чувствительными зонами заранее проверяем требования и оформляем согласования при необходимости.',
    },
    {
        question: 'Как оформляется заказ?',
        answer:
            'Вы описываете задачу, мы согласовываем объём, дату и стоимость. После подтверждения выезжаем на объект. Договор — по запросу, оплата: 50% предоплата и остаток при передаче материалов.',
    },
    {
        question: 'Как быстро я получу готовый материал?',
        answer:
            'Стандартный срок — 3–5 рабочих дней после съёмочного дня. Срочный монтаж 1–2 дня возможен по согласованию.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Специализация по задачам, а не универсальная съёмка',
        text: 'Мы разделяем форматы по нишам и в съёмке участков делаем акцент на рельеф, масштаб и контекст, а не только на «красивые облёты».',
    },
    {
        title: 'Оборудование DJI Air 3S',
        text: 'Съёмка в 4K, работа в сложном свете, высокая детализация и гибкость постобработки.',
    },
    {
        title: 'Работаем по всей Грузии',
        text: 'Тбилиси, Кахетия, Аджария, Мцхета и другие регионы с учётом рельефа и особенностей локации.',
    },
    {
        title: 'Полный цикл: съёмка + монтаж + финальные файлы',
        text: 'Вы получаете готовый продукт, который можно сразу публиковать в объявлениях, на сайте и в рекламных кампаниях.',
    },
    {
        title: 'Предсказуемые сроки и быстрый старт',
        text: 'Оперативное согласование, съёмка в ближайшее погодное окно и финальные материалы в течение нескольких рабочих дней.',
    },
    {
        title: 'Фокус на результат продажи',
        text: 'Монтаж строится так, чтобы в первые секунды показать ключевые аргументы объекта для покупателя и инвестора.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка и бриф',
        text: 'Вы пишете в мессенджер или через форму, описываете локацию, цель и акценты. Мы уточняем детали и подтверждаем стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Проверка зоны и дата',
        text: 'Перед выездом проверяем ограничения полётов и согласовываем съёмочный слот с учётом погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Оператор выполняет облёт по согласованному плану: периметр, рельеф, окружение, подъездные пути и дополнительные акценты.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и цветокоррекция',
        text: 'Собираем материал в логике продажи: нужные ракурсы, темп и акценты. Цветокоррекция остаётся реалистичной без чрезмерных фильтров.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём видео и фото через Google Drive или WeTransfer. Материалы готовы к публикации сразу после получения.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Пакет 1 — Базовый',
        subtitle: 'Участок для объявления',
        price: 'от 390 ₾',
        duration: 'до 1,5 часов на объекте',
        delivery: '3–5 рабочих дней',
        items: [
            'Аэросъёмка участка до 1 га',
            'Смонтированное видео 60–90 секунд (4K, 16:9)',
            '10 аэрофотографий (JPG, финальная цветокоррекция)',
            'Передача файлов через WeTransfer / Google Drive',
        ],
        addons: [],
    },
    {
        title: 'Пакет 2 — Стандартный',
        subtitle: 'Полный визуальный пакет',
        price: 'от 590 ₾',
        duration: 'до 3 часов на объекте',
        delivery: '3–5 рабочих дней',
        items: [
            'Аэросъёмка участка до 3 га',
            'Смонтированное видео 2–3 минуты (4K, 16:9)',
            'Вертикальная версия 9:16 для Reels/Stories (до 60 секунд)',
            '20 аэрофотографий (JPG, финальная цветокоррекция)',
            'Передача файлов через WeTransfer / Google Drive',
        ],
        addons: [],
        popular: true,
    },
    {
        title: 'Пакет 3 — Девелоперский',
        subtitle: 'Продакшн для девелопера',
        price: 'от 990 ₾',
        duration: 'полный день',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка большого массива / нескольких участков (от 3 га)',
            'Смонтированное видео 2–4 минуты (4K, 16:9)',
            'Вертикальная версия для соцсетей',
            '30+ аэрофотографий',
            'Графическое наложение границ участков (базовая графика)',
            'Передача исходников по договорённости',
        ],
        addons: ['Срочный монтаж (1–2 дня) — +150 ₾', 'Сложное кадастровое наложение — от 200 ₾', 'Дополнительные версии монтажа — от 120 ₾'],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Если на участке уже есть дом или объект, добавьте съёмку недвижимости с акцентом на архитектуру и окружение.',
    },
    {
        title: 'Мониторинг строительства',
        href: '/drone-construction-monitoring',
        text: 'Регулярные облёты фиксируют этапы работ и формируют визуальную историю проекта.',
    },
    {
        title: '360° тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат, который позволяет покупателю удалённо изучить объект через браузер.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Динамичный кинематографический формат для презентаций девелоперских проектов и рекламы.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Съёмка в полдень при жёстком солнце',
        text: 'Резкие тени и выжженные детали ухудшают качество. Для участков лучшее окно — утро и предзакатный свет.',
    },
    {
        title: 'Съёмка только с большой высоты',
        text: 'Панорама красивая, но теряется практическая информация. Нужна комбинация высот и низких проходов.',
    },
    {
        title: 'Не показывают подъездную дорогу',
        text: 'Для покупателя это ключевой фактор. Один проход вдоль маршрута закрывает главный вопрос «как доехать».',
    },
    {
        title: 'Используют только вертикальный формат',
        text: 'Для сайтов и листингов нужен горизонтальный 16:9. Только Reels-формат часто выглядит неполноценным.',
    },
    {
        title: 'Не показывают масштаб в кадре',
        text: 'Без ориентиров зрителю трудно понять размер участка. Нужны понятные объекты в кадре и правильные ракурсы.',
    },
    {
        title: 'Заказывают съёмку без цели',
        text: 'Сценарий «красиво полетать» не заменяет задачу продажи. Нужен шот-лист под конкретный результат.',
    },
];

const freeTips: string[] = [
    'Снимите горизонтальное видео с телефона с самой высокой точки участка — даже базовая панорама лучше, чем только статичные фото.',
    'Добавьте короткий ролик подъезда от известного ориентира или трассы к участку.',
    'Сфотографируйте участок в «золотой час» за час до заката для лучшей детализации рельефа.',
    'Добавьте план участка с кадастровыми границами хотя бы в виде скриншота карты.',
    'Описывайте окружение конкретно: расстояния, ориентиры, доступ к дороге и отсутствие/наличие промзон.',
];

const checklist: string[] = [
    'Участок подготовлен к съёмке или согласовано, что снимаем в текущем состоянии',
    'Подтверждены дата, время и контакт встречающего на объекте',
    'Есть номер ответственного человека на день съёмки',
    'Подготовлен кадастровый номер, если нужно наложение границ',
    'Определена главная цель видео: продажа, инвестор, девелоперский запуск',
    'Согласованы ключевые акценты: подъезд, виды, границы, окружение',
    'Проверена допустимая высота полёта для зоны',
    'Подготовлен удобный канал получения файлов (Google Drive / Dropbox)',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Зачем нужна аэросъёмка для продажи земельного участка?',
        answer:
            'Земля плохо продаётся по наземным фото, потому что покупатель не видит масштаб и окружение. Дрон показывает форму участка, рельеф, подъезды и контекст локации, поэтому решение о просмотре и покупке принимается быстрее и с меньшим количеством «холостых» визитов.',
    },
    {
        question: 'Как дрон помогает работать с иностранными покупателями?',
        answer:
            'Для нерезидента поездка на первичный просмотр связана с расходами и риском. Видео с дрона закрывает этап дистанционного due diligence: покупатель оценивает рельеф, инфраструктуру и расположение, после чего приезжает уже на финальный этап переговоров.',
    },
    {
        question: 'Какие участки особенно выигрывают от аэросъёмки?',
        answer:
            'Лучше всего формат работает для крупных массивов, участков со сложным рельефом, локаций с сильным природным окружением и девелоперских проектов с нарезкой. Также аэросъёмка особенно полезна в сделках с удалёнными покупателями.',
    },
    {
        question: 'Можно ли летать дроном в черте Тбилиси и что с разрешениями?',
        answer:
            'Полёты регулируются GCAA. Во многих пригородных зонах съёмка возможна по стандартным правилам, но в центре и рядом с ограниченными объектами могут потребоваться согласования. Перед выездом мы проверяем зону и при необходимости оформляем нужные уведомления.',
    },
    {
        question: 'Чем аэросъёмка участка отличается от обычной фотографии?',
        answer:
            'Наземная фотография показывает отдельный фрагмент, а аэросъёмка — весь объект в контексте. С высоты видно границы, направление склонов, расстояния до дорог, соседство и природные преимущества. Это делает презентацию участка значительно более убедительной.',
    },
];

const navLinks: NavLink[] = [
    { label: 'Аэросъёмка недвижимости в Тбилиси', href: '/drone-real-estate' },
    { label: 'Мониторинг строительства с дрона', href: '/drone-construction-monitoring' },
    { label: 'Инспекция объектов с воздуха', href: '/drone-object-inspection' },
    { label: 'FPV-съёмка для рекламы и девелопмента', href: '/drone-fpv-cinema' },
    { label: '360° виртуальный тур для недвижимости', href: '/360-tour-real-estate' },
    { label: 'Все услуги аэросъёмки Breus Media', href: '/drone-service' },
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
    name: 'Аэросъёмка земельных участков для продажи и инвестиций в Грузии',
    description:
        'Дрон-видео и фото земельных участков для продажи, девелоперов и инвесторов: рельеф, периметр, подъезды, окружение. Тбилиси, Кахетия, Батуми и вся Грузия.',
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
        '@type': 'Country',
        name: 'Georgia',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '390',
        highPrice: '990',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для недвижимости и девелопмента в Грузии.',
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

export default function DroneLandSalePage() {
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
                id="drone-land-sale-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Land Sale Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка земельных участков для продажи и инвесторов в Грузии
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон-видео показывает рельеф, окружение и границы участка так, как не покажет обычная
                                фотография, и помогает продавать быстрее.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Земельный участок сложно продать по телефонным фото: покупатель не чувствует масштаб и
                                не понимает контекст. За один съёмочный день вы получаете видео и фото, которые
                                показывают рельеф, периметр, подъезды и окружение для листинга, инвестпрезентации или
                                девелоперского запуска в Тбилиси, Батуми, Кахетии и по всей Грузии.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку участка
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры и цены
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 390 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Продажа участка, инвесторы, девелопмент.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1 день</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S, 4K, LOG</li>
                                    <li>Видео + фото + опция наложения границ</li>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка участка и зачем она нужна</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка участка — это видео и фото с дрона, которые показывают территорию сверху: форму
                            участка, рельеф, подъезды, соседние объекты и окружающий ландшафт.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Это не «картинка для соцсетей», а инструмент принятия решения. Покупатель или инвестор
                            сразу видит склон, солнце, удалённость от дороги и характер окружения без лишних визитов.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для девелопера это также документация этапов: состояние участка до расчистки, процесс
                            нарезки и подготовка проекта к старту продаж.
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
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта услуга</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что мешает продавать участки быстро и как это выглядит на практике
                        </h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка влияет на деньги и время</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы не теряете благодаря правильной презентации</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Есть участок под продажу или девелоперский проект в Грузии? Расскажите задачу — подскажем,
                            что можно снять за один день и сколько это будет стоить.
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в съёмку и что вы получаете</h2>
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

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где и как используют аэросъёмку участков в Грузии</h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Как выглядит аэросъёмка участка: концептуальные сценарии
                        </h2>
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

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые стоят за аэросъёмкой участков</h2>
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

            <FaqSection id="faq" items={beginnerFaqItems} title="Вопросы от тех, кто заказывает впервые" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы по деньгам, срокам и деталям работы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему выбирают Breus Media</h2>
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

            <ProcessNote text="Съёмка участка занимает 1 день. Готовый материал — через 3–5 рабочих дней." />

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
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в грузинских лари (₾).</p>
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
                                <p className="mt-2 text-sm text-white/72">Съёмка: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.addons.length > 0 ? (
                                    <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                        <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                            {card.addons.map((item) => (
                                                <li key={item}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой пакет подходит под вашу задачу? Напишите, подскажем оптимальный объём
                            без лишних опций.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в Telegram / WhatsApp
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
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Распространённые ошибки при съёмке участков и почему они стоят денег
                        </h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что улучшить прямо сейчас, даже без заказа дрон-съёмки
                        </h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к аэросъёмке участка</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы о дрон-съёмке земли в Грузии</h2>
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
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы</h2>
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
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку участка</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите локацию, площадь и цель съёмки. Предложим формат, сроки и точный расчёт.
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

                            <LandSaleContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-land-sale-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}
