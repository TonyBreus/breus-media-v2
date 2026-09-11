'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { MessageCircle, Check } from 'lucide-react';

const plans = [
    {
        title: 'Базовый полёт',
        price: '200 ₾',
        subtitle: 'Аэросъёмка дроном с высоты',
        items: [
            'Съемка в 4K (экстерьер/фасад)',
            '10+ фото с разных ракурсов',
            'Сдача исходников за 24 часа',
        ],
        note: 'Подходит, если есть свой монтажер',
    },
    {
        title: 'FPV Интерьер',
        price: '300 ₾',
        subtitle: 'Внутренние пролеты помещения',
        items: [
            'Кинематографичный FPV пролет',
            'Съемка в 4K (интерьер)',
            'Сдача исходников за 24 часа',
        ],
        note: 'Идеально для отелей и ресторанов',
    },
    {
        title: 'Экстерьер + Монтаж',
        price: '350 ₾',
        subtitle: 'Облёт территории с монтажом',
        items: [
            'Продуманный маршрут облёта',
            'Смонтированный ролик',
            '15+ обработанных фото',
        ],
        note: 'Готовый визуал без внутренней съемки',
    },
    {
        title: 'Полная съёмка',
        price: '500 ₾',
        subtitle: 'Экстерьер с воздуха + FPV внутри',
        items: [
            'Аэровидео + FPV-пролёт в 4K',
            '10+ фото высокого разрешения',
            'Сдача исходников за 24 часа',
        ],
        note: 'Весь визуальный ряд за один выезд',
        popular: true,
    },
    {
        title: 'Упаковка под ключ',
        price: '700 ₾',
        subtitle: 'Полная съёмка + Монтаж всего материала',
        items: [
            'Съемка снаружи и внутри',
            'Монтаж готовых промо-роликов',
            '20+ обработанных фото',
            'Готовность от 48 часов',
        ],
        note: 'Комплексный B2B пакет без головной боли',
    },
];

export const DronePricingV2 = () => {
    const generateWaLink = (title: string, price: string) => {
        const text = encodeURIComponent(`Здравствуйте! Выбрал пакет «${title}» (${price}) на сайте. Объект в Тбилиси, когда возможен выезд?`);
        return `https://wa.me/995501103183?text=${text}`;
    };

    return (
        <DebugWrapper id={11002} label="Drone Pricing V2">
            <section className="py-16 md:py-24 bg-[#0D0D0D]" id="pricing-v2">
                <div className="mx-auto w-full max-w-[1400px] px-6 text-center mb-10 md:mb-16">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-2">
                        Фиксированные B2B тарифы
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Пакеты и цены
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-white/60">
                        От базового фасадного облёта до готового монтажа под ключ. Официальный B2B договор, инвойсинг и кристально прозрачные цены.
                    </p>
                </div>

                <div className="mx-auto w-full px-6 relative">
                    <div className="flex gap-4 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory pr-[10vw] md:pr-0 md:justify-center">
                        {plans.map((plan, idx) => (
                            <article 
                                key={idx} 
                                className={`snap-center shrink-0 w-[80vw] sm:w-[280px] xl:w-[320px] rounded-2xl flex flex-col p-6 transition-all duration-300 border ${
                                    plan.popular 
                                    ? 'bg-[#1A1A1A] border-[#D4A017]/50 shadow-[0_0_40px_rgba(212,160,23,0.15)] relative scale-100 md:scale-105 z-10' 
                                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A017] text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        Популярный выбор
                                    </div>
                                )}
                                
                                <div className="mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.title}</h3>
                                    <div className="text-sm text-white/60 min-h-[40px]">{plan.subtitle}</div>
                                </div>
                                
                                <div className="text-4xl font-black text-white mb-6">
                                    {plan.price}
                                </div>

                                <ul className="flex-1 space-y-3 mb-6 border-t border-white/10 pt-6">
                                    {plan.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80 leading-snug">
                                            <Check className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <div className="bg-white/5 rounded-lg p-3 text-[11px] text-white/50 mb-4 h-[60px] flex items-center">
                                        {plan.note}
                                    </div>
                                    <a 
                                        href={generateWaLink(plan.title, plan.price)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                                            plan.popular
                                            ? 'bg-[#D4A017] hover:bg-white text-black'
                                            : 'bg-white/10 hover:bg-white/20 text-white'
                                        }`}
                                    >
                                        <span>Выбрать тариф</span>
                                        <MessageCircle className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
