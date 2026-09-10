'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { motion } from 'framer-motion';

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

const plans = [
    {
        title: 'Outdoor Flight',
        price: '200 ₾',
        subtitle: 'Aerial drone filming from above',
        items: [
            '4K video + high-res photos - ready to use',
            '10+ photos from different angles',
            'About 1.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'Best if you handle your own visuals - you get the files and use them as needed.',
    },
    {
        title: 'Indoor FPV Flight',
        price: '300 ₾',
        subtitle: 'FPV drone flight through your space',
        items: [
            '4K video - ready to use',
            'Multiple passes - we find the best route',
            'About 1.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'FPV is a compact drone for indoor flights. The camera flies through the space and the viewer feels like they are walking through it.',
    },
    {
        title: 'Full Shoot',
        price: '450 ₾',
        subtitle: 'Aerial + indoor flight - exterior, hall, terrace - in one visit',
        items: [
            'Aerial video and FPV flight in 4K',
            '10+ high-res photos from different angles',
            'About 2.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'Complete shoot in one visit - aerial exterior and a fly-through of your space.',
        popular: true,
    },
    {
        title: 'Ready-to-Use Result',
        price: 'from 700 ₾',
        subtitle: 'Aerial + indoor FPV + editing + photography',
        items: [
            'Tailored flight routing',
            'Up to 3 mins of edited video — split for Website, Reels, and TikTok',
            '20+ retouched photos',
            'Video for Google Maps listing',
            'Delivery from 48 hours',
        ],
        note: 'Best for business — you get fully packaged content ready to publish without hiring external editors.',
    },
] satisfies PricingCard[];

const addons = [
    'Reels edit up to 30 sec (music + subtitles): +150 ₾',
    'Edited clip 30-60 sec for website: +150 ₾',
    '360° aerial panorama: +80 ₾',
];

export const DronePricingStitchEn = () => {
    return (
        <DebugWrapper id={10700} label="Drone Pricing Section">
            <section className="bg-[#0D0D0D] py-10 md:py-24" id="pricing">
                <div className="container mx-auto mb-8 px-6 text-center md:mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="mb-4 text-3xl font-bold text-white">Packages and pricing</h2>
                    </DebugWrapper>
                    <DebugWrapper id={10702} label="Pricing Tagline">
                        <p className="text-sm text-gray-500 md:text-base">
                            Fixed prices in Georgian lari (₾). No hidden fees.
                        </p>
                    </DebugWrapper>
                </div>
                
                <div className="container mx-auto px-6 max-w-full relative group/carousel">
                    {/* Horizontal Swipe Carousel */}
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory pr-[20vw] md:pr-0">
                        {plans.map((plan, idx) => (
                            <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className={`snap-center shrink-0 w-[75vw] sm:w-[260px] xl:w-[280px] flex flex-col justify-between rounded-[20px] border p-5 md:p-6 transition-all duration-500 backdrop-blur-sm hover:bg-white/[0.08] ${
                                        plan.popular
                                            ? 'border-[#FFD23F]/55 bg-[radial-gradient(ellipse_at_top_right,rgba(255,210,63,0.15),rgba(12,12,14,0.5)_50%)] shadow-[0_0_30px_rgba(255,210,63,0.1)]'
                                            : 'border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent'
                                    }`}
                                >
                                    <div>
                                        <div>
                                            <h3 className="text-[18px] md:text-xl font-bold tracking-tight text-white">{plan.title}</h3>
                                            <p className="mt-1.5 text-[13px] text-zinc-400 leading-snug">{plan.subtitle}</p>
                                        </div>
                                        <div className="mt-4 flex items-center gap-3">
                                            <p className="text-2xl font-bold text-white md:text-3xl">{plan.price}</p>
                                            {plan.popular ? (
                                                <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#FFD23F]">
                                                    Hit
                                                </span>
                                            ) : null}
                                        </div>
                                        <ul className="mt-5 flex-1 space-y-2 text-[13px] leading-snug text-zinc-300">
                                            {plan.items.map((item) => (
                                                <li key={item} className="flex gap-2">
                                                    <span className="text-white/50 shrink-0 mt-[1px]">—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 pt-5 border-t border-white/5">
                                        {plan.note ? <p className="mb-4 text-xs leading-relaxed text-zinc-500">{plan.note}</p> : null}
                                        <a
                                            href="#contact"
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && plan.title) {
                                                    window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle: plan.title } }));
                                                    try { sessionStorage.setItem('breus_contact_prefill_service', plan.title); } catch {}
                                                }
                                            }}
                                            className={`inline-flex w-full items-center justify-center rounded-xl border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                                                plan.popular
                                                    ? 'bg-white text-black border-transparent hover:bg-zinc-200'
                                                    : 'border-white/20 bg-transparent text-white hover:bg-white/10'
                                            }`}
                                        >
                                            Discuss This Tier
                                        </a>
                                    </div>
                                </motion.div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto mt-6 px-6 md:mt-10">
                    <DebugWrapper id={10730} label="Pricing Addons">
                        <div className="rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Add-ons</h3>
                            <p className="mt-3 leading-relaxed text-white/70">
                                From one shoot we can assemble not only the core material, but also extra formats for your website, social media, Google Business Profile and sales.
                            </p>
                            <ul className="mt-6 grid gap-4 md:grid-cols-2">
                                {addons.map((addon) => (
                                    <li
                                        key={addon}
                                        className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72"
                                    >
                                        {addon}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </DebugWrapper>
                </div>
            </section>
        </DebugWrapper>
    );
};
