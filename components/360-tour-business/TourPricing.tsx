const plans = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 900 ₾',
        features: ['небольшой офис / кабинет', 'до 6 точек съёмки', 'ссылка на тур', '3–5 дней'],
        featured: false,
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 1 400 ₾',
        features: ['средний офис / коворкинг', 'до 12 точек / несколько зон', 'ссылка + iframe', 'логотип в туре', '3–5 дней'],
        featured: true,
    },
    {
        title: 'КОМПЛЕКСНЫЙ',
        price: 'от 2 200 ₾',
        features: ['большой бизнес-центр / шоурум', 'все зоны без ограничений', 'встройка + логотип + контакты', 'приоритет', 'мобильная оптимизация'],
        featured: false,
    },
];

export function TourPricing() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]" id="pricing">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-white">Стоимость 360° тура для офиса</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <article
                            key={plan.title}
                            className={`rounded-[12px] border p-6 flex flex-col ${
                                plan.featured ? 'border-[#D4A017] bg-[#17140b]' : 'border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                            <p className="text-3xl font-black text-[#D4A017] mb-6">{plan.price}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="text-sm text-white/75 leading-relaxed">
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`w-full text-center py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs transition-colors ${
                                    plan.featured
                                        ? 'bg-[#D4A017] text-black hover:bg-white'
                                        : 'border border-white/25 text-white hover:border-[#D4A017]'
                                }`}
                            >
                                Обсудить пакет
                            </a>
                        </article>
                    ))}
                </div>

                <p className="text-center text-sm text-white/50 mt-8">
                    Все цены в лари (₾). Для сетевых коворкингов и нескольких локаций — пакетная цена.
                </p>
            </div>
        </section>
    );
}
