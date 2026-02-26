"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Animated Counter ── */
function Counter({
    value,
    prefix = "",
    suffix = "",
}: {
    value: number;
    prefix?: string;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (v) => Math.round(v));

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animate(motionVal, value, { duration: 1.8, ease: "easeOut" });
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [motionVal, value, hasAnimated]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (v) => {
            if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`;
        });
        return unsubscribe;
    }, [rounded, prefix, suffix]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}0{suffix}
        </span>
    );
}

/* ── Data ── */
const stats = [
    {
        value: 30,
        prefix: "+",
        suffix: "%",
        label: "Быстрее закрывается сделка",
        color: "from-[#00D4FF] to-[#0066FF]",
    },
    {
        value: 87,
        prefix: "",
        suffix: "%",
        label: "Инвесторов принимают решение по визуалу",
        color: "from-[#B026FF] to-[#FF006E]",
    },
    {
        value: 48,
        prefix: "",
        suffix: "h",
        label: "Скорость отдачи материалов",
        color: "from-[#00D4FF] to-[#0066FF]",
    },
];

export default function ROINumbers() {
    return (
        <section className="py-24 md:py-32 bg-gray-800 text-gray-50 relative overflow-hidden">
            {/* Ambient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#00D4FF] mb-3 block">
                        ROI
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Цифры, которые{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF006E]">
                            говорят сами
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="text-center"
                        >
                            <span
                                className={`block text-6xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-4`}
                            >
                                <Counter
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                />
                            </span>
                            <span className="text-sm text-gray-400 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
