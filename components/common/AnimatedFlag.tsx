import React from 'react';
import Image from 'next/image';
import flagBadge from '@/services-images/gazeta/flag-badge.png';

type AnimatedFlagProps = {
    className?: string;
};

export const AnimatedFlag = ({ className = '' }: AnimatedFlagProps) => {
    return (
        <div className={`flag-wave relative w-[64px] flex-shrink-0 overflow-visible bg-transparent p-0 ${className}`}>
            <Image
                src={flagBadge}
                alt="Флаг Грузии"
                width={64}
                height={42}
                sizes="64px"
                className="h-auto w-full object-contain p-0 mix-blend-screen"
                aria-label="Грузинский флаг"
            />
            <style jsx>{`
                .flag-wave {
                    transform-origin: left center;
                    animation: flag-wave 3.8s ease-in-out infinite;
                    will-change: transform;
                }

                @keyframes flag-wave {
                    0%,
                    100% {
                        transform: perspective(180px) rotateY(0deg) skewY(0deg) translateY(0);
                    }
                    25% {
                        transform: perspective(180px) rotateY(-2.2deg) skewY(-0.6deg) translateY(-0.5px);
                    }
                    50% {
                        transform: perspective(180px) rotateY(2.8deg) skewY(0.8deg) translateY(-1px);
                    }
                    75% {
                        transform: perspective(180px) rotateY(-1.8deg) skewY(-0.4deg) translateY(-0.3px);
                    }
                }
            `}</style>
        </div>
    );
};
