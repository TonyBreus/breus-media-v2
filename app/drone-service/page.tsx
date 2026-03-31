import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneHeroStitch } from '@/components/drone/DroneHeroStitch';
import { DroneSocialProofStitch } from '@/components/drone/DroneSocialProofStitch';
import { DroneServicesStitch } from '@/components/drone/DroneServicesStitch';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFlightConditionsNote } from '@/components/drone/DroneFlightConditionsNote';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneMapStitch } from '@/components/drone/DroneMapStitch';
import { DronePricingStitch } from '@/components/drone/DronePricingStitch';
import { DroneGoogleTrustLite } from '@/components/drone/DroneGoogleTrustLite';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { buildDirectionJsonLd, buildDirectionMetadata } from '@/lib/seo/directionSeo';

const pageConfig = droneDirectionPages.droneService;
const jsonLdSchemas = buildDirectionJsonLd(
    pageConfig,
    droneServiceItems.map((service) => service.title)
);

export const metadata: Metadata = {
    title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
    description:
        'Профессиональная аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм и события. 4K, FPV, выезды по всей стране.',
    alternates: {
        canonical: 'https://breus.media/drone-service',
    },
};

export default function DroneServicePage() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`drone-service-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <DronePageScrollProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Услуги', href: '#services' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />
            <div className="pointer-events-none absolute left-0 right-0 top-[92px] z-[950]">
                <div className="container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="pointer-events-auto">
                        <ol className="flex items-center gap-2 text-xs tracking-wide text-white/55">
                            <li>
                                <Link href="/" className="transition-colors hover:text-white/80">
                                    Главная
                                </Link>
                            </li>
                            <li aria-hidden className="text-white/30">
                                →
                            </li>
                            <li aria-current="page" className="text-white/70">
                                Аэросъёмка
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DebugWrapper id={10100} label="Hero Section">
                <DroneHeroStitch hero={pageConfig.hero} />
            </DebugWrapper>
            <DebugWrapper id={10300} label="Services Section">
                <DroneServicesStitch />
            </DebugWrapper>
            <DebugWrapper id={10200} label="Social Proof Section">
                <DroneSocialProofStitch />
            </DebugWrapper>
            <DebugWrapper id={10500} label="Process Section">
                <DroneProcessStitch />
            </DebugWrapper>
            <DebugWrapper id={10550} label="Flight Conditions Note">
                <DroneFlightConditionsNote />
            </DebugWrapper>
            <DebugWrapper id={10400} label="Trust Lite Section">
                <DroneTrustLite trust={pageConfig.trust} />
            </DebugWrapper>
            <DebugWrapper id={10600} label="Map Section">
                <DroneMapStitch />
            </DebugWrapper>
            <DebugWrapper id={10700} label="Pricing Section">
                <DronePricingStitch />
            </DebugWrapper>
            <DebugWrapper id={10750} label="Google Trust Lite Section">
                <DroneGoogleTrustLite googleTrust={pageConfig.googleTrust} />
            </DebugWrapper>
            <DebugWrapper id={10800} label="FAQ Section">
                <DroneFAQExpanded />
            </DebugWrapper>
            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={pageConfig.relatedLinks} />
            </DebugWrapper>
            <DebugWrapper id={10900} label="Contact Section">
                <DroneContactStitch />
            </DebugWrapper>
            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}
