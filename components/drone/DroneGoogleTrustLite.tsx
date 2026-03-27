import React from 'react';
import type { DroneDirectionGoogleTrustConfig } from '@/constants/droneDirectionPages';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

type DroneGoogleTrustLiteProps = {
    googleTrust: DroneDirectionGoogleTrustConfig;
};

export const DroneGoogleTrustLite = ({ googleTrust }: DroneGoogleTrustLiteProps) => {
    return (
        <DebugWrapper id={10750} label="Google Trust Lite Section">
            <section className="py-20 bg-[#0D0D0D] border-y border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4A017] font-bold">
                            {googleTrust.heading}
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <DebugWrapper id={10751} label="Google Trust Rating">
                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-8">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">Google Reviews</p>
                                <div className="flex items-end gap-4 mb-4">
                                    <span className="text-5xl font-bold text-white">{googleTrust.rating}</span>
                                    <span className="text-sm text-[#D4A017] pb-1">из 5.0</span>
                                </div>
                                <p className="text-sm text-gray-300 mb-6">{googleTrust.reviewsText}</p>
                                <a
                                    href={googleTrust.profileUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-5 py-3 rounded-[10px] border border-[#D4A017]/60 text-[#D4A017] text-[11px] uppercase tracking-[0.14em] font-bold hover:bg-[#D4A017] hover:text-black transition-colors"
                                >
                                    Открыть профиль
                                </a>
                            </article>
                        </DebugWrapper>

                        <DebugWrapper id={10752} label="Google Trust Map">
                            <article className="relative rounded-[12px] border border-[#2a2a2a] bg-[#111111] overflow-hidden min-h-[220px]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(212,160,23,0.14),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_50%)]" />
                                <div className="relative p-8 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">Google Maps Area</p>
                                        <h3 className="text-xl font-bold text-white">{googleTrust.mapTitle}</h3>
                                        <p className="text-sm text-gray-300 mt-2">{googleTrust.mapAddress}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-8 leading-relaxed">{googleTrust.mapHint}</p>
                                </div>
                            </article>
                        </DebugWrapper>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
};
