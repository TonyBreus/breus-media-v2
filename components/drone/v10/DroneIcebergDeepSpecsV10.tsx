'use client';

import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { ChevronDown, ShieldCheck, Cpu, Target, Compass, Layers, CheckCircle2, MapPin, FileText, Zap } from 'lucide-react';

export const DroneIcebergDeepSpecsV10 = () => {
    return (
        <DebugWrapper id={11012} label="Drone Iceberg Deep Specs V10">
            <section className="bg-[#060606] border-t border-white/10 py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Layers className="w-4 h-4 text-[#D4A017]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                                База знаний и регламенты
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
                            Технические стандарты, юридическая безопасность и каталог услуг
                        </h2>
                        <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
                            Полная техническая фактура для девелоперов, отельеров и маркетологов. Разверните интересующий раздел для ознакомления со стандартами съёмки Breus Media.
                        </p>
                    </div>

                    {/* Accordions */}
                    <div className="flex flex-col gap-2">
                        
                        {/* SEC 1: Знакомо? */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Target className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Знакомо? 6 бизнес-задач, которые решает аэросъёмка</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {[
                                        'Объект сильный, но с земли не видно масштаба',
                                        'Клиент не понимает локацию и окружение',
                                        'Нужно показать стройку инвестору или банку',
                                        'Обычные фото не выделяют объект в листингах',
                                        'Труднодоступные зоны без лишних затрат на леса',
                                        'Один выезд закрывает сразу несколько задач'
                                    ].map((item, i) => (
                                        <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                                            <p className="text-sm font-bold text-white/90 leading-snug">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </details>

                        {/* SEC 2: GCAA */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Регламент полётов GCAA и география работы</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="space-y-6 mt-4">
                                    <div className="flex gap-4">
                                        <FileText className="w-6 h-6 text-[#D4A017] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-2">Официальное регулирование GCAA</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Вся деятельность осуществляется в строгом соответствии с требованиями Агентства гражданской авиации Грузии. Мы соблюдаем ограничения по высоте и зонам, запрещенным для полетов.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <MapPin className="w-6 h-6 text-[#D4A017] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-2">География регулярных съёмок</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Тбилиси (Ваке, Сабуртало, Дигоми, Старый город), Батуми, Кахетия, проверка по кадастру.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Compass className="w-6 h-6 text-[#D4A017] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-2">Согласование полётной зоны</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Выполняем предварительную проверку локации (по гео-метке или кадастровому коду) на наличие ограничений перед каждым вылетом.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* SEC 3: Tech Park */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Cpu className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Техническая сводка: оборудование и форматы</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="bg-black/30 rounded-xl border border-white/5 p-5">
                                        <h4 className="text-base font-bold text-white mb-3">DJI Air 3S (Классика)</h4>
                                        <ul className="space-y-2 text-sm text-white/70">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> 1" CMOS матрица</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> 4K/60fps HDR видео</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> 10-bit D-Log M профиль</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Идеально для архитектуры и ландшафтов</li>
                                        </ul>
                                    </div>
                                    <div className="bg-black/30 rounded-xl border border-white/5 p-5">
                                        <h4 className="text-base font-bold text-white mb-3">DJI Avata 2 (FPV)</h4>
                                        <ul className="space-y-2 text-sm text-white/70">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Сверхширокий угол обзора 155°</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Встроенная защита пропеллеров</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Динамичные пролеты сквозь интерьеры</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Полное погружение (FPV-кинематография)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* SEC 4: Standards */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Почему снимают с нами: 6 стандартов Breus Media</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {[
                                        'Сначала задача ➔ потом маршрут.',
                                        'Съемка под каналы Reels/Web/Maps.',
                                        'Комбинация Воздух + земля + FPV.',
                                        '100% соблюдение GCAA.',
                                        'Съемки по всей Грузии.',
                                        'Сдача чистового архива от 24 часов.',
                                    ].map((rule, i) => (
                                        <div key={i} className="flex gap-3 bg-black/30 p-3 rounded-lg border border-white/5 items-center">
                                            <div className="text-[#D4A017] font-black text-sm">0{i + 1}</div>
                                            <div className="text-sm font-medium text-white/90">{rule}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </details>

                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
