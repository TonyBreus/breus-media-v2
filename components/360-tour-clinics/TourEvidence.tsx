export function TourEvidence() {
    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Доказательная база по формату 360°</h2>
                    <p className="text-white/70 leading-relaxed">Проверяемые факты без преувеличений.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-5">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-4 text-white">Что говорит практика</h3>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            <li>
                                Визуальное знакомство с клиникой снижает тревожность перед первым визитом
                                <span className="block text-xs text-white/50 mt-1">Medical Patient Experience Research, 2024</span>
                            </li>
                            <li>
                                Иностранные пациенты принимают решение удалённо, опираясь на визуальный контент
                                <span className="block text-xs text-white/50 mt-1">Medical Tourism Consumer Trends, 2024</span>
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 overflow-x-auto">
                        <h3 className="text-lg font-bold mb-4 text-white">С туром и без - разница</h3>
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
                                    <td className="py-2 pr-2">Первый контакт</td>
                                    <td className="py-2 pr-2 text-white/60">Неясность</td>
                                    <td className="py-2">Прозрачность</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 pr-2">Иностранный пациент</td>
                                    <td className="py-2 pr-2 text-white/60">Риск выбора</td>
                                    <td className="py-2">Уверенное решение</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="py-2 pr-2">Тревожность</td>
                                    <td className="py-2 pr-2 text-white/60">Выше</td>
                                    <td className="py-2">Ниже</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-2">Запись на приём</td>
                                    <td className="py-2 pr-2 text-white/60">Откладывается</td>
                                    <td className="py-2">Быстрее</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-lg font-bold mb-4 text-white">Источники</h3>
                        <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                            <li>• Medical Patient Experience Research, 2024</li>
                            <li>• Medical Tourism Consumer Trends, 2024</li>
                            <li>• Практика дистанционного выбора клиник</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
