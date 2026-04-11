'use client';

import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const DroneContactStitch = () => {
    const [method, setMethod] = useState<'Telegram' | 'WhatsApp' | 'Звонок'>('Telegram');
    const [services, setServices] = useState<string[]>([]);

    const serviceOptions = ['Недвижимость', 'Отели', 'Рестораны', 'Туризм', 'Инспекция', 'Мониторинг'];

    const toggleService = (service: string) => {
        setServices((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]));
    };

    const contactPlaceholder =
        method === 'Звонок' ? '+995 ...' : method === 'WhatsApp' ? '+995 ...' : '@username';

    return (
        <DebugWrapper id={10900} label="Drone Contact Section">
            <section className="bg-[#080808] py-6 md:py-20" id="contact">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#D4A017]/30 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-3.5 md:rounded-2xl md:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.14),transparent_55%)] pointer-events-none" />
                        <DebugWrapper id={10901} label="Contact Header">
                            <h2 className="mb-1.5 text-[20px] font-bold tracking-tight text-white md:text-3xl">
                                ОБСУДИМ ВАШУ ЗАДАЧУ
                            </h2>
                        </DebugWrapper>
                        <DebugWrapper id={10902} label="Contact Description">
                            <p className="mb-3 max-w-2xl text-[12px] leading-snug text-white/70 md:mb-6 md:text-base">
                                Оставьте контакт и пару слов о задаче — предложим формат и вернёмся с расчётом.
                            </p>
                        </DebugWrapper>

                        <form className="relative z-10 space-y-2.5 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
                                <div className="hidden md:block">
                                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                        Ваше имя
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Иван Иванов"
                                        className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:pb-2.5"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                        Способ связи *
                                    </label>
                                    <div className="flex gap-2 md:gap-3">
                                        {(['Telegram', 'WhatsApp', 'Звонок'] as const).map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setMethod(option)}
                                                className={`border-b-2 pb-1 text-xs transition-colors md:pb-1.5 md:text-sm ${
                                                    method === option
                                                        ? 'border-[#D4A017] text-white'
                                                        : 'border-transparent text-white/45 hover:text-white/80'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder={contactPlaceholder}
                                        className="mt-2.5 w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:mt-3 md:pb-2.5"
                                    />
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2.5 md:text-[11px]">
                                    Интересующие услуги
                                </label>
                                <div className="flex flex-wrap gap-1.5 md:gap-2.5">
                                    {serviceOptions.map((service) => {
                                        const isActive = services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`rounded-full border px-2.5 py-1 text-[11px] transition-colors md:px-3 md:py-1.5 md:text-sm ${
                                                    isActive
                                                        ? 'bg-[#D4A017] border-[#D4A017] text-black font-semibold'
                                                        : 'border-white/20 text-white/70 hover:border-white/45 hover:text-white'
                                                }`}
                                            >
                                                {service}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                    Сайт, Instagram или адрес объекта
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ссылка, локация или @аккаунт — разберёмся быстрее"
                                    className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:pb-2.5"
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                    Коротко о задаче
                                </label>
                                <textarea
                                    rows={2}
                                    placeholder="Например: обзор ЖК с воздуха и короткий ролик для рекламы."
                                    className="h-12 w-full resize-none border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:h-auto md:pb-2.5"
                                />
                            </div>

                            <div className="flex flex-row gap-2 pt-0.5 md:pt-1">
                                <DebugWrapper id={10910} label="Contact Primary CTA">
                                    <button
                                        type="submit"
                                        className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#D4A017] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-black transition-colors hover:brightness-105 md:gap-2 md:px-6 md:py-3.5 md:text-sm"
                                    >
                                        <Send className="w-4 h-4" />
                                        Получить расчёт
                                    </button>
                                </DebugWrapper>
                                <DebugWrapper id={10911} label="Contact Telegram CTA">
                                    <a
                                        href="https://wa.me/995574619393?text=Здравствуйте%2C+меня+интересует+съёмка.+Расскажите+подробнее."
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-1 items-center justify-center gap-1.5 text-[11px] text-white/45 hover:text-white/80 transition-colors md:text-sm"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        или написать в WhatsApp
                                    </a>
                                </DebugWrapper>
                            </div>

                            <p className="hidden md:block text-[10px] leading-tight text-white/45 md:text-[11px]">
                                Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
