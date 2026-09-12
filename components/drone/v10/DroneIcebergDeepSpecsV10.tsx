'use client';

import React from 'react';
import Link from 'next/link';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { ChevronDown, ShieldCheck, Cpu, Target, Compass, Layers, CheckCircle2, MapPin, FileText, Zap, ArrowUpRight } from 'lucide-react';

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
                                        {
                                            title: 'Объект сильный, но с земли не видно масштаба',
                                            text: 'С высоты видно территорию, подъезды, окружение, фасады и расположение объекта. Клиент быстрее понимает, что именно он покупает, арендует или бронирует.',
                                        },
                                        {
                                            title: 'Клиент не понимает локацию и окружение',
                                            text: 'Аэровидео показывает район, дороги, зелёные зоны, соседние здания и видовые точки. Это особенно важно для недвижимости, отелей, ресторанов, туризма и загородных объектов.',
                                        },
                                        {
                                            title: 'Нужно показать стройку инвестору или руководителю',
                                            text: 'Регулярный облёт фиксирует этапы работ и даёт понятную визуальную картину без постоянных выездов на объект.',
                                        },
                                        {
                                            title: 'Обычные фото не выделяют объект среди похожих',
                                            text: 'Карточка с аэрофото и коротким видео выглядит заметнее в рекламе, презентации, на сайте и в соцсетях.',
                                        },
                                        {
                                            title: 'Нужно показать труднодоступные зоны',
                                            text: 'Крыши, фасады, территории, участки и промышленные объекты можно осмотреть без подъёмной техники и лишней нагрузки на команду.',
                                        },
                                        {
                                            title: 'Один выезд должен закрыть сразу несколько задач',
                                            text: 'Из одной съёмки можно получить материалы для сайта, рекламы, Reels, презентации, отчёта для инвестора или внутренней документации.',
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                                                <h4 className="text-sm font-bold text-white/90 leading-snug">{item.title}</h4>
                                            </div>
                                            <p className="text-xs text-white/60 leading-relaxed pl-8">{item.text}</p>
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
                                <div className="mt-4">
                                    <div className="bg-black/30 p-5 rounded-xl border border-white/5 mb-4">
                                        <p className="text-sm text-white/80 leading-relaxed">
                                            Летаем строго по регламенту Агентства гражданской авиации Грузии (GCAA). Обеспечиваем безопасные полёты по всем районам Тбилиси (Ваке, Сабуртало, Диди Дигоми, Старый город, Крцаниси, Ортачала) и регионам (Батуми, Кахетия, Гудаури, Казбеги, Кутаиси). Зону и ограничения вашего объекта проверяем заранее — просто укажите адрес или кадастровый номер при заявке.
                                        </p>
                                    </div>
                                    <div className="bg-black/30 p-5 rounded-xl border border-white/5 flex items-start gap-4">
                                        <Cpu className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-2">Оборудование в регламенте</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                DJI Air 3S (высота, 4K/60fps HDR, GPS, дальность 20 км) · DJI Avata 2 (FPV внутри помещений, 4K, защита винтов) · Insta360 X5 (360° аэропанорамы).
                                            </p>
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
                                <div className="mt-6 overflow-x-auto rounded-xl border border-white/5">
                                    <table className="w-full text-sm text-left min-w-[600px]">
                                        <thead className="bg-white/5 text-white/90 font-bold">
                                            <tr>
                                                <th className="px-4 py-3 border-b border-white/5">Параметр</th>
                                                <th className="px-4 py-3 border-b border-white/5">DJI Air 3S (Снаружи)</th>
                                                <th className="px-4 py-3 border-b border-white/5">DJI Avata 2 (Внутри / FPV)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5 text-white/70 bg-black/30">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-white/90">Основная задача</td>
                                                <td className="px-4 py-3">Масштаб, фасад, территория, окружение</td>
                                                <td className="px-4 py-3">Динамика, пролёт сквозь комнаты и залы</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-white/90">Локации</td>
                                                <td className="px-4 py-3">Открытые пространства, экстерьер, высота</td>
                                                <td className="px-4 py-3">Интерьеры, залы, арки, склады, цеха</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-white/90">Разрешение</td>
                                                <td className="px-4 py-3">4K HDR до 60/120 fps (10-bit D-Log M)</td>
                                                <td className="px-4 py-3">4K 60 fps (сверхширокий угол 155°)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-white/90">Безопасность в интерьере</td>
                                                <td className="px-4 py-3">Только открытые пространства</td>
                                                <td className="px-4 py-3">Встроенная защита винтов (100% safe для людей)</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                        {
                                            title: 'Сначала задача, потом маршрут полёта',
                                            text: 'Мы не летаем ради красивых кругов в воздухе. Сначала понимаем, что нужно показать: подъездные пути, масштаб территории, фасады, планировку или видовые этажи для будущих покупателей.',
                                        },
                                        {
                                            title: 'Снимаем под реальные сценарии использования',
                                            text: 'Сразу закладываем форматы: горизонтальный 4K для презентаций, сайта и YouTube, вертикальный для Instagram Reels, TikTok и карточек листингов (MyHome.ge, SS.ge).',
                                        },
                                        {
                                            title: 'Комбинируем обычный дрон и манёвренный FPV',
                                            text: 'Если нужно показать не только территорию снаружи, но и пролететь сквозь зал ресторана, холл отеля или цех производства — комбинируем два типа дронов в один проект.',
                                        },
                                        {
                                            title: 'Работаем по всему Тбилиси и выезжаем по всей Грузии',
                                            text: 'Снимаем в Тбилиси (Ваке, Сабуртало, Дигоми, Старый город, Крцаниси), а также регулярно выезжаем в Батуми, Кахетию, Гудаури, Казбеги и Кутаиси.',
                                        },
                                        {
                                            title: 'Соблюдаем правила безопасности и регламенты GCAA',
                                            text: 'Не летаем в запретных зонах наугад. Проверяем ограничения воздушного пространства Грузии, оцениваем погодные условия и риски до выезда на локацию.',
                                        },
                                        {
                                            title: 'Отдаём упорядоченные материалы без хаоса',
                                            text: 'Вы получаете структурированную ссылку на облачный диск: фото по ракурсам, видео с базовой цветокоррекцией, готовое к монтажу или сразу к публикации.',
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                                                <h4 className="text-sm font-bold text-white/90 leading-snug">{item.title}</h4>
                                            </div>
                                            <p className="text-xs text-white/60 leading-relaxed pl-8">{item.text}</p>
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
                                    <h3 className="text-base md:text-lg font-bold text-white">Полный реестр всех 18 направлений съёмки</h3>
                                </div>
                                <ChevronDown className="w-5 h-5 text-white/50 transition-transform duration-300 group-open:-rotate-180" />
                            </summary>
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 mt-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                    {droneServiceItems.map((item, i) => (
                                        <Link 
                                            key={i} 
                                            href={item.primaryHref}
                                            className="group/link flex flex-col justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/[0.02]"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h4 className="text-sm font-bold text-white/90 group-hover/link:text-white transition-colors pr-4">
                                                    {item.title}
                                                </h4>
                                                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover/link:text-[#D4A017] transition-colors shrink-0" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] uppercase tracking-wider text-white/40">{item.category}</span>
                                                <span className="text-xs font-bold text-[#D4A017]">{item.price}</span>
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
