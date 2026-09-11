# Интеграция: Headless Kanban + Supabase Realtime + Telegram Voice Bot (Groq Whisper & LLM)

> **Дата запуска:** 11 сентября 2026  
> **Статус:** В продакшене (`READY`)  
> **Продакшен URL:** [https://breus-media-v2.vercel.app/kanban](https://breus-media-v2.vercel.app/kanban)  
> **Telegram Бот:** `@morningtalkgemini_bot`

---

## 1. Контекст и архитектурный пивот

Изначальный замысел предполагал хранение событий канбана в локальном JSON-файле (`data/kanban-events.json`).  
В процессе развертывания на **Vercel Serverless** было выявлено, что файловая система в бессерверных лямбдах Vercel является эфемерной и доступна только для чтения (`EROFS`). Любая запись через `fs.writeFileSync` приводила бы к потере данных между запросами и ошибкам рантайма.

### Принятое архитектурное решение:
1. **Supabase PostgreSQL** — постоянное облачное хранилище для всех событий, задач и инсайтов из диалогов с Realtime-публикацией.
2. **Next.js Serverless API** — защищенный шлюз (`/api/kanban`, `/api/kanban/webhook`, `/api/telegram/webhook`), использующий `SUPABASE_SERVICE_ROLE_KEY` для серверных мутаций и `anon key` для клиентского чтения.
3. **Groq LPU (Whisper-large-v3-turbo + Qwen 27B)** — распознавание входящих голосовых сообщений из Telegram за ~200-300 мс и генерация контекстных ответов на естественном языке.

---

## 2. Схема данных (Supabase PostgreSQL)

Таблица `kanban_events` в проекте `qpiemremkyuibwjnnjqa`:

```sql
CREATE TABLE public.kanban_events (
  id TEXT PRIMARY KEY,                       -- e.g. 'SRC-128', 'TSK-042', 'REL-015'
  title TEXT NOT NULL,                      -- Заголовок задачи/события
  category TEXT NOT NULL CHECK (category IN ('SRC', 'TSK', 'REL')),
  author TEXT,                              -- Автор идеи/источника
  priority TEXT NOT NULL CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
  score NUMERIC(3, 1),                      -- Оценка ценности от 1.0 до 10.0
  verdict TEXT NOT NULL,                    -- Вердикт внедрения
  takeaways JSONB DEFAULT '[]'::jsonb,      -- Кэш 5 ключевых тезисов (ответ TG за 100 мс)
  doc_link TEXT,                            -- Глубокая ссылка на параграф в Google Docs
  status TEXT NOT NULL DEFAULT 'backlog' CHECK (status IN ('backlog', 'in_progress', 'done', 'archived')),
  source_channel TEXT DEFAULT 'spark_chat',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Включение Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE kanban_events;
```

---

## 3. Эндпоинты и функционал

### 1. Веб-интерфейс: `/kanban`
* Интерактивная канбан-доска (`KanbanDashboard.tsx`) с 4 колонками:
  * 📥 **Бэклог / Входящие**
  * ⏳ **В работе**
  * ✅ **Готово**
  * 📦 **Архив**
* Фильтрация по типам: `Все`, `Источники (SRC)`, `Задачи (TSK)`, `Релизы (REL)`.
* Мгновенный попап `QuickEventModal.tsx` с показом 5 тезисов и прямой ссылкой в Google Docs.
* Автоматическое обновление через Supabase Realtime Channel (`kanban_events_realtime`) без перезагрузки страницы.

### 2. Инжест событий: `POST /api/kanban/webhook`
Принимает JSON со структурой события из Gemini Spark, внешних агентов или скриптов:
```bash
curl -X POST "https://breus-media-v2.vercel.app/api/kanban/webhook" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "TSK-043",
    "title": "Интеграция двустороннего голосового ответа",
    "category": "TSK",
    "priority": "HIGH",
    "score": 9.0,
    "verdict": "Автоматическая озвучка ответов бота через edge-tts.",
    "takeaways": ["Генерация ogg аудио", "Отправка через sendVoice", "Полный Hands-Free режим"],
    "status": "backlog",
    "source_channel": "spark_chat"
  }'
```

### 3. Telegram Вебхук: `POST /api/telegram/webhook`
* **Подключенный бот:** `@morningtalkgemini_bot`
* **Поддержка голосовых сообщений:**
  * Получает `message.voice` или `message.audio`.
  * Скачивает аудиофайл с серверов Telegram.
  * Отправляет в Groq Whisper API (`whisper-large-v3-turbo`) с русским словарем.
  * Выводит пользователю подтверждение распознанного вопроса: `🎙 Вы спросили: «...»`.
* **Понимание естественного языка (NLP):**
  * Распознает смысловые интенты: *«какие задачи сегодня»*, *«что в работе»*, *«план на сегодня»*, *«статус»*, *«покажи бэклог»*.
  * Автоматически группирует актуальные задачи из Supabase и присылает структурированную сводку с эмодзи-приоритетами.
* **Генеративный ИИ-ассистент (Groq Qwen 27B):**
  * На любые сложные или открытые вопросы отвечает с учетом актуального контекста базы задач.
* **Быстрые команды:**
  * `/ask SRC-128` (или просто `#SRC-128` / `SRC-128`) — карточка задачи с вердиктом и 5 тезисами.
  * `/summary 24h` / `/summary week` — аналитическая сводка за период.

---

## 4. Конфигурация переменных окружения (Vercel)

Все ключи безопасно занесены в Vercel CLI во всех средах (`Production`, `Preview`, `Development`):
1. `NEXT_PUBLIC_SUPABASE_URL`: `https://qpiemremkyuibwjnnjqa.supabase.co`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `sb_publishable_...` (Config)
3. `SUPABASE_SERVICE_ROLE_KEY`: `sb_secret_...` (Stored as Secret)
4. `TELEGRAM_BOT_TOKEN`: `8919917039:...` (Stored as Secret)
5. `GROQ_API_KEY`: `gsk_...` (Stored as Secret)

---

## 5. Дорожная карта следующих шагов (Что теперь можно сделать)

1. **Двусторонний Hands-Free голосовой режим (Voice-to-Voice):**
   * Бот может не только читать голос через Whisper, но и отвечать голосовым сообщением (`sendVoice`), сгенерированным через Microsoft Neural TTS / edge-tts, что идеально для использования за рулем.
2. **Прямой мост Gemini Spark ➔ Kanban Webhook:**
   * Настройка Spark, чтобы при подведении итогов сессии или обнаружении инсайта он автоматически отправлял `POST` запрос на `/api/kanban/webhook`, создавая задачу на доске без ручного копирования.
3. **Авто-хронометраж в Google Docs:**
   * Двусторонняя синхронизация: при переносе карточки в `done` на доске в Google Docs автоматически ставится отметка о завершении.
4. **Утренний пуш-дайджест:**
   * Совмещение ранее созданного утреннего скрипта `generate_voice.py` с живой базой Supabase: утреннее голосовое сообщение в 06:30 будет собираться не из статичного документа, а из задач колонки `in_progress` и `backlog`.
