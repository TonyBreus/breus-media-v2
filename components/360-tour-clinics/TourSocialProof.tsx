const facts = [
    {
        text: 'Тревожность перед визитом в клинику - одна из главных причин откладывания лечения. Визуальное знакомство снижает этот барьер.',
        source: 'Medical Patient Experience Research, 2024',
    },
    {
        text: 'Иностранные пациенты выбирают клинику дистанционно - по сайту, отзывам и визуальному контенту.',
        source: 'Medical Tourism Consumer Trends, 2024',
    },
    {
        text: 'Когда пациент заранее видит оборудование, чистоту и атмосферу, он быстрее принимает решение о записи.',
        source: 'Практика дистанционного выбора клиник',
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
                            <p className="text-xs text-white/50 mt-4">{fact.source}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
