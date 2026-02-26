"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderV12() {
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 flex flex-col`}
        >
            <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-[100px]'} relative z-[60]`}>

                {/* LEFT: Branding Stack */}
                <div className={`flex flex-col justify-center items-start transition-all duration-300 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1 ml-1">АГЕНТСТВО</span>
                    <Link href="/" className="text-3xl font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity text-white">
                        Breus Media
                    </Link>
                    <span className={`text-[10px] uppercase tracking-widest text-brand mt-1 ml-1 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                        Визуальный Production & AI
                    </span>
                </div>

                {/* CENTER: Menu */}
                <nav className="hidden xl:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">

                    {/* About Us */}
                    <Link href="/about" className="text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                        О Нас
                    </Link>

                    {/* Industries */}
                    <div
                        className="relative h-full flex items-center py-4"
                        onMouseEnter={() => setHoveredMenu("industries")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                            Индустрии <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                            {hoveredMenu === "industries" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                                    className="absolute top-[60px] left-1/2 w-[600px] bg-black/95 backdrop-blur-xl border border-white/20 p-8 shadow-2xl z-[70] grid grid-cols-2 gap-x-8 gap-y-3"
                                >
                                    {industries.map(item => (
                                        <Link key={item} href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all text-sm uppercase font-semibold block">
                                            {item}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Services */}
                    <div
                        className="relative h-full flex items-center py-4"
                        onMouseEnter={() => setHoveredMenu("services")}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                            Услуги <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                            {hoveredMenu === "services" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                                    className="absolute top-[60px] left-1/2 w-[800px] bg-black/95 backdrop-blur-xl border border-white/20 p-8 shadow-2xl z-[70] grid grid-cols-3 gap-x-8 gap-y-3"
                                >
                                    {services.map(item => (
                                        <Link key={item} href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all text-sm uppercase font-semibold block">
                                            {item}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* AI Button */}
                    <Link href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors text-white">
                        AI Решения
                    </Link>
                </nav>

                {/* RIGHT: CTA + Contact Stack + Lang */}
                <div className="flex items-center">

                    {/* CTA Button (White Oval) */}
                    <Link href="#contact" className="hidden lg:flex bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] whitespace-nowrap mr-6">
                        Обсудить задачу
                    </Link>

                    {/* Contact Stack (Phone + Mail Icon) - EXPANDABLE */}
                    <div className="relative group mr-8" onMouseEnter={() => setIsContactOpen(true)} onMouseLeave={() => setIsContactOpen(false)}>
                        <button
                            className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-brand transition-colors relative z-[75]"
                        >
                            <div className="flex flex-col items-center gap-[2px]">
                                <Phone className="w-3 h-3 text-white" />
                                <Mail className="w-3 h-3 text-white" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isContactOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    exit={{ opacity: 0, scaleY: 0 }}
                                    style={{ originY: 0 }}
                                    className="absolute top-0 right-0 pt-12 bg-black border border-white/20 rounded-xl p-4 w-64 shadow-2xl z-[70] flex flex-col gap-3"
                                >
                                    <a href="tel:+995555000000" className="flex items-center gap-3 text-sm font-bold hover:text-brand transition-colors text-white border-b border-white/10 pb-2">
                                        <Phone className="w-4 h-4" />
                                        <span className="text-xs tracking-widest">+995 555 00 00 00</span>
                                    </a>
                                    <a href="mailto:hello@breus.media" className="flex items-center gap-3 text-xs hover:text-brand transition-colors text-gray-400 font-bold border-t border-white/10 pt-2 tracking-wider">
                                        <Mail className="w-4 h-4" /> hello@breus.media
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Lang Switcher (Far Right) */}
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400 hover:text-white">
                            <Globe className="w-4 h-4" /> <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 hidden group-hover:block p-2 w-16 z-[70]">
                            <div className="hover:bg-white/10 p-1 cursor-pointer text-xs text-brand font-bold text-center">RU</div>
                            <div className="hover:bg-white/10 p-1 cursor-pointer text-xs text-gray-400 text-center">EN</div>
                            <div className="hover:bg-white/10 p-1 cursor-pointer text-xs text-gray-400 text-center">GE</div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}
