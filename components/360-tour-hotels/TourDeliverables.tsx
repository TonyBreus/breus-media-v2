const deliverables = [
    'Интерактивная ссылка на тур',
    'Iframe-встраивание для сайта отеля',
    'Брендированный preview-кадр',
    'QR-код для буклетов и офлайн-материалов',
    'Короткий teaser-клип',
    'Готовые ассеты для страниц бронирования',
];

export function TourDeliverables() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что вы получаете</h2>
                    <p className="text-white/70 leading-relaxed">
                        Практичный пакет, который можно быстро публиковать на сайте, в каналах бронирования и в рекламе.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {deliverables.map((item) => (
                        <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                            <p className="text-sm md:text-base text-white/85 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
