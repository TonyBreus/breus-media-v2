import Link from "next/link";
import { notFound } from "next/navigation";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import { gazetaCategoryPagesBySlug } from "@/constants/gazetaRoutes";

type CategoryPageProps = {
    params: Promise<{
        slug: string;
    }>;
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

    return (
        <main className="min-h-screen bg-black text-white">
            <SmartHeader transparent={true} isLanding={false} />

            <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 md:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(212,175,55,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-black" />

                <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
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

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
            </section>
        </main>
    );
}
