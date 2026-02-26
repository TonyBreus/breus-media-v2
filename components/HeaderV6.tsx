"use client";

import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export default function HeaderV6() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">

            {/* Top Bar (Contacts) */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 text-[10px] md:text-xs uppercase tracking-widest text-gray-400">
                <div className="flex gap-4">
                    <a href="mailto:hello@breus.media" className="hover:text-white flex items-center gap-2"><Mail className="w-3 h-3" /> hello@breus.media</a>
                    <span className="hidden md:flex items-center gap-2"><Phone className="w-3 h-3" /> +995 555 000 000</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white"><Instagram className="w-3 h-3" /></a>
                    <a href="#" className="hover:text-white"><Linkedin className="w-3 h-3" /></a>
                </div>
            </div>

            {/* Main Bar */}
            <div className="px-4 py-4 md:py-6 flex justify-between items-center container mx-auto">
                <div className="flex flex-col">
                    <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
                        Breus Media
                    </Link>
                    <span className="text-[10px] md:text-xs text-brand font-bold tracking-widest mt-1">Digital & AI Agency</span>
                </div>

                <Link href="#contact" className="hidden md:block btn-primary bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-brand hover:text-white transition-all">
                    Обсудить задачу
                </Link>
            </div>
        </header>
    );
}
