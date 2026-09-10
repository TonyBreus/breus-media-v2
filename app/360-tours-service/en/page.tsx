import type { Metadata } from 'next';
import LangSetter from '@/components/common/LangSetter';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { tours360ServiceEnConfig as config } from '@/constants/l2DirectionConfigs.en';

const pageUrl = 'https://breus.media/360-tours-service/en';
const pageTitle = '360° Virtual Tours in Tbilisi and Georgia | Breus Media';
const pageDescription =
    'Interactive 360° virtual tours in Tbilisi and Georgia for hotels, restaurants, clinics, showrooms, offices and real estate. From 200 GEL.';
const ogDescription =
    '360° tour packages for real estate, hotels, restaurants, clinics, auto showrooms, offices and commercial spaces.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/360-tours-service',
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

export default function Tours360ServicePageEn() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '360° Virtual Tours in Tbilisi and Georgia',
        serviceType: '360-degree virtual tours',
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
        priceRange: 'from 200 GEL',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: '360° tour formats',
            itemListElement: config.data.services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                },
                url: `${pageUrl}#services`,
            })),
        },
        offers: [
            {
                '@type': 'Offer',
                name: 'Start',
                price: 200,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 200,
                    priceCurrency: 'GEL',
                },
                url: `${pageUrl}#pricing`,
            },
            {
                '@type': 'Offer',
                name: 'Standard',
                price: 450,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 450,
                    priceCurrency: 'GEL',
                },
                url: `${pageUrl}#pricing`,
            },
            {
                '@type': 'Offer',
                name: 'Full Property',
                price: 900,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 900,
                    priceCurrency: 'GEL',
                },
                url: `${pageUrl}#pricing`,
            },
        ],
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
                name: '360° Tours',
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
                    key={`360-tours-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="360-tours-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/360-tours-service', en: '/360-tours-service/en' }}
            />
        </>
    );
}
