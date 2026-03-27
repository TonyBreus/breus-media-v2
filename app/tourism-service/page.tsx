import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.tourismService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для туризма в Грузии | Breus Media',
    description:
        'Видео, аэросъёмка и Reels для туристических маршрутов, туров и локаций в Грузии — контент для Viator, GetYourGuide, сайта и Instagram.',
    alternates: {
        canonical: 'https://breusmedia.com/tourism-service',
    },
};

export default function TourismServicePage() {
    return <L2DirectionRenderer schemaKey="tourism-service" config={config} />;
}
