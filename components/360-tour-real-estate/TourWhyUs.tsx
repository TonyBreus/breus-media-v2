const reasons = [
    'Объясняем сложное простым и спокойным языком',
    'Снимаем аккуратно и без лишней суеты на объекте',
    'Фокусируемся на понятной подаче недвижимости, а не на эффекте ради эффекта',
    'Передаём материалы в виде, готовом к использованию',
    'Подходим и для простых частных задач, и для более B2B-сценариев',
    'Помогаем встроить тур в сайт, презентацию или переписку с клиентом',
    'Думаем не только о картинке, но и о том, как тур будет работать в реальной продаже',
    'При необходимости дополняем тур сопутствующими digital-материалами',
];

export function TourWhyUs() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
                    <p className="text-white/70 leading-relaxed">
                        Мы стараемся делать этот формат понятным, рабочим и спокойным в производстве, чтобы тур помогал
                        объекту, а не создавал лишнюю сложность вокруг проекта.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {reasons.map((reason, idx) => (
                        <article key={reason} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                            <p className="text-[11px] tracking-widest uppercase text-[#D4A017] font-bold mb-2">
                                Причина {idx + 1}
                            </p>
                            <p className="text-sm text-white/80 leading-relaxed">{reason}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
