'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { Check, Star } from 'lucide-react';

const plans = [
    {
        title: 'Полёт снаружи',
        price: 'от 200 ₾',
        subtitle: 'Аэросъёмка дроном с высоты',
        items: [
            'Видео в 4K + фото в высоком разрешении — готовы к использованию',
            '10+ фотографий с разных ракурсов',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Подходит, если вы сами работаете с визуалом — получаете и используете где нужно.',
    },
    {
        title: 'Пролёт внутри (FPV)',
        price: '300 ₾',
        subtitle: 'FPV-дрон, пролёт камерой по залу',
        items: [
            'Видео в 4K — готово к использованию',
            'Несколько заходов — подбираем лучший маршрут',
            'Около 1,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'FPV — это компактный дрон для полёта в помещениях. Камера летит по залу, и зритель видит пространство так, будто проходит сквозь него.',
    },
    {
        title: 'Полёт + Монтаж',
        price: 'от 350 ₾',
        subtitle: 'Аэросъёмка экстерьера с готовым роликом (без FPV внутри)',
        items: [
            'Продуманный маршрут облёта территории',
            'Короткое смонтированное видео для сайта и соцсетей',
            '15+ обработанных фотографий',
            'Передача готового материала — от 48 часов',
        ],
        note: 'Идеально, когда нужно эффектно показать масштабы объекта, локацию и фасад, но съёмка внутри не требуется.',
    },
    {
        title: 'Полная съёмка',
        price: 'от 450 ₾',
        subtitle: 'Съёмка с воздуха + пролёт внутри — зал, веранда, терраса — за один визит',
        items: [
            'Аэровидео и FPV-пролёт в 4K',
            '10+ фотографий в высоком разрешении с разных ракурсов',
            'Около 2,5 часов на объекте — от подготовки до финального дубля',
            'Передача файлов — от 24 часов',
        ],
        note: 'Полная съёмка за один выезд — и фасад с воздуха, и пролёт по вашему пространству.',
        popular: true,
    },
    {
        title: 'С готовым результатом',
        price: 'от 700 ₾',
        subtitle: 'Съёмка с воздуха + пролёт дроном внутри + монтаж и фото',
        items: [
            'Продуманный маршрут съёмки',
            'До 2 минут смонтированного видео в форматах для сайта и соцсетей',
            '20+ обработанных фотографий',
            'Видео для карточки в Google Maps',
            'Передача материала — от 48 часов',
        ],
        note: 'Упаковка под ключ. Вы получаете весь спектр видеоматериалов, готовых к публикации без дополнительных затрат на монтаж.',
    },
];

export const DronePricingV10 = () => {
    return (
        <DebugWrapper id={11013} label="Drone Pricing V10">
            <section className="py-16 md:py-24 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
                            Тарифы на съёмку
                        </h2>
                        <p className="text-white/60 text-base md:text-lg">
                            Понятные пакеты для бизнеса и частных объектов без скрытых платежей
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {plans.map((plan, i) => {
                            const isPopular = plan.popular;
                            const waText = encodeURIComponent(`Здравствуйте! Выбрал пакет «${plan.title}» (${plan.price}) на сайте. Объект в Тбилиси, когда возможен выезд?`);
                            const waLink = `https://wa.me/995501103183?text=${waText}`;

                            return (
                                <div 
                                    key={i} 
                                    className={`relative flex flex-col rounded-2xl border ${isPopular ? 'border-[#D4A017] bg-[#D4A017]/[0.02]' : 'border-white/10 bg-white/5'} p-6 md:p-8 transition-all hover:-translate-y-1 hover:border-[#D4A017]/50`}
                                >
                                    {isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A017] text-black text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1.5 shadow-lg shadow-[#D4A017]/20">
                                            <Star className="w-3.5 h-3.5 fill-black" />
                                            Частый выбор
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                                        <div className="text-[#D4A017] text-3xl font-black mb-4">{plan.price}</div>
                                        <p className="text-sm font-medium text-white/80 h-10">{plan.subtitle}</p>
                                    </div>

                                    <div className="flex-1">
                                        <ul className="space-y-3 mb-8">
                                            {plan.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                                                    <Check className="w-5 h-5 text-[#D4A017] shrink-0" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-6">
                                            <p className="text-xs text-white/50 leading-relaxed">
                                                {plan.note}
                                            </p>
                                        </div>

                                        <a 
                                            href={waLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`block w-full py-4 text-center rounded-xl font-bold text-sm uppercase tracking-wide transition-colors ${
                                                isPopular 
                                                ? 'bg-[#D4A017] text-black hover:bg-white' 
                                                : 'bg-white/10 text-white hover:bg-[#D4A017] hover:text-black'
                                            }`}
                                        >
                                            Выбрать тариф
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
