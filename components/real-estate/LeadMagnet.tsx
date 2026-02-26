"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export default function LeadMagnet() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                        {/* Corner glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon-purple/10 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-cyan/10 rounded-full blur-[80px]" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            {/* Left: Text & Form */}
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6 text-white"
                                >
                                    Ваши конкуренты уже используют{" "}
                                    <span className="text-neon-purple">AI</span>.
                                    <br />
                                    А вы?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 }}
                                    className="text-gray-500 leading-relaxed mb-8"
                                >
                                    Скачайте PDF-отчёт «Топ-5 ошибок визуализации застройщиков
                                    Грузии в 2026 году» и получите пример сметы.
                                </motion.p>

                                {/* Form */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-3"
                                >
                                    <input
                                        type="email"
                                        placeholder="Ваш Email"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                                    />
                                    <button className="flex items-center justify-center gap-2 px-6 py-4 bg-neon-cyan text-black font-black uppercase text-sm tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] whitespace-nowrap">
                                        Получить Отчёт
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            </div>

                            {/* Right: PDF Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <MediaPlaceholder
                                    icon={FileText}
                                    label="IMAGE: 3D Mockup of a floating PDF book with glossy cover"
                                    aspect="square"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
