import type { Metadata } from 'next';
import { DroneBrandVideoPageClient } from './DroneBrandVideoPageClient';

const PAGE_TITLE = 'Бренд-видео и рекламная съёмка с дрона в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Бренд-видео и рекламные ролики с дрон-съёмкой для бизнеса в Тбилиси. Кинематографичная аэросъёмка + наземная съёмка под ключ. От 650 ₾. Доставка за 5 рабочих дней.';
const CANONICAL_URL = 'https://breus.media/drone-services/drone-brand-video';

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneBrandVideoPage() {
    return <DroneBrandVideoPageClient />;
}
