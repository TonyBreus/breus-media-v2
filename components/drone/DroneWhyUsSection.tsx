'use client';

type WhyUsCard = {
    title: string;
    text: string;
};

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Сначала задача, потом маршрут',
        text: 'Перед съёмкой уточняем, что нужно показать: масштаб, локацию, ход работ, вид, фасад, крышу или атмосферу места. Маршрут строится под задачу, а не ради красивого пролёта.',
    },
    {
        title: 'Снимаем под каналы использования',
        text: 'Материалы можно готовить под сайт, объявление, Instagram, Reels, презентацию, отчёт или коммерческое предложение. Это влияет на ракурсы, длительность и формат кадров.',
    },
    {
        title: 'Комбинируем воздух, землю и FPV',
        text: 'Для спокойных обзорных кадров используем плавную аэросъёмку, для динамики — FPV, для деталей — земные планы. Так объект выглядит понятнее, а не просто “снятым сверху”.',
    },
    {
        title: 'Работаем по Тбилиси и Грузии',
        text: 'Снимаем в Тбилиси и выезжаем по Грузии под объект. Локацию, время, погоду и ограничения по зоне проверяем до съёмки.',
    },
    {
        title: 'Учитываем правила полётов',
        text: 'Перед выездом проверяем район, ограничения и условия полёта. Если зона требует дополнительного согласования, обсуждаем это заранее.',
    },
    {
        title: 'Отдаём материалы, которые можно сразу использовать',
        text: 'Файлы готовятся под реальные задачи: сайт, соцсети, презентация, отчёт или отправка клиенту. Не просто архив кадров, а понятный набор материалов.',
    },
];

export const DroneWhyUsSection = () => (
    <section className="bg-[#0d0d0d] py-14 md:py-20">
        <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#D4A017]/90">Подход Breus Media</p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">Почему снимают с нами</h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                    Мы не просто поднимаем дрон. Сначала понимаем, где материал будет работать: в продаже, рекламе,
                    отчёте, презентации или на сайте.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {whyUsCards.map((card) => (
                    <article key={card.title} className="rounded-[12px] border border-white/12 bg-[#111111] p-5 md:p-6">
                        <h3 className="text-[18px] font-semibold leading-tight text-white">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px]">{card.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
