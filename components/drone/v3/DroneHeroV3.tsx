'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const ROTATION_MS = 6000;

export const DroneHeroV3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (droneServiceItems.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % droneServiceItems.length);
        }, ROTATION_MS);
        return () => clearInterval(interval);
    }, []);

    const miniCarouselIndices = useMemo(() => {
        if (droneServiceItems.length === 0) return [];
        const indices = [];
        for (let i = 0; i < Math.min(4, droneServiceItems.length); i++) {
            indices.push((currentIndex + i) % droneServiceItems.length);
        }
        return indices;
    }, [currentIndex]);

    const activeItem = droneServiceItems.length > 0 ? droneServiceItems[currentIndex] : null;

    const scrollToCatalog = (e: React.MouseEvent) => {
        e.preventDefault();
        const catalog = document.getElementById('catalog');
        if (catalog) {
            catalog.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault();
        const pricing = document.getElementById('pricing');
        if (pricing) {
            pricing.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <DebugWrapper id={14001} label="Drone Hero V3">
            <section className="relative isolate min-h-[100vh] min-h-[100dvh] overflow-hidden bg-[#080808] border-b border-[#2a2a2a] pt-20 md:pt-32 pb-12 flex flex-col justify-center">
                
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

                <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
                    <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_400px]">
                        
                        {/* Left Content */}
                        <div className="max-w-3xl pt-8 md:pt-0 text-left">
                            <h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-white uppercase drop-shadow-xl">
                                Аэросъёмка <br className="hidden md:block"/> для бизнеса в Грузии
                            </h1>
                            <p className="mt-5 md:mt-6 text-sm md:text-lg leading-relaxed text-white/90 font-medium md:max-w-2xl drop-shadow-md">
                                Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов. Готовые материалы от 24 часов.
                            </p>
                            
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={scrollToCatalog}
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                                >
                                    Смотреть направления ↓
                                </button>
                                <button 
                                    onClick={scrollToPricing}
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
                                >
                                    Тарифы от 200 ₾
                                </button>
                            </div>
                        </div>

                        {/* Right Carousel (Desktop only) */}
                        <div className="hidden lg:block relative">
                            <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A]/80 p-6 backdrop-blur-xl shadow-2xl">
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Направления</div>
                                    <div className="text-[10px] font-bold text-[#D4A017] tracking-wider">
                                        {String(currentIndex + 1).padStart(2, '0')}/{droneServiceItems.length}
                                    </div>
                                </div>
                                <div className="grid gap-3" role="tablist">
                                    {miniCarouselIndices.map((serviceIndex) => {
                                        const item = droneServiceItems[serviceIndex];
                                        const isActive = serviceIndex === currentIndex;
                                        const itemNumber = String(serviceIndex + 1).padStart(2, '0');
                                        return (
                                            <button
                                                key={item.slug}
                                                type="button"
                                                onClick={() => setCurrentIndex(serviceIndex)}
                                                role="tab"
                                                aria-selected={isActive}
                                                className={`group grid w-full grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[12px] border px-4 py-3.5 text-left transition-all ${
                                                    isActive
                                                        ? 'border-[#D4A017]/60 bg-[#D4A017]/10'
                                                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                                                }`}
                                            >
                                                <span className={`tabular-nums text-xs font-bold ${isActive ? 'text-[#D4A017]' : 'text-white/40'}`}>
                                                    {itemNumber}
                                                </span>
                                                <span className={`text-sm font-semibold leading-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
                                                    {item.title}
                                                </span>
                                                <span className={`h-1.5 w-1.5 rounded-full transition-colors ${isActive ? 'bg-[#D4A017]' : 'bg-white/20 group-hover:bg-white/40'}`} />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
