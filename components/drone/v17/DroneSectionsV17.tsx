import Image from "next/image";

const WA = "https://wa.me/995501103183?text=";

const TRUST = [
    { value: "DJI 4K / FPV", label: "дроны снаружи и внутри" },
    { value: "24–48ч", label: "сдача материалов" },
    { value: "GCAA", label: "полёты по правилам" },
    { value: "B2B", label: "официальный договор" },
];

export function DroneTrustStripV17() {
    return (
        <section className="border-y border-white/10 bg-[#0A0A0A] py-6">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-4 md:grid-cols-4 md:divide-x md:divide-white/10">
                {TRUST.map((s) => (
                    <div key={s.value} className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-black text-[#D4A017]">{s.value}</span>
                        <span className="text-xs uppercase tracking-wider text-white/60">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

const SHOTS = [
    { image: "/media/drone-service/real-estate-1.png", title: "Жилой комплекс", tag: "Недвижимость" },
    { image: "/media/drone-service/hotels-resorts-5.png", title: "Курортный отель", tag: "Отели" },
    { image: "/media/drone-service/restaurants-3.png", title: "Ресторан", tag: "FPV внутри" },
    { image: "/media/drone-service/construction-monitoring-1.png", title: "Стройплощадка", tag: "Мониторинг" },
    { image: "/media/drone-service/agro-wine-1.png", title: "Винодельня, Кахетия", tag: "Туризм" },
    { image: "/media/drone-service/auto-showroom-1.png", title: "Автосалон", tag: "FPV · Бренд" },
    { image: "/media/drone-service/roof-inspection-1.png", title: "Кровля", tag: "Инспекция" },
    { image: "/media/drone-service/events-1.png", title: "Мероприятие", tag: "События" },
];

export function DronePortfolioV17() {
    return (
        <section id="portfolio" className="scroll-mt-24 bg-black py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="text-[22px] sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Наши полёты</h2>
                <p className="mt-1 text-sm text-white/60">Объекты в Тбилиси и по Грузии. Листайте →</p>
            </div>
            <div className="mt-5 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-4 px-4 pb-2 [scrollbar-width:none] md:mx-auto md:grid md:max-w-7xl md:grid-cols-4 md:overflow-visible md:px-6">
                {SHOTS.map((s) => (
                    <figure key={s.image} className="relative aspect-[4/5] w-[72vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#111] sm:w-[45vw] md:w-auto">
                        <Image src={s.image} alt={`Аэросъёмка: ${s.title}`} fill sizes="(max-width: 768px) 72vw, 25vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">{s.tag}</span>
                            <p className="text-sm font-bold text-white">{s.title}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

// Contents taken 1:1 from DronePricingV14 (no invented package terms)
export const PLANS_V17 = [
    { title: "Полёт снаружи", price: 200, desc: "Аэросъёмка дроном с высоты", items: ["Видео в 4K + фото в высоком разрешении", "10+ фотографий с разных ракурсов", "Около 1,5 часов на объекте", "Передача файлов от 24 часов"], featured: false },
    { title: "Полёт + монтаж", price: 350, desc: "Облёт с готовым роликом", items: ["Продуманный маршрут облёта", "Смонтированное видео для сайта и соцсетей", "15+ обработанных фотографий", "Готовый материал от 48 часов"], featured: true },
    { title: "С готовым результатом", price: 700, desc: "Снаружи + FPV внутри + монтаж", items: ["До 2 минут смонтированного видео", "20+ обработанных фотографий", "Видео для Google Maps", "Готовый материал от 48 часов"], featured: false },
];

export function DronePricingV17() {
    return (
        <section id="pricing" className="scroll-mt-24 bg-[#080808] py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="text-[22px] sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Тарифы</h2>
                <p className="mt-1 text-sm text-white/60">Нужен FPV-пролёт внутри помещений? Добавим к любому тарифу, цену назовём в WhatsApp.</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {PLANS_V17.map((p) => (
                        <article key={p.title} className={`relative flex flex-col rounded-2xl p-5 ${p.featured ? "border-2 border-[#D4A017] bg-[#14120a]" : "border border-white/10 bg-[#111]"}`}>
                            {p.featured && (
                                <span className="absolute -top-3 left-5 rounded-full bg-[#D4A017] px-2.5 py-0.5 text-[11px] font-bold uppercase text-black">Популярный</span>
                            )}
                            <h3 className="text-lg font-black uppercase text-white">{p.title}</h3>
                            <p className="text-2xl font-black text-[#D4A017]">от {p.price} ₾</p>
                            <p className="text-sm text-white/60">{p.desc}</p>
                            <ul className="mt-3 space-y-1.5 text-sm text-white/85">
                                {p.items.map((it) => <li key={it}>✓ {it}</li>)}
                            </ul>
                            <a
                                href={WA + encodeURIComponent(`Здравствуйте! Интересует тариф «${p.title}» (${p.price} ₾).`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Заказать тариф ${p.title}`}
                                className={`mt-5 flex min-h-[44px] items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wider ${p.featured ? "bg-[#D4A017] text-black" : "border border-white/15 text-white hover:bg-white/5"}`}
                            >
                                Заказать
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const SAFETY = [
    { title: "Правила GCAA", text: "Летаем по правилам гражданской авиации Грузии." },
    { title: "Безопасность на объекте", text: "Перед полётом осматриваем площадку и маршрут." },
    { title: "Погода", text: "При сильном ветре или дожде согласуем новую дату." },
    { title: "Дроны DJI", text: "Съёмка снаружи в 4K, кадры для печати и рекламы." },
    { title: "FPV-дроны", text: "Пролёты внутри залов, номеров и цехов." },
    { title: "Форматы", text: "Видео 4K, вертикальные версии для Reels." },
];

export function DroneSafetyV17() {
    return (
        <section className="bg-black py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="text-[22px] sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Безопасность и техника</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {SAFETY.map((s) => (
                        <li key={s.title} className="rounded-2xl border border-white/10 bg-[#111] p-4">
                            <h3 className="text-base font-bold text-white">{s.title}</h3>
                            <p className="mt-1 text-sm leading-snug text-white/65">{s.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
