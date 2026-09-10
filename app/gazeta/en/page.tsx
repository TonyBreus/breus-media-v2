import type { Metadata } from "next";
import { GazetaLandingPage } from "../GazetaLandingPage";
import {
    SITE_URL,
    BRAND_PHONE,
    BRAND_PHONE_RAW,
    buildLocalBusinessSchema,
    buildServiceSchema,
    buildFaqSchema,
    JsonLd,
} from "@/components/seo/JsonLd";

const gazetaTitle = "Video, Drone Filming, 360° Tours and AI Content in Georgia | Breus Media";
const gazetaDescription =
    "Breus Media is a visual production and AI content agency in Tbilisi and Batumi. Choose an industry, open a direction and find the right service for real estate, hotels, restaurants, clinics, auto, tourism and tech.";

export const metadata: Metadata = {
    title: gazetaTitle,
    description: gazetaDescription,
    alternates: {
        canonical: `${SITE_URL}/gazeta/en`,
        languages: {
            ru: `${SITE_URL}/gazeta`,
            en: `${SITE_URL}/gazeta/en`,
            "x-default": `${SITE_URL}/gazeta`,
        },
    },
    openGraph: {
        title: gazetaTitle,
        description: gazetaDescription,
        url: `${SITE_URL}/gazeta/en`,
        siteName: "Breus Media",
        locale: "en_GE",
        type: "website",
        images: [
            {
                url: `${SITE_URL}/media/gazeta/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Breus Media — visual production and AI content in Tbilisi",
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
    lang: "en",
    url: `${SITE_URL}/gazeta/en`,
});

const gazetaServiceSchema = buildServiceSchema({
    name: "Visual Production & AI Content Agency in Tbilisi and Georgia",
    description: gazetaDescription,
    url: `${SITE_URL}/gazeta/en`,
    lang: "en",
    lowPrice: "250",
    offers: [
        {
            title: "4K Drone Filming & FPV (Real Estate, Construction, Hotels)",
            price: "250",
            description: "Professional DJI Air 3S / Avata 2 drone filming in 4K HDR.",
        },
        {
            title: "360° Virtual Tours for Hospitality & Business",
            price: "350",
            description: "Interactive virtual panoramas with Google Maps integration.",
        },
        {
            title: "Promo Video Production & Reels",
            price: "250",
            description: "Turnkey vertical and horizontal promotional video assets.",
        },
        {
            title: "Complete Visual Production Package",
            price: "500",
            description: "Aerial video + indoor FPV flythrough + high-resolution photos.",
        },
    ],
});

import { gazetaFaqItems } from "@/components/gazeta/gazetaCatalogData";

const gazetaFaqSchema = buildFaqSchema(
    gazetaFaqItems.en.map((item) => ({
        question: item.q,
        answer: item.a,
    }))
);

export default function GazetaEnglishPage() {
    return (
        <>
            <JsonLd
                schemas={[
                    gazetaLocalBusinessSchema,
                    gazetaServiceSchema,
                    gazetaFaqSchema!,
                ]}
            />
            <GazetaLandingPage lang="en" />
        </>
    );
}

