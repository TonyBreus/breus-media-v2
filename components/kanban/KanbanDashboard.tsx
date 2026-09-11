"use client";

import React, { useState, useEffect, useCallback } from "react";
import { KanbanItem, EventCategory } from "@/types/kanban-events";
import QuickEventModal from "@/components/kanban/QuickEventModal";
import { supabase } from "@/lib/supabase";
import {
  Flame,
  RefreshCw,
  Search,
  Sparkles,
  User,
  ExternalLink,
  Layers,
  Video,
  CheckSquare,
  Cpu,
} from "lucide-react";

const CATEGORY_TABS: { id: string; label: string; icon: any; color: string }[] = [
  { id: "ALL", label: "Все события", icon: Layers, color: "text-zinc-300" },
  { id: "SRC", label: "Видео & Источники (SRC)", icon: Video, color: "text-blue-400" },
  { id: "TSK", label: "Задачи (TSK)", icon: CheckSquare, color: "text-emerald-400" },
  { id: "REL", label: "Релизы (REL)", icon: Cpu, color: "text-purple-400" },
];

const CATEGORY_STYLES = {
  SRC: { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/30" },
  TSK: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30" },
  REL: { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/30" },
};

const PRIORITY_BADGES = {
  CRITICAL: {
    bg: "bg-rose-500/20 border-rose-500/50 text-rose-400",
    dot: "bg-rose-500 animate-pulse",
    label: "Критично",
  },
  HIGH: { bg: "bg-amber-500/20 border-amber-500/50 text-amber-400", dot: "bg-amber-500", label: "Высокий" },
  MEDIUM: { bg: "bg-sky-500/20 border-sky-500/50 text-sky-400", dot: "bg-sky-500", label: "Средний" },
  LOW: { bg: "bg-zinc-500/20 border-zinc-500/50 text-zinc-400", dot: "bg-zinc-500", label: "Низкий" },
};

export default function KanbanDashboard() {
  const [items, setItems] = useState<KanbanItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<KanbanItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [activeMobileCol, setActiveMobileCol] = useState<string>("in_progress");

  // Загрузка данных с сервера
  const fetchEvents = useCallback(async () => {
    try {
      setSyncing(true);
      const params = new URLSearchParams();
      if (activeCategory !== "ALL") params.append("category", activeCategory);
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const res = await fetch(`/api/kanban?${params.toString()}`);
      const json = await res.json();
      if (json.success && json.data) {
        setItems(json.data.items || []);
      }
    } catch (err) {
      console.error("Failed to load kanban events:", err);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Подписка на Supabase Realtime для живого обновления карточек
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) {
      return;
    }

    const channel = supabase
      .channel("realtime-kanban-events")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "kanban_events" },
        (payload) => {
          console.log("⚡️ Supabase Realtime Event:", payload);
          fetchEvents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchEvents]);

  // Фильтрация по поиску и категории
  const filteredItems = items.filter((item) => {
    const matchCategory = activeCategory === "ALL" || item.category === activeCategory;
    const matchSearch =
      !searchQuery.trim() ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Колонки
  const columnsDef = [
    {
      id: "backlog",
      title: "📥 Бэклог & Идеи",
      subtitle: "Входящие из чатов и пулов",
      items: filteredItems.filter((i) => i.status === "backlog"),
      badgeClass: "bg-zinc-800 text-zinc-300 border-zinc-700",
    },
    {
      id: "in_progress",
      title: "⏳ В работе (Deep Work)",
      subtitle: "Текущий операционный фокус",
      items: filteredItems.filter((i) => i.status === "in_progress"),
      badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    },
    {
      id: "done",
      title: "✅ Выполнено & Внедрено",
      subtitle: "Успешные результаты",
      items: filteredItems.filter((i) => i.status === "done"),
      badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "archived",
      title: "📦 Архив & Реестр",
      subtitle: "База знаний",
      items: filteredItems.filter((i) => i.status === "archived"),
      badgeClass: "bg-zinc-800/60 text-zinc-500 border-zinc-800",
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#07080B] text-zinc-100 antialiased pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,16px)]">
      {/* Header & Controls */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#07080B]/95 backdrop-blur-md px-4 py-3">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Breus Media • Headless Operations
                </span>
                <span className="rounded bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300">
                  Supabase Realtime
                </span>
              </div>
              <h1 className="mt-1 text-base font-bold tracking-tight text-white md:text-xl flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-yellow-400 inline flex-shrink-0" />
                <span>Операционный Канбан & База Событий</span>
              </h1>
            </div>

            <button
              onClick={fetchEvents}
              disabled={syncing}
              title="Обновить"
              className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/90 p-2 text-xs text-zinc-300 transition hover:border-zinc-700 active:scale-95 md:hidden"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-zinc-400 ${syncing ? "animate-spin text-cyan-400" : ""}`} />
            </button>
          </div>

          {/* Search Bar & Refresh */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Поиск по #ID, теме, автору..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 pl-8 pr-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition"
              />
            </div>

            <button
              onClick={fetchEvents}
              disabled={syncing}
              className="hidden md:flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-700 active:scale-95"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-zinc-400 ${syncing ? "animate-spin text-cyan-400" : ""}`} />
              <span>Обновить</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mx-auto flex max-w-[1600px] items-center gap-1.5 overflow-x-auto pt-2 text-xs no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-1.5 flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-zinc-800 text-white font-semibold border border-zinc-700 shadow"
                    : "bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 border border-zinc-900"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Column Tabs */}
        <div className="mt-2 flex md:hidden overflow-x-auto rounded-lg bg-zinc-900/80 p-1 border border-zinc-800 gap-1 no-scrollbar">
          {columnsDef.map((col) => (
            <button
              key={col.id}
              onClick={() => setActiveMobileCol(col.id)}
              className={`flex-1 min-w-[75px] rounded-md py-1 text-center text-xs font-medium transition flex items-center justify-center gap-1 ${
                activeMobileCol === col.id ? "bg-zinc-800 text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>{col.title.split(" ")[1]}</span>
              <span className="text-[10px] font-mono opacity-70">({col.items.length})</span>
            </button>
          ))}
        </div>
      </header>

      {/* Kanban Board Grid */}
      <main className="mx-auto flex-1 max-w-[1600px] p-3 md:p-4 w-full">
        {loading ? (
          <div className="flex h-64 items-center justify-center text-zinc-500 text-xs">
            Загрузка базы событий...
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {columnsDef.map((col) => (
                <KanbanColumn
                  key={col.id}
                  col={col}
                  onSelectCard={(item) => setSelectedItem(item)}
                />
              ))}
            </div>

            {/* Mobile Active Column */}
            <div className="block md:hidden">
              {columnsDef
                .filter((c) => c.id === activeMobileCol)
                .map((col) => (
                  <KanbanColumn
                    key={col.id}
                    col={col}
                    onSelectCard={(item) => setSelectedItem(item)}
                  />
                ))}
            </div>
          </>
        )}
      </main>

      {/* Quick Event Modal */}
      <QuickEventModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

function KanbanColumn({
  col,
  onSelectCard,
}: {
  col: any;
  onSelectCard: (item: KanbanItem) => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3 min-h-[480px]">
      <div className="mb-3 flex items-start justify-between border-b border-zinc-800/60 pb-2.5">
        <div>
          <h2 className="text-sm font-semibold text-zinc-200">{col.title}</h2>
          <p className="text-[11px] text-zinc-500">{col.subtitle}</p>
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-xs font-mono font-semibold ${col.badgeClass}`}>
          {col.items.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto">
        {col.items.length === 0 ? (
          <div className="flex h-36 items-center justify-center rounded-lg border border-dashed border-zinc-800/60 text-xs text-zinc-600">
            Нет событий
          </div>
        ) : (
          col.items.map((item: KanbanItem) => {
            const catStyle = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.TSK;
            const prioStyle = PRIORITY_BADGES[item.priority] || PRIORITY_BADGES.MEDIUM;

            return (
              <div
                key={item.id}
                onClick={() => onSelectCard(item)}
                className="group relative rounded-xl border border-zinc-800/90 bg-zinc-900/70 p-3.5 hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Header: ID, Priority, Score */}
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 text-[10px] font-bold font-mono rounded border ${catStyle.bg} ${catStyle.border} ${catStyle.text}`}>
                      #{item.id}
                    </span>

                    <span className={`flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium rounded border ${prioStyle.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${prioStyle.dot}`} />
                      {prioStyle.label}
                    </span>
                  </div>

                  {item.score && (
                    <span className="flex items-center gap-0.5 text-[10px] font-semibold text-yellow-400 font-mono">
                      <Flame className="w-3 h-3" />
                      {item.score}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xs font-semibold text-zinc-100 group-hover:text-white line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                {/* Author if available */}
                {item.author && (
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400 mt-1">
                    <User className="w-3 h-3 text-zinc-500" />
                    <span className="truncate">{item.author}</span>
                  </div>
                )}

                {/* Verdict summary */}
                <p className="text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed bg-zinc-950/40 p-2 rounded border border-zinc-800/50">
                  {item.verdict}
                </p>

                {/* Footer preview indicator */}
                <div className="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>
                    {item.takeaways && item.takeaways.length > 0 ? `🎯 ${item.takeaways.length} инсайтов` : "Без тезисов"}
                  </span>
                  {item.doc_link && (
                    <span className="flex items-center gap-1 text-blue-400 group-hover:underline">
                      Docs <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
