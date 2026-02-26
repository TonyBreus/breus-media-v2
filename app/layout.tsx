import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Breus Media — Визуальный продакшн и AI-решения | Тбилиси",
  description: "Дрон-съёмка, 360° туры, Reels, Google Maps визуализация и AI-контент для бизнеса в Грузии и удаленно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
