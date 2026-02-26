"use client";

import { type LucideIcon } from "lucide-react";

interface MediaPlaceholderProps {
    icon: LucideIcon;
    label: string;
    className?: string;
    aspect?: "video" | "square" | "wide";
}

export default function MediaPlaceholder({
    icon: Icon,
    label,
    className = "",
    aspect = "video",
}: MediaPlaceholderProps) {
    const aspectClass =
        aspect === "video"
            ? "aspect-video"
            : aspect === "square"
                ? "aspect-square"
                : "aspect-[21/9]";

    return (
        <div
            className={`relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 flex flex-col items-center justify-center gap-4 group ${aspectClass} ${className}`}
        >
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-all duration-700" />

            <Icon className="w-10 h-10 text-white/20 group-hover:text-neon-cyan/40 transition-colors relative z-10" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-bold text-center px-6 leading-relaxed relative z-10">
                {label}
            </span>
        </div>
    );
}
