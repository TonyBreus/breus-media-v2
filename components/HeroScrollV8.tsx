"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Column = ({ items, y = 0 }: { items: { color: string, label: string }[], y?: any }) => {
    return (
        <motion.div style={{ y }} className="w-full md:w-1/3 flex flex-col gap-6">
            {items.map((item, i) => (
                <div key={i} className="relative aspect-[9/16] rounded-sm overflow-hidden bg-white/5 group">
                    {/* Gradient Placeholder */}
                    <div className={`w-full h-full bg-gradient-to-b ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mix-blend-overlay">{item.label}</h3>
                            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">View Case</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default function HeroScrollV8() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -700]);

    const col1 = [
        { color: "from-blue-900 via-blue-800 to-black", label: "Skyline Drone" },
        { color: "from-indigo-900 via-indigo-800 to-black", label: "Luxury Hotel" },
        { color: "from-blue-900 via-blue-800 to-black", label: "Construction" }
    ];
    const col2 = [
        { color: "from-red-900 via-red-800 to-black", label: "Mercedes AMG" },
        { color: "from-orange-900 via-orange-800 to-black", label: "Michelin Food" },
        { color: "from-red-900 via-red-800 to-black", label: "Auto Detail" }
    ];
    const col3 = [
        { color: "from-teal-900 via-teal-800 to-black", label: "Dental Clinic" },
        { color: "from-green-900 via-green-800 to-black", label: "Mountain Hike" },
        { color: "from-emerald-900 via-emerald-800 to-black", label: "Beauty Salon" }
    ];

    return (
        <div ref={container} className="h-[130vh] bg-black overflow-hidden relative flex gap-6 px-4 md:px-8 -mt-[100px] pt-[200px]">
            <Column items={[...col1, ...col1]} y={y1} />
            <Column items={[...col2, ...col2]} y={y2} />
            <Column items={[...col3, ...col3]} y={y3} />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center pointer-events-none">
                <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-white mix-blend-difference leading-[0.8]">
                    Visual <br /> Impact
                </h1>
            </div>

            {/* Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
        </div>
    );
}
