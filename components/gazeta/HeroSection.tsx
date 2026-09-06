"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

const TITLE_CHARS = "Breus Media".split("");

type GazetaLang = "ru" | "en";

const heroCopy: Record<GazetaLang, {
    headline: string[];
    location: string;
    lead: React.ReactNode;
    sublead: React.ReactNode;
    scrollLabel: string;
    scrollAria: string;
    whatsAppLabel: string;
    whatsAppHref: string;
}> = {
    ru: {
        headline: ["АГЕНТСТВО", "ВИЗУАЛЬНОГО ПРОДАКШЕНА", "И DIGITAL-РЕШЕНИЙ"],
        location: "В ТБИЛИСИ И ПО ВСЕЙ ГРУЗИИ",
        lead: (
            <>
                Снимаем и упаковываем бизнес в 4K: аэросъёмка с дрона,<br />
                интерактивные 360° туры и видео для продвижения.
            </>
        ),
        sublead: (
            <>
                Создаём современные сайты, оцифровываем бизнес на картах Google{" "}
                <br className="hidden sm:block" />
                и внедряем AI-решения для роста продаж.<br className="hidden sm:block" />
                <span className="text-[#F5F4F0] font-medium block mt-1 text-xs md:text-[13.5px]">
                    Показываем ваши объекты так, чтобы клиенты и инвесторы выбирали вас ещё до первого звонка.
                </span>
            </>
        ),
        scrollLabel: "ВЫБЕРИТЕ НАПРАВЛЕНИЕ",
        scrollAria: "Прокрутить к выбору направления",
        whatsAppLabel: "Обсудить проект в WhatsApp",
        whatsAppHref: "https://wa.me/995501103183?text=Здравствуйте!%20Хочу%20обсудить%20проект%20по%20визуальному%20продакшну%20или%20digital-решениям%20в%20Грузии",
    },
    en: {
        headline: ["VISUAL PRODUCTION", "AND DIGITAL SOLUTIONS", "AGENCY"],
        location: "IN TBILISI & ACROSS GEORGIA",
        lead: (
            <>
                Filming and packaging business in 4K: aerial drone cinematography,<br />
                interactive 360° virtual tours, and growth-driven video.
            </>
        ),
        sublead: (
            <>
                We build modern websites, optimize Google Maps profiles,<br className="hidden sm:block" />
                and integrate AI solutions to scale your bookings and sales.<br className="hidden sm:block" />
                <span className="text-[#F5F4F0] font-medium block mt-1 text-xs md:text-[13.5px]">
                    Presenting your business so clients and investors choose you before the very first call.
                </span>
            </>
        ),
        scrollLabel: "CHOOSE A DIRECTION",
        scrollAria: "Scroll to choose a direction",
        whatsAppLabel: "Discuss Project on WhatsApp",
        whatsAppHref: "https://wa.me/995501103183?text=Hello!%20I%20would%20like%20to%20discuss%20a%20visual%20production%20or%20digital%20solutions%20project%20in%20Georgia",
    },
};

export function HeroSection({ lang = "ru" }: { lang?: GazetaLang }) {
    const copy = heroCopy[lang];
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Start shrinking text when scrolled down hero 
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.25, 0.25]);

    // Animate straight up until it goes out of screen
    const yTranslate = useTransform(
        scrollYProgress,
        [0, 0.45, 1],
        [isMobile ? "68vh" : "74vh", "-60vh", "-60vh"]
    );

    // Watermark opacity on start screen (0.25) smoothly increasing to 1 as it scrolls and scales into the logo
    const kineticOpacity = useTransform(scrollYProgress, [0, 0.3], [0.25, 1]);

    // Fade out original opacity ONLY for the scroll indicator down arrow
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const handleScrollToNextScreen = () => {
        const nextSection =
            document.getElementById("niches") ??
            document.getElementById("niches-nav") ??
            document.getElementById("mobile-chooser-anchor");
        if (!nextSection) return;
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <DebugWrapper id={11} label="Hero Section">
            <section ref={containerRef} className="relative w-full h-[100svh] min-h-[100svh] overflow-x-clip">
                {/* Kinetic Text anchored perfectly under the header, translating to become the logo */}
                <DebugWrapper id={13} label="Kinetic Typography" className="fixed top-[64px] left-1/2 z-[70] flex w-full max-w-[94vw] px-4 mx-auto -translate-x-1/2 justify-center pointer-events-none">
                    <motion.div
                        style={{ scale, y: yTranslate, opacity: kineticOpacity, transformOrigin: 'top center' }}
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

                <div className="sticky top-0 w-full h-[100svh] overflow-hidden flex items-end justify-center bg-zinc-950">

                    {/* Background Video */}
                    <DebugWrapper id={12} label="Video Background" className="absolute top-0 left-0 w-full h-[100svh] z-0">
                        {/* Local hero video — swap file to update: /public/media/hero/video/breus-hero-demo.mp4 */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/media/hero/posters/breus-hero-demo-poster.jpg"
                            className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center opacity-[0.65] scale-[1.03] md:scale-100"
                        >
                            <source src="/media/hero/video/breus-hero-demo.mp4" type="video/mp4" />
                            {/* Fallback: shows poster (black bg) if file is missing — no layout break */}
                        </video>
                        {/* Bottom-to-top darkening for BREUS MEDIA readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        {/* Top darkening for H1/subtitle readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent" />
                    </DebugWrapper>

                    {/* Unified Hero Flex Layout — centered & non-overlapping, fades on scroll */}
                    <motion.div
                        style={{ opacity: indicatorOpacity }}
                        className="relative z-10 mx-auto flex h-full w-full max-w-[880px] flex-col justify-center items-center px-4 pt-10 sm:pt-14 pb-8 text-center"
                    >
                        {/* Central SEO Content Block */}
                        <div className="flex w-full flex-col items-center">
                            {/* H1 + Location Badge lifted up towards clock capsule (+10% higher) */}
                            <div className="relative -top-2.5 sm:-top-3.5 flex flex-col items-center mb-1 sm:mb-1.5">
                                <h1 className="mx-auto max-w-[16ch] md:max-w-[22ch] text-[clamp(1.35rem,5.2vw,3.8rem)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-[#F5F4F0] [text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
                                    <motion.span
                                        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: 0.6, delay: 0 * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className="block"
                                    >
                                        {copy.headline[0]}
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: 0.6, delay: 1 * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className="block"
                                    >
                                        {copy.headline[1]}
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        transition={{ duration: 0.6, delay: 2 * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className="block"
                                    >
                                        {copy.headline[2].includes("DIGITAL") ? (
                                            <>
                                                {copy.headline[2].split("DIGITAL")[0]}
                                                <span className="text-[#C9A84C]">DIGITAL</span>
                                                {copy.headline[2].split("DIGITAL").slice(1).join("DIGITAL")}
                                            </>
                                        ) : (
                                            <span className="text-[#C9A84C]">{copy.headline[2]}</span>
                                        )}
                                    </motion.span>
                                </h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.6, delay: 3 * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="mt-1.5 md:mt-2 inline-flex items-center rounded-[6px] border border-[#C9A84C]/78 py-0.5 px-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#C9A84C] [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]"
                                >
                                    {copy.location}
                                </motion.p>
                            </div>

                            {/* Contrast Vignette for Lead & Sublead (untouched coordinates) */}
                            <motion.div
                                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, delay: 4 * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-black/40 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/15 max-w-xl mx-auto space-y-1.5 md:space-y-2"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 4 * 0.08 + 0.05, ease: [0.22, 1, 0.36, 1] }}
                                    className="max-w-[44ch] md:max-w-[54ch] mx-auto text-sm sm:text-base font-semibold leading-relaxed text-white/95 [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]"
                                >
                                    {copy.lead}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 5 * 0.08 + 0.05, ease: [0.22, 1, 0.36, 1] }}
                                    className="max-w-[50ch] md:max-w-[60ch] mx-auto text-sm sm:text-base font-normal leading-relaxed text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.82)]"
                                >
                                    {copy.sublead}
                                </motion.p>
                            </motion.div>

                            {/* Actions & Scroll Indicator anchored directly beneath copy (gap 1-2cm) */}
                            <DebugWrapper id={14} label="Scroll Indicator" className="mt-3 sm:mt-3.5 flex flex-col items-center gap-1.5 z-20">
                                <a
                                    href={copy.whatsAppHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center border border-[#D4AF37]/70 bg-[#D4AF37]/20 text-[#F0C85C] rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md hover:bg-[#D4AF37] hover:text-black transition-all whitespace-nowrap"
                                >
                                    {copy.whatsAppLabel}
                                </a>

                                <button
                                    type="button"
                                    onClick={handleScrollToNextScreen}
                                    aria-label={copy.scrollAria}
                                    className="group flex flex-col items-center gap-1 mt-1 cursor-pointer focus:outline-none"
                                >
                                    <p className="whitespace-nowrap text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-[#D4AF37] transition-colors">
                                        {copy.scrollLabel}
                                    </p>
                                    <motion.div
                                        animate={{ y: [0, 5, 0], scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.35, ease: "easeInOut" }}
                                        className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 transition-colors"
                                    >
                                        <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white group-hover:text-[#D4AF37] transition-colors" />
                                    </motion.div>
                                </button>
                            </DebugWrapper>
                        </div>
                    </motion.div>

                </div>
            </section>
        </DebugWrapper>
    );
}
