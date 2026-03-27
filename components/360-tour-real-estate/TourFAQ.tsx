export function TourFAQ() {
    const faqItems = [
        {
            question: 'Сколько занимает производство 360° тура?',
            answer: 'Обычно от нескольких рабочих дней после съёмки. Срок зависит от площади, числа точек и того, нужны ли дополнительные материалы.',
        },
        {
            question: 'Можно ли встроить тур на наш сайт и в лендинг объекта?',
            answer: 'Да. Мы передаём ссылку и код для встраивания, чтобы тур можно было разместить на сайте, лендинге или отдельной странице объекта.',
        },
        {
            question: 'Влияет ли тур на скорость сайта?',
            answer: 'Обычно влияние можно контролировать за счёт отдельного встраивания. Формат подключения подбирается так, чтобы не перегружать страницу без необходимости.',
        },
        {
            question: 'Можно ли обновлять тур?',
            answer: 'Да. Если объект изменился, можно переснять нужные зоны, обновить тур и заново передать актуальную версию материалов.',
        },
        {
            question: 'Что будет с хостингом тура?',
            answer: 'Этот вопрос обсуждается на этапе проекта. Можно выбрать подходящий формат размещения и заранее зафиксировать, как тур будет храниться и публиковаться.',
        },
    ];

    return (
        <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]" id="faq">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold mb-12 text-center">Коммерческий FAQ</h2>
                <div className="space-y-4">
                    {faqItems.map((item) => (
                        <details
                            key={item.question}
                            className="group rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#D4A017]/50 transition-colors"
                        >
                            <summary className="list-none flex justify-between items-center gap-4 cursor-pointer font-bold text-sm uppercase tracking-wider text-white/90 group-open:text-[#D4A017]">
                                {item.question}
                                <span className="text-[#D4A017] group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="text-sm text-white/70 leading-relaxed pt-4 mt-4 border-t border-white/10">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
