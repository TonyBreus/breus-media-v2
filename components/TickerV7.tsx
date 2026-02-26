"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

interface TickerV7Props {
    label: string;
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}

export default function TickerV7({ label, items, direction = "left", speed = 30 }: TickerV7Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex border-b border-white/10 bg-dark-surface relative z-40 h-[50px]">
            {/* Fixed Button Label */}
            <button
                className="flex-shrink-0 px-6 bg-brand text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white hover:text-black transition-colors min-w-[180px] z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {label}
                <ArrowDown className={`w-3 h-3 transition-transform ${isHovered ? "rotate-180" : ""}`} />
            </button>

            {/* Scrolling Content */}
            <div className="flex-grow overflow-hidden flex items-center bg-black/50 backdrop-blur-sm">
                <motion.div
                    className="flex gap-12 px-12 text-sm font-medium text-gray-400 uppercase tracking-wide whitespace-nowrap"
                    animate={{
                        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: speed,
                    }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
