export function TourEvidence() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Блок для будущей доказательной базы</h2>
                    <p className="text-white/70 leading-relaxed">
                        Здесь намеренно оставлена структура без выдуманных цифр. Этот раздел предназначен для будущего
                        заполнения проверяемыми рыночными данными, сравнением форматов и ссылками на источники.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-5">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">1) Placeholder: Chart</h3>
                        <div className="h-48 rounded-[10px] border border-dashed border-white/25 bg-[#101010] flex items-center justify-center">
                            <p className="text-xs uppercase tracking-wider text-white/45">market validation chart</p>
                        </div>
                        <p className="text-xs text-white/50 mt-3">Место для графика с реальной метрикой, подписью и датой обновления.</p>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">2) Placeholder: Comparison Table</h3>
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
                        <p className="text-xs text-white/50 mt-3">Место для сравнения фото, видео и 360° тура по единым и цитируемым критериям.</p>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-3 text-white">3) Placeholder: Sources / References</h3>
                        <ul className="space-y-2 text-sm text-white/65 leading-relaxed">
                            <li>• Источник 1: исследование рынка</li>
                            <li>• Источник 2: аналитика листинг-платформы</li>
                            <li>• Источник 3: отраслевой отчёт или кейс</li>
                            <li>• Источник 4: внутренние подтверждённые данные</li>
                        </ul>
                        <p className="text-xs text-white/50 mt-3">Здесь будут активные ссылки, даты публикации и ссылки на цитируемые материалы.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
