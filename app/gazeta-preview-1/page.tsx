import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { ChooserLayoutCinema } from "@/components/gazeta/layouts/ChooserLayoutCinema";
import { DroneContactStitch } from "@/components/drone/DroneContactStitch";
import { AboutSection } from "@/components/gazeta/AboutSection";
import { DroneFooterStitch } from "@/components/drone/DroneFooterStitch";
import Link from "next/link";

export const metadata = {
    title: "Gazeta Preview 1 — Cinema Snap Carousel | Breus Media",
    description: "Preview 1: Cinema Snap Carousel layout for services and industries selector",
};

export default function GazetaPreview1Page() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Top Preview Switcher Bar */}
            <div className="sticky top-0 z-[100] flex items-center justify-between border-b border-white/10 bg-black/90 px-4 py-2 text-xs backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FFD23F] animate-pulse" />
                    <span className="font-mono font-bold text-[#FFD23F] uppercase">Preview 1: Cinema Carousel</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white/40 hidden sm:inline">Перейти:</span>
                    <Link
                        href="/gazeta-preview-1"
                        className="rounded-md bg-[#FFD23F] px-2.5 py-1 font-bold text-black text-[11px]"
                    >
                        1. Cinema
                    </Link>
                    <Link
                        href="/gazeta-preview-2"
                        className="rounded-md bg-white/10 px-2.5 py-1 font-medium text-white/70 hover:bg-white/20 text-[11px]"
                    >
                        2. Bento
                    </Link>
                    <Link
                        href="/gazeta-preview-3"
                        className="rounded-md bg-white/10 px-2.5 py-1 font-medium text-white/70 hover:bg-white/20 text-[11px]"
                    >
                        3. Drawer
                    </Link>
                </div>
            </div>

            <SmartHeader
                isLanding
                showTickers={false}
                ctaHref="#contact"
                initialLang="RU"
                languageLinks={{ RU: "/gazeta-preview-1", EN: "/gazeta-preview-1" }}
            />

            <HeroSection lang="ru" />

            <div id="niches">
                <ChooserLayoutCinema lang="ru" />
            </div>

            <DroneContactStitch lang="ru" />

            <div id="about">
                <AboutSection lang="ru" />
            </div>

            <DroneFooterStitch lang="ru" />
        </main>
    );
}
