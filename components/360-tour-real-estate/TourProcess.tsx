export function TourProcess() {
    const steps = [
        {
            number: '01',
            title: 'Обсуждение',
            text: 'Уточняем тип объекта, задачу, где будет использоваться тур и какие материалы нужны на выходе.',
        },
        {
            number: '02',
            title: 'Съёмка',
            text: 'Аккуратно снимаем объект по согласованному маршруту, чтобы показать пространство понятно и без хаоса.',
        },
        {
            number: '03',
            title: 'Сборка',
            text: 'Собираем тур, настраиваем логику переходов, готовим превью и сопутствующие материалы.',
        },
        {
            number: '04',
            title: 'Передача и публикация',
            text:
                'Передаём ссылку и материалы для размещения; при необходимости помогаем с публикацией и поддержкой размещения на согласованный срок.',
        },
    ];

    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Процесс работы</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <article key={step.number} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-[#D4A017] text-2xl font-black mb-4">{step.number}</p>
                            <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
