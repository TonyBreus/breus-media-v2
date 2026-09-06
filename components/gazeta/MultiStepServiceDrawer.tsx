'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export type SubFormatItem = {
    title: string;
    desc: string;
    price: string;
    href: string;
    isL3: boolean;
};

export type DrawerServiceData = {
    key: string;
    title: string;
    category?: string;
    description: string;
    bullets: string[];
    price: string;
    l2Href?: string;
    l2Label?: string;
    formats: SubFormatItem[];
};

type MultiStepServiceDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    data: DrawerServiceData | null;
    lang?: 'ru' | 'en';
};

export const MultiStepServiceDrawer = ({
    isOpen,
    onClose,
    data,
    lang = 'ru',
}: MultiStepServiceDrawerProps) => {
    const isEn = lang === 'en';
    const [currentStep, setCurrentStep] = useState<0 | 1>(0);

    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            // iOS Safari: position:fixed prevents elastic bounce under the overlay
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            document.body.classList.add('drawer-open');
            window.dispatchEvent(new CustomEvent('drawer-open-change', { detail: { isOpen: true } }));
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            document.body.classList.remove('drawer-open');
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            window.dispatchEvent(new CustomEvent('drawer-open-change', { detail: { isOpen: false } }));
        }
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            document.body.classList.remove('drawer-open');
            if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
            window.dispatchEvent(new CustomEvent('drawer-open-change', { detail: { isOpen: false } }));
        };
    }, [isOpen]);

    if (!data) return null;

    const whatsappMessage = encodeURIComponent(
        isEn
            ? `Hello! I would like to consult regarding: ${data.title}.`
            : `Здравствуйте! Хочу проконсультироваться по направлению: ${data.title}.`
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Тёмный блюр-фон */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Мобильная шторка */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 90) onClose();
                        }}
                        data-drawer-open="true"
                        className="fixed bottom-0 left-0 right-0 z-[201] mx-auto max-w-lg h-[75vh] max-h-[75vh] flex flex-col justify-between rounded-t-[26px] border-t border-white/15 bg-[#0D0D0D] p-5 pb-6 shadow-2xl md:max-w-xl md:p-6"
                    >
                        {/* Drag Handle */}
                        <div className="shrink-0 w-12 h-1.5 rounded-full bg-white/25 mx-auto mb-3" />

                        {/* Шапка шторки */}
                        <div className="shrink-0 flex items-start justify-between gap-3">
                            <div>
                                {data.category && (
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                        {data.category}
                                    </span>
                                )}
                                <h3 className="mt-0.5 text-lg font-bold text-white md:text-xl">
                                    {data.title}
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Контейнер слайдов с горизонтальной анимацией */}
                        <div className="relative mt-3 flex-1 min-h-0 overflow-hidden">
                            <AnimatePresence mode="wait" initial={false}>
                                {currentStep === 0 ? (
                                    /* ── СЛАЙД 1: ЭКСПРЕСС-ОБЗОР ── */
                                    <motion.div
                                        key="step-0"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={(_, info) => {
                                            if (info.offset.x < -60) setCurrentStep(1);
                                        }}
                                        className="absolute inset-0 h-full w-full flex flex-col space-y-3.5"
                                    >
                                        <p className="shrink-0 text-xs leading-relaxed text-white/80 md:text-sm">
                                            {data.description}
                                        </p>

                                        <div className="shrink-0 rounded-[14px] border border-white/10 bg-[#141414] p-3.5">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                                {isEn ? 'Key advantages:' : 'Что даёт формат:'}
                                            </span>
                                            <ul className="mt-2 space-y-1.5">
                                                {data.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-white/90">
                                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFD23F]" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between pt-1 mt-auto">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-wider text-white/50">
                                                    {isEn ? 'Starting rate' : 'Стоимость'}
                                                </span>
                                                <div className="text-lg font-bold text-[#FFD23F]">{data.price}</div>
                                            </div>
                                            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-400">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                                </span>
                                                {isEn ? '5-min response' : 'Ответ за 5 минут'}
                                            </div>
                                        </div>

                                        <div className="shrink-0 flex flex-col gap-2 pt-1">
                                            <div className="grid grid-cols-2 gap-2">
                                                <a
                                                    href={`https://wa.me/995501103183?text=${whatsappMessage}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center justify-center gap-1.5 rounded-[12px] bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] active:scale-95"
                                                >
                                                    <MessageCircle className="h-4 w-4 fill-current" />
                                                    WhatsApp
                                                </a>
                                                <button
                                                    onClick={() => setCurrentStep(1)}
                                                    className="inline-flex items-center justify-center gap-1.5 rounded-[12px] bg-white/10 border border-white/15 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 active:scale-95"
                                                >
                                                    {isEn ? 'Formats' : 'Форматы'} ({data.formats.length})
                                                    <ArrowRight className="h-3.5 w-3.5 text-[#FFD23F]" />
                                                </button>
                                            </div>

                                            {data.l2Href && (
                                                <Link
                                                    href={data.l2Href}
                                                    onClick={onClose}
                                                    className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#FFD23F] py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white active:scale-95 shadow-md"
                                                >
                                                    <span>{data.l2Label || (isEn ? 'Explore direction page →' : 'Открыть страницу направления →')}</span>
                                                </Link>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* ── СЛАЙД 2: КАТАЛОГ СУБ-УСЛУГ И L3 СТРАНИЦ ── */
                                    <motion.div
                                        key="step-1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={(_, info) => {
                                            if (info.offset.x > 60) setCurrentStep(0);
                                        }}
                                        className="absolute inset-0 h-full w-full flex flex-col space-y-3"
                                    >
                                        <div className="shrink-0 flex items-center justify-between pb-1">
                                            <button
                                                onClick={() => setCurrentStep(0)}
                                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFD23F] hover:underline"
                                            >
                                                <ArrowLeft className="h-3.5 w-3.5" />
                                                {isEn ? 'Back to overview' : 'Назад к описанию'}
                                            </button>
                                            <span className="text-[10px] uppercase tracking-wider text-white/50">
                                                {isEn ? 'Available formats' : 'Готовые форматы'}
                                            </span>
                                        </div>

                                        <div className="relative flex-1 min-h-0">
                                            <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none z-10" />
                                            <div className="h-full overflow-y-auto space-y-2 pr-1 pb-2 [scrollbar-width:none]">
                                            {data.formats.map((fmt, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between rounded-[12px] border border-white/10 bg-[#141414] p-3 transition-colors hover:border-[#FFD23F]/40"
                                                >
                                                    <div className="min-w-0 flex-1 pr-2">
                                                        <div className="text-xs font-bold text-white truncate">{fmt.title}</div>
                                                        <div className="text-[11px] text-white/60 truncate">{fmt.desc}</div>
                                                        <div className="mt-0.5 text-[11px] font-semibold text-[#FFD23F]">{fmt.price}</div>
                                                    </div>
                                                    {fmt.isL3 ? (
                                                        <Link
                                                            href={fmt.href}
                                                            onClick={onClose}
                                                            className="shrink-0 rounded-[8px] bg-[#FFD23F] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
                                                        >
                                                            {isEn ? 'Open ↗' : 'Открыть ↗'}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            href={`#contact?service=${encodeURIComponent(fmt.title)}`}
                                                            onClick={onClose}
                                                            className="shrink-0 rounded-[8px] border border-white/20 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                                        >
                                                            {isEn ? 'Quote' : 'Смета'}
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                            </div>
                                        </div>

                                        {data.l2Href && (
                                            <div className="shrink-0 pt-2 border-t border-white/10">
                                                <Link
                                                    href={data.l2Href}
                                                    onClick={onClose}
                                                    className="w-full flex items-center justify-between rounded-[12px] bg-[#1a1a1f] border border-[#FFD23F]/35 p-2.5 px-3 transition-all hover:border-[#FFD23F] hover:bg-[#222228] group"
                                                >
                                                    <div className="min-w-0 pr-2">
                                                        <div className="text-[11px] font-bold text-white group-hover:text-[#FFD23F] transition-colors truncate">
                                                            {isEn ? "All formats, pricing & portfolio" : "Все форматы направления и прайс"}
                                                        </div>
                                                        <div className="text-[10px] text-white/50 truncate">
                                                            {data.l2Label || (isEn ? "Go to master hub" : "Перейти на страницу направления")}
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-[#FFD23F]">
                                                        <span>{isEn ? "All formats →" : "Все форматы →"}</span>
                                                        <ChevronRight className="h-3.5 w-3.5" />
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Индикаторы слайдов (Dots) */}
                        <div className="shrink-0 mt-3 flex justify-center gap-1.5">
                            <button
                                onClick={() => setCurrentStep(0)}
                                aria-label="Step 1"
                                className={`h-1.5 rounded-full transition-all ${currentStep === 0 ? 'w-5 bg-[#FFD23F]' : 'w-1.5 bg-white/20'}`}
                            />
                            <button
                                onClick={() => setCurrentStep(1)}
                                aria-label="Step 2"
                                className={`h-1.5 rounded-full transition-all ${currentStep === 1 ? 'w-5 bg-[#FFD23F]' : 'w-1.5 bg-white/20'}`}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
