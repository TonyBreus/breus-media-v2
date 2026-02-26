"use client";

import { ReactLenis } from '@studio-freight/react-lenis'
import HeaderV23 from "@/components/v23/HeaderV23";
import HeroV22 from "@/components/v22/HeroV22";
import PainBlockV23 from "@/components/v23/PainBlockV23";
import ServicesV21 from "@/components/v21/ServicesV21";
import AISectionV22 from "@/components/v22/AISectionV22";
import Contact from "@/components/Contact";

export default function PageV23() {
    return (
        <ReactLenis root>
            <main className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
                <HeaderV23 />
                <HeroV22 />

                <PainBlockV23 />
                <ServicesV21 />
                <AISectionV22 />
                <Contact />
            </main>
        </ReactLenis>
    );
}
