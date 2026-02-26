"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    id: string;
    title: string;
    duration: string;
    description: string;
    icon?: React.ReactNode;
}

export default function ServiceCard({ id, title, duration, description, icon }: ServiceCardProps) {
    return (
        <motion.div
            id={id}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-2xl bg-dark-surface border border-white/5 hover:border-brand/50 transition-all overflow-hidden"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-xl text-brand group-hover:text-white group-hover:bg-brand transition-colors">
                        {icon}
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-mono text-gray-500 bg-black/30 px-2 py-1 rounded-md border border-white/5">
                        <Clock className="w-3 h-3" />
                        <span>{duration}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{description}</p>

                <Link
                    href={`#contact?service=${encodeURIComponent(title)}`}
                    className="inline-flex items-center text-sm font-semibold text-white border-b border-white/20 pb-1 group-hover:border-brand group-hover:text-brand transition-all w-fit"
                >
                    Запросить
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
