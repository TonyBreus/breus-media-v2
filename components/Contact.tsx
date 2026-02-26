"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        niche: "Недвижимость",
        task: "",
        services: [] as string[]
    });

    const servicesList = ["Дрон", "360 Tour", "Reels", "Google Maps", "Авто", "Event", "AI"];
    const nichesList = ["Недвижимость", "HoReCa", "Медицина", "Ритейл", "Производство", "Другое"];

    const handleServiceChange = (svc: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(svc)
                ? prev.services.filter(s => s !== svc)
                : [...prev.services, svc]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `👋 Привет, Breus Media!
    
Меня зовут: *${formData.name}*
Ниша: *${formData.niche}*
Интересуют услуги: *${formData.services.join(", ") || "Не выбрано"}*
    
Задача: ${formData.task}
    
Мой контакт: ${formData.contact}`;

        // Encode and open WhatsApp
        const url = `https://wa.me/995000000000?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-t from-black to-dark-surface relative">
            <div className="container px-4 mx-auto max-w-4xl">

                {/* Process Steps */}
                <div className="flex justify-between items-center mb-16 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-8">
                    <span className="text-brand">01. Анализ</span>
                    <span>→ 02. Сценарий</span>
                    <span>→ 03. Продакшн</span>
                    <span>→ 04. Результат</span>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы усилить присутствие?</h2>
                    <p className="text-gray-400">Заполните бриф — мы вернемся с идеями в течение 24 часов.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300">Ваше Имя</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                                placeholder="Иван Петров"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300">Контакт (TG/WA/Email)</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all"
                                placeholder="@username или +995..."
                                value={formData.contact}
                                onChange={e => setFormData({ ...formData, contact: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="text-sm font-bold text-gray-300 mb-4 block">Что интересует? (Можно несколько)</label>
                        <div className="flex flex-wrap gap-3">
                            {servicesList.map(svc => (
                                <button
                                    key={svc}
                                    type="button"
                                    onClick={() => handleServiceChange(svc)}
                                    className={`px-4 py-2 rounded-full border text-sm transition-all ${formData.services.includes(svc)
                                            ? "bg-brand border-brand text-white"
                                            : "bg-black/30 border-white/10 text-gray-400 hover:border-white/30"
                                        }`}
                                >
                                    {svc} {formData.services.includes(svc) && "✓"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="text-sm font-bold text-gray-300 mb-2 block">Ниша</label>
                        <select
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand outline-none appearance-none"
                            value={formData.niche}
                            onChange={e => setFormData({ ...formData, niche: e.target.value })}
                        >
                            {nichesList.map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>

                    <div className="mb-8">
                        <label className="text-sm font-bold text-gray-300 mb-2 block">Коротко о задаче</label>
                        <textarea
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand outline-none h-32 resize-none"
                            placeholder="Нужно снять дрон-тур для нового ЖК..."
                            value={formData.task}
                            onChange={e => setFormData({ ...formData, task: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-5 rounded-xl text-lg shadow-lg hover:shadow-brand/25 transition-all flex items-center justify-center gap-3"
                    >
                        <Send className="w-5 h-5" />
                        Написать в WhatsApp
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">Нажимая кнопку, вы переходите в чат WhatsApp.</p>
                </form>

                <div className="mt-16 text-center text-gray-500 text-sm">
                    <p className="mb-4">📍 Тбилиси, Грузия • Remote Worldwide</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="mailto:hello@breus.media" className="hover:text-white transition-colors">hello@breus.media</a>
                    </div>
                    <p className="mt-8 opacity-30">&copy; 2026 Breus Media. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
