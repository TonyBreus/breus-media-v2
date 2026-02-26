"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building, Coffee, Stethoscope, Car, Trophy, ArrowRight } from "lucide-react";
import Contact from "@/components/Contact";

export default function V1_Business() {
    const niches = [
        { title: "Недвижимость", icon: <Building /> },
        { title: "Рестораны", icon: <Coffee /> },
        { title: "Отели", icon: <Building /> }, // Using Building as placeholder
        { title: "Автобизнес", icon: <Car /> },
        { title: "Медицина", icon: <Stethoscope /> },
        { title: "Спорт", icon: <Trophy /> },
    ];

    return (
        <main className="min-h-screen bg-dark text-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Первое впечатление <br /> имеет значение.</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    Мы помогаем бизнесу выглядеть убедительно в цифровом пространстве — через видео, дизайн и AI-решения.
                </p>
                <div className="text-sm font-mono text-brand mb-8">📍 Тбилиси / Грузия / Работаем по всему миру</div>
                <Link href="#contact" className="btn-primary inline-flex bg-brand px-8 py-4 rounded-full font-bold text-white hover:bg-brand-hover transition-colors">
                    Обсудить задачу
                </Link>
            </section>

            {/* Niches (Top Priority) */}
            <section className="py-16 bg-white/5">
                <div className="container px-4 mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Ваша индустрия?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {niches.map((n) => (
                            <div key={n.title} className="p-6 bg-dark border border-white/10 rounded-xl hover:border-brand transition-colors text-center cursor-pointer group">
                                <div className="inline-block p-3 bg-white/5 rounded-full mb-3 group-hover:bg-brand group-hover:text-white transition-colors">{n.icon}</div>
                                <div className="font-medium">{n.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop */}
            <section className="py-24 px-4 text-center">
                <p className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
                    «Если бизнес уже присутствует в интернете — мы делаем это присутствие <span className="text-brand">сильнее, понятнее и убедительнее</span> для клиента.»
                </p>
            </section>

            {/* Quick Services */}
            <section className="py-16 bg-dark-surface">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Быстрые услуги</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                        {["Дрон / FPV", "360° / 3D", "Reels / Shorts", "Event Highlights", "AI-Визуал"].map((s) => (
                            <div key={s} className="p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
                                {s}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
