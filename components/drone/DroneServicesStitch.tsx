'use client';

import React from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

export const DroneServicesStitch = () => {
    const services = [...droneServiceItems].sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

    return (
        <DebugWrapper id={10300} label="Drone Services Section">
            <section className="py-24 bg-[#080808]" id="services">
                <style jsx>{`
                    .service-card-target:target {
                        border-color: rgba(212, 160, 23, 0.9) !important;
                        box-shadow: 0 0 0 1px rgba(212, 160, 23, 0.4), 0 0 28px rgba(212, 160, 23, 0.22);
                    }
                `}</style>
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Направления съёмки</h2>
                        <div className="w-12 h-1 bg-[#D4A017]" />
                    </div>
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
                                        <h3 className={`text-lg font-bold mb-1 ${service.featured ? 'text-[#D4A017]' : 'text-white'}`}>
                                            {service.title}
                                        </h3>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                                            {service.category}
                                        </div>
                                        <p className="text-gray-400 text-sm mb-3 leading-snug">
                                            {service.description}
                                        </p>
                                        <div className="mt-auto">
                                            <div className="pt-3 border-t border-[#2a2a2a] text-[10px] text-[#D4A017] font-bold uppercase tracking-wider mb-4">
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
