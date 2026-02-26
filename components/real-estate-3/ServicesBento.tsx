"use client";

import { motion } from "framer-motion";
import {
    Plane,
    RotateCw,
    Wand2,
    Home,
    Building2,
    BedDouble,
    ArrowRight,
} from "lucide-react";
import Placeholder from "./Placeholder";

const services = [
    {
        icon: Plane,
        title: "Дроны & Стройка",
        tag: "B2B",
        desc: "Еженедельные отчёты для дольщиков Грузии",
        media: "VIDEO: Drone construction timelapse",
    },
    {
        icon: RotateCw,
        title: "360° VR Туры",
        tag: "REMOTE",
        desc: "Удалённые показы для экспатов",
        media: "VIDEO: 360° virtual walkthrough",
    },
    {
        icon: Wand2,
        title: "AI Virtual Staging",
        tag: "AI",
        desc: "Дизайнерский ремонт за 24 часа",
        media: "IMAGE: Before/After AI staging",
    },
    {
        icon: Home,
        title: "Вторичный рынок (B2C)",
        tag: "FAST",
        desc: "Быстрая упаковка для SS.ge и MyHome",
        media: "PHOTO: Staged apartment listing",
    },
    {
        icon: Building2,
        title: "Коммерция",
        tag: "B2B",
        desc: "Офисы, бизнес-центры Грузии",
        media: "VIDEO: Office drone flythrough",
    },
    {
        icon: BedDouble,
        title: "Аренда (Airbnb/Booking)",
        tag: "HOSTING",
        desc: "Staging для хостов",
        media: "PHOTO: Airbnb-ready interior",
    },
];

export default function ServicesBento() {
    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0066FF] mb-3 block">
                        Услуги
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Визуальный хаб
                        <br />
                        для недвижимости
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#00D4FF]/30 hover:shadow-lg transition-all duration-300">
                                {/* Media placeholder */}
                                <Placeholder
                                    icon={s.icon}
                                    text={s.media}
                                    theme="light"
                                    className="aspect-[16/10] !rounded-none"
                                />

                                <div className="p-6">
                                    {/* Tag */}
                                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#0066FF] bg-[#0066FF]/5 border border-[#0066FF]/15 px-2.5 py-1 rounded-full mb-3">
                                        {s.tag}
                                    </span>

                                    <h3 className="text-lg font-black text-gray-900 tracking-tight mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {s.desc}
                                    </p>

                                    <button className="flex items-center gap-1 text-xs font-bold text-[#0066FF] uppercase tracking-widest hover:gap-2 transition-all group-hover:text-[#00D4FF]">
                                        Подробнее <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
