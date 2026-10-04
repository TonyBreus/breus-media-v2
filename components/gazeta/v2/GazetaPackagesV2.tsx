import { PACKAGES, PROCESS, waLink } from "./gazetaV2Data";

export function GazetaPackagesV2() {
    return (
        <section id="pricing" className="bg-black py-10 md:py-14 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-[22px] sm:text-3xl font-black uppercase text-white">Пакеты</h2>
                <p className="mt-1 text-sm text-white/60">Ориентир по цене. Точную сумму назовём после брифа.</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {PACKAGES.map((p) => (
                        <article
                            key={p.name}
                            className={`relative flex flex-col rounded-2xl p-5 ${
                                p.featured ? "border-2 border-[#FFD23F] bg-[#14120a]" : "border border-white/10 bg-[#111]"
                            }`}
                        >
                            {p.featured && (
                                <span className="absolute -top-3 left-5 rounded-full bg-[#FFD23F] px-2.5 py-0.5 text-[11px] font-bold uppercase text-black">
                                    Популярный
                                </span>
                            )}
                            <h3 className="text-lg font-black uppercase text-white">{p.name}</h3>
                            <p className="text-2xl font-black text-[#FFD23F]">{p.price}</p>
                            <p className="text-sm text-white/60">{p.desc}</p>
                            <ul className="mt-3 space-y-1.5 text-sm text-white/85">
                                {p.items.map((it) => (
                                    <li key={it}>✓ {it}</li>
                                ))}
                            </ul>
                            <a
                                href={waLink(`Здравствуйте! Интересует пакет «${p.name}».`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-5 min-h-[44px] flex items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wider ${
                                    p.featured ? "bg-[#FFD23F] text-black" : "border border-white/15 text-white hover:bg-white/5"
                                }`}
                            >
                                Обсудить пакет
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function GazetaProcessV2() {
    return (
        <section className="bg-[#080808] py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-[22px] sm:text-3xl font-black uppercase text-white">Как работаем</h2>
                <ol className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {PROCESS.map((s) => (
                        <li key={s.step} className="rounded-2xl border border-white/10 bg-[#111] p-4">
                            <span className="text-xs font-bold text-[#FFD23F]">{s.step}</span>
                            <h3 className="mt-1 text-base font-bold text-white">{s.title}</h3>
                            <p className="mt-1 text-sm leading-snug text-white/65">{s.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
