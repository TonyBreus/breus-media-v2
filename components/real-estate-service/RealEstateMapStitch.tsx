'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const zones = [
    {
        color: 'bg-green-500',
        borderColor: 'border-green-500',
        title: 'Тбилиси',
        description: 'Квартиры, новостройки и коммерческие объекты в черте города.',
    },
    {
        color: 'bg-yellow-500',
        borderColor: 'border-yellow-500',
        title: 'Батуми',
        description: 'Курортная недвижимость, апарт-отели и инвестиционные проекты.',
    },
    {
        color: 'bg-red-500',
        borderColor: 'border-red-500',
        title: 'Регионы Грузии',
        description: 'Выезды в Кутаиси и другие регионы по заранее согласованному графику.',
    },
];

export const RealEstateMapStitch = () => {
    return (
        <DebugWrapper id={10600} label="Real Estate Map Section">
            <section className="py-24 bg-[#080808] overflow-hidden" id="map">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <DebugWrapper id={10601} label="Map Header">
                            <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">
                                География проектов недвижимости
                            </h2>
                        </DebugWrapper>
                        <DebugWrapper id={10602} label="Map Description">
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Работаем по Тбилиси, Батуми и регионам Грузии. Подбираем формат съемки под тип объекта:
                                вторичный рынок, новостройки, коммерческие площади и курортные комплексы.
                            </p>
                        </DebugWrapper>
                        <div className="space-y-4">
                            {zones.map((zone, idx) => (
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
                                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
                                alt="Georgia city map"
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-40 h-40 bg-red-500/10 border border-red-500/40 rounded-full animate-pulse shadow-[0_0_50px_rgba(239,68,68,0.2)]"></div>
                                <div className="absolute w-24 h-24 bg-yellow-500/10 border border-yellow-500/30 rounded-full animate-pulse delay-700"></div>
                            </div>
                        </DebugWrapper>

                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-gray-400 font-bold uppercase">
                            Real Estate Coverage v1
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
