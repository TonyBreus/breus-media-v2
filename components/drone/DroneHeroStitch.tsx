'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

export const DroneHeroStitch = ({ hero }: DroneHeroStitchProps) => {
    const heroServices = useMemo(
        () => [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id)),
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [typedCharsCount, setTypedCharsCount] = useState(0);
    const [typewriterDone, setTypewriterDone] = useState(false);
    const [showMobileDescription, setShowMobileDescription] = useState(false);
    const [showMobilePricePill, setShowMobilePricePill] = useState(false);
    const [showMobileArrow, setShowMobileArrow] = useState(false);
    const rotationRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        setActiveIndex(0);
    }, [heroServices.length]);

    const restartRotation = useCallback(() => {
        if (rotationRef.current) {
            clearInterval(rotationRef.current);
        }
        if (heroServices.length <= 1) {
            return;
        }
        rotationRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroServices.length);
        }, ROTATION_MS);
    }, [heroServices.length]);

    useEffect(() => {
        restartRotation();
        return () => {
            if (rotationRef.current) {
                clearInterval(rotationRef.current);
            }
        };
    }, [restartRotation]);

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
        const priceTimer = setTimeout(() => setShowMobilePricePill(true), 800);
        const arrowTimer = setTimeout(() => setShowMobileArrow(true), 1200);

        return () => {
            clearTimeout(descriptionTimer);
            clearTimeout(priceTimer);
            clearTimeout(arrowTimer);
        };
    }, [typewriterDone]);

    const safeActiveIndex = heroServices.length > 0 ? activeIndex % heroServices.length : 0;
    const activeService = heroServices[safeActiveIndex] ?? droneServiceItems[0];

    const sellingLine = useMemo(() => {
        const leadSentence = activeService?.description?.split(/[.!?]/)[0]?.trim();
        return leadSentence ? `${leadSentence}.` : activeService?.description ?? '';
    }, [activeService?.description]);

    const supportLine = useMemo(() => {
        const introLead = hero.intro.split(/[.!?]/)[0]?.trim();
        if (!introLead) {
            return '';
        }
        return `${introLead}.`;
    }, [hero.intro]);

    const typedMobileLines = useMemo(
        () => MOBILE_HERO_TYPEWRITER_TEXT.slice(0, typedCharsCount).split('\n'),
        [typedCharsCount]
    );

    const visibleCount = Math.min(4, heroServices.length);
    const visibleIndices = useMemo(() => {
        if (heroServices.length <= visibleCount) {
            return heroServices.map((_, index) => index);
        }
        const start = (safeActiveIndex - 1 + heroServices.length) % heroServices.length;
        return Array.from({ length: visibleCount }, (_, offset) => (start + offset) % heroServices.length);
    }, [heroServices, safeActiveIndex, visibleCount]);

    const handleSelectService = (index: number) => {
        setActiveIndex(index);
        restartRotation();
    };

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
                                        className="px-2"
                                    >
                                        <DebugWrapper id={10101} label="Hero Tagline">
                                            <span className="text-[#D4A017] font-bold tracking-[0.28em] text-[10px] md:text-xs mb-3 block uppercase">
                                                {hero.eyebrow}
                                            </span>
                                        </DebugWrapper>

                                        <DebugWrapper id={10110} label={`Hero Title: ${activeService.title}`}>
                                            <h1 className="text-[40px] md:text-6xl lg:text-[80px] font-bold leading-[0.92] text-white mb-4">
                                                {activeService.title}
                                            </h1>
                                        </DebugWrapper>

                                        <DebugWrapper id={10102} label="Hero Description">
                                            <p className="text-base md:text-2xl text-white/88 max-w-3xl mx-auto leading-relaxed">
                                                {sellingLine}
                                            </p>
                                            {supportLine && (
                                                <p className="text-sm md:text-lg text-white/62 mt-2 max-w-2xl mx-auto">
                                                    {supportLine}
                                                </p>
                                            )}
                                        </DebugWrapper>

                                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-10">
                                            <DebugWrapper id={10120} label="Hero Primary CTA">
                                                <Link
                                                    href={activeService.primaryHref}
                                                    className="bg-[#D4A017] text-black px-7 md:px-9 py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all"
                                                >
                                                    Подробнее
                                                </Link>
                                            </DebugWrapper>
                                            <DebugWrapper id={10121} label="Hero Secondary CTA">
                                                <Link
                                                    href="#services"
                                                    className="border border-white/25 hover:border-[#D4A017] text-white px-7 md:px-9 py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest transition-all"
                                                >
                                                    Подобрать услугу
                                                </Link>
                                            </DebugWrapper>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="block md:hidden px-1">
                                <div className="mx-auto max-w-[320px] text-left">
                                    <div className="text-[34px] font-bold leading-[1.02] tracking-[0.06em] uppercase text-white min-h-[136px]">
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
                                        className={`mt-4 text-sm leading-relaxed text-white/65 transition-opacity duration-500 ${
                                            showMobileDescription ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <p>Фото и видео с воздуха для продажи, продвижения и мониторинга.</p>
                                        <p>Снаружи, с высоты и FPV-пролёт внутри помещений.</p>
                                    </div>

                                    <div
                                        className={`mt-5 transition-opacity duration-500 ${
                                            showMobilePricePill ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <span className="inline-flex items-center rounded-full border border-[#C9A84C]/50 px-4 py-1.5 text-sm font-medium text-[#C9A84C]">
                                            от 250 ₾
                                        </span>
                                    </div>

                                    <a
                                        href="#directions"
                                        aria-label="Прокрутить к направлениям"
                                        className={`mt-8 inline-flex items-center justify-center text-[#C9A84C] transition-opacity duration-500 ${
                                            showMobileArrow ? 'opacity-100' : 'pointer-events-none opacity-0'
                                        }`}
                                    >
                                        <ChevronDown className="h-6 w-6 animate-bounce" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DebugWrapper id={10180} label="Compact Service Navigator">
                    <div className="hidden lg:flex absolute left-[max(24px,calc(50%-560px))] bottom-12 w-52 flex-col gap-1.5 rounded-xl border border-white/12 bg-black/40 backdrop-blur-md p-2.5 z-20">
                        {visibleIndices.map((serviceIndex) => {
                            const service = heroServices[serviceIndex];
                            const isActive = serviceIndex === safeActiveIndex;
                            return (
                                <button
                                    key={service.slug}
                                    type="button"
                                    onClick={() => handleSelectService(serviceIndex)}
                                    className={`w-full text-left rounded-lg px-2.5 py-2 transition-colors ${
                                        isActive ? 'bg-white/14' : 'hover:bg-white/8'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                                isActive ? 'bg-[#D4A017]' : 'bg-white/40'
                                            }`}
                                        />
                                        <span
                                            className={`text-xs font-semibold leading-tight transition-colors ${
                                                isActive ? 'text-white' : 'text-white/64'
                                            }`}
                                        >
                                            {service.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </DebugWrapper>

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
