const deliverables = [
    'Панорамная съёмка приёмной, кабинетов и ключевых зон',
    'Сборка интерактивного маршрута по клинике',
    'Готовая ссылка для сайта и мессенджеров',
    'iframe-код для встройки на сайт клиники',
    'Оптимизация под мобильные устройства',
    'Возможность добавить логотип и контакты',
    'Хостинг включён в стоимость пакета',
];

export function TourDeliverables() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что вы получаете</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {deliverables.map((item) => (
                        <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                            <p className="text-sm md:text-base text-white/85 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
