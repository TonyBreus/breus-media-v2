'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Zap, Tag } from 'lucide-react';
import { RealEstateHeroSlideshow } from '@/components/drone-real-estate/RealEstateHeroSlideshow';

export const HeroRealEstateV2 = () => {
    return (
        <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#080808] border-b border-[#2a2a2a] flex items-center justify-center pt-20">
            <RealEstateHeroSlideshow />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/80" />
            
            <div className="container relative mx-auto px-6 max-w-5xl text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2">
                            <MapPin className="w-4 h-4 text-[#FFD23F]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-white">Тбилиси · Батуми · регионы</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2">
                            <Zap className="w-4 h-4 text-[#FFD23F]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-white">Сдача от 24 часов</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2">
                            <Tag className="w-4 h-4 text-[#FFD23F]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-white">от 200 ₾</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                        Аэросъёмка недвижимости <br className="hidden md:block" /> и девелопмента в Грузии
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        4K-видео и фото объектов для девелоперов, агентств и инвесторов. Сдача готовых материалов за 24–48 часов по стандартам MyHome.ge и SS.ge.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a 
                            href="https://wa.me/995501103183?text=Здравствуйте!+Интересует+съемка+недвижимости+в+Грузии."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                        >
                            <MessageCircle className="h-5 w-5 fill-black" />
                            Обсудить объект в WhatsApp
                        </a>
                        <a 
                            href="#pricing"
                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-[12px] border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
                        >
                            Тарифы и калькулятор ↓
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
