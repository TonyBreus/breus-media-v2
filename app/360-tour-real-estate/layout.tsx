import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: '360° тур для недвижимости в Тбилиси — виртуальный показ квартиры и ЖК | Breus Media',
    description:
        '360° виртуальные туры для квартир, домов и ЖК в Тбилиси. Для объявлений MyHome.ge, SS.ge, сайтов агентств и дистанционных сделок с инвесторами. От 200 ₾.',
    alternates: {
        canonical: 'https://breus.media/360-tour-real-estate',
    },
    openGraph: {
        title: '360° тур для недвижимости | Breus Media',
        description: '360° туры для MyHome.ge, SS.ge, сайтов агентств и дистанционных сделок. От 200 ₾.',
        url: 'https://breus.media/360-tour-real-estate',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '360° тур для недвижимости | Breus Media',
        description: '360° туры для MyHome.ge, SS.ge и дистанционных сделок. От 200 ₾.',
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    return children;
}
