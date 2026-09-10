import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-real-estate/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { RealEstateHeroSlideshow } from '@/components/drone-real-estate/RealEstateHeroSlideshow';
import { RealEstateFormatSlideshow } from '@/components/drone-real-estate/RealEstateFormatSlideshow';
import { RealEstateRoiCalculator } from '@/components/real-estate-service/RealEstateRoiCalculator';
import formatExampleOne from '@/services-images/drone-real-estate/final/1.png';
import formatExampleTwo from '@/services-images/drone-facade/final/2.png';
import formatExampleThree from '@/services-images/drone-facade/final/1.png';
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

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type StatCard = {
    stat: string;
    label: string;
    description: string;
    source: string;
    sourceUrl: string;
};

type AudienceCard = {
    title: string;
    text: string;
};

type DeliverableGroup = {
    title: string;
    items: string[];
};

const audienceCards: AudienceCard[] = [
    {
        title: 'Realtors and Agencies',
        text: 'Listings with aerial video filter out unqualified buyers before the call: viewers see the genuine surroundings, access routes, and window views — saving time on empty showings.',
    },
    {
        title: 'Developers and Residential Complexes',
        text: 'Showcasing scale: masterplan from the air, complex grounds, surrounding infrastructure, and construction phases. Perfect for investor decks, website hero sections, and ad campaigns.',
    },
    {
        title: 'Property Owners and Land Investors',
        text: 'Complete documentation of property or land for sale: boundaries, terrain topography, road connections, and commercial neighborhood context — everything an investor assesses before deciding.',
    },
];

const statsCards: StatCard[] = [
    {
        stat: '31% Faster',
        label: 'Closing rate with immersive visual tours',
        description: 'Listings with interactive visual and aerial content sell nearly a third faster and at higher price points.',
        source: 'Redfin / Matterport',
        sourceUrl: 'https://matterport.com/real-estate',
    },
    {
        stat: '2x More Interest',
        label: 'Qualified interest on map listings',
        description: 'Google Business listings with integrated video and aerial content receive twice as many calls and navigation requests.',
        source: 'Google Business / Street View',
        sourceUrl: 'https://www.google.com/streetview/business/',
    },
    {
        stat: '+300% Dwell Time',
        label: 'Time spent on property pages',
        description: 'Users spend 3 to 10 times longer on residential property pages featuring dynamic aerial and FPV content.',
        source: 'Matterport Industry Report',
        sourceUrl: 'https://matterport.com/blog/what-is-a-3d-virtual-tour',
    },
    {
        stat: '−40% Bounce Rate',
        label: 'Reduction in website bounce rate',
        description: 'Rich aerial video immediately engages prospective buyers, cutting bounce rates across developer landing pages.',
        source: 'ScienceDirect (Elsevier)',
        sourceUrl: 'https://www.sciencedirect.com/search?qs=virtual%20tour%20real%20estate',
    },
];

const problemCards: CardItem[] = [
    {
        title: '“Listing is on MyHome.ge — views are high, but inquiries are low”',
        text: 'Aerial video qualifies buyers before they call. Buyers clearly see the genuine environment, roads, and panoramic views — reaching out with genuine purchase intent.',
    },
    {
        title: '“Overseas buyers from EU, Israel, UAE or US won’t fly in without confidence”',
        text: 'Aerial videography delivers a complete remote walkaround: international investors inspect the neighborhood, access, and building context exactly as if they were on site.',
    },
    {
        title: '“All listings look identical on listing portals”',
        text: 'Aerial angles showcase what standard interior photos cannot: proximity to parks, building density, green courtyards, and open horizons. 95% of listings lack this advantage.',
    },
    {
        title: '“Multiple development phases without budget for separate shoots”',
        text: 'One coordinated shoot captures everything: aerial overviews from multiple altitudes, FPV fly-throughs of typical floors, territory photos, and social media cuts.',
    },
];

const deliverableGroups: DeliverableGroup[] = [
    {
        title: 'Aerial Layer (Exterior Shoot)',
        items: [
            '4K video — facades, complex territory, entrance points, and surroundings',
            '10+ high-resolution aerial photos for listings and investor pitch decks',
            'District aerial panorama with location landmarks (on request)',
        ],
    },
    {
        title: 'FPV Interior Pass',
        items: [
            'Compact cinema drone glide through typical floors, lobbies, and amenity spaces',
            'Viewer experiences seamless spatial motion through the property',
            '4K cinematic video ready for distribution',
        ],
    },
    {
        title: 'Turnkey Media Suite',
        items: [
            'Master edited film up to 3 minutes',
            'Short-form vertical video cuts for Reels, Stories, TikTok & Shorts',
            '20+ professionally graded high-res photos',
            'Horizontal & vertical formats: Website, MyHome.ge, Instagram, Google Maps',
        ],
    },
];

const formatExampleCards = [
    { image: formatExampleOne, alt: 'Aerial real estate videography in Tbilisi — residential complex facades and grounds' },
    { image: formatExampleTwo, alt: 'FPV drone interior walkthrough — residential apartment building tour' },
    { image: formatExampleThree, alt: 'Drone real estate photography in Tbilisi — aerial stills for listings and pitch decks' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const processSteps: ProcessStep[] = [
    {
        step: 'Step 1',
        title: 'Project Briefing',
        text: 'Tell us about the property, goals, and intended platforms: MyHome.ge, website, social media, or remote investor sales. We recommend the optimal package. Quote within the same day.',
    },
    {
        step: 'Step 2',
        title: 'Planning & Clearances',
        text: 'We plan flight paths, shooting schedule, and optimal lighting. For central Tbilisi locations, we verify airspace permissions and protocols beforehand.',
    },
    {
        step: 'Step 3',
        title: 'Filming Session',
        text: 'We capture aerial overviews plus interior FPV passes. Approximately 1.5 to 3 hours on site without disrupting sales office operations or residents.',
    },
    {
        step: 'Step 4',
        title: 'Editing & Color Grading',
        text: 'We edit the main video, cut vertical clips for Reels/Shorts, and apply professional color correction and lens optimization across all still photos.',
    },
    {
        step: 'Step 5',
        title: 'File Delivery',
        text: 'You receive structured folders organized by platform: listings, website, Reels, Google Maps. One revision round is included in editing packages.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Exterior Flight',
        price: '250 ₾',
        subtitle: 'High-altitude drone aerial filming',
        items: [
            'All original 4K video files (20–30 min of material from all angles)',
            '10+ high-resolution aerial photos',
            '~1.5 hours on site',
            'File delivery — from 24 hours',
        ],
        note: 'Ideal if you handle video editing and social cuts in-house.',
    },
    {
        title: 'Interior FPV Pass',
        price: '350 ₾',
        subtitle: 'Compact cinema drone interior glide',
        items: [
            'Complete FPV 4K video footage (interiors in motion)',
            'Multiple passes — optimal route selection',
            '~1.5 hours on site',
            'File delivery — from 24 hours',
        ],
        note: 'FPV captures fluid motion through spaces: compact drone glides through rooms and lobbies with dynamic perspectives.',
    },
    {
        title: 'Full Combined Shoot',
        price: '500 ₾',
        subtitle: 'Aerial exterior + interior FPV — grounds, lobby, floor plan — in one visit',
        items: [
            'Full array of 4K video footage from both drones (exterior + interior)',
            '15+ high-resolution photos',
            '~2.5 hours on site',
            'File delivery — from 24 hours',
        ],
        note: 'Full coverage in a single session: building exterior and interior walkthrough.',
        popular: true,
    },
    {
        title: 'Full Package with Edited Video',
        price: 'from 900 ₾',
        subtitle: 'Aerial + FPV + video editing and professional photo retouching',
        items: [
            'Full set of original 4K video files',
            'Up to 3 minutes of edited video (hero edit + vertical Reels/Shorts)',
            '20+ edited high-resolution photos',
            '360° aerial panorama included',
            'Video optimized for Google Maps',
        ],
    },
];

const addonPricing: string[] = [
    'Vertical Reels / Shorts up to 60 sec (music + subtitles): +150 ₾',
    'Horizontal video tour for website & listings (16:9, up to 60 sec): +150 ₾',
    '360° aerial panorama: +80 ₾',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° Virtual Tour for Real Estate',
        href: '/360-tour-real-estate/en',
        text: 'Interactive walkthrough for apartments and developments — buyers navigate rooms independently online.',
    },
    {
        title: 'Reels for Realtors & Developers',
        href: '/reels-promo/reels-realtor/en',
        text: 'Dynamic vertical videos for Instagram, TikTok, and WhatsApp — driving consistent inbound lead flow.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Real Estate Agency or Realtor — Apartment Sale',
        pain: 'Dozens of identical listings on MyHome.ge make it difficult to stand out and justify pricing.',
        solution: 'Aerial neighborhood overview, window vistas, building access + short social media teaser.',
        deliverables: '30–60s video + 10+ photos + vertical Reels cut for WhatsApp & Instagram.',
    },
    {
        title: 'Developer — Launching New Residential Complex',
        pain: 'Renders and 2D floor plans fail to convey true physical scale and surrounding context.',
        solution: 'Multi-altitude territory flyovers, entrance paths, nearby amenities + FPV walkthrough of typical layouts.',
        deliverables: 'Brand hero film for website & investor deck + photo suite + vertical video cuts.',
    },
    {
        title: 'Land Plots & Commercial Development Parcels',
        pain: 'Without aerial visualization of boundaries and topography, remote buyers cannot assess terrain value.',
        solution: 'Boundary overlay from altitude, road accessibility, relief overview, and neighboring landmarks.',
        deliverables: 'High-altitude video with boundary context + high-res stills for land listings.',
    },
    {
        title: 'Remote Transaction with International Buyer',
        pain: 'Buyers from the EU, UAE or US cannot attend initial showings and rely exclusively on digital media.',
        solution: 'Comprehensive shoot day: aerial orbits, interior FPV glide, views at various hours, and district layout.',
        deliverables: 'Horizontal 2–5 min presentation video + 20+ photos + optional 360° panorama.',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'How long does a real estate shoot take?',
        answer: 'The base package requires approximately 1.5 hours on site. A full exterior and interior shoot takes 2–4 hours. Operations for sales offices and residents remain uninterrupted.',
    },
    {
        question: 'Can you film in historic districts — Mtatsminda, Sololaki, Vake, Avlabari?',
        answer: 'Yes, in most zones. Historic areas and zones near government offices require advance flight authorization, which we check and coordinate beforehand.',
    },
    {
        question: 'What deliverables do I receive after the shoot?',
        answer: 'Base packages deliver original 4K video files and high-res photos. Turnkey editing packages include a master film (up to 3 min), vertical social cuts, 20+ retouched photos, and Google Maps video files.',
    },
    {
        question: 'Is this footage suitable for selling to overseas buyers?',
        answer: 'Absolutely. Aerial footage reveals neighborhood infrastructure while FPV conveys interior flow in motion, enabling international buyers to make informed decisions remotely.',
    },
    {
        question: 'Is video editing included in the base package?',
        answer: 'Base packages deliver original 4K clips and processed photos. Editing is available as an add-on (+150 ₾ per clip) or included in the Turnkey package (from 900 ₾).',
    },
    {
        question: 'Do you film construction progress across multiple phases?',
        answer: 'Yes. We offer regular construction monitoring services with recurring flight paths for developers and investor reporting.',
    },
    {
        question: 'Do you operate outside Tbilisi?',
        answer: 'Yes — Kakheti, Mtskheta, Kazbegi, Gudauri, Bakuriani, and across Georgia. Regional travel is calculated based on logistics.',
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
    name: 'Drone Videography for Real Estate & Residential Complexes in Tbilisi',
    description:
        'Aerial & FPV drone videography for real estate, developers and agencies in Tbilisi, Georgia from 250 ₾. 4K footage, high-res photos & turnkey edits.',
    provider: {
        '@id': 'https://breus.media/#organization',
    },
    areaServed: ['Tbilisi', 'Georgia'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        priceRange: '250 ₾ – 900 ₾',
        lowPrice: '250',
        highPrice: '900',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    category: 'Aerial Videography for Real Estate',
    url: 'https://breus.media/drone-services/drone-real-estate/en',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://breus.media/#organization',
    name: 'Breus Media',
    description: 'Media production in Tbilisi. Aerial videography, FPV video, 360° virtual tours, Reels and visual branding for business.',
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
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://breus.media/gazeta/en',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Real Estate',
            item: 'https://breus.media/real-estate-service/en',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Drone Videography for Real Estate',
            item: 'https://breus.media/drone-services/drone-real-estate/en',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Drone Real Estate Videography Tbilisi | FPV & 4K Aerial Tours | Breus Media',
    description:
        'Aerial & FPV drone videography for real estate, developers and agencies in Tbilisi, Georgia from 250 ₾. 4K footage, high-res photos & delivery from 24–48 hours.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-real-estate/en',
        languages: {
            ru: 'https://breus.media/drone-services/drone-real-estate',
            en: 'https://breus.media/drone-services/drone-real-estate/en',
        },
    },
    openGraph: {
        title: 'Drone Real Estate Videography Tbilisi | Breus Media',
        description:
            'Aerial & FPV drone videography for real estate, developers and agencies in Tbilisi, Georgia from 250 ₾. 4K footage, high-res photos & delivery from 24–48 hours.',
        url: 'https://breus.media/drone-services/drone-real-estate/en',
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Drone Real Estate Videography Tbilisi | Breus Media',
        description: 'Drone & FPV videography for real estate in Tbilisi from 250 ₾.',
    },
};

export default function DroneRealEstateEnPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <LangSetter lang="en" />
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang="EN"
                ctaHref="#contact"
                ctaLabel="Discuss Filming"
                singleTickerMode={true}
                languageLinks={{
                    ru: '/drone-services/drone-real-estate',
                    en: '/drone-services/drone-real-estate/en',
                }}
                sectionLinks={[
                    { label: 'Process', href: '#process' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            {/* 1. HERO SECTION */}
            <section
                id="drone-real-estate-hero"
                className="relative isolate min-h-[100vh] min-h-[100dvh] overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-12 pt-28 sm:pt-32 md:pb-16 md:pt-48 pb-[env(safe-area-inset-bottom,20px)]"
            >
                <RealEstateHeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.45),rgba(8,8,8,0.92)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                        <div>
                            <h1 className="max-w-none text-3xl font-bold leading-[0.96] sm:text-4xl md:text-6xl lg:text-7xl">
                                Drone Videography for Real Estate & Residential Complexes in Tbilisi
                            </h1>

                            <p className="mt-4 max-w-2xl text-[16px] leading-[1.45] text-white/90 sm:text-[18px] md:text-[21px]">
                                Cinematic aerial videography capturing location, development scale, and surroundings. High-converting assets for MyHome.ge, investor pitch decks, and construction launches.
                            </p>

                            <p className="mt-3.5 max-w-2xl text-[14px] leading-relaxed text-white/70 sm:text-[15px] md:text-[16px]">
                                Filter out unqualified inquiries before the call: international buyers from Europe, UAE, and Israel see genuine neighborhood infrastructure, road access, and window views.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                                <a
                                    href="https://wa.me/995501103183?text=Hello!+I+want+to+discuss+real+estate+drone+videography+in+Tbilisi."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] sm:px-7 sm:py-3"
                                >
                                    <MessageCircle className="h-4 w-4 fill-black" />
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white sm:px-7 sm:py-3"
                                >
                                    Tiers from 250 ₾ →
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F] sm:px-7 sm:py-3"
                                >
                                    Book a Shoot
                                </a>
                            </div>
                        </div>

                        {/* Right Aside: At a Glance */}
                        <div className="flex flex-col items-center">
                            <aside className="w-full rounded-[20px] border border-white/10 bg-[#101010]/90 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">AT A GLANCE</p>
                                <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
                                        <p className="text-xl font-bold text-white sm:text-2xl">From 250 ₾</p>
                                        <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">The property through the buyer’s eyes — before the first visit</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                            <p className="text-base font-bold text-white sm:text-lg">2–4 hrs</p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">Filming</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                                            <p className="text-base font-bold text-white sm:text-lg">From 24 hrs</p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">Delivery</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-1.5 text-xs leading-relaxed text-white/72 sm:space-y-2 sm:text-sm">
                                        <li>✓ All in 4K — exterior aerial + interior FPV</li>
                                        <li>✓ Multi-platform formats for listings, website, Reels & pitch decks</li>
                                        <li>✓ Long-term marketing asset — active for 1+ year across sales phases</li>
                                    </ul>
                                </div>
                            </aside>
                            <a
                                href="#target-audience"
                                aria-label="Scroll to Who We Shoot For section"
                                className="mt-4 inline-flex items-center justify-center p-2 text-[#FFD23F] transition-opacity hover:opacity-75 cursor-pointer"
                            >
                                <ChevronDown className="h-6 w-6 animate-bounce text-[#FFD23F]" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. WHO WE SHOOT FOR */}
            <section id="target-audience" className="scroll-mt-16 border-b border-[#2a2a2a] bg-[#0D0D0D] py-8 md:py-16 md:scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Who We Shoot For</h2>
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4.5 sm:p-5">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHY VIDEO SELLS REAL ESTATE */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Why Video Sells Real Estate</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            A buyer scans a listing for a few seconds before deciding to move on or book a view. Industry studies demonstrate the measurable impact of immersive visual media.
                        </p>
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {statsCards.map((item) => (
                            <article key={item.stat} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4.5 sm:p-5">
                                <p className="text-3xl font-bold tracking-tight text-[#FFD23F] sm:text-4xl md:text-5xl">{item.stat}</p>
                                <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                                <a
                                    href={item.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-white/50 transition-colors hover:text-[#FFD23F] sm:mt-5"
                                >
                                    Source: {item.source} →
                                </a>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 max-w-4xl text-xs leading-relaxed text-white/45 sm:mt-8">
                        Figures compiled from open industry analytics. Specific conversion impact depends on property pricing, location, and distribution channels.
                    </p>
                </div>
            </section>

            {/* 4. PROBLEMS WE SOLVE */}
            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">Problems We Solve</h2>
                    </div>

                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/72 sm:mt-3">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHAT YOU GET / TECHNICAL SPECS */}
            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">What You Receive in the Production Package</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            A structured asset package sorted by filming layer and customized for every publishing platform.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-3">
                        {deliverableGroups.map((group) => (
                            <article key={group.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                                <h3 className="text-base font-bold text-white sm:text-lg">{group.title}</h3>
                                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/72 sm:mt-5 sm:space-y-3">
                                    {group.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                            <h3 className="text-base font-bold text-white sm:text-lg">Technical Specifications</h3>
                            <ul className="mt-3.5 grid gap-2 text-sm leading-relaxed text-white/72 sm:mt-4 md:grid-cols-2">
                                <li>4K Ultra HD Filming</li>
                                <li>Exterior Aerial + FPV Interior Glide</li>
                                <li>Color Grading & Stabilization (on edited packages)</li>
                                <li>File Formats: MP4, JPG / WebP on request</li>
                                <li>Delivery via Google Drive or WeTransfer</li>
                                <li>Horizontal & Vertical Ratios</li>
                            </ul>
                            <p className="mt-3.5 text-xs leading-relaxed text-white/45 sm:mt-4">
                                Equipment: DJI Air 3S, DJI Avata 2 (FPV), Insta360 X5
                            </p>
                            <p className="mt-3.5 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80 sm:mt-4">
                                Delivery time: from 24 hours (original 4K master video files) to 48 hours (edited turnkey package).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* 6. HOW IT LOOKS */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-4xl">How It Looks</h2>
                        <p className="mt-3 leading-relaxed text-white/70 sm:mt-4">
                            Examples of real estate drone videography in Tbilisi — exterior aerials and interior FPV passes.
                        </p>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414] sm:mt-8">
                        <RealEstateFormatSlideshow
                            slides={formatExampleSlides}
                            altTexts={[
                                'Residential complex aerial view in Tbilisi — facade and territory',
                                'FPV drone walkthrough — interior flow and spatial perspective',
                                'High-resolution aerial stills for marketing campaigns and pitch decks',
                            ]}
                        />
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
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

            {/* 7. MID-CTA 1 */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Unsure which format best fits your property? Tell us about your target market — we will recommend the optimal package and flight plan.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Discuss Filming
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                VIEW PRICING & TIERS →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. HOW IT WORKS */}
            <ProcessNote text="Filming session takes 2–4 hours. Sales office operations, construction crews, and residents remain uninterrupted." />

            <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">How the Shoot is Conducted</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ROI CALCULATOR ──────────────────────────────────────────────────── */}
            <RealEstateRoiCalculator lang="en" />

            {/* 9. PRICING PACKAGES */}
            <section
                id="pricing"
                className="scroll-mt-16 border-b border-[#2a2a2a] bg-[#080808] pt-5 pb-20 md:scroll-mt-20 md:pt-6"
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Filming Packages</h2>
                        <p className="mt-2 text-xs leading-relaxed text-white/75 md:text-sm">
                            Fixed pricing in Georgian Lari (₾). No hidden costs. All 4K video files and photos are ready to use — from base shoots to full media packages.
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
                                            Popular
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
                        <h3 className="text-lg font-bold text-white md:text-xl">Optional Add-ons</h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/70 md:text-sm">
                            From a single shoot, we can produce tailored formats for websites, social channels, Google Maps, and property listings.
                        </p>
                        <ul className="mt-4 grid gap-3 md:grid-cols-3">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-3.5 text-xs leading-relaxed text-white/72 md:text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 11. FAQ */}
            <FaqSection id="faq" items={faqItems} title="Frequently Asked Questions" />

            {/* 13. PROJECT USE CASES */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Specific Real Estate Scenarios</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            We tailor our flight plans and deliverables for each specific property type.
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
                                    <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 14. MID-CTA 2 */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Recognize your scenario above? Tell us about your property — we will propose a package, shooting plan, and schedule.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Discuss Filming
                            </a>
                            <a
                                href="https://wa.me/995501103183"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Contact via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 15. RELATED FORMATS */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Related Services</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Combine drone filming with interactive 360° virtual tours or vertical video marketing for maximum sales impact.
                        </p>
                    </div>

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

            {/* 16. PRE-CONTACT CTA */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold md:text-3xl">Have a Property? Let’s Discuss Filming</h2>
                        <p className="mt-5 text-lg leading-relaxed text-white/78">
                            Tell us about your property and goals. We will suggest the optimal format and package — calculate a quote within the same day.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Discuss Filming
                        </a>
                    </div>
                </div>
            </section>

            {/* 17. CONTACT FORM */}
            <DroneContactStitch lang="en" preselectedServices={['drone']} />

            {/* 18. FLOATING WHATSAPP & FOOTER */}
            
            <DroneFooterStitch lang="en" />
            <DroneStickyCta />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
