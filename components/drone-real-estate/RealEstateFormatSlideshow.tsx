'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type RealEstateFormatSlideshowProps = {
    slides: StaticImageData[];
    altTexts?: string[];
};

export function RealEstateFormatSlideshow({ slides, altTexts }: RealEstateFormatSlideshowProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!slides || slides.length <= 1) return;
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 3500);

        return () => window.clearInterval(intervalId);
    }, [slides]);

    return (
        <div className="relative aspect-video w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide}
                        alt={altTexts?.[index] ?? `Пример аэросъёмки недвижимости ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1100px"
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
