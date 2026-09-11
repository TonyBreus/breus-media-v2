import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { KanbanItem } from "@/types/kanban-events";

// Демо-события для холодного старта (если таблица в базе еще пуста)
const INITIAL_DEMO_ITEMS: KanbanItem[] = [
  {
    id: "SRC-128",
    title: "Danny Why — ChatGPT Astra + DaVinci MCP интеграция",
    category: "SRC",
    author: "Danny Why",
    priority: "CRITICAL",
    score: 9.5,
    verdict: "Позволяет автоматизировать монтаж B-Roll через текстовые промпты без ручной нарезки таймлайна в DaVinci.",
    takeaways: [
      "Прямое управление медиапулом через локальный MCP сервер",
      "Автоматическая расстановка маркеров на склейках по аудио-транскрипту",
      "Генерация субтитров с кинетическими анимациями",
      "Экспорт готового таймлайна в ProRes/H.265 одной командой",
      "Экономия до 4 часов на каждом 10-минутном выпуске"
    ],
    doc_link: "https://docs.google.com/document/d/1example/edit#bookmark=id.src_128",
    status: "in_progress",
    source_channel: "nightly_pool",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "TSK-042",
    title: "Настройка Sidechain Ducking и L-Cut в основном пайплайне",
    category: "TSK",
    priority: "HIGH",
    score: 8.8,
    verdict: "Обеспечивает плавное приседание музыки на 12–14 дБ под речь спикера с микрофейдами 30 мс.",
    takeaways: [
      "Встроенный аудиодвижок на numpy/scipy",
      "Устранение whoosh SFX на склейках",
      "Непрерывный речевой поток под B-roll футажами",
      "Аппаратный рендеринг VideoToolbox на M2 Pro за 5 секунд"
    ],
    status: "done",
    source_channel: "spark_chat",
    created_at: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "REL-015",
    title: "Релиз V2.4: Headless Kanban + Telegram Realtime Bot",
    category: "REL",
    priority: "MEDIUM",
    score: 8.0,
    verdict: "Единый операционный контур: события из Gemini Spark попадают в базу и доступны по запросу в Telegram.",
    takeaways: [
      "Таблица kanban_events в Supabase с Realtime подпиской",
      "Кэш 5 тезисов прямо в карточке (ответ TG за 100 мс)",
      "Глубокие ссылки на абзацы в Google Docs",
      "Поддержка фильтрации по категориям SRC / TSK / REL"
    ],
    status: "backlog",
    source_channel: "voice",
    created_at: new Date(Date.now() - 3600 * 1000 * 12).toISOString(),
    updated_at: new Date().toISOString(),
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    let items: KanbanItem[] = [];

    if (isSupabaseConfigured) {
      let query = supabaseAdmin
        .from("kanban_events")
        .select("*")
        .order("created_at", { ascending: false });

      if (category && category !== "ALL") {
        query = query.eq("category", category);
      }
      if (status) {
        query = query.eq("status", status);
      }
      if (search) {
        query = query.or(`id.ilike.%${search}%,title.ilike.%${search}%,author.ilike.%${search}%`);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Supabase query error:", error);
      } else if (data && data.length > 0) {
        items = data;
      }
    }

    // Если база пуста или не настроена, возвращаем демо-данные
    if (items.length === 0) {
      items = INITIAL_DEMO_ITEMS;
      if (category && category !== "ALL") {
        items = items.filter((i) => i.category === category);
      }
      if (search) {
        const s = search.toLowerCase();
        items = items.filter(
          (i) =>
            i.id.toLowerCase().includes(s) ||
            i.title.toLowerCase().includes(s) ||
            (i.author && i.author.toLowerCase().includes(s))
        );
      }
    }

    // Группировка по колонкам
    const columns = {
      backlog: items.filter((i) => i.status === "backlog"),
      in_progress: items.filter((i) => i.status === "in_progress"),
      done: items.filter((i) => i.status === "done"),
      archived: items.filter((i) => i.status === "archived"),
    };

    return NextResponse.json({
      success: true,
      data: {
        items,
        columns,
        metrics: {
          total: items.length,
          critical: items.filter((i) => i.priority === "CRITICAL").length,
          done: columns.done.length,
          inProgress: columns.in_progress.length,
          backlog: columns.backlog.length,
        },
      },
    });
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
    const { action, id, status } = body;

    if (action === "update_status" && id && status) {
      const isSupabaseConfigured =
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

      if (isSupabaseConfigured) {
        const { data, error } = await supabaseAdmin
          .from("kanban_events")
          .update({ status, updated_at: new Date().toISOString() })
          .eq("id", id)
          .select()
          .single();

        if (error) throw error;
        return NextResponse.json({ success: true, item: data });
      }

      return NextResponse.json({ success: true, simulated: { id, status } });
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

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Missing id or status" }, { status: 400 });
    }

    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    if (isSupabaseConfigured) {
      const { data, error } = await supabaseAdmin
        .from("kanban_events")
        .update({ status, updated_at: new Date().toISOString() })
        .ilike("id", id)
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, item: data });
    }

    return NextResponse.json({ success: true, simulated: { id, status } });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

