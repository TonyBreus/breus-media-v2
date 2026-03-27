const pains = [
    {
        title: 'Туристы проходят мимо',
        text: 'Не видят атмосферу снаружи и не решаются зайти.',
    },
    {
        title: 'Банкетные залы пустуют',
        text: 'Организатор не может оценить пространство без визита.',
    },
    {
        title: 'Instagram есть, а посадки нет',
        text: 'Красивые фото не передают реальный масштаб зала.',
    },
    {
        title: 'Конкуренты с туром выглядят современнее',
        text: 'В Google Maps они привлекают больше трафика.',
    },
];

export function TourPain() {
    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что теряют без 360° тура</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {pains.map((item) => (
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
