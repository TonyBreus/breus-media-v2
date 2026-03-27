const reasons = [
    'Объясняем формат простым языком для отельных команд',
    'Фокусируемся на влиянии на бронирование, а не только на картинке',
    'Передаём материалы, готовые для сайта и booking-каналов',
    'Понимаем, как гости принимают решение в hospitality',
    'Подстраиваем структуру тура под продажи и маркетинг отеля',
    'Поддерживаем обновления после сезона и реноваций',
    'Работаем и с бутик-отелями, и с крупными объектами',
    'Комбинируем 360° тур с дроном, видео и short-form контентом',
];

export function TourWhyUs() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему hospitality-команды выбирают нас</h2>
                    <p className="text-white/70 leading-relaxed">
                        Ниже основные причины, по которым отели выбирают нас для запуска и развития 360° туров.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reasons.map((reason, idx) => (
                        <article key={reason} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                            <p className="text-[11px] tracking-widest uppercase text-[#D4A017] font-bold mb-2">
                                Причина {idx + 1}
                            </p>
                            <p className="text-sm text-white/80 leading-relaxed">{reason}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
