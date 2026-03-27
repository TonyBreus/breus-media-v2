import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import type { DroneDirectionTrustConfig } from '@/constants/droneDirectionPages';

type DroneTrustLiteProps = {
    trust: DroneDirectionTrustConfig;
};

export const DroneTrustLite = ({ trust }: DroneTrustLiteProps) => {
    return (
        <DebugWrapper id={10400} label="Trust Lite Section">
            <section className="py-10 bg-[#0D0D0D] border-y border-[#2a2a2a]">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4A017] font-bold">
                        {trust.heading}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {trust.badges.map((badge, idx) => (
                            <DebugWrapper key={badge} id={10410 + idx} label={`Trust Badge: ${badge}`}>
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-gray-300">
                                    {badge}
                                </span>
                            </DebugWrapper>
                        ))}
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                        {trust.location}
                    </p>
                </div>
            </section>
        </DebugWrapper>
    );
};
