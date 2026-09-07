import React from "react";
import KanbanDashboard from "@/components/kanban/KanbanDashboard";
import { getDailyKanbanState } from "@/lib/kanban-engine";

export const dynamic = "force-dynamic";

export default async function KanbanPage() {
  let initialState;
  try {
    initialState = await getDailyKanbanState();
  } catch (e) {
    console.error("SSR getDailyKanbanState error:", e);
  }

  return <KanbanDashboard initialState={initialState} />;
}
