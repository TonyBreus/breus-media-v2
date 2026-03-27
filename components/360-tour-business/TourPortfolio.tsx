export function TourPortfolio() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">Примеры 360° туров для бизнеса</h2>
                <p className="text-sm text-white/65 mb-6 max-w-3xl leading-relaxed">
                    Пример интерактивного тура (демо): так выглядит 360° формат для офисного пространства.
                </p>

                <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                    <div className="min-h-[420px] md:min-h-[520px] rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-center">
                        <p className="text-white/55 text-center px-6 leading-relaxed">
                            Пример визуализации — как выглядит 360° тур для офиса.
                            <br />
                            Реальные кейсы появятся после первых съёмок в Тбилиси.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
