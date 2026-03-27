'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { motion } from 'framer-motion';

const plans = [
    {
        title: 'Листинг',
        price: '300 ₾',
        features: ['До 90 минут на объекте', 'Фото + видео для объявления', 'Монтаж короткого ролика', 'Подходит для вторичного рынка'],
        buttonText: 'Выбрать',
        featured: false,
    },
    {
        title: 'Продажи ЖК',
        price: '650 ₾',
        features: ['Съемка комплекса и территории', 'Горизонтальный + вертикальный монтаж', 'Аэрообзор инфраструктуры', 'Готово для рекламы и отдела продаж'],
        buttonText: 'Выбрать',
        featured: true,
        tag: 'Популярно',
    },
    {
        title: 'Мониторинг',
        price: '700 ₾',
        period: '/мес',
        features: ['4 визита в месяц', 'Повторяемые точки съемки', 'Фото/видео отчет по этапам', 'Архив материалов для инвесторов'],
        buttonText: 'Выбрать',
        featured: false,
    },
];

export const RealEstatePricingStitch = () => {
    return (
        <DebugWrapper id={10700} label="Real Estate Pricing Section">
            <section className="py-24 bg-[#0D0D0D]" id="pricing">
                <div className="container mx-auto px-6 text-center mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="text-3xl font-bold mb-4 text-white">Тарифы</h2>
                    </DebugWrapper>
                    <DebugWrapper id={10702} label="Pricing Tagline">
                        <p className="text-gray-500 uppercase tracking-widest text-xs">
                            Прозрачные пакеты для риелторов и девелоперов
                        </p>
                    </DebugWrapper>
                </div>
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, idx) => (
                        <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`bg-[#141414] border p-8 rounded-[12px] relative flex flex-col h-full transition-all ${
                                    plan.featured
                                        ? 'border-[#D4A017] border-2 scale-105 shadow-[0_20px_40px_-15px_rgba(212,160,23,0.15)] shadow-[#D4A017]/10'
                                        : 'border-[#2a2a2a]'
                                }`}
                            >
                                {plan.tag && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A017] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                        {plan.tag}
                                    </div>
                                )}
                                <h3 className="font-bold text-xl mb-2 text-white">{plan.title}</h3>
                                <div className="text-4xl font-bold text-[#D4A017] mb-6">
                                    {plan.price}
                                    {plan.period && <span className="text-sm text-gray-500 ml-1">{plan.period}</span>}
                                </div>
                                <ul className="text-left text-sm text-gray-400 space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3">
                                            <span className="text-[#D4A017]">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-4 rounded-[12px] font-bold transition-all uppercase text-[10px] tracking-widest ${
                                        plan.featured
                                            ? 'bg-[#D4A017] text-black hover:bg-white'
                                            : 'border border-white/20 text-white hover:bg-white hover:text-black'
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </motion.div>
                        </DebugWrapper>
                    ))}
                </div>
            </section>
        </DebugWrapper>
    );
};
