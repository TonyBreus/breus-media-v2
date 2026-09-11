# Протокол интеграции: Gemini Spark ➔ Breus Media Kanban

> Настоящий протокол предназначен для использования внутри диалоговых сессий Gemini Spark.  
> Любая решенная задача, найденный инсайт или зафиксированное решение отправляется в базу Kanban в один шаг.

---

## 1. Контракт данных (JSON Payload)

| Поле | Тип | Обязательно | Описание / Допустимые значения |
|---|---|---|---|
| `id` | string | Да | Префикс `SRC-` (источник), `TSK-` (задача), `REL-` (релиз) + 3 цифры (напр. `SRC-129`, `TSK-043`) |
| `title` | string | Да | Четкое, емкое название задачи или источника (до 80 символов) |
| `category` | string | Да | Одно из: `"SRC"` \| `"TSK"` \| `"REL"` |
| `author` | string | Нет | Автор/спикер (напр. "Danny Why", "Антон Бреус") |
| `priority` | string | Да | Одно из: `"LOW"` \| `"MEDIUM"` \| `"HIGH"` \| `"CRITICAL"` |
| `score` | number | Нет | Оценка ценности от 1.0 до 10.0 (напр. 9.5) |
| `verdict` | string | Да | 1-2 предложения сути: почему и зачем это внедряем |
| `takeaways`| array | Да | Ровно 4-5 ключевых тезисов (кэшируются для быстрого ответа в Telegram за 100 мс) |
| `doc_link` | string | Нет | Ссылка на документ хронометража или Google Docs |
| `status` | string | Нет | По умолчанию `"backlog"`. Одно из: `"backlog"` \| `"in_progress"` \| `"done"` |
| `source_channel`| string | Нет | `"spark_chat"` \| `"voice"` \| `"nightly_pool"` |

---

## 2. Исполняемая команда для Spark (curl)

В конце сессии Спарк формирует и выполняет команду:

```bash
curl -s -X POST "https://breus-media-v2.vercel.app/api/kanban/webhook" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "TSK-043",
    "title": "Внедрение Hands-Free голосового ассистента в Telegram",
    "category": "TSK",
    "priority": "HIGH",
    "score": 9.3,
    "verdict": "Позволяет руководителю управлять доской задач голосом за рулем.",
    "takeaways": [
      "Распознавание речи через Groq Whisper-large-v3-turbo за 250 мс",
      "Синтез голосового ответа нативной нейросетью ru-RU-DmitryNeural",
      "Мгновенное физическое перемещение карточки на канбан-экране",
      "100% serverless реализация на Vercel и Supabase PostgreSQL"
    ],
    "status": "in_progress",
    "source_channel": "spark_chat"
  }'
```

При успешном приеме сервер возвращает:
```json
{"success": true, "message": "Событие TSK-043 успешно зафиксировано в базе"}
```
И карточка моментально появляется на живой доске: `https://breus-media-v2.vercel.app/kanban`.
