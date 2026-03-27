'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const DroneSocialProofStitch = () => {
    const stats = [
        { value: '94%', label: 'Теряют просмотры без видео' },
        { value: '68%', label: 'Продаются быстрее с дрона' },
        { value: '4K', label: 'Apple ProRes Качество' },
        { value: '24h', label: 'Среднее время сдачи' }
    ];

    return (
        <DebugWrapper id="drone-social-proof-stitch">
            <section id="drone-social-proof-section" className="scroll-mt-24 border-y border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <DebugWrapper key={idx} id={10210 + idx} label={`Stat Item: ${stat.label}`}>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                                        {stat.value}
                                    </div>
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
