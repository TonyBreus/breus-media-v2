import Link from 'next/link';

export function TourHero() {
    return (
        <section id="tour-hero" className="relative pt-40 md:pt-44 pb-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                    L3 Service
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">360° тур для недвижимости</h1>
                <p className="text-base md:text-xl text-white/75 max-w-3xl leading-relaxed">
                    Это интерактивный онлайн-тур по объекту, в котором клиент может пройтись по квартире, дому или
                    коммерческому помещению с телефона или компьютера ещё до личного визита.
                </p>
                <div className="flex flex-wrap gap-3 mt-10">
                    <Link
                        href="#examples"
                        className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                    >
                        Смотреть примеры
                    </Link>
                    <Link
                        href="#contact"
                        className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                    >
                        Обсудить проект
                    </Link>
                </div>
            </div>
            <a
                href="#tour-what-is"
                aria-label="Прокрутить к следующему разделу"
                className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white/55 hover:text-white/85 transition-colors animate-bounce"
            >
                <span className="text-xl">↓</span>
            </a>
        </section>
    );
}
