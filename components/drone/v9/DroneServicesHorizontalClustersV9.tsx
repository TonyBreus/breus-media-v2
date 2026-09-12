'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';

const CLUSTERS = [
    {
        id: 'real-estate',
        title: '🏢 Недвижимость (5)',
        slugs: ['nedvizhimost', 'monitoring-stroiki', 'zemelnye-uchastki', 'interiery-sklady', 'regulyarnye-aerootchety'],
    },
    {
        id: 'hospitality',
        title: '🏨 HoReCa и Отели (3)',
        slugs: ['oteli-kurorty', 'restorany', 'meropriyatiya'],
    },
    {
        id: 'fpv',
        title: '⚡ FPV и Авто (4)',
        slugs: ['fpv-semka', 'reklama-brand-video', 'aerosyemka-dlya-avto-i-avtosalonov', 'sport-kompleksy'],
    },
    {
        id: 'inspection',
        title: '🔍 Инспекции и Агро (5)',
        slugs: ['inspekciya-obektov', 'kontrol-territorii', 'inspekciya-solnechnyh-paneley', 'inspekciya-fasadov', 'agro-i-vinodelie'],
    },
];

export const DroneServicesHorizontalClustersV9 = () => {
    // Flatten and order items based on CLUSTERS
    const orderedItems = React.useMemo(() => {
        const items: any[] = [];
        CLUSTERS.forEach(cluster => {
            cluster.slugs.forEach(slug => {
                const found = droneServiceItems.find(item => item.slug === slug);
                if (found) {
                    items.push({ ...found, clusterId: cluster.id });
                }
            });
        });
        return items;
    }, []);

    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeCluster, setActiveCluster] = useState(CLUSTERS[0].id);

    // Track scroll to update active chip
    const handleScroll = () => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.scrollWidth / orderedItems.length;
        const index = Math.round(scrollLeft / cardWidth);
        const currentItem = orderedItems[Math.min(index, orderedItems.length - 1)];
        if (currentItem && currentItem.clusterId !== activeCluster) {
            setActiveCluster(currentItem.clusterId);
        }
    };

    const scrollToCluster = (clusterId: string) => {
        if (!carouselRef.current) return;
        const index = orderedItems.findIndex(item => item.clusterId === clusterId);
        if (index === -1) return;
        
        setActiveCluster(clusterId);
        const container = carouselRef.current;
        const card = container.children[index] as HTMLElement;
        if (card) {
            container.scrollTo({
                left: card.offsetLeft - container.offsetLeft - 16, // 16 for padding-left
                behavior: 'smooth'
            });
        }
    };

    const generateWaLink = (title: string) => {
        const text = encodeURIComponent(`Здравствуйте! Интересует услуга "${title}". Расскажите подробнее.`);
        return `https://wa.me/995501103183?text=${text}`;
    };

    return (
        <DebugWrapper id={11009} label="Drone Services Horizontal Clusters V9">
            <section className="py-8 md:py-16 bg-[#080808]">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <div className="mb-3">
                        <h2 className="text-lg font-bold tracking-tight text-white">
                            Направления съёмки
                        </h2>
                    </div>
                </div>

                {/* 2x2 Static Grid for Categories */}
                <div className="grid grid-cols-2 gap-2 px-4 mb-4">
                    {CLUSTERS.map(cluster => {
                        const isActive = activeCluster === cluster.id;
                        return (
                            <button
                                key={cluster.id}
                                onClick={() => scrollToCluster(cluster.id)}
                                className={`text-left py-2 px-2.5 text-xs font-medium rounded-xl transition-colors ${
                                    isActive 
                                    ? 'bg-amber-400 text-black font-semibold shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                                    : 'bg-neutral-900 border border-white/10 text-white/80 hover:bg-white/10'
                                }`}
                            >
                                {cluster.title}
                            </button>
                        );
                    })}
                </div>

                {/* Horizontal Carousel */}
                <div 
                    ref={carouselRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-6 pb-16 no-scrollbar"
                >
                    {orderedItems.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="w-[85vw] max-w-[340px] shrink-0 snap-center bg-[#111] rounded-[20px] overflow-hidden border border-white/5 flex flex-col"
                        >
                            {/* Photo Header */}
                            <div className="h-44 relative overflow-hidden bg-[#1a1a1a]">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Text Block */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="mb-2">
                                    <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-xs text-white/80 leading-relaxed mb-4 flex-grow">
                                    {item.description}
                                </p>
                                
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-sm font-bold text-[#D4A017]">{item.price}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span className="text-[10px] font-bold text-white/60 tracking-wider uppercase">
                                        {item.specs}
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-2 mt-auto">
                                    <Link 
                                        href={item.primaryHref}
                                        className="flex-1 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/5 text-white py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all"
                                    >
                                        Открыть
                                    </Link>
                                    <a 
                                        href={generateWaLink(item.title)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center bg-[#D4A017] hover:bg-white text-black py-2.5 rounded-[10px] text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)]"
                                    >
                                        Обсудить
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </DebugWrapper>
    );
};
