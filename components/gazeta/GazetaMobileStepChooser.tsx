import Link from "next/link";

const niches = [
    { label: "Недвижимость", href: "/real-estate-service" },
    { label: "Отели",         href: "/hotels-service" },
    { label: "Рестораны",     href: "/restaurants-service" },
    { label: "Туризм",        href: "/tourism-service" },
    { label: "Клиники",       href: "/clinics-service" },
    { label: "Автобизнес",    href: "/auto-service" },
    { label: "IT",            href: "/gazeta/it" },
];

const formats = [
    { label: "Аэросъёмка",      href: "/drone-service" },
    { label: "Промо-видео",     href: "/promo-video-service" },
    { label: "Reels",           href: "/reels-service" },
    { label: "360°-туры",       href: "/360-tours-service" },
    { label: "AI-визуализация", href: "/ai-visualization-service" },
    { label: "Ваш формат →",    href: "#contact", accent: true },
];

export function GazetaMobileStepChooser() {
    return (
        <section id="niches-nav" className="bg-zinc-950 px-5 pt-10 pb-8 md:hidden">

            {/* Заголовок */}
            <h2 className="mb-7 text-center text-[clamp(1.125rem,5vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] text-[#F5F4F0]">
                Выберите свою нишу —<br /> или начните с формата.
            </h2>

            {/* Две колонки */}
            <div className="grid grid-cols-2 gap-x-5">

                {/* Левая: По нише */}
                <div>
                    <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#C9A84C]">
                        По нише
                    </p>
                    {niches.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group flex items-center justify-between border-b border-white/10 py-3 text-[0.9375rem] font-medium text-[#F5F4F0]/80 transition-colors duration-200 active:text-[#C9A84C]"
                        >
                            <span className="group-active:text-[#C9A84C] transition-colors">
                                {item.label}
                            </span>
                            <span className="text-[#C9A84C] opacity-0 -translate-x-1 group-active:opacity-100 group-active:translate-x-0 transition-all duration-200 text-sm">
                                →
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Правая: По формату */}
                <div>
                    <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#C9A84C]">
                        По формату
                    </p>
                    {formats.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`group flex items-center justify-between border-b border-white/10 py-3 text-[0.9375rem] font-medium transition-colors duration-200 ${
                                item.accent
                                    ? "text-[#C9A84C]/65 active:text-[#C9A84C]"
                                    : "text-[#F5F4F0]/80 active:text-[#C9A84C]"
                            }`}
                        >
                            <span className="group-active:text-[#C9A84C] transition-colors">
                                {item.label}
                            </span>
                            {!item.accent && (
                                <span className="text-[#C9A84C] opacity-0 -translate-x-1 group-active:opacity-100 group-active:translate-x-0 transition-all duration-200 text-sm">
                                    →
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Подвал */}
            <p className="mt-7 text-center text-[0.8125rem] leading-[1.65] text-[#7A7977]">
                Другая отрасль или формат —{" "}
                <Link
                    href="#contact"
                    className="text-[#C9A84C]/70 underline underline-offset-2 transition-colors active:text-[#C9A84C]"
                >
                    напишите
                </Link>
                , найдём решение.
            </p>

        </section>
    );
}
