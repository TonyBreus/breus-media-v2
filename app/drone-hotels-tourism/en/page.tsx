import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { FormatExamplesSlideshow } from '@/components/drone-restaurants/FormatExamplesSlideshow';
import formatExampleOne from '@/services-images/drone-restaurants/final/4.png';
import formatExampleTwo from '@/services-images/drone-restaurants/final/2.png';
import formatExampleThree from '@/services-images/drone-restaurants/final/3.png';
import HeroBackgroundMountains from '@/components/drone-hotels-tourism/HeroBackgroundMountains';
import LangSetter from '@/components/common/LangSetter';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

const problemCards: CardItem[] = [
    {
        title: '“On Booking we look like everyone else — nice photos, but so do our competitors.”',
        text: 'Drone footage shows the grounds, the location and the atmosphere — things standard photos can’t convey.',
    },
    {
        title: '“The real value of our hotel is the nature around it, but you can’t capture that from the ground.”',
        text: 'The drone reveals mountains, the sea, vineyards — the full context of the location that sells the destination.',
    },
    {
        title: '“We need visuals for the website, Booking and Instagram — one shoot should cover it all.”',
        text: 'A single session gives you the hero edit, short-form cuts for social and processed stills tailored to every channel.',
    },
    {
        title: '“I want to show the pool, the terrace, the view — but the ground angle just isn’t right.”',
        text: 'The drone captures from above and in motion: lounge areas, landscape, grounds — exactly what a guest wants to see before they book.',
    },
    {
        title: '“I don’t know what to order or how much it costs.”',
        text: 'Three packages with fixed prices, scope and timelines on this page. A custom quote for your property is free.',
    },
    {
        title: '“I’ve been thinking about it for six months and can’t pull the trigger.”',
        text: 'We start with a short 15-minute brief. We’ll suggest the format to begin with — so you get the first result in a single shoot day, without long approval loops.',
    },
];

const deliverablesDefault: string[] = [
    '4K video files — ready to use',
    'Delivery via Google Drive or WeTransfer',
    'Tbilisi travel included',
    'One round of video revisions on packages with editing',
];

const deliverablesPremium: string[] = [
    'Editing of the main reel and short cuts',
    'Processed photography',
    'Files sorted into folders: website, social, Google Maps',
    'Format tailored to the brief: horizontal, vertical or both',
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Exterior Flight',
        price: '250 ₾',
        subtitle: 'Aerial drone footage from above',
        items: [
            '4K video + high-resolution stills — ready to use',
            '10+ photos from multiple angles',
            'About 1.5 hours on site — from setup to final take',
            'File delivery — from 24 hours',
        ],
        note: 'A fit if you handle the visuals yourself — receive the files and use them wherever you need.',
    },
    {
        title: 'Interior FPV Flight',
        price: '350 ₾',
        subtitle: 'FPV drone, camera pass through the hotel',
        items: [
            '4K video — ready to use',
            'Several passes — we pick the best route',
            'About 1.5 hours on site — from setup to final take',
            'File delivery — from 24 hours',
        ],
        note: 'FPV is in-motion footage through space. We align the route and details before the shoot so the result hits the brief.',
    },
    {
        title: 'Full Shoot',
        price: '500 ₾',
        subtitle: 'Aerial + interior FPV — grounds, reception, room — in one visit',
        items: [
            '4K aerial video and FPV pass',
            '10+ high-resolution photos from multiple angles',
            'About 2.5 hours on site — from setup to final take',
            'File delivery — from 24 hours',
        ],
        note: 'A full shoot in one visit — facade from the air and an FPV pass through your space.',
        popular: true,
    },
    {
        title: 'Shoot with Finished Result',
        price: 'from 900 ₾',
        subtitle: 'Aerial + interior FPV + editing and photos',
        items: [
            'Pre-planned shooting route',
            'Up to 3 minutes of edited video — split into cuts for the website, Reels, Stories and TikTok',
            '20+ processed photos',
            'A video cut for the Google Maps listing',
            'Delivery — from 48 hours (editing included)',
        ],
        note: '',
    },
];

const addonPricing: string[] = [
    'Reels edit up to 30s (music + captions): +150 ₾',
    'Website edit 30–60s: +150 ₾',
    '360° aerial panorama: +80 ₾',
];

const processSteps: ProcessStep[] = [
    {
        step: 'Step 1',
        title: 'Discuss the brief',
        text: 'Tell us the property type, goals and zones to cover. We suggest the format and package that fit. Quote comes back the same day.',
    },
    {
        step: 'Step 2',
        title: 'Preparation',
        text: 'We align on the route, timing and location specifics. For mountain or restricted zones we verify permissions in advance.',
    },
    {
        step: 'Step 3',
        title: 'Shoot',
        text: 'Aerial coverage outside + interior camera pass on the agreed plan where it fits. 2–4 hours on site. Hotel operations keep running.',
    },
    {
        step: 'Step 4',
        title: 'Editing and processing',
        text: 'We cut the main reel, deliver short-form versions for social, and retouch the photos.',
    },
    {
        step: 'Step 5',
        title: 'File delivery',
        text: 'A folder of ready files: website, booking platforms, Reels, Google Maps. One round of revisions included.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Urban Boutique Hotel (Tbilisi)',
        pain: 'Lost among similar listings on Booking.',
        solution: 'Aerial frames of the district, city positioning, views over historic quarters.',
        deliverables: 'Main reel + social cuts + photos for Booking.',
    },
    {
        title: 'Wine Hotel in Kakheti',
        pain: 'The core value — vineyards, cellar and valley panorama — isn’t readable from the ground.',
        solution: 'Aerial footage of vineyards, winery spaces, approach to the hotel and Alazani Valley views.',
        deliverables: 'Cinematic reel + 3–5 social cuts + 30+ photos.',
    },
    {
        title: 'Mountain Hotel (Kazbegi, Gudauri, Bakuriani)',
        pain: 'The landscape is the product — and it can’t be shown from the ground.',
        solution: 'Mountain context, approach to the hotel, views from rooms captured from above.',
        deliverables: 'Cinematic reel + photography.',
    },
    {
        title: 'Apart-Hotel and Airbnb (multiple units)',
        pain: 'Visuals needed for every unit, on a limited budget.',
        solution: 'A multi-unit package in a single trip with fast delivery.',
        deliverables: 'Aerial photos + a short reel.',
    },
    {
        title: 'Travel Projects and Tour Operators',
        pain: 'A destination reel is needed to sell Georgia as a travel destination.',
        solution: 'Aerial coverage of locations, landscapes, cultural sites and nature zones.',
        deliverables: 'Main reel + a series of social cuts.',
    },
    {
        title: 'International Hotel Chain',
        pain: 'A local operator is needed with the right workflow and EN communication.',
        solution: 'Production package, itemised estimate, Full Source Files, work within GCAA rules.',
        deliverables: 'Against a shot list, formats matched to chain standards.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'We shoot so guests actually book',
        text: 'The booking decision happens in a few seconds of scrolling — on Booking, Instagram or the website. We don’t shoot for the sake of a pretty flyover. We shoot so the future guest understands: where the hotel is, the view from the window, what surrounds it — sea, mountains, city centre — and what’s waiting inside.',
    },
    {
        title: 'Two shooting formats from one visit',
        text: 'Smooth aerial frames outside + an interior camera pass through lobby, restaurant and common areas where appropriate. No second trip, no second approval round with the hotel team.',
    },
    {
        title: 'Frames for Booking, website, Instagram and the Google Maps listing',
        text: 'One shoot delivers vertical Reels, horizontal cuts for the website and Booking, stills for the Google Maps listing and paid campaigns. A single shoot day covers every channel.',
    },
    {
        title: 'Direct contact, no middle layers',
        text: 'Brief, revisions and questions go direct. A small team means faster turnarounds and simpler communication.',
    },
    {
        title: 'The view from the window is the hero frame',
        text: 'We capture what the guest will see from their balcony: Kakheti vineyards, the peaks of Gudauri, the rooftops of old Tbilisi. The room view is the argument that decides one hotel over another.',
    },
    {
        title: 'Footage that outlives a single season',
        text: 'We shoot so the video works for at least a year — not tied to a specific event or seasonal dressing. You get material that won’t feel dated three months later.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° virtual tours for hotels',
        href: '/360-tour-hotels/en',
        text: 'Interactive 8K virtual walkthroughs for website and OTA listings (Booking, Airbnb) to boost booking confidence.',
    },
    {
        title: 'Reels for hotels and resorts',
        href: '/reels-promo/reels-hotel',
        text: 'Dynamic vertical videos of suites, spa, dining, and scenic views for viral Instagram reach.',
    },
];

const formatExampleCards = [
    {
        image: formatExampleOne,
        alt: 'Aerial drone footage of a hotel terrace with coastal panorama — Breus Media example in Tbilisi',
    },
    { image: formatExampleTwo, alt: 'Hotel interior with a panoramic window onto the evening city — drone shoot still' },
    { image: formatExampleThree, alt: 'Suite bedroom with a night-time city panorama — asset for Booking and website' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const statsCards: StatCard[] = [
    {
        stat: '+60%',
        label: 'more bookings',
        description: 'go to hotels with strong photography compared with those relying on generic shots. Expedia research on hospitality listings.',
        source: 'Expedia study, via Paul Reiffer (hospitality photography)',
        sourceUrl: 'https://www.paulreiffer.com/2025/05/does-great-photography-really-drive-luxury-hotel-bookings/',
    },
    {
        stat: '×2',
        label: 'higher engagement',
        description: 'on hotel listings with 20+ strong images, compared with listings that have few or low-quality photos. On Airbnb, properly shot properties see booking lifts of up to +33%.',
        source: 'Expedia study, via Paul Reiffer (hospitality photography)',
        sourceUrl: 'https://www.paulreiffer.com/2025/05/does-great-photography-really-drive-luxury-hotel-bookings/',
    },
    {
        stat: '×2.7',
        label: 'more trust',
        description: 'for businesses with a fully completed Google Maps listing. Per Google: users are on average 2.7× more likely to consider such businesses trustworthy, and 70% more likely to visit them.',
        source: 'Google, official Google Business statistics',
        sourceUrl: 'https://searchendurance.com/google-business-profile-statistics/',
    },
    {
        stat: '1.5–2.5%',
        label: 'average website conversion',
        description: 'for hotel websites per Hotel Tech Report. That means of every 100 people on the booking page, 1–2 complete a reservation. Strong visuals are one of the key levers that move that number up.',
        source: 'Hotel Tech Report, via RMS Cloud',
        sourceUrl: 'https://www.rmscloud.com/blog/improve-your-hotel-booking-conversion-rate',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'What does aerial footage actually give a hotel?',
        answer:
            'It communicates what standard photos explain poorly: the grounds, the location in the city or landscape, the view from above, key zones — pool, rooftop, garden. The guest understands where they’re going before they arrive.',
    },
    {
        question: 'Can we shoot while guests are on site?',
        answer:
            'Yes, with caveats. For exterior and aerial work guests aren’t an issue. For interior FPV passes we suggest quieter hours — before check-in, after breakfast or during a technical window. We shoot the space, not faces.',
    },
    {
        question: 'How is an FPV pass different from standard aerial video?',
        answer:
            'A standard drone captures smooth, stable panoramas outside — facade, grounds, elevated views. An FPV drone works indoors too: lobby, corridor, pool area — delivering a continuous, immersive shot. It’s an option, not a mandatory part of every package.',
    },
    {
        question: 'Is the footage suitable for Booking, Airbnb and other booking platforms?',
        answer:
            'Yes. We deliver in formats the major platforms accept: JPG / WebP for stills, MP4 for video. Horizontal versions for the website and YouTube, vertical for Reels and mobile booking platforms. We adapt to your requirements.',
    },
    {
        question: 'Do we need to close the hotel for the shoot?',
        answer:
            'No. We pick a shooting window that overlaps minimally with active guest flow: early morning, between check-ins or an agreed technical slot.',
    },
    {
        question: 'How much does a drone shoot for a hotel in Tbilisi cost?',
        answer:
            'Aerial footage from above — 250 ₾. Interior FPV pass — 350 ₾. Full shoot in one visit — 500 ₾. These packages include photos and video in 4K. Shoot with editing and social cuts — from 900 ₾. Any package can be topped up with a Reels edit (+150 ₾), a website cut (+150 ₾) or a 360° panorama (+80 ₾).',
    },
    {
        question: 'How long does the shoot take?',
        answer:
            'Shooting takes 1–3 hours depending on the brief. Unedited video files — from 24 hours. Finished, edited footage — 3 to 7 working days.',
    },
    {
        question: 'Can we shoot several properties at once?',
        answer:
            'Yes. If you run several apart-hotels or units in the same city, we’ll put together a multi-shoot package. For ongoing work the per-property rate is lower.',
    },
    {
        question: 'Do you work outside Tbilisi?',
        answer:
            'Yes. Kakheti, Kazbegi, Gudauri and Bakuriani — by arrangement. Travel cost depends on distance and logistics and is confirmed at the brief stage.',
    },
    {
        question: 'What weather conditions do drones fly in?',
        answer:
            'Winds up to 10–12 m/s and no precipitation. Mountain regions get discussed separately — they have their own weather patterns and altitude constraints. If conditions aren’t right we reschedule at no extra cost.',
    },
    {
        question: 'Are flight permissions needed in Tbilisi?',
        answer:
            'Yes. Drone flights are regulated by the Georgian Civil Aviation Agency (GCAA). Airspace checks and any required approvals are on us — you don’t need to file anything.',
    },
    {
        question: 'How does a drone help a listing stand out on Booking and similar platforms?',
        answer:
            'Booking shows listings in a dense grid of similar photos. Aerial footage and a pass across the grounds pull the listing out — the guest sees the scale, the nature around it and the location. It especially works for resort and mountain hotels, where the main value sits outside the building.',
    },
    {
        question: 'What can we shoot if the hotel is still under construction or about to open?',
        answer:
            'At the pre-opening stage we cover the grounds, landscape and views — building the visual base before launch. The same footage then works in ads and on booking platforms. Parts of it can be refreshed after opening without a full reshoot.',
    },
    {
        question: 'Can we shoot the exterior in winter and the interior separately in summer?',
        answer:
            'Yes. If weather or season rules out a single shoot, we split it into two stages. On each stage we lock colour and light so the final cuts sit together cleanly.',
    },
    {
        question: 'Is there a contract?',
        answer:
            'Yes. For one-off and ongoing work we sign a services contract covering the core terms, working format and payment schedule.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
    name: 'Drone videography for hotels and tourism in Tbilisi',
    description:
        'Aerial and FPV drone video for hotels, resorts and tourism properties in Tbilisi and across Georgia. Assets for the website, Booking and booking platforms, and social.',
    provider: {
        '@id': 'https://breus.media/#organization',
    },
    areaServed: ['Tbilisi', 'Kakheti', 'Kazbegi', 'Gudauri', 'Bakuriani', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '900',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-hotels-tourism/en',
    inLanguage: 'en',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description: 'Media production in Tbilisi. Aerial and FPV drone video, 360° virtual tours and shoots for hotels and tourism.',
    url: 'https://breus.media',
    telephone: '+995501103183',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tbilisi',
        addressRegion: 'Tbilisi',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    openingHours: 'Mo-Su 09:00-20:00',
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
            name: 'Tourism & Hospitality',
            item: 'https://breus.media/tourism-service/en',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Drone Videography for Hotels and Resorts',
            item: 'https://breus.media/drone-hotels-tourism/en',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Drone Videography for Hotels in Georgia | FPV Hotel Tours Tbilisi | Breus Media',
    description:
        'Aerial and FPV drone video for hotels, resorts and tourism properties in Tbilisi and across Georgia. Assets for the website, Booking and social. From 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-hotels-tourism/en',
        languages: {
            'ru-RU': 'https://breus.media/drone-hotels-tourism',
            'en-US': 'https://breus.media/drone-hotels-tourism/en',
            'x-default': 'https://breus.media/drone-hotels-tourism',
        },
    },
    openGraph: {
        title: 'Drone Videography for Hotels in Georgia | Breus Media',
        description:
            'Aerial and FPV drone video for hotels and resorts in Tbilisi, from 250 ₾. Assets for Booking, the website and Reels. Exterior, interior and turnkey.',
        url: 'https://breus.media/drone-hotels-tourism/en',
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Drone Videography for Hotels in Georgia | Breus Media',
        description: 'Drone + FPV for Booking, website and social. From 250 ₾.',
    },
};

export default function DroneHotelsTourismEnPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <LangSetter lang="en" />
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang="EN"
                ctaLabel="Discuss the brief"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'PRICING', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{
                    RU: '/drone-hotels-tourism',
                    EN: '/drone-hotels-tourism/en',
                }}
                sectionLinks={[
                    { label: 'Process', href: '#process' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385100} label="Hero Section">
                <section
                    id="drone-hotels-tourism-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-36 md:pb-20 md:pt-44"
                >
                    <div aria-hidden className="absolute inset-0">
                        <HeroBackgroundMountains />
                    </div>
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.55)_75%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <h1 className="max-w-4xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Drone videography for hotels and resorts in Tbilisi and across Georgia
                                </h1>

                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Hotels are increasingly chosen from video — before the guest ever clicks “book”.
                                </p>

                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    Everyone has photos, but they don’t convey the scale of the grounds, the view from
                                    the roof, the walk from the gate to the lobby. A drone captures this from above and
                                    in motion — the guest knows where they’re going while they’re still choosing.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    An FPV camera goes further — it flies through an archway, glides over the pool,
                                    moves through the lobby in a single continuous take. A few seconds, and a person
                                    feels the space the way they would in real life.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                    From one shoot you get assets for Booking, the website, Instagram, TikTok and the
                                    Google Maps listing — all in the right formats, no extra approvals.
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                    A single visit covers the facade, the grounds and the common zones — the hotel’s
                                    video base is ready for the next season in advance.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Book a Shoot
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        View Packages
                                    </a>
                                </div>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">At a glance</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">from 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Your hotel through the guest’s eyes — before they arrive</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">1–3 h</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Shoot</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">from 24 h</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Delivery</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Exterior, interior, atmosphere — all in 4K</li>
                                        <li>We shoot and edit — you just publish</li>
                                        <li>One visit — video that works for years</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <ScrollArrow />
                </section>
            </DebugWrapper>

            {/* ── HOW IT LOOKS ──────────────────────────────────────────────── */}
            <DebugWrapper id={385110} label="How It Looks Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-12">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">How it looks</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Examples of hotel drone shoots in Tbilisi — exterior and interior.
                            </p>
                        </div>
                        <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                            <FormatExamplesSlideshow
                                slidesOverride={formatExampleSlides}
                                altTexts={[
                                    'Aerial panorama of a hotel terrace and coastline',
                                    'Hotel interior with a panoramic view of the evening city',
                                    'Suite bedroom with a night-time city panorama',
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── STATS ──────────────────────────────────────────────── */}
            <DebugWrapper id={385115} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What the numbers say</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Visuals aren’t decoration — they’re a direct booking lever. Studies from Expedia, Google and Hotel Tech Report show how much shoot quality affects the guest’s decision.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="tracking-tight text-5xl font-bold text-[#FFD23F]">{item.stat}</p>
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">{item.description}</p>
                                    <a
                                        href={item.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center text-xs font-semibold text-white/60 transition-colors hover:text-[#FFD23F]"
                                    >
                                        Source: {item.source} →
                                    </a>
                                </article>
                            ))}
                        </div>
                        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/55">
                            Figures come from open research by Expedia, Google and Hotel Tech Report. The specific lift for your hotel depends on the quality of the underlying space, the type of footage, the publishing channel and the campaign context.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── WHAT CLIENTS SAY BEFORE A SHOOT ─────────────────────────────────── */}
            <DebugWrapper id={385120} label="Problems Section">
                <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What clients usually say before a shoot</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── WHAT WE SHOOT ───────────────────────────────────── */}
            <DebugWrapper id={385140} label="What We Shoot Section">
                <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What we shoot — and the problem it solves</h2>
                            <p className="mt-5 text-lg leading-relaxed text-white/85">
                                Hotel drone work isn’t just a shot from above. We present the property in the order a
                                future guest reads it: location in the city or landscape → facade → grounds → key zones
                                → atmosphere.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                The drone captures external context: how the hotel looks from above, what views it has,
                                how it sits in the landscape or urban fabric. For a mountain hotel — the ridge behind
                                the rooms. For a resort — the coastline and the pool. For an urban property — the
                                position on the block and proximity to landmarks.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                The FPV camera adds motion inside: a walk-through of the lobby, the link between zones,
                                the depth of space.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Drone video doesn’t replace advertising — it answers the one question every guest has
                                when choosing a hotel: “what’s it actually like there?”. The faster they get it, the
                                faster they book.
                            </p>
                            <ul className="mx-auto mt-6 grid max-w-4xl gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-center text-sm leading-relaxed text-white/75">
                                    A first-time guest understands where they’re going before arrival.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-center text-sm leading-relaxed text-white/75">
                                    The natural setting or panorama stops being a hidden advantage.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-center text-sm leading-relaxed text-white/75">
                                    The Booking listing gets video — and stands out from similar properties.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-center text-sm leading-relaxed text-white/75">
                                    Seasonal assets are ready to publish without long approval rounds.
                                </li>
                                <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-center text-sm leading-relaxed text-white/75">
                                    The sales manager sends a link instead of a folder of photos.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── DELIVERABLES ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385160} label="Deliverables Section">
                <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What you receive</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                After the shoot you don’t just get a pile of files — you get a ready-to-use package, sorted into folders and adapted per channel.
                            </p>
                            <p className="mt-3 leading-relaxed text-white/50">
                                If you need more than aerial footage — a full visual set for the hotel — this shoot can be paired with other formats.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Included in every package</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesDefault.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm font-semibold text-white/80">Extra in the “Finished Result” package:</p>
                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72">
                                    {deliverablesPremium.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">How the files are organised</h3>
                                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                    {[
                                        { name: 'Website', desc: 'Main reel and photos for site pages' },
                                        { name: 'Social', desc: 'Vertical cuts for Reels, Stories, TikTok' },
                                        { name: 'Google Maps', desc: 'Short cut and photos for the hotel listing' },
                                        { name: 'Archive', desc: 'All source files — for future use' },
                                    ].map((folder) => (
                                        <div key={folder.name} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                {folder.name}
                                            </p>
                                            <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">Technical parameters</h3>
                                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>4K shoot</li>
                                    <li>Two formats: exterior aerial + interior camera pass</li>
                                    <li>Colour correction and stabilisation included (in editing packages)</li>
                                    <li>Formats: MP4, JPG / WebP on request</li>
                                    <li>Delivery via Google Drive or WeTransfer</li>
                                </ul>
                                <p className="mt-4 text-xs leading-relaxed text-white/45">
                                    Equipment: DJI Air 3S, DJI Avata 2 FPV, Insta360 X5
                                </p>
                                <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                    Timelines: from 24 hours (shoot without editing) to 7 working days (finished-result package).
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FORMAT EXAMPLES ────────────────────────────────────────────── */}
            <DebugWrapper id={385170} label="Format Examples Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Format examples</h2>
                        </div>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            {formatExampleCards.map((item, index) => (
                                <div key={index} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── MID CTA ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385180} label="Mid CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Not sure which format fits your property? Tell us about the hotel — we’ll suggest what’s worth shooting.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                                >
                                    Discuss the brief
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    See pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROCESS NOTE ─────────────────────────────────────────────────────── */}
            <DebugWrapper id={385200} label="Process Note Section">
                <ProcessNote text="A shoot for an average hotel takes 2–3 hours on site. Hotel operations keep running." />
            </DebugWrapper>

            {/* ── PROCESS ──────────────────────────────────────────────── */}
            <DebugWrapper id={385220} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">How the work runs</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PRICING ────────────────────────────────────────────────────── */}
            <DebugWrapper id={385240} label="Pricing Section">
                <section id="pricing" className="scroll-mt-16 md:scroll-mt-20 pt-5 pb-20 border-b border-[#2a2a2a] bg-[#080808]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">Packages and pricing</h2>
                            <p className="mt-2 text-xs leading-relaxed text-white/75 md:text-sm">
                                Fixed pricing in GEL (₾). All photo & video in 4K. Social Reels edits, 16:9 widescreen promo, 360° panoramas, and Booking / Google Maps cards available.
                            </p>
                        </div>

                        <div className="mt-5 grid gap-4 xl:grid-cols-4 xl:gap-5">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`flex flex-col rounded-[20px] border p-4.5 md:p-5 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div>
                                        <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                        <p className="mt-1.5 text-xs text-white/64">{card.subtitle}</p>
                                    </div>
                                    <div className="mt-3.5 flex items-center gap-2 md:mt-4 md:gap-3">
                                        <p className="text-2xl font-bold text-[#FFD23F] md:text-3xl">{card.price}</p>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Best value
                                            </span>
                                        ) : null}
                                    </div>
                                    <ul className="mt-4 flex-1 space-y-1.5 text-xs leading-relaxed text-white/72 md:mt-4.5 md:space-y-2 md:text-[13px]">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note && <p className="mt-3 text-xs leading-relaxed text-white/58 md:mt-3.5">{card.note}</p>}
                                    <PackageCta
                                        label="Select package →"
                                        packageName={card.title}
                                        packagePrice={card.price}
                                        lang="en"
                                        className="mt-4 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F] md:mt-5 md:py-2.5"
                                    />
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-5 md:p-6">
                            <h3 className="text-lg font-bold text-white md:text-xl">Add-ons</h3>
                            <p className="mt-2 text-xs leading-relaxed text-white/70 md:text-sm">
                                From a single shoot you can pull more than the main asset — extra cuts for the website, social, the Google Maps listing and sales.
                            </p>
                            <div className="mt-4 grid gap-3 md:grid-cols-3">
                                {addonPricing.map((item) => (
                                    <div key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-3.5 text-xs leading-relaxed text-white/78 md:text-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PACKAGE COMPARISON TABLE ────────────────────────────────────── */}
            <DebugWrapper id={385250} label="Package Comparison Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Package comparison</h2>
                        </div>
                        <div className="mt-8 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm text-white/80">
                                <thead>
                                    <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                        <th className="py-4 pr-4">Parameter</th>
                                        <th className="py-4 px-4">Exterior Flight</th>
                                        <th className="py-4 px-4">Interior FPV</th>
                                        <th className="py-4 px-4 text-[#FFD23F]">Full Shoot</th>
                                        <th className="py-4 pl-4">Finished Result</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2a2a2a]">
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Price</td>
                                        <td className="py-3 px-4">250 ₾</td>
                                        <td className="py-3 px-4">350 ₾</td>
                                        <td className="py-3 px-4 font-semibold text-[#FFD23F]">500 ₾</td>
                                        <td className="py-3 pl-4">from 900 ₾</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">4K aerial video</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Interior FPV pass</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 px-4">✓</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Photos</td>
                                        <td className="py-3 px-4">10+</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">10+</td>
                                        <td className="py-3 pl-4">20+</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Editing</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Social cuts</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Google Maps video</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 px-4">—</td>
                                        <td className="py-3 pl-4">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">Time on site</td>
                                        <td className="py-3 px-4">~1.5 h</td>
                                        <td className="py-3 px-4">~1.5 h</td>
                                        <td className="py-3 px-4">~2.5 h</td>
                                        <td className="py-3 pl-4">per brief</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-white">File delivery</td>
                                        <td className="py-3 px-4">from 24 h</td>
                                        <td className="py-3 px-4">from 24 h</td>
                                        <td className="py-3 px-4">from 24 h</td>
                                        <td className="py-3 pl-4">from 48 h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PACKAGE PICKER ─────────────────────────────────────────── */}
            <DebugWrapper id={385255} label="Package Picker Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-3xl">
                            <h3 className="text-xl font-bold md:text-2xl">How to pick a package</h3>
                            <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/76">
                                <p>
                                    → Only grounds and facade coverage —{' '}
                                    <strong className="text-white">Exterior Flight, 250 ₾</strong>
                                </p>
                                <p>
                                    → Need the lobby and the link between interior zones —{' '}
                                    <strong className="text-white">Interior FPV, 350 ₾</strong>
                                </p>
                                <p>
                                    → Need exterior look and interior motion in one visit —{' '}
                                    <strong className="text-white">Full Shoot, 500 ₾</strong>
                                </p>
                                <p>
                                    → Need finished cuts, photos and Google Maps video for listing platforms —{' '}
                                    <strong className="text-white">Finished Result, from 900 ₾</strong>
                                </p>
                                <p className="pt-2 text-white/55">Not sure? Describe the property and we’ll match it to the brief and budget.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── POST-PRICING CTA ─────────────────────────────────────────────────── */}
            <DebugWrapper id={385260} label="Post-Pricing CTA Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Not sure which package fits? Tell us about the hotel — we’ll say what’s worth shooting and what fits the budget.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Send the brief
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385280} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Frequently asked questions" />
            </DebugWrapper>

            {/* ── WHY US ─────────────────────────────────────────── */}
            <DebugWrapper id={385300} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">How we approach the shoot</h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROPERTY TYPES ─────────────────────────────────────── */}
            <DebugWrapper id={385320} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Property types and scenarios</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                For every hotel type we assemble a shot set tied to a specific goal.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Challenge:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Solution:</span> {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white/75">You receive:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── MID CTA 2 ────────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Found your property type in the list? Share the details — we’ll propose a package and shoot
                            route that fit the situation.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Discuss the brief
                            </a>
                            <a
                                href="https://wa.me/995501103183"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GEORGIA + FLIGHT RULES ─────────────────────────────────────────── */}
            <DebugWrapper id={385340} label="Georgia & Safety Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">Why Georgia is a distinct visual asset</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    Tbilisi — historic quarters, the river gorge and modern hotels all in one frame.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Gudauri and Bakuriani — ski slopes in winter, alpine meadows in summer. Resort hotels in a natural set.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Kazbegi and the mountain regions — Caucasus peaks as a backdrop for boutique hotels. There isn’t anything comparable nearby.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Kakheti — vineyards, monasteries and mountains. A fit for eco-hotels and travel assets.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Georgia (country) offers a 20–25% cash rebate on qualified production expenses through the Film in Georgia programme. Ask us how this applies to your hotel campaign.
                                </p>
                            </div>

                            <div className="rounded-[20px] border border-[#2a2a2a] bg-[#111111] p-8">
                                <h2 className="text-2xl font-bold md:text-3xl">How we handle flight rules</h2>
                                <p className="mt-5 leading-relaxed text-white/74">
                                    We operate under Georgian Civil Aviation Agency (GCAA) rules. The drone is registered. Maximum altitude — 120 m.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    For shoots near public sites or in sensitive zones we verify restrictions in advance and propose a plan that delivers the frame without legal risk.
                                </p>
                                <p className="mt-4 leading-relaxed text-white/74">
                                    Shooting with guests on site: we work during quiet hours and focus on grounds and architecture — without breaching privacy.
                                </p>
                                <p className="mt-6 rounded-[12px] border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                    Mountain regions — we agree a backup day in case of bad weather. Reschedule at no extra cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── RELATED SERVICES ───────────────────────────────────────────────── */}
            <DebugWrapper id={385360} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Drone work is one piece of the hotel’s visual stack. When useful we combine it with other shoot formats.
                            </p>
                        </div>

                        <p className="mt-8 text-sm leading-relaxed text-white/58">
                            Aerial work often pairs with a 360° tour of the hotel and a series of Reels for social. If that’s of interest, we’ll quote the combined package.
                        </p>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                    <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Learn more →</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── GEOGRAPHY ──────────────────────────────────────────── */}
            <DebugWrapper id={385365} label="Geography Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Where we shoot in Georgia</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                We work in the regions where most hotels and resorts sit. We know each location’s specifics — light, weather windows, flight restrictions.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { region: 'Tbilisi', note: 'City and boutique hotels, historic quarters, Mtatsminda.' },
                                { region: 'Kakheti', note: 'Wine hotels, vineyards, Alazani Valley, monasteries.' },
                                { region: 'Kazbegi and Stepantsminda', note: 'High-altitude hotels against Caucasus peaks.' },
                                { region: 'Gudauri', note: 'Ski resort hotels, pistes, panoramas of the Cross Pass.' },
                                { region: 'Bakuriani', note: 'Family resorts, alpine meadows in summer, slopes in winter.' },
                                { region: 'Apart-hotels and Airbnb across Georgia', note: 'Several properties in one trip — packaged shoot schedule.' },
                            ].map((item) => (
                                <article key={item.region} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.region}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.note}</p>
                                </article>
                            ))}
                        </div>
                        <p className="mt-8 text-sm leading-relaxed text-white/55">
                            Logistics and travel terms are agreed at the brief stage. For ongoing work with chains — separate terms.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PRE-CONTACT CTA ──────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            If you’ve read this far, the question of visual assets for your hotel is real.
                            Next step — tell us about the property and we’ll propose a specific format.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Discuss the brief
                        </a>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={385380} label="Contact Section">
                <DroneContactStitch preselectedServices={['drone']} lang="en" />
            </DebugWrapper>

            <DebugWrapper id={385400} label="Footer Section">
                <DroneFooterStitch lang="en" />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
