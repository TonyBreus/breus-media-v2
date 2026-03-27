import Link from 'next/link';

const relatedServices = [
    {
        title: '360° тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для объектов недвижимости и удалённых показов.',
    },
    {
        title: '360° тур для бизнеса',
        href: '/360-tour-business',
        text: 'Универсальный формат презентации пространства для коммерческих ниш.',
    },
    {
        title: '360° тур для клиник',
        href: '/360-tour-clinics',
        text: 'Сценарии для сервисного бизнеса с высоким порогом доверия.',
    },
    {
        title: '360° тур для ресторанов',
        href: '/360-tour-restaurants',
        text: 'Показ атмосферы и интерьера для удалённого выбора заведения.',
    },
];

export function TourRelatedServices() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Часто заказывают вместе</h2>
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
