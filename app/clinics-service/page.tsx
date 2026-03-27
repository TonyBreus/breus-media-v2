import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.clinicsService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для клиник в Тбилиси | Breus Media',
    description:
        'Имиджевые ролики, интерьерная съёмка и Reels для клиник, стоматологий и эстетических центров в Тбилиси. Контент для сайта, Google Maps и соцсетей.',
    alternates: {
        canonical: 'https://breus.media/clinics-service',
    },
};

export default function ClinicsServicePage() {
    return <L2DirectionRenderer schemaKey="clinics-service" config={config} />;
}
