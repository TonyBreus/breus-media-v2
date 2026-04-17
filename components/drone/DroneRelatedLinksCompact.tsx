import React from 'react';
import Link from 'next/link';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import type { DroneDirectionRelatedLink } from '@/constants/droneDirectionPages';

type DroneRelatedLinksCompactProps = {
    links: DroneDirectionRelatedLink[];
    title?: string;
};

export const DroneRelatedLinksCompact = ({
    links,
    title = 'Другие услуги Breus Media',
}: DroneRelatedLinksCompactProps) => {
    return (
        <DebugWrapper id={10850} label="Related Links Section">
            <section className="py-16 bg-[#080808] border-t border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {links.map((link, idx) => (
                            <DebugWrapper key={link.href} id={10860 + idx} label={`Related Link: ${link.title}`}>
                                <Link
                                    href={link.href}
                                    className="block rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5 hover:border-[#D4A017]/70 transition-colors"
                                >
                                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-white mb-2">{link.title}</p>
                                    <p className="text-xs leading-relaxed text-gray-400">{link.description}</p>
                                </Link>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
