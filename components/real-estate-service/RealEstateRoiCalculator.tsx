'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, TrendingUp, Users, MessageCircle, Sparkles } from 'lucide-react';

interface RealEstateRoiCalculatorProps {
    lang?: 'ru' | 'en';
    showBanner?: boolean;
}

export function RealEstateRoiCalculator({ lang = 'ru', showBanner = false }: RealEstateRoiCalculatorProps) {
    const isEn = lang === 'en';

    const [units, setUnits] = useState<number>(5);
    const [price, setPrice] = useState<number>(85000);
    const [tours, setTours] = useState<number>(8);

    const stats = useMemo(() => {
        // 1. Снижение пустых показов на 35% благодаря аэросъемке
        const savedTours = Math.round(units * (tours * 0.35));
        const savedHours = Math.round(savedTours * 2.5);
        
        // 2. Прямая экономия: Время агента (~35 ₾/час) + Транспорт (~10 ₾/выезд)
        const timeSavings = (savedHours * 35) + (savedTours * 10);
        
        // 3. Косвенная выгода от ускорения продажи (привязка к цене объекта)
        // Допустим, быстрая продажа экономит 0.15% от стоимости на налогах/ипотеке/маркетинге. 
        // 1 USD ≈ 2.7 GEL
        const usdToGel = 2.7;
        const holdingSavingsGel = Math.round(units * price * 0.0015 * usdToGel);
        
        const totalSavings = timeSavings + holdingSavingsGel;
        
        // 4. Инвестиции в продакшен (в среднем 250 ₾ за объект)
        const productionCost = units * 250;
        
        // 5. Чистая прибыль (ROI)
        const netRoi = totalSavings - productionCost;

        return {
            savedTours,
            savedHours,
            totalSavings,
            productionCost,
            netRoi,
        };
    }, [units, tours, price]);

    const copy = isEn
        ? {
              badge: 'B2B ROI Model',
              heading: 'Aerial Production ROI Calculator',
              description: 'Time and budget savings for real estate agencies and developments in Tbilisi.',
              slider1: 'Properties for sale',
              slider1Unit: 'obj.',
              slider2: 'Average price',
              slider3: 'Viewings per deal',
              slider3Unit: 'tours',
              metric1Title: 'Saved Viewings',
              metric1Sub: 'minus 35% empty visits',
              metric2Title: 'Saved Time',
              metric2Sub: '2.5 hrs per viewing',
              metric3Title: 'Net ROI (Profit)',
              metric3Sub: `Savings: ${stats.totalSavings.toLocaleString('en-US')} ₾ | Cost: ${stats.productionCost.toLocaleString('en-US')} ₾`,
              ctaButton: 'Discuss ROI & Book a Shoot on WhatsApp →',
              whatsappMsg: `Hello! I calculated aerial filming ROI for ${units} properties (savings: ~${stats.savedHours} hrs, net profit: ${stats.netRoi.toLocaleString('en-US')} ₾). I'd like to discuss the shoot.`,
              bannerText: 'Need an interactive calculator for your development or agency site?',
              bannerAction: 'Custom build from 350 ₾ →',
              bannerWhatsappMsg: 'Hello! I am interested in developing an interactive custom calculator for our real estate website. Please share details.',
          }
        : {
              badge: 'B2B-модель',
              heading: 'Калькулятор окупаемости съёмки',
              description: 'Экономия времени агентов и рекламного бюджета для риелторов и застройщиков.',
              slider1: 'Объектов в продаже',
              slider1Unit: 'объект.',
              slider2: 'Средняя цена',
              slider3: 'Показов на 1 сделку',
              slider3Unit: 'выездов',
              metric1Title: 'Сэкономлено показов',
              metric1Sub: 'минус 35% пустых выездов',
              metric2Title: 'Сэкономлено времени',
              metric2Sub: '2.5 ч на каждый выезд',
              metric3Title: 'Чистая прибыль (ROI)',
              metric3Sub: `Сэкономлено: ${stats.totalSavings.toLocaleString('ru-RU')} ₾ | Инвестиции: ${stats.productionCost.toLocaleString('ru-RU')} ₾`,
              ctaButton: 'Зафиксировать расчёт в WhatsApp →',
              whatsappMsg: `Здравствуйте! Рассчитал окупаемость аэросъемки для ${units} объектов (экономия: ~${stats.savedHours} ч, чистая прибыль: ${stats.netRoi.toLocaleString('ru-RU')} ₾). Хочу обсудить съемку.`,
              bannerText: 'Нужен интерактивный калькулятор для сайта вашего ЖК или агентства?',
              bannerAction: 'Создаем под ключ от 350 ₾ →',
              bannerWhatsappMsg: 'Здравствуйте! Интересует разработка интерактивного калькулятора под ключ для сайта недвижимости. Расскажите подробнее.',
          };

    const whatsappUrl = `https://wa.me/995501103183?text=${encodeURIComponent(copy.whatsappMsg)}`;
    const bannerWhatsappUrl = `https://wa.me/995501103183?text=${encodeURIComponent(copy.bannerWhatsappMsg)}`;

    return (
        <section id="roi-calculator" className="border-b border-[#2a2a2a] bg-[#0A0A0B] py-6 md:py-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl">
                    {/* Compact Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-5 md:mb-6">
                        <div>
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD23F]/30 bg-[#FFD23F]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFD23F]">
                                <Calculator className="h-3 w-3" />
                                {copy.badge}
                            </div>
                            <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                                {copy.heading}
                            </h2>
                        </div>
                        <p className="text-xs leading-relaxed text-white/60 sm:max-w-xs sm:text-right">
                            {copy.description}
                        </p>
                    </div>

                    {/* Compact Bento Box */}
                    <div className="grid gap-4 rounded-[18px] border border-white/10 bg-[#121214] p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] md:grid-cols-12 md:gap-5">
                        {/* Sliders Column (7 cols) */}
                        <div className="space-y-3 md:col-span-7 flex flex-col justify-between">
                            {/* Slider 1: Units */}
                            <div className="rounded-[12px] border border-white/5 bg-[#18181B]/90 px-3.5 py-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/75">
                                        {copy.slider1}
                                    </label>
                                    <span className="rounded-md border border-[#FFD23F]/40 bg-[#FFD23F]/10 px-2 py-0.5 font-mono text-xs sm:text-sm font-bold text-[#FFD23F]">
                                        {units} {copy.slider1Unit}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={1}
                                    max={30}
                                    step={1}
                                    value={units}
                                    onChange={(e) => setUnits(Number(e.target.value))}
                                    className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-[#FFD23F] focus:outline-none"
                                />
                                <div className="mt-1 flex justify-between text-[9px] text-white/35 font-mono">
                                    <span>1</span>
                                    <span>15</span>
                                    <span>30</span>
                                </div>
                            </div>

                            {/* Slider 2: Price */}
                            <div className="rounded-[12px] border border-white/5 bg-[#18181B]/90 px-3.5 py-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/75">
                                        {copy.slider2}
                                    </label>
                                    <span className="rounded-md border border-[#FFD23F]/40 bg-[#FFD23F]/10 px-2 py-0.5 font-mono text-xs sm:text-sm font-bold text-[#FFD23F]">
                                        ${(price / 1000).toFixed(0)}k
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={50000}
                                    max={250000}
                                    step={5000}
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-[#FFD23F] focus:outline-none"
                                />
                                <div className="mt-1 flex justify-between text-[9px] text-white/35 font-mono">
                                    <span>$50k</span>
                                    <span>$150k</span>
                                    <span>$250k</span>
                                </div>
                            </div>

                            {/* Slider 3: Tours */}
                            <div className="rounded-[12px] border border-white/5 bg-[#18181B]/90 px-3.5 py-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/75">
                                        {copy.slider3}
                                    </label>
                                    <span className="rounded-md border border-[#FFD23F]/40 bg-[#FFD23F]/10 px-3 py-1 font-mono text-xs sm:text-sm font-bold text-[#FFD23F]">
                                        {tours} {copy.slider3Unit}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={4}
                                    max={15}
                                    step={1}
                                    value={tours}
                                    onChange={(e) => setTours(Number(e.target.value))}
                                    className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-[#FFD23F] focus:outline-none"
                                />
                                <div className="mt-1 flex justify-between text-[9px] text-white/35 font-mono">
                                    <span>4</span>
                                    <span>10</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>

                        {/* Results Column (5 cols) */}
                        <div className="flex flex-col justify-between gap-3 md:col-span-5">
                            {/* 3 Compact Metric Tiles */}
                            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                {/* Tile 1: Saved Tours */}
                                <motion.div
                                    key={stats.savedTours}
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: 1 }}
                                    className="rounded-[14px] border border-white/10 bg-[#1A1A1E] p-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                                            {copy.metric1Title}
                                        </span>
                                        <Users className="h-3.5 w-3.5 text-[#FFD23F]/70" />
                                    </div>
                                    <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#FFD23F]">
                                        ~{stats.savedTours} <span className="text-[11px] font-sans font-normal text-white/50">{isEn ? 'tours' : 'выезд.'}</span>
                                    </div>
                                    <p className="mt-0.5 text-[9px] text-white/40 leading-tight">
                                        {copy.metric1Sub}
                                    </p>
                                </motion.div>

                                {/* Tile 2: Saved Hours */}
                                <motion.div
                                    key={stats.savedHours}
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: 1 }}
                                    className="rounded-[14px] border border-white/10 bg-[#1A1A1E] p-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                                            {copy.metric2Title}
                                        </span>
                                        <Clock className="h-3.5 w-3.5 text-[#FFD23F]/70" />
                                    </div>
                                    <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-[#FFD23F]">
                                        ~{stats.savedHours} <span className="text-[11px] font-sans font-normal text-white/50">{isEn ? 'hrs' : 'часов'}</span>
                                    </div>
                                    <p className="mt-0.5 text-[9px] text-white/40 leading-tight">
                                        {copy.metric2Sub}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Tile 3: Economic Effect (Full width on right col) */}
                            <motion.div
                                key={stats.netRoi}
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: 1 }}
                                className="rounded-[14px] border border-[#FFD23F]/40 bg-gradient-to-r from-[#242012] to-[#171612] p-3.5 shadow-[0_0_20px_rgba(255,210,63,0.08)] flex flex-col justify-center"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD23F]">
                                        {copy.metric3Title}
                                    </span>
                                    <TrendingUp className="h-3.5 w-3.5 text-[#FFD23F]" />
                                </div>
                                <div className="mt-1 flex items-baseline gap-1.5 font-mono text-2xl sm:text-3xl font-black text-white">
                                    +{stats.netRoi.toLocaleString(isEn ? 'en-US' : 'ru-RU')} <span className="text-base text-[#FFD23F]">₾</span>
                                </div>
                                <p className="mt-1 text-[9px] font-mono text-white/50 leading-tight">
                                    {copy.metric3Sub}
                                </p>
                            </motion.div>

                            {/* Compact WhatsApp Action Button */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#20bd5a] hover:shadow-[0_0_16px_rgba(37,211,102,0.4)]"
                            >
                                <MessageCircle className="h-3.5 w-3.5 fill-black" />
                                <span>{copy.ctaButton}</span>
                            </a>
                        </div>
                    </div>

                    {/* Micro Upsell Banner */}
                    {showBanner && (
                        <div className="mt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#FFD23F]/15 text-[#FFD23F]">
                                    <Sparkles className="h-3 w-3" />
                                </span>
                                <p className="text-[11px] sm:text-xs text-white/70">
                                    {copy.bannerText}
                                </p>
                            </div>
                            <a
                                href={bannerWhatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FFD23F] hover:underline"
                            >
                                {copy.bannerAction}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
