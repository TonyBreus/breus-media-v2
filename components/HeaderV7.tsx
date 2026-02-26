"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function HeaderV7() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-white/10 backdrop-blur-md h-[80px] flex items-center">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">

                {/* Left: Brand Identity */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-2xl font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity">
                        Breus Media
                    </Link>
                    <div className="hidden md:block w-px h-8 bg-white/20"></div>
                    <span className="hidden md:block text-xs font-bold text-brand uppercase tracking-widest">
                        Digital & AI Agency
                    </span>
                </div>

                {/* Right: Contacts & CTA */}
                <div className="flex items-center gap-6 md:gap-10">
                    <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <a href="mailto:hello@breus.media" className="hover:text-white flex items-center gap-2 transition-colors">
                            <Mail className="w-4 h-4 text-brand" /> hello@breus.media
                        </a>
                        <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand" /> +995 555 000 000
                        </span>
                    </div>

                    <Link href="#contact" className="btn-primary bg-white text-black px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wide hover:bg-brand hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                        Обсудить задачу
                    </Link>
                </div>

            </div>
        </header>
    );
}
