"use client";
import { useState } from "react";
import Link from "next/link";
import { INDUSTRIES, waLink } from "./gazetaV2Data";

export function GazetaIndustryPickerV2() {
    const [active, setActive] = useState(INDUSTRIES[0].id);
    const industry = INDUSTRIES.find((i) => i.id === active) ?? INDUSTRIES[0];

    return (
        <section id="niches" className="bg-[#080808] py-10 md:py-14 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-[22px] sm:text-3xl font-black uppercase text-white">Выберите вашу отрасль</h2>
                <p className="mt-1 text-sm text-white/60">Покажем, что подойдёт именно вам, и сколько это стоит.</p>

                <div role="tablist" aria-label="Отрасли" className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-6">
                    {INDUSTRIES.map((i) => (
                        <button
                            key={i.id}
                            type="button"
                            role="tab"
                            aria-selected={active === i.id}
                            onClick={() => setActive(i.id)}
                            className={`min-h-[44px] rounded-xl px-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                active === i.id
                                    ? "bg-[#FFD23F] text-black"
                                    : "border border-white/10 bg-white/[0.04] text-white/80 hover:text-white"
                            }`}
                        >
                            {i.label}
                        </button>
                    ))}
                </div>

                <div role="tabpanel" className="mt-5 grid gap-3 md:grid-cols-3">
                    {industry.solutions.map((s) => (
                        <article key={s.title} className="flex flex-col rounded-2xl border border-white/10 bg-[#111] p-4">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base font-bold text-white">{s.title}</h3>
                                <span className="shrink-0 text-sm font-black text-[#FFD23F]">{s.price}</span>
                            </div>
                            <p className="mt-1.5 text-sm leading-snug text-white/70">{s.desc}</p>
                            <div className="mt-4 flex gap-2">
                                {s.href !== "#contact" && (
                                    <Link href={s.href} className="flex-1 min-h-[44px] flex items-center justify-center rounded-xl border border-white/15 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5">
                                        Подробнее
                                    </Link>
                                )}
                                <a
                                    href={waLink(`Здравствуйте! ${industry.label}: интересует «${s.title}». Подскажите условия.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-h-[44px] flex items-center justify-center rounded-xl bg-[#FFD23F] text-xs font-bold uppercase tracking-wider text-black hover:bg-[#ffdc66]"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
