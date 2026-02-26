"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Translates the text upwards faster than the scroll
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <DebugWrapper id="hero" label="Hero Section">
            {/* 
        h-[150vh] gives scrolling space for the hero effect to happen 
        before the next section fully takes over. If we want standard sticky hero:
        We make it h-[150vh] and make the inner content sticky top.
      */}
            <section ref={containerRef} className="relative w-full h-[120vh]">
                <div className="sticky top-0 w-full h-screen overflow-hidden flex items-end justify-center bg-zinc-950">

                    {/* Background Video */}
                    <DebugWrapper id="hero-bg" label="Video Background" className="absolute top-0 left-0 w-full h-full z-0">
                        {/* Placeholder highly optimized video for now */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-50"
                        >
                            <source src="https://cdn.pixabay.com/video/2021/08/04/83866-584724838_tiny.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </DebugWrapper>

                    {/* Kinetic Text */}
                    <DebugWrapper id="hero-text" label="Kinetic Typography" className="w-full px-4 pb-24 md:pb-32 flex justify-center z-10 pointer-events-none">
                        <motion.h1
                            style={{ y: textY, opacity }}
                            className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap font-sans"
                        >
                            Breus Media
                        </motion.h1>
                    </DebugWrapper>

                    {/* Scroll Down Indicator */}
                    <DebugWrapper id="hero-scroll" label="Scroll Indicator" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md"
                        >
                            <ArrowDown className="w-5 h-5 text-white" />
                        </motion.div>
                    </DebugWrapper>

                </div>
            </section>
        </DebugWrapper>
    );
}
