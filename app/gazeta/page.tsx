import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { MarqueeSection } from "@/components/gazeta/MarqueeSection";

export const metadata = {
    title: "Site Gazeta - Breus Media",
    description: "Агентство визуального продакшена и AI",
};

export default function GazetaPage() {
    return (
        <main className="bg-black text-white min-h-[300vh]">
            <SmartHeader />
            <HeroSection />

            {/* Marquee appears right after Hero */}
            <MarqueeSection />

            <DebugWrapper id="page-wrapper" label="Main Content Container">
                <div className="hidden" />
            </DebugWrapper>
        </main>
    );
}
