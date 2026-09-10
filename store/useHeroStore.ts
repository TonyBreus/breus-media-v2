import { create } from 'zustand';

interface HeroStore {
    hoveredService: string | null;
    hoverPreviewSuppressedUntil: number;
    setHoveredService: (service: string | null) => void;
    dismissHoverPreview: () => void;
}

const HOVER_PREVIEW_SUPPRESS_MS = 2000;

export const useHeroStore = create<HeroStore>((set, get) => ({
    hoveredService: null,
    hoverPreviewSuppressedUntil: 0,
    setHoveredService: (service) => {
        if (service && Date.now() < get().hoverPreviewSuppressedUntil) {
            return;
        }

        set({ hoveredService: service });
    },
    dismissHoverPreview: () =>
        set({
            hoveredService: null,
            hoverPreviewSuppressedUntil: Date.now() + HOVER_PREVIEW_SUPPRESS_MS,
        }),
}));
