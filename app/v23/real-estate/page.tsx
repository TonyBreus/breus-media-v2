"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV23 from "@/components/v23/HeaderV23";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function RealEstatePage() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV23 />

                {/* HERO PLACEHOLDER */}
                <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black opacity-50 z-0 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 max-w-4xl"
                    >
                        <span className="text-brand font-bold tracking-widest uppercase mb-4 block">Недвижимость & Девелопмент</span>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                            Продавайте метры <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">через эмоции.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                            Видео, 360° туры и AI-стейджинг, которые превращают «просмотры» в сделки.
                        </p>
                    </motion.div>
                </section>

                <Contact />
            </main>
        </ReactLenis>
    );
}
