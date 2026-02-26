"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV20 from "@/components/v20/HeaderV20";
import HeroV20 from "@/components/v20/HeroV20";
import PainBlock from "@/components/PainBlock";
import ServicesBento from "@/components/ServicesBento";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV20() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV20 />
                <HeroV20 />

                <PainBlock />
                <ServicesBento />
                <AISection />
                <Contact />
            </main>
        </ReactLenis>
    );
}
