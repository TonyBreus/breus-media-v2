import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Валидация минимального контракта
    if (!body.id || !body.title || !body.verdict) {
      return NextResponse.json(
        { success: false, error: "Обязательные поля: id, title, verdict" },
        { status: 400 }
      );
    }

    // 2. Стандартизация ID и категории (например 'src-128' -> 'SRC-128')
    const formattedId = String(body.id).toUpperCase().trim();
    const category = (body.category || formattedId.split("-")[0] || "TSK") as string;
    const cleanCategory = ["SRC", "TSK", "REL"].includes(category) ? category : "TSK";

    // 3. Форматирование массива тезисов (гарантируем валидный JSONB)
    const takeaways = Array.isArray(body.takeaways)
      ? body.takeaways.map((t: any) => String(t).trim()).filter(Boolean)
      : [];

    // 4. Подготовка payload
    const eventPayload = {
      id: formattedId,
      title: String(body.title).trim(),
      category: cleanCategory,
      author: body.author ? String(body.author).trim() : null,
      priority: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].includes(body.priority)
        ? body.priority
        : "MEDIUM",
      score: body.score ? Math.min(10, Math.max(1, Number(body.score))) : null,
      verdict: String(body.verdict).trim(),
      takeaways: takeaways,
      doc_link: body.docLink || body.doc_link || null,
      status: ["backlog", "in_progress", "done", "archived"].includes(body.status)
        ? body.status
        : "backlog",
      source_channel: body.sourceChannel || body.source_channel || "spark_auto",
      updated_at: new Date().toISOString(),
    };

    // Проверка настроенности переменных Supabase
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) {
      return NextResponse.json({
        success: true,
        warning: "Supabase URL не настроен в .env. Запрос валиден, но сохранение пропущено.",
        simulatedItem: eventPayload,
      });
    }

    // 5. Идемпотентный UPSERT по первичному ключу ID в Supabase
    const { data, error } = await supabaseAdmin
      .from("kanban_events")
      .upsert(eventPayload, { onConflict: "id" })
      .select()
      .single();

    if (error) {
      console.error("Supabase upsert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: `Событие ${formattedId} успешно зафиксировано в базе`,
      data,
    });
  } catch (error: any) {
    console.error("Webhook route error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
