'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { motion } from 'framer-motion';

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

const plans = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
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
        price: '350 ₾',
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
        title: 'Полная съёмка',
        price: '500 ₾',
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
        price: 'от 900 ₾',
        subtitle: 'Съёмка с воздуха + пролёт дроном внутри + монтаж и фото',
        items: [
            'Продуманный маршрут съёмки',
            'До 3 минут смонтированного видео — разбитого на несколько роликов под сайт, Reels, Stories и TikTok',
            '20+ обработанных фотографий',
            'Видео для карточки в Google Maps',
            'Передача материала — от 48 часов (монтаж включён)',
        ],
    },
] satisfies PricingCard[];

const addons = [
    'Монтаж Reels до 30 сек (музыка + субтитры): +150 ₾',
    'Монтаж ролика 30–60 сек для сайта: +150 ₾',
    '360° панорама с воздуха: +80 ₾',
];

export const DronePricingStitch = () => {
    return (
        <DebugWrapper id={10700} label="Drone Pricing Section">
            <section className="py-24 bg-[#0D0D0D]" id="pricing">
                <div className="container mx-auto px-6 text-center mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="text-3xl font-bold mb-4 text-white">Пакеты и цены</h2>
                    </DebugWrapper>
                    <DebugWrapper id={10702} label="Pricing Tagline">
                        <p className="text-gray-500 text-sm md:text-base">
                            Цены фиксированные, в грузинских лари (₾). Без скрытых доплат.
                        </p>
                    </DebugWrapper>
                </div>
                <div className="container mx-auto px-6 grid gap-5 xl:grid-cols-4 items-start">
                    {plans.map((plan, idx) => (
                        <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`flex flex-col rounded-[20px] border p-5 md:p-6 transition-all ${
                                    plan.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">{plan.title}</h3>
                                    <p className="mt-2 text-xs text-white/64 md:text-sm">{plan.subtitle}</p>
                                </div>
                                <div className="mt-5 flex items-center gap-2 md:mt-6 md:gap-3">
                                    <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{plan.price}</p>
                                    {plan.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Выгодно
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-relaxed text-white/72 md:mt-6 md:space-y-3 md:text-sm">
                                    {plan.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {plan.note ? <p className="mt-4 text-xs leading-relaxed text-white/58 md:mt-5 md:text-sm">{plan.note}</p> : null}
                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-6 md:py-2.5 md:text-xs"
                                >
                                    Обсудить этот пакет →
                                </a>
                            </motion.div>
                        </DebugWrapper>
                    ))}
                </div>
                <div className="container mx-auto mt-10 px-6">
                    <DebugWrapper id={10730} label="Pricing Addons">
                        <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Дополнительно по задаче</h3>
                            <p className="mt-3 leading-relaxed text-white/70">
                                Из одной съёмки можно собрать не только основной материал, но и дополнительные форматы под сайт, соцсети, Google
                                Business Profile и продажи.
                            </p>
                            <ul className="mt-6 grid gap-4 md:grid-cols-2">
                                {addons.map((addon) => (
                                    <li key={addon} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72">
                                        {addon}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </DebugWrapper>
                </div>
            </section>
        </DebugWrapper>
    );
};
