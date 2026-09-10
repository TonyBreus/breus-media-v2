import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const config = l2DirectionConfigs.tours360Service;

export const metadata: Metadata = {
    title: '360° туры для бизнеса в Тбилиси | Breus Media',
    description:
        '360° виртуальные туры в Тбилиси и по Грузии: отели, рестораны, клиники, шоурумы, офисы и недвижимость. Объект можно осмотреть до визита. От 200 ₾.',
    alternates: {
        canonical: 'https://breus.media/360-tours-service',
        languages: {
            ru: 'https://breus.media/360-tours-service',
            en: 'https://breus.media/360-tours-service/en',
        },
    },
    openGraph: {
        title: '360° туры для бизнеса в Тбилиси | Breus Media',
        description:
            '360° туры для отелей, ресторанов, клиник, шоурумов, офисов и недвижимости в Тбилиси и Грузии. Объект можно осмотреть до визита, тур открывается по ссылке.',
        url: 'https://breus.media/360-tours-service',
        siteName: 'Breus Media',
        locale: 'ru_GE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '360° туры для бизнеса в Тбилиси | Breus Media',
        description:
            '360° туры для отелей, ресторанов, клиник, шоурумов, офисов и недвижимости в Тбилиси и Грузии. Объект можно осмотреть до визита.',
    },
};

export default function Tours360ServicePage() {
    const faqSchema = {
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

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '360° виртуальные туры',
        serviceType: '360-degree virtual tours',
        description: metadata.description,
        provider: { '@id': 'https://breus.media/#organization' },
        areaServed: [
            { '@type': 'City', name: 'Tbilisi' },
            { '@type': 'Country', name: 'Georgia' },
        ],
        url: 'https://breus.media/360-tours-service',
        priceRange: 'от 200 ₾',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Форматы 360° туров',
            itemListElement: config.data.services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                },
                url: 'https://breus.media/360-tours-service#services',
            })),
        },
        offers: [
            {
                '@type': 'Offer',
                name: 'Старт',
                price: 200,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 200,
                    priceCurrency: 'GEL',
                },
                url: 'https://breus.media/360-tours-service#pricing',
            },
            {
                '@type': 'Offer',
                name: 'Стандарт',
                price: 450,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 450,
                    priceCurrency: 'GEL',
                },
                url: 'https://breus.media/360-tours-service#pricing',
            },
            {
                '@type': 'Offer',
                name: 'Полный объект',
                price: 900,
                priceCurrency: 'GEL',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice: 900,
                    priceCurrency: 'GEL',
                },
                url: 'https://breus.media/360-tours-service#pricing',
            },
        ],
    };

    const breadcrumbSchema = {
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
                name: '360° туры',
                item: 'https://breus.media/360-tours-service',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <L2DirectionRenderer schemaKey="360-tours-service" config={config} includeBaseJsonLd={false} />
        </>
    );
}
