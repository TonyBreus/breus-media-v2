import type { Metadata } from 'next';
import { DroneHeroSwitcherMockup } from '@/components/drone/DroneHeroSwitcherMockup';

export const metadata: Metadata = {
    title: 'Drone Hero Preview | Breus Media',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneHeroPreviewPage() {
    return <DroneHeroSwitcherMockup />;
}
