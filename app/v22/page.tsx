"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV22 from "@/components/v22/HeaderV22";
import HeroV22 from "@/components/v22/HeroV22";
import PainBlockV22 from "@/components/v22/PainBlockV22";
import ServicesV21 from "@/components/v21/ServicesV21";
import AISectionV22 from "@/components/v22/AISectionV22";
import Contact from "@/components/Contact";

export default function PageV22() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV22 />
                <HeroV22 />

                <PainBlockV22 />
                <ServicesV21 />
                <AISectionV22 />
                <Contact />
            </main>
        </ReactLenis>
    );
}
