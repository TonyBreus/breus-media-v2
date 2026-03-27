const experienceSteps = [
    {
        title: '1) Открывает ссылку',
        text: 'Клиент получает ссылку из объявления, сайта, мессенджера или от брокера.',
    },
    {
        title: '2) Осматривает помещение онлайн',
        text: 'Смотрит входную группу, основные зоны, проходы и ключевые точки объекта в удобном темпе.',
    },
    {
        title: '3) Понимает планировку и сценарий использования',
        text: 'Становится ясно, подходит ли помещение под офис, торговлю, шоурум или другую бизнес-задачу.',
    },
    {
        title: '4) Решает, стоит ли ехать на просмотр',
        text: 'После удалённой оценки легче принять решение и выходить на следующий шаг переговоров.',
    },
];

export function TourExperience() {
    return (
        <section className="py-20 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Как клиент проходит это онлайн</h2>
                    <p className="text-white/70 leading-relaxed">
                        Сценарий простой и понятный даже для тех, кто впервые видит 360° тур.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {experienceSteps.map((step) => (
                        <article key={step.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
