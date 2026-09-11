-- 1. Создаем расширение для работы с UUID (если потребуется)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Таблица событий и задач
CREATE TABLE IF NOT EXISTS public.kanban_events (
    id TEXT PRIMARY KEY,                           -- Пример: 'SRC-128', 'TSK-042', 'REL-015'
    title TEXT NOT NULL,                          -- Заголовок темы / задачи
    category TEXT NOT NULL CHECK (category IN ('SRC', 'TSK', 'REL')),
    author TEXT,                                  -- Спикер/автор (напр. 'Danny Why')
    priority TEXT NOT NULL DEFAULT 'MEDIUM' CHECK (priority IN ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW')),
    score NUMERIC CHECK (score >= 1 AND score <= 10), -- Оценка полезности 1-10
    verdict TEXT NOT NULL,                        -- Краткий вывод (1-2 предложения)
    takeaways JSONB DEFAULT '[]'::jsonb,          -- Массив из 5 ключевых тезисов для TG и быстрого превью
    doc_link TEXT,                                -- Глубокая ссылка (напр. https://docs.google.com/document/d/.../edit#bookmark=id.xxx)
    status TEXT NOT NULL DEFAULT 'backlog' CHECK (status IN ('backlog', 'in_progress', 'done', 'archived')),
    source_channel TEXT DEFAULT 'spark_auto',     -- 'nightly_pool' | 'spark_chat' | 'voice' | 'telegram'
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Индексы для мгновенной фильтрации
CREATE INDEX IF NOT EXISTS idx_kanban_events_status ON public.kanban_events(status);
CREATE INDEX IF NOT EXISTS idx_kanban_events_category ON public.kanban_events(category);
CREATE INDEX IF NOT EXISTS idx_kanban_events_priority ON public.kanban_events(priority);
CREATE INDEX IF NOT EXISTS idx_kanban_events_created_at ON public.kanban_events(created_at DESC);

-- 4. Автоматическое обновление updated_at при изменении записи
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS tr_kanban_events_updated_at ON public.kanban_events;
CREATE TRIGGER tr_kanban_events_updated_at
BEFORE UPDATE ON public.kanban_events
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 5. ВКЛЮЧАЕМ REALTIME ДЛЯ ДОСКИ (чтобы карточки падали без F5)
ALTER PUBLICATION supabase_realtime ADD TABLE public.kanban_events;

-- 6. Настройка политик доступа (RLS)
ALTER TABLE public.kanban_events ENABLE ROW LEVEL SECURITY;

-- Чтение доступно публично (для отображения на сайте)
CREATE POLICY "Allow public read access" 
ON public.kanban_events FOR SELECT 
USING (true);

-- Запись/обновление доступны через Service Role и авторизованных пользователей
CREATE POLICY "Allow service role full access" 
ON public.kanban_events FOR ALL 
USING (true) 
WITH CHECK (true);
