import type { Metadata } from "next";
import { GazetaLandingPage } from "./GazetaLandingPage";
import {
    SITE_URL,
    BRAND_PHONE,
    BRAND_PHONE_RAW,
    buildLocalBusinessSchema,
    buildServiceSchema,
    buildFaqSchema,
    JsonLd,
} from "@/components/seo/JsonLd";

const gazetaTitle = "Видео, аэросъёмка, 360° туры и AI-контент в Грузии | Breus Media";
const gazetaDescription =
    "Breus Media — агентство визуального продакшена и AI-контента в Тбилиси и Батуми. Выберите нишу, откройте направление и перейдите к конкретной услуге для недвижимости, отелей, ресторанов, клиник, авто, туризма и IT.";

export const metadata: Metadata = {
    title: gazetaTitle,
    description: gazetaDescription,
    alternates: {
        canonical: `${SITE_URL}/gazeta`,
        languages: {
            ru: `${SITE_URL}/gazeta`,
            en: `${SITE_URL}/gazeta/en`,
            "x-default": `${SITE_URL}/gazeta`,
        },
    },
    openGraph: {
        title: gazetaTitle,
        description: gazetaDescription,
        url: `${SITE_URL}/gazeta`,
        siteName: "Breus Media",
        locale: "ru_GE",
        type: "website",
        images: [
            {
                url: `${SITE_URL}/media/gazeta/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Breus Media — визуальный продакшн и AI-контент в Тбилиси",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: gazetaTitle,
        description: gazetaDescription,
        images: [`${SITE_URL}/media/gazeta/og-image.jpg`],
    },
};

const gazetaLocalBusinessSchema = buildLocalBusinessSchema({
    lang: "ru",
    url: `${SITE_URL}/gazeta`,
});

const gazetaServiceSchema = buildServiceSchema({
    name: "Визуальный продакшн и AI-контент в Тбилиси и Грузии",
    description: gazetaDescription,
    url: `${SITE_URL}/gazeta`,
    lang: "ru",
    lowPrice: "250",
    offers: [
        {
            title: "Аэросъёмка 4K и FPV (Недвижимость, Стройка, Отели)",
            price: "250",
            description: "Профессиональная съёмка с дрона DJI Air 3S / Avata 2 в 4K HDR.",
        },
        {
            title: "360°-туры для отелей, недвижимости и бизнеса",
            price: "350",
            description: "Интерактивные виртуальные панорамы и интеграция в Google Maps.",
        },
        {
            title: "Reels & Промо-видео для бизнеса",
            price: "250",
            description: "Динамичные вертикальные ролики под ключ для соцсетей.",
        },
        {
            title: "Комплексный медиа-пакет",
            price: "500",
            description: "Съёмка с воздуха + пролёт внутри объекта + фото высокого разрешения.",
        },
    ],
});

import { gazetaFaqItems } from "@/components/gazeta/gazetaCatalogData";

const gazetaFaqSchema = buildFaqSchema(
    gazetaFaqItems.ru.map((item) => ({
        question: item.q,
        answer: item.a,
    }))
);

export default function GazetaPage() {
    return (
        <>
            <JsonLd
                schemas={[
                    gazetaLocalBusinessSchema,
                    gazetaServiceSchema,
                    gazetaFaqSchema!,
                ]}
            />
            <GazetaLandingPage lang="ru" />
        </>
    );
}

