'use client';

type StatsEvidenceItem = {
    value: string;
    label?: string;
    description: string;
    sourceLabel?: string;
    sourceUrl?: string;
};

type StatsEvidenceStripProps = {
    heading: string;
    items: StatsEvidenceItem[];
    note?: string;
    className?: string;
};

export const StatsEvidenceStrip = ({ heading, items, note, className }: StatsEvidenceStripProps) => (
    <section className={className ?? 'border-y border-[#2a2a2a] bg-[#0a0a0a] py-8 md:py-14'}>
        <div className="container mx-auto px-6">
            <p className="mb-5 text-center text-[11px] uppercase tracking-[3px] text-[#D4A017] md:mb-8">{heading}</p>
            <div className="grid grid-cols-2 gap-px bg-[#2a2a2a] md:grid-cols-4">
                {items.map((item) => (
                    <div key={`${item.value}-${item.description}`} className="bg-[#0a0a0a] px-6 py-5 text-center md:py-8">
                        <div className="mb-3 text-[40px] font-bold leading-none text-[#D4A017] md:text-[52px]">{item.value}</div>
                        {item.label ? <p className="mb-2 text-[13px] font-semibold leading-snug text-white/78">{item.label}</p> : null}
                        <p className={item.label ? 'mb-2 text-[12px] leading-relaxed text-white/52' : 'mb-2 text-[13px] leading-snug text-white/70'}>
                            {item.description}
                        </p>
                        {item.sourceLabel ? (
                            item.sourceUrl ? (
                                <a
                                    href={item.sourceUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[11px] tracking-wide text-white/35 transition-colors hover:text-white/60"
                                >
                                    {item.sourceLabel}
                                </a>
                            ) : (
                                <p className="text-[11px] tracking-wide text-white/35">{item.sourceLabel}</p>
                            )
                        ) : null}
                    </div>
                ))}
            </div>
            {note ? <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-white/42">{note}</p> : null}
        </div>
    </section>
);
