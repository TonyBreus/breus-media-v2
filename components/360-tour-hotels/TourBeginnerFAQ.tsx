const beginnerFaq = [
    {
        question: 'Что такое 360° тур для отеля?',
        answer: 'Это интерактивный формат, в котором гость может пройтись по отелю онлайн до бронирования.',
    },
    {
        question: 'Можно ли смотреть такой тур с телефона?',
        answer: 'Да, тур открывается в обычном браузере на телефоне, планшете и компьютере.',
    },
    {
        question: 'Нужно ли гостю устанавливать приложение?',
        answer: 'Обычно нет. Достаточно открыть ссылку и сразу начать просмотр.',
    },
    {
        question: 'Можно ли разместить тур на сайте отеля?',
        answer: 'Да, тур можно встроить через iframe и также использовать как прямую ссылку в коммуникации с гостями.',
    },
];

export function TourBeginnerFAQ() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold mb-10 text-center">FAQ для первого знакомства</h2>
                <div className="space-y-4">
                    {beginnerFaq.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#D4A017]/40 transition-colors"
                        >
                            <summary className="list-none flex justify-between items-center gap-4 cursor-pointer font-bold text-sm text-white/90">
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
