'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export type DroneCategoryId =
    | 'real-estate-land'
    | 'horeca'
    | 'construction-inspection'
    | 'brands-fpv'
    | 'events-tourism'
    | 'pilot-rental';

export interface DroneCategory {
    id: DroneCategoryId;
    label: string;
    description: string;
}

export interface DroneServiceCard {
    slug: string;
    title: string;
    lsiSubtitle: string;
    categoryIds: DroneCategoryId[];
    status: 'ready' | 'soon';
    href?: string;
    priceAnchor?: string;
    tags: string[];
    description: string;
    whatsappMessage: string;
    image: string; // Keeps the UI working
}

// 2. TABS & DESKTOP ANSWER CAPSULES (AEO) DATA
export const DRONE_CATEGORIES_V14: DroneCategory[] = [
    {
        id: 'real-estate-land',
        label: 'Недвижимость и участки',
        description:
            'Застройщикам и риелторам Тбилиси и Батуми: высотные 4K-облёты ЖК, видовых этажей и границ участков. Подчёркиваем панораму гор, моря и инфраструктуру. Готовый визуал для ускорения продаж на MyHome.ge и SS.ge от 24 часов.',
    },
    {
        id: 'horeca',
        label: 'Отели и рестораны',
        description:
            'Отелям, шале и ресторанам Грузии: единый 4K-пролёт на FPV-дроне сквозь залы, веранды, кухни и rooftop-террасы. Показываем реальную атмосферу места для роста прямых бронирований в Google Maps, Instagram и Booking.',
    },
    {
        id: 'construction-inspection',
        label: 'Стройка и инспекции',
        description:
            'Девелоперам и технадзору: регулярный аэромониторинг стройплощадок, детальная 4K-фотофиксация фасадов, кровли и швов без дорогой аренды автовышек. Точный контроль подрядчиков и отчёты инвесторам за 24–48 часов.',
    },
    {
        id: 'brands-fpv',
        label: 'Бренды и FPV',
        description:
            'Автосалонам, производствам и брендам: скоростная FPV-съёмка динамичных сцен, автомобилей в движении и интерьеров на скорости до 100 км/ч. Готовые захватывающие 4K-видео под алгоритмы Instagram Reels, TikTok и YouTube Shorts.',
    },
    {
        id: 'events-tourism',
        label: 'События и туризм',
        description:
            'Организаторам фестивалей, винодельням Кахетии и тревел-проектам: масштабная аэросъёмка природных локаций, свадеб и спортивных выездов по всей Грузии. Чистый 4K-материал и динамичный монтаж со сдачей от 48 часов.',
    },
    {
        id: 'pilot-rental',
        label: 'Аренда с пилотом',
        description:
            'Частным клиентам и бизнесу без сложных брифов: профессиональный оператор с дронами DJI Air 3S и Avata 2 под ваши задачи. Легальные полёты по Грузии, выезд на объект и передача всех 4K-исходников в день съёмки.',
    },
];

// 3. STRICT CATALOG ITEMS DATA
export const DRONE_SERVICES_ITEMS_V14: DroneServiceCard[] = [
    {
        slug: 'nedvizhimost',
        title: 'Аэросъёмка недвижимости и ЖК',
        lsiSubtitle: 'РИЕЛТОРЫ · ЗАСТРОЙЩИКИ · ПРОДАЖИ',
        categoryIds: ['real-estate-land'],
        status: 'ready',
        href: '/drone-services/drone-real-estate',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'MYHOME.GE', 'SS.GE'],
        description: 'Аэрофото и видео для карточек объектов и инвесторов. 94% больше просмотров получают объявления с аэрофото — по данным HomeJab.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Недвижимость и ЖК. Расскажите подробнее.',
        image: '/media/drone-service/real-estate-1.png',
    },
    {
        slug: 'zemelnye-uchastki',
        title: 'Земельные участки и территории',
        lsiSubtitle: 'ЗАСТРОЙЩИКИ · ДЕВЕЛОПЕРЫ · ИНВЕСТОРЫ',
        categoryIds: ['real-estate-land'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['ОЦЕНКА', 'ПАНОРАМА'],
        description: 'Границы, рельеф, окружение и доступность — всё в одном облёте. Продаёт быстрее любого описания.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Земельные участки. Подскажите условия и даты.',
        image: '/media/drone-service/territory-monitoring-2.png',
    },
    {
        slug: 'oteli-kurorty',
        title: 'Отели и курорты',
        lsiSubtitle: 'ОТЕЛИ · ТУРОПЕРАТОРЫ · ЛОКАЦИИ',
        categoryIds: ['horeca'],
        status: 'ready',
        href: '/drone-services/drone-hotels-tourism',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'АТМОСФЕРА', 'ПРОМО'],
        description: 'Гость выбирает глазами. Снимаем отели, глэмпинги, видовые маршруты и природные локации Грузии для туроператоров, гидов и Booking — контент, который продаёт атмосферу отдыха.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Отели и курорты. Расскажите подробнее.',
        image: '/media/drone-service/hotels-resorts-5.png',
    },
    {
        slug: 'restorany',
        title: 'Рестораны и террасы',
        lsiSubtitle: 'ВЕРАНДЫ · ЛОКАЦИИ · АТМОСФЕРА',
        categoryIds: ['horeca'],
        status: 'ready',
        href: '/drone-services/drone-restaurants',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'REELS', 'STORIES'],
        description: 'Терраса на крыше, двор с зеленью, расположение в квартале — всё это видно с воздуха. Гость понимает куда едет ещё до того как забронировал столик.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Рестораны и террасы. Расскажите подробнее.',
        image: '/media/drone-service/restaurants-3.png',
    },
    {
        slug: 'turizm',
        title: 'Туризм и travel-локации',
        lsiSubtitle: 'ГИДЫ · МАРШРУТЫ · ПРИРОДА',
        categoryIds: ['events-tourism'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'ПРИРОДА', 'ЭКСПЕДИЦИИ'],
        description: 'Видовые природные локации, каньоны, горные перевалы и исторические памятники Грузии для промо туров и тревел-проектов.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Туризм и локации. Подскажите условия и даты.',
        image: '/media/drone-service/tourism-6.png',
    },
    {
        slug: 'monitoring-stroiki',
        title: 'Мониторинг хода строительства',
        lsiSubtitle: 'ДЕВЕЛОПЕРЫ · БАНКИ · ПОДРЯДЧИКИ',
        categoryIds: ['construction-inspection', 'real-estate-land'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'GPS', 'ОТЧЁТЫ'],
        description: 'Стройка идёт — но как на самом деле? Еженедельный облёт фиксирует этапы и даёт инвестору честную картину без выезда.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Мониторинг стройки. Подскажите условия и даты.',
        image: '/media/drone-service/construction-monitoring-1.png',
    },
    {
        slug: 'regulyarnye-aerootchety',
        title: 'Регулярные аэроотчёты для инвесторов',
        lsiSubtitle: 'БАНКИ · ИНВЕСТОРЫ · УПРАВЛЯЮЩИЕ',
        categoryIds: ['construction-inspection', 'real-estate-land'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'GPS', 'ПРОГРЕСС'],
        description: 'Еженедельные облёты с GPS-отчётом — инвестор видит динамику объекта без выезда на стройку.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Регулярные аэроотчёты. Подскажите условия и даты.',
        image: '/media/drone-service/reporting-1.png',
    },
    {
        slug: 'inspekciya-obektov',
        title: 'Инспекция объектов и конструкций',
        lsiSubtitle: 'ФАСАДЫ · КРЫШИ · ПРОИЗВОДСТВО',
        categoryIds: ['construction-inspection'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['4K', 'ДОКУМЕНТАЦИЯ'],
        description: 'Визуальная диагностика труднодоступных конструкций, кровель и фасадов без установки строительных лесов.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Инспекция объектов. Подскажите условия и даты.',
        image: '/media/drone-service/object-inspection-from-territory-1.png',
    },
    {
        slug: 'inspekciya-fasadov',
        title: 'Инспекция фасадов зданий',
        lsiSubtitle: 'ЭКСПЛУАТАЦИЯ · ИНЖЕНЕРЫ · ПАНЕЛИ',
        categoryIds: ['construction-inspection'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['ДИАГНОСТИКА', 'ШВЫ'],
        description: 'Полный облёт фасада с видео — без лесов, без риска для персонала и без остановки объекта. Материал передаётся вашим специалистам.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Инспекция фасадов. Подскажите условия и даты.',
        image: '/media/drone-service/drone-facade-2.png',
    },
    {
        slug: 'inspekciya-krysh',
        title: 'Инспекция кровли и водостоков',
        lsiSubtitle: 'КРОВЛЯ · ВОДОСТОКИ · ДИАГНОСТИКА',
        categoryIds: ['construction-inspection'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['ВЫСОТА', 'БЕЗОПАСНОСТЬ', '4K'],
        description: 'Детальная 4K-фотофиксация кровли, примыканий и водостоков без выхода людей на высоту и риска повреждения покрытия.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Инспекция крыш и кровли. Подскажите условия и даты.',
        image: '/media/drone-service/roof-inspection-1.png',
    },
    {
        slug: 'inspekciya-solnechnyh-paneley',
        title: 'Инспекция солнечных панелей',
        lsiSubtitle: 'ЭНЕРГЕТИКИ · ОПЕРАТОРЫ · ИНВЕСТОРЫ',
        categoryIds: ['construction-inspection'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['КОНТРОЛЬ', 'ЭФФЕКТИВНОСТЬ'],
        description: 'Грязь и повреждения снижают выработку панелей до 30%. Один облёт с видео — и у вашего инженера есть полная картина без подъёма на крышу.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Инспекция солнечных панелей. Подскажите условия и даты.',
        image: '/media/drone-service/roof-inspection-1.png',
    },
    {
        slug: 'fpv-semka',
        title: 'FPV-пролёты интерьеров',
        lsiSubtitle: 'ДИНАМИКА · ИНТЕРЬЕРЫ · ЭКШН',
        categoryIds: ['brands-fpv', 'horeca'],
        status: 'soon',
        priceAnchor: 'от 300 ₾',
        tags: ['4K', 'ПРОЛЁТ ВНУТРИ'],
        description: 'Показываем коммерческое пространство изнутри одним кадром — от входа до последней зоны. Инвестор или арендатор понимает объект ещё до встречи.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: FPV Съёмка. Подскажите условия и даты.',
        image: '/media/drone-service/fpv-2.png',
    },
    {
        slug: 'aerosyemka-dlya-avto-i-avtosalonov',
        title: 'Аэросъёмка для автосалонов',
        lsiSubtitle: 'АВТОПЛОЩАДКИ · ДИЛЕРЫ · СЕТИ',
        categoryIds: ['brands-fpv'],
        status: 'soon',
        priceAnchor: 'от 450 ₾',
        tags: ['4K', 'ПРОДАЖИ', 'АВТО'],
        description: 'Покупатель выбирает глазами. Показываем весь ассортимент, площадку и инфраструктуру салона одним пролётом.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Автосалоны и шоурумы. Подскажите условия и даты.',
        image: '/media/drone-service/auto-showroom-1.png',
    },
    {
        slug: 'interiery-sklady',
        title: 'Интерьеры складов и логистика',
        lsiSubtitle: 'ШОУРУМЫ · МАГАЗИНЫ · АРЕНДАТОРЫ',
        categoryIds: ['brands-fpv'],
        status: 'soon',
        priceAnchor: 'от 300 ₾',
        tags: ['FPV', 'ПЛАНИРОВКА'],
        description: 'Дрон пролетает сквозь стеллажи, проёмы и цеха — туда, куда камера на штативе не попадёт. Один дубль — и пространство читается.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Съёмка интерьеров и складов. Подскажите условия и даты.',
        image: '/media/drone-service/interiors-warehouses-1.png',
    },
    {
        slug: 'sport-kompleksy',
        title: 'Спортивные комплексы и залы',
        lsiSubtitle: 'СТАДИОНЫ · АРЕНЫ · КОРТЫ',
        categoryIds: ['brands-fpv'],
        status: 'soon',
        priceAnchor: 'от 450 ₾',
        tags: ['4K', '60FPS', 'ОБЛЁТ'],
        description: 'Арена выглядит масштабно только с воздуха. Снимаем поля, трибуны и инфраструктуру — для сайта, инвесторов и соцсетей.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Спорт комплексы. Подскажите условия и даты.',
        image: '/media/drone-service/sport-complex-1.png',
    },
    {
        slug: 'meropriyatiya',
        title: 'Мероприятия и фестивали',
        lsiSubtitle: 'ИВЕНТЫ · ОТКРЫТИЯ · СВАДЬБЫ',
        categoryIds: ['events-tourism'],
        status: 'soon',
        priceAnchor: 'от 450 ₾',
        tags: ['4K', 'СПОРТ', 'СОБЫТИЯ'],
        description: 'С земли — толпа. С воздуха — масштаб, энергия и атмосфера события. Готовое видео за 48 часов.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Мероприятия. Подскажите условия и даты.',
        image: '/media/drone-service/events-1.png',
    },
    {
        slug: 'reklama-brand-video',
        title: 'Реклама и бренд-видео',
        lsiSubtitle: 'БРЕНДЫ · КОРПОРАТИВЫ · ПРОДУКТЫ',
        categoryIds: ['events-tourism'],
        status: 'soon',
        priceAnchor: 'от 700 ₾',
        tags: ['4K', 'ПРОМО', 'МОНТАЖ'],
        description: 'Воздушные кадры, сценарий и монтаж в одном проекте. Видео, которое работает в рекламе, на сайте и в соцсетях.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Реклама и бренд видео. Подскажите условия и даты.',
        image: '/media/drone-service/brand-video-1.png',
    },
    {
        slug: 'agro-i-vinodelie',
        title: 'Агробизнес и винодельни (Шато)',
        lsiSubtitle: 'БРЕНДЫ · ИНВЕСТОРЫ · ШАТО',
        categoryIds: ['events-tourism'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['АНАЛИТИКА', 'АГРОБИЗНЕС'],
        description: 'Грузинское вино начинается с лозы. Аэросъёмка виноградников и хозяйств — для мониторинга урожая и промо бренда.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Агро и виноделие. Подскажите условия и даты.',
        image: '/media/drone-service/agro-wine-1.png',
    },
    {
        slug: 'arenda-drona-s-pilotom',
        title: 'Аренда дрона с пилотом',
        lsiSubtitle: 'ОПЕРАТОР · ПОЧАСОВАЯ · ТБИЛИСИ / БАТУМИ',
        categoryIds: ['pilot-rental'],
        status: 'soon',
        priceAnchor: 'от 200 ₾',
        tags: ['DJI AIR 3S', 'AVATA 2'],
        description: 'Опытный пилот с дронами DJI Air 3S и Avata 2 под ваши задачи. Легальные вылеты по Грузии и передача всех исходников 4K сразу.',
        whatsappMessage: 'Здравствуйте! Интересует услуга: Аренда дрона с пилотом. Подскажите условия и даты.',
        image: '/media/drone-service/object-inspection-1.png',
    },
];

export const DroneServicesCatalogV14 = () => {
    const [activeTab, setActiveTab] = useState<DroneCategoryId>('real-estate-land');
    const carouselRef = useRef<HTMLDivElement>(null);
    const isFirstMount = useRef(true);

    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
            return; // Блокируем автоскролл при первичной загрузке страницы
        }
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeTab]);

    // Get strictly filtered and sorted items
    const filteredItems = useMemo(() => {
        let items = DRONE_SERVICES_ITEMS_V14.filter((item) => item.categoryIds.includes(activeTab));

        // Sort: "ready" items first
        return items.sort((a, b) => {
            if (a.status === 'ready' && b.status !== 'ready') return -1;
            if (a.status !== 'ready' && b.status === 'ready') return 1;
            return 0;
        });
    }, [activeTab]);

    // Active Category Data for Answer Capsule
    const activeCategoryData = DRONE_CATEGORIES_V14.find((c) => c.id === activeTab);
        
    const hasReadyItems = filteredItems.some(i => i.status === 'ready');

    return (
        <DebugWrapper id="drone-services-catalog-v14" className="w-full bg-black py-10 md:py-20 border-t border-white/10">
            <section className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
                <div className="px-4 md:px-6 flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[22px] sm:text-2xl md:text-5xl font-black text-white uppercase tracking-tight whitespace-nowrap">
                            Направления съёмки
                        </h2>
                        <p className="text-xs md:text-sm text-neutral-400 font-medium tracking-normal whitespace-nowrap overflow-hidden text-ellipsis">
                            18 направлений съёмки для бизнеса и частных задач
                        </p>
                    </div>

                    {/* Category Tabs: 2-col 3-row grid on mobile, horizontal scroll on desktop */}
                    <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/5 md:flex md:overflow-x-auto md:gap-3 md:pb-4 no-scrollbar">
                        {DRONE_CATEGORIES_V14.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-2.5 py-3 md:px-5 md:py-2.5 rounded-xl md:rounded-full text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center text-center leading-tight min-h-[48px] md:min-h-0 ${
                                    activeTab === cat.id
                                        ? 'bg-[#D4A017] text-black shadow-[0_0_20px_rgba(212,160,23,0.3)]'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Answer Capsule (AEO) */}
                    {activeCategoryData && (
                        <div className="md:hidden px-4 mt-2 mb-[-0.5rem]">
                            <div className="bg-[#111] border border-white/10 rounded-xl p-3.5 shadow-lg">
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    {activeCategoryData.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Desktop Answer Capsule (AEO) */}
                    {activeCategoryData && (
                        <div className="hidden md:block w-full max-w-3xl">
                            <div className="bg-[#111] border border-white/10 rounded-2xl p-5 shadow-lg">
                                <p className="text-sm text-neutral-300 leading-relaxed max-w-4xl">
                                    {activeCategoryData.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. HORIZONTAL SNAP CAROUSEL */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 px-4 md:px-6 scroll-pl-4 md:scroll-pl-6 pb-6 md:pb-12 no-scrollbar"
                >
                    {filteredItems.map((item) => {
                        const isReady = item.status === 'ready' && !!item.href;

                        return (
                            <div
                                key={item.slug}
                                className="w-[85vw] max-w-[340px] shrink-0 snap-start bg-[#111] rounded-[20px] overflow-hidden border border-white/5 flex flex-col hover:border-white/15 transition-all duration-300"
                            >
                                {/* Photo Header */}
                                <div className="h-44 relative overflow-hidden bg-[#1a1a1a]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent pointer-events-none" />

                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 z-10">
                                        {isReady ? (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                Готово к просмотру
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-neutral-900/80 text-white/50 border border-white/10 backdrop-blur-md">
                                                Скоро
                                            </span>
                                        )}
                                    </div>

                                    {/* Title in Header */}
                                    <div className="absolute bottom-4 left-4 right-4 z-10">
                                        <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Text Block */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">
                                            {item.lsiSubtitle}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed mb-4 flex-grow min-h-[48px]">
                                        {item.description}
                                    </p>

                                    {/* Price & Specs */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-sm font-bold text-[#D4A017]">{item.priceAnchor}</span>
                                        {item.priceAnchor && item.tags.length > 0 && (
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                        )}
                                        <span className="text-[10px] font-bold text-white/60 tracking-wider uppercase truncate">
                                            {item.tags.join(' · ')}
                                        </span>
                                    </div>

                                    {/* Buttons Logic */}
                                    <div className="flex items-center gap-2 mt-auto">
                                        {isReady ? (
                                            <>
                                                <Link
                                                    href={item.href!}
                                                    className="flex-1 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/5 text-white py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all text-center"
                                                >
                                                    Открыть
                                                </Link>
                                                <a
                                                    href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Интересует услуга: ${item.title}. Подскажите условия и дату выезда.`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center bg-[#D4A017] hover:bg-amber-300 text-black py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)] text-center"
                                                >
                                                    Обсудить
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {/* Non-clickable badge for "soon" to avoid any anchor jumps */}
                                                <span className="flex-1 px-3 py-1.5 text-xs text-zinc-400 bg-zinc-800/60 rounded-[10px] border border-zinc-700/40 select-none cursor-default flex items-center justify-center font-semibold uppercase tracking-wider">
                                                    В разработке
                                                </span>
                                                <a
                                                    href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Интересует услуга: ${item.title}. Подскажите условия и дату выезда.`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center bg-[#D4A017] hover:bg-amber-300 text-black py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)] text-center"
                                                >
                                                    Обсудить
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </DebugWrapper>
    );
};
