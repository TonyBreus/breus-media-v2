"use client";

import { motion } from "framer-motion";
import { Zap, Monitor, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AI() {
    const benefits = [
        {
            title: "Масштаб: x100",
            desc: "Вариации креативов. Один промпт — сотни уникальных изображений и видео.",
            icon: <Zap className="w-8 h-8 text-brand" />
        },
        {
            title: "Виртуализация",
            desc: "То, чего еще нет. Интерьеры, стейджинг, ракурсы, которые невозможно снять.",
            icon: <Monitor className="w-8 h-8 text-brand" />
        },
        {
            title: "Экономия",
            desc: "Тесты гипотез без повторных съемок. Быстрее, дешевле, точнее.",
            icon: <DollarSign className="w-8 h-8 text-brand" />
        }
    ];

    return (
        <section id="ai" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">AI — инструмент скорости</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                    Используем нейросети там, где они дают реальную экономику, а не «эффект ради эффекта».
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-brand/50 transition-colors"
                        >
                            <div className="mb-6 bg-dark inline-block p-4 rounded-xl border border-white/10">{b.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
                            <p className="text-gray-400">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <Link
                    href="#contact?service=AI"
                    className="inline-flex items-center gap-2 text-brand font-semibold hover:text-white transition-colors border-b border-brand pb-1 hover:border-white"
                >
                    Узнать про автоматизацию <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
