const benefits = [
    'Покупатель осмотрел машину онлайн → приезжает уже готовым к сделке → меньше времени на каждого клиента',
    'Удалённые покупатели могут принять решение без визита — расширяете географию продаж',
    'Премиум-презентация автомобиля повышает воспринимаемую ценность и упрощает обоснование цены',
    'Тур работает 24/7 — менеджер может отправить ссылку клиенту в любое время дня и ночи',
];

export function TourBenefits() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">Что даёт 360° тур автосалону</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((item) => (
                        <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
