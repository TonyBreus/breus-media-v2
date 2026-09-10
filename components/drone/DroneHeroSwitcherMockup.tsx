'use client';

import { useMemo, useState } from 'react';
import { Manrope } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

const previewItems = droneServiceItems.slice(0, 5);

export const DroneHeroSwitcherMockup = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeService = previewItems[currentIndex] ?? previewItems[0];

    const visibleItems = useMemo(() => {
        if (previewItems.length <= 4) {
            return previewItems.map((item, index) => ({ item, index }));
        }

        const start = (currentIndex - 1 + previewItems.length) % previewItems.length;
        return Array.from({ length: 4 }, (_, offset) => {
            const index = (start + offset) % previewItems.length;
            return { item: previewItems[index], index };
        });
    }, [currentIndex]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
            <AnimatePresence mode="wait">
                <motion.img
                    key={activeService.slug}
                    src={activeService.image}
                    alt={activeService.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 0.68, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/54 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(212,160,23,0.22),transparent_42%)]" />

            <div className="relative z-10 mx-auto grid min-h-screen max-w-[1320px] grid-cols-[minmax(0,0.95fr)_minmax(420px,0.72fr)] items-center gap-14 px-10 py-28">
                <div>
                    <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.28em] text-[#D4A017]">
                        Макет hero / drone-service
                    </p>
                    <h1 className="max-w-[720px] text-[76px] font-bold uppercase leading-[0.9] text-white">
                        Аэросъёмка для бизнеса в Грузии
                    </h1>
                    <div className={`${manrope.className} mt-7 max-w-[680px] space-y-3 text-[17px] leading-[1.65] text-white/82`}>
                        <p>С земли не видно главного: террасу ресторана, масштаб стройки, дефект на крыше.</p>
                        <p>Один полёт даёт материал для рекламы, инвестора, отчёта или удалённого показа.</p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="relative w-full max-w-[480px] overflow-hidden rounded-[10px] border border-white/15 bg-[#090806]/74 shadow-[0_28px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl">
                        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4A017] to-transparent" />
                        <div className="relative border-b border-white/10 px-6 pb-6 pt-6">
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,160,23,0.16),transparent_38%,rgba(255,255,255,0.06)_100%)]" />
                            <div className="relative flex items-center justify-between gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4A017]">
                                    {activeService.category}
                                </span>
                                <span className="tabular-nums text-[12px] font-semibold text-white/62">
                                    {String(currentIndex + 1).padStart(2, '0')}/{String(droneServiceItems.length).padStart(2, '0')}
                                </span>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.slug}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="relative mt-10"
                                >
                                    <p className="max-w-[11ch] text-[46px] font-bold uppercase leading-[0.96] text-white">
                                        {activeService.title}
                                    </p>
                                    <p className={`${manrope.className} mt-5 antialiased text-[16px] font-normal leading-[1.65] text-white/[0.84]`}>
                                        {activeService.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap items-center gap-2">
                                        <span className="border border-white/12 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/68">
                                            {activeService.price}
                                        </span>
                                        {activeService.tag && (
                                            <span className="bg-[#D4A017] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black">
                                                {activeService.tag}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="px-4 pb-4 pt-4">
                            <a
                                href={activeService.primaryHref}
                                className="group flex w-full items-center justify-between rounded-[8px] border border-[#D4A017] bg-[#D4A017] px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition-all hover:border-white hover:bg-white"
                            >
                                <span>Открыть услугу</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>

                            <div className="mt-3 grid gap-2" role="tablist" aria-label="Направления аэросъёмки">
                                {visibleItems.map(({ item, index }) => {
                                    const isActive = index === currentIndex;
                                    return (
                                        <button
                                            key={item.slug}
                                            type="button"
                                            onClick={() => setCurrentIndex(index)}
                                            role="tab"
                                            aria-selected={isActive}
                                            className={`group grid w-full grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[8px] border px-3 py-3 text-left transition-all ${
                                                isActive
                                                    ? 'border-[#D4A017]/68 bg-[#D4A017]/15'
                                                    : 'border-white/10 bg-white/[0.035] hover:border-white/24 hover:bg-white/[0.07]'
                                            }`}
                                        >
                                            <span
                                                className={`tabular-nums text-[11px] font-semibold ${
                                                    isActive ? 'text-[#D4A017]' : 'text-white/38'
                                                }`}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span
                                                className={`text-[13px] font-semibold leading-tight ${
                                                    isActive ? 'text-white' : 'text-white/70'
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                                    isActive ? 'bg-[#D4A017]' : 'bg-white/24 group-hover:bg-white/45'
                                                }`}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
