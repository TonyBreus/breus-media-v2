"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

const paragraphs = [
    "Breus Media — студия визуального продакшена и AI-контента для бизнеса. Мы работаем с компаниями, которым важно не просто снять красиво — а донести до клиента ценность продукта, пространства или услуги.",
    "В арсенале студии: аэросъёмка, промо-видео, 360°-туры, reels, AI-визуализации и контентные пакеты. Работа начинается с задачи — формат подбирается под неё, а не наоборот.",
    "Если вашей ниши нет в списке — напишите. Почти всегда есть подходящий формат.",
];

export function AboutSection() {
    return (
        <DebugWrapper id={25} label="About Section">
            <section className="relative w-full bg-black py-20 md:py-28 px-6">
                {/* Subtle top border */}
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
                            О студии
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-[2.5rem] font-black uppercase tracking-tight text-white leading-[1.1] mb-10"
                    >
                        Производство контента,{" "}
                        <br className="hidden md:block" />
                        <span className="text-[#D4AF37]">которое работает на задачу.</span>
                    </motion.h2>

                    {/* Body paragraphs */}
                    <div className="space-y-5 mb-10">
                        {paragraphs.map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: 0.18 + i * 0.08 }}
                                className="text-sm md:text-base text-white/60 leading-relaxed"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.42 }}
                    >
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] border border-white/20 text-white hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-300 rounded-full"
                        >
                            О студии подробнее
                            <ArrowUpRight size={14} strokeWidth={2.5} />
                        </Link>
                    </motion.div>
                </div>

                {/* Subtle bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
            </section>
        </DebugWrapper>
    );
}
