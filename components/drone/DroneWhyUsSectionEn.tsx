'use client';

type WhyUsCard = {
    title: string;
    text: string;
};

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Task first, route second',
        text: 'Before flying, we clarify what needs to be shown: scale, location, progress, view, facade, roof or atmosphere. The route is built for the task, not just for a pretty flight.',
    },
    {
        title: 'Filming for your channels',
        text: 'Materials are prepared for the website, listings, Instagram, Reels, presentations or reports. This dictates the angles, duration and format of the shots.',
    },
    {
        title: 'Combining air, ground and FPV',
        text: 'For smooth overviews we use standard drones, for dynamic fly-throughs — FPV, for details — ground cameras. This makes the object understandable, not just “filmed from above”.',
    },
    {
        title: 'Working across Georgia',
        text: 'We shoot in Tbilisi and travel across Georgia. We check the location, time, weather and flight restrictions before the shoot.',
    },
    {
        title: 'Following flight rules',
        text: 'Before departure, we check the area for restrictions and flight conditions. If the zone requires additional approval, we discuss it in advance.',
    },
    {
        title: 'Ready-to-use materials',
        text: 'Files are prepared for real tasks: website, social media, presentation, report or sending to a client. Not just an archive of raw files, but a clear set of materials.',
    },
];

export const DroneWhyUsSectionEn = () => (
    <section className="bg-[#0d0d0d] py-14 md:py-20">
        <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#D4A017]/90">Breus Media Approach</p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">Why work with us</h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                    We don't just fly drones. First we understand where the material will work: in sales, ads, reports, presentations or on your website.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {whyUsCards.map((card) => (
                    <article key={card.title} className="rounded-[12px] border border-white/12 bg-[#111111] p-5 md:p-6">
                        <h3 className="text-[18px] font-semibold leading-tight text-white">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px]">{card.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
