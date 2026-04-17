'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

type DroneFooterStitchProps = {
    missionText?: string;
    menuTitle?: string;
    contactLinkLabel?: string;
    contactTitle?: string;
};

export const DroneFooterStitch = ({
    missionText = 'Профессиональная аэросъёмка и визуальные решения для бизнеса в Грузии. Тбилиси, Батуми, Кутаиси.',
    menuTitle = 'Меню',
    contactLinkLabel = 'Контакты',
    contactTitle = 'Контакты',
}: DroneFooterStitchProps) => {
    return (
        <DebugWrapper id={11000} label="Drone Footer Section">
            <footer className="bg-[#060606] border-t border-[#2a2a2a] pt-1.5 md:pt-2 pb-8 md:pb-16">
                <div className="container mx-auto grid grid-cols-1 gap-8 px-6 text-center md:grid-cols-4 md:gap-12 md:text-left">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                        <DebugWrapper id={11001} label="Footer Branding">
                            <div className="text-xl font-bold tracking-tighter mb-4 text-white flex items-center">
                                <span className="text-[#D4A017] mr-2">✈</span> BREUS MEDIA
                            </div>
                        </DebugWrapper>
                        <DebugWrapper id={11002} label="Footer Mission">
                            <p className="text-gray-500 text-sm max-w-sm mb-5 md:mb-8 leading-relaxed">
                                {missionText}
                            </p>
                        </DebugWrapper>
                        <div className="flex space-x-6">
                            {[
                                { label: 'Instagram', href: 'https://www.instagram.com/breusmedia', icon: Instagram },
                                { label: 'Telegram', href: 'https://t.me/breusmedia', icon: Send },
                                { label: 'Facebook', href: 'https://www.facebook.com/breusmedia', icon: Facebook },
                                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breusmedia', icon: Linkedin },
                            ].map((social, sIdx) => (
                                <DebugWrapper key={social.label} id={11010 + sIdx} label={`Social Link: ${social.label}`}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-[#D4A017] hover:border-[#D4A017] transition-all"
                                    >
                                        <social.icon className="h-4 w-4" strokeWidth={1.9} />
                                    </a>
                                </DebugWrapper>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <DebugWrapper id={11003} label="Footer Nav Column">
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 text-white">{menuTitle}</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                {[
                                    { label: 'Аэросъёмка', href: '/drone-service' },
                                    { label: '360° туры', href: '/360-tours-service' },
                                    { label: 'Reels и видео', href: '/reels-service' },
                                    { label: 'AI-визуализация', href: '/ai-visualization-service' },
                                    { label: contactLinkLabel, href: '#contact' },
                                ].map((item, mIdx) => (
                                    <li key={item.label}>
                                        <DebugWrapper id={11020 + mIdx} label={`Footer Link: ${item.label}`}>
                                            <a href={item.href} className="hover:text-white transition-colors">
                                                {item.label}
                                            </a>
                                        </DebugWrapper>
                                    </li>
                                ))}
                            </ul>
                        </DebugWrapper>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <DebugWrapper id={11004} label="Footer Contact Column">
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 text-white">{contactTitle}</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>Tbilisi, Georgia</li>
                                <li className="text-white font-bold">+995 574 619 393</li>
                                <li className="hover:text-white transition-colors">hello@breus.media</li>
                            </ul>
                        </DebugWrapper>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-8 md:mt-16 pt-6 md:pt-8 border-t border-[#2a2a2a] text-center text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                    © 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </DebugWrapper>
    );
};
