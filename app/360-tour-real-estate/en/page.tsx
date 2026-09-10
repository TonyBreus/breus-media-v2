import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitchEn } from '@/components/drone/DroneFooterStitchEn';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';

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
        stat: '+87%',
        label: 'more listing views',
        description:
            'Real estate listings generate 87% more views when an interactive 360° virtual tour is embedded.',
        source: 'Realtor Market Insights',
        sourceUrl: 'https://www.realtor.com/research/',
    },
    {
        stat: '+70%',
        label: 'more frequently saved to favorites',
        description:
            'Property searchers bookmark listings with virtual tours 70% more often than photos-only listings.',
        source: 'Zillow Research',
        sourceUrl: 'https://www.zillow.com/research/',
    },
    {
        stat: '73%',
        label: 'of buyers want a tour before in-person visit',
        description:
            '73% of buyers prefer exploring layout and dimensions remotely before scheduling physical viewings.',
        source: 'National Association of Realtors (NAR)',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics',
    },
    {
        stat: '×5',
        label: 'higher inquiry conversion',
        description:
            'Interactive 360° tours lift visitor-to-inquiry conversion from 2.1% (standard photos) up to 12.4%.',
        source: 'CloudPano Enterprise Data',
        sourceUrl: 'https://www.cloudpano.com/',
    },
];

const problemCards: CardItem[] = [
    {
        title: '“All listings look identical on MyHome.ge and SS.ge”',
        text: 'A 360° tour cannot be copied with a simple “save image” click. Buyers do not just scroll — they navigate through the property, making your listing memorable.',
    },
    {
        title: '“Investors from Dubai, Tel Aviv or Europe will not fly blindly”',
        text: 'A virtual tour handles the initial viewing remotely. Buyers inspect the layout, views and space independently — leading directly to video calls or reservation.',
    },
    {
        title: '“Half of physical viewings are wasted visits”',
        text: 'Virtual tours filter unqualified leads before the call. Only buyers who already know the floor plan and appreciate the property show up in person.',
    },
    {
        title: '“The listing has been active for months without buyer inquiries”',
        text: 'Stagnant listings are often a presentation issue rather than pricing. A 360° tour gives a strong reason to relaunch promotion and re-engage interested buyers.',
    },
    {
        title: '“We have a 12-phase development without budget for individual shoots”',
        text: 'We capture standard layouts and common areas once. One tour sells dozens of identical units across present and future construction phases.',
    },
    {
        title: '“Video walk-throughs felt expensive and aged quickly”',
        text: 'Videos are watched once. An interactive tour is permanently embedded in the listing card and powers every visitor view month after month.',
    },
];

const deliverablesItems: string[] = [
    'Direct tour link — send via WhatsApp to investors, include in emails or add to MyHome.ge listings',
    'iframe embed code — embed into agency websites or development project pages with a single line',
    'Google Maps panoramas — buyers view the property directly on the map when exploring the neighborhood',
    'High-resolution spherical photos — original 360° master files delivered via cloud storage',
    'Floor plan hotspot navigation — interactive markers allowing seamless room-to-room transitions',
    'Mobile and desktop responsive player — fast loading on iOS, Android, macOS and Windows without app installs',
];

const packages: PricingPackage[] = [
    {
        title: 'Start',
        price: '200 ₾',
        subtitle: 'For apartments up to 100 m² (up to 6 capture points)',
        items: [
            'Up to 6 360° capture points',
            'Full room-to-room navigation',
            'Hosting & direct shareable link',
            'iframe code for website embedding',
            'Delivery within 48 hours',
        ],
        note: 'Best for standard 1–2 bedroom apartments, studios or quick resale listings.',
    },
    {
        title: 'Standard',
        price: '450 ₾',
        subtitle: 'For spacious apartments and houses up to 200 m² (up to 15 capture points)',
        items: [
            'Up to 15 360° capture points',
            'Balcony, entrance and window view points',
            'Interactive floor plan integration',
            'Google Maps panorama publication',
            'Hosting & embed code included',
            'Delivery within 72 hours',
        ],
        note: 'Most popular option for premium apartments, penthouses and duplex units.',
        popular: true,
    },
    {
        title: 'Commercial / Development',
        price: 'from 700 ₾',
        subtitle: 'For commercial premises, offices, villas and residential developments',
        items: [
            '20+ capture points across multiple zones',
            'Multi-floor navigation & common areas',
            'Territory, parking & entrance group',
            'Branded UI player with agency logo',
            'Direct publication to Google Maps',
            'Priority delivery within 5 business days',
        ],
        note: 'Custom scoped based on total square meters and architectural layout.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Engineered for buyer decision-making',
        text: 'We shoot specifically so buyers either book an in-person viewing with conviction or self-filter, saving you from wasted trips.',
    },
    {
        title: 'Optimized for international transactions',
        text: 'Clear focus on what remote investors evaluate: true spatial volume, window vistas, building lobby and neighborhood context.',
    },
    {
        title: 'Works on MyHome.ge, SS.ge and WhatsApp',
        text: 'A single link embeds into listings, sends via WhatsApp chats, embeds on websites and links to Google Maps without app installs.',
    },
    {
        title: 'Seamless non-disruptive shoot',
        text: 'Tenants living in the apartment? We shoot at their convenient hour. Active sales office? We synchronize. Fast and professional.',
    },
    {
        title: 'Updatable rather than reshot',
        text: 'Renovated a room or changed furniture? We add new capture points to the existing tour instead of rebuilding from scratch.',
    },
    {
        title: 'Long-lasting digital asset',
        text: 'Unlike seasonal ads, a 360° tour of a standard floor plan sells dozens of development units over the entire project lifecycle.',
    },
];

const faqItems: FaqItem[] = [
    {
        question: 'Where is the virtual tour hosted? Do I need special software?',
        answer: 'No software needed. The tour is hosted on high-speed cloud servers — you receive a direct link and an iframe embed code.',
    },
    {
        question: 'How do I add the tour to MyHome.ge and SS.ge?',
        answer: 'Both portals accept virtual tour URLs in the listing description. We provide simple step-by-step instructions for your team.',
    },
    {
        question: 'Does the tour work on mobile devices?',
        answer: 'Yes. The tour opens seamlessly in mobile browsers on iOS and Android — crucial for messaging via WhatsApp and Telegram.',
    },
    {
        question: 'Can you shoot unfurnished properties or only staged ones?',
        answer: 'We shoot both. Unfurnished shows true architectural dimensions, while furnished helps buyers visualize living in the space.',
    },
    {
        question: 'How long does the on-site shoot take?',
        answer: 'An apartment up to 100 m² takes 1 to 2 hours. Houses up to 200 m² take 2 to 4 hours. Commercial spaces are scoped by area.',
    },
    {
        question: 'What if renovations or furniture change later?',
        answer: 'Tours are modular. We can re-shoot specific rooms and update existing tour links without rebuilding from scratch.',
    },
    {
        question: 'Will the tour appear on Google Maps automatically?',
        answer: 'Once we publish the 360° panorama to your Google Business Profile, it appears on Google Maps automatically.',
    },
    {
        question: 'How does a 360° tour differ from a video walk-through?',
        answer: 'A video follows a fixed camera route, whereas a 360° tour gives full control to the viewer to look in any direction at their own pace.',
    },
    {
        question: 'Do you work only in Tbilisi?',
        answer: 'Tbilisi is our primary base (Vake, Saburtalo, Mtatsminda, Sololaki, Old Town, Didi Dighomi). We also travel across Batumi, Gudauri and all Georgia.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Real Estate Aerial Drone Filming',
        href: '/drone-services/drone-real-estate/en',
        text: 'Aerial neighborhood overview and building scale — essential exterior context for residential developments.',
    },
    {
        title: 'Reels for Realtors & Developers',
        href: '/reels-promo/reels-realtor/en',
        text: 'Dynamic vertical videos for Instagram, TikTok and regular social media buyer reach.',
    },
];

const pageUrl = 'https://breus.media/360-tour-real-estate/en';
const pageTitle = '360° Virtual Tour for Real Estate in Tbilisi | Breus Media';
const pageDescription =
    'Interactive 360° virtual tours for apartments, houses and developments in Tbilisi. For MyHome.ge, SS.ge, agency websites and remote investor sales. From 200 ₾.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: pageUrl,
        languages: {
            ru: 'https://breus.media/360-tour-real-estate',
            en: 'https://breus.media/360-tour-real-estate/en',
        },
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: pageUrl,
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '360° Virtual Tour for Real Estate in Tbilisi',
    description: pageDescription,
    provider: { '@id': 'https://breus.media/#organization' },
    areaServed: ['Tbilisi', 'Georgia'],
    priceRange: '200 GEL – 900 GEL',
    serviceType: '360 Degree Virtual Tour Production',
    url: pageUrl,
};

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
            name: 'Real Estate',
            item: 'https://breus.media/real-estate-service/en',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Real Estate 360° Tour',
            item: pageUrl,
        },
    ],
};

export default function TourRealEstateEnPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang="en"
                ctaLabel="Book a Shoot"
                singleTickerMode={true}
                tickerAfterFirstScroll={false}
                showMobilePrimaryCta={false}
                showDesktopPrimaryCta={false}
                mobileQuickLink={{ label: 'PRICING', href: '#pricing' }}
                mobileMinimalCenterTime={true}
                showDesktopNavTime={true}
                stickyTickerUnderHeader={true}
                languageLinks={{ ru: '/360-tour-real-estate', en: '/360-tour-real-estate/en' }}
                sectionLinks={[
                    { label: 'Zones', href: '#zones' },
                    { label: 'Process', href: '#process' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            <DebugWrapper id={3604100} label="Hero Section">
                <section
                    id="tour-real-estate-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-16 pt-36 md:pb-20 md:pt-44"
                >
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                                    <span>REAL ESTATE 360° TOURS</span>
                                </div>
                                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                                    360° Virtual Tour for Apartments, Houses & Developments in Tbilisi
                                </h1>
                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                                    Interactive walk-throughs for MyHome.ge, SS.ge, agency websites and remote investor deals. Buyers navigate rooms independently from any smartphone.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-xl bg-[#D4A017] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-white"
                                    >
                                        Book a Shoot
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-[#D4A017] hover:text-[#D4A017]"
                                    >
                                        View Packages
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">At a glance</p>
                                    <div className="mt-4 space-y-3 text-sm text-white/80">
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Starting price</span>
                                            <span className="font-bold text-white">from 200 ₾</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Delivery turnaround</span>
                                            <span className="font-bold text-white">from 48 hours</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Compatibility</span>
                                            <span className="font-bold text-white">iOS, Android, Web, Maps</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Embed code</span>
                                            <span className="font-bold text-white">iframe + direct link</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604200} label="Stats Section">
                <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {statsCards.map((card) => (
                                <article key={card.stat} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <p className="text-3xl font-extrabold text-[#D4A017] md:text-4xl">{card.stat}</p>
                                    <p className="mt-2 text-sm font-bold text-white">{card.label}</p>
                                    <p className="mt-2 text-xs leading-relaxed text-white/60">{card.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604300} label="Problems & Solutions">
                <section id="zones" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Portals & Sales</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Common Real Estate Presentation Challenges</h2>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {problemCards.map((card) => (
                                <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <h3 className="text-base font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604400} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Deliverables</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What You Receive in the Production Package</h2>
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {deliverablesItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                    <span className="text-[#D4A017] font-bold">✓</span>
                                    <p className="text-sm leading-relaxed text-white/80">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604500} label="Pricing Section">
                <section id="pricing" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Transparent pricing</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Virtual Tour Packages</h2>
                            <p className="mt-3 text-sm text-white/70">Fixed transparent rates in GEL for apartments, houses and developments.</p>
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.title}
                                    className={`relative flex flex-col justify-between rounded-2xl border p-7 ${
                                        pkg.popular ? 'border-[#D4A017] bg-[#D4A017]/[0.04]' : 'border-white/10 bg-white/[0.02]'
                                    }`}
                                >
                                    {pkg.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4A017] px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                                            POPULAR
                                        </span>
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                                        <p className="mt-1 text-xs text-white/60">{pkg.subtitle}</p>
                                        <p className="mt-4 text-3xl font-extrabold text-[#D4A017]">{pkg.price}</p>
                                        <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                                            {pkg.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="text-[#D4A017]">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <PackageCta
                                            label="Select package →"
                                            packageName={pkg.title}
                                            packagePrice={pkg.price}
                                            lang="en"
                                            className={`inline-flex w-full items-center justify-center rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                                                pkg.popular
                                                    ? 'bg-[#D4A017] text-black hover:bg-white'
                                                    : 'border border-white/20 bg-white/5 text-white hover:border-[#D4A017] hover:text-[#D4A017]'
                                            }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604600} label="Why Us">
                <section id="process" className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Advantages</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Why Realtors and Developers Work With Us</h2>
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <h3 className="text-base font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604700} label="FAQ Section">
                <section id="faq" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Questions & Answers</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqItems.map((item) => (
                                <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between font-bold text-white">
                                        <span>{item.question}</span>
                                        <span className="ml-4 text-[#D4A017] transition group-open:rotate-180">↓</span>
                                    </summary>
                                    <p className="mt-4 text-sm leading-relaxed text-white/70">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604800} label="Related Services">
                <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-xl font-bold text-white md:text-2xl">Related Real Estate Production</h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[#D4A017]"
                                >
                                    <h3 className="text-base font-bold text-white group-hover:text-[#D4A017]">{service.title} →</h3>
                                    <p className="mt-2 text-sm text-white/70">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={3604900} label="Contact Section">
                <section id="contact" className="scroll-mt-20">
                    <DroneContactStitch lang="en" />
                </section>
            </DebugWrapper>

            <DroneFooterStitchEn />
            

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
