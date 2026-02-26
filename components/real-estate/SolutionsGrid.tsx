"use client";

import { motion } from "framer-motion";
import { Plane, Wand2, View } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

const solutions = [
    {
        title: "Аэросъемка & Мониторинг",
        desc: "Еженедельные отчеты для инвесторов. Покажите вид с 20-го этажа, которого ещё нет.",
        tag: "B2B TRUST",
        tagColor: "neon-cyan" as const,
        icon: Plane,
        mediaLabel: "VIDEO: Timelapse construction progress",
        featured: true,
    },
    {
        title: "AI Виртуальный Стейджинг",
        titlePrefix: <span className="text-neon-purple">AI</span>,
        desc: "Превращаем бетон в уютный лофт за 24 часа. Без покупки мебели.",
        tag: "+40% CTR",
        tagColor: "neon-purple" as const,
        icon: Wand2,
        mediaLabel: "IMAGE: Before/After morphing animation",
        featured: false,
    },
    {
        title: "VR-Туры 360°",
        desc: "Телепорт для клиентов из-за рубежа. Продавайте удалённо через WhatsApp.",
        tag: "REMOTE SALES",
        tagColor: "white" as const,
        icon: View,
        mediaLabel: "VIDEO: 360 panorama rotation on mobile screen",
        featured: false,
    },
];

export default function SolutionsGrid() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan mb-4 block">
                        Решения
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
                        Инструменты, которые{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                            продают
                        </span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card 1: Featured (Full width on mobile, spans left column on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:row-span-2 group"
                    >
                        <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-neon-cyan/30 transition-all duration-500">
                            <MediaPlaceholder
                                icon={solutions[0].icon}
                                label={solutions[0].mediaLabel}
                                aspect="video"
                                className="!rounded-none !rounded-t-3xl"
                            />
                            <div className="p-8">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-neon-cyan border border-neon-cyan/30 px-3 py-1 rounded-full mb-4">
                                    {solutions[0].tag}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-white">
                                    {solutions[0].title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {solutions[0].desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-neon-purple/30 transition-all duration-500 flex flex-col md:flex-row">
                            <div className="md:w-1/2 flex-shrink-0">
                                <MediaPlaceholder
                                    icon={solutions[1].icon}
                                    label={solutions[1].mediaLabel}
                                    aspect="square"
                                    className="!rounded-none md:!rounded-l-3xl md:!rounded-r-none h-full"
                                />
                            </div>
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-neon-purple border border-neon-purple/30 px-3 py-1 rounded-full mb-4 w-fit">
                                    <span className="text-neon-purple">{solutions[1].tag}</span>
                                </span>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-white">
                                    <span className="text-neon-purple">AI</span> Виртуальный Стейджинг
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {solutions[1].desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row">
                            <div className="md:w-1/2 flex-shrink-0">
                                <MediaPlaceholder
                                    icon={solutions[2].icon}
                                    label={solutions[2].mediaLabel}
                                    aspect="square"
                                    className="!rounded-none md:!rounded-l-3xl md:!rounded-r-none h-full"
                                />
                            </div>
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white/70 border border-white/20 px-3 py-1 rounded-full mb-4 w-fit">
                                    {solutions[2].tag}
                                </span>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-white">
                                    {solutions[2].title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {solutions[2].desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
