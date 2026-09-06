"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

type GazetaLang = "ru" | "en";

const aboutCopy: Record<GazetaLang, {
    eyebrow: string;
    heading: string;
    paragraph1: React.ReactNode;
    paragraph2: React.ReactNode;
    timing: string;
    cta: string;
}> = {
    ru: {
        eyebrow: "ОБ АГЕНТСТВЕ",
        heading: "СОЗДАЁМ ЦИФРОВОЕ ПРИСУТСТВИЕ, КОТОРОЕ РАБОТАЕТ НА БИЗНЕС.",
        paragraph1: (
            <>
                <strong className="text-white">Breus Media</strong> — ваш партнёр по медиа-упаковке и digital-решениям в Грузии. Мы помогаем девелопменту, отелям, ресторанам, автоиндустрии, медицине и локальным брендам привлекать клиентов, прямые бронирования и продажи.
            </>
        ),
        paragraph2: (
            <>
                Создаём долговечные медиа-активы: 4K аэросъёмку, интерактивные 360° туры, видеообзоры, современные сайты и оцифровку на Google Картах. Показываем реальную ценность вашего продукта так, чтобы доверие возникало ещё до первого визита.
            </>
        ),
        timing: "⏱ Все материалы передаются полностью готовыми к публикации на сайте, картах и в соцсетях — от 24 часов.",
        cta: "Об агентстве подробнее",
    },
    en: {
        eyebrow: "ABOUT THE AGENCY",
        heading: "WE BUILD DIGITAL PRESENCE THAT DRIVES REAL BUSINESS.",
        paragraph1: (
            <>
                <strong className="text-white">Breus Media</strong> is your media packaging and digital solutions partner in Georgia. We help real estate developments, hotels, restaurants, auto dealerships, clinics, and local brands attract clients, direct bookings, and sales.
            </>
        ),
        paragraph2: (
            <>
                We build lasting media assets: 4K aerial filming, interactive 360° tours, video showcases, modern websites, and Google Maps digitization. We highlight your product's true value so trust is established before the first visit.
            </>
        ),
        timing: "⏱ All assets delivered fully ready for publishing on websites, maps, and social media — from 24 hours.",
        cta: "More about the agency",
    },
};

export function AboutSection({ lang = "ru" }: { lang?: GazetaLang }) {
    const copy = aboutCopy[lang];
    return (
        <DebugWrapper id={25} label="About Section">
            <section className="relative w-full bg-transparent px-1 sm:px-4 py-1 md:py-16 flex flex-col items-center justify-center">
                <div className="mx-auto w-full max-w-2xl rounded-[22px] border border-white/10 bg-[#0E0E0E] px-5 py-6 sm:px-6 sm:py-7 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                    {/* Eyebrow badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-2"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FFD23F]">
                            {copy.eyebrow}
                        </span>
                    </motion.div>

                    {/* Heading H2 */}
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="text-lg sm:text-xl font-black uppercase text-white leading-tight mb-3"
                    >
                        {copy.heading}
                    </motion.h2>

                    <div className="mb-3 h-[2px] w-12 bg-[#FFD23F]" />

                    {/* Content Paragraphs */}
                    <div className="mb-4">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.12 }}
                            className="text-xs sm:text-[13px] leading-relaxed text-white/80 mb-2.5"
                        >
                            {copy.paragraph1}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.18 }}
                            className="text-xs sm:text-[13px] leading-relaxed text-white/80 mb-3.5"
                        >
                            {copy.paragraph2}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.24 }}
                            className="text-[11px] sm:text-xs font-medium text-[#FFD23F] mt-3"
                        >
                            {copy.timing}
                        </motion.p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.3 }}
                    >
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-[12px] bg-[#FFD23F] py-2.5 px-5 text-xs font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-white"
                        >
                            {copy.cta}
                            <ArrowUpRight size={14} strokeWidth={2.5} />
                        </Link>
                    </motion.div>
                </div>

                {/* Капсула аудита под блоком «О агентстве» */}
                <div className="w-full max-w-md mx-auto mt-4 px-2 text-center">
                    <a
                        href="/audit"
                        className="inline-flex items-center gap-2 rounded-full border border-[#FFD23F]/35 bg-[#121212] px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="text-[#FFD23F]">⚡ {lang === "en" ? "Free business audit" : "Бесплатный аудит бизнеса"}</span>
                        <span className="text-white/80">·</span>
                        <span className="text-[#FFD23F] underline underline-offset-2">
                            {lang === "en" ? "Personal review within 24h →" : "Персональный разбор за 24 часа →"}
                        </span>
                    </a>
                </div>
            </section>
        </DebugWrapper>
    );
}
