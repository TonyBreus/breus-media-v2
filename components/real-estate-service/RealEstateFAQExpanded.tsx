'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const faqData = [
    {
        question: 'Сколько времени занимает съемка одного объекта?',
        answer:
            'Обычно от 60 до 120 минут в зависимости от площади и количества сцен. Для комплексов и крупных объектов формируем отдельный съемочный план.',
    },
    {
        question: 'Можно ли сделать материал под SS.ge, MyHome и соцсети сразу?',
        answer:
            'Да, мы сразу готовим набор под площадки: фото для листинга, горизонтальное видео для сайта и вертикальные ролики для Instagram/TikTok.',
    },
    {
        question: 'Работаете ли вы с новостройками и отделами продаж ЖК?',
        answer:
            'Да. Делаем регулярные съемки стройки, обзор территории и презентационные материалы для отдела продаж и инвесторов.',
    },
    {
        question: 'Что входит в финальную передачу материалов?',
        answer:
            'Вы получаете готовые видео, обработанные фото и исходники в облаке. При необходимости добавляем версии с титрами и под разные рекламные форматы.',
    },
];

export function RealEstateFAQExpanded() {
    return (
        <DebugWrapper id={10800} label="Real Estate FAQ Section">
            <section className="py-24 bg-[#0D0D0D]" id="faq">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <DebugWrapper id={10801} label="FAQ Header">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">Частые вопросы</h2>
                        </DebugWrapper>
                        <div className="w-12 h-1 bg-[#D4A017] mx-auto"></div>
                    </motion.div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <DebugWrapper key={index} id={10810 + index} label={`FAQ Item ${index + 1}`}>
                                <motion.details
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-[#141414] border border-[#2a2a2a] rounded-[12px] p-6 cursor-pointer hover:border-[#D4A017]/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <summary className="list-none flex justify-between items-center font-bold text-sm uppercase tracking-widest text-white/90 group-open:text-[#D4A017] transition-colors">
                                        {item.question}
                                        <span className="group-open:rotate-180 transition-transform duration-300 text-[#D4A017] text-xl">
                                            ↓
                                        </span>
                                    </summary>
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4"
                                    >
                                        {item.answer}
                                    </motion.p>
                                </motion.details>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
