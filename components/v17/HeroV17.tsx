"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroV17() {
    return (
        <section className="relative pt-[220px] pb-0 bg-black overflow-hidden min-h-[90vh] flex flex-col justify-center text-center">

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
                        Первое впечатление <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">имеет значение.</span>
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
                >
                    <Link href="#contact" className="btn-primary bg-brand text-white text-lg px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                        Обсудить проект
                    </Link>
                </motion.div>

            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] pointer-events-none"></div>

        </section>
    );
}
