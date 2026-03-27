import type { Metadata } from 'next';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';

const SITE_URL = 'https://breus.media';

type JsonLdSchema = Record<string, unknown>;

export const buildDirectionMetadata = (config: DroneDirectionPageConfig): Metadata => {
    const canonicalUrl = `${SITE_URL}${config.path}`;

    return {
        title: config.seo.title,
        description: config.seo.description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: config.seo.title,
            description: config.seo.description,
            type: 'website',
            url: canonicalUrl,
        },
    };
};

export const buildDirectionJsonLd = (config: DroneDirectionPageConfig, serviceNames: string[]): JsonLdSchema[] => {
    const pageUrl = `${SITE_URL}${config.path}`;

    const serviceSchema: JsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: config.seo.schemaServiceName,
        serviceType: config.seo.schemaServiceType,
        description: config.seo.description,
        areaServed: config.seo.areaServed,
        url: pageUrl,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Breus Media',
            url: SITE_URL,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tbilisi',
                addressCountry: 'GE',
            },
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Направления аэросъёмки',
            itemListElement: serviceNames.map((serviceName) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: serviceName,
                },
            })),
        },
    };

    const breadcrumbSchema: JsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Аэросъёмка',
                item: pageUrl,
            },
        ],
    };

    return [serviceSchema, breadcrumbSchema];
};
