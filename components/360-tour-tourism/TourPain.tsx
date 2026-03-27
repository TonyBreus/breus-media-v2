const pains = [
    'Иностранные туристы не могут оценить масштаб и атмосферу по фотографиям — уходят к конкурентам с лучшим визуальным присутствием',
    'Свадебные пары и организаторы событий выбирают площадку не видя реального пространства — риск несоответствия ожиданиям',
    'Туристический контент в интернете огромный — без интерактивного тура локация теряется среди обычных фото',
    'Сезонный трафик зависит от того насколько убедительно выглядит локация онлайн до сезона',
];

export function TourPain() {
    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что теряют локации без 360° тура</h2>
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
