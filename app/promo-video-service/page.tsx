import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.promoVideoService;

export const metadata: Metadata = {
    title: 'Промо-видео для бизнеса в Тбилиси | Breus Media',
    description:
        'Имиджевые и промо-ролики для бизнеса в Тбилиси: врачи, отели, рестораны, автосалоны и ЖК. Готовый видеоконтент для сайта, рекламы и соцсетей.',
    alternates: {
        canonical: 'https://breus.media/promo-video-service',
    },
};

export default function PromoVideoServicePage() {
    return <L2DirectionRenderer schemaKey="promo-video-service" config={config} />;
}
