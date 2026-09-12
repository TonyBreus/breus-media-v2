'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const ROTATION_MS = 6000;

export const DroneHeroV6 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (droneServiceItems.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % droneServiceItems.length);
        }, ROTATION_MS);
        return () => clearInterval(interval);
    }, []);

    const activeItem = droneServiceItems.length > 0 ? droneServiceItems[currentIndex] : null;

    const scrollToCatalog = (e: React.MouseEvent) => {
        e.preventDefault();
        const catalog = document.getElementById('proof-metrics');
        if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <DebugWrapper id={14001} label="Drone Hero V6">
            <section className="relative isolate min-h-[100vh] min-h-[100dvh] overflow-hidden bg-[#080808] border-b border-[#2a2a2a] pt-28 md:pt-32 pb-32 flex flex-col justify-start">
                
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

                <div className="container relative z-10 mx-auto px-6 h-full flex items-start justify-center mt-8 md:mt-16">
                    <div className="w-full max-w-4xl text-center">
                        <h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-white uppercase drop-shadow-xl">
                            Аэросъёмка <br className="hidden md:block"/> для бизнеса в Грузии
                        </h1>
                        <p className="mt-5 md:mt-6 text-sm md:text-lg leading-relaxed text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md">
                            Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов. Готовые материалы от 24 часов.
                        </p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={scrollToCatalog}
                                className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                            >
                                Смотреть направления ↓
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
