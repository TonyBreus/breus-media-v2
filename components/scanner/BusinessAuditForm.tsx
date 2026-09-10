"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BusinessAuditFormProps {
    lang?: "ru" | "en";
}

export function BusinessAuditForm({ lang = "ru" }: BusinessAuditFormProps) {
    const isEn = lang === "en";
    const [businessLink, setBusinessLink] = useState("");
    const [messenger, setMessenger] = useState<"whatsapp" | "telegram">("whatsapp");
    const [contact, setContact] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!businessLink.trim() || !contact.trim()) return;

        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const directChatHref =
        messenger === "whatsapp"
            ? `https://wa.me/995501103183?text=${encodeURIComponent(
                  isEn
                      ? `Hello! I requested a free 24h business audit for: ${businessLink} (Contact: ${contact})`
                      : `Здравствуйте! Отправил заявку на бесплатный аудит бизнеса за 24 часа:\nОбъект: ${businessLink}\nКонтакт для связи: ${contact}`
              )}`
            : `https://t.me/breusmedia`;

    return (
        <div className="w-full max-w-xl mx-auto px-2 sm:px-0">
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[24px] border border-[#FFD23F]/40 bg-[#121216]/95 backdrop-blur-2xl p-6 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    >
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD23F]/15 border border-[#FFD23F]/40 text-[#FFD23F] mb-4 text-3xl">
                            ⚡
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black uppercase text-white mb-2 tracking-tight">
                            {isEn ? "Audit Request Received!" : "Заявка на аудит принята!"}
                        </h2>
                        <p className="text-sm text-white/75 leading-relaxed max-w-md mx-auto mb-6">
                            {isEn
                                ? "We have started checking your assets. Your personalized review and action plan will be delivered within 24 hours."
                                : "Мы уже приступили к анализу вашего объекта. Персональный разбор слабых мест и план их устранения пришлём в выбранный мессенджер в течение 24 часов."}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={directChatHref}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFD23F] px-5 py-3 text-xs font-bold uppercase text-black hover:bg-white transition-all shadow-md active:scale-95"
                            >
                                <span>
                                    {messenger === "whatsapp"
                                        ? isEn
                                            ? "Confirm in WhatsApp"
                                            : "Подтвердить в WhatsApp"
                                        : isEn
                                        ? "Open Telegram Chat"
                                        : "Открыть чат в Telegram"}
                                </span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <button
                                type="button"
                                onClick={() => {
                                    setSubmitted(false);
                                    setBusinessLink("");
                                    setContact("");
                                }}
                                className="text-xs text-white/50 hover:text-white underline py-2 px-3 transition-colors"
                            >
                                {isEn ? "Check another business" : "Проверить другой объект"}
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[24px] border border-white/15 bg-[#121216]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    >
                        {/* Header of Form */}
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD23F]/10 border border-[#FFD23F]/30 text-[#FFD23F] text-[11px] font-bold uppercase tracking-[0.2em] mb-2.5">
                                <Sparkles className="w-3 h-3" />
                                <span>{isEn ? "FREE 24H BUSINESS AUDIT" : "БЕСПЛАТНЫЙ АУДИТ ВАШЕГО БИЗНЕСА"}</span>
                            </div>
                            <h1 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight mb-2 tracking-tight">
                                {isEn
                                    ? "Discover where your business loses clients"
                                    : "Узнайте, где ваш бизнес теряет клиентов"}
                            </h1>
                            <p className="text-xs text-white/70 leading-relaxed max-w-md mx-auto">
                                {isEn
                                    ? "We check your website, Google Maps profile, and video marketing — and send a personal review within 24 hours."
                                    : "Проверим сайт, карточку в Google Картах и видеомаркетинг — пришлём персональный разбор в течение 24 часов."}
                            </p>
                        </div>

                        {/* 3-Step Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Step 1 */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 mb-1.5">
                                    {isEn
                                        ? "1. Link to website, Google Maps, or Instagram *"
                                        : "1. Ссылка на сайт, точку в Google Maps или Instagram *"}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={businessLink}
                                    onChange={(e) => setBusinessLink(e.target.value)}
                                    placeholder={
                                        isEn
                                            ? "https://... or Google Maps point / @instagram"
                                            : "Ссылка на сайт, точку в Google Maps или Instagram"
                                    }
                                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#FFD23F] focus:bg-white/[0.07]"
                                />
                            </div>

                            {/* Step 2: Messenger 1-tap toggles */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 mb-1.5">
                                    {isEn ? "2. Where should we send the review? *" : "2. Куда прислать разбор? *"}
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setMessenger("whatsapp")}
                                        className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all border ${
                                            messenger === "whatsapp"
                                                ? "bg-[#25D366]/20 border-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.25)]"
                                                : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                                        }`}
                                    >
                                        <span className="text-base leading-none">🟢</span>
                                        <span>WhatsApp</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMessenger("telegram")}
                                        className={`flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all border ${
                                            messenger === "telegram"
                                                ? "bg-[#229ED9]/20 border-[#229ED9] text-white shadow-[0_0_15px_rgba(34,158,217,0.25)]"
                                                : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                                        }`}
                                    >
                                        <span className="text-base leading-none">🔷</span>
                                        <span>Telegram</span>
                                    </button>
                                </div>
                            </div>

                            {/* Step 3: Contact field */}
                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 mb-1.5">
                                    {isEn
                                        ? "3. Phone number (+995 ...) or @username *"
                                        : "3. Номер телефона (+995 ...) или @username *"}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder={
                                        messenger === "whatsapp"
                                            ? "+995 501 103 183"
                                            : "@username или +995..."
                                    }
                                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-[#FFD23F] focus:bg-white/[0.07]"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFD23F] py-3.5 px-4 text-xs sm:text-sm font-black uppercase tracking-wider text-black transition-all hover:bg-white active:scale-[0.98] shadow-[0_4px_20px_rgba(255,210,63,0.3)] disabled:opacity-50"
                                >
                                    <span>
                                        {isEn
                                            ? "Get free audit (within 24 hours) →"
                                            : "Получить аудит бесплатно (в течение 24 часов) →"}
                                    </span>
                                </button>
                            </div>

                            {/* Privacy guarantee */}
                            <div className="text-center pt-1">
                                <p className="text-[11px] text-white/50 flex items-center justify-center gap-1.5">
                                    <span>🔒</span>
                                    <span>
                                        {isEn
                                            ? "No spam. Personal review directly to your messenger."
                                            : "Без спама. Персональный разбор в мессенджер."}
                                    </span>
                                </p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
