"use client";

import { Plane, View, MapPin, Film, Car, Calendar, Cpu, Layers } from "lucide-react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import BorderBeam from "@/components/ui/BorderBeam";

export default function ServicesBentoV12() {

    const services = [
        {
            id: 1,
            title: "Дрон & FPV",
            desc: "Аэросъемка любых масштабов. От строительных площадок до кинематографичных пролетов внутри помещений.",
            price: "от 1 дня",
            icon: <Plane className="w-6 h-6 text-brand" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            id: 2,
            title: "360° Туры",
            desc: "Виртуальные туры для недвижимости, отелей и производств. Google Street View интеграция.",
            price: "от 500 GEL",
            icon: <View className="w-6 h-6 text-purple-500" />,
            colSpan: "col-span-1",
        },
        {
            id: 3,
            title: "Reels Паки",
            desc: "Пакетная съемка коротких видео. Сценарий, съемка, монтаж. Контент на месяц за 2 дня.",
            price: "от 1200 GEL",
            icon: <Film className="w-6 h-6 text-green-500" />,
            colSpan: "col-span-1",
        },
        {
            id: 4,
            title: "AI Визуал",
            desc: "Генерация изображений и видео для рекламы. Быстрее и дешевле классического продакшена.",
            price: "от 300 GEL",
            icon: <Cpu className="w-6 h-6 text-pink-500" />,
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            id: 5,
            title: "Google Maps",
            desc: "Полная упаковка точки на картах. Отзывы, фото, 360 панорамы, актуализация данных.",
            price: "от 400 GEL",
            icon: <MapPin className="w-6 h-6 text-yellow-500" />,
            colSpan: "col-span-1",
        },
        {
            id: 6,
            title: "Экспресс-Сайты",
            desc: "Сайт на Tilda/Webflow за 3 дня. Идеально для запуска трафика.",
            price: "от 3 дней",
            icon: <Layers className="w-6 h-6 text-blue-400" />,
            colSpan: "col-span-1",
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-black relative z-10">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Услуги <br /> <span className="text-gray-500">Быстрого Запуска</span></h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Мы понимаем, что время — деньги. Поэтому выделили услуги, которые дают результат уже в первую неделю.
                        </p>
                    </div>
                    <Link href="#contact" className="hidden md:flex items-center gap-2 text-brand font-bold uppercase tracking-widest hover:text-white transition-colors mt-8 md:mt-0">
                        Все услуги <MoveRight />
                    </Link>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((s) => (
                        <motion.div
                            key={s.id}
                            variants={item}
                            className={`group relative bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors ${s.colSpan}`}
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {s.icon}
                                    </div>
                                    <div className="px-3 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-bold uppercase tracking-wider">
                                        {s.price}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>

                            {/* Border Beam Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <BorderBeam size={300} duration={8} delay={0} borderWidth={1.5} colorFrom="#3b82f6" colorTo="#9333ea" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="#contact" className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest hover:text-white transition-colors">
                        Все услуги <MoveRight />
                    </Link>
                </div>

            </div>
        </section>
    );
}
