import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/gazeta/FloatingWhatsAppButton";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Breus Media — Визуальный продакшн и AI-решения | Тбилиси",
  description:
    "Breus Media — визуальный продакшн в Тбилиси. Аэросъёмка, 360° туры, Reels, промо-видео, AI-визуализация для бизнеса в Грузии.",
  metadataBase: new URL("https://breus.media"),
  openGraph: {
    type: "website",
    siteName: "Breus Media",
    locale: "ru_GE",
    url: "https://breus.media",
  },
  robots: {
    index: false,
    follow: false,
  },
  twitter: {
    card: "summary_large_image",
    site: "@breusmedia",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const rootOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://breus.media/#organization",
  name: "Breus Media",
  url: "https://breus.media",
  email: "hello@breus.media",
  telephone: "+995501103183",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Тбилиси",
    addressCountry: "GE",
  },
  sameAs: [
    "https://www.instagram.com/breusmedia",
    "https://www.facebook.com/breusmedia",
  ],
};

import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const lang = pathname.includes("/en") ? "en" : "ru";

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={inter.className}>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootOrganizationSchema),
          }}
        />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
