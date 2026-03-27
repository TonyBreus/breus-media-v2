"use client";
import React from "react";
import { motion } from "framer-motion";
import SkewCard from "./SkewCard";

const clients = [
    {
        icon: "🏗️",
        title: "Застройщики и девелоперы",
        text: "Промо ЖК, мониторинг прогресса стройки, инвестиционное видео и отчёты для банков",
        tag: "Мониторинг стройки →",
    },
    {
        icon: "🏢",
        title: "Риелторы и агентства",
        text: "Аэрофото объектов, обзоры районов, видео для быстрых продаж иностранным покупателям",
        tag: "Недвижимость →",
    },
    {
        icon: "🏨",
        title: "Отели и апарт-отели",
        text: "Hero-ролики курортов, облёты территории, 360-туры и сезонный контент для OTA и соцсетей",
        tag: "Отели →",
    },
    {
        icon: "🔨",
        title: "Строительные компании",
        text: "Еженедельные отчёты прогресса, таймлапсы строительства, визуальный технадзор",
        tag: "Стройка →",
    },
    {
        icon: "📈",
        title: "Инвесторы и фонды",
        text: "Инвест-обзоры объектов, визуальный due diligence, апдейты удалённо для иностранных партнёров",
        tag: "Инвестиции →",
    },
    {
        icon: "🎬",
        title: "Рестораны и бренды",
        text: "Аэросъёмка локации, атмосферные ролики, контент для соцсетей и рекламных кампаний",
        tag: "Контент →",
    },
];

export function DroneWho() {
    return (
        <section id="who" className="bg-[#0D0D0D] py-[64px] md:py-[120px]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#00AAFF] mb-3">
                    Наши клиенты
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Для кого мы снимаем
                </h2>
                <p className="mt-4 text-base text-white/60 max-w-2xl leading-relaxed">
                    Работаем с бизнесами, которым важен профессиональный визуальный контент
                    и документация с воздуха
                </p>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.map((c, i) => (
                        <SkewCard key={c.title} className="flex h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 flex flex-col justify-between hover:border-[#00AAFF]/40 transition-colors duration-200 group w-full h-full"
                            >
                                <div>
                                    <div className="text-4xl mb-5">{c.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00AAFF] transition-colors text-balance">
                                        {c.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{c.text}</p>
                                </div>
                                <div className="mt-6">
                                    <span className="inline-block text-xs font-semibold text-[#00AAFF] uppercase tracking-wider bg-[#00AAFF]/10 px-3 py-1.5 rounded-full">
                                        {c.tag}
                                    </span>
                                </div>
                            </motion.div>
                        </SkewCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
