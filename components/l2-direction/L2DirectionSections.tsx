'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, MessageCircle, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { StatsEvidenceStrip } from '@/components/shared/StatsEvidenceStrip';
import { MarqueeSection } from '@/components/gazeta/MarqueeSection';
import type {
    L2CardsLayoutPreset,
    L2ConditionsNoteConfig,
    L2ContactConfig,
    L2DeliverablesConfig,
    L2EarnLoseConfig,
    L2FaqItem,
    L2HeroCard,
    L2MapConfig,
    L2MidCtaConfig,
    L2PainCard,
    L2PainSolutionItem,
    L2PricingPlan,
    L2PricingAddOnsConfig,
    L2ProcessStep,
    L2SignalStripItem,
    L2ShortQaConfig,
    L2ServiceItem,
    L2StatCard,
    L2StatItem,
    L2WhatIsTourConfig,
    L2WhyUsConfig,
} from '@/components/l2-direction/types';
import type { DroneDirectionHeroConfig } from '@/constants/droneDirectionPages';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';

const ROTATION_MS = 5000;
const TYPEWRITER_INTERVAL_MS = 40;
const TYPEWRITER_NEWLINE_PAUSE_MS = 120;

export const selectAndScrollToContact = (serviceTitle?: string) => {
    if (typeof window !== 'undefined' && serviceTitle) {
        window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle } }));
        try {
            sessionStorage.setItem('breus_contact_prefill_service', serviceTitle);
        } catch {}
    }
    const el = document.getElementById('contact');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};

type L2DirectionHeroProps = {
    hero: DroneDirectionHeroConfig;
    heroSubtitle: string;
    heroSupportingLine: string;
    heroDisplayTitle?: string;
    heroDesktopDisplayTitle?: string;
    heroDisplayAccentLine?: string;
    heroMobileCompact?: boolean;
    heroLongHubLayout?: boolean;
    services: L2ServiceItem[];
    heroCards?: L2HeroCard[];
    leadParagraphs?: string[];
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
};

export const L2DirectionHero = ({
    hero,
    heroSubtitle,
    heroSupportingLine,
    heroDisplayTitle,
    heroDesktopDisplayTitle,
    heroDisplayAccentLine,
    heroMobileCompact = false,
    heroLongHubLayout = false,
    services,
    heroCards,
    leadParagraphs,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
}: L2DirectionHeroProps) => {
    const heroServices = useMemo(() => [...services].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id)), [services]);
    const rotatingCards = useMemo(
        () =>
            heroCards?.length
                ? heroCards
                : heroServices.map((service) => ({
                      slug: service.slug,
                      title: service.title,
                      image: service.image,
                      tags: service.category,
                      shortText: service.description,
                      primaryCta: service.primaryHref
                          ? {
                                label: service.primaryCtaLabel ?? 'Открыть услугу',
                                href: service.primaryHref,
                            }
                          : undefined,
                      secondaryCta: {
                          label: service.secondaryCtaLabel ?? 'Обсудить задачу',
                          href: service.secondaryHref ?? '#contact',
                      },
                  })),
        [heroCards, heroServices],
    );
    const hasCustomHeroCopy = Boolean(leadParagraphs?.length);
    const visualTitle = heroDisplayTitle ?? hero.h1;
    const desktopVisualTitle = heroDesktopDisplayTitle ?? visualTitle;
    const typewriterTimingTitle = desktopVisualTitle.length >= visualTitle.length ? desktopVisualTitle : visualTitle;
    const typewriterTitleLength = Math.max(visualTitle.length, desktopVisualTitle.length);

    const [activeIndex, setActiveIndex] = useState(0);
    const [typedTitleCharsCount, setTypedTitleCharsCount] = useState(0);
    const [titleTypewriterDone, setTitleTypewriterDone] = useState(false);
    const rotationRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        const rafId = window.requestAnimationFrame(() => {
            setActiveIndex(0);
        });
        return () => {
            window.cancelAnimationFrame(rafId);
        };
    }, [rotatingCards.length]);

    const restartRotation = useCallback(() => {
        if (rotationRef.current) {
            clearInterval(rotationRef.current);
        }
        if (rotatingCards.length <= 1) {
            return;
        }
        rotationRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % rotatingCards.length);
        }, ROTATION_MS);
    }, [rotatingCards.length]);

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
        let rafId: number | null = null;
        let nextIndex = 0;

        const typeNext = () => {
            if (nextIndex >= typewriterTitleLength) {
                setTitleTypewriterDone(true);
                return;
            }

            const nextChar = typewriterTimingTitle[nextIndex] ?? '';
            nextIndex += 1;
            setTypedTitleCharsCount(nextIndex);

            timeoutId = setTimeout(
                typeNext,
                nextChar === '\n' ? TYPEWRITER_NEWLINE_PAUSE_MS : TYPEWRITER_INTERVAL_MS
            );
        };

        rafId = window.requestAnimationFrame(() => {
            setTypedTitleCharsCount(0);
            setTitleTypewriterDone(false);
            timeoutId = setTimeout(typeNext, TYPEWRITER_INTERVAL_MS);
        });

        return () => {
            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
            }
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
        };
    }, [typewriterTimingTitle, typewriterTitleLength]);

    const safeActiveIndex = rotatingCards.length > 0 ? activeIndex % rotatingCards.length : 0;
    const activeService = rotatingCards[safeActiveIndex] ?? rotatingCards[0];
    const hasHeroCardLayout = Boolean(heroCards?.length);
    const typedVisualTitle = visualTitle.slice(0, Math.min(typedTitleCharsCount, visualTitle.length));
    const typedDesktopVisualTitle = desktopVisualTitle.slice(0, Math.min(typedTitleCharsCount, desktopVisualTitle.length));
    const visualTitleLines = (typedVisualTitle || '\u00A0').split('\n');
    const desktopVisualTitleLines = (typedDesktopVisualTitle || '\u00A0').split('\n');

    const visibleCount = Math.min(4, rotatingCards.length);
    const visibleIndices = useMemo(() => {
        if (rotatingCards.length <= visibleCount) {
            return rotatingCards.map((_, index) => index);
        }
        const start = (safeActiveIndex - 1 + rotatingCards.length) % rotatingCards.length;
        return Array.from({ length: visibleCount }, (_, offset) => (start + offset) % rotatingCards.length);
    }, [rotatingCards, safeActiveIndex, visibleCount]);

    const handleSelectService = (index: number) => {
        setActiveIndex(index);
        restartRotation();
    };

    return (
        <DebugWrapper id={10100} label="L2 Direction Hero Section">
            <section
                className={`relative ${
                    hasHeroCardLayout
                        ? heroLongHubLayout
                            ? 'min-h-[980px] md:min-h-[940px] xl:min-h-[850px]'
                            : 'min-h-[900px] md:min-h-[850px] xl:min-h-[780px]'
                        : `h-[calc(100vh-80px)] ${heroLongHubLayout ? 'min-h-[930px] md:min-h-[720px]' : 'min-h-[620px] md:min-h-[680px]'}`
                } overflow-hidden bg-[#080808]`}
                id="top"
            >
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeService?.slug ?? hero.h1}
                            src={activeService?.image || hero.heroImage}
                            alt={activeService?.title || hero.h1}
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
                    <div
                        className={`h-full flex ${
                            hasHeroCardLayout
                                ? `items-start justify-start pt-[178px] pb-12 md:pt-[188px] xl:pt-[176px]`
                                : 'items-center justify-center pt-28 pb-16 md:pt-32'
                        }`}
                    >
                        <div className={hasHeroCardLayout ? 'w-full text-left' : 'w-full max-w-4xl text-center'}>
                            {!hasHeroCardLayout ? (
                                <DebugWrapper id={10101} label="Hero Eyebrow">
                                    <span className="text-[#D4A017] font-bold tracking-[0.28em] text-[10px] md:text-xs mb-3 block uppercase">
                                        {hero.eyebrow}
                                    </span>
                                </DebugWrapper>
                            ) : null}

                            <div className={hasHeroCardLayout ? 'grid items-start gap-10 xl:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.74fr)] xl:items-center xl:gap-16' : ''}>
                                <div
                                    className={`min-w-0 ${heroLongHubLayout ? 'w-full max-w-xs sm:max-w-sm md:max-w-[920px] xl:max-w-[760px]' : ''}`}
                                    style={!heroLongHubLayout && heroMobileCompact ? { maxWidth: 'min(920px, calc(100vw - 48px))' } : undefined}
                                >
                                    <DebugWrapper id={10110} label="Hero Title">
                                        <h1
                                            aria-label={visualTitle !== hero.h1 ? hero.h1 : undefined}
                                            className={
                                                hasHeroCardLayout
                                                    ? `mb-5 font-bold uppercase text-white ${
                                                          heroMobileCompact
                                                              ? `max-w-full whitespace-normal break-words text-[31px] leading-[0.98] [overflow-wrap:anywhere] ${
                                                                    heroLongHubLayout
                                                                        ? 'md:text-[42px] lg:text-[46px] xl:text-[52px]'
                                                                        : 'md:text-[48px] lg:text-[52px] xl:text-[58px]'
                                                                }`
                                                              : 'text-[44px] leading-[0.95] md:text-[68px] lg:text-[76px] xl:text-[86px]'
                                                      }`
                                                    : 'text-[40px] md:text-6xl lg:text-[80px] font-bold leading-[0.92] text-white mb-4'
                                            }
                                        >
                                            {heroDesktopDisplayTitle ? (
                                                <>
                                                    <span className="md:hidden">
                                                        {visualTitleLines.map((line, lineIndex) => (
                                                            <span
                                                                key={`mobile-title-line-${lineIndex}`}
                                                                className={`block ${
                                                                    heroDisplayAccentLine && line === heroDisplayAccentLine ? 'text-[#C9A84C]' : ''
                                                                }`}
                                                            >
                                                                {line}
                                                                {!titleTypewriterDone &&
                                                                    typedTitleCharsCount <= visualTitle.length &&
                                                                    lineIndex === visualTitleLines.length - 1 ? (
                                                                    <span className="ml-1 inline-block align-baseline text-[#C9A84C] animate-pulse">|</span>
                                                                ) : null}
                                                            </span>
                                                        ))}
                                                    </span>
                                                    <span className="hidden md:block">
                                                        {desktopVisualTitleLines.map((line, lineIndex) => (
                                                            <span
                                                                key={`desktop-title-line-${lineIndex}`}
                                                                className={`block ${
                                                                    heroDisplayAccentLine && line === heroDisplayAccentLine ? 'text-[#C9A84C]' : ''
                                                                }`}
                                                            >
                                                                {line}
                                                                {!titleTypewriterDone &&
                                                                    typedTitleCharsCount <= desktopVisualTitle.length &&
                                                                    lineIndex === desktopVisualTitleLines.length - 1 ? (
                                                                    <span className="ml-1 inline-block align-baseline text-[#C9A84C] animate-pulse">|</span>
                                                                ) : null}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </>
                                            ) : (
                                                visualTitleLines.map((line, lineIndex) => (
                                                    <span
                                                        key={`title-line-${lineIndex}`}
                                                        className={`block ${heroDisplayAccentLine && line === heroDisplayAccentLine ? 'text-[#C9A84C]' : ''}`}
                                                    >
                                                        {line}
                                                        {!titleTypewriterDone &&
                                                            typedTitleCharsCount <= visualTitle.length &&
                                                            lineIndex === visualTitleLines.length - 1 ? (
                                                            <span className="ml-1 inline-block align-baseline text-[#C9A84C] animate-pulse">|</span>
                                                        ) : null}
                                                    </span>
                                                ))
                                            )}
                                        </h1>
                                    </DebugWrapper>

                                    <DebugWrapper id={10102} label="Hero Subtitle">
                                        <p
                                            className={`text-white/88 ${
                                                hasHeroCardLayout
                                                    ? 'max-w-[620px] text-[16px] leading-[1.65] md:text-[18px]'
                                                    : 'text-base md:text-2xl leading-relaxed max-w-3xl mx-auto'
                                            }`}
                                        >
                                            {heroSubtitle}
                                        </p>
                                        {heroSupportingLine ? (
                                            <p className={`text-sm md:text-lg text-white/62 mt-2 ${hasHeroCardLayout ? 'max-w-xl lg:mx-0' : 'max-w-2xl mx-auto'}`}>
                                                {heroSupportingLine}
                                            </p>
                                        ) : null}
                                        {!hasCustomHeroCopy && activeService?.title ? (
                                            <p className="text-xs md:text-sm text-[#D4A017] mt-4 uppercase tracking-[0.14em]">
                                                В фокусе: {activeService.title}
                                            </p>
                                        ) : null}
                                    </DebugWrapper>

                                    {leadParagraphs?.length ? (
                                        <div className={`mt-5 space-y-3 ${hasHeroCardLayout ? 'max-w-xl text-left' : 'max-w-3xl mx-auto text-left'}`}>
                                            {leadParagraphs.map((paragraph, index) => (
                                                <p
                                                    key={paragraph}
                                                    className={`text-sm leading-relaxed text-white/74 md:text-[15px] ${
                                                        hasHeroCardLayout && index > 0 ? 'hidden md:block' : ''
                                                    }`}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}

                                    <div className={`flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-10 ${hasHeroCardLayout ? 'justify-start' : 'justify-center'}`}>
                                        <DebugWrapper id={10120} label="Hero Primary CTA">
                                            {(primaryCtaHref || activeService?.primaryCta?.href) ? (
                                                <Link
                                                    href={primaryCtaHref ?? activeService?.primaryCta?.href ?? '#services'}
                                                    className={`bg-[#D4A017] text-center text-black py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all ${
                                                        heroMobileCompact ? 'w-full px-5 md:w-auto md:px-9' : 'px-7 md:px-9'
                                                    }`}
                                                >
                                                    {primaryCtaLabel ?? activeService?.primaryCta?.label ?? hero.primaryCtaLabel ?? 'Открыть услугу'}
                                                </Link>
                                            ) : null}
                                        </DebugWrapper>
                                        <DebugWrapper id={10121} label="Hero Secondary CTA">
                                            <Link
                                                href={secondaryCtaHref ?? activeService?.secondaryCta?.href ?? hero.secondaryCtaHref ?? '#services'}
                                                className={`border border-white/25 text-center hover:border-[#D4A017] text-white py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest transition-all ${
                                                    heroMobileCompact ? 'w-full px-5 md:w-auto md:px-9' : 'px-7 md:px-9'
                                                }`}
                                            >
                                                {secondaryCtaLabel ?? activeService?.secondaryCta?.label ?? hero.secondaryCtaLabel ?? 'Подобрать услугу'}
                                            </Link>
                                        </DebugWrapper>
                                    </div>
                                </div>

                                {hasHeroCardLayout ? (
                                    <div className="hidden xl:flex justify-end">
                                        <div className="relative w-full max-w-[470px] overflow-hidden rounded-[10px] border border-white/15 bg-[#090806]/72 shadow-[0_28px_80px_rgba(0,0,0,0.44)] backdrop-blur-xl">
                                            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4A017] to-transparent" />
                                            <div className="relative border-b border-white/10 px-6 pb-6 pt-6">
                                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,160,23,0.15),transparent_38%,rgba(255,255,255,0.06)_100%)]" />
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeService?.slug}
                                                        initial={{ opacity: 0, y: 12 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.38, ease: 'easeOut' }}
                                                        className="relative pt-7"
                                                    >
                                                        <span className="absolute right-0 top-0 tabular-nums text-[12px] font-semibold text-white/62">
                                                            {String(safeActiveIndex + 1).padStart(2, '0')}/{String(rotatingCards.length).padStart(2, '0')}
                                                        </span>
                                                        <p className="max-w-[14ch] text-[42px] font-bold leading-[0.96] text-white">
                                                            {activeService?.title}
                                                        </p>
                                                        <p className="mt-5 max-w-[36rem] text-[16px] leading-[1.65] text-white/[0.84]">
                                                            {activeService?.shortText}
                                                        </p>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            <div className="px-4 pb-4 pt-4">
                                                <div className="grid gap-2 sm:grid-cols-2">
                                                    {activeService?.primaryCta ? (
                                                        <Link
                                                            href={activeService.primaryCta.href}
                                                            className="group flex items-center justify-between rounded-[8px] border border-[#D4A017] bg-[#D4A017] px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition-all hover:bg-white hover:border-white"
                                                        >
                                                            <span>{activeService.primaryCta.label}</span>
                                                        </Link>
                                                    ) : null}
                                                    <Link
                                                        href={activeService?.secondaryCta.href ?? '#contact'}
                                                        onClick={(e) => {
                                                            const href = activeService?.secondaryCta.href ?? '#contact';
                                                            if (href === '#contact' || href.startsWith('#contact')) {
                                                                e.preventDefault();
                                                                selectAndScrollToContact(activeService?.title);
                                                            }
                                                        }}
                                                        className={`flex items-center justify-center rounded-[8px] border border-white/12 px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-white/28 hover:bg-white/[0.06] ${
                                                            activeService?.primaryCta ? '' : 'sm:col-span-2'
                                                        }`}
                                                    >
                                                        {activeService?.secondaryCta.label ?? 'Обсудить задачу'}
                                                    </Link>
                                                </div>

                                                <div className="mt-3 grid gap-2" role="tablist" aria-label="Направления 360° туров">
                                                    {visibleIndices.map((serviceIndex) => {
                                                        const item = rotatingCards[serviceIndex];
                                                        const isActive = serviceIndex === safeActiveIndex;
                                                        const itemNumber = String(serviceIndex + 1).padStart(2, '0');
                                                        return (
                                                            <button
                                                                key={item.slug}
                                                                type="button"
                                                                onClick={() => handleSelectService(serviceIndex)}
                                                                role="tab"
                                                                aria-selected={isActive}
                                                                className={`group grid w-full grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[8px] border px-3 py-3 text-left transition-all ${
                                                                    isActive
                                                                        ? 'border-[#D4A017]/68 bg-[#D4A017]/15'
                                                                        : 'border-white/10 bg-white/[0.035] hover:border-white/24 hover:bg-white/[0.07]'
                                                                }`}
                                                            >
                                                                <span className={`tabular-nums text-[11px] font-semibold ${isActive ? 'text-[#D4A017]' : 'text-white/38'}`}>
                                                                    {itemNumber}
                                                                </span>
                                                                <span className={`text-[13px] font-semibold leading-tight ${isActive ? 'text-white' : 'text-white/70'}`}>
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
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                {!hasHeroCardLayout ? (
                    <DebugWrapper id={10180} label="Compact Service Navigator">
                        <div className="hidden lg:flex absolute left-[max(24px,calc(50%-560px))] bottom-12 w-52 flex-col gap-1.5 rounded-xl border border-white/12 bg-black/40 backdrop-blur-md p-2.5 z-20">
                            {visibleIndices.map((serviceIndex) => {
                                const service = rotatingCards[serviceIndex];
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
                ) : null}

                <div className="lg:hidden absolute left-4 right-4 bottom-8 z-20">
                    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {rotatingCards.map((service, index) => {
                            const isActive = index === safeActiveIndex;
                            return (
                                <button
                                    key={`${service.slug}-mobile`}
                                    type="button"
                                    onClick={() => handleSelectService(index)}
                                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                                        isActive
                                            ? 'border-[#D4A017] bg-[#D4A017]/15 text-[#F6DB8A]'
                                            : 'border-white/20 text-white/70'
                                    }`}
                                >
                                    {service.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionSocialProofProps = {
    stats?: L2StatItem[];
    cards?: L2StatCard[];
    heading?: string;
    tagline?: string;
};

export const L2DirectionSocialProof = ({ stats = [], cards = [], heading, tagline }: L2DirectionSocialProofProps) => {
    if (!stats.length && !cards.length) {
        return null;
    }

    if (cards.length) {
        return (
            <DebugWrapper id={10200} label="L2 Direction Social Proof Section">
                <StatsEvidenceStrip
                    heading={heading ?? ''}
                    items={cards.map((card) => ({
                        value: card.value,
                        label: card.label,
                        description: card.description,
                        sourceLabel: card.sourceLabel,
                        sourceUrl: card.sourceUrl,
                    }))}
                    note={tagline}
                    className="border-y border-[#2a2a2a] bg-[#0a0a0a] py-8 md:py-14"
                />
            </DebugWrapper>
        );
    }

    return (
        <DebugWrapper id={10200} label="L2 Direction Social Proof Section">
            <section className="py-20 border-y border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    {heading ? (
                        <div className="max-w-3xl mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
                            {tagline ? <p className="mt-4 text-sm md:text-base leading-relaxed text-white/68">{tagline}</p> : null}
                        </div>
                    ) : null}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <DebugWrapper key={idx} id={10210 + idx} label={`Stat Item: ${stat.label}`}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionMarqueeProps = {
    items?: Array<string | { text: string; link: string }>;
};

export const L2DirectionMarquee = ({ items }: L2DirectionMarqueeProps) => {
    return (
        <DebugWrapper id={10185} label="L2 Direction Marquee Section">
            <MarqueeSection items={items} />
        </DebugWrapper>
    );
};

type L2DirectionMobileServicesListProps = {
    services: L2ServiceItem[];
    lang?: 'ru' | 'en';
};

export const L2DirectionMobileServicesList = ({ services, lang = 'ru' }: L2DirectionMobileServicesListProps) => {
    const sortedServices = [...services].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));
    const hasOddCount = sortedServices.length % 2 === 1;
    const copy =
        lang === 'en'
            ? {
                  ariaLabel: 'Directions and formats',
                  heading: 'Directions',
                  cardsAriaLabel: 'Go to service cards',
                  cardsLabel: 'view cards',
              }
            : {
                  ariaLabel: 'Направления и форматы',
                  heading: 'Направления',
                  cardsAriaLabel: 'Перейти к карточкам услуг',
                  cardsLabel: 'смотреть карточки',
              };

    if (!sortedServices.length) {
        return null;
    }

    return (
        <DebugWrapper id={10186} label="L2 Mobile Services List">
            <section
                id="directions"
                aria-label={copy.ariaLabel}
                className="block scroll-mt-20 border-t border-[#C9A84C]/10 bg-[#0d0d0d] px-4 py-4 md:hidden"
            >
                <h2 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">
                    {copy.heading}
                </h2>
                <div className="grid grid-cols-2 gap-1.5">
                    {sortedServices.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`#service-${service.slug}`}
                            className={`flex min-h-10 items-center gap-1.5 rounded-[8px] border border-[#C9A84C]/15 bg-gradient-to-b from-[#171717] to-[#121212] px-2.5 py-1.5 text-[12px] leading-snug text-white/80 transition-colors hover:border-[#C9A84C]/35 hover:text-[#C9A84C] ${
                                hasOddCount && index === sortedServices.length - 1 ? 'col-span-2 justify-start' : ''
                            }`}
                        >
                            <ChevronRight size={10} className="shrink-0 text-[#C9A84C] opacity-50" />
                            <span>{service.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="mt-4 flex flex-col items-center gap-2 text-center">
                    <a
                        href="#services"
                        className="mt-1 flex flex-col items-center gap-1 text-[#C9A84C] transition-opacity"
                        aria-label={copy.cardsAriaLabel}
                    >
                        <ChevronDown className="h-5 w-5 animate-bounce" />
                        <span className="text-[11px] uppercase tracking-wider opacity-70">{copy.cardsLabel}</span>
                    </a>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionWhatIsTourProps = {
    content: L2WhatIsTourConfig;
};

export const L2DirectionWhatIsTour = ({ content }: L2DirectionWhatIsTourProps) => {
    return (
        <DebugWrapper id={10190} label="L2 Direction What Is Tour Section">
            <section className="bg-[#080808] py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{content.heading}</h2>
                        <div className="space-y-5">
                            {content.paragraphs.map((paragraph, index) => (
                                <p key={`${index}-${paragraph.slice(0, 24)}`} className="text-sm md:text-base leading-relaxed text-white/74">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionSignalStripProps = {
    items: L2SignalStripItem[];
};

export const L2DirectionSignalStrip = ({ items }: L2DirectionSignalStripProps) => {
    return (
        <DebugWrapper id={10250} label="L2 Direction Signal Strip Section">
            <section className="py-14 md:py-16 border-y border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {items.map((item, idx) => (
                            <DebugWrapper key={item.title} id={10260 + idx} label={`Signal Strip Item: ${item.title}`}>
                                <article className="h-full rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/68">{item.text}</p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionServicesProps = {
    heading: string;
    subtitle?: string;
    services: L2ServiceItem[];
    layoutPreset?: L2CardsLayoutPreset;
};

export const L2DirectionServices = ({ heading, subtitle, services, layoutPreset = 'soft' }: L2DirectionServicesProps) => {
    const sortedServices = [...services].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));
    const isAggressive = layoutPreset === 'aggressive';

    return (
        <DebugWrapper id={10300} label="L2 Direction Services Section">
            <section className={`bg-[#080808] ${isAggressive ? 'py-16 md:py-20' : 'py-20 md:py-24'}`} id="services">
                <style jsx>{`
                    .service-card-target:target {
                        border-color: rgba(212, 160, 23, 0.9) !important;
                        box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.4), 0 0 28px rgba(212, 160, 23, 0.22);
                    }
                `}</style>
                <div className={`${isAggressive ? 'max-w-[1560px]' : 'max-w-[1380px]'} mx-auto px-4 md:px-6`}>
                    <DebugWrapper id={10301} label="Services Header">
                        <div className={isAggressive ? 'mb-10 md:mb-12' : 'mb-14 md:mb-16'}>
                            <h2 className="text-3xl font-bold mb-4 text-white">{heading}</h2>
                            <div className="w-12 h-1 bg-[#D4A017]" />
                            {subtitle ? <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/68">{subtitle}</p> : null}
                        </div>
                    </DebugWrapper>
                    <div
                        className={
                            sortedServices.length < 4
                                ? 'flex flex-wrap justify-center gap-6'
                                : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${isAggressive ? 'gap-6' : 'gap-5'}`
                        }
                    >
                        {sortedServices.map((service, idx) => (
                            <div key={service.slug} className={sortedServices.length < 4 ? "w-full md:w-[320px] lg:w-[350px]" : ""}>
                                <DebugWrapper id={10310 + idx} label={`Service Card: ${service.title}`}>
                                    <article
                                        id={`service-${service.slug}`}
                                        className={`service-card-target h-full scroll-mt-32 bg-[#141414] border border-[#2a2a2a] rounded-[12px] overflow-hidden group hover:border-[#D4A017] transition-all flex flex-col ${service.featured ? 'gold-glow border-[#D4A017]/50' : ''}`}
                                        style={service.featured ? { boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)' } : {}}
                                    >
                                    <div className={`${isAggressive ? 'h-52 md:h-56' : 'h-44 md:h-48'} bg-neutral-800 overflow-hidden relative`}>
                                        {service.primaryHref ? (
                                            <Link href={service.primaryHref} className="block h-full">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                                    style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                                                />
                                            </Link>
                                        ) : (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                                style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                                            />
                                        )}
                                        {service.tag && (
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold ${service.tag === 'HOT' ? 'bg-[#D4A017] text-black' : 'bg-black/50 text-white backdrop-blur'}`}>
                                                    {service.tag}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-5 pt-5 pb-4 flex-grow flex flex-col">
                                        <h3 className={`text-lg font-bold mb-1 ${service.featured ? 'text-[#D4A017]' : 'text-white'}`}>
                                            {service.primaryHref ? (
                                                <Link href={service.primaryHref} className="hover:text-[#D4A017] transition-colors">
                                                    {service.title}
                                                </Link>
                                            ) : (
                                                service.title
                                            )}
                                        </h3>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                                            {service.category}
                                        </div>
                                        <p className="text-gray-400 text-sm mb-3 leading-snug">{service.description}</p>
                                        <div className="mt-auto">
                                            <div className="pt-3 border-t border-[#2a2a2a] text-[10px] text-[#D4A017] font-bold uppercase tracking-wider mb-4">
                                                {service.price}
                                            </div>
                                            <div className="flex gap-3">
                                                {service.primaryHref ? (
                                                    <Link
                                                        href={service.primaryHref}
                                                        className="flex-1 py-2 px-2 bg-[#D4A017] text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center"
                                                    >
                                                        {service.primaryCtaLabel ?? 'Открыть услугу'}
                                                    </Link>
                                                ) : null}
                                                <a
                                                    href={service.secondaryHref ?? '#contact'}
                                                    onClick={(e) => {
                                                        const href = service.secondaryHref ?? '#contact';
                                                        if (href === '#contact' || href.startsWith('#contact')) {
                                                            e.preventDefault();
                                                            selectAndScrollToContact(service.title);
                                                        }
                                                    }}
                                                    className={`py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center ${
                                                        service.primaryHref ? 'flex-1' : 'w-full'
                                                    }`}
                                                >
                                                    {service.secondaryCtaLabel ?? 'Обсудить задачу'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </DebugWrapper>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionProcessProps = {
    heading?: string;
    steps: L2ProcessStep[];
};

export const L2DirectionProcess = ({ heading = 'Как проходит работа', steps }: L2DirectionProcessProps) => {
    return (
        <DebugWrapper id={10500} label="L2 Direction Process Section">
            <section className="py-24 bg-[#0D0D0D]" id="process">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${steps.length >= 5 ? 'xl:grid-cols-5' : 'lg:grid-cols-4'} gap-12 lg:gap-8`}>
                        {steps.map((step, idx) => (
                            <DebugWrapper key={idx} id={10510 + idx} label={`Process Step ${idx + 1}: ${step.title}`}>
                                <div className="relative group">
                                    <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4 select-none group-hover:text-[#D4A017]/10 transition-colors">
                                        {step.number}
                                    </div>
                                    <h4 className="text-[#D4A017] font-bold mb-3 relative tracking-widest">{step.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                                </div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionConditionsNoteProps = {
    content: L2ConditionsNoteConfig;
};

export const L2DirectionConditionsNote = ({ content }: L2DirectionConditionsNoteProps) => {
    return (
        <DebugWrapper id={10550} label="L2 Direction Conditions Note">
            <section className="bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-white/90 md:text-base">
                            {content.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/65 md:text-[15px]">
                            {content.text}
                        </p>
                        {content.items?.length ? (
                            <ul className="mt-5 grid gap-3 text-[13px] leading-relaxed text-white/56 md:grid-cols-2 md:text-sm">
                                {content.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                        {content.details ? (
                            <p className="mt-4 text-[11px] leading-relaxed text-white/35">
                                {content.details}
                            </p>
                        ) : null}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionMapProps = {
    map: L2MapConfig;
};

export const L2DirectionMap = ({ map }: L2DirectionMapProps) => {
    return (
        <DebugWrapper id={10600} label="L2 Direction Map Section">
            <section className="py-24 bg-[#080808] overflow-hidden" id="map">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <DebugWrapper id={10601} label="Map Header">
                            <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">{map.title}</h2>
                        </DebugWrapper>
                        <DebugWrapper id={10602} label="Map Description">
                            <p className="text-gray-400 mb-8 leading-relaxed">{map.description}</p>
                        </DebugWrapper>
                        <div className="space-y-4">
                            {map.zones.map((zone, idx) => (
                                <DebugWrapper key={idx} id={10610 + idx} label={`Zone Item: ${zone.title}`}>
                                    <div
                                        className={`flex items-start p-4 bg-[#141414] border-l-4 ${zone.borderColor} rounded-r-lg transition-transform hover:translate-x-1`}
                                    >
                                        <div
                                            className={`flex-shrink-0 w-3 h-3 rounded-full ${zone.color} mt-1.5 mr-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                                        ></div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase text-white tracking-wider">{zone.title}</h4>
                                            <p className="text-xs text-gray-500 mt-0.5">{zone.description}</p>
                                        </div>
                                    </div>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                    <div className="relative bg-neutral-900 rounded-[12px] border border-[#2a2a2a] h-[450px] overflow-hidden group">
                        <DebugWrapper id={10690} label="Interactive Map Placeholder">
                            <img
                                src={map.image}
                                alt={map.imageAlt}
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-40 h-40 bg-red-500/10 border border-red-500/40 rounded-full animate-pulse shadow-[0_0_50px_rgba(239,68,68,0.2)]"></div>
                                <div className="absolute w-24 h-24 bg-yellow-500/10 border border-yellow-500/30 rounded-full animate-pulse delay-700"></div>
                            </div>
                        </DebugWrapper>

                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-gray-400 font-bold uppercase">
                            {map.badgeText}
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionPricingProps = {
    heading: string;
    tagline?: string;
    plans: L2PricingPlan[];
    lang?: 'ru' | 'en';
};

export const L2DirectionPricing = ({ heading, tagline, plans, lang = 'ru' }: L2DirectionPricingProps) => {
    const pricingGridClass = plans.length >= 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3';

    return (
        <DebugWrapper id={10700} label="L2 Direction Pricing Section">
            <section className="py-24 bg-[#0D0D0D] scroll-mt-[120px]" id="pricing">
                <div className="container mx-auto px-6 text-center mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="text-3xl font-bold mb-4 text-white">{heading}</h2>
                    </DebugWrapper>
                    {tagline ? (
                        <DebugWrapper id={10702} label="Pricing Tagline">
                            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">{tagline}</p>
                        </DebugWrapper>
                    ) : null}
                </div>
                <div className={`container mx-auto px-6 grid ${pricingGridClass} gap-8 items-start`}>
                    {plans.map((plan, idx) => (
                        <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                            <div
                                className={`bg-[#141414] border p-8 rounded-[12px] relative flex flex-col h-full transition-all ${
                                    plan.featured
                                        ? 'border-[#D4A017] border-2 scale-105 shadow-[0_20px_40px_-15px_rgba(212,160,23,0.15)] shadow-[#D4A017]/10'
                                        : 'border-[#2a2a2a]'
                                }`}
                            >
                                {plan.tag && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A017] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                        {plan.tag}
                                    </div>
                                )}
                                <h3 className="font-bold text-xl mb-2 text-white">{plan.title}</h3>
                                {plan.subtitle ? <p className="text-sm text-white/70 mb-3 leading-relaxed">{plan.subtitle}</p> : null}
                                {plan.price ? (
                                    <div className="text-4xl font-bold text-[#D4A017] mb-6">
                                        {plan.price}
                                        {plan.period && <span className="text-sm text-gray-500 ml-1">{plan.period}</span>}
                                    </div>
                                ) : null}
                                {plan.audience ? (
                                    <p className="text-left text-sm text-white/62 leading-relaxed mb-6">
                                        <span className="text-white/90 font-semibold">{lang === 'en' ? 'For whom:' : 'Для кого:'}</span> {plan.audience}
                                    </p>
                                ) : null}
                                <ul className={`text-left text-sm text-gray-400 space-y-4 flex-grow ${plan.note ? 'mb-5' : 'mb-10'}`}>
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3">
                                            <span className="text-[#D4A017]">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {plan.note ? (
                                    <p className="mb-8 text-left text-sm leading-relaxed text-white/58">{plan.note}</p>
                                ) : null}
                                <a
                                    href={plan.buttonHref ?? '#contact'}
                                    onClick={() => {
                                        if (typeof window !== 'undefined' && plan.title) {
                                            window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle: plan.title } }));
                                            try { sessionStorage.setItem('breus_contact_prefill_service', plan.title); } catch {}
                                        }
                                    }}
                                    className={`w-full py-4 rounded-[12px] font-bold transition-all uppercase text-[10px] tracking-widest text-center ${
                                        plan.featured || plan.popular
                                            ? 'bg-[#D4A017] text-black hover:bg-white'
                                            : 'border border-white/20 text-white hover:bg-white hover:text-black'
                                    }`}
                                >
                                    {plan.buttonText || (lang === 'en' ? 'Discuss This Tier →' : 'Обсудить этот формат →')}
                                </a>
                            </div>
                        </DebugWrapper>
                    ))}
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionPricingAddOnsProps = {
    content: L2PricingAddOnsConfig;
};

export const L2DirectionPricingAddOns = ({ content }: L2DirectionPricingAddOnsProps) => {
    return (
        <DebugWrapper id={10740} label="L2 Direction Pricing Addons Section">
            <section className="bg-[#0D0D0D] pb-20">
                <div className="container mx-auto px-6">
                    <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-5">{content.heading}</h3>
                        <ul className="space-y-3 text-sm md:text-base text-white/72 leading-relaxed">
                            {content.items.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        {content.note ? <p className="mt-5 text-sm text-[#D4A017]">{content.note}</p> : null}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionPainProofProps = {
    title: string;
    supportingLine: string;
    cards: L2PainCard[];
};

export const L2DirectionPainProof = ({ title, supportingLine, cards }: L2DirectionPainProofProps) => {
    return (
        <DebugWrapper id={10750} label="L2 Direction Pain Proof Section">
            <section className="py-20 bg-[#0D0D0D] border-y border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-8">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4A017] font-bold mb-3">Боль и решение</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">{supportingLine}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {cards.map((card, idx) => (
                            <DebugWrapper key={card.title} id={10760 + idx} label={`Pain Card: ${card.title}`}>
                                <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-sm md:text-base font-bold text-white mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{card.text}</p>
                                    <p className="text-xs md:text-sm text-[#D4A017] leading-relaxed font-semibold">
                                        {card.resolution}
                                    </p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionPainSolutionsProps = {
    heading: string;
    subtitle?: string;
    items: L2PainSolutionItem[];
};

export const L2DirectionPainSolutions = ({ heading, subtitle, items }: L2DirectionPainSolutionsProps) => {
    return (
        <DebugWrapper id={10780} label="L2 Direction Pain Solutions Section">
            <section className="py-20 bg-[#0D0D0D] border-y border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
                        {subtitle ? <p className="mt-4 text-sm md:text-base leading-relaxed text-white/68">{subtitle}</p> : null}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {items.map((item, idx) => (
                            <DebugWrapper key={item.pain} id={10790 + idx} label={`Pain Solution Item: ${item.pain}`}>
                                <article className="h-full rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-base font-bold text-white mb-3">{item.pain}</h3>
                                    <p className="text-sm leading-relaxed text-white/70">{item.solution}</p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionMidCtaProps = {
    content: L2MidCtaConfig;
};

export const L2DirectionMidCta = ({ content }: L2DirectionMidCtaProps) => {
    return (
        <DebugWrapper id={10820} label="L2 Direction Mid CTA Section">
            <section className="bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        {content.heading ? <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{content.heading}</h2> : null}
                        <p className="text-lg leading-relaxed text-white/78">{content.text}</p>
                        <a
                            href={content.buttonHref}
                            className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            {content.buttonText}
                        </a>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionDeliverablesProps = {
    content: L2DeliverablesConfig;
};

export const L2DirectionDeliverables = ({ content }: L2DirectionDeliverablesProps) => {
    return (
        <DebugWrapper id={10830} label="L2 Direction Deliverables Section">
            <section className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.heading}</h2>
                        {content.intro ? <p className="text-sm md:text-base leading-relaxed text-white/68 mb-8">{content.intro}</p> : null}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {content.items.map((item, idx) => (
                            <DebugWrapper key={item} id={10831 + idx} label={`Deliverable Item ${idx + 1}`}>
                                <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/72">
                                    {item}
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionEarnLoseProps = {
    content: L2EarnLoseConfig;
};

export const L2DirectionEarnLose = ({ content }: L2DirectionEarnLoseProps) => {
    return (
        <DebugWrapper id={10840} label="L2 Direction Earn Lose Section">
            <section className="bg-[#0D0D0D] py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-10 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">{content.heading}</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {[
                            { title: content.earnTitle, items: content.earnItems },
                            { title: content.loseTitle, items: content.loseItems },
                        ].map((column) => (
                            <article key={column.title} className="h-full rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-7">
                                <h3 className="mb-5 text-lg font-bold text-[#D4A017]">{column.title}</h3>
                                <ul className="space-y-4 text-sm leading-relaxed text-white/72">
                                    {column.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A017]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionWhyUsProps = {
    content: L2WhyUsConfig;
};

export const L2DirectionWhyUs = ({ content }: L2DirectionWhyUsProps) => {
    return (
        <DebugWrapper id={10860} label="L2 Direction Why Us Section">
            <section className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{content.heading}</h2>
                        {content.subtitle ? <p className="mt-4 text-sm md:text-base leading-relaxed text-white/68">{content.subtitle}</p> : null}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {content.items.map((item, idx) => (
                            <DebugWrapper key={item.title} id={10861 + idx} label={`Why Us Item: ${item.title}`}>
                                <article className="h-full rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionShortQaProps = {
    content: L2ShortQaConfig;
};

export const L2DirectionShortQa = ({ content }: L2DirectionShortQaProps) => {
    return (
        <DebugWrapper id={10870} label="L2 Direction Short QA Section">
            <section className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{content.heading}</h2>
                    </div>
                    <div className="space-y-4">
                        {content.items.map((item, idx) => (
                            <DebugWrapper key={item.question} id={10871 + idx} label={`Short QA Item: ${item.question}`}>
                                <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-base font-bold text-white mb-3">{item.question}</h3>
                                    <p className="text-sm leading-relaxed text-white/70">{item.answer}</p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionFaqProps = {
    heading: string;
    items: L2FaqItem[];
};

export const L2DirectionFaq = ({ heading, items }: L2DirectionFaqProps) => {
    return (
        <DebugWrapper id={10800} label="L2 Direction FAQ Section">
            <section className="py-24 bg-[#0D0D0D]" id="faq">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <DebugWrapper id={10801} label="FAQ Header">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">{heading}</h2>
                        </DebugWrapper>
                        <div className="w-12 h-1 bg-[#D4A017] mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <DebugWrapper key={index} id={10810 + index} label={`FAQ Item ${index + 1}`}>
                                <details className="group bg-[#141414] border border-[#2a2a2a] rounded-[12px] p-6 cursor-pointer hover:border-[#D4A017]/50 transition-all duration-300 backdrop-blur-sm">
                                    <summary className="list-none flex justify-between items-center font-bold text-sm uppercase tracking-widest text-white/90 group-open:text-[#D4A017] transition-colors">
                                        {item.question}
                                        <span className="group-open:rotate-180 transition-transform duration-300 text-[#D4A017] text-xl">
                                            ↓
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
                                    </p>
                                </details>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionContactProps = {
    contact: L2ContactConfig;
    useDroneContact?: boolean;
    lang?: 'ru' | 'en';
};

export const L2DirectionContact = ({ contact, useDroneContact = false, lang = 'ru' }: L2DirectionContactProps) => {
    const [method, setMethod] = useState<'Telegram' | 'WhatsApp' | 'Email'>('Telegram');
    const [services, setServices] = useState<string[]>([]);

    if (useDroneContact) {
        return (
            <DroneContactStitch
                lang={lang}
                heading={contact.title}
                description={contact.description}
                messagePlaceholder={contact.taskPlaceholder}
                serviceOptions={contact.serviceOptions}
                whatsappHref={contact.whatsappHref}
                preselectedServices={contact.preselectedServices}
            />
        );
    }

    const toggleService = (service: string) => {
        setServices((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]));
    };

    const contactPlaceholder = method === 'Email' ? 'hello@example.com' : method === 'WhatsApp' ? '+995 ...' : '@username';

    return (
        <DebugWrapper id={10900} label="L2 Direction Contact Section">
            <section className="py-16 md:py-20 bg-[#080808]" id="contact">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] border border-[#D4A017]/30 rounded-2xl p-6 md:p-8 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.14),transparent_55%)] pointer-events-none" />
                        <DebugWrapper id={10901} label="Contact Header">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">{contact.title}</h2>
                        </DebugWrapper>
                        <DebugWrapper id={10902} label="Contact Description">
                            <p className="text-white/70 mb-6 max-w-2xl leading-relaxed text-sm md:text-base">
                                {contact.description}
                            </p>
                        </DebugWrapper>

                        <form id="contact-form" className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                        Ваше имя *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Иван Иванов"
                                        className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                        Способ связи *
                                    </label>
                                    <div className="flex gap-3">
                                        {(['Telegram', 'WhatsApp', 'Email'] as const).map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setMethod(option)}
                                                className={`pb-1.5 border-b-2 text-sm transition-colors ${
                                                    method === option
                                                        ? 'border-[#D4A017] text-white'
                                                        : 'border-transparent text-white/45 hover:text-white/80'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type={method === 'Email' ? 'email' : 'text'}
                                        required
                                        placeholder={contactPlaceholder}
                                        className="w-full bg-transparent border-b border-white/25 pb-2.5 mt-3 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2.5">
                                    Интересующие услуги
                                </label>
                                <div className="flex flex-wrap gap-2.5">
                                    {contact.serviceOptions.map((service) => {
                                        const isActive = services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition-colors ${
                                                    isActive
                                                        ? 'bg-[#D4A017] border-[#D4A017] text-black font-semibold'
                                                        : 'border-white/20 text-white/70 hover:border-white/45 hover:text-white'
                                                }`}
                                            >
                                                {service}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                    Коротко о задаче
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder={contact.taskPlaceholder}
                                    className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <DebugWrapper id={10910} label="Contact Primary CTA">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-[#D4A017] text-black py-3.5 px-6 rounded-xl font-bold uppercase tracking-[0.12em] text-xs md:text-sm hover:brightness-105 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Отправить
                                    </button>
                                </DebugWrapper>
                                <DebugWrapper id={10911} label="Contact WhatsApp CTA">
                                    <a
                                        href={contact.whatsappHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 border border-white/20 text-white py-3.5 px-6 rounded-xl font-semibold uppercase tracking-[0.12em] text-xs md:text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                </DebugWrapper>
                            </div>

                            <p className="text-[11px] text-white/45">
                                Нажимая кнопку, вы соглашаетесь на обработку контактов для обратной связи.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
