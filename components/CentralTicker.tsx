"use client";

import { motion } from "framer-motion";

interface CentralTickerProps {
    label: string;
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}

export default function CentralTicker({ label, items, direction = "left", speed = 30 }: CentralTickerProps) {
    return (
        <div className="relative flex items-center h-[60px] border-b border-white/5 bg-dark overflow-hidden group">

            {/* Center Label (Fixed & Top Layer) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer group-hover:scale-105 transition-transform">
                {label}
            </div>

            {/* Scrolling Content (Background Layer) */}
            <div className="w-full relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                    className="flex gap-16 px-16 text-xl md:text-2xl font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap"
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
                        <span key={i} className="hover:text-white transition-colors">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-15 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-15 pointer-events-none" />

        </div>
    );
}
