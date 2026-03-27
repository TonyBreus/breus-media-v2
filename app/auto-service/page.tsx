import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.autoService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для автобизнеса в Тбилиси | Breus Media',
    description:
        'Имиджевые ролики, обзоры авто, аэросъёмка и Reels для автосалонов, детейлинга и сервисов в Тбилиси. Контент для MyAuto, сайта и соцсетей.',
    alternates: {
        canonical: 'https://breusmedia.com/auto-service',
    },
};

export default function AutoServicePage() {
    return <L2DirectionRenderer schemaKey="auto-service" config={config} />;
}
