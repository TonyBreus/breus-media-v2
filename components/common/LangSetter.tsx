'use client';

import { useEffect } from 'react';

export default function LangSetter({ lang }: { lang: 'ru' | 'en' | 'ka' }) {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    return null;
}
