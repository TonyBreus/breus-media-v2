"use client";

import React, { useState, useEffect } from "react";
import { KanbanState, KanbanTask } from "@/lib/kanban-engine";
import {
  CheckCircle2,
  Circle,
  Flame,
  Inbox,
  Clock,
  CheckCheck,
  Eye,
  Calendar,
  Sparkles,
  Tag,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

interface KanbanDashboardProps {
  initialState?: KanbanState;
}

const TAG_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  "#B2B_BreusMedia": {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  "#YouTube_Медиа": {
    bg: "bg-rose-500/15",
    text: "text-rose-400",
    border: "border-rose-500/30",
  },
  "#Быт_Семья": {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  "#Тело_Биохакинг": {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
};

export default function KanbanDashboard({ initialState }: KanbanDashboardProps) {
  const [state, setState] = useState<KanbanState | undefined>(initialState);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(!initialState);
  const [syncing, setSyncing] = useState(false);

  const fetchState = async () => {
    try {
      setSyncing(true);
      const res = await fetch("/api/kanban");
      const json = await res.json();
      if (json.success) {
        setState(json.data);
      }
    } catch (err) {
      console.error("Failed to load kanban state:", err);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    if (!initialState) {
      fetchState();
    }
  }, [initialState]);

  const toggleTask = async (task: KanbanTask) => {
    if (!state) return;
    const newIsDone = !task.isDone;

    // Оптимистичное обновление UI
    const targetCol = task.status;
    const updatedColumns = { ...state.columns };

    // Удаляем из текущей колонки
    updatedColumns[targetCol] = updatedColumns[targetCol].filter(
      (t) => t.id !== task.id
    );

    // Добавляем в нужную колонку
    const updatedTask = { ...task, isDone: newIsDone };
    if (newIsDone) {
      updatedColumns.done = [
        ...updatedColumns.done,
        { ...updatedTask, status: "done" as const },
      ];
    } else {
      // Возвращаем в исходную секцию (focus или in_progress)
      const revertCol = task.section === "Фокус дня" ? "focus" : "in_progress";
      updatedColumns[revertCol] = [
        ...updatedColumns[revertCol],
        { ...updatedTask, status: revertCol as any },
      ];
    }

    const total =
      updatedColumns.focus.length +
      updatedColumns.in_progress.length +
      updatedColumns.review.length +
      updatedColumns.done.length;
    const completed = updatedColumns.done.length;

    setState({
      ...state,
      columns: updatedColumns,
      metrics: {
        total,
        completed,
        completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
      },
    });

    // Отправляем в локальный файл через API
    try {
      await fetch("/api/kanban", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "toggle",
          taskTitle: task.title,
          markAsDone: newIsDone,
          date: state.date,
        }),
      });
    } catch (e) {
      console.error("Sync error, refetching:", e);
      fetchState();
    }
  };

  if (loading || !state) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#090A0F] text-zinc-400">
        <RefreshCw className="h-6 w-6 animate-spin text-cyan-400" />
        <span className="ml-3 text-sm">Загрузка дневного дашборда...</span>
      </div>
    );
  }

  const filterTasks = (tasks: KanbanTask[]) => {
    if (!activeTag) return tasks;
    return tasks.filter((t) => t.tags.includes(activeTag));
  };

  const columnsDef = [
    {
      id: "inbox",
      title: "📥 Inbox / Буфер",
      subtitle: "Сырые мысли и идеи",
      badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tasks: filterTasks(state.columns.inbox),
    },
    {
      id: "focus",
      title: "🎯 Фокус дня",
      subtitle: "Рычаг к цели $100k",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      tasks: filterTasks(state.columns.focus),
    },
    {
      id: "in_progress",
      title: "⏳ В работе",
      subtitle: "Пульс дня (Deep Work)",
      badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      tasks: filterTasks(state.columns.in_progress),
    },
    {
      id: "review",
      title: "🔍 Ревью",
      subtitle: "Проверка качества",
      badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      tasks: filterTasks(state.columns.review),
    },
    {
      id: "done",
      title: "✅ Маленькие победы",
      subtitle: "Фиксация прогресса",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      tasks: filterTasks(state.columns.done),
    },
  ];

  return (
    <div className="min-h-screen bg-[#07080B] text-zinc-100 antialiased">
      {/* Верхний статус-бар */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#07080B]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Антон 2.0 • Ритм Дня & Local SSOT
              </span>
              <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-[11px] font-mono text-zinc-300">
                {state.date}
              </span>
            </div>
            <h1 className="mt-1 text-xl font-bold tracking-tight text-white md:text-2xl flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-500 inline" />
              {state.focusTitle}
            </h1>
          </div>

          {/* Метрики и прогресс */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>Прогресс дня:</span>
                <span className="font-bold text-emerald-400">
                  {state.metrics.completed} / {state.metrics.total}
                </span>
                <span className="text-zinc-500">
                  ({state.metrics.completionRate}%)
                </span>
              </div>
              <div className="mt-1.5 h-2 w-36 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${state.metrics.completionRate}%` }}
                />
              </div>
            </div>

            <button
              onClick={fetchState}
              disabled={syncing}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-700 hover:text-white"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 text-zinc-400 ${
                  syncing ? "animate-spin text-cyan-400" : ""
                }`}
              />
              <span className="hidden sm:inline">Синхронизировать</span>
            </button>
          </div>
        </div>

        {/* Фильтр по тегам */}
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 overflow-x-auto px-4 pb-3 pt-1 text-xs no-scrollbar">
          <span className="flex items-center gap-1 text-zinc-500 mr-1 text-[11px] uppercase font-mono">
            <Tag className="h-3 w-3" /> Теги:
          </span>
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3 py-1 font-medium transition ${
              activeTag === null
                ? "bg-white text-zinc-950 font-bold"
                : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Все задачи
          </button>
          {Object.entries(TAG_STYLES).map(([tag, style]) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded-full border px-3 py-1 font-mono transition ${
                style.border
              } ${
                activeTag === tag
                  ? `${style.bg} ${style.text} font-bold ring-1 ring-white/20`
                  : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      {/* 5 Колонок Канбана */}
      <main className="mx-auto max-w-[1600px] p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {columnsDef.map((col) => (
            <div
              key={col.id}
              className="flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3"
            >
              {/* Шапка колонки */}
              <div className="mb-3 flex items-start justify-between border-b border-zinc-800/60 pb-2.5">
                <div>
                  <h2 className="text-sm font-semibold text-zinc-200">
                    {col.title}
                  </h2>
                  <p className="text-[11px] text-zinc-500">{col.subtitle}</p>
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 text-xs font-mono font-semibold ${col.badgeClass}`}
                >
                  {col.tasks.length}
                </span>
              </div>

              {/* Карточки задач */}
              <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
                {col.tasks.length === 0 ? (
                  <div className="flex h-28 items-center justify-center rounded-lg border border-dashed border-zinc-800/60 text-xs text-zinc-600">
                    Нет задач
                  </div>
                ) : (
                  col.tasks.map((task) => {
                    const isDone = task.isDone || col.id === "done";
                    return (
                      <div
                        key={task.id}
                        className={`group relative rounded-lg border p-3 transition-all duration-150 ${
                          isDone
                            ? "border-emerald-950/40 bg-emerald-950/10 text-zinc-400"
                            : "border-zinc-800/90 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-900"
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          {col.id !== "inbox" && (
                            <button
                              onClick={() => toggleTask(task)}
                              className="mt-0.5 flex-shrink-0 text-zinc-500 hover:text-emerald-400 transition"
                              title={
                                isDone ? "Вернуть в работу" : "Отметить выполненной"
                              }
                            >
                              {isDone ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Circle className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400" />
                              )}
                            </button>
                          )}

                          <div className="flex-1">
                            <p
                              className={`text-xs leading-relaxed ${
                                isDone
                                  ? "line-through text-zinc-500"
                                  : "text-zinc-200"
                              }`}
                            >
                              {task.title}
                            </p>

                            {/* Теги */}
                            {task.tags.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {task.tags.map((tag) => {
                                  const style =
                                    TAG_STYLES[tag] || {
                                      bg: "bg-zinc-800",
                                      text: "text-zinc-400",
                                      border: "border-zinc-700",
                                    };
                                  return (
                                    <span
                                      key={tag}
                                      className={`rounded border px-1.5 py-0.5 text-[10px] font-mono ${style.bg} ${style.text} ${style.border}`}
                                    >
                                      {tag}
                                    </span>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
