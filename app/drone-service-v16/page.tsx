import type { Metadata } from 'next';
import { DroneHeaderV16 } from '@/components/drone/v16/DroneHeaderV16';
import { DroneHeroV16 } from '@/components/drone/v16/DroneHeroV16';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { MultiContactWidgetV15 } from '@/components/drone/v15/MultiContactWidgetV15';
import { GeoSemanticLayerV14 } from '@/components/drone/v14/GeoSemanticLayerV14';

import { DroneServicesCatalogV16 } from '@/components/drone/v16/DroneServicesCatalogV16';
import { DronePricingV14 } from '@/components/drone/v14/DronePricingV14';
import { DroneAddonsV14 } from '@/components/drone/v14/DroneAddonsV14';
import { DroneProcessV14 } from '@/components/drone/v14/DroneProcessV14';
import { DroneIcebergDeepSpecsV14 } from '@/components/drone/v14/DroneIcebergDeepSpecsV14';
import { DroneFAQExpandedV14 } from '@/components/drone/v14/DroneFAQExpandedV14';
import { DroneFooterStitchV14 } from '@/components/drone/v14/DroneFooterStitchV14';
import { droneFaqItems } from '@/components/drone/droneFaqData';

function generateFAQSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: droneFaqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

function generateOfferSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Аэросъёмка для бизнеса в Грузии',
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'GEL',
            lowPrice: 200,
            highPrice: 700,
            offerCount: 5,
            offers: [
                { '@type': 'Offer', name: 'Полёт снаружи', price: 200, priceCurrency: 'GEL' },
                { '@type': 'Offer', name: 'Пролёт внутри (FPV)', price: 300, priceCurrency: 'GEL' },
                { '@type': 'Offer', name: 'Полёт + Монтаж', price: 350, priceCurrency: 'GEL' },
                { '@type': 'Offer', name: 'Полная съёмка', price: 450, priceCurrency: 'GEL' },
                { '@type': 'Offer', name: 'С готовым результатом', price: 700, priceCurrency: 'GEL' },
            ]
        }
    };
}

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса и частных объектов в Грузии | V16',
    description: 'Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для недвижимости, ресторанов, отелей, брендов, а также частных объектов и личных проектов. Готовые материалы от 24 часов.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV16Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOfferSchema()) }}
            />
            <DroneHeaderV16 />
            <GeoSemanticLayerV14 />
            
            <DroneHeroV16 />
            
            <div id="proof-metrics" className="scroll-mt-24 md:scroll-mt-28">
                <DroneStatsStripV2 />
            </div>

            <div id="catalog">
                <DroneServicesCatalogV16 />
            </div>

            <div id="pricing">
                <DronePricingV14 />
            </div>

            <DroneAddonsV14 />

            <DroneProcessV14 />

            <DroneIcebergDeepSpecsV14 />

            <DroneFAQExpandedV14 />
            <DroneFooterStitchV14 />

            <MultiContactWidgetV15 />
        </main>
    );
}
