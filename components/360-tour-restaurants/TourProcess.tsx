const steps = [
    {
        number: '01',
        title: 'Брифинг (онлайн, 15 мин)',
        text: 'Расскажите про заведение - рассчитаем стоимость и согласуем время съёмки.',
    },
    {
        number: '02',
        title: 'Съёмка (до открытия или в тихие часы)',
        text: 'Приезжаем с оборудованием, снимаем 1-2 часа без остановки работы.',
    },
    {
        number: '03',
        title: 'Обработка и сборка тура',
        text: 'Собираем интерактивный маршрут - 3-5 рабочих дней.',
    },
    {
        number: '04',
        title: 'Передача и запуск',
        text: 'Ссылка, iframe-код и инструкция по размещению.',
    },
];

export function TourProcess() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Как мы работаем</h2>
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
