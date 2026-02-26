"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useHeroStore } from "@/store/useHeroStore";

export default function HeroV21() {
    const { hoveredService } = useHeroStore();

    return (
        <section className="relative pt-[220px] pb-0 bg-black overflow-hidden min-h-[90vh] flex flex-col justify-center text-center">

            {/* CINEMATIC REVEAL OVERLAY (Z-9999) */}
            <AnimatePresence>
                {hoveredService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-all" />
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: -10, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="relative z-10 text-center"
                        >
                            <h2 className="text-[10vw] md:text-[120px] font-black uppercase tracking-tighter text-white leading-none drop-shadow-2xl">
                                {hoveredService}
                            </h2>
                            <p className="text-brand font-bold uppercase tracking-[0.5em] mt-4 text-sm md:text-xl">
                                Explore Solution
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content (Z-10) */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center pb-24 md:pb-32">

                {/* BADGE (RESTORED) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                            Первое впечатление имеет значение
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
                        Сегодня бизнес <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">выбирают глазами.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl font-light mb-12"
                >
                    <span className="text-white font-bold">87% клиентов</span> принимают решения до визита к вам.
                    Мы создаем цифровое присутствие, которое продает за вас.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative z-50"
                >
                    <Link href="#contact" className="btn-primary bg-brand text-white text-lg px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                        Обсудить проект
                    </Link>
                </motion.div>

            </div>

            {/* SMOOTH GRADIENT TRANSITION (FIXED for v21) */}
            {/* Extended height and gradient to transparent black to merge with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0F0F0F] via-black/80 to-transparent pointer-events-none z-0" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] pointer-events-none"></div>

        </section>
    );
}
