import Link from "next/link";
import { ArrowRight, Layout, Zap, Brain, PenTool, Layers, Star, Check } from "lucide-react";

export default function Home() {
  const variants = [
    { id: "v1", title: "Business-First", desc: "Ниши сверху, упор на индустрию.", icon: <Layout />, link: "/v1" },
    { id: "v2", title: "Cash-First", desc: "Быстрые услуги (Дрон/360) сразу.", icon: <Zap />, link: "/v2" },
    { id: "v3", title: "UX-Smart", desc: "Навигация-подсказка (Что вам нужно?).", icon: <Brain />, link: "/v3" },
    { id: "v4", title: "Deep Research", desc: "Позиционирование через стратегию.", icon: <Layers />, link: "/v4" },
    { id: "v5", title: "Minimal / Premium", desc: "Чистый стиль, минимум текста.", icon: <PenTool />, link: "/v5" },
    { id: "v6", title: "★ Merged v6 (FINAL)", desc: "Гибрид: Тикеры, Жирный хедер, Микс блоков.", icon: <Star className="text-brand" />, link: "/v6" },
    { id: "v7", title: "DigitalSilk v7", desc: "NEW: 3-Column Hero Scroll + Tickers.", icon: <PenTool />, link: "/v7" },
    { id: "v8", title: "★ Premium v8 (FINAL)", desc: "NEW Header + Central Tickers + Parallax.", icon: <Star className="text-brand fill-brand" />, link: "/v8" },
    { id: "v9", title: "Structure v9 (Multi-Page)", desc: "Полноценный сайт: /industries, /services, MegaMenu.", icon: <Layout />, link: "/v9" },
    { id: "v10", title: "Sticky Header v10", desc: "Только сложный хедер + медленные тикеры.", icon: <ArrowRight className="rotate-[-45deg]" />, link: "/v10" },
    { id: "v11", title: "★ Landing v11 (SUBWAY MODEL)", desc: "High-Conversion: 3-Line Logo + Double Marquee + Pricing.", icon: <Star className="text-yellow-400 fill-yellow-400" />, link: "/v11" },
    { id: "v12", title: "★ KINETIC v12 (MAGIC UI)", desc: "Interactive Hero, Reactive Background, Smooth Scroll.", icon: <Zap className="text-purple-500 fill-purple-500" />, link: "/v12" },
    { id: "v13", title: "★ v13 (REFINED HEAD)", desc: "v12 + Header Dropdowns + Updated Contact + New Text.", icon: <Star className="text-white fill-white" />, link: "/v13" },
    { id: "v14", title: "★ v14 (LAYOUT & CONTRAST)", desc: "High Contrast Tickers, Wet Asphalt BG, Refined Badge.", icon: <Zap className="text-blue-500 fill-blue-500" />, link: "/v14" },
    { id: "v15", title: "★ v15 (LEFT NAV)", desc: "Left-Aligned Navigation (Logo -> Menu -> Actions).", icon: <Star className="text-red-500 fill-red-500" />, link: "/v15" },
    { id: "v16", title: "★ v16 (SYMMETRY & UX)", desc: "Double Sticky Marquee, Perfect Symmetry, Hover Reveal.", icon: <Star className="text-cyan-400 fill-cyan-400" />, link: "/v16" },
    { id: "v17", title: "★ v17 (V11 REVERT +)", desc: "Back to v11 layout + Wide Header + Updates.", icon: <Zap className="text-purple-500 fill-purple-500" />, link: "/v17" },
    { id: "v18", title: "★ v18 (CINEMATIC)", desc: "Hover Reveal (Movie Mode) + Contact V2.", icon: <Zap className="text-pink-500 fill-pink-500" />, link: "/v18" },
    { id: "v19", title: "★ v19 (POLISHED)", desc: "Headline Update + Header Reorder.", icon: <Check className="text-emerald-500" />, link: "/v19" },
    { id: "v20", title: "★ v20 (UI REPAIRS)", desc: "Responsive Fixes + Restored Badge + Colors.", icon: <Check className="text-green-500" />, link: "/v20" },
    { id: "v21", title: "★ v21 (UI POLISH)", desc: "Hero Gradient Fix + Service Card Layout.", icon: <Star className="text-indigo-500 fill-indigo-500" />, link: "/v21" },
    { id: "v22", title: "★ v22 (REFINED)", desc: "Detailed Mobile Layout + Text + Ticker Updates.", icon: <Star className="text-blue-500 fill-blue-500" />, link: "/v22" },
    { id: "v23", title: "★ v23 (FINAL RELEASE)", desc: "Final Text & UI Polish for Launch.", icon: <Star className="text-purple-500 fill-purple-500" />, link: "/v23" },
  ];

  return (
    <main className="min-h-screen bg-dark text-white p-8 md:p-24 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Лаборатория Breus Media</h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Мы создали 5 версий лендинга для тестирования гипотез.
          Выберите вариант для просмотра.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((v) => (
            <Link key={v.id} href={v.link} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-brand hover:bg-white/10 transition-all flex flex-col justify-between">
              <div>
                <div className="p-4 bg-black rounded-xl w-fit mb-6 text-gray-400 group-hover:text-brand transition-colors">
                  {v.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-white">{v.title}</h2>
                <p className="text-sm text-gray-500 mb-6">{v.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-brand transition-colors">
                Открыть версию <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-gray-600 uppercase tracking-widest">
          A/B Testing Dashboard • v2.0
        </div>
      </div>
    </main>
  );
}
