export function TourPain() {
    const painPoints = [
        {
            title: 'Фото не показывают пространство целиком',
            text: 'По фотографиям сложно понять, как связаны комнаты, где находятся проходы и как объект ощущается вживую.',
        },
        {
            title: 'Удалённому клиенту трудно оценить объект',
            text: 'Если покупатель, арендатор или инвестор находится в другом городе, обычной фотоподборки часто недостаточно для решения.',
        },
        {
            title: 'Лишние визиты отнимают время',
            text: 'Когда человек приезжает без нормального предварительного понимания объекта, команда тратит время на показы не по делу.',
        },
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему фото уже недостаточно</h2>
                    <p className="text-white/70 leading-relaxed">
                        Фото нужны всегда, но для недвижимости их часто мало. Когда важно передать пространство честно и
                        без лишних поездок, нужен более понятный формат удалённого показа.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
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
