'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

const faqData = [
    {
        question: 'How much does drone filming cost in Tbilisi?',
        answer: 'Outdoor flight from 250 ₾. Indoor FPV from 350 ₾. Full shoot (outdoor + indoor) from 500 ₾. Final price depends on the task, location and scope.',
    },
    {
        question: 'What is FPV filming and how is it different from regular drone filming?',
        answer: 'FPV (First Person View) is a compact drone that flies inside spaces: through a restaurant hall, warehouse, showroom or workshop. The viewer experiences the space from inside, in motion. A regular drone shoots from outside and above - facade, territory, surroundings.',
    },
    {
        question: 'Do you work outside Tbilisi?',
        answer: 'Yes. We shoot across all of Tbilisi - Vake, Saburtalo, Mtatsminda, Didube, Gldani, Isani, Varketili. We travel across Georgia: Batumi, Kutaisi, Borjomi, Kazbegi and other locations. Travel outside Tbilisi is quoted separately.',
    },
    {
        question: 'Do you need a permit to fly a drone?',
        answer: 'Drone flights in Georgia are regulated by GCAA. We follow all regulations and check the shooting zone in advance. If the location is near an airport or in a restricted zone - we inform you before the visit.',
    },
    {
        question: 'What format will I receive the files in?',
        answer: 'Video in MP4, 4K resolution. Photos in high-res JPG. All files are delivered via cloud storage (Google Drive or similar) within 1-3 business days after the shoot.',
    },
    {
        question: 'How quickly will the result be ready?',
        answer: 'Original master footage - on the day of the shoot or the next day. An edited clip - within 3-5 business days. Timelines can be adjusted by agreement.',
    },
    {
        question: 'Do you only shoot for real estate?',
        answer: 'No - we have 18 shooting directions. We work with restaurants, hotels, construction, tourism, object inspection, sports, winemaking and other niches. If you do not see your direction - just describe the task and we will find the right format.',
    },
    {
        question: 'Can I order photos only, without video?',
        answer: 'Yes. Aerial photography is a standalone service. Let us know when you submit a request that you need photos only - we will adjust the visit format and pricing.',
    },
];

export function DroneFAQExpandedEn() {
    return (
        <DebugWrapper id={10800} label="Drone FAQ Section">
            <section className="bg-[#0D0D0D] py-10 md:py-24" id="faq">
                <div className="container mx-auto max-w-3xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center md:mb-16"
                    >
                        <DebugWrapper id={10801} label="FAQ Header">
                            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                                Frequently asked questions
                            </h2>
                        </DebugWrapper>
                        <div className="mx-auto h-1 w-12 bg-[#D4A017]"></div>
                    </motion.div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <DebugWrapper key={index} id={10810 + index} label={`FAQ Item ${index + 1}`}>
                                <motion.details
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A017]/50"
                                >
                                    <summary className="list-none flex items-center justify-between font-bold text-sm uppercase tracking-widest text-white/90 transition-colors group-open:text-[#D4A017]">
                                        {item.question}
                                        <span className="text-xl text-[#D4A017] transition-transform duration-300 group-open:rotate-180">
                                            ↓
                                        </span>
                                    </summary>
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed text-gray-400"
                                    >
                                        {item.answer}
                                    </motion.p>
                                </motion.details>
                            </DebugWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
