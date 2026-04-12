'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import type { DroneDirectionHeroConfig } from '@/constants/droneDirectionPages';

type DroneHeroStitchProps = {
    hero: DroneDirectionHeroConfig;
};

const ROTATION_MS = 5000;
const TYPEWRITER_INTERVAL_MS = 40;
const TYPEWRITER_NEWLINE_PAUSE_MS = 120;
const MOBILE_HERO_TYPEWRITER_TEXT = 'АЭРОСЪЁМКА\nДЛЯ БИЗНЕСА\nВ ГРУЗИИ';
const DESKTOP_HERO_PHRASES = [
    'С земли не видно главного: террасу ресторана, масштаб стройки, дефект на крыше.',
    'Объекты с аэровидео продаются на 68% быстрее — по данным MLS / NAR.',
    'Снимаем с высоты и летаем внутри помещений — FPV-технология.',
    'Один полёт — контент для рекламы, отчёт для инвестора или документация для страховой.',
];

export const DroneHeroStitch = ({ hero }: DroneHeroStitchProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedCharsCount, setTypedCharsCount] = useState(0);
    const [typewriterDone, setTypewriterDone] = useState(false);
    const [showMobileDescription, setShowMobileDescription] = useState(false);
    const [showMobileArrow, setShowMobileArrow] = useState(false);

    useEffect(() => {
        if (droneServiceItems.length <= 1) {
            return;
        }
        const rotationInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % droneServiceItems.length);
        }, ROTATION_MS);
        return () => {
            clearInterval(rotationInterval);
        };
    }, []);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        let nextIndex = 0;

        const typeNext = () => {
            if (nextIndex >= MOBILE_HERO_TYPEWRITER_TEXT.length) {
                setTypewriterDone(true);
                return;
            }

            const nextChar = MOBILE_HERO_TYPEWRITER_TEXT[nextIndex];
            nextIndex += 1;
            setTypedCharsCount(nextIndex);

            timeoutId = setTimeout(
                typeNext,
                nextChar === '\n' ? TYPEWRITER_NEWLINE_PAUSE_MS : TYPEWRITER_INTERVAL_MS
            );
        };

        timeoutId = setTimeout(typeNext, TYPEWRITER_INTERVAL_MS);

        return () => {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    useEffect(() => {
        if (!typewriterDone) {
            return;
        }

        const descriptionTimer = setTimeout(() => setShowMobileDescription(true), 400);
        const arrowTimer = setTimeout(() => setShowMobileArrow(true), 1200);

        return () => {
            clearTimeout(descriptionTimer);
            clearTimeout(arrowTimer);
        };
    }, [typewriterDone]);

    useEffect(() => {
        if (currentIndex < droneServiceItems.length) {
            return;
        }
        setCurrentIndex(0);
    }, [currentIndex]);

    const typedMobileLines = useMemo(
        () => MOBILE_HERO_TYPEWRITER_TEXT.slice(0, typedCharsCount).split('\n'),
        [typedCharsCount]
    );

    const activeService = droneServiceItems[currentIndex] ?? droneServiceItems[0];

    const handleScrollToNextSection = () => {
        const nextSection = document.getElementById('services');
        if (!nextSection) {
            return;
        }

        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <DebugWrapper id={10100} label="Drone Hero Section">
            <section className="relative h-[calc(100vh-80px)] min-h-[620px] md:min-h-[680px] overflow-hidden bg-[#080808]">
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeService.slug}
                            src={activeService.image || hero.heroImage}
                            alt={activeService.title || hero.h1}
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 0.64, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: 'easeOut' }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(212,160,23,0.22),transparent_56%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#040404]/82 via-[#070707]/52 to-[#070707]/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/62 via-transparent to-[#070707]/58" />
                </div>

                <div className="container mx-auto px-6 relative z-10 h-full">
                    <div className="h-full flex items-center justify-center pt-28 md:pt-32 pb-16">
                        <div className="w-full max-w-4xl text-center">
                            <div className="hidden md:block">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeService.slug}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.34, ease: 'easeOut' }}
                                        className="px-2 md:grid md:grid-cols-1 md:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-10 md:text-center lg:text-left"
                                    >
                                        <div>
                                            <DebugWrapper id={10101} label="Hero Tagline">
                                                <span className="text-[#D4A017] font-bold tracking-[0.28em] text-[10px] md:text-xs mb-3 block uppercase">
                                                    {activeService.price}
                                                </span>
                                            </DebugWrapper>

                                            <DebugWrapper id={10110} label={`Hero Title: ${activeService.title}`}>
                                                <h1 className="text-[40px] md:text-6xl lg:text-[80px] font-bold leading-[0.92] text-white mb-4">
                                                    {activeService.title}
                                                </h1>
                                            </DebugWrapper>

                                            <div className="hidden lg:flex flex-col gap-1.5 mb-6">
                                                {DESKTOP_HERO_PHRASES.map((phrase, i) => (
                                                    <p key={i} className="text-sm text-white/55 leading-snug border-b border-white/[0.06] pb-1.5 last:border-0">
                                                        {phrase}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-8 md:mt-10">
                                                <DebugWrapper id={10120} label="Hero Primary CTA">
                                                    <Link
                                                        href="#contact"
                                                        className="bg-[#D4A017] text-black px-7 md:px-9 py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all"
                                                    >
                                                        Обсудить проект
                                                    </Link>
                                                </DebugWrapper>
                                            </div>

                                            <p className="hidden lg:block text-[11px] text-white/25 tracking-wide mt-3">
                                                DJI Air 3S + Avata 2 · 4K · Тбилиси · Батуми · Кутаиси · от 250 ₾ · 18 направлений
                                            </p>
                                        </div>

                                        <div className="hidden lg:flex flex-col gap-3 py-6">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">
                                                НАПРАВЛЕНИЯ · {droneServiceItems.length} УСЛУГ
                                            </p>
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={droneServiceItems[currentIndex].slug}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="border-l-2 border-[#D4A017] pl-5"
                                                >
                                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A017] font-bold mb-1">
                                                        {droneServiceItems[currentIndex].category}
                                                    </p>
                                                    <p className="text-xl font-bold text-white uppercase leading-tight mb-2">
                                                        {droneServiceItems[currentIndex].title}
                                                    </p>
                                                    <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                                                        {droneServiceItems[currentIndex].description}
                                                    </p>
                                                </motion.div>
                                            </AnimatePresence>
                                            <div className="flex gap-1.5 mt-2 flex-wrap">
                                                {droneServiceItems.slice(0, 6).map((item, i) => (
                                                    <button
                                                        key={item.slug}
                                                        onClick={() => setCurrentIndex(i)}
                                                        className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded border transition-colors ${
                                                            currentIndex === i
                                                                ? 'border-[#D4A017] text-[#D4A017]'
                                                                : 'border-white/10 text-white/30 hover:border-white/30'
                                                        }`}
                                                    >
                                                        {item.title.split(' ')[0]}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="block md:hidden px-1">
                                <div className="mx-auto max-w-[320px] text-left">
                                    <div className="text-[34px] font-bold leading-[1.02] tracking-[0.06em] uppercase text-white min-h-[124px]">
                                        {typedMobileLines.map((line, index) => (
                                            <div key={`typed-line-${index}`} className={index === 2 ? 'text-[#C9A84C]' : ''}>
                                                {line || '\u00A0'}
                                            </div>
                                        ))}
                                        {!typewriterDone && (
                                            <span className="ml-1 inline-block align-baseline text-[#C9A84C] animate-pulse">|</span>
                                        )}
                                    </div>

                                    <div
                                        className={`mt-0 text-[15px] leading-relaxed text-white/80 font-medium transition-opacity duration-500 ${
                                            showMobileDescription ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <p>
                                            С земли не видно главного: террасу ресторана, масштаб стройки, дефект на
                                            крыше.
                                        </p>
                                        <p className="mt-2">
                                            Объекты с аэровидео продаются на 68% быстрее (MLS / NAR).
                                        </p>
                                        <p className="mt-2">
                                            Дроны снимают с высоты и летают внутри помещений — FPV-технология.
                                        </p>
                                        <p className="mt-2">
                                            Один полёт — контент для рекламы, отчёт для инвестора или документация для
                                            страховой.
                                        </p>
                                    </div>

                                    <a
                                        href="#directions"
                                        aria-label="Прокрутить к направлениям"
                                        className={`mt-5 -translate-y-4 inline-flex flex-col items-center justify-center gap-1 text-[#C9A84C] transition-opacity duration-500 ${
                                            showMobileArrow ? 'opacity-100' : 'pointer-events-none opacity-0'
                                        }`}
                                    >
                                        <ChevronDown className="h-5 w-5 animate-bounce" />
                                        <span className="whitespace-nowrap text-[12px] font-medium leading-none">
                                            18 направлений — найдите своё · от 250 ₾
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.button
                    type="button"
                    aria-label="Прокрутить к следующему разделу"
                    onClick={handleScrollToNextSection}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="hidden md:block absolute bottom-3 left-1/2 z-30 -translate-x-1/2 text-2xl text-white/70 transition-colors hover:text-white"
                >
                    ↓
                </motion.button>
            </section>
        </DebugWrapper>
    );
};
