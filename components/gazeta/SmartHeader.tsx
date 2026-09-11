"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { TimeWidget } from "./TimeWidget";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeroStore } from "@/store/useHeroStore";
import { gazetaIndustryNavItems, gazetaServiceNavItems, gazetaTickerLine1, gazetaTickerLine2 } from "@/constants/gazetaRoutes";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Menu, X, Instagram } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";
import { useMobileLandscape } from "@/hooks/useMobileLandscape";
import { useMobilePortrait } from "@/hooks/useMobilePortrait";
import { AnimatedFlag } from "@/components/common/AnimatedFlag";

// --- Interactive Ticker Components ---
type TickerItemType = string | { text: string; link: string };
type HeaderSectionLink = { label: string; href: string };
type HeaderQuickLink = { label: string; href: string };
type HeaderLanguage = "RU" | "EN" | "GE";
type HeaderLanguageAlias = Lowercase<HeaderLanguage>;
type HeaderLanguageKey = HeaderLanguage | HeaderLanguageAlias;
type HeaderLanguageLinks = Partial<Record<HeaderLanguageKey, string>>;
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
    contactSectionLabel: string;
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
        contactSectionLabel: "Контакты",
        industryNavItems: gazetaIndustryNavItems,
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
        contactSectionLabel: "Contact",
        industryNavItems: [
            { label: "Real Estate", href: "/real-estate-service/en" },
            { label: "Auto Business", href: "/auto-service/en" },
            { label: "Hotels", href: "/hotels-service/en" },
            { label: "Restaurants", href: "/restaurants-service/en" },
            { label: "Tourism", href: "/tourism-service/en" },
            { label: "Clinics", href: "/clinics-service/en" },
            { label: "IT", href: "/gazeta/en#niche-step-12" },
        ],
        serviceNavItems: [
            { label: "Aerial Filming", href: "/drone-service/en" },
            { label: "360° Tours", href: "/360-tours-service/en" },
            { label: "AI Visualization", href: "/ai-visualization-service/en" },
            { label: "Reels & Shorts", href: "/reels-service/en" },
        ],
        tickerLine1: [
            { text: "REAL ESTATE", link: "/real-estate-service/en" },
            { text: "AUTO BUSINESS", link: "/auto-service/en" },
            { text: "HOTELS", link: "/hotels-service/en" },
            { text: "RESTAURANTS", link: "/restaurants-service/en" },
            { text: "TOURISM", link: "/tourism-service/en" },
            { text: "CLINICS", link: "/clinics-service/en" },
        ],
        tickerLine2: [
            { text: "Aerial Filming", link: "/drone-service/en" },
            { text: "360° Tours", link: "/360-tours-service/en" },
            { text: "AI Visualization", link: "/ai-visualization-service/en" },
            { text: "Reels & Shorts", link: "/reels-service/en" },
        ],
    },
};

const normalizeHeaderLanguage = (value?: string): HeaderLanguage => {
    const normalizedValue = value?.toUpperCase();

    if (normalizedValue === "EN" || normalizedValue === "GE" || normalizedValue === "RU") {
        return normalizedValue;
    }

    return "RU";
};

const TickerItem = ({
    item,
    compact = false,
    isDuplicate = false,
}: {
    item: TickerItemType;
    compact?: boolean;
    isDuplicate?: boolean;
}) => {
    const { setHoveredService, dismissHoverPreview } = useHeroStore();
    const isObj = typeof item === 'object';
    const text = isObj ? item.text : item;
    const shouldUseHoverPreview = text !== "360° Туры" && text !== "360° Tours";
    const clearHoverPreview = () => {
        if (shouldUseHoverPreview) {
            setHoveredService(null);
        }
    };
    const dismissPreview = () => {
        if (shouldUseHoverPreview) {
            dismissHoverPreview();
        }
    };

    const content = (
        <span
            aria-hidden={isDuplicate}
            onMouseEnter={() => {
                if (shouldUseHoverPreview) {
                    setHoveredService(text);
                }
            }}
            onMouseLeave={clearHoverPreview}
            onBlur={clearHoverPreview}
            style={{ color: 'rgba(212, 175, 55, 0.8)' }}
            className={`inline-flex items-center leading-none shrink-0 cursor-pointer font-medium uppercase transition-colors whitespace-nowrap group-hover/ticker:brightness-110 ${compact ? "text-xs tracking-wider" : "text-sm font-medium tracking-wider"}`}
        >
            <span className={compact ? "px-3 md:px-4" : "px-4 md:px-6"}>{text}</span>
            <span aria-hidden style={{ color: 'rgba(212, 175, 55, 0.8)' }} className={compact ? "px-1.5 text-xs" : "px-2 text-sm"}>
                •
            </span>
        </span>
    );

    return isObj ? (
        <Link
            href={item.link}
            className="inline-flex items-center h-full shrink-0"
            aria-hidden={isDuplicate}
            tabIndex={isDuplicate ? -1 : undefined}
            onPointerDown={dismissPreview}
            onClick={dismissPreview}
        >
            {content}
        </Link>
    ) : content;
};

const InteractiveTicker = ({ items, direction = "left", speed = 40, compact = false }: { items: TickerItemType[], direction?: "left" | "right", speed?: number, compact?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group/ticker relative flex w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full bg-gradient-to-r from-black to-transparent ${compact ? "w-8" : "w-12"}`} />
            <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full bg-gradient-to-l from-black to-transparent ${compact ? "w-8" : "w-12"}`} />

            <motion.div
                className={`flex items-center transition-colors duration-300 ${compact ? "py-1.5 min-h-[22px]" : "py-2.5 min-h-[28px]"}`}
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: isHovered ? speed * 1.8 : speed }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => {
                    const idText = typeof item === 'object' ? item.text : item;
                    const copyIndex = Math.floor(i / items.length);
                    return (
                        <TickerItem
                            key={`${idText}-${i}`}
                            item={item}
                            compact={compact}
                            isDuplicate={copyIndex > 0}
                        />
                    );
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
    ctaLabel,
    singleTickerMode = false,
    tickerAfterFirstScroll = false,
    showMobilePrimaryCta = true,
    showDesktopPrimaryCta = true,
    mobileQuickLink,
    mobileMinimalCenterTime = false,
    showDesktopNavTime = false,
    stickyTickerUnderHeader = false,
    tickerExcludeTexts = [],
    customTickerItems,
}: {
    transparent?: boolean;
    isLanding?: boolean;
    sectionLinks?: HeaderSectionLink[];
    showTickers?: boolean;
    initialLang?: string;
    languageLinks?: HeaderLanguageLinks;
    ctaHref?: string;
    ctaLabel?: string;
    singleTickerMode?: boolean;
    tickerAfterFirstScroll?: boolean;
    showMobilePrimaryCta?: boolean;
    showDesktopPrimaryCta?: boolean;
    mobileQuickLink?: HeaderQuickLink;
    mobileMinimalCenterTime?: boolean;
    showDesktopNavTime?: boolean;
    stickyTickerUnderHeader?: boolean;
    tickerExcludeTexts?: string[];
    customTickerItems?: TickerItemType[];
}) {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const { dismissHoverPreview } = useHeroStore();
    const isPathEn = Boolean(
        pathname && (pathname === "/gazeta/en" || pathname.endsWith("/en") || pathname.includes("/en/"))
    );
    const normalizedInitialLang = initialLang ? normalizeHeaderLanguage(initialLang) : null;
    const [isScrolled, setIsScrolled] = useState(false);
    const [lang, setLang] = useState<HeaderLanguage>(
        (normalizedInitialLang === "EN" || isPathEn) ? "EN" : (normalizedInitialLang ?? "RU")
    );
    const [isLogoVisible, setIsLogoVisible] = useState(!isLanding);
    const [hasTickerActivated, setHasTickerActivated] = useState(!tickerAfterFirstScroll);

    // States for V23 menus
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobileLandscape = useMobileLandscape();
    const isMobilePortrait = useMobilePortrait();
    const isMobileCompactTop = isMobileLandscape || isMobilePortrait;
    const shouldShowTickers = showTickers ?? !isLanding;
    const headerExpandedHeight = isMobileLandscape ? 64 : isMobilePortrait ? 64 : 90;
    const headerCompactHeight = isMobileLandscape ? 56 : isMobilePortrait ? 52 : 70;
    const headerHeight = isScrolled ? headerCompactHeight : headerExpandedHeight;
    const routeLanguage: HeaderLanguage = (normalizedInitialLang === "EN" || isPathEn)
        ? "EN"
        : (normalizedInitialLang ?? (lang === "EN" ? "EN" : "RU"));
    const copy = headerCopy[routeLanguage === "EN" ? "EN" : "RU"];
    const alternateLanguage: HeaderLanguage = routeLanguage === "EN" ? "RU" : "EN";

    // Compute automatic fallback mirror links based on current pathname if not explicitly provided
    const isCurrentPathEn = pathname?.endsWith("/en") || routeLanguage === "EN";
    const baseRoute = pathname ? (pathname.endsWith("/en") ? pathname.slice(0, -3) : pathname) : "/gazeta";
    const cleanBaseRoute = baseRoute === "" ? "/" : baseRoute;
    const computedRuHref = languageLinks?.RU ?? languageLinks?.ru ?? (cleanBaseRoute === "/en" ? "/" : cleanBaseRoute);
    const computedEnHref = languageLinks?.EN ?? languageLinks?.en ?? (cleanBaseRoute === "/" ? "/gazeta/en" : `${cleanBaseRoute}/en`);

    const alternateLanguageHref = routeLanguage === "EN" ? computedRuHref : computedEnHref;
    const visibleLanguageLabel = alternateLanguage;
    const landingIndustryNavItems: HeaderNavItem[] =
        routeLanguage === "EN"
            ? [
                  { label: "Real Estate", href: "#niche-step-06" },
                  { label: "Auto Business", href: "#niche-step-09" },
                  { label: "Hotels", href: "#niche-step-07" },
                  { label: "Restaurants", href: "#niche-step-08" },
                  { label: "Tourism", href: "#niche-step-10" },
                  { label: "Clinics", href: "#niche-step-11" },
                  { label: "IT", href: "#niche-step-12" },
              ]
            : [
                  { label: "Недвижимость", href: "#niche-step-06" },
                  { label: "Автобизнес", href: "#niche-step-09" },
                  { label: "Отели", href: "#niche-step-07" },
                  { label: "Рестораны", href: "#niche-step-08" },
                  { label: "Туризм", href: "#niche-step-10" },
                  { label: "Клиники", href: "#niche-step-11" },
                  { label: "IT", href: "#niche-step-12" },
              ];
    const landingServiceNavItems: HeaderNavItem[] =
        routeLanguage === "EN"
            ? [
                  { label: "Aerial Filming", href: "/drone-service/en" },
                  { label: "360° Tours", href: "#niche-step-03" },
                  { label: "AI Content", href: "#niche-step-05" },
                  { label: "Reels", href: "#niche-step-04" },
              ]
            : [
                  { label: "Аэросъёмка", href: "/drone-service" },
                  { label: "360° Туры", href: "#niche-step-03" },
                  { label: "AI Content", href: "#niche-step-05" },
                  { label: "Reels", href: "#niche-step-04" },
              ];
    const industryNavItems = isLanding ? landingIndustryNavItems : copy.industryNavItems;
    const serviceNavItems = isLanding ? landingServiceNavItems : copy.serviceNavItems;
    const normalizedTickerExcludes = tickerExcludeTexts.map((item) => item.trim().toLowerCase());
    const shouldExcludeTickerItem = (item: TickerItemType) => {
        if (!normalizedTickerExcludes.length) {
            return false;
        }
        const itemText = (typeof item === "object" ? item.text : item).trim().toLowerCase();
        return normalizedTickerExcludes.includes(itemText);
    };
    const filteredTickerLine1 = copy.tickerLine1.filter((item) => !shouldExcludeTickerItem(item));
    const filteredTickerLine2 = copy.tickerLine2.filter((item) => !shouldExcludeTickerItem(item));
    const combinedTickerItems = customTickerItems?.length ? customTickerItems : [...filteredTickerLine1, ...filteredTickerLine2];

    useEffect(() => {
        dismissHoverPreview();
    }, [dismissHoverPreview, pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("mobile-menu-open");
            window.dispatchEvent(new CustomEvent("mobile-menu-open-change", { detail: { isOpen: true } }));
        } else {
            document.body.style.overflow = "";
            document.body.classList.remove("mobile-menu-open");
            window.dispatchEvent(new CustomEvent("mobile-menu-open-change", { detail: { isOpen: false } }));
        }
        return () => {
            document.body.style.overflow = "";
            document.body.classList.remove("mobile-menu-open");
            window.dispatchEvent(new CustomEvent("mobile-menu-open-change", { detail: { isOpen: false } }));
        };
    }, [isMobileMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (tickerAfterFirstScroll && latest > 0 && !hasTickerActivated) {
            setHasTickerActivated(true);
        }

        // Switch state based on scroll
        if (latest > 50 && !isScrolled) setIsScrolled(true);
        else if (latest <= 50 && isScrolled) setIsScrolled(false);

        if (isLanding) {
            const vh = typeof window !== "undefined" ? window.innerHeight : 800;
            // Logo appears as soon as kinetic text reaches the clock/header level (~20% scroll)
            if (latest > vh * 0.2 && !isLogoVisible) setIsLogoVisible(true);
            else if (latest <= vh * 0.2 && isLogoVisible) setIsLogoVisible(false);
        }
    });

    const contactHref = isLanding ? "#contact" : "/gazeta#contact";
    const resolvedCtaHref = ctaHref ?? contactHref;
    const hasContactSectionLink = sectionLinks.some((link) => link.href === "#contact");
    const mobileSectionLinks = hasContactSectionLink
        ? sectionLinks
        : [...sectionLinks, { label: copy.contactSectionLabel, href: "#contact" }];
    const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string, closeMobileMenu = false) => {
        if (closeMobileMenu) {
            setIsMobileMenuOpen(false);
        }

        if (!href.startsWith("#")) {
            return;
        }

        event.preventDefault();
        let target: Element | null = null;
        if (href === "#contact") {
            const all = Array.from(document.querySelectorAll<HTMLElement>('#contact, [id*="contact"]'));
            target = all.find((el) => el.offsetParent !== null || el.getClientRects().length > 0) || all[0];
        } else if (href === "#faq") {
            const all = Array.from(document.querySelectorAll<HTMLElement>('#faq, #niche-step-13'));
            target = all.find((el) => el.offsetParent !== null || el.getClientRects().length > 0) || all[0];
        } else {
            target = document.querySelector(href);
        }

        if (!(target instanceof HTMLElement)) {
            const fallbackPath = routeLanguage === "EN" ? "/gazeta/en" : "/gazeta";
            window.location.href = `${fallbackPath}${href}`;
            return;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== href) {
            window.history.replaceState(null, "", href);
        }
    };
    const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement>, closeMobileMenu = false) => {
        if (closeMobileMenu) {
            setIsMobileMenuOpen(false);
        }

        const allContactSections = Array.from(document.querySelectorAll<HTMLElement>('#contact, [id*="contact"]'));
        const visibleContactSection = allContactSections.find((el) => el.offsetParent !== null || el.getClientRects().length > 0) || allContactSections[0];

        if (visibleContactSection) {
            event.preventDefault();
            visibleContactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            if (window.location.hash !== "#contact") {
                window.history.replaceState(null, "", "#contact");
            }
            return;
        }

        handleAnchorClick(event, resolvedCtaHref, closeMobileMenu);
    };
    const renderTimeWidget = (minimal = false) => (
        <div
            className={`flex items-center leading-none ${
                minimal
                    ? "gap-0"
                    : `border border-white/10 bg-black/40 ${isMobileCompactTop ? "px-2.5 py-1 gap-1.5" : "px-3 py-1.5 gap-2"} rounded-full backdrop-blur-md shadow-sm`
            }`}
        >
            {!minimal && (
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
            )}
            {minimal && (
                <>
                    <AnimatedFlag className="w-[44px] opacity-100" />
                    <span aria-hidden className="mx-1.5 h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                </>
            )}
            <TimeWidget showSeconds={!minimal} compact={minimal} />
        </div>
    );

    return (
        <DebugWrapper id={1} label="GlobalHeader (Глобальная Шапка)">
            <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${isScrolled
                ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/10'
                : (transparent || isLanding)
                    ? 'bg-transparent'
                    : 'bg-black/40 backdrop-blur-sm'}`}
                style={{ height: `${headerHeight}px` }}>

                {/* --- INITIAL VIEW (Not Scrolled) --- */}
                <div className={`absolute inset-0 w-full h-full flex items-center transition-all duration-300 ${isMobileCompactTop ? "px-3" : "px-6"} ${isScrolled ? 'opacity-0 pointer-events-none scale-95 delay-0' : 'opacity-100 scale-100 delay-100'}`}>
                    {/* LEFT SECTION — intentionally empty */}
                    <div className="flex-1" />

                    {/* CENTER SECTION */}
                    <DebugWrapper
                        id={3}
                        label="Center Section"
                        className={
                            mobileMinimalCenterTime
                                ? "absolute left-[44%] top-1/2 z-[305] -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0"
                                : `flex-1 flex justify-center items-start ${isMobileCompactTop ? "-mt-1" : "pt-1"}`
                        }
                    >
                        <div className={mobileMinimalCenterTime ? "md:hidden" : ""}>
                            {renderTimeWidget(mobileMinimalCenterTime)}
                        </div>
                    </DebugWrapper>

                    {/* RIGHT SECTION (Now empty to remove 4,5,6) */}
                    <div className="flex-1 flex items-center justify-end text-sm">
                    </div>
                </div>


                {/* --- V23 HEADER COMPONENT VIEW (Scrolled) --- */}
                <div
                    style={{ height: `${headerCompactHeight}px` }}
                    className={`w-full px-4 md:px-8 xl:px-12 flex justify-between items-center gap-4 transition-all duration-300 relative z-[1001] ${isScrolled ? 'opacity-100 scale-100 delay-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>

                    {/* LEFT: Branding — logo only */}
                    <DebugWrapper id={200} label="Agency Branding">
                        <div className="flex items-center flex-shrink-0">
                            <AnimatePresence>
                                {isLogoVisible && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Link href={routeLanguage === "EN" ? "/gazeta/en" : "/gazeta"} className="text-lg md:text-[22px] font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity text-white whitespace-nowrap">
                                            Breus Media
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </DebugWrapper>

                    {mobileMinimalCenterTime && (
                        <div className="pointer-events-none absolute left-[44%] top-1/2 z-[305] -translate-x-1/2 -translate-y-1/2 md:hidden">
                            {renderTimeWidget(true)}
                        </div>
                    )}

                    {/* CENTER: Navigation */}
                    <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 gap-3 lg:gap-4 xl:gap-7 mt-2 z-[310]">
                        {showDesktopNavTime && (
                            <div className="flex items-center gap-0 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white/70 whitespace-nowrap">
                                <AnimatedFlag />
                                <span aria-hidden className="mx-3 h-2.5 w-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                                <TimeWidget />
                            </div>
                        )}
                        <DebugWrapper id={201} label="Link: О нас">
                            <Link href="/about" className="text-[11px] xl:text-xs font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                {copy.aboutLabel}
                            </Link>
                        </DebugWrapper>

                        <DebugWrapper id={202} label="Dropdown: Индустрии">
                            <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("industries")} onMouseLeave={() => setHoveredMenu(null)}>
                                <button className="flex items-center gap-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {copy.industriesLabel} <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "industries" && (
                                        <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[500px] bg-black/95 border border-white/20 p-6 z-[1100] grid grid-cols-2 gap-3 rounded-2xl backdrop-blur-xl shadow-2xl">
                                            {industryNavItems.map((item) => <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide transition-colors">{item.label}</Link>)}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id={203} label="Dropdown: Услуги">
                            <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("services")} onMouseLeave={() => setHoveredMenu(null)}>
                                <button className="flex items-center gap-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {copy.servicesLabel} <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "services" && (
                                        <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[600px] bg-black/95 border border-white/20 p-6 z-[1100] grid grid-cols-3 gap-3 rounded-2xl backdrop-blur-xl shadow-2xl">
                                            {serviceNavItems.map((item) => <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide transition-colors">{item.label}</Link>)}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </DebugWrapper>

                        {sectionLinks
                            .filter((link) => link.href !== "#services")
                            .map((link, index) => (
                            <DebugWrapper key={`${link.label}-${link.href}`} id={210 + index} label={`Link: ${link.label}`}>
                                <Link href={link.href} className="text-[11px] xl:text-xs font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">
                                    {link.label}
                                </Link>
                            </DebugWrapper>
                        ))}

                        <DebugWrapper id={204} label="Link: AI Решения">
                            <Link href={routeLanguage === "EN" ? "/ai-visualization-service/en" : "/ai-visualization-service"} className="text-[11px] xl:text-xs font-bold uppercase tracking-wider hover:text-[#D4AF37] transition-colors text-white whitespace-nowrap">{copy.aiSolutionsLabel}</Link>
                        </DebugWrapper>
                    </nav>

                    {/* RIGHT: Actions */}
                    <div className={`flex items-center flex-shrink-0 relative z-[320] gap-2 xl:gap-4 ${isMobileCompactTop ? "mt-1" : "mt-2"}`}>
                        {/* 1. Contact Dropdown (205) */}
                        <div className="hidden md:block">
                            <DebugWrapper id={205} label="Contact Link">
                                <a
                                    href="tel:+995501103183"
                                    className={`flex items-center gap-1.5 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 transition-colors font-bold text-white uppercase ${isMobileCompactTop ? "px-2.5 py-1 text-[9px]" : "px-3 py-1.5 text-[10px] md:text-xs"}`}
                                >
                                    <Phone className="w-3 h-3 text-[#22c55e]" />
                                    <span>+995 501 103 183</span>
                                </a>
                            </DebugWrapper>
                        </div>

                        {/* 2. Language Switcher (207) */}
                        <DebugWrapper id={207} label="Language Switcher">
                            <div
                                className="relative"
                                onMouseEnter={() => setIsLangOpen(true)}
                                onMouseLeave={() => setIsLangOpen(false)}
                            >
                                {alternateLanguageHref ? (
                                    <Link
                                        href={alternateLanguageHref}
                                        className={`flex items-center gap-1.5 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 transition-colors font-bold text-white uppercase ${isMobileCompactTop ? "px-2.5 py-1 text-[9px]" : "px-3 py-1.5 text-[10px] md:text-xs"}`}
                                    >
                                        <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                                        <span>{visibleLanguageLabel}</span>
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsLangOpen((v) => !v)}
                                        className={`flex items-center gap-1.5 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 transition-colors font-bold text-white uppercase ${isMobileCompactTop ? "px-2.5 py-1 text-[9px]" : "px-3 py-1.5 text-[10px] md:text-xs"}`}
                                    >
                                        <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                                        <span>{visibleLanguageLabel}</span>
                                    </button>
                                )}
                                <AnimatePresence>
                                    {isLangOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 6 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full right-0 pt-2 z-[1200]"
                                        >
                                            <div className="flex flex-col rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl bg-black border border-white/10">
                                                {(["RU", "EN"] as HeaderLanguage[]).map((l) => {
                                                    const isCurrent = l === routeLanguage;
                                                    const href = l === "EN" ? computedEnHref : computedRuHref;
                                                    const className = `px-4 py-2 text-xs transition-colors text-left font-bold ${
                                                        isCurrent ? "text-[#D4AF37] bg-white/10" : "text-white hover:bg-[#D4AF37]/20"
                                                    }`;

                                                    return (
                                                        <Link
                                                            key={l}
                                                            href={href}
                                                            onClick={() => {
                                                                setLang(l);
                                                                setIsLangOpen(false);
                                                                try {
                                                                    localStorage.setItem("breus_lang", l.toLowerCase());
                                                                    document.cookie = `NEXT_LOCALE=${l.toLowerCase()}; path=/; max-age=31536000; SameSite=Lax`;
                                                                } catch (e) {}
                                                            }}
                                                            className={className}
                                                        >
                                                            {l} {isCurrent ? "✓" : ""}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </DebugWrapper>

                        {/* 3. CTA Buttons (206) - Shows different text for mobile/desktop */}
                        <DebugWrapper id={206} label="Button: Обсудить Задачу">
                            <Link
                                href={resolvedCtaHref}
                                onClick={handleCtaClick}
                                className={`${showMobilePrimaryCta ? "flex" : "hidden"} ${showDesktopPrimaryCta ? "md:flex" : "md:hidden"} items-center justify-center bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap ${isMobileCompactTop ? "px-3 py-1 text-[8px]" : "px-4 py-1.5 md:px-6 md:py-2.5 text-[9px] md:text-[10px]"}`}
                            >
                                <span className="md:hidden">{ctaLabel ?? copy.ctaMobile}</span>
                                <span className="hidden md:inline">{ctaLabel ?? copy.ctaDesktop}</span>
                            </Link>
                        </DebugWrapper>

                        {mobileQuickLink && (
                            <a
                                href={mobileQuickLink.href}
                                onClick={(event) => handleAnchorClick(event, mobileQuickLink.href)}
                                className="md:hidden flex items-center gap-1.5 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 transition-colors font-bold text-white uppercase px-2.5 py-1 text-[9px]"
                            >
                                <span>{mobileQuickLink.label}</span>
                            </a>
                        )}

                        {/* 4. Menu Icon (Mobile & Tablet) */}
                        <button className="lg:hidden text-white ml-1" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className={isMobileCompactTop ? "w-5 h-5" : "w-6 h-6"} />
                        </button>
                    </div>
                </div>

                {shouldShowTickers && hasTickerActivated && (
                    <div
                        style={stickyTickerUnderHeader ? { top: `${headerHeight}px` } : undefined}
                        className={`border-y border-white/5 transition-[background-color,border-color] duration-300 ease-out ${stickyTickerUnderHeader ? "sticky left-0 right-0 z-[980]" : "relative z-[120]"} ${
                            isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent backdrop-blur-[12px]"
                        }`}>
                        {singleTickerMode ? (
                            <div className="block">
                                <InteractiveTicker items={combinedTickerItems} direction="left" speed={60} compact={isMobileCompactTop} />
                            </div>
                        ) : (
                            <>
                                <div className="hidden md:block">
                                    <InteractiveTicker items={filteredTickerLine1} direction="left" speed={60} compact={isMobileCompactTop} />
                                </div>
                                <div className="hidden md:block">
                                    <div className="h-[1px] bg-white/5 w-full" />
                                    <InteractiveTicker items={filteredTickerLine2} direction="right" speed={70} compact={isMobileCompactTop} />
                                </div>
                            </>
                        )}
                    </div>
                )}

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            data-mobile-menu-open="true"
                            className="fixed inset-0 z-[300] h-[100dvh] w-full bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
                        >
                            {/* 1. ШАПКА МЕНЮ */}
                            <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
                                <Link
                                    href={routeLanguage === "EN" ? "/gazeta/en" : "/gazeta"}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-black uppercase tracking-wider text-white hover:text-[#FFD23F] transition-colors"
                                >
                                    BREUS MEDIA
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* 2. НАВИГАЦИЯ И ВСЕ 6 УСЛУГ */}
                            <div className="py-6 flex-1 flex flex-col justify-center space-y-6">
                                {/* Основные разделы */}
                                <nav className="space-y-3">
                                    <Link
                                        href={routeLanguage === "EN" ? "/gazeta/en" : "/gazeta"}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg font-bold text-white/90 hover:text-[#FFD23F] transition-colors"
                                    >
                                        {routeLanguage === "EN" ? "Home" : "Главная"}
                                    </Link>
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg font-bold text-white/90 hover:text-[#FFD23F] transition-colors"
                                    >
                                        {routeLanguage === "EN" ? "About Agency" : "О агентстве"}
                                    </Link>
                                    <Link
                                        href="/audit"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="inline-flex items-center gap-2 text-lg font-bold text-[#FFD23F] hover:text-white transition-colors"
                                    >
                                        <span>{routeLanguage === "EN" ? "Express Audit" : "Экспресс-аудит"}</span>
                                        <span className="text-base">⚡</span>
                                    </Link>
                                    <a
                                        href="#faq"
                                        onClick={(e) => handleAnchorClick(e, "#faq", true)}
                                        className="block text-lg font-bold text-white/90 hover:text-[#FFD23F] transition-colors"
                                    >
                                        {routeLanguage === "EN" ? "FAQ" : "Вопрос-ответ"}
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleAnchorClick(e, "#contact", true)}
                                        className="block text-lg font-bold text-white/90 hover:text-[#FFD23F] transition-colors"
                                    >
                                        {routeLanguage === "EN" ? "Contacts" : "Контакты"}
                                    </a>
                                </nav>

                                {/* Раздел услуг (сетка 2×3) */}
                                <div>
                                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                        {routeLanguage === "EN" ? "Services" : "Услуги"}
                                    </p>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <Link
                                            href={routeLanguage === "EN" ? "/drone-service/en" : "/drone-service"}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "Aerial Filming" : "Аэросъёмка"}
                                        </Link>
                                        <Link
                                            href={routeLanguage === "EN" ? "/360-tours-service/en" : "/360-tours-service"}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "360° Tours" : "360° туры"}
                                        </Link>
                                        <Link
                                            href={routeLanguage === "EN" ? "/reels-service/en" : "/reels-service"}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "Video & Reels" : "Видео & Reels"}
                                        </Link>
                                        <Link
                                            href={routeLanguage === "EN" ? "/ai-visualization-service/en" : "/ai-visualization-service"}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "AI Visualization" : "AI-визуализация"}
                                        </Link>
                                        <a
                                            href="#contact"
                                            onClick={(e) => handleAnchorClick(e, "#contact", true)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "Custom Websites" : "Сайты под ключ"}
                                        </a>
                                        <a
                                            href="#contact"
                                            onClick={(e) => handleAnchorClick(e, "#contact", true)}
                                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/90 hover:border-[#FFD23F]/50 hover:bg-white/[0.08] hover:text-[#FFD23F] transition-all text-center"
                                        >
                                            {routeLanguage === "EN" ? "Google Maps & SEO" : "Google Maps & SEO"}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 3. ПОДВАЛ МЕНЮ */}
                            <div className="pt-4 border-t border-white/10 space-y-4 shrink-0">
                                {/* Переключатель языков */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/50 font-medium">
                                        {routeLanguage === "EN" ? "Language" : "Язык"}
                                    </span>
                                    <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10">
                                        {(["RU", "EN"] as HeaderLanguage[]).map((l) => {
                                            const isCurrent = l === routeLanguage;
                                            const href = l === "EN" ? computedEnHref : computedRuHref;
                                            return (
                                                <Link
                                                    key={l}
                                                    href={href}
                                                    onClick={() => {
                                                        setLang(l);
                                                        setIsMobileMenuOpen(false);
                                                        try {
                                                            localStorage.setItem("breus_lang", l.toLowerCase());
                                                            document.cookie = `NEXT_LOCALE=${l.toLowerCase()}; path=/; max-age=31536000; SameSite=Lax`;
                                                        } catch (e) {}
                                                    }}
                                                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                                                        isCurrent
                                                            ? "bg-[#FFD23F] text-black shadow-sm"
                                                            : "text-white/70 hover:text-white"
                                                    }`}
                                                >
                                                    {l}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Крупная кнопка WhatsApp */}
                                <a
                                    href="https://wa.me/995501103183?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D1%83."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-black hover:bg-[#20bd5a] transition-colors shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
                                >
                                    <span>{routeLanguage === "EN" ? "Discuss project in WhatsApp" : "Обсудить задачу в WhatsApp"}</span>
                                    <span className="text-base">🟢</span>
                                </a>

                                {/* Строка контактов и соцсети */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
                                    <span>{routeLanguage === "EN" ? "Tbilisi, Georgia · +995 501 103 183" : "Тбилиси, Грузия · +995 501 103 183"}</span>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href="https://t.me/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Telegram"
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#229ED9] hover:bg-white/20 transition-colors"
                                        >
                                            <Send className="h-4 w-4 -rotate-12 translate-x-0.5" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Instagram"
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                                        >
                                            <Instagram className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </header>
        </DebugWrapper>
    );
}
