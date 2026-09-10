import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const config = l2DirectionConfigs.aiVisualizationService;
const pageUrl = 'https://breus.media/ai-visualization-service';
const pageTitle = 'AI-визуализация для бизнеса в Тбилиси | Breus Media';
const pageDescription =
    'AI-визуализация, AI staging, продуктовые визуалы и тексты для бизнеса в Тбилиси и Грузии. Нейросети ускоряют, человек контролирует результат.';
const ogDescription =
    'AI staging, визуализация интерьеров, продуктовые изображения, меню, авто, отели, туризм и рекламные креативы для бизнеса в Грузии.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: pageUrl,
            en: 'https://breus.media/ai-visualization-service/en',
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

export default function AiVisualizationServicePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI-визуализация для бизнеса',
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
                name: 'AI-визуализация',
                item: pageUrl,
            },
        ],
    };

    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`ai-visualization-service-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer schemaKey="ai-visualization-service" config={config} includeBaseJsonLd={false} />
        </>
    );
}
