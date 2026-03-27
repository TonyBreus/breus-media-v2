'use client';

import { useEffect, useRef, useState } from 'react';

export function TourStickyCta() {
    const [isVisible, setIsVisible] = useState(false);
    const rafIdRef = useRef<number | null>(null);
    const tickingRef = useRef(false);

    useEffect(() => {
        const update = () => {
            const hero = document.getElementById('tour-hero');
            const threshold = hero ? Math.max(180, hero.offsetHeight - 160) : window.innerHeight * 0.8;
            setIsVisible(window.scrollY > threshold);
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
    }, []);

    return (
        <a
            href="#contact"
            className={`hidden lg:flex fixed right-6 bottom-6 z-[1080] items-center justify-center rounded-[12px] border border-[#D4A017]/45 bg-[#141414]/95 backdrop-blur px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            } hover:border-[#D4A017] hover:bg-[#1a1a1a]`}
        >
            Обсудить проект
        </a>
    );
}
