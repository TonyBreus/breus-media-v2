"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Layers } from "lucide-react";

export default function AISectionV22() {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-[#050510] text-white overflow-hidden relative">

            {/* Decorative Matrix/Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest mb-6">
                            <Cpu className="w-5 h-5" />
                            <span>Технологии</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            AI — не будущее. <br />
                            Это <span className="text-blue-500">рабочий инструмент.</span>
                        </h2>

                        <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed">
                            Мы экономим ваш бюджет, создавая контент <strong className="text-white">x10 быстрее</strong>.
                            Квартиры с мебелью в пустой бетонной коробке (AI Staging) и меню ресторана, которого еще нет.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-gray-300">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Zap className="w-4 h-4" /></div>
                                <span className="font-bold">Виртуальный Хоумстейджинг (мебель в 3D)</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Layers className="w-4 h-4" /></div>
                                <span className="font-bold">Генерация фото-контента без съемок</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Visual / Abstract Representation (Static, No Processing Card) */}
                <div className="md:w-1/2 relative flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-full aspect-square max-w-sm"
                    >
                        {/* Static Abstract Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-brand rounded-full blur-[80px] opacity-40 mix-blend-screen" />

                        {/* Decorative Icon or Symbol could go here if needed, keeping it clean for now */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Cpu className="w-32 h-32 text-white/5" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
