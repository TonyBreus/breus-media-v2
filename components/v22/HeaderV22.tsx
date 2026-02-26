"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroStore } from "@/store/useHeroStore";

// --- Interactive Ticker Components ---
const TickerItem = ({ text }: { text: string }) => {
    const { setHoveredService } = useHeroStore();
    return (
        <span
            onMouseEnter={() => setHoveredService(text)}
            onMouseLeave={() => setHoveredService(null)}
            className="cursor-pointer px-4 md:px-8 text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap"
        >
            {text}
        </span>
    );
};

const InteractiveTicker = ({ items, direction = "left", speed = 40 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden w-full relative group">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#0F172A] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#0F172A] to-transparent" />

            <motion.div
                className="flex py-2.5"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <TickerItem key={`${item}-${i}`} text={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default function HeaderV22() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const line1 = ["НЕДВИЖИМОСТЬ", "АВТОБИЗНЕС", "ОТЕЛИ", "РЕСТОРАНЫ", "ТУРИЗМ", "КЛИНИКИ", "IT"];
    // UPDATED LINE 2 (English mixed)
    const line2 = ["Аэросъемка", "360° Туры", "Промо Видео", "Мероприятия", "AI Content", "Reels"];

    // Navigation Lists
    const industries = ["Недвижимость", "Автобизнес", "Отели & Туризм", "Рестораны", "Медицина", "Салоны Красоты", "Производство", "Ритейл", "IT"];
    const services = ["Аэросъемка", "360° Туры", "Reels", "AI Staging", "Web Design", "Brandbook", "Мероприятия", "Консалтинг"];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 transition-all duration-300 flex flex-col shadow-2xl`}>

                {/* HEADLINE BAR */}
                <div className={`w-full px-2 md:px-10 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-[70px]' : 'h-[90px]'} relative z-[60]`}>

                    {/* Branding + Subtext */}
                    <div className="flex flex-col justify-center items-start flex-shrink-0 mr-2 md:mr-0">
                        {/* BLUE ACCENT */}
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand mb-1 ml-1 font-bold">АГЕНТСТВО</span>
                        <Link href="/" className="text-lg md:text-3xl font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity text-white">
                            Breus Media
                        </Link>
                        {/* SUBTEXT UPDATED & BLUE ACCENT */}
                        <span className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 mt-1 ml-1 leading-tight">
                            <span className="text-brand">Visual Production</span> & <span className="text-brand">AI</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link href="/about" className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white whitespace-nowrap">О Нас</Link>

                        <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("industries")} onMouseLeave={() => setHoveredMenu(null)}>
                            <button className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white whitespace-nowrap">
                                Индустрии <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {hoveredMenu === "industries" && (
                                    <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[500px] bg-black/95 border border-white/20 p-6 z-[70] grid grid-cols-2 gap-3 rounded-2xl backdrop-blur-xl">
                                        {industries.map(item => <Link key={item} href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide">{item}</Link>)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("services")} onMouseLeave={() => setHoveredMenu(null)}>
                            <button className="flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white whitespace-nowrap">
                                Услуги <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {hoveredMenu === "services" && (
                                    <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[600px] bg-black/95 border border-white/20 p-6 z-[70] grid grid-cols-3 gap-3 rounded-2xl backdrop-blur-xl">
                                        {services.map(item => <Link key={item} href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wide">{item}</Link>)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="#" className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white whitespace-nowrap">AI Решения</Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-shrink-0">

                        {/* 1. Mobile CTA (Visible on Mobile, "Обсудить") */}
                        <Link href="#contact" className="md:hidden bg-brand text-white px-3 py-2 rounded-lg font-bold uppercase text-[9px] tracking-wider hover:bg-white hover:text-black transition-all whitespace-nowrap">
                            Обсудить
                        </Link>

                        {/* 2. Contact Dropdown (Phone Icon) */}
                        <div className="relative group" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                            <button className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full hover:bg-brand transition-colors border border-white/5 group-hover:border-brand/50">
                                <div className="flex flex-col items-center gap-[1px]">
                                    <Phone className="w-3 h-3 text-white" />
                                </div>
                            </button>

                            {/* DROPDOWN CONTENT */}
                            <AnimatePresence>
                                {isContactOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        style={{ originY: 0, originX: 1 }}
                                        className="absolute top-full right-0 mt-4 w-72 md:w-80 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-[80] overflow-hidden"
                                    >
                                        <div className="p-6 flex flex-col gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-1">
                                                    <Phone className="w-4 h-4 text-brand" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <a href="tel:+995555000000" className="text-lg font-bold text-white hover:text-brand transition-colors tracking-wide">+995 555 00 00 00</a>
                                                </div>
                                            </div>
                                            <div className="h-px w-full bg-white/10 my-1" />
                                            {/* Socials */}
                                            <div className="flex justify-between items-center px-2">
                                                <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                                    <span className="text-[9px] uppercase font-bold text-gray-400">WhatsApp</span>
                                                </a>
                                                <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                    <Send className="w-5 h-5 text-[#0088cc] ml-0.5" />
                                                    <span className="text-[9px] uppercase font-bold text-gray-400">Telegram</span>
                                                </a>
                                                <a href="#" className="flex flex-col items-center gap-1 group/social">
                                                    <MessageCircle className="w-5 h-5 text-[#7360f2]" />
                                                    <span className="text-[9px] uppercase font-bold text-gray-400">Viber</span>
                                                </a>
                                            </div>
                                            <div className="h-px w-full bg-white/10 my-1" />
                                            <a href="mailto:hello@breus.media" className="flex items-center gap-3 px-2">
                                                <Mail className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm font-bold text-gray-400 hover:text-white transition-colors">hello@breus.media</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 3. Desktop CTA */}
                        <Link href="#contact" className="hidden md:flex bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand hover:text-white transition-all whitespace-nowrap">
                            Обсудить задачу
                        </Link>

                        {/* 4. Language Switcher (Moved to Far Right) */}
                        <div className="group relative hidden md:block">
                            <button className="flex items-center text-xs font-bold text-gray-400 hover:text-white">
                                <Globe className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 hidden group-hover:block p-2 w-12 text-center text-xs text-brand">RU</div>
                        </div>

                        {/* Mobile Lang (Next to Menu) */}
                        <div className="md:hidden">
                            <button className="flex items-center text-xs font-bold text-gray-400 hover:text-white">
                                <Globe className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>

                    </div>
                </div>

                {/* INTERACTIVE TICKERS */}
                <div className="border-t border-white/5 bg-[#0F172A] relative z-[50]">
                    <InteractiveTicker items={line1} direction="left" speed={60} />
                    <div className="h-[1px] bg-white/5 w-full" />
                    <InteractiveTicker items={line2} direction="right" speed={70} />
                </div>

            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 z-[100] bg-black p-8 flex flex-col gap-6">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-8 h-8" /></button>
                        <div className="mt-12 flex flex-col gap-4">
                            <span className="text-white font-bold text-2xl">МЕНЮ</span>
                            <Link href="/" className="text-xl font-bold uppercase text-gray-300">Home</Link>
                            <Link href="/about" className="text-xl font-bold uppercase text-gray-300">О Нас</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
