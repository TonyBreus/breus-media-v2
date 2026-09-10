import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const config = l2DirectionConfigs.tourismService;
const pageUrl = 'https://breus.media/tourism-service';
const pageTitle = 'Контент для туризма в Грузии | Breus Media';
const pageDescription =
    'Видео, аэросъёмка, Reels, 360° туры и AI-упаковка для туров, маршрутов, локаций, глэмпингов и туристических проектов в Грузии.';
const ogDescription =
    'Визуальная упаковка туров и маршрутов: видео, дрон, Reels, 360° туры, AI-описания и материалы для сайта, Viator, GetYourGuide, Instagram и рекламы.';

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
        locale: 'ru_GE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function TourismServicePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Контент для туризма в Грузии',
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
            name: 'Форматы контента для туризма',
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
                name: 'Главная',
                item: 'https://breus.media/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Услуги',
                item: 'https://breus.media/#services',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Туризм',
                item: pageUrl,
            },
        ],
    };
    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`tourism-service-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="tourism-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="ru"
                languageLinks={{ ru: '/tourism-service', en: '/tourism-service/en' }}
            />
        </>
    );
}
