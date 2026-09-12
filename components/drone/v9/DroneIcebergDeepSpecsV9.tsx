'use client';

import React from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { ChevronDown, ShieldCheck, Cpu, Target, Compass, Layers, CheckCircle2, ArrowUpRight, MapPin, FileText, Zap } from 'lucide-react';

export const DroneIcebergDeepSpecsV9 = () => {
    return (
        <DebugWrapper id={11099} label="Drone Iceberg Deep Specs V9">
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
                        
                        {/* SEC 1: Задачи */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Target className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Какие задачи закрывает аэросъёмка (6 бизнес-сценариев)</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {[
                                        { title: 'Масштаб и панорама', desc: 'Показываем масштаб объектов, которые невозможно охватить с земли.' },
                                        { title: 'Локация и инфраструктура', desc: 'Наглядно демонстрируем близость к морю, метро, паркам и транспортным развязкам.' },
                                        { title: 'Мониторинг для инвестора/банка', desc: 'Регулярная фиксация этапов строительства для прозрачной отчетности.' },
                                        { title: 'Внимание и CTR листингов', desc: 'Привлекаем взгляд в каталогах (Booking, Airbnb, MyHome, SS.ge) нестандартными ракурсами.' },
                                        { title: 'Диагностика труднодоступных зон', desc: 'Осмотр фасадов, крыш, ЛЭП и солнечных панелей без промышленных альпинистов.' },
                                        { title: 'Экономия: один выезд на всё', desc: 'Сразу собираем материал для соцсетей, сайта, презентаций и печатной рекламы.' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5">
                                            <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-[#D4A017]" /> {item.title}
                                            </h4>
                                            <p className="text-xs text-white/60 leading-relaxed pl-6">{item.desc}</p>
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
                                    <h3 className="text-base md:text-lg font-bold text-white">Регламент полётов GCAA и безопасность в Грузии</h3>
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
                                            <p className="text-sm text-white/70 leading-relaxed">Тбилиси (Ваке, Сабуртало, Мтацминда, Диди Дигоми, Крцаниси, Ортачала), Батуми, Кахетия (Телави, Сигнахи), Казбеги, Гудаури, Кутаиси.</p>
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
                                    <h3 className="text-base md:text-lg font-bold text-white">Парк техники и сравнение технологий</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div className="bg-black/30 rounded-xl border border-white/5 p-5">
                                        <h4 className="text-base font-bold text-white mb-3">DJI Air 3S (Классика)</h4>
                                        <ul className="space-y-2 text-sm text-white/70">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Двойная камера 1" CMOS + 70mm</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> 4K/60fps HDR, 10-bit D-Log M</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Ночной LiDAR для безопасных пролетов</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Идеально для фасадов и ландшафтов</li>
                                        </ul>
                                    </div>
                                    <div className="bg-black/30 rounded-xl border border-white/5 p-5">
                                        <h4 className="text-base font-bold text-white mb-3">DJI Avata 2 (FPV-динамика)</h4>
                                        <ul className="space-y-2 text-sm text-white/70">
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Сверхширокий угол 155°</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Встроенная защита винтов</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Пролеты сквозь интерьеры единым дублем</li>
                                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5" /> Идеально для ресторанов, клубов, производств</li>
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
                                    <h3 className="text-base md:text-lg font-bold text-white">Стандарты продакшна Breus Media (6 правил качества)</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    {[
                                        'Сначала бизнес-задача ➔ потом полетный маршрут.',
                                        'Адаптация съёмки под каналы Reels/Web/Maps.',
                                        'Комбинированный подход: Воздух + земля + FPV.',
                                        'Съемки по всей Грузии без привязки к одной локации.',
                                        '100% соблюдение правил GCAA и безопасность окружающих.',
                                        'Сдача чистового архива исходников от 24 часов.',
                                    ].map((rule, i) => (
                                        <div key={i} className="flex gap-3 bg-black/30 p-3 rounded-lg border border-white/5 items-center">
                                            <div className="text-[#D4A017] font-black text-sm">0{i + 1}</div>
                                            <div className="text-xs text-white/80">{rule}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </details>

                        {/* SEC 5: Registry */}
                        <details className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Layers className="w-5 h-5 text-[#D4A017]" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-white">Полный реестр всех направлений съёмки</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {droneServiceItems.map((item, idx) => (
                                        <Link 
                                            key={idx} 
                                            href={item.primaryHref}
                                            className="group/link flex flex-col p-4 bg-black/30 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-xs font-bold text-white leading-tight pr-2 group-hover/link:text-[#D4A017] transition-colors">{item.title}</h4>
                                                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover/link:text-[#D4A017] shrink-0" />
                                            </div>
                                            <p className="text-[10px] text-white/50 leading-relaxed line-clamp-2 mb-3">
                                                {item.description}
                                            </p>
                                            <div className="mt-auto text-[10px] font-bold text-[#D4A017]">
                                                {item.price}
                                            </div>
                                        </Link>
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
