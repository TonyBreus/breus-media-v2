'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, ChooserTab, SubServiceItem } from './chooserData';
import { QuickServiceDrawer, QuickServiceData } from '@/components/gazeta/QuickServiceDrawer';
import { getQuickServiceData } from '@/constants/quickServicesData';

interface ChooserLayoutDrawerProps {
    lang?: 'ru' | 'en';
}

export function ChooserLayoutDrawer({ lang = 'ru' }: ChooserLayoutDrawerProps) {
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

    return (
        <section className="relative w-full border-t border-b border-white/10 bg-[#070709] py-10 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* 1. Header with App Store / Airbnb Style */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FFD23F]">
                            <Store className="h-3.5 w-3.5 text-[#FFD23F]" />
                            {isEn ? 'App Drawer Catalog • Layout #3' : 'Шторка-Каталог • Макет №3'}
                        </div>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                            {isEn ? 'Production Store & Services' : 'Витрина форматов и решений'}
                        </h2>
                    </div>

                    {/* Segmented Tabs */}
                    <div className="inline-flex h-10 items-center rounded-xl border border-white/15 bg-[#121216] p-1 self-start sm:self-auto">
                        <button
                            type="button"
                            onClick={() => handleTabChange('services')}
                            className={`rounded-lg px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                                activeTab === 'services'
                                    ? 'bg-[#FFD23F] text-black shadow-sm'
                                    : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {isEn ? 'Services' : 'Услуги'}
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
                            {isEn ? 'Industries' : 'Индустрии'}
                        </button>
                    </div>
                </div>

                {/* 2. Top Compact Swipe Rail (Square App Icons) */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0 mb-8">
                    <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {currentList.map((item) => {
                            const isSelected = selectedKey === item.key;
                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    onClick={() => setSelectedKey(item.key)}
                                    className={`group cursor-pointer shrink-0 text-left w-[140px] md:w-[165px] p-3.5 rounded-[18px] border transition-all ${
                                        isSelected
                                            ? 'border-[#FFD23F] bg-[#16161C] shadow-[0_0_24px_rgba(255,210,63,0.18)]'
                                            : 'border-white/10 bg-[#101014] opacity-75 hover:opacity-100 hover:border-white/25'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl">{item.icon}</span>
                                        {item.readyCount > 0 && (
                                            <span className="flex items-center gap-0.5 rounded-md bg-[#FFD23F]/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#FFD23F]">
                                                <Star className="h-2.5 w-2.5 fill-[#FFD23F]" />
                                                {item.readyCount} L3
                                            </span>
                                        )}
                                    </div>
                                    <h4 className="mt-2.5 text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-[#FFD23F] transition-colors">
                                        {isEn ? item.titleEn : item.title}
                                    </h4>
                                    <p className="mt-0.5 font-mono text-[11px] text-white/50">
                                        {isEn ? item.startingPriceEn : item.startingPrice}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Bottom: Interactive Drawer Catalog (Vertical List with Rich Details) */}
                <div className="rounded-[24px] border border-white/10 bg-[#101014] p-4 sm:p-6 md:p-8 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">{selectedItem.icon}</span>
                                <h3 className="text-xl font-bold text-white md:text-2xl">
                                    {isEn ? selectedItem.titleEn : selectedItem.title}
                                </h3>
                            </div>
                            <p className="mt-1 text-xs text-white/60">
                                {isEn ? selectedItem.flagshipDescEn : selectedItem.flagshipDesc}
                            </p>
                        </div>

                        {selectedItem.flagshipHref && selectedItem.flagshipHref !== '#contact' && (
                            <Link
                                href={selectedItem.flagshipHref}
                                className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD23F]/40 bg-[#FFD23F]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black self-start sm:self-auto"
                            >
                                <span>{isEn ? 'All Direction Pages ↗' : 'Все страницы направления ↗'}</span>
                            </Link>
                        )}
                    </div>

                    {/* Catalog Rows */}
                    <div className="mt-4 divide-y divide-white/5">
                        {selectedItem.items.map((sub, index) => (
                            <div
                                key={sub.id}
                                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 transition-all hover:bg-white/[0.02] rounded-xl px-2 sm:px-3"
                            >
                                {/* Left part: Image + Titles */}
                                <div className="flex items-center gap-4">
                                    <span className="hidden sm:block font-mono text-xs text-white/30 w-4">
                                        0{index + 1}
                                    </span>
                                    <div className="relative h-16 w-24 sm:h-20 sm:w-32 shrink-0 overflow-hidden rounded-xl border border-white/10">
                                        <Image
                                            src={sub.image}
                                            alt={isEn ? sub.titleEn : sub.title}
                                            fill
                                            sizes="128px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-bold uppercase text-[#FFD23F]">
                                            {isEn ? sub.tagEn : sub.tag}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD23F] transition-colors">
                                                {isEn ? sub.titleEn : sub.title}
                                            </h4>
                                            {sub.hasL3 && (
                                                <span className="flex items-center gap-0.5 rounded bg-[#22c55e]/20 px-1.5 py-0.5 text-[9px] font-extrabold text-[#22c55e]">
                                                    <CheckCircle2 className="h-2.5 w-2.5" />
                                                    L3
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs text-white/60 line-clamp-1 max-w-xl">
                                            {isEn ? sub.descEn : sub.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Right part: Price & Button */}
                                <div className="flex items-center justify-between md:justify-end gap-4 pl-4 sm:pl-0">
                                    <div className="text-left md:text-right">
                                        <span className="font-mono text-sm sm:text-base font-bold text-white">
                                            {isEn ? sub.priceEn : sub.price}
                                        </span>
                                        <p className="text-[10px] text-white/40">
                                            {isEn ? 'fixed in GEL' : 'фикс в лари'}
                                        </p>
                                    </div>

                                    {sub.hasL3 ? (
                                        <Link
                                            href={sub.href}
                                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FFD23F] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white shadow-sm"
                                        >
                                            <span>{isEn ? 'Open Page ↗' : 'Открыть ↗'}</span>
                                        </Link>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => openQuickDrawer(sub)}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                        >
                                            <MessageSquare className="h-3.5 w-3.5" />
                                            <span>{isEn ? 'Express Overview' : 'Обзор'}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
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
