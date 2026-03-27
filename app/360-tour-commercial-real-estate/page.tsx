import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-commercial-real-estate/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-commercial-real-estate/TourStickyCta';

// 360 Tour Components
import { TourHero } from '@/components/360-tour-commercial-real-estate/TourHero';
import { TourWhatIs } from '@/components/360-tour-commercial-real-estate/TourWhatIs';
import { TourExperience } from '@/components/360-tour-commercial-real-estate/TourExperience';
import { TourSocialProof } from '@/components/360-tour-commercial-real-estate/TourSocialProof';
import { TourPain } from '@/components/360-tour-commercial-real-estate/TourPain';
import { TourBenefits } from '@/components/360-tour-commercial-real-estate/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-commercial-real-estate/TourDeliverables';
import { TourAudience } from '@/components/360-tour-commercial-real-estate/TourAudience';
import { TourUseCases } from '@/components/360-tour-commercial-real-estate/TourUseCases';
import { TourProcess } from '@/components/360-tour-commercial-real-estate/TourProcess';
import { TourPortfolio } from '@/components/360-tour-commercial-real-estate/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-commercial-real-estate/TourEvidence';
import { TourBeginnerFAQ } from '@/components/360-tour-commercial-real-estate/TourBeginnerFAQ';
import { TourPricing } from '@/components/360-tour-commercial-real-estate/TourPricing';
import { TourFAQ } from '@/components/360-tour-commercial-real-estate/TourFAQ';
import { TourWhyUs } from '@/components/360-tour-commercial-real-estate/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-commercial-real-estate/TourRelatedServices';
import { TourContact } from '@/components/360-tour-commercial-real-estate/TourContact';

export const metadata: Metadata = {
    title: '360° тур для коммерческой недвижимости | Breus Media',
    description:
        'Интерактивные 360° туры для коммерческих объектов: офисы, торговые помещения и бизнес-пространства для удалённого предварительного просмотра.',
    alternates: {
        canonical: 'https://breusmedia.com/360-tour-commercial-real-estate',
    },
};

export default function TourCommercialRealEstatePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <TourBeginnerFAQ />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <TourFAQ />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}
