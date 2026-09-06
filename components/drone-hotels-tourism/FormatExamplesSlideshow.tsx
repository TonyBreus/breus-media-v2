'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import slideOne from '@/services-images/drone-hotels-tourism/final/1.png';
import slideTwo from '@/services-images/drone-hotels-tourism/final/2.png';
import slideThree from '@/services-images/drone-hotels-tourism/final/3.png';

const slides = [slideOne, slideTwo, slideThree];

type FormatExamplesSlideshowProps = {
    altTexts?: string[];
    slidesOverride?: any[];
};

export function FormatExamplesSlideshow({ altTexts, slidesOverride }: FormatExamplesSlideshowProps) {
    const activeSlides = slidesOverride && slidesOverride.length > 0 ? slidesOverride : slides;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % activeSlides.length);
        }, 3000);

        return () => window.clearInterval(intervalId);
    }, [activeSlides.length]);

    return (
        <div className="relative aspect-video w-full">
            {activeSlides.map((slide, index) => (
                <div
                    key={slide.src || index}
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
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 z-10">
                {activeSlides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Показать слайд ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'w-6 bg-[#FFD23F]' : 'w-2 bg-white/40 hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
