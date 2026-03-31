'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import type {
    L2ContactConfig,
    L2FaqItem,
    L2MapConfig,
    L2PainCard,
    L2PricingPlan,
    L2ProcessStep,
    L2ServiceItem,
    L2StatItem,
} from '@/components/l2-direction/types';
import type { DroneDirectionHeroConfig } from '@/constants/droneDirectionPages';

const ROTATION_MS = 5000;

type L2DirectionHeroProps = {
    hero: DroneDirectionHeroConfig;
    heroSubtitle: string;
    heroSupportingLine: string;
    services: L2ServiceItem[];
};

export const L2DirectionHero = ({ hero, heroSubtitle, heroSupportingLine, services }: L2DirectionHeroProps) => {
    const heroServices = useMemo(() => [...services].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id)), [services]);

    const [activeIndex, setActiveIndex] = useState(0);
    const rotationRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        const rafId = window.requestAnimationFrame(() => {
            setActiveIndex(0);
        });
        return () => {
            window.cancelAnimationFrame(rafId);
        };
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

    const safeActiveIndex = heroServices.length > 0 ? activeIndex % heroServices.length : 0;
    const activeService = heroServices[safeActiveIndex] ?? heroServices[0];

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

    return (
        <DebugWrapper id={10100} label="L2 Direction Hero Section">
            <section className="relative h-[calc(100vh-80px)] min-h-[620px] md:min-h-[680px] overflow-hidden bg-[#080808]" id="top">
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
                    <div className="h-full flex items-center justify-center pt-28 md:pt-32 pb-16">
                        <div className="w-full max-w-4xl text-center">
                            <DebugWrapper id={10101} label="Hero Eyebrow">
                                <span className="text-[#D4A017] font-bold tracking-[0.28em] text-[10px] md:text-xs mb-3 block uppercase">
                                    {hero.eyebrow}
                                </span>
                            </DebugWrapper>

                            <DebugWrapper id={10110} label="Hero Title">
                                <h1 className="text-[40px] md:text-6xl lg:text-[80px] font-bold leading-[0.92] text-white mb-4">
                                    {hero.h1}
                                </h1>
                            </DebugWrapper>

                            <DebugWrapper id={10102} label="Hero Subtitle">
                                <p className="text-base md:text-2xl text-white/88 max-w-3xl mx-auto leading-relaxed">
                                    {heroSubtitle}
                                </p>
                                <p className="text-sm md:text-lg text-white/62 mt-2 max-w-2xl mx-auto">
                                    {heroSupportingLine}
                                </p>
                                {activeService?.title && (
                                    <p className="text-xs md:text-sm text-[#D4A017] mt-4 uppercase tracking-[0.14em]">
                                        В фокусе: {activeService.title}
                                    </p>
                                )}
                            </DebugWrapper>

                            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-10">
                                <DebugWrapper id={10120} label="Hero Primary CTA">
                                    {activeService?.primaryHref ? (
                                        <Link
                                            href={activeService.primaryHref}
                                            className="bg-[#D4A017] text-black px-7 md:px-9 py-3.5 rounded-[12px] font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all"
                                        >
                                            {activeService.primaryCtaLabel ?? 'Открыть услугу'}
                                        </Link>
                                    ) : null}
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

                <div className="lg:hidden absolute left-4 right-4 bottom-8 z-20">
                    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {heroServices.map((service, index) => {
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
    stats: L2StatItem[];
};

export const L2DirectionSocialProof = ({ stats }: L2DirectionSocialProofProps) => {
    return (
        <DebugWrapper id={10200} label="L2 Direction Social Proof Section">
            <section className="py-20 border-y border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
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

type L2DirectionServicesProps = {
    heading: string;
    services: L2ServiceItem[];
};

export const L2DirectionServices = ({ heading, services }: L2DirectionServicesProps) => {
    const sortedServices = [...services].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

    return (
        <DebugWrapper id={10300} label="L2 Direction Services Section">
            <section className="py-24 bg-[#080808]" id="services">
                <style jsx>{`
                    .service-card-target:target {
                        border-color: rgba(212, 160, 23, 0.9) !important;
                        box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.4), 0 0 28px rgba(212, 160, 23, 0.22);
                    }
                `}</style>
                <div className="container mx-auto px-6">
                    <DebugWrapper id={10301} label="Services Header">
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-white">{heading}</h2>
                            <div className="w-12 h-1 bg-[#D4A017]" />
                        </div>
                    </DebugWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {sortedServices.map((service, idx) => (
                            <DebugWrapper key={service.slug} id={10310 + idx} label={`Service Card: ${service.title}`}>
                                <article
                                    id={`service-${service.slug}`}
                                    className={`service-card-target scroll-mt-32 bg-[#141414] border border-[#2a2a2a] rounded-[12px] overflow-hidden group hover:border-[#D4A017] transition-all flex flex-col ${service.featured ? 'gold-glow border-[#D4A017]/50' : ''}`}
                                    style={service.featured ? { boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)' } : {}}
                                >
                                    <div className="h-40 bg-neutral-800 overflow-hidden relative">
                                        {service.primaryHref ? (
                                            <Link href={service.primaryHref} className="block h-full">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                                />
                                            </Link>
                                        ) : (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
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
                                                    href="#contact"
                                                    className={`py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center ${
                                                        service.primaryHref ? 'flex-1' : 'w-full'
                                                    }`}
                                                >
                                                    Подобрать пакет
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};

type L2DirectionProcessProps = {
    steps: L2ProcessStep[];
};

export const L2DirectionProcess = ({ steps }: L2DirectionProcessProps) => {
    return (
        <DebugWrapper id={10500} label="L2 Direction Process Section">
            <section className="py-24 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
    tagline: string;
    plans: L2PricingPlan[];
};

export const L2DirectionPricing = ({ heading, tagline, plans }: L2DirectionPricingProps) => {
    return (
        <DebugWrapper id={10700} label="L2 Direction Pricing Section">
            <section className="py-24 bg-[#0D0D0D]" id="pricing">
                <div className="container mx-auto px-6 text-center mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="text-3xl font-bold mb-4 text-white">{heading}</h2>
                    </DebugWrapper>
                    <DebugWrapper id={10702} label="Pricing Tagline">
                        <p className="text-gray-500 uppercase tracking-widest text-xs">{tagline}</p>
                    </DebugWrapper>
                </div>
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
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
                                <div className="text-4xl font-bold text-[#D4A017] mb-6">
                                    {plan.price}
                                    {plan.period && <span className="text-sm text-gray-500 ml-1">{plan.period}</span>}
                                </div>
                                <ul className="text-left text-sm text-gray-400 space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3">
                                            <span className="text-[#D4A017]">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contact"
                                    className={`w-full py-4 rounded-[12px] font-bold transition-all uppercase text-[10px] tracking-widest text-center ${
                                        plan.featured
                                            ? 'bg-[#D4A017] text-black hover:bg-white'
                                            : 'border border-white/20 text-white hover:bg-white hover:text-black'
                                    }`}
                                >
                                    {plan.buttonText}
                                </a>
                            </div>
                        </DebugWrapper>
                    ))}
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
};

export const L2DirectionContact = ({ contact }: L2DirectionContactProps) => {
    const [method, setMethod] = useState<'Telegram' | 'WhatsApp' | 'Email'>('Telegram');
    const [services, setServices] = useState<string[]>([]);

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

                        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
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
