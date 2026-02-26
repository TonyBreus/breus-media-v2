"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function HeaderV8() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md h-[100px] flex items-center border-b border-white/5">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">

                {/* Left: Brand */}
                <Link href="/" className="text-3xl font-black uppercase tracking-tighter leading-none hover:opacity-80 transition-opacity">
                    Breus Media
                </Link>

                {/* Right: Stacked Layout */}
                <div className="flex flex-col items-end gap-2">

                    {/* Top: Button */}
                    <Link href="#contact" className="btn-primary bg-white text-black px-8 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-brand hover:text-white transition-all">
                        Обсудить задачу
                    </Link>

                    {/* Bottom: Contacts & Tagline */}
                    <div className="flex items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className="text-brand">Digital & AI Agency</span>
                        <span className="w-px h-3 bg-white/20"></span>
                        <a href="mailto:hello@breus.media" className="hover:text-white transition-colors">hello@breus.media</a>
                        <span className="text-gray-600">|</span>
                        <span>+995 555 000 000</span>
                    </div>

                </div>

            </div>
        </header>
    );
}
