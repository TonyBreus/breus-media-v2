type FaqItem = {
    question: string;
    answer: string;
};

type FaqSectionProps = {
    items: FaqItem[];
    title: string;
    variant?: 'beginner' | 'commercial';
    id?: string;
    bgColor?: string;
};

export function FaqSection({ items, title, variant = 'beginner', id, bgColor }: FaqSectionProps) {
    const isCommercial = variant === 'commercial';
    const sectionBgColor = bgColor ?? (isCommercial ? '#0D0D0D' : '#080808');

    return (
        <section
            className="scroll-mt-20 py-24 border-b border-[#2a2a2a] lg:scroll-mt-24"
            id={id}
            style={{ backgroundColor: sectionBgColor }}
        >
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className={`text-3xl font-bold text-center ${isCommercial ? 'mb-12' : 'mb-10'}`}>{title}</h2>
                <div className="space-y-4">
                    {items.map((item) => (
                        <details
                            key={item.question}
                            className={`group rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors ${
                                isCommercial ? 'hover:border-[#D4A017]/50' : 'hover:border-[#D4A017]/40'
                            }`}
                        >
                            <summary
                                className={`list-none flex justify-between items-center gap-4 cursor-pointer font-bold ${
                                    isCommercial
                                        ? 'text-sm uppercase tracking-wider text-white/90 group-open:text-[#D4A017]'
                                        : 'text-sm text-white/90'
                                }`}
                            >
                                {item.question}
                                <span className="text-[#D4A017] group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="text-sm text-white/70 leading-relaxed pt-4 mt-4 border-t border-white/10">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
