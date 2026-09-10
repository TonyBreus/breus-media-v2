import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const config = l2DirectionConfigs.clinicsService;
const pageUrl = 'https://breus.media/clinics-service';
const pageTitle = 'Контент для клиник в Тбилиси | Breus Media';
const pageDescription =
    'Видео, Reels, фото, 360° туры и AI-описания для клиник, стоматологий, beauty и wellness-направлений в Тбилиси и Грузии.';
const ogDescription =
    'Визуальная упаковка клиники: видео, Reels, фото кабинетов, 360° туры, материалы для Google Maps, сайта, соцсетей и аккуратные описания услуг.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/clinics-service',
            en: 'https://breus.media/clinics-service/en',
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

export default function ClinicsServicePage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Контент для клиник в Тбилиси',
        serviceType: 'Clinic content production and AI descriptions',
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
            name: 'Форматы контента для клиник',
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
                name: 'Клиники',
                item: pageUrl,
            },
        ],
    };

    const jsonLdSchemas = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

    return (
        <>
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`clinics-service-jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <L2DirectionRenderer
                schemaKey="clinics-service"
                config={config}
                includeBaseJsonLd={false}
                initialLang="ru"
                languageLinks={{ ru: '/clinics-service', en: '/clinics-service/en' }}
            />
        </>
    );
}
