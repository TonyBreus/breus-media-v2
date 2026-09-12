import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { RealEstateRoiCalculator } from '@/components/real-estate-service/RealEstateRoiCalculator';
import { HeroRealEstateV2 } from '@/components/drone/real-estate-v2/HeroRealEstateV2';
import { ComparisonRealEstateV2 } from '@/components/drone/real-estate-v2/ComparisonRealEstateV2';
import { PricingRealEstateV2 } from '@/components/drone/real-estate-v2/PricingRealEstateV2';
import { VariantSwitcher } from '@/components/drone/real-estate-v2/VariantSwitcher';

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости и девелопмента в Грузии | V2 A/B',
    description:
        '4K-видео и фото объектов для девелоперов, агентств и инвесторов. Сдача готовых материалов за 24–48 часов по стандартам MyHome.ge и SS.ge.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneRealEstateV2Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            <SmartHeader 
                initialLang="RU" 
                isLanding={false} 
                transparent={true}
                ctaHref="#pricing"
                ctaLabel="Тарифы"
            />

            {/* LAYER 1 */}
            <HeroRealEstateV2 />

            {/* LAYER 2 */}
            <ComparisonRealEstateV2 />
            <RealEstateRoiCalculator lang="ru" />
            <PricingRealEstateV2 />

            {/* LAYER 3 (Tech factors in A/B variants) */}
            <VariantSwitcher />
            
            <DroneFooterStitch />
            <DroneStickyCta />
        </main>
    );
}
