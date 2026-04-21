"use client";
import React, { useEffect, useRef, useState } from "react";
import { DebugWrapper } from "../debug/DebugWrapper";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { ArrowDown, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, X, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { gazetaDetailRoutes, gazetaNicheLandingRoutes } from "@/constants/gazetaRoutes";
import { l2DirectionConfigs } from "@/constants/l2DirectionConfigs";
import type { L2ServiceItem } from "@/components/l2-direction/types";
import { droneServiceItems, type DroneServiceItem } from "@/components/drone/droneServicesData";
import { realEstateServiceItems, type RealEstateServiceItem } from "@/components/real-estate-service/realEstateServicesData";
import { useMobileLandscape } from "@/hooks/useMobileLandscape";
import { useMobilePortrait } from "@/hooks/useMobilePortrait";
import { DroneContactStitch } from "@/components/drone/DroneContactStitch";
import { GazetaMinimalFooter } from "@/components/gazeta/GazetaMinimalFooter";
import aiMenuDeliveryImageTwo from "@/services-images/ai-menu-delivery/final/2.png";

const {
    aiContent,
    auto,
    clinics,
    droneService,
    objectInspection,
    events,
    hotels,
    it,
    monitoringStroiki,
    promoVideo,
    realEstate,
    reels,
    restaurants,
    tourism,
    tours360,
} = gazetaDetailRoutes;

const introIndustries = [
    { title: "Одежда и производство" },
    { title: "Туризм и экскурсии" },
    { title: "Аренда и прокат" },
    { title: "Авто сервисы / детейлинг" },
    { title: "Недвижимость в Таиланде" },
    { title: "Отели и апартаменты" },
    { title: "Retail и продуктовый контент" },
    { title: "Фитнес и тренерство" },
    { title: "Спорт-комплексы и теннис" },
    { title: "Самолётные туры" },
    { title: "Рыбалка и рыболовный туризм" },
    { title: "Мототуры" },
];

const niches: NicheItem[] = [
    {
        id: "01",
        title: "Агентство",
        isIntro: true,
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    },
    {
        id: "02",
        title: "АЭРОСЪЁМКА",
        centerText: "АЭРОСЪЁМКА",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&q=80",
        detailedContent: {
            eyebrow: "",
            heading: "Аэросъёмка",
            subheading: "Съёмка с дрона в Тбилиси и по Грузии",
            introNote: "Облёты объектов, съёмка стройки, интерьеров с FPV-дрона и готовые ролики — под задачи бизнеса и частные проекты.",
            services: [
                {
                    title: "Недвижимость",
                    eyebrow: "Продажи объектов",
                    desc: "Аэрофото и видео для листингов, инвест-презентаций и продаж. Объекты с аэровидео продаются на 68% быстрее.",
                    meta: "Фото, видео и вид на район",
                    cta: "Открыть услугу",
                    link: "/drone-real-estate",
                    img: "https://images.unsplash.com/photo-1512453979436-5a5369614333?w=800&q=80"
                },
                {
                    title: "Мониторинг стройки",
                    eyebrow: "Стройка и девелопмент",
                    desc: "Еженедельные облёты с GPS-привязкой. PDF-отчёты о прогрессе для инвесторов без выезда на площадку.",
                    meta: "Регулярные облёты + PDF",
                    cta: "Открыть услугу",
                    link: "/drone-construction-monitoring",
                    img: "https://images.unsplash.com/photo-1541888086225-ee5a006c6426?w=800&q=80"
                },
                {
                    title: "Инспекция объектов",
                    eyebrow: "Технические осмотры",
                    desc: "Визуальная диагностика без лесов и промальпинистов. Быстрее, безопаснее и дешевле проверки людьми.",
                    meta: "Без лесов и лишнего риска",
                    cta: "Открыть услугу",
                    link: "/drone-object-inspection",
                    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                },
                {
                    title: "Отели и курорты",
                    eyebrow: "Hospitality",
                    desc: "Hero-ролики территории и номеров для сайта, Booking и соцсетей. Гости бронируют там, где видят атмосферу.",
                    meta: "Hero-ролик территории",
                    cta: "Открыть услугу",
                    link: "/drone-hotels-tourism",
                    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                },
                {
                    title: "Рестораны",
                    eyebrow: "HoReCa",
                    desc: "Аэросъёмка открытых террас, ресторанов на крышах и за городом. Контент, который приводит гостей.",
                    meta: "Терраса, крыша, локация",
                    cta: "Открыть услугу",
                    link: "/drone-services/drone-restaurants",
                    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                },
                {
                    title: "FPV-пролёты",
                    eyebrow: "Внутри и снаружи",
                    tag: "FPV-СЪЁМКА",
                    tagAccent: true,
                    desc: "Cinematic пролёты изнутри и снаружи. FPV-дрон там, где обычный не пролетит — залы, арки, цеха.",
                    meta: "Один непрерывный проход",
                    cta: "Открыть услугу",
                    link: "/drone-service",
                    img: "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?w=800&q=80"
                },
                {
                    title: "Реклама и ролики",
                    eyebrow: "Бренд-контент",
                    desc: "Рекламные ролики, брендовый контент и корпоративное видео с воздуха для сайта и соцсетей.",
                    meta: "Реклама для сайта и соцсетей",
                    cta: "Открыть услугу",
                    link: "/promo-video-service",
                    img: "https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?w=800&q=80"
                },
                {
                    title: "Туризм",
                    eyebrow: "Travel",
                    desc: "Cinematic аэросъёмка локаций Грузии. Горы, ущелья, замки — контент, который продаёт маршруты.",
                    meta: "Локации, маршруты, атмосфера",
                    cta: "Открыть услугу",
                    link: "/drone-hotels-tourism",
                    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
                },
                {
                    title: "Мероприятия",
                    eyebrow: "Events",
                    desc: "Аэросъёмка открытий, корпоративов, спортивных соревнований и фестивалей на открытом воздухе.",
                    meta: "Фестивали, спорт, открытия",
                    cta: "Открыть услугу",
                    link: "/drone-weddings-events",
                    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
                }
            ]
        }
    },
    {
        id: "03",
        title: "360° ТУРЫ",
        centerText: "360° ТУРЫ",
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80",
        detailedContent: {
            eyebrow: "",
            heading: "360° туры",
            subheading: "Виртуальные 360° туры по Грузии",
            introNote: "Интерактивные туры, в которых зритель заходит внутрь и осматривается — для отелей, ресторанов, офисов, квартир и открытых локаций.",
            services: []
        }
    },
    {
        id: "04",
        title: "REELS",
        centerText: "REELS",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80",
        detailedContent: {
            heading: "Reels",
            subheading: "Вертикальные видео для соцсетей",
            introNote: "Ролики до 60 секунд под нишу и задачу — для брендов, заведений и объектов в Тбилиси и по Грузии.",
            services: []
        }
    },
    {
        id: "05",
        title: "AI КОНТЕНТ",
        centerText: "AI КОНТЕНТ",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
        detailedContent: {
            eyebrow: "",
            heading: "AI-контент",
            subheading: "AI-визуализация для бизнеса в Грузии",
            introNote: "Генерация интерьеров, фасадов, товаров и концепций — когда нужно показать то, что ещё не построено, не снято или существует только в идее.",
            services: []
        }
    },
    {
        id: "06",
        title: "Недвижимость",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
        detailedContent: {
            heading: "Недвижимость",
            subheading: "Видео для недвижимости в Тбилиси и Грузии",
            introNote: "Аэросъёмка, 360° туры и ролики для риелторов и застройщиков — объекты с видео получают больше просмотров и быстрее выходят на показ.",
            services: [
                { title: "Видео для риелторов", desc: "Съёмка квартиры или дома: интерьер, экстерьер, район. Монтаж за 3–5 дней. От 400 GEL", link: "/drone-real-estate" },
                { title: "Видео для застройщиков", desc: "Презентационные ролики ЖК, рендеры и реальная съёмка для продаж и инвесторов", link: "/drone-real-estate" },
                { title: "Аэросъёмка объектов", desc: "DJI Air 3S, 4K. Облёт фасада, территории и района. 94% больше просмотров объявления", link: "/drone-real-estate" },
                { title: "360° виртуальные туры", eyebrow: "Риэлтор · Застройщик · Агент", desc: "Покажите объект инвестору до выезда. Виртуальный тур заменяет первичный осмотр и приводит на встречу уже заинтересованного покупателя.", meta: "Показ · Планировка · Конверсия", link: "/360-tour-real-estate" },
                { title: "Мониторинг стройки", desc: "Ежемесячные дрон-облёты с GPS-привязкой и PDF-отчётом для банков и инвесторов", link: "/drone-construction-monitoring" },
                { title: "AI-упаковка объявлений", desc: "Улучшение фото, описания для порталов, Reels для соцсетей агентства", link: "/ai-visual/ai-real-estate" }
            ]
        }
    },
    {
        id: "07",
        title: "Отели",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
        detailedContent: {
            heading: "Отели",
            subheading: "Съёмка для отелей и гостевых домов Грузии",
            introNote: "Видеотуры, аэросъёмка и Reels — гость бронирует там, где видит номер, территорию и атмосферу, а не только цену.",
            services: [
                { title: "Видеотур по отелю", desc: "Номера, ресторан, бассейн, вид — cinematic видео 2–4 мин для сайта и Booking", link: "/drone-hotels-tourism" },
                { title: "Отели & Курорты", desc: "Гость бронирует глазами. Снимаем отель, террасы и виды так, чтобы страница на Booking работала сама.", link: "/drone-hotels-tourism" },
                { title: "360° туры для отелей", desc: "Виртуальный тур который можно встроить на сайт, Booking и Google Maps", link: "/360-tour-hotels" },
                { title: "Reels и сезонный контент", desc: "Ежемесячный контент-пакет: 8–12 вертикальных видео под Instagram и TikTok", link: "/reels-promo/reels-hotel" },
                { title: "SMM для отеля", desc: "Ведение Instagram и TikTok — контент-план, съёмка, монтаж, коммуникация", link: "/drone-hotels-tourism" },
                { title: "AI-перевод и локализация", desc: "Описания номеров и постов на 3–5 языках через AI — для иностранных гостей", link: "/ai-content/hotel-ai-descriptions" }
            ]
        }
    },
    {
        id: "08",
        title: "Рестораны",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
        detailedContent: {
            heading: "Рестораны",
            subheading: "Видео для ресторанов и кафе Тбилиси",
            introNote: "Reels, фуд-съёмка и брендовое видео для ресторанов, кафе и баров — люди приходят туда, где видят еду, свет и настроение.",
            services: [
                { title: "Фуд-видео и фото", desc: "Съёмка блюд, подачи и процесса приготовления. Для меню, сайта и соцсетей", link: "/drone-services/drone-restaurants" },
                { title: "Атмосферный ролик", desc: "Видео 60–90 сек: интерьер, команда, гости, кухня. Для Instagram и Google Maps", link: "/drone-services/drone-restaurants" },
                { title: "Reels-пакет", desc: "5–10 вертикальных видео в месяц: блюда, акции, атмосфера, команда", link: "/reels-promo/reels-restaurant" },
                { title: "Дизайн меню", desc: "Обновление меню с фото и дизайном. Print-ready + цифровая версия. От 600 GEL", link: "/drone-services/drone-restaurants" },
                { title: "Google Maps визуал", desc: "Фото и видео для Google Business — выше в поиске «рестораны рядом»", link: "/drone-services/drone-restaurants" },
                { title: "SMM под ключ", desc: "Контент-план, съёмка, монтаж и ведение Instagram ресторана", link: "/drone-services/drone-restaurants" }
            ]
        }
    },
    {
        id: "09",
        title: "Авто бизнес",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
        detailedContent: {
            heading: "Авто",
            subheading: "Съёмка для автосалонов и автобизнеса в Грузии",
            introNote: "Видео, аэросъёмка и AI-визуал для автосалонов, стоянок и сервисов — машину выбирают глазами, карточка с видео работает лучше фото.",
            services: [
                { title: "Обзорное видео автомобиля", desc: "Внешний вид, интерьер, динамика — видео 60–90 сек для продаж и соцсетей", link: "/drone-services/drone-auto" },
                { title: "Аэросъёмка дилерского центра", desc: "Дрон над салоном и стоянкой — масштаб и статус для рекламы и сайта", link: "/drone-services/drone-auto" },
                { title: "Reels и Shorts для автосалона", desc: "Короткие вирусные видео: новинки, тест-драйвы, спецпредложения", link: "/reels-promo/reels-auto" },
                { title: "Контент для автопроката", desc: "Съёмка парка автомобилей, условий аренды и локаций для туристов", link: "/drone-services/drone-auto" },
                { title: "AI-описания для объявлений", desc: "Продающие тексты на RU/EN/GE для auto.ge, myauto.ge и международных площадок", link: "/ai-visual/ai-auto" },
                { title: "Брендовое видео компании", desc: "Имиджевый ролик дилерского центра или сервиса для сайта и презентаций", link: "/promo-video/promo-car-dealer" }
            ]
        }
    },
    {
        id: "10",
        title: "Туризм",
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
        detailedContent: {
            heading: "Туризм",
            subheading: "Видео для туризма и локаций Грузии",
            introNote: "Аэросъёмка маршрутов, видеогиды и ролики локаций — для турагентств, гидов и операторов, работающих по стране.",
            services: [
                { title: "Аэросъёмка локаций", desc: "Горы, побережье, города — cinematic дрон-видео для туристических маршрутов", link: "/drone-hotels-tourism" },
                { title: "Видеогид по маршруту", desc: "Документальный ролик 3–7 мин о туре или направлении. Для YouTube и сайта", link: "/reels-promo/reels-tourism" },
                { title: "Reels для турагентства", desc: "Контент-пакет: топ-локации, отзывы туристов, моменты из туров", link: "/reels-promo/reels-tourism" },
                { title: "360° тур по локации", desc: "Интерактивная панорама горы, пещеры, замка или курорта", link: "/360-tour-tourism" },
                { title: "Контент для экотуризма", desc: "Видео и фото природных парков, треккинговых маршрутов и глэмпингов", link: "/reels-promo/reels-tourism" },
                { title: "Промо для иностранных туристов", desc: "Видео на EN/DE/FR с субтитрами — для Booking, TripAdvisor и YouTube", link: "/promo-video/promo-tourism-route" }
            ]
        }
    },
    {
        id: "11",
        title: "Клиники",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
        detailedContent: {
            heading: "Клиники",
            subheading: "Съёмка для клиник и бьюти-центров Тбилиси",
            introNote: "Видеовизитки, 360° туры и ролики для медицинских и бьюти-центров — пациент выбирает клинику по тому, как она выглядит, ещё до первого звонка.",
            services: [
                {
                    title: "Имиджевое видео клиники",
                    desc: "Показывает пространство, оборудование, подход и атмосферу.",
                    link: "/promo-video/promo-clinic",
                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
                    category: "Пространство · Оборудование · Подход",
                    price: "Brand Video · от 350 ₾",
                    primaryCtaLabel: "Открыть услугу",
                },
                {
                    title: "360° туры для клиник",
                    desc: "Интерактивная презентация пространства клиники для снижения тревожности до визита.",
                    link: "/360-tour-clinics",
                },
                {
                    title: "Контент для эстетических услуг",
                    desc: "Подходит для beauty/skin/dental/wellness направлений.",
                    link: "/clinics-service#service-kontent-esteticheskih-uslug",
                },
                {
                    title: "Reels для клиники",
                    desc: "Короткий контент для digital-присутствия.",
                    link: "/reels-promo/reels-clinic",
                },
                {
                    title: "Видео для врача / направления",
                    desc: "Подходит для презентации специалиста и услуг.",
                    link: "/promo-video/promo-doctor",
                },
            ]
        }
    },
    {
        id: "12",
        title: "IT",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
        detailedContent: {
            heading: "IT",
            subheading: "Видео для IT-компаний и личных брендов Грузии",
            introNote: "Продакшн, кейсы и AI-визуал для IT, стартапов и фаундеров — от продуктовых роликов до съёмки команды и офиса.",
            services: [
                { title: "Продуктовое видео", desc: "Демо-ролик продукта или приложения — для инвесторов, сайта и App Store", link: "/promo-video-service" },
                { title: "Кейс-стади в видео", desc: "История клиента до/после внедрения вашего продукта. Лучший B2B-контент", link: "#contact" },
                { title: "Видео для инвесторов", desc: "Pitch-видео стартапа: команда, продукт, рынок. 60–120 сек", link: "/promo-video-service" },
                { title: "AI-контент для LinkedIn и X", desc: "Регулярный контент: новости компании, мнения экспертов, продуктовые обновления", link: "/ai-visual/ai-brand" },
                { title: "Корпоративная съёмка", desc: "Команда, офис, культура компании — для найма, PR и партрнёрств", link: "#contact" },
                { title: "Reels для IT-бренда", desc: "Короткие видео о продукте, команде и технологиях для Instagram и TikTok", link: "/reels-promo/reels-business" }
            ]
        }
    },
];

type StackStepNavItem = {
    id: string;
    title: string;
};

const stackStepNavItems: StackStepNavItem[] = [
    { id: "01", title: "Агентство" },
    ...niches.filter(niche => niche.id !== "01").map((niche) => ({ id: niche.id, title: niche.title })),
    { id: "13", title: "Частые вопросы" },
    { id: "14", title: "Форма связи" },
];

const StackSectionHeader = ({
    activeStepIndex,
    sectionHeaderClassName,
    onNavigateToStep,
}: {
    activeStepIndex: number;
    sectionHeaderClassName: string;
    onNavigateToStep: (index: number) => void;
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        const activeEl = activeItemRef.current;
        if (container && activeEl) {
            const containerHalfWidth = container.clientWidth / 2;
            const itemHalfWidth = activeEl.clientWidth / 2;
            const targetScrollLeft = activeEl.offsetLeft - containerHalfWidth + itemHalfWidth;
            container.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: 'smooth' });
        }
    }, [activeStepIndex]);

    const sectionHeaderIndexClassName = "text-[#D4AF37] font-bold mr-1 md:mr-2";

    return (
        <div 
            ref={scrollContainerRef}
            className={`shrink-0 ${sectionHeaderClassName} overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
            <div className="flex items-center gap-2 md:gap-[14px]">
                {stackStepNavItems.map((step, stepIdx) => {
                    const isActive = stepIdx === activeStepIndex;
                    const isClickable = !isActive;
                    
                    const content = (
                        <>
                            <span className={isActive ? sectionHeaderIndexClassName : "text-[#D4AF37]/50 mr-1 md:mr-2 transition-colors group-hover:text-[#D4AF37]"}>{step.id}</span>
                            <span>{step.title.toLocaleUpperCase("ru-RU")}</span>
                        </>
                    );

                    const navItem = isClickable ? (
                        <button
                            type="button"
                            onClick={() => onNavigateToStep(stepIdx)}
                            className="min-w-0 flex items-center text-white/50 hover:text-white transition-colors cursor-pointer group"
                        >
                            {content}
                        </button>
                    ) : (
                        <div
                            ref={activeItemRef}
                            className="min-w-0 flex items-center text-[#D4AF37]"
                        >
                            {content}
                        </div>
                    );

                    return (
                        <React.Fragment key={step.id}>
                            {navItem}
                            {stepIdx < stackStepNavItems.length - 1 && (
                                <span className="text-[#D4AF37]/30 text-[10px] md:text-[12px] select-none font-bold" aria-hidden="true">·</span>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

const DEFAULT_STICKY_TOP_PX = 70;   // SmartHeader compact 70px
const PORTRAIT_STICKY_TOP_PX = 52; // SmartHeader compact 52px
const LANDSCAPE_STICKY_TOP_PX = 56; // SmartHeader compact 56px
const PORTRAIT_STACK_PREVIEW_PX = 28;
const LANDSCAPE_STACK_PREVIEW_PX = 22;

type ServiceItem = {
    slug?: string;
    title?: string;
    tag?: string;
    tagAccent?: boolean;
    featured?: boolean;
    variant?: "all-services";
    desc: string;
    link: string;
    img?: string;
    imagePosition?: string;
    category?: string;
    price?: string;
    primaryCtaLabel?: string;
    niches?: string;
    specs?: string;
    eyebrow?: string;
    meta?: string;
    cta?: string;
};

type DetailedContent = {
    heading: string;
    subheading: string;
    services: ServiceItem[];
    eyebrow?: string;
    introNote?: string;
};

type NicheItem = {
    id: string;
    title: string;
    centerText?: string;
    img: string;
    detailedContent?: DetailedContent;
    isIntro?: boolean;
};

type StackCardProps = {
    niche: NicheItem;
    index: number;
    scrollYProgress: MotionValue<number>;
    totalSteps: number;
    stickyTop: string;
    stickyHeight: string;
    isMobileLandscape: boolean;
    isMobilePortrait: boolean;
    onNavigateToStep: (targetIndex: number) => void;
    activeStepIndex: number;
};

type CanonicalCardCopy = {
    category: string;
    description: string;
    price: string;
    eyebrow: string;
    meta: string;
};

const normalizeCardTitle = (value?: string) =>
    (value ?? "")
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/\s+/g, " ")
        .trim();

const canonical360ByTitle = new Map<string, CanonicalCardCopy>(
    l2DirectionConfigs.tours360Service.data.services.map((service) => [
        normalizeCardTitle(service.title),
        {
            category: service.category,
            description: service.description,
            price: service.price,
            eyebrow: service.category,
            meta: service.price,
        },
    ])
);

const canonicalReelsByTitle = new Map<string, CanonicalCardCopy>(
    l2DirectionConfigs.reelsService.data.services.map((service) => [
        normalizeCardTitle(service.title),
        {
            category: service.category,
            description: service.description,
            price: service.price,
            eyebrow: service.category,
            meta: service.price,
        },
    ])
);

const canonicalReelsByHref = new Map<string, CanonicalCardCopy>(
    l2DirectionConfigs.reelsService.data.services
        .filter((service) => Boolean(service.primaryHref))
        .map((service) => [
            service.primaryHref!,
            {
                category: service.category,
                description: service.description,
                price: service.price,
                eyebrow: service.category,
                meta: service.price,
            },
        ])
);

const canonicalAiByTitle = new Map<string, CanonicalCardCopy>(
    l2DirectionConfigs.aiVisualizationService.data.services.map((service) => [
        normalizeCardTitle(service.title),
        {
            category: service.category,
            description: service.description,
            price: service.price,
            eyebrow: service.category,
            meta: service.price,
        },
    ])
);

const canonicalAiByHref = new Map<string, CanonicalCardCopy>(
    l2DirectionConfigs.aiVisualizationService.data.services
        .filter((service) => Boolean(service.primaryHref))
        .map((service) => [
            service.primaryHref!,
            {
                category: service.category,
                description: service.description,
                price: service.price,
                eyebrow: service.category,
                meta: service.price,
            },
        ])
);

const canonicalAerialByTitle = new Map<string, CanonicalCardCopy>(
    droneServiceItems.map((service) => [
        normalizeCardTitle(service.title),
        {
            category: service.category,
            description: service.description,
            price: service.price,
            eyebrow: service.category,
            meta: service.price,
        },
    ])
);

const canonicalAerialByHref = new Map<string, CanonicalCardCopy>(
    droneServiceItems
        .filter((service) => Boolean(service.primaryHref))
        .map((service) => [
            service.primaryHref!,
            {
                category: service.category,
                description: service.description,
                price: service.price,
                eyebrow: service.category,
                meta: service.price,
            },
        ])
);

const getCanonicalCopy = (title?: string) => {
    const normalizedTitle = normalizeCardTitle(title);
    return (
        canonical360ByTitle.get(normalizedTitle) ??
        canonicalReelsByTitle.get(normalizedTitle) ??
        canonicalAiByTitle.get(normalizedTitle) ??
        canonicalAerialByTitle.get(normalizedTitle)
    );
};

const getCanonicalCopyWithHref = (title?: string, href?: string) => {
    if (href && canonicalReelsByHref.has(href)) {
        return canonicalReelsByHref.get(href);
    }
    if (href && canonicalAiByHref.has(href)) {
        return canonicalAiByHref.get(href);
    }
    if (href && canonicalAerialByHref.has(href)) {
        return canonicalAerialByHref.get(href);
    }
    return getCanonicalCopy(title);
};

const toStackServiceFromL2 = (service: L2ServiceItem, fallbackLink: string): ServiceItem => ({
    ...(getCanonicalCopyWithHref(service.title, service.primaryHref)
        ? {
              eyebrow: getCanonicalCopyWithHref(service.title, service.primaryHref)!.eyebrow,
              meta: getCanonicalCopyWithHref(service.title, service.primaryHref)!.meta,
          }
        : {}),
    slug: service.slug,
    title: service.title,
    desc: getCanonicalCopyWithHref(service.title, service.primaryHref)?.description ?? service.description,
    link: service.primaryHref ?? fallbackLink,
    img:
        service.slug === "tury-360-nedvizhimost"
            ? "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
            : service.slug === "reels-rieltor"
            ? "/media/gazeta/reels-realtor-1.png"
            : service.slug === "promo-ekskursii-aktivnosti"
            ? "/media/gazeta/tourism-1.png"
            : service.slug === "ai-upakovka-predlozheniy-tourism" || service.slug === "ai-upakovka-predlozheniy"
            ? "/media/gazeta/tourism-2.png"
            : service.slug === "tury-360-turizm"
            ? "/media/gazeta/360-tour-2.png"
            : service.slug === "tur-360-turizma"
            ? "/media/gazeta/360-tour-2.png"
            : service.slug === "tur-360-klinik"
            ? "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
            : service.slug === "aerosemka-lokacii"
            ? "/media/gazeta/360-tour-1.png"
            : service.slug === "tur-360-nomera"
            ? "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
            : service.slug === "videotur-otelya"
            ? "/media/gazeta/360-real-estate-2.png"
            : service.slug === "aerosemka-territorii"
            ? "/media/drone-service/hotels-resorts-5.png"
            : service.image,
    imagePosition: service.imagePosition,
    category: getCanonicalCopyWithHref(service.title, service.primaryHref)?.category ?? service.category,
    price: getCanonicalCopyWithHref(service.title, service.primaryHref)?.price ?? service.price,
    primaryCtaLabel: service.primaryCtaLabel,
    cta: service.primaryCtaLabel,
    tag: service.tag,
    featured: service.featured,
});

const toStackServiceFromDrone = (service: DroneServiceItem): ServiceItem => ({
    slug: service.slug,
    title: service.title,
    desc: service.description,
    link: service.primaryHref,
    img: service.image,
    category: getCanonicalCopyWithHref(service.title, service.primaryHref)?.category ?? service.category,
    price: getCanonicalCopyWithHref(service.title, service.primaryHref)?.price ?? service.price,
    primaryCtaLabel: service.primaryCtaLabel,
    cta: service.primaryCtaLabel,
    eyebrow: getCanonicalCopyWithHref(service.title, service.primaryHref)?.eyebrow,
    meta: getCanonicalCopyWithHref(service.title, service.primaryHref)?.meta,
    tag: service.tag,
    featured: service.featured,
});

const toStackServiceFromRealEstate = (service: RealEstateServiceItem): ServiceItem => ({
    ...(getCanonicalCopyWithHref(service.title, service.primaryHref)
        ? {
              eyebrow: getCanonicalCopyWithHref(service.title, service.primaryHref)!.eyebrow,
              meta: getCanonicalCopyWithHref(service.title, service.primaryHref)!.meta,
          }
        : {}),
    slug: service.slug,
    title: service.title,
    desc: getCanonicalCopyWithHref(service.title, service.primaryHref)?.description ?? service.description,
    link: service.primaryHref ?? "/real-estate-service",
    img:
        service.slug === "prodazha-kvartir"
            ? "/media/gazeta/360-real-estate-1.png"
            : service.slug === "reels-rieltor"
            ? "/media/gazeta/reels-realtor-1.png"
            : service.image,
    category: getCanonicalCopyWithHref(service.title, service.primaryHref)?.category ?? service.category,
    price: getCanonicalCopyWithHref(service.title, service.primaryHref)?.price ?? service.price,
    primaryCtaLabel: service.primaryCtaLabel,
    cta: service.primaryCtaLabel,
    tag: service.tag,
    featured: service.featured,
});
const l2NicheToConfigKey: Partial<Record<string, keyof typeof l2DirectionConfigs>> = {
    "03": "tours360Service",
    "04": "reelsService",
    "05": "aiVisualizationService",
    "07": "hotelsService",
    "08": "restaurantsService",
    "09": "autoService",
    "10": "tourismService",
    "11": "clinicsService",
    "12": "businessService",
};

const canonicalServicesByNicheId: Partial<Record<string, ServiceItem[]>> = {
    "02": [...droneServiceItems]
        .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id))
        .map(toStackServiceFromDrone),
    "06": [...realEstateServiceItems]
        .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id))
        .map(toStackServiceFromRealEstate),
};

for (const [nicheId, l2Key] of Object.entries(l2NicheToConfigKey)) {
    if (!l2Key) continue;
    const fallbackLink = gazetaNicheLandingRoutes[nicheId] ?? "/gazeta";
    canonicalServicesByNicheId[nicheId] = l2DirectionConfigs[l2Key].data.services.map((service) =>
        toStackServiceFromL2(service, fallbackLink)
    );
}

const MaybeDebugWrapper = ({
    enabled,
    id,
    label,
    className,
    children,
}: {
    enabled: boolean;
    id: string | number;
    label?: string;
    className?: string;
    children: React.ReactNode;
}) => {
    if (!enabled) {
        if (className) {
            return <div className={className}>{children}</div>;
        }
        return <>{children}</>;
    }

    return (
        <DebugWrapper id={id} label={label} className={className}>
            {children}
        </DebugWrapper>
    );
};

const DESKTOP_OPEN_SERVICE_ALLOWLIST = new Set<string>([
    "02:nedvizhimost",
    "02:oteli-kurorty",
    "02:restorany",
    "03:tury-360-nedvizhimost",
    "03:tury-360-oteli",
    "04:reels-rieltor",
    "07:tur-360-nomera",
    "06:virtual-360",
    "06:aero-rayon",
    "08:aerosemka-lokacii",
    "07:aerosemka-territorii",
    "10:aerosemka-lokacii",
]);

const DESKTOP_OPEN_SERVICE_HREF_OVERRIDES: Record<string, string> = {
    "02:nedvizhimost": "/drone-services/drone-real-estate",
    "03:tury-360-nedvizhimost": "/360-tour-real-estate",
    "03:tury-360-oteli": "/360-tour-hotels",
    "04:reels-rieltor": "/reels-real-estate",
    "07:tur-360-nomera": "/360-tour-hotels",
    "06:virtual-360": "/360-tour-real-estate",
    "06:aero-rayon": "/drone-services/drone-real-estate",
    "08:aerosemka-lokacii": "/drone-services/drone-restaurants",
    "07:aerosemka-territorii": "/drone-hotels-tourism",
    "10:aerosemka-lokacii": "/drone-hotels-tourism",
};

const OPEN_SERVICE_CTA_LABEL = "открыть услугу";

const isOpenServiceCard = (nicheId: string, service: ServiceItem, isDesktopViewport: boolean) => {
    if (service.variant === "all-services") {
        return false;
    }

    const label = (service.primaryCtaLabel ?? service.cta ?? "").trim().toLowerCase();
    if (label === OPEN_SERVICE_CTA_LABEL) {
        return true;
    }

    if (!isDesktopViewport || !service.slug) {
        return false;
    }

    return DESKTOP_OPEN_SERVICE_ALLOWLIST.has(`${nicheId}:${service.slug}`);
};

const buildAllServicesCard = (niche: NicheItem): ServiceItem | null => {
    const link = gazetaNicheLandingRoutes[niche.id];

    if (!link || niche.id === "12") {
        return null;
    }

    const isAerialNiche = niche.id === "02";
    const isRealEstateNiche = niche.id === "06";
    const defaultDesc = `Откройте страницу направления, чтобы посмотреть все услуги, форматы, кейсы и следующий шаг по категории «${niche.title}».`;

    return {
        title: "Все услуги",
        variant: "all-services",
        eyebrow: isAerialNiche ? "Подбор решения" : "Полный список решений",
        desc: isAerialNiche
            ? "Откройте страницу аэросъёмки, чтобы увидеть все форматы: недвижимость, мониторинг, inspection, FPV, туризм, мероприятия и другие задачи."
            : isRealEstateNiche
                ? "Откройте страницу направления с полным пакетом для недвижимости: съёмка, аэро, 360°-туры и AI-упаковка."
                : defaultDesc,
        meta: isAerialNiche ? "Все форматы аэросъёмки" : "Вся страница направления",
        cta: isAerialNiche ? "Открыть услуги" : "Перейти к услугам",
        link,
        img: niche.img,
    };
};

const getSuggestedCardDetails = (niche: NicheItem, svc: ServiceItem): Partial<ServiceItem> => {
    const content = `${svc.title ?? ""} ${svc.desc}`.toLowerCase();

    if (content.includes("ai")) {
        return {
            tag: "AI",
            tagAccent: true,
            eyebrow: "AI-решения",
            meta: "Упаковка и локализация",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("360")) {
        return {
            tag: "360",
            eyebrow: "Иммерсивный формат",
            meta: "Виртуальный тур",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("reels") || content.includes("shorts") || content.includes("instagram") || content.includes("tiktok")) {
        return {
            tag: "REELS",
            eyebrow: "Short-form контент",
            meta: "Вертикальные форматы",
            cta: "Смотреть пакет",
        };
    }

    if (content.includes("мониторинг")) {
        return {
            tag: "PROGRESS",
            eyebrow: "Регулярный контроль",
            meta: "Облёты и отчёты",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("аэросъ") || content.includes("дрон")) {
        return {
            tag: "DRONE",
            eyebrow: "Aerial-визуал",
            meta: "Съёмка с воздуха",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("smm")) {
        return {
            tag: "SMM",
            eyebrow: "Контент-система",
            meta: "План и публикации",
            cta: "Смотреть пакет",
        };
    }

    if (content.includes("google maps")) {
        return {
            tag: "MAPS",
            eyebrow: "Local presence",
            meta: "Визуал для карт",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("дизайн")) {
        return {
            tag: "DESIGN",
            eyebrow: "Визуальная упаковка",
            meta: "Меню и носители",
            cta: "Открыть услугу",
        };
    }

    if (content.includes("видео") || content.includes("ролик") || content.includes("съёмка")) {
        return {
            tag: "VIDEO",
            eyebrow: "Продакшн",
            meta: "Съёмка и монтаж",
            cta: "Открыть услугу",
        };
    }

    return {
        eyebrow: niche.title,
        meta: `${niche.title} / формат`,
        cta: "Открыть услугу",
    };
};

const isExternalHref = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

const normalizeIndustryHeading = (value?: string) =>
    (value ?? "")
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/^услуги\s+/u, "")
        .replace(/\s+/g, " ")
        .replace(/[^a-zа-я0-9 ]/gi, "")
        .trim();

const isDuplicateIndustryHeading = (niche: NicheItem) => {
    const heading = normalizeIndustryHeading(niche.detailedContent?.heading);
    const title = normalizeIndustryHeading(niche.title);

    if (!heading || !title) return false;
    return heading === title;
};

const getBackButtonUiId = (nicheId: string) => `91${nicheId.padStart(2, "0")}`;
const GLOBAL_NEXT_BUTTON_UI_ID = "9200";

const UiIdBadge = ({ id }: { id: string }) => (
    <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 -left-2 rounded-br bg-red-500 px-1.5 py-1 text-[10px] leading-none font-bold text-white shadow-md border-r border-b border-red-700 z-[240]"
    >
        #{id}
    </span>
);

const clampLinesStyle = (lines: number): React.CSSProperties => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
});

const chunkItems = <T,>(items: T[], size: number): T[][] => {
    if (size <= 0) return [items];

    const chunks: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
        chunks.push(items.slice(i, i + size));
    }
    return chunks;
};

const Card = ({ niche, index, scrollYProgress, totalSteps, stickyTop, stickyHeight, isMobileLandscape, isMobilePortrait, onNavigateToStep, activeStepIndex }: StackCardProps) => {
    const contentScrollRef = useRef<HTMLDivElement | null>(null);
    const servicesRailRef = useRef<HTMLDivElement | null>(null);
    const servicesCardsContainerRef = useRef<HTMLDivElement | null>(null);
    const lastTouchYRef = useRef<number | null>(null);
    const [innerScrollProgress, setInnerScrollProgress] = useState(0);
    const [isPhoneViewport, setIsPhoneViewport] = useState(false);
    const [cardImageCarouselTick, setCardImageCarouselTick] = useState(0);
    const isAerialScreen = niche.id === "02";
    const isAerialCompactScreen = niche.id === "02";
    const isAerialOrToursScreen = niche.id === "02" || niche.id === "03";
    const isRealEstateScreen = niche.id === "06";
    const isReelsScreen = niche.id === "04";
    const isUnifiedTopTextScreen = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].includes(niche.id);
    const isCompactNicheScreen = niche.id !== "02";
    const isDesktopViewport = !isMobileLandscape && !isMobilePortrait;
    const showDebugOverlays = !isAerialScreen;
    const screenLink = gazetaNicheLandingRoutes[niche.id];
    const allServicesCard = buildAllServicesCard(niche);
    const geoHighlightByNicheId: Record<string, string> = {
        "02": "в Тбилиси и по Грузии",
        "03": "по Грузии",
        "04": "в Тбилиси и по Грузии",
        "05": "в Грузии",
        "06": "в Тбилиси и Грузии",
        "07": "Грузии",
        "08": "Тбилиси",
        "09": "в Грузии",
        "10": "Грузии",
        "11": "Тбилиси",
        "12": "Грузии",
    };
    const baseSourceServices = canonicalServicesByNicheId[niche.id] ?? niche.detailedContent?.services ?? [];
    const sourceServices =
        isDesktopViewport && niche.id === "02"
            ? (() => {
                const monitoringIndex = baseSourceServices.findIndex((service) => service.slug === "monitoring-stroiki");
                const restaurantsIndex = baseSourceServices.findIndex((service) => service.slug === "restorany");
                if (monitoringIndex === -1 || restaurantsIndex === -1 || monitoringIndex > restaurantsIndex) {
                    return baseSourceServices;
                }

                const reordered = [...baseSourceServices];
                const [monitoringCard] = reordered.splice(monitoringIndex, 1);
                reordered.splice(restaurantsIndex + 1, 0, monitoringCard);
                return reordered;
            })()
            : baseSourceServices;
    const prioritizedSourceServices = (() => {
        const openServiceCards: ServiceItem[] = [];
        const otherCards: ServiceItem[] = [];

        for (const service of sourceServices) {
            if (isOpenServiceCard(niche.id, service, isDesktopViewport)) {
                openServiceCards.push(service);
            } else {
                otherCards.push(service);
            }
        }

        return [...openServiceCards, ...otherCards];
    })();
    const orderedSourceServices =
        niche.id === "10"
            ? (() => {
                  const targetIndex = prioritizedSourceServices.findIndex((service) => service.slug === "tur-360-turizma");
                  if (targetIndex <= 1) return prioritizedSourceServices;
                  const reordered = [...prioritizedSourceServices];
                  const [target] = reordered.splice(targetIndex, 1);
                  reordered.splice(1, 0, target);
                  return reordered;
              })()
            : niche.id === "11"
            ? (() => {
                  const targetIndex = prioritizedSourceServices.findIndex((service) => service.slug === "tur-360-klinik");
                  if (targetIndex <= 0) return prioritizedSourceServices;
                  const reordered = [...prioritizedSourceServices];
                  const [target] = reordered.splice(targetIndex, 1);
                  reordered.unshift(target);
                  return reordered;
              })()
            : prioritizedSourceServices;
    const limitedServices = orderedSourceServices.slice(0, 5);
    const shouldRenderDetailedHeading = Boolean(niche.detailedContent?.heading);
    const shouldRenderDetailedEyebrow = niche.id !== "02";
    const services = niche.detailedContent
        ? [
            ...limitedServices,
            ...(allServicesCard ? [allServicesCard] : []),
        ]
        : [];
    // Each section takes 1/totalSteps of the scroll track
    const stepSize = 1 / totalSteps;
    const start = index * stepSize;

    // Keep transition very short so section headers (00/01/...) snap to the top quickly
    // instead of drifting across the screen while scrolling.
    const entryStart = start + stepSize * 0.02;
    const entryEnd = start + stepSize * 0.08;

    // y animation: translateY(100%) -> translateY(0)
    // Card 0 starts at 0. Others slide in during their specific entry window.
    const y = useTransform(
        scrollYProgress,
        [entryStart, entryEnd],
        [index === 0 ? "0%" : "100%", "0%"]
    );

    // Opacity animation specifically for the "title" text.
    // Index 0 text is hidden until its section actually begins scrolling (start at 0).
    const opacity = useTransform(
        scrollYProgress,
        [Math.max(0, start - 0.05), start + 0.05],
        [0, 1]
    );
    const contentPaddingClassName = isAerialCompactScreen
        ? "p-6 pt-20 md:p-12 lg:p-20 xl:px-6 xl:py-2 xl:pt-14"
        : isCompactNicheScreen
        ? "p-6 pt-20 md:p-12 md:pt-20 xl:px-8 xl:py-3 xl:pt-14"
        : "p-6 pt-20 md:p-12 lg:p-20";
    const contentWrapperClassName = isAerialCompactScreen
        ? "min-h-full flex flex-col max-w-[1500px] mx-auto w-full pb-10"
        : isCompactNicheScreen
        ? "min-h-full flex flex-col max-w-[1500px] mx-auto w-full pb-2"
        : "min-h-full flex flex-col justify-center max-w-[1500px] mx-auto w-full pb-10";
    const headingBlockClassName = isAerialCompactScreen
        ? "max-w-4xl mb-4 md:mb-6 mt-4 md:mt-0 xl:mb-3 text-center mx-auto"
        : isRealEstateScreen
        ? "max-w-4xl mb-2 md:mb-6 mt-1 md:mt-0 xl:mb-2 text-center mx-auto"
        : isReelsScreen
        ? "max-w-4xl mb-4 md:mb-6 mt-4 md:mt-0 xl:mb-3 text-center mx-auto"
        : isCompactNicheScreen
        ? "max-w-4xl mb-4 md:mb-6 mt-4 md:mt-0 xl:mb-3 text-center mx-auto"
        : "max-w-4xl mb-10 md:mb-14 mt-4 md:mt-0 text-center mx-auto";
    const headingClassName = isAerialCompactScreen
        ? "font-sans font-black tracking-tight uppercase text-white drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl xl:text-[42px] max-w-4xl mb-4 md:mb-5 xl:mb-2 leading-[0.95]"
        : isCompactNicheScreen
        ? "font-sans font-black tracking-tight uppercase text-white drop-shadow-2xl text-4xl md:text-6xl xl:text-5xl max-w-4xl mb-3 xl:mb-2 leading-[0.96]"
        : "font-sans font-black tracking-tighter uppercase text-white drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-4 md:mb-5";
    const subheadingClassName = isAerialCompactScreen
        ? "text-white/88 max-w-[62ch] leading-[1.34] font-semibold tracking-[0.01em] mx-auto text-[clamp(1.04rem,1.95vw,1.44rem)]"
        : isCompactNicheScreen
        ? "text-white/87 max-w-[62ch] leading-[1.34] font-semibold tracking-[0.01em] mx-auto text-[clamp(1.02rem,1.65vw,1.34rem)]"
        : "text-white/86 max-w-[60ch] leading-[1.36] font-semibold tracking-[0.01em] mx-auto text-[clamp(1.02rem,1.55vw,1.3rem)]";
    const introNoteClassName = isAerialCompactScreen
        ? "mt-4 md:mt-5 max-w-2xl xl:max-w-3xl text-sm md:text-base xl:text-[12px] text-white/58 leading-relaxed xl:leading-snug"
        : "mt-4 md:mt-5 max-w-2xl text-sm md:text-base text-white/58 leading-relaxed";
    const servicesGridClassName = "md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 xl:gap-2.5";
    const mobileServicesGridClassName = isMobileLandscape
        ? "grid-cols-4 gap-2 md:grid-cols-4"
        : `grid-cols-2 gap-2 sm:grid-cols-2 ${servicesGridClassName}`;
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const mobileContentPaddingOverrideClassName = isRealEstateScreen
        ? isMobileLandscape
            ? "pt-10 pb-14"
            : isMobilePortrait
            ? "pt-12 pb-20"
            : ""
        : isMobileLandscape
        ? "pt-14 pb-14"
        : isMobilePortrait
        ? "pt-16 pb-20"
        : "";
    const useMobileHorizontalServicesRail = isMobileCompactTop && Boolean(niche.detailedContent);
    const useDesktopHorizontalServicesRail = !isMobileCompactTop && Boolean(niche.detailedContent);
    const useHorizontalServicesRail = useMobileHorizontalServicesRail || useDesktopHorizontalServicesRail;
    const shouldUseInnerVerticalScroll = !useHorizontalServicesRail;
    const mobileServiceColumns = useMobileHorizontalServicesRail
        ? chunkItems(services, 2)
        : [];
    const showMobileRailArrows = useMobileHorizontalServicesRail
        ? mobileServiceColumns.length > 1
        : useDesktopHorizontalServicesRail
        ? sourceServices.length > 4
        : services.length > 1;
    const shouldCenterDesktopRail = useDesktopHorizontalServicesRail && sourceServices.length < 4;
    const prevStep = index > 0 ? stackStepNavItems[index - 1] : null;
    const sectionBodyPaddingTopClassName = "";
    const showTopBackButton = isMobileCompactTop && Boolean(prevStep);
    const backButtonUiId = getBackButtonUiId(niche.id);
    const topStaticNavOffsetClassName = isMobileLandscape ? "top-7" : "top-9";
    const mobileRailContainerClassName = useMobileHorizontalServicesRail
        ? isRealEstateScreen
            ? `services-horizontal-rail flex items-stretch gap-1.5 overflow-x-auto overscroll-x-contain px-0 pb-2 snap-x snap-mandatory touch-pan-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isMobileLandscape ? "pt-1" : "pt-1.5"
            }`
            : `services-horizontal-rail -mx-2 flex items-stretch gap-2 overflow-x-auto overscroll-x-contain px-4 pb-2 snap-x snap-mandatory touch-pan-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                isMobileLandscape ? "pt-1" : "pt-2"
            }`
        : useDesktopHorizontalServicesRail
            ? `services-horizontal-rail flex items-stretch gap-4 md:gap-5 xl:gap-5 overflow-x-auto overscroll-x-contain pb-4 snap-x snap-mandatory touch-pan-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10 pt-2 ${
                isReelsScreen ? "mx-2 md:mx-3 xl:mx-4" : "mx-10 md:mx-12 xl:mx-14"
            } ${
                shouldCenterDesktopRail ? "justify-center" : ""
            }`
            : limitedServices.length < 5
                ? `flex flex-wrap justify-center gap-4 md:gap-5 xl:gap-2.5 px-4 md:px-0`
                : `grid ${mobileServicesGridClassName}`;
    const mobileRailShellClassName = useMobileHorizontalServicesRail || useDesktopHorizontalServicesRail
        ? `relative ${isRealEstateScreen && isMobileCompactTop ? (isMobileLandscape ? "-mt-1 px-3" : "-mt-2 px-4") : ""}`
        : "";
    const mobileRailColumnClassName = useMobileHorizontalServicesRail
        ? isMobileLandscape
            ? "basis-[calc(100%-5.25rem)] min-w-[calc(100%-5.25rem)] max-w-[calc(100%-5.25rem)] shrink-0 snap-center flex flex-col gap-2.5"
            : "basis-[calc(100%-4.5rem)] min-w-[calc(100%-4.5rem)] max-w-[calc(100%-4.5rem)] shrink-0 snap-center flex flex-col gap-3"
        : "";
    const mobileRailArrowVerticalClassName =
        isRealEstateScreen && isMobileCompactTop ? "top-[28%]" : "top-1/2";
    const mobileRailLeftArrowOffsetClassName =
        isRealEstateScreen && isMobileCompactTop
            ? isMobileLandscape
                ? "-left-5"
                : "-left-6"
            : useDesktopHorizontalServicesRail
                ? "-left-11 md:-left-12 xl:-left-14"
                : "left-0";
    const mobileRailRightArrowOffsetClassName =
        isRealEstateScreen && isMobileCompactTop
            ? isMobileLandscape
                ? "-right-5"
                : "-right-6"
            : useDesktopHorizontalServicesRail
                ? "-right-11 md:-right-12 xl:-right-14"
                : "right-0";
    const shouldAnimateMobileRailArrows = (isRealEstateScreen && isMobileCompactTop) || useDesktopHorizontalServicesRail;

    useEffect(() => {
        const updateViewportKind = () => {
            if (typeof window === "undefined") return;
            const phoneLikeWidth = window.innerWidth <= 640;
            const phoneLikeHeight = window.innerHeight <= 520;
            setIsPhoneViewport(phoneLikeWidth || phoneLikeHeight);
        };

        updateViewportKind();
        window.addEventListener("resize", updateViewportKind);
        window.addEventListener("orientationchange", updateViewportKind);

        return () => {
            window.removeEventListener("resize", updateViewportKind);
            window.removeEventListener("orientationchange", updateViewportKind);
        };
    }, []);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCardImageCarouselTick((prev) => prev + 1);
        }, 5000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    const syncInnerScrollProgress = (el: HTMLDivElement) => {
        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
        if (maxScrollTop <= 0) {
            setInnerScrollProgress(1);
            return;
        }
        const progress = Math.max(0, Math.min(1, el.scrollTop / maxScrollTop));
        setInnerScrollProgress(progress);
    };

    const routeDeltaToInnerScroll = (
        deltaY: number,
        event: {
            preventDefault: () => void;
        }
    ) => {
        if (!isMobileCompactTop || !shouldUseInnerVerticalScroll) return;

        const el = contentScrollRef.current;
        if (!el) return;

        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
        if (maxScrollTop <= 0) return;

        if (deltaY > 0) {
            if (el.scrollTop < maxScrollTop - 1) {
                event.preventDefault();
                el.scrollTop = Math.min(maxScrollTop, el.scrollTop + deltaY);
                syncInnerScrollProgress(el);
            }
            return;
        }

        if (deltaY < 0 && el.scrollTop > 1) {
            event.preventDefault();
            el.scrollTop = Math.max(0, el.scrollTop + deltaY);
            syncInnerScrollProgress(el);
        }
    };

    const handleInnerScroll = (event: React.UIEvent<HTMLDivElement>) => {
        syncInnerScrollProgress(event.currentTarget);
    };

    const handleInnerWheelCapture = (event: React.WheelEvent<HTMLDivElement>) => {
        routeDeltaToInnerScroll(event.deltaY, event);
    };

    const handleInnerTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isMobileCompactTop || !shouldUseInnerVerticalScroll) return;
        lastTouchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleInnerTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isMobileCompactTop || !shouldUseInnerVerticalScroll) return;

        const touchY = event.touches[0]?.clientY;
        if (typeof touchY !== "number") return;

        if (lastTouchYRef.current === null) {
            lastTouchYRef.current = touchY;
            return;
        }

        const deltaY = lastTouchYRef.current - touchY;
        routeDeltaToInnerScroll(deltaY, event);
        lastTouchYRef.current = touchY;
    };

    const handleInnerTouchEnd = () => {
        lastTouchYRef.current = null;
    };

    useEffect(() => {
        const el = contentScrollRef.current;
        if (!el) return;
        if (!shouldUseInnerVerticalScroll) {
            setInnerScrollProgress(1);
            return;
        }
        syncInnerScrollProgress(el);
    }, [niche.id, isMobileCompactTop, shouldUseInnerVerticalScroll]);

    const handlePreviousIndustryClick = () => {
        if (!prevStep) return;
        onNavigateToStep(index - 1);
    };

    const handleCardRailScroll = (direction: "left" | "right") => {
        const rail = servicesRailRef.current;
        if (!rail) return;

        const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
        if (maxScrollLeft <= 0) return;

        const step = useDesktopHorizontalServicesRail
            ? Math.max(240, Math.round(rail.clientWidth))
            : Math.max(140, Math.round(rail.clientWidth * (isMobileLandscape ? 0.56 : 0.78)));
        const delta = direction === "left" ? -step : step;
        const targetLeft = Math.max(0, Math.min(maxScrollLeft, rail.scrollLeft + delta));
        rail.scrollTo({
            left: targetLeft,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const normalizeServiceCardHeights = () => {
            const container = servicesCardsContainerRef.current;
            if (!container) return;

            const cards = Array.from(container.querySelectorAll<HTMLElement>(".service-card-target"));
            if (!cards.length) return;

            cards.forEach((card) => card.style.removeProperty("height"));
            const tallestCardHeight = Math.max(...cards.map((card) => card.offsetHeight));
            if (!Number.isFinite(tallestCardHeight) || tallestCardHeight <= 0) return;

            cards.forEach((card) => {
                card.style.height = `${tallestCardHeight}px`;
            });
        };

        const run = () => {
            if (typeof window === "undefined") return;
            window.requestAnimationFrame(normalizeServiceCardHeights);
        };

        run();
        window.addEventListener("resize", run);

        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(run) : null;
        const container = servicesCardsContainerRef.current;
        if (observer && container) {
            observer.observe(container);
            container.querySelectorAll(".service-card-target").forEach((card) => observer.observe(card));
        }

        return () => {
            window.removeEventListener("resize", run);
            observer?.disconnect();
        };
    }, [
        niche.id,
        sourceServices.length,
        useMobileHorizontalServicesRail,
        useDesktopHorizontalServicesRail,
        isMobileLandscape,
    ]);

    const renderServiceCard = (svc: ServiceItem, serviceIndex: number) => {
        const serviceId = 8400 + (index * 10) + serviceIndex;
        const isAllServicesCard = svc.variant === "all-services";
        const desktopPolicyKey = svc.slug ? `${niche.id}:${svc.slug}` : "";
        const isServiceOpenAllowed =
            !isAllServicesCard && Boolean(svc.slug) && DESKTOP_OPEN_SERVICE_ALLOWLIST.has(desktopPolicyKey);
        const serviceOpenHref = isServiceOpenAllowed
            ? (DESKTOP_OPEN_SERVICE_HREF_OVERRIDES[desktopPolicyKey] ?? svc.link)
            : "";
        const isServiceOpenExternal = isServiceOpenAllowed ? isExternalHref(serviceOpenHref) : false;
        const suggestedCardDetails = isAllServicesCard ? {} : getSuggestedCardDetails(niche, svc);
        const cardImage = svc.img || niche.img;
        const cardSlug = svc.slug || (svc.title ? svc.title.toLowerCase().replace(/[^a-zа-я0-9]+/gi, "-") : `card-${niche.id}-${serviceIndex}`);
        const shouldRotateMenuDeliveryImage =
            svc.slug === "ai-kartochki-menyu-delivery" ||
            svc.slug === "ai-upakovka-menyu-opisaniy";
        const renderedCardImage = shouldRotateMenuDeliveryImage
            ? cardImageCarouselTick % 2 === 0
                ? cardImage
                : aiMenuDeliveryImageTwo.src
            : cardImage;
        const isExternalServiceLink = isServiceOpenExternal;
        const cardTag = svc.tag || suggestedCardDetails.tag;
        const cardTagAccent = svc.tagAccent ?? suggestedCardDetails.tagAccent ?? false;
        const cardEyebrow = svc.eyebrow || suggestedCardDetails.eyebrow || niche.title;
        const isRealEstateReferenceCard = false; // unified card style — matches niche 00
        const isRealEstatePriceEnabledCard = isRealEstateReferenceCard && !isAllServicesCard;
        const shouldUseTwoLinePrice = isRealEstatePriceEnabledCard && isPhoneViewport;
        const singleCtaLabel: string | null = null; // unified dual-button style
        const isSingleCtaExperimentCard = false;
        const useContactAnchorForSingleCta = serviceId === 8411;
        const normalizedCategory = isRealEstateReferenceCard && svc.category
            ? svc.category.replace(/\s*[·•|]\s*/g, "\n")
            : svc.category;
        const formattedPriceText =
            isRealEstatePriceEnabledCard && svc.price
                ? svc.price
                    .replace(/\bgeo\s*context\b/gi, "GEO")
                    .replace(/\bконтекст\b/gi, "")
                    .replace(/\s{2,}/g, " ")
                    .replace(" · ", shouldUseTwoLinePrice ? "\n" : " · ")
                : svc.price;
        const usesDesktopAspectImage = useDesktopHorizontalServicesRail;
        const formattedTitle = svc.title;
        const mobileCardImageInteractiveClassName =
            "h-full w-full object-cover opacity-90 saturate-[1.1] contrast-[1.05] transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100";
        const mobileCardImageStaticClassName =
            "h-full w-full object-cover opacity-90 saturate-[1.1] contrast-[1.05] transition-transform duration-500";
        const serviceCardImageInteractiveClassName =
            usesDesktopAspectImage
                ? "w-full h-full object-cover saturate-[1.1] contrast-[1.05] opacity-100"
                : "w-full h-full object-cover saturate-[1.1] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100";
        const serviceCardImageStaticClassName =
            usesDesktopAspectImage
                ? "w-full h-full object-cover saturate-[1.1] contrast-[1.05] opacity-100"
                : "w-full h-full object-cover saturate-[1.1] contrast-[1.05] transition-transform duration-500 opacity-90";

        if (useMobileHorizontalServicesRail) {
            const mobileCardClassName = `service-card-target group relative flex ${
                isAerialOrToursScreen
                    ? isMobileLandscape
                        ? "min-h-[220px]"
                        : "min-h-[248px]"
                    : "min-h-[158px]"
            } overflow-hidden rounded-[20px] border bg-[#111214]/96 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-all ${
                cardTagAccent || svc.featured ? "border-[#D4A017]/55" : "border-white/12"
            }`;
            const mobilePrimaryActionClassName = isMobileLandscape
                ? "w-full rounded-xl border border-white/15 px-2.5 py-1.5 text-center text-[8px] font-bold uppercase tracking-[0.11em] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                : "w-full rounded-xl border border-white/15 px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.11em] text-white transition-colors hover:border-white hover:bg-white hover:text-black";
            const mobileSecondaryActionClassName = isMobileLandscape
                ? "w-full rounded-xl bg-[#D4A017] px-2.5 py-1.5 text-center text-[8px] font-bold uppercase tracking-[0.11em] text-black transition-colors hover:bg-white"
                : "w-full rounded-xl bg-[#D4A017] px-2.5 py-2 text-center text-[9px] font-bold uppercase tracking-[0.11em] text-black transition-colors hover:bg-white";

            const mobileCardBody = (
                <>
                    <div className="relative w-[39%] min-w-[39%] overflow-hidden bg-neutral-900">
                        {isServiceOpenAllowed && isExternalServiceLink ? (
                            <a href={serviceOpenHref} target="_blank" rel="noreferrer" className="block h-full">
                                <img
                                    src={renderedCardImage}
                                    alt={svc.title || niche.title}
                                    className={mobileCardImageInteractiveClassName}
                                />
                            </a>
                        ) : isServiceOpenAllowed ? (
                            <Link href={serviceOpenHref} className="block h-full">
                                <img
                                    src={renderedCardImage}
                                    alt={svc.title || niche.title}
                                    className={mobileCardImageInteractiveClassName}
                                />
                            </Link>
                        ) : (
                            <img
                                src={renderedCardImage}
                                alt={svc.title || niche.title}
                                className={mobileCardImageStaticClassName}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/70" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                        {cardTag && (
                            <div className="absolute left-2 top-2">
                                <span className={`inline-flex rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] ${
                                    cardTagAccent ? "bg-[#D4A017] text-black" : "bg-black/55 text-white backdrop-blur-sm"
                                }`}>
                                    {cardTag}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col p-3">
                        <div className="mb-2 flex items-start justify-between gap-2">
                            <span className="max-w-[14ch] text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                                {cardEyebrow}
                            </span>
                            <span className="shrink-0 text-[8px] uppercase tracking-[0.18em] text-white/35">
                                {niche.id}
                            </span>
                        </div>
                        {formattedTitle && (
                            <h3 className="mb-1.5 text-[14px] font-black uppercase leading-[1.04] text-white transition-colors group-hover:text-[#D4AF37]">
                                {isServiceOpenAllowed ? (
                                    isExternalServiceLink ? (
                                        <a href={serviceOpenHref} target="_blank" rel="noreferrer">
                                            <span>{formattedTitle}</span>
                                        </a>
                                    ) : (
                                        <Link href={serviceOpenHref}>
                                            <span>{formattedTitle}</span>
                                        </Link>
                                    )
                                ) : (
                                    <span>{formattedTitle}</span>
                                )}
                            </h3>
                        )}
                        {normalizedCategory ? (
                            <div className="mb-1 text-[9px] uppercase tracking-[0.11em] text-white/35">
                                {normalizedCategory}
                            </div>
                        ) : null}
                        <p className="mb-2 text-[10px] leading-[1.28] text-white/72">
                            {svc.desc}
                        </p>
                        <div className="mt-auto border-t border-white/10 pt-2">
                            {formattedPriceText ? (
                                <div className="mb-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#F2C94C]">
                                    {formattedPriceText}
                                </div>
                            ) : null}
                            <div className="flex flex-col gap-1.5">
                                {isSingleCtaExperimentCard ? (
                                    useContactAnchorForSingleCta ? (
                                        <a href="#contact" className={mobileSecondaryActionClassName}>
                                            {singleCtaLabel}
                                        </a>
                                    ) : isExternalServiceLink ? (
                                        <a href={svc.link} target="_blank" rel="noreferrer" className={mobileSecondaryActionClassName}>
                                            {singleCtaLabel}
                                        </a>
                                    ) : (
                                        <Link href={svc.link} className={mobileSecondaryActionClassName}>
                                            {singleCtaLabel}
                                        </Link>
                                    )
                                ) : (
                                    <>
                                        {isServiceOpenAllowed ? (
                                            isExternalServiceLink ? (
                                            <a href={serviceOpenHref} target="_blank" rel="noreferrer" className={mobilePrimaryActionClassName}>
                                                {svc.primaryCtaLabel ?? "Открыть услугу"}
                                            </a>
                                        ) : (
                                            <Link href={serviceOpenHref} className={mobilePrimaryActionClassName}>
                                                {svc.primaryCtaLabel ?? "Открыть услугу"}
                                            </Link>
                                        )) : null}
                                        {!isAllServicesCard ? (
                                            <a href="#contact" className={mobileSecondaryActionClassName}>
                                                Обсудить задачу
                                            </a>
                                        ) : null}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            );

            return (
                <MaybeDebugWrapper enabled={showDebugOverlays} key={cardSlug} id={serviceId} label={`Service Card: ${svc.title || svc.tag}`}>
                    <article id={`service-${cardSlug}`} className={mobileCardClassName}>
                        {mobileCardBody}
                    </article>
                </MaybeDebugWrapper>
            );
        }

        const unifiedRealEstateCardHeightClassName =
            isRealEstateReferenceCard && isMobileCompactTop
                ? isMobileLandscape
                    ? "h-[248px]"
                    : "h-[352px]"
                : "h-full";
        const sectionUniformHeightClassName = isAerialOrToursScreen
            ? isMobileLandscape
                ? "min-h-[332px]"
                : useDesktopHorizontalServicesRail
                    ? "h-[640px]"
                    : "min-h-[388px]"
            : "";
        const servicePageParityCardClassName = `service-card-target w-full scroll-mt-32 bg-[#141414] border border-[#2a2a2a] rounded-[12px] overflow-hidden group hover:border-[#D4A017] transition-all flex flex-col ${unifiedRealEstateCardHeightClassName} ${sectionUniformHeightClassName} ${isAerialOrToursScreen && useDesktopHorizontalServicesRail ? "h-full" : ""} ${svc.featured ? "gold-glow border-[#D4A017]/50" : ""}`;
        const servicePageParityCardStyle = svc.featured
            ? { boxShadow: "0 0 20px rgba(212, 160, 23, 0.2)" }
            : undefined;
        const hideHighlightedPriceLine = false;
        const servicePageImageHeightClassName = isMobileCompactTop
            ? isMobileLandscape
                ? "h-16"
                : isRealEstateReferenceCard
                ? "h-[82px]"
                : "h-[88px]"
            : useDesktopHorizontalServicesRail
            ? "aspect-video h-auto"
            : isMobileLandscape
            ? "h-16"
            : "h-24 sm:h-36";
        const servicePageBodyClassName = isMobileLandscape
            ? isRealEstateReferenceCard
                ? "px-2 pt-2 pb-2 flex-grow flex flex-col"
                : "px-2 pt-1.5 pb-1.5 flex-grow flex flex-col"
            : isRealEstateReferenceCard
            ? "px-2.5 pt-2.5 pb-2.5 sm:px-4 sm:pt-4 sm:pb-3.5 flex-grow flex flex-col"
            : "px-2.5 pt-2.5 pb-2.5 sm:px-4 sm:pt-4 sm:pb-3.5 flex-grow flex flex-col";
        const servicePageTitleClassName = isMobileLandscape
            ? `text-[11px] font-bold leading-tight mb-1 ${svc.featured ? "text-[#D4A017]" : "text-white"}`
            : isRealEstateReferenceCard
            ? `text-[16.5px] sm:text-[18.5px] font-bold mb-1.5 leading-tight ${svc.featured ? "text-[#D4A017]" : "text-white"}`
            : `text-sm sm:text-lg font-bold mb-1 ${svc.featured ? "text-[#D4A017]" : "text-white"}`;
        const servicePageCategoryClassName = isMobileLandscape
            ? "text-[8px] text-gray-500 uppercase tracking-[0.12em] mb-1.5"
            : isRealEstateReferenceCard
            ? "text-[11.5px] text-gray-500 uppercase tracking-[0.11em] mb-1.5 leading-tight"
            : "text-[10px] text-gray-500 uppercase tracking-wider mb-2";
        const servicePageDescriptionClassName = isAerialOrToursScreen
            ? isMobileLandscape
                ? "text-[10px] text-gray-400 mb-2 leading-tight"
                : "text-xs sm:text-sm text-gray-400 mb-3 leading-snug"
            : isMobileLandscape
            ? "text-[10px] text-gray-400 mb-2 leading-tight"
            : isRealEstateReferenceCard
            ? "text-[12px] text-gray-300 mb-2 leading-[1.22]"
            : "text-xs sm:text-sm text-gray-400 mb-3 leading-snug";
        const servicePagePriceClassName = isMobileLandscape
            ? isRealEstatePriceEnabledCard
                ? `mb-1 block w-full border-t border-[#2a2a2a] pt-1.5 text-[7.5px] text-[#F2C94C] font-bold uppercase tracking-[0.1em] leading-tight ${shouldUseTwoLinePrice ? "whitespace-pre-line" : "whitespace-nowrap"}`
                : "pt-2 border-t border-[#2a2a2a] text-[8px] text-[#D4A017] font-bold uppercase tracking-[0.12em] mb-2"
            : isRealEstatePriceEnabledCard
            ? `mb-1.5 block w-full border-t border-[#2a2a2a] pt-2 text-[8.5px] text-[#F2C94C] font-bold uppercase tracking-[0.1em] leading-tight ${shouldUseTwoLinePrice ? "whitespace-pre-line" : "whitespace-nowrap"}`
            : "pt-3 border-t border-[#2a2a2a] text-[10px] text-[#D4A017] font-bold uppercase tracking-wider mb-4";
        const servicePageActionsClassName = "flex flex-col gap-1.5 lg:flex-row lg:gap-3";
        const servicePageBottomSpacerClassName = isRealEstateReferenceCard
            ? isMobileLandscape
                ? "h-1.5"
                : "h-2"
            : "";
        const servicePagePrimaryActionClassName = isMobileLandscape
            ? "w-full py-1.5 px-1.5 border border-white/20 rounded-md text-[8px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black transition-colors text-center"
            : isRealEstateReferenceCard
            ? "w-full py-[7px] px-2 border border-white/20 rounded-lg text-[9px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black transition-colors text-center"
            : "w-full py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center";
        const servicePageSecondaryActionClassName = isMobileLandscape
            ? "w-full py-1.5 px-1.5 bg-[#D4A017] text-black rounded-md text-[8px] font-bold uppercase tracking-[0.1em] hover:bg-white transition-colors text-center"
            : isRealEstateReferenceCard
            ? "w-full py-[7px] px-2 bg-[#D4A017] text-black rounded-lg text-[9px] font-bold uppercase tracking-[0.1em] hover:bg-white transition-colors text-center"
            : "w-full py-2 px-2 bg-[#D4A017] text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center";
        const servicePageParityCardBody = (
            <>
                <div className={`${servicePageImageHeightClassName} bg-neutral-800 overflow-hidden relative`}>
                    {isServiceOpenAllowed && isServiceOpenExternal ? (
                        <a href={serviceOpenHref} target="_blank" rel="noreferrer" className="block h-full">
                            <div className="h-full w-full">
                                <img
                                    src={renderedCardImage}
                                    alt={svc.title || niche.title}
                                    className={serviceCardImageInteractiveClassName}
                                    style={svc.imagePosition && !usesDesktopAspectImage ? { objectPosition: svc.imagePosition } : undefined}
                                />
                            </div>
                        </a>
                    ) : isServiceOpenAllowed ? (
                        <Link href={serviceOpenHref} className="block h-full">
                            <div className="h-full w-full">
                                <img
                                    src={renderedCardImage}
                                    alt={svc.title || niche.title}
                                    className={serviceCardImageInteractiveClassName}
                                    style={svc.imagePosition && !usesDesktopAspectImage ? { objectPosition: svc.imagePosition } : undefined}
                                />
                            </div>
                        </Link>
                    ) : (
                        <div className="h-full w-full">
                            <img
                                src={renderedCardImage}
                                alt={svc.title || niche.title}
                                className={serviceCardImageStaticClassName}
                                style={svc.imagePosition && !usesDesktopAspectImage ? { objectPosition: svc.imagePosition } : undefined}
                            />
                        </div>
                    )}
                    {svc.tag && (
                        <div className={`absolute ${isMobileLandscape ? "top-2 left-2" : "top-4 left-4"} flex gap-2`}>
                            <span className={`px-2 py-1 rounded ${isMobileLandscape ? "text-[8px]" : "text-[10px]"} font-bold ${svc.tag === "HOT" ? "bg-[#D4A017] text-black" : "bg-black/50 text-white backdrop-blur"}`}>
                                {svc.tag}
                            </span>
                        </div>
                    )}
                </div>
                <div className={servicePageBodyClassName}>
                    <h3 className={servicePageTitleClassName}>
                        {isServiceOpenAllowed && isServiceOpenExternal ? (
                            <a href={serviceOpenHref} target="_blank" rel="noreferrer" className="hover:text-[#D4A017] transition-colors">
                                <span style={isRealEstateReferenceCard ? clampLinesStyle(2) : undefined}>
                                    {formattedTitle}
                                </span>
                            </a>
                        ) : isServiceOpenAllowed ? (
                            <Link href={serviceOpenHref} className="hover:text-[#D4A017] transition-colors">
                                <span style={isRealEstateReferenceCard ? clampLinesStyle(2) : undefined}>
                                    {formattedTitle}
                                </span>
                            </Link>
                        ) : (
                            <span style={isRealEstateReferenceCard ? clampLinesStyle(2) : undefined}>
                                {formattedTitle}
                            </span>
                        )}
                    </h3>
                    {normalizedCategory ? (
                        <div className={`${servicePageCategoryClassName} ${isRealEstateReferenceCard ? "whitespace-pre-line" : ""}`} style={isRealEstateReferenceCard ? clampLinesStyle(3) : undefined}>
                            {normalizedCategory}
                        </div>
                    ) : null}
                    <p className={servicePageDescriptionClassName} style={isRealEstateReferenceCard ? clampLinesStyle(3) : undefined}>{svc.desc}</p>
                    <div className="mt-auto">
                        {formattedPriceText && !hideHighlightedPriceLine ? (
                            <div className={servicePagePriceClassName} style={shouldUseTwoLinePrice ? clampLinesStyle(2) : undefined}>
                                {formattedPriceText}
                            </div>
                        ) : null}
                        {!formattedPriceText && isAllServicesCard && isRealEstateReferenceCard ? (
                            <div className="mb-1.5 block w-full border-t border-[#2a2a2a] pt-2 text-[8.5px] leading-tight opacity-0 select-none">
                                spacer
                            </div>
                        ) : null}
                        {servicePageBottomSpacerClassName ? (
                            <div className={servicePageBottomSpacerClassName} aria-hidden="true" />
                        ) : null}
                        <div className={servicePageActionsClassName}>
                            {isSingleCtaExperimentCard ? (
                                useContactAnchorForSingleCta ? (
                                    <a href="#contact" className={servicePageSecondaryActionClassName}>
                                        {singleCtaLabel}
                                    </a>
                                ) : isExternalServiceLink ? (
                                    <a href={svc.link} target="_blank" rel="noreferrer" className={servicePageSecondaryActionClassName}>
                                        {singleCtaLabel}
                                    </a>
                                ) : (
                                    <Link href={svc.link} className={servicePageSecondaryActionClassName}>
                                        {singleCtaLabel}
                                    </Link>
                                )
                            ) : (
                                <>
                                    {isServiceOpenAllowed ? (
                                        isServiceOpenExternal ? (
                                            <a href={serviceOpenHref} target="_blank" rel="noreferrer" className={servicePagePrimaryActionClassName}>
                                                {svc.primaryCtaLabel ?? "Открыть услугу"}
                                            </a>
                                        ) : (
                                            <Link href={serviceOpenHref} className={servicePagePrimaryActionClassName}>
                                                {svc.primaryCtaLabel ?? "Открыть услугу"}
                                            </Link>
                                        )
                                    ) : null}
                                    {!isAllServicesCard ? (
                                        <a href="#contact" className={servicePageSecondaryActionClassName}>
                                            Обсудить задачу
                                        </a>
                                    ) : null}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );

        return (
            <MaybeDebugWrapper enabled={showDebugOverlays} key={cardSlug} id={serviceId} label={`Service Card: ${svc.title || svc.tag}`}>
                <article
                    id={`service-${cardSlug}`}
                    className={servicePageParityCardClassName}
                    style={servicePageParityCardStyle}
                >
                    {servicePageParityCardBody}
                </article>
            </MaybeDebugWrapper>
        );
    };

    return (
        <motion.div
            id={`niche-step-${niche.id}`}
            style={{
                y: index === 0 ? 0 : y,
                zIndex: index,
                top: stickyTop,
                height: stickyHeight
            }}
            className="sticky left-0 w-full overflow-hidden bg-black border-t border-white/20 scroll-mt-28 md:scroll-mt-40"
        >

            {/* Card Body (Image) */}
            <div className={`relative w-full h-full ${sectionBodyPaddingTopClassName} bg-zinc-800`}>
                {niche.isIntro ? (
                    <div className="absolute inset-0 z-0 bg-black flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/88" />
                        <div className="relative z-10 mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-5 px-3 py-4 md:grid-cols-[44fr_56fr] md:px-2 md:py-8 lg:px-3 xl:px-4">
                            <div className="flex h-full flex-col">
                                <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-[#07090D] px-8 py-6 xl:px-9">
                                    <div>
                                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">Об Агентстве</p>
                                        <h2 className="text-[clamp(1.98rem,3.65vw,3.98rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em] text-white">
                                            Производство
                                            <br />
                                            контента,
                                            <br />
                                            <span className="text-[#D4AF37]">которое работает</span>
                                            <br />
                                            <span className="text-[#D4AF37]">на задачу.</span>
                                        </h2>
                                        <div className="mt-4 h-px w-16 bg-[#D4AF37]/85" />
                                        <div className="mt-5 space-y-4 text-[clamp(0.95rem,0.98vw,1.14rem)] leading-[1.45] font-medium">
                                            <p className="text-white/78">
                                                Breus Media — агентство визуального продакшена и AI-контента для бизнеса. Мы работаем с компаниями, которым важно, чтобы контент двигал клиента к следующему шагу: заявке, звонку, бронированию, покупке.
                                            </p>
                                            <p className="text-white/68">
                                                В арсенале агентства: аэросъёмка, промо-видео, 360°-туры, reels, AI-визуализации и контентные пакеты. Работа начинается с задачи — формат подбирается под неё, а не наоборот.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <Link
                                            href="/about"
                                            className="inline-flex items-center rounded-[12px] bg-[#D4AF37] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F1218] transition-colors hover:bg-[#E0BC4A]"
                                        >
                                            Об Агентстве подробнее
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#07090D] px-8 py-6 xl:px-9">
                                <div className="mb-5">
                                    <h3 className="text-[1.26rem] md:text-[1.95rem] font-bold leading-[1.1] tracking-[-0.01em] text-white">
                                        Выберите свою нишу — <span className="text-[#D4AF37]">или начните с формата.</span>
                                    </h3>
                                </div>
                                <div className="grid flex-1 grid-cols-2 gap-9">
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col">
                                            {[
                                                { label: "Недвижимость", idx: 5 },
                                                { label: "Отели", idx: 6 },
                                                { label: "Рестораны", idx: 7 },
                                                { label: "Туризм", idx: 9 },
                                                { label: "Клиники", idx: 10 },
                                                { label: "Автобизнес", idx: 8 },
                                                { label: "IT", idx: 11 }
                                            ].map((item) => (
                                                <li key={item.label} className="border-b border-white/10 py-2.5 text-[15px] xl:text-[16px]">
                                                    <button
                                                        onClick={() => onNavigateToStep(item.idx)}
                                                        className="flex w-full items-center justify-between text-left font-medium text-white transition-colors hover:text-[#D4AF37]"
                                                    >
                                                        <span>{item.label}</span>
                                                        <span className="text-white/65">›</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <ul className="flex flex-col">
                                            {[
                                                { label: "Аэросъёмка", idx: 1 },
                                                { label: "Reels", idx: 3 },
                                                { label: "360°-туры", idx: 2 },
                                                { label: "AI-визуализация", idx: 4 }
                                            ].map((item) => (
                                                <li key={item.label} className="border-b border-white/10 py-2.5 text-[15px] xl:text-[16px]">
                                                    <button
                                                        onClick={() => onNavigateToStep(item.idx)}
                                                        className="flex w-full items-center justify-between text-left font-medium text-white transition-colors hover:text-[#D4AF37]"
                                                    >
                                                        <span>{item.label}</span>
                                                        <span className="text-white/65">›</span>
                                                    </button>
                                                </li>
                                            ))}
                                            <li className="border-b border-white/10 py-2.5 text-[15px] xl:text-[16px]">
                                                <a href="#contact" className="flex w-full items-center justify-between font-medium text-[#D4AF37] transition-colors hover:text-white">
                                                    <span>Ваш формат &rarr;</span>
                                                    <span className="text-[#D4AF37]">›</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-5 flex w-full justify-center">
                                    <p className="text-center text-[12px] font-medium tracking-wide text-white/48 xl:text-[13px]">
                                        Другая отрасль или формат — <a href="#contact" className="text-[#D4AF37] transition-colors hover:text-white">напишите</a>, найдём решение.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <MaybeDebugWrapper enabled={showDebugOverlays} id={index === 0 ? 900 : 8100 + index} label={`Niche Background: ${niche.id}`} className="absolute inset-0 z-0">
                        <div className="w-full h-full">
                            <img
                                src={niche.img}
                                alt={niche.title}
                                className="w-full h-full object-cover scale-[1.02] brightness-[0.82] contrast-[1.08] saturate-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/82 via-black/42 to-black/78" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(212,175,55,0.12),transparent_30%)]" />
                            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/58 to-transparent" />
                        </div>
                    </MaybeDebugWrapper>
                )}

                {showTopBackButton && prevStep && (
                    <div className={`hidden md:flex absolute ${topStaticNavOffsetClassName} left-0 right-0 z-[73] justify-center`}>
                        <div className="relative inline-flex">
                            <UiIdBadge id={backButtonUiId} />
                            <button
                                type="button"
                                onClick={handlePreviousIndustryClick}
                                data-ui-id={backButtonUiId}
                                data-ui-name={`GAZETA_BACK_${backButtonUiId}`}
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/75 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:border-[#D4AF37]/70 hover:text-white transition-colors"
                                aria-label={`Перейти к секции ${prevStep.id} ${prevStep.title}`}
                            >
                                <ArrowDown className="h-3 w-3 -rotate-180 text-[#D4AF37]" />
                                <span className="text-white/60">Назад</span>
                                <span className="text-[#D4AF37]">{prevStep.id}</span>
                                <span className="text-white">{prevStep.title}</span>
                            </button>
                        </div>
                    </div>
                )}
                {niche.detailedContent ? (
                    <div
                        ref={contentScrollRef}
                        onScroll={handleInnerScroll}
                        onWheelCapture={handleInnerWheelCapture}
                        onTouchStart={handleInnerTouchStart}
                        onTouchMove={handleInnerTouchMove}
                        onTouchEnd={handleInnerTouchEnd}
                        className={`absolute inset-0 z-10 text-white ${
                            shouldUseInnerVerticalScroll
                                ? "overflow-y-auto touch-pan-y custom-scrollbar"
                                : "overflow-y-hidden touch-pan-y"
                        } ${contentPaddingClassName} ${mobileContentPaddingOverrideClassName}`}
                    >
                        {isMobileCompactTop && shouldUseInnerVerticalScroll && (
                            <div className="pointer-events-none absolute right-1 top-12 bottom-6 z-30 flex items-end">
                                <div className="relative h-full w-[2px] rounded-full bg-white/15 overflow-hidden">
                                    <div
                                        className="absolute left-0 right-0 bottom-0 bg-[#D4AF37] transition-[height] duration-150"
                                        style={{ height: `${Math.max(8, innerScrollProgress * 100)}%` }}
                                    />
                                </div>
                            </div>
                        )}
                        <MaybeDebugWrapper enabled={showDebugOverlays} id={index === 0 ? 902 : 8300 + index} label={`Detailed Layout: ${niche.title}`}>
                            <div className={contentWrapperClassName}>
                                <div className={headingBlockClassName}>
                                    {shouldRenderDetailedEyebrow && niche.detailedContent.eyebrow && (
                                        <p className="mb-3 text-[11px] md:text-xs uppercase tracking-[0.32em] text-[#D4AF37] font-semibold">
                                            {niche.detailedContent.eyebrow}
                                        </p>
                                    )}
                                    {shouldRenderDetailedHeading && (
                                        <h2
                                            className={
                                                isUnifiedTopTextScreen
                                                    ? "text-[clamp(1.63rem,5.06vw,4.08rem)] md:text-[clamp(2.04rem,4.4vw,4.85rem)] leading-[0.93] font-extrabold uppercase tracking-[-0.018em] text-white font-sans"
                                                    : headingClassName
                                            }
                                        >
                                            {niche.detailedContent.heading}
                                        </h2>
                                    )}
                                    {isUnifiedTopTextScreen ? (
                                        <p className="mt-2 text-[clamp(1.02rem,1.96vw,1.7rem)] md:text-[clamp(1.15rem,1.79vw,1.87rem)] font-semibold leading-[1.28] text-white">
                                            {(() => {
                                                const subheading = niche.detailedContent?.subheading ?? "";
                                                const highlight = geoHighlightByNicheId[niche.id];
                                                if (!highlight || !subheading.includes(highlight)) return subheading;
                                                const [before, after] = subheading.split(highlight);
                                                return (
                                                    <>
                                                        {before}
                                                        <span className="text-[#D4AF37]">{highlight}</span>
                                                        {after}
                                                    </>
                                                );
                                            })()}
                                        </p>
                                    ) : (
                                        <p className={subheadingClassName}>
                                            {niche.detailedContent.subheading}
                                        </p>
                                    )}
                                    {niche.detailedContent.introNote && (
                                        <p
                                            className={
                                                isUnifiedTopTextScreen
                                                    ? "mt-2 text-[clamp(0.94rem,1.3vw,1.24rem)] md:text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.45] text-white/68"
                                                    : introNoteClassName
                                            }
                                        >
                                            {niche.detailedContent.introNote}
                                        </p>
                                    )}
                                </div>

                                {allServicesCard && niche.id === "02" && (
                                    <div className="mt-3 mb-3 flex justify-center">
                                        <Link
                                            href={allServicesCard.link}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/50 px-7 py-[13px] text-[11px] font-bold uppercase tracking-[0.22em] text-white/72 backdrop-blur-sm transition-all duration-200 hover:border-[#D4A017]/50 hover:text-[#D4A017] hover:bg-[#D4A017]/5"
                                        >
                                            <span>{({
                                                "02": "Все услуги аэросъёмки",
                                                "03": "Все услуги — 360° Туры",
                                                "04": "Все услуги — Reels",
                                                "05": "Все услуги — AI Контент",
                                                "06": "Все услуги недвижимости",
                                                "07": "Все услуги — Отели",
                                                "08": "Все услуги — Рестораны",
                                                "09": "Все услуги — Авто",
                                                "10": "Все услуги — Туризм",
                                                "11": "Все услуги — Клиники",
                                                "12": "Все услуги — IT",
                                            } as Record<string, string>)[niche.id] ?? "Все услуги"}</span>
                                            <ChevronRight className="h-3.5 w-3.5 opacity-55" />
                                        </Link>
                                    </div>
                                )}

                                <div className={mobileRailShellClassName}>
                                    {showMobileRailArrows && (
                                        <motion.button
                                            type="button"
                                            onClick={() => handleCardRailScroll("left")}
                                            animate={
                                                shouldAnimateMobileRailArrows
                                                    ? { opacity: [0.4, 0.95, 0.5], scale: [0.94, 1.02, 0.94] }
                                                    : undefined
                                            }
                                            transition={
                                                shouldAnimateMobileRailArrows
                                                    ? { duration: 1.9, repeat: Infinity, ease: "easeInOut" }
                                                    : undefined
                                            }
                                            className={`absolute ${mobileRailLeftArrowOffsetClassName} ${mobileRailArrowVerticalClassName} z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/68 text-white backdrop-blur-sm transition-colors hover:border-[#D4AF37]/75 hover:text-[#D4AF37] ${
                                                isMobileLandscape ? "h-7 w-7" : "h-8 w-8"
                                            }`}
                                            aria-label={`Прокрутить карточки ${niche.id} влево`}
                                        >
                                            <ChevronLeft className={`mx-auto ${isMobileLandscape ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
                                        </motion.button>
                                    )}
                                    <div
                                        ref={(node) => {
                                            servicesCardsContainerRef.current = node;
                                            if (useHorizontalServicesRail) {
                                                servicesRailRef.current = node;
                                            }
                                        }}
                                        data-services-rail={useHorizontalServicesRail ? "true" : undefined}
                                        className={mobileRailContainerClassName}
                                        style={useHorizontalServicesRail ? { touchAction: "pan-x" } : undefined}
                                    >
                                        {useMobileHorizontalServicesRail
                                            ? mobileServiceColumns.map((column, columnIndex) => (
                                                <div key={`column-${niche.id}-${columnIndex}`} className={mobileRailColumnClassName}>
                                                    {column.map((svc, columnItemIndex) =>
                                                        renderServiceCard(svc, columnIndex * 2 + columnItemIndex)
                                                    )}
                                                </div>
                                            ))
                                            : useDesktopHorizontalServicesRail
                                                ? (
                                                    <>
                                                        {orderedSourceServices.map((svc, i) => (
                                                            <div
                                                                key={svc.slug || i}
                                                                data-rail-item="true"
                                                                className={`flex shrink-0 snap-start ${
                                                                    isReelsScreen
                                                                        ? "w-[calc(25%-15px)] md:w-[calc(25%-16px)]"
                                                                        : "w-[calc(25%-12px)] md:w-[calc(25%-15px)]"
                                                                }`}
                                                            >
                                                                {renderServiceCard(svc, i)}
                                                            </div>
                                                        ))}
                                                        {!shouldCenterDesktopRail && (
                                                            <div className="w-px shrink-0 pointer-events-none" aria-hidden="true" />
                                                        )}
                                                    </>
                                                )
                                                : limitedServices.map((svc, i) => (
                                                <div key={svc.slug || i} className={limitedServices.length < 5 ? "w-full md:w-[320px] xl:w-[320px]" : "w-full"}>
                                                    {renderServiceCard(svc, i)}
                                                </div>
                                            ))}
                                    </div>
                                    {showMobileRailArrows && (
                                        <motion.button
                                            type="button"
                                            onClick={() => handleCardRailScroll("right")}
                                            animate={
                                                shouldAnimateMobileRailArrows
                                                    ? { opacity: [0.4, 0.95, 0.5], scale: [0.94, 1.02, 0.94] }
                                                    : undefined
                                            }
                                            transition={
                                                shouldAnimateMobileRailArrows
                                                    ? { duration: 1.9, repeat: Infinity, ease: "easeInOut" }
                                                    : undefined
                                            }
                                            className={`absolute ${mobileRailRightArrowOffsetClassName} ${mobileRailArrowVerticalClassName} z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/68 text-white backdrop-blur-sm transition-colors hover:border-[#D4AF37]/75 hover:text-[#D4AF37] ${
                                                isMobileLandscape ? "h-7 w-7" : "h-8 w-8"
                                            }`}
                                            aria-label={`Прокрутить карточки ${niche.id} вправо`}
                                        >
                                            <ChevronRight className={`mx-auto ${isMobileLandscape ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
                                        </motion.button>
                                    )}
                                </div>

                            </div>
                        </MaybeDebugWrapper>
                    </div>
                ) : index === 0 ? null : (
                    <motion.div
                        style={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    >
                        <DebugWrapper id={index === 0 ? 901 : 8200 + index} label={`Niche Center Text: ${niche.id}`}>
                            <div className="flex flex-col items-center gap-1.5 md:gap-3 px-6 text-center">
                                <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tighter uppercase text-white drop-shadow-2xl opacity-10">
                                    {niche.title}
                                </h2>
                                {(niche.detailedContent as unknown as DetailedContent | undefined)?.subheading && (
                                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] opacity-20 drop-shadow-md">
                                        {(niche.detailedContent as unknown as DetailedContent).subheading}
                                    </p>
                                )}
                            </div>
                        </DebugWrapper>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const faqItems = [
    {
        q: "Вы работаете только в Тбилиси?",
        a: "Работаем по всей Грузии — Тбилиси, Батуми, Кутаиси и другие города. AI-услуги оказываем удалённо по всему миру."
    },
    {
        q: "Сколько стоят ваши услуги?",
        a: "От 400 GEL за разовый выезд. Комплексные пакеты от 800 GEL. Точную стоимость рассчитываем под задачу — напишите нам в WhatsApp."
    },
    {
        q: "Как быстро будет готово видео?",
        a: "Монтаж занимает 3–5 рабочих дней после съёмки. Для срочных задач есть ускоренный формат."
    },
    {
        q: "Вы делаете всё сами или привлекаете подрядчиков?",
        a: "Всё делаем своей командой. Своё оборудование — два дрона DJI Air 3S и Avata 2, камеры Insta360 для 360-туров, студия монтажа. Никаких посредников."
    },
    {
        q: "Можно заказать несколько услуг за один выезд?",
        a: "Да, это наш стандартный подход. Один визит включает видео, аэросъёмку и 360-тур одновременно — быстрее и выгоднее чем заказывать по отдельности."
    },
    {
        q: "Работаете ли вы с малым бизнесом?",
        a: "Да. Есть пакеты от 400 GEL для малого бизнеса, стартапов и индивидуальных предпринимателей."
    },
    {
        q: "Делаете ли вы мониторинг строек для застройщиков и банков?",
        a: "Да. Регулярные дрон-облёты с GPS-привязкой, PDF-отчётом и сравнением этапов для банков, инвесторов и страховых. По всей Грузии."
    },
    {
        q: "Можно ли получить AI-контент без съёмки?",
        a: "Да. AI-визуал, описания объектов и Reels без выезда — клиент присылает материалы, мы упаковываем через AI. Удалённо по всему миру."
    }
];

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: { q: string, a: string }; isOpen: boolean, onToggle: () => void }) => (
    <div className="border-b border-white/10 last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-3 md:py-3.5 text-left group"
        >
            <span className="text-sm md:text-lg font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors pr-4">
                {item.q}
            </span>
            <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#D4AF37] text-2xl md:text-3xl font-light shrink-0 leading-none"
            >
                +
            </motion.span>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed pb-3 md:pb-4 pr-12 font-medium">
                        {item.a}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQCard = ({
    index,
    scrollYProgress,
    totalSteps,
    stickyTop,
    stickyHeight,
    isMobileLandscape,
    isMobilePortrait,
    onNavigateToStep,
    activeStepIndex
}: {
    index: number,
    scrollYProgress: MotionValue<number>,
    totalSteps: number,
    stickyTop: string,
    stickyHeight: string,
    isMobileLandscape: boolean,
    isMobilePortrait: boolean,
    onNavigateToStep: (targetIndex: number) => void,
    activeStepIndex: number
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const prevStep = index > 0 ? stackStepNavItems[index - 1] : null;
    const nextStep = stackStepNavItems[index + 1] ?? null;
    const topStaticNavOffsetClassName = isMobileLandscape ? "top-7" : "top-9";

    const stepSize = 1 / totalSteps;
    const start = index * stepSize;
    const entryStart = start + stepSize * 0.02;
    const entryEnd = start + stepSize * 0.08;

    const y = useTransform(scrollYProgress, [entryStart, entryEnd], ["100%", "0%"]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    const handlePrevClick = () => {
        if (!prevStep) return;
        onNavigateToStep(index - 1);
    };

    const handleNextClick = () => {
        if (!nextStep) return;
        onNavigateToStep(index + 1);
    };

    const sectionHeaderClassName = isMobilePortrait
        ? "px-4 pt-4 pb-2 border-b border-white/10"
        : isMobileLandscape
        ? "px-4 pt-2.5 pb-1.5 border-b border-white/10"
        : "px-6 md:px-12 pt-6 md:pt-8 pb-4 border-b border-white/10";
    const sectionHeaderIndexClassName = "text-[#D4AF37] font-bold mr-1 md:mr-2";

    return (
        <motion.div
            id="niche-step-13"
            style={{
                y,
                zIndex: index,
                top: stickyTop,
                height: stickyHeight
            }}
            className="flex flex-col sticky left-0 w-full overflow-hidden bg-zinc-950 border-t border-white/20 scroll-mt-28 md:scroll-mt-40"
        >
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Кнопка НАЗАД скрыта на мобиле */}
            {isMobileCompactTop && nextStep && (
                <div className="absolute bottom-2 left-0 right-0 z-[73] flex justify-center">
                    <button
                        type="button"
                        onClick={handleNextClick}
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/75 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:border-[#D4AF37]/70 hover:text-white transition-colors"
                        aria-label={`Перейти к секции ${nextStep.id} ${nextStep.title}`}
                    >
                        <span className="text-white/60">Далее</span>
                        <span className="text-[#D4AF37]">{nextStep.id}</span>
                        <span className="text-white">{nextStep.title}</span>
                        <ArrowDown className="h-3 w-3 text-[#D4AF37]" />
                    </button>
                </div>
            )}

            {/* FAQ Content */}
            <div className="flex-1 overflow-y-auto touch-pan-y px-6 py-6 md:px-12 md:py-8 max-w-4xl mx-auto w-full custom-scrollbar pb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-4 md:mb-6">
                    Частые <span className="text-[#D4AF37]">вопросы</span>
                </h2>

                <div className="divide-y divide-white/10 border-t border-white/10">
                    {faqItems.map((item, i) => (
                        <FAQAccordionItem
                            key={i}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const FormCard = ({
    index,
    scrollYProgress,
    totalSteps,
    stickyTop,
    stickyHeight,
    isMobileLandscape,
    isMobilePortrait,
    onNavigateToStep,
    activeStepIndex
}: {
    index: number,
    scrollYProgress: MotionValue<number>,
    totalSteps: number,
    stickyTop: string,
    stickyHeight: string,
    isMobileLandscape: boolean,
    isMobilePortrait: boolean,
    onNavigateToStep: (targetIndex: number) => void,
    activeStepIndex: number
}) => {
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const prevStep = index > 0 ? stackStepNavItems[index - 1] : null;
    const topStaticNavOffsetClassName = isMobileLandscape ? "top-7" : "top-9";

    const stepSize = 1 / totalSteps;
    const start = index * stepSize;
    const entryStart = start + stepSize * 0.02;
    const entryEnd = start + stepSize * 0.08;

    const y = useTransform(scrollYProgress, [entryStart, entryEnd], ["100%", "0%"]);

    const handlePrevClick = () => {
        if (!prevStep) return;
        onNavigateToStep(index - 1);
    };



    return (
        <motion.div
            id="niche-step-14"
            style={{
                y,
                zIndex: index,
                top: stickyTop,
                height: stickyHeight
            }}
            className="flex flex-col sticky left-0 w-full overflow-hidden bg-zinc-950 border-t border-white/20 scroll-mt-28 md:scroll-mt-40"
        >
            <div id="contact" className="absolute top-0 pointer-events-none" />

            {/* Кнопка НАЗАД скрыта на мобиле */}

            <div className="flex-1 overflow-y-auto touch-pan-y px-4 pt-2 md:px-8 md:pt-2 w-full custom-scrollbar pb-0">
                <section className="snap-start min-h-full h-full flex flex-col">
                    <DroneContactStitch />
                    <div className="-mx-4 mt-auto w-auto md:-mx-8">
                        <GazetaMinimalFooter />
                    </div>
                </section>
            </div>
    </motion.div>
    );
};

export function NichesStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobileLandscape = useMobileLandscape();
    const isMobilePortrait = useMobilePortrait();
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [isStackVisible, setIsStackVisible] = useState(false);
    const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);
    const stickyTopPx = isMobileLandscape
        ? LANDSCAPE_STICKY_TOP_PX
        : isMobilePortrait
        ? PORTRAIT_STICKY_TOP_PX
        : DEFAULT_STICKY_TOP_PX;
    const mobileStackPreviewPx = isMobileLandscape
        ? LANDSCAPE_STACK_PREVIEW_PX
        : isMobilePortrait
        ? PORTRAIT_STACK_PREVIEW_PX
        : 0;
    const stickyTop = `${stickyTopPx}px`;
    const headerHeight = isMobileLandscape ? 24 : isMobilePortrait ? 32 : 48;
    const cardStickyTopPx = stickyTopPx + headerHeight;
    const cardStickyTop = `${cardStickyTopPx}px`;
    const stickyHeight = `calc(100vh - ${stickyTopPx + mobileStackPreviewPx}px)`;
    const totalSteps = niches.length + 2; 
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const getActiveStepIndex = () => {
        const progress = scrollYProgress.get();
        // Calculate index based on progress (0 to 1) and total steps
        // Math.floor(progress * totalSteps) gives the current step
        // We handle the edge case where progress is exactly 1
        const rawIndex = Math.floor(progress * totalSteps);
        return Math.min(totalSteps - 1, Math.max(0, rawIndex));
    };

    const scrollToNicheStep = (targetIndex: number) => {
        if (typeof window === "undefined") return;
        const clampedIndex = Math.max(0, Math.min(totalSteps - 1, targetIndex));
        const targetStep = stackStepNavItems[clampedIndex];
        if (!targetStep) return;
        const containerEl = containerRef.current;
        if (!containerEl) return;

        // Sticky sections can report unstable viewport coordinates while stacked.
        // We scroll by container progress, so each nav item always maps to a
        // deterministic position in the stack track (01..14).
        const containerTopY = window.scrollY + containerEl.getBoundingClientRect().top;
        const containerScrollRange = Math.max(0, containerEl.scrollHeight - window.innerHeight);
        if (containerScrollRange > 0) {
            const targetProgress = clampedIndex / totalSteps;
            const targetY = containerTopY + containerScrollRange * targetProgress;
            window.scrollTo({
                top: Math.max(containerTopY, Math.min(containerTopY + containerScrollRange, targetY)),
                behavior: "smooth",
            });
            return;
        }

        const targetEl = document.getElementById(`niche-step-${targetStep.id}`);
        if (!targetEl) return;
        const fallbackTargetY = Math.max(0, window.scrollY + targetEl.getBoundingClientRect().top - cardStickyTopPx);
        window.scrollTo({
            top: fallbackTargetY,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const syncActiveStep = () => {
            setActiveStepIndex(getActiveStepIndex());
        };

        syncActiveStep();
        window.addEventListener("scroll", syncActiveStep, { passive: true });
        window.addEventListener("resize", syncActiveStep);

        return () => {
            window.removeEventListener("scroll", syncActiveStep);
            window.removeEventListener("resize", syncActiveStep);
        };
    }, [totalSteps]);

    useEffect(() => {
        if (!isMobileCompactTop) {
            setIsStackVisible(false);
            return;
        }

        const syncVisibility = () => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) {
                setIsStackVisible(false);
                return;
            }

            setIsStackVisible(rect.top < window.innerHeight - 96 && rect.bottom > stickyTopPx + 64);
        };

        syncVisibility();
        window.addEventListener("scroll", syncVisibility, { passive: true });
        window.addEventListener("resize", syncVisibility);

        return () => {
            window.removeEventListener("scroll", syncVisibility);
            window.removeEventListener("resize", syncVisibility);
        };
    }, [isMobileCompactTop, stickyTopPx]);

    useEffect(() => {
        if (!isMobileCompactTop || typeof document === "undefined") return;

        const originalOverflow = document.body.style.overflow;
        if (isQuickNavOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isMobileCompactTop, isQuickNavOpen]);

    const handleFloatingScrollControl = (direction: "up" | "down") => {
        const currentIndex = getActiveStepIndex();
        const currentStep = stackStepNavItems[currentIndex];
        if (!currentStep) return;

        const currentStepEl = document.getElementById(`niche-step-${currentStep.id}`);
        const innerScroller = currentStepEl?.querySelector(".custom-scrollbar") as HTMLDivElement | null;
        const scrollStep = isMobileLandscape ? 150 : 210;

        if (innerScroller) {
            const maxScrollTop = Math.max(0, innerScroller.scrollHeight - innerScroller.clientHeight);

            if (direction === "up" && innerScroller.scrollTop > 2) {
                innerScroller.scrollTo({
                    top: Math.max(0, innerScroller.scrollTop - scrollStep),
                    behavior: "smooth",
                });
                return;
            }

            if (direction === "down" && innerScroller.scrollTop < maxScrollTop - 2) {
                innerScroller.scrollTo({
                    top: Math.min(maxScrollTop, innerScroller.scrollTop + scrollStep),
                    behavior: "smooth",
                });
                return;
            }
        }

        if (direction === "up" && currentIndex > 0) {
            scrollToNicheStep(currentIndex - 1);
            return;
        }

        if (direction === "down" && currentIndex < totalSteps - 1) {
            scrollToNicheStep(currentIndex + 1);
        }
    };

    const activeMobileStep = stackStepNavItems[activeStepIndex] ?? stackStepNavItems[0];
    const activeMobileNextStep = stackStepNavItems[activeStepIndex + 1] ?? null;
    const showMobileQuickDock = isMobileCompactTop && isStackVisible && Boolean(activeMobileStep);
    const globalBottomNextOffsetClassName = isMobileLandscape
        ? "bottom-[calc(env(safe-area-inset-bottom,0px)+0.9rem)]"
        : "bottom-[calc(env(safe-area-inset-bottom,0px)+1.15rem)]";
    const handleGlobalNextStepClick = () => {
        if (!activeMobileNextStep) return;
        scrollToNicheStep(activeStepIndex + 1);
    };

    return (
        <div ref={containerRef} className="relative w-full bg-black" style={{ height: `${totalSteps * 100}vh` }}>
            {false && isMobileCompactTop && (
                <div className="fixed left-2 top-1/2 z-[200] -translate-y-1/2 pointer-events-auto">
                    <div className="rounded-full border border-[#D4AF37]/35 bg-black/58 px-1 py-1.5 backdrop-blur-md">
                        <div className="flex w-7 flex-col items-center gap-1">
                            <button
                                type="button"
                                onClick={() => handleFloatingScrollControl("up")}
                                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 bg-zinc-900/80 text-white hover:border-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors"
                                aria-label={`Прокрутить вверх. Текущий шаг ${stackStepNavItems[activeStepIndex]?.id ?? "01"}`}
                            >
                                <ChevronUp className="h-3.5 w-3.5" />
                            </button>
                            <div className="h-8 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/70 to-[#D4AF37]/10" />
                            <div className="text-[9px] font-black uppercase tracking-[0.12em] text-[#D4AF37]">
                                {stackStepNavItems[activeStepIndex]?.id ?? "01"}
                            </div>
                            <div className="h-8 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/70 to-[#D4AF37]/10" />
                            <button
                                type="button"
                                onClick={() => handleFloatingScrollControl("down")}
                                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 bg-zinc-900/80 text-white hover:border-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors"
                                aria-label={`Прокрутить вниз. Текущий шаг ${stackStepNavItems[activeStepIndex]?.id ?? "01"}`}
                            >
                                <ChevronDown className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showMobileQuickDock && activeMobileStep && (
                <div className={`fixed ${globalBottomNextOffsetClassName} left-0 right-0 z-[220] flex justify-center px-3 pointer-events-none`}>
                    <div className="pointer-events-auto relative inline-flex w-full max-w-sm items-center gap-2 rounded-[26px] border border-white/15 bg-black/78 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                        <UiIdBadge id={GLOBAL_NEXT_BUTTON_UI_ID} />
                        <button
                            type="button"
                            onClick={() => setIsQuickNavOpen(true)}
                            className="flex min-w-0 flex-1 items-center justify-between rounded-[18px] border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition-colors hover:border-[#D4AF37]/40"
                            aria-label="Открыть навигацию по секциям Gazeta"
                        >
                            <div className="min-w-0">
                                <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/42">
                                    Раздел
                                </div>
                                <div className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                                    <span className="mr-1 text-[#D4AF37]">{activeMobileStep.id}</span>
                                    {activeMobileStep.title}
                                </div>
                            </div>
                            <LayoutGrid className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                        </button>
                        {activeMobileNextStep ? (
                            <button
                                type="button"
                                onClick={handleGlobalNextStepClick}
                                data-ui-id={GLOBAL_NEXT_BUTTON_UI_ID}
                                data-ui-name="GAZETA_NEXT_9200"
                                className="inline-flex shrink-0 items-center gap-1 rounded-[18px] border border-white/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#D4AF37]/70"
                                aria-label={`Перейти к секции ${activeMobileNextStep.id} ${activeMobileNextStep.title}`}
                            >
                                <span className="text-white/60">Далее</span>
                                <span className="text-[#D4AF37]">{activeMobileNextStep.id}</span>
                                <ArrowDown className="h-3 w-3 text-[#D4AF37]" />
                            </button>
                        ) : (
                            <a
                                href="#contact"
                                className="inline-flex shrink-0 items-center gap-1 rounded-[18px] bg-[#D4AF37] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-black"
                            >
                                Контакт
                            </a>
                        )}
                    </div>
                </div>
            )}
            <AnimatePresence>
                {isQuickNavOpen && isMobileCompactTop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[260] bg-black/72 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ y: 32, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 32, opacity: 0 }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            className="absolute inset-x-3 bottom-[calc(env(safe-area-inset-bottom,0px)+5.4rem)] mx-auto max-w-md rounded-[30px] border border-white/12 bg-[#070707]/96 shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
                        >
                            <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                                        Навигация
                                    </p>
                                    <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-white/72">
                                        Быстрый переход по нишам, FAQ и форме без длинной прокрутки.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsQuickNavOpen(false)}
                                    className="rounded-full border border-white/10 p-2 text-white/72 transition-colors hover:border-[#D4AF37]/40 hover:text-white"
                                    aria-label="Закрыть навигацию"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-3 p-5">
                                {stackStepNavItems.map((step, stepIndex) => {
                                    const isActive = stepIndex === activeStepIndex;
                                    return (
                                        <button
                                            key={`${step.id}-${step.title}`}
                                            type="button"
                                            onClick={() => {
                                                setIsQuickNavOpen(false);
                                                scrollToNicheStep(stepIndex);
                                            }}
                                            className={`rounded-[20px] border px-3 py-3 text-left transition-colors ${
                                                isActive
                                                    ? "border-[#D4AF37]/55 bg-[#D4AF37]/10"
                                                    : "border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/35"
                                            }`}
                                        >
                                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                                                {step.id}
                                            </div>
                                            <div className="mt-1 text-[12px] font-bold uppercase leading-tight text-white">
                                                {step.title}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 
                GLOBAL NAVIGATION HEADER 
                Sticky at the top, shared by all 14 steps.
                This prevents duplicate renders and "ghosting" when cards stack.
            */}
            <div 
                className="sticky z-[100] w-full"
                style={{ top: `${stickyTopPx}px` }}
            >
                <div className={isMobileLandscape 
                    ? "h-6 w-full bg-zinc-900 border-b border-white/20 flex items-center shadow-lg"
                    : isMobilePortrait
                    ? "h-8 w-full bg-zinc-900 border-b border-white/20 flex items-center shadow-lg"
                    : "h-12 w-full bg-zinc-900 border-b border-white/20 flex items-center shadow-lg"
                }>
                    <StackSectionHeader
                        activeStepIndex={activeStepIndex}
                        sectionHeaderClassName="w-full h-full flex items-center px-4 md:px-6 uppercase tracking-widest text-[9px] md:text-xs font-bold text-white overflow-hidden"
                        onNavigateToStep={scrollToNicheStep}
                    />
                </div>
            </div>

            {niches.map((niche, index) => (
                <Card
                    key={niche.id}
                    niche={niche}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    totalSteps={totalSteps}
                    stickyTop={cardStickyTop}
                    stickyHeight={stickyHeight}
                    isMobileLandscape={isMobileLandscape}
                    isMobilePortrait={isMobilePortrait}
                    onNavigateToStep={scrollToNicheStep}
                    activeStepIndex={activeStepIndex}
                />
            ))}
            <FAQCard
                index={niches.length}
                scrollYProgress={scrollYProgress}
                totalSteps={totalSteps}
                stickyTop={cardStickyTop}
                stickyHeight={stickyHeight}
                isMobileLandscape={isMobileLandscape}
                isMobilePortrait={isMobilePortrait}
                onNavigateToStep={scrollToNicheStep}
                activeStepIndex={activeStepIndex}
            />
            <FormCard
                index={niches.length + 1}
                scrollYProgress={scrollYProgress}
                totalSteps={totalSteps}
                stickyTop={cardStickyTop}
                stickyHeight={stickyHeight}
                isMobileLandscape={isMobileLandscape}
                isMobilePortrait={isMobilePortrait}
                onNavigateToStep={scrollToNicheStep}
                activeStepIndex={activeStepIndex}
            />
        </div>
    );
}
