"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "@/components/debug/DebugWrapper";

const faqData = [
    {
        question: "Сколько стоит аэросъёмка в Тбилиси?",
        answer: "Базовый выезд — от 250 ₾ (съёмка снаружи). FPV-пролёт внутри помещений — от 350 ₾. Полная съёмка объекта снаружи и внутри — от 500 ₾. Финальная стоимость зависит от задачи, локации и объёма материала."
    },
    {
        question: "Что такое FPV-съёмка и чем она отличается от обычной?",
        answer: "FPV (First Person View) — это компактный дрон, который летает внутри помещений: через зал ресторана, склад, шоурум или цех. Зритель видит пространство изнутри, в движении. Обычный дрон снимает снаружи и с высоты — фасад, территорию, окружение."
    },
    {
        question: "Работаете ли вы за пределами Тбилиси?",
        answer: "Да. Снимаем по всему Тбилиси — Ваке, Сабуртало, Мтацминда, Дидубе, Глдани, Исани, Варкетили. Выезжаем по всей Грузии: Батуми, Кутаиси, Боржоми, Казбеги и другие локации. Стоимость выезда за пределы Тбилиси обсуждается отдельно."
    },
    {
        question: "Нужно ли разрешение на полёты дрона?",
        answer: "В Грузии полёты дронов регулируются GCAA. Мы работаем в соответствии с правилами и заранее проверяем зону съёмки. Если объект находится рядом с аэропортом или в ограниченной зоне — предупреждаем об этом до выезда."
    },
    {
        question: "В каком формате получу материалы?",
        answer: "Видео — в формате MP4, разрешение 4K. Фото — JPG высокого разрешения. Все файлы передаём через облачное хранилище (Google Drive или аналог) в течение 1–3 рабочих дней после съёмки."
    },
    {
        question: "Как быстро будет готов результат?",
        answer: "Исходники (необработанные материалы) — в день съёмки или на следующий день. Смонтированный ролик — в течение 3–5 рабочих дней. Сроки можно ускорить по договорённости."
    },
    {
        question: "Вы снимаете только для недвижимости?",
        answer: "Нет — у нас 19 направлений съёмки. Работаем с ресторанами, отелями, стройкой, туризмом, инспекцией объектов, спортом, виноделием и другими нишами. Если не нашли своё направление — просто опишите задачу, подберём формат."
    },
    {
        question: "Можно ли заказать только фото без видео?",
        answer: "Да. Аэрофото — самостоятельная услуга. Уточните при запросе, что нужен только фотоматериал — скорректируем формат выезда и стоимость."
    }
];

export function DroneFAQExpanded() {
    return (
        <DebugWrapper id={10800} label="Drone FAQ Section">
            <section className="py-10 md:py-24 bg-[#0D0D0D]" id="faq">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-16"
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
                                        animate={{ opacity: 1, height: "auto" }}
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
