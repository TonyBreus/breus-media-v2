import React from 'react';

export type JsonLdProps = {
    schema?: Record<string, unknown> | Array<Record<string, unknown>>;
    schemas?: Array<Record<string, unknown>>;
    id?: string;
};

export function JsonLd({ schema, schemas, id }: JsonLdProps) {
    const data = schemas ?? (Array.isArray(schema) ? schema : schema ? [schema] : []);
    if (!data.length) return null;

    return (
        <>
            {data.map((item, idx) => (
                <script
                    key={id ? `${id}-${idx}` : `jsonld-${idx}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </>
    );
}

export const SITE_URL = 'https://breus.media';
export const BRAND_PHONE = '+995 501 103 183';
export const BRAND_PHONE_RAW = '+995501103183';

export const buildLocalBusinessSchema = (options?: {
    lang?: 'ru' | 'en';
    url?: string;
}) => {
    const isEn = options?.lang === 'en';
    const pageUrl = options?.url ?? (isEn ? `${SITE_URL}/gazeta/en` : `${SITE_URL}/gazeta`);

    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'Breus Media',
        alternateName: 'Breus Media Visual Production & AI Agency',
        image: `${SITE_URL}/media/gazeta/og-image.jpg`,
        url: pageUrl,
        telephone: BRAND_PHONE_RAW,
        priceRange: '₾₾ - ₾₾₾',
        currenciesAccepted: 'GEL, USD, EUR',
        paymentAccepted: 'Cash, Bank Transfer, Card',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tbilisi',
            addressRegion: 'Tbilisi',
            addressCountry: 'GE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 41.7151,
            longitude: 44.8271,
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Tbilisi',
            },
            {
                '@type': 'City',
                name: 'Batumi',
            },
            {
                '@type': 'Country',
                name: 'Georgia',
            },
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
        },
        sameAs: [
            'https://www.instagram.com/breusmedia',
            'https://www.facebook.com/breusmedia',
            `https://wa.me/${BRAND_PHONE_RAW.replace('+', '')}`,
        ],
    };
};

export const buildFaqSchema = (faqs: Array<{ question: string; answer: string }>) => {
    if (!faqs || faqs.length === 0) return null;
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};

export const buildBreadcrumbSchema = (
    items: Array<{ name: string; item: string }>
) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.item.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`,
        })),
    };
};

export const buildServiceSchema = (options: {
    name: string;
    description: string;
    url: string;
    serviceType?: string;
    category?: string;
    offers?: Array<{
        title?: string;
        name?: string;
        price?: string | number;
        description?: string;
        items?: string[];
    }>;
    lowPrice?: number | string;
    highPrice?: number | string;
    areaServed?: string[];
    lang?: 'ru' | 'en';
}) => {
    const isEn = options.lang === 'en';
    const cleanUrl = options.url.startsWith('http') ? options.url : `${SITE_URL}${options.url}`;

    const formattedOffers = options.offers?.map((offer) => {
        const offerName = offer.name || offer.title || 'Service Offer';
        const rawPrice = String(offer.price || '');
        const numericMatch = rawPrice.replace(/\s+/g, '').match(/\d+/);
        const priceNum = numericMatch ? numericMatch[0] : undefined;

        return {
            '@type': 'Offer',
            name: offerName,
            description: offer.description || (offer.items ? offer.items.join(', ') : undefined),
            ...(priceNum ? { price: priceNum, priceCurrency: 'GEL' } : { priceCurrency: 'GEL' }),
            url: cleanUrl,
            availability: 'https://schema.org/InStock',
        };
    });

    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: options.name,
        description: options.description,
        url: cleanUrl,
        serviceType: options.serviceType || (isEn ? 'Visual Media Production' : 'Визуальный продакшн'),
        ...(options.category ? { category: options.category } : {}),
        provider: {
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'Breus Media',
            url: SITE_URL,
            telephone: BRAND_PHONE_RAW,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tbilisi',
                addressCountry: 'GE',
            },
        },
        areaServed: [
            { '@type': 'City', name: 'Tbilisi' },
            { '@type': 'City', name: 'Batumi' },
            { '@type': 'Country', name: 'Georgia' },
        ],
    };

    if (options.lowPrice || options.highPrice) {
        schema.offers = {
            '@type': 'AggregateOffer',
            priceCurrency: 'GEL',
            lowPrice: options.lowPrice || '250',
            ...(options.highPrice ? { highPrice: options.highPrice } : {}),
            offerCount: options.offers?.length || 3,
        };
    } else if (formattedOffers && formattedOffers.length > 0) {
        schema.hasOfferCatalog = {
            '@type': 'OfferCatalog',
            name: options.name,
            itemListElement: formattedOffers,
        };
    }

    return schema;
};
