const whatIsCards = [
    {
        title: 'Что это',
        text: '360° тур — это интерактивный онлайн-просмотр коммерческого помещения, где клиент сам осматривает объект.',
    },
    {
        title: 'Что делает клиент',
        text: 'Открывает ссылку и свободно изучает пространство: вход, залы, проходы, зонирование и глубину помещения.',
    },
    {
        title: 'Какой результат',
        text: 'Клиент заранее понимает планировку и сценарий использования, поэтому проще решает, стоит ли ехать на просмотр.',
    },
];

export function TourWhatIs() {
    return (
        <section id="tour-what-is" className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что такое 360° тур для коммерческой недвижимости</h2>
                    <p className="text-white/70 leading-relaxed">
                        Это понятный способ показать объект удалённо, чтобы клиент оценил помещение до личного визита.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {whatIsCards.map((card) => (
                        <article key={card.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
