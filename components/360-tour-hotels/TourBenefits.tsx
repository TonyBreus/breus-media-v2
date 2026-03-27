export function TourBenefits() {
    const benefits = [
        {
            title: 'Гость изучает номера до бронирования',
            text: 'Будущий клиент видит планировку номера, лобби и ключевые зоны ещё до оплаты.',
        },
        {
            title: 'Выше уверенность перед бронью',
            text: 'Чем понятнее пространство, тем меньше сомнений и выше готовность бронировать.',
        },
        {
            title: 'Сильнее подача на booking-платформах',
            text: 'Интерактивный формат выделяет карточку отеля и улучшает качество презентации.',
        },
        {
            title: 'Богаче маркетинговый визуал',
            text: 'Для рекламы и соцсетей появляется более выразительный контент, чем только фото-карусель.',
        },
    ];

    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">Что получает отель в результате</h2>
                    <p className="text-white/70 leading-relaxed">
                        360° тур помогает лучше объяснить пространство, ускоряет решение гостя и усиливает цифровую
                        презентацию отеля в продажах и маркетинге.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((benefit) => (
                        <article key={benefit.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{benefit.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
