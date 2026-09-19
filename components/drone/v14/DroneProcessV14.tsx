
import React from 'react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Бриф и согласование локации',
        desc: 'Проверка зоны полётов GCAA за 15 мин и утверждение технического задания.'
    },
    {
        num: '02',
        title: 'Выезд и съёмка',
        desc: 'Отбор лучших точек и ракурсов с земли и с воздуха.'
    },
    {
        num: '03',
        title: 'Цветокоррекция и постобработка',
        desc: 'Удаление шумов, стабилизация кадра и проявка профиля D-Log.'
    },
    {
        num: '04',
        title: 'Сдача через облачный диск',
        desc: 'Передача готовых материалов с бессрочным доступом по прямой ссылке.'
    }
];

export const DroneProcessV14 = () => {
    return (
        <DebugWrapper id={11011} label="Drone Process V10">
            <section className="bg-[#080808] py-16 md:py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                            От заявки до готовых файлов
                        </h2>
                        <p className="text-sm md:text-base text-white/60">
                            Прозрачный процесс работы без сюрпризов
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/10" />
                        
                        {PROCESS_STEPS.map((step, i) => (
                            <React.Fragment key={i}>
                                {/* Mobile Accordion Item */}
                                <details className="group md:hidden bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                    <summary className="flex items-center gap-4 p-4 list-none cursor-pointer">
                                        <div className="w-10 h-10 shrink-0 rounded-full bg-[#111] border border-[#D4A017]/30 flex items-center justify-center">
                                            <span className="text-sm font-black text-[#D4A017]">{step.num}</span>
                                        </div>
                                        <h3 className="text-[15px] font-bold text-white tracking-tight flex-1">
                                            {step.title}
                                        </h3>
                                        <div className="text-[#D4A017] opacity-60 group-open:rotate-180 transition-transform duration-300 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                    </summary>
                                    <div className="px-4 pb-4 pt-1 border-t border-white/5 mt-1 bg-black/20">
                                        <p className="text-[13px] text-white/60 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </details>

                                {/* Desktop View (hidden on mobile) */}
                                <div className="hidden md:flex relative z-10 flex-col items-start group-hover:border-[#D4A017]">
                                    <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 hover:border-[#D4A017] hover:bg-[#1a1a1a] transition-all shadow-xl group">
                                        <span className="text-4xl font-black text-[#D4A017] opacity-80 group-hover:opacity-100">{step.num}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                                        {step.desc}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
