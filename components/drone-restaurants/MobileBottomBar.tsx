'use client';

import { useEffect, useState } from 'react';

type MobileBottomBarProps = {
    primaryLabel?: string;
    contactHref?: string;
    whatsappHref?: string;
    telegramHref?: string;
    heroId?: string;
    revealAfterHero?: boolean;
    smoothVisibility?: boolean;
};

export function MobileBottomBar({
    primaryLabel = 'Обсудить задачу',
    contactHref = '#contact',
    whatsappHref = 'https://wa.me/995501103183',
    telegramHref = 'https://t.me/breusmedia',
    heroId,
    revealAfterHero = false,
    smoothVisibility = false,
}: MobileBottomBarProps) {
    const [isFormInView, setIsFormInView] = useState(false);
    const [hasPassedHero, setHasPassedHero] = useState(!revealAfterHero);

    useEffect(() => {
        const form = document.querySelector('#contact-form');
        if (!form) return;
        const observer = new IntersectionObserver(([entry]) => setIsFormInView(entry.isIntersecting), { threshold: 0.1 });
        observer.observe(form);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!revealAfterHero) {
            setHasPassedHero(true);
            return;
        }

        let frameId: number | null = null;

        const updateVisibility = () => {
            const hero = heroId ? document.getElementById(heroId) : null;

            if (hero) {
                const { bottom } = hero.getBoundingClientRect();
                setHasPassedHero(bottom <= 0);
            } else {
                setHasPassedHero(window.scrollY > window.innerHeight * 0.8);
            }

            frameId = null;
        };

        const onScrollOrResize = () => {
            if (frameId !== null) {
                return;
            }
            frameId = window.requestAnimationFrame(updateVisibility);
        };

        updateVisibility();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);

        return () => {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [heroId, revealAfterHero]);

    const visible = hasPassedHero && !isFormInView;
    const visibilityClass = smoothVisibility
        ? visible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        : visible
            ? ''
            : 'hidden';

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[1000] border-t border-[#2a2a2a] bg-[#141414]/95 backdrop-blur-md pb-safe pt-2 px-4 transition-all duration-300 md:hidden flex items-center justify-between gap-3 ${visibilityClass}`}
        >
            <a
                href="#pricing"
                className="flex-1 flex items-center justify-center rounded-[10px] border border-white/20 bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
            >
                Тарифы
            </a>
            <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex-[2] flex items-center justify-center rounded-[10px] bg-[#D4A017] px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
            >
                {primaryLabel}
            </a>
        </div>
    );
}
