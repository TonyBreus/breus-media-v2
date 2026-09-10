"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { droneFaqItems } from "@/components/drone/droneFaqData";

export function DroneFAQExpanded() {
    return (
        <DebugWrapper id={10800} label="Drone FAQ Section">
            <section className="py-10 md:py-24 bg-[#0D0D0D]" id="faq">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-16"
                    >
                        <DebugWrapper id={10801} label="FAQ Header">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight">Частые вопросы</h2>
                            <p className="text-sm md:text-base text-white/65 max-w-xl mx-auto mb-4 leading-relaxed">
                                Ответы на главные вопросы об аэросъёмке дроном в Тбилиси и Грузии: согласования полётов GCAA, съёмка в Ваке и Батуми, FPV-пролёты внутри помещений и выдача 4K-исходников от 24 часов.
                            </p>
                        </DebugWrapper>
                        <div className="w-12 h-1 bg-[#D4A017] mx-auto"></div>
                    </motion.div>

                    <div className="space-y-4">
                        {droneFaqItems.map((item, index) => (
                            <DebugWrapper key={index} id={10810 + index} label={`FAQ Item ${index + 1}`}>
                                <motion.details
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-[#141414] border border-[#2a2a2a] rounded-[12px] p-6 cursor-pointer hover:border-[#D4A017]/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <summary className="list-none flex justify-between items-center font-bold text-sm uppercase tracking-widest text-white/90 group-open:text-[#D4A017] transition-colors">
                                        {item.question}
                                        <span className="group-open:rotate-180 transition-transform duration-300 text-[#D4A017] text-xl">
                                            ↓
                                        </span>
                                    </summary>
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4"
                                    >
                                        {item.answer}
                                    </motion.p>
                                </motion.details>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
