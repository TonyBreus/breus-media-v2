"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const Column = ({ images, y = 0 }: { images: string[], y?: any }) => {
    return (
        <motion.div style={{ y }} className="w-full md:w-1/3 flex flex-col gap-6">
            {images.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white/5 border border-white/10 group">
                    {/* This would be an <Image/> in production */}
                    <div className={`w-full h-full bg-gradient-to-br ${src} group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100 flex items-center justify-center`}>
                        <span className="font-bold uppercase tracking-widest text-white/50 text-xl group-hover:text-white mix-blend-overlay">
                            View Case
                        </span>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default function HeroScroll() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]); // Reverse direction
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]); // Fast

    const col1 = ["from-blue-900 to-black", "from-purple-900 to-black", "from-indigo-900 to-black"]; // Drone, Hotel, Sport
    const col2 = ["from-red-900 to-black", "from-orange-900 to-black", "from-yellow-900 to-black"]; // Auto, Food, Retail
    const col3 = ["from-green-900 to-black", "from-emerald-900 to-black", "from-teal-900 to-black"]; // Medical, Hike, Event

    return (
        <div ref={container} className="h-[120vh] bg-black overflow-hidden relative flex gap-6 px-4 md:px-12 pt-[150px]">
            <Column images={[...col1, ...col1]} y={y1} />
            <Column images={[...col2, ...col2]} y={y2} />
            <Column images={[...col3, ...col3]} y={y3} />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center items-center text-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6 text-white mix-blend-difference"
                >
                    Digital <br /> Presence <br /> System
                </motion.h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mix-blend-difference">
                    Бизнес выбирают глазами
                </p>
            </div>

            {/* Gradient Fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-20" />
        </div>
    );
}
