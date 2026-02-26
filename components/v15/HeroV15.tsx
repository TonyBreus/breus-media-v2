"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import WordFadeIn from "@/components/ui/WordFadeIn";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { useHeroStore } from "@/store/useHeroStore";
import { useEffect, useState } from "react";

// Interactive Ticker Item Wrapper (UPDATED: White Text)
const InteractiveItem = ({ text }: { text: string }) => {
    const { setHoveredService } = useHeroStore();

    return (
        <span
            onMouseEnter={() => setHoveredService(text)}
            onMouseLeave={() => setHoveredService(null)}
            className="hover:text-brand transition-colors cursor-pointer px-4 relative group text-white/90" // Bright White Text
        >
            {text}
            {/* Hover Indicator */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>
    );
};

// Custom interactive ticker
const InteractiveTicker = ({ items, direction = "left", speed = 60 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="relative overflow-hidden w-full py-3 bg-transparent">
            {/* Gradients to fade edges */}
            <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent`} />
            <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent`} />

            <motion.div
                className="flex gap-16 px-16 text-lg font-bold uppercase tracking-widest whitespace-nowrap"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {[...items, ...items, ...items, ...items, ...items].map((item, i) => (
                    <InteractiveItem key={`${item}-${i}`} text={item} />
                ))}
            </motion.div>
        </div>
    );
}

export default function HeroV15() {
    const { hoveredService } = useHeroStore();

    const line1 = ["Аэросъемка", "360° Туры", "Reels", "AI Контент", "Google Карты", "Сайты", "Промо Видео", "Мероприятия"];
    const line2 = ["Недвижимость", "Автобизнес", "Отели", "Рестораны", "Медицина", "Производство", "IT", "Ритейл", "Туризм"];

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-center bg-[#0a0a0a]">

            {/* 1. KINETIC BACKGROUND LAYER (Wet Asphalt Gradient Base) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black">
                <AnimatePresence mode="wait">
                    {hoveredService ? (
                        <motion.div
                            key="revealed-bg"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-gradient-to-br from-brand/40 to-purple-900/40"
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <h2 className="text-[20vw] font-black text-white/5 uppercase leading-none truncate">{hoveredService}</h2>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="default-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-110 contrast-125 mix-blend-overlay"></div>
            </div>

            {/* 2. MAIN CONTENT (FIXED POSITIONING: HIGHER UP) */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-32">

                {/* Badge (Moved Significantly Higher) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6" // Reduced from 16 to 6
                >
                    <div className="px-5 py-2 border border-white/10 rounded-full text-white/90 text-xs uppercase tracking-widest flex items-center gap-2 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg">
                        <Star className="w-3 h-3 fill-brand text-brand" /> Первое впечатление имеет значение
                    </div>
                </motion.div>

                {/* Headline */}
                <div className="mb-8 max-w-5xl">
                    <WordFadeIn words="Сегодня бизнес выбирают глазами." />
                </div>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl font-light mb-12"
                >
                    <span className="text-white font-bold">87% клиентов</span> принимают решение до визита.
                    Мы создаём цифровое присутствие, которое продаёт за вас.
                </motion.p>

                {/* Shimmer Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    <Link href="#contact">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg uppercase tracking-widest">
                                Обсудить проект
                            </span>
                        </ShimmerButton>
                    </Link>
                </motion.div>

            </div>

            {/* 3. INTERACTIVE TICKERS */}
            <div className="absolute bottom-24 lg:bottom-16 left-0 right-0 z-20 flex flex-col gap-1">
                <InteractiveTicker items={line1} direction="left" speed={50} />
                <InteractiveTicker items={line2} direction="right" speed={60} />
            </div>

        </section>
    );
}
