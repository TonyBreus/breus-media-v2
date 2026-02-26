"use client";

import Link from "next/link";
import { ArrowRight, Star, Hexagon } from "lucide-react";
import Contact from "@/components/Contact";

export default function V5_Minimal() {
    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-white selection:text-black">

            {/* Super Minimal Header */}
            <header className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
                <div className="font-bold tracking-widest text-xs uppercase">Breus Media</div>
                <Link href="#contact" className="text-xs uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">Contact</Link>
            </header>

            {/* Hero */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 max-w-2xl leading-tight">
                    Первое впечатление <br /> имеет значение.
                </h1>
                <p className="text-gray-500 mb-12 max-w-md mx-auto">
                    Мы помогаем бизнесу выглядеть убедительно в цифровом пространстве.
                </p>
                <Link href="#contact" className="group flex items-center gap-2 text-lg border-b border-white pb-1 hover:pb-2 transition-all">
                    Начать диалог <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>

            {/* Minimal Grid Niches */}
            <section className="py-24 px-4 border-t border-white/5">
                <div className="container mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-gray-500 uppercase text-xs tracking-widest">
                    {["Real Estate", "HoReCa", "Medical", "Retail"].map(n => (
                        <div key={n} className="hover:text-white transition-colors cursor-pointer">{n}</div>
                    ))}
                </div>
            </section>

            {/* Minimal Services */}
            <section className="py-24 px-4 bg-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {["Drone Production", "360 Virtual Tours", "AI Content Gen", "Digital Branding"].map(s => (
                            <div key={s} className="flex items-center gap-4 group cursor-pointer">
                                <Hexagon className="w-2 h-2 text-gray-700 group-hover:text-white transition-colors" />
                                <span className="text-xl text-gray-400 group-hover:text-white transition-colors">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
