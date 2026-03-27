import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.reelsService;

export const metadata: Metadata = {
    title: 'Reels и короткие видео для бизнеса в Тбилиси | Breus Media',
    description:
        'Профессиональные Reels и короткие видео для бизнеса в Тбилиси: отели, рестораны, клиники, авто и туризм. Пакеты для Instagram, TikTok и YouTube Shorts.',
    alternates: {
        canonical: 'https://breusmedia.com/reels-service',
    },
};

export default function ReelsServicePage() {
    return <L2DirectionRenderer schemaKey="reels-service" config={config} />;
}
