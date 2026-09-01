'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RestaurantStatus() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // Симоляция смены статуса (в реальности зависит от времени)
  useEffect(() => {
    const interval = setInterval(() => setIsOpen(prev => !prev), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-xl w-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">The Breus Resto</h3>
          <p className="text-zinc-400 text-sm">Грузинская кухня • Средний чек 50 ₾</p>
        </div>
        
        <div className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${isOpen ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
          {isOpen ? 'Кухня открыта' : 'Кухня закрыта'}
        </div>
      </div>

      <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-800 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-300">Свободные столики сейчас</span>
          <span className="text-white font-bold text-lg">{isOpen ? '4 из 15' : '0'}</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2 mb-2 overflow-hidden">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: isOpen ? '75%' : '100%' }}></div>
        </div>
        <p className="text-xs text-zinc-500 text-right">Высокая загруженность</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="py-3 px-4 bg-zinc-800 text-white rounded-xl font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
        >
          {showMenu ? 'Скрыть меню' : 'Live Меню'}
        </button>
        <button 
          disabled={!isOpen}
          className={`py-3 px-4 rounded-xl font-medium transition-colors ${isOpen ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}
        >
          Забронировать
        </button>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-6"
          >
            <div className="pt-4 border-t border-zinc-800 space-y-4">
              {[
                { name: 'Хинкали (5 шт)', tags: ['Хит'], price: '15 ₾' },
                { name: 'Хачапури по-аджарски', tags: ['Вегетарианское'], price: '20 ₾' },
                { name: 'Салат Глехури', tags: ['Vegan'], price: '18 ₾' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-medium">{item.name}</h4>
                    <div className="flex gap-2 mt-1">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-white font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
