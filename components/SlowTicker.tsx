"use client";

import { motion } from "framer-motion";

interface SlowTickerProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number; // Higher number = slower
}

export default function SlowTicker({ items, direction = "left", speed = 60 }: SlowTickerProps) {
    return (
        <div className="relative flex items-center h-[50px] border-b border-white/10 bg-[#0F172A] overflow-hidden w-full">

            {/* Scrolling Content */}
            <div className="w-full relative z-10 flex">
                <motion.div
                    className="flex gap-16 px-16 text-lg font-bold text-blue-200 uppercase tracking-widest whitespace-nowrap"
                    animate={{
                        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed, // Slow speed
                    }}
                >
                    {/* Repeat items enough times to fill width */}
                    {[...items, ...items, ...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="hover:text-white transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
