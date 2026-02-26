"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LayoutV9({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

    const industries = [
        { name: "Недвижимость", href: "/v9/industries/real-estate" },
        { name: "Автобизнес", href: "/v9/industries/automotive" },
        { name: "Отели & Туризм", href: "/v9/industries/hotels" },
        { name: "Рестораны", href: "/v9/industries/restaurants" },
        { name: "Медицина", href: "/v9/industries/medical" },
        { name: "Производство", href: "/v9/industries/production" },
    ];

    const services = [
        { name: "Дрон-съёмка", href: "/v9/services/drone-fpv" },
        { name: "360° Туры", href: "/v9/services/360-tours" },
        { name: "Reels Pack", href: "/v9/services/reels" },
        { name: "AI Staging", href: "/v9/services/ai-staging" },
    ];

    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-brand selection:text-white">
            {/* Sticky Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 h-[80px]">
                <div className="container mx-auto px-6 h-full flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/v9" className="text-2xl font-black uppercase tracking-tighter leading-none">
                        Breus Media <span className="text-brand text-xs block tracking-widest font-normal">v9 Structure</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 h-full">
                        {/* Industries Mega Menu Trigger */}
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setHoveredMenu("industries")}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors h-full">
                                Индустрии <ChevronDown className="w-4 h-4" />
                            </button>
                            {/* Mega Menu Dropdown */}
                            <AnimatePresence>
                                {hoveredMenu === "industries" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-[80px] -left-10 w-[600px] bg-dark-surface border border-white/10 p-8 rounded-b-2xl shadow-2xl grid grid-cols-2 gap-8"
                                    >
                                        <div>
                                            <h4 className="text-gray-500 text-xs uppercase mb-4 tracking-widest">Основные ниши</h4>
                                            <ul className="space-y-3">
                                                {industries.map((item) => (
                                                    <li key={item.name}>
                                                        <Link href={item.href} className="flex items-center gap-3 hover:text-brand transition-colors text-sm font-bold">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-500 text-xs uppercase mb-4 tracking-widest">Ваш бизнес</h4>
                                            <p className="text-sm text-gray-400 mb-4">Мы создаем стратегии под конкретные задачи.</p>
                                            <Link href="/v9/industries/custom" className="text-brand text-sm font-bold border-b border-brand pb-1">Обсудить проект</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Services Mega Menu Trigger */}
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setHoveredMenu("services")}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors h-full">
                                Услуги <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {hoveredMenu === "services" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-[80px] -left-10 w-[400px] bg-dark-surface border border-white/10 p-8 rounded-b-2xl shadow-2xl"
                                    >
                                        <h4 className="text-gray-500 text-xs uppercase mb-4 tracking-widest">Популярное</h4>
                                        <ul className="space-y-3">
                                            {services.map((item) => (
                                                <li key={item.name}>
                                                    <Link href={item.href} className="flex items-center gap-3 hover:text-brand transition-colors text-sm font-bold">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/v9/ai-solutions" className="text-sm font-bold uppercase tracking-wide hover:text-brand transition-colors">
                            AI Решения
                        </Link>
                    </nav>

                    {/* Contacts & CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="text-right text-[10px] uppercase font-bold text-gray-400">
                            <div>+995 555 000 000</div>
                            <div>hello@breus.media</div>
                        </div>
                        <Link href="#contact" className="btn-primary bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-brand hover:text-white transition-all">
                            Обсудить задачу
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-white relative z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-dark pt-[100px] px-6 flex flex-col gap-8 h-screen overflow-y-auto"
                        >
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase mb-4 tracking-widest border-b border-white/10 pb-2">Индустрии</h4>
                                    <ul className="space-y-4">
                                        {industries.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold hover:text-brand transition-colors">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase mb-4 tracking-widest border-b border-white/10 pb-2">Услуги</h4>
                                    <ul className="space-y-4">
                                        {services.map((item) => (
                                            <li key={item.name}>
                                                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold hover:text-brand transition-colors">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary bg-white text-black py-4 rounded-xl font-bold text-center text-lg uppercase tracking-wide mt-8">
                                    Обсудить задачу
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <div className="pt-[80px]">
                {children}
            </div>

        </div>
    );
}
