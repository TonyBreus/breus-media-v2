const benefits = [
    'Гость "приходит" онлайн -> меньше сомнений -> выше конверсия в реальный визит',
    'Банкет и корпоратив можно закрыть дистанционно - без лишних визитов на осмотр',
    'Туристы видят атмосферу заранее и выбирают вас, а не соседа',
    'Тур работает в Google Maps, на сайте и в любых мессенджерах одновременно',
];

export function TourBenefits() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white">Что даёт 360° тур ресторану</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((item) => (
                        <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
