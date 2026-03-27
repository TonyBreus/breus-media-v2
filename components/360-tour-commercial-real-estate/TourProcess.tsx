export function TourProcess() {
    const steps = [
        {
            number: '01',
            title: 'Бриф',
            text: 'Определяем цели, зоны объекта и где тур будет использоваться: сайт, объявления, презентации.',
        },
        {
            number: '02',
            title: 'Съёмка',
            text: 'Снимаем объект по согласованному маршруту: вход, основные помещения, проходы и ключевые зоны.',
        },
        {
            number: '03',
            title: 'Сборка тура',
            text: 'Собираем интерактивный маршрут, проверяем навигацию и подготавливаем материалы для публикации.',
        },
        {
            number: '04',
            title: 'Публикация и передача',
            text: 'Передаём ссылку, код встраивания, QR и пакет материалов для команды продаж и маркетинга.',
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
