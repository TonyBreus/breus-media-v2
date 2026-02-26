"use client";
import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ContactDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Contact options"
            >
                <Phone className="w-5 h-5 text-white" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-3 w-64 bg-zinc-900 border border-white/10 text-white p-4 shadow-xl z-50 flex flex-col gap-4 text-sm"
                    >
                        {/* Phones */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/50 uppercase text-xs tracking-wider">Numbers</span>
                            <a href="tel:+995555123456" className="hover:text-[#D4AF37] transition-colors flex justify-between">
                                <span>GEO/EN</span>
                                <span className="font-mono">+995 555 12 34 56</span>
                            </a>
                            <a href="tel:+79991234567" className="hover:text-[#D4AF37] transition-colors flex justify-between">
                                <span>RU</span>
                                <span className="font-mono">+7 999 123 45 67</span>
                            </a>
                        </div>

                        <div className="h-px bg-white/10 w-full" />

                        {/* Messengers */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/50 uppercase text-xs tracking-wider">Messengers</span>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-[#D4AF37] transition-colors p-1" title="WhatsApp">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-[#D4AF37] transition-colors p-1" title="Telegram">
                                    <Send className="w-5 h-5" />
                                </a>
                                <a href="#" className="hover:text-[#D4AF37] transition-colors p-1" title="Viber">
                                    <Phone className="w-5 h-5" /> {/* Placeholder for Viber */}
                                </a>
                            </div>
                        </div>

                        <div className="h-px bg-white/10 w-full" />

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/50 uppercase text-xs tracking-wider">Email</span>
                            <a href="mailto:hello@breus.media" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                hello@breus.media
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
