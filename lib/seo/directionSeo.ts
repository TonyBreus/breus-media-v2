import type { Metadata } from 'next';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';
import {
    SITE_URL,
    BRAND_PHONE_RAW,
    buildLocalBusinessSchema,
    buildFaqSchema,
    buildBreadcrumbSchema,
    buildServiceSchema,
} from '@/components/seo/JsonLd';

type JsonLdSchema = Record<string, unknown>;

export const buildDirectionMetadata = (config: DroneDirectionPageConfig): Metadata => {
    const isEn = config.path.endsWith('/en');
    const basePath = config.path.replace(/\/en$/, '');
    const canonicalUrl = `${SITE_URL}${config.path}`;
    const ruUrl = `${SITE_URL}${basePath || '/'}`;
    const enUrl = `${SITE_URL}${basePath}/en`;
    const ogImage = `${SITE_URL}/media/gazeta/og-image.jpg`;

    return {
        title: config.seo.title,
        description: config.seo.description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                ru: ruUrl,
                en: enUrl,
                'x-default': ruUrl,
            },
        },
        openGraph: {
            title: config.seo.title,
            description: config.seo.description,
            type: 'website',
            url: canonicalUrl,
            siteName: 'Breus Media',
            locale: isEn ? 'en_GE' : 'ru_GE',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: config.seo.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: config.seo.title,
            description: config.seo.description,
            images: [ogImage],
        },
    };
};

export const buildDirectionJsonLd = (
    config: DroneDirectionPageConfig,
    serviceNames: string[],
    faqs?: Array<{ question: string; answer: string }>
): JsonLdSchema[] => {
    const isEn = config.path.endsWith('/en');
    const pageUrl = `${SITE_URL}${config.path}`;

    const localBusiness = buildLocalBusinessSchema({
        lang: isEn ? 'en' : 'ru',
        url: pageUrl,
    });

    const serviceSchema = buildServiceSchema({
        name: config.seo.schemaServiceName || config.seo.title,
        description: config.seo.description,
        url: pageUrl,
        serviceType: config.seo.schemaServiceType,
        lang: isEn ? 'en' : 'ru',
        offers: serviceNames.map((name) => ({ name, price: 250 })),
    });

    const breadcrumbs = buildBreadcrumbSchema([
        { name: isEn ? 'Home' : 'Главная', item: isEn ? '/gazeta/en' : '/gazeta' },
        { name: config.seo.schemaServiceName || (isEn ? 'Services' : 'Услуги'), item: config.path },
    ]);

    const schemas: JsonLdSchema[] = [localBusiness, serviceSchema, breadcrumbs];

    if (faqs && faqs.length > 0) {
        const faqSchema = buildFaqSchema(faqs);
        if (faqSchema) {
            schemas.push(faqSchema);
        }
    }

    return schemas;
};

