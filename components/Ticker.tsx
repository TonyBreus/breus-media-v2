"use client";

import { motion } from "framer-motion";

export default function Ticker({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap bg-brand text-white py-3 border-y border-white/10 relative z-20">
            <motion.div
                className="flex gap-8 md:gap-16 pr-8 md:pr-16 text-sm md:text-base font-bold uppercase tracking-widest"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="flex items-center gap-4">
                        {item} <span className="text-white/30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
