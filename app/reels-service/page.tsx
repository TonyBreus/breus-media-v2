import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import type { L2CardsLayoutPreset } from '@/components/l2-direction/types';

const config = l2DirectionConfigs.reelsService;
const pageUrl = 'https://breus.media/reels-service';
const pageTitle = 'Reels для бизнеса в Тбилиси | Breus Media';
const pageDescription =
    'Reels для бизнеса в Тбилиси и по Грузии: один съёмочный день — пакет вертикальных видео для Instagram, TikTok и YouTube Shorts.';
const ogDescription =
    'Reels и короткие видео для бизнеса в Тбилиси и Грузии. Съёмка, сценарии, субтитры, монтаж и упаковка под соцсети.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: pageUrl,
            en: 'https://breus.media/reels-service/en',
        },
    },
    openGraph: {
        title: pageTitle,
        description: ogDescription,
        url: pageUrl,
        siteName: 'Breus Media',
        locale: 'ru_GE',
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
    name: 'Reels для бизнеса',
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
        name: 'Форматы Reels для бизнеса',
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
            name: 'Главная',
            item: 'https://breus.media/',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Reels для бизнеса',
            item: 'https://breus.media/reels-service',
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

export default function ReelsServicePage({ searchParams }: ReelsServicePageProps) {
    const servicesLayoutPreset = resolveCardsPreset(searchParams?.cards);

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`reels-service-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="reels-service"
                config={config}
                servicesLayoutPreset={servicesLayoutPreset}
                includeBaseJsonLd={false}
            />
        </>
    );
}
