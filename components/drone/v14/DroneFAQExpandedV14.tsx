"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { droneFaqItems } from "@/components/drone/droneFaqData";

export function DroneFAQExpandedV14() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <DebugWrapper id={10800} label="Drone FAQ Section V14">
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
                        {droneFaqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <DebugWrapper key={index} id={10810 + index} label={`FAQ Item ${index + 1}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => toggleFaq(index)}
                                        className={`bg-[#141414] border rounded-[12px] p-5 md:p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                                            isOpen ? 'border-[#D4A017]/50' : 'border-[#2a2a2a] hover:border-white/20'
                                        }`}
                                    >
                                        <div className={`flex justify-between items-center font-bold text-[13px] md:text-sm uppercase tracking-widest transition-colors ${isOpen ? 'text-[#D4A017]' : 'text-white/90'}`}>
                                            {item.question}
                                            <span className={`transition-transform duration-300 text-[#D4A017] text-xl ml-4 shrink-0 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                                                ↓
                                            </span>
                                        </div>
                                        <div 
                                            className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr] mt-0'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className={`text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </DebugWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
