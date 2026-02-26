"use client";

import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Placeholder from "./Placeholder";

export default function ProblemSection() {
    return (
        <section className="py-24 md:py-32 bg-gray-800 text-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF006E]">
                            Инвесторы не покупают голый бетон.
                        </span>
                        <br />
                        <span className="text-white mt-2 block">
                            Покажите потенциал.
                        </span>
                    </h2>
                </motion.div>

                {/* Interactive Slider Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <Placeholder
                        icon={MoveHorizontal}
                        text="ИНТЕРАКТИВНЫЙ СЛАЙДЕР. Слева серый каркас, справа AI-ремонт"
                        theme="dark"
                        className="aspect-[16/9] min-h-[300px] md:min-h-[450px]"
                    />

                    {/* Slider line simulation */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent z-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 z-30 flex items-center justify-center">
                        <MoveHorizontal className="w-4 h-4 text-white/60" />
                    </div>

                    {/* Labels */}
                    <div className="flex justify-between mt-4 px-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            До
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF006E]">
                            После AI
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
