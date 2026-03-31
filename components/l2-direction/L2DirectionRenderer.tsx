import React from 'react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';
import type { L2DirectionConfig } from '@/components/l2-direction/types';
import {
    L2DirectionContact,
    L2DirectionFaq,
    L2DirectionHero,
    L2DirectionMap,
    L2DirectionPainProof,
    L2DirectionPricing,
    L2DirectionProcess,
    L2DirectionServices,
    L2DirectionSocialProof,
} from '@/components/l2-direction/L2DirectionSections';

type L2DirectionRendererProps = {
    schemaKey: string;
    config: L2DirectionConfig;
};

export const L2DirectionRenderer = ({ schemaKey, config }: L2DirectionRendererProps) => {
    const jsonLdSchemas = buildDirectionJsonLd(
        config.page,
        config.data.services.map((service) => service.title)
    );

    return (
        <main className="bg-[#080808] text-white min-h-screen">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`${schemaKey}-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Услуги', href: '#services' },
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <L2DirectionHero
                hero={config.page.hero}
                heroSubtitle={config.data.heroSubtitle}
                heroSupportingLine={config.data.heroSupportingLine}
                services={config.data.services}
            />

            <L2DirectionServices heading={config.data.servicesHeading} services={config.data.services} />

            <L2DirectionPricing
                heading={config.data.pricingHeading}
                tagline={config.data.pricingTagline}
                plans={config.data.pricingPlans}
            />

            <L2DirectionSocialProof stats={config.data.socialProofStats} />

            <L2DirectionProcess steps={config.data.processSteps} />

            <DebugWrapper id={10400} label="Trust Lite Section">
                <DroneTrustLite trust={config.page.trust} />
            </DebugWrapper>

            <L2DirectionMap map={config.data.map} />

            <L2DirectionPainProof
                title={config.data.painProofTitle}
                supportingLine={config.data.painProofSupportingLine}
                cards={config.data.painProofCards}
            />

            <L2DirectionFaq heading={config.data.faqHeading} items={config.data.faqItems} />

            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={config.page.relatedLinks} />
            </DebugWrapper>

            <L2DirectionContact contact={config.data.contact} />

            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
};
