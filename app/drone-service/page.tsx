import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneHeroStitch } from '@/components/drone/DroneHeroStitch';
import { DroneServicesStitch } from '@/components/drone/DroneServicesStitch';
import { DroneStatsStrip } from '@/components/drone/DroneStatsStrip';
import { DroneTasksSection } from '@/components/drone/DroneTasksSection';
import { DroneWhyUsSection } from '@/components/drone/DroneWhyUsSection';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFlightConditionsNote } from '@/components/drone/DroneFlightConditionsNote';
import { DronePricingStitch } from '@/components/drone/DronePricingStitch';
import { DroneTechHub } from '@/components/drone/DroneTechHub';

import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { droneFaqItems } from '@/components/drone/droneFaqData';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { gazetaDroneServiceTickerExcludeTexts } from '@/constants/gazetaRoutes';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';

const pageConfig = droneDirectionPages.droneService;
const droneFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: droneFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};
const jsonLdSchemas = [
    ...buildDirectionJsonLd(
        pageConfig,
        droneServiceItems.map((service) => service.title)
    ),
    droneFaqJsonLd,
];

export const metadata: Metadata = {
    title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
    description:
        'Аэросъёмка дроном в Тбилиси и Грузии для бизнеса: недвижимость, стройка, отели, рестораны, туризм и события. 4K, FPV, выезды по всей стране. От 200 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-service',
        languages: {
            ru: 'https://breus.media/drone-service',
            en: 'https://breus.media/drone-service/en',
        },
    },
    openGraph: {
        title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
        description:
            'Аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм. 4K + FPV. От 200 ₾.',
        url: 'https://breus.media/drone-service',
        siteName: 'Breus Media',
        locale: 'ru_GE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
        description:
            'Аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм. 4K + FPV. От 200 ₾.',
    },
};

export default function DroneServicePage() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`drone-service-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'Услуги аэросъёмки дроном в Тбилиси',
                        description:
                            '17 направлений аэросъёмки для бизнеса в Тбилиси и Грузии — от недвижимости до инспекции объектов. От 200 ₾.',
                        url: 'https://breus.media/drone-service',
                        numberOfItems: 17,
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Недвижимость', url: 'https://breus.media/drone-real-estate' },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Мониторинг стройки',
                                url: 'https://breus.media/drone-construction-monitoring',
                            },
                            { '@type': 'ListItem', position: 3, name: 'FPV Съёмка', url: 'https://breus.media/drone-fpv-cinema' },
                            {
                                '@type': 'ListItem',
                                position: 4,
                                name: 'Отели и курорты',
                                url: 'https://breus.media/drone-hotels-tourism',
                            },
                            {
                                '@type': 'ListItem',
                                position: 5,
                                name: 'Рестораны',
                                url: 'https://breus.media/drone-services/drone-restaurants',
                            },
                            {
                                '@type': 'ListItem',
                                position: 6,
                                name: 'Туризм и локации',
                                url: 'https://breus.media/drone-services/drone-territory',
                            },
                            { '@type': 'ListItem', position: 7, name: 'Мероприятия', url: 'https://breus.media/drone-weddings-events' },
                            {
                                '@type': 'ListItem',
                                position: 8,
                                name: 'Инспекция объектов',
                                url: 'https://breus.media/drone-object-inspection',
                            },
                            {
                                '@type': 'ListItem',
                                position: 9,
                                name: 'Мониторинг территорий',
                                url: 'https://breus.media/drone-services/drone-territory',
                            },
                            {
                                '@type': 'ListItem',
                                position: 10,
                                name: 'Съёмка интерьеров и складов',
                                url: 'https://breus.media/drone-warehouses',
                            },
                            {
                                '@type': 'ListItem',
                                position: 11,
                                name: 'Спорт комплексы',
                                url: 'https://breus.media/drone-services/drone-sport',
                            },
                            {
                                '@type': 'ListItem',
                                position: 12,
                                name: 'Реклама и бренд видео',
                                url: 'https://breus.media/drone-services/drone-brand-video',
                            },
                            {
                                '@type': 'ListItem',
                                position: 13,
                                name: 'Автосалоны и шоурумы',
                                url: 'https://breus.media/drone-services/drone-auto',
                            },
                            {
                                '@type': 'ListItem',
                                position: 14,
                                name: 'Агро и виноделие',
                                url: 'https://breus.media/drone-services/drone-wine',
                            },
                            {
                                '@type': 'ListItem',
                                position: 15,
                                name: 'Земельные участки',
                                url: 'https://breus.media/drone-services/drone-land-sale',
                            },
                            {
                                '@type': 'ListItem',
                                position: 16,
                                name: 'Инспекция фасадов',
                                url: 'https://breus.media/drone-services/drone-facade',
                            },
                            {
                                '@type': 'ListItem',
                                position: 17,
                                name: 'Инспекция солнечных панелей',
                                url: 'https://breus.media/drone-services/drone-solar',
                            },
                            {
                                '@type': 'ListItem',
                                position: 18,
                                name: 'Регулярные аэроотчёты',
                                url: 'https://breus.media/drone-services/drone-reporting',
                            },
                        ],
                    }),
                }}
            />
            <DronePageScrollProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                initialLang="ru"
                languageLinks={{ ru: '/drone-service', en: '/drone-service/en' }}
                ctaHref="#contact"
                singleTickerMode={true}
                tickerExcludeTexts={gazetaDroneServiceTickerExcludeTexts}
                sectionLinks={[
                    { label: 'Услуги', href: '#services' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />
            <div id="drone-service-hero">
                <DebugWrapper id={10100} label="Hero Section">
                    <DroneHeroStitch hero={pageConfig.hero} />
                </DebugWrapper>
            </div>

            <DroneStatsStrip />

            <DebugWrapper id={10300} label="Services Section">
                <DroneServicesStitch />
            </DebugWrapper>

            {/* ── MID-PAGE CTA ───────────────────────────────────────────── */}
            <section className="bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Не нашли свою нишу? Расскажите задачу — подберём формат аэросъёмки под объект, локацию,
                            рекламу или отчёт.
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить задачу
                        </a>
                    </div>
                </div>
            </section>

            <div id="pricing">
                <DebugWrapper id={10700} label="Pricing Section">
                    <DronePricingStitch />
                </DebugWrapper>
            </div>

            <DroneTasksSection />
            <DroneWhyUsSection />

            <DebugWrapper id={10500} label="Process Section">
                <DroneProcessStitch />
            </DebugWrapper>
            <DebugWrapper id={10550} label="Flight Conditions Note">
                <DroneFlightConditionsNote />
            </DebugWrapper>
            <DebugWrapper id={10800} label="FAQ Section">
            <DebugWrapper id={10600} label="Tech Hub Section">
                <DroneTechHub />
            </DebugWrapper>

                <DroneFAQExpanded />
            </DebugWrapper>
            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={pageConfig.relatedLinks} />
            </DebugWrapper>
            <DebugWrapper id={10900} label="Contact Section">
                <DroneContactStitch />
            </DebugWrapper>
            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
            
        </main>
    );
}
