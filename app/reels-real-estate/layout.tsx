import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Reels для недвижимости в Тбилиси — входящие заявки для риелторов и ЖК | Breus Media',
    description:
        'Съёмка и монтаж Reels, TikTok и Shorts для риелторов, застройщиков и собственников в Тбилиси. Рум-туры, личный бренд агента, запуск ЖК. От 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/reels-real-estate',
    },
    openGraph: {
        title: 'Reels для недвижимости в Тбилиси | Breus Media',
        description:
            'Вертикальные ролики для Instagram, TikTok и MyHome.ge — охваты и конверсия в показы. От 250 ₾.',
        url: 'https://breus.media/reels-real-estate',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reels для недвижимости | Breus Media',
        description: 'Рум-туры, личный бренд агента, запуск ЖК. От 250 ₾.',
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    return children;
}
