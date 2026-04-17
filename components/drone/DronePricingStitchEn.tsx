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
        price: '250 ₾',
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
        price: '350 ₾',
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
        price: '500 ₾',
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
        title: 'With Final Result',
        price: 'from 900 ₾',
        subtitle: 'Aerial + indoor flight + editing and photos',
        items: [
            'Planned shooting route',
            'Up to 3 minutes of edited video - split into clips for website, Reels, Stories and TikTok',
            '20+ edited photos',
            'Video for Google Maps listing',
            'File delivery - from 48 hours (editing included)',
        ],
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
                <div className="container mx-auto grid items-start gap-5 px-6 xl:grid-cols-4">
                    {plans.map((plan, idx) => (
                        <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`flex flex-col rounded-[20px] border p-5 transition-all md:p-6 ${
                                    plan.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">{plan.title}</h3>
                                    <p className="mt-2 text-xs text-white/64 md:text-sm">{plan.subtitle}</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 md:mt-6 md:gap-3">
                                    <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{plan.price}</p>
                                    {plan.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Best value
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-relaxed text-white/72 md:mt-6 md:space-y-3 md:text-sm">
                                    {plan.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {plan.note ? (
                                    <p className="mt-4 text-xs leading-relaxed text-white/58 md:mt-5 md:text-sm">
                                        {plan.note}
                                    </p>
                                ) : null}
                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-6 md:py-2.5 md:text-xs"
                                >
                                    Discuss this package →
                                </a>
                            </motion.div>
                        </DebugWrapper>
                    ))}
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
