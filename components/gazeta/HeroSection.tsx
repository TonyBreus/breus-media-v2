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

    // Start shrinking text when scrolled 20% down hero 
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.4, 0.4]);
    // Start at 40vh, move up by 36vh -> ends at 4vh (approx top of viewport)
    const yTranslate = useTransform(scrollYProgress, [0, 0.4, 1], ["0vh", "-36vh", "-36vh"]);

    // Fade out original opacity ONLY for the scroll indicator down arrow
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <DebugWrapper id={11} label="Hero Section">
            <section ref={containerRef} className="relative w-full h-[200vh]">
                {/* Kinetic Text, moved out of sticky div to become global fixed */}
                <DebugWrapper id={13} label="Kinetic Typography" className="fixed w-full flex justify-center z-[60] pointer-events-none top-[40vh] left-0 mt-4 md:mt-0">
                    <motion.h1
                        style={{ scale, y: yTranslate, transformOrigin: 'center' }}
                        className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap font-sans"
                    >
                        Breus Media
                    </motion.h1>
                </DebugWrapper>

                <div className="sticky top-0 w-full h-screen overflow-hidden flex items-end justify-center bg-zinc-950">

                    {/* Background Video */}
                    <DebugWrapper id={12} label="Video Background" className="absolute top-0 left-0 w-full h-full z-0">
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

                    {/* Scroll Down Indicator */}
                    <DebugWrapper id={14} label="Scroll Indicator" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                        <motion.div
                            style={{ opacity: indicatorOpacity }}
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
