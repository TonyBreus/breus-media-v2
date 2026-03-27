const audienceCards = [
    {
        title: 'Агентства и брокеры',
        text: 'Чтобы отправлять клиенту понятный предварительный просмотр объекта и уменьшать количество случайных показов.',
    },
    {
        title: 'Девелоперы и отделы продаж',
        text: 'Чтобы аккуратно презентовать квартиры, шоурумы и коммерческие площади в цифровой воронке и в переписке.',
    },
    {
        title: 'Собственники и B2B-команды',
        text: 'Для жилой и коммерческой недвижимости, когда объект нужно показывать удалённым клиентам, инвесторам или арендаторам.',
    },
];

export function TourAudience() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Для кого это решение</h2>
                    <p className="text-white/70 leading-relaxed">
                        Этот формат особенно полезен тем, кто регулярно показывает объект клиентам и хочет делать это
                        понятнее, спокойнее и современнее.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
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
