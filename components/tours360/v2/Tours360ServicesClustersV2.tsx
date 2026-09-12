'use client';

import React, { useState } from 'react';
import { Manrope } from 'next/font/google';
import { Building2, Hotel, Store, Briefcase, ChevronRight, MessageCircle } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { TOURS360_OPEN_SERVICE_SLUGS, tours360ServiceItems } from '@/components/tours360/tours360ServicesData';

const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

const CLUSTERS = [
    {
        id: 'real-estate',
        title: 'Недвижимость и Коммерция',
        icon: <Building2 className="w-6 h-6 text-[#D4A017]" />,
        description: 'Удаленный осмотр квартир, домов, складов и коммерческих площадей для покупателей и арендаторов.',
        slugs: ['nedvizhimost', 'kommercia'],
    },
    {
        id: 'hospitality',
        title: 'HoReCa и Туризм',
        icon: <Hotel className="w-6 h-6 text-[#D4A017]" />,
        description: 'Виртуальные панорамы курортов, отелей, ресторанов и туристических достопримечательностей.',
        slugs: ['oteli', 'restorany', 'turizm'],
    },
    {
        id: 'retail',
        title: 'Ритейл и Автосалоны',
        icon: <Store className="w-6 h-6 text-[#D4A017]" />,
        description: 'Презентация шоурумов, магазинов и автосалонов для привлечения клиентов онлайн.',
        slugs: ['avtosalony', 'biznes'],
    },
    {
        id: 'business',
        title: 'Услуги и Медицина',
        icon: <Briefcase className="w-6 h-6 text-[#D4A017]" />,
        description: 'Демонстрация клиник, стоматологий, фитнес-центров и офисов для повышения доверия.',
        slugs: ['kliniki'],
    },
];

export const Tours360ServicesClustersV2 = () => {
    const [activeCluster, setActiveCluster] = useState<string>(CLUSTERS[0].id);
    const openServiceSlugSet = new Set<string>(TOURS360_OPEN_SERVICE_SLUGS);

    const generateWaLink = (title: string) => {
        const text = encodeURIComponent(`Здравствуйте! Интересует услуга "${title}". Расскажите подробнее.`);
        return `https://wa.me/995501103183?text=${text}`;
    };

    return (
        <DebugWrapper id={12001} label="Tours 360 Services Clusters V2">
            <section className="py-16 md:py-24 bg-[#080808]" id="services-v2">
                <div className="mx-auto w-full max-w-[1400px] px-6">
                    <div className="mb-10 md:mb-16 text-center md:text-left">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4A017] font-semibold mb-2">
                            Все {tours360ServiceItems.length} направлений в 4 кластерах
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ключевые направления
                        </h2>
                        <p className="max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
                            Мы систематизировали создание 360° туров по отраслям. Выберите ваш профиль, чтобы посмотреть доступные решения.
                        </p>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {tours360ServiceItems.map((service) => {
                                    const isVisible = CLUSTERS.find(c => c.id === activeCluster)?.slugs?.includes?.(service.slug);
                                    const isOpen = openServiceSlugSet.has(service.slug);

                                    return (
                                        <article 
                                            key={service.slug}
                                            className={`group relative flex-col bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-[#D4A017]/30 transition-all duration-500 ${isVisible ? 'flex' : 'hidden'}`}
                                        >
                                            <div className="relative h-48 md:h-56 w-full overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10"></div>
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className="px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                                                        {service.category}
                                                    </span>
                                                </div>
                                                <div className="absolute top-4 right-4 z-20">
                                                    <span className="px-2.5 py-1 text-[10px] font-bold bg-[#D4A017] text-black rounded-full">
                                                        {service.price}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col flex-1 p-5 md:p-6">
                                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#D4A017] transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-4 flex-1">
                                                    {service.description}
                                                </p>
                                                
                                                {service.specs && (
                                                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/30 mb-6">
                                                        {service.specs}
                                                    </div>
                                                )}

                                                <div className="flex gap-2 w-full mt-auto">
                                                    {isOpen ? (
                                                        <a 
                                                            href={service.primaryHref}
                                                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/10 hover:bg-[#D4A017] hover:text-black text-white text-xs font-bold uppercase tracking-wide rounded-xl transition-all duration-300"
                                                        >
                                                            Подробнее
                                                        </a>
                                                    ) : (
                                                        <div className="flex-1 flex items-center justify-center py-2.5 bg-white/5 text-white/30 text-xs font-bold uppercase tracking-wide rounded-xl border border-white/5 cursor-not-allowed">
                                                            В разработке
                                                        </div>
                                                    )}
                                                    <a 
                                                        href={generateWaLink(service.title)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 flex items-center justify-center bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white rounded-xl transition-colors duration-300 shrink-0"
                                                    >
                                                        <MessageCircle className="w-4 h-4" />
                                                    </a>
                                                </div>
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
