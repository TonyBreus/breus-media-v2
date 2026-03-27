'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const zones = [
    {
        color: 'bg-green-500',
        borderColor: 'border-green-500',
        title: 'Зелёная зона',
        description: 'Свободные полеты до 120м. Без согласования.'
    },
    {
        color: 'bg-yellow-500',
        borderColor: 'border-yellow-500',
        title: 'Жёлтая зона',
        description: 'Требуется уведомление GCAA (за 24 часа).'
    },
    {
        color: 'bg-red-500',
        borderColor: 'border-red-500',
        title: 'Красная зона',
        description: 'Закрытые зоны (Аэропорт, Правительство). Нужен спец-допуск.'
    }
];

export const DroneMapStitch = () => {
    return (
        <DebugWrapper id={10600} label="Drone Map Section">
            <section className="py-24 bg-[#080808] overflow-hidden" id="map">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <DebugWrapper id={10601} label="Map Header">
                            <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">
                                ПОЛЁТНЫЕ ЗОНЫ ТБИЛИСИ
                            </h2>
                        </DebugWrapper>
                        <DebugWrapper id={10602} label="Map Description">
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Мы летаем строго по регламенту GCAA (Civil Aviation Agency of Georgia). Получаем разрешения на полеты в ограниченных зонах (Красные и Желтые).
                            </p>
                        </DebugWrapper>
                        <div className="space-y-4">
                            {zones.map((zone, idx) => (
                                <DebugWrapper key={idx} id={10610 + idx} label={`Zone Item: ${zone.title}`}>
                                    <div
                                        className={`flex items-start p-4 bg-[#141414] border-l-4 ${zone.borderColor} rounded-r-lg transition-transform hover:translate-x-1`}
                                    >
                                        <div className={`flex-shrink-0 w-3 h-3 rounded-full ${zone.color} mt-1.5 mr-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase text-white tracking-wider">
                                                {zone.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {zone.description}
                                            </p>
                                        </div>
                                    </div>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                    <div className="relative bg-neutral-900 rounded-[12px] border border-[#2a2a2a] h-[450px] overflow-hidden group">
                        <DebugWrapper id={10690} label="Interactive Map Placeholder">
                            {/* Mock Map Representation */}
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANaeY6-Mq4KaVlUUqMRMl1GJnKIbdRxKvQf4x-tj8j59Aq5QiZmUZPjh7KlWKgCD2aX_wMFtZZExfbTIYFIJbWnog2jDtWFYd96ObPqpu8gy8Z4_wrEM9g8WOeF_Qh1sukB9TzhncAcLQzR1u8QYEIYsoUo5RCJDXsUnFuQX-poStKHJwjjfF8pWPyyHNaglJlHYZZwn-GbZGNwdDqojfFq8wpqDgdvJZXxw9kSKaQNYmIr04PKDhGfiI_HARFHfJR_HWlAQvQl0OQ"
                                alt="Tbilisi Map"
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-40 h-40 bg-red-500/10 border border-red-500/40 rounded-full animate-pulse shadow-[0_0_50px_rgba(239,68,68,0.2)]"></div>
                                <div className="absolute w-24 h-24 bg-yellow-500/10 border border-yellow-500/30 rounded-full animate-pulse delay-700"></div>
                            </div>
                        </DebugWrapper>

                        {/* Overlay Info */}
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-gray-400 font-bold uppercase">
                            Tbilisi Fly Zones v.2.4
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
