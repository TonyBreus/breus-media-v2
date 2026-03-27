'use client';

import { FormEvent, useState } from 'react';

export function ReportingContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                        Телефон / WhatsApp / Telegram
                    </label>
                    <input
                        type="text"
                        placeholder="+995 ... или @username"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Объект</label>
                    <input
                        type="text"
                        placeholder="Адрес, тип объекта, площадь"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Частота отчётов</label>
                    <input
                        type="text"
                        placeholder="Еженедельно / раз в 2 недели / ежемесячно"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
            </div>

            <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Задача</label>
                <textarea
                    rows={4}
                    placeholder="Что важно фиксировать: прогресс стройки, контроль подрядчика, отчёт инвестору..."
                    className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                />
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
            >
                Отправить заявку
            </button>

            {submitted ? (
                <p className="rounded-[12px] border border-[#FFD23F]/30 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/80">
                    Спасибо, запрос принят. Свяжемся с вами и предложим оптимальный формат аэроотчётов.
                </p>
            ) : null}
        </form>
    );
}
