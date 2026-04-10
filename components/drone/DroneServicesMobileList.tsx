import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { droneServiceItems } from '@/components/drone/droneServicesData';

export function DroneServicesMobileList() {
    const items = [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

    return (
        <section id="directions" className="block md:hidden border-t border-[#C9A84C]/10 bg-[#0d0d0d] px-5 py-10">
            <p className="mb-2 text-[11px] uppercase tracking-[3px] text-[#C9A84C]">Выберите направление</p>
            <h2 className="mb-6 text-2xl font-bold text-white">{items.length} направлений съёмки</h2>

            <div className="grid grid-cols-2 gap-[2px]">
                {items.map((item) => (
                    <Link
                        href={item.primaryHref || '#contact'}
                        key={item.slug}
                        className="flex items-center gap-2 border border-[#C9A84C]/10 bg-[#161616] px-3 py-3 text-[13px] leading-snug text-white/80 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
                    >
                        <ChevronRight size={10} className="shrink-0 text-[#C9A84C] opacity-50" />
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="mb-2 text-[12px] text-white/40">Карточки с описанием и ценами — ниже</p>
                <ChevronDown className="mx-auto animate-bounce text-[#C9A84C] opacity-50" size={20} />
            </div>
        </section>
    );
}
