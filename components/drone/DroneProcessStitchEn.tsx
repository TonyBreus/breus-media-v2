'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'REQUEST',
        description: 'Describe the task, object or location - we suggest the right format.',
    },
    {
        number: '02',
        title: 'PLAN',
        description: 'We agree on a date, confirm the flight zone and shooting conditions.',
    },
    {
        number: '03',
        title: 'SHOOT',
        description: 'We work on site, make several passes - and select the best material.',
    },
    {
        number: '04',
        title: 'DELIVERY',
        description: 'We send the ready files in a convenient way within the agreed timeframe.',
    },
];

export const DroneProcessStitchEn = () => {
    return (
        <DebugWrapper id={10500} label="Drone Process Section">
            <section className="py-8 md:py-20 bg-[#0D0D0D]">
                <div className="container mx-auto px-6 mb-6 md:mb-12">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-1">
                        From request to ready files
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Drone filming process
                    </h2>
                    <p className="max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed">
                        We organize drone filming in Tbilisi and across Georgia in 4 clear steps: brief, no-fly zone check, on-site filming and delivery of 4K materials from 24 hours.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="px-2 py-2 md:hidden">
                        <div className="flex flex-col">
                            {steps.map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="flex items-center gap-3 rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-3 py-2">
                                        <span className="w-5 shrink-0 font-mono text-[11px] text-white/25">
                                            {step.number}
                                        </span>
                                        <span className="text-[12px] font-bold uppercase tracking-widest text-[#D4A017]">
                                            {step.title}
                                        </span>
                                        <span className="text-[11px] leading-snug text-white/45">
                                            {step.description}
                                        </span>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="flex justify-center py-0.5 text-xs text-white/20">↓</div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <p className="mb-8 text-[10px] uppercase tracking-[0.18em] text-white/35">
                            From request to ready files
                        </p>
                        <div className="gap-12 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {steps.map((step, idx) => (
                                <DebugWrapper
                                    key={idx}
                                    id={10510 + idx}
                                    label={`Process Step ${idx + 1}: ${step.title}`}
                                >
                                    <div className="group relative">
                                        <div className="absolute -left-4 -top-10 hidden select-none text-6xl font-black text-white/5 transition-colors group-hover:text-[#D4A017]/10 md:block">
                                            {step.number}
                                        </div>
                                        <h4 className="relative mb-3 font-bold tracking-widest text-[#D4A017]">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm leading-relaxed text-gray-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
