
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

export const DroneAddonsV14 = () => {
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
                            <div key={i} className="bg-white/5 border border-white/10 p-3.5 md:p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-colors">
                                <div className="flex items-center sm:items-start gap-3 sm:gap-4">
                                    <div className="bg-black/40 p-2 rounded-lg border border-white/5 shrink-0">
                                        {addon.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white leading-snug mb-0.5">{addon.title}</h4>
                                        <p className="text-xs text-neutral-400 line-clamp-1 md:line-clamp-none">{addon.desc}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-3 shrink-0 mt-1 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                                    <span className="text-sm font-bold text-[#D4A017]">{addon.price}</span>
                                    <a
                                        href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Хочу заказать дополнительную опцию: ${addon.title}.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors border border-white/10 shrink-0 text-center"
                                    >
                                        Заказать
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
