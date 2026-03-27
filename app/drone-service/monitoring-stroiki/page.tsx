'use client';

import React from 'react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export default function MonitoringStroikiPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            {/* Global Header in Internal Mode (isLanding={false} by default) */}
            <SmartHeader transparent={true} isLanding={false} />

            <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
                <DebugWrapper id={12000} label="Hero Section - Monitoring">
                    <div className="flex flex-col gap-6">
                        <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm">Услуга</span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Мониторинг <br />
                            <span className="text-white/20">Стройки</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Профессиональный видеоконтроль и аэрофотофиксация этапов строительства.
                            Отчетность в 4K и создание таймлапсов для инвесторов.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">
                                Заказать отчет
                            </button>
                        </div>
                    </div>
                </DebugWrapper>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Таймлапсы", desc: "Визуализация прогресса за весь период строительства." },
                        { title: "4K Контроль", desc: "Детальная съемка узлов и конструкций с воздуха." },
                        { title: "Облако", desc: "Доступ к архиву материалов 24/7 из любой точки мира." }
                    ].map((item, i) => (
                        <DebugWrapper key={i} id={12100 + i} label={`Feature: ${item.title}`}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
                                <h3 className="text-xl font-bold uppercase mb-4 text-[#D4AF37] group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </DebugWrapper>
                    ))}
                </div>
            </div>

            {/* Tickers are already integrated into SmartHeader */}
        </main>
    );
}
