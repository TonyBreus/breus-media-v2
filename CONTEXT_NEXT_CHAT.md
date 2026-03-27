# КОНТЕКСТ — Breus Media
### Обновлён: 27 марта 2026

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- GitHub: https://github.com/TonyBreus/breus-media-v2
- Ветка: main
- Последний кодовый коммит: 03e19bc

## ЧТО СДЕЛАНО И ЗАКРЫТО
✅ Цены — проверены, исправлены 3 нарушения матрицы  
✅ SEO metadata — все 81 страница имеют title/description/canonical  
✅ Суффикс | Breus Media — везде  
✅ Домен breus.media — исправлен в 41 файле  
✅ Главная / → редирект на /gazeta  
✅ gazeta/page.tsx — восстановлен  
✅ gazeta/[slug] — карточки из l2DirectionConfigs с фото  
✅ NichesStack — прямые href на L3-страницы  
✅ droneServicesData — все 19 услуг с правильными href  
✅ Битые ссылки /drone-services и /promo-video — исправлены  
✅ realEstateService — добавлен в l2DirectionConfigs  
✅ /gazeta: убран дублирующий слой бегущих строк (SmartHeader vs MarqueeSection)  
✅ /gazeta: восстановлено scroll-поведение Hero/Marquee reveal  
✅ /gazeta: убрано перекрытие sticky-карточек под строкой `#209` (offset выровнен)
✅ /gazeta: добавлен жёсткий safeguard — `showTickers={false}` в `SmartHeader` на landing

## ВАЖНОЕ ТЕХСОСТОЯНИЕ НА СЕЙЧАС
- Фиксы по `gazeta` подтверждены локально (build + визуальная проверка).
- `origin` настроен на GitHub, ветка `main` запушена.
- Vercel подключен к GitHub-репозиторию; деплой ожидается от push в `main`.
- Проверка live vs local по `/gazeta`: ключевая hero-анимация (`Breus Media` уезжает вверх) и marquee reveal ведут себя консистентно.
- Для деплоя и отката добавлен регламент: `DEPLOYMENT.md`.
- Для истории сессий добавлен архив: `CHANGELOG_ARCHIVE.md`.

## ОТКРЫТЫЕ ЗАДАЧИ
1. Проверить и, при необходимости, обновить карточки туризма на `/gazeta/tourism` до стиля как на `/tourism-service`.
2. Прицельно проверить жалобу на "третью строку" именно на устройстве/разрешении пользователя (видео/скрин во время скролла), если повторится — зафиксировать координаты и viewport.

## СТРУКТУРА САЙТА
- L1: /gazeta — главная страница-газета
- L2 по услугам: /drone-service, /360-tours-service, /reels-service, /promo-video-service, /ai-visualization-service
- L2 по индустриям: /hotels-service, /restaurants-service, /tourism-service, /clinics-service, /auto-service, /real-estate-service, /business-service
- L3: конкретные страницы услуг под нишу

## ИНВАРИАНТЫ (НЕ ЛОМАТЬ)
- L2 страницы — живые хабы с L2DirectionRenderer, не трогать структуру.
- Карточки на L2 берутся из `constants/l2DirectionConfigs.ts`.
- Карточки на `gazeta/[slug]` берутся из `l2DirectionConfigs` через `slugToL2Config`.
- Домен везде: `breus.media` (не `breusmedia.com` и не `breus-media.com`).

## РИТУАЛ В КОНЦЕ КАЖДОЙ СЕССИИ
1. Обновить этот файл (`CONTEXT_NEXT_CHAT.md`) как актуальный срез.
2. Добавить новую запись в `CHANGELOG_ARCHIVE.md` (append-only, старое не стирать).
3. Если были релизные изменения, синхронизировать шаги в `DEPLOYMENT.md`.

## СТАРТ ДЛЯ НОВОГО ЧАТА (СКОПИРОВАТЬ)
Прочитай `CONTEXT_NEXT_CHAT.md`, `CHANGELOG_ARCHIVE.md` и `DEPLOYMENT.md`.  
Потом:
1) сравни `/gazeta` на live и local именно по hero-анимации и количеству бегущих строк,  
2) не делай деплой без явной команды `DEPLOY NOW`,  
3) после правок обнови контекст + архив.
