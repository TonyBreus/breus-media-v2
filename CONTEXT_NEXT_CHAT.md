# КОНТЕКСТ — Breus Media
### Обновлён: 27 марта 2026

## ПРОЕКТ
- Live: https://breus-media-v2.vercel.app
- Папка: /Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2
- Домен: breus.media
- Последний коммит: 8f48d34

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

## МАТРИЦА ЦЕН (минимумы)
- Любая услуга: от 200 ₾
- Дрон облёт: от 250 ₾
- Дрон + ролик: от 350 ₾
- Промо-видео: от 800 ₾
- AI-услуги: от 200 ₾

## ТРИ ОТКРЫТЫЕ ПРОБЛЕМЫ

### 1. Тройная бегущая строка на /gazeta
Должно быть 2 строки, показывается 3.
Третья перекрывает номера карточек 00-08.
Искать:
grep -rn "MarqueeSection\|marquee\|ticker" components/gazeta/ --include="*.tsx" | grep -v "MarqueeSection.tsx"

### 2. Сломана Hero-анимация на /gazeta
Раньше большое "BREUS MEDIA" при скролле уходило вверх
и появлялись бегущие строки с индустриями и услугами.
Смотреть: components/gazeta/HeroSection.tsx

### 3. Карточки туризма на /gazeta/tourism — старый стиль
Должны быть с фото и ценами как на /tourism-service.
Проверить: grep -n "tourism" "app/gazeta/[slug]/page.tsx"

## СТРУКТУРА САЙТА
- L1: /gazeta — главная страница-газета
- L2 по услугам: /drone-service, /360-tours-service, /reels-service, /promo-video-service, /ai-visualization-service
- L2 по индустриям: /hotels-service, /restaurants-service, /tourism-service, /clinics-service, /auto-service, /real-estate-service, /business-service
- L3: конкретные страницы услуг под нишу

## ВАЖНО
- L2 страницы — живые хабы с L2DirectionRenderer, не трогать структуру
- Карточки на L2 берутся из constants/l2DirectionConfigs.ts
- Карточки на gazeta/[slug] берутся из l2DirectionConfigs через slugToL2Config
- Домен везде: breus.media (не breusmedia.com или breus-media.com)
