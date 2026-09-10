import type { Metadata } from "next";
import { BusinessAuditForm } from "@/components/scanner/BusinessAuditForm";
import LangSetter from "@/components/common/LangSetter";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { GazetaMinimalFooter } from "@/components/gazeta/GazetaMinimalFooter";

export const metadata: Metadata = {
    title: "Бесплатный аудит вашего бизнеса за 24 часа | Breus Media",
    description: "Узнайте, где ваш бизнес теряет клиентов прямо сейчас. Бесплатный аудит сайта, позиций в Google Maps и видеомаркетинга. Разбор в мессенджер за 24 часа.",
};

export default function AuditPage() {
    return (
        <main className="bg-black text-white min-h-[100vh] flex flex-col">
            <LangSetter lang="ru" />
            <SmartHeader
                isLanding={false}
                showTickers={false}
                sectionLinks={[]}
                ctaHref="/gazeta#contact"
                initialLang="RU"
                languageLinks={{ RU: "/audit", EN: "/audit" }}
            />
            
            <div className="flex-1 flex flex-col items-center justify-center py-12 sm:py-20 px-4 md:px-6 relative">
                {/* Background effects */}
                <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-[#FFD23F]/5 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD23F]/5 blur-[140px] rounded-full pointer-events-none" />
                
                <div className="w-full relative z-10">
                    <BusinessAuditForm lang="ru" />
                </div>
            </div>

            <GazetaMinimalFooter lang="ru" />
        </main>
    );
}
