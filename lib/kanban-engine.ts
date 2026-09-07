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
  source: "local" | "github" | "fallback";
}

// 1. Локальные пути
const LOCAL_GOOGLE_DRIVE_DIR = path.resolve(
  process.cwd(),
  "../Anton_2.0/00_ЕЖЕДНЕВНЫЕ_ОТЧЕТЫ"
);
const BUNDLED_REPORTS_DIR = path.resolve(process.cwd(), "data/daily-reports");

// 2. Параметры GitHub API для автономной работы на Vercel
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "TonyBreus";
const GITHUB_REPO = process.env.GITHUB_REPO || "breus-media-v2";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

export function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Читает контент отчета:
 * 1) Локально с Google Drive (если папка существует на Mac).
 * 2) Через GitHub API (если в проде на Vercel и есть GITHUB_TOKEN).
 * 3) Из бандла проекта data/daily-reports/ как фоллбэк.
 */
export async function fetchDailyReportContent(
  dateStr: string
): Promise<{ content: string; source: "local" | "github" | "fallback"; sha?: string }> {
  // А. Локальный режим (MacBook Pro)
  if (fs.existsSync(LOCAL_GOOGLE_DRIVE_DIR)) {
    const localFile = path.join(LOCAL_GOOGLE_DRIVE_DIR, `${dateStr}_DAILY_REPORT.md`);
    if (!fs.existsSync(localFile)) {
      const templatePath = path.join(LOCAL_GOOGLE_DRIVE_DIR, "TEMPLATE_DAILY_REPORT.md");
      let templateContent = "";
      if (fs.existsSync(templatePath)) {
        templateContent = fs.readFileSync(templatePath, "utf-8");
      } else {
        templateContent = getFallbackTemplate();
      }
      const newReport = templateContent.replace(/YYYY-MM-DD/g, dateStr);
      fs.writeFileSync(localFile, newReport, "utf-8");
      // Также синхронизируем в локальный бандл
      syncToBundled(dateStr, newReport);
      return { content: newReport, source: "local" };
    }
    const content = fs.readFileSync(localFile, "utf-8");
    syncToBundled(dateStr, content);
    return { content, source: "local" };
  }

  // Б. Продакшн на Vercel через GitHub API
  if (GITHUB_TOKEN) {
    const filePath = `data/daily-reports/${dateStr}_DAILY_REPORT.md`;
    const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;

    try {
      const res = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Anton2.0-Kanban",
        },
        cache: "no-store",
      });

      if (res.status === 200) {
        const json = await res.json();
        const content = Buffer.from(json.content, "base64").toString("utf-8");
        return { content, source: "github", sha: json.sha };
      }

      if (res.status === 404) {
        // Отчет на этот день еще не создан на GitHub — создаем из шаблона
        console.log(`Report for ${dateStr} not found on GitHub. Initializing from template...`);
        let template = getFallbackTemplate();
        const tplUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/data/daily-reports/TEMPLATE_DAILY_REPORT.md?ref=${GITHUB_BRANCH}`;
        const tplRes = await fetch(tplUrl, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Anton2.0-Kanban",
          },
          cache: "no-store",
        });
        if (tplRes.status === 200) {
          const tplJson = await tplRes.json();
          template = Buffer.from(tplJson.content, "base64").toString("utf-8");
        }

        const newReport = template.replace(/YYYY-MM-DD/g, dateStr);
        const putUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;
        const putRes = await fetch(putUrl, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Anton2.0-Kanban",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `chore(kanban): init daily report for ${dateStr}`,
            content: Buffer.from(newReport, "utf-8").toString("base64"),
            branch: GITHUB_BRANCH,
          }),
        });
        const putJson = await putRes.json();
        return { content: newReport, source: "github", sha: putJson.content?.sha };
      }
    } catch (err) {
      console.error("GitHub API fetch error:", err);
    }
  }

  // В. Фоллбэк на бандл проекта
  if (fs.existsSync(BUNDLED_REPORTS_DIR)) {
    const bundledFile = path.join(BUNDLED_REPORTS_DIR, `${dateStr}_DAILY_REPORT.md`);
    if (fs.existsSync(bundledFile)) {
      return { content: fs.readFileSync(bundledFile, "utf-8"), source: "fallback" };
    }
  }

  return { content: getFallbackTemplate().replace(/YYYY-MM-DD/g, dateStr), source: "fallback" };
}

/**
 * Сохраняет обновление задачи (- [ ] ➔ - [x])
 */
export async function toggleTaskInReport(
  taskTitle: string,
  markAsDone: boolean,
  dateStr?: string
): Promise<boolean> {
  const date = dateStr || getTodayDateString();
  const cleanTarget = taskTitle.replace(/^[-*]\s*\[[ xX]\]\s*/, "").trim();

  // 1. Если локально:
  if (fs.existsSync(LOCAL_GOOGLE_DRIVE_DIR)) {
    const localFile = path.join(LOCAL_GOOGLE_DRIVE_DIR, `${date}_DAILY_REPORT.md`);
    if (fs.existsSync(localFile)) {
      const content = fs.readFileSync(localFile, "utf-8");
      const lines = content.split("\n");
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
        const newText = newLines.join("\n");
        fs.writeFileSync(localFile, newText, "utf-8");
        syncToBundled(date, newText);
        return true;
      }
    }
  }

  // 2. Если через GitHub API (Vercel):
  if (GITHUB_TOKEN) {
    const filePath = `data/daily-reports/${date}_DAILY_REPORT.md`;
    const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;

    try {
      const res = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Anton2.0-Kanban",
        },
        cache: "no-store",
      });

      if (res.status === 200) {
        const json = await res.json();
        const currentText = Buffer.from(json.content, "base64").toString("utf-8");
        const lines = currentText.split("\n");
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
          const updatedText = newLines.join("\n");
          const putRes = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "Anton2.0-Kanban",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: `feat(kanban): ${markAsDone ? "complete" : "uncomplete"} task "${cleanTarget.slice(0, 40)}" (${date})`,
                content: Buffer.from(updatedText, "utf-8").toString("base64"),
                sha: json.sha,
                branch: GITHUB_BRANCH,
              }),
            }
          );
          return putRes.status === 200 || putRes.status === 201;
        }
      }
    } catch (err) {
      console.error("GitHub API update error:", err);
    }
  }

  return false;
}

export async function getDailyKanbanState(dateStr?: string): Promise<KanbanState> {
  const date = dateStr || getTodayDateString();
  const { content, source } = await fetchDailyReportContent(date);

  // Парсинг заголовка дня
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
    source,
  };
}

function syncToBundled(dateStr: string, text: string) {
  try {
    if (!fs.existsSync(BUNDLED_REPORTS_DIR)) {
      fs.mkdirSync(BUNDLED_REPORTS_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(BUNDLED_REPORTS_DIR, `${dateStr}_DAILY_REPORT.md`), text, "utf-8");
  } catch (e) {
    // Тихо игнорируем ошибку записи в бандл
  }
}

function getFallbackTemplate(): string {
  return `# YYYY-MM-DD | Фокус дня: [Тема / Главный результат дня]

## 🎯 Главный фокус дня к $100k
- [ ] [Ключевое действие / рычаг дня #B2B_BreusMedia]

## 📌 Лог буфера и принятых решений
### Активный буфер (Inbox)
1. 

### Принятые решения (Архив буфера)
- [x] [Подтвержденное решение с направлением в базу знаний или Tasks]

## ⏱ Пульс дня

### 🌅 Утро (07:00 – 12:00)
- [ ] 07:00 Подъем, стакан воды, протокол движения и разминка #Тело_Биохакинг
- [ ] 07:30 Утренний голосовой дайджест и сверка фокуса дня #YouTube_Медиа
- [ ] 08:30 Deep Work Блок #1: Стратегическая задача к $100k #B2B_BreusMedia

### ☀️ Миддэй (12:00 – 17:00)
- [ ] 12:30 Питание / Прогулка / Перезагрузка #Тело_Биохакинг
- [ ] 13:30 Deep Work Блок #2: Продакшн / Код / B2B-коммуникации #B2B_BreusMedia
- [ ] 16:00 Бытовые и семейные вопросы #Быт_Семья

### 🌙 Вечер (17:00 – 21:00)
- [ ] 18:00 Фиксация результатов дня и перенос побед в Маленькие победы
- [ ] 19:00 Семейный ужин и отдых #Быт_Семья
- [ ] 21:30 Подготовка ко сну и разгрузка буфера

## ✅ Маленькие победы (Done)
- [x] Старт нового ритма дня и развертывание архитектуры отчетов #B2B_BreusMedia
`;
}
