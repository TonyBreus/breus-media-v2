import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { autoServiceEnConfig } from '@/constants/l2DirectionConfigs.en';

const config = autoServiceEnConfig;
const pageUrl = 'https://breus.media/auto-service/en';
const pageTitle = 'Auto Business, Dealerships & Detailing Visual Production in Georgia | Breus Media';
const pageDescription =
    'Dynamic FPV drone video, 4K walkthroughs and short-form video production for car dealerships, auto services and detailing centers in Tbilisi and Batumi. Transparent GEL pricing.';
const ogDescription =
    'Dynamic FPV drone video, 4K walkthroughs and short-form video production for car dealerships, auto services and detailing centers in Tbilisi and Batumi. Transparent GEL pricing.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/auto-service',
            en: 'https://breus.media/auto-service/en',
        },
    },
    openGraph: {
        title: pageTitle,
        description: ogDescription,
        url: pageUrl,
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function AutoServiceEnPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Automotive Media Production in Tbilisi',
        serviceType: 'Automotive media production service',
        description: pageDescription,
        provider: {
            '@id': 'https://breus.media/#organization',
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Tbilisi',
            },
            {
                '@type': 'Country',
                name: 'Georgia',
            },
        ],
        availableLanguage: ['ru', 'en', 'ka'],
        url: pageUrl,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Automotive Content Formats',
            itemListElement: config.data.services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                },
                url: `${pageUrl}#services`,
            })),
        },
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: config.data.faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://breus.media/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://breus.media/#services',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Auto Business',
                item: pageUrl,
            },
        ],
    };

    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`auto-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="auto-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/auto-service', en: '/auto-service/en' }}
            />
        </>
    );
}
