'use client';

import React, { useState } from 'react';
import { Manrope } from 'next/font/google';
import { Building2, Hotel, Crosshair, Wrench, ChevronRight, MessageCircle } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DRONE_OPEN_SERVICE_SLUGS, droneServiceItems } from '@/components/drone/droneServicesData';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

const CLUSTERS = [
    {
        id: 'real-estate',
        title: 'Недвижимость и Девелопмент',
        icon: <Building2 className="w-6 h-6 text-[#D4A017]" />,
        description: 'Регулярный мониторинг строек, аэропанорамы жилых комплексов и съемка земельных участков для инвесторов.',
        slugs: ['nedvizhimost', 'monitoring-stroiki', 'zemelnye-uchastki', 'interiery-sklady', 'regulyarnye-aerootchety'],
    },
    {
        id: 'hospitality',
        title: 'HoReCa и Туризм',
        icon: <Hotel className="w-6 h-6 text-[#D4A017]" />,
        description: 'Видовая съемка курортов, террас ресторанов, маршрутов и масштабных мероприятий.',
        slugs: ['oteli-kurorty', 'restorany', 'turizm', 'meropriyatiya', 'sport-kompleksy'],
    },
    {
        id: 'fpv',
        title: 'Кинематографичный FPV',
        icon: <Crosshair className="w-6 h-6 text-[#D4A017]" />,
        description: 'Пролеты внутри производств, автосалонов и креативная реклама с полным погружением.',
        slugs: ['fpv-semka', 'reklama-brand-video', 'aerosyemka-dlya-avto-i-avtosalonov'],
    },
    {
        id: 'inspection',
        title: 'Инспекции и Мониторинг',
        icon: <Wrench className="w-6 h-6 text-[#D4A017]" />,
        description: 'Безопасная инспекция фасадов высоток, солнечных панелей, ЛЭП и агропромышленных зон.',
        slugs: ['inspekciya-obektov', 'kontrol-territorii', 'inspekciya-solnechnyh-paneley', 'inspekciya-fasadov', 'agro-i-vinodelie'],
    },
];

export const DroneServicesClustersV5 = () => {
    const [activeCluster, setActiveCluster] = useState<string>(CLUSTERS[0].id);
    const openServiceSlugSet = new Set<string>(DRONE_OPEN_SERVICE_SLUGS);

    const generateWaLink = (title: string) => {
        const text = encodeURIComponent(`Здравствуйте! Интересует услуга "${title}". Расскажите подробнее.`);
        return `https://wa.me/995501103183?text=${text}`;
    };

    return (
        <DebugWrapper id={11005} label="Drone Services Clusters V5">
            <section className="py-20 md:py-32 bg-[#080808] relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
                
                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                            Отраслевые решения
                        </h2>
                    </div>

                    {/* Desktop/Tablet Layout */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Sidebar Clusters */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-3">
                            {CLUSTERS.map((cluster) => {
                                const isActive = activeCluster === cluster.id;
                                return (
                                    <button
                                        key={cluster.id}
                                        onClick={() => setActiveCluster(cluster.id)}
                                        className={`flex flex-col text-left p-5 md:p-6 rounded-2xl transition-all duration-300 border ${
                                            isActive 
                                            ? 'bg-white/10 border-[#D4A017]/40 shadow-[0_0_30px_rgba(212,160,23,0.1)]' 
                                            : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className={`p-2.5 rounded-xl ${isActive ? 'bg-[#D4A017]/20' : 'bg-white/5'}`}>
                                                {cluster.icon}
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white">
                                                {cluster.title}
                                            </h3>
                                        </div>
                                        <p className={`text-xs md:text-sm leading-relaxed ${isActive ? 'text-white/80' : 'text-white/50'}`}>
                                            {cluster.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Services Grid */}
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                {droneServiceItems.map((service, idx) => {
                                    const isMatch = CLUSTERS.find(c => c.id === activeCluster)?.slugs?.includes(service.slug);
                                    const hasOpenServiceCta = openServiceSlugSet.has(service.slug);
                                    
                                    return (
                                        <article 
                                            key={service.slug}
                                            className={`group bg-white/[0.03] border border-white/10 hover:border-[#D4A017]/30 rounded-2xl overflow-hidden flex-col transition-colors ${isMatch ? 'flex' : 'hidden'}`}
                                        >
                                            <div className="h-40 md:h-48 overflow-hidden relative">
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title} 
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                                                    <h4 className={`${manrope.className} text-xl font-bold text-white leading-tight`}>
                                                        {service.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="p-5 flex flex-col flex-1">
                                                <p className="text-xs md:text-sm text-white/60 mb-6 flex-1">
                                                    {service.description}
                                                </p>
                                                
                                                {hasOpenServiceCta ? (
                                                    <a 
                                                        href={service.primaryHref}
                                                        className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                                                    >
                                                        <span>Подробнее</span>
                                                        <ChevronRight className="w-4 h-4 text-[#D4A017]" />
                                                    </a>
                                                ) : (
                                                    <a 
                                                        href={generateWaLink(service.title)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 text-xs font-bold uppercase tracking-wider transition-colors"
                                                    >
                                                        <span>Связаться в WA</span>
                                                        <MessageCircle className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
