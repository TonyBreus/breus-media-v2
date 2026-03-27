const audienceCards = [
    {
        title: 'Коворкинги и гибкие пространства',
        text: 'Показать инфраструктуру и атмосферу потенциальным резидентам онлайн.',
    },
    {
        title: 'Бизнес-центры и офисы в аренду',
        text: 'Закрывать удалённых арендаторов без лишних визитов на осмотр.',
    },
    {
        title: 'Корпоративные офисы',
        text: 'HR-брендинг: показать рабочее место кандидатам в вакансии.',
    },
    {
        title: 'Шоурумы и выставочные залы',
        text: 'Представить пространство партнёрам и клиентам онлайн.',
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
