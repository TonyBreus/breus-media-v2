"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";

export function MarqueeSection() {
    const items = [
        "АЭРОСЪЕМКА",
        "360 ТУРЫ",
        "REELS",
        "AI КОНТЕНТ",
        "БРЕНД ВИДЕО",
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Shrinks by 50% when pinned
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.5]);
    const py = useTransform(scrollYProgress, [0, 0.5, 1], ["1.5rem", "0.25rem", "0.25rem"]);

    const marqueeContent = [...items, ...items, ...items, ...items];

    return (
        <DebugWrapper id={21} label="Separator Marquee">
            <section ref={containerRef} className="relative w-full h-[150vh] bg-black pointer-events-none">
                {/* 56px is header height. 40vh is roughly where the scaled text sits. Let's stick it at top-14 (56px) */}
                <motion.div
                    style={{ scale, paddingTop: py, paddingBottom: py, originY: 0 }}
                    className="sticky top-[56px] left-0 w-full overflow-hidden bg-zinc-950 border-y-2 border-white flex items-center z-30 pointer-events-auto"
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {marqueeContent.map((item, i) => (
                            <div key={i} className="flex items-center">
                                <span className="text-2xl md:text-4xl font-black uppercase tracking-widest text-[#D4AF37] px-8">
                                    {item}
                                </span>
                                <span className="text-white/30 text-2xl md:text-3xl">•</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </DebugWrapper>
    );
}
