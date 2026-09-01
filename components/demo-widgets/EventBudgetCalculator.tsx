'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EventBudgetCalculator() {
  const [guests, setGuests] = useState(50);
  const [cateringType, setCateringType] = useState('standard');
  const [addPhotoVideo, setAddPhotoVideo] = useState(true);
  const [addDrone, setAddDrone] = useState(false);

  const cateringPrices = {
    budget: 50,
    standard: 100,
    premium: 200,
  };

  const baseCost = guests * cateringPrices[cateringType as keyof typeof cateringPrices];
  const photoVideoCost = addPhotoVideo ? 800 : 0;
  const droneCost = addDrone ? 350 : 0;
  
  const totalCost = baseCost + photoVideoCost + droneCost;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-xl w-full"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">Калькулятор Банкета (Отели/Рестораны)</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-zinc-400 text-sm mb-2">
            <span>Количество гостей</span>
            <span className="text-white font-medium">{guests} чел.</span>
          </div>
          <input 
            type="range" 
            min="10" max="300" step="5"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>

        <div>
          <label className="text-zinc-400 text-sm mb-2 block">Уровень меню</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'budget', label: 'Базовый', price: '$50' },
              { id: 'standard', label: 'Стандарт', price: '$100' },
              { id: 'premium', label: 'Премиум', price: '$200' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setCateringType(option.id)}
                className={`p-3 rounded-xl border text-sm transition-colors ${
                  cateringType === option.id 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="font-semibold mb-1">{option.label}</div>
                <div className="text-xs opacity-70">{option.price}/чел</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-zinc-800">
          <label className="text-zinc-400 text-sm block mb-4">Дополнительные услуги (Upsell)</label>
          
          <label className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={addPhotoVideo}
                onChange={(e) => setAddPhotoVideo(e.target.checked)}
                className="w-5 h-5 rounded border-zinc-700 text-emerald-500 focus:ring-emerald-500 bg-zinc-900"
              />
              <span className="text-white">Промо-видео + Фото</span>
            </div>
            <span className="text-zinc-400">+$800</span>
          </label>

          <label className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={addDrone}
                onChange={(e) => setAddDrone(e.target.checked)}
                className="w-5 h-5 rounded border-zinc-700 text-emerald-500 focus:ring-emerald-500 bg-zinc-900"
              />
              <span className="text-white">Дрон-съемка (FPV)</span>
            </div>
            <span className="text-zinc-400">+$350</span>
          </label>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-end">
        <div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Примерная смета</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-white">${totalCost.toLocaleString()}</p>
        </div>
      </div>
      
      <button className="w-full mt-6 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
        Забронировать дату
      </button>
    </motion.div>
  );
}
