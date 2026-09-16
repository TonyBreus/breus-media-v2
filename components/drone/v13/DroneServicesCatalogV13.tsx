'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export type DroneCategory = {
    id: string;
    label: string;
    description: string;
};

export type DroneCatalogItem = {
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    specs: string;
    image: string;
    status: 'ready' | 'soon';
    primaryHref?: string;
    categoryId: string;
};

export const DRONE_CATEGORIES_V13: DroneCategory[] = [
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

export const DRONE_SERVICES_ITEMS_V13: DroneCatalogItem[] = [
    // 1. real-estate-land
    {
        slug: 'nedvizhimost',
        title: 'Недвижимость и ЖК',
        category: 'РИЕЛТОРЫ · ЗАСТРОЙЩИКИ · ПРОДАЖИ',
        description: 'Аэрофото и видео для карточек объектов и инвесторов. 94% больше просмотров получают объявления с аэрофото — по данным HomeJab.',
        price: 'от 200 ₾',
        specs: '4K · MYHOME.GE · SS.GE',
        image: '/media/drone-service/real-estate-1.png',
        status: 'ready',
        primaryHref: '/drone-services/drone-real-estate',
        categoryId: 'real-estate-land',
    },
    {
        slug: 'zemelnye-uchastki',
        title: 'Земельные участки',
        category: 'ЗАСТРОЙЩИКИ · ДЕВЕЛОПЕРЫ · ИНВЕСТОРЫ',
        description: 'Границы, рельеф, окружение и доступность — всё в одном облёте. Продаёт быстрее любого описания.',
        price: 'от 200 ₾',
        specs: 'ОЦЕНКА · ПАНОРАМА',
        image: '/media/drone-service/territory-monitoring-2.png',
        status: 'soon',
        categoryId: 'real-estate-land',
    },

    // 2. horeca
    {
        slug: 'oteli-kurorty',
        title: 'Отели и курорты',
        category: 'ОТЕЛИ · ТУРОПЕРАТОРЫ · ЛОКАЦИИ',
        description: 'Гость выбирает глазами. Снимаем отели, глэмпинги, видовые маршруты и природные локации Грузии для туроператоров, гидов и Booking — контент, который продаёт атмосферу отдыха.',
        price: 'от 200 ₾',
        specs: '4K · АТМОСФЕРА · ПРОМО',
        image: '/media/drone-service/hotels-resorts-5.png',
        status: 'ready',
        primaryHref: '/drone-services/drone-hotels-tourism',
        categoryId: 'horeca',
    },
    {
        slug: 'restorany',
        title: 'Рестораны и террасы',
        category: 'ВЕРАНДЫ · ЛОКАЦИИ · АТМОСФЕРА',
        description: 'Терраса на крыше, двор с зеленью, расположение в квартале — всё это видно с воздуха. Гость понимает куда едет ещё до того как забронировал столик.',
        price: 'от 200 ₾',
        specs: '4K · REELS · STORIES',
        image: '/media/drone-service/restaurants-3.png',
        status: 'ready',
        primaryHref: '/drone-services/drone-restaurants',
        categoryId: 'horeca',
    },
    {
        slug: 'turizm',
        title: 'Туризм и локации',
        category: 'ГИДЫ · МАРШРУТЫ · ПРИРОДА',
        description: 'Видовые природные локации, каньоны, горные перевалы и исторические памятники Грузии для промо туров и тревел-проектов.',
        price: 'от 200 ₾',
        specs: '4K · ПРИРОДА · ЭКСПЕДИЦИИ',
        image: '/media/drone-service/tourism-6.png',
        status: 'soon',
        categoryId: 'horeca',
    },

    // 3. construction-inspection
    {
        slug: 'monitoring-stroiki',
        title: 'Мониторинг стройки',
        category: 'ДЕВЕЛОПЕРЫ · БАНКИ · ПОДРЯДЧИКИ',
        description: 'Стройка идёт — но как на самом деле? Еженедельный облёт фиксирует этапы и даёт инвестору честную картину без выезда.',
        price: 'от 200 ₾',
        specs: '4K · GPS · ОТЧЁТЫ',
        image: '/media/drone-service/construction-monitoring-1.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },
    {
        slug: 'regulyarnye-aerootchety',
        title: 'Регулярные аэроотчёты',
        category: 'БАНКИ · ИНВЕСТОРЫ · УПРАВЛЯЮЩИЕ',
        description: 'Еженедельные облёты с GPS-отчётом — инвестор видит динамику объекта без выезда на стройку.',
        price: 'от 200 ₾',
        specs: '4K · GPS · ПРОГРЕСС',
        image: '/media/drone-service/reporting-1.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },
    {
        slug: 'inspekciya-obektov',
        title: 'Инспекция объектов',
        category: 'ФАСАДЫ · КРЫШИ · ПРОИЗВОДСТВО',
        description: 'Визуальная диагностика труднодоступных конструкций, кровель и фасадов без установки строительных лесов.',
        price: 'от 200 ₾',
        specs: '4K · ДОКУМЕНТАЦИЯ',
        image: '/media/drone-service/object-inspection-from-territory-1.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },
    {
        slug: 'inspekciya-fasadov',
        title: 'Инспекция фасадов',
        category: 'ЭКСПЛУАТАЦИЯ · ИНЖЕНЕРЫ · ПАНЕЛИ',
        description: 'Полный облёт фасада с видео — без лесов, без риска для персонала и без остановки объекта. Материал передаётся вашим специалистам.',
        price: 'от 200 ₾',
        specs: 'ДИАГНОСТИКА · ШВЫ',
        image: '/media/drone-service/drone-facade-2.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },
    {
        slug: 'inspekciya-krysh',
        title: 'Инспекция крыш и кровли',
        category: 'КРОВЛЯ · ВОДОСТОКИ · ДИАГНОСТИКА',
        description: 'Детальная 4K-фотофиксация кровли, примыканий и водостоков без выхода людей на высоту и риска повреждения покрытия.',
        price: 'от 200 ₾',
        specs: 'ВЫСОТА · БЕЗОПАСНОСТЬ · 4K',
        image: '/media/drone-service/roof-inspection-1.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },
    {
        slug: 'inspekciya-solnechnyh-paneley',
        title: 'Инспекция солнечных панелей',
        category: 'ЭНЕРГЕТИКИ · ОПЕРАТОРЫ · ИНВЕСТОРЫ',
        description: 'Грязь и повреждения снижают выработку панелей до 30%. Один облёт с видео — и у вашего инженера есть полная картина без подъёма на крышу.',
        price: 'от 200 ₾',
        specs: 'КОНТРОЛЬ · ЭФФЕКТИВНОСТЬ',
        image: '/media/drone-service/roof-inspection-1.png',
        status: 'soon',
        categoryId: 'construction-inspection',
    },

    // 4. brands-fpv
    {
        slug: 'fpv-semka',
        title: 'FPV Съёмка',
        category: 'ДИНАМИКА · ИНТЕРЬЕРЫ · ЭКШН',
        description: 'Показываем коммерческое пространство изнутри одним кадром — от входа до последней зоны. Инвестор или арендатор понимает объект ещё до встречи.',
        price: 'от 300 ₾',
        specs: '4K · ПРОЛЁТ ВНУТРИ',
        image: '/media/drone-service/fpv-2.png',
        status: 'soon',
        categoryId: 'brands-fpv',
    },
    {
        slug: 'aerosyemka-dlya-avto-i-avtosalonov',
        title: 'Автосалоны и шоурумы',
        category: 'АВТОПЛОЩАДКИ · ДИЛЕРЫ · СЕТИ',
        description: 'Покупатель выбирает глазами. Показываем весь ассортимент, площадку и инфраструктуру салона одним пролётом.',
        price: 'от 200 ₾',
        specs: '4K · ПРОДАЖИ · АВТО',
        image: '/media/drone-service/auto-showroom-1.png',
        status: 'soon',
        categoryId: 'brands-fpv',
    },
    {
        slug: 'interiery-sklady',
        title: 'Съёмка интерьеров и складов',
        category: 'ШОУРУМЫ · МАГАЗИНЫ · АРЕНДАТОРЫ',
        description: 'Дрон пролетает сквозь стеллажи, проёмы и цеха — туда, куда камера на штативе не попадёт. Один дубль — и пространство читается.',
        price: 'от 200 ₾',
        specs: 'FPV · ПЛАНИРОВКА',
        image: '/media/drone-service/interiors-warehouses-1.png',
        status: 'soon',
        categoryId: 'brands-fpv',
    },
    {
        slug: 'sport-kompleksy',
        title: 'Спорт комплексы',
        category: 'СТАДИОНЫ · АРЕНЫ · КОРТЫ',
        description: 'Арена выглядит масштабно только с воздуха. Снимаем поля, трибуны и инфраструктуру — для сайта, инвесторов и соцсетей.',
        price: 'от 200 ₾',
        specs: '4K · 60FPS · ОБЛЁТ',
        image: '/media/drone-service/sport-complex-1.png',
        status: 'soon',
        categoryId: 'brands-fpv',
    },

    // 5. events-tourism
    {
        slug: 'meropriyatiya',
        title: 'Мероприятия',
        category: 'ИВЕНТЫ · ОТКРЫТИЯ · СВАДЬБЫ',
        description: 'С земли — толпа. С воздуха — масштаб, энергия и атмосфера события. Готовое видео за 48 часов.',
        price: 'от 200 ₾',
        specs: '4K · СПОРТ · СОБЫТИЯ',
        image: '/media/drone-service/events-1.png',
        status: 'soon',
        categoryId: 'events-tourism',
    },
    {
        slug: 'reklama-brand-video',
        title: 'Реклама и бренд видео',
        category: 'БРЕНДЫ · КОРПОРАТИВЫ · ПРОДУКТЫ',
        description: 'Воздушные кадры, сценарий и монтаж в одном проекте. Видео, которое работает в рекламе, на сайте и в соцсетях.',
        price: 'от 200 ₾',
        specs: '4K · ПРОМО · МОНТАЖ',
        image: '/media/drone-service/brand-video-1.png',
        status: 'soon',
        categoryId: 'events-tourism',
    },
    {
        slug: 'agro-i-vinodelie',
        title: 'Агро и виноделие',
        category: 'БРЕНДЫ · ИНВЕСТОРЫ · ШАТО',
        description: 'Грузинское вино начинается с лозы. Аэросъёмка виноградников и хозяйств — для мониторинга урожая и промо бренда.',
        price: 'от 200 ₾',
        specs: 'АНАЛИТИКА · АГРОБИЗНЕС',
        image: '/media/drone-service/agro-wine-1.png',
        status: 'soon',
        categoryId: 'events-tourism',
    },

    // 6. pilot-rental
    {
        slug: 'arenda-s-pilotom',
        title: 'Аренда дрона с пилотом',
        category: 'ОПЕРАТОР · ПОЧАСОВАЯ · ТБИЛИСИ / БАТУМИ',
        description: 'Опытный пилот с дронами DJI Air 3S и Avata 2 под ваши задачи. Легальные вылеты по Грузии и передача всех исходников 4K сразу.',
        price: 'от 200 ₾',
        specs: 'DJI AIR 3S · AVATA 2',
        image: '/media/drone-service/object-inspection-1.png',
        status: 'soon',
        categoryId: 'pilot-rental',
    },
];

export const DroneServicesCatalogV13: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const carouselRef = useRef<HTMLDivElement>(null);

    // Filter and sort items:
    // In 'all', ready cards always come first!
    const filteredItems = useMemo(() => {
        let items = DRONE_SERVICES_ITEMS_V13;
        if (activeCategory !== 'all') {
            items = items.filter((item) => item.categoryId === activeCategory);
        }

        // Sort: status 'ready' first, then 'soon'
        return [...items].sort((a, b) => {
            if (a.status === 'ready' && b.status !== 'ready') return -1;
            if (a.status !== 'ready' && b.status === 'ready') return 1;
            return 0;
        });
    }, [activeCategory]);

    const activeCategoryData = useMemo(() => {
        if (activeCategory === 'all') return null;
        return DRONE_CATEGORIES_V13.find((cat) => cat.id === activeCategory) || null;
    }, [activeCategory]);

    const handleCategoryChange = (catId: string) => {
        setActiveCategory(catId);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const generateWaLink = (title: string, status: 'ready' | 'soon') => {
        if (status === 'soon') {
            const text = encodeURIComponent(
                `Здравствуйте! Интересует услуга: ${title}. Подскажите условия и даты.`
            );
            return `https://wa.me/995501103183?text=${text}`;
        }
        const text = encodeURIComponent(`Здравствуйте! Интересует услуга: ${title}. Расскажите подробнее.`);
        return `https://wa.me/995501103183?text=${text}`;
    };

    return (
        <DebugWrapper id={11013} label="Drone Services Catalog V13">
            <section className="py-8 md:py-16 bg-[#080808]">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    {/* Header with Title & Count */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                                Направления съёмки
                            </h2>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 font-semibold">
                                {filteredItems.length} {filteredItems.length === 1 ? 'услуга' : filteredItems.length < 5 ? 'услуги' : 'услуг'}
                            </span>
                        </div>
                        <p className="text-xs text-neutral-400">
                            Съёмка снаружи на дроны DJI и FPV-пролёты в интерьерах
                        </p>
                    </div>

                    {/* Category Filter Tabs */}
                    {/* Mobile: single-row horizontal scroll (no-scrollbar gap-2 px-4) */}
                    {/* Desktop: flex-wrap with crisp styling */}
                    <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
                        {/* Tab "Все" */}
                        <button
                            type="button"
                            onClick={() => handleCategoryChange('all')}
                            className={`shrink-0 text-left py-2 px-3.5 text-xs font-medium rounded-xl transition-all ${
                                activeCategory === 'all'
                                    ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                                    : 'bg-neutral-900/90 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            Все ({DRONE_SERVICES_ITEMS_V13.length})
                        </button>

                        {/* 6 Category Tabs */}
                        {DRONE_CATEGORIES_V13.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            const count = DRONE_SERVICES_ITEMS_V13.filter((i) => i.categoryId === cat.id).length;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`shrink-0 text-left py-2 px-3.5 text-xs font-medium rounded-xl transition-all flex items-center gap-2 ${
                                        isActive
                                            ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                                            : 'bg-neutral-900/90 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                                            isActive
                                                ? 'bg-black/20 text-black font-bold'
                                                : 'bg-white/10 text-white/50'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop Answer Capsule (Only when category is selected, no prices) */}
                    {activeCategoryData && (
                        <div className="hidden md:flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-[#141414] to-neutral-950 border border-amber-400/25 backdrop-blur-md mb-6 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                            <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[11px] uppercase tracking-wider font-bold text-amber-400/90 mb-1 flex items-center gap-2">
                                    <span>Фокус направления</span>
                                    <span className="text-white/30">·</span>
                                    <span className="text-white/90">{activeCategoryData.label}</span>
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed max-w-4xl">
                                    {activeCategoryData.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Horizontal Snap Carousel */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 px-4 md:px-6 pb-6 no-scrollbar"
                >
                    {filteredItems.map((item) => {
                        const isReady = item.status === 'ready' && !!item.primaryHref;

                        return (
                            <div
                                key={item.slug}
                                className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-[#111] rounded-[20px] overflow-hidden border border-white/5 flex flex-col hover:border-white/15 transition-all duration-300"
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
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed mb-4 flex-grow min-h-[48px]">
                                        {item.description}
                                    </p>

                                    {/* Price & Specs */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-sm font-bold text-[#D4A017]">{item.price}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className="text-[10px] font-bold text-white/60 tracking-wider uppercase truncate">
                                            {item.specs}
                                        </span>
                                    </div>

                                    {/* Buttons Logic */}
                                    <div className="flex items-center gap-2 mt-auto">
                                        {isReady ? (
                                            <>
                                                <Link
                                                    href={item.primaryHref!}
                                                    className="flex-1 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/5 text-white py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all text-center"
                                                >
                                                    Открыть
                                                </Link>
                                                <a
                                                    href={generateWaLink(item.title, 'ready')}
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
                                                <div className="flex-1 flex items-center justify-center border border-white/10 bg-white/[0.04] text-white/40 py-2.5 rounded-[10px] text-[11px] font-semibold uppercase tracking-wider cursor-default select-none text-center">
                                                    В разработке
                                                </div>
                                                <a
                                                    href={generateWaLink(item.title, 'soon')}
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
