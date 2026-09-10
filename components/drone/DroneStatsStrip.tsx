'use client';

import { StatsEvidenceStrip } from '@/components/shared/StatsEvidenceStrip';

const stats = [
    {
        value: '68%',
        description: 'быстрее продаются объекты с аэровидео',
        sourceLabel: 'MLS / NAR',
    },
    {
        value: '94%',
        description: 'больше просмотров у объявлений с аэрофото',
        sourceLabel: 'HomeJab, 2025',
    },
    {
        value: '403%',
        description: 'больше запросов при наличии видео vs только фото',
        sourceLabel: 'Inman / MLS',
    },
    {
        value: '73%',
        description: 'продавцов выбирают агента, который использует видео',
        sourceLabel: 'NAR',
    },
];

export const DroneStatsStrip = () => (
    <StatsEvidenceStrip heading="Аэросъёмка в цифрах" items={stats} />
);
