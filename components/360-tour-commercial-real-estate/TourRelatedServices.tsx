import Link from 'next/link';

const relatedServices = [
    {
        title: 'Аэросъёмка объекта',
        href: '/drone-service',
        text: 'Показ окружения, подъездов и расположения объекта для полной презентации.',
    },
    {
        title: 'Промо-видео для коммерческой недвижимости',
        href: '/promo-video-service',
        text: 'Видео для сайта, листингов и презентации объекта арендаторам и инвесторам.',
    },
    {
        title: 'Рилс для бизнес-объектов',
        href: '/reels-service',
        text: 'Короткий вертикальный формат для охватных кампаний и социальных сетей.',
    },
    {
        title: 'AI-визуализация и виртуальная меблировка',
        href: '/ai-visualization-service',
        text: 'Дополнительная визуальная подача для маркетинга и презентационных материалов.',
    },
];

export function TourRelatedServices() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Связанные услуги</h2>
                    <p className="text-white/70 leading-relaxed">
                        360° тур работает ещё сильнее в связке с видео, аэросъёмкой и дополнительной визуальной подачей.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {relatedServices.map((service) => (
                        <Link
                            key={service.href}
                            href={service.href}
                            className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#D4A017]/50 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{service.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
