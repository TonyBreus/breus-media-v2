'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'ЗАЯВКА',
        description: 'Обсуждаем цели, локацию и техническое задание проекта.'
    },
    {
        number: '02',
        title: 'ПОДГОТОВКА',
        description: 'Проверка зон полета (GCAA), погоды и логистики.'
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Работа на объекте. Несколько вылетов для лучшего ракурса.'
    },
    {
        number: '04',
        title: 'МАТЕРИАЛ',
        description: 'Пост-обработка и передача файлов в облако за 24-72 часа.'
    }
];

export const DroneProcessStitch = () => {
    return (
        <DebugWrapper id={10500} label="Drone Process Section">
            <section className="py-4 md:py-24 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="md:hidden -mx-2 px-2 py-2 overflow-x-auto">
                        <div className="flex items-center gap-2 min-w-max">
                            {steps.map((step, idx) => (
                                <DebugWrapper key={idx} id={10510 + idx} label={`Process Step Compact ${idx + 1}: ${step.title}`}>
                                    <div className="min-w-[68px] h-9 px-2 rounded-md border border-white/12 bg-white/[0.02] flex items-center justify-center">
                                        <div className="flex items-center gap-1 whitespace-nowrap leading-none">
                                            <span className="text-xs text-white/30">{step.number}</span>
                                            <span className="text-[10px] font-bold text-[#D4A017] uppercase tracking-widest">
                                                {step.title}
                                            </span>
                                        </div>
                                    </div>
                                </DebugWrapper>
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
