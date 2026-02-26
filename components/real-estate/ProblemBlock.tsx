"use client";

import { motion } from "framer-motion";
import { AlertTriangle, EyeOff, Ghost, MoveHorizontal } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

const problems = [
    {
        icon: AlertTriangle,
        title: "Эффект «Котлована»",
        desc: "Инвестор боится вкладывать, когда не видит динамики стройки.",
    },
    {
        icon: EyeOff,
        title: "Слепые зоны",
        desc: "3D-рендеры красивые, но они часто врут об окружении.",
    },
    {
        icon: Ghost,
        title: "Белый шум",
        desc: "В «белом каркасе» клиент не чувствует габаритов и уюта.",
    },
];

export default function ProblemBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-12 text-white"
                        >
                            Почему{" "}
                            <span className="text-neon-cyan">80%</span>{" "}
                            лидов уходят
                            <br />
                            с вашего сайта?
                        </motion.h2>

                        <div className="space-y-8">
                            {problems.map((problem, i) => (
                                <motion.div
                                    key={problem.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-purple/50 group-hover:bg-neon-purple/5 transition-all duration-300">
                                        <problem.icon className="w-5 h-5 text-neon-purple" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {problem.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {problem.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Slider Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <MediaPlaceholder
                            icon={MoveHorizontal}
                            label='INTERACTIVE SLIDER: Left (Grey Concrete) vs Right (AI Luxury Interior). Label: EXPECTATION vs REALITY'
                            aspect="square"
                            className="!rounded-3xl"
                        />
                        {/* Slider labels */}
                        <div className="flex justify-between mt-4 px-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                                Ожидание
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-neon-cyan">
                                Реальность
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
