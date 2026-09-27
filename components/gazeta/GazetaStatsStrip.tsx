import React from 'react';

export function GazetaStatsStrip() {
    const stats = [
        { value: '150+', label: 'проектов' },
        { value: '4K & FPV', label: 'аэросъёмка' },
        { value: '24ч', label: 'сдача материалов' },
        { value: 'B2B', label: 'официальный договор' },
    ];

    return (
        <section className="bg-[#0A0A0A] border-y border-white/10 py-6 md:py-8 w-full relative z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Mobile Layout (2x2 grid) */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:hidden">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <span className="text-2xl font-black text-[#FFD23F] mb-1">{stat.value}</span>
                            <span className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Desktop Layout (horizontal row with dividers) */}
                <div className="hidden md:flex flex-row justify-between items-center divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center text-center px-4">
                            <span className="text-2xl font-black text-[#FFD23F] mb-1">{stat.value}</span>
                            <span className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
