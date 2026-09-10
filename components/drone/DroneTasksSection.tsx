'use client';

type TaskCard = {
    title: string;
    text: string;
};

const taskCards: TaskCard[] = [
    {
        title: 'Объект сильный, но с земли не видно масштаба',
        text: 'С высоты видно территорию, подъезды, окружение, фасады и расположение объекта. Клиент быстрее понимает, что именно он покупает, арендует или бронирует.',
    },
    {
        title: 'Клиент не понимает локацию и окружение',
        text: 'Аэровидео показывает район, дороги, зелёные зоны, соседние здания и видовые точки. Это особенно важно для недвижимости, отелей, ресторанов, туризма и загородных объектов.',
    },
    {
        title: 'Нужно показать стройку инвестору или руководителю',
        text: 'Регулярный облёт фиксирует этапы работ и даёт понятную визуальную картину без постоянных выездов на объект.',
    },
    {
        title: 'Обычные фото не выделяют объект среди похожих',
        text: 'Карточка с аэрофото и коротким видео выглядит заметнее в рекламе, презентации, на сайте и в соцсетях.',
    },
    {
        title: 'Нужно показать труднодоступные зоны',
        text: 'Крыши, фасады, территории, участки и промышленные объекты можно осмотреть без подъёмной техники и лишней нагрузки на команду.',
    },
    {
        title: 'Один выезд должен закрыть сразу несколько задач',
        text: 'Из одной съёмки можно получить материалы для сайта, рекламы, Reels, презентации, отчёта для инвестора или внутренней документации.',
    },
];

export const DroneTasksSection = () => (
    <section className="border-y border-[#2a2a2a] bg-[#090909] py-14 md:py-20">
        <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#D4A017]">Сценарии и задачи</p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                    Знакомо? Вот какие задачи закрывает аэросъёмка
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/72">
                    Когда объект сложно объяснить с земли, дрон показывает масштаб, локацию и детали, которые влияют на
                    решение клиента.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {taskCards.map((card) => (
                    <article
                        key={card.title}
                        className="rounded-[12px] border border-[#3a321f] bg-[#12100d] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.28)] md:p-6"
                    >
                        <h3 className="text-[19px] font-semibold leading-tight text-white">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/74 md:text-[15px]">{card.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
