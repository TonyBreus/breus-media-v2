'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'ЗАПРОС',
        description: 'Описываете задачу, объект или локацию — предлагаем подходящий формат.'
    },
    {
        number: '02',
        title: 'ПЛАН',
        description: 'Согласуем дату, уточняем зону полёта и условия съёмки.'
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Работаем на объекте, делаем несколько проходов — выбираем лучший материал.'
    },
    {
        number: '04',
        title: 'ПЕРЕДАЧА',
        description: 'Передаём готовые файлы удобным способом в согласованный срок.'
    }
];

export const DroneProcessStitch = () => {
    return (
        <DebugWrapper id={10500} label="Drone Process Section">
            <section className="py-8 md:py-20 bg-[#0D0D0D]">
                <div className="container mx-auto px-6 mb-6 md:mb-12">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-1">
                        От заявки до готовых файлов
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Процесс аэросъёмки
                    </h2>
                    <p className="max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed">
                        Организуем съёмку дроном в Тбилиси и по всей Грузии за 4 понятных шага: бриф, проверка бесполётных зон, съёмка на объекте и передача 4K-материалов от 24 часов.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="md:hidden px-2 py-2">
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

                    <div className="hidden md:block">
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                            {steps.map((step, idx) => (
                                <DebugWrapper key={idx} id={10510 + idx} label={`Process Step ${idx + 1}: ${step.title}`}>
                                    <div className="relative group">
                                        <div className="hidden md:block text-6xl font-black text-white/5 absolute -top-10 -left-4 select-none group-hover:text-[#D4A017]/10 transition-colors">
                                            {step.number}
                                        </div>
                                        <h4 className="text-[#D4A017] font-bold mb-3 relative tracking-widest">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
