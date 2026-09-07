import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#07080B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Антон 2.0 • Ритм Дня",
  description: "Автономный Канбан-дашборд и ритм дня Антона Бреуса к цели $100k/год",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Антон 2.0",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function KanbanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-[#07080B] text-zinc-100 selection:bg-cyan-500/30">
      {children}
    </div>
  );
}
