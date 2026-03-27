export function TourEvidence() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Структура блока с подтверждением рынка</h2>
                    <p className="text-white/70 leading-relaxed">
                        Подготовлены безопасные плейсхолдеры под реальные данные, сравнения и источники без выдуманных цифр.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-5">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">1) Плейсхолдер: график / метрика</h3>
                        <div className="h-48 rounded-[10px] border border-dashed border-white/25 bg-[#101010] flex items-center justify-center">
                            <p className="text-xs uppercase tracking-wider text-white/45">динамика откликов / просмотров</p>
                        </div>
                        <p className="text-xs text-white/50 mt-3">Место для графика с метрикой и периодом сравнения.</p>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">2) Плейсхолдер: сравнение / таблица</h3>
                        <div className="h-48 rounded-[10px] border border-dashed border-white/25 bg-[#101010] p-3">
                            <div className="grid grid-cols-3 gap-2 h-full text-[11px] text-white/45">
                                <div className="bg-white/5 rounded p-2">Формат</div>
                                <div className="bg-white/5 rounded p-2">Вовлечённость</div>
                                <div className="bg-white/5 rounded p-2">Понятность</div>
                                <div className="bg-white/5 rounded p-2">Фото</div>
                                <div className="bg-white/5 rounded p-2">...</div>
                                <div className="bg-white/5 rounded p-2">...</div>
                                <div className="bg-white/5 rounded p-2">360°</div>
                                <div className="bg-white/5 rounded p-2">...</div>
                                <div className="bg-white/5 rounded p-2">...</div>
                            </div>
                        </div>
                        <p className="text-xs text-white/50 mt-3">Место для сравнения форматов: фото / видео / 360° по единым критериям.</p>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">3) Плейсхолдер: источники / ссылки</h3>
                        <ul className="space-y-2 text-sm text-white/65 leading-relaxed">
                            <li>• Источник 1 (отчёт по коммерческой недвижимости)</li>
                            <li>• Источник 2 (исследование поведения арендаторов)</li>
                            <li>• Источник 3 (аналитика онлайн-каналов)</li>
                            <li>• Источник 4 (внутренние данные кейсов)</li>
                        </ul>
                        <p className="text-xs text-white/50 mt-3">После добавления данных здесь будут активные ссылки и дата обновления.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
