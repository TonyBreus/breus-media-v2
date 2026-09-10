import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DroneStickyCta } from '@/components/drone/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone/MobileBottomBar';
import { DroneStatsStripEn } from '@/components/drone/DroneStatsStripEn';
import { DronePricingStitchEn } from '@/components/drone/DronePricingStitchEn';
import { DroneProcessStitchEn } from '@/components/drone/DroneProcessStitchEn';
import { DroneFlightConditionsNoteEn } from '@/components/drone/DroneFlightConditionsNoteEn';
import { DroneFAQExpandedEn } from '@/components/drone/DroneFAQExpandedEn';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneFooterStitchEn } from '@/components/drone/DroneFooterStitchEn';
import { DroneHeroStitchEn } from '@/components/drone/DroneHeroStitchEn';
import { DroneServicesStitchEn } from '@/components/drone/DroneServicesStitchEn';
import { droneServiceItems, getDroneServiceSortRank, DRONE_OPEN_SERVICE_SLUGS } from '@/components/drone/droneServicesData';
import LangSetter from '@/components/common/LangSetter';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';
import { gazetaDroneServiceTickerExcludeTexts } from '@/constants/gazetaRoutes';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';
import { DroneServiceContactSectionEn } from './DroneServiceContactSectionEn';

type ServiceCard = {
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
    primaryHref: string;
    tag?: string;
    featured?: boolean;
};

type PricingPlan = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
    badge?: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

const pageConfig: DroneDirectionPageConfig = {
    path: '/drone-service/en',
    hero: {
        eyebrow: 'FROM ABOVE - HONESTLY',
        h1: 'DRONE FILMING SERVICES',
        intro: 'Aerial filming for developers, realtors, hotels and brands. We work across Georgia: Tbilisi, Batumi and regions.',
        heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1800&q=80',
        primaryCtaLabel: 'View directions',
        primaryCtaHref: '#directions',
        secondaryCtaLabel: 'Find your service',
        secondaryCtaHref: '#services',
        panelServiceSlugs: [
            'nedvizhimost',
            'monitoring-stroiki',
            'fpv-semka',
            'oteli-kurorty',
            'restorany',
            'turizm',
            'meropriyatiya',
            'inspekciya-obektov',
            'kontrol-territorii',
            'interiery-sklady',
            'sport-kompleksy',
            'reklama-brand-video',
            'aerosyemka-dlya-avto-i-avtosalonov',
            'agro-i-vinodelie',
            'zemelnye-uchastki',
            'inspekciya-fasadov',
            'inspekciya-solnechnyh-paneley',
            'regulyarnye-aerootchety',
        ],
    },
    trust: {
        heading: 'Trusted by',
        badges: ['Developers', 'Realtors', 'Hotels', 'Real estate agencies', 'Investors', 'Brands'],
        location: 'Tbilisi · Batumi · Georgia',
    },
    googleTrust: {
        heading: 'Google Reputation',
        rating: '4.9',
        reviewsText: '50+ reviews',
        profileUrl: 'https://www.google.com/maps/search/?api=1&query=Breus+Media+Tbilisi',
        mapTitle: 'Breus Media',
        mapAddress: 'Tbilisi, Georgia',
        mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
    },
    relatedLinks: [
        {
            title: '360° Virtual Tours',
            href: '/360-tours-service/en',
            description: 'Interactive panoramas for websites, Booking and remote viewings.',
        },
        {
            title: 'Reels and short video',
            href: '/reels-service/en',
            description: 'Short clips for Instagram, TikTok and Shorts.',
        },
        {
            title: 'Promo video',
            href: '/promo-video-service/en',
            description: 'A full promotional video for your website or launch.',
        },
        {
            title: 'AI Visualization',
            href: '/ai-visualization-service/en',
            description: 'Renders and AI content for marketing and sales.',
        },
    ],
    seo: {
        title: 'Drone Filming for Business in Tbilisi | Breus Media',
        description:
            'Professional drone filming in Tbilisi and Georgia: real estate, construction, hotels, restaurants, tourism and events. 4K, FPV, nationwide. From 250 ₾.',
        schemaServiceName: 'Drone Filming in Georgia',
        schemaServiceType: 'Drone video and photography service',
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'GEL',
            lowPrice: '250',
            highPrice: '2600',
            offerCount: '4',
        },
        providerTelephone: '+995501103183',
        areaServed: [
            { '@type': 'City', name: 'Tbilisi' },
            { '@type': 'City', name: 'Batumi' },
            { '@type': 'City', name: 'Kutaisi' },
        ],
    },
};

const serviceCopyBySlug: Record<
    string,
    {
        title: string;
        category: string;
        description: string;
        price: string;
        primaryHref?: string;
    }
> = {
    nedvizhimost: {
        title: 'Real Estate',
        category: 'REALTORS · DEVELOPERS · SALES',
        description:
            'Aerial photos and video for listings and investor presentations. Listings with aerial photos get 94% more views according to HomeJab.',
        price: '4K · MYHOME.GE · SS.GE',
        primaryHref: '/drone-services/drone-real-estate/en',
    },
    'monitoring-stroiki': {
        title: 'Construction Monitoring',
        category: 'DEVELOPERS · BANKS · CONTRACTORS',
        description:
            'Construction is moving - but what is really happening on site? Regular flyovers document progress and give investors a clear picture without site visits.',
        price: '4K · GPS · REPORTS',
    },
    'fpv-semka': {
        title: 'FPV Filming',
        category: 'WAREHOUSES · FACTORIES · LOGISTICS',
        description:
            'We show commercial space from the inside in one shot - from the entrance to the deepest zone. Tenants and investors understand the object before the meeting.',
        price: '4K · INDOOR · FLY-THROUGH',
    },
    'oteli-kurorty': {
        title: 'Hotels & Resorts',
        category: 'BOOKING · VIEWS · APART-HOTELS',
        description:
            'Guests book with their eyes. We film hotels, terraces and views so the Booking page works harder on its own.',
        price: '4K · ATMOSPHERE · PROMO',
        primaryHref: '/drone-hotels-tourism/en',
    },
    restorany: {
        title: 'Restaurants',
        category: 'TERRACES · LOCATION · ATMOSPHERE',
        description:
            'A rooftop terrace, a green courtyard, the location within the district - all of that is visible from the air. Guests understand where they are going before they reserve a table.',
        price: '4K · REELS · STORIES',
        primaryHref: '/drone-services/drone-restaurants/en',
    },
    turizm: {
        title: 'Tourism & Locations',
        category: 'NATURE · ROUTES · GLAMPING',
        description:
            'Mountains, castles and canyons across Georgia - we film destinations from above for tour operators, hotels and personal brands.',
        price: '4K · EXCURSIONS · LANDSCAPES',
        primaryHref: '/drone-hotels-tourism/en',
    },
    meropriyatiya: {
        title: 'Events',
        category: 'EVENTS · OPENINGS · WEDDINGS',
        description:
            'From the ground you see the crowd. From above you see scale, energy and the atmosphere of the event. Ready video can be delivered within 48 hours.',
        price: '4K · SPORTS · EVENTS',
    },
    'inspekciya-obektov': {
        title: 'Object Inspection',
        category: 'FACADES · ROOFS · INDUSTRIAL SITES',
        description:
            'If an object needs to be checked outside, above or in a hard-to-reach area, the drone documents every zone safely and without interrupting operations.',
        price: '4K · COMPLEXES · DOCUMENTATION',
    },
    'kontrol-territorii': {
        title: 'Territory Monitoring',
        category: 'LANDSCAPE · QUARRIES · PERIMETER',
        description:
            'Large sites are hard to control from the ground. Regular flyovers with GPS reference create a complete map of changes without another field visit.',
        price: 'GPS · REPORTS · WEEKLY',
    },
    'interiery-sklady': {
        title: 'Interiors & Warehouses',
        category: 'SHOWROOMS · RETAIL · TENANTS',
        description:
            'The drone flies through aisles, openings and workshops where a tripod camera cannot go. One take makes the whole space readable.',
        price: 'SHOWROOMS · LAYOUT · FPV',
    },
    'sport-kompleksy': {
        title: 'Sports Complexes',
        category: 'STADIUMS · ARENAS · TENNIS COURTS',
        description:
            'A sports venue only feels large from above. We film fields, stands and infrastructure for websites, investors and social media.',
        price: '4K · 60FPS · BROADCAST',
    },
    'reklama-brand-video': {
        title: 'Advertising & Brand Video',
        category: 'BRANDS · CORPORATE · PRODUCTS',
        description:
            'Aerial shots, a plan and editing in one project. Video that works in ads, on the website and across social platforms.',
        price: '4K · PROMO · EDITING',
    },
    'aerosyemka-dlya-avto-i-avtosalonov': {
        title: 'Car Dealerships & Showrooms',
        category: 'CAR LOTS · DEALERS · NETWORKS',
        description:
            'Buyers choose with their eyes. We show the full inventory, lot and dealership infrastructure in one fly-through.',
        price: '4K · SALES · DEMO',
    },
    'agro-i-vinodelie': {
        title: 'Agriculture & Winemaking',
        category: 'BRANDS · INVESTORS · PRODUCERS',
        description:
            'Georgian wine starts in the vineyard. We film vineyards and agricultural sites for crop monitoring, sales materials and brand promotion.',
        price: 'ANALYTICS · CONTROL · AGRI BUSINESS',
    },
    'zemelnye-uchastki': {
        title: 'Land Plots',
        category: 'DEVELOPERS · INVESTORS · LAND SALES',
        description:
            'Boundaries, terrain, surroundings and access - all shown in one flight. It sells faster than any text description.',
        price: 'VALUATION · SALES · PANORAMA',
    },
    'inspekciya-fasadov': {
        title: 'Facade Inspection',
        category: 'OPERATIONS · ENGINEERS · FACADES',
        description:
            'A full facade flyover with video - no scaffolding, no risk for staff and no need to stop work on site. Material is delivered to your specialists.',
        price: 'DIAGNOSTICS · JOINTS · DEFECTS',
    },
    'inspekciya-solnechnyh-paneley': {
        title: 'Solar Panel Inspection',
        category: 'ENERGY · OPERATORS · INVESTORS',
        description:
            'Dust and damage can reduce panel output by up to 30%. One video flyover gives your engineer a full picture without climbing onto the roof.',
        price: 'CONTROL · DIAGNOSTICS · EFFICIENCY',
    },
    'regulyarnye-aerootchety': {
        title: 'Regular Aerial Reports',
        category: 'BANKS · INVESTORS · MANAGEMENT',
        description:
            'Scheduled flyovers with GPS-based reports let investors and managers track site progress without visiting the object in person.',
        price: '4K · GPS · PROGRESS',
    },
};

const serviceCardsEn: ServiceCard[] = [...droneServiceItems]
    .sort((first, second) => getDroneServiceSortRank(first) - getDroneServiceSortRank(second))
    .map((item) => {
        const translation = serviceCopyBySlug[item.slug];

        return {
            slug: item.slug,
            title: translation?.title ?? item.title,
            category: translation?.category ?? item.category,
            description: translation?.description ?? item.description,
            price: translation?.price ?? item.price,
            image: item.image,
            primaryHref: translation?.primaryHref ?? item.primaryHref,
            tag: item.tag,
            featured: item.featured,
        };
    });

const itemListEntries = [
    { position: 1, name: 'Real Estate', url: 'https://breus.media/drone-real-estate' },
    { position: 2, name: 'Construction Monitoring', url: 'https://breus.media/drone-construction-monitoring' },
    { position: 3, name: 'FPV Filming', url: 'https://breus.media/drone-fpv-cinema' },
    { position: 4, name: 'Hotels and Resorts', url: 'https://breus.media/drone-hotels-tourism' },
    { position: 5, name: 'Restaurants', url: 'https://breus.media/drone-services/drone-restaurants' },
    { position: 6, name: 'Tourism and Locations', url: 'https://breus.media/drone-services/drone-territory' },
    { position: 7, name: 'Events', url: 'https://breus.media/drone-weddings-events' },
    { position: 8, name: 'Object Inspection', url: 'https://breus.media/drone-object-inspection' },
    { position: 9, name: 'Territory Monitoring', url: 'https://breus.media/drone-services/drone-territory' },
    { position: 10, name: 'Interior and Warehouse Filming', url: 'https://breus.media/drone-warehouses' },
    { position: 11, name: 'Sports Complexes', url: 'https://breus.media/drone-services/drone-sport' },
    { position: 12, name: 'Advertising and Brand Video', url: 'https://breus.media/drone-services/drone-brand-video' },
    {
        position: 13,
        name: 'Car Dealerships and Showrooms',
        url: 'https://breus.media/drone-services/drone-auto',
    },
    { position: 14, name: 'Agriculture and Winemaking', url: 'https://breus.media/drone-services/drone-wine' },
    { position: 15, name: 'Land Plots', url: 'https://breus.media/drone-services/drone-land-sale' },
    { position: 16, name: 'Facade Inspection', url: 'https://breus.media/drone-services/drone-facade' },
    { position: 17, name: 'Solar Panel Inspection', url: 'https://breus.media/drone-services/drone-solar' },
    { position: 18, name: 'Regular Aerial Reports', url: 'https://breus.media/drone-services/drone-reporting' },
];

const jsonLdSchemas = buildDirectionJsonLd(
    pageConfig,
    itemListEntries.map((item) => item.name)
).map((schema) => {
    if (schema['@type'] === 'Service') {
        const offerCatalog = (schema.hasOfferCatalog ?? {}) as Record<string, unknown>;

        return {
            ...schema,
            hasOfferCatalog: {
                ...offerCatalog,
                name: 'Drone filming directions',
            },
        };
    }

    if (schema['@type'] === 'BreadcrumbList') {
        return {
            ...schema,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://breus.media',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Drone Filming',
                    item: 'https://breus.media/drone-service/en',
                },
            ],
        };
    }

    return schema;
});

export const metadata: Metadata = {
    title: 'Drone Filming for Business in Tbilisi | Breus Media',
    description:
        'Professional drone filming in Tbilisi and Georgia: real estate, construction, hotels, restaurants, tourism and events. 4K, FPV, nationwide. From 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-service/en',
        languages: {
            ru: 'https://breus.media/drone-service',
            en: 'https://breus.media/drone-service/en',
        },
    },
    openGraph: {
        title: 'Drone Filming for Business in Tbilisi | Breus Media',
        description:
            'Professional drone filming in Tbilisi and Georgia: real estate, hotels, restaurants, construction. 4K + FPV. From 250 ₾.',
        url: 'https://breus.media/drone-service/en',
        siteName: 'Breus Media',
        locale: 'en_GE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Drone Filming for Business in Tbilisi | Breus Media',
        description: 'Professional drone filming in Tbilisi and Georgia. 4K + FPV. From 250 ₾.',
    },
};

export default function DroneServicePageEn() {
    const hasOddCount = serviceCardsEn.length % 2 === 1;
    const openServiceSlugSet = new Set<string>(DRONE_OPEN_SERVICE_SLUGS);

    return (
        <main className="relative min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <LangSetter lang="en" />
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`drone-service-en-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'Drone filming services in Tbilisi',
                        description:
                            '18 drone filming directions for business in Tbilisi and Georgia - from real estate to technical inspection. From 250 ₾.',
                        url: 'https://breus.media/drone-service/en',
                        numberOfItems: 18,
                        itemListElement: itemListEntries.map((item) => ({
                            '@type': 'ListItem',
                            position: item.position,
                            name: item.name,
                            url: item.url,
                        })),
                    }),
                }}
            />

            <DronePageScrollProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaHref="#contact"
                initialLang="en"
                languageLinks={{ ru: '/drone-service', en: '/drone-service/en' }}
                singleTickerMode={true}
                tickerExcludeTexts={gazetaDroneServiceTickerExcludeTexts}
                sectionLinks={[
                    { label: 'Services', href: '#services' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <div id="drone-service-hero">
                <DroneHeroStitchEn hero={pageConfig.hero} />
            </div>

            <DroneStatsStripEn />

            <div id="services">
                <DroneServicesStitchEn services={serviceCardsEn} />
            </div>

            <section className="bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Did not find your niche? Tell us about the task - we will suggest a format and estimate the budget.
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Discuss Project
                        </a>
                    </div>
                </div>
            </section>

            <div id="pricing">
                <DronePricingStitchEn />
            </div>

            <DroneProcessStitchEn />
            <DroneFlightConditionsNoteEn />
            <DroneFAQExpandedEn />
            <DroneRelatedLinksCompact links={pageConfig.relatedLinks} title="Other Breus Media services" />

            <DroneServiceContactSectionEn />

            <DroneStickyCta heroId="drone-service-hero" label="Discuss Project" />
            <MobileBottomBar primaryLabel="Discuss Project" />
            <DroneFooterStitchEn />
            
        </main>
    );
}
