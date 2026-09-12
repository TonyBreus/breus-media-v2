import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { Tours360HeroV2 } from '@/components/tours360/v2/Tours360HeroV2';
import { Tours360StatsStripV2 } from '@/components/tours360/v2/Tours360StatsStripV2';
import { Tours360ServicesClustersV2 } from '@/components/tours360/v2/Tours360ServicesClustersV2';
import { Tours360ProcessStitch } from '@/components/tours360/v2/Tours360ProcessStitch';
import { Tours360PricingV2 } from '@/components/tours360/v2/Tours360PricingV2';
import { Tours360StickyCtaV2 } from '@/components/tours360/v2/Tours360StickyCtaV2';
import { Tours360FAQExpanded } from '@/components/tours360/v2/Tours360FAQExpanded';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';

import { tours360ServiceItems } from '@/components/tours360/tours360ServicesData';
import { tours360FaqItems } from '@/components/tours360/tours360FaqData';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';

const pageConfig = l2DirectionConfigs.tours360Service.page;
const tours360FaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tours360FaqItems.map((item) => ({
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
        tours360ServiceItems.map((service) => service.title)
    ),
    tours360FaqJsonLd,
];

export const metadata: Metadata = {
    title: '360° туры для бизнеса в Тбилиси | Breus Media (V2)',
    description:
        '360° виртуальные туры в Тбилиси и по Грузии: отели, рестораны, клиники, шоурумы, офисы и недвижимость. Объект можно осмотреть до визита. От 200 ₾.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Tours360ServiceV2Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`tours360-service-schema-${index}`}
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
                        name: 'Услуги по созданию 360° туров в Тбилиси',
                        description:
                            '8 направлений 360° туров для бизнеса в Тбилиси и Грузии — от недвижимости до клиник. От 200 ₾.',
                        url: 'https://breus.media/360-tours-service-v2',
                        numberOfItems: tours360ServiceItems.length,
                        itemListElement: tours360ServiceItems.map((s, idx) => ({
                            '@type': 'ListItem',
                            position: idx + 1,
                            name: s.title,
                            url: `https://breus.media${s.primaryHref}`
                        })),
                    }),
                }}
            />

            <SmartHeader initialLang="RU" />

            <Tours360HeroV2 />
            <Tours360StatsStripV2 />
            <Tours360ServicesClustersV2 />
            <Tours360ProcessStitch />
            <Tours360PricingV2 />
            <Tours360FAQExpanded />
            
            <DroneFooterStitch />
            <Tours360StickyCtaV2 />
        </main>
    );
}
