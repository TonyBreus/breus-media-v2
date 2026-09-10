'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Manrope } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import type { DroneDirectionHeroConfig } from '@/constants/droneDirectionPages';

type DroneHeroStitchProps = {
    hero: DroneDirectionHeroConfig;
};

const ROTATION_MS = 10000;
const TYPEWRITER_INTERVAL_MS = 40;
const TYPEWRITER_NEWLINE_PAUSE_MS = 120;
const MOBILE_HERO_TYPEWRITER_TEXT = 'АЭРОСЪЁМКА\nДЛЯ БИЗНЕСА\nВ ГРУЗИИ';
const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });
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

    const safeCurrentIndex = droneServiceItems.length > 0 ? currentIndex % droneServiceItems.length : 0;
    const typedMobileLines = useMemo(
        () => MOBILE_HERO_TYPEWRITER_TEXT.slice(0, typedCharsCount).split('\n'),
        [typedCharsCount]
    );
    const miniCarouselCount = Math.min(4, droneServiceItems.length);
    const miniCarouselIndices = useMemo(() => {
        if (droneServiceItems.length <= miniCarouselCount) {
            return droneServiceItems.map((_, index) => index);
        }
        const start = (safeCurrentIndex - 1 + droneServiceItems.length) % droneServiceItems.length;
        return Array.from({ length: miniCarouselCount }, (_, offset) => (start + offset) % droneServiceItems.length);
    }, [safeCurrentIndex, miniCarouselCount]);

    const activeService = droneServiceItems[safeCurrentIndex] ?? droneServiceItems[0];
    const activeServiceNumber = String(safeCurrentIndex + 1).padStart(2, '0');
    const serviceTotal = String(droneServiceItems.length).padStart(2, '0');

    const READY_L3_URLS = [
        '/drone-hotels-tourism',
        '/drone-services/drone-restaurants',
        '/drone-services/drone-real-estate',
        '/360-tour-hotels',
        '/360-tour-real-estate',
        '/reels-real-estate',
        '/drone-hotels-tourism/en',
        '/drone-services/drone-restaurants/en',
        '/drone-services/drone-real-estate/en',
        '/360-tour-hotels/en',
        '/360-tour-real-estate/en',
        '/reels-real-estate/en'
    ];
    const showPrimaryCta = READY_L3_URLS.includes(activeService.primaryHref);

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
                            alt="Аэросъёмка дроном для бизнеса в Тбилиси — Breus Media"
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
                    <div className="h-full flex items-center justify-start pt-20 md:pt-24 pb-8">
                        <div className="w-full text-left">
                            <div className="hidden md:block">
                                <div className="grid md:grid-cols-1 md:gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.72fr)] lg:items-center lg:gap-12 xl:gap-16 text-left">
                                    <div className="hidden lg:block lg:-ml-8">
                                        <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] uppercase text-white min-h-[200px]">
                                            <div>АЭРОСЪЁМКА</div>
                                            <div>ДЛЯ БИЗНЕСА</div>
                                            <div className="text-[#C9A84C]">В ГРУЗИИ</div>
                                        </h1>

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
                                                    className={`${manrope.className} antialiased font-normal text-[16px] leading-[1.65] text-white/[0.88]`}
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

                                    <div className="hidden lg:flex justify-end">
                                        <div className="relative w-full max-w-[480px] overflow-hidden rounded-[10px] border border-white/15 bg-[#090806]/72 shadow-[0_28px_80px_rgba(0,0,0,0.44)] backdrop-blur-xl">
                                            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4A017] to-transparent" />
                                            <div className="relative border-b border-white/10 px-6 pb-6 pt-6">
                                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,160,23,0.15),transparent_38%,rgba(255,255,255,0.06)_100%)]" />

                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeService.slug}
                                                        initial={{ opacity: 0, y: 12 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.38, ease: 'easeOut' }}
                                                        className="relative pt-7"
                                                    >
                                                        <span className="absolute right-0 top-0 tabular-nums text-[12px] font-semibold text-white/62">
                                                            {activeServiceNumber}/{serviceTotal}
                                                        </span>
                                                        <p className="max-w-[14ch] text-[42px] font-bold uppercase leading-[0.96] text-white">
                                                            {activeService.title}
                                                        </p>
                                                        <p className={`${manrope.className} mt-5 max-w-[36rem] antialiased text-[16px] font-normal leading-[1.65] text-white/[0.84]`}>
                                                            {activeService.description}
                                                        </p>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            <div className="px-4 pb-4 pt-4">
                                                <div className="grid gap-2 sm:grid-cols-2">
                                                    {showPrimaryCta ? (
                                                        <a
                                                            href={activeService.primaryHref}
                                                            className="group flex w-full items-center justify-between rounded-[8px] border border-[#D4A017] bg-[#D4A017] px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition-all hover:bg-white hover:border-white"
                                                        >
                                                            <span>Открыть услугу</span>
                                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                        </a>
                                                    ) : null}
                                                    <a
                                                        href="#contact"
                                                        className={`flex items-center justify-center rounded-[8px] border border-white/12 px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-white/28 hover:bg-white/[0.06] ${
                                                            showPrimaryCta ? '' : 'sm:col-span-2'
                                                        }`}
                                                    >
                                                        Обсудить задачу
                                                    </a>
                                                </div>

                                                <div className="mt-3 grid gap-2" role="tablist" aria-label="Направления аэросъёмки">
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
                                                                className={`group grid w-full grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[8px] border px-3 py-3 text-left transition-all ${
                                                                    isActive
                                                                        ? 'border-[#D4A017]/68 bg-[#D4A017]/15'
                                                                        : 'border-white/10 bg-white/[0.035] hover:border-white/24 hover:bg-white/[0.07]'
                                                                }`}
                                                            >
                                                                <span
                                                                    className={`tabular-nums text-[11px] font-semibold ${
                                                                        isActive ? 'text-[#D4A017]' : 'text-white/38'
                                                                    }`}
                                                                >
                                                                    {itemNumber}
                                                                </span>
                                                                <span
                                                                    className={`text-[13px] font-semibold leading-tight ${
                                                                        isActive ? 'text-white' : 'text-white/70'
                                                                    }`}
                                                                >
                                                                    {item.title}
                                                                </span>
                                                                <span
                                                                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                                                        isActive ? 'bg-[#D4A017]' : 'bg-white/24 group-hover:bg-white/45'
                                                                    }`}
                                                                />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block md:hidden px-1">
                                <div className="mx-auto max-w-[340px] text-left">
                                    <h1 className="text-[32px] sm:text-[36px] font-bold leading-[1.02] tracking-[0.04em] uppercase text-white">
                                        <div>АЭРОСЪЁМКА</div>
                                        <div>ДЛЯ БИЗНЕСА</div>
                                        <div className="text-[#C9A84C]">В ГРУЗИИ</div>
                                    </h1>

                                    <p className="mt-3 text-[13px] leading-relaxed text-white/85 font-normal">
                                        Съёмка на флагманские дроны DJI и FPV в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки и ресторанов. Готовые материалы от 24 часов, цены от 200 ₾.
                                    </p>

                                    <div className="mt-4 flex flex-col gap-2">
                                        <a
                                            href="https://wa.me/995501103183?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C+%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D1%91%D0%BC%D0%BA%D1%83+%D0%B4%D1%80%D0%BE%D0%BD%D0%BE%D0%BC+%D0%B2+%D0%A2%D0%B1%D0%B8%D0%BB%D0%B8%D1%81%D0%B8."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#D4A017] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-[0_4px_20px_rgba(212,160,23,0.35)] transition-all active:scale-[0.98]"
                                        >
                                            Обсудить задачу в WhatsApp
                                        </a>
                                        <a
                                            href="#pricing"
                                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-[12px] border border-white/20 bg-white/5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white/10"
                                        >
                                            Тарифы от 200 ₾ ↓
                                        </a>
                                    </div>
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
                    className="hidden md:flex absolute bottom-3 left-1/2 z-30 -translate-x-1/2 flex-col items-center text-[18px] text-white/70 transition-colors hover:text-white"
                >
                    <span>↓</span>
                    <span className="hidden md:block text-[15px] text-white tracking-[0.14em] mt-1">
                        18 направлений
                    </span>
                    <span className="hidden md:block text-[14px] text-[#D4A017] tracking-[0.1em] mt-0.5">
                        от 250 ₾ · Тбилиси · Батуми · Кутаиси
                    </span>
                </motion.button>
            </section>
        </DebugWrapper>
    );
};
