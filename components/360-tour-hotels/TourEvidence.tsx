export function TourEvidence() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Демонстрация 360° тура</h2>
                    <p className="text-white/70 leading-relaxed">
                        Пример интеграции виртуального тура. Гость может перемещаться между зонами, изучать детали и чувствовать масштаб.
                    </p>
                </div>

                <div className="w-full h-[60vh] lg:h-[75vh] rounded-[12px] border border-[#2a2a2a] overflow-hidden bg-[#101010]">
                    <iframe
                        src="https://momento360.com/e/u/placeholder" 
                        title="360 Tour Interactive Preview"
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>
            </div>
        </section>
    );
}
