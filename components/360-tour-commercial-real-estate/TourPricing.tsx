export function TourPricing() {
    const plans = [
        {
            title: 'Старт',
            price: 'от 700 ₾',
            features: ['Съёмка одной ключевой зоны объекта', 'Базовая сборка 360° тура', 'Прямая ссылка для первичного показа'],
            featured: false,
        },
        {
            title: 'Стандарт',
            price: 'от 1 200 ₾',
            features: ['Несколько зон в одном объекте', 'Код встраивания + брендированное превью + QR', 'Материалы для сайта и объявлений'],
            featured: true,
            tag: 'Популярно',
        },
        {
            title: 'Премиум',
            price: 'от 1 900 ₾',
            features: [
                'Съёмка крупного или сложного бизнес-пространства',
                'Тизер-клип для презентации объекта',
                'Расширенный пакет для брокеров и команды продаж',
            ],
            featured: false,
        },
    ];

    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]" id="pricing">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-white">Тарифные пакеты</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <article
                            key={plan.title}
                            className={`rounded-[12px] border p-6 flex flex-col ${
                                plan.featured ? 'border-[#D4A017] bg-[#17140b]' : 'border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            {plan.tag && (
                                <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.18em] font-bold text-[#D4A017]">
                                    {plan.tag}
                                </span>
                            )}
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
            </div>
        </section>
    );
}
