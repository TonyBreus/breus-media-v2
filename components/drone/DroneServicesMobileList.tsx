import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { droneServiceItems } from '@/components/drone/droneServicesData';

export function DroneServicesMobileList() {
    const items = [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));
    const hasOddCount = items.length % 2 === 1;

    return (
        <section id="directions" className="block md:hidden scroll-mt-20 border-t border-[#C9A84C]/10 bg-[#0d0d0d] px-4 py-4">
            <h2 className="mb-3 text-base font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">Направления съёмки</h2>

            <div className="grid grid-cols-2 gap-[1px]">
                {items.map((item, index) => (
                    <Link
                        href={item.slug ? `#service-${item.slug}` : '#contact'}
                        key={item.slug}
                        className={`flex items-center gap-1.5 border border-[#C9A84C]/10 bg-[#161616] px-2.5 py-2 text-[13px] leading-snug text-white/80 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C] ${
                            hasOddCount && index === items.length - 1 ? 'col-span-2 justify-start' : ''
                        }`}
                    >
                        <ChevronRight size={10} className="shrink-0 text-[#C9A84C] opacity-50" />
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
