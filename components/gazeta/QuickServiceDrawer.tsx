'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export type QuickDrawerItem = {
    key?: string;
    title: string;
    category?: string;
    description: string;
    bullets: string[];
    price: string;
    primaryHref?: string;
    hasL3?: boolean;
};

// Backwards compatibility alias
export type QuickServiceData = QuickDrawerItem;

type QuickServiceDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    data: QuickDrawerItem | null;
    lang?: 'ru' | 'en';
};

export const QuickServiceDrawer = ({
    isOpen,
    onClose,
    data,
    lang = 'ru',
}: QuickServiceDrawerProps) => {
    const isEn = lang === 'en';

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!data) return null;

    const whatsappMessage = encodeURIComponent(
        isEn
            ? `Hello! I would like to learn more and calculate a quote for: ${data.title}.`
            : `Здравствуйте! Хочу узнать подробнее и рассчитать смету по направлению: ${data.title}.`
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Bottom Sheet */}
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
                        className="fixed bottom-0 left-0 right-0 z-[201] mx-auto max-w-lg rounded-t-[26px] border-t border-white/15 bg-[#0D0D0D] p-5 pb-8 shadow-2xl md:max-w-xl md:p-6"
                    >
                        {/* Drag Handle */}
                        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20" />

                        <div className="flex items-start justify-between gap-3">
                            <div>
                                {data.category && (
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F] md:text-[11px]">
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

                        {/* Description */}
                        <p className="mt-2.5 text-xs leading-relaxed text-white/80 md:text-sm">
                            {data.description}
                        </p>

                        {/* Deliverables / Options */}
                        <div className="mt-3.5 rounded-[14px] border border-white/10 bg-[#141414] p-3.5 md:p-4">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50 md:text-[11px]">
                                {isEn ? 'Key formats & inclusions:' : 'Ключевые форматы и состав:'}
                            </span>
                            <ul className="mt-2 space-y-1.5 md:space-y-2">
                                {data.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-white/90 md:text-[13px]">
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFD23F]" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pricing & Speed Badge */}
                        <div className="mt-3.5 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] uppercase tracking-wider text-white/50 md:text-[11px]">
                                    {isEn ? 'Starting rate' : 'Стоимость'}
                                </span>
                                <div className="text-lg font-bold text-[#FFD23F] md:text-xl">{data.price}</div>
                            </div>
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-400 md:text-xs">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                {isEn ? '5-min response' : 'Ответ за 5 минут'}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-4.5 grid grid-cols-2 gap-2.5 pt-1">
                            <a
                                href={`https://wa.me/995501103183?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] active:scale-95"
                            >
                                <MessageCircle className="h-4 w-4 fill-current" />
                                WhatsApp
                            </a>

                            {data.hasL3 && data.primaryHref && data.primaryHref !== '#contact' ? (
                                <Link
                                    href={data.primaryHref}
                                    onClick={onClose}
                                    className="inline-flex items-center justify-center gap-1.5 rounded-[12px] bg-[#FFD23F] py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] active:scale-95"
                                >
                                    {isEn ? 'Full service' : 'Открыть услугу'}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            ) : (
                                <a
                                    href={`#contact?service=${encodeURIComponent(data.title)}`}
                                    onClick={onClose}
                                    className="inline-flex items-center justify-center rounded-[12px] border border-[#FFD23F] bg-[#FFD23F]/10 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFD23F] transition-colors hover:bg-[#FFD23F] hover:text-black active:scale-95"
                                >
                                    {isEn ? 'Get quote' : 'Рассчитать смету'}
                                </a>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
