import RoiCalculator from '@/components/demo-widgets/RoiCalculator';
import EventBudgetCalculator from '@/components/demo-widgets/EventBudgetCalculator';
import RestaurantStatus from '@/components/demo-widgets/RestaurantStatus';
import LeadQuiz from '@/components/demo-widgets/LeadQuiz';
import { SmartHeader } from '@/components/gazeta/SmartHeader';

export const metadata = {
  title: 'Interactive Tools Demo | Breus Media',
  description: 'Демонстрация интерактивных виджетов и лид-магнитов для сайтов.',
};

export default function InteractiveDemoPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      {/* Используем существующий Header сайта (если он есть), либо просто навигацию */}
      <SmartHeader />

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-medium tracking-wide uppercase mb-6">
            B2B Showcase
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Интерактивные <span className="text-zinc-500">Виджеты</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Демонстрация передовых SaaS-инструментов, калькуляторов и лид-магнитов для интеграции в проекты недвижимости, отелей и ресторанов.
          </p>
        </header>

        <div className="space-y-32">
          
          {/* Section 1: Real Estate */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Калькулятор Инвестиций (ROI)</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Идеальный лид-магнит для сайтов агентств недвижимости и девелоперов. 
                Вместо скучных PDF-презентаций, дайте клиентам инструмент для расчета окупаемости в реальном времени.
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Увеличивает время на сайте (Time on site)</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Генерирует "теплые" лиды инвесторов</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Автоматический расчет доходности</li>
              </ul>
            </div>
            <div>
              <RoiCalculator />
            </div>
          </section>

          {/* Section 2: Hotels & Events */}
          <section className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Бюджет Мероприятий</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Снимает нагрузку с event-менеджеров отеля или ресторана. Клиент сам собирает примерный пакет услуг, включая апселл дополнительных опций (например, фото/видео съемку).
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Интерактивный Upsell (Дрон, 360°)</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Мгновенный расчет стоимости</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Квалификация лида до звонка</li>
              </ul>
            </div>
            <div className="lg:order-1">
              <EventBudgetCalculator />
            </div>
          </section>

          {/* Section 3: Restaurants */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Live Status & Бронирование</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Динамический виджет для ресторанов. Показывает открыта ли кухня прямо сейчас, уровень загруженности и позволяет быстро просмотреть меню без скачивания PDF.
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Статус в реальном времени</li>
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Встроенное аккордеон-меню</li>
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Интеграция с системой бронирования</li>
              </ul>
            </div>
            <div>
              <RestaurantStatus />
            </div>
          </section>

          {/* Section 4: Universal Lead Quiz */}
          <section className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Геймифицированный Квиз</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Вместо контактной формы "Оставьте заявку" — вовлекающий опрос. Подходит для любой ниши (подбор тура, выбор вина, расчет сметы).
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex gap-3"><span className="text-indigo-500">✓</span> Конверсия в 3 раза выше обычных форм</li>
                <li className="flex gap-3"><span className="text-indigo-500">✓</span> Сбор Zero-Party данных (предпочтения)</li>
                <li className="flex gap-3"><span className="text-indigo-500">✓</span> Бесшовные анимации перехода</li>
              </ul>
            </div>
            <div className="lg:order-1">
              <LeadQuiz />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
