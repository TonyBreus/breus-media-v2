import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const config = l2DirectionConfigs.autoService;
const pageUrl = 'https://breus.media/auto-service';
const pageTitle = 'Видеопродакшн для автобизнеса в Тбилиси | Breus Media';
const pageDescription =
    'Имиджевые ролики, обзоры авто, аэросъёмка и Reels для автосалонов, детейлинга и сервисов в Тбилиси. Контент для MyAuto, сайта и соцсетей.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/auto-service',
            en: 'https://breus.media/auto-service/en',
        },
    },
    openGraph: {
        title: pageTitle,
        description:
            'Видео, дрон, Reels, 360° и AI-упаковка для автосалонов, сервисов, детейлинга и автообъявлений в Тбилиси и Грузии.',
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

export default function AutoServicePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Контент для автобизнеса в Тбилиси',
        serviceType: 'Automotive media production service',
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
            name: 'Форматы контента для автобизнеса',
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
                name: 'Автобизнес',
                item: pageUrl,
            },
        ],
    };

    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`auto-service-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="auto-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="ru"
                languageLinks={{ ru: '/auto-service', en: '/auto-service/en' }}
            />
        </>
    );
}
