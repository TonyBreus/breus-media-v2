import Link from 'next/link';

const relatedServices = [
    {
        title: 'Промо-видео для клиник',
        href: '/promo-video-clinics',
        text: 'Имиджевый ролик для сайта и рекламных кампаний.',
    },
    {
        title: 'Reels для клиник',
        href: '/reels-clinics',
        text: 'Короткие видео для Instagram и TikTok.',
    },
    {
        title: '360° тур для отелей',
        href: '/360-tour-hotels',
        text: 'Для медтуризма и комплексных сервисных предложений.',
    },
    {
        title: '360° тур для ресторанов',
        href: '/360-tour-restaurants',
        text: 'Смежный формат для сервисных бизнесов с офлайн-пространством.',
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
