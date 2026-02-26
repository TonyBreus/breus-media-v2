"use client";
import React from "react";
import { DebugWrapper } from "../debug/DebugWrapper";

const niches = [
    { id: "01", title: "Недвижимость", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" },
    { id: "02", title: "Отели", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" },
    { id: "03", title: "Рестораны", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" },
    { id: "04", title: "Авто бизнес", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80" },
    { id: "05", title: "Туризм", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80" },
    { id: "06", title: "Клиники", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80" },
    { id: "07", title: "IT", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" },
    { id: "08", title: "Ваш бизнес", img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1600&q=80" },
];

export function NichesStack() {
    // Assuming Marquee isn't strictly position:sticky to avoid overlapping complex z-indexes,
    // we will just stick the cards to the top of the viewport (or beneath the header).
    // Header is ~80px. So top-20 (80px) is a good starting point for sticky.

    return (
        <DebugWrapper id={31} label="Niches Stack Container">
            <div className="relative w-full bg-black">
                {niches.map((niche, index) => {
                    // Each card's top position increases by the height of the header bar (e.g. 3rem or 48px)
                    // index * 48px + 80px (main header offset). 
                    // 48px = 3rem = h-12.
                    const topOffset = 80 + index * 48; // in px

                    return (
                        <div
                            key={niche.id}
                            className="sticky w-full h-screen flex flex-col overflow-hidden will-change-transform"
                            style={{ top: `${topOffset}px` }}
                        >
                            {/* Card Header (Accordion Tab) */}
                            <DebugWrapper id={32 + index} label={`Tab: ${niche.title}`}>
                                <div className="h-12 w-full bg-zinc-900 border-t border-white/20 flex items-center px-6 uppercase tracking-widest text-xs font-bold text-white z-10 shrink-0">
                                    <span className="text-[#D4AF37] mr-4">{niche.id}</span>
                                    <span>Индустрия: {niche.title}</span>
                                </div>
                            </DebugWrapper>

                            {/* Card Body (Image) */}
                            <div className="relative flex-1 w-full bg-zinc-800">
                                <DebugWrapper id={100 + index} label={`Image: ${niche.title}`} className="absolute inset-0 z-0">
                                    <img
                                        src={niche.img}
                                        alt={niche.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dark Overlay for readability if we add content later */}
                                    <div className="absolute inset-0 bg-black/40" />
                                </DebugWrapper>

                                {/* Huge Title in the center of the card */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                    <DebugWrapper id={200 + index} label={`Title: ${niche.title}`}>
                                        <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tighter uppercase text-white drop-shadow-2xl">
                                            {niche.title}
                                        </h2>
                                    </DebugWrapper>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </DebugWrapper>
    );
}
