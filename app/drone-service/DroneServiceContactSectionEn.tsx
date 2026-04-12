'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

type ContactMethod = 'Telegram' | 'WhatsApp' | 'Call';

const serviceOptions = ['Real estate', 'Hotels', 'Restaurants', 'Tourism', 'Inspection', 'Construction'];
const whatsappMessage = 'Hello, I am interested in drone filming. Tell me more.';

export function DroneServiceContactSectionEn() {
    const [method, setMethod] = useState<ContactMethod>('Telegram');
    const [services, setServices] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (service: string) => {
        setServices((previous) =>
            previous.includes(service) ? previous.filter((item) => item !== service) : [...previous, service]
        );
    };

    const contactPlaceholder = method === 'Telegram' ? '@username' : '+995 ...';

    return (
        <section id="contact" className="scroll-mt-[116px] bg-[#080808] py-8 md:scroll-mt-24 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#D4A017]/30 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-4 md:rounded-2xl md:p-8">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.14),transparent_55%)]" />

                    <h2 className="mb-2 text-[24px] font-bold tracking-tight text-white md:text-3xl">
                        DISCUSS YOUR PROJECT
                    </h2>
                    <p className="mb-5 max-w-2xl text-[13px] leading-relaxed text-white/72 md:mb-7 md:text-base">
                        Leave your contact and a few words about the task — we will suggest a format and get back with
                        a quote.
                    </p>

                    <form
                        id="contact-form"
                        className="relative z-10 space-y-4 md:space-y-5"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setSubmitted(true);
                        }}
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                                <div className="text-4xl">OK</div>
                                <h3 className="text-lg font-bold text-white">Request sent!</h3>
                                <p className="max-w-sm text-sm leading-relaxed text-white/60">
                                    We will get back to you within one business hour via Telegram or WhatsApp.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                                    <div>
                                        <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-[11px]">
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Smith"
                                            className="w-full border-b border-white/25 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017]"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-[11px]">
                                            Preferred contact *
                                        </label>
                                        <div className="flex gap-3">
                                            {(['Telegram', 'WhatsApp', 'Call'] as const).map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => setMethod(option)}
                                                    className={`border-b-2 pb-1.5 text-xs transition-colors md:text-sm ${
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
                                            className="mt-3 w-full border-b border-white/25 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-[11px]">
                                        Services
                                    </label>
                                    <div className="flex flex-wrap gap-2.5">
                                        {serviceOptions.map((service) => {
                                            const isActive = services.includes(service);
                                            return (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`rounded-full border px-3 py-1.5 text-[11px] transition-colors md:text-sm ${
                                                        isActive
                                                            ? 'border-[#D4A017] bg-[#D4A017] font-semibold text-black'
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
                                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-[11px]">
                                        YOUR SOCIAL OR WEBSITE
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="@account, link or venue name"
                                        className="w-full border-b border-white/25 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:text-[11px]">
                                        Brief description of the task
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="For example: aerial overview of a residential complex and a short promo clip."
                                        className="min-h-[72px] w-full resize-none border-b border-white/25 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017]"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 pt-1 md:flex-row md:items-center">
                                    <button
                                        type="submit"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D4A017] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-black transition-colors hover:brightness-105 md:text-sm"
                                    >
                                        <Send className="h-4 w-4" />
                                        Send Request
                                    </button>
                                    <a
                                        href={`https://wa.me/995574619393?text=${encodeURIComponent(whatsappMessage)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 text-[11px] text-white/55 transition-colors hover:text-white/85 md:text-sm"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        or message on WhatsApp
                                    </a>
                                </div>

                                <p className="text-[10px] leading-tight text-white/45 md:text-[11px]">
                                    By submitting you agree to the processing of your contact details.
                                </p>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
