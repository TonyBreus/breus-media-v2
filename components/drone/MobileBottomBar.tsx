'use client';

import { useEffect, useState } from 'react';

type MobileBottomBarProps = {
    primaryLabel?: string;
    contactHref?: string;
    whatsappHref?: string;
    telegramHref?: string;
};

export function MobileBottomBar({
    primaryLabel = 'Обсудить задачу',
    contactHref = '#contact',
    whatsappHref = 'https://wa.me/995501103183',
    telegramHref = 'https://t.me/breusmedia',
}: MobileBottomBarProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const form = document.querySelector('#contact-form');
        if (!form) return;
        const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.1 });
        observer.observe(form);
        return () => observer.disconnect();
    }, []);

    return null;
}
