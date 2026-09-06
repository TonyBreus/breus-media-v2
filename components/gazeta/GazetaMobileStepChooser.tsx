"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Building2 } from "lucide-react";
import aiRealEstateImage from "@/services-images/ai-real-estate/final/1.png";
import tourRealEstateImage from "@/services-images/360-real-estate+/final/1.png";
import droneRealEstateImage from "@/services-images/drone-real-estate/final/1.png";
import reelsRealEstateImage from "@/services-images/reels-realtor/final/1.png";
import { MultiStepServiceDrawer, DrawerServiceData } from "@/components/gazeta/MultiStepServiceDrawer";
import { multiStepDrawerDataByLang, GazetaLang } from "./gazetaCatalogData";

type ChooserTab = "services" | "industries";
type ServiceKey = "aerial" | "tour360" | "reels" | "aiContent" | "websites" | "googleMaps";
type IndustryKey = "realEstate" | "hotels" | "restaurants" | "tourism" | "auto" | "clinics";

type CatalogCard = {
    key: ServiceKey;
    title: string;
    desc: string;
    image: string;
    href: string;
    price?: string;
};

type IndustryCard = {
    key: IndustryKey;
    title: string;
    desc: string;
    image: string;
    href: string;
    price?: string;
};

const serviceCardsByLang: Record<GazetaLang, CatalogCard[]> = {
    ru: [
        { key: "aerial", title: "Аэросъёмка", desc: "4K-видео и фото с дрона для объектов, вилл и участков", image: droneRealEstateImage.src, href: "/drone-service", price: "от 250 ₾" },
        { key: "tour360", title: "360° туры", desc: "Виртуальные показы для сайтов, Booking и карт Google", image: tourRealEstateImage.src, href: "/360-tours-service", price: "от 300 ₾" },
        { key: "reels", title: "Видео & Reels", desc: "Промо для экранов заведений, рекламы и соцсетей", image: reelsRealEstateImage.src, href: "/reels-service", price: "от 250 ₾" },
        { key: "aiContent", title: "AI-решения & 3D", desc: "3D-меблировка бетона и генерация рекламных креативов", image: aiRealEstateImage.src, href: "/ai-visualization-service", price: "от 180 ₾" },
        { key: "websites", title: "B2B-сайты & AEO", desc: "Скоростные сайты на Next.js под поиск нейросетей", image: "/media/gazeta/360-tour-1.png", href: "#contact", price: "от 1 200 ₾" },
        { key: "googleMaps", title: "Google Maps & SEO", desc: "Оцифровка профиля заведения и вывод в ТОП-3 карт", image: "/media/gazeta/tourism-2.png", href: "#contact", price: "от 350 ₾" },
    ],
    en: [
        { key: "aerial", title: "Aerial Filming", desc: "4K aerials and FPV flythroughs for properties, land and advertising.", image: droneRealEstateImage.src, href: "/drone-service/en", price: "from 250 ₾" },
        { key: "tour360", title: "360° Tours", desc: "Virtual walkthroughs for Google Maps, websites and remote client presentations.", image: tourRealEstateImage.src, href: "/360-tours-service/en", price: "from 300 ₾" },
        { key: "reels", title: "Video & Reels", desc: "High-impact social media reels, venue display promo and commercial ads.", image: reelsRealEstateImage.src, href: "/reels-service/en", price: "from 250 ₾" },
        { key: "aiContent", title: "AI Solutions & 3D", desc: "Virtual staging of raw spaces, 3D renders and AI-generated ad visuals.", image: aiRealEstateImage.src, href: "/ai-visualization-service/en", price: "from 180 ₾" },
        { key: "websites", title: "B2B Websites & AEO", desc: "Fast Next.js websites optimized for search and AI recommendations.", image: "/media/gazeta/360-tour-1.png", href: "#contact", price: "from 1,200 ₾" },
        { key: "googleMaps", title: "Google Maps & SEO", desc: "Business profile digitization, TOP-3 map ranking and 5★ review growth.", image: "/media/gazeta/tourism-2.png", href: "#contact", price: "from 350 ₾" },
    ],
};

const industryCardsByLang: Record<GazetaLang, IndustryCard[]> = {
    ru: [
        {
            key: "realEstate",
            title: "Недвижимость",
            desc: "Видеообзоры, 3D-туры и аэрофото для быстрых продаж инвесторам.",
            image: "/media/drone-service/real-estate-1.png",
            href: "/real-estate-service",
        },
        {
            key: "hotels",
            title: "Отели и курорты",
            desc: "Видеотуры и 360°-панорамы для роста броней на Booking.",
            image: "/media/drone-service/hotels-resorts-5.png",
            href: "/hotels-service",
        },
        {
            key: "restaurants",
            title: "Рестораны и бары",
            desc: "4K-съёмка блюд, залов и террас для полной посадки столиков.",
            image: "/media/drone-service/restaurants-3.png",
            href: "/restaurants-service",
        },
        {
            key: "tourism",
            title: "Туризм и гиды",
            desc: "Аэросъёмка маршрутов и локаций Грузии для продажи туров.",
            image: "/media/drone-service/tourism-6.png",
            href: "/tourism-service",
        },
        {
            key: "auto",
            title: "Автобизнес",
            desc: "Презентация автопарка, динамичные обзоры лотов и шоурумов.",
            image: "/media/drone-service/auto-showroom-1.png",
            href: "/auto-service",
        },
        {
            key: "clinics",
            title: "Клиники и бьюти",
            desc: "Видеовизитки врачей и 360°-туры для доверия пациентов.",
            image: "/media/gazeta/360-tour-2.png",
            href: "/clinics-service",
        },
    ],
    en: [
        {
            key: "realEstate",
            title: "Real Estate",
            desc: "Video walkthroughs, 3D tours and aerials for fast investor sales.",
            image: "/media/drone-service/real-estate-1.png",
            href: "/real-estate-service/en",
        },
        {
            key: "hotels",
            title: "Hotels & Resorts",
            desc: "Virtual tours and 360° views to drive direct bookings on Booking.",
            image: "/media/drone-service/hotels-resorts-5.png",
            href: "/hotels-service/en",
        },
        {
            key: "restaurants",
            title: "Restaurants & Bars",
            desc: "4K filming of cuisine, dining halls and terraces for full seating.",
            image: "/media/drone-service/restaurants-3.png",
            href: "/restaurants-service/en",
        },
        {
            key: "tourism",
            title: "Tourism & Guides",
            desc: "Aerial footage of routes and Georgian locations for tour sales.",
            image: "/media/drone-service/tourism-6.png",
            href: "/tourism-service/en",
        },
        {
            key: "auto",
            title: "Automotive",
            desc: "Fleet showcase, dynamic vehicle reviews and showroom video tours.",
            image: "/media/drone-service/auto-showroom-1.png",
            href: "/auto-service/en",
        },
        {
            key: "clinics",
            title: "Clinics & Beauty",
            desc: "Doctor video business cards and 360° tours for patient trust.",
            image: "/media/gazeta/360-tour-2.png",
            href: "/clinics-service/en",
        },
    ],
};

interface GazetaMobileStepChooserProps {
    lang?: GazetaLang;
}

export function GazetaMobileStepChooser({ lang = "ru" }: GazetaMobileStepChooserProps) {
    const isEn = lang === "en";
    const [activeTab, setActiveTab] = useState<ChooserTab>("services");
    const [selectedDrawerData, setSelectedDrawerData] = useState<DrawerServiceData | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const touchStartX = useRef<number>(0);
    const touchStartY = useRef<number>(0);

    const serviceCards = serviceCardsByLang[lang];
    const industryCards = industryCardsByLang[lang];
    const currentCards = activeTab === "services" ? serviceCards : industryCards;

    const handleCardClick = (itemKey: string) => {
        const itemData = multiStepDrawerDataByLang[lang][itemKey];
        if (itemData) {
            setSelectedDrawerData(itemData);
            setIsDrawerOpen(true);
        }
    };

    // Horizontal swipe gesture handler for tab switching
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const deltaY = e.changedTouches[0].clientY - touchStartY.current;

        // Ensure horizontal swipe is dominant and above 50px threshold
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            // Ignore edge swipes to avoid conflict with Safari back/forward gesture
            if (touchStartX.current < 30 || touchStartX.current > window.innerWidth - 30) return;

            if (deltaX < 0 && activeTab === "services") {
                // Swipe Left -> switch to industries
                setActiveTab("industries");
            } else if (deltaX > 0 && activeTab === "industries") {
                // Swipe Right -> switch to services
                setActiveTab("services");
            }
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-full flex flex-col justify-center select-none"
        >
            <div className="w-full flex flex-col justify-center gap-2.5 sm:gap-3 h-full max-w-lg mx-auto">
                {/* 1. Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-1">
                        {isEn ? "Select Service or Business" : "Выберите услугу или ваш бизнес"}
                    </h2>
                </div>

                {/* 2. Centered Glass Pill Switcher (Click & Swipe Sync) */}
                <div className="flex justify-center">
                    <div className="inline-flex h-[34px] items-center rounded-full border border-white/15 bg-[#121216]/90 p-0.5 backdrop-blur-md shadow-lg mb-2 text-xs justify-center">
                        <button
                            type="button"
                            onClick={() => setActiveTab("services")}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                activeTab === "services"
                                    ? "bg-[#FFD23F] text-black shadow-[0_0_15px_rgba(255,210,63,0.35)]"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            <Layers className="h-3 w-3" />
                            <span>{isEn ? "SERVICES (6)" : "УСЛУГИ (6)"}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("industries")}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                activeTab === "industries"
                                    ? "bg-[#FFD23F] text-black shadow-[0_0_15px_rgba(255,210,63,0.35)]"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            <Building2 className="h-3 w-3" />
                            <span>{isEn ? "YOUR BUSINESS (6)" : "ВАШ БИЗНЕС (6)"}</span>
                        </button>
                    </div>
                </div>

                {/* 3. Animated Clean Photo-Dominant Grid */}
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: activeTab === "services" ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: activeTab === "services" ? 30 : -30 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="grid grid-cols-2 gap-2 sm:gap-2.5"
                        >
                            {currentCards.map((card) => (
                                <div
                                    key={card.key}
                                    onClick={() => handleCardClick(card.key)}
                                    className="group cursor-pointer flex flex-col transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97]"
                                >
                                    {/* Full-bleed Photo with Title Inside */}
                                    <div className="relative h-[110px] sm:h-[120px] w-full overflow-hidden rounded-[14px] bg-[#121216]">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                                            className="h-[110px] sm:h-[120px] w-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-108"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                                        {/* Title & Starting Price Inside Photo */}
                                        <div className="absolute inset-x-0 bottom-0 px-2.5 py-1.5 flex items-center justify-between gap-1.5">
                                            <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider transition-colors duration-200 group-hover:text-[#FFD23F] line-clamp-1">
                                                {card.title}
                                            </h3>
                                            {card.price && (
                                                <span className="shrink-0 rounded-[5px] bg-black/75 border border-[#FFD23F]/40 px-1.5 py-0.5 text-[9px] font-bold text-[#FFD23F]">
                                                    {card.price}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* 2-line Description Under Photo */}
                                    <p className="text-[10.5px] leading-tight text-white/80 mt-1 line-clamp-2 h-[28px] overflow-hidden">
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom hint line */}
                <div className="text-center text-[10.5px] text-white/40 mt-2">
                    {isEn ? "⌄ Scroll down: about the studio and principles" : "⌄ Листайте дальше: о студии и принципах"}
                </div>
            </div>

            {/* 4. Multi-Step Interactive Service Drawer */}
            <MultiStepServiceDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                data={selectedDrawerData}
                lang={lang}
            />
        </div>
    );
}
