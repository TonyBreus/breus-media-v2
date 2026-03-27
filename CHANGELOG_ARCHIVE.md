# CHANGELOG ARCHIVE — Breus Media
Append-only архив изменений. Старые записи не удаляются.

## 2026-03-27
### Session Summary
- Обновлён handover-контекст проекта и структура передачи знаний между чатами.
- Добавлен runbook деплоя/отката.
- Исправлены критичные визуальные проблемы на `/gazeta` локально.

### Commits
- `5824f02` — docs: обновлён CONTEXT_NEXT_CHAT с итогами сессии 27 марта
- `d58b014` — fix(gazeta): remove duplicate ticker layer and restore scroll reveal
- `976ee51` — fix(gazeta): align sticky stack under marquee height

### Technical Notes
- Дублирование ticker-слоёв было вызвано одновременным рендером в `SmartHeader` и `MarqueeSection`.
- Для `NichesStack` выровнен sticky offset относительно фактической высоты header+marquee.
- Сборка `npm run build` после фиксов проходит.

### Release Notes
- Статус: изменения подтверждены локально.
- Ограничение: в локальном репозитории не настроен `git remote`, поэтому автоматический push/deploy недоступен.

### Added Operational Docs
- `DEPLOYMENT.md` — регламент деплоя и rollback.
- `CONTEXT_NEXT_CHAT.md` — обновлён и приведён к формату “актуальный срез”.

### Session Update (GitHub + Vercel Sync)
- GitHub remote настроен: `origin -> https://github.com/TonyBreus/breus-media-v2.git`
- `main` успешно запушен в GitHub.
- Vercel проект подключен к GitHub репозиторию.
- Выполнен дополнительный safeguard для `/gazeta`, чтобы исключить повтор дублирования marquee из header.

#### Commits
- `03e19bc` — fix(gazeta): force-disable header ticker on landing to prevent duplicate marquee

#### Verification
- `npm run build` — OK.
- Live/local сравнение `/gazeta` (hero + marquee reveal) — консистентное поведение.

---

## Шаблон новой записи (копировать в конец файла)
### YYYY-MM-DD
#### Session Summary
- ...

#### Commits
- `<sha>` — <message>

#### Technical Notes
- ...

#### Release Notes
- Статус: local only / deployed
- Проверка: ...
