'use client';

import React from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

export const DroneServicesStitch = () => {
    const services = [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

    return (
        <DebugWrapper id={10300} label="Drone Services Section">
            <section className="py-8 md:py-24 bg-[#080808]" id="services">
                <style jsx>{`
                    .service-card-target:target {
                        border-color: rgba(212, 160, 23, 0.9) !important;
                        box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.4), 0 0 28px rgba(212, 160, 23, 0.22);
                    }
                `}</style>
                <div className="mx-auto w-full max-w-[1400px] px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, idx) => {
                            const detailsHref =
                                service.slug === 'inspekciya-obektov' ? '/drone-object-inspection' : service.primaryHref;

                            return (
                                <DebugWrapper key={service.slug} id={10310 + idx} label={`Service Card: ${service.title}`}>
                                <article
                                    id={`service-${service.slug}`}
                                    className={`service-card-target scroll-mt-32 bg-[#141414] border border-[#2a2a2a] rounded-[12px] overflow-hidden group hover:border-[#D4A017] transition-all flex flex-col ${service.featured ? 'gold-glow border-[#D4A017]/50' : ''}`}
                                    style={service.featured ? { boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)' } : {}}
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
                                    </div>
                                    <div className="px-5 pt-5 pb-4 flex-grow flex flex-col">
                                        <h3 className={`${manrope.className} text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-white mb-1`}>
                                            {service.title}
                                        </h3>
                                        <div className={`${manrope.className} text-[11px] font-semibold tracking-[0.12em] uppercase text-white/[0.45] mb-2`}>
                                            {service.category}
                                        </div>
                                        <p className={`${manrope.className} antialiased text-[14px] font-normal leading-[1.65] text-white/[0.82] mb-3`}>
                                            {service.description}
                                        </p>
                                        <div className="mt-auto">
                                            <div className={`${manrope.className} pt-3 border-t border-[#2a2a2a] text-[11px] font-bold tracking-[0.1em] uppercase text-[#F5C518] mb-4`}>
                                                {service.price}
                                            </div>
                                            <div className="flex gap-3">
                                                <Link
                                                    href={detailsHref}
                                                    className="flex-1 py-2 px-2 bg-[#D4A017] text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center"
                                                >
                                                    Открыть услугу
                                                </Link>
                                                <a
                                                    href="#contact"
                                                    className="flex-1 py-2 px-2 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors text-center"
                                                >
                                                    Обсудить задачу
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
