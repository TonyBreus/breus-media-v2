import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ScannerBannerProps {
    lang?: "ru" | "en";
    variant?: "banner" | "pill";
}

export function ScannerBanner({ lang = "ru", variant = "banner" }: ScannerBannerProps) {
    const isEn = lang === "en";

    if (variant === "pill") {
        return (
            <div className="w-full max-w-lg mx-auto px-4 mb-4 text-center">
                <Link 
                    href="/audit"
                    className="inline-flex items-center gap-2 rounded-full border border-[#FFD23F]/35 bg-[#121212] px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                >
                    <span className="text-[#FFD23F]">⚡ {isEn ? "Free business audit" : "Бесплатный аудит бизнеса"}</span>
                    <span className="text-white/80">·</span>
                    <span className="text-[#FFD23F] underline underline-offset-2">
                        {isEn ? "Personal review within 24h →" : "Персональный разбор за 24 часа →"}
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1500px] mx-auto px-1 sm:px-4">
            <div className="w-full rounded-[18px] border border-[#FFD23F]/35 bg-[#121212] p-4 sm:p-5 text-white mb-4 relative overflow-hidden shadow-lg">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
                    <div className="flex-1 text-left min-w-0">
                        <h3 className="text-sm sm:text-base font-bold uppercase text-white mb-1 tracking-tight">
                            {isEn
                                ? "FREE AUDIT OF YOUR BUSINESS"
                                : "БЕСПЛАТНЫЙ АУДИТ ВАШЕГО БИЗНЕСА"}
                        </h3>
                        <p className="text-xs text-white/75 leading-relaxed">
                            {isEn
                                ? "Discover where you are losing clients right now. We will check your website, Google Maps profile, and video marketing — and send a personal breakdown within 24 hours."
                                : "Узнайте, где вы теряете клиентов прямо сейчас. Проверим сайт, карточку в Google Картах и видеомаркетинг — пришлём персональный разбор в течение 24 часов."}
                        </p>
                    </div>
                    <div className="w-full sm:w-auto shrink-0">
                        <Link 
                            href="/audit"
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold bg-[#FFD23F] text-black rounded-[10px] hover:bg-white transition-colors whitespace-nowrap shadow-sm"
                        >
                            {isEn ? "Get personal breakdown →" : "Получить персональный разбор →"}
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
