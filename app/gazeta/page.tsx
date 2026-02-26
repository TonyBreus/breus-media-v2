import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { MarqueeSection } from "@/components/gazeta/MarqueeSection";
import { NichesStack } from "@/components/gazeta/NichesStack";
import { FinalFormSection } from "@/components/gazeta/FinalFormSection";

export const metadata = {
    title: "Site Gazeta - Breus Media",
    description: "Агентство визуального продакшена и AI",
};

export default function GazetaPage() {
    return (
        <main className="bg-black text-white min-h-[100vh]">
            <SmartHeader />
            <HeroSection />

            {/* Marquee appears right after Hero */}
            <MarqueeSection />

            {/* Stacking Cards */}
            <NichesStack />

            {/* Final Form Layer */}
            <FinalFormSection />

            <DebugWrapper id={100} label="Main Content Container">
                <div className="hidden" />
            </DebugWrapper>
        </main>
    );
}
