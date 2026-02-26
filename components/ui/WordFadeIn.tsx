"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a utility for merging classes

interface WordFadeInProps {
    words: string;
    className?: string;
    delay?: number;
    variants?: Variants;
}

export default function WordFadeIn({
    words,
    delay = 0.15,
    variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * delay },
        }),
    },
    className,
}: WordFadeInProps) {
    const _words = words.split(" ");

    return (
        <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            className={cn(
                "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
                className,
            )}
        >
            {_words.map((word, i) => (
                <motion.span key={word} variants={variants} custom={i} className="inline-block mr-[0.2em] last:mr-0">
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
