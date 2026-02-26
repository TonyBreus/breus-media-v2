"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import WordFadeIn from "@/components/ui/WordFadeIn";
import { useHeroStore } from "@/store/useHeroStore";

export default function HeroV16() {
    const { hoveredService } = useHeroStore();

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-start bg-[#0a0a0a]">

            {/* 1. KINETIC BACKGROUND LAYER (Base) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-110 contrast-125 mix-blend-overlay"></div>
            </div>

            {/* 2. MEDIA REVEAL LAYER (Z-INDEX 40) - Covers Text when active */}
            <AnimatePresence>
                {hoveredService && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
                    >
                        {/* Placeholder for Dynamic Media - Using a dark overlay + large text for now */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                        <div className="relative z-50 text-center">
                            <h2 className="text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase leading-none drop-shadow-2xl">
                                {hoveredService}
                            </h2>
                            <p className="text-brand font-bold uppercase tracking-widest mt-4">Показать кейс</p>
                        </div>

                        {/* Simulate Image Background for the reveal */}
                        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    </motion.div>
                )}
            </AnimatePresence>


            {/* 3. MAIN CONTENT (Z-INDEX 10) - Will be covered by Media Reveal */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-[200px] md:pt-[240px]"> {/* Increased PT due to double marquee + header */}

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                >
                    <div className="px-5 py-2 border border-white/10 rounded-full text-white/90 text-xs uppercase tracking-widest flex items-center gap-2 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg">
                        <Star className="w-3 h-3 fill-brand text-brand" /> Первое впечатление имеет значение
                    </div>
                </motion.div>

                {/* Headline (Gradient) */}
                <div className="mb-4 max-w-6xl">
                    <WordFadeIn words="Сегодня бизнес выбирают глазами." className="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40" />
                </div>

                {/* Subhead (Close to headline, updated text, symmetrical) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-gray-300 text-lg md:text-xl max-w-3xl font-light leading-relaxed"
                >
                    <span className="text-white font-bold">87% клиентов</span> принимают решение до визита к вам.
                    <br className="hidden md:block" />Мы создаём цифровое присутствие, которое продаёт за вас.
                </motion.p>

                {/* No Button here as requested */}

            </div>

        </section>
    );
}
