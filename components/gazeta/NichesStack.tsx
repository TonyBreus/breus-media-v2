"use client";
import React, { useRef, useState } from "react";
import { DebugWrapper } from "../debug/DebugWrapper";
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { Send, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { gazetaDetailRoutes, gazetaNicheLandingRoutes } from "@/constants/gazetaRoutes";
import { l2DirectionConfigs } from "@/constants/l2DirectionConfigs";
import type { L2ServiceItem } from "@/components/l2-direction/types";
import { droneServiceItems, type DroneServiceItem } from "@/components/drone/droneServicesData";
import { realEstateServiceItems, type RealEstateServiceItem } from "@/components/real-estate-service/realEstateServicesData";
import { useMobileLandscape } from "@/hooks/useMobileLandscape";
import { useMobilePortrait } from "@/hooks/useMobilePortrait";

const {
    aiContent,
    auto,
    clinics,
    customBusiness,
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

const niches = [
    {
        id: "00",
        title: "АЭРОСЪЁМКА",
        centerText: "АЭРОСЪЁМКА",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&q=80",
        detailedContent: {
            eyebrow: "Тбилиси • Батуми • Вся Грузия",
            heading: "УСЛУГИ АЭРОСЪЁМКИ",
            subheading: "Комплексные решения аэросъёмки для бизнеса и частных лиц. Тбилиси, Батуми и вся Грузия.",
            introNote: "10 форматов съёмки: продажи, мониторинг, inspection, hospitality, туризм и events.",
            services: [
                {
                    title: "Недвижимость",
                    eyebrow: "Продажи объектов",
                    desc: "Аэрофото и видео для листингов, инвест-презентаций и продаж. Объекты с аэровидео продаются на 68% быстрее.",
                    meta: "Фото, видео и вид на район",
                    cta: "Смотреть формат",
                    link: "/drone-real-estate",
                    img: "https://images.unsplash.com/photo-1512453979436-5a5369614333?w=800&q=80"
                },
                {
                    title: "Мониторинг стройки",
                    eyebrow: "Стройка и девелопмент",
                    desc: "Еженедельные облёты с GPS-привязкой. PDF-отчёты о прогрессе для инвесторов без выезда на площадку.",
                    meta: "Регулярные облёты + PDF",
                    cta: "Открыть решение",
                    link: "/drone-construction-monitoring",
                    img: "https://images.unsplash.com/photo-1541888086225-ee5a006c6426?w=800&q=80"
                },
                {
                    title: "Инспекция объектов",
                    eyebrow: "Технические осмотры",
                    desc: "Визуальная диагностика без лесов и промальпинистов. Быстрее, безопаснее и дешевле проверки людьми.",
                    meta: "Без лесов и лишнего риска",
                    cta: "Подробнее",
                    link: "/drone-object-inspection",
                    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                },
                {
                    title: "Отели и курорты",
                    eyebrow: "Hospitality",
                    desc: "Hero-ролики территории и номеров для сайта, Booking и соцсетей. Гости бронируют там, где видят атмосферу.",
                    meta: "Hero-ролик территории",
                    cta: "Смотреть кейс",
                    link: "/drone-hotels-tourism",
                    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                },
                {
                    title: "Рестораны",
                    eyebrow: "HoReCa",
                    desc: "Аэросъёмка открытых террас, ресторанов на крышах и за городом. Контент, который приводит гостей.",
                    meta: "Терраса, крыша, локация",
                    cta: "Посмотреть формат",
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
                    cta: "Открыть FPV",
                    link: "/drone-service",
                    img: "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?w=800&q=80"
                },
                {
                    title: "Реклама и ролики",
                    eyebrow: "Бренд-контент",
                    desc: "Рекламные ролики, брендовый контент и корпоративное видео с воздуха для сайта и соцсетей.",
                    meta: "Реклама для сайта и соцсетей",
                    cta: "Смотреть решение",
                    link: "/promo-video-service",
                    img: "https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?w=800&q=80"
                },
                {
                    title: "Туризм",
                    eyebrow: "Travel",
                    desc: "Cinematic аэросъёмка локаций Грузии. Горы, ущелья, замки — контент, который продаёт маршруты.",
                    meta: "Локации, маршруты, атмосфера",
                    cta: "Посмотреть формат",
                    link: "/drone-hotels-tourism",
                    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
                },
                {
                    title: "Мероприятия",
                    eyebrow: "Events",
                    desc: "Аэросъёмка открытий, корпоративов, спортивных соревнований и фестивалей на открытом воздухе.",
                    meta: "Фестивали, спорт, открытия",
                    cta: "Подробнее",
                    link: "/drone-weddings-events",
                    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
                }
            ]
        }
    },
    {
        id: "01",
        title: "Недвижимость",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
        detailedContent: {
            heading: "НЕДВИЖИМОСТЬ",
            subheading: "Аэросъёмка, 360-туры и видео для риелторов и застройщиков — объекты с видео продаются на 68% быстрее",
            services: [
                { title: "Видео для риелторов", desc: "Съёмка квартиры или дома: интерьер, экстерьер, район. Монтаж за 3–5 дней. От 400 GEL", link: "/drone-real-estate" },
                { title: "Видео для застройщиков", desc: "Презентационные ролики ЖК, рендеры и реальная съёмка для продаж и инвесторов", link: "/drone-real-estate" },
                { title: "Аэросъёмка объектов", desc: "DJI Air 3S, 4K. Облёт фасада, территории и района. 94% больше просмотров объявления", link: "/drone-real-estate" },
                { title: "360° виртуальные туры", desc: "Интерактивный тур по объекту. Загрузка на SS.ge, MyHome.ge и ваш сайт", link: "/360-tour-real-estate" },
                { title: "Мониторинг стройки", desc: "Ежемесячные дрон-облёты с GPS-привязкой и PDF-отчётом для банков и инвесторов", link: "/drone-construction-monitoring" },
                { title: "AI-упаковка объявлений", desc: "Улучшение фото, описания для порталов, Reels для соцсетей агентства", link: "/ai-visual/ai-real-estate" }
            ]
        }
    },
    {
        id: "02",
        title: "Отели",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
        detailedContent: {
            heading: "ОТЕЛИ",
            subheading: "Видеотуры, аэросъёмка и Reels для отелей Грузии — гости бронируют там, где видят атмосферу",
            services: [
                { title: "Видеотур по отелю", desc: "Номера, ресторан, бассейн, вид — cinematic видео 2–4 мин для сайта и Booking", link: "/drone-hotels-tourism" },
                { title: "Аэросъёмка территории", desc: "Дрон над отелем, парком и побережьем. Показывает локацию лучше любых слов", link: "/drone-hotels-tourism" },
                { title: "360° тур по номерам", desc: "Виртуальный тур который можно встроить на сайт, Booking и Google Maps", link: "/360-tour-hotels" },
                { title: "Reels и сезонный контент", desc: "Ежемесячный контент-пакет: 8–12 вертикальных видео под Instagram и TikTok", link: "/reels-promo/reels-hotel" },
                { title: "SMM для отеля", desc: "Ведение Instagram и TikTok — контент-план, съёмка, монтаж, коммуникация", link: "/drone-hotels-tourism" },
                { title: "AI-перевод и локализация", desc: "Описания номеров и постов на 3–5 языках через AI — для иностранных гостей", link: "/ai-content/hotel-ai-descriptions" }
            ]
        }
    },
    {
        id: "03",
        title: "Рестораны",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
        detailedContent: {
            heading: "РЕСТОРАНЫ",
            subheading: "Reels, фуд-видео и брендовый контент для ресторанов — гости идут туда, где видят атмосферу и еду",
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
        id: "04",
        title: "Авто бизнес",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
        detailedContent: {
            heading: "АВТО БИЗНЕС",
            subheading: "Видеосъёмка автосалонов, дроны для стоянок и AI-контент — покупатели выбирают авто глазами",
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
        id: "05",
        title: "Туризм",
        img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
        detailedContent: {
            heading: "ТУРИЗМ",
            subheading: "Аэросъёмка и видеогиды по Грузии — для турагентств, гидов и локаций по всей стране",
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
        id: "06",
        title: "Клиники",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
        detailedContent: {
            heading: "КЛИНИКИ",
            subheading: "Видео и AI-контент для медицинских центров — пациент выбирает клинику до первого звонка",
            services: [
                {
                    title: "Имиджевое видео клиники",
                    desc: "Показывает пространство, оборудование, подход и атмосферу.",
                    link: "/promo-video/promo-clinic",
                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
                    category: "Пространство · Оборудование · Подход",
                    price: "Brand Video · от 350 ₾",
                    primaryCtaLabel: "Подробнее",
                },
                {
                    title: "360° тур для клиник",
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
                    title: "AI-упаковка контента",
                    desc: "Описания, тексты и адаптация под digital-каналы.",
                    link: "/clinics-service#service-ai-upakovka-kontenta",
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
        id: "07",
        title: "IT",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
        detailedContent: {
            heading: "IT",
            subheading: "Продакшн видео, кейс-стади и AI-визуал для IT-компаний и стартапов в Грузии",
            services: [
                { title: "Продуктовое видео", desc: "Демо-ролик продукта или приложения — для инвесторов, сайта и App Store", link: "/promo-video-service" },
                { title: "Кейс-стади в видео", desc: "История клиента до/после внедрения вашего продукта. Лучший B2B-контент", link: "/business-service" },
                { title: "Видео для инвесторов", desc: "Pitch-видео стартапа: команда, продукт, рынок. 60–120 сек", link: "/promo-video-service" },
                { title: "AI-контент для LinkedIn и X", desc: "Регулярный контент: новости компании, мнения экспертов, продуктовые обновления", link: "/ai-visual/ai-brand" },
                { title: "Корпоративная съёмка", desc: "Команда, офис, культура компании — для найма, PR и партнёрств", link: "/business-service" },
                { title: "Reels для IT-бренда", desc: "Короткие видео о продукте, команде и технологиях для Instagram и TikTok", link: "/reels-promo/reels-clinic" }
            ]
        }
    },
    {
        id: "08",
        title: "Ваш бизнес",
        img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1600&q=80",
        detailedContent: {
            heading: "ВАШ БИЗНЕС",
            subheading: "Не нашли свою нишу? Мы делаем контент для любого бизнеса — обсудим вашу задачу",
            services: [
                { title: "Расскажите о вашем проекте", desc: "Опишите задачу — предложим формат, сроки и стоимость под ваш бюджет", link: "/business-service" },
                { title: "Пакет «Старт»", desc: "Видео + фото + 5 Reels для нового бизнеса. Всё необходимое для запуска", link: "/business-service" },
                { title: "Разовая съёмка", desc: "Один выезд — фото, видео, дрон. Всё в одном визите от 500 GEL", link: "/business-service" },
                { title: "AI-упаковка с нуля", desc: "Контент без съёмки: AI-визуал, сценарии, тексты, дизайн для соцсетей", link: "/ai-visual/ai-brand" },
                { title: "Ежемесячный контент", desc: "Абонемент на регулярный контент — не думаете о соцсетях, мы делаем всё", link: "/business-service" },
                { title: "Обсудить проект →", desc: "Напишите нам в WhatsApp — ответим за 15 минут", link: "https://wa.me/995574619393" }
            ]
        }
    },
];

const DEFAULT_STICKY_TOP_PX = 184;
const PORTRAIT_STICKY_TOP_PX = 104;
const LANDSCAPE_STICKY_TOP_PX = 84;

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
};

const toStackServiceFromL2 = (service: L2ServiceItem, fallbackLink: string): ServiceItem => ({
    slug: service.slug,
    title: service.title,
    desc: service.description,
    link: service.primaryHref ?? fallbackLink,
    img: service.image,
    category: service.category,
    price: service.price,
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
    category: service.category,
    price: service.price,
    primaryCtaLabel: service.primaryCtaLabel,
    cta: service.primaryCtaLabel,
    tag: service.tag,
    featured: service.featured,
});

const toStackServiceFromRealEstate = (service: RealEstateServiceItem): ServiceItem => ({
    slug: service.slug,
    title: service.title,
    desc: service.description,
    link: service.primaryHref ?? "/real-estate-service",
    img: service.image,
    category: service.category,
    price: service.price,
    primaryCtaLabel: service.primaryCtaLabel,
    cta: service.primaryCtaLabel,
    tag: service.tag,
    featured: service.featured,
});

const l2NicheToConfigKey: Partial<Record<string, keyof typeof l2DirectionConfigs>> = {
    "02": "hotelsService",
    "03": "restaurantsService",
    "04": "autoService",
    "05": "tourismService",
    "06": "clinicsService",
    "07": "businessService",
    "08": "businessService",
};

const canonicalServicesByNicheId: Partial<Record<string, ServiceItem[]>> = {
    "00": [...droneServiceItems]
        .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id))
        .map(toStackServiceFromDrone),
    "01": [...realEstateServiceItems]
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
        return <>{children}</>;
    }

    return (
        <DebugWrapper id={id} label={label} className={className}>
            {children}
        </DebugWrapper>
    );
};

const buildAllServicesCard = (niche: NicheItem): ServiceItem | null => {
    const link = gazetaNicheLandingRoutes[niche.id];

    if (!link) {
        return null;
    }

    const isAerialNiche = niche.id === "00";
    const isRealEstateNiche = niche.id === "01";
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
            cta: "Открыть решение",
        };
    }

    if (content.includes("360")) {
        return {
            tag: "360",
            eyebrow: "Иммерсивный формат",
            meta: "Виртуальный тур",
            cta: "Смотреть формат",
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
            cta: "Открыть решение",
        };
    }

    if (content.includes("аэросъ") || content.includes("дрон")) {
        return {
            tag: "DRONE",
            eyebrow: "Aerial-визуал",
            meta: "Съёмка с воздуха",
            cta: "Посмотреть формат",
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
            cta: "Открыть решение",
        };
    }

    if (content.includes("дизайн")) {
        return {
            tag: "DESIGN",
            eyebrow: "Визуальная упаковка",
            meta: "Меню и носители",
            cta: "Подробнее",
        };
    }

    if (content.includes("видео") || content.includes("ролик") || content.includes("съёмка")) {
        return {
            tag: "VIDEO",
            eyebrow: "Продакшн",
            meta: "Съёмка и монтаж",
            cta: "Смотреть формат",
        };
    }

    return {
        eyebrow: niche.title,
        meta: `${niche.title} / формат`,
        cta: "Подробнее",
    };
};

const isExternalHref = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

const Card = ({ niche, index, scrollYProgress, totalSteps, stickyTop, stickyHeight, isMobileLandscape, isMobilePortrait }: StackCardProps) => {
    const contentScrollRef = useRef<HTMLDivElement | null>(null);
    const lastTouchYRef = useRef<number | null>(null);
    const [innerScrollProgress, setInnerScrollProgress] = useState(0);
    const isAerialScreen = niche.id === "00";
    const isAerialCompactScreen = niche.id === "00";
    const isCompactNicheScreen = niche.id !== "00";
    const showDebugOverlays = !isAerialScreen;
    const screenLink = gazetaNicheLandingRoutes[niche.id];
    const allServicesCard = buildAllServicesCard(niche);
    const sourceServices = canonicalServicesByNicheId[niche.id] ?? niche.detailedContent?.services ?? [];
    const limitedServices = sourceServices.slice(0, 5);
    const services = niche.detailedContent
        ? [
            ...limitedServices,
            ...(allServicesCard ? [allServicesCard] : []),
        ]
        : [];
    // Each section takes 1/totalSteps of the scroll track
    const stepSize = 1 / totalSteps;
    const start = index * stepSize;

    // We split each step so the card STAYS still for 20% of the step, 
    // ENTERS for 50%, and then STAYS for the remaining 30%.
    // This allows the user to scroll through the internal contents (services grid) of the previous card
    // before the new card slides over it.
    const entryStart = start + stepSize * 0.2;
    const entryEnd = start + stepSize * 0.7;

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
        ? "min-h-full flex flex-col max-w-[1500px] mx-auto w-full pb-0"
        : isCompactNicheScreen
        ? "min-h-full flex flex-col max-w-[1500px] mx-auto w-full pb-2"
        : "min-h-full flex flex-col justify-center max-w-[1500px] mx-auto w-full pb-10";
    const headingBlockClassName = isAerialCompactScreen
        ? "max-w-4xl mb-10 md:mb-14 mt-4 md:mt-0 xl:mb-3"
        : isCompactNicheScreen
        ? "max-w-4xl mb-4 md:mb-6 mt-4 md:mt-0 xl:mb-3"
        : "max-w-4xl mb-10 md:mb-14 mt-4 md:mt-0";
    const headingClassName = isAerialCompactScreen
        ? "font-sans font-black tracking-tight uppercase text-white drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl xl:text-[42px] max-w-4xl mb-4 md:mb-5 xl:mb-2 leading-[0.95]"
        : isCompactNicheScreen
        ? "font-sans font-black tracking-tight uppercase text-white drop-shadow-2xl text-4xl md:text-6xl xl:text-5xl max-w-4xl mb-3 xl:mb-2 leading-[0.96]"
        : "font-sans font-black tracking-tighter uppercase text-white drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-4 md:mb-5";
    const subheadingClassName = isAerialCompactScreen
        ? "text-base md:text-xl lg:text-2xl xl:text-base text-white/84 max-w-3xl xl:max-w-4xl leading-relaxed xl:leading-snug font-medium"
        : isCompactNicheScreen
        ? "text-base md:text-xl xl:text-lg text-white/84 max-w-4xl leading-snug font-medium"
        : "text-base md:text-xl lg:text-2xl text-white/84 max-w-3xl leading-relaxed font-medium";
    const introNoteClassName = isAerialCompactScreen
        ? "mt-4 md:mt-5 max-w-2xl xl:max-w-3xl text-sm md:text-base xl:text-[12px] text-white/58 leading-relaxed xl:leading-snug"
        : "mt-4 md:mt-5 max-w-2xl text-sm md:text-base text-white/58 leading-relaxed";
    const servicesGridClassName = isAerialScreen
        ? "md:grid-cols-3 xl:grid-cols-5 xl:grid-rows-2 gap-4 md:gap-5 xl:gap-2.5"
        : isCompactNicheScreen
            ? "md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-4 md:gap-4 xl:gap-3"
            : "xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6";
    const mobileServicesGridClassName = isMobileLandscape
        ? "grid-cols-4 gap-2 md:grid-cols-4"
        : `grid-cols-2 gap-2 sm:grid-cols-2 ${servicesGridClassName}`;
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const nextNiche = index < niches.length - 1 ? niches[index + 1] : null;
    const sectionHeaderClassName = isMobileLandscape
        ? "h-6 w-full bg-zinc-900 border-b border-white/20 flex items-center px-3 uppercase tracking-[0.16em] text-[9px] font-bold text-white z-20 absolute top-0 left-0 shadow-lg"
        : isMobilePortrait
        ? "h-8 w-full bg-zinc-900 border-b border-white/20 flex items-center px-4 uppercase tracking-[0.18em] text-[10px] font-bold text-white z-20 absolute top-0 left-0 shadow-lg"
        : "h-12 w-full bg-zinc-900 border-b border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold text-white z-20 absolute top-0 left-0 shadow-lg";
    const sectionHeaderInteractiveClassName = `${sectionHeaderClassName} cursor-pointer hover:bg-zinc-800 transition-colors`;
    const sectionBodyPaddingTopClassName = isMobileLandscape ? "pt-6" : isMobilePortrait ? "pt-8" : "pt-12";
    const sectionHeaderIndexClassName = isMobileCompactTop ? "text-[#D4AF37] mr-2" : "text-[#D4AF37] mr-4";
    const showNextIndustryHint = isMobileCompactTop && Boolean(nextNiche) && innerScrollProgress > 0.88;

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
        if (!isMobileCompactTop) return;

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
        if (!isMobileCompactTop) return;
        lastTouchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleInnerTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isMobileCompactTop) return;

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

    return (
        <motion.div
            style={{
                y: index === 0 ? 0 : y,
                zIndex: index,
                top: stickyTop,
                height: stickyHeight
            }}
            className="sticky left-0 w-full overflow-hidden bg-black border-t border-white/20"
        >
            {/* Card Header (Accordion Tab) */}
            <MaybeDebugWrapper enabled={showDebugOverlays} id={index === 0 ? 999 : 8000 + index} label={`Niche Header Row: ${niche.id}`}>
                {screenLink ? (
                    <Link href={screenLink}>
                        <div className={sectionHeaderInteractiveClassName}>
                            <span className={sectionHeaderIndexClassName}>{niche.id}</span>
                            <span>{niche.title}</span>
                        </div>
                    </Link>
                ) : (
                    <div className={sectionHeaderClassName}>
                        <span className={sectionHeaderIndexClassName}>{niche.id}</span>
                        <span>{niche.title}</span>
                    </div>
                )}
            </MaybeDebugWrapper>

            {/* Card Body (Image) */}
            <div className={`relative w-full h-full ${sectionBodyPaddingTopClassName} bg-zinc-800`}>
                <MaybeDebugWrapper enabled={showDebugOverlays} id={index === 0 ? 900 : 8100 + index} label={`Niche Background: ${niche.id}`} className="absolute inset-0 z-0">
                    <div className="w-full h-full">
                        <img
                            src={niche.img}
                            alt={niche.title}
                            className="w-full h-full object-cover scale-[1.02] brightness-[0.82] contrast-[1.08] saturate-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/82 via-black/42 to-black/78" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(212,175,55,0.12),transparent_30%)]" />
                        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/58 to-transparent" /> {/* Darkened background slightly for better text readability */}
                    </div>
                </MaybeDebugWrapper>

                {niche.detailedContent ? (
                    <div
                        ref={contentScrollRef}
                        onScroll={handleInnerScroll}
                        onWheelCapture={handleInnerWheelCapture}
                        onTouchStart={handleInnerTouchStart}
                        onTouchMove={handleInnerTouchMove}
                        onTouchEnd={handleInnerTouchEnd}
                        className={`absolute inset-0 z-10 text-white overflow-y-auto overscroll-y-contain touch-pan-y custom-scrollbar ${contentPaddingClassName}`}
                    >
                        {isMobileCompactTop && (
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
                                    {niche.detailedContent.eyebrow && (
                                        <p className="mb-3 text-[11px] md:text-xs uppercase tracking-[0.32em] text-[#D4AF37] font-semibold">
                                            {niche.detailedContent.eyebrow}
                                        </p>
                                    )}
                                    <h2 className={headingClassName}>
                                        {niche.detailedContent.heading}
                                    </h2>
                                    <p className={subheadingClassName}>
                                        {niche.detailedContent.subheading}
                                    </p>
                                    {niche.detailedContent.introNote && (
                                        <p className={introNoteClassName}>
                                            {niche.detailedContent.introNote}
                                        </p>
                                    )}
                                </div>

                                <div className={`grid ${mobileServicesGridClassName}`}>
                                    {services.map((svc: ServiceItem, i: number) => {
                                        // Start unique IDs from 8400+ range, isolated by index (e.g., 8410, 8420)
                                        const serviceId = 8400 + (index * 10) + i;
                                        const isAllServicesCard = svc.variant === "all-services";
                                        const isAerialAllServicesCard = niche.id === "00" && isAllServicesCard;
                                        const isCompactAllServicesCard = isCompactNicheScreen && isAllServicesCard;
                                        const suggestedCardDetails = isAllServicesCard ? {} : getSuggestedCardDetails(niche, svc);
                                        const cardTag = svc.tag || suggestedCardDetails.tag;
                                        const cardTagAccent = svc.tagAccent ?? suggestedCardDetails.tagAccent ?? false;
                                        const cardImage = svc.img || niche.img;
                                        const cardSlug = svc.slug || (svc.title ? svc.title.toLowerCase().replace(/[^a-zа-я0-9]+/gi, "-") : `card-${niche.id}-${i}`);
                                        const isExternalServiceLink = isExternalHref(svc.link);
                                        const cardEyebrow = svc.eyebrow || suggestedCardDetails.eyebrow || niche.title;
                                        const cardMeta = svc.meta || suggestedCardDetails.meta || (isAllServicesCard ? "Вся страница направления" : "Форматы и детали");
                                        const cardCta = svc.cta || suggestedCardDetails.cta || (isAllServicesCard ? "Открыть страницу" : "Подробнее");
                                        const cardGridClassName = "";
                                        const cardSurfaceClassName = isCompactAllServicesCard || isAerialAllServicesCard
                                            ? "bg-[linear-gradient(135deg,rgba(16,16,18,0.94),rgba(28,28,32,0.9))] shadow-[0_26px_60px_rgba(0,0,0,0.38)]"
                                            : "bg-zinc-950/72 shadow-[0_20px_50px_rgba(0,0,0,0.32)]";
                                        const cardFrameClassName = cardTagAccent || isCompactAllServicesCard || isAerialAllServicesCard
                                            ? "border-[#D4AF37]/55 ring-1 ring-[#D4AF37]/30"
                                            : "border-white/12";
                                        const cardMinHeightClassName = isAerialCompactScreen
                                            ? "min-h-[150px] sm:min-h-[220px] xl:min-h-[126px]"
                                            : isCompactNicheScreen
                                            ? "min-h-[150px] sm:min-h-[220px] xl:min-h-[132px]"
                                            : "min-h-[150px] sm:min-h-[220px] xl:min-h-[238px]";
                                        const cardClassName = `relative overflow-hidden border transition-all group backdrop-blur-md flex flex-col justify-between h-full hover:-translate-y-1 rounded-[24px] ${cardMinHeightClassName} ${cardGridClassName} ${cardSurfaceClassName} ${cardFrameClassName} hover:border-[#D4AF37]/85`;
                                        const cardBody = (
                                            <>
                                                {cardImage && (
                                                    <>
                                                        <img src={cardImage} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 z-0 text-transparent scale-100 group-hover:scale-105 brightness-[0.88] contrast-[1.04] ${isCompactAllServicesCard || isAerialAllServicesCard ? 'opacity-26 group-hover:opacity-34' : 'opacity-38 group-hover:opacity-54'}`} alt="" aria-hidden="true" />
                                                        <div className={`absolute inset-0 z-0 ${isCompactAllServicesCard || isAerialAllServicesCard ? 'bg-gradient-to-r from-zinc-950 via-zinc-950/92 to-zinc-900/78' : 'bg-gradient-to-t from-zinc-950 via-zinc-950/74 to-zinc-950/24'}`} />
                                                        <div className={`absolute inset-0 z-0 ${isCompactAllServicesCard || isAerialAllServicesCard ? 'bg-[radial-gradient(circle_at_82%_24%,rgba(212,175,55,0.18),transparent_28%)]' : 'bg-gradient-to-r from-black/44 via-transparent to-black/18'}`} />
                                                    </>
                                                )}
                                                <div className={`relative z-10 flex h-full flex-col ${isAerialCompactScreen ? 'p-5 md:p-6 xl:p-3' : isCompactNicheScreen ? 'p-5 md:p-6 xl:p-4' : 'p-5 md:p-6 xl:p-7'}`}>
                                                    <div className={`${isAerialCompactScreen ? 'mb-5 xl:mb-2.5' : isCompactNicheScreen ? 'mb-5 xl:mb-3' : 'mb-5 xl:mb-6'} flex items-start justify-between gap-3`}>
                                                        <div className="flex flex-wrap gap-2">
                                                            {cardTag && (
                                                                <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] rounded-full ${cardTagAccent ? 'bg-[#D4AF37] text-black' : 'bg-white/12 text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-colors'}`}>
                                                                    {cardTag}
                                                                </span>
                                                            )}
                                                            <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full border ${isCompactAllServicesCard || isAerialAllServicesCard ? 'bg-[#D4AF37]/14 text-[#F1D784] border-[#D4AF37]/30' : 'bg-black/30 text-white/72 border-white/10'}`}>
                                                                {cardEyebrow}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] uppercase tracking-[0.22em] text-white/38 group-hover:text-white/55 transition-colors shrink-0">
                                                            {niche.id}
                                                        </span>
                                                    </div>
                                                    {svc.title && (
                                                        <h3 className={`font-black group-hover:text-[#D4AF37] transition-colors uppercase tracking-[0.1em] leading-tight ${isAerialCompactScreen ? 'mb-2 text-base md:text-lg xl:text-[12px]' : isCompactNicheScreen ? 'mb-2 text-base md:text-lg xl:text-[15px]' : 'mb-3 text-base md:text-lg'} ${isCompactAllServicesCard || isAerialAllServicesCard ? 'max-w-[20ch] text-lg md:text-[22px] xl:text-[12px]' : isAerialCompactScreen ? 'max-w-[18ch]' : isCompactNicheScreen ? 'max-w-[22ch]' : 'max-w-[16ch]'}`}>
                                                            {svc.title}
                                                        </h3>
                                                    )}
                                                    <p className={`${isAerialCompactScreen ? 'text-sm md:text-[15px] xl:text-[10px] leading-[1.22] max-h-[3.66em] overflow-hidden' : isCompactNicheScreen ? 'text-sm md:text-[15px] xl:text-[13px] leading-[1.35] max-h-[4.1em] overflow-hidden' : 'text-sm md:text-[15px] xl:text-base leading-[1.72]'} text-white/82 font-medium ${isAerialCompactScreen ? 'mb-3 xl:mb-2' : isCompactNicheScreen ? 'mb-3 xl:mb-2.5' : 'mb-5 xl:mb-6'} flex-1 ${isCompactAllServicesCard || isAerialAllServicesCard ? 'max-w-[72ch] xl:max-w-[88ch]' : isAerialScreen || isAerialAllServicesCard ? 'max-w-[30ch] xl:max-w-[32ch]' : isCompactNicheScreen ? 'max-w-[38ch]' : 'max-w-[34ch]'}`}>
                                                        {svc.desc}
                                                    </p>
                                                    <div className={`mt-auto ${isAerialCompactScreen ? 'pt-3 xl:pt-1.5' : isCompactNicheScreen ? 'pt-3 xl:pt-2' : 'pt-4'} border-t border-white/10 flex items-center justify-between gap-3`}>
                                                        <div className={`${isAerialCompactScreen ? 'text-[11px] xl:text-[8px]' : isCompactNicheScreen ? 'text-[11px] xl:text-[9px]' : 'text-[11px]'} uppercase tracking-[0.16em] ${isCompactAllServicesCard || isAerialAllServicesCard ? 'text-[#F1D784]' : 'text-[#D4AF37]'}`}>
                                                            {cardMeta}
                                                        </div>
                                                        <div className={`inline-flex items-center gap-1.5 uppercase tracking-[0.18em] text-white/78 group-hover:text-white transition-colors ${isAerialCompactScreen ? 'text-[11px] xl:text-[8px]' : isCompactNicheScreen ? 'text-[11px] xl:text-[9px]' : 'text-[11px]'}`}>
                                                            <span>{cardCta}</span>
                                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                        const servicePageParityCardClassName = `service-card-target scroll-mt-32 bg-[#141414] border border-[#2a2a2a] rounded-[12px] overflow-hidden group hover:border-[#D4A017] transition-all flex flex-col h-full ${svc.featured ? 'gold-glow border-[#D4A017]/50' : ''}`;
                                        const servicePageParityCardStyle = svc.featured ? { boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)' } : {};
                                        const hideHighlightedPriceLine = serviceId === 8410 || serviceId === 8411;
                                        const servicePageImageHeightClassName = isMobileLandscape
                                            ? "h-20"
                                            : "h-28 sm:h-40";
                                        const servicePageBodyClassName = isMobileLandscape
                                            ? "px-2.5 pt-2 pb-2 flex-grow flex flex-col"
                                            : "px-3 pt-3 pb-3 sm:px-5 sm:pt-5 sm:pb-4 flex-grow flex flex-col";
                                        const servicePageTitleClassName = isMobileLandscape
                                            ? `text-[11px] font-bold leading-tight mb-1 ${svc.featured ? 'text-[#D4A017]' : 'text-white'}`
                                            : `text-sm sm:text-lg font-bold mb-1 ${svc.featured ? 'text-[#D4A017]' : 'text-white'}`;
                                        const servicePageCategoryClassName = isMobileLandscape
                                            ? "text-[8px] text-gray-500 uppercase tracking-[0.12em] mb-1.5"
                                            : "text-[10px] text-gray-500 uppercase tracking-wider mb-2";
                                        const servicePageDescriptionClassName = isMobileLandscape
                                            ? "text-[10px] text-gray-400 mb-2 leading-tight"
                                            : "text-xs sm:text-sm text-gray-400 mb-3 leading-snug";
                                        const servicePagePriceClassName = isMobileLandscape
                                            ? "pt-2 border-t border-[#2a2a2a] text-[8px] text-[#D4A017] font-bold uppercase tracking-[0.12em] mb-2"
                                            : "pt-3 border-t border-[#2a2a2a] text-[10px] text-[#D4A017] font-bold uppercase tracking-wider mb-4";
                                        const servicePageActionsClassName = "flex flex-col gap-1.5 lg:flex-row lg:gap-3";
                                        const servicePagePrimaryActionClassName = isMobileLandscape
                                            ? "w-full py-1.5 px-1.5 border border-white/20 rounded-md text-[8px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black transition-colors text-center"
                                            : "w-full py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center";
                                        const servicePageSecondaryActionClassName = isMobileLandscape
                                            ? "w-full py-1.5 px-1.5 bg-[#D4A017] text-black rounded-md text-[8px] font-bold uppercase tracking-[0.1em] hover:bg-white transition-colors text-center"
                                            : "w-full py-2 px-2 bg-[#D4A017] text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center";
                                        const servicePageParityCardBody = (
                                            <>
                                                <div className={`${servicePageImageHeightClassName} bg-neutral-800 overflow-hidden relative`}>
                                                    {isExternalServiceLink ? (
                                                        <a href={svc.link} target="_blank" rel="noreferrer" className="block h-full">
                                                            <img
                                                                src={cardImage}
                                                                alt={svc.title || niche.title}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                                            />
                                                        </a>
                                                    ) : (
                                                        <Link href={svc.link} className="block h-full">
                                                            <img
                                                                src={cardImage}
                                                                alt={svc.title || niche.title}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                                            />
                                                        </Link>
                                                    )}
                                                    {svc.tag && (
                                                        <div className={`absolute ${isMobileLandscape ? "top-2 left-2" : "top-4 left-4"} flex gap-2`}>
                                                            <span className={`px-2 py-1 rounded ${isMobileLandscape ? "text-[8px]" : "text-[10px]"} font-bold ${svc.tag === 'HOT' ? 'bg-[#D4A017] text-black' : 'bg-black/50 text-white backdrop-blur'}`}>
                                                                {svc.tag}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={servicePageBodyClassName}>
                                                    <h3 className={servicePageTitleClassName}>
                                                        {isExternalServiceLink ? (
                                                            <a href={svc.link} target="_blank" rel="noreferrer" className="hover:text-[#D4A017] transition-colors">
                                                                {svc.title}
                                                            </a>
                                                        ) : (
                                                            <Link href={svc.link} className="hover:text-[#D4A017] transition-colors">
                                                                {svc.title}
                                                            </Link>
                                                        )}
                                                    </h3>
                                                    {svc.category ? (
                                                        <div className={servicePageCategoryClassName}>
                                                            {svc.category}
                                                        </div>
                                                    ) : null}
                                                    <p className={servicePageDescriptionClassName}>{svc.desc}</p>
                                                    <div className="mt-auto">
                                                        {svc.price && !hideHighlightedPriceLine ? (
                                                            <div className={servicePagePriceClassName}>
                                                                {svc.price}
                                                            </div>
                                                        ) : null}
                                                        <div className={servicePageActionsClassName}>
                                                            {isExternalServiceLink ? (
                                                                <a
                                                                    href={svc.link}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className={servicePagePrimaryActionClassName}
                                                                >
                                                                    {svc.primaryCtaLabel ?? "Подробнее"}
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    href={svc.link}
                                                                    className={servicePagePrimaryActionClassName}
                                                                >
                                                                    {svc.primaryCtaLabel ?? "Подробнее"}
                                                                </Link>
                                                            )}
                                                            {!isAllServicesCard ? (
                                                                <a
                                                                    href="#contact"
                                                                    className={servicePageSecondaryActionClassName}
                                                                >
                                                                    Заказать
                                                                </a>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                        return (
                                            <MaybeDebugWrapper enabled={showDebugOverlays} key={cardSlug} id={serviceId} label={`Service Card: ${svc.title || svc.tag}`} className={cardGridClassName || undefined}>
                                                <article
                                                    id={`service-${cardSlug}`}
                                                    className={servicePageParityCardClassName}
                                                    style={servicePageParityCardStyle}
                                                >
                                                    {servicePageParityCardBody}
                                                </article>
                                            </MaybeDebugWrapper>
                                        );
                                    })}
                                </div>

                                {showNextIndustryHint && nextNiche && (
                                    <div className="pointer-events-none sticky bottom-1 z-30 mt-4 flex justify-center">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md">
                                            <span className="text-white/60">Далее</span>
                                            <span className="text-[#D4AF37]">{nextNiche.id}</span>
                                            <span className="text-white">{nextNiche.title}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </MaybeDebugWrapper>
                    </div>
                ) : (
                    <motion.div
                        style={{ opacity: index === 0 ? opacity : 1 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    >
                        <DebugWrapper id={index === 0 ? 901 : 8200 + index} label={`Niche Center Text: ${niche.id}`}>
                            <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tighter uppercase text-white drop-shadow-2xl">
                                {niche.centerText || niche.title}
                            </h2>
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

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) => (
    <div className="border-b border-white/10 last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
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
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed pb-5 md:pb-6 pr-12 font-medium">
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
    isMobilePortrait
}: {
    index: number,
    scrollYProgress: MotionValue<number>,
    totalSteps: number,
    stickyTop: string,
    stickyHeight: string,
    isMobileLandscape: boolean,
    isMobilePortrait: boolean
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const stepSize = 1 / totalSteps;
    const start = index * stepSize;
    const entryStart = start + stepSize * 0.2;
    const entryEnd = start + stepSize * 0.7;

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

    return (
        <motion.div
            style={{ y, zIndex: 90, top: stickyTop, height: stickyHeight }}
            className="sticky left-0 w-full flex flex-col bg-zinc-950 text-white overflow-hidden border-t border-white/20"
        >
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Card Header */}
            <div className={isMobileLandscape
                ? "h-6 w-full bg-zinc-900 border-b border-white/20 flex items-center px-3 uppercase tracking-[0.16em] text-[9px] font-bold shrink-0 z-20"
                : isMobilePortrait
                ? "h-8 w-full bg-zinc-900 border-b border-white/20 flex items-center px-4 uppercase tracking-[0.18em] text-[10px] font-bold shrink-0 z-20"
                : "h-12 w-full bg-zinc-900 border-b border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold shrink-0 z-20"}>
                <span className={isMobileLandscape || isMobilePortrait ? "text-[#D4AF37] mr-2" : "text-[#D4AF37] mr-4"}>09</span>
                <span>Частые вопросы</span>
            </div>

            {/* FAQ Content */}
            <div className="flex-1 overflow-y-auto overscroll-y-contain touch-pan-y px-6 py-10 md:px-12 md:py-16 max-w-4xl mx-auto w-full custom-scrollbar">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-10 md:mb-14">
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
    isMobilePortrait
}: {
    index: number,
    scrollYProgress: MotionValue<number>,
    totalSteps: number,
    stickyTop: string,
    stickyHeight: string,
    isMobileLandscape: boolean,
    isMobilePortrait: boolean
}) => {
    const [method, setMethod] = useState("Telegram");
    const [services, setServices] = useState<string[]>([]);

    const stepSize = 1 / totalSteps;
    const start = index * stepSize;
    const entryStart = start + stepSize * 0.2;
    const entryEnd = start + stepSize * 0.7;

    const y = useTransform(scrollYProgress, [entryStart, entryEnd], ["100%", "0%"]);

    const toggleService = (s: string) => {
        setServices((prev) =>
            prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
        );
    };

    return (
        <motion.div
            id="contact"
            style={{ y, zIndex: 100, top: stickyTop, height: stickyHeight }}
            className="sticky left-0 w-full flex flex-col bg-zinc-950 text-white overflow-hidden border-t border-white/20"
        >
            <div className={isMobileLandscape
                ? "h-6 w-full bg-zinc-900 border-b border-white/20 flex items-center px-3 uppercase tracking-[0.16em] text-[9px] font-bold shrink-0 z-20"
                : isMobilePortrait
                ? "h-8 w-full bg-zinc-900 border-b border-white/20 flex items-center px-4 uppercase tracking-[0.18em] text-[10px] font-bold shrink-0 z-20"
                : "h-12 w-full bg-zinc-900 border-b border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold shrink-0 z-20"}>
                <span className={isMobileLandscape || isMobilePortrait ? "text-[#D4AF37] mr-2" : "text-[#D4AF37] mr-4"}>10</span>
                <span>Форма связи</span>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-y-contain touch-pan-y px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto w-full custom-scrollbar">
                <DebugWrapper id={8942} label="Form Title">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">
                        Готов усилить <br className="hidden md:block" />
                        <span className="text-[#D4AF37]">цифровое</span> присутствие?
                    </h2>
                </DebugWrapper>

                <form className="space-y-10 pb-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваше Имя *</label>
                            <input type="text" placeholder="Иван Иванов" className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium text-white" required />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Способ связи *</label>
                            <div className="flex gap-4">
                                {["Telegram", "WhatsApp", "Mail"].map((m) => (
                                    <button key={m} type="button" onClick={() => setMethod(m)} className={`pb-2 border-b-2 transition-colors font-medium ${method === m ? 'border-[#D4AF37] text-white' : 'border-transparent text-white/40 hover:text-white/80'}`}>{m}</button>
                                ))}
                            </div>
                            <input type={method === "Mail" ? "email" : "text"} placeholder={method === "Mail" ? "hello@example.com" : "@username / +995..."} className="w-full bg-transparent border-b border-white/20 pb-2 mt-4 focus:border-[#D4AF37] transition-colors outline-none font-medium text-white" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Интересующие услуги</label>
                        <div className="flex flex-wrap gap-3">
                            {["Дрон", "360 тур", "Reels", "SMM контент", "Google Maps", "Event"].map((svc) => (
                                <button key={svc} type="button" onClick={() => toggleService(svc)} className={`px-4 py-2 rounded-full border text-sm transition-all ${services.includes(svc) ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' : 'border-white/20 text-white/60 hover:border-white hover:text-white'}`}>{svc}</button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваша ниша</label>
                        <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium appearance-none text-white">
                            <option value="" className="bg-zinc-900">Выберите нишу...</option>
                            <option value="realestate" className="bg-zinc-900">Недвижимость</option>
                            <option value="hotels" className="bg-zinc-900">Отели</option>
                            <option value="restaurants" className="bg-zinc-900">Рестораны</option>
                            <option value="auto" className="bg-zinc-900">Авто бизнес</option>
                            <option value="tourism" className="bg-zinc-900">Туризм</option>
                            <option value="clinics" className="bg-zinc-900">Клиники</option>
                            <option value="it" className="bg-zinc-900">IT</option>
                            <option value="other" className="bg-zinc-900">Другое</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Коротко о задаче</label>
                        <textarea placeholder="Например: Нужно снять дрон тур для нового ЖК" rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium resize-none text-white" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button type="submit" className="flex-1 bg-white text-black font-black uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-[#D4AF37] transition-colors">
                            <Send className="w-5 h-5" /> Написать
                        </button>
                        <a href="https://wa.me/995574619393" target="_blank" rel="noreferrer" className="flex-1 border border-white/20 text-white font-bold uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-white/5 transition-colors">
                            <MessageCircle className="w-5 h-5" /> WhatsApp
                        </a>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export function NichesStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobileLandscape = useMobileLandscape();
    const isMobilePortrait = useMobilePortrait();
    const stickyTopPx = isMobileLandscape
        ? LANDSCAPE_STICKY_TOP_PX
        : isMobilePortrait
        ? PORTRAIT_STICKY_TOP_PX
        : DEFAULT_STICKY_TOP_PX;
    const stickyTop = `${stickyTopPx}px`;
    const stickyHeight = `calc(100vh - ${stickyTopPx}px)`;
    const totalSteps = niches.length + 2; // +1 Placeholder (09), +1 Form (10)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative w-full bg-black" style={{ height: `${totalSteps * 100}vh` }}>
            {niches.map((niche, index) => (
                <Card
                    key={niche.id}
                    niche={niche}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    totalSteps={totalSteps}
                    stickyTop={stickyTop}
                    stickyHeight={stickyHeight}
                    isMobileLandscape={isMobileLandscape}
                    isMobilePortrait={isMobilePortrait}
                />
            ))}
            <FAQCard
                index={niches.length}
                scrollYProgress={scrollYProgress}
                totalSteps={totalSteps}
                stickyTop={stickyTop}
                stickyHeight={stickyHeight}
                isMobileLandscape={isMobileLandscape}
                isMobilePortrait={isMobilePortrait}
            />
            <FormCard
                index={niches.length + 1}
                scrollYProgress={scrollYProgress}
                totalSteps={totalSteps}
                stickyTop={stickyTop}
                stickyHeight={stickyHeight}
                isMobileLandscape={isMobileLandscape}
                isMobilePortrait={isMobilePortrait}
            />
        </div>
    );
}
