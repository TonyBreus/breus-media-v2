'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MultiContactWidgetV15 = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const showCount = useRef(0);

    useEffect(() => {
        let showTimeout: NodeJS.Timeout;
        let hideTimeout: NodeJS.Timeout;
        let nextInterval: NodeJS.Timeout;

        const triggerBanner = () => {
            if (showCount.current >= 3) return;
            setIsBannerVisible(true);
            showCount.current += 1;

            hideTimeout = setTimeout(() => {
                setIsBannerVisible(false);
            }, 4500);

            if (showCount.current < 3) {
                nextInterval = setTimeout(triggerBanner, 40000);
            }
        };

        // Первое появление через 10 секунд
        showTimeout = setTimeout(triggerBanner, 10000);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
            clearTimeout(nextInterval);
        };
    }, []);

    const handleClick = () => {
        const text = encodeURIComponent('Здравствуйте! Интересует аэросъёмка в Грузии. Подскажите условия и дату выезда.');
        window.open(`https://wa.me/995501103183?text=${text}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-4 z-[99] flex items-center">
            <AnimatePresence>
                {isBannerVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
                        exit={{ opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.25, ease: 'easeIn' } }}
                        onClick={handleClick}
                        className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 bg-[#111]/95 backdrop-blur-md border border-white/15 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2.5 whitespace-nowrap cursor-pointer hover:border-emerald-500/40 transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-xs font-semibold tracking-wide">
                            Остались вопросы? Отвечаем за 5 минут
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={handleClick}
                aria-label="Написать в WhatsApp"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-10"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 mt-0.5"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.816 5.816 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </button>
        </div>
    );
};
