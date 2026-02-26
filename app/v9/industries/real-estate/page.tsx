"use client";

import Link from "next/link";
import { ArrowRight, Play, Box, Camera } from "lucide-react";

export default function NichePage_RealEstate() {
    return (
        <div className="bg-dark min-h-screen text-white">
            {/* Niche Hero */}
            <section className="py-24 pt-32 container mx-auto px-4">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Недвижимость <br /> <span className="text-brand">продается</span> глазами.
                    </h1>
                    <p className="text-2xl text-gray-400 mb-12 border-l-4 border-brand pl-6">
                        87% покупателей принимают решение о просмотре объекта на основе видео и 360-туров. Вы теряете клиентов, если у вас только фото.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-16 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Комплексное решение для застройщиков</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-dark border border-white/10 rounded-2xl hover:border-brand transition-colors">
                            <Play className="w-10 h-10 text-brand mb-6" />
                            <h3 className="text-xl font-bold mb-2">Аэросъемка ЖК</h3>
                            <p className="text-gray-400">Показать локацию, инфраструктуру и масштаб стройки с воздуха.</p>
                        </div>
                        <div className="p-8 bg-dark border border-white/10 rounded-2xl hover:border-brand transition-colors">
                            <Box className="w-10 h-10 text-brand mb-6" />
                            <h3 className="text-xl font-bold mb-2">360° VR Туры</h3>
                            <p className="text-gray-400">Виртуальная прогулка по квартире 24/7. Экономит время менеджеров.</p>
                        </div>
                        <div className="p-8 bg-dark border border-white/10 rounded-2xl hover:border-brand transition-colors">
                            <Camera className="w-10 h-10 text-brand mb-6" />
                            <h3 className="text-xl font-bold mb-2">AI Staging</h3>
                            <p className="text-gray-400">Виртуальная мебель в пустые квартиры ("бетон") за 1 день.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="#contact" className="btn-primary bg-white text-black px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-brand hover:text-white transition-all">
                    Получить стратегию для Недвижимости <ArrowRight className="w-5 h-5" />
                </Link>
            </section>
        </div>
    );
}
