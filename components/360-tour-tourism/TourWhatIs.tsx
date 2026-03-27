const whatIsCards = [
    {
        title: 'Что это',
        text: 'Интерактивный онлайн-просмотр места. Турист сам исследует пространство, переходит между точками и получает реальное ощущение от локации.',
    },
    {
        title: 'Чем отличается от фото',
        text: 'Фото показывает один кадр. Тур даёт полное понимание масштаба, атмосферы и деталей места.',
    },
    {
        title: 'Что видит турист',
        text: 'Открывает ссылку, исследует локацию, оценивает пространство — и принимает решение с полным пониманием того что его ждёт.',
    },
    {
        title: 'Как выглядит результат',
        text: 'Готовая ссылка для сайта, соцсетей и карточки тура. Работает на любом устройстве.',
    },
];

export function TourWhatIs() {
    return (
        <section id="tour-what-is" className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что такое 360° тур для локации</h2>
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
