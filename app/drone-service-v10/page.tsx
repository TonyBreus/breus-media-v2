import type { Metadata } from 'next';
import { DroneHeaderV6 } from '@/components/drone/v6/DroneHeaderV6';
import { DroneHeroV7 } from '@/components/drone/v7/DroneHeroV7';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { MultiContactWidgetV6 } from '@/components/drone/v6/MultiContactWidgetV6';
import { GeoSemanticLayerV3 } from '@/components/drone/v3/GeoSemanticLayerV3';

import { DroneServicesHorizontalClustersV9 } from '@/components/drone/v9/DroneServicesHorizontalClustersV9';
import { DronePricingV10 } from '@/components/drone/v10/DronePricingV10';
import { DroneAddonsV10 } from '@/components/drone/v10/DroneAddonsV10';
import { DroneProcessV10 } from '@/components/drone/v10/DroneProcessV10';
import { DroneIcebergDeepSpecsV10 } from '@/components/drone/v10/DroneIcebergDeepSpecsV10';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса в Грузии | V10',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV10Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            <DroneHeaderV6 />
            <GeoSemanticLayerV3 />
            
            <DroneHeroV7 />
            
            <div id="proof-metrics">
                <DroneStatsStripV2 />
            </div>

            <div id="catalog">
                <DroneServicesHorizontalClustersV9 />
            </div>

            <div id="pricing">
                <DronePricingV10 />
            </div>

            <DroneAddonsV10 />

            <DroneProcessV10 />

            <DroneIcebergDeepSpecsV10 />

            <DroneFAQExpanded />
            <DroneFooterStitch />

            {/* Hidden widget that appears on scroll */}
            <MultiContactWidgetV6 />
        </main>
    );
}
