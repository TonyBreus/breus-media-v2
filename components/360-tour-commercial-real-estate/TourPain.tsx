export function TourPain() {
    const painPoints = [
        {
            title: 'Фото не показывают логику пространства',
            text: 'По отдельным кадрам сложно понять, как связаны зоны, проходы, вход и глубина помещения.',
        },
        {
            title: 'Клиенту сложно оценить объект удалённо',
            text: 'Арендатору или покупателю трудно понять, подходит ли помещение под его бизнес-сценарий.',
        },
        {
            title: 'Лишние просмотры отнимают время',
            text: 'Без предварительной онлайн-оценки приходится проводить много нецелевых выездов.',
        },
        {
            title: 'Сложно показать сложные зоны объекта',
            text: 'Входная группа, зонирование и проходы часто теряются в фото-подаче и не дают полной картины.',
        },
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему обычных фото уже недостаточно</h2>
                    <p className="text-white/70 leading-relaxed">
                        Для коммерческих объектов важно показать не только вид, но и логику пространства до выезда клиента на место.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {painPoints.map((item) => (
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
