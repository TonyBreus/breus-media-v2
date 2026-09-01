'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RoiCalculator() {
  const [propertyValue, setPropertyValue] = useState(250000);
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [expenses, setExpenses] = useState(500);

  const annualIncome = (monthlyRent - expenses) * 12;
  const roi = ((annualIncome / propertyValue) * 100).toFixed(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-xl w-full"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">Калькулятор инвестиций (ROI)</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-zinc-400 text-sm mb-2">
            <span>Стоимость объекта ($)</span>
            <span className="text-white font-medium">${propertyValue.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="50000" max="1000000" step="10000"
            value={propertyValue}
            onChange={(e) => setPropertyValue(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-zinc-400 text-sm mb-2">
            <span>Ожидаемая аренда в месяц ($)</span>
            <span className="text-white font-medium">${monthlyRent.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="500" max="10000" step="100"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-zinc-400 text-sm mb-2">
            <span>Ежемесячные расходы (налоги, УК) ($)</span>
            <span className="text-white font-medium">${expenses.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="0" max="5000" step="50"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-zinc-950 rounded-xl border border-zinc-800 flex justify-between items-center">
        <div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Годовая доходность</p>
          <p className="text-4xl font-bold text-blue-400">{roi}%</p>
        </div>
        <div className="text-right">
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Чистая прибыль в год</p>
          <p className="text-2xl font-semibold text-white">${annualIncome.toLocaleString()}</p>
        </div>
      </div>
      
      <button className="w-full mt-6 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
        Получить детальный отчет на Email
      </button>
    </motion.div>
  );
}
