import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitchEn } from '@/components/drone/DroneFooterStitchEn';
import { FaqSection } from '@/components/shared/FaqSection';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';

type FaqItem = { question: string; answer: string };
type CardItem = { title: string; text: string };
type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};
type NicheCard = { title: string; pain: string; solution: string; deliverables: string };
type ProcessStep = { step: string; title: string; text: string };
type RelatedService = { title: string; href: string; text: string };
type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

const statsCards: StatCard[] = [
    {
        stat: 'up to +67%',
        label: 'more direct bookings',
        description:
            'Achieved by hotels showcasing 360° VR tours compared to those relying solely on standard photography.',
        source: 'Omni Hotels / Hospitality Research',
        sourceUrl: '#',
    },
    {
        stat: '5–10× longer',
        label: 'average time on site',
        description:
            'Engaged visitors spend substantially more time on websites with interactive 360° tours, improving SEO and reducing bounce rates.',
        source: 'Pew Internet Life Study',
        sourceUrl: '#',
    },
    {
        stat: '52%',
        label: 'revisit the virtual tour',
        description:
            'Potential guests navigate through the tour multiple times before completing reservation decisions, treating it as an analytical walkthrough.',
        source: 'Hospitality Platform Analytics',
        sourceUrl: '#',
    },
    {
        stat: '2× higher',
        label: 'Google Maps card interest',
        description:
            'Hotel business profiles with verified 360° panoramas receive double the engagement, capturing traveler traffic before OTA redirects.',
        source: 'Google My Business Analytics',
        sourceUrl: '#',
    },
];

const problemCards: CardItem[] = [
    {
        title: '“On Booking.com we look just like our competitors — good photos, but so do they”',
        text: 'A 360° tour is the only media format that cannot be duplicated with a simple screenshot. Guests do not just scroll — they navigate through the space, creating genuine recall.',
    },
    {
        title: '“We worry the tour might reveal areas undergoing renovation”',
        text: 'If your property has charm, a virtual tour works in your favor. We strictly capture the specific rooms and public zones agreed upon in the shoot plan.',
    },
    {
        title: '“Technical integration seems complicated — direct link, iframe, Google Maps”',
        text: 'You receive a fast-loading link and an iframe embed snippet. Adding it to your website takes one line of code. For Booking and OTAs, we supply step-by-step guides.',
    },
    {
        title: '“Some rooms are being refreshed or meeting areas are restricted”',
        text: 'We plan shoot routes in advance. Only ready-to-show zones are captured. Additional wings or renovated rooms can be added later during a seasonal update.',
    },
    {
        title: '“We already have promotional video reels — do we need a 360° tour?”',
        text: 'Video and virtual tours solve distinct buyer hesitations. Video sets the emotional mood; a 360° tour answers the rational question: “what is the actual layout like?”',
    },
    {
        title: '“We want to launch this, but do not know where to start”',
        text: 'We start with a 15-minute brief. We recommend priority zones for maximum conversion impact and deliver a turnkey tour in a single production day.',
    },
];

const deliverablesItems: string[] = [
    'Direct interactive tour link — share via WhatsApp, attach to email offers, add to rate cards',
    'iframe embed snippet — seamlessly embed into your hotel website with one line of code',
    'OTA integration guide — easily link the virtual tour inside Booking.com descriptions',
    'Google Maps Business profile panoramas — attract travelers directly from local map searches',
    'Interactive navigation hotspots — highlight amenities, room specs and direct booking CTAs',
];

const zoneCards: NicheCard[] = [
    {
        title: 'Standard & Superior Rooms',
        pain: '“Standard rooms look generic on aggregator listing grids”',
        solution:
            'Guests perceive true room dimensions, window orientation, and layout clarity without misleading ultra-wide angle photo distortions.',
        deliverables: '4–5 shoot viewpoints per room category',
    },
    {
        title: 'Suites & Panoramic View Rooms',
        pain: '“Guests hesitate to pay the rate premium for higher categories”',
        solution:
            'A 360° tour justifies higher pricing immediately — guests see the exact view, balcony size and living area, eliminating upgrade hesitations.',
        deliverables: '4–7 viewpoints highlighting panoramic views & layout',
    },
    {
        title: 'Lobby & Reception',
        pain: '“First impressions are formed long before the guest arrives”',
        solution:
            'Guests evaluate the property ambiance within 10 seconds. Showcasing pristine welcome zones drives booking momentum.',
        deliverables: '3–5 key perspective points',
    },
    {
        title: 'Spa, Pool & Fitness Center',
        pain: '“Wellness amenities sell holidays, but photos fail to convey scale”',
        solution:
            'Guests grasp the relaxing scale and luxury atmosphere before arrival. Critical for wellness and resort travel segments.',
        deliverables: '4–10 viewpoints across amenity zones',
    },
    {
        title: 'Conference Halls & Meeting Rooms',
        pain: '“Corporate MICE planners demand extensive in-person inspections”',
        solution:
            'Event coordinators inspect seating configurations and guest flow remotely, shortening corporate booking cycles.',
        deliverables: '3–6 viewpoints per hall + seating configuration views',
    },
    {
        title: 'Restaurant & Terrace Bar',
        pain: '“The restaurant is a standout feature, but rarely highlighted effectively”',
        solution:
            'Guests can explore table arrangements and terrace views ahead of time, boosting in-house F&B revenues and private bookings.',
        deliverables: '4–6 viewpoints per hall + terrace overview',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'BRIEF',
        title: 'Discovery & Goals',
        text: 'Tell us about your property: key zones, priorities, and unique Selling points. We prepare a tailored shoot route and transparent quote on the same day.',
    },
    {
        step: 'PLAN',
        title: 'Route Coordination',
        text: 'We align on the exact shoot timeline and zones. We establish which areas to capture and ensure backstage areas remain private.',
    },
    {
        step: 'CAPTURE',
        title: 'On-Site Production',
        text: 'One streamlined production day without interrupting guest operations. Fast, discreet shooting adhering to the agreed plan.',
    },
    {
        step: 'DELIVERY',
        title: 'Link, Iframe & Google Maps',
        text: 'Receive your live interactive tour link, iframe embed code, and integration support. Ready for your website, Booking.com, and Google Maps.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Starter',
        price: 'from 200 ₾',
        subtitle: 'For boutique guest houses, apart-hotels and Airbnb properties with 1–3 room types',
        items: [
            'Up to 6 panoramic capture points (lobby + 2 room types + bathroom)',
            'Direct tour link + responsive iframe snippet',
            'Google Maps Business profile panorama upload',
            'Turnaround — within 48 hours',
        ],
        note: 'Ideal entry package to experience the format and boost conversion immediately.',
    },
    {
        title: 'Standard',
        price: 'from 450 ₾',
        subtitle: 'For boutique hotels and 3–4 star city hotels',
        items: [
            'Up to 15 capture points (lobby, reception, room categories, restaurant or lounge)',
            'Direct link + iframe embed code',
            'Interactive navigation hotspots with zone titles',
            'Google Maps panorama integration',
            'Turnaround — within 72 hours',
        ],
        note: 'Comprehensive coverage of all primary guest areas. Our most popular package.',
        popular: true,
    },
    {
        title: 'Full Property',
        price: 'from 900 ₾',
        subtitle: 'For 4–5 star hotels, resort complexes and multi-building hospitality properties',
        items: [
            'From 20 capture points — covering all property zones including spa, gym, conference halls',
            'Direct link + iframe + multiple interactive navigation routes',
            'Hotspots with detailed room specs and direct booking links',
            'Google Maps verified panoramas',
            'Turnaround — within 5 business days',
        ],
        note: 'Engineered for MICE corporate sales and premier international booking platforms.',
    },
];

const addonPricing: string[] = [
    'Tour update (new rooms / post-renovation areas): from 150 ₾',
    'Interactive hotspot with direct booking button: +80 ₾',
    'Multilingual zone descriptions (RU / EN / GE): +100 ₾',
];

const nicheCards: NicheCard[] = [
    {
        title: 'City Boutique Hotel (Tbilisi)',
        pain: 'Intense competition with similar properties in the historic city center.',
        solution: 'Virtual tour reveals true room charm and authentic atmosphere without wide-angle distortion.',
        deliverables: 'Lobby, curated room categories, city view balconies',
    },
    {
        title: 'Mountain Resort (Kazbegi, Gudauri, Bakuriani, Racha)',
        pain: 'Travelers struggle to visualize remote property scale before committing to booking.',
        solution: 'Provides comprehensive spatial layout, particularly highlighting luxury rooms with panoramic mountain views.',
        deliverables: 'Rooms with panoramic windows, open lounge zones, outdoor terraces',
    },
    {
        title: 'Apart-Hotel & Multi-Unit Airbnb',
        pain: 'Need premium presentation across several units with constrained marketing budgets.',
        solution: 'One single shoot session covers multiple apartments. Each unit gets its dedicated virtual tour link.',
        deliverables: 'Living area, bedroom, kitchenette, balcony across selected apartments',
    },
    {
        title: 'Resort & Wellness Hotel',
        pain: 'Guests choose based on spa facilities and infrastructure, which photos fail to convey.',
        solution: 'Virtual walk-through of the spa, thermal pool and relaxation zones acts as an interactive inspection.',
        deliverables: 'Indoor/outdoor pool, hammam, treatment suites, fitness room, garden grounds',
    },
    {
        title: 'Congress & Business Hotel (MICE)',
        pain: 'Corporate event planners require slow, costly in-person venue walkthroughs.',
        solution: 'Virtual conference hall tours allow remote planners to evaluate layouts, capacity and guest flow.',
        deliverables: 'Ballrooms, breakout rooms, foyer, reception & registration areas',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Where is the virtual tour hosted? Do we need specialized software?',
        answer:
            'No software required. The tour is hosted on fast cloud servers. You receive a direct link and an iframe snippet. Nothing needs maintenance on your servers.',
    },
    {
        question: 'How do we add the virtual tour to Booking.com?',
        answer:
            'Booking.com accepts links to 360° virtual tours in property description fields. We provide simple documentation to complete integration in minutes.',
    },
    {
        question: 'Does the tour work smoothly on mobile phones and tablets?',
        answer: 'Yes. The tour loads instantly inside mobile browsers across iOS and Android with responsive touch controls.',
    },
    {
        question: 'Can we photograph only a specific part of the hotel, like new suites?',
        answer: 'Yes. We coordinate the route beforehand and only shoot the exact areas ready for presentation.',
    },
    {
        question: 'What happens if we renovate rooms or add new amenities later?',
        answer:
            'Virtual tours are modular. We can schedule a short follow-up visit and seamlessly connect new points into your existing tour.',
    },
    {
        question: 'How long does on-site photography take?',
        answer:
            'For 6–8 points it takes around 1–2 hours. A standard hotel up to 15 points requires 2–4 hours. Hotel operations and guest comfort remain completely undisturbed.',
    },
    {
        question: 'Will the tour appear on Google Maps automatically?',
        answer:
            'Once we upload the 360° spherical panoramas to your Google Business profile, they become live for map searchers. We guide you through the process.',
    },
    {
        question: 'How does a 360° tour differ from aerial drone filming?',
        answer:
            'Drones capture the property from the outside — scale, surrounding nature, location context. 360° tours present interior spaces: rooms, suites, amenities. Together, they resolve all visitor doubts.',
    },
    {
        question: 'What is the cost of updating an existing tour?',
        answer: 'Adding new panoramic viewpoints starts from 150 ₾. Free consultation and estimate for your specific request.',
    },
    {
        question: 'Can we integrate a direct “Book Now” button into the tour?',
        answer:
            'Yes — via interactive hotspots. Guests tap on a room tag inside the virtual tour and navigate straight to your reservation engine.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Aerial Drone Filming for Hotels & Resorts',
        href: '/drone-hotels-tourism/en',
        text: 'Showcase property grounds, mountain panoramas, and location context. One shoot delivers both cinematic exterior video and high-res OTA photos.',
    },
    {
        title: 'Drone Video for Restaurants & Terraces',
        href: '/drone-services/drone-restaurants/en',
        text: 'Help guests select their favorite dining table before visiting. Aerial and walkthrough visuals driving reservations.',
    },
    {
        title: '360° Virtual Tours for Real Estate',
        href: '/360-tour-real-estate/en',
        text: 'Interactive virtual tours for premium apartments, luxury villas, and off-plan investment developments.',
    },
];

const comparisonRows = [
    { label: 'Guest controls the perspective', photo: '—', video: '—', tour: '✓' },
    { label: 'Freedom to inspect spatial details', photo: '—', video: 'partial', tour: '✓' },
    { label: 'Works on website & Booking.com', photo: '✓', video: 'partial', tour: '✓' },
    { label: 'Integrates into Google Maps profile', photo: '✓', video: '—', tour: '✓' },
    { label: 'Realistic “I have been there” feeling', photo: '—', video: '—', tour: '✓' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '360° Virtual Tour for Hotels in Tbilisi & Georgia',
    description:
        'Interactive 360° virtual tour production for hotels, boutique hospitality and resorts in Tbilisi and Georgia. Interactive room, lobby and amenity presentation for websites, Booking.com and Google Maps.',
    provider: { '@id': 'https://breus.media/#organization' },
    areaServed: ['Tbilisi', 'Batumi', 'Kakheti', 'Kazbegi', 'Gudauri', 'Bakuriani', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '200',
        highPrice: '900',
        offerCount: '3',
    },
    serviceType: '360 Degree Virtual Tour Production',
    url: 'https://breus.media/360-tour-hotels/en',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description:
        'Visual production agency in Tbilisi, Georgia. Drone videography, FPV filming, 360° virtual tours and digital media for hospitality and real estate.',
    url: 'https://breus.media',
    telephone: '+995501103183',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tbilisi',
        addressRegion: 'Tbilisi',
        addressCountry: 'GE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '41.6938', longitude: '44.8015' },
    priceRange: '₾₾',
    openingHours: 'Mo-Su 09:00-20:00',
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://breus.media' },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Tourism & Hospitality',
            item: 'https://breus.media/tourism-service/en',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Hotel 360° Tours',
            item: 'https://breus.media/360-tour-hotels/en',
        },
    ],
};

export const metadata: Metadata = {
    title: '360° Hotel Virtual Tour in Tbilisi, Georgia | Breus Media',
    description:
        'Interactive 360° virtual tours for hotels and boutique resorts in Tbilisi and Georgia. Enable guests to inspect rooms, lobby and amenities before booking. Direct website & Booking.com embeds. From 200 ₾.',
    alternates: {
        canonical: 'https://breus.media/360-tour-hotels/en',
        languages: {
            'ru-RU': 'https://breus.media/360-tour-hotels',
            'en-US': 'https://breus.media/360-tour-hotels/en',
            'x-default': 'https://breus.media/360-tour-hotels',
        },
    },
    openGraph: {
        title: '360° Hotel Virtual Tour | Breus Media',
        description:
            'Interactive 360° tours for hotels in Tbilisi and Georgia. Integrates into your website, Booking.com, and Google Maps. From 200 ₾.',
        url: 'https://breus.media/360-tour-hotels/en',
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '360° Hotel Virtual Tour | Breus Media',
        description: '360° tours for Booking.com, websites and Google Maps. From 200 ₾.',
    },
};

export default function TourHotelsPageEn() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaLabel="Discuss Project"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'PRICES', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                initialLang="en"
                languageLinks={{ RU: '/360-tour-hotels', EN: '/360-tour-hotels/en' }}
                sectionLinks={[
                    { label: 'Zones', href: '#zones' },
                    { label: 'Process', href: '#process' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            {/* ── HERO ─────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386100} label="Hero Section">
                <section
                    id="tour-hotels-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-36 md:pb-20 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.55)_75%,#080808)]"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent"
                    />

                    <div className="container relative mx-auto px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                360° Hotel Tour — Guests Explore Rooms Before Booking
                            </h1>
                            <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-white/78 md:text-xl">
                                Professional 360° virtual tour production for hotels and resorts in Tbilisi and Georgia —
                                interactive room, lobby and amenity showcase for your website, Booking.com, and Google Maps
                            </p>

                            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                Guests open several browser tabs with competing hotels in your area.
                                Photos look great everywhere. Booking decisions happen in seconds — in favor of
                                the property that allows travelers to step inside the room, inspect the bathroom,
                                and verify the window view.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                A 360° tour is neither a static photo nor a promotional video. It gives
                                travelers interactive control over their view without editing tricks. That transparency
                                builds the direct confidence that converts into bookings.
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/72 md:text-lg">
                                A single virtual tour serves your website, Booking.com listing, and Google Maps card
                                simultaneously. You receive a direct link and an embed snippet — no app installs,
                                zero maintenance.
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
                    </div>

                    <ScrollArrow />
                </section>
            </DebugWrapper>

            {/* ── STATS ────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386110} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Why 360° Tours Transform Guest Behavior
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {statsCards.map((item) => (
                                <article
                                    key={item.stat}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <p className="tracking-tight text-5xl font-bold text-[#FFD23F]">
                                        {item.stat}
                                    </p>
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                                        {item.label}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        {item.description}
                                    </p>
                                    <p className="mt-5 text-xs font-semibold text-white/60">
                                        Source: {item.source}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PHOTOS vs TOUR ───────────────────────────────────────────────────── */}
            <DebugWrapper id={386120} label="Comparison Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Photos are polished. Virtual tours are genuine.
                            </h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                A photograph captures a single curated angle. The photographer picks the ideal light and moment.
                                Guests see only what the camera selected.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                A 360° tour gives guests full freedom of navigation. They rotate the room, zoom in on details,
                                navigate from lobby to corridor, and inspect the bathroom. They shift from passive viewer
                                to active explorer. That creates high booking confidence uninfluenced by marketing hype.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Hotels with authentic quality spaces gain immensely from this format. Relying purely on heavily
                                retouched photos risks inflated guest expectations and negative reviews upon arrival.
                            </p>
                        </div>

                        <div className="mt-10 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm text-white/80">
                                <thead>
                                    <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                        <th className="py-4 pr-4">Feature</th>
                                        <th className="py-4 px-4">Photos</th>
                                        <th className="py-4 px-4">Video</th>
                                        <th className="py-4 pl-4 text-[#FFD23F]">360° Tour</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2a2a2a]">
                                    {comparisonRows.map((row) => (
                                        <tr key={row.label}>
                                            <td className="py-3 pr-4 font-medium text-white">{row.label}</td>
                                            <td className="py-3 px-4">{row.photo}</td>
                                            <td className="py-3 px-4">{row.video}</td>
                                            <td className="py-3 pl-4 font-semibold text-[#FFD23F]">
                                                {row.tour}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROBLEMS ─────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386130} label="Problems Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What Hoteliers Tell Us</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {problemCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-lg font-bold text-white md:text-xl">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── DELIVERABLES ─────────────────────────────────────────────────────── */}
            <DebugWrapper id={386140} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What You Receive</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                The virtual tour is hosted in the cloud — no files to store or manage on your end. After production, you get:
                            </p>
                        </div>
                        <ul className="mt-10 grid gap-4 md:grid-cols-2">
                            {deliverablesItems.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78"
                                >
                                    ✓ {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
                            A single tour works across all platforms. Additional zones or future renovations can be seamlessly integrated anytime.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── TWO VIEWS ────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386150} label="Two Views Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Two Perspectives on One Property</h2>
                            <p className="mt-5 leading-relaxed text-white/78">
                                A 360° virtual tour presents the property from within — how guests experience it once they step inside.
                                Room categories, lobby elegance, balcony views, and hallways. This creates rational confidence: “I know what to expect.”
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                Aerial drone filming delivers the exact same clarity from the exterior. Drones showcase the hotel's placement
                                in the landscape — mountain ranges, vineyards, sea coastline, or historic urban quarters. Guests grasp the neighborhood
                                context before booking.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/72">
                                These two formats complement each other perfectly: one answers “how it looks inside”, the other answers
                                “what surrounds it”. Together, they eliminate all hesitations along the guest booking journey.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── ZONES ────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386160} label="Zones Section">
                <section id="zones" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Most Popular Hotel Zones to Capture
                            </h2>
                            <p className="mt-4 italic leading-relaxed text-white/70">
                                Priority capture areas for boutique city hotels, mountain resorts, and apart-hotels across Tbilisi and Georgia
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {zoneCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Challenge:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Solution:</span>{' '}
                                        {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white/75">Deliverables:</span>{' '}
                                        {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386170} label="Process Section">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">How Production Works</h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article
                                    key={step.step}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        {step.step}
                                    </p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── PRICING ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386180} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Hotel 360° Tour Pricing
                            </h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Pricing is based on the number of panoramic capture points. Each room type, lobby, or restaurant
                                represents distinct capture positions. Free custom quote for your property delivered same-day.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`flex flex-col rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                    {card.note && (
                                        <p className="mt-5 text-sm leading-relaxed text-white/58">
                                            {card.note}
                                        </p>
                                    )}
                                    <PackageCta
                                        label="Select This Package →"
                                        packageName={card.title}
                                        packagePrice={card.price}
                                    />
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <h3 className="text-xl font-bold text-white">Custom Add-Ons</h3>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {addonPricing.map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4"
                                    >
                                        <p className="text-sm leading-relaxed text-white/78">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── NICHES ───────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386190} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Tailored for Every Hospitality Segment
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6"
                                >
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Focus:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Solution:</span>{' '}
                                        {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white/75">Deliverables:</span>{' '}
                                        {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386200} label="FAQ Section">
                <FaqSection id="faq" items={faqItems} title="Frequently Asked Questions" />
            </DebugWrapper>

            {/* ── RELATED ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386210} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Complementary Hospitality Services
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        {service.text}
                                    </p>
                                    <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Learn More →</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
            <DebugWrapper id={386220} label="Contact Section">
                <DroneContactStitch preselectedServices={['360']} />
            </DebugWrapper>

            <DroneStickyCta heroId="tour-hotels-hero" />
            <MobileBottomBar
                primaryLabel="Book a Shoot"
                heroId="tour-hotels-hero"
                revealAfterHero={true}
                smoothVisibility={true}
            />

            

            <DebugWrapper id={386230} label="Footer Section">
                <DroneFooterStitchEn />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </main>
    );
}
