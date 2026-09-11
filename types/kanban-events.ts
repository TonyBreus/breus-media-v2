export type EventCategory = 'SRC' | 'TSK' | 'REL';
export type PriorityLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type ColumnStatus = 'backlog' | 'in_progress' | 'done' | 'archived';
export type KanbanStatus = ColumnStatus;

export interface KanbanItem {
  id: string;              // Пример: "SRC-128" или "TSK-042"
  title: string;           // Название задачи / темы видео
  category: EventCategory; // SRC | TSK | REL
  author?: string;         // Автор источника (если SRC)
  priority: PriorityLevel; // Оценка важности к внедрению
  score?: number;          // Оценка ценности (от 1 до 10)
  verdict: string;         // Короткий вывод / суть (1-2 предложения)
  takeaways?: string[];    // Ключевые 5 тезисов
  doc_link?: string;       // Прямая ссылка на документ в Google Docs (#bookmark=id.xxx)
  status: ColumnStatus;    // Колонка на доске
  source_channel?: string; // "nightly_pool" | "spark_chat" | "voice" | "telegram"
  created_at: string;      // ISO Date
  updated_at: string;      // ISO Date
}

export interface SummaryReport {
  period: string;
  totalEvents: number;
  byCategory: Record<EventCategory, number>;
  byStatus: Record<ColumnStatus, number>;
  criticalItems: KanbanItem[];
  timeline: { id: string; title: string; time: string; status: ColumnStatus }[];
}
