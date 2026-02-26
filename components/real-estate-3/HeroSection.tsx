"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";
import Placeholder from "./Placeholder";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
            {/* Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <Placeholder
                    icon={Video}
                    text="ВИДЕО-LOOP. Вертикальный пролет FPV дрона над Батуми"
                    theme="light"
                    className="!rounded-none w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Badge */}
                        <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0066FF] border border-[#0066FF]/20 bg-[#0066FF]/5 px-4 py-1.5 rounded-full mb-8">
                            Breus Media · Real Estate
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.95] mb-6">
                            Продавайте{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
                                «Вид»,
                            </span>
                            <br />
                            пока этаж ещё
                            <br />
                            не построен.
                        </h1>

                        <h2 className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl font-medium">
                            FPV-мониторинг, AI-визуализация и VR-туры, которые ускоряют
                            продажу недвижимости в Тбилиси и Батуми на{" "}
                            <span className="text-[#0066FF] font-bold">30%</span>.
                        </h2>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-bold uppercase text-sm tracking-widest rounded-xl transition-all hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
                        >
                            Получить расчёт ROI
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
