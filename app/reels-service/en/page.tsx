import type { Metadata } from 'next';
import LangSetter from '@/components/common/LangSetter';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import type { L2CardsLayoutPreset } from '@/components/l2-direction/types';
import { reelsServiceEnConfig as config } from '@/constants/l2DirectionConfigs.en';

const pageUrl = 'https://breus.media/reels-service/en';
const pageTitle = 'Reels and Shorts for Business in Tbilisi | Breus Media';
const pageDescription =
    'Reels and short-form video production for businesses in Tbilisi and Georgia: Instagram Reels, TikTok and YouTube Shorts from one shoot day.';
const ogDescription =
    'Short-form video packages for restaurants, hotels, real estate, clinics, auto, tourism and local businesses in Tbilisi and Georgia.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/reels-service',
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

const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reels and Shorts for Business',
    serviceType: 'Short-form vertical video production',
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
        name: 'Reels and short-form video formats',
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
            name: 'Reels and Shorts',
            item: pageUrl,
        },
    ],
};

const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

type ReelsServicePageProps = {
    searchParams?: {
        cards?: string | string[];
    };
};

const resolveCardsPreset = (cardsParam: string | string[] | undefined): L2CardsLayoutPreset => {
    const value = Array.isArray(cardsParam) ? cardsParam[0] : cardsParam;
    return value === 'aggressive' ? 'aggressive' : 'soft';
};

export default function ReelsServicePageEn({ searchParams }: ReelsServicePageProps) {
    const servicesLayoutPreset = resolveCardsPreset(searchParams?.cards);

    return (
        <>
            <LangSetter lang="en" />
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`reels-service-en-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="reels-service"
                config={config}
                servicesLayoutPreset={servicesLayoutPreset}
                includeBaseJsonLd={false}
                initialLang="en"
                languageLinks={{ ru: '/reels-service', en: '/reels-service/en' }}
            />
        </>
    );
}
