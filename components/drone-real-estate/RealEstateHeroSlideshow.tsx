'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
    '/media/drone-service/real-estate-1.png',
    '/media/drone-service/drone-facade-2.png',
    '/media/drone-service/construction-monitoring-1.png',
];

export function RealEstateHeroSlideshow() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
        }, 5000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div aria-hidden className="absolute inset-0 overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        activeIndex === index ? 'opacity-35' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url('${slide}')` }}
                />
            ))}
        </div>
    );
}
