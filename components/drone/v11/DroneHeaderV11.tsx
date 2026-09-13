'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Phone, Globe } from 'lucide-react';
import { gazetaTickerLine1, gazetaTickerLine2 } from '@/constants/gazetaRoutes';

export const DroneHeaderV11 = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 180) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Combine ticker items from both lines
    const tickerItems = [...gazetaTickerLine1, ...gazetaTickerLine2];

    return (
        <>
            {/* Единый фиксированный контейнер: Announcement Bar + Main Header */}
            <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
                
                {/* 1. БЕГУЩАЯ СТРОКА (Появляется синхронно с виджетом связи при scrollY >= 180, затемнение 20%) */}
                <AnimatePresence>
                    {isScrolled && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="w-full bg-black/20 backdrop-blur-md border-b border-white/5 py-1.5 md:py-2 overflow-hidden flex items-center select-none pointer-events-auto"
                        >
                            <motion.div
                                animate={{ x: [0, -1000] }}
                                transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
                                className="flex items-center whitespace-nowrap min-w-max"
                            >
                                {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
                                    const text = typeof item === 'string' ? item : item.text;
                                    return (
                                        <div key={idx} className="flex items-center">
                                            <span className="px-3 md:px-4 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                                                {text}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 mx-1.5 md:mx-2" />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 2. ОСНОВНАЯ ШАПКА (НИЖНИЙ СЛОЙ: полностью прозрачная bg-transparent на старте, затемнение 20% при скролле) */}
                <header
                    className={`w-full pointer-events-auto transition-all duration-300 ${
                        isScrolled 
                            ? 'bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
                            : 'bg-transparent border-b border-transparent'
                    }`}
                >
                    <div className="container mx-auto px-6 h-14 md:h-18 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col group py-1.5">
                            <span className="font-black text-lg md:text-2xl tracking-tight text-white group-hover:text-white/80 transition-colors leading-none">
                                BREUS
                            </span>
                            <span className="text-[8px] md:text-[10px] tracking-[0.25em] text-white/70 text-left mt-0.5 font-semibold">
                                MEDIA
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                                О нас
                            </Link>
                            <a href="#pricing" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                                Цены
                            </a>
                            <a href="#faq" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                                FAQ
                            </a>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <a href="tel:+995501103183" className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-semibold">
                                <Phone className="w-4 h-4" />
                                <span>+995 501 103 183</span>
                            </a>
                            
                            {/* Language switch */}
                            <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                                <Globe className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase">RU</span>
                            </button>

                            {/* Burger Menu Button */}
                            <button 
                                className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                <div className="space-y-1.5">
                                    <span className={`block w-6 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-6 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#080808] pt-28 px-6 pb-6 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-6 mt-6">
                            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#D4A017] border-b border-white/10 pb-4">
                                Тарифы и цены
                            </a>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-4">
                                О нас
                            </Link>
                            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white border-b border-white/10 pb-4">
                                FAQ
                            </a>
                        </nav>
                        <div className="mt-auto flex flex-col gap-4">
                            <a href="tel:+995501103183" className="flex items-center gap-3 text-white py-4 border-t border-white/10">
                                <Phone className="w-5 h-5 text-[#D4A017]" />
                                <span className="text-lg font-semibold">+995 501 103 183</span>
                            </a>
                            <button className="flex items-center gap-2 text-white/60">
                                <Globe className="w-5 h-5" />
                                <span className="font-semibold uppercase tracking-widest text-sm">Language: RU</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
