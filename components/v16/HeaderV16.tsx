"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Menu, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroStore } from "@/store/useHeroStore";

// --- Components for Tickers ---
const TopTickerItem = ({ text }: { text: string }) => {
    const { setHoveredService } = useHeroStore();
    return (
        <span
            onMouseEnter={() => setHoveredService(text)}
            onMouseLeave={() => setHoveredService(null)}
            className="hover:text-brand transition-colors cursor-pointer px-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 whitespace-nowrap"
        >
            {text}
        </span>
    );
};

const TopTicker = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => {
    return (
        <div className="flex overflow-hidden w-full relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-black to-transparent" />
            <motion.div
                className="flex"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <TopTickerItem key={`${item}-${i}`} text={item} />
                ))}
            </motion.div>
        </div>
    );
};


export default function HeaderV16() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    // Shrink on scroll logic
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const industries = [
        "Недвижимость", "Автобизнес", "Отели & Туризм", "Рестораны",
        "Медицина", "Салоны Красоты", "Производство", "Ритейл",
        "Спорт & Фитнес", "IT", "Ваш Бизнес"
    ];

    const services = [
        "Аэросъемка 4K", "Аэрофото", "360° Туры", "Reels Pack",
        "AI Staging", "Web Design", "Brandbook", "Brand Promo",
        "Мероприятия", "Продюсирование", "Консалтинг", "Аудит",
        "AI Content", "Автоматизация"
    ];

    return (
        <>
            {/* --- 1. STICKY TOP TICKERS --- */}
            <div className="fixed top-0 left-0 right-0 z-[60] bg-black border-b border-white/10">
                {/* Row 1: Industries */}
                <div className="py-2 border-b border-white/5">
                    <TopTicker items={industries} direction="left" />
                </div>
                {/* Row 2: Services */}
                <div className="py-2">
                    <TopTicker items={services} direction="right" />
                </div>
            </div>

            {/* --- 2. MAIN HEADER --- */}
            <header
                className={`fixed left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 flex flex-col`}
                style={{ top: "82px" }} // Approx height of top tickers
            >
                <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-[70px]' : 'h-[90px]'} relative`}>

                    {/* LEFT: Logo + Nav */}
                    <div className="flex items-center gap-12 h-full pl-4 md:pl-8"> {/* Logo slightly right */}

                        {/* Logo */}
                        <Link href="/" className="flex flex-col justify-center items-start group">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1 ml-1 group-hover:text-brand transition-colors">АГЕНТСТВО</span>
                            <span className="text-2xl font-black uppercase tracking-tighter leading-none text-white group-hover:opacity-80 transition-opacity">
                                Breus Media
                            </span>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden xl:flex items-center gap-6 h-full">
                            {/* Tags colored Electric Blue/Purple per request */}
                            <Link href="/about" className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand/20 border border-white/5 hover:border-brand/50 text-[11px] font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-all">
                                О Нас
                            </Link>

                            {/* Dropdown: Industries */}
                            <div
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu("industries")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <button className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand/20 border border-white/5 hover:border-brand/50 text-[11px] font-bold uppercase tracking-widest text-white hover:text-white transition-all flex items-center gap-2">
                                    Индустрии <ChevronDown className="w-3 h-3" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "industries" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-[70%] left-0 w-[500px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-[70] grid grid-cols-2 gap-2"
                                        >
                                            {industries.map(item => (
                                                <Link key={item} href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wide">
                                                    <div className="w-1 h-1 rounded-full bg-brand" /> {item}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Dropdown: Services */}
                            <div
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu("services")}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <button className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand/20 border border-white/5 hover:border-brand/50 text-[11px] font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-all flex items-center gap-2">
                                    Услуги <ChevronDown className="w-3 h-3" />
                                </button>
                                <AnimatePresence>
                                    {hoveredMenu === "services" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-[70%] left-0 w-[700px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-[70] grid grid-cols-3 gap-2"
                                        >
                                            {services.map(item => (
                                                <Link key={item} href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wide">
                                                    <div className="w-1 h-1 rounded-full bg-brand" /> {item}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="#" className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand/20 border border-white/5 hover:border-brand/50 text-[11px] font-bold uppercase tracking-widest text-white hover:text-white transition-all">
                                AI Решения
                            </Link>

                        </nav>
                    </div>

                    {/* RIGHT: Controls */}
                    <div className="flex items-center gap-4 md:gap-8 pr-4">

                        {/* Theme Toggle Placeholder (User requested) */}
                        <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors">
                            <div className="w-4 h-4 rounded-full border border-white/30" />
                        </button>

                        {/* Lang */}
                        <div className="group relative hidden md:block">
                            <button className="flex items-center gap-1 text-[10px] font-bold uppercase text-gray-400 hover:text-white">
                                <Globe className="w-3 h-3" /> <ChevronDown className="w-3 h-3" />
                            </button>
                            {/* Simplified Lang Dropdown */}
                            <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 hidden group-hover:block p-2 w-16 z-[70]">
                                <div className="hover:bg-white/10 p-1 cursor-pointer text-xs text-brand font-bold text-center">RU</div>
                                <div className="hover:bg-white/10 p-1 cursor-pointer text-xs text-gray-400 text-center">EN</div>
                            </div>
                        </div>

                        {/* Contact Phone Button (V14 Style) */}
                        <div className="relative" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                            <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-brand hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                                <Phone className="w-3 h-3" />
                                <span className="hidden md:inline">Связаться</span>
                            </button>

                            <AnimatePresence>
                                {isContactOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleY: 0, y: 10 }}
                                        animate={{ opacity: 1, scaleY: 1, y: 0 }}
                                        exit={{ opacity: 0, scaleY: 0, y: 10 }}
                                        style={{ originY: 0 }}
                                        className="absolute top-full right-0 pt-4 w-80"
                                    >
                                        <div className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 relative z-[75]">
                                            {/* Content matched from V14 */}
                                            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                                                <Phone className="w-5 h-5 text-white" />
                                                <a href="tel:+995555000000" className="text-lg font-bold tracking-widest text-white hover:text-brand transition-colors">+995 555 00 00 00</a>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <a href="#" className="flex items-center gap-4 group/item"><MessageCircle className="w-5 h-5 text-green-500" /><span className="text-xs font-bold uppercase text-gray-400 group-hover/item:text-white">WhatsApp</span></a>
                                                <a href="#" className="flex items-center gap-4 group/item"><Send className="w-5 h-5 text-blue-500" /><span className="text-xs font-bold uppercase text-gray-400 group-hover/item:text-white">Telegram</span></a>
                                            </div>
                                            <div className="pt-4 border-t border-white/10">
                                                <a href="mailto:hello@breus.media" className="flex items-center gap-4"><Mail className="w-5 h-5 text-brand" /><span className="text-sm font-bold text-gray-400 hover:text-white">hello@breus.media</span></a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="xl:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black p-6 flex flex-col h-screen overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-black uppercase text-white">Меню</span>
                            <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8 text-white" /></button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link href="/about" className="text-2xl font-bold uppercase text-white pb-4 border-b border-white/10">О Нас</Link>

                            {/* Industries Accordion */}
                            <div>
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === 'ind' ? null : 'ind')}
                                    className="w-full flex justify-between items-center text-2xl font-bold uppercase text-white pb-4 border-b border-white/10"
                                >
                                    Индустрии <ChevronDown className={`w-6 h-6 transition-transform ${mobileExpanded === 'ind' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileExpanded === 'ind' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-3 py-4 pl-4 border-l border-white/10 ml-2">
                                                {industries.map(item => (
                                                    <Link key={item} href="#" className="text-lg text-gray-400">{item}</Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === 'srv' ? null : 'srv')}
                                    className="w-full flex justify-between items-center text-2xl font-bold uppercase text-white pb-4 border-b border-white/10"
                                >
                                    Услуги <ChevronDown className={`w-6 h-6 transition-transform ${mobileExpanded === 'srv' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileExpanded === 'srv' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-3 py-4 pl-4 border-l border-white/10 ml-2">
                                                {services.map(item => (
                                                    <Link key={item} href="#" className="text-lg text-gray-400">{item}</Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="#" className="text-2xl font-bold uppercase text-white pb-4 border-b border-white/10">AI Решения</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
