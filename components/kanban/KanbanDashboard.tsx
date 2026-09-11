"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { KanbanItem, KanbanStatus, EventCategory } from "@/types/kanban-events";
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
  Download,
  Clock,
  CheckCircle2,
  Archive,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal,
  TrendingUp,
  AlertCircle
} from "lucide-react";

const CATEGORY_TABS: { id: string; label: string; icon: any; color: string }[] = [
  { id: "ALL", label: "Все карточки", icon: Layers, color: "text-zinc-300" },
  { id: "SRC", label: "Видео & Источники (SRC)", icon: Video, color: "text-cyan-400" },
  { id: "TSK", label: "Задачи (TSK)", icon: CheckSquare, color: "text-emerald-400" },
  { id: "REL", label: "Релизы (REL)", icon: Cpu, color: "text-purple-400" },
];

const CATEGORY_STYLES = {
  SRC: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30", glow: "shadow-[0_0_10px_rgba(6,182,212,0.15)]" },
  TSK: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", glow: "shadow-[0_0_10px_rgba(16,185,129,0.15)]" },
  REL: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", glow: "shadow-[0_0_10px_rgba(168,85,247,0.15)]" },
};

const PRIORITY_BADGES = {
  CRITICAL: {
    bg: "bg-rose-500/15 border-rose-500/40 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.2)]",
    dot: "bg-rose-500 animate-pulse",
    label: "Критично",
  },
  HIGH: { bg: "bg-amber-500/15 border-amber-500/40 text-amber-400", dot: "bg-amber-500", label: "Высокий" },
  MEDIUM: { bg: "bg-sky-500/15 border-sky-500/40 text-sky-400", dot: "bg-sky-500", label: "Средний" },
  LOW: { bg: "bg-zinc-500/15 border-zinc-500/40 text-zinc-400", dot: "bg-zinc-500", label: "Низкий" },
};

export default function KanbanDashboard() {
  const [items, setItems] = useState<KanbanItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<KanbanItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [activeMobileCol, setActiveMobileCol] = useState<string>("in_progress");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

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
          fetchEvents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchEvents]);

  // Быстрое переключение статуса карточки (Оптимистичный UI)
  const handleUpdateStatus = async (id: string, newStatus: KanbanStatus) => {
    setUpdatingId(id);

    // Оптимистичное обновление
    const previousItems = [...items];
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus, updated_at: new Date().toISOString() } : item))
    );

    if (selectedItem && selectedItem.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    try {
      const res = await fetch("/api/kanban", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (!data.success) {
        // Откат при ошибке
        setItems(previousItems);
      }
    } catch (err) {
      console.error("Failed to update status:", err);
      setItems(previousItems);
    } finally {
      setUpdatingId(null);
    }
  };

  // Метрики для верхней ленты
  const metrics = useMemo(() => {
    const total = items.length;
    const inProgress = items.filter((i) => i.status === "in_progress").length;
    const critical = items.filter((i) => i.priority === "CRITICAL" && i.status !== "done" && i.status !== "archived").length;
    const done = items.filter((i) => i.status === "done").length;
    return { total, inProgress, critical, done };
  }, [items]);

  // Фильтрация по поиску и категории
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = activeCategory === "ALL" || item.category === activeCategory;
      const matchSearch =
        !searchQuery.trim() ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.verdict && item.verdict.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, searchQuery]);

  // Колонки
  const columnsDef = [
    {
      id: "backlog",
      title: "📥 Бэклог & Идеи",
      subtitle: "Входящие из Spark и пулов",
      items: filteredItems.filter((i) => i.status === "backlog"),
      borderClass: "border-zinc-800/80 hover:border-zinc-700/80",
      countClass: "bg-zinc-800/80 text-zinc-300 border-zinc-700",
    },
    {
      id: "in_progress",
      title: "⏳ В работе (Deep Work)",
      subtitle: "Текущий операционный фокус",
      items: filteredItems.filter((i) => i.status === "in_progress"),
      borderClass: "border-blue-500/20 hover:border-blue-500/40",
      countClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    },
    {
      id: "done",
      title: "✅ Выполнено & Внедрено",
      subtitle: "Результаты и закрытые задачи",
      items: filteredItems.filter((i) => i.status === "done"),
      borderClass: "border-emerald-500/20 hover:border-emerald-500/40",
      countClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "archived",
      title: "📦 Архив & Реестр",
      subtitle: "История и аналитика",
      items: filteredItems.filter((i) => i.status === "archived"),
      borderClass: "border-zinc-800/60 hover:border-zinc-800",
      countClass: "bg-zinc-800/40 text-zinc-500 border-zinc-800",
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#07090E] text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,16px)]">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Header & Controls */}
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#07090E]/90 backdrop-blur-xl px-4 py-3 sm:py-3.5">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-3">
          {/* Upper Nav: Title, Status Indicator & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Breus Media • Operations Core
                </span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                  Realtime Active
                </span>
              </div>
              <h1 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-2xl flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-400 inline flex-shrink-0" />
                <span>Операционный Канбан & База Решений</span>
              </h1>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Export Button */}
              <a
                href="/api/kanban/export?format=csv"
                download
                title="Экспорт аналитики в CSV"
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs text-zinc-300 transition active:scale-95 shadow-sm"
              >
                <Download className="h-3.5 w-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Экспорт CSV</span>
              </a>

              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Поиск (#ID, автор, тема)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/60 pl-8 pr-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition backdrop-blur-sm"
                />
              </div>

              {/* Refresh Button */}
              <button
                onClick={fetchEvents}
                disabled={syncing}
                title="Синхронизировать с базой"
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-white/20 active:scale-95"
              >
                <RefreshCw className={`h-3.5 w-3.5 text-zinc-400 ${syncing ? "animate-spin text-cyan-400" : ""}`} />
                <span className="hidden sm:inline">Обновить</span>
              </button>
            </div>
          </div>

          {/* Executive Metrics Ribbon (2026 Style) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <div className="p-1.5 rounded-lg bg-zinc-800/60 text-zinc-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Всего карточек</div>
                <div className="text-sm font-bold text-white font-mono">{metrics.total}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 backdrop-blur-sm">
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-blue-300/70">В работе</div>
                <div className="text-sm font-bold text-blue-400 font-mono">{metrics.inProgress}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-rose-500/[0.04] border border-rose-500/20 backdrop-blur-sm">
              <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-rose-300/70">Критичный фокус</div>
                <div className="text-sm font-bold text-rose-400 font-mono">{metrics.critical}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 backdrop-blur-sm">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-300/70">Внедрено (Готово)</div>
                <div className="text-sm font-bold text-emerald-400 font-mono">{metrics.done}</div>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 text-xs no-scrollbar">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              const count = tab.id === "ALL" ? items.length : items.filter((i) => i.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-1.5 flex-shrink-0 rounded-xl px-3 py-1.5 text-xs font-medium transition active:scale-95 ${
                    isActive
                      ? "bg-white/10 text-white font-semibold border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      : "bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.05] hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${tab.color}`} />
                  <span>{tab.label}</span>
                  <span className="text-[10px] font-mono opacity-60 ml-0.5">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Column Switcher */}
          <div className="flex md:hidden overflow-x-auto rounded-xl bg-zinc-900/80 p-1 border border-white/5 gap-1 no-scrollbar">
            {columnsDef.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveMobileCol(col.id)}
                className={`flex-1 min-w-[75px] rounded-lg py-1.5 text-center text-xs font-medium transition flex items-center justify-center gap-1 ${
                  activeMobileCol === col.id ? "bg-white/10 text-white font-semibold border border-white/10" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span>{col.title.split(" ")[1]}</span>
                <span className="text-[10px] font-mono opacity-70">({col.items.length})</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Kanban Board Grid */}
      <main className="mx-auto flex-1 max-w-[1680px] p-3 sm:p-5 w-full">
        {loading ? (
          <div className="flex h-72 items-center justify-center text-zinc-500 text-xs font-mono">
            <RefreshCw className="w-4 h-4 animate-spin text-cyan-400 mr-2" />
            Загрузка базы данных Supabase...
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {columnsDef.map((col) => (
                <KanbanColumn
                  key={col.id}
                  col={col}
                  updatingId={updatingId}
                  onSelectCard={(item) => setSelectedItem(item)}
                  onUpdateStatus={handleUpdateStatus}
                />
              ))}
            </div>

            {/* Mobile Column View */}
            <div className="block md:hidden">
              {columnsDef
                .filter((c) => c.id === activeMobileCol)
                .map((col) => (
                  <KanbanColumn
                    key={col.id}
                    col={col}
                    updatingId={updatingId}
                    onSelectCard={(item) => setSelectedItem(item)}
                    onUpdateStatus={handleUpdateStatus}
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
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}

function KanbanColumn({
  col,
  updatingId,
  onSelectCard,
  onUpdateStatus,
}: {
  col: any;
  updatingId: string | null;
  onSelectCard: (item: KanbanItem) => void;
  onUpdateStatus: (id: string, newStatus: KanbanStatus) => void;
}) {
  return (
    <div className={`flex flex-col rounded-2xl border ${col.borderClass} bg-zinc-950/40 backdrop-blur-xl p-3 sm:p-3.5 min-h-[540px] transition-colors`}>
      {/* Column Header */}
      <div className="mb-3.5 flex items-start justify-between border-b border-white/[0.06] pb-2.5">
        <div>
          <h2 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
            {col.title}
          </h2>
          <p className="text-[11px] text-zinc-500">{col.subtitle}</p>
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-xs font-mono font-bold ${col.countClass}`}>
          {col.items.length}
        </span>
      </div>

      {/* Cards List */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto pr-0.5">
        {col.items.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.06] text-xs text-zinc-600">
            <span>Нет карточек</span>
          </div>
        ) : (
          col.items.map((item: KanbanItem) => {
            const catStyle = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.TSK;
            const prioStyle = PRIORITY_BADGES[item.priority] || PRIORITY_BADGES.MEDIUM;
            const isUpdating = updatingId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectCard(item)}
                className={`group relative rounded-xl border border-white/[0.07] bg-zinc-900/60 backdrop-blur-lg p-3.5 hover:border-white/20 hover:bg-zinc-900/90 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 ${
                  item.priority === "CRITICAL" ? "hover:border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.06)]" : ""
                } ${isUpdating ? "opacity-60 pointer-events-none" : ""}`}
              >
                {/* Header: ID, Priority, Score */}
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 text-[10px] font-bold font-mono rounded-md border ${catStyle.bg} ${catStyle.border} ${catStyle.text} ${catStyle.glow}`}>
                      #{item.id}
                    </span>

                    <span className={`flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium rounded-md border ${prioStyle.bg}`}>
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
                <p className="text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed bg-black/30 p-2 rounded-lg border border-white/[0.04]">
                  {item.verdict}
                </p>

                {/* Takeaways count badge */}
                <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    {item.takeaways && item.takeaways.length > 0 ? (
                      <span className="text-zinc-400 font-mono">🎯 {item.takeaways.length} инсайтов</span>
                    ) : (
                      "Без тезисов"
                    )}
                  </span>
                  {item.doc_link && (
                    <span className="flex items-center gap-1 text-cyan-400 group-hover:underline">
                      Docs <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  )}
                </div>

                {/* 2026 Interactive Quick Action Buttons right on card */}
                <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.status === "backlog" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateStatus(item.id, "in_progress");
                      }}
                      className="flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-blue-300 text-[10px] font-medium transition active:scale-95"
                    >
                      <Clock className="w-2.5 h-2.5 text-blue-400" />
                      <span>В работу</span>
                    </button>
                  )}

                  {item.status === "in_progress" && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(item.id, "done");
                        }}
                        className="flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 text-emerald-300 text-[10px] font-medium transition active:scale-95"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        <span>Завершить</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(item.id, "backlog");
                        }}
                        title="Вернуть в бэклог"
                        className="flex items-center justify-center py-1 px-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 text-[10px] transition"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                      </button>
                    </>
                  )}

                  {item.status === "done" && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(item.id, "archived");
                        }}
                        className="flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[10px] font-medium transition active:scale-95"
                      >
                        <Archive className="w-2.5 h-2.5 text-zinc-400" />
                        <span>В архив</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStatus(item.id, "in_progress");
                        }}
                        title="Вернуть в работу"
                        className="flex items-center justify-center py-1 px-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 text-[10px] transition"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                      </button>
                    </>
                  )}

                  {item.status === "archived" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateStatus(item.id, "backlog");
                      }}
                      className="flex-1 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 text-[10px] font-medium transition active:scale-95"
                    >
                      <RotateCcw className="w-2.5 h-2.5 text-zinc-400" />
                      <span>Восстановить</span>
                    </button>
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

