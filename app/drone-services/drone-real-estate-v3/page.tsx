import type { Metadata } from 'next';
import Image from 'next/image';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';
import {
    DroneRealEstateStatsV3,
    DroneRealEstatePortfolioV3,
    DroneRealEstatePricingV3,
    DroneRealEstateDeliverablesV3,
    DroneRealEstateProcessV3,
    DroneRealEstateFAQV3,
    DroneRealEstateRelatedV3,
} from '@/components/drone/real-estate-v3/DroneRealEstateBlocksV3';
import { DroneRealEstateNichesV3 } from '@/components/drone/real-estate-v3/DroneRealEstateNichesV3';

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости в Тбилиси — дрон для риелторов и застройщиков | Breus Media V3',
    description:
        '4K-видео и фото дроном для объявлений MyHome.ge, презентаций ЖК и дистанционных сделок с инвесторами. Тбилиси и Грузия. Пакеты от 250 ₾.',
    robots: { index: false, follow: false },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Сколько длится съёмка?', acceptedAnswer: { '@type': 'Answer', text: 'Базовый пакет — около 1,5 часов. Полная съёмка снаружи + внутри — 2–4 часа.' } },
        { '@type': 'Question', name: 'Можно снимать в центре Тбилиси?', acceptedAnswer: { '@type': 'Answer', text: 'В большинстве зон — да. Исторические кварталы требуют согласования. Проверяем до выезда.' } },
        { '@type': 'Question', name: 'Включён ли монтаж в базовый пакет?', acceptedAnswer: { '@type': 'Answer', text: 'В базовых пакетах монтаж не входит — получаете исходники 4K. Монтаж доступен как опция (+150 ₾) или в пакете «С готовым результатом».' } },
        { '@type': 'Question', name: 'Работаете за пределами Тбилиси?', acceptedAnswer: { '@type': 'Answer', text: 'Да — Кахетия, Мцхета, Казбеги, Гудаури, Батуми и другие регионы Грузии.' } },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка недвижимости дроном в Тбилиси',
    description: '4K-видео и фото дроном для риелторов, застройщиков и инвесторов в Грузии.',
    provider: { '@type': 'Organization', name: 'Breus Media', url: 'https://breus.media' },
    areaServed: { '@type': 'Country', name: 'Georgia' },
    offers: [
        { '@type': 'Offer', name: 'Полёт снаружи', price: '250', priceCurrency: 'GEL' },
        { '@type': 'Offer', name: 'Снаружи + внутри', price: '500', priceCurrency: 'GEL' },
        { '@type': 'Offer', name: 'С готовым результатом', price: '900', priceCurrency: 'GEL' },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://breus.media' },
        { '@type': 'ListItem', position: 2, name: 'Дрон-услуги', item: 'https://breus.media/drone-services' },
        { '@type': 'ListItem', position: 3, name: 'Аэросъёмка недвижимости', item: 'https://breus.media/drone-services/drone-real-estate' },
        { '@type': 'ListItem', position: 4, name: 'V3 A/B', item: 'https://breus.media/drone-services/drone-real-estate-v3' },
    ],
};

export default function DroneRealEstateV3Page() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            <SmartHeader
                initialLang="RU"
                isLanding={false}
                transparent
                ctaHref="#pricing"
                ctaLabel="Пакеты"
            />

            {/* ── HERO ──────────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-10 pt-28 md:pt-36">
                {/* Background subtle grid */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                <div className="container relative mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Навигация по сайту" className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
                        <a href="/drone-services" className="hover:text-white/70">Дрон-услуги</a>
                        <span>/</span>
                        <span className="text-white/70">Аэросъёмка недвижимости</span>
                    </nav>

                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#D4A017]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4A017]">
                            DJI Air 3S + Avata 2 · 4K · Тбилиси и Грузия
                        </p>

                        <h1 className="max-w-none text-3xl font-bold leading-[0.96] sm:text-4xl md:text-6xl lg:text-7xl">
                            Аэросъёмка<br />
                            <span className="text-[#D4A017]">недвижимости</span><br />
                            в Тбилиси
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                            Дронвидео для риелторов, застройщиков и инвесторов.
                            Тбилиси и вся Грузия. Сдача от 24 часов.
                        </p>

                        {/* Single primary CTA */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#pricing"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                            >
                                Смотреть пакеты ↓
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#D4A017]"
                            >
                                Обсудить съёмку
                            </a>
                        </div>

                        {/* Trust micro-bar */}
                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                            {['Сдача от 24 ч', 'Официальный договор', 'DJI 4K · FPV', 'GCAA-совместимые зоны'].map((t) => (
                                <span key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                                    <span className="text-[#D4A017]">✓</span>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hero image strip — using existing images */}
                    <div className="mt-8 flex gap-3 overflow-x-auto [scrollbar-width:none] md:mt-10 md:grid md:grid-cols-3 md:overflow-visible">
                        {[
                            { src: '/media/drone-service/real-estate-1.png', alt: 'Аэросъёмка недвижимости с дрона в Тбилиси' },
                            { src: '/media/drone-service/construction-monitoring-1.png', alt: 'Строящийся ЖК с воздуха' },
                            { src: '/media/drone-service/drone-facade-2.png', alt: 'Фасад здания, снятый дроном' },
                        ].map((img) => (
                            <div key={img.src} className="relative aspect-[4/3] w-[72vw] shrink-0 overflow-hidden rounded-[14px] bg-[#111] sm:w-[46vw] md:w-auto">
                                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 72vw, 33vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ──────────────────────────────────────────────────────────── */}
            <DroneRealEstateStatsV3 />

            {/* ── PORTFOLIO ─────────────────────────────────────────────────────── */}
            <DroneRealEstatePortfolioV3 />

            {/* ── КОМУ ПОДХОДИТ (tabs) ──────────────────────────────────────────── */}
            <DroneRealEstateNichesV3 />

            {/* ── ПАКЕТЫ ────────────────────────────────────────────────────────── */}
            <DroneRealEstatePricingV3 />

            {/* ── ЧТО ПОЛУЧАЕТЕ ─────────────────────────────────────────────────── */}
            <DroneRealEstateDeliverablesV3 />

            {/* ── ПРОЦЕСС ───────────────────────────────────────────────────────── */}
            <DroneRealEstateProcessV3 />

            {/* ── MID-CTA ───────────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#D4A017]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <div>
                            <p className="max-w-xl text-base font-bold text-white">Есть объект — обсудим съёмку</p>
                            <p className="mt-1 text-sm text-white/70">Скажите, что за объект и куда пойдёт материал. Предложим формат — расчёт в течение дня.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────────── */}
            <DroneRealEstateFAQV3 />

            {/* ── ДРУГИЕ ФОРМАТЫ ────────────────────────────────────────────────── */}
            <DroneRealEstateRelatedV3 />

            {/* ── КОНТАКТ ───────────────────────────────────────────────────────── */}
            <DroneContactStitch preselectedServices={['drone']} />

            <DroneFooterStitch />
            <DroneStickyCta />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
