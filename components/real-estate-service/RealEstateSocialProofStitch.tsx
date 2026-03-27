'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const RealEstateSocialProofStitch = () => {
    const stats = [
        { value: '68%', label: 'Быстрее выходят на сделку с видео' },
        { value: '3x', label: 'Выше вовлеченность в листингах' },
        { value: '4K', label: 'Качество для премиум-подачи' },
        { value: '24h', label: 'Средний срок чернового материала' },
    ];

    return (
        <DebugWrapper id="real-estate-social-proof-stitch">
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
