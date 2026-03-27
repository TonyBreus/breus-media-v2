const pains = [
    'Покупатель из другого города не может приехать на осмотр — теряете лида которого могли закрыть дистанционно',
    'Менеджер тратит время на визиты "просто посмотреть" — вместо работы с готовыми покупателями',
    'Фотографии и видео не передают реальное ощущение от автомобиля — покупатель уходит к конкуренту с более качественной презентацией',
    'Премиум-автомобиль заслуживает премиального представления — обычные фото снижают воспринимаемую ценность',
];

export function TourPain() {
    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что теряют автосалоны без 360° тура</h2>
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
