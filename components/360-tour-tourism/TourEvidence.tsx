export function TourEvidence() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Доказательная база</h2>
                    <p className="text-white/70 leading-relaxed">Проверяемые факты без преувеличений.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-5">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-4 text-white">Что говорит статистика</h3>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            <li>
                                Туристы изучают направления онлайн до бронирования — визуальный контент является
                                ключевым фактором выбора
                                <span className="block text-xs text-white/50 mt-1">TripAdvisor Travel Research, 2024</span>
                            </li>
                            <li>
                                Грузия входит в топ растущих туристических направлений Европы — иностранный трафик
                                растёт ежегодно
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 overflow-x-auto">
                        <h3 className="text-lg font-bold mb-4 text-white">С туром и без — разница</h3>
                        <table className="w-full min-w-[320px] text-sm text-white/80">
                            <thead>
                                <tr className="border-b border-white/10 text-white/60 text-xs uppercase tracking-wider">
                                    <th className="text-left py-2 pr-2">Сценарий</th>
                                    <th className="text-left py-2 pr-2">Без тура</th>
                                    <th className="text-left py-2">С туром</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 pr-2">Иностранный турист</td>
                                    <td className="py-2 pr-2 text-white/60">Выбирает по фото</td>
                                    <td className="py-2">Исследует онлайн</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 pr-2">Event-площадка</td>
                                    <td className="py-2 pr-2 text-white/60">Нужен визит</td>
                                    <td className="py-2">Выбор дистанционно</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 pr-2">Конкуренция онлайн</td>
                                    <td className="py-2 pr-2 text-white/60">Обычные фото</td>
                                    <td className="py-2">Интерактивный опыт</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-2">Решение о поездке</td>
                                    <td className="py-2 pr-2 text-white/60">Неуверенность</td>
                                    <td className="py-2">Полное понимание</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-4 text-white">Источники</h3>
                        <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                            <li>• TripAdvisor Travel Research, 2024</li>
                            <li>• Georgia Tourism Statistics, 2024</li>
                            <li>• Практика дистанционного выбора туристических локаций</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
