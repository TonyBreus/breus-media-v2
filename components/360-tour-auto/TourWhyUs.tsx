const reasons = [
    {
        title: 'Тбилиси — наш рабочий город',
        text: 'Знаем автомобильный рынок Грузии и специфику местных дилерских центров.',
    },
    {
        title: 'Съёмка без остановки работы',
        text: 'Приезжаем до открытия или в спокойные часы. 2–3 часа — и готовый тур.',
    },
    {
        title: 'Тур готов к встройке везде',
        text: 'Сайт, мессенджеры, карточка авто — один тур закрывает все каналы.',
    },
    {
        title: 'Работаем с несколькими форматами',
        text: '360° тур, промо-видео, Reels — можем объединить в пакет для салона.',
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
