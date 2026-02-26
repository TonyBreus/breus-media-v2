"use client";

import HeaderV8 from "@/components/HeaderV8";
import CentralTicker from "@/components/CentralTicker";
import HeroScrollV8 from "@/components/HeroScrollV8";
import Contact from "@/components/Contact";
import ServiceCard from "@/components/ServiceCard";
import { Plane, View, MapPin, Film, Car, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function V8_Premium() {
    const services = [
        { id: "1", title: "Аэросъемка", duration: "1-3 дня", description: "Дрон / FPV для масштаба.", icon: <Plane /> },
        { id: "2", title: "360° Туры", duration: "2-4 дня", description: "Виртуальные прогулки 24/7.", icon: <View /> },
        { id: "3", title: "Google Maps", duration: "1-3 дня", description: "Визуальное обновление точек.", icon: <MapPin /> },
        { id: "4", title: "Reels / TikTok", duration: "3-5 дней", description: "Контент, который смотрят.", icon: <Film /> },
        { id: "5", title: "Авто-Презентации", duration: "1-2 дня", description: "Детейлинг и продажа.", icon: <Car /> },
        { id: "6", title: "Event Express", duration: "24ч", description: "Отчет о событии молниеносно.", icon: <Calendar /> },
    ];

    const nichesTicker = ["Недвижимость", "Рестораны", "Отели", "Автобизнес", "Медицина", "Спорт", "Ритейл", "Производство"];
    const servicesTicker = ["Аэросъемка", "360 Туры", "Google Maps Upgrades", "Reels Production", "AI Content", "Event Highlights"];

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-brand selection:text-white">
            <HeaderV8 />

            {/* Hero */}
            <HeroScrollV8 />

            {/* Central Tickers */}
            <div className="relative z-30 -mt-24 mb-24">
                <CentralTicker label="УСЛУГИ" items={servicesTicker} direction="left" speed={25} />
                <CentralTicker label="ИНДУСТРИИ" items={nichesTicker} direction="right" speed={30} />
            </div>

            {/* About Us + Content */}
            <section className="py-24 px-4 container mx-auto relative z-20 bg-dark">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-5xl font-black uppercase mb-8 leading-none">About <br />Agency</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Мы не просто снимаем видео. Мы создаем <strong>цифровую экосистему</strong> для вашего бренда.
                            От стратегии и AI-аналитики до продакшна и дистрибуции.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-8 border border-white/10 rounded-2xl flex-1 text-center hover:bg-white/5 transition-colors">
                            <div className="text-4xl font-bold text-brand mb-2">50+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Projects</div>
                        </div>
                        <div className="p-8 border border-white/10 rounded-2xl flex-1 text-center hover:bg-white/5 transition-colors">
                            <div className="text-4xl font-bold text-brand mb-2">12</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Niches</div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Наши решения</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(s => (
                        <ServiceCard key={s.id} {...s} />
                    ))}
                </div>
            </section>

            <Contact />
        </main>
    );
}
