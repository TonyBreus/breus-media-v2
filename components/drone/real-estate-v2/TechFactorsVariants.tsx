import React from 'react';
import { techFactors } from './techFactorsData';

export const TechFactorsAccordion = () => {
    return (
        <div className="flex flex-col gap-4">
            {techFactors.map((section, idx) => (
                <details 
                    key={idx}
                    className="group rounded-[16px] border border-[#2a2a2a] bg-[#141414] open:bg-[#1a1a1a] transition-colors"
                >
                    <summary className="flex cursor-pointer items-center justify-between p-5 md:p-6 list-none font-bold text-white text-lg [&::-webkit-details-marker]:hidden">
                        {section.category}
                        <span className="text-[#D4A017] group-open:rotate-180 transition-transform duration-300">
                            ↓
                        </span>
                    </summary>
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                            {section.items.map((item) => (
                                <li key={item.id} className="rounded-[12px] border border-white/10 bg-white/5 p-4">
                                    <h4 className="font-semibold text-white mb-1.5 text-sm">{item.label}</h4>
                                    <p className="text-xs text-white/60 leading-relaxed">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            ))}
        </div>
    );
};

export const TechFactorsTable = () => {
    return (
        <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] overflow-hidden">
            <div className="bg-[#1a1a1a] p-4 text-center border-b border-[#2a2a2a] flex items-center justify-center gap-2">
                <span className="text-white/50 animate-pulse">⟷</span>
                <span className="text-xs uppercase tracking-widest font-bold text-white/70">Свайпайте влево-вправо для сравнения параметров</span>
                <span className="text-white/50 animate-pulse">⟷</span>
            </div>
            <div className="overflow-x-auto pb-4 custom-scrollbar">
                <table className="w-full min-w-[800px] text-left border-collapse">
                    <thead>
                        <tr>
                            {techFactors.map((section, idx) => (
                                <th key={idx} className="p-5 font-bold text-white border-b border-[#2a2a2a] bg-[#1a1a1a]/50 text-sm w-1/4 align-top">
                                    <div className="text-[#D4A017] mb-2">{idx + 1}.</div>
                                    {section.category}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* We have up to 8 items per section. We need to render rows. */}
                        {Array.from({ length: 8 }).map((_, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                {techFactors.map((section, colIndex) => {
                                    const item = section.items[rowIndex];
                                    return (
                                        <td key={colIndex} className="p-4 align-top">
                                            {item ? (
                                                <div>
                                                    <h4 className="font-semibold text-white mb-1.5 text-xs">{item.label}</h4>
                                                    <p className="text-[11px] text-white/50 leading-relaxed">{item.text}</p>
                                                </div>
                                            ) : null}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
