'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const steps = [
    {
        number: '01',
        title: 'БРИФ',
        description: 'Фиксируем тип объекта, целевую аудиторию и формат публикации.',
    },
    {
        number: '02',
        title: 'ПОДГОТОВКА',
        description: 'Планируем маршрут съемки, согласуем окна по свету и доступам.',
    },
    {
        number: '03',
        title: 'СЪЁМКА',
        description: 'Записываем интерьер, экстерьер и аэросцены по согласованному сценарию.',
    },
    {
        number: '04',
        title: 'ГОТОВЫЙ ПАКЕТ',
        description: 'Передаем ролики, фото и short-form версии для рекламы и соцсетей.',
    },
];

export const RealEstateProcessStitch = () => {
    return (
        <DebugWrapper id={10500} label="Real Estate Process Section">
            <section className="py-24 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <DebugWrapper key={idx} id={10510 + idx} label={`Process Step ${idx + 1}: ${step.title}`}>
                                <div className="relative group">
                                    <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4 select-none group-hover:text-[#D4A017]/10 transition-colors">
                                        {step.number}
                                    </div>
                                    <h4 className="text-[#D4A017] font-bold mb-3 relative tracking-widest">{step.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                                </div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
