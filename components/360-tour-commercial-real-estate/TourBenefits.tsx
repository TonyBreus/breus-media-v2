export function TourBenefits() {
    const benefits = [
        {
            title: 'Клиент заранее понимает помещение',
            text: 'До визита видно структуру объекта, ключевые зоны и общий сценарий использования пространства.',
        },
        {
            title: 'Легче квалифицировать лиды',
            text: 'На показ приезжают более заинтересованные клиенты, которые уже оценили объект удалённо.',
        },
        {
            title: 'Сильнее онлайн-подача объекта',
            text: 'Тур усиливает карточку в объявлении, на сайте и в презентационных материалах брокера.',
        },
        {
            title: 'Проще работать с удалёнными клиентами',
            text: 'Арендаторы и инвесторы из других городов могут предварительно изучить помещение без выезда.',
        },
    ];

    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">Что вы получаете в результате</h2>
                    <p className="text-white/70 leading-relaxed">
                        360° тур помогает быстрее и понятнее презентовать коммерческий объект для аренды или продажи.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((benefit) => (
                        <article key={benefit.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{benefit.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
