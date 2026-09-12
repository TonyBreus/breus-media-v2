'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Clock, CreditCard } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const Tours360HeroV2 = () => {
    return (
        <DebugWrapper id={12000} label="Tours 360 Hero V2">
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#080808] text-white">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/media/drone-service/real-estate-1.png" 
                        alt="360 Tour view of Tbilisi" 
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-[#080808]/30"></div>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center text-center mt-12 md:mt-0">
                    {/* 3 Pills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
                        <span className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                            <MapPin className="w-3.5 h-3.5 text-[#D4A017]" /> Тбилиси и Грузия
                        </span>
                        <span className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                            <Clock className="w-3.5 h-3.5 text-[#D4A017]" /> Сборка от 2 дней
                        </span>
                        <span className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                            <CreditCard className="w-3.5 h-3.5 text-[#D4A017]" /> от 200 ₾
                        </span>
                    </div>

                    {/* Single Unified H1 */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[36px] sm:text-[42px] md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-[1.05]"
                    >
                        360° Виртуальные туры <br className="hidden sm:block"/>
                        <span className="text-[#D4A017]">для бизнеса в Грузии</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-sm md:text-lg lg:text-xl text-white/70 max-w-2xl font-medium leading-relaxed mb-10"
                    >
                        Интерактивные панорамы для Google Maps, Booking и веб-сайтов. Увеличьте конверсию в бронирования и покажите ваш объект без выезда клиента.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a 
                            href="#services-v2"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A017] hover:bg-white text-black font-bold uppercase tracking-[0.1em] text-xs md:text-sm rounded-full transition-all duration-300"
                        >
                            Смотреть направления
                        </a>
                    </motion.div>
                </div>

                <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Листайте вниз</span>
                    <ArrowDown className="w-4 h-4 animate-bounce text-[#D4A017]" />
                </div>
            </section>
        </DebugWrapper>
    );
};
