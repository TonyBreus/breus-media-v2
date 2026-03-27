const reasons = [
    {
        title: 'Тбилиси - наш рабочий город',
        text: 'Знаем специфику местного рынка HoReCa и форматы заведений.',
    },
    {
        title: 'Съёмка без остановки бизнеса',
        text: 'Приезжаем до открытия или в закрытые часы. 1-2 часа - и вы получаете готовый тур.',
    },
    {
        title: 'Тур готов к встройке везде',
        text: 'Ссылка + iframe + инструкция. Работает в Google Maps, на сайте и в мессенджерах.',
    },
    {
        title: 'Работаем с несколькими форматами',
        text: '360° тур, промо-видео, Reels - можем объединить в один визуальный пакет.',
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
