"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV17 from "@/components/v17/HeaderV17";
import HeroV17 from "@/components/v17/HeroV17";
import PainBlock from "@/components/PainBlock";
import ServicesBento from "@/components/ServicesBento";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV17() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV17 />
                <HeroV17 />

                <PainBlock />
                <ServicesBento />
                <AISection />
                <Contact />
            </main>
        </ReactLenis>
    );
}
