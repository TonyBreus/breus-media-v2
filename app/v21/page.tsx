"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV20 from "@/components/v20/HeaderV20";
import HeroV21 from "@/components/v21/HeroV21"; // NEW
import PainBlock from "@/components/PainBlock";
import ServicesV21 from "@/components/v21/ServicesV21"; // NEW
import AISection from "@/components/AISection";
import Contact from "@/components/Contact";

export default function PageV21() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV20 />
                <HeroV21 />

                <PainBlock />
                <ServicesV21 />
                <AISection />
                <Contact />
            </main>
        </ReactLenis>
    );
}
