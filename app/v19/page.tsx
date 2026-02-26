"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV19 from "@/components/v19/HeaderV19";
import HeroV19 from "@/components/v19/HeroV19";
import PainBlock from "@/components/PainBlock";
import ServicesBento from "@/components/ServicesBento";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV19() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV19 />
                <HeroV19 />

                <PainBlock />
                <ServicesBento />
                <AISection />
                <Contact />
            </main>
        </ReactLenis>
    );
}
