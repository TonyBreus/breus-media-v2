const useCases = [
    'Презентация на сайте отеля',
    'Площадки бронирования',
    'Маркетинговые кампании',
    'Превью для соцсетей',
];

export function TourUseCases() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Где отели используют этот формат</h2>
                    <p className="text-white/70 leading-relaxed">
                        Один и тот же тур можно использовать в воронке бронирования, на сайте и в маркетинговых каналах.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
