"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Sparkles, CheckCircle2, User, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KanbanItem } from "@/types/kanban-events";

interface QuickEventModalProps {
  item: KanbanItem | null;
  onClose: () => void;
}

const CATEGORY_COLORS = {
  SRC: { bg: "bg-blue-500/20", border: "border-blue-500/40", text: "text-blue-400" },
  TSK: { bg: "bg-emerald-500/20", border: "border-emerald-500/40", text: "text-emerald-400" },
  REL: { bg: "bg-purple-500/20", border: "border-purple-500/40", text: "text-purple-400" },
};

const PRIORITY_BADGES = {
  CRITICAL: {
    bg: "bg-rose-500/20 border-rose-500/50 text-rose-400",
    dot: "bg-rose-500 animate-pulse",
    label: "Критично к внедрению",
  },
  HIGH: { bg: "bg-amber-500/20 border-amber-500/50 text-amber-400", dot: "bg-amber-500", label: "Высокий" },
  MEDIUM: { bg: "bg-sky-500/20 border-sky-500/50 text-sky-400", dot: "bg-sky-500", label: "Средний" },
  LOW: { bg: "bg-zinc-500/20 border-zinc-500/50 text-zinc-400", dot: "bg-zinc-500", label: "Низкий" },
};

export default function QuickEventModal({ item, onClose }: QuickEventModalProps) {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl bg-zinc-900/95 border border-zinc-700/60 rounded-2xl shadow-2xl p-6 overflow-hidden text-zinc-100 max-h-[90vh] flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {/* Category Badge */}
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${catStyle.bg} ${catStyle.border} ${catStyle.text}`}>
                #{item.id}
              </span>

              {/* Priority Badge */}
              <span className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border ${prioStyle.bg}`}>
                <span className={`w-2 h-2 rounded-full ${prioStyle.dot}`} />
                {prioStyle.label}
              </span>

              {/* Score Badge */}
              {item.score && (
                <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-800 border border-zinc-700 text-yellow-400">
                  <Flame className="w-3.5 h-3.5" />
                  {item.score}/10
                </span>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto space-y-5 py-4 pr-1">
            {/* Title & Author */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white leading-snug">
                {item.title}
              </h2>
              {item.author && (
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Автор/Источник: <strong className="text-zinc-300">{item.author}</strong></span>
                </div>
              )}
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-800/80 to-zinc-800/30 border border-zinc-700/60">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Суть и вердикт внедрения
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {item.verdict}
              </p>
            </div>

            {/* 5 Key Takeaways */}
            {item.takeaways && item.takeaways.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2.5">
                  Ключевые инсайты ({item.takeaways.length})
                </h3>
                <ul className="space-y-2">
                  {item.takeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 bg-zinc-800/40 p-2.5 rounded-lg border border-zinc-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-zinc-800 pt-4 mt-auto flex items-center justify-between gap-3">
            <span className="text-xs text-zinc-500">
              Статус: <strong className="text-zinc-400 capitalize">{item.status}</strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium rounded-lg text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                Закрыть
              </button>

              {item.doc_link && (
                <a
                  href={item.doc_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all"
                >
                  <span>Полный разбор в Google Docs</span>
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
