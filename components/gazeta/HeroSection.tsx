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
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.5, 0.5]);
    // The text moves up to become part of the header. The header is h-[56px]. The text starts centered. We will translate it up based on its height.
    const yTranslate = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "-45vh", "-45vh"]);

    // Fade out original opacity
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 0]);

    return (
        <DebugWrapper id={11} label="Hero Section">
            <section ref={containerRef} className="relative w-full h-[200vh]">
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

                    {/* Kinetic Text */}
                    <DebugWrapper id={13} label="Kinetic Typography" className="w-full h-full flex items-center justify-center pt-20 z-10 pointer-events-none absolute top-0 left-0">
                        <motion.h1
                            style={{ scale, y: yTranslate, opacity }}
                            className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap font-sans mt-[30vh]"
                        >
                            Breus Media
                        </motion.h1>
                    </DebugWrapper>

                    {/* Scroll Down Indicator */}
                    <DebugWrapper id={14} label="Scroll Indicator" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                        <motion.div
                            style={{ opacity }}
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
