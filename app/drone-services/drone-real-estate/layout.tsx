import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости и ЖК в Тбилиси — дрон для риелторов и застройщиков | Breus Media',
    description:
        'Аэровидео и фото дроном для объявлений MyHome.ge, презентаций ЖК и дистанционных сделок с инвесторами. Тбилиси и Грузия. Пакеты от 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-real-estate',
    },
    openGraph: {
        title: 'Аэросъёмка недвижимости и ЖК в Тбилиси | Breus Media',
        description: 'Аэровидео и фото дроном для риелторов, застройщиков и инвесторов. Пакеты от 250 ₾.',
        url: 'https://breus.media/drone-services/drone-real-estate',
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function DroneRealEstateLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
