"use client";

import HeroSection from "@/components/real-estate/HeroSection";
import ProblemBlock from "@/components/real-estate/ProblemBlock";
import SolutionsGrid from "@/components/real-estate/SolutionsGrid";
import ProofSection from "@/components/real-estate/ProofSection";
import LeadMagnet from "@/components/real-estate/LeadMagnet";

export default function RealEstatePage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon-cyan selection:text-black overflow-x-hidden">
            <HeroSection />
            <ProblemBlock />
            <SolutionsGrid />
            <ProofSection />
            <LeadMagnet />

            {/* Minimal Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-700 font-bold">
                        © 2026 Breus Media · Real Estate Division
                    </span>
                </div>
            </footer>
        </main>
    );
}
