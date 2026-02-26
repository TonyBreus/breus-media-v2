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

    // Animate only padding and font-size to avoid squashing text width and keep background 100% wide
    const paddingY = useTransform(scrollYProgress, [0, 0.4, 1], ["1.5rem", "0.5rem", "0.5rem"]);
    const textSize = useTransform(scrollYProgress, [0, 0.4, 1], ["2.25rem", "1.125rem", "1.125rem"]);
    const dotSize = useTransform(scrollYProgress, [0, 0.4, 1], ["1.875rem", "1.125rem", "1.125rem"]);

    const marqueeContent = [...items, ...items, ...items, ...items];

    return (
        <DebugWrapper id={21} label="Separator Marquee">
            <section ref={containerRef} className="relative w-full h-[150vh] bg-black pointer-events-none">
                {/* 56px is header height, plus a bit for the text 13.
                    If the text #13 ends up shrinking into the top, we can stick the marquee right under it.
                    We will stick to top-[56px] for safety. */}
                <motion.div
                    style={{ paddingTop: paddingY, paddingBottom: paddingY }}
                    className="sticky top-[56px] left-0 w-full overflow-hidden bg-zinc-950 border-y-2 border-white flex items-center z-30 pointer-events-auto"
                >
                    <motion.div
                        className="flex whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                    >
                        {marqueeContent.map((item, i) => (
                            <div key={i} className="flex items-center">
                                <DebugWrapper id={300 + i + 1} label={`Link: ${item}`}>
                                    <a href={`#service-${item}`} className="cursor-pointer">
                                        <motion.span
                                            style={{ fontSize: textSize }}
                                            className="font-black uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors px-8"
                                        >
                                            {item}
                                        </motion.span>
                                    </a>
                                </DebugWrapper>
                                <motion.span style={{ fontSize: dotSize }} className="text-white/30">•</motion.span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </DebugWrapper>
    );
}
