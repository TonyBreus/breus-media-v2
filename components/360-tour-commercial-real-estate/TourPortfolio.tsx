export function TourPortfolio() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">Примеры 360° туров коммерческих объектов</h2>
                <p className="text-sm text-white/65 mb-6 max-w-3xl">
                    Большой блок под демонстрацию: офис, торговое помещение и входная группа в одном интерактивном просмотре.
                </p>
                <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                    <div className="min-h-[420px] md:min-h-[520px] rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-center">
                        <p className="text-white/55 text-center px-6 leading-relaxed">
                            Плейсхолдер встроенного 360° тура коммерческого объекта.
                            <br />
                            Здесь подключается интерактивный пример с переходами по зонам.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
