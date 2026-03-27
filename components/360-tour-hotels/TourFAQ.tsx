export function TourFAQ() {
    const faqItems = [
        {
            question: 'Сколько времени занимает съёмка?',
            answer: 'Срок зависит от размера объекта и количества зон, но стандартно съёмка отеля занимает 1-2 дня.',
        },
        {
            question: 'Сколько номеров можно включить в тур?',
            answer: 'Можно включить ключевые категории номеров, лобби и общие зоны. Объём зависит от выбранного пакета.',
        },
        {
            question: 'Можно ли обновить тур позже?',
            answer: 'Да. Можно добавить новые типы номеров, обновить зоны после ремонта или сделать сезонные обновления.',
        },
        {
            question: 'Можно ли использовать тур на площадках бронирования?',
            answer: 'Да, мы готовим материалы и ссылки для страниц бронирования, сайта отеля и партнёрских каналов.',
        },
    ];

    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold mb-12 text-center">Коммерческий FAQ</h2>
                <div className="space-y-4">
                    {faqItems.map((item) => (
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
