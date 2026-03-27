import type { DroneDirectionPageConfig } from '@/constants/droneDirectionPages';

export type L2DirectionKey =
    | 'hotelsService'
    | 'restaurantsService'
    | 'tourismService'
    | 'clinicsService'
    | 'autoService'
    | 'businessService'
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
    primaryHref?: string;
    primaryCtaLabel?: string;
    featured?: boolean;
    tag?: string;
};

export type L2StatItem = {
    value: string;
    label: string;
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
    features: string[];
    buttonText: string;
    featured?: boolean;
    tag?: string;
};

export type L2PainCard = {
    title: string;
    text: string;
    resolution: string;
};

export type L2FaqItem = {
    question: string;
    answer: string;
};

export type L2ContactConfig = {
    title: string;
    description: string;
    taskPlaceholder: string;
    serviceOptions: string[];
    whatsappHref: string;
};

export type L2DirectionDataConfig = {
    heroSubtitle: string;
    heroSupportingLine: string;
    socialProofStats: L2StatItem[];
    servicesHeading: string;
    services: L2ServiceItem[];
    processSteps: L2ProcessStep[];
    map: L2MapConfig;
    pricingHeading: string;
    pricingTagline: string;
    pricingPlans: L2PricingPlan[];
    painProofTitle: string;
    painProofSupportingLine: string;
    painProofCards: L2PainCard[];
    faqHeading: string;
    faqItems: L2FaqItem[];
    contact: L2ContactConfig;
};

export type L2DirectionConfig = {
    page: DroneDirectionPageConfig;
    data: L2DirectionDataConfig;
};
