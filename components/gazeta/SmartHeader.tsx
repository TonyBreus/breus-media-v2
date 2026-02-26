"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { TimeWidget } from "./TimeWidget";
import { ContactDropdown } from "./ContactDropdown";
import { DebugWrapper } from "../debug/DebugWrapper";

export function SmartHeader() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [lang, setLang] = useState("RU");

    useMotionValueEvent(scrollY, "change", (latest) => {
        // If scrolled past 50px, switch state
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && isScrolled) {
            setIsScrolled(false);
        }
    });

    const links = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <DebugWrapper id="header" label="Smart Header">
            {/* 
        Header rests at the top, fixed. 
        Using a subtle blur/bg when scrolled can be good, 
        but reference says it should just be there.
      */}
            <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>

                {/* LEFT SECTION */}
                <DebugWrapper id="header-left" label="Left Section" className="flex-1">
                    <div className="h-12 flex items-center relative">
                        <AnimatePresence mode="wait">
                            {!isScrolled ? (
                                <motion.div
                                    key="text"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col"
                                >
                                    <span className="font-serif text-2xl leading-none tracking-wide text-white">Агентство</span>
                                    <span className="text-[#D4AF37] text-xs uppercase tracking-widest mt-0.5">визуального продакшена и AI</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="nav"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex gap-6 uppercase text-xs tracking-widest font-medium"
                                >
                                    {links.map((link) => (
                                        <a key={link.name} href={link.href} className="hover:text-[#D4AF37] transition-colors">
                                            {link.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </DebugWrapper>

                {/* CENTER SECTION */}
                <DebugWrapper id="header-center" label="Center Section" className="flex-1 flex justify-center flex-col items-center">
                    <span className="uppercase tracking-[0.2em] text-sm font-semibold">Tbilisi</span>
                    <TimeWidget />
                </DebugWrapper>

                {/* RIGHT SECTION */}
                <DebugWrapper id="header-right" label="Right Section" className="flex-1 flex items-center justify-end gap-6 text-sm">
                    {/* Lang Switcher */}
                    <div className="flex gap-2 text-xs font-semibold tracking-wider">
                        {["RU", "EN", "GE"].map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`transition-colors ${lang === l ? "text-white" : "text-white/40 hover:text-white"}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <ContactDropdown />

                    <a href="#contact" className="hidden sm:flex px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded border border-white hover:bg-black hover:text-white transition-colors">
                        Обсудить проект
                    </a>
                </DebugWrapper>
            </header>
        </DebugWrapper>
    );
}
