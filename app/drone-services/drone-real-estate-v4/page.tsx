import type { Metadata } from 'next';
import Image from 'next/image';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
import {
    DroneRealEstateTrustStripV4,
    DroneRealEstateComparisonV4,
    DroneRealEstatePortfolioV4,
    DroneRealEstatePricingV4,
    DroneRealEstateDeliverablesV4,
    DroneRealEstateProcessV4,
    DroneRealEstateFAQV4,
    DroneRealEstateMidCtaV4,
    DroneRealEstateRelatedV4,
} from '@/components/drone/real-estate-v4/DroneRealEstateBlocksV4';
import { DroneRealEstateNichesV4 } from '@/components/drone/real-estate-v4/DroneRealEstateNichesV4';
import { faqItems, packages } from '@/components/drone/real-estate-v4/DroneRealEstateDataV4';

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости в Тбилиси — дрон для риелторов и застройщиков | Breus Media V4',
    description:
        '4K-видео и фото дроном для объявлений MyHome.ge, презентаций ЖК и дистанционных сделок с инвесторами. Тбилиси и вся Грузия. Пакеты от 250 ₾.',
    robots: { index: false, follow: false },
};

// 100% parity between UI and JSON-LD schema (all 7 questions from data)
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка недвижимости дроном в Тбилиси',
    description: '4K-видео и фото дроном для риелторов, застройщиков и инвесторов в Грузии.',
    provider: { '@type': 'Organization', name: 'Breus Media', url: 'https://breus.media' },
    areaServed: { '@type': 'Country', name: 'Georgia' },
    offers: packages.map((p) => ({
        '@type': 'Offer',
        name: p.title,
        price: p.price.replace(/[^\d]/g, ''),
        priceCurrency: 'GEL',
    })),
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://breus.media' },
        { '@type': 'ListItem', position: 2, name: 'Дрон-услуги', item: 'https://breus.media/drone-services' },
        { '@type': 'ListItem', position: 3, name: 'Аэросъёмка недвижимости', item: 'https://breus.media/drone-services/drone-real-estate' },
        { '@type': 'ListItem', position: 4, name: 'V4 A/B', item: 'https://breus.media/drone-services/drone-real-estate-v4' },
    ],
};

export default function DroneRealEstateV4Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            <SmartHeader
                initialLang="RU"
                isLanding={false}
                transparent
                ctaHref="#pricing"
                ctaLabel="Пакеты"
            />

            {/* ── HERO SECTION WITH ID FOR STICKY CTA ──────────────────────────── */}
            <section
                id="drone-real-estate-hero"
                className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-12 pt-28 md:pt-36"
            >
                <div className="container relative mx-auto px-6">
                    {/* Breadcrumbs */}
                    <nav aria-label="Навигация по сайту" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
                        <a href="/drone-services" className="hover:text-white/80 transition-colors">Дрон-услуги</a>
                        <span>/</span>
                        <span className="text-white/80">Аэросъёмка недвижимости</span>
                    </nav>

                    <div className="max-w-3xl">
                        {/* Eyebrow */}
                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4A017]">
                            DJI Air 3S + Avata 2 · 4K 60FPS · Тбилиси и Грузия
                        </p>

                        <h1 className="max-w-none text-3xl font-bold leading-[0.96] sm:text-4xl md:text-6xl lg:text-7xl text-white">
                            Аэросъёмка<br />
                            <span className="text-[#D4A017]">недвижимости</span><br />
                            в Тбилиси
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                            4K-видео и фото с воздуха для риелторов, застройщиков ЖК и удалённых сделок с инвесторами.
                            Сдача готовых материалов от 24 часов.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#pricing"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all hover:bg-white hover:shadow-lg"
                            >
                                Смотреть пакеты ↓
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Обсудить объект
                            </a>
                        </div>

                        {/* Trust micro-bar */}
                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                            {['Сдача от 24 ч', 'Официальный B2B договор', 'DJI 4K · FPV внутри', 'GCAA-согласованные полёты'].map((t) => (
                                <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                                    <span className="text-[#D4A017] font-bold">✓</span>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hero photo preview strip */}
                    <div className="mt-10 flex gap-3 overflow-x-auto [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible">
                        {[
                            { src: '/media/drone-service/real-estate-1.png', alt: 'Аэросъёмка недвижимости с дрона в Тбилиси' },
                            { src: '/media/drone-service/construction-monitoring-1.png', alt: 'Строящийся ЖК с воздуха' },
                            { src: '/media/drone-service/drone-facade-2.png', alt: 'Фасад здания, снятый дроном' },
                        ].map((img) => (
                            <div key={img.src} className="relative aspect-[4/3] w-[74vw] shrink-0 overflow-hidden rounded-[14px] bg-[#111] sm:w-[46vw] md:w-auto border border-white/5">
                                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 74vw, 33vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 1. TRUST STRIP (4 facts) ─────────────────────────────────────── */}
            <DroneRealEstateTrustStripV4 />

            {/* ── 2. VISUAL COMPARISON (Ground vs Drone) ───────────────────────── */}
            <DroneRealEstateComparisonV4 />

            {/* ── 3. PORTFOLIO ─────────────────────────────────────────────────── */}
            <DroneRealEstatePortfolioV4 />

            {/* ── 4. NICHES (5 Scenarios with full SSR DOM) ────────────────────── */}
            <DroneRealEstateNichesV4 />

            {/* ── 5. PRICING PACKAGES (3 Clear Tariffs) ────────────────────────── */}
            <DroneRealEstatePricingV4 />

            {/* ── 6. DELIVERABLES & TECHNICAL PARAMETERS ───────────────────────── */}
            <DroneRealEstateDeliverablesV4 />

            {/* ── 7. PROCESS (4 Steps) ─────────────────────────────────────────── */}
            <DroneRealEstateProcessV4 />

            {/* ── 8. MID-CTA BANNER ────────────────────────────────────────────── */}
            <DroneRealEstateMidCtaV4 />

            {/* ── 9. INTERACTIVE FAQ (Native SSR <details>) ────────────────────── */}
            <DroneRealEstateFAQV4 />

            {/* ── 10. RELATED SERVICES ─────────────────────────────────────────── */}
            <DroneRealEstateRelatedV4 />

            {/* ── 11. CONTACT FORM WITH TARGET ID #contact ─────────────────────── */}
            <div id="contact" className="scroll-mt-20">
                <DroneContactStitch preselectedServices={['drone']} />
            </div>

            {/* ── 12. FOOTER & STICKY CTA ──────────────────────────────────────── */}
            <DroneFooterStitch />
            <DroneStickyCta />

            {/* JSON-LD Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
