export function TourPortfolio() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">Примеры туров для отелей</h2>
                <p className="text-sm text-white/65 mb-6 max-w-3xl">
                    Здесь размещаются примеры: тур по номеру, walkthrough лобби и общий интерактивный обзор отеля.
                </p>
                <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                    <div className="min-h-[420px] md:min-h-[520px] rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-center">
                        <p className="text-white/55 text-center px-6 leading-relaxed">
                            Плейсхолдер встроенного тура отеля.
                            <br />
                            Сюда подключается пример номера и проход по лобби.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
