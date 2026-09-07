import { NextRequest, NextResponse } from "next/server";
import { getDailyKanbanState, toggleTaskInReport } from "@/lib/kanban-engine";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date") || undefined;
    const state = await getDailyKanbanState(date);
    return NextResponse.json({ success: true, data: state });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, taskTitle, markAsDone, date } = body;

    if (action === "toggle") {
      const updated = await toggleTaskInReport(taskTitle, markAsDone, date);
      const newState = await getDailyKanbanState(date);
      return NextResponse.json({ success: updated, data: newState });
    }

    return NextResponse.json(
      { success: false, error: "Unsupported action" },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
