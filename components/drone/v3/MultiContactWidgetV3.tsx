'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Phone, MessageSquare, X } from 'lucide-react';

export const MultiContactWidgetV3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState('');

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-[#141414] border border-[#2a2a2a] rounded-[24px] shadow-2xl w-[300px] overflow-hidden"
                    >
                        <div className="bg-[#1a1a1a] p-4 border-b border-[#2a2a2a] flex justify-between items-center">
                            <div>
                                <h4 className="text-white font-bold text-sm">Связь с продакшеном</h4>
                                <p className="text-[#D4A017] text-[10px] font-bold uppercase tracking-wider mt-0.5">Отвечаем за 5 минут</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="p-2 flex flex-col gap-1">
                            <a 
                                href="https://wa.me/995501103183?text=Здравствуйте!+Интересует+аэросъёмка+в+Грузии"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-white/5 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">WhatsApp</div>
                                    <div className="text-[11px] text-white/50">Самый быстрый ответ</div>
                                </div>
                            </a>

                            <a 
                                href="https://t.me/breus_anton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-white/5 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#229ED9]/20 flex items-center justify-center">
                                    <Send className="w-4 h-4 text-[#229ED9] ml-[-2px]" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Telegram</div>
                                    <div className="text-[11px] text-white/50">Чат с менеджером</div>
                                </div>
                            </a>

                            <a 
                                href="tel:+995501103183"
                                className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-white/5 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white/80" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Позвонить</div>
                                    <div className="text-[11px] text-white/50">+995 501 103 183</div>
                                </div>
                            </a>
                        </div>

                        <div className="p-4 bg-white/5 border-t border-[#2a2a2a]">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                if (!question) return;
                                try {
                                    await fetch('/api/telegram/webhook', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ message: `Вопрос с сайта (Дроны V3):\n\n${question}` })
                                    });
                                    setQuestion('Отправлено! Скоро свяжемся.');
                                    setTimeout(() => setIsOpen(false), 2000);
                                } catch (error) {
                                    console.error(error);
                                }
                            }} className="flex flex-col gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Ваш вопрос (и контакт для связи)..." 
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-[10px] py-2.5 px-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4A017] transition-colors"
                                    required
                                />
                                <button type="submit" className="w-full bg-[#D4A017] hover:bg-white text-black py-2.5 rounded-[10px] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4" />
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
                {/* V2 Style Button (Glass) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md bg-black/60 border border-white/10 text-white transition-all hover:bg-black/80"
                >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Остались вопросы? Отвечаем за 5 мин
                    </span>
                </button>

                {/* V3 Style Button (Yellow Accent) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex self-end items-center gap-3 px-5 py-3.5 rounded-full shadow-[0_0_30px_rgba(212,160,23,0.3)] transition-all ${
                        isOpen ? 'bg-[#1a1a1a] border border-[#2a2a2a]' : 'bg-[#D4A017] hover:bg-white'
                    }`}
                >
                    {isOpen ? (
                        <X className="w-5 h-5 text-white" />
                    ) : (
                        <>
                            <div className="relative flex items-center justify-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-black/40 opacity-75 animate-ping" />
                                <MessageSquare className="w-5 h-5 text-black relative z-10" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-black">
                                Отвечаем за 5 мин
                            </span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};
