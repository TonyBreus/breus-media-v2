const useCases = [
    'Приёмная',
    'Кабинеты врачей',
    'Стоматологический кабинет',
    'Диагностическая зона',
    'Зона ожидания',
    'Google Maps',
    'Сайт клиники',
    'Медицинский туризм',
];

export function TourUseCases() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Где применяется в Тбилиси</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {useCases.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-[#2a2a2a] bg-[#141414] px-4 py-2 text-sm text-white/85"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
