"use client";

import { useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

function useMousePosition(
    ref: React.RefObject<HTMLElement | null>,
    callback?: ({ x, y }: { x: number; y: number }) => void,
) {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { top, left } = ref.current?.getBoundingClientRect() || {
                top: 0,
                left: 0,
            };

            callback?.({ x: clientX - left, y: clientY - top });
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (!event.touches[0]) return;
            const { clientX, clientY } = event.touches[0];
            const { top, left } = ref.current?.getBoundingClientRect() || {
                top: 0,
                left: 0,
            };

            callback?.({ x: clientX - left, y: clientY - top });
        };

        const node = ref.current;
        if (node) {
            node.addEventListener("mousemove", handleMouseMove);
            node.addEventListener("touchmove", handleTouchMove);
        }

        return () => {
            if (node) {
                node.removeEventListener("mousemove", handleMouseMove);
                node.removeEventListener("touchmove", handleTouchMove);
            }
        };
    }, [ref, callback]);
}

function calculateCardRotation({
    currentX,
    currentY,
    centerX,
    centerY,
    maxRotationX,
    maxRotationY,
}: {
    currentX: number;
    currentY: number;
    centerX: number;
    centerY: number;
    maxRotationX: number;
    maxRotationY: number;
}) {
    const deltaX = currentX - centerX;
    const deltaY = currentY - centerY;

    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const rotationFactor = distance / maxDistance;

    const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
    const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
    return { rotationX, rotationY };
}

interface SkewCardProps {
    children: React.ReactNode;
    className?: string;
    maxRotationX?: number;
    maxRotationY?: number;
}

export default function SkewCard({
    children,
    className,
    maxRotationX = 4,
    maxRotationY = 6
}: SkewCardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const resetRef = useRef<NodeJS.Timeout>(null);

    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        if (!containerRef.current) return;

        const { width, height } = containerRef.current.getBoundingClientRect();
        const { rotationX, rotationY } = calculateCardRotation({
            centerX: width / 2,
            centerY: height / 2,
            currentX: x,
            currentY: y,
            maxRotationX,
            maxRotationY,
        });

        containerRef.current.style.setProperty("--skew-x", `${rotationX}deg`);
        containerRef.current.style.setProperty("--skew-y", `${rotationY}deg`);
    }, [maxRotationX, maxRotationY]);

    useMousePosition(containerRef, update);

    return (
        <div
            ref={containerRef}
            className={cn(
                "transform-gpu transition-transform ease-linear will-change-transform",
                className,
            )}
            style={{
                transform: "perspective(1000px) rotateX(var(--skew-x, 0deg)) rotateY(var(--skew-y, 0deg))",
                transitionDuration: "100ms",
            } as React.CSSProperties}
            onMouseEnter={() => {
                resetRef.current = setTimeout(() => {
                    if (containerRef.current) {
                        containerRef.current.style.transitionDuration = "0ms";
                    }
                }, 150);
            }}
            onMouseLeave={() => {
                if (resetRef.current) clearTimeout(resetRef.current);
                if (containerRef.current) {
                    containerRef.current.style.transitionDuration = "150ms";
                    containerRef.current.style.setProperty("--skew-x", "0deg");
                    containerRef.current.style.setProperty("--skew-y", "0deg");
                }
            }}
        >
            {children}
        </div>
    );
}
