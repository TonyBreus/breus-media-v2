const facts = [
    {
        text: 'Покупатели принимают решение об автомобиле на основе визуального контента онлайн — ещё до визита в дилерский центр.',
        source: 'Auto Trader Research, 2024',
    },
    {
        text: 'Дистанционные покупатели не могут приехать на каждый осмотр — тур заменяет первый визит и снижает количество нецелевых поездок.',
    },
    {
        text: 'Для премиум-сегмента визуальное качество представления автомобиля напрямую влияет на восприятие цены.',
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
