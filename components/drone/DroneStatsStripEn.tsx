'use client';

const stats = [
    {
        value: '68%',
        label: 'faster property sales with aerial video',
        source: 'MLS / NAR',
    },
    {
        value: '94%',
        label: 'more views for listings with aerial photos',
        source: 'HomeJab, 2025',
    },
    {
        value: '403%',
        label: 'more inquiries with video vs photos only',
        source: 'Inman / MLS',
    },
    {
        value: '73%',
        label: 'of sellers choose an agent who uses video',
        source: 'NAR',
    },
];

export const DroneStatsStripEn = () => (
    <section className="border-y border-[#2a2a2a] bg-[#0a0a0a] py-8 md:py-14">
        <div className="container mx-auto px-6">
            <p className="mb-5 text-center text-[11px] uppercase tracking-[3px] text-[#D4A017] md:mb-8">
                Aerial filming in numbers
            </p>
            <div className="grid grid-cols-2 gap-px bg-[#2a2a2a] md:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.value} className="bg-[#0a0a0a] px-6 py-5 text-center md:py-8">
                        <div className="mb-3 text-[40px] font-bold leading-none text-[#D4A017] md:text-[52px]">
                            {stat.value}
                        </div>
                        <p className="mb-2 text-[13px] leading-snug text-white/70">{stat.label}</p>
                        <p className="text-[11px] tracking-wide text-white/35">{stat.source}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
