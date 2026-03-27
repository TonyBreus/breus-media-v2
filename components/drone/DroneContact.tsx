"use client";
import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

export function DroneContact() {
    const [method, setMethod] = useState("Telegram");

    return (
        <section id="contact" className="bg-[#111318] py-[64px] md:py-[120px] border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#00AAFF] mb-3">
                    Контакт
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                    Записаться на демо-полёт
                </h2>
                <p className="text-base text-white/50 mb-10 leading-relaxed">
                    Опишите задачу — свяжемся за 15 минут. Бесплатная консультация по формату и стоимости.
                </p>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                                Ваше имя *
                            </label>
                            <input
                                type="text"
                                placeholder="Иван Иванов"
                                className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#00AAFF] transition-colors outline-none text-white font-medium"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                                Способ связи *
                            </label>
                            <div className="flex gap-3 mb-3">
                                {["Telegram", "WhatsApp", "Email"].map((m) => (
                                    <button
                                        key={m}
                                        type="button"
                                        onClick={() => setMethod(m)}
                                        className={`pb-2 border-b-2 transition-colors text-sm font-medium ${method === m
                                                ? "border-[#00AAFF] text-white"
                                                : "border-transparent text-white/40 hover:text-white/70"
                                            }`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                            <input
                                type={method === "Email" ? "email" : "text"}
                                placeholder={method === "Email" ? "mail@example.com" : "@username / +995..."}
                                className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#00AAFF] transition-colors outline-none text-white font-medium"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                            Тип объекта
                        </label>
                        <select className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#00AAFF] transition-colors outline-none text-white font-medium appearance-none">
                            <option value="" className="bg-[#1A1A1A]">Выберите...</option>
                            <option value="construction" className="bg-[#1A1A1A]">Стройка / ЖК</option>
                            <option value="realestate" className="bg-[#1A1A1A]">Недвижимость</option>
                            <option value="hotel" className="bg-[#1A1A1A]">Отель / Курорт</option>
                            <option value="restaurant" className="bg-[#1A1A1A]">Ресторан / Бренд</option>
                            <option value="tourism" className="bg-[#1A1A1A]">Туризм</option>
                            <option value="other" className="bg-[#1A1A1A]">Другое</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                            Коротко о задаче
                        </label>
                        <textarea
                            placeholder="Нужно снять ЖК с дрона для инвесторов..."
                            rows={3}
                            className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#00AAFF] transition-colors outline-none text-white font-medium resize-none"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-[#00AAFF] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg flex justify-center items-center gap-2 hover:brightness-110 transition-all"
                        >
                            <Send className="w-5 h-5" />
                            Отправить
                        </button>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 border border-white/20 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg flex justify-center items-center gap-2 hover:bg-white/5 transition-all"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
