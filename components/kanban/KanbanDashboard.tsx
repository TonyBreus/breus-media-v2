"use client";

import React, { useState, useEffect } from "react";
import { KanbanState, KanbanTask } from "@/lib/kanban-engine";
import {
  CheckCircle2,
  Circle,
  Flame,
  Clock,
  RefreshCw,
  Tag,
  Cloud,
  HardDrive,
  Sparkles,
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
  const [activeMobileCol, setActiveMobileCol] = useState<string>("focus");
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
      <div className="flex min-h-[100dvh] items-center justify-center bg-[#07080B] text-zinc-400">
        <RefreshCw className="h-6 w-6 animate-spin text-cyan-400" />
        <span className="ml-3 text-sm font-mono">Загрузка Антон 2.0...</span>
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
      shortTitle: "Inbox",
      title: "📥 Inbox / Буфер",
      subtitle: "Сырые мысли и идеи",
      badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      tasks: filterTasks(state.columns.inbox),
    },
    {
      id: "focus",
      shortTitle: "Фокус",
      title: "🎯 Фокус дня",
      subtitle: "Рычаг к цели $100k",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      tasks: filterTasks(state.columns.focus),
    },
    {
      id: "in_progress",
      shortTitle: "В работе",
      title: "⏳ В работе",
      subtitle: "Пульс дня (Deep Work)",
      badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      tasks: filterTasks(state.columns.in_progress),
    },
    {
      id: "review",
      shortTitle: "Ревью",
      title: "🔍 Ревью",
      subtitle: "Проверка качества",
      badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      tasks: filterTasks(state.columns.review),
    },
    {
      id: "done",
      shortTitle: "Победы",
      title: "✅ Маленькие победы",
      subtitle: "Фиксация прогресса",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      tasks: filterTasks(state.columns.done),
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#07080B] text-zinc-100 antialiased pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,16px)]">
      {/* Верхний статус-бар */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#07080B]/95 backdrop-blur-md px-4 py-3">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Антон 2.0 • Ритм Дня
                </span>
                <span className="rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                  {state.date}
                </span>
                {state.source === "github" ? (
                  <span className="inline-flex items-center gap-1 rounded bg-blue-950/60 border border-blue-800/40 px-1.5 py-0.5 text-[10px] font-mono text-blue-300">
                    <Cloud className="h-2.5 w-2.5" /> GitHub Sync
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300">
                    <HardDrive className="h-2.5 w-2.5" /> Local Mac
                  </span>
                )}
              </div>
              <h1 className="mt-1 text-base font-bold tracking-tight text-white md:text-xl flex items-center gap-1.5">
                <Flame className="h-4 w-4 text-amber-500 inline flex-shrink-0" />
                <span className="truncate max-w-[280px] sm:max-w-md md:max-w-xl">
                  {state.focusTitle}
                </span>
              </h1>
            </div>

            <button
              onClick={fetchState}
              disabled={syncing}
              className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/90 px-2.5 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-700 active:scale-95"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 text-zinc-400 ${
                  syncing ? "animate-spin text-cyan-400" : ""
                }`}
              />
            </button>
          </div>

          {/* Прогресс дня */}
          <div className="flex items-center justify-between gap-3 border-t border-zinc-800/50 pt-2 md:border-t-0 md:pt-0">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>Победы:</span>
              <span className="font-bold text-emerald-400">
                {state.metrics.completed} / {state.metrics.total}
              </span>
              <span className="text-zinc-500">
                ({state.metrics.completionRate}%)
              </span>
            </div>
            <div className="h-2 flex-1 md:w-36 overflow-hidden rounded-full bg-zinc-800 max-w-[160px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-amber-400 transition-all duration-300"
                style={{ width: `${state.metrics.completionRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Фильтр по тегам */}
        <div className="mx-auto flex max-w-[1600px] items-center gap-1.5 overflow-x-auto pt-2 text-xs no-scrollbar">
          <span className="flex items-center text-zinc-500 mr-1 text-[10px] uppercase font-mono flex-shrink-0">
            <Tag className="h-2.5 w-2.5 mr-0.5" /> Тег:
          </span>
          <button
            onClick={() => setActiveTag(null)}
            className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium transition ${
              activeTag === null
                ? "bg-white text-zinc-950 font-bold"
                : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Все ({state.metrics.total})
          </button>
          {Object.entries(TAG_STYLES).map(([tag, style]) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-mono transition ${
                style.border
              } ${
                activeTag === tag
                  ? `${style.bg} ${style.text} font-bold ring-1 ring-white/20`
                  : "bg-zinc-900/60 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Мобильный переключатель колонок (только на экранах < 768px) */}
        <div className="mt-2 flex md:hidden overflow-x-auto rounded-lg bg-zinc-900/80 p-1 border border-zinc-800 gap-1 no-scrollbar">
          {columnsDef.map((col) => (
            <button
              key={col.id}
              onClick={() => setActiveMobileCol(col.id)}
              className={`flex-1 min-w-[64px] rounded-md py-1 text-center text-xs font-medium transition flex items-center justify-center gap-1 ${
                activeMobileCol === col.id
                  ? "bg-zinc-800 text-white shadow font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <span>{col.shortTitle}</span>
              <span className="text-[10px] font-mono opacity-70">
                ({col.tasks.length})
              </span>
            </button>
          ))}
        </div>
      </header>

      {/* Основной контент */}
      <main className="mx-auto flex-1 max-w-[1600px] p-3 md:p-4 w-full">
        {/* Сетка для десктопа и планшетов */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {columnsDef.map((col) => (
            <ColumnBlock
              key={col.id}
              col={col}
              toggleTask={toggleTask}
            />
          ))}
        </div>

        {/* Активная колонка для мобильного экрана */}
        <div className="block md:hidden">
          {columnsDef
            .filter((c) => c.id === activeMobileCol)
            .map((col) => (
              <ColumnBlock
                key={col.id}
                col={col}
                toggleTask={toggleTask}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

function ColumnBlock({
  col,
  toggleTask,
}: {
  col: any;
  toggleTask: (t: KanbanTask) => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3 min-h-[360px]">
      <div className="mb-3 flex items-start justify-between border-b border-zinc-800/60 pb-2.5">
        <div>
          <h2 className="text-sm font-semibold text-zinc-200">{col.title}</h2>
          <p className="text-[11px] text-zinc-500">{col.subtitle}</p>
        </div>
        <span
          className={`rounded-full border px-2 py-0.5 text-xs font-mono font-semibold ${col.badgeClass}`}
        >
          {col.tasks.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {col.tasks.length === 0 ? (
          <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-zinc-800/60 text-xs text-zinc-600">
            Нет задач
          </div>
        ) : (
          col.tasks.map((task: KanbanTask) => {
            const isDone = task.isDone || col.id === "done";
            return (
              <div
                key={task.id}
                className={`group relative rounded-lg border p-3 transition-all duration-150 active:scale-[0.99] ${
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

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs leading-relaxed break-words ${
                        isDone
                          ? "line-through text-zinc-500"
                          : "text-zinc-200 font-medium"
                      }`}
                    >
                      {task.title}
                    </p>

                    {task.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
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
                              className={`rounded border px-1.5 py-0.2 text-[9px] font-mono ${style.bg} ${style.text} ${style.border}`}
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
  );
}
