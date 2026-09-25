'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Phone, Globe } from 'lucide-react';
import { gazetaTickerLine1, gazetaTickerLine2 } from '@/constants/gazetaRoutes';

export const DroneHeaderV16 = () => {
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
            {/* Единый монолитный стеклянный контейнер: деликатный blur-[6px] и тонирование 35% для видимости силуэтов текста при скролле */}
            <div 
                className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-black/35 backdrop-blur-[6px] border-b border-white/10 shadow-lg shadow-black/20' 
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                {/* 1. БЕГУЩАЯ СТРОКА НАД ШАПКОЙ (Ультракомпактная, зазор сокращен вдвое, проявляется без прыжка) */}
                <div 
                    className={`w-full overflow-hidden flex items-center select-none transition-opacity duration-300 ${
                        isScrolled 
                            ? 'opacity-100 pointer-events-auto h-5 md:h-6 py-0.5' 
                            : 'opacity-0 pointer-events-none h-5 md:h-6 py-0.5'
                    }`}
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
                                    <span className="px-2.5 md:px-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                                        {text}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mx-1.5" />
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* 2. ОСНОВНАЯ ШАПКА (Высота сжата с 56px до 44px, нижнее пустое поле срезано вдвое) */}
                <header className="w-full">
                    <div className="container mx-auto px-6 h-11 md:h-12 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col group py-0.5">
                            <span className="font-black text-lg md:text-xl tracking-tight text-white group-hover:text-white/80 transition-colors leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                                BREUS
                            </span>
                            <span className="text-[7.5px] md:text-[8.5px] tracking-[0.25em] text-white/80 text-left mt-0.5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                                MEDIA
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-7">
                            <Link href="/about" className="text-xs font-semibold text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                О нас
                            </Link>
                            <a href="#pricing" className="text-xs font-semibold text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                Цены
                            </a>
                            <a href="#faq" className="text-xs font-semibold text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                FAQ
                            </a>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-3.5">
                            <a href="tel:+995501103183" className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white transition-colors text-xs font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                <Phone className="w-3.5 h-3.5 text-[#D4A017]" />
                                <span>+995 501 103 183</span>
                            </a>
                            
                            {/* Language switch */}
                            <button className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                <Globe className="w-3.5 h-3.5" />
                                <span className="text-[11px] font-bold uppercase">RU</span>
                            </button>

                            {/* Burger Menu Button */}
                            <button 
                                className="md:hidden flex items-center justify-center p-1.5 text-white/90 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                <div className="space-y-1.5">
                                    <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                        className="fixed inset-0 z-40 bg-[#080808] pt-24 px-6 pb-6 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-6 mt-6">
                            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#D4A017] border-b border-white/10 pb-4">Тарифы</a>
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
