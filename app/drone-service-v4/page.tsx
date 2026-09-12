import type { Metadata } from 'next';
import { DroneHeaderV4 } from '@/components/drone/v4/DroneHeaderV4';
import { DroneHeroV3 } from '@/components/drone/v3/DroneHeroV3';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { MultiContactWidgetV3 } from '@/components/drone/v3/MultiContactWidgetV3';
import { GeoSemanticLayerV3 } from '@/components/drone/v3/GeoSemanticLayerV3';

import { DroneServicesClustersV2 } from '@/components/drone/v2/DroneServicesClustersV2';
import { DronePricingV2 } from '@/components/drone/v2/DronePricingV2';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса в Грузии | V4',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV4Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            {/* V4 Custom Header */}
            <DroneHeaderV4 />

            {/* V3 Components */}
            <GeoSemanticLayerV3 />
            <DroneHeroV3 />
            <DroneStatsStripV2 />

            <div id="catalog">
                <DroneServicesClustersV2 />
            </div>

            <DroneProcessStitch />
            
            <div id="pricing">
                <DronePricingV2 />
            </div>

            <DroneFAQExpanded />
            <DroneFooterStitch />

            <MultiContactWidgetV3 />
        </main>
    );
}
