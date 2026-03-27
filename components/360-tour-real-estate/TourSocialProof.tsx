export function TourSocialProof() {
    const trustPoints = [
        'Жилая недвижимость',
        'Коммерческие помещения',
        'Удалённые клиенты',
        'Агентства и девелоперы',
    ];

    return (
        <section className="py-12 bg-[#0D0D0D] border-y border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <p className="text-white/55 uppercase tracking-[0.2em] text-[11px] text-center mb-8">
                    Формат, который удобно использовать и в частной, и в более B2B-подаче объекта
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {trustPoints.map((point) => (
                        <div
                            key={point}
                            className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] py-4 px-3 text-center text-sm text-white/75"
                        >
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
