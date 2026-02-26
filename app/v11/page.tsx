"use client";

import HeaderLanding from "@/components/HeaderLanding";
import HeroLanding from "@/components/HeroLanding";
import PainBlock from "@/components/PainBlock";
import ServicesBento from "@/components/ServicesBento";
import AISection from "@/components/AISection";
import Contact from "@/components/Contact"; // Reusing existing Contact block

export default function PageV11() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-white">
            <HeaderLanding />

            <HeroLanding />
            <PainBlock />
            <ServicesBento />
            <AISection />

            {/* Footer / Contact */}
            <section className="bg-black py-20 border-t border-white/10 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                        Визуал — это доверие. <br />
                        Готовы усилить <span className="text-brand">присутствие?</span>
                    </h2>
                    <a href="https://wa.me/99500000000" className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-green-500 transition-all text-lg shadow-lg shadow-green-900/20">
                        Написать в WhatsApp
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
}
