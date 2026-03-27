export function TourPain() {
    const painPoints = [
        {
            title: 'Фото не показывают логику номера',
            text: 'Гость видит отдельные ракурсы, но не понимает, как пространство устроено целиком.',
        },
        {
            title: 'Сложно понять пространство онлайн',
            text: 'Без интерактивного просмотра остаются вопросы по размеру, удобству и расположению зон.',
        },
        {
            title: 'Решение о бронировании откладывается',
            text: 'Если картинка не даёт ясности, гость сомневается дольше и уходит сравнивать другие варианты.',
        },
        {
            title: 'Иностранные гости особенно зависят от визуала',
            text: 'Для удалённых клиентов качественная онлайн-презентация часто является главным фактором выбора.',
        },
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Почему фото для отеля уже недостаточно</h2>
                    <p className="text-white/70 leading-relaxed">
                        Бронирование отеля — это эмоциональный и визуальный выбор. Гостю важно почувствовать пространство до оплаты.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {painPoints.map((item) => (
                        <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
