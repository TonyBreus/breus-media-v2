"use client";

import HeaderV6 from "@/components/HeaderV6"; // New Thick Header
import Ticker from "@/components/Ticker";     // New Ticker
import Contact from "@/components/Contact";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { Plane, View, MapPin, Film, Car, Calendar } from "lucide-react";

export default function V6_Merged() {

    const services = [
        { id: "1", title: "Аэросъемка", duration: "1-3 дня", description: "Дрон / FPV для масштаба.", icon: <Plane /> },
        { id: "2", title: "360° Туры", duration: "2-4 дня", description: "Виртуальные прогулки 24/7.", icon: <View /> },
        { id: "3", title: "Google Maps", duration: "1-3 дня", description: "Визуальное обновление точек.", icon: <MapPin /> },
        { id: "4", title: "Reels / TikTok", duration: "3-5 дней", description: "Контент, который смотрят.", icon: <Film /> },
        { id: "5", title: "Авто-Презентации", duration: "1-2 дня", description: "Детейлинг и продажа.", icon: <Car /> },
        { id: "6", title: "Event Express", duration: "24ч", description: "Отчет о событии молниеносно.", icon: <Calendar /> },
    ];

    const nichesList = ["Недвижимость", "Рестораны", "Отели", "Автобизнес", "Медицина", "Спорт", "Ритейл", "Производство"];
    const servicesTicker = ["Аэросъемка", "360 Туры", "Google Maps Upgrades", "Reels Production", "AI Content", "Event Highlights"];

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-brand selection:text-white pt-[110px] md:pt-[130px]">
            <HeaderV6 />

            {/* Tickers (Immediately under Header) */}
            <div className="flex flex-col">
                <Ticker items={servicesTicker} direction="left" speed={25} />
                <Ticker items={nichesList} direction="right" speed={30} />
            </div>

            {/* Hero Mix */}
            <section className="py-24 px-4 container mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <div className="px-4 py-1 border border-brand/50 rounded-full text-brand text-xs uppercase tracking-widest flex items-center gap-2">
                        <Star className="w-3 h-3 fill-brand" /> Первое впечатление имеет значение
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                    Бизнес выбирают <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">глазами</span>.
                </h1>

                <div className="max-w-3xl mx-auto mb-12">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Мы создаём <strong>цифровое присутствие бренда</strong>, сочетая видеопродакшн, AI-инструменты и глубокие исследования рынка.
                    </p>
                </div>

                <Link href="#contact" className="btn-primary bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-brand hover:text-white transition-all inline-flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                    Обсудить задачу <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Cash Cow Services */}
            <section className="py-16 bg-white/5 border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="mb-12 flex justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Услуги с быстрой отдачей</h2>
                            <p className="text-gray-400">Решения, которые можно запустить за 1-3 дня.</p>
                        </div>
                        <Link href="#contact" className="hidden md:flex items-center gap-2 text-brand font-bold hover:text-white transition-colors">
                            Все услуги <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(s => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Research / Positioning */}
            <section className="py-24 px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Усиливаем присутствие там, где <span className="text-brand">вас ищут</span>.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Если бизнес уже есть в интернете — мы делаем его понятнее и убедительнее.
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3">✅ <strong>Deep Research:</strong> Изучаем боли вашей ниши.</li>
                        <li className="flex items-center gap-3">✅ <strong>AI-Optimized:</strong> Скорость и вариативность.</li>
                        <li className="flex items-center gap-3">✅ <strong>Mobile-First:</strong> Важно, как это выглядит на телефоне.</li>
                    </ul>
                </div>
                <div className="p-8 bg-dark-surface border border-white/10 rounded-3xl relative overflow-hidden">
                    {/* Visual Abstract */}
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand/20 blur-[80px] rounded-full pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        {nichesList.slice(0, 6).map(n => (
                            <div key={n} className="p-4 bg-black/50 rounded-xl text-center text-sm font-bold border border-white/5 text-gray-400">
                                {n}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
