'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, DirectionItem, ChooserTab, SubServiceItem } from './chooserData';
import { QuickServiceDrawer, QuickServiceData } from '@/components/gazeta/QuickServiceDrawer';
import { getQuickServiceData } from '@/constants/quickServicesData';

interface ChooserLayoutCinemaProps {
    lang?: 'ru' | 'en';
}

export function ChooserLayoutCinema({ lang = 'ru' }: ChooserLayoutCinemaProps) {
    const isEn = lang === 'en';
    const [activeTab, setActiveTab] = useState<ChooserTab>('services');
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [drawerData, setDrawerData] = useState<QuickServiceData | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const openQuickDrawer = (sub: SubServiceItem) => {
        const data = getQuickServiceData(sub.id, lang);
        setDrawerData(data);
        setIsDrawerOpen(true);
    };

    const currentList = activeTab === 'services' ? SERVICES_DATA : INDUSTRIES_DATA;
    const selectedItem = currentList[selectedIndex] || currentList[0];

    // Reset index on tab switch
    const handleTabSwitch = (tab: ChooserTab) => {
        setActiveTab(tab);
        setSelectedIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const handleCardClick = (idx: number) => {
        setSelectedIndex(idx);
        if (scrollContainerRef.current) {
            const cardEl = scrollContainerRef.current.children[idx] as HTMLElement;
            if (cardEl) {
                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    return (
        <section className="relative w-full border-t border-b border-white/10 bg-[#08080A] py-10 md:py-16 overflow-hidden">
            {/* Ambient gold glow in the background */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,210,63,0.09),transparent_70%)] blur-3xl"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* 1. Header & Glass Pill Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD23F]/30 bg-[#FFD23F]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD23F]">
                            <Sparkles className="h-3.5 w-3.5" />
                            {isEn ? 'Cinema Snap Carousel • Layout #1' : 'Кинематографичный Слайдер • Макет №1'}
                        </div>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                            {isEn ? 'Explore Production Formats' : 'Каталог форматов и направлений'}
                        </h2>
                        <p className="mt-1.5 text-xs md:text-sm text-white/60">
                            {isEn
                                ? 'Swipe horizontally to select a format. Live L3 pages are prioritized.'
                                : 'Листайте влево-вправо. Услуги с готовыми страницами 3-го уровня открываются сразу.'}
                        </p>
                    </div>

                    {/* Segmented Glass Pill (Height 40px) */}
                    <div className="inline-flex h-10 items-center rounded-full border border-white/15 bg-white/[0.04] p-1 backdrop-blur-md self-start md:self-auto shadow-inner">
                        <button
                            type="button"
                            onClick={() => handleTabSwitch('services')}
                            className={`flex h-full items-center gap-1.5 rounded-full px-5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeTab === 'services'
                                    ? 'bg-[#FFD23F] text-black shadow-[0_2px_12px_rgba(255,210,63,0.35)]'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            <span>⚡</span>
                            <span>{isEn ? 'Services' : 'Услуги'}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTabSwitch('industries')}
                            className={`flex h-full items-center gap-1.5 rounded-full px-5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeTab === 'industries'
                                    ? 'bg-[#FFD23F] text-black shadow-[0_2px_12px_rgba(255,210,63,0.35)]'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            <span>🏢</span>
                            <span>{isEn ? 'Industries' : 'Индустрии'}</span>
                        </button>
                    </div>
                </div>

                {/* 2. Middle: Large Cinema Snap Carousel (Horizontal Swipe) */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory py-3 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {currentList.map((item, idx) => {
                            const isSelected = selectedIndex === idx;
                            return (
                                <div
                                    key={item.key}
                                    onClick={() => handleCardClick(idx)}
                                    className={`group cursor-pointer shrink-0 snap-center w-[270px] md:w-[320px] h-[340px] md:h-[370px] rounded-[22px] border relative overflow-hidden transition-all duration-300 ${
                                        isSelected
                                            ? 'border-[#FFD23F] scale-[1.02] md:scale-[1.03] shadow-[0_0_35px_rgba(255,210,63,0.22)]'
                                            : 'border-white/10 opacity-75 hover:opacity-100 hover:border-white/30'
                                    }`}
                                >
                                    {/* Card Background Image */}
                                    <Image
                                        src={item.image}
                                        alt={isEn ? item.titleEn : item.title}
                                        fill
                                        sizes="(max-width: 768px) 270px, 320px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Rich Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

                                    {/* Top Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                                            <span>{item.icon}</span>
                                            <span>{isEn ? item.startingPriceEn : item.startingPrice}</span>
                                        </span>
                                        {item.readyCount > 0 ? (
                                            <span className="flex items-center gap-1 rounded-full border border-[#FFD23F]/40 bg-[#FFD23F]/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#FFD23F] backdrop-blur-md">
                                                <CheckCircle2 className="h-3 w-3" />
                                                {isEn ? item.badgeEn : item.badge}
                                            </span>
                                        ) : (
                                            <span className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/50 backdrop-blur-md">
                                                {isEn ? 'Custom' : 'По задаче'}
                                            </span>
                                        )}
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="absolute bottom-4 left-4 right-4 text-left">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            {isEn ? 'Category' : 'Направление'}
                                        </p>
                                        <h3 className="mt-0.5 text-xl font-bold text-white md:text-2xl">
                                            {isEn ? item.titleEn : item.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-relaxed">
                                            {isEn ? item.flagshipDescEn : item.flagshipDesc}
                                        </p>

                                        <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD23F]">
                                            <span>{isSelected ? (isEn ? 'Active Selection' : 'Выбрано') : (isEn ? 'Click to View' : 'Нажмите для обзора')}</span>
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Bottom: Showcase Tray for Sub-Services */}
                <div className="mt-8 md:mt-12 rounded-[24px] border border-white/10 bg-[#101014]/90 p-5 md:p-8 backdrop-blur-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFD23F]/30 bg-[#FFD23F]/10 text-xl">
                                {selectedItem.icon}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold text-white md:text-xl">
                                    {isEn ? selectedItem.titleEn : selectedItem.title} — {isEn ? 'Available Formats' : 'Доступные форматы'}
                                </h3>
                                <p className="text-xs text-white/60">
                                    {isEn
                                        ? `Starting from ${selectedItem.startingPriceEn} • Fixed pricing in GEL`
                                        : `Фиксированные цены ${selectedItem.startingPrice} • Готовность от 24ч`}
                                </p>
                            </div>
                        </div>

                        {selectedItem.flagshipHref && selectedItem.flagshipHref !== '#contact' && (
                            <Link
                                href={selectedItem.flagshipHref}
                                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                            >
                                <span>{isEn ? 'All Direction Services' : 'Все форматы направления'}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                        )}
                    </div>

                    {/* Sub-Services 2x2 Grid */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {selectedItem.items.map((sub) => (
                            <div
                                key={sub.id}
                                className="group relative flex flex-col justify-between rounded-[18px] border border-white/10 bg-[#16161A] p-4 transition-all hover:border-[#FFD23F]/50 hover:bg-[#1A1A20]"
                            >
                                <div>
                                    {/* Thumbnail */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] border border-white/5">
                                        <Image
                                            src={sub.image}
                                            alt={isEn ? sub.titleEn : sub.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FFD23F] backdrop-blur-sm">
                                            {isEn ? sub.tagEn : sub.tag}
                                        </div>
                                        {sub.hasL3 && (
                                            <div className="absolute top-2 right-2 rounded-md bg-[#22c55e] px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black">
                                                L3 LIVE
                                            </div>
                                        )}
                                    </div>

                                    {/* Title & Desc */}
                                    <h4 className="mt-3 text-sm font-bold text-white group-hover:text-[#FFD23F] transition-colors">
                                        {isEn ? sub.titleEn : sub.title}
                                    </h4>
                                    <p className="mt-1 text-xs leading-relaxed text-white/60">
                                        {isEn ? sub.descEn : sub.desc}
                                    </p>
                                </div>

                                {/* Price & Action */}
                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                                    <span className="font-mono text-sm font-bold text-white">
                                        {isEn ? sub.priceEn : sub.price}
                                    </span>

                                    {sub.hasL3 ? (
                                        <Link
                                            href={sub.href}
                                            className="inline-flex items-center gap-1 rounded-lg bg-[#FFD23F] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
                                        >
                                            <span>{isEn ? 'Open L3' : 'Открыть'}</span>
                                            <ArrowUpRight className="h-3 w-3" />
                                        </Link>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => openQuickDrawer(sub)}
                                            className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/[0.05] px-2.5 py-1.5 text-[11px] font-medium text-white/80 transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                        >
                                            <MessageSquare className="h-3 w-3" />
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
