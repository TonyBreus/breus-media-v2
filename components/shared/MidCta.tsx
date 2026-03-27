type MidCtaProps = {
    text: string;
    buttonLabel: string;
    href?: string;
    showPricingNote?: boolean;
    bgColor?: string;
};

export function MidCta({ text, buttonLabel, href = '#contact', showPricingNote = false, bgColor = '#0D0D0D' }: MidCtaProps) {
    return (
        <section className="py-10 border-b border-[#2a2a2a]" style={{ backgroundColor: bgColor }}>
            <div className="container mx-auto px-6">
                {showPricingNote && (
                    <p className="text-center text-sm text-white/50 mb-6">
                        Все цены в грузинских лари (₾) — без скрытых платежей и ежемесячных подписок.
                    </p>
                )}
                <div className="rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <p className="text-white/80 max-w-2xl leading-relaxed">{text}</p>
                    <a
                        href={href}
                        className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                    >
                        {buttonLabel}
                    </a>
                </div>
            </div>
        </section>
    );
}
