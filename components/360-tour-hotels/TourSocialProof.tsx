export function TourSocialProof() {
    return (
        <section className="py-12 bg-[#0D0D0D] border-y border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <p className="text-white/55 uppercase tracking-[0.2em] text-[11px] text-center mb-8">
                    Формат, который уже используют в hospitality
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] py-4 text-center text-sm text-white/75">
                        Сайты отелей
                    </div>
                    <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] py-4 text-center text-sm text-white/75">
                        Страницы бронирования
                    </div>
                    <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] py-4 text-center text-sm text-white/75">
                        Отделы продаж
                    </div>
                    <div className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] py-4 text-center text-sm text-white/75">
                        Международные гости
                    </div>
                </div>
            </div>
        </section>
    );
}
