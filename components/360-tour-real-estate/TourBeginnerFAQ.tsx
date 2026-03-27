const beginnerFaq = [
    {
        question: 'Что такое 360° тур?',
        answer: 'Это интерактивный просмотр объекта, в котором человек сам осматривает пространство изнутри и переходит между точками обзора.',
    },
    {
        question: 'Это видео или интерактивный просмотр?',
        answer: 'Это интерактивный формат. В отличие от видео, здесь вы сами выбираете, куда смотреть и в каком порядке изучать объект.',
    },
    {
        question: 'Нужны ли VR-очки?',
        answer: 'Нет, обычно не нужны. Тур можно открыть как обычную ссылку в браузере и смотреть без дополнительного оборудования.',
    },
    {
        question: 'Можно ли смотреть с телефона?',
        answer: 'Да. Такие туры обычно открываются на телефоне, планшете и компьютере без установки отдельного приложения.',
    },
    {
        question: 'Где можно разместить такой тур?',
        answer: 'Его можно отправлять по прямой ссылке, встраивать на сайт, использовать в карточке объекта, в презентации или в переписке с клиентом.',
    },
];

export function TourBeginnerFAQ() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold mb-10 text-center">FAQ для тех, кто впервые слышит о формате</h2>
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
