'use client';

import { useEffect, useRef, useState } from 'react';

type DroneStickyCtaProps = {
    heroId?: string;
    label?: string;
    contactId?: string;
    href?: string;
};

export function DroneStickyCta({
    heroId = 'drone-service-hero',
    label = 'Обсудить съёмку',
    contactId = 'contact',
    href = '#contact',
}: DroneStickyCtaProps) {
    const [isVisible, setIsVisible] = useState(false);
    const rafIdRef = useRef<number | null>(null);
    const tickingRef = useRef(false);

    useEffect(() => {
        const update = () => {
            const hero = document.getElementById(heroId);
            const contact = document.getElementById(contactId);

            const threshold = hero ? Math.max(220, hero.offsetHeight - 180) : window.innerHeight * 0.8;
            const contactTop = contact?.offsetTop ?? Number.POSITIVE_INFINITY;
            const reachedContact = window.scrollY + window.innerHeight * 0.65 >= contactTop;

            setIsVisible(window.scrollY > threshold && !reachedContact);
            tickingRef.current = false;
        };

        const onScroll = () => {
            if (tickingRef.current) {
                return;
            }

            tickingRef.current = true;
            rafIdRef.current = window.requestAnimationFrame(update);
        };

        rafIdRef.current = window.requestAnimationFrame(update);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafIdRef.current !== null) {
                window.cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [heroId, contactId]);

    return (
        <a
            href={href}
            className={`fixed right-6 bottom-6 z-[1080] hidden items-center justify-center rounded-[12px] border border-[#FFD23F]/45 bg-[#141414]/95 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-all duration-300 lg:flex ${
                isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
            } hover:border-[#FFD23F] hover:bg-[#1a1a1a]`}
        >
            {label}
        </a>
    );
}
