import type { Metadata } from "next";
import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { AboutSection } from "@/components/gazeta/AboutSection";
import { HowWeWorkSection } from "@/components/gazeta/HowWeWorkSection";
import { ExperienceTrustSection } from "@/components/gazeta/ExperienceTrustSection";
import { GazetaMobileStepChooser } from "@/components/gazeta/GazetaMobileStepChooser";
import { NichesStack } from "@/components/gazeta/NichesStack";
import { DroneContactStitch } from "@/components/drone/DroneContactStitch";
import { DroneFooterStitch } from "@/components/drone/DroneFooterStitch";

export const metadata: Metadata = {
    title: "Видео, аэросъёмка, 360° туры и AI-контент в Грузии | Breus Media",
    description:
        "Breus Media — агентство визуального продакшена и AI-контента в Тбилиси. Выберите нишу, откройте направление и перейдите к конкретной услуге для недвижимости, отелей, ресторанов, клиник, авто, туризма и IT.",
    alternates: {
        canonical: "/gazeta",
    },
};

export default function GazetaPage() {
    const sectionLinks = [
        { label: "Ниши", href: "#niches-nav" },
        { label: "FAQ", href: "#niche-step-09" },
    ];

    return (
        <main className="bg-black text-white min-h-[100vh]">
            <SmartHeader isLanding showTickers={false} sectionLinks={sectionLinks} ctaHref="#niches-nav" />
            <div className="flex flex-col">
                <div className="order-1">
                    <HeroSection />
                </div>



                <section id="niches" className="order-3 md:order-3">
                    {/* Мобиль: двухколоночный chooser + сразу форма. Десктоп: NichesStack */}
                    <GazetaMobileStepChooser />
                    <div className="hidden md:block">
                        <NichesStack />
                    </div>
                </section>

                {/* Форма на мобиле — сразу после chooser'а, на десктопе скрыта (там форма внутри NichesStack шаг 10) */}
                <section className="md:hidden" style={{ order: 4 }}>
                    <DroneContactStitch />
                </section>

                <section id="about" className="order-5 md:hidden">
                    <AboutSection />
                </section>

                <section id="workflow" className="order-6 md:hidden">
                    <HowWeWorkSection />
                </section>

                <section id="experience" className="order-7 md:hidden">
                    <ExperienceTrustSection />
                </section>

                <section className="order-9 relative z-[110]">
                    <DroneFooterStitch />
                </section>
            </div>

            <DebugWrapper id={100} label="Main Content Container">
                <div className="hidden" />
            </DebugWrapper>
        </main>
    );
}
