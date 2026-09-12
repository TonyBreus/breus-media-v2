import type { Metadata } from 'next';
import { DroneHeaderV6 } from '@/components/drone/v6/DroneHeaderV6';
import { DroneHeroV6 } from '@/components/drone/v6/DroneHeroV6';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { MultiContactWidgetV6 } from '@/components/drone/v6/MultiContactWidgetV6';
import { GeoSemanticLayerV3 } from '@/components/drone/v3/GeoSemanticLayerV3';

import { DroneServicesClustersV5 } from '@/components/drone/v5/DroneServicesClustersV5';
import { DronePricingV2 } from '@/components/drone/v2/DronePricingV2';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса в Грузии | V6',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV6Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            <DroneHeaderV6 />
            <GeoSemanticLayerV3 />
            <DroneHeroV6 />
            
            <div id="proof-metrics" className="relative flex flex-col items-center pb-16 bg-[#080808]">
                <DroneStatsStripV2 />
                <div className="mt-10">
                    <a href="#pricing" className="inline-flex items-center justify-center rounded-[12px] border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#D4A017] hover:text-black hover:border-transparent">
                        Тарифы от 200 ₾
                    </a>
                </div>
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

            <MultiContactWidgetV6 />
        </main>
    );
}
