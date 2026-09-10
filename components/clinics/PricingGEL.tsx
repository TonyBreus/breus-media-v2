import React from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "Базовая Консультация",
    price: "50",
    features: ["Осмотр стоматолога", "Компьютерная томография (3D снимок)", "Составление плана лечения"],
    popular: false,
  },
  {
    name: "Имплант Под Ключ",
    price: "1500",
    features: ["Премиум имплант (Швейцария)", "Установка + Анестезия", "Цирконовиевая коронка", "Гарантия 15 лет"],
    popular: true,
  },
  {
    name: "Виниры (За единицу)",
    price: "800",
    features: ["E-max керамика", "Цифровое моделирование улыбки", "Примерка Mock-up", "Студийная фотосессия До/После"],
    popular: false,
  }
];

export function PricingGEL() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Прозрачные <span className="text-blue-500">Цены</span>
          </h2>
          <p className="text-zinc-400 text-lg">Никаких скрытых платежей. Вы точно знаете, за что платите.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-8 border ${pkg.popular ? 'border-blue-500 bg-blue-500/5 relative' : 'border-zinc-800 bg-zinc-900'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Выбор пациентов
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">{pkg.price}</span>
                <span className="text-xl text-zinc-500 font-medium">₾ (GEL)</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-zinc-300">
                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                Записаться
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
