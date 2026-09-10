import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { tourismServiceEnConfig } from '@/constants/l2DirectionConfigs.en';

const config = tourismServiceEnConfig;
const pageUrl = 'https://breus.media/tourism-service/en';
const pageTitle = 'Tourism & Glamping Visual Production in Georgia | Breus Media';
const pageDescription =
    'FPV drone video, 360° virtual tours and promotional reels for hotels, glampings and tours across Georgia. Transparent pricing in GEL.';
const ogDescription =
    'FPV drone video, 360° virtual tours and promotional reels for hotels, glampings and tours across Georgia. Transparent pricing in GEL.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/tourism-service',
            en: 'https://breus.media/tourism-service/en',
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

export default function TourismServiceEnPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Tourism & Route Content in Georgia',
        serviceType: 'Tourism content production and visual packaging',
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
            name: 'Tourism Content Formats',
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
                name: 'Tourism',
                item: pageUrl,
            },
        ],
    };
    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`tourism-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="tourism-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/tourism-service', en: '/tourism-service/en' }}
            />
        </>
    );
}
