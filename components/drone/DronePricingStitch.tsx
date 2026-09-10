'use client';

import React, { useState } from 'react';
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
        price: '200 ₾',
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
        title: 'Полная съёмка',
        price: '450 ₾',
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
    const [selectedMobilePlan, setSelectedMobilePlan] = useState<number | null>(null);

    return (
        <DebugWrapper id={10700} label="Drone Pricing Section">
            <section className="py-10 md:py-24 bg-[#0D0D0D]" id="pricing">
                <div className="container mx-auto px-6 text-center mb-6 md:mb-16">
                    <DebugWrapper id={10701} label="Pricing Header">
                        <h2 className="text-3xl font-bold mb-4 text-white">Пакеты и цены</h2>
                    </DebugWrapper>
                    <DebugWrapper id={10702} label="Pricing Tagline">
                        <p className="mx-auto max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
                            Фиксированные тарифы в лари (₾) на аэросъёмку в Тбилиси и по всей Грузии: от 250 ₾ за фасадный облёт до 900 ₾ за комплексную съёмку 4K + FPV с готовым монтажом под ключ. Работаем в Ваке, Сабуртало, Диди Дигоми, Старом городе и выезжаем в регионы.
                        </p>
                    </DebugWrapper>
                </div>

                <div className="container mx-auto px-6 max-w-full">
                    {/* Horizontal Swipe Carousel */}
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                        {plans.map((plan, idx) => (
                            <DebugWrapper key={idx} id={10710 + idx} label={`Pricing Plan: ${plan.title}`}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className={`snap-center shrink-0 w-[85vw] sm:w-[320px] xl:w-[280px] flex flex-col justify-between rounded-[20px] border p-6 md:p-8 transition-all ${
                                        plan.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(12,12,14,1)_28%)]'
                                            : 'border-white/10 bg-[#0C0C0E]'
                                    }`}
                                >
                                    <div>
                                        <div>
                                            <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">{plan.title}</h3>
                                            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{plan.subtitle}</p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-3">
                                            <p className="text-3xl font-bold text-white md:text-4xl">{plan.price}</p>
                                            {plan.popular ? (
                                                <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FFD23F]">
                                                    Популярно
                                                </span>
                                            ) : null}
                                        </div>
                                        <ul className="mt-8 flex-1 space-y-4 text-[14px] leading-relaxed text-zinc-300">
                                            {plan.items.map((item) => (
                                                <li key={item} className="flex gap-3">
                                                    <span className="text-white/50 shrink-0">—</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-10 pt-6 border-t border-white/5">
                                        {plan.note ? <p className="mb-6 text-sm leading-relaxed text-zinc-500">{plan.note}</p> : null}
                                        <a
                                            href="#contact"
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && plan.title) {
                                                    window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle: plan.title } }));
                                                    try { sessionStorage.setItem('breus_contact_prefill_service', plan.title); } catch {}
                                                }
                                            }}
                                            className={`inline-flex w-full items-center justify-center rounded-xl border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                                                plan.popular
                                                    ? 'bg-white text-black border-transparent hover:bg-zinc-200'
                                                    : 'border-white/20 bg-transparent text-white hover:bg-white/10'
                                            }`}
                                        >
                                            Выбрать тариф
                                        </a>
                                    </div>
                                </motion.div>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto mt-6 md:mt-10 px-6">
                    <DebugWrapper id={10730} label="Pricing Addons">
                        <div className="rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
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
