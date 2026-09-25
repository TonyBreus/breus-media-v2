'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const ROTATION_MS = 6000;

export const DroneHeroV16 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (droneServiceItems.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % droneServiceItems.length);
        }, ROTATION_MS);
        return () => clearInterval(interval);
    }, []);

    const activeItem = droneServiceItems.length > 0 ? droneServiceItems[currentIndex] : null;

    return (
        <DebugWrapper id={14003} label="Drone Hero V16">
            <section className="relative isolate min-h-[100vh] min-h-[100dvh] overflow-hidden bg-[#080808] border-b border-[#2a2a2a] pt-20 md:pt-28 pb-12 flex flex-col justify-center">
                
                {/* Background image rotation */}
                <AnimatePresence initial={false}>
                    {activeItem && (
                        <motion.div
                            key={activeItem.image}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="absolute inset-0 -z-20 bg-cover bg-center"
                            style={{ backgroundImage: `url(${activeItem.image})` }}
                        />
                    )}
                </AnimatePresence>

                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-black/40 md:via-[#080808]/60 md:bg-[linear-gradient(90deg,rgba(8,8,8,0.95)_0%,rgba(8,8,8,0.7)_50%,rgba(8,8,8,0.3)_100%)]" />

                <div className="container relative z-10 mx-auto px-6 h-full flex items-center justify-center">
                    {/* Оптический центр с подъемом на 10-15% над нижней границей */}
                    <div className="w-full max-w-4xl text-center -translate-y-6 sm:-translate-y-10 md:-translate-y-12 transition-transform duration-300">
                        <h1 className="text-[30px] sm:text-[40px] md:text-5xl lg:text-[64px] font-bold leading-[1.08] tracking-tight text-white uppercase drop-shadow-xl">
                            Аэросъёмка <br className="hidden md:block"/> для бизнеса в Грузии
                        </h1>
                        <p className="mt-4 md:mt-6 text-sm md:text-lg leading-relaxed text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md">
                            4K-аэросъёмка и FPV-пролёты для бизнеса в Тбилиси и по всей Грузии. Сдача готовых материалов за 24–48 часов.
                        </p>
                        
                        <div className="mt-8 flex flex-col items-center gap-4 justify-center">
                            <a 
                                href="#proof-metrics"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D4A017] text-black font-bold py-3.5 px-6 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all hover:bg-white shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                            >
                                Смотреть направления ↓
                            </a>
                            <a 
                                href="#pricing"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white/90 font-medium py-3 px-6 rounded-xl text-sm transition-all"
                            >
                                Тарифы от 200 ₾
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
