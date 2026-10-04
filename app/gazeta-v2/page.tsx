import type { Metadata } from "next";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { GazetaFaqSection } from "@/components/gazeta/GazetaFaqSection";
import { GazetaMinimalFooter } from "@/components/gazeta/GazetaMinimalFooter";
import { DroneContactStitch } from "@/components/drone/DroneContactStitch";
import { gazetaFaqItems } from "@/components/gazeta/gazetaCatalogData";
import { GazetaPortfolioV2 } from "@/components/gazeta/v2/GazetaPortfolioV2";
import { GazetaIndustryPickerV2 } from "@/components/gazeta/v2/GazetaIndustryPickerV2";
import { GazetaPackagesV2, GazetaProcessV2 } from "@/components/gazeta/v2/GazetaPackagesV2";

export const metadata: Metadata = {
    title: "Видео, аэросъёмка, 360° туры и AI-контент в Грузии | Breus Media | V2",
    description:
        "Видео, аэросъёмка, 360° туры и AI-контент для бизнеса в Тбилиси и по всей Грузии. Готовые материалы от 24 часов, официальный B2B-договор.",
    robots: { index: false, follow: false },
};

// Proof without unverified numbers (see plan: open question #2)
const PROOF = [
    { value: "4K & FPV", label: "дроны DJI" },
    { value: "24–48ч", label: "сдача материалов" },
    { value: "B2B", label: "официальный договор" },
    { value: "Вся Грузия", label: "выезд на объект" },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gazetaFaqItems.ru.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function GazetaV2Page() {
    return (
        <main className="relative w-full bg-black text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <SmartHeader
                isLanding
                showTickers={false}
                sectionLinks={[
                    { label: "Работы", href: "#portfolio" },
                    { label: "Цены", href: "#pricing" },
                    { label: "FAQ", href: "#faq" },
                ]}
                ctaHref="#contact"
                initialLang="RU"
                languageLinks={{ RU: "/gazeta-v2", EN: "/gazeta/en" }}
            />

            <div className="relative z-10">
                <HeroSection lang="ru" />
            </div>

            <section className="relative z-20 border-y border-white/10 bg-[#0A0A0A] py-6">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-4 md:grid-cols-4 md:divide-x md:divide-white/10">
                    {PROOF.map((s) => (
                        <div key={s.value} className="flex flex-col items-center text-center">
                            <span className="text-xl sm:text-2xl font-black text-[#FFD23F]">{s.value}</span>
                            <span className="text-xs uppercase tracking-wider text-white/60">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="relative z-20">
                <GazetaPortfolioV2 />
                <GazetaIndustryPickerV2 />
                <GazetaPackagesV2 />
                <GazetaProcessV2 />

                <div className="bg-black px-4 py-10 md:py-14">
                    <GazetaFaqSection lang="ru" />
                </div>

                <div id="contact" className="scroll-mt-20 bg-[#050505] px-4 pt-10 pb-6">
                    <DroneContactStitch lang="ru" />
                </div>
                <GazetaMinimalFooter lang="ru" />
            </div>
        </main>
    );
}
