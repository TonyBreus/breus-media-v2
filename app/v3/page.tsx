"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowDown, Briefcase, Zap } from "lucide-react";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Industries from "@/components/Industries";

export default function V3_UX_Smart() {
    return (
        <main className="min-h-screen bg-dark text-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-12 px-4 container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Мы формируем первое впечатление <br /> о бизнесе в цифре.</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                    Видео, дизайн и AI-решения для компаний в Грузии и по всему миру.
                </p>

                {/* Decision Block (Helper) */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />
                    <h2 className="text-2xl font-bold mb-8">Что вам сейчас нужно?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="#services" className="group p-6 bg-dark hover:bg-white/10 rounded-xl border border-white/5 hover:border-brand transition-all text-left">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-brand/20 text-brand rounded-lg"><Zap /></div>
                                <h3 className="font-bold text-lg group-hover:text-white">Конкретная услуга</h3>
                            </div>
                            <p className="text-sm text-gray-500 pl-[3.25rem]">Дрон, 360 тур, Reels, или съемка события.</p>
                        </Link>

                        <Link href="#industries" className="group p-6 bg-dark hover:bg-white/10 rounded-xl border border-white/5 hover:border-brand transition-all text-left">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-brand/20 text-brand rounded-lg"><Briefcase /></div>
                                <h3 className="font-bold text-lg group-hover:text-white">Решение под бизнес</h3>
                            </div>
                            <p className="text-sm text-gray-500 pl-[3.25rem]">Стратегия для отеля, ресторана или клиники.</p>
                        </Link>
                    </div>

                    <div className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                        Выберите направление
                    </div>
                </div>
            </section>

            <Services />
            <Industries />
            <Contact />
        </main>
    );
}
