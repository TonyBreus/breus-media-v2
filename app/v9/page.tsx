"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function PageV9() {
    return (
        <div className="bg-dark">
            {/* HERO v9 */}
            <section className="h-[90vh] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />

                {/* Mock Video BG */}
                <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                    <span className="text-9xl font-black text-white/5 uppercase select-none">Showreel</span>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.9]">
                        Сегодня бизнес <br /> выбирают <span className="text-stroke-white text-transparent">глазами</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
                        Полноценная структура сайта v9.
                        <br />Навигация через /industries и /services.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/v9/services/drone-fpv" className="btn-primary bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
                            Выбрать услугу
                        </Link>
                        <Link href="#contact" className="px-8 py-4 rounded-full font-bold uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all">
                            Обсудить проект
                        </Link>
                    </div>
                </div>
            </section>

            {/* MOCK SERVICES PREVIEW */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['Drone FPV', '360 Tours', 'AI Staging', 'Google Maps'].map((s) => (
                        <Link href={`/v9/services/drone-fpv`} key={s} className="group p-8 bg-white/5 border border-white/5 hover:border-brand transition-all rounded-xl">
                            <div className="w-12 h-12 bg-white/10 rounded-full mb-6 group-hover:bg-brand transition-colors flex items-center justify-center">
                                <Play className="w-5 h-5 fill-current" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{s}</h3>
                            <p className="text-sm text-gray-500">Подробнее о сервисе &rarr;</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
