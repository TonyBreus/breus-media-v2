"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function ServicePage_Drone() {
    return (
        <div className="bg-dark min-h-screen text-white">
            {/* Service Hero */}
            <section className="py-24 pt-32 container mx-auto px-4 text-center">
                <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Service: Video Production</span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                    Дрон-съемка + FPV
                </h1>
                <div className="flex justify-center gap-8 mb-12 text-gray-400">
                    <div className="px-6 py-2 border border-white/10 rounded-full">⏳ 1-3 дня</div>
                    <div className="px-6 py-2 border border-white/10 rounded-full">💰 от 500₾</div>
                </div>
            </section>

            {/* Benefits / Process */}
            <section className="py-16 bg-white/5">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Масштаб имеет значение</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Мы используем кинематографические FPV-дроны для создания динамичных облетов недвижимости, заводов и мероприятий.
                            Это не просто "вид сверху" — это полет внутри здания.
                        </p>
                        <ul className="space-y-4">
                            {['Разрешение 4K/60fps', 'Стабилизация HyperSmooth', 'Съемка внутри помещений', 'Готовый монтаж за 24ч'].map(item => (
                                <li key={item} className="flex items-center gap-3 font-semibold">
                                    <div className="bg-brand/20 p-1 rounded text-brand"><Check className="w-4 h-4" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="aspect-video bg-black rounded-2xl flex items-center justify-center text-gray-500 border border-white/10">
                        [ Video Preview Placeholder ]
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <h2 className="text-4xl font-bold mb-8">Готовы к взлету?</h2>
                <Link href="#contact" className="btn-primary bg-brand text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                    Заказать съемку <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
}
