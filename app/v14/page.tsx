"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV14 from "@/components/v14/HeaderV14";
import HeroV14 from "@/components/v14/HeroV14";
import ServicesBentoV12 from "@/components/v12/ServicesBentoV12";
import PainBlock from "@/components/PainBlock";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV14() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV14 />
                <HeroV14 />

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
