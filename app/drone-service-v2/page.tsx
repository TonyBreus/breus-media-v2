import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneHeroV2 } from '@/components/drone/v2/DroneHeroV2';
import { DroneStatsStripV2 } from '@/components/drone/v2/DroneStatsStripV2';
import { DroneServicesClustersV2 } from '@/components/drone/v2/DroneServicesClustersV2';
import { DronePricingV2 } from '@/components/drone/v2/DronePricingV2';
import { DroneStickyCtaV2 } from '@/components/drone/v2/DroneStickyCtaV2';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

import { droneServiceItems } from '@/components/drone/droneServicesData';
import { droneFaqItems } from '@/components/drone/droneFaqData';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';

const pageConfig = droneDirectionPages.droneService;
const droneFaqJsonLd = {
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

const jsonLdSchemas = [
    ...buildDirectionJsonLd(
        pageConfig,
        droneServiceItems.map((service) => service.title)
    ),
    droneFaqJsonLd,
];

export const metadata: Metadata = {
    title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media (V2)',
    description:
        'Аэросъёмка дроном в Тбилиси и Грузии для бизнеса: недвижимость, стройка, отели, рестораны, туризм и события. 4K, FPV, выезды по всей стране. От 200 ₾.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DroneServiceV2Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`drone-service-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'Услуги аэросъёмки дроном в Тбилиси',
                        description:
                            '17 направлений аэросъёмки для бизнеса в Тбилиси и Грузии — от недвижимости до инспекции объектов. От 200 ₾.',
                        url: 'https://breus.media/drone-service-v2',
                        numberOfItems: 17,
                        itemListElement: droneServiceItems.map((s, idx) => ({
                            '@type': 'ListItem',
                            position: idx + 1,
                            name: s.title,
                            url: `https://breus.media${s.primaryHref}`
                        })),
                    }),
                }}
            />

            <SmartHeader initialLang="RU" />

            <DroneHeroV2 hero={pageConfig.hero} />
            <DroneStatsStripV2 />
            <DroneServicesClustersV2 />
            <DroneProcessStitch />
            <DronePricingV2 />
            <DroneFAQExpanded />
            
            <DroneFooterStitch />
            <DroneStickyCtaV2 />
        </main>
    );
}
