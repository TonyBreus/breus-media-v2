import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const painCards = [
    {
        title: 'Объект не считывается с первого взгляда',
        text: 'Если человек не понимает, что за объект перед ним и в чём его ценность, он уходит дальше.',
        resolution:
            'Решение: сильный первый визуал, дрон и короткое видео вместо сухих фото.',
    },
    {
        title: 'Не видно окружение и масштаб',
        text: 'По фото внутри квартиры сложно понять район, фасад, двор, подъезд и общее ощущение от объекта.',
        resolution:
            'Решение: аэросъёмка и общий пролёт дают контекст, который обычные фото не показывают.',
    },
    {
        title: 'Покупатель не доверяет объявлению',
        text: 'Когда визуал выглядит случайным, объект кажется менее серьёзным и хуже подготовленным.',
        resolution:
            'Решение: единый аккуратный пакет материалов для сайта, рекламы и листинга.',
    },
    {
        title: 'Слишком много подрядчиков и хаоса',
        text: 'Фото отдельно, видео отдельно, рилсы отдельно — всё это тормозит запуск и размывает результат.',
        resolution:
            'Решение: один продакшн-процесс: дрон, видео, 360, рилсы и упаковка под задачу.',
    },
];

export const RealEstatePainProofLite = () => {
    return (
        <DebugWrapper id={10750} label="Real Estate Pain Proof Lite Section">
            <section className="py-20 bg-[#0D0D0D] border-y border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mb-8">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4A017] font-bold mb-3">
                            Боль и решение
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Почему объект теряет внимание ещё до звонка
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Покупатель сравнивает объект за секунды. Если визуал не объясняет ценность сразу,
                            объявление проигрывает ещё до первого контакта.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {painCards.map((card, idx) => (
                            <DebugWrapper key={card.title} id={10760 + idx} label={`Pain Card: ${card.title}`}>
                                <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                    <h3 className="text-sm md:text-base font-bold text-white mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{card.text}</p>
                                    <p className="text-xs md:text-sm text-[#D4A017] leading-relaxed font-semibold">
                                        {card.resolution}
                                    </p>
                                </article>
                            </DebugWrapper>
                        ))}
                    </div>

                    <p className="mt-6 text-xs text-white/55 leading-relaxed">
                        Подходит для: риэлторов, застройщиков, агентств недвижимости, собственников объектов и команд
                        продаж.
                    </p>
                </div>
            </section>
        </DebugWrapper>
    );
};
