"use client";

import Link from "next/link";
import { ArrowRight, Play, Camera, Activity, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video/Gradient Fallback */}
            <div className="absolute inset-0 z-0 bg-dark">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_60%)] animate-pulse-slow" />

                {/* Placeholder for Video */}
                {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 mix-blend-screen">
             <source src="/hero-bg.mp4" type="video/mp4" />
        </video> */}

                {/* Grid Overlay for Tech feel */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                {/* Trust Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 text-xs font-mono text-brand mb-6 uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full border border-brand/20"
                >
                    <span>📍 Тбилиси / Батуми</span>
                    <span className="w-1 h-1 bg-brand rounded-full" />
                    <span>Remote Worldwide</span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl"
                >
                    Сегодня бизнес <br className="hidden md:block" />
                    выбирают <span className="text-white italic relative">
                        глазами.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-60" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Снимаем, генерируем и проектируем цифровое присутствие.
                    <br className="hidden md:block" />Ваш бренд до первого контакта.
                </motion.p>

                {/* Quick Tags Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {[
                        { label: "✈️ Дрон", href: "#svc-drone" },
                        { label: "🔄 360°", href: "#svc-360" },
                        { label: "🎬 Reels", href: "#svc-reels" },
                        { label: "🤖 AI", href: "#ai" },
                    ].map((tag) => (
                        <Link
                            key={tag.label}
                            href={tag.href}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-brand/50 hover:text-brand"
                        >
                            {tag.label}
                        </Link>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="btn-primary group relative px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all flex items-center space-x-2 overflow-hidden"
                    >
                        <span className="relative z-10">Обсудить Задачу</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-shine" />
                    </Link>

                    <Link
                        href="#services"
                        className="px-6 py-4 text-gray-400 hover:text-white font-medium border-b border-transparent hover:border-white transition-all flex items-center gap-2"
                    >
                        <span>Выбрать услугу</span>
                        <span className="text-xl">↓</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
