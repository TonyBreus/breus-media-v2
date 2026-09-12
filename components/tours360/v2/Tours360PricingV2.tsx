'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { MessageCircle, Check } from 'lucide-react';

const plans = [
    {
        title: 'Lite (от 5 панорам)',
        price: '200 ₾',
        subtitle: 'Базовый тур для квартир',
        items: [
            'Съемка до 5 точек',
            'Сборка виртуального тура',
            'Сдача работы за 2-3 дня',
        ],
        note: 'Идеально для посуточной аренды',
    },
    {
        title: 'Business (от 10 панорам)',
        price: '300 ₾',
        subtitle: 'Для магазинов и клиник',
        items: [
            'Съемка до 10 точек',
            'Публикация в Google Maps',
            'Интеграция логотипа',
        ],
        note: 'Повышает локальное SEO',
    },
    {
        title: 'Premium (от 20 панорам)',
        price: '500 ₾',
        subtitle: 'Отели, рестораны, склады',
        items: [
            'Съемка до 20 точек',
            'Интерактивное меню навигации',
            'Инфо-метки (hotspots)',
        ],
        note: 'Максимальное погружение',
    },
    {
        title: 'Индивидуальный',
        price: 'По запросу',
        subtitle: 'Для крупных объектов',
        items: [
            'Съемка более 20 точек',
            'Интеграция с планами этажей',
            'Мультиязычное меню',
        ],
        note: 'Рассчитывается индивидуально',
    },
];

export const Tours360PricingV2 = () => {
    return (
        <DebugWrapper id={12002} label="Tours 360 Pricing V2">
            <section className="py-16 md:py-24 bg-[#050505]">
                <div className="mx-auto w-full max-w-[1400px] px-6">
                    <div className="mb-12 md:mb-16 text-center">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-2">
                            Стоимость и пакеты
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Тарифы на 360° туры
                        </h2>
                        <p className="max-w-2xl mx-auto text-sm md:text-base text-white/60 leading-relaxed">
                            Стоимость тура зависит от количества панорам (одна панорама = одна комната или точка обзора).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {plans.map((plan, idx) => (
                            <div 
                                key={idx}
                                className="flex flex-col bg-white/[0.03] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-[#D4A017]/30 transition-colors"
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
                                    <div className="text-sm text-white/50">{plan.subtitle}</div>
                                </div>
                                
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                                        {plan.price !== 'По запросу' && <span className="text-white/40 text-sm"></span>}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-[#D4A017] font-bold mt-2">
                                        {plan.note}
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-4 mb-8 flex-1">
                                    {plan.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-3 text-sm text-white/80">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a 
                                    href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Интересует пакет 360° тура "${plan.title}". Расскажите подробнее.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-[#D4A017] text-white hover:text-black font-bold uppercase tracking-wide text-xs rounded-xl transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" /> Запросить
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
