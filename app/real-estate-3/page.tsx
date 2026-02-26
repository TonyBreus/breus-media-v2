"use client";

import HeroSection from "@/components/real-estate-3/HeroSection";
import ProblemSection from "@/components/real-estate-3/ProblemSection";
import ServicesBento from "@/components/real-estate-3/ServicesBento";
import ROINumbers from "@/components/real-estate-3/ROINumbers";
import PricingSection from "@/components/real-estate-3/PricingSection";
import LeadGenFAQ from "@/components/real-estate-3/LeadGenFAQ";

export default function RealEstate3Page() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* 1. Hero — Light */}
            <HeroSection />

            {/* 2. Problem — Dark */}
            <ProblemSection />

            {/* 3. Services Hub — Light */}
            <ServicesBento />

            {/* 4. ROI & Numbers — Dark */}
            <ROINumbers />

            {/* 5. Pricing — Light */}
            <PricingSection />

            {/* 6. Lead Gen & FAQ — Dark */}
            <LeadGenFAQ />

            {/* Footer */}
            <footer className="py-10 bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
                        © 2026 Breus Media · Real Estate Division
                    </span>
                </div>
            </footer>
        </main>
    );
}
