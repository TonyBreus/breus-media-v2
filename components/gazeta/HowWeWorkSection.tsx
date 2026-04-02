"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";

const steps = [
    {
        num: "01",
        title: "Бриф и задача",
        body: "Начинаем с вопросов: что продаётся, кому, где и в какие сроки. Формат выбираем под задачу — не наоборот.",
    },
    {
        num: "02",
        title: "Исследование",
        body: "Изучаем нишу, конкурентный контент и сценарии потребления. AI ускоряет этот этап, но решения принимает человек.",
    },
    {
        num: "03",
        title: "Производство",
        body: "Съёмка, обработка, монтаж — по чёткому техзаданию, без лишних итераций.",
    },
    {
        num: "04",
        title: "Упаковка и сдача",
        body: "Финальные файлы в нужных форматах: горизонталь, вертикаль, обложки, адаптации под каналы.",
    },
];

export function HowWeWorkSection() {
    return (
        <DebugWrapper id={26} label="How We Work Section">
            <section className="relative w-full bg-black py-20 md:py-28 px-6">
                <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

                <div className="max-w-3xl mx-auto">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full bg-[#D4AF37]/5">
                            Как мы работаем
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-[2.5rem] font-black uppercase tracking-tight text-white leading-[1.1] mb-12"
                    >
                        От задачи —{" "}
                        <br className="hidden md:block" />
                        <span className="text-[#D4AF37]">к готовому материалу.</span>
                    </motion.h2>

                    {/* Steps */}
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: 0.12 + i * 0.09 }}
                                className="flex gap-6 py-6 border-b border-white/10 last:border-b-0"
                            >
                                {/* Step number */}
                                <span className="text-[10px] font-bold text-[#D4AF37]/50 tracking-[0.2em] mt-0.5 shrink-0 w-6">
                                    {step.num}
                                </span>

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-1.5">
                                        {step.title}
                                    </p>
                                    <p className="text-sm text-white/55 leading-relaxed">
                                        {step.body}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
            </section>
        </DebugWrapper>
    );
}
