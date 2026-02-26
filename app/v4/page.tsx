"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Search, Brain, Target } from "lucide-react";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import AI from "@/components/AI";

export default function V4_Deep_Research() {
    return (
        <main className="min-h-screen bg-dark text-white font-serif">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-24 px-4 container mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-light mb-8 italic">Первое впечатление <br /> формирует доверие.</h1>
                    <p className="text-2xl text-gray-300 mb-12 font-sans border-l-2 border-brand pl-6">
                        Мы создаём цифровое присутствие брендов, сочетая видеопродакшн и AI-исследования рынка.
                    </p>
                    <Link href="#contact" className="text-lg font-bold border-b-2 border-white pb-1 hover:text-brand hover:border-brand transition-colors">
                        Обсудить задачу →
                    </Link>
                </div>
            </section>

            {/* Deep Research Block */}
            <section className="py-24 bg-white/5 font-sans">
                <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Deep Research Strategy</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Мы используем deep research и AI-инструменты, чтобы глубоко разобраться в нише клиента и говорить с его аудиторией на одном языке.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Search className="text-brand" /> <span>Анализ конкурентов и трендов</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Brain className="text-brand" /> <span>AI-генерация гипотез</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Target className="text-brand" /> <span>Точечное попадание в боли аудитории</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-8 bg-dark border border-white/10 rounded-2xl relative">
                        {/* Abstract visual representation */}
                        <div className="absolute top-4 right-4 text-brand/20 text-9xl font-black">AI</div>
                        <div className="relative z-10 text-xl font-mono">
                            Analysis: Complete<br />
                            Strategy: Generated<br />
                            Production: Ready
                        </div>
                    </div>
                </div>
            </section>

            <Industries />
            <Services />
            <AI />
            <Contact />
        </main>
    );
}
