import type { Metadata } from 'next';
import LangSetter from '@/components/common/LangSetter';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { restaurantsServiceEnConfig as config } from '@/constants/l2DirectionConfigs.en';

const pageUrl = 'https://breus.media/restaurants-service/en';
const pageTitle = 'Restaurant Content in Tbilisi | Breus Media';
const pageDescription =
    'Photo, video, Reels, drone filming, 360° tours and AI menu visuals for restaurants, cafes and gastro projects in Tbilisi and Georgia.';
const ogDescription =
    'Restaurant content packages: food shooting, Reels, interiors, drone filming, 360° tours, AI menu cards and assets for Wolt, Google Maps, websites and Instagram.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/restaurants-service',
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

export default function RestaurantsServicePageEn() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Restaurant Content in Tbilisi',
        serviceType: 'Restaurant content production service',
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
            name: 'Restaurant content formats',
            itemListElement: config.data.services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                },
                url: `${pageUrl}#services`,
            })),
        },
        offers: config.data.pricingPlans.map((plan) => ({
            '@type': 'Offer',
            name: plan.title,
            priceCurrency: 'GEL',
            url: `${pageUrl}#pricing`,
        })),
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
                name: 'Restaurants',
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
                    key={`restaurants-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="restaurants-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/restaurants-service', en: '/restaurants-service/en' }}
            />
        </>
    );
}
