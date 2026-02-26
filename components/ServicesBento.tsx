"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Aperture, Video, Map, Scan } from "lucide-react";
import Link from "next/link";

const BentoCard = ({ title, desc, price, icon: Icon, delay, colSpan = "col-span-1" }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-brand/50 flex flex-col justify-between h-full ${colSpan}`}
    >
        <div>
            <div className="flex justify-between items-start mb-6">
                <div className="bg-brand/20 p-3 rounded-2xl text-brand group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:bg-brand group-hover:text-white transition-colors">
                    {price}
                </div>
            </div>

            <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-8">{desc}</p>
        </div>

        <Link href="#contact" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-brand transition-colors">
            Узнать стоимость <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
    </motion.div>
);

export default function ServicesBento() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                        Cash Cow <span className="text-brand">Products</span>
                    </h2>
                    <p className="text-gray-400">Инструменты с максимальным ROI для вашего бизнеса.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]">

                    {/* Drone - Large Card (2 cols) */}
                    <BentoCard
                        colSpan="lg:col-span-2"
                        title="Дрон-съёмка & FPV"
                        desc="Масштаб бизнеса с воздуха. Покажите инфраструктуру, локацию и размах. Идеально для недвижимости и ивентов."
                        price="Старт от 1 дня"
                        icon={Aperture}
                        delay={0.1}
                    />

                    {/* 360 Tours */}
                    <BentoCard
                        title="360° Туры"
                        desc="Эффект присутствия 24/7. Клиент гуляет по вашему объекту из дома. Букинг без визита."
                        price="Старт от 3 точек"
                        icon={Scan}
                        delay={0.2}
                    />

                    {/* Google Maps */}
                    <BentoCard
                        title="Google Maps"
                        desc="Точка на карте, которая продаёт. Настройка профиля, отзывы, фото. Вас найдут."
                        price="Упаковка под ключ"
                        icon={Map}
                        delay={0.3}
                    />

                    {/* Reels - Large Card (2 cols, centered usually, but here flowing) */}
                    <BentoCard
                        colSpan="lg:col-span-2 lg:col-start-2"
                        title="Reels Production"
                        desc="Органический охват. Мы пишем сценарии, снимаем и монтируем. Видео, которые досматривают."
                        price="Пакеты от 5 шт."
                        icon={Video}
                        delay={0.4}
                    />

                    {/* AI Staging (Filler for grid balance if needed, or keep 4 main ones) */}
                    <div className="hidden lg:flex lg:col-span-1 items-center justify-center p-8 border border-white/5 rounded-3xl text-center">
                        <div>
                            <h4 className="text-4xl font-black text-white/10 uppercase mb-2">ROI</h4>
                            <p className="text-xs text-gray-500 upercase tracking-widest">Return on Investment</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:col-span-1 items-center justify-center p-8 border border-white/5 rounded-3xl bg-brand/5">
                        <Link href="#contact" className="w-full h-full flex items-center justify-center text-center">
                            <div>
                                <span className="block text-3xl mb-2">🚀</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-brand">Запустить проект</span>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
