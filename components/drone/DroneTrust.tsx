"use client";
import React from "react";

const badges = ["Застройщик", "Отель", "Агентство", "Девелопер", "Инвестор", "ЖК"];

export function DroneTrust() {
    return (
        <section id="trust" className="bg-[#111318] border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/40 shrink-0">
                    Работаем с
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                    {badges.map((b) => (
                        <span
                            key={b}
                            className="px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/40 uppercase tracking-wider hover:text-white/70 hover:border-white/20 transition-all duration-200 cursor-default"
                        >
                            {b}
                        </span>
                    ))}
                </div>
                <span className="text-[13px] text-white/30 hidden lg:block shrink-0">
                    Тбилиси · Батуми · Грузия
                </span>
            </div>
        </section>
    );
}
