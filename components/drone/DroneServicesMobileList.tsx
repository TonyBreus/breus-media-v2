import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { droneServiceItems } from '@/components/drone/droneServicesData';

export function DroneServicesMobileList() {
    const items = [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));
    const hasOddCount = items.length % 2 === 1;

    return (
        <section id="directions" className="block md:hidden scroll-mt-20 border-t border-[#C9A84C]/10 bg-[#0d0d0d] px-4 py-4">
            <h2 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">Направления съёмки</h2>

            <div className="grid grid-cols-2 gap-1.5">
                {items.map((item, index) => (
                    <Link
                        href={item.slug ? `#service-${item.slug}` : '#contact'}
                        key={item.slug}
                        className={`flex items-center gap-1.5 rounded-[8px] border border-[#C9A84C]/15 bg-gradient-to-b from-[#171717] to-[#121212] px-2.5 py-1.5 text-[12px] leading-snug text-white/80 transition-colors hover:border-[#C9A84C]/35 hover:text-[#C9A84C] ${
                            hasOddCount && index === items.length - 1 ? 'col-span-2 justify-start' : ''
                        }`}
                    >
                        <ChevronRight size={10} className="shrink-0 text-[#C9A84C] opacity-50" />
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>

            <div className="mt-4 flex flex-col items-center gap-2 text-center">
                <a
                    href="#services"
                    className="mt-1 flex flex-col items-center gap-1 text-[#C9A84C] transition-opacity"
                    aria-label="Перейти к карточкам услуг"
                >
                    <ChevronDown className="h-5 w-5 animate-bounce" />
                    <span className="text-[11px] uppercase tracking-wider opacity-70">смотреть карточки</span>
                </a>
            </div>
        </section>
    );
}
