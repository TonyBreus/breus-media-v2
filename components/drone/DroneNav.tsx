"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowLeft } from "lucide-react";
import { DebugWrapper } from "../debug/DebugWrapper";

const navLinks = [
    { label: "Услуги", href: "#services" },
    { label: "Кому", href: "#who" },
    { label: "Цены", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакт", href: "#contact" },
];

export function DroneNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <DebugWrapper id={10000} label="Drone Navigation Header">
                <header
                    className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
                        ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl border-b border-white/5"
                        : "bg-transparent"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
                        {/* Left */}
                        <DebugWrapper id={10001} label="Drone Navigation Link Back">
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/gazeta"
                                    className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm font-medium"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span className="hidden sm:inline">Breus Media</span>
                                </Link>
                                <div className="w-px h-5 bg-white/10 hidden sm:block" />
                                <span className="text-[#00AAFF] font-bold text-sm uppercase tracking-[0.15em]">
                                    Аэросъёмка
                                </span>
                            </div>
                        </DebugWrapper>

                        {/* Center Links — Desktop */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navLinks.map((link, idx) => (
                                <DebugWrapper key={link.href} id={10010 + idx} label={`Nav Link: ${link.label}`}>
                                    <a
                                        href={link.href}
                                        className="text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </DebugWrapper>
                            ))}
                        </nav>

                        {/* Right */}
                        <div className="flex items-center gap-3">
                            <DebugWrapper id={10090} label="Header CTA Button">
                                <a
                                    href="#contact"
                                    className="hidden md:inline-flex bg-[#00AAFF] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
                                >
                                    Записаться
                                </a>
                            </DebugWrapper>
                            <button
                                className="md:hidden text-white"
                                onClick={() => setIsMobileOpen(true)}
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </header>
            </DebugWrapper>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-[#0D0D0D] flex flex-col"
                    >
                        <div className="flex items-center justify-between px-6 h-[70px]">
                            <span className="text-[#00AAFF] font-bold text-sm uppercase tracking-[0.15em]">
                                Аэросъёмка
                            </span>
                            <button onClick={() => setIsMobileOpen(false)} className="text-white">
                                <X className="w-7 h-7" />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[#00AAFF] transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.08 }}
                                onClick={() => setIsMobileOpen(false)}
                                className="mt-4 bg-[#00AAFF] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm"
                            >
                                Записаться
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
