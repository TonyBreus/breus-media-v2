'use client';

import { useEffect, useState } from 'react';

type MobileBottomBarProps = {
    primaryLabel?: string;
    contactHref?: string;
    whatsappHref?: string;
    telegramHref?: string;
};

export function MobileBottomBar({
    primaryLabel = 'Обсудить задачу',
    contactHref = '#contact',
    whatsappHref = 'https://wa.me/995574619393',
    telegramHref = 'https://t.me/breusmedia',
}: MobileBottomBarProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const form = document.querySelector('#contact-form');
        if (!form) return;
        const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.1 });
        observer.observe(form);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-[1070] border-t border-[#FFD23F]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden ${visible ? '' : 'hidden'}`}
        >
            <div className="mx-auto flex max-w-[760px] items-center gap-2">
                <a
                    href={contactHref}
                    className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#D4A017] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                >
                    {primaryLabel}
                </a>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#25D366]/65 text-lg text-[#25D366]"
                >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-8.79 14.77L2 22l5.39-1.18A10 10 0 1 0 12 2zm0 18.17a8.11 8.11 0 0 1-4.13-1.13l-.3-.18-3.19.7.68-3.11-.2-.32A8.17 8.17 0 1 1 12 20.17zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.87-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31s-.86.84-.86 2.04.88 2.35 1.01 2.51c.12.16 1.72 2.62 4.16 3.67.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.18-.48-.31z" />
                    </svg>
                </a>
                <a
                    href={telegramHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#229ED9]/65 text-lg text-[#229ED9]"
                >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                        <path d="M21.94 4.66c.24-.95-.34-1.33-1.1-1.05L2.66 10.54c-.9.35-.88.86-.16 1.08l4.66 1.45 1.8 5.6c.22.66.11.93.81.93.54 0 .78-.24 1.08-.53l2.6-2.53 5.4 3.98c1 .55 1.72.27 1.97-.93l3.12-14.93zM8.95 12.8l10.86-6.86c.54-.34 1.03-.15.63.2L11.2 14.5l-.36 3.8-1.89-5.5z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
