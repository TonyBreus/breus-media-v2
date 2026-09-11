"use client";

import React, { useEffect, useState } from "react";
import { X, ExternalLink, Sparkles, CheckCircle2, User, Flame, Copy, Check, ArrowRight, Clock, Box, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KanbanItem, KanbanStatus } from "@/types/kanban-events";

interface QuickEventModalProps {
  item: KanbanItem | null;
  onClose: () => void;
  onUpdateStatus?: (id: string, newStatus: KanbanStatus) => void;
}

const CATEGORY_COLORS = {
  SRC: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "shadow-[0_0_12px_rgba(6,182,212,0.2)]" },
  TSK: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", glow: "shadow-[0_0_12px_rgba(16,185,129,0.2)]" },
  REL: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", glow: "shadow-[0_0_12px_rgba(168,85,247,0.2)]" },
};

const PRIORITY_BADGES = {
  CRITICAL: {
    bg: "bg-rose-500/15 border-rose-500/40 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]",
    dot: "bg-rose-500 animate-pulse",
    label: "Критично к внедрению",
  },
  HIGH: { bg: "bg-amber-500/15 border-amber-500/40 text-amber-400", dot: "bg-amber-500", label: "Высокий приоритет" },
  MEDIUM: { bg: "bg-sky-500/15 border-sky-500/40 text-sky-400", dot: "bg-sky-500", label: "Средний приоритет" },
  LOW: { bg: "bg-zinc-500/15 border-zinc-500/40 text-zinc-400", dot: "bg-zinc-500", label: "Низкий приоритет" },
};

export default function QuickEventModal({ item, onClose, onUpdateStatus }: QuickEventModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const catStyle = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.TSK;
  const prioStyle = PRIORITY_BADGES[item.priority] || PRIORITY_BADGES.MEDIUM;

  const handleCopyTakeaways = () => {
    if (!item.takeaways || item.takeaways.length === 0) return;
    const text = `📌 [${item.id}] ${item.title}\n\n💡 Вердикт:\n${item.verdict}\n\n🎯 Ключевые тезисы:\n` +
      item.takeaways.map((t, idx) => `${idx + 1}. ${t}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop with 2026 blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#0C1017]/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-5 sm:p-6 overflow-hidden text-zinc-100 max-h-[90vh] flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-1 text-xs font-bold font-mono rounded-lg border ${catStyle.bg} ${catStyle.border} ${catStyle.text} ${catStyle.glow}`}>
                #{item.id}
              </span>

              <span className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border ${prioStyle.bg}`}>
                <span className={`w-2 h-2 rounded-full ${prioStyle.dot}`} />
                {prioStyle.label}
              </span>

              {item.score && (
                <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                  <Flame className="w-3.5 h-3.5" />
                  {item.score}/10
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto space-y-4 py-4 pr-1 scrollbar-thin scrollbar-thumb-zinc-800">
            {/* Title & Author */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                {item.title}
              </h2>
              {item.author && (
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Автор/Источник: <strong className="text-zinc-200">{item.author}</strong></span>
                </div>
              )}
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-800/40 via-zinc-800/20 to-transparent border border-white/8 backdrop-blur-sm">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Суть и вердикт внедрения</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                {item.verdict}
              </p>
            </div>

            {/* 5 Key Takeaways */}
            {item.takeaways && item.takeaways.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
                    Ключевые инсайты ({item.takeaways.length})
                  </h3>
                  <button
                    onClick={handleCopyTakeaways}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Скопировать</span>
                      </>
                    )}
                  </button>
                </div>

                <ul className="space-y-2">
                  {item.takeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 bg-zinc-900/50 p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Status Controls inside modal */}
            {onUpdateStatus && (
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                  Переместить задачу:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.status !== "backlog" && (
                    <button
                      onClick={() => onUpdateStatus(item.id, "backlog")}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                    >
                      <Box className="w-3.5 h-3.5 text-zinc-400" />
                      <span>В бэклог</span>
                    </button>
                  )}
                  {item.status !== "in_progress" && (
                    <button
                      onClick={() => onUpdateStatus(item.id, "in_progress")}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 transition"
                    >
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>В работу</span>
                    </button>
                  )}
                  {item.status !== "done" && (
                    <button
                      onClick={() => onUpdateStatus(item.id, "done")}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 transition"
                    >
                      <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Завершить (Готово)</span>
                    </button>
                  )}
                  {item.status !== "archived" && (
                    <button
                      onClick={() => onUpdateStatus(item.id, "archived")}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 transition"
                    >
                      <span>В архив</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between gap-3">
            <span className="text-xs text-zinc-500">
              Статус: <strong className="text-zinc-300 capitalize">{item.status}</strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium rounded-xl text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                Закрыть
              </button>

              {item.doc_link && (
                <a
                  href={item.doc_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>Google Docs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

