"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

export function HeroSection2() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.25, 0.25]);

    // Animate straight up until it goes out of screen
    const yTranslate = useTransform(scrollYProgress, [0, 0.4, 1], ["0vh", "-120vh", "-120vh"]);

    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <DebugWrapper id={11} label="Hero Section 2">
            <section ref={containerRef} className="relative w-full h-[200vh]">
                <div className="sticky top-0 w-full h-screen overflow-hidden bg-zinc-950">

                    {/* Background Video */}
                    <DebugWrapper id={12} label="Video Background" className="absolute top-0 left-0 w-full h-full z-0">
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

                    {/* Kinetic Text sits physically at the bottom of the container */}
                    <div className="absolute bottom-10 left-0 w-full z-[60] flex justify-center pointer-events-none">
                        <DebugWrapper id={13} label="Kinetic Typography">
                            <motion.h1
                                style={{ scale, y: yTranslate, transformOrigin: 'bottom center' }}
                                className="text-[12vw] sm:text-[14vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap font-sans block"
                            >
                                Breus Media
                            </motion.h1>
                        </DebugWrapper>
                    </div>

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
