import Link from 'next/link';

const relatedServices = [
    {
        title: 'Дрон-съёмка для отелей',
        href: '/drone-hotel',
        text: 'Аэровизуал для территории, расположения и контекста локации.',
    },
    {
        title: 'Промо-видео для отелей',
        href: '/promo-video-hotel',
        text: 'Презентационные ролики для сайта, рекламных кампаний и прямых продаж.',
    },
    {
        title: 'Reels для отелей',
        href: '/reels-hotel',
        text: 'Короткий вертикальный контент для соцсетей и охватных кампаний.',
    },
];

export function TourRelatedServices() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Связанные услуги</h2>
                    <p className="text-white/70 leading-relaxed">
                        Отели часто комбинируют 360° тур с дополнительными форматами контента для более сильного результата.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
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
