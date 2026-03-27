import Link from "next/link";
import { notFound } from "next/navigation";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { L2DirectionServices } from "@/components/l2-direction/L2DirectionSections";
import { gazetaCategoryPagesBySlug } from "@/constants/gazetaRoutes";
import { l2DirectionConfigs } from "@/constants/l2DirectionConfigs";
import type { L2ServiceItem } from "@/components/l2-direction/types";
import { realEstateServiceItems } from "@/components/real-estate-service/realEstateServicesData";

type CategoryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// Маппинг gazeta slug → ключ в l2DirectionConfigs
const slugToL2Config: Partial<Record<string, keyof typeof l2DirectionConfigs>> = {
    hotels: "hotelsService",
    restaurants: "restaurantsService",
    tourism: "tourismService",
    clinics: "clinicsService",
    auto: "autoService",
    it: "businessService",
    "custom-business": "businessService",
    "promo-video": "promoVideoService",
    "ai-content": "aiVisualizationService",
    reels: "reelsService",
    "360-tours": "tours360Service",
};

export async function generateMetadata({ params }: CategoryPageProps) {
    const { slug } = await params;
    const page = gazetaCategoryPagesBySlug[slug];

    if (!page) {
        return {};
    }

    return {
        title: `${page.eyebrow} - Breus Media`,
        description: page.subtitle,
    };
}

export default async function GazetaDirectionPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const page = gazetaCategoryPagesBySlug[slug];

    if (!page) {
        notFound();
    }

    // Берём услуги из l2DirectionConfigs если есть маппинг, иначе fallback на page.services
    let l2Services: L2ServiceItem[] = [];

    const realEstateServicesAsL2: L2ServiceItem[] = realEstateServiceItems
        .slice()
        .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id))
        .map((service) => ({
            id: service.id,
            order: service.order ?? service.id,
            slug: service.slug,
            title: service.title,
            category: service.category,
            description: service.description,
            price: service.price,
            image: service.image,
            primaryHref: service.primaryHref,
            primaryCtaLabel: service.primaryCtaLabel,
            featured: service.featured,
            tag: service.tag,
        }));

    const l2Key = slugToL2Config[slug];
    if (slug === "real-estate") {
        l2Services = realEstateServicesAsL2;
    } else if (l2Key) {
        const config = l2DirectionConfigs[l2Key];
        l2Services = config.data.services as L2ServiceItem[];
    } else {
        l2Services = (page.services ?? []).map((s, idx) => ({
            id: idx + 1,
            order: idx + 1,
            slug: s.title.toLowerCase().replace(/[^a-zа-я0-9]+/gi, "-"),
            title: s.title,
            category: s.price,
            description: "",
            price: s.price,
            image: s.image ?? "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=60",
            primaryHref: s.primaryHref,
        }));
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <SmartHeader transparent={true} isLanding={false} />

            <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(212,175,55,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-black" />

                <div className="relative z-10 mx-auto max-w-6xl">
                    {/* Hero */}
                    <div className="flex min-h-[50vh] flex-col justify-center">
                        <div className="max-w-4xl">
                            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
                                {page.eyebrow}
                            </p>
                            <h1 className="max-w-5xl text-4xl font-black uppercase tracking-tighter text-white md:text-6xl lg:text-7xl">
                                {page.title}
                            </h1>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/74 md:text-xl">
                                {page.subtitle}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {page.highlights.map((item) => (
                                <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">
                                        Направление
                                    </p>
                                    <p className="mt-4 text-lg font-bold leading-snug text-white">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* L2 Services grid */}
            {l2Services.length > 0 && (
                <>
                    <L2DirectionServices
                        heading={`Услуги — ${page.eyebrow}`}
                        services={l2Services}
                    />

                    {page.allServicesHref && (
                        <div className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
                            <Link
                                href={page.allServicesHref}
                                className="flex w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-4 text-xs font-black uppercase tracking-[0.24em] text-white transition-colors hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                            >
                                Все услуги →
                            </Link>
                        </div>
                    )}
                </>
            )}

            {/* Bottom buttons */}
            <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/gazeta"
                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-black transition-colors hover:bg-[#D4AF37]"
                    >
                        Назад к Gazeta
                    </Link>
                    <Link
                        href="/gazeta#contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                    >
                        Обсудить проект
                    </Link>
                </div>
            </div>
        </main>
    );
}
