const audienceCards = [
    {
        title: 'Отели',
        text: 'Для городских и бизнес-отелей, которым важно ясно показать номера до прямого бронирования.',
    },
    {
        title: 'Бутик-отели',
        text: 'Для объектов, где атмосфера и детали интерьера напрямую влияют на выбор гостя.',
    },
    {
        title: 'Курорты',
        text: 'Для объектов, которым нужно объёмно показать номера, инфраструктуру и общественные зоны.',
    },
    {
        title: 'Апартаменты в аренду',
        text: 'Для short-stay форматов, где визуальное доверие критично для конверсии в бронирование.',
    },
];

export function TourAudience() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Для кого эта услуга</h2>
                    <p className="text-white/70 leading-relaxed">
                        Для hospitality-команд, которым важно понятно показать пространство и поддержать решение гостя онлайн.
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
