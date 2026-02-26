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
        <DebugWrapper id={1} label="Smart Header">
            <header className={`fixed top-0 left-0 w-full z-50 flex items-start justify-between px-6 py-4 transition-colors duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
                {/* LEFT SECTION */}
                <DebugWrapper id={2} label="Left Section" className="flex-1 overflow-hidden">
                    <div className="h-6 flex items-center relative">
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
                                    <span className="font-serif text-lg leading-none tracking-wide text-white">Агентство</span>
                                    <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest mt-0.5">визуального продакшена и AI</span>
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
                <DebugWrapper id={3} label="Center Section" className="flex-1 flex justify-center flex-col items-center h-6">
                    <div className="flex flex-col items-center justify-center leading-none">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Tbilisi</span>
                        <TimeWidget />
                    </div>
                </DebugWrapper>

                {/* RIGHT SECTION */}
                <div className="flex-1 flex items-center justify-end gap-6 text-sm h-6">
                    {/* 1. CTA Button */}
                    <DebugWrapper id={4} label="CTA Button">
                        <a href="#contact" className="hidden sm:flex px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded border border-white hover:bg-black hover:text-white transition-colors h-full items-center">
                            Обсудить проект
                        </a>
                    </DebugWrapper>

                    {/* 2. Contact Dropdown (Phone) */}
                    <DebugWrapper id={5} label="Contact Dropdown">
                        <div className="flex items-center h-full">
                            <ContactDropdown />
                        </div>
                    </DebugWrapper>

                    {/* 3. Lang Switcher */}
                    <DebugWrapper id={6} label="Lang Switcher">
                        <div className="flex gap-2 text-[10px] items-center font-bold tracking-wider h-full">
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
                    </DebugWrapper>
                </div>
            </header>
        </DebugWrapper>
    );
}
