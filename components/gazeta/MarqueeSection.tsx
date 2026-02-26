"use client";
import React from "react";
import { motion } from "framer-motion";
import { DebugWrapper } from "../debug/DebugWrapper";

export function MarqueeSection() {
    const items = [
        "АЭРОСЪЕМКА",
        "360 ТУРЫ",
        "REELS",
        "AI КОНТЕНТ",
        "БРЕНД ВИДЕО",
    ];

    // Duplicate items twice to ensure a smooth infinite loop
    const marqueeContent = [...items, ...items, ...items, ...items];

    return (
        <DebugWrapper id={21} label="Separator Marquee">
            <section className="relative w-full overflow-hidden bg-zinc-950 border-y-2 border-white py-4 md:py-6 flex items-center z-30">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Adjust speed here
                    }}
                >
                    {marqueeContent.map((item, i) => (
                        <div key={i} className="flex items-center">
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-widest text-[#D4AF37] px-8">
                                {item}
                            </span>
                            {/* Bullet separator */}
                            <span className="text-white/30 text-2xl md:text-3xl">•</span>
                        </div>
                    ))}
                </motion.div>
            </section>
        </DebugWrapper>
    );
}
