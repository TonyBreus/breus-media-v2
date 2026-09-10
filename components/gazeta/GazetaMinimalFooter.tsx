import React from "react";

type GazetaLang = "ru" | "en";

export function GazetaMinimalFooter({ lang = "ru" }: { lang?: GazetaLang }) {
    return (
        <footer className="w-full border-t border-white/10 bg-black">
            <div className="mx-auto w-full max-w-7xl px-4 py-2 md:px-6 md:py-2.5">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] text-white md:flex-nowrap md:text-[12px]">
                    <span className="font-black uppercase tracking-[0.08em] text-white">BREUS MEDIA</span>
                    <span className="text-[#D4AF37]/80">|</span>
                    <span>{lang === "en" ? "Tbilisi, Georgia" : "Тбилиси, Грузия"}</span>
                    <span className="text-[#D4AF37]/80">|</span>
                    <a href="tel:+995501103183" className="transition-colors hover:text-[#D4AF37]">
                        +995 501 103 183
                    </a>
                    <span className="text-[#D4AF37]/80">|</span>
                    <a href="mailto:hello@breus.media" className="transition-colors hover:text-[#D4AF37]">
                        hello@breus.media
                    </a>
                </div>

                <p className="pt-1 text-center text-[9px] uppercase tracking-[0.24em] text-white/40 md:pt-1.5 md:text-[10px]">
                    © 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
