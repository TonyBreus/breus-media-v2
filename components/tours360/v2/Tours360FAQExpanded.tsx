"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { tours360FaqItems } from "@/components/tours360/tours360FaqData";

export function Tours360FAQExpanded() {
    return (
        <DebugWrapper id={12800} label="Tours 360 FAQ Section">
            <section className="py-10 md:py-24 bg-[#0D0D0D]" id="faq">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-16"
                    >
                        <DebugWrapper id={12801} label="FAQ Header">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">Частые вопросы</h2>
                            <p className="text-sm md:text-base text-white/65 max-w-xl mx-auto mb-4 leading-relaxed">
                                Ответы на главные вопросы о создании 360° виртуальных туров в Тбилиси и Грузии: интеграция с Google Street View, сроки сборки и размещение на Booking.
                            </p>
                        </DebugWrapper>
                        <div className="w-12 h-1 bg-[#D4A017] mx-auto"></div>
                    </motion.div>

                    <div className="space-y-4">
                        {tours360FaqItems.map((item, index) => (
                            <DebugWrapper key={index} id={12810 + index} label={`FAQ Item ${index + 1}`}>
                                <motion.details
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-[#141414] border border-[#2a2a2a] rounded-[12px] p-6 cursor-pointer hover:border-[#D4A017]/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <summary className="list-none flex justify-between items-center font-bold text-sm uppercase tracking-widest text-white/90 group-open:text-[#D4A017] transition-colors pr-6 relative">
                                        {item.question}
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 group-open:rotate-180 transition-transform duration-300 text-[#D4A017] text-xl">
                                            ↓
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-white/60 text-xs md:text-sm leading-relaxed border-t border-[#2a2a2a] pt-4 font-medium">
                                        {item.answer}
                                    </p>
                                </motion.details>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
