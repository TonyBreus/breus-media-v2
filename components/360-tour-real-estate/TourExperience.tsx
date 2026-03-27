const experienceSteps = [
    {
        title: '1) Клиент получает ссылку',
        text: 'Ссылку можно отправить в WhatsApp, Telegram, email или добавить в карточку объекта на сайте.',
    },
    {
        title: '2) Изучает объект онлайн',
        text: 'Он открывает тур на телефоне или компьютере, вращает обзор и переходит между точками так, как ему удобно.',
    },
    {
        title: '3) Понимает планировку и пространство',
        text: 'Человек лучше видит логику комнат, проходов и зон, а не только отдельные фотографии.',
    },
    {
        title: '4) Решает, нужен ли личный визит',
        text: 'После такого просмотра проще понять, стоит ли ехать на объект, задавать уточняющие вопросы или переходить к следующему шагу.',
    },
];

export function TourExperience() {
    return (
        <section className="py-20 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Как это выглядит для клиента</h2>
                    <p className="text-white/70 leading-relaxed">
                        Путь пользователя простой и понятный даже для тех, кто впервые сталкивается с 360° форматом.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {experienceSteps.map((step) => (
                        <article key={step.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
