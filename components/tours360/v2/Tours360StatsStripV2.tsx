'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Manrope } from 'next/font/google';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

const STATS = [
    { value: '+16%', label: 'Рост видимости в Google', note: 'Для бизнесов с туром Google Street View' },
    { value: '2x', label: 'Дольше на сайте', note: 'Пользователи изучают интерактивный тур' },
    { value: '+85%', label: 'Онлайн бронирования', note: 'Рост доверия к отелю или ресторану' },
    { value: '100%', label: 'Удаленный осмотр', note: 'Экономия времени на показах недвижимости' },
];

export const Tours360StatsStripV2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <DebugWrapper id={12004} label="Tours 360 Stats Strip V2">
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
