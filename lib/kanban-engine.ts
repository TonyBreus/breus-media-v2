import fs from "fs";
import path from "path";

export interface KanbanTask {
  id: string;
  title: string;
  tags: string[];
  status: "inbox" | "focus" | "in_progress" | "review" | "done";
  section: string;
  isDone: boolean;
}

export interface KanbanState {
  date: string;
  focusTitle: string;
  columns: {
    inbox: KanbanTask[];
    focus: KanbanTask[];
    in_progress: KanbanTask[];
    review: KanbanTask[];
    done: KanbanTask[];
  };
  metrics: {
    total: number;
    completed: number;
    completionRate: number;
  };
}

const REPORTS_DIR = path.resolve(
  process.cwd(),
  "../Anton_2.0/00_ЕЖЕДНЕВНЫЕ_ОТЧЕТЫ"
);

export function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getReportFilePath(dateStr?: string): string {
  const date = dateStr || getTodayDateString();
  return path.join(REPORTS_DIR, `${date}_DAILY_REPORT.md`);
}

export async function getDailyKanbanState(dateStr?: string): Promise<KanbanState> {
  const date = dateStr || getTodayDateString();
  const filePath = getReportFilePath(date);

  if (!fs.existsSync(filePath)) {
    // Если файла нет, проверим шаблон и скопируем
    const templatePath = path.join(REPORTS_DIR, "TEMPLATE_DAILY_REPORT.md");
    if (fs.existsSync(templatePath)) {
      const templateContent = fs.readFileSync(templatePath, "utf-8");
      fs.writeFileSync(filePath, templateContent.replace(/YYYY-MM-DD/g, date), "utf-8");
    } else {
      throw new Error(`Report not found and template missing at ${templatePath}`);
    }
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // Парсинг заголовка
  const titleMatch = content.match(/^#\s+.*\|\s+Фокус дня:\s*(.+)$/m);
  const focusTitle = titleMatch ? titleMatch[1].trim() : "Продуктивный день";

  const columns: KanbanState["columns"] = {
    inbox: [],
    focus: [],
    in_progress: [],
    review: [],
    done: [],
  };

  const tagRegex = /#[A-Za-zА-Яа-я0-9_]+/g;

  // 1. Активный буфер -> Inbox
  const inboxMatch = content.match(/###\s+Активный буфер \(Inbox\)\s*\n([\s\S]*?)(?=\n###|\n##|$)/);
  if (inboxMatch) {
    const lines = inboxMatch[1].trim().split("\n");
    lines.forEach((line, idx) => {
      const clean = line.replace(/^\d+\.\s*/, "").trim();
      if (clean && !clean.startsWith("<!--")) {
        const tags = clean.match(tagRegex) || [];
        columns.inbox.push({
          id: `inbox-${idx + 1}`,
          title: clean,
          tags,
          status: "inbox",
          section: "Inbox",
          isDone: false,
        });
      }
    });
  }

  // 2. Главный фокус дня
  const focusMatch = content.match(/##\s+🎯\s+Главный фокус дня к \$100k\s*\n([\s\S]*?)(?=\n##|$)/);
  if (focusMatch) {
    const lines = focusMatch[1].trim().split("\n");
    lines.forEach((line, idx) => {
      const m = line.match(/^[-*]\s*\[([ xX])\]\s*(.*)$/);
      if (m) {
        const isDone = m[1].toLowerCase() === "x";
        const taskText = m[2].trim();
        const tags = taskText.match(tagRegex) || [];
        const status = isDone ? "done" : "focus";
        columns[status].push({
          id: `focus-${idx + 1}`,
          title: taskText,
          tags,
          status,
          section: "Фокус дня",
          isDone,
        });
      }
    });
  }

  // 3. Пульс дня (Утро / Миддэй / Вечер)
  const pulseMatch = content.match(/##\s+⏱\s+Пульс дня\s*\n([\s\S]*?)(?=\n##\s+✅|$)/);
  if (pulseMatch) {
    const lines = pulseMatch[1].trim().split("\n");
    lines.forEach((line, idx) => {
      const m = line.match(/^[-*]\s*\[([ xX])\]\s*(.*)$/);
      if (m) {
        const isDone = m[1].toLowerCase() === "x";
        const taskText = m[2].trim();
        const tags = taskText.match(tagRegex) || [];
        const status = isDone ? "done" : "in_progress";
        columns[status].push({
          id: `pulse-${idx + 1}`,
          title: taskText,
          tags,
          status,
          section: "Пульс дня",
          isDone,
        });
      }
    });
  }

  // 4. Маленькие победы
  const doneMatch = content.match(/##\s+✅\s+Маленькие победы \(Done\)\s*\n([\s\S]*?)(?=\n##|$)/);
  if (doneMatch) {
    const lines = doneMatch[1].trim().split("\n");
    lines.forEach((line, idx) => {
      const m = line.match(/^[-*]\s*\[([ xX])\]\s*(.*)$/);
      if (m) {
        const taskText = m[2].trim();
        const tags = taskText.match(tagRegex) || [];
        columns.done.push({
          id: `done-${idx + 1}`,
          title: taskText,
          tags,
          status: "done",
          section: "Маленькие победы",
          isDone: true,
        });
      }
    });
  }

  const total =
    columns.focus.length +
    columns.in_progress.length +
    columns.review.length +
    columns.done.length;
  const completed = columns.done.length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    date,
    focusTitle,
    columns,
    metrics: {
      total,
      completed,
      completionRate,
    },
  };
}

export async function toggleTaskInReport(
  taskTitle: string,
  markAsDone: boolean,
  dateStr?: string
): Promise<boolean> {
  const filePath = getReportFilePath(dateStr);
  if (!fs.existsSync(filePath)) return false;

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const cleanTarget = taskTitle.replace(/^[-*]\s*\[[ xX]\]\s*/, "").trim();

  let updated = false;
  const newLines = lines.map((line) => {
    const cleanCurrent = line.replace(/^[-*]\s*\[[ xX]\]\s*/, "").trim();
    if (cleanCurrent === cleanTarget && /^[-*]\s*\[[ xX]\]/.test(line)) {
      updated = true;
      return markAsDone ? `- [x] ${cleanCurrent}` : `- [ ] ${cleanCurrent}`;
    }
    return line;
  });

  if (updated) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf-8");
  }
  return updated;
}
