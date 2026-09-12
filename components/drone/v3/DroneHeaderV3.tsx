'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Phone, Globe } from 'lucide-react';
import { gazetaTickerLine1, gazetaTickerLine2 } from '@/constants/gazetaRoutes';

export const DroneHeaderV3 = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 120) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    // Combine ticker items from both lines
    const tickerItems = [...gazetaTickerLine1, ...gazetaTickerLine2];

    return (
        <>
            {/* Main Header (Floating when scrolled) */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                    isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-black text-xl tracking-tight text-white group-hover:text-white/80 transition-colors">
                            BREUS
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/drone-service-v3" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                            Аэросъёмка
                        </Link>
                        <a href="#catalog" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                            Направления
                        </a>
                        <a href="#pricing" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                            Цены
                        </a>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a href="tel:+995501103183" className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-semibold">
                            <Phone className="w-4 h-4" />
                            <span>+995 501 103 183</span>
                        </a>
                        <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">RU</span>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Floating Ticker (Shows only when scrolled >= 120px) */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-black/40 backdrop-blur-sm py-1.5 border-b border-white/5 overflow-hidden flex"
                    >
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                            className="flex items-center whitespace-nowrap min-w-max"
                        >
                            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
                                const text = typeof item === 'string' ? item : item.text;
                                return (
                                    <div key={idx} className="flex items-center">
                                        <span className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A017]/80">
                                            {text}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mx-2" />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
