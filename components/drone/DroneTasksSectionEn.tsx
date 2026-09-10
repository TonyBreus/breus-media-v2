'use client';

type TaskCard = {
    title: string;
    text: string;
};

const taskCards: TaskCard[] = [
    {
        title: 'The object is great, but scale is lost from the ground',
        text: 'From the air you see the territory, access roads, surroundings, facades and the full layout. The client quickly understands what they are buying, renting or booking.',
    },
    {
        title: 'Clients do not understand the location',
        text: 'Aerial video shows the neighborhood, roads, green zones, nearby buildings and viewpoints. This is crucial for real estate, hotels, restaurants, and tourism.',
    },
    {
        title: 'Need to show progress to investors or management',
        text: 'Regular flyovers document construction stages and provide a clear visual picture without constant site visits.',
    },
    {
        title: 'Regular photos don’t stand out',
        text: 'Listings with aerial photos and short video clips look more prominent in ads, presentations, on the website and in social media.',
    },
    {
        title: 'Need to inspect hard-to-reach areas',
        text: 'Roofs, facades, territories, plots and industrial objects can be inspected without lifting equipment and extra load on the team.',
    },
    {
        title: 'One shoot must cover multiple tasks',
        text: 'From one flight we get materials for the website, ads, Reels, presentations, investor reports and internal documentation.',
    },
];

export const DroneTasksSectionEn = () => (
    <section className="border-y border-[#2a2a2a] bg-[#090909] py-14 md:py-20">
        <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#D4A017]">Scenarios and tasks</p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    Familiar? Here is what drone filming solves
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/72">
                    When an object is hard to explain from the ground, the drone shows the scale, location and details that influence the client’s decision.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {taskCards.map((card) => (
                    <article
                        key={card.title}
                        className="rounded-[12px] border border-[#3a321f] bg-[#12100d] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.28)] md:p-6"
                    >
                        <h3 className="text-[19px] font-semibold leading-tight text-white">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/74 md:text-[15px]">{card.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
