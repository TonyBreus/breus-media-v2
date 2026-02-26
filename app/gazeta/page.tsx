import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { SmartHeader } from "@/components/gazeta/SmartHeader";

export const metadata = {
    title: "Site Gazeta - Breus Media",
    description: "Агентство визуального продакшена и AI",
};

export default function GazetaPage() {
    return (
        <main className="bg-black text-white min-h-[200vh]">
            <SmartHeader />

            <DebugWrapper id="page-wrapper" label="Main Content Container">
                {/* Placeholder for Hero to allow scrolling */}
                <div className="h-screen w-full flex items-center justify-center border-b border-white/20 pt-24 pb-12 px-6">
                    <h1 className="text-4xl text-white/20 font-serif">Scroll down to test header...</h1>
                </div>
            </DebugWrapper>
        </main>
    );
}
