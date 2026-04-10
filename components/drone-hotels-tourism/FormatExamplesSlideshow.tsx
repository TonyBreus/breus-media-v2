'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import slideOne from '@/services-images/drone-hotels-tourism/final/1.png';
import slideTwo from '@/services-images/drone-hotels-tourism/final/2.png';
import slideThree from '@/services-images/drone-hotels-tourism/final/3.png';

const slides = [slideOne, slideTwo, slideThree];

type FormatExamplesSlideshowProps = {
    altTexts?: string[];
};

export function FormatExamplesSlideshow({ altTexts }: FormatExamplesSlideshowProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, 3000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="relative aspect-video w-full">
            {slides.map((slide, index) => (
                <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide}
                        alt={altTexts?.[index] ?? `Пример аэросъёмки отеля ${index + 1}`}
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
