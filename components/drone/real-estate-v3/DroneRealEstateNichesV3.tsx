'use client';
import { useState } from 'react';

type NicheCard = {
    id: string;
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

const niches: NicheCard[] = [
    {
        id: 'realtor',
        title: 'Риелтор / агентство',
        pain: 'Листинг висит на MyHome.ge — просмотры есть, сделок нет.',
        solution: 'Аэросъёмка района, вид из окон и короткая нарезка для соцсетей отсеивает нецелевых до звонка.',
        deliverables: 'Видео 30–60 сек + 10+ фото + Reels для Instagram/WhatsApp.',
    },
    {
        id: 'developer',
        title: 'Застройщик / ЖК',
        pain: 'Генплан и рендеры не показывают реальный масштаб и окружение.',
        solution: 'Облёт территории с нескольких высот, FPV по типовому этажу, фото подъездов.',
        deliverables: 'Имиджевый ролик для сайта + пакет фото + вертикальные форматы.',
    },
    {
        id: 'investor',
        title: 'Инвестор / дистанционная сделка',
        pain: 'Покупатель из ЕС или ОАЭ не приедет на первый просмотр.',
        solution: 'Аэровид района и FPV-пролёт внутри — инвестор принимает решение по материалам без поездки.',
        deliverables: 'Горизонтальное видео 2–5 мин для WhatsApp + 20+ фото + 360° по желанию.',
    },
    {
        id: 'land',
        title: 'Участок / земля',
        pain: 'Без визуализации границ и рельефа удалённый покупатель не понимает, что покупает.',
        solution: 'Облёт с привязкой к дорогам, соседним объектам, рельефу и коммуникациям.',
        deliverables: 'Видео + аэропанорама + фото в высоком разрешении.',
    },
    {
        id: 'apart',
        title: 'Апарт-отель / посуточная аренда',
        pain: 'Airbnb и Booking берут объект в выдачу, если в карточке сильный контент.',
        solution: 'Пакет на несколько юнитов за один выезд: аэро снаружи, FPV по интерьерам.',
        deliverables: 'Фото с воздуха + вертикальное видео + нарезка для площадок бронирования.',
    },
];

export function DroneRealEstateNichesV3() {
    const [active, setActive] = useState('realtor');
    const card = niches.find((n) => n.id === active) ?? niches[0];

    return (
        <section id="niches" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Кому подходит</h2>
                <p className="mt-2 text-sm text-white/60">Выберите сценарий — покажем, что получите:</p>

                {/* Tabs */}
                <div role="tablist" className="mt-5 flex flex-wrap gap-2">
                    {niches.map((n) => (
                        <button
                            key={n.id}
                            type="button"
                            role="tab"
                            aria-selected={active === n.id}
                            onClick={() => setActive(n.id)}
                            className={`min-h-[44px] rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                active === n.id
                                    ? 'bg-[#D4A017] text-black'
                                    : 'border border-white/15 bg-white/[0.04] text-white/80 hover:text-white'
                            }`}
                        >
                            {n.title}
                        </button>
                    ))}
                </div>

                {/* Active card */}
                <div role="tabpanel" className="mt-5 rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5 md:p-7">
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">Ситуация</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/80">{card.pain}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">Решение</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/80">{card.solution}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">Что получите</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/80">{card.deliverables}</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a
                            href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Аэросъёмка недвижимости: ${card.title}. Расскажите про условия.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить мой случай в WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
