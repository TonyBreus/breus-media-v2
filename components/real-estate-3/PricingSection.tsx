"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* ── Data ── */
const tiers = [
    {
        name: "Start",
        subtitle: "База",
        price: "от 800₾",
        accent: false,
        features: [
            "Фотосъёмка объекта (20 кадров)",
            "Базовая ретушь",
            "Вертикальные Reels (3 шт)",
            "Доставка за 72 часа",
            "Исходники в high-res",
        ],
    },
    {
        name: "Pro",
        subtitle: "AI + Reels",
        price: "от 2 500₾",
        accent: true,
        features: [
            "Всё из «Start»",
            "AI Virtual Staging (3 стиля)",
            "360° Virtual Tour (до 5 помещений)",
            "Reels Pack (10 роликов)",
            "Тексты для постов (SEO)",
            "Доставка за 48 часов",
            "Консультация по контенту",
        ],
    },
    {
        name: "B2B Development",
        subtitle: "FPV-мониторинг + туры",
        price: "от 5 000₾",
        accent: false,
        features: [
            "Всё из «Pro»",
            "FPV дрон-съёмка объекта",
            "Еженедельный мониторинг стройки",
            "VR-тур 360° (до 15 помещений)",
            "AI-staging для всех планировок",
            "Контент-стратегия на 3 мес",
            "Приоритетная поддержка",
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#0066FF] mb-3 block">
                        Тарифы
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Выберите свой пакет
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative ${tier.accent ? "md:-mt-4 md:-mb-4 z-10" : ""}`}
                        >
                            <div
                                className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${tier.accent
                                        ? "bg-white border-2 border-[#0066FF] shadow-xl shadow-[#0066FF]/10 scale-[1.02]"
                                        : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md"
                                    }`}
                            >
                                {/* Accent ribbon */}
                                {tier.accent && (
                                    <div className="bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2">
                                        Популярный выбор
                                    </div>
                                )}

                                <div className="p-8">
                                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                                        {tier.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-4">{tier.subtitle}</p>

                                    <p className="text-3xl font-black text-gray-900 mb-6">
                                        {tier.price}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((f) => (
                                            <li key={f} className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button
                                        className={`w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${tier.accent
                                                ? "bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        Выбрать
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
