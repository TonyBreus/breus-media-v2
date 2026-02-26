"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, ChevronDown, Send, MessageCircle, Phone } from "lucide-react";
import Placeholder from "./Placeholder";

/* ── FAQ Accordion ── */
const faqs = [
    {
        q: "Сколько времени занимает съёмка и обработка?",
        a: "Стандартный пакет — от 3 до 10 рабочих дней в зависимости от объёма. AI-staging готов за 24 часа. Исходники и монтаж — от 48 часов.",
    },
    {
        q: "Работаете ли вы за пределами Тбилиси и Батуми?",
        a: "Да, мы работаем по всей Грузии. Для удалённых локаций согласовываем логистику на этапе брифа. Для международных проектов — возможна удалённая работа с AI-компонентами.",
    },
    {
        q: "Можно ли заказать только AI Virtual Staging без съёмки?",
        a: "Конечно. AI Virtual Staging — независимая услуга. Вы отправляете фото помещения, мы создаём 3 варианта интерьера за 24 часа. Идеально для вторичного рынка.",
    },
    {
        q: "Как вы гарантируете качество и сроки?",
        a: "В договоре фиксируем дедлайны и deliverables. На каждом этапе (сценарий, съёмка, монтаж) вы получаете превью и можете вносить правки. 30 дней поддержки после сдачи.",
    },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="text-sm md:text-base font-bold text-white group-hover:text-[#00D4FF] transition-colors pr-4">
                    {q}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-gray-400 leading-relaxed pb-5">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function LeadGenFAQ() {
    return (
        <section className="py-24 md:py-32 bg-gray-800 text-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* ── LEAD GEN: Split Screen ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-3">
                            Узнайте, сколько вы теряете на{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF006E]">
                                устаревших рендерах.
                            </span>
                        </h2>
                        <p className="text-sm text-gray-500 mb-8">
                            Оставьте контакт — пришлём PDF-отчёт и расчёт стоимости за 2 часа.
                        </p>

                        <form
                            className="space-y-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5 block">
                                    Имя
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5 block">
                                    Телефон / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+995 ..."
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-bold uppercase text-sm tracking-widest rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all hover:scale-[1.01]"
                            >
                                Получить отчёт
                            </button>
                        </form>

                        {/* Social */}
                        <div className="flex items-center gap-5 mt-6">
                            <span className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">
                                Или:
                            </span>
                            <a href="#" className="text-gray-500 hover:text-[#25D366] transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#0088cc] transition-colors">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: PDF Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <Placeholder
                            icon={FileText}
                            text="MOCKUP. 3D-обложка PDF-отчёта «Ошибки визуализации застройщиков»"
                            theme="dark"
                            className="w-full aspect-[4/5]"
                        />
                    </motion.div>
                </div>

                {/* ── FAQ Accordion ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-black text-white tracking-tight mb-8">
                        Часто задаваемые вопросы
                    </h3>
                    <div className="bg-gray-700/30 border border-gray-700 rounded-2xl px-6 md:px-8">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
