"use client";
import React, { useState, useEffect } from "react";

export function TimeWidget() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const tbTime = new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Tbilisi",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(tbTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Use a fixed width or monospace font to prevent jumping
    return (
        <span className="font-mono text-sm tracking-widest tabular-nums opacity-80">
            {time || "00:00:00"}
        </span>
    );
}
