import React from 'react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DroneFooterStitchEn } from '@/components/drone/DroneFooterStitchEn';
import { gazetaDroneServiceTickerExcludeTexts } from '@/constants/gazetaRoutes';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';
import type { L2CardsLayoutPreset, L2DirectionConfig } from '@/components/l2-direction/types';
import {
    L2DirectionConditionsNote,
    L2DirectionContact,
    L2DirectionDeliverables,
    L2DirectionEarnLose,
    L2DirectionFaq,
    L2DirectionHero,
    L2DirectionMarquee,
    L2DirectionMap,
    L2DirectionMidCta,
    L2DirectionMobileServicesList,
    L2DirectionPainProof,
    L2DirectionPainSolutions,
    L2DirectionPricing,
    L2DirectionPricingAddOns,
    L2DirectionProcess,
    L2DirectionShortQa,
    L2DirectionSignalStrip,
    L2DirectionServices,
    L2DirectionSocialProof,
    L2DirectionWhatIsTour,
    L2DirectionWhyUs,
} from '@/components/l2-direction/L2DirectionSections';

type L2DirectionRendererProps = {
    schemaKey: string;
    config: L2DirectionConfig;
    servicesLayoutPreset?: L2CardsLayoutPreset;
    includeBaseJsonLd?: boolean;
    initialLang?: 'ru' | 'en';
    languageLinks?: {
        ru?: string;
        en?: string;
    };
};

const DRONE_SERVICE_TICKER_SCHEMA_KEYS = new Set([
    'ai-visualization-service',
    'real-estate-service',
    'hotels-service',
    'restaurants-service',
    'auto-service',
    'tourism-service',
    'clinics-service',
    'reels-service',
]);

const L2_PARITY_LAYER_SCHEMA_KEYS = new Set([
    '360-tours-service',
    'ai-visualization-service',
    'auto-service',
    'clinics-service',
    'hotels-service',
    'real-estate-service',
    'reels-service',
    'restaurants-service',
    'tourism-service',
]);

export const L2DirectionRenderer = ({
    schemaKey,
    config,
    servicesLayoutPreset = 'soft',
    includeBaseJsonLd = true,
    initialLang = 'ru',
    languageLinks,
}: L2DirectionRendererProps) => {
    const jsonLdSchemas = includeBaseJsonLd
        ? buildDirectionJsonLd(
              config.page,
              config.data.services.map((service) => service.title),
              config.data.faqItems
          )
        : [];
    const sectionLinks = config.data.sectionLinks ?? [
        { label: 'Услуги', href: '#services' },
        { label: 'Пакеты', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ];
    const floatingCtaLabel = config.data.heroPrimaryCtaLabel ?? 'Обсудить задачу';
    const useDroneServiceTicker = DRONE_SERVICE_TICKER_SCHEMA_KEYS.has(schemaKey);
    const enableParityLayer = L2_PARITY_LAYER_SCHEMA_KEYS.has(schemaKey);
    const isEnglish = initialLang === 'en';

    const baseSlug = schemaKey.replace(/-en$/, '');
    const resolvedLanguageLinks = languageLinks ?? {
        ru: `/${baseSlug}`,
        en: `/${baseSlug}/en`,
    };

    return (
        <main className="bg-[#080808] text-white min-h-screen">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`${schemaKey}-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang={initialLang}
                languageLinks={resolvedLanguageLinks}
                sectionLinks={sectionLinks}
                singleTickerMode={useDroneServiceTicker ? true : config.data.singleTickerMode}
                tickerExcludeTexts={useDroneServiceTicker ? gazetaDroneServiceTickerExcludeTexts : config.data.tickerExcludeTexts}
                customTickerItems={useDroneServiceTicker ? undefined : config.data.tickerItems}
            />

            <L2DirectionHero
                hero={config.page.hero}
                heroSubtitle={config.data.heroSubtitle}
                heroSupportingLine={config.data.heroSupportingLine}
                heroDisplayTitle={config.data.heroDisplayTitle}
                heroDesktopDisplayTitle={config.data.heroDesktopDisplayTitle}
                heroDisplayAccentLine={config.data.heroDisplayAccentLine}
                heroMobileCompact={config.data.heroMobileCompact}
                heroLongHubLayout={config.data.heroLongHubLayout}
                services={config.data.services}
                heroCards={config.data.heroCards}
                leadParagraphs={config.data.heroLeadParagraphs}
                primaryCtaLabel={config.data.heroPrimaryCtaLabel}
                primaryCtaHref={config.data.heroPrimaryCtaHref}
                secondaryCtaLabel={config.data.heroSecondaryCtaLabel}
                secondaryCtaHref={config.data.heroSecondaryCtaHref}
            />
            {enableParityLayer ? <L2DirectionMobileServicesList services={config.data.services} lang={initialLang} /> : null}
            {(
                config.data.sectionOrder ?? [
                    'whatIsTour',
                    'signalStrip',
                    'services',
                    'trust',
                    'map',
                    'painProof',
                    'painSolutions',
                    'midCta',
                    'deliverables',
                    'pricing',
                    'pricingAddOns',
                    'socialProof',
                    'process',
                    'conditionsNote',
                    'whyUs',
                    'shortQa',
                    'faq',
                    'relatedLinks',
                    'contact',
                ]
            ).map((sectionKey) => {
                switch (sectionKey) {
                    case 'marquee':
                        return <L2DirectionMarquee key={sectionKey} items={config.data.marqueeItems} />;
                    case 'whatIsTour':
                        return config.data.whatIsTour ? <L2DirectionWhatIsTour key={sectionKey} content={config.data.whatIsTour} /> : null;
                    case 'signalStrip':
                        return config.data.signalStrip?.length ? <L2DirectionSignalStrip key={sectionKey} items={config.data.signalStrip} /> : null;
                    case 'services':
                        return (
                            <L2DirectionServices
                                key={sectionKey}
                                heading={config.data.servicesHeading}
                                subtitle={config.data.servicesSubtitle}
                                services={config.data.services}
                                layoutPreset={servicesLayoutPreset}
                            />
                        );
                    case 'painSolutions':
                        return config.data.painSolutions?.items.length ? (
                            <L2DirectionPainSolutions
                                key={sectionKey}
                                heading={config.data.painSolutions.heading}
                                subtitle={config.data.painSolutions.subtitle}
                                items={config.data.painSolutions.items}
                            />
                        ) : null;
                    case 'midCta':
                        return config.data.midCta ? <L2DirectionMidCta key={sectionKey} content={config.data.midCta} /> : null;
                    case 'deliverables':
                        return config.data.deliverables ? <L2DirectionDeliverables key={sectionKey} content={config.data.deliverables} /> : null;
                    case 'earnLose':
                        return config.data.earnLose ? <L2DirectionEarnLose key={sectionKey} content={config.data.earnLose} /> : null;
                    case 'pricing':
                        return (
                            <L2DirectionPricing
                                key={sectionKey}
                                heading={config.data.pricingHeading}
                                tagline={config.data.pricingTagline}
                                plans={config.data.pricingPlans}
                                lang={initialLang}
                            />
                        );
                    case 'pricingAddOns':
                        return config.data.pricingAddOns ? <L2DirectionPricingAddOns key={sectionKey} content={config.data.pricingAddOns} /> : null;
                    case 'socialProof':
                        return config.data.socialProofStats?.length || config.data.statsCards?.length ? (
                            <L2DirectionSocialProof
                                key={sectionKey}
                                stats={config.data.socialProofStats}
                                cards={config.data.statsCards}
                                heading={config.data.statsHeading}
                                tagline={config.data.statsTagline}
                            />
                        ) : null;
                    case 'trust':
                        return config.page.trust.heading && config.page.trust.badges.length ? (
                            <DebugWrapper key={sectionKey} id={10400} label="Trust Lite Section">
                                <DroneTrustLite trust={config.page.trust} />
                            </DebugWrapper>
                        ) : null;
                    case 'map':
                        return config.data.map ? <L2DirectionMap key={sectionKey} map={config.data.map} /> : null;
                    case 'painProof':
                        return config.data.painProofTitle && config.data.painProofSupportingLine && config.data.painProofCards?.length ? (
                            <L2DirectionPainProof
                                key={sectionKey}
                                title={config.data.painProofTitle}
                                supportingLine={config.data.painProofSupportingLine}
                                cards={config.data.painProofCards}
                            />
                        ) : null;
                    case 'process':
                        return <L2DirectionProcess key={sectionKey} heading={config.data.processHeading} steps={config.data.processSteps} />;
                    case 'conditionsNote':
                        return config.data.conditionsNote ? <L2DirectionConditionsNote key={sectionKey} content={config.data.conditionsNote} /> : null;
                    case 'whyUs':
                        return config.data.whyUs ? <L2DirectionWhyUs key={sectionKey} content={config.data.whyUs} /> : null;
                    case 'shortQa':
                        return config.data.shortQa ? <L2DirectionShortQa key={sectionKey} content={config.data.shortQa} /> : null;
                    case 'faq':
                        return <L2DirectionFaq key={sectionKey} heading={config.data.faqHeading} items={config.data.faqItems} />;
                    case 'relatedLinks':
                        return (
                            <DebugWrapper key={sectionKey} id={10850} label="Related Links Section">
                                <DroneRelatedLinksCompact
                                    links={config.page.relatedLinks}
                                    title={isEnglish ? 'Other Breus Media services' : undefined}
                                />
                            </DebugWrapper>
                        );
                    case 'contact':
                        return (
                            <L2DirectionContact
                                key={sectionKey}
                                contact={config.data.contact}
                                useDroneContact={config.data.useDroneContact}
                                lang={initialLang}
                            />
                        );
                    default:
                        return null;
                }
            })}

            <DebugWrapper id={11000} label="Footer Section">
                {isEnglish ? <DroneFooterStitchEn /> : <DroneFooterStitch />}
            </DebugWrapper>
            
        </main>
    );
};
