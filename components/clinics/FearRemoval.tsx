import React from 'react';
import { motion } from 'framer-motion';

const fears = [
  {
    question: "Больно ли это?",
    answer: "Мы используем современные цифровые анестетики и сверхтонкие иглы. Вы почувствуете только легкое прикосновение. 98% наших пациентов засыпают во время лечения.",
    icon: "💉",
  },
  {
    question: "Сколько времени займет?",
    answer: "Благодаря 3D-сканированию и CEREC-технологиям, большинство процедур (включая коронки) мы делаем за 1 визит (около 2 часов).",
    icon: "⏱️",
  },
  {
    question: "Можно ли в рассрочку?",
    answer: "Да, мы предоставляем беспроцентную рассрочку от банков-партнеров в Грузии на 0% до 12 месяцев. Никаких скрытых комиссий.",
    icon: "💳",
  }
];

export function FearRemoval() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Мы понимаем ваши <span className="text-blue-500">страхи</span>
        </h2>
        <div className="space-y-6">
          {fears.map((fear, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex gap-6"
            >
              <div className="text-4xl">{fear.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{fear.question}</h3>
                <p className="text-zinc-400 leading-relaxed">{fear.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
