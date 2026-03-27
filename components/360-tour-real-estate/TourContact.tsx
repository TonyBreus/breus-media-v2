'use client';

import { useState } from 'react';

export function TourContact() {
    const [method, setMethod] = useState<'Telegram' | 'WhatsApp' | 'Email'>('Telegram');
    const [services, setServices] = useState<string[]>([]);

    const serviceOptions = ['360° тур', 'Сайт/лендинг', 'Листинг-площадки', 'Продажи ЖК', 'Коммерческая недвижимость'];

    const toggleService = (service: string) => {
        setServices((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]));
    };

    const contactPlaceholder = method === 'Email' ? 'name@company.com' : method === 'WhatsApp' ? '+995 ...' : '@username';

    return (
        <section className="py-20 bg-[#080808]" id="contact">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto rounded-2xl border border-[#D4A017]/35 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-3 text-white">Обсудим ваш проект</h2>
                    <p className="text-white/70 mb-8 max-w-2xl leading-relaxed">
                        Оставьте контакты и задачу. Подскажем оптимальный пакет и формат внедрения 360° тура под ваш
                        сайт, листинг и отдел продаж.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Имя *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ваше имя"
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
                                placeholder="Тип объекта, площадь, сроки, где планируете размещение тура"
                                className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors resize-none"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="submit"
                                className="flex-1 bg-[#D4A017] text-black py-3.5 px-6 rounded-xl font-bold uppercase tracking-[0.12em] text-xs md:text-sm hover:brightness-105 transition-colors"
                            >
                                Отправить заявку
                            </button>
                            <a
                                href="https://wa.me/995555000000"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 border border-white/20 text-white py-3.5 px-6 rounded-xl font-semibold uppercase tracking-[0.12em] text-xs md:text-sm hover:bg-white/5 transition-colors text-center"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
