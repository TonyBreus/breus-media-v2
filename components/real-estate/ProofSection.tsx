"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "+30%",
        label: "Скорость закрытия сделки",
        color: "text-neon-cyan",
    },
    {
        value: "x2",
        label: "Время на сайте",
        color: "text-neon-purple",
    },
    {
        value: "48h",
        label: "Готовность материалов",
        color: "text-white",
    },
];

export default function ProofSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Divider line top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Background ambient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent" />

            <div className="container mx-auto px-6">
                {/* Stats */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.value}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="text-center group"
                        >
                            <span
                                className={`block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter ${stat.color} transition-all duration-300`}
                                style={{
                                    textShadow:
                                        stat.color === "text-neon-cyan"
                                            ? "0 0 40px rgba(0,255,255,0.3)"
                                            : stat.color === "text-neon-purple"
                                                ? "0 0 40px rgba(189,0,255,0.3)"
                                                : "none",
                                }}
                            >
                                {stat.value}
                            </span>
                            <span className="block text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest mt-4">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-600 text-sm uppercase tracking-widest mt-16 font-bold"
                >
                    Инвестиции в визуал окупаются с первой продажи.
                </motion.p>
            </div>

            {/* Divider line bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
