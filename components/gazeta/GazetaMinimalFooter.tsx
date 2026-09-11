import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

type GazetaLang = "ru" | "en";

export function GazetaMinimalFooter({ lang = "ru" }: { lang?: GazetaLang }) {
    const isEn = lang === "en";
    const menuItems = isEn
        ? [
              { label: "Aerial Filming", href: "/drone-service/en" },
              { label: "360° Tours", href: "/360-tours-service/en" },
              { label: "Reels & Shorts", href: "/reels-service/en" },
              { label: "AI Visualization", href: "/ai-visualization-service/en" },
          ]
        : [
              { label: "Аэросъёмка", href: "/drone-service" },
              { label: "360° туры", href: "/360-tours-service" },
              { label: "Reels & Shorts", href: "/reels-service" },
              { label: "AI-Визуализация", href: "/ai-visualization-service" },
          ];

    const socials = [
        { label: "Instagram", href: "https://www.instagram.com/breusmedia", icon: Instagram },
        { label: "Telegram", href: "https://t.me/breusmedia", icon: Send },
        { label: "Facebook", href: "https://www.facebook.com/breusmedia", icon: Facebook },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/breusmedia", icon: Linkedin },
    ];

    return (
        <footer className="w-full border-t border-white/10 bg-[#050505] py-4 md:py-5">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
                {/* Top Row: Menu & Links + Contact Pill */}
                <div className="flex flex-col items-center justify-between gap-3 pb-3 md:flex-row md:gap-4 border-b border-white/10">
                    <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 md:justify-start">
                        <span className="text-[#FFD23F] font-bold text-xs uppercase tracking-[0.2em]">
                            {isEn ? "MENU" : "МЕНЮ"}
                        </span>
                        <span className="text-[#FFD23F] text-xs font-bold select-none">•</span>
                        {menuItems.map((item, idx) => (
                            <React.Fragment key={item.label}>
                                <Link
                                    href={item.href}
                                    className="text-xs font-medium text-white/75 transition-colors hover:text-[#FFD23F]"
                                >
                                    {item.label}
                                </Link>
                                {idx < menuItems.length - 1 && (
                                    <span className="text-[#FFD23F] text-xs font-bold select-none">•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs text-white/90 shadow-sm backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                        <span className="text-white/60 font-medium">
                            {isEn ? "Contact: Tbilisi, Georgia" : "Контакты: Тбилиси, Грузия"} ·
                        </span>
                        <a
                            href="tel:+995501103183"
                            className="font-semibold text-white hover:text-[#FFD23F] transition-colors"
                        >
                            +995 501 103 183
                        </a>
                    </div>
                </div>

                {/* Bottom Row: Logo, Mission, Socials (with safety padding for floating WhatsApp button) */}
                <div className="flex flex-col items-center gap-3 pt-3 md:flex-row md:justify-between md:gap-4">
                    <div className="flex items-center text-left text-[18px] font-black uppercase tracking-tighter text-white md:w-[25%]">
                        <Link href={isEn ? "/gazeta/en" : "/gazeta"} className="hover:opacity-85 transition-opacity">
                            BREUS MEDIA <span className="text-[#FFD23F] font-extrabold">•</span>
                        </Link>
                    </div>
                    <p className="w-full text-center text-xs md:text-[13px] leading-relaxed text-white/70 md:w-[45%] md:text-left">
                        {isEn
                            ? "Visual production and digital solutions for business in Georgia: creating brand stories from the capital to the coast."
                            : "Визуальный контент и digital-решения для бизнеса в Грузии: создаем историю бренда от столицы до побережья."}
                    </p>
                    <div className="flex w-full items-center justify-center gap-2.5 md:w-[30%] md:justify-end pr-0 sm:pr-16 md:pr-20">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 shadow-sm backdrop-blur-md transition-all hover:border-[#FFD23F] hover:bg-[#FFD23F]/15 hover:text-[#FFD23F] hover:shadow-[0_0_12px_rgba(255,210,63,0.3)]"
                            >
                                <social.icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                            </a>
                        ))}
                        <p className="ml-1 text-[10px] uppercase tracking-[0.2em] text-white/40">© 2026</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
