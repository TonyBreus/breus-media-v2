type FaqItem = {
    question: string;
    answer: string;
};

type TourFAQProps = {
    items: FaqItem[];
};

export function TourFAQ({ items }: TourFAQProps) {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold mb-12 text-center">Коммерческий FAQ</h2>
                <div className="space-y-4">
                    {items.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#D4A017]/50 transition-colors"
                        >
                            <summary className="list-none flex justify-between items-center gap-4 cursor-pointer font-bold text-sm uppercase tracking-wider text-white/90 group-open:text-[#D4A017]">
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
