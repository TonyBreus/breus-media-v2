"use client";

import { type LucideIcon } from "lucide-react";

interface PlaceholderProps {
    icon: LucideIcon;
    text: string;
    className?: string;
    theme?: "dark" | "light";
}

export default function Placeholder({
    icon: Icon,
    text,
    className = "",
    theme = "dark",
}: PlaceholderProps) {
    const bg = theme === "dark" ? "bg-[#1F2937]" : "bg-[#F3F4F6]";
    const textColor = theme === "dark" ? "text-gray-500" : "text-gray-400";
    const iconColor = theme === "dark" ? "text-gray-600" : "text-gray-300";
    const border = theme === "dark" ? "border-gray-700" : "border-gray-200";

    return (
        <div
            className={`relative overflow-hidden rounded-2xl ${bg} border ${border} flex flex-col items-center justify-center gap-4 ${className}`}
        >
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px), linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
            <Icon className={`w-10 h-10 ${iconColor} relative z-10`} />
            <span
                className={`text-[10px] uppercase tracking-[0.15em] ${textColor} font-bold text-center px-8 leading-relaxed relative z-10 max-w-sm`}
            >
                {text}
            </span>
        </div>
    );
}
