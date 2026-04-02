import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const metadata: Metadata = {
    title: 'О студии | Breus Media — визуальное производство для бизнеса',
    description:
        'Breus Media — студия визуального производства и AI-инструментов для бизнеса. Дрон, промо-видео, reels, 360-туры, AI-визуализация. Работаем в Грузии и удалённо.',
    alternates: {
        canonical: 'https://breus.media/about',
    },
};

const SERVICES = [
    {
        title: 'Аэросъёмка дроном',
        description: 'Обзор объектов с воздуха, мониторинг территорий, FPV-кино, инспекция. Для недвижимости, строительства, туризма, мероприятий.',
    },
    {
        title: 'Промо-видео',
        description: 'Съёмка интерьеров, продуктов, врачей, маршрутов, объектов. Видеоматериал, который объясняет и убеждает.',
    },
    {
        title: 'Reels и контент',
        description: 'Короткие форматы для соцсетей. Сезонный контент, запуски, регулярные серии для отелей, ресторанов, клиник, застройщиков.',
    },
    {
        title: '360° туры',
        description: 'Интерактивные туры для сайтов и карт. Недвижимость, автосалоны, клиники, отели, рестораны, коммерческая аренда.',
    },
    {
        title: 'AI-визуализация',
        description: 'Визуальный контент с применением AI: интерьеры, продукты, бренд, меню, доставка. Для задач, где съёмка нецелесообразна.',
    },
    {
        title: 'AI-контент и упаковка',
        description: 'Описания отелей, туристических маршрутов и программ. Подготовка и структурирование текстовых материалов для продаж.',
    },
];

const APPROACH_POINTS = [
    {
        num: '01',
        title: 'Сначала — задача бизнеса',
        body: 'Мы начинаем не с формата, а с вопроса: что нужно донести, кому, на какой платформе и для какого действия. Это определяет всё остальное.',
    },
    {
        num: '02',
        title: 'Затем — выбор формата',
        body: 'Дрон, видео, 360-тур, reels или AI — выбирается инструмент, который лучше всего решает конкретную задачу, а не тот, что привычнее.',
    },
    {
        num: '03',
        title: 'Компактно и внимательно',
        body: 'Мы работаем как серьёзная студия, а не как крупное агентство. Это значит: каждый проект получает внимание, а не передаётся по цепочке.',
    },
    {
        num: '04',
        title: 'Честно о возможностях',
        body: 'Если задача не входит в нашу зону компетенции — скажем об этом. Если можем сделать лучше другим способом — предложим.',
    },
];

const AI_POINTS = [
    'Исследование аудитории, конкурентов и рынка перед проектом',
    'Подготовка сценариев, брифов и структур для съёмки',
    'Генерация идей и вариантов визуального подхода',
    'Анализ и адаптация готовых материалов под платформы',
    'Упаковка и редактура текстового контента',
    'Ускорение задач подготовки без потери качества',
];

const EXPERIENCE_AREAS = [
    'Производство одежды',
    'Туристические компании',
    'Сервисы аренды',
    'Автодетейлинг и уход за авто',
    'Недвижимость (Грузия, Таиланд)',
    'Розничная торговля и посуда',
    'Фитнес и персональные тренеры',
    'Спорткомплексы и теннисные корты',
    'Отели и гостиницы',
    'Экскурсии на самолёте',
    'Рыболовный туризм',
    'Мототуры',
    'Рестораны и бары',
    'Медицинские клиники',
    'Коммерческая недвижимость',
    'Строительство и девелопмент',
];

const PROCESS_STEPS = [
    {
        num: '1',
        title: 'Разбор задачи',
        body: 'Обсуждаем цель проекта, аудиторию, платформу, формат и ожидания. Формируем чёткое понимание до начала любой работы.',
    },
    {
        num: '2',
        title: 'Подготовка и план',
        body: 'Сценарий, техническое задание, логистика съёмки или условия AI-генерации. Прорабатываем детали заранее.',
    },
    {
        num: '3',
        title: 'Производство',
        body: 'Съёмка, монтаж, обработка, генерация. Работаем по утверждённому плану и держим связь в процессе.',
    },
    {
        num: '4',
        title: 'Согласование',
        body: 'Показываем результат, собираем правки. Итерируем до готового материала, который соответствует задаче.',
    },
    {
        num: '5',
        title: 'Финальная сдача',
        body: 'Передаём файлы в нужных форматах: для сайта, соцсетей, рекламы, презентаций. Без скрытых условий.',
    },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            <SmartHeader transparent={false} isLanding={false} />

            {/* ─── HERO ─────────────────────────────────────────────────── */}
            <DebugWrapper id={20100} label="About: Hero">
                <section className="pt-36 pb-24 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
                            О студии
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                            Визуальное производство<br className="hidden md:block" />
                            {' '}для бизнеса
                        </h1>
                        <p className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed mb-10">
                            Breus Media — студия, которая помогает бизнесу представлять продукты,
                            услуги, пространства и коммерческие предложения через профессиональный
                            визуальный контент.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/995574619393"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                Написать в WhatsApp
                            </a>
                            <a
                                href="https://t.me/breusmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center border border-white/20 text-white/80 px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-white/50 hover:text-white transition-colors"
                            >
                                Telegram
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── WHO WE ARE ───────────────────────────────────────────── */}
            <DebugWrapper id={20200} label="About: Who We Are">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Кто мы</h2>
                                <p className="text-white/65 leading-relaxed mb-4">
                                    Breus Media — студия на пересечении визуального производства
                                    и AI-инструментов. Мы работаем с бизнесом, которому нужен
                                    качественный визуальный контент для продаж, презентаций и
                                    продвижения.
                                </p>
                                <p className="text-white/65 leading-relaxed mb-4">
                                    В нашем арсенале — дрон, промо-видео, reels, 360-туры,
                                    AI-визуализация и AI-упаковка контента. Мы выбираем формат
                                    под задачу, а не предлагаем один инструмент на все случаи.
                                </p>
                                <p className="text-white/65 leading-relaxed">
                                    Работаем с недвижимостью, гостиничным бизнесом, туризмом,
                                    автомобильной нишей, ресторанами, клиниками и коммерческими
                                    объектами — в Грузии и удалённо.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: 'Форматы', value: 'Дрон · Видео · Reels · 360° · AI-визуал · AI-контент' },
                                    { label: 'Ниши', value: 'Недвижимость · Туризм · Авто · Отели · Рестораны · Клиники' },
                                    { label: 'География', value: 'Грузия (Тбилиси и выезды) · Удалённые проекты' },
                                    { label: 'Языки', value: 'Русский · English · ქართული' },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5"
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-white/75 leading-relaxed">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── APPROACH ─────────────────────────────────────────────── */}
            <DebugWrapper id={20300} label="About: Approach">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-12">Наш подход</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {APPROACH_POINTS.map((point) => (
                                <div
                                    key={point.num}
                                    className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-6 hover:border-[#D4AF37]/30 transition-colors"
                                >
                                    <p className="text-2xl font-bold text-[#D4AF37] mb-3">
                                        {point.num}
                                    </p>
                                    <h3 className="text-base font-bold mb-2">{point.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">{point.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── WHAT WE DO ───────────────────────────────────────────── */}
            <DebugWrapper id={20400} label="About: What We Do">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-4">Что мы делаем</h2>
                        <p className="text-white/55 mb-12 max-w-xl leading-relaxed">
                            Шесть направлений, которые закрывают задачи визуального присутствия
                            бизнеса на разных платформах и в разных каналах.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {SERVICES.map((s) => (
                                <div
                                    key={s.title}
                                    className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#D4AF37]/30 transition-colors"
                                >
                                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-white/55 leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link
                                href="/drone-service"
                                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors border border-[#D4AF37]/30 hover:border-white/30 rounded-[8px] px-4 py-2"
                            >
                                Аэросъёмка →
                            </Link>
                            <Link
                                href="/promo-video-service"
                                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors border border-[#D4AF37]/30 hover:border-white/30 rounded-[8px] px-4 py-2"
                            >
                                Промо-видео →
                            </Link>
                            <Link
                                href="/reels-service"
                                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors border border-[#D4AF37]/30 hover:border-white/30 rounded-[8px] px-4 py-2"
                            >
                                Reels →
                            </Link>
                            <Link
                                href="/360-tours-service"
                                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors border border-[#D4AF37]/30 hover:border-white/30 rounded-[8px] px-4 py-2"
                            >
                                360° туры →
                            </Link>
                            <Link
                                href="/ai-visualization-service"
                                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors border border-[#D4AF37]/30 hover:border-white/30 rounded-[8px] px-4 py-2"
                            >
                                AI-визуализация →
                            </Link>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── HOW WE USE AI ────────────────────────────────────────── */}
            <DebugWrapper id={20500} label="About: AI Layer">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">AI как рабочий слой</h2>
                                <p className="text-white/65 leading-relaxed mb-4">
                                    AI — не маркетинговый аргумент, а инструмент, встроенный
                                    в рабочий процесс. Мы используем его там, где это ускоряет
                                    и улучшает результат.
                                </p>
                                <p className="text-white/65 leading-relaxed">
                                    Это не замена производству — это слой подготовки, анализа
                                    и упаковки, который позволяет делать проекты точнее
                                    и эффективнее.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                {AI_POINTS.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                                    >
                                        <span className="mt-0.5 text-[#D4AF37] shrink-0">→</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── EXPERIENCE AREAS ─────────────────────────────────────── */}
            <DebugWrapper id={20600} label="About: Experience Areas">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-4">Опыт работы</h2>
                        <p className="text-white/55 mb-10 max-w-xl leading-relaxed">
                            Направления, с которыми мы реально работали. Без выдуманных
                            кейсов и процентов конверсии — только честный список.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {EXPERIENCE_AREAS.map((area) => (
                                <span
                                    key={area}
                                    className="rounded-full border border-[#2a2a2a] bg-[#141414] px-4 py-2 text-sm text-white/70"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── PROCESS ──────────────────────────────────────────────── */}
            <DebugWrapper id={20700} label="About: Process">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-12">Как мы работаем</h2>
                        <div className="space-y-4">
                            {PROCESS_STEPS.map((step) => (
                                <div
                                    key={step.num}
                                    className="flex gap-6 rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-6 hover:border-[#D4AF37]/25 transition-colors"
                                >
                                    <span className="text-2xl font-bold text-[#D4AF37] shrink-0 w-6 text-center">
                                        {step.num}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-white/60 leading-relaxed">{step.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── GEOGRAPHY ────────────────────────────────────────────── */}
            <DebugWrapper id={20800} label="About: Geography">
                <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                                    Базирование
                                </p>
                                <p className="text-sm font-bold mb-1">Тбилиси, Грузия</p>
                                <p className="text-sm text-white/55 leading-relaxed">
                                    Съёмки по всей Грузии с выездом. Дрон, видео, 360-туры на локации.
                                </p>
                            </div>
                            <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                                    Удалённые проекты
                                </p>
                                <p className="text-sm font-bold mb-1">Без границ</p>
                                <p className="text-sm text-white/55 leading-relaxed">
                                    AI-визуализация, AI-контент и упаковка материалов — работаем
                                    с клиентами из любой страны.
                                </p>
                            </div>
                            <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                                    Языки
                                </p>
                                <p className="text-sm font-bold mb-1">RU · EN · GE</p>
                                <p className="text-sm text-white/55 leading-relaxed">
                                    Ведём проекты на русском, английском и грузинском языках.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ─── CTA ──────────────────────────────────────────────────── */}
            <DebugWrapper id={20900} label="About: CTA">
                <section className="py-24 bg-[#080808]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="rounded-[16px] border border-[#D4AF37]/25 bg-[#0D0D0D] p-10 md:p-14 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Обсудим ваш проект
                            </h2>
                            <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
                                Расскажите о задаче — мы разберём её и предложим формат,
                                который действительно подойдёт. Без шаблонных предложений.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="https://wa.me/995574619393"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-[#D4A017] text-black px-8 py-4 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                                >
                                    Написать в WhatsApp
                                </a>
                                <a
                                    href="https://t.me/breusmedia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center border border-white/20 text-white/80 px-8 py-4 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-white/50 hover:text-white transition-colors"
                                >
                                    Telegram
                                </a>
                            </div>
                            <p className="mt-8 text-xs text-white/30">
                                +995 574 619 393 · breus.media
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={21000} label="About: Footer">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}
