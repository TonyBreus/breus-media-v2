"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GazetaLang, FaqItem, gazetaFaqItems } from "./gazetaCatalogData";
export type { FaqItem };
export { gazetaFaqItems };

interface GazetaFaqSectionProps {
    lang?: GazetaLang;
    className?: string;
}

export function GazetaFaqSection({ lang = "ru", className = "" }: GazetaFaqSectionProps) {
    const isEn = lang === "en";
    const items = gazetaFaqItems[lang] ?? gazetaFaqItems.ru;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className={`w-full max-w-3xl mx-auto rounded-[24px] border border-white/10 bg-[#0C0C0E] p-5 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.6)] scroll-mt-20 md:scroll-mt-28 ${className}`}
        >
            <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#FFD23F]">
                    {isEn ? "FAQ & ANSWERS" : "ЧАСТЫЕ ВОПРОСЫ"}
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white mt-1">
                    {isEn ? (
                        <>
                            Questions & <span className="text-[#FFD23F]">Answers</span>
                        </>
                    ) : (
                        <>
                            Вопросы и <span className="text-[#FFD23F]">ответы</span>
                        </>
                    )}
                </h2>
                <div className="mt-2 h-[2px] w-12 bg-[#FFD23F]" />
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
                {items.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div key={idx} className="border-b border-white/10 last:border-b-0">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between py-3.5 sm:py-4 text-left group transition-colors"
                                aria-expanded={isOpen}
                            >
                                <span className="text-xs sm:text-sm font-bold tracking-wide text-white group-hover:text-[#FFD23F] transition-colors pr-4">
                                    {item.q}
                                </span>
                                <motion.span
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-[#FFD23F] text-2xl font-light shrink-0 leading-none"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed pb-3.5 sm:pb-4 pr-6 font-normal">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
