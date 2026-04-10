import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneHeroStitch } from '@/components/drone/DroneHeroStitch';
import { DroneServicesMobileList } from '@/components/drone/DroneServicesMobileList';
import { DroneServicesStitch } from '@/components/drone/DroneServicesStitch';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFlightConditionsNote } from '@/components/drone/DroneFlightConditionsNote';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneMapStitch } from '@/components/drone/DroneMapStitch';
import { DronePricingStitch } from '@/components/drone/DronePricingStitch';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DroneStickyCta } from '@/components/drone/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone/MobileBottomBar';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { buildDirectionJsonLd } from '@/lib/seo/directionSeo';

const pageConfig = droneDirectionPages.droneService;
const jsonLdSchemas = buildDirectionJsonLd(
    pageConfig,
    droneServiceItems.map((service) => service.title)
);

export const metadata: Metadata = {
    title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
    description:
        'Аэросъёмка дроном в Тбилиси и Грузии для бизнеса: недвижимость, стройка, отели, рестораны, туризм и события. 4K, FPV, выезды по всей стране. От 250 ₾.',
    alternates: {
        canonical: 'https://breus.media/drone-service',
    },
    openGraph: {
        title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
        description:
            'Аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм. 4K + FPV. От 250 ₾.',
        url: 'https://breus.media/drone-service',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Аэросъёмка дроном для бизнеса в Тбилиси | Breus Media',
        description:
            'Аэросъёмка дроном в Тбилиси и Грузии: недвижимость, стройка, отели, рестораны, туризм. 4K + FPV. От 250 ₾.',
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
            <DronePageScrollProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Услуги', href: '#services' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />
            <div className="pointer-events-none absolute left-0 right-0 top-[92px] z-[950]">
                <div className="container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="pointer-events-auto">
                        <ol className="flex items-center gap-2 text-xs tracking-wide text-white/55">
                            <li>
                                <Link href="/" className="transition-colors hover:text-white/80">
                                    Главная
                                </Link>
                            </li>
                            <li aria-hidden className="text-white/30">
                                →
                            </li>
                            <li aria-current="page" className="text-white/70">
                                Аэросъёмка
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div id="drone-service-hero">
                <DebugWrapper id={10100} label="Hero Section">
                    <DroneHeroStitch hero={pageConfig.hero} />
                </DebugWrapper>
            </div>

            <DroneServicesMobileList />

            {/* ── ВВОДНЫЙ ТЕКСТ + TRUST STRIP ───────────────────────────── */}
            <section className="hidden md:block border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <p className="text-lg leading-relaxed text-white/78">
                            Аэросъёмка показывает бизнес с ракурсов, которые невозможны с земли: масштаб здания, территорию,
                            подход и окружение. Снимаем в Тбилиси и по всей Грузии на DJI Air 3S (съёмка с высоты) и DJI
                            Avata 2 (пролёт камерой внутри помещений). Результат — видео в 4K и фото, готовые для сайта,
                            соцсетей, Google Maps и рекламы.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/55">
                            <span>DJI Air 3S + Avata 2</span>
                            <span className="text-white/25">·</span>
                            <span>4K</span>
                            <span className="text-white/25">·</span>
                            <span>Тбилиси · Батуми · Кутаиси</span>
                            <span className="text-white/25">·</span>
                            <span className="text-[#FFD23F]">от 250 ₾</span>
                        </div>
                    </div>
                </div>
            </section>

            <DebugWrapper id={10300} label="Services Section">
                <DroneServicesStitch />
            </DebugWrapper>

            {/* ── MID-PAGE CTA ───────────────────────────────────────────── */}
            <section className="bg-[#0D0D0D] py-12">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Не нашли свою нишу? Расскажите задачу — подберём формат и рассчитаем бюджет.
                        </p>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <DebugWrapper id={10700} label="Pricing Section">
                <DronePricingStitch />
            </DebugWrapper>
            <DebugWrapper id={10400} label="Trust Lite Section">
                <DroneTrustLite trust={pageConfig.trust} />
            </DebugWrapper>
            <DebugWrapper id={10500} label="Process Section">
                <DroneProcessStitch />
            </DebugWrapper>
            <DebugWrapper id={10550} label="Flight Conditions Note">
                <DroneFlightConditionsNote />
            </DebugWrapper>
            <DebugWrapper id={10600} label="Map Section">
                <DroneMapStitch />
            </DebugWrapper>
            <DebugWrapper id={10800} label="FAQ Section">
                <DroneFAQExpanded />
            </DebugWrapper>
            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={pageConfig.relatedLinks} />
            </DebugWrapper>
            <DebugWrapper id={10900} label="Contact Section">
                <DroneContactStitch />
            </DebugWrapper>
            <DroneStickyCta heroId="drone-service-hero" label="Обсудить съёмку" />
            <MobileBottomBar primaryLabel="Обсудить съёмку" />
            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}
