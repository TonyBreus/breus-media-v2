import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.aiVisualizationService;

export const metadata: Metadata = {
    title: 'AI-визуализация и контент для бизнеса в Тбилиси | Breus Media',
    description:
        'AI-рендеры, визуализация интерьеров и AI-контент для бизнеса в Тбилиси: недвижимость, авто, меню и бренды. Профессиональные изображения без фотографа.',
    alternates: {
        canonical: 'https://breusmedia.com/ai-visualization-service',
    },
};

export default function AiVisualizationServicePage() {
    return <L2DirectionRenderer schemaKey="ai-visualization-service" config={config} />;
}
