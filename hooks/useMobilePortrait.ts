"use client";

import { useEffect, useState } from "react";

const MOBILE_PORTRAIT_MEDIA_QUERY = "(orientation: portrait) and (max-width: 767px)";

const getIsMobilePortrait = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MOBILE_PORTRAIT_MEDIA_QUERY).matches;
};

export function useMobilePortrait() {
    const [isMobilePortrait, setIsMobilePortrait] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_PORTRAIT_MEDIA_QUERY);
        const update = () => setIsMobilePortrait(getIsMobilePortrait());

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

    return isMobilePortrait;
}
