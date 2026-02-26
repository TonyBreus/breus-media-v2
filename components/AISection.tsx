"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Layers } from "lucide-react";

export default function AISection() {
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

                {/* Visual / Abstract Representation */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-40 animate-pulse"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md max-w-sm">
                            <div className="h-2 w-24 bg-blue-500 rounded-full mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-1 w-full bg-white/20 rounded-full"></div>
                                <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                                <div className="h-1 w-5/6 bg-white/20 rounded-full"></div>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <span className="text-xs font-mono text-blue-400">Processing...</span>
                                <span className="text-xs font-mono text-white">98%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
