'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const DroneStickyCtaV2 = () => {
    const { scrollYProgress } = useScroll();
    
    // Fade in after scrolling past 5% of the page, hide if at the absolute bottom (optional)
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
    const pointerEvents = useTransform(scrollYProgress, (v) => (v > 0.05 && v < 0.95 ? 'auto' : 'none'));

    return (
        <DebugWrapper id={11003} label="Drone Sticky CTA V2">
            <motion.div 
                style={{ opacity, pointerEvents: pointerEvents as any }}
                className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-4"
            >
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl w-full max-w-sm flex items-center justify-between">
                    <div className="flex flex-col px-3">
                        <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Остались вопросы?</span>
                        <span className="text-xs text-white font-medium">Отвечаем за 5 минут</span>
                    </div>
                    <a 
                        href="https://wa.me/995501103183"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-colors"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </motion.div>
        </DebugWrapper>
    );
};
