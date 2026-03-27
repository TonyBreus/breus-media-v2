const reasons = [
    {
        title: 'Тбилиси и Грузия — наша территория',
        text: 'Знаем туристический рынок и специфику грузинских локаций.',
    },
    {
        title: 'Съёмка без остановки работы',
        text: 'Приезжаем в удобное время. 2–4 часа на объекте.',
    },
    {
        title: 'Тур работает на всех платформах',
        text: 'Сайт, туристические агрегаторы, соцсети — один тур везде.',
    },
    {
        title: 'Работаем с несколькими форматами',
        text: '360° тур, дрон-съёмка, промо-видео — полный визуальный пакет для локации.',
    },
];

export function TourWhyUs() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему выбирают Breus Media</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {reasons.map((reason) => (
                        <article key={reason.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{reason.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{reason.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
