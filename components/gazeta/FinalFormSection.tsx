"use client";
import React, { useState, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMobileLandscape } from "@/hooks/useMobileLandscape";
import { useMobilePortrait } from "@/hooks/useMobilePortrait";

export function FinalFormSection() {
    const [method, setMethod] = useState("Telegram");
    const [services, setServices] = useState<string[]>([]);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [niche, setNiche] = useState("");
    const [task, setTask] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const isMobileLandscape = useMobileLandscape();
    const isMobilePortrait = useMobilePortrait();
    const stickyTopPx = isMobileLandscape ? 84 : isMobilePortrait ? 104 : 160;
    const stickyHeight = `calc(100vh - ${stickyTopPx}px)`;

    const toggleService = (s: string) => {
        setServices((prev) =>
            prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
        );
    };

    const buildWhatsAppUrl = () => {
        const parts: string[] = [];
        if (name) parts.push(`Меня зовут ${name}.`);
        if (services.length > 0) parts.push(`Интересует: ${services.join(", ")}.`);
        if (niche) parts.push(`Ниша: ${niche}.`);
        if (task) parts.push(`Задача: ${task}`);
        const message = parts.length > 0 ? parts.join(" ") : "Привет! Хочу обсудить проект.";
        return `https://wa.me/995574619393?text=${encodeURIComponent(message)}`;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "form_submit_attempt");
        }
        window.open(buildWhatsAppUrl(), "_blank");
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // Slide up animation from 100% to 0
    const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

    return (
        <DebugWrapper id={41} label="Final Form Container">
            <div id="contact" ref={containerRef} className="relative w-full h-[150vh] z-[100]">
                <motion.section
                    style={{ y, top: `${stickyTopPx}px`, height: stickyHeight }}
                    className="sticky left-0 w-full flex flex-col bg-zinc-950 text-white overflow-hidden border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
                >
                    {/* Accordion Header */}
                    <div className={isMobileLandscape
                        ? "h-6 w-full bg-zinc-900 border-b border-white/20 flex items-center px-3 uppercase tracking-[0.16em] text-[9px] font-bold shrink-0 z-20"
                        : isMobilePortrait
                        ? "h-8 w-full bg-zinc-900 border-b border-white/20 flex items-center px-4 uppercase tracking-[0.18em] text-[10px] font-bold shrink-0 z-20"
                        : "h-12 w-full bg-zinc-900 border-b border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold shrink-0 z-20"}>
                        <span className={isMobileLandscape || isMobilePortrait ? "text-[#D4AF37] mr-2" : "text-[#D4AF37] mr-4"}>09</span>
                        <span>Форма связи</span>
                    </div>

                    {/* Form Body - Scrollable */}
                    <div className="flex-1 overflow-y-auto overscroll-y-contain touch-pan-y px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto w-full custom-scrollbar">
                        <DebugWrapper id={42} label="Form Title">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
                                Готов усилить <br className="hidden md:block" />
                                <span className="text-[#D4AF37]">цифровое</span> присутствие?
                            </h2>
                            <p className="text-white/50 text-sm uppercase tracking-widest mb-10">
                                Напишите напрямую — или заполните форму, и мы откроем чат с вашим запросом.
                            </p>
                        </DebugWrapper>

                        <form className="space-y-10 pb-10" onSubmit={handleSubmit}>
                            <DebugWrapper id={43} label="Personal Info">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваше Имя *</label>
                                        <input
                                            type="text"
                                            placeholder="Иван Иванов"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            className="w-full bg-transparent border-b border-white/20 pb-2 mt-4 focus:border-[#D4AF37] transition-colors outline-none font-medium"
                                            required
                                        />
                                    </div>
                                </div>
                            </DebugWrapper>

                            <DebugWrapper id={44} label="Services Checkboxes">
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

                            <DebugWrapper id={45} label="Niche Select">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Ваша ниша</label>
                                    <select
                                        value={niche}
                                        onChange={(e) => setNiche(e.target.value)}
                                        className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium appearance-none"
                                    >
                                        <option value="" className="bg-zinc-900">Выберите нишу...</option>
                                        <option value="Недвижимость" className="bg-zinc-900">Недвижимость</option>
                                        <option value="Отели" className="bg-zinc-900">Отели</option>
                                        <option value="Рестораны" className="bg-zinc-900">Рестораны</option>
                                        <option value="Авто бизнес" className="bg-zinc-900">Авто бизнес</option>
                                        <option value="Туризм" className="bg-zinc-900">Туризм</option>
                                        <option value="Клиники" className="bg-zinc-900">Клиники</option>
                                        <option value="IT" className="bg-zinc-900">IT</option>
                                        <option value="Другое" className="bg-zinc-900">Другое</option>
                                    </select>
                                </div>
                            </DebugWrapper>

                            <DebugWrapper id={46} label="Task Textarea">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Коротко о задаче</label>
                                    <textarea
                                        placeholder="Например: Нужно снять дрон тур для нового ЖК"
                                        rows={3}
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                        className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-[#D4AF37] transition-colors outline-none font-medium resize-none"
                                    />
                                </div>
                            </DebugWrapper>

                            <DebugWrapper id={47} label="Submit Actions">
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <a
                                        href="https://wa.me/995574619393"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => { if (typeof window !== "undefined" && typeof (window as any).gtag === "function") { (window as any).gtag("event", "whatsapp_click"); } }}
                                        className="flex-1 bg-white text-black font-black uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-[#D4AF37] transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Написать в WhatsApp
                                    </a>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <button
                                            type="submit"
                                            className="w-full border border-white/20 text-white font-bold uppercase tracking-widest py-4 px-8 flex justify-center items-center gap-2 hover:bg-white/5 transition-colors"
                                        >
                                            Отправить запрос
                                        </button>
                                        <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">
                                            Данные формы откроются в WhatsApp
                                        </p>
                                    </div>
                                </div>
                            </DebugWrapper>
                        </form>
                    </div>
                </motion.section>
            </div>
        </DebugWrapper>
    );
}
