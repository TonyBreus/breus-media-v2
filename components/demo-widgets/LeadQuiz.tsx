'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    title: 'Какая услуга вас интересует?',
    options: ['Аэросъемка (Дрон)', '360° Виртуальный Тур', 'Промо-видео', 'Комплекс (Дрон + 360)']
  },
  {
    title: 'Для какой ниши?',
    options: ['Недвижимость', 'Отель / Резорт', 'Ресторан / Бар', 'Другое']
  },
  {
    title: 'Когда планируете съемку?',
    options: ['Как можно скорее', 'В этом месяце', 'Планирую бюджет', 'Просто смотрю']
  }
];

export default function LeadQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setIsFinished(true), 300);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-xl w-full min-h-[400px] flex flex-col"
    >
      {!isFinished && (
        <div className="mb-8">
          <div className="flex justify-between text-zinc-500 text-sm font-medium mb-3">
            <span>Вопрос {step + 1} из {questions.length}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              className="bg-indigo-500 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center relative">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {questions[step].title}
              </h3>
              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="w-full p-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all text-left flex justify-between items-center group"
                  >
                    <span>{option}</span>
                    <span className="w-5 h-5 rounded-full border border-zinc-700 group-hover:border-indigo-500 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="finish"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Отлично! Мы подобрали решение</h3>
              <p className="text-zinc-400 mb-8">
                Оставьте номер WhatsApp, и мы вышлем вам индивидуальный расчет стоимости и примеры работ для вашей ниши.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="tel" 
                  placeholder="+995 ..." 
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-colors">
                  Получить
                </button>
              </div>
              
              <button 
                onClick={() => { setStep(0); setIsFinished(false); setAnswers([]); }}
                className="mt-6 text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Пройти заново
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
