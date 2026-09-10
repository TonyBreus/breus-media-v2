import type { Metadata } from 'next';
import LangSetter from '@/components/common/LangSetter';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { aiVisualizationServiceEnConfig as config } from '@/constants/l2DirectionConfigs.en';

const pageUrl = 'https://breus.media/ai-visualization-service/en';
const pageTitle = 'AI Visualization for Business in Tbilisi | Breus Media';
const pageDescription =
    'AI visualization, AI staging, product visuals and AI-assisted copy for businesses in Tbilisi and Georgia. AI speeds up the draft, humans control the result.';
const ogDescription =
    'AI staging, interior visualization, product images, menus, auto visuals, hotel and tourism copy, and ad creatives for businesses in Georgia.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/ai-visualization-service',
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

export default function AiVisualizationServicePageEn() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Visualization for Business',
        serviceType: 'AI visualization and content service',
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
            name: 'AI visualization formats',
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
                name: 'AI Visualization',
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
                    key={`ai-visualization-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="ai-visualization-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/ai-visualization-service', en: '/ai-visualization-service/en' }}
            />
        </>
    );
}
