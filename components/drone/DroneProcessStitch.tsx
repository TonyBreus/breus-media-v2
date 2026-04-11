'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'ЗАДАЧА',
        description: 'Описываете задачу, объект или локацию — предлагаем подходящий формат.'
    },
    {
        number: '02',
        title: 'ПОДГОТОВКА',
        description: 'Согласуем дату, проверяем зону полёта и условия съёмки.'
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Работаем на объекте, делаем несколько проходов — выбираем лучший материал.'
    },
    {
        number: '04',
        title: 'ГОТОВО',
        description: 'Передаём готовые файлы удобным способом в согласованный срок.'
    }
];

export const DroneProcessStitch = () => {
    return (
        <DebugWrapper id={10500} label="Drone Process Section">
            <section className="py-4 md:py-24 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="md:hidden px-2 py-2">
                        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/35">От заявки до готовых файлов</p>
                        <div className="flex flex-col">
                            {steps.map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="flex items-center gap-3 py-2 px-3 rounded-[8px] bg-white/[0.03] border border-white/[0.07]">
                                        <span className="text-[11px] text-white/25 font-mono w-5 shrink-0">{step.number}</span>
                                        <span className="text-[12px] font-bold text-[#D4A017] uppercase tracking-widest">{step.title}</span>
                                        <span className="text-[11px] text-white/45 leading-snug">{step.description}</span>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="flex justify-center py-0.5 text-white/20 text-xs">↓</div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <DebugWrapper key={idx} id={10510 + idx} label={`Process Step ${idx + 1}: ${step.title}`}>
                                <div className="relative group">
                                    <div className="hidden md:block text-6xl font-black text-white/5 absolute -top-10 -left-4 select-none group-hover:text-[#D4A017]/10 transition-colors">
                                        {step.number}
                                    </div>
                                    <h4 className="text-[#D4A017] font-bold mb-3 relative tracking-widest">
                                        {step.title}
                                    </h4>
                                    <p className="hidden md:block text-sm text-gray-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
