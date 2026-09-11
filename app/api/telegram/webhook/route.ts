import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

async function sendChatAction(chatId: number | string, action: string = "typing") {
  if (!TELEGRAM_TOKEN) return;
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendChatAction`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, action }),
    });
  } catch (err) {
    console.error("sendChatAction error:", err);
  }
}

async function sendTelegramMessage(chatId: number | string, text: string, parseMode: string = "Markdown") {
  if (!TELEGRAM_TOKEN) {
    console.warn("TELEGRAM_BOT_TOKEN not configured");
    return;
  }
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: parseMode,
        disable_web_page_preview: false,
      }),
    });

    if (!res.ok && parseMode === "Markdown") {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text.replace(/[*_`\[\]()]/g, ""),
          disable_web_page_preview: false,
        }),
      });
    }
  } catch (err) {
    console.error("sendTelegramMessage error:", err);
  }
}

async function transcribeVoiceWithGroq(fileId: string): Promise<string | null> {
  if (!GROQ_API_KEY || !TELEGRAM_TOKEN) {
    console.warn("GROQ_API_KEY or TELEGRAM_TOKEN missing for STT");
    return null;
  }

  try {
    const fileRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/getFile?file_id=${fileId}`);
    if (!fileRes.ok) return null;
    const fileJson = await fileRes.json();
    const filePath = fileJson?.result?.file_path;
    if (!filePath) return null;

    const audioRes = await fetch(`https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${filePath}`);
    if (!audioRes.ok) return null;
    const arrayBuffer = await audioRes.arrayBuffer();
    const audioBlob = new Blob([arrayBuffer], { type: "audio/ogg" });

    const formData = new FormData();
    formData.append("file", audioBlob, "voice.ogg");
    formData.append("model", "whisper-large-v3-turbo");
    formData.append("language", "ru");

    const groqRes = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: formData,
    });

    if (!groqRes.ok) {
      console.error("Groq STT error:", await groqRes.text());
      return null;
    }

    const groqJson = await groqRes.json();
    return groqJson.text ? groqJson.text.trim() : null;
  } catch (err) {
    console.error("transcribeVoiceWithGroq exception:", err);
    return null;
  }
}

async function askGroqAssistant(question: string, contextItems: any[]): Promise<string> {
  if (!GROQ_API_KEY) return "";

  const itemsContext = contextItems
    .map(
      (item) =>
        `- [#${item.id}] "${item.title}" | Категория: ${item.category} | Статус: ${item.status} | Приоритет: ${item.priority} | Вердикт: ${item.verdict || "нет"} | Тезисы: ${(item.takeaways || []).join("; ")}`
    )
    .join("\n");

  const prompt = `Ты умный операционный ассистент агентства Breus Media. Твоя задача — четко, емко и по-деловому отвечать на вопросы руководителя по текущим задачам, проектам и релизам.

Вот актуальные карточки из базы канбана Breus Media:
${itemsContext}

Вопрос пользователя: "${question}"

Инструкция к ответу:
1. Отвечай кратко и структурировано на русском языке.
2. Если вопрос касается задач на сегодня, статуса или бэклога — выдели главное.
3. Обязательно указывай ссылки на ID карточек (напр. #SRC-128, #TSK-042).
4. Используй Markdown (жирный шрифт, маркированные списки).`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 700,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      console.error("Groq Chat error:", await res.text());
      return "";
    }
    const data = await res.json();
    return data?.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("Groq chat exception:", err);
    return "";
  }
}

export async function POST(req: NextRequest) {
  try {
    const update = await req.json();
    const message = update.message;

    if (!message) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id;
    let text = message.text ? message.text.trim() : "";
    let isVoice = false;

    // 1. Проверка на голосовое / аудио сообщение
    const voice = message.voice || message.audio;
    if (voice && !text) {
      await sendChatAction(chatId, "record_voice");
      const transcribed = await transcribeVoiceWithGroq(voice.file_id);
      if (transcribed) {
        text = transcribed;
        isVoice = true;
      } else {
        await sendTelegramMessage(
          chatId,
          `🎙 Получил ваше голосовое сообщение, но не удалось распознать речь. Попробуйте записать еще раз или написать текстом.`
        );
        return NextResponse.json({ ok: true });
      }
    }

    if (!text) {
      return NextResponse.json({ ok: true });
    }

    await sendChatAction(chatId, "typing");
    const voicePrefix = isVoice ? `🎙 *Вы спросили:* _«${text}»_\n\n` : "";

    // 2. Команда /start
    if (text.startsWith("/start")) {
      const welcome = `👋 *Breus Media Operations Bot*\n\nЯ подключен к живой базе задач и поддерживаю *голосовые сообщения*.\n\n*Как со мной общаться:*\n• Отправьте *голосовое* сообщение с любым вопросом (например: _«Какие у нас задачи на сегодня?»_)\n• Или напишите текстом: _«что в работе»_, _«какие задачи сегодня»_\n• \`/ask [ID]\` — Выжимка 5 тезисов по задаче (напр. \`/ask SRC-128\`)\n• \`/summary 24h\` — Сводка закрытых и новых задач за 24 часа`;
      await sendTelegramMessage(chatId, welcome);
      return NextResponse.json({ ok: true });
    }

    // 3. Команда /ask [ID] или прямой ввод ключа (напр. "SRC-128" или "#SRC-128")
    const askMatch = text.match(/^(?:\/ask\s+)?#?([A-Za-z]{3}-\d+)/i);
    if (askMatch) {
      const eventId = askMatch[1].toUpperCase();

      const { data: item, error } = await supabaseAdmin
        .from("kanban_events")
        .select("*")
        .ilike("id", eventId)
        .single();

      if (error || !item) {
        await sendTelegramMessage(chatId, `${voicePrefix}⚠️ Событие *#${eventId}* не найдено в базе канбана.`);
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

      let reply = `${voicePrefix}📌 *[#${item.id}] ${item.title}*\n`;
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

    // 4. Команда /summary [период]
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

      let summaryMsg = `${voicePrefix}📊 *Операционная сводка за ${period}*\n\n`;
      summaryMsg += `• Всего событий/задач: *${total}*\n`;
      summaryMsg += `  ✅ Выполнено: *${done}*\n`;
      summaryMsg += `  ⏳ В работе: *${inProgress}*\n`;
      summaryMsg += `  📥 В бэклоге: *${backlog}*\n\n`;

      if (critical.length > 0) {
        summaryMsg += `🔴 *Критичные к внедрению (${critical.length}):*\n`;
        critical.slice(0, 5).forEach((c) => {
          summaryMsg += `• [#${c.id}] *${c.title}* — _${c.verdict ? c.verdict.slice(0, 80) : ""}..._\n`;
        });
        summaryMsg += `\n`;
      }

      summaryMsg += `🌐 [Открыть интерактивный канбан](https://breus-media-v2.vercel.app/kanban)`;

      await sendTelegramMessage(chatId, summaryMsg);
      return NextResponse.json({ ok: true });
    }

    // 5. Запрос по естественному языку: задачи на сегодня / статус / что делать
    const lower = text.toLowerCase();
    const isTaskQuery =
      lower.includes("задач") ||
      lower.includes("сегодня") ||
      lower.includes("план") ||
      lower.includes("что делать") ||
      lower.includes("в работе") ||
      lower.includes("бэклог") ||
      lower.includes("статус");

    // Получаем актуальные карточки из базы
    const { data: allItems } = await supabaseAdmin
      .from("kanban_events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    const items = allItems || [];
    const inProgress = items.filter((i) => i.status === "in_progress");
    const backlog = items.filter((i) => i.status === "backlog");
    const done = items.filter((i) => i.status === "done");

    if (isTaskQuery) {
      let taskMsg = `${voicePrefix}📋 *Оперативный статус задач на сегодня:*\n\n`;

      if (inProgress.length > 0) {
        taskMsg += `⏳ *В РАБОТЕ (${inProgress.length}):*\n`;
        inProgress.forEach((item) => {
          const p = item.priority === "CRITICAL" ? "🔴" : item.priority === "HIGH" ? "🟠" : "🟡";
          taskMsg += `• ${p} *[#${item.id}] ${item.title}*\n  _${item.verdict || "В процессе реализации"}_\n`;
        });
        taskMsg += `\n`;
      } else {
        taskMsg += `⏳ *В работе:* Сейчас нет активных задач.\n\n`;
      }

      if (backlog.length > 0) {
        taskMsg += `📥 *В БЭКЛОГЕ (${backlog.length}):*\n`;
        backlog.forEach((item) => {
          const p = item.priority === "CRITICAL" ? "🔴" : item.priority === "HIGH" ? "🟠" : "⚪️";
          taskMsg += `• ${p} *[#${item.id}] ${item.title}*\n`;
        });
        taskMsg += `\n`;
      }

      if (done.length > 0) {
        taskMsg += `✅ *НЕДАВНО ЗАВЕРШЕНО (${done.length}):*\n`;
        done.slice(0, 3).forEach((item) => {
          taskMsg += `• *[#${item.id}] ${item.title}*\n`;
        });
        taskMsg += `\n`;
      }

      taskMsg += `🌐 [Открыть интерактивный канбан](https://breus-media-v2.vercel.app/kanban)`;

      await sendTelegramMessage(chatId, taskMsg);
      return NextResponse.json({ ok: true });
    }

    // 6. Любой другой свободный вопрос — подключаем Groq Assistant с контекстом
    if (GROQ_API_KEY) {
      const aiAnswer = await askGroqAssistant(text, items);
      if (aiAnswer) {
        await sendTelegramMessage(chatId, `${voicePrefix}${aiAnswer}`);
        return NextResponse.json({ ok: true });
      }
    }

    // 7. Фоллбэк
    await sendTelegramMessage(
      chatId,
      `${voicePrefix}Не понял команду. Вы можете спросить: _«какие задачи сегодня»_, назвать ID события (напр. \`SRC-128\`) или отправить голосовое сообщение.`
    );
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
