'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Manrope } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import type { DroneDirectionHeroConfig } from '@/constants/droneDirectionPages';

type DroneHeroStitchEnProps = {
    hero: DroneDirectionHeroConfig;
};

const ROTATION_MS = 10000;
const TYPEWRITER_INTERVAL_MS = 40;
const TYPEWRITER_NEWLINE_PAUSE_MS = 120;
const MOBILE_HERO_TYPEWRITER_TEXT = 'DRONE FILMING\nFOR REAL ESTATE\nFOR HOTELS\nFOR GEORGIA';
const manrope = Manrope({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });
const DESKTOP_HERO_PHRASES = [
    'From the ground you miss the key things: a restaurant terrace, construction scale, a roof defect.',
    'Properties with aerial video sell 68% faster (MLS / NAR).',
    'Drones shoot from above and fly inside spaces - FPV technology.',
    'One flight: content for ads, a report for investors, or documentation for insurance.',
];

const serviceCopyBySlug: Record<
    string,
    {
        title: string;
        category: string;
        description: string;
        price: string;
        primaryHref?: string;
    }
> = {
    nedvizhimost: {
        title: 'Real Estate',
        category: 'REALTORS · DEVELOPERS · SALES',
        description:
            'Aerial photos and video for listings and investor presentations. Listings with aerial photos get 94% more views according to HomeJab.',
        price: '4K · MYHOME.GE · SS.GE',
    },
    'monitoring-stroiki': {
        title: 'Construction Monitoring',
        category: 'DEVELOPERS · BANKS · CONTRACTORS',
        description:
            'Construction is moving - but what is really happening on site? Regular flyovers document progress and give investors a clear picture without site visits.',
        price: '4K · GPS · REPORTS',
    },
    'fpv-semka': {
        title: 'FPV Filming',
        category: 'WAREHOUSES · FACTORIES · LOGISTICS',
        description:
            'We show commercial space from the inside in one shot - from the entrance to the deepest zone. Tenants and investors understand the object before the meeting.',
        price: '4K · INDOOR · FLY-THROUGH',
    },
    'oteli-kurorty': {
        title: 'Hotels & Resorts',
        category: 'BOOKING · VIEWS · APART-HOTELS',
        description:
            'Guests book with their eyes. We film hotels, terraces and views so the Booking page works harder on its own.',
        price: '4K · ATMOSPHERE · PROMO',
    },
    restorany: {
        title: 'Restaurants',
        category: 'TERRACES · LOCATION · ATMOSPHERE',
        description:
            'A rooftop terrace, a green courtyard, the location within the district - all of that is visible from the air. Guests understand where they are going before they reserve a table.',
        price: '4K · REELS · STORIES',
        primaryHref: '/drone-services/drone-restaurants/en',
    },
    turizm: {
        title: 'Tourism & Locations',
        category: 'NATURE · ROUTES · GLAMPING',
        description:
            'Mountains, castles and canyons across Georgia - we film destinations from above for tour operators, hotels and personal brands.',
        price: '4K · EXCURSIONS · LANDSCAPES',
    },
    meropriyatiya: {
        title: 'Events',
        category: 'EVENTS · OPENINGS · WEDDINGS',
        description:
            'From the ground you see the crowd. From above you see scale, energy and the atmosphere of the event. Ready video can be delivered within 48 hours.',
        price: '4K · SPORTS · EVENTS',
    },
    'inspekciya-obektov': {
        title: 'Object Inspection',
        category: 'FACADES · ROOFS · INDUSTRIAL SITES',
        description:
            'If an object needs to be checked outside, above or in a hard-to-reach area, the drone documents every zone safely and without interrupting operations.',
        price: '4K · COMPLEXES · DOCUMENTATION',
    },
    'kontrol-territorii': {
        title: 'Territory Monitoring',
        category: 'LANDSCAPE · QUARRIES · PERIMETER',
        description:
            'Large sites are hard to control from the ground. Regular flyovers with GPS reference create a complete map of changes without another field visit.',
        price: 'GPS · REPORTS · WEEKLY',
    },
    'interiery-sklady': {
        title: 'Interiors & Warehouses',
        category: 'SHOWROOMS · RETAIL · TENANTS',
        description:
            'The drone flies through aisles, openings and workshops where a tripod camera cannot go. One take makes the whole space readable.',
        price: 'SHOWROOMS · LAYOUT · FPV',
    },
    'sport-kompleksy': {
        title: 'Sports Complexes',
        category: 'STADIUMS · ARENAS · TENNIS COURTS',
        description:
            'A sports venue only feels large from above. We film fields, stands and infrastructure for websites, investors and social media.',
        price: '4K · 60FPS · BROADCAST',
    },
    'reklama-brand-video': {
        title: 'Advertising & Brand Video',
        category: 'BRANDS · CORPORATE · PRODUCTS',
        description:
            'Aerial shots, a plan and editing in one project. Video that works in ads, on the website and across social platforms.',
        price: '4K · PROMO · EDITING',
    },
    'aerosyemka-dlya-avto-i-avtosalonov': {
        title: 'Car Dealerships & Showrooms',
        category: 'CAR LOTS · DEALERS · NETWORKS',
        description:
            'Buyers choose with their eyes. We show the full inventory, lot and dealership infrastructure in one fly-through.',
        price: '4K · SALES · DEMO',
    },
    'agro-i-vinodelie': {
        title: 'Agriculture & Winemaking',
        category: 'BRANDS · INVESTORS · PRODUCERS',
        description:
            'Georgian wine starts in the vineyard. We film vineyards and agricultural sites for crop monitoring, sales materials and brand promotion.',
        price: 'ANALYTICS · CONTROL · AGRI BUSINESS',
    },
    'zemelnye-uchastki': {
        title: 'Land Plots',
        category: 'DEVELOPERS · INVESTORS · LAND SALES',
        description:
            'Boundaries, terrain, surroundings and access - all shown in one flight. It sells faster than any text description.',
        price: 'VALUATION · SALES · PANORAMA',
    },
    'inspekciya-fasadov': {
        title: 'Facade Inspection',
        category: 'OPERATIONS · ENGINEERS · FACADES',
        description:
            'A full facade flyover with video - no scaffolding, no risk for staff and no need to stop work on site. Material is delivered to your specialists.',
        price: 'DIAGNOSTICS · JOINTS · DEFECTS',
    },
    'inspekciya-solnechnyh-paneley': {
        title: 'Solar Panel Inspection',
        category: 'ENERGY · OPERATORS · INVESTORS',
        description:
            'Dust and damage can reduce panel output by up to 30%. One video flyover gives your engineer a full picture without climbing onto the roof.',
        price: 'CONTROL · DIAGNOSTICS · EFFICIENCY',
    },
    'regulyarnye-aerootchety': {
        title: 'Regular Aerial Reports',
        category: 'BANKS · INVESTORS · MANAGEMENT',
        description:
            'Scheduled flyovers with GPS-based reports let investors and managers track site progress without visiting the object in person.',
        price: '4K · GPS · PROGRESS',
    },
};

export const DroneHeroStitchEn = ({ hero }: DroneHeroStitchEnProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedCharsCount, setTypedCharsCount] = useState(0);
    const [typewriterDone, setTypewriterDone] = useState(true);
    const [showMobileDescription, setShowMobileDescription] = useState(false);
    const [showMobileArrow, setShowMobileArrow] = useState(false);
    const [visibleDesktopPhrases, setVisibleDesktopPhrases] = useState(0);

    const serviceItemsEn = useMemo(
        () =>
            droneServiceItems.map((item) => {
                const translation = serviceCopyBySlug[item.slug];

                return {
                    ...item,
                    title: translation?.title ?? item.title,
                    category: translation?.category ?? item.category,
                    description: translation?.description ?? item.description,
                    price: translation?.price ?? item.price,
                    primaryHref: translation?.primaryHref ?? item.primaryHref,
                };
            }),
        []
    );

    useEffect(() => {
        if (serviceItemsEn.length <= 1) {
            return;
        }
        const rotationInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % serviceItemsEn.length);
        }, ROTATION_MS);
        return () => {
            clearInterval(rotationInterval);
        };
    }, [serviceItemsEn.length]);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        let nextIndex = 0;

        const typeNext = () => {
            if (nextIndex >= MOBILE_HERO_TYPEWRITER_TEXT.length) {
                setTypewriterDone(true);
                return;
            }

            const nextChar = MOBILE_HERO_TYPEWRITER_TEXT[nextIndex];
            nextIndex += 1;
            setTypedCharsCount(nextIndex);

            timeoutId = setTimeout(
                typeNext,
                nextChar === '\n' ? TYPEWRITER_NEWLINE_PAUSE_MS : TYPEWRITER_INTERVAL_MS
            );
        };

        timeoutId = setTimeout(typeNext, TYPEWRITER_INTERVAL_MS);

        return () => {
            if (timeoutId !== null) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    useEffect(() => {
        if (!typewriterDone) {
            return;
        }

        const descriptionTimer = setTimeout(() => setShowMobileDescription(true), 400);
        const arrowTimer = setTimeout(() => setShowMobileArrow(true), 1200);
        const desktopPhraseTimers = DESKTOP_HERO_PHRASES.map((_, index) =>
            setTimeout(() => setVisibleDesktopPhrases(index + 1), 400 + index * 260)
        );

        return () => {
            clearTimeout(descriptionTimer);
            clearTimeout(arrowTimer);
            desktopPhraseTimers.forEach((timer) => clearTimeout(timer));
        };
    }, [typewriterDone]);

    useEffect(() => {
        if (currentIndex < serviceItemsEn.length) {
            return;
        }
        setCurrentIndex(0);
    }, [currentIndex, serviceItemsEn.length]);

    const typedMobileLines = useMemo(
        () => MOBILE_HERO_TYPEWRITER_TEXT.slice(0, typedCharsCount).split('\n'),
        [typedCharsCount]
    );
    const miniCarouselCount = Math.min(4, serviceItemsEn.length);
    const miniCarouselIndices = useMemo(() => {
        if (serviceItemsEn.length <= miniCarouselCount) {
            return serviceItemsEn.map((_, index) => index);
        }
        const start = (currentIndex - 1 + serviceItemsEn.length) % serviceItemsEn.length;
        return Array.from({ length: miniCarouselCount }, (_, offset) => (start + offset) % serviceItemsEn.length);
    }, [currentIndex, miniCarouselCount, serviceItemsEn]);

    const activeService = serviceItemsEn[currentIndex] ?? serviceItemsEn[0];
    const activeServiceNumber = String(currentIndex + 1).padStart(2, '0');
    const serviceTotal = String(serviceItemsEn.length).padStart(2, '0');

    const READY_L3_URLS = [
        '/drone-hotels-tourism',
        '/drone-services/drone-restaurants',
        '/drone-services/drone-real-estate',
        '/360-tour-hotels',
        '/360-tour-real-estate',
        '/reels-real-estate',
        '/drone-hotels-tourism/en',
        '/drone-services/drone-restaurants/en',
        '/drone-services/drone-real-estate/en',
        '/360-tour-hotels/en',
        '/360-tour-real-estate/en',
        '/reels-real-estate/en'
    ];
    const showPrimaryCta = READY_L3_URLS.includes(activeService.primaryHref);

    const handleScrollToNextSection = () => {
        const nextSection = document.getElementById('services');
        if (!nextSection) {
            return;
        }

        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <DebugWrapper id={10100} label="Drone Hero Section EN">
            <section className="relative h-[calc(100vh-80px)] min-h-[620px] md:min-h-[680px] overflow-hidden bg-[#080808]">
                <h1 className="sr-only">Drone Filming Services in Tbilisi | Breus Media</h1>
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeService.slug}
                            src={activeService.image || hero.heroImage}
                            alt="Drone Filming Services in Tbilisi | Breus Media"
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 0.64, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: 'easeOut' }}
                            className="h-full w-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(212,160,23,0.22),transparent_56%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#040404]/82 via-[#070707]/52 to-[#070707]/90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/62 via-transparent to-[#070707]/58" />
                </div>

                <div className="container relative z-10 mx-auto h-full px-6">
                    <div className="flex h-full items-center justify-start pb-8 pt-20 md:pt-24">
                        <div className="w-full text-left">
                            <div className="hidden md:block">
                                <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] md:items-center md:gap-8 lg:gap-12 xl:gap-16 text-left">
                                    <div className="md:-ml-4 lg:-ml-8">
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.92] uppercase text-white min-h-[160px] lg:min-h-[200px]">
                                            <div>DRONE FILMING</div>
                                            <div>SERVICES</div>
                                            <div className="text-[#C9A84C]">IN GEORGIA</div>
                                        </h1>

                                        <div className="mt-4 flex flex-col gap-2">
                                            {DESKTOP_HERO_PHRASES.map((phrase, index) => (
                                                <motion.p
                                                    key={`desktop-phrase-${index}`}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{
                                                        opacity: visibleDesktopPhrases >= index + 1 ? 1 : 0,
                                                        y: visibleDesktopPhrases >= index + 1 ? 0 : 8,
                                                    }}
                                                    transition={{ duration: 0.32, ease: 'easeOut' }}
                                                    className={`${manrope.className} antialiased text-[14px] lg:text-[16px] font-normal leading-[1.65] text-white/[0.88]`}
                                                >
                                                    {phrase}
                                                </motion.p>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex flex-col gap-3">
                                            <a
                                                href="#contact"
                                                className="inline-flex w-fit items-center justify-center rounded-[12px] bg-[#D4A017] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-all hover:brightness-105"
                                            >
                                                Discuss Project
                                            </a>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex justify-end">
                                        <div className="relative w-full max-w-[480px] overflow-hidden rounded-[10px] border border-white/15 bg-[#090806]/72 shadow-[0_28px_80px_rgba(0,0,0,0.44)] backdrop-blur-xl">
                                            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4A017] to-transparent" />
                                            <div className="relative border-b border-white/10 px-6 pb-6 pt-6">
                                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,160,23,0.15),transparent_38%,rgba(255,255,255,0.06)_100%)]" />

                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeService.slug}
                                                        initial={{ opacity: 0, y: 12 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.38, ease: 'easeOut' }}
                                                        className="relative pt-7"
                                                    >
                                                        <span className="absolute right-0 top-0 tabular-nums text-[12px] font-semibold text-white/62">
                                                            {activeServiceNumber}/{serviceTotal}
                                                        </span>
                                                        <p className="max-w-[14ch] text-[42px] font-bold uppercase leading-[0.96] text-white">
                                                            {activeService.title}
                                                        </p>
                                                        <p className={`${manrope.className} mt-5 max-w-[36rem] antialiased text-[16px] font-normal leading-[1.65] text-white/[0.84]`}>
                                                            {activeService.description}
                                                        </p>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            <div className="px-4 pb-4 pt-4">
                                                <div className="grid gap-2 sm:grid-cols-2">
                                                    {showPrimaryCta ? (
                                                        <a
                                                            href={activeService.primaryHref}
                                                            className="group flex w-full items-center justify-between rounded-[8px] border border-[#D4A017] bg-[#D4A017] px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black transition-all hover:bg-white hover:border-white"
                                                        >
                                                            <span>Open service</span>
                                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                        </a>
                                                    ) : null}
                                                    <a
                                                        href="#contact"
                                                        className={`flex items-center justify-center rounded-[8px] border border-white/12 px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-white/28 hover:bg-white/[0.06] ${
                                                            showPrimaryCta ? '' : 'sm:col-span-2'
                                                        }`}
                                                    >
                                                        Discuss Project
                                                    </a>
                                                </div>

                                                <div className="mt-3 grid gap-2" role="tablist" aria-label="Drone filming directions">
                                                    {miniCarouselIndices.map((serviceIndex) => {
                                                        const item = serviceItemsEn[serviceIndex];
                                                        const isActive = serviceIndex === currentIndex;
                                                        const itemNumber = String(serviceIndex + 1).padStart(2, '0');
                                                        return (
                                                            <button
                                                                key={item.slug}
                                                                type="button"
                                                                onClick={() => setCurrentIndex(serviceIndex)}
                                                                role="tab"
                                                                aria-selected={isActive}
                                                                className={`group grid w-full grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[8px] border px-3 py-3 text-left transition-all ${
                                                                    isActive
                                                                        ? 'border-[#D4A017]/68 bg-[#D4A017]/15'
                                                                        : 'border-white/10 bg-white/[0.035] hover:border-white/24 hover:bg-white/[0.07]'
                                                                }`}
                                                            >
                                                                <span
                                                                    className={`tabular-nums text-[11px] font-semibold ${
                                                                        isActive ? 'text-[#D4A017]' : 'text-white/38'
                                                                    }`}
                                                                >
                                                                    {itemNumber}
                                                                </span>
                                                                <span
                                                                    className={`text-[13px] font-semibold leading-tight ${
                                                                        isActive ? 'text-white' : 'text-white/70'
                                                                    }`}
                                                                >
                                                                    {item.title}
                                                                </span>
                                                                <span
                                                                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                                                        isActive ? 'bg-[#D4A017]' : 'bg-white/24 group-hover:bg-white/45'
                                                                    }`}
                                                                />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block md:hidden px-1">
                                <div className="mx-auto max-w-[340px] text-left">
                                    <h1 className="text-[32px] sm:text-[36px] font-bold leading-[1.02] tracking-[0.04em] uppercase text-white">
                                        <div>DRONE FILMING</div>
                                        <div>SERVICES</div>
                                        <div className="text-[#C9A84C]">IN GEORGIA</div>
                                    </h1>

                                    <p className="mt-3 text-[13px] leading-relaxed text-white/85 font-normal">
                                        Filming on flagship DJI and FPV drones in Tbilisi and regions of Georgia. 4K video and photo for hotels, real estate, construction and restaurants. Ready materials from 24h, prices from 200 ₾.
                                    </p>

                                    <div className="mt-4 flex flex-col gap-2">
                                        <a
                                            href="https://wa.me/995501103183?text=Hello%2C%20I%20would%20like%20to%20discuss%20drone%20filming%20in%20Tbilisi."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#D4A017] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-[0_4px_20px_rgba(212,160,23,0.35)] transition-all active:scale-[0.98]"
                                        >
                                            Discuss Project in WhatsApp
                                        </a>
                                        <a
                                            href="#pricing"
                                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-[12px] border border-white/20 bg-white/5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:bg-white/10"
                                        >
                                            Rates from 200 ₾ ↓
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.button
                    type="button"
                    aria-label="Scroll to the next section"
                    onClick={handleScrollToNextSection}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-3 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center text-[18px] text-white/70 transition-colors hover:text-white md:flex"
                >
                    <span>↓</span>
                    <span className="mt-1 hidden text-[15px] tracking-[0.14em] text-white md:block">
                        17 directions
                    </span>
                    <span className="mt-0.5 hidden text-[14px] tracking-[0.1em] text-[#D4A017] md:block">
                        from 200 ₾ · Tbilisi · Batumi · Kutaisi
                    </span>
                </motion.button>
            </section>
        </DebugWrapper>
    );
};
