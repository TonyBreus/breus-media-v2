"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
    { value: "68%", label: "быстрее продаются объекты с аэровидео" },
    { value: "94%", label: "больше просмотров объявления" },
    { value: "24ч", label: "доставка готовых файлов" },
];

export function DroneHero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
            {/* Background — dark gradient placeholder with noise feel */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#111318] via-[#0D0D0D] to-[#0D0D0D]" />
                {/* Subtle radial glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00AAFF]/5 rounded-full blur-[120px]" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0D0D0D]/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Caption */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#00AAFF] mb-6"
                >
                    Профессиональная дрон-съёмка · Тбилиси и Батуми · Грузия
                </motion.p>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.1] tracking-tight"
                >
                    Аэросъёмка в Грузии.
                    <br />
                    <span className="text-white/90">Тбилиси. Батуми. Регионы.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed"
                >
                    Профессиональная аэрофото и видеосъёмка для девелоперов, строителей, отелей
                    и агентств недвижимости. Пакеты от 250&nbsp;₾. Файлы за 24&nbsp;часа.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.value}
                            className="border border-white/10 rounded-xl px-6 py-4 text-center min-w-[140px] bg-white/[0.02]"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-[#00AAFF]">
                                {stat.value}
                            </div>
                            <div className="text-xs text-white/50 mt-1 leading-snug max-w-[160px]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="bg-[#00AAFF] text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-200"
                    >
                        Записаться на демо-полёт
                    </a>
                    <a
                        href="#services"
                        className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
                    >
                        Смотреть услуги ↓
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-white/30" />
                </motion.div>
            </motion.div>
        </section>
    );
}
