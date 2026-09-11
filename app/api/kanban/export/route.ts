import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format") || "csv";
    const status = searchParams.get("status") || "all";
    const period = searchParams.get("period"); // e.g. '7d', '30d', 'all'

    let query = supabaseAdmin.from("kanban_events").select("*").order("created_at", { ascending: false });

    if (status !== "all") {
      query = query.eq("status", status);
    }

    if (period && period !== "all") {
      const days = parseInt(period) || 30;
      const since = new Date(Date.now() - days * 24 * 3600 * 1000).toISOString();
      query = query.gte("created_at", since);
    }

    const { data: items, error } = await query;

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    const rows = items || [];

    if (format === "json") {
      return NextResponse.json({
        success: true,
        count: rows.length,
        period: period || "all",
        status: status,
        data: rows,
      });
    }

    // CSV format
    const csvHeaders = ["ID", "Заголовок", "Категория", "Приоритет", "Скор", "Статус", "Вердикт", "Ключевые тезисы", "Ссылка на Google Docs", "Дата создания", "Дата обновления"];

    const escapeCsv = (str: string | null | undefined) => {
      if (str === null || str === undefined) return '""';
      const clean = String(str).replace(/"/g, '""');
      return `"${clean}"`;
    };

    const csvRows = rows.map((item) => {
      const takeawaysStr = Array.isArray(item.takeaways) ? item.takeaways.join(" | ") : "";
      return [
        escapeCsv(item.id),
        escapeCsv(item.title),
        escapeCsv(item.category),
        escapeCsv(item.priority),
        escapeCsv(item.score),
        escapeCsv(item.status),
        escapeCsv(item.verdict),
        escapeCsv(takeawaysStr),
        escapeCsv(item.doc_link),
        escapeCsv(item.created_at),
        escapeCsv(item.updated_at),
      ].join(",");
    });

    const csvContent = "\uFEFF" + [csvHeaders.join(","), ...csvRows].join("\r\n");

    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="breus-media-kanban-export-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err: any) {
    console.error("Export API error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
