"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { TimeWidget } from "./TimeWidget";
import Link from "next/link";
import { useHeroStore } from "@/store/useHeroStore";
import { gazetaIndustryNavItems, gazetaServiceNavItems, gazetaTickerLine1, gazetaTickerLine2 } from "@/constants/gazetaRoutes";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Menu, X, Instagram } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";
import { useMobileLandscape } from "@/hooks/useMobileLandscape";
import { useMobilePortrait } from "@/hooks/useMobilePortrait";

// --- Interactive Ticker Components ---
type TickerItemType = string | { text: string; link: string };
type HeaderSectionLink = { label: string; href: string };
type HeaderLanguage = "RU" | "EN" | "GE";
type HeaderLanguageLinks = Partial<Record<HeaderLanguage, string>>;
type HeaderNavItem = { label: string; href: string };
type HeaderCopy = {
    landingAgency: string;
    landingAgencySubtitle: string;
    compactAgencyEyebrow: string;
    compactAgencySubtitle: string;
    aboutLabel: string;
    industriesLabel: string;
    servicesLabel: string;
    aiSolutionsLabel: string;
    ctaMobile: string;
    ctaDesktop: string;
    mobileMenuTitle: string;
    mobileIndustriesLabel: string;
    mobileServicesLabel: string;
    mobileSectionsLabel: string;
    industryNavItems: HeaderNavItem[];
    serviceNavItems: HeaderNavItem[];
    tickerLine1: TickerItemType[];
    tickerLine2: TickerItemType[];
};

const headerCopy: Record<"RU" | "EN", HeaderCopy> = {
    RU: {
        landingAgency: "Агентство",
        landingAgencySubtitle: "визуального продакшена и AI",
        compactAgencyEyebrow: "АГЕНТСТВО",
        compactAgencySubtitle: "Визуальный Продакшен",
        aboutLabel: "О Нас",
        industriesLabel: "Индустрии",
        servicesLabel: "Услуги",
        aiSolutionsLabel: "AI Решения",
        ctaMobile: "Обсудить",
        ctaDesktop: "Обсудить проект",
        mobileMenuTitle: "Breus Media",
        mobileIndustriesLabel: "Индустрии",
        mobileServicesLabel: "Услуги",
        mobileSectionsLabel: "Разделы",
        industryNavItems: [
            { label: "О нас", href: "/about" },
            ...gazetaIndustryNavItems,
        ],
        serviceNavItems: gazetaServiceNavItems,
        tickerLine1: gazetaTickerLine1,
        tickerLine2: gazetaTickerLine2,
    },
    EN: {
        landingAgency: "Agency",
        landingAgencySubtitle: "visual production and AI",
        compactAgencyEyebrow: "AGENCY",
        compactAgencySubtitle: "Visual Production",
        aboutLabel: "About",
        industriesLabel: "Industries",
        servicesLabel: "Services",
        aiSolutionsLabel: "AI Solutions",
        ctaMobile: "Discuss",
        ctaDesktop: "Discuss Project",
        mobileMenuTitle: "Breus Media",
        mobileIndustriesLabel: "Industries",
        mobileServicesLabel: "Services",
        mobileSectionsLabel: "Sections",
        industryNavItems: [
            { label: "About", href: "/about" },
            { label: "Real Estate", href: "/real-estate-service" },
            { label: "Auto Business", href: "/gazeta/auto" },
            { label: "Hotels", href: "/gazeta/hotels" },
            { label: "Restaurants", href: "/gazeta/restaurants" },
            { label: "Tourism", href: "/gazeta/tourism" },
            { label: "Clinics", href: "/gazeta/clinics" },
            { label: "IT", href: "/business-service" },
            { label: "Your Business", href: "/gazeta/custom-business" },
        ],
        serviceNavItems: [
            { label: "Aerial Filming", href: "/drone-service" },
            { label: "360° Tours", href: "/gazeta/360-tours" },
            { label: "Promo Video", href: "/gazeta/promo-video" },
            { label: "Events", href: "/drone-weddings-events" },
            { label: "AI Content", href: "/gazeta/ai-content" },
            { label: "Reels", href: "/gazeta/reels" },
        ],
        tickerLine1: [
            { text: "REAL ESTATE", link: "/real-estate-service" },
            { text: "AUTO BUSINESS", link: "/auto-service" },
            { text: "HOTELS", link: "/hotels-service" },
            { text: "RESTAURANTS", link: "/restaurants-service" },
            { text: "TOURISM", link: "/tourism-service" },
            { text: "CLINICS", link: "/clinics-service" },
            { text: "YOUR BUSINESS", link: "/business-service" },
        ],
        tickerLine2: [
            { text: "Aerial Filming", link: "/drone-service" },
            { text: "360° Tours", link: "/360-tours-service" },
            { text: "Promo Video", link: "/promo-video-service" },
            { text: "AI Content", link: "/ai-visualization-service" },
            { text: "Reels", link: "/reels-service" },
        ],
    },
};

const TickerItem = ({ item, debugId, compact = false }: { item: TickerItemType; debugId?: number; compact?: boolean }) => {
    const { setHoveredService } = useHeroStore();
    const isObj = typeof item === 'object';
    const text = isObj ? item.text : item;
    const shouldUseHoverPreview = text !== "360° Туры" && text !== "360° Tours";

    const content = (
        <DebugWrapper id={debugId ?? 0} label={text} className="inline-flex items-center h-full shrink-0">
            <span
                onMouseEnter={() => {
                    if (shouldUseHoverPreview) {
                        setHoveredService(text);
                    }
                }}
                onMouseLeave={() => {
                    if (shouldUseHoverPreview) {
                        setHoveredService(null);
                    }
                }}
                className={`inline-flex items-center leading-none shrink-0 cursor-pointer font-bold uppercase text-[#D4AF37]/70 hover:text-white transition-colors whitespace-nowrap ${compact
                    ? "px-3 text-[10px] tracking-[0.16em]"
                    : "px-4 md:px-8 text-xs md:text-sm tracking-widest"}`}
            >
                {text}
            </span>
        </DebugWrapper>
    );

    return isObj ? <Link href={item.link} className="inline-flex items-center h-full shrink-0">{content}</Link> : content;
};

const InteractiveTicker = ({ items, direction = "left", speed = 40, baseId, compact = false }: { items: TickerItemType[], direction?: "left" | "right", speed?: number, baseId?: number, compact?: boolean }) => {
    return (
        <div className="flex overflow-hidden w-full relative group bg-zinc-950/50 backdrop-blur-sm">
            <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full bg-gradient-to-r from-black to-transparent ${compact ? "w-8" : "w-12"}`} />
            <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full bg-gradient-to-l from-black to-transparent ${compact ? "w-8" : "w-12"}`} />

            <motion.div
                className={`flex items-center ${compact ? "py-1.5 min-h-[20px]" : "py-2"}`}
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => {
                    const idText = typeof item === 'object' ? item.text : item;
                    const itemIndex = i % items.length;
                    const debugId = baseId ? baseId + itemIndex + 1 : undefined;
                    return <TickerItem key={`${idText}-${i}`} item={item} debugId={debugId} compact={compact} />;
                })}
            </motion.div>
        </div>
    );
};

/**
 * GlobalHeader (Глобальная Шапка)
 * Includes elements: 200, 201, 202, 203, 208, 204, 205, 207, 206.
 */
export function SmartHeader({
    transparent = false,
    isLanding = false,
    sectionLinks = [],
    showTickers,
    initialLang = "RU",
    languageLinks,
    ctaHref,
}: {
    transparent?: boolean;
    isLanding?: boolean;
    sectionLinks?: HeaderSectionLink[];
    showTickers?: boolean;
    initialLang?: string;
    languageLinks?: HeaderLanguageLinks;
    ctaHref?: string;
}) {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [lang, setLang] = useState(initialLang);
    const [isLogoVisible, setIsLogoVisible] = useState(!isLanding);

    // States for V23 menus
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobileLandscape = useMobileLandscape();
    const isMobilePortrait = useMobilePortrait();
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const shouldShowTickers = showTickers ?? !isLanding;
    const headerExpandedHeight = isMobileLandscape ? 64 : isMobilePortrait ? 64 : 90;
    const headerCompactHeight = isMobileLandscape ? 56 : isMobilePortrait ? 52 : 70;
    const headerHeight = isScrolled ? headerCompactHeight : headerExpandedHeight;
    const routeLanguage: HeaderLanguage = initialLang === "EN" ? "EN" : initialLang === "GE" ? "GE" : "RU";
    const copy = headerCopy[routeLanguage === "EN" ? "EN" : "RU"];

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Switch state based on scroll
        if (latest > 50 && !isScrolled) setIsScrolled(true);
        else if (latest <= 50 && isScrolled) setIsScrolled(false);

        if (isLanding) {
            const vh = typeof window !== "undefined" ? window.innerHeight : 800;
            // Text exits screen around 80vh of scroll (scrollYProgress=0.4 in Hero)
            if (latest > vh * 0.8 && !isLogoVisible) setIsLogoVisible(true);
            else if (latest <= vh * 0.8 && isLogoVisible) setIsLogoVisible(false);
        }
    });

    const aboutHref = "/about";
    const contactHref = isLanding ? "#contact" : "/gazeta#contact";
    const resolvedCtaHref = ctaHref ?? contactHref;
    const hasContactSectionLink = sectionLinks.some((link) => link.href === "#contact");
    const mobileSectionLinks = hasContactSectionLink
        ? sectionLinks
        : [...sectionLinks, { label: "Контакты", href: "#contact" }];
    const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement>, closeMobileMenu = false) => {
        if (closeMobileMenu) {
            setIsMobileMenuOpen(false);
        }

        if (!resolvedCtaHref.startsWith("#")) {
            return;
        }

        event.preventDefault();
        const target = document.querySelector(resolvedCtaHref);

        if (!(target instanceof HTMLElement)) {
            window.location.hash = resolvedCtaHref;
            return;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== resolvedCtaHref) {
            window.history.replaceState(null, "", resolvedCtaHref);
        }
    };

    return (
        <DebugWrapper id={1} label="GlobalHeader (Глобальная Шапка)">
            <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isScrolled
                ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10'
                : transparent
                    ? 'bg-transparent'
                    : 'bg-black/40 backdrop-blur-sm'}`}
                style={{ height: `${headerHeight}px` }}>

                {/* --- INITIAL VIEW (Not Scrolled) --- */}
                <div className={`absolute inset-0 w-full h-full flex items-center transition-all duration-300 ${isMobileCompactTop ? "px-3" : "px-6"} ${isScrolled ? 'opacity-0 pointer-events-none scale-95 delay-0' : 'opacity-100 scale-100 delay-100'}`}>
                    {/* LEFT SECTION */}
                    <DebugWrapper id={2} label="Left Section" className="flex-1">
                        {isLanding && (
                            <Link href="/gazeta" className={`relative flex items-center hover:opacity-85 transition-opacity ${isMobileCompactTop ? "h-5" : "h-6"}`}>
                                {/* Agency Text */}
                                <div className="absolute inset-0 flex flex-col justify-center">
                                    <span className={`font-serif leading-none tracking-wide text-white ${isMobileCompactTop ? "text-[14px]" : "text-[18px] md:text-2xl"}`}>{copy.landingAgency}</span>
                                    <span className={`text-[#D4AF37] uppercase mt-0.5 whitespace-nowrap ${isMobileCompactTop ? "text-[7px] tracking-[0.14em]" : "text-[8px] md:text-[10px] tracking-widest"}`}>
                                        {copy.landingAgencySubtitle}
                                    </span>
                                </div>
                            </Link>
                        )}
                    </DebugWrapper>

                    {/* CENTER SECTION */}
                    <DebugWrapper id={3} label="Center Section" className={`flex-1 flex justify-center items-start ${isMobileCompactTop ? "-mt-1" : "pt-1"}`}>
                        <div className={`flex items-center leading-none ${isMobileCompactTop ? "gap-1.5" : "gap-2"}`}>
                            <span className={`uppercase font-bold ${isMobileCompactTop ? "tracking-[0.14em] text-[9px]" : "tracking-[0.2em] text-[10px]"}`}>Tbilisi</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                            <TimeWidget />
                        </div>
                    </DebugWrapper>

                    {/* RIGHT SECTION (Now empty to remove 4,5,6) */}
                    <div className="flex-1 flex items-center justify-end text-sm">
                    </div>
                </div>


                {/* --- V23 HEADER COMPONENT VIEW (Scrolled) --- */}
                <div
                    style={{ height: `${headerCompactHeight}px` }}
                    className={`w-full px-2 md:px-10 flex justify-between items-center transition-all duration-300 relative z-[300] ${isScrolled ? 'opacity-100 scale-100 delay-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>

                    {/* LEFT: Branding */}
                    <DebugWrapper id={200} label="Agency Branding">
                        <div className="flex flex-col justify-center items-start flex-shrink-0 mr-2 md:mr-0 opacity-100 transition-opacity">
                            {/* Subtext and branding visible. */}
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-0.5 ml-1 font-bold">{copy.compactAgencyEyebrow}</span>
                            {/* Logo text appears when Element 13 scrolls out */}
                            <div className="h-[20px] md:h-[28px] w-[110px] md:w-[160px] relative flex items-center">
                                <AnimatePresence>
                                    {isLogoVisible && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-0"
                                        >
                                            <Link href="/gazeta" className="text-lg md:text-[22px] font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity text-white whitespace-nowrap">
                                                Breus Media
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5 ml-1 leading-tight">
                                <span className="text-[#D4AF37]">{copy.compactAgencySubtitle}</span> & <span className="text-[#D4AF37]">AI</span>
                            </span>
                        </div>
                    </DebugWrapper>

                    {/* CENTER: Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 -translate-x-1/2 mt-2 z-[310]">
                        <DebugWrapper id={201} label="Link: О нас">
                            <Link href={aboutHref} className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">{copy.aboutLabel}</Link>
                        </DebugWrapper>

                        <DebugWrapper id={202} label="Dropdown: Индустрии">
                            <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("industries")} onMouseLeave={() => setHoveredMenu(null)}>
                                <button className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {copy.industriesLabel} <ChevronDown className="w-4 h-4" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "industries" && (
                                        <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[500px] bg-black/95 border border-white/20 p-6 z-[1100] grid grid-cols-2 gap-3 rounded-2xl backdrop-blur-xl shadow-2xl">
                                            {copy.industryNavItems.map((item) => <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide transition-colors">{item.label}</Link>)}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id={203} label="Dropdown: Услуги">
                            <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("services")} onMouseLeave={() => setHoveredMenu(null)}>
                                <button className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {copy.servicesLabel} <ChevronDown className="w-4 h-4" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "services" && (
                                        <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[600px] bg-black/95 border border-white/20 p-6 z-[1100] grid grid-cols-3 gap-3 rounded-2xl backdrop-blur-xl shadow-2xl">
                                            {copy.serviceNavItems.map((item) => <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide transition-colors">{item.label}</Link>)}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </DebugWrapper>

                        {sectionLinks
                            .filter((link) => link.href !== "#services")
                            .map((link, index) => (
                            <DebugWrapper key={`${link.label}-${link.href}`} id={210 + index} label={`Link: ${link.label}`}>
                                <Link href={link.href} className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {link.label}
                                </Link>
                            </DebugWrapper>
                        ))}

                        <DebugWrapper id={204} label="Link: AI Решения">
                            <Link href="/ai-visualization-service" className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">{copy.aiSolutionsLabel}</Link>
                        </DebugWrapper>
                    </nav>

                    {/* RIGHT: Actions */}
                    <div className={`flex items-center flex-shrink-0 relative z-[320] ${isMobileCompactTop ? "gap-2 mt-1" : "gap-2 md:gap-4 lg:gap-6 mt-2"}`}>
                        {/* 1. Contact Dropdown (205) */}
                        <div className="hidden md:block">
                            <DebugWrapper id={205} label="Phone Connect">
                                <div className="relative group" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                                    <button className={`flex items-center justify-center bg-white/10 rounded-full hover:bg-[#D4AF37] transition-colors border border-white/5 group-hover:border-[#D4AF37]/50 ${isMobileCompactTop ? "w-7 h-7" : "w-8 h-8 md:w-10 md:h-10"}`}>
                                        <Phone className="w-3.5 h-3.5 text-white" />
                                    </button>

                                    <AnimatePresence>
                                        {isContactOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                style={{ originY: 0, originX: 1 }}
                                                className="absolute top-full right-0 mt-4 w-72 md:w-80 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-[1200] overflow-hidden"
                                            >
                                                <div className="p-6 flex flex-col gap-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-1">
                                                            <Phone className="w-4 h-4 text-[#D4AF37]" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <a href="tel:+995574619393" className="text-lg font-bold text-white hover:text-[#D4AF37] transition-colors tracking-wide">+995 574 619 393</a>
                                                        </div>
                                                    </div>
                                                    <div className="h-px w-full bg-white/10 my-1" />
                                                    {/* Socials */}
                                                    <div className="flex justify-between items-center px-2">
                                                        <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                            <MessageCircle className="w-5 h-5 text-[#25D366] hover:scale-110 transition-transform" />
                                                            <span className="text-[9px] uppercase font-bold text-gray-400">WhatsApp</span>
                                                        </a>
                                                        <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                            <Send className="w-5 h-5 text-[#0088cc] ml-0.5 hover:scale-110 transition-transform" />
                                                            <span className="text-[9px] uppercase font-bold text-gray-400">Telegram</span>
                                                        </a>
                                                        <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                            <MessageCircle className="w-5 h-5 text-[#7360f2] hover:scale-110 transition-transform" />
                                                            <span className="text-[9px] uppercase font-bold text-gray-400">Viber</span>
                                                        </a>
                                                    </div>
                                                    <div className="h-px w-full bg-white/10 my-1" />
                                                    <a href="mailto:hello@breus.media" className="flex items-center gap-3 px-2 group/mail">
                                                        <Mail className="w-4 h-4 text-gray-500 group-hover/mail:text-white transition-colors" />
                                                        <span className="text-sm font-bold text-gray-400 group-hover/mail:text-white transition-colors">hello@breus.media</span>
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </DebugWrapper>
                        </div>

                        {/* 2. Language Switcher (207) */}
                        <DebugWrapper id={207} label="Language Switcher">
                            <div className="group relative">
                                <button className={`flex items-center gap-1.5 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 transition-colors font-bold text-white uppercase ${isMobileCompactTop ? "px-2.5 py-1 text-[9px]" : "px-3 py-1.5 text-[10px] md:text-xs"}`}>
                                    <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                                    <span>{lang}</span>
                                </button>
                                <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 hidden group-hover:flex flex-col rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl z-[1200]">
                                    {(["RU", "EN", "GE"] as HeaderLanguage[]).map((l) => {
                                        const href = languageLinks?.[l];
                                        const className = "px-4 py-2 text-xs text-white hover:bg-[#D4AF37]/20 transition-colors text-left font-bold";

                                        return href ? (
                                            <Link key={l} href={href} onClick={() => setLang(l)} className={className}>
                                                {l}
                                            </Link>
                                        ) : (
                                            <button key={l} onClick={() => setLang(l)} className={className}>
                                                {l}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </DebugWrapper>

                        {/* 3. CTA Buttons (206) - Shows different text for mobile/desktop */}
                        <DebugWrapper id={206} label="Button: Обсудить Задачу">
                            <Link href={resolvedCtaHref} onClick={handleCtaClick} className={`flex items-center justify-center bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap ${isMobileCompactTop ? "px-3 py-1 text-[8px]" : "px-4 py-1.5 md:px-6 md:py-2.5 text-[9px] md:text-[10px]"}`}>
                                <span className="md:hidden">{copy.ctaMobile}</span>
                                <span className="hidden md:inline">{copy.ctaDesktop}</span>
                            </Link>
                        </DebugWrapper>

                        {/* 4. Menu Icon (Mobile Only) */}
                        <button className="md:hidden text-white ml-1" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className={isMobileCompactTop ? "w-5 h-5" : "w-6 h-6"} />
                        </button>
                    </div>
                </div>

                {shouldShowTickers && (
                    <div className={`transition-all duration-300 border-t border-white/5 relative z-[120] ${isScrolled
                        ? 'bg-zinc-950/90 backdrop-blur-md'
                        : transparent
                            ? 'bg-transparent border-transparent'
                            : 'bg-zinc-950/40 backdrop-blur-sm'}`}>
                        <DebugWrapper id={208} label="Running Text Line 1">
                            <InteractiveTicker items={copy.tickerLine1} direction="left" speed={60} baseId={2080} compact={isMobileCompactTop} />
                        </DebugWrapper>
                        <div className="hidden md:block">
                            <div className="h-[1px] bg-white/5 w-full" />
                            <DebugWrapper id={209} label="Running Text Line 2">
                                <InteractiveTicker items={copy.tickerLine2} direction="right" speed={70} baseId={2090} compact={isMobileCompactTop} />
                            </DebugWrapper>
                        </div>
                    </div>
                )}

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-[1300] bg-black/70 backdrop-blur-md md:hidden"
                        >
                            <motion.div
                                initial={{ y: -24, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -24, opacity: 0 }}
                                className="mx-3 mt-3 rounded-[28px] border border-white/10 bg-[#0b0b0b]/95 shadow-2xl"
                            >
                                <div className="flex items-center justify-end border-b border-white/10 px-5 py-4">
                                    <button type="button" className="rounded-full border border-white/10 p-2 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="space-y-6 px-5 py-5">
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/78 hover:border-[#D4AF37]/40 hover:text-white transition-colors"
                                    >
                                        {copy.aboutLabel}
                                    </Link>

                                    <div>
                                        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/45">{copy.mobileServicesLabel}</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {copy.serviceNavItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/78 transition-colors hover:border-[#D4AF37]/40 hover:text-white"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {mobileSectionLinks.length > 0 && (
                                        <div>
                                            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/45">{copy.mobileSectionsLabel}</p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {mobileSectionLinks.map((link) => (
                                                    <Link
                                                        key={`${link.label}-${link.href}-mobile`}
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/78 transition-colors hover:border-[#D4AF37]/40 hover:text-white text-center"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="border-t border-white/10 px-5 py-5 space-y-4">
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex w-full items-center justify-center rounded-2xl bg-[#D4A017] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black"
                                    >
                                        Обсудить задачу
                                    </Link>
                                    <div className="flex items-center justify-center gap-4 pt-1">
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Instagram"
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#D4A017]/50 hover:text-[#D4A017]"
                                        >
                                            <Instagram className="h-[16px] w-[16px]" />
                                        </a>
                                        <a
                                            href="https://t.me/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Telegram"
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#229ED9] transition-colors hover:border-[#229ED9]/60 hover:text-[#229ED9]"
                                        >
                                            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] fill-current" aria-hidden="true">
                                                <path d="M21.94 4.66c.24-.95-.34-1.33-1.1-1.05L2.66 10.54c-.9.35-.88.86-.16 1.08l4.66 1.45 1.8 5.6c.22.66.11.93.81.93.54 0 .78-.24 1.08-.53l2.6-2.53 5.4 3.98c1 .55 1.72.27 1.97-.93l3.12-14.93zM8.95 12.8l10.86-6.86c.54-.34 1.03-.15.63.2L11.2 14.5l-.36 3.8-1.89-5.5z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="WhatsApp"
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#25D366] transition-colors hover:border-[#25D366]/60 hover:text-[#25D366]"
                                        >
                                            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] fill-current" aria-hidden="true">
                                                <path d="M12 2a10 10 0 0 0-8.79 14.77L2 22l5.39-1.18A10 10 0 1 0 12 2zm0 18.17a8.11 8.11 0 0 1-4.13-1.13l-.3-.18-3.19.7.68-3.11-.2-.32A8.17 8.17 0 1 1 12 20.17zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.87-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31s-.86.84-.86 2.04.88 2.35 1.01 2.51c.12.16 1.72 2.62 4.16 3.67.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.18-.48-.31z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </header>
        </DebugWrapper>
    );
}
