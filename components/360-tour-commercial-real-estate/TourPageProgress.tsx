'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function TourPageProgress() {
    const [progress, setProgress] = useState(0);
    const rafIdRef = useRef<number | null>(null);
    const isTickingRef = useRef(false);

    const updateProgress = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const maxScroll = scrollHeight - clientHeight;
        const nextProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        const safeProgress = Math.min(100, Math.max(0, nextProgress));

        setProgress(safeProgress);
        isTickingRef.current = false;
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (isTickingRef.current) {
                return;
            }
            isTickingRef.current = true;
            rafIdRef.current = window.requestAnimationFrame(updateProgress);
        };

        rafIdRef.current = window.requestAnimationFrame(updateProgress);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafIdRef.current !== null) {
                window.cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [updateProgress]);

    return (
        <div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[1150] h-[3px] w-full bg-transparent">
            <div className="h-full bg-[#D4A017]/80 transition-[width] duration-200 ease-out" style={{ width: `${progress}%` }} />
        </div>
    );
}
