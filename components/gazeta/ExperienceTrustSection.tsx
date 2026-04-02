"use client";
import React from "react";
import { motion, type Easing } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";

const industries = [
    {
        icon: "✂️",
        title: "Одежда и производство",
        desc: "Контент для запусков коллекций, карточки товаров, атмосферные ролики для соцсетей",
    },
    {
        icon: "🧭",
        title: "Туризм и экскурсии",
        desc: "Видео маршрутов и локаций, промо для туров, reels для привлечения групп",
    },
    {
        icon: "🔑",
        title: "Аренда и прокат",
        desc: "Презентация объектов и техники — фото, видео и 360° туры для онлайн-аудитории",
    },
    {
        icon: "🚗",
        title: "Авто сервисы / детейлинг",
        desc: "Видео процессов и результатов, контент «до и после», промо для соцсетей",
    },
    {
        icon: "🏝️",
        title: "Недвижимость в Таиланде",
        desc: "Дистанционная презентация объектов для иностранных инвесторов, аэросъёмка и туры",
    },
    {
        icon: "🏨",
        title: "Отели и апартаменты",
        desc: "Герой-ролики территорий и номеров, контентные пакеты для Booking и соцсетей",
    },
    {
        icon: "📦",
        title: "Retail и продуктовый контент",
        desc: "Предметная съёмка товаров и упаковки, flatlay, контент для маркетплейсов",
    },
    {
        icon: "💪",
        title: "Фитнес и тренерство",
        desc: "Промо-ролики тренеров и студий, reels тренировок, контент для личного бренда",
    },
    {
        icon: "🎾",
        title: "Спорт-комплексы и теннис",
        desc: "Видеопрезентация пространства, съёмка игр и событий, контент для рекламы",
    },
    {
        icon: "✈️",
        title: "Самолётные туры",
        desc: "Съёмка с воздуха и из кабины, видео маршрутов и впечатлений, промо-материалы",
    },
    {
        icon: "🎣",
        title: "Рыбалка и рыболовный туризм",
        desc: "Атмосферный видеоконтент для клубов и туров, фото трофеев и локаций",
    },
    {
        icon: "🏍️",
        title: "Мототуры",
        desc: "Динамичный видеоконтент маршрутов, FPV-сопровождение, ролики для продажи туров",
    },
];

const EASE_OUT: Easing = "easeOut";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: i * 0.06, ease: EASE_OUT },
    }),
};

export function ExperienceTrustSection() {
    return (
        <DebugWrapper id={28} label="Experience Trust Section">
            <section className="relative w-full bg-black py-20 md:py-28 px-6">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

                <div className="max-w-5xl mx-auto">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full bg-[#D4AF37]/5">
                            Нишевой опыт
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-[2.5rem] font-black uppercase tracking-tight text-white leading-[1.1] mb-5"
                    >
                        С какими задачами{" "}
                        <br className="hidden md:block" />
                        <span className="text-[#D4AF37]">мы уже работали</span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl mb-14"
                    >
                        Задачи разные — подход один: показать продукт, пространство или услугу так, чтобы клиент сделал следующий шаг. Ниже — бизнес-контексты, в которых у нас уже есть практический опыт.
                    </motion.p>

                    {/* Industry grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
                        {industries.map((item, i) => (
                            <motion.div
                                key={item.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                className="bg-black p-6 group hover:bg-white/[0.03] transition-colors duration-300"
                            >
                                <div className="text-2xl mb-3 leading-none">{item.icon}</div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-white/45 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer note */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 text-xs text-white/30 text-center"
                    >
                        Вашей ниши нет в списке? — Напишите. Почти всегда есть подходящий формат.
                    </motion.p>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
            </section>
        </DebugWrapper>
    );
}
