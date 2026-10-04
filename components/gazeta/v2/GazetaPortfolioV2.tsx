import Image from "next/image";
import { PORTFOLIO } from "./gazetaV2Data";

export function GazetaPortfolioV2() {
    return (
        <section id="portfolio" className="bg-black py-10 md:py-14 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-[22px] sm:text-3xl font-black uppercase text-white">Наши съёмки</h2>
                <p className="mt-1 text-sm text-white/60">Реальные объекты в Грузии. Листайте →</p>
            </div>
            <div className="mt-5 flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 scroll-pl-4 [scrollbar-width:none] md:mx-auto md:max-w-7xl md:grid md:grid-cols-4 md:overflow-visible">
                {PORTFOLIO.map((item) => (
                    <figure key={item.image} className="relative shrink-0 w-[72vw] sm:w-[45vw] md:w-auto aspect-[4/5] snap-start overflow-hidden rounded-2xl bg-[#111]">
                        <Image src={item.image} alt={`${item.title}: ${item.tag}`} fill sizes="(max-width: 768px) 72vw, 25vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD23F]">{item.tag}</span>
                            <p className="text-sm font-bold text-white">{item.title}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
