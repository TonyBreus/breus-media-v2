const reasons = [
    {
        title: 'Тбилиси - наш рабочий город',
        text: 'Понимаем локальный рынок медицинских услуг и ожидания пациентов.',
    },
    {
        title: 'Съёмка без остановки работы клиники',
        text: 'Работаем до открытия или между приёмами. 1-3 часа - и тур готов к сборке.',
    },
    {
        title: 'Деликатная подача медицинского пространства',
        text: 'Показываем оборудование и интерьер понятно, спокойно и без визуального шума.',
    },
    {
        title: 'Готовность к публикации везде',
        text: 'Ссылка + iframe + инструкция. Тур работает на сайте, в Google Maps и в мессенджерах.',
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
