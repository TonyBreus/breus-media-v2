import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitchEn } from '@/components/drone/DroneFooterStitchEn';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';

const CANONICAL_URL = 'https://breus.media/reels-promo/reels-realtor/en';
const PAGE_TITLE = 'Reels for Realtors in Tbilisi — Instagram & TikTok Video Production | Breus Media';
const PAGE_DESCRIPTION =
    'Regular Reels production for real estate agents and developers in Tbilisi. Personal branding, inbound leads and expert video content. From 200 ₾ per video.';
const CONTACT_PHONE = '+995 501 103 183';
const WHATSAPP_URL = 'https://wa.me/995501103183';
const TELEGRAM_URL = 'https://t.me/breusmedia';
const REEL_EXAMPLE_EMBED = 'https://www.tiktok.com/embed/v2/6718335390845095173';
const REEL_EXAMPLE_URL = 'https://www.tiktok.com/@scout2015/video/6718335390845095173';

const audienceItems = [
    'Realtor with 1–3 years experience — plenty of market insights, but lacking a consistent video creation routine.',
    'Experienced agent relying strictly on word-of-mouth — looking to expand lead flow and attract inbound inquiries from social media.',
    'Agent catering to international buyers — needing English-language content about Tbilisi property market for overseas investors.',
    'Agency broker managing a personal brand — needing a streamlined filming workflow that fits around busy client viewings.',
    'Boutique agency team — wanting regular high-grade social video presence without hiring a full in-house media department.',
    'Agent transitioning to digital channels — recognizing market shifts and building long-term digital authority.',
];

const taskCards = [
    {
        title: 'Generates inbound leads, not just one-off deals',
        text: 'Classifieds bring leads for a single apartment; Reels build a brand. Clients remember your name and reach out directly when ready to buy or sell.',
    },
    {
        title: 'Elevates you from “another agent” to market expert',
        text: 'Content covering Tbilisi districts, price trends, legal steps and mistakes demonstrates deep competence and shortens the sales cycle.',
    },
    {
        title: 'Works for you 24/7',
        text: 'Videos accumulate views and inquiries around the clock while you are on property showings or off on weekends.',
    },
    {
        title: 'Gives an edge when sellers choose an agent',
        text: 'When owners evaluate competing agents, an active Instagram with practical advice establishes trust before the first phone call.',
    },
];

const painCards = [
    {
        title: '“I know I should film, but keep postponing it”',
        text: 'Between contracts and client showings, content gets neglected. We take over production: all you need is one shoot session every 2–4 weeks.',
    },
    {
        title: '“I tried filming myself — the result looked amateur”',
        text: 'Poor audio, shaky camera and awkward pauses undermine authority. Professional lighting, audio and editing ensure confidence on screen.',
    },
    {
        title: '“I run out of content ideas”',
        text: 'Your clients ask questions every day — those are your video topics. We structure them into a monthly content calendar.',
    },
    {
        title: '“I post occasionally, but get few views and no leads”',
        text: 'The missing link is structure and rhythm. A steady cadence of 1–2 polished videos per week delivers compounded reach over time.',
    },
    {
        title: '“Competitors are already active — am I late?”',
        text: 'In Tbilisi, most agents still post static listings. Thoughtful, expert video content remains a wide-open blue ocean to stand out quickly.',
    },
    {
        title: '“Buyers find my listings, but never remember me”',
        text: 'Reels create a personal relationship: clients see your face, hear your voice and trust your perspective, driving repeats and referrals.',
    },
];

const earningsItems = [
    'Inbound buyer inquiries without heavy ad spend: organic Instagram and TikTok reach connects you with motivated home buyers.',
    'Higher listing win rate: an active personal profile serves as tangible proof of marketing capability when pitching exclusive seller representation.',
    'Stronger premium positioning: agents with recognized personal brands command higher commissions and handle luxury listings.',
    'Compounded referral engine: followers share practical market breakdown videos with friends actively searching for Tbilisi properties.',
];

const rubricItems = [
    {
        title: 'Neighborhood & District Breakdown',
        text: 'Vake, Saburtalo, Mtatsminda, Sololaki, Didi Dighomi: pros, cons, transport, prices per square meter and rental yields.',
    },
    {
        title: 'Buyer & Investor Guidance',
        text: 'Registration at Public Service Hall, taxes, developer contracts, utility costs and safe remote transactions.',
    },
    {
        title: 'Top Real Estate Mistakes',
        text: 'Why cheap apartments carry hidden costs, renovation risks and pitfalls when purchasing under-construction property.',
    },
    {
        title: 'Property Tour & Layout Analysis',
        text: 'Quick walk-throughs focusing on ergonomics, lighting, views, build quality and real living comfort.',
    },
    {
        title: 'Market Updates & Price Dynamics',
        text: 'Mortgage trends, tourism impact, emerging investment micro-locations and honest price expectations.',
    },
    {
        title: 'Behind the Scenes & Deal Stories',
        text: 'Negotiation wins, resolving documentation roadblocks and real-world case studies of satisfied buyers.',
    },
];

const processSteps = [
    {
        step: '01',
        title: 'Strategy & Topics',
        text: 'We define your target buyer profile (local buyers, expats, investors) and build a 4–8 video topic calendar.',
    },
    {
        step: '02',
        title: 'Scripting & Hooks',
        text: 'We craft concise bullet-point talking scripts with punchy opening hooks and clear calls to action.',
    },
    {
        step: '03',
        title: 'Filming Session',
        text: 'A 2-hour shoot in Tbilisi with professional wireless audio, 4K camera and pro lighting. We capture 4–8 videos at once.',
    },
    {
        step: '04',
        title: 'Editing & Motion Graphics',
        text: 'Dynamic pacing, custom styled on-screen subtitles, visual B-roll cutaways and sound design.',
    },
    {
        step: '05',
        title: 'Delivery & Publishing Pack',
        text: 'Final 9:16 videos delivered via cloud storage with written captions and hashtags ready for instant posting.',
    },
];

const beginnerFaqItems = [
    {
        question: 'What if I have never spoken on camera before?',
        answer: 'Most top real estate creators started exactly where you are. We guide you through short sentences, use natural prompts and do multiple quick takes. Within 15 minutes, you will feel completely at ease.',
    },
    {
        question: 'Do I need to memorize long scripts?',
        answer: 'Never. We break topics down into 2–3 sentence thoughts. You speak naturally about what you know best, and we edit out any pauses or stumbles seamlessly.',
    },
    {
        question: 'What should I wear for the shoot?',
        answer: 'Smart casual or professional attire that matches your daily client viewings. Solid colors without distracting micro-patterns work best on camera.',
    },
    {
        question: 'Where do we film the videos?',
        answer: 'At your agency office, a stylish cafe, outside in iconic Tbilisi neighborhoods or on-site at active property listings.',
    },
];

const moneyFaqItems = [
    {
        question: 'How much does a Realtor Reels package cost?',
        answer: 'Individual video production starts from 200 ₾. The Starter pack of 4 videos is 650 ₾, and our monthly full-cycle package of 8 videos is 1,200 ₾.',
    },
    {
        question: 'How quickly will I see incoming buyer leads?',
        answer: 'Real estate is a high-ticket trust purchase. Most agents see first qualified inbound inquiries within 4 to 8 weeks of consistent weekly posting.',
    },
    {
        question: 'Can you edit footage I shoot on my iPhone?',
        answer: 'Yes. If you prefer capturing your own clips, we provide professional editing, color grading and subtitles starting from 80 ₾ per video.',
    },
    {
        question: 'Do you offer multilingual Reels in English and Russian?',
        answer: 'Yes. We produce Reels in Russian, English and Georgian, including custom subtitles for expat and international investor targeting.',
    },
];

const pricingPlans = [
    {
        title: 'Test Pack',
        price: '650 ₾',
        period: 'one-time',
        subtitle: 'Ideal for trying out the format and launching your video profile',
        features: [
            '4 ready-to-publish Reels / TikTok videos',
            '1 filming session (up to 2 hours)',
            'Topic selection & hook development',
            'Dynamic editing & animated subtitles',
            'Ready captions and hashtags',
        ],
        buttonText: 'Select package →',
        popular: false,
    },
    {
        title: 'Monthly Growth',
        price: '1,200 ₾',
        period: 'per month',
        subtitle: 'Our core package for consistent personal brand expansion (2 videos/week)',
        features: [
            '8 ready Reels / TikTok videos per month',
            '2 filming sessions (2 hours each)',
            'Full monthly content strategy',
            'Dynamic editing, subtitles & B-roll cutaways',
            'Monthly analytics review & topic adjustments',
            'Priority production turnaround',
        ],
        buttonText: 'Select package →',
        popular: true,
    },
    {
        title: 'Agency Scale',
        price: '2,000 ₾',
        period: 'per month',
        subtitle: 'For real estate agencies and multi-agent teams wanting high-volume output',
        features: [
            '14–16 videos per month for 1–3 agents',
            'Up to 4 shooting sessions per month',
            'Dedicated scriptwriting & brand styling',
            'Drone cutaways & listing property overlays',
            'Covers, captions & multilingual subtitle tracks',
        ],
        buttonText: 'Select package →',
        popular: false,
    },
];

const relatedServices = [
    {
        title: 'Real Estate Aerial Drone Filming',
        href: '/drone-services/drone-real-estate/en',
        text: 'Capture neighborhood context, building height and architectural facades from above.',
    },
    {
        title: '360° Virtual Tour for Real Estate',
        href: '/360-tour-real-estate/en',
        text: 'Interactive virtual tours for remote investor viewings and website listing embeds.',
    },
    {
        title: 'Real Estate Media Hub',
        href: '/real-estate-service/en',
        text: 'Comprehensive visual packaging: photo, 4K video, drone, staging and listing copy.',
    },
    {
        title: 'AI Visualization & Staging',
        href: '/ai-visualization-service/en',
        text: 'Virtual staging and photorealistic interior visualization for unfinished properties.',
    },
];

const commonMistakes = [
    'Publishing only dry apartment sale ads without sharing helpful market insights.',
    'Irregular posting: sporadic bursts followed by months of total silence.',
    'Using heavy industry jargon instead of speaking in the clear language of home buyers.',
    'Ignoring the critical first 3 seconds with generic greetings like "Hello everyone...".',
    'Releasing videos without subtitles when over 70% of social media users watch on mute.',
    'Waiting for the "perfect video" and delaying releases instead of maintaining consistency.',
];

const myths = [
    {
        myth: 'You need thousands of followers before you can get clients.',
        reality: 'Reels algorithms distribute valuable content directly to interested non-followers regardless of account size.',
    },
    {
        myth: 'Nobody wants to watch real estate advice on Instagram.',
        reality: 'Buyers actively search for reliable market explanations. Clear answers turn viewers into clients.',
    },
    {
        myth: 'You need ultra-expensive cinema cameras to succeed.',
        reality: 'Clear lighting, crisp audio and strong scripting matter far more. Polished editing maximizes impact.',
    },
    {
        myth: 'One viral video is enough for long-term success.',
        reality: 'Predictable consistency (1–2 videos weekly) generates dependable deal flow better than random one-off spikes.',
    },
    {
        myth: 'Instagram is only for teenagers, not property buyers aged 30–55.',
        reality: 'In Georgia and across international expat communities, this demographic represents the most active social media user base.',
    },
];

const glossary = [
    {
        term: 'Reels / Shorts',
        definition: 'Short vertical videos (15–60 sec) pushed by recommendation algorithms to new audiences.',
    },
    {
        term: 'Hook',
        definition: 'The initial 2–3 seconds of a video engineered to capture attention and boost retention.',
    },
    {
        term: 'Dynamic Subtitles',
        definition: 'Synchronized on-screen text allowing viewers to consume and engage without audio.',
    },
    {
        term: 'Content Calendar',
        definition: 'A structured list of scheduled video topics, shoot dates and publishing milestones.',
    },
    {
        term: 'Organic Reach',
        definition: 'Impressions delivered purely via platform algorithms without paid advertising spend.',
    },
    {
        term: 'Caption & CTA',
        definition: 'Complementary post text that guides viewers to comment, DM or book a consultation.',
    },
];

const notFitItems = [
    'If you expect overnight results in 2 weeks: social content builds compounding brand authority over 2–4 months.',
    'If you refuse to appear on camera: personal branding relies on human connection and visual trust.',
    'If you need 24/7 community management and direct message answering: that is dedicated SMM management.',
    'If your starting budget is under 600 ₾: high-grade production with lighting and sound cannot be delivered at cut rates.',
];

const faqSchemaItems = [
    ...beginnerFaqItems,
    ...moneyFaqItems,
];

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
        languages: {
            ru: 'https://breus.media/reels-promo/reels-realtor',
            en: 'https://breus.media/reels-promo/reels-realtor/en',
        },
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
    },
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
            name: 'Realtor Reels',
            item: CANONICAL_URL,
        },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems.map((item) => ({
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
    name: 'Reels for Realtors in Tbilisi',
    description: PAGE_DESCRIPTION,
    areaServed: ['Tbilisi', 'Georgia'],
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: CONTACT_PHONE,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tbilisi',
            addressCountry: 'GE',
        },
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '200',
        highPrice: '2000',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Reels for Realtors in Tbilisi',
    description: 'Example vertical short-form video for real estate agents on Instagram and TikTok.',
    embedUrl: REEL_EXAMPLE_EMBED,
    contentUrl: REEL_EXAMPLE_URL,
    thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    uploadDate: '2026-03-21',
    publisher: {
        '@type': 'Organization',
        name: 'Breus Media',
        url: 'https://breus.media',
    },
};

export default function ReelsRealtorEnPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang="en"
                languageLinks={{ ru: '/reels-promo/reels-realtor', en: '/reels-promo/reels-realtor/en' }}
                sectionLinks={[
                    { label: 'Packages', href: '#pricing' },
                    { label: 'Process', href: '#process' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            <section
                id="reels-realtor-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.22),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]"
                />

                <div className="container relative z-10 mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                            <span>REELS FOR REAL ESTATE</span>
                        </div>
                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            Reels for Realtors in Tbilisi — Personal Brand & Inbound Leads
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
                            Turn your property expertise into a steady stream of buyer inquiries on Instagram and TikTok. We handle scripts, filming, lighting and editing turnkey.
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
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Who This Is For</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {audienceItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <span className="text-[#D4A017] font-bold">✓</span>
                                <p className="text-sm leading-relaxed text-white/80">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">What Reels Accomplish for Your Business</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {taskCards.map((card) => (
                            <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Common Video Production Roadblocks</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Business Benefits & Revenue Impact</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {earningsItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <span className="text-[#D4A017] font-bold">✓</span>
                                <p className="text-sm leading-relaxed text-white/80">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Proven Real Estate Content Rubrics</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {rubricItems.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <h3 className="text-base font-bold text-[#D4A017]">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">How We Work</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {processSteps.map((step) => (
                            <div key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <span className="text-2xl font-extrabold text-[#D4A017]">{step.step}</span>
                                <h3 className="mt-3 text-base font-bold text-white">{step.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-white/70">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Transparent pricing</p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Reels Production Packages</h2>
                        <p className="mt-3 text-sm text-white/70">Fixed rates in GEL including scripting, filming, lighting and editing.</p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {pricingPlans.map((pkg) => (
                            <div
                                key={pkg.title}
                                className={`relative flex flex-col justify-between rounded-2xl border p-7 ${
                                    pkg.popular ? 'border-[#D4A017] bg-[#D4A017]/[0.04]' : 'border-white/10 bg-white/[0.02]'
                                }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4A017] px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                                        MOST POPULAR
                                    </span>
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                                    <p className="mt-1 text-xs text-white/60">{pkg.subtitle}</p>
                                    <div className="mt-4 flex items-baseline gap-2">
                                        <span className="text-3xl font-extrabold text-[#D4A017]">{pkg.price}</span>
                                        <span className="text-xs text-white/60">{pkg.period}</span>
                                    </div>
                                    <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                                        {pkg.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-[#D4A017]">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <PackageCta
                                        label={pkg.buttonText}
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

            <section id="faq" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A017]">Q&A</p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqSchemaItems.map((item) => (
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

            <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Common Real Estate Video Mistakes</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {commonMistakes.map((item, i) => (
                            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <span className="text-[#D4A017] font-bold">✕ </span>
                                <span className="text-sm text-white/80">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold md:text-4xl">Myths vs. Reality</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">Myth</p>
                                <p className="mt-2 text-sm font-bold text-white">{item.myth}</p>
                                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Reality</p>
                                <p className="mt-2 text-sm text-white/70">{item.reality}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0c0c0c] py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Real Estate Video Glossary</h2>
                    <div className="mt-8 space-y-4">
                        {glossary.map((item) => (
                            <div key={item.term} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-base font-bold text-[#D4A017]">{item.term}</h3>
                                <p className="mt-2 text-sm text-white/70">{item.definition}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold md:text-4xl">Who We Are Not a Fit For</h2>
                    <ul className="mt-8 space-y-3 text-sm text-white/75">
                        {notFitItems.map((item, i) => (
                            <li key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

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

            <section id="contact" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#080808] py-20">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Launch Your Personal Brand?</h2>
                    <p className="mt-4 text-sm text-white/70">
                        Message us on WhatsApp to discuss video topics, select the right filming format and schedule your first shoot in Tbilisi.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-[#D4A017] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-white"
                        >
                            Message on WhatsApp
                        </a>
                        <a
                            href={TELEGRAM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-[#D4A017] hover:text-[#D4A017]"
                        >
                            Telegram
                        </a>
                    </div>
                </div>
            </section>

            <DroneFooterStitchEn />
            
        </main>
    );
}
