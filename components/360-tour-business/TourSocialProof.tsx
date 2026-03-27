const facts = [
    {
        text: 'Иностранные компании выбирают офис в Тбилиси дистанционно — тур даёт им полное понимание пространства без поездки.',
    },
    {
        text: 'HR-команды всё чаще добавляют визуальный контент об офисе в вакансии — это напрямую влияет на качество откликов.',
        source: 'LinkedIn Talent Trends, 2024',
    },
    {
        text: 'Коворкинги и гибкие офисные пространства конкурируют прежде всего на уровне визуального представления онлайн.',
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
