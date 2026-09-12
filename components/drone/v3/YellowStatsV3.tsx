import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const stats = [
    {
        value: '+68%',
        description: 'Скорость закрытия сделок с аэровидео (MLS / NAR)',
    },
    {
        value: '403%',
        description: 'Больше запросов при наличии видео vs только фото (Inman)',
    },
    {
        value: '+94%',
        description: 'Больше просмотров объявлений с высоты (HomeJab)',
    },
    {
        value: '3x',
        description: 'Увеличение вовлеченности в соцсетях и рекламе',
    },
];

export const YellowStatsV3 = () => {
    return (
        <DebugWrapper id={14002} label="Yellow Stats V3">
            <section className="bg-[#FFD23F] py-12 md:py-20 border-y border-[#FFD23F]/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col pt-6 sm:pt-0 sm:px-6 first:pt-0 first:px-0">
                                <span className="text-4xl md:text-5xl font-black text-black tracking-tight mb-3">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-semibold text-black/80 leading-snug">
                                    {stat.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
