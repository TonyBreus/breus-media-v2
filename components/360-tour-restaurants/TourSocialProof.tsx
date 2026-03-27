const facts = [
    {
        text: 'Рестораны с виртуальным туром в Google Maps получают больше переходов на сайт',
        source: 'Google Business данные, 2024',
    },
    {
        text: 'Туристы выбирают заведение онлайн - по фото, отзывам и визуальному контенту',
        source: 'TripAdvisor Consumer Research, 2024',
    },
    {
        text: 'Банкеты и корпоративы часто бронируются дистанционно - организатор не может приехать на осмотр каждого варианта',
        source: 'Практика дистанционного выбора заведений',
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
