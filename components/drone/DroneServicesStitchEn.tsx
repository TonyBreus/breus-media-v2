'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DRONE_OPEN_SERVICE_SLUGS, droneServiceItems, getDroneServiceSortRank } from '@/components/drone/droneServicesData';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

type ServiceCategory = {
    id: string;
    label: string;
    icon: string;
    slugs?: string[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
    { id: 'all', label: 'All Services', icon: '✦' },
    {
        id: 'real-estate',
        label: 'Real Estate & Construction',
        icon: '🏗️',
        slugs: ['nedvizhimost', 'monitoring-stroiki', 'zemelnye-uchastki', 'inspekciya-fasadov', 'interiery-sklady'],
    },
    {
        id: 'hospitality',
        label: 'Hotels & Events',
        icon: '🏨',
        slugs: ['oteli-kurorty', 'restorany', 'meropriyatiya'],
    },
    {
        id: 'business',
        label: 'Business & Logistics',
        icon: '🏭',
        slugs: ['fpv-semka', 'kontrol-territorii', 'agro-i-vinodelie', 'aerosyemka-dlya-avto-i-avtosalonov', 'reklama-brand-video'],
    },
    {
        id: 'inspection',
        label: 'Inspections & Reports',
        icon: '🔍',
        slugs: ['inspekciya-obektov', 'inspekciya-solnechnyh-paneley', 'regulyarnye-aerootchety'],
    },
];

export const DroneServicesStitchEn = ({ services }: { services: any[] }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const openServiceSlugSet = new Set<string>(DRONE_OPEN_SERVICE_SLUGS);
    const activeCategoryObj = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);

    return (
        <DebugWrapper id={10300} label="Drone Services Section">
            <section className="py-10 md:py-24 bg-[#080808]" id="services">
                <style jsx>{`
                    .service-card-target:target {
                        border-color: rgba(212, 160, 23, 0.9) !important;
                        box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.4), 0 0 28px rgba(212, 160, 23, 0.22);
                    }
                `}</style>

                {/* ── Section Header with GEO/AEO Answer Capsule ── */}
                <div className="mx-auto w-full max-w-[1400px] px-6 mb-6 md:mb-8 text-center md:text-left">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4A017]">
                        {services.length} business formats
                    </div>
                    <h2 className={`${manrope.className} mb-3 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl md:leading-[1.1]`}>
                        Drone filming directions in Georgia
                    </h2>
                    <p className={`${manrope.className} mx-auto max-w-2xl text-[15px] leading-relaxed text-white/70`}>
                        Specialized drone filming formats for developers, hoteliers, restaurateurs, and industrial sites in Tbilisi and regions.
                    </p>
                </div>

                {/* ── Niche Category Filter Chips ── */}
                <div className="mx-auto w-full max-w-[1400px] px-6 mb-6 md:mb-8">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                        {SERVICE_CATEGORIES.map((cat) => {
                            const count = cat.id === 'all'
                                ? services.length
                                : services.filter((s) => cat.slugs?.includes(s.slug)).length;
                            const isActive = activeCategory === cat.id;

                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all border ${
                                        isActive
                                            ? 'bg-[#D4A017] border-[#D4A017] text-black shadow-[0_2px_14px_rgba(212,160,23,0.35)]'
                                            : 'bg-white/[0.04] border-white/12 text-white/70 hover:border-white/30 hover:text-white'
                                    }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span>{cat.label}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-white/50'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mx-auto w-full px-6 relative group/carousel">
                    {/* Horizontal Swipe Carousel */}
                    <div className="flex gap-4 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory pr-[20vw] md:pr-0">
                        {services.map((service, idx) => {
                            const detailsHref = service.primaryHref;
                            const hasOpenServiceCta = openServiceSlugSet.has(service.slug);
                            const isMatch = activeCategory === 'all' || (activeCategoryObj?.slugs?.includes(service.slug) ?? false);

                            return (
                                <DebugWrapper key={service.slug} id={10310 + idx} label={`Service Card: ${service.title}`}>
                                <article
                                    id={`service-${service.slug}`}
                                    className={`snap-center shrink-0 w-[75vw] sm:w-[260px] xl:w-[280px] service-card-target scroll-mt-32 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[16px] overflow-hidden group hover:border-[#D4A017]/50 hover:bg-white/[0.08] transition-all duration-500 flex-col backdrop-blur-sm ${isMatch ? 'flex' : 'hidden'} ${service.featured ? 'shadow-[0_0_30px_rgba(212,160,23,0.15)] border-[#D4A017]/40' : ''}`}
                                >
                                    <div className="h-40 bg-neutral-800 overflow-hidden relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-50 group-hover:opacity-80"
                                        />
                                        {service.tag && (
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold ${service.tag === 'HOT' ? 'bg-[#D4A017] text-black' : 'bg-black/50 text-white backdrop-blur'}`}>
                                                    {service.tag}
                                                </span>
                                            </div>
                                        )}
                                        {service.slug === 'nedvizhimost' && (
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-3 pt-10">
                                                <h3 className={`${manrope.className} text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-white`}>
                                                    {service.title}
                                                </h3>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-5 pt-3 pb-3 md:pt-5 md:pb-4 flex-grow flex flex-col">
                                        {service.slug !== 'nedvizhimost' && (
                                            <h3 className={`${manrope.className} mt-2 md:mt-0 text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-white mb-0.5 md:mb-1`}>
                                                {service.title}
                                            </h3>
                                        )}
                                        <div className={`${manrope.className} text-[11px] font-semibold tracking-[0.12em] uppercase text-white/[0.45] mb-1 md:mb-2`}>
                                            {service.category}
                                        </div>
                                        <p className={`${manrope.className} antialiased text-[14px] font-normal leading-[1.32] md:leading-[1.65] text-white/[0.82] mb-1.5 md:mb-3`}>
                                            {service.description}
                                        </p>
                                        <div className="mt-auto">
                                            <div className={`${manrope.className} pt-2 md:pt-3 border-t border-[#2a2a2a] flex items-center justify-between gap-2 text-[11px] mb-2 md:mb-4`}>
                                                <span className="font-bold tracking-[0.08em] uppercase text-[#F5C518]">{service.price}</span>
                                                {service.specs && (
                                                    <span className="font-medium tracking-[0.05em] uppercase text-white/40 text-[10px] truncate">{service.specs}</span>
                                                )}
                                            </div>
                                            <div className="flex gap-3">
                                                {hasOpenServiceCta ? (
                                                <Link
                                                    href={detailsHref}
                                                    className="flex-1 py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center"
                                                >
                                                    Open Service
                                                </Link>
                                                ) : null}
                                                <a
                                                    href="#contact"
                                                    onClick={() => {
                                                        if (typeof window !== 'undefined' && service.title) {
                                                            window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle: service.title } }));
                                                            try { sessionStorage.setItem('breus_contact_prefill_service', service.title); } catch {}
                                                        }
                                                    }}
                                                    className={`py-2 px-2 bg-[#D4A017] text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center ${hasOpenServiceCta ? 'flex-1' : 'w-full'}`}
                                                >
                                                    Discuss Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </DebugWrapper>
                            );
                        })}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
