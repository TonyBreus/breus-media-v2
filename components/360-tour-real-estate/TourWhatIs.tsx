const whatIsCards = [
    {
        title: 'Что это',
        text: 'Это не просто галерея и не ролик. 360° тур собирается из панорамных точек и даёт ощущение, что вы находитесь внутри объекта.',
    },
    {
        title: 'Чем отличается от видео',
        text: 'Видео идёт по заранее заданному сценарию, а здесь человек сам вращает обзор, выбирает ракурс и переходит между точками просмотра.',
    },
    {
        title: 'Что видит посетитель',
        text: 'Он открывает ссылку, двигает обзор мышкой или пальцем, изучает комнаты и получает более понятное представление о планировке и масштабе.',
    },
    {
        title: 'Как выглядит результат',
        text: 'На выходе это готовая интерактивная презентация объекта, которую можно открыть в браузере, отправить клиенту или встроить на сайт.',
    },
];

export function TourWhatIs() {
    return (
        <section id="tour-what-is" className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что такое 360° тур простыми словами</h2>
                    <p className="text-white/70 leading-relaxed">
                        Если коротко, это интерактивный просмотр недвижимости, который помогает понять объект до визита:
                        не только увидеть красивые ракурсы, но и разобраться, как пространство ощущается в реальности.
                    </p>
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
