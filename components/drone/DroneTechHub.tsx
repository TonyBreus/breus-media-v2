'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, FileVideo, Zap, Crosshair } from 'lucide-react';
import { techDataRu } from './droneTechData';

type Tab = 'recent' | 'gear' | 'compare';

export const DroneTechHub = () => {
    const [activeTab, setActiveTab] = useState<Tab>('recent');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'recent':
                return (
                    <motion.div
                        key="recent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full overflow-x-auto pb-4"
                    >
                        <table className="w-full min-w-[600px] border-collapse text-left text-sm md:text-base">
                            <thead>
                                <tr className="border-b border-[#2a2a2a] text-[#8a8a8a]">
                                    <th className="pb-3 pl-4 pr-4 font-medium">Дата</th>
                                    <th className="pb-3 px-4 font-medium">Проект / Клиент</th>
                                    <th className="pb-3 px-4 font-medium">Локация</th>
                                    <th className="pb-3 px-4 font-medium">Формат съёмки</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/90">
                                {techDataRu.recentProjects.map((project, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b border-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/50"
                                    >
                                        <td className="py-4 pl-4 pr-4 text-[#D4A017]/80">{project.date}</td>
                                        <td className="py-4 px-4 font-medium">{project.client}</td>
                                        <td className="py-4 px-4 text-white/60">{project.location}</td>
                                        <td className="py-4 px-4">
                                            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                                                {project.format}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                );
            case 'gear':
                return (
                    <motion.div
                        key="gear"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                        {techDataRu.gearList.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-center rounded-[12px] border border-[#2a2a2a] bg-[#111] p-5 transition-colors hover:border-[#D4A017]/50"
                            >
                                <div className="mb-2 flex items-center gap-2">
                                    <Crosshair className="h-4 w-4 text-[#D4A017]" />
                                    <h4 className="font-bold text-white text-[16px]">{item.name}</h4>
                                </div>
                                <p className="mb-3 text-[13px] font-mono text-[#D4A017]/70">{item.specs}</p>
                                <p className="text-[14px] leading-relaxed text-white/60">
                                    <strong className="text-white/80">Назначение:</strong> {item.purpose}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                );
            case 'compare':
                return (
                    <motion.div
                        key="compare"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full overflow-x-auto pb-4"
                    >
                        <table className="w-full min-w-[600px] border-collapse text-left text-sm md:text-base">
                            <thead>
                                <tr className="border-b border-[#2a2a2a] text-white">
                                    <th className="pb-4 pl-4 pr-4 font-medium w-1/3">Характеристика</th>
                                    <th className="pb-4 px-4 font-medium w-1/3">Стандартный Дрон</th>
                                    <th className="pb-4 px-4 font-medium w-1/3 text-[#D4A017]">FPV Дрон</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/80">
                                {techDataRu.comparison.map((row, idx) => (
                                    <tr key={idx} className="border-b border-[#1a1a1a]">
                                        <td className="py-4 pl-4 pr-4 font-medium text-white/90">{row.feature}</td>
                                        <td className="py-4 px-4 text-white/60">{row.standard}</td>
                                        <td className="py-4 px-4 font-medium text-[#D4A017]/90">{row.fpv}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                );
        }
    };

    return (
        <section className="bg-[#050505] py-16 md:py-24 border-y border-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        <Zap className="h-3.5 w-3.5" /> База данных
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Техническая сводка
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                        Факты, которые важны для B2B-клиентов и продакшенов. Мы работаем открыто: показываем свежие кейсы, раскрываем парк оборудования и помогаем выбрать правильный формат.
                    </p>
                </div>

                <div className="rounded-[16px] border border-[#222] bg-[#0a0a0a] shadow-2xl">
                    <div className="flex flex-wrap items-center gap-1 border-b border-[#222] p-2 md:gap-2 md:p-3">
                        <button
                            onClick={() => setActiveTab('recent')}
                            className={`rounded-[8px] px-4 py-2.5 text-xs md:text-sm font-semibold transition-all ${
                                activeTab === 'recent'
                                    ? 'bg-[#1a1a1a] text-white shadow-sm border border-[#333]'
                                    : 'text-white/50 hover:bg-[#111] hover:text-white border border-transparent'
                            }`}
                        >
                            Журнал съемок
                        </button>
                        <button
                            onClick={() => setActiveTab('compare')}
                            className={`rounded-[8px] px-4 py-2.5 text-xs md:text-sm font-semibold transition-all ${
                                activeTab === 'compare'
                                    ? 'bg-[#1a1a1a] text-white shadow-sm border border-[#333]'
                                    : 'text-white/50 hover:bg-[#111] hover:text-white border border-transparent'
                            }`}
                        >
                            Сравнение форматов
                        </button>
                        <button
                            onClick={() => setActiveTab('gear')}
                            className={`rounded-[8px] px-4 py-2.5 text-xs md:text-sm font-semibold transition-all ${
                                activeTab === 'gear'
                                    ? 'bg-[#1a1a1a] text-white shadow-sm border border-[#333]'
                                    : 'text-white/50 hover:bg-[#111] hover:text-white border border-transparent'
                            }`}
                        >
                            Парк техники
                        </button>
                    </div>

                    <div className="p-4 md:p-8 min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {renderTabContent()}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
