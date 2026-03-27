const useCases = [
    'Квартиры',
    'Дома',
    'Коммерческие помещения',
    'Шоурумы',
    'Удалённые покупатели',
    'Экспаты',
    'Инвесторы',
];

export function TourUseCases() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Где можно применять 360° тур</h2>
                    <p className="text-white/70 leading-relaxed">
                        Ниже типовые сценарии, где такой формат особенно хорошо работает на практике: от жилой
                        недвижимости до удалённого показа для клиентов, которые не могут приехать сразу.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {useCases.map((item) => (
                        <article
                            key={item}
                            className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 min-h-[92px] flex items-center"
                        >
                            <p className="font-semibold text-white/90">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
