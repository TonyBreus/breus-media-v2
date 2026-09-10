import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';

export type L2DirectionKey =
    | 'hotelsService'
    | 'restaurantsService'
    | 'tourismService'
    | 'clinicsService'
    | 'autoService'
    | 'businessService'
    | 'realEstateService'
    | 'aiVisualizationService'
    | 'promoVideoService'
    | 'reelsService'
    | 'tours360Service';

export type L2ServiceItem = {
    id: number;
    order: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
    imagePosition?: string;
    primaryHref?: string;
    primaryCtaLabel?: string;
    secondaryHref?: string;
    secondaryCtaLabel?: string;
    featured?: boolean;
    tag?: string;
};

export type L2HeroCardCta = {
    label: string;
    href: string;
};

export type L2HeroCard = {
    slug: string;
    title: string;
    image: string;
    tags: string;
    shortText: string;
    primaryCta?: L2HeroCardCta;
    secondaryCta: L2HeroCardCta;
};

export type L2CardsLayoutPreset = 'soft' | 'aggressive';

export type L2StatItem = {
    value: string;
    label: string;
};

export type L2StatCard = {
    value: string;
    label: string;
    description: string;
    sourceLabel?: string;
    sourceUrl?: string;
};

export type L2SectionLink = {
    label: string;
    href: string;
};

export type L2SectionKey =
    | 'hero'
    | 'marquee'
    | 'whatIsTour'
    | 'signalStrip'
    | 'services'
    | 'socialProof'
    | 'trust'
    | 'map'
    | 'painProof'
    | 'painSolutions'
    | 'earnLose'
    | 'midCta'
    | 'deliverables'
    | 'pricing'
    | 'pricingAddOns'
    | 'process'
    | 'conditionsNote'
    | 'whyUs'
    | 'shortQa'
    | 'faq'
    | 'relatedLinks'
    | 'contact';

export type L2SignalStripItem = {
    title: string;
    text: string;
};

export type L2WhatIsTourConfig = {
    heading: string;
    paragraphs: string[];
};

export type L2ProcessStep = {
    number: string;
    title: string;
    description: string;
};

export type L2MapZone = {
    color: string;
    borderColor: string;
    title: string;
    description: string;
};

export type L2MapConfig = {
    title: string;
    description: string;
    zones: L2MapZone[];
    image: string;
    imageAlt: string;
    badgeText: string;
};

export type L2PricingPlan = {
    title: string;
    price: string;
    period?: string;
    subtitle?: string;
    audience?: string;
    features: string[];
    note?: string;
    buttonText: string;
    buttonHref?: string;
    featured?: boolean;
    popular?: boolean;
    tag?: string;
};

export type L2PainCard = {
    title: string;
    text: string;
    resolution: string;
};

export type L2PainSolutionItem = {
    pain: string;
    solution: string;
};

export type L2FaqItem = {
    question: string;
    answer: string;
};

export type L2MidCtaConfig = {
    heading?: string;
    text: string;
    buttonText: string;
    buttonHref: string;
};

export type L2DeliverablesConfig = {
    heading: string;
    intro?: string;
    items: string[];
};

export type L2PricingAddOnsConfig = {
    heading: string;
    items: string[];
    note?: string;
};

export type L2WhyUsItem = {
    title: string;
    text: string;
};

export type L2WhyUsConfig = {
    heading: string;
    subtitle?: string;
    items: L2WhyUsItem[];
};

export type L2EarnLoseConfig = {
    heading: string;
    earnTitle: string;
    earnItems: string[];
    loseTitle: string;
    loseItems: string[];
};

export type L2ShortQaConfig = {
    heading: string;
    items: L2FaqItem[];
};

export type L2ConditionsNoteConfig = {
    title: string;
    text: string;
    details?: string;
    items?: string[];
};

export type L2ContactConfig = {
    title: string;
    description: string;
    taskPlaceholder: string;
    serviceOptions: string[];
    whatsappHref: string;
    preselectedServices?: string[];
};

export type L2DirectionDataConfig = {
    heroSubtitle: string;
    heroSupportingLine: string;
    heroDisplayTitle?: string;
    heroDesktopDisplayTitle?: string;
    heroDisplayAccentLine?: string;
    heroMobileCompact?: boolean;
    heroLongHubLayout?: boolean;
    heroLeadParagraphs?: string[];
    heroCards?: L2HeroCard[];
    heroPrimaryCtaLabel?: string;
    heroPrimaryCtaHref?: string;
    heroSecondaryCtaLabel?: string;
    heroSecondaryCtaHref?: string;
    sectionLinks?: L2SectionLink[];
    sectionOrder?: L2SectionKey[];
    marqueeItems?: Array<string | { text: string; link: string }>;
    singleTickerMode?: boolean;
    tickerItems?: Array<string | { text: string; link: string }>;
    tickerExcludeTexts?: string[];
    whatIsTour?: L2WhatIsTourConfig;
    socialProofStats?: L2StatItem[];
    statsCards?: L2StatCard[];
    statsHeading?: string;
    statsTagline?: string;
    signalStrip?: L2SignalStripItem[];
    servicesHeading: string;
    servicesSubtitle?: string;
    services: L2ServiceItem[];
    midCta?: L2MidCtaConfig;
    deliverables?: L2DeliverablesConfig;
    processSteps: L2ProcessStep[];
    processHeading?: string;
    map?: L2MapConfig;
    pricingHeading: string;
    pricingTagline: string;
    pricingPlans: L2PricingPlan[];
    pricingAddOns?: L2PricingAddOnsConfig;
    conditionsNote?: L2ConditionsNoteConfig;
    painProofTitle?: string;
    painProofSupportingLine?: string;
    painProofCards?: L2PainCard[];
    painSolutions?: {
        heading: string;
        subtitle?: string;
        items: L2PainSolutionItem[];
    };
    earnLose?: L2EarnLoseConfig;
    whyUs?: L2WhyUsConfig;
    shortQa?: L2ShortQaConfig;
    faqHeading: string;
    faqItems: L2FaqItem[];
    contact: L2ContactConfig;
    useDroneContact?: boolean;
};

export type L2DirectionConfig = {
    page: DroneDirectionPageConfig;
    data: L2DirectionDataConfig;
};
