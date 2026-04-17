"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

const TITLE_CHARS = "Breus Media".split("");

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Start shrinking text when scrolled down hero 
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.25, 0.25]);

    // Animate straight up until it goes out of screen
    const yTranslate = useTransform(scrollYProgress, [0, 0.4, 1], ["70vh", "-60vh", "-60vh"]);

    // Fade out original opacity ONLY for the scroll indicator down arrow
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <DebugWrapper id={11} label="Hero Section">
            <section ref={containerRef} className="relative w-full h-[100vh] overflow-x-clip">
                {/* Kinetic Text anchored perfectly under the header, translating to become the logo */}
                <DebugWrapper id={13} label="Kinetic Typography" className="fixed top-[64px] left-0 z-[70] flex w-full justify-center pointer-events-none">
                    <motion.div
                        style={{ scale, y: yTranslate, transformOrigin: 'top center' }}
                        className="text-[11vw] font-black leading-none tracking-[0.04em] md:tracking-[0.18em] lg:tracking-[0.22em] uppercase whitespace-nowrap font-sans text-white drop-shadow-md"
                        aria-hidden="true"
                    >
                        {TITLE_CHARS.map((char, i) => (
                            <motion.span
                                key={i}
                                className="inline-block"
                                initial={{
                                    opacity: prefersReducedMotion ? 1 : 0,
                                    y: prefersReducedMotion ? 0 : 24,
                                }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: prefersReducedMotion ? 0 : i * 0.055,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </DebugWrapper>

                <div className="sticky top-0 w-full h-screen overflow-hidden flex items-end justify-center bg-zinc-950">

                    {/* Background Video */}
                    <DebugWrapper id={12} label="Video Background" className="absolute top-0 left-0 w-full h-full z-0">
                        {/* Local hero video — swap file to update: /public/media/hero/video/breus-hero-demo.mp4 */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/media/hero/posters/breus-hero-demo-poster.jpg"
                            className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center opacity-50 scale-[1.03] md:scale-100"
                        >
                            <source src="/media/hero/video/breus-hero-demo.mp4" type="video/mp4" />
                            {/* Fallback: shows poster (black bg) if file is missing — no layout break */}
                        </video>
                        {/* Bottom-to-top darkening for BREUS MEDIA readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        {/* Top darkening for H1/subtitle readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />
                    </DebugWrapper>

                    {/* SEO Content Block — centered, fades on scroll */}
                    <motion.div
                        style={{ opacity: indicatorOpacity }}
                        className="absolute top-[12%] left-0 w-full flex flex-col items-center text-center px-5 z-10 md:top-[14%]"
                    >
                        {/* H1 — extrabold, -0.02em, clamp */}
                        <h1 className="mx-auto mb-[clamp(12px,2.5vw,22px)] max-w-[15ch] text-[clamp(1.5rem,7vw,4.5rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-[#F5F4F0] [text-shadow:0_2px_24px_rgba(0,0,0,0.9)] md:max-w-[22ch]">
                            Агентство визуального продакшена и <span className="text-[#C9A84C]">AI-контента</span> в Тбилиси
                        </h1>

                        {/* Разделитель */}
                        <div className="w-10 h-px bg-[#C9A84C]/40 mb-[clamp(10px,2vw,18px)]" />

                        {/* H2 — semibold, двустрочный тезис */}
                        <p className="mb-[clamp(10px,2.5vw,20px)] max-w-[26ch] text-[clamp(1rem,4vw,1.75rem)] font-semibold leading-[1.3] tracking-[-0.01em] text-[#F5F4F0] [text-shadow:0_1px_12px_rgba(0,0,0,0.95)] md:max-w-none">
                            Снимаем бизнес с земли и с воздуха.<br />
                            Монтируем, упаковываем, добавляем AI.
                        </p>

                        {/* Body — 400 weight, #C8C7C2, 1.65 line-height */}
                        <p className="mb-[clamp(12px,3vw,24px)] max-w-[32ch] text-[clamp(0.875rem,2.5vw,1.125rem)] font-normal leading-[1.65] text-[#C8C7C2] [text-shadow:0_1px_10px_rgba(0,0,0,0.9)] md:max-w-[48ch]">
                            От рекламной кампании и ведения соцсетей —<br className="hidden sm:block" /> до мониторинга стройки и инвестиционного пакета.
                        </p>


                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <DebugWrapper id={14} label="Scroll Indicator" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                        <motion.div
                            style={{ opacity: indicatorOpacity }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md"
                        >
                            <ArrowDown className="w-5 h-5 text-white" />
                        </motion.div>
                    </DebugWrapper>

                </div>
            </section>
        </DebugWrapper>
    );
}
