'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowUpRight, CheckCircle2, MessageCircle, Sparkles, Layers } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, ChooserTab, SubServiceItem } from './chooserData';
import { QuickServiceDrawer, QuickServiceData } from '@/components/gazeta/QuickServiceDrawer';
import { getQuickServiceData } from '@/constants/quickServicesData';

interface ChooserLayoutBentoProps {
    lang?: 'ru' | 'en';
}

export function ChooserLayoutBento({ lang = 'ru' }: ChooserLayoutBentoProps) {
    const isEn = lang === 'en';
    const [activeTab, setActiveTab] = useState<ChooserTab>('services');
    const [selectedKey, setSelectedKey] = useState<string>('aerial');
    const [drawerData, setDrawerData] = useState<QuickServiceData | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openQuickDrawer = (sub: SubServiceItem) => {
        const data = getQuickServiceData(sub.id, lang);
        setDrawerData(data);
        setIsDrawerOpen(true);
    };

    const currentList = activeTab === 'services' ? SERVICES_DATA : INDUSTRIES_DATA;
    const selectedItem = currentList.find((item) => item.key === selectedKey) || currentList[0];

    const handleTabChange = (tab: ChooserTab) => {
        setActiveTab(tab);
        const newList = tab === 'services' ? SERVICES_DATA : INDUSTRIES_DATA;
        setSelectedKey(newList[0].key);
    };

    // Sub items: first is flagship, remaining are right-side cards
    const flagshipItem = selectedItem.items[0];
    const secondaryItems = selectedItem.items.slice(1, 4);

    return (
        <section className="relative w-full border-t border-b border-white/10 bg-[#09090C] py-10 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* 1. Header & Terminal Style Badges */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#FFD23F]">
                            <Terminal className="h-3.5 w-3.5 text-[#22c55e]" />
                            {isEn ? 'Bento Terminal • Layout #2' : 'Интерактивный Терминал • Макет №2'}
                        </div>
                        <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                            {isEn ? 'Modular Production Matrix' : 'Матрица услуг и направлений'}
                        </h2>
                    </div>

                    {/* Tab Switcher */}
                    <div className="inline-flex h-10 items-center rounded-xl border border-white/15 bg-black/60 p-1 backdrop-blur-md self-start md:self-auto">
                        <button
                            type="button"
                            onClick={() => handleTabChange('services')}
                            className={`rounded-lg px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                                activeTab === 'services'
                                    ? 'bg-[#FFD23F] text-black shadow-sm'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {isEn ? 'Services (4)' : 'Услуги (4)'}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTabChange('industries')}
                            className={`rounded-lg px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                                activeTab === 'industries'
                                    ? 'bg-[#FFD23F] text-black shadow-sm'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {isEn ? 'Industries (6)' : 'Индустрии (6)'}
                        </button>
                    </div>
                </div>

                {/* 2. Interactive Chips with Green Online Dot Indicator (Horizontal Swipe Rail) */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mb-6">
                    <div className="flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {currentList.map((item) => {
                            const isSelected = selectedKey === item.key;
                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    onClick={() => setSelectedKey(item.key)}
                                    className={`group shrink-0 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                                        isSelected
                                            ? 'border-[#FFD23F] bg-[#FFD23F]/15 text-[#FFD23F] shadow-[0_0_20px_rgba(255,210,63,0.15)]'
                                            : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white'
                                    }`}
                                >
                                    <span className="text-sm">{item.icon}</span>
                                    <span>{isEn ? item.titleEn : item.title}</span>
                                    {item.readyCount > 0 ? (
                                        <span className="flex h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                                    ) : (
                                        <span className="flex h-1.5 w-1.5 rounded-full bg-white/30" />
                                    )}
                                    <span className="font-mono text-[10px] opacity-60">
                                        {isEn ? item.startingPriceEn : item.startingPrice}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Asymmetric Bento Grid Showcase */}
                <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                    {/* Left Column: Flagship Bento Block (8 cols) */}
                    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#121216] p-6 md:col-span-7 lg:col-span-8 flex flex-col justify-between min-h-[380px] md:min-h-[440px]">
                        {/* Background Media */}
                        <Image
                            src={flagshipItem.image}
                            alt={isEn ? flagshipItem.titleEn : flagshipItem.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 65vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

                        {/* Top Badges */}
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                                <span>{selectedItem.icon}</span>
                                <span>{isEn ? flagshipItem.tagEn : flagshipItem.tag}</span>
                            </div>

                            {flagshipItem.hasL3 && (
                                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/20 px-3 py-1 text-[11px] font-bold text-[#22c55e] backdrop-blur-md">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    <span>{isEn ? 'LIVE L3 PAGE' : 'ГОТОВАЯ СТРАНИЦА L3'}</span>
                                </div>
                            )}
                        </div>

                        {/* Bottom Content Area */}
                        <div className="relative z-10 mt-auto pt-16">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                {isEn ? 'Flagship Production Format' : 'Флагманский формат'}
                            </p>
                            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                {isEn ? flagshipItem.titleEn : flagshipItem.title}
                            </h3>
                            <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                                {isEn ? flagshipItem.descEn : flagshipItem.desc}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <span className="rounded-xl border border-white/20 bg-black/70 px-4 py-2.5 font-mono text-base font-bold text-white backdrop-blur-md">
                                    {isEn ? flagshipItem.priceEn : flagshipItem.price}
                                </span>

                                {flagshipItem.hasL3 ? (
                                    <Link
                                        href={flagshipItem.href}
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#FFD23F] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-[0_0_20px_rgba(255,210,63,0.3)]"
                                    >
                                        <span>{isEn ? 'Open Live Page ↗' : 'Открыть страницу ↗'}</span>
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => openQuickDrawer(flagshipItem)}
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#FFD23F]"
                                    >
                                        <span>{isEn ? 'Express Overview' : 'Быстрый обзор'}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3 Stacked Secondary Bento Cards (4-5 cols) */}
                    <div className="flex flex-col gap-3.5 md:col-span-5 lg:col-span-4 justify-between">
                        {secondaryItems.map((sub) => (
                            <div
                                key={sub.id}
                                className="group relative flex items-center justify-between rounded-[20px] border border-white/10 bg-[#141418] p-4 transition-all hover:border-[#FFD23F]/40 hover:bg-[#18181F]"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[14px] border border-white/10">
                                        <Image
                                            src={sub.image}
                                            alt={isEn ? sub.titleEn : sub.title}
                                            fill
                                            sizes="64px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD23F]">
                                                {isEn ? sub.tagEn : sub.tag}
                                            </span>
                                            {sub.hasL3 && (
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                                            )}
                                        </div>
                                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD23F] transition-colors line-clamp-1">
                                            {isEn ? sub.titleEn : sub.title}
                                        </h4>
                                        <p className="mt-0.5 font-mono text-xs font-semibold text-white/70">
                                            {isEn ? sub.priceEn : sub.price}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    {sub.hasL3 ? (
                                        <Link
                                            href={sub.href}
                                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-white transition-all hover:bg-[#FFD23F] hover:text-black"
                                        >
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => openQuickDrawer(sub)}
                                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* All Services Direct Link */}
                        {selectedItem.flagshipHref && selectedItem.flagshipHref !== '#contact' && (
                            <Link
                                href={selectedItem.flagshipHref}
                                className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 py-2.5 text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                            >
                                <Layers className="h-3.5 w-3.5" />
                                <span>{isEn ? 'View Full Direction Directory ↗' : 'Смотреть всё направление ↗'}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Service Express Drawer (Bottom Sheet) */}
            <QuickServiceDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                data={drawerData}
                lang={lang}
            />
        </section>
    );
}
