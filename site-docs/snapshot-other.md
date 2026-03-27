# Breus Media — Остальные страницы — 26 марта 2026
Страницы: /, /real-estate, /real-estate-2

## /
Lines: 5
```tsx
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/drone-service");
}

```
---
---

## /real-estate
Lines: 28
```tsx
"use client";

import HeroSection from "@/components/real-estate/HeroSection";
import ProblemBlock from "@/components/real-estate/ProblemBlock";
import SolutionsGrid from "@/components/real-estate/SolutionsGrid";
import ProofSection from "@/components/real-estate/ProofSection";
import LeadMagnet from "@/components/real-estate/LeadMagnet";

export default function RealEstatePage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-cyan selection:text-black overflow-x-hidden">
            <HeroSection />
            <ProblemBlock />
            <SolutionsGrid />
            <ProofSection />
            <LeadMagnet />

            {/* Minimal Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-700 font-bold">
                        © 2026 Breus Media · Real Estate Division
                    </span>
                </div>
            </footer>
        </main>
    );
}

```
---
---

## /real-estate-2
Lines: 952
```tsx
"use client";

import { motion } from "framer-motion";
import {
    ChevronDown,
    Plane,
    RotateCw,
    Wand2,
    TrendingUp,
    Search,
    BarChart3,
    Quote,
    ClipboardCheck,
    FileText,
    Camera,
    Send,
    MessageCircle,
    Phone,
    CheckCircle2,
    ArrowRight,
    Bot,
    Eye,
    Globe,
    Sparkles,
    Video,
    Image as ImageIcon,
    ScanLine,
    Zap,
} from "lucide-react";

/* ─────────────────────── helpers ─────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const MediaPlaceholder = ({
    icon: Icon,
    label,
    className = "",
}: {
    icon: typeof Video;
    label: string;
    className?: string;
}) => (
    <div
        className={`relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 flex flex-col items-center justify-center gap-4 group aspect-video ${className}`}
    >
        <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/[0.03] to-neon-purple/[0.03]" />
        <Icon className="w-8 h-8 text-white/15 group-hover:text-neon-cyan/30 transition-colors relative z-10" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold text-center px-8 leading-relaxed relative z-10">
            {label}
        </span>
    </div>
);

/* ═══════════════════════════════════════════════════════
   БЛОК 1: HERO — Боль на языке клиента
   ═══════════════════════════════════════════════════════ */
function HeroBlock() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            {/* BG video placeholder */}
            <div className="absolute inset-0 z-0">
                <MediaPlaceholder
                    icon={Video}
                    label="VIDEO LOOP: FPV drone — concrete to sunset view over Batumi"
                    className="!rounded-none !aspect-auto w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-[#0A0A0A]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
                <div className="max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 md:p-14"
                    >
                        {/* Badge */}
                        <motion.span
                            variants={fadeUp}
                            custom={0}
                            className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan border border-neon-cyan/20 px-4 py-1.5 rounded-full mb-8 bg-neon-cyan/5"
                        >
                            Breus Media · Недвижимость
                        </motion.span>

                        {/* statistic hook */}
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="text-neon-cyan text-lg md:text-2xl font-black mb-4"
                        >
                            73% покупателей отказываются от просмотра квартиры, если нет видео
                            объекта.
                        </motion.p>

                        {/* Pain */}
                        <motion.h1
                            variants={fadeUp}
                            custom={2}
                            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.92] mb-6 text-white"
                        >
                            Застройщики теряют
                            <br />
                            клиентов{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                                на этапе «изучения».
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={3}
                            className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                        >
                            Люди не едут туда, где не понимают, что их ждёт. Мы создаём
                            визуальное доверие, которое превращает «просмотры» в сделки.
                        </motion.p>

                        {/* CTA */}
                        <motion.a
                            variants={fadeUp}
                            custom={4}
                            href="#solutions"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-cyan hover:text-white transition-colors group"
                        >
                            Посмотреть решения
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 2: РЕШЕНИЕ — Что мы делаем
   ═══════════════════════════════════════════════════════ */
const solutionCards = [
    {
        icon: Plane,
        emoji: "🚁",
        title: "Дрон-съёмка",
        desc: "Покупатель видит инфраструктуру, виды из окон будущей квартиры, реальный прогресс стройки.",
        media: "VIDEO: Drone construction progress timelapse",
    },
    {
        icon: RotateCw,
        emoji: "🔄",
        title: "360° Virtual Tours",
        desc: 'Клиент «гуляет» по квартире с дивана, снижается страх неизвестности.',
        media: "VIDEO: 360° Tour walkthrough residential unit",
    },
    {
        icon: Wand2,
        emoji: "🤖",
        title: "AI Virtual Staging",
        desc: "Пустая бетонная коробка превращается в квартиру с дизайнерской мебелью за 1 день (вместо месяца ремонта).",
        media: "IMAGE: Before/After AI staging morphing",
    },
];

function SolutionBlock() {
    return (
        <section
            id="solutions"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-80 h-80 bg-neon-cyan/[0.04] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-purple mb-4 block">
                        Решение
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                        Мы создаём{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                            визуальное доверие
                        </span>{" "}
                        для застройщиков
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solutionCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="group"
                        >
                            <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden hover:border-neon-cyan/20 transition-all duration-500">
                                <MediaPlaceholder
                                    icon={card.icon}
                                    label={card.media}
                                    className="!rounded-none !rounded-t-3xl"
                                />
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-white flex items-center gap-2">
                                        <span className="text-2xl">{card.emoji}</span> {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="#cta-form"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-black font-black uppercase text-sm tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]"
                    >
                        Узнать стоимость <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 3: СТАТИСТИКА И ЗАПРОСЫ
   ═══════════════════════════════════════════════════════ */
const marketStats = [
    {
        value: "87%",
        label: "покупателей изучают застройщика онлайн до звонка менеджеру",
    },
    { value: "23%", label: "быстрее продаются объекты с видео" },
    {
        value: "340%",
        label: 'рост запросов «360 тур квартира Тбилиси» за 2 года',
    },
];

const searchQueries = [
    "Вид из окна ЖК",
    "Дрон-съёмка стройки",
    "Квартира с ремонтом визуализация",
    "360 тур новостройка",
];

function StatsBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Dividers */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.015] to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan mb-4 block">
                        <BarChart3 className="w-4 h-4 inline mr-2 -mt-0.5" />
                        Статистика ниши
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        Что говорит рынок
                    </h2>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {marketStats.map((stat, i) => (
                        <motion.div
                            key={stat.value}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center hover:border-neon-cyan/20 transition-all"
                        >
                            <span
                                className="block text-5xl md:text-6xl font-black text-neon-cyan mb-3"
                                style={{
                                    textShadow: "0 0 30px rgba(0,255,255,0.25)",
                                }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-sm text-gray-500 leading-relaxed">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Search queries */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4 flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        Что ищут ваши клиенты:
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {searchQueries.map((q) => (
                            <span
                                key={q}
                                className="px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-sm text-gray-400 font-medium"
                            >
                                «{q}»
                            </span>
                        ))}
                    </div>
                    <p className="text-[10px] text-gray-700 mt-6 uppercase tracking-wider">
                        Источник: AI-аналитика (Google Trends, Ahrefs, соцсети)
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 4: СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО
   ═══════════════════════════════════════════════════════ */
function SocialProofBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-purple/[0.04] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-purple mb-4 block">
                        Кейсы
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        Уже работает{" "}
                        <span className="text-neon-purple">в деле</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Case card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden hover:border-neon-cyan/20 transition-all"
                    >
                        <MediaPlaceholder
                            icon={Plane}
                            label="VIDEO: Drone timelapse — ЖК construction progress, Batumi"
                            className="!rounded-none"
                        />
                        <div className="p-8">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/20 px-3 py-1 rounded-full">
                                Кейс
                            </span>
                            <h3 className="text-xl font-black uppercase tracking-tight mt-4 mb-3 text-white">
                                ЖК «[Название]», Батуми
                            </h3>
                            <div className="space-y-3 text-sm text-gray-500">
                                <p>
                                    <span className="text-gray-400 font-bold">Задача:</span>{" "}
                                    Продать квартиры в новом комплексе, пока идёт стройка.
                                </p>
                                <p>
                                    <span className="text-gray-400 font-bold">Решение:</span>{" "}
                                    Дрон-съёмка прогресса (еженедельно) + 360° тур типовых
                                    планировок + AI-staging (мебель в 3 стилях).
                                </p>
                            </div>
                            {/* Result stats */}
                            <div className="flex gap-6 mt-6 pt-6 border-t border-white/5">
                                <div>
                                    <span className="text-2xl font-black text-neon-cyan">
                                        +40%
                                    </span>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-600 mt-1">
                                        заявок
                                    </span>
                                </div>
                                <div>
                                    <span className="text-2xl font-black text-neon-purple">
                                        14→8
                                    </span>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-600 mt-1">
                                        дней цикл сделки
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testimonial card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between"
                    >
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10 h-full flex flex-col justify-center hover:border-neon-purple/20 transition-all">
                            <Quote className="w-10 h-10 text-neon-purple/30 mb-6" />
                            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                                «Клиенты перестали спрашивать{" "}
                                <span className="text-white font-semibold not-italic">
                                    "а когда можно приехать посмотреть?"
                                </span>{" "}
                                — они уже всё видели онлайн и приезжали подписывать договор.»
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 flex items-center justify-center">
                                    <span className="text-sm font-black text-white">КД</span>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-white block">
                                        Коммерческий Директор
                                    </span>
                                    <span className="text-xs text-gray-600">
                                        Девелоперская компания, Батуми
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 5: КАК МЫ РАБОТАЕМ — Процесс
   ═══════════════════════════════════════════════════════ */
const processSteps = [
    {
        num: "01",
        icon: ClipboardCheck,
        title: "Анализ и Бриф",
        time: "1-2 дня",
        desc: "Изучаем ваш бизнес, ЦА, конкурентов. Находим слабые места визуала.",
    },
    {
        num: "02",
        icon: FileText,
        title: "Сценарий и План",
        time: "2-3 дня",
        desc: "Предлагаем концепцию: что снимать, какой AI использовать, какие форматы (видео/фото/360°/Reels).",
    },
    {
        num: "03",
        icon: Camera,
        title: "Продакшн",
        time: "3-10 дней",
        desc: "Съёмка (дроны/студия/локация) + AI-генерация + монтаж. Вы получаете превью на каждом этапе.",
    },
    {
        num: "04",
        icon: Zap,
        title: "Результат и Обучение",
        time: "",
        desc: 'Готовый контент + гайд «как использовать» (соцсети, сайт, реклама). Поддержка 30 дней.',
    },
];

function ProcessBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan mb-4 block">
                        Процесс
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        4 шага от брифа{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                            до результата
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:border-neon-cyan/20 transition-all duration-300">
                                {/* Number */}
                                <span className="text-5xl font-black text-white/[0.06] absolute top-4 right-6">
                                    {step.num}
                                </span>
                                <div className="w-12 h-12 rounded-xl bg-neon-cyan/5 border border-neon-cyan/10 flex items-center justify-center mb-5 group-hover:bg-neon-cyan/10 transition-all">
                                    <step.icon className="w-5 h-5 text-neon-cyan" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1">
                                    {step.title}
                                </h3>
                                {step.time && (
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan/60 mb-3 block">
                                        {step.time}
                                    </span>
                                )}
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="#cta-form"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-cyan hover:text-white transition-colors"
                    >
                        Начать с брифа <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 6: ЧТО ВЫ ПОЛУЧАЕТЕ — Deliverables
   ═══════════════════════════════════════════════════════ */
const deliverables = [
    "Дрон-съёмка объекта (5-7 мин raw + монтаж 60-90 сек)",
    "360° Virtual Tour (3-5 помещений: холл, типовая квартира, территория)",
    "AI Virtual Staging (3 варианта: классика / модерн / минимализм)",
    "Фото high-res для сайта и рекламы (20-30 кадров)",
    "Вертикальные Reels для Instagram (3-5 роликов)",
    "Текстовые описания для постов (SEO-оптимизированные)",
    "Исходники (raw файлы) + права на коммерческое использование",
];

function DeliverablesBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/[0.04] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-purple mb-4 block">
                        Что входит
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                        Пакет{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                            «Визуальное доверие»
                        </span>
                    </h2>
                    <p className="text-gray-500 mb-12">
                        Полный комплект материалов для сайта, рекламы и соцсетей.
                    </p>

                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-10">
                        <div className="space-y-5">
                            {deliverables.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm md:text-base text-gray-300 leading-relaxed">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 7: AI И ТРЕНДЫ
   ═══════════════════════════════════════════════════════ */
const aiFeatures = [
    {
        icon: Eye,
        title: "AI-анализ трендов вашей ниши",
        desc: "Отслеживаем, какой контент заходит у конкурентов (Instagram/TikTok/Google), адаптируем под вас.",
    },
    {
        icon: Sparkles,
        title: "Генерация контента x10 быстрее",
        desc: "AI создаёт 50 вариантов креатива из 1 фотосессии — экономим 80% бюджета на ретушь и пересъёмки.",
    },
    {
        icon: Globe,
        title: "Автоматическая локализация",
        desc: "Адаптируем визуал под Грузию/Россию/Европу: меняем язык, цвета, стиль под менталитет аудитории.",
    },
    {
        icon: ScanLine,
        title: "Прогнозирование успеха креативов",
        desc: "AI показывает, какой визуал зайдёт вашей ЦА — тестируем 5 вариантов, запускаем топ-1.",
    },
];

function AIBlock() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.02] to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neon-purple mb-4 block">
                        <Bot className="w-4 h-4 inline mr-2 -mt-0.5" />
                        Технологии
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        Мы не просто снимаем —<br />
                        мы{" "}
                        <span className="text-neon-purple">мониторим и усиливаем</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-5 p-6 md:p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-neon-purple/20 transition-all group"
                        >
                            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-neon-purple/5 border border-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/10 transition-all">
                                <f.icon className="w-5 h-5 text-neon-purple" />
                            </div>
                            <div>
                                <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">
                                    🤖 {f.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="#cta-form"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-purple hover:text-white transition-colors"
                    >
                        Узнать про AI-решения <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   БЛОК 8: ФИНАЛЬНЫЙ CTA + ФОРМА
   ═══════════════════════════════════════════════════════ */
const businessOptions = [
    "Недвижимость",
    "Рестораны",
    "Отели",
    "Автобизнес",
    "Медицина",
    "Производство",
    "Ритейл",
    "Спорт",
    "Ивенты",
    "Другое",
];

const budgetOptions = [
    "До 1000₾",
    "1000-3000₾",
    "3000-10000₾",
    "Обсудим",
];

function CTAFormBlock() {
    return (
        <section
            id="cta-form"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neon-cyan/[0.03] rounded-full blur-[150px]" />
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-purple/[0.04] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                            Готовы усилить визуал?
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                                Начнём с брифа.
                            </span>
                        </h2>
                        <p className="text-gray-500">
                            Расскажите о задаче — рассчитаем стоимость и сроки за 24 часа.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 md:p-10 space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* Name */}
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Имя *
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Ваше имя"
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Телефон / WhatsApp *
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="+995 ..."
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                            />
                        </div>

                        {/* Business type */}
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Ваш бизнес
                            </label>
                            <select className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-gray-400 focus:outline-none focus:border-neon-cyan/40 appearance-none cursor-pointer transition-all">
                                <option value="">Выберите нишу</option>
                                {businessOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* What to improve */}
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Что хотите улучшить?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Например: Нужны дрон-съёмка для ЖК + 360° туры 10 квартир"
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20 transition-all resize-none"
                            />
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">
                                Бюджет{" "}
                                <span className="text-gray-700">(опционально)</span>
                            </label>
                            <select className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-gray-400 focus:outline-none focus:border-neon-cyan/40 appearance-none cursor-pointer transition-all">
                                <option value="">Выберите диапазон</option>
                                {budgetOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-neon-cyan text-black font-black uppercase text-sm tracking-widest rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] flex items-center justify-center gap-2"
                        >
                            Отправить → Ответим за 2 часа
                        </button>
                    </motion.form>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-center"
                    >
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-bold">
                            Или напишите сразу:
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="#"
                                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#25D366] transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#0088cc] transition-colors"
                            >
                                <Send className="w-5 h-5" />
                                Telegram
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Позвонить
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════════ */
export default function RealEstate2Page() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-cyan selection:text-black overflow-x-hidden">
            <HeroBlock />
            <SolutionBlock />
            <StatsBlock />
            <SocialProofBlock />
            <ProcessBlock />
            <DeliverablesBlock />
            <AIBlock />
            <CTAFormBlock />

            {/* Minimal Footer */}
            <footer className="py-10 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
                        © 2026 Breus Media · Real Estate Division
                    </span>
                </div>
            </footer>
        </main>
    );
}

```
---
---
