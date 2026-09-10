import type { Metadata } from 'next';
import LangSetter from '@/components/common/LangSetter';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { hotelsServiceEnConfig as config } from '@/constants/l2DirectionConfigs.en';

const pageUrl = 'https://breus.media/hotels-service/en';
const pageTitle = 'Hotel Content in Tbilisi and Georgia | Breus Media';
const pageDescription =
    'Video, drone filming, 360° tours, Reels and AI-assisted descriptions for hotels, apartments and hospitality businesses in Tbilisi and Georgia.';
const ogDescription =
    'Hotel content packages: video tours, drone footage, 360° tours, Reels, AI descriptions, seasonal content and assets for websites, Booking and social media.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/hotels-service',
            en: pageUrl,
        },
    },
    openGraph: {
        title: pageTitle,
        description: ogDescription,
        url: pageUrl,
        siteName: 'Breus Media',
        locale: 'en_GE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function HotelsServicePageEn() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Hotel Content in Tbilisi and Georgia',
        serviceType: 'Hospitality content production and AI localization',
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
            name: 'Hotel content formats',
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
                name: 'Hotels',
                item: pageUrl,
            },
        ],
    };
    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            <LangSetter lang="en" />
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`hotels-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="hotels-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/hotels-service', en: '/hotels-service/en' }}
            />
        </>
    );
}
