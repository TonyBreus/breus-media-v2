"use client";
import React from "react";
import Link from "next/link";
import { Phone, Send, MessageCircle, Mail } from "lucide-react";

export function DroneFooter() {
    return (
        <footer className="bg-[#0D0D0D] border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Branding */}
                    <div>
                        <span className="text-[#00AAFF] font-bold text-sm uppercase tracking-[0.15em]">
                            Breus Media · Аэросъёмка
                        </span>
                        <p className="text-sm text-white/40 mt-3 leading-relaxed">
                            Профессиональная дрон-съёмка в Грузии. Тбилиси, Батуми и регионы.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                            Навигация
                        </h4>
                        <div className="flex flex-col gap-2">
                            {[
                                { label: "Услуги", href: "#services" },
                                { label: "Кому", href: "#who" },
                                { label: "FAQ", href: "#faq" },
                                { label: "Контакт", href: "#contact" },
                                { label: "← Главная", href: "/gazeta" },
                            ].map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm text-white/50 hover:text-white transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                            Связаться
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a href="tel:+995574619393" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" /> +995 574 619 393
                            </a>
                            <a href="https://wa.me/995574619393" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                                <MessageCircle className="w-4 h-4" /> WhatsApp
                            </a>
                            <a href="mailto:hello@breus.media" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" /> hello@breus.media
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/30">
                        © 2026 Breus Media. Все права защищены.
                    </p>
                    <p className="text-xs text-white/20">
                        Тбилиси · Батуми · Грузия
                    </p>
                </div>
            </div>
        </footer>
    );
}
