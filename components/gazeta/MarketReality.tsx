"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";

const stats = [
    "93% клиентов изучают бизнес онлайн до первого визита",
    "Объекты с видео продаются на 68% быстрее",
    "Бизнес без визуала теряет до 70% клиентов на этапе выбора",
];

export function MarketReality() {
    return (
        <DebugWrapper id={15} label="Market Reality Section">
            <section id="market-reality" className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-10"
                    >
                        <span className="px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5">
                            Реальность рынка 2026
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] text-white mb-14"
                    >
                        Люди не идут туда,
                        <br />
                        где не понимают,
                        <br />
                        <span className="text-[#D4AF37]">что их ждёт.</span>
                    </motion.h2>

                    {/* Stats */}
                    <div className="space-y-6">
                        {stats.map((stat, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                                className="text-base md:text-lg lg:text-xl text-gray-400 font-medium leading-relaxed"
                            >
                                {stat}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
