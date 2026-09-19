
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
                    <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-3">
                            <PlusCircle className="w-6 h-6 text-white/50 shrink-0" />
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                                Дополнительные опции и монтаж
                            </h3>
                        </div>
                        <p className="text-sm text-neutral-400 mt-2 ml-9">
                            К пакету съёмки или для вашего готового видео
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {ADDONS.map((addon, i) => (
                            <div key={i} className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5 hover:border-white/15 transition-all">
                                <div className="shrink-0 px-3 py-1.5 rounded-lg bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] font-black text-xs sm:text-sm">
                                    {addon.price}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug truncate">{addon.title}</h4>
                                    <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
