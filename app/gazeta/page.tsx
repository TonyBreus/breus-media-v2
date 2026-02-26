import { DebugWrapper } from "@/components/debug/DebugWrapper";

export const metadata = {
    title: "Site Gazeta - Breus Media",
    description: "Агентство визуального продакшена и AI",
};

export default function GazetaPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <DebugWrapper id="page-wrapper" label="Main Container">
                {/* Placeholder components */}
                <div className="h-screen w-full flex items-center justify-center border-b border-white/20">
                    <h1 className="text-4xl">Smart Header & Hero Placeholder</h1>
                </div>
            </DebugWrapper>
        </main>
    );
}
