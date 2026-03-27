const steps = [
    'Находит в Google Maps или Instagram',
    'Открывает тур прямо в браузере',
    'Осматривает зал, терассу, атмосферу',
    'Бронирует столик или пишет по банкету',
];

export function TourExperience() {
    return (
        <section className="py-20 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Как гость выбирает ваше заведение</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((text, index) => (
                        <article key={text} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-[#D4A017] text-2xl font-black mb-4">0{index + 1}</p>
                            <p className="text-sm text-white/80 leading-relaxed">{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
