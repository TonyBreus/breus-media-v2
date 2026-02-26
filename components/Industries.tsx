"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Building, Coffee, Stethoscope, ShoppingBag, Factory, Trophy } from "lucide-react";

export default function Industries() {
    const [isExpanded, setIsExpanded] = useState(false);

    const mainNiches = [
        { title: "Недвижимость", desc: "Дроны / 360 / AI-Визуализация", icon: <Building /> },
        { title: "Отели и Туризм", desc: "Атмосфера до бронирования", icon: <Coffee /> }, // Using Coffee as placeholder
        { title: "Рестораны", desc: "Вкус через видео + контент-пакеты", icon: <Coffee /> },
        { title: "Медицина", desc: "Знакомство снижает страх визита", icon: <Stethoscope /> },
        { title: "Производство", desc: "Масштаб для партнеров на расстоянии", icon: <Factory /> },
        { title: "Ритейл", desc: "Витрина в телефоне — товар живет", icon: <ShoppingBag /> },
    ];

    const extraNiches = [
        { title: "Спорт и Фитнес", desc: "Мотивация через динамику", icon: <Trophy /> },
        { title: "Ивенты", desc: "Эмоции, которые остаются", icon: <CalendarIcon /> },
        { title: "Ваш Бизнес", desc: "Стратегия под любую задачу", icon: <ZapIcon /> },
    ];

    return (
        <section id="industries" className="py-24 bg-dark-surface border-y border-white/5">
            <div className="container px-4 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Решения для вашей ниши</h2>
                    <p className="text-gray-400">Если нужна стратегия под индустрию — выбирайте направление.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {mainNiches.map((niche) => (
                        <IndustryCard key={niche.title} {...niche} />
                    ))}
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
                        >
                            {extraNiches.map((niche) => (
                                <IndustryCard key={niche.title} {...niche} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors"
                    >
                        {isExpanded ? "Свернуть" : "Показать все ниши"}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function IndustryCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
    return (
        <Link href={`#contact?niche=${encodeURIComponent(title)}`} className="group p-6 bg-dark border border-white/5 hover:border-brand/50 rounded-xl transition-all hover:bg-white/5 flex items-start space-x-4">
            <div className="p-2 bg-black rounded-lg text-gray-500 group-hover:text-brand transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-white text-gray-200 transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{desc}</p>
            </div>
        </Link>
    )
}

function CalendarIcon() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> }
function ZapIcon() { return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> }
