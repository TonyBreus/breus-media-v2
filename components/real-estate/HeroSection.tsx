"use client";

import { motion } from "framer-motion";
import { Video, Play } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <MediaPlaceholder
                    icon={Video}
                    label="VIDEO LOOP: FPV Drone flying from concrete to sunset view over Batumi"
                    className="!rounded-none !aspect-auto w-full h-full"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
                <div className="max-w-3xl">
                    {/* Glassmorphism Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan border border-neon-cyan/30 px-4 py-1.5 rounded-full mb-8 bg-neon-cyan/5"
                        >
                            Breus Media Real Estate
                        </motion.span>

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white"
                        >
                            Продавайте
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                                «Вид»,
                            </span>
                            <br />
                            пока этаж ещё
                            <br />
                            не построен.
                        </motion.h1>

                        {/* Subhead */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl"
                        >
                            Визуальный продакшн полного цикла: FPV-мониторинг,{" "}
                            <span className="text-neon-purple font-semibold">AI</span>
                            -стейджинг и VR-туры. Мы помогаем девелоперам закрывать сделки на{" "}
                            <span className="text-neon-cyan font-semibold">30%</span> быстрее.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            {/* Primary CTA with glow */}
                            <button className="relative group px-8 py-4 bg-neon-cyan text-black font-black uppercase text-sm tracking-widest rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]">
                                <span>
                                    Рассчитать{" "}
                                    <span className="text-neon-purple">ROI</span> упаковки
                                </span>
                            </button>

                            {/* Secondary link */}
                            <button className="flex items-center gap-3 text-sm font-bold text-gray-400 hover:text-white transition-colors group">
                                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon-cyan group-hover:bg-neon-cyan/10 transition-all">
                                    <Play className="w-4 h-4 ml-0.5" />
                                </span>
                                Смотреть шоурил
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        </section>
    );
}
