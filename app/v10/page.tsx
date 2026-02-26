"use client";

import HeaderV10 from "@/components/HeaderV10";

export default function PageV10() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
            <HeaderV10 />

            {/* Spacer to push content below fixed header + tickers height */}
            <div className="pt-[220px]">

                {/* Dark Content Placeholder */}
                <div className="h-[200vh] bg-black flex items-center justify-center opacity-20 pointer-events-none">
                    <h1 className="text-9xl font-black uppercase tracking-tighter text-white/5">
                        Content Scroll Area
                    </h1>
                </div>

            </div>
        </main>
    );
}
