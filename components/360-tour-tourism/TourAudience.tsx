const audienceCards = [
    {
        title: 'Туроператоры и гиды',
        text: 'Показать локации маршрута туристам до продажи тура.',
    },
    {
        title: 'Музеи и культурные объекты',
        text: 'Привлечь иностранных посетителей через интерактивное знакомство.',
    },
    {
        title: 'Свадебные и event-площадки',
        text: 'Помочь парам и организаторам выбрать место дистанционно.',
    },
    {
        title: 'Природные локации и парки',
        text: 'Передать масштаб и атмосферу которые невозможно показать фото.',
    },
];

export function TourAudience() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Кому подходит</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {audienceCards.map((item) => (
                        <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
