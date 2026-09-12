'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Бриф и согласование локации',
        desc: 'Проверка зоны полётов GCAA за 15 мин и утверждение технического задания.'
    },
    {
        num: '02',
        title: 'Выезд и съёмка',
        desc: 'Отбор лучших точек и ракурсов с земли и с воздуха.'
    },
    {
        num: '03',
        title: 'Цветокоррекция и постобработка',
        desc: 'Удаление шумов, стабилизация кадра и проявка профиля D-Log.'
    },
    {
        num: '04',
        title: 'Сдача через облачный диск',
        desc: 'Передача готовых материалов с бессрочным доступом по прямой ссылке.'
    }
];

export const DroneProcessV10 = () => {
    return (
        <DebugWrapper id={11011} label="Drone Process V10">
            <section className="bg-[#080808] py-16 md:py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                            От заявки до готовых файлов
                        </h2>
                        <p className="text-sm md:text-base text-white/60">
                            Прозрачный процесс работы без сюрпризов
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/10" />
                        
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col md:items-start group">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4A017] group-hover:bg-[#1a1a1a] transition-all shadow-xl">
                                    <span className="text-2xl md:text-4xl font-black text-[#D4A017] opacity-80 group-hover:opacity-100">{step.num}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed md:max-w-xs">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
