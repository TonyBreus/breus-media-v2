'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80',
];

export function HeroSlideshow() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
        }, 4000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div aria-hidden className="absolute inset-0">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        activeIndex === index ? 'opacity-30' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url('${slide}')` }}
                />
            ))}
        </div>
    );
}
