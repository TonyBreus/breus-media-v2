import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.businessService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для бизнеса в Тбилиси | Breus Media',
    description:
        'Видео, аэросъёмка, Reels, 360° туры и AI-визуал для бизнеса и коммерческих объектов в Тбилиси — полная digital-упаковка бренда для продаж и продвижения.',
    alternates: {
        canonical: 'https://breusmedia.com/business-service',
    },
};

export default function BusinessServicePage() {
    return <L2DirectionRenderer schemaKey="business-service" config={config} />;
}
