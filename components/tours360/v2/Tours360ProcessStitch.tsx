'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'БРИФ',
        description: 'Уточняем задачи, количество панорам и площадки для публикации (Google Maps или сайт).'
    },
    {
        number: '02',
        title: 'ВЫЕЗД',
        description: 'Съемка объекта занимает от 30 до 60 минут, не мешая вашей работе.'
    },
    {
        number: '03',
        title: 'СБОРКА',
        description: 'Склеиваем панорамы, настраиваем переходы и добавляем навигацию.'
    },
    {
        number: '04',
        title: 'ПУБЛИКАЦИЯ',
        description: 'Выгружаем тур в Google Maps или передаем вам готовый код для вставки на сайт.'
    }
];

export const Tours360ProcessStitch = () => {
    return (
        <DebugWrapper id={12500} label="Tours 360 Process Section">
            <section className="py-8 md:py-20 bg-[#0D0D0D]">
                <div className="container mx-auto px-6 mb-6 md:mb-12">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-1">
                        От заявки до публикации
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Этапы создания тура
                    </h2>
                    <p className="max-w-2xl text-xs md:text-sm text-white/60 leading-relaxed">
                        Организуем создание 360° виртуального тура в Тбилиси и Грузии за 4 понятных шага: бриф, съемка, сборка и публикация. Готовый результат от 2-х дней.
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
                                <DebugWrapper key={idx} id={12510 + idx} label={`Process Step ${idx + 1}: ${step.title}`}>
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
