"use client";
import React, { useState, useEffect } from "react";

type TimeWidgetProps = {
    showSeconds?: boolean;
    compact?: boolean;
    className?: string;
};

export function TimeWidget({ showSeconds = true, compact = false, className = "" }: TimeWidgetProps) {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const tbTime = new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Tbilisi",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                ...(showSeconds ? { second: "2-digit" } : {}),
            });
            setTime(tbTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [showSeconds]);

    // Use a fixed width or monospace font to prevent jumping
    return (
        <span className={`font-mono tabular-nums leading-none ${compact ? "text-[9px] tracking-[0.16em]" : "text-[10px] md:text-xs tracking-widest"} text-white/90 ${className}`}>
            {time || (showSeconds ? "00:00:00" : "00:00")}
        </span>
    );
}
