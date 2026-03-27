const whatIsCards = [
    {
        title: 'Что это',
        text: 'Не просто фото зала. Интерактивный маршрут по заведению: гость сам выбирает ракурс и переходит между зонами.',
    },
    {
        title: 'Чем отличается от фото',
        text: 'Фото - это один кадр. Тур даёт полное ощущение пространства, размера и атмосферы.',
    },
    {
        title: 'Что видит гость',
        text: 'Открывает ссылку, двигает обзор, смотрит на столики, барную зону, интерьер - и уже понимает, подходит ли ему это место.',
    },
    {
        title: 'Как выглядит результат',
        text: 'Готовая ссылка и iframe-код для сайта, Google Maps и соцсетей.',
    },
];

export function TourWhatIs() {
    return (
        <section id="tour-what-is" className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что такое 360° тур для ресторана</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {whatIsCards.map((card) => (
                        <article key={card.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
