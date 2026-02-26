"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { ArrowRight, Plane, View, MapPin, Film, Car, Calendar, Palette } from "lucide-react";
import Contact from "@/components/Contact";
import ServiceCard from "@/components/ServiceCard"; // Reusing existing card

export default function V2_Cash() {
    const services = [
        { id: "1", title: "Аэросъемка", duration: "1-3 дня", description: "Дрон / FPV для масштаба.", icon: <Plane /> },
        { id: "2", title: "360° Туры", duration: "2-4 дня", description: "Виртуальные прогулки 24/7.", icon: <View /> },
        { id: "3", title: "Google Maps", duration: "1-3 дня", description: "Визуальное обновление точек.", icon: <MapPin /> },
        { id: "4", title: "Reels / TikTok", duration: "3-5 дней", description: "Контент, который смотрят.", icon: <Film /> },
        { id: "5", title: "Авто-Презентации", duration: "1-2 дня", description: "Детейлинг и продажа.", icon: <Car /> },
        { id: "6", title: "Event Express", duration: "24ч", description: "Отчет о событии молниеносно.", icon: <Calendar /> },
    ];

    return (
        <main className="min-h-screen bg-dark text-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-12 px-4 container mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Бизнес выбирают <span className="text-brand">глазами</span>.</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Видео, 360°, AI и дизайн — для компаний, которые уже есть в интернете и хотят продавать больше.
                </p>
                <Link href="#contact" className="btn-primary bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-brand hover:text-white transition-all">
                    Обсудить задачу
                </Link>
            </section>

            {/* Cash Cow Services (Immediate) */}
            <section className="py-12 bg-white/5">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-brand font-mono text-sm uppercase tracking-widest">Готовые решения для быстрого старта</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(s => (
                            <ServiceCard key={s.id} {...s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Branding Button */}
            <section className="py-16 text-center">
                <div className="inline-flex items-center gap-4 p-6 border border-white/10 rounded-2xl hover:border-brand cursor-pointer bg-dark-surface transition-all">
                    <div className="p-3 bg-brand rounded-lg text-white"><Palette /></div>
                    <div className="text-left">
                        <div className="font-bold text-lg">Брендинг и сайт под ключ</div>
                        <div className="text-sm text-gray-500">Логотип, цвета, шрифты, структура</div>
                    </div>
                    <ArrowRight className="ml-4 text-gray-500" />
                </div>
            </section>

            <Contact />
        </main>
    );
}
