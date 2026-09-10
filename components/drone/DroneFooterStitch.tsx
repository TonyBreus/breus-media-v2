'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

type DroneFooterStitchProps = {
    missionText?: string;
    menuTitle?: string;
    contactTitle?: string;
    lang?: 'ru' | 'en';
};

export const DroneFooterStitch = ({
    missionText,
    menuTitle,
    contactTitle,
    lang = 'ru',
}: DroneFooterStitchProps) => {
    const isEn = lang === 'en';
    const copy = isEn
        ? {
              missionText:
                  'Aerial videography and visual solutions for business in Georgia. Tbilisi, Kakheti, Kazbegi, Gudauri, Bakuriani.',
              menuTitle: 'MENU',
              contactTitle: 'Contact',
              contactLocation: 'Tbilisi, Georgia',
              menu: [
                  { label: 'Aerial filming', href: '/drone-service/en' },
                  { label: '360° tours', href: '/360-tours-service/en' },
                  { label: 'Reels and video', href: '/reels-service/en' },
                  { label: 'AI visualisation', href: '/ai-visualization-service/en' },
              ],
          }
        : {
              missionText:
                  'Визуальный контент для вашего бизнеса в Грузии: создаем историю бренда от столицы до побережья.',
              menuTitle: 'МЕНЮ',
              contactTitle: 'Контакты',
              contactLocation: 'Тбилиси, Грузия',
              menu: [
                  { label: 'Аэросъёмка', href: '/drone-service' },
                  { label: '360° туры', href: '/360-tours-service' },
                  { label: 'Reels и видео', href: '/reels-service' },
                  { label: 'AI-визуализация', href: '/ai-visualization-service' },
              ],
          };

    const resolvedMission = missionText ?? copy.missionText;
    const resolvedMenuTitle = menuTitle ?? copy.menuTitle;
    const resolvedContactTitle = contactTitle ?? copy.contactTitle;
    const contactLocation = copy.contactLocation;
    const socials = [
        { label: 'Instagram', href: 'https://www.instagram.com/breusmedia', icon: Instagram },
        { label: 'Telegram', href: 'https://t.me/breusmedia', icon: Send },
        { label: 'Facebook', href: 'https://www.facebook.com/breusmedia', icon: Facebook },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breusmedia', icon: Linkedin },
    ];

    return (
        <DebugWrapper id={11000} label="Drone Footer Section">
            <footer className="w-full border-t border-white/10 bg-[#050505] py-4 md:py-5">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
                    {/* Top Row: Menu & Links + Contact Pill */}
                    <div className="flex flex-col items-center justify-between gap-3 pb-3 md:flex-row md:gap-4 border-b border-white/10">
                        {/* Menu & 4 Clickable Links with gold separator dots */}
                        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 md:justify-start">
                            <span className="text-[#FFD23F] font-bold text-xs uppercase tracking-[0.2em]">
                                {resolvedMenuTitle}
                            </span>
                            <span className="text-[#FFD23F] text-xs font-bold select-none">•</span>
                            {copy.menu.map((item, idx) => (
                                <React.Fragment key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-xs font-medium text-white/75 transition-colors hover:text-[#FFD23F]"
                                    >
                                        {item.label}
                                    </Link>
                                    {idx < copy.menu.length - 1 && (
                                        <span className="text-[#FFD23F] text-xs font-bold select-none">•</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Contact Pill: Dark Glass Capsule with pulsing green dot & clickable phone */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs text-white/90 shadow-sm backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
                            <span className="text-white/60 font-medium">
                                {resolvedContactTitle}: {contactLocation} ·
                            </span>
                            <a
                                href="tel:+995501103183"
                                className="font-semibold text-white hover:text-[#FFD23F] transition-colors"
                            >
                                +995 501 103 183
                            </a>
                        </div>
                    </div>

                    {/* B2B Legal Trust Strip */}
                    <div className="flex items-center justify-center py-2.5 border-b border-white/5 text-[11px] text-white/55 tracking-wide text-center">
                        <p>
                            {isEn
                                ? 'Оfficial B2B Contract • Invoices & Acts • Bank Transfer for Companies (TBC / BoG)'
                                : 'Официальный договор • Закрывающие акты • Безналичный расчёт для юрлиц (Invoice TBC / BoG)'}
                        </p>
                    </div>

                    {/* Bottom Row: Logo, Mission, Socials */}
                    <div className="flex flex-col items-center gap-3 pt-3 md:flex-row md:justify-between md:gap-4">
                        <div className="flex items-center text-left text-[18px] font-black uppercase tracking-tighter text-white md:w-[25%]">
                            <Link href={isEn ? "/gazeta/en" : "/gazeta"} className="hover:opacity-85 transition-opacity">
                                BREUS MEDIA <span className="text-[#FFD23F] font-extrabold">•</span>
                            </Link>
                        </div>
                        <p className="w-full text-center text-xs md:text-[13px] leading-relaxed text-white/70 md:w-[50%] md:text-left">
                            {resolvedMission}
                        </p>
                        <div className="flex w-full items-center justify-center gap-2.5 md:w-[25%] md:justify-end">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 shadow-sm backdrop-blur-md transition-all hover:border-[#FFD23F] hover:bg-[#FFD23F]/15 hover:text-[#FFD23F] hover:shadow-[0_0_12px_rgba(255,210,63,0.3)]"
                                >
                                    <social.icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                                </a>
                            ))}
                            <p className="ml-1 text-[10px] uppercase tracking-[0.2em] text-white/40">© 2026</p>
                        </div>
                    </div>
                </div>
            </footer>
        </DebugWrapper>
    );
};
