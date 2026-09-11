'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Manrope } from 'next/font/google';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

const STATS = [
    { value: '+68%', label: 'Скорость закрытия сделок', note: 'С аэровидео объектов недвижимости (MLS)' },
    { value: '3x', label: 'Увеличение вовлеченности', note: 'В рекламных кампаниях с FPV-пролетами' },
    { value: '-40%', label: 'Экономия на инспекциях', note: 'При использовании дронов вместо лесов' },
    { value: '+94%', label: 'Рост онлайн-бронирований', note: 'Отелей и курортов с 4K-аэропанорамами' },
];

export const DroneStatsStripV2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <DebugWrapper id={11004} label="Drone Stats Strip V2">
            <section className="py-12 md:py-16 bg-[#D4A017] text-black overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay"></div>
                
                <div className="mx-auto w-full max-w-[1400px] px-6 relative z-10">
                    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-black/10">
                        {STATS.map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center px-4"
                            >
                                <div className={`${manrope.className} text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base font-bold uppercase tracking-wider mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-[10px] md:text-xs opacity-70 font-medium max-w-[200px]">
                                    {stat.note}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
