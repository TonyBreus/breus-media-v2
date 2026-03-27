const audienceCards = [
    {
        title: 'Собственники коммерческой недвижимости',
        text: 'Для тех, кому важно быстрее и понятнее показывать объект потенциальным арендаторам и покупателям.',
    },
    {
        title: 'Брокеры и агентства',
        text: 'Для команд, которым нужно улучшить подачу объекта и сократить число нецелевых показов.',
    },
    {
        title: 'Арендаторы и инвесторы',
        text: 'Для клиентов, которые оценивают объекты удалённо до выезда на место.',
    },
    {
        title: 'Девелоперы бизнес-объектов',
        text: 'Для проектов, где нужно показать пространство на этапе привлечения арендаторов и сделок.',
    },
];

export function TourAudience() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Для кого эта услуга</h2>
                    <p className="text-white/70 leading-relaxed">
                        Для собственников, брокеров и бизнес-клиентов, которым важно понять объект до личного просмотра.
                    </p>
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
