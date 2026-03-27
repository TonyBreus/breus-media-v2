const reasons = [
    'Объясняем сложные цифровые форматы простым языком',
    'Делаем подачу удобной для арендатора, брокера и собственника',
    'Помогаем показать объект до визита, чтобы экономить время команды',
    'Подходим и для небольших помещений, и для крупных бизнес-пространств',
    'Связываем тур с другими форматами контента и продвижения',
    'Настраиваем структуру тура под цели аренды или продажи',
    'Передаём материалы, готовые для сайта, объявлений и презентаций',
    'Поддерживаем обновления после ремонта, ребрендинга и перепланировки',
];

export function TourWhyUs() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему нам доверяют коммерческие объекты</h2>
                    <p className="text-white/70 leading-relaxed">
                        Мы делаем 360° тур так, чтобы он помогал в переговорах и принятии решения, а не только красиво выглядел.
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
