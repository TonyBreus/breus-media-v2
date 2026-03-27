export function TourFAQ() {
    const faqItems = [
        {
            question: 'Сколько времени занимает съёмка?',
            answer: 'Обычно съёмка занимает от нескольких часов до 1 дня, в зависимости от площади и числа зон.',
        },
        {
            question: 'Можно ли показать несколько зон в одном объекте?',
            answer: 'Да, в один тур можно объединить входную группу, основные помещения, проходы и дополнительные зоны.',
        },
        {
            question: 'Можно ли встроить тур на сайт или в объявление?',
            answer: 'Да, мы передаём код встраивания для сайта и листинговых площадок.',
        },
        {
            question: 'Подходит ли это для аренды и продажи?',
            answer: 'Да, формат одинаково полезен и для аренды, и для продажи коммерческой недвижимости.',
        },
        {
            question: 'Можно ли обновить тур после ремонта или перепланировки?',
            answer: 'Да, можно переснять отдельные зоны или обновить тур полностью после изменений объекта.',
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
