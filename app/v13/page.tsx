"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV13 from "@/components/v13/HeaderV13";
import HeroV13 from "@/components/v13/HeroV13";
import ServicesBentoV12 from "@/components/v12/ServicesBentoV12"; // Reusing v12 Bento
import PainBlock from "@/components/PainBlock"; // Reusing v11
import AISection from "@/components/AISection"; // Reusing v11
import Contact from "@/components/Contact"; // Reusing shared

export default function PageV13() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV13 />
                <HeroV13 />

                <div className="relative z-20 bg-black">
                    <PainBlock />
                    <ServicesBentoV12 />
                    <AISection />
                    <Contact />

                    <footer className="py-8 text-center text-gray-800 text-xs uppercase tracking-widest border-t border-white/5">
                        © 2024 Breus Media. All rights reserved.
                    </footer>
                </div>
            </main>
        </ReactLenis>
    );
}
