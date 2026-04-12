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
    'Объекты с аэровидео продаются на 68% быстрее (MLS / NAR).',
    'Дроны снимают с высоты и летают внутри помещений — FPV-технология.',
    'Один полёт — контент для рекламы, отчёт для инвестора или документация для страховой.',
];

export const DroneHeroStitch = ({ hero }: DroneHeroStitchProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedCharsCount, setTypedCharsCount] = useState(0);
    const [typewriterDone, setTypewriterDone] = useState(false);
    const [showMobileDescription, setShowMobileDescription] = useState(false);
    const [showMobileArrow, setShowMobileArrow] = useState(false);
    const [visibleDesktopPhrases, setVisibleDesktopPhrases] = useState(0);

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
        const desktopPhraseTimers = DESKTOP_HERO_PHRASES.map((_, index) =>
            setTimeout(() => setVisibleDesktopPhrases(index + 1), 400 + index * 260)
        );

        return () => {
            clearTimeout(descriptionTimer);
            clearTimeout(arrowTimer);
            desktopPhraseTimers.forEach((timer) => clearTimeout(timer));
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
    const miniCarouselCount = Math.min(4, droneServiceItems.length);
    const miniCarouselIndices = useMemo(() => {
        if (droneServiceItems.length <= miniCarouselCount) {
            return droneServiceItems.map((_, index) => index);
        }
        const start = (currentIndex - 1 + droneServiceItems.length) % droneServiceItems.length;
        return Array.from({ length: miniCarouselCount }, (_, offset) => (start + offset) % droneServiceItems.length);
    }, [currentIndex, miniCarouselCount]);

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
                    <div className="h-full flex items-center justify-start pt-20 md:pt-24 pb-16">
                        <div className="w-full text-left">
                            <div className="hidden md:block">
                                <div className="grid md:grid-cols-1 md:gap-6 lg:grid-cols-[55%_42%] lg:gap-[3%] text-left">
                                    <div className="hidden lg:block lg:-ml-8">
                                        <div className="text-5xl md:text-7xl font-bold leading-[0.92] uppercase text-white min-h-[200px]">
                                            {typedMobileLines.map((line, index) => (
                                                <div key={`desktop-typed-line-${index}`} className={index === 2 ? 'text-[#C9A84C]' : ''}>
                                                    {line || '\u00A0'}
                                                </div>
                                            ))}
                                            {!typewriterDone && (
                                                <span className="ml-1 inline-block align-baseline text-[#C9A84C] animate-pulse">|</span>
                                            )}
                                        </div>

                                        <div className="mt-4 flex flex-col gap-2">
                                            {DESKTOP_HERO_PHRASES.map((phrase, index) => (
                                                <motion.p
                                                    key={`desktop-phrase-${index}`}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{
                                                        opacity: visibleDesktopPhrases >= index + 1 ? 1 : 0,
                                                        y: visibleDesktopPhrases >= index + 1 ? 0 : 8,
                                                    }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}
                                                    className="text-[15px] text-white/55 leading-relaxed"
                                                >
                                                    {phrase}
                                                </motion.p>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3">
                                            <a
                                                href="#contact"
                                                className="inline-flex w-fit items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-all hover:brightness-105"
                                            >
                                                Обсудить задачу
                                            </a>
                                            <p className="text-[11px] text-white/30 tracking-wide">
                                                18 направлений · от 250 ₾ · Тбилиси · Батуми · Кутаиси
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block lg:hidden">
                                        <DebugWrapper id={10101} label="Hero Tagline">
                                            <span className="text-[#D4A017] font-bold tracking-[0.28em] text-[10px] md:text-xs mb-3 block uppercase">
                                                {activeService.price}
                                            </span>
                                        </DebugWrapper>

                                        <DebugWrapper id={10110} label={`Hero Title: ${activeService.title}`}>
                                            <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] text-white mb-4">
                                                {activeService.title}
                                            </h1>
                                        </DebugWrapper>
                                    </div>

                                    <div className="hidden lg:flex flex-col justify-center gap-4 py-6">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={droneServiceItems[currentIndex].slug}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.4 }}
                                                className="flex flex-col gap-4"
                                            >
                                                <div>
                                                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-bold mb-1">
                                                        {droneServiceItems[currentIndex].category}
                                                    </p>
                                                    <p className="text-3xl font-bold text-white uppercase leading-tight">
                                                        {droneServiceItems[currentIndex].title}
                                                    </p>
                                                </div>
                                                <p className="text-[15px] text-white/60 leading-relaxed">
                                                    {droneServiceItems[currentIndex].description}
                                                </p>
                                                <a
                                                    href={droneServiceItems[currentIndex].primaryHref}
                                                    className="w-full flex items-center justify-center rounded-[10px] bg-[#D4A017] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-black hover:brightness-105 transition-all"
                                                >
                                                    Открыть услугу
                                                </a>
                                            </motion.div>
                                        </AnimatePresence>
                                        <div className="w-[260px] rounded-[14px] border border-white/12 bg-black/35 p-2.5 backdrop-blur-sm">
                                            <div className="flex flex-col gap-1.5">
                                                {miniCarouselIndices.map((serviceIndex) => {
                                                    const item = droneServiceItems[serviceIndex];
                                                    const isActive = serviceIndex === currentIndex;
                                                    return (
                                                        <button
                                                            key={item.slug}
                                                            onClick={() => setCurrentIndex(serviceIndex)}
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
                                                                    {item.title}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    className="hidden md:flex absolute bottom-3 left-1/2 z-30 -translate-x-1/2 flex-col items-center text-2xl text-white/70 transition-colors hover:text-white"
                >
                    <span>↓</span>
                    <span className="hidden md:block text-[10px] text-white/30 tracking-[0.14em] mt-1">
                        18 направлений ↓
                    </span>
                </motion.button>
            </section>
        </DebugWrapper>
    );
};
