'use client';

import React from 'react';

type PackageCtaProps = {
    label: string;
    packageName: string;
    packagePrice?: string;
    lang?: 'ru' | 'en';
    className?: string;
};

export function PackageCta({ label, packageName, packagePrice, lang = 'ru', className }: PackageCtaProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        let text = '';
        if (typeof window !== 'undefined' && packageName) {
            window.dispatchEvent(new CustomEvent('breus-select-service', { detail: { serviceTitle: packageName } }));
            try {
                sessionStorage.setItem('breus_contact_prefill_service', packageName);
                if (packagePrice) {
                    text = lang === 'en'
                        ? `Interested in the “${packageName}” package — ${packagePrice}`
                        : `Интересует пакет «${packageName}» — ${packagePrice}`;
                    sessionStorage.setItem('drone-hotels-tourism-prefill-message', text);
                }
            } catch {}
        }
        
        // Mobile/WhatsApp Speed-to-lead direct transition
        const waUrl = `https://wa.me/995501103183?text=${encodeURIComponent(text || 'Здравствуйте! Хочу обсудить 360 тур.')}`;
        window.open(waUrl, '_blank');
    };

    return (
        <a
            href="https://wa.me/995501103183"
            onClick={handleClick}
            className={className || "mt-6 inline-flex items-center justify-center rounded-[10px] border border-white/20 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"}
        >
            {label}
        </a>
    );
}

