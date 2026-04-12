import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneStickyCta } from '@/components/drone/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone/MobileBottomBar';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';
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
        providerTelephone: '+995574619393',
        areaServed: [
            { '@type': 'City', name: 'Tbilisi' },
            { '@type': 'City', name: 'Batumi' },
            { '@type': 'City', name: 'Kutaisi' },
        ],
    },
};

const heroBullets = [
    'From the ground you miss the key things: a restaurant terrace, construction scale, a roof defect.',
    'Properties with aerial video sell 68% faster (MLS / NAR).',
    'Drones shoot from above and fly inside spaces - FPV technology.',
    'One flight: content for ads, a report for investors, or documentation for insurance.',
];

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
    .sort((first, second) => (first.order ?? first.id) - (second.order ?? second.id))
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

const stats = [
    { value: '68%', label: 'faster property sales with aerial video', source: 'MLS / NAR' },
    { value: '94%', label: 'more views for listings with aerial photos', source: 'HomeJab, 2025' },
    { value: '403%', label: 'more inquiries with video vs photos only', source: 'Inman / MLS' },
    { value: '73%', label: 'of sellers choose an agent who uses video', source: 'NAR' },
];

const pricingPlans = [
    {
        title: 'Outdoor Flight',
        price: '250 ₾',
        subtitle: 'Aerial drone filming from above',
        items: [
            '4K video + high-res photos - ready to use',
            '10+ photos from different angles',
            'About 1.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'Best if you handle your own visuals - you get the files and use them as needed.',
    },
    {
        title: 'Indoor FPV Flight',
        price: '350 ₾',
        subtitle: 'FPV drone flight through your space',
        items: [
            '4K video - ready to use',
            'Multiple passes - we find the best route',
            'About 1.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'FPV is a compact drone for indoor flights. The camera flies through the space and the viewer feels like they are walking through it.',
    },
    {
        title: 'Full Shoot',
        price: '500 ₾',
        subtitle: 'Aerial + indoor flight - exterior, hall, terrace - in one visit',
        items: [
            'Aerial video and FPV flight in 4K',
            '10+ high-res photos from different angles',
            'About 2.5 hours on site - from setup to final take',
            'File delivery - from 24 hours',
        ],
        note: 'Complete shoot in one visit - aerial exterior and a fly-through of your space.',
        popular: true,
        badge: 'Best value',
    },
    {
        title: 'With Final Result',
        price: 'from 900 ₾',
        subtitle: 'Aerial + indoor flight + editing and photos',
        items: [
            'Planned shooting route',
            'Up to 3 minutes of edited video - split into clips for website, Reels, Stories and TikTok',
            '20+ edited photos',
            'Video for Google Maps listing',
            'File delivery - from 48 hours (editing included)',
        ],
    },
] satisfies PricingPlan[];

const addons = [
    'Reels edit up to 30 sec (music + subtitles): +150 ₾',
    'Edited clip 30-60 sec for website: +150 ₾',
    '360° aerial panorama: +80 ₾',
];

const processSteps = [
    {
        step: '01',
        title: 'REQUEST',
        text: 'Describe the task, object or location - we suggest the right format.',
    },
    {
        step: '02',
        title: 'PLAN',
        text: 'We agree on a date, confirm the flight zone and shooting conditions.',
    },
    {
        step: '03',
        title: 'SHOOT',
        text: 'We work on site, make several passes - and select the best material.',
    },
    {
        step: '04',
        title: 'DELIVERY',
        text: 'We send the ready files in a convenient way within the agreed timeframe.',
    },
] satisfies ProcessStep[];

const faqItems = [
    {
        question: 'How much does drone filming cost in Tbilisi?',
        answer:
            'Outdoor flight from 250 ₾. Indoor FPV from 350 ₾. Full shoot (outdoor + indoor) from 500 ₾. Final price depends on the task, location and scope.',
    },
    {
        question: 'What is FPV filming and how is it different from regular drone filming?',
        answer:
            'FPV (First Person View) is a compact drone that flies inside spaces: through a restaurant hall, warehouse, showroom or workshop. The viewer experiences the space from inside, in motion. A regular drone shoots from outside and above - facade, territory, surroundings.',
    },
    {
        question: 'Do you work outside Tbilisi?',
        answer:
            'Yes. We shoot across all of Tbilisi - Vake, Saburtalo, Mtatsminda, Didube, Gldani, Isani, Varketili. We travel across Georgia: Batumi, Kutaisi, Borjomi, Kazbegi and other locations. Travel outside Tbilisi is quoted separately.',
    },
    {
        question: 'Do you need a permit to fly a drone?',
        answer:
            'Drone flights in Georgia are regulated by GCAA. We follow all regulations and check the shooting zone in advance. If the location is near an airport or in a restricted zone - we inform you before the visit.',
    },
    {
        question: 'What format will I receive the files in?',
        answer:
            'Video in MP4, 4K resolution. Photos in high-res JPG. All files are delivered via cloud storage (Google Drive or similar) within 1-3 business days after the shoot.',
    },
    {
        question: 'How quickly will the result be ready?',
        answer:
            'Raw files - on the day of the shoot or the next day. An edited clip - within 3-5 business days. Timelines can be adjusted by agreement.',
    },
    {
        question: 'Do you only shoot for real estate?',
        answer:
            'No - we have 18 shooting directions. We work with restaurants, hotels, construction, tourism, object inspection, sports, winemaking and other niches. If you do not see your direction - just describe the task and we will find the right format.',
    },
    {
        question: 'Can I order photos only, without video?',
        answer:
            'Yes. Aerial photography is a standalone service. Let us know when you submit a request that you need photos only - we will adjust the visit format and pricing.',
    },
] satisfies FaqItem[];

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

function FooterSectionEn() {
    const footerLinks = [
        { label: 'Aerial Filming', href: '/drone-service/en' },
        { label: '360° Tours', href: '/360-tours-service/en' },
        { label: 'Reels and Video', href: '/reels-service/en' },
        { label: 'AI Visualization', href: '/ai-visualization-service/en' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="border-t border-[#2a2a2a] bg-[#060606] py-8 md:py-16">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 text-center md:grid-cols-4 md:gap-12 md:text-left">
                <div className="col-span-1 flex flex-col items-center md:col-span-2 md:items-start">
                    <div className="mb-4 flex items-center text-xl font-bold tracking-tighter text-white">
                        <span className="mr-2 text-[#D4A017]">✈</span> BREUS MEDIA
                    </div>
                    <p className="mb-5 max-w-sm text-sm leading-relaxed text-gray-500 md:mb-8">
                        Professional aerial filming and visual production for business in Georgia. Tbilisi, Batumi,
                        Kutaisi.
                    </p>
                    <div className="flex space-x-6">
                        {[
                            { label: 'Instagram', href: 'https://www.instagram.com/breusmedia', icon: Instagram },
                            { label: 'Telegram', href: 'https://t.me/breusmedia', icon: Send },
                            { label: 'Facebook', href: 'https://www.facebook.com/breusmedia', icon: Facebook },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breusmedia', icon: Linkedin },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 transition-all hover:border-[#D4A017] hover:text-[#D4A017]"
                            >
                                <social.icon className="h-4 w-4" strokeWidth={1.9} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white md:mb-6">Menu</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        {footerLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="transition-colors hover:text-white">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white md:mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>Tbilisi, Georgia</li>
                        <li className="font-bold text-white">+995 574 619 393</li>
                        <li className="transition-colors hover:text-white">hello@breus.media</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-8 border-t border-[#2a2a2a] px-6 pt-6 text-center text-[10px] uppercase tracking-[0.3em] text-gray-600 md:mt-16 md:pt-8">
                © 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}

export default function DroneServicePageEn() {
    const hasOddCount = serviceCardsEn.length % 2 === 1;

    return (
        <main className="relative min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
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
                sectionLinks={[
                    { label: 'Services', href: '#services' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <section
                id="drone-service-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-40 md:pb-20 md:pt-48"
            >
                <div aria-hidden className="absolute inset-0">
                    <img
                        src={pageConfig.hero.heroImage}
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/88 via-[#080808]/50 to-[#080808]/84" />
                </div>

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.3fr)_340px]">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#FFD23F]">
                                {pageConfig.hero.eyebrow}
                            </p>
                            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                {pageConfig.hero.h1}
                            </h1>
                            <p className="mt-5 max-w-3xl text-[17px] leading-[1.5] text-white/80 md:text-[20px]">
                                {pageConfig.hero.intro}
                            </p>

                            <div className="mt-8 grid gap-3 md:grid-cols-2">
                                {heroBullets.map((bullet) => (
                                    <div
                                        key={bullet}
                                        className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/76 backdrop-blur"
                                    >
                                        {bullet}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={pageConfig.hero.primaryCtaHref}
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    {pageConfig.hero.primaryCtaLabel}
                                </a>
                                <a
                                    href={pageConfig.hero.secondaryCtaHref}
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    {pageConfig.hero.secondaryCtaLabel}
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                At a glance
                            </p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">18 directions · from 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        One shoot can cover ads, documentation, investor updates and platform-ready clips.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4K + FPV</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                                            Formats
                                        </p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24-48 h</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                                            Delivery
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-white/72">
                                    Tbilisi · Batumi · Kutaisi
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-7 hidden justify-center md:flex">
                    <a
                        href="#directions"
                        className="flex flex-col items-center gap-1 text-[#FFD23F] transition-opacity hover:opacity-85"
                        aria-label="View service directions"
                    >
                        <ChevronDown className="h-5 w-5 animate-bounce" />
                        <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                            18 directions
                        </span>
                    </a>
                </div>
            </section>

            <DroneTrustLite trust={pageConfig.trust} />

            <section
                id="directions"
                className="block scroll-mt-20 border-t border-[#C9A84C]/10 bg-[#0d0d0d] px-4 py-4 md:hidden"
            >
                <h2 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">
                    Directions
                </h2>

                <div className="grid grid-cols-2 gap-1.5">
                    {serviceCardsEn.map((item, index) => (
                        <Link
                            href={`#service-${item.slug}`}
                            key={item.slug}
                            className={`flex items-center gap-1.5 rounded-[8px] border border-[#C9A84C]/15 bg-gradient-to-b from-[#171717] to-[#121212] px-2.5 py-1.5 text-[12px] leading-snug text-white/80 transition-colors hover:border-[#C9A84C]/35 hover:text-[#C9A84C] ${
                                hasOddCount && index === serviceCardsEn.length - 1 ? 'col-span-2 justify-start' : ''
                            }`}
                        >
                            <ChevronRight size={10} className="shrink-0 text-[#C9A84C] opacity-50" />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-4 flex flex-col items-center gap-2 text-center">
                    <a
                        href="#services"
                        className="mt-1 flex flex-col items-center gap-1 text-[#C9A84C]"
                        aria-label="Go to service cards"
                    >
                        <ChevronDown className="h-5 w-5 animate-bounce" />
                        <span className="text-[11px] uppercase tracking-wider opacity-70">view cards</span>
                    </a>
                </div>
            </section>

            <section className="bg-[#080808] py-8 md:py-24" id="services">
                <div className="mx-auto w-full max-w-[1400px] px-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {serviceCardsEn.map((service) => (
                            <article
                                key={service.slug}
                                id={`service-${service.slug}`}
                                className={`service-card-target flex flex-col overflow-hidden rounded-[12px] border border-[#2a2a2a] bg-[#141414] transition-all group hover:border-[#D4A017] scroll-mt-32 ${
                                    service.featured ? 'border-[#D4A017]/50' : ''
                                }`}
                                style={service.featured ? { boxShadow: '0 0 20px rgba(212, 160, 23, 0.2)' } : undefined}
                            >
                                <div className="relative h-40 overflow-hidden bg-neutral-800">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
                                    />
                                    {service.tag ? (
                                        <div className="absolute left-4 top-4 flex gap-2">
                                            <span
                                                className={`rounded px-2 py-1 text-[10px] font-bold ${
                                                    service.tag === 'HOT'
                                                        ? 'bg-[#D4A017] text-black'
                                                        : 'bg-black/50 text-white backdrop-blur'
                                                }`}
                                            >
                                                {service.tag}
                                            </span>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="flex flex-grow flex-col px-5 pb-4 pt-5">
                                    <h2 className="mb-1 text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-white">
                                        {service.title}
                                    </h2>
                                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/[0.45]">
                                        {service.category}
                                    </div>
                                    <p className="mb-3 text-[14px] leading-[1.65] text-white/[0.82]">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="mb-4 border-t border-[#2a2a2a] pt-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#F5C518]">
                                            {service.price}
                                        </div>
                                        <div className="flex gap-3">
                                            <Link
                                                href={service.primaryHref}
                                                className="flex-1 rounded-lg bg-[#D4A017] px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                                            >
                                                Open Service
                                            </Link>
                                            <a
                                                href="#contact"
                                                className="flex-1 rounded-lg border border-white/20 px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                                            >
                                                Discuss Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-[#2a2a2a] bg-[#0a0a0a] py-8 md:py-14">
                <div className="container mx-auto px-6">
                    <p className="mb-5 text-center text-[11px] uppercase tracking-[3px] text-[#D4A017] md:mb-8">
                        Aerial filming in numbers
                    </p>
                    <div className="grid grid-cols-2 gap-px bg-[#2a2a2a] md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.value} className="bg-[#0a0a0a] px-6 py-5 text-center md:py-8">
                                <div className="mb-3 text-[40px] font-bold leading-none text-[#D4A017] md:text-[52px]">
                                    {stat.value}
                                </div>
                                <p className="mb-2 text-[13px] leading-snug text-white/70">{stat.label}</p>
                                <p className="text-[11px] tracking-wide text-white/35">{stat.source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Did not find your niche? Tell us about the task - we will suggest a format and estimate the
                            budget.
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

            <section id="pricing" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 lg:scroll-mt-24 md:py-24">
                <div className="container mx-auto mb-8 px-6 text-center md:mb-16">
                    <h2 className="mb-4 text-3xl font-bold text-white">Packages and pricing</h2>
                    <p className="text-sm text-gray-500 md:text-base">
                        Fixed prices in Georgian lari (₾). No hidden fees.
                    </p>
                </div>

                <div className="container mx-auto grid items-start gap-5 px-6 xl:grid-cols-4">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.title}
                            className={`flex flex-col rounded-[20px] border p-5 md:p-6 ${
                                plan.popular
                                    ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                    : 'border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-white md:text-xl">{plan.title}</h3>
                                <p className="mt-2 text-xs text-white/64 md:text-sm">{plan.subtitle}</p>
                            </div>
                            <div className="mt-5 flex items-center gap-2 md:mt-6 md:gap-3">
                                <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{plan.price}</p>
                                {plan.badge ? (
                                    <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                        {plan.badge}
                                    </span>
                                ) : null}
                            </div>
                            <ul className="mt-5 flex-1 space-y-2.5 text-[13px] leading-relaxed text-white/72 md:mt-6 md:space-y-3 md:text-sm">
                                {plan.items.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                            {plan.note ? (
                                <p className="mt-4 text-xs leading-relaxed text-white/58 md:mt-5 md:text-sm">
                                    {plan.note}
                                </p>
                            ) : null}
                            <a
                                href="#contact"
                                className="mt-5 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-6 md:py-2.5 md:text-xs"
                            >
                                Discuss this package →
                            </a>
                        </div>
                    ))}
                </div>

                <div className="container mx-auto mt-6 px-6 md:mt-10">
                    <div className="rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <h3 className="text-xl font-bold text-white">Add-ons</h3>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            {addons.map((addon) => (
                                <li
                                    key={addon}
                                    className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72"
                                >
                                    {addon}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] py-4 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="px-2 py-2 md:hidden">
                        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/35">
                            From request to ready files
                        </p>
                        <div className="flex flex-col">
                            {processSteps.map((step, index) => (
                                <div key={step.step}>
                                    <div className="flex items-center gap-3 rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-3 py-2">
                                        <span className="w-5 shrink-0 font-mono text-[11px] text-white/25">{step.step}</span>
                                        <span className="text-[12px] font-bold uppercase tracking-widest text-[#D4A017]">
                                            {step.title}
                                        </span>
                                        <span className="text-[11px] leading-snug text-white/45">{step.text}</span>
                                    </div>
                                    {index < processSteps.length - 1 ? (
                                        <div className="flex justify-center py-0.5 text-xs text-white/20">↓</div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <p className="mb-8 text-[10px] uppercase tracking-[0.18em] text-white/35">
                            From request to ready files
                        </p>
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                            {processSteps.map((step) => (
                                <div key={step.step} className="group relative">
                                    <div className="absolute -left-4 -top-10 hidden select-none text-6xl font-black text-white/5 transition-colors group-hover:text-[#D4A017]/10 md:block">
                                        {step.step}
                                    </div>
                                    <h3 className="mb-3 font-bold tracking-widest text-[#D4A017]">{step.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-500">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-white/90 md:text-base">
                            Flight zones
                        </h3>
                        <p className="text-sm leading-relaxed text-white/65 md:text-[15px]">
                            We fly under GCAA regulations. We check your location before the visit - provide the
                            address when you submit a request.
                        </p>
                        <p className="mt-4 text-[11px] leading-relaxed text-white/35">
                            Equipment: DJI Air 3S (aerial filming, 4K/60fps, GPS) · DJI Avata 2 (FPV indoor flights,
                            4K) · Insta360 X5 (360° panoramas). All flights comply with GCAA Georgia regulations.
                        </p>
                    </div>
                </div>
            </section>

            <section id="faq" className="scroll-mt-20 bg-[#0D0D0D] py-10 lg:scroll-mt-24 md:py-24">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="mb-8 text-center md:mb-16">
                        <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                            Frequently asked questions
                        </h2>
                        <div className="mx-auto h-1 w-12 bg-[#D4A017]" />
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item) => (
                            <details
                                key={item.question}
                                className="group cursor-pointer rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 transition-all duration-300 hover:border-[#D4A017]/50"
                            >
                                <summary className="flex list-none items-center justify-between gap-4 text-sm font-bold uppercase tracking-widest text-white/90 transition-colors group-open:text-[#D4A017]">
                                    {item.question}
                                    <span className="text-xl text-[#D4A017] transition-transform duration-300 group-open:rotate-180">
                                        ↓
                                    </span>
                                </summary>
                                <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed text-gray-400">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white">Other Breus Media services</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {pageConfig.relatedLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 transition-colors hover:border-[#D4A017]/70"
                            >
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.08em] text-white">
                                    {link.title}
                                </p>
                                <p className="text-xs leading-relaxed text-gray-400">{link.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <DroneServiceContactSectionEn />

            <DroneStickyCta heroId="drone-service-hero" label="Discuss Project" />
            <MobileBottomBar primaryLabel="Discuss Project" />
            <FooterSectionEn />
        </main>
    );
}
