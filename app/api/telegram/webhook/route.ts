import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

async function sendTelegramMessage(chatId: number | string, text: string, parseMode: string = "Markdown") {
  if (!TELEGRAM_TOKEN) {
    console.warn("TELEGRAM_BOT_TOKEN not configured");
    return;
  }
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: parseMode,
      disable_web_page_preview: false,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const update = await req.json();
    const message = update.message;

    if (!message || !message.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    const text = message.text.trim();

    // 1. Команда /start
    if (text.startsWith("/start")) {
      const welcome = `👋 *Breus Media Operations Bot*\n\nЯ подключен к базе событий и задач.\n\n*Доступные команды:*\n• \`/ask [ID]\` — Мгновенная выжимка 5 тезисов события (напр. \`/ask SRC-128\`)\n• \`/summary 24h\` — Сводка закрытых и новых задач за 24 часа\n• \`/summary week\` — Сводка за последнюю неделю`;
      await sendTelegramMessage(chatId, welcome);
      return NextResponse.json({ ok: true });
    }

    // 2. Команда /ask [ID] или прямой ввод ключа (напр. "SRC-128" или "#SRC-128")
    const askMatch = text.match(/^(?:\/ask\s+)?#?([A-Za-z]{3}-\d+)/i);
    if (askMatch) {
      const eventId = askMatch[1].toUpperCase();

      const { data: item, error } = await supabaseAdmin
        .from("kanban_events")
        .select("*")
        .ilike("id", eventId)
        .single();

      if (error || !item) {
        await sendTelegramMessage(chatId, `⚠️ Событие *#${eventId}* не найдено в базе канбана.`);
        return NextResponse.json({ ok: true });
      }

      const priorityEmoji =
        item.priority === "CRITICAL"
          ? "🔴 КРИТИЧНО"
          : item.priority === "HIGH"
          ? "🟠 ВЫСОКИЙ"
          : item.priority === "MEDIUM"
          ? "🟡 СРЕДНИЙ"
          : "⚪️ НИЗКИЙ";

      let reply = `📌 *[#${item.id}] ${item.title}*\n`;
      if (item.author) reply += `👤 *Автор:* ${item.author}\n`;
      reply += `⚡️ *Приоритет:* ${priorityEmoji}`;
      if (item.score) reply += ` | 🔥 *Ценность:* ${item.score}/10`;
      reply += `\n📊 *Статус:* \`${item.status}\`\n\n`;

      reply += `💡 *Вердикт внедрения:*\n_${item.verdict}_\n\n`;

      const takeaways: string[] = Array.isArray(item.takeaways) ? item.takeaways : [];
      if (takeaways.length > 0) {
        reply += `🎯 *Ключевые инсайты:*\n`;
        takeaways.forEach((point, idx) => {
          reply += `${idx + 1}. ${point}\n`;
        });
        reply += `\n`;
      }

      if (item.doc_link) {
        reply += `🔗 [Читать полный разбор в Google Docs](${item.doc_link})`;
      }

      await sendTelegramMessage(chatId, reply);
      return NextResponse.json({ ok: true });
    }

    // 3. Команда /summary [период]
    if (text.startsWith("/summary")) {
      const parts = text.split(" ");
      const period = parts[1] || "24h";

      let hours = 24;
      if (period.includes("h")) hours = parseInt(period) || 24;
      if (period.includes("d")) hours = (parseInt(period) || 1) * 24;
      if (period === "week") hours = 24 * 7;

      const since = new Date(Date.now() - hours * 3600 * 1000).toISOString();

      const { data: recentItems } = await supabaseAdmin
        .from("kanban_events")
        .select("*")
        .gte("created_at", since)
        .order("created_at", { ascending: false });

      const items = recentItems || [];
      const total = items.length;
      const done = items.filter((i) => i.status === "done").length;
      const inProgress = items.filter((i) => i.status === "in_progress").length;
      const backlog = items.filter((i) => i.status === "backlog").length;
      const critical = items.filter((i) => i.priority === "CRITICAL");

      let summaryMsg = `📊 *Операционная сводка за ${period}*\n\n`;
      summaryMsg += `• Всего событий/задач: *${total}*\n`;
      summaryMsg += `  ✅ Выполнено: *${done}*\n`;
      summaryMsg += `  ⏳ В работе: *${inProgress}*\n`;
      summaryMsg += `  📥 В бэклоге: *${backlog}*\n\n`;

      if (critical.length > 0) {
        summaryMsg += `🔴 *Критичные к внедрению (${critical.length}):*\n`;
        critical.slice(0, 5).forEach((c) => {
          summaryMsg += `• [#${c.id}] *${c.title}* — _${c.verdict.slice(0, 80)}..._\n`;
        });
        summaryMsg += `\n`;
      }

      summaryMsg += `🌐 [Открыть интерактивный канбан](https://breus-media-v2.vercel.app/kanban)`;

      await sendTelegramMessage(chatId, summaryMsg);
      return NextResponse.json({ ok: true });
    }

    // Фоллбэк
    await sendTelegramMessage(
      chatId,
      `Не понял команду. Введите ID события (напр. \`SRC-128\`) или \`/summary 24h\`.`
    );
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
