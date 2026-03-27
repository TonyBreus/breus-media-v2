const pains = [
    {
        title: 'Пациент боится неизвестности',
        text: 'До визита не понимает, как выглядит клиника и оборудование.',
    },
    {
        title: 'Иностранный пациент не может приехать заранее',
        text: 'Выбор клиники происходит дистанционно, без личного осмотра.',
    },
    {
        title: 'Фото не передают уровень клиники',
        text: 'Один ракурс не показывает пространство, чистоту и оснащение.',
    },
    {
        title: 'Часть записей теряется',
        text: 'Люди откладывают решение, потому что не уверены, чего ожидать.',
    },
];

export function TourPain() {
    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что клиника теряет без 360° тура</h2>
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
