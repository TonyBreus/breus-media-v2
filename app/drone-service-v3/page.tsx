import type { Metadata } from 'next';
import { DroneHeaderV3 } from '@/components/drone/v3/DroneHeaderV3';
import { DroneHeroV3 } from '@/components/drone/v3/DroneHeroV3';
import { YellowStatsV3 } from '@/components/drone/v3/YellowStatsV3';
import { MultiContactWidgetV3 } from '@/components/drone/v3/MultiContactWidgetV3';
import { GeoSemanticLayerV3 } from '@/components/drone/v3/GeoSemanticLayerV3';

import { DroneServicesClustersV2 } from '@/components/drone/v2/DroneServicesClustersV2';
import { DronePricingV2 } from '@/components/drone/v2/DronePricingV2';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса в Грузии | V3',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV3Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            {/* TICKET 1: Custom Header & Floating Marquee */}
            <DroneHeaderV3 />

            {/* TICKET 5: SEO SSR Semantic Layer */}
            <GeoSemanticLayerV3 />

            {/* TICKET 2: Hero Section */}
            <DroneHeroV3 />

            {/* TICKET 3: Contrast Yellow Stats */}
            <YellowStatsV3 />

            {/* Rest of the page inherited from V2 for a complete experience */}
            <div id="catalog">
                <DroneServicesClustersV2 />
            </div>

            <DroneProcessStitch />
            
            <div id="pricing">
                <DronePricingV2 />
            </div>

            <DroneFAQExpanded />
            <DroneFooterStitch />

            {/* TICKET 4: Floating Multi-Widget */}
            <MultiContactWidgetV3 />
        </main>
    );
}
