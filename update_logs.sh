#!/bin/bash
NEW_CONTEXT="✅ Strategic Master Onboarding & Dental Clinic Sprint (2026-09-01)
- Контекст:
  - Изучены мастер-стратегии Spark и Breus Media (87 пунктов: Choice-First, The One-Tool Offer, B2B-перехват звонков).
  - Создан манифест \`site-docs/ANTIGRAVITY_SYSTEM_ROADMAP.md\` с разделением ролей Spark ⟷ AntiGravity.
  - Исследованы практики стоматологий (страхи, GEL прайсинг), задокументировано в \`site-docs/research/dental-clinic-best-practices.md\`.
  - Реализованы React-компоненты для стоматологии: \`FearRemoval.tsx\` (FAQ по страхам) и \`PricingGEL.tsx\` (прозрачные цены).
- Проверки:
  - \`NEXT_PUBLIC_DEBUG_MODE=false npm run build\` -> в процессе.
"
echo "$NEW_CONTEXT" | cat - CONTEXT_NEXT_CHAT.md > temp && mv temp CONTEXT_NEXT_CHAT.md

NEW_CHANGELOG="## 2026-09-01 — Strategic Master Onboarding & Dental Clinic Sprint
- docs(strategy): создан \`site-docs/ANTIGRAVITY_SYSTEM_ROADMAP.md\` (Архитектурный манифест).
- docs(research): создан \`site-docs/research/dental-clinic-best-practices.md\` (Анализ стоматологий).
- feat(clinics): добавлены компоненты \`FearRemoval.tsx\` и \`PricingGEL.tsx\`.
"

# Insert after the first header line (or line 2)
sed -i '' -e "/^Append-only/a\\
\\
$NEW_CHANGELOG\\
" CHANGELOG_ARCHIVE.md
