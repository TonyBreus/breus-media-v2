export function TourPortfolio() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">Примеры туров для отелей</h2>
                <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                    <div className="h-[420px] md:h-[520px] rounded-[12px] border border-[#2a2a2a] overflow-hidden bg-[#0f0f0f]">
                        <iframe
                            src="https://momento360.com/e/u/placeholder" 
                            title="Hotel Room 360 Example"
                            className="w-full h-full border-0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
