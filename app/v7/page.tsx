"use client";

import HeaderV7 from "@/components/HeaderV7";
import TickerV7 from "@/components/TickerV7";
import HeroScroll from "@/components/HeroScroll";
import Contact from "@/components/Contact";
import ServiceCard from "@/components/ServiceCard";
import { Plane, View, MapPin, Film, Car, Calendar } from "lucide-react";

export default function V7_DigitalSilk() {
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
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-brand selection:text-white">
            <HeaderV7 />

            {/* Hero with Scroll Effect */}
            <HeroScroll />

            {/* Tickers - Sticky below Hero */}
            <div className="sticky top-[80px] z-30">
                <TickerV7 label="УСЛУГИ" items={servicesTicker} direction="left" speed={25} />
                <TickerV7 label="ИНДУСТРИИ" items={nichesList} direction="right" speed={30} />
            </div>

            {/* Content Below */}
            <section className="py-24 px-4 container mx-auto relative z-20 bg-dark">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Готовые решения</h2>
                    <p className="text-gray-400">Выберите направление для быстрого старта.</p>
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
