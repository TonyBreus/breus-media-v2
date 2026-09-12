"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Send, Phone, X, MessageCircle } from "lucide-react";

type GazetaLang = "ru" | "en";

interface FloatingWhatsAppButtonProps {
    lang?: GazetaLang;
    text?: string;
    href?: string;
}

export function FloatingWhatsAppButton({ lang, text, href }: FloatingWhatsAppButtonProps) {
    const pathname = usePathname();
    
    // Hide this global button on V3, V4, V5, V6, V7, V8 and V9 where we have the specific A/B widget
    if (pathname?.includes('/drone-service-v3') || pathname?.includes('/drone-service-v4') || pathname?.includes('/drone-service-v5') || pathname?.includes('/drone-service-v6') || pathname?.includes('/drone-service-v7') || pathname?.includes('/drone-service-v8') || pathname?.includes('/drone-service-v9')) return null;

    const isEn = lang ? lang === "en" : pathname?.endsWith("/en") || pathname?.includes("/en/");
    const isDrone = pathname?.includes("/drone");
    const defaultText = isEn
        ? isDrone
            ? "Hello! I would like to discuss drone aerial filming in Georgia."
            : "Hello! I would like to discuss a visual production project in Georgia."
        : isDrone
            ? "Здравствуйте! Хочу обсудить аэросъёмку дроном в Тбилиси / Грузии."
            : "Здравствуйте! Хочу обсудить задачу по съёмке / визуальному контенту в Тбилиси.";
    const resolvedText = text ?? defaultText;
    const resolvedWhatsAppHref =
        href ??
        `https://wa.me/995501103183?text=${encodeURIComponent(resolvedText)}`;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Показываем плавающую кнопку только после скролла ниже Hero (> 150px)
            setIsVisible(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleDrawerChange = (e: Event) => {
            const customEvent = e as CustomEvent<{ isOpen?: boolean }>;
            if (customEvent.detail?.isOpen !== undefined) {
                setIsDrawerOpen(customEvent.detail.isOpen);
                if (customEvent.detail.isOpen) setIsMenuOpen(false);
            }
        };

        const checkDrawer = () => {
            const isOpen =
                document.body.classList.contains("drawer-open") ||
                document.body.classList.contains("mobile-menu-open") ||
                Boolean(document.querySelector('[data-drawer-open="true"]')) ||
                Boolean(document.querySelector('[data-mobile-menu-open="true"]'));
            setIsDrawerOpen(isOpen);
            if (isOpen) setIsMenuOpen(false);
        };

        checkDrawer();

        const observer = new MutationObserver(() => {
            checkDrawer();
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
        window.addEventListener("drawer-open-change", handleDrawerChange);
        window.addEventListener("mobile-menu-open-change", handleDrawerChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("drawer-open-change", handleDrawerChange);
            window.removeEventListener("mobile-menu-open-change", handleDrawerChange);
        };
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div
            ref={containerRef}
            className={`fixed bottom-6 right-6 z-[999] md:bottom-8 md:right-8 transition-all duration-300 ${
                isVisible && !isDrawerOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-90 pointer-events-none"
            }`}
        >
            {/* Pop-up Micro Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.94 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-16 right-0 min-w-[200px] rounded-2xl border border-white/15 bg-[#121214]/95 backdrop-blur-xl p-3 shadow-[0_16px_36px_rgba(0,0,0,0.8)] flex flex-col gap-2"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 px-1 mb-1">
                            {isEn ? "Contact us" : "Связаться с нами"}
                        </span>

                        {/* WhatsApp */}
                        <a
                            href={resolvedWhatsAppHref}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2.5 rounded-[12px] bg-[#25D366]/15 border border-[#25D366]/40 px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#25D366] hover:text-black group"
                        >
                            <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:text-black transition-colors" />
                            <span>WhatsApp</span>
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/breusmedia"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2.5 rounded-[12px] bg-[#229ED9]/15 border border-[#229ED9]/40 px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#229ED9] hover:text-white"
                        >
                            <Send className="h-4 w-4 text-[#229ED9]" />
                            <span>Telegram</span>
                        </a>

                        {/* Прямой звонок */}
                        <a
                            href="tel:+995501103183"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2.5 rounded-[12px] bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-xs font-bold text-white transition-all hover:border-[#FFD23F] hover:text-[#FFD23F]"
                        >
                            <Phone className="h-4 w-4 text-[#FFD23F]" />
                            <span>{isEn ? "Call studio" : "Позвонить"}</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Trigger Button */}
            <motion.button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isEn ? "Contact options" : "Варианты связи"}
                animate={
                    isMenuOpen
                        ? { scale: 1 }
                        : {
                              scale: [1, 1.05, 1],
                              boxShadow: [
                                  "0 4px 20px rgba(37,211,102,0.35)",
                                  "0 4px 28px rgba(37,211,102,0.55)",
                                  "0 4px 20px rgba(37,211,102,0.35)",
                              ],
                          }
                }
                transition={
                    isMenuOpen
                        ? { duration: 0.2 }
                        : {
                              repeat: Infinity,
                              duration: 3.5,
                              ease: "easeInOut",
                          }
                }
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-colors hover:bg-[#20bd5a]"
            >
                <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M12 2a10 10 0 0 0-8.79 14.77L2 22l5.39-1.18A10 10 0 1 0 12 2zm0 18.17a8.11 8.11 0 0 1-4.13-1.13l-.3-.18-3.19.7.68-3.11-.2-.32A8.17 8.17 0 1 1 12 20.17zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.87-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31s-.86.84-.86 2.04.88 2.35 1.01 2.51c.12.16 1.72 2.62 4.16 3.67.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.18-.48-.31z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
