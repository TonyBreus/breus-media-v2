import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.hotelsService;

export const metadata: Metadata = {
    title: 'Видеопродакшн для отелей в Тбилиси | Breus Media',
    description:
        'Видеотуры, аэросъёмка, 360° туры и Reels для отелей в Тбилиси и Грузии — контент для Booking, сайта и соцсетей, который увеличивает бронирования.',
    alternates: {
        canonical: 'https://breus.media/hotels-service',
    },
};

export default function HotelsServicePage() {
    return <L2DirectionRenderer schemaKey="hotels-service" config={config} />;
}
