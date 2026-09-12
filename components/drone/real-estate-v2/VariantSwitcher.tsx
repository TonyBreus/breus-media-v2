'use client';

import React, { useState } from 'react';
import { TechFactorsAccordion, TechFactorsTable } from './TechFactorsVariants';
import { LayoutList, Table } from 'lucide-react';

export const VariantSwitcher = () => {
    const [activeVariant, setActiveVariant] = useState<'A' | 'B'>('A');

    return (
        <section className="py-16 md:py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-2">
                            Технические регламенты и стандарты
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            Подводная часть айсберга (30 факторов)
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-white/60">
                            Мы учитываем юридические, метеорологические и технические нюансы, чтобы съёмка прошла законно, безопасно и с максимальным качеством.
                        </p>
                    </div>

                    {/* A/B Switcher */}
                    <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] p-1.5 rounded-[14px]">
                        <button
                            onClick={() => setActiveVariant('A')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-colors ${
                                activeVariant === 'A' 
                                    ? 'bg-[#D4A017] text-black shadow-md' 
                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <LayoutList className={`w-4 h-4 ${activeVariant === 'A' ? 'text-black' : 'text-white/50'}`} />
                            Вариант A
                        </button>
                        <button
                            onClick={() => setActiveVariant('B')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-colors ${
                                activeVariant === 'B' 
                                    ? 'bg-[#D4A017] text-black shadow-md' 
                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <Table className={`w-4 h-4 ${activeVariant === 'B' ? 'text-black' : 'text-white/50'}`} />
                            Вариант B
                        </button>
                    </div>
                </div>

                {/* Render BOTH variants into DOM for SSR, toggle visibility via CSS */}
                <div className={activeVariant === 'A' ? 'block' : 'hidden'}>
                    <TechFactorsAccordion />
                </div>
                <div className={activeVariant === 'B' ? 'block' : 'hidden'}>
                    <TechFactorsTable />
                </div>
            </div>
        </section>
    );
};
