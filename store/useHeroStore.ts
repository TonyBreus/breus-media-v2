import { create } from 'zustand';

interface HeroStore {
    hoveredService: string | null;
    setHoveredService: (service: string | null) => void;
}

export const useHeroStore = create<HeroStore>((set) => ({
    hoveredService: null,
    setHoveredService: (service) => set({ hoveredService: service }),
}));
