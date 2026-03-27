"use client";

import { useEffect, useState } from "react";

const MOBILE_LANDSCAPE_MEDIA_QUERY = "(orientation: landscape) and (max-width: 1023px)";

const getIsMobileLandscape = () => {
    if (typeof window === "undefined") return false;

    const mediaQueryMatches = window.matchMedia(MOBILE_LANDSCAPE_MEDIA_QUERY).matches;
    // Extra guard for very short viewports (typical phone landscape).
    const isShortViewport = window.innerHeight <= 520;

    return mediaQueryMatches && isShortViewport;
};

export function useMobileLandscape() {
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_LANDSCAPE_MEDIA_QUERY);
        const update = () => setIsMobileLandscape(getIsMobileLandscape());

        update();
        mediaQuery.addEventListener("change", update);
        window.addEventListener("resize", update);
        window.addEventListener("orientationchange", update);

        return () => {
            mediaQuery.removeEventListener("change", update);
            window.removeEventListener("resize", update);
            window.removeEventListener("orientationchange", update);
        };
    }, []);

    return isMobileLandscape;
}
