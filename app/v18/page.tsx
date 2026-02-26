"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV18 from "@/components/v18/HeaderV18";
import HeroV18 from "@/components/v18/HeroV18";
import PainBlock from "@/components/PainBlock";
import ServicesBento from "@/components/ServicesBento";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV18() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV18 />
                <HeroV18 />

                <PainBlock />
                <ServicesBento />
                <AISection />
                <Contact />
            </main>
        </ReactLenis>
    );
}
