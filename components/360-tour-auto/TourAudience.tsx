const audienceCards = [
    {
        title: 'Дилерские центры',
        text: 'Показать шоурум и модельный ряд покупателям которые ещё не приехали.',
    },
    {
        title: 'Премиум-автосалоны',
        text: 'Представить автомобиль на уровне который соответствует цене.',
    },
    {
        title: 'Детейлинг-центры',
        text: 'Показать качество работы и уровень сервиса до записи.',
    },
    {
        title: 'Прокат и trade-in',
        text: 'Дистанционный осмотр автомобиля для покупателей из других городов.',
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
