'use client';
import { useState } from 'react';
import { niches, WA } from './DroneRealEstateDataV4';

export function DroneRealEstateNichesV4() {
    const [active, setActive] = useState('realtor');

    return (
        <section id="niches" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Сценарии использования
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white">Кому подходит съёмка</h2>
                    <p className="text-sm text-white/70 max-w-xl">
                        Выберите ваш формат — покажем задачи, решение и финальный комплект материалов:
                    </p>
                </div>

                {/* Tabs Buttons */}
                <div role="tablist" aria-label="Сценарии съёмки недвижимости" className="mt-6 flex flex-wrap gap-2">
                    {niches.map((n) => {
                        const isActive = active === n.id;
                        return (
                            <button
                                key={n.id}
                                id={`tab-${n.id}`}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`panel-${n.id}`}
                                onClick={() => setActive(n.id)}
                                className={`min-h-[44px] rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                                    isActive
                                        ? 'bg-[#D4A017] text-black shadow-[0_2px_12px_rgba(212,160,23,0.3)]'
                                        : 'border border-white/15 bg-white/[0.04] text-white/80 hover:text-white hover:bg-white/[0.08]'
                                }`}
                            >
                                {n.title}
                            </button>
                        );
                    })}
                </div>

                {/* Tabpanels: Render ALL panels into DOM for SSR & SearchGPT indexing, toggle via CSS */}
                <div className="mt-6">
                    {niches.map((n) => {
                        const isActive = active === n.id;
                        return (
                            <div
                                key={n.id}
                                id={`panel-${n.id}`}
                                role="tabpanel"
                                aria-labelledby={`tab-${n.id}`}
                                className={`rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 md:p-8 transition-opacity duration-200 ${
                                    isActive ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A017]">
                                            Формат съёмки
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-1">{n.title}</h3>
                                    </div>
                                    <a
                                        href={WA(`Здравствуйте! Аэросъёмка недвижимости: ${n.title}. Расскажите про условия.`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white shrink-0"
                                    >
                                        Обсудить мой объект в WhatsApp
                                    </a>
                                </div>

                                <div className="mt-6 grid gap-6 md:grid-cols-3">
                                    <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">
                                            Типовая ситуация
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/80">{n.pain}</p>
                                    </div>
                                    <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">
                                            Что делает дрон
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/80">{n.solution}</p>
                                    </div>
                                    <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">
                                            Результат на выходе
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/80">{n.deliverables}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
