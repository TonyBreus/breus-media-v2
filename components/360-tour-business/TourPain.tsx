const pains = [
    'Иностранные компании не могут приехать на осмотр — уходят к конкурентам с лучшим визуальным присутствием онлайн',
    'Менеджер тратит время на показы тем, кто "просто смотрит" — тур отсеивает нецелевые визиты',
    'Красивый офис или коворкинг невидим онлайн — одна фотография не передаёт реальный масштаб и атмосферу',
    'Кандидаты на работу не видят рабочее пространство до собеседования — это снижает конверсию в оффер',
];

export function TourPain() {
    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что теряют офисы без 360° тура</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {pains.map((item) => (
                        <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
