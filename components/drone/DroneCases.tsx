"use client";
import React from "react";
import { motion } from "framer-motion";

const cases = [
    {
        tag: "Застройщики",
        title: "Стройка под контролем — без лишних выездов",
        text: "Еженедельные дрон-облёты с GPS-привязкой. Инвесторы и банки получают визуальный отчёт о прогрессе без единого визита на площадку. Одинаковые ракурсы, PDF-сравнение этапов.",
        stats: [
            { value: "3x", label: "быстрее отчётность" },
            { value: "85%", label: "экономия на выездах" },
        ],
        imgPlaceholder: "bg-gradient-to-br from-[#1a2030] to-[#0d1117]",
    },
    {
        tag: "Недвижимость",
        title: "Объекты с видео продаются на 68% быстрее",
        text: "Аэрофото + видео 60 сек + 360° тур за один визит. Покупатели видят район, инфраструктуру и масштаб объекта до первого звонка. Особенно эффективно для иностранных покупателей.",
        stats: [
            { value: "68%", label: "быстрее продажи" },
            { value: "94%", label: "больше просмотров" },
        ],
        imgPlaceholder: "bg-gradient-to-br from-[#1a1520] to-[#0d1117]",
    },
    {
        tag: "Отели",
        title: "Гости бронируют там, где видят атмосферу",
        text: "Cinematic облёт территории, hero-ролик для сайта и Booking. 360° тур по номерам и ресторану. Сезонный контент для Instagram без лишних расходов на продакшн.",
        stats: [
            { value: "2.4x", label: "рост конверсии" },
            { value: "45%", label: "рост прямых броней" },
        ],
        imgPlaceholder: "bg-gradient-to-br from-[#151a20] to-[#0d1117]",
    },
];

export function DroneCases() {
    return (
        <section id="cases" className="bg-[#0D0D0D] py-[64px] md:py-[120px] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#00AAFF] mb-3">
                    Как это работает
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 md:mb-16">
                    Результаты, которые важны
                </h2>

                {/* Blocks */}
                <div className="flex flex-col gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.tag}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#111318] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[400px]"
                        >
                            {/* Image placeholder — alternates position */}
                            <div
                                className={`${c.imgPlaceholder} min-h-[250px] md:min-h-full flex items-center justify-center ${i % 2 === 1 ? "md:order-2" : ""
                                    }`}
                            >
                                <div className="text-center p-8">
                                    <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-[#00AAFF] text-3xl font-bold">
                                            {c.stats[0].value}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/30 uppercase tracking-wider">
                                        Фото / видео placeholder
                                    </p>
                                </div>
                            </div>

                            {/* Text */}
                            <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                                <span className="inline-block text-xs font-semibold text-[#00AAFF] uppercase tracking-wider bg-[#00AAFF]/10 px-3 py-1.5 rounded-full w-fit mb-5">
                                    {c.tag}
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                                    {c.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-8">
                                    {c.text}
                                </p>
                                <div className="flex gap-8">
                                    {c.stats.map((s) => (
                                        <div key={s.label}>
                                            <div className="text-2xl font-bold text-[#00AAFF]">
                                                {s.value}
                                            </div>
                                            <div className="text-xs text-white/40 mt-1">
                                                {s.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
