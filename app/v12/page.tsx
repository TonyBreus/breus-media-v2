"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV12 from "@/components/v12/HeaderV12";
import HeroV12 from "@/components/v12/HeroV12";
import ServicesBentoV12 from "@/components/v12/ServicesBentoV12";
import PainBlock from "@/components/PainBlock"; // Reusing v11
import AISection from "@/components/AISection"; // Reusing v11
import Contact from "@/components/Contact"; // Reusing shared

export default function PageV12() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV12 />
                <HeroV12 />

                <div className="relative z-20 bg-black">
                    <PainBlock />
                    <ServicesBentoV12 />
                    <AISection />
                    <Contact />

                    {/* Footer simple wrapper since Contact is big */}
                    <footer className="py-8 text-center text-gray-800 text-xs uppercase tracking-widest border-t border-white/5">
                        © 2024 Breus Media. All rights reserved.
                    </footer>
                </div>
            </main>
        </ReactLenis>
    );
}
