import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.restaurantsService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для ресторанов в Тбилиси | Breus Media',
    description:
        'Имиджевые ролики, съёмка блюд, аэросъёмка и Reels для ресторанов и кафе в Тбилиси. Полный пакет для Google Maps, Wolt, delivery и Instagram.',
    alternates: {
        canonical: 'https://breusmedia.com/restaurants-service',
    },
};

export default function RestaurantsServicePage() {
    return <L2DirectionRenderer schemaKey="restaurants-service" config={config} />;
}
