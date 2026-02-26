"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SlowTicker from "@/components/SlowTicker";

export default function HeaderV17() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Shrink on scroll logic
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // NEW CONTENT LISTS
    const line1 = ["НЕДВИЖИМОСТЬ", "АВТОБИЗНЕС", "ОТЕЛИ", "РЕСТОРАНЫ", "ТУРИЗМ", "КЛИНИКИ", "IT"];
    const line2 = ["ПРОМО ВИДЕО", "AI КОНТЕНТ", "МЕРОПРИЯТИЯ"];

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
            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 transition-all duration-300 flex flex-col shadow-2xl`}
            >
                {/* HEADLINE BAR (Wide Layout) */}
                <div className={`w-full px-4 md:px-10 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-[100px]'} relative z-[60]`}>

                    {/* LEFT: Branding */}
                    <div className={`flex flex-col justify-center items-start transition-all duration-300 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1 ml-1">АГЕНТСТВО</span>
                        <Link href="/" className="text-3xl font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity text-white">
                            Breus Media
                        </Link>
                        <span className={`text-[10px] uppercase tracking-widest text-brand mt-1 ml-1 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                            Визуальный Production & AI
                        </span>
                    </div>

                    {/* CENTER: Menu (Hidden on small screens) */}
                    <nav className="hidden xl:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link href="/about" className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">О Нас</Link>

                        <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("industries")} onMouseLeave={() => setHoveredMenu(null)}>
                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                                Индустрии <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {hoveredMenu === "industries" && (
                                    <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[600px] bg-black/95 border border-white/20 p-8 z-[70] grid grid-cols-2 gap-4">
                                        {industries.map(item => <Link key={item} href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase">{item}</Link>)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative h-full flex items-center py-4" onMouseEnter={() => setHoveredMenu("services")} onMouseLeave={() => setHoveredMenu(null)}>
                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                                Услуги <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {hoveredMenu === "services" && (
                                    <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} className="absolute top-[60px] left-1/2 w-[800px] bg-black/95 border border-white/20 p-8 z-[70] grid grid-cols-3 gap-4">
                                        {services.map(item => <Link key={item} href="#" className="text-gray-400 hover:text-white text-xs font-bold uppercase">{item}</Link>)}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">AI Решения</Link>
                    </nav>


                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-6">

                        {/* NEW: Phone Number (Clickable) */}
                        <a href="tel:+995555000000" className="hidden lg:block text-white font-bold text-sm tracking-wider hover:text-brand transition-colors">
                            +995 555 00 00 00
                        </a>

                        {/* CTA Button */}
                        <Link href="#contact" className="hidden lg:flex bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand hover:text-white transition-all whitespace-nowrap">
                            Обсудить задачу
                        </Link>

                        {/* Expandable Contact Icon */}
                        <div className="relative group" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                            <button className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-brand transition-colors">
                                <Phone className="w-4 h-4 text-white" />
                            </button>
                            <AnimatePresence>
                                {isContactOpen && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full right-0 mt-4 bg-black border border-white/20 p-6 w-64 z-[80] flex flex-col gap-4">
                                        {/* Dropdown content similar to v14 */}
                                        <a href="tel:+995555000000" className="text-white font-bold hover:text-brand">+995 555 00 00 00</a>
                                        <div className="flex gap-4">
                                            <MessageCircle className="w-5 h-5 text-green-500" />
                                            <Send className="w-5 h-5 text-blue-500" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Lang */}
                        <div className="group relative hidden md:block">
                            <button className="flex items-center text-xs font-bold text-gray-400 hover:text-white">
                                <Globe className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 hidden group-hover:block p-2 w-12 text-center text-xs text-brand">RU</div>
                        </div>

                        {/* Mobile Trigger */}
                        <button className="xl:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </div>

                {/* TICKERS (Row 1 & 2) */}
                <div className="border-t border-white/5 bg-[#0F172A] relative z-[50]">
                    <SlowTicker items={line1} direction="left" speed={90} />
                    <SlowTicker items={line2} direction="right" speed={100} />
                </div>
            </header>

            {/* MOBILE MENU (Simplified) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 z-[100] bg-black p-8 flex flex-col gap-6">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X className="w-8 h-8" /></button>
                        <Link href="#" className="text-2xl font-bold uppercase text-white">О Нас</Link>
                        <Link href="#" className="text-2xl font-bold uppercase text-white">Индустрии</Link>
                        <Link href="#" className="text-2xl font-bold uppercase text-white">Услуги</Link>
                        <Link href="#" className="text-2xl font-bold uppercase text-white">AI Решения</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
