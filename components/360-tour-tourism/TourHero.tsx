import Link from 'next/link';

export function TourHero() {
    return (
        <section id="tour-hero" className="relative pt-40 md:pt-44 pb-28 min-h-[calc(100vh-80px)] bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6">
                <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                    Визуальный продакшн · Тбилиси
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">360° тур для туристических локаций</h1>
                <p className="text-base md:text-xl text-white/75 max-w-3xl leading-relaxed">
                    Турист видит вашу локацию, понимает масштаб и атмосферу — до того как купил тур или приехал. Это
                    помогает привлекать иностранных туристов которые планируют поездку в Грузию онлайн.
                </p>
                <p className="text-sm text-white/65 max-w-3xl leading-relaxed mt-4">
                    Особенно востребовано для event-площадок и свадебных локаций — организаторы и пары выбирают место
                    дистанционно без возможности приехать на осмотр.
                </p>
                <p className="text-xs text-white/50 max-w-3xl leading-relaxed mt-3">
                    Работаем с локациями в Тбилиси и Грузии. Выезд за пределы Тбилиси — по договорённости.
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
                className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 text-white/55 hover:text-white/85 transition-colors animate-bounce"
            >
                <span className="text-xl">↓</span>
            </a>
        </section>
    );
}
