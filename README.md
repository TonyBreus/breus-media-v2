# Breus Media — Visual Production & AI Landing (v2.0)

Это One-Page Landing, разработанный на **Next.js 14 (App Router)** с использованием **Tailwind CSS** и **Framer Motion**.

## 🚀 Быстрый Старт

1.  **Перейдите в папку проекта:**
    ```bash
    cd breus-media-v2
    ```

2.  **Запустите сервер разработки:**
    ```bash
    npm run dev
    ```

3.  **Откройте в браузере:**
    [http://localhost:3000](http://localhost:3000)

## 🛠 Технический Стек

*   **Framework:** Next.js 14
*   **Styling:** Tailwind CSS (Dark Theme Premium)
*   **Animations:** Framer Motion (Hero, Accordion, Cards)
*   **Icons:** Lucide React
*   **Fonts:** Inter (Google Fonts)

## 📂 Структура

*   `app/page.tsx` — Главная страница (сборка всех секций).
*   `components/` — Все UI компоненты (Header, Hero, Services, Contact...).
*   `lib/utils.ts` — Утилиты для стилей (clsx/tailwind-merge).
*   `tailwind.config.ts` — Настройка цветов бренда (Electric Blue).

## 🌍 Конфигурация

*   **Контакты:** В файле `components/Contact.tsx` настройте номер WhatsApp в функции `handleSubmit`.
*   **Цвета:** В `tailwind.config.ts` можно изменить `colors.brand`.
