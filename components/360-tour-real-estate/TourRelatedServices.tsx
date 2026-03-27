import Link from 'next/link';

const relatedServices = [
    {
        title: 'FPV / Дрон-съёмка недвижимости',
        href: '/drone-service',
        text: 'Динамичные пролёты для масштабной презентации локации и окружения.',
    },
    {
        title: 'Промо-видео',
        href: '/promo-video-service',
        text: 'Короткие и длинные видеоформаты для рекламы и отдела продаж.',
    },
    {
        title: 'AI staging',
        href: '/ai-visualization-service',
        text: 'Визуальные AI-материалы для презентации потенциала объекта.',
    },
    {
        title: '360° туры (L2)',
        href: '/360-tours-service',
        text: 'Сервисная страница направления с дополнительными пакетами и сценариями.',
    },
];

export function TourRelatedServices() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Связанные услуги</h2>
                    <p className="text-white/70 leading-relaxed">
                        Если вам нужен более широкий пакет продвижения объекта, эти направления чаще всего заказывают
                        вместе с 360° туром.
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
