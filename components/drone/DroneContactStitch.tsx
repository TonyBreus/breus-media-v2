'use client';

import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const DroneContactStitch = () => {
    const [method, setMethod] = useState<'Telegram' | 'WhatsApp' | 'Email'>('Telegram');
    const [services, setServices] = useState<string[]>([]);

    const serviceOptions = ['Аэросъемка', 'Мониторинг', 'Недвижимость', 'Отели', 'Рестораны', 'Туризм'];

    const toggleService = (service: string) => {
        setServices((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]));
    };

    const contactPlaceholder =
        method === 'Email' ? 'hello@example.com' : method === 'WhatsApp' ? '+995 ...' : '@username';

    return (
        <DebugWrapper id={10900} label="Drone Contact Section">
            <section className="py-16 md:py-20 bg-[#080808]" id="contact">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] border border-[#D4A017]/30 rounded-2xl p-6 md:p-8 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.14),transparent_55%)] pointer-events-none" />
                        <DebugWrapper id={10901} label="Contact Header">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-tight">
                                ПОКАЖИТЕ НАМ ВАШ ОБЪЕКТ
                            </h2>
                        </DebugWrapper>
                        <DebugWrapper id={10902} label="Contact Description">
                            <p className="text-white/70 mb-6 max-w-2xl leading-relaxed text-sm md:text-base">
                                Оставьте контакты и короткий бриф. Подберем формат съемки и вернемся с расчетом в течение
                                рабочего часа.
                            </p>
                        </DebugWrapper>

                        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                        Ваше имя *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Иван Иванов"
                                        className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                        Способ связи *
                                    </label>
                                    <div className="flex gap-3">
                                        {(['Telegram', 'WhatsApp', 'Email'] as const).map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setMethod(option)}
                                                className={`pb-1.5 border-b-2 text-sm transition-colors ${
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
                                        type={method === 'Email' ? 'email' : 'text'}
                                        required
                                        placeholder={contactPlaceholder}
                                        className="w-full bg-transparent border-b border-white/25 pb-2.5 mt-3 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2.5">
                                    Интересующие услуги
                                </label>
                                <div className="flex flex-wrap gap-2.5">
                                    {serviceOptions.map((service) => {
                                        const isActive = services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition-colors ${
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
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                    Коротко о задаче
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Например: обзор ЖК с воздуха и короткий ролик для рекламы."
                                    className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors resize-none"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <DebugWrapper id={10910} label="Contact Primary CTA">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-[#D4A017] text-black py-3.5 px-6 rounded-xl font-bold uppercase tracking-[0.12em] text-xs md:text-sm hover:brightness-105 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Отправить
                                    </button>
                                </DebugWrapper>
                                <DebugWrapper id={10911} label="Contact Telegram CTA">
                                    <a
                                        href="https://wa.me/995574619393"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 border border-white/20 text-white py-3.5 px-6 rounded-xl font-semibold uppercase tracking-[0.12em] text-xs md:text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                </DebugWrapper>
                            </div>

                            <p className="text-[11px] text-white/45">
                                Нажимая кнопку, вы соглашаетесь на обработку контактов для обратной связи.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
