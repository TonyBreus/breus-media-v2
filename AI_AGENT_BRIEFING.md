# AI_AGENT_BRIEFING.md
### Breus Media — стартовый файл для любой среды (Claude / Codex / Antigravity / Claude Code)
### Последнее обновление: 08.04.2026

---

## ЧТО ЭТО

Этот файл читается ПЕРВЫМ в любой новой сессии работы с сайтом Breus Media.
Он даёт достаточно контекста чтобы начать работу без объяснений с нуля.
Полный хронологический контекст — в `CONTEXT_NEXT_CHAT.md`.
История изменений — в `CHANGELOG_ARCHIVE.md`.

---

## ПРОЕКТ

- **Live сайт:** https://breus.media (продакшн) / https://breus-media-v2.vercel.app (Vercel preview)
- **Локальная папка:** `/Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2`
- **GitHub:** https://github.com/TonyBreus/breus-media-v2 — ветка `main`
- **Стек:** Next.js App Router, Tailwind CSS, TypeScript, framer-motion, Vercel

---

## КАК ЗАПУСКАТЬ ЛОКАЛЬНО

```bash
# ПРАВИЛЬНЫЙ способ (production-like, без debug-шума):
NEXT_PUBLIC_DEBUG_MODE=false npm run build
NEXT_PUBLIC_DEBUG_MODE=false PORT=3200 npm run start
# Открывать: http://localhost:3200/gazeta

# НЕ использовать next dev для визуальной проверки:
# next dev + .env.local включает DebugWrapper overlays и ломает hero-анимации
```

---

## АРХИТЕКТУРА САЙТА

```
/ → redirect → /gazeta (посадочная)
/gazeta — главная посадочная (L1)
/gazeta/[slug] — L2 индустриальные хабы (недвижимость, отели, рестораны...)
/drone-services/[slug] — L3 страницы аэросъёмки
/360-tour-[niche] — L3 страницы 360° туров
/promo-video/[niche] — L3 страницы промо-видео
/reels-[niche] — L3 страницы Reels
/ai-visualization-service — AI-визуализация
```

**Главные компоненты посадочной `/gazeta`:**
- `components/gazeta/HeroSection.tsx` — hero с kinetic typography + framer-motion stagger
- `components/gazeta/MarqueeSection.tsx` — бегущие строки
- `components/gazeta/AboutSection.tsx` — блок о студии
- `components/gazeta/NichesStack.tsx` — стек индустрий 00–08 + FAQ (09) + форма (10)
- `components/gazeta/SmartHeader.tsx` — sticky header с language switch

---

## ЖЁСТКИЕ ПРАВИЛА (никогда не нарушать)

### Ценовые минимумы — HARD FLOOR
| Услуга | Минимум |
|--------|---------|
| Любая услуга | от 200 ₾ |
| Дрон-пролёт снаружи | от 250 ₾ |
| Дрон + видео | от 350 ₾ |
| Промо-видео | от 800 ₾ |
| AI-услуги | от 200 ₾ |

**Апрель 2026 — прайс дрон-витрин (рестораны, отели, спорт, вино, туризм, авто):**
- Полёт снаружи 250 ₾ / FPV внутри 350 ₾ / Полная съёмка 500 ₾ / С готовым результатом от 900 ₾
- Add-ons: Reels +100 ₾ / ролик 30–60с +150 ₾ / 360° +80 ₾

### Запрещённые слова в текстах
`профессиональный`, `качественный`, `лучший`, `уникальный`

### Запрещённые действия без явного подтверждения
- Деплой на Vercel
- Изменения в файлах за пределами описанной задачи
- Добавление новых зависимостей в package.json

### Правило подтверждения
**"Ничего не меняй до подтверждения"** — любое изменение показывается сначала, деплой только после явной команды `DEPLOY NOW`

---

## ОБОРУДОВАНИЕ (только это — не добавлять другое)
DJI Air 3S, DJI Avata 2 (FPV), Insta360 X5, смартфон со стабилизатором, беспроводные микрофоны.

**Никогда не упоминать:** RTK, ортофото, NDVI, LiDAR, тепловизоры, Cinelifter, тяжёлые кино-риги.

---

## ЭТАЛОННЫЕ СТРАНИЦЫ

### Дрон-витрина (showcase) — эталон:
`app/drone-services/drone-restaurants/page.tsx` — финальная RU версия (апрель 2026)
`app/drone-services/drone-restaurants/en/page.tsx` — финальная EN версия

По этому шаблону строятся: drone-hotels, drone-sport, drone-wine, drone-tourism, drone-auto

### Стандарты контента:
- `BREUS_MEDIA_L3_PAGE_METHOD_STANDARD_v5.md` — универсальный стандарт L3 страниц
- `DRONE_L3_TEXT_SKELETON_v1.md` — скелет для дрон-витрин (showcase)

---

## ТЕКУЩИЙ СТАТУС САЙТА

- **Сборка:** 81 страница, 0 ошибок
- **Последний коммит:** `footer: remove unavailable menu items` (07.04.2026)
- **Готовые кластеры:** все 360°, дрон-недвижимость, дрон-отели, дрон-рестораны (RU+EN)
- **В работе:** дрон-витрины hotel/sport/wine/tourism/auto (нужен тот же шаблон что restaurants)
- **Не готово:** Reels L3, Promo L3, все индустриальные L2 страницы с полным текстом

---

## ИЗВЕСТНЫЕ ТЕХНИЧЕСКИЕ ОСОБЕННОСТИ

1. **`'use client'` + `export const metadata` не совместимы** — metadata всегда идёт в `layout.tsx` в той же папке роута
2. **DebugWrapper** — при `NEXT_PUBLIC_DEBUG_MODE=false` НЕ добавляет overlays, но сохраняет `className/style`
3. **`next dev` vs `next start`** — для визуальной проверки только `next start` (production build)
4. **Vercel deploy** — автоматический при push в `main`. Деплоить только после `npm run build` без ошибок.
5. **framer-motion** — используется в HeroSection (stagger + kinetic scroll), AboutSection (whileInView), NichesStack (AnimatePresence для FAQ)

---

## КОНТАКТ ПРОЕКТА
- WhatsApp/Phone: +995 574 619 393
- Domain: breus.media

---

## ЧТО ЧИТАТЬ ДАЛЬШЕ

| Файл | Зачем |
|------|-------|
| `CONTEXT_NEXT_CHAT.md` | Полный хронологический контекст всех решений |
| `CHANGELOG_ARCHIVE.md` | История коммитов и изменений |
| `DEBUG_KNOWN_ISSUES.md` | Активные баги и их статус |
| `DRONE_L3_TEXT_SKELETON_v1.md` | Шаблон для дрон-витрин |
