import type { Metadata } from 'next';
import { DroneHeaderV16 } from '@/components/drone/v16/DroneHeaderV16';
import { DroneHeroV16 } from '@/components/drone/v16/DroneHeroV16';
import { MultiContactWidgetV15 } from '@/components/drone/v15/MultiContactWidgetV15';
import { GeoSemanticLayerV14 } from '@/components/drone/v14/GeoSemanticLayerV14';
import { DroneServicesCatalogV17 } from '@/components/drone/v17/DroneServicesCatalogV17';
import {
    DroneTrustStripV17,
    DronePortfolioV17,
    DronePricingV17,
    DroneSafetyV17,
    PLANS_V17,
} from '@/components/drone/v17/DroneSectionsV17';
import { DroneProcessV14 } from '@/components/drone/v14/DroneProcessV14';
import { DroneFAQExpandedV14 } from '@/components/drone/v14/DroneFAQExpandedV14';
import { DroneFooterStitchV14 } from '@/components/drone/v14/DroneFooterStitchV14';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { droneFaqItems } from '@/components/drone/droneFaqData';

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: droneFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка для бизнеса в Грузии',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: 200,
        highPrice: 700,
        offerCount: PLANS_V17.length,
        offers: PLANS_V17.map((p) => ({ '@type': 'Offer', name: p.title, price: p.price, priceCurrency: 'GEL' })),
    },
};

export const metadata: Metadata = {
    title: 'Аэросъёмка для бизнеса и частных объектов в Грузии | V17',
    description:
        '4K-аэросъёмка и FPV-пролёты для бизнеса в Тбилиси и по всей Грузии. Тарифы от 200 ₾, готовые материалы от 24 часов.',
    robots: { index: false, follow: false },
};

export default function DroneServiceV17Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#D4A017] selection:text-black">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
            <DroneHeaderV16 />
            <GeoSemanticLayerV14 />

            <DroneHeroV16 />

            <div id="proof-metrics" className="scroll-mt-24 md:scroll-mt-28">
                <DroneTrustStripV17 />
            </div>

            <DronePortfolioV17 />

            <div id="catalog">
                <DroneServicesCatalogV17 />
            </div>

            <DronePricingV17 />
            <DroneProcessV14 />
            <DroneSafetyV17 />
            <DroneFAQExpandedV14 />

            <div id="contact" className="scroll-mt-24 bg-[#050505] px-4 pt-10 pb-6">
                <DroneContactStitch lang="ru" />
            </div>
            <DroneFooterStitchV14 />

            <MultiContactWidgetV15 />
        </main>
    );
}
