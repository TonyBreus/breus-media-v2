"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function PainBlockV22() {
    return (
        <section className="py-24 bg-[#0F0F0F] text-white relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Реальность медиарынка 2026</span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight"
                >
                    Нет видео <span className="text-gray-600">=</span> нет доверия <br />
                    <span className="text-gray-600">=</span> <span className="text-red-500">нет денег.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light"
                >
                    Люди не идут туда, где не понимают, что их ждёт. <br />
                    <strong className="text-white">Отсутствие визуала — это барьер неизвестности</strong>, который стоит <span className="text-red-500 font-bold">бизнесу клиентов</span> 80% продаж.
                </motion.p>

            </div>
        </section>
    );
}
