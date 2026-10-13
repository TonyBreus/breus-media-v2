import Image from 'next/image';
import Link from 'next/link';
import {
    trustFacts,
    comparisonPoints,
    portfolioShots,
    packages,
    deliverables,
    techParams,
    processSteps,
    faqItems,
    relatedServices,
    WA,
} from './DroneRealEstateDataV4';

// ─── TRUST STRIP ─────────────────────────────────────────────────────────────
export function DroneRealEstateTrustStripV4() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#0A0A0A] py-6 md:py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {trustFacts.map((f) => (
                        <div
                            key={f.value}
                            className="flex flex-col items-center justify-center rounded-[12px] border border-white/5 bg-white/[0.02] p-4 text-center"
                        >
                            <span className="text-2xl font-black text-[#D4A017] md:text-3xl">{f.value}</span>
                            <span className="mt-1 text-xs uppercase tracking-wider text-white/70 font-medium">
                                {f.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── COMPARISON (Ground vs Aerial) ───────────────────────────────────────────
export function DroneRealEstateComparisonV4() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#080808] py-12 md:py-18">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Визуальный контраст
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white mt-2">
                        Разница в подаче вашего объекта
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                        Почему типовые фото с телефона сливаются с фоном, а аэросъёмка дроном ускоряет принятие решения покупателем:
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Without Drone */}
                    <div className="flex flex-col rounded-[16px] border border-white/10 bg-[#121212] p-6 opacity-75">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <span className="text-base font-bold text-white/80">Обычные фото с земли</span>
                            <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-400">
                                ✕ Теряет интерес
                            </span>
                        </div>
                        <ul className="mt-6 flex-1 space-y-4">
                            {comparisonPoints.map((p) => (
                                <li key={p.without} className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
                                    <span className="font-bold text-red-500 shrink-0 mt-0.5">✕</span>
                                    <span>{p.without}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* With 4K Drone */}
                    <div className="flex flex-col rounded-[16px] border-2 border-[#D4A017]/60 bg-[#15130A] p-6 shadow-[0_0_30px_rgba(212,160,23,0.06)] relative">
                        <div className="flex items-center justify-between border-b border-[#D4A017]/20 pb-4">
                            <span className="text-base font-bold text-white">4K-съёмка дроном Breus Media</span>
                            <span className="rounded-full bg-[#D4A017] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                                ✓ Максимум внимания
                            </span>
                        </div>
                        <ul className="mt-6 flex-1 space-y-4">
                            {comparisonPoints.map((p) => (
                                <li key={p.with} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                                    <span className="font-bold text-[#D4A017] shrink-0 mt-0.5">✓</span>
                                    <span>{p.with}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── PORTFOLIO (Snap-x Mobile / Grid Desktop) ─────────────────────────────────
export function DroneRealEstatePortfolioV4() {
    return (
        <section id="portfolio" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                            Примеры работ
                        </span>
                        <h2 className="text-2xl font-bold md:text-4xl text-white mt-1">
                            Наши съёмки объектов в Грузии
                        </h2>
                    </div>
                    <p className="text-xs text-white/50">Листайте вбок на смартфоне →</p>
                </div>
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-6 px-6 pb-3 [scrollbar-width:none] md:container md:mx-auto md:grid md:grid-cols-3 md:overflow-visible md:px-6">
                {portfolioShots.map((s) => (
                    <figure
                        key={s.src}
                        className="relative aspect-[4/5] w-[72vw] shrink-0 snap-start overflow-hidden rounded-[16px] bg-[#111] sm:w-[46vw] md:w-auto border border-white/5 group"
                    >
                        <Image
                            src={s.src}
                            alt={s.alt}
                            fill
                            sizes="(max-width: 768px) 72vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-4">
                            <span className="rounded-md bg-black/60 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D4A017] backdrop-blur-sm border border-[#D4A017]/30">
                                {s.tag}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

// ─── PRICING (3 Clear Packages) ───────────────────────────────────────────────
export function DroneRealEstatePricingV4() {
    return (
        <section id="pricing" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-12 md:py-18">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Прозрачные условия
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white mt-1">Пакеты аэросъёмки</h2>
                    <p className="mt-2 text-sm text-white/70">
                        Фиксированная стоимость выезда по Тбилиси. Официальный B2B-договор и безналичный расчёт.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    {packages.map((p) => (
                        <article
                            key={p.title}
                            className={`relative flex flex-col rounded-[16px] p-6 md:p-7 ${
                                p.popular
                                    ? 'border-2 border-[#D4A017] bg-[#15130A] shadow-[0_0_30px_rgba(212,160,23,0.1)]'
                                    : 'border border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            {p.popular && (
                                <span className="absolute -top-3 left-6 rounded-full bg-[#D4A017] px-3 py-1 text-[10px] font-bold uppercase text-black tracking-wider shadow">
                                    Хит для продажи
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-white">{p.title}</h3>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-3xl font-black text-[#D4A017] md:text-4xl">{p.price}</span>
                            </div>
                            <p className="mt-1 text-xs text-white/60">{p.subtitle}</p>

                            <ul className="mt-6 flex-1 space-y-2.5">
                                {p.items.map((it) => (
                                    <li key={it} className="flex items-start gap-2.5 text-sm text-white/85">
                                        <span className="mt-0.5 shrink-0 text-[#D4A017] font-bold">✓</span>
                                        <span>{it}</span>
                                    </li>
                                ))}
                            </ul>

                            {p.addons.length > 0 && (
                                <div className="mt-5 rounded-[10px] bg-black/40 p-3 border border-white/5">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                                        Дополнительно:
                                    </p>
                                    {p.addons.map((a) => (
                                        <p key={a} className="mt-1 text-xs text-white/75 font-medium">
                                            {a}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {p.note && <p className="mt-3 text-xs italic text-white/50">{p.note}</p>}

                            <a
                                href={WA(`Здравствуйте! Интересует пакет «${p.title}» (${p.price}) — аэросъёмка недвижимости в Грузии.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Заказать пакет ${p.title}`}
                                className={`mt-6 flex min-h-[46px] items-center justify-center rounded-[10px] text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                                    p.popular
                                        ? 'bg-[#D4A017] text-black hover:bg-white hover:shadow-lg'
                                        : 'border border-white/20 text-white hover:border-[#D4A017] hover:text-[#D4A017]'
                                }`}
                            >
                                Выбрать пакет
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── DELIVERABLES & TECHNICAL PARAMETERS ──────────────────────────────────────
export function DroneRealEstateDeliverablesV4() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#0A0A0A] py-10 md:py-16">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Комплектация
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white mt-1">
                        Что вы получаете на выходе
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {deliverables.map((d) => (
                        <div key={d.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5">
                            <h3 className="text-base font-bold text-white">{d.title}</h3>
                            <ul className="mt-3 space-y-2">
                                {d.items.map((it) => (
                                    <li key={it} className="flex items-start gap-2 text-sm text-white/80">
                                        <span className="mt-0.5 shrink-0 text-[#D4A017] font-bold">·</span>
                                        <span>{it}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-[14px] border border-[#2a2a2a] bg-[#121212] p-5 md:p-6">
                    <h3 className="text-base font-bold text-white">Технические стандарты продакшна</h3>
                    <dl className="mt-4 grid gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                        {techParams.map((t) => (
                            <div key={t.label} className="pr-2">
                                <dt className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                                    {t.label}
                                </dt>
                                <dd className="mt-1 text-sm text-white/85 font-medium">{t.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

// ─── PROCESS (Timeline) ───────────────────────────────────────────────────────
export function DroneRealEstateProcessV4() {
    return (
        <section id="process" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-10 md:py-16">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Прозрачный регламент
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white mt-1">Как проходит работа</h2>
                </div>

                <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {processSteps.map((s) => (
                        <li key={s.step} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-[#D4A017] bg-[#D4A017]/10 px-2 py-0.5 rounded">
                                    {s.step}
                                </span>
                                <h3 className="mt-3 text-base font-bold text-white">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

// ─── INTERACTIVE FAQ (<details> Native SSR Accordion) ─────────────────────────
export function DroneRealEstateFAQV4() {
    return (
        <section id="faq" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-12 md:py-18">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                        Частые вопросы
                    </span>
                    <h2 className="text-2xl font-bold md:text-4xl text-white mt-1">
                        Вопросы и ответы
                    </h2>
                    <p className="mt-2 text-sm text-white/60">
                        Официальные регламенты, согласования в Тбилиси и условия съёмки
                    </p>
                </div>

                <div className="space-y-3">
                    {faqItems.map((f) => (
                        <details
                            key={f.q}
                            className="group rounded-[14px] border border-[#2a2a2a] bg-[#121212] transition-colors hover:border-white/20"
                        >
                            <summary className="cursor-pointer p-5 text-base font-bold text-white list-none flex justify-between items-center gap-4 select-none">
                                <span>{f.q}</span>
                                <span className="text-[#D4A017] text-xl font-bold transition-transform duration-200 group-open:rotate-45 shrink-0">
                                    +
                                </span>
                            </summary>
                            <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-white/75 border-t border-white/5">
                                {f.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── MID-CTA BANNER ───────────────────────────────────────────────────────────
export function DroneRealEstateMidCtaV4() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col gap-5 rounded-[16px] border border-[#D4A017]/40 bg-[#141208] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                    <div>
                        <p className="text-lg font-bold text-white">Есть объект — обсудим съёмку и ракурсы</p>
                        <p className="mt-1 text-sm text-white/70 max-w-xl">
                            Пришлите локацию или ссылку на объявление. Предложим подходящий пакет и рассчитаем выезд в течение часа.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <a
                            href="#contact"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Оставить заявку
                        </a>
                        <a
                            href={WA('Здравствуйте! Хочу обсудить аэросъёмку объекта в Тбилиси.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#D4A017]"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── RELATED SERVICES ─────────────────────────────────────────────────────────
export function DroneRealEstateRelatedV4() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#0A0A0A] py-10 md:py-14">
            <div className="container mx-auto px-6 max-w-5xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                    Экосистема Breus Media
                </span>
                <h2 className="text-2xl font-bold md:text-3xl text-white mt-1">Другие форматы под недвижимость</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Аэросъёмку можно дополнить другими инструментами — для сайта ЖК, Reels и дистанционных продаж.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {relatedServices.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#D4A017]/60 group"
                        >
                            <h3 className="text-lg font-bold text-white group-hover:text-[#D4A017] transition-colors">{s.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#D4A017]">Подробнее →</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
