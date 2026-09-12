import React from 'react';

export const ComparisonRealEstateV2 = () => {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Разница в подаче объекта</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                        Как видят ваш объект инвесторы: стандартные фотографии фасадов против объемного 4K-видео с дрона.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                    {/* Phone/Ground Version */}
                    <div className="rounded-[24px] border border-white/10 bg-[#141414] overflow-hidden flex flex-col grayscale opacity-80">
                        <div className="h-48 md:h-64 bg-zinc-800 flex items-center justify-center p-6 text-center border-b border-white/10 relative">
                            <span className="text-zinc-500 font-bold tracking-widest uppercase text-sm">Обычное фото фасада<br/>(Обрезано, нет масштаба)</span>
                        </div>
                        <div className="p-6 md:p-8 flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">С земли на телефон</h3>
                            <ul className="space-y-3">
                                <li className="text-sm text-white/50 flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Нет понимания этажности и видовых характеристик
                                </li>
                                <li className="text-sm text-white/50 flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Инфраструктура (парки, магазины, дороги) остается за кадром
                                </li>
                                <li className="text-sm text-white/50 flex items-start gap-2">
                                    <span className="text-red-500 font-bold">✕</span> Сливается с 95% конкурентов на MyHome.ge
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Drone Version */}
                    <div className="rounded-[24px] border border-[#FFD23F]/40 bg-gradient-to-b from-[#1a1a1a] to-[#141414] overflow-hidden flex flex-col shadow-[0_0_40px_rgba(255,210,63,0.05)] relative">
                        <div className="absolute top-4 right-4 bg-[#FFD23F] text-black font-bold uppercase tracking-wider text-[10px] px-3 py-1 rounded-full z-10">
                            Высокая конверсия
                        </div>
                        <div className="h-48 md:h-64 bg-zinc-800 relative border-b border-[#2a2a2a] overflow-hidden">
                            {/* Abstract placeholder for beautiful drone shot */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#141414] to-[#141414]" />
                            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                                <span className="text-[#FFD23F] font-bold tracking-widest uppercase text-sm drop-shadow-md">Аэропанорама 360°<br/>+ Вид из окон + Окружение</span>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex-1">
                            <h3 className="text-xl font-bold text-white mb-4">4K-дрон с воздуха</h3>
                            <ul className="space-y-3">
                                <li className="text-sm text-white/80 flex items-start gap-2">
                                    <span className="text-[#25D366] font-bold">✓</span> <strong className="text-white">Окружение:</strong> транспортная доступность, парки, школы одним планом
                                </li>
                                <li className="text-sm text-white/80 flex items-start gap-2">
                                    <span className="text-[#25D366] font-bold">✓</span> <strong className="text-white">Вид из окна:</strong> симуляция вида с 15-го этажа ещё до постройки
                                </li>
                                <li className="text-sm text-white/80 flex items-start gap-2">
                                    <span className="text-[#25D366] font-bold">✓</span> <strong className="text-white">Доверие:</strong> дистанционные покупатели видят масштаб и покупают без приезда
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
