export function TourBenefits() {
    const benefits = [
        {
            title: 'Лучшее понимание пространства',
            text: 'Клиент быстрее понимает, как устроен объект, где находятся комнаты, проходы и ключевые зоны.',
        },
        {
            title: 'Меньше пустых показов',
            text: 'На личный просмотр чаще приезжают те, кто уже понял формат объекта и действительно хочет рассматривать его дальше.',
        },
        {
            title: 'Сильнее удалённая квалификация',
            text: 'Тур помогает работать с иногородними клиентами, экспатами, инвесторами и занятыми людьми без потери базового понимания объекта.',
        },
        {
            title: 'Более современная подача объекта',
            text: 'Недвижимость выглядит собранно и аккуратно в цифровой среде: на сайте, в презентации, в мессенджере и в листинге.',
        },
    ];

    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">Что дают 360° туры</h2>
                    <p className="text-white/70 leading-relaxed">
                        Польза здесь практическая: лучше объяснить объект, заранее отсеять случайные просмотры и дать
                        клиенту нормальный онлайн-опыт ещё до визита.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((benefit) => (
                        <article key={benefit.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{benefit.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
