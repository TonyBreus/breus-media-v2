'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { PlusCircle, Video, Film, Globe, Clock } from 'lucide-react';

const ADDONS = [
    {
        icon: <Video className="w-5 h-5 text-[#D4A017]" />,
        title: 'Монтаж вертикального Reels / TikTok под ключ',
        desc: 'Динамика, трендовая музыка, титры и переходы.',
        price: 'от 150 ₾'
    },
    {
        icon: <Film className="w-5 h-5 text-[#D4A017]" />,
        title: 'Фирменный представительский 4K-ролик',
        desc: 'Цветокоррекция D-Log, саунд-дизайн, инфографика.',
        price: 'от 250 ₾'
    },
    {
        icon: <Globe className="w-5 h-5 text-[#D4A017]" />,
        title: 'Аэропанорама 360° для Google Maps и сайта',
        desc: 'Полный обзор локации с высоты птичьего полета.',
        price: 'от 100 ₾'
    },
    {
        icon: <Clock className="w-5 h-5 text-[#D4A017]" />,
        title: 'Срочный экспресс-монтаж за 12 часов',
        desc: 'Приоритетная передача готовых файлов день в день.',
        price: '+50% к стоимости'
    }
];

export const DroneAddonsV10 = () => {
    return (
        <DebugWrapper id={11010} label="Drone Addons V10">
            <section className="bg-[#080808] pb-12 md:pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <PlusCircle className="w-6 h-6 text-white/50" />
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                            Дополнительно к любому выезду
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ADDONS.map((addon, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-[16px] p-5 flex flex-col hover:border-white/20 transition-colors">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="mt-1 bg-black/40 p-2 rounded-lg border border-white/5 shrink-0">
                                        {addon.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white leading-snug mb-1">{addon.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{addon.desc}</p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-3 border-t border-white/5 text-right">
                                    <span className="text-xs font-bold text-[#D4A017]">{addon.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
