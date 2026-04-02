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
    const yTranslate = useTransform(scrollYProgress, [0, 0.4, 1], ["65vh", "-60vh", "-60vh"]);

    // Fade out original opacity ONLY for the scroll indicator down arrow
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <DebugWrapper id={11} label="Hero Section">
            <section ref={containerRef} className="relative w-full h-[100vh]">
                {/* Kinetic Text anchored perfectly under the header, translating to become the logo */}
                <DebugWrapper id={13} label="Kinetic Typography" className="fixed w-full flex justify-center z-[70] pointer-events-none top-[64px] left-0 md:mt-0">
                    <motion.h1
                        style={{ scale, y: yTranslate, transformOrigin: 'top center' }}
                        className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-[0.2em] md:tracking-[0.4em] lg:tracking-[0.5em] uppercase whitespace-nowrap font-sans text-white drop-shadow-md"
                        aria-label="Breus Media"
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
                    </motion.h1>
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
                            className="w-full h-full object-cover opacity-50"
                        >
                            <source src="/media/hero/video/breus-hero-demo.mp4" type="video/mp4" />
                            {/* Fallback: shows poster (black bg) if file is missing — no layout break */}
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </DebugWrapper>

                    {/* SEO Content Block — upper half of screen, fades on scroll */}
                    <motion.div
                        style={{ opacity: indicatorOpacity }}
                        className="absolute top-[15%] left-0 w-full flex flex-col items-center text-center px-6 z-10 pointer-events-none"
                    >
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-3 leading-tight drop-shadow-2xl max-w-3xl md:max-w-4xl mx-auto">
                            Агентство визуального продакшена <br className="hidden sm:block" />
                            и <span className="text-[#D4AF37]">AI-контента</span> в Тбилиси
                        </h1>
                        <p className="text-xs md:text-sm text-white/60 font-medium mb-6 max-w-xl leading-relaxed">
                            Видео, аэросъёмка, 360-туры и AI-контент для недвижимости,
                            отелей, ресторанов и брендов по всей Грузии
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className="pointer-events-auto bg-white text-black font-black uppercase tracking-widest px-6 py-3 text-xs hover:bg-[#D4AF37] transition-colors shadow-2xl"
                        >
                            Обсудить проект
                        </motion.a>
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
