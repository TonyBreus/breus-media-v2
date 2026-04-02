import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { MarqueeSection } from "@/components/gazeta/MarqueeSection";
import { AboutSection } from "@/components/gazeta/AboutSection";
import { HowWeWorkSection } from "@/components/gazeta/HowWeWorkSection";
import { ExperienceTrustSection } from "@/components/gazeta/ExperienceTrustSection";
import { NichesStack } from "@/components/gazeta/NichesStack";

export const metadata = {
    title: "Site Gazeta - Breus Media",
    description: "Агентство визуального продакшена и AI",
};

export default function GazetaPage() {
    return (
        <main className="bg-black text-white min-h-[100vh]">
            <SmartHeader isLanding showTickers={false} />
            <HeroSection />

            {/* Marquee appears right after Hero */}
            <MarqueeSection />

            {/* About Studio — compact trust block, after hero/ticker, before service flow */}
            <AboutSection />

            {/* How We Work — 4-step process block, before FAQ/contact */}
            <HowWeWorkSection />

            {/* Experience Trust — industry breadth block, before FAQ/contact */}
            <ExperienceTrustSection />

            {/* Stacking Cards — includes step-09 (FAQ) and step-10 (contact form) */}
            <NichesStack />

            <DebugWrapper id={100} label="Main Content Container">
                <div className="hidden" />
            </DebugWrapper>
        </main>
    );
}
