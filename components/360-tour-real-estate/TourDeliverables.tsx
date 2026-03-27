const deliverables = [
    'Прямая ссылка на тур для отправки клиентам, брокерам и партнёрам',
    'Код для встраивания на сайт или лендинг объекта',
    'Брендированное превью для карточки, презентации или письма',
    'QR-код для офлайн-материалов, стендов и шоурума',
    'Короткий preview-ролик для рекламы, соцсетей или мессенджеров',
    'Панорамные кадры и отдельные extracts из тура для дополнительных материалов',
    'Готовые assets для размещения в листингах и на площадках',
];

export function TourDeliverables() {
    return (
        <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Что получает клиент</h2>
                    <p className="text-white/70 leading-relaxed">
                        На выходе вы получаете не только сам тур, но и набор материалов, которые можно сразу использовать
                        в продажах, презентациях, листингах и на сайте.
                    </p>
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
