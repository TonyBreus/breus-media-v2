import { AboutSection } from "@/components/gazeta/AboutSection";
import { GazetaMinimalFooter } from "@/components/gazeta/GazetaMinimalFooter";
import { GazetaMobileStepChooser } from "@/components/gazeta/GazetaMobileStepChooser";
import { GazetaFaqSection } from "@/components/gazeta/GazetaFaqSection";
import { HeroSection } from "@/components/gazeta/HeroSection";
import { NichesStack } from "@/components/gazeta/NichesStack";
import { SmartHeader } from "@/components/gazeta/SmartHeader";
import LangSetter from "@/components/common/LangSetter";
import { DebugWrapper } from "@/components/debug/DebugWrapper";
import { DroneContactStitch } from "@/components/drone/DroneContactStitch";
import { multiStepDrawerDataByLang } from "@/components/gazeta/gazetaCatalogData";

type GazetaLandingLang = "ru" | "en";

const headerSectionLinks: Record<GazetaLandingLang, { label: string; href: string }[]> = {
    ru: [{ label: "FAQ", href: "#faq" }],
    en: [{ label: "FAQ", href: "#faq" }],
};

export function GazetaLandingPage({ lang = "ru" }: { lang?: GazetaLandingLang }) {
    const isEn = lang === "en";
    const sectionLinks = headerSectionLinks[lang];
    const catalogEntries = Object.entries(multiStepDrawerDataByLang[lang] ?? multiStepDrawerDataByLang.ru);

    return (
        <main className="relative w-full bg-black text-white min-h-[100vh] max-md:overflow-x-clip md:overflow-visible md:h-auto md:snap-none">
            <LangSetter lang={lang} />
            <SmartHeader
                isLanding
                showTickers={false}
                sectionLinks={sectionLinks}
                ctaHref="#contact"
                initialLang={isEn ? "EN" : "RU"}
                languageLinks={{ RU: "/gazeta", EN: "/gazeta/en" }}
            />
            <div className="flex flex-col md:overflow-visible">
                {/* Лист 1 (Hero) */}
                <div className="relative z-10">
                    <HeroSection lang={lang} />
                </div>

                {/* Лист 2 (Сетка 6×6: Услуги / Ваш бизнес) - Mobile only скролл-трек 140vh со sticky-фиксацией */}
                <div className="block md:hidden relative h-[140vh] z-20">
                    <section
                        id="niches"
                        className="sticky top-[60px] h-[calc(100dvh-60px)] min-h-[calc(100dvh-60px)] rounded-t-[26px] border-t border-white/15 bg-[#080808] shadow-[0_-16px_40px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-center px-4 py-3"
                    >
                        <GazetaMobileStepChooser lang={lang} />
                    </section>
                </div>

                {/* Desktop NichesStack 01-10 - Desktop only */}
                <div className="hidden md:block md:overflow-visible">
                    <NichesStack lang={lang} />
                </div>

                {/* Лист 3 (О нас / Манифест) - Mobile only скролл-трек 140vh со sticky-фиксацией */}
                <div className="block md:hidden relative h-[140vh] z-30">
                    <div className="sticky top-[60px] h-[calc(100dvh-60px)] min-h-[calc(100dvh-60px)] rounded-t-[26px] border-t border-white/15 bg-[#0A0A0A] shadow-[0_-16px_40px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-center px-4 py-4">
                        <AboutSection lang={lang} />
                    </div>
                </div>

                {/* Лист 3.5 (Частые вопросы FAQ) - Mobile only: свободный скролл аккордеона */}
                <div className="block md:hidden relative z-35 px-4 py-8 bg-[#080808] rounded-t-[26px] border-t border-white/15 shadow-[0_-16px_40px_rgba(0,0,0,0.9)]">
                    <GazetaFaqSection lang={lang} />
                </div>

                {/* Лист 4 (Форма связи + Футер) - Mobile only: свободный нативный скролл без блокировок */}
                <div
                    id="contact"
                    className="block md:hidden relative z-40 rounded-t-[26px] border-t border-white/15 bg-[#050505] shadow-[0_-16px_40px_rgba(0,0,0,0.9)] px-4 pt-6 pb-12 flex flex-col justify-between"
                >
                    <DroneContactStitch lang={lang} />
                    <GazetaMinimalFooter lang={lang} />
                </div>
            </div>

            {/* SSR Semantic Catalog for SearchGPT, Googlebot & AEO Crawlers */}
            <section
                aria-label={isEn ? "All Services and Formats of Breus Media Production Agency" : "Все услуги и форматы агентства Breus Media"}
                className="sr-only"
            >
                <h2>{isEn ? "Catalog of Visual Production Services in Georgia" : "Каталог услуг визуального продакшена в Грузии"}</h2>
                <p>
                    {isEn
                        ? "Breus Media provides drone filming, 360 virtual tours, Reels & promo video production, AI staging and high-speed B2B website development across Georgia (Tbilisi, Batumi, Kakheti, Kazbegi)."
                        : "Breus Media предоставляет услуги аэросъёмки дроном, виртуальные туры 360°, производство Reels и промо-видео, виртуальный AI-стейджинг и разработку B2B-сайтов на Next.js в Тбилиси, Батуми и по всей Грузии."}
                </p>
                {catalogEntries.map(([key, service]) => (
                    <article key={key}>
                        <h3>{service.title} — {service.category}</h3>
                        <p>{service.description}</p>
                        <p><strong>{isEn ? "Starting Price:" : "Начальная цена:"}</strong> {service.price}</p>
                        <ul>
                            {service.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </ul>
                        {service.l2Href && (
                            <p>
                                <a href={service.l2Href}>{service.l2Label || service.title}</a>
                            </p>
                        )}
                        <h4>{isEn ? "Available Formats & Packages:" : "Доступные форматы и пакеты:"}</h4>
                        <ul>
                            {service.formats.map((format, fIdx) => (
                                <li key={fIdx}>
                                    <a href={format.href}>{format.title}</a>: {format.desc} ({format.price})
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <DebugWrapper id={100} label="Main Content Container">
                <div className="hidden" />
            </DebugWrapper>
        </main>
    );
}
