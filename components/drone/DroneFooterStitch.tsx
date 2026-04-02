'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export const DroneFooterStitch = () => {
    return (
        <DebugWrapper id={11000} label="Drone Footer Section">
            <footer className="bg-[#060606] py-16 border-t border-[#2a2a2a]">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <DebugWrapper id={11001} label="Footer Branding">
                            <div className="text-xl font-bold tracking-tighter mb-4 text-white flex items-center">
                                <span className="text-[#D4A017] mr-2">✈</span> BREUS MEDIA
                            </div>
                        </DebugWrapper>
                        <DebugWrapper id={11002} label="Footer Mission">
                            <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
                                Профессиональная аэросъёмка и визуальные решения для бизнеса в Грузии. Тбилиси, Батуми, Кутаиси.
                            </p>
                        </DebugWrapper>
                        <div className="flex space-x-6">
                            {[
                                { label: 'IG', href: 'https://www.instagram.com/breusmedia' },
                                { label: 'TG', href: 'https://t.me/breusmedia' },
                            ].map((social, sIdx) => (
                                <DebugWrapper key={social.label} id={11010 + sIdx} label={`Social Link: ${social.label}`}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#D4A017] hover:border-[#D4A017] transition-all"
                                    >
                                        {social.label}
                                    </a>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <DebugWrapper id={11003} label="Footer Nav Column">
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white">Меню</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                {['Портфолио', 'Оборудование', 'Карта полетов', 'Контакты'].map((item, mIdx) => (
                                    <li key={item}>
                                        <DebugWrapper id={11020 + mIdx} label={`Footer Link: ${item}`}>
                                            <a href="#" className="hover:text-white transition-colors">{item}</a>
                                        </DebugWrapper>
                                    </li>
                                ))}
                            </ul>
                        </DebugWrapper>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <DebugWrapper id={11004} label="Footer Contact Column">
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-white">Контакты</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>Tbilisi, Georgia</li>
                                <li className="text-white font-bold">+995 574 619 393</li>
                                <li className="hover:text-white transition-colors">hello@breus.media</li>
                            </ul>
                        </DebugWrapper>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#2a2a2a] text-center text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                    © 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </DebugWrapper>
    );
};
