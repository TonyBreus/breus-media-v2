# Breus Media — L2 Service Hubs — 26 марта 2026
Страницы: /real-estate-service, /auto-service, /hotels-service, /restaurants-service, /tourism-service, /clinics-service, /business-service

## /real-estate-service
Lines: 84
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { buildDirectionJsonLd, buildDirectionMetadata } from '@/lib/seo/directionSeo';
import { realEstateServiceItems } from '@/components/real-estate-service/realEstateServicesData';
import { RealEstateHeroStitch } from '@/components/real-estate-service/RealEstateHeroStitch';
import { RealEstateSocialProofStitch } from '@/components/real-estate-service/RealEstateSocialProofStitch';
import { RealEstateServicesStitch } from '@/components/real-estate-service/RealEstateServicesStitch';
import { RealEstateProcessStitch } from '@/components/real-estate-service/RealEstateProcessStitch';
import { RealEstateMapStitch } from '@/components/real-estate-service/RealEstateMapStitch';
import { RealEstatePricingStitch } from '@/components/real-estate-service/RealEstatePricingStitch';
import { RealEstateFAQExpanded } from '@/components/real-estate-service/RealEstateFAQExpanded';
import { RealEstateContactStitch } from '@/components/real-estate-service/RealEstateContactStitch';
import { RealEstatePainProofLite } from '@/components/real-estate-service/RealEstatePainProofLite';

const pageConfig = droneDirectionPages.realEstateService;
const jsonLdSchemas = buildDirectionJsonLd(
    pageConfig,
    realEstateServiceItems.map((service) => service.title)
);

export const metadata: Metadata = buildDirectionMetadata(pageConfig);

export default function RealEstateServicePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`real-estate-service-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />
            <DebugWrapper id={10100} label="Hero Section">
                <RealEstateHeroStitch hero={pageConfig.hero} />
            </DebugWrapper>
            <DebugWrapper id={10200} label="Social Proof Section">
                <RealEstateSocialProofStitch />
            </DebugWrapper>
            <DebugWrapper id={10300} label="Services Section">
                <RealEstateServicesStitch />
            </DebugWrapper>
            <DebugWrapper id={10500} label="Process Section">
                <RealEstateProcessStitch />
            </DebugWrapper>
            <DebugWrapper id={10400} label="Trust Lite Section">
                <DroneTrustLite trust={pageConfig.trust} />
            </DebugWrapper>
            <DebugWrapper id={10600} label="Map Section">
                <RealEstateMapStitch />
            </DebugWrapper>
            <DebugWrapper id={10700} label="Pricing Section">
                <RealEstatePricingStitch />
            </DebugWrapper>
            <DebugWrapper id={10750} label="Pain Proof Section">
                <RealEstatePainProofLite />
            </DebugWrapper>
            <DebugWrapper id={10800} label="FAQ Section">
                <RealEstateFAQExpanded />
            </DebugWrapper>
            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={pageConfig.relatedLinks} />
            </DebugWrapper>
            <DebugWrapper id={10900} label="Contact Section">
                <RealEstateContactStitch />
            </DebugWrapper>
            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}

```
---
---

## /auto-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.autoService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function AutoServicePage() {
    return <L2DirectionRenderer schemaKey="auto-service" config={config} />;
}

```
---
---

## /hotels-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.hotelsService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function HotelsServicePage() {
    return <L2DirectionRenderer schemaKey="hotels-service" config={config} />;
}

```
---
---

## /restaurants-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.restaurantsService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function RestaurantsServicePage() {
    return <L2DirectionRenderer schemaKey="restaurants-service" config={config} />;
}

```
---
---

## /tourism-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.tourismService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function TourismServicePage() {
    return <L2DirectionRenderer schemaKey="tourism-service" config={config} />;
}

```
---
---

## /clinics-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.clinicsService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function ClinicsServicePage() {
    return <L2DirectionRenderer schemaKey="clinics-service" config={config} />;
}

```
---
---

## /business-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.businessService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function BusinessServicePage() {
    return <L2DirectionRenderer schemaKey="business-service" config={config} />;
}

```
---
---
