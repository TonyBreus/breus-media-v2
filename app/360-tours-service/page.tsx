import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.tours360Service;

export const metadata: Metadata = {
    title: '360° виртуальные туры для бизнеса в Тбилиси | Breus Media',
    description:
        'Интерактивные 360° туры для отелей, ресторанов, клиник, автосалонов и офисов в Тбилиси. Показывайте объект удалённо и конвертируйте интерес в визит.',
    alternates: {
        canonical: 'https://breusmedia.com/360-tours-service',
    },
};

export default function Tours360ServicePage() {
    return <L2DirectionRenderer schemaKey="360-tours-service" config={config} />;
}
