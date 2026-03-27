"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";
import Link from "next/link";
import { useHeroStore } from "@/store/useHeroStore";

type TickerItemType = string | { text: string; link: string };

const TickerItem = ({ item, debugId }: { item: TickerItemType; debugId?: number }) => {
    const { setHoveredService } = useHeroStore();
    const isObj = typeof item === 'object';
    const text = isObj ? item.text : item;
    const shouldUseHoverPreview = text !== "360° Туры";

    const content = (
        <DebugWrapper id={debugId ?? 0} label={text}>
            <span
                onMouseEnter={() => {
                    if (shouldUseHoverPreview) {
                        setHoveredService(text);
                    }
                }}
                onMouseLeave={() => {
                    if (shouldUseHoverPreview) {
                        setHoveredService(null);
                    }
                }}
                className="cursor-pointer px-4 md:px-8 text-xs md:text-sm font-bold uppercase tracking-widest text-[#D4AF37]/70 hover:text-white transition-colors whitespace-nowrap"
            >
                {text}
            </span>
        </DebugWrapper>
    );

    return isObj ? <Link href={item.link}>{content}</Link> : content;
};

const InteractiveTicker = ({ items, direction = "left", speed = 40, baseId }: { items: TickerItemType[], direction?: "left" | "right", speed?: number, baseId?: number }) => {
    return (
        <div className="flex overflow-hidden w-full relative group bg-zinc-950">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-zinc-950 to-transparent" />

            <motion.div
                className="flex py-3.5"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => {
                    const idText = typeof item === 'object' ? item.text : item;
                    const itemIndex = i % items.length;
                    const debugId = baseId ? baseId + itemIndex + 1 : undefined;
                    return <TickerItem key={`${idText}-${i}`} item={item} debugId={debugId} />;
                })}
            </motion.div>
        </div>
    );
};

import { tickerDataMapping } from "@/constants/tickerData";

export function MarqueeSection() {
    const { hoveredService } = useHeroStore();

    // Case-insensitive lookup for ticker details
    const tickerDetail = hoveredService ? (
        Object.keys(tickerDataMapping).find(key => key.toLowerCase() === hoveredService.toLowerCase())
            ? tickerDataMapping[Object.keys(tickerDataMapping).find(key => key.toLowerCase() === hoveredService.toLowerCase())!]
            : null
    ) : null;

    const line1 = [
        { text: "НЕДВИЖИМОСТЬ", link: "/real-estate-service" },
        "АВТОБИЗНЕС", "ОТЕЛИ", "РЕСТОРАНЫ", "ТУРИЗМ", "КЛИНИКИ", "IT"
    ];
    const line2 = [
        { text: "Аэросъемка", link: "/drone-service" },
        { text: "360° Туры", link: "/360-tours-service" }, "Промо Видео", "Мероприятия", "AI Content", "Reels"
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Animate only padding to avoid squashing text width and keep background 100% wide
    const paddingY = useTransform(scrollYProgress, [0, 0.4, 1], ["0.5rem", "0rem", "0rem"]);

    return (
        <DebugWrapper id={20} label="Marquee Scroll Track">
            <section ref={containerRef} className="relative w-full h-0 bg-black pointer-events-none">

                {/* CINEMATIC REVEAL OVERLAY (Z-[9999]) FOR HOVERED SERVICE (Notebook style) */}
                <AnimatePresence>
                    {hoveredService && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
                        >
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all pointer-events-auto" />

                            <motion.div
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.95, y: -20, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                className="relative z-10 text-center max-w-4xl px-6"
                            >
                                {tickerDetail ? (
                                    <>
                                        <motion.h2
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-[8vw] md:text-[100px] font-black uppercase tracking-tighter text-white leading-none mb-6"
                                        >
                                            {tickerDetail.heading}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
                                        >
                                            {tickerDetail.subheading}
                                        </motion.p>
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex flex-wrap justify-center gap-3"
                                        >
                                            {tickerDetail.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#D4AF37]"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-[10vw] md:text-[120px] font-black uppercase tracking-tighter text-white leading-none drop-shadow-2xl">
                                            {hoveredService}
                                        </h2>
                                        <p className="text-brand font-bold uppercase tracking-[0.5em] mt-4 text-sm md:text-xl">
                                            Explore Solution
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Dark background for the scroll track gap */}
                <div className="absolute inset-0 w-full h-full z-0 bg-black" />

                {/* Marquee permanently FIXED top-[70px] so it never scrolls away. */}
                <motion.div
                    style={{
                        paddingTop: paddingY,
                        paddingBottom: paddingY,
                        y: useTransform(scrollYProgress, [0, 0.4], ["100vh", "0vh"])
                    }}
                    className="fixed top-[70px] left-0 w-full overflow-hidden bg-zinc-950 border-y border-white/20 z-[40] flex flex-col pointer-events-auto"
                >
                    {/* INTERACTIVE TICKERS */}
                    <div className="relative z-[50] w-full">
                        <DebugWrapper id={208} label="Running Text Line 1">
                            <InteractiveTicker items={line1} direction="left" speed={60} baseId={2080} />
                        </DebugWrapper>
                        <div className="h-[1px] bg-white/10 w-full" />
                        <DebugWrapper id={209} label="Running Text Line 2">
                            <InteractiveTicker items={line2} direction="right" speed={70} baseId={2090} />
                        </DebugWrapper>
                    </div>
                </motion.div>
            </section>
        </DebugWrapper>
    );
}
