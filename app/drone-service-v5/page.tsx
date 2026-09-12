import type { Metadata } from 'next';
import { DroneHeaderV5 } from '@/components/drone/v5/DroneHeaderV5';
import { DroneHeroV5 } from '@/components/drone/v5/DroneHeroV5';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { MultiContactWidgetV5 } from '@/components/drone/v5/MultiContactWidgetV5';
import { GeoSemanticLayerV3 } from '@/components/drone/v3/GeoSemanticLayerV3';

import { DroneServicesClustersV5 } from '@/components/drone/v5/DroneServicesClustersV5';
import { DronePricingV2 } from '@/components/drone/v2/DronePricingV2';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса в Грузии | V5',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV5Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            {/* V5 Custom Header */}
            <DroneHeaderV5 />

            <GeoSemanticLayerV3 />
            
            {/* Hero links down to #proof-metrics now */}
            <DroneHeroV5 />
            
            <div id="proof-metrics">
                <DroneStatsStripV2 />
            </div>

            <div id="catalog">
                <DroneServicesClustersV5 />
            </div>

            <DroneProcessStitch />
            
            <div id="pricing">
                <DronePricingV2 />
            </div>

            <DroneFAQExpanded />
            <DroneFooterStitch />

            {/* Floating A/B Test Widgets */}
            <MultiContactWidgetV5 />
        </main>
    );
}
