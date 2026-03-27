const facts = [
    {
        text: 'Туристы исследуют направления онлайн до поездки — визуальный контент напрямую влияет на выбор локации.',
        source: 'TripAdvisor Travel Research, 2024',
    },
    {
        text: 'Грузия входит в топ растущих туристических направлений — иностранные туристы планируют маршрут заранее по визуальному контенту.',
    },
    {
        text: 'Свадебные и event-локации всё чаще выбираются дистанционно — организаторы не могут приехать на осмотр каждого варианта.',
    },
];

export function TourSocialProof() {
    return (
        <section className="py-16 bg-[#0D0D0D] border-y border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-8">
                    <h2 className="text-3xl font-bold mb-4">Почему это работает</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {facts.map((fact) => (
                        <article key={fact.text} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-sm text-white/80 leading-relaxed">{fact.text}</p>
                            {fact.source && <p className="text-xs text-white/50 mt-4">{fact.source}</p>}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
