const experienceSteps = [
    {
        title: '1) Гость получает ссылку',
        text: 'Ссылку можно отправить в мессенджере, email-рассылке или разместить на странице бронирования.',
    },
    {
        title: '2) Гость изучает отель онлайн',
        text: 'Он проходит по номерам, лобби и ключевым зонам ещё до контакта с вашей командой.',
    },
    {
        title: '3) Быстрее принимает решение',
        text: 'Понятная визуальная картина снижает сомнения и повышает уверенность перед бронированием.',
    },
];

export function TourExperience() {
    return (
        <section className="py-20 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <h2 className="text-3xl font-bold mb-4">Как это выглядит для гостя</h2>
                    <p className="text-white/70 leading-relaxed">
                        Путь пользователя простой и понятный даже для тех, кто впервые видит такой формат.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
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
