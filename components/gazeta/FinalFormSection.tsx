"use client";
import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

export function FinalFormSection() {
    const [method, setMethod] = useState("Telegram");
    const [services, setServices] = useState<string[]>([]);

    const toggleService = (s: string) => {
        setServices((prev) =>
            prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
        );
    };

    const topOffset = 80 + 8 * 48; // match our NichesStack offset logic

    return (
        <DebugWrapper id="final-form" label="Final Form Overlay">
            <section
                className="sticky w-full min-h-screen flex flex-col bg-zinc-950 text-white will-change-transform z-20"
                style={{ top: `${topOffset}px` }}
            >
                {/* Accordion Header */}
                <div className="h-12 w-full bg-zinc-900 border-t border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold shrink-0">
                    <span className="text-[#D4AF37] mr-4">09</span>
                    <span>Форма связи</span>
                </div>

                {/* Form Body */}
                <div className="flex-1 overflow-y-auto px-6 py-12 md:px-12 md:py-20 max-w-5xl mx-auto w-full">
                    <DebugWrapper id="form-title" label="Form Title">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">
                            Готов усилить <br className="hidden md:block" />
                            <span className="text-[#D4AF37]">цифровое</span> присутствие?
                        </h2>
                    </DebugWrapper>

                    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

                        <DebugWrapper id="form-personal" label="Personal Info">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваше Имя *</label>
                                    <input
                                        type="text"
                                        placeholder="Иван Иванов"
                                        className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Способ связи *</label>
                                    <div className="flex gap-4">
                                        {["Telegram", "WhatsApp", "Mail"].map((m) => (
                                            <button
                                                key={m}
                                                type="button"
                                                onClick={() => setMethod(m)}
                                                className={`pb-2 border-b-2 transition-colors font-medium ${method === m ? 'border-[#D4AF37] text-white' : 'border-transparent text-white/40 hover:text-white/80'}`}
                                            >
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type={method === "Mail" ? "email" : "text"}
                                        placeholder={method === "Mail" ? "hello@example.com" : "@username / +995..."}
                                        className="w-full bg-transparent border-b border-white/20 pb-2 mt-4 focus:border-[#D4AF37] transition-colors outline-none font-medium"
                                        required
                                    />
                                </div>
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id="form-services" label="Services Checkboxes">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Интересующие услуги</label>
                                <div className="flex flex-wrap gap-3">
                                    {["Дрон", "360 тур", "Reels", "SMM контент", "Google Maps", "Event"].map((svc) => {
                                        const isActive = services.includes(svc);
                                        return (
                                            <button
                                                key={svc}
                                                type="button"
                                                onClick={() => toggleService(svc)}
                                                className={`px-4 py-2 rounded-full border text-sm transition-all ${isActive ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' : 'border-white/20 text-white/60 hover:border-white hover:text-white'}`}
                                            >
                                                {svc}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id="form-niche" label="Niche Select">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваша ниша</label>
                                <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium appearance-none">
                                    <option value="" className="bg-zinc-900">Выберите нишу...</option>
                                    <option value="realestate" className="bg-zinc-900">Недвижимость</option>
                                    <option value="hotels" className="bg-zinc-900">Отели</option>
                                    <option value="restaurants" className="bg-zinc-900">Рестораны</option>
                                    <option value="auto" className="bg-zinc-900">Авто бизнес</option>
                                    <option value="tourism" className="bg-zinc-900">Туризм</option>
                                    <option value="clinics" className="bg-zinc-900">Клиники</option>
                                    <option value="it" className="bg-zinc-900">IT</option>
                                    <option value="other" className="bg-zinc-900">Другое</option>
                                </select>
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id="form-task" label="Task Textarea">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Коротко о задаче</label>
                                <textarea
                                    placeholder="Например: Нужно снять дрон тур для нового ЖК"
                                    rows={3}
                                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium resize-none"
                                />
                            </div>
                        </DebugWrapper>

                        <DebugWrapper id="form-submit" label="Submit Actions">
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button type="submit" className="flex-1 bg-white text-black font-black uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-[#D4AF37] transition-colors">
                                    <Send className="w-5 h-5" />
                                    Написать
                                </button>
                                <a href="https://wa.me/995555123456" target="_blank" rel="noreferrer" className="flex-1 border border-white/20 text-white font-bold uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-white/5 transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                    Перейти в WhatsApp
                                </a>
                            </div>
                        </DebugWrapper>
                    </form>

                </div>
            </section>
        </DebugWrapper>
    );
}
