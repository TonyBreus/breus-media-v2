"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
    { q: "Какой дрон вы используете?", a: "DJI Air 3S — компактный, мощный, 4K-камера с двойной оптикой, отличная стабилизация при ветре." },
    { q: "Нужна ли лицензия на съёмку в Грузии?", a: "Мы работаем с текущими разрешениями. Если съёмка в запретной зоне (аэропорт, военные объекты) — согласовываем заранее." },
    { q: "Сколько стоит один вылет?", a: "От 250 ₾ за локацию. Точная стоимость зависит от задачи, количества ракурсов и постобработки. Комплексные пакеты выгоднее." },
    { q: "Как быстро я получу файлы?", a: "Фото: 24 часа. Видео с монтажом: 48–72 часа. Ускоренная доставка — по договорённости." },
    { q: "Работаете за пределами Тбилиси?", a: "Да. Снимаем по всей Грузии — Батуми, Кутаиси, Кахетия, горные регионы. Выезд за пределы Тбилиси оплачивается отдельно." },
    { q: "Можно ли снять несколько объектов за один день?", a: "Да, до 3–4 локаций в одном районе. Пакетная съёмка со скидкой." },
];

export function DroneFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };

    return (
        <section id="faq" className="bg-[#0D0D0D] py-[64px] md:py-[120px] border-t border-white/5">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="max-w-3xl mx-auto px-6">
                <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#00AAFF] mb-3">
                    FAQ
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-10">
                    Частые вопросы
                </h2>

                <div className="divide-y divide-white/10 border-t border-white/10">
                    {faqItems.map((item, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                            >
                                <span className="text-sm md:text-base font-semibold text-white group-hover:text-[#00AAFF] transition-colors pr-4">
                                    {item.q}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-[#00AAFF] text-2xl font-light shrink-0"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm text-white/50 leading-relaxed pb-5 pr-12">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
